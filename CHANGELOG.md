# Changelog

## [0.9.0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.8.0..v0.9.0) - 2026-11-14

### ⛰️  Features

- *(linux)* Navigate with the mouse's back and forward buttons - ([9d3693f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9d3693fec503c488cb06a41b489e8eaf6b5b2b39))

### 🐛 Bug Fixes

- *(linux)* Resolve handlers through GIO and write unquoted Exec lines - ([f87c7d8](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f87c7d8eb3d26333eb96e83aa7e531ac48669830))
- Open files again with the shell API that allows it - ([c36afd6](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c36afd66a76f008da3226cb5d4916013ff3566ef))

### 🚜 Refactor

- Keep UseShellExecute only where the shell is the point - ([9186bad](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9186badf6ad64ba31c96e2ee3c912b61673bdfcd))
- Open files through the one shell-start path - ([39caa64](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/39caa64cc30fe5f28c6abaca2460e58e40115348))

### Action

- Update version and update `CHANGELOG.md` - ([d3a9bb8](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d3a9bb868842fbcd32865ceb0597f510ec6594c4))


## [0.8.0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.7.2..v0.8.0) - 2026-11-14

### ⛰️  Features

- *(picker)* Add a save mode with a file name and overwrite confirmation - ([54ab5b4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/54ab5b4859de024564fd9bf19e1508483cc49a8e))
- *(windhawk)* Replace the classic file dialogs with the app picker - ([3b52667](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/3b526670d2d0a9d9f5fc992884b25ab80b22be02))
- *(windhawk)* Add a Replace Win+E switch - ([d8ac61c](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d8ac61cbb4b2bbab2f23b61d5e5ea4c6e56738ed))

### 🐛 Bug Fixes

- *(picker)* Reuse the name box for save mode - ([fa01e35](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/fa01e35fd1f97e0dfa8333eed129c36b360aa80c))

### ⚙️ Miscellaneous Tasks

- Update PhotinoNetUtils bridge to version 0.28.3 - ([de0f91f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/de0f91fedf0e16a72513402495c8830d901176c5))
- Update PhotinoNetUtils bridge to version 0.28.2 - ([a481eca](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/a481eca1887a6b80702835193c991ee5a4416c6e))

### Action

- Update version and update `CHANGELOG.md` - ([fa34e95](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/fa34e95e0487927f2a459c0445ddf9190752ebd1))


## [0.7.2](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.7.1..v0.7.2) - 2026-11-14

### 🐛 Bug Fixes

- *(windhawk)* Resolve the app on every Win+E instead of at mod load - ([1702d14](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1702d14f081f51c05566f32c89f392c652eafa6a))
- Show the window for every launch that is not the logon start - ([e19b548](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/e19b548a63c5b34c7f29e448aa11f14417cf4f6e))

### ⚙️ Miscellaneous Tasks

- Update PhotinoNetUtils bridge to version 0.27.0 - ([9d99516](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9d9951639d786e90efe4e0c0b9debcccbc06aa86))

### Action

- Update version and update `CHANGELOG.md` - ([bfa5cac](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/bfa5cac23f89750e39b5c36ae40dd9cdb4f8f92e))


## [0.7.1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.7.0..v0.7.1) - 2026-11-13

### 🐛 Bug Fixes

- *(ui)* Render the update changelog with the shared markdown component - ([fa3742d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/fa3742dd30a153e2d62e93df13b3b3e96489c613))
- *(ui)* Close every popup when the window loses focus - ([f551978](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f5519786ca2ec8e72d8356a6ca5cecfb9ddde4d3))
- *(ui)* Keep the recycle bin columns and details pane when it is empty - ([dd6be99](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/dd6be9901f805973c786e6c9ac04ee332ccc48d6))
- Remember the tabs that are actually open - ([b9729ab](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b9729ab16e1953bdd760d2ba145f01ef54c54c75))
- Run the startup task queries without a console window - ([0363566](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0363566e5624c1652016c70c09fb3c3310c4acb3))

### 🚜 Refactor

- Take the shared platform helpers from the library - ([b60c2af](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b60c2af0208c38e0e7a7e7cd3032fe84725db7bf))

### ⚙️ Miscellaneous Tasks

- Update PhotinoNetUtils bridge to version 0.26.1 - ([f81e53d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f81e53dbcc74afab5e94096505510fa194e38e40))
- Update PhotinoNetUtils bridge to version 0.26.0 - ([5382540](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/53825402499e27d6d1c4c73a1439e7a1ea35f577))

### Action

- Update version and update `CHANGELOG.md` - ([0148c18](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0148c18b6932f871659fc97ea4c81223cbb6a081))


## [0.7.0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.6.0..v0.7.0) - 2026-11-13

### ⛰️  Features

- *(ui)* Draw a light version of every built-in background - ([f76c53e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f76c53e1472b0bb488c8454440773859ebd5985a))
- *(ui)* Follow the system theme and give every palette a light version - ([20f4fac](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/20f4facf7cdf9ab6f3083df01ca344c3331176fe))
- Keep the settings in TOML and let the shared service own them - ([0a5149a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0a5149a42985d5cab0c08c97b7306e41b61582d4))
- Protect a path from every change, not just from deletion - ([1889fba](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1889fba74e6e66aed83c88d23e98780526c1b0d1))
- Run updates through the shared service and show a download panel - ([f970dfc](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f970dfce9bd32f147b1c8134b18ba19f7ca7beae))

### 🐛 Bug Fixes

- *(build)* Generate the settings types from the compiled model - ([f29e9d3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f29e9d30a3034e3a995163b0b7b35ae9150b0384))
- *(i18n)* Translate the share-mode label - ([657d7ae](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/657d7ae0d180732bc5806c77bdc7b117c7979fd9))
- Clear every build warning and add the Linux half of the shell features - ([3c4edd4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/3c4edd4fca4c6abe31729af3d87e36ac4c0de9dd))
- Show which copy owns the yafm:// links, like the other registrations - ([8566241](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8566241e50dd7468d7423adf1a9e36a5db5bc8f9))
- Keep the interface's stored layout across builds and launches - ([b0c374f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b0c374fbca44ad4ed5a14f7b3dab8f7fcfd8e318))
- Repair a dead folder registration at launch and share one instance again - ([17b28e3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/17b28e38d1832f73c7acc9d58e97323aa345531a))
- Let a copy keep its yafm:// and login registrations too - ([58dc034](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/58dc03409bbe020cf09ca926dc32e322571c74b6))
- Keep the folder handler on the build that was set, and mark debug builds - ([56aea3a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/56aea3acfd648a57d7784a382f49aa72a73fc0dd))
- Keep alpha in picture thumbnails and make the strip and the tray behave - ([719a4dd](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/719a4dd8f98d9e3fd652552c503dc160c1f03815))

### 🚜 Refactor

- *(i18n)* Use path-shaped keys and a real English file - ([03c167a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/03c167af829a65482078d98253378d1fb77af822))
- *(ui)* Take the i18n keys and system client from the shared bridge - ([dc1e74b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/dc1e74b0998ac806305f1128d3af4680f5641aea))
- Reuse the shared app.info handler and shortcut reader - ([ae1e2e0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/ae1e2e058d77a77adbd162111a61b97fee36b097))
- Generate the settings interface and build info from the shared library - ([27afe6f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/27afe6f0e99a743f2f5fcdd0cab1daebf5c373c8))
- Add global PhotinoNetUtils usings - ([63e2772](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/63e277223e0db7952698058a0bb8bb1ca49c7fdf))
- Take the settings instance from the shared base - ([938c165](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/938c16501c9bd90577567f4f015a0868c32c7785))
- Adopt the library's generated singletons and message dispatchers - ([fd6a4b4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/fd6a4b4a4b16efc7a9aa5aa245d8bee7e91a1461))
- Keep the interface's panel sizes in the app's own file - ([6a917e1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6a917e1c1c407013d3c5ac9eecf108b65c58134e))
- Write the registrations only when the setting changes - ([7a75c47](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7a75c47679f484629c6c2c00cf52be0e7797b786))
- Close a registry key before deleting its stale class - ([126224a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/126224a0115c15d11a9f8deb07d04563a1c59c11))

### 📚 Documentation

- *(i18n)* Replace the stale English-key comment - ([8f7c90f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8f7c90f4526aceff2e19823527032aa6d75d04e6))
- Describe every setting in the TOML file - ([7b776cf](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7b776cfe90d9090c05f53ac187911e200d0aac2f))

### ⚙️ Miscellaneous Tasks

- Update PhotinoNetUtils bridge to version 0.25.1 - ([61f44e8](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/61f44e87b957d7a5572fb7882e5c6f891e7275a8))
- Build with the .NET 11 SDK - ([5462708](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/5462708f10830b4f61434eb2e33963af94921a14))
- Update PhotinoNetUtils bridge to version 0.25.0 - ([9b8051e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9b8051e1c2ba787957005d1364e59b3e08234553))
- Update PhotinoNetUtils bridge to version 0.23.0 - ([bf1aae7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/bf1aae766c8162bd238cf9d4dea2bdb2c6662e79))
- Update the bridge to 0.22.0 and drop the app-side i18n wrapper - ([b8749a6](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b8749a632340d154ff0b8e0924ba1065c8e50391))
- Update PhotinoNetUtils bridge to version 0.21.0 - ([3295dc1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/3295dc1626fb781732f96e601dfa2ac516801f2d))
- Update PhotinoNetUtils bridge to version 0.20.2 - ([eaf89c3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/eaf89c3a438001922f3512cd4f56add23c590d83))
- Configure platform-specific settings codegen path - ([3e61c74](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/3e61c74d3729e12d52120c6ba652db3f398e6042))
- Update Photino-Net-Utils-Bridge to v0.20.0 and replace package file - ([30b7be1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/30b7be112d5ef082c7bcac0fd83ff10b893146b0))
- Update the shared generator - ([625bf05](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/625bf057e528af15e8991039d0272060532f8097))
- Update the shared generator - ([6e119c6](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6e119c6bb2e229cfdf31b6cdd1261fe314e4b280))
- Update the shared generator - ([91f77b3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/91f77b3063613fb36b6d3ee9ee135e24d14f8ed1))
- Update the shared generator - ([be63619](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/be636194e441f29bcdce3361de5aadb9f74034f4))
- Update the shared generator - ([8e098b0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8e098b04f324cab84ebd1c12e2a2af2b9e46e9d3))
- Update the shared generator - ([0ee4106](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0ee410681ef3e6d53a0530d1902fce20bd4d90bb))
- Update the shared generator - ([b143c63](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b143c638f34a2c0624e2129e07c827b982a35fd3))
- Update the shared generator - ([6aea357](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6aea357e7fe4821ad79dd0351976fd29f69e9393))
- Update the shared generator - ([fcf015f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/fcf015fe67e3ea57790dd3f5ed2447e40f50d747))
- Validate every translation file - ([2a25e7f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/2a25e7f65229df72fa70844b5ddfccc7c7659c9d))
- Adopt the shared analyzers - ([c0f79a5](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c0f79a5c7a1237d24bffe68aa46d904f13dbb134))
- Add the shared source generator - ([1ac9ff4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1ac9ff40bc902fd3ae20113861de232998022f5f))
- Move the app to .NET 11 - ([43e0009](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/43e0009a0874705ad22013761f969c0564dd50c7))
- Update Photino-Net-Utils-Bridge to v0.17.0 and replace package file - ([5153a2a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/5153a2a3b4a798bc146de336205562b87561b22a))
- Update Photino-Net-Utils-Bridge to v0.16.1 and replace package file - ([dc952bc](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/dc952bcd5ad4ac2384f4825ad56fda8dd9d4888d))
- Update Photino-Net-Utils-Bridge to v0.16.0 and replace package file - ([d6c63f7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d6c63f77d0f646a007a0f109973f8fe50b878e43))
- Bump the nuget group with 1 update - ([a4eb0db](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/a4eb0db2d7eb4139d9e9c5c6e9f5d49ade864ca1))

### Action

- Update version and update `CHANGELOG.md` - ([5afbae8](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/5afbae8a9fd5dc113120c02670e733b497d10161))


## [0.6.0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.5.1..v0.6.0) - 2026-11-11

### ⛰️  Features

- Select the entries a paste created - ([c2cd4c6](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c2cd4c6f78960d6e7efa9a07826f506ecba7cc28))
- Move shared folders under yafm:// and copy real files from them - ([1e4fe5b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1e4fe5b668527def4704c5a36c8c3d36bb33ad0a))

### 🐛 Bug Fixes

- Keep the select-match check upright and offer it wherever files are listed - ([9522cad](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9522cad74818ceaf4f4cc73f9a6c43096042443d))
- Open the folder search, show the wallpaper through picture tiles, and select every match - ([4c8f921](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4c8f9218526d5416cae62fb02e78fbe569f86c6c))

### 🚜 Refactor

- Accept only yafm://share, not the old share scheme - ([8ae420a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8ae420a4cbdf063a8f70b3032abc54229ee2c0ab))

### Action

- Update version and update `CHANGELOG.md` - ([67e8ee3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/67e8ee30f07a86a9b2681375836177bc95c3ec5c))


## [0.5.1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.5.0..v0.5.1) - 2026-11-10

### 🐛 Bug Fixes

- Make the folder-handler toggle rewrite a registration from another copy - ([d63c07f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d63c07fbb11c36d5d71ac0fd6bb8bfe11f356487))

### Action

- Update version and update `CHANGELOG.md` - ([bb0f3ea](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/bb0f3eaab188801303da644b989fc52e1b539923))


## [0.5.0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.4.3..v0.5.0) - 2026-11-10

### ⛰️  Features

- Follow the elevated copy's progress and extract archives with it - ([7c8e8d6](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7c8e8d616165ed6d1ebb687172f259958e2e14b1))
- Let undo and redo of elevated operations ask for the same rights - ([0913e48](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0913e48394c055dd41f3431cb1bb06e2f8ae6c7a))
- Ask Windows for elevation when a folder refuses a change - ([2e3df57](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/2e3df57cf22593ecdfaf9ec287d271991e87faae))
- Give Win+E to the app with a Windhawk mod - ([aa9df38](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/aa9df3891f697f665f3ce21a0fd0369f1338466c))

### 🐛 Bug Fixes

- Let the wallpaper show through the details pane - ([32cf198](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/32cf198e40fd2176d5aa5519228417cdaf831921))

### 🚜 Refactor

- Run elevated file operations in the app instead of the shell - ([1e03646](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1e0364676b34da85b43c9466d5cf5d33e169989d))

### ⚙️ Miscellaneous Tasks

- Update Photino-Net-Utils-Bridge to v0.15.2 and replace package file - ([bd538c9](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/bd538c98f3fb73743c8b512abfcb9aa9ccd42640))
- Update Photino-Net-Utils-Bridge to v0.15.1 and upgrade Site dependencies - ([16c33e1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/16c33e1f6dc557501fd7017501115fafbe3bd984))
- Bump Microsoft.Extensions.FileProviders.Embedded from 10.0.15 to 11.0.0 - ([9e9eca3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9e9eca3a089a8e3774135d799d8b57f7cd9c6fa9))
- Bump System.Drawing.Common from 10.0.15 to 11.0.0 - ([fa926d1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/fa926d17614aef6645f9fbef369cd686f5ab2f2e))
- Bump Microsoft.Data.Sqlite from 10.0.15 to 11.0.0 - ([7b9454e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7b9454e0826fdf78d44d1853ca26921841956a0c))
- Bump the nuget group with 3 updates - ([53b88eb](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/53b88eb1a9aad84a93dabfc57abd8930819e8fda))

### Action

- Update version and update `CHANGELOG.md` - ([24fd157](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/24fd15750bce424c18a4db655ff7b56931ffb669))


## [0.4.3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.4.2..v0.4.3) - 2026-11-10

### ⚙️ Miscellaneous Tasks

- Update Photino-Net-Utils-Bridge to v0.14.0 and replace package file - ([2d75ef9](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/2d75ef91ceb2417b533024297dcd14c8b99a2943))

### Action

- Update version and update `CHANGELOG.md` - ([1a1a800](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1a1a8000c78643ff059bcc91fc8d5fa6d07b9fa3))


## [0.4.2](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.4.1..v0.4.2) - 2026-11-10

### 🐛 Bug Fixes

- Report startup as none when the login entry starts another copy - ([fa3af7e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/fa3af7eaae3a7e23c78b3a9368d5b4cb956fd7ef))
- Give the Linux sidebar its XDG folders, Downloads included - ([9eae1c7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9eae1c7768420a691e7c82b1e981939bd3e74055))

### Action

- Update version and update `CHANGELOG.md` - ([9540520](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/954052099ede320a1841795616a688d0d8dab379))


## [0.4.1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.4.0..v0.4.1) - 2026-11-10

### 🐛 Bug Fixes

- Restore the overview panels' contents, not just their layout - ([64b8a38](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/64b8a38d9bb457b4d6e0870f04797b82cb77543d))

### Action

- Update version and update `CHANGELOG.md` - ([df75ea9](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/df75ea9c09246383dd321867bfcdcb5b42c3088b))


## [0.4.0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.3.0..v0.4.0) - 2026-11-10

### ⛰️  Features

- Reset every column width from the view menu, and stack the picker's type box under the name - ([ce65a45](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/ce65a4571046113e56f7766fcd5ea4933907a465))
- Drag a list header to resize its column - ([8b8fced](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8b8fcedc5e62982812636196d667388d67328b1d))

### 🐛 Bug Fixes

- Let the list fill the window when the details pane is closed, and name the width reset for what it does - ([8827962](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8827962223a91e33462360045ca464fa680a6f7f))
- Move column room between neighbours instead of growing the row - ([820ac30](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/820ac30af63968aecc82e800911e3b4668915be7))
- Resize the column under the pointer - ([95a1dfe](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/95a1dfe9bb990a1ab823c14dccb33af80fea167c))

### 📚 Documentation

- List only what the explorer cannot do, and lead with the file tray - ([138e7e0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/138e7e0bfde1fd6ffc2256b1fefd146ccaee7603))
- Rewrite the readmes around what the app does now - ([160dad0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/160dad0b13330216ae682a274493bcf18cd3d27f))
- Stop advertising the interface languages in the readmes - ([2cdc6bf](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/2cdc6bf92be013471456fb3d514e63d843799c83))

### ⚙️ Miscellaneous Tasks

- Improve table formatting and spacing across multilingual READMEs - ([c3b3867](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c3b3867b6ba9f3984195ef51f7ec31b694a8884a))
- Improve table formatting and consistency across multilingual READMEs - ([2ca6c98](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/2ca6c98f03b0ea92eb68311f34ca2024948852e5))

### Action

- Update version and update `CHANGELOG.md` - ([a414316](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/a4143166f89c210a20ab4ed584a38e4c73deb9a9))
- Update version and update `CHANGELOG.md` - ([3341651](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/334165120592be0bb1402259af87a4a8711fd1e1))


## [0.3.0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.2.1..v0.3.0) - 2026-11-09

### ⛰️  Features

- Mark cut entries and restore the default panels - ([6052c53](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6052c53ddb7756ffcd5a59308bed7d571a6ced0a))

### 🐛 Bug Fixes

- Give the duplicated translation keys one name each - ([3f55a07](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/3f55a075d391d03895fdc920e2f9819c4dad285f))
- Start scripts from their own folder - ([554fb18](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/554fb181e923a923c6ecb10d00a8214ea5bb2ebe))
- Keep one Start Menu shortcut, named after the app - ([79ae02c](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/79ae02c4ad80bca8849106ba0be09c295e30eae0))

### 📚 Documentation

- Mention the restore-default-panels button - ([1da382f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1da382fd4fcdf7d4985f69c4c513350e6a8dc993))
- Shorten the site description - ([27dc9bb](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/27dc9bbcdc631d18b119e3b69da340583708ec03))
- Cover sharing, the file tray and the missing menu actions - ([83f01c8](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/83f01c8b8770e1e10c02c8cd768f84a5e6715973))
- Bring the settings page in line with the app - ([1869463](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1869463e1f5bce21f3aa704ab7821b241d272e94))
- Cover archives on the site - ([86ade49](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/86ade49b8e5970fa37168087670a239951706672))

### ⚙️ Miscellaneous Tasks

- Update the vendored PhotinoNETUtils build - ([2aae4de](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/2aae4def36a9654ed4f1b3491e4f4e18af249b80))

### Action

- Update version and update `CHANGELOG.md` - ([9be447a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9be447aab36cfdb3b410728cf5d43a6789221026))


## [0.2.1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.2.0..v0.2.1) - 2026-11-09

### 🐛 Bug Fixes

- Build the installer with one file per component - ([f507c5b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f507c5b220b8c96bc5c9297316d4f91fdee5d7f5))

### 📚 Documentation

- Stop listing the languages in the site feature text - ([e4d7af0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/e4d7af0a9cdd695ab9cfd938656e38ccb9288772))

### ⚙️ Miscellaneous Tasks

- Drop the how-it-works section from the site - ([2c83a53](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/2c83a5355b04658efa8d37b78f2b8ba4752c187b))

### Action

- Update version and update `CHANGELOG.md` - ([4b30b20](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4b30b208e435d2197c731816e10e679bd0e6fe20))

## New Contributors ❤️

* @dependabot[bot] made their first contribution

## [0.2.0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.1.1..v0.2.0) - 2026-11-09

### ⛰️  Features

- Create ZIP and 7z archives in Rust - ([bf69a6e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/bf69a6ea97e07b8b1881b4b8c2eed4b355265f3a))
- Write XZ ZIPs without the 7-Zip command line - ([38a76f3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/38a76f3cf29158c6eaadfc7f0918b5d912778e48))
- Paste clipboard text and images as files - ([bf91d82](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/bf91d82b44880968b8b136d27aa88fbb5201e79a))
- Offer folder actions on the empty file view - ([adebc69](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/adebc69e07ae8e79c07e5fd78341213cae401ba8))
- Add a log folder shortcut and polish favorites and archive labels - ([d1e3768](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d1e37682a371ee4f9e9383fccb3cbe665a6979e9))
- Filter folder open-with apps and toggle favorites in the menu - ([42fe0dd](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/42fe0ddba8020f95e53b9b9d61d0614d7a81257e))
- Add archive extraction actions to the file context menu - ([92a3fa4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/92a3fa466957ffa2375a81fc234ce44d09690942))
- Clear archive temporary files when the last tab closes - ([7c90631](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7c906310b2a102bb9033da84a9862321a458a984))
- Show encrypted archive hints and restyle link targets - ([7de2d6f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7de2d6f0dac58a681199a171e716f411745184de))
- Mark encrypted archives and add a favorites overview panel - ([9068a02](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9068a02e3fe6f7c09f2cd1d07fd1731bcdbd113b))
- Polish the web share page and tighten the overview overlap - ([7d39e68](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7d39e68bed457ed57c203d77956e72621385240d))
- Add startup options, title bar badges and a browser share UI - ([fb8f5e9](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/fb8f5e963832d9c8b2d1e9f94137e617c5901ebf))
- Restyle the overview banner and add custom fonts and LAN sharing - ([2bb28c4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/2bb28c43d270b88b38a31749e1f8e8a58b6b4d3a))
- Add a banner framing editor and continuous scroll drift - ([01da617](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/01da61769c7a281a9188a7b74e2e52b69a364e9d))
- Open nested archives and add a scroll banner effect - ([7704986](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7704986eaca2d22e0cc3d7aff1c29765039075ac))
- Add built-in banner choices and custom banner removal - ([d357e23](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d357e23252bd8ee5fc962c4c15b308ba7be943b9))
- Polish the overview banner and picker views - ([0ddf9c3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0ddf9c33ec0282b9e2c4e41d12bf8acd2cffabc7))
- Reuse the full directory menu in the address bar and add banner choices - ([aa08a23](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/aa08a2359c40c151a93d0489aaf6b999afecc427))
- Add ZIP XZ and split creation, picker previews - ([624fc09](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/624fc0938a09eb9daeae06ba849929f591c618df))
- Polish menus, links, previews and overview banner - ([6e73169](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6e73169832ab4380aefb5482fc1b7577e0c7550a))
- Add archive passwords and stronger Explorer handover - ([7bc961a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7bc961a79e9d2c9d6e1a644df1253a845f1c0563))
- Add a remembered link source and copy variants - ([ab5988c](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/ab5988ca9f073801478d0991f5203d6a05c89c0b))
- Read every 7-Zip container format through 7z.dll - ([d2368b4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d2368b4f6544a5b520bb82fa9e5c3b7a863595d4))
- Unify details, menus and archive support - ([3ba854e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/3ba854e768e2cbdec1286a0a2bdd318d97f8ac4d))
- Polish picker, gallery and archive toolbar - ([03ee837](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/03ee837cee94c085644d1ed0eed733585b61fb75))
- Improve archive editing, extraction and tab handling - ([181346d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/181346ded4f80d446ce918c43fa38be4a6183927))
- Register supported archive formats from settings - ([49a2938](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/49a293803d477f61c243cd30b73d02f639d347dc))
- Configure folder index blacklist - ([dd2b9ae](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/dd2b9ae4aa6a00bf3eaf4726d565521cb19b72df))
- Recover blank WebView and add tray reload - ([c104fe1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c104fe1977b704709a16a572140eb93b2d50b630))
- Add 7z as a compression format - ([323c9d0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/323c9d039d868469165c4689aa63924918c255e5))
- Add configurable compression and tab drop targets - ([7eca7df](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7eca7dfcffceb96c161bef2a1dc0b96e7110ea3c))
- Edit zip contents through a staged workspace - ([c8624a4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c8624a4fed08e3f4c3baa825d2bf49417f3f5387))
- Browse archives, create case-sensitive folders and links - ([248efd1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/248efd1d7c39ff9264d8f61f28c26172dea48a42))
- Share the file browser's search behaviour with every page - ([d9b2730](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d9b2730691b63075b93b87ec35c51233fe980cc6))
- Floating search for overview, gallery, recycle and settings - ([7db6371](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7db6371d686661e398d52823a96ad827acdacfc0))
- Configurable 24-hour and custom time formats - ([0344d0e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0344d0e2be9276a47ec134e09a56b54b3e4cd03f))
- Ctrl-click sidebar views into new tabs - ([a04d524](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/a04d524f709e15c23915e629e73ccc60108f2e2a))
- Full-path glob protection rules and restore defaults - ([3cb2f97](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/3cb2f979983d399fe282f034d67e540c0f85e605))
- Glob-style protection rules and a merged wallpaper gallery - ([7bf3530](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7bf35309a966c1dbab192c14f791636596550df1))
- Hold deletes inside protected folders behind a countdown - ([5bd0ae6](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/5bd0ae62297ed0bf0cad2adb0ab618413024e3ab))
- Wallpaper variants, built-in video loops and a standalone picker - ([0f781bd](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0f781bd5b36c4f74585fa2a0573a7df7b545df69))
- Add full-window wallpaper backgrounds - ([5656468](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/5656468062db811d587e1049047feb9427045f5f))
- Add operation history and unify creation menus - ([20abfde](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/20abfdeb7a84bfa7cc654a8136bd3c1a1d69623a))
- Share the file list, search and menus with the picker - ([774794e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/774794ef4cb3de0e35412ce12eb3a588f74ced09))
- Use the app sidebar and pages in the picker - ([ed3f502](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/ed3f502ce15d8bc3adc410ba82ea23ca4797223e))
- Add command-line pick modes and refine the picker - ([8e5ba30](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8e5ba30137d76acbdea36baadfe66e9eaf1ebf12))
- Extract shell menu icons and drop the last shell pickers - ([0261e87](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0261e87bc6cf0db46153ed2a6b5a00dfd2adde4a))
- Use the in-app picker for files too - ([73c2cab](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/73c2cabc9645df4a671e9a0d9aee0566a42f8ea0))
- Read the full shell menu in a native Rust helper - ([1ca755d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1ca755de74025ebcca7872db9f367fb62084377f))
- Add the yafm command, default manager, and folder picker - ([cfabab5](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/cfabab58ba7c005268757e86164285f7cce85c08))
- Share files with the Linux clipboard and use KDE icons - ([e7efd11](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/e7efd110f772aea4e832a4748d67903fcfecc30b))
- Complete the tray, address bar, motion, and Linux support - ([15e7817](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/15e7817ec8ddfd08d4065d10c2474cb1afc3508b))
- Add a settings entry to the tray menu - ([c7d2066](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c7d20669237fe02b461ba3dd8298cb9328e45411))
- Honour the recycle bin policy and recycle long paths - ([c4551b7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c4551b7b99a5caeeb9ed2d6316434f1a249a8f31))
- Delete without the shell and reopen closed tabs - ([4f1d633](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4f1d633c388970342ba595552fcd83a7db1c1072))
- Add global tags and a clearer update prompt - ([5b2632e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/5b2632e7c8ddeff923de4fb702b1ca68ed92aedb))
- Add select-all checkboxes and an update checker - ([587e5ec](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/587e5ecfa5c8fa810fe616e48ac02f0329b4c88c))

### 🐛 Bug Fixes

- Read every part of a split archive - ([f26d742](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f26d7425facfc93c1eb26e163b8a07966743a62c))
- Translate the remaining interface and operation messages - ([eba6dfc](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/eba6dfc346f762ff913dd69c931a69282e11034e))
- Localize names of pasted text and image files - ([c4fd2f5](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c4fd2f5087213d0103b8f07b3b7eb5cd04113560))
- Keep every watched surface refreshing - ([93324e2](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/93324e29e1c7ff964543b1c95a4ff1eacfe58b36))
- Show path launches and remove manual refresh - ([32be7e0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/32be7e0a94fd304e33711d1685c670a67adab7c0))
- Clarify case-sensitive entries and clean up the crumb menu - ([5644941](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/56449412bbe30452990aea1bfd6d979d0e782008))
- Keep the banner motion moving to the end of the overview - ([1e7761f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1e7761fed738af520bb00326ff01496a1a3e82fd))
- Adjust banner panel offset in overview view - ([4448d4b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4448d4bb9d1bc1b680f750549c00c8036f8a322c))
- Add a little more room below the overview banner - ([63b60ed](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/63b60ed73e69d3a5c59566faa4f167dad215ea35))
- Widen link target chips and lower the overview panels - ([102a92b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/102a92b9583e28882673fbc4494bddf8bac88d76))
- Move the banner image down and make built-in framing work - ([4c9f54c](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4c9f54c68e235ec94814517ae26278e32efdb6f3))
- Restore the banner look with a small downward drift - ([b237dce](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b237dce8f3c14082b141516a91b53d37fe09c09a))
- Make the overview banner scroll motion visible - ([93e704e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/93e704e9ab614c277a825462a44db86c8e77a459))
- Open startup paths reliably and finish banner blending - ([538977e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/538977e4f2497dc68f933b94237984f6143e7211))
- Blend the overview banner and restore picker title-bar clicks - ([d94d4bc](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d94d4bc3137405e111ce1a60546790f938c383fa))
- Keep index databases out of scoop buckets - ([e5792b0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/e5792b0912d02245ff2b454dcf76ceb99954f593))
- Report archive registration only when it points at this build - ([d6567f3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d6567f3fb41ccacd83e1c0d8165e2ae6b47f5e50))
- Respect archive handler and refresh after paste - ([24e1f00](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/24e1f005e8e4e7d2fbac94737a190a4a5f3c5cef))
- Keep directory indexes out of Python package trees - ([a76333b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/a76333bdd60f9ff64f6fe7222b7350d49d36f959))
- Retry symbolic link creation with UAC when needed - ([b573ef0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b573ef073eae6dc7945028f9434d73dc07b9506e))
- Hide non-matching gallery pictures while searching - ([f940e57](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f940e576cca8ec55d04480b93b663989bc088d8d))
- Keep protection defaults in environment-variable form - ([039d68d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/039d68d41e7d220a5ba8b36d3c95194549796c50))
- Make the picker window strictly read-only - ([d07656a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d07656aa1a22bd0f4c0d594bdf023f978d492e5b))
- Give the status center its own activity icon - ([c97a926](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c97a926d0a02ccf0aaee73d6293e8fbf2699254e))
- Drop the broken split animation and add ctrl-click navigation - ([b33c4bc](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b33c4bcefd50171f9fe0b62d96b0bc5db4631165))
- Keep the history panel current while it is open - ([e8337c2](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/e8337c2a9796e2b844fad6585e15d13bed207178))
- Animate the split view closed as well - ([5c51f34](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/5c51f34c71325b05b1054ccca4217fee1c1e86ad))
- Align the picker with the app and add index task details - ([0ed2872](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0ed2872dba068b53534dafa0f5c13d05314eef2b))
- Rename a new folder or file in the main view too - ([fb3f23e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/fb3f23e6e391e81611b8eec0f7c53dcbce7ede27))
- Rename a new folder or file as soon as it exists - ([18c224f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/18c224f22f3e14aaee0b0e75f1b2805bce0d91cd))
- Keep the recycle details pane visible when nothing is selected - ([e6e516e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/e6e516ef55cd34780ac3c97913571e817c3c20f4))
- Show the select-all checkbox in the recycle bin - ([8d54128](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8d541289b8128111c787bc61fe74cedd93c66fea))
- Let the Linux trash handle ordinary deletes - ([0da4628](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0da4628746f49192ac47bf4cf73e9b6ddbaa7f77))
- Restore the backdrop blur on WebKit - ([1dafb52](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1dafb52377ca2a4377310c7b31ed251d314d23c1))
- Keep the path completion list above the file list - ([b084c06](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b084c064305541cfb09f5e0791ec463a5acff29f))
- List real volumes and render image thumbnails on Linux - ([1d63b2a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1d63b2a9b480e3e754eb952fc78c986b6b9cc64c))

### 🚜 Refactor

- Apply code formatting and cleanup across services - ([42b64ec](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/42b64ec3ef84f9157ab4611081109fc6b63353c5))
- Read the archive code page probe with TryGet - ([38938fc](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/38938fc335c8ef42f1c4b142a9cdb5ec5192a403))
- Mark a failed code page with null instead of -1 - ([20a337a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/20a337ab9c6ab9a5312875261ba4047fef2f89fc))
- Report silent failures with Try.Run - ([38c46e7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/38c46e7fd9d53abb5208ff42e6094a51c080e1ef))
- Split clipboard and archive/link handlers into modules - ([475f7fa](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/475f7fabd265158842de5fb5cebfe8331ce17146))
- Share path, view and registry helpers - ([42f4893](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/42f4893823fd06d8c301bbe2de861eaa0d10d31a))
- Share one associations backup file - ([4d8004c](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4d8004c3aaf43197680b18177f08111fe2e48b0b))
- Store archive association backups in one file - ([587a310](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/587a310457fadcd17cf952be63461d6029643151))
- Share one context menu across files, gallery and overview - ([f777372](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f777372f8822472f61750dd9379a00463de037a2))
- Mark platform-specific helpers with SupportedOSPlatform - ([bbfc2b2](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/bbfc2b2c8a0ff6f5bbd80c861cd6dee1f7a45092))
- Split the Rust helper by job - ([a840ba9](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/a840ba90a0c760d45e37e47b0ec7ad08890167ca))
- Require the Rust helper instead of falling back - ([d564c62](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d564c62eaf0480ddf5da09d956f5d053c12e5e5a))

### 📚 Documentation

- Mention the Linux clipboard and icon theme helpers - ([2eff89b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/2eff89b7027da7a9c83085013da7e9ad002d522a))
- Describe the global tag catalogue - ([920aa82](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/920aa8239cb1beeecbf6caa4a65fc65ab3dbc853))

### ⚡ Performance

- Write zip64 only where an archive needs it - ([9aab53d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9aab53dafc5ddf08c42b2376f478557c88db09f0))
- Paint a cached folder from one index open - ([821baf8](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/821baf8f8be0a5fd7153654bc4d26e51295a594b))
- Give the folder on screen the index first - ([64df0e3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/64df0e3d90e1a830d5306161c365b058aae80270))
- Expand compressed tar streams with the native 7z library - ([6ae826a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6ae826ab03f81a2eaf796854130ee6240310ab8d))

### ⚙️ Miscellaneous Tasks

- Let Dependabot update the Rust crates like the rest - ([6bcd59f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6bcd59f83cd580f32d3e7ea1052e07539e8d4753))
- Track the Rust dependencies too - ([1c041c3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1c041c3dde2014b76ae7e960129038be3898b088))
- Update the interface packages - ([003d73a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/003d73afd565296e623d6596199949ccb053126f))
- Format SVG icons and TS/TSX files for consistent line lengths and spacing - ([841dc40](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/841dc409ab776996caa5ade6e0596c5103b76015))
- Update PhotinoNETUtils binary - ([06a9409](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/06a94098ef36b54e9f1d20dc46cedf4a92b713ef))
- Update the vendored PhotinoNETUtils build - ([668d7ab](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/668d7ab9db4373a27c6c9aaea75e0952c28cb493))
- Add picker launch profiles - ([4440eff](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4440effb776ea5087aee74650aa2c112d7f770de))

### Action

- Update version and update `CHANGELOG.md` - ([7e20654](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7e206546bad714b453cc9eeee29b1c4b62a3f709))

### Build

- Refresh the web assets for the banner motion change - ([119e960](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/119e9604f814c979481e7d5d694058da8c7dc67b))
- Prefer the cargo rustup keeps in CARGO_HOME - ([7d41557](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7d41557e94579ae15f0a111a7e3736bbf2bf1d53))


## [0.1.1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/compare/v0.1.0..v0.1.1) - 2026-11-04

### 🐛 Bug Fixes

- Point the links at the actual repository name - ([ee812fb](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/ee812fb7db5287ef952830c674d1dbfc61a6cd92))

### 🚜 Refactor

- Display the app as Yet Another File Manager - ([2ad521a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/2ad521aa65f87d14fbb450209713e7319c8fff47))

### Action

- Update version and update `CHANGELOG.md` - ([9d6b783](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9d6b783e84603d543443cc38aeabc87b353a07f7))

## New Contributors ❤️

* @github-actions[bot] made their first contribution

## [0.1.0] - 2026-11-04

### ⛰️  Features

- *(ui)* Draw the window title bar in the interface - ([786587f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/786587fd7347c81c9df264af339b327529fe5150))
- Let users save their own colour presets - ([630496f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/630496fcacc927e295521022eec844054361774b))
- Localize the interface and add a language picker - ([9a33e2b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9a33e2bd99d67338f6740dafe88b56590b0d01a2))
- Restyle settings with colour presets and show the list preview in both split panes - ([83ff726](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/83ff7266e553089b6a889935a0a58552a766b00d))
- Make theme colors customizable and restore blue defaults - ([568afbd](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/568afbd393b666d4165a82001aba45a7ffe69dd8))
- Refresh the interface with a teal and violet theme - ([0b5afa4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0b5afa412c91f822f554035c8053aedf2af5bbb7))
- Render PDF previews in an isolated helper - ([e7bf9f5](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/e7bf9f5abed296207a7bd671df4ba73e2ba4f404))
- Custom tooltips, video controls, text preview, and faster folders - ([224adf7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/224adf7b4b7d22474641e8e9763900e12dfb7a91))
- Squeeze the address bar for details and add create/search buttons - ([aba34e1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/aba34e1476fe1a067f8071b3e6b90a43e6c4038e))
- Refine split view, details pane, and tag editing - ([b17fba4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b17fba4970d31a555ea64a6e7e1910e283957d20))
- Add details preview, inline rename, and tag manager - ([97f8475](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/97f847591e7d3ab9f5fb5374de07501f236975c3))
- Openable gallery tiles and smoother endless scrolling - ([752a6ec](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/752a6ec5304ec728df51e5ff589a3a85efc3fb32))
- Split the tray from the system clipboard mirror - ([12ff48d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/12ff48d394e83cf17c0b61aac27011144d885c11))
- Native file transfer, activity center and file tray - ([d18e03d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d18e03de9cf60bcee760b385b8fde9165bb7778c))
- Add undo and redo for file operations - ([93f79a5](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/93f79a5a05808be1b2ae90e1e28da110ce92bc2d))
- Add hidden file toggle and split view - ([5ed1357](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/5ed1357ea8979a0406bf5ec403e82ee3f71d691e))
- Add KDE-style file shortcuts and permanent delete - ([2ac8253](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/2ac8253d087ff2cf809c02262cd95fa89048f3dd))
- Add file shortcuts and keep long context menus on screen - ([ce264c1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/ce264c16d37a5e234db78c880adfe9d3c1912b19))
- Enumerate shell actions safely and add open with apps - ([aca6b78](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/aca6b78ea30ffc274d8ace4502a882a4ccfad85a))
- Extract shell actions into the in-app context menu - ([f148a74](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f148a74dfe3d4cf974e869def0d06aaefe617cf8))
- Add file selection, checkboxes, and a context menu - ([cfd72e5](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/cfd72e5c5617cec2f2d53c37ca24d4404804e57d))
- Group grid and preview tiles by file kind - ([4a5a0ab](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4a5a0ab259dc7ecd38613e25f05d35ea1fffedda))
- Show all previewable files in the list preview panel - ([c66b0ee](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c66b0eefbab6000d6db7911c7e76f979263dbba8))
- Refine the picture strip and make dates follow the interface language - ([59cfedb](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/59cfedbfb06a798fcce7b9ac84776720988b931e))
- Show a picture strip under the list mode - ([0e3fa19](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0e3fa19d8942ffa8eda9fa848ceaf090ed89d8b0))
- Add a type column that tells shortcuts, symlinks and file kinds apart - ([27affbb](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/27affbb694a3c80ef707dfa9814974b2f9f6e39c))
- Give tags custom colors and show them horizontally in the list - ([10cd12f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/10cd12f0c1aeb41d9f6546704cbecba2de21e5db))
- Mark broken shortcuts and symlinks in red with a strikethrough - ([76a8c71](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/76a8c718cbce7059f4c15a67d7b698c612f818a1))
- Use the shell's 256px jumbo icons for large grid tiles - ([8d07e29](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8d07e2929e609ed5b28010c40cb9d3f9e8b60579))
- Split list icon and grid tile sizes and keep grid icons crisp - ([9509abf](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9509abf20f5d19e2474e22809275040ae2963e13))
- Group the grid view by kind and caption every tile - ([d78fdfd](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d78fdfdc5a74211d42e2a6e897b4726b98f486b0))
- Move view settings to global defaults, serve thumbnails over HTTP, and add tags and item counts - ([edecf43](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/edecf438e9da6b6a0c4a166cc5eddf72df9ea2da))
- Add list and grid views with sortable, configurable columns - ([b2597ef](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b2597efd13054adc846dfc8e8d7fdf24e951f9e0))
- Share the icon picker with extension rules and load gallery thumbnails faster - ([1a3e08e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1a3e08ec827ffc6a3043901ffc2e50a3bc1c9f59))
- Show picture type and size in the gallery and divide the days more clearly - ([9546603](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/95466037783a417d4eec4041b8d5cf90de3131af))
- Present quick access folders by name and icon across the window - ([6b213f0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6b213f0d9646bd165137ff3137e6adcf40621aa0))
- Add more built-in icons and use quick access names in the file list - ([f86eea5](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f86eea590b3c4851d9edd42feae36fe72dfabcf0))
- Add command-line paths as tabs after the restored ones - ([4599df3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4599df3301ad73612511bf02b2a0fc76d6d0ee6e))
- Restore the open tabs on launch and show arrow keys as glyphs - ([715b06a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/715b06a6448f02c967d08f5b0bb9fb8b6d35ce62))
- Add navigation shortcuts and a floating find bar with dim and hide modes - ([98e9088](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/98e9088bbe13134b7dc287341fb3644dc4ac6e89))
- Keep the listing header and show placeholder rows while a folder loads - ([cbe8a4b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/cbe8a4ba516a74074f0acda8e6da122609c2a3b3))
- Paint the cached listing before the folder is read and keep index reads lock-free - ([92e1874](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/92e18744a0be0d4ef8d1673f03e753f500705cf4))
- Cache folder listings and add a central directory index - ([2b7349a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/2b7349a6c9c53f87ef3c7dca5fa8ca9668c831a1))
- Frame and scroll every overview panel and make frequent a factory default - ([953a83f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/953a83fe719b18e6539505d3d015e499ad87ab43))
- Restrict drive rename to edit mode and add a frequent folders panel - ([6c47186](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6c4718670a418962fead78fbabec10a5ea4bdc97))
- Rename folders in quick access and show those names in the path bar - ([b279cb1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b279cb171c868def34ca3fbb1bb037dbd06aabab))
- Per-panel quick access, factory defaults, folder icons and svg icon files - ([d9f8c73](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d9f8c7339fae3dc4a49e9674d9679c54415da193))
- Inline drive rename, true panel delete and per-icon pickers in the overview - ([ad74a05](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/ad74a057bfc5e236155cd3e5c21da99ea6ceea1d))
- Rename volumes through Windows and pin the home panel - ([030d320](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/030d32057c140b4cf00cdd1b2a3d589e0e513d09))
- List files in sidebar folder panels, label drives and add volume rename - ([85698a7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/85698a728f5f58d4036a01b09c5321e3468b6dac))
- Default pinned panels, grid views for recent/drives and lighter overview listings - ([739e443](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/739e4437f038fb1731e14b9c5cb43288537d7c73))
- Folder panels refresh live, sidebar lists files and place icons are editable again - ([c192785](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c1927854fb71e317163b7b56036e343a2c0747d7))
- Modular overview blocks with pinning and shared panel icons - ([8ed4aba](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8ed4aba58c282e7e5b26bc4621e8002d119e2df3))
- Shared overview panel model with kinds, icons and pinning - ([f39fce6](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f39fce6b343c1e59a19cee289e586c14d83c9a43))
- Overview folder panels, panel titles, per-panel views and quick access icons - ([24ddf4d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/24ddf4dd14fe6b4bdb4113d80de707d6361e962b))
- Draggable tabs, open-in-new-tab modifier and a shortcuts panel - ([aafad37](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/aafad373e8bf81bd3231a7fa9876cb99ba047554))
- Friendlier address bar, quick access names and live folder refresh - ([570187e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/570187e1e82253528835b1d1e2b300bbdbbffd9f))
- Sidebar lists become hover flyouts under places, recent and drives - ([1251d29](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1251d2980da4f3c36d0023f59a5b97bde32c17f5))
- Unify tabs under yafm:// links, page the gallery and collapse sidebar sections - ([4e409e2](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4e409e2d108ea24c864a4cebbf6685a41348bf76))
- One-level folder sizes, recent sidebar and editable overview panels - ([b35c3f8](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b35c3f83a5e49e38699eb87b78c55b12a118e480))
- Gallery with shell thumbnails and memory reporting - ([947a70b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/947a70b5747ea67024518f8f03901d0dc7ee1baa))
- Editable quick access, recent folders and leaner index connections - ([68c8b14](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/68c8b1410ecbb6282d4b3e5d9b075ae65266fee8))
- Overview as the first tab, editable quick access and drive usage bars - ([4d21af9](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4d21af9fffbe0565861cd274b8868d9605d882a1))
- Mark the admin recycle view as loaded only after it succeeds - ([9cf6a72](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9cf6a721885d06d5500ff6433efd68db7f531a2b))
- List and purge other profiles' recycle leftovers with one-off elevation - ([1add8e4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1add8e4b613ded0f6bac327cb8e880b9748f8d18))
- Draw the window corners on Linux - ([b95f5d7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/b95f5d77ee97a5a68bf4e3a4c6a3d10963705702))
- Per-folder index database, icon rules and orphan cleanup - ([6b3a064](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6b3a064d4f4ac0b780150358a8fa4549f18f512d))
- Restore and empty the recycle bin, and draw shell icons - ([7f58e78](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7f58e78ae8954a0f35f188516e27a5736b80c695))
- Home, settings and recycle bin pages, scrollable tabs and editable path bar - ([2996719](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/29967191b6ce977db265c405750a5d0aa6d72313))
- Tabs, icon-rail sidebar and shell-aware hidden files - ([733659d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/733659de687ec922545777e17ed61814945bed5a))
- Add system tray, single instance and path arguments - ([5b47da0](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/5b47da05e9e01a8ff6c9ab5e2785d0f41e7f315d))

### 🐛 Bug Fixes

- Make tray drops reachable and keep huge folders responsive - ([9e407f8](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9e407f8697cdd7a6d4fa3e4294aeba8f48fc8f25))
- Keep the file tray openable and match the theme - ([47832e1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/47832e198d093f66f35f820c591904ab0bc07f78))
- Keep split panes inside one tab and show both folder icons - ([f1bc36b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f1bc36ba1ceaf046594f6887cc178e8e52fe4bed))
- Keep the yafm link setting consistent and overhaul split view - ([808c56e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/808c56e0aab1dea19449577d9f449213b3265641))
- Tint window surfaces with the theme accent and give both split panes full control - ([8dac275](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8dac2755c0540d5237a44d24799a9ed627cde1f2))
- Make tag deletion write to folder indexes and restyle title bar menus - ([3e84431](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/3e84431fff16f0fc2afba00ad63da11832931212))
- Measure tooltip before placing it - ([f33eca7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f33eca76b193c665bca6d1166f3976965c0d6387))
- Keep native titles off and hide pause while playing - ([34fd82a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/34fd82aa7b19223c6b93c16281de6c02393a986d))
- Reuse the file grid for gallery selection and menus - ([4f9e681](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4f9e681bb1a381f2e072d5ac9f97ddec33fa723f))
- Size the restore glyph in the recycle bin menu - ([57d1bfe](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/57d1bfebfae8368406799339f485df9d55d06509))
- Navigation races, missing folders, recycle bin, icons and styling - ([f14c3ab](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f14c3ab07a304a56a8f3a938eedb7677a279ae61))
- Accept tray drops anywhere on the panel - ([d65dd57](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d65dd57584325b96f029c16cdd0fbe6e46b79e2e))
- Drop tray entries a cut-and-paste moved away - ([68a9554](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/68a955484986b1e590c85b2a36a903206bd26c2a))
- Use a check glyph in the tray selection box - ([884ab51](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/884ab51bd9774ed6f7cceebf1b4c5c5060c3e52d))
- Polish the context menu and make Open with work - ([42f980d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/42f980de86172185816ddcf3de6d280ced78f085))
- Keep quick access icons on file tabs regardless of system icons - ([95e7a33](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/95e7a33eedaf4b21b36cde74b75697ece6ee667a))
- Resolve per-file icons on an STA thread and show link columns only for real links - ([e009879](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/e009879cf6cb03368aaac338d4627a0c0c06c3e2))
- Show transparent gallery pictures over the app background - ([4471ddf](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4471ddf46bc5cadbacc10f18fd78b602df3ebaaf))
- Stop the gallery placeholder from tinting thumbnails blue - ([79908e1](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/79908e18293f6c6dabbe19d7995817906bf56c5f))
- Keep tags and item counts off folders that fell back to the central index - ([94b1e30](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/94b1e30fa517102de81e9855cbbdc18c59ab6c64))
- Keep quick access icons in the path bar instead of shell icons - ([cc11ac7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/cc11ac74f680425134001665add2af88c1bc08ac))
- Log unhandled exceptions before runtime crash dialog - ([8a9f294](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8a9f294fc1484ac226fa1fd9b333b1e2a409b40c))
- Always use quick access names in the file list - ([dd113b4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/dd113b43f3d2ab3e40e9fb56c269920269bed024))
- Keep protected folders in the central index so cached sizes survive - ([84aeadf](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/84aeadf7b612b63caf89527ef136ec6ce5197e44))
- Show the folder index warning only while per-folder indexes are off - ([38cf2d4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/38cf2d461ad93990000853132858e2eef8e4bebf))
- Show path bar icons only for quick access folders and built-in pages - ([17c5132](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/17c5132002cc54e055415ddc20d9935c795bcfba))
- Float the icon picker above panel frames and add path bar icons - ([115f7b2](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/115f7b20f2f0cfddccadbd8f7e23634fa392e8dc))
- Keep cleared panels visible and unify overview panel logic - ([9b57e7b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/9b57e7b762276a00ded06919b784d452fdd9b72a))
- Fold every quick access panel name into the path bar - ([7c41865](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7c4186565152d23c70409c1e1c18c6daeaac24b4))
- Keep drive details while renaming and restore quick-access add tiles - ([7f7d785](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7f7d785ba2b973545775a8f4afc5a2311b41a180))
- List files in sidebar panels and keep yafm links and recent icons correct - ([ff2b8d8](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/ff2b8d84f366fd90245c4bebd478dc659b17354a))
- Isolate unreadable folders, skip the index file and cap size bursts - ([83d7598](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/83d7598f5a81eb5f11b81c008c7ad19a6b1c23f3))
- Exclude the folder index from sizes, isolate unreadable folders and cap size bursts - ([e1a8a7c](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/e1a8a7c3600a7d7a1be605c6edb70171c72b3e1e))
- Content writes refresh entries without re-measuring sizes - ([095dc30](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/095dc303afe3174007684c90c4c75f744bd385d1))
- Refresh only when entries are created, deleted or renamed - ([6f1a80e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6f1a80ec8f39e792ad4040b960e9a1c188274ec9))
- Measure overview folder sizes once per visit and finish grid views - ([26ad2b7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/26ad2b7e0339eaae962db8d05be776ee1a6ffd9a))
- Collapse sidebar lists with the rail and keep memory gauges inside their box - ([aa50f47](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/aa50f47c6f3e6a9c03db8a922e6901945fbe77c8))
- Sidebar lists expand inline and push the rest of the rail down - ([c0ab57e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c0ab57ef7f5469874f8284bda6e6e96a14592f68))
- Centre the collapsed rail, auto-open sidebar lists and drop the url from the status bar - ([dba5713](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/dba57132475caa6de43d2b852bba8e6a21c353f6))
- Report committed memory as the headline figure - ([394abdb](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/394abdbe4c074ad069833bf3d28f1b1f7b3e18dd))
- Never list a live account's recycle records as leftovers - ([3363164](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/3363164701e4578a9ef9a6c25c60dfee663c3f8e))
- Never treat unreadable recycle content as a leftover - ([d9b0da8](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d9b0da85eae9c2e4798a97acb0f69c322f9c7d4a))
- Let the interface draw the frame on Wayland - ([3d3ee05](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/3d3ee0522d028ee02f0abdf9ac99e446e0b06b9b))
- Skip unreadable recycle bin folders and read the freedesktop trash - ([51978aa](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/51978aa67b05940c5fd327f691568afe1c76fe03))
- Let the Vite dev server serve the shared bridge - ([66b4c68](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/66b4c68995a7955da272fba00f0ea389b9f09eb4))

### 🚜 Refactor

- Use the shared library's system locale - ([4d69068](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4d69068b9c40371b5140a60bf6877e7ca94a3934))
- Merge folder measurements and centralize shared UI helpers - ([a6ec4cf](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/a6ec4cf9f4209b4c5818ee572a9ed539d8df3d38))
- Drop the refresh shortcut since folders refresh themselves - ([35cf363](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/35cf3633c149d683b5cbf31596f6f6da7c972a20))
- Make the backend async-first and stop locking database reads - ([1b777d5](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1b777d544c8b7a98183e985199cb66fe0554b106))
- Store recent and frequent folders in sqlite - ([403a716](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/403a7168a2e3cd2cf396c0230a60d952b1ff5b46))
- Adopt collection expressions and replace locking mechanism - ([54ac6d6](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/54ac6d6180a001bda1d6feffd18f5092fe31cc5d))
- Keep settings and lists in the roaming folder - ([348dca7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/348dca72e86adc5e1453e87395cc0c91821adc6e))
- Replace the remaining DllImport calls with LibraryImport - ([7560c7d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7560c7d3020ed28d4021bbbac697cb96517e26f7))
- Simplify Crc32 method by using LINQ aggregation - ([90ea944](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/90ea944c315865822419014d584c4527468a67b7))
- Change Notify method to instance and simplify logging statement - ([93cabe3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/93cabe3099101574ffca8dc011403d94989de21c))
- Streamline code structure across various services and modules - ([8f10b55](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8f10b558bdd6f347a7224d1854d056e08a00788c))
- Use the shared window chrome hooks - ([41e3132](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/41e31322eb3accabe46c206d812b364f0ae27ce7))
- Use the shared window chrome and app paths - ([46295af](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/46295aff79d359d181a9b61ab7a8c5a4f86c3d76))
- Use the shared native bridge and a solid path separator - ([8d90070](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8d900703ddaeb138f91173f6dd660b8968a96f49))
- Adjust formatting and improve code consistency - ([47731fb](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/47731fb140bf3734bbbfd83d59dd4975e8fc6f62))
- Use target-typed new expressions for cleaner object instantiation - ([ac3fe42](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/ac3fe42bc0e0ea84eb68b0f6fa688157f000b499))
- Move DataDirectory property to Constants class for better encapsulation - ([f40d394](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f40d394a5f8a8c08e3945c93499bc3325c44d6c4))
- Move shared Photino plumbing to PhotinoNETUtils - ([002ffe7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/002ffe70962f82c931fd5d14b6da6ce99bae7289))
- Add SuppressMessage attribute to MainWindowCreated handler and include missing CodeAnalysis import - ([c726a1f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c726a1fd30e50a1bdc4e20082ff9aeb5da86e045))
- Add PublicAPI attribute to DataDirectory and include missing JetBrains.Annotations import - ([a42b386](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/a42b386c0284652a560e318e499b3548b40b37e1))
- Simplify drive readiness check and remove unused import - ([02406c9](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/02406c9853ebf611158df37e06a34ddea0d82bd0))

### 📚 Documentation

- Credit Sigma File Manager as a design reference - ([842c7bf](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/842c7bf4ee98f3cf928f211886c10c4742f80a6b))
- Add the multilingual README, website and release packaging - ([0ddd8e6](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0ddd8e6023c5be68d210d7387415747b04c823af))
- Simplify README content and add placeholder for future completion - ([8f5f3c7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/8f5f3c7d77d807134a1e036e3d2d220e7e2e13af))
- Remove the duplicate project readme - ([1fb0b02](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1fb0b02cb8ebbe31f9f360110ab633bbab32eb37))

### ⚡ Performance

- *(ui)* Start the live listing without waiting for the cached one - ([cb05821](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/cb058219dc068c7b5da9d90ab316c743ba8235ce))
- *(ui)* Make search and path lookups cheaper per keystroke - ([483aa9f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/483aa9fceb51907273c2dd61f29b38aaa697a8d5))
- *(ui)* Keep the context menu handler stable for memoized rows - ([4d486fa](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4d486fa48c7b1513687221048755f7ce6e565a0a))
- *(ui)* Memoize list rows so selection repaints only changed entries - ([6b26e3a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6b26e3abe2285e89631b2be95eb9848e0c053b8e))
- Virtualize the list and restore lazy system icons - ([7367ffe](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7367ffeac60551da43cfd326b0f96fc503c90f0a))
- Stop per-folder icon and background scans in huge caches - ([5d8c53e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/5d8c53e1a6e97ed5412bf59a727f70a986deff01))
- Dispatch large ZIP batches to the parallel Rust writer - ([08774a8](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/08774a88c882e3641b987d6197074207b47801f5))
- Add an optional Rust walker for the bulk gallery scan - ([c7e69a5](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c7e69a5d405be4441aba36eff9de0865971a0cff))
- Throttle batched size and count updates - ([f4db3a6](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f4db3a615649d84d22beefcd91f3588609477d4e))
- Batch background size and count notifications - ([7d273f8](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/7d273f8752dbaf7781cd736fd386cb7b1d9c968d))
- Cache visibility reads and skip list work the view does not use - ([4531115](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/453111552af10e6b34147dd9ee7fc4ea82f811ab))
- Speed up sorting, icons, gallery scan and folder walks - ([3a04cc5](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/3a04cc5da9ab8dc8076617464132a8d1bcd80dd4))
- Read listing metadata over one index connection - ([6c1c60f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6c1c60f9485c75fbfd26e166cdeea797ae7097f0))
- Read hard-link counts through CreateFileW - ([21dbe19](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/21dbe1985c48ffd149969ecae5d909ebbe4bb974))
- Read hard-link counts only when the Links column is visible - ([073988f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/073988f5bfbd9e82412040370d116892b6338e15))
- Keep gallery scrolling responsive while thumbnails load - ([3b5afa9](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/3b5afa9a9b31308c49ff3307441bd045c88c1461))
- Layered folder sizes, off-thread message handling and index upkeep - ([270c4ae](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/270c4ae5b2f46252806bd551e0430e0c062ce913))

### 🎨 Styling

- Show the overview list/grid switch as icon buttons - ([fc5b3b7](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/fc5b3b7d27a6dec123df794ff043cf0defeaa322))

### ⚙️ Miscellaneous Tasks

- Improve table formatting and consistency across multilingual READMEs - ([e404be9](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/e404be9b7d66953bb18e02f8b43143dff03dc1d8))
- Update Photino-Net-Utils-Bridge to v0.11.0 and replace package file - ([d7e07fe](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/d7e07fe9bfcba2b9d0f1dc19311801b7f5842b2b))
- Update Photino-Net-Utils-Bridge to v0.9.0 and replace associated package file - ([c0fd3f4](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/c0fd3f4f492d9a5d7034daafe6bb834eebcfb215))
- Update Photino-Net-Utils-Bridge to v0.8.3 and replace associated package file - ([f86c37e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f86c37ef2e87e22dbd6e0f1006e3433224c129b1))
- Update Photino-Net-Utils-Bridge to v0.8.2 and replace associated package file - ([f019aac](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/f019aacf99e5994f172c55be255f0a5bf8476c31))
- Update PhotinoNETUtils and Photino-Net-Utils-Bridge to v0.8.1 - ([aa61511](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/aa6151138bd7ac55051390720a9227f98b82811f))
- Store panel icons and pinned panels in the settings model - ([a1ef955](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/a1ef9550084225995522eef21ec675a89bc3dd4a))
- Update PhotinoNETUtils.dll and Photino-Net-Utils-Bridge to v0.7.1 - ([a80dc0c](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/a80dc0cb2213d94540a72196f45bd377af22df75))
- Update PhotinoNETUtils.dll in Libs directory - ([ab76cf5](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/ab76cf508d183146d260cbc64fdf30a6df291ac2))
- Refresh the shared library build - ([0e18b4f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/0e18b4f4b6b399fc7f35ecab3097d3686d16ba1f))
- Refresh the shared library build - ([5369713](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/536971325fdc8d1a02059b1da32d395e12305a05))
- Update PhotinoNETUtils.dll in Libs directory - ([849ea0d](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/849ea0d11dca8e1f291b0e85ba64cb568a501f18))
- Update PhotinoNETUtils and Photino-Net-Utils-Bridge to latest versions - ([5d4a750](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/5d4a750ed3f51fb82afdc72e9037012dc7eb6a0f))
- Update PhotinoNETUtils and Photino-Net-Utils-Bridge to latest versions - ([fef3c19](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/fef3c1939c49610d2985a31b498ee655eee64012))
- Conditionally include PhotinoNetUtils.Hosting in non-debug builds - ([6f50ee9](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/6f50ee9da3ab245a489877c7a645463dbebb5c19))
- Update PhotinoNETUtils.dll in Libs directory - ([a1a0c0f](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/a1a0c0f56cc36478ddad6cf1f4a4f3776621a20f))
- Update PhotinoNETUtils artifacts - ([984bb4a](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/984bb4a1a82c3f454d2158f48ba10d3de481c7cb))
- Update PhotinoNETUtils artifacts - ([21f793e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/21f793e21b53f38d1a171d8556061b0d767b8d74))
- Update PhotinoNETUtils artifacts - ([671e3d3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/671e3d3b86a7203289fbcab3bb4a6eeaea9c5288))
- Rename libs to Libs - ([703ed2b](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/703ed2be45a60a7801c25ec6291edf3ccd3b2814))
- Update package.json to modify upgrade script and add allowScripts config - ([33f58b9](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/33f58b95cbda61e0222ba27d137482b2b02bdeed))
- Add SVG app icon - ([ff5ab9e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/ff5ab9eae63480440f43b0945139677dfd0f92f4))

### ◀️ Revert

- List recycle leftovers from every readable profile - ([740dbd3](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/740dbd31ec9fa3889dfee8e52d8545a3f7875a71))

### Build

- Allow skipping the optional Rust step - ([a29b0c5](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/a29b0c5588fe536518cd84fc2f34fb4a254c3a9e))
- Consume PhotinoNETUtils from libs - ([1acec1e](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/1acec1e0844b4251b4360d268201a5387a653dc0))

### Init

- First commit - ([4a25148](https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/commit/4a25148f70d9f02c76e0209a9aa26f0395498b94))

## New Contributors ❤️

* @opencode-agent[bot] made their first contribution
* @T2PeNBiX99wcoxKv3A4g made their first contribution

<!-- generated by git-cliff -->
