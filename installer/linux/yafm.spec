# Only the version is filled in by installer/linux/build-rpm.sh; everything else is fixed.
%global debug_package %{nil}
# The published executable is already a self-contained, single-file binary.
%global __os_install_post %{nil}

Name:           yafm
Version:        @VERSION@
Release:        1%{?dist}
Summary:        Tabbed file manager with previews, a gallery and a recycle bin

License:        MIT
URL:            https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager
Source0:        %{name}-%{version}.tar.gz

BuildArch:      x86_64

# What the self-contained .NET runtime and the embedded Photino browser need at run time.
Requires:       gtk3
Requires:       webkit2gtk4.1
Requires:       libnotify
Requires:       libicu
Requires:       openssl-libs
Requires:       zlib
Requires:       krb5-libs
Requires:       fontconfig
Requires:       freetype

%description
Yet Another File Manager browses folders in a list or a grid, previews pictures,
video and documents beside them, and keeps a search, a gallery, a recycle bin
and per-folder tags in the same window.

%prep
%autosetup -n %{name}-%{version}

%install
install -Dpm 0755 YetAnotherFileManager %{buildroot}/opt/YetAnotherFileManager/YetAnotherFileManager
install -Dpm 0755 libyafm_native.so %{buildroot}/opt/YetAnotherFileManager/libyafm_native.so
install -Dpm 0644 yafm.desktop %{buildroot}%{_datadir}/applications/yafm.desktop
install -Dpm 0644 yafm.png %{buildroot}%{_datadir}/icons/hicolor/256x256/apps/yafm.png

mkdir -p %{buildroot}%{_bindir}
ln -s /opt/YetAnotherFileManager/YetAnotherFileManager %{buildroot}%{_bindir}/yafm

%post
# The desktop entry and the icon are new; refresh the caches that hold them.
update-desktop-database >/dev/null 2>&1 || :
gtk-update-icon-cache --quiet %{_datadir}/icons/hicolor >/dev/null 2>&1 || :
touch --no-create %{_datadir}/icons/hicolor >/dev/null 2>&1 || :

%postun
update-desktop-database >/dev/null 2>&1 || :
gtk-update-icon-cache --quiet %{_datadir}/icons/hicolor >/dev/null 2>&1 || :
touch --no-create %{_datadir}/icons/hicolor >/dev/null 2>&1 || :

%files
/opt/YetAnotherFileManager/YetAnotherFileManager
/opt/YetAnotherFileManager/libyafm_native.so
%{_bindir}/yafm
%{_datadir}/applications/yafm.desktop
%{_datadir}/icons/hicolor/256x256/apps/yafm.png

%changelog
* Wed Nov 04 2026 yukiyosanako <yukiyosanako@users.noreply.github.com> - @VERSION@-1
- Package the published Yet Another File Manager build.
