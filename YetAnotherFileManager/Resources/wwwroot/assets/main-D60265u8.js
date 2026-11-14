import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{A as t,B as n,C as r,D as i,E as a,F as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,R as m,S as h,T as g,U as _,V as v,W as y,_ as b,a as x,b as ee,c as S,d as te,f as C,g as w,h as ne,i as T,j as re,k as E,l as D,m as O,n as k,o as A,p as ie,r as j,s as ae,u as oe,v as se,w as M,x as ce,y as N}from"./format-DDANH-1L.js";async function P(){return l.available?await l.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function le(e){l.available?await l.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function ue(){l.available&&await ve(`update.openLogs`)}async function de(e){l.available?await ve(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function fe(){return l.available?await l.request(`update.status`)??null:null}async function pe(){return l.available?await l.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function me(){return l.available?await l.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function he(){await ve(`update.cancel`)}async function ge(){return l.available?await l.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function _e(e){return l.on(t=>{t.type===`update.progress`&&e(t.data)})}function F(e){return l.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function ve(e,t,n=3e4){let r=await l.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var I=e(y(),1),ye=s(),be=null;function xe(e){be=e}function L(e){return be?be(e):Promise.resolve(!1)}var Se={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},Ce={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function we(e,t){return l.available?await l.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Te(e){return l.available?(await l.request(`fs.open`,{path:e})).ok:!1}async function Ee(e,t=!0,n=!1,r=0,i){return await l.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function De(e,t,n=0,r){let i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await L({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function Oe(e,t=0,n){return await l.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function ke(e){l.available&&e.length!==0&&await l.request(`fs.archive.release`,{paths:e})}async function Ae(e){return l.available?await l.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function je(e,t){return l.available?(await l.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function R(e,t,n,r){return l.available?(await l.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Me(e,t=!1){return l.available?await l.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ne(){return(await l.request(`fs.places`)).places}async function Pe(){return(await l.request(`fs.drives`)).drives}async function z(e=!1){return(await l.request(`fs.recycle`,{includeOrphans:e})).entries}async function Fe(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await L({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await l.request(e,{...t,confirm:r.token})}return r}async function B(e=!1){let t=await l.request(`fs.recycle.empty`,{includeOrphans:e});await Fe(`fs.recycle.empty`,{includeOrphans:e},t)}async function Ie(e){return!l.available||e.length===0?{ok:!1,done:0}:await l.request(`fs.recycle.restoreMany`,{ids:e})}async function Le(e){if(!l.available||e.length===0)return{ok:!1,done:0};let t=await l.request(`fs.recycle.deleteMany`,{ids:e}),n=await Fe(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Re(e){l.available&&e&&await l.request(`fs.recycle.properties`,{id:e})}async function V(){if(!l.available)return{entries:[],cancelled:!0,failed:!1};let e=await l.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function ze(){return l.available?(await l.request(`fs.recycle.admin.purge`)).ok:!1}async function Be(e=0,t=150,n=!1){return l.available?await l.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Ve(){return l.available?(await l.request(`fs.recent`)).entries:[]}async function He(){return l.available?(await l.request(`fs.frequent`)).entries:[]}async function Ue(e){l.available&&await l.request(`fs.frequent.record`,{path:e})}async function We(){await l.request(`fs.recent.clear`)}async function Ge(){await l.request(`fs.frequent.clear`)}async function Ke(){return await l.request(`fs.visibility`)}async function qe(){return await l.request(`fs.hidden.toggle`)}async function Je(){return l.available?await l.request(`fs.index.tasks`):{count:0,directories:[]}}var Ye={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showHidden:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,trayAutoShow:!0,accentColor:null,secondaryColor:null,themeMode:`system`,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Xe(){if(!l.available)return Ye;let e=await l.request(`settings.get`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showHidden:e?.showHidden??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,trayAutoShow:e?.trayAutoShow??!0,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,themeMode:g(e?.themeMode),backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function Ze(){return l.available?(await l.request(`app.protection.defaults`)).paths??[]:[]}var Qe={registered:!1,pathMatches:!1,registeredPath:null},$e={registered:!1,pathMatches:!1,registeredPath:null};async function et(){return l.available?await l.request(`app.defaultManager.status`):$e}async function tt(e){return l.available?await l.request(`app.defaultManager.set`,{enabled:e}):$e}async function nt(){return l.available?await l.request(`app.archive.status`):Qe}async function rt(){return l.available?await l.request(`app.archive.register`):Qe}async function it(){return l.available?await l.request(`app.archive.unregister`):Qe}async function at(e){if(!l.available)return e;let t=await l.request(`settings.save`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showHidden:t?.showHidden??e.showHidden,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,trayAutoShow:t?.trayAutoShow??e.trayAutoShow,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,themeMode:g(t?.themeMode??e.themeMode),backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function ot(e,t){l.available&&await l.request(`app.tabs.set`,{tabs:e,active:t})}async function st(e,t,n){return l.available?(await l.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var ct={managed:0,private:0,workingSet:0,available:0};async function lt(){return l.available?await l.request(`app.memory`):ct}async function ut(){return l.available?await l.request(`app.memory.trim`):ct}var dt={registered:!1,pathMatches:!1,registeredPath:null};async function ft(){return l.available?await l.request(`app.scheme`):dt}async function H(e){return l.available?await l.request(`app.scheme.set`,{enabled:e}):dt}var pt={supported:!1,mode:`none`,active:!1,error:null};async function mt(){return l.available?await l.request(`app.startup`):pt}async function ht(e){return l.available?await l.request(`app.startup.set`,{mode:e}):pt}async function gt(e,t=!1){return!l.available||e.length===0?!1:(await l.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function _t(){return l.available?(await l.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function vt(){return l.available?await l.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function yt(e,t,n){return!l.available||e.length===0?{ok:!1,error:`nothing_to_transfer`,created:[]}:await bt({action:n?`move`:`write`},r=>l.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:r}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function bt(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await L({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function U(e){return!l.available||e.length===0?[]:(await l.request(`fs.paths.info`,{paths:e})).entries}async function xt(e,t=!1){return l.available?await bt({action:t?`move`:`write`},t=>l.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function St(e,t=!1){if(!l.available||e.length===0)return{ok:!1,error:null};let n=await l.request(`fs.operation.delete`,{paths:e,permanent:t}),r=!1;for(let i=0;i<2&&n.required&&n.token&&n.protected?.length;i++){if(!await L({hits:n.protected,delaySeconds:n.delaySeconds??5,action:`delete`,permanent:t})){r=!0;break}n=await l.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return r?{...n,ok:!1,cancelled:!0}:n}async function Ct(e,t){return l.available?await bt({action:`rename`},n=>l.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function wt(e,t=!1){return l.available?await l.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Tt(e){return l.available?(await l.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Et(e,t){return l.available?await l.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Dt(e,t,n){return l.available?await l.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Ot(e,t){return l.available?await l.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function kt(e){l.available&&e.length!==0&&await l.request(`fs.operation.properties`,{paths:e})}async function At(e){l.available&&await l.request(`fs.operation.openWith`,{path:e})}async function jt(e){l.available&&await l.request(`fs.operation.terminal`,{path:e})}async function Mt(e){return l.available?await l.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Nt(e,t){return l.available?(await l.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Pt(){return l.available?await l.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Ft(){return l.available?await l.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function It(e){l.available&&await l.request(`fs.operation.showInExplorer`,{path:e})}async function Lt(e){return!l.available||e.length===0?{verbs:[],safe:!0}:await l.request(`shell.verbs`,{paths:e})}async function Rt(e,t,n,r){l.available&&e.length!==0&&await l.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function zt(e,t){return!l.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await l.request(`fs.operation.compress`,{...t,paths:e})}async function Bt(){return l.available?(await l.request(`app.tasks`)).tasks:[]}async function Vt(){l.available&&await l.request(`app.tasks.clear`)}var Ht={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Ut=Ht.openInNewTab;function Wt(e){Ut=e.trim()||Ht.openInNewTab}function Gt(e){let t=Ut.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Kt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function qt(e){return e.split(`+`).filter(Boolean).map(e=>Jt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Jt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Yt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Xt=new Map;function Zt(e){return w(C(e)?T(e):e)}function Qt(e){return Xt.get(Zt(e))}function $t(e,t){Xt.set(Zt(e),t)}function en(e){Xt.delete(Zt(e))}function tn(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var nn=new Map,rn=new Map,W=new Set,an=0;function on(){nn.clear(),rn.clear(),an+=1,W.forEach(e=>e())}function sn(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...nn.keys()])e.toLowerCase().includes(t)&&(nn.delete(e),n=!0);n&&(an+=1,W.forEach(e=>e()))}function cn(){let[e,t]=(0,I.useState)(an);return(0,I.useEffect)(()=>{let e=()=>t(an);return W.add(e),()=>{W.delete(e)}},[]),e}var ln=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function un(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return ln.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function dn(e,t,n=!1){let r=cn(),i=e===null?``:un(e,t,n),[a,o]=(0,I.useState)(()=>nn.get(i)??null);return(0,I.useEffect)(()=>{if(e===null){o(null);return}if(!l.available)return;if(nn.has(i)){o(nn.get(i)??null);return}let r=!0;return l.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?nn.set(i,e.dataUrl):nn.delete(i),r&&o(e.dataUrl)},()=>{nn.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function G(e){let[t,n]=(0,I.useState)(e);return(0,I.useEffect)(()=>{if(!e){n(null);return}if(!C(e)){n(e);return}let t=!0;return Oe(e,0,Qt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function K(e){let t=cn(),[n,r]=(0,I.useState)(()=>e?rn.get(e)??null:null);return(0,I.useEffect)(()=>{if(!e||!l.available){r(null);return}if(rn.has(e)){r(rn.get(e)??null);return}let t=!0;return l.request(`fs.iconFile`,{path:e}).then(n=>{rn.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{rn.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var q=null,fn=null;function pn(){return q===null?l.available?(fn??=l.request(`app.thumbnails`).then(e=>(q=e.base??``,q),()=>(q=``,``)),fn):Promise.resolve(``):Promise.resolve(q)}function mn(e,t=128,n=0){let[r,i]=(0,I.useState)(q);return(0,I.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return pn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${hn}`}var hn=2;function gn(e,t=0,n=``){let[r,i]=(0,I.useState)(q);if((0,I.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return pn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function _n(e,t=0){let[n,r]=(0,I.useState)(q);return(0,I.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return pn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var vn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},yn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function bn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Cn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=En(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var xn=`\0`,Sn=``;function Cn(e){return e.query!==xn&&(xn=e.query,Sn=e.query.toLowerCase()),Sn}var wn=`\0`,Tn=null;function En(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===wn)return Tn;wn=t;try{Tn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Tn=null}return Tn}function Dn(e,t){return bn(e,t)!==null}var On=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],kn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function An(e){let t=Mn(e);for(let{kind:e}of On)if(kn[e].has(t))return e;return null}function jn(e){return An(e)!==null}function Mn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Nn=(0,I.createContext)({places:{},useIcons:!1}),Pn=Nn.Provider;function Fn(){return(0,I.useContext)(Nn)}function In(e,t){return e.places[w(t)]}function Ln(e,t,n){return In(e,t)?.name||n}var Rn=new Map,zn=new Map,Bn=0;function Vn(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&Rn.set(e,t)}catch{}}function Hn(e){return l.available?Rn.get(e)??null:localStorage.getItem(e)}function Un(e,t){l.available?(Rn.set(e,t),zn.set(e,t),window.clearTimeout(Bn),Bn=window.setTimeout(Wn,200)):localStorage.setItem(e,t)}function Wn(){if(Bn=0,zn.size===0)return;let e=Object.fromEntries(zn);zn.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Gn(){if(zn.size===0)return;let e=Object.fromEntries(zn);zn.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Kn(e,t){let n=Hn(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function qn(e,t){Un(e,String(t))}function Jn(e){try{return JSON.parse(Hn(e)??`null`)}catch{return null}}function Yn(e,t){Un(e,JSON.stringify(t))}var J=c(),Xn=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,J.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,J.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Zn=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Qn=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M14 3v4h4`})]}),$n=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,J.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,J.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),er=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,J.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),tr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 19V5`}),(0,J.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),nr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,J.jsx)(`path`,{d:`M20 4v7h-7`})]}),rr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 5v14`}),(0,J.jsx)(`path`,{d:`M5 12h14`})]}),ir=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M19 12H5`}),(0,J.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),ar=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M5 12h14`}),(0,J.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),or=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,J.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),sr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,J.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),cr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,J.jsx)(`path`,{d:`M12 12v8`})]}),lr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,J.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),ur=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,J.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,J.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,J.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),dr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,J.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),fr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),pr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 7h16`}),(0,J.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,J.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,J.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),mr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),hr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),gr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,J.jsxs)(`defs`,{children:[(0,J.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,J.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,J.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,J.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,J.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,J.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,J.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,J.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,J.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,J.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),_r=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M15 3v4h4`}),(0,J.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),vr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,J.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,J.jsx)(`path`,{d:`m13 5-2 14`})]}),yr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,J.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,J.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),br=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,J.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),xr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,J.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,J.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Sr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Cr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M15 3v4h4`}),(0,J.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),wr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),Tr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,J.jsx)(`path`,{d:`M8.5 14h7`})]}),Er=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,J.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,J.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Dr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Or=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),kr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Ar=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M15 3v4h4`}),(0,J.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),jr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Mr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,J.jsx)(`path`,{d:`m14 6 4 4`})]}),Nr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,J.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Pr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,J.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Fr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 4v10`}),(0,J.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,J.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Ir=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,J.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,J.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Lr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,J.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,J.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Rr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,J.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),zr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Br=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,J.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Vr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,J.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,J.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Hr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Ur=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,J.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,J.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,J.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Wr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,J.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Gr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,J.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Kr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,J.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,J.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),qr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,J.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Jr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,J.jsx)(`path`,{d:`M3.5 12h17`}),(0,J.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Yr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Xr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,J.jsx)(`path`,{d:`M8.5 10.5h7`})]}),Zr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,J.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,J.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),Qr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,J.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),$r=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,J.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,J.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),ei=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,J.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),ti=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 16V4`}),(0,J.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,J.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),ni=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),ri=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,J.jsx)(`path`,{d:`M12 4v16`})]}),ii=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,J.jsx)(`path`,{d:`M15 4v16`})]}),ai=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,J.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,J.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,J.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),oi=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,J.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,J.jsx)(`path`,{d:`M12 14v2`})]}),si=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,J.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),ci=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,J.jsx)(`circle`,{cx:12,cy:12,r:3})]}),li=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,J.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,J.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,J.jsx)(`path`,{d:`m3 3 18 18`})]});function Y(e,t){return({size:n=t,...r})=>(0,J.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var ui=Y(Xn,18),di=Y(Zn,18),fi=Y(Qn,18),pi=Y($n,18),mi=Y(er,16),hi=Y(tr,16),gi=Y(nr,16),_i=Y(rr,16),vi=Y(ir,16),yi=Y(ar,16),bi=Y(or,12),xi=Y(sr,18),Si=Y(cr,14),Ci=Y(lr,14),wi=Y(ur,14),Ti=Y(dr,18),Ei=Y(fr,18),Di=Y(pr,18),Oi=Y(mr,14),ki=Y(hr,14),Ai=Y(ci,14),ji=Y(li,14),Mi=Y(gr,18),Ni=Y(_r,18),Pi=Y(vr,18),Fi=Y(yr,18),Ii=Y(br,18),Li=Y(xr,18),Ri=Y(Sr,18),zi=Y(Cr,18),Bi=Y(wr,18),Vi=Y(Tr,18),Hi=Y(Er,18),Ui=Y(Dr,18),Wi=Y(Or,18),Gi=Y(kr,18),Ki=Y(Ar,18),qi=Y(jr,18),Ji=Y(Mr,16),Yi=Y(Nr,18),Xi=Y(Pr,18),Zi=Y(Fr,18),Qi=Y(Ir,18),$i=Y(Lr,18),ea=Y(Rr,18),ta=Y(zr,18),na=Y(Br,18),ra=Y(Vr,18),ia=Y(Hr,18),aa=Y(Ur,18),oa=Y(Wr,18),sa=Y(Gr,18),ca=Y(Kr,18),la=Y(qr,18),ua=Y(Jr,18),da=Y(Yr,18),fa=Y(Xr,14),pa=Y(Zr,14),ma=Y(Qr,16),ha=Y($r,16),ga=Y(ei,16),_a=Y(ti,16),va=Y(ni,16),ya=Y(ri,16),ba=Y(ii,16),xa=Y(ai,16),Sa=Y(oi,14),Ca=Y(si,14);async function wa(e,t,n){return l.available?(await l.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function Ta(e){return wa(`folder`,[],e??``)}function Ea(e){return wa(`file`,e??[],``)}var Da=null,Oa=null;function ka(e){Da=e}function Aa(e){return Da?Da(e):Promise.resolve()}function ja(e){Oa=e}function Ma(e,t=!1){return Oa?Oa(e,t):Promise.resolve(null)}var Na=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],Pa=null,Fa=0,Ia=new Set;function La(){Fa+=1;for(let e of Ia)e()}function Ra(e){return Ia.add(e),()=>Ia.delete(e)}function za(){return Fa}function Ba(e){Pa=e,La()}function Va(){return(0,I.useSyncExternalStore)(Ra,za,za),Pa}var Ha=_(),Ua=n`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Wa=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ga=m`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ka=m`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,qa=m`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Ja=m`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Ya=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Xa=m`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Za=m`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Qa=n`animation: ${Wa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,$a=n`animation: ${Ga} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,eo=n`animation: ${Ka} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${qa} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var to=n`animation: ${Ja} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,no=n`animation: ${Ya} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,ro=n`animation: ${Xa} 140ms ease-out;`,io=n`animation: ${Za} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function ao({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,I.useState)([]),s=(0,I.useRef)(void 0);if((0,I.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,I.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,J.jsx)(go,{},`group-rule-${i}`)),n.push((0,J.jsx)(ho,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,J.jsx)(go,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,J.jsxs)(fo,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,J.jsx)(po,{children:e.loading?(0,J.jsx)(_o,{}):e.icon}),(0,J.jsx)(mo,{children:e.label}),a?(0,J.jsx)(bi,{size:12}):e.checked&&(0,J.jsx)(Oi,{size:12})]},`${e.label}-${i}`))}),n};return(0,Ha.createPortal)((0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(oo,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(so,{children:r.map((e,t)=>(0,J.jsxs)(co,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,J.jsx)(lo,{children:e.icon}),(0,J.jsx)(uo,{children:e.label})]},`${e.label}-${t}`))}),(0,J.jsx)(go,{})]}),m(n,0)]}),a.map((e,t)=>(0,J.jsx)(oo,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var oo=v.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Ua}
    ${$a}
    transform-origin: top left;
`,so=v.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,co=v.button`
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
`,lo=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,uo=v.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fo=v.button`
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
`,po=v.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,mo=v.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ho=v.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,go=v.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,_o=v.span`
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
`;function vo({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:s,onOpenFile:c,onRename:l,onDelete:u,onCopy:d,onPaste:f,onCreateFolder:p,onCreateFile:m,creationOnly:h=!1,onRefresh:g,onAddToTray:_,onAddFavorite:v,onRemoveFavorite:y,favoritePaths:b,onExtractArchive:ee,allowCompression:S=!1,onCompressTo:te,onArchiveCreated:ne}){let T=o(),re=Va(),E=C(t),[D,O]=(0,I.useState)({verbs:[],safe:!0,loading:!1}),[k,A]=(0,I.useState)({recommended:[],other:[],loading:!1}),[j,ae]=(0,I.useState)(null),oe=(0,I.useRef)(0),se=(0,I.useRef)(0),M=e?.paths.length===1,ce=e?.background?t?[t]:[]:e?.paths??[],N=e?.background?t||null:M&&n?.isDirectory?n.path:null;if((0,I.useEffect)(()=>{if(!e){O({verbs:[],safe:!0,loading:!1}),A({recommended:[],other:[],loading:!1});return}let t=++oe.current;O({verbs:[],safe:!0,loading:ce.length>0&&!E}),ce.length>0&&!E&&Lt(ce).then(e=>{oe.current===t&&O({...e,loading:!1})},()=>{oe.current===t&&O({verbs:[],safe:!0,loading:!1})});let r=++se.current;!E&&M&&n?(A({recommended:[],other:[],loading:!0}),Mt(n.path).then(e=>{se.current===r&&A({...e,loading:!1})},()=>{se.current===r&&A({recommended:[],other:[],loading:!1})})):A({recommended:[],other:[],loading:!1})},[e,M,n?.path,n?.isDirectory,ce.length,E]),(0,I.useEffect)(()=>{if(!e||E||!N){ae(null);return}let t=!0;return Tt(N).then(e=>{t&&ae(e)},()=>{t&&ae(null)}),()=>{t=!1}},[e,N,E]),!e)return null;let P=[],le=[],ue=new Set((b??[]).map(w)),de=e.background?t?[t]:[]:e.paths,fe=de.length>0&&de.every(e=>ue.has(w(e))),pe=()=>n?me(n.path,n.isDirectory):`Archive`,me=(e,t)=>{let n=x(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},he=async(e,n=pe())=>{let r=await zt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?ne?.(r.path,!0):Aa(r.error??T(`could_not_create_the_archive`))},ge=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},_e=async()=>{if(!N||j===null)return;let e=await Et(N,!j);e.ok?(ae(e.enabled),g?.()):Aa(e.error??T(`could_not_change_the_case_sensitivity`))},F=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Dt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Dt(e,t,`${a}\\${bo(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?g?.():Aa(o.error??T(`could_not_create_the_link`))},ve=async e=>{if(!n)return;let r=await Ta(t);r&&await F(e,n.path,r,x(n.path),e.endsWith(`-copy`))},ye=async e=>{let n=re?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=w(a)===w(t);await F(n,r.path,t,x(r.path),i&&!o)}},be=async()=>{let t=(await U(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Ba({paths:t})},xe=()=>{let e=re?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:T(`cancel_selected_link`),icon:(0,J.jsx)(ki,{size:14}),onSelect:()=>Ba(null)},...t?[{label:T(`hard_link`),icon:(0,J.jsx)(fi,{size:14}),separatorBefore:!0,onSelect:()=>void ye(`hard`)}]:[],{label:T(`symbolic_link`),icon:(0,J.jsx)(fi,{size:14}),separatorBefore:!t,onSelect:()=>void ye(`symbolic-file`)},...n?[{label:T(`directory_junction`),icon:(0,J.jsx)(di,{size:14}),onSelect:()=>void ye(`junction`)},{label:T(`smart_copy`),icon:(0,J.jsx)(ma,{size:14}),separatorBefore:!0,onSelect:()=>void ye(`smart-copy`)},{label:T(`smart_mirror`),icon:(0,J.jsx)(ma,{size:14}),onSelect:()=>void ye(`smart-mirror`)},{label:T(`multi_version_smart_copy`),icon:(0,J.jsx)(ma,{size:14}),onSelect:()=>void ye(`multi-version-smart-copy`)},{label:T(`hardlink_copy`),icon:(0,J.jsx)(ma,{size:14}),separatorBefore:!0,onSelect:()=>void ye(`hard-copy`)},{label:T(`symbolic_link_copy`),icon:(0,J.jsx)(ma,{size:14}),onSelect:()=>void ye(`symbolic-copy`)}]:[]]};if(e.background){if(p&&le.push({label:T(`new_folder`),icon:(0,J.jsx)(_i,{size:16}),shortcut:qt(r.newFolder),onSelect:p}),m||p){let e=[];p&&(e.push({label:T(`folder`),icon:(0,J.jsx)(di,{size:14}),onSelect:()=>p(!1)}),E||e.push({label:T(`case_sensitive_folder`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>p(!0)})),m&&e.push(...Na.map((e,t)=>({label:`${T(e.label)} (${e.extension})`,icon:(0,J.jsx)(fi,{size:14}),separatorBefore:t===0,onSelect:()=>m(e.extension)}))),P.push({label:T(`new`),icon:(0,J.jsx)(_i,{size:14}),children:e,onSelect:()=>void 0})}if(E||P.push({label:T(`create_link`),icon:(0,J.jsx)(_a,{size:14}),disabled:!re,children:xe(),onSelect:()=>void 0}),h)return(0,J.jsx)(ao,{items:P,onClose:a,quick:le,x:e.x,y:e.y});!E&&s&&P.push({label:T(`open_in_new_tab`),icon:(0,J.jsx)(_i,{size:14}),onSelect:()=>s(t,!0)}),P.push({label:T(`copy_as_path`),icon:(0,J.jsx)(ma,{size:14}),onSelect:()=>void ge([t])}),_&&P.push({label:T(`add_to_file_tray`),icon:(0,J.jsx)(la,{size:14}),onSelect:()=>_([t])}),!E&&(fe?y:v)&&P.push({label:T(fe?`remove_from_favorites`:`add_to_favorites`),icon:fe?(0,J.jsx)(fa,{size:14}):(0,J.jsx)(da,{size:14}),onSelect:()=>fe?y?.([t]):v?.([t])}),!E&&j!==null&&P.push({label:T(`case_sensitive_names`),icon:(0,J.jsx)(pa,{size:14}),checked:j,onSelect:()=>void _e()}),!E&&S&&(P.push({label:T(`open_in_terminal`),icon:(0,J.jsx)(sa,{size:14}),onSelect:()=>void jt(t)}),P.push({label:T(`show_in_explorer`),icon:(0,J.jsx)(di,{size:14}),separatorBefore:!0,onSelect:()=>void It(t)})),f&&le.push({label:T(`paste`),icon:(0,J.jsx)(ga,{size:16}),disabled:!i,shortcut:qt(r.paste),onSelect:()=>f(t)}),E||le.push({label:T(`properties`),icon:(0,J.jsx)(xi,{size:16}),shortcut:qt(r.properties),onSelect:()=>void kt([t])})}else{if(s&&P.push({label:T(`open`),icon:(0,J.jsx)(yi,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&c?.(n.path)}}),n?.isDirectory&&(s&&P.push({label:T(`open_in_new_tab`),icon:(0,J.jsx)(_i,{size:14}),onSelect:()=>s(n.path,!0)}),f&&P.push({label:T(`paste_into_folder`),icon:(0,J.jsx)(ga,{size:14}),disabled:!i,onSelect:()=>f(n.path)}),E||P.push({label:T(`open_in_terminal`),icon:(0,J.jsx)(sa,{size:14}),onSelect:()=>void jt(n.path)})),!E&&M&&n&&!n.isDirectory&&ie(n.path)&&ee&&P.push({label:T(`extract_archive`),icon:(0,J.jsx)(Ri,{size:14}),separatorBefore:!0,children:[{label:T(`extract_here`),icon:(0,J.jsx)(Ri,{size:14}),onSelect:()=>ee(n.path,`here`)},{label:T(`extract_to_a_folder_named_after_the_archive`),icon:(0,J.jsx)(Ri,{size:14}),onSelect:()=>ee(n.path,`named`)},{label:T(`auto_extract_to_the_current_folder`),icon:(0,J.jsx)(Ri,{size:14}),onSelect:()=>ee(n.path,`auto`)},{label:T(`extract_to`),icon:(0,J.jsx)(di,{size:14}),separatorBefore:!0,onSelect:()=>ee(n.path,`choose`)}],onSelect:()=>void 0}),!E&&M&&n){let e=[];if(k.loading)e.push({label:T(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of k.recommended)e.push({label:t.name,group:T(`suggested_apps`),icon:t.icon?(0,J.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,J.jsx)(Bi,{size:14}),onSelect:()=>void Nt(n.path,t.path).then(e=>{e||At(n.path)})});for(let t of k.other)e.push({label:t.name,group:T(`other_apps`),icon:t.icon?(0,J.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,J.jsx)(Bi,{size:14}),onSelect:()=>void Nt(n.path,t.path).then(e=>{e||At(n.path)})})}e.push({label:T(`choose_another_app`),icon:(0,J.jsx)(Bi,{size:14}),separatorBefore:!0,onSelect:()=>void At(n.path)}),P.push({label:T(`open_with_2`),icon:(0,J.jsx)(Bi,{size:14}),children:e,onSelect:()=>void At(n.path)})}if(E||P.push({label:T(`compress`),icon:(0,J.jsx)(Ri,{size:14}),separatorBefore:!0,children:[{label:T(`compress_to_zip`),icon:(0,J.jsx)(Ri,{size:14}),onSelect:()=>void he(e.paths)},{label:T(`compress_to`),icon:(0,J.jsx)(Ri,{size:14}),onSelect:()=>te?.(e.paths,pe())}],onSelect:()=>void 0}),!E&&(e?.paths.length??0)>0){let e=[{label:T(`select_link_source`),icon:(0,J.jsx)(_a,{size:14}),onSelect:()=>void be()},...re?[{label:T(`cancel_selected_link`),icon:(0,J.jsx)(ki,{size:14}),onSelect:()=>Ba(null)}]:[],...M&&n?n.isDirectory?[{label:T(`symbolic_link`),icon:(0,J.jsx)(di,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`symbolic-folder`)},{label:T(`directory_junction`),icon:(0,J.jsx)(di,{size:14}),onSelect:()=>void ve(`junction`)},{label:T(`smart_copy`),icon:(0,J.jsx)(ma,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`smart-copy`)},{label:T(`smart_mirror`),icon:(0,J.jsx)(ma,{size:14}),onSelect:()=>void ve(`smart-mirror`)},{label:T(`multi_version_smart_copy`),icon:(0,J.jsx)(ma,{size:14}),onSelect:()=>void ve(`multi-version-smart-copy`)},{label:T(`hardlink_copy`),icon:(0,J.jsx)(ma,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`hard-copy`)},{label:T(`symbolic_link_copy`),icon:(0,J.jsx)(ma,{size:14}),onSelect:()=>void ve(`symbolic-copy`)}]:[{label:T(`symbolic_link`),icon:(0,J.jsx)(fi,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`symbolic-file`)},{label:T(`hard_link`),icon:(0,J.jsx)(fi,{size:14}),onSelect:()=>void ve(`hard`)}]:[]];P.push({label:T(`create_link`),icon:(0,J.jsx)(_a,{size:14}),children:e,onSelect:()=>void 0})}!E&&n?.isDirectory&&j!==null&&P.push({label:T(`case_sensitive_names`),icon:(0,J.jsx)(pa,{size:14}),checked:j,onSelect:()=>void _e()}),P.push({label:T(`copy_as_path`),icon:(0,J.jsx)(ma,{size:14}),onSelect:()=>void ge(e.paths)}),_&&P.push({label:T(`add_to_file_tray`),icon:(0,J.jsx)(la,{size:14}),onSelect:()=>_(e.paths)}),!E&&(fe?y:v)&&P.push({label:T(fe?`remove_from_favorites`:`add_to_favorites`),icon:fe?(0,J.jsx)(fa,{size:14}):(0,J.jsx)(da,{size:14}),onSelect:()=>fe?y?.(de):v?.(de)}),E||P.push({label:T(`show_in_explorer`),icon:(0,J.jsx)(di,{size:14}),separatorBefore:!0,onSelect:()=>void It(de[0])}),d&&le.push({label:T(`cut`),icon:(0,J.jsx)(ha,{size:16}),shortcut:qt(r.cut),onSelect:()=>d(e.paths,!0)},{label:T(`copy`),icon:(0,J.jsx)(ma,{size:16}),shortcut:qt(r.copy),onSelect:()=>d(e.paths,!1)}),M&&n&&l&&le.push({label:T(`rename`),icon:(0,J.jsx)(Ji,{size:16}),shortcut:qt(r.rename),onSelect:()=>l(n.path)}),u&&le.push({label:T(`delete`),icon:(0,J.jsx)(Di,{size:16}),danger:!0,shortcut:qt(r.delete),onSelect:()=>u(e.paths)}),E||le.push({label:T(`properties`),icon:(0,J.jsx)(xi,{size:16}),shortcut:qt(r.properties),onSelect:()=>void kt(e.paths)})}if(D.loading)P.push({label:T(`more_actions`),icon:(0,J.jsx)(Bi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(D.verbs.length>0){let e={items:[],children:new Map};for(let t of D.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,J.jsx)(yo,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Rt(ce,D.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];P.push({label:T(D.safe?`more_actions`:`more_actions_extensions`),icon:(0,J.jsx)(Bi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,J.jsx)(ao,{items:P,onClose:a,quick:le,x:e.x,y:e.y})}function yo({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,J.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,J.jsx)(yi,{size:14});case`document`:return(0,J.jsx)(Ki,{size:14});case`cut`:return(0,J.jsx)(ha,{size:14});case`copy`:return(0,J.jsx)(ma,{size:14});case`paste`:return(0,J.jsx)(ga,{size:14});case`trash`:return(0,J.jsx)(Di,{size:14});case`pencil`:return(0,J.jsx)(Ji,{size:14});case`gear`:return(0,J.jsx)(xi,{size:14});case`star`:return(0,J.jsx)(ta,{size:14});case`pin`:return(0,J.jsx)(Si,{size:14});case`executable`:return(0,J.jsx)(Bi,{size:14});case`share`:return(0,J.jsx)(_a,{size:14});case`arrow`:return(0,J.jsx)(yi,{size:14});default:return(0,J.jsx)(Mi,{size:14})}}function bo(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function xo({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:s,zIndex:c=3200}){let l=o(),[u,d]=(0,I.useState)(null),f=(0,I.useRef)(null),p=t.find(t=>t.value===e)??t[0];return(0,I.useEffect)(()=>{if(!u)return;let e=()=>d(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[u]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(So,{$icon:a!==void 0,"aria-expanded":u!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(u){d(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;d({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:f,style:i&&!a?{width:i}:void 0,title:s??p?.title,type:`button`,children:[a===void 0?(0,J.jsx)(Co,{children:p?.label??``}):(0,J.jsx)(wo,{children:a}),a===void 0&&(0,J.jsx)(To,{children:(0,J.jsx)(bi,{size:11})})]}),u&&(0,Ha.createPortal)((0,J.jsx)(Eo,{"aria-label":l(`options`),"data-select-menu":`true`,$menuZIndex:c,role:`listbox`,style:{bottom:u.bottom,left:u.left,minWidth:u.width,top:u.top},children:t.map(t=>(0,J.jsxs)(Do,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),d(null)},role:`option`,title:t.title,type:`button`,children:[(0,J.jsx)(Oo,{children:t.label}),t.value===e&&(0,J.jsx)(Oi,{size:11})]},t.value))}),document.body)]})}var So=v.button`
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
`,Co=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wo=v.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,To=v.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Eo=v.div`
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
    ${$a}
`,Do=v.button`
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
`,Oo=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ko=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],Ao=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],jo=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],Mo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],No=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function Po({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=o(),a=(0,I.useRef)(null),[s,c]=(0,I.useState)(e),[l,u]=(0,I.useState)(t),[d,f]=(0,I.useState)(`zip`),[p,m]=(0,I.useState)(`5`),[h,g]=(0,I.useState)(`default`),[_,v]=(0,I.useState)(`none`),[y,b]=(0,I.useState)(``),[x,ee]=(0,I.useState)(`0`),[S,te]=(0,I.useState)(!1);(0,I.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let C=ko.find(e=>e.value===d)??ko[0],w=d===`zip`||d===`zipx`,ne=_!==`none`,T=w||d===`7z`,re=d===`zip`||d===`7z`,E=async()=>{if(S||!l.trim()||!s||ne&&y.length===0)return;te(!0);let e=await r({directory:s,name:l.trim(),format:d,level:C.level?Number(p):0,method:w?h:null,encryption:T?_:`none`,password:ne?y:void 0,splitSize:re?Number(x):0});te(!1),e&&n()};return(0,Ha.createPortal)((0,J.jsx)(Fo,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,J.jsxs)(Io,{"aria-modal":`true`,role:`dialog`,children:[(0,J.jsx)(Lo,{children:i(`compress_to`)}),(0,J.jsxs)(Ro,{children:[(0,J.jsx)(zo,{children:i(`archive_name`)}),(0,J.jsx)(Bo,{onChange:e=>u(e.target.value),ref:a,value:l,onKeyDown:e=>{e.key===`Enter`&&E()}}),(0,J.jsx)(Vo,{children:C.extension})]}),(0,J.jsxs)(Ro,{children:[(0,J.jsx)(zo,{children:i(`format`)}),(0,J.jsx)(xo,{onChange:e=>f(e),options:ko.map(e=>({value:e.value,label:i(e.label)})),value:d,width:236,zIndex:3700})]}),(0,J.jsxs)(Ro,{children:[(0,J.jsx)(zo,{children:i(`method`)}),(0,J.jsx)(xo,{disabled:!w,onChange:g,options:Ao.map(e=>({...e,label:i(e.label)})),value:w?h:`default`,width:236,zIndex:3700})]}),(0,J.jsxs)(Ro,{children:[(0,J.jsx)(zo,{children:i(`encryption`)}),(0,J.jsx)(xo,{disabled:!T,onChange:e=>{v(e),e===`none`&&b(``)},options:jo.map(e=>({...e,label:i(e.label)})),value:T?_:`none`,width:236,zIndex:3700})]}),ne&&(0,J.jsxs)(Ro,{children:[(0,J.jsx)(zo,{children:i(`password`)}),(0,J.jsx)(Bo,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,J.jsxs)(Ro,{children:[(0,J.jsx)(zo,{children:i(`split_volumes`)}),(0,J.jsx)(xo,{disabled:!re,onChange:ee,options:Mo.map(e=>({...e,label:i(e.label)})),value:re?x:`0`,width:236,zIndex:3700})]}),(0,J.jsxs)(Ro,{children:[(0,J.jsx)(zo,{children:i(`compression_level`)}),(0,J.jsx)(xo,{disabled:!C.level,onChange:m,options:No.map(e=>({...e,label:i(e.label)})),value:C.level?p:d===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,J.jsxs)(Ro,{$stack:!0,children:[(0,J.jsx)(zo,{children:i(`destination`)}),(0,J.jsxs)(Ho,{children:[(0,J.jsx)(Uo,{title:s,children:s}),(0,J.jsx)(Go,{disabled:S,onClick:()=>void Ta(s).then(e=>{e&&c(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,J.jsxs)(Wo,{children:[(0,J.jsx)(Go,{disabled:S,onClick:n,type:`button`,children:i(`cancel`)}),(0,J.jsx)(Ko,{disabled:S||!l.trim()||ne&&y.length===0,onClick:()=>void E(),type:`button`,children:i(S?`compressing`:`compress`)})]})]})}),document.body)}var Fo=v.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${ro}
`,Io=v.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Qa}
`,Lo=v.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ro=v.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,zo=v.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Bo=v.input`
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
`,Vo=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Ho=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Uo=v.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wo=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Go=v.button`
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
`,Ko=v(Go)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function qo({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:s}){let c=o(),l=(0,I.useRef)(null);return(0,I.useEffect)(()=>{if(!e)return;l.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),s()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,s]),e?(0,Ha.createPortal)((0,J.jsx)(Jo,{onPointerDown:e=>{e.target===e.currentTarget&&s()},children:(0,J.jsxs)(Yo,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(Xo,{children:t}),(0,J.jsx)(Zo,{children:n}),(0,J.jsxs)(Qo,{children:[(0,J.jsx)($o,{onClick:s,type:`button`,children:c(`cancel`)}),(0,J.jsx)($o,{$danger:i,onClick:a,ref:l,type:`button`,children:r})]})]})}),document.body):null}var Jo=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${ro}
`,Yo=v.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Qa}
`,Xo=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Zo=v.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Qo=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,$o=v.button`
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
`,es=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),ts=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),ns=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),rs=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function is({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:s,emptyNote:c}){let l=o(),[u,d]=(0,I.useState)(!1),[f,p]=(0,I.useState)(!1),[m,h]=(0,I.useState)(!1),[g,_]=(0,I.useState)(0),[v,y]=(0,I.useState)(0),[b,x]=(0,I.useState)(null),[ee,S]=(0,I.useState)(!1),[te,C]=(0,I.useState)(!1),w=(0,I.useRef)(null),ne=(0,I.useRef)(null),T=(0,I.useRef)(null),re=(0,I.useRef)(null),[E,D]=(0,I.useState)(()=>{let e=Kn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),O=e?.path??null,k=G(O),A=e?as(e.name):``,ie=!!e&&!e.isDirectory&&es.has(A),j=!!e&&!e.isDirectory&&ts.has(A),ae=!!e&&!e.isDirectory&&ns.has(A),oe=!!e&&!e.isDirectory&&rs.has(A),se=!!e&&!e.isDirectory&&A===`pdf`,M=mn(ie?k:null,512,e?.modified??0),ce=gn(ae?k:null,e?.modified??0,A),N=gn(ie||j?k:null,e?.modified??0,A),P=_n(se?k:null,e?.modified??0),le=dn(!ie&&!j&&!ae&&!oe&&!se?k:null,e?.isDirectory??!1);if((0,I.useEffect)(()=>{d(!1),p(!1),h(!1),_(0),y(0),C(!1)},[O]),(0,I.useEffect)(()=>{if(!k||!oe){x(null),S(!1);return}let e=!0;return S(!0),x(null),Ae(k).then(t=>{e&&(x(t),S(!1))},()=>{e&&(x({text:null,truncated:!1,error:l(`could_not_read_this_file`)}),S(!1))}),()=>{e=!1}},[k,oe]),!e&&!c)return null;let ue=e=>{T.current={x:e.clientX,width:ne.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},de=e=>{let t=T.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},fe=e=>{T.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},pe=e=>{re.current={y:e.clientY,height:E},e.currentTarget.setPointerCapture(e.pointerId)},me=e=>{let t=re.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);D(n),qn(`yafm.preview.media.height`,n)},he=e=>{re.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,J.jsxs)(ss,{$open:r,children:[r&&(0,J.jsx)(cs,{onPointerDown:ue,onPointerMove:de,onPointerUp:fe,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,J.jsx)(ls,{ref:ne,style:{width:r?t:0},children:(0,J.jsxs)(us,{children:[(0,J.jsx)(di,{size:56}),(0,J.jsx)(`span`,{children:c})]})})]});let ge=()=>{let e=w.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,J.jsxs)(ss,{$open:r,children:[r&&(0,J.jsx)(cs,{onPointerDown:ue,onPointerMove:de,onPointerUp:fe,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,J.jsxs)(ls,{ref:ne,style:{width:r?t:0},children:[(0,J.jsx)(ds,{style:{height:E},children:ie&&N&&!u?(0,J.jsxs)(ps,{onPointerEnter:()=>h(!0),onPointerLeave:()=>h(!1),children:[(0,J.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:ge,onDurationChange:e=>_(e.currentTarget.duration||0),onError:()=>d(!0),onLoadedMetadata:e=>{_(e.currentTarget.duration||0),y(e.currentTarget.currentTime)},onPause:()=>p(!1),onPlay:()=>p(!0),onTimeUpdate:e=>y(e.currentTarget.currentTime),playsInline:!0,poster:M??void 0,preload:`metadata`,ref:w,src:N}),(0,J.jsx)(ms,{$visible:!f,onClick:ge,title:l(`play`),type:`button`,children:(0,J.jsx)(va,{size:28})}),(0,J.jsxs)(hs,{$visible:m,onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(gs,{children:[(0,J.jsx)(`span`,{children:os(v)}),(0,J.jsx)(`span`,{children:os(g)})]}),(0,J.jsx)(_s,{"aria-label":l(`seek`),max:g||0,min:0,onChange:e=>{let t=w.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,y(n)},step:.1,type:`range`,value:Math.min(v,g||0)})]})]}):j&&N?(0,J.jsx)(`audio`,{controls:!0,src:N}):ae&&ce?(0,J.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:ce}):se&&P&&!te?(0,J.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>C(!0),src:P}):se?(0,J.jsx)(fi,{size:64}):oe?(0,J.jsx)(vs,{children:ee||!b?(0,J.jsx)(bs,{children:l(`loading`)}):b.error?(0,J.jsx)(bs,{children:b.error}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(ys,{children:b.text}),b.truncated&&(0,J.jsx)(bs,{children:l(`showing_the_first_256_kb`)})]})}):ie&&M?(0,J.jsx)(`img`,{alt:``,src:M}):le?(0,J.jsx)(`img`,{alt:``,src:le}):e.isDirectory?(0,J.jsx)(di,{size:64}):(0,J.jsx)(fi,{size:64})}),(0,J.jsx)(fs,{onDoubleClick:()=>{D(210),qn(`yafm.preview.media.height`,210)},onPointerDown:pe,onPointerMove:me,onPointerUp:he,title:l(`drag_to_resize_double_click_to_reset`)}),(0,J.jsxs)(xs,{children:[(0,J.jsx)(Ss,{title:e.path,children:e.name}),s&&(0,J.jsx)(Cs,{children:s}),(0,J.jsx)(ws,{children:e.fields.map(e=>(0,J.jsxs)(Ts,{children:[(0,J.jsx)(Es,{children:e.label}),(0,J.jsx)(Ds,{title:e.value,children:e.value})]},e.label))})]})]})]})}function as(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function os(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var ss=v.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,cs=v.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ls=v.aside`
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
`,us=v.div`
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
`,ds=v.div`
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
`,fs=v.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ps=v.div`
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
`,ms=v.button`
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
`,hs=v.div`
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
`,gs=v.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,_s=v.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,vs=v.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,ys=v.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,bs=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,xs=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Ss=v.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Cs=v.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,ws=v.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,Ts=v.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Es=v.span`
    color: var(--text-muted);
`,Ds=v.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Os=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],ks=[...Os],As={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},js={folder:e=>(0,J.jsx)(di,{size:e}),home:e=>(0,J.jsx)(ui,{size:e}),desktop:e=>(0,J.jsx)(Yi,{size:e}),documents:e=>(0,J.jsx)(Xi,{size:e}),downloads:e=>(0,J.jsx)(Zi,{size:e}),pictures:e=>(0,J.jsx)(Qi,{size:e}),music:e=>(0,J.jsx)($i,{size:e}),videos:e=>(0,J.jsx)(ea,{size:e}),drive:e=>(0,J.jsx)(pi,{size:e}),image:e=>(0,J.jsx)(Fi,{size:e}),video:e=>(0,J.jsx)(Ii,{size:e}),audio:e=>(0,J.jsx)(Li,{size:e}),text:e=>(0,J.jsx)(Ni,{size:e}),code:e=>(0,J.jsx)(Pi,{size:e}),clock:e=>(0,J.jsx)(Ti,{size:e}),star:e=>(0,J.jsx)(ta,{size:e}),file:e=>(0,J.jsx)(fi,{size:e}),archive:e=>(0,J.jsx)(Ri,{size:e}),pdf:e=>(0,J.jsx)(zi,{size:e}),executable:e=>(0,J.jsx)(Bi,{size:e}),font:e=>(0,J.jsx)(Vi,{size:e}),database:e=>(0,J.jsx)(Hi,{size:e}),config:e=>(0,J.jsx)(Ui,{size:e}),spreadsheet:e=>(0,J.jsx)(Wi,{size:e}),presentation:e=>(0,J.jsx)(Gi,{size:e}),document:e=>(0,J.jsx)(Ki,{size:e}),app:e=>(0,J.jsx)(Mi,{size:e}),gear:e=>(0,J.jsx)(xi,{size:e}),pin:e=>(0,J.jsx)(Si,{size:e}),trash:e=>(0,J.jsx)(Di,{size:e}),overview:e=>(0,J.jsx)(qi,{size:e}),book:e=>(0,J.jsx)(na,{size:e}),briefcase:e=>(0,J.jsx)(ra,{size:e}),cloud:e=>(0,J.jsx)(ia,{size:e}),gamepad:e=>(0,J.jsx)(aa,{size:e}),camera:e=>(0,J.jsx)(oa,{size:e}),terminal:e=>(0,J.jsx)(sa,{size:e}),server:e=>(0,J.jsx)(ca,{size:e}),package:e=>(0,J.jsx)(la,{size:e}),globe:e=>(0,J.jsx)(ua,{size:e}),heart:e=>(0,J.jsx)(da,{size:e}),share:e=>(0,J.jsx)(ca,{size:e}),favorites:e=>(0,J.jsx)(da,{size:e})};function Ms(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ns(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Os)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||ks.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Ms(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${As[n]??n}${Ps(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Ps(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Fs({panel:e,size:t=16}){let n=K(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,J.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?js[e.icon]:void 0;if(r)return(0,J.jsx)(J.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,J.jsx)(di,{size:t});case`recent`:return(0,J.jsx)(Ti,{size:t});case`frequent`:return(0,J.jsx)(ta,{size:t});case`drives`:return(0,J.jsx)(pi,{size:t});case`home`:return(0,J.jsx)(ui,{size:t});case`share`:return(0,J.jsx)(ca,{size:t});case`favorites`:return(0,J.jsx)(da,{size:t});default:return(0,J.jsx)(di,{size:t})}}function Is({place:e,size:t=18}){let n=K(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,J.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&js[e.icon]?(0,J.jsx)(J.Fragment,{children:js[e.icon](t)}):(0,J.jsx)(di,{size:t})}var Ls=`#64748b`;function Rs(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function zs({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:s}){let c=o(),[l,u]=(0,I.useState)(``),[d,f]=(0,I.useState)(`#2dd4bf`),p=(0,I.useRef)(null);(0,I.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||s()},t=e=>{e.key===`Escape`&&s()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,s),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,s)}},[s]);let m=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),h=e=>i[e]??`#64748b`,g=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},_=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=l.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:d}),u(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Ha.createPortal)((0,J.jsxs)(Bs,{"data-tag-menu":`true`,ref:p,style:{left:y,top:b},children:[(0,J.jsxs)(Vs,{children:[(0,J.jsx)(`span`,{children:c(`tags`)}),(0,J.jsx)(Hs,{onClick:s,title:c(`close`),type:`button`,children:(0,J.jsx)(ki,{size:11})})]}),(0,J.jsxs)(Us,{children:[m.length===0&&(0,J.jsx)(qs,{children:c(`no_tags_yet`)}),m.map(e=>{let t=h(e),r=n.includes(e);return(0,J.jsxs)(Ws,{children:[(0,J.jsx)(Gs,{"aria-label":c(`color_of_tag`,{tag:e}),onChange:t=>_(e,t.target.value),title:c(`change_this_tag_s_color`),type:`color`,value:t}),(0,J.jsxs)(Ks,{$color:t,$ink:Rs(t),$on:r,onClick:()=>g(e),type:`button`,children:[r&&(0,J.jsx)(Oi,{size:11}),(0,J.jsx)(`span`,{children:e})]})]},e)})]}),(0,J.jsxs)(Js,{children:[(0,J.jsx)(Gs,{"aria-label":c(`color_of_the_new_tag`),onChange:e=>f(e.target.value),title:c(`color_of_the_new_tag`),type:`color`,value:d}),(0,J.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:c(`new_tag`),spellCheck:!1,value:l}),(0,J.jsx)(Ys,{onClick:v,type:`button`,children:c(`add`)})]})]}),document.body)}var Bs=v.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${Qa}
`,Vs=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Hs=v.button`
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
`,Us=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Ws=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Gs=v.input`
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
`,Ks=v.button`
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
`,qs=v.span`
    font-size: 11px;
    color: var(--text-muted);
`,Js=v.div`
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
`,Ys=v.button`
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
`,Xs={file:fi,folder:di,text:Ni,code:Pi,image:Fi,video:Ii,audio:Li,archive:Ri,pdf:zi,executable:Bi,font:Vi,database:Hi,config:Ui,spreadsheet:Wi,presentation:Gi,document:Ki},Zs={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Qs(e){let t=e.lastIndexOf(`.`);return t>0?Zs[e.slice(t).toLowerCase()]??`file`:`file`}function $s({name:e,size:t}){let n=Xs[e??`file`]??fi;return(0,J.jsx)(n,{size:t})}function ec({path:e,name:t,isDirectory:n,size:r=18}){let i=dn(e,n);return i?(0,J.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,J.jsx)(di,{size:r}):(0,J.jsx)($s,{name:Qs(t),size:r})}var tc=`application/x-yafm-paths`,nc=[tc,`text/uri-list`];function rc(e){return e?.types.some(e=>nc.includes(e.toLowerCase()))??!1}function ic(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(tc);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(oc).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var ac=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function oc(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return ac?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function sc(e,t,n=!0){e.dataTransfer.setData(tc,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function cc({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=o(),[h,g]=(0,I.useState)(()=>new Set),[_,v]=(0,I.useState)(!1),y=(0,I.useRef)(null),x=(0,I.useMemo)(()=>e.filter(e=>h.has(e.path)),[e,h]),ee=(0,I.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),S=(0,I.useRef)(null);if((0,I.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&rc(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=ic(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,c]),!r)return null;let te=new Set([...e,...t].map(e=>e.path)),C=te.size>0&&[...te].every(e=>h.has(e)),w=te.size,ne=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},T=()=>{g(C?new Set:te)},re=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},E=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},D=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},O=()=>{let e=x.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},k=()=>{let e=x.map(e=>e.path);e.length!==0&&f(e)},A=()=>{let e=new Map;for(let t of x)e.set(t.path,!0);for(let t of ee)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,a,!0),r.length>0&&p(r,a,!1),g(new Set)},ie=(e,t)=>{let n=h.has(e.path);return(0,J.jsxs)(bc,{$checked:n,draggable:!0,onClick:()=>ne(e.path),onDragStart:r=>{sc(r,n&&h.size>0?[...new Set([...x,...ee].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,J.jsx)(xc,{$checked:n,onClick:t=>{t.stopPropagation(),ne(e.path)},type:`button`,children:n&&(0,J.jsx)(Oi,{size:8})}),(0,J.jsx)(ec,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,J.jsxs)(Sc,{children:[(0,J.jsx)(Cc,{children:e.name}),(0,J.jsx)(wc,{children:b(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},j=e=>{rc(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,J.jsxs)(lc,{$dragging:_,"data-tray":`true`,ref:S,style:{left:i.x,top:i.y},onDragEnter:j,onDragOver:j,onDrop:e=>{let{paths:t}=ic(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,J.jsxs)(uc,{onPointerDown:re,onPointerMove:E,onPointerUp:D,children:[(0,J.jsxs)(dc,{children:[(0,J.jsx)(la,{size:13}),m(`tray`),(0,J.jsx)(fc,{children:w})]}),(0,J.jsxs)(pc,{onPointerDown:e=>e.stopPropagation(),children:[(0,J.jsx)(mc,{onClick:T,title:m(C?`select_none`:`select_all`),type:`button`,children:m(C?`none`:`all`)}),(0,J.jsx)(mc,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,J.jsx)(hc,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,J.jsx)(ki,{size:10})})]})]}),(0,J.jsxs)(gc,{children:[(0,J.jsxs)(vc,{children:[m(`in_this_app`),(0,J.jsx)(fc,{children:e.length})]}),e.length===0&&(0,J.jsx)(_c,{children:m(`drag_files_or_folders_here`)}),e.map(e=>ie(e,!0)),t.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(vc,{$clipboard:!0,children:[m(`clipboard`),(0,J.jsx)(fc,{children:t.length}),n&&(0,J.jsx)(yc,{children:m(`cut`)})]}),t.map(e=>ie(e,n))]})]}),(0,J.jsxs)(Tc,{children:[(0,J.jsx)(Ec,{$plain:!0,disabled:x.length===0,onClick:k,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,J.jsx)(Ec,{disabled:h.size===0||!a,onClick:A,type:`button`,children:m(`move_here`)}),(0,J.jsx)(Ec,{$danger:!0,disabled:x.length===0,onClick:O,type:`button`,children:m(`remove`)})]})]})}var lc=v.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Ua}
    ${Qa}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,uc=v.div`
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
`,dc=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,fc=v.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,pc=v.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,mc=v.button`
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
`,hc=v.button`
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
`,gc=v.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,_c=v.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,vc=v.div`
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
`,yc=v.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,bc=v.div`
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
`,xc=v.button`
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
`,Sc=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Cc=v.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wc=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Tc=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,Ec=v.button`
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
`,Dc={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function Oc(){return l.available?await l.request(`share.list`):Dc}async function kc(e,t){return l.available?await l.request(`share.add`,{path:e,mode:t}):Dc}async function Ac(e){return l.available?await l.request(`share.remove`,{id:e}):Dc}async function jc(e,t){return l.available?await l.request(`share.mode`,{id:e,mode:t}):Dc}async function Mc(){return l.available?(await l.request(`share.peers`)).peers??[]:[]}async function Nc(){return l.available?(await l.request(`share.peers.refresh`)).peers??[]:[]}async function Pc(e,t){l.available&&await l.request(`share.pair.start`,{host:e,port:t})}async function Fc(e,t){l.available&&await l.request(`share.pair.respond`,{requestId:e,accept:t})}async function Ic(e,t){l.available&&await l.request(`share.port`,{mode:t,port:e})}var Lc=`yafm://share/`;function Rc(e){return e.toLowerCase().startsWith(Lc)}function zc(e){if(!Rc(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Bc(e,t,n=``){let r=`${Lc}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Vc(e){let t=zc(e);if(!t||!l.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await l.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Bc(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Bc(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Hc(e){let t=zc(e);if(!t||!l.available)throw Error(`This shared file is only available in the desktop app.`);let n=await l.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Uc(e){await Te(await Hc(e))}var Wc=new Map,Gc=new Set,Kc=0;function qc(){Kc+=1;for(let e of Gc)e()}function Jc(e,t){t?Wc.set(e,t):Wc.delete(e),qc()}function Yc(e){return Wc.has(e)}function Xc(e,t,n){Wc.get(e)?.(t,n)}function Zc(e){return Gc.add(e),()=>Gc.delete(e)}function Qc(){return Kc}function $c(e){return(0,I.useSyncExternalStore)(Zc,Qc,Qc),{available:Yc(e),open:(t,n)=>Xc(e,t,n)}}function el(e){return[...Wc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function tl(e){return(0,I.useSyncExternalStore)(Zc,Qc,Qc),{available:el(e).length>0,open:(t,n)=>{let r=el(e).at(-1);r&&Xc(r,t,n)}}}var nl=60,rl=300,il=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],al=new Set,ol=`yafm.columnWidths`,sl=`yafm.reset-column-widths`,cl=64,ll=720,ul=160,dl=190,fl=120;function pl({listing:e,loading:t,error:n,find:r=yn,view:i,showImages:a,imageStripHeight:s=dl,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:d,onOpenFile:f,showCheckboxes:p=!0,openOnSingleClick:m=!1,shortcuts:h=Ht,enableShortcuts:g=!0,refreshToken:_=0,onRefresh:v,onRename:y,onClipboardChanged:b,cutPaths:ee=al,onTransfer:te,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ne,favoritePaths:T,onExtractArchive:re,onPaste:E,confirmDelete:D=!1,previewVideoAudio:O=!1,previewVideoAutoplay:k=!1,showDetails:A=!0,onPreviewInfo:ie,onActivate:j,groupOf:ae,onGridScroll:M,gridFooter:ce,allowBackgroundMenu:P=!0,readOnly:le=!1,onSelectionChange:ue,onSelectionCountChange:de,selectionMenuRequest:fe,selectionMenuId:pe,singleSelect:me=!1,pendingRename:he=null,pendingRenameToken:ge=0,selectMatchesToken:_e=0}){let F=o(),ve=Fn(),ye=(0,I.useRef)(null),be=(0,I.useRef)(null),xe=(0,I.useRef)(null),L=(0,I.useRef)(null),[Se,Ce]=(0,I.useState)(rl),[we,Te]=(0,I.useState)({top:0,height:640}),Ee=(0,I.useRef)(null),De=(0,I.useRef)(null),[Oe,ke]=(0,I.useState)(null),[Ae,je]=(0,I.useState)(s),[R,Me]=(0,I.useState)(()=>new Set),[Ne,Pe]=(0,I.useState)(()=>Jn(ol)??{}),z=(0,I.useRef)(R),Fe=(0,I.useRef)([]);z.current=R,(0,I.useEffect)(()=>ue?.([...R]),[R,ue]),(0,I.useEffect)(()=>de?.(R.size),[R,de]),(0,I.useEffect)(()=>{let e=fe;if(!e||e.token===Le.current)return;Le.current=e.token;let t=[...z.current];t.length!==0&&(Ie({x:e.x,y:e.y,paths:t,background:!1}),_t().then(Xe,()=>Xe(!1)))},[fe]);let[B,Ie]=(0,I.useState)(null),Le=(0,I.useRef)(0),[Re,V]=(0,I.useState)(null),[ze,Be]=(0,I.useState)(null),[Ve,He]=(0,I.useState)(null),Ue=(0,I.useRef)(Ve);Ue.current=Ve;let We=(0,I.useRef)(0),Ge=(0,I.useRef)(j);Ge.current=j;let[Ke,qe]=(0,I.useState)(()=>{let e=Kn(`yafm.preview.width`,320);return e>=220?e:320}),Je=(0,I.useCallback)(e=>{qe(e),qn(`yafm.preview.width`,e)},[]),[Ye,Xe]=(0,I.useState)(!1),Ze=(0,I.useCallback)((e,t)=>{let n=[...z.current];n.length!==0&&(Ie({x:e,y:t,paths:n,background:!1}),_t().then(Xe,()=>Xe(!1)))},[]);(0,I.useEffect)(()=>{if(pe)return Jc(pe,R.size>0?Ze:null),()=>Jc(pe,null)},[pe,R,Ze]),(0,I.useEffect)(()=>{Me(new Set),He(null),Ie(null),De.current=null},[e?.path]),(0,I.useEffect)(()=>{je(s)},[s]),(0,I.useEffect)(()=>{Me(new Set),He(null),De.current=null},[_]);let Qe=e=>{Ee.current={y:e.clientY,height:Ae},e.currentTarget.setPointerCapture(e.pointerId)},$e=e=>{let t=Ee.current;if(!t)return;let n=Math.max(fl,Math.round(window.innerHeight*.7));je(Math.min(n,Math.max(fl,t.height+t.y-e.clientY)))},et=e=>{Ee.current&&(Ee.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(Ae))},tt=()=>{je(dl),c?.(dl)},nt=r.query.length>0,rt=(0,I.useMemo)(()=>il.filter(e=>i.columns?.includes(e.id)),[i.columns]),it=i.columns?.includes(`linkTarget`)??!1,at=(0,I.useCallback)(e=>Math.min(ll,Math.max(cl,Ne[e.id]??e.width)),[Ne]),ot=(0,I.useMemo)(()=>`minmax(160px, 1fr) ${rt.map(e=>`${at(e)}px`).join(` `)}`.trim(),[rt,at]),st=(0,I.useRef)(null),ct=(0,I.useRef)(null),lt=()=>Math.floor(ct.current?.getBoundingClientRect().width??ul),ut=e=>{let t=rt[0];t&&(e.preventDefault(),e.stopPropagation(),st.current={left:{id:t.id,start:at(t)},startX:e.clientX,nameStart:lt()})},dt=(e,t)=>{let n=rt[t],r=rt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),st.current={left:{id:n.id,start:at(n)},right:{id:r.id,start:at(r)},startX:e.clientX,nameStart:0})},ft=e=>Pe(t=>{let n={...t};return delete n[e],Yn(ol,n),n});(0,I.useEffect)(()=>{let e=e=>{let t=st.current;if(!t)return;let n=e.clientX-t.startX;Pe(e=>{if(!t.right){let r=Math.max(0,t.nameStart-ul),i=Math.min(Math.min(ll,t.left.start+r),Math.max(cl,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(ll,Math.max(cl,t.left.start+n)),a=Math.min(Math.min(ll,r-cl),Math.max(Math.max(cl,r-ll),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{st.current&&(st.current=null,Pe(e=>(Yn(ol,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,I.useEffect)(()=>{let e=()=>Pe(()=>(Yn(ol,{}),{}));return window.addEventListener(sl,e),()=>window.removeEventListener(sl,e)},[]);let H=(0,I.useMemo)(()=>e?gl(e.entries.map(t=>{let n=t.isDirectory?In(ve,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:nt?bn(i,r):null,tags:e.tags[t.name]??[],cut:ee.has(t.fullPath)}}).filter(e=>!nt||r.mode===`dim`||e.ranges!==null),i,e,F):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,nt,r,ve,i.sort,i.sortDescending,F,ee]);Fe.current=H,(0,I.useEffect)(()=>{_e!==0&&Me(new Set(Fe.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[_e]);let pt=Math.max(40,i.iconSize+20),mt=Math.max(0,Math.floor(we.top/pt)-4),ht=Math.min(H.length,mt+Math.ceil(we.height/pt)+10),vt=(0,I.useMemo)(()=>H.slice(mt,ht),[H,mt,ht]);(0,I.useEffect)(()=>{let e=L.current;if(!e||i.mode!==`list`)return;let t=()=>Te(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,I.useEffect)(()=>{Te(e=>({...e,top:0})),L.current&&(L.current.scrollTop=0)},[e?.path]),(0,I.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=H.findIndex(e=>e.entry.fullPath===r.currentPath),t=L.current;if(e<0||!t)return;let n=e*pt;(n<t.scrollTop||n+pt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ye.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,H,pt]);let yt=(0,I.useMemo)(()=>H.slice(0,Se),[H,Se]);(0,I.useEffect)(()=>{let e=be.current;if(!e||e.length===0)return;let t=e.filter(e=>H.some(t=>N(t.entry.fullPath,e)));if(t.length===0)return;be.current=null;let n=t[0],r=H.findIndex(e=>N(e.entry.fullPath,n));r>=0&&Ce(e=>Math.max(e,r+rl)),Me(new Set(t)),De.current=n,i.mode===`list`&&L.current&&r>=0?L.current.scrollTop=Math.max(0,r*pt-L.current.clientHeight/2):requestAnimationFrame(()=>ye.current?.scrollIntoView({block:`nearest`}))},[H,pt,i.mode]),(0,I.useEffect)(()=>{Ce(rl)},[e?.path]),(0,I.useEffect)(()=>{if(!r.currentPath)return;let e=H.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&Ce(t=>Math.max(t,e+rl))},[r.currentPath,H]);let bt=(0,I.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&Ce(e=>Math.min(H.length,e+rl))},[H.length]),U=i.mode===`grid`,Tt=(0,I.useMemo)(()=>{if(!U)return[];if(!ae)return yl(yt,vl);let e=[],t=new Map;for(let n of yt){let r=ae(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[yt,U,ae]),Et=(0,I.useMemo)(()=>a?H.filter(e=>!e.entry.isDirectory&&jn(e.entry.name)):[],[H,a]),Dt=Et.length,At=(0,I.useMemo)(()=>Et.slice(0,nl),[Et]),Mt=(0,I.useMemo)(()=>a?yl(At,_l):[],[At,a]),Nt=(0,I.useMemo)(()=>H.map(e=>e.entry.fullPath),[H]),Pt=H.length>0&&R.size>=H.length,Ft=R.size>0&&!Pt,It=()=>{me||(Pt?Vt():Me(new Set(Nt)))},Lt=e?.path??``,Rt=(0,I.useCallback)((e,t)=>{if(me){De.current=t,Me(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Me(r=>{if(e.shiftKey&&De.current!==null){let e=Nt.indexOf(De.current),i=Nt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Nt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),De.current=t,e}return De.current=t,new Set([t])})},[Nt,me]),Bt=(0,I.useCallback)(e=>{me?(De.current=e,Me(new Set([e]))):(De.current=e,Me(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[me]),Vt=(0,I.useCallback)(()=>{De.current=null,Me(new Set)},[]);(0,I.useEffect)(()=>{if(ge===0||!he||We.current===ge||!e?.entries.some(e=>e.fullPath===he))return;We.current=ge,De.current=he,Me(new Set([he])),He({path:he,value:x(he)});let t=H.findIndex(e=>e.entry.fullPath===he),n=L.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*pt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(he)}"]`)?.scrollIntoView({block:`nearest`})})}},[L,e,he,ge,pt,H,i.mode]),(0,I.useEffect)(()=>{if(!Ve)return;let e=H.findIndex(e=>e.entry.fullPath===Ve.path),t=L.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*pt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ve.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[L,Ve,pt,H,i.mode]);let Ut=(0,I.useCallback)(()=>Ie(null),[]),Wt=(0,I.useCallback)((e,t)=>{e.isDirectory?d(e.fullPath,Gt(t)):f?.(e.fullPath,Gt(t))},[d,f]),qt=(0,I.useCallback)((e,t,n)=>{ke({entry:e,x:t,y:n})},[]),Jt=(0,I.useRef)(null),Xt=(0,I.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;sc(e,R.has(n)?[...R]:[n])},[R]),Zt=(0,I.useCallback)(e=>{if(!rc(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Jt.current=t?.dataset.directory===`true`?t.dataset.path??Lt:Lt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Lt]),Qt=(0,I.useCallback)(e=>{if(le)return;let{paths:t,move:n}=ic(e),r=Jt.current??Lt;Jt.current=null,t.length!==0&&te&&(e.preventDefault(),te(t,r,!e.ctrlKey&&n))},[Lt,te,le]),$t=(0,I.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),le||!t&&!P)return;let n=z.current;t&&!n.has(t)&&Me(new Set([t])),t&&(De.current=t);let r=t?n.has(t)?[...n]:[t]:[];Ie({x:e.clientX,y:e.clientY,paths:r,background:!t}),_t().then(Xe,()=>Xe(!1))},[P,Lt]),en=(0,I.useCallback)(()=>v?.(),[v]),tn=(e,t)=>{De.current=e,Me(new Set([e])),t&&He({path:e,value:x(e)}),en()},nn=Re&&(0,J.jsx)(Po,{initialDirectory:Lt,initialName:Re.name,onCancel:()=>V(null),onCompress:async e=>{let t=await zt(Re.paths,e);return!t.ok||!t.path?(Aa(t.error??F(`could_not_create_the_archive`)),!1):(tn(t.path,!1),!0)}}),rn=async(e,t=!1)=>{let n=e,r=t;if(e.some(Rc)){let t=[];for(let n of e)if(!Rc(n))t.push(n);else{if(Fe.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){Aa(F(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await Hc(n))}catch(e){Aa(e instanceof Error?e.message:F(`the_file_could_not_be_copied`));return}}n=t,r=!1}await gt(n,r)&&(Xe(!0),b?.())},W=async e=>{if(!e)return;let t=await xt(e);t.cancelled||(t.ok?(be.current=t.created,en(),E?.()):Aa(F(`nothing_on_the_clipboard_could_be_pasted_here`)))},an=async(e,t=!1)=>{if(!Lt)return;let n=e===null?await wt(Lt,t):await Ot(Lt,e);!n.ok||n.path===null?Aa(n.error??F(`could_not_create_the_item`)):(De.current=n.path,Me(new Set([n.path])),He({path:n.path,value:x(n.path)}),en())},on=e=>{Me(new Set([e.fullPath])),De.current=e.fullPath,He({path:e.fullPath,value:e.name})},sn=(0,I.useCallback)(e=>He(t=>t&&{...t,value:e}),[]),cn=(0,I.useCallback)(()=>He(null),[]),ln=(0,I.useCallback)(async()=>{let e=Ue.current;if(He(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Fe.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Ct(e.path,t);r.ok?(Vt(),r.path&&y?.(e.path,r.path),en(),window.setTimeout(()=>en(),250)):Aa(r.error??F(`could_not_rename_the_entry`))},[Vt,y,en,F]),un=async(e,t=!1)=>{if((t||D)&&!await dn(e,t))return;let n=await St(e,t);if(!n.ok&&n.needsPermanent){if(!await dn(e,!0))return;n=await St(e,!0)}if(n.ok)Vt(),en();else{if(n.cancelled)return;Aa(n.error??F(t?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},dn=(0,I.useCallback)((e,t)=>new Promise(n=>Be({paths:e,permanent:t,resolve:n})),[]),G=(0,I.useCallback)(e=>{Be(t=>(t?.resolve(e),null))},[]);(0,I.useEffect)(()=>{if(!g||B)return;let e=e=>{if(Yt(e.target))return;Ge.current?.();let t=Kt(e),n=[...R],r=n.length===1?H.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Nt.length===0)return;e.preventDefault();let n=De.current&&Nt.includes(De.current)?De.current:R.size===1?[...R][0]:null,r=n?Nt.indexOf(n):-1,i=t===`home`?0:t===`end`?Nt.length-1:Math.max(0,Math.min(Nt.length-1,r+(t===`arrowdown`?1:-1))),a=Nt[i];Me(new Set([a])),De.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===h.copy?i(()=>{n.length>0&&rn(n)}):t===h.cut?i(()=>{n.length>0&&rn(n,!0)}):t===h.paste?i(()=>void W(Lt)):t===h.delete?i(()=>{n.length>0&&un(n)}):t===h.deletePermanently?i(()=>{n.length>0&&un(n,!0)}):t===h.selectAll?i(()=>{Me(new Set(Nt)),De.current=Nt[0]??null}):t===h.invertSelection?i(()=>{Me(new Set(Nt.filter(e=>!R.has(e)))),De.current=Nt[0]??null}):t===h.rename&&r?i(()=>void on(r)):t===h.open&&r?i(()=>{r.isDirectory?d(r.fullPath):f?.(r.fullPath)}):t===h.newFolder||t===`f10`?i(()=>void an(null)):t===h.terminal?i(()=>void jt(Lt)):t===h.properties&&i(()=>void kt(n.length>0?n:Lt?[Lt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Nt,rn,an,Lt,g,B,d,f,W,un,on,H,R,h]);let K=ze&&(0,J.jsx)(qo,{confirmLabel:ze.permanent?F(`delete`):F(`move`),danger:ze.permanent,message:ze.permanent?F(`permanently_delete_target_this_cannot_be_undone`,{target:ze.paths.length===1?F(`this_item`):F(`count_items`,{count:ze.paths.length})}):F(`move_target_to_the_recycle_bin`,{target:ze.paths.length===1?F(`this_item`):F(`count_items`,{count:ze.paths.length})}),onCancel:()=>G(!1),onConfirm:()=>G(!0),open:!0,title:ze.permanent?F(`delete_permanently`):F(`move_to_the_recycle_bin`)}),q=(0,I.useMemo)(()=>{if(!e||R.size===0)return null;let t=Nt.find(e=>R.has(e));return t?H.find(e=>e.entry.fullPath===t)?.entry??null:null},[Nt,e,H,R]),fn=(0,I.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:x(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:F(`type`),value:F(`folder`)},{label:F(`location`),value:e.parent??`—`},{label:F(`path`),value:e.path},{label:F(`size`),value:S(t)},{label:F(`items`),value:se(F,n,`k_1_item`,`count_items`)},{label:F(`modified`),value:`—`},{label:F(`created`),value:`—`},{label:F(`attributes`),value:`—`}]}},[e,F]),pn=(0,I.useMemo)(()=>{if(!q||!e)return null;let t=q.isDirectory?e.folderSizes[q.name]:void 0,n=e.tags[q.name]??[],r=q.name.lastIndexOf(`.`),i=r>0&&r<q.name.length-1?q.name.slice(r+1).toUpperCase():`—`;return{name:q.name,path:q.fullPath,isDirectory:q.isDirectory,size:q.size,modified:q.modified,created:q.created,fields:[{label:F(`type`),value:Sl(q,F)},...q.isEncrypted?[{label:F(`encryption`),value:F(`password_required`)}]:[],{label:F(`extension`),value:q.isDirectory?`—`:i},{label:F(`location`),value:e.path},{label:F(`full_path`),value:q.fullPath},{label:F(`size`),value:q.isDirectory?t===void 0?`—`:S(t):S(q.size)},...q.isDirectory?[{label:F(`items`),value:`${e.counts[q.name]??`—`}`}]:[],{label:F(`modified`),value:oe(q.modified)},{label:F(`created`),value:oe(q.created)},{label:F(`link_status`),value:q.linkTarget==null?q.linkCount>1?F(`hard_link`):`—`:q.linkValid?`ok`:F(`broken`)},...q.linkTarget?[{label:F(`target`),value:q.linkTarget}]:[],...q.linkCount>1?[{label:F(`links`),value:String(q.linkCount)}]:[],{label:F(`attributes`),value:[q.isHidden?F(`hidden`):``,q.isSystem?F(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:F(`tags`),value:n.join(`, `)}]:[]]}},[e,q,F]),mn=B?.paths.length===1?B.paths[0]:null,hn=mn?H.find(e=>e.entry.fullPath===mn)?.entry:void 0,gn=hn?{path:hn.fullPath,isDirectory:hn.isDirectory}:null,_n=pn??fn,vn=(0,I.useRef)(ie);vn.current=ie,(0,I.useEffect)(()=>{vn.current?.(_n)},[ie,_n]);let xn=A&&_n&&(0,J.jsx)(is,{info:_n,onWidth:Je,selectionNote:R.size>1?se(F,R.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:O,videoAutoplay:k,width:Ke});return n&&!e?(0,J.jsx)(Eu,{children:(0,J.jsx)(Ou,{children:n})}):!e&&!t?(0,J.jsx)(Eu,{children:(0,J.jsx)(Du,{children:F(`nothing_selected`)})}):i.mode===`grid`?(0,J.jsxs)(Ul,{onPointerDown:j,children:[(0,J.jsxs)(Wl,{children:[(0,J.jsxs)(Ql,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Vt()},onContextMenu:e=>$t(e),onDragOver:Zt,onDragStart:Xt,onDrop:Qt,onScroll:e=>{M?.(e.currentTarget),bt(e.currentTarget)},children:[p&&H.length>0&&(0,J.jsxs)(Bl,{children:[(0,J.jsx)(Rl,{$checked:!me&&Pt,$partial:!me&&Ft,"aria-label":F(Pt?`select_none`:`select_all`),disabled:me,onClick:It,title:F(Pt?`select_none`:`select_all`),type:`button`,children:Pt?(0,J.jsx)(Oi,{size:10}):Ft?(0,J.jsx)(zl,{}):null}),(0,J.jsx)(`span`,{children:F(Pt?`select_none`:`select_all`)})]}),t&&!e?(0,J.jsx)(ru,{$size:i.gridSize,children:(0,J.jsx)(Ol,{size:i.gridSize})}):(0,J.jsx)(Al,{counts:e?.counts,currentPath:nt?r.currentPath:null,groups:Tt,gridSize:i.gridSize,innerRef:ye,onContextMenu:$t,onOpen:d,onOpenFile:f,onRenameCancel:cn,onRenameChange:sn,onRenameCommit:ln,onSelect:Rt,onToggle:Bt,openOnSingleClick:m,renaming:Ve,searching:nt,selected:R,showCheckboxes:p,showTarget:it}),!t&&e&&H.length===0&&(0,J.jsx)(Tu,{children:(0,J.jsx)(Du,{children:n??(nt&&r.mode===`hide`?F(`no_entries_match_the_search`):F(`this_folder_is_empty`))})}),ce]}),B&&(0,J.jsx)(vo,{canPaste:Ye,directory:Lt,allowCompression:!0,menu:B,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ne,favoritePaths:T,onExtractArchive:re,onArchiveCreated:tn,onClose:Ut,onCompressTo:(e,t)=>V({paths:e,name:t}),onCopy:rn,onCreateFile:e=>void an(e),onCreateFolder:e=>void an(null,e),onDelete:un,onOpen:d,onOpenFile:f,onPaste:W,onRefresh:en,onRename:e=>{let t=H.find(t=>t.entry.fullPath===e)?.entry;t&&on(t)},shortcuts:h,target:gn}),nn,K]}),xn]}):(0,J.jsxs)(Ul,{onPointerDown:j,children:[(0,J.jsxs)(Wl,{children:[(0,J.jsxs)(Gl,{onScroll:e=>{L.current&&L.current.scrollLeft!==e.currentTarget.scrollLeft&&(L.current.scrollLeft=e.currentTarget.scrollLeft)},ref:xe,style:{gridTemplateColumns:ot},children:[(0,J.jsxs)(Fl,{ref:ct,children:[p&&(0,J.jsx)(Rl,{$checked:!me&&Pt,$partial:!me&&Ft,"aria-label":F(Pt?`select_none`:`select_all`),disabled:me,onClick:e=>{e.stopPropagation(),It()},title:F(Pt?`select_none`:`select_all`),type:`button`,children:Pt?(0,J.jsx)(Oi,{size:10}):Ft?(0,J.jsx)(zl,{}):null}),(0,J.jsxs)(Kl,{onClick:()=>l(`name`),type:`button`,children:[F(`name`),ml(i,`name`)]}),(0,J.jsx)(Ll,{"aria-label":F(`resize_column`),onDoubleClick:()=>rt[0]&&ft(rt[0].id),onPointerDown:ut,role:`separator`})]}),rt.map((e,t)=>(0,J.jsxs)(Il,{children:[(0,J.jsxs)(Kl,{onClick:()=>l(e.id),type:`button`,children:[F(e.label),ml(i,e.id)]}),t<rt.length-1&&(0,J.jsx)(Ll,{"aria-label":F(`resize_column`),onDoubleClick:()=>ft(e.id),onPointerDown:e=>dt(e,t),role:`separator`})]},e.id))]}),(0,J.jsxs)(ql,{onClick:e=>{e.target===e.currentTarget&&Vt()},onContextMenu:e=>$t(e),onDragOver:Zt,onDragStart:Xt,onDrop:Qt,onScroll:e=>{xe.current&&xe.current.scrollLeft!==e.currentTarget.scrollLeft&&(xe.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;Te(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:L,children:[t&&!e?(0,J.jsx)(Dl,{template:ot,columns:rt.length}):(0,J.jsxs)(J.Fragment,{children:[mt>0&&(0,J.jsx)(`div`,{style:{height:mt*pt}}),vt.map(t=>{let n=t.entry.fullPath;return(0,J.jsx)(Ml,{current:nt&&n===r.currentPath,dim:nt&&t.ranges===null,height:pt,iconSize:i.iconSize,innerRef:ye,listing:e,onContextMenu:$t,onOpen:Wt,onRenameCancel:cn,onRenameChange:sn,onRenameCommit:ln,onSelect:Rt,onTagEdit:qt,onToggle:Bt,openOnSingleClick:m,renaming:Ve?.path===n?{value:Ve.value}:null,row:t,selected:R.has(n),showCheckboxes:p,showTarget:it,template:ot,visible:rt},n)}),ht<H.length&&(0,J.jsx)(`div`,{style:{height:(H.length-ht)*pt}})]}),!t&&e&&H.length===0&&(0,J.jsx)(Eu,{children:(0,J.jsx)(Du,{children:n??(nt&&r.mode===`hide`?F(`no_entries_match_the_search`):F(`this_folder_is_empty`))})})]}),a&&Et.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Jl,{onDoubleClick:tt,onPointerDown:Qe,onPointerMove:$e,onPointerUp:et,title:F(`drag_to_resize_double_click_to_reset`)}),(0,J.jsxs)(Yl,{style:{height:Ae},children:[(0,J.jsxs)(Xl,{children:[F(`preview`),(0,J.jsx)(Zl,{children:Dt>nl?`${At.length} / ${Dt}`:Dt})]}),(0,J.jsx)(Ql,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Vt()},onContextMenu:e=>$t(e),children:(0,J.jsx)(Al,{counts:e?.counts,currentPath:nt?r.currentPath:null,groups:Mt,gridSize:i.gridSize,onContextMenu:$t,onOpen:d,onOpenFile:f,onSelect:Rt,onToggle:Bt,openOnSingleClick:m,searching:nt,selected:R,showCheckboxes:p,showTarget:it})})]})]}),Oe&&e&&(0,J.jsx)(zs,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(Oe.entry.name,e,t),onClose:()=>ke(null),tags:e.tags[Oe.entry.name]??[],x:Oe.x,y:Oe.y}),B&&(0,J.jsx)(vo,{canPaste:Ye,directory:Lt,allowCompression:!0,menu:B,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ne,favoritePaths:T,onExtractArchive:re,onArchiveCreated:tn,onClose:Ut,onCompressTo:(e,t)=>V({paths:e,name:t}),onCopy:rn,onCreateFile:e=>void an(e),onCreateFolder:e=>void an(null,e),onDelete:un,onOpen:d,onOpenFile:f,onPaste:W,onRefresh:en,onRename:e=>{let t=H.find(t=>t.entry.fullPath===e)?.entry;t&&on(t)},shortcuts:h,target:gn}),nn,K]}),xn]})}function ml(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var hl=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function gl(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Sl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:hl.compare(String(r),String(i));return t.sortDescending?-o:o})}var _l=On.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&An(t.entry.name)===e})),vl=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},..._l.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function yl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function bl(e){return Math.max(24,Math.min(e-56,160))}var xl={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Sl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`internet_shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`folder_link`):t(`symbolic_link`);if(e.isDirectory)return t(`folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(xl[Qs(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`file`)}function Cl(e,t,n,r){switch(e){case`type`:return Sl(t,r);case`size`:return Tl(t,n.folderSizes);case`modified`:return oe(t.modified);case`created`:return oe(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:r(`broken`);default:return``}}function wl({name:e,ranges:t}){if(!t||t.length===0)return(0,J.jsx)(J.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,J.jsx)(wu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,J.jsx)(J.Fragment,{children:n})}function Tl(e,t){if(!e.isDirectory)return S(e.size);let n=t[e.name];return n===void 0?`—`:S(n)}function El({entry:e,size:t=18}){let n=o(),r=(0,I.useRef)(null),[i,a]=(0,I.useState)(!1);(0,I.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let s=dn(i?e.fullPath:null,e.isDirectory,t>32),c=K(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,J.jsxs)(Nl,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,J.jsx)($s,{name:e.iconSource.slice(5),size:t}):c?(0,J.jsx)(`img`,{alt:``,height:t,src:c,width:t}):s?(0,J.jsx)(`img`,{alt:``,height:t,src:s,width:t}):e.isDirectory?(0,J.jsx)(di,{size:t}):(0,J.jsx)($s,{name:Qs(e.name),size:t}),e.isEncrypted&&(0,J.jsx)(Pl,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,J.jsx)(Sa,{size:Math.max(8,Math.round(t*.52))})})]})}function Dl({template:e,columns:t}){return(0,J.jsx)(J.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,J.jsxs)(iu,{style:{gridTemplateColumns:e},children:[(0,J.jsxs)(su,{children:[(0,J.jsx)(au,{style:{flexShrink:0,height:18,width:18}}),(0,J.jsx)(au,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,J.jsx)(au,{style:{width:t%2==0?44:92}},t))]},r))})}function Ol({size:e}){return(0,J.jsx)(J.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,J.jsxs)(vu,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,J.jsx)(yu,{children:(0,J.jsx)(au,{style:{height:e,width:e}})}),(0,J.jsx)(xu,{children:(0,J.jsx)(au,{style:{height:9,width:`${t}%`}})})]},n))})}var kl=(0,I.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=o(),x=Fn(),ee=!e.entry.isDirectory&&jn(e.entry.name),te=(0,I.useRef)(null),[C,w]=(0,I.useState)(!1);(0,I.useEffect)(()=>{if(!ee||C)return;let e=te.current;if(!e)return;if(!(`IntersectionObserver`in window)){w(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(w(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[ee,C]);let ne=mn(ee&&C?e.entry.fullPath:null,192,e.entry.modified),[T,re]=(0,I.useState)(!1),E=ee&&ne!==null&&!T,D=e.entry.fullPath,O=t=>{e.entry.isDirectory?v(D,Gt(t)):y?.(D,Gt(t))};return(0,J.jsxs)(vu,{$current:t,$dim:n,$image:E,$selected:c,onClick:e=>{h(e,D),u&&O(e)},onContextMenu:e=>_(e,D),onDoubleClick:e=>{u||O(e)},ref:e=>{te.current=e,t&&s&&(s.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":D,draggable:!d,children:[l&&(0,J.jsx)(Hl,{$checked:c,onClick:e=>{e.stopPropagation(),g(D)},onDoubleClick:e=>e.stopPropagation(),title:b(c?`deselect`:`select`),type:`button`,children:c&&(0,J.jsx)(Oi,{size:10})}),(0,J.jsx)(yu,{children:E?(0,J.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>re(!0),src:ne}):(0,J.jsx)(bu,{children:e.place&&x.useIcons?(0,J.jsx)(Is,{place:e.place,size:r}):(0,J.jsx)(El,{entry:e.entry,size:r})})}),(0,J.jsxs)(xu,{children:[d?(0,J.jsx)(jl,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:d.value}):(0,J.jsx)(Su,{$broken:e.entry.linkValid===!1,children:(0,J.jsx)(wl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,J.jsxs)(lu,{title:b(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,J.jsx)(Sa,{size:9}),b(`encrypted`)]}),e.cut&&(0,J.jsxs)(uu,{title:b(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,J.jsx)(ha,{size:9}),b(`cut`)]}),(0,J.jsx)(Cu,{children:e.entry.isDirectory?i===void 0?Sl(e.entry,b):b(`type_count_items`,{type:Sl(e.entry,b),count:i}):b(`type_size`,{type:Sl(e.entry,b),size:S(e.entry.size)})}),a&&e.entry.linkTarget&&(0,J.jsxs)(fu,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,J.jsx)(Ca,{size:9}),(0,J.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Al({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onSelect:f,onToggle:p,onContextMenu:m,onOpen:h,onOpenFile:g,onRenameChange:_,onRenameCommit:v,onRenameCancel:y}){let b=o();return(0,J.jsx)(J.Fragment,{children:e.map(e=>(0,J.jsxs)($l,{children:[(0,J.jsxs)(eu,{children:[b(e.label),(0,J.jsx)(tu,{children:e.rows.length}),(0,J.jsx)(nu,{})]}),(0,J.jsx)(ru,{$size:t,children:e.rows.map(e=>(0,J.jsx)(kl,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:bl(t),innerRef:s,itemCount:n?.[e.entry.name],onContextMenu:m,onOpen:h,onOpenFile:g,onSelect:f,onToggle:p,openOnSingleClick:u,onRenameCancel:y,onRenameChange:_,onRenameCommit:v,renaming:d?.path===e.entry.fullPath?d:null,row:e,selected:c.has(e.entry.fullPath),showCheckboxes:l,showTarget:r},e.entry.fullPath))})]},e.id))})}function jl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,I.useRef)(null);return(0,I.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,J.jsx)(du,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Ml=(0,I.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:s,iconSize:c,height:l,template:u,visible:d,listing:f,innerRef:p,renaming:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onTagEdit:y,onRenameChange:b,onRenameCommit:x,onRenameCancel:ee}){let S=o(),te=Fn(),C=e.entry.fullPath;return(0,J.jsxs)(ou,{$current:t,$dim:n,$height:l,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{h(t,C),s&&v(e.entry,t)},onContextMenu:e=>_(e,C),onDoubleClick:t=>{s||v(e.entry,t)},ref:t?p:void 0,style:{gridTemplateColumns:u},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":C,draggable:!m,children:[(0,J.jsxs)(su,{children:[i&&(0,J.jsx)(Vl,{$checked:r,onClick:e=>{e.stopPropagation(),g(C)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`deselect`:`select`),type:`button`,children:r&&(0,J.jsx)(Oi,{size:10})}),e.place&&te.useIcons?(0,J.jsx)(Nl,{children:(0,J.jsx)(Is,{place:e.place,size:c})}):(0,J.jsx)(El,{entry:e.entry,size:c}),m?(0,J.jsx)(jl,{onCancel:ee,onChange:b,onCommit:x,value:m.value}):(0,J.jsx)(cu,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,J.jsx)(wl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,J.jsxs)(lu,{title:S(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,J.jsx)(Sa,{size:9}),S(`encrypted`)]}),e.cut&&(0,J.jsxs)(uu,{title:S(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,J.jsx)(ha,{size:9}),S(`cut`)]}),a&&e.entry.linkTarget&&(0,J.jsxs)(fu,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,J.jsx)(Ca,{size:9}),(0,J.jsx)(`span`,{children:e.entry.linkTarget})]})]}),d.map(t=>(0,J.jsx)(pu,{children:t.id===`tags`?(0,J.jsx)(mu,{onClick:t=>{t.stopPropagation(),y(e.entry,t.clientX,t.clientY)},title:S(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=f.tagColors?.[e]??`#64748b`;return(0,J.jsx)(hu,{$color:t,$ink:Rs(t),children:e},e)}):(0,J.jsx)(gu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,J.jsx)(_u,{children:S(`broken`)}):Cl(t.id,e.entry,f,S)},t.id))]})}),Nl=v.span`
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
`,Pl=v.span`
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
`,Fl=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,Il=v.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,Ll=v.span`
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
`,Rl=v.button`
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
`,zl=v.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Bl=v.div`
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
`,Vl=v.button`
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
`,Hl=v(Vl)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Ul=v.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Wl=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,Gl=v.div`
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
`,Kl=v.button`
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
`,ql=v.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Jl=v.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Yl=v.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Xl=v.div`
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
`,Zl=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Ql=v.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,$l=v.section`
    & + & {
        margin-top: 22px;
    }
`,eu=v.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,tu=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,nu=v.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,ru=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,iu=v.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,au=v.span`
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
`,ou=v.div`
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
`,su=v.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,cu=v.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,lu=v.span`
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
`,uu=v.span`
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
`,du=v.input`
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
`,fu=v.span`
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
`,pu=v.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,mu=v.button`
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
`,hu=v.span`
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
`,gu=v.span`
    color: var(--text-muted);
    font-size: 11px;
`,_u=v.span`
    color: #fca5a5;
`,vu=v.div`
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
`,yu=v.div`
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
`,bu=v.span`
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
`,xu=v.div`
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
`,Su=v.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cu=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,wu=v.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Tu=v.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Eu=v.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Du=v.p`
    font-size: 13px;
    color: var(--text-muted);
`,Ou=v.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,ku=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Au=`/assets/bloom-BpfZWiaG.mp4`,ju=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Mu=`/assets/drift-BRBSQL2_.mp4`,Nu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Pu=`/assets/ember-CtSz0YxR.mp4`,Fu=[{name:`blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`slate`,accent:`#64748b`,secondary:`#94a3b8`}],Iu=[{id:`aurora`,name:`aurora`},{id:`dunes`,name:`dunes`},{id:`tide`,name:`tide`}],Lu=[{id:`builtin:video:drift`,name:`drift`,url:Mu,poster:ju},{id:`builtin:video:ember`,name:`ember`,url:Pu,poster:Nu},{id:`builtin:video:bloom`,name:`bloom`,url:Au,poster:ku}],Ru=Iu.map(e=>({...e,variants:Fu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Wu(Gu(e.id,t,!1)),lightUrl:Wu(Gu(e.id,t,!0))}))})),zu=[{id:`ridgeline`,name:`ridgeline`},{id:`skyline`,name:`skyline`},{id:`orbit`,name:`orbit`}].flatMap(e=>Fu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Wu(Ku(e.id,t,!1)),lightUrl:Wu(Ku(e.id,t,!0))}))),Bu=new Map([...Ru.flatMap(e=>e.variants),...zu].map(e=>[e.id,e])),Vu=new Map(Lu.map(e=>[e.id,e]));function Hu(e,t=`dark`){if(Vu.has(e))return Vu.get(e).url;let n=Bu.get(e)??Bu.get(`builtin:${e.split(`:`)[1]??``}:indigo`);return n?t===`light`?n.lightUrl:n.url:null}function Uu(e){return Vu.has(e)}function Wu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function Gu(e,t,n){return e===`dunes`?$u(t,n):e===`tide`?ed(t,n):Qu(t,n)}function Ku(e,t,n){return e===`skyline`?Ju(t,n):e===`orbit`?Yu(t,n):qu(t,n)}function qu({accent:e,secondary:t},n){let r=Zu(t,n?`#e8eefc`:`#05070f`,n?.9:.86),i=Zu(e,n?`#f6f8ff`:`#0b1020`,n?.84:.72),a=Zu(t,n?`#dbe3f0`:`#0a0f1d`,n?.55:.66),o=Zu(e,n?`#c3cfdf`:`#060a14`,n?.6:.74),s=n?`#e9eefb`:`#05070d`,c=Zu(e,n?`#a9b8cc`:`#03050a`,n?.62:.9);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${Zu(t,`#ffffff`,n?.45:.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${a}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${o}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${c}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function Ju({accent:e,secondary:t},n){let r=Zu(t,n?`#e9eefc`:`#07040d`,n?.9:.84),i=Zu(e,n?`#f4f6ff`:`#100716`,n?.82:.7),a=Zu(e,n?`#b7c4d6`:`#08050e`,n?.7:.82),o=Zu(t,n?`#c9d3e2`:`#0b0613`,n?.66:.78),s=[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],i)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${i%2?a:o}" opacity="0.92"/>`+Array.from({length:5},(a,o)=>`<rect x="${t+14}" y="${n+24+o*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+i%3*.05}"/>`).join(``)).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${Zu(e,n?`#d5deea`:`#040208`,n?.7:.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function Yu({accent:e,secondary:t},n){let r=Zu(e,n?`#eef3ff`:`#03050d`,n?.88:.9),i=Zu(t,n?`#f8faff`:`#05030c`,n?.9:.94),a=Zu(t,e,.35),o=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="${n?`#64748b`:`#ffffff`}" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${Zu(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${r}"/>
            <stop offset="1" stop-color="${i}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${Zu(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${Zu(e,n?`#cfd9e6`:`#08050f`,n?.55:.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${Zu(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function Xu(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function Zu(e,t,n){let[r,i,a]=Xu(e),[o,s,c]=Xu(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function Qu({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Zu(e,n?`#f2f6ff`:`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${Zu(t,n?`#eef2ff`:`#070b1c`,n?.86:.85)}"/>
            <stop offset="1" stop-color="${Zu(e,n?`#e8f0fb`:`#04060c`,n?.9:.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${Zu(e,t,.5)}" opacity="${n?.26:.42}" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="${n?.32:.5}" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="${n?.3:.42}" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="${n?.26:.36}" filter="url(#soft2)"/>
</svg>`}function $u({accent:e,secondary:t},n){let r=Zu(t,n?`#fff4e2`:`#120a05`,n?.9:.84),i=Zu(t,n?`#fff8ee`:`#1c0f07`,n?.82:.7),a=Zu(e,t,.25),o=Zu(e,n?`#e2cdae`:`#160b04`,n?.5:.55),s=Zu(e,n?`#ecdcc2`:`#1a0d05`,n?.6:.7),c=Zu(e,n?`#d9c1a2`:`#0b0603`,n?.7:.82);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1480" cy="250" r="110" fill="${Zu(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${c}" opacity="${n?.5:.75}"/>
</svg>`}function ed({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Zu(e,n?`#e6f7fb`:`#02070a`,n?.88:.9)}"/>
            <stop offset="0.5" stop-color="${Zu(t,n?`#eefaf8`:`#03100f`,n?.85:.82)}"/>
            <stop offset="1" stop-color="${Zu(e,n?`#dff2f7`:`#020609`,n?.9:.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${Zu(e,t,.4)}" opacity="${n?.34:.5}" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var td=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function nd(e){return td.test(e)}function rd({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):O(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=gn(i),o=n?.startsWith(`builtin:`)?Hu(n,t):r??a,s=r===null?i===null?n!==null&&Uu(n):nd(i):nd(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,J.jsxs)(id,{"aria-hidden":!0,children:[s?(0,J.jsx)(od,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,J.jsx)(ad,{src:o,style:{filter:c}}),(0,J.jsx)(sd,{})]})}var id=v.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,ad=v.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,od=v.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,sd=v.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`;function cd({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let s=o(),c=(0,I.useRef)(null),[l,u]=(0,I.useState)(()=>Math.max(1,Math.ceil(n))),d=e??`delete`;return(0,I.useEffect)(()=>{c.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));u(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,Ha.createPortal)((0,J.jsx)(fd,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,J.jsxs)(pd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(md,{children:s(`protected_folder`)}),(0,J.jsx)(hd,{children:s(`these_paths_are_protected_by_the_safety_settings`)}),(0,J.jsx)(gd,{children:t.map(e=>(0,J.jsxs)(_d,{children:[(0,J.jsx)(vd,{children:e.path}),(0,J.jsx)(yd,{children:s(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,J.jsx)(bd,{children:ld(s,d,r??!1)}),(0,J.jsx)(xd,{children:ud(s,d)}),(0,J.jsx)(Sd,{children:s(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,J.jsxs)(Cd,{children:[(0,J.jsx)(wd,{onClick:i,ref:c,type:`button`,children:s(`cancel`)}),(0,J.jsx)(Td,{disabled:l>0,onClick:a,type:`button`,children:l>0?dd(s,d,l):dd(s,d,0)})]})]})}),document.body)}function ld(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function ud(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function dd(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var fd=v.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${ro}
`,pd=v.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Qa}
`,md=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,hd=v.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,gd=v.div`
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
`,_d=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,vd=v.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,yd=v.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,bd=v.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,xd=v.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Sd=v.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Cd=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,wd=v.button`
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
`,Td=v.button`
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
`;function Ed(){let e=o(),[t,n]=(0,I.useState)(null),r=(0,I.useRef)(null),i=(0,I.useRef)(null);(0,I.useEffect)(()=>(ka(e=>new Promise(t=>{r.current=t,n(e)})),()=>ka(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,I.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Ha.createPortal)((0,J.jsx)(Dd,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,J.jsxs)(Od,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(kd,{children:e(`notice`)}),(0,J.jsx)(Ad,{children:t}),(0,J.jsx)(jd,{children:(0,J.jsx)(Md,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var Dd=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${ro}
`,Od=v.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Qa}
`,kd=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ad=v.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,jd=v.div`
    display: flex;
    justify-content: flex-end;
`,Md=v.button`
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
`;function Nd(){let e=o(),[t,n]=(0,I.useState)(null),[r,i]=(0,I.useState)(``),a=(0,I.useRef)(null),s=(0,I.useRef)(null);(0,I.useEffect)(()=>(ja((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>ja(null)),[]),(0,I.useEffect)(()=>{t&&window.setTimeout(()=>s.current?.focus(),0)},[t]);let c=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let l=()=>{r.length>0&&c(r)};return(0,Ha.createPortal)((0,J.jsx)(Pd,{onPointerDown:e=>{e.target===e.currentTarget&&c(null)},children:(0,J.jsxs)(Fd,{role:`dialog`,"aria-modal":`true`,children:[(0,J.jsx)(Id,{children:e(`archive_password`)}),(0,J.jsx)(Ld,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,J.jsx)(Rd,{title:t.archive,children:t.archive}),(0,J.jsx)(zd,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),l()):e.key===`Escape`&&(e.preventDefault(),c(null))},ref:s,spellCheck:!1,type:`password`,value:r}),(0,J.jsxs)(Bd,{children:[(0,J.jsx)(Vd,{onClick:()=>c(null),type:`button`,children:e(`cancel`)}),(0,J.jsx)(Hd,{disabled:r.length===0,onClick:l,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Pd=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${ro}
`,Fd=v.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Qa}
`,Id=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ld=v.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Rd=v.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zd=v.input`
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
`,Bd=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
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

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,Hd=v(Vd)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Ud({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:s,compact:c=!1,placeholder:l,onQuery:u,onPrevious:d,onNext:f,onMatchCase:p,onRegex:m,onMode:h,onClose:g,onSelectMatches:_}){let v=o(),y=(0,I.useRef)(null),b=l??v(`search_this_folder`);(0,I.useEffect)(()=>{let e=y.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[s]);let x=e=>{e(),y.current?.focus()};return(0,J.jsxs)(Wd,{children:[(0,J.jsx)(mi,{}),(0,J.jsx)(Gd,{"aria-label":b,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?d():f()),e.key===`Escape`&&(e.preventDefault(),g())},placeholder:b,ref:y,spellCheck:!1,value:e}),!c&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Kd,{children:i===0?`0/0`:`${a+1}/${i}`}),_&&(0,J.jsx)(qd,{disabled:i===0,onClick:_,title:v(`select_all_matches`),type:`button`,children:(0,J.jsx)(Oi,{size:12})}),(0,J.jsx)(qd,{$chevron:!0,onClick:()=>x(d),title:v(`previous_match_shift_enter`),type:`button`,children:(0,J.jsx)(bi,{size:12})}),(0,J.jsx)(qd,{$chevron:!0,$down:!0,onClick:()=>x(f),title:v(`next_match_enter`),type:`button`,children:(0,J.jsx)(bi,{size:12})})]}),(0,J.jsx)(Jd,{$on:n,onClick:()=>x(p),title:v(`match_case`),type:`button`,children:`Aa`}),(0,J.jsx)(Jd,{$on:r,onClick:()=>x(m),title:v(`regular_expression`),type:`button`,children:`.*`}),!c&&(0,J.jsx)(Yd,{$on:t===`hide`,onClick:()=>x(h),title:v(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,J.jsx)(ji,{size:12}):(0,J.jsx)(Ai,{size:12})}),(0,J.jsx)(qd,{onClick:g,title:v(`close_search_esc`),type:`button`,children:(0,J.jsx)(ki,{size:12})})]})}var Wd=v.div`
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
    ${to}
`,Gd=v.input`
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
`,Kd=v.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,qd=v.button`
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
`,Jd=v.button`
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
`,Yd=v(Jd)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function Xd(e,t,n,r,i=[]){(0,I.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=bn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function Zd({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=o(),a=(0,I.useRef)(null),s=(0,I.useRef)(null),[c,l]=(0,I.useState)(null);return(0,I.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();l({top:t.bottom+6,left:t.left})},[]),(0,I.useLayoutEffect)(()=>{if(!c||!s.current)return;let e=s.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,c.top-e.height-12):c.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):c.left;(t!==c.top||n!==c.left)&&l({top:t,left:n})},[c]),(0,I.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`span`,{ref:a,style:{display:`none`}}),c&&(0,Ha.createPortal)((0,J.jsxs)(Qd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:s,style:{position:`fixed`,top:c.top,left:c.left},children:[Object.keys(js).map(n=>(0,J.jsx)($d,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:js[n](16)},n)),(0,J.jsx)($d,{onClick:async()=>{let e=await Ea([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`choose_an_image`),type:`button`,children:(0,J.jsx)(_i,{size:13})}),r&&(0,J.jsx)($d,{$active:!e,onClick:()=>t(null),title:i(`default`),type:`button`,children:(0,J.jsx)(ki,{size:12})})]}),document.body)]})}var Qd=v.div`
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
    ${$a}
    transform-origin: top left;
`,$d=v.button`
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
`;function ef({source:e,poster:t,theme:n}){let r=O(e),i=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,a=gn(e.startsWith(`builtin:`)||r?null:e,0,i?`.${i}`:``),o=t??Hu(e,n)??(r?e:a),s=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(i);return o?s?(0,J.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o}):(0,J.jsx)(`img`,{alt:``,src:o}):null}function tf({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let s=o(),c=(0,I.useRef)(null),l=(0,I.useRef)(null),u=(0,I.useRef)(!1),[d,f]=(0,I.useState)(null),[p,m]=(0,I.useState)(null),[h,g]=(0,I.useState)(0),_=()=>{let t=c.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?f({width:1920,height:1080}):n>0&&r>0&&f({width:n,height:r}),i.width>0&&i.height>0&&m({width:i.width,height:i.height})},v=p&&d?Math.min(p.height,n*(p.width/d.width)):0,y=Math.max(0,(p?.height??0)-v);(0,I.useEffect)(()=>{p&&d&&!u.current&&(u.current=!0,g(Math.min(y,Math.max(0,r*y))))},[p,d,y,r]),(0,I.useEffect)(()=>{let e=()=>_();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,I.useEffect)(()=>{let e=window.requestAnimationFrame(_);return()=>window.cancelAnimationFrame(e)},[e,t]);let b=e=>{l.current={y:e.clientY,top:h},e.currentTarget.setPointerCapture(e.pointerId)},x=e=>{let t=l.current;t&&g(Math.min(y,Math.max(0,t.top+e.clientY-t.y)))},ee=e=>{l.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,J.jsx)(Cf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,J.jsxs)(wf,{children:[(0,J.jsxs)(Tf,{children:[(0,J.jsx)(`span`,{children:s(`adjust_banner_framing`)}),(0,J.jsx)(Mf,{onClick:i,title:s(`cancel`),type:`button`,children:(0,J.jsx)(ki,{size:12})})]}),(0,J.jsx)(Ef,{children:s(`drag_the_frame_to_choose_the_visible_part`)}),(0,J.jsxs)(Df,{children:[t?(0,J.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{_(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{c.current=e},src:e}):(0,J.jsx)(`img`,{alt:``,draggable:!1,onLoad:_,ref:e=>{c.current=e},src:e}),v>0&&(0,J.jsx)(Of,{onPointerCancel:ee,onPointerDown:b,onPointerMove:x,onPointerUp:ee,style:{height:v,top:h},children:(0,J.jsx)(kf,{})})]}),(0,J.jsxs)(Af,{children:[(0,J.jsx)(jf,{onClick:i,type:`button`,children:s(`cancel`)}),(0,J.jsx)(jf,{$primary:!0,onClick:()=>a(y>0?h/y:r),type:`button`,children:s(`save`)})]})]})})}var nf=150,rf=120,af=200,of=v.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,sf=v.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,cf=v.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${af}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${af}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(af*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(af*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(af*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${af}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(af*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(af*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(af*.18)}px),
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
`,lf=v.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${nf}px);
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
`,uf=v.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,df=v.section`
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
`,ff=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,pf=v.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,mf=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,hf=v.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,gf=v.input`
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
`,_f=v.button`
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
`,vf=v.div`
    position: relative;
    width: 132px;
    height: 72px;
`,yf=v.button`
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
`,bf=v.button`
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
`,xf=v.span`
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
`,Sf=v.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Cf=v.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,wf=v.div`
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
`,Tf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Ef=v.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,Df=v.div`
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
`,Of=v.div`
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
`,kf=v.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,Af=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,jf=v.button`
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
`,Mf=v.button`
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
`,Nf=v.button`
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
`,Pf=v.div`
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
`,Ff=v.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,If=v.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Lf=v.button`
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
`,Rf=v.div`
    position: relative;
    display: inline-flex;
`,zf=v.div`
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
`,Bf=v.button`
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
`,Vf=v.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Hf=v.section`
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
`,Uf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Wf=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Gf=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Kf=v.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,qf=v.input`
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
`,Jf=v.button`
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
`,Yf=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Xf=v.div`
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
`,Zf=v.span`
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
`,Qf=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,$f=v.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,ep=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,tp=v.button`
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
`,np=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,rp=v.button`
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
`,ip=v.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,ap=v.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,op=v.div`
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
`,sp=v.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,cp=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,lp=v.button`
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
`,up=v.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,dp=v.button`
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
`,fp=v.button`
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
`,pp=v.button`
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
`,mp=v.span`
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
`,hp=v.button`
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
`,gp=v.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,_p=v.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,vp=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,yp=v.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,bp=v.input`
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
`,xp=v.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Sp=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Cp=v.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wp=v.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,Tp=v.button`
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
`;function Ep({theme:e,places:t,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:u,onRecentCleared:d,onLayoutChanged:f,onHistoryChanged:p,onDrivesChanged:m,visibilityVersion:h=0,find:g,onSearchMatches:_,readOnly:v=!1,onPick:y,onSelectionChange:b,onAddToTray:te,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:ne,onExtractArchive:T,settingsVersion:re=0}){let E=o(),D=Fn(),[k,ie]=(0,I.useState)(!1),[j,oe]=(0,I.useState)(null),M=j?.overviewBanner??null,ce=M?.startsWith(`builtin:`)??!1,P=M?.startsWith(`url:`)?M.slice(4):O(M)?M:null,le=ce||P?``:M??``,ue=ce?``:P?P.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:le.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,de=ce?Uu(M):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(ue),fe=gn(le.length>0?le:null,0,ue?`.${ue}`:``),pe=M?Hu(M,e)??P??fe:null,[me,he]=(0,I.useState)(``),[ge,_e]=(0,I.useState)(null),[F,ve]=(0,I.useState)(!1),[ye,be]=(0,I.useState)(null),[xe,L]=(0,I.useState)(null),[Se,Ce]=(0,I.useState)(null),[Ee,De]=(0,I.useState)([]),[Oe,ke]=(0,I.useState)(null),[Ae,je]=(0,I.useState)(``),[R,Me]=(0,I.useState)(null),[Pe,z]=(0,I.useState)(null),Fe=tl(`overview`),[B,Ie]=(0,I.useState)(null),[Le,Re]=(0,I.useState)(null),V=(0,I.useRef)(null),ze=(0,I.useRef)(null),Be=(0,I.useRef)(null),Ve=(0,I.useRef)(null),He=(0,I.useRef)(null),Ue=Le??j?.overviewBannerHeight??220,[Ke,qe]=(0,I.useState)(0),[Je,Ye]=(0,I.useState)(null),Ze=Math.min(1,Math.max(0,j?.overviewBannerOffset??.3)),Qe=Ue+af,$e=Je&&Ke>0?Je.height*(Ke/Je.width):Qe,et=$e>0&&$e<Qe+240?(Qe+240)/$e:1,tt=Math.max(1,Math.round(Ke*et)),nt=Math.max(0,$e*et-Qe),rt=Math.min(rf,nt/2,Math.max(20,Ue*.42)),it=rt+Ze*Math.max(0,nt-rt*2),[ot,st]=(0,I.useState)(!1),ct=(e,t=!1)=>y?(Me(e),z({path:e,isDirectory:t}),b?.([e]),!0):!1,lt=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),Me(t),z({path:t,isDirectory:n}),Ie({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,I.useEffect)(()=>(Jc(`overview`,Pe?(e,t)=>Ie({x:e,y:t,target:Pe}):null),()=>Jc(`overview`,null)),[Pe]);let ut=(e,t)=>c(e,t);(0,I.useEffect)(()=>{Xe().then(oe,()=>oe(null))},[re]),(0,I.useEffect)(()=>{if(l.available)return Nc().then(De,()=>void 0),l.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&De(t.data.peers)})},[]),(0,I.useEffect)(()=>{let e=Be.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,I.useEffect)(()=>{if(ce&&!de){Ye({width:1920,height:1080});return}Ye(null);let e=He.current;e?.complete&&e.naturalWidth>0&&Ye({width:e.naturalWidth,height:e.naturalHeight})},[M,ce,de]),(0,I.useEffect)(()=>{let e=Ve.current;if(!e)return;let t=()=>qe(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[j?.overviewBanner]),(0,I.useEffect)(()=>{if(!ge)return;let e=()=>_e(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||_e(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[ge]),(0,I.useEffect)(()=>{if(!F)return;let e=()=>ve(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[F]);let dt=Ns(j),ft=dt.map(e=>e.id),H=(0,I.useRef)(null),pt=e=>ge?.kind===`panel`&&ge.id===e,mt=e=>ge?.kind===`place`&&ge.id===e;(0,I.useEffect)(()=>{if(!l.available)return;let e=dt.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[dt.map(e=>e.path??e.id).join(`|`),a]),Xd(H,g??null,`section`,_??(()=>void 0),[r.length,t.length,n.length,h]);let ht=async(e,t)=>{let n={...j?.placeIcons};t?n[e]=t:delete n[e],_e(null),await U({placeIcons:n}),u(await Ne())},_t=async(e,t)=>{let n={...j?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],L(null),await U({placeNames:n}),u(await Ne())},vt=e=>{Ce(null),be({drive:e,label:e.label||`Local Disk`})},yt=async()=>{if(!ye)return;let{drive:e,label:t}=ye;be(null);let n=await we(e.name,t.trim());n.ok?(Ce(null),m?.()):Ce(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},bt=j?.overviewColumns??1,U=async e=>{if(!j)return;let t={...j,...e,overviewPanels:e.overviewPanels??ft,overviewHidden:[]};oe(await at(t)),f?.()},xt=async()=>{await U({overviewPanels:[...Os],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),u(await Ne()),ie(!1)},St=async()=>{let e=await Ea([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=j?.overviewBanners??[];await U({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},Ct=async()=>{let e=me.trim();if(!j||!O(e))return;let t=j.overviewBanners??[];he(``),await U({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},wt=()=>void U({overviewBanner:null}),Tt=e=>void U({overviewBanners:(j?.overviewBanners??[]).filter(t=>t!==e),...j?.overviewBanner===e||j?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Et=e=>{V.current={y:e.clientY,height:Ue},e.currentTarget.setPointerCapture(e.pointerId)},Dt=e=>{let t=V.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));ze.current=n,Re(n)},Ot=e=>{V.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),ze.current!==null&&(U({overviewBannerHeight:ze.current}),ze.current=null)},kt=(e,t)=>{let n=ft.indexOf(e),r=n+t;if(n<0||r<0||r>=ft.length)return;let i=[...ft];[i[n],i[r]]=[i[r],i[n]],U({overviewPanels:i})},At=(e,t)=>{let n={...j?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],U({overviewTitles:n})},jt=(e,t)=>void U({overviewViews:{...j?.overviewViews,[e]:t}}),Mt=e=>{let t=j?.overviewPinned??dt.filter(e=>e.pinned).map(e=>e.id);U({overviewPinned:dt.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Nt=e=>{_e(null);let t=t=>{let n={...t};return delete n[e],n},n=j?.overviewPinned??dt.filter(e=>e.pinned).map(e=>e.id);U({overviewPanels:ft.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(j?.overviewTitles),overviewViews:t(j?.overviewViews),overviewIcons:t(j?.overviewIcons),panelPlaces:t(j?.panelPlaces)})},Pt=(e,t)=>{let n={...j?.overviewIcons};t?n[e]=t:delete n[e],_e(null),U({overviewIcons:n})},Ft=async e=>{if(!j)return;if(e===`folder`){let e=await Ta();if(!e)return;let t=`folder:${e}`;ft.includes(t)||await U({overviewPanels:[...ft,t]});return}if(e===`quick`){let e=2;for(;ft.includes(`quick:${e}`);)e+=1;await U({overviewPanels:[...ft,`quick:${e}`]});return}let t=e;for(let n=2;ft.includes(t);n+=1)t=`${e}:${n}`;await U({overviewPanels:[...ft,t]})},It=async e=>{let n=await Ta();if(!n)return;if(e.id===`quick`){await U({quickAccess:[...new Set([...t.map(e=>e.path),n])]}),u(await Ne());return}let r=e.places??[];r.some(e=>N(e,n))||await U({panelPlaces:{...j?.panelPlaces,[e.id]:[...r,n]}})},Lt=async(e,n)=>{_e(null),e.id===`quick`?(await U({quickAccess:t.filter(e=>!N(e.path,n)).map(e=>e.path)}),u(await Ne())):await U({panelPlaces:{...j?.panelPlaces,[e.id]:(e.places??[]).filter(e=>!N(e,n))}})},Rt=async(e,n,r)=>{if(N(n,r))return;let i=e.id===`quick`?t.map(e=>e.path):e.places??[],a=i.findIndex(e=>N(e,n)),o=i.findIndex(e=>N(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),e.id===`quick`?(await U({quickAccess:s}),u(await Ne())):await U({panelPlaces:{...j?.panelPlaces,[e.id]:s}})},zt=(e,t)=>({draggable:k,onDragOver:e=>{k&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{k&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{k&&(n.preventDefault(),Rt(e,n.dataTransfer.getData(`text/plain`),t))}}),Bt=e=>e.id===`quick`?t:(e.places??[]).map(e=>{let n=t.find(t=>N(t.path,e));return{name:j?.placeNames?.[e]??n?.name??(x(e)||e),path:e,kind:`folder`,icon:n?.icon??j?.placeIcons?.[e]??null}}),Vt=e=>{if(r.length===0)return(0,J.jsx)(_p,{children:E(`files_and_folders_you_open_show_up_here`)});let t=r.slice(0,i);return e.view===`grid`?(0,J.jsx)(Yf,{children:t.map(e=>{let t=In(D,e.path);return(0,J.jsxs)(Xf,{$plain:!1,$selected:R===e.path,onClick:t=>{ct(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Gt(t)):Te(e.path))},onDoubleClick:()=>y?.(e.path),onContextMenu:t=>lt(t,e.path,e.isDirectory),title:e.path,children:[(0,J.jsx)(Zf,{children:t&&D.useIcons?(0,J.jsx)(Is,{place:t,size:18}):(0,J.jsx)(ec,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,J.jsxs)(Qf,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)($f,{children:e.path})]})]},e.path)})}):(0,J.jsx)(ep,{children:t.map(e=>{let t=In(D,e.path);return(0,J.jsxs)(tp,{$selected:R===e.path,onClick:t=>{ct(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Gt(t)):Te(e.path))},onDoubleClick:()=>y?.(e.path),onContextMenu:t=>lt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&D.useIcons?(0,J.jsx)(Is,{place:t,size:15}):(0,J.jsx)(ec,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,J.jsxs)(np,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)($f,{children:e.path})]})]},e.path)})})},Ut=e=>{let t=j?.favorites??[],n=async e=>{await U({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>N(t.path,e))&&await U({favorites:[...t,{path:e,name:x(e)||e,isDirectory:n}]})},i=(e,t,n)=>{k||ct(t,n)||(n?c(t,Gt(e)):Te(t))},a=k?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(rp,{$row:e.view===`list`,onClick:()=>void Ea().then(e=>r(e,!1)),title:E(`pin_any_file_here`),type:`button`,children:[e.view===`list`?(0,J.jsx)(_i,{size:15}):(0,J.jsx)(Zf,{children:(0,J.jsx)(_i,{size:15})}),e.view===`list`?(0,J.jsxs)(np,{children:[(0,J.jsx)(`strong`,{children:E(`add_file`)}),(0,J.jsx)($f,{children:E(`pin_any_file_here`)})]}):(0,J.jsxs)(Qf,{children:[(0,J.jsx)(`strong`,{children:E(`add_file`)}),(0,J.jsx)($f,{children:E(`pin_any_file_here`)})]})]}),(0,J.jsxs)(rp,{$row:e.view===`list`,onClick:()=>void Ta().then(e=>r(e,!0)),title:E(`pin_any_folder_here`),type:`button`,children:[e.view===`list`?(0,J.jsx)(_i,{size:15}):(0,J.jsx)(Zf,{children:(0,J.jsx)(_i,{size:15})}),e.view===`list`?(0,J.jsxs)(np,{children:[(0,J.jsx)(`strong`,{children:E(`add_folder`)}),(0,J.jsx)($f,{children:E(`pin_any_folder_here`)})]}):(0,J.jsxs)(Qf,{children:[(0,J.jsx)(`strong`,{children:E(`add_folder`)}),(0,J.jsx)($f,{children:E(`pin_any_folder_here`)})]})]})]}):null;return t.length===0&&!k?(0,J.jsx)(_p,{children:E(`no_favorites_yet_right_click_any_file_or_folder_and_add_it_here`)}):e.view===`grid`?(0,J.jsxs)(Yf,{children:[t.map(e=>{let t=In(D,e.path);return(0,J.jsxs)(Xf,{$plain:k,$selected:R===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!k&&y?.(e.path),onContextMenu:t=>!k&&lt(t,e.path,e.isDirectory),title:e.path,children:[k&&(0,J.jsx)(fp,{onClick:t=>{t.stopPropagation(),n(e.path)},title:E(`remove_from_favorites`),type:`button`,children:(0,J.jsx)(ki,{size:11})}),(0,J.jsx)(Zf,{children:t&&D.useIcons?(0,J.jsx)(Is,{place:t,size:18}):(0,J.jsx)(ec,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,J.jsxs)(Qf,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)($f,{children:e.path})]})]},e.path)}),a]}):(0,J.jsxs)(ep,{children:[t.map(e=>{let t=In(D,e.path);return(0,J.jsxs)(tp,{$selected:R===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!k&&y?.(e.path),onContextMenu:t=>!k&&lt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&D.useIcons?(0,J.jsx)(Is,{place:t,size:15}):(0,J.jsx)(ec,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,J.jsxs)(np,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)($f,{children:e.path})]}),k&&(0,J.jsx)(fp,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:E(`remove_from_favorites`),type:`button`,children:(0,J.jsx)(ki,{size:11})})]},e.path)}),a]})},Wt=e=>{if(n.length===0)return(0,J.jsx)(_p,{children:E(`no_drives_are_available`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=ye?.drive.name===t.name,i=r?(0,J.jsx)(Dp,{maxLength:32,onCancel:()=>be(null),onChange:e=>be({...ye,label:e}),onCommit:()=>void yt(),value:ye?.label??``}):(0,J.jsx)(J.Fragment,{children:ae(t)}),a=!r&&k&&(0,J.jsx)(pp,{onClick:e=>{e.stopPropagation(),vt(t)},title:E(`rename_volume`),type:`button`,children:(0,J.jsx)(Ji,{size:11})}),o=(0,J.jsx)($f,{children:E(`free_free_of_total`,{free:S(t.freeSpace),total:S(t.totalSize)})});return e.view===`grid`?(0,J.jsxs)(Xf,{$plain:!1,$selected:R===t.name,onClick:e=>{!r&&ct(t.name,!0)||r||c(t.name,Gt(e))},onDoubleClick:()=>!r&&y?.(t.name),onContextMenu:e=>!r&&lt(e,t.name,!0),title:t.name,children:[(0,J.jsx)(Zf,{children:(0,J.jsx)(pi,{size:18})}),(0,J.jsxs)(Qf,{children:[(0,J.jsxs)(`strong`,{children:[i,r&&A(t),a]}),o]})]},t.name):(0,J.jsxs)(tp,{as:r?`div`:`button`,$selected:R===t.name,onClick:r?void 0:e=>{ct(t.name,!0)||c(t.name,Gt(e))},onDoubleClick:r?void 0:()=>y?.(t.name),onContextMenu:r?void 0:e=>lt(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,J.jsx)(pi,{size:18}),(0,J.jsxs)(np,{children:[(0,J.jsxs)(`strong`,{children:[i,r&&A(t),a]}),o]}),(0,J.jsx)(ip,{children:(0,J.jsx)(ap,{$used:n,$tone:ee(n)})})]},t.name)});return e.view===`grid`?(0,J.jsx)(Yf,{children:t}):(0,J.jsx)(ep,{children:t})},Kt=()=>{let e=async e=>{ke(e.id);try{await Pc(e.host,e.port)}finally{ke(null)}},t=async()=>{let e=Ae.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){ke(`manual`);try{await Pc(n,r)}finally{ke(null)}}};return(0,J.jsxs)(vp,{children:[(0,J.jsxs)(yp,{children:[(0,J.jsx)(bp,{onChange:e=>je(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:E(`address_e_g_192_168_1_20_45701`),value:Ae}),(0,J.jsx)(Tp,{disabled:Oe!==null||!Ae.includes(`:`),onClick:()=>void t(),type:`button`,children:E(Oe===`manual`?`pairing`:`pair_by_address`)})]}),Ee.length===0&&(0,J.jsx)(_p,{children:E(`no_sharing_devices_on_this_network_yet_pair_one_by_address_or_share_a_folder_from_the_title_bar`)}),Ee.map(t=>(0,J.jsxs)(xp,{children:[(0,J.jsxs)(Sp,{children:[(0,J.jsx)(ca,{size:14}),(0,J.jsx)(Cp,{title:t.host,children:t.name}),(0,J.jsx)(wp,{$online:t.online,children:t.paired?t.online?E(`paired`):E(`offline`):E(`not_paired`)}),!t.paired&&t.online&&(0,J.jsx)(Tp,{disabled:Oe===t.id,onClick:()=>void e(t),type:`button`,children:Oe===t.id?E(`pairing`):E(`pair`)})]}),t.paired&&t.shares.length===0&&(0,J.jsx)($f,{children:E(`no_folders_are_shared_with_the_app_on_this_device`)}),t.shares.map(e=>(0,J.jsxs)(tp,{onClick:n=>c(Bc(t.id,e.id),Gt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,J.jsx)(ca,{size:14}),(0,J.jsxs)(np,{children:[(0,J.jsx)(`strong`,{children:e.name}),(0,J.jsx)($f,{children:t.name})]}),(0,J.jsx)(ua,{size:12})]},e.id))]},t.id))]})},qt=e=>{switch(e.kind){case`share`:return Kt();case`favorites`:return Ut(e);case`quick`:{let t=Bt(e);return!k&&t.length===0?(0,J.jsx)(_p,{children:E(`no_folders_in_this_quick_access_panel_yet`)}):e.view===`grid`?(0,J.jsxs)(Yf,{children:[t.map(t=>(0,J.jsxs)(Xf,{$plain:k,$selected:R===t.path,...zt(e,t.path),onClick:e=>{!k&&!ct(t.path,!0)&&c(t.path,Gt(e))},onDoubleClick:()=>!k&&y?.(t.path),onContextMenu:e=>!k&&lt(e,t.path,!0),title:t.path,children:[k&&(0,J.jsx)(fp,{onClick:n=>{n.stopPropagation(),Lt(e,t.path)},title:E(`remove_from_quick_access`),type:`button`,children:(0,J.jsx)(ki,{size:11})}),(0,J.jsxs)(up,{children:[k?(0,J.jsx)(dp,{onClick:e=>{e.stopPropagation(),_e(mt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:E(`change_icon`),type:`button`,children:(0,J.jsx)(Zf,{children:(0,J.jsx)(Is,{place:t})})}):(0,J.jsx)(Zf,{children:(0,J.jsx)(Is,{place:t})}),mt(t.path)&&(0,J.jsx)(Zd,{onPick:e=>void ht(t.path,e),value:j?.placeIcons?.[t.path]??t.icon})]}),(0,J.jsxs)(Qf,{children:[xe?.path===t.path?(0,J.jsx)(`strong`,{children:(0,J.jsx)(Dp,{onCancel:()=>L(null),onChange:e=>L({path:t.path,name:e}),onCommit:()=>void _t(t.path,xe?.name??``),value:xe?.name??``})}):(0,J.jsxs)(`strong`,{children:[t.name,k&&(0,J.jsx)(pp,{onClick:e=>{e.stopPropagation(),_e(null),L({path:t.path,name:t.name})},title:E(`rename_folder`),type:`button`,children:(0,J.jsx)(Ji,{size:11})})]}),(0,J.jsx)($f,{children:t.path})]})]},t.path)),k&&(0,J.jsxs)(rp,{onClick:()=>void It(e),title:E(`pin_a_folder_here`),type:`button`,children:[(0,J.jsx)(Zf,{children:(0,J.jsx)(_i,{size:15})}),(0,J.jsxs)(Qf,{children:[(0,J.jsx)(`strong`,{children:E(`add_folder`)}),(0,J.jsx)($f,{children:E(`pin_a_directory_here`)})]})]})]}):(0,J.jsxs)(ep,{children:[t.map(t=>(0,J.jsxs)(tp,{$selected:R===t.path,...zt(e,t.path),onClick:e=>{!k&&!ct(t.path,!0)&&c(t.path,Gt(e))},onDoubleClick:()=>!k&&y?.(t.path),onContextMenu:e=>!k&&lt(e,t.path,!0),title:t.path,type:`button`,children:[(0,J.jsxs)(up,{children:[k?(0,J.jsx)(dp,{onClick:e=>{e.stopPropagation(),_e(mt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:E(`change_icon`),type:`button`,children:(0,J.jsx)(Is,{place:t,size:15})}):(0,J.jsx)(Is,{place:t,size:15}),mt(t.path)&&(0,J.jsx)(Zd,{onPick:e=>void ht(t.path,e),value:j?.placeIcons?.[t.path]??t.icon})]}),(0,J.jsxs)(np,{children:[xe?.path===t.path?(0,J.jsx)(`strong`,{children:(0,J.jsx)(Dp,{onCancel:()=>L(null),onChange:e=>L({path:t.path,name:e}),onCommit:()=>void _t(t.path,xe?.name??``),value:xe?.name??``})}):(0,J.jsxs)(`strong`,{children:[t.name,k&&(0,J.jsx)(pp,{onClick:e=>{e.stopPropagation(),_e(null),L({path:t.path,name:t.name})},title:E(`rename_folder`),type:`button`,children:(0,J.jsx)(Ji,{size:11})})]}),(0,J.jsx)($f,{children:t.path})]}),k&&(0,J.jsx)(fp,{$inline:!0,onClick:n=>{n.stopPropagation(),Lt(e,t.path)},title:E(`remove_from_quick_access`),type:`button`,children:(0,J.jsx)(ki,{size:11})})]},t.path)),k&&(0,J.jsxs)(rp,{$row:!0,onClick:()=>void It(e),title:E(`pin_a_folder_here`),type:`button`,children:[(0,J.jsx)(_i,{size:15}),(0,J.jsxs)(np,{children:[(0,J.jsx)(`strong`,{children:E(`add_folder`)}),(0,J.jsx)($f,{children:E(`pin_a_directory_here`)})]})]})]})}case`frequent`:return(0,J.jsx)(Op,{mode:e.view,onContextMenu:lt,onOpen:c,onPick:y,onSelectionChange:b,version:s});case`recent`:return Vt(e);case`drives`:return Wt(e);default:return(0,J.jsx)(kp,{mode:e.view,onContextMenu:lt,onOpen:c,onPick:y,onSelectionChange:b,openOnSingleClick:j?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:j?.showCheckboxes??!0,visibilityVersion:h})}};return(0,J.jsxs)(of,{$flush:!!j?.overviewBanner,ref:Be,children:[!v&&(0,J.jsxs)(Pf,{$overlay:!!j?.overviewBanner,children:[(0,J.jsx)(Ff,{role:`group`,title:E(`columns`),children:[1,2,3,4,5].map(e=>(0,J.jsx)(If,{$active:bt===e,onClick:()=>void U({overviewColumns:e}),title:se(E,e,`k_1_column`,`count_columns`),type:`button`,children:e},e))}),k&&(0,J.jsxs)(Rf,{children:[(0,J.jsxs)(Lf,{onClick:()=>ve(e=>!e),onPointerDown:e=>e.stopPropagation(),title:E(`add_a_panel`),type:`button`,children:[(0,J.jsx)(_i,{size:12}),E(`add_panel`)]}),F&&(0,J.jsx)(zf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,J.jsx)(Bf,{onClick:()=>{ve(!1),Ft(e)},type:`button`,children:E(e===`quick`?`quick_access`:e===`recent`?`recent`:e===`frequent`?`frequent`:e===`home`?`home`:e===`drives`?`this_pc`:e===`share`?`shared`:e===`favorites`?`favorites`:`folder_2`)},e))})]}),k&&(0,J.jsxs)(Lf,{onClick:()=>void xt(),title:E(`put_every_panel_back_the_way_the_app_ships_it`),type:`button`,children:[(0,J.jsx)(gi,{size:12}),E(`restore_default_panels`)]}),Fe.available&&(0,J.jsx)(Jf,{onClick:e=>Fe.open(e.clientX,e.clientY),title:E(`selection_menu`),type:`button`,children:(0,J.jsx)(xa,{size:14})}),(0,J.jsxs)(Lf,{onClick:()=>{ie(e=>!e),ve(!1),_e(null),L(null),be(null)},title:E(k?`done`:`edit`),type:`button`,children:[k?(0,J.jsx)(Oi,{size:13}):(0,J.jsx)(Ji,{size:13}),E(k?`done`:`edit`)]})]}),Se&&(0,J.jsx)(gp,{children:Se}),j?.overviewBanner&&(0,J.jsxs)(sf,{ref:Ve,style:{height:`${Ue}px`,"--banner-image-width":`${tt}px`,"--banner-image-shift":`${it}px`,"--banner-travel":`${rt}px`,"--banner-overlap":`0px`},children:[(0,J.jsx)(cf,{children:de?(0,J.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Ye({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:pe??void 0}):(0,J.jsx)(`img`,{alt:``,onLoad:e=>{let t=ce?1920:e.currentTarget.naturalWidth||1920,n=ce?1080:e.currentTarget.naturalHeight||1080;Ye({width:t,height:n})},ref:He,src:pe??void 0})}),k&&(0,J.jsx)(lf,{onDoubleClick:()=>{ze.current=null,Re(null),U({overviewBannerHeight:220})},onPointerCancel:Ot,onPointerDown:Et,onPointerMove:Dt,onPointerUp:Ot,title:E(`drag_to_resize_double_click_to_reset`)})]}),(0,J.jsxs)(uf,{$offset:j?.overviewBanner?100:0,children:[k&&(0,J.jsxs)(df,{children:[(0,J.jsxs)(ff,{children:[(0,J.jsx)(pf,{children:E(`banners`)}),j?.overviewBanner&&(0,J.jsxs)(Lf,{onClick:()=>st(!0),title:E(`adjust_framing`),type:`button`,children:[(0,J.jsx)(Ji,{size:12}),E(`adjust_framing`)]})]}),(0,J.jsxs)(mf,{children:[(0,J.jsx)(vf,{children:(0,J.jsx)(yf,{$active:!j?.overviewBanner,onClick:wt,title:E(`no_banner`),type:`button`,children:(0,J.jsxs)(Sf,{children:[(0,J.jsx)(ki,{size:16}),(0,J.jsx)(`span`,{children:E(`no_banner`)})]})})}),zu.map(t=>(0,J.jsx)(vf,{children:(0,J.jsx)(yf,{$active:j?.overviewBanner===t.id,onClick:()=>void U({overviewBanner:t.id}),title:`${E(t.concept)} · ${E(t.preset)}`,type:`button`,children:(0,J.jsx)(ef,{source:t.id,theme:e})})},t.id)),Lu.map(t=>(0,J.jsx)(vf,{children:(0,J.jsxs)(yf,{$active:j?.overviewBanner===t.id,onClick:()=>void U({overviewBanner:t.id}),title:E(t.name),type:`button`,children:[(0,J.jsx)(ef,{poster:t.poster,source:t.id,theme:e}),(0,J.jsx)(xf,{children:(0,J.jsx)(Ii,{size:11})})]})},t.id)),(j?.overviewBanners??[]).map(t=>(0,J.jsxs)(vf,{children:[(0,J.jsx)(yf,{$active:j?.overviewBanner===t||j?.overviewBanner===`url:${t}`,onClick:()=>void U({overviewBanner:O(t)?`url:${t}`:t}),title:t,type:`button`,children:(0,J.jsx)(ef,{source:t,theme:e})}),(0,J.jsx)(bf,{onClick:()=>Tt(t),title:E(`remove`),type:`button`,children:(0,J.jsx)(ki,{size:10})})]},t)),(0,J.jsxs)(Nf,{onClick:()=>void St(),title:E(`add_banner`),type:`button`,children:[(0,J.jsx)(_i,{size:18}),(0,J.jsx)(`span`,{children:E(`add_banner`)})]})]}),(0,J.jsxs)(hf,{children:[(0,J.jsx)(gf,{onChange:e=>he(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ct()},placeholder:`https://…`,value:me}),(0,J.jsx)(_f,{disabled:!O(me),onClick:()=>void Ct(),type:`button`,children:E(`add_url`)})]})]}),(0,J.jsx)(Vf,{ref:H,$columns:bt,children:dt.map(e=>{let t=ft.indexOf(e.id);return(0,J.jsxs)(Hf,{children:[(0,J.jsxs)(Uf,{children:[(0,J.jsxs)(Wf,{children:[(0,J.jsxs)(up,{children:[k?(0,J.jsx)(dp,{onClick:()=>_e(pt(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:E(`change_icon`),type:`button`,children:(0,J.jsx)(Fs,{panel:e,size:15})}):(0,J.jsx)(Fs,{panel:e,size:15}),pt(e.id)&&(0,J.jsx)(Zd,{onPick:t=>Pt(e.id,t),value:e.icon})]}),k?(0,J.jsx)(qf,{defaultValue:e.title,onBlur:t=>At(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,J.jsx)(Kf,{children:E(e.title)})]}),(0,J.jsxs)(Gf,{children:[!k&&e.kind===`recent`&&(0,J.jsx)(Lf,{onClick:()=>void We().then(d),title:E(`clear`),type:`button`,children:E(`clear`)}),!k&&e.kind===`frequent`&&(0,J.jsx)(Lf,{onClick:()=>void Ge().then(()=>p?.()),title:E(`clear_the_frequent_list`),type:`button`,children:E(`clear`)}),!k&&(e.kind===`home`||e.kind===`folder`)&&(0,J.jsx)(Lf,{onClick:()=>c(e.path??a),title:E(`open_folder`),type:`button`,children:E(`open`)}),k&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Jf,{$active:e.pinned,onClick:()=>Mt(e.id),title:e.pinned?E(`unpin_from_the_sidebar`):E(`pin_to_the_sidebar`),type:`button`,children:(0,J.jsx)(Si,{size:12})}),(0,J.jsx)(Jf,{$active:e.view===`list`,onClick:()=>jt(e.id,`list`),title:E(`list`),type:`button`,children:(0,J.jsx)(Ci,{size:13})}),(0,J.jsx)(Jf,{$active:e.view===`grid`,onClick:()=>jt(e.id,`grid`),title:E(`grid`),type:`button`,children:(0,J.jsx)(wi,{size:13})}),(0,J.jsx)(Jf,{disabled:t===0,onClick:()=>kt(e.id,-1),title:E(`move_up`),type:`button`,children:(0,J.jsx)(hi,{size:12})}),(0,J.jsx)(Jf,{disabled:t===ft.length-1,onClick:()=>kt(e.id,1),title:E(`move_down`),type:`button`,children:(0,J.jsx)(hi,{size:12})}),(0,J.jsx)(Jf,{onClick:()=>Nt(e.id),title:E(`remove_panel`),type:`button`,children:(0,J.jsx)(ki,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?qt(e):(0,J.jsx)(sp,{children:qt(e)})]},e.id)})})]}),ot&&pe&&(0,J.jsx)(tf,{height:Ue,offset:Ze,onCancel:()=>st(!1),onSave:e=>{U({overviewBannerOffset:e}),st(!1)},source:pe,video:de}),B&&(0,J.jsx)(vo,{directory:a,menu:{x:B.x,y:B.y,paths:[B.target.path]},onClose:()=>Ie(null),onCopy:(e,t)=>void gt(e,t),onAddToTray:te,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:ne,onExtractArchive:T,onOpen:ut,onOpenFile:e=>y?y(e):void Te(e),shortcuts:Ht,target:B.target})]})}function Dp({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=o();return(0,J.jsxs)(mp,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,J.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,J.jsx)(hp,{onClick:r,title:a(`cancel`),type:`button`,children:(0,J.jsx)(ki,{size:11})}),(0,J.jsx)(hp,{$apply:!0,onClick:n,title:a(`rename_volume`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]})}function Op({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=o(),[c,l]=(0,I.useState)(null),[u,d]=(0,I.useState)(null),f=Fn(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,I.useEffect)(()=>{He().then(l,()=>l([]))},[a]),!c)return(0,J.jsx)(_p,{children:s(`reading`)});if(c.length===0)return(0,J.jsx)(_p,{children:s(`folders_you_open_often_show_up_here`)});let m=e=>se(s,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path});return e===`grid`?(0,J.jsx)(Yf,{children:c.map(e=>{let i=In(f,e.path);return(0,J.jsxs)(Xf,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Gt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,J.jsx)(Zf,{children:i&&f.useIcons?(0,J.jsx)(Is,{place:i,size:18}):(0,J.jsx)(ec,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,J.jsxs)(Qf,{children:[(0,J.jsx)(`strong`,{children:i?.name||e.name}),(0,J.jsx)($f,{children:m(e)})]})]},e.path)})}):(0,J.jsx)(ep,{children:c.map(e=>{let i=In(f,e.path);return(0,J.jsxs)(tp,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Gt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,J.jsx)(Is,{place:i,size:15}):(0,J.jsx)(ec,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,J.jsxs)(np,{children:[(0,J.jsx)(`strong`,{children:i?.name||e.name}),(0,J.jsx)($f,{children:m(e)})]})]},e.path)})})}function kp({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:u,visibilityVersion:d}){let f=o(),[p,m]=(0,I.useState)(null),[h,g]=(0,I.useState)(null),_=Fn();return(0,I.useEffect)(()=>{e&&(m(null),Ee(e).then(m,()=>m(null)))},[e,d]),(0,I.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&N(n.data.path,e)&&Ee(e,!1).then(m,()=>void 0)})},[e]),p?t===`list`?(0,J.jsx)(op,{children:(0,J.jsx)(pl,{error:null,listing:p,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void Te(e)),onRefresh:()=>void Ee(e,!1).then(m,()=>void 0),onRename:(e,t)=>m(n=>n&&{...n,entries:n.entries.map(n=>N(n.fullPath,e)?{...n,name:x(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:u,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...Se,columns:Ce.columns??[]}})}):(0,J.jsx)(sp,{children:p.entries.length===0?(0,J.jsx)(_p,{children:f(`this_folder_is_empty`)}):(0,J.jsx)(cp,{children:p.entries.map(e=>{let t=In(_,e.fullPath);return(0,J.jsxs)(lp,{$selected:h===e.fullPath,onClick:t=>{i?(g(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Gt(t)):Te(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&_.useIcons?(0,J.jsx)(Is,{place:t,size:16}):(0,J.jsx)(ec,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,J.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,J.jsx)(_p,{children:f(`reading`)})}var Ap=`yafm://`,jp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Mp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function Np(e){return`${Ap}${e===`home`?`overview`:e}`}function Pp(e){return Mp(e)?jp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Fp(e){let t=e.trim();if(t.length===0)return null;if(!Mp(t))return t;let n=jp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Np(n):null}function Ip({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let s=o(),c=Fn(),[l,u]=(0,I.useState)(!1),[d,f]=(0,I.useState)(``),[p,m]=(0,I.useState)([]),[h,g]=(0,I.useState)(0),[_,v]=(0,I.useState)(null),[y,b]=(0,I.useState)(null),[x,ee]=(0,I.useState)(null),S=(0,I.useRef)(null),te=(0,I.useRef)(null),C=(0,I.useRef)(0);(0,I.useEffect)(()=>{if(!Rc(e)){ee(null);return}let t=zc(e);if(!t){ee(null);return}let n=!0;return Mc().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);ee({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&ee(null)),()=>{n=!1}},[e]),(0,I.useEffect)(()=>{l||f(e.replace(/\\/g,`/`))},[e,l]),(0,I.useEffect)(()=>{r&&r!==C.current&&(C.current=r,f(e.replace(/\\/g,`/`)),u(!0))},[r,e]),(0,I.useEffect)(()=>{l&&S.current?.select()},[l]),(0,I.useEffect)(()=>{if(!l)return;let e=()=>u(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[l]);let w=()=>{f(e.replace(/\\/g,`/`)),u(!0)},ne=t=>{let n=d.trim(),r=!!(t?.ctrlKey||t?.metaKey);u(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,I.useEffect)(()=>{if(!l){m([]);return}let e=Bp(d);if(!e){m([]);return}let t=!1,n=window.setTimeout(()=>{Ee(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));m(i),g(0)},()=>{t||m([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[d,l]);let T=(e,t=!1)=>{u(!1),i(e.path,t)};if((0,I.useLayoutEffect)(()=>{if(!l){v(null);return}let e=()=>{let e=te.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);v({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[l]),l)return(0,J.jsxs)(Kp,{onPointerDown:e=>e.stopPropagation(),ref:te,children:[(0,J.jsxs)(Xp,{children:[(0,J.jsx)(`input`,{onChange:e=>f(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&p.length>0)e.preventDefault(),g(e=>(e+1)%p.length);else if(e.key===`ArrowUp`&&p.length>0)e.preventDefault(),g(e=>(e-1+p.length)%p.length);else if(e.key===`Tab`&&p.length>0){e.preventDefault();let t=p[Math.min(h,p.length-1)];f(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?p.length>0?T(p[Math.min(h,p.length-1)],e.ctrlKey||e.metaKey):ne(e):e.key===`Escape`&&(p.length>0?m([]):u(!1))},ref:S,spellCheck:!1,value:d}),(0,J.jsx)(Zp,{onClick:()=>u(!1),title:s(`cancel`),type:`button`,children:(0,J.jsx)(ki,{size:12})}),(0,J.jsx)(Zp,{$apply:!0,onClick:ne,onPointerDown:e=>e.stopPropagation(),title:s(`open_this_path`),type:`button`,children:(0,J.jsx)(Oi,{size:14})})]}),p.length>0&&_&&(0,Ha.createPortal)((0,J.jsx)(qp,{onPointerDown:e=>e.stopPropagation(),style:{left:_.left,top:_.top,width:_.width},children:p.map((e,t)=>(0,J.jsxs)(Jp,{$active:t===h,onClick:t=>T(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>g(t),type:`button`,children:[(0,J.jsx)(ec,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,J.jsx)(Yp,{children:e.name})]},e.path))}),document.body)]});let re=t?[{label:t,path:e,icon:n}]:Lp(e,x)??zp(e,c.places);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Vp,{onClick:w,title:s(`click_to_type_a_path`),children:re.map((t,n)=>(0,J.jsxs)(Hp,{$last:n===re.length-1,children:[n>0&&(0,J.jsx)(Wp,{children:(0,J.jsx)(bi,{size:9})}),(0,J.jsxs)(Gp,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):b({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,J.jsx)(Up,{children:(0,J.jsx)(Is,{place:t.place,size:13})}):t.icon&&(0,J.jsx)(Up,{children:t.icon}),t.label]})]},t.path))}),y&&(0,J.jsx)(ao,{items:[{label:s(`open`),icon:(0,J.jsx)(yi,{size:14}),onSelect:()=>i(y.path)},{label:s(`open_in_new_tab`),icon:(0,J.jsx)(_i,{size:14}),onSelect:()=>i(y.path,!0)},{label:s(`copy_as_path`),icon:(0,J.jsx)(ma,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(y.path)},...Mp(y.path)?[{label:s(`open_with`),icon:(0,J.jsx)(Bi,{size:14}),onSelect:()=>void At(y.path)},{label:s(`properties`),icon:(0,J.jsx)(xi,{size:14}),onSelect:()=>void kt([y.path])}]:[]],onClose:()=>b(null),x:y.x,y:y.y})]})}function Lp(e,t){let n=zc(e);if(!n)return null;let r=Bc(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,J.jsx)(ca,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Rp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function zp(e,t){let n=Rp(e),r=-1,i=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>N(t.path,e.path));t>r&&(r=t,i=e)}return i&&r>=0&&n.splice(0,r+1,{label:i.name,path:n[r].path,place:i}),n}function Bp(e){if(Mp(e)||Rc(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Vp=v.div`
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
`,Hp=v.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Up=v.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Wp=v.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Gp=v.button`
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
`,Kp=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,qp=v.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Ua}
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
`,Jp=v.button`
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
`,Yp=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Xp=v.div`
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
`,Zp=v.button`
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
`,Qp=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,J.jsx)(`path`,{d:`M4 4v6h6`})]});function $p({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,showDetails:i=!0,onShowDetails:a,videoAudio:s=!1,videoAutoplay:c=!1,platform:l}){let u=o(),d=$c(`recycle`),f=l===`windows`,[p,m]=(0,I.useState)([]),[h,g]=(0,I.useState)([]),[_,v]=(0,I.useState)(!1),[y,b]=(0,I.useState)(null),[x,ee]=(0,I.useState)(!0),[te,C]=(0,I.useState)(!1),[w,ne]=(0,I.useState)(null),[T,re]=(0,I.useState)(!1),[E,D]=(0,I.useState)(()=>new Set),[O,k]=(0,I.useState)(null),[A,ie]=(0,I.useState)(()=>{let e=Jn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[j,ae]=(0,I.useState)(null),[M,ce]=(0,I.useState)(null),[N,P]=(0,I.useState)(()=>{let e=Kn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),le=(0,I.useRef)(null),ue=e=>{P(e),qn(`yafm.recycle.preview.width`,e)},de=(0,I.useCallback)(async()=>{ee(!0),ne(null);try{m(await z(T))}catch(e){ne(e instanceof Error?e.message:String(e))}finally{ee(!1)}},[T]),fe=(0,I.useCallback)(async()=>{try{m(await z(T))}catch{}},[T]);(0,I.useEffect)(()=>{de()},[de]),(0,I.useEffect)(()=>{let e=window.setInterval(()=>void fe(),1e4);return()=>window.clearInterval(e)},[fe]),(0,I.useEffect)(()=>{T||(g([]),v(!1),b(null))},[T]),(0,I.useEffect)(()=>{D(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let pe=(0,I.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=em(e,t,A.column);return A.descending?-n:n})},[p,h,A]),me=(0,I.useMemo)(()=>!t?.open||t.query.trim().length===0?pe:pe.filter(e=>Dn(e.name,t)||Dn(e.originalPath,t)),[pe,t?.open,t?.query,t?.matchCase,t?.regex]),he=t?.open&&t.query.trim().length>0?me.length===0:pe.length===0,ge=(0,I.useRef)(null);Xd(ge,t??null,`[data-search-block]`,n??(()=>void 0),[pe]),(0,I.useEffect)(()=>{D(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,I.useEffect)(()=>{r&&D(new Set(me.map(e=>e.id)))},[r]);let _e=(0,I.useMemo)(()=>pe.filter(e=>E.has(e.id)),[pe,E]),F=_e.filter(e=>e.removable&&!e.isOrphan),ve=_e.filter(e=>e.removable),ye=(e,t)=>{let n=t.ctrlKey||t.metaKey;D(r=>{if(t.shiftKey&&O){let t=pe.findIndex(e=>e.id===O),i=pe.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(pe[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),k(e.id)},be=(0,I.useCallback)(()=>D(new Set(me.map(e=>e.id))),[me]),xe=me.length>0&&me.every(e=>E.has(e.id)),L=(0,I.useCallback)(async()=>{let e=F.map(e=>e.id);if(e.length!==0){C(!0);try{let t=await Ie(e);t.ok||await Aa(se(u,e.length,`restored_done_of_1_item`,`restored_done_of_total_items`,{done:t.done,total:e.length})),D(new Set),await de()}finally{C(!1)}}},[de,F,u]),Se=(0,I.useCallback)(async()=>{let e=ve.map(e=>e.id);if(ce(null),e.length!==0){C(!0);try{let t=await Le(e);!t.ok&&!t.cancelled&&await Aa(se(u,e.length,`deleted_done_of_1_item`,`deleted_done_of_total_items`,{done:t.done,total:e.length})),D(new Set),await de()}finally{C(!1)}}},[ve,de,u]),Ce=async()=>{ce(null),C(!0);try{await B(T),D(new Set),await de()}finally{C(!1)}},we=async()=>{C(!0),b(null);try{let e=await V();if(e.cancelled){b(`Elevation was declined — nothing was read.`);return}if(e.failed){b(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),v(!0)}finally{C(!1)}},Te=async()=>{C(!0),ce(null);try{await ze(),g([]),v(!1),b(null),await de()}finally{C(!1)}},Ee=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},De=e=>{navigator.clipboard.writeText(e.originalPath)},Oe=(e,t)=>{e.preventDefault(),t&&!E.has(t.id)&&D(new Set([t.id])),ae({x:e.clientX,y:e.clientY})};(0,I.useEffect)(()=>(Jc(`recycle`,E.size>0?(e,t)=>ae({x:e,y:t}):null),()=>Jc(`recycle`,null)),[E]),(0,I.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),be()):e.key===`delete`?(e.preventDefault(),ve.length>0&&ce(`delete`)):e.key===`Enter`&&F.length>0?(e.preventDefault(),L()):e.key===`Escape`&&(D(new Set),ae(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[ve.length,F.length,L,be]);let ke=[{label:u(`restore`),icon:(0,J.jsx)(Qp,{width:14,height:14}),disabled:F.length===0,onSelect:()=>void L()},{label:u(`delete_permanently`),icon:(0,J.jsx)(Di,{size:14}),danger:!0,disabled:ve.length===0,onSelect:()=>ce(`delete`)},{label:u(`properties`),icon:(0,J.jsx)(xi,{size:14}),disabled:_e.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=_e;e&&Re(e.id)}},{label:u(`open_original_location`),icon:(0,J.jsx)(di,{size:14}),disabled:_e.length!==1,onSelect:()=>{let[e]=_e;e&&Ee(e)}},{label:u(`copy_original_path`),icon:(0,J.jsx)(ma,{size:14}),disabled:_e.length!==1,onSelect:()=>{let[e]=_e;e&&De(e)}},{label:u(`select_all`),separatorBefore:!0,onSelect:be},{label:u(`refresh`),icon:(0,J.jsx)(gi,{size:14}),onSelect:()=>void de()}],Ae=_e.length>0?_e[0]:null,je=Ae?{name:Ae.name,path:Ae.contentPath||Ae.originalPath,isDirectory:Ae.isDirectory,size:Ae.size,modified:Ae.deleted,fields:[{label:u(`type`),value:u(nm(Ae))},{label:u(`original_location`),value:Ae.originalPath},{label:u(`date_deleted`),value:oe(Ae.deleted)},{label:u(`size`),value:Ae.isDirectory?`—`:S(Ae.size)},...Ae.owner?[{label:u(`owner`),value:Ae.owner}]:[],{label:u(`status`),value:Ae.isOrphan?u(`metadata_only`):Ae.removable?u(`restorable`):u(`other_profile`)}]}:null;return(0,J.jsxs)(im,{ref:le,onContextMenu:e=>Oe(e),children:[(0,J.jsxs)(am,{children:[(0,J.jsxs)(om,{children:[(0,J.jsx)(Di,{size:16}),(0,J.jsx)(`span`,{children:u(`recycle_bin`)}),(0,J.jsxs)(sm,{children:[x?`…`:se(u,pe.length,`k_1_item`,`count_items`),E.size>0&&` · ${u(`count_selected`,{count:E.size})}`]})]}),(0,J.jsxs)(cm,{children:[(0,J.jsx)(um,{$on:T,onClick:()=>re(e=>!e),title:u(`show_metadata_records_whose_content_is_already_gone`),type:`button`,children:u(`orphans`)}),T&&f&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(lm,{disabled:te||_,onClick:()=>void we(),title:u(_?`the_administrator_view_is_already_loaded`:`ask_for_administrator_rights_and_list_every_profile_s_leftovers`),type:`button`,children:u(te?`working`:_?`admin_view_loaded`:`show_all_admin`)}),_&&h.length>0&&(0,J.jsx)(lm,{disabled:te,onClick:()=>ce(`purge`),type:`button`,children:u(`delete_every_orphan`)})]}),(0,J.jsx)(lm,{disabled:te||F.length===0,onClick:()=>void L(),type:`button`,children:u(`restore`)}),(0,J.jsx)(lm,{$danger:!0,disabled:te||ve.length===0,onClick:()=>ce(`delete`),type:`button`,children:u(`delete`)}),(0,J.jsx)(lm,{disabled:te||pe.length===0,onClick:()=>ce(`empty`),type:`button`,children:u(`empty`)}),(0,J.jsx)(dm,{onClick:()=>void de(),title:u(`refresh`),type:`button`,children:(0,J.jsx)(gi,{size:14})}),d.available&&(0,J.jsx)(dm,{onClick:e=>d.open(e.clientX,e.clientY),title:u(`selection_menu`),type:`button`,children:(0,J.jsx)(xa,{size:14})})]})]}),y&&(0,J.jsx)(Mm,{children:y}),w&&(0,J.jsx)(Nm,{children:w}),!w&&(0,J.jsxs)(jm,{children:[(0,J.jsxs)(fm,{ref:ge,children:[(0,J.jsxs)(mm,{children:[(0,J.jsx)(bm,{$checked:xe,$partial:!xe&&E.size>0,onClick:()=>xe?D(new Set):be(),title:u(xe?`select_none`:`select_all`),type:`button`,children:xe?(0,J.jsx)(Oi,{size:9}):E.size>0&&(0,J.jsx)(xm,{})}),(0,J.jsxs)(hm,{onClick:()=>R(`name`),type:`button`,children:[u(`name`),tm(A,`name`)]}),(0,J.jsxs)(hm,{onClick:()=>R(`original`),type:`button`,children:[u(`original_location`),tm(A,`original`)]}),(0,J.jsxs)(hm,{onClick:()=>R(`deleted`),type:`button`,children:[u(`date_deleted`),tm(A,`deleted`)]}),(0,J.jsxs)(hm,{onClick:()=>R(`size`),type:`button`,children:[u(`size`),tm(A,`size`)]}),(0,J.jsxs)(hm,{onClick:()=>R(`type`),type:`button`,children:[u(`type`),tm(A,`type`)]}),(0,J.jsx)(`span`,{})]}),(0,J.jsxs)(gm,{onClick:e=>{e.target===e.currentTarget&&D(new Set)},children:[!x&&he&&(0,J.jsx)(Nm,{children:t?.open&&t.query.trim().length>0?u(`no_matching_items`):u(`the_recycle_bin_is_empty`)}),pe.map(e=>(0,J.jsxs)(_m,{$checked:E.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>ye(e,t),onContextMenu:t=>Oe(t,e),onDoubleClick:()=>{D(new Set([e.id])),k(e.id),a?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,J.jsx)(ym,{$checked:E.has(e.id),children:E.has(e.id)&&(0,J.jsx)(Oi,{size:9})}),(0,J.jsxs)(Sm,{children:[(0,J.jsx)(rm,{entry:e}),(0,J.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,J.jsx)(Am,{children:u(`metadata_only`)}),e.owner&&(0,J.jsx)(Am,{$other:!0,children:u(`other_profile`)})]}),(0,J.jsx)(wm,{children:e.originalPath}),(0,J.jsx)(Tm,{children:oe(e.deleted)}),(0,J.jsx)(Em,{children:e.isDirectory?`—`:S(e.size)}),(0,J.jsx)(Dm,{children:u(nm(e))}),(0,J.jsxs)(Om,{children:[e.removable&&!e.isOrphan&&(0,J.jsx)(km,{onClick:t=>{t.stopPropagation(),Ie([e.id]).then(de)},title:u(`restore_to_its_original_folder`),type:`button`,children:(0,J.jsx)(Qp,{})}),e.removable&&(0,J.jsx)(km,{$danger:!0,onClick:t=>{t.stopPropagation(),D(new Set([e.id])),ce(`delete`)},title:e.isOrphan?u(`remove_the_leftover_record`):u(`delete_permanently`),type:`button`,children:(0,J.jsx)(Di,{size:13})})]})]},e.id))]})]}),i&&(0,J.jsx)(is,{emptyNote:u(`nothing_selected`),info:je,onWidth:ue,selectionNote:_e.length>1?se(u,_e.length,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:s,videoAutoplay:c,width:N})]}),j&&(0,J.jsx)(ao,{items:ke,onClose:()=>ae(null),x:j.x,y:j.y}),(0,J.jsx)(qo,{confirmLabel:u(M===`empty`?`empty_the_bin`:M===`purge`?`delete_every_orphan`:`delete`),danger:!0,message:M===`empty`?se(u,pe.length,`permanently_delete_1_item_this_cannot_be_undone`,`permanently_delete_count_items_this_cannot_be_undone`):M===`purge`?u(`permanently_delete_every_leftover_record_including_the_ones_owned_by_other_profiles_this_cannot_be_undone`):se(u,ve.length,`permanently_delete_1_selected_item_this_cannot_be_undone`,`permanently_delete_count_selected_items_this_cannot_be_undone`),onCancel:()=>ce(null),onConfirm:()=>{M===`empty`?Ce():M===`purge`?Te():Se()},open:M!==null,title:u(M===`empty`?`empty_the_recycle_bin`:M===`purge`?`delete_every_orphan`:`delete_permanently`)})]});function R(e){ie(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Yn(`yafm.recycle.sort`,n),n})}}function em(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return nm(e).localeCompare(nm(t),void 0,{sensitivity:`base`})}}function tm(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function nm(e){if(e.isDirectory)return`folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`file`}function rm({entry:e}){let t=dn(e.originalPath,e.isDirectory);return(0,J.jsx)(Cm,{children:t?(0,J.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,J.jsx)(di,{}):(0,J.jsx)(fi,{})})}var im=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,am=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,om=v.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,sm=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,cm=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,lm=v.button`
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
`,um=v(lm)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,dm=v.button`
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
`,fm=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,pm=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,mm=v.div`
    display: grid;
    grid-template-columns: ${pm};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,hm=v.button`
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
`,gm=v.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,_m=v.div`
    display: grid;
    grid-template-columns: ${pm};
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
`,vm=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ym=v.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,bm=v.button`
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
`,xm=v.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Sm=v(vm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Cm=v.span`
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
`,wm=v(vm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Tm=v(vm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Em=v(vm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Dm=v(vm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Om=v.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,km=v.button`
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
`,Am=v.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,jm=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Mm=v.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Nm=v.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Pm(){return l.available?(await l.request(`app.tags`)).tags:[]}async function Fm(e){return!l.available||!e?!1:(await l.request(`app.tags.delete`,{name:e})).ok}async function Im(e,t){return!l.available||!e?[]:(await l.request(`app.tags.create`,{name:e,color:t})).tags}async function Lm(e,t){return!l.available||!e?!1:(await l.request(`app.tags.color`,{name:e,color:t})).ok}async function Rm(e,t){return!l.available||!e||!t?!1:(await l.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function zm(){let e=o();return(0,J.jsx)(Bm,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var Bm=v.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Vm=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function Hm(e){return`"${e.replaceAll(`"`,``)}"`}function Um(e){let t=document.documentElement.style;for(let n of Vm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Hm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Wm(){return l.available?(await l.request(`app.fonts`)).fonts??[]:[]}function Gm({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let s=o(),[c,l]=(0,I.useState)(null),[u,d]=(0,I.useState)(``),f=(0,I.useRef)(null),p=(0,I.useRef)(null),m=(0,I.useMemo)(()=>{let e=u.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,u]);(0,I.useEffect)(()=>{if(!c)return;p.current?.focus();let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[c]);let h=()=>{if(c){l(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;d(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;l({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},g=e=>{a(e),l(null)};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Km,{"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:i,onClick:h,ref:f,type:`button`,children:[(0,J.jsx)(qm,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,J.jsx)(Jm,{children:`▾`})]}),c&&(0,Ha.createPortal)((0,J.jsxs)(Ym,{"data-font-menu":`true`,role:`listbox`,style:{left:c.left,maxHeight:c.maxHeight,top:c.top,width:c.width},children:[(0,J.jsxs)(Xm,{children:[(0,J.jsx)(mi,{size:12}),(0,J.jsx)(Zm,{onChange:e=>d(e.target.value),placeholder:s(`filter_fonts`),ref:p,value:u})]}),(0,J.jsxs)(Qm,{children:[(0,J.jsxs)($m,{$active:!e,"aria-selected":!e,onClick:()=>g(null),role:`option`,type:`button`,children:[(0,J.jsxs)(th,{children:[n,` `,(0,J.jsx)(rh,{children:s(`default_2`)})]}),!e&&(0,J.jsx)(Oi,{size:11})]}),m.map(t=>(0,J.jsxs)($m,{$active:e===t,"aria-selected":e===t,onClick:()=>g(t),role:`option`,type:`button`,children:[(0,J.jsxs)(eh,{children:[(0,J.jsx)(th,{children:t}),(0,J.jsx)(nh,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,J.jsx)(Oi,{size:11})]},t)),m.length===0&&(0,J.jsx)(ih,{children:s(`no_matching_font`)})]})]}),document.body)]})}var Km=v.button`
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
`,qm=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Jm=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,Ym=v.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${$a}
`,Xm=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,Zm=v.input`
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
`,Qm=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,$m=v.button`
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
`,eh=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,th=v.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nh=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rh=v.span`
    color: var(--text-muted);
    font-size: 10px;
`,ih=v.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,ah=[{id:`goBack`,label:`back`,note:`the_previous_folder_in_this_tab_the_mouse_back_button_and_the_browser_back_key_always_work`},{id:`goForward`,label:`forward`,note:`the_next_folder_in_this_tab_the_mouse_forward_button_and_the_browser_forward_key_always_work`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder_like_alt_home_in_dolphin`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path_ctrl_l_in_dolphin`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`ctrl_d_copies_too_following_kde_s_file_manager`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`delete_is_del_by_default_not_ctrl_d`},{id:`deletePermanently`,label:`delete_permanently`,note:`bypasses_the_recycle_bin_dolphin_uses_shift_delete`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected_dolphin_uses_ctrl_shift_a`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory_f10_also_works`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_windows_terminal_in_the_current_folder_dolphin_uses_f4_for_its_terminal_panel`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one_f3_in_dolphin`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],oh=`en`,sh=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],ch=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],lh=new Date(2026,10,5,16,8).getTime(),uh=`system`,dh={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},fh=[{id:`application`,label:`application`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-icons`,label:`folder_icons`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],ph=`yafm.colors.recent`;function mh(){let e=Jn(ph);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function hh({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let s=o(),[c,l]=(0,I.useState)([]),[u,d]=(0,I.useState)(null),[m,_]=(0,I.useState)(null),v=f(g(m?.themeMode)),[y,b]=(0,I.useState)(null),[C,w]=(0,I.useState)(``),[ne,T]=(0,I.useState)(`file`),[re,E]=(0,I.useState)(!1),[D,k]=(0,I.useState)(!1),[A,ie]=(0,I.useState)(null),[j,ae]=(0,I.useState)(dt),[oe,N]=(0,I.useState)(!1),[P,ve]=(0,I.useState)(null),[ye,be]=(0,I.useState)(null),[xe,L]=(0,I.useState)(null),[Se,we]=(0,I.useState)(!1),[Te,Ee]=(0,I.useState)(null),[De,Oe]=(0,I.useState)(!1),[ke,Ae]=(0,I.useState)(null),[je,R]=(0,I.useState)(null),[Me,Ne]=(0,I.useState)(!1),[Pe,z]=(0,I.useState)([]),[Fe,B]=(0,I.useState)(null),[Ie,Le]=(0,I.useState)(!1),[Re,V]=(0,I.useState)(null),[ze,Be]=(0,I.useState)(``),[Ve,He]=(0,I.useState)(Ls),[Ue,We]=(0,I.useState)(null),[Ge,qe]=(0,I.useState)(null),[Je,Ye]=(0,I.useState)(``),[Qe,$e]=(0,I.useState)(``),[ot,ct]=(0,I.useState)(null),[pt,gt]=(0,I.useState)(mh),[_t,vt]=(0,I.useState)({}),[yt,bt]=(0,I.useState)(null),[U,xt]=(0,I.useState)(null),[St,Ct]=(0,I.useState)(!1),[wt,Tt]=(0,I.useState)(null),[Et,Dt]=(0,I.useState)(null),[Ot,kt]=(0,I.useState)(null),[At,jt]=(0,I.useState)(fh[0].id),[Mt,Nt]=(0,I.useState)([]),[Pt,Ft]=(0,I.useState)(null),[It,Lt]=(0,I.useState)(null),[Rt,zt]=(0,I.useState)(null),[Bt,Vt]=(0,I.useState)(!1),[Ut,Wt]=(0,I.useState)(``),Gt=(0,I.useRef)(null),Jt=(0,I.useRef)({}),Yt=m?.defaultView??Ce,Xt=m?.themePresets??[],Zt=e?.platform===`windows`,Qt=Zt?ye?ye.registered&&ye.pathMatches:!1:m?.archiveHandler??!1,$t=ye?.registered??m?.archiveHandler??!1,en=Zt?xe?xe.registered&&xe.pathMatches:!1:m?.defaultFileManager??!1,tn=Zt?j.registered&&j.pathMatches:m?.linksEnabled??!1;Xd(Gt,r??null,`section`,i??(()=>void 0),[m]),(0,I.useEffect)(()=>{let e=Gt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){jt(fh[fh.length-1].id);return}let n=t+110,r=fh[0].id;for(let{id:e}of fh){let t=Jt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}jt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let nn=e=>t=>{Jt.current[e]=t},rn=e=>{Jt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),jt(e)};(0,I.useEffect)(()=>{t&&rn(t)},[t]),(0,I.useEffect)(()=>{p().then(e=>l(e.available),()=>l([]))},[]),(0,I.useEffect)(()=>{Wm().then(Nt,()=>Nt([]))},[]),(0,I.useEffect)(()=>{mt().then(Lt,()=>Lt(null))},[]),(0,I.useEffect)(()=>{fe().then(xt,()=>void 0)},[]),(0,I.useEffect)(()=>{Ke().then(d,()=>d(null)),Xe().then(_,()=>_(null)),ft().then(ae,()=>ae(dt)),nt().then(be,()=>be(null)),et().then(L,()=>L(null)),Pm().then(z,()=>z([]))},[]),(0,I.useEffect)(()=>{let e=()=>void lt().then(ie,()=>ie(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let W=async e=>{if(!m)return;let t={...m,...e};Object.keys(e).every(e=>t[e]===m[e])||(_(t),on(),_(await at(t)),n())},an=async e=>{let t=await Ea(e);if(!t)return;let n=m?.backgroundCustom??[];await W({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},sn=async()=>{let e=Ut.trim();if(!m||!O(e))return;let t=m.backgroundCustom??[];Wt(``),await W({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},cn=e=>{if(!m)return;let t=m.backgroundSource;W({backgroundCustom:m.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},ln=async()=>{if(!m)return;let t=await Ta();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;m.protectedPaths.includes(r)||await W({protectedPaths:[...m.protectedPaths,r]})},un=()=>{let e=Je.trim();m&&e&&!m.protectedPaths.includes(e)&&(Ye(``),W({protectedPaths:[...m.protectedPaths,e]}))},dn=()=>{if(!m||!Ue)return;let e=Ue.value.trim(),t=Ue.from;We(null),e.length!==0&&e!==t&&W({protectedPaths:m.protectedPaths.map(n=>n===t?e:n)})},G=e=>{m&&W({protectedPaths:m.protectedPaths.filter(t=>t!==e)})},K=async()=>{let e=await Ze();e.length>0&&await W({protectedPaths:e})},q=()=>{if(!m||!Ge)return;let e=Ge.value.trim(),t=Ge.from;qe(null),e&&e!==t&&W({directoryIndexBlacklist:m.directoryIndexBlacklist.map(n=>n===t?e:n)})},fn=()=>{let e=Qe.trim();m&&e&&!m.directoryIndexBlacklist.includes(e)&&($e(``),W({directoryIndexBlacklist:[...m.directoryIndexBlacklist,e]}))},pn=async()=>{if(!m)return;let t=await Ta();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;m.directoryIndexBlacklist.includes(r)||await W({directoryIndexBlacklist:[...m.directoryIndexBlacklist,r]})},mn=e=>{m&&W({directoryIndexBlacklist:m.directoryIndexBlacklist.filter(t=>t!==e)})},hn=()=>{W({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},gn=()=>{if(!m||ot===null)return;let e=ot.trim()||`yyyy/MM/dd HH:mm`;ct(null),e!==m.timeFormatPattern&&W({timeFormatPattern:e})},_n=(e,t)=>{gt(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Yn(ph,i),i})},vn=M(m?.accentColor,ce),yn=M(m?.secondaryColor,h),bn=(e,t)=>{m&&(_n(`accent`,vn),_n(`secondary`,yn),W({accentColor:e,secondaryColor:t}))},xn=(e,t)=>{m&&(_n(e,e===`accent`?vn:yn),W(e===`accent`?{accentColor:t}:{secondaryColor:t}))},Sn=async()=>{Ct(!0),Tt(null);try{xt(await pe())}catch{Tt(s(`could_not_check_for_updates`))}finally{Ct(!1)}},Cn=async()=>{Tt(null),Dt({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await me();e.ok||wn(e.error??``)}catch(e){wn(e instanceof Error?e.message:String(e))}},wn=e=>Dt(t=>t&&{...t,phase:`error`,error:e}),Tn=async()=>{try{await he()}catch(e){Tt(e instanceof Error?e.message:String(e))}},En=async()=>{Dt(e=>e&&{...e,phase:`installing`});try{let e=await ge();e.ok||wn(e.error??s(`the_update_failed`))}catch(e){wn(e instanceof Error?e.message:String(e))}};(0,I.useEffect)(()=>_e(e=>Dt(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,I.useEffect)(()=>F(e=>Dt(t=>t&&{...t,changelog:e.text})),[]);let Dn=async()=>{if(!m||!yt)return;let e=yt.name.trim()||`${yt.accent.toUpperCase()} / ${yt.secondary.toUpperCase()}`,t=[...m.themePresets,{name:e,accent:yt.accent,secondary:yt.secondary}];bt(null),await W({themePresets:t})},On=async e=>{m&&await W({themePresets:m.themePresets.filter((t,n)=>n!==e)})},kn=e=>{let t=Ot;kt(null),t&&t.role===e&&(e===`accent`?vn:yn).toLowerCase()!==t.color.toLowerCase()&&_n(e,t.color)},An=async()=>{let e=ze.trim();if(e&&!Ie){Le(!0),V(null);try{z(await Im(e,Ve)),Be(``)}catch{V(s(`could_not_add_the_tag`))}finally{Le(!1)}}},jn=async(e,t)=>{z(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Lm(e,t)||V(s(`could_not_change_the_tag_s_color`))},Mn=async e=>{if(Ie)return;Le(!0),V(null);let t=await Fm(e);z(await Pm()),t||V(`"${e}" is still used by a folder whose index could not be updated.`),Le(!1)},Nn=async()=>{let e=Fe;if(!e||Ie)return;let t=e.value.trim();t.length===0||t===e.name?B(null):(Le(!0),V(null),await Rm(e.name,t)?(z(await Pm()),B(null)):V(`Could not rename "${e.name}".`),Le(!1))},Pn=async e=>{let t=new Set(Yt.columns??Ce.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=il.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await W({defaultView:{...Yt,columns:n}})},Fn=async()=>{if(oe)return;let e=!tn;N(!0),ve(null);try{let t=await H(e),r=t.registered&&t.pathMatches;ae(t),_(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&ve(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ve(`The request to Windows failed. Try again.`)}finally{N(!1)}},In=async()=>{if(De||!m)return;let e=!en;Oe(!0),Ae(null);try{let t=await tt(e);L(t);let r=Zt?t.registered&&t.pathMatches:e;_(e=>e&&{...e,defaultFileManager:r}),n(),Zt&&r!==e&&Ae(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{Ae(`The request to Windows failed. Try again.`)}finally{Oe(!1)}},Ln=async()=>{if(!Se){we(!0),Ee(null);try{let e=await rt();be(e);let t=e.registered&&e.pathMatches;_(e=>e&&{...e,archiveHandler:t}),n(),t||Ee(`Windows did not accept the archive registration. Try again.`)}catch{Ee(`The request to Windows failed. Try again.`)}finally{we(!1)}}},Rn=async()=>{if(!Se){we(!0),Ee(null);try{let e=await it();be(e),_(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&Ee(`The registration is still there. Try turning it off again.`)}catch{Ee(`The request to Windows failed. Try again.`)}finally{we(!1)}}},zn=async(e,t)=>{if(!m)return;let n={...m.extensionIcons};t===null?delete n[e]:n[e]=t,await W({extensionIcons:n})},Bn={...Ht,...m?.shortcuts};(0,I.useEffect)(()=>{if(!je)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){R(null);return}let t=Kt(e);t&&(R(null),W({shortcuts:{...Bn,[je]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[je,m]),(0,I.useEffect)(()=>{if(!Me)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){Ne(!1);return}let t=Kt(e);t&&(Ne(!1),W({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[Me,m]);let Vn=async e=>{await W({recentLimit:Math.min(Math.max(e,0),50)})},Hn=(e,t)=>{let n=t??_t[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};vt(t=>({...t,[e]:void 0})),W(i)},Un=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Ft(null),await W({sharePortMode:`custom`,sharePort:n}),await Ic(n,`custom`)},Wn=async e=>{let t=e===`custom`,n=t?m?.sharePort??8080:null;await W({sharePortMode:t?`custom`:`random`,sharePort:n}),await Ic(n,t?`custom`:`random`)},Gn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;Vt(!0),zt(null);try{let e=await ht(t);Lt(e),zt(e.error),e.error||await W({startupMode:t})}finally{Vt(!1)}},Kn=async e=>{await W({galleryRoots:e.length>0?e:null})},qn=async()=>{let e=await Ta(),t=m?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await Kn([...t,e])},Jn=async()=>{let e=C.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await zn(e,ne),w(``))},Xn=async()=>{k(!0);try{let e=await Ta();if(!e)return;let t=await Ea([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await st(e.replace(/[\\/][^\\/]+$/,``),x(e),`file:${t}`)&&(on(),b({folder:e,icon:t}))}finally{k(!1)}},Zn=async(e,t)=>{let n={...m?.fonts};t?n[e]=t:delete n[e],await W({fonts:n})};return(0,J.jsxs)(Dh,{children:[(0,J.jsxs)(Oh,{ref:Gt,children:[(0,J.jsxs)(kh,{ref:nn(`application`),children:[(0,J.jsx)(Eh,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`version`)}),(0,J.jsx)(vg,{children:e?`v${e.version}`:`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`platform`)}),(0,J.jsx)(vg,{children:e?.platform??`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`language`)}),(0,J.jsx)($,{children:s(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(Ch,{disabled:!m,onChange:e=>void W({language:e}),options:[uh,...c.length>0?c:[oh]],value:m?.language??oh})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`picker_window_size`)}),(0,J.jsx)($,{children:s(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Og,{inputMode:`numeric`,onBlur:e=>Hn(`width`,e.currentTarget.value),onChange:e=>vt(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:_t.width??String(m?.pickerWindowWidth??1200)}),(0,J.jsx)(vg,{children:`×`}),(0,J.jsx)(Og,{inputMode:`numeric`,onBlur:e=>Hn(`height`,e.currentTarget.value),onChange:e=>vt(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:_t.height??String(m?.pickerWindowHeight??800)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`web_server_port`)}),(0,J.jsx)($,{children:s(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(xo,{disabled:!m,onChange:e=>void Wn(e),options:[{value:`random`,label:s(`random`)},{value:`custom`,label:s(`custom_port`)}],value:m?.sharePortMode??`random`,width:160})})]}),m?.sharePortMode===`custom`&&(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`custom_port`)}),(0,J.jsx)($,{children:s(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(Og,{inputMode:`numeric`,onBlur:e=>void Un(e.currentTarget.value),onChange:e=>Ft(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Pt??(m?.sharePort?String(m.sharePort):``)})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`link_paths`)}),(0,J.jsx)($,{children:s(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(xo,{disabled:!m,onChange:e=>void W({linkPathMode:e}),options:[{value:`relative`,label:s(`relative`)},{value:`absolute`,label:s(`absolute`)}],value:m?.linkPathMode??`relative`,width:160})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`global_hotkey`)}),(0,J.jsx)($,{children:s(`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`)})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(o_,{$listening:Me,disabled:!m,onClick:()=>Ne(!0),type:`button`,children:Me?s(`press_a_key`):m?.globalHotkey?qt(m.globalHotkey):s(`none`)}),m?.globalHotkey&&(0,J.jsx)(xg,{onClick:()=>void W({globalHotkey:null}),type:`button`,children:s(`clear`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`open_yafm_links`)}),(0,J.jsx)($,{children:s(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),j.registered&&!j.pathMatches&&(0,J.jsx)(_g,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:j.registeredPath??`?`})}),P&&(0,J.jsx)(_g,{children:P})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Tg,{$on:tn,children:s(tn?`active`:`off`)}),(0,J.jsx)(Eg,{$on:tn,disabled:oe,onClick:()=>void Fn(),title:s(tn?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,J.jsx)(Dg,{})})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`use_as_the_default_file_manager`)}),(0,J.jsx)($,{children:s(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),xe?.registered&&!xe.pathMatches&&(0,J.jsx)(_g,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:xe.registeredPath??`?`})}),ke&&(0,J.jsx)(_g,{children:ke})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Tg,{$on:en,children:s(en?`active`:`off`)}),(0,J.jsx)(Eg,{$on:en,disabled:!m||De,onClick:()=>void In(),title:s(en?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,J.jsx)(Dg,{})})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`open_archives_with_this_app`)}),(0,J.jsx)($,{children:s(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,J.jsx)($,{children:s(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),ye?.registered&&!ye.pathMatches&&(0,J.jsx)(_g,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:ye.registeredPath??`?`})}),Te&&(0,J.jsx)(_g,{children:Te})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Tg,{$on:Qt,children:s(Qt?`active`:`off`)}),(0,J.jsx)(s_,{disabled:!m||Se||Qt,onClick:()=>void Ln(),type:`button`,children:s(`register`)}),e?.platform===`windows`&&(0,J.jsx)(s_,{onClick:()=>void le(`ms-settings:defaultapps`),type:`button`,children:s(`default_apps`)}),(0,J.jsx)(wg,{disabled:!m||Se||!$t,onClick:()=>void Rn(),type:`button`,children:s(`unregister`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`reopen_the_tabs_that_were_open`)}),(0,J.jsx)($,{children:s(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,J.jsx)(Eg,{$on:m?.restoreTabs??!0,disabled:!m,onClick:()=>void W({restoreTabs:!m?.restoreTabs}),type:`button`,children:(0,J.jsx)(Dg,{})})]})]})]}),(0,J.jsxs)(kh,{ref:nn(`startup`),children:[(0,J.jsx)(Eh,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`start_with_the_computer`)}),(0,J.jsx)($,{children:s(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),Rt&&(0,J.jsx)(_g,{children:Rt}),It&&!It.supported&&(0,J.jsx)(_g,{children:s(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(xo,{disabled:!m||Bt||It!==null&&!It.supported,onChange:e=>void Gn(e),options:[{value:`none`,label:s(`none`)},{value:`shortcut`,label:s(`shortcut`)},{value:`task`,label:s(`scheduled_task`)}],value:It?.mode??m?.startupMode??`none`,width:170})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`start_hidden_in_the_tray`)}),(0,J.jsx)($,{children:s(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(Eg,{$on:m?.startHidden??!1,disabled:!m,onClick:()=>void W({startHidden:!m?.startHidden}),type:`button`,children:(0,J.jsx)(Dg,{})})})]})]})]}),(0,J.jsxs)(kh,{ref:nn(`fonts`),children:[(0,J.jsx)(Eh,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`}),(0,J.jsxs)(jh,{children:[Vm.map(e=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(e.label)}),(0,J.jsx)($,{children:s(`falls_back_to_font_until_another_family_is_chosen`,{font:s(e.fallback)})})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(Gm,{defaultLabel:s(e.fallback),disabled:!m,fonts:Mt,onChange:t=>void Zn(e.id,t),sample:e.sample,value:m?.fonts?.[e.id]??null})})]},e.id)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`reset`)}),(0,J.jsx)($,{children:s(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(s_,{onClick:()=>void W({fonts:{}}),type:`button`,children:s(`reset`)})})]})]})]}),(0,J.jsxs)(kh,{ref:nn(`time`),children:[(0,J.jsx)(Eh,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`}),(0,J.jsx)(jh,{children:(0,J.jsxs)(Mh,{children:[(0,J.jsxs)(Nh,{children:[(0,J.jsx)(Q,{children:s(`format`)}),(0,J.jsx)($,{children:s(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,J.jsx)(e_,{children:ch.map(e=>(0,J.jsx)(t_,{$active:(m?.timeFormat??`24`)===e.id,onClick:()=>void W({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(m?.timeFormat??`24`)===`custom`&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(n_,{"aria-label":s(`pattern`),onBlur:gn,onChange:e=>ct(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),gn()):e.key===`Escape`&&ct(null)},spellCheck:!1,value:ot??m?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,J.jsx)($,{children:s(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,J.jsxs)(r_,{children:[(0,J.jsx)(`span`,{children:s(`preview`)}),(0,J.jsx)(`code`,{children:te(lh,m?.timeFormat,ot??m?.timeFormatPattern)})]})]})})]}),(0,J.jsxs)(kh,{ref:nn(`updates`),children:[(0,J.jsx)(Eh,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`current_version`)}),(0,J.jsx)(vg,{children:e?`v${e.version}`:`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`latest_version`)}),(0,J.jsx)(vg,{children:U?`v${U.latest}`:`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:U?U.available?s(`version_version_is_available`,{version:U.latest}):s(`you_are_on_the_latest_version`):s(`not_checked_yet`)}),(0,J.jsx)($,{children:U?.available?s(`the_installer_downloads_installs_itself_and_closes_the_app`):s(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,J.jsx)(hg,{children:U?.available?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(s_,{onClick:()=>void de(),type:`button`,children:s(`open_release_page`)}),Zt&&(0,J.jsx)(s_,{disabled:Et!==null,onClick:()=>void Cn(),type:`button`,children:s(`download_and_install`)})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(s_,{disabled:St,onClick:()=>void Sn(),type:`button`,children:s(St?`checking`:`check_for_updates`)}),(0,J.jsx)(s_,{onClick:()=>void ue(),type:`button`,children:s(`open_log_folder`)})]})})]}),wt&&(0,J.jsx)(X,{children:(0,J.jsx)(_g,{children:wt})})]})]}),(0,J.jsxs)(kh,{ref:nn(`colors`),children:[(0,J.jsx)(Eh,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsxs)(Nh,{children:[(0,J.jsx)(Q,{children:s(`theme`)}),(0,J.jsx)($,{children:s(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,J.jsx)(e_,{children:sh.map(e=>(0,J.jsx)(t_,{$active:(m?.themeMode??`system`)===e.id,onClick:()=>void W({themeMode:e.id}),type:`button`,children:s(e.label)},e.id))})]}),(0,J.jsxs)(Mh,{children:[(0,J.jsxs)(Nh,{children:[(0,J.jsx)(Q,{children:s(`presets`)}),(0,J.jsx)($,{children:s(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,J.jsxs)(Ph,{children:[Fu.map(e=>(0,J.jsxs)(Fh,{$on:vn.toLowerCase()===e.accent&&yn.toLowerCase()===e.secondary,onClick:()=>bn(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,J.jsxs)(Hh,{children:[(0,J.jsx)(`i`,{style:{background:e.accent}}),(0,J.jsx)(`i`,{style:{background:e.secondary}})]}),(0,J.jsx)(Ih,{children:s(e.name)})]},e.name)),Xt.map((e,t)=>(0,J.jsxs)(Lh,{children:[(0,J.jsxs)(Fh,{$on:vn.toLowerCase()===e.accent.toLowerCase()&&yn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>bn(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,J.jsxs)(Hh,{children:[(0,J.jsx)(`i`,{style:{background:e.accent}}),(0,J.jsx)(`i`,{style:{background:e.secondary}})]}),(0,J.jsx)(Ih,{children:e.name})]}),(0,J.jsx)(Rh,{onClick:()=>void On(t),title:s(`remove_preset`),type:`button`,children:(0,J.jsx)(ki,{size:9})})]},`${e.name}-${t}`)),yt?(0,J.jsxs)(Bh,{children:[(0,J.jsxs)(Hh,{children:[(0,J.jsx)(`i`,{style:{background:yt.accent}}),(0,J.jsx)(`i`,{style:{background:yt.secondary}})]}),(0,J.jsx)(Vh,{autoFocus:!0,maxLength:24,onChange:e=>bt({...yt,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Dn()):e.key===`Escape`&&(e.preventDefault(),bt(null))},placeholder:s(`preset_name`),spellCheck:!1,value:yt.name}),(0,J.jsx)(xg,{onClick:()=>void Dn(),type:`button`,children:s(`save`)}),(0,J.jsx)(xg,{onClick:()=>bt(null),type:`button`,children:s(`cancel`)})]}):(0,J.jsxs)(zh,{disabled:!m,onClick:()=>bt({name:``,accent:vn,secondary:yn}),title:s(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,J.jsx)(_i,{size:12}),s(`add_preset`)]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`accent_color`)}),(0,J.jsx)($,{children:s(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Th,{colors:pt.accent,current:vn,onApply:e=>xn(`accent`,e)}),(0,J.jsx)(Sg,{"aria-label":s(`accent_color`),disabled:!m,onBlur:()=>kn(`accent`),onChange:e=>void W({accentColor:e.target.value}),onFocus:()=>kt({role:`accent`,color:vn}),type:`color`,value:vn}),(0,J.jsx)(Cg,{children:vn.toUpperCase()})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`secondary_color`)}),(0,J.jsx)($,{children:s(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Th,{colors:pt.secondary,current:yn,onApply:e=>xn(`secondary`,e)}),(0,J.jsx)(Sg,{"aria-label":s(`secondary_color`),disabled:!m,onBlur:()=>kn(`secondary`),onChange:e=>void W({secondaryColor:e.target.value}),onFocus:()=>kt({role:`secondary`,color:yn}),type:`color`,value:yn}),(0,J.jsx)(Cg,{children:yn.toUpperCase()})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`reset_colors`)}),(0,J.jsx)($,{children:s(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(xg,{disabled:!m,onClick:()=>{_n(`accent`,vn),_n(`secondary`,yn),W({accentColor:null,secondaryColor:null})},type:`button`,children:s(`reset`)})})]})]})]}),(0,J.jsxs)(kh,{ref:nn(`background`),children:[(0,J.jsx)(Eh,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsxs)(Nh,{children:[(0,J.jsx)(Q,{children:s(`wallpaper`)}),(0,J.jsx)($,{children:s(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,J.jsx)(Bg,{children:(0,J.jsx)(Vg,{$active:!m?.backgroundSource,onClick:()=>void W({backgroundSource:null}),title:s(`none`),type:`button`,children:(0,J.jsx)(Kg,{children:s(`none`)})})}),(0,J.jsxs)(Lg,{children:[Ru.map(e=>(0,J.jsxs)(Rg,{children:[(0,J.jsx)(zg,{children:s(e.name)}),(0,J.jsx)(Bg,{children:e.variants.map(t=>(0,J.jsx)(Vg,{$active:m?.backgroundSource===t.id,onClick:()=>void W({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,J.jsx)(`img`,{alt:``,src:v===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,J.jsxs)(Rg,{children:[(0,J.jsx)(zg,{children:s(`motion`)}),(0,J.jsx)(Bg,{children:Lu.map(e=>(0,J.jsxs)(Vg,{$active:m?.backgroundSource===e.id,onClick:()=>void W({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,J.jsx)(`img`,{alt:``,src:e.poster}),(0,J.jsx)(Wg,{children:(0,J.jsx)(Ii,{size:11})})]},e.id))})]}),(0,J.jsxs)(Rg,{children:[(0,J.jsx)(zg,{children:s(`custom`)}),(0,J.jsxs)(Bg,{children:[(m?.backgroundCustom??[]).map(e=>(0,J.jsx)(Sh,{active:m?.backgroundSource===`file:${e}`||m?.backgroundSource===`url:${e}`||m?.backgroundSource===e,onRemove:()=>cn(e),onSelect:()=>void W({backgroundSource:O(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,J.jsxs)(Gg,{onClick:()=>void an([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,J.jsx)(_i,{size:12}),s(`image_2`)]}),(0,J.jsxs)(Gg,{onClick:()=>void an([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,J.jsx)(_i,{size:12}),s(`video`)]})]})]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`image_or_video_url`)}),(0,J.jsx)($,{children:s(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Og,{onChange:e=>Wt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&sn()},placeholder:`https://…`,value:Ut}),(0,J.jsx)(xg,{disabled:!O(Ut),onClick:()=>void sn(),type:`button`,children:s(`add`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`blur`)}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Ig,{max:40,min:0,onChange:e=>void W({backgroundBlur:Number(e.target.value)}),type:`range`,value:m?.backgroundBlur??0}),(0,J.jsxs)(vg,{children:[m?.backgroundBlur??0,`px`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`saturation`)}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Ig,{max:200,min:0,onChange:e=>void W({backgroundSaturation:Number(e.target.value)}),type:`range`,value:m?.backgroundSaturation??100}),(0,J.jsxs)(vg,{children:[m?.backgroundSaturation??100,`%`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`brightness`)}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Ig,{max:150,min:40,onChange:e=>void W({backgroundBrightness:Number(e.target.value)}),type:`range`,value:m?.backgroundBrightness??100}),(0,J.jsxs)(vg,{children:[m?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,J.jsxs)(kh,{ref:nn(`safety`),children:[(0,J.jsx)(Eh,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsxs)(Nh,{children:[(0,J.jsx)(Q,{children:s(`protected_folders`)}),(0,J.jsx)($,{children:s(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,J.jsx)(qg,{children:(m?.protectedPaths??[]).map(e=>(0,J.jsxs)(Jg,{children:[(0,J.jsx)(Yg,{"aria-label":s(`protected_path`),onBlur:dn,onChange:t=>We({from:e,value:t.target.value}),onFocus:()=>We({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),dn()):e.key===`Escape`&&We(null)},spellCheck:!1,value:Ue?.from===e?Ue.value:e}),(0,J.jsx)(Xg,{onClick:()=>G(e),title:s(`remove`),type:`button`,children:(0,J.jsx)(ki,{size:10})})]},e))}),(0,J.jsxs)(Qg,{children:[(0,J.jsx)($g,{"aria-label":s(`new_protected_rule`),onChange:e=>Ye(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),un())},placeholder:`*.log`,spellCheck:!1,value:Je}),(0,J.jsx)(xg,{onClick:un,type:`button`,children:s(`add_the_rule`)})]}),(0,J.jsxs)(Zg,{children:[(0,J.jsx)(xg,{onClick:()=>void K(),type:`button`,children:s(`restore_defaults`)}),(0,J.jsx)(xg,{onClick:()=>void ln(),type:`button`,children:s(`add_folder_2`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`confirmation_delay`)}),(0,J.jsx)($,{children:s(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Ig,{max:30,min:2,onChange:e=>void W({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:m?.deleteDelaySeconds??5}),(0,J.jsxs)(vg,{children:[m?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,J.jsxs)(kh,{ref:nn(`tags`),children:[(0,J.jsx)(Eh,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(gg,{children:[(0,J.jsx)(yg,{"aria-label":s(`color_of_the_new_tag`),onChange:e=>He(e.target.value),type:`color`,value:Ve}),(0,J.jsx)(Og,{onChange:e=>Be(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),An())},placeholder:s(`new_tag`),spellCheck:!1,value:ze})]}),(0,J.jsx)($,{children:s(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(xg,{disabled:Ie||ze.trim().length===0,onClick:()=>void An(),type:`button`,children:s(`add`)})})]}),Re&&(0,J.jsx)(X,{children:(0,J.jsx)(_g,{children:Re})}),Pe.length===0&&(0,J.jsx)(X,{children:(0,J.jsx)($,{children:s(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),Pe.map(e=>(0,J.jsx)(X,{children:Fe?.name===e.name?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(gg,{children:[(0,J.jsx)(yg,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void jn(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,J.jsx)(bg,{autoFocus:!0,disabled:Ie,onChange:t=>B({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Nn()):e.key===`Escape`&&(e.preventDefault(),B(null))},value:Fe.value})]}),(0,J.jsx)($,{children:s(`press_enter_to_save_escape_to_cancel`)})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(xg,{disabled:Ie,onClick:()=>void Nn(),type:`button`,children:s(`save`)}),(0,J.jsx)(xg,{disabled:Ie,onClick:()=>B(null),type:`button`,children:s(`cancel`)})]})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(gg,{children:[(0,J.jsx)(yg,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void jn(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,J.jsx)(Q,{children:e.name})]}),(0,J.jsx)($,{children:se(s,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(xg,{disabled:Ie,onClick:()=>B({name:e.name,value:e.name}),type:`button`,children:s(`edit`)}),(0,J.jsxs)(wg,{disabled:Ie,onClick:()=>void Mn(e.name),type:`button`,children:[(0,J.jsx)(Di,{size:13}),s(`remove`)]})]})]})},e.name))]})]}),(0,J.jsxs)(kh,{ref:nn(`files-view`),children:[(0,J.jsx)(Eh,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`default_view`)}),(0,J.jsx)($,{children:s(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,J.jsx)(hg,{children:(0,J.jsxs)(Pg,{children:[(0,J.jsx)(Fg,{$on:Yt.mode===`list`,onClick:()=>void W({defaultView:{...Yt,mode:`list`}}),type:`button`,children:s(`list`)}),(0,J.jsx)(Fg,{$on:Yt.mode===`grid`,onClick:()=>void W({defaultView:{...Yt,mode:`grid`}}),type:`button`,children:s(`grid`)})]})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`list_icon_size`)}),(0,J.jsx)($,{children:s(`the_icon_in_the_list_rows`)})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Ig,{max:48,min:16,onChange:e=>void W({defaultView:{...Yt,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Yt.iconSize}),(0,J.jsxs)(vg,{children:[Yt.iconSize,`px`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`grid_size`)}),(0,J.jsx)($,{children:s(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Ig,{max:260,min:100,onChange:e=>void W({defaultView:{...Yt,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Yt.gridSize}),(0,J.jsxs)(vg,{children:[Yt.gridSize,`px`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(gg,{children:[(0,J.jsx)(Q,{children:s(`selection_checkboxes`)}),(0,J.jsx)(zm,{})]}),(0,J.jsx)($,{children:s(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,J.jsx)(Eg,{$on:m?.showCheckboxes??!0,disabled:!m,onClick:()=>void W({showCheckboxes:!(m?.showCheckboxes??!0)}),type:`button`,children:(0,J.jsx)(Dg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(gg,{children:[(0,J.jsx)(Q,{children:s(`open_with_a_single_click`)}),(0,J.jsx)(zm,{})]}),(0,J.jsx)($,{children:s(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,J.jsx)(Eg,{$on:m?.openOnSingleClick??!1,disabled:!m,onClick:()=>void W({openOnSingleClick:!(m?.openOnSingleClick??!1)}),type:`button`,children:(0,J.jsx)(Dg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(gg,{children:[(0,J.jsx)(Q,{children:s(`open_the_file_tray_while_dragging`)}),(0,J.jsx)(zm,{})]}),(0,J.jsx)($,{children:s(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,J.jsx)(Eg,{$on:m?.trayAutoShow??!0,disabled:!m,onClick:()=>void W({trayAutoShow:!(m?.trayAutoShow??!0)}),type:`button`,children:(0,J.jsx)(Dg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(gg,{children:[(0,J.jsx)(Q,{children:s(`confirm_before_deleting`)}),(0,J.jsx)(zm,{})]}),(0,J.jsx)($,{children:s(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,J.jsx)(Eg,{$on:m?.confirmDelete??!1,disabled:!m,onClick:()=>void W({confirmDelete:!(m?.confirmDelete??!1)}),type:`button`,children:(0,J.jsx)(Dg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(gg,{children:[(0,J.jsx)(Q,{children:s(`play_audio_in_video_previews`)}),(0,J.jsx)(zm,{})]}),(0,J.jsx)($,{children:s(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,J.jsx)(Eg,{$on:m?.previewVideoAudio??!1,disabled:!m,onClick:()=>void W({previewVideoAudio:!(m?.previewVideoAudio??!1)}),type:`button`,children:(0,J.jsx)(Dg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(gg,{children:[(0,J.jsx)(Q,{children:s(`autoplay_video_previews`)}),(0,J.jsx)(zm,{})]}),(0,J.jsx)($,{children:s(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,J.jsx)(Eg,{$on:m?.previewVideoAutoplay??!1,disabled:!m,onClick:()=>void W({previewVideoAutoplay:!(m?.previewVideoAutoplay??!1)}),type:`button`,children:(0,J.jsx)(Dg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(gg,{children:[(0,J.jsx)(Q,{children:s(`preview_panel_under_the_list`)}),(0,J.jsx)(zm,{})]}),(0,J.jsx)($,{children:s(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,J.jsx)(Eg,{$on:Yt.showImages??!0,onClick:()=>void W({defaultView:{...Yt,showImages:!(Yt.showImages??!0)}}),type:`button`,children:(0,J.jsx)(Dg,{})})]}),(0,J.jsx)(X,{children:(0,J.jsxs)(Z,{children:[(0,J.jsxs)(gg,{children:[(0,J.jsx)(Q,{children:s(`columns`)}),(0,J.jsx)(zm,{})]}),(0,J.jsx)($,{children:s(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,J.jsx)(X,{children:(0,J.jsxs)(i_,{children:[il.map(e=>(0,J.jsxs)(a_,{children:[(0,J.jsx)(`input`,{checked:(Yt.columns??[]).includes(e.id),onChange:()=>void Pn(e.id),type:`checkbox`}),(0,J.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,J.jsxs)(a_,{children:[(0,J.jsx)(`input`,{checked:(Yt.columns??[]).includes(`linkTarget`),onChange:()=>void Pn(`linkTarget`),type:`checkbox`}),(0,J.jsx)(`span`,{children:s(`link_target_after_the_name`)})]})]})})]}),(0,J.jsxs)(d_,{children:[s(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,J.jsx)(zm,{}),` `,s(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,J.jsxs)(kh,{ref:nn(`shortcuts`),children:[(0,J.jsx)(Eh,{note:`the_keys_this_window_listens_for_click_a_combination_to_record_a_new_one`,title:`shortcuts`}),(0,J.jsxs)(jh,{children:[ah.map(({id:e,label:t,note:n})=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(t)}),(0,J.jsx)($,{children:s(n)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(o_,{$listening:je===e,onClick:()=>R(e),type:`button`,children:je===e?s(`press_a_key`):qt(Bn[e])})})]},e)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`reset`)}),(0,J.jsx)($,{children:s(`back_to_the_default_combination_for_every_action`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(s_,{onClick:()=>void W({shortcuts:{...Ht}}),type:`button`,children:s(`reset`)})})]})]})]}),(0,J.jsxs)(kh,{ref:nn(`memory`),children:[(0,J.jsx)(Eh,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(dg,{children:[(0,J.jsxs)(fg,{children:[(0,J.jsx)(Q,{children:s(`process_memory`)}),(0,J.jsx)(vg,{children:A?`${S(A.private)} · ${Zh(A.private,A.available)}`:`—`})]}),(0,J.jsx)(pg,{children:(0,J.jsx)(mg,{$ratio:A?A.private/Math.max(A.available,1):0,$tone:ee(A?A.private/Math.max(A.available,1):0)})}),(0,J.jsx)($,{children:A?s(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:S(A.available),resident:S(A.workingSet)}):s(`reading_the_current_usage`)})]}),(0,J.jsxs)(dg,{children:[(0,J.jsxs)(fg,{children:[(0,J.jsx)(Q,{children:s(`managed_heap`)}),(0,J.jsx)(vg,{children:A?`${S(A.managed)} · ${Zh(A.managed,A.private)}`:`—`})]}),(0,J.jsx)(pg,{children:(0,J.jsx)(mg,{$ratio:A?A.managed/Math.max(A.private,1):0,$tone:`var(--accent-secondary)`})}),(0,J.jsx)($,{children:s(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,J.jsxs)(dg,{children:[(0,J.jsxs)(fg,{children:[(0,J.jsx)(Q,{children:s(`native_and_runtime`)}),(0,J.jsx)(vg,{children:A?`${S(Math.max(0,A.private-A.managed))} · ${Zh(Math.max(0,A.private-A.managed),A.private)}`:`—`})]}),(0,J.jsx)(pg,{children:(0,J.jsx)(mg,{$ratio:A?Math.max(0,A.private-A.managed)/Math.max(A.private,1):0,$tone:`var(--accent-primary)`})}),(0,J.jsx)($,{children:s(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`free_memory`)}),(0,J.jsx)($,{children:s(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(s_,{onClick:()=>void ut().then(ie),type:`button`,children:s(`trim_now`)})})]})]})]}),(0,J.jsxs)(kh,{ref:nn(`overview`),children:[(0,J.jsx)(Eh,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`}),(0,J.jsx)(jh,{children:(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`recent_items`)}),(0,J.jsx)($,{children:s(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(Og,{max:50,min:0,onChange:e=>void Vn(Number(e.target.value)),type:`number`,value:m?.recentLimit??10})})]})})]}),(0,J.jsxs)(kh,{ref:nn(`gallery`),children:[(0,J.jsx)(Eh,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`}),(0,J.jsxs)(jh,{children:[(m?.galleryRoots??[]).map(e=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:x(e)}),(0,J.jsx)($,{children:e})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(c_,{onClick:()=>void Kn((m?.galleryRoots??[]).filter(t=>t!==e)),title:s(`stop_scanning_this_folder`),type:`button`,children:(0,J.jsx)(ki,{size:12})})})]},e)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`scan_folders`)}),(0,J.jsx)($,{children:(m?.galleryRoots??[]).length===0?s(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):s(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,J.jsx)(hg,{children:(0,J.jsx)(s_,{onClick:()=>void qn(),type:`button`,children:s(`choose_folder`)})})]})]})]}),(0,J.jsxs)(kh,{ref:nn(`icons`),children:[(0,J.jsx)(Eh,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`use_system_file_icons`)}),(0,J.jsx)($,{children:s(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,J.jsx)(Eg,{$on:m?.systemIcons??!1,disabled:!m,onClick:()=>void W({systemIcons:!m?.systemIcons}),type:`button`,children:(0,J.jsx)(Dg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`use_custom_folder_icons`)}),(0,J.jsx)($,{children:s(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,J.jsx)(Eg,{$on:m?.customFolderIcons??!1,disabled:!m,onClick:()=>void W({customFolderIcons:!m?.customFolderIcons}),type:`button`,children:(0,J.jsx)(Dg,{})})]})]})]}),(0,J.jsxs)(kh,{ref:nn(`extension-icons`),children:[(0,J.jsx)(Eh,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`}),(0,J.jsxs)(jh,{children:[Object.entries(m?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:e}),(0,J.jsx)($,{children:yh(s,t)})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(bh,{source:t}),(0,J.jsx)(c_,{onClick:()=>void zn(e,null),title:s(`remove_this_rule`),type:`button`,children:(0,J.jsx)(ki,{size:12})})]})]},e)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`add_a_rule`)}),(0,J.jsx)($,{children:s(`extension_and_the_icon_to_draw_for_it`)})]}),(0,J.jsxs)(hg,{children:[(0,J.jsx)(Og,{onChange:e=>w(e.target.value),placeholder:`.psd`,spellCheck:!1,value:C}),(0,J.jsxs)(Ng,{children:[(0,J.jsx)(c_,{onClick:()=>E(e=>!e),title:s(`choose_the_icon`),type:`button`,children:(0,J.jsx)(bh,{source:ne})}),re&&(0,J.jsx)(Zd,{allowDefault:!1,onClose:()=>E(!1),onPick:e=>{T(e??`file`),E(!1)},value:ne})]}),(0,J.jsx)(c_,{onClick:()=>void Jn(),title:s(`add_the_rule`),type:`button`,children:(0,J.jsx)(_i,{size:13})})]})]})]})]}),(0,J.jsxs)(kh,{ref:nn(`folder-icons`),children:[(0,J.jsx)(Eh,{note:`a_single_folder_can_carry_an_icon_of_its_own`,title:`folder_icons`}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`give_a_folder_its_own_icon`)}),(0,J.jsx)($,{children:s(`stored_in_the_folder_s_parent_index_so_it_stays_with_the_files`,{index:`.yafm-index.db`})})]}),(0,J.jsxs)(hg,{children:[y&&(0,J.jsx)(xh,{src:y.icon}),(0,J.jsx)(s_,{disabled:D,onClick:()=>void Xn(),type:`button`,children:s(D?`choosing`:`choose_folder_and_icon`)})]})]}),y&&(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:x(y.folder)}),(0,J.jsx)($,{children:y.folder})]}),(0,J.jsx)(hg,{children:(0,J.jsxs)(u_,{children:[(0,J.jsx)(Oi,{size:11}),` `,s(`saved`)]})})]})]})]}),(0,J.jsxs)(kh,{ref:nn(`folder-index`),children:[(0,J.jsx)(Eh,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,J.jsx)($,{children:s(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,J.jsx)(Eg,{$on:m?.writeDirectoryIndex??!0,disabled:!m,onClick:()=>void W({writeDirectoryIndex:!m?.writeDirectoryIndex}),type:`button`,children:(0,J.jsx)(Dg,{})})]}),(0,J.jsxs)(Mh,{children:[(0,J.jsxs)(Nh,{children:[(0,J.jsx)(Q,{children:s(`directory_index_blacklist`)}),(0,J.jsx)($,{children:s(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,J.jsx)(qg,{children:(m?.directoryIndexBlacklist??[]).map(e=>(0,J.jsxs)(Jg,{children:[(0,J.jsx)(Yg,{"aria-label":s(`directory_index_blacklist_rule`),onBlur:q,onChange:t=>qe({from:e,value:t.target.value}),onFocus:()=>qe({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),q()):e.key===`Escape`&&qe(null)},spellCheck:!1,value:Ge?.from===e?Ge.value:e}),(0,J.jsx)(Xg,{onClick:()=>mn(e),title:s(`remove`),type:`button`,children:(0,J.jsx)(ki,{size:10})})]},e))}),(0,J.jsxs)(Qg,{children:[(0,J.jsx)($g,{"aria-label":s(`directory_index_blacklist_rule`),onChange:e=>$e(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),fn())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Qe}),(0,J.jsx)(xg,{onClick:fn,type:`button`,children:s(`add_the_rule`)})]}),(0,J.jsxs)(Zg,{children:[(0,J.jsx)(xg,{onClick:hn,type:`button`,children:s(`restore_defaults`)}),(0,J.jsx)(xg,{onClick:()=>void pn(),type:`button`,children:s(`add_folder_2`)})]})]})]}),!(m?.writeDirectoryIndex??!0)&&(0,J.jsx)(f_,{children:vh(s,e?.platform)})]}),(0,J.jsxs)(kh,{ref:nn(`indexing`),children:[(0,J.jsx)(Eh,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,J.jsx)(_h,{})]}),(0,J.jsxs)(kh,{ref:nn(`files`),children:[(0,J.jsx)(Eh,{note:`what_the_listings_include`,title:`files`}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`hidden_items`)}),(0,J.jsx)(vg,{children:gh(s,u?.showHidden)})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`protected_operating_system_files`)}),(0,J.jsx)(vg,{children:gh(s,u?.showSystem)})]})]}),(0,J.jsx)(d_,{children:s(`listings_follow_the_file_manager_s_own_settings_hidden_and_protected_items_are_only_shown_when_the_operating_system_is_set_to_show_them`)})]})]}),(0,J.jsxs)(Kh,{"aria-label":s(`settings_sections`),children:[(0,J.jsx)(qh,{children:s(`sections`)}),(0,J.jsx)(Jh,{children:fh.map(({id:e,label:t})=>(0,J.jsx)(Yh,{$active:At===e,onClick:()=>rn(e),type:`button`,children:(0,J.jsx)(`span`,{children:s(t)})},e))}),(0,J.jsx)(Xh,{children:s(`changes_are_saved_as_you_make_them`)})]}),Et&&(0,Ha.createPortal)((0,J.jsx)(eg,{children:(0,J.jsxs)(tg,{"aria-modal":`true`,role:`dialog`,children:[(0,J.jsxs)(ng,{children:[(0,J.jsx)(`h2`,{children:s(`software_update`)}),(0,J.jsx)(`p`,{children:U?.latest?s(`version_version`,{version:U.latest}):s(`preparing_the_update`)})]}),(0,J.jsx)(rg,{children:s(`changelog`)}),Et.changelog?(0,J.jsx)(ig,{onClick:og,children:(0,J.jsx)(a,{source:Et.changelog})}):(0,J.jsx)(ag,{children:Et.phase===`changelog`?s(`loading_the_changelog`):s(`the_changelog_could_not_be_loaded`)}),(0,J.jsxs)(sg,{children:[(0,J.jsx)(`span`,{children:Qh(Et,s)}),(0,J.jsx)(`span`,{children:$h(Et)})]}),(0,J.jsx)(cg,{children:(0,J.jsx)(lg,{$percent:Math.max(0,Math.min(100,Et.percent))})}),Et.error&&(0,J.jsx)(_g,{children:Et.error}),(0,J.jsxs)(ug,{children:[(Et.phase===`changelog`||Et.phase===`downloading`)&&(0,J.jsx)(s_,{onClick:()=>void Tn(),type:`button`,children:s(`cancel`)}),Et.phase===`ready`&&(0,J.jsx)(s_,{onClick:()=>void En(),type:`button`,children:s(`install_update`)}),Et.phase===`installing`&&(0,J.jsx)(s_,{disabled:!0,type:`button`,children:s(`installing`)}),(Et.phase===`ready`||Et.phase===`error`||Et.phase===`cancelled`||Et.phase===`installing`)&&(0,J.jsx)(s_,{onClick:()=>Dt(null),type:`button`,children:s(`close`)})]})]})}),document.body)]})}function gh(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function _h(){let e=o(),[t,n]=(0,I.useState)(null);return(0,I.useEffect)(()=>{let e=!0,t=()=>Je().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,J.jsx)(f_,{children:e(`no_indexing_tasks_are_running`)}):(0,J.jsxs)(jh,{children:[(0,J.jsx)(X,{children:(0,J.jsx)(Q,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,J.jsx)(X,{children:(0,J.jsx)(vg,{title:e,children:e})},e))]}):(0,J.jsx)(f_,{children:e(`index_task_information_is_unavailable`)})}function vh(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function yh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function bh({source:e}){let t=K(e.startsWith(`file:`)?e.slice(5):null);return(0,J.jsx)(l_,{children:t?(0,J.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,J.jsx)($s,{name:e,size:16})})}function xh({src:e}){let t=K(e);return(0,J.jsx)(l_,{children:t&&(0,J.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Sh({path:e,active:t,onSelect:n,onRemove:r}){let i=o(),a=O(e),s=gn(a?null:e),c=a?e:s,l=nd(e.split(/[?#]/)[0]);return(0,J.jsxs)(Hg,{children:[(0,J.jsxs)(Vg,{$active:t,onClick:n,title:e,type:`button`,children:[c&&(l?(0,J.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${c}#t=0.5`}):(0,J.jsx)(`img`,{alt:``,src:c})),l&&(0,J.jsx)(Wg,{children:(0,J.jsx)(Ii,{size:11})})]}),(0,J.jsx)(Ug,{onClick:r,title:i(`remove`),type:`button`,children:(0,J.jsx)(ki,{size:9})})]})}function Ch({value:e,options:t,onChange:n,disabled:r}){let i=o(),[a,s]=(0,I.useState)(null),c=(0,I.useRef)(null);return(0,I.useEffect)(()=>{if(!a)return;let e=()=>s(null),t=t=>{let n=t.target;n instanceof Node&&c.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(kg,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){s(null);return}let e=c.current?.getBoundingClientRect();e&&s({left:e.left,top:e.bottom+4,width:e.width})},ref:c,type:`button`,children:[(0,J.jsx)(`span`,{children:wh(i,e)}),(0,J.jsx)(Ag,{children:(0,J.jsx)(bi,{size:11})})]}),a&&(0,Ha.createPortal)((0,J.jsx)(jg,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,J.jsxs)(Mg,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),s(null)},role:`option`,type:`button`,children:[(0,J.jsx)(`span`,{children:wh(i,t)}),t===e&&(0,J.jsx)(Oi,{size:11})]},t))}),document.body)]})}function wh(e,t){return t===uh?e(`system_default`):dh[t]??t}function Th({colors:e,current:t,onApply:n}){let r=o();if(e.length===0)return null;let[i,...a]=e;return(0,J.jsxs)(Uh,{children:[(0,J.jsxs)(Gh,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,J.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,J.jsx)(Wh,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,J.jsx)(Oi,{size:9})},e))]})}function Eh({title:e,note:t,global:n=!1}){let r=o();return(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(`h2`,{children:[r(e),n&&(0,J.jsx)(zm,{})]}),(0,J.jsx)(`p`,{children:r(t)})]})}var Dh=v.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Oh=v.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,kh=v.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Ah=v.header`
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
`,jh=v.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Mh=v.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Nh=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Ph=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Fh=v.button`
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
`,Ih=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Lh=v.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Rh=v.button`
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
`,zh=v.button`
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
`,Bh=v.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Vh=v.input`
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
`,Hh=v.span`
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
`,Uh=v.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Wh=v.button`
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
`,Gh=v.button`
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
`,Kh=v.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,qh=v.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Jh=v.div`
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
`,Yh=v.button`
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
`,Xh=v.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function Zh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function Qh(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function $h(e){return e.total>0?`${S(e.downloaded)} / ${S(e.total)}`:e.downloaded>0?S(e.downloaded):``}var eg=v.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,tg=v.div`
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
`,ng=v.div`
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
`,rg=v.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ig=v.div`
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
`,ag=v.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function og(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),le(t.href))}var sg=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,cg=v.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,lg=v.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,ug=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,dg=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,fg=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,pg=v.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,mg=v.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,X=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Z=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,hg=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=v.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,gg=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=v.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,_g=v.span`
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
`,vg=v.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,yg=v.input`
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
`,bg=v.input`
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
`,xg=v.button`
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
`,Sg=v.input`
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
`,Cg=v.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,wg=v.button`
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
`,Tg=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Eg=v.button`
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
`,Dg=v.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Og=v.input`
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
`,kg=v.button`
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
`,Ag=v.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,jg=v.div`
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
`,Mg=v.button`
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
`,Ng=v.span`
    position: relative;
    display: inline-flex;
`,Pg=v.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Fg=v.button`
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
`,Ig=v.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Lg=v.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Rg=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,zg=v.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Bg=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Vg=v.button`
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
`,Hg=v.div`
    position: relative;
    width: 102px;
    height: 58px;
`,Ug=v.button`
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
`,Wg=v.span`
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
`,Gg=v.button`
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
`,Kg=v.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,qg=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Jg=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Yg=v.input`
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
`,Xg=v.button`
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
`,Zg=v.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,Qg=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,$g=v.input`
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
`,e_=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,t_=v.button`
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
`,n_=v.input`
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
`,r_=v.div`
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
`,i_=v.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,a_=v.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,o_=v.button`
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
`,s_=v.button`
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
`,c_=v.button`
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
`,l_=v.span`
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
`,u_=v.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,d_=v.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,f_=v.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,p_=150,m_=2500,h_=3,g_=600;function __({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:s,onSearchMatches:c,onPick:l,onSelectionChange:u,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,showDetails:g=!0,videoAudio:_=!1,videoAutoplay:v=!1}){let y=o(),b=$c(`gallery`),[x,ee]=(0,I.useState)([]),[te,C]=(0,I.useState)(0),[w,ne]=(0,I.useState)(!0),[T,re]=(0,I.useState)(null),[E,D]=(0,I.useState)(!1),[O,k]=(0,I.useState)([]),[A,ie]=(0,I.useState)(()=>{let e=Kn(`yafm.preview.width`,320);return e>=220?e:320}),j=(0,I.useRef)([]),ae=(0,I.useRef)(0),M=(0,I.useRef)(!1),ce=(0,I.useRef)(!0),N=(0,I.useRef)(0),P=(0,I.useRef)(null),le=(0,I.useRef)(0),ue=(0,I.useCallback)(async e=>{let t=++N.current;ne(!0),ce.current=!0,re(null);try{let n=await Be(0,p_,e);if(t!==N.current)return;j.current=n.entries,ae.current=n.total,ee(n.entries),C(n.total)}catch(e){t===N.current&&re(e instanceof Error?e.message:String(e))}finally{t===N.current&&(ce.current=!1,ne(!1))}},[]);(0,I.useEffect)(()=>{ue(!1)},[ue]);let de=(0,I.useCallback)(async()=>{if(ce.current||M.current||j.current.length>=ae.current)return;let e=N.current;M.current=!0;try{let t=j.current,n=ae.current;for(let r=0;r<h_&&t.length<n;r++){let r=await Be(t.length,p_,!1);if(e!==N.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<p_)break}if(e!==N.current)return;j.current=t,ae.current=n,(0,I.startTransition)(()=>{ee(t),C(n)})}catch{}finally{M.current=!1}},[]),fe=(0,I.useCallback)(e=>{le.current||=window.requestAnimationFrame(()=>{le.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<m_&&de()})},[de]);(0,I.useEffect)(()=>{let e=P.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&de()},{root:e.parentElement,rootMargin:`${m_}px 0px`});return t.observe(e),()=>t.disconnect()},[de]),(0,I.useEffect)(()=>{if(x.length>=te)return;let e=window.setTimeout(()=>{let e=P.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<m_&&de()},200);return()=>window.clearTimeout(e)},[x.length,te,de]);let pe=(0,I.useMemo)(()=>({path:``,parent:null,entries:x.map(v_),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[x]),me=(0,I.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),he=(0,I.useCallback)(e=>{l?l(e):Te(e)},[l]),ge=(0,I.useCallback)(e=>{let t=y_(e.modified);return{id:t,label:t}},[]),_e=()=>{D(!0),ue(!0).finally(()=>D(!1))},F=x.length<te,ve=(0,I.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:x.filter(e=>Dn(e.name,a)||Dn(e.path,a)),[x,a?.open,a?.query,a?.matchCase,a?.regex]),ye=(0,I.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:ve[Math.min(a.index,Math.max(0,ve.length-1))]?.path??null}:yn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,ve]);(0,I.useEffect)(()=>{c?.(ve.length)},[ve.length,c]);let be=(0,I.useCallback)(e=>{k(e),u?.(e)},[u]),xe=e=>{ie(e),qn(`yafm.preview.width`,e)},L=O.length>0?x.find(e=>e.path===O[0])??null:null,Se=L?.name.includes(`.`)?L.name.slice(L.name.lastIndexOf(`.`)+1).toUpperCase():`—`,Ce=L&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(L.name)?y(`video_2`):y(`picture`),we=L?L.path.slice(0,Math.max(L.path.lastIndexOf(`\\`),L.path.lastIndexOf(`/`))):``,Ee=L?{name:L.name,path:L.path,isDirectory:!1,size:L.size,modified:L.modified,fields:[{label:y(`type`),value:Ce},{label:y(`extension`),value:Se},{label:y(`location`),value:we},{label:y(`full_path`),value:L.path},{label:y(`size`),value:S(L.size)},{label:y(`modified`),value:oe(L.modified)},{label:y(`created`),value:`—`}]}:null;return(0,J.jsxs)(b_,{children:[(0,J.jsxs)(C_,{children:[(0,J.jsxs)(T_,{children:[(0,J.jsx)(`span`,{children:y(`gallery`)}),(0,J.jsx)(E_,{children:w?y(`scanning`):y(`shown_of_total_pictures`,{shown:x.length,total:te})})]}),(0,J.jsxs)(w_,{children:[(0,J.jsx)(D_,{onClick:_e,title:y(`scan_the_folders_again`),type:`button`,children:(0,J.jsx)(O_,{$spinning:E,children:(0,J.jsx)(gi,{size:14})})}),b.available&&(0,J.jsx)(D_,{onClick:e=>b.open(e.clientX,e.clientY),title:y(`selection_menu`),type:`button`,children:(0,J.jsx)(xa,{size:14})})]})]}),T&&(0,J.jsx)(A_,{children:T}),!T&&!w&&te===0&&(0,J.jsx)(A_,{children:y(`no_pictures_found`)}),!T&&(w||te>0)&&(0,J.jsxs)(x_,{children:[(0,J.jsx)(S_,{children:(0,J.jsx)(pl,{confirmDelete:n,find:ye,selectMatchesToken:s,listing:w&&x.length===0?null:pe,loading:w,error:null,view:me,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:be,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:he,onOpenFile:he,onRefresh:_e,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,groupOf:ge,onGridScroll:fe,gridFooter:(0,J.jsx)(k_,{$space:F?g_:1,ref:P}),allowBackgroundMenu:!1})}),g&&(0,J.jsx)(is,{emptyNote:y(`nothing_selected`),info:Ee,onWidth:xe,selectionNote:O.length>1?se(y,O.length,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:_,videoAutoplay:v,width:A})]})]})}function v_(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function y_(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(k(),{weekday:`long`}):t.toLocaleDateString(k(),{year:`numeric`,month:`long`,day:`numeric`})}var b_=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,x_=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,S_=v.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,C_=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,w_=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,T_=v.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,E_=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,D_=v.button`
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
`,O_=v.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,k_=v.div`
    height: ${({$space:e})=>e}px;
`,A_=v.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function j_({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:s=``,version:c=0,historyVersion:u=0,hiddenViews:d=[],onNavigate:f,onOpenView:p}){let[m,h]=(0,I.useState)([]),g=o(),[_,v]=(0,I.useState)(null),y=Fn();(0,I.useEffect)(()=>{Xe().then(e=>{v(e),h(Ns(e).filter(e=>e.pinned))},()=>{v(null),h([])})},[c]),(0,I.useEffect)(()=>{if(!l.available)return;let e=m.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[m,s]);let b=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>N(e.path,t));return{name:_?.placeNames?.[t]??n?.name??(x(t)||t),path:t,kind:`folder`,icon:n?.icon??_?.placeIcons?.[t]??null}}),te=a===`files`;return(0,J.jsxs)(L_,{children:[(0,J.jsxs)(R_,{children:[!d.includes(`home`)&&(0,J.jsxs)(U_,{$active:a===`home`,onClick:e=>p(`home`,Gt(e)),title:g(`overview`),type:`button`,children:[(0,J.jsx)(qi,{}),(0,J.jsx)(G_,{children:g(`overview`)})]}),!d.includes(`recycle`)&&(0,J.jsxs)(U_,{$active:a===`recycle`,onClick:e=>p(`recycle`,Gt(e)),title:g(`recycle_bin`),type:`button`,children:[(0,J.jsx)(Di,{}),(0,J.jsx)(G_,{children:g(`recycle_bin`)})]}),!d.includes(`gallery`)&&(0,J.jsxs)(U_,{$active:a===`gallery`,onClick:e=>p(`gallery`,Gt(e)),title:g(`gallery`),type:`button`,children:[(0,J.jsx)(Fi,{}),(0,J.jsx)(G_,{children:g(`gallery`)})]})]}),m.map(e=>(0,J.jsxs)(B_,{children:[(0,J.jsxs)(U_,{as:`div`,$active:!1,children:[(0,J.jsx)(W_,{children:(0,J.jsx)(Fs,{panel:e,size:16})}),(0,J.jsx)(G_,{children:g(e.title)})]}),(0,J.jsx)(V_,{children:(0,J.jsxs)(H_,{children:[e.kind===`quick`&&b(e).map(e=>(0,J.jsxs)(U_,{$active:te&&N(i,e.path),onClick:t=>f(e.path,Gt(t)),title:e.path,type:`button`,children:[(0,J.jsx)(Is,{place:e}),(0,J.jsx)(G_,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=In(y,e.path);return(0,J.jsxs)(U_,{$active:te&&N(i,e.path),onClick:t=>e.isDirectory?f(e.path,Gt(t)):void Te(e.path),title:e.path,type:`button`,children:[t&&y.useIcons?(0,J.jsx)(Is,{place:t}):(0,J.jsx)(ec,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,J.jsx)(G_,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,J.jsx)(P_,{historyVersion:u,onNavigate:f}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,J.jsxs)(U_,{$active:te&&N(i,e.name),onClick:t=>f(e.name,Gt(t)),title:e.name,type:`button`,children:[(0,J.jsx)(pi,{}),(0,J.jsxs)(G_,{children:[ae(e),(0,J.jsxs)(K_,{children:[S(e.freeSpace),` free`]}),(0,J.jsx)(q_,{children:(0,J.jsx)(J_,{$used:t,$tone:ee(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,J.jsx)(F_,{onNavigate:f,path:e.path||s})]})})]},e.id)),!d.includes(`settings`)&&(0,J.jsx)(z_,{children:(0,J.jsxs)(U_,{$active:a===`settings`,onClick:e=>p(`settings`,Gt(e)),title:g(`settings`),type:`button`,children:[(0,J.jsx)(xi,{}),(0,J.jsx)(G_,{children:g(`settings`)})]})})]})}var M_=10,N_=40;function P_({historyVersion:e=0,onNavigate:t}){let n=o(),[r,i]=(0,I.useState)(null),a=Fn();return(0,I.useEffect)(()=>{He().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=In(a,e.path);return(0,J.jsxs)(U_,{$active:!1,onClick:n=>t(e.path,Gt(n)),title:se(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,J.jsx)(Is,{place:r}):(0,J.jsx)(ec,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,J.jsx)(G_,{children:r?.name||e.name})]},e.path)})}function F_({path:e,onNavigate:t}){let[n,r]=(0,I.useState)(null);(0,I.useEffect)(()=>{e&&(r(null),Ee(e,!1).then(r,()=>r(null)))},[e]),(0,I.useEffect)(()=>{if(e&&l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&N(n.data.path,e)&&Ee(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,M_),o=i.filter(e=>!e.isDirectory).slice(0,N_);return(0,J.jsxs)(J.Fragment,{children:[a.map(e=>(0,J.jsx)(I_,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,J.jsx)(I_,{entry:e,onNavigate:t},e.fullPath))]})}function I_({entry:e,onNavigate:t}){let n=Fn(),r=In(n,e.fullPath);return(0,J.jsxs)(U_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Gt(n)):void Te(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,J.jsx)(Is,{place:r}):(0,J.jsx)(ec,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,J.jsx)(G_,{children:r?.name||e.name})]})}var L_=v.aside`
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

    &:not(:hover) ${()=>K_},
    &:not(:hover) ${()=>q_} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,R_=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,z_=v(R_)`
    margin-top: auto;
`,B_=v.div`
    display: flex;
    flex-direction: column;
`,V_=v.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${L_}:hover ${B_}:hover > & {
        grid-template-rows: 1fr;
    }
`,H_=v.div`
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
`,U_=v.button`
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
`,W_=v.span`
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
`,G_=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,K_=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,q_=v.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,J_=v.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,Y_=v.span`
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
`;function X_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=o(),a=(0,I.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,I.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,J.jsxs)(Q_,{ref:a,children:[(0,J.jsxs)($_,{$active:n,onClick:()=>r(!n),title:s>0?se(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,J.jsx)(Ei,{size:13}),c>0&&(0,J.jsx)(Y_,{children:c>9?`9+`:c})]}),n&&(0,J.jsxs)(ev,{children:[(0,J.jsxs)(tv,{children:[(0,J.jsx)(nv,{children:i(`status_center`)}),(0,J.jsxs)(rv,{children:[(0,J.jsx)(iv,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,J.jsx)(av,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,J.jsx)(ki,{size:10})})]})]}),e.length===0?(0,J.jsx)(sv,{children:i(`no_operations_yet`)}):(0,J.jsx)(ov,{children:e.map(e=>(0,J.jsx)(Z_,{task:e},e.id))})]})]})}function Z_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,J.jsxs)(cv,{children:[(0,J.jsxs)(lv,{children:[(0,J.jsx)(uv,{$state:e.state,children:e.state===`done`?(0,J.jsx)(Oi,{size:10}):e.state===`failed`?(0,J.jsx)(ki,{size:10}):(0,J.jsx)(dv,{})}),(0,J.jsx)(fv,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,J.jsxs)(pv,{children:[S(e.bytesDone),` / `,S(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,J.jsxs)(pv,{children:[e.done,` / `,e.total]})]}),i&&(0,J.jsx)(mv,{children:(0,J.jsx)(hv,{$percent:r,$indeterminate:t===0})}),e.error&&(0,J.jsx)(gv,{children:e.error})]})}var Q_=v.div`
    position: relative;
    display: flex;
`,$_=v.button`
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
`,ev=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Ua}
    ${no}
`,tv=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,nv=v.span`
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
`,rv=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,iv=v.button`
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
`,av=v.button`
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
`,ov=v.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,sv=v.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,cv=v.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${ro}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,lv=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,uv=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,dv=v.span`
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
`,fv=v.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,pv=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,mv=v.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,hv=v.div`
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
`,gv=v.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function _v(){return l.available?(await l.request(`fs.history.list`)).entries:[]}async function vv(e){return l.available?(await l.request(`fs.history.undoTo`,{id:e})).ok:!1}function yv(){let e=o(),[t,n]=(0,I.useState)(!1),[r,i]=(0,I.useState)([]),[a,s]=(0,I.useState)(!1),c=(0,I.useRef)(null),l=()=>void _v().then(i,()=>i([]));(0,I.useEffect)(()=>{if(!t)return;l();let e=window.setInterval(l,1e3),r=e=>{c.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let u=async e=>{s(!0);try{await vv(e),l()}finally{s(!1)}};return(0,J.jsxs)(Sv,{ref:c,children:[(0,J.jsx)(Cv,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,J.jsx)(Ti,{size:14})}),t&&(0,J.jsxs)(wv,{children:[(0,J.jsxs)(Tv,{children:[(0,J.jsx)(Ev,{children:e(`history`)}),(0,J.jsx)(Dv,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,J.jsx)(ki,{size:10})})]}),r.length===0?(0,J.jsx)(Iv,{children:e(`no_operations_yet`)}):(0,J.jsx)(Ov,{children:r.map(t=>(0,J.jsxs)(kv,{children:[(0,J.jsxs)(Av,{children:[(0,J.jsxs)(jv,{children:[(0,J.jsx)(xv,{label:t.label}),bv(e,t.label)]}),(0,J.jsx)(Mv,{children:D(t.at)})]}),t.paths.length>0&&(0,J.jsxs)(Nv,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,J.jsx)(Pv,{children:(0,J.jsx)(Fv,{disabled:!t.applied||!t.restorable||a,onClick:()=>void u(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function bv(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function xv({label:e}){return e.startsWith(`delete`)?(0,J.jsx)(Di,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,J.jsx)(ma,{size:13}):e.startsWith(`rename`)?(0,J.jsx)(Ji,{size:13}):e.startsWith(`compress`)?(0,J.jsx)(Ri,{size:13}):e.startsWith(`new`)?(0,J.jsx)(_i,{size:13}):(0,J.jsx)(yi,{size:13})}var Sv=v.div`
    position: relative;
    display: flex;
`,Cv=v.button`
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
`,wv=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Ua}
    ${no}
`,Tv=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Ev=v.span`
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
`,Dv=v.button`
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
`,Ov=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,kv=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,Av=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,jv=v.span`
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
`,Mv=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Nv=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Pv=v.div`
    display: flex;
    justify-content: flex-end;
`,Fv=v.button`
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
`,Iv=v.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function Lv({currentFolder:e}){let t=o(),[n,r]=(0,I.useState)(!1),[i,a]=(0,I.useState)(null),[s,c]=(0,I.useState)(!1),l=(0,I.useRef)(null);(0,I.useEffect)(()=>{if(!n)return;let e=()=>void Oc().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{l.current?.contains(e.target)||r(!1)},o=()=>r(!1);return window.addEventListener(`pointerdown`,i),window.addEventListener(`blur`,o),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`blur`,o)}},[n]),(0,I.useEffect)(()=>{let e=()=>void Oc().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{a(await e())}finally{c(!1)}},d=i?.shares.some(t=>N(t.path,e))??!1;return(0,J.jsxs)(Rv,{ref:l,children:[(0,J.jsxs)(zv,{$active:n,onClick:()=>r(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,J.jsx)(ca,{size:15}),i&&i.shares.length>0&&(0,J.jsx)(Y_,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,J.jsxs)(Bv,{children:[(0,J.jsxs)(Vv,{children:[(0,J.jsx)(Hv,{children:t(`share`)}),(0,J.jsx)(Uv,{onClick:()=>r(!1),title:t(`close`),type:`button`,children:(0,J.jsx)(ki,{size:10})})]}),(0,J.jsxs)(Wv,{children:[(0,J.jsxs)(Gv,{children:[(0,J.jsx)(Mi,{size:15}),(0,J.jsxs)(`span`,{children:[(0,J.jsx)(`strong`,{children:i?.deviceName||t(`this_device`)}),(0,J.jsx)(Kv,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,J.jsx)(qv,{children:t(`no_folders_are_shared_yet`)}),i?.shares.map(e=>(0,J.jsxs)(Jv,{children:[(0,J.jsxs)(Yv,{children:[(0,J.jsx)(Xv,{title:e.path,children:e.name}),(0,J.jsx)(Qv,{disabled:s,onClick:()=>void u(()=>Ac(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,J.jsx)(ki,{size:10})})]}),(0,J.jsx)(Zv,{title:e.path,children:e.path}),(0,J.jsxs)($v,{children:[(0,J.jsxs)(ey,{$active:e.mode===`client`,onClick:()=>void u(()=>jc(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,J.jsx)(Mi,{size:11}),t(`app`)]}),(0,J.jsxs)(ey,{$active:e.mode===`web`,onClick:()=>void u(()=>jc(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,J.jsx)(ua,{size:11}),t(`web`)]})]})]},e.id)),(0,J.jsxs)(ty,{disabled:s||e.length===0||d,onClick:()=>void u(()=>kc(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,J.jsx)(_i,{size:12}),t(`share_this_folder`)]}),i?.webRunning&&(0,J.jsxs)(ny,{children:[(0,J.jsxs)(ry,{children:[(0,J.jsx)(ua,{size:12}),t(`browser_access`)]}),i.urls.map(e=>(0,J.jsx)(iy,{onClick:()=>void le(e),type:`button`,children:e},e)),(0,J.jsx)(Kv,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var Rv=v.div`
    position: relative;
    display: flex;
`,zv=v.button`
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
`,Bv=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Ua}
    ${no}
`,Vv=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Hv=v.span`
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
`,Uv=v.button`
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
`,Wv=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,Gv=v.div`
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
`,Kv=v.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,qv=v.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,Jv=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,Yv=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Xv=v.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Zv=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qv=v.button`
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
`,$v=v.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,ey=v.button`
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
`,ty=v.button`
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
`,ny=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,ry=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,iy=v.button`
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
`;function ay({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let s=o(),[c,l]=(0,I.useState)(!1),u=(0,I.useRef)(null);(0,I.useEffect)(()=>{if(!c)return;let e=()=>l(!1),t=e=>{u.current?.contains(e.target)||l(!1)},n=e=>{e.key===`Escape`&&l(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[c]),(0,I.useEffect)(()=>{a&&l(!1)},[a]);let d=e.columns,f=e=>{let t=new Set(d);t.has(e)?t.delete(e):t.add(e);let r=il.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,J.jsxs)(oy,{ref:u,children:[(0,J.jsx)(sy,{$active:c,disabled:a,onClick:()=>l(e=>!e),title:s(`view`),type:`button`,children:e.mode===`grid`?(0,J.jsx)(wi,{size:14}):(0,J.jsx)(Ci,{size:14})}),c&&(0,J.jsxs)(cy,{children:[(0,J.jsx)(ly,{children:s(`view`)}),(0,J.jsxs)(dy,{children:[(0,J.jsxs)(fy,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,J.jsx)(Ci,{size:12}),` `,s(`list`)]}),(0,J.jsxs)(fy,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,J.jsx)(wi,{size:12}),` `,s(`grid`)]})]}),(0,J.jsx)(ly,{children:s(`list_icon_size`)}),(0,J.jsxs)(py,{children:[(0,J.jsx)(`input`,{"aria-label":s(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,J.jsxs)(my,{children:[e.iconSize,`px`]})]}),(0,J.jsx)(ly,{children:s(`grid_size`)}),(0,J.jsxs)(py,{children:[(0,J.jsx)(`input`,{"aria-label":s(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,J.jsxs)(my,{children:[e.gridSize,`px`]})]}),(0,J.jsxs)(ly,{children:[s(`columns`),(0,J.jsx)(zm,{}),(0,J.jsx)(uy,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:s(`reset_column_widths`),type:`button`,children:s(`reset_widths`)})]}),il.map(e=>(0,J.jsxs)(hy,{children:[(0,J.jsx)(`input`,{checked:d.includes(e.id),onChange:()=>f(e.id),type:`checkbox`}),(0,J.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,J.jsxs)(hy,{children:[(0,J.jsx)(`input`,{checked:d.includes(`linkTarget`),onChange:()=>f(`linkTarget`),type:`checkbox`}),(0,J.jsx)(`span`,{children:s(`link_target_after_the_name`)})]}),(0,J.jsxs)(ly,{children:[s(`preview_panel`),(0,J.jsx)(zm,{})]}),(0,J.jsxs)(hy,{children:[(0,J.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,J.jsx)(`span`,{children:s(`preview_under_the_list`)})]})]})]})}var oy=v.div`
    position: relative;
    display: flex;
    height: 100%;
`,sy=v.button`
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
`,cy=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Ua}
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
`,ly=v.div`
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
`,uy=v.button`
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
`,dy=v.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,fy=v.button`
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
`,py=v.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,my=v.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,hy=v.label`
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
`,gy=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),_y=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),vy=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),yy=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,J.jsx)(`path`,{d:`M2 5h6`})}),by=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,J.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),xy=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,J.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,J.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Sy({tabs:e,activeId:n,onSelect:r,onClose:i,onNewTab:a,onReorder:s,onTransferToTab:c,view:l,onViewChange:d,onColumns:f,showImages:p,onShowImages:m,tasks:h,onClearTasks:g,activityOpen:_,onActivityOpenChange:v,trayCount:y,trayVisible:b,onToggleTray:x,split:ee,canSplit:S,onToggleSplit:te,details:C,canDetails:w,onToggleDetails:ne,shortcuts:T,currentFolder:re}){let E=o(),D=t(),O=u(),[k,A]=(0,I.useState)({left:!1,right:!1}),[ie,j]=(0,I.useState)(null),[ae,oe]=(0,I.useState)(null),se=(0,I.useRef)(null),M=(0,I.useRef)(null),ce=(0,I.useRef)(null),N=(0,I.useCallback)(()=>{let e=M.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;A(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,I.useEffect)(()=>{N();let e=M.current;if(!e)return;let t=new ResizeObserver(N);return t.observe(e),()=>t.disconnect()},[N,e.length]),(0,I.useEffect)(()=>()=>{se.current&&window.clearTimeout(se.current.timer)},[]),(0,I.useEffect)(()=>{ce.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[n]);let P=e=>M.current?.scrollBy({left:e,behavior:`smooth`}),le=()=>{se.current&&window.clearTimeout(se.current.timer),se.current=null,oe(null)};return(0,J.jsxs)(Ey,{children:[(0,J.jsx)(Dy,{children:(0,J.jsx)(Mi,{size:19})}),(0,J.jsxs)(Oy,{children:[k.left&&(0,J.jsx)(Ay,{onClick:()=>P(-180),title:E(`scroll_tabs_left`),type:`button`,children:(0,J.jsx)(gy,{})}),(0,J.jsx)(ky,{onScroll:N,onWheel:e=>{let t=M.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:M,children:e.map(e=>(0,J.jsxs)(jy,{$active:e.id===n,$dragging:ie===e.id,$dropTarget:ae===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!rc(t.dataTransfer)||!Cy(e)||(t.preventDefault(),se.current?.id===e.id))return;le(),oe(e.id);let n=window.setTimeout(()=>{r(e.id),se.current=null},500);se.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(se.current?.id===e.id||ae===e.id)&&le()},onDragEnd:()=>{j(null),le()},onDragOver:t=>{(ie||rc(t.dataTransfer)&&Cy(e))&&(t.preventDefault(),rc(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>j(e.id),onDrop:t=>{if(t.preventDefault(),ie)s(ie,e.id);else if(Cy(e)&&rc(t.dataTransfer)){let{paths:n,move:i}=ic(t);n.length>0&&(r(e.id),c(n,e.path,!t.ctrlKey&&i))}j(null),le()},onClick:()=>r(e.id),ref:e.id===n?ce:void 0,title:e.path||e.title,type:`button`,children:[(0,J.jsx)(wy,{tab:e}),(0,J.jsx)(My,{children:e.title}),e.partner&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ny,{children:`|`}),(0,J.jsx)(Ty,{place:e.partner.place}),(0,J.jsx)(My,{children:e.partner.title})]}),(0,J.jsx)(Py,{"data-shortcut":qt(T.closeTab),onClick:t=>{t.stopPropagation(),i(e.id)},title:E(`close_tab`),children:(0,J.jsx)(vy,{})})]},e.id))}),k.right&&(0,J.jsx)(Ay,{onClick:()=>P(180),title:E(`scroll_tabs_right`),type:`button`,children:(0,J.jsx)(_y,{})}),(0,J.jsx)(Fy,{"data-shortcut":qt(T.newTab),onClick:a,title:E(`new_tab`),type:`button`,children:(0,J.jsx)(_i,{size:13})})]}),(0,J.jsx)(Iy,{...O}),(0,J.jsxs)(Ly,{children:[(0,J.jsx)(zy,{$active:ee,"data-shortcut":qt(T.splitView),disabled:!S,onClick:te,title:E(ee?`close_split_view`:`split_view`),type:`button`,children:(0,J.jsx)(ya,{size:15})}),(0,J.jsx)(zy,{$active:C,disabled:!w,onClick:ne,title:E(C?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,J.jsx)(ba,{size:15})}),(0,J.jsxs)(Ry,{$active:b,onClick:x,title:E(b?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,J.jsx)(la,{size:14}),y>0&&(0,J.jsx)(Y_,{children:y>9?`9+`:y})]}),(0,J.jsx)(yv,{}),(0,J.jsx)(Lv,{currentFolder:re}),(0,J.jsx)(X_,{tasks:h,onClear:g,open:_,onOpenChange:v}),(0,J.jsx)(ay,{disabled:e.find(e=>e.id===n)?.kind!==`files`,onChange:d,onColumns:f,onShowImages:m,showImages:p,view:l}),(0,J.jsx)(By,{onClick:D.minimize,title:E(`minimize`),type:`button`,children:(0,J.jsx)(yy,{})}),(0,J.jsx)(By,{onClick:D.toggleMaximize,title:D.maximized?E(`restore`):E(`maximize`),type:`button`,children:D.maximized?(0,J.jsx)(xy,{}):(0,J.jsx)(by,{})}),(0,J.jsx)(Vy,{onClick:D.close,title:E(`close`),type:`button`,children:(0,J.jsx)(vy,{})})]})]})}function Cy(e){return e.kind===`files`&&(!C(e.path)||ne(e.path))}function wy({tab:e}){switch(e.kind){case`home`:return(0,J.jsx)(ui,{size:13});case`settings`:return(0,J.jsx)(xi,{size:13});case`recycle`:return(0,J.jsx)(Di,{size:13});default:return e.archive?(0,J.jsx)(Ri,{size:13}):(0,J.jsx)(Ty,{place:e.place})}}function Ty({place:e}){return e?(0,J.jsx)(Is,{place:e,size:13}):(0,J.jsx)(di,{size:13})}var Ey=v.header`
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
`,Dy=v.span`
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
`,Oy=v.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,ky=v.div`
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
`,Ay=v.button`
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
`,jy=v.button`
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
`,My=v.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ny=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Py=v.span`
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
`,Fy=v.button`
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
`,Iy=v.div`
    flex: 1;
    min-width: 28px;
`,Ly=v.div`
    display: flex;
    flex-shrink: 0;
`,Ry=v.button`
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
`,zy=v.button`
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
`,By=v.button`
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
`,Vy=v(By)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Hy(){let[e,t]=(0,I.useState)(null),n=(0,I.useRef)(null),r=(0,I.useRef)(void 0);return(0,I.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Ha.createPortal)((0,J.jsx)(Uy,{tooltip:e}),document.body):null}function Uy({tooltip:e}){let t=(0,I.useRef)(null),[n,r]=(0,I.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,I.useState)(()=>e.bottom+6);return(0,I.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,J.jsxs)(Wy,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,J.jsx)(Gy,{children:e.text}),e.shortcut&&(0,J.jsx)(Ky,{children:e.shortcut})]})}var Wy=v.div`
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
    ${ro}
`,Gy=v.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Ky=v.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,qy={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`};function Jy({deviceName:e,code:t,onAccept:n,onReject:r}){let i=o(),a=(0,I.useRef)(null);return(0,I.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Ha.createPortal)((0,J.jsx)(Yy,{children:(0,J.jsxs)(Xy,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsxs)(Zy,{children:[(0,J.jsx)(ca,{size:15}),i(`pair_for_sharing`)]}),(0,J.jsx)(Qy,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,J.jsx)($y,{children:t}),(0,J.jsx)(eb,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,J.jsxs)(tb,{children:[(0,J.jsx)(nb,{onClick:r,type:`button`,children:i(`reject`)}),(0,J.jsx)(rb,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var Yy=v.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${ro}
`,Xy=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Qa}
`,Zy=v.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Qy=v.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,$y=v.div`
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
`,eb=v.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,tb=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,nb=v.button`
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
`,rb=v(nb)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,ib=0,ab=new Set;function ob(e){ab.add(e),l.send({type:`app.navigate.done`,payload:{path:e}})}var sb=20,cb=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function lb(e){return e.history[e.index]??Np(`home`)}function ub(e){return Pp(lb(e))??`files`}function db(e){let t=lb(e);return Pp(t)?``:e.listing?.path||t}function fb(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||ub(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function pb(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function mb(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||Se.iconSize,gridSize:e.view?.gridSize||t.gridSize||Se.gridSize,sort:e.view?.sort??Se.sort,sortDescending:e.view?.sortDescending??Se.sortDescending,columns:t.columns??Ce.columns??[]}}function hb(e=Np(`home`)){return ib+=1,{id:`tab-${ib}`,listing:null,loading:!Pp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function gb(e){return e instanceof Error?e.message:String(e)}function _b(e){let t=zc(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return Bc(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function vb(e){let t=x(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function yb(e){return C(e)?Qt(e):void 0}function bb(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return se(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:S(n)})}function xb(){let e=o(),[t,n]=(0,I.useState)(()=>[hb()]),[i,a]=(0,I.useState)(()=>t[0].id),[s,c]=(0,I.useState)(null),[u,d]=(0,I.useState)(()=>{let e=Kn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,I.useState)([]),[h,_]=(0,I.useState)([]),[v,y]=(0,I.useState)(null),[b,ee]=(0,I.useState)(null),[S,te]=(0,I.useState)(null),D=re(),[O,k]=(0,I.useState)(vn),[A,ae]=(0,I.useState)(0),[oe,se]=(0,I.useState)(0),[M,ce]=(0,I.useState)(0),[le,ue]=(0,I.useState)(vn),[de,pe]=(0,I.useState)(0),[me,he]=(0,I.useState)(0),[ge,_e]=(0,I.useState)(0),[F,ve]=(0,I.useState)(0),ye=(0,I.useRef)(F);ye.current=F;let[be,L]=(0,I.useState)([]),[we,Ae]=(0,I.useState)(10),[z,Fe]=(0,I.useState)(null),B=f(g(z?.themeMode)),Ie=(0,I.useMemo)(()=>(z?.favorites??[]).map(e=>w(e.path)),[z?.favorites]),[Le,Re]=(0,I.useState)(0),[V,ze]=(0,I.useState)(Ht),[Be,He]=(0,I.useState)(0),[We,Ge]=(0,I.useState)(0),[Ke,Je]=(0,I.useState)(0),[Ye,Ze]=(0,I.useState)(!0),[Qe,$e]=(0,I.useState)(()=>{let e=Kn(`yafm.preview.width`,320);return e>=220?e:320}),[et,tt]=(0,I.useState)(null),[nt,rt]=(0,I.useState)(null),[it,st]=(0,I.useState)(`primary`),[ct,lt]=(0,I.useState)(null),[ut,dt]=(0,I.useState)(null),[ft,H]=(0,I.useState)(null),[pt,mt]=(0,I.useState)(null),[ht,_t]=(0,I.useState)({primary:0,secondary:0}),[bt,Ct]=(0,I.useState)({primary:null,secondary:null}),[Tt,Et]=(0,I.useState)(null),[Dt,kt]=(0,I.useState)([]),[At,jt]=(0,I.useState)(!1),Mt=(0,I.useRef)([]),Nt=(0,I.useRef)([]),[It,Lt]=(0,I.useState)([]),[Rt,Ut]=(0,I.useState)(!1),Jt=(0,I.useMemo)(()=>Rt?new Set(It.map(e=>e.path)):new Set,[It,Rt]),[Xt,Zt]=(0,I.useState)(!1),[nn,rn]=(0,I.useState)([]),[W,an]=(0,I.useState)(null),cn=(0,I.useRef)(0),[ln,un]=(0,I.useState)(()=>{let e=Jn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?pb({x:e.x,y:e.y}):pb({x:Math.max(20,window.innerWidth-340),y:110})}),dn=(0,I.useCallback)(()=>{un(e=>pb(e)),Zt(!0)},[]),G=t.find(e=>e.id===i)??t[0],K=ub(G),q=lb(G),fn=db(G),pn=K===`files`?G.listing?.parent??_b(fn):null,mn=G.splitWith?t.find(e=>e.id===G.splitWith):void 0,hn=K===`files`&&mn!==void 0,gn=mn?db(mn):``,_n=mn?mn.listing?.parent??_b(gn):null,yn=hn&&mn&&it===`secondary`?mn:G,bn=z?.defaultView??Ce,xn=mb(yn,bn);(0,I.useEffect)(()=>{r(z?.accentColor,z?.secondaryColor,B)},[z?.accentColor,z?.secondaryColor,B]),(0,I.useEffect)(()=>{Um(z?.fonts)},[z?.fonts]),(0,I.useEffect)(()=>{j(z?.timeFormat,z?.timeFormatPattern)},[z?.timeFormat,z?.timeFormatPattern]),(0,I.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!z?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[z?.backgroundSource]),(0,I.useEffect)(()=>(xe(e=>new Promise(t=>{an({id:++cn.current,prompt:e,resolve:t})})),()=>xe(null)),[]),(0,I.useEffect)(()=>{st(`primary`)},[i]),(0,I.useEffect)(()=>{ue(vn),he(0),_e(0)},[K]),(0,I.useEffect)(()=>{he(0)},[le.query,le.matchCase,le.regex]),(0,I.useEffect)(()=>{he(e=>ge===0?0:Math.min(e,ge-1))},[ge]);let Sn=xn.columns.includes(`linkCount`),Cn=(0,I.useMemo)(()=>{let e={},t=Ns(z),n={};for(let[e,t]of Object.entries(z?.placeNames??{}))n[w(e)]=t;for(let t of p)e[w(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=w(t),i=p.find(e=>w(e.path)===r);e[r]={name:n[r]??i?.name??(x(t)||t),path:t,kind:`folder`,icon:i?.icon??z?.placeIcons?.[t]??null}}return e},[p,z]),wn=(0,I.useMemo)(()=>({places:Cn,useIcons:z?.systemIcons===!1}),[Cn,z?.systemIcons]),Tn=z?.defaultView?.showImages??!0,En=z?.defaultView?.imageStripHeight??Ce.imageStripHeight,On=K===`home`?(0,J.jsx)(qi,{size:13}):K===`settings`?(0,J.jsx)(xi,{size:13}):K===`recycle`?(0,J.jsx)(Di,{size:13}):K===`gallery`?(0,J.jsx)(Fi,{size:13}):void 0,kn=O.open&&O.query.length>0,An=(0,I.useMemo)(()=>kn&&yn.listing?yn.listing.entries.filter(e=>Dn(e.isDirectory?Ln(wn,e.fullPath,e.name):e.name,O)).map(e=>e.fullPath):[],[kn,O,yn.listing,wn]);(0,I.useEffect)(()=>{ae(0)},[O.query,O.matchCase,O.regex,yn.listing?.path]);let jn=An.length===0?-1:Math.min(A,An.length-1),Mn=(0,I.useCallback)(()=>{k(e=>({...e,open:!1,query:``})),ae(0)},[]),Nn=(0,I.useCallback)(()=>{k(e=>({...e,open:!0})),se(e=>e+1)},[]),Fn=(0,I.useCallback)(()=>{ue(e=>({...e,open:!0})),pe(e=>e+1)},[]),Rn=(0,I.useCallback)(()=>{ue(vn),he(0),_e(0)},[]),zn=(0,I.useCallback)(e=>{he(t=>ge===0?0:(Math.min(t,ge-1)+e+ge)%ge)},[ge]),Bn=(0,I.useCallback)(e=>{k(t=>({...t,open:!0,query:t.open?t.query+e:e})),se(e=>e+1)},[]),Vn=(0,I.useCallback)(e=>{ae(t=>An.length===0?0:(Math.min(t,An.length-1)+e+An.length)%An.length)},[An.length]),Hn=(0,I.useRef)({tabs:t,activeId:i,activePane:it});Hn.current={tabs:t,activeId:i,activePane:it};let Un=(0,I.useRef)(z);Un.current=z;let Wn=(0,I.useRef)(!1),Gn=(0,I.useRef)([]),Xn=(0,I.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Zn=(0,I.useRef)(new Map),Qn=(0,I.useCallback)(e=>{let t=(Zn.current.get(e)??0)+1;return Zn.current.set(e,t),()=>Zn.current.get(e)===t},[]),$n=(0,I.useCallback)((e,t)=>{l.available&&t&&e===fb(Hn.current)&&l.send({type:`fs.focus`,payload:{path:t}})},[]),er=(0,I.useCallback)(async(e,t,n)=>{if(!(t&&Rc(t)))try{let r=await Me(t,Sn);if(!n()||!r.listing)return;Xn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[Sn,Xn]),tr=(0,I.useCallback)(async(e,t,n=!1)=>{let r=Qn(e);Mn(),$n(e,t);let i=!n||!Hn.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;Xn(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&N(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&er(e,t,r);let o=t&&Rc(t)?await Vc(t):await Ee(t,!0,Sn,ye.current,t?yb(t):void 0);if(!r())return;Xn(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!Rc(o.path)&&Ue(o.path).then(()=>Re(e=>e+1))}catch(i){if(!r())return;let a=Hn.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?db(a):``,s=_b(o),c=gb(i);if(o&&tn(c)){let i=T(o),a=await Ma(i,!!Qt(i));if(a){$t(i,a),r()&&tr(e,t,n);return}}Xn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Qn,Sn,Xn,$n,Mn,er]),nr=(0,I.useCallback)((e,t)=>{let n=Fp(t);n&&(Pp(n)?(Mn(),Qn(e),Xn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):tr(e,n))},[Qn,tr,Xn,Mn]),rr=(0,I.useCallback)(async(e,t,n)=>{if(Mn(),Pp(t)){Qn(e),Xn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Qn(e);$n(e,t),Xn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Rc(t)||er(e,t,r);let n=Rc(t)?await Vc(t):await Ee(t,!0,Sn,ye.current,yb(t));if(!r())return;Xn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(tn(gb(i))){let i=T(t),a=await Ma(i,!!Qt(i));if(a){$t(i,a),r()&&rr(e,t,n);return}}Xn(e,()=>({listing:{path:t,parent:_b(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:gb(i)}))}},[Qn,Sn,Xn,$n,Mn,er]),ir=(0,I.useCallback)((e,t=!0)=>{let r=hb(e??Np(`home`));return n(e=>[...e,r]),t&&a(r.id),e&&!Pp(e)&&tr(r.id,e),r.id},[tr]),ar=(0,I.useCallback)(e=>{for(let t of Hn.current.tabs)ub(t)===`files`&&N(db(t),e)&&tr(t.id,e,!0)},[tr]),or=(0,I.useCallback)((e,t)=>{let n=x(t);for(let r of Hn.current.tabs)r.listing?.entries.some(t=>N(t.fullPath,e))&&Xn(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>N(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[Xn]),sr=(0,I.useRef)([]);(0,I.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&C(t)&&e.add(w(T(t)))}let n=sr.current.filter(t=>!e.has(t));sr.current=[...e],n.length>0&&ke(n)},[t]);let cr=(0,I.useCallback)((e,t=!1)=>{t?ir(Np(e)):nr(Hn.current.activeId,Np(e))},[ir,nr]),lr=(0,I.useCallback)(e=>{let{tabs:t,activeId:r}=Hn.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(Nt.current.push(lb(i)),Nt.current.length>sb&&Nt.current.shift()),o.length===0){let e=hb();n([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&a(o[Math.min(s,o.length-1)].id)},[]),ur=(0,I.useCallback)(()=>{let e=Nt.current.pop();if(!e)return;let t={...hb(e),fresh:!1};n(e=>[...e,t]),a(t.id),ub(t)===`files`&&tr(t.id,db(t))},[tr]),dr=(0,I.useCallback)((e,t=!1)=>{t?ir(e):nr(fb(Hn.current),e??Np(`home`))},[nr,ir]),fr=(0,I.useCallback)(e=>{let{tabs:t,activeId:n}=Hn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),pr=(0,I.useCallback)(()=>{let{tabs:e,activeId:t}=Hn.current,r=e.find(e=>e.id===t);if(!r||ub(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),Xn(t,()=>({splitWith:void 0})),st(`primary`);return}let a=db(r),o={...hb(a),hidden:!0};n(e=>[...e,o]),Xn(t,()=>({splitWith:o.id})),tr(o.id,a),st(`primary`)},[tr,Xn]),mr=(0,I.useCallback)(e=>{$e(e),qn(`yafm.preview.width`,e)},[]),hr=hn?it===`secondary`?nt??et:et??nt:et,gr=(0,I.useRef)(null),_r=e=>{e.preventDefault();let t=gr.current?.getBoundingClientRect();if(!t)return;let n=Ye?Qe:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);d(n),qn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},vr=(e,t,n)=>{t&&lt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},yr=(0,I.useCallback)((e,t)=>{_t(n=>n[e]===t?n:{...n,[e]:t})},[]),br=(0,I.useCallback)(e=>yr(`primary`,e),[yr]),xr=(0,I.useCallback)(e=>yr(`secondary`,e),[yr]),Sr=(e,t)=>{ht[e]!==0&&Ct(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Cr=async(e,t=!1)=>{let n=ct;if(lt(null),!n)return;let r=e===null?await wt(n.directory,t):await Ot(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Mn(),Et(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},wr=(0,I.useCallback)(()=>{let{tabs:e}=Hn.current,t=e.find(e=>e.id===fb(Hn.current));t&&t.index>0&&rr(t.id,t.history[t.index-1],t.index-1)},[rr]),Tr=(0,I.useCallback)(()=>{let{tabs:e}=Hn.current,t=e.find(e=>e.id===fb(Hn.current));t&&t.index<t.history.length-1&&rr(t.id,t.history[t.index+1],t.index+1)},[rr]),Er=(0,I.useCallback)(()=>{let{tabs:e}=Hn.current,t=e.find(e=>e.id===fb(Hn.current));t&&ub(t)===`files`&&t.listing?.parent&&dr(t.listing.parent)},[dr]),Dr=(0,I.useRef)(null),Or=(0,I.useCallback)(()=>{for(let e of Hn.current.tabs)e.listing&&tr(e.id,e.listing.path,!0)},[tr]),kr=(0,I.useCallback)(e=>{e.length!==0&&(rn(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),dn())},[dn]),Ar=(0,I.useCallback)(async e=>{let t=await U(e);t.length!==0&&kr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[kr]),jr=(0,I.useCallback)(e=>{let t=new Set(e);rn(e=>e.filter(e=>!t.has(e.path)))},[]),Mr=(0,I.useCallback)(async e=>{let t=Un.current;if(!t)return;let n=await U(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>w(e.path))),i=n.filter(e=>!r.has(w(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};Fe(a),await at(a),He(e=>e+1)},[]),Nr=(0,I.useCallback)(async e=>{let t=Un.current;if(!t)return;let n=new Set(e.map(w)),r=(t.favorites??[]).filter(e=>!n.has(w(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};Fe(i),await at(i),He(e=>e+1)},[]),Pr=(0,I.useCallback)(()=>rn([]),[]),Fr=(0,I.useRef)(-1),Ir=(0,I.useCallback)(e=>{Lt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Ut(e.move),e.entries.length>0&&dn()},[dn]),Lr=(0,I.useCallback)(async()=>{if(l.available)try{let e=await vt();Fr.current=e.sequence,Ir(e)}catch{}},[Ir]),Rr=(0,I.useCallback)(async e=>{e.length!==0&&await gt(e,!1)&&await Lr()},[Lr]),zr=(0,I.useRef)(nn);zr.current=nn;let Br=(0,I.useRef)(Xt);Br.current=Xt;let Vr=(0,I.useRef)(!1);(0,I.useEffect)(()=>{let e=z?.trayAutoShow??!0,t=t=>{e&&rc(t)&&(Br.current||(Vr.current=!0),dn())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{Vr.current&&window.setTimeout(()=>{Vr.current&&zr.current.length===0&&Zt(!1),Vr.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[dn,z?.trayAutoShow]),(0,I.useEffect)(()=>{let e=()=>un(e=>pb(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Hr=(0,I.useCallback)(async()=>{let e=zr.current;if(e.length>0){let t=await U(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));rn(e=>e.filter(e=>n.has(e.path)))}await Lr()},[Lr]),Ur=(0,I.useCallback)(()=>{Hr(),Je(e=>e+1),Or()},[Hr,Or]),Wr=(0,I.useCallback)(e=>{let t=pb(e);un(t),Yn(`yafm.tray.position`,t)},[]),Gr=(0,I.useCallback)(()=>{Vr.current=!1,Xt?Zt(!1):dn()},[dn,Xt]),Kr=(0,I.useCallback)(async(t,n,r)=>{let i=await yt(t,n,r);i.cancelled||(i.ok?(r&&jr(t),Je(e=>e+1),Or(),Lr()):Aa(i.error??e(`the_files_could_not_be_transferred`)))},[Or,Lr,jr]);(0,I.useEffect)(()=>{if(l.available)return Bt().then(e=>{Mt.current=e,kt(e)},()=>void 0),l.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Mt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Mt.current=n,kt(n),r&&jt(!0)})},[]);let qr=(0,I.useCallback)(()=>{Vt().then(()=>Bt().then(e=>{Mt.current=e,kt(e)},()=>void 0))},[]);(0,I.useEffect)(()=>{if(!l.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await vt();if(!e||t.sequence===Fr.current)return;Fr.current=t.sequence,Ir(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Ir]);let Jr=(0,I.useCallback)(async e=>{let t=e?await Pt():await Ft();t.ok?(Je(e=>e+1),Or()):t.error&&!t.error.startsWith(`Nothing to`)&&Aa(t.error)},[Or]),Yr=(0,I.useRef)(Sn);(0,I.useEffect)(()=>{Yr.current!==Sn&&(Yr.current=Sn,Or())},[Sn,Or]);let Xr=(0,I.useCallback)((e,t)=>{let{tabs:n}=Hn.current,r=n.find(t=>t.id===e);if(!r||ub(r)!==`files`)return;let i=db(r),a=Un.current?.defaultView??Ce,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||Se.iconSize,gridSize:r.view?.gridSize||a.gridSize||Se.gridSize,sort:r.view?.sort??Se.sort,sortDescending:r.view?.sortDescending??Se.sortDescending,...t};Xn(e,()=>({view:o})),Dr.current!==null&&window.clearTimeout(Dr.current),Dr.current=window.setTimeout(()=>{Dr.current=null,je(i,o)},250)},[Xn]),Zr=(0,I.useCallback)(e=>{Xr(fb(Hn.current),e)},[Xr]),Qr=(0,I.useCallback)(e=>{let t=Un.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Ce,columns:e}};Fe(n),at(n)},[]),$r=(0,I.useCallback)(e=>{let t=Un.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Ce,showImages:e}};Fe(n),at(n)},[]),ei=(0,I.useCallback)(e=>{let t=Un.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Ce,imageStripHeight:e}};Fe(n),at(n)},[]),ti=(0,I.useCallback)((e,t,n,r)=>{let i=Hn.current.tabs.find(t=>t.id===e);if(!i||ub(i)!==`files`||!i.listing)return;let a=db(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Xn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),R(a,t,n,r)},[Xn]),ni=(0,I.useCallback)((e,t)=>{let n=Hn.current.tabs.find(t=>t.id===e);if(!n)return;let r=mb(n,Un.current?.defaultView??Ce);Xr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Xr]),ri=(0,I.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),ii=(0,I.useCallback)(()=>{Ne().then(m,()=>m([]))},[]),ai=(0,I.useCallback)(e=>{let t=(e.openTabs??[]).map(Fp).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...hb(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),a(r[i].id);for(let e of r)ub(e)===`files`&&tr(e.id,db(e),!0);return!0},[tr]),oi=(0,I.useCallback)(e=>{let t=Gn.current;if(Gn.current=[],t.length===0)return;let n=t.filter(e=>!ab.has(e));for(let e of t)n.includes(e)||ob(e);if(n.length===0)return;let{tabs:r}=Hn.current;if(!e&&r.length===1&&r[0].fresh){nr(r[0].id,n[0]),ob(n[0]);for(let e of n.slice(1))ir(e),ob(e);return}let i=n.map(e=>{let t=ir(e);return ob(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[ir,nr]),si=(0,I.useCallback)(()=>{Xe().then(e=>{Fe(e),Ae(e.recentLimit);let t={...Ht,...e.shortcuts};ze(t),Wt(t.openInNewTab),He(e=>e+1),Wn.current||(Wn.current=!0,oi(e.restoreTabs&&ai(e)))},()=>{Ae(10),Wn.current=!0,oi(!1)})},[oi,ai]),ci=(0,I.useCallback)(()=>{Ve().then(L,()=>L([]))},[]),li=(0,I.useCallback)(()=>{Pe().then(_,()=>_([]))},[]),Y=t.filter(e=>!e.hidden),ui=Y.map(lb),di=ui.join(`
`),fi=Math.max(Y.findIndex(e=>e.id===i),0);(0,I.useEffect)(()=>{if(!z?.restoreTabs)return;let e=setTimeout(()=>void ot(ui,fi),700);return()=>clearTimeout(e)},[di,fi,z?.restoreTabs]),(0,I.useEffect)(()=>{let{tabs:e,activeId:t}=Hn.current,n=e.find(e=>e.id===t);n&&n.fresh&&ub(n)===`files`&&tr(n.id,db(n),!0),ii(),si(),li(),P().then(y,()=>y(null))},[tr,ii,si,li]),(0,I.useEffect)(()=>{if(fe().then(ee,()=>ee(null)),l.available)return l.on(e=>{let t=e;t.type===`update.checked`&&t.data&&ee(t.data)})},[]),(0,I.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&c({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Aa(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Aa(n.data.error??e(`pairing_failed`))}})},[e]),(0,I.useEffect)(()=>{let e=setInterval(li,3e4);return()=>clearInterval(e)},[li]),(0,I.useEffect)(()=>{K===`home`&&(ci(),li())},[K,G.id,ci,li]),(0,I.useEffect)(()=>{if(!l.available)return;let e=l.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Hn.current,i=t.data.startup===!0;i&&ab.has(n)?ob(n):i&&!Wn.current?Gn.current.includes(n)||Gn.current.push(n):(i&&r.length===1&&r[0].fresh?nr(r[0].id,n):Pp(n)?nr(fb(Hn.current),n):ir(n),i&&ob(n))});return l.send({type:`app.ready`}),e},[nr,ir]),(0,I.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,I.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,I.useEffect)(()=>{let e=e=>{if(Yt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),wr();return}if(e.key===`BrowserForward`){e.preventDefault(),Tr();return}if(e.key===`Escape`&&O.open){e.preventDefault(),Mn();return}let t=Kt(e);if(t===V.closeTab)e.preventDefault(),lr(fb(Hn.current));else if(t===V.newTab)e.preventDefault(),ir();else if(t===V.reopenTab)e.preventDefault(),ur();else if(t===V.goBack)e.preventDefault(),wr();else if(t===V.goForward)e.preventDefault(),Tr();else if(t===V.goUp)e.preventDefault(),Er();else if(t===V.find)e.preventDefault(),K===`files`?Nn():Fn();else if(t===V.location)e.preventDefault(),Ge(e=>e+1);else if(t===V.home){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&dr(t)}else t===V.iconsView?(e.preventDefault(),K===`files`&&Zr({mode:`grid`})):t===V.detailsView?(e.preventDefault(),K===`files`&&Zr({mode:`list`})):t===V.nextTab?(e.preventDefault(),fr(1)):t===V.previousTab?(e.preventDefault(),fr(-1)):t===V.hidden||t===`alt+.`?(e.preventDefault(),qe().then(()=>{Je(e=>e+1),Or()})):t===V.undo?(e.preventDefault(),Jr(!0)):t===V.redo?(e.preventDefault(),Jr(!1)):t===V.splitView?(e.preventDefault(),pr()):K!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Bn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[V,K,O.open,lr,ur,ir,wr,Tr,Er,Nn,Fn,Mn,Bn,Zr,fr,dr,p,Or,Jr,pr]),(0,I.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),wr()):e.button===4&&(e.preventDefault(),Tr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[wr,Tr]);let pi=(0,I.useMemo)(()=>{let e=new Set;for(let n of t){if(ub(n)!==`files`)continue;let t=db(n);if(t&&!Rc(t)){if(C(t)){let n=_b(T(t));n&&e.add(n)}else e.add(t)}}return[...e]},[t]),gi=pi.join(`\0`);(0,I.useEffect)(()=>{l.available&&l.send({type:`fs.watch`,payload:{paths:pi,owner:`app`}})},[gi,i]);let bi=ub(yn)===`files`?db(yn):``;(0,I.useEffect)(()=>{l.available&&l.send({type:`fs.focus`,payload:{path:bi||null}})},[bi]),(0,I.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=Hn.current.tabs.filter(e=>ub(e)===`files`&&N(db(e),n)),i=Hn.current.tabs.filter(e=>{let t=db(e);return ub(e)===`files`&&t.length>0&&C(t)&&N(T(t),n)});if(r.length!==0||i.length!==0){sn(n);for(let e of i){let t=Hn.current.tabs.find(t=>t.id===e.id),r=t?db(t):``;t&&ub(t)===`files`&&!t.loading&&C(r)&&N(T(r),n)&&tr(e.id,r,!0)}r.length!==0&&Ee(n,!1,Sn).then(e=>{for(let t of r){let n=Hn.current.tabs.find(e=>e.id===t.id);n&&ub(n)===`files`&&N(db(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=Hn.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&ub(n)===`files`&&N(db(n),e.path)&&Xn(t.id,()=>({listing:e}))},300):Xn(t.id,()=>({listing:e})))}},()=>void 0)}})},[Sn,tr,Xn]);let Si=G.index>0,Ci=G.index<G.history.length-1,wi=(e,t)=>{let n=mb(e,bn),r=e.listing?.path??e.history[e.index]??``,i=C(r),a=i&&ne(r);return(0,J.jsx)(pl,{confirmDelete:z?.confirmDelete??!1,cutPaths:Jt,previewVideoAudio:z?.previewVideoAudio??!1,previewVideoAutoplay:z?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?tt:rt,onActivate:()=>st(t?`primary`:`secondary`),enableShortcuts:(!hn||(t?it===`primary`:it===`secondary`))&&(!i||a),error:e.error,find:e.id===yn.id?{...O,currentPath:jn<0?null:An[jn]}:void 0,selectMatchesToken:e.id===yn.id?M:0,imageStripHeight:En,listing:e.listing,loading:e.loading,onImageStripHeight:ei,readOnly:i&&!a||Rc(e.listing?.path??``),onOpen:(t,n)=>{n?ir(t):tr(e.id,t)},onOpenFile:(t,n)=>{Rc(t)?Uc(t).catch(e=>void Aa(gb(e))):ie(t)?z?.archiveHandler??!1?n?ir(t):tr(e.id,t):Te(t):C(t)?(async()=>{let e=await Oe(t,ye.current,yb(t));if(!e.path&&tn(e.error)){let n=T(t),r=Qt(n);r&&en(n);let i=await Ma(n,!!r);i&&($t(n,i),e=await Oe(t,ye.current,i))}e.path?Te(e.path):e.error&&Aa(e.error)})():Te(t)},onRefresh:()=>{let t=e.listing?.path;t&&ar(t)},onRename:or,onSelectionCountChange:t?br:xr,onSetTags:(t,n,r)=>ti(e.id,t,n,r),selectionMenuRequest:t?bt.primary:bt.secondary,onSort:t=>ni(e.id,t),onPaste:Ur,onClipboardChanged:()=>void Lr(),onTransfer:Kr,onAddToTray:e=>void Ar(e),onAddFavorite:e=>void Mr(e),onRemoveFavorite:e=>void Nr(e),favoritePaths:Ie,onExtractArchive:(e,t)=>void ji(e,t),openOnSingleClick:z?.openOnSingleClick??!1,pendingRename:Tt&&t===(it===`primary`)&&N(Tt.directory,e.listing?.path??``)?Tt.path:null,pendingRenameToken:Tt?.token??0,refreshToken:Ke,shortcuts:V,showCheckboxes:z?.showCheckboxes??!0,showImages:Tn,view:n})},Ti=O.open&&(0,J.jsx)(Ud,{current:jn,focusToken:oe,matchCase:O.matchCase,mode:O.mode,onClose:Mn,onMatchCase:()=>k(e=>({...e,matchCase:!e.matchCase})),onMode:()=>k(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Vn(1),onPrevious:()=>Vn(-1),onQuery:e=>k(t=>({...t,query:e})),onRegex:()=>k(e=>({...e,regex:!e.regex})),query:O.query,regex:O.regex,total:An.length,onSelectMatches:An.length>0?()=>ce(e=>e+1):void 0}),Ei=K===`files`&&C(fn),Oi=Ei&&ne(fn),ki=Ei&&G.listing?.archiveEncrypted===!0,Ai=async(t,n)=>{let r=T(t),i=await De(r,n,ye.current,yb(r));if(!i.ok&&tn(i.error)){let e=Qt(r);e&&en(r);let t=await Ma(r,!!e);t&&($t(r,t),i=await De(r,n,ye.current,t))}i.ok?(ar(n),on(),tr(G.id,n,!0)):Aa(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},ji=async(e,t)=>{let n=T(e),r=_b(n);if(!r)return;if(t===`choose`){let e=await Ta(r);e&&await Ai(n,e);return}let i=t===`named`;if(t===`auto`){let e=N(n,fn)?G.listing?.entries??[]:(await Ee(n,!1,!1,ye.current,yb(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${vb(n)}`:r;await Ai(n,o)},Mi=async e=>{Ei&&await ji(fn,e)},Ni=async()=>{Ei&&await ji(fn,`choose`)},Pi=(0,J.jsxs)(Eb,{children:[(0,J.jsx)(Db,{"data-shortcut":qt(V.goBack),disabled:!Si,onClick:e=>{G.index>0&&Gt(e)?ir(G.history[G.index-1]):wr()},title:e(`back`),type:`button`,children:(0,J.jsx)(vi,{})}),(0,J.jsx)(Db,{"data-shortcut":qt(V.goForward),disabled:!Ci,onClick:e=>{G.index<G.history.length-1&&Gt(e)?ir(G.history[G.index+1]):Tr()},title:e(`forward`),type:`button`,children:(0,J.jsx)(yi,{})}),(0,J.jsx)(Db,{"data-shortcut":qt(V.goUp),disabled:K!==`files`||!pn,onClick:e=>{pn&&(Gt(e)?ir(pn):dr(pn))},title:e(`up_one_level`),type:`button`,children:(0,J.jsx)(hi,{})}),(0,J.jsx)(Ip,{focusToken:We,icon:On,label:K===`files`?void 0:e(qy[K]),onContextMenu:K===`files`?(e,t,n)=>H({x:t,y:n,path:e}):void 0,onNavigate:dr,path:K===`files`?fn:q}),K===`files`&&(!Ei||Oi)&&(0,J.jsx)(Db,{onClick:e=>vr(e,fn,()=>void tr(G.id,fn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,J.jsx)(_i,{})}),(0,J.jsx)(Db,{"data-shortcut":qt(V.find),onClick:()=>K===`files`?Nn():Fn(),title:e(`search`),type:`button`,children:(0,J.jsx)(mi,{})}),ht.primary>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ab,{}),(0,J.jsx)(Db,{onClick:e=>Sr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,J.jsx)(xa,{})})]}),Ei&&(0,J.jsxs)(Ob,{children:[(0,J.jsx)(Ab,{}),ki&&(0,J.jsxs)(kb,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,J.jsx)(Sa,{size:12}),e(`encrypted`)]}),(0,J.jsx)(Db,{onClick:()=>void Ni(),onContextMenu:e=>{e.preventDefault(),dt({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,J.jsx)(Ri,{})}),(0,J.jsx)(xo,{icon:(0,J.jsx)(ua,{size:15}),onChange:e=>{let t=Number(e);ve(t),ye.current=t,Ei&&tr(G.id,fn,!0)},options:cb.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(cb.find(e=>e.value===String(F))?.label??`auto`)}`,value:String(F)})]})]}),Ii=le.open?{...le,index:me}:null;return(0,J.jsx)(Pn,{value:wn,children:(0,J.jsxs)(Sb,{$rounded:D,children:[(0,J.jsx)(rd,{settings:z,theme:B}),(0,J.jsx)(Sy,{activeId:G.id,onClose:lr,onNewTab:()=>ir(),onReorder:ri,onTransferToTab:Kr,onSelect:a,onViewChange:Zr,onColumns:Qr,onShowImages:$r,showImages:Tn,tasks:Dt,onClearTasks:qr,activityOpen:At,onActivityOpenChange:jt,trayCount:nn.length+It.length,trayVisible:Xt,onToggleTray:Gr,split:hn,canSplit:K===`files`,onToggleSplit:pr,details:Ye,canDetails:K===`files`||K===`recycle`||K===`gallery`,onToggleDetails:()=>Ze(e=>!e),currentFolder:K===`files`&&!Rc(fn)?fn:``,shortcuts:V,view:xn,tabs:t.filter(e=>!e.hidden).map(n=>{let r=ub(n),i=db(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?db(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?In(wn,i):void 0,archive:r===`files`&&C(i),split:!!a,title:r===`files`?Ln(wn,i,x(i)||e(`files`)):e(qy[r]),partner:a?{title:Ln(wn,o,x(o)||e(`files`)),place:In(wn,o)}:void 0}})}),(0,J.jsxs)(Cb,{children:[(0,J.jsx)(j_,{activeKind:K,currentPath:K===`files`?q:``,drives:h,historyVersion:Le,onNavigate:dr,onOpenView:cr,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:be,recentLimit:we,version:Be}),(0,J.jsxs)(wb,{children:[K!==`files`&&Pi,(0,J.jsxs)(Tb,{children:[K!==`files`&&le.open&&(0,J.jsx)(Ud,{current:me,focusToken:de,matchCase:le.matchCase,mode:le.mode,onClose:Rn,onMatchCase:()=>ue(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ue(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>zn(1),onPrevious:()=>zn(-1),onQuery:e=>ue(t=>({...t,query:e})),onRegex:()=>ue(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:le.query,regex:le.regex,total:ge,onSelectMatches:K===`gallery`||K===`recycle`?()=>ce(e=>e+1):void 0}),K===`files`?hn&&mn?(0,J.jsxs)(Mb,{ref:gr,children:[(0,J.jsxs)(Nb,{style:{flex:u},children:[(0,J.jsxs)(jb,{$active:it===`primary`,onPointerDown:()=>st(`primary`),children:[(0,J.jsx)(Db,{"data-shortcut":qt(V.goBack),disabled:!Si,onClick:e=>{let t=G.index-1;t<0||(Gt(e)?ir(G.history[t]):rr(G.id,G.history[t],t))},title:e(`back`),type:`button`,children:(0,J.jsx)(vi,{})}),(0,J.jsx)(Db,{"data-shortcut":qt(V.goForward),disabled:!Ci,onClick:e=>{let t=G.index+1;t>=G.history.length||(Gt(e)?ir(G.history[t]):rr(G.id,G.history[t],t))},title:e(`forward`),type:`button`,children:(0,J.jsx)(yi,{})}),(0,J.jsx)(Db,{"data-shortcut":qt(V.goUp),disabled:!pn,onClick:e=>{pn&&(Gt(e)?ir(pn):tr(G.id,pn))},title:e(`up_one_level`),type:`button`,children:(0,J.jsx)(hi,{})}),(0,J.jsx)(Ip,{focusToken:it===`primary`?We:void 0,onContextMenu:(e,t,n)=>H({x:t,y:n,path:e}),onNavigate:(e,t)=>t?ir(e):void tr(G.id,e),path:fn}),(0,J.jsx)(Db,{onClick:e=>vr(e,fn,()=>void tr(G.id,fn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,J.jsx)(_i,{})}),(0,J.jsx)(Db,{"data-shortcut":qt(V.find),onClick:Nn,title:e(`search`),type:`button`,children:(0,J.jsx)(mi,{})}),ht.primary>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ab,{}),(0,J.jsx)(Db,{onClick:e=>Sr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,J.jsx)(xa,{})})]})]}),wi(G,!0),it===`primary`&&Ti]}),(0,J.jsx)(Pb,{onDoubleClick:()=>d(.5),onPointerDown:_r,title:e(`drag_to_resize_double_click_to_reset`)}),(0,J.jsxs)(Nb,{$enter:!0,style:{flex:1-u},children:[(0,J.jsxs)(jb,{$active:it===`secondary`,onPointerDown:()=>st(`secondary`),children:[(0,J.jsx)(Db,{"data-shortcut":qt(V.goBack),disabled:mn.index<=0,onClick:e=>{let t=mn.index-1;t<0||(Gt(e)?ir(mn.history[t]):rr(mn.id,mn.history[t],t))},title:e(`back`),type:`button`,children:(0,J.jsx)(vi,{})}),(0,J.jsx)(Db,{"data-shortcut":qt(V.goForward),disabled:mn.index>=mn.history.length-1,onClick:e=>{let t=mn.index+1;t>=mn.history.length||(Gt(e)?ir(mn.history[t]):rr(mn.id,mn.history[t],t))},title:e(`forward`),type:`button`,children:(0,J.jsx)(yi,{})}),(0,J.jsx)(Db,{"data-shortcut":qt(V.goUp),disabled:!_n,onClick:e=>{_n&&(Gt(e)?ir(_n):tr(mn.id,_n))},title:e(`up_one_level`),type:`button`,children:(0,J.jsx)(hi,{})}),(0,J.jsx)(Ip,{focusToken:it===`secondary`?We:void 0,onContextMenu:(e,t,n)=>H({x:t,y:n,path:e}),onNavigate:(e,t)=>t?ir(e):void tr(mn.id,e),path:gn}),(0,J.jsx)(Db,{onClick:e=>vr(e,gn,()=>void tr(mn.id,gn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,J.jsx)(_i,{})}),(0,J.jsx)(Db,{"data-shortcut":qt(V.find),onClick:Nn,title:e(`search`),type:`button`,children:(0,J.jsx)(mi,{})}),ht.secondary>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ab,{}),(0,J.jsx)(Db,{onClick:e=>Sr(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,J.jsx)(xa,{})})]})]}),wi(mn,!1),it===`secondary`&&Ti]}),(0,J.jsx)(is,{info:hr,onWidth:mr,open:Ye,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,width:Qe})]}):(0,J.jsxs)(Ib,{children:[(0,J.jsxs)(Lb,{children:[Pi,(0,J.jsxs)(Fb,{children:[wi(G,!0),Ti]})]}),(0,J.jsx)(is,{info:et,onWidth:mr,open:Ye,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,width:Qe})]}):K===`home`?(0,J.jsx)(Ep,{drives:h,find:Ii,historyVersion:Le,onSearchMatches:_e,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:li,onHistoryChanged:()=>Re(e=>e+1),onAddToTray:e=>void Ar(e),onAddFavorite:e=>void Mr(e),onRemoveFavorite:e=>void Nr(e),favoritePaths:Ie,onExtractArchive:(e,t)=>void ji(e,t),settingsVersion:Be,theme:B,onOpen:dr,onLayoutChanged:si,onPlacesChanged:m,onRecentCleared:ci,places:p,recent:be,recentLimit:we,visibilityVersion:Ke}):K===`settings`?(0,J.jsx)(hh,{appInfo:v,find:Ii,focusSection:S,onSearchMatches:_e,onSettingsChanged:si}):K===`gallery`?(0,J.jsx)(__,{confirmDelete:z?.confirmDelete??!1,find:Ii,onSearchMatches:_e,openOnSingleClick:z?.openOnSingleClick??!1,onAddToTray:e=>void Ar(e),onAddFavorite:e=>void Mr(e),onRemoveFavorite:e=>void Nr(e),favoritePaths:Ie,onExtractArchive:(e,t)=>void ji(e,t),shortcuts:V,showCheckboxes:z?.showCheckboxes??!0,selectMatchesToken:M,showDetails:Ye,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,view:xn}):(0,J.jsx)($p,{find:Ii,onOpenLocation:dr,onShowDetails:()=>Ze(!0),platform:v?.platform,selectMatchesToken:M,showDetails:Ye,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1})]},K),(0,J.jsxs)(Hb,{children:[(0,J.jsx)(`span`,{children:K===`files`&&G.listing?bb(e,G.listing):``}),v?(0,J.jsxs)(Rb,{children:[(0,J.jsxs)(`span`,{children:[`v`,v.version,` · `,v.platform]}),v.debug&&(0,J.jsx)(Vb,{children:`debug`}),b?.available&&(0,J.jsxs)(zb,{onClick:()=>{te(`updates`),cr(`settings`)},title:e(`version_version_is_available`,{version:b.latest}),type:`button`,children:[(0,J.jsx)(Bb,{}),e(`update_available`)]})]}):(0,J.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,J.jsx)(cc,{clipboardItems:It,clipboardMove:Rt,currentDirectory:K===`files`?q:``,items:nn,onAdd:e=>void Ar(e),onClear:Pr,onClose:()=>Zt(!1),onCopyToClipboard:e=>void Rr(e),onPosition:Wr,onRemove:jr,onTransfer:Kr,position:ln,visible:Xt}),ct&&(0,J.jsx)(vo,{creationOnly:!0,directory:ct.directory,menu:{x:ct.x,y:ct.y,paths:[],background:!0},onClose:()=>lt(null),onCreateFile:e=>void Cr(e),onCreateFolder:e=>void Cr(null,e),shortcuts:V}),ft&&(0,J.jsx)(vo,{allowCompression:!0,directory:_b(ft.path)??ft.path,menu:{x:ft.x,y:ft.y,paths:[ft.path]},onAddToTray:e=>void Ar(e),onAddFavorite:e=>void Mr(e),onRemoveFavorite:e=>void Nr(e),favoritePaths:Ie,onExtractArchive:(e,t)=>void ji(e,t),onArchiveCreated:e=>{e&&ar(_b(ft.path)??ft.path)},onClose:()=>H(null),onCompressTo:(e,t)=>mt({paths:e,name:t}),onCopy:(e,t)=>void gt(e,t),onDelete:e=>void St(e,!1).then(()=>ar(_b(ft.path)??ft.path)),onOpen:(e,t)=>t?ir(e):void tr(G.id,e),onOpenFile:e=>void Te(e),onPaste:e=>void xt(e).then(t=>{t.ok&&ar(e)}),onRefresh:()=>ar(ft.path),shortcuts:V,target:{path:ft.path,isDirectory:!0}}),pt&&(0,J.jsx)(Po,{initialDirectory:_b(ft?.path??fn)??fn,initialName:pt.name,onCancel:()=>mt(null),onCompress:async e=>{let t=await zt(pt.paths,e);return!t.ok&&t.error&&Aa(t.error),t.ok}}),ut&&(0,J.jsx)(ao,{items:[{label:e(`extract_here`),onSelect:()=>void Mi(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Mi(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Mi(`auto`)}],onClose:()=>dt(null),x:ut.x,y:ut.y}),W&&(0,J.jsx)(cd,{action:W.prompt.action,delaySeconds:W.prompt.delaySeconds,hits:W.prompt.hits,onCancel:()=>{W.resolve(!1),an(null)},onConfirm:()=>{W.resolve(!0),an(null)},permanent:W.prompt.permanent},W.id),(0,J.jsx)(Ed,{}),(0,J.jsx)(Nd,{}),s&&(0,J.jsx)(Jy,{code:s.code,deviceName:s.deviceName,onAccept:()=>{Fc(s.requestId,!0),c(null)},onReject:()=>{Fc(s.requestId,!1),c(null)}}),(0,J.jsx)(Hy,{}),(0,J.jsx)(E,{})]})})}var Sb=v.div`
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
`,Cb=v.div`
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
`,wb=v.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Tb=v.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${eo}
`,Eb=v.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Db=v.button`
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
`,Ob=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,kb=v.span`
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
`,Ab=v.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,jb=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Mb=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Nb=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?ro:``}
`,Pb=v.div`
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
        ${io}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,Fb=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Ib=v.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Lb=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Rb=v.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,zb=v.button`
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
`,Bb=v.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Vb=v.span`
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
`,Hb=v.footer`
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
`;function Ub({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:s,showImages:c,theme:u,onDirectoryChange:d,onCancel:f,onSelect:p}){let m=o(),h=$c(`picker`),g=t===`file`,_=r??[],[v,y]=(0,I.useState)(e),[ee,S]=(0,I.useState)(null),[te,C]=(0,I.useState)(!0),[ne,T]=(0,I.useState)(null),[re,E]=(0,I.useState)(()=>new Set),[D,O]=(0,I.useState)(a??[]),[k,A]=(0,I.useState)([]);(0,I.useEffect)(()=>d?.(v),[v,d]);let[ie,j]=(0,I.useState)([]),[ae,oe]=(0,I.useState)([]),[se,M]=(0,I.useState)([]),[ce,N]=(0,I.useState)(``),[P,le]=(0,I.useState)(_.length===0),[ue,de]=(0,I.useState)(`files`),[fe,pe]=(0,I.useState)(0),[me,he]=(0,I.useState)(vn),[ge,_e]=(0,I.useState)(0),[F,ve]=(0,I.useState)(0),[ye,be]=(0,I.useState)(0),[xe,L]=(0,I.useState)(null),[we,Te]=(0,I.useState)(null),[De,Oe]=(0,I.useState)(0),[ke,Ae]=(0,I.useState)(null),[je,R]=(0,I.useState)(Ce.imageStripHeight);(0,I.useEffect)(()=>{Xe().then(Ae,()=>Ae(null))},[]),(0,I.useEffect)(()=>{a?O(a):Ne().then(O,()=>O([]))},[a]),(0,I.useEffect)(()=>{Pe().then(A,()=>A([])),Ve().then(j,()=>j([]))},[]),(0,I.useEffect)(()=>{let e=!0;return C(!0),T(null),E(new Set),N(g?``:x(v)),Ee(v||void 0,!1).then(t=>{e&&(S(t),y(t.path),N(g?``:x(t.path)),C(!1))},t=>{e&&(T(t instanceof Error?t.message:String(t)),C(!1))}),()=>{e=!1}},[v,fe,g]),(0,I.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),he(e=>({...e,open:!0})),_e(e=>e+1);return}if(e.key===`Escape`){me.open?(he(e=>({...e,open:!1,query:``})),ve(0)):f();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),z();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Fe();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),he(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),_e(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Je()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,I.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),z()):e.button===4&&(e.preventDefault(),Fe())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Me=e=>{let t=e.trim();t.length!==0&&w(t)!==w(v)&&(oe(e=>[...e,v]),M([]),de(`files`),y(t))},z=()=>{let e=ae.at(-1);e!==void 0&&(oe(e=>e.slice(0,-1)),M(e=>[v,...e]),y(e))},Fe=()=>{let e=se[0];e!==void 0&&(M(e=>e.slice(1)),oe(e=>[...e,v]),y(e))},B=ee?.path??v,Ie=ee?.parent??(v?b(v):null);(0,I.useEffect)(()=>{l.available&&B&&l.send({type:`fs.watch`,payload:{paths:[B],owner:`picker`}})},[B]),(0,I.useEffect)(()=>{if(l.available&&B)return l.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&w(t.data.path)===w(B)&&Ee(B,!1).then(e=>{S(e);let t=new Set(e.entries.map(e=>e.fullPath));E(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[B]);let Le=(ee?.entries??[]).filter(e=>e.isDirectory||g&&(P||_.length===0||_.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Re=ee?{...ee,entries:Le}:null,V=me.open&&me.query.length>0,ze=(0,I.useMemo)(()=>V?Le.filter(e=>Dn(e.name,me)).map(e=>e.fullPath):[],[V,Le,me]);(0,I.useEffect)(()=>{ve(0)},[me.query,me.matchCase,me.regex,ee?.path]);let Be=ze.length===0?-1:Math.min(F,ze.length-1),He=(0,I.useMemo)(()=>({...me,currentPath:Be>=0?ze[Be]:null}),[me,Be,ze]),Ue=ke?.defaultView??Ce,We=s??{mode:Ue.mode,iconSize:Ue.iconSize,gridSize:Ue.gridSize,sort:`name`,sortDescending:!1,columns:Ue.columns??[`type`,`size`,`modified`]},Ge=(c??Ue.showImages)&&We.mode===`list`,Ke=ce.trim(),qe=Ke.length>0?Gb(Ke)?Ke:Wb(B,Ke):null,Je=()=>{if(te||ne)return;let e=n?[...re]:[...re].slice(0,1);e.length>0?p(e):qe!==null&&Ke!==x(B)?p([qe]):!g&&B&&p([B])},Ye=(0,I.useCallback)(e=>{E(new Set(e)),N(e.length===1?x(e[0]):e.length===0&&!g?x(B):``)},[B,g]),Ze=e=>{ee?.entries.find(t=>t.fullPath===e)?.isDirectory?Me(e):g&&p([e])},Qe=e=>N(e),$e=async e=>{let t=xe;if(L(null),!t||!B)return;let n=e===null?await wt(B):await Ot(B,e);n.ok&&n.path!==null&&(he(e=>({...e,open:!1,query:``})),e!==null&&le(!0),pe(e=>e+1),window.setTimeout(()=>{Te(n.path),Oe(e=>e+1)},120))},et=()=>{he(e=>({...e,open:!0})),_e(e=>e+1)},tt=e=>{ve(t=>ze.length===0?0:(t+e+ze.length)%ze.length)},nt=e=>(0,J.jsxs)(tx,{children:[(0,J.jsxs)(nx,{children:[(0,J.jsx)(rx,{children:m(g?`file_name`:`folder_3`)}),(0,J.jsx)(ix,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Je())},spellCheck:!1,value:ce}),g&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(rx,{children:m(`files_of_type`)}),(0,J.jsx)(xo,{onChange:e=>le(e===`all`),options:[..._.length>0?[{value:`supported`,label:`${m(`supported_files`)} (${_.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${m(`all_files`)} (*.*)`}],value:P?`all`:`supported`})]})]}),(0,J.jsxs)(ax,{children:[(0,J.jsx)(ox,{onClick:f,type:`button`,children:m(`cancel`)}),(0,J.jsxs)(ox,{$primary:!0,disabled:te||ne!==null||g&&re.size===0&&Ke.length===0,onClick:Je,type:`button`,children:[(0,J.jsx)(Oi,{size:12}),m(g?`select_this_file`:`select_this_folder`)]})]})]}),rt=(0,J.jsxs)(qb,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,J.jsxs)(Jb,{children:[(0,J.jsxs)(Yb,{children:[(0,J.jsx)(di,{size:16}),m(g?`choose_a_file`:`choose_a_folder`)]}),(0,J.jsx)(Xb,{onClick:f,title:m(`cancel`),type:`button`,children:(0,J.jsx)(ki,{size:12})})]}),(0,J.jsxs)(Zb,{children:[(0,J.jsx)(j_,{activeKind:ue===`overview`?`home`:ue===`gallery`?`gallery`:`files`,currentPath:B,drives:k,hiddenViews:g?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:D.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Me(e),onOpenView:e=>{e===`home`?(E(new Set),N(g?``:x(B)),de(`overview`)):e===`gallery`&&g&&(E(new Set),N(``),de(`gallery`))},places:D,recent:ie,recentLimit:10}),(0,J.jsx)(Qb,{children:ue===`overview`?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ep,{drives:k,theme:u,historyVersion:0,homePath:D.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Me(e),onPick:g?e=>p([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Ye,places:D,readOnly:!0,recent:ie,recentLimit:10,visibilityVersion:0}),nt(N)]}):ue===`gallery`?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(__,{onPick:e=>p([e]),onSelectionChange:Ye,showCheckboxes:ke?.showCheckboxes??!0,view:{...Se,columns:[]}}),nt(N)]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)($b,{children:[(0,J.jsx)(ex,{disabled:ae.length===0,onClick:z,title:m(`back`),type:`button`,children:(0,J.jsx)(vi,{})}),(0,J.jsx)(ex,{disabled:se.length===0,onClick:Fe,title:m(`forward`),type:`button`,children:(0,J.jsx)(yi,{})}),(0,J.jsx)(ex,{disabled:!Ie,onClick:()=>Ie&&Me(Ie),title:m(`up_one_level`),type:`button`,children:(0,J.jsx)(hi,{})}),(0,J.jsx)(Ip,{onNavigate:Me,path:B}),(0,J.jsx)(ex,{onClick:e=>L({x:e.clientX,y:e.clientY}),title:m(`new_folder_or_file`),type:`button`,children:(0,J.jsx)(_i,{})}),(0,J.jsx)(ex,{onClick:et,title:m(`search`),type:`button`,children:(0,J.jsx)(mi,{})}),h.available&&(0,J.jsx)(ex,{onClick:e=>h.open(e.clientX,e.clientY),title:m(`selection_menu`),type:`button`,children:(0,J.jsx)(xa,{})})]}),me.open&&(0,J.jsx)(Ud,{current:Be,focusToken:ge,matchCase:me.matchCase,mode:me.mode,onClose:()=>{he(e=>({...e,open:!1,query:``})),ve(0)},onMatchCase:()=>he(e=>({...e,matchCase:!e.matchCase})),onMode:()=>he(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>tt(1),onPrevious:()=>tt(-1),onQuery:e=>he(t=>({...t,query:e})),onRegex:()=>he(e=>({...e,regex:!e.regex})),query:me.query,regex:me.regex,total:ze.length,onSelectMatches:()=>be(e=>e+1)}),(0,J.jsx)(pl,{allowBackgroundMenu:!0,confirmDelete:ke?.confirmDelete??!1,enableShortcuts:!0,error:ne,find:He,selectMatchesToken:ye,imageStripHeight:je,loading:te,listing:Re,onImageStripHeight:R,onOpen:Ze,onOpenFile:Ze,onRefresh:()=>pe(e=>e+1),onSelectionChange:Ye,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:ke?.openOnSingleClick??!1,refreshToken:fe,pendingRename:we,pendingRenameToken:De,showCheckboxes:ke?.showCheckboxes??!0,showDetails:!1,showImages:Ge,singleSelect:!n,view:We}),nt(Qe)]})})]}),xe&&(0,J.jsx)(vo,{creationOnly:!0,directory:B,menu:{x:xe.x,y:xe.y,paths:[],background:!0},onClose:()=>L(null),onCreateFile:g?e=>void $e(e):void 0,onCreateFolder:()=>void $e(null),shortcuts:Ht})]});return i?rt:(0,Ha.createPortal)((0,J.jsx)(Kb,{onPointerDown:e=>{e.target===e.currentTarget&&f()},children:rt}),document.body)}function Wb(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Gb(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Kb=v.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${ro}
`,qb=v.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Ua}
    ${({$inline:e})=>e?``:Qa}
`,Jb=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Yb=v.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Xb=v.button`
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
`,Zb=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Qb=v.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,$b=v.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,ex=v.button`
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
`,tx=v.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,nx=v.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,rx=v.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,ix=v.input`
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
`,ax=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,ox=v.button`
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
`;function sx({mode:e,save:t=!1,multiple:n,extensions:i,initial:a,initialName:s=``,defaultExtension:c=``}){let d=o(),p=u(),[m,h]=(0,I.useState)(null),[_,v]=(0,I.useState)(a),[y,b]=(0,I.useState)(s),[x,ee]=(0,I.useState)(null),S=f(g(m?.themeMode)),[te,C]=(0,I.useState)({}),[w,ne]=(0,I.useState)(null),[T,re]=(0,I.useState)(null),[D,O]=(0,I.useState)(null),k=(0,I.useRef)(0);(0,I.useEffect)(()=>{l.send({type:`app.ready`})},[]),(0,I.useEffect)(()=>(xe(e=>new Promise(t=>{O({id:++k.current,prompt:e,resolve:t})})),()=>xe(null)),[]),(0,I.useEffect)(()=>{Xe().then(h,()=>void 0)},[]),(0,I.useEffect)(()=>{r(m?.accentColor,m?.secondaryColor,S)},[m?.accentColor,m?.secondaryColor,S]);let A=m?.defaultView??Ce,ie={mode:te.mode??A.mode,iconSize:te.iconSize??A.iconSize,gridSize:te.gridSize??A.gridSize,sort:`name`,sortDescending:!1,columns:w??A.columns??[`type`,`size`,`modified`]},j=e=>C(t=>({...t,...e})),ae=async()=>{let e=y.trim();if(e.length===0||e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){await Aa(d(`the_file_name_is_not_valid`));return}let t=c.length>0&&!/\.[^.]*$/.test(e)?c.startsWith(`.`)?c:`.${c}`:``,n=_.includes(`\\`)?`\\`:`/`,r=/[\\/]$/.test(_)?`${_}${e}${t}`:`${_}${n}${e}${t}`;await U([r]).then(e=>e[0]?.exists??!1,()=>!1)?ee(r):l.send({type:`pick.submit`,payload:{paths:[r]}})};return(0,J.jsxs)(cx,{children:[(0,J.jsxs)(lx,{children:[(0,J.jsx)(ux,{children:(0,J.jsx)(Mi,{size:17})}),(0,J.jsx)(dx,{...p,children:d(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,J.jsx)(ay,{onChange:j,onColumns:ne,onShowImages:re,showImages:T??A.showImages,view:ie}),(0,J.jsx)(fx,{children:(0,J.jsx)(px,{onClick:()=>l.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:d(`cancel`),type:`button`,children:(0,J.jsx)(ki,{size:12})})})]}),(0,J.jsx)(mx,{children:(0,J.jsx)(Ub,{extensions:i,initial:a,inline:!0,mode:e,multiple:n,onCancel:()=>l.send({type:`pick.cancel`}),onDirectoryChange:v,onSelect:e=>l.send({type:`pick.submit`,payload:{paths:e}}),showImages:T??A.showImages,fileView:ie,theme:S})}),t&&(0,J.jsxs)(hx,{children:[(0,J.jsx)(gx,{"aria-label":d(`file_name`),autoFocus:!0,onChange:e=>b(e.target.value),onKeyDown:e=>{e.key===`Enter`&&ae()},placeholder:d(`file_name`),spellCheck:!1,value:y}),(0,J.jsx)(_x,{onClick:()=>void ae(),type:`button`,children:d(`save_as`)})]}),D&&(0,J.jsx)(cd,{action:D.prompt.action,delaySeconds:D.prompt.delaySeconds,hits:D.prompt.hits,onCancel:()=>{D.resolve(!1),O(null)},onConfirm:()=>{D.resolve(!0),O(null)},permanent:D.prompt.permanent},D.id),(0,J.jsx)(Ed,{}),(0,J.jsx)(qo,{confirmLabel:d(`overwrite`),message:d(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>ee(null),onConfirm:()=>{let e=x;ee(null),e&&l.send({type:`pick.submit`,payload:{paths:[e]}})},open:x!==null,title:d(`overwrite`)}),(0,J.jsx)(E,{})]})}var cx=v.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,lx=v.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,ux=v.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,dx=v.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fx=v.div`
    display: flex;
    flex-shrink: 0;
`,px=v.button`
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
`,mx=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,hx=v.footer`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    padding: 10px 12px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.96);
`,gx=v.input`
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

    &:focus {
        border-color: var(--border-color-focus);
        outline: 0;
    }
`,_x=v.button`
    height: 32px;
    padding: 0 16px;
    border: 0;
    border-radius: var(--radius-md);
    background: var(--accent-gradient);
    color: #fff;
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`;document.documentElement.dataset.theme=i()?`dark`:`light`;var vx=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,vx),window.addEventListener(`pagehide`,Gn);var yx=document.getElementById(`root`),bx=new URLSearchParams(window.location.search),xx=bx.get(`picker`),Sx=bx.get(`filter`)??``;yx&&(Vn(),(0,ye.createRoot)(yx).render((0,J.jsx)(I.StrictMode,{children:(0,J.jsx)(d,{children:xx===`folder`||xx===`file`||xx===`save`?(0,J.jsx)(sx,{defaultExtension:bx.get(`ext`)??``,extensions:Sx?Sx.split(`;`).filter(Boolean):[],initial:bx.get(`initial`)??``,initialName:bx.get(`name`)??``,mode:xx===`folder`?`folder`:`file`,multiple:bx.get(`multiple`)===`1`,save:xx===`save`}):(0,J.jsx)(xb,{})})})));