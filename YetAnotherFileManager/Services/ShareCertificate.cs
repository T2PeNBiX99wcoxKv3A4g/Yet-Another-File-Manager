using System.Net;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using PhotinoNetUtils;
using PhotinoNetUtils.Utils;

namespace YetAnotherFileManager.Services;

/// <summary>
///     The certificate the share server presents when HTTPS is switched on: one made for this
///     computer, kept so every start shows the same thing and the browser's exception is asked once.
/// </summary>
/// <remarks>
///     Nothing can vouch for a machine that has no name on the internet, so the certificate is
///     self-signed and browsers warn about it. The names it carries are the ones a phone on the
///     same network might type: the computer's own name, "&lt;name&gt;.lan", localhost and every
///     address the machine holds - which also means a new address needs the file removed to be
///     covered again.
/// </remarks>
[Singleton]
internal partial class ShareCertificate
{
    private static readonly string FilePath = Path.Combine(Constants.SettingsDirectory, "share-certificate.pfx");

    private X509Certificate2? _current;

    /// <summary>The certificate, made and stored on first use.</summary>
    public X509Certificate2 Current => _current ??= Loaded() ?? Made();

    private static X509Certificate2? Loaded() =>
        Try.Run(() => !File.Exists(FilePath)
                ? null
                : X509CertificateLoader.LoadPkcs12(File.ReadAllBytes(FilePath), null,
                    X509KeyStorageFlags.Exportable))
            .OnFailure(ex => Serilog.Log.Warning(ex, "Could not read {File}", FilePath))
            .GetOrNull();

    private static X509Certificate2 Made()
    {
        using var key = RSA.Create(2048);
        var name = Environment.MachineName;

        var request = new CertificateRequest($"CN={name}", key, HashAlgorithmName.SHA256,
            RSASignaturePadding.Pkcs1);

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

        Serilog.Log.Information("Made a self-signed share certificate for {Name}", name);
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
