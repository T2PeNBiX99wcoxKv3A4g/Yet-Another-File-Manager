import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{A as t,B as n,C as r,D as i,E as a,F as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,R as m,S as h,T as g,U as _,V as v,W as y,_ as b,a as x,b as S,c as C,d as w,f as T,g as E,h as ee,i as D,j as O,k as te,l as k,m as A,n as j,o as ne,p as M,r as N,s as re,u as P,v as ie,w as ae,x as oe,y as F}from"./format-CiOmuWrf.js";async function se(){return l.available?await l.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function I(e){l.available?await l.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function ce(){l.available&&await L(`update.openLogs`)}async function le(e){l.available?await L(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function ue(){return l.available?await l.request(`update.status`)??null:null}async function de(){return l.available?await l.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function fe(){return l.available?await l.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function pe(){await L(`update.cancel`)}async function me(){return l.available?await l.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function he(e){return l.on(t=>{t.type===`update.progress`&&e(t.data)})}function ge(e){return l.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function L(e,t,n=3e4){let r=await l.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var R=e(y(),1),_e=s(),ve=null;function ye(e){ve=e}function be(e){return ve?ve(e):Promise.resolve(!1)}var z={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},xe={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function Se(e,t){return l.available?await l.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Ce(e){return l.available?(await l.request(`fs.open`,{path:e})).ok:!1}async function we(e,t=!0,n=!1,r=0,i){return await l.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function Te(e,t,n=0,r){let i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await be({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function Ee(e,t=0,n){return await l.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function De(e){l.available&&e.length!==0&&await l.request(`fs.archive.release`,{paths:e})}async function Oe(e){return l.available?await l.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function ke(e,t){return l.available?(await l.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Ae(e,t,n,r){return l.available?(await l.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function B(e,t=!1){return l.available?await l.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function je(){return(await l.request(`fs.places`)).places}async function Me(){return(await l.request(`fs.drives`)).drives}async function Ne(e=!1){return(await l.request(`fs.recycle`,{includeOrphans:e})).entries}async function V(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await be({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await l.request(e,{...t,confirm:r.token})}return r}async function Pe(e=!1){let t=await l.request(`fs.recycle.empty`,{includeOrphans:e});await V(`fs.recycle.empty`,{includeOrphans:e},t)}async function Fe(e){return!l.available||e.length===0?{ok:!1,done:0}:await l.request(`fs.recycle.restoreMany`,{ids:e})}async function Ie(e){if(!l.available||e.length===0)return{ok:!1,done:0};let t=await l.request(`fs.recycle.deleteMany`,{ids:e}),n=await V(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Le(e){l.available&&e&&await l.request(`fs.recycle.properties`,{id:e})}async function Re(){if(!l.available)return{entries:[],cancelled:!0,failed:!1};let e=await l.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function H(){return l.available?(await l.request(`fs.recycle.admin.purge`)).ok:!1}async function ze(e=0,t=150,n=!1){return l.available?await l.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Be(){return l.available?(await l.request(`fs.recent`)).entries:[]}async function Ve(){return l.available?(await l.request(`fs.frequent`)).entries:[]}async function He(e){l.available&&await l.request(`fs.frequent.record`,{path:e})}async function Ue(){await l.request(`fs.recent.clear`)}async function We(){await l.request(`fs.frequent.clear`)}async function Ge(){return await l.request(`fs.visibility`)}async function Ke(){return await l.request(`fs.hidden.toggle`)}async function qe(e){return await l.request(`fs.hidden.set`,{show:e})}async function Je(){return l.available?await l.request(`fs.index.tasks`):{count:0,directories:[]}}var Ye={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showHidden:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,trayAutoShow:!0,accentColor:null,secondaryColor:null,themeMode:`system`,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[],conflictNameStyle:`space_parentheses`,shareAccessEnabled:!0,shareApprovalMinutes:60,shareDenialSeconds:10};async function Xe(){if(!l.available)return Ye;let e=await l.request(`settings.get`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showHidden:e?.showHidden??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,trayAutoShow:e?.trayAutoShow??!0,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,themeMode:g(e?.themeMode),backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[],conflictNameStyle:e?.conflictNameStyle??`space_parentheses`,shareAccessEnabled:e?.shareAccessEnabled??!0,shareApprovalMinutes:e?.shareApprovalMinutes??60,shareDenialSeconds:e?.shareDenialSeconds??10}}async function Ze(){return l.available?(await l.request(`app.protection.defaults`)).paths??[]:[]}var Qe={registered:!1,pathMatches:!1,registeredPath:null},$e={registered:!1,pathMatches:!1,registeredPath:null};async function et(){return l.available?await l.request(`app.defaultManager.status`):$e}async function tt(e){return l.available?await l.request(`app.defaultManager.set`,{enabled:e}):$e}async function nt(){return l.available?await l.request(`app.archive.status`):Qe}async function rt(){return l.available?await l.request(`app.archive.register`):Qe}async function it(){return l.available?await l.request(`app.archive.unregister`):Qe}async function at(e){if(!l.available)return e;let t=await l.request(`settings.save`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showHidden:t?.showHidden??e.showHidden,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,trayAutoShow:t?.trayAutoShow??e.trayAutoShow,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,themeMode:g(t?.themeMode??e.themeMode),backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites,conflictNameStyle:t?.conflictNameStyle??e.conflictNameStyle,shareAccessEnabled:t?.shareAccessEnabled??e.shareAccessEnabled,shareApprovalMinutes:t?.shareApprovalMinutes??e.shareApprovalMinutes,shareDenialSeconds:t?.shareDenialSeconds??e.shareDenialSeconds}}async function ot(e,t){l.available&&await l.request(`app.tabs.set`,{tabs:e,active:t})}async function st(e,t,n){return l.available?(await l.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var ct={managed:0,private:0,workingSet:0,available:0};async function lt(){return l.available?await l.request(`app.memory`):ct}async function ut(){return l.available?await l.request(`app.memory.trim`):ct}var dt={registered:!1,pathMatches:!1,registeredPath:null};async function ft(){return l.available?await l.request(`app.scheme`):dt}async function pt(e){return l.available?await l.request(`app.scheme.set`,{enabled:e}):dt}var mt={supported:!1,mode:`none`,active:!1,error:null};async function ht(){return l.available?await l.request(`app.startup`):mt}async function gt(e){return l.available?await l.request(`app.startup.set`,{mode:e}):mt}async function _t(e,t=!1){return!l.available||e.length===0?!1:(await l.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function vt(){return l.available?(await l.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function yt(){return l.available?await l.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function bt(e,t,n){return!l.available||e.length===0?{ok:!1,error:`nothing_to_transfer`,created:[]}:await xt({action:n?`move`:`write`},r=>l.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:r}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function xt(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await be({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function U(e){return!l.available||e.length===0?[]:(await l.request(`fs.paths.info`,{paths:e})).entries}async function St(e,t=!1){return l.available?await xt({action:t?`move`:`write`},t=>l.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function Ct(e,t=!1){if(!l.available||e.length===0)return{ok:!1,error:null};let n=await l.request(`fs.operation.delete`,{paths:e,permanent:t}),r=!1;for(let i=0;i<2&&n.required&&n.token&&n.protected?.length;i++){if(!await be({hits:n.protected,delaySeconds:n.delaySeconds??5,action:`delete`,permanent:t})){r=!0;break}n=await l.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return r?{...n,ok:!1,cancelled:!0}:n}async function wt(e,t){return l.available?await xt({action:`rename`},n=>l.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Tt(e,t=!1){return l.available?await l.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Et(e){return l.available?(await l.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Dt(e,t){return l.available?await l.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Ot(e,t,n){return l.available?await l.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function kt(e,t){return l.available?await l.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function At(e){l.available&&e.length!==0&&await l.request(`fs.operation.properties`,{paths:e})}async function jt(e){return!l.available||e.length===0?{ok:!1,error:null}:await l.request(`fs.share`,{paths:e})}async function Mt(e){l.available&&await l.request(`fs.operation.openWith`,{path:e})}async function Nt(e){l.available&&await l.request(`fs.operation.terminal`,{path:e})}async function Pt(e){return l.available?await l.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Ft(e,t){return l.available?(await l.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function It(){return l.available?await l.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Lt(){return l.available?await l.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Rt(e){l.available&&await l.request(`fs.operation.showInExplorer`,{path:e})}async function zt(e){return!l.available||e.length===0?{verbs:[],safe:!0}:await l.request(`shell.verbs`,{paths:e})}async function Bt(e,t,n,r){l.available&&e.length!==0&&await l.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Vt(e,t){return!l.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await l.request(`fs.operation.compress`,{...t,paths:e})}async function Ht(){return l.available?(await l.request(`app.tasks`)).tasks:[]}async function Ut(){l.available&&await l.request(`app.tasks.clear`)}var Wt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Gt=Wt.openInNewTab;function Kt(e){Gt=e.trim()||Wt.openInNewTab}function qt(e){let t=Gt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Jt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Yt(e){return e.split(`+`).filter(Boolean).map(e=>Xt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Xt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Zt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Qt=new Map;function $t(e){return E(T(e)?D(e):e)}function en(e){return Qt.get($t(e))}function tn(e,t){Qt.set($t(e),t)}function nn(e){Qt.delete($t(e))}function rn(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var an=new Map,on=new Map,sn=new Set,cn=0;function ln(){an.clear(),on.clear(),cn+=1,sn.forEach(e=>e())}function un(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...an.keys()])e.toLowerCase().includes(t)&&(an.delete(e),n=!0);n&&(cn+=1,sn.forEach(e=>e()))}function dn(){let[e,t]=(0,R.useState)(cn);return(0,R.useEffect)(()=>{let e=()=>t(cn);return sn.add(e),()=>{sn.delete(e)}},[]),e}var fn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function pn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return fn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function mn(e,t,n=!1){let r=dn(),i=e===null?``:pn(e,t,n),[a,o]=(0,R.useState)(()=>an.get(i)??null);return(0,R.useEffect)(()=>{if(e===null){o(null);return}if(!l.available)return;if(an.has(i)){o(an.get(i)??null);return}let r=!0;return l.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?an.set(i,e.dataUrl):an.delete(i),r&&o(e.dataUrl)},()=>{an.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function W(e){let[t,n]=(0,R.useState)(e);return(0,R.useEffect)(()=>{if(!e){n(null);return}if(!T(e)){n(e);return}let t=!0;return Ee(e,0,en(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function G(e){let t=dn(),[n,r]=(0,R.useState)(()=>e?on.get(e)??null:null);return(0,R.useEffect)(()=>{if(!e||!l.available){r(null);return}if(on.has(e)){r(on.get(e)??null);return}let t=!0;return l.request(`fs.iconFile`,{path:e}).then(n=>{on.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{on.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var K=null,hn=null;function gn(){return K===null?l.available?(hn??=l.request(`app.thumbnails`).then(e=>(K=e.base??``,K),()=>(K=``,``)),hn):Promise.resolve(``):Promise.resolve(K)}function _n(e,t=128,n=0){let[r,i]=(0,R.useState)(K);return(0,R.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return gn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${vn}`}var vn=2;function yn(e,t=0,n=``){let[r,i]=(0,R.useState)(K);if((0,R.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return gn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function bn(e,t=0){let[n,r]=(0,R.useState)(K);return(0,R.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return gn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var xn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},Sn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function Cn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=En(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=kn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var wn=`\0`,Tn=``;function En(e){return e.query!==wn&&(wn=e.query,Tn=e.query.toLowerCase()),Tn}var Dn=`\0`,On=null;function kn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Dn)return On;Dn=t;try{On=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{On=null}return On}function An(e,t){return Cn(e,t)!==null}var jn=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],Mn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Nn(e){let t=Fn(e);for(let{kind:e}of jn)if(Mn[e].has(t))return e;return null}function Pn(e){return Nn(e)!==null}function Fn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var In=(0,R.createContext)({places:{},useIcons:!1}),Ln=In.Provider;function Rn(){return(0,R.useContext)(In)}function zn(e,t){return e.places[E(t)]}function Bn(e,t,n){return zn(e,t)?.name||n}var Vn=new Map,Hn=new Map,Un=0;function Wn(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&Vn.set(e,t)}catch{}}function Gn(e){return l.available?Vn.get(e)??null:localStorage.getItem(e)}function Kn(e,t){l.available?(Vn.set(e,t),Hn.set(e,t),window.clearTimeout(Un),Un=window.setTimeout(qn,200)):localStorage.setItem(e,t)}function qn(){if(Un=0,Hn.size===0)return;let e=Object.fromEntries(Hn);Hn.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Jn(){if(Hn.size===0)return;let e=Object.fromEntries(Hn);Hn.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Yn(e,t){let n=Gn(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function Xn(e,t){Kn(e,String(t))}function Zn(e){try{return JSON.parse(Gn(e)??`null`)}catch{return null}}function Qn(e,t){Kn(e,JSON.stringify(t))}var q=c(),$n=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,q.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,q.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),er=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),tr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M14 3v4h4`})]}),nr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,q.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,q.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),rr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,q.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),ir=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 19V5`}),(0,q.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),ar=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,q.jsx)(`path`,{d:`M20 4v7h-7`})]}),or=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 5v14`}),(0,q.jsx)(`path`,{d:`M5 12h14`})]}),sr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M19 12H5`}),(0,q.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),cr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M5 12h14`}),(0,q.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),lr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,q.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),ur=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,q.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),dr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,q.jsx)(`path`,{d:`M12 12v8`})]}),fr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,q.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),pr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),mr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,q.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),hr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),gr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 7h16`}),(0,q.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,q.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,q.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),_r=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),vr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),yr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,q.jsxs)(`defs`,{children:[(0,q.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,q.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,q.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,q.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,q.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,q.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,q.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,q.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,q.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,q.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),br=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),xr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,q.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,q.jsx)(`path`,{d:`m13 5-2 14`})]}),Sr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,q.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,q.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Cr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,q.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),wr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,q.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,q.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Tr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Er=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Dr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),Or=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,q.jsx)(`path`,{d:`M8.5 14h7`})]}),kr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,q.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,q.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Ar=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),jr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Mr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Nr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Pr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Fr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,q.jsx)(`path`,{d:`m14 6 4 4`})]}),Ir=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,q.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Lr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,q.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Rr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 4v10`}),(0,q.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,q.jsx)(`path`,{d:`M4.5 19.5h15`})]}),zr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,q.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,q.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Br=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,q.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,q.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Vr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,q.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Hr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Ur=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,q.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Wr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,q.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,q.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Gr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Kr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,q.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,q.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,q.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),qr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,q.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Jr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,q.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Yr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,q.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,q.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Xr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,q.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Zr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,q.jsx)(`path`,{d:`M3.5 12h17`}),(0,q.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Qr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),$r=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,q.jsx)(`path`,{d:`M8.5 10.5h7`})]}),ei=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,q.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,q.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),ti=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,q.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),ni=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,q.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,q.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),ri=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),ii=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 16V4`}),(0,q.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,q.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),ai=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),oi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,q.jsx)(`path`,{d:`M12 4v16`})]}),si=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,q.jsx)(`path`,{d:`M15 4v16`})]}),ci=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,q.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,q.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,q.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),li=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,q.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,q.jsx)(`path`,{d:`M12 14v2`})]}),ui=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,q.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),di=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,q.jsx)(`circle`,{cx:12,cy:12,r:3})]}),fi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,q.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,q.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,q.jsx)(`path`,{d:`m3 3 18 18`})]}),pi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.83-.44-1.12-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h1.99c3.05 0 5.56-2.5 5.56-5.55C21.97 6.01 17.46 2 12 2z`}),(0,q.jsx)(`path`,{d:`M13.5 6.5h.01M17.5 10.5h.01M8.5 7.5h.01M6.5 12.5h.01`})]}),mi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M20.5 13.3 11.2 4H4v7.2l9.3 9.3a1.4 1.4 0 0 0 2 0l5.2-5.2a1.4 1.4 0 0 0 0-2z`}),(0,q.jsx)(`path`,{d:`M8.2 8.2h.01`})]}),hi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:2.5,y:5.5,width:19,height:13,rx:2.2}),(0,q.jsx)(`path`,{d:`M6.5 9.5h.01M10 9.5h.01M13.5 9.5h.01M17 9.5h.01M6.5 13h.01M17 13h.01M9 13.5h6`})]});function J(e,t){return({size:n=t,...r})=>(0,q.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var gi=J($n,18),_i=J(er,18),vi=J(tr,18),yi=J(nr,18),bi=J(rr,16),xi=J(ir,16),Si=J(ar,16),Ci=J(or,16),wi=J(sr,16),Ti=J(cr,16),Ei=J(lr,12),Di=J(ur,18),Oi=J(dr,14),ki=J(fr,14),Ai=J(pr,14),ji=J(mr,18),Mi=J(hr,18),Ni=J(gr,18),Pi=J(_r,14),Fi=J(vr,14),Ii=J(di,14),Li=J(fi,14),Ri=J(yr,18),zi=J(br,18),Bi=J(xr,18),Vi=J(Sr,18),Hi=J(Cr,18),Ui=J(wr,18),Wi=J(Tr,18),Gi=J(Er,18),Ki=J(Dr,18),qi=J(Or,18),Ji=J(kr,18),Yi=J(Ar,18),Xi=J(jr,18),Zi=J(Mr,18),Qi=J(Nr,18),$i=J(Pr,18),ea=J(Fr,16),ta=J(Ir,18),na=J(Lr,18),ra=J(Rr,18),ia=J(zr,18),aa=J(Br,18),oa=J(Vr,18),sa=J(Hr,18),ca=J(Ur,18),la=J(Wr,18),ua=J(Gr,18),da=J(Kr,18),fa=J(qr,18),pa=J(Jr,18),ma=J(Yr,18),ha=J(Xr,18),ga=J(Zr,18),_a=J(Qr,18),va=J($r,14),ya=J(ei,14),ba=J(ti,16),xa=J(ni,16),Sa=J(ri,16),Ca=J(ii,16),wa=J(ai,16),Ta=J(oi,16),Ea=J(si,16),Da=J(ci,16),Oa=J(li,14),ka=J(pi,18),Aa=J(mi,18),ja=J(hi,18),Ma=J(ui,14);async function Na(e,t,n){return l.available?(await l.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function Pa(e){return Na(`folder`,[],e??``)}function Fa(e){return Na(`file`,e??[],``)}var Ia=null,La=null;function Ra(e){Ia=e}function za(e){return Ia?Ia(e):Promise.resolve()}function Ba(e){La=e}function Va(e,t=!1){return La?La(e,t):Promise.resolve(null)}var Ha=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],Ua=null,Wa=0,Ga=new Set;function Ka(){Wa+=1;for(let e of Ga)e()}function qa(e){return Ga.add(e),()=>Ga.delete(e)}function Ja(){return Wa}function Ya(e){Ua=e,Ka()}function Xa(){return(0,R.useSyncExternalStore)(qa,Ja,Ja),Ua}var Za=_(),Qa=n`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,$a=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,eo=m`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,to=m`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,no=m`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,ro=m`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,io=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,ao=m`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,oo=m`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,so=n`animation: ${$a} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,co=n`animation: ${eo} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,lo=n`animation: ${to} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${no} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var uo=n`animation: ${ro} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,fo=n`animation: ${io} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,po=n`animation: ${ao} 140ms ease-out;`,mo=n`animation: ${oo} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function ho({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,R.useState)([]),s=(0,R.useRef)(void 0);if((0,R.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,R.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,q.jsx)(To,{},`group-rule-${i}`)),n.push((0,q.jsx)(wo,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,q.jsx)(To,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,q.jsxs)(xo,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,q.jsx)(So,{children:e.loading?(0,q.jsx)(Eo,{}):e.icon}),(0,q.jsx)(Co,{children:e.label}),a?(0,q.jsx)(Ei,{size:12}):e.checked&&(0,q.jsx)(Pi,{size:12})]},`${e.label}-${i}`))}),n};return(0,Za.createPortal)((0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(go,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(_o,{children:r.map((e,t)=>(0,q.jsxs)(vo,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,q.jsx)(yo,{children:e.icon}),(0,q.jsx)(bo,{children:e.label})]},`${e.label}-${t}`))}),(0,q.jsx)(To,{})]}),m(n,0)]}),a.map((e,t)=>(0,q.jsx)(go,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var go=v.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Qa}
    ${co}
    transform-origin: top left;
`,_o=v.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,vo=v.button`
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
`,yo=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,bo=v.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xo=v.button`
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
`,So=v.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Co=v.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wo=v.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,To=v.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Eo=v.span`
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
`;function Do({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:s,onOpenFile:c,onRename:l,onDelete:u,onCopy:d,onPaste:f,onCreateFolder:p,onCreateFile:m,creationOnly:h=!1,onRefresh:g,onAddToTray:_,onAddFavorite:v,onRemoveFavorite:y,favoritePaths:b,onExtractArchive:S,allowCompression:C=!1,platform:w,onCompressTo:ee,onArchiveCreated:D}){let O=o(),te=Xa(),k=T(t),[A,j]=(0,R.useState)({verbs:[],safe:!0,loading:!1}),[ne,N]=(0,R.useState)({recommended:[],other:[],loading:!1}),[re,P]=(0,R.useState)(null),ie=(0,R.useRef)(0),ae=(0,R.useRef)(0),oe=e?.paths.length===1,F=e?.background?t?[t]:[]:e?.paths??[],se=e?.background?t||null:oe&&n?.isDirectory?n.path:null;if((0,R.useEffect)(()=>{if(!e){j({verbs:[],safe:!0,loading:!1}),N({recommended:[],other:[],loading:!1});return}let t=++ie.current;j({verbs:[],safe:!0,loading:F.length>0&&!k}),F.length>0&&!k&&zt(F).then(e=>{ie.current===t&&j({...e,loading:!1})},()=>{ie.current===t&&j({verbs:[],safe:!0,loading:!1})});let r=++ae.current;!k&&oe&&n?(N({recommended:[],other:[],loading:!0}),Pt(n.path).then(e=>{ae.current===r&&N({...e,loading:!1})},()=>{ae.current===r&&N({recommended:[],other:[],loading:!1})})):N({recommended:[],other:[],loading:!1})},[e,oe,n?.path,n?.isDirectory,F.length,k]),(0,R.useEffect)(()=>{if(!e||k||!se){P(null);return}let t=!0;return Et(se).then(e=>{t&&P(e)},()=>{t&&P(null)}),()=>{t=!1}},[e,se,k]),!e)return null;let I=[],ce=[],le=new Set((b??[]).map(E)),ue=e.background?t?[t]:[]:e.paths,de=ue.length>0&&ue.every(e=>le.has(E(e))),fe=()=>n?pe(n.path,n.isDirectory):`Archive`,pe=(e,t)=>{let n=x(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},me=async(e,n=fe())=>{let r=await Vt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?D?.(r.path,!0):za(r.error??O(`could_not_create_the_archive`))},he=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},ge=async()=>{if(!se||re===null)return;let e=await Dt(se,!re);e.ok?(P(e.enabled),g?.()):za(e.error??O(`could_not_change_the_case_sensitivity`))},L=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Ot(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Ot(e,t,`${a}\\${ko(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?g?.():za(o.error??O(`could_not_create_the_link`))},_e=async e=>{if(!n)return;let r=await Pa(t);r&&await L(e,n.path,r,x(n.path),e.endsWith(`-copy`))},ve=async e=>{let n=te?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=E(a)===E(t);await L(n,r.path,t,x(r.path),i&&!o)}},ye=async()=>{let t=(await U(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Ya({paths:t})},be=()=>{let e=te?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:O(`cancel_selected_link`),icon:(0,q.jsx)(Fi,{size:14}),onSelect:()=>Ya(null)},...t?[{label:O(`hard_link`),icon:(0,q.jsx)(vi,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`hard`)}]:[],{label:O(`symbolic_link`),icon:(0,q.jsx)(vi,{size:14}),separatorBefore:!t,onSelect:()=>void ve(`symbolic-file`)},...n?[{label:O(`directory_junction`),icon:(0,q.jsx)(_i,{size:14}),onSelect:()=>void ve(`junction`)},{label:O(`smart_copy`),icon:(0,q.jsx)(ba,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`smart-copy`)},{label:O(`smart_mirror`),icon:(0,q.jsx)(ba,{size:14}),onSelect:()=>void ve(`smart-mirror`)},{label:O(`multi_version_smart_copy`),icon:(0,q.jsx)(ba,{size:14}),onSelect:()=>void ve(`multi-version-smart-copy`)},{label:O(`hardlink_copy`),icon:(0,q.jsx)(ba,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`hard-copy`)},{label:O(`symbolic_link_copy`),icon:(0,q.jsx)(ba,{size:14}),onSelect:()=>void ve(`symbolic-copy`)}]:[]]};if(e.background){if(p&&ce.push({label:O(`new_folder`),icon:(0,q.jsx)(Ci,{size:16}),shortcut:Yt(r.newFolder),onSelect:p}),m||p){let e=[];p&&(e.push({label:O(`folder`),icon:(0,q.jsx)(_i,{size:14}),onSelect:()=>p(!1)}),k||e.push({label:O(`case_sensitive_folder`),icon:(0,q.jsx)(ya,{size:14}),onSelect:()=>p(!0)})),m&&e.push(...Ha.map((e,t)=>({label:`${O(e.label)} (${e.extension})`,icon:(0,q.jsx)(vi,{size:14}),separatorBefore:t===0,onSelect:()=>m(e.extension)}))),I.push({label:O(`new`),icon:(0,q.jsx)(Ci,{size:14}),children:e,onSelect:()=>void 0})}if(k||I.push({label:O(`create_link`),icon:(0,q.jsx)(Ca,{size:14}),disabled:!te,children:be(),onSelect:()=>void 0}),h)return(0,q.jsx)(ho,{items:I,onClose:a,quick:ce,x:e.x,y:e.y});!k&&s&&I.push({label:O(`open_in_new_tab`),icon:(0,q.jsx)(Ci,{size:14}),onSelect:()=>s(t,!0)}),I.push({label:O(`copy_as_path`),icon:(0,q.jsx)(ba,{size:14}),onSelect:()=>void he([t])}),_&&I.push({label:O(`add_to_file_tray`),icon:(0,q.jsx)(ha,{size:14}),onSelect:()=>_([t])}),!k&&(de?y:v)&&I.push({label:O(de?`remove_from_favorites`:`add_to_favorites`),icon:de?(0,q.jsx)(va,{size:14}):(0,q.jsx)(_a,{size:14}),onSelect:()=>de?y?.([t]):v?.([t])}),!k&&re!==null&&I.push({label:O(`case_sensitive_names`),icon:(0,q.jsx)(ya,{size:14}),checked:re,onSelect:()=>void ge()}),!k&&C&&(I.push({label:O(`open_in_terminal`),icon:(0,q.jsx)(pa,{size:14}),onSelect:()=>void Nt(t)}),I.push({label:O(`show_in_explorer`),icon:(0,q.jsx)(_i,{size:14}),separatorBefore:!0,onSelect:()=>void Rt(t)})),f&&ce.push({label:O(`paste`),icon:(0,q.jsx)(Sa,{size:16}),disabled:!i,shortcut:Yt(r.paste),onSelect:()=>f(t)}),k||ce.push({label:O(`properties`),icon:(0,q.jsx)(Di,{size:16}),shortcut:Yt(r.properties),onSelect:()=>void At([t])})}else{if(s&&I.push({label:O(`open`),icon:(0,q.jsx)(Ti,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&c?.(n.path)}}),n?.isDirectory&&(s&&I.push({label:O(`open_in_new_tab`),icon:(0,q.jsx)(Ci,{size:14}),onSelect:()=>s(n.path,!0)}),f&&I.push({label:O(`paste_into_folder`),icon:(0,q.jsx)(Sa,{size:14}),disabled:!i,onSelect:()=>f(n.path)}),k||I.push({label:O(`open_in_terminal`),icon:(0,q.jsx)(pa,{size:14}),onSelect:()=>void Nt(n.path)})),!k&&oe&&n&&!n.isDirectory&&M(n.path)&&S&&I.push({label:O(`extract_archive`),icon:(0,q.jsx)(Wi,{size:14}),separatorBefore:!0,children:[{label:O(`extract_here`),icon:(0,q.jsx)(Wi,{size:14}),onSelect:()=>S(n.path,`here`)},{label:O(`extract_to_a_folder_named_after_the_archive`),icon:(0,q.jsx)(Wi,{size:14}),onSelect:()=>S(n.path,`named`)},{label:O(`auto_extract_to_the_current_folder`),icon:(0,q.jsx)(Wi,{size:14}),onSelect:()=>S(n.path,`auto`)},{label:O(`extract_to`),icon:(0,q.jsx)(_i,{size:14}),separatorBefore:!0,onSelect:()=>S(n.path,`choose`)}],onSelect:()=>void 0}),!k&&oe&&n){let e=[];if(ne.loading)e.push({label:O(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ne.recommended)e.push({label:t.name,group:O(`suggested_apps`),icon:t.icon?(0,q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,q.jsx)(Ki,{size:14}),onSelect:()=>void Ft(n.path,t.path).then(e=>{e||Mt(n.path)})});for(let t of ne.other)e.push({label:t.name,group:O(`other_apps`),icon:t.icon?(0,q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,q.jsx)(Ki,{size:14}),onSelect:()=>void Ft(n.path,t.path).then(e=>{e||Mt(n.path)})})}e.push({label:O(`choose_another_app`),icon:(0,q.jsx)(Ki,{size:14}),separatorBefore:!0,onSelect:()=>void Mt(n.path)}),I.push({label:O(`open_with_2`),icon:(0,q.jsx)(Ki,{size:14}),children:e,onSelect:()=>void Mt(n.path)})}if(!k&&w===`windows`&&e.paths.length>0&&I.push({label:O(`share`),icon:(0,q.jsx)(Ca,{size:14}),separatorBefore:!0,onSelect:()=>void jt(e.paths).then(e=>{e.ok||za(e.error??O(`could_not_open_the_share_sheet`))})}),k||I.push({label:O(`compress`),icon:(0,q.jsx)(Wi,{size:14}),separatorBefore:!0,children:[{label:O(`compress_to_zip`),icon:(0,q.jsx)(Wi,{size:14}),onSelect:()=>void me(e.paths)},{label:O(`compress_to`),icon:(0,q.jsx)(Wi,{size:14}),onSelect:()=>ee?.(e.paths,fe())}],onSelect:()=>void 0}),!k&&(e?.paths.length??0)>0){let e=[{label:O(`select_link_source`),icon:(0,q.jsx)(Ca,{size:14}),onSelect:()=>void ye()},...te?[{label:O(`cancel_selected_link`),icon:(0,q.jsx)(Fi,{size:14}),onSelect:()=>Ya(null)}]:[],...oe&&n?n.isDirectory?[{label:O(`symbolic_link`),icon:(0,q.jsx)(_i,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-folder`)},{label:O(`directory_junction`),icon:(0,q.jsx)(_i,{size:14}),onSelect:()=>void _e(`junction`)},{label:O(`smart_copy`),icon:(0,q.jsx)(ba,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`smart-copy`)},{label:O(`smart_mirror`),icon:(0,q.jsx)(ba,{size:14}),onSelect:()=>void _e(`smart-mirror`)},{label:O(`multi_version_smart_copy`),icon:(0,q.jsx)(ba,{size:14}),onSelect:()=>void _e(`multi-version-smart-copy`)},{label:O(`hardlink_copy`),icon:(0,q.jsx)(ba,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard-copy`)},{label:O(`symbolic_link_copy`),icon:(0,q.jsx)(ba,{size:14}),onSelect:()=>void _e(`symbolic-copy`)}]:[{label:O(`symbolic_link`),icon:(0,q.jsx)(vi,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-file`)},{label:O(`hard_link`),icon:(0,q.jsx)(vi,{size:14}),onSelect:()=>void _e(`hard`)}]:[]];I.push({label:O(`create_link`),icon:(0,q.jsx)(Ca,{size:14}),children:e,onSelect:()=>void 0})}!k&&n?.isDirectory&&re!==null&&I.push({label:O(`case_sensitive_names`),icon:(0,q.jsx)(ya,{size:14}),checked:re,onSelect:()=>void ge()}),I.push({label:O(`copy_as_path`),icon:(0,q.jsx)(ba,{size:14}),onSelect:()=>void he(e.paths)}),_&&I.push({label:O(`add_to_file_tray`),icon:(0,q.jsx)(ha,{size:14}),onSelect:()=>_(e.paths)}),!k&&(de?y:v)&&I.push({label:O(de?`remove_from_favorites`:`add_to_favorites`),icon:de?(0,q.jsx)(va,{size:14}):(0,q.jsx)(_a,{size:14}),onSelect:()=>de?y?.(ue):v?.(ue)}),k||I.push({label:O(`show_in_explorer`),icon:(0,q.jsx)(_i,{size:14}),separatorBefore:!0,onSelect:()=>void Rt(ue[0])}),d&&ce.push({label:O(`cut`),icon:(0,q.jsx)(xa,{size:16}),shortcut:Yt(r.cut),onSelect:()=>d(e.paths,!0)},{label:O(`copy`),icon:(0,q.jsx)(ba,{size:16}),shortcut:Yt(r.copy),onSelect:()=>d(e.paths,!1)}),oe&&n&&l&&ce.push({label:O(`rename`),icon:(0,q.jsx)(ea,{size:16}),shortcut:Yt(r.rename),onSelect:()=>l(n.path)}),u&&ce.push({label:O(`delete`),icon:(0,q.jsx)(Ni,{size:16}),danger:!0,shortcut:Yt(r.delete),onSelect:()=>u(e.paths)}),k||ce.push({label:O(`properties`),icon:(0,q.jsx)(Di,{size:16}),shortcut:Yt(r.properties),onSelect:()=>void At(e.paths)})}if(A.loading)I.push({label:O(`more_actions`),icon:(0,q.jsx)(Ki,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(A.verbs.length>0){let e={items:[],children:new Map};for(let t of A.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>{for(let t of e.items)if(t.groupIcon)return t.groupIcon;for(let n of e.children.values()){let e=t(n);if(e)return e}return null},n=e=>[...e.items.map(e=>({label:e.label,icon:(0,q.jsx)(Oo,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Bt(F,A.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,r])=>({label:e,icon:(0,q.jsx)(Oo,{source:t(r)}),children:n(r),onSelect:()=>void 0}))];I.push({label:O(A.safe?`more_actions`:`more_actions_extensions`),icon:(0,q.jsx)(Ki,{size:14}),separatorBefore:!0,children:n(e),onSelect:()=>void 0})}return(0,q.jsx)(ho,{items:I,onClose:a,quick:ce,x:e.x,y:e.y})}function Oo({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,q.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,q.jsx)(Ti,{size:14});case`document`:return(0,q.jsx)(Qi,{size:14});case`cut`:return(0,q.jsx)(xa,{size:14});case`copy`:return(0,q.jsx)(ba,{size:14});case`paste`:return(0,q.jsx)(Sa,{size:14});case`trash`:return(0,q.jsx)(Ni,{size:14});case`pencil`:return(0,q.jsx)(ea,{size:14});case`gear`:return(0,q.jsx)(Di,{size:14});case`star`:return(0,q.jsx)(sa,{size:14});case`pin`:return(0,q.jsx)(Oi,{size:14});case`executable`:return(0,q.jsx)(Ki,{size:14});case`share`:return(0,q.jsx)(Ca,{size:14});case`arrow`:return(0,q.jsx)(Ti,{size:14});default:return(0,q.jsx)(Ri,{size:14})}}function ko(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function Ao({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:s,zIndex:c=3200}){let l=o(),[u,d]=(0,R.useState)(null),f=(0,R.useRef)(null),p=t.find(t=>t.value===e)??t[0];return(0,R.useEffect)(()=>{if(!u)return;let e=()=>d(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[u]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(jo,{$icon:a!==void 0,"aria-expanded":u!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(u){d(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;d({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:f,style:i&&!a?{width:i}:void 0,title:s??p?.title,type:`button`,children:[a===void 0?(0,q.jsx)(Mo,{children:p?.label??``}):(0,q.jsx)(No,{children:a}),a===void 0&&(0,q.jsx)(Po,{children:(0,q.jsx)(Ei,{size:11})})]}),u&&(0,Za.createPortal)((0,q.jsx)(Fo,{"aria-label":l(`options`),"data-select-menu":`true`,$menuZIndex:c,role:`listbox`,style:{bottom:u.bottom,left:u.left,minWidth:u.width,top:u.top},children:t.map(t=>(0,q.jsxs)(Io,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),d(null)},role:`option`,title:t.title,type:`button`,children:[(0,q.jsx)(Lo,{children:t.label}),t.value===e&&(0,q.jsx)(Pi,{size:11})]},t.value))}),document.body)]})}var jo=v.button`
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
`,Mo=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,No=v.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,Po=v.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Fo=v.div`
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
    ${co}
`,Io=v.button`
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
`,Lo=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ro=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],zo=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],Bo=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],Vo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Ho=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function Uo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=o(),a=(0,R.useRef)(null),[s,c]=(0,R.useState)(e),[l,u]=(0,R.useState)(t),[d,f]=(0,R.useState)(`zip`),[p,m]=(0,R.useState)(`5`),[h,g]=(0,R.useState)(`default`),[_,v]=(0,R.useState)(`none`),[y,b]=(0,R.useState)(``),[x,S]=(0,R.useState)(`0`),[C,w]=(0,R.useState)(!1);(0,R.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let T=Ro.find(e=>e.value===d)??Ro[0],E=d===`zip`||d===`zipx`,ee=_!==`none`,D=E||d===`7z`,O=d===`zip`||d===`7z`,te=async()=>{if(C||!l.trim()||!s||ee&&y.length===0)return;w(!0);let e=await r({directory:s,name:l.trim(),format:d,level:T.level?Number(p):0,method:E?h:null,encryption:D?_:`none`,password:ee?y:void 0,splitSize:O?Number(x):0});w(!1),e&&n()};return(0,Za.createPortal)((0,q.jsx)(Wo,{onPointerDown:e=>{e.target===e.currentTarget&&!C&&n()},children:(0,q.jsxs)(Go,{"aria-modal":`true`,role:`dialog`,children:[(0,q.jsx)(Ko,{children:i(`compress_to`)}),(0,q.jsxs)(qo,{children:[(0,q.jsx)(Jo,{children:i(`archive_name`)}),(0,q.jsx)(Yo,{onChange:e=>u(e.target.value),ref:a,value:l,onKeyDown:e=>{e.key===`Enter`&&te()}}),(0,q.jsx)(Xo,{children:T.extension})]}),(0,q.jsxs)(qo,{children:[(0,q.jsx)(Jo,{children:i(`format`)}),(0,q.jsx)(Ao,{onChange:e=>f(e),options:Ro.map(e=>({value:e.value,label:i(e.label)})),value:d,width:236,zIndex:3700})]}),(0,q.jsxs)(qo,{children:[(0,q.jsx)(Jo,{children:i(`method`)}),(0,q.jsx)(Ao,{disabled:!E,onChange:g,options:zo.map(e=>({...e,label:i(e.label)})),value:E?h:`default`,width:236,zIndex:3700})]}),(0,q.jsxs)(qo,{children:[(0,q.jsx)(Jo,{children:i(`encryption`)}),(0,q.jsx)(Ao,{disabled:!D,onChange:e=>{v(e),e===`none`&&b(``)},options:Bo.map(e=>({...e,label:i(e.label)})),value:D?_:`none`,width:236,zIndex:3700})]}),ee&&(0,q.jsxs)(qo,{children:[(0,q.jsx)(Jo,{children:i(`password`)}),(0,q.jsx)(Yo,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,q.jsxs)(qo,{children:[(0,q.jsx)(Jo,{children:i(`split_volumes`)}),(0,q.jsx)(Ao,{disabled:!O,onChange:S,options:Vo.map(e=>({...e,label:i(e.label)})),value:O?x:`0`,width:236,zIndex:3700})]}),(0,q.jsxs)(qo,{children:[(0,q.jsx)(Jo,{children:i(`compression_level`)}),(0,q.jsx)(Ao,{disabled:!T.level,onChange:m,options:Ho.map(e=>({...e,label:i(e.label)})),value:T.level?p:d===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,q.jsxs)(qo,{$stack:!0,children:[(0,q.jsx)(Jo,{children:i(`destination`)}),(0,q.jsxs)(Zo,{children:[(0,q.jsx)(Qo,{title:s,children:s}),(0,q.jsx)(es,{disabled:C,onClick:()=>void Pa(s).then(e=>{e&&c(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,q.jsxs)($o,{children:[(0,q.jsx)(es,{disabled:C,onClick:n,type:`button`,children:i(`cancel`)}),(0,q.jsx)(ts,{disabled:C||!l.trim()||ee&&y.length===0,onClick:()=>void te(),type:`button`,children:i(C?`compressing`:`compress`)})]})]})}),document.body)}var Wo=v.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${po}
`,Go=v.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${so}
`,Ko=v.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,qo=v.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Jo=v.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Yo=v.input`
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
`,Xo=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Zo=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Qo=v.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$o=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,es=v.button`
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
`,ts=v(es)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function ns({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:s}){let c=o(),l=(0,R.useRef)(null);return(0,R.useEffect)(()=>{if(!e)return;l.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),s()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,s]),e?(0,Za.createPortal)((0,q.jsx)(rs,{onPointerDown:e=>{e.target===e.currentTarget&&s()},children:(0,q.jsxs)(is,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(as,{children:t}),(0,q.jsx)(os,{children:n}),(0,q.jsxs)(ss,{children:[(0,q.jsx)(cs,{onClick:s,type:`button`,children:c(`cancel`)}),(0,q.jsx)(cs,{$danger:i,onClick:a,ref:l,type:`button`,children:r})]})]})}),document.body):null}var rs=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${po}
`,is=v.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${so}
`,as=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,os=v.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,ss=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,cs=v.button`
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
`,ls=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),us=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),ds=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),fs=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function ps({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:s,emptyNote:c}){let l=o(),[u,d]=(0,R.useState)(!1),[f,p]=(0,R.useState)(!1),[m,h]=(0,R.useState)(!1),[g,_]=(0,R.useState)(0),[v,y]=(0,R.useState)(0),[b,x]=(0,R.useState)(null),[S,C]=(0,R.useState)(!1),[w,T]=(0,R.useState)(!1),E=(0,R.useRef)(null),ee=(0,R.useRef)(null),D=(0,R.useRef)(null),O=(0,R.useRef)(null),[te,k]=(0,R.useState)(()=>{let e=Yn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),A=e?.path??null,j=W(A),ne=e?ms(e.name):``,M=!!e&&!e.isDirectory&&ls.has(ne),N=!!e&&!e.isDirectory&&us.has(ne),re=!!e&&!e.isDirectory&&ds.has(ne),P=!!e&&!e.isDirectory&&fs.has(ne),ie=!!e&&!e.isDirectory&&ne===`pdf`,ae=_n(M?j:null,512,e?.modified??0),oe=yn(re?j:null,e?.modified??0,ne),F=yn(M||N?j:null,e?.modified??0,ne),se=bn(ie?j:null,e?.modified??0),I=mn(!M&&!N&&!re&&!P&&!ie?j:null,e?.isDirectory??!1);if((0,R.useEffect)(()=>{d(!1),p(!1),h(!1),_(0),y(0),T(!1)},[A]),(0,R.useEffect)(()=>{if(!j||!P){x(null),C(!1);return}let e=!0;return C(!0),x(null),Oe(j).then(t=>{e&&(x(t),C(!1))},()=>{e&&(x({text:null,truncated:!1,error:l(`could_not_read_this_file`)}),C(!1))}),()=>{e=!1}},[j,P]),!e&&!c)return null;let ce=e=>{D.current={x:e.clientX,width:ee.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},le=e=>{let t=D.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},ue=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},de=e=>{O.current={y:e.clientY,height:te},e.currentTarget.setPointerCapture(e.pointerId)},fe=e=>{let t=O.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);k(n),Xn(`yafm.preview.media.height`,n)},pe=e=>{O.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,q.jsxs)(gs,{$open:r,children:[r&&(0,q.jsx)(_s,{onPointerDown:ce,onPointerMove:le,onPointerUp:ue,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsx)(vs,{ref:ee,style:{width:r?t:0},children:(0,q.jsxs)(ys,{children:[(0,q.jsx)(_i,{size:56}),(0,q.jsx)(`span`,{children:c})]})})]});let me=()=>{let e=E.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,q.jsxs)(gs,{$open:r,children:[r&&(0,q.jsx)(_s,{onPointerDown:ce,onPointerMove:le,onPointerUp:ue,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(vs,{ref:ee,style:{width:r?t:0},children:[(0,q.jsx)(bs,{style:{height:te},children:M&&F&&!u?(0,q.jsxs)(Ss,{onPointerEnter:()=>h(!0),onPointerLeave:()=>h(!1),children:[(0,q.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:me,onDurationChange:e=>_(e.currentTarget.duration||0),onError:()=>d(!0),onLoadedMetadata:e=>{_(e.currentTarget.duration||0),y(e.currentTarget.currentTime)},onPause:()=>p(!1),onPlay:()=>p(!0),onTimeUpdate:e=>y(e.currentTarget.currentTime),playsInline:!0,poster:ae??void 0,preload:`metadata`,ref:E,src:F}),(0,q.jsx)(Cs,{$visible:!f,onClick:me,title:l(`play`),type:`button`,children:(0,q.jsx)(wa,{size:28})}),(0,q.jsxs)(ws,{$visible:m,onClick:e=>e.stopPropagation(),children:[(0,q.jsxs)(Ts,{children:[(0,q.jsx)(`span`,{children:hs(v)}),(0,q.jsx)(`span`,{children:hs(g)})]}),(0,q.jsx)(Es,{"aria-label":l(`seek`),max:g||0,min:0,onChange:e=>{let t=E.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,y(n)},step:.1,type:`range`,value:Math.min(v,g||0)})]})]}):N&&F?(0,q.jsx)(`audio`,{controls:!0,src:F}):re&&oe?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:oe}):ie&&se&&!w?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>T(!0),src:se}):ie?(0,q.jsx)(vi,{size:64}):P?(0,q.jsx)(Ds,{children:S||!b?(0,q.jsx)(ks,{children:l(`loading`)}):b.error?(0,q.jsx)(ks,{children:b.error}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Os,{children:b.text}),b.truncated&&(0,q.jsx)(ks,{children:l(`showing_the_first_256_kb`)})]})}):M&&ae?(0,q.jsx)(`img`,{alt:``,src:ae}):I?(0,q.jsx)(`img`,{alt:``,src:I}):e.isDirectory?(0,q.jsx)(_i,{size:64}):(0,q.jsx)(vi,{size:64})}),(0,q.jsx)(xs,{onDoubleClick:()=>{k(210),Xn(`yafm.preview.media.height`,210)},onPointerDown:de,onPointerMove:fe,onPointerUp:pe,title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(As,{children:[(0,q.jsx)(js,{title:e.path,children:e.name}),s&&(0,q.jsx)(Ms,{children:s}),(0,q.jsx)(Ns,{children:e.fields.map(e=>(0,q.jsxs)(Ps,{children:[(0,q.jsx)(Fs,{children:e.label}),(0,q.jsx)(Is,{title:e.value,children:e.value})]},e.label))})]})]})]})}function ms(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function hs(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var gs=v.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,_s=v.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,vs=v.aside`
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
`,ys=v.div`
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
`,bs=v.div`
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
`,xs=v.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Ss=v.div`
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
`,Cs=v.button`
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
`,ws=v.div`
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
`,Ts=v.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,Es=v.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Ds=v.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,Os=v.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,ks=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,As=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,js=v.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Ms=v.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Ns=v.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,Ps=v.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Fs=v.span`
    color: var(--text-muted);
`,Is=v.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Ls=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Rs=[...Ls],zs={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},Bs={folder:e=>(0,q.jsx)(_i,{size:e}),home:e=>(0,q.jsx)(gi,{size:e}),desktop:e=>(0,q.jsx)(ta,{size:e}),documents:e=>(0,q.jsx)(na,{size:e}),downloads:e=>(0,q.jsx)(ra,{size:e}),pictures:e=>(0,q.jsx)(ia,{size:e}),music:e=>(0,q.jsx)(aa,{size:e}),videos:e=>(0,q.jsx)(oa,{size:e}),drive:e=>(0,q.jsx)(yi,{size:e}),image:e=>(0,q.jsx)(Vi,{size:e}),video:e=>(0,q.jsx)(Hi,{size:e}),audio:e=>(0,q.jsx)(Ui,{size:e}),text:e=>(0,q.jsx)(zi,{size:e}),code:e=>(0,q.jsx)(Bi,{size:e}),clock:e=>(0,q.jsx)(ji,{size:e}),star:e=>(0,q.jsx)(sa,{size:e}),file:e=>(0,q.jsx)(vi,{size:e}),archive:e=>(0,q.jsx)(Wi,{size:e}),pdf:e=>(0,q.jsx)(Gi,{size:e}),executable:e=>(0,q.jsx)(Ki,{size:e}),font:e=>(0,q.jsx)(qi,{size:e}),database:e=>(0,q.jsx)(Ji,{size:e}),config:e=>(0,q.jsx)(Yi,{size:e}),spreadsheet:e=>(0,q.jsx)(Xi,{size:e}),presentation:e=>(0,q.jsx)(Zi,{size:e}),document:e=>(0,q.jsx)(Qi,{size:e}),app:e=>(0,q.jsx)(Ri,{size:e}),gear:e=>(0,q.jsx)(Di,{size:e}),pin:e=>(0,q.jsx)(Oi,{size:e}),trash:e=>(0,q.jsx)(Ni,{size:e}),overview:e=>(0,q.jsx)($i,{size:e}),book:e=>(0,q.jsx)(ca,{size:e}),briefcase:e=>(0,q.jsx)(la,{size:e}),cloud:e=>(0,q.jsx)(ua,{size:e}),gamepad:e=>(0,q.jsx)(da,{size:e}),camera:e=>(0,q.jsx)(fa,{size:e}),terminal:e=>(0,q.jsx)(pa,{size:e}),server:e=>(0,q.jsx)(ma,{size:e}),package:e=>(0,q.jsx)(ha,{size:e}),globe:e=>(0,q.jsx)(ga,{size:e}),heart:e=>(0,q.jsx)(_a,{size:e}),share:e=>(0,q.jsx)(ma,{size:e}),favorites:e=>(0,q.jsx)(_a,{size:e})};function Vs(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Hs(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Ls)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Rs.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Vs(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${zs[n]??n}${Us(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Us(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Ws({panel:e,size:t=16}){let n=G(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,q.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Bs[e.icon]:void 0;if(r)return(0,q.jsx)(q.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,q.jsx)(_i,{size:t});case`recent`:return(0,q.jsx)(ji,{size:t});case`frequent`:return(0,q.jsx)(sa,{size:t});case`drives`:return(0,q.jsx)(yi,{size:t});case`home`:return(0,q.jsx)(gi,{size:t});case`share`:return(0,q.jsx)(ma,{size:t});case`favorites`:return(0,q.jsx)(_a,{size:t});default:return(0,q.jsx)(_i,{size:t})}}function Gs({place:e,size:t=18}){let n=G(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,q.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Bs[e.icon]?(0,q.jsx)(q.Fragment,{children:Bs[e.icon](t)}):(0,q.jsx)(_i,{size:t})}var Ks=`#64748b`;function qs(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Js({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:s}){let c=o(),[l,u]=(0,R.useState)(``),[d,f]=(0,R.useState)(`#2dd4bf`),p=(0,R.useRef)(null);(0,R.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||s()},t=e=>{e.key===`Escape`&&s()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,s),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,s)}},[s]);let m=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),h=e=>i[e]??`#64748b`,g=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},_=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=l.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:d}),u(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Za.createPortal)((0,q.jsxs)(Ys,{"data-tag-menu":`true`,ref:p,style:{left:y,top:b},children:[(0,q.jsxs)(Xs,{children:[(0,q.jsx)(`span`,{children:c(`tags`)}),(0,q.jsx)(Zs,{onClick:s,title:c(`close`),type:`button`,children:(0,q.jsx)(Fi,{size:11})})]}),(0,q.jsxs)(Qs,{children:[m.length===0&&(0,q.jsx)(nc,{children:c(`no_tags_yet`)}),m.map(e=>{let t=h(e),r=n.includes(e);return(0,q.jsxs)($s,{children:[(0,q.jsx)(ec,{"aria-label":c(`color_of_tag`,{tag:e}),onChange:t=>_(e,t.target.value),title:c(`change_this_tag_s_color`),type:`color`,value:t}),(0,q.jsxs)(tc,{$color:t,$ink:qs(t),$on:r,onClick:()=>g(e),type:`button`,children:[r&&(0,q.jsx)(Pi,{size:11}),(0,q.jsx)(`span`,{children:e})]})]},e)})]}),(0,q.jsxs)(rc,{children:[(0,q.jsx)(ec,{"aria-label":c(`color_of_the_new_tag`),onChange:e=>f(e.target.value),title:c(`color_of_the_new_tag`),type:`color`,value:d}),(0,q.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:c(`new_tag`),spellCheck:!1,value:l}),(0,q.jsx)(ic,{onClick:v,type:`button`,children:c(`add`)})]})]}),document.body)}var Ys=v.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${so}
`,Xs=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Zs=v.button`
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
`,Qs=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,$s=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,ec=v.input`
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
`,tc=v.button`
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
`,nc=v.span`
    font-size: 11px;
    color: var(--text-muted);
`,rc=v.div`
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
`,ic=v.button`
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
`,ac={file:vi,folder:_i,text:zi,code:Bi,image:Vi,video:Hi,audio:Ui,archive:Wi,pdf:Gi,executable:Ki,font:qi,database:Ji,config:Yi,spreadsheet:Xi,presentation:Zi,document:Qi},oc={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function sc(e){let t=e.lastIndexOf(`.`);return t>0?oc[e.slice(t).toLowerCase()]??`file`:`file`}function cc({name:e,size:t}){let n=ac[e??`file`]??vi;return(0,q.jsx)(n,{size:t})}function lc({path:e,name:t,isDirectory:n,size:r=18}){let i=mn(e,n);return i?(0,q.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,q.jsx)(_i,{size:r}):(0,q.jsx)(cc,{name:sc(t),size:r})}var uc=`application/x-yafm-paths`,dc=[uc,`text/uri-list`];function fc(e){return e?.types.some(e=>dc.includes(e.toLowerCase()))??!1}function pc(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(uc);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(hc).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var mc=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function hc(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return mc?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function gc(e,t,n=!0){e.dataTransfer.setData(uc,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function _c({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=o(),[h,g]=(0,R.useState)(()=>new Set),[_,v]=(0,R.useState)(!1),y=(0,R.useRef)(null),x=(0,R.useMemo)(()=>e.filter(e=>h.has(e.path)),[e,h]),S=(0,R.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),C=(0,R.useRef)(null);if((0,R.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=C.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&fc(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=pc(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,c]),!r)return null;let w=new Set([...e,...t].map(e=>e.path)),T=w.size>0&&[...w].every(e=>h.has(e)),E=w.size,ee=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{g(T?new Set:w)},O=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},te=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},k=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},A=()=>{let e=x.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},j=()=>{let e=x.map(e=>e.path);e.length!==0&&f(e)},ne=()=>{let e=new Map;for(let t of x)e.set(t.path,!0);for(let t of S)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,a,!0),r.length>0&&p(r,a,!1),g(new Set)},M=(e,t)=>{let n=h.has(e.path);return(0,q.jsxs)(kc,{$checked:n,draggable:!0,onClick:()=>ee(e.path),onDragStart:r=>{gc(r,n&&h.size>0?[...new Set([...x,...S].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,q.jsx)(Ac,{$checked:n,onClick:t=>{t.stopPropagation(),ee(e.path)},type:`button`,children:n&&(0,q.jsx)(Pi,{size:8})}),(0,q.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,q.jsxs)(jc,{children:[(0,q.jsx)(Mc,{children:e.name}),(0,q.jsx)(Nc,{children:b(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},N=e=>{fc(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,q.jsxs)(vc,{$dragging:_,"data-tray":`true`,ref:C,style:{left:i.x,top:i.y},onDragEnter:N,onDragOver:N,onDrop:e=>{let{paths:t}=pc(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,q.jsxs)(yc,{onPointerDown:O,onPointerMove:te,onPointerUp:k,children:[(0,q.jsxs)(bc,{children:[(0,q.jsx)(ha,{size:12}),m(`tray`),(0,q.jsx)(xc,{children:E})]}),(0,q.jsxs)(Sc,{onPointerDown:e=>e.stopPropagation(),children:[(0,q.jsx)(Cc,{onClick:D,title:m(T?`select_none`:`select_all`),type:`button`,children:m(T?`none`:`all`)}),(0,q.jsx)(Cc,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,q.jsx)(wc,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,q.jsx)(Fi,{size:10})})]})]}),(0,q.jsxs)(Tc,{children:[(0,q.jsxs)(Dc,{children:[m(`in_this_app`),(0,q.jsx)(xc,{children:e.length})]}),e.length===0&&(0,q.jsx)(Ec,{children:m(`drag_files_or_folders_here`)}),e.map(e=>M(e,!0)),t.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Dc,{$clipboard:!0,children:[m(`clipboard`),(0,q.jsx)(xc,{children:t.length}),n&&(0,q.jsx)(Oc,{children:m(`cut`)})]}),t.map(e=>M(e,n))]})]}),(0,q.jsxs)(Pc,{children:[(0,q.jsx)(Fc,{$plain:!0,disabled:x.length===0,onClick:j,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,q.jsx)(Fc,{disabled:h.size===0||!a,onClick:ne,type:`button`,children:m(`move_here`)}),(0,q.jsx)(Fc,{$danger:!0,disabled:x.length===0,onClick:A,type:`button`,children:m(`remove`)})]})]})}var vc=v.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Qa}
    ${so}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,yc=v.div`
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
`,bc=v.span`
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
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,xc=v.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Sc=v.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Cc=v.button`
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
`,wc=v.button`
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
`,Tc=v.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,Ec=v.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Dc=v.div`
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
`,Oc=v.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,kc=v.div`
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
`,Ac=v.button`
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
`,jc=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Mc=v.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Nc=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Pc=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,Fc=v.button`
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
`,Ic={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function Lc(){return l.available?await l.request(`share.list`):Ic}async function Rc(e,t){return l.available?await l.request(`share.add`,{path:e,mode:t}):Ic}async function zc(e){return l.available?await l.request(`share.remove`,{id:e}):Ic}async function Bc(e,t){return l.available?await l.request(`share.mode`,{id:e,mode:t}):Ic}async function Vc(){return l.available?(await l.request(`share.peers`)).peers??[]:[]}async function Hc(){return l.available?(await l.request(`share.peers.refresh`)).peers??[]:[]}async function Uc(e,t){l.available&&await l.request(`share.pair.start`,{host:e,port:t})}async function Wc(e,t){l.available&&await l.request(`share.pair.respond`,{requestId:e,accept:t})}async function Gc(e,t){l.available&&await l.request(`share.port`,{mode:t,port:e})}var Kc=`yafm://share/`;function qc(e){return e.toLowerCase().startsWith(Kc)}function Jc(e){if(!qc(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Yc(e,t,n=``){let r=`${Kc}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Xc(e){let t=Jc(e);if(!t||!l.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await l.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Yc(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Yc(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Zc(e){let t=Jc(e);if(!t||!l.available)throw Error(`This shared file is only available in the desktop app.`);let n=await l.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Qc(e){await Ce(await Zc(e))}async function $c(){return l.available?(await l.request(`share.devices.list`)).devices??[]:[]}async function el(e,t,n){return l.available?(await l.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function tl(e){return l.available?(await l.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function nl(){return l.available?(await l.request(`share.access.status`)).hasPassword:!1}async function rl(e){return l.available?(await l.request(`share.access.password`,{password:e})).hasPassword:!1}var il=new Map,al=new Set,ol=0;function sl(){ol+=1;for(let e of al)e()}function cl(e,t){t?il.set(e,t):il.delete(e),sl()}function ll(e){return il.has(e)}function ul(e,t,n){il.get(e)?.(t,n)}function dl(e){return al.add(e),()=>al.delete(e)}function fl(){return ol}function pl(e){return(0,R.useSyncExternalStore)(dl,fl,fl),{available:ll(e),open:(t,n)=>ul(e,t,n)}}function ml(e){return[...il.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function hl(e){return(0,R.useSyncExternalStore)(dl,fl,fl),{available:ml(e).length>0,open:(t,n)=>{let r=ml(e).at(-1);r&&ul(r,t,n)}}}var gl=60,_l=300,vl=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],yl=new Set,bl=`yafm.columnWidths`,xl=`yafm.reset-column-widths`,Sl=64,Cl=720,wl=160,Tl=190,El=120;function Dl({listing:e,loading:t,error:n,find:r=Sn,view:i,showImages:a,imageStripHeight:s=Tl,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:d,onOpenFile:f,showCheckboxes:p=!0,openOnSingleClick:m=!1,shortcuts:h=Wt,enableShortcuts:g=!0,refreshToken:_=0,onRefresh:v,onRename:y,onClipboardChanged:b,cutPaths:S=yl,onTransfer:w,onAddToTray:T,platform:E,onAddFavorite:ee,onRemoveFavorite:D,favoritePaths:O,onExtractArchive:te,onPaste:k,confirmDelete:A=!1,previewVideoAudio:j=!1,previewVideoAutoplay:ne=!1,showDetails:M=!0,onPreviewInfo:N,onActivate:re,groupOf:ae,onGridScroll:oe,gridFooter:se,allowBackgroundMenu:I=!0,readOnly:ce=!1,onSelectionChange:le,onSelectionCountChange:ue,selectionMenuRequest:de,selectionMenuId:fe,singleSelect:pe=!1,pendingRename:me=null,pendingRenameToken:he=0,selectMatchesToken:ge=0}){let L=o(),_e=Rn(),ve=(0,R.useRef)(null),ye=(0,R.useRef)(null),be=(0,R.useRef)(null),z=(0,R.useRef)(null),[xe,Se]=(0,R.useState)(_l),[Ce,we]=(0,R.useState)({top:0,height:640}),Te=(0,R.useRef)(null),Ee=(0,R.useRef)(null),[De,Oe]=(0,R.useState)(null),[ke,Ae]=(0,R.useState)(s),[B,je]=(0,R.useState)(()=>new Set),[Me,Ne]=(0,R.useState)(()=>Zn(bl)??{}),V=(0,R.useRef)(B),Pe=(0,R.useRef)([]);V.current=B,(0,R.useEffect)(()=>le?.([...B]),[B,le]),(0,R.useEffect)(()=>ue?.(B.size),[B,ue]),(0,R.useEffect)(()=>{let e=de;if(!e||e.token===Le.current)return;Le.current=e.token;let t=[...V.current];t.length!==0&&(Ie({x:e.x,y:e.y,paths:t,background:!1}),vt().then(Xe,()=>Xe(!1)))},[de]);let[Fe,Ie]=(0,R.useState)(null),Le=(0,R.useRef)(0),[Re,H]=(0,R.useState)(null),[ze,Be]=(0,R.useState)(null),[Ve,He]=(0,R.useState)(null),Ue=(0,R.useRef)(Ve);Ue.current=Ve;let We=(0,R.useRef)(0),Ge=(0,R.useRef)(re);Ge.current=re;let[Ke,qe]=(0,R.useState)(()=>{let e=Yn(`yafm.preview.width`,320);return e>=220?e:320}),Je=(0,R.useCallback)(e=>{qe(e),Xn(`yafm.preview.width`,e)},[]),[Ye,Xe]=(0,R.useState)(!1),Ze=(0,R.useCallback)((e,t)=>{let n=[...V.current];n.length!==0&&(Ie({x:e,y:t,paths:n,background:!1}),vt().then(Xe,()=>Xe(!1)))},[]);(0,R.useEffect)(()=>{if(fe)return cl(fe,B.size>0?Ze:null),()=>cl(fe,null)},[fe,B,Ze]),(0,R.useEffect)(()=>{je(new Set),He(null),Ie(null),Ee.current=null},[e?.path]),(0,R.useEffect)(()=>{Ae(s)},[s]),(0,R.useEffect)(()=>{je(new Set),He(null),Ee.current=null},[_]);let Qe=e=>{Te.current={y:e.clientY,height:ke},e.currentTarget.setPointerCapture(e.pointerId)},$e=e=>{let t=Te.current;if(!t)return;let n=Math.max(El,Math.round(window.innerHeight*.7));Ae(Math.min(n,Math.max(El,t.height+t.y-e.clientY)))},et=e=>{Te.current&&(Te.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(ke))},tt=()=>{Ae(Tl),c?.(Tl)},nt=r.query.length>0,rt=(0,R.useMemo)(()=>vl.filter(e=>i.columns?.includes(e.id)),[i.columns]),it=i.columns?.includes(`linkTarget`)??!1,at=(0,R.useCallback)(e=>Math.min(Cl,Math.max(Sl,Me[e.id]??e.width)),[Me]),ot=(0,R.useMemo)(()=>`minmax(160px, 1fr) ${rt.map(e=>`${at(e)}px`).join(` `)}`.trim(),[rt,at]),st=(0,R.useRef)(null),ct=(0,R.useRef)(null),lt=()=>Math.floor(ct.current?.getBoundingClientRect().width??wl),ut=e=>{let t=rt[0];t&&(e.preventDefault(),e.stopPropagation(),st.current={left:{id:t.id,start:at(t)},startX:e.clientX,nameStart:lt()})},dt=(e,t)=>{let n=rt[t],r=rt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),st.current={left:{id:n.id,start:at(n)},right:{id:r.id,start:at(r)},startX:e.clientX,nameStart:0})},ft=e=>Ne(t=>{let n={...t};return delete n[e],Qn(bl,n),n});(0,R.useEffect)(()=>{let e=e=>{let t=st.current;if(!t)return;let n=e.clientX-t.startX;Ne(e=>{if(!t.right){let r=Math.max(0,t.nameStart-wl),i=Math.min(Math.min(Cl,t.left.start+r),Math.max(Sl,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(Cl,Math.max(Sl,t.left.start+n)),a=Math.min(Math.min(Cl,r-Sl),Math.max(Math.max(Sl,r-Cl),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{st.current&&(st.current=null,Ne(e=>(Qn(bl,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,R.useEffect)(()=>{let e=()=>Ne(()=>(Qn(bl,{}),{}));return window.addEventListener(xl,e),()=>window.removeEventListener(xl,e)},[]);let pt=(0,R.useMemo)(()=>e?Al(e.entries.map(t=>{let n=t.isDirectory?zn(_e,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:nt?Cn(i,r):null,tags:e.tags[t.name]??[],cut:S.has(t.fullPath)}}).filter(e=>!nt||r.mode===`dim`||e.ranges!==null),i,e,L):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,nt,r,_e,i.sort,i.sortDescending,L,S]);Pe.current=pt,(0,R.useEffect)(()=>{ge!==0&&je(new Set(Pe.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[ge]);let mt=Math.max(40,i.iconSize+20),ht=Math.max(0,Math.floor(Ce.top/mt)-4),gt=Math.min(pt.length,ht+Math.ceil(Ce.height/mt)+10),yt=(0,R.useMemo)(()=>pt.slice(ht,gt),[pt,ht,gt]);(0,R.useEffect)(()=>{let e=z.current;if(!e||i.mode!==`list`)return;let t=()=>we(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,R.useEffect)(()=>{we(e=>({...e,top:0})),z.current&&(z.current.scrollTop=0)},[e?.path]),(0,R.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=pt.findIndex(e=>e.entry.fullPath===r.currentPath),t=z.current;if(e<0||!t)return;let n=e*mt;(n<t.scrollTop||n+mt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ve.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,pt,mt]);let bt=(0,R.useMemo)(()=>pt.slice(0,xe),[pt,xe]);(0,R.useEffect)(()=>{let e=ye.current;if(!e||e.length===0)return;let t=e.filter(e=>pt.some(t=>F(t.entry.fullPath,e)));if(t.length===0)return;ye.current=null;let n=t[0],r=pt.findIndex(e=>F(e.entry.fullPath,n));r>=0&&Se(e=>Math.max(e,r+_l)),je(new Set(t)),Ee.current=n,i.mode===`list`&&z.current&&r>=0?z.current.scrollTop=Math.max(0,r*mt-z.current.clientHeight/2):requestAnimationFrame(()=>ve.current?.scrollIntoView({block:`nearest`}))},[pt,mt,i.mode]),(0,R.useEffect)(()=>{Se(_l)},[e?.path]),(0,R.useEffect)(()=>{if(!r.currentPath)return;let e=pt.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&Se(t=>Math.max(t,e+_l))},[r.currentPath,pt]);let xt=(0,R.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&Se(e=>Math.min(pt.length,e+_l))},[pt.length]),U=i.mode===`grid`,Et=(0,R.useMemo)(()=>{if(!U)return[];if(!ae)return Nl(bt,Ml);let e=[],t=new Map;for(let n of bt){let r=ae(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[bt,U,ae]),Dt=(0,R.useMemo)(()=>a?pt.filter(e=>!e.entry.isDirectory&&Pn(e.entry.name)):[],[pt,a]),Ot=Dt.length,jt=(0,R.useMemo)(()=>Dt.slice(0,gl),[Dt]),Mt=(0,R.useMemo)(()=>a?Nl(jt,jl):[],[jt,a]),Pt=(0,R.useMemo)(()=>pt.map(e=>e.entry.fullPath),[pt]),Ft=pt.length>0&&B.size>=pt.length,It=B.size>0&&!Ft,Lt=()=>{pe||(Ft?Ht():je(new Set(Pt)))},Rt=e?.path??``,zt=(0,R.useCallback)((e,t)=>{if(pe){Ee.current=t,je(new Set([t]));return}let n=e.ctrlKey||e.metaKey;je(r=>{if(e.shiftKey&&Ee.current!==null){let e=Pt.indexOf(Ee.current),i=Pt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Pt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),Ee.current=t,e}return Ee.current=t,new Set([t])})},[Pt,pe]),Bt=(0,R.useCallback)(e=>{pe?(Ee.current=e,je(new Set([e]))):(Ee.current=e,je(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[pe]),Ht=(0,R.useCallback)(()=>{Ee.current=null,je(new Set)},[]);(0,R.useEffect)(()=>{if(he===0||!me||We.current===he||!e?.entries.some(e=>e.fullPath===me))return;We.current=he,Ee.current=me,je(new Set([me])),He({path:me,value:x(me)});let t=pt.findIndex(e=>e.entry.fullPath===me),n=z.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*mt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(me)}"]`)?.scrollIntoView({block:`nearest`})})}},[z,e,me,he,mt,pt,i.mode]),(0,R.useEffect)(()=>{if(!Ve)return;let e=pt.findIndex(e=>e.entry.fullPath===Ve.path),t=z.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*mt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ve.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[z,Ve,mt,pt,i.mode]);let Ut=(0,R.useCallback)(()=>Ie(null),[]),Gt=(0,R.useCallback)((e,t)=>{e.isDirectory?d(e.fullPath,qt(t)):f?.(e.fullPath,qt(t))},[d,f]),Kt=(0,R.useCallback)((e,t,n)=>{Oe({entry:e,x:t,y:n})},[]),Yt=(0,R.useRef)(null),Xt=(0,R.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;gc(e,B.has(n)?[...B]:[n])},[B]),Qt=(0,R.useCallback)(e=>{if(!fc(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Yt.current=t?.dataset.directory===`true`?t.dataset.path??Rt:Rt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Rt]),$t=(0,R.useCallback)(e=>{if(ce)return;let{paths:t,move:n}=pc(e),r=Yt.current??Rt;Yt.current=null,t.length!==0&&w&&(e.preventDefault(),w(t,r,!e.ctrlKey&&n))},[Rt,w,ce]),en=(0,R.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),ce||!t&&!I)return;let n=V.current;t&&!n.has(t)&&je(new Set([t])),t&&(Ee.current=t);let r=t?n.has(t)?[...n]:[t]:[];Ie({x:e.clientX,y:e.clientY,paths:r,background:!t}),vt().then(Xe,()=>Xe(!1))},[I,Rt]),tn=(0,R.useCallback)(()=>v?.(),[v]),nn=(e,t)=>{Ee.current=e,je(new Set([e])),t&&He({path:e,value:x(e)}),tn()},rn=Re&&(0,q.jsx)(Uo,{initialDirectory:Rt,initialName:Re.name,onCancel:()=>H(null),onCompress:async e=>{let t=await Vt(Re.paths,e);return!t.ok||!t.path?(za(t.error??L(`could_not_create_the_archive`)),!1):(nn(t.path,!1),!0)}}),an=async(e,t=!1)=>{let n=e,r=t;if(e.some(qc)){let t=[];for(let n of e)if(!qc(n))t.push(n);else{if(Pe.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){za(L(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await Zc(n))}catch(e){za(e instanceof Error?e.message:L(`the_file_could_not_be_copied`));return}}n=t,r=!1}await _t(n,r)&&(Xe(!0),b?.())},on=async e=>{if(!e)return;let t=await St(e);t.cancelled||(t.ok?(ye.current=t.created,tn(),k?.()):za(L(`nothing_on_the_clipboard_could_be_pasted_here`)))},sn=async(e,t=!1)=>{if(!Rt)return;let n=e===null?await Tt(Rt,t):await kt(Rt,e);!n.ok||n.path===null?za(n.error??L(`could_not_create_the_item`)):(Ee.current=n.path,je(new Set([n.path])),He({path:n.path,value:x(n.path)}),tn())},cn=e=>{je(new Set([e.fullPath])),Ee.current=e.fullPath,He({path:e.fullPath,value:e.name})},ln=(0,R.useCallback)(e=>He(t=>t&&{...t,value:e}),[]),un=(0,R.useCallback)(()=>He(null),[]),dn=(0,R.useCallback)(async()=>{let e=Ue.current;if(He(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Pe.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await wt(e.path,t);r.ok?(Ht(),r.path&&y?.(e.path,r.path),tn(),window.setTimeout(()=>tn(),250)):za(r.error??L(`could_not_rename_the_entry`))},[Ht,y,tn,L]),fn=async(e,t=!1)=>{if((t||A)&&!await pn(e,t))return;let n=await Ct(e,t);if(!n.ok&&n.needsPermanent){if(!await pn(e,!0))return;n=await Ct(e,!0)}if(n.ok)Ht(),tn();else{if(n.cancelled)return;za(n.error??L(t?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},pn=(0,R.useCallback)((e,t)=>new Promise(n=>Be({paths:e,permanent:t,resolve:n})),[]),mn=(0,R.useCallback)(e=>{Be(t=>(t?.resolve(e),null))},[]);(0,R.useEffect)(()=>{if(!g||Fe)return;let e=e=>{if(Zt(e.target))return;Ge.current?.();let t=Jt(e),n=[...B],r=n.length===1?pt.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Pt.length===0)return;e.preventDefault();let n=Ee.current&&Pt.includes(Ee.current)?Ee.current:B.size===1?[...B][0]:null,r=n?Pt.indexOf(n):-1,i=t===`home`?0:t===`end`?Pt.length-1:Math.max(0,Math.min(Pt.length-1,r+(t===`arrowdown`?1:-1))),a=Pt[i];je(new Set([a])),Ee.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===h.copy?i(()=>{n.length>0&&an(n)}):t===h.cut?i(()=>{n.length>0&&an(n,!0)}):t===h.paste?i(()=>void on(Rt)):t===h.delete?i(()=>{n.length>0&&fn(n)}):t===h.deletePermanently?i(()=>{n.length>0&&fn(n,!0)}):t===h.selectAll?i(()=>{je(new Set(Pt)),Ee.current=Pt[0]??null}):t===h.invertSelection?i(()=>{je(new Set(Pt.filter(e=>!B.has(e)))),Ee.current=Pt[0]??null}):t===h.rename&&r?i(()=>void cn(r)):t===h.open&&r?i(()=>{r.isDirectory?d(r.fullPath):f?.(r.fullPath)}):t===h.newFolder||t===`f10`?i(()=>void sn(null)):t===h.terminal?i(()=>void Nt(Rt)):t===h.properties&&i(()=>void At(n.length>0?n:Rt?[Rt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Pt,an,sn,Rt,g,Fe,d,f,on,fn,cn,pt,B,h]);let W=ze&&(0,q.jsx)(ns,{confirmLabel:ze.permanent?L(`delete`):L(`move`),danger:ze.permanent,message:ze.permanent?L(`permanently_delete_target_this_cannot_be_undone`,{target:ze.paths.length===1?L(`this_item`):L(`count_items`,{count:ze.paths.length})}):L(`move_target_to_the_recycle_bin`,{target:ze.paths.length===1?L(`this_item`):L(`count_items`,{count:ze.paths.length})}),onCancel:()=>mn(!1),onConfirm:()=>mn(!0),open:!0,title:ze.permanent?L(`delete_permanently`):L(`move_to_the_recycle_bin`)}),G=(0,R.useMemo)(()=>{if(!e||B.size===0)return null;let t=Pt.find(e=>B.has(e));return t?pt.find(e=>e.entry.fullPath===t)?.entry??null:null},[Pt,e,pt,B]),K=(0,R.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:x(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:L(`type`),value:L(`folder`)},{label:L(`location`),value:e.parent??`—`},{label:L(`path`),value:e.path},{label:L(`size`),value:C(t)},{label:L(`items`),value:ie(L,n,`k_1_item`,`count_items`)},{label:L(`modified`),value:`—`},{label:L(`created`),value:`—`},{label:L(`attributes`),value:`—`}]}},[e,L]),hn=(0,R.useMemo)(()=>{if(!G||!e)return null;let t=G.isDirectory?e.folderSizes[G.name]:void 0,n=e.tags[G.name]??[],r=G.name.lastIndexOf(`.`),i=r>0&&r<G.name.length-1?G.name.slice(r+1).toUpperCase():`—`;return{name:G.name,path:G.fullPath,isDirectory:G.isDirectory,size:G.size,modified:G.modified,created:G.created,fields:[{label:L(`type`),value:Il(G,L)},...G.isEncrypted?[{label:L(`encryption`),value:L(`password_required`)}]:[],{label:L(`extension`),value:G.isDirectory?`—`:i},{label:L(`location`),value:e.path},{label:L(`full_path`),value:G.fullPath},{label:L(`size`),value:G.isDirectory?t===void 0?`—`:C(t):C(G.size)},...G.isDirectory?[{label:L(`items`),value:`${e.counts[G.name]??`—`}`}]:[],{label:L(`modified`),value:P(G.modified)},{label:L(`created`),value:P(G.created)},{label:L(`link_status`),value:G.linkTarget==null?G.linkCount>1?L(`hard_link`):`—`:G.linkValid?`ok`:L(`broken`)},...G.linkTarget?[{label:L(`target`),value:G.linkTarget}]:[],...G.linkCount>1?[{label:L(`links`),value:String(G.linkCount)}]:[],{label:L(`attributes`),value:[G.isHidden?L(`hidden`):``,G.isSystem?L(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:L(`tags`),value:n.join(`, `)}]:[]]}},[e,G,L]),gn=Fe?.paths.length===1?Fe.paths[0]:null,_n=gn?pt.find(e=>e.entry.fullPath===gn)?.entry:void 0,vn=_n?{path:_n.fullPath,isDirectory:_n.isDirectory}:null,yn=hn??K,bn=(0,R.useRef)(N);bn.current=N,(0,R.useEffect)(()=>{bn.current?.(yn)},[N,yn]);let xn=M&&yn&&(0,q.jsx)(ps,{info:yn,onWidth:Je,selectionNote:B.size>1?ie(L,B.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:j,videoAutoplay:ne,width:Ke});return n&&!e?(0,q.jsx)(Bu,{children:(0,q.jsx)(Hu,{children:n})}):!e&&!t?(0,q.jsx)(Bu,{children:(0,q.jsx)(Vu,{children:L(`nothing_selected`)})}):i.mode===`grid`?(0,q.jsxs)(ru,{onPointerDown:re,children:[(0,q.jsxs)(iu,{children:[(0,q.jsxs)(fu,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Ht()},onContextMenu:e=>en(e),onDragOver:Qt,onDragStart:Xt,onDrop:$t,onScroll:e=>{oe?.(e.currentTarget),xt(e.currentTarget)},children:[p&&pt.length>0&&(0,q.jsxs)(eu,{children:[(0,q.jsx)(Ql,{$checked:!pe&&Ft,$partial:!pe&&It,"aria-label":L(Ft?`select_none`:`select_all`),disabled:pe,onClick:e=>{e.stopPropagation(),Lt()},title:L(Ft?`select_none`:`select_all`),type:`button`,children:Ft?(0,q.jsx)(Pi,{size:10}):It?(0,q.jsx)($l,{}):null}),(0,q.jsx)(`span`,{children:L(Ft?`select_none`:`select_all`)})]}),t&&!e?(0,q.jsx)(_u,{$size:i.gridSize,children:(0,q.jsx)(Hl,{size:i.gridSize})}):(0,q.jsx)(Wl,{counts:e?.counts,currentPath:nt?r.currentPath:null,groups:Et,gridSize:i.gridSize,innerRef:ve,onContextMenu:en,onOpen:d,onOpenFile:f,onRenameCancel:un,onRenameChange:ln,onRenameCommit:dn,onSelect:zt,onToggle:Bt,openOnSingleClick:m,renaming:Ve,searching:nt,selected:B,showCheckboxes:p,showTarget:it}),!t&&e&&pt.length===0&&(0,q.jsx)(zu,{children:(0,q.jsx)(Vu,{children:n??(nt&&r.mode===`hide`?L(`no_entries_match_the_search`):L(`this_folder_is_empty`))})}),se]}),Fe&&(0,q.jsx)(Do,{canPaste:Ye,directory:Rt,platform:E,allowCompression:!0,menu:Fe,onAddToTray:T,onAddFavorite:ee,onRemoveFavorite:D,favoritePaths:O,onExtractArchive:te,onArchiveCreated:nn,onClose:Ut,onCompressTo:(e,t)=>H({paths:e,name:t}),onCopy:an,onCreateFile:e=>void sn(e),onCreateFolder:e=>void sn(null,e),onDelete:fn,onOpen:d,onOpenFile:f,onPaste:on,onRefresh:tn,onRename:e=>{let t=pt.find(t=>t.entry.fullPath===e)?.entry;t&&cn(t)},shortcuts:h,target:vn}),rn,W]}),xn]}):(0,q.jsxs)(ru,{onPointerDown:re,children:[(0,q.jsxs)(iu,{children:[(0,q.jsxs)(au,{onScroll:e=>{z.current&&z.current.scrollLeft!==e.currentTarget.scrollLeft&&(z.current.scrollLeft=e.currentTarget.scrollLeft)},ref:be,style:{gridTemplateColumns:ot},children:[(0,q.jsxs)(Yl,{ref:ct,children:[p&&(0,q.jsx)(Ql,{$checked:!pe&&Ft,$partial:!pe&&It,"aria-label":L(Ft?`select_none`:`select_all`),disabled:pe,onClick:e=>{e.stopPropagation(),Lt()},title:L(Ft?`select_none`:`select_all`),type:`button`,children:Ft?(0,q.jsx)(Pi,{size:10}):It?(0,q.jsx)($l,{}):null}),(0,q.jsxs)(ou,{onClick:()=>l(`name`),type:`button`,children:[L(`name`),Ol(i,`name`)]}),(0,q.jsx)(Zl,{"aria-label":L(`resize_column`),onDoubleClick:()=>rt[0]&&ft(rt[0].id),onPointerDown:ut,role:`separator`})]}),rt.map((e,t)=>(0,q.jsxs)(Xl,{children:[(0,q.jsxs)(ou,{onClick:()=>l(e.id),type:`button`,children:[L(e.label),Ol(i,e.id)]}),t<rt.length-1&&(0,q.jsx)(Zl,{"aria-label":L(`resize_column`),onDoubleClick:()=>ft(e.id),onPointerDown:e=>dt(e,t),role:`separator`})]},e.id))]}),(0,q.jsxs)(su,{onClick:e=>{e.target===e.currentTarget&&Ht()},onContextMenu:e=>en(e),onDragOver:Qt,onDragStart:Xt,onDrop:$t,onScroll:e=>{be.current&&be.current.scrollLeft!==e.currentTarget.scrollLeft&&(be.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;we(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:z,children:[t&&!e?(0,q.jsx)(Vl,{template:ot,columns:rt.length}):(0,q.jsxs)(q.Fragment,{children:[ht>0&&(0,q.jsx)(`div`,{style:{height:ht*mt}}),yt.map(t=>{let n=t.entry.fullPath;return(0,q.jsx)(Kl,{current:nt&&n===r.currentPath,dim:nt&&t.ranges===null,height:mt,iconSize:i.iconSize,innerRef:ve,listing:e,onContextMenu:en,onOpen:Gt,onRenameCancel:un,onRenameChange:ln,onRenameCommit:dn,onSelect:zt,onTagEdit:Kt,onToggle:Bt,openOnSingleClick:m,renaming:Ve?.path===n?{value:Ve.value}:null,row:t,selected:B.has(n),showCheckboxes:p,showTarget:it,template:ot,visible:rt},n)}),gt<pt.length&&(0,q.jsx)(`div`,{style:{height:(pt.length-gt)*mt}})]}),!t&&e&&pt.length===0&&(0,q.jsx)(Bu,{children:(0,q.jsx)(Vu,{children:n??(nt&&r.mode===`hide`?L(`no_entries_match_the_search`):L(`this_folder_is_empty`))})})]}),a&&Dt.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(cu,{onDoubleClick:tt,onPointerDown:Qe,onPointerMove:$e,onPointerUp:et,title:L(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(lu,{style:{height:ke},children:[(0,q.jsxs)(uu,{children:[L(`preview`),(0,q.jsx)(du,{children:Ot>gl?`${jt.length} / ${Ot}`:Ot})]}),(0,q.jsx)(fu,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Ht()},onContextMenu:e=>en(e),children:(0,q.jsx)(Wl,{counts:e?.counts,currentPath:nt?r.currentPath:null,groups:Mt,gridSize:i.gridSize,onContextMenu:en,onOpen:d,onOpenFile:f,onSelect:zt,onToggle:Bt,openOnSingleClick:m,searching:nt,selected:B,showCheckboxes:p,showTarget:it})})]})]}),De&&e&&(0,q.jsx)(Js,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(De.entry.name,e,t),onClose:()=>Oe(null),tags:e.tags[De.entry.name]??[],x:De.x,y:De.y}),Fe&&(0,q.jsx)(Do,{canPaste:Ye,directory:Rt,platform:E,allowCompression:!0,menu:Fe,onAddToTray:T,onAddFavorite:ee,onRemoveFavorite:D,favoritePaths:O,onExtractArchive:te,onArchiveCreated:nn,onClose:Ut,onCompressTo:(e,t)=>H({paths:e,name:t}),onCopy:an,onCreateFile:e=>void sn(e),onCreateFolder:e=>void sn(null,e),onDelete:fn,onOpen:d,onOpenFile:f,onPaste:on,onRefresh:tn,onRename:e=>{let t=pt.find(t=>t.entry.fullPath===e)?.entry;t&&cn(t)},shortcuts:h,target:vn}),rn,W]}),xn]})}function Ol(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var kl=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Al(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Il(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:kl.compare(String(r),String(i));return t.sortDescending?-o:o})}var jl=jn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Nn(t.entry.name)===e})),Ml=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...jl.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function Nl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Pl(e){return Math.max(24,Math.min(e-56,160))}var Fl={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Il(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`internet_shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`folder_link`):t(`symbolic_link`);if(e.isDirectory)return t(`folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Fl[sc(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`file`)}function Ll(e,t,n,r){switch(e){case`type`:return Il(t,r);case`size`:return zl(t,n.folderSizes);case`modified`:return P(t.modified);case`created`:return P(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:r(`broken`);default:return``}}function Rl({name:e,ranges:t}){if(!t||t.length===0)return(0,q.jsx)(q.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,q.jsx)(Ru,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,q.jsx)(q.Fragment,{children:n})}function zl(e,t){if(!e.isDirectory)return C(e.size);let n=t[e.name];return n===void 0?`—`:C(n)}function Bl({entry:e,size:t=18}){let n=o(),r=(0,R.useRef)(null),[i,a]=(0,R.useState)(!1);(0,R.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let s=mn(i?e.fullPath:null,e.isDirectory,t>32),c=G(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,q.jsxs)(ql,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,q.jsx)(cc,{name:e.iconSource.slice(5),size:t}):c?(0,q.jsx)(`img`,{alt:``,height:t,src:c,width:t}):s?(0,q.jsx)(`img`,{alt:``,height:t,src:s,width:t}):e.isDirectory?(0,q.jsx)(_i,{size:t}):(0,q.jsx)(cc,{name:sc(e.name),size:t}),e.isEncrypted&&(0,q.jsx)(Jl,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,q.jsx)(Oa,{size:Math.max(8,Math.round(t*.52))})})]})}function Vl({template:e,columns:t}){return(0,q.jsx)(q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,q.jsxs)(vu,{style:{gridTemplateColumns:e},children:[(0,q.jsxs)(xu,{children:[(0,q.jsx)(yu,{style:{flexShrink:0,height:18,width:18}}),(0,q.jsx)(yu,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,q.jsx)(yu,{style:{width:t%2==0?44:92}},t))]},r))})}function Hl({size:e}){return(0,q.jsx)(q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,q.jsxs)(Mu,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,q.jsx)(Nu,{children:(0,q.jsx)(yu,{style:{height:e,width:e}})}),(0,q.jsx)(Fu,{children:(0,q.jsx)(yu,{style:{height:9,width:`${t}%`}})})]},n))})}var Ul=(0,R.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=o(),x=Rn(),S=!e.entry.isDirectory&&Pn(e.entry.name),w=(0,R.useRef)(null),[T,E]=(0,R.useState)(!1);(0,R.useEffect)(()=>{if(!S||T)return;let e=w.current;if(!e)return;if(!(`IntersectionObserver`in window)){E(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(E(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,T]);let ee=_n(S&&T?e.entry.fullPath:null,192,e.entry.modified),[D,O]=(0,R.useState)(!1),te=S&&ee!==null&&!D,k=e.entry.fullPath,A=t=>{e.entry.isDirectory?v(k,qt(t)):y?.(k,qt(t))};return(0,q.jsxs)(Mu,{$current:t,$dim:n,$image:te,$selected:c,onClick:e=>{h(e,k),u&&A(e)},onContextMenu:e=>_(e,k),onDoubleClick:e=>{u||A(e)},ref:e=>{w.current=e,t&&s&&(s.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":k,draggable:!d,children:[l&&(0,q.jsx)(nu,{$checked:c,onClick:e=>{e.stopPropagation(),g(k)},onDoubleClick:e=>e.stopPropagation(),title:b(c?`deselect`:`select`),type:`button`,children:c&&(0,q.jsx)(Pi,{size:10})}),(0,q.jsx)(Nu,{children:te?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>O(!0),src:ee}):(0,q.jsx)(Pu,{children:e.place&&x.useIcons?(0,q.jsx)(Gs,{place:e.place,size:r}):(0,q.jsx)(Bl,{entry:e.entry,size:r})})}),(0,q.jsxs)(Fu,{children:[d?(0,q.jsx)(Gl,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:d.value}):(0,q.jsx)(Iu,{$broken:e.entry.linkValid===!1,children:(0,q.jsx)(Rl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,q.jsxs)(Cu,{title:b(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(Oa,{size:9}),b(`encrypted`)]}),e.cut&&(0,q.jsxs)(wu,{title:b(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,q.jsx)(xa,{size:9}),b(`cut`)]}),(0,q.jsx)(Lu,{children:e.entry.isDirectory?i===void 0?Il(e.entry,b):b(`type_count_items`,{type:Il(e.entry,b),count:i}):b(`type_size`,{type:Il(e.entry,b),size:C(e.entry.size)})}),a&&e.entry.linkTarget&&(0,q.jsxs)(Eu,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,q.jsx)(Ma,{size:9}),(0,q.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Wl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onSelect:f,onToggle:p,onContextMenu:m,onOpen:h,onOpenFile:g,onRenameChange:_,onRenameCommit:v,onRenameCancel:y}){let b=o();return(0,q.jsx)(q.Fragment,{children:e.map(e=>(0,q.jsxs)(pu,{children:[(0,q.jsxs)(mu,{children:[b(e.label),(0,q.jsx)(hu,{children:e.rows.length}),(0,q.jsx)(gu,{})]}),(0,q.jsx)(_u,{$size:t,children:e.rows.map(e=>(0,q.jsx)(Ul,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Pl(t),innerRef:s,itemCount:n?.[e.entry.name],onContextMenu:m,onOpen:h,onOpenFile:g,onSelect:f,onToggle:p,openOnSingleClick:u,onRenameCancel:y,onRenameChange:_,onRenameCommit:v,renaming:d?.path===e.entry.fullPath?d:null,row:e,selected:c.has(e.entry.fullPath),showCheckboxes:l,showTarget:r},e.entry.fullPath))})]},e.id))})}function Gl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,R.useRef)(null);return(0,R.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,q.jsx)(Tu,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Kl=(0,R.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:s,iconSize:c,height:l,template:u,visible:d,listing:f,innerRef:p,renaming:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onTagEdit:y,onRenameChange:b,onRenameCommit:x,onRenameCancel:S}){let C=o(),w=Rn(),T=e.entry.fullPath;return(0,q.jsxs)(bu,{$current:t,$dim:n,$height:l,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{h(t,T),s&&v(e.entry,t)},onContextMenu:e=>_(e,T),onDoubleClick:t=>{s||v(e.entry,t)},ref:t?p:void 0,style:{gridTemplateColumns:u},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!m,children:[(0,q.jsxs)(xu,{children:[i&&(0,q.jsx)(tu,{$checked:r,onClick:e=>{e.stopPropagation(),g(T)},onDoubleClick:e=>e.stopPropagation(),title:C(r?`deselect`:`select`),type:`button`,children:r&&(0,q.jsx)(Pi,{size:10})}),e.place&&w.useIcons?(0,q.jsx)(ql,{children:(0,q.jsx)(Gs,{place:e.place,size:c})}):(0,q.jsx)(Bl,{entry:e.entry,size:c}),m?(0,q.jsx)(Gl,{onCancel:S,onChange:b,onCommit:x,value:m.value}):(0,q.jsx)(Su,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,q.jsx)(Rl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,q.jsxs)(Cu,{title:C(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(Oa,{size:9}),C(`encrypted`)]}),e.cut&&(0,q.jsxs)(wu,{title:C(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,q.jsx)(xa,{size:9}),C(`cut`)]}),a&&e.entry.linkTarget&&(0,q.jsxs)(Eu,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,q.jsx)(Ma,{size:9}),(0,q.jsx)(`span`,{children:e.entry.linkTarget})]})]}),d.map(t=>(0,q.jsx)(Du,{children:t.id===`tags`?(0,q.jsx)(Ou,{onClick:t=>{t.stopPropagation(),y(e.entry,t.clientX,t.clientY)},title:C(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=f.tagColors?.[e]??`#64748b`;return(0,q.jsx)(ku,{$color:t,$ink:qs(t),children:e},e)}):(0,q.jsx)(Au,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,q.jsx)(ju,{children:C(`broken`)}):Ll(t.id,e.entry,f,C)},t.id))]})}),ql=v.span`
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
`,Jl=v.span`
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
`,Yl=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,Xl=v.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,Zl=v.span`
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
`,Ql=v.button`
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
`,$l=v.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,eu=v.div`
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
`,tu=v.button`
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
`,nu=v(tu)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,ru=v.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,iu=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,au=v.div`
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
`,ou=v.button`
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
`,su=v.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,cu=v.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,lu=v.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,uu=v.div`
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
`,du=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,fu=v.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,pu=v.section`
    & + & {
        margin-top: 22px;
    }
`,mu=v.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,hu=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,gu=v.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,_u=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,vu=v.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,yu=v.span`
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
`,bu=v.div`
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
`,xu=v.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Su=v.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cu=v.span`
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
`,wu=v.span`
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
`,Tu=v.input`
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
`,Eu=v.span`
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
`,Du=v.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ou=v.button`
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
`,ku=v.span`
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
`,Au=v.span`
    color: var(--text-muted);
    font-size: 11px;
`,ju=v.span`
    color: #fca5a5;
`,Mu=v.div`
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
`,Nu=v.div`
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
`,Pu=v.span`
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
`,Fu=v.div`
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
`,Iu=v.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Lu=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Ru=v.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,zu=v.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Bu=v.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Vu=v.p`
    font-size: 13px;
    color: var(--text-muted);
`,Hu=v.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Uu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Wu=`/assets/bloom-BpfZWiaG.mp4`,Gu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Ku=`/assets/drift-BRBSQL2_.mp4`,qu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Ju=`/assets/ember-CtSz0YxR.mp4`,Yu=[{name:`blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`slate`,accent:`#64748b`,secondary:`#94a3b8`}],Xu=[{id:`aurora`,name:`aurora`},{id:`dunes`,name:`dunes`},{id:`tide`,name:`tide`}],Zu=[{id:`builtin:video:drift`,name:`drift`,url:Ku,poster:Gu},{id:`builtin:video:ember`,name:`ember`,url:Ju,poster:qu},{id:`builtin:video:bloom`,name:`bloom`,url:Wu,poster:Uu}],Qu=Xu.map(e=>({...e,variants:Yu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:id(ad(e.id,t,!1)),lightUrl:id(ad(e.id,t,!0))}))})),$u=[{id:`ridgeline`,name:`ridgeline`},{id:`skyline`,name:`skyline`},{id:`orbit`,name:`orbit`}].flatMap(e=>Yu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:id(od(e.id,t,!1)),lightUrl:id(od(e.id,t,!0))}))),ed=new Map([...Qu.flatMap(e=>e.variants),...$u].map(e=>[e.id,e])),td=new Map(Zu.map(e=>[e.id,e]));function nd(e,t=`dark`){if(td.has(e))return td.get(e).url;let n=ed.get(e)??ed.get(`builtin:${e.split(`:`)[1]??``}:indigo`);return n?t===`light`?n.lightUrl:n.url:null}function rd(e){return td.has(e)}function id(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function ad(e,t,n){return e===`dunes`?pd(t,n):e===`tide`?md(t,n):fd(t,n)}function od(e,t,n){return e===`skyline`?cd(t,n):e===`orbit`?ld(t,n):sd(t,n)}function sd({accent:e,secondary:t},n){let r=dd(t,n?`#e8eefc`:`#05070f`,n?.9:.86),i=dd(e,n?`#f6f8ff`:`#0b1020`,n?.84:.72),a=dd(t,n?`#dbe3f0`:`#0a0f1d`,n?.55:.66),o=dd(e,n?`#c3cfdf`:`#060a14`,n?.6:.74),s=n?`#e9eefb`:`#05070d`,c=dd(e,n?`#a9b8cc`:`#03050a`,n?.62:.9);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${dd(t,`#ffffff`,n?.45:.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${a}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${o}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${c}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function cd({accent:e,secondary:t},n){let r=dd(t,n?`#e9eefc`:`#07040d`,n?.9:.84),i=dd(e,n?`#f4f6ff`:`#100716`,n?.82:.7),a=dd(e,n?`#b7c4d6`:`#08050e`,n?.7:.82),o=dd(t,n?`#c9d3e2`:`#0b0613`,n?.66:.78),s=[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],i)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${i%2?a:o}" opacity="0.92"/>`+Array.from({length:5},(a,o)=>`<rect x="${t+14}" y="${n+24+o*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+i%3*.05}"/>`).join(``)).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${dd(e,n?`#d5deea`:`#040208`,n?.7:.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function ld({accent:e,secondary:t},n){let r=dd(e,n?`#eef3ff`:`#03050d`,n?.88:.9),i=dd(t,n?`#f8faff`:`#05030c`,n?.9:.94),a=dd(t,e,.35),o=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="${n?`#64748b`:`#ffffff`}" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${dd(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${r}"/>
            <stop offset="1" stop-color="${i}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${dd(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${dd(e,n?`#cfd9e6`:`#08050f`,n?.55:.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${dd(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function ud(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function dd(e,t,n){let[r,i,a]=ud(e),[o,s,c]=ud(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function fd({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${dd(e,n?`#f2f6ff`:`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${dd(t,n?`#eef2ff`:`#070b1c`,n?.86:.85)}"/>
            <stop offset="1" stop-color="${dd(e,n?`#e8f0fb`:`#04060c`,n?.9:.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${dd(e,t,.5)}" opacity="${n?.26:.42}" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="${n?.32:.5}" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="${n?.3:.42}" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="${n?.26:.36}" filter="url(#soft2)"/>
</svg>`}function pd({accent:e,secondary:t},n){let r=dd(t,n?`#fff4e2`:`#120a05`,n?.9:.84),i=dd(t,n?`#fff8ee`:`#1c0f07`,n?.82:.7),a=dd(e,t,.25),o=dd(e,n?`#e2cdae`:`#160b04`,n?.5:.55),s=dd(e,n?`#ecdcc2`:`#1a0d05`,n?.6:.7),c=dd(e,n?`#d9c1a2`:`#0b0603`,n?.7:.82);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1480" cy="250" r="110" fill="${dd(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${c}" opacity="${n?.5:.75}"/>
</svg>`}function md({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${dd(e,n?`#e6f7fb`:`#02070a`,n?.88:.9)}"/>
            <stop offset="0.5" stop-color="${dd(t,n?`#eefaf8`:`#03100f`,n?.85:.82)}"/>
            <stop offset="1" stop-color="${dd(e,n?`#dff2f7`:`#020609`,n?.9:.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${dd(e,t,.4)}" opacity="${n?.34:.5}" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var hd=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function gd(e){return hd.test(e)}function _d({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):A(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=yn(i),o=n?.startsWith(`builtin:`)?nd(n,t):r??a,s=r===null?i===null?n!==null&&rd(n):gd(i):gd(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,q.jsxs)(vd,{"aria-hidden":!0,children:[s?(0,q.jsx)(bd,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,q.jsx)(yd,{src:o,style:{filter:c}}),(0,q.jsx)(xd,{})]})}var vd=v.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,yd=v.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,bd=v.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,xd=v.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`;function Sd({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let s=o(),c=(0,R.useRef)(null),[l,u]=(0,R.useState)(()=>Math.max(1,Math.ceil(n))),d=e??`delete`;return(0,R.useEffect)(()=>{c.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));u(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,Za.createPortal)((0,q.jsx)(Ed,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,q.jsxs)(Dd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(Od,{children:s(`protected_folder`)}),(0,q.jsx)(kd,{children:s(`these_paths_are_protected_by_the_safety_settings`)}),(0,q.jsx)(Ad,{children:t.map(e=>(0,q.jsxs)(jd,{children:[(0,q.jsx)(Md,{children:e.path}),(0,q.jsx)(Nd,{children:s(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,q.jsx)(Pd,{children:Cd(s,d,r??!1)}),(0,q.jsx)(Fd,{children:wd(s,d)}),(0,q.jsx)(Id,{children:s(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,q.jsxs)(Ld,{children:[(0,q.jsx)(Rd,{onClick:i,ref:c,type:`button`,children:s(`cancel`)}),(0,q.jsx)(zd,{disabled:l>0,onClick:a,type:`button`,children:l>0?Td(s,d,l):Td(s,d,0)})]})]})}),document.body)}function Cd(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function wd(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function Td(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var Ed=v.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${po}
`,Dd=v.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${so}
`,Od=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,kd=v.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Ad=v.div`
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
`,jd=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Md=v.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Nd=v.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Pd=v.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Fd=v.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Id=v.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Ld=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Rd=v.button`
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
`,zd=v.button`
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
`;function Bd(){let e=o(),[t,n]=(0,R.useState)(null),r=(0,R.useRef)(null),i=(0,R.useRef)(null);(0,R.useEffect)(()=>(Ra(e=>new Promise(t=>{r.current=t,n(e)})),()=>Ra(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,R.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Za.createPortal)((0,q.jsx)(Vd,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,q.jsxs)(Hd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(Ud,{children:e(`notice`)}),(0,q.jsx)(Wd,{children:t}),(0,q.jsx)(Gd,{children:(0,q.jsx)(Kd,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var Vd=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${po}
`,Hd=v.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${so}
`,Ud=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Wd=v.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Gd=v.div`
    display: flex;
    justify-content: flex-end;
`,Kd=v.button`
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
`;function qd(){let e=o(),[t,n]=(0,R.useState)(null),[r,i]=(0,R.useState)(``),a=(0,R.useRef)(null),s=(0,R.useRef)(null);(0,R.useEffect)(()=>(Ba((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Ba(null)),[]),(0,R.useEffect)(()=>{t&&window.setTimeout(()=>s.current?.focus(),0)},[t]);let c=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let l=()=>{r.length>0&&c(r)};return(0,Za.createPortal)((0,q.jsx)(Jd,{onPointerDown:e=>{e.target===e.currentTarget&&c(null)},children:(0,q.jsxs)(Yd,{role:`dialog`,"aria-modal":`true`,children:[(0,q.jsx)(Xd,{children:e(`archive_password`)}),(0,q.jsx)(Zd,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,q.jsx)(Qd,{title:t.archive,children:t.archive}),(0,q.jsx)($d,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),l()):e.key===`Escape`&&(e.preventDefault(),c(null))},ref:s,spellCheck:!1,type:`password`,value:r}),(0,q.jsxs)(ef,{children:[(0,q.jsx)(tf,{onClick:()=>c(null),type:`button`,children:e(`cancel`)}),(0,q.jsx)(nf,{disabled:r.length===0,onClick:l,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Jd=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${po}
`,Yd=v.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${so}
`,Xd=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Zd=v.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Qd=v.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$d=v.input`
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
`,ef=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,tf=v.button`
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
`,nf=v(tf)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function rf({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:s,compact:c=!1,placeholder:l,onQuery:u,onPrevious:d,onNext:f,onMatchCase:p,onRegex:m,onMode:h,onClose:g,onSelectMatches:_}){let v=o(),y=(0,R.useRef)(null),b=l??v(`search_this_folder`);(0,R.useEffect)(()=>{let e=y.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[s]);let x=e=>{e(),y.current?.focus()};return(0,q.jsxs)(af,{children:[(0,q.jsx)(bi,{}),(0,q.jsx)(of,{"aria-label":b,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?d():f()),e.key===`Escape`&&(e.preventDefault(),g())},placeholder:b,ref:y,spellCheck:!1,value:e}),!c&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(sf,{children:i===0?`0/0`:`${a+1}/${i}`}),_&&(0,q.jsx)(cf,{disabled:i===0,onClick:_,title:v(`select_all_matches`),type:`button`,children:(0,q.jsx)(Pi,{size:12})}),(0,q.jsx)(cf,{$chevron:!0,onClick:()=>x(d),title:v(`previous_match_shift_enter`),type:`button`,children:(0,q.jsx)(Ei,{size:12})}),(0,q.jsx)(cf,{$chevron:!0,$down:!0,onClick:()=>x(f),title:v(`next_match_enter`),type:`button`,children:(0,q.jsx)(Ei,{size:12})})]}),(0,q.jsx)(lf,{$on:n,onClick:()=>x(p),title:v(`match_case`),type:`button`,children:`Aa`}),(0,q.jsx)(lf,{$on:r,onClick:()=>x(m),title:v(`regular_expression`),type:`button`,children:`.*`}),!c&&(0,q.jsx)(uf,{$on:t===`hide`,onClick:()=>x(h),title:v(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,q.jsx)(Li,{size:12}):(0,q.jsx)(Ii,{size:12})}),(0,q.jsx)(cf,{onClick:g,title:v(`close_search_esc`),type:`button`,children:(0,q.jsx)(Fi,{size:12})})]})}var af=v.div`
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
    ${uo}
`,of=v.input`
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
`,sf=v.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,cf=v.button`
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
`,lf=v.button`
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
`,uf=v(lf)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function df(e,t,n,r,i=[]){(0,R.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=Cn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function ff({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=o(),a=(0,R.useRef)(null),s=(0,R.useRef)(null),[c,l]=(0,R.useState)(null);return(0,R.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();l({top:t.bottom+6,left:t.left})},[]),(0,R.useLayoutEffect)(()=>{if(!c||!s.current)return;let e=s.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,c.top-e.height-12):c.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):c.left;(t!==c.top||n!==c.left)&&l({top:t,left:n})},[c]),(0,R.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{ref:a,style:{display:`none`}}),c&&(0,Za.createPortal)((0,q.jsxs)(pf,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:s,style:{position:`fixed`,top:c.top,left:c.left},children:[Object.keys(Bs).map(n=>(0,q.jsx)(mf,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Bs[n](16)},n)),(0,q.jsx)(mf,{onClick:async()=>{let e=await Fa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`choose_an_image`),type:`button`,children:(0,q.jsx)(Ci,{size:13})}),r&&(0,q.jsx)(mf,{$active:!e,onClick:()=>t(null),title:i(`default`),type:`button`,children:(0,q.jsx)(Fi,{size:12})})]}),document.body)]})}var pf=v.div`
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
    ${co}
    transform-origin: top left;
`,mf=v.button`
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
`;function hf({source:e,poster:t,theme:n}){let r=A(e),i=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,a=yn(e.startsWith(`builtin:`)||r?null:e,0,i?`.${i}`:``),o=t??nd(e,n)??(r?e:a),s=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(i);return o?s?(0,q.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o}):(0,q.jsx)(`img`,{alt:``,src:o}):null}function gf({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let s=o(),c=(0,R.useRef)(null),l=(0,R.useRef)(null),u=(0,R.useRef)(!1),[d,f]=(0,R.useState)(null),[p,m]=(0,R.useState)(null),[h,g]=(0,R.useState)(0),_=()=>{let t=c.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?f({width:1920,height:1080}):n>0&&r>0&&f({width:n,height:r}),i.width>0&&i.height>0&&m({width:i.width,height:i.height})},v=p&&d?Math.min(p.height,n*(p.width/d.width)):0,y=Math.max(0,(p?.height??0)-v);(0,R.useEffect)(()=>{p&&d&&!u.current&&(u.current=!0,g(Math.min(y,Math.max(0,r*y))))},[p,d,y,r]),(0,R.useEffect)(()=>{let e=()=>_();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,R.useEffect)(()=>{let e=window.requestAnimationFrame(_);return()=>window.cancelAnimationFrame(e)},[e,t]);let b=e=>{l.current={y:e.clientY,top:h},e.currentTarget.setPointerCapture(e.pointerId)},x=e=>{let t=l.current;t&&g(Math.min(y,Math.max(0,t.top+e.clientY-t.y)))},S=e=>{l.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,q.jsx)(Lf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,q.jsxs)(Rf,{children:[(0,q.jsxs)(zf,{children:[(0,q.jsx)(`span`,{children:s(`adjust_banner_framing`)}),(0,q.jsx)(Kf,{onClick:i,title:s(`cancel`),type:`button`,children:(0,q.jsx)(Fi,{size:12})})]}),(0,q.jsx)(Bf,{children:s(`drag_the_frame_to_choose_the_visible_part`)}),(0,q.jsxs)(Vf,{children:[t?(0,q.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{_(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{c.current=e},src:e}):(0,q.jsx)(`img`,{alt:``,draggable:!1,onLoad:_,ref:e=>{c.current=e},src:e}),v>0&&(0,q.jsx)(Hf,{onPointerCancel:S,onPointerDown:b,onPointerMove:x,onPointerUp:S,style:{height:v,top:h},children:(0,q.jsx)(Uf,{})})]}),(0,q.jsxs)(Wf,{children:[(0,q.jsx)(Gf,{onClick:i,type:`button`,children:s(`cancel`)}),(0,q.jsx)(Gf,{$primary:!0,onClick:()=>a(y>0?h/y:r),type:`button`,children:s(`save`)})]})]})})}var _f=150,vf=120,yf=200,bf=v.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,xf=v.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Sf=v.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${yf}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${yf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(yf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(yf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(yf*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${yf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(yf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(yf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(yf*.18)}px),
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
`,Cf=v.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${_f}px);
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
`,wf=v.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,Tf=v.section`
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
`,Ef=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Df=v.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Of=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,kf=v.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Af=v.input`
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
`,jf=v.button`
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
`,Mf=v.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Nf=v.button`
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
`,Pf=v.button`
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
`,Ff=v.span`
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
`,If=v.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Lf=v.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Rf=v.div`
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
`,zf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Bf=v.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,Vf=v.div`
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
`,Hf=v.div`
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
`,Uf=v.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,Wf=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Gf=v.button`
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
`,Kf=v.button`
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
`,qf=v.button`
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
`,Jf=v.div`
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
`,Yf=v.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Xf=v.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Zf=v.button`
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
`,Qf=v.div`
    position: relative;
    display: inline-flex;
`,$f=v.div`
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
`,ep=v.button`
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
`,tp=v.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,np=v.section`
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
`,rp=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,ip=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,ap=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,op=v.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,sp=v.input`
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
`,cp=v.button`
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
`,lp=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,up=v.div`
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
`,dp=v.span`
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
`,fp=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,pp=v.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,mp=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,hp=v.button`
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
`,gp=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,_p=v.button`
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
`,vp=v.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,yp=v.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,bp=v.div`
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
`,xp=v.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Sp=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Cp=v.button`
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
`,wp=v.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Tp=v.button`
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
`,Ep=v.button`
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
`,Dp=v.button`
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
`,Op=v.span`
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
`,kp=v.button`
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
`,Ap=v.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,jp=v.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,Mp=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Np=v.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Pp=v.input`
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
`,Fp=v.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Ip=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Lp=v.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Rp=v.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,zp=v.button`
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
`;function Bp({theme:e,places:t,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:u,onRecentCleared:d,onLayoutChanged:f,onHistoryChanged:p,onDrivesChanged:m,visibilityVersion:h=0,find:g,onSearchMatches:_,readOnly:v=!1,onPick:y,onSelectionChange:b,onAddToTray:w,onAddFavorite:T,onRemoveFavorite:E,favoritePaths:ee,onExtractArchive:D,settingsVersion:O=0,platform:te}){let k=o(),j=Rn(),[M,N]=(0,R.useState)(!1),[P,ae]=(0,R.useState)(null),oe=P?.overviewBanner??null,se=oe?.startsWith(`builtin:`)??!1,I=oe?.startsWith(`url:`)?oe.slice(4):A(oe)?oe:null,ce=se||I?``:oe??``,le=se?``:I?I.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:ce.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,ue=se?rd(oe):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(le),de=yn(ce.length>0?ce:null,0,le?`.${le}`:``),fe=oe?nd(oe,e)??I??de:null,[pe,me]=(0,R.useState)(``),[he,ge]=(0,R.useState)(null),[L,_e]=(0,R.useState)(!1),[ve,ye]=(0,R.useState)(null),[be,z]=(0,R.useState)(null),[xe,we]=(0,R.useState)(null),[Te,Ee]=(0,R.useState)([]),[De,Oe]=(0,R.useState)(null),[ke,Ae]=(0,R.useState)(``),[B,Me]=(0,R.useState)(null),[Ne,V]=(0,R.useState)(null),Pe=hl(`overview`),[Fe,Ie]=(0,R.useState)(null),[Le,Re]=(0,R.useState)(null),H=(0,R.useRef)(null),ze=(0,R.useRef)(null),Be=(0,R.useRef)(null),Ve=(0,R.useRef)(null),He=(0,R.useRef)(null),Ge=Le??P?.overviewBannerHeight??220,[Ke,qe]=(0,R.useState)(0),[Je,Ye]=(0,R.useState)(null),Ze=Math.min(1,Math.max(0,P?.overviewBannerOffset??.3)),Qe=Ge+yf,$e=Je&&Ke>0?Je.height*(Ke/Je.width):Qe,et=$e>0&&$e<Qe+240?(Qe+240)/$e:1,tt=Math.max(1,Math.round(Ke*et)),nt=Math.max(0,$e*et-Qe),rt=Math.min(vf,nt/2,Math.max(20,Ge*.42)),it=rt+Ze*Math.max(0,nt-rt*2),[ot,st]=(0,R.useState)(!1),ct=(e,t=!1)=>y?(Me(e),V({path:e,isDirectory:t}),b?.([e]),!0):!1,lt=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),Me(t),V({path:t,isDirectory:n}),Ie({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,R.useEffect)(()=>(cl(`overview`,Ne?(e,t)=>Ie({x:e,y:t,target:Ne}):null),()=>cl(`overview`,null)),[Ne]);let ut=(e,t)=>c(e,t);(0,R.useEffect)(()=>{Xe().then(ae,()=>ae(null))},[O]),(0,R.useEffect)(()=>{if(l.available)return Hc().then(Ee,()=>void 0),l.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Ee(t.data.peers)})},[]),(0,R.useEffect)(()=>{let e=Be.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,R.useEffect)(()=>{if(se&&!ue){Ye({width:1920,height:1080});return}Ye(null);let e=He.current;e?.complete&&e.naturalWidth>0&&Ye({width:e.naturalWidth,height:e.naturalHeight})},[oe,se,ue]),(0,R.useEffect)(()=>{let e=Ve.current;if(!e)return;let t=()=>qe(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[P?.overviewBanner]),(0,R.useEffect)(()=>{if(!he)return;let e=()=>ge(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||ge(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[he]),(0,R.useEffect)(()=>{if(!L)return;let e=()=>_e(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[L]);let dt=Hs(P),ft=dt.map(e=>e.id),pt=(0,R.useRef)(null),mt=e=>he?.kind===`panel`&&he.id===e,ht=e=>he?.kind===`place`&&he.id===e;(0,R.useEffect)(()=>{if(!l.available)return;let e=dt.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[dt.map(e=>e.path??e.id).join(`|`),a]),df(pt,g??null,`section`,_??(()=>void 0),[r.length,t.length,n.length,h]);let gt=async(e,t)=>{let n={...P?.placeIcons};t?n[e]=t:delete n[e],ge(null),await U({placeIcons:n}),u(await je())},vt=async(e,t)=>{let n={...P?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],z(null),await U({placeNames:n}),u(await je())},yt=e=>{we(null),ye({drive:e,label:e.label||`Local Disk`})},bt=async()=>{if(!ve)return;let{drive:e,label:t}=ve;ye(null);let n=await Se(e.name,t.trim());n.ok?(we(null),m?.()):we(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},xt=P?.overviewColumns??1,U=async e=>{if(!P)return;let t={...P,...e,overviewPanels:e.overviewPanels??ft,overviewHidden:[]};ae(await at(t)),f?.()},St=async()=>{await U({overviewPanels:[...Ls],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),u(await je()),N(!1)},Ct=async()=>{let e=await Fa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=P?.overviewBanners??[];await U({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},wt=async()=>{let e=pe.trim();if(!P||!A(e))return;let t=P.overviewBanners??[];me(``),await U({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},Tt=()=>void U({overviewBanner:null}),Et=e=>void U({overviewBanners:(P?.overviewBanners??[]).filter(t=>t!==e),...P?.overviewBanner===e||P?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Dt=e=>{H.current={y:e.clientY,height:Ge},e.currentTarget.setPointerCapture(e.pointerId)},Ot=e=>{let t=H.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));ze.current=n,Re(n)},kt=e=>{H.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),ze.current!==null&&(U({overviewBannerHeight:ze.current}),ze.current=null)},At=(e,t)=>{let n=ft.indexOf(e),r=n+t;if(n<0||r<0||r>=ft.length)return;let i=[...ft];[i[n],i[r]]=[i[r],i[n]],U({overviewPanels:i})},jt=(e,t)=>{let n={...P?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],U({overviewTitles:n})},Mt=(e,t)=>void U({overviewViews:{...P?.overviewViews,[e]:t}}),Nt=e=>{let t=P?.overviewPinned??dt.filter(e=>e.pinned).map(e=>e.id);U({overviewPinned:dt.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Pt=e=>{ge(null);let t=t=>{let n={...t};return delete n[e],n},n=P?.overviewPinned??dt.filter(e=>e.pinned).map(e=>e.id);U({overviewPanels:ft.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(P?.overviewTitles),overviewViews:t(P?.overviewViews),overviewIcons:t(P?.overviewIcons),panelPlaces:t(P?.panelPlaces)})},Ft=(e,t)=>{let n={...P?.overviewIcons};t?n[e]=t:delete n[e],ge(null),U({overviewIcons:n})},It=async e=>{if(!P)return;if(e===`folder`){let e=await Pa();if(!e)return;let t=`folder:${e}`;ft.includes(t)||await U({overviewPanels:[...ft,t]});return}if(e===`quick`){let e=2;for(;ft.includes(`quick:${e}`);)e+=1;await U({overviewPanels:[...ft,`quick:${e}`]});return}let t=e;for(let n=2;ft.includes(t);n+=1)t=`${e}:${n}`;await U({overviewPanels:[...ft,t]})},Lt=async e=>{let n=await Pa();if(!n)return;if(e.id===`quick`){await U({quickAccess:[...new Set([...t.map(e=>e.path),n])]}),u(await je());return}let r=e.places??[];r.some(e=>F(e,n))||await U({panelPlaces:{...P?.panelPlaces,[e.id]:[...r,n]}})},Rt=async(e,n)=>{ge(null),e.id===`quick`?(await U({quickAccess:t.filter(e=>!F(e.path,n)).map(e=>e.path)}),u(await je())):await U({panelPlaces:{...P?.panelPlaces,[e.id]:(e.places??[]).filter(e=>!F(e,n))}})},zt=async(e,n,r)=>{if(F(n,r))return;let i=e.id===`quick`?t.map(e=>e.path):e.places??[],a=i.findIndex(e=>F(e,n)),o=i.findIndex(e=>F(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),e.id===`quick`?(await U({quickAccess:s}),u(await je())):await U({panelPlaces:{...P?.panelPlaces,[e.id]:s}})},Bt=(e,t)=>({draggable:M,onDragOver:e=>{M&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{M&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{M&&(n.preventDefault(),zt(e,n.dataTransfer.getData(`text/plain`),t))}}),Vt=e=>e.id===`quick`?t:(e.places??[]).map(e=>{let n=t.find(t=>F(t.path,e));return{name:P?.placeNames?.[e]??n?.name??(x(e)||e),path:e,kind:`folder`,icon:n?.icon??P?.placeIcons?.[e]??null}}),Ht=e=>{if(r.length===0)return(0,q.jsx)(jp,{children:k(`files_and_folders_you_open_show_up_here`)});let t=r.slice(0,i);return e.view===`grid`?(0,q.jsx)(lp,{children:t.map(e=>{let t=zn(j,e.path);return(0,q.jsxs)(up,{$plain:!1,$selected:B===e.path,onClick:t=>{ct(e.path,e.isDirectory)||(e.isDirectory?c(e.path,qt(t)):Ce(e.path))},onDoubleClick:()=>y?.(e.path),onContextMenu:t=>lt(t,e.path,e.isDirectory),title:e.path,children:[(0,q.jsx)(dp,{children:t&&j.useIcons?(0,q.jsx)(Gs,{place:t,size:18}):(0,q.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(fp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(pp,{children:e.path})]})]},e.path)})}):(0,q.jsx)(mp,{children:t.map(e=>{let t=zn(j,e.path);return(0,q.jsxs)(hp,{$selected:B===e.path,onClick:t=>{ct(e.path,e.isDirectory)||(e.isDirectory?c(e.path,qt(t)):Ce(e.path))},onDoubleClick:()=>y?.(e.path),onContextMenu:t=>lt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&j.useIcons?(0,q.jsx)(Gs,{place:t,size:15}):(0,q.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,q.jsxs)(gp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(pp,{children:e.path})]})]},e.path)})})},Ut=e=>{let t=P?.favorites??[],n=async e=>{await U({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>F(t.path,e))&&await U({favorites:[...t,{path:e,name:x(e)||e,isDirectory:n}]})},i=(e,t,n)=>{M||ct(t,n)||(n?c(t,qt(e)):Ce(t))},a=M?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(_p,{$row:e.view===`list`,onClick:()=>void Fa().then(e=>r(e,!1)),title:k(`pin_any_file_here`),type:`button`,children:[e.view===`list`?(0,q.jsx)(Ci,{size:15}):(0,q.jsx)(dp,{children:(0,q.jsx)(Ci,{size:15})}),e.view===`list`?(0,q.jsxs)(gp,{children:[(0,q.jsx)(`strong`,{children:k(`add_file`)}),(0,q.jsx)(pp,{children:k(`pin_any_file_here`)})]}):(0,q.jsxs)(fp,{children:[(0,q.jsx)(`strong`,{children:k(`add_file`)}),(0,q.jsx)(pp,{children:k(`pin_any_file_here`)})]})]}),(0,q.jsxs)(_p,{$row:e.view===`list`,onClick:()=>void Pa().then(e=>r(e,!0)),title:k(`pin_any_folder_here`),type:`button`,children:[e.view===`list`?(0,q.jsx)(Ci,{size:15}):(0,q.jsx)(dp,{children:(0,q.jsx)(Ci,{size:15})}),e.view===`list`?(0,q.jsxs)(gp,{children:[(0,q.jsx)(`strong`,{children:k(`add_folder`)}),(0,q.jsx)(pp,{children:k(`pin_any_folder_here`)})]}):(0,q.jsxs)(fp,{children:[(0,q.jsx)(`strong`,{children:k(`add_folder`)}),(0,q.jsx)(pp,{children:k(`pin_any_folder_here`)})]})]})]}):null;return t.length===0&&!M?(0,q.jsx)(jp,{children:k(`no_favorites_yet_right_click_any_file_or_folder_and_add_it_here`)}):e.view===`grid`?(0,q.jsxs)(lp,{children:[t.map(e=>{let t=zn(j,e.path);return(0,q.jsxs)(up,{$plain:M,$selected:B===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!M&&y?.(e.path),onContextMenu:t=>!M&&lt(t,e.path,e.isDirectory),title:e.path,children:[M&&(0,q.jsx)(Ep,{onClick:t=>{t.stopPropagation(),n(e.path)},title:k(`remove_from_favorites`),type:`button`,children:(0,q.jsx)(Fi,{size:11})}),(0,q.jsx)(dp,{children:t&&j.useIcons?(0,q.jsx)(Gs,{place:t,size:18}):(0,q.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(fp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(pp,{children:e.path})]})]},e.path)}),a]}):(0,q.jsxs)(mp,{children:[t.map(e=>{let t=zn(j,e.path);return(0,q.jsxs)(hp,{$selected:B===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!M&&y?.(e.path),onContextMenu:t=>!M&&lt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&j.useIcons?(0,q.jsx)(Gs,{place:t,size:15}):(0,q.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,q.jsxs)(gp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(pp,{children:e.path})]}),M&&(0,q.jsx)(Ep,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:k(`remove_from_favorites`),type:`button`,children:(0,q.jsx)(Fi,{size:11})})]},e.path)}),a]})},Gt=e=>{if(n.length===0)return(0,q.jsx)(jp,{children:k(`no_drives_are_available`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=ve?.drive.name===t.name,i=r?(0,q.jsx)(Vp,{maxLength:32,onCancel:()=>ye(null),onChange:e=>ye({...ve,label:e}),onCommit:()=>void bt(),value:ve?.label??``}):(0,q.jsx)(q.Fragment,{children:re(t)}),a=!r&&M&&(0,q.jsx)(Dp,{onClick:e=>{e.stopPropagation(),yt(t)},title:k(`rename_volume`),type:`button`,children:(0,q.jsx)(ea,{size:11})}),o=(0,q.jsx)(pp,{children:k(`free_free_of_total`,{free:C(t.freeSpace),total:C(t.totalSize)})});return e.view===`grid`?(0,q.jsxs)(up,{$plain:!1,$selected:B===t.name,onClick:e=>{!r&&ct(t.name,!0)||r||c(t.name,qt(e))},onDoubleClick:()=>!r&&y?.(t.name),onContextMenu:e=>!r&&lt(e,t.name,!0),title:t.name,children:[(0,q.jsx)(dp,{children:(0,q.jsx)(yi,{size:18})}),(0,q.jsxs)(fp,{children:[(0,q.jsxs)(`strong`,{children:[i,r&&ne(t),a]}),o]})]},t.name):(0,q.jsxs)(hp,{as:r?`div`:`button`,$selected:B===t.name,onClick:r?void 0:e=>{ct(t.name,!0)||c(t.name,qt(e))},onDoubleClick:r?void 0:()=>y?.(t.name),onContextMenu:r?void 0:e=>lt(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,q.jsx)(yi,{size:18}),(0,q.jsxs)(gp,{children:[(0,q.jsxs)(`strong`,{children:[i,r&&ne(t),a]}),o]}),(0,q.jsx)(vp,{children:(0,q.jsx)(yp,{$used:n,$tone:S(n)})})]},t.name)});return e.view===`grid`?(0,q.jsx)(lp,{children:t}):(0,q.jsx)(mp,{children:t})},Kt=()=>{let e=async e=>{Oe(e.id);try{await Uc(e.host,e.port)}finally{Oe(null)}},t=async()=>{let e=ke.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Oe(`manual`);try{await Uc(n,r)}finally{Oe(null)}}};return(0,q.jsxs)(Mp,{children:[(0,q.jsxs)(Np,{children:[(0,q.jsx)(Pp,{onChange:e=>Ae(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:k(`address_e_g_192_168_1_20_45701`),value:ke}),(0,q.jsx)(zp,{disabled:De!==null||!ke.includes(`:`),onClick:()=>void t(),type:`button`,children:k(De===`manual`?`pairing`:`pair_by_address`)})]}),Te.length===0&&(0,q.jsx)(jp,{children:k(`no_sharing_devices_on_this_network_yet_pair_one_by_address_or_share_a_folder_from_the_title_bar`)}),Te.map(t=>(0,q.jsxs)(Fp,{children:[(0,q.jsxs)(Ip,{children:[(0,q.jsx)(ma,{size:14}),(0,q.jsx)(Lp,{title:t.host,children:t.name}),(0,q.jsx)(Rp,{$online:t.online,children:t.paired?t.online?k(`paired`):k(`offline`):k(`not_paired`)}),!t.paired&&t.online&&(0,q.jsx)(zp,{disabled:De===t.id,onClick:()=>void e(t),type:`button`,children:De===t.id?k(`pairing`):k(`pair`)})]}),t.paired&&t.shares.length===0&&(0,q.jsx)(pp,{children:k(`no_folders_are_shared_with_the_app_on_this_device`)}),t.shares.map(e=>(0,q.jsxs)(hp,{onClick:n=>c(Yc(t.id,e.id),qt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,q.jsx)(ma,{size:14}),(0,q.jsxs)(gp,{children:[(0,q.jsx)(`strong`,{children:e.name}),(0,q.jsx)(pp,{children:t.name})]}),(0,q.jsx)(ga,{size:12})]},e.id))]},t.id))]})},Jt=e=>{switch(e.kind){case`share`:return Kt();case`favorites`:return Ut(e);case`quick`:{let t=Vt(e);return!M&&t.length===0?(0,q.jsx)(jp,{children:k(`no_folders_in_this_quick_access_panel_yet`)}):e.view===`grid`?(0,q.jsxs)(lp,{children:[t.map(t=>(0,q.jsxs)(up,{$plain:M,$selected:B===t.path,...Bt(e,t.path),onClick:e=>{!M&&!ct(t.path,!0)&&c(t.path,qt(e))},onDoubleClick:()=>!M&&y?.(t.path),onContextMenu:e=>!M&&lt(e,t.path,!0),title:t.path,children:[M&&(0,q.jsx)(Ep,{onClick:n=>{n.stopPropagation(),Rt(e,t.path)},title:k(`remove_from_quick_access`),type:`button`,children:(0,q.jsx)(Fi,{size:11})}),(0,q.jsxs)(wp,{children:[M?(0,q.jsx)(Tp,{onClick:e=>{e.stopPropagation(),ge(ht(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:k(`change_icon`),type:`button`,children:(0,q.jsx)(dp,{children:(0,q.jsx)(Gs,{place:t})})}):(0,q.jsx)(dp,{children:(0,q.jsx)(Gs,{place:t})}),ht(t.path)&&(0,q.jsx)(ff,{onPick:e=>void gt(t.path,e),value:P?.placeIcons?.[t.path]??t.icon})]}),(0,q.jsxs)(fp,{children:[be?.path===t.path?(0,q.jsx)(`strong`,{children:(0,q.jsx)(Vp,{onCancel:()=>z(null),onChange:e=>z({path:t.path,name:e}),onCommit:()=>void vt(t.path,be?.name??``),value:be?.name??``})}):(0,q.jsxs)(`strong`,{children:[t.name,M&&(0,q.jsx)(Dp,{onClick:e=>{e.stopPropagation(),ge(null),z({path:t.path,name:t.name})},title:k(`rename_folder`),type:`button`,children:(0,q.jsx)(ea,{size:11})})]}),(0,q.jsx)(pp,{children:t.path})]})]},t.path)),M&&(0,q.jsxs)(_p,{onClick:()=>void Lt(e),title:k(`pin_a_folder_here`),type:`button`,children:[(0,q.jsx)(dp,{children:(0,q.jsx)(Ci,{size:15})}),(0,q.jsxs)(fp,{children:[(0,q.jsx)(`strong`,{children:k(`add_folder`)}),(0,q.jsx)(pp,{children:k(`pin_a_directory_here`)})]})]})]}):(0,q.jsxs)(mp,{children:[t.map(t=>(0,q.jsxs)(hp,{$selected:B===t.path,...Bt(e,t.path),onClick:e=>{!M&&!ct(t.path,!0)&&c(t.path,qt(e))},onDoubleClick:()=>!M&&y?.(t.path),onContextMenu:e=>!M&&lt(e,t.path,!0),title:t.path,type:`button`,children:[(0,q.jsxs)(wp,{children:[M?(0,q.jsx)(Tp,{onClick:e=>{e.stopPropagation(),ge(ht(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:k(`change_icon`),type:`button`,children:(0,q.jsx)(Gs,{place:t,size:15})}):(0,q.jsx)(Gs,{place:t,size:15}),ht(t.path)&&(0,q.jsx)(ff,{onPick:e=>void gt(t.path,e),value:P?.placeIcons?.[t.path]??t.icon})]}),(0,q.jsxs)(gp,{children:[be?.path===t.path?(0,q.jsx)(`strong`,{children:(0,q.jsx)(Vp,{onCancel:()=>z(null),onChange:e=>z({path:t.path,name:e}),onCommit:()=>void vt(t.path,be?.name??``),value:be?.name??``})}):(0,q.jsxs)(`strong`,{children:[t.name,M&&(0,q.jsx)(Dp,{onClick:e=>{e.stopPropagation(),ge(null),z({path:t.path,name:t.name})},title:k(`rename_folder`),type:`button`,children:(0,q.jsx)(ea,{size:11})})]}),(0,q.jsx)(pp,{children:t.path})]}),M&&(0,q.jsx)(Ep,{$inline:!0,onClick:n=>{n.stopPropagation(),Rt(e,t.path)},title:k(`remove_from_quick_access`),type:`button`,children:(0,q.jsx)(Fi,{size:11})})]},t.path)),M&&(0,q.jsxs)(_p,{$row:!0,onClick:()=>void Lt(e),title:k(`pin_a_folder_here`),type:`button`,children:[(0,q.jsx)(Ci,{size:15}),(0,q.jsxs)(gp,{children:[(0,q.jsx)(`strong`,{children:k(`add_folder`)}),(0,q.jsx)(pp,{children:k(`pin_a_directory_here`)})]})]})]})}case`frequent`:return(0,q.jsx)(Hp,{mode:e.view,onContextMenu:lt,onOpen:c,onPick:y,onSelectionChange:b,version:s});case`recent`:return Ht(e);case`drives`:return Gt(e);default:return(0,q.jsx)(Up,{mode:e.view,onContextMenu:lt,onOpen:c,onPick:y,onSelectionChange:b,openOnSingleClick:P?.openOnSingleClick??!1,path:e.path??a,platform:te,selectionMenuId:`overview:${e.id}`,showCheckboxes:P?.showCheckboxes??!0,visibilityVersion:h})}};return(0,q.jsxs)(bf,{$flush:!!P?.overviewBanner,ref:Be,children:[!v&&(0,q.jsxs)(Jf,{$overlay:!!P?.overviewBanner,children:[(0,q.jsx)(Yf,{role:`group`,title:k(`columns`),children:[1,2,3,4,5].map(e=>(0,q.jsx)(Xf,{$active:xt===e,onClick:()=>void U({overviewColumns:e}),title:ie(k,e,`k_1_column`,`count_columns`),type:`button`,children:e},e))}),M&&(0,q.jsxs)(Qf,{children:[(0,q.jsxs)(Zf,{onClick:()=>_e(e=>!e),onPointerDown:e=>e.stopPropagation(),title:k(`add_a_panel`),type:`button`,children:[(0,q.jsx)(Ci,{size:12}),k(`add_panel`)]}),L&&(0,q.jsx)($f,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,q.jsx)(ep,{onClick:()=>{_e(!1),It(e)},type:`button`,children:k(e===`quick`?`quick_access`:e===`recent`?`recent`:e===`frequent`?`frequent`:e===`home`?`home`:e===`drives`?`this_pc`:e===`share`?`shared`:e===`favorites`?`favorites`:`folder_2`)},e))})]}),M&&(0,q.jsxs)(Zf,{onClick:()=>void St(),title:k(`put_every_panel_back_the_way_the_app_ships_it`),type:`button`,children:[(0,q.jsx)(Si,{size:12}),k(`restore_default_panels`)]}),Pe.available&&(0,q.jsx)(cp,{onClick:e=>Pe.open(e.clientX,e.clientY),title:k(`selection_menu`),type:`button`,children:(0,q.jsx)(Da,{size:14})}),(0,q.jsxs)(Zf,{onClick:()=>{N(e=>!e),_e(!1),ge(null),z(null),ye(null)},title:k(M?`done`:`edit`),type:`button`,children:[M?(0,q.jsx)(Pi,{size:13}):(0,q.jsx)(ea,{size:13}),k(M?`done`:`edit`)]})]}),xe&&(0,q.jsx)(Ap,{children:xe}),P?.overviewBanner&&(0,q.jsxs)(xf,{ref:Ve,style:{height:`${Ge}px`,"--banner-image-width":`${tt}px`,"--banner-image-shift":`${it}px`,"--banner-travel":`${rt}px`,"--banner-overlap":`0px`},children:[(0,q.jsx)(Sf,{children:ue?(0,q.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Ye({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:fe??void 0}):(0,q.jsx)(`img`,{alt:``,onLoad:e=>{let t=se?1920:e.currentTarget.naturalWidth||1920,n=se?1080:e.currentTarget.naturalHeight||1080;Ye({width:t,height:n})},ref:He,src:fe??void 0})}),M&&(0,q.jsx)(Cf,{onDoubleClick:()=>{ze.current=null,Re(null),U({overviewBannerHeight:220})},onPointerCancel:kt,onPointerDown:Dt,onPointerMove:Ot,onPointerUp:kt,title:k(`drag_to_resize_double_click_to_reset`)})]}),(0,q.jsxs)(wf,{$offset:P?.overviewBanner?100:0,children:[M&&(0,q.jsxs)(Tf,{children:[(0,q.jsxs)(Ef,{children:[(0,q.jsx)(Df,{children:k(`banners`)}),P?.overviewBanner&&(0,q.jsxs)(Zf,{onClick:()=>st(!0),title:k(`adjust_framing`),type:`button`,children:[(0,q.jsx)(ea,{size:12}),k(`adjust_framing`)]})]}),(0,q.jsxs)(Of,{children:[(0,q.jsx)(Mf,{children:(0,q.jsx)(Nf,{$active:!P?.overviewBanner,onClick:Tt,title:k(`no_banner`),type:`button`,children:(0,q.jsxs)(If,{children:[(0,q.jsx)(Fi,{size:16}),(0,q.jsx)(`span`,{children:k(`no_banner`)})]})})}),$u.map(t=>(0,q.jsx)(Mf,{children:(0,q.jsx)(Nf,{$active:P?.overviewBanner===t.id,onClick:()=>void U({overviewBanner:t.id}),title:`${k(t.concept)} · ${k(t.preset)}`,type:`button`,children:(0,q.jsx)(hf,{source:t.id,theme:e})})},t.id)),Zu.map(t=>(0,q.jsx)(Mf,{children:(0,q.jsxs)(Nf,{$active:P?.overviewBanner===t.id,onClick:()=>void U({overviewBanner:t.id}),title:k(t.name),type:`button`,children:[(0,q.jsx)(hf,{poster:t.poster,source:t.id,theme:e}),(0,q.jsx)(Ff,{children:(0,q.jsx)(Hi,{size:11})})]})},t.id)),(P?.overviewBanners??[]).map(t=>(0,q.jsxs)(Mf,{children:[(0,q.jsx)(Nf,{$active:P?.overviewBanner===t||P?.overviewBanner===`url:${t}`,onClick:()=>void U({overviewBanner:A(t)?`url:${t}`:t}),title:t,type:`button`,children:(0,q.jsx)(hf,{source:t,theme:e})}),(0,q.jsx)(Pf,{onClick:()=>Et(t),title:k(`remove`),type:`button`,children:(0,q.jsx)(Fi,{size:10})})]},t)),(0,q.jsxs)(qf,{onClick:()=>void Ct(),title:k(`add_banner`),type:`button`,children:[(0,q.jsx)(Ci,{size:18}),(0,q.jsx)(`span`,{children:k(`add_banner`)})]})]}),(0,q.jsxs)(kf,{children:[(0,q.jsx)(Af,{onChange:e=>me(e.target.value),onKeyDown:e=>{e.key===`Enter`&&wt()},placeholder:`https://…`,value:pe}),(0,q.jsx)(jf,{disabled:!A(pe),onClick:()=>void wt(),type:`button`,children:k(`add_url`)})]})]}),(0,q.jsx)(tp,{ref:pt,$columns:xt,children:dt.map(e=>{let t=ft.indexOf(e.id);return(0,q.jsxs)(np,{children:[(0,q.jsxs)(rp,{children:[(0,q.jsxs)(ip,{children:[(0,q.jsxs)(wp,{children:[M?(0,q.jsx)(Tp,{onClick:()=>ge(mt(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:k(`change_icon`),type:`button`,children:(0,q.jsx)(Ws,{panel:e,size:15})}):(0,q.jsx)(Ws,{panel:e,size:15}),mt(e.id)&&(0,q.jsx)(ff,{onPick:t=>Ft(e.id,t),value:e.icon})]}),M?(0,q.jsx)(sp,{defaultValue:e.title,onBlur:t=>jt(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,q.jsx)(op,{children:k(e.title)})]}),(0,q.jsxs)(ap,{children:[!M&&e.kind===`recent`&&(0,q.jsx)(Zf,{onClick:()=>void Ue().then(d),title:k(`clear`),type:`button`,children:k(`clear`)}),!M&&e.kind===`frequent`&&(0,q.jsx)(Zf,{onClick:()=>void We().then(()=>p?.()),title:k(`clear_the_frequent_list`),type:`button`,children:k(`clear`)}),!M&&(e.kind===`home`||e.kind===`folder`)&&(0,q.jsx)(Zf,{onClick:()=>c(e.path??a),title:k(`open_folder`),type:`button`,children:k(`open`)}),M&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(cp,{$active:e.pinned,onClick:()=>Nt(e.id),title:e.pinned?k(`unpin_from_the_sidebar`):k(`pin_to_the_sidebar`),type:`button`,children:(0,q.jsx)(Oi,{size:12})}),(0,q.jsx)(cp,{$active:e.view===`list`,onClick:()=>Mt(e.id,`list`),title:k(`list`),type:`button`,children:(0,q.jsx)(ki,{size:13})}),(0,q.jsx)(cp,{$active:e.view===`grid`,onClick:()=>Mt(e.id,`grid`),title:k(`grid`),type:`button`,children:(0,q.jsx)(Ai,{size:13})}),(0,q.jsx)(cp,{disabled:t===0,onClick:()=>At(e.id,-1),title:k(`move_up`),type:`button`,children:(0,q.jsx)(xi,{size:12})}),(0,q.jsx)(cp,{disabled:t===ft.length-1,onClick:()=>At(e.id,1),title:k(`move_down`),type:`button`,children:(0,q.jsx)(xi,{size:12})}),(0,q.jsx)(cp,{onClick:()=>Pt(e.id),title:k(`remove_panel`),type:`button`,children:(0,q.jsx)(Fi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Jt(e):(0,q.jsx)(xp,{children:Jt(e)})]},e.id)})})]}),ot&&fe&&(0,q.jsx)(gf,{height:Ge,offset:Ze,onCancel:()=>st(!1),onSave:e=>{U({overviewBannerOffset:e}),st(!1)},source:fe,video:ue}),Fe&&(0,q.jsx)(Do,{directory:a,menu:{x:Fe.x,y:Fe.y,paths:[Fe.target.path]},onClose:()=>Ie(null),onCopy:(e,t)=>void _t(e,t),onAddToTray:w,onAddFavorite:T,onRemoveFavorite:E,favoritePaths:ee,onExtractArchive:D,onOpen:ut,onOpenFile:e=>y?y(e):void Ce(e),shortcuts:Wt,target:Fe.target})]})}function Vp({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=o();return(0,q.jsxs)(Op,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,q.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,q.jsx)(kp,{onClick:r,title:a(`cancel`),type:`button`,children:(0,q.jsx)(Fi,{size:11})}),(0,q.jsx)(kp,{$apply:!0,onClick:n,title:a(`rename_volume`),type:`button`,children:(0,q.jsx)(Pi,{size:12})})]})}function Hp({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=o(),[c,l]=(0,R.useState)(null),[u,d]=(0,R.useState)(null),f=Rn(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,R.useEffect)(()=>{Ve().then(l,()=>l([]))},[a]),!c)return(0,q.jsx)(jp,{children:s(`reading`)});if(c.length===0)return(0,q.jsx)(jp,{children:s(`folders_you_open_often_show_up_here`)});let m=e=>ie(s,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path});return e===`grid`?(0,q.jsx)(lp,{children:c.map(e=>{let i=zn(f,e.path);return(0,q.jsxs)(up,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,qt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,q.jsx)(dp,{children:i&&f.useIcons?(0,q.jsx)(Gs,{place:i,size:18}):(0,q.jsx)(lc,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(fp,{children:[(0,q.jsx)(`strong`,{children:i?.name||e.name}),(0,q.jsx)(pp,{children:m(e)})]})]},e.path)})}):(0,q.jsx)(mp,{children:c.map(e=>{let i=zn(f,e.path);return(0,q.jsxs)(hp,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,qt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,q.jsx)(Gs,{place:i,size:15}):(0,q.jsx)(lc,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,q.jsxs)(gp,{children:[(0,q.jsx)(`strong`,{children:i?.name||e.name}),(0,q.jsx)(pp,{children:m(e)})]})]},e.path)})})}function Up({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:u,visibilityVersion:d,platform:f}){let p=o(),[m,h]=(0,R.useState)(null),[g,_]=(0,R.useState)(null),v=Rn();return(0,R.useEffect)(()=>{e&&(h(null),we(e).then(h,()=>h(null)))},[e,d]),(0,R.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&F(n.data.path,e)&&we(e,!1).then(h,()=>void 0)})},[e]),m?t===`list`?(0,q.jsx)(bp,{children:(0,q.jsx)(Dl,{platform:f,error:null,listing:m,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void Ce(e)),onRefresh:()=>void we(e,!1).then(h,()=>void 0),onRename:(e,t)=>h(n=>n&&{...n,entries:n.entries.map(n=>F(n.fullPath,e)?{...n,name:x(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:u,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...z,columns:xe.columns??[]}})}):(0,q.jsx)(xp,{children:m.entries.length===0?(0,q.jsx)(jp,{children:p(`this_folder_is_empty`)}):(0,q.jsx)(Sp,{children:m.entries.map(e=>{let t=zn(v,e.fullPath);return(0,q.jsxs)(Cp,{$selected:g===e.fullPath,onClick:t=>{i?(_(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,qt(t)):Ce(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&v.useIcons?(0,q.jsx)(Gs,{place:t,size:16}):(0,q.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,q.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,q.jsx)(jp,{children:p(`reading`)})}var Wp=`yafm://`,Gp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Kp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function qp(e){return`${Wp}${e===`home`?`overview`:e}`}function Jp(e){return Kp(e)?Gp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Yp(e){let t=e.trim();if(t.length===0)return null;if(!Kp(t))return t;let n=Gp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?qp(n):null}function Xp({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let s=o(),c=Rn(),[l,u]=(0,R.useState)(!1),[d,f]=(0,R.useState)(``),[p,m]=(0,R.useState)([]),[h,g]=(0,R.useState)(0),[_,v]=(0,R.useState)(null),[y,b]=(0,R.useState)(null),[x,S]=(0,R.useState)(null),C=(0,R.useRef)(null),w=(0,R.useRef)(null),T=(0,R.useRef)(0);(0,R.useEffect)(()=>{if(!qc(e)){S(null);return}let t=Jc(e);if(!t){S(null);return}let n=!0;return Vc().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);S({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&S(null)),()=>{n=!1}},[e]),(0,R.useEffect)(()=>{l||f(e.replace(/\\/g,`/`))},[e,l]),(0,R.useEffect)(()=>{r&&r!==T.current&&(T.current=r,f(e.replace(/\\/g,`/`)),u(!0))},[r,e]),(0,R.useEffect)(()=>{l&&C.current?.select()},[l]),(0,R.useEffect)(()=>{if(!l)return;let e=()=>u(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[l]);let E=()=>{f(e.replace(/\\/g,`/`)),u(!0)},ee=t=>{let n=d.trim(),r=!!(t?.ctrlKey||t?.metaKey);u(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,R.useEffect)(()=>{if(!l){m([]);return}let e=em(d);if(!e){m([]);return}let t=!1,n=window.setTimeout(()=>{we(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));m(i),g(0)},()=>{t||m([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[d,l]);let D=(e,t=!1)=>{u(!1),i(e.path,t)};if((0,R.useLayoutEffect)(()=>{if(!l){v(null);return}let e=()=>{let e=w.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);v({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[l]),l)return(0,q.jsxs)(om,{onPointerDown:e=>e.stopPropagation(),ref:w,children:[(0,q.jsxs)(um,{children:[(0,q.jsx)(`input`,{onChange:e=>f(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&p.length>0)e.preventDefault(),g(e=>(e+1)%p.length);else if(e.key===`ArrowUp`&&p.length>0)e.preventDefault(),g(e=>(e-1+p.length)%p.length);else if(e.key===`Tab`&&p.length>0){e.preventDefault();let t=p[Math.min(h,p.length-1)];f(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?p.length>0?D(p[Math.min(h,p.length-1)],e.ctrlKey||e.metaKey):ee(e):e.key===`Escape`&&(p.length>0?m([]):u(!1))},ref:C,spellCheck:!1,value:d}),(0,q.jsx)(dm,{onClick:()=>u(!1),title:s(`cancel`),type:`button`,children:(0,q.jsx)(Fi,{size:12})}),(0,q.jsx)(dm,{$apply:!0,onClick:ee,onPointerDown:e=>e.stopPropagation(),title:s(`open_this_path`),type:`button`,children:(0,q.jsx)(Pi,{size:14})})]}),p.length>0&&_&&(0,Za.createPortal)((0,q.jsx)(sm,{onPointerDown:e=>e.stopPropagation(),style:{left:_.left,top:_.top,width:_.width},children:p.map((e,t)=>(0,q.jsxs)(cm,{$active:t===h,onClick:t=>D(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>g(t),type:`button`,children:[(0,q.jsx)(lc,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,q.jsx)(lm,{children:e.name})]},e.path))}),document.body)]});let O=t?[{label:t,path:e,icon:n}]:Zp(e,x)??$p(e,c.places);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(tm,{onClick:E,title:s(`click_to_type_a_path`),children:O.map((t,n)=>(0,q.jsxs)(nm,{$last:n===O.length-1,children:[n>0&&(0,q.jsx)(im,{children:(0,q.jsx)(Ei,{size:9})}),(0,q.jsxs)(am,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):b({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,q.jsx)(rm,{children:(0,q.jsx)(Gs,{place:t.place,size:13})}):t.icon&&(0,q.jsx)(rm,{children:t.icon}),t.label]})]},t.path))}),y&&(0,q.jsx)(ho,{items:[{label:s(`open`),icon:(0,q.jsx)(Ti,{size:14}),onSelect:()=>i(y.path)},{label:s(`open_in_new_tab`),icon:(0,q.jsx)(Ci,{size:14}),onSelect:()=>i(y.path,!0)},{label:s(`copy_as_path`),icon:(0,q.jsx)(ba,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(y.path)},...Kp(y.path)?[{label:s(`open_with`),icon:(0,q.jsx)(Ki,{size:14}),onSelect:()=>void Mt(y.path)},{label:s(`properties`),icon:(0,q.jsx)(Di,{size:14}),onSelect:()=>void At([y.path])}]:[]],onClose:()=>b(null),x:y.x,y:y.y})]})}function Zp(e,t){let n=Jc(e);if(!n)return null;let r=Yc(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,q.jsx)(ma,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Qp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function $p(e,t){let n=Qp(e),r=-1,i=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>F(t.path,e.path));t>r&&(r=t,i=e)}return i&&r>=0&&n.splice(0,r+1,{label:i.name,path:n[r].path,place:i}),n}function em(e){if(Kp(e)||qc(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var tm=v.div`
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
`,nm=v.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,rm=v.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,im=v.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,am=v.button`
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
`,om=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,sm=v.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Qa}
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
`,cm=v.button`
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
`,lm=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,um=v.div`
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
`,dm=v.button`
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
`,fm=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,q.jsx)(`path`,{d:`M4 4v6h6`})]});function pm({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,onShowDetails:i,onPreviewChange:a,platform:s}){let c=o(),l=pl(`recycle`),u=s===`windows`,[d,f]=(0,R.useState)([]),[p,m]=(0,R.useState)([]),[h,g]=(0,R.useState)(!1),[_,v]=(0,R.useState)(null),[y,b]=(0,R.useState)(!0),[x,S]=(0,R.useState)(!1),[w,T]=(0,R.useState)(null),[E,ee]=(0,R.useState)(!1),[D,O]=(0,R.useState)(()=>new Set),[te,k]=(0,R.useState)(null),[A,j]=(0,R.useState)(()=>{let e=Zn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[ne,M]=(0,R.useState)(null),[N,re]=(0,R.useState)(null),ae=(0,R.useRef)(null),oe=(0,R.useCallback)(async()=>{b(!0),T(null);try{f(await Ne(E))}catch(e){T(e instanceof Error?e.message:String(e))}finally{b(!1)}},[E]),F=(0,R.useCallback)(async()=>{try{f(await Ne(E))}catch{}},[E]);(0,R.useEffect)(()=>{oe()},[oe]),(0,R.useEffect)(()=>{let e=window.setInterval(()=>void F(),1e4);return()=>window.clearInterval(e)},[F]),(0,R.useEffect)(()=>{E||(m([]),g(!1),v(null))},[E]),(0,R.useEffect)(()=>{O(e=>{let t=new Set(d.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[d]);let se=(0,R.useMemo)(()=>{let e=new Set(d.map(e=>e.id));return[...d,...p.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=mm(e,t,A.column);return A.descending?-n:n})},[d,p,A]),I=(0,R.useMemo)(()=>!t?.open||t.query.trim().length===0?se:se.filter(e=>An(e.name,t)||An(e.originalPath,t)),[se,t?.open,t?.query,t?.matchCase,t?.regex]),ce=t?.open&&t.query.trim().length>0?I.length===0:se.length===0,le=(0,R.useRef)(null);df(le,t??null,`[data-search-block]`,n??(()=>void 0),[se]),(0,R.useEffect)(()=>{O(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,R.useEffect)(()=>{r&&O(new Set(I.map(e=>e.id)))},[r]);let ue=(0,R.useMemo)(()=>se.filter(e=>D.has(e.id)),[se,D]),de=ue.filter(e=>e.removable&&!e.isOrphan),fe=ue.filter(e=>e.removable),pe=(e,t)=>{let n=t.ctrlKey||t.metaKey;O(r=>{if(t.shiftKey&&te){let t=se.findIndex(e=>e.id===te),i=se.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(se[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),k(e.id)},me=(0,R.useCallback)(()=>O(new Set(I.map(e=>e.id))),[I]),he=I.length>0&&I.every(e=>D.has(e.id)),ge=(0,R.useCallback)(async()=>{let e=de.map(e=>e.id);if(e.length!==0){S(!0);try{let t=await Fe(e);t.ok||await za(ie(c,e.length,`restored_done_of_1_item`,`restored_done_of_total_items`,{done:t.done,total:e.length})),O(new Set),await oe()}finally{S(!1)}}},[oe,de,c]),L=(0,R.useCallback)(async()=>{let e=fe.map(e=>e.id);if(re(null),e.length!==0){S(!0);try{let t=await Ie(e);!t.ok&&!t.cancelled&&await za(ie(c,e.length,`deleted_done_of_1_item`,`deleted_done_of_total_items`,{done:t.done,total:e.length})),O(new Set),await oe()}finally{S(!1)}}},[fe,oe,c]),_e=async()=>{re(null),S(!0);try{await Pe(E),O(new Set),await oe()}finally{S(!1)}},ve=async()=>{S(!0),v(null);try{let e=await Re();if(e.cancelled){v(`Elevation was declined — nothing was read.`);return}if(e.failed){v(`The elevated helper could not produce a report. Try again.`);return}m(e.entries),g(!0)}finally{S(!1)}},ye=async()=>{S(!0),re(null);try{await H(),m([]),g(!1),v(null),await oe()}finally{S(!1)}},be=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},z=e=>{navigator.clipboard.writeText(e.originalPath)},xe=(e,t)=>{e.preventDefault(),t&&!D.has(t.id)&&O(new Set([t.id])),M({x:e.clientX,y:e.clientY})};(0,R.useEffect)(()=>(cl(`recycle`,D.size>0?(e,t)=>M({x:e,y:t}):null),()=>cl(`recycle`,null)),[D]),(0,R.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),me()):e.key===`delete`?(e.preventDefault(),fe.length>0&&re(`delete`)):e.key===`Enter`&&de.length>0?(e.preventDefault(),ge()):e.key===`Escape`&&(O(new Set),M(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[fe.length,de.length,ge,me]);let Se=[{label:c(`restore`),icon:(0,q.jsx)(fm,{width:14,height:14}),disabled:de.length===0,onSelect:()=>void ge()},{label:c(`delete_permanently`),icon:(0,q.jsx)(Ni,{size:14}),danger:!0,disabled:fe.length===0,onSelect:()=>re(`delete`)},{label:c(`properties`),icon:(0,q.jsx)(Di,{size:14}),disabled:ue.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=ue;e&&Le(e.id)}},{label:c(`open_original_location`),icon:(0,q.jsx)(_i,{size:14}),disabled:ue.length!==1,onSelect:()=>{let[e]=ue;e&&be(e)}},{label:c(`copy_original_path`),icon:(0,q.jsx)(ba,{size:14}),disabled:ue.length!==1,onSelect:()=>{let[e]=ue;e&&z(e)}},{label:c(`select_all`),separatorBefore:!0,onSelect:me},{label:c(`refresh`),icon:(0,q.jsx)(Si,{size:14}),onSelect:()=>void oe()}],Ce=ue.length>0?ue[0]:null,we=Ce?{name:Ce.name,path:Ce.contentPath||Ce.originalPath,isDirectory:Ce.isDirectory,size:Ce.size,modified:Ce.deleted,fields:[{label:c(`type`),value:c(gm(Ce))},{label:c(`original_location`),value:Ce.originalPath},{label:c(`date_deleted`),value:P(Ce.deleted)},{label:c(`size`),value:Ce.isDirectory?`—`:C(Ce.size)},...Ce.owner?[{label:c(`owner`),value:Ce.owner}]:[],{label:c(`status`),value:Ce.isOrphan?c(`metadata_only`):Ce.removable?c(`restorable`):c(`other_profile`)}]}:null,Te=ue.length>1?ie(c,ue.length,`k_1_item_selected`,`count_items_selected`):void 0,Ee=(0,R.useRef)(``);return(0,R.useEffect)(()=>{let e=`${we?.path??``}|${we?.modified??0}|${Te??``}`;Ee.current!==e&&(Ee.current=e,a?.(we,Te))},[we,Te,a]),(0,q.jsxs)(vm,{ref:ae,onContextMenu:e=>xe(e),children:[(0,q.jsxs)(ym,{children:[(0,q.jsxs)(bm,{children:[(0,q.jsx)(Ni,{size:16}),(0,q.jsx)(`span`,{children:c(`recycle_bin`)}),(0,q.jsxs)(xm,{children:[y?`…`:ie(c,se.length,`k_1_item`,`count_items`),D.size>0&&` · ${c(`count_selected`,{count:D.size})}`]})]}),(0,q.jsxs)(Sm,{children:[(0,q.jsx)(wm,{$on:E,onClick:()=>ee(e=>!e),title:c(`show_metadata_records_whose_content_is_already_gone`),type:`button`,children:c(`orphans`)}),E&&u&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Cm,{disabled:x||h,onClick:()=>void ve(),title:c(h?`the_administrator_view_is_already_loaded`:`ask_for_administrator_rights_and_list_every_profile_s_leftovers`),type:`button`,children:c(x?`working`:h?`admin_view_loaded`:`show_all_admin`)}),h&&p.length>0&&(0,q.jsx)(Cm,{disabled:x,onClick:()=>re(`purge`),type:`button`,children:c(`delete_every_orphan`)})]}),(0,q.jsx)(Cm,{disabled:x||de.length===0,onClick:()=>void ge(),type:`button`,children:c(`restore`)}),(0,q.jsx)(Cm,{$danger:!0,disabled:x||fe.length===0,onClick:()=>re(`delete`),type:`button`,children:c(`delete`)}),(0,q.jsx)(Cm,{disabled:x||se.length===0,onClick:()=>re(`empty`),type:`button`,children:c(`empty`)}),(0,q.jsx)(Tm,{onClick:()=>void oe(),title:c(`refresh`),type:`button`,children:(0,q.jsx)(Si,{size:14})}),l.available&&(0,q.jsx)(Tm,{onClick:e=>l.open(e.clientX,e.clientY),title:c(`selection_menu`),type:`button`,children:(0,q.jsx)(Da,{size:14})})]})]}),_&&(0,q.jsx)(Km,{children:_}),w&&(0,q.jsx)(qm,{children:w}),!w&&(0,q.jsx)(Gm,{children:(0,q.jsxs)(Em,{ref:le,children:[(0,q.jsxs)(Om,{children:[(0,q.jsx)(Pm,{$checked:he,$partial:!he&&D.size>0,onClick:()=>he?O(new Set):me(),title:c(he?`select_none`:`select_all`),type:`button`,children:he?(0,q.jsx)(Pi,{size:9}):D.size>0&&(0,q.jsx)(Fm,{})}),(0,q.jsxs)(km,{onClick:()=>De(`name`),type:`button`,children:[c(`name`),hm(A,`name`)]}),(0,q.jsxs)(km,{onClick:()=>De(`original`),type:`button`,children:[c(`original_location`),hm(A,`original`)]}),(0,q.jsxs)(km,{onClick:()=>De(`deleted`),type:`button`,children:[c(`date_deleted`),hm(A,`deleted`)]}),(0,q.jsxs)(km,{onClick:()=>De(`size`),type:`button`,children:[c(`size`),hm(A,`size`)]}),(0,q.jsxs)(km,{onClick:()=>De(`type`),type:`button`,children:[c(`type`),hm(A,`type`)]}),(0,q.jsx)(`span`,{})]}),(0,q.jsxs)(Am,{onClick:e=>{e.target===e.currentTarget&&O(new Set)},children:[!y&&ce&&(0,q.jsx)(qm,{children:t?.open&&t.query.trim().length>0?c(`no_matching_items`):c(`the_recycle_bin_is_empty`)}),se.map(e=>(0,q.jsxs)(jm,{$checked:D.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>pe(e,t),onContextMenu:t=>xe(t,e),onDoubleClick:()=>{O(new Set([e.id])),k(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,q.jsx)(Nm,{$checked:D.has(e.id),children:D.has(e.id)&&(0,q.jsx)(Pi,{size:9})}),(0,q.jsxs)(Im,{children:[(0,q.jsx)(_m,{entry:e}),(0,q.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,q.jsx)(Wm,{children:c(`metadata_only`)}),e.owner&&(0,q.jsx)(Wm,{$other:!0,children:c(`other_profile`)})]}),(0,q.jsx)(Rm,{children:e.originalPath}),(0,q.jsx)(zm,{children:P(e.deleted)}),(0,q.jsx)(Bm,{children:e.isDirectory?`—`:C(e.size)}),(0,q.jsx)(Vm,{children:c(gm(e))}),(0,q.jsxs)(Hm,{children:[e.removable&&!e.isOrphan&&(0,q.jsx)(Um,{onClick:t=>{t.stopPropagation(),Fe([e.id]).then(oe)},title:c(`restore_to_its_original_folder`),type:`button`,children:(0,q.jsx)(fm,{})}),e.removable&&(0,q.jsx)(Um,{$danger:!0,onClick:t=>{t.stopPropagation(),O(new Set([e.id])),re(`delete`)},title:e.isOrphan?c(`remove_the_leftover_record`):c(`delete_permanently`),type:`button`,children:(0,q.jsx)(Ni,{size:13})})]})]},e.id))]})]})}),ne&&(0,q.jsx)(ho,{items:Se,onClose:()=>M(null),x:ne.x,y:ne.y}),(0,q.jsx)(ns,{confirmLabel:c(N===`empty`?`empty_the_bin`:N===`purge`?`delete_every_orphan`:`delete`),danger:!0,message:N===`empty`?ie(c,se.length,`permanently_delete_1_item_this_cannot_be_undone`,`permanently_delete_count_items_this_cannot_be_undone`):N===`purge`?c(`permanently_delete_every_leftover_record_including_the_ones_owned_by_other_profiles_this_cannot_be_undone`):ie(c,fe.length,`permanently_delete_1_selected_item_this_cannot_be_undone`,`permanently_delete_count_selected_items_this_cannot_be_undone`),onCancel:()=>re(null),onConfirm:()=>{N===`empty`?_e():N===`purge`?ye():L()},open:N!==null,title:c(N===`empty`?`empty_the_recycle_bin`:N===`purge`?`delete_every_orphan`:`delete_permanently`)})]});function De(e){j(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Qn(`yafm.recycle.sort`,n),n})}}function mm(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return gm(e).localeCompare(gm(t),void 0,{sensitivity:`base`})}}function hm(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function gm(e){if(e.isDirectory)return`folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`file`}function _m({entry:e}){let t=mn(e.originalPath,e.isDirectory);return(0,q.jsx)(Lm,{children:t?(0,q.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,q.jsx)(_i,{}):(0,q.jsx)(vi,{})})}var vm=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,ym=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,bm=v.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,xm=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Sm=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Cm=v.button`
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
`,wm=v(Cm)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Tm=v.button`
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
`,Em=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Dm=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Om=v.div`
    display: grid;
    grid-template-columns: ${Dm};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,km=v.button`
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
`,Am=v.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,jm=v.div`
    display: grid;
    grid-template-columns: ${Dm};
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
`,Mm=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Nm=v.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Pm=v.button`
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
`,Fm=v.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Im=v(Mm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Lm=v.span`
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
`,Rm=v(Mm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,zm=v(Mm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Bm=v(Mm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Vm=v(Mm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Hm=v.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Um=v.button`
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
`,Wm=v.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Gm=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Km=v.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,qm=v.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Jm(){return l.available?(await l.request(`app.tags`)).tags:[]}async function Ym(e){return!l.available||!e?!1:(await l.request(`app.tags.delete`,{name:e})).ok}async function Xm(e,t){return!l.available||!e?[]:(await l.request(`app.tags.create`,{name:e,color:t})).tags}async function Zm(e,t){return!l.available||!e?!1:(await l.request(`app.tags.color`,{name:e,color:t})).ok}async function Qm(e,t){return!l.available||!e||!t?!1:(await l.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function $m(){let e=o();return(0,q.jsx)(eh,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var eh=v.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,th=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function nh(e){return`"${e.replaceAll(`"`,``)}"`}function rh(e){let t=document.documentElement.style;for(let n of th){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${nh(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function ih(){return l.available?(await l.request(`app.fonts`)).fonts??[]:[]}function ah({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let s=o(),[c,l]=(0,R.useState)(null),[u,d]=(0,R.useState)(``),f=(0,R.useRef)(null),p=(0,R.useRef)(null),m=(0,R.useMemo)(()=>{let e=u.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,u]);(0,R.useEffect)(()=>{if(!c)return;p.current?.focus();let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[c]);let h=()=>{if(c){l(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;d(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;l({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},g=e=>{a(e),l(null)};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(oh,{"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:i,onClick:h,ref:f,type:`button`,children:[(0,q.jsx)(sh,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,q.jsx)(ch,{children:`▾`})]}),c&&(0,Za.createPortal)((0,q.jsxs)(lh,{"data-font-menu":`true`,role:`listbox`,style:{left:c.left,maxHeight:c.maxHeight,top:c.top,width:c.width},children:[(0,q.jsxs)(uh,{children:[(0,q.jsx)(bi,{size:12}),(0,q.jsx)(dh,{onChange:e=>d(e.target.value),placeholder:s(`filter_fonts`),ref:p,value:u})]}),(0,q.jsxs)(fh,{children:[(0,q.jsxs)(ph,{$active:!e,"aria-selected":!e,onClick:()=>g(null),role:`option`,type:`button`,children:[(0,q.jsxs)(hh,{children:[n,` `,(0,q.jsx)(_h,{children:s(`default_2`)})]}),!e&&(0,q.jsx)(Pi,{size:11})]}),m.map(t=>(0,q.jsxs)(ph,{$active:e===t,"aria-selected":e===t,onClick:()=>g(t),role:`option`,type:`button`,children:[(0,q.jsxs)(mh,{children:[(0,q.jsx)(hh,{children:t}),(0,q.jsx)(gh,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,q.jsx)(Pi,{size:11})]},t)),m.length===0&&(0,q.jsx)(vh,{children:s(`no_matching_font`)})]})]}),document.body)]})}var oh=v.button`
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
`,sh=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ch=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,lh=v.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${co}
`,uh=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,dh=v.input`
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
`,fh=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,ph=v.button`
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
`,mh=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,hh=v.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gh=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_h=v.span`
    color: var(--text-muted);
    font-size: 10px;
`,vh=v.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,yh=[{id:`goBack`,label:`back`,note:`the_previous_folder_in_this_tab_the_mouse_back_button_and_the_browser_back_key_always_work`},{id:`goForward`,label:`forward`,note:`the_next_folder_in_this_tab_the_mouse_forward_button_and_the_browser_forward_key_always_work`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder_like_alt_home_in_dolphin`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path_ctrl_l_in_dolphin`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`ctrl_d_copies_too_following_kde_s_file_manager`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`delete_is_del_by_default_not_ctrl_d`},{id:`deletePermanently`,label:`delete_permanently`,note:`bypasses_the_recycle_bin_dolphin_uses_shift_delete`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected_dolphin_uses_ctrl_shift_a`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory_f10_also_works`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_windows_terminal_in_the_current_folder_dolphin_uses_f4_for_its_terminal_panel`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one_f3_in_dolphin`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],bh=`en`,xh=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],Sh=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],Ch=new Date(2026,10,5,16,8).getTime(),wh=`system`,Th={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},Eh=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-icons`,label:`folder_icons`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],Dh={application:(0,q.jsx)(Di,{size:13}),share_access:(0,q.jsx)(Ca,{size:13}),startup:(0,q.jsx)(wa,{size:13}),fonts:(0,q.jsx)(qi,{size:13}),time_format:(0,q.jsx)(ji,{size:13}),updates:(0,q.jsx)(Si,{size:13}),colors:(0,q.jsx)(ka,{size:13}),background:(0,q.jsx)(ia,{size:13}),safety:(0,q.jsx)(Oa,{size:13}),tags:(0,q.jsx)(Aa,{size:13}),files_view:(0,q.jsx)(ki,{size:13}),shortcuts:(0,q.jsx)(ja,{size:13}),memory:(0,q.jsx)(Ji,{size:13}),overview:(0,q.jsx)($i,{size:13}),gallery:(0,q.jsx)(fa,{size:13}),icons:(0,q.jsx)(Ri,{size:13}),icons_by_extension:(0,q.jsx)(vi,{size:13}),folder_icons:(0,q.jsx)(_i,{size:13}),folder_index:(0,q.jsx)(ha,{size:13}),index_tasks:(0,q.jsx)(Mi,{size:13}),files:(0,q.jsx)(Ii,{size:13})},Oh=`yafm.colors.recent`;function kh(){let e=Zn(Oh);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Ah({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let s=o(),[c,l]=(0,R.useState)([]),[u,d]=(0,R.useState)(null),[m,_]=(0,R.useState)(!1),[v,y]=(0,R.useState)(null),b=f(g(v?.themeMode)),[T,E]=(0,R.useState)(null),[ee,D]=(0,R.useState)(``),[O,te]=(0,R.useState)(`file`),[k,j]=(0,R.useState)(!1),[ne,M]=(0,R.useState)(!1),[N,re]=(0,R.useState)(null),[P,F]=(0,R.useState)(dt),[se,L]=(0,R.useState)(!1),[_e,ve]=(0,R.useState)(null),[ye,be]=(0,R.useState)(null),[z,Se]=(0,R.useState)(null),[Ce,we]=(0,R.useState)(!1),[Te,Ee]=(0,R.useState)(null),[De,Oe]=(0,R.useState)(!1),[ke,Ae]=(0,R.useState)(null),[B,je]=(0,R.useState)(null),[Me,Ne]=(0,R.useState)(!1),[V,Pe]=(0,R.useState)([]),[Fe,Ie]=(0,R.useState)(null),[Le,Re]=(0,R.useState)(!1),[H,ze]=(0,R.useState)(null),[Be,Ve]=(0,R.useState)(``),[He,Ue]=(0,R.useState)(Ks),[We,Ke]=(0,R.useState)(null),[Je,Ye]=(0,R.useState)(null),[Qe,$e]=(0,R.useState)(``),[ot,ct]=(0,R.useState)(``),[mt,_t]=(0,R.useState)(null),[vt,yt]=(0,R.useState)(kh),[bt,xt]=(0,R.useState)({}),[U,St]=(0,R.useState)(null),[Ct,wt]=(0,R.useState)(null),[Tt,Et]=(0,R.useState)(!1),[Dt,Ot]=(0,R.useState)(null),[kt,At]=(0,R.useState)(null),jt=(0,R.useRef)(!1),[Mt,Nt]=(0,R.useState)(null),[Pt,Ft]=(0,R.useState)(Eh[0].id),[It,Lt]=(0,R.useState)([]),[Rt,zt]=(0,R.useState)(null),[Bt,Vt]=(0,R.useState)(``),[Ht,Ut]=(0,R.useState)(!1),[Gt,Kt]=(0,R.useState)(null),[qt,Xt]=(0,R.useState)(null),[Zt,Qt]=(0,R.useState)(!1),[$t,en]=(0,R.useState)(``),tn=(0,R.useRef)(null),nn=(0,R.useRef)({}),rn=v?.defaultView??xe,an=v?.themePresets??[],on=e?.platform===`windows`,sn=on?ye?ye.registered&&ye.pathMatches:!1:v?.archiveHandler??!1,cn=ye?.registered??v?.archiveHandler??!1,un=on?z?z.registered&&z.pathMatches:!1:v?.defaultFileManager??!1,dn=on?P.registered&&P.pathMatches:v?.linksEnabled??!1;df(tn,r??null,`section`,i??(()=>void 0),[v]),(0,R.useEffect)(()=>{let e=tn.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Ft(Eh[Eh.length-1].id);return}let n=t+110,r=Eh[0].id;for(let{id:e}of Eh){let t=nn.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Ft(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let fn=e=>t=>{nn.current[e]=t},pn=e=>{nn.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),Ft(e)},mn=e=>{let t=tn.current;if(!t)return;let n=e.currentTarget,r=n.scrollHeight>n.clientHeight+1,i=n.scrollTop<=0&&e.deltaY<0,a=n.scrollTop+n.clientHeight>=n.scrollHeight-1&&e.deltaY>0;(!r||i||a)&&(t.scrollTop+=e.deltaY)};(0,R.useEffect)(()=>{t&&pn(t)},[t]),(0,R.useEffect)(()=>{p().then(e=>l(e.available),()=>l([]))},[]),(0,R.useEffect)(()=>{ih().then(Lt,()=>Lt([]))},[]),(0,R.useEffect)(()=>{ht().then(Kt,()=>Kt(null))},[]),(0,R.useEffect)(()=>{ue().then(wt,()=>void 0)},[]),(0,R.useEffect)(()=>{Ge().then(d,()=>d(null)),Xe().then(y,()=>y(null)),ft().then(F,()=>F(dt)),nt().then(be,()=>be(null)),et().then(Se,()=>Se(null)),Jm().then(Pe,()=>Pe([]))},[]),(0,R.useEffect)(()=>{let e=()=>void lt().then(re,()=>re(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let W=async e=>{if(!v)return;let t={...v,...e};Object.keys(e).every(e=>t[e]===v[e])||(y(t),ln(),y(await at(t)),n())},G=async e=>{let t=await Fa(e);if(!t)return;let n=v?.backgroundCustom??[];await W({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},K=async()=>{let e=$t.trim();if(!v||!A(e))return;let t=v.backgroundCustom??[];en(``),await W({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},hn=e=>{if(!v)return;let t=v.backgroundSource;W({backgroundCustom:v.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},gn=async()=>{if(!v)return;let t=await Pa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;v.protectedPaths.includes(r)||await W({protectedPaths:[...v.protectedPaths,r]})},_n=()=>{let e=Qe.trim();v&&e&&!v.protectedPaths.includes(e)&&($e(``),W({protectedPaths:[...v.protectedPaths,e]}))},vn=()=>{if(!v||!We)return;let e=We.value.trim(),t=We.from;Ke(null),e.length!==0&&e!==t&&W({protectedPaths:v.protectedPaths.map(n=>n===t?e:n)})},yn=e=>{v&&W({protectedPaths:v.protectedPaths.filter(t=>t!==e)})},bn=async()=>{let e=await Ze();e.length>0&&await W({protectedPaths:e})},xn=()=>{if(!v||!Je)return;let e=Je.value.trim(),t=Je.from;Ye(null),e&&e!==t&&W({directoryIndexBlacklist:v.directoryIndexBlacklist.map(n=>n===t?e:n)})},Sn=()=>{let e=ot.trim();v&&e&&!v.directoryIndexBlacklist.includes(e)&&(ct(``),W({directoryIndexBlacklist:[...v.directoryIndexBlacklist,e]}))},Cn=async()=>{if(!v)return;let t=await Pa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;v.directoryIndexBlacklist.includes(r)||await W({directoryIndexBlacklist:[...v.directoryIndexBlacklist,r]})},wn=e=>{v&&W({directoryIndexBlacklist:v.directoryIndexBlacklist.filter(t=>t!==e)})},Tn=()=>{W({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},En=()=>{if(!v||mt===null)return;let e=mt.trim()||`yyyy/MM/dd HH:mm`;_t(null),e!==v.timeFormatPattern&&W({timeFormatPattern:e})},Dn=(e,t)=>{yt(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Qn(Oh,i),i})},On=ae(v?.accentColor,oe),kn=ae(v?.secondaryColor,h),An=(e,t)=>{v&&(Dn(`accent`,On),Dn(`secondary`,kn),W({accentColor:e,secondaryColor:t}))},jn=(e,t)=>{v&&(Dn(e,e===`accent`?On:kn),W(e===`accent`?{accentColor:t}:{secondaryColor:t}))},Mn=async()=>{Et(!0),Ot(null);try{wt(await de())}catch{Ot(s(`could_not_check_for_updates`))}finally{Et(!1)}},Nn=async()=>{jt.current=!1,Ot(null),At({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await fe();e.ok||Pn(e.error??``)}catch(e){Pn(e instanceof Error?e.message:String(e))}},Pn=e=>At(t=>t&&{...t,phase:`error`,error:e}),Fn=()=>{At(null),pe().catch(e=>Ot(e instanceof Error?e.message:String(e)))},In=async()=>{At(e=>e&&{...e,phase:`installing`});try{let e=await me();e.ok||Pn(e.error??s(`the_update_failed`))}catch(e){Pn(e instanceof Error?e.message:String(e))}};(0,R.useEffect)(()=>he(e=>At(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,R.useEffect)(()=>ge(e=>At(t=>t&&{...t,changelog:e.text})),[]),(0,R.useEffect)(()=>{kt?.phase!==`ready`||jt.current||(jt.current=!0,In())},[kt?.phase]);let Ln=async()=>{if(!v||!U)return;let e=U.name.trim()||`${U.accent.toUpperCase()} / ${U.secondary.toUpperCase()}`,t=[...v.themePresets,{name:e,accent:U.accent,secondary:U.secondary}];St(null),await W({themePresets:t})},Rn=async e=>{v&&await W({themePresets:v.themePresets.filter((t,n)=>n!==e)})},zn=e=>{let t=Mt;Nt(null),t&&t.role===e&&(e===`accent`?On:kn).toLowerCase()!==t.color.toLowerCase()&&Dn(e,t.color)},Bn=async()=>{let e=Be.trim();if(e&&!Le){Re(!0),ze(null);try{Pe(await Xm(e,He)),Ve(``)}catch{ze(s(`could_not_add_the_tag`))}finally{Re(!1)}}},Vn=async(e,t)=>{Pe(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Zm(e,t)||ze(s(`could_not_change_the_tag_s_color`))},Hn=async e=>{if(Le)return;Re(!0),ze(null);let t=await Ym(e);Pe(await Jm()),t||ze(`"${e}" is still used by a folder whose index could not be updated.`),Re(!1)},Un=async()=>{let e=Fe;if(!e||Le)return;let t=e.value.trim();t.length===0||t===e.name?Ie(null):(Re(!0),ze(null),await Qm(e.name,t)?(Pe(await Jm()),Ie(null)):ze(`Could not rename "${e.name}".`),Re(!1))},Wn=async e=>{let t=new Set(rn.columns??xe.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=vl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await W({defaultView:{...rn,columns:n}})},Gn=async()=>{if(se)return;let e=!dn;L(!0),ve(null);try{let t=await pt(e),r=t.registered&&t.pathMatches;F(t),y(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&ve(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ve(`The request to Windows failed. Try again.`)}finally{L(!1)}},Kn=async e=>{if(!m){_(!0);try{d(await qe(e)),n()}finally{_(!1)}}},qn=async()=>{if(De||!v)return;let e=!un;Oe(!0),Ae(null);try{let t=await tt(e);Se(t);let r=on?t.registered&&t.pathMatches:e;y(e=>e&&{...e,defaultFileManager:r}),n(),on&&r!==e&&Ae(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{Ae(`The request to Windows failed. Try again.`)}finally{Oe(!1)}},Jn=async()=>{if(!Ce){we(!0),Ee(null);try{let e=await rt();be(e);let t=e.registered&&e.pathMatches;y(e=>e&&{...e,archiveHandler:t}),n(),t||Ee(`Windows did not accept the archive registration. Try again.`)}catch{Ee(`The request to Windows failed. Try again.`)}finally{we(!1)}}},Yn=async()=>{if(!Ce){we(!0),Ee(null);try{let e=await it();be(e),y(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&Ee(`The registration is still there. Try turning it off again.`)}catch{Ee(`The request to Windows failed. Try again.`)}finally{we(!1)}}},Xn=async(e,t)=>{if(!v)return;let n={...v.extensionIcons};t===null?delete n[e]:n[e]=t,await W({extensionIcons:n})},Zn={...Wt,...v?.shortcuts};(0,R.useEffect)(()=>{if(!B)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){je(null);return}let t=Jt(e);t&&(je(null),W({shortcuts:{...Zn,[B]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[B,v]),(0,R.useEffect)(()=>{if(!Me)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){Ne(!1);return}let t=Jt(e);t&&(Ne(!1),W({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[Me,v]);let $n=async e=>{await W({recentLimit:Math.min(Math.max(e,0),50)})},er=(e,t)=>{let n=t??bt[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};xt(t=>({...t,[e]:void 0})),W(i)},tr=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;zt(null),await W({sharePortMode:`custom`,sharePort:n}),await Gc(n,`custom`)},nr=async e=>{let t=e===`custom`,n=t?v?.sharePort??8080:null;await W({sharePortMode:t?`custom`:`random`,sharePort:n}),await Gc(n,t?`custom`:`random`)};(0,R.useEffect)(()=>{nl().then(Ut,()=>void 0)},[]);let rr=async()=>{Bt.length!==0&&(Ut(await rl(Bt)),Vt(``))},ir=async()=>{Ut(await rl(null))},ar=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;Qt(!0),Xt(null);try{let e=await gt(t);Kt(e),Xt(e.error),e.error||await W({startupMode:t})}finally{Qt(!1)}},or=async e=>{await W({galleryRoots:e.length>0?e:null})},sr=async()=>{let e=await Pa(),t=v?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await or([...t,e])},cr=async()=>{let e=ee.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await Xn(e,O),D(``))},lr=async()=>{M(!0);try{let e=await Pa();if(!e)return;let t=await Fa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await st(e.replace(/[\\/][^\\/]+$/,``),x(e),`file:${t}`)&&(ln(),E({folder:e,icon:t}))}finally{M(!1)}},ur=async(e,t)=>{let n={...v?.fonts};t?n[e]=t:delete n[e],await W({fonts:n})};return(0,q.jsxs)(Uh,{children:[(0,q.jsxs)(Wh,{ref:tn,children:[(0,q.jsxs)(Gh,{ref:fn(`application`),children:[(0,q.jsx)(Hh,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`version`)}),(0,q.jsx)(Hg,{children:e?`v${e.version}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`platform`)}),(0,q.jsx)(Hg,{children:e?.platform??`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`language`)}),(0,q.jsx)($,{children:s(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(zh,{disabled:!v,onChange:e=>void W({language:e}),options:[wh,...c.length>0?c:[bh]],value:v?.language??bh})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`picker_window_size`)}),(0,q.jsx)($,{children:s(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{inputMode:`numeric`,onBlur:e=>er(`width`,e.currentTarget.value),onChange:e=>xt(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:bt.width??String(v?.pickerWindowWidth??1200)}),(0,q.jsx)(Hg,{children:`×`}),(0,q.jsx)($g,{inputMode:`numeric`,onBlur:e=>er(`height`,e.currentTarget.value),onChange:e=>xt(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:bt.height??String(v?.pickerWindowHeight??800)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`web_server_port`)}),(0,q.jsx)($,{children:s(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Ao,{disabled:!v,onChange:e=>void nr(e),options:[{value:`random`,label:s(`random`)},{value:`custom`,label:s(`custom_port`)}],value:v?.sharePortMode??`random`,width:160})})]}),v?.sharePortMode===`custom`&&(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`custom_port`)}),(0,q.jsx)($,{children:s(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)($g,{inputMode:`numeric`,onBlur:e=>void tr(e.currentTarget.value),onChange:e=>zt(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Rt??(v?.sharePort?String(v.sharePort):``)})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`link_paths`)}),(0,q.jsx)($,{children:s(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Ao,{disabled:!v,onChange:e=>void W({linkPathMode:e}),options:[{value:`relative`,label:s(`relative`)},{value:`absolute`,label:s(`absolute`)}],value:v?.linkPathMode??`relative`,width:160})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`global_hotkey`)}),(0,q.jsx)($,{children:s(`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(j_,{$listening:Me,disabled:!v,onClick:()=>Ne(!0),type:`button`,children:Me?s(`press_a_key`):v?.globalHotkey?Yt(v.globalHotkey):s(`none`)}),v?.globalHotkey&&(0,q.jsx)(Kg,{onClick:()=>void W({globalHotkey:null}),type:`button`,children:s(`clear`)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`open_yafm_links`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),P.registered&&!P.pathMatches&&(0,q.jsx)(Vg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:P.registeredPath??`?`})}),_e&&(0,q.jsx)(Vg,{children:_e})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Xg,{$on:dn,children:s(dn?`active`:`off`)}),(0,q.jsx)(Zg,{$on:dn,disabled:se,onClick:()=>void Gn(),title:s(dn?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,q.jsx)(Qg,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_as_the_default_file_manager`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),z?.registered&&!z.pathMatches&&(0,q.jsx)(Vg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:z.registeredPath??`?`})}),ke&&(0,q.jsx)(Vg,{children:ke})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Xg,{$on:un,children:s(un?`active`:`off`)}),(0,q.jsx)(Zg,{$on:un,disabled:!v||De,onClick:()=>void qn(),title:s(un?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,q.jsx)(Qg,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`open_archives_with_this_app`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,q.jsx)($,{children:s(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),ye?.registered&&!ye.pathMatches&&(0,q.jsx)(Vg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:ye.registeredPath??`?`})}),Te&&(0,q.jsx)(Vg,{children:Te})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Xg,{$on:sn,children:s(sn?`active`:`off`)}),(0,q.jsx)(M_,{disabled:!v||Ce||sn,onClick:()=>void Jn(),type:`button`,children:s(`register`)}),e?.platform===`windows`&&(0,q.jsx)(M_,{onClick:()=>void I(`ms-settings:defaultapps`),type:`button`,children:s(`default_apps`)}),(0,q.jsx)(Yg,{disabled:!v||Ce||!cn,onClick:()=>void Yn(),type:`button`,children:s(`unregister`)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reopen_the_tabs_that_were_open`)}),(0,q.jsx)($,{children:s(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,q.jsx)(Zg,{$on:v?.restoreTabs??!0,disabled:!v,onClick:()=>void W({restoreTabs:!v?.restoreTabs}),type:`button`,children:(0,q.jsx)(Qg,{})})]})]})]}),(0,q.jsxs)(Gh,{ref:fn(`share-access`),children:[(0,q.jsx)(Hh,{note:`share_access_note`,title:`share_access`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Q,{children:s(`share_access_require_approval`)}),(0,q.jsx)($m,{})]}),(0,q.jsx)($,{children:s(`share_access_note`)})]}),(0,q.jsx)(Zg,{$on:v?.shareAccessEnabled??!0,disabled:!v,onClick:()=>void W({shareAccessEnabled:!(v?.shareAccessEnabled??!0)}),type:`button`,children:(0,q.jsx)(Qg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(X,{children:(0,q.jsx)(Q,{children:s(`share_access_approval_minutes`)})}),(0,q.jsx)(Z,{children:(0,q.jsx)(Rg,{max:1440,min:1,onChange:e=>void W({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:v?.shareApprovalMinutes??60})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(X,{children:(0,q.jsx)(Q,{children:s(`share_access_denial_seconds`)})}),(0,q.jsx)(Z,{children:(0,q.jsx)(Rg,{max:3600,min:1,onChange:e=>void W({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:v?.shareDenialSeconds??10})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Bg,{children:(0,q.jsx)(Q,{children:s(`password`)})}),(0,q.jsx)($,{children:s(`share_access_password_note`)}),Ht&&(0,q.jsx)($,{children:s(`share_access_password_is_set`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(zg,{autoComplete:`new-password`,onChange:e=>Vt(e.target.value),placeholder:s(`password`),type:`password`,value:Bt}),(0,q.jsx)(M_,{disabled:Bt.length===0,onClick:()=>void rr(),type:`button`,children:s(`save`)}),Ht&&(0,q.jsx)(Yg,{onClick:()=>void ir(),type:`button`,children:s(`clear`)})]})]}),(0,q.jsx)(Y,{children:(0,q.jsxs)(X,{children:[(0,q.jsx)(Bg,{children:(0,q.jsx)(Q,{children:s(`devices`)})}),(0,q.jsx)($,{children:s(`share_access_devices_note`)})]})}),(0,q.jsx)(jh,{approvalMinutes:v?.shareApprovalMinutes??60,denialSeconds:v?.shareDenialSeconds??10})]})]}),(0,q.jsxs)(Gh,{ref:fn(`startup`),children:[(0,q.jsx)(Hh,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`start_with_the_computer`)}),(0,q.jsx)($,{children:s(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),qt&&(0,q.jsx)(Vg,{children:qt}),Gt&&!Gt.supported&&(0,q.jsx)(Vg,{children:s(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Ao,{disabled:!v||Zt||Gt!==null&&!Gt.supported,onChange:e=>void ar(e),options:[{value:`none`,label:s(`none`)},{value:`shortcut`,label:s(`shortcut`)},{value:`task`,label:s(`scheduled_task`)}],value:Gt?.mode??v?.startupMode??`none`,width:170})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`start_hidden_in_the_tray`)}),(0,q.jsx)($,{children:s(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Zg,{$on:v?.startHidden??!1,disabled:!v,onClick:()=>void W({startHidden:!v?.startHidden}),type:`button`,children:(0,q.jsx)(Qg,{})})})]})]})]}),(0,q.jsxs)(Gh,{ref:fn(`fonts`),children:[(0,q.jsx)(Hh,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`}),(0,q.jsxs)(Jh,{children:[th.map(e=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(e.label)}),(0,q.jsx)($,{children:s(`falls_back_to_font_until_another_family_is_chosen`,{font:s(e.fallback)})})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(ah,{defaultLabel:s(e.fallback),disabled:!v,fonts:It,onChange:t=>void ur(e.id,t),sample:e.sample,value:v?.fonts?.[e.id]??null})})]},e.id)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset`)}),(0,q.jsx)($,{children:s(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(M_,{onClick:()=>void W({fonts:{}}),type:`button`,children:s(`reset`)})})]})]})]}),(0,q.jsxs)(Gh,{ref:fn(`time`),children:[(0,q.jsx)(Hh,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`}),(0,q.jsx)(Jh,{children:(0,q.jsxs)(Yh,{children:[(0,q.jsxs)(Xh,{children:[(0,q.jsx)(Q,{children:s(`format`)}),(0,q.jsx)($,{children:s(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,q.jsx)(T_,{children:Sh.map(e=>(0,q.jsx)(E_,{$active:(v?.timeFormat??`24`)===e.id,onClick:()=>void W({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(v?.timeFormat??`24`)===`custom`&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(D_,{"aria-label":s(`pattern`),onBlur:En,onChange:e=>_t(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),En()):e.key===`Escape`&&_t(null)},spellCheck:!1,value:mt??v?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,q.jsx)($,{children:s(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,q.jsxs)(O_,{children:[(0,q.jsx)(`span`,{children:s(`preview`)}),(0,q.jsx)(`code`,{children:w(Ch,v?.timeFormat,mt??v?.timeFormatPattern)})]})]})})]}),(0,q.jsxs)(Gh,{ref:fn(`updates`),children:[(0,q.jsx)(Hh,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`current_version`)}),(0,q.jsx)(Hg,{children:e?`v${e.version}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`latest_version`)}),(0,q.jsx)(Hg,{children:Ct?`v${Ct.latest}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:Ct?Ct.available?s(`version_version_is_available`,{version:Ct.latest}):s(`you_are_on_the_latest_version`):s(`not_checked_yet`)}),(0,q.jsx)($,{children:Ct?.available?s(`the_installer_downloads_installs_itself_and_closes_the_app`):s(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,q.jsx)(Z,{children:Ct?.available?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(M_,{onClick:()=>void le(),type:`button`,children:s(`open_release_page`)}),on&&(0,q.jsx)(M_,{disabled:kt!==null,onClick:()=>void Nn(),type:`button`,children:s(`download_and_install`)})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(M_,{disabled:Tt,onClick:()=>void Mn(),type:`button`,children:s(Tt?`checking`:`check_for_updates`)}),(0,q.jsx)(M_,{onClick:()=>void ce(),type:`button`,children:s(`open_log_folder`)})]})})]}),Dt&&(0,q.jsx)(Y,{children:(0,q.jsx)(Vg,{children:Dt})})]})]}),(0,q.jsxs)(Gh,{ref:fn(`colors`),children:[(0,q.jsx)(Hh,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Yh,{children:[(0,q.jsxs)(Xh,{children:[(0,q.jsx)(Q,{children:s(`theme`)}),(0,q.jsx)($,{children:s(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,q.jsx)(T_,{children:xh.map(e=>(0,q.jsx)(E_,{$active:(v?.themeMode??`system`)===e.id,onClick:()=>void W({themeMode:e.id}),type:`button`,children:s(e.label)},e.id))})]}),(0,q.jsxs)(Yh,{children:[(0,q.jsxs)(Xh,{children:[(0,q.jsx)(Q,{children:s(`presets`)}),(0,q.jsx)($,{children:s(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,q.jsxs)(Zh,{children:[Yu.map(e=>(0,q.jsxs)(Qh,{$on:On.toLowerCase()===e.accent&&kn.toLowerCase()===e.secondary,onClick:()=>An(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,q.jsxs)(ag,{children:[(0,q.jsx)(`i`,{style:{background:e.accent}}),(0,q.jsx)(`i`,{style:{background:e.secondary}})]}),(0,q.jsx)($h,{children:s(e.name)})]},e.name)),an.map((e,t)=>(0,q.jsxs)(eg,{children:[(0,q.jsxs)(Qh,{$on:On.toLowerCase()===e.accent.toLowerCase()&&kn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>An(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,q.jsxs)(ag,{children:[(0,q.jsx)(`i`,{style:{background:e.accent}}),(0,q.jsx)(`i`,{style:{background:e.secondary}})]}),(0,q.jsx)($h,{children:e.name})]}),(0,q.jsx)(tg,{onClick:()=>void Rn(t),title:s(`remove_preset`),type:`button`,children:(0,q.jsx)(Fi,{size:9})})]},`${e.name}-${t}`)),U?(0,q.jsxs)(rg,{children:[(0,q.jsxs)(ag,{children:[(0,q.jsx)(`i`,{style:{background:U.accent}}),(0,q.jsx)(`i`,{style:{background:U.secondary}})]}),(0,q.jsx)(ig,{autoFocus:!0,maxLength:24,onChange:e=>St({...U,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ln()):e.key===`Escape`&&(e.preventDefault(),St(null))},placeholder:s(`preset_name`),spellCheck:!1,value:U.name}),(0,q.jsx)(Kg,{onClick:()=>void Ln(),type:`button`,children:s(`save`)}),(0,q.jsx)(Kg,{onClick:()=>St(null),type:`button`,children:s(`cancel`)})]}):(0,q.jsxs)(ng,{disabled:!v,onClick:()=>St({name:``,accent:On,secondary:kn}),title:s(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,q.jsx)(Ci,{size:12}),s(`add_preset`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`accent_color`)}),(0,q.jsx)($,{children:s(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Vh,{colors:vt.accent,current:On,onApply:e=>jn(`accent`,e)}),(0,q.jsx)(qg,{"aria-label":s(`accent_color`),disabled:!v,onBlur:()=>zn(`accent`),onChange:e=>void W({accentColor:e.target.value}),onFocus:()=>Nt({role:`accent`,color:On}),type:`color`,value:On}),(0,q.jsx)(Jg,{children:On.toUpperCase()})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`secondary_color`)}),(0,q.jsx)($,{children:s(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Vh,{colors:vt.secondary,current:kn,onApply:e=>jn(`secondary`,e)}),(0,q.jsx)(qg,{"aria-label":s(`secondary_color`),disabled:!v,onBlur:()=>zn(`secondary`),onChange:e=>void W({secondaryColor:e.target.value}),onFocus:()=>Nt({role:`secondary`,color:kn}),type:`color`,value:kn}),(0,q.jsx)(Jg,{children:kn.toUpperCase()})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset_colors`)}),(0,q.jsx)($,{children:s(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Kg,{disabled:!v,onClick:()=>{Dn(`accent`,On),Dn(`secondary`,kn),W({accentColor:null,secondaryColor:null})},type:`button`,children:s(`reset`)})})]})]})]}),(0,q.jsxs)(Gh,{ref:fn(`background`),children:[(0,q.jsx)(Hh,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Yh,{children:[(0,q.jsxs)(Xh,{children:[(0,q.jsx)(Q,{children:s(`wallpaper`)}),(0,q.jsx)($,{children:s(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,q.jsx)(d_,{children:(0,q.jsx)(f_,{$active:!v?.backgroundSource,onClick:()=>void W({backgroundSource:null}),title:s(`none`),type:`button`,children:(0,q.jsx)(__,{children:s(`none`)})})}),(0,q.jsxs)(c_,{children:[Qu.map(e=>(0,q.jsxs)(l_,{children:[(0,q.jsx)(u_,{children:s(e.name)}),(0,q.jsx)(d_,{children:e.variants.map(t=>(0,q.jsx)(f_,{$active:v?.backgroundSource===t.id,onClick:()=>void W({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,q.jsx)(`img`,{alt:``,src:b===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,q.jsxs)(l_,{children:[(0,q.jsx)(u_,{children:s(`motion`)}),(0,q.jsx)(d_,{children:Zu.map(e=>(0,q.jsxs)(f_,{$active:v?.backgroundSource===e.id,onClick:()=>void W({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,q.jsx)(`img`,{alt:``,src:e.poster}),(0,q.jsx)(h_,{children:(0,q.jsx)(Hi,{size:11})})]},e.id))})]}),(0,q.jsxs)(l_,{children:[(0,q.jsx)(u_,{children:s(`custom`)}),(0,q.jsxs)(d_,{children:[(v?.backgroundCustom??[]).map(e=>(0,q.jsx)(Rh,{active:v?.backgroundSource===`file:${e}`||v?.backgroundSource===`url:${e}`||v?.backgroundSource===e,onRemove:()=>hn(e),onSelect:()=>void W({backgroundSource:A(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,q.jsxs)(g_,{onClick:()=>void G([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,q.jsx)(Ci,{size:12}),s(`image_2`)]}),(0,q.jsxs)(g_,{onClick:()=>void G([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,q.jsx)(Ci,{size:12}),s(`video`)]})]})]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`image_or_video_url`)}),(0,q.jsx)($,{children:s(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{onChange:e=>en(e.target.value),onKeyDown:e=>{e.key===`Enter`&&K()},placeholder:`https://…`,value:$t}),(0,q.jsx)(Kg,{disabled:!A($t),onClick:()=>void K(),type:`button`,children:s(`add`)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`blur`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(s_,{max:40,min:0,onChange:e=>void W({backgroundBlur:Number(e.target.value)}),type:`range`,value:v?.backgroundBlur??0}),(0,q.jsxs)(Hg,{children:[v?.backgroundBlur??0,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`saturation`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(s_,{max:200,min:0,onChange:e=>void W({backgroundSaturation:Number(e.target.value)}),type:`range`,value:v?.backgroundSaturation??100}),(0,q.jsxs)(Hg,{children:[v?.backgroundSaturation??100,`%`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`brightness`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(s_,{max:150,min:40,onChange:e=>void W({backgroundBrightness:Number(e.target.value)}),type:`range`,value:v?.backgroundBrightness??100}),(0,q.jsxs)(Hg,{children:[v?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,q.jsxs)(Gh,{ref:fn(`safety`),children:[(0,q.jsx)(Hh,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Yh,{children:[(0,q.jsxs)(Xh,{children:[(0,q.jsx)(Q,{children:s(`protected_folders`)}),(0,q.jsx)($,{children:s(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,q.jsx)(v_,{children:(v?.protectedPaths??[]).map(e=>(0,q.jsxs)(y_,{children:[(0,q.jsx)(b_,{"aria-label":s(`protected_path`),onBlur:vn,onChange:t=>Ke({from:e,value:t.target.value}),onFocus:()=>Ke({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),vn()):e.key===`Escape`&&Ke(null)},spellCheck:!1,value:We?.from===e?We.value:e}),(0,q.jsx)(x_,{onClick:()=>yn(e),title:s(`remove`),type:`button`,children:(0,q.jsx)(Fi,{size:10})})]},e))}),(0,q.jsxs)(C_,{children:[(0,q.jsx)(w_,{"aria-label":s(`new_protected_rule`),onChange:e=>$e(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_n())},placeholder:`*.log`,spellCheck:!1,value:Qe}),(0,q.jsx)(Kg,{onClick:_n,type:`button`,children:s(`add_the_rule`)})]}),(0,q.jsxs)(S_,{children:[(0,q.jsx)(Kg,{onClick:()=>void bn(),type:`button`,children:s(`restore_defaults`)}),(0,q.jsx)(Kg,{onClick:()=>void gn(),type:`button`,children:s(`add_folder_2`)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`confirmation_delay`)}),(0,q.jsx)($,{children:s(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(s_,{max:30,min:2,onChange:e=>void W({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:v?.deleteDelaySeconds??5}),(0,q.jsxs)(Hg,{children:[v?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,q.jsxs)(Gh,{ref:fn(`tags`),children:[(0,q.jsx)(Hh,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Wg,{"aria-label":s(`color_of_the_new_tag`),onChange:e=>Ue(e.target.value),type:`color`,value:He}),(0,q.jsx)($g,{onChange:e=>Ve(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Bn())},placeholder:s(`new_tag`),spellCheck:!1,value:Be})]}),(0,q.jsx)($,{children:s(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Kg,{disabled:Le||Be.trim().length===0,onClick:()=>void Bn(),type:`button`,children:s(`add`)})})]}),H&&(0,q.jsx)(Y,{children:(0,q.jsx)(Vg,{children:H})}),V.length===0&&(0,q.jsx)(Y,{children:(0,q.jsx)($,{children:s(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),V.map(e=>(0,q.jsx)(Y,{children:Fe?.name===e.name?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Wg,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void Vn(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,q.jsx)(Gg,{autoFocus:!0,disabled:Le,onChange:t=>Ie({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Un()):e.key===`Escape`&&(e.preventDefault(),Ie(null))},value:Fe.value})]}),(0,q.jsx)($,{children:s(`press_enter_to_save_escape_to_cancel`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Kg,{disabled:Le,onClick:()=>void Un(),type:`button`,children:s(`save`)}),(0,q.jsx)(Kg,{disabled:Le,onClick:()=>Ie(null),type:`button`,children:s(`cancel`)})]})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Wg,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void Vn(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,q.jsx)(Q,{children:e.name})]}),(0,q.jsx)($,{children:ie(s,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Kg,{disabled:Le,onClick:()=>Ie({name:e.name,value:e.name}),type:`button`,children:s(`edit`)}),(0,q.jsxs)(Yg,{disabled:Le,onClick:()=>void Hn(e.name),type:`button`,children:[(0,q.jsx)(Ni,{size:13}),s(`remove`)]})]})]})},e.name))]})]}),(0,q.jsxs)(Gh,{ref:fn(`files-view`),children:[(0,q.jsx)(Hh,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`default_view`)}),(0,q.jsx)($,{children:s(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(a_,{children:[(0,q.jsx)(o_,{$on:rn.mode===`list`,onClick:()=>void W({defaultView:{...rn,mode:`list`}}),type:`button`,children:s(`list`)}),(0,q.jsx)(o_,{$on:rn.mode===`grid`,onClick:()=>void W({defaultView:{...rn,mode:`grid`}}),type:`button`,children:s(`grid`)})]})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`list_icon_size`)}),(0,q.jsx)($,{children:s(`the_icon_in_the_list_rows`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(s_,{max:48,min:16,onChange:e=>void W({defaultView:{...rn,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:rn.iconSize}),(0,q.jsxs)(Hg,{children:[rn.iconSize,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`grid_size`)}),(0,q.jsx)($,{children:s(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(s_,{max:260,min:100,onChange:e=>void W({defaultView:{...rn,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:rn.gridSize}),(0,q.jsxs)(Hg,{children:[rn.gridSize,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Q,{children:s(`selection_checkboxes`)}),(0,q.jsx)($m,{})]}),(0,q.jsx)($,{children:s(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,q.jsx)(Zg,{$on:v?.showCheckboxes??!0,disabled:!v,onClick:()=>void W({showCheckboxes:!(v?.showCheckboxes??!0)}),type:`button`,children:(0,q.jsx)(Qg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Q,{children:s(`open_with_a_single_click`)}),(0,q.jsx)($m,{})]}),(0,q.jsx)($,{children:s(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,q.jsx)(Zg,{$on:v?.openOnSingleClick??!1,disabled:!v,onClick:()=>void W({openOnSingleClick:!(v?.openOnSingleClick??!1)}),type:`button`,children:(0,q.jsx)(Qg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Q,{children:s(`open_the_file_tray_while_dragging`)}),(0,q.jsx)($m,{})]}),(0,q.jsx)($,{children:s(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,q.jsx)(Zg,{$on:v?.trayAutoShow??!0,disabled:!v,onClick:()=>void W({trayAutoShow:!(v?.trayAutoShow??!0)}),type:`button`,children:(0,q.jsx)(Qg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Q,{children:s(`confirm_before_deleting`)}),(0,q.jsx)($m,{})]}),(0,q.jsx)($,{children:s(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,q.jsx)(Zg,{$on:v?.confirmDelete??!1,disabled:!v,onClick:()=>void W({confirmDelete:!(v?.confirmDelete??!1)}),type:`button`,children:(0,q.jsx)(Qg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Q,{children:s(`automatic_rename_suffix`)}),(0,q.jsx)($m,{})]}),(0,q.jsx)($,{children:s(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Ao,{disabled:!v,onChange:e=>void W({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:v?.conflictNameStyle??`space_parentheses`,width:160})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Q,{children:s(`play_audio_in_video_previews`)}),(0,q.jsx)($m,{})]}),(0,q.jsx)($,{children:s(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,q.jsx)(Zg,{$on:v?.previewVideoAudio??!1,disabled:!v,onClick:()=>void W({previewVideoAudio:!(v?.previewVideoAudio??!1)}),type:`button`,children:(0,q.jsx)(Qg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Q,{children:s(`autoplay_video_previews`)}),(0,q.jsx)($m,{})]}),(0,q.jsx)($,{children:s(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,q.jsx)(Zg,{$on:v?.previewVideoAutoplay??!1,disabled:!v,onClick:()=>void W({previewVideoAutoplay:!(v?.previewVideoAutoplay??!1)}),type:`button`,children:(0,q.jsx)(Qg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Q,{children:s(`preview_panel_under_the_list`)}),(0,q.jsx)($m,{})]}),(0,q.jsx)($,{children:s(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,q.jsx)(Zg,{$on:rn.showImages??!0,onClick:()=>void W({defaultView:{...rn,showImages:!(rn.showImages??!0)}}),type:`button`,children:(0,q.jsx)(Qg,{})})]}),(0,q.jsx)(Y,{children:(0,q.jsxs)(X,{children:[(0,q.jsxs)(Bg,{children:[(0,q.jsx)(Q,{children:s(`columns`)}),(0,q.jsx)($m,{})]}),(0,q.jsx)($,{children:s(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,q.jsx)(Y,{children:(0,q.jsxs)(k_,{children:[vl.map(e=>(0,q.jsxs)(A_,{children:[(0,q.jsx)(`input`,{checked:(rn.columns??[]).includes(e.id),onChange:()=>void Wn(e.id),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,q.jsxs)(A_,{children:[(0,q.jsx)(`input`,{checked:(rn.columns??[]).includes(`linkTarget`),onChange:()=>void Wn(`linkTarget`),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`link_target_after_the_name`)})]})]})})]}),(0,q.jsxs)(I_,{children:[s(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,q.jsx)($m,{}),` `,s(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,q.jsxs)(Gh,{ref:fn(`shortcuts`),children:[(0,q.jsx)(Hh,{note:`the_keys_this_window_listens_for_click_a_combination_to_record_a_new_one`,title:`shortcuts`}),(0,q.jsxs)(Jh,{children:[yh.map(({id:e,label:t,note:n})=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(t)}),(0,q.jsx)($,{children:s(n)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(j_,{$listening:B===e,onClick:()=>je(e),type:`button`,children:B===e?s(`press_a_key`):Yt(Zn[e])})})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset`)}),(0,q.jsx)($,{children:s(`back_to_the_default_combination_for_every_action`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(M_,{onClick:()=>void W({shortcuts:{...Wt}}),type:`button`,children:s(`reset`)})})]})]})]}),(0,q.jsxs)(Gh,{ref:fn(`memory`),children:[(0,q.jsx)(Hh,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Og,{children:[(0,q.jsxs)(kg,{children:[(0,q.jsx)(Q,{children:s(`process_memory`)}),(0,q.jsx)(Hg,{children:N?`${C(N.private)} · ${mg(N.private,N.available)}`:`—`})]}),(0,q.jsx)(Ag,{children:(0,q.jsx)(jg,{$ratio:N?N.private/Math.max(N.available,1):0,$tone:S(N?N.private/Math.max(N.available,1):0)})}),(0,q.jsx)($,{children:N?s(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:C(N.available),resident:C(N.workingSet)}):s(`reading_the_current_usage`)})]}),(0,q.jsxs)(Og,{children:[(0,q.jsxs)(kg,{children:[(0,q.jsx)(Q,{children:s(`managed_heap`)}),(0,q.jsx)(Hg,{children:N?`${C(N.managed)} · ${mg(N.managed,N.private)}`:`—`})]}),(0,q.jsx)(Ag,{children:(0,q.jsx)(jg,{$ratio:N?N.managed/Math.max(N.private,1):0,$tone:`var(--accent-secondary)`})}),(0,q.jsx)($,{children:s(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,q.jsxs)(Og,{children:[(0,q.jsxs)(kg,{children:[(0,q.jsx)(Q,{children:s(`native_and_runtime`)}),(0,q.jsx)(Hg,{children:N?`${C(Math.max(0,N.private-N.managed))} · ${mg(Math.max(0,N.private-N.managed),N.private)}`:`—`})]}),(0,q.jsx)(Ag,{children:(0,q.jsx)(jg,{$ratio:N?Math.max(0,N.private-N.managed)/Math.max(N.private,1):0,$tone:`var(--accent-primary)`})}),(0,q.jsx)($,{children:s(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`free_memory`)}),(0,q.jsx)($,{children:s(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(M_,{onClick:()=>void ut().then(re),type:`button`,children:s(`trim_now`)})})]})]})]}),(0,q.jsxs)(Gh,{ref:fn(`overview`),children:[(0,q.jsx)(Hh,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`}),(0,q.jsx)(Jh,{children:(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`recent_items`)}),(0,q.jsx)($,{children:s(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)($g,{max:50,min:0,onChange:e=>void $n(Number(e.target.value)),type:`number`,value:v?.recentLimit??10})})]})})]}),(0,q.jsxs)(Gh,{ref:fn(`gallery`),children:[(0,q.jsx)(Hh,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`}),(0,q.jsxs)(Jh,{children:[(v?.galleryRoots??[]).map(e=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:x(e)}),(0,q.jsx)($,{children:e})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(N_,{onClick:()=>void or((v?.galleryRoots??[]).filter(t=>t!==e)),title:s(`stop_scanning_this_folder`),type:`button`,children:(0,q.jsx)(Fi,{size:12})})})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`scan_folders`)}),(0,q.jsx)($,{children:(v?.galleryRoots??[]).length===0?s(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):s(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(M_,{onClick:()=>void sr(),type:`button`,children:s(`choose_folder`)})})]})]})]}),(0,q.jsxs)(Gh,{ref:fn(`icons`),children:[(0,q.jsx)(Hh,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_system_file_icons`)}),(0,q.jsx)($,{children:s(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,q.jsx)(Zg,{$on:v?.systemIcons??!1,disabled:!v,onClick:()=>void W({systemIcons:!v?.systemIcons}),type:`button`,children:(0,q.jsx)(Qg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_custom_folder_icons`)}),(0,q.jsx)($,{children:s(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,q.jsx)(Zg,{$on:v?.customFolderIcons??!1,disabled:!v,onClick:()=>void W({customFolderIcons:!v?.customFolderIcons}),type:`button`,children:(0,q.jsx)(Qg,{})})]})]})]}),(0,q.jsxs)(Gh,{ref:fn(`extension-icons`),children:[(0,q.jsx)(Hh,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`}),(0,q.jsxs)(Jh,{children:[Object.entries(v?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:e}),(0,q.jsx)($,{children:Fh(s,t)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Ih,{source:t}),(0,q.jsx)(N_,{onClick:()=>void Xn(e,null),title:s(`remove_this_rule`),type:`button`,children:(0,q.jsx)(Fi,{size:12})})]})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`add_a_rule`)}),(0,q.jsx)($,{children:s(`extension_and_the_icon_to_draw_for_it`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{onChange:e=>D(e.target.value),placeholder:`.psd`,spellCheck:!1,value:ee}),(0,q.jsxs)(i_,{children:[(0,q.jsx)(N_,{onClick:()=>j(e=>!e),title:s(`choose_the_icon`),type:`button`,children:(0,q.jsx)(Ih,{source:O})}),k&&(0,q.jsx)(ff,{allowDefault:!1,onClose:()=>j(!1),onPick:e=>{te(e??`file`),j(!1)},value:O})]}),(0,q.jsx)(N_,{onClick:()=>void cr(),title:s(`add_the_rule`),type:`button`,children:(0,q.jsx)(Ci,{size:13})})]})]})]})]}),(0,q.jsxs)(Gh,{ref:fn(`folder-icons`),children:[(0,q.jsx)(Hh,{note:`a_single_folder_can_carry_an_icon_of_its_own`,title:`folder_icons`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`give_a_folder_its_own_icon`)}),(0,q.jsx)($,{children:s(`stored_in_the_folder_s_parent_index_so_it_stays_with_the_files`,{index:`.yafm-index.db`})})]}),(0,q.jsxs)(Z,{children:[T&&(0,q.jsx)(Lh,{src:T.icon}),(0,q.jsx)(M_,{disabled:ne,onClick:()=>void lr(),type:`button`,children:s(ne?`choosing`:`choose_folder_and_icon`)})]})]}),T&&(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:x(T.folder)}),(0,q.jsx)($,{children:T.folder})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(F_,{children:[(0,q.jsx)(Pi,{size:11}),` `,s(`saved`)]})})]})]})]}),(0,q.jsxs)(Gh,{ref:fn(`folder-index`),children:[(0,q.jsx)(Hh,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,q.jsx)($,{children:s(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,q.jsx)(Zg,{$on:v?.writeDirectoryIndex??!0,disabled:!v,onClick:()=>void W({writeDirectoryIndex:!v?.writeDirectoryIndex}),type:`button`,children:(0,q.jsx)(Qg,{})})]}),(0,q.jsxs)(Yh,{children:[(0,q.jsxs)(Xh,{children:[(0,q.jsx)(Q,{children:s(`directory_index_blacklist`)}),(0,q.jsx)($,{children:s(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,q.jsx)(v_,{children:(v?.directoryIndexBlacklist??[]).map(e=>(0,q.jsxs)(y_,{children:[(0,q.jsx)(b_,{"aria-label":s(`directory_index_blacklist_rule`),onBlur:xn,onChange:t=>Ye({from:e,value:t.target.value}),onFocus:()=>Ye({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),xn()):e.key===`Escape`&&Ye(null)},spellCheck:!1,value:Je?.from===e?Je.value:e}),(0,q.jsx)(x_,{onClick:()=>wn(e),title:s(`remove`),type:`button`,children:(0,q.jsx)(Fi,{size:10})})]},e))}),(0,q.jsxs)(C_,{children:[(0,q.jsx)(w_,{"aria-label":s(`directory_index_blacklist_rule`),onChange:e=>ct(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Sn())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:ot}),(0,q.jsx)(Kg,{onClick:Sn,type:`button`,children:s(`add_the_rule`)})]}),(0,q.jsxs)(S_,{children:[(0,q.jsx)(Kg,{onClick:Tn,type:`button`,children:s(`restore_defaults`)}),(0,q.jsx)(Kg,{onClick:()=>void Cn(),type:`button`,children:s(`add_folder_2`)})]})]})]}),!(v?.writeDirectoryIndex??!0)&&(0,q.jsx)(L_,{children:Ph(s,e?.platform)})]}),(0,q.jsxs)(Gh,{ref:fn(`indexing`),children:[(0,q.jsx)(Hh,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,q.jsx)(Nh,{})]}),(0,q.jsxs)(Gh,{ref:fn(`files`),children:[(0,q.jsx)(Hh,{note:`what_the_listings_include`,title:`files`}),(0,q.jsxs)(Jh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`show_hidden_files`)}),(0,q.jsxs)($,{children:[s(`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`),u?.overridden&&(0,q.jsx)(Ug,{disabled:m,onClick:()=>void Kn(null),type:`button`,children:s(`follow_system`)})]})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Xg,{$on:u?.showHidden??!1,children:u?.overridden?Mh(s,u.showHidden):s(`follow_system`)}),(0,q.jsx)(Zg,{$on:u?.showHidden??!1,disabled:!u||m,onClick:()=>void Kn(!(u?.showHidden??!1)),title:s(`show_hidden_files`),type:`button`,children:(0,q.jsx)(Qg,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`protected_operating_system_files`)}),(0,q.jsx)(Hg,{children:Mh(s,u?.showSystem)})]})]}),(0,q.jsx)(I_,{children:s(`hidden_items_follow_this_app_s_switch_protected_operating_system_files_still_follow_windows`)})]})]}),(0,q.jsxs)(lg,{"aria-label":s(`settings_sections`),onWheel:mn,children:[(0,q.jsx)(ug,{children:s(`sections`)}),(0,q.jsx)(dg,{children:Eh.map(({id:e,label:t})=>(0,q.jsxs)(fg,{$active:Pt===e,onClick:()=>pn(e),type:`button`,children:[(0,q.jsx)(qh,{children:Dh[t]}),(0,q.jsx)(`span`,{children:s(t)})]},e))}),(0,q.jsx)(pg,{children:s(`changes_are_saved_as_you_make_them`)})]}),kt&&(0,Za.createPortal)((0,q.jsx)(_g,{children:(0,q.jsxs)(vg,{"aria-modal":`true`,role:`dialog`,children:[(0,q.jsxs)(yg,{children:[(0,q.jsx)(`h2`,{children:s(`software_update`)}),(0,q.jsx)(`p`,{children:Ct?.latest?s(`version_version`,{version:Ct.latest}):s(`preparing_the_update`)})]}),(0,q.jsx)(bg,{children:s(`changelog`)}),kt.changelog?(0,q.jsx)(xg,{onClick:Cg,children:(0,q.jsx)(a,{source:kt.changelog})}):(0,q.jsx)(Sg,{children:kt.phase===`changelog`?s(`loading_the_changelog`):s(`the_changelog_could_not_be_loaded`)}),(0,q.jsxs)(wg,{children:[(0,q.jsx)(`span`,{children:hg(kt,s)}),(0,q.jsx)(`span`,{children:gg(kt)})]}),(0,q.jsx)(Tg,{children:(0,q.jsx)(Eg,{$percent:Math.max(0,Math.min(100,kt.percent))})}),kt.error&&(0,q.jsx)(Vg,{children:kt.error}),(0,q.jsxs)(Dg,{children:[(kt.phase===`changelog`||kt.phase===`downloading`)&&(0,q.jsx)(M_,{onClick:()=>void Fn(),type:`button`,children:s(`cancel`)}),kt.phase===`ready`&&(0,q.jsx)(M_,{onClick:()=>void In(),type:`button`,children:s(`install_update`)}),kt.phase===`installing`&&(0,q.jsx)(M_,{disabled:!0,type:`button`,children:s(`installing`)}),(kt.phase===`ready`||kt.phase===`error`||kt.phase===`cancelled`||kt.phase===`installing`)&&(0,q.jsx)(M_,{onClick:()=>At(null),type:`button`,children:s(`close`)})]})]})}),document.body)]})}function jh({approvalMinutes:e,denialSeconds:t}){let n=o(),[r,i]=(0,R.useState)([]),[a,s]=(0,R.useState)(!1);(0,R.useEffect)(()=>{let e=()=>void $c().then(i,()=>i([]));if(e(),l.available)return l.on(t=>{t.type===`share.devices.changed`&&e()})},[]);let c=async(e,t,n)=>{s(!0);try{i(await el(e,t,n))}finally{s(!1)}},u=async e=>{s(!0);try{i(await tl(e))}finally{s(!1)}},d=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.state===`denied`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`):n(`share_access_not_decided`),f=e=>e.expiresAt===0?n(`share_access_forever`):new Date(e.expiresAt).toLocaleString();return(0,q.jsxs)(Mg,{children:[r.length===0&&(0,q.jsx)(Ng,{children:n(`share_access_no_devices`)}),r.map(r=>(0,q.jsxs)(Pg,{children:[(0,q.jsxs)(Fg,{children:[(0,q.jsx)(Ig,{children:r.name||n(`share_access_not_decided`)}),(0,q.jsxs)(Lg,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,q.jsxs)(Lg,{children:[d(r),r.state!==``&&(0,q.jsxs)(q.Fragment,{children:[` · `,n(`share_access_expires`),`: `,f(r)]})]})]}),(0,q.jsx)(Ao,{disabled:a,onChange:e=>{let[t,n]=e.split(`:`);t===`remove`?u(r.id):t!==`none`&&c(r.id,t,n===`forever`)},options:[{value:`none:`,label:n(`share_access_not_decided`)},{value:`allowed:timed`,label:`${n(`share_access_allowed`)} (${e}m)`},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:`${n(`share_access_denied`)} (${t}s)`},{value:`denied:forever`,label:n(`share_access_block_forever`)},{value:`remove:`,label:n(`remove`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.state===`denied`?r.expiresAt===0?`denied:forever`:`denied:timed`:`none:`,width:190})]},r.id))]})}function Mh(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function Nh(){let e=o(),[t,n]=(0,R.useState)(null);return(0,R.useEffect)(()=>{let e=!0,t=()=>Je().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,q.jsx)(L_,{children:e(`no_indexing_tasks_are_running`)}):(0,q.jsxs)(Jh,{children:[(0,q.jsx)(Y,{children:(0,q.jsx)(Q,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,q.jsx)(Y,{children:(0,q.jsx)(Hg,{title:e,children:e})},e))]}):(0,q.jsx)(L_,{children:e(`index_task_information_is_unavailable`)})}function Ph(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function Fh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function Ih({source:e}){let t=G(e.startsWith(`file:`)?e.slice(5):null);return(0,q.jsx)(P_,{children:t?(0,q.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,q.jsx)(cc,{name:e,size:16})})}function Lh({src:e}){let t=G(e);return(0,q.jsx)(P_,{children:t&&(0,q.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Rh({path:e,active:t,onSelect:n,onRemove:r}){let i=o(),a=A(e),s=yn(a?null:e),c=a?e:s,l=gd(e.split(/[?#]/)[0]);return(0,q.jsxs)(p_,{children:[(0,q.jsxs)(f_,{$active:t,onClick:n,title:e,type:`button`,children:[c&&(l?(0,q.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${c}#t=0.5`}):(0,q.jsx)(`img`,{alt:``,src:c})),l&&(0,q.jsx)(h_,{children:(0,q.jsx)(Hi,{size:11})})]}),(0,q.jsx)(m_,{onClick:r,title:i(`remove`),type:`button`,children:(0,q.jsx)(Fi,{size:9})})]})}function zh({value:e,options:t,onChange:n,disabled:r}){let i=o(),[a,s]=(0,R.useState)(null),c=(0,R.useRef)(null);return(0,R.useEffect)(()=>{if(!a)return;let e=()=>s(null),t=t=>{let n=t.target;n instanceof Node&&c.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(e_,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){s(null);return}let e=c.current?.getBoundingClientRect();e&&s({left:e.left,top:e.bottom+4,width:e.width})},ref:c,type:`button`,children:[(0,q.jsx)(`span`,{children:Bh(i,e)}),(0,q.jsx)(t_,{children:(0,q.jsx)(Ei,{size:11})})]}),a&&(0,Za.createPortal)((0,q.jsx)(n_,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,q.jsxs)(r_,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),s(null)},role:`option`,type:`button`,children:[(0,q.jsx)(`span`,{children:Bh(i,t)}),t===e&&(0,q.jsx)(Pi,{size:11})]},t))}),document.body)]})}function Bh(e,t){return t===wh?e(`system_default`):Th[t]??t}function Vh({colors:e,current:t,onApply:n}){let r=o();if(e.length===0)return null;let[i,...a]=e;return(0,q.jsxs)(og,{children:[(0,q.jsxs)(cg,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,q.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,q.jsx)(sg,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,q.jsx)(Pi,{size:9})},e))]})}function Hh({title:e,note:t,global:n=!1}){let r=o();return(0,q.jsxs)(Kh,{children:[(0,q.jsxs)(`h2`,{children:[(0,q.jsx)(qh,{children:Dh[e]}),r(e),n&&(0,q.jsx)($m,{})]}),(0,q.jsx)(`p`,{children:r(t)})]})}var Uh=v.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Wh=v.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Gh=v.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Kh=v.header`
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
        padding-left: 32px;
        font-size: 10.5px;
        color: var(--text-muted);
    }
`,qh=v.i`
    display: grid;
    place-items: center;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: var(--accent-primary);
    opacity: 0.85;
`,Jh=v.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Yh=v.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Xh=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Zh=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Qh=v.button`
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
`,$h=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,eg=v.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,tg=v.button`
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
`,ng=v.button`
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
`,rg=v.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,ig=v.input`
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
`,ag=v.span`
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
`,og=v.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,sg=v.button`
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
`,cg=v.button`
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
`,lg=v.nav`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    flex-shrink: 0;
    width: 172px;
    min-height: 0;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
    scrollbar-width: thin;
`,ug=v.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,dg=v.div`
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
`,fg=v.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 7px;
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
`,pg=v.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function mg(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function hg(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function gg(e){return e.total>0?`${C(e.downloaded)} / ${C(e.total)}`:e.downloaded>0?C(e.downloaded):``}var _g=v.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,vg=v.div`
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
`,yg=v.div`
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
`,bg=v.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,xg=v.div`
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
`,Sg=v.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function Cg(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),I(t.href))}var wg=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,Tg=v.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,Eg=v.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,Dg=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Og=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,kg=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Ag=v.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,jg=v.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Mg=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,Ng=v.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,Pg=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Fg=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Ig=v.span`
    color: var(--text-primary);
    font-size: 12px;
`,Lg=v.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,Rg=v.input`
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
`,zg=v.input`
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
`,Bg=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=v.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,Vg=v.span`
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
`,Hg=v.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Ug=v.button`
    margin-left: 6px;
    padding: 0;
    border: 0;
    background: none;
    color: var(--accent-primary);
    font: inherit;
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`,Wg=v.input`
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
`,Gg=v.input`
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
`,Kg=v.button`
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
`,qg=v.input`
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
`,Jg=v.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Yg=v.button`
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
`,Xg=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Zg=v.button`
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
`,Qg=v.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,$g=v.input`
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
`,e_=v.button`
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
`,t_=v.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,n_=v.div`
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
`,r_=v.button`
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
`,i_=v.span`
    position: relative;
    display: inline-flex;
`,a_=v.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,o_=v.button`
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
`,s_=v.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,c_=v.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,l_=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,u_=v.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,d_=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,f_=v.button`
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
`,p_=v.div`
    position: relative;
    width: 102px;
    height: 58px;
`,m_=v.button`
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
`,h_=v.span`
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
`,g_=v.button`
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
`,__=v.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,v_=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,y_=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,b_=v.input`
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
`,x_=v.button`
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
`,S_=v.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,C_=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,w_=v.input`
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
`,T_=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,E_=v.button`
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
`,D_=v.input`
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
`,O_=v.div`
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
`,k_=v.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,A_=v.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,j_=v.button`
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
`,M_=v.button`
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
`,N_=v.button`
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
`,P_=v.span`
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
`,F_=v.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,I_=v.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,L_=v.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,R_=150,z_=2500,B_=3,V_=600;function H_({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:s,onSearchMatches:c,onPick:l,onSelectionChange:u,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,onPreviewChange:g,platform:_}){let v=o(),y=pl(`gallery`),[b,x]=(0,R.useState)([]),[S,w]=(0,R.useState)(0),[T,E]=(0,R.useState)(!0),[ee,D]=(0,R.useState)(null),[O,te]=(0,R.useState)(!1),[k,A]=(0,R.useState)([]),j=(0,R.useRef)([]),ne=(0,R.useRef)(0),M=(0,R.useRef)(!1),N=(0,R.useRef)(!0),re=(0,R.useRef)(0),ae=(0,R.useRef)(null),oe=(0,R.useRef)(0),F=(0,R.useCallback)(async e=>{let t=++re.current;E(!0),N.current=!0,D(null);try{let n=await ze(0,R_,e);if(t!==re.current)return;j.current=n.entries,ne.current=n.total,x(n.entries),w(n.total)}catch(e){t===re.current&&D(e instanceof Error?e.message:String(e))}finally{t===re.current&&(N.current=!1,E(!1))}},[]);(0,R.useEffect)(()=>{F(!1)},[F]);let se=(0,R.useCallback)(async()=>{if(N.current||M.current||j.current.length>=ne.current)return;let e=re.current;M.current=!0;try{let t=j.current,n=ne.current;for(let r=0;r<B_&&t.length<n;r++){let r=await ze(t.length,R_,!1);if(e!==re.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<R_)break}if(e!==re.current)return;j.current=t,ne.current=n,(0,R.startTransition)(()=>{x(t),w(n)})}catch{}finally{M.current=!1}},[]),I=(0,R.useCallback)(e=>{oe.current||=window.requestAnimationFrame(()=>{oe.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<z_&&se()})},[se]);(0,R.useEffect)(()=>{let e=ae.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&se()},{root:e.parentElement,rootMargin:`${z_}px 0px`});return t.observe(e),()=>t.disconnect()},[se]),(0,R.useEffect)(()=>{if(b.length>=S)return;let e=window.setTimeout(()=>{let e=ae.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<z_&&se()},200);return()=>window.clearTimeout(e)},[b.length,S,se]);let ce=(0,R.useMemo)(()=>({path:``,parent:null,entries:b.map(U_),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[b]),le=(0,R.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),ue=(0,R.useCallback)(e=>{l?l(e):Ce(e)},[l]),de=(0,R.useCallback)(e=>{let t=W_(e.modified);return{id:t,label:t}},[]),fe=()=>{te(!0),F(!0).finally(()=>te(!1))},pe=b.length<S,me=(0,R.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:b.filter(e=>An(e.name,a)||An(e.path,a)),[b,a?.open,a?.query,a?.matchCase,a?.regex]),he=(0,R.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:me[Math.min(a.index,Math.max(0,me.length-1))]?.path??null}:Sn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,me]);(0,R.useEffect)(()=>{c?.(me.length)},[me.length,c]);let ge=(0,R.useCallback)(e=>{A(e),u?.(e)},[u]),L=k.length>0?b.find(e=>e.path===k[0])??null:null,_e=L?.name.includes(`.`)?L.name.slice(L.name.lastIndexOf(`.`)+1).toUpperCase():`—`,ve=L&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(L.name)?v(`video_2`):v(`picture`),ye=L?L.path.slice(0,Math.max(L.path.lastIndexOf(`\\`),L.path.lastIndexOf(`/`))):``,be=L?{name:L.name,path:L.path,isDirectory:!1,size:L.size,modified:L.modified,fields:[{label:v(`type`),value:ve},{label:v(`extension`),value:_e},{label:v(`location`),value:ye},{label:v(`full_path`),value:L.path},{label:v(`size`),value:C(L.size)},{label:v(`modified`),value:P(L.modified)},{label:v(`created`),value:`—`}]}:null,z=k.length>1?ie(v,k.length,`k_1_item_selected`,`count_items_selected`):void 0,xe=(0,R.useRef)(``);return(0,R.useEffect)(()=>{let e=`${be?.path??``}|${be?.modified??0}|${z??``}`;xe.current!==e&&(xe.current=e,g?.(be,z))},[be,z,g]),(0,q.jsxs)(G_,{children:[(0,q.jsxs)(J_,{children:[(0,q.jsxs)(X_,{children:[(0,q.jsx)(`span`,{children:v(`gallery`)}),(0,q.jsx)(Z_,{children:T?v(`scanning`):v(`shown_of_total_pictures`,{shown:b.length,total:S})})]}),(0,q.jsxs)(Y_,{children:[(0,q.jsx)(Q_,{onClick:fe,title:v(`scan_the_folders_again`),type:`button`,children:(0,q.jsx)($_,{$spinning:O,children:(0,q.jsx)(Si,{size:14})})}),y.available&&(0,q.jsx)(Q_,{onClick:e=>y.open(e.clientX,e.clientY),title:v(`selection_menu`),type:`button`,children:(0,q.jsx)(Da,{size:14})})]})]}),ee&&(0,q.jsx)(tv,{children:ee}),!ee&&!T&&S===0&&(0,q.jsx)(tv,{children:v(`no_pictures_found`)}),!ee&&(T||S>0)&&(0,q.jsx)(K_,{children:(0,q.jsx)(q_,{children:(0,q.jsx)(Dl,{platform:_,confirmDelete:n,find:he,selectMatchesToken:s,listing:T&&b.length===0?null:ce,loading:T,error:null,view:le,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:ge,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:ue,onOpenFile:ue,onRefresh:fe,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,groupOf:de,onGridScroll:I,gridFooter:(0,q.jsx)(ev,{$space:pe?V_:1,ref:ae}),allowBackgroundMenu:!1})})})]})}function U_(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function W_(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(j(),{weekday:`long`}):t.toLocaleDateString(j(),{year:`numeric`,month:`long`,day:`numeric`})}var G_=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,K_=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,q_=v.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,J_=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,Y_=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,X_=v.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Z_=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Q_=v.button`
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
`,$_=v.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,ev=v.div`
    height: ${({$space:e})=>e}px;
`,tv=v.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function nv({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:s=``,version:c=0,historyVersion:u=0,hiddenViews:d=[],onNavigate:f,onOpenView:p}){let[m,h]=(0,R.useState)([]),g=o(),[_,v]=(0,R.useState)(null),y=Rn();(0,R.useEffect)(()=>{Xe().then(e=>{v(e),h(Hs(e).filter(e=>e.pinned))},()=>{v(null),h([])})},[c]),(0,R.useEffect)(()=>{if(!l.available)return;let e=m.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[m,s]);let b=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>F(e.path,t));return{name:_?.placeNames?.[t]??n?.name??(x(t)||t),path:t,kind:`folder`,icon:n?.icon??_?.placeIcons?.[t]??null}}),w=a===`files`;return(0,q.jsxs)(cv,{children:[(0,q.jsxs)(lv,{children:[!d.includes(`home`)&&(0,q.jsxs)(mv,{$active:a===`home`,onClick:e=>p(`home`,qt(e)),title:g(`overview`),type:`button`,children:[(0,q.jsx)($i,{}),(0,q.jsx)(gv,{children:g(`overview`)})]}),!d.includes(`recycle`)&&(0,q.jsxs)(mv,{$active:a===`recycle`,onClick:e=>p(`recycle`,qt(e)),title:g(`recycle_bin`),type:`button`,children:[(0,q.jsx)(Ni,{}),(0,q.jsx)(gv,{children:g(`recycle_bin`)})]}),!d.includes(`gallery`)&&(0,q.jsxs)(mv,{$active:a===`gallery`,onClick:e=>p(`gallery`,qt(e)),title:g(`gallery`),type:`button`,children:[(0,q.jsx)(Vi,{}),(0,q.jsx)(gv,{children:g(`gallery`)})]})]}),m.map(e=>(0,q.jsxs)(dv,{children:[(0,q.jsxs)(mv,{as:`div`,$active:!1,children:[(0,q.jsx)(hv,{children:(0,q.jsx)(Ws,{panel:e,size:16})}),(0,q.jsx)(gv,{children:g(e.title)})]}),(0,q.jsx)(fv,{children:(0,q.jsxs)(pv,{children:[e.kind===`quick`&&b(e).map(e=>(0,q.jsxs)(mv,{$active:w&&F(i,e.path),onClick:t=>f(e.path,qt(t)),title:e.path,type:`button`,children:[(0,q.jsx)(Gs,{place:e}),(0,q.jsx)(gv,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=zn(y,e.path);return(0,q.jsxs)(mv,{$active:w&&F(i,e.path),onClick:t=>e.isDirectory?f(e.path,qt(t)):void Ce(e.path),title:e.path,type:`button`,children:[t&&y.useIcons?(0,q.jsx)(Gs,{place:t}):(0,q.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,q.jsx)(gv,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,q.jsx)(av,{historyVersion:u,onNavigate:f}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,q.jsxs)(mv,{$active:w&&F(i,e.name),onClick:t=>f(e.name,qt(t)),title:e.name,type:`button`,children:[(0,q.jsx)(yi,{}),(0,q.jsxs)(gv,{children:[re(e),(0,q.jsxs)(_v,{children:[C(e.freeSpace),` free`]}),(0,q.jsx)(vv,{children:(0,q.jsx)(yv,{$used:t,$tone:S(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,q.jsx)(ov,{onNavigate:f,path:e.path||s})]})})]},e.id)),!d.includes(`settings`)&&(0,q.jsx)(uv,{children:(0,q.jsxs)(mv,{$active:a===`settings`,onClick:e=>p(`settings`,qt(e)),title:g(`settings`),type:`button`,children:[(0,q.jsx)(Di,{}),(0,q.jsx)(gv,{children:g(`settings`)})]})})]})}var rv=10,iv=40;function av({historyVersion:e=0,onNavigate:t}){let n=o(),[r,i]=(0,R.useState)(null),a=Rn();return(0,R.useEffect)(()=>{Ve().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=zn(a,e.path);return(0,q.jsxs)(mv,{$active:!1,onClick:n=>t(e.path,qt(n)),title:ie(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,q.jsx)(Gs,{place:r}):(0,q.jsx)(lc,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,q.jsx)(gv,{children:r?.name||e.name})]},e.path)})}function ov({path:e,onNavigate:t}){let[n,r]=(0,R.useState)(null);(0,R.useEffect)(()=>{e&&(r(null),we(e,!1).then(r,()=>r(null)))},[e]),(0,R.useEffect)(()=>{if(e&&l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&F(n.data.path,e)&&we(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,rv),o=i.filter(e=>!e.isDirectory).slice(0,iv);return(0,q.jsxs)(q.Fragment,{children:[a.map(e=>(0,q.jsx)(sv,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,q.jsx)(sv,{entry:e,onNavigate:t},e.fullPath))]})}function sv({entry:e,onNavigate:t}){let n=Rn(),r=zn(n,e.fullPath);return(0,q.jsxs)(mv,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,qt(n)):void Ce(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,q.jsx)(Gs,{place:r}):(0,q.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,q.jsx)(gv,{children:r?.name||e.name})]})}var cv=v.aside`
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

    &:not(:hover) ${()=>_v},
    &:not(:hover) ${()=>vv} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,lv=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,uv=v(lv)`
    margin-top: auto;
`,dv=v.div`
    display: flex;
    flex-direction: column;
`,fv=v.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${cv}:hover ${dv}:hover > & {
        grid-template-rows: 1fr;
    }
`,pv=v.div`
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
`,mv=v.button`
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
`,hv=v.span`
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
`,gv=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_v=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,vv=v.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,yv=v.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,bv=v.span`
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
`;function xv({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=o(),a=(0,R.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,R.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,q.jsxs)(Cv,{ref:a,children:[(0,q.jsxs)(wv,{$active:n,onClick:()=>r(!n),title:s>0?ie(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,q.jsx)(Mi,{size:13}),c>0&&(0,q.jsx)(bv,{children:c>9?`9+`:c})]}),n&&(0,q.jsxs)(Tv,{children:[(0,q.jsxs)(Ev,{children:[(0,q.jsxs)(Dv,{children:[(0,q.jsx)(Mi,{size:12}),i(`status_center`)]}),(0,q.jsxs)(Ov,{children:[(0,q.jsx)(kv,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,q.jsx)(Av,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,q.jsx)(Fi,{size:10})})]})]}),e.length===0?(0,q.jsx)(Mv,{children:i(`no_operations_yet`)}):(0,q.jsx)(jv,{children:e.map(e=>(0,q.jsx)(Sv,{task:e},e.id))})]})]})}function Sv({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,q.jsxs)(Nv,{children:[(0,q.jsxs)(Pv,{children:[(0,q.jsx)(Fv,{$state:e.state,children:e.state===`done`?(0,q.jsx)(Pi,{size:10}):e.state===`failed`?(0,q.jsx)(Fi,{size:10}):(0,q.jsx)(Iv,{})}),(0,q.jsx)(Lv,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,q.jsxs)(Rv,{children:[C(e.bytesDone),` / `,C(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,q.jsxs)(Rv,{children:[e.done,` / `,e.total]})]}),i&&(0,q.jsx)(zv,{children:(0,q.jsx)(Bv,{$percent:r,$indeterminate:t===0})}),e.error&&(0,q.jsx)(Vv,{children:e.error})]})}var Cv=v.div`
    position: relative;
    display: flex;
`,wv=v.button`
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
`,Tv=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Qa}
    ${fo}
`,Ev=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Dv=v.span`
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
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Ov=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,kv=v.button`
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
`,Av=v.button`
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
`,jv=v.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Mv=v.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Nv=v.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${po}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,Pv=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Fv=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Iv=v.span`
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
`,Lv=v.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Rv=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,zv=v.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Bv=v.div`
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
`,Vv=v.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function Hv(){return l.available?(await l.request(`fs.history.list`)).entries:[]}async function Uv(e){return l.available?(await l.request(`fs.history.undoTo`,{id:e})).ok:!1}function Wv(){let e=o(),[t,n]=(0,R.useState)(!1),[r,i]=(0,R.useState)([]),[a,s]=(0,R.useState)(!1),c=(0,R.useRef)(null),l=()=>void Hv().then(i,()=>i([]));(0,R.useEffect)(()=>{if(!t)return;l();let e=window.setInterval(l,1e3),r=e=>{c.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let u=async e=>{s(!0);try{await Uv(e),l()}finally{s(!1)}};return(0,q.jsxs)(qv,{ref:c,children:[(0,q.jsx)(Jv,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,q.jsx)(ji,{size:14})}),t&&(0,q.jsxs)(Yv,{children:[(0,q.jsxs)(Xv,{children:[(0,q.jsxs)(Zv,{children:[(0,q.jsx)(ji,{size:12}),e(`history`)]}),(0,q.jsx)(Qv,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,q.jsx)(Fi,{size:10})})]}),r.length===0?(0,q.jsx)(sy,{children:e(`no_operations_yet`)}):(0,q.jsx)($v,{children:r.map(t=>(0,q.jsxs)(ey,{children:[(0,q.jsxs)(ty,{children:[(0,q.jsxs)(ny,{children:[(0,q.jsx)(Kv,{label:t.label}),Gv(e,t.label)]}),(0,q.jsx)(ry,{children:k(t.at)})]}),t.paths.length>0&&(0,q.jsxs)(iy,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,q.jsx)(ay,{children:(0,q.jsx)(oy,{disabled:!t.applied||!t.restorable||a,onClick:()=>void u(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function Gv(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Kv({label:e}){return e.startsWith(`delete`)?(0,q.jsx)(Ni,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,q.jsx)(ba,{size:13}):e.startsWith(`rename`)?(0,q.jsx)(ea,{size:13}):e.startsWith(`compress`)?(0,q.jsx)(Wi,{size:13}):e.startsWith(`new`)?(0,q.jsx)(Ci,{size:13}):(0,q.jsx)(Ti,{size:13})}var qv=v.div`
    position: relative;
    display: flex;
`,Jv=v.button`
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
`,Yv=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Qa}
    ${fo}
`,Xv=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Zv=v.span`
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
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Qv=v.button`
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
`,$v=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,ey=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,ty=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,ny=v.span`
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
`,ry=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,iy=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ay=v.div`
    display: flex;
    justify-content: flex-end;
`,oy=v.button`
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
`,sy=v.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function cy({currentFolder:e}){let t=o(),[n,r]=(0,R.useState)(!1),[i,a]=(0,R.useState)(null),[s,c]=(0,R.useState)(!1),l=(0,R.useRef)(null);(0,R.useEffect)(()=>{if(!n)return;let e=()=>void Lc().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{l.current?.contains(e.target)||r(!1)},o=()=>r(!1);return window.addEventListener(`pointerdown`,i),window.addEventListener(`blur`,o),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`blur`,o)}},[n]),(0,R.useEffect)(()=>{let e=()=>void Lc().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{a(await e())}finally{c(!1)}},d=i?.shares.some(t=>F(t.path,e))??!1;return(0,q.jsxs)(ly,{ref:l,children:[(0,q.jsxs)(uy,{$active:n,onClick:()=>r(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,q.jsx)(ma,{size:15}),i&&i.shares.length>0&&(0,q.jsx)(bv,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,q.jsxs)(dy,{children:[(0,q.jsxs)(fy,{children:[(0,q.jsxs)(py,{children:[(0,q.jsx)(Ca,{size:12}),t(`share`)]}),(0,q.jsx)(my,{onClick:()=>r(!1),title:t(`close`),type:`button`,children:(0,q.jsx)(Fi,{size:10})})]}),(0,q.jsxs)(hy,{children:[(0,q.jsxs)(gy,{children:[(0,q.jsx)(Ri,{size:15}),(0,q.jsxs)(`span`,{children:[(0,q.jsx)(`strong`,{children:i?.deviceName||t(`this_device`)}),(0,q.jsx)(_y,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,q.jsx)(vy,{children:t(`no_folders_are_shared_yet`)}),i?.shares.map(e=>(0,q.jsxs)(yy,{children:[(0,q.jsxs)(by,{children:[(0,q.jsx)(xy,{title:e.path,children:e.name}),(0,q.jsx)(Cy,{disabled:s,onClick:()=>void u(()=>zc(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,q.jsx)(Fi,{size:10})})]}),(0,q.jsx)(Sy,{title:e.path,children:e.path}),(0,q.jsxs)(wy,{children:[(0,q.jsxs)(Ty,{$active:e.mode===`client`,onClick:()=>void u(()=>Bc(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,q.jsx)(Ri,{size:11}),t(`app`)]}),(0,q.jsxs)(Ty,{$active:e.mode===`web`,onClick:()=>void u(()=>Bc(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,q.jsx)(ga,{size:11}),t(`web`)]})]})]},e.id)),(0,q.jsxs)(Ey,{disabled:s||e.length===0||d,onClick:()=>void u(()=>Rc(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,q.jsx)(Ci,{size:12}),t(`share_this_folder`)]}),i?.webRunning&&(0,q.jsxs)(Dy,{children:[(0,q.jsxs)(Oy,{children:[(0,q.jsx)(ga,{size:12}),t(`browser_access`)]}),i.urls.map(e=>(0,q.jsx)(ky,{onClick:()=>void I(e),type:`button`,children:e},e)),(0,q.jsx)(_y,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var ly=v.div`
    position: relative;
    display: flex;
`,uy=v.button`
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
`,dy=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Qa}
    ${fo}
`,fy=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,py=v.span`
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
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,my=v.button`
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
`,hy=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,gy=v.div`
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
`,_y=v.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,vy=v.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,yy=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,by=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,xy=v.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Sy=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cy=v.button`
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
`,wy=v.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,Ty=v.button`
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
`,Ey=v.button`
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
`,Dy=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,Oy=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,ky=v.button`
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
`;function Ay({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let s=o(),[c,l]=(0,R.useState)(!1),u=(0,R.useRef)(null);(0,R.useEffect)(()=>{if(!c)return;let e=()=>l(!1),t=e=>{u.current?.contains(e.target)||l(!1)},n=e=>{e.key===`Escape`&&l(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[c]),(0,R.useEffect)(()=>{a&&l(!1)},[a]);let d=e.columns,f=e=>{let t=new Set(d);t.has(e)?t.delete(e):t.add(e);let r=vl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,q.jsxs)(jy,{ref:u,children:[(0,q.jsx)(My,{$active:c,disabled:a,onClick:()=>l(e=>!e),title:s(`view`),type:`button`,children:e.mode===`grid`?(0,q.jsx)(Ai,{size:14}):(0,q.jsx)(ki,{size:14})}),c&&(0,q.jsxs)(Ny,{children:[(0,q.jsxs)(Py,{children:[(0,q.jsx)(Ea,{size:11}),s(`view`)]}),(0,q.jsxs)(Iy,{children:[(0,q.jsxs)(Ly,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,q.jsx)(ki,{size:12}),` `,s(`list`)]}),(0,q.jsxs)(Ly,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,q.jsx)(Ai,{size:12}),` `,s(`grid`)]})]}),(0,q.jsxs)(Py,{children:[(0,q.jsx)(ki,{size:11}),s(`list_icon_size`)]}),(0,q.jsxs)(Ry,{children:[(0,q.jsx)(`input`,{"aria-label":s(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,q.jsxs)(zy,{children:[e.iconSize,`px`]})]}),(0,q.jsxs)(Py,{children:[(0,q.jsx)(Ai,{size:11}),s(`grid_size`)]}),(0,q.jsxs)(Ry,{children:[(0,q.jsx)(`input`,{"aria-label":s(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,q.jsxs)(zy,{children:[e.gridSize,`px`]})]}),(0,q.jsxs)(Py,{children:[(0,q.jsx)(Ta,{size:11}),s(`columns`),(0,q.jsx)($m,{}),(0,q.jsx)(Fy,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:s(`reset_column_widths`),type:`button`,children:s(`reset_widths`)})]}),vl.map(e=>(0,q.jsxs)(By,{children:[(0,q.jsx)(`input`,{checked:d.includes(e.id),onChange:()=>f(e.id),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,q.jsxs)(By,{children:[(0,q.jsx)(`input`,{checked:d.includes(`linkTarget`),onChange:()=>f(`linkTarget`),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`link_target_after_the_name`)})]}),(0,q.jsxs)(Py,{children:[(0,q.jsx)(Ii,{size:11}),s(`preview_panel`),(0,q.jsx)($m,{})]}),(0,q.jsxs)(By,{children:[(0,q.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`preview_under_the_list`)})]})]})]})}var jy=v.div`
    position: relative;
    display: flex;
    height: 100%;
`,My=v.button`
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
`,Ny=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Qa}
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
`,Py=v.div`
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

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }

    &:first-child {
        margin-top: 2px;
    }
`,Fy=v.button`
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
`,Iy=v.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Ly=v.button`
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
`,Ry=v.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,zy=v.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,By=v.label`
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
`,Vy=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Hy=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Uy=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Wy=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,q.jsx)(`path`,{d:`M2 5h6`})}),Gy=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,q.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Ky=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,q.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,q.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function qy({tabs:e,activeId:n,onSelect:r,onClose:i,onNewTab:a,onReorder:s,onTransferToTab:c,view:l,onViewChange:d,onColumns:f,showImages:p,onShowImages:m,tasks:h,onClearTasks:g,activityOpen:_,onActivityOpenChange:v,trayCount:y,trayVisible:b,onToggleTray:x,split:S,canSplit:C,onToggleSplit:w,details:T,canDetails:E,onToggleDetails:ee,shortcuts:D,currentFolder:O}){let te=o(),k=t(),A=u(),[j,ne]=(0,R.useState)({left:!1,right:!1}),[M,N]=(0,R.useState)(null),[re,P]=(0,R.useState)(null),ie=(0,R.useRef)(null),ae=(0,R.useRef)(null),oe=(0,R.useRef)(null),F=(0,R.useCallback)(()=>{let e=ae.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ne(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,R.useEffect)(()=>{F();let e=ae.current;if(!e)return;let t=new ResizeObserver(F);return t.observe(e),()=>t.disconnect()},[F,e.length]),(0,R.useEffect)(()=>()=>{ie.current&&window.clearTimeout(ie.current.timer)},[]),(0,R.useEffect)(()=>{oe.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[n]);let se=e=>ae.current?.scrollBy({left:e,behavior:`smooth`}),I=()=>{ie.current&&window.clearTimeout(ie.current.timer),ie.current=null,P(null)};return(0,q.jsxs)(Zy,{children:[(0,q.jsx)(Qy,{children:(0,q.jsx)(Ri,{size:19})}),(0,q.jsxs)($y,{children:[j.left&&(0,q.jsx)(tb,{onClick:()=>se(-180),title:te(`scroll_tabs_left`),type:`button`,children:(0,q.jsx)(Vy,{})}),(0,q.jsx)(eb,{onScroll:F,onWheel:e=>{let t=ae.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:ae,children:e.map(e=>(0,q.jsxs)(nb,{$active:e.id===n,$dragging:M===e.id,$dropTarget:re===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!fc(t.dataTransfer)||!Jy(e)||(t.preventDefault(),ie.current?.id===e.id))return;I(),P(e.id);let n=window.setTimeout(()=>{r(e.id),ie.current=null},500);ie.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ie.current?.id===e.id||re===e.id)&&I()},onDragEnd:()=>{N(null),I()},onDragOver:t=>{(M||fc(t.dataTransfer)&&Jy(e))&&(t.preventDefault(),fc(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>N(e.id),onDrop:t=>{if(t.preventDefault(),M)s(M,e.id);else if(Jy(e)&&fc(t.dataTransfer)){let{paths:n,move:i}=pc(t);n.length>0&&(r(e.id),c(n,e.path,!t.ctrlKey&&i))}N(null),I()},onClick:()=>r(e.id),ref:e.id===n?oe:void 0,title:e.path||e.title,type:`button`,children:[(0,q.jsx)(Yy,{tab:e}),(0,q.jsx)(rb,{children:e.title}),e.partner&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(ib,{children:`|`}),(0,q.jsx)(Xy,{place:e.partner.place}),(0,q.jsx)(rb,{children:e.partner.title})]}),(0,q.jsx)(ab,{"data-shortcut":Yt(D.closeTab),onClick:t=>{t.stopPropagation(),i(e.id)},title:te(`close_tab`),children:(0,q.jsx)(Uy,{})})]},e.id))}),j.right&&(0,q.jsx)(tb,{onClick:()=>se(180),title:te(`scroll_tabs_right`),type:`button`,children:(0,q.jsx)(Hy,{})}),(0,q.jsx)(ob,{"data-shortcut":Yt(D.newTab),onClick:a,title:te(`new_tab`),type:`button`,children:(0,q.jsx)(Ci,{size:13})})]}),(0,q.jsx)(sb,{...A}),(0,q.jsxs)(cb,{children:[(0,q.jsx)(ub,{$active:S,"data-shortcut":Yt(D.splitView),disabled:!C,onClick:w,title:te(S?`close_split_view`:`split_view`),type:`button`,children:(0,q.jsx)(Ta,{size:15})}),(0,q.jsx)(ub,{$active:T,disabled:!E,onClick:ee,title:te(T?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,q.jsx)(Ea,{size:15})}),(0,q.jsxs)(lb,{$active:b,onClick:x,title:te(b?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,q.jsx)(ha,{size:14}),y>0&&(0,q.jsx)(bv,{children:y>9?`9+`:y})]}),(0,q.jsx)(Wv,{}),(0,q.jsx)(cy,{currentFolder:O}),(0,q.jsx)(xv,{tasks:h,onClear:g,open:_,onOpenChange:v}),(0,q.jsx)(Ay,{disabled:e.find(e=>e.id===n)?.kind!==`files`,onChange:d,onColumns:f,onShowImages:m,showImages:p,view:l}),(0,q.jsx)(db,{onClick:k.minimize,title:te(`minimize`),type:`button`,children:(0,q.jsx)(Wy,{})}),(0,q.jsx)(db,{onClick:k.toggleMaximize,title:k.maximized?te(`restore`):te(`maximize`),type:`button`,children:k.maximized?(0,q.jsx)(Ky,{}):(0,q.jsx)(Gy,{})}),(0,q.jsx)(fb,{onClick:k.close,title:te(`close`),type:`button`,children:(0,q.jsx)(Uy,{})})]})]})}function Jy(e){return e.kind===`files`&&(!T(e.path)||ee(e.path))}function Yy({tab:e}){switch(e.kind){case`home`:return(0,q.jsx)(gi,{size:13});case`settings`:return(0,q.jsx)(Di,{size:13});case`recycle`:return(0,q.jsx)(Ni,{size:13});default:return e.archive?(0,q.jsx)(Wi,{size:13}):(0,q.jsx)(Xy,{place:e.place})}}function Xy({place:e}){return e?(0,q.jsx)(Gs,{place:e,size:13}):(0,q.jsx)(_i,{size:13})}var Zy=v.header`
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
        // The blur lives on a pseudo-element, not on the bar itself: an element with backdrop-filter
        // becomes a backdrop root, and every floating panel opened from this bar (share, status
        // centre, view, history) would then blur nothing but the bar's own paint.
        background: transparent;
        isolation: isolate;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            background: rgba(var(--bg-rgb), 0.5);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            pointer-events: none;
        }
    }
`,Qy=v.span`
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
`,$y=v.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,eb=v.div`
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
`,tb=v.button`
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
`,nb=v.button`
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
`,rb=v.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ib=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,ab=v.span`
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
`,ob=v.button`
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
`,sb=v.div`
    flex: 1;
    min-width: 28px;
`,cb=v.div`
    display: flex;
    flex-shrink: 0;
`,lb=v.button`
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
`,ub=v.button`
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
`,db=v.button`
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
`,fb=v(db)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function pb(){let[e,t]=(0,R.useState)(null),n=(0,R.useRef)(null),r=(0,R.useRef)(void 0);return(0,R.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Za.createPortal)((0,q.jsx)(mb,{tooltip:e}),document.body):null}function mb({tooltip:e}){let t=(0,R.useRef)(null),[n,r]=(0,R.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,R.useState)(()=>e.bottom+6);return(0,R.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,q.jsxs)(hb,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,q.jsx)(gb,{children:e.text}),e.shortcut&&(0,q.jsx)(_b,{children:e.shortcut})]})}var hb=v.div`
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
    ${po}
`,gb=v.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,_b=v.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,vb={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`};function yb({deviceName:e,code:t,onAccept:n,onReject:r}){let i=o(),a=(0,R.useRef)(null);return(0,R.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Za.createPortal)((0,q.jsx)(bb,{children:(0,q.jsxs)(xb,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsxs)(Sb,{children:[(0,q.jsx)(ma,{size:15}),i(`pair_for_sharing`)]}),(0,q.jsx)(Cb,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,q.jsx)(wb,{children:t}),(0,q.jsx)(Tb,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,q.jsxs)(Eb,{children:[(0,q.jsx)(Db,{onClick:r,type:`button`,children:i(`reject`)}),(0,q.jsx)(Ob,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var bb=v.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${po}
`,xb=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${so}
`,Sb=v.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Cb=v.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,wb=v.div`
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
`,Tb=v.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Eb=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Db=v.button`
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
`,Ob=v(Db)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,kb=0,Ab=new Set;function jb(e){Ab.add(e),l.send({type:`app.navigate.done`,payload:{path:e}})}var Mb=20,Nb=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function Pb(e){return e.history[e.index]??qp(`home`)}function Fb(e){return Jp(Pb(e))??`files`}function Ib(e){let t=Pb(e);return Jp(t)?``:e.listing?.path||t}function Lb(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Fb(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Rb(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function zb(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||z.iconSize,gridSize:e.view?.gridSize||t.gridSize||z.gridSize,sort:e.view?.sort??z.sort,sortDescending:e.view?.sortDescending??z.sortDescending,columns:t.columns??xe.columns??[]}}function Bb(e=qp(`home`)){return kb+=1,{id:`tab-${kb}`,listing:null,loading:!Jp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Vb(e){return e instanceof Error?e.message:String(e)}function Hb(e){let t=Jc(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return Yc(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Ub(e){let t=x(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Wb(e){return T(e)?en(e):void 0}function Gb(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return ie(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:C(n)})}function Kb(){let e=o(),[t,n]=(0,R.useState)(()=>[Bb()]),[i,a]=(0,R.useState)(()=>t[0].id),[s,c]=(0,R.useState)(null),[u,d]=(0,R.useState)(()=>{let e=Yn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,R.useState)([]),[h,_]=(0,R.useState)([]),[v,y]=(0,R.useState)(null),[b,S]=(0,R.useState)(null),[C,w]=(0,R.useState)(null),k=O(),[A,j]=(0,R.useState)(xn),[ne,re]=(0,R.useState)(0),[P,ae]=(0,R.useState)(0),[oe,I]=(0,R.useState)(0),[ce,le]=(0,R.useState)(xn),[de,fe]=(0,R.useState)(0),[pe,me]=(0,R.useState)(0),[he,ge]=(0,R.useState)(0),[L,_e]=(0,R.useState)(0),ve=(0,R.useRef)(L);ve.current=L;let[be,Se]=(0,R.useState)([]),[Oe,Ne]=(0,R.useState)(10),[V,Pe]=(0,R.useState)(null),Fe=f(g(V?.themeMode)),Ie=(0,R.useMemo)(()=>(V?.favorites??[]).map(e=>E(e.path)),[V?.favorites]),[Le,Re]=(0,R.useState)(0),[H,ze]=(0,R.useState)(Wt),[Ve,Ue]=(0,R.useState)(0),[We,Ge]=(0,R.useState)(0),[qe,Je]=(0,R.useState)(0),[Ye,Ze]=(0,R.useState)(!0),[Qe,$e]=(0,R.useState)(()=>{let e=Yn(`yafm.preview.width`,320);return e>=220?e:320}),[et,tt]=(0,R.useState)(null),[nt,rt]=(0,R.useState)(null),[it,st]=(0,R.useState)({kind:null,info:null}),[ct,lt]=(0,R.useState)(`primary`),[ut,dt]=(0,R.useState)(null),[ft,pt]=(0,R.useState)(null),[mt,ht]=(0,R.useState)(null),[gt,vt]=(0,R.useState)(null),[xt,wt]=(0,R.useState)({primary:0,secondary:0}),[Et,Dt]=(0,R.useState)({primary:null,secondary:null}),[Ot,At]=(0,R.useState)(null),[jt,Mt]=(0,R.useState)([]),[Nt,Pt]=(0,R.useState)(!1),Ft=(0,R.useRef)([]),Rt=(0,R.useRef)([]),[zt,Bt]=(0,R.useState)([]),[Gt,Xt]=(0,R.useState)(!1),Qt=(0,R.useMemo)(()=>Gt?new Set(zt.map(e=>e.path)):new Set,[zt,Gt]),[$t,an]=(0,R.useState)(!1),[on,sn]=(0,R.useState)([]),[cn,dn]=(0,R.useState)(null),fn=(0,R.useRef)(0),[pn,mn]=(0,R.useState)(()=>{let e=Zn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Rb({x:e.x,y:e.y}):Rb({x:Math.max(20,window.innerWidth-340),y:110})}),W=(0,R.useCallback)(()=>{mn(e=>Rb(e)),an(!0)},[]),G=t.find(e=>e.id===i)??t[0],K=Fb(G),hn=Pb(G),gn=Ib(G),_n=K===`files`?G.listing?.parent??Hb(gn):null,vn=G.splitWith?t.find(e=>e.id===G.splitWith):void 0,yn=K===`files`&&vn!==void 0,bn=vn?Ib(vn):``,Sn=vn?vn.listing?.parent??Hb(bn):null,Cn=yn&&vn&&ct===`secondary`?vn:G,wn=V?.defaultView??xe,Tn=zb(Cn,wn);(0,R.useEffect)(()=>{r(V?.accentColor,V?.secondaryColor,Fe)},[V?.accentColor,V?.secondaryColor,Fe]),(0,R.useEffect)(()=>{rh(V?.fonts)},[V?.fonts]),(0,R.useEffect)(()=>{N(V?.timeFormat,V?.timeFormatPattern)},[V?.timeFormat,V?.timeFormatPattern]),(0,R.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!V?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[V?.backgroundSource]),(0,R.useEffect)(()=>(ye(e=>new Promise(t=>{dn({id:++fn.current,prompt:e,resolve:t})})),()=>ye(null)),[]),(0,R.useEffect)(()=>{lt(`primary`)},[i]),(0,R.useEffect)(()=>{le(xn),me(0),ge(0)},[K]),(0,R.useEffect)(()=>{me(0)},[ce.query,ce.matchCase,ce.regex]),(0,R.useEffect)(()=>{me(e=>he===0?0:Math.min(e,he-1))},[he]);let En=Tn.columns.includes(`linkCount`),Dn=(0,R.useMemo)(()=>{let e={},t=Hs(V),n={};for(let[e,t]of Object.entries(V?.placeNames??{}))n[E(e)]=t;for(let t of p)e[E(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=E(t),i=p.find(e=>E(e.path)===r);e[r]={name:n[r]??i?.name??(x(t)||t),path:t,kind:`folder`,icon:i?.icon??V?.placeIcons?.[t]??null}}return e},[p,V]),On=(0,R.useMemo)(()=>({places:Dn,useIcons:V?.systemIcons===!1}),[Dn,V?.systemIcons]),kn=V?.defaultView?.showImages??!0,jn=V?.defaultView?.imageStripHeight??xe.imageStripHeight,Mn=K===`home`?(0,q.jsx)($i,{size:13}):K===`settings`?(0,q.jsx)(Di,{size:13}):K===`recycle`?(0,q.jsx)(Ni,{size:13}):K===`gallery`?(0,q.jsx)(Vi,{size:13}):void 0,Nn=A.open&&A.query.length>0,Pn=(0,R.useMemo)(()=>Nn&&Cn.listing?Cn.listing.entries.filter(e=>An(e.isDirectory?Bn(On,e.fullPath,e.name):e.name,A)).map(e=>e.fullPath):[],[Nn,A,Cn.listing,On]);(0,R.useEffect)(()=>{re(0)},[A.query,A.matchCase,A.regex,Cn.listing?.path]);let Fn=Pn.length===0?-1:Math.min(ne,Pn.length-1),In=(0,R.useCallback)(()=>{j(e=>({...e,open:!1,query:``})),re(0)},[]),Rn=(0,R.useCallback)(()=>{j(e=>({...e,open:!0})),ae(e=>e+1)},[]),Vn=(0,R.useCallback)(()=>{le(e=>({...e,open:!0})),fe(e=>e+1)},[]),Hn=(0,R.useCallback)(()=>{le(xn),me(0),ge(0)},[]),Un=(0,R.useCallback)(e=>{me(t=>he===0?0:(Math.min(t,he-1)+e+he)%he)},[he]),Wn=(0,R.useCallback)(e=>{j(t=>({...t,open:!0,query:t.open?t.query+e:e})),ae(e=>e+1)},[]),Gn=(0,R.useCallback)(e=>{re(t=>Pn.length===0?0:(Math.min(t,Pn.length-1)+e+Pn.length)%Pn.length)},[Pn.length]),Kn=(0,R.useRef)({tabs:t,activeId:i,activePane:ct});Kn.current={tabs:t,activeId:i,activePane:ct};let qn=(0,R.useRef)(V);qn.current=V;let Jn=(0,R.useRef)(!1),$n=(0,R.useRef)([]),er=(0,R.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),tr=(0,R.useRef)(new Map),nr=(0,R.useCallback)(e=>{let t=(tr.current.get(e)??0)+1;return tr.current.set(e,t),()=>tr.current.get(e)===t},[]),rr=(0,R.useCallback)((e,t)=>{l.available&&t&&e===Lb(Kn.current)&&l.send({type:`fs.focus`,payload:{path:t}})},[]),ir=(0,R.useCallback)(async(e,t,n)=>{if(!(t&&qc(t)))try{let r=await B(t,En);if(!n()||!r.listing)return;er(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[En,er]),ar=(0,R.useCallback)(async(e,t,n=!1)=>{let r=nr(e);In(),rr(e,t);let i=!n||!Kn.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;er(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&F(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&ir(e,t,r);let o=t&&qc(t)?await Xc(t):await we(t,!0,En,ve.current,t?Wb(t):void 0);if(!r())return;er(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!qc(o.path)&&He(o.path).then(()=>Re(e=>e+1))}catch(i){if(!r())return;let a=Kn.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Ib(a):``,s=Hb(o),c=Vb(i);if(o&&rn(c)){let i=D(o),a=await Va(i,!!en(i));if(a){tn(i,a),r()&&ar(e,t,n);return}}er(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[nr,En,er,rr,In,ir]),or=(0,R.useCallback)((e,t)=>{let n=Yp(t);n&&(Jp(n)?(In(),nr(e),er(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):ar(e,n))},[nr,ar,er,In]),sr=(0,R.useCallback)(async(e,t,n)=>{if(In(),Jp(t)){nr(e),er(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=nr(e);rr(e,t),er(e,()=>({index:n,listing:null,loading:!0,error:null}));try{qc(t)||ir(e,t,r);let n=qc(t)?await Xc(t):await we(t,!0,En,ve.current,Wb(t));if(!r())return;er(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(rn(Vb(i))){let i=D(t),a=await Va(i,!!en(i));if(a){tn(i,a),r()&&sr(e,t,n);return}}er(e,()=>({listing:{path:t,parent:Hb(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Vb(i)}))}},[nr,En,er,rr,In,ir]),cr=(0,R.useCallback)((e,t=!0)=>{let r=Bb(e??qp(`home`));return n(e=>[...e,r]),t&&a(r.id),e&&!Jp(e)&&ar(r.id,e),r.id},[ar]),lr=(0,R.useCallback)(e=>{for(let t of Kn.current.tabs)Fb(t)===`files`&&F(Ib(t),e)&&ar(t.id,e,!0)},[ar]),ur=(0,R.useCallback)((e,t)=>{let n=x(t);for(let r of Kn.current.tabs)r.listing?.entries.some(t=>F(t.fullPath,e))&&er(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>F(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[er]),dr=(0,R.useRef)([]);(0,R.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&T(t)&&e.add(E(D(t)))}let n=dr.current.filter(t=>!e.has(t));dr.current=[...e],n.length>0&&De(n)},[t]);let fr=(0,R.useCallback)((e,t=!1)=>{t?cr(qp(e)):or(Kn.current.activeId,qp(e))},[cr,or]),pr=(0,R.useCallback)(e=>{let{tabs:t,activeId:r}=Kn.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(Rt.current.push(Pb(i)),Rt.current.length>Mb&&Rt.current.shift()),o.length===0){let e=Bb();n([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&a(o[Math.min(s,o.length-1)].id)},[]),mr=(0,R.useCallback)(()=>{let e=Rt.current.pop();if(!e)return;let t={...Bb(e),fresh:!1};n(e=>[...e,t]),a(t.id),Fb(t)===`files`&&ar(t.id,Ib(t))},[ar]),hr=(0,R.useCallback)((e,t=!1)=>{t?cr(e):or(Lb(Kn.current),e??qp(`home`))},[or,cr]),gr=(0,R.useCallback)(e=>{let{tabs:t,activeId:n}=Kn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),_r=(0,R.useCallback)(()=>{let{tabs:e,activeId:t}=Kn.current,r=e.find(e=>e.id===t);if(!r||Fb(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),er(t,()=>({splitWith:void 0})),lt(`primary`);return}let a=Ib(r),o={...Bb(a),hidden:!0};n(e=>[...e,o]),er(t,()=>({splitWith:o.id})),ar(o.id,a),lt(`primary`)},[ar,er]),vr=(0,R.useCallback)(e=>{$e(e),Xn(`yafm.preview.width`,e)},[]),yr=(0,R.useCallback)((e,t,n)=>st(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),br=(0,R.useCallback)((e,t)=>yr(`gallery`,e,t),[yr]),xr=(0,R.useCallback)((e,t)=>yr(`recycle`,e,t),[yr]),Sr=yn?ct===`secondary`?nt??et:et??nt:et,Cr=yn&&ct===`secondary`?xt.secondary:xt.primary,wr=K===`files`?Sr:it.kind===K?it.info:null,Tr=K===`files`?Cr>1?ie(e,Cr,`k_1_item_selected`,`count_items_selected`):void 0:it.kind===K?it.note:void 0,Er=(0,R.useRef)(null),Dr=e=>{e.preventDefault();let t=Er.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);d(r),Xn(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Or=(e,t,n)=>{t&&dt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},kr=(0,R.useCallback)((e,t)=>{wt(n=>n[e]===t?n:{...n,[e]:t})},[]),Ar=(0,R.useCallback)(e=>kr(`primary`,e),[kr]),jr=(0,R.useCallback)(e=>kr(`secondary`,e),[kr]),Mr=(e,t)=>{xt[e]!==0&&Dt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Nr=async(e,t=!1)=>{let n=ut;if(dt(null),!n)return;let r=e===null?await Tt(n.directory,t):await kt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;In(),At(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Pr=(0,R.useCallback)(()=>{let{tabs:e}=Kn.current,t=e.find(e=>e.id===Lb(Kn.current));t&&t.index>0&&sr(t.id,t.history[t.index-1],t.index-1)},[sr]),Fr=(0,R.useCallback)(()=>{let{tabs:e}=Kn.current,t=e.find(e=>e.id===Lb(Kn.current));t&&t.index<t.history.length-1&&sr(t.id,t.history[t.index+1],t.index+1)},[sr]),Ir=(0,R.useCallback)(()=>{let{tabs:e}=Kn.current,t=e.find(e=>e.id===Lb(Kn.current));t&&Fb(t)===`files`&&t.listing?.parent&&hr(t.listing.parent)},[hr]),Lr=(0,R.useRef)(null),Rr=(0,R.useCallback)(()=>{for(let e of Kn.current.tabs)e.listing&&ar(e.id,e.listing.path,!0)},[ar]),zr=(0,R.useCallback)(e=>{e.length!==0&&(sn(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),W())},[W]),Br=(0,R.useCallback)(async e=>{let t=await U(e);t.length!==0&&zr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[zr]),Vr=(0,R.useCallback)(e=>{let t=new Set(e);sn(e=>e.filter(e=>!t.has(e.path)))},[]),Hr=(0,R.useCallback)(async e=>{let t=qn.current;if(!t)return;let n=await U(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>E(e.path))),i=n.filter(e=>!r.has(E(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};Pe(a),await at(a),Ue(e=>e+1)},[]),Ur=(0,R.useCallback)(async e=>{let t=qn.current;if(!t)return;let n=new Set(e.map(E)),r=(t.favorites??[]).filter(e=>!n.has(E(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};Pe(i),await at(i),Ue(e=>e+1)},[]),Wr=(0,R.useCallback)(()=>sn([]),[]),Gr=(0,R.useRef)(-1),Kr=(0,R.useCallback)(e=>{Bt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Xt(e.move),e.entries.length>0&&W()},[W]),qr=(0,R.useCallback)(async()=>{if(l.available)try{let e=await yt();Gr.current=e.sequence,Kr(e)}catch{}},[Kr]),Jr=(0,R.useCallback)(async e=>{e.length!==0&&await _t(e,!1)&&await qr()},[qr]),Yr=(0,R.useRef)(on);Yr.current=on;let Xr=(0,R.useRef)($t);Xr.current=$t;let Zr=(0,R.useRef)(!1);(0,R.useEffect)(()=>{let e=V?.trayAutoShow??!0,t=t=>{e&&fc(t)&&(Xr.current||(Zr.current=!0),W())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{Zr.current&&window.setTimeout(()=>{Zr.current&&Yr.current.length===0&&an(!1),Zr.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[W,V?.trayAutoShow]),(0,R.useEffect)(()=>{let e=()=>mn(e=>Rb(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Qr=(0,R.useCallback)(async()=>{let e=Yr.current;if(e.length>0){let t=await U(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));sn(e=>e.filter(e=>n.has(e.path)))}await qr()},[qr]),$r=(0,R.useCallback)(()=>{Qr(),Je(e=>e+1),Rr()},[Qr,Rr]),ei=(0,R.useCallback)(e=>{let t=Rb(e);mn(t),Qn(`yafm.tray.position`,t)},[]),ti=(0,R.useCallback)(()=>{Zr.current=!1,$t?an(!1):W()},[W,$t]),ni=(0,R.useCallback)(async(t,n,r)=>{let i=await bt(t,n,r);i.cancelled||(i.ok?(r&&Vr(t),Je(e=>e+1),Rr(),qr()):za(i.error??e(`the_files_could_not_be_transferred`)))},[Rr,qr,Vr]);(0,R.useEffect)(()=>{if(l.available)return Ht().then(e=>{Ft.current=e,Mt(e)},()=>void 0),l.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Ft.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Ft.current=n,Mt(n),r&&Pt(!0)})},[]);let ri=(0,R.useCallback)(()=>{Ut().then(()=>Ht().then(e=>{Ft.current=e,Mt(e)},()=>void 0))},[]);(0,R.useEffect)(()=>{if(!l.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await yt();if(!e||t.sequence===Gr.current)return;Gr.current=t.sequence,Kr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Kr]);let ii=(0,R.useCallback)(async e=>{let t=e?await It():await Lt();t.ok?(Je(e=>e+1),Rr()):t.error&&!t.error.startsWith(`Nothing to`)&&za(t.error)},[Rr]),ai=(0,R.useRef)(En);(0,R.useEffect)(()=>{ai.current!==En&&(ai.current=En,Rr())},[En,Rr]);let oi=(0,R.useCallback)((e,t)=>{let{tabs:n}=Kn.current,r=n.find(t=>t.id===e);if(!r||Fb(r)!==`files`)return;let i=Ib(r),a=qn.current?.defaultView??xe,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||z.iconSize,gridSize:r.view?.gridSize||a.gridSize||z.gridSize,sort:r.view?.sort??z.sort,sortDescending:r.view?.sortDescending??z.sortDescending,...t};er(e,()=>({view:o})),Lr.current!==null&&window.clearTimeout(Lr.current),Lr.current=window.setTimeout(()=>{Lr.current=null,ke(i,o)},250)},[er]),si=(0,R.useCallback)(e=>{oi(Lb(Kn.current),e)},[oi]),ci=(0,R.useCallback)(e=>{let t=qn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe,columns:e}};Pe(n),at(n)},[]),li=(0,R.useCallback)(e=>{let t=qn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe,showImages:e}};Pe(n),at(n)},[]),ui=(0,R.useCallback)(e=>{let t=qn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe,imageStripHeight:e}};Pe(n),at(n)},[]),di=(0,R.useCallback)((e,t,n,r)=>{let i=Kn.current.tabs.find(t=>t.id===e);if(!i||Fb(i)!==`files`||!i.listing)return;let a=Ib(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));er(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Ae(a,t,n,r)},[er]),fi=(0,R.useCallback)((e,t)=>{let n=Kn.current.tabs.find(t=>t.id===e);if(!n)return;let r=zb(n,qn.current?.defaultView??xe);oi(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[oi]),pi=(0,R.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),mi=(0,R.useCallback)(()=>{je().then(m,()=>m([]))},[]),hi=(0,R.useCallback)(e=>{let t=(e.openTabs??[]).map(Yp).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...Bb(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),a(r[i].id);for(let e of r)Fb(e)===`files`&&ar(e.id,Ib(e),!0);return!0},[ar]),J=(0,R.useCallback)(e=>{let t=$n.current;if($n.current=[],t.length===0)return;let n=t.filter(e=>!Ab.has(e));for(let e of t)n.includes(e)||jb(e);if(n.length===0)return;let{tabs:r}=Kn.current;if(!e&&r.length===1&&r[0].fresh){or(r[0].id,n[0]),jb(n[0]);for(let e of n.slice(1))cr(e),jb(e);return}let i=n.map(e=>{let t=cr(e);return jb(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[cr,or]),gi=(0,R.useCallback)(()=>{Xe().then(e=>{Pe(e),Ne(e.recentLimit);let t={...Wt,...e.shortcuts};ze(t),Kt(t.openInNewTab),Ue(e=>e+1),Jn.current||(Jn.current=!0,J(e.restoreTabs&&hi(e)))},()=>{Ne(10),Jn.current=!0,J(!1)})},[J,hi]),_i=(0,R.useCallback)(()=>{Be().then(Se,()=>Se([]))},[]),vi=(0,R.useCallback)(()=>{Me().then(_,()=>_([]))},[]),yi=t.filter(e=>!e.hidden),Si=yi.map(Pb),Ei=Si.join(`
`),Oi=Math.max(yi.findIndex(e=>e.id===i),0);(0,R.useEffect)(()=>{if(!V?.restoreTabs)return;let e=setTimeout(()=>void ot(Si,Oi),700);return()=>clearTimeout(e)},[Ei,Oi,V?.restoreTabs]),(0,R.useEffect)(()=>{let{tabs:e,activeId:t}=Kn.current,n=e.find(e=>e.id===t);n&&n.fresh&&Fb(n)===`files`&&ar(n.id,Ib(n),!0),mi(),gi(),vi(),se().then(y,()=>y(null))},[ar,mi,gi,vi]),(0,R.useEffect)(()=>{if(ue().then(S,()=>S(null)),l.available)return l.on(e=>{let t=e;t.type===`update.checked`&&t.data&&S(t.data)})},[]),(0,R.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&c({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&za(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&za(n.data.error??e(`pairing_failed`))}})},[e]),(0,R.useEffect)(()=>{let e=setInterval(vi,3e4);return()=>clearInterval(e)},[vi]),(0,R.useEffect)(()=>{K===`home`&&(_i(),vi())},[K,G.id,_i,vi]),(0,R.useEffect)(()=>{if(!l.available)return;let e=l.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Kn.current,i=t.data.startup===!0;i&&Ab.has(n)?jb(n):i&&!Jn.current?$n.current.includes(n)||$n.current.push(n):(i&&r.length===1&&r[0].fresh?or(r[0].id,n):Jp(n)?or(Lb(Kn.current),n):cr(n),i&&jb(n))});return l.send({type:`app.ready`}),e},[or,cr]),(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,R.useEffect)(()=>{let e=e=>{if(Zt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Pr();return}if(e.key===`BrowserForward`){e.preventDefault(),Fr();return}if(e.key===`Escape`&&A.open){e.preventDefault(),In();return}let t=Jt(e);if(t===H.closeTab)e.preventDefault(),pr(Lb(Kn.current));else if(t===H.newTab)e.preventDefault(),cr();else if(t===H.reopenTab)e.preventDefault(),mr();else if(t===H.goBack)e.preventDefault(),Pr();else if(t===H.goForward)e.preventDefault(),Fr();else if(t===H.goUp)e.preventDefault(),Ir();else if(t===H.find)e.preventDefault(),K===`files`?Rn():Vn();else if(t===H.location)e.preventDefault(),Ge(e=>e+1);else if(t===H.home){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&hr(t)}else t===H.iconsView?(e.preventDefault(),K===`files`&&si({mode:`grid`})):t===H.detailsView?(e.preventDefault(),K===`files`&&si({mode:`list`})):t===H.nextTab?(e.preventDefault(),gr(1)):t===H.previousTab?(e.preventDefault(),gr(-1)):t===H.hidden||t===`alt+.`?(e.preventDefault(),Ke().then(()=>{Je(e=>e+1),Rr()})):t===H.undo?(e.preventDefault(),ii(!0)):t===H.redo?(e.preventDefault(),ii(!1)):t===H.splitView?(e.preventDefault(),_r()):K!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Wn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[H,K,A.open,pr,mr,cr,Pr,Fr,Ir,Rn,Vn,In,Wn,si,gr,hr,p,Rr,ii,_r]),(0,R.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Pr()):(e.button===4||e.button===9)&&(e.preventDefault(),Fr())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Pr,Fr]),(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Pr();break;case`forward`:Fr()}})},[Pr,Fr]);let ki=(0,R.useMemo)(()=>{let e=new Set;for(let n of t){if(Fb(n)!==`files`)continue;let t=Ib(n);if(t&&!qc(t)){if(T(t)){let n=Hb(D(t));n&&e.add(n)}else e.add(t)}}return[...e]},[t]),Ai=ki.join(`\0`);(0,R.useEffect)(()=>{l.available&&l.send({type:`fs.watch`,payload:{paths:ki,owner:`app`}})},[Ai,i]);let ji=Fb(Cn)===`files`?Ib(Cn):``;(0,R.useEffect)(()=>{l.available&&l.send({type:`fs.focus`,payload:{path:ji||null}})},[ji]),(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=Kn.current.tabs.filter(e=>Fb(e)===`files`&&F(Ib(e),n)),i=Kn.current.tabs.filter(e=>{let t=Ib(e);return Fb(e)===`files`&&t.length>0&&T(t)&&F(D(t),n)});if(r.length!==0||i.length!==0){un(n);for(let e of i){let t=Kn.current.tabs.find(t=>t.id===e.id),r=t?Ib(t):``;t&&Fb(t)===`files`&&!t.loading&&T(r)&&F(D(r),n)&&ar(e.id,r,!0)}r.length!==0&&we(n,!1,En).then(e=>{for(let t of r){let n=Kn.current.tabs.find(e=>e.id===t.id);n&&Fb(n)===`files`&&F(Ib(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=Kn.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Fb(n)===`files`&&F(Ib(n),e.path)&&er(t.id,()=>({listing:e}))},300):er(t.id,()=>({listing:e})))}},()=>void 0)}})},[En,ar,er]);let Mi=G.index>0,Pi=G.index<G.history.length-1,Fi=(e,t)=>{let n=zb(e,wn),r=e.listing?.path??e.history[e.index]??``,i=T(r),a=i&&ee(r);return(0,q.jsx)(Dl,{platform:v?.platform,confirmDelete:V?.confirmDelete??!1,cutPaths:Qt,previewVideoAudio:V?.previewVideoAudio??!1,previewVideoAutoplay:V?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?tt:rt,onActivate:()=>lt(t?`primary`:`secondary`),enableShortcuts:(!yn||(t?ct===`primary`:ct===`secondary`))&&(!i||a),error:e.error,find:e.id===Cn.id?{...A,currentPath:Fn<0?null:Pn[Fn]}:void 0,selectMatchesToken:e.id===Cn.id?oe:0,imageStripHeight:jn,listing:e.listing,loading:e.loading,onImageStripHeight:ui,readOnly:i&&!a||qc(e.listing?.path??``),onOpen:(t,n)=>{n?cr(t):ar(e.id,t)},onOpenFile:(t,n)=>{qc(t)?Qc(t).catch(e=>void za(Vb(e))):M(t)?V?.archiveHandler??!1?n?cr(t):ar(e.id,t):Ce(t):T(t)?(async()=>{let e=await Ee(t,ve.current,Wb(t));if(!e.path&&rn(e.error)){let n=D(t),r=en(n);r&&nn(n);let i=await Va(n,!!r);i&&(tn(n,i),e=await Ee(t,ve.current,i))}e.path?Ce(e.path):e.error&&za(e.error)})():Ce(t)},onRefresh:()=>{let t=e.listing?.path;t&&lr(t)},onRename:ur,onSelectionCountChange:t?Ar:jr,onSetTags:(t,n,r)=>di(e.id,t,n,r),selectionMenuRequest:t?Et.primary:Et.secondary,onSort:t=>fi(e.id,t),onPaste:$r,onClipboardChanged:()=>void qr(),onTransfer:ni,onAddToTray:e=>void Br(e),onAddFavorite:e=>void Hr(e),onRemoveFavorite:e=>void Ur(e),favoritePaths:Ie,onExtractArchive:(e,t)=>void Hi(e,t),openOnSingleClick:V?.openOnSingleClick??!1,pendingRename:Ot&&t===(ct===`primary`)&&F(Ot.directory,e.listing?.path??``)?Ot.path:null,pendingRenameToken:Ot?.token??0,refreshToken:qe,shortcuts:H,showCheckboxes:V?.showCheckboxes??!0,showImages:kn,view:n})},Ii=A.open&&(0,q.jsx)(rf,{current:Fn,focusToken:P,matchCase:A.matchCase,mode:A.mode,onClose:In,onMatchCase:()=>j(e=>({...e,matchCase:!e.matchCase})),onMode:()=>j(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Gn(1),onPrevious:()=>Gn(-1),onQuery:e=>j(t=>({...t,query:e})),onRegex:()=>j(e=>({...e,regex:!e.regex})),query:A.query,regex:A.regex,total:Pn.length,onSelectMatches:Pn.length>0?()=>I(e=>e+1):void 0}),Li=K===`files`&&T(gn),Ri=Li&&ee(gn),zi=Li&&G.listing?.archiveEncrypted===!0,Bi=async(t,n)=>{let r=D(t),i=await Te(r,n,ve.current,Wb(r));if(!i.ok&&rn(i.error)){let e=en(r);e&&nn(r);let t=await Va(r,!!e);t&&(tn(r,t),i=await Te(r,n,ve.current,t))}i.ok?(lr(n),ln(),ar(G.id,n,!0)):za(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Hi=async(e,t)=>{let n=D(e),r=Hb(n);if(!r)return;if(t===`choose`){let e=await Pa(r);e&&await Bi(n,e);return}let i=t===`named`;if(t===`auto`){let e=F(n,gn)?G.listing?.entries??[]:(await we(n,!1,!1,ve.current,Wb(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${Ub(n)}`:r;await Bi(n,o)},Ui=async e=>{Li&&await Hi(gn,e)},Gi=async()=>{Li&&await Hi(gn,`choose`)},Ki=(0,q.jsxs)(Zb,{children:[(0,q.jsx)(Qb,{"data-shortcut":Yt(H.goBack),disabled:!Mi,onClick:e=>{G.index>0&&qt(e)?cr(G.history[G.index-1]):Pr()},title:e(`back`),type:`button`,children:(0,q.jsx)(wi,{})}),(0,q.jsx)(Qb,{"data-shortcut":Yt(H.goForward),disabled:!Pi,onClick:e=>{G.index<G.history.length-1&&qt(e)?cr(G.history[G.index+1]):Fr()},title:e(`forward`),type:`button`,children:(0,q.jsx)(Ti,{})}),(0,q.jsx)(Qb,{"data-shortcut":Yt(H.goUp),disabled:K!==`files`||!_n,onClick:e=>{_n&&(qt(e)?cr(_n):hr(_n))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(xi,{})}),(0,q.jsx)(Xp,{focusToken:We,icon:Mn,label:K===`files`?void 0:e(vb[K]),onContextMenu:K===`files`?(e,t,n)=>ht({x:t,y:n,path:e}):void 0,onNavigate:hr,path:K===`files`?gn:hn}),K===`files`&&(!Li||Ri)&&(0,q.jsx)(Qb,{onClick:e=>Or(e,gn,()=>void ar(G.id,gn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(Ci,{})}),(0,q.jsx)(Qb,{"data-shortcut":Yt(H.find),onClick:()=>K===`files`?Rn():Vn(),title:e(`search`),type:`button`,children:(0,q.jsx)(bi,{})}),xt.primary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(tx,{}),(0,q.jsx)(Qb,{onClick:e=>Mr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(Da,{})})]}),Li&&(0,q.jsxs)($b,{children:[(0,q.jsx)(tx,{}),zi&&(0,q.jsxs)(ex,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(Oa,{size:12}),e(`encrypted`)]}),(0,q.jsx)(Qb,{onClick:()=>void Gi(),onContextMenu:e=>{e.preventDefault(),pt({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,q.jsx)(Wi,{})}),(0,q.jsx)(Ao,{icon:(0,q.jsx)(ga,{size:15}),onChange:e=>{let t=Number(e);_e(t),ve.current=t,Li&&ar(G.id,gn,!0)},options:Nb.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(Nb.find(e=>e.value===String(L))?.label??`auto`)}`,value:String(L)})]})]}),qi=ce.open?{...ce,index:pe}:null;return(0,q.jsx)(Ln,{value:On,children:(0,q.jsxs)(qb,{$rounded:k,children:[(0,q.jsx)(_d,{settings:V,theme:Fe}),(0,q.jsx)(qy,{activeId:G.id,onClose:pr,onNewTab:()=>cr(),onReorder:pi,onTransferToTab:ni,onSelect:a,onViewChange:si,onColumns:ci,onShowImages:li,showImages:kn,tasks:jt,onClearTasks:ri,activityOpen:Nt,onActivityOpenChange:Pt,trayCount:on.length+zt.length,trayVisible:$t,onToggleTray:ti,split:yn,canSplit:K===`files`,onToggleSplit:_r,details:Ye,canDetails:K===`files`||K===`recycle`||K===`gallery`,onToggleDetails:()=>Ze(e=>!e),currentFolder:K===`files`&&!qc(gn)?gn:``,shortcuts:H,view:Tn,tabs:t.filter(e=>!e.hidden).map(n=>{let r=Fb(n),i=Ib(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?Ib(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?zn(On,i):void 0,archive:r===`files`&&T(i),split:!!a,title:r===`files`?Bn(On,i,x(i)||e(`files`)):e(vb[r]),partner:a?{title:Bn(On,o,x(o)||e(`files`)),place:zn(On,o)}:void 0}})}),(0,q.jsxs)(Jb,{children:[(0,q.jsx)(nv,{activeKind:K,currentPath:K===`files`?hn:``,drives:h,historyVersion:Le,onNavigate:hr,onOpenView:fr,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:be,recentLimit:Oe,version:Ve}),(0,q.jsxs)(Yb,{children:[(0,q.jsxs)(sx,{children:[(0,q.jsxs)(cx,{children:[K!==`files`&&Ki,(0,q.jsxs)(Xb,{children:[K!==`files`&&ce.open&&(0,q.jsx)(rf,{current:pe,focusToken:de,matchCase:ce.matchCase,mode:ce.mode,onClose:Hn,onMatchCase:()=>le(e=>({...e,matchCase:!e.matchCase})),onMode:()=>le(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Un(1),onPrevious:()=>Un(-1),onQuery:e=>le(t=>({...t,query:e})),onRegex:()=>le(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:ce.query,regex:ce.regex,total:he,onSelectMatches:K===`gallery`||K===`recycle`?()=>I(e=>e+1):void 0}),K===`files`?yn&&vn?(0,q.jsxs)(rx,{ref:Er,children:[(0,q.jsxs)(ix,{style:{flex:u},children:[(0,q.jsxs)(nx,{$active:ct===`primary`,onPointerDown:()=>lt(`primary`),children:[(0,q.jsx)(Qb,{"data-shortcut":Yt(H.goBack),disabled:!Mi,onClick:e=>{let t=G.index-1;t<0||(qt(e)?cr(G.history[t]):sr(G.id,G.history[t],t))},title:e(`back`),type:`button`,children:(0,q.jsx)(wi,{})}),(0,q.jsx)(Qb,{"data-shortcut":Yt(H.goForward),disabled:!Pi,onClick:e=>{let t=G.index+1;t>=G.history.length||(qt(e)?cr(G.history[t]):sr(G.id,G.history[t],t))},title:e(`forward`),type:`button`,children:(0,q.jsx)(Ti,{})}),(0,q.jsx)(Qb,{"data-shortcut":Yt(H.goUp),disabled:!_n,onClick:e=>{_n&&(qt(e)?cr(_n):ar(G.id,_n))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(xi,{})}),(0,q.jsx)(Xp,{focusToken:ct===`primary`?We:void 0,onContextMenu:(e,t,n)=>ht({x:t,y:n,path:e}),onNavigate:(e,t)=>t?cr(e):void ar(G.id,e),path:gn}),(0,q.jsx)(Qb,{onClick:e=>Or(e,gn,()=>void ar(G.id,gn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(Ci,{})}),(0,q.jsx)(Qb,{"data-shortcut":Yt(H.find),onClick:Rn,title:e(`search`),type:`button`,children:(0,q.jsx)(bi,{})}),xt.primary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(tx,{}),(0,q.jsx)(Qb,{onClick:e=>Mr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(Da,{})})]})]}),Fi(G,!0),ct===`primary`&&Ii]}),(0,q.jsx)(ax,{onDoubleClick:()=>d(.5),onPointerDown:Dr,title:e(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(ix,{$enter:!0,style:{flex:1-u},children:[(0,q.jsxs)(nx,{$active:ct===`secondary`,onPointerDown:()=>lt(`secondary`),children:[(0,q.jsx)(Qb,{"data-shortcut":Yt(H.goBack),disabled:vn.index<=0,onClick:e=>{let t=vn.index-1;t<0||(qt(e)?cr(vn.history[t]):sr(vn.id,vn.history[t],t))},title:e(`back`),type:`button`,children:(0,q.jsx)(wi,{})}),(0,q.jsx)(Qb,{"data-shortcut":Yt(H.goForward),disabled:vn.index>=vn.history.length-1,onClick:e=>{let t=vn.index+1;t>=vn.history.length||(qt(e)?cr(vn.history[t]):sr(vn.id,vn.history[t],t))},title:e(`forward`),type:`button`,children:(0,q.jsx)(Ti,{})}),(0,q.jsx)(Qb,{"data-shortcut":Yt(H.goUp),disabled:!Sn,onClick:e=>{Sn&&(qt(e)?cr(Sn):ar(vn.id,Sn))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(xi,{})}),(0,q.jsx)(Xp,{focusToken:ct===`secondary`?We:void 0,onContextMenu:(e,t,n)=>ht({x:t,y:n,path:e}),onNavigate:(e,t)=>t?cr(e):void ar(vn.id,e),path:bn}),(0,q.jsx)(Qb,{onClick:e=>Or(e,bn,()=>void ar(vn.id,bn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(Ci,{})}),(0,q.jsx)(Qb,{"data-shortcut":Yt(H.find),onClick:Rn,title:e(`search`),type:`button`,children:(0,q.jsx)(bi,{})}),xt.secondary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(tx,{}),(0,q.jsx)(Qb,{onClick:e=>Mr(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(Da,{})})]})]}),Fi(vn,!1),ct===`secondary`&&Ii]})]}):(0,q.jsxs)(q.Fragment,{children:[Ki,(0,q.jsxs)(ox,{children:[Fi(G,!0),Ii]})]}):K===`home`?(0,q.jsx)(Bp,{platform:v?.platform,drives:h,find:qi,historyVersion:Le,onSearchMatches:ge,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:vi,onHistoryChanged:()=>Re(e=>e+1),onAddToTray:e=>void Br(e),onAddFavorite:e=>void Hr(e),onRemoveFavorite:e=>void Ur(e),favoritePaths:Ie,onExtractArchive:(e,t)=>void Hi(e,t),settingsVersion:Ve,theme:Fe,onOpen:hr,onLayoutChanged:gi,onPlacesChanged:m,onRecentCleared:_i,places:p,recent:be,recentLimit:Oe,visibilityVersion:qe}):K===`settings`?(0,q.jsx)(Ah,{appInfo:v,find:qi,focusSection:C,onSearchMatches:ge,onSettingsChanged:gi}):K===`gallery`?(0,q.jsx)(H_,{platform:v?.platform,confirmDelete:V?.confirmDelete??!1,find:qi,onSearchMatches:ge,openOnSingleClick:V?.openOnSingleClick??!1,onAddToTray:e=>void Br(e),onAddFavorite:e=>void Hr(e),onRemoveFavorite:e=>void Ur(e),favoritePaths:Ie,onExtractArchive:(e,t)=>void Hi(e,t),shortcuts:H,showCheckboxes:V?.showCheckboxes??!0,selectMatchesToken:oe,onPreviewChange:br,view:Tn}):(0,q.jsx)(pm,{find:qi,onOpenLocation:hr,onShowDetails:()=>Ze(!0),platform:v?.platform,selectMatchesToken:oe,onPreviewChange:xr})]},K)]}),(K===`files`||K===`gallery`||K===`recycle`)&&(0,q.jsx)(ps,{emptyNote:e(`nothing_selected`),info:wr,onWidth:vr,open:Ye,selectionNote:Tr,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,width:Qe})]}),(0,q.jsxs)(px,{children:[(0,q.jsx)(`span`,{children:K===`files`&&G.listing?Gb(e,G.listing):``}),v?(0,q.jsxs)(lx,{children:[(0,q.jsxs)(`span`,{children:[`v`,v.version,` · `,v.platform]}),v.debug&&(0,q.jsx)(fx,{children:`debug`}),b?.available&&(0,q.jsxs)(ux,{onClick:()=>{w(`updates`),fr(`settings`)},title:e(`version_version_is_available`,{version:b.latest}),type:`button`,children:[(0,q.jsx)(dx,{}),e(`update_available`)]})]}):(0,q.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,q.jsx)(_c,{clipboardItems:zt,clipboardMove:Gt,currentDirectory:K===`files`?hn:``,items:on,onAdd:e=>void Br(e),onClear:Wr,onClose:()=>an(!1),onCopyToClipboard:e=>void Jr(e),onPosition:ei,onRemove:Vr,onTransfer:ni,position:pn,visible:$t}),ut&&(0,q.jsx)(Do,{creationOnly:!0,directory:ut.directory,menu:{x:ut.x,y:ut.y,paths:[],background:!0},onClose:()=>dt(null),onCreateFile:e=>void Nr(e),onCreateFolder:e=>void Nr(null,e),shortcuts:H}),mt&&(0,q.jsx)(Do,{allowCompression:!0,directory:Hb(mt.path)??mt.path,menu:{x:mt.x,y:mt.y,paths:[mt.path]},onAddToTray:e=>void Br(e),onAddFavorite:e=>void Hr(e),onRemoveFavorite:e=>void Ur(e),favoritePaths:Ie,onExtractArchive:(e,t)=>void Hi(e,t),onArchiveCreated:e=>{e&&lr(Hb(mt.path)??mt.path)},onClose:()=>ht(null),onCompressTo:(e,t)=>vt({paths:e,name:t}),onCopy:(e,t)=>void _t(e,t),onDelete:e=>void Ct(e,!1).then(()=>lr(Hb(mt.path)??mt.path)),onOpen:(e,t)=>t?cr(e):void ar(G.id,e),onOpenFile:e=>void Ce(e),onPaste:e=>void St(e).then(t=>{t.ok&&lr(e)}),onRefresh:()=>lr(mt.path),shortcuts:H,target:{path:mt.path,isDirectory:!0}}),gt&&(0,q.jsx)(Uo,{initialDirectory:Hb(mt?.path??gn)??gn,initialName:gt.name,onCancel:()=>vt(null),onCompress:async e=>{let t=await Vt(gt.paths,e);return!t.ok&&t.error&&za(t.error),t.ok}}),ft&&(0,q.jsx)(ho,{items:[{label:e(`extract_here`),onSelect:()=>void Ui(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Ui(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Ui(`auto`)}],onClose:()=>pt(null),x:ft.x,y:ft.y}),cn&&(0,q.jsx)(Sd,{action:cn.prompt.action,delaySeconds:cn.prompt.delaySeconds,hits:cn.prompt.hits,onCancel:()=>{cn.resolve(!1),dn(null)},onConfirm:()=>{cn.resolve(!0),dn(null)},permanent:cn.prompt.permanent},cn.id),(0,q.jsx)(Bd,{}),(0,q.jsx)(qd,{}),s&&(0,q.jsx)(yb,{code:s.code,deviceName:s.deviceName,onAccept:()=>{Wc(s.requestId,!0),c(null)},onReject:()=>{Wc(s.requestId,!1),c(null)}}),(0,q.jsx)(pb,{}),(0,q.jsx)(te,{})]})})}var qb=v.div`
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
`,Jb=v.div`
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
`,Yb=v.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Xb=v.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${lo}
`,Zb=v.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Qb=v.button`
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
`,$b=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,ex=v.span`
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
`,tx=v.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,nx=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,rx=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,ix=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?po:``}
`,ax=v.div`
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
        ${mo}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,ox=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,sx=v.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,cx=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,lx=v.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,ux=v.button`
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
`,dx=v.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,fx=v.span`
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
`,px=v.footer`
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
`;function mx({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:s,showImages:c,save:u=!1,initialName:d=``,defaultExtension:f=``,theme:p,onCancel:m,onSelect:h}){let g=o(),_=pl(`picker`),v=t===`file`,y=r??[],[S,C]=(0,R.useState)(e),[w,T]=(0,R.useState)(null),[ee,D]=(0,R.useState)(!0),[O,te]=(0,R.useState)(null),[k,A]=(0,R.useState)(()=>new Set),[j,ne]=(0,R.useState)(a??[]),[M,N]=(0,R.useState)([]),[re,P]=(0,R.useState)([]),[ie,ae]=(0,R.useState)([]),[oe,F]=(0,R.useState)([]),[se,I]=(0,R.useState)(d),[ce,le]=(0,R.useState)(null),[ue,de]=(0,R.useState)(y.length===0),[fe,pe]=(0,R.useState)(`files`),[me,he]=(0,R.useState)(0),[ge,L]=(0,R.useState)(xn),[_e,ve]=(0,R.useState)(0),[ye,be]=(0,R.useState)(0),[Se,Ce]=(0,R.useState)(0),[Te,Ee]=(0,R.useState)(null),[De,Oe]=(0,R.useState)(null),[ke,Ae]=(0,R.useState)(0),[B,Ne]=(0,R.useState)(null),[V,Pe]=(0,R.useState)(xe.imageStripHeight);(0,R.useEffect)(()=>{Xe().then(Ne,()=>Ne(null))},[]),(0,R.useEffect)(()=>{a?ne(a):je().then(ne,()=>ne([]))},[a]),(0,R.useEffect)(()=>{Me().then(N,()=>N([])),Be().then(P,()=>P([]))},[]),(0,R.useEffect)(()=>{let e=!0;return D(!0),te(null),A(new Set),u||I(v?``:x(S)),we(S||void 0,!1).then(t=>{e&&(T(t),C(t.path),u||I(v?``:x(t.path)),D(!1))},t=>{e&&(te(t instanceof Error?t.message:String(t)),D(!1))}),()=>{e=!1}},[S,me,v]),(0,R.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),L(e=>({...e,open:!0})),ve(e=>e+1);return}if(e.key===`Escape`){ge.open?(L(e=>({...e,open:!1,query:``})),be(0)):m();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Ie();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Le();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),L(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),ve(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Qe()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,R.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Ie()):(e.button===4||e.button===9)&&(e.preventDefault(),Le())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Fe=e=>{let t=e.trim();t.length!==0&&E(t)!==E(S)&&(ae(e=>[...e,S]),F([]),pe(`files`),C(t))},Ie=()=>{let e=ie.at(-1);e!==void 0&&(ae(e=>e.slice(0,-1)),F(e=>[S,...e]),C(e))},Le=()=>{let e=oe[0];e!==void 0&&(F(e=>e.slice(1)),ae(e=>[...e,S]),C(e))};(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:Ie();break;case`forward`:Le()}})});let Re=w?.path??S,H=w?.parent??(S?b(S):null);(0,R.useEffect)(()=>{l.available&&Re&&l.send({type:`fs.watch`,payload:{paths:[Re],owner:`picker`}})},[Re]),(0,R.useEffect)(()=>{if(l.available&&Re)return l.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&E(t.data.path)===E(Re)&&we(Re,!1).then(e=>{T(e);let t=new Set(e.entries.map(e=>e.fullPath));A(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Re]);let ze=(w?.entries??[]).filter(e=>e.isDirectory||v&&(ue||y.length===0||y.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Ve=w?{...w,entries:ze}:null,He=ge.open&&ge.query.length>0,Ue=(0,R.useMemo)(()=>He?ze.filter(e=>An(e.name,ge)).map(e=>e.fullPath):[],[He,ze,ge]);(0,R.useEffect)(()=>{be(0)},[ge.query,ge.matchCase,ge.regex,w?.path]);let We=Ue.length===0?-1:Math.min(ye,Ue.length-1),Ge=(0,R.useMemo)(()=>({...ge,currentPath:We>=0?Ue[We]:null}),[ge,We,Ue]),Ke=B?.defaultView??xe,qe=s??{mode:Ke.mode,iconSize:Ke.iconSize,gridSize:Ke.gridSize,sort:`name`,sortDescending:!1,columns:Ke.columns??[`type`,`size`,`modified`]},Je=(c??Ke.showImages)&&qe.mode===`list`,Ye=se.trim(),Ze=Ye.length>0?gx(Ye)?Ye:hx(Re,Ye):null,Qe=()=>{if(ee||O)return;if(u){let e=Ye;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){za(g(`the_file_name_is_not_valid`));return}let t=f.length>0&&!/\.[^.]*$/.test(e)?f.startsWith(`.`)?f:`.${f}`:``,n=gx(e)?e+t:hx(Re,e+t);U([n]).then(e=>e[0]?.exists?le(n):h([n]),()=>h([n]));return}let e=n?[...k]:[...k].slice(0,1);e.length>0?h(e):Ze!==null&&Ye!==x(Re)?h([Ze]):!v&&Re&&h([Re])},$e=(0,R.useCallback)(e=>{A(new Set(e)),e.length===1?I(x(e[0])):u||I(e.length===0&&!v?x(Re):``)},[Re,v,u]),et=e=>{w?.entries.find(t=>t.fullPath===e)?.isDirectory?Fe(e):u?I(x(e)):v&&h([e])},tt=e=>I(e),nt=async e=>{let t=Te;if(Ee(null),!t||!Re)return;let n=e===null?await Tt(Re):await kt(Re,e);n.ok&&n.path!==null&&(L(e=>({...e,open:!1,query:``})),e!==null&&de(!0),he(e=>e+1),window.setTimeout(()=>{Oe(n.path),Ae(e=>e+1)},120))},rt=()=>{L(e=>({...e,open:!0})),ve(e=>e+1)},it=e=>{be(t=>Ue.length===0?0:(t+e+Ue.length)%Ue.length)},at=e=>(0,q.jsxs)(Ex,{children:[(0,q.jsxs)(Dx,{children:[(0,q.jsx)(Ox,{children:g(v||u?`file_name`:`folder_3`)}),(0,q.jsx)(kx,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Qe())},spellCheck:!1,value:se}),v&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ox,{children:g(`files_of_type`)}),(0,q.jsx)(Ao,{onChange:e=>de(e===`all`),options:[...y.length>0?[{value:`supported`,label:`${g(`supported_files`)} (${y.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${g(`all_files`)} (*.*)`}],value:ue?`all`:`supported`})]})]}),(0,q.jsxs)(Ax,{children:[(0,q.jsx)(jx,{onClick:m,type:`button`,children:g(`cancel`)}),(0,q.jsxs)(jx,{$primary:!0,disabled:ee||O!==null||(u||v&&k.size===0)&&Ye.length===0,onClick:Qe,type:`button`,children:[(0,q.jsx)(Pi,{size:12}),g(u?`save_as`:v?`select_this_file`:`select_this_folder`)]})]}),(0,q.jsx)(ns,{confirmLabel:g(`overwrite`),message:g(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>le(null),onConfirm:()=>{let e=ce;le(null),e&&h([e])},open:ce!==null,title:g(`overwrite`)})]}),ot=(0,q.jsxs)(vx,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,q.jsxs)(yx,{children:[(0,q.jsxs)(bx,{children:[(0,q.jsx)(_i,{size:16}),g(u?`save_as`:v?`choose_a_file`:`choose_a_folder`)]}),(0,q.jsx)(xx,{onClick:m,title:g(`cancel`),type:`button`,children:(0,q.jsx)(Fi,{size:12})})]}),(0,q.jsxs)(Sx,{children:[(0,q.jsx)(nv,{activeKind:fe===`overview`?`home`:fe===`gallery`?`gallery`:`files`,currentPath:Re,drives:M,hiddenViews:v?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:j.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Fe(e),onOpenView:e=>{e===`home`?(A(new Set),I(v?``:x(Re)),pe(`overview`)):e===`gallery`&&v&&(A(new Set),I(``),pe(`gallery`))},places:j,recent:re,recentLimit:10}),(0,q.jsx)(Cx,{children:fe===`overview`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Bp,{drives:M,theme:p,historyVersion:0,homePath:j.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Fe(e),onPick:v?e=>h([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:$e,places:j,readOnly:!0,recent:re,recentLimit:10,visibilityVersion:0}),at(I)]}):fe===`gallery`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(H_,{onPick:e=>h([e]),onSelectionChange:$e,showCheckboxes:B?.showCheckboxes??!0,view:{...z,columns:[]}}),at(I)]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(wx,{children:[(0,q.jsx)(Tx,{disabled:ie.length===0,onClick:Ie,title:g(`back`),type:`button`,children:(0,q.jsx)(wi,{})}),(0,q.jsx)(Tx,{disabled:oe.length===0,onClick:Le,title:g(`forward`),type:`button`,children:(0,q.jsx)(Ti,{})}),(0,q.jsx)(Tx,{disabled:!H,onClick:()=>H&&Fe(H),title:g(`up_one_level`),type:`button`,children:(0,q.jsx)(xi,{})}),(0,q.jsx)(Xp,{onNavigate:Fe,path:Re}),(0,q.jsx)(Tx,{onClick:e=>Ee({x:e.clientX,y:e.clientY}),title:g(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(Ci,{})}),(0,q.jsx)(Tx,{onClick:rt,title:g(`search`),type:`button`,children:(0,q.jsx)(bi,{})}),_.available&&(0,q.jsx)(Tx,{onClick:e=>_.open(e.clientX,e.clientY),title:g(`selection_menu`),type:`button`,children:(0,q.jsx)(Da,{})})]}),ge.open&&(0,q.jsx)(rf,{current:We,focusToken:_e,matchCase:ge.matchCase,mode:ge.mode,onClose:()=>{L(e=>({...e,open:!1,query:``})),be(0)},onMatchCase:()=>L(e=>({...e,matchCase:!e.matchCase})),onMode:()=>L(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>it(1),onPrevious:()=>it(-1),onQuery:e=>L(t=>({...t,query:e})),onRegex:()=>L(e=>({...e,regex:!e.regex})),query:ge.query,regex:ge.regex,total:Ue.length,onSelectMatches:()=>Ce(e=>e+1)}),(0,q.jsx)(Dl,{allowBackgroundMenu:!0,confirmDelete:B?.confirmDelete??!1,enableShortcuts:!0,error:O,find:Ge,selectMatchesToken:Se,imageStripHeight:V,loading:ee,listing:Ve,onImageStripHeight:Pe,onOpen:et,onOpenFile:et,onRefresh:()=>he(e=>e+1),onSelectionChange:$e,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:B?.openOnSingleClick??!1,refreshToken:me,pendingRename:De,pendingRenameToken:ke,showCheckboxes:B?.showCheckboxes??!0,showDetails:!1,showImages:Je,singleSelect:!n,view:qe}),at(tt)]})})]}),Te&&(0,q.jsx)(Do,{creationOnly:!0,directory:Re,menu:{x:Te.x,y:Te.y,paths:[],background:!0},onClose:()=>Ee(null),onCreateFile:v?e=>void nt(e):void 0,onCreateFolder:()=>void nt(null),shortcuts:Wt})]});return i?ot:(0,Za.createPortal)((0,q.jsx)(_x,{onPointerDown:e=>{e.target===e.currentTarget&&m()},children:ot}),document.body)}function hx(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function gx(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var _x=v.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${po}
`,vx=v.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Qa}
    ${({$inline:e})=>e?``:so}
`,yx=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,bx=v.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,xx=v.button`
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
`,Sx=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Cx=v.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,wx=v.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Tx=v.button`
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
`,Ex=v.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,Dx=v.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Ox=v.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,kx=v.input`
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
`,Ax=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,jx=v.button`
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
`;function Mx({mode:e,save:t=!1,multiple:n,extensions:i,initial:a,initialName:s=``,defaultExtension:c=``}){let d=o(),p=u(),[m,h]=(0,R.useState)(null),_=f(g(m?.themeMode)),[v,y]=(0,R.useState)({}),[b,x]=(0,R.useState)(null),[S,C]=(0,R.useState)(null),[w,T]=(0,R.useState)(null),E=(0,R.useRef)(0);(0,R.useEffect)(()=>{l.send({type:`app.ready`})},[]),(0,R.useEffect)(()=>(ye(e=>new Promise(t=>{T({id:++E.current,prompt:e,resolve:t})})),()=>ye(null)),[]),(0,R.useEffect)(()=>{Xe().then(h,()=>void 0)},[]),(0,R.useEffect)(()=>{r(m?.accentColor,m?.secondaryColor,_)},[m?.accentColor,m?.secondaryColor,_]);let ee=m?.defaultView??xe,D={mode:v.mode??ee.mode,iconSize:v.iconSize??ee.iconSize,gridSize:v.gridSize??ee.gridSize,sort:`name`,sortDescending:!1,columns:b??ee.columns??[`type`,`size`,`modified`]},O=e=>y(t=>({...t,...e}));return(0,q.jsxs)(Nx,{children:[(0,q.jsxs)(Px,{children:[(0,q.jsx)(Fx,{children:(0,q.jsx)(Ri,{size:17})}),(0,q.jsx)(Ix,{...p,children:d(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,q.jsx)(Ay,{onChange:O,onColumns:x,onShowImages:C,showImages:S??ee.showImages,view:D}),(0,q.jsx)(Lx,{children:(0,q.jsx)(Rx,{onClick:()=>l.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:d(`cancel`),type:`button`,children:(0,q.jsx)(Fi,{size:12})})})]}),(0,q.jsx)(zx,{children:(0,q.jsx)(mx,{extensions:i,initial:a,initialName:s,defaultExtension:c,inline:!0,mode:e,multiple:n,onCancel:()=>l.send({type:`pick.cancel`}),onSelect:e=>l.send({type:`pick.submit`,payload:{paths:e}}),save:t,showImages:S??ee.showImages,fileView:D,theme:_})}),w&&(0,q.jsx)(Sd,{action:w.prompt.action,delaySeconds:w.prompt.delaySeconds,hits:w.prompt.hits,onCancel:()=>{w.resolve(!1),T(null)},onConfirm:()=>{w.resolve(!0),T(null)},permanent:w.prompt.permanent},w.id),(0,q.jsx)(Bd,{}),(0,q.jsx)(te,{})]})}var Nx=v.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,Px=v.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,Fx=v.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Ix=v.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Lx=v.div`
    display: flex;
    flex-shrink: 0;
`,Rx=v.button`
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
`,zx=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;document.documentElement.dataset.theme=i()?`dark`:`light`;var Bx=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Bx),window.addEventListener(`pagehide`,Jn);var Vx=document.getElementById(`root`),Hx=new URLSearchParams(window.location.search),Ux=Hx.get(`picker`),Wx=Hx.get(`filter`)??``;Vx&&(Wn(),(0,_e.createRoot)(Vx).render((0,q.jsx)(R.StrictMode,{children:(0,q.jsx)(d,{children:Ux===`folder`||Ux===`file`||Ux===`save`?(0,q.jsx)(Mx,{defaultExtension:Hx.get(`ext`)??``,extensions:Wx?Wx.split(`;`).filter(Boolean):[],initial:Hx.get(`initial`)??``,initialName:Hx.get(`name`)??``,mode:Ux===`folder`?`folder`:`file`,multiple:Hx.get(`multiple`)===`1`,save:Ux===`save`}):(0,q.jsx)(Kb,{})})})));