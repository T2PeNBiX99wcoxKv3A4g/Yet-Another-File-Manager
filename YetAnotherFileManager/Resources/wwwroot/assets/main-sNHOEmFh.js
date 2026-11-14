import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{A as t,B as n,C as r,D as i,E as a,F as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,R as m,S as h,T as g,U as _,V as v,W as y,_ as b,a as x,b as S,c as C,d as w,f as T,g as E,h as ee,i as D,j as O,k,l as te,m as A,n as j,o as M,p as ne,r as N,s as re,u as ie,v as ae,w as oe,x as se,y as P}from"./format-DDANH-1L.js";async function F(){return l.available?await l.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function I(e){l.available?await l.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function ce(){l.available&&await ge(`update.openLogs`)}async function le(e){l.available?await ge(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function ue(){return l.available?await l.request(`update.status`)??null:null}async function de(){return l.available?await l.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function fe(){return l.available?await l.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function pe(){await ge(`update.cancel`)}async function me(){return l.available?await l.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function he(e){return l.on(t=>{t.type===`update.progress`&&e(t.data)})}function L(e){return l.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function ge(e,t,n=3e4){let r=await l.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var R=e(y(),1),_e=s(),ve=null;function ye(e){ve=e}function be(e){return ve?ve(e):Promise.resolve(!1)}var xe={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},Se={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function Ce(e,t){return l.available?await l.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function we(e){return l.available?(await l.request(`fs.open`,{path:e})).ok:!1}async function Te(e,t=!0,n=!1,r=0,i){return await l.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function Ee(e,t,n=0,r){let i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await be({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function De(e,t=0,n){return await l.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Oe(e){l.available&&e.length!==0&&await l.request(`fs.archive.release`,{paths:e})}async function ke(e){return l.available?await l.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Ae(e,t){return l.available?(await l.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function z(e,t,n,r){return l.available?(await l.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function je(e,t=!1){return l.available?await l.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Me(){return(await l.request(`fs.places`)).places}async function Ne(){return(await l.request(`fs.drives`)).drives}async function Pe(e=!1){return(await l.request(`fs.recycle`,{includeOrphans:e})).entries}async function B(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await be({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await l.request(e,{...t,confirm:r.token})}return r}async function Fe(e=!1){let t=await l.request(`fs.recycle.empty`,{includeOrphans:e});await B(`fs.recycle.empty`,{includeOrphans:e},t)}async function Ie(e){return!l.available||e.length===0?{ok:!1,done:0}:await l.request(`fs.recycle.restoreMany`,{ids:e})}async function Le(e){if(!l.available||e.length===0)return{ok:!1,done:0};let t=await l.request(`fs.recycle.deleteMany`,{ids:e}),n=await B(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Re(e){l.available&&e&&await l.request(`fs.recycle.properties`,{id:e})}async function ze(){if(!l.available)return{entries:[],cancelled:!0,failed:!1};let e=await l.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function V(){return l.available?(await l.request(`fs.recycle.admin.purge`)).ok:!1}async function Be(e=0,t=150,n=!1){return l.available?await l.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Ve(){return l.available?(await l.request(`fs.recent`)).entries:[]}async function He(){return l.available?(await l.request(`fs.frequent`)).entries:[]}async function Ue(e){l.available&&await l.request(`fs.frequent.record`,{path:e})}async function We(){await l.request(`fs.recent.clear`)}async function Ge(){await l.request(`fs.frequent.clear`)}async function Ke(){return await l.request(`fs.visibility`)}async function qe(){return await l.request(`fs.hidden.toggle`)}async function Je(){return l.available?await l.request(`fs.index.tasks`):{count:0,directories:[]}}var Ye={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showHidden:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,trayAutoShow:!0,accentColor:null,secondaryColor:null,themeMode:`system`,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[],conflictNameStyle:`space_parentheses`,shareAccessEnabled:!0,shareApprovalMinutes:60,shareDenialSeconds:10,windowsShellMenu:null};async function Xe(){if(!l.available)return Ye;let e=await l.request(`settings.get`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showHidden:e?.showHidden??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,trayAutoShow:e?.trayAutoShow??!0,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,themeMode:g(e?.themeMode),backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[],conflictNameStyle:e?.conflictNameStyle??`space_parentheses`,shareAccessEnabled:e?.shareAccessEnabled??!0,shareApprovalMinutes:e?.shareApprovalMinutes??60,shareDenialSeconds:e?.shareDenialSeconds??10,windowsShellMenu:e?.windowsShellMenu??null}}async function Ze(){return l.available?(await l.request(`app.protection.defaults`)).paths??[]:[]}var Qe={registered:!1,pathMatches:!1,registeredPath:null},$e={registered:!1,pathMatches:!1,registeredPath:null};async function et(){return l.available?await l.request(`app.defaultManager.status`):$e}async function tt(e){return l.available?await l.request(`app.defaultManager.set`,{enabled:e}):$e}var nt={supported:!1,registered:!1,error:null};async function rt(){return l.available?await l.request(`app.shellMenu.status`):nt}async function it(e){return l.available?await l.request(`app.shellMenu.set`,{enabled:e}):nt}async function at(){return l.available?await l.request(`app.archive.status`):Qe}async function ot(){return l.available?await l.request(`app.archive.register`):Qe}async function st(){return l.available?await l.request(`app.archive.unregister`):Qe}async function ct(e){if(!l.available)return e;let t=await l.request(`settings.save`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showHidden:t?.showHidden??e.showHidden,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,trayAutoShow:t?.trayAutoShow??e.trayAutoShow,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,themeMode:g(t?.themeMode??e.themeMode),backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites,conflictNameStyle:t?.conflictNameStyle??e.conflictNameStyle,shareAccessEnabled:t?.shareAccessEnabled??e.shareAccessEnabled,shareApprovalMinutes:t?.shareApprovalMinutes??e.shareApprovalMinutes,shareDenialSeconds:t?.shareDenialSeconds??e.shareDenialSeconds,windowsShellMenu:t?.windowsShellMenu??e.windowsShellMenu}}async function lt(e,t){l.available&&await l.request(`app.tabs.set`,{tabs:e,active:t})}async function ut(e,t,n){return l.available?(await l.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var dt={managed:0,private:0,workingSet:0,available:0};async function ft(){return l.available?await l.request(`app.memory`):dt}async function H(){return l.available?await l.request(`app.memory.trim`):dt}var pt={registered:!1,pathMatches:!1,registeredPath:null};async function mt(){return l.available?await l.request(`app.scheme`):pt}async function ht(e){return l.available?await l.request(`app.scheme.set`,{enabled:e}):pt}var gt={supported:!1,mode:`none`,active:!1,error:null};async function _t(){return l.available?await l.request(`app.startup`):gt}async function vt(e){return l.available?await l.request(`app.startup.set`,{mode:e}):gt}async function yt(e,t=!1){return!l.available||e.length===0?!1:(await l.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function bt(){return l.available?(await l.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function xt(){return l.available?await l.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function St(e,t,n){return!l.available||e.length===0?{ok:!1,error:`nothing_to_transfer`,created:[]}:await Ct({action:n?`move`:`write`},r=>l.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:r}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function Ct(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await be({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function wt(e){return!l.available||e.length===0?[]:(await l.request(`fs.paths.info`,{paths:e})).entries}async function Tt(e,t=!1){return l.available?await Ct({action:t?`move`:`write`},t=>l.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function Et(e,t=!1){if(!l.available||e.length===0)return{ok:!1,error:null};let n=await l.request(`fs.operation.delete`,{paths:e,permanent:t}),r=!1;for(let i=0;i<2&&n.required&&n.token&&n.protected?.length;i++){if(!await be({hits:n.protected,delaySeconds:n.delaySeconds??5,action:`delete`,permanent:t})){r=!0;break}n=await l.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return r?{...n,ok:!1,cancelled:!0}:n}async function Dt(e,t){return l.available?await Ct({action:`rename`},n=>l.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Ot(e,t=!1){return l.available?await l.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function kt(e){return l.available?(await l.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function At(e,t){return l.available?await l.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function jt(e,t,n){return l.available?await l.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Mt(e,t){return l.available?await l.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Nt(e){l.available&&e.length!==0&&await l.request(`fs.operation.properties`,{paths:e})}async function Pt(e){l.available&&await l.request(`fs.operation.openWith`,{path:e})}async function Ft(e){l.available&&await l.request(`fs.operation.terminal`,{path:e})}async function It(e){return l.available?await l.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Lt(e,t){return l.available?(await l.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Rt(){return l.available?await l.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function zt(){return l.available?await l.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Bt(e){l.available&&await l.request(`fs.operation.showInExplorer`,{path:e})}async function Vt(e){return!l.available||e.length===0?{verbs:[],safe:!0}:await l.request(`shell.verbs`,{paths:e})}async function Ht(e,t,n,r){l.available&&e.length!==0&&await l.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Ut(e,t){return!l.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await l.request(`fs.operation.compress`,{...t,paths:e})}async function Wt(){return l.available?(await l.request(`app.tasks`)).tasks:[]}async function Gt(){l.available&&await l.request(`app.tasks.clear`)}var Kt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},qt=Kt.openInNewTab;function Jt(e){qt=e.trim()||Kt.openInNewTab}function Yt(e){let t=qt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Xt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Zt(e){return e.split(`+`).filter(Boolean).map(e=>Qt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Qt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function $t(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var en=new Map;function tn(e){return E(T(e)?D(e):e)}function nn(e){return en.get(tn(e))}function rn(e,t){en.set(tn(e),t)}function an(e){en.delete(tn(e))}function on(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var sn=new Map,cn=new Map,ln=new Set,un=0;function dn(){sn.clear(),cn.clear(),un+=1,ln.forEach(e=>e())}function fn(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...sn.keys()])e.toLowerCase().includes(t)&&(sn.delete(e),n=!0);n&&(un+=1,ln.forEach(e=>e()))}function pn(){let[e,t]=(0,R.useState)(un);return(0,R.useEffect)(()=>{let e=()=>t(un);return ln.add(e),()=>{ln.delete(e)}},[]),e}var mn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function hn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return mn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function U(e,t,n=!1){let r=pn(),i=e===null?``:hn(e,t,n),[a,o]=(0,R.useState)(()=>sn.get(i)??null);return(0,R.useEffect)(()=>{if(e===null){o(null);return}if(!l.available)return;if(sn.has(i)){o(sn.get(i)??null);return}let r=!0;return l.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?sn.set(i,e.dataUrl):sn.delete(i),r&&o(e.dataUrl)},()=>{sn.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function W(e){let[t,n]=(0,R.useState)(e);return(0,R.useEffect)(()=>{if(!e){n(null);return}if(!T(e)){n(e);return}let t=!0;return De(e,0,nn(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function G(e){let t=pn(),[n,r]=(0,R.useState)(()=>e?cn.get(e)??null:null);return(0,R.useEffect)(()=>{if(!e||!l.available){r(null);return}if(cn.has(e)){r(cn.get(e)??null);return}let t=!0;return l.request(`fs.iconFile`,{path:e}).then(n=>{cn.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{cn.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var gn=null,K=null;function _n(){return gn===null?l.available?(K??=l.request(`app.thumbnails`).then(e=>(gn=e.base??``,gn),()=>(gn=``,``)),K):Promise.resolve(``):Promise.resolve(gn)}function vn(e,t=128,n=0){let[r,i]=(0,R.useState)(gn);return(0,R.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return _n().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${yn}`}var yn=2;function bn(e,t=0,n=``){let[r,i]=(0,R.useState)(gn);if((0,R.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return _n().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function xn(e,t=0){let[n,r]=(0,R.useState)(gn);return(0,R.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return _n().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var Sn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},Cn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function wn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Dn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=An(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Tn=`\0`,En=``;function Dn(e){return e.query!==Tn&&(Tn=e.query,En=e.query.toLowerCase()),En}var On=`\0`,kn=null;function An(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===On)return kn;On=t;try{kn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{kn=null}return kn}function jn(e,t){return wn(e,t)!==null}var Mn=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],Nn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Pn(e){let t=In(e);for(let{kind:e}of Mn)if(Nn[e].has(t))return e;return null}function Fn(e){return Pn(e)!==null}function In(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Ln=(0,R.createContext)({places:{},useIcons:!1}),Rn=Ln.Provider;function zn(){return(0,R.useContext)(Ln)}function Bn(e,t){return e.places[E(t)]}function Vn(e,t,n){return Bn(e,t)?.name||n}var Hn=new Map,Un=new Map,Wn=0;function Gn(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&Hn.set(e,t)}catch{}}function Kn(e){return l.available?Hn.get(e)??null:localStorage.getItem(e)}function qn(e,t){l.available?(Hn.set(e,t),Un.set(e,t),window.clearTimeout(Wn),Wn=window.setTimeout(Jn,200)):localStorage.setItem(e,t)}function Jn(){if(Wn=0,Un.size===0)return;let e=Object.fromEntries(Un);Un.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Yn(){if(Un.size===0)return;let e=Object.fromEntries(Un);Un.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Xn(e,t){let n=Kn(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function Zn(e,t){qn(e,String(t))}function Qn(e){try{return JSON.parse(Kn(e)??`null`)}catch{return null}}function $n(e,t){qn(e,JSON.stringify(t))}var q=c(),er=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,q.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,q.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),tr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),nr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M14 3v4h4`})]}),rr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,q.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,q.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),ir=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,q.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),ar=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 19V5`}),(0,q.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),or=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,q.jsx)(`path`,{d:`M20 4v7h-7`})]}),sr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 5v14`}),(0,q.jsx)(`path`,{d:`M5 12h14`})]}),cr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M19 12H5`}),(0,q.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),lr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M5 12h14`}),(0,q.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),ur=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,q.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),dr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,q.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),fr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,q.jsx)(`path`,{d:`M12 12v8`})]}),pr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,q.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),mr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),hr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,q.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),gr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),_r=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 7h16`}),(0,q.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,q.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,q.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),vr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),yr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),br=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,q.jsxs)(`defs`,{children:[(0,q.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,q.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,q.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,q.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,q.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,q.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,q.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,q.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,q.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,q.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),xr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),Sr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,q.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,q.jsx)(`path`,{d:`m13 5-2 14`})]}),Cr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,q.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,q.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),wr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,q.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Tr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,q.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,q.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Er=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Dr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Or=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),kr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,q.jsx)(`path`,{d:`M8.5 14h7`})]}),Ar=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,q.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,q.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),jr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Mr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Nr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Pr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Fr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Ir=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,q.jsx)(`path`,{d:`m14 6 4 4`})]}),Lr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,q.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Rr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,q.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),zr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 4v10`}),(0,q.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,q.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Br=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,q.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,q.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Vr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,q.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,q.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Hr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,q.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Ur=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Wr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,q.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Gr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,q.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,q.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Kr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),qr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,q.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,q.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,q.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Jr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,q.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Yr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,q.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Xr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,q.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,q.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Zr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,q.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Qr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,q.jsx)(`path`,{d:`M3.5 12h17`}),(0,q.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),$r=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),ei=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,q.jsx)(`path`,{d:`M8.5 10.5h7`})]}),ti=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,q.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,q.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),ni=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,q.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),ri=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,q.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,q.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),ii=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),ai=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 16V4`}),(0,q.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,q.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),oi=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),si=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,q.jsx)(`path`,{d:`M12 4v16`})]}),ci=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,q.jsx)(`path`,{d:`M15 4v16`})]}),li=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,q.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,q.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,q.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),ui=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,q.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,q.jsx)(`path`,{d:`M12 14v2`})]}),di=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,q.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),fi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,q.jsx)(`circle`,{cx:12,cy:12,r:3})]}),pi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,q.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,q.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,q.jsx)(`path`,{d:`m3 3 18 18`})]});function J(e,t){return({size:n=t,...r})=>(0,q.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var mi=J(er,18),hi=J(tr,18),gi=J(nr,18),_i=J(rr,18),vi=J(ir,16),yi=J(ar,16),bi=J(or,16),xi=J(sr,16),Si=J(cr,16),Ci=J(lr,16),wi=J(ur,12),Ti=J(dr,18),Ei=J(fr,14),Di=J(pr,14),Oi=J(mr,14),ki=J(hr,18),Ai=J(gr,18),ji=J(_r,18),Mi=J(vr,14),Ni=J(yr,14),Pi=J(fi,14),Fi=J(pi,14),Ii=J(br,18),Li=J(xr,18),Ri=J(Sr,18),zi=J(Cr,18),Bi=J(wr,18),Vi=J(Tr,18),Hi=J(Er,18),Ui=J(Dr,18),Wi=J(Or,18),Gi=J(kr,18),Ki=J(Ar,18),qi=J(jr,18),Ji=J(Mr,18),Yi=J(Nr,18),Xi=J(Pr,18),Zi=J(Fr,18),Qi=J(Ir,16),$i=J(Lr,18),ea=J(Rr,18),ta=J(zr,18),na=J(Br,18),ra=J(Vr,18),ia=J(Hr,18),aa=J(Ur,18),oa=J(Wr,18),sa=J(Gr,18),ca=J(Kr,18),la=J(qr,18),ua=J(Jr,18),da=J(Yr,18),fa=J(Xr,18),pa=J(Zr,18),ma=J(Qr,18),ha=J($r,18),ga=J(ei,14),_a=J(ti,14),va=J(ni,16),ya=J(ri,16),ba=J(ii,16),xa=J(ai,16),Sa=J(oi,16),Ca=J(si,16),wa=J(ci,16),Ta=J(li,16),Ea=J(ui,14),Da=J(di,14);async function Oa(e,t,n){return l.available?(await l.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function ka(e){return Oa(`folder`,[],e??``)}function Aa(e){return Oa(`file`,e??[],``)}var ja=null,Ma=null;function Na(e){ja=e}function Pa(e){return ja?ja(e):Promise.resolve()}function Fa(e){Ma=e}function Ia(e,t=!1){return Ma?Ma(e,t):Promise.resolve(null)}var La=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],Ra=null,za=0,Ba=new Set;function Va(){za+=1;for(let e of Ba)e()}function Ha(e){return Ba.add(e),()=>Ba.delete(e)}function Ua(){return za}function Wa(e){Ra=e,Va()}function Ga(){return(0,R.useSyncExternalStore)(Ha,Ua,Ua),Ra}var Ka=_(),qa=n`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Ja=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ya=m`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Xa=m`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Za=m`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Qa=m`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,$a=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,eo=m`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,to=m`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,no=n`animation: ${Ja} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,ro=n`animation: ${Ya} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,io=n`animation: ${Xa} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${Za} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var ao=n`animation: ${Qa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,oo=n`animation: ${$a} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,so=n`animation: ${eo} 140ms ease-out;`,co=n`animation: ${to} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function lo({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,R.useState)([]),s=(0,R.useRef)(void 0);if((0,R.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,R.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,q.jsx)(bo,{},`group-rule-${i}`)),n.push((0,q.jsx)(yo,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,q.jsx)(bo,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,q.jsxs)(go,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,q.jsx)(_o,{children:e.loading?(0,q.jsx)(xo,{}):e.icon}),(0,q.jsx)(vo,{children:e.label}),a?(0,q.jsx)(wi,{size:12}):e.checked&&(0,q.jsx)(Mi,{size:12})]},`${e.label}-${i}`))}),n};return(0,Ka.createPortal)((0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(uo,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(fo,{children:r.map((e,t)=>(0,q.jsxs)(po,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,q.jsx)(mo,{children:e.icon}),(0,q.jsx)(ho,{children:e.label})]},`${e.label}-${t}`))}),(0,q.jsx)(bo,{})]}),m(n,0)]}),a.map((e,t)=>(0,q.jsx)(uo,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var uo=v.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${qa}
    ${ro}
    transform-origin: top left;
`,fo=v.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,po=v.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    min-width: 48px;
    padding: 5px 4px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};
    cursor: pointer;
    transition: background 120ms ease, color 120ms ease;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,mo=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,ho=v.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,go=v.button`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 7px 10px 7px ${({$depth:e=0})=>10+e*14}px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};
    font: inherit;
    font-size: 13px;
    text-align: left;
    cursor: pointer;
    transition: background 120ms ease, color 120ms ease;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`,_o=v.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,vo=v.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,yo=v.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,bo=v.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,xo=v.span`
    width: 10px;
    height: 10px;
    border: 1px solid var(--border-color-hover);
    border-top-color: var(--accent-primary);
    border-radius: 50%;
    animation: yafm-menu-spin 700ms linear infinite;

    @keyframes yafm-menu-spin {
        to {
            transform: rotate(360deg);
        }
    }
`;function So({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:s,onOpenFile:c,onRename:l,onDelete:u,onCopy:d,onPaste:f,onCreateFolder:p,onCreateFile:m,creationOnly:h=!1,onRefresh:g,onAddToTray:_,onAddFavorite:v,onRemoveFavorite:y,favoritePaths:b,onExtractArchive:S,allowCompression:C=!1,onCompressTo:w,onArchiveCreated:ee}){let D=o(),O=Ga(),k=T(t),[te,A]=(0,R.useState)({verbs:[],safe:!0,loading:!1}),[j,M]=(0,R.useState)({recommended:[],other:[],loading:!1}),[N,re]=(0,R.useState)(null),ie=(0,R.useRef)(0),ae=(0,R.useRef)(0),oe=e?.paths.length===1,se=e?.background?t?[t]:[]:e?.paths??[],P=e?.background?t||null:oe&&n?.isDirectory?n.path:null;if((0,R.useEffect)(()=>{if(!e){A({verbs:[],safe:!0,loading:!1}),M({recommended:[],other:[],loading:!1});return}let t=++ie.current;A({verbs:[],safe:!0,loading:se.length>0&&!k}),se.length>0&&!k&&Vt(se).then(e=>{ie.current===t&&A({...e,loading:!1})},()=>{ie.current===t&&A({verbs:[],safe:!0,loading:!1})});let r=++ae.current;!k&&oe&&n?(M({recommended:[],other:[],loading:!0}),It(n.path).then(e=>{ae.current===r&&M({...e,loading:!1})},()=>{ae.current===r&&M({recommended:[],other:[],loading:!1})})):M({recommended:[],other:[],loading:!1})},[e,oe,n?.path,n?.isDirectory,se.length,k]),(0,R.useEffect)(()=>{if(!e||k||!P){re(null);return}let t=!0;return kt(P).then(e=>{t&&re(e)},()=>{t&&re(null)}),()=>{t=!1}},[e,P,k]),!e)return null;let F=[],I=[],ce=new Set((b??[]).map(E)),le=e.background?t?[t]:[]:e.paths,ue=le.length>0&&le.every(e=>ce.has(E(e))),de=()=>n?fe(n.path,n.isDirectory):`Archive`,fe=(e,t)=>{let n=x(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},pe=async(e,n=de())=>{let r=await Ut(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?ee?.(r.path,!0):Pa(r.error??D(`could_not_create_the_archive`))},me=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},he=async()=>{if(!P||N===null)return;let e=await At(P,!N);e.ok?(re(e.enabled),g?.()):Pa(e.error??D(`could_not_change_the_case_sensitivity`))},L=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await jt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await jt(e,t,`${a}\\${wo(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?g?.():Pa(o.error??D(`could_not_create_the_link`))},ge=async e=>{if(!n)return;let r=await ka(t);r&&await L(e,n.path,r,x(n.path),e.endsWith(`-copy`))},_e=async e=>{let n=O?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=E(a)===E(t);await L(n,r.path,t,x(r.path),i&&!o)}},ve=async()=>{let t=(await wt(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Wa({paths:t})},ye=()=>{let e=O?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:D(`cancel_selected_link`),icon:(0,q.jsx)(Ni,{size:14}),onSelect:()=>Wa(null)},...t?[{label:D(`hard_link`),icon:(0,q.jsx)(gi,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard`)}]:[],{label:D(`symbolic_link`),icon:(0,q.jsx)(gi,{size:14}),separatorBefore:!t,onSelect:()=>void _e(`symbolic-file`)},...n?[{label:D(`directory_junction`),icon:(0,q.jsx)(hi,{size:14}),onSelect:()=>void _e(`junction`)},{label:D(`smart_copy`),icon:(0,q.jsx)(va,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`smart-copy`)},{label:D(`smart_mirror`),icon:(0,q.jsx)(va,{size:14}),onSelect:()=>void _e(`smart-mirror`)},{label:D(`multi_version_smart_copy`),icon:(0,q.jsx)(va,{size:14}),onSelect:()=>void _e(`multi-version-smart-copy`)},{label:D(`hardlink_copy`),icon:(0,q.jsx)(va,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard-copy`)},{label:D(`symbolic_link_copy`),icon:(0,q.jsx)(va,{size:14}),onSelect:()=>void _e(`symbolic-copy`)}]:[]]};if(e.background){if(p&&I.push({label:D(`new_folder`),icon:(0,q.jsx)(xi,{size:16}),shortcut:Zt(r.newFolder),onSelect:p}),m||p){let e=[];p&&(e.push({label:D(`folder`),icon:(0,q.jsx)(hi,{size:14}),onSelect:()=>p(!1)}),k||e.push({label:D(`case_sensitive_folder`),icon:(0,q.jsx)(_a,{size:14}),onSelect:()=>p(!0)})),m&&e.push(...La.map((e,t)=>({label:`${D(e.label)} (${e.extension})`,icon:(0,q.jsx)(gi,{size:14}),separatorBefore:t===0,onSelect:()=>m(e.extension)}))),F.push({label:D(`new`),icon:(0,q.jsx)(xi,{size:14}),children:e,onSelect:()=>void 0})}if(k||F.push({label:D(`create_link`),icon:(0,q.jsx)(xa,{size:14}),disabled:!O,children:ye(),onSelect:()=>void 0}),h)return(0,q.jsx)(lo,{items:F,onClose:a,quick:I,x:e.x,y:e.y});!k&&s&&F.push({label:D(`open_in_new_tab`),icon:(0,q.jsx)(xi,{size:14}),onSelect:()=>s(t,!0)}),F.push({label:D(`copy_as_path`),icon:(0,q.jsx)(va,{size:14}),onSelect:()=>void me([t])}),_&&F.push({label:D(`add_to_file_tray`),icon:(0,q.jsx)(pa,{size:14}),onSelect:()=>_([t])}),!k&&(ue?y:v)&&F.push({label:D(ue?`remove_from_favorites`:`add_to_favorites`),icon:ue?(0,q.jsx)(ga,{size:14}):(0,q.jsx)(ha,{size:14}),onSelect:()=>ue?y?.([t]):v?.([t])}),!k&&N!==null&&F.push({label:D(`case_sensitive_names`),icon:(0,q.jsx)(_a,{size:14}),checked:N,onSelect:()=>void he()}),!k&&C&&(F.push({label:D(`open_in_terminal`),icon:(0,q.jsx)(da,{size:14}),onSelect:()=>void Ft(t)}),F.push({label:D(`show_in_explorer`),icon:(0,q.jsx)(hi,{size:14}),separatorBefore:!0,onSelect:()=>void Bt(t)})),f&&I.push({label:D(`paste`),icon:(0,q.jsx)(ba,{size:16}),disabled:!i,shortcut:Zt(r.paste),onSelect:()=>f(t)}),k||I.push({label:D(`properties`),icon:(0,q.jsx)(Ti,{size:16}),shortcut:Zt(r.properties),onSelect:()=>void Nt([t])})}else{if(s&&F.push({label:D(`open`),icon:(0,q.jsx)(Ci,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&c?.(n.path)}}),n?.isDirectory&&(s&&F.push({label:D(`open_in_new_tab`),icon:(0,q.jsx)(xi,{size:14}),onSelect:()=>s(n.path,!0)}),f&&F.push({label:D(`paste_into_folder`),icon:(0,q.jsx)(ba,{size:14}),disabled:!i,onSelect:()=>f(n.path)}),k||F.push({label:D(`open_in_terminal`),icon:(0,q.jsx)(da,{size:14}),onSelect:()=>void Ft(n.path)})),!k&&oe&&n&&!n.isDirectory&&ne(n.path)&&S&&F.push({label:D(`extract_archive`),icon:(0,q.jsx)(Hi,{size:14}),separatorBefore:!0,children:[{label:D(`extract_here`),icon:(0,q.jsx)(Hi,{size:14}),onSelect:()=>S(n.path,`here`)},{label:D(`extract_to_a_folder_named_after_the_archive`),icon:(0,q.jsx)(Hi,{size:14}),onSelect:()=>S(n.path,`named`)},{label:D(`auto_extract_to_the_current_folder`),icon:(0,q.jsx)(Hi,{size:14}),onSelect:()=>S(n.path,`auto`)},{label:D(`extract_to`),icon:(0,q.jsx)(hi,{size:14}),separatorBefore:!0,onSelect:()=>S(n.path,`choose`)}],onSelect:()=>void 0}),!k&&oe&&n){let e=[];if(j.loading)e.push({label:D(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of j.recommended)e.push({label:t.name,group:D(`suggested_apps`),icon:t.icon?(0,q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,q.jsx)(Wi,{size:14}),onSelect:()=>void Lt(n.path,t.path).then(e=>{e||Pt(n.path)})});for(let t of j.other)e.push({label:t.name,group:D(`other_apps`),icon:t.icon?(0,q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,q.jsx)(Wi,{size:14}),onSelect:()=>void Lt(n.path,t.path).then(e=>{e||Pt(n.path)})})}e.push({label:D(`choose_another_app`),icon:(0,q.jsx)(Wi,{size:14}),separatorBefore:!0,onSelect:()=>void Pt(n.path)}),F.push({label:D(`open_with_2`),icon:(0,q.jsx)(Wi,{size:14}),children:e,onSelect:()=>void Pt(n.path)})}if(k||F.push({label:D(`compress`),icon:(0,q.jsx)(Hi,{size:14}),separatorBefore:!0,children:[{label:D(`compress_to_zip`),icon:(0,q.jsx)(Hi,{size:14}),onSelect:()=>void pe(e.paths)},{label:D(`compress_to`),icon:(0,q.jsx)(Hi,{size:14}),onSelect:()=>w?.(e.paths,de())}],onSelect:()=>void 0}),!k&&(e?.paths.length??0)>0){let e=[{label:D(`select_link_source`),icon:(0,q.jsx)(xa,{size:14}),onSelect:()=>void ve()},...O?[{label:D(`cancel_selected_link`),icon:(0,q.jsx)(Ni,{size:14}),onSelect:()=>Wa(null)}]:[],...oe&&n?n.isDirectory?[{label:D(`symbolic_link`),icon:(0,q.jsx)(hi,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-folder`)},{label:D(`directory_junction`),icon:(0,q.jsx)(hi,{size:14}),onSelect:()=>void ge(`junction`)},{label:D(`smart_copy`),icon:(0,q.jsx)(va,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`smart-copy`)},{label:D(`smart_mirror`),icon:(0,q.jsx)(va,{size:14}),onSelect:()=>void ge(`smart-mirror`)},{label:D(`multi_version_smart_copy`),icon:(0,q.jsx)(va,{size:14}),onSelect:()=>void ge(`multi-version-smart-copy`)},{label:D(`hardlink_copy`),icon:(0,q.jsx)(va,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`hard-copy`)},{label:D(`symbolic_link_copy`),icon:(0,q.jsx)(va,{size:14}),onSelect:()=>void ge(`symbolic-copy`)}]:[{label:D(`symbolic_link`),icon:(0,q.jsx)(gi,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-file`)},{label:D(`hard_link`),icon:(0,q.jsx)(gi,{size:14}),onSelect:()=>void ge(`hard`)}]:[]];F.push({label:D(`create_link`),icon:(0,q.jsx)(xa,{size:14}),children:e,onSelect:()=>void 0})}!k&&n?.isDirectory&&N!==null&&F.push({label:D(`case_sensitive_names`),icon:(0,q.jsx)(_a,{size:14}),checked:N,onSelect:()=>void he()}),F.push({label:D(`copy_as_path`),icon:(0,q.jsx)(va,{size:14}),onSelect:()=>void me(e.paths)}),_&&F.push({label:D(`add_to_file_tray`),icon:(0,q.jsx)(pa,{size:14}),onSelect:()=>_(e.paths)}),!k&&(ue?y:v)&&F.push({label:D(ue?`remove_from_favorites`:`add_to_favorites`),icon:ue?(0,q.jsx)(ga,{size:14}):(0,q.jsx)(ha,{size:14}),onSelect:()=>ue?y?.(le):v?.(le)}),k||F.push({label:D(`show_in_explorer`),icon:(0,q.jsx)(hi,{size:14}),separatorBefore:!0,onSelect:()=>void Bt(le[0])}),d&&I.push({label:D(`cut`),icon:(0,q.jsx)(ya,{size:16}),shortcut:Zt(r.cut),onSelect:()=>d(e.paths,!0)},{label:D(`copy`),icon:(0,q.jsx)(va,{size:16}),shortcut:Zt(r.copy),onSelect:()=>d(e.paths,!1)}),oe&&n&&l&&I.push({label:D(`rename`),icon:(0,q.jsx)(Qi,{size:16}),shortcut:Zt(r.rename),onSelect:()=>l(n.path)}),u&&I.push({label:D(`delete`),icon:(0,q.jsx)(ji,{size:16}),danger:!0,shortcut:Zt(r.delete),onSelect:()=>u(e.paths)}),k||I.push({label:D(`properties`),icon:(0,q.jsx)(Ti,{size:16}),shortcut:Zt(r.properties),onSelect:()=>void Nt(e.paths)})}if(te.loading)F.push({label:D(`more_actions`),icon:(0,q.jsx)(Wi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(te.verbs.length>0){let e={items:[],children:new Map};for(let t of te.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,q.jsx)(Co,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Ht(se,te.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];F.push({label:D(te.safe?`more_actions`:`more_actions_extensions`),icon:(0,q.jsx)(Wi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,q.jsx)(lo,{items:F,onClose:a,quick:I,x:e.x,y:e.y})}function Co({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,q.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,q.jsx)(Ci,{size:14});case`document`:return(0,q.jsx)(Xi,{size:14});case`cut`:return(0,q.jsx)(ya,{size:14});case`copy`:return(0,q.jsx)(va,{size:14});case`paste`:return(0,q.jsx)(ba,{size:14});case`trash`:return(0,q.jsx)(ji,{size:14});case`pencil`:return(0,q.jsx)(Qi,{size:14});case`gear`:return(0,q.jsx)(Ti,{size:14});case`star`:return(0,q.jsx)(aa,{size:14});case`pin`:return(0,q.jsx)(Ei,{size:14});case`executable`:return(0,q.jsx)(Wi,{size:14});case`share`:return(0,q.jsx)(xa,{size:14});case`arrow`:return(0,q.jsx)(Ci,{size:14});default:return(0,q.jsx)(Ii,{size:14})}}function wo(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function To({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:s,zIndex:c=3200}){let l=o(),[u,d]=(0,R.useState)(null),f=(0,R.useRef)(null),p=t.find(t=>t.value===e)??t[0];return(0,R.useEffect)(()=>{if(!u)return;let e=()=>d(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[u]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Eo,{$icon:a!==void 0,"aria-expanded":u!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(u){d(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;d({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:f,style:i&&!a?{width:i}:void 0,title:s??p?.title,type:`button`,children:[a===void 0?(0,q.jsx)(Do,{children:p?.label??``}):(0,q.jsx)(Oo,{children:a}),a===void 0&&(0,q.jsx)(ko,{children:(0,q.jsx)(wi,{size:11})})]}),u&&(0,Ka.createPortal)((0,q.jsx)(Ao,{"aria-label":l(`options`),"data-select-menu":`true`,$menuZIndex:c,role:`listbox`,style:{bottom:u.bottom,left:u.left,minWidth:u.width,top:u.top},children:t.map(t=>(0,q.jsxs)(jo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),d(null)},role:`option`,title:t.title,type:`button`,children:[(0,q.jsx)(Mo,{children:t.label}),t.value===e&&(0,q.jsx)(Mi,{size:11})]},t.value))}),document.body)]})}var Eo=v.button`
    display: inline-flex;
    align-items: center;
    justify-content: ${({$icon:e})=>e?`center`:`space-between`};
    gap: 10px;
    min-width: ${({$icon:e})=>e?`34px`:`120px`};
    width: ${({$icon:e})=>e?`34px`:void 0};
    height: 32px;
    padding: ${({$icon:e})=>e?`0`:`0 9px 0 10px`};
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: ${({$icon:e})=>e?`transparent`:`var(--bg-input)`};
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease, transform 130ms ease;

    &:hover {
        border-color: ${({$icon:e})=>`var(--border-color-hover)`};
        background: ${({$icon:e})=>e?`rgba(var(--accent-rgb), 0.10)`:`var(--bg-input)`};
        color: var(--text-primary);
        transform: ${({$icon:e})=>e?`translateY(-1px)`:`none`};
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }

    &:disabled {
        opacity: 0.55;
        cursor: default;
    }
`,Do=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Oo=v.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,ko=v.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Ao=v.div`
    position: fixed;
    z-index: ${({$menuZIndex:e})=>e};
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-width: min(520px, 90vw);
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${ro}
`,jo=v.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 7px 9px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.12);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`,Mo=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,No=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],Po=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],Fo=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],Io=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Lo=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function Ro({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=o(),a=(0,R.useRef)(null),[s,c]=(0,R.useState)(e),[l,u]=(0,R.useState)(t),[d,f]=(0,R.useState)(`zip`),[p,m]=(0,R.useState)(`5`),[h,g]=(0,R.useState)(`default`),[_,v]=(0,R.useState)(`none`),[y,b]=(0,R.useState)(``),[x,S]=(0,R.useState)(`0`),[C,w]=(0,R.useState)(!1);(0,R.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let T=No.find(e=>e.value===d)??No[0],E=d===`zip`||d===`zipx`,ee=_!==`none`,D=E||d===`7z`,O=d===`zip`||d===`7z`,k=async()=>{if(C||!l.trim()||!s||ee&&y.length===0)return;w(!0);let e=await r({directory:s,name:l.trim(),format:d,level:T.level?Number(p):0,method:E?h:null,encryption:D?_:`none`,password:ee?y:void 0,splitSize:O?Number(x):0});w(!1),e&&n()};return(0,Ka.createPortal)((0,q.jsx)(zo,{onPointerDown:e=>{e.target===e.currentTarget&&!C&&n()},children:(0,q.jsxs)(Bo,{"aria-modal":`true`,role:`dialog`,children:[(0,q.jsx)(Vo,{children:i(`compress_to`)}),(0,q.jsxs)(Ho,{children:[(0,q.jsx)(Uo,{children:i(`archive_name`)}),(0,q.jsx)(Wo,{onChange:e=>u(e.target.value),ref:a,value:l,onKeyDown:e=>{e.key===`Enter`&&k()}}),(0,q.jsx)(Go,{children:T.extension})]}),(0,q.jsxs)(Ho,{children:[(0,q.jsx)(Uo,{children:i(`format`)}),(0,q.jsx)(To,{onChange:e=>f(e),options:No.map(e=>({value:e.value,label:i(e.label)})),value:d,width:236,zIndex:3700})]}),(0,q.jsxs)(Ho,{children:[(0,q.jsx)(Uo,{children:i(`method`)}),(0,q.jsx)(To,{disabled:!E,onChange:g,options:Po.map(e=>({...e,label:i(e.label)})),value:E?h:`default`,width:236,zIndex:3700})]}),(0,q.jsxs)(Ho,{children:[(0,q.jsx)(Uo,{children:i(`encryption`)}),(0,q.jsx)(To,{disabled:!D,onChange:e=>{v(e),e===`none`&&b(``)},options:Fo.map(e=>({...e,label:i(e.label)})),value:D?_:`none`,width:236,zIndex:3700})]}),ee&&(0,q.jsxs)(Ho,{children:[(0,q.jsx)(Uo,{children:i(`password`)}),(0,q.jsx)(Wo,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,q.jsxs)(Ho,{children:[(0,q.jsx)(Uo,{children:i(`split_volumes`)}),(0,q.jsx)(To,{disabled:!O,onChange:S,options:Io.map(e=>({...e,label:i(e.label)})),value:O?x:`0`,width:236,zIndex:3700})]}),(0,q.jsxs)(Ho,{children:[(0,q.jsx)(Uo,{children:i(`compression_level`)}),(0,q.jsx)(To,{disabled:!T.level,onChange:m,options:Lo.map(e=>({...e,label:i(e.label)})),value:T.level?p:d===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,q.jsxs)(Ho,{$stack:!0,children:[(0,q.jsx)(Uo,{children:i(`destination`)}),(0,q.jsxs)(Ko,{children:[(0,q.jsx)(qo,{title:s,children:s}),(0,q.jsx)(Yo,{disabled:C,onClick:()=>void ka(s).then(e=>{e&&c(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,q.jsxs)(Jo,{children:[(0,q.jsx)(Yo,{disabled:C,onClick:n,type:`button`,children:i(`cancel`)}),(0,q.jsx)(Xo,{disabled:C||!l.trim()||ee&&y.length===0,onClick:()=>void k(),type:`button`,children:i(C?`compressing`:`compress`)})]})]})}),document.body)}var zo=v.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${so}
`,Bo=v.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${no}
`,Vo=v.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ho=v.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Uo=v.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Wo=v.input`
    min-width: 0;
    flex: 1;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    outline: none;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,Go=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Ko=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,qo=v.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Jo=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Yo=v.button`
    min-height: 32px;
    padding: 0 11px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`,Xo=v(Yo)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Zo({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:s}){let c=o(),l=(0,R.useRef)(null);return(0,R.useEffect)(()=>{if(!e)return;l.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),s()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,s]),e?(0,Ka.createPortal)((0,q.jsx)(Qo,{onPointerDown:e=>{e.target===e.currentTarget&&s()},children:(0,q.jsxs)($o,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(es,{children:t}),(0,q.jsx)(ts,{children:n}),(0,q.jsxs)(ns,{children:[(0,q.jsx)(rs,{onClick:s,type:`button`,children:c(`cancel`)}),(0,q.jsx)(rs,{$danger:i,onClick:a,ref:l,type:`button`,children:r})]})]})}),document.body):null}var Qo=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${so}
`,$o=v.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${no}
`,es=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,ts=v.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,ns=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,rs=v.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid ${({$danger:e})=>e?`rgba(248, 113, 113, 0.5)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.16)`:`var(--bg-input)`};
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.8)`:`var(--border-color-hover)`};
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,is=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),as=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),os=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),ss=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function cs({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:s,emptyNote:c}){let l=o(),[u,d]=(0,R.useState)(!1),[f,p]=(0,R.useState)(!1),[m,h]=(0,R.useState)(!1),[g,_]=(0,R.useState)(0),[v,y]=(0,R.useState)(0),[b,x]=(0,R.useState)(null),[S,C]=(0,R.useState)(!1),[w,T]=(0,R.useState)(!1),E=(0,R.useRef)(null),ee=(0,R.useRef)(null),D=(0,R.useRef)(null),O=(0,R.useRef)(null),[k,te]=(0,R.useState)(()=>{let e=Xn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),A=e?.path??null,j=W(A),M=e?ls(e.name):``,ne=!!e&&!e.isDirectory&&is.has(M),N=!!e&&!e.isDirectory&&as.has(M),re=!!e&&!e.isDirectory&&os.has(M),ie=!!e&&!e.isDirectory&&ss.has(M),ae=!!e&&!e.isDirectory&&M===`pdf`,oe=vn(ne?j:null,512,e?.modified??0),se=bn(re?j:null,e?.modified??0,M),P=bn(ne||N?j:null,e?.modified??0,M),F=xn(ae?j:null,e?.modified??0),I=U(!ne&&!N&&!re&&!ie&&!ae?j:null,e?.isDirectory??!1);if((0,R.useEffect)(()=>{d(!1),p(!1),h(!1),_(0),y(0),T(!1)},[A]),(0,R.useEffect)(()=>{if(!j||!ie){x(null),C(!1);return}let e=!0;return C(!0),x(null),ke(j).then(t=>{e&&(x(t),C(!1))},()=>{e&&(x({text:null,truncated:!1,error:l(`could_not_read_this_file`)}),C(!1))}),()=>{e=!1}},[j,ie]),!e&&!c)return null;let ce=e=>{D.current={x:e.clientX,width:ee.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},le=e=>{let t=D.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},ue=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},de=e=>{O.current={y:e.clientY,height:k},e.currentTarget.setPointerCapture(e.pointerId)},fe=e=>{let t=O.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);te(n),Zn(`yafm.preview.media.height`,n)},pe=e=>{O.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,q.jsxs)(ds,{$open:r,children:[r&&(0,q.jsx)(fs,{onPointerDown:ce,onPointerMove:le,onPointerUp:ue,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsx)(ps,{ref:ee,style:{width:r?t:0},children:(0,q.jsxs)(ms,{children:[(0,q.jsx)(hi,{size:56}),(0,q.jsx)(`span`,{children:c})]})})]});let me=()=>{let e=E.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,q.jsxs)(ds,{$open:r,children:[r&&(0,q.jsx)(fs,{onPointerDown:ce,onPointerMove:le,onPointerUp:ue,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(ps,{ref:ee,style:{width:r?t:0},children:[(0,q.jsx)(hs,{style:{height:k},children:ne&&P&&!u?(0,q.jsxs)(_s,{onPointerEnter:()=>h(!0),onPointerLeave:()=>h(!1),children:[(0,q.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:me,onDurationChange:e=>_(e.currentTarget.duration||0),onError:()=>d(!0),onLoadedMetadata:e=>{_(e.currentTarget.duration||0),y(e.currentTarget.currentTime)},onPause:()=>p(!1),onPlay:()=>p(!0),onTimeUpdate:e=>y(e.currentTarget.currentTime),playsInline:!0,poster:oe??void 0,preload:`metadata`,ref:E,src:P}),(0,q.jsx)(vs,{$visible:!f,onClick:me,title:l(`play`),type:`button`,children:(0,q.jsx)(Sa,{size:28})}),(0,q.jsxs)(ys,{$visible:m,onClick:e=>e.stopPropagation(),children:[(0,q.jsxs)(bs,{children:[(0,q.jsx)(`span`,{children:us(v)}),(0,q.jsx)(`span`,{children:us(g)})]}),(0,q.jsx)(xs,{"aria-label":l(`seek`),max:g||0,min:0,onChange:e=>{let t=E.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,y(n)},step:.1,type:`range`,value:Math.min(v,g||0)})]})]}):N&&P?(0,q.jsx)(`audio`,{controls:!0,src:P}):re&&se?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:se}):ae&&F&&!w?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>T(!0),src:F}):ae?(0,q.jsx)(gi,{size:64}):ie?(0,q.jsx)(Ss,{children:S||!b?(0,q.jsx)(ws,{children:l(`loading`)}):b.error?(0,q.jsx)(ws,{children:b.error}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Cs,{children:b.text}),b.truncated&&(0,q.jsx)(ws,{children:l(`showing_the_first_256_kb`)})]})}):ne&&oe?(0,q.jsx)(`img`,{alt:``,src:oe}):I?(0,q.jsx)(`img`,{alt:``,src:I}):e.isDirectory?(0,q.jsx)(hi,{size:64}):(0,q.jsx)(gi,{size:64})}),(0,q.jsx)(gs,{onDoubleClick:()=>{te(210),Zn(`yafm.preview.media.height`,210)},onPointerDown:de,onPointerMove:fe,onPointerUp:pe,title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(Ts,{children:[(0,q.jsx)(Es,{title:e.path,children:e.name}),s&&(0,q.jsx)(Ds,{children:s}),(0,q.jsx)(Os,{children:e.fields.map(e=>(0,q.jsxs)(ks,{children:[(0,q.jsx)(As,{children:e.label}),(0,q.jsx)(js,{title:e.value,children:e.value})]},e.label))})]})]})]})}function ls(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function us(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var ds=v.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,fs=v.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ps=v.aside`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    background: rgba(var(--bg-rgb), 0.62);
    backdrop-filter: blur(14px) saturate(110%);
    -webkit-backdrop-filter: blur(14px) saturate(110%);
    font-family: var(--font-details), var(--font-cjk);
    transition: width 180ms cubic-bezier(0.22, 1, 0.36, 1);
`,ms=v.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 24px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;

    svg {
        color: var(--text-muted);
        opacity: 0.45;
    }
`,hs=v.div`
    position: relative;
    display: grid;
    place-items: center;
    height: 210px;
    flex-shrink: 0;
    overflow: hidden;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.34);

    img,
    video {
        display: block;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    audio {
        width: calc(100% - 20px);
    }

    svg {
        color: var(--text-muted);
    }
`,gs=v.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,_s=v.div`
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    overflow: hidden;

    video {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`,vs=v.button`
    position: absolute;
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 50%;
    /* A media control stays dark in both palettes: the picture behind it is either way. */
    background: rgba(8, 10, 18, 0.62);
    color: #fff;
    cursor: pointer;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    opacity: ${({$visible:e})=>+!!e};
    transform: ${({$visible:e})=>e?`scale(1)`:`scale(0.82)`};
    pointer-events: ${({$visible:e})=>e?`auto`:`none`};
    transition: opacity 180ms ease, transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    background 140ms ease, border-color 140ms ease;

    svg {
        margin-left: 3px;
        fill: currentColor;
        stroke: currentColor;
    }

    &:hover {
        border-color: var(--border-color-focus);
        background: rgba(var(--bg-rgb), 0.86);
        transform: scale(1.06);
    }
`,ys=v.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 10px 8px;
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
    opacity: ${({$visible:e})=>+!!e};
    transform: translateY(${({$visible:e})=>e?`0`:`8px`});
    pointer-events: ${({$visible:e})=>e?`auto`:`none`};
    transition: opacity 160ms ease, transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
`,bs=v.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,xs=v.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Ss=v.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,Cs=v.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,ws=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Ts=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Es=v.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Ds=v.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Os=v.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,ks=v.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,As=v.span`
    color: var(--text-muted);
`,js=v.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Ms=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Ns=[...Ms],Ps={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},Fs={folder:e=>(0,q.jsx)(hi,{size:e}),home:e=>(0,q.jsx)(mi,{size:e}),desktop:e=>(0,q.jsx)($i,{size:e}),documents:e=>(0,q.jsx)(ea,{size:e}),downloads:e=>(0,q.jsx)(ta,{size:e}),pictures:e=>(0,q.jsx)(na,{size:e}),music:e=>(0,q.jsx)(ra,{size:e}),videos:e=>(0,q.jsx)(ia,{size:e}),drive:e=>(0,q.jsx)(_i,{size:e}),image:e=>(0,q.jsx)(zi,{size:e}),video:e=>(0,q.jsx)(Bi,{size:e}),audio:e=>(0,q.jsx)(Vi,{size:e}),text:e=>(0,q.jsx)(Li,{size:e}),code:e=>(0,q.jsx)(Ri,{size:e}),clock:e=>(0,q.jsx)(ki,{size:e}),star:e=>(0,q.jsx)(aa,{size:e}),file:e=>(0,q.jsx)(gi,{size:e}),archive:e=>(0,q.jsx)(Hi,{size:e}),pdf:e=>(0,q.jsx)(Ui,{size:e}),executable:e=>(0,q.jsx)(Wi,{size:e}),font:e=>(0,q.jsx)(Gi,{size:e}),database:e=>(0,q.jsx)(Ki,{size:e}),config:e=>(0,q.jsx)(qi,{size:e}),spreadsheet:e=>(0,q.jsx)(Ji,{size:e}),presentation:e=>(0,q.jsx)(Yi,{size:e}),document:e=>(0,q.jsx)(Xi,{size:e}),app:e=>(0,q.jsx)(Ii,{size:e}),gear:e=>(0,q.jsx)(Ti,{size:e}),pin:e=>(0,q.jsx)(Ei,{size:e}),trash:e=>(0,q.jsx)(ji,{size:e}),overview:e=>(0,q.jsx)(Zi,{size:e}),book:e=>(0,q.jsx)(oa,{size:e}),briefcase:e=>(0,q.jsx)(sa,{size:e}),cloud:e=>(0,q.jsx)(ca,{size:e}),gamepad:e=>(0,q.jsx)(la,{size:e}),camera:e=>(0,q.jsx)(ua,{size:e}),terminal:e=>(0,q.jsx)(da,{size:e}),server:e=>(0,q.jsx)(fa,{size:e}),package:e=>(0,q.jsx)(pa,{size:e}),globe:e=>(0,q.jsx)(ma,{size:e}),heart:e=>(0,q.jsx)(ha,{size:e}),share:e=>(0,q.jsx)(fa,{size:e}),favorites:e=>(0,q.jsx)(ha,{size:e})};function Is(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ls(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Ms)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Ns.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Is(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${Ps[n]??n}${Rs(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Rs(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function zs({panel:e,size:t=16}){let n=G(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,q.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Fs[e.icon]:void 0;if(r)return(0,q.jsx)(q.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,q.jsx)(hi,{size:t});case`recent`:return(0,q.jsx)(ki,{size:t});case`frequent`:return(0,q.jsx)(aa,{size:t});case`drives`:return(0,q.jsx)(_i,{size:t});case`home`:return(0,q.jsx)(mi,{size:t});case`share`:return(0,q.jsx)(fa,{size:t});case`favorites`:return(0,q.jsx)(ha,{size:t});default:return(0,q.jsx)(hi,{size:t})}}function Bs({place:e,size:t=18}){let n=G(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,q.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Fs[e.icon]?(0,q.jsx)(q.Fragment,{children:Fs[e.icon](t)}):(0,q.jsx)(hi,{size:t})}var Vs=`#64748b`;function Hs(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Us({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:s}){let c=o(),[l,u]=(0,R.useState)(``),[d,f]=(0,R.useState)(`#2dd4bf`),p=(0,R.useRef)(null);(0,R.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||s()},t=e=>{e.key===`Escape`&&s()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,s),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,s)}},[s]);let m=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),h=e=>i[e]??`#64748b`,g=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},_=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=l.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:d}),u(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Ka.createPortal)((0,q.jsxs)(Ws,{"data-tag-menu":`true`,ref:p,style:{left:y,top:b},children:[(0,q.jsxs)(Gs,{children:[(0,q.jsx)(`span`,{children:c(`tags`)}),(0,q.jsx)(Ks,{onClick:s,title:c(`close`),type:`button`,children:(0,q.jsx)(Ni,{size:11})})]}),(0,q.jsxs)(qs,{children:[m.length===0&&(0,q.jsx)(Zs,{children:c(`no_tags_yet`)}),m.map(e=>{let t=h(e),r=n.includes(e);return(0,q.jsxs)(Js,{children:[(0,q.jsx)(Ys,{"aria-label":c(`color_of_tag`,{tag:e}),onChange:t=>_(e,t.target.value),title:c(`change_this_tag_s_color`),type:`color`,value:t}),(0,q.jsxs)(Xs,{$color:t,$ink:Hs(t),$on:r,onClick:()=>g(e),type:`button`,children:[r&&(0,q.jsx)(Mi,{size:11}),(0,q.jsx)(`span`,{children:e})]})]},e)})]}),(0,q.jsxs)(Qs,{children:[(0,q.jsx)(Ys,{"aria-label":c(`color_of_the_new_tag`),onChange:e=>f(e.target.value),title:c(`color_of_the_new_tag`),type:`color`,value:d}),(0,q.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:c(`new_tag`),spellCheck:!1,value:l}),(0,q.jsx)($s,{onClick:v,type:`button`,children:c(`add`)})]})]}),document.body)}var Ws=v.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${no}
`,Gs=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Ks=v.button`
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,qs=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Js=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ys=v.input`
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background: transparent;
    cursor: pointer;

    &::-webkit-color-swatch-wrapper {
        padding: 1px;
    }

    &::-webkit-color-swatch {
        border: 0;
        border-radius: 3px;
    }
`,Xs=v.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    max-width: 100%;
    padding: 3px 9px;
    border: 1px solid ${({$on:e,$color:t})=>e?t:`var(--border-color)`};
    border-radius: 999px;
    background: ${({$on:e,$color:t})=>e?t:`transparent`};
    color: ${({$on:e,$ink:t})=>e?t:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    cursor: pointer;

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &:hover {
        border-color: ${({$color:e})=>e};
    }
`,Zs=v.span`
    font-size: 11px;
    color: var(--text-muted);
`,Qs=v.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 9px;

    input:not([type="color"]) {
        flex: 1;
        min-width: 0;
        padding: 4px 6px;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-sm);
        background: var(--bg-input);
        color: var(--text-primary);
        font-size: 11px;
        outline: 0;

        &:focus {
            border-color: var(--border-color-focus);
        }
    }
`,$s=v.button`
    padding: 4px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,ec={file:gi,folder:hi,text:Li,code:Ri,image:zi,video:Bi,audio:Vi,archive:Hi,pdf:Ui,executable:Wi,font:Gi,database:Ki,config:qi,spreadsheet:Ji,presentation:Yi,document:Xi},tc={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function nc(e){let t=e.lastIndexOf(`.`);return t>0?tc[e.slice(t).toLowerCase()]??`file`:`file`}function rc({name:e,size:t}){let n=ec[e??`file`]??gi;return(0,q.jsx)(n,{size:t})}function ic({path:e,name:t,isDirectory:n,size:r=18}){let i=U(e,n);return i?(0,q.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,q.jsx)(hi,{size:r}):(0,q.jsx)(rc,{name:nc(t),size:r})}var ac=`application/x-yafm-paths`,oc=[ac,`text/uri-list`];function sc(e){return e?.types.some(e=>oc.includes(e.toLowerCase()))??!1}function cc(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(ac);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(uc).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var lc=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function uc(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return lc?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function dc(e,t,n=!0){e.dataTransfer.setData(ac,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function fc({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=o(),[h,g]=(0,R.useState)(()=>new Set),[_,v]=(0,R.useState)(!1),y=(0,R.useRef)(null),x=(0,R.useMemo)(()=>e.filter(e=>h.has(e.path)),[e,h]),S=(0,R.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),C=(0,R.useRef)(null);if((0,R.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=C.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&sc(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=cc(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,c]),!r)return null;let w=new Set([...e,...t].map(e=>e.path)),T=w.size>0&&[...w].every(e=>h.has(e)),E=w.size,ee=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{g(T?new Set:w)},O=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},k=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},te=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},A=()=>{let e=x.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},j=()=>{let e=x.map(e=>e.path);e.length!==0&&f(e)},M=()=>{let e=new Map;for(let t of x)e.set(t.path,!0);for(let t of S)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,a,!0),r.length>0&&p(r,a,!1),g(new Set)},ne=(e,t)=>{let n=h.has(e.path);return(0,q.jsxs)(wc,{$checked:n,draggable:!0,onClick:()=>ee(e.path),onDragStart:r=>{dc(r,n&&h.size>0?[...new Set([...x,...S].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,q.jsx)(Tc,{$checked:n,onClick:t=>{t.stopPropagation(),ee(e.path)},type:`button`,children:n&&(0,q.jsx)(Mi,{size:8})}),(0,q.jsx)(ic,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,q.jsxs)(Ec,{children:[(0,q.jsx)(Dc,{children:e.name}),(0,q.jsx)(Oc,{children:b(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},N=e=>{sc(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,q.jsxs)(pc,{$dragging:_,"data-tray":`true`,ref:C,style:{left:i.x,top:i.y},onDragEnter:N,onDragOver:N,onDrop:e=>{let{paths:t}=cc(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,q.jsxs)(mc,{onPointerDown:O,onPointerMove:k,onPointerUp:te,children:[(0,q.jsxs)(hc,{children:[(0,q.jsx)(pa,{size:13}),m(`tray`),(0,q.jsx)(gc,{children:E})]}),(0,q.jsxs)(_c,{onPointerDown:e=>e.stopPropagation(),children:[(0,q.jsx)(vc,{onClick:D,title:m(T?`select_none`:`select_all`),type:`button`,children:m(T?`none`:`all`)}),(0,q.jsx)(vc,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,q.jsx)(yc,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,q.jsx)(Ni,{size:10})})]})]}),(0,q.jsxs)(bc,{children:[(0,q.jsxs)(Sc,{children:[m(`in_this_app`),(0,q.jsx)(gc,{children:e.length})]}),e.length===0&&(0,q.jsx)(xc,{children:m(`drag_files_or_folders_here`)}),e.map(e=>ne(e,!0)),t.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Sc,{$clipboard:!0,children:[m(`clipboard`),(0,q.jsx)(gc,{children:t.length}),n&&(0,q.jsx)(Cc,{children:m(`cut`)})]}),t.map(e=>ne(e,n))]})]}),(0,q.jsxs)(kc,{children:[(0,q.jsx)(Ac,{$plain:!0,disabled:x.length===0,onClick:j,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,q.jsx)(Ac,{disabled:h.size===0||!a,onClick:M,type:`button`,children:m(`move_here`)}),(0,q.jsx)(Ac,{$danger:!0,disabled:x.length===0,onClick:A,type:`button`,children:m(`remove`)})]})]})}var pc=v.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${qa}
    ${no}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,mc=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 9px 10px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
`,hc=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,gc=v.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,_c=v.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,vc=v.button`
    padding: 3px 7px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 9px;
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,yc=v.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,bc=v.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,xc=v.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Sc=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: ${({$clipboard:e})=>e?`8px 6px 3px`:`3px 6px`};
    margin-top: ${({$clipboard:e})=>e?`4px`:`0`};
    border-top: ${({$clipboard:e})=>e?`1px solid var(--border-color)`:`0`};
    color: var(--text-muted);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Cc=v.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,wc=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 5px 6px;
    border: 1px solid ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.4)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.1)`:`transparent`};
    cursor: grab;
    transition: background 120ms ease, border-color 120ms ease, transform 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.07);
        transform: translateX(1px);
    }

    &:active {
        cursor: grabbing;
    }
`,Tc=v.button`
    display: grid;
    place-items: center;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
    cursor: pointer;
`,Ec=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Dc=v.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Oc=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,kc=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,Ac=v.button`
    flex: 1 1 30%;
    min-width: 78px;
    padding: 5px 6px;
    border: 1px solid ${({$danger:e,$plain:t})=>e?`rgba(248, 113, 113, 0.35)`:t?`var(--border-color)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$danger:e,$plain:t})=>e||t?`transparent`:`var(--accent-gradient)`};
    color: ${({$danger:e,$plain:t})=>e?`#fca5a5`:t?`var(--text-secondary)`:`#fff`};
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease, filter 130ms ease;

    &:hover:not(:disabled) {
        border-color: ${({$danger:e,$plain:t})=>e?`rgba(248, 113, 113, 0.6)`:t?`var(--border-color-hover)`:`transparent`};
        background: ${({$danger:e,$plain:t})=>e?`rgba(248, 113, 113, 0.14)`:t?`rgba(var(--accent-rgb), 0.10)`:`var(--accent-gradient)`};
        color: ${({$danger:e,$plain:t})=>e?`#fecaca`:t?`var(--text-primary)`:`#fff`};
        filter: ${({$danger:e,$plain:t})=>e||t?`none`:`brightness(1.08)`};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`,jc={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function Mc(){return l.available?await l.request(`share.list`):jc}async function Nc(e,t){return l.available?await l.request(`share.add`,{path:e,mode:t}):jc}async function Pc(e){return l.available?await l.request(`share.remove`,{id:e}):jc}async function Fc(e,t){return l.available?await l.request(`share.mode`,{id:e,mode:t}):jc}async function Ic(){return l.available?(await l.request(`share.peers`)).peers??[]:[]}async function Lc(){return l.available?(await l.request(`share.peers.refresh`)).peers??[]:[]}async function Rc(e,t){l.available&&await l.request(`share.pair.start`,{host:e,port:t})}async function zc(e,t){l.available&&await l.request(`share.pair.respond`,{requestId:e,accept:t})}async function Bc(e,t){l.available&&await l.request(`share.port`,{mode:t,port:e})}var Vc=`yafm://share/`;function Hc(e){return e.toLowerCase().startsWith(Vc)}function Uc(e){if(!Hc(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Wc(e,t,n=``){let r=`${Vc}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Gc(e){let t=Uc(e);if(!t||!l.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await l.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Wc(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Wc(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Kc(e){let t=Uc(e);if(!t||!l.available)throw Error(`This shared file is only available in the desktop app.`);let n=await l.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function qc(e){await we(await Kc(e))}async function Jc(){return l.available?(await l.request(`share.devices.list`)).devices??[]:[]}async function Yc(e,t,n){return l.available?(await l.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function Xc(e){return l.available?(await l.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function Zc(){return l.available?(await l.request(`share.access.status`)).hasPassword:!1}async function Qc(e){return l.available?(await l.request(`share.access.password`,{password:e})).hasPassword:!1}var $c=new Map,el=new Set,tl=0;function nl(){tl+=1;for(let e of el)e()}function rl(e,t){t?$c.set(e,t):$c.delete(e),nl()}function il(e){return $c.has(e)}function al(e,t,n){$c.get(e)?.(t,n)}function ol(e){return el.add(e),()=>el.delete(e)}function sl(){return tl}function cl(e){return(0,R.useSyncExternalStore)(ol,sl,sl),{available:il(e),open:(t,n)=>al(e,t,n)}}function ll(e){return[...$c.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function ul(e){return(0,R.useSyncExternalStore)(ol,sl,sl),{available:ll(e).length>0,open:(t,n)=>{let r=ll(e).at(-1);r&&al(r,t,n)}}}var dl=60,fl=300,pl=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],ml=new Set,hl=`yafm.columnWidths`,gl=`yafm.reset-column-widths`,_l=64,vl=720,yl=160,bl=190,xl=120;function Sl({listing:e,loading:t,error:n,find:r=Cn,view:i,showImages:a,imageStripHeight:s=bl,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:d,onOpenFile:f,showCheckboxes:p=!0,openOnSingleClick:m=!1,shortcuts:h=Kt,enableShortcuts:g=!0,refreshToken:_=0,onRefresh:v,onRename:y,onClipboardChanged:b,cutPaths:S=ml,onTransfer:w,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:O,onPaste:k,confirmDelete:te=!1,previewVideoAudio:A=!1,previewVideoAutoplay:j=!1,showDetails:M=!0,onPreviewInfo:ne,onActivate:N,groupOf:re,onGridScroll:oe,gridFooter:se,allowBackgroundMenu:F=!0,readOnly:I=!1,onSelectionChange:ce,onSelectionCountChange:le,selectionMenuRequest:ue,selectionMenuId:de,singleSelect:fe=!1,pendingRename:pe=null,pendingRenameToken:me=0,selectMatchesToken:he=0}){let L=o(),ge=zn(),_e=(0,R.useRef)(null),ve=(0,R.useRef)(null),ye=(0,R.useRef)(null),be=(0,R.useRef)(null),[xe,Se]=(0,R.useState)(fl),[Ce,we]=(0,R.useState)({top:0,height:640}),Te=(0,R.useRef)(null),Ee=(0,R.useRef)(null),[De,Oe]=(0,R.useState)(null),[ke,Ae]=(0,R.useState)(s),[z,je]=(0,R.useState)(()=>new Set),[Me,Ne]=(0,R.useState)(()=>Qn(hl)??{}),Pe=(0,R.useRef)(z),B=(0,R.useRef)([]);Pe.current=z,(0,R.useEffect)(()=>ce?.([...z]),[z,ce]),(0,R.useEffect)(()=>le?.(z.size),[z,le]),(0,R.useEffect)(()=>{let e=ue;if(!e||e.token===Le.current)return;Le.current=e.token;let t=[...Pe.current];t.length!==0&&(Ie({x:e.x,y:e.y,paths:t,background:!1}),bt().then(Xe,()=>Xe(!1)))},[ue]);let[Fe,Ie]=(0,R.useState)(null),Le=(0,R.useRef)(0),[Re,ze]=(0,R.useState)(null),[V,Be]=(0,R.useState)(null),[Ve,He]=(0,R.useState)(null),Ue=(0,R.useRef)(Ve);Ue.current=Ve;let We=(0,R.useRef)(0),Ge=(0,R.useRef)(N);Ge.current=N;let[Ke,qe]=(0,R.useState)(()=>{let e=Xn(`yafm.preview.width`,320);return e>=220?e:320}),Je=(0,R.useCallback)(e=>{qe(e),Zn(`yafm.preview.width`,e)},[]),[Ye,Xe]=(0,R.useState)(!1),Ze=(0,R.useCallback)((e,t)=>{let n=[...Pe.current];n.length!==0&&(Ie({x:e,y:t,paths:n,background:!1}),bt().then(Xe,()=>Xe(!1)))},[]);(0,R.useEffect)(()=>{if(de)return rl(de,z.size>0?Ze:null),()=>rl(de,null)},[de,z,Ze]),(0,R.useEffect)(()=>{je(new Set),He(null),Ie(null),Ee.current=null},[e?.path]),(0,R.useEffect)(()=>{Ae(s)},[s]),(0,R.useEffect)(()=>{je(new Set),He(null),Ee.current=null},[_]);let Qe=e=>{Te.current={y:e.clientY,height:ke},e.currentTarget.setPointerCapture(e.pointerId)},$e=e=>{let t=Te.current;if(!t)return;let n=Math.max(xl,Math.round(window.innerHeight*.7));Ae(Math.min(n,Math.max(xl,t.height+t.y-e.clientY)))},et=e=>{Te.current&&(Te.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(ke))},tt=()=>{Ae(bl),c?.(bl)},nt=r.query.length>0,rt=(0,R.useMemo)(()=>pl.filter(e=>i.columns?.includes(e.id)),[i.columns]),it=i.columns?.includes(`linkTarget`)??!1,at=(0,R.useCallback)(e=>Math.min(vl,Math.max(_l,Me[e.id]??e.width)),[Me]),ot=(0,R.useMemo)(()=>`minmax(160px, 1fr) ${rt.map(e=>`${at(e)}px`).join(` `)}`.trim(),[rt,at]),st=(0,R.useRef)(null),ct=(0,R.useRef)(null),lt=()=>Math.floor(ct.current?.getBoundingClientRect().width??yl),ut=e=>{let t=rt[0];t&&(e.preventDefault(),e.stopPropagation(),st.current={left:{id:t.id,start:at(t)},startX:e.clientX,nameStart:lt()})},dt=(e,t)=>{let n=rt[t],r=rt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),st.current={left:{id:n.id,start:at(n)},right:{id:r.id,start:at(r)},startX:e.clientX,nameStart:0})},ft=e=>Ne(t=>{let n={...t};return delete n[e],$n(hl,n),n});(0,R.useEffect)(()=>{let e=e=>{let t=st.current;if(!t)return;let n=e.clientX-t.startX;Ne(e=>{if(!t.right){let r=Math.max(0,t.nameStart-yl),i=Math.min(Math.min(vl,t.left.start+r),Math.max(_l,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(vl,Math.max(_l,t.left.start+n)),a=Math.min(Math.min(vl,r-_l),Math.max(Math.max(_l,r-vl),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{st.current&&(st.current=null,Ne(e=>($n(hl,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,R.useEffect)(()=>{let e=()=>Ne(()=>($n(hl,{}),{}));return window.addEventListener(gl,e),()=>window.removeEventListener(gl,e)},[]);let H=(0,R.useMemo)(()=>e?Tl(e.entries.map(t=>{let n=t.isDirectory?Bn(ge,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:nt?wn(i,r):null,tags:e.tags[t.name]??[],cut:S.has(t.fullPath)}}).filter(e=>!nt||r.mode===`dim`||e.ranges!==null),i,e,L):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,nt,r,ge,i.sort,i.sortDescending,L,S]);B.current=H,(0,R.useEffect)(()=>{he!==0&&je(new Set(B.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[he]);let pt=Math.max(40,i.iconSize+20),mt=Math.max(0,Math.floor(Ce.top/pt)-4),ht=Math.min(H.length,mt+Math.ceil(Ce.height/pt)+10),gt=(0,R.useMemo)(()=>H.slice(mt,ht),[H,mt,ht]);(0,R.useEffect)(()=>{let e=be.current;if(!e||i.mode!==`list`)return;let t=()=>we(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,R.useEffect)(()=>{we(e=>({...e,top:0})),be.current&&(be.current.scrollTop=0)},[e?.path]),(0,R.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=H.findIndex(e=>e.entry.fullPath===r.currentPath),t=be.current;if(e<0||!t)return;let n=e*pt;(n<t.scrollTop||n+pt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else _e.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,H,pt]);let _t=(0,R.useMemo)(()=>H.slice(0,xe),[H,xe]);(0,R.useEffect)(()=>{let e=ve.current;if(!e||e.length===0)return;let t=e.filter(e=>H.some(t=>P(t.entry.fullPath,e)));if(t.length===0)return;ve.current=null;let n=t[0],r=H.findIndex(e=>P(e.entry.fullPath,n));r>=0&&Se(e=>Math.max(e,r+fl)),je(new Set(t)),Ee.current=n,i.mode===`list`&&be.current&&r>=0?be.current.scrollTop=Math.max(0,r*pt-be.current.clientHeight/2):requestAnimationFrame(()=>_e.current?.scrollIntoView({block:`nearest`}))},[H,pt,i.mode]),(0,R.useEffect)(()=>{Se(fl)},[e?.path]),(0,R.useEffect)(()=>{if(!r.currentPath)return;let e=H.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&Se(t=>Math.max(t,e+fl))},[r.currentPath,H]);let vt=(0,R.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&Se(e=>Math.min(H.length,e+fl))},[H.length]),xt=i.mode===`grid`,St=(0,R.useMemo)(()=>{if(!xt)return[];if(!re)return Ol(_t,Dl);let e=[],t=new Map;for(let n of _t){let r=re(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[_t,xt,re]),Ct=(0,R.useMemo)(()=>a?H.filter(e=>!e.entry.isDirectory&&Fn(e.entry.name)):[],[H,a]),wt=Ct.length,kt=(0,R.useMemo)(()=>Ct.slice(0,dl),[Ct]),At=(0,R.useMemo)(()=>a?Ol(kt,El):[],[kt,a]),jt=(0,R.useMemo)(()=>H.map(e=>e.entry.fullPath),[H]),Pt=H.length>0&&z.size>=H.length,It=z.size>0&&!Pt,Lt=()=>{fe||(Pt?Vt():je(new Set(jt)))},Rt=e?.path??``,zt=(0,R.useCallback)((e,t)=>{if(fe){Ee.current=t,je(new Set([t]));return}let n=e.ctrlKey||e.metaKey;je(r=>{if(e.shiftKey&&Ee.current!==null){let e=jt.indexOf(Ee.current),i=jt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(jt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),Ee.current=t,e}return Ee.current=t,new Set([t])})},[jt,fe]),Bt=(0,R.useCallback)(e=>{fe?(Ee.current=e,je(new Set([e]))):(Ee.current=e,je(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[fe]),Vt=(0,R.useCallback)(()=>{Ee.current=null,je(new Set)},[]);(0,R.useEffect)(()=>{if(me===0||!pe||We.current===me||!e?.entries.some(e=>e.fullPath===pe))return;We.current=me,Ee.current=pe,je(new Set([pe])),He({path:pe,value:x(pe)});let t=H.findIndex(e=>e.entry.fullPath===pe),n=be.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*pt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(pe)}"]`)?.scrollIntoView({block:`nearest`})})}},[be,e,pe,me,pt,H,i.mode]),(0,R.useEffect)(()=>{if(!Ve)return;let e=H.findIndex(e=>e.entry.fullPath===Ve.path),t=be.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*pt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ve.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[be,Ve,pt,H,i.mode]);let Ht=(0,R.useCallback)(()=>Ie(null),[]),Wt=(0,R.useCallback)((e,t)=>{e.isDirectory?d(e.fullPath,Yt(t)):f?.(e.fullPath,Yt(t))},[d,f]),Gt=(0,R.useCallback)((e,t,n)=>{Oe({entry:e,x:t,y:n})},[]),qt=(0,R.useRef)(null),Jt=(0,R.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;dc(e,z.has(n)?[...z]:[n])},[z]),Zt=(0,R.useCallback)(e=>{if(!sc(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);qt.current=t?.dataset.directory===`true`?t.dataset.path??Rt:Rt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Rt]),Qt=(0,R.useCallback)(e=>{if(I)return;let{paths:t,move:n}=cc(e),r=qt.current??Rt;qt.current=null,t.length!==0&&w&&(e.preventDefault(),w(t,r,!e.ctrlKey&&n))},[Rt,w,I]),en=(0,R.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),I||!t&&!F)return;let n=Pe.current;t&&!n.has(t)&&je(new Set([t])),t&&(Ee.current=t);let r=t?n.has(t)?[...n]:[t]:[];Ie({x:e.clientX,y:e.clientY,paths:r,background:!t}),bt().then(Xe,()=>Xe(!1))},[F,Rt]),tn=(0,R.useCallback)(()=>v?.(),[v]),nn=(e,t)=>{Ee.current=e,je(new Set([e])),t&&He({path:e,value:x(e)}),tn()},rn=Re&&(0,q.jsx)(Ro,{initialDirectory:Rt,initialName:Re.name,onCancel:()=>ze(null),onCompress:async e=>{let t=await Ut(Re.paths,e);return!t.ok||!t.path?(Pa(t.error??L(`could_not_create_the_archive`)),!1):(nn(t.path,!1),!0)}}),an=async(e,t=!1)=>{let n=e,r=t;if(e.some(Hc)){let t=[];for(let n of e)if(!Hc(n))t.push(n);else{if(B.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){Pa(L(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await Kc(n))}catch(e){Pa(e instanceof Error?e.message:L(`the_file_could_not_be_copied`));return}}n=t,r=!1}await yt(n,r)&&(Xe(!0),b?.())},on=async e=>{if(!e)return;let t=await Tt(e);t.cancelled||(t.ok?(ve.current=t.created,tn(),k?.()):Pa(L(`nothing_on_the_clipboard_could_be_pasted_here`)))},sn=async(e,t=!1)=>{if(!Rt)return;let n=e===null?await Ot(Rt,t):await Mt(Rt,e);!n.ok||n.path===null?Pa(n.error??L(`could_not_create_the_item`)):(Ee.current=n.path,je(new Set([n.path])),He({path:n.path,value:x(n.path)}),tn())},cn=e=>{je(new Set([e.fullPath])),Ee.current=e.fullPath,He({path:e.fullPath,value:e.name})},ln=(0,R.useCallback)(e=>He(t=>t&&{...t,value:e}),[]),un=(0,R.useCallback)(()=>He(null),[]),dn=(0,R.useCallback)(async()=>{let e=Ue.current;if(He(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=B.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Dt(e.path,t);r.ok?(Vt(),r.path&&y?.(e.path,r.path),tn(),window.setTimeout(()=>tn(),250)):Pa(r.error??L(`could_not_rename_the_entry`))},[Vt,y,tn,L]),fn=async(e,t=!1)=>{if((t||te)&&!await pn(e,t))return;let n=await Et(e,t);if(!n.ok&&n.needsPermanent){if(!await pn(e,!0))return;n=await Et(e,!0)}if(n.ok)Vt(),tn();else{if(n.cancelled)return;Pa(n.error??L(t?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},pn=(0,R.useCallback)((e,t)=>new Promise(n=>Be({paths:e,permanent:t,resolve:n})),[]),mn=(0,R.useCallback)(e=>{Be(t=>(t?.resolve(e),null))},[]);(0,R.useEffect)(()=>{if(!g||Fe)return;let e=e=>{if($t(e.target))return;Ge.current?.();let t=Xt(e),n=[...z],r=n.length===1?H.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(jt.length===0)return;e.preventDefault();let n=Ee.current&&jt.includes(Ee.current)?Ee.current:z.size===1?[...z][0]:null,r=n?jt.indexOf(n):-1,i=t===`home`?0:t===`end`?jt.length-1:Math.max(0,Math.min(jt.length-1,r+(t===`arrowdown`?1:-1))),a=jt[i];je(new Set([a])),Ee.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===h.copy?i(()=>{n.length>0&&an(n)}):t===h.cut?i(()=>{n.length>0&&an(n,!0)}):t===h.paste?i(()=>void on(Rt)):t===h.delete?i(()=>{n.length>0&&fn(n)}):t===h.deletePermanently?i(()=>{n.length>0&&fn(n,!0)}):t===h.selectAll?i(()=>{je(new Set(jt)),Ee.current=jt[0]??null}):t===h.invertSelection?i(()=>{je(new Set(jt.filter(e=>!z.has(e)))),Ee.current=jt[0]??null}):t===h.rename&&r?i(()=>void cn(r)):t===h.open&&r?i(()=>{r.isDirectory?d(r.fullPath):f?.(r.fullPath)}):t===h.newFolder||t===`f10`?i(()=>void sn(null)):t===h.terminal?i(()=>void Ft(Rt)):t===h.properties&&i(()=>void Nt(n.length>0?n:Rt?[Rt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[jt,an,sn,Rt,g,Fe,d,f,on,fn,cn,H,z,h]);let hn=V&&(0,q.jsx)(Zo,{confirmLabel:V.permanent?L(`delete`):L(`move`),danger:V.permanent,message:V.permanent?L(`permanently_delete_target_this_cannot_be_undone`,{target:V.paths.length===1?L(`this_item`):L(`count_items`,{count:V.paths.length})}):L(`move_target_to_the_recycle_bin`,{target:V.paths.length===1?L(`this_item`):L(`count_items`,{count:V.paths.length})}),onCancel:()=>mn(!1),onConfirm:()=>mn(!0),open:!0,title:V.permanent?L(`delete_permanently`):L(`move_to_the_recycle_bin`)}),U=(0,R.useMemo)(()=>{if(!e||z.size===0)return null;let t=jt.find(e=>z.has(e));return t?H.find(e=>e.entry.fullPath===t)?.entry??null:null},[jt,e,H,z]),W=(0,R.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:x(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:L(`type`),value:L(`folder`)},{label:L(`location`),value:e.parent??`—`},{label:L(`path`),value:e.path},{label:L(`size`),value:C(t)},{label:L(`items`),value:ae(L,n,`k_1_item`,`count_items`)},{label:L(`modified`),value:`—`},{label:L(`created`),value:`—`},{label:L(`attributes`),value:`—`}]}},[e,L]),G=(0,R.useMemo)(()=>{if(!U||!e)return null;let t=U.isDirectory?e.folderSizes[U.name]:void 0,n=e.tags[U.name]??[],r=U.name.lastIndexOf(`.`),i=r>0&&r<U.name.length-1?U.name.slice(r+1).toUpperCase():`—`;return{name:U.name,path:U.fullPath,isDirectory:U.isDirectory,size:U.size,modified:U.modified,created:U.created,fields:[{label:L(`type`),value:jl(U,L)},...U.isEncrypted?[{label:L(`encryption`),value:L(`password_required`)}]:[],{label:L(`extension`),value:U.isDirectory?`—`:i},{label:L(`location`),value:e.path},{label:L(`full_path`),value:U.fullPath},{label:L(`size`),value:U.isDirectory?t===void 0?`—`:C(t):C(U.size)},...U.isDirectory?[{label:L(`items`),value:`${e.counts[U.name]??`—`}`}]:[],{label:L(`modified`),value:ie(U.modified)},{label:L(`created`),value:ie(U.created)},{label:L(`link_status`),value:U.linkTarget==null?U.linkCount>1?L(`hard_link`):`—`:U.linkValid?`ok`:L(`broken`)},...U.linkTarget?[{label:L(`target`),value:U.linkTarget}]:[],...U.linkCount>1?[{label:L(`links`),value:String(U.linkCount)}]:[],{label:L(`attributes`),value:[U.isHidden?L(`hidden`):``,U.isSystem?L(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:L(`tags`),value:n.join(`, `)}]:[]]}},[e,U,L]),gn=Fe?.paths.length===1?Fe.paths[0]:null,K=gn?H.find(e=>e.entry.fullPath===gn)?.entry:void 0,_n=K?{path:K.fullPath,isDirectory:K.isDirectory}:null,vn=G??W,yn=(0,R.useRef)(ne);yn.current=ne,(0,R.useEffect)(()=>{yn.current?.(vn)},[ne,vn]);let bn=M&&vn&&(0,q.jsx)(cs,{info:vn,onWidth:Je,selectionNote:z.size>1?ae(L,z.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:A,videoAutoplay:j,width:Ke});return n&&!e?(0,q.jsx)(Fu,{children:(0,q.jsx)(Lu,{children:n})}):!e&&!t?(0,q.jsx)(Fu,{children:(0,q.jsx)(Iu,{children:L(`nothing_selected`)})}):i.mode===`grid`?(0,q.jsxs)(Ql,{onPointerDown:N,children:[(0,q.jsxs)($l,{children:[(0,q.jsxs)(su,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Vt()},onContextMenu:e=>en(e),onDragOver:Zt,onDragStart:Jt,onDrop:Qt,onScroll:e=>{oe?.(e.currentTarget),vt(e.currentTarget)},children:[p&&H.length>0&&(0,q.jsxs)(Yl,{children:[(0,q.jsx)(ql,{$checked:!fe&&Pt,$partial:!fe&&It,"aria-label":L(Pt?`select_none`:`select_all`),disabled:fe,onClick:e=>{e.stopPropagation(),Lt()},title:L(Pt?`select_none`:`select_all`),type:`button`,children:Pt?(0,q.jsx)(Mi,{size:10}):It?(0,q.jsx)(Jl,{}):null}),(0,q.jsx)(`span`,{children:L(Pt?`select_none`:`select_all`)})]}),t&&!e?(0,q.jsx)(fu,{$size:i.gridSize,children:(0,q.jsx)(Ll,{size:i.gridSize})}):(0,q.jsx)(zl,{counts:e?.counts,currentPath:nt?r.currentPath:null,groups:St,gridSize:i.gridSize,innerRef:_e,onContextMenu:en,onOpen:d,onOpenFile:f,onRenameCancel:un,onRenameChange:ln,onRenameCommit:dn,onSelect:zt,onToggle:Bt,openOnSingleClick:m,renaming:Ve,searching:nt,selected:z,showCheckboxes:p,showTarget:it}),!t&&e&&H.length===0&&(0,q.jsx)(Pu,{children:(0,q.jsx)(Iu,{children:n??(nt&&r.mode===`hide`?L(`no_entries_match_the_search`):L(`this_folder_is_empty`))})}),se]}),Fe&&(0,q.jsx)(So,{canPaste:Ye,directory:Rt,allowCompression:!0,menu:Fe,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:O,onArchiveCreated:nn,onClose:Ht,onCompressTo:(e,t)=>ze({paths:e,name:t}),onCopy:an,onCreateFile:e=>void sn(e),onCreateFolder:e=>void sn(null,e),onDelete:fn,onOpen:d,onOpenFile:f,onPaste:on,onRefresh:tn,onRename:e=>{let t=H.find(t=>t.entry.fullPath===e)?.entry;t&&cn(t)},shortcuts:h,target:_n}),rn,hn]}),bn]}):(0,q.jsxs)(Ql,{onPointerDown:N,children:[(0,q.jsxs)($l,{children:[(0,q.jsxs)(eu,{onScroll:e=>{be.current&&be.current.scrollLeft!==e.currentTarget.scrollLeft&&(be.current.scrollLeft=e.currentTarget.scrollLeft)},ref:ye,style:{gridTemplateColumns:ot},children:[(0,q.jsxs)(Wl,{ref:ct,children:[p&&(0,q.jsx)(ql,{$checked:!fe&&Pt,$partial:!fe&&It,"aria-label":L(Pt?`select_none`:`select_all`),disabled:fe,onClick:e=>{e.stopPropagation(),Lt()},title:L(Pt?`select_none`:`select_all`),type:`button`,children:Pt?(0,q.jsx)(Mi,{size:10}):It?(0,q.jsx)(Jl,{}):null}),(0,q.jsxs)(tu,{onClick:()=>l(`name`),type:`button`,children:[L(`name`),Cl(i,`name`)]}),(0,q.jsx)(Kl,{"aria-label":L(`resize_column`),onDoubleClick:()=>rt[0]&&ft(rt[0].id),onPointerDown:ut,role:`separator`})]}),rt.map((e,t)=>(0,q.jsxs)(Gl,{children:[(0,q.jsxs)(tu,{onClick:()=>l(e.id),type:`button`,children:[L(e.label),Cl(i,e.id)]}),t<rt.length-1&&(0,q.jsx)(Kl,{"aria-label":L(`resize_column`),onDoubleClick:()=>ft(e.id),onPointerDown:e=>dt(e,t),role:`separator`})]},e.id))]}),(0,q.jsxs)(nu,{onClick:e=>{e.target===e.currentTarget&&Vt()},onContextMenu:e=>en(e),onDragOver:Zt,onDragStart:Jt,onDrop:Qt,onScroll:e=>{ye.current&&ye.current.scrollLeft!==e.currentTarget.scrollLeft&&(ye.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;we(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:be,children:[t&&!e?(0,q.jsx)(Il,{template:ot,columns:rt.length}):(0,q.jsxs)(q.Fragment,{children:[mt>0&&(0,q.jsx)(`div`,{style:{height:mt*pt}}),gt.map(t=>{let n=t.entry.fullPath;return(0,q.jsx)(Vl,{current:nt&&n===r.currentPath,dim:nt&&t.ranges===null,height:pt,iconSize:i.iconSize,innerRef:_e,listing:e,onContextMenu:en,onOpen:Wt,onRenameCancel:un,onRenameChange:ln,onRenameCommit:dn,onSelect:zt,onTagEdit:Gt,onToggle:Bt,openOnSingleClick:m,renaming:Ve?.path===n?{value:Ve.value}:null,row:t,selected:z.has(n),showCheckboxes:p,showTarget:it,template:ot,visible:rt},n)}),ht<H.length&&(0,q.jsx)(`div`,{style:{height:(H.length-ht)*pt}})]}),!t&&e&&H.length===0&&(0,q.jsx)(Fu,{children:(0,q.jsx)(Iu,{children:n??(nt&&r.mode===`hide`?L(`no_entries_match_the_search`):L(`this_folder_is_empty`))})})]}),a&&Ct.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(ru,{onDoubleClick:tt,onPointerDown:Qe,onPointerMove:$e,onPointerUp:et,title:L(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(iu,{style:{height:ke},children:[(0,q.jsxs)(au,{children:[L(`preview`),(0,q.jsx)(ou,{children:wt>dl?`${kt.length} / ${wt}`:wt})]}),(0,q.jsx)(su,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Vt()},onContextMenu:e=>en(e),children:(0,q.jsx)(zl,{counts:e?.counts,currentPath:nt?r.currentPath:null,groups:At,gridSize:i.gridSize,onContextMenu:en,onOpen:d,onOpenFile:f,onSelect:zt,onToggle:Bt,openOnSingleClick:m,searching:nt,selected:z,showCheckboxes:p,showTarget:it})})]})]}),De&&e&&(0,q.jsx)(Us,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(De.entry.name,e,t),onClose:()=>Oe(null),tags:e.tags[De.entry.name]??[],x:De.x,y:De.y}),Fe&&(0,q.jsx)(So,{canPaste:Ye,directory:Rt,allowCompression:!0,menu:Fe,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:O,onArchiveCreated:nn,onClose:Ht,onCompressTo:(e,t)=>ze({paths:e,name:t}),onCopy:an,onCreateFile:e=>void sn(e),onCreateFolder:e=>void sn(null,e),onDelete:fn,onOpen:d,onOpenFile:f,onPaste:on,onRefresh:tn,onRename:e=>{let t=H.find(t=>t.entry.fullPath===e)?.entry;t&&cn(t)},shortcuts:h,target:_n}),rn,hn]}),bn]})}function Cl(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var wl=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Tl(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return jl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:wl.compare(String(r),String(i));return t.sortDescending?-o:o})}var El=Mn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Pn(t.entry.name)===e})),Dl=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...El.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function Ol(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function kl(e){return Math.max(24,Math.min(e-56,160))}var Al={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function jl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`internet_shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`folder_link`):t(`symbolic_link`);if(e.isDirectory)return t(`folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Al[nc(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`file`)}function Ml(e,t,n,r){switch(e){case`type`:return jl(t,r);case`size`:return Pl(t,n.folderSizes);case`modified`:return ie(t.modified);case`created`:return ie(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:r(`broken`);default:return``}}function Nl({name:e,ranges:t}){if(!t||t.length===0)return(0,q.jsx)(q.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,q.jsx)(Nu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,q.jsx)(q.Fragment,{children:n})}function Pl(e,t){if(!e.isDirectory)return C(e.size);let n=t[e.name];return n===void 0?`—`:C(n)}function Fl({entry:e,size:t=18}){let n=o(),r=(0,R.useRef)(null),[i,a]=(0,R.useState)(!1);(0,R.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let s=U(i?e.fullPath:null,e.isDirectory,t>32),c=G(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,q.jsxs)(Hl,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,q.jsx)(rc,{name:e.iconSource.slice(5),size:t}):c?(0,q.jsx)(`img`,{alt:``,height:t,src:c,width:t}):s?(0,q.jsx)(`img`,{alt:``,height:t,src:s,width:t}):e.isDirectory?(0,q.jsx)(hi,{size:t}):(0,q.jsx)(rc,{name:nc(e.name),size:t}),e.isEncrypted&&(0,q.jsx)(Ul,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,q.jsx)(Ea,{size:Math.max(8,Math.round(t*.52))})})]})}function Il({template:e,columns:t}){return(0,q.jsx)(q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,q.jsxs)(pu,{style:{gridTemplateColumns:e},children:[(0,q.jsxs)(gu,{children:[(0,q.jsx)(mu,{style:{flexShrink:0,height:18,width:18}}),(0,q.jsx)(mu,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,q.jsx)(mu,{style:{width:t%2==0?44:92}},t))]},r))})}function Ll({size:e}){return(0,q.jsx)(q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,q.jsxs)(Du,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,q.jsx)(Ou,{children:(0,q.jsx)(mu,{style:{height:e,width:e}})}),(0,q.jsx)(Au,{children:(0,q.jsx)(mu,{style:{height:9,width:`${t}%`}})})]},n))})}var Rl=(0,R.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=o(),x=zn(),S=!e.entry.isDirectory&&Fn(e.entry.name),w=(0,R.useRef)(null),[T,E]=(0,R.useState)(!1);(0,R.useEffect)(()=>{if(!S||T)return;let e=w.current;if(!e)return;if(!(`IntersectionObserver`in window)){E(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(E(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,T]);let ee=vn(S&&T?e.entry.fullPath:null,192,e.entry.modified),[D,O]=(0,R.useState)(!1),k=S&&ee!==null&&!D,te=e.entry.fullPath,A=t=>{e.entry.isDirectory?v(te,Yt(t)):y?.(te,Yt(t))};return(0,q.jsxs)(Du,{$current:t,$dim:n,$image:k,$selected:c,onClick:e=>{h(e,te),u&&A(e)},onContextMenu:e=>_(e,te),onDoubleClick:e=>{u||A(e)},ref:e=>{w.current=e,t&&s&&(s.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":te,draggable:!d,children:[l&&(0,q.jsx)(Zl,{$checked:c,onClick:e=>{e.stopPropagation(),g(te)},onDoubleClick:e=>e.stopPropagation(),title:b(c?`deselect`:`select`),type:`button`,children:c&&(0,q.jsx)(Mi,{size:10})}),(0,q.jsx)(Ou,{children:k?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>O(!0),src:ee}):(0,q.jsx)(ku,{children:e.place&&x.useIcons?(0,q.jsx)(Bs,{place:e.place,size:r}):(0,q.jsx)(Fl,{entry:e.entry,size:r})})}),(0,q.jsxs)(Au,{children:[d?(0,q.jsx)(Bl,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:d.value}):(0,q.jsx)(ju,{$broken:e.entry.linkValid===!1,children:(0,q.jsx)(Nl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,q.jsxs)(vu,{title:b(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(Ea,{size:9}),b(`encrypted`)]}),e.cut&&(0,q.jsxs)(yu,{title:b(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,q.jsx)(ya,{size:9}),b(`cut`)]}),(0,q.jsx)(Mu,{children:e.entry.isDirectory?i===void 0?jl(e.entry,b):b(`type_count_items`,{type:jl(e.entry,b),count:i}):b(`type_size`,{type:jl(e.entry,b),size:C(e.entry.size)})}),a&&e.entry.linkTarget&&(0,q.jsxs)(xu,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,q.jsx)(Da,{size:9}),(0,q.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function zl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onSelect:f,onToggle:p,onContextMenu:m,onOpen:h,onOpenFile:g,onRenameChange:_,onRenameCommit:v,onRenameCancel:y}){let b=o();return(0,q.jsx)(q.Fragment,{children:e.map(e=>(0,q.jsxs)(cu,{children:[(0,q.jsxs)(lu,{children:[b(e.label),(0,q.jsx)(uu,{children:e.rows.length}),(0,q.jsx)(du,{})]}),(0,q.jsx)(fu,{$size:t,children:e.rows.map(e=>(0,q.jsx)(Rl,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:kl(t),innerRef:s,itemCount:n?.[e.entry.name],onContextMenu:m,onOpen:h,onOpenFile:g,onSelect:f,onToggle:p,openOnSingleClick:u,onRenameCancel:y,onRenameChange:_,onRenameCommit:v,renaming:d?.path===e.entry.fullPath?d:null,row:e,selected:c.has(e.entry.fullPath),showCheckboxes:l,showTarget:r},e.entry.fullPath))})]},e.id))})}function Bl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,R.useRef)(null);return(0,R.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,q.jsx)(bu,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Vl=(0,R.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:s,iconSize:c,height:l,template:u,visible:d,listing:f,innerRef:p,renaming:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onTagEdit:y,onRenameChange:b,onRenameCommit:x,onRenameCancel:S}){let C=o(),w=zn(),T=e.entry.fullPath;return(0,q.jsxs)(hu,{$current:t,$dim:n,$height:l,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{h(t,T),s&&v(e.entry,t)},onContextMenu:e=>_(e,T),onDoubleClick:t=>{s||v(e.entry,t)},ref:t?p:void 0,style:{gridTemplateColumns:u},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!m,children:[(0,q.jsxs)(gu,{children:[i&&(0,q.jsx)(Xl,{$checked:r,onClick:e=>{e.stopPropagation(),g(T)},onDoubleClick:e=>e.stopPropagation(),title:C(r?`deselect`:`select`),type:`button`,children:r&&(0,q.jsx)(Mi,{size:10})}),e.place&&w.useIcons?(0,q.jsx)(Hl,{children:(0,q.jsx)(Bs,{place:e.place,size:c})}):(0,q.jsx)(Fl,{entry:e.entry,size:c}),m?(0,q.jsx)(Bl,{onCancel:S,onChange:b,onCommit:x,value:m.value}):(0,q.jsx)(_u,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,q.jsx)(Nl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,q.jsxs)(vu,{title:C(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(Ea,{size:9}),C(`encrypted`)]}),e.cut&&(0,q.jsxs)(yu,{title:C(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,q.jsx)(ya,{size:9}),C(`cut`)]}),a&&e.entry.linkTarget&&(0,q.jsxs)(xu,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,q.jsx)(Da,{size:9}),(0,q.jsx)(`span`,{children:e.entry.linkTarget})]})]}),d.map(t=>(0,q.jsx)(Su,{children:t.id===`tags`?(0,q.jsx)(Cu,{onClick:t=>{t.stopPropagation(),y(e.entry,t.clientX,t.clientY)},title:C(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=f.tagColors?.[e]??`#64748b`;return(0,q.jsx)(wu,{$color:t,$ink:Hs(t),children:e},e)}):(0,q.jsx)(Tu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,q.jsx)(Eu,{children:C(`broken`)}):Ml(t.id,e.entry,f,C)},t.id))]})}),Hl=v.span`
    position: relative;
    display: grid;
    place-items: center;
    width: ${({$size:e=18})=>e}px;
    height: ${({$size:e=18})=>e}px;
    flex-shrink: 0;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
    }
`,Ul=v.span`
    position: absolute;
    right: -4px;
    bottom: -4px;
    display: grid;
    place-items: center;
    width: 14px;
    height: 14px;
    border: 1px solid var(--bg-primary);
    border-radius: 50%;
    background: #fbbf24;
    color: #1f2937;

    svg {
        color: inherit;
        stroke-width: 2.4;
    }
`,Wl=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,Gl=v.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,Kl=v.span`
    position: absolute;
    top: -10px;
    right: -13px;
    bottom: -10px;
    width: 10px;
    z-index: 2;
    cursor: col-resize;
    touch-action: none;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 4px;
        width: 1px;
        background: transparent;
        transition: background 120ms ease;
    }

    &:hover::after,
    &:active::after {
        background: rgba(var(--accent-rgb), 0.75);
    }
`,ql=v.button`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid ${({$checked:e,$partial:t})=>e||t?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e,$partial:t})=>e||t?`rgba(var(--accent-rgb), 0.8)`:`transparent`};
    color: #fff;
    cursor: pointer;
    transition: background 100ms ease, border-color 100ms ease;

    &:hover {
        border-color: var(--border-color-focus);
        background: ${({$checked:e,$partial:t})=>e||t?`rgba(var(--accent-rgb), 0.9)`:`rgba(148, 163, 184, 0.16)`};
    }

    &:disabled {
        opacity: 0.32;
        cursor: default;

        &:hover {
            border-color: var(--border-color-hover);
            background: transparent;
        }
    }
`,Jl=v.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Yl=v.div`
    position: sticky;
    top: -12px;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: -12px -14px 10px;
    padding: 9px 14px;
    background: var(--bg-primary);
    color: var(--text-muted);
    font-size: 11px;

    html.has-wallpaper & {
        background: rgba(var(--bg-rgb), 0.65);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }
`,Xl=v.button`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.8)`:`transparent`};
    color: #fff;
    cursor: pointer;
    transition: background 100ms ease, border-color 100ms ease;

    &:hover {
        border-color: var(--border-color-focus);
        background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(148, 163, 184, 0.16)`};
    }
`,Zl=v(Xl)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Ql=v.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,$l=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,eu=v.div`
    display: grid;
    gap: 16px;
    padding: 10px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 11px;
    min-width: 0;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        height: 0;
    }

    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,tu=v.button`
    display: flex;
    align-items: center;
    min-width: 0;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
    }
`,nu=v.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,ru=v.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,iu=v.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,au=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 6px 12px 0;
    margin-bottom: 5px;
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ou=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,su=v.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,cu=v.section`
    & + & {
        margin-top: 22px;
    }
`,lu=v.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,uu=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,du=v.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,fu=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,pu=v.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,mu=v.span`
    display: block;
    height: 9px;
    border-radius: 4px;
    background: var(--border-color);
    animation: yafm-bone 1.25s ease-in-out infinite;

    @keyframes yafm-bone {
        0%, 100% {
            opacity: 0.3;
        }
        50% {
            opacity: 0.7;
        }
    }
`,hu=v.div`
    display: grid;
    gap: 16px;
    align-items: center;
    height: ${({$height:e})=>e}px;
    padding: 9px 12px;
    border: 1px solid ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.35)`:`transparent`};
    border-radius: var(--radius-md);
    background: ${({$current:e,$selected:t})=>e?`rgba(var(--accent-rgb), 0.14)`:t?`rgba(var(--accent-rgb), 0.09)`:`transparent`};
    box-shadow: ${({$current:e})=>e?`inset 3px 0 0 var(--accent-primary)`:`none`};
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$hidden:e,$dim:t})=>t?.3:e?.55:1};
    cursor: default;
    user-select: none;
    overflow: hidden;
    transition: background 110ms ease, border-color 110ms ease, opacity 110ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color);
        color: var(--text-primary);
    }
`,gu=v.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,_u=v.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,vu=v.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid rgba(251, 191, 36, 0.5);
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.15);
    color: #fbbf24;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    white-space: nowrap;
`,yu=v.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid rgba(var(--accent-rgb), 0.4);
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--accent-primary);
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    white-space: nowrap;
    opacity: 0.85;
`,bu=v.input`
    flex: 1;
    min-width: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-focus);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    outline: none;
`,xu=v.span`
    display: inline-flex;
    flex: ${({$block:e})=>e?`0 0 auto`:`0 1 auto`};
    align-items: center;
    gap: 4px;
    overflow: hidden;
    min-width: 0;
    max-width: 100%;
    width: ${({$block:e})=>e?`100%`:`auto`};
    padding: 1px 7px;
    border: 1px solid ${({$broken:e})=>e?`rgba(248, 113, 113, 0.45)`:`rgba(var(--accent-rgb), 0.35)`};
    border-radius: 999px;
    background: ${({$broken:e})=>e?`rgba(248, 113, 113, 0.12)`:`rgba(var(--accent-rgb), 0.12)`};
    color: ${({$broken:e})=>e?`#f87171`:`var(--accent-primary)`};
    font-family: var(--font-mono);
    font-size: ${({$block:e})=>e?`9px`:`10px`};
    white-space: nowrap;

    svg {
        flex-shrink: 0;
        opacity: 0.85;
    }

    span {
        overflow: hidden;
        min-width: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`,Su=v.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cu=v.button`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 3px;
    width: 100%;
    max-height: 100%;
    overflow: hidden;
    padding: 2px 4px;
    border: 1px dashed transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    text-align: left;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
    }
`,wu=v.span`
    max-width: 100%;
    padding: 2px 8px;
    overflow: hidden;
    border-radius: 999px;
    background: ${({$color:e})=>e};
    color: ${({$ink:e})=>e};
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Tu=v.span`
    color: var(--text-muted);
    font-size: 11px;
`,Eu=v.span`
    color: #fca5a5;
`,Du=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid ${({$current:e,$selected:t})=>e?`rgba(var(--accent-rgb), 0.5)`:t?`rgba(var(--accent-rgb), 0.4)`:`var(--border-color)`};
    border-radius: var(--radius-lg);
    /* A picture tile has no surface of its own, so a transparent image shows the wallpaper. */
    background: ${({$image:e,$current:t,$selected:n})=>t?`rgba(var(--accent-rgb), 0.14)`:n?`rgba(var(--accent-rgb), 0.1)`:e?`transparent`:`var(--bg-primary)`};
    opacity: ${({$dim:e})=>e?.3:1};
    cursor: default;
    user-select: none;
    content-visibility: auto;
    transition: background 120ms ease, border-color 120ms ease, opacity 120ms ease,
    transform 140ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 140ms ease;

    &:hover {
        background: ${({$image:e})=>e?`rgba(var(--bg-rgb), 0.2)`:`var(--bg-card-hover)`};
        border-color: var(--border-color-hover);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        transform: translateY(-1px);
    }
`,Ou=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
    overflow: hidden;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`,ku=v.span`
    display: grid;
    place-items: start;
    width: 100%;
    height: 100%;
    padding: 6px;
    overflow: hidden;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
        object-fit: contain;
    }
`,Au=v.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 18px 8px 6px;
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
    overflow: hidden;
`,ju=v.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Mu=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Nu=v.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Pu=v.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Fu=v.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Iu=v.p`
    font-size: 13px;
    color: var(--text-muted);
`,Lu=v.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Ru=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,zu=`/assets/bloom-BpfZWiaG.mp4`,Bu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Vu=`/assets/drift-BRBSQL2_.mp4`,Hu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Uu=`/assets/ember-CtSz0YxR.mp4`,Wu=[{name:`blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`slate`,accent:`#64748b`,secondary:`#94a3b8`}],Gu=[{id:`aurora`,name:`aurora`},{id:`dunes`,name:`dunes`},{id:`tide`,name:`tide`}],Ku=[{id:`builtin:video:drift`,name:`drift`,url:Vu,poster:Bu},{id:`builtin:video:ember`,name:`ember`,url:Uu,poster:Hu},{id:`builtin:video:bloom`,name:`bloom`,url:zu,poster:Ru}],qu=Gu.map(e=>({...e,variants:Wu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:$u(ed(e.id,t,!1)),lightUrl:$u(ed(e.id,t,!0))}))})),Ju=[{id:`ridgeline`,name:`ridgeline`},{id:`skyline`,name:`skyline`},{id:`orbit`,name:`orbit`}].flatMap(e=>Wu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:$u(td(e.id,t,!1)),lightUrl:$u(td(e.id,t,!0))}))),Yu=new Map([...qu.flatMap(e=>e.variants),...Ju].map(e=>[e.id,e])),Xu=new Map(Ku.map(e=>[e.id,e]));function Zu(e,t=`dark`){if(Xu.has(e))return Xu.get(e).url;let n=Yu.get(e)??Yu.get(`builtin:${e.split(`:`)[1]??``}:indigo`);return n?t===`light`?n.lightUrl:n.url:null}function Qu(e){return Xu.has(e)}function $u(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function ed(e,t,n){return e===`dunes`?cd(t,n):e===`tide`?ld(t,n):sd(t,n)}function td(e,t,n){return e===`skyline`?rd(t,n):e===`orbit`?id(t,n):nd(t,n)}function nd({accent:e,secondary:t},n){let r=od(t,n?`#e8eefc`:`#05070f`,n?.9:.86),i=od(e,n?`#f6f8ff`:`#0b1020`,n?.84:.72),a=od(t,n?`#dbe3f0`:`#0a0f1d`,n?.55:.66),o=od(e,n?`#c3cfdf`:`#060a14`,n?.6:.74),s=n?`#e9eefb`:`#05070d`,c=od(e,n?`#a9b8cc`:`#03050a`,n?.62:.9);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${r}"/>
            <stop offset="0.62" stop-color="${i}"/>
            <stop offset="1" stop-color="${s}"/>
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stop-color="${t}" stop-opacity="0.95"/>
            <stop offset="0.4" stop-color="${e}" stop-opacity="0.45"/>
            <stop offset="1" stop-color="${e}" stop-opacity="0"/>
        </radialGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1450" cy="330" r="360" fill="url(#sun)"/>
    <circle cx="1450" cy="330" r="120" fill="${od(t,`#ffffff`,n?.45:.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${a}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${o}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${c}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function rd({accent:e,secondary:t},n){let r=od(t,n?`#e9eefc`:`#07040d`,n?.9:.84),i=od(e,n?`#f4f6ff`:`#100716`,n?.82:.7),a=od(e,n?`#b7c4d6`:`#08050e`,n?.7:.82),o=od(t,n?`#c9d3e2`:`#0b0613`,n?.66:.78),s=[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],i)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${i%2?a:o}" opacity="0.92"/>`+Array.from({length:5},(a,o)=>`<rect x="${t+14}" y="${n+24+o*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+i%3*.05}"/>`).join(``)).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${r}"/>
            <stop offset="0.7" stop-color="${i}"/>
            <stop offset="1" stop-color="${n?`#e6ebf8`:`#05030a`}"/>
        </linearGradient>
        <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="${e}" stop-opacity="0"/>
            <stop offset="0.5" stop-color="${t}" stop-opacity="0.26"/>
            <stop offset="1" stop-color="${e}" stop-opacity="0"/>
        </linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="420" cy="260" r="180" fill="${t}" opacity="0.16"/>
    <path d="M0 600 L1920 520 V700 L0 780 Z" fill="url(#beam)"/>
    ${s}
    <rect x="0" y="720" width="1920" height="360" fill="${od(e,n?`#d5deea`:`#040208`,n?.7:.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function id({accent:e,secondary:t},n){let r=od(e,n?`#eef3ff`:`#03050d`,n?.88:.9),i=od(t,n?`#f8faff`:`#05030c`,n?.9:.94),a=od(t,e,.35),o=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="${n?`#64748b`:`#ffffff`}" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${od(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${r}"/>
            <stop offset="1" stop-color="${i}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${od(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${od(e,n?`#cfd9e6`:`#08050f`,n?.55:.7)}"/>
        </radialGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#space)"/>
    ${o}
    <g transform="rotate(-18 960 540)">
        <ellipse cx="960" cy="540" rx="610" ry="210" fill="none" stroke="${a}" stroke-width="3" opacity="0.55"/>
        <ellipse cx="960" cy="540" rx="480" ry="150" fill="none" stroke="${e}" stroke-width="1.6" opacity="0.4"/>
        <ellipse cx="960" cy="540" rx="760" ry="280" fill="none" stroke="${t}" stroke-width="1.2" opacity="0.25"/>
    </g>
    <circle cx="960" cy="540" r="170" fill="url(#planet)"/>
    <circle cx="960" cy="540" r="220" fill="none" stroke="${e}" stroke-width="2" opacity="0.5"/>
    <circle cx="1450" cy="300" r="18" fill="${od(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function ad(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function od(e,t,n){let[r,i,a]=ad(e),[o,s,c]=ad(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function sd({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${od(e,n?`#f2f6ff`:`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${od(t,n?`#eef2ff`:`#070b1c`,n?.86:.85)}"/>
            <stop offset="1" stop-color="${od(e,n?`#e8f0fb`:`#04060c`,n?.9:.94)}"/>
        </linearGradient>
        <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="${e}" stop-opacity="0"/>
            <stop offset="0.45" stop-color="${t}" stop-opacity="0.55"/>
            <stop offset="0.7" stop-color="${e}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${e}" stop-opacity="0"/>
        </linearGradient>
        <filter id="soft" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="110"/>
        </filter>
        <filter id="soft2" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="70"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#bg)"/>
    <ellipse cx="420" cy="260" rx="540" ry="300" fill="${e}" opacity="${n?.45:.7}" filter="url(#soft)"/>
    <ellipse cx="1450" cy="220" rx="460" ry="260" fill="${t}" opacity="${n?.4:.66}" filter="url(#soft)"/>
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${od(e,t,.5)}" opacity="${n?.26:.42}" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="${n?.32:.5}" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="${n?.3:.42}" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="${n?.26:.36}" filter="url(#soft2)"/>
</svg>`}function cd({accent:e,secondary:t},n){let r=od(t,n?`#fff4e2`:`#120a05`,n?.9:.84),i=od(t,n?`#fff8ee`:`#1c0f07`,n?.82:.7),a=od(e,t,.25),o=od(e,n?`#e2cdae`:`#160b04`,n?.5:.55),s=od(e,n?`#ecdcc2`:`#1a0d05`,n?.6:.7),c=od(e,n?`#d9c1a2`:`#0b0603`,n?.7:.82);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${r}"/>
            <stop offset="0.5" stop-color="${i}"/>
            <stop offset="1" stop-color="${n?`#f6ecdd`:`#0d0703`}"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${a}" stop-opacity="${n?.5:.65}"/>
            <stop offset="1" stop-color="${o}" stop-opacity="${n?.16:.2}"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="${n?.34:.4}"/>
            <stop offset="1" stop-color="${s}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${od(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${c}" opacity="${n?.5:.75}"/>
</svg>`}function ld({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${od(e,n?`#e6f7fb`:`#02070a`,n?.88:.9)}"/>
            <stop offset="0.5" stop-color="${od(t,n?`#eefaf8`:`#03100f`,n?.85:.82)}"/>
            <stop offset="1" stop-color="${od(e,n?`#dff2f7`:`#020609`,n?.9:.94)}"/>
        </linearGradient>
        <filter id="blur" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="120"/>
        </filter>
        <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="${e}" stop-opacity="0"/>
            <stop offset="0.5" stop-color="${t}" stop-opacity="0.55"/>
            <stop offset="1" stop-color="${e}" stop-opacity="0"/>
        </linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#sea)"/>
    <ellipse cx="350" cy="840" rx="620" ry="280" fill="${e}" opacity="${n?.3:.45}" filter="url(#blur)"/>
    <ellipse cx="1550" cy="240" rx="520" ry="260" fill="${t}" opacity="${n?.26:.38}" filter="url(#blur)"/>
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${od(e,t,.4)}" opacity="${n?.34:.5}" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var ud=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function dd(e){return ud.test(e)}function fd({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):A(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=bn(i),o=n?.startsWith(`builtin:`)?Zu(n,t):r??a,s=r===null?i===null?n!==null&&Qu(n):dd(i):dd(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,q.jsxs)(pd,{"aria-hidden":!0,children:[s?(0,q.jsx)(hd,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,q.jsx)(md,{src:o,style:{filter:c}}),(0,q.jsx)(gd,{})]})}var pd=v.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,md=v.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,hd=v.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,gd=v.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`;function _d({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let s=o(),c=(0,R.useRef)(null),[l,u]=(0,R.useState)(()=>Math.max(1,Math.ceil(n))),d=e??`delete`;return(0,R.useEffect)(()=>{c.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));u(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,Ka.createPortal)((0,q.jsx)(xd,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,q.jsxs)(Sd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(Cd,{children:s(`protected_folder`)}),(0,q.jsx)(wd,{children:s(`these_paths_are_protected_by_the_safety_settings`)}),(0,q.jsx)(Td,{children:t.map(e=>(0,q.jsxs)(Ed,{children:[(0,q.jsx)(Dd,{children:e.path}),(0,q.jsx)(Od,{children:s(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,q.jsx)(kd,{children:vd(s,d,r??!1)}),(0,q.jsx)(Ad,{children:yd(s,d)}),(0,q.jsx)(jd,{children:s(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,q.jsxs)(Md,{children:[(0,q.jsx)(Nd,{onClick:i,ref:c,type:`button`,children:s(`cancel`)}),(0,q.jsx)(Pd,{disabled:l>0,onClick:a,type:`button`,children:l>0?bd(s,d,l):bd(s,d,0)})]})]})}),document.body)}function vd(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function yd(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function bd(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var xd=v.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${so}
`,Sd=v.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${no}
`,Cd=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,wd=v.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Td=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 220px;
    margin-bottom: 12px;
    overflow-y: auto;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.55);
`,Ed=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Dd=v.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Od=v.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,kd=v.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Ad=v.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,jd=v.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Md=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Nd=v.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,Pd=v.button`
    min-width: 110px;
    padding: 7px 12px;
    border: 1px solid rgba(248, 113, 113, 0.5);
    border-radius: var(--radius-sm);
    background: rgba(248, 113, 113, 0.16);
    color: #fca5a5;
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: rgba(248, 113, 113, 0.8);
        color: #fecaca;
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }
`;function Fd(){let e=o(),[t,n]=(0,R.useState)(null),r=(0,R.useRef)(null),i=(0,R.useRef)(null);(0,R.useEffect)(()=>(Na(e=>new Promise(t=>{r.current=t,n(e)})),()=>Na(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,R.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Ka.createPortal)((0,q.jsx)(Id,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,q.jsxs)(Ld,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(Rd,{children:e(`notice`)}),(0,q.jsx)(zd,{children:t}),(0,q.jsx)(Bd,{children:(0,q.jsx)(Vd,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var Id=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${so}
`,Ld=v.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${no}
`,Rd=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,zd=v.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Bd=v.div`
    display: flex;
    justify-content: flex-end;
`,Vd=v.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;function Hd(){let e=o(),[t,n]=(0,R.useState)(null),[r,i]=(0,R.useState)(``),a=(0,R.useRef)(null),s=(0,R.useRef)(null);(0,R.useEffect)(()=>(Fa((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Fa(null)),[]),(0,R.useEffect)(()=>{t&&window.setTimeout(()=>s.current?.focus(),0)},[t]);let c=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let l=()=>{r.length>0&&c(r)};return(0,Ka.createPortal)((0,q.jsx)(Ud,{onPointerDown:e=>{e.target===e.currentTarget&&c(null)},children:(0,q.jsxs)(Wd,{role:`dialog`,"aria-modal":`true`,children:[(0,q.jsx)(Gd,{children:e(`archive_password`)}),(0,q.jsx)(Kd,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,q.jsx)(qd,{title:t.archive,children:t.archive}),(0,q.jsx)(Jd,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),l()):e.key===`Escape`&&(e.preventDefault(),c(null))},ref:s,spellCheck:!1,type:`password`,value:r}),(0,q.jsxs)(Yd,{children:[(0,q.jsx)(Xd,{onClick:()=>c(null),type:`button`,children:e(`cancel`)}),(0,q.jsx)(Zd,{disabled:r.length===0,onClick:l,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Ud=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${so}
`,Wd=v.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${no}
`,Gd=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Kd=v.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,qd=v.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Jd=v.input`
    width: 100%;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    outline: 0;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;

    &:focus {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`,Yd=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Xd=v.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,Zd=v(Xd)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Qd({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:s,compact:c=!1,placeholder:l,onQuery:u,onPrevious:d,onNext:f,onMatchCase:p,onRegex:m,onMode:h,onClose:g,onSelectMatches:_}){let v=o(),y=(0,R.useRef)(null),b=l??v(`search_this_folder`);(0,R.useEffect)(()=>{let e=y.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[s]);let x=e=>{e(),y.current?.focus()};return(0,q.jsxs)($d,{children:[(0,q.jsx)(vi,{}),(0,q.jsx)(ef,{"aria-label":b,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?d():f()),e.key===`Escape`&&(e.preventDefault(),g())},placeholder:b,ref:y,spellCheck:!1,value:e}),!c&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(tf,{children:i===0?`0/0`:`${a+1}/${i}`}),_&&(0,q.jsx)(nf,{disabled:i===0,onClick:_,title:v(`select_all_matches`),type:`button`,children:(0,q.jsx)(Mi,{size:12})}),(0,q.jsx)(nf,{$chevron:!0,onClick:()=>x(d),title:v(`previous_match_shift_enter`),type:`button`,children:(0,q.jsx)(wi,{size:12})}),(0,q.jsx)(nf,{$chevron:!0,$down:!0,onClick:()=>x(f),title:v(`next_match_enter`),type:`button`,children:(0,q.jsx)(wi,{size:12})})]}),(0,q.jsx)(rf,{$on:n,onClick:()=>x(p),title:v(`match_case`),type:`button`,children:`Aa`}),(0,q.jsx)(rf,{$on:r,onClick:()=>x(m),title:v(`regular_expression`),type:`button`,children:`.*`}),!c&&(0,q.jsx)(af,{$on:t===`hide`,onClick:()=>x(h),title:v(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,q.jsx)(Fi,{size:12}):(0,q.jsx)(Pi,{size:12})}),(0,q.jsx)(nf,{onClick:g,title:v(`close_search_esc`),type:`button`,children:(0,q.jsx)(Ni,{size:12})})]})}var $d=v.div`
    position: absolute;
    top: 10px;
    right: 16px;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 5px 6px 5px 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: var(--shadow-float);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--text-muted);
    ${ao}
`,ef=v.input`
    width: 180px;
    padding: 4px 2px;
    border: 0;
    background: transparent;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 12px;
    outline: none;

    &::placeholder {
        color: var(--text-muted);
    }
`,tf=v.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,nf=v.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;

    svg {
        transform: ${({$chevron:e,$down:t})=>e?`rotate(${t?`90deg`:`-90deg`})`:`none`};
    }

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:disabled {
        background: transparent;
        color: var(--text-secondary);
        opacity: 0.35;
        cursor: default;
    }
`,rf=v.button`
    min-width: 24px;
    height: 22px;
    padding: 0 4px;
    border: 1px solid ${({$on:e})=>e?`var(--border-color-focus)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.18)`:`transparent`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font-family: var(--font-mono);
    font-size: 10px;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
    }
`,af=v(rf)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function of(e,t,n,r,i=[]){(0,R.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=wn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function sf({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=o(),a=(0,R.useRef)(null),s=(0,R.useRef)(null),[c,l]=(0,R.useState)(null);return(0,R.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();l({top:t.bottom+6,left:t.left})},[]),(0,R.useLayoutEffect)(()=>{if(!c||!s.current)return;let e=s.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,c.top-e.height-12):c.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):c.left;(t!==c.top||n!==c.left)&&l({top:t,left:n})},[c]),(0,R.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{ref:a,style:{display:`none`}}),c&&(0,Ka.createPortal)((0,q.jsxs)(cf,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:s,style:{position:`fixed`,top:c.top,left:c.left},children:[Object.keys(Fs).map(n=>(0,q.jsx)(lf,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Fs[n](16)},n)),(0,q.jsx)(lf,{onClick:async()=>{let e=await Aa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`choose_an_image`),type:`button`,children:(0,q.jsx)(xi,{size:13})}),r&&(0,q.jsx)(lf,{$active:!e,onClick:()=>t(null),title:i(`default`),type:`button`,children:(0,q.jsx)(Ni,{size:12})})]}),document.body)]})}var cf=v.div`
    position: absolute;
    z-index: 40;
    top: calc(100% + 6px);
    left: 0;
    display: grid;
    grid-template-columns: repeat(6, 24px);
    gap: 4px;
    width: max-content;
    max-height: 236px;
    overflow-y: auto;
    padding: 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-float);
    ${ro}
    transform-origin: top left;
`,lf=v.button`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`transparent`};
    border-radius: 5px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.24)`:`transparent`};
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;function uf({source:e,poster:t,theme:n}){let r=A(e),i=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,a=bn(e.startsWith(`builtin:`)||r?null:e,0,i?`.${i}`:``),o=t??Zu(e,n)??(r?e:a),s=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(i);return o?s?(0,q.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o}):(0,q.jsx)(`img`,{alt:``,src:o}):null}function df({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let s=o(),c=(0,R.useRef)(null),l=(0,R.useRef)(null),u=(0,R.useRef)(!1),[d,f]=(0,R.useState)(null),[p,m]=(0,R.useState)(null),[h,g]=(0,R.useState)(0),_=()=>{let t=c.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?f({width:1920,height:1080}):n>0&&r>0&&f({width:n,height:r}),i.width>0&&i.height>0&&m({width:i.width,height:i.height})},v=p&&d?Math.min(p.height,n*(p.width/d.width)):0,y=Math.max(0,(p?.height??0)-v);(0,R.useEffect)(()=>{p&&d&&!u.current&&(u.current=!0,g(Math.min(y,Math.max(0,r*y))))},[p,d,y,r]),(0,R.useEffect)(()=>{let e=()=>_();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,R.useEffect)(()=>{let e=window.requestAnimationFrame(_);return()=>window.cancelAnimationFrame(e)},[e,t]);let b=e=>{l.current={y:e.clientY,top:h},e.currentTarget.setPointerCapture(e.pointerId)},x=e=>{let t=l.current;t&&g(Math.min(y,Math.max(0,t.top+e.clientY-t.y)))},S=e=>{l.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,q.jsx)(Mf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,q.jsxs)(Nf,{children:[(0,q.jsxs)(Pf,{children:[(0,q.jsx)(`span`,{children:s(`adjust_banner_framing`)}),(0,q.jsx)(Vf,{onClick:i,title:s(`cancel`),type:`button`,children:(0,q.jsx)(Ni,{size:12})})]}),(0,q.jsx)(Ff,{children:s(`drag_the_frame_to_choose_the_visible_part`)}),(0,q.jsxs)(If,{children:[t?(0,q.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{_(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{c.current=e},src:e}):(0,q.jsx)(`img`,{alt:``,draggable:!1,onLoad:_,ref:e=>{c.current=e},src:e}),v>0&&(0,q.jsx)(Lf,{onPointerCancel:S,onPointerDown:b,onPointerMove:x,onPointerUp:S,style:{height:v,top:h},children:(0,q.jsx)(Rf,{})})]}),(0,q.jsxs)(zf,{children:[(0,q.jsx)(Bf,{onClick:i,type:`button`,children:s(`cancel`)}),(0,q.jsx)(Bf,{$primary:!0,onClick:()=>a(y>0?h/y:r),type:`button`,children:s(`save`)})]})]})})}var ff=150,pf=120,mf=200,hf=v.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,gf=v.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,_f=v.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${mf}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${mf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(mf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(mf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(mf*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${mf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(mf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(mf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(mf*.18)}px),
    transparent 100%);

    img,
    video {
        position: absolute;
        top: 0;
        left: 50%;
        width: var(--banner-image-width, 100%);
        max-width: none;
        height: auto;
        display: block;
        transform-origin: center top;
        /* A slow upward drift plus a slight zoom keeps the picture moving even when the crop has
           no spare room; the zoom guarantees the edges are never exposed. */
        transform: translate(-50%, calc(-1 * (var(--banner-image-shift, 0px) + var(--banner-progress, 0) * var(--banner-travel, 0px)))) scale(calc(1 + var(--banner-progress, 0) * 0.05));
        will-change: transform;
    }
`,vf=v.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${ff}px);
    left: 0;
    z-index: 5;
    display: grid;
    place-items: center;
    height: 14px;
    cursor: row-resize;
    background: transparent;

    /* A small centred grip; a full-width bar reads as a separator line. */

    &::before {
        content: "";
        width: 88px;
        height: 3px;
        border-radius: 999px;
        background: rgba(var(--accent-rgb), 0.35);
        transition: background 120ms ease;
    }

    &:hover::before {
        background: rgba(var(--accent-rgb), 0.7);
    }
`,yf=v.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,bf=v.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    padding: 10px 12px 14px;
    /* A soft glass band: a bordered card here would draw a full-width line across the fading art. */
    background: linear-gradient(to bottom,
    rgba(var(--bg-rgb), 0) 0%,
    rgba(var(--bg-rgb), 0.38) 18%,
    rgba(var(--bg-rgb), 0.38) 82%,
    rgba(var(--bg-rgb), 0) 100%);
    backdrop-filter: blur(8px);
`,xf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Sf=v.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Cf=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,wf=v.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Tf=v.input`
    flex: 1;
    min-width: 0;
    height: 28px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: none;

    &:focus {
        border-color: var(--border-color-focus);
    }

    &::placeholder {
        color: var(--text-muted);
    }
`,Ef=v.button`
    height: 28px;
    padding: 0 12px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-sm);
    background: rgba(var(--accent-rgb), 0.12);
    color: var(--text-primary);
    font: inherit;
    font-size: 10.5px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.22);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,Df=v.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Of=v.button`
    width: 100%;
    height: 100%;
    padding: 0;
    overflow: hidden;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    box-shadow: ${({$active:e})=>e?`0 0 0 2px rgba(var(--accent-rgb), 0.25)`:`none`};
    cursor: pointer;

    img,
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`,kf=v.button`
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 50%;
    background: rgba(6, 8, 16, 0.78);
    color: #fff;
    cursor: pointer;

    &:hover {
        border-color: #e81123;
        background: #e81123;
    }
`,Af=v.span`
    position: absolute;
    right: 5px;
    bottom: 4px;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(6, 8, 16, 0.66);
    color: #fff;
`,jf=v.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Mf=v.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Nf=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(960px, 94vw);
    max-height: 92vh;
    overflow-y: auto;
    padding: 16px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: var(--accent-glow);
`,Pf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Ff=v.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,If=v.div`
    position: relative;
    align-self: center;
    width: 100%;
    overflow: hidden;
    border-radius: var(--radius-sm);
    background: var(--bg-media);

    img,
    video {
        display: block;
        width: 100%;
        height: auto;
        user-select: none;
        pointer-events: none;
    }
`,Lf=v.div`
    position: absolute;
    right: 0;
    left: 0;
    border-top: 2px solid var(--accent-primary);
    border-bottom: 2px solid var(--accent-primary);
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.55);
    cursor: grab;
    touch-action: none;

    &:active {
        cursor: grabbing;
    }
`,Rf=v.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,zf=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Bf=v.button`
    padding: 6px 12px;
    border: 1px solid ${({$primary:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$primary:e})=>e?`rgba(var(--accent-rgb), 0.18)`:`transparent`};
    color: ${({$primary:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-focus);
        color: var(--text-primary);
    }
`,Vf=v.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,Hf=v.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 132px;
    height: 72px;
    border: 1px dashed var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-focus);
        color: var(--text-primary);
    }
`,Uf=v.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;

    ${({$overlay:e})=>e?`
            position: absolute;
            z-index: 10;
            top: 10px;
            right: 18px;
            padding: 4px;
            border: 1px solid rgba(var(--accent-rgb), 0.14);
            border-radius: var(--radius-md);
            background: rgba(var(--bg-rgb), 0.42);
            backdrop-filter: blur(14px) saturate(1.2);
            -webkit-backdrop-filter: blur(14px) saturate(1.2);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
        `:`padding-bottom: 14px;`}
`,Wf=v.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Gf=v.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Kf=v.button`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,qf=v.div`
    position: relative;
    display: inline-flex;
`,Jf=v.div`
    position: absolute;
    z-index: 40;
    top: calc(100% + 6px);
    right: 0;
    display: flex;
    flex-direction: column;
    min-width: 150px;
    padding: 5px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-float);
`,Yf=v.button`
    padding: 6px 10px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,Xf=v.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Zf=v.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
    animation: yafm-overview-in 460ms cubic-bezier(0.22, 1, 0.36, 1) both;

    @keyframes yafm-overview-in {
        from {
            opacity: 0;
            transform: translateY(7px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`,Qf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,$f=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,ep=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,tp=v.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,np=v.input`
    width: 100%;
    max-width: 190px;
    padding: 3px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    outline: 0;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    font-weight: 600;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,rp=v.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: 5px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.24)`:`var(--bg-input)`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }

    img {
        width: 14px;
        height: 14px;
        object-fit: contain;
    }
`,ip=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,ap=v.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 13px;
    border: 1px solid ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-md);
    background: ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`var(--bg-card)`};
    color: var(--text-primary);
    font: inherit;
    text-align: left;
    cursor: ${({$plain:e})=>e?`default`:`pointer`};
    transition: background 130ms ease, border-color 130ms ease, transform 140ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 140ms ease;

    ${({$selected:e})=>e?`box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.16);`:``}
    &:hover {
        border-color: ${({$plain:e})=>e?`var(--border-color)`:`var(--border-color-hover)`};
        background: ${({$plain:e})=>e?`var(--bg-card)`:`var(--bg-card-hover)`};
        box-shadow: ${({$plain:e})=>e?`none`:`0 8px 20px rgba(0, 0, 0, 0.22)`};
        transform: ${({$plain:e})=>e?`none`:`translateY(-1px)`};
    }
`,op=v.span`
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 8px;
    background: rgba(var(--accent-secondary-rgb), 0.16);
    color: var(--accent-primary);

    img {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }
`,sp=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,cp=v.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,lp=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,up=v.button`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 7px 10px;
    border: 1px solid ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.55)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$selected:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }
`,dp=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,fp=v.button`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: ${({$row:e})=>e?`7px 10px`:`11px 13px`};
    border: 1px dashed var(--border-color-hover);
    border-radius: ${({$row:e})=>e?`var(--radius-sm)`:`var(--radius-md)`};
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    text-align: left;
    cursor: pointer;

    strong {
        font-size: ${({$row:e})=>e?`12.5px`:`13px`};
        font-weight: ${({$row:e})=>e?500:600};
    }

    &:hover {
        border-color: var(--border-color-focus);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,pp=v.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,mp=v.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,hp=v.div`
    display: flex;
    flex-direction: column;
    height: 320px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow: hidden;

    & > div {
        min-height: 0;
    }
`,gp=v.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,_p=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,vp=v.button`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 7px 9px;
    border: 1px solid ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`var(--bg-card)`};
    color: ${({$selected:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;
    content-visibility: auto;
    contain-intrinsic-size: auto 35px;

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    img {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        object-fit: contain;
    }

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,yp=v.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,bp=v.button`
    display: inline-grid;
    place-items: center;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-secondary-rgb), 0.22);
    }
`,xp=v.button`
    position: ${({$inline:e})=>e?`static`:`absolute`};
    top: 5px;
    right: 5px;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    padding: 0;
    border: 0;
    border-radius: 5px;
    background: rgba(148, 163, 184, 0.18);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: rgba(239, 68, 68, 0.25);
        color: #fca5a5;
    }
`,Sp=v.button`
    display: inline-grid;
    place-items: center;
    width: 16px;
    height: 16px;
    margin-left: 4px;
    padding: 0;
    border: 0;
    border-radius: 4px;
    background: transparent;
    color: var(--text-muted);
    opacity: 0.55;
    vertical-align: -3px;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-secondary-rgb), 0.28);
        color: #c7d2fe;
        opacity: 1;
    }
`,Cp=v.span`
    display: inline-flex;
    align-items: center;
    gap: 2px;
    max-width: 100%;
    padding: 1px 2px 1px 6px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);

    input {
        min-width: 4ch;
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--text-primary);
        font: inherit;
        font-size: 12.5px;
    }
`,wp=v.button`
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: ${({$apply:e})=>e?`rgba(34, 197, 94, 0.22)`:`rgba(148, 163, 184, 0.2)`};
        color: ${({$apply:e})=>e?`#4ade80`:`var(--text-primary)`};
    }
`,Tp=v.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,Ep=v.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,Dp=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Op=v.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,kp=v.input`
    flex: 1;
    min-width: 0;
    height: 28px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: none;

    &:focus {
        border-color: var(--border-color-focus);
    }

    &::placeholder {
        color: var(--text-muted);
    }
`,Ap=v.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,jp=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Mp=v.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Np=v.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,Pp=v.button`
    padding: 3px 10px;
    border: 1px solid var(--border-color-focus);
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.12);
    color: var(--text-primary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.22);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;function Fp({theme:e,places:t,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:u,onRecentCleared:d,onLayoutChanged:f,onHistoryChanged:p,onDrivesChanged:m,visibilityVersion:h=0,find:g,onSearchMatches:_,readOnly:v=!1,onPick:y,onSelectionChange:b,onAddToTray:w,onAddFavorite:T,onRemoveFavorite:E,favoritePaths:ee,onExtractArchive:D,settingsVersion:O=0}){let k=o(),te=zn(),[j,ne]=(0,R.useState)(!1),[N,ie]=(0,R.useState)(null),oe=N?.overviewBanner??null,se=oe?.startsWith(`builtin:`)??!1,F=oe?.startsWith(`url:`)?oe.slice(4):A(oe)?oe:null,I=se||F?``:oe??``,ce=se?``:F?F.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:I.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,le=se?Qu(oe):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(ce),ue=bn(I.length>0?I:null,0,ce?`.${ce}`:``),de=oe?Zu(oe,e)??F??ue:null,[fe,pe]=(0,R.useState)(``),[me,he]=(0,R.useState)(null),[L,ge]=(0,R.useState)(!1),[_e,ve]=(0,R.useState)(null),[ye,be]=(0,R.useState)(null),[xe,Se]=(0,R.useState)(null),[Te,Ee]=(0,R.useState)([]),[De,Oe]=(0,R.useState)(null),[ke,Ae]=(0,R.useState)(``),[z,je]=(0,R.useState)(null),[Ne,Pe]=(0,R.useState)(null),B=ul(`overview`),[Fe,Ie]=(0,R.useState)(null),[Le,Re]=(0,R.useState)(null),ze=(0,R.useRef)(null),V=(0,R.useRef)(null),Be=(0,R.useRef)(null),Ve=(0,R.useRef)(null),He=(0,R.useRef)(null),Ue=Le??N?.overviewBannerHeight??220,[Ke,qe]=(0,R.useState)(0),[Je,Ye]=(0,R.useState)(null),Ze=Math.min(1,Math.max(0,N?.overviewBannerOffset??.3)),Qe=Ue+mf,$e=Je&&Ke>0?Je.height*(Ke/Je.width):Qe,et=$e>0&&$e<Qe+240?(Qe+240)/$e:1,tt=Math.max(1,Math.round(Ke*et)),nt=Math.max(0,$e*et-Qe),rt=Math.min(pf,nt/2,Math.max(20,Ue*.42)),it=rt+Ze*Math.max(0,nt-rt*2),[at,ot]=(0,R.useState)(!1),st=(e,t=!1)=>y?(je(e),Pe({path:e,isDirectory:t}),b?.([e]),!0):!1,lt=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),je(t),Pe({path:t,isDirectory:n}),Ie({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,R.useEffect)(()=>(rl(`overview`,Ne?(e,t)=>Ie({x:e,y:t,target:Ne}):null),()=>rl(`overview`,null)),[Ne]);let ut=(e,t)=>c(e,t);(0,R.useEffect)(()=>{Xe().then(ie,()=>ie(null))},[O]),(0,R.useEffect)(()=>{if(l.available)return Lc().then(Ee,()=>void 0),l.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Ee(t.data.peers)})},[]),(0,R.useEffect)(()=>{let e=Be.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,R.useEffect)(()=>{if(se&&!le){Ye({width:1920,height:1080});return}Ye(null);let e=He.current;e?.complete&&e.naturalWidth>0&&Ye({width:e.naturalWidth,height:e.naturalHeight})},[oe,se,le]),(0,R.useEffect)(()=>{let e=Ve.current;if(!e)return;let t=()=>qe(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[N?.overviewBanner]),(0,R.useEffect)(()=>{if(!me)return;let e=()=>he(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||he(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[me]),(0,R.useEffect)(()=>{if(!L)return;let e=()=>ge(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[L]);let dt=Ls(N),ft=dt.map(e=>e.id),H=(0,R.useRef)(null),pt=e=>me?.kind===`panel`&&me.id===e,mt=e=>me?.kind===`place`&&me.id===e;(0,R.useEffect)(()=>{if(!l.available)return;let e=dt.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[dt.map(e=>e.path??e.id).join(`|`),a]),of(H,g??null,`section`,_??(()=>void 0),[r.length,t.length,n.length,h]);let ht=async(e,t)=>{let n={...N?.placeIcons};t?n[e]=t:delete n[e],he(null),await xt({placeIcons:n}),u(await Me())},gt=async(e,t)=>{let n={...N?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],be(null),await xt({placeNames:n}),u(await Me())},_t=e=>{Se(null),ve({drive:e,label:e.label||`Local Disk`})},vt=async()=>{if(!_e)return;let{drive:e,label:t}=_e;ve(null);let n=await Ce(e.name,t.trim());n.ok?(Se(null),m?.()):Se(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},bt=N?.overviewColumns??1,xt=async e=>{if(!N)return;let t={...N,...e,overviewPanels:e.overviewPanels??ft,overviewHidden:[]};ie(await ct(t)),f?.()},St=async()=>{await xt({overviewPanels:[...Ms],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),u(await Me()),ne(!1)},Ct=async()=>{let e=await Aa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=N?.overviewBanners??[];await xt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},wt=async()=>{let e=fe.trim();if(!N||!A(e))return;let t=N.overviewBanners??[];pe(``),await xt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},Tt=()=>void xt({overviewBanner:null}),Et=e=>void xt({overviewBanners:(N?.overviewBanners??[]).filter(t=>t!==e),...N?.overviewBanner===e||N?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Dt=e=>{ze.current={y:e.clientY,height:Ue},e.currentTarget.setPointerCapture(e.pointerId)},Ot=e=>{let t=ze.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));V.current=n,Re(n)},kt=e=>{ze.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),V.current!==null&&(xt({overviewBannerHeight:V.current}),V.current=null)},At=(e,t)=>{let n=ft.indexOf(e),r=n+t;if(n<0||r<0||r>=ft.length)return;let i=[...ft];[i[n],i[r]]=[i[r],i[n]],xt({overviewPanels:i})},jt=(e,t)=>{let n={...N?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],xt({overviewTitles:n})},Mt=(e,t)=>void xt({overviewViews:{...N?.overviewViews,[e]:t}}),Nt=e=>{let t=N?.overviewPinned??dt.filter(e=>e.pinned).map(e=>e.id);xt({overviewPinned:dt.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Pt=e=>{he(null);let t=t=>{let n={...t};return delete n[e],n},n=N?.overviewPinned??dt.filter(e=>e.pinned).map(e=>e.id);xt({overviewPanels:ft.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(N?.overviewTitles),overviewViews:t(N?.overviewViews),overviewIcons:t(N?.overviewIcons),panelPlaces:t(N?.panelPlaces)})},Ft=(e,t)=>{let n={...N?.overviewIcons};t?n[e]=t:delete n[e],he(null),xt({overviewIcons:n})},It=async e=>{if(!N)return;if(e===`folder`){let e=await ka();if(!e)return;let t=`folder:${e}`;ft.includes(t)||await xt({overviewPanels:[...ft,t]});return}if(e===`quick`){let e=2;for(;ft.includes(`quick:${e}`);)e+=1;await xt({overviewPanels:[...ft,`quick:${e}`]});return}let t=e;for(let n=2;ft.includes(t);n+=1)t=`${e}:${n}`;await xt({overviewPanels:[...ft,t]})},Lt=async e=>{let n=await ka();if(!n)return;if(e.id===`quick`){await xt({quickAccess:[...new Set([...t.map(e=>e.path),n])]}),u(await Me());return}let r=e.places??[];r.some(e=>P(e,n))||await xt({panelPlaces:{...N?.panelPlaces,[e.id]:[...r,n]}})},Rt=async(e,n)=>{he(null),e.id===`quick`?(await xt({quickAccess:t.filter(e=>!P(e.path,n)).map(e=>e.path)}),u(await Me())):await xt({panelPlaces:{...N?.panelPlaces,[e.id]:(e.places??[]).filter(e=>!P(e,n))}})},zt=async(e,n,r)=>{if(P(n,r))return;let i=e.id===`quick`?t.map(e=>e.path):e.places??[],a=i.findIndex(e=>P(e,n)),o=i.findIndex(e=>P(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),e.id===`quick`?(await xt({quickAccess:s}),u(await Me())):await xt({panelPlaces:{...N?.panelPlaces,[e.id]:s}})},Bt=(e,t)=>({draggable:j,onDragOver:e=>{j&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{j&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{j&&(n.preventDefault(),zt(e,n.dataTransfer.getData(`text/plain`),t))}}),Vt=e=>e.id===`quick`?t:(e.places??[]).map(e=>{let n=t.find(t=>P(t.path,e));return{name:N?.placeNames?.[e]??n?.name??(x(e)||e),path:e,kind:`folder`,icon:n?.icon??N?.placeIcons?.[e]??null}}),Ht=e=>{if(r.length===0)return(0,q.jsx)(Ep,{children:k(`files_and_folders_you_open_show_up_here`)});let t=r.slice(0,i);return e.view===`grid`?(0,q.jsx)(ip,{children:t.map(e=>{let t=Bn(te,e.path);return(0,q.jsxs)(ap,{$plain:!1,$selected:z===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Yt(t)):we(e.path))},onDoubleClick:()=>y?.(e.path),onContextMenu:t=>lt(t,e.path,e.isDirectory),title:e.path,children:[(0,q.jsx)(op,{children:t&&te.useIcons?(0,q.jsx)(Bs,{place:t,size:18}):(0,q.jsx)(ic,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(sp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(cp,{children:e.path})]})]},e.path)})}):(0,q.jsx)(lp,{children:t.map(e=>{let t=Bn(te,e.path);return(0,q.jsxs)(up,{$selected:z===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Yt(t)):we(e.path))},onDoubleClick:()=>y?.(e.path),onContextMenu:t=>lt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&te.useIcons?(0,q.jsx)(Bs,{place:t,size:15}):(0,q.jsx)(ic,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,q.jsxs)(dp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(cp,{children:e.path})]})]},e.path)})})},Ut=e=>{let t=N?.favorites??[],n=async e=>{await xt({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>P(t.path,e))&&await xt({favorites:[...t,{path:e,name:x(e)||e,isDirectory:n}]})},i=(e,t,n)=>{j||st(t,n)||(n?c(t,Yt(e)):we(t))},a=j?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(fp,{$row:e.view===`list`,onClick:()=>void Aa().then(e=>r(e,!1)),title:k(`pin_any_file_here`),type:`button`,children:[e.view===`list`?(0,q.jsx)(xi,{size:15}):(0,q.jsx)(op,{children:(0,q.jsx)(xi,{size:15})}),e.view===`list`?(0,q.jsxs)(dp,{children:[(0,q.jsx)(`strong`,{children:k(`add_file`)}),(0,q.jsx)(cp,{children:k(`pin_any_file_here`)})]}):(0,q.jsxs)(sp,{children:[(0,q.jsx)(`strong`,{children:k(`add_file`)}),(0,q.jsx)(cp,{children:k(`pin_any_file_here`)})]})]}),(0,q.jsxs)(fp,{$row:e.view===`list`,onClick:()=>void ka().then(e=>r(e,!0)),title:k(`pin_any_folder_here`),type:`button`,children:[e.view===`list`?(0,q.jsx)(xi,{size:15}):(0,q.jsx)(op,{children:(0,q.jsx)(xi,{size:15})}),e.view===`list`?(0,q.jsxs)(dp,{children:[(0,q.jsx)(`strong`,{children:k(`add_folder`)}),(0,q.jsx)(cp,{children:k(`pin_any_folder_here`)})]}):(0,q.jsxs)(sp,{children:[(0,q.jsx)(`strong`,{children:k(`add_folder`)}),(0,q.jsx)(cp,{children:k(`pin_any_folder_here`)})]})]})]}):null;return t.length===0&&!j?(0,q.jsx)(Ep,{children:k(`no_favorites_yet_right_click_any_file_or_folder_and_add_it_here`)}):e.view===`grid`?(0,q.jsxs)(ip,{children:[t.map(e=>{let t=Bn(te,e.path);return(0,q.jsxs)(ap,{$plain:j,$selected:z===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!j&&y?.(e.path),onContextMenu:t=>!j&&lt(t,e.path,e.isDirectory),title:e.path,children:[j&&(0,q.jsx)(xp,{onClick:t=>{t.stopPropagation(),n(e.path)},title:k(`remove_from_favorites`),type:`button`,children:(0,q.jsx)(Ni,{size:11})}),(0,q.jsx)(op,{children:t&&te.useIcons?(0,q.jsx)(Bs,{place:t,size:18}):(0,q.jsx)(ic,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(sp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(cp,{children:e.path})]})]},e.path)}),a]}):(0,q.jsxs)(lp,{children:[t.map(e=>{let t=Bn(te,e.path);return(0,q.jsxs)(up,{$selected:z===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!j&&y?.(e.path),onContextMenu:t=>!j&&lt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&te.useIcons?(0,q.jsx)(Bs,{place:t,size:15}):(0,q.jsx)(ic,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,q.jsxs)(dp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(cp,{children:e.path})]}),j&&(0,q.jsx)(xp,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:k(`remove_from_favorites`),type:`button`,children:(0,q.jsx)(Ni,{size:11})})]},e.path)}),a]})},Wt=e=>{if(n.length===0)return(0,q.jsx)(Ep,{children:k(`no_drives_are_available`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=_e?.drive.name===t.name,i=r?(0,q.jsx)(Ip,{maxLength:32,onCancel:()=>ve(null),onChange:e=>ve({..._e,label:e}),onCommit:()=>void vt(),value:_e?.label??``}):(0,q.jsx)(q.Fragment,{children:re(t)}),a=!r&&j&&(0,q.jsx)(Sp,{onClick:e=>{e.stopPropagation(),_t(t)},title:k(`rename_volume`),type:`button`,children:(0,q.jsx)(Qi,{size:11})}),o=(0,q.jsx)(cp,{children:k(`free_free_of_total`,{free:C(t.freeSpace),total:C(t.totalSize)})});return e.view===`grid`?(0,q.jsxs)(ap,{$plain:!1,$selected:z===t.name,onClick:e=>{!r&&st(t.name,!0)||r||c(t.name,Yt(e))},onDoubleClick:()=>!r&&y?.(t.name),onContextMenu:e=>!r&&lt(e,t.name,!0),title:t.name,children:[(0,q.jsx)(op,{children:(0,q.jsx)(_i,{size:18})}),(0,q.jsxs)(sp,{children:[(0,q.jsxs)(`strong`,{children:[i,r&&M(t),a]}),o]})]},t.name):(0,q.jsxs)(up,{as:r?`div`:`button`,$selected:z===t.name,onClick:r?void 0:e=>{st(t.name,!0)||c(t.name,Yt(e))},onDoubleClick:r?void 0:()=>y?.(t.name),onContextMenu:r?void 0:e=>lt(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,q.jsx)(_i,{size:18}),(0,q.jsxs)(dp,{children:[(0,q.jsxs)(`strong`,{children:[i,r&&M(t),a]}),o]}),(0,q.jsx)(pp,{children:(0,q.jsx)(mp,{$used:n,$tone:S(n)})})]},t.name)});return e.view===`grid`?(0,q.jsx)(ip,{children:t}):(0,q.jsx)(lp,{children:t})},Gt=()=>{let e=async e=>{Oe(e.id);try{await Rc(e.host,e.port)}finally{Oe(null)}},t=async()=>{let e=ke.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Oe(`manual`);try{await Rc(n,r)}finally{Oe(null)}}};return(0,q.jsxs)(Dp,{children:[(0,q.jsxs)(Op,{children:[(0,q.jsx)(kp,{onChange:e=>Ae(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:k(`address_e_g_192_168_1_20_45701`),value:ke}),(0,q.jsx)(Pp,{disabled:De!==null||!ke.includes(`:`),onClick:()=>void t(),type:`button`,children:k(De===`manual`?`pairing`:`pair_by_address`)})]}),Te.length===0&&(0,q.jsx)(Ep,{children:k(`no_sharing_devices_on_this_network_yet_pair_one_by_address_or_share_a_folder_from_the_title_bar`)}),Te.map(t=>(0,q.jsxs)(Ap,{children:[(0,q.jsxs)(jp,{children:[(0,q.jsx)(fa,{size:14}),(0,q.jsx)(Mp,{title:t.host,children:t.name}),(0,q.jsx)(Np,{$online:t.online,children:t.paired?t.online?k(`paired`):k(`offline`):k(`not_paired`)}),!t.paired&&t.online&&(0,q.jsx)(Pp,{disabled:De===t.id,onClick:()=>void e(t),type:`button`,children:De===t.id?k(`pairing`):k(`pair`)})]}),t.paired&&t.shares.length===0&&(0,q.jsx)(cp,{children:k(`no_folders_are_shared_with_the_app_on_this_device`)}),t.shares.map(e=>(0,q.jsxs)(up,{onClick:n=>c(Wc(t.id,e.id),Yt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,q.jsx)(fa,{size:14}),(0,q.jsxs)(dp,{children:[(0,q.jsx)(`strong`,{children:e.name}),(0,q.jsx)(cp,{children:t.name})]}),(0,q.jsx)(ma,{size:12})]},e.id))]},t.id))]})},qt=e=>{switch(e.kind){case`share`:return Gt();case`favorites`:return Ut(e);case`quick`:{let t=Vt(e);return!j&&t.length===0?(0,q.jsx)(Ep,{children:k(`no_folders_in_this_quick_access_panel_yet`)}):e.view===`grid`?(0,q.jsxs)(ip,{children:[t.map(t=>(0,q.jsxs)(ap,{$plain:j,$selected:z===t.path,...Bt(e,t.path),onClick:e=>{!j&&!st(t.path,!0)&&c(t.path,Yt(e))},onDoubleClick:()=>!j&&y?.(t.path),onContextMenu:e=>!j&&lt(e,t.path,!0),title:t.path,children:[j&&(0,q.jsx)(xp,{onClick:n=>{n.stopPropagation(),Rt(e,t.path)},title:k(`remove_from_quick_access`),type:`button`,children:(0,q.jsx)(Ni,{size:11})}),(0,q.jsxs)(yp,{children:[j?(0,q.jsx)(bp,{onClick:e=>{e.stopPropagation(),he(mt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:k(`change_icon`),type:`button`,children:(0,q.jsx)(op,{children:(0,q.jsx)(Bs,{place:t})})}):(0,q.jsx)(op,{children:(0,q.jsx)(Bs,{place:t})}),mt(t.path)&&(0,q.jsx)(sf,{onPick:e=>void ht(t.path,e),value:N?.placeIcons?.[t.path]??t.icon})]}),(0,q.jsxs)(sp,{children:[ye?.path===t.path?(0,q.jsx)(`strong`,{children:(0,q.jsx)(Ip,{onCancel:()=>be(null),onChange:e=>be({path:t.path,name:e}),onCommit:()=>void gt(t.path,ye?.name??``),value:ye?.name??``})}):(0,q.jsxs)(`strong`,{children:[t.name,j&&(0,q.jsx)(Sp,{onClick:e=>{e.stopPropagation(),he(null),be({path:t.path,name:t.name})},title:k(`rename_folder`),type:`button`,children:(0,q.jsx)(Qi,{size:11})})]}),(0,q.jsx)(cp,{children:t.path})]})]},t.path)),j&&(0,q.jsxs)(fp,{onClick:()=>void Lt(e),title:k(`pin_a_folder_here`),type:`button`,children:[(0,q.jsx)(op,{children:(0,q.jsx)(xi,{size:15})}),(0,q.jsxs)(sp,{children:[(0,q.jsx)(`strong`,{children:k(`add_folder`)}),(0,q.jsx)(cp,{children:k(`pin_a_directory_here`)})]})]})]}):(0,q.jsxs)(lp,{children:[t.map(t=>(0,q.jsxs)(up,{$selected:z===t.path,...Bt(e,t.path),onClick:e=>{!j&&!st(t.path,!0)&&c(t.path,Yt(e))},onDoubleClick:()=>!j&&y?.(t.path),onContextMenu:e=>!j&&lt(e,t.path,!0),title:t.path,type:`button`,children:[(0,q.jsxs)(yp,{children:[j?(0,q.jsx)(bp,{onClick:e=>{e.stopPropagation(),he(mt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:k(`change_icon`),type:`button`,children:(0,q.jsx)(Bs,{place:t,size:15})}):(0,q.jsx)(Bs,{place:t,size:15}),mt(t.path)&&(0,q.jsx)(sf,{onPick:e=>void ht(t.path,e),value:N?.placeIcons?.[t.path]??t.icon})]}),(0,q.jsxs)(dp,{children:[ye?.path===t.path?(0,q.jsx)(`strong`,{children:(0,q.jsx)(Ip,{onCancel:()=>be(null),onChange:e=>be({path:t.path,name:e}),onCommit:()=>void gt(t.path,ye?.name??``),value:ye?.name??``})}):(0,q.jsxs)(`strong`,{children:[t.name,j&&(0,q.jsx)(Sp,{onClick:e=>{e.stopPropagation(),he(null),be({path:t.path,name:t.name})},title:k(`rename_folder`),type:`button`,children:(0,q.jsx)(Qi,{size:11})})]}),(0,q.jsx)(cp,{children:t.path})]}),j&&(0,q.jsx)(xp,{$inline:!0,onClick:n=>{n.stopPropagation(),Rt(e,t.path)},title:k(`remove_from_quick_access`),type:`button`,children:(0,q.jsx)(Ni,{size:11})})]},t.path)),j&&(0,q.jsxs)(fp,{$row:!0,onClick:()=>void Lt(e),title:k(`pin_a_folder_here`),type:`button`,children:[(0,q.jsx)(xi,{size:15}),(0,q.jsxs)(dp,{children:[(0,q.jsx)(`strong`,{children:k(`add_folder`)}),(0,q.jsx)(cp,{children:k(`pin_a_directory_here`)})]})]})]})}case`frequent`:return(0,q.jsx)(Lp,{mode:e.view,onContextMenu:lt,onOpen:c,onPick:y,onSelectionChange:b,version:s});case`recent`:return Ht(e);case`drives`:return Wt(e);default:return(0,q.jsx)(Rp,{mode:e.view,onContextMenu:lt,onOpen:c,onPick:y,onSelectionChange:b,openOnSingleClick:N?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:N?.showCheckboxes??!0,visibilityVersion:h})}};return(0,q.jsxs)(hf,{$flush:!!N?.overviewBanner,ref:Be,children:[!v&&(0,q.jsxs)(Uf,{$overlay:!!N?.overviewBanner,children:[(0,q.jsx)(Wf,{role:`group`,title:k(`columns`),children:[1,2,3,4,5].map(e=>(0,q.jsx)(Gf,{$active:bt===e,onClick:()=>void xt({overviewColumns:e}),title:ae(k,e,`k_1_column`,`count_columns`),type:`button`,children:e},e))}),j&&(0,q.jsxs)(qf,{children:[(0,q.jsxs)(Kf,{onClick:()=>ge(e=>!e),onPointerDown:e=>e.stopPropagation(),title:k(`add_a_panel`),type:`button`,children:[(0,q.jsx)(xi,{size:12}),k(`add_panel`)]}),L&&(0,q.jsx)(Jf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,q.jsx)(Yf,{onClick:()=>{ge(!1),It(e)},type:`button`,children:k(e===`quick`?`quick_access`:e===`recent`?`recent`:e===`frequent`?`frequent`:e===`home`?`home`:e===`drives`?`this_pc`:e===`share`?`shared`:e===`favorites`?`favorites`:`folder_2`)},e))})]}),j&&(0,q.jsxs)(Kf,{onClick:()=>void St(),title:k(`put_every_panel_back_the_way_the_app_ships_it`),type:`button`,children:[(0,q.jsx)(bi,{size:12}),k(`restore_default_panels`)]}),B.available&&(0,q.jsx)(rp,{onClick:e=>B.open(e.clientX,e.clientY),title:k(`selection_menu`),type:`button`,children:(0,q.jsx)(Ta,{size:14})}),(0,q.jsxs)(Kf,{onClick:()=>{ne(e=>!e),ge(!1),he(null),be(null),ve(null)},title:k(j?`done`:`edit`),type:`button`,children:[j?(0,q.jsx)(Mi,{size:13}):(0,q.jsx)(Qi,{size:13}),k(j?`done`:`edit`)]})]}),xe&&(0,q.jsx)(Tp,{children:xe}),N?.overviewBanner&&(0,q.jsxs)(gf,{ref:Ve,style:{height:`${Ue}px`,"--banner-image-width":`${tt}px`,"--banner-image-shift":`${it}px`,"--banner-travel":`${rt}px`,"--banner-overlap":`0px`},children:[(0,q.jsx)(_f,{children:le?(0,q.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Ye({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:de??void 0}):(0,q.jsx)(`img`,{alt:``,onLoad:e=>{let t=se?1920:e.currentTarget.naturalWidth||1920,n=se?1080:e.currentTarget.naturalHeight||1080;Ye({width:t,height:n})},ref:He,src:de??void 0})}),j&&(0,q.jsx)(vf,{onDoubleClick:()=>{V.current=null,Re(null),xt({overviewBannerHeight:220})},onPointerCancel:kt,onPointerDown:Dt,onPointerMove:Ot,onPointerUp:kt,title:k(`drag_to_resize_double_click_to_reset`)})]}),(0,q.jsxs)(yf,{$offset:N?.overviewBanner?100:0,children:[j&&(0,q.jsxs)(bf,{children:[(0,q.jsxs)(xf,{children:[(0,q.jsx)(Sf,{children:k(`banners`)}),N?.overviewBanner&&(0,q.jsxs)(Kf,{onClick:()=>ot(!0),title:k(`adjust_framing`),type:`button`,children:[(0,q.jsx)(Qi,{size:12}),k(`adjust_framing`)]})]}),(0,q.jsxs)(Cf,{children:[(0,q.jsx)(Df,{children:(0,q.jsx)(Of,{$active:!N?.overviewBanner,onClick:Tt,title:k(`no_banner`),type:`button`,children:(0,q.jsxs)(jf,{children:[(0,q.jsx)(Ni,{size:16}),(0,q.jsx)(`span`,{children:k(`no_banner`)})]})})}),Ju.map(t=>(0,q.jsx)(Df,{children:(0,q.jsx)(Of,{$active:N?.overviewBanner===t.id,onClick:()=>void xt({overviewBanner:t.id}),title:`${k(t.concept)} · ${k(t.preset)}`,type:`button`,children:(0,q.jsx)(uf,{source:t.id,theme:e})})},t.id)),Ku.map(t=>(0,q.jsx)(Df,{children:(0,q.jsxs)(Of,{$active:N?.overviewBanner===t.id,onClick:()=>void xt({overviewBanner:t.id}),title:k(t.name),type:`button`,children:[(0,q.jsx)(uf,{poster:t.poster,source:t.id,theme:e}),(0,q.jsx)(Af,{children:(0,q.jsx)(Bi,{size:11})})]})},t.id)),(N?.overviewBanners??[]).map(t=>(0,q.jsxs)(Df,{children:[(0,q.jsx)(Of,{$active:N?.overviewBanner===t||N?.overviewBanner===`url:${t}`,onClick:()=>void xt({overviewBanner:A(t)?`url:${t}`:t}),title:t,type:`button`,children:(0,q.jsx)(uf,{source:t,theme:e})}),(0,q.jsx)(kf,{onClick:()=>Et(t),title:k(`remove`),type:`button`,children:(0,q.jsx)(Ni,{size:10})})]},t)),(0,q.jsxs)(Hf,{onClick:()=>void Ct(),title:k(`add_banner`),type:`button`,children:[(0,q.jsx)(xi,{size:18}),(0,q.jsx)(`span`,{children:k(`add_banner`)})]})]}),(0,q.jsxs)(wf,{children:[(0,q.jsx)(Tf,{onChange:e=>pe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&wt()},placeholder:`https://…`,value:fe}),(0,q.jsx)(Ef,{disabled:!A(fe),onClick:()=>void wt(),type:`button`,children:k(`add_url`)})]})]}),(0,q.jsx)(Xf,{ref:H,$columns:bt,children:dt.map(e=>{let t=ft.indexOf(e.id);return(0,q.jsxs)(Zf,{children:[(0,q.jsxs)(Qf,{children:[(0,q.jsxs)($f,{children:[(0,q.jsxs)(yp,{children:[j?(0,q.jsx)(bp,{onClick:()=>he(pt(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:k(`change_icon`),type:`button`,children:(0,q.jsx)(zs,{panel:e,size:15})}):(0,q.jsx)(zs,{panel:e,size:15}),pt(e.id)&&(0,q.jsx)(sf,{onPick:t=>Ft(e.id,t),value:e.icon})]}),j?(0,q.jsx)(np,{defaultValue:e.title,onBlur:t=>jt(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,q.jsx)(tp,{children:k(e.title)})]}),(0,q.jsxs)(ep,{children:[!j&&e.kind===`recent`&&(0,q.jsx)(Kf,{onClick:()=>void We().then(d),title:k(`clear`),type:`button`,children:k(`clear`)}),!j&&e.kind===`frequent`&&(0,q.jsx)(Kf,{onClick:()=>void Ge().then(()=>p?.()),title:k(`clear_the_frequent_list`),type:`button`,children:k(`clear`)}),!j&&(e.kind===`home`||e.kind===`folder`)&&(0,q.jsx)(Kf,{onClick:()=>c(e.path??a),title:k(`open_folder`),type:`button`,children:k(`open`)}),j&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(rp,{$active:e.pinned,onClick:()=>Nt(e.id),title:e.pinned?k(`unpin_from_the_sidebar`):k(`pin_to_the_sidebar`),type:`button`,children:(0,q.jsx)(Ei,{size:12})}),(0,q.jsx)(rp,{$active:e.view===`list`,onClick:()=>Mt(e.id,`list`),title:k(`list`),type:`button`,children:(0,q.jsx)(Di,{size:13})}),(0,q.jsx)(rp,{$active:e.view===`grid`,onClick:()=>Mt(e.id,`grid`),title:k(`grid`),type:`button`,children:(0,q.jsx)(Oi,{size:13})}),(0,q.jsx)(rp,{disabled:t===0,onClick:()=>At(e.id,-1),title:k(`move_up`),type:`button`,children:(0,q.jsx)(yi,{size:12})}),(0,q.jsx)(rp,{disabled:t===ft.length-1,onClick:()=>At(e.id,1),title:k(`move_down`),type:`button`,children:(0,q.jsx)(yi,{size:12})}),(0,q.jsx)(rp,{onClick:()=>Pt(e.id),title:k(`remove_panel`),type:`button`,children:(0,q.jsx)(Ni,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?qt(e):(0,q.jsx)(gp,{children:qt(e)})]},e.id)})})]}),at&&de&&(0,q.jsx)(df,{height:Ue,offset:Ze,onCancel:()=>ot(!1),onSave:e=>{xt({overviewBannerOffset:e}),ot(!1)},source:de,video:le}),Fe&&(0,q.jsx)(So,{directory:a,menu:{x:Fe.x,y:Fe.y,paths:[Fe.target.path]},onClose:()=>Ie(null),onCopy:(e,t)=>void yt(e,t),onAddToTray:w,onAddFavorite:T,onRemoveFavorite:E,favoritePaths:ee,onExtractArchive:D,onOpen:ut,onOpenFile:e=>y?y(e):void we(e),shortcuts:Kt,target:Fe.target})]})}function Ip({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=o();return(0,q.jsxs)(Cp,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,q.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,q.jsx)(wp,{onClick:r,title:a(`cancel`),type:`button`,children:(0,q.jsx)(Ni,{size:11})}),(0,q.jsx)(wp,{$apply:!0,onClick:n,title:a(`rename_volume`),type:`button`,children:(0,q.jsx)(Mi,{size:12})})]})}function Lp({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=o(),[c,l]=(0,R.useState)(null),[u,d]=(0,R.useState)(null),f=zn(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,R.useEffect)(()=>{He().then(l,()=>l([]))},[a]),!c)return(0,q.jsx)(Ep,{children:s(`reading`)});if(c.length===0)return(0,q.jsx)(Ep,{children:s(`folders_you_open_often_show_up_here`)});let m=e=>ae(s,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path});return e===`grid`?(0,q.jsx)(ip,{children:c.map(e=>{let i=Bn(f,e.path);return(0,q.jsxs)(ap,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Yt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,q.jsx)(op,{children:i&&f.useIcons?(0,q.jsx)(Bs,{place:i,size:18}):(0,q.jsx)(ic,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(sp,{children:[(0,q.jsx)(`strong`,{children:i?.name||e.name}),(0,q.jsx)(cp,{children:m(e)})]})]},e.path)})}):(0,q.jsx)(lp,{children:c.map(e=>{let i=Bn(f,e.path);return(0,q.jsxs)(up,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Yt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,q.jsx)(Bs,{place:i,size:15}):(0,q.jsx)(ic,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,q.jsxs)(dp,{children:[(0,q.jsx)(`strong`,{children:i?.name||e.name}),(0,q.jsx)(cp,{children:m(e)})]})]},e.path)})})}function Rp({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:u,visibilityVersion:d}){let f=o(),[p,m]=(0,R.useState)(null),[h,g]=(0,R.useState)(null),_=zn();return(0,R.useEffect)(()=>{e&&(m(null),Te(e).then(m,()=>m(null)))},[e,d]),(0,R.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&P(n.data.path,e)&&Te(e,!1).then(m,()=>void 0)})},[e]),p?t===`list`?(0,q.jsx)(hp,{children:(0,q.jsx)(Sl,{error:null,listing:p,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void we(e)),onRefresh:()=>void Te(e,!1).then(m,()=>void 0),onRename:(e,t)=>m(n=>n&&{...n,entries:n.entries.map(n=>P(n.fullPath,e)?{...n,name:x(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:u,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...xe,columns:Se.columns??[]}})}):(0,q.jsx)(gp,{children:p.entries.length===0?(0,q.jsx)(Ep,{children:f(`this_folder_is_empty`)}):(0,q.jsx)(_p,{children:p.entries.map(e=>{let t=Bn(_,e.fullPath);return(0,q.jsxs)(vp,{$selected:h===e.fullPath,onClick:t=>{i?(g(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Yt(t)):we(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&_.useIcons?(0,q.jsx)(Bs,{place:t,size:16}):(0,q.jsx)(ic,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,q.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,q.jsx)(Ep,{children:f(`reading`)})}var zp=`yafm://`,Bp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Vp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function Hp(e){return`${zp}${e===`home`?`overview`:e}`}function Up(e){return Vp(e)?Bp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Wp(e){let t=e.trim();if(t.length===0)return null;if(!Vp(t))return t;let n=Bp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Hp(n):null}function Gp({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let s=o(),c=zn(),[l,u]=(0,R.useState)(!1),[d,f]=(0,R.useState)(``),[p,m]=(0,R.useState)([]),[h,g]=(0,R.useState)(0),[_,v]=(0,R.useState)(null),[y,b]=(0,R.useState)(null),[x,S]=(0,R.useState)(null),C=(0,R.useRef)(null),w=(0,R.useRef)(null),T=(0,R.useRef)(0);(0,R.useEffect)(()=>{if(!Hc(e)){S(null);return}let t=Uc(e);if(!t){S(null);return}let n=!0;return Ic().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);S({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&S(null)),()=>{n=!1}},[e]),(0,R.useEffect)(()=>{l||f(e.replace(/\\/g,`/`))},[e,l]),(0,R.useEffect)(()=>{r&&r!==T.current&&(T.current=r,f(e.replace(/\\/g,`/`)),u(!0))},[r,e]),(0,R.useEffect)(()=>{l&&C.current?.select()},[l]),(0,R.useEffect)(()=>{if(!l)return;let e=()=>u(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[l]);let E=()=>{f(e.replace(/\\/g,`/`)),u(!0)},ee=t=>{let n=d.trim(),r=!!(t?.ctrlKey||t?.metaKey);u(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,R.useEffect)(()=>{if(!l){m([]);return}let e=Yp(d);if(!e){m([]);return}let t=!1,n=window.setTimeout(()=>{Te(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));m(i),g(0)},()=>{t||m([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[d,l]);let D=(e,t=!1)=>{u(!1),i(e.path,t)};if((0,R.useLayoutEffect)(()=>{if(!l){v(null);return}let e=()=>{let e=w.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);v({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[l]),l)return(0,q.jsxs)(tm,{onPointerDown:e=>e.stopPropagation(),ref:w,children:[(0,q.jsxs)(am,{children:[(0,q.jsx)(`input`,{onChange:e=>f(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&p.length>0)e.preventDefault(),g(e=>(e+1)%p.length);else if(e.key===`ArrowUp`&&p.length>0)e.preventDefault(),g(e=>(e-1+p.length)%p.length);else if(e.key===`Tab`&&p.length>0){e.preventDefault();let t=p[Math.min(h,p.length-1)];f(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?p.length>0?D(p[Math.min(h,p.length-1)],e.ctrlKey||e.metaKey):ee(e):e.key===`Escape`&&(p.length>0?m([]):u(!1))},ref:C,spellCheck:!1,value:d}),(0,q.jsx)(om,{onClick:()=>u(!1),title:s(`cancel`),type:`button`,children:(0,q.jsx)(Ni,{size:12})}),(0,q.jsx)(om,{$apply:!0,onClick:ee,onPointerDown:e=>e.stopPropagation(),title:s(`open_this_path`),type:`button`,children:(0,q.jsx)(Mi,{size:14})})]}),p.length>0&&_&&(0,Ka.createPortal)((0,q.jsx)(nm,{onPointerDown:e=>e.stopPropagation(),style:{left:_.left,top:_.top,width:_.width},children:p.map((e,t)=>(0,q.jsxs)(rm,{$active:t===h,onClick:t=>D(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>g(t),type:`button`,children:[(0,q.jsx)(ic,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,q.jsx)(im,{children:e.name})]},e.path))}),document.body)]});let O=t?[{label:t,path:e,icon:n}]:Kp(e,x)??Jp(e,c.places);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Xp,{onClick:E,title:s(`click_to_type_a_path`),children:O.map((t,n)=>(0,q.jsxs)(Zp,{$last:n===O.length-1,children:[n>0&&(0,q.jsx)($p,{children:(0,q.jsx)(wi,{size:9})}),(0,q.jsxs)(em,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):b({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,q.jsx)(Qp,{children:(0,q.jsx)(Bs,{place:t.place,size:13})}):t.icon&&(0,q.jsx)(Qp,{children:t.icon}),t.label]})]},t.path))}),y&&(0,q.jsx)(lo,{items:[{label:s(`open`),icon:(0,q.jsx)(Ci,{size:14}),onSelect:()=>i(y.path)},{label:s(`open_in_new_tab`),icon:(0,q.jsx)(xi,{size:14}),onSelect:()=>i(y.path,!0)},{label:s(`copy_as_path`),icon:(0,q.jsx)(va,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(y.path)},...Vp(y.path)?[{label:s(`open_with`),icon:(0,q.jsx)(Wi,{size:14}),onSelect:()=>void Pt(y.path)},{label:s(`properties`),icon:(0,q.jsx)(Ti,{size:14}),onSelect:()=>void Nt([y.path])}]:[]],onClose:()=>b(null),x:y.x,y:y.y})]})}function Kp(e,t){let n=Uc(e);if(!n)return null;let r=Wc(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,q.jsx)(fa,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function qp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Jp(e,t){let n=qp(e),r=-1,i=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>P(t.path,e.path));t>r&&(r=t,i=e)}return i&&r>=0&&n.splice(0,r+1,{label:i.name,path:n[r].path,place:i}),n}function Yp(e){if(Vp(e)||Hc(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Xp=v.div`
    display: flex;
    align-items: center;
    min-width: 0;
    flex: 1;
    height: 32px;
    padding: 0 10px;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    overflow: hidden;
    cursor: text;
    font-family: var(--font-path), var(--font-cjk);
    transition: border-color 130ms ease, background 130ms ease, box-shadow 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-input);
        box-shadow: inset 0 0 0 1px rgba(var(--accent-secondary-rgb), 0.08);
    }
`,Zp=v.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Qp=v.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,$p=v.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,em=v.button`
    display: inline-flex;
    align-items: center;
    padding: 4px 6px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: inherit;
    font: inherit;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -1px;
    }
`,tm=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,nm=v.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${qa}
    animation: yafm-path-in 130ms cubic-bezier(0.22, 1, 0.36, 1);
    transform-origin: top left;

    @keyframes yafm-path-in {
        from {
            opacity: 0;
            transform: translateY(-4px) scale(0.99);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`,rm=v.button`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 6px 8px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`transparent`};
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;
    transition: background 100ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.14);
    }
`,im=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,am=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    min-width: 0;
    height: 32px;
    padding: 0 4px 0 10px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);

    input {
        flex: 1;
        min-width: 0;
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--text-primary);
        font-family: var(--font-mono);
        font-size: 12px;
    }
`,om=v.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: ${({$apply:e})=>e?`rgba(34, 197, 94, 0.22)`:`rgba(148, 163, 184, 0.2)`};
        color: ${({$apply:e})=>e?`#4ade80`:`var(--text-primary)`};
    }
`,sm=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,q.jsx)(`path`,{d:`M4 4v6h6`})]});function cm({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,onShowDetails:i,onPreviewChange:a,platform:s}){let c=o(),l=cl(`recycle`),u=s===`windows`,[d,f]=(0,R.useState)([]),[p,m]=(0,R.useState)([]),[h,g]=(0,R.useState)(!1),[_,v]=(0,R.useState)(null),[y,b]=(0,R.useState)(!0),[x,S]=(0,R.useState)(!1),[w,T]=(0,R.useState)(null),[E,ee]=(0,R.useState)(!1),[D,O]=(0,R.useState)(()=>new Set),[k,te]=(0,R.useState)(null),[A,j]=(0,R.useState)(()=>{let e=Qn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[M,ne]=(0,R.useState)(null),[N,re]=(0,R.useState)(null),oe=(0,R.useRef)(null),se=(0,R.useCallback)(async()=>{b(!0),T(null);try{f(await Pe(E))}catch(e){T(e instanceof Error?e.message:String(e))}finally{b(!1)}},[E]),P=(0,R.useCallback)(async()=>{try{f(await Pe(E))}catch{}},[E]);(0,R.useEffect)(()=>{se()},[se]),(0,R.useEffect)(()=>{let e=window.setInterval(()=>void P(),1e4);return()=>window.clearInterval(e)},[P]),(0,R.useEffect)(()=>{E||(m([]),g(!1),v(null))},[E]),(0,R.useEffect)(()=>{O(e=>{let t=new Set(d.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[d]);let F=(0,R.useMemo)(()=>{let e=new Set(d.map(e=>e.id));return[...d,...p.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=lm(e,t,A.column);return A.descending?-n:n})},[d,p,A]),I=(0,R.useMemo)(()=>!t?.open||t.query.trim().length===0?F:F.filter(e=>jn(e.name,t)||jn(e.originalPath,t)),[F,t?.open,t?.query,t?.matchCase,t?.regex]),ce=t?.open&&t.query.trim().length>0?I.length===0:F.length===0,le=(0,R.useRef)(null);of(le,t??null,`[data-search-block]`,n??(()=>void 0),[F]),(0,R.useEffect)(()=>{O(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,R.useEffect)(()=>{r&&O(new Set(I.map(e=>e.id)))},[r]);let ue=(0,R.useMemo)(()=>F.filter(e=>D.has(e.id)),[F,D]),de=ue.filter(e=>e.removable&&!e.isOrphan),fe=ue.filter(e=>e.removable),pe=(e,t)=>{let n=t.ctrlKey||t.metaKey;O(r=>{if(t.shiftKey&&k){let t=F.findIndex(e=>e.id===k),i=F.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(F[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),te(e.id)},me=(0,R.useCallback)(()=>O(new Set(I.map(e=>e.id))),[I]),he=I.length>0&&I.every(e=>D.has(e.id)),L=(0,R.useCallback)(async()=>{let e=de.map(e=>e.id);if(e.length!==0){S(!0);try{let t=await Ie(e);t.ok||await Pa(ae(c,e.length,`restored_done_of_1_item`,`restored_done_of_total_items`,{done:t.done,total:e.length})),O(new Set),await se()}finally{S(!1)}}},[se,de,c]),ge=(0,R.useCallback)(async()=>{let e=fe.map(e=>e.id);if(re(null),e.length!==0){S(!0);try{let t=await Le(e);!t.ok&&!t.cancelled&&await Pa(ae(c,e.length,`deleted_done_of_1_item`,`deleted_done_of_total_items`,{done:t.done,total:e.length})),O(new Set),await se()}finally{S(!1)}}},[fe,se,c]),_e=async()=>{re(null),S(!0);try{await Fe(E),O(new Set),await se()}finally{S(!1)}},ve=async()=>{S(!0),v(null);try{let e=await ze();if(e.cancelled){v(`Elevation was declined — nothing was read.`);return}if(e.failed){v(`The elevated helper could not produce a report. Try again.`);return}m(e.entries),g(!0)}finally{S(!1)}},ye=async()=>{S(!0),re(null);try{await V(),m([]),g(!1),v(null),await se()}finally{S(!1)}},be=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},xe=e=>{navigator.clipboard.writeText(e.originalPath)},Se=(e,t)=>{e.preventDefault(),t&&!D.has(t.id)&&O(new Set([t.id])),ne({x:e.clientX,y:e.clientY})};(0,R.useEffect)(()=>(rl(`recycle`,D.size>0?(e,t)=>ne({x:e,y:t}):null),()=>rl(`recycle`,null)),[D]),(0,R.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),me()):e.key===`delete`?(e.preventDefault(),fe.length>0&&re(`delete`)):e.key===`Enter`&&de.length>0?(e.preventDefault(),L()):e.key===`Escape`&&(O(new Set),ne(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[fe.length,de.length,L,me]);let Ce=[{label:c(`restore`),icon:(0,q.jsx)(sm,{width:14,height:14}),disabled:de.length===0,onSelect:()=>void L()},{label:c(`delete_permanently`),icon:(0,q.jsx)(ji,{size:14}),danger:!0,disabled:fe.length===0,onSelect:()=>re(`delete`)},{label:c(`properties`),icon:(0,q.jsx)(Ti,{size:14}),disabled:ue.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=ue;e&&Re(e.id)}},{label:c(`open_original_location`),icon:(0,q.jsx)(hi,{size:14}),disabled:ue.length!==1,onSelect:()=>{let[e]=ue;e&&be(e)}},{label:c(`copy_original_path`),icon:(0,q.jsx)(va,{size:14}),disabled:ue.length!==1,onSelect:()=>{let[e]=ue;e&&xe(e)}},{label:c(`select_all`),separatorBefore:!0,onSelect:me},{label:c(`refresh`),icon:(0,q.jsx)(bi,{size:14}),onSelect:()=>void se()}],we=ue.length>0?ue[0]:null,Te=we?{name:we.name,path:we.contentPath||we.originalPath,isDirectory:we.isDirectory,size:we.size,modified:we.deleted,fields:[{label:c(`type`),value:c(dm(we))},{label:c(`original_location`),value:we.originalPath},{label:c(`date_deleted`),value:ie(we.deleted)},{label:c(`size`),value:we.isDirectory?`—`:C(we.size)},...we.owner?[{label:c(`owner`),value:we.owner}]:[],{label:c(`status`),value:we.isOrphan?c(`metadata_only`):we.removable?c(`restorable`):c(`other_profile`)}]}:null,Ee=ue.length>1?ae(c,ue.length,`k_1_item_selected`,`count_items_selected`):void 0,De=(0,R.useRef)(``);return(0,R.useEffect)(()=>{let e=`${Te?.path??``}|${Te?.modified??0}|${Ee??``}`;De.current!==e&&(De.current=e,a?.(Te,Ee))},[Te,Ee,a]),(0,q.jsxs)(pm,{ref:oe,onContextMenu:e=>Se(e),children:[(0,q.jsxs)(mm,{children:[(0,q.jsxs)(hm,{children:[(0,q.jsx)(ji,{size:16}),(0,q.jsx)(`span`,{children:c(`recycle_bin`)}),(0,q.jsxs)(gm,{children:[y?`…`:ae(c,F.length,`k_1_item`,`count_items`),D.size>0&&` · ${c(`count_selected`,{count:D.size})}`]})]}),(0,q.jsxs)(_m,{children:[(0,q.jsx)(ym,{$on:E,onClick:()=>ee(e=>!e),title:c(`show_metadata_records_whose_content_is_already_gone`),type:`button`,children:c(`orphans`)}),E&&u&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(vm,{disabled:x||h,onClick:()=>void ve(),title:c(h?`the_administrator_view_is_already_loaded`:`ask_for_administrator_rights_and_list_every_profile_s_leftovers`),type:`button`,children:c(x?`working`:h?`admin_view_loaded`:`show_all_admin`)}),h&&p.length>0&&(0,q.jsx)(vm,{disabled:x,onClick:()=>re(`purge`),type:`button`,children:c(`delete_every_orphan`)})]}),(0,q.jsx)(vm,{disabled:x||de.length===0,onClick:()=>void L(),type:`button`,children:c(`restore`)}),(0,q.jsx)(vm,{$danger:!0,disabled:x||fe.length===0,onClick:()=>re(`delete`),type:`button`,children:c(`delete`)}),(0,q.jsx)(vm,{disabled:x||F.length===0,onClick:()=>re(`empty`),type:`button`,children:c(`empty`)}),(0,q.jsx)(bm,{onClick:()=>void se(),title:c(`refresh`),type:`button`,children:(0,q.jsx)(bi,{size:14})}),l.available&&(0,q.jsx)(bm,{onClick:e=>l.open(e.clientX,e.clientY),title:c(`selection_menu`),type:`button`,children:(0,q.jsx)(Ta,{size:14})})]})]}),_&&(0,q.jsx)(Vm,{children:_}),w&&(0,q.jsx)(Hm,{children:w}),!w&&(0,q.jsx)(Bm,{children:(0,q.jsxs)(xm,{ref:le,children:[(0,q.jsxs)(Cm,{children:[(0,q.jsx)(km,{$checked:he,$partial:!he&&D.size>0,onClick:()=>he?O(new Set):me(),title:c(he?`select_none`:`select_all`),type:`button`,children:he?(0,q.jsx)(Mi,{size:9}):D.size>0&&(0,q.jsx)(Am,{})}),(0,q.jsxs)(wm,{onClick:()=>Oe(`name`),type:`button`,children:[c(`name`),um(A,`name`)]}),(0,q.jsxs)(wm,{onClick:()=>Oe(`original`),type:`button`,children:[c(`original_location`),um(A,`original`)]}),(0,q.jsxs)(wm,{onClick:()=>Oe(`deleted`),type:`button`,children:[c(`date_deleted`),um(A,`deleted`)]}),(0,q.jsxs)(wm,{onClick:()=>Oe(`size`),type:`button`,children:[c(`size`),um(A,`size`)]}),(0,q.jsxs)(wm,{onClick:()=>Oe(`type`),type:`button`,children:[c(`type`),um(A,`type`)]}),(0,q.jsx)(`span`,{})]}),(0,q.jsxs)(Tm,{onClick:e=>{e.target===e.currentTarget&&O(new Set)},children:[!y&&ce&&(0,q.jsx)(Hm,{children:t?.open&&t.query.trim().length>0?c(`no_matching_items`):c(`the_recycle_bin_is_empty`)}),F.map(e=>(0,q.jsxs)(Em,{$checked:D.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>pe(e,t),onContextMenu:t=>Se(t,e),onDoubleClick:()=>{O(new Set([e.id])),te(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,q.jsx)(Om,{$checked:D.has(e.id),children:D.has(e.id)&&(0,q.jsx)(Mi,{size:9})}),(0,q.jsxs)(jm,{children:[(0,q.jsx)(fm,{entry:e}),(0,q.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,q.jsx)(zm,{children:c(`metadata_only`)}),e.owner&&(0,q.jsx)(zm,{$other:!0,children:c(`other_profile`)})]}),(0,q.jsx)(Nm,{children:e.originalPath}),(0,q.jsx)(Pm,{children:ie(e.deleted)}),(0,q.jsx)(Fm,{children:e.isDirectory?`—`:C(e.size)}),(0,q.jsx)(Im,{children:c(dm(e))}),(0,q.jsxs)(Lm,{children:[e.removable&&!e.isOrphan&&(0,q.jsx)(Rm,{onClick:t=>{t.stopPropagation(),Ie([e.id]).then(se)},title:c(`restore_to_its_original_folder`),type:`button`,children:(0,q.jsx)(sm,{})}),e.removable&&(0,q.jsx)(Rm,{$danger:!0,onClick:t=>{t.stopPropagation(),O(new Set([e.id])),re(`delete`)},title:e.isOrphan?c(`remove_the_leftover_record`):c(`delete_permanently`),type:`button`,children:(0,q.jsx)(ji,{size:13})})]})]},e.id))]})]})}),M&&(0,q.jsx)(lo,{items:Ce,onClose:()=>ne(null),x:M.x,y:M.y}),(0,q.jsx)(Zo,{confirmLabel:c(N===`empty`?`empty_the_bin`:N===`purge`?`delete_every_orphan`:`delete`),danger:!0,message:N===`empty`?ae(c,F.length,`permanently_delete_1_item_this_cannot_be_undone`,`permanently_delete_count_items_this_cannot_be_undone`):N===`purge`?c(`permanently_delete_every_leftover_record_including_the_ones_owned_by_other_profiles_this_cannot_be_undone`):ae(c,fe.length,`permanently_delete_1_selected_item_this_cannot_be_undone`,`permanently_delete_count_selected_items_this_cannot_be_undone`),onCancel:()=>re(null),onConfirm:()=>{N===`empty`?_e():N===`purge`?ye():ge()},open:N!==null,title:c(N===`empty`?`empty_the_recycle_bin`:N===`purge`?`delete_every_orphan`:`delete_permanently`)})]});function Oe(e){j(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return $n(`yafm.recycle.sort`,n),n})}}function lm(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return dm(e).localeCompare(dm(t),void 0,{sensitivity:`base`})}}function um(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function dm(e){if(e.isDirectory)return`folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`file`}function fm({entry:e}){let t=U(e.originalPath,e.isDirectory);return(0,q.jsx)(Mm,{children:t?(0,q.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,q.jsx)(hi,{}):(0,q.jsx)(gi,{})})}var pm=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,mm=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,hm=v.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,gm=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,_m=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,vm=v.button`
    padding: 5px 10px;
    border: 1px solid ${({$danger:e})=>e?`rgba(248, 113, 113, 0.35)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.6)`:`var(--border-color-hover)`};
        background: var(--bg-card-hover);
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`,ym=v(vm)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,bm=v.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,xm=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Sm=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Cm=v.div`
    display: grid;
    grid-template-columns: ${Sm};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,wm=v.button`
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
    }
`,Tm=v.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Em=v.div`
    display: grid;
    grid-template-columns: ${Sm};
    gap: 14px;
    align-items: center;
    padding: 8px 12px;
    border: 1px solid ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.38)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.1)`:`transparent`};
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$orphan:e})=>e?.72:1};
    cursor: default;
    user-select: none;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
        opacity: 1;
    }

    &:hover button {
        opacity: 1;
    }
`,Dm=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Om=v.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,km=v.button`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    padding: 0;
    border: 1px solid ${({$checked:e,$partial:t})=>e||t?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e,$partial:t})=>e||t?`var(--accent-primary)`:`transparent`};
    color: #fff;
    cursor: pointer;
    transition: border-color 120ms ease, background 120ms ease;

    &:hover {
        border-color: var(--border-color-focus);
    }
`,Am=v.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,jm=v(Dm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Mm=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
    }
`,Nm=v(Dm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Pm=v(Dm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Fm=v(Dm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Im=v(Dm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Lm=v.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Rm=v.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    opacity: 0;
    transition: opacity 120ms ease, background 120ms ease;

    svg {
        width: 13px;
        height: 13px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.7;
    }

    &:hover {
        background: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.2)`:`rgba(148, 163, 184, 0.2)`};
        color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-primary)`};
    }
`,zm=v.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Bm=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Vm=v.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Hm=v.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Um(){return l.available?(await l.request(`app.tags`)).tags:[]}async function Wm(e){return!l.available||!e?!1:(await l.request(`app.tags.delete`,{name:e})).ok}async function Gm(e,t){return!l.available||!e?[]:(await l.request(`app.tags.create`,{name:e,color:t})).tags}async function Km(e,t){return!l.available||!e?!1:(await l.request(`app.tags.color`,{name:e,color:t})).ok}async function qm(e,t){return!l.available||!e||!t?!1:(await l.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function Jm(){let e=o();return(0,q.jsx)(Ym,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var Ym=v.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Xm=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function Zm(e){return`"${e.replaceAll(`"`,``)}"`}function Qm(e){let t=document.documentElement.style;for(let n of Xm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Zm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function $m(){return l.available?(await l.request(`app.fonts`)).fonts??[]:[]}function eh({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let s=o(),[c,l]=(0,R.useState)(null),[u,d]=(0,R.useState)(``),f=(0,R.useRef)(null),p=(0,R.useRef)(null),m=(0,R.useMemo)(()=>{let e=u.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,u]);(0,R.useEffect)(()=>{if(!c)return;p.current?.focus();let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[c]);let h=()=>{if(c){l(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;d(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;l({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},g=e=>{a(e),l(null)};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(th,{"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:i,onClick:h,ref:f,type:`button`,children:[(0,q.jsx)(nh,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,q.jsx)(rh,{children:`▾`})]}),c&&(0,Ka.createPortal)((0,q.jsxs)(ih,{"data-font-menu":`true`,role:`listbox`,style:{left:c.left,maxHeight:c.maxHeight,top:c.top,width:c.width},children:[(0,q.jsxs)(ah,{children:[(0,q.jsx)(vi,{size:12}),(0,q.jsx)(oh,{onChange:e=>d(e.target.value),placeholder:s(`filter_fonts`),ref:p,value:u})]}),(0,q.jsxs)(sh,{children:[(0,q.jsxs)(ch,{$active:!e,"aria-selected":!e,onClick:()=>g(null),role:`option`,type:`button`,children:[(0,q.jsxs)(uh,{children:[n,` `,(0,q.jsx)(fh,{children:s(`default_2`)})]}),!e&&(0,q.jsx)(Mi,{size:11})]}),m.map(t=>(0,q.jsxs)(ch,{$active:e===t,"aria-selected":e===t,onClick:()=>g(t),role:`option`,type:`button`,children:[(0,q.jsxs)(lh,{children:[(0,q.jsx)(uh,{children:t}),(0,q.jsx)(dh,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,q.jsx)(Mi,{size:11})]},t)),m.length===0&&(0,q.jsx)(ph,{children:s(`no_matching_font`)})]})]}),document.body)]})}var th=v.button`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-width: 180px;
    max-width: 320px;
    height: 32px;
    padding: 0 9px 0 10px;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }

    &:disabled {
        opacity: 0.55;
        cursor: default;
    }
`,nh=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rh=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,ih=v.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${ro}
`,ah=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,oh=v.input`
    flex: 1;
    min-width: 0;
    border: 0;
    background: transparent;
    color: var(--text-primary);
    font: inherit;
    font-size: 11.5px;
    outline: none;

    &::placeholder {
        color: var(--text-muted);
    }
`,sh=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,ch=v.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 7px 9px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.12);
        color: var(--text-primary);
    }
`,lh=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,uh=v.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dh=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fh=v.span`
    color: var(--text-muted);
    font-size: 10px;
`,ph=v.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,mh=[{id:`goBack`,label:`back`,note:`the_previous_folder_in_this_tab_the_mouse_back_button_and_the_browser_back_key_always_work`},{id:`goForward`,label:`forward`,note:`the_next_folder_in_this_tab_the_mouse_forward_button_and_the_browser_forward_key_always_work`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder_like_alt_home_in_dolphin`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path_ctrl_l_in_dolphin`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`ctrl_d_copies_too_following_kde_s_file_manager`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`delete_is_del_by_default_not_ctrl_d`},{id:`deletePermanently`,label:`delete_permanently`,note:`bypasses_the_recycle_bin_dolphin_uses_shift_delete`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected_dolphin_uses_ctrl_shift_a`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory_f10_also_works`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_windows_terminal_in_the_current_folder_dolphin_uses_f4_for_its_terminal_panel`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one_f3_in_dolphin`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],hh=`en`,gh=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],_h=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],vh=new Date(2026,10,5,16,8).getTime(),yh=`system`,bh={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},xh=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-icons`,label:`folder_icons`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],Sh=`yafm.colors.recent`;function Ch(){let e=Qn(Sh);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function wh({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let s=o(),[c,l]=(0,R.useState)([]),[u,d]=(0,R.useState)(null),[m,_]=(0,R.useState)(null),v=f(g(m?.themeMode)),[y,b]=(0,R.useState)(null),[T,E]=(0,R.useState)(``),[ee,D]=(0,R.useState)(`file`),[O,k]=(0,R.useState)(!1),[te,j]=(0,R.useState)(!1),[M,ne]=(0,R.useState)(null),[N,re]=(0,R.useState)(pt),[ie,P]=(0,R.useState)(!1),[F,ge]=(0,R.useState)(null),[_e,ve]=(0,R.useState)(null),[ye,be]=(0,R.useState)(null),[xe,Ce]=(0,R.useState)(null),[we,Te]=(0,R.useState)(!1),[Ee,De]=(0,R.useState)(null),[Oe,ke]=(0,R.useState)(!1),[Ae,z]=(0,R.useState)(null),[je,Me]=(0,R.useState)(!1),[Ne,Pe]=(0,R.useState)(null),[B,Fe]=(0,R.useState)(null),[Ie,Le]=(0,R.useState)(!1),[Re,ze]=(0,R.useState)([]),[V,Be]=(0,R.useState)(null),[Ve,He]=(0,R.useState)(!1),[Ue,We]=(0,R.useState)(null),[Ge,qe]=(0,R.useState)(``),[Je,Ye]=(0,R.useState)(Vs),[Qe,$e]=(0,R.useState)(null),[nt,lt]=(0,R.useState)(null),[dt,gt]=(0,R.useState)(``),[yt,bt]=(0,R.useState)(``),[xt,St]=(0,R.useState)(null),[Ct,wt]=(0,R.useState)(Ch),[Tt,Et]=(0,R.useState)({}),[Dt,Ot]=(0,R.useState)(null),[kt,At]=(0,R.useState)(null),[jt,Mt]=(0,R.useState)(!1),[Nt,Pt]=(0,R.useState)(null),[Ft,It]=(0,R.useState)(null),Lt=(0,R.useRef)(!1),[Rt,zt]=(0,R.useState)(null),[Bt,Vt]=(0,R.useState)(xh[0].id),[Ht,Ut]=(0,R.useState)([]),[Wt,Gt]=(0,R.useState)(null),[qt,Jt]=(0,R.useState)(``),[Yt,Qt]=(0,R.useState)(!1),[$t,en]=(0,R.useState)(null),[tn,nn]=(0,R.useState)(null),[rn,an]=(0,R.useState)(!1),[on,sn]=(0,R.useState)(``),cn=(0,R.useRef)(null),ln=(0,R.useRef)({}),un=m?.defaultView??Se,fn=m?.themePresets??[],pn=e?.platform===`windows`,mn=pn?_e?_e.registered&&_e.pathMatches:!1:m?.archiveHandler??!1,hn=_e?.registered??m?.archiveHandler??!1,U=pn?ye?ye.registered&&ye.pathMatches:!1:m?.defaultFileManager??!1,W=pn?N.registered&&N.pathMatches:m?.linksEnabled??!1;of(cn,r??null,`section`,i??(()=>void 0),[m]),(0,R.useEffect)(()=>{let e=cn.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Vt(xh[xh.length-1].id);return}let n=t+110,r=xh[0].id;for(let{id:e}of xh){let t=ln.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Vt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let G=e=>t=>{ln.current[e]=t},gn=e=>{ln.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),Vt(e)};(0,R.useEffect)(()=>{t&&gn(t)},[t]),(0,R.useEffect)(()=>{p().then(e=>l(e.available),()=>l([]))},[]),(0,R.useEffect)(()=>{$m().then(Ut,()=>Ut([]))},[]),(0,R.useEffect)(()=>{_t().then(en,()=>en(null))},[]),(0,R.useEffect)(()=>{ue().then(At,()=>void 0)},[]),(0,R.useEffect)(()=>{Ke().then(d,()=>d(null)),Xe().then(_,()=>_(null)),mt().then(re,()=>re(pt)),at().then(ve,()=>ve(null)),et().then(be,()=>be(null)),rt().then(Ce,()=>Ce(null)),Um().then(ze,()=>ze([]))},[]),(0,R.useEffect)(()=>{let e=()=>void ft().then(ne,()=>ne(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let K=async e=>{if(!m)return;let t={...m,...e};Object.keys(e).every(e=>t[e]===m[e])||(_(t),dn(),_(await ct(t)),n())},_n=async e=>{let t=await Aa(e);if(!t)return;let n=m?.backgroundCustom??[];await K({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},vn=async()=>{let e=on.trim();if(!m||!A(e))return;let t=m.backgroundCustom??[];sn(``),await K({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},yn=e=>{if(!m)return;let t=m.backgroundSource;K({backgroundCustom:m.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},bn=async()=>{if(!m)return;let t=await ka();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;m.protectedPaths.includes(r)||await K({protectedPaths:[...m.protectedPaths,r]})},xn=()=>{let e=dt.trim();m&&e&&!m.protectedPaths.includes(e)&&(gt(``),K({protectedPaths:[...m.protectedPaths,e]}))},Sn=()=>{if(!m||!Qe)return;let e=Qe.value.trim(),t=Qe.from;$e(null),e.length!==0&&e!==t&&K({protectedPaths:m.protectedPaths.map(n=>n===t?e:n)})},Cn=e=>{m&&K({protectedPaths:m.protectedPaths.filter(t=>t!==e)})},wn=async()=>{let e=await Ze();e.length>0&&await K({protectedPaths:e})},Tn=()=>{if(!m||!nt)return;let e=nt.value.trim(),t=nt.from;lt(null),e&&e!==t&&K({directoryIndexBlacklist:m.directoryIndexBlacklist.map(n=>n===t?e:n)})},En=()=>{let e=yt.trim();m&&e&&!m.directoryIndexBlacklist.includes(e)&&(bt(``),K({directoryIndexBlacklist:[...m.directoryIndexBlacklist,e]}))},Dn=async()=>{if(!m)return;let t=await ka();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;m.directoryIndexBlacklist.includes(r)||await K({directoryIndexBlacklist:[...m.directoryIndexBlacklist,r]})},On=e=>{m&&K({directoryIndexBlacklist:m.directoryIndexBlacklist.filter(t=>t!==e)})},kn=()=>{K({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},An=()=>{if(!m||xt===null)return;let e=xt.trim()||`yyyy/MM/dd HH:mm`;St(null),e!==m.timeFormatPattern&&K({timeFormatPattern:e})},jn=(e,t)=>{wt(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return $n(Sh,i),i})},Mn=oe(m?.accentColor,se),Nn=oe(m?.secondaryColor,h),Pn=(e,t)=>{m&&(jn(`accent`,Mn),jn(`secondary`,Nn),K({accentColor:e,secondaryColor:t}))},Fn=(e,t)=>{m&&(jn(e,e===`accent`?Mn:Nn),K(e===`accent`?{accentColor:t}:{secondaryColor:t}))},In=async()=>{Mt(!0),Pt(null);try{At(await de())}catch{Pt(s(`could_not_check_for_updates`))}finally{Mt(!1)}},Ln=async()=>{Lt.current=!1,Pt(null),It({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await fe();e.ok||Rn(e.error??``)}catch(e){Rn(e instanceof Error?e.message:String(e))}},Rn=e=>It(t=>t&&{...t,phase:`error`,error:e}),zn=()=>{It(null),pe().catch(e=>Pt(e instanceof Error?e.message:String(e)))},Bn=async()=>{It(e=>e&&{...e,phase:`installing`});try{let e=await me();e.ok||Rn(e.error??s(`the_update_failed`))}catch(e){Rn(e instanceof Error?e.message:String(e))}};(0,R.useEffect)(()=>he(e=>It(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,R.useEffect)(()=>L(e=>It(t=>t&&{...t,changelog:e.text})),[]),(0,R.useEffect)(()=>{Ft?.phase!==`ready`||Lt.current||(Lt.current=!0,Bn())},[Ft?.phase]);let Vn=async()=>{if(!m||!Dt)return;let e=Dt.name.trim()||`${Dt.accent.toUpperCase()} / ${Dt.secondary.toUpperCase()}`,t=[...m.themePresets,{name:e,accent:Dt.accent,secondary:Dt.secondary}];Ot(null),await K({themePresets:t})},Hn=async e=>{m&&await K({themePresets:m.themePresets.filter((t,n)=>n!==e)})},Un=e=>{let t=Rt;zt(null),t&&t.role===e&&(e===`accent`?Mn:Nn).toLowerCase()!==t.color.toLowerCase()&&jn(e,t.color)},Wn=async()=>{let e=Ge.trim();if(e&&!Ve){He(!0),We(null);try{ze(await Gm(e,Je)),qe(``)}catch{We(s(`could_not_add_the_tag`))}finally{He(!1)}}},Gn=async(e,t)=>{ze(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Km(e,t)||We(s(`could_not_change_the_tag_s_color`))},Kn=async e=>{if(Ve)return;He(!0),We(null);let t=await Wm(e);ze(await Um()),t||We(`"${e}" is still used by a folder whose index could not be updated.`),He(!1)},qn=async()=>{let e=V;if(!e||Ve)return;let t=e.value.trim();t.length===0||t===e.name?Be(null):(He(!0),We(null),await qm(e.name,t)?(ze(await Um()),Be(null)):We(`Could not rename "${e.name}".`),He(!1))},Jn=async e=>{let t=new Set(un.columns??Se.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=pl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await K({defaultView:{...un,columns:n}})},Yn=async()=>{if(ie)return;let e=!W;P(!0),ge(null);try{let t=await ht(e),r=t.registered&&t.pathMatches;re(t),_(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&ge(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ge(`The request to Windows failed. Try again.`)}finally{P(!1)}},Xn=async()=>{if(we||!xe?.supported)return;let e=!xe.registered;Te(!0),De(null);try{let t=await it(e);Ce(t);let r=t.registered;_(e=>e&&{...e,windowsShellMenu:r}),n(),t.error?De(t.error):r!==e&&De(s(e?`windows_did_not_accept_the_context_menu_package_try_again`:`the_context_menu_registration_is_still_there_try_turning_it_off_again`))}catch{De(s(`the_request_to_windows_failed_try_again`))}finally{Te(!1)}},Zn=async()=>{if(je||!m)return;let e=!U;Me(!0),Pe(null);try{let t=await tt(e);be(t);let r=pn?t.registered&&t.pathMatches:e;_(e=>e&&{...e,defaultFileManager:r}),n(),pn&&r!==e&&Pe(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{Pe(`The request to Windows failed. Try again.`)}finally{Me(!1)}},Qn=async()=>{if(!Oe){ke(!0),z(null);try{let e=await ot();ve(e);let t=e.registered&&e.pathMatches;_(e=>e&&{...e,archiveHandler:t}),n(),t||z(`Windows did not accept the archive registration. Try again.`)}catch{z(`The request to Windows failed. Try again.`)}finally{ke(!1)}}},er=async()=>{if(!Oe){ke(!0),z(null);try{let e=await st();ve(e),_(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&z(`The registration is still there. Try turning it off again.`)}catch{z(`The request to Windows failed. Try again.`)}finally{ke(!1)}}},tr=async(e,t)=>{if(!m)return;let n={...m.extensionIcons};t===null?delete n[e]:n[e]=t,await K({extensionIcons:n})},nr={...Kt,...m?.shortcuts};(0,R.useEffect)(()=>{if(!B)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){Fe(null);return}let t=Xt(e);t&&(Fe(null),K({shortcuts:{...nr,[B]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[B,m]),(0,R.useEffect)(()=>{if(!Ie)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){Le(!1);return}let t=Xt(e);t&&(Le(!1),K({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[Ie,m]);let rr=async e=>{await K({recentLimit:Math.min(Math.max(e,0),50)})},ir=(e,t)=>{let n=t??Tt[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Et(t=>({...t,[e]:void 0})),K(i)},ar=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Gt(null),await K({sharePortMode:`custom`,sharePort:n}),await Bc(n,`custom`)},or=async e=>{let t=e===`custom`,n=t?m?.sharePort??8080:null;await K({sharePortMode:t?`custom`:`random`,sharePort:n}),await Bc(n,t?`custom`:`random`)};(0,R.useEffect)(()=>{Zc().then(Qt,()=>void 0)},[]);let sr=async()=>{qt.length!==0&&(Qt(await Qc(qt)),Jt(``))},cr=async()=>{Qt(await Qc(null))},lr=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;an(!0),nn(null);try{let e=await vt(t);en(e),nn(e.error),e.error||await K({startupMode:t})}finally{an(!1)}},ur=async e=>{await K({galleryRoots:e.length>0?e:null})},dr=async()=>{let e=await ka(),t=m?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await ur([...t,e])},fr=async()=>{let e=T.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await tr(e,ee),E(``))},pr=async()=>{j(!0);try{let e=await ka();if(!e)return;let t=await Aa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await ut(e.replace(/[\\/][^\\/]+$/,``),x(e),`file:${t}`)&&(dn(),b({folder:e,icon:t}))}finally{j(!1)}},mr=async(e,t)=>{let n={...m?.fonts};t?n[e]=t:delete n[e],await K({fonts:n})};return(0,q.jsxs)(Lh,{children:[(0,q.jsxs)(Rh,{ref:cn,children:[(0,q.jsxs)(zh,{ref:G(`application`),children:[(0,q.jsx)(Ih,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`version`)}),(0,q.jsx)(Fg,{children:e?`v${e.version}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`platform`)}),(0,q.jsx)(Fg,{children:e?.platform??`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`language`)}),(0,q.jsx)($,{children:s(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Nh,{disabled:!m,onChange:e=>void K({language:e}),options:[yh,...c.length>0?c:[hh]],value:m?.language??hh})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`picker_window_size`)}),(0,q.jsx)($,{children:s(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Gg,{inputMode:`numeric`,onBlur:e=>ir(`width`,e.currentTarget.value),onChange:e=>Et(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Tt.width??String(m?.pickerWindowWidth??1200)}),(0,q.jsx)(Fg,{children:`×`}),(0,q.jsx)(Gg,{inputMode:`numeric`,onBlur:e=>ir(`height`,e.currentTarget.value),onChange:e=>Et(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Tt.height??String(m?.pickerWindowHeight??800)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`web_server_port`)}),(0,q.jsx)($,{children:s(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(To,{disabled:!m,onChange:e=>void or(e),options:[{value:`random`,label:s(`random`)},{value:`custom`,label:s(`custom_port`)}],value:m?.sharePortMode??`random`,width:160})})]}),m?.sharePortMode===`custom`&&(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`custom_port`)}),(0,q.jsx)($,{children:s(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Gg,{inputMode:`numeric`,onBlur:e=>void ar(e.currentTarget.value),onChange:e=>Gt(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Wt??(m?.sharePort?String(m.sharePort):``)})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`link_paths`)}),(0,q.jsx)($,{children:s(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(To,{disabled:!m,onChange:e=>void K({linkPathMode:e}),options:[{value:`relative`,label:s(`relative`)},{value:`absolute`,label:s(`absolute`)}],value:m?.linkPathMode??`relative`,width:160})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`global_hotkey`)}),(0,q.jsx)($,{children:s(`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(C_,{$listening:Ie,disabled:!m,onClick:()=>Le(!0),type:`button`,children:Ie?s(`press_a_key`):m?.globalHotkey?Zt(m.globalHotkey):s(`none`)}),m?.globalHotkey&&(0,q.jsx)(Rg,{onClick:()=>void K({globalHotkey:null}),type:`button`,children:s(`clear`)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`open_yafm_links`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),N.registered&&!N.pathMatches&&(0,q.jsx)(Pg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:N.registeredPath??`?`})}),F&&(0,q.jsx)(Pg,{children:F})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Hg,{$on:W,children:s(W?`active`:`off`)}),(0,q.jsx)(Ug,{$on:W,disabled:ie,onClick:()=>void Yn(),title:s(W?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,q.jsx)(Wg,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_as_the_default_file_manager`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),ye?.registered&&!ye.pathMatches&&(0,q.jsx)(Pg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:ye.registeredPath??`?`})}),Ne&&(0,q.jsx)(Pg,{children:Ne})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Hg,{$on:U,children:s(U?`active`:`off`)}),(0,q.jsx)(Ug,{$on:U,disabled:!m||je,onClick:()=>void Zn(),title:s(U?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,q.jsx)(Wg,{})})]})]}),pn&&(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`windows_11_context_menu`)}),(0,q.jsx)($,{children:s(`adds_open_with_yet_another_file_manager_to_the_new_right_click_menu_in_file_explorer`)}),xe&&!xe.supported&&(0,q.jsx)($,{children:s(`this_windows_version_cannot_show_app_commands_in_the_new_menu`)}),xe?.registered&&(0,q.jsx)($,{children:s(`restart_file_explorer_if_the_command_does_not_appear`)}),Ee&&(0,q.jsx)(Pg,{children:Ee})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Hg,{$on:xe?.registered??!1,children:xe?.registered?s(`active`):s(`off`)}),(0,q.jsx)(Ug,{$on:xe?.registered??!1,disabled:!m||we||!xe?.supported,onClick:()=>void Xn(),title:xe?.registered?s(`remove_the_file_explorer_command`):s(`add_the_file_explorer_command`),type:`button`,children:(0,q.jsx)(Wg,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`open_archives_with_this_app`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,q.jsx)($,{children:s(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),_e?.registered&&!_e.pathMatches&&(0,q.jsx)(Pg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:_e.registeredPath??`?`})}),Ae&&(0,q.jsx)(Pg,{children:Ae})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Hg,{$on:mn,children:s(mn?`active`:`off`)}),(0,q.jsx)(w_,{disabled:!m||Oe||mn,onClick:()=>void Qn(),type:`button`,children:s(`register`)}),e?.platform===`windows`&&(0,q.jsx)(w_,{onClick:()=>void I(`ms-settings:defaultapps`),type:`button`,children:s(`default_apps`)}),(0,q.jsx)(Vg,{disabled:!m||Oe||!hn,onClick:()=>void er(),type:`button`,children:s(`unregister`)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reopen_the_tabs_that_were_open`)}),(0,q.jsx)($,{children:s(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,q.jsx)(Ug,{$on:m?.restoreTabs??!0,disabled:!m,onClick:()=>void K({restoreTabs:!m?.restoreTabs}),type:`button`,children:(0,q.jsx)(Wg,{})})]})]})]}),(0,q.jsxs)(zh,{ref:G(`share-access`),children:[(0,q.jsx)(Ih,{note:`share_access_note`,title:`share_access`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Q,{children:s(`share_access_require_approval`)}),(0,q.jsx)(Jm,{})]}),(0,q.jsx)($,{children:s(`share_access_note`)})]}),(0,q.jsx)(Ug,{$on:m?.shareAccessEnabled??!0,disabled:!m,onClick:()=>void K({shareAccessEnabled:!(m?.shareAccessEnabled??!0)}),type:`button`,children:(0,q.jsx)(Wg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(X,{children:(0,q.jsx)(Q,{children:s(`share_access_approval_minutes`)})}),(0,q.jsx)(Z,{children:(0,q.jsx)(jg,{max:1440,min:1,onChange:e=>void K({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:m?.shareApprovalMinutes??60})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(X,{children:(0,q.jsx)(Q,{children:s(`share_access_denial_seconds`)})}),(0,q.jsx)(Z,{children:(0,q.jsx)(jg,{max:3600,min:1,onChange:e=>void K({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:m?.shareDenialSeconds??10})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Ng,{children:(0,q.jsx)(Q,{children:s(`password`)})}),(0,q.jsx)($,{children:s(`share_access_password_note`)}),Yt&&(0,q.jsx)($,{children:s(`share_access_password_is_set`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Mg,{autoComplete:`new-password`,onChange:e=>Jt(e.target.value),placeholder:s(`password`),type:`password`,value:qt}),(0,q.jsx)(w_,{disabled:qt.length===0,onClick:()=>void sr(),type:`button`,children:s(`save`)}),Yt&&(0,q.jsx)(Vg,{onClick:()=>void cr(),type:`button`,children:s(`clear`)})]})]}),(0,q.jsx)(Y,{children:(0,q.jsxs)(X,{children:[(0,q.jsx)(Ng,{children:(0,q.jsx)(Q,{children:s(`devices`)})}),(0,q.jsx)($,{children:s(`share_access_devices_note`)})]})}),(0,q.jsx)(Th,{approvalMinutes:m?.shareApprovalMinutes??60,denialSeconds:m?.shareDenialSeconds??10})]})]}),(0,q.jsxs)(zh,{ref:G(`startup`),children:[(0,q.jsx)(Ih,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`start_with_the_computer`)}),(0,q.jsx)($,{children:s(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),tn&&(0,q.jsx)(Pg,{children:tn}),$t&&!$t.supported&&(0,q.jsx)(Pg,{children:s(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(To,{disabled:!m||rn||$t!==null&&!$t.supported,onChange:e=>void lr(e),options:[{value:`none`,label:s(`none`)},{value:`shortcut`,label:s(`shortcut`)},{value:`task`,label:s(`scheduled_task`)}],value:$t?.mode??m?.startupMode??`none`,width:170})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`start_hidden_in_the_tray`)}),(0,q.jsx)($,{children:s(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Ug,{$on:m?.startHidden??!1,disabled:!m,onClick:()=>void K({startHidden:!m?.startHidden}),type:`button`,children:(0,q.jsx)(Wg,{})})})]})]})]}),(0,q.jsxs)(zh,{ref:G(`fonts`),children:[(0,q.jsx)(Ih,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`}),(0,q.jsxs)(Vh,{children:[Xm.map(e=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(e.label)}),(0,q.jsx)($,{children:s(`falls_back_to_font_until_another_family_is_chosen`,{font:s(e.fallback)})})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(eh,{defaultLabel:s(e.fallback),disabled:!m,fonts:Ht,onChange:t=>void mr(e.id,t),sample:e.sample,value:m?.fonts?.[e.id]??null})})]},e.id)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset`)}),(0,q.jsx)($,{children:s(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(w_,{onClick:()=>void K({fonts:{}}),type:`button`,children:s(`reset`)})})]})]})]}),(0,q.jsxs)(zh,{ref:G(`time`),children:[(0,q.jsx)(Ih,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`}),(0,q.jsx)(Vh,{children:(0,q.jsxs)(Hh,{children:[(0,q.jsxs)(Uh,{children:[(0,q.jsx)(Q,{children:s(`format`)}),(0,q.jsx)($,{children:s(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,q.jsx)(__,{children:_h.map(e=>(0,q.jsx)(v_,{$active:(m?.timeFormat??`24`)===e.id,onClick:()=>void K({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(m?.timeFormat??`24`)===`custom`&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(y_,{"aria-label":s(`pattern`),onBlur:An,onChange:e=>St(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),An()):e.key===`Escape`&&St(null)},spellCheck:!1,value:xt??m?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,q.jsx)($,{children:s(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,q.jsxs)(b_,{children:[(0,q.jsx)(`span`,{children:s(`preview`)}),(0,q.jsx)(`code`,{children:w(vh,m?.timeFormat,xt??m?.timeFormatPattern)})]})]})})]}),(0,q.jsxs)(zh,{ref:G(`updates`),children:[(0,q.jsx)(Ih,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`current_version`)}),(0,q.jsx)(Fg,{children:e?`v${e.version}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`latest_version`)}),(0,q.jsx)(Fg,{children:kt?`v${kt.latest}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:kt?kt.available?s(`version_version_is_available`,{version:kt.latest}):s(`you_are_on_the_latest_version`):s(`not_checked_yet`)}),(0,q.jsx)($,{children:kt?.available?s(`the_installer_downloads_installs_itself_and_closes_the_app`):s(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,q.jsx)(Z,{children:kt?.available?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(w_,{onClick:()=>void le(),type:`button`,children:s(`open_release_page`)}),pn&&(0,q.jsx)(w_,{disabled:Ft!==null,onClick:()=>void Ln(),type:`button`,children:s(`download_and_install`)})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(w_,{disabled:jt,onClick:()=>void In(),type:`button`,children:s(jt?`checking`:`check_for_updates`)}),(0,q.jsx)(w_,{onClick:()=>void ce(),type:`button`,children:s(`open_log_folder`)})]})})]}),Nt&&(0,q.jsx)(Y,{children:(0,q.jsx)(Pg,{children:Nt})})]})]}),(0,q.jsxs)(zh,{ref:G(`colors`),children:[(0,q.jsx)(Ih,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Hh,{children:[(0,q.jsxs)(Uh,{children:[(0,q.jsx)(Q,{children:s(`theme`)}),(0,q.jsx)($,{children:s(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,q.jsx)(__,{children:gh.map(e=>(0,q.jsx)(v_,{$active:(m?.themeMode??`system`)===e.id,onClick:()=>void K({themeMode:e.id}),type:`button`,children:s(e.label)},e.id))})]}),(0,q.jsxs)(Hh,{children:[(0,q.jsxs)(Uh,{children:[(0,q.jsx)(Q,{children:s(`presets`)}),(0,q.jsx)($,{children:s(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,q.jsxs)(Wh,{children:[Wu.map(e=>(0,q.jsxs)(Gh,{$on:Mn.toLowerCase()===e.accent&&Nn.toLowerCase()===e.secondary,onClick:()=>Pn(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,q.jsxs)(Qh,{children:[(0,q.jsx)(`i`,{style:{background:e.accent}}),(0,q.jsx)(`i`,{style:{background:e.secondary}})]}),(0,q.jsx)(Kh,{children:s(e.name)})]},e.name)),fn.map((e,t)=>(0,q.jsxs)(qh,{children:[(0,q.jsxs)(Gh,{$on:Mn.toLowerCase()===e.accent.toLowerCase()&&Nn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>Pn(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,q.jsxs)(Qh,{children:[(0,q.jsx)(`i`,{style:{background:e.accent}}),(0,q.jsx)(`i`,{style:{background:e.secondary}})]}),(0,q.jsx)(Kh,{children:e.name})]}),(0,q.jsx)(Jh,{onClick:()=>void Hn(t),title:s(`remove_preset`),type:`button`,children:(0,q.jsx)(Ni,{size:9})})]},`${e.name}-${t}`)),Dt?(0,q.jsxs)(Xh,{children:[(0,q.jsxs)(Qh,{children:[(0,q.jsx)(`i`,{style:{background:Dt.accent}}),(0,q.jsx)(`i`,{style:{background:Dt.secondary}})]}),(0,q.jsx)(Zh,{autoFocus:!0,maxLength:24,onChange:e=>Ot({...Dt,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Vn()):e.key===`Escape`&&(e.preventDefault(),Ot(null))},placeholder:s(`preset_name`),spellCheck:!1,value:Dt.name}),(0,q.jsx)(Rg,{onClick:()=>void Vn(),type:`button`,children:s(`save`)}),(0,q.jsx)(Rg,{onClick:()=>Ot(null),type:`button`,children:s(`cancel`)})]}):(0,q.jsxs)(Yh,{disabled:!m,onClick:()=>Ot({name:``,accent:Mn,secondary:Nn}),title:s(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,q.jsx)(xi,{size:12}),s(`add_preset`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`accent_color`)}),(0,q.jsx)($,{children:s(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Fh,{colors:Ct.accent,current:Mn,onApply:e=>Fn(`accent`,e)}),(0,q.jsx)(zg,{"aria-label":s(`accent_color`),disabled:!m,onBlur:()=>Un(`accent`),onChange:e=>void K({accentColor:e.target.value}),onFocus:()=>zt({role:`accent`,color:Mn}),type:`color`,value:Mn}),(0,q.jsx)(Bg,{children:Mn.toUpperCase()})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`secondary_color`)}),(0,q.jsx)($,{children:s(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Fh,{colors:Ct.secondary,current:Nn,onApply:e=>Fn(`secondary`,e)}),(0,q.jsx)(zg,{"aria-label":s(`secondary_color`),disabled:!m,onBlur:()=>Un(`secondary`),onChange:e=>void K({secondaryColor:e.target.value}),onFocus:()=>zt({role:`secondary`,color:Nn}),type:`color`,value:Nn}),(0,q.jsx)(Bg,{children:Nn.toUpperCase()})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset_colors`)}),(0,q.jsx)($,{children:s(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Rg,{disabled:!m,onClick:()=>{jn(`accent`,Mn),jn(`secondary`,Nn),K({accentColor:null,secondaryColor:null})},type:`button`,children:s(`reset`)})})]})]})]}),(0,q.jsxs)(zh,{ref:G(`background`),children:[(0,q.jsx)(Ih,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Hh,{children:[(0,q.jsxs)(Uh,{children:[(0,q.jsx)(Q,{children:s(`wallpaper`)}),(0,q.jsx)($,{children:s(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,q.jsx)(r_,{children:(0,q.jsx)(i_,{$active:!m?.backgroundSource,onClick:()=>void K({backgroundSource:null}),title:s(`none`),type:`button`,children:(0,q.jsx)(l_,{children:s(`none`)})})}),(0,q.jsxs)(e_,{children:[qu.map(e=>(0,q.jsxs)(t_,{children:[(0,q.jsx)(n_,{children:s(e.name)}),(0,q.jsx)(r_,{children:e.variants.map(t=>(0,q.jsx)(i_,{$active:m?.backgroundSource===t.id,onClick:()=>void K({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,q.jsx)(`img`,{alt:``,src:v===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,q.jsxs)(t_,{children:[(0,q.jsx)(n_,{children:s(`motion`)}),(0,q.jsx)(r_,{children:Ku.map(e=>(0,q.jsxs)(i_,{$active:m?.backgroundSource===e.id,onClick:()=>void K({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,q.jsx)(`img`,{alt:``,src:e.poster}),(0,q.jsx)(s_,{children:(0,q.jsx)(Bi,{size:11})})]},e.id))})]}),(0,q.jsxs)(t_,{children:[(0,q.jsx)(n_,{children:s(`custom`)}),(0,q.jsxs)(r_,{children:[(m?.backgroundCustom??[]).map(e=>(0,q.jsx)(Mh,{active:m?.backgroundSource===`file:${e}`||m?.backgroundSource===`url:${e}`||m?.backgroundSource===e,onRemove:()=>yn(e),onSelect:()=>void K({backgroundSource:A(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,q.jsxs)(c_,{onClick:()=>void _n([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,q.jsx)(xi,{size:12}),s(`image_2`)]}),(0,q.jsxs)(c_,{onClick:()=>void _n([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,q.jsx)(xi,{size:12}),s(`video`)]})]})]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`image_or_video_url`)}),(0,q.jsx)($,{children:s(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Gg,{onChange:e=>sn(e.target.value),onKeyDown:e=>{e.key===`Enter`&&vn()},placeholder:`https://…`,value:on}),(0,q.jsx)(Rg,{disabled:!A(on),onClick:()=>void vn(),type:`button`,children:s(`add`)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`blur`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{max:40,min:0,onChange:e=>void K({backgroundBlur:Number(e.target.value)}),type:`range`,value:m?.backgroundBlur??0}),(0,q.jsxs)(Fg,{children:[m?.backgroundBlur??0,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`saturation`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{max:200,min:0,onChange:e=>void K({backgroundSaturation:Number(e.target.value)}),type:`range`,value:m?.backgroundSaturation??100}),(0,q.jsxs)(Fg,{children:[m?.backgroundSaturation??100,`%`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`brightness`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{max:150,min:40,onChange:e=>void K({backgroundBrightness:Number(e.target.value)}),type:`range`,value:m?.backgroundBrightness??100}),(0,q.jsxs)(Fg,{children:[m?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,q.jsxs)(zh,{ref:G(`safety`),children:[(0,q.jsx)(Ih,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Hh,{children:[(0,q.jsxs)(Uh,{children:[(0,q.jsx)(Q,{children:s(`protected_folders`)}),(0,q.jsx)($,{children:s(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,q.jsx)(u_,{children:(m?.protectedPaths??[]).map(e=>(0,q.jsxs)(d_,{children:[(0,q.jsx)(f_,{"aria-label":s(`protected_path`),onBlur:Sn,onChange:t=>$e({from:e,value:t.target.value}),onFocus:()=>$e({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Sn()):e.key===`Escape`&&$e(null)},spellCheck:!1,value:Qe?.from===e?Qe.value:e}),(0,q.jsx)(p_,{onClick:()=>Cn(e),title:s(`remove`),type:`button`,children:(0,q.jsx)(Ni,{size:10})})]},e))}),(0,q.jsxs)(h_,{children:[(0,q.jsx)(g_,{"aria-label":s(`new_protected_rule`),onChange:e=>gt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),xn())},placeholder:`*.log`,spellCheck:!1,value:dt}),(0,q.jsx)(Rg,{onClick:xn,type:`button`,children:s(`add_the_rule`)})]}),(0,q.jsxs)(m_,{children:[(0,q.jsx)(Rg,{onClick:()=>void wn(),type:`button`,children:s(`restore_defaults`)}),(0,q.jsx)(Rg,{onClick:()=>void bn(),type:`button`,children:s(`add_folder_2`)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`confirmation_delay`)}),(0,q.jsx)($,{children:s(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{max:30,min:2,onChange:e=>void K({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:m?.deleteDelaySeconds??5}),(0,q.jsxs)(Fg,{children:[m?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,q.jsxs)(zh,{ref:G(`tags`),children:[(0,q.jsx)(Ih,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Ig,{"aria-label":s(`color_of_the_new_tag`),onChange:e=>Ye(e.target.value),type:`color`,value:Je}),(0,q.jsx)(Gg,{onChange:e=>qe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Wn())},placeholder:s(`new_tag`),spellCheck:!1,value:Ge})]}),(0,q.jsx)($,{children:s(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Rg,{disabled:Ve||Ge.trim().length===0,onClick:()=>void Wn(),type:`button`,children:s(`add`)})})]}),Ue&&(0,q.jsx)(Y,{children:(0,q.jsx)(Pg,{children:Ue})}),Re.length===0&&(0,q.jsx)(Y,{children:(0,q.jsx)($,{children:s(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),Re.map(e=>(0,q.jsx)(Y,{children:V?.name===e.name?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Ig,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void Gn(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,q.jsx)(Lg,{autoFocus:!0,disabled:Ve,onChange:t=>Be({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),qn()):e.key===`Escape`&&(e.preventDefault(),Be(null))},value:V.value})]}),(0,q.jsx)($,{children:s(`press_enter_to_save_escape_to_cancel`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Rg,{disabled:Ve,onClick:()=>void qn(),type:`button`,children:s(`save`)}),(0,q.jsx)(Rg,{disabled:Ve,onClick:()=>Be(null),type:`button`,children:s(`cancel`)})]})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Ig,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void Gn(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,q.jsx)(Q,{children:e.name})]}),(0,q.jsx)($,{children:ae(s,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Rg,{disabled:Ve,onClick:()=>Be({name:e.name,value:e.name}),type:`button`,children:s(`edit`)}),(0,q.jsxs)(Vg,{disabled:Ve,onClick:()=>void Kn(e.name),type:`button`,children:[(0,q.jsx)(ji,{size:13}),s(`remove`)]})]})]})},e.name))]})]}),(0,q.jsxs)(zh,{ref:G(`files-view`),children:[(0,q.jsx)(Ih,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`default_view`)}),(0,q.jsx)($,{children:s(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(Zg,{children:[(0,q.jsx)(Qg,{$on:un.mode===`list`,onClick:()=>void K({defaultView:{...un,mode:`list`}}),type:`button`,children:s(`list`)}),(0,q.jsx)(Qg,{$on:un.mode===`grid`,onClick:()=>void K({defaultView:{...un,mode:`grid`}}),type:`button`,children:s(`grid`)})]})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`list_icon_size`)}),(0,q.jsx)($,{children:s(`the_icon_in_the_list_rows`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{max:48,min:16,onChange:e=>void K({defaultView:{...un,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:un.iconSize}),(0,q.jsxs)(Fg,{children:[un.iconSize,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`grid_size`)}),(0,q.jsx)($,{children:s(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{max:260,min:100,onChange:e=>void K({defaultView:{...un,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:un.gridSize}),(0,q.jsxs)(Fg,{children:[un.gridSize,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Q,{children:s(`selection_checkboxes`)}),(0,q.jsx)(Jm,{})]}),(0,q.jsx)($,{children:s(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,q.jsx)(Ug,{$on:m?.showCheckboxes??!0,disabled:!m,onClick:()=>void K({showCheckboxes:!(m?.showCheckboxes??!0)}),type:`button`,children:(0,q.jsx)(Wg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Q,{children:s(`open_with_a_single_click`)}),(0,q.jsx)(Jm,{})]}),(0,q.jsx)($,{children:s(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,q.jsx)(Ug,{$on:m?.openOnSingleClick??!1,disabled:!m,onClick:()=>void K({openOnSingleClick:!(m?.openOnSingleClick??!1)}),type:`button`,children:(0,q.jsx)(Wg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Q,{children:s(`open_the_file_tray_while_dragging`)}),(0,q.jsx)(Jm,{})]}),(0,q.jsx)($,{children:s(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,q.jsx)(Ug,{$on:m?.trayAutoShow??!0,disabled:!m,onClick:()=>void K({trayAutoShow:!(m?.trayAutoShow??!0)}),type:`button`,children:(0,q.jsx)(Wg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Q,{children:s(`confirm_before_deleting`)}),(0,q.jsx)(Jm,{})]}),(0,q.jsx)($,{children:s(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,q.jsx)(Ug,{$on:m?.confirmDelete??!1,disabled:!m,onClick:()=>void K({confirmDelete:!(m?.confirmDelete??!1)}),type:`button`,children:(0,q.jsx)(Wg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Q,{children:s(`automatic_rename_suffix`)}),(0,q.jsx)(Jm,{})]}),(0,q.jsx)($,{children:s(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(To,{disabled:!m,onChange:e=>void K({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:m?.conflictNameStyle??`space_parentheses`,width:160})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Q,{children:s(`play_audio_in_video_previews`)}),(0,q.jsx)(Jm,{})]}),(0,q.jsx)($,{children:s(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,q.jsx)(Ug,{$on:m?.previewVideoAudio??!1,disabled:!m,onClick:()=>void K({previewVideoAudio:!(m?.previewVideoAudio??!1)}),type:`button`,children:(0,q.jsx)(Wg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Q,{children:s(`autoplay_video_previews`)}),(0,q.jsx)(Jm,{})]}),(0,q.jsx)($,{children:s(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,q.jsx)(Ug,{$on:m?.previewVideoAutoplay??!1,disabled:!m,onClick:()=>void K({previewVideoAutoplay:!(m?.previewVideoAutoplay??!1)}),type:`button`,children:(0,q.jsx)(Wg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Q,{children:s(`preview_panel_under_the_list`)}),(0,q.jsx)(Jm,{})]}),(0,q.jsx)($,{children:s(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,q.jsx)(Ug,{$on:un.showImages??!0,onClick:()=>void K({defaultView:{...un,showImages:!(un.showImages??!0)}}),type:`button`,children:(0,q.jsx)(Wg,{})})]}),(0,q.jsx)(Y,{children:(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(Q,{children:s(`columns`)}),(0,q.jsx)(Jm,{})]}),(0,q.jsx)($,{children:s(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,q.jsx)(Y,{children:(0,q.jsxs)(x_,{children:[pl.map(e=>(0,q.jsxs)(S_,{children:[(0,q.jsx)(`input`,{checked:(un.columns??[]).includes(e.id),onChange:()=>void Jn(e.id),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,q.jsxs)(S_,{children:[(0,q.jsx)(`input`,{checked:(un.columns??[]).includes(`linkTarget`),onChange:()=>void Jn(`linkTarget`),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`link_target_after_the_name`)})]})]})})]}),(0,q.jsxs)(O_,{children:[s(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,q.jsx)(Jm,{}),` `,s(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,q.jsxs)(zh,{ref:G(`shortcuts`),children:[(0,q.jsx)(Ih,{note:`the_keys_this_window_listens_for_click_a_combination_to_record_a_new_one`,title:`shortcuts`}),(0,q.jsxs)(Vh,{children:[mh.map(({id:e,label:t,note:n})=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(t)}),(0,q.jsx)($,{children:s(n)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(C_,{$listening:B===e,onClick:()=>Fe(e),type:`button`,children:B===e?s(`press_a_key`):Zt(nr[e])})})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset`)}),(0,q.jsx)($,{children:s(`back_to_the_default_combination_for_every_action`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(w_,{onClick:()=>void K({shortcuts:{...Kt}}),type:`button`,children:s(`reset`)})})]})]})]}),(0,q.jsxs)(zh,{ref:G(`memory`),children:[(0,q.jsx)(Ih,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(xg,{children:[(0,q.jsxs)(Sg,{children:[(0,q.jsx)(Q,{children:s(`process_memory`)}),(0,q.jsx)(Fg,{children:M?`${C(M.private)} · ${sg(M.private,M.available)}`:`—`})]}),(0,q.jsx)(Cg,{children:(0,q.jsx)(wg,{$ratio:M?M.private/Math.max(M.available,1):0,$tone:S(M?M.private/Math.max(M.available,1):0)})}),(0,q.jsx)($,{children:M?s(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:C(M.available),resident:C(M.workingSet)}):s(`reading_the_current_usage`)})]}),(0,q.jsxs)(xg,{children:[(0,q.jsxs)(Sg,{children:[(0,q.jsx)(Q,{children:s(`managed_heap`)}),(0,q.jsx)(Fg,{children:M?`${C(M.managed)} · ${sg(M.managed,M.private)}`:`—`})]}),(0,q.jsx)(Cg,{children:(0,q.jsx)(wg,{$ratio:M?M.managed/Math.max(M.private,1):0,$tone:`var(--accent-secondary)`})}),(0,q.jsx)($,{children:s(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,q.jsxs)(xg,{children:[(0,q.jsxs)(Sg,{children:[(0,q.jsx)(Q,{children:s(`native_and_runtime`)}),(0,q.jsx)(Fg,{children:M?`${C(Math.max(0,M.private-M.managed))} · ${sg(Math.max(0,M.private-M.managed),M.private)}`:`—`})]}),(0,q.jsx)(Cg,{children:(0,q.jsx)(wg,{$ratio:M?Math.max(0,M.private-M.managed)/Math.max(M.private,1):0,$tone:`var(--accent-primary)`})}),(0,q.jsx)($,{children:s(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`free_memory`)}),(0,q.jsx)($,{children:s(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(w_,{onClick:()=>void H().then(ne),type:`button`,children:s(`trim_now`)})})]})]})]}),(0,q.jsxs)(zh,{ref:G(`overview`),children:[(0,q.jsx)(Ih,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`}),(0,q.jsx)(Vh,{children:(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`recent_items`)}),(0,q.jsx)($,{children:s(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Gg,{max:50,min:0,onChange:e=>void rr(Number(e.target.value)),type:`number`,value:m?.recentLimit??10})})]})})]}),(0,q.jsxs)(zh,{ref:G(`gallery`),children:[(0,q.jsx)(Ih,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`}),(0,q.jsxs)(Vh,{children:[(m?.galleryRoots??[]).map(e=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:x(e)}),(0,q.jsx)($,{children:e})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(T_,{onClick:()=>void ur((m?.galleryRoots??[]).filter(t=>t!==e)),title:s(`stop_scanning_this_folder`),type:`button`,children:(0,q.jsx)(Ni,{size:12})})})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`scan_folders`)}),(0,q.jsx)($,{children:(m?.galleryRoots??[]).length===0?s(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):s(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(w_,{onClick:()=>void dr(),type:`button`,children:s(`choose_folder`)})})]})]})]}),(0,q.jsxs)(zh,{ref:G(`icons`),children:[(0,q.jsx)(Ih,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_system_file_icons`)}),(0,q.jsx)($,{children:s(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,q.jsx)(Ug,{$on:m?.systemIcons??!1,disabled:!m,onClick:()=>void K({systemIcons:!m?.systemIcons}),type:`button`,children:(0,q.jsx)(Wg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_custom_folder_icons`)}),(0,q.jsx)($,{children:s(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,q.jsx)(Ug,{$on:m?.customFolderIcons??!1,disabled:!m,onClick:()=>void K({customFolderIcons:!m?.customFolderIcons}),type:`button`,children:(0,q.jsx)(Wg,{})})]})]})]}),(0,q.jsxs)(zh,{ref:G(`extension-icons`),children:[(0,q.jsx)(Ih,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`}),(0,q.jsxs)(Vh,{children:[Object.entries(m?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:e}),(0,q.jsx)($,{children:kh(s,t)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Ah,{source:t}),(0,q.jsx)(T_,{onClick:()=>void tr(e,null),title:s(`remove_this_rule`),type:`button`,children:(0,q.jsx)(Ni,{size:12})})]})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`add_a_rule`)}),(0,q.jsx)($,{children:s(`extension_and_the_icon_to_draw_for_it`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Gg,{onChange:e=>E(e.target.value),placeholder:`.psd`,spellCheck:!1,value:T}),(0,q.jsxs)(Xg,{children:[(0,q.jsx)(T_,{onClick:()=>k(e=>!e),title:s(`choose_the_icon`),type:`button`,children:(0,q.jsx)(Ah,{source:ee})}),O&&(0,q.jsx)(sf,{allowDefault:!1,onClose:()=>k(!1),onPick:e=>{D(e??`file`),k(!1)},value:ee})]}),(0,q.jsx)(T_,{onClick:()=>void fr(),title:s(`add_the_rule`),type:`button`,children:(0,q.jsx)(xi,{size:13})})]})]})]})]}),(0,q.jsxs)(zh,{ref:G(`folder-icons`),children:[(0,q.jsx)(Ih,{note:`a_single_folder_can_carry_an_icon_of_its_own`,title:`folder_icons`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`give_a_folder_its_own_icon`)}),(0,q.jsx)($,{children:s(`stored_in_the_folder_s_parent_index_so_it_stays_with_the_files`,{index:`.yafm-index.db`})})]}),(0,q.jsxs)(Z,{children:[y&&(0,q.jsx)(jh,{src:y.icon}),(0,q.jsx)(w_,{disabled:te,onClick:()=>void pr(),type:`button`,children:s(te?`choosing`:`choose_folder_and_icon`)})]})]}),y&&(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:x(y.folder)}),(0,q.jsx)($,{children:y.folder})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(D_,{children:[(0,q.jsx)(Mi,{size:11}),` `,s(`saved`)]})})]})]})]}),(0,q.jsxs)(zh,{ref:G(`folder-index`),children:[(0,q.jsx)(Ih,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,q.jsx)($,{children:s(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,q.jsx)(Ug,{$on:m?.writeDirectoryIndex??!0,disabled:!m,onClick:()=>void K({writeDirectoryIndex:!m?.writeDirectoryIndex}),type:`button`,children:(0,q.jsx)(Wg,{})})]}),(0,q.jsxs)(Hh,{children:[(0,q.jsxs)(Uh,{children:[(0,q.jsx)(Q,{children:s(`directory_index_blacklist`)}),(0,q.jsx)($,{children:s(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,q.jsx)(u_,{children:(m?.directoryIndexBlacklist??[]).map(e=>(0,q.jsxs)(d_,{children:[(0,q.jsx)(f_,{"aria-label":s(`directory_index_blacklist_rule`),onBlur:Tn,onChange:t=>lt({from:e,value:t.target.value}),onFocus:()=>lt({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Tn()):e.key===`Escape`&&lt(null)},spellCheck:!1,value:nt?.from===e?nt.value:e}),(0,q.jsx)(p_,{onClick:()=>On(e),title:s(`remove`),type:`button`,children:(0,q.jsx)(Ni,{size:10})})]},e))}),(0,q.jsxs)(h_,{children:[(0,q.jsx)(g_,{"aria-label":s(`directory_index_blacklist_rule`),onChange:e=>bt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),En())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:yt}),(0,q.jsx)(Rg,{onClick:En,type:`button`,children:s(`add_the_rule`)})]}),(0,q.jsxs)(m_,{children:[(0,q.jsx)(Rg,{onClick:kn,type:`button`,children:s(`restore_defaults`)}),(0,q.jsx)(Rg,{onClick:()=>void Dn(),type:`button`,children:s(`add_folder_2`)})]})]})]}),!(m?.writeDirectoryIndex??!0)&&(0,q.jsx)(k_,{children:Oh(s,e?.platform)})]}),(0,q.jsxs)(zh,{ref:G(`indexing`),children:[(0,q.jsx)(Ih,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,q.jsx)(Dh,{})]}),(0,q.jsxs)(zh,{ref:G(`files`),children:[(0,q.jsx)(Ih,{note:`what_the_listings_include`,title:`files`}),(0,q.jsxs)(Vh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`hidden_items`)}),(0,q.jsx)(Fg,{children:Eh(s,u?.showHidden)})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`protected_operating_system_files`)}),(0,q.jsx)(Fg,{children:Eh(s,u?.showSystem)})]})]}),(0,q.jsx)(O_,{children:s(`listings_follow_the_file_manager_s_own_settings_hidden_and_protected_items_are_only_shown_when_the_operating_system_is_set_to_show_them`)})]})]}),(0,q.jsxs)(ng,{"aria-label":s(`settings_sections`),children:[(0,q.jsx)(rg,{children:s(`sections`)}),(0,q.jsx)(ig,{children:xh.map(({id:e,label:t})=>(0,q.jsx)(ag,{$active:Bt===e,onClick:()=>gn(e),type:`button`,children:(0,q.jsx)(`span`,{children:s(t)})},e))}),(0,q.jsx)(og,{children:s(`changes_are_saved_as_you_make_them`)})]}),Ft&&(0,Ka.createPortal)((0,q.jsx)(ug,{children:(0,q.jsxs)(dg,{"aria-modal":`true`,role:`dialog`,children:[(0,q.jsxs)(fg,{children:[(0,q.jsx)(`h2`,{children:s(`software_update`)}),(0,q.jsx)(`p`,{children:kt?.latest?s(`version_version`,{version:kt.latest}):s(`preparing_the_update`)})]}),(0,q.jsx)(pg,{children:s(`changelog`)}),Ft.changelog?(0,q.jsx)(mg,{onClick:gg,children:(0,q.jsx)(a,{source:Ft.changelog})}):(0,q.jsx)(hg,{children:Ft.phase===`changelog`?s(`loading_the_changelog`):s(`the_changelog_could_not_be_loaded`)}),(0,q.jsxs)(_g,{children:[(0,q.jsx)(`span`,{children:cg(Ft,s)}),(0,q.jsx)(`span`,{children:lg(Ft)})]}),(0,q.jsx)(vg,{children:(0,q.jsx)(yg,{$percent:Math.max(0,Math.min(100,Ft.percent))})}),Ft.error&&(0,q.jsx)(Pg,{children:Ft.error}),(0,q.jsxs)(bg,{children:[(Ft.phase===`changelog`||Ft.phase===`downloading`)&&(0,q.jsx)(w_,{onClick:()=>void zn(),type:`button`,children:s(`cancel`)}),Ft.phase===`ready`&&(0,q.jsx)(w_,{onClick:()=>void Bn(),type:`button`,children:s(`install_update`)}),Ft.phase===`installing`&&(0,q.jsx)(w_,{disabled:!0,type:`button`,children:s(`installing`)}),(Ft.phase===`ready`||Ft.phase===`error`||Ft.phase===`cancelled`||Ft.phase===`installing`)&&(0,q.jsx)(w_,{onClick:()=>It(null),type:`button`,children:s(`close`)})]})]})}),document.body)]})}function Th({approvalMinutes:e,denialSeconds:t}){let n=o(),[r,i]=(0,R.useState)([]),[a,s]=(0,R.useState)(!1);(0,R.useEffect)(()=>{let e=()=>void Jc().then(i,()=>i([]));if(e(),l.available)return l.on(t=>{t.type===`share.devices.changed`&&e()})},[]);let c=async(e,t,n)=>{s(!0);try{i(await Yc(e,t,n))}finally{s(!1)}},u=async e=>{s(!0);try{i(await Xc(e))}finally{s(!1)}},d=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.state===`denied`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`):n(`share_access_not_decided`),f=e=>e.expiresAt===0?n(`share_access_forever`):new Date(e.expiresAt).toLocaleString();return(0,q.jsxs)(Tg,{children:[r.length===0&&(0,q.jsx)(Eg,{children:n(`share_access_no_devices`)}),r.map(r=>(0,q.jsxs)(Dg,{children:[(0,q.jsxs)(Og,{children:[(0,q.jsx)(kg,{children:r.name||n(`share_access_not_decided`)}),(0,q.jsxs)(Ag,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,q.jsxs)(Ag,{children:[d(r),r.state!==``&&(0,q.jsxs)(q.Fragment,{children:[` · `,n(`share_access_expires`),`: `,f(r)]})]})]}),(0,q.jsx)(To,{disabled:a,onChange:e=>{let[t,n]=e.split(`:`);t===`remove`?u(r.id):t!==`none`&&c(r.id,t,n===`forever`)},options:[{value:`none:`,label:n(`share_access_not_decided`)},{value:`allowed:timed`,label:`${n(`share_access_allowed`)} (${e}m)`},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:`${n(`share_access_denied`)} (${t}s)`},{value:`denied:forever`,label:n(`share_access_block_forever`)},{value:`remove:`,label:n(`remove`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.state===`denied`?r.expiresAt===0?`denied:forever`:`denied:timed`:`none:`,width:190})]},r.id))]})}function Eh(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function Dh(){let e=o(),[t,n]=(0,R.useState)(null);return(0,R.useEffect)(()=>{let e=!0,t=()=>Je().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,q.jsx)(k_,{children:e(`no_indexing_tasks_are_running`)}):(0,q.jsxs)(Vh,{children:[(0,q.jsx)(Y,{children:(0,q.jsx)(Q,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,q.jsx)(Y,{children:(0,q.jsx)(Fg,{title:e,children:e})},e))]}):(0,q.jsx)(k_,{children:e(`index_task_information_is_unavailable`)})}function Oh(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function kh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function Ah({source:e}){let t=G(e.startsWith(`file:`)?e.slice(5):null);return(0,q.jsx)(E_,{children:t?(0,q.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,q.jsx)(rc,{name:e,size:16})})}function jh({src:e}){let t=G(e);return(0,q.jsx)(E_,{children:t&&(0,q.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Mh({path:e,active:t,onSelect:n,onRemove:r}){let i=o(),a=A(e),s=bn(a?null:e),c=a?e:s,l=dd(e.split(/[?#]/)[0]);return(0,q.jsxs)(a_,{children:[(0,q.jsxs)(i_,{$active:t,onClick:n,title:e,type:`button`,children:[c&&(l?(0,q.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${c}#t=0.5`}):(0,q.jsx)(`img`,{alt:``,src:c})),l&&(0,q.jsx)(s_,{children:(0,q.jsx)(Bi,{size:11})})]}),(0,q.jsx)(o_,{onClick:r,title:i(`remove`),type:`button`,children:(0,q.jsx)(Ni,{size:9})})]})}function Nh({value:e,options:t,onChange:n,disabled:r}){let i=o(),[a,s]=(0,R.useState)(null),c=(0,R.useRef)(null);return(0,R.useEffect)(()=>{if(!a)return;let e=()=>s(null),t=t=>{let n=t.target;n instanceof Node&&c.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Kg,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){s(null);return}let e=c.current?.getBoundingClientRect();e&&s({left:e.left,top:e.bottom+4,width:e.width})},ref:c,type:`button`,children:[(0,q.jsx)(`span`,{children:Ph(i,e)}),(0,q.jsx)(qg,{children:(0,q.jsx)(wi,{size:11})})]}),a&&(0,Ka.createPortal)((0,q.jsx)(Jg,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,q.jsxs)(Yg,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),s(null)},role:`option`,type:`button`,children:[(0,q.jsx)(`span`,{children:Ph(i,t)}),t===e&&(0,q.jsx)(Mi,{size:11})]},t))}),document.body)]})}function Ph(e,t){return t===yh?e(`system_default`):bh[t]??t}function Fh({colors:e,current:t,onApply:n}){let r=o();if(e.length===0)return null;let[i,...a]=e;return(0,q.jsxs)($h,{children:[(0,q.jsxs)(tg,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,q.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,q.jsx)(eg,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,q.jsx)(Mi,{size:9})},e))]})}function Ih({title:e,note:t,global:n=!1}){let r=o();return(0,q.jsxs)(Bh,{children:[(0,q.jsxs)(`h2`,{children:[r(e),n&&(0,q.jsx)(Jm,{})]}),(0,q.jsx)(`p`,{children:r(t)})]})}var Lh=v.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Rh=v.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,zh=v.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Bh=v.header`
    display: flex;
    flex-direction: column;
    gap: 2px;

    h2 {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 600;
        color: var(--text-primary);
    }

    h2::before {
        content: "";
        width: 3px;
        height: 13px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    p {
        padding-left: 11px;
        font-size: 10.5px;
        color: var(--text-muted);
    }
`,Vh=v.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Hh=v.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Uh=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Wh=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Gh=v.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 10px;
    border: 1px solid ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-md);
    background: ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    text-align: left;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease, transform 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`,Kh=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,qh=v.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Jh=v.button`
    display: grid;
    place-items: center;
    width: 24px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: rgba(248, 113, 113, 0.55);
        color: #fca5a5;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,Yh=v.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }

    &:disabled {
        opacity: 0.55;
        cursor: default;
    }
`,Xh=v.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Zh=v.input`
    flex: 1;
    min-width: 0;
    padding: 4px 7px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,Qh=v.span`
    display: inline-flex;
    flex-shrink: 0;

    i {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
    }

    i + i {
        margin-left: -4px;
    }
`,$h=v.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,eg=v.button`
    display: grid;
    place-items: center;
    width: 17px;
    height: 17px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 50%;
    background: ${({$color:e})=>e};
    color: #fff;
    cursor: pointer;
    transition: transform 120ms ease, box-shadow 120ms ease;

    &:hover {
        transform: scale(1.15);
        box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.3);
    }
`,tg=v.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 8px 3px 4px;
    border: 1px solid var(--border-color);
    border-radius: 999px;
    background: var(--bg-input);
    color: var(--text-muted);
    font: inherit;
    font-size: 9.5px;
    cursor: pointer;
    transition: border-color 130ms ease, color 130ms ease;

    i {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${({$color:e})=>e};
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.16);
    }

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,ng=v.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,rg=v.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ig=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2px;

    &::before {
        content: "";
        position: absolute;
        top: 12px;
        bottom: 12px;
        left: 5px;
        width: 1px;
        background: var(--border-color);
    }
`,ag=v.button`
    position: relative;
    display: flex;
    align-items: center;
    padding: 6px 6px 6px 17px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.10)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 10.5px;
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
    transition: color 120ms ease, background 120ms ease;

    &::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 50%;
        width: 7px;
        height: 7px;
        border: 1px solid var(--border-color-hover);
        border-radius: 50%;
        background: var(--bg-secondary);
        transform: translateY(-50%);
        transition: background 120ms ease, border-color 120ms ease, box-shadow 120ms ease;
    }

    ${({$active:e})=>e&&n`
        &::before {
            border-color: var(--accent-primary);
            background: var(--accent-primary);
            box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.16);
        }
    `}
    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,og=v.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function sg(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function cg(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function lg(e){return e.total>0?`${C(e.downloaded)} / ${C(e.total)}`:e.downloaded>0?C(e.downloaded):``}var ug=v.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,dg=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(560px, 100%);
    max-height: min(620px, 100%);
    padding: 18px 20px 16px;
    overflow: auto;
    border: 1px solid var(--border-color);
    border-radius: 14px;
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
`,fg=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    h2 {
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--text-primary);
    }

    p {
        margin: 0;
        font-family: var(--font-mono);
        font-size: 11px;
        color: var(--text-muted);
    }
`,pg=v.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,mg=v.div`
    max-height: 260px;
    overflow: auto;
    font-size: 12px;
    line-height: 1.55;
    color: var(--text-secondary);

    > :first-child {
        margin-top: 0;
    }

    h1,
    h2,
    h3 {
        margin: 10px 0 4px;
        font-family: var(--font-title), var(--font-cjk);
        font-size: 12px;
        color: var(--text-primary);
    }

    p {
        margin: 4px 0;
    }

    ul,
    ol {
        margin: 4px 0;
        padding-left: 18px;
    }

    li {
        margin: 2px 0;
    }

    a {
        color: var(--accent-primary);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    code {
        padding: 1px 4px;
        border-radius: 4px;
        background: rgba(var(--accent-rgb), 0.14);
        font-family: var(--font-mono);
        font-size: 11px;
    }

    pre {
        margin: 6px 0;
        padding: 8px 10px;
        border-radius: var(--radius-sm);
        background: var(--bg-input);
        overflow: auto;

        code {
            padding: 0;
            background: none;
        }
    }

    blockquote {
        margin: 6px 0;
        padding-left: 10px;
        border-left: 2px solid var(--border-color-hover);
        color: var(--text-muted);
    }

    hr {
        margin: 8px 0;
        border: 0;
        border-top: 1px solid var(--border-color);
    }
`,hg=v.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function gg(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),I(t.href))}var _g=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,vg=v.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,yg=v.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,bg=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,xg=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Sg=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Cg=v.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,wg=v.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Tg=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,Eg=v.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,Dg=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Og=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,kg=v.span`
    color: var(--text-primary);
    font-size: 12px;
`,Ag=v.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,jg=v.input`
    width: 92px;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,Mg=v.input`
    width: 190px;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,Y=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,X=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Z=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=v.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,Ng=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=v.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,Pg=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 2px 0;
    font-size: 11px;
    color: var(--danger);

    &::before {
        content: "";
        width: 5px;
        height: 5px;
        flex-shrink: 0;
        border-radius: 50%;
        background: currentColor;
    }
`,Fg=v.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Ig=v.input`
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background: transparent;
    cursor: pointer;

    &::-webkit-color-swatch-wrapper {
        padding: 1px;
    }

    &::-webkit-color-swatch {
        border: 0;
        border-radius: 3px;
    }
`,Lg=v.input`
    min-width: 0;
    flex: 1;
    padding: 3px 8px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    outline: none;
`,Rg=v.button`
    padding: 5px 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,zg=v.input`
    width: 42px;
    height: 30px;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    cursor: pointer;

    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    &::-webkit-color-swatch {
        border: 0;
        border-radius: 4px;
    }
`,Bg=v.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Vg=v.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border: 1px solid rgba(248, 113, 113, 0.35);
    border-radius: var(--radius-sm);
    background: transparent;
    color: #fca5a5;
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(248, 113, 113, 0.14);
        color: #fecaca;
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,Hg=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Ug=v.button`
    position: relative;
    width: 38px;
    height: 21px;
    flex-shrink: 0;
    border: 1px solid ${({$on:e})=>e?`transparent`:`var(--border-color)`};
    border-radius: 999px;
    background: ${({$on:e})=>e?`var(--accent-gradient)`:`rgba(148, 163, 184, 0.22)`};
    cursor: pointer;
    transition: background 140ms ease, border-color 140ms ease;

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 2px;
    }

    span {
        transform: translateX(${({$on:e})=>e?`17px`:`0`});
    }
`,Wg=v.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Gg=v.input`
    width: 92px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,Kg=v.button`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-width: 150px;
    padding: 6px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }

    &:disabled {
        opacity: 0.55;
        cursor: default;
    }
`,qg=v.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Jg=v.div`
    position: fixed;
    z-index: 2600;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
`,Yg=v.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 6px 9px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.12);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -1px;
    }
`,Xg=v.span`
    position: relative;
    display: inline-flex;
`,Zg=v.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Qg=v.button`
    padding: 5px 14px;
    border: 1px solid ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.55)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`transparent`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    font-weight: ${({$on:e})=>e?600:500};
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,$g=v.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,e_=v.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,t_=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,n_=v.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,r_=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,i_=v.button`
    position: relative;
    width: 102px;
    height: 58px;
    padding: 0;
    overflow: hidden;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: var(--bg-primary);
    box-shadow: ${({$active:e})=>e?`0 0 0 2px rgba(var(--accent-rgb), 0.28)`:`none`};
    cursor: pointer;

    img,
    video {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        border-color: var(--border-color-hover);
    }
`,a_=v.div`
    position: relative;
    width: 102px;
    height: 58px;
`,o_=v.button`
    position: absolute;
    top: 3px;
    right: 3px;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 17px;
    height: 17px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 50%;
    background: rgba(6, 8, 16, 0.78);
    color: #fff;
    cursor: pointer;

    &:hover {
        background: #e81123;
        border-color: #e81123;
    }
`,s_=v.span`
    position: absolute;
    right: 5px;
    bottom: 4px;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(6, 8, 16, 0.66);
    color: #fff;
`,c_=v.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 102px;
    height: 58px;
    padding: 0;
    border: 1px dashed var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 10.5px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-focus);
        color: var(--text-primary);
    }
`,l_=v.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,u_=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,d_=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,f_=v.input`
    flex: 1;
    min-width: 0;
    padding: 4px 6px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
    outline: 0;

    &:hover {
        border-color: var(--border-color);
    }

    &:focus {
        border-color: var(--border-color-focus);
        background: var(--bg-input);
    }
`,p_=v.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    padding: 0;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: rgba(248, 113, 113, 0.14);
        color: #fca5a5;
    }
`,m_=v.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,h_=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,g_=v.input`
    flex: 1;
    min-width: 0;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`,__=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,v_=v.button`
    padding: 6px 12px;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,y_=v.input`
    width: 100%;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,b_=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    color: var(--text-muted);
    font-size: 11px;

    code {
        padding: 2px 7px;
        border-radius: var(--radius-sm);
        background: rgba(var(--bg-rgb), 0.45);
        color: var(--text-primary);
        font-family: var(--font-mono);
        font-size: 11px;
    }
`,x_=v.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,S_=v.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,C_=v.button`
    min-width: 92px;
    padding: 4px 10px;
    border: 1px solid ${({$listening:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$listening:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font-family: var(--font-mono);
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,w_=v.button`
    padding: 6px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`,T_=v.button`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,E_=v.span`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
    }
`,D_=v.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,O_=v.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,k_=v.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,A_=150,j_=2500,M_=3,N_=600;function P_({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:s,onSearchMatches:c,onPick:l,onSelectionChange:u,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,onPreviewChange:g}){let _=o(),v=cl(`gallery`),[y,b]=(0,R.useState)([]),[x,S]=(0,R.useState)(0),[w,T]=(0,R.useState)(!0),[E,ee]=(0,R.useState)(null),[D,O]=(0,R.useState)(!1),[k,te]=(0,R.useState)([]),A=(0,R.useRef)([]),j=(0,R.useRef)(0),M=(0,R.useRef)(!1),ne=(0,R.useRef)(!0),N=(0,R.useRef)(0),re=(0,R.useRef)(null),oe=(0,R.useRef)(0),se=(0,R.useCallback)(async e=>{let t=++N.current;T(!0),ne.current=!0,ee(null);try{let n=await Be(0,A_,e);if(t!==N.current)return;A.current=n.entries,j.current=n.total,b(n.entries),S(n.total)}catch(e){t===N.current&&ee(e instanceof Error?e.message:String(e))}finally{t===N.current&&(ne.current=!1,T(!1))}},[]);(0,R.useEffect)(()=>{se(!1)},[se]);let P=(0,R.useCallback)(async()=>{if(ne.current||M.current||A.current.length>=j.current)return;let e=N.current;M.current=!0;try{let t=A.current,n=j.current;for(let r=0;r<M_&&t.length<n;r++){let r=await Be(t.length,A_,!1);if(e!==N.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<A_)break}if(e!==N.current)return;A.current=t,j.current=n,(0,R.startTransition)(()=>{b(t),S(n)})}catch{}finally{M.current=!1}},[]),F=(0,R.useCallback)(e=>{oe.current||=window.requestAnimationFrame(()=>{oe.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<j_&&P()})},[P]);(0,R.useEffect)(()=>{let e=re.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&P()},{root:e.parentElement,rootMargin:`${j_}px 0px`});return t.observe(e),()=>t.disconnect()},[P]),(0,R.useEffect)(()=>{if(y.length>=x)return;let e=window.setTimeout(()=>{let e=re.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<j_&&P()},200);return()=>window.clearTimeout(e)},[y.length,x,P]);let I=(0,R.useMemo)(()=>({path:``,parent:null,entries:y.map(F_),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[y]),ce=(0,R.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),le=(0,R.useCallback)(e=>{l?l(e):we(e)},[l]),ue=(0,R.useCallback)(e=>{let t=I_(e.modified);return{id:t,label:t}},[]),de=()=>{O(!0),se(!0).finally(()=>O(!1))},fe=y.length<x,pe=(0,R.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:y.filter(e=>jn(e.name,a)||jn(e.path,a)),[y,a?.open,a?.query,a?.matchCase,a?.regex]),me=(0,R.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:pe[Math.min(a.index,Math.max(0,pe.length-1))]?.path??null}:Cn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,pe]);(0,R.useEffect)(()=>{c?.(pe.length)},[pe.length,c]);let he=(0,R.useCallback)(e=>{te(e),u?.(e)},[u]),L=k.length>0?y.find(e=>e.path===k[0])??null:null,ge=L?.name.includes(`.`)?L.name.slice(L.name.lastIndexOf(`.`)+1).toUpperCase():`—`,_e=L&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(L.name)?_(`video_2`):_(`picture`),ve=L?L.path.slice(0,Math.max(L.path.lastIndexOf(`\\`),L.path.lastIndexOf(`/`))):``,ye=L?{name:L.name,path:L.path,isDirectory:!1,size:L.size,modified:L.modified,fields:[{label:_(`type`),value:_e},{label:_(`extension`),value:ge},{label:_(`location`),value:ve},{label:_(`full_path`),value:L.path},{label:_(`size`),value:C(L.size)},{label:_(`modified`),value:ie(L.modified)},{label:_(`created`),value:`—`}]}:null,be=k.length>1?ae(_,k.length,`k_1_item_selected`,`count_items_selected`):void 0,xe=(0,R.useRef)(``);return(0,R.useEffect)(()=>{let e=`${ye?.path??``}|${ye?.modified??0}|${be??``}`;xe.current!==e&&(xe.current=e,g?.(ye,be))},[ye,be,g]),(0,q.jsxs)(L_,{children:[(0,q.jsxs)(B_,{children:[(0,q.jsxs)(H_,{children:[(0,q.jsx)(`span`,{children:_(`gallery`)}),(0,q.jsx)(U_,{children:w?_(`scanning`):_(`shown_of_total_pictures`,{shown:y.length,total:x})})]}),(0,q.jsxs)(V_,{children:[(0,q.jsx)(W_,{onClick:de,title:_(`scan_the_folders_again`),type:`button`,children:(0,q.jsx)(G_,{$spinning:D,children:(0,q.jsx)(bi,{size:14})})}),v.available&&(0,q.jsx)(W_,{onClick:e=>v.open(e.clientX,e.clientY),title:_(`selection_menu`),type:`button`,children:(0,q.jsx)(Ta,{size:14})})]})]}),E&&(0,q.jsx)(q_,{children:E}),!E&&!w&&x===0&&(0,q.jsx)(q_,{children:_(`no_pictures_found`)}),!E&&(w||x>0)&&(0,q.jsx)(R_,{children:(0,q.jsx)(z_,{children:(0,q.jsx)(Sl,{confirmDelete:n,find:me,selectMatchesToken:s,listing:w&&y.length===0?null:I,loading:w,error:null,view:ce,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:he,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:le,onOpenFile:le,onRefresh:de,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,groupOf:ue,onGridScroll:F,gridFooter:(0,q.jsx)(K_,{$space:fe?N_:1,ref:re}),allowBackgroundMenu:!1})})})]})}function F_(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function I_(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(j(),{weekday:`long`}):t.toLocaleDateString(j(),{year:`numeric`,month:`long`,day:`numeric`})}var L_=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,R_=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,z_=v.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,B_=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,V_=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,H_=v.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,U_=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,W_=v.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,G_=v.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,K_=v.div`
    height: ${({$space:e})=>e}px;
`,q_=v.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function J_({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:s=``,version:c=0,historyVersion:u=0,hiddenViews:d=[],onNavigate:f,onOpenView:p}){let[m,h]=(0,R.useState)([]),g=o(),[_,v]=(0,R.useState)(null),y=zn();(0,R.useEffect)(()=>{Xe().then(e=>{v(e),h(Ls(e).filter(e=>e.pinned))},()=>{v(null),h([])})},[c]),(0,R.useEffect)(()=>{if(!l.available)return;let e=m.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[m,s]);let b=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>P(e.path,t));return{name:_?.placeNames?.[t]??n?.name??(x(t)||t),path:t,kind:`folder`,icon:n?.icon??_?.placeIcons?.[t]??null}}),w=a===`files`;return(0,q.jsxs)(ev,{children:[(0,q.jsxs)(tv,{children:[!d.includes(`home`)&&(0,q.jsxs)(ov,{$active:a===`home`,onClick:e=>p(`home`,Yt(e)),title:g(`overview`),type:`button`,children:[(0,q.jsx)(Zi,{}),(0,q.jsx)(cv,{children:g(`overview`)})]}),!d.includes(`recycle`)&&(0,q.jsxs)(ov,{$active:a===`recycle`,onClick:e=>p(`recycle`,Yt(e)),title:g(`recycle_bin`),type:`button`,children:[(0,q.jsx)(ji,{}),(0,q.jsx)(cv,{children:g(`recycle_bin`)})]}),!d.includes(`gallery`)&&(0,q.jsxs)(ov,{$active:a===`gallery`,onClick:e=>p(`gallery`,Yt(e)),title:g(`gallery`),type:`button`,children:[(0,q.jsx)(zi,{}),(0,q.jsx)(cv,{children:g(`gallery`)})]})]}),m.map(e=>(0,q.jsxs)(rv,{children:[(0,q.jsxs)(ov,{as:`div`,$active:!1,children:[(0,q.jsx)(sv,{children:(0,q.jsx)(zs,{panel:e,size:16})}),(0,q.jsx)(cv,{children:g(e.title)})]}),(0,q.jsx)(iv,{children:(0,q.jsxs)(av,{children:[e.kind===`quick`&&b(e).map(e=>(0,q.jsxs)(ov,{$active:w&&P(i,e.path),onClick:t=>f(e.path,Yt(t)),title:e.path,type:`button`,children:[(0,q.jsx)(Bs,{place:e}),(0,q.jsx)(cv,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=Bn(y,e.path);return(0,q.jsxs)(ov,{$active:w&&P(i,e.path),onClick:t=>e.isDirectory?f(e.path,Yt(t)):void we(e.path),title:e.path,type:`button`,children:[t&&y.useIcons?(0,q.jsx)(Bs,{place:t}):(0,q.jsx)(ic,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,q.jsx)(cv,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,q.jsx)(Z_,{historyVersion:u,onNavigate:f}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,q.jsxs)(ov,{$active:w&&P(i,e.name),onClick:t=>f(e.name,Yt(t)),title:e.name,type:`button`,children:[(0,q.jsx)(_i,{}),(0,q.jsxs)(cv,{children:[re(e),(0,q.jsxs)(lv,{children:[C(e.freeSpace),` free`]}),(0,q.jsx)(uv,{children:(0,q.jsx)(dv,{$used:t,$tone:S(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,q.jsx)(Q_,{onNavigate:f,path:e.path||s})]})})]},e.id)),!d.includes(`settings`)&&(0,q.jsx)(nv,{children:(0,q.jsxs)(ov,{$active:a===`settings`,onClick:e=>p(`settings`,Yt(e)),title:g(`settings`),type:`button`,children:[(0,q.jsx)(Ti,{}),(0,q.jsx)(cv,{children:g(`settings`)})]})})]})}var Y_=10,X_=40;function Z_({historyVersion:e=0,onNavigate:t}){let n=o(),[r,i]=(0,R.useState)(null),a=zn();return(0,R.useEffect)(()=>{He().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Bn(a,e.path);return(0,q.jsxs)(ov,{$active:!1,onClick:n=>t(e.path,Yt(n)),title:ae(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,q.jsx)(Bs,{place:r}):(0,q.jsx)(ic,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,q.jsx)(cv,{children:r?.name||e.name})]},e.path)})}function Q_({path:e,onNavigate:t}){let[n,r]=(0,R.useState)(null);(0,R.useEffect)(()=>{e&&(r(null),Te(e,!1).then(r,()=>r(null)))},[e]),(0,R.useEffect)(()=>{if(e&&l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&P(n.data.path,e)&&Te(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,Y_),o=i.filter(e=>!e.isDirectory).slice(0,X_);return(0,q.jsxs)(q.Fragment,{children:[a.map(e=>(0,q.jsx)($_,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,q.jsx)($_,{entry:e,onNavigate:t},e.fullPath))]})}function $_({entry:e,onNavigate:t}){let n=zn(),r=Bn(n,e.fullPath);return(0,q.jsxs)(ov,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Yt(n)):void we(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,q.jsx)(Bs,{place:r}):(0,q.jsx)(ic,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,q.jsx)(cv,{children:r?.name||e.name})]})}var ev=v.aside`
    position: absolute;
    z-index: 20;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 52px;
    padding: 10px 9px;
    overflow: hidden;
    background: rgba(var(--bg-rgb), 0.78);
    border-right: 1px solid var(--border-color);
    backdrop-filter: blur(16px) saturate(115%);
    -webkit-backdrop-filter: blur(16px) saturate(115%);
    transition: width 150ms ease, padding 150ms ease, box-shadow 150ms ease, background 150ms ease;

    html.has-wallpaper & {
        background: rgba(var(--bg-rgb), 0.52);
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:hover {
        width: 224px;
        padding: 10px 10px;
        background: rgba(var(--bg-rgb), 0.90);
        box-shadow: 14px 0 36px var(--shadow-menu), 0 0 28px rgba(var(--accent-secondary-rgb), 0.06);
        overflow-y: auto;
        scrollbar-width: none;
    }

    &:not(:hover) ${()=>lv},
    &:not(:hover) ${()=>uv} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,tv=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,nv=v(tv)`
    margin-top: auto;
`,rv=v.div`
    display: flex;
    flex-direction: column;
`,iv=v.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${ev}:hover ${rv}:hover > & {
        grid-template-rows: 1fr;
    }
`,av=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-height: 0;
    max-height: 40vh;
    padding-left: 10px;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
    }
`,ov=v.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    padding: 7px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12.5px;
    text-align: left;
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease, transform 130ms ease;

    &::before {
        content: "";
        position: absolute;
        left: -1px;
        top: 50%;
        width: 2px;
        height: 0;
        border-radius: 2px;
        background: var(--accent-primary);
        transform: translateY(-50%);
        transition: height 160ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    ${({$active:e})=>e&&`&::before { height: 56%; }`}
    svg {
        flex-shrink: 0;
        color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
        transition: color 130ms ease, transform 160ms cubic-bezier(0.22, 1, 0.36, 1);
        transform: scale(${({$active:e})=>e?1.08:1});
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
        border-color: var(--border-color);
        color: var(--text-primary);

        svg {
            transform: scale(1.08);
        }
    }

    &:active {
        transform: scale(0.99);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,sv=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    img {
        width: 16px;
        height: 16px;
        object-fit: contain;
    }
`,cv=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lv=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,uv=v.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,dv=v.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,fv=v.span`
    position: absolute;
    top: 6px;
    right: 2px;
    min-width: 13px;
    height: 13px;
    padding: 0 3px;
    border-radius: 999px;
    background: var(--accent-primary);
    color: #fff;
    font-family: var(--font-mono);
    font-size: 8px;
    line-height: 13px;
    text-align: center;
`;function pv({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=o(),a=(0,R.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,R.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,q.jsxs)(hv,{ref:a,children:[(0,q.jsxs)(gv,{$active:n,onClick:()=>r(!n),title:s>0?ae(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,q.jsx)(Ai,{size:13}),c>0&&(0,q.jsx)(fv,{children:c>9?`9+`:c})]}),n&&(0,q.jsxs)(_v,{children:[(0,q.jsxs)(vv,{children:[(0,q.jsx)(yv,{children:i(`status_center`)}),(0,q.jsxs)(bv,{children:[(0,q.jsx)(xv,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,q.jsx)(Sv,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,q.jsx)(Ni,{size:10})})]})]}),e.length===0?(0,q.jsx)(wv,{children:i(`no_operations_yet`)}):(0,q.jsx)(Cv,{children:e.map(e=>(0,q.jsx)(mv,{task:e},e.id))})]})]})}function mv({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,q.jsxs)(Tv,{children:[(0,q.jsxs)(Ev,{children:[(0,q.jsx)(Dv,{$state:e.state,children:e.state===`done`?(0,q.jsx)(Mi,{size:10}):e.state===`failed`?(0,q.jsx)(Ni,{size:10}):(0,q.jsx)(Ov,{})}),(0,q.jsx)(kv,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,q.jsxs)(Av,{children:[C(e.bytesDone),` / `,C(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,q.jsxs)(Av,{children:[e.done,` / `,e.total]})]}),i&&(0,q.jsx)(jv,{children:(0,q.jsx)(Mv,{$percent:r,$indeterminate:t===0})}),e.error&&(0,q.jsx)(Nv,{children:e.error})]})}var hv=v.div`
    position: relative;
    display: flex;
`,gv=v.button`
    position: relative;
    display: grid;
    place-items: center;
    width: 38px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,_v=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${qa}
    ${oo}
`,vv=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,yv=v.span`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    &::before {
        content: "";
        width: 2px;
        height: 10px;
        border-radius: 2px;
        background: var(--accent-gradient);
    }
`,bv=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,xv=v.button`
    padding: 4px 7px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover:not(:disabled) {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,Sv=v.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,Cv=v.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,wv=v.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Tv=v.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${so}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,Ev=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Dv=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Ov=v.span`
    width: 9px;
    height: 9px;
    border: 2px solid rgba(var(--accent-rgb), 0.25);
    border-top-color: var(--accent-primary);
    border-radius: 50%;
    animation: yafm-task-spin 800ms linear infinite;

    @keyframes yafm-task-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,kv=v.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Av=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,jv=v.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Mv=v.div`
    width: ${({$percent:e,$indeterminate:t})=>t?`35%`:`${e}%`};
    height: 100%;
    border-radius: inherit;
    background: var(--accent-gradient);
    transition: width 120ms linear;
    animation: ${({$indeterminate:e})=>e?`yafm-task-slide 1.1s ease-in-out infinite`:`none`};

    @keyframes yafm-task-slide {
        0% {
            transform: translateX(-120%);
        }
        100% {
            transform: translateX(320%);
        }
    }
`,Nv=v.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function Pv(){return l.available?(await l.request(`fs.history.list`)).entries:[]}async function Fv(e){return l.available?(await l.request(`fs.history.undoTo`,{id:e})).ok:!1}function Iv(){let e=o(),[t,n]=(0,R.useState)(!1),[r,i]=(0,R.useState)([]),[a,s]=(0,R.useState)(!1),c=(0,R.useRef)(null),l=()=>void Pv().then(i,()=>i([]));(0,R.useEffect)(()=>{if(!t)return;l();let e=window.setInterval(l,1e3),r=e=>{c.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let u=async e=>{s(!0);try{await Fv(e),l()}finally{s(!1)}};return(0,q.jsxs)(zv,{ref:c,children:[(0,q.jsx)(Bv,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,q.jsx)(ki,{size:14})}),t&&(0,q.jsxs)(Vv,{children:[(0,q.jsxs)(Hv,{children:[(0,q.jsx)(Uv,{children:e(`history`)}),(0,q.jsx)(Wv,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,q.jsx)(Ni,{size:10})})]}),r.length===0?(0,q.jsx)($v,{children:e(`no_operations_yet`)}):(0,q.jsx)(Gv,{children:r.map(t=>(0,q.jsxs)(Kv,{children:[(0,q.jsxs)(qv,{children:[(0,q.jsxs)(Jv,{children:[(0,q.jsx)(Rv,{label:t.label}),Lv(e,t.label)]}),(0,q.jsx)(Yv,{children:te(t.at)})]}),t.paths.length>0&&(0,q.jsxs)(Xv,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,q.jsx)(Zv,{children:(0,q.jsx)(Qv,{disabled:!t.applied||!t.restorable||a,onClick:()=>void u(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function Lv(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Rv({label:e}){return e.startsWith(`delete`)?(0,q.jsx)(ji,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,q.jsx)(va,{size:13}):e.startsWith(`rename`)?(0,q.jsx)(Qi,{size:13}):e.startsWith(`compress`)?(0,q.jsx)(Hi,{size:13}):e.startsWith(`new`)?(0,q.jsx)(xi,{size:13}):(0,q.jsx)(Ci,{size:13})}var zv=v.div`
    position: relative;
    display: flex;
`,Bv=v.button`
    display: grid;
    place-items: center;
    width: 38px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,Vv=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${qa}
    ${oo}
`,Hv=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Uv=v.span`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    &::before {
        content: "";
        width: 2px;
        height: 10px;
        border-radius: 2px;
        background: var(--accent-gradient);
    }
`,Wv=v.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,Gv=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Kv=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,qv=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,Jv=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }
`,Yv=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Xv=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Zv=v.div`
    display: flex;
    justify-content: flex-end;
`,Qv=v.button`
    padding: 2px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,$v=v.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function ey({currentFolder:e}){let t=o(),[n,r]=(0,R.useState)(!1),[i,a]=(0,R.useState)(null),[s,c]=(0,R.useState)(!1),l=(0,R.useRef)(null);(0,R.useEffect)(()=>{if(!n)return;let e=()=>void Mc().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{l.current?.contains(e.target)||r(!1)},o=()=>r(!1);return window.addEventListener(`pointerdown`,i),window.addEventListener(`blur`,o),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`blur`,o)}},[n]),(0,R.useEffect)(()=>{let e=()=>void Mc().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{a(await e())}finally{c(!1)}},d=i?.shares.some(t=>P(t.path,e))??!1;return(0,q.jsxs)(ty,{ref:l,children:[(0,q.jsxs)(ny,{$active:n,onClick:()=>r(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,q.jsx)(fa,{size:15}),i&&i.shares.length>0&&(0,q.jsx)(fv,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,q.jsxs)(ry,{children:[(0,q.jsxs)(iy,{children:[(0,q.jsx)(ay,{children:t(`share`)}),(0,q.jsx)(oy,{onClick:()=>r(!1),title:t(`close`),type:`button`,children:(0,q.jsx)(Ni,{size:10})})]}),(0,q.jsxs)(sy,{children:[(0,q.jsxs)(cy,{children:[(0,q.jsx)(Ii,{size:15}),(0,q.jsxs)(`span`,{children:[(0,q.jsx)(`strong`,{children:i?.deviceName||t(`this_device`)}),(0,q.jsx)(ly,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,q.jsx)(uy,{children:t(`no_folders_are_shared_yet`)}),i?.shares.map(e=>(0,q.jsxs)(dy,{children:[(0,q.jsxs)(fy,{children:[(0,q.jsx)(py,{title:e.path,children:e.name}),(0,q.jsx)(hy,{disabled:s,onClick:()=>void u(()=>Pc(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,q.jsx)(Ni,{size:10})})]}),(0,q.jsx)(my,{title:e.path,children:e.path}),(0,q.jsxs)(gy,{children:[(0,q.jsxs)(_y,{$active:e.mode===`client`,onClick:()=>void u(()=>Fc(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,q.jsx)(Ii,{size:11}),t(`app`)]}),(0,q.jsxs)(_y,{$active:e.mode===`web`,onClick:()=>void u(()=>Fc(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,q.jsx)(ma,{size:11}),t(`web`)]})]})]},e.id)),(0,q.jsxs)(vy,{disabled:s||e.length===0||d,onClick:()=>void u(()=>Nc(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,q.jsx)(xi,{size:12}),t(`share_this_folder`)]}),i?.webRunning&&(0,q.jsxs)(yy,{children:[(0,q.jsxs)(by,{children:[(0,q.jsx)(ma,{size:12}),t(`browser_access`)]}),i.urls.map(e=>(0,q.jsx)(xy,{onClick:()=>void I(e),type:`button`,children:e},e)),(0,q.jsx)(ly,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var ty=v.div`
    position: relative;
    display: flex;
`,ny=v.button`
    position: relative;
    display: grid;
    place-items: center;
    width: 38px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,ry=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${qa}
    ${oo}
`,iy=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,ay=v.span`
    display: flex;
    align-items: center;
    gap: 7px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    &::before {
        content: "";
        width: 2px;
        height: 10px;
        border-radius: 2px;
        background: var(--accent-gradient);
    }
`,oy=v.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,sy=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,cy=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.4);

    span {
        display: flex;
        flex-direction: column;
        min-width: 0;
    }

    strong {
        color: var(--text-primary);
        font-size: 12px;
        font-weight: 600;
    }
`,ly=v.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,uy=v.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,dy=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,fy=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,py=v.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,my=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hy=v.button`
    display: grid;
    flex-shrink: 0;
    place-items: center;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: rgba(232, 17, 35, 0.18);
        color: #ff8a95;
    }
`,gy=v.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,_y=v.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 8px;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: 999px;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,vy=v.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 2px;
    padding: 8px;
    border: 1px dashed var(--border-color-hover);
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 11.5px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.08);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,yy=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,by=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,xy=v.button`
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--accent-primary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-align: left;
    cursor: pointer;
    overflow-wrap: anywhere;

    &:hover {
        text-decoration: underline;
    }
`;function Sy({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let s=o(),[c,l]=(0,R.useState)(!1),u=(0,R.useRef)(null);(0,R.useEffect)(()=>{if(!c)return;let e=()=>l(!1),t=e=>{u.current?.contains(e.target)||l(!1)},n=e=>{e.key===`Escape`&&l(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[c]),(0,R.useEffect)(()=>{a&&l(!1)},[a]);let d=e.columns,f=e=>{let t=new Set(d);t.has(e)?t.delete(e):t.add(e);let r=pl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,q.jsxs)(Cy,{ref:u,children:[(0,q.jsx)(wy,{$active:c,disabled:a,onClick:()=>l(e=>!e),title:s(`view`),type:`button`,children:e.mode===`grid`?(0,q.jsx)(Oi,{size:14}):(0,q.jsx)(Di,{size:14})}),c&&(0,q.jsxs)(Ty,{children:[(0,q.jsx)(Ey,{children:s(`view`)}),(0,q.jsxs)(Oy,{children:[(0,q.jsxs)(ky,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,q.jsx)(Di,{size:12}),` `,s(`list`)]}),(0,q.jsxs)(ky,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,q.jsx)(Oi,{size:12}),` `,s(`grid`)]})]}),(0,q.jsx)(Ey,{children:s(`list_icon_size`)}),(0,q.jsxs)(Ay,{children:[(0,q.jsx)(`input`,{"aria-label":s(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,q.jsxs)(jy,{children:[e.iconSize,`px`]})]}),(0,q.jsx)(Ey,{children:s(`grid_size`)}),(0,q.jsxs)(Ay,{children:[(0,q.jsx)(`input`,{"aria-label":s(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,q.jsxs)(jy,{children:[e.gridSize,`px`]})]}),(0,q.jsxs)(Ey,{children:[s(`columns`),(0,q.jsx)(Jm,{}),(0,q.jsx)(Dy,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:s(`reset_column_widths`),type:`button`,children:s(`reset_widths`)})]}),pl.map(e=>(0,q.jsxs)(My,{children:[(0,q.jsx)(`input`,{checked:d.includes(e.id),onChange:()=>f(e.id),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,q.jsxs)(My,{children:[(0,q.jsx)(`input`,{checked:d.includes(`linkTarget`),onChange:()=>f(`linkTarget`),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`link_target_after_the_name`)})]}),(0,q.jsxs)(Ey,{children:[s(`preview_panel`),(0,q.jsx)(Jm,{})]}),(0,q.jsxs)(My,{children:[(0,q.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`preview_under_the_list`)})]})]})]})}var Cy=v.div`
    position: relative;
    display: flex;
    height: 100%;
`,wy=v.button`
    display: grid;
    place-items: center;
    width: 42px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        background: transparent;
        opacity: 0.4;
        cursor: default;
    }
`,Ty=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${qa}
    animation: yafm-view-in 150ms cubic-bezier(0.22, 1, 0.36, 1);

    @keyframes yafm-view-in {
        from {
            opacity: 0;
            transform: translateY(-6px) scale(0.985);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`,Ey=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 12px 0 6px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);

    &::before {
        content: "";
        width: 2px;
        height: 9px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    &:first-child {
        margin-top: 2px;
    }
`,Dy=v.button`
    margin-left: auto;
    padding: 2px 7px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    letter-spacing: 0;
    text-transform: none;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,Oy=v.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,ky=v.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
    padding: 5px 6px;
    border: 1px solid ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.55)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`transparent`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    font-weight: ${({$on:e})=>e?600:500};
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,Ay=v.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,jy=v.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,My=v.label`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 4px 6px;
    margin: 0 -6px;
    border-radius: var(--radius-sm);
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    input {
        margin: 0;
        accent-color: var(--accent-primary);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
        color: var(--text-primary);
    }
`,Ny=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Py=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Fy=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Iy=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,q.jsx)(`path`,{d:`M2 5h6`})}),Ly=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,q.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Ry=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,q.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,q.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function zy({tabs:e,activeId:n,onSelect:r,onClose:i,onNewTab:a,onReorder:s,onTransferToTab:c,view:l,onViewChange:d,onColumns:f,showImages:p,onShowImages:m,tasks:h,onClearTasks:g,activityOpen:_,onActivityOpenChange:v,trayCount:y,trayVisible:b,onToggleTray:x,split:S,canSplit:C,onToggleSplit:w,details:T,canDetails:E,onToggleDetails:ee,shortcuts:D,currentFolder:O}){let k=o(),te=t(),A=u(),[j,M]=(0,R.useState)({left:!1,right:!1}),[ne,N]=(0,R.useState)(null),[re,ie]=(0,R.useState)(null),ae=(0,R.useRef)(null),oe=(0,R.useRef)(null),se=(0,R.useRef)(null),P=(0,R.useCallback)(()=>{let e=oe.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;M(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,R.useEffect)(()=>{P();let e=oe.current;if(!e)return;let t=new ResizeObserver(P);return t.observe(e),()=>t.disconnect()},[P,e.length]),(0,R.useEffect)(()=>()=>{ae.current&&window.clearTimeout(ae.current.timer)},[]),(0,R.useEffect)(()=>{se.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[n]);let F=e=>oe.current?.scrollBy({left:e,behavior:`smooth`}),I=()=>{ae.current&&window.clearTimeout(ae.current.timer),ae.current=null,ie(null)};return(0,q.jsxs)(Uy,{children:[(0,q.jsx)(Wy,{children:(0,q.jsx)(Ii,{size:19})}),(0,q.jsxs)(Gy,{children:[j.left&&(0,q.jsx)(qy,{onClick:()=>F(-180),title:k(`scroll_tabs_left`),type:`button`,children:(0,q.jsx)(Ny,{})}),(0,q.jsx)(Ky,{onScroll:P,onWheel:e=>{let t=oe.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:oe,children:e.map(e=>(0,q.jsxs)(Jy,{$active:e.id===n,$dragging:ne===e.id,$dropTarget:re===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!sc(t.dataTransfer)||!By(e)||(t.preventDefault(),ae.current?.id===e.id))return;I(),ie(e.id);let n=window.setTimeout(()=>{r(e.id),ae.current=null},500);ae.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ae.current?.id===e.id||re===e.id)&&I()},onDragEnd:()=>{N(null),I()},onDragOver:t=>{(ne||sc(t.dataTransfer)&&By(e))&&(t.preventDefault(),sc(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>N(e.id),onDrop:t=>{if(t.preventDefault(),ne)s(ne,e.id);else if(By(e)&&sc(t.dataTransfer)){let{paths:n,move:i}=cc(t);n.length>0&&(r(e.id),c(n,e.path,!t.ctrlKey&&i))}N(null),I()},onClick:()=>r(e.id),ref:e.id===n?se:void 0,title:e.path||e.title,type:`button`,children:[(0,q.jsx)(Vy,{tab:e}),(0,q.jsx)(Yy,{children:e.title}),e.partner&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Xy,{children:`|`}),(0,q.jsx)(Hy,{place:e.partner.place}),(0,q.jsx)(Yy,{children:e.partner.title})]}),(0,q.jsx)(Zy,{"data-shortcut":Zt(D.closeTab),onClick:t=>{t.stopPropagation(),i(e.id)},title:k(`close_tab`),children:(0,q.jsx)(Fy,{})})]},e.id))}),j.right&&(0,q.jsx)(qy,{onClick:()=>F(180),title:k(`scroll_tabs_right`),type:`button`,children:(0,q.jsx)(Py,{})}),(0,q.jsx)(Qy,{"data-shortcut":Zt(D.newTab),onClick:a,title:k(`new_tab`),type:`button`,children:(0,q.jsx)(xi,{size:13})})]}),(0,q.jsx)($y,{...A}),(0,q.jsxs)(eb,{children:[(0,q.jsx)(nb,{$active:S,"data-shortcut":Zt(D.splitView),disabled:!C,onClick:w,title:k(S?`close_split_view`:`split_view`),type:`button`,children:(0,q.jsx)(Ca,{size:15})}),(0,q.jsx)(nb,{$active:T,disabled:!E,onClick:ee,title:k(T?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,q.jsx)(wa,{size:15})}),(0,q.jsxs)(tb,{$active:b,onClick:x,title:k(b?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,q.jsx)(pa,{size:14}),y>0&&(0,q.jsx)(fv,{children:y>9?`9+`:y})]}),(0,q.jsx)(Iv,{}),(0,q.jsx)(ey,{currentFolder:O}),(0,q.jsx)(pv,{tasks:h,onClear:g,open:_,onOpenChange:v}),(0,q.jsx)(Sy,{disabled:e.find(e=>e.id===n)?.kind!==`files`,onChange:d,onColumns:f,onShowImages:m,showImages:p,view:l}),(0,q.jsx)(rb,{onClick:te.minimize,title:k(`minimize`),type:`button`,children:(0,q.jsx)(Iy,{})}),(0,q.jsx)(rb,{onClick:te.toggleMaximize,title:te.maximized?k(`restore`):k(`maximize`),type:`button`,children:te.maximized?(0,q.jsx)(Ry,{}):(0,q.jsx)(Ly,{})}),(0,q.jsx)(ib,{onClick:te.close,title:k(`close`),type:`button`,children:(0,q.jsx)(Fy,{})})]})]})}function By(e){return e.kind===`files`&&(!T(e.path)||ee(e.path))}function Vy({tab:e}){switch(e.kind){case`home`:return(0,q.jsx)(mi,{size:13});case`settings`:return(0,q.jsx)(Ti,{size:13});case`recycle`:return(0,q.jsx)(ji,{size:13});default:return e.archive?(0,q.jsx)(Hi,{size:13}):(0,q.jsx)(Hy,{place:e.place})}}function Hy({place:e}){return e?(0,q.jsx)(Bs,{place:e,size:13}):(0,q.jsx)(hi,{size:13})}var Uy=v.header`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: stretch;
    height: 44px;
    flex-shrink: 0;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    font-family: var(--font-title), var(--font-cjk);
    user-select: none;
    -webkit-user-select: none;

    html.has-wallpaper & {
        background: rgba(var(--bg-rgb), 0.5);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
    }
`,Wy=v.span`
    display: grid;
    place-items: center;
    align-self: center;
    width: 26px;
    height: 26px;
    margin-left: 12px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Gy=v.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Ky=v.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,qy=v.button`
    display: grid;
    place-items: center;
    width: 20px;
    height: 26px;
    flex-shrink: 0;
    margin-bottom: 2px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    svg {
        width: 10px;
        height: 10px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.4;
    }

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,Jy=v.button`
    display: flex;
    align-items: center;
    gap: 7px;
    width: ${({$split:e})=>e?`300px`:`176px`};
    height: 32px;
    flex: 0 0 auto;
    padding: 0 6px 0 10px;
    border: 1px solid ${({$dropTarget:e,$active:t})=>e?`var(--accent-primary)`:t?`var(--border-color)`:`transparent`};
    border-bottom: 0;
    border-radius: 9px 9px 0 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.10)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    opacity: ${({$dragging:e})=>e?.45:1};
    box-shadow: ${({$dropTarget:e,$active:t})=>e?`inset 0 -2px 0 var(--accent-primary), 0 0 12px rgba(var(--accent-rgb), 0.22)`:t?`inset 0 -2px 0 var(--accent-primary)`:`none`};
    transition: background 120ms ease, color 120ms ease, opacity 120ms ease, box-shadow 120ms ease;

    svg {
        flex-shrink: 0;
        color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
        color: var(--text-primary);
    }

    &:hover > span:last-child {
        opacity: 1;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`,Yy=v.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Xy=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Zy=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 4px;
    opacity: 0;

    svg {
        width: 8px;
        height: 8px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.3;
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.14);
        color: var(--text-primary);
    }
`,Qy=v.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    margin-bottom: 2px;
    border: 1px solid transparent;
    border-radius: 8px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        border-color: var(--border-color);
        color: var(--text-primary);
    }
`,$y=v.div`
    flex: 1;
    min-width: 28px;
`,eb=v.div`
    display: flex;
    flex-shrink: 0;
`,tb=v.button`
    position: relative;
    display: grid;
    place-items: center;
    width: 34px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: var(--text-secondary);
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,nb=v.button`
    display: grid;
    place-items: center;
    width: 34px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,rb=v.button`
    display: grid;
    place-items: center;
    width: 46px;
    height: 100%;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 100ms ease, color 100ms ease;

    svg {
        width: 10px;
        height: 10px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.2;
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.14);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`,ib=v(rb)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function ab(){let[e,t]=(0,R.useState)(null),n=(0,R.useRef)(null),r=(0,R.useRef)(void 0);return(0,R.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Ka.createPortal)((0,q.jsx)(ob,{tooltip:e}),document.body):null}function ob({tooltip:e}){let t=(0,R.useRef)(null),[n,r]=(0,R.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,R.useState)(()=>e.bottom+6);return(0,R.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,q.jsxs)(sb,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,q.jsx)(cb,{children:e.text}),e.shortcut&&(0,q.jsx)(lb,{children:e.shortcut})]})}var sb=v.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: min(360px, calc(100vw - 16px));
    padding: 6px 9px;
    border: 1px solid var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: rgba(7, 11, 18, 0.96);
    box-shadow: var(--shadow-float);
    pointer-events: none;
    ${so}
`,cb=v.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,lb=v.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,ub={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`};function db({deviceName:e,code:t,onAccept:n,onReject:r}){let i=o(),a=(0,R.useRef)(null);return(0,R.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Ka.createPortal)((0,q.jsx)(fb,{children:(0,q.jsxs)(pb,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsxs)(mb,{children:[(0,q.jsx)(fa,{size:15}),i(`pair_for_sharing`)]}),(0,q.jsx)(hb,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,q.jsx)(gb,{children:t}),(0,q.jsx)(_b,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,q.jsxs)(vb,{children:[(0,q.jsx)(yb,{onClick:r,type:`button`,children:i(`reject`)}),(0,q.jsx)(bb,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var fb=v.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${so}
`,pb=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${no}
`,mb=v.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,hb=v.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,gb=v.div`
    padding: 10px;
    border: 1px solid rgba(var(--accent-rgb), 0.28);
    border-radius: var(--radius-sm);
    background: rgba(var(--accent-rgb), 0.10);
    color: var(--accent-primary);
    font-family: var(--font-mono);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-align: center;
`,_b=v.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,vb=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,yb=v.button`
    padding: 7px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,bb=v(yb)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,xb=0,Sb=new Set;function Cb(e){Sb.add(e),l.send({type:`app.navigate.done`,payload:{path:e}})}var wb=20,Tb=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function Eb(e){return e.history[e.index]??Hp(`home`)}function Db(e){return Up(Eb(e))??`files`}function Ob(e){let t=Eb(e);return Up(t)?``:e.listing?.path||t}function kb(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Db(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Ab(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function jb(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||xe.iconSize,gridSize:e.view?.gridSize||t.gridSize||xe.gridSize,sort:e.view?.sort??xe.sort,sortDescending:e.view?.sortDescending??xe.sortDescending,columns:t.columns??Se.columns??[]}}function Mb(e=Hp(`home`)){return xb+=1,{id:`tab-${xb}`,listing:null,loading:!Up(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Nb(e){return e instanceof Error?e.message:String(e)}function Pb(e){let t=Uc(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return Wc(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Fb(e){let t=x(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Ib(e){return T(e)?nn(e):void 0}function Lb(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return ae(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:C(n)})}function Rb(){let e=o(),[t,n]=(0,R.useState)(()=>[Mb()]),[i,a]=(0,R.useState)(()=>t[0].id),[s,c]=(0,R.useState)(null),[u,d]=(0,R.useState)(()=>{let e=Xn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,R.useState)([]),[h,_]=(0,R.useState)([]),[v,y]=(0,R.useState)(null),[b,S]=(0,R.useState)(null),[C,w]=(0,R.useState)(null),te=O(),[A,j]=(0,R.useState)(Sn),[M,re]=(0,R.useState)(0),[ie,oe]=(0,R.useState)(0),[se,I]=(0,R.useState)(0),[ce,le]=(0,R.useState)(Sn),[de,fe]=(0,R.useState)(0),[pe,me]=(0,R.useState)(0),[he,L]=(0,R.useState)(0),[ge,_e]=(0,R.useState)(0),ve=(0,R.useRef)(ge);ve.current=ge;let[be,Ce]=(0,R.useState)([]),[ke,Pe]=(0,R.useState)(10),[B,Fe]=(0,R.useState)(null),Ie=f(g(B?.themeMode)),Le=(0,R.useMemo)(()=>(B?.favorites??[]).map(e=>E(e.path)),[B?.favorites]),[Re,ze]=(0,R.useState)(0),[V,Be]=(0,R.useState)(Kt),[He,We]=(0,R.useState)(0),[Ge,Ke]=(0,R.useState)(0),[Je,Ye]=(0,R.useState)(0),[Ze,Qe]=(0,R.useState)(!0),[$e,et]=(0,R.useState)(()=>{let e=Xn(`yafm.preview.width`,320);return e>=220?e:320}),[tt,nt]=(0,R.useState)(null),[rt,it]=(0,R.useState)(null),[at,ot]=(0,R.useState)({kind:null,info:null}),[st,ut]=(0,R.useState)(`primary`),[dt,ft]=(0,R.useState)(null),[H,pt]=(0,R.useState)(null),[mt,ht]=(0,R.useState)(null),[gt,_t]=(0,R.useState)(null),[vt,bt]=(0,R.useState)({primary:0,secondary:0}),[Ct,Dt]=(0,R.useState)({primary:null,secondary:null}),[kt,At]=(0,R.useState)(null),[jt,Nt]=(0,R.useState)([]),[Pt,Ft]=(0,R.useState)(!1),It=(0,R.useRef)([]),Lt=(0,R.useRef)([]),[Bt,Vt]=(0,R.useState)([]),[Ht,qt]=(0,R.useState)(!1),Qt=(0,R.useMemo)(()=>Ht?new Set(Bt.map(e=>e.path)):new Set,[Bt,Ht]),[en,tn]=(0,R.useState)(!1),[sn,cn]=(0,R.useState)([]),[ln,un]=(0,R.useState)(null),pn=(0,R.useRef)(0),[mn,hn]=(0,R.useState)(()=>{let e=Qn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Ab({x:e.x,y:e.y}):Ab({x:Math.max(20,window.innerWidth-340),y:110})}),U=(0,R.useCallback)(()=>{hn(e=>Ab(e)),tn(!0)},[]),W=t.find(e=>e.id===i)??t[0],G=Db(W),gn=Eb(W),K=Ob(W),_n=G===`files`?W.listing?.parent??Pb(K):null,vn=W.splitWith?t.find(e=>e.id===W.splitWith):void 0,yn=G===`files`&&vn!==void 0,bn=vn?Ob(vn):``,xn=vn?vn.listing?.parent??Pb(bn):null,Cn=yn&&vn&&st===`secondary`?vn:W,wn=B?.defaultView??Se,Tn=jb(Cn,wn);(0,R.useEffect)(()=>{r(B?.accentColor,B?.secondaryColor,Ie)},[B?.accentColor,B?.secondaryColor,Ie]),(0,R.useEffect)(()=>{Qm(B?.fonts)},[B?.fonts]),(0,R.useEffect)(()=>{N(B?.timeFormat,B?.timeFormatPattern)},[B?.timeFormat,B?.timeFormatPattern]),(0,R.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!B?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[B?.backgroundSource]),(0,R.useEffect)(()=>(ye(e=>new Promise(t=>{un({id:++pn.current,prompt:e,resolve:t})})),()=>ye(null)),[]),(0,R.useEffect)(()=>{ut(`primary`)},[i]),(0,R.useEffect)(()=>{le(Sn),me(0),L(0)},[G]),(0,R.useEffect)(()=>{me(0)},[ce.query,ce.matchCase,ce.regex]),(0,R.useEffect)(()=>{me(e=>he===0?0:Math.min(e,he-1))},[he]);let En=Tn.columns.includes(`linkCount`),Dn=(0,R.useMemo)(()=>{let e={},t=Ls(B),n={};for(let[e,t]of Object.entries(B?.placeNames??{}))n[E(e)]=t;for(let t of p)e[E(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=E(t),i=p.find(e=>E(e.path)===r);e[r]={name:n[r]??i?.name??(x(t)||t),path:t,kind:`folder`,icon:i?.icon??B?.placeIcons?.[t]??null}}return e},[p,B]),On=(0,R.useMemo)(()=>({places:Dn,useIcons:B?.systemIcons===!1}),[Dn,B?.systemIcons]),kn=B?.defaultView?.showImages??!0,An=B?.defaultView?.imageStripHeight??Se.imageStripHeight,Mn=G===`home`?(0,q.jsx)(Zi,{size:13}):G===`settings`?(0,q.jsx)(Ti,{size:13}):G===`recycle`?(0,q.jsx)(ji,{size:13}):G===`gallery`?(0,q.jsx)(zi,{size:13}):void 0,Nn=A.open&&A.query.length>0,Pn=(0,R.useMemo)(()=>Nn&&Cn.listing?Cn.listing.entries.filter(e=>jn(e.isDirectory?Vn(On,e.fullPath,e.name):e.name,A)).map(e=>e.fullPath):[],[Nn,A,Cn.listing,On]);(0,R.useEffect)(()=>{re(0)},[A.query,A.matchCase,A.regex,Cn.listing?.path]);let Fn=Pn.length===0?-1:Math.min(M,Pn.length-1),In=(0,R.useCallback)(()=>{j(e=>({...e,open:!1,query:``})),re(0)},[]),Ln=(0,R.useCallback)(()=>{j(e=>({...e,open:!0})),oe(e=>e+1)},[]),zn=(0,R.useCallback)(()=>{le(e=>({...e,open:!0})),fe(e=>e+1)},[]),Hn=(0,R.useCallback)(()=>{le(Sn),me(0),L(0)},[]),Un=(0,R.useCallback)(e=>{me(t=>he===0?0:(Math.min(t,he-1)+e+he)%he)},[he]),Wn=(0,R.useCallback)(e=>{j(t=>({...t,open:!0,query:t.open?t.query+e:e})),oe(e=>e+1)},[]),Gn=(0,R.useCallback)(e=>{re(t=>Pn.length===0?0:(Math.min(t,Pn.length-1)+e+Pn.length)%Pn.length)},[Pn.length]),Kn=(0,R.useRef)({tabs:t,activeId:i,activePane:st});Kn.current={tabs:t,activeId:i,activePane:st};let qn=(0,R.useRef)(B);qn.current=B;let Jn=(0,R.useRef)(!1),Yn=(0,R.useRef)([]),er=(0,R.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),tr=(0,R.useRef)(new Map),nr=(0,R.useCallback)(e=>{let t=(tr.current.get(e)??0)+1;return tr.current.set(e,t),()=>tr.current.get(e)===t},[]),rr=(0,R.useCallback)((e,t)=>{l.available&&t&&e===kb(Kn.current)&&l.send({type:`fs.focus`,payload:{path:t}})},[]),ir=(0,R.useCallback)(async(e,t,n)=>{if(!(t&&Hc(t)))try{let r=await je(t,En);if(!n()||!r.listing)return;er(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[En,er]),ar=(0,R.useCallback)(async(e,t,n=!1)=>{let r=nr(e);In(),rr(e,t);let i=!n||!Kn.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;er(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&P(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&ir(e,t,r);let o=t&&Hc(t)?await Gc(t):await Te(t,!0,En,ve.current,t?Ib(t):void 0);if(!r())return;er(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!Hc(o.path)&&Ue(o.path).then(()=>ze(e=>e+1))}catch(i){if(!r())return;let a=Kn.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Ob(a):``,s=Pb(o),c=Nb(i);if(o&&on(c)){let i=D(o),a=await Ia(i,!!nn(i));if(a){rn(i,a),r()&&ar(e,t,n);return}}er(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[nr,En,er,rr,In,ir]),or=(0,R.useCallback)((e,t)=>{let n=Wp(t);n&&(Up(n)?(In(),nr(e),er(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):ar(e,n))},[nr,ar,er,In]),sr=(0,R.useCallback)(async(e,t,n)=>{if(In(),Up(t)){nr(e),er(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=nr(e);rr(e,t),er(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Hc(t)||ir(e,t,r);let n=Hc(t)?await Gc(t):await Te(t,!0,En,ve.current,Ib(t));if(!r())return;er(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(on(Nb(i))){let i=D(t),a=await Ia(i,!!nn(i));if(a){rn(i,a),r()&&sr(e,t,n);return}}er(e,()=>({listing:{path:t,parent:Pb(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Nb(i)}))}},[nr,En,er,rr,In,ir]),cr=(0,R.useCallback)((e,t=!0)=>{let r=Mb(e??Hp(`home`));return n(e=>[...e,r]),t&&a(r.id),e&&!Up(e)&&ar(r.id,e),r.id},[ar]),lr=(0,R.useCallback)(e=>{for(let t of Kn.current.tabs)Db(t)===`files`&&P(Ob(t),e)&&ar(t.id,e,!0)},[ar]),ur=(0,R.useCallback)((e,t)=>{let n=x(t);for(let r of Kn.current.tabs)r.listing?.entries.some(t=>P(t.fullPath,e))&&er(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>P(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[er]),dr=(0,R.useRef)([]);(0,R.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&T(t)&&e.add(E(D(t)))}let n=dr.current.filter(t=>!e.has(t));dr.current=[...e],n.length>0&&Oe(n)},[t]);let fr=(0,R.useCallback)((e,t=!1)=>{t?cr(Hp(e)):or(Kn.current.activeId,Hp(e))},[cr,or]),pr=(0,R.useCallback)(e=>{let{tabs:t,activeId:r}=Kn.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(Lt.current.push(Eb(i)),Lt.current.length>wb&&Lt.current.shift()),o.length===0){let e=Mb();n([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&a(o[Math.min(s,o.length-1)].id)},[]),mr=(0,R.useCallback)(()=>{let e=Lt.current.pop();if(!e)return;let t={...Mb(e),fresh:!1};n(e=>[...e,t]),a(t.id),Db(t)===`files`&&ar(t.id,Ob(t))},[ar]),hr=(0,R.useCallback)((e,t=!1)=>{t?cr(e):or(kb(Kn.current),e??Hp(`home`))},[or,cr]),gr=(0,R.useCallback)(e=>{let{tabs:t,activeId:n}=Kn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),_r=(0,R.useCallback)(()=>{let{tabs:e,activeId:t}=Kn.current,r=e.find(e=>e.id===t);if(!r||Db(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),er(t,()=>({splitWith:void 0})),ut(`primary`);return}let a=Ob(r),o={...Mb(a),hidden:!0};n(e=>[...e,o]),er(t,()=>({splitWith:o.id})),ar(o.id,a),ut(`primary`)},[ar,er]),vr=(0,R.useCallback)(e=>{et(e),Zn(`yafm.preview.width`,e)},[]),yr=(0,R.useCallback)((e,t,n)=>ot(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),br=(0,R.useCallback)((e,t)=>yr(`gallery`,e,t),[yr]),xr=(0,R.useCallback)((e,t)=>yr(`recycle`,e,t),[yr]),Sr=yn?st===`secondary`?rt??tt:tt??rt:tt,Cr=yn&&st===`secondary`?vt.secondary:vt.primary,wr=G===`files`?Sr:at.kind===G?at.info:null,Tr=G===`files`?Cr>1?ae(e,Cr,`k_1_item_selected`,`count_items_selected`):void 0:at.kind===G?at.note:void 0,Er=(0,R.useRef)(null),Dr=e=>{e.preventDefault();let t=Er.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);d(r),Zn(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Or=(e,t,n)=>{t&&ft({x:e.clientX,y:e.clientY,directory:t,refresh:n})},kr=(0,R.useCallback)((e,t)=>{bt(n=>n[e]===t?n:{...n,[e]:t})},[]),Ar=(0,R.useCallback)(e=>kr(`primary`,e),[kr]),jr=(0,R.useCallback)(e=>kr(`secondary`,e),[kr]),Mr=(e,t)=>{vt[e]!==0&&Dt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Nr=async(e,t=!1)=>{let n=dt;if(ft(null),!n)return;let r=e===null?await Ot(n.directory,t):await Mt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;In(),At(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Pr=(0,R.useCallback)(()=>{let{tabs:e}=Kn.current,t=e.find(e=>e.id===kb(Kn.current));t&&t.index>0&&sr(t.id,t.history[t.index-1],t.index-1)},[sr]),Fr=(0,R.useCallback)(()=>{let{tabs:e}=Kn.current,t=e.find(e=>e.id===kb(Kn.current));t&&t.index<t.history.length-1&&sr(t.id,t.history[t.index+1],t.index+1)},[sr]),Ir=(0,R.useCallback)(()=>{let{tabs:e}=Kn.current,t=e.find(e=>e.id===kb(Kn.current));t&&Db(t)===`files`&&t.listing?.parent&&hr(t.listing.parent)},[hr]),Lr=(0,R.useRef)(null),Rr=(0,R.useCallback)(()=>{for(let e of Kn.current.tabs)e.listing&&ar(e.id,e.listing.path,!0)},[ar]),zr=(0,R.useCallback)(e=>{e.length!==0&&(cn(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),U())},[U]),Br=(0,R.useCallback)(async e=>{let t=await wt(e);t.length!==0&&zr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[zr]),Vr=(0,R.useCallback)(e=>{let t=new Set(e);cn(e=>e.filter(e=>!t.has(e.path)))},[]),Hr=(0,R.useCallback)(async e=>{let t=qn.current;if(!t)return;let n=await wt(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>E(e.path))),i=n.filter(e=>!r.has(E(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};Fe(a),await ct(a),We(e=>e+1)},[]),Ur=(0,R.useCallback)(async e=>{let t=qn.current;if(!t)return;let n=new Set(e.map(E)),r=(t.favorites??[]).filter(e=>!n.has(E(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};Fe(i),await ct(i),We(e=>e+1)},[]),Wr=(0,R.useCallback)(()=>cn([]),[]),Gr=(0,R.useRef)(-1),Kr=(0,R.useCallback)(e=>{Vt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),qt(e.move),e.entries.length>0&&U()},[U]),qr=(0,R.useCallback)(async()=>{if(l.available)try{let e=await xt();Gr.current=e.sequence,Kr(e)}catch{}},[Kr]),Jr=(0,R.useCallback)(async e=>{e.length!==0&&await yt(e,!1)&&await qr()},[qr]),Yr=(0,R.useRef)(sn);Yr.current=sn;let Xr=(0,R.useRef)(en);Xr.current=en;let Zr=(0,R.useRef)(!1);(0,R.useEffect)(()=>{let e=B?.trayAutoShow??!0,t=t=>{e&&sc(t)&&(Xr.current||(Zr.current=!0),U())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{Zr.current&&window.setTimeout(()=>{Zr.current&&Yr.current.length===0&&tn(!1),Zr.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[U,B?.trayAutoShow]),(0,R.useEffect)(()=>{let e=()=>hn(e=>Ab(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Qr=(0,R.useCallback)(async()=>{let e=Yr.current;if(e.length>0){let t=await wt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));cn(e=>e.filter(e=>n.has(e.path)))}await qr()},[qr]),$r=(0,R.useCallback)(()=>{Qr(),Ye(e=>e+1),Rr()},[Qr,Rr]),ei=(0,R.useCallback)(e=>{let t=Ab(e);hn(t),$n(`yafm.tray.position`,t)},[]),ti=(0,R.useCallback)(()=>{Zr.current=!1,en?tn(!1):U()},[U,en]),ni=(0,R.useCallback)(async(t,n,r)=>{let i=await St(t,n,r);i.cancelled||(i.ok?(r&&Vr(t),Ye(e=>e+1),Rr(),qr()):Pa(i.error??e(`the_files_could_not_be_transferred`)))},[Rr,qr,Vr]);(0,R.useEffect)(()=>{if(l.available)return Wt().then(e=>{It.current=e,Nt(e)},()=>void 0),l.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=It.current.find(t=>t.id===e.id);return!t||t.state!==e.state});It.current=n,Nt(n),r&&Ft(!0)})},[]);let ri=(0,R.useCallback)(()=>{Gt().then(()=>Wt().then(e=>{It.current=e,Nt(e)},()=>void 0))},[]);(0,R.useEffect)(()=>{if(!l.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await xt();if(!e||t.sequence===Gr.current)return;Gr.current=t.sequence,Kr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Kr]);let ii=(0,R.useCallback)(async e=>{let t=e?await Rt():await zt();t.ok?(Ye(e=>e+1),Rr()):t.error&&!t.error.startsWith(`Nothing to`)&&Pa(t.error)},[Rr]),ai=(0,R.useRef)(En);(0,R.useEffect)(()=>{ai.current!==En&&(ai.current=En,Rr())},[En,Rr]);let oi=(0,R.useCallback)((e,t)=>{let{tabs:n}=Kn.current,r=n.find(t=>t.id===e);if(!r||Db(r)!==`files`)return;let i=Ob(r),a=qn.current?.defaultView??Se,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||xe.iconSize,gridSize:r.view?.gridSize||a.gridSize||xe.gridSize,sort:r.view?.sort??xe.sort,sortDescending:r.view?.sortDescending??xe.sortDescending,...t};er(e,()=>({view:o})),Lr.current!==null&&window.clearTimeout(Lr.current),Lr.current=window.setTimeout(()=>{Lr.current=null,Ae(i,o)},250)},[er]),si=(0,R.useCallback)(e=>{oi(kb(Kn.current),e)},[oi]),ci=(0,R.useCallback)(e=>{let t=qn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Se,columns:e}};Fe(n),ct(n)},[]),li=(0,R.useCallback)(e=>{let t=qn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Se,showImages:e}};Fe(n),ct(n)},[]),ui=(0,R.useCallback)(e=>{let t=qn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Se,imageStripHeight:e}};Fe(n),ct(n)},[]),di=(0,R.useCallback)((e,t,n,r)=>{let i=Kn.current.tabs.find(t=>t.id===e);if(!i||Db(i)!==`files`||!i.listing)return;let a=Ob(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));er(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),z(a,t,n,r)},[er]),fi=(0,R.useCallback)((e,t)=>{let n=Kn.current.tabs.find(t=>t.id===e);if(!n)return;let r=jb(n,qn.current?.defaultView??Se);oi(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[oi]),pi=(0,R.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),J=(0,R.useCallback)(()=>{Me().then(m,()=>m([]))},[]),mi=(0,R.useCallback)(e=>{let t=(e.openTabs??[]).map(Wp).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...Mb(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),a(r[i].id);for(let e of r)Db(e)===`files`&&ar(e.id,Ob(e),!0);return!0},[ar]),hi=(0,R.useCallback)(e=>{let t=Yn.current;if(Yn.current=[],t.length===0)return;let n=t.filter(e=>!Sb.has(e));for(let e of t)n.includes(e)||Cb(e);if(n.length===0)return;let{tabs:r}=Kn.current;if(!e&&r.length===1&&r[0].fresh){or(r[0].id,n[0]),Cb(n[0]);for(let e of n.slice(1))cr(e),Cb(e);return}let i=n.map(e=>{let t=cr(e);return Cb(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[cr,or]),gi=(0,R.useCallback)(()=>{Xe().then(e=>{Fe(e),Pe(e.recentLimit);let t={...Kt,...e.shortcuts};Be(t),Jt(t.openInNewTab),We(e=>e+1),Jn.current||(Jn.current=!0,hi(e.restoreTabs&&mi(e)))},()=>{Pe(10),Jn.current=!0,hi(!1)})},[hi,mi]),_i=(0,R.useCallback)(()=>{Ve().then(Ce,()=>Ce([]))},[]),bi=(0,R.useCallback)(()=>{Ne().then(_,()=>_([]))},[]),wi=t.filter(e=>!e.hidden),Ei=wi.map(Eb),Di=Ei.join(`
`),Oi=Math.max(wi.findIndex(e=>e.id===i),0);(0,R.useEffect)(()=>{if(!B?.restoreTabs)return;let e=setTimeout(()=>void lt(Ei,Oi),700);return()=>clearTimeout(e)},[Di,Oi,B?.restoreTabs]),(0,R.useEffect)(()=>{let{tabs:e,activeId:t}=Kn.current,n=e.find(e=>e.id===t);n&&n.fresh&&Db(n)===`files`&&ar(n.id,Ob(n),!0),J(),gi(),bi(),F().then(y,()=>y(null))},[ar,J,gi,bi]),(0,R.useEffect)(()=>{if(ue().then(S,()=>S(null)),l.available)return l.on(e=>{let t=e;t.type===`update.checked`&&t.data&&S(t.data)})},[]),(0,R.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&c({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Pa(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Pa(n.data.error??e(`pairing_failed`))}})},[e]),(0,R.useEffect)(()=>{let e=setInterval(bi,3e4);return()=>clearInterval(e)},[bi]),(0,R.useEffect)(()=>{G===`home`&&(_i(),bi())},[G,W.id,_i,bi]),(0,R.useEffect)(()=>{if(!l.available)return;let e=l.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Kn.current,i=t.data.startup===!0;i&&Sb.has(n)?Cb(n):i&&!Jn.current?Yn.current.includes(n)||Yn.current.push(n):(i&&r.length===1&&r[0].fresh?or(r[0].id,n):Up(n)?or(kb(Kn.current),n):cr(n),i&&Cb(n))});return l.send({type:`app.ready`}),e},[or,cr]),(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,R.useEffect)(()=>{let e=e=>{if($t(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Pr();return}if(e.key===`BrowserForward`){e.preventDefault(),Fr();return}if(e.key===`Escape`&&A.open){e.preventDefault(),In();return}let t=Xt(e);if(t===V.closeTab)e.preventDefault(),pr(kb(Kn.current));else if(t===V.newTab)e.preventDefault(),cr();else if(t===V.reopenTab)e.preventDefault(),mr();else if(t===V.goBack)e.preventDefault(),Pr();else if(t===V.goForward)e.preventDefault(),Fr();else if(t===V.goUp)e.preventDefault(),Ir();else if(t===V.find)e.preventDefault(),G===`files`?Ln():zn();else if(t===V.location)e.preventDefault(),Ke(e=>e+1);else if(t===V.home){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&hr(t)}else t===V.iconsView?(e.preventDefault(),G===`files`&&si({mode:`grid`})):t===V.detailsView?(e.preventDefault(),G===`files`&&si({mode:`list`})):t===V.nextTab?(e.preventDefault(),gr(1)):t===V.previousTab?(e.preventDefault(),gr(-1)):t===V.hidden||t===`alt+.`?(e.preventDefault(),qe().then(()=>{Ye(e=>e+1),Rr()})):t===V.undo?(e.preventDefault(),ii(!0)):t===V.redo?(e.preventDefault(),ii(!1)):t===V.splitView?(e.preventDefault(),_r()):G!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Wn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[V,G,A.open,pr,mr,cr,Pr,Fr,Ir,Ln,zn,In,Wn,si,gr,hr,p,Rr,ii,_r]),(0,R.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Pr()):(e.button===4||e.button===9)&&(e.preventDefault(),Fr())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Pr,Fr]),(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Pr();break;case`forward`:Fr()}})},[Pr,Fr]);let ki=(0,R.useMemo)(()=>{let e=new Set;for(let n of t){if(Db(n)!==`files`)continue;let t=Ob(n);if(t&&!Hc(t)){if(T(t)){let n=Pb(D(t));n&&e.add(n)}else e.add(t)}}return[...e]},[t]),Ai=ki.join(`\0`);(0,R.useEffect)(()=>{l.available&&l.send({type:`fs.watch`,payload:{paths:ki,owner:`app`}})},[Ai,i]);let Mi=Db(Cn)===`files`?Ob(Cn):``;(0,R.useEffect)(()=>{l.available&&l.send({type:`fs.focus`,payload:{path:Mi||null}})},[Mi]),(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=Kn.current.tabs.filter(e=>Db(e)===`files`&&P(Ob(e),n)),i=Kn.current.tabs.filter(e=>{let t=Ob(e);return Db(e)===`files`&&t.length>0&&T(t)&&P(D(t),n)});if(r.length!==0||i.length!==0){fn(n);for(let e of i){let t=Kn.current.tabs.find(t=>t.id===e.id),r=t?Ob(t):``;t&&Db(t)===`files`&&!t.loading&&T(r)&&P(D(r),n)&&ar(e.id,r,!0)}r.length!==0&&Te(n,!1,En).then(e=>{for(let t of r){let n=Kn.current.tabs.find(e=>e.id===t.id);n&&Db(n)===`files`&&P(Ob(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=Kn.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Db(n)===`files`&&P(Ob(n),e.path)&&er(t.id,()=>({listing:e}))},300):er(t.id,()=>({listing:e})))}},()=>void 0)}})},[En,ar,er]);let Ni=W.index>0,Pi=W.index<W.history.length-1,Fi=(e,t)=>{let n=jb(e,wn),r=e.listing?.path??e.history[e.index]??``,i=T(r),a=i&&ee(r);return(0,q.jsx)(Sl,{confirmDelete:B?.confirmDelete??!1,cutPaths:Qt,previewVideoAudio:B?.previewVideoAudio??!1,previewVideoAutoplay:B?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?nt:it,onActivate:()=>ut(t?`primary`:`secondary`),enableShortcuts:(!yn||(t?st===`primary`:st===`secondary`))&&(!i||a),error:e.error,find:e.id===Cn.id?{...A,currentPath:Fn<0?null:Pn[Fn]}:void 0,selectMatchesToken:e.id===Cn.id?se:0,imageStripHeight:An,listing:e.listing,loading:e.loading,onImageStripHeight:ui,readOnly:i&&!a||Hc(e.listing?.path??``),onOpen:(t,n)=>{n?cr(t):ar(e.id,t)},onOpenFile:(t,n)=>{Hc(t)?qc(t).catch(e=>void Pa(Nb(e))):ne(t)?B?.archiveHandler??!1?n?cr(t):ar(e.id,t):we(t):T(t)?(async()=>{let e=await De(t,ve.current,Ib(t));if(!e.path&&on(e.error)){let n=D(t),r=nn(n);r&&an(n);let i=await Ia(n,!!r);i&&(rn(n,i),e=await De(t,ve.current,i))}e.path?we(e.path):e.error&&Pa(e.error)})():we(t)},onRefresh:()=>{let t=e.listing?.path;t&&lr(t)},onRename:ur,onSelectionCountChange:t?Ar:jr,onSetTags:(t,n,r)=>di(e.id,t,n,r),selectionMenuRequest:t?Ct.primary:Ct.secondary,onSort:t=>fi(e.id,t),onPaste:$r,onClipboardChanged:()=>void qr(),onTransfer:ni,onAddToTray:e=>void Br(e),onAddFavorite:e=>void Hr(e),onRemoveFavorite:e=>void Ur(e),favoritePaths:Le,onExtractArchive:(e,t)=>void Ui(e,t),openOnSingleClick:B?.openOnSingleClick??!1,pendingRename:kt&&t===(st===`primary`)&&P(kt.directory,e.listing?.path??``)?kt.path:null,pendingRenameToken:kt?.token??0,refreshToken:Je,shortcuts:V,showCheckboxes:B?.showCheckboxes??!0,showImages:kn,view:n})},Ii=A.open&&(0,q.jsx)(Qd,{current:Fn,focusToken:ie,matchCase:A.matchCase,mode:A.mode,onClose:In,onMatchCase:()=>j(e=>({...e,matchCase:!e.matchCase})),onMode:()=>j(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Gn(1),onPrevious:()=>Gn(-1),onQuery:e=>j(t=>({...t,query:e})),onRegex:()=>j(e=>({...e,regex:!e.regex})),query:A.query,regex:A.regex,total:Pn.length,onSelectMatches:Pn.length>0?()=>I(e=>e+1):void 0}),Li=G===`files`&&T(K),Ri=Li&&ee(K),Bi=Li&&W.listing?.archiveEncrypted===!0,Vi=async(t,n)=>{let r=D(t),i=await Ee(r,n,ve.current,Ib(r));if(!i.ok&&on(i.error)){let e=nn(r);e&&an(r);let t=await Ia(r,!!e);t&&(rn(r,t),i=await Ee(r,n,ve.current,t))}i.ok?(lr(n),dn(),ar(W.id,n,!0)):Pa(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Ui=async(e,t)=>{let n=D(e),r=Pb(n);if(!r)return;if(t===`choose`){let e=await ka(r);e&&await Vi(n,e);return}let i=t===`named`;if(t===`auto`){let e=P(n,K)?W.listing?.entries??[]:(await Te(n,!1,!1,ve.current,Ib(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${Fb(n)}`:r;await Vi(n,o)},Wi=async e=>{Li&&await Ui(K,e)},Gi=async()=>{Li&&await Ui(K,`choose`)},Ki=(0,q.jsxs)(Ub,{children:[(0,q.jsx)(Wb,{"data-shortcut":Zt(V.goBack),disabled:!Ni,onClick:e=>{W.index>0&&Yt(e)?cr(W.history[W.index-1]):Pr()},title:e(`back`),type:`button`,children:(0,q.jsx)(Si,{})}),(0,q.jsx)(Wb,{"data-shortcut":Zt(V.goForward),disabled:!Pi,onClick:e=>{W.index<W.history.length-1&&Yt(e)?cr(W.history[W.index+1]):Fr()},title:e(`forward`),type:`button`,children:(0,q.jsx)(Ci,{})}),(0,q.jsx)(Wb,{"data-shortcut":Zt(V.goUp),disabled:G!==`files`||!_n,onClick:e=>{_n&&(Yt(e)?cr(_n):hr(_n))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(yi,{})}),(0,q.jsx)(Gp,{focusToken:Ge,icon:Mn,label:G===`files`?void 0:e(ub[G]),onContextMenu:G===`files`?(e,t,n)=>ht({x:t,y:n,path:e}):void 0,onNavigate:hr,path:G===`files`?K:gn}),G===`files`&&(!Li||Ri)&&(0,q.jsx)(Wb,{onClick:e=>Or(e,K,()=>void ar(W.id,K,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(xi,{})}),(0,q.jsx)(Wb,{"data-shortcut":Zt(V.find),onClick:()=>G===`files`?Ln():zn(),title:e(`search`),type:`button`,children:(0,q.jsx)(vi,{})}),vt.primary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(qb,{}),(0,q.jsx)(Wb,{onClick:e=>Mr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(Ta,{})})]}),Li&&(0,q.jsxs)(Gb,{children:[(0,q.jsx)(qb,{}),Bi&&(0,q.jsxs)(Kb,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(Ea,{size:12}),e(`encrypted`)]}),(0,q.jsx)(Wb,{onClick:()=>void Gi(),onContextMenu:e=>{e.preventDefault(),pt({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,q.jsx)(Hi,{})}),(0,q.jsx)(To,{icon:(0,q.jsx)(ma,{size:15}),onChange:e=>{let t=Number(e);_e(t),ve.current=t,Li&&ar(W.id,K,!0)},options:Tb.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(Tb.find(e=>e.value===String(ge))?.label??`auto`)}`,value:String(ge)})]})]}),qi=ce.open?{...ce,index:pe}:null;return(0,q.jsx)(Rn,{value:On,children:(0,q.jsxs)(zb,{$rounded:te,children:[(0,q.jsx)(fd,{settings:B,theme:Ie}),(0,q.jsx)(zy,{activeId:W.id,onClose:pr,onNewTab:()=>cr(),onReorder:pi,onTransferToTab:ni,onSelect:a,onViewChange:si,onColumns:ci,onShowImages:li,showImages:kn,tasks:jt,onClearTasks:ri,activityOpen:Pt,onActivityOpenChange:Ft,trayCount:sn.length+Bt.length,trayVisible:en,onToggleTray:ti,split:yn,canSplit:G===`files`,onToggleSplit:_r,details:Ze,canDetails:G===`files`||G===`recycle`||G===`gallery`,onToggleDetails:()=>Qe(e=>!e),currentFolder:G===`files`&&!Hc(K)?K:``,shortcuts:V,view:Tn,tabs:t.filter(e=>!e.hidden).map(n=>{let r=Db(n),i=Ob(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?Ob(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Bn(On,i):void 0,archive:r===`files`&&T(i),split:!!a,title:r===`files`?Vn(On,i,x(i)||e(`files`)):e(ub[r]),partner:a?{title:Vn(On,o,x(o)||e(`files`)),place:Bn(On,o)}:void 0}})}),(0,q.jsxs)(Bb,{children:[(0,q.jsx)(J_,{activeKind:G,currentPath:G===`files`?gn:``,drives:h,historyVersion:Re,onNavigate:hr,onOpenView:fr,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:be,recentLimit:ke,version:He}),(0,q.jsxs)(Vb,{children:[(0,q.jsxs)($b,{children:[(0,q.jsxs)(ex,{children:[G!==`files`&&Ki,(0,q.jsxs)(Hb,{children:[G!==`files`&&ce.open&&(0,q.jsx)(Qd,{current:pe,focusToken:de,matchCase:ce.matchCase,mode:ce.mode,onClose:Hn,onMatchCase:()=>le(e=>({...e,matchCase:!e.matchCase})),onMode:()=>le(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Un(1),onPrevious:()=>Un(-1),onQuery:e=>le(t=>({...t,query:e})),onRegex:()=>le(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:ce.query,regex:ce.regex,total:he,onSelectMatches:G===`gallery`||G===`recycle`?()=>I(e=>e+1):void 0}),G===`files`?yn&&vn?(0,q.jsxs)(Yb,{ref:Er,children:[(0,q.jsxs)(Xb,{style:{flex:u},children:[(0,q.jsxs)(Jb,{$active:st===`primary`,onPointerDown:()=>ut(`primary`),children:[(0,q.jsx)(Wb,{"data-shortcut":Zt(V.goBack),disabled:!Ni,onClick:e=>{let t=W.index-1;t<0||(Yt(e)?cr(W.history[t]):sr(W.id,W.history[t],t))},title:e(`back`),type:`button`,children:(0,q.jsx)(Si,{})}),(0,q.jsx)(Wb,{"data-shortcut":Zt(V.goForward),disabled:!Pi,onClick:e=>{let t=W.index+1;t>=W.history.length||(Yt(e)?cr(W.history[t]):sr(W.id,W.history[t],t))},title:e(`forward`),type:`button`,children:(0,q.jsx)(Ci,{})}),(0,q.jsx)(Wb,{"data-shortcut":Zt(V.goUp),disabled:!_n,onClick:e=>{_n&&(Yt(e)?cr(_n):ar(W.id,_n))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(yi,{})}),(0,q.jsx)(Gp,{focusToken:st===`primary`?Ge:void 0,onContextMenu:(e,t,n)=>ht({x:t,y:n,path:e}),onNavigate:(e,t)=>t?cr(e):void ar(W.id,e),path:K}),(0,q.jsx)(Wb,{onClick:e=>Or(e,K,()=>void ar(W.id,K,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(xi,{})}),(0,q.jsx)(Wb,{"data-shortcut":Zt(V.find),onClick:Ln,title:e(`search`),type:`button`,children:(0,q.jsx)(vi,{})}),vt.primary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(qb,{}),(0,q.jsx)(Wb,{onClick:e=>Mr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(Ta,{})})]})]}),Fi(W,!0),st===`primary`&&Ii]}),(0,q.jsx)(Zb,{onDoubleClick:()=>d(.5),onPointerDown:Dr,title:e(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(Xb,{$enter:!0,style:{flex:1-u},children:[(0,q.jsxs)(Jb,{$active:st===`secondary`,onPointerDown:()=>ut(`secondary`),children:[(0,q.jsx)(Wb,{"data-shortcut":Zt(V.goBack),disabled:vn.index<=0,onClick:e=>{let t=vn.index-1;t<0||(Yt(e)?cr(vn.history[t]):sr(vn.id,vn.history[t],t))},title:e(`back`),type:`button`,children:(0,q.jsx)(Si,{})}),(0,q.jsx)(Wb,{"data-shortcut":Zt(V.goForward),disabled:vn.index>=vn.history.length-1,onClick:e=>{let t=vn.index+1;t>=vn.history.length||(Yt(e)?cr(vn.history[t]):sr(vn.id,vn.history[t],t))},title:e(`forward`),type:`button`,children:(0,q.jsx)(Ci,{})}),(0,q.jsx)(Wb,{"data-shortcut":Zt(V.goUp),disabled:!xn,onClick:e=>{xn&&(Yt(e)?cr(xn):ar(vn.id,xn))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(yi,{})}),(0,q.jsx)(Gp,{focusToken:st===`secondary`?Ge:void 0,onContextMenu:(e,t,n)=>ht({x:t,y:n,path:e}),onNavigate:(e,t)=>t?cr(e):void ar(vn.id,e),path:bn}),(0,q.jsx)(Wb,{onClick:e=>Or(e,bn,()=>void ar(vn.id,bn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(xi,{})}),(0,q.jsx)(Wb,{"data-shortcut":Zt(V.find),onClick:Ln,title:e(`search`),type:`button`,children:(0,q.jsx)(vi,{})}),vt.secondary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(qb,{}),(0,q.jsx)(Wb,{onClick:e=>Mr(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(Ta,{})})]})]}),Fi(vn,!1),st===`secondary`&&Ii]})]}):(0,q.jsxs)(q.Fragment,{children:[Ki,(0,q.jsxs)(Qb,{children:[Fi(W,!0),Ii]})]}):G===`home`?(0,q.jsx)(Fp,{drives:h,find:qi,historyVersion:Re,onSearchMatches:L,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:bi,onHistoryChanged:()=>ze(e=>e+1),onAddToTray:e=>void Br(e),onAddFavorite:e=>void Hr(e),onRemoveFavorite:e=>void Ur(e),favoritePaths:Le,onExtractArchive:(e,t)=>void Ui(e,t),settingsVersion:He,theme:Ie,onOpen:hr,onLayoutChanged:gi,onPlacesChanged:m,onRecentCleared:_i,places:p,recent:be,recentLimit:ke,visibilityVersion:Je}):G===`settings`?(0,q.jsx)(wh,{appInfo:v,find:qi,focusSection:C,onSearchMatches:L,onSettingsChanged:gi}):G===`gallery`?(0,q.jsx)(P_,{confirmDelete:B?.confirmDelete??!1,find:qi,onSearchMatches:L,openOnSingleClick:B?.openOnSingleClick??!1,onAddToTray:e=>void Br(e),onAddFavorite:e=>void Hr(e),onRemoveFavorite:e=>void Ur(e),favoritePaths:Le,onExtractArchive:(e,t)=>void Ui(e,t),shortcuts:V,showCheckboxes:B?.showCheckboxes??!0,selectMatchesToken:se,onPreviewChange:br,view:Tn}):(0,q.jsx)(cm,{find:qi,onOpenLocation:hr,onShowDetails:()=>Qe(!0),platform:v?.platform,selectMatchesToken:se,onPreviewChange:xr})]},G)]}),(G===`files`||G===`gallery`||G===`recycle`)&&(0,q.jsx)(cs,{emptyNote:e(`nothing_selected`),info:wr,onWidth:vr,open:Ze,selectionNote:Tr,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,width:$e})]}),(0,q.jsxs)(ax,{children:[(0,q.jsx)(`span`,{children:G===`files`&&W.listing?Lb(e,W.listing):``}),v?(0,q.jsxs)(tx,{children:[(0,q.jsxs)(`span`,{children:[`v`,v.version,` · `,v.platform]}),v.debug&&(0,q.jsx)(ix,{children:`debug`}),b?.available&&(0,q.jsxs)(nx,{onClick:()=>{w(`updates`),fr(`settings`)},title:e(`version_version_is_available`,{version:b.latest}),type:`button`,children:[(0,q.jsx)(rx,{}),e(`update_available`)]})]}):(0,q.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,q.jsx)(fc,{clipboardItems:Bt,clipboardMove:Ht,currentDirectory:G===`files`?gn:``,items:sn,onAdd:e=>void Br(e),onClear:Wr,onClose:()=>tn(!1),onCopyToClipboard:e=>void Jr(e),onPosition:ei,onRemove:Vr,onTransfer:ni,position:mn,visible:en}),dt&&(0,q.jsx)(So,{creationOnly:!0,directory:dt.directory,menu:{x:dt.x,y:dt.y,paths:[],background:!0},onClose:()=>ft(null),onCreateFile:e=>void Nr(e),onCreateFolder:e=>void Nr(null,e),shortcuts:V}),mt&&(0,q.jsx)(So,{allowCompression:!0,directory:Pb(mt.path)??mt.path,menu:{x:mt.x,y:mt.y,paths:[mt.path]},onAddToTray:e=>void Br(e),onAddFavorite:e=>void Hr(e),onRemoveFavorite:e=>void Ur(e),favoritePaths:Le,onExtractArchive:(e,t)=>void Ui(e,t),onArchiveCreated:e=>{e&&lr(Pb(mt.path)??mt.path)},onClose:()=>ht(null),onCompressTo:(e,t)=>_t({paths:e,name:t}),onCopy:(e,t)=>void yt(e,t),onDelete:e=>void Et(e,!1).then(()=>lr(Pb(mt.path)??mt.path)),onOpen:(e,t)=>t?cr(e):void ar(W.id,e),onOpenFile:e=>void we(e),onPaste:e=>void Tt(e).then(t=>{t.ok&&lr(e)}),onRefresh:()=>lr(mt.path),shortcuts:V,target:{path:mt.path,isDirectory:!0}}),gt&&(0,q.jsx)(Ro,{initialDirectory:Pb(mt?.path??K)??K,initialName:gt.name,onCancel:()=>_t(null),onCompress:async e=>{let t=await Ut(gt.paths,e);return!t.ok&&t.error&&Pa(t.error),t.ok}}),H&&(0,q.jsx)(lo,{items:[{label:e(`extract_here`),onSelect:()=>void Wi(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Wi(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Wi(`auto`)}],onClose:()=>pt(null),x:H.x,y:H.y}),ln&&(0,q.jsx)(_d,{action:ln.prompt.action,delaySeconds:ln.prompt.delaySeconds,hits:ln.prompt.hits,onCancel:()=>{ln.resolve(!1),un(null)},onConfirm:()=>{ln.resolve(!0),un(null)},permanent:ln.prompt.permanent},ln.id),(0,q.jsx)(Fd,{}),(0,q.jsx)(Hd,{}),s&&(0,q.jsx)(db,{code:s.code,deviceName:s.deviceName,onAccept:()=>{zc(s.requestId,!0),c(null)},onReject:()=>{zc(s.requestId,!1),c(null)}}),(0,q.jsx)(ab,{}),(0,q.jsx)(k,{})]})})}var zb=v.div`
    position: relative;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background: var(--bg-primary);

    html.has-wallpaper & {
        background: transparent;
    }

    /* An undecorated window gets no frame from the compositor, so the corners are drawn here. */
    border-radius: ${({$rounded:e})=>e?`12px`:`0`};
    box-shadow: ${({$rounded:e})=>e?`inset 0 0 0 1px var(--border-color), 0 24px 70px rgba(0, 0, 0, 0.38)`:`none`};
`,Bb=v.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex: 1;
    min-height: 0;
    background: radial-gradient(1200px 650px at 12% -10%, rgba(var(--accent-secondary-rgb), 0.12), transparent 60%),
    radial-gradient(900px 520px at 110% 18%, rgba(var(--accent-rgb), 0.09), transparent 55%),
    linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-media) 100%);

    html.has-wallpaper & {
        background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.12), rgba(var(--bg-rgb), 0.3));

        /* The light artwork needs no veil: its own colours are pale enough for dark text. */
        html[data-theme="light"] & {
            background: transparent;
        }
    }
`,Vb=v.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Hb=v.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${io}
`,Ub=v.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Wb=v.button`
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 130ms ease, border-color 130ms ease, background 130ms ease, transform 130ms ease;

    &:hover:not(:disabled) {
        color: var(--text-primary);
        border-color: var(--border-color-hover);
        background: rgba(var(--accent-rgb), 0.10);
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.32;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,Gb=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Kb=v.span`
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    gap: 5px;
    padding: 3px 9px;
    border: 1px solid rgba(251, 191, 36, 0.45);
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.12);
    color: #fbbf24;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.03em;
    white-space: nowrap;
`,qb=v.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Jb=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Yb=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Xb=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?so:``}
`,Zb=v.div`
    position: relative;
    width: 7px;
    flex-shrink: 0;
    cursor: col-resize;
    background: transparent;
    touch-action: none;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 3px;
        width: 1px;
        background: var(--border-color);
        transform-origin: center;
        transition: background 120ms ease, box-shadow 120ms ease;
        ${co}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,Qb=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,$b=v.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,ex=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,tx=v.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,nx=v.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 9px;
    border: 1px solid rgba(var(--accent-rgb), 0.55);
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
    font: inherit;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
    animation: updatePulse 2.4s ease-in-out infinite;

    &:hover {
        border-color: var(--accent-primary);
        background: rgba(var(--accent-rgb), 0.32);
    }

    &:focus-visible {
        outline: 1px solid var(--border-color-focus);
        outline-offset: 2px;
    }

    @keyframes updatePulse {
        0%, 100% {
            box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0);
        }
        50% {
            box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.16);
        }
    }
`,rx=v.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,ix=v.span`
    padding: 1px 6px;
    border: 1px solid rgba(251, 191, 36, 0.5);
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.14);
    color: #fbbf24;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,ax=v.footer`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 7px 20px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
    font-variant-numeric: tabular-nums;
`;function ox({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:s,showImages:c,save:u=!1,initialName:d=``,defaultExtension:f=``,theme:p,onCancel:m,onSelect:h}){let g=o(),_=cl(`picker`),v=t===`file`,y=r??[],[S,C]=(0,R.useState)(e),[w,T]=(0,R.useState)(null),[ee,D]=(0,R.useState)(!0),[O,k]=(0,R.useState)(null),[te,A]=(0,R.useState)(()=>new Set),[j,M]=(0,R.useState)(a??[]),[ne,N]=(0,R.useState)([]),[re,ie]=(0,R.useState)([]),[ae,oe]=(0,R.useState)([]),[se,P]=(0,R.useState)([]),[F,I]=(0,R.useState)(d),[ce,le]=(0,R.useState)(null),[ue,de]=(0,R.useState)(y.length===0),[fe,pe]=(0,R.useState)(`files`),[me,he]=(0,R.useState)(0),[L,ge]=(0,R.useState)(Sn),[_e,ve]=(0,R.useState)(0),[ye,be]=(0,R.useState)(0),[Ce,we]=(0,R.useState)(0),[Ee,De]=(0,R.useState)(null),[Oe,ke]=(0,R.useState)(null),[Ae,z]=(0,R.useState)(0),[je,Pe]=(0,R.useState)(null),[B,Fe]=(0,R.useState)(Se.imageStripHeight);(0,R.useEffect)(()=>{Xe().then(Pe,()=>Pe(null))},[]),(0,R.useEffect)(()=>{a?M(a):Me().then(M,()=>M([]))},[a]),(0,R.useEffect)(()=>{Ne().then(N,()=>N([])),Ve().then(ie,()=>ie([]))},[]),(0,R.useEffect)(()=>{let e=!0;return D(!0),k(null),A(new Set),u||I(v?``:x(S)),Te(S||void 0,!1).then(t=>{e&&(T(t),C(t.path),u||I(v?``:x(t.path)),D(!1))},t=>{e&&(k(t instanceof Error?t.message:String(t)),D(!1))}),()=>{e=!1}},[S,me,v]),(0,R.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),ge(e=>({...e,open:!0})),ve(e=>e+1);return}if(e.key===`Escape`){L.open?(ge(e=>({...e,open:!1,query:``})),be(0)):m();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Le();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Re();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),ge(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),ve(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||$e()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,R.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Le()):(e.button===4||e.button===9)&&(e.preventDefault(),Re())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Ie=e=>{let t=e.trim();t.length!==0&&E(t)!==E(S)&&(oe(e=>[...e,S]),P([]),pe(`files`),C(t))},Le=()=>{let e=ae.at(-1);e!==void 0&&(oe(e=>e.slice(0,-1)),P(e=>[S,...e]),C(e))},Re=()=>{let e=se[0];e!==void 0&&(P(e=>e.slice(1)),oe(e=>[...e,S]),C(e))};(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:Le();break;case`forward`:Re()}})});let ze=w?.path??S,V=w?.parent??(S?b(S):null);(0,R.useEffect)(()=>{l.available&&ze&&l.send({type:`fs.watch`,payload:{paths:[ze],owner:`picker`}})},[ze]),(0,R.useEffect)(()=>{if(l.available&&ze)return l.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&E(t.data.path)===E(ze)&&Te(ze,!1).then(e=>{T(e);let t=new Set(e.entries.map(e=>e.fullPath));A(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[ze]);let Be=(w?.entries??[]).filter(e=>e.isDirectory||v&&(ue||y.length===0||y.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),He=w?{...w,entries:Be}:null,Ue=L.open&&L.query.length>0,We=(0,R.useMemo)(()=>Ue?Be.filter(e=>jn(e.name,L)).map(e=>e.fullPath):[],[Ue,Be,L]);(0,R.useEffect)(()=>{be(0)},[L.query,L.matchCase,L.regex,w?.path]);let Ge=We.length===0?-1:Math.min(ye,We.length-1),Ke=(0,R.useMemo)(()=>({...L,currentPath:Ge>=0?We[Ge]:null}),[L,Ge,We]),qe=je?.defaultView??Se,Je=s??{mode:qe.mode,iconSize:qe.iconSize,gridSize:qe.gridSize,sort:`name`,sortDescending:!1,columns:qe.columns??[`type`,`size`,`modified`]},Ye=(c??qe.showImages)&&Je.mode===`list`,Ze=F.trim(),Qe=Ze.length>0?cx(Ze)?Ze:sx(ze,Ze):null,$e=()=>{if(ee||O)return;if(u){let e=Ze;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){Pa(g(`the_file_name_is_not_valid`));return}let t=f.length>0&&!/\.[^.]*$/.test(e)?f.startsWith(`.`)?f:`.${f}`:``,n=cx(e)?e+t:sx(ze,e+t);wt([n]).then(e=>e[0]?.exists?le(n):h([n]),()=>h([n]));return}let e=n?[...te]:[...te].slice(0,1);e.length>0?h(e):Qe!==null&&Ze!==x(ze)?h([Qe]):!v&&ze&&h([ze])},et=(0,R.useCallback)(e=>{A(new Set(e)),e.length===1?I(x(e[0])):u||I(e.length===0&&!v?x(ze):``)},[ze,v,u]),tt=e=>{w?.entries.find(t=>t.fullPath===e)?.isDirectory?Ie(e):u?I(x(e)):v&&h([e])},nt=e=>I(e),rt=async e=>{let t=Ee;if(De(null),!t||!ze)return;let n=e===null?await Ot(ze):await Mt(ze,e);n.ok&&n.path!==null&&(ge(e=>({...e,open:!1,query:``})),e!==null&&de(!0),he(e=>e+1),window.setTimeout(()=>{ke(n.path),z(e=>e+1)},120))},it=()=>{ge(e=>({...e,open:!0})),ve(e=>e+1)},at=e=>{be(t=>We.length===0?0:(t+e+We.length)%We.length)},ot=e=>(0,q.jsxs)(vx,{children:[(0,q.jsxs)(yx,{children:[(0,q.jsx)(bx,{children:g(v||u?`file_name`:`folder_3`)}),(0,q.jsx)(xx,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),$e())},spellCheck:!1,value:F}),v&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(bx,{children:g(`files_of_type`)}),(0,q.jsx)(To,{onChange:e=>de(e===`all`),options:[...y.length>0?[{value:`supported`,label:`${g(`supported_files`)} (${y.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${g(`all_files`)} (*.*)`}],value:ue?`all`:`supported`})]})]}),(0,q.jsxs)(Sx,{children:[(0,q.jsx)(Cx,{onClick:m,type:`button`,children:g(`cancel`)}),(0,q.jsxs)(Cx,{$primary:!0,disabled:ee||O!==null||(u||v&&te.size===0)&&Ze.length===0,onClick:$e,type:`button`,children:[(0,q.jsx)(Mi,{size:12}),g(u?`save_as`:v?`select_this_file`:`select_this_folder`)]})]}),(0,q.jsx)(Zo,{confirmLabel:g(`overwrite`),message:g(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>le(null),onConfirm:()=>{let e=ce;le(null),e&&h([e])},open:ce!==null,title:g(`overwrite`)})]}),st=(0,q.jsxs)(ux,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,q.jsxs)(dx,{children:[(0,q.jsxs)(fx,{children:[(0,q.jsx)(hi,{size:16}),g(u?`save_as`:v?`choose_a_file`:`choose_a_folder`)]}),(0,q.jsx)(px,{onClick:m,title:g(`cancel`),type:`button`,children:(0,q.jsx)(Ni,{size:12})})]}),(0,q.jsxs)(mx,{children:[(0,q.jsx)(J_,{activeKind:fe===`overview`?`home`:fe===`gallery`?`gallery`:`files`,currentPath:ze,drives:ne,hiddenViews:v?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:j.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Ie(e),onOpenView:e=>{e===`home`?(A(new Set),I(v?``:x(ze)),pe(`overview`)):e===`gallery`&&v&&(A(new Set),I(``),pe(`gallery`))},places:j,recent:re,recentLimit:10}),(0,q.jsx)(hx,{children:fe===`overview`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Fp,{drives:ne,theme:p,historyVersion:0,homePath:j.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Ie(e),onPick:v?e=>h([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:et,places:j,readOnly:!0,recent:re,recentLimit:10,visibilityVersion:0}),ot(I)]}):fe===`gallery`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(P_,{onPick:e=>h([e]),onSelectionChange:et,showCheckboxes:je?.showCheckboxes??!0,view:{...xe,columns:[]}}),ot(I)]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(gx,{children:[(0,q.jsx)(_x,{disabled:ae.length===0,onClick:Le,title:g(`back`),type:`button`,children:(0,q.jsx)(Si,{})}),(0,q.jsx)(_x,{disabled:se.length===0,onClick:Re,title:g(`forward`),type:`button`,children:(0,q.jsx)(Ci,{})}),(0,q.jsx)(_x,{disabled:!V,onClick:()=>V&&Ie(V),title:g(`up_one_level`),type:`button`,children:(0,q.jsx)(yi,{})}),(0,q.jsx)(Gp,{onNavigate:Ie,path:ze}),(0,q.jsx)(_x,{onClick:e=>De({x:e.clientX,y:e.clientY}),title:g(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(xi,{})}),(0,q.jsx)(_x,{onClick:it,title:g(`search`),type:`button`,children:(0,q.jsx)(vi,{})}),_.available&&(0,q.jsx)(_x,{onClick:e=>_.open(e.clientX,e.clientY),title:g(`selection_menu`),type:`button`,children:(0,q.jsx)(Ta,{})})]}),L.open&&(0,q.jsx)(Qd,{current:Ge,focusToken:_e,matchCase:L.matchCase,mode:L.mode,onClose:()=>{ge(e=>({...e,open:!1,query:``})),be(0)},onMatchCase:()=>ge(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ge(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>at(1),onPrevious:()=>at(-1),onQuery:e=>ge(t=>({...t,query:e})),onRegex:()=>ge(e=>({...e,regex:!e.regex})),query:L.query,regex:L.regex,total:We.length,onSelectMatches:()=>we(e=>e+1)}),(0,q.jsx)(Sl,{allowBackgroundMenu:!0,confirmDelete:je?.confirmDelete??!1,enableShortcuts:!0,error:O,find:Ke,selectMatchesToken:Ce,imageStripHeight:B,loading:ee,listing:He,onImageStripHeight:Fe,onOpen:tt,onOpenFile:tt,onRefresh:()=>he(e=>e+1),onSelectionChange:et,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:je?.openOnSingleClick??!1,refreshToken:me,pendingRename:Oe,pendingRenameToken:Ae,showCheckboxes:je?.showCheckboxes??!0,showDetails:!1,showImages:Ye,singleSelect:!n,view:Je}),ot(nt)]})})]}),Ee&&(0,q.jsx)(So,{creationOnly:!0,directory:ze,menu:{x:Ee.x,y:Ee.y,paths:[],background:!0},onClose:()=>De(null),onCreateFile:v?e=>void rt(e):void 0,onCreateFolder:()=>void rt(null),shortcuts:Kt})]});return i?st:(0,Ka.createPortal)((0,q.jsx)(lx,{onPointerDown:e=>{e.target===e.currentTarget&&m()},children:st}),document.body)}function sx(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function cx(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var lx=v.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${so}
`,ux=v.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:qa}
    ${({$inline:e})=>e?``:no}
`,dx=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,fx=v.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,px=v.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,mx=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,hx=v.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,gx=v.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,_x=v.button`
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 130ms ease, border-color 130ms ease, background 130ms ease, transform 130ms ease;

    &:hover:not(:disabled) {
        color: var(--text-primary);
        border-color: var(--border-color-hover);
        background: rgba(var(--accent-rgb), 0.10);
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.32;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,vx=v.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,yx=v.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,bx=v.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,xx=v.input`
    flex: 1;
    min-width: 0;
    height: 32px;
    padding: 0 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`,Sx=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,Cx=v.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 7px 12px;
    border: 1px solid ${({$primary:e})=>e?`transparent`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$primary:e})=>e?`var(--accent-gradient)`:`transparent`};
    color: ${({$primary:e})=>e?`#fff`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: ${({$primary:e})=>e?`transparent`:`var(--border-color-hover)`};
        color: ${({$primary:e})=>e?`#fff`:`var(--text-primary)`};
        filter: ${({$primary:e})=>e?`brightness(1.08)`:`none`};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;function wx({mode:e,save:t=!1,multiple:n,extensions:i,initial:a,initialName:s=``,defaultExtension:c=``}){let d=o(),p=u(),[m,h]=(0,R.useState)(null),_=f(g(m?.themeMode)),[v,y]=(0,R.useState)({}),[b,x]=(0,R.useState)(null),[S,C]=(0,R.useState)(null),[w,T]=(0,R.useState)(null),E=(0,R.useRef)(0);(0,R.useEffect)(()=>{l.send({type:`app.ready`})},[]),(0,R.useEffect)(()=>(ye(e=>new Promise(t=>{T({id:++E.current,prompt:e,resolve:t})})),()=>ye(null)),[]),(0,R.useEffect)(()=>{Xe().then(h,()=>void 0)},[]),(0,R.useEffect)(()=>{r(m?.accentColor,m?.secondaryColor,_)},[m?.accentColor,m?.secondaryColor,_]);let ee=m?.defaultView??Se,D={mode:v.mode??ee.mode,iconSize:v.iconSize??ee.iconSize,gridSize:v.gridSize??ee.gridSize,sort:`name`,sortDescending:!1,columns:b??ee.columns??[`type`,`size`,`modified`]},O=e=>y(t=>({...t,...e}));return(0,q.jsxs)(Tx,{children:[(0,q.jsxs)(Ex,{children:[(0,q.jsx)(Dx,{children:(0,q.jsx)(Ii,{size:17})}),(0,q.jsx)(Ox,{...p,children:d(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,q.jsx)(Sy,{onChange:O,onColumns:x,onShowImages:C,showImages:S??ee.showImages,view:D}),(0,q.jsx)(kx,{children:(0,q.jsx)(Ax,{onClick:()=>l.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:d(`cancel`),type:`button`,children:(0,q.jsx)(Ni,{size:12})})})]}),(0,q.jsx)(jx,{children:(0,q.jsx)(ox,{extensions:i,initial:a,initialName:s,defaultExtension:c,inline:!0,mode:e,multiple:n,onCancel:()=>l.send({type:`pick.cancel`}),onSelect:e=>l.send({type:`pick.submit`,payload:{paths:e}}),save:t,showImages:S??ee.showImages,fileView:D,theme:_})}),w&&(0,q.jsx)(_d,{action:w.prompt.action,delaySeconds:w.prompt.delaySeconds,hits:w.prompt.hits,onCancel:()=>{w.resolve(!1),T(null)},onConfirm:()=>{w.resolve(!0),T(null)},permanent:w.prompt.permanent},w.id),(0,q.jsx)(Fd,{}),(0,q.jsx)(k,{})]})}var Tx=v.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,Ex=v.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,Dx=v.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Ox=v.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,kx=v.div`
    display: flex;
    flex-shrink: 0;
`,Ax=v.button`
    display: grid;
    place-items: center;
    width: 46px;
    height: 44px;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 100ms ease, color 100ms ease;

    &:hover {
        background: #e81123;
        color: #fff;
    }
`,jx=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;document.documentElement.dataset.theme=i()?`dark`:`light`;var Mx=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Mx),window.addEventListener(`pagehide`,Yn);var Nx=document.getElementById(`root`),Px=new URLSearchParams(window.location.search),Fx=Px.get(`picker`),Ix=Px.get(`filter`)??``;Nx&&(Gn(),(0,_e.createRoot)(Nx).render((0,q.jsx)(R.StrictMode,{children:(0,q.jsx)(d,{children:Fx===`folder`||Fx===`file`||Fx===`save`?(0,q.jsx)(wx,{defaultExtension:Px.get(`ext`)??``,extensions:Ix?Ix.split(`;`).filter(Boolean):[],initial:Px.get(`initial`)??``,initialName:Px.get(`name`)??``,mode:Fx===`folder`?`folder`:`file`,multiple:Px.get(`multiple`)===`1`,save:Fx===`save`}):(0,q.jsx)(Rb,{})})})));