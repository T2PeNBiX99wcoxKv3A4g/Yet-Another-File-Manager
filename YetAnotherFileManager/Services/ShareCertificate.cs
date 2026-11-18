using System.Net;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using PhotinoNetUtils;
using PhotinoNetUtils.Utils;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The certificate the share server presents when HTTPS is switched on. One is made for this
///     computer unless the user imports their own from their own certificate authority, and it is
///     kept so every start shows the same thing and the browser's exception is asked once.
/// </summary>
/// <remarks>
///     A certificate made here is self-signed and browsers warn about it. The names it carries are the
///     ones a phone on the same network might type: the computer's own name, "&lt;name&gt;.lan",
///     localhost and every address the machine holds - which also means a new address needs the file
///     removed to be covered again. A certificate imported from a real authority needs none of that
///     warning, provided the name it was issued for is the one the phone opens.
/// </remarks>
[Singleton]
internal partial class ShareCertificate
{
    private static readonly string FilePath = Path.Combine(Constants.SettingsDirectory, "share-certificate.pfx");

    private X509Certificate2? _current;

    /// <summary>The certificate, made and stored on first use.</summary>
    public X509Certificate2 Current => _current ??= Loaded() ?? Made();

    /// <summary>What the switch would serve with, for the settings page.</summary>
    public ShareCertificateStatus Status()
    {
        var certificate = Current;

        return new(certificate.Subject,
            new DateTimeOffset(certificate.NotAfter.ToUniversalTime()).ToUnixTimeMilliseconds(),
            certificate.Issuer == certificate.Subject);
    }

    /// <summary>
    ///     Replaces the served certificate with one the user picked, kept without a password so the
    ///     settings file never has to hold one.
    /// </summary>
    public ShareCertificateStatus Import(string path, string? password)
    {
        using var picked = X509CertificateLoader.LoadPkcs12FromFile(path, password,
            X509KeyStorageFlags.Exportable);

        if (!picked.HasPrivateKey)
            throw new CryptographicException("The certificate holds no private key.");

        File.WriteAllBytes(FilePath, picked.Export(X509ContentType.Pfx));
        Forget();

        Serilog.Log.Information("Imported the share certificate {Subject}", picked.Subject);
        return Status();
    }

    /// <summary>Drops the stored certificate, so the next use makes a fresh one for this computer.</summary>
    public ShareCertificateStatus Reset()
    {
        Forget();
        Try.Run(() => File.Delete(FilePath))
            .OnFailure(ex => Serilog.Log.Warning(ex, "Could not delete {File}", FilePath));

        return Status();
    }

    private void Forget()
    {
        _current?.Dispose();
        _current = null;
    }

    private static X509Certificate2? Loaded()
    {
        var stored = Try.Run(() => !File.Exists(FilePath)
                ? null
                : X509CertificateLoader.LoadPkcs12(File.ReadAllBytes(FilePath), null,
                    X509KeyStorageFlags.Exportable))
            .OnFailure(ex => Serilog.Log.Warning(ex, "Could not read {File}", FilePath))
            .GetOrNull();

        if (stored is null)
            return null;

        // A certificate made with an RSA key is replaced by the ECDSA one; a phone that learned to
        // trust the old one asks once more.
        if (stored.GetECDsaPublicKey() is not null)
            return stored;

        stored.Dispose();
        return null;
    }

    private static X509Certificate2 Made()
    {
        using var key = ECDsa.Create(ECCurve.NamedCurves.nistP256);
        var name = Environment.MachineName;

        var request = new CertificateRequest($"CN={name}", key, HashAlgorithmName.SHA256);

        request.CertificateExtensions.Add(new X509BasicConstraintsExtension(false, false, 0, false));
        request.CertificateExtensions.Add(new X509KeyUsageExtension(
            X509KeyUsageFlags.DigitalSignature | X509KeyUsageFlags.KeyEncipherment, false));
        request.CertificateExtensions.Add(new X509EnhancedKeyUsageExtension(
            [new Oid("1.3.6.1.5.5.7.3.1")], false));
        request.CertificateExtensions.Add(new X509SubjectKeyIdentifierExtension(request.PublicKey, false));

        var names = new SubjectAlternativeNameBuilder();
        names.AddDnsName("localhost");
        names.AddDnsName(name);
        names.AddDnsName($"{name}.lan");
        names.AddIpAddress(IPAddress.Loopback);
        names.AddIpAddress(IPAddress.IPv6Loopback);

        foreach (var address in LocalAddresses())
            names.AddIpAddress(address);

        request.CertificateExtensions.Add(names.Build());

        using var made = request.CreateSelfSigned(DateTimeOffset.UtcNow.AddDays(-1),
            DateTimeOffset.UtcNow.AddYears(2));

        // A round trip through PFX gives the key a form Kestrel accepts on every platform.
        var bytes = made.Export(X509ContentType.Pfx);

        Try.Run(() =>
            {
                Directory.CreateDirectory(Constants.SettingsDirectory);
                File.WriteAllBytes(FilePath, bytes);
            })
            .OnFailure(ex => Serilog.Log.Warning(ex, "Could not write {File}", FilePath));

        Serilog.Log.Information("Made a self-signed ECDSA share certificate for {Name}", name);
        return X509CertificateLoader.LoadPkcs12(bytes, null, X509KeyStorageFlags.Exportable);
    }

    /// <summary>Every address this machine holds, so a phone can reach it under any of them.</summary>
    private static IEnumerable<IPAddress> LocalAddresses()
    {
        var list = Try.Run(() => Dns.GetHostAddresses(Dns.GetHostName())).GetOrElse(_ => []);

        return list.Where(address => address.AddressFamily is System.Net.Sockets.AddressFamily.InterNetwork
            or System.Net.Sockets.AddressFamily.InterNetworkV6 && !address.IsIPv6LinkLocal);
    }
}

/// <summary>What the settings page shows about the certificate in use.</summary>
internal sealed record ShareCertificateStatus(string Subject, long ExpiresAt, bool SelfSigned);
