import{A as e,C as t,E as n,M as r,N as i,O as a,S as o,T as s,_ as c,b as l,c as u,d,f,g as p,h as m,i as h,j as g,k as _,l as v,m as y,n as b,o as x,p as S,r as ee,s as te,t as ne,u as re,v as C,w,x as ie,y as T}from"./theme-BMX5jShW.js";var E=i(r(),1),D=e(),O=15e3,ae=new Set,k=new Map,oe=!1,A=0,j;function M(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function N(){oe||(oe=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>se(e)))}function se(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?k.get(n):void 0;n&&r&&(k.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),ae.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function ce(){if(j!==void 0)return;let e=()=>{if(!M())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),j=setInterval(e,5e3)}var P={get available(){return M()},send(e){M()?(N(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&ce()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=O){if(!M())return Promise.reject(Error(`Native bridge is not available.`));N();let r=`req-${++A}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{k.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);k.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return N(),ae.add(e),()=>ae.delete(e)}},F=s();function le(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function ue(e){return P.available?await P.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var de=(0,E.createContext)(le({})),I=(0,E.createContext)(`en`);function L(){return(0,E.useContext)(de)}var R=({children:e})=>{let[t,n]=(0,E.useState)(()=>le({})),[r,i]=(0,E.useState)(`en`);return(0,E.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await ue();if(e)return;n(()=>le(t.strings)),i(t.locale)}catch{}};t();let r=P.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,E.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,F.jsx)(de.Provider,{value:t,children:(0,F.jsx)(I.Provider,{value:r,children:e})})},fe=e=>P.send({type:e});function pe(){let[e,t]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{if(P.available)return P.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>fe(`window.minimize`),toggleMaximize:()=>fe(`window.toggleMaximize`),close:()=>fe(`window.close`)}}function me(){return{onMouseDown:()=>fe(`window.drag`),onDoubleClick:()=>fe(`window.toggleMaximize`)}}function he(){let[e,t]=(0,E.useState)(!1),{maximized:n}=pe();return(0,E.useEffect)(()=>{if(!P.available)return;let e=!1;return P.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,E.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var z=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function ge(){return(0,F.jsx)(F.Fragment,{children:z.map(([e,t])=>(0,F.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),P.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var _e=null;function ve(e){_e=e}function B(e){return _e?_e(e):Promise.resolve(!1)}var V={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},ye={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function be(e,t){return P.available?await P.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function xe(e){return P.available?(await P.request(`fs.open`,{path:e})).ok:!1}async function Se(e,t=!0,n=!1,r=0,i){return await P.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function Ce(e,t,n=0,r){return await P.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function we(e,t=0,n){return await P.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Te(e){P.available&&e.length!==0&&await P.request(`fs.archive.release`,{paths:e})}async function Ee(e){return P.available?await P.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function De(e,t){return P.available?(await P.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Oe(e,t,n,r){return P.available?(await P.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function ke(e,t=!1){return P.available?await P.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ae(){return(await P.request(`fs.places`)).places}async function je(){return(await P.request(`fs.drives`)).drives}async function Me(e=!1){return(await P.request(`fs.recycle`,{includeOrphans:e})).entries}async function Ne(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await B({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await P.request(e,{...t,confirm:r.token})}return r}async function H(e=!1){let t=await P.request(`fs.recycle.empty`,{includeOrphans:e});await Ne(`fs.recycle.empty`,{includeOrphans:e},t)}async function Pe(e){return!P.available||e.length===0?{ok:!1,done:0}:await P.request(`fs.recycle.restoreMany`,{ids:e})}async function Fe(e){if(!P.available||e.length===0)return{ok:!1,done:0};let t=await P.request(`fs.recycle.deleteMany`,{ids:e}),n=await Ne(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ie(e){P.available&&e&&await P.request(`fs.recycle.properties`,{id:e})}async function Le(){if(!P.available)return{entries:[],cancelled:!0,failed:!1};let e=await P.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Re(){return P.available?(await P.request(`fs.recycle.admin.purge`)).ok:!1}async function ze(e=0,t=150,n=!1){return P.available?await P.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Be(){return P.available?(await P.request(`fs.recent`)).entries:[]}async function Ve(){return P.available?(await P.request(`fs.frequent`)).entries:[]}async function He(e){P.available&&await P.request(`fs.frequent.record`,{path:e})}async function Ue(){await P.request(`fs.recent.clear`)}async function We(){await P.request(`fs.frequent.clear`)}async function Ge(){return await P.request(`fs.visibility`)}async function Ke(){return await P.request(`fs.hidden.toggle`)}async function qe(){return P.available?await P.request(`fs.index.tasks`):{count:0,directories:[]}}var Je={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,trayAutoShow:!0,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Ye(){if(!P.available)return Je;let e=await P.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,trayAutoShow:e?.trayAutoShow??!0,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function Xe(){return P.available?(await P.request(`app.protection.defaults`)).paths??[]:[]}var Ze={registered:!1,pathMatches:!1,registeredPath:null},Qe={registered:!1,pathMatches:!1,registeredPath:null};async function $e(){return P.available?await P.request(`app.defaultManager.status`):Qe}async function et(e){return P.available?await P.request(`app.defaultManager.set`,{enabled:e}):Qe}async function tt(){return P.available?await P.request(`app.archive.status`):Ze}async function nt(){return P.available?await P.request(`app.archive.register`):Ze}async function rt(){return P.available?await P.request(`app.archive.unregister`):Ze}async function it(e){if(!P.available)return e;let t=await P.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,trayAutoShow:t?.trayAutoShow??e.trayAutoShow,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function at(e,t){P.available&&await P.request(`app.tabs.set`,{tabs:e,active:t})}async function ot(e,t,n){return P.available?(await P.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var U={managed:0,private:0,workingSet:0,available:0};async function st(){return P.available?await P.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1,logDirectory:``,debug:!0}}async function ct(){return P.available?await P.request(`update.status`)??null:null}async function lt(){return P.available?await P.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function ut(e,t,n=3e4){let r=await P.request(e,t,n);if(!r.ok)throw Error(r.error??`The update action failed.`)}async function dt(){P.available&&await ut(`update.openRelease`)}async function W(){P.available&&await ut(`update.openLogs`)}async function ft(){return P.available?await P.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function pt(){P.available&&await ut(`update.cancel`)}async function mt(){return P.available?await P.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function ht(e){return P.on(t=>{t.type===`update.progress`&&e(t.data)})}function gt(e){return P.on(t=>{t.type===`update.changelog`&&e(t.data.text)})}async function _t(e){return!P.available||!e?!1:(await P.request(`app.openUrl`,{url:e})).ok}async function vt(){return P.available?await P.request(`app.memory`):U}async function yt(){return P.available?await P.request(`app.memory.trim`):U}async function bt(){return P.available?(await P.request(`app.scheme`)).registered:!1}async function xt(e){return P.available?(await P.request(`app.scheme.set`,{enabled:e})).registered:!1}var St={supported:!1,mode:`none`,active:!1,error:null};async function Ct(){return P.available?await P.request(`app.startup`):St}async function wt(e){return P.available?await P.request(`app.startup.set`,{mode:e}):St}async function Tt(e,t=!1){return!P.available||e.length===0?!1:(await P.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Et(){return P.available?(await P.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function Dt(){return P.available?await P.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function Ot(e,t,n){return!P.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await P.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function kt(e){return!P.available||e.length===0?[]:(await P.request(`fs.paths.info`,{paths:e})).entries}async function At(e){if(!P.available)return{ok:!1,created:[]};let t=await P.request(`fs.clipboard.paste`,{directory:e});return{ok:t.ok,created:t.created??[]}}async function jt(e,t=!1){if(!P.available||e.length===0)return{ok:!1,error:null};let n=await P.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await B({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await P.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function Mt(e,t){return P.available?await P.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Nt(e,t=!1){return P.available?await P.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Pt(e){return P.available?(await P.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Ft(e,t){return P.available?await P.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function It(e,t,n){return P.available?await P.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Lt(e,t){return P.available?await P.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Rt(e){P.available&&e.length!==0&&await P.request(`fs.operation.properties`,{paths:e})}async function zt(e){P.available&&await P.request(`fs.operation.openWith`,{path:e})}async function Bt(e){P.available&&await P.request(`fs.operation.terminal`,{path:e})}async function Vt(e){return P.available?await P.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Ht(e,t){return P.available?(await P.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Ut(){return P.available?await P.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Wt(){return P.available?await P.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Gt(e){P.available&&await P.request(`fs.operation.showInExplorer`,{path:e})}async function Kt(e){return!P.available||e.length===0?{verbs:[],safe:!0}:await P.request(`shell.verbs`,{paths:e})}async function qt(e,t,n,r){P.available&&e.length!==0&&await P.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Jt(e,t){return!P.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await P.request(`fs.operation.compress`,{...t,paths:e})}async function G(){return P.available?(await P.request(`app.tasks`)).tasks:[]}async function Yt(){P.available&&await P.request(`app.tasks.clear`)}var Xt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},K=Xt.openInNewTab;function Zt(e){K=e.trim()||Xt.openInNewTab}function Qt(e){let t=K.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function $t(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function en(e){return e.split(`+`).filter(Boolean).map(e=>q[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var q={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function tn(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var nn=new Map;function rn(e){return l(p(e)?u(e):e)}function an(e){return nn.get(rn(e))}function on(e,t){nn.set(rn(e),t)}function sn(e){nn.delete(rn(e))}function cn(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var ln=new Map,un=new Map,dn=new Set,J=0;function fn(){ln.clear(),un.clear(),J+=1,dn.forEach(e=>e())}function pn(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...ln.keys()])e.toLowerCase().includes(t)&&(ln.delete(e),n=!0);n&&(J+=1,dn.forEach(e=>e()))}function mn(){let[e,t]=(0,E.useState)(J);return(0,E.useEffect)(()=>{let e=()=>t(J);return dn.add(e),()=>{dn.delete(e)}},[]),e}var hn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function gn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return hn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function _n(e,t,n=!1){let r=mn(),i=e===null?``:gn(e,t,n),[a,o]=(0,E.useState)(()=>ln.get(i)??null);return(0,E.useEffect)(()=>{if(e===null){o(null);return}if(!P.available)return;if(ln.has(i)){o(ln.get(i)??null);return}let r=!0;return P.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?ln.set(i,e.dataUrl):ln.delete(i),r&&o(e.dataUrl)},()=>{ln.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function vn(e){let[t,n]=(0,E.useState)(e);return(0,E.useEffect)(()=>{if(!e){n(null);return}if(!p(e)){n(e);return}let t=!0;return we(e,0,an(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function yn(e){let t=mn(),[n,r]=(0,E.useState)(()=>e?un.get(e)??null:null);return(0,E.useEffect)(()=>{if(!e||!P.available){r(null);return}if(un.has(e)){r(un.get(e)??null);return}let t=!0;return P.request(`fs.iconFile`,{path:e}).then(n=>{un.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{un.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var bn=null,xn=null;function Sn(){return bn===null?P.available?(xn??=P.request(`app.thumbnails`).then(e=>(bn=e.base??``,bn),()=>(bn=``,``)),xn):Promise.resolve(``):Promise.resolve(bn)}function Cn(e,t=128,n=0){let[r,i]=(0,E.useState)(bn);return(0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Sn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${wn}`}var wn=2;function Tn(e,t=0,n=``){let[r,i]=(0,E.useState)(bn);if((0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Sn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function En(e,t=0){let[n,r]=(0,E.useState)(bn);return(0,E.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return Sn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var Dn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},On={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function kn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Mn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Fn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var An=`\0`,jn=``;function Mn(e){return e.query!==An&&(An=e.query,jn=e.query.toLowerCase()),jn}var Nn=`\0`,Pn=null;function Fn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Nn)return Pn;Nn=t;try{Pn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Pn=null}return Pn}function In(e,t){return kn(e,t)!==null}var Ln=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Rn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function zn(e){let t=Vn(e);for(let{kind:e}of Ln)if(Rn[e].has(t))return e;return null}function Bn(e){return zn(e)!==null}function Vn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Hn=(0,E.createContext)({places:{},useIcons:!1}),Un=Hn.Provider;function Wn(){return(0,E.useContext)(Hn)}function Gn(e,t){return e.places[l(t)]}function Kn(e,t,n){return Gn(e,t)?.name||n}var qn=new Map,Jn=new Map,Yn=0;function Xn(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&qn.set(e,t)}catch{}}function Zn(e){return P.available?qn.get(e)??null:localStorage.getItem(e)}function Qn(e,t){P.available?(qn.set(e,t),Jn.set(e,t),window.clearTimeout(Yn),Yn=window.setTimeout($n,200)):localStorage.setItem(e,t)}function $n(){if(Yn=0,Jn.size===0)return;let e=Object.fromEntries(Jn);Jn.clear(),P.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function er(){if(Jn.size===0)return;let e=Object.fromEntries(Jn);Jn.clear(),P.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function tr(e,t){let n=Zn(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function nr(e,t){Qn(e,String(t))}function rr(e){try{return JSON.parse(Zn(e)??`null`)}catch{return null}}function ir(e,t){Qn(e,JSON.stringify(t))}var ar=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,F.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,F.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),or=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),sr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M14 3v4h4`})]}),cr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,F.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,F.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),lr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,F.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),ur=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 19V5`}),(0,F.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),dr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,F.jsx)(`path`,{d:`M20 4v7h-7`})]}),fr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 5v14`}),(0,F.jsx)(`path`,{d:`M5 12h14`})]}),pr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M19 12H5`}),(0,F.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),mr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M5 12h14`}),(0,F.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),hr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,F.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),gr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,F.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),_r=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,F.jsx)(`path`,{d:`M12 12v8`})]}),vr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,F.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),yr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),br=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,F.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),xr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),Sr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 7h16`}),(0,F.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,F.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,F.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),Cr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),wr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),Tr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,F.jsxs)(`defs`,{children:[(0,F.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,F.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,F.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,F.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,F.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,F.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,F.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,F.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,F.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,F.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),Er=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),Dr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,F.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,F.jsx)(`path`,{d:`m13 5-2 14`})]}),Or=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,F.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,F.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),kr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,F.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Ar=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,F.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,F.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),jr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Mr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Nr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),Pr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,F.jsx)(`path`,{d:`M8.5 14h7`})]}),Fr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,F.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,F.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Ir=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Lr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Rr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),zr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Br=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Vr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,F.jsx)(`path`,{d:`m14 6 4 4`})]}),Hr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,F.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Ur=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,F.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Wr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 4v10`}),(0,F.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,F.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Gr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,F.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,F.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Kr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,F.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,F.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),qr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,F.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Jr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Yr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,F.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Xr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,F.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,F.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Zr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Qr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,F.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,F.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,F.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),$r=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,F.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),ei=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,F.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),ti=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,F.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,F.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),ni=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,F.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),ri=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,F.jsx)(`path`,{d:`M3.5 12h17`}),(0,F.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),ii=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),ai=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,F.jsx)(`path`,{d:`M8.5 10.5h7`})]}),oi=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,F.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,F.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),si=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,F.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),ci=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,F.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,F.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),li=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),ui=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 16V4`}),(0,F.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,F.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),di=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),fi=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,F.jsx)(`path`,{d:`M12 4v16`})]}),pi=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,F.jsx)(`path`,{d:`M15 4v16`})]}),mi=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,F.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,F.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,F.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),hi=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,F.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,F.jsx)(`path`,{d:`M12 14v2`})]}),gi=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,F.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),_i=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,F.jsx)(`circle`,{cx:12,cy:12,r:3})]}),vi=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,F.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,F.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,F.jsx)(`path`,{d:`m3 3 18 18`})]});function Y(e,t){return({size:n=t,...r})=>(0,F.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var yi=Y(ar,18),bi=Y(or,18),xi=Y(sr,18),Si=Y(cr,18),Ci=Y(lr,16),wi=Y(ur,16),Ti=Y(dr,16),Ei=Y(fr,16),Di=Y(pr,16),Oi=Y(mr,16),ki=Y(hr,12),Ai=Y(gr,18),ji=Y(_r,14),Mi=Y(vr,14),Ni=Y(yr,14),Pi=Y(br,18),Fi=Y(xr,18),Ii=Y(Sr,18),Li=Y(Cr,14),Ri=Y(wr,14),zi=Y(_i,14),Bi=Y(vi,14),Vi=Y(Tr,18),Hi=Y(Er,18),Ui=Y(Dr,18),Wi=Y(Or,18),Gi=Y(kr,18),Ki=Y(Ar,18),qi=Y(jr,18),Ji=Y(Mr,18),Yi=Y(Nr,18),Xi=Y(Pr,18),Zi=Y(Fr,18),Qi=Y(Ir,18),$i=Y(Lr,18),ea=Y(Rr,18),ta=Y(zr,18),na=Y(Br,18),ra=Y(Vr,16),ia=Y(Hr,18),aa=Y(Ur,18),oa=Y(Wr,18),sa=Y(Gr,18),ca=Y(Kr,18),la=Y(qr,18),ua=Y(Jr,18),da=Y(Yr,18),fa=Y(Xr,18),pa=Y(Zr,18),ma=Y(Qr,18),ha=Y($r,18),ga=Y(ei,18),_a=Y(ti,18),va=Y(ni,18),ya=Y(ri,18),ba=Y(ii,18),xa=Y(ai,14),Sa=Y(oi,14),Ca=Y(si,16),wa=Y(ci,16),Ta=Y(li,16),Ea=Y(ui,16),Da=Y(di,16),Oa=Y(fi,16),ka=Y(pi,16),Aa=Y(mi,16),ja=Y(hi,14),Ma=Y(gi,14);async function Na(e,t,n){return P.available?(await P.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function Pa(e){return Na(`folder`,[],e??``)}function Fa(e){return Na(`file`,e??[],``)}var Ia=null,La=null;function Ra(e){Ia=e}function za(e){return Ia?Ia(e):Promise.resolve()}function Ba(e){La=e}function Va(e,t=!1){return La?La(e,t):Promise.resolve(null)}var Ha=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],Ua=null,Wa=0,Ga=new Set;function Ka(){Wa+=1;for(let e of Ga)e()}function qa(e){return Ga.add(e),()=>Ga.delete(e)}function Ja(){return Wa}function Ya(e){Ua=e,Ka()}function Xa(){return(0,E.useSyncExternalStore)(qa,Ja,Ja),Ua}var Za=g(),Qa=a`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,$a=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,eo=n`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,to=n`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,no=n`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,ro=n`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,io=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,ao=n`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,oo=n`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,so=a`animation: ${$a} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,co=a`animation: ${eo} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,lo=a`animation: ${to} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;a`animation: ${no} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var uo=a`animation: ${ro} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,fo=a`animation: ${io} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,po=a`animation: ${ao} 140ms ease-out;`,mo=a`animation: ${oo} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function ho({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,E.useState)([]),s=(0,E.useRef)(void 0);if((0,E.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,E.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,F.jsx)(To,{},`group-rule-${i}`)),n.push((0,F.jsx)(wo,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,F.jsx)(To,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,F.jsxs)(xo,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,F.jsx)(So,{children:e.loading?(0,F.jsx)(Eo,{}):e.icon}),(0,F.jsx)(Co,{children:e.label}),a?(0,F.jsx)(ki,{size:12}):e.checked&&(0,F.jsx)(Li,{size:12})]},`${e.label}-${i}`))}),n};return(0,Za.createPortal)((0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(go,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(_o,{children:r.map((e,t)=>(0,F.jsxs)(vo,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,F.jsx)(yo,{children:e.icon}),(0,F.jsx)(bo,{children:e.label})]},`${e.label}-${t}`))}),(0,F.jsx)(To,{})]}),m(n,0)]}),a.map((e,t)=>(0,F.jsx)(go,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var go=_.div`
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
`,_o=_.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,vo=_.button`
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
`,yo=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,bo=_.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xo=_.button`
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
`,So=_.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Co=_.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wo=_.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,To=_.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Eo=_.span`
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
`;function Do({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:u,onDelete:d,onCopy:f,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:_=!1,onRefresh:y,onAddToTray:b,onAddFavorite:x,onRemoveFavorite:S,favoritePaths:ee,onExtractArchive:te,allowCompression:ne=!1,onCompressTo:re,onArchiveCreated:C}){let w=L(),ie=Xa(),T=p(t),[D,O]=(0,E.useState)({verbs:[],safe:!0,loading:!1}),[ae,k]=(0,E.useState)({recommended:[],other:[],loading:!1}),[oe,A]=(0,E.useState)(null),j=(0,E.useRef)(0),M=(0,E.useRef)(0),N=e?.paths.length===1,se=e?.background?t?[t]:[]:e?.paths??[],ce=e?.background?t||null:N&&n?.isDirectory?n.path:null;if((0,E.useEffect)(()=>{if(!e){O({verbs:[],safe:!0,loading:!1}),k({recommended:[],other:[],loading:!1});return}let t=++j.current;O({verbs:[],safe:!0,loading:se.length>0&&!T}),se.length>0&&!T&&Kt(se).then(e=>{j.current===t&&O({...e,loading:!1})},()=>{j.current===t&&O({verbs:[],safe:!0,loading:!1})});let r=++M.current;!T&&N&&n?(k({recommended:[],other:[],loading:!0}),Vt(n.path).then(e=>{M.current===r&&k({...e,loading:!1})},()=>{M.current===r&&k({recommended:[],other:[],loading:!1})})):k({recommended:[],other:[],loading:!1})},[e,N,n?.path,n?.isDirectory,se.length,T]),(0,E.useEffect)(()=>{if(!e||T||!ce){A(null);return}let t=!0;return Pt(ce).then(e=>{t&&A(e)},()=>{t&&A(null)}),()=>{t=!1}},[e,ce,T]),!e)return null;let P=[],le=[],ue=new Set((ee??[]).map(l)),de=e.background?t?[t]:[]:e.paths,I=de.length>0&&de.every(e=>ue.has(l(e))),R=()=>n?fe(n.path,n.isDirectory):`Archive`,fe=(e,t)=>{let n=v(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},pe=async(e,n=R())=>{let r=await Jt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?C?.(r.path,!0):za(r.error??w(`Could not create the archive.`))},me=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},he=async()=>{if(!ce||oe===null)return;let e=await Ft(ce,!oe);e.ok?(A(e.enabled),y?.()):za(e.error??w(`Could not change the case sensitivity.`))},z=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await It(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await It(e,t,`${a}\\${ko(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?y?.():za(o.error??w(`Could not create the link.`))},ge=async e=>{if(!n)return;let r=await Pa(t);r&&await z(e,n.path,r,v(n.path),e.endsWith(`-copy`))},_e=async e=>{let n=ie?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=l(a)===l(t);await z(n,r.path,t,v(r.path),i&&!o)}},ve=async()=>{let t=(await kt(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Ya({paths:t})},B=()=>{let e=ie?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:w(`Cancel selected link`),icon:(0,F.jsx)(Ri,{size:14}),onSelect:()=>Ya(null)},...t?[{label:w(`Hard link`),icon:(0,F.jsx)(xi,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard`)}]:[],{label:w(`Symbolic link`),icon:(0,F.jsx)(xi,{size:14}),separatorBefore:!t,onSelect:()=>void _e(`symbolic-file`)},...n?[{label:w(`Directory junction`),icon:(0,F.jsx)(bi,{size:14}),onSelect:()=>void _e(`junction`)},{label:w(`Smart copy`),icon:(0,F.jsx)(Ca,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,F.jsx)(Ca,{size:14}),onSelect:()=>void _e(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,F.jsx)(Ca,{size:14}),onSelect:()=>void _e(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,F.jsx)(Ca,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,F.jsx)(Ca,{size:14}),onSelect:()=>void _e(`symbolic-copy`)}]:[]]};if(e.background){if(h&&le.push({label:w(`New folder`),icon:(0,F.jsx)(Ei,{size:16}),shortcut:en(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:w(`Folder`),icon:(0,F.jsx)(bi,{size:14}),onSelect:()=>h(!1)}),T||e.push({label:w(`Case-sensitive folder`),icon:(0,F.jsx)(Sa,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...Ha.map((e,t)=>({label:`${w(e.label)} (${e.extension})`,icon:(0,F.jsx)(xi,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),P.push({label:w(`New`),icon:(0,F.jsx)(Ei,{size:14}),children:e,onSelect:()=>void 0})}if(T||P.push({label:w(`Create link`),icon:(0,F.jsx)(Ea,{size:14}),disabled:!ie,children:B(),onSelect:()=>void 0}),_)return(0,F.jsx)(ho,{items:P,onClose:a,quick:le,x:e.x,y:e.y});!T&&o&&P.push({label:w(`Open in new tab`),icon:(0,F.jsx)(Ei,{size:14}),onSelect:()=>o(t,!0)}),P.push({label:w(`Copy as path`),icon:(0,F.jsx)(Ca,{size:14}),onSelect:()=>void me([t])}),b&&P.push({label:w(`Add to file tray`),icon:(0,F.jsx)(va,{size:14}),onSelect:()=>b([t])}),!T&&(I?S:x)&&P.push({label:w(I?`Remove from favorites`:`Add to favorites`),icon:I?(0,F.jsx)(xa,{size:14}):(0,F.jsx)(ba,{size:14}),onSelect:()=>I?S?.([t]):x?.([t])}),!T&&oe!==null&&P.push({label:w(`Case-sensitive names`),icon:(0,F.jsx)(Sa,{size:14}),checked:oe,onSelect:()=>void he()}),!T&&ne&&(P.push({label:w(`Open in Terminal`),icon:(0,F.jsx)(ga,{size:14}),onSelect:()=>void Bt(t)}),P.push({label:w(`Show in Explorer`),icon:(0,F.jsx)(bi,{size:14}),separatorBefore:!0,onSelect:()=>void Gt(t)})),m&&le.push({label:w(`Paste`),icon:(0,F.jsx)(Ta,{size:16}),disabled:!i,shortcut:en(r.paste),onSelect:()=>m(t)}),T||le.push({label:w(`Properties`),icon:(0,F.jsx)(Ai,{size:16}),shortcut:en(r.properties),onSelect:()=>void Rt([t])})}else{if(o&&P.push({label:w(`Open`),icon:(0,F.jsx)(Oi,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&P.push({label:w(`Open in new tab`),icon:(0,F.jsx)(Ei,{size:14}),onSelect:()=>o(n.path,!0)}),m&&P.push({label:w(`Paste into folder`),icon:(0,F.jsx)(Ta,{size:14}),disabled:!i,onSelect:()=>m(n.path)}),T||P.push({label:w(`Open in Terminal`),icon:(0,F.jsx)(ga,{size:14}),onSelect:()=>void Bt(n.path)})),!T&&N&&n&&!n.isDirectory&&c(n.path)&&te&&P.push({label:w(`Extract archive`),icon:(0,F.jsx)(qi,{size:14}),separatorBefore:!0,children:[{label:w(`Extract here`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>te(n.path,`here`)},{label:w(`Extract to a folder named after the archive`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>te(n.path,`named`)},{label:w(`Auto extract to the current folder`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>te(n.path,`auto`)},{label:w(`Extract to…`),icon:(0,F.jsx)(bi,{size:14}),separatorBefore:!0,onSelect:()=>te(n.path,`choose`)}],onSelect:()=>void 0}),!T&&N&&n){let e=[];if(ae.loading)e.push({label:w(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ae.recommended)e.push({label:t.name,group:w(`Suggested apps`),icon:t.icon?(0,F.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,F.jsx)(Yi,{size:14}),onSelect:()=>void Ht(n.path,t.path).then(e=>{e||zt(n.path)})});for(let t of ae.other)e.push({label:t.name,group:w(`Other apps`),icon:t.icon?(0,F.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,F.jsx)(Yi,{size:14}),onSelect:()=>void Ht(n.path,t.path).then(e=>{e||zt(n.path)})})}e.push({label:w(`Choose another app…`),icon:(0,F.jsx)(Yi,{size:14}),separatorBefore:!0,onSelect:()=>void zt(n.path)}),P.push({label:w(`Open with`),icon:(0,F.jsx)(Yi,{size:14}),children:e,onSelect:()=>void zt(n.path)})}if(T||P.push({label:w(`Compress`),icon:(0,F.jsx)(qi,{size:14}),separatorBefore:!0,children:[{label:w(`Compress to ZIP`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>void pe(e.paths)},{label:w(`Compress to…`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>re?.(e.paths,R())}],onSelect:()=>void 0}),!T&&(e?.paths.length??0)>0){let e=[{label:w(`Select link source`),icon:(0,F.jsx)(Ea,{size:14}),onSelect:()=>void ve()},...ie?[{label:w(`Cancel selected link`),icon:(0,F.jsx)(Ri,{size:14}),onSelect:()=>Ya(null)}]:[],...N&&n?n.isDirectory?[{label:w(`Symbolic link`),icon:(0,F.jsx)(bi,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-folder`)},{label:w(`Directory junction`),icon:(0,F.jsx)(bi,{size:14}),onSelect:()=>void ge(`junction`)},{label:w(`Smart copy`),icon:(0,F.jsx)(Ca,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,F.jsx)(Ca,{size:14}),onSelect:()=>void ge(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,F.jsx)(Ca,{size:14}),onSelect:()=>void ge(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,F.jsx)(Ca,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,F.jsx)(Ca,{size:14}),onSelect:()=>void ge(`symbolic-copy`)}]:[{label:w(`Symbolic link`),icon:(0,F.jsx)(xi,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-file`)},{label:w(`Hard link`),icon:(0,F.jsx)(xi,{size:14}),onSelect:()=>void ge(`hard`)}]:[]];P.push({label:w(`Create link`),icon:(0,F.jsx)(Ea,{size:14}),children:e,onSelect:()=>void 0})}!T&&n?.isDirectory&&oe!==null&&P.push({label:w(`Case-sensitive names`),icon:(0,F.jsx)(Sa,{size:14}),checked:oe,onSelect:()=>void he()}),P.push({label:w(`Copy as path`),icon:(0,F.jsx)(Ca,{size:14}),onSelect:()=>void me(e.paths)}),b&&P.push({label:w(`Add to file tray`),icon:(0,F.jsx)(va,{size:14}),onSelect:()=>b(e.paths)}),!T&&(I?S:x)&&P.push({label:w(I?`Remove from favorites`:`Add to favorites`),icon:I?(0,F.jsx)(xa,{size:14}):(0,F.jsx)(ba,{size:14}),onSelect:()=>I?S?.(de):x?.(de)}),T||P.push({label:w(`Show in Explorer`),icon:(0,F.jsx)(bi,{size:14}),separatorBefore:!0,onSelect:()=>void Gt(de[0])}),f&&le.push({label:w(`Cut`),icon:(0,F.jsx)(wa,{size:16}),shortcut:en(r.cut),onSelect:()=>f(e.paths,!0)},{label:w(`Copy`),icon:(0,F.jsx)(Ca,{size:16}),shortcut:en(r.copy),onSelect:()=>f(e.paths,!1)}),N&&n&&u&&le.push({label:w(`Rename`),icon:(0,F.jsx)(ra,{size:16}),shortcut:en(r.rename),onSelect:()=>u(n.path)}),d&&le.push({label:w(`Delete`),icon:(0,F.jsx)(Ii,{size:16}),danger:!0,shortcut:en(r.delete),onSelect:()=>d(e.paths)}),T||le.push({label:w(`Properties`),icon:(0,F.jsx)(Ai,{size:16}),shortcut:en(r.properties),onSelect:()=>void Rt(e.paths)})}if(D.loading)P.push({label:w(`More actions`),icon:(0,F.jsx)(Yi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(D.verbs.length>0){let e={items:[],children:new Map};for(let t of D.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,F.jsx)(Oo,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void qt(se,D.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];P.push({label:w(D.safe?`More actions`:`More actions (extensions)`),icon:(0,F.jsx)(Yi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,F.jsx)(ho,{items:P,onClose:a,quick:le,x:e.x,y:e.y})}function Oo({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,F.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,F.jsx)(Oi,{size:14});case`document`:return(0,F.jsx)(ta,{size:14});case`cut`:return(0,F.jsx)(wa,{size:14});case`copy`:return(0,F.jsx)(Ca,{size:14});case`paste`:return(0,F.jsx)(Ta,{size:14});case`trash`:return(0,F.jsx)(Ii,{size:14});case`pencil`:return(0,F.jsx)(ra,{size:14});case`gear`:return(0,F.jsx)(Ai,{size:14});case`star`:return(0,F.jsx)(ua,{size:14});case`pin`:return(0,F.jsx)(ji,{size:14});case`executable`:return(0,F.jsx)(Yi,{size:14});case`share`:return(0,F.jsx)(Ea,{size:14});case`arrow`:return(0,F.jsx)(Oi,{size:14});default:return(0,F.jsx)(Vi,{size:14})}}function ko(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function Ao({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=L(),[l,u]=(0,E.useState)(null),d=(0,E.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,E.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(jo,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,F.jsx)(Mo,{children:f?.label??``}):(0,F.jsx)(No,{children:a}),a===void 0&&(0,F.jsx)(Po,{children:(0,F.jsx)(ki,{size:11})})]}),l&&(0,Za.createPortal)((0,F.jsx)(Fo,{"aria-label":c(`Options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,F.jsxs)(Io,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,F.jsx)(Lo,{children:t.label}),t.value===e&&(0,F.jsx)(Li,{size:11})]},t.value))}),document.body)]})}var jo=_.button`
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
`,Mo=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,No=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,Po=_.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Fo=_.div`
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
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${co}
`,Io=_.button`
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
`,Lo=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ro=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],zo=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],Bo=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],Vo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Ho=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function Uo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=L(),a=(0,E.useRef)(null),[o,s]=(0,E.useState)(e),[c,l]=(0,E.useState)(t),[u,d]=(0,E.useState)(`zip`),[f,p]=(0,E.useState)(`5`),[m,h]=(0,E.useState)(`default`),[g,_]=(0,E.useState)(`none`),[v,y]=(0,E.useState)(``),[b,x]=(0,E.useState)(`0`),[S,ee]=(0,E.useState)(!1);(0,E.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let te=Ro.find(e=>e.value===u)??Ro[0],ne=u===`zip`||u===`zipx`,re=g!==`none`,C=ne||u===`7z`,w=u===`zip`||u===`7z`,ie=async()=>{if(S||!c.trim()||!o||re&&v.length===0)return;ee(!0);let e=await r({directory:o,name:c.trim(),format:u,level:te.level?Number(f):0,method:ne?m:null,encryption:C?g:`none`,password:re?v:void 0,splitSize:w?Number(b):0});ee(!1),e&&n()};return(0,Za.createPortal)((0,F.jsx)(Wo,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,F.jsxs)(Go,{"aria-modal":`true`,role:`dialog`,children:[(0,F.jsx)(Ko,{children:i(`Compress to…`)}),(0,F.jsxs)(qo,{children:[(0,F.jsx)(Jo,{children:i(`Archive name`)}),(0,F.jsx)(Yo,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ie()}}),(0,F.jsx)(Xo,{children:te.extension})]}),(0,F.jsxs)(qo,{children:[(0,F.jsx)(Jo,{children:i(`Format`)}),(0,F.jsx)(Ao,{onChange:e=>d(e),options:Ro.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,F.jsxs)(qo,{children:[(0,F.jsx)(Jo,{children:i(`Method`)}),(0,F.jsx)(Ao,{disabled:!ne,onChange:h,options:zo.map(e=>({...e,label:i(e.label)})),value:ne?m:`default`,width:236,zIndex:3700})]}),(0,F.jsxs)(qo,{children:[(0,F.jsx)(Jo,{children:i(`Encryption`)}),(0,F.jsx)(Ao,{disabled:!C,onChange:e=>{_(e),e===`none`&&y(``)},options:Bo.map(e=>({...e,label:i(e.label)})),value:C?g:`none`,width:236,zIndex:3700})]}),re&&(0,F.jsxs)(qo,{children:[(0,F.jsx)(Jo,{children:i(`Password`)}),(0,F.jsx)(Yo,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,F.jsxs)(qo,{children:[(0,F.jsx)(Jo,{children:i(`Split volumes`)}),(0,F.jsx)(Ao,{disabled:!w,onChange:x,options:Vo.map(e=>({...e,label:i(e.label)})),value:w?b:`0`,width:236,zIndex:3700})]}),(0,F.jsxs)(qo,{children:[(0,F.jsx)(Jo,{children:i(`Compression level`)}),(0,F.jsx)(Ao,{disabled:!te.level,onChange:p,options:Ho.map(e=>({...e,label:i(e.label)})),value:te.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,F.jsxs)(qo,{$stack:!0,children:[(0,F.jsx)(Jo,{children:i(`Destination`)}),(0,F.jsxs)(Zo,{children:[(0,F.jsx)(Qo,{title:o,children:o}),(0,F.jsx)(es,{disabled:S,onClick:()=>void Pa(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,F.jsxs)($o,{children:[(0,F.jsx)(es,{disabled:S,onClick:n,type:`button`,children:i(`Cancel`)}),(0,F.jsx)(ts,{disabled:S||!c.trim()||re&&v.length===0,onClick:()=>void ie(),type:`button`,children:i(S?`Compressing…`:`Compress`)})]})]})}),document.body)}var Wo=_.div`
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
`,Go=_.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${so}
`,Ko=_.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,qo=_.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Jo=_.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Yo=_.input`
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
`,Xo=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Zo=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Qo=_.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$o=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,es=_.button`
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
`,ts=_(es)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function ns({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=L(),c=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Za.createPortal)((0,F.jsx)(rs,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,F.jsxs)(is,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(as,{children:t}),(0,F.jsx)(os,{children:n}),(0,F.jsxs)(ss,{children:[(0,F.jsx)(cs,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,F.jsx)(cs,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var rs=_.div`
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
`,is=_.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${so}
`,as=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,os=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,ss=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,cs=_.button`
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
`,ls=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),us=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),ds=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),fs=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function ps({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=L(),[l,u]=(0,E.useState)(!1),[d,f]=(0,E.useState)(!1),[p,m]=(0,E.useState)(!1),[h,g]=(0,E.useState)(0),[_,v]=(0,E.useState)(0),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(!1),[ee,te]=(0,E.useState)(!1),ne=(0,E.useRef)(null),re=(0,E.useRef)(null),C=(0,E.useRef)(null),w=(0,E.useRef)(null),[ie,T]=(0,E.useState)(()=>{let e=tr(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),D=e?.path??null,O=vn(D),ae=e?ms(e.name):``,k=!!e&&!e.isDirectory&&ls.has(ae),oe=!!e&&!e.isDirectory&&us.has(ae),A=!!e&&!e.isDirectory&&ds.has(ae),j=!!e&&!e.isDirectory&&fs.has(ae),M=!!e&&!e.isDirectory&&ae===`pdf`,N=Cn(k?O:null,512,e?.modified??0),se=Tn(A?O:null,e?.modified??0,ae),ce=Tn(k||oe?O:null,e?.modified??0,ae),P=En(M?O:null,e?.modified??0),le=_n(!k&&!oe&&!A&&!j&&!M?O:null,e?.isDirectory??!1);if((0,E.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),te(!1)},[D]),(0,E.useEffect)(()=>{if(!O||!j){b(null),S(!1);return}let e=!0;return S(!0),b(null),Ee(O).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`Could not read this file.`)}),S(!1))}),()=>{e=!1}},[O,j]),!e&&!s)return null;let ue=e=>{C.current={x:e.clientX,width:re.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},de=e=>{let t=C.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},I=e=>{C.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},R=e=>{w.current={y:e.clientY,height:ie},e.currentTarget.setPointerCapture(e.pointerId)},fe=e=>{let t=w.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);T(n),nr(`yafm.preview.media.height`,n)},pe=e=>{w.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,F.jsxs)(gs,{$open:r,children:[r&&(0,F.jsx)(_s,{onPointerDown:ue,onPointerMove:de,onPointerUp:I,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,F.jsx)(vs,{ref:re,style:{width:r?t:0},children:(0,F.jsxs)(ys,{children:[(0,F.jsx)(bi,{size:56}),(0,F.jsx)(`span`,{children:s})]})})]});let me=()=>{let e=ne.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,F.jsxs)(gs,{$open:r,children:[r&&(0,F.jsx)(_s,{onPointerDown:ue,onPointerMove:de,onPointerUp:I,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(vs,{ref:re,style:{width:r?t:0},children:[(0,F.jsx)(bs,{style:{height:ie},children:k&&ce&&!l?(0,F.jsxs)(Ss,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,F.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:me,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:N??void 0,preload:`metadata`,ref:ne,src:ce}),(0,F.jsx)(Cs,{$visible:!d,onClick:me,title:c(`Play`),type:`button`,children:(0,F.jsx)(Da,{size:28})}),(0,F.jsxs)(ws,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,F.jsxs)(Ts,{children:[(0,F.jsx)(`span`,{children:hs(_)}),(0,F.jsx)(`span`,{children:hs(h)})]}),(0,F.jsx)(Es,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=ne.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):oe&&ce?(0,F.jsx)(`audio`,{controls:!0,src:ce}):A&&se?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:se}):M&&P&&!ee?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>te(!0),src:P}):M?(0,F.jsx)(xi,{size:64}):j?(0,F.jsx)(Ds,{children:x||!y?(0,F.jsx)(ks,{children:c(`Loading…`)}):y.error?(0,F.jsx)(ks,{children:y.error}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Os,{children:y.text}),y.truncated&&(0,F.jsx)(ks,{children:c(`Showing the first 256 KB.`)})]})}):k&&N?(0,F.jsx)(`img`,{alt:``,src:N}):le?(0,F.jsx)(`img`,{alt:``,src:le}):e.isDirectory?(0,F.jsx)(bi,{size:64}):(0,F.jsx)(xi,{size:64})}),(0,F.jsx)(xs,{onDoubleClick:()=>{T(210),nr(`yafm.preview.media.height`,210)},onPointerDown:R,onPointerMove:fe,onPointerUp:pe,title:c(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(As,{children:[(0,F.jsx)(js,{title:e.path,children:e.name}),o&&(0,F.jsx)(Ms,{children:o}),(0,F.jsx)(Ns,{children:e.fields.map(e=>(0,F.jsxs)(Ps,{children:[(0,F.jsx)(Fs,{children:e.label}),(0,F.jsx)(Is,{title:e.value,children:e.value})]},e.label))})]})]})]})}function ms(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function hs(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var gs=_.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,_s=_.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,vs=_.aside`
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
`,ys=_.div`
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
`,bs=_.div`
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
`,xs=_.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Ss=_.div`
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
`,Cs=_.button`
    position: absolute;
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 50%;
    background: rgba(var(--bg-rgb), 0.62);
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
`,ws=_.div`
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
`,Ts=_.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,Es=_.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Ds=_.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,Os=_.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,ks=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,As=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,js=_.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Ms=_.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Ns=_.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,Ps=_.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Fs=_.span`
    color: var(--text-muted);
`,Is=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Ls=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Rs=[...Ls],zs={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},Bs={folder:e=>(0,F.jsx)(bi,{size:e}),home:e=>(0,F.jsx)(yi,{size:e}),desktop:e=>(0,F.jsx)(ia,{size:e}),documents:e=>(0,F.jsx)(aa,{size:e}),downloads:e=>(0,F.jsx)(oa,{size:e}),pictures:e=>(0,F.jsx)(sa,{size:e}),music:e=>(0,F.jsx)(ca,{size:e}),videos:e=>(0,F.jsx)(la,{size:e}),drive:e=>(0,F.jsx)(Si,{size:e}),image:e=>(0,F.jsx)(Wi,{size:e}),video:e=>(0,F.jsx)(Gi,{size:e}),audio:e=>(0,F.jsx)(Ki,{size:e}),text:e=>(0,F.jsx)(Hi,{size:e}),code:e=>(0,F.jsx)(Ui,{size:e}),clock:e=>(0,F.jsx)(Pi,{size:e}),star:e=>(0,F.jsx)(ua,{size:e}),file:e=>(0,F.jsx)(xi,{size:e}),archive:e=>(0,F.jsx)(qi,{size:e}),pdf:e=>(0,F.jsx)(Ji,{size:e}),executable:e=>(0,F.jsx)(Yi,{size:e}),font:e=>(0,F.jsx)(Xi,{size:e}),database:e=>(0,F.jsx)(Zi,{size:e}),config:e=>(0,F.jsx)(Qi,{size:e}),spreadsheet:e=>(0,F.jsx)($i,{size:e}),presentation:e=>(0,F.jsx)(ea,{size:e}),document:e=>(0,F.jsx)(ta,{size:e}),app:e=>(0,F.jsx)(Vi,{size:e}),gear:e=>(0,F.jsx)(Ai,{size:e}),pin:e=>(0,F.jsx)(ji,{size:e}),trash:e=>(0,F.jsx)(Ii,{size:e}),overview:e=>(0,F.jsx)(na,{size:e}),book:e=>(0,F.jsx)(da,{size:e}),briefcase:e=>(0,F.jsx)(fa,{size:e}),cloud:e=>(0,F.jsx)(pa,{size:e}),gamepad:e=>(0,F.jsx)(ma,{size:e}),camera:e=>(0,F.jsx)(ha,{size:e}),terminal:e=>(0,F.jsx)(ga,{size:e}),server:e=>(0,F.jsx)(_a,{size:e}),package:e=>(0,F.jsx)(va,{size:e}),globe:e=>(0,F.jsx)(ya,{size:e}),heart:e=>(0,F.jsx)(ba,{size:e}),share:e=>(0,F.jsx)(_a,{size:e}),favorites:e=>(0,F.jsx)(ba,{size:e})};function Vs(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Hs(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Ls)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Rs.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Vs(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${zs[n]??n}${Us(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Us(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Ws({panel:e,size:t=16}){let n=yn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,F.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Bs[e.icon]:void 0;if(r)return(0,F.jsx)(F.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,F.jsx)(bi,{size:t});case`recent`:return(0,F.jsx)(Pi,{size:t});case`frequent`:return(0,F.jsx)(ua,{size:t});case`drives`:return(0,F.jsx)(Si,{size:t});case`home`:return(0,F.jsx)(yi,{size:t});case`share`:return(0,F.jsx)(_a,{size:t});case`favorites`:return(0,F.jsx)(ba,{size:t});default:return(0,F.jsx)(bi,{size:t})}}function Gs({place:e,size:t=18}){let n=yn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,F.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Bs[e.icon]?(0,F.jsx)(F.Fragment,{children:Bs[e.icon](t)}):(0,F.jsx)(bi,{size:t})}var Ks=`#64748b`;function qs(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Js({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=L(),[c,l]=(0,E.useState)(``),[u,d]=(0,E.useState)(`#2dd4bf`),f=(0,E.useRef)(null);(0,E.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Za.createPortal)((0,F.jsxs)(Ys,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,F.jsxs)(Xs,{children:[(0,F.jsx)(`span`,{children:s(`Tags`)}),(0,F.jsx)(Zs,{onClick:o,title:s(`Close`),type:`button`,children:(0,F.jsx)(Ri,{size:11})})]}),(0,F.jsxs)(Qs,{children:[p.length===0&&(0,F.jsx)(nc,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,F.jsxs)($s,{children:[(0,F.jsx)(ec,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,F.jsxs)(tc,{$color:t,$ink:qs(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,F.jsx)(Li,{size:11}),(0,F.jsx)(`span`,{children:e})]})]},e)})]}),(0,F.jsxs)(rc,{children:[(0,F.jsx)(ec,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,F.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,F.jsx)(ic,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var Ys=_.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${so}
`,Xs=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Zs=_.button`
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
`,Qs=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,$s=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,ec=_.input`
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
`,tc=_.button`
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
`,nc=_.span`
    font-size: 11px;
    color: var(--text-muted);
`,rc=_.div`
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
`,ic=_.button`
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
`,ac={file:xi,folder:bi,text:Hi,code:Ui,image:Wi,video:Gi,audio:Ki,archive:qi,pdf:Ji,executable:Yi,font:Xi,database:Zi,config:Qi,spreadsheet:$i,presentation:ea,document:ta},oc={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function sc(e){let t=e.lastIndexOf(`.`);return t>0?oc[e.slice(t).toLowerCase()]??`file`:`file`}function cc({name:e,size:t}){let n=ac[e??`file`]??xi;return(0,F.jsx)(n,{size:t})}function lc({path:e,name:t,isDirectory:n,size:r=18}){let i=_n(e,n);return i?(0,F.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,F.jsx)(bi,{size:r}):(0,F.jsx)(cc,{name:sc(t),size:r})}var uc=`application/x-yafm-paths`,dc=[uc,`text/uri-list`];function fc(e){return e?.types.some(e=>dc.includes(e.toLowerCase()))??!1}function pc(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(uc);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(hc).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var mc=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function hc(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return mc?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function gc(e,t,n=!0){e.dataTransfer.setData(uc,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function _c({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=L(),[m,h]=(0,E.useState)(()=>new Set),[g,_]=(0,E.useState)(!1),v=(0,E.useRef)(null),y=(0,E.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),b=(0,E.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),x=(0,E.useRef)(null);if((0,E.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=x.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&fc(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=pc(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let S=new Set([...e,...t].map(e=>e.path)),ee=S.size>0&&[...S].every(e=>m.has(e)),te=S.size,ne=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},re=()=>{h(ee?new Set:S)},C=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},w=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},T=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},D=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},O=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},ae=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of b)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},k=(e,t)=>{let n=m.has(e.path);return(0,F.jsxs)(kc,{$checked:n,draggable:!0,onClick:()=>ne(e.path),onDragStart:r=>{gc(r,n&&m.size>0?[...new Set([...y,...b].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,F.jsx)(Ac,{$checked:n,onClick:t=>{t.stopPropagation(),ne(e.path)},type:`button`,children:n&&(0,F.jsx)(Li,{size:8})}),(0,F.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,F.jsxs)(jc,{children:[(0,F.jsx)(Mc,{children:e.name}),(0,F.jsx)(Nc,{children:ie(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},oe=e=>{fc(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,F.jsxs)(vc,{$dragging:g,"data-tray":`true`,ref:x,style:{left:i.x,top:i.y},onDragEnter:oe,onDragOver:oe,onDrop:e=>{let{paths:t}=pc(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,F.jsxs)(yc,{onPointerDown:C,onPointerMove:w,onPointerUp:T,children:[(0,F.jsxs)(bc,{children:[(0,F.jsx)(va,{size:13}),p(`Tray`),(0,F.jsx)(xc,{children:te})]}),(0,F.jsxs)(Sc,{onPointerDown:e=>e.stopPropagation(),children:[(0,F.jsx)(Cc,{onClick:re,title:p(ee?`Select none`:`Select all`),type:`button`,children:p(ee?`None`:`All`)}),(0,F.jsx)(Cc,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,F.jsx)(wc,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,F.jsx)(Ri,{size:10})})]})]}),(0,F.jsxs)(Tc,{children:[(0,F.jsxs)(Dc,{children:[p(`In this app`),(0,F.jsx)(xc,{children:e.length})]}),e.length===0&&(0,F.jsx)(Ec,{children:p(`Drag files or folders here`)}),e.map(e=>k(e,!0)),t.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Dc,{$clipboard:!0,children:[p(`Clipboard`),(0,F.jsx)(xc,{children:t.length}),n&&(0,F.jsx)(Oc,{children:p(`Cut`)})]}),t.map(e=>k(e,n))]})]}),(0,F.jsxs)(Pc,{children:[(0,F.jsx)(Fc,{$plain:!0,disabled:y.length===0,onClick:O,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,F.jsx)(Fc,{disabled:m.size===0||!a,onClick:ae,type:`button`,children:p(`Move here`)}),(0,F.jsx)(Fc,{$danger:!0,disabled:y.length===0,onClick:D,type:`button`,children:p(`Remove`)})]})]})}var vc=_.div`
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
`,yc=_.div`
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
`,bc=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,xc=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Sc=_.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Cc=_.button`
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
`,wc=_.button`
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
`,Tc=_.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,Ec=_.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Dc=_.div`
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
`,Oc=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,kc=_.div`
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
`,Ac=_.button`
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
`,jc=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Mc=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Nc=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Pc=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,Fc=_.button`
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
`,Ic={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function Lc(){return P.available?await P.request(`share.list`):Ic}async function Rc(e,t){return P.available?await P.request(`share.add`,{path:e,mode:t}):Ic}async function zc(e){return P.available?await P.request(`share.remove`,{id:e}):Ic}async function Bc(e,t){return P.available?await P.request(`share.mode`,{id:e,mode:t}):Ic}async function Vc(){return P.available?(await P.request(`share.peers`)).peers??[]:[]}async function Hc(){return P.available?(await P.request(`share.peers.refresh`)).peers??[]:[]}async function Uc(e,t){P.available&&await P.request(`share.pair.start`,{host:e,port:t})}async function Wc(e,t){P.available&&await P.request(`share.pair.respond`,{requestId:e,accept:t})}async function Gc(e,t){P.available&&await P.request(`share.port`,{mode:t,port:e})}var Kc=`yafm://share/`;function qc(e){return e.toLowerCase().startsWith(Kc)}function Jc(e){if(!qc(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Yc(e,t,n=``){let r=`${Kc}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Xc(e){let t=Jc(e);if(!t||!P.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await P.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Yc(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Yc(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Zc(e){let t=Jc(e);if(!t||!P.available)throw Error(`This shared file is only available in the desktop app.`);let n=await P.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Qc(e){await xe(await Zc(e))}var $c=new Map,el=new Set,tl=0;function nl(){tl+=1;for(let e of el)e()}function rl(e,t){t?$c.set(e,t):$c.delete(e),nl()}function il(e){return $c.has(e)}function al(e,t,n){$c.get(e)?.(t,n)}function ol(e){return el.add(e),()=>el.delete(e)}function sl(){return tl}function cl(e){return(0,E.useSyncExternalStore)(ol,sl,sl),{available:il(e),open:(t,n)=>al(e,t,n)}}function ll(e){return[...$c.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function ul(e){return(0,E.useSyncExternalStore)(ol,sl,sl),{available:ll(e).length>0,open:(t,n)=>{let r=ll(e).at(-1);r&&al(r,t,n)}}}var dl=60,fl=300,pl=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],ml=new Set,hl=`yafm.columnWidths`,gl=`yafm.reset-column-widths`,_l=64,vl=720,yl=160,bl=190,xl=120;function Sl({listing:e,loading:n,error:r,find:i=On,view:a,showImages:s,imageStripHeight:c=bl,onImageStripHeight:l,onSort:u,onSetTags:d,onOpen:p,onOpenFile:m,showCheckboxes:h=!0,openOnSingleClick:g=!1,shortcuts:_=Xt,enableShortcuts:b=!0,refreshToken:x=0,onRefresh:S,onRename:ee,onClipboardChanged:te,cutPaths:ne=ml,onTransfer:re,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ie,favoritePaths:T,onExtractArchive:D,onPaste:O,confirmDelete:ae=!1,previewVideoAudio:k=!1,previewVideoAutoplay:oe=!1,showDetails:A=!0,onPreviewInfo:j,onActivate:M,groupOf:N,onGridScroll:se,gridFooter:ce,allowBackgroundMenu:P=!0,readOnly:le=!1,onSelectionChange:ue,onSelectionCountChange:de,selectionMenuRequest:I,selectionMenuId:R,singleSelect:fe=!1,pendingRename:pe=null,pendingRenameToken:me=0,selectMatchesToken:he=0}){let z=L(),ge=Wn(),_e=(0,E.useRef)(null),ve=(0,E.useRef)(null),B=(0,E.useRef)(null),V=(0,E.useRef)(null),[ye,be]=(0,E.useState)(fl),[xe,Se]=(0,E.useState)({top:0,height:640}),Ce=(0,E.useRef)(null),we=(0,E.useRef)(null),[Te,Ee]=(0,E.useState)(null),[De,Oe]=(0,E.useState)(c),[ke,Ae]=(0,E.useState)(()=>new Set),[je,Me]=(0,E.useState)(()=>rr(hl)??{}),Ne=(0,E.useRef)(ke),H=(0,E.useRef)([]);Ne.current=ke,(0,E.useEffect)(()=>ue?.([...ke]),[ke,ue]),(0,E.useEffect)(()=>de?.(ke.size),[ke,de]),(0,E.useEffect)(()=>{let e=I;if(!e||e.token===Ie.current)return;Ie.current=e.token;let t=[...Ne.current];t.length!==0&&(Fe({x:e.x,y:e.y,paths:t,background:!1}),Et().then(Xe,()=>Xe(!1)))},[I]);let[Pe,Fe]=(0,E.useState)(null),Ie=(0,E.useRef)(0),[Le,Re]=(0,E.useState)(null),[ze,Be]=(0,E.useState)(null),[Ve,He]=(0,E.useState)(null),Ue=(0,E.useRef)(Ve);Ue.current=Ve;let We=(0,E.useRef)(0),Ge=(0,E.useRef)(M);Ge.current=M;let[Ke,qe]=(0,E.useState)(()=>{let e=tr(`yafm.preview.width`,320);return e>=220?e:320}),Je=(0,E.useCallback)(e=>{qe(e),nr(`yafm.preview.width`,e)},[]),[Ye,Xe]=(0,E.useState)(!1),Ze=(0,E.useCallback)((e,t)=>{let n=[...Ne.current];n.length!==0&&(Fe({x:e,y:t,paths:n,background:!1}),Et().then(Xe,()=>Xe(!1)))},[]);(0,E.useEffect)(()=>{if(R)return rl(R,ke.size>0?Ze:null),()=>rl(R,null)},[R,ke,Ze]),(0,E.useEffect)(()=>{Ae(new Set),He(null),Fe(null),we.current=null},[e?.path]),(0,E.useEffect)(()=>{Oe(c)},[c]),(0,E.useEffect)(()=>{Ae(new Set),He(null),we.current=null},[x]);let Qe=e=>{Ce.current={y:e.clientY,height:De},e.currentTarget.setPointerCapture(e.pointerId)},$e=e=>{let t=Ce.current;if(!t)return;let n=Math.max(xl,Math.round(window.innerHeight*.7));Oe(Math.min(n,Math.max(xl,t.height+t.y-e.clientY)))},et=e=>{Ce.current&&(Ce.current=null,e.currentTarget.releasePointerCapture(e.pointerId),l?.(De))},tt=()=>{Oe(bl),l?.(bl)},nt=i.query.length>0,rt=(0,E.useMemo)(()=>pl.filter(e=>a.columns?.includes(e.id)),[a.columns]),it=a.columns?.includes(`linkTarget`)??!1,at=(0,E.useCallback)(e=>Math.min(vl,Math.max(_l,je[e.id]??e.width)),[je]),ot=(0,E.useMemo)(()=>`minmax(160px, 1fr) ${rt.map(e=>`${at(e)}px`).join(` `)}`.trim(),[rt,at]),U=(0,E.useRef)(null),st=(0,E.useRef)(null),ct=()=>Math.floor(st.current?.getBoundingClientRect().width??yl),lt=e=>{let t=rt[0];t&&(e.preventDefault(),e.stopPropagation(),U.current={left:{id:t.id,start:at(t)},startX:e.clientX,nameStart:ct()})},ut=(e,t)=>{let n=rt[t],r=rt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),U.current={left:{id:n.id,start:at(n)},right:{id:r.id,start:at(r)},startX:e.clientX,nameStart:0})},dt=e=>Me(t=>{let n={...t};return delete n[e],ir(hl,n),n});(0,E.useEffect)(()=>{let e=e=>{let t=U.current;if(!t)return;let n=e.clientX-t.startX;Me(e=>{if(!t.right){let r=Math.max(0,t.nameStart-yl),i=Math.min(Math.min(vl,t.left.start+r),Math.max(_l,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(vl,Math.max(_l,t.left.start+n)),a=Math.min(Math.min(vl,r-_l),Math.max(Math.max(_l,r-vl),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{U.current&&(U.current=null,Me(e=>(ir(hl,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,E.useEffect)(()=>{let e=()=>Me(()=>(ir(hl,{}),{}));return window.addEventListener(gl,e),()=>window.removeEventListener(gl,e)},[]);let W=(0,E.useMemo)(()=>e?Tl(e.entries.map(t=>{let n=t.isDirectory?Gn(ge,t.fullPath):void 0,r=n?.name||t.name;return{entry:t,place:n,label:r,ranges:nt?kn(r,i):null,tags:e.tags[t.name]??[],cut:ne.has(t.fullPath)}}).filter(e=>!nt||i.mode===`dim`||e.ranges!==null),a,e,z):[],[e?.entries,e?.tags,a.sort===`size`||a.sort===`items`?e?.folderSizes:null,a.sort===`size`||a.sort===`items`?e?.counts:null,nt,i,ge,a.sort,a.sortDescending,z,ne]);H.current=W,(0,E.useEffect)(()=>{he!==0&&Ae(new Set(H.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[he]);let ft=Math.max(40,a.iconSize+20),pt=Math.max(0,Math.floor(xe.top/ft)-4),mt=Math.min(W.length,pt+Math.ceil(xe.height/ft)+10),ht=(0,E.useMemo)(()=>W.slice(pt,mt),[W,pt,mt]);(0,E.useEffect)(()=>{let e=V.current;if(!e||a.mode!==`list`)return;let t=()=>Se(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[a.mode]),(0,E.useEffect)(()=>{Se(e=>({...e,top:0})),V.current&&(V.current.scrollTop=0)},[e?.path]),(0,E.useEffect)(()=>{if(i.currentPath){if(a.mode===`list`){let e=W.findIndex(e=>e.entry.fullPath===i.currentPath),t=V.current;if(e<0||!t)return;let n=e*ft;(n<t.scrollTop||n+ft>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else _e.current?.scrollIntoView({block:`nearest`})}},[i.currentPath,a.mode,W,ft]);let gt=(0,E.useMemo)(()=>W.slice(0,ye),[W,ye]);(0,E.useEffect)(()=>{let e=ve.current;if(!e||e.length===0)return;let n=e.filter(e=>W.some(n=>t(n.entry.fullPath,e)));if(n.length===0)return;ve.current=null;let r=n[0],i=W.findIndex(e=>t(e.entry.fullPath,r));i>=0&&be(e=>Math.max(e,i+fl)),Ae(new Set(n)),we.current=r,a.mode===`list`&&V.current&&i>=0?V.current.scrollTop=Math.max(0,i*ft-V.current.clientHeight/2):requestAnimationFrame(()=>_e.current?.scrollIntoView({block:`nearest`}))},[W,ft,a.mode]),(0,E.useEffect)(()=>{be(fl)},[e?.path]),(0,E.useEffect)(()=>{if(!i.currentPath)return;let e=W.findIndex(e=>e.entry.fullPath===i.currentPath);e>=0&&be(t=>Math.max(t,e+fl))},[i.currentPath,W]);let _t=(0,E.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&be(e=>Math.min(W.length,e+fl))},[W.length]),vt=a.mode===`grid`,yt=(0,E.useMemo)(()=>{if(!vt)return[];if(!N)return Ol(gt,Dl);let e=[],t=new Map;for(let n of gt){let r=N(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[gt,vt,N]),bt=(0,E.useMemo)(()=>s?W.filter(e=>!e.entry.isDirectory&&Bn(e.entry.name)):[],[W,s]),xt=bt.length,St=(0,E.useMemo)(()=>bt.slice(0,dl),[bt]),Ct=(0,E.useMemo)(()=>s?Ol(St,El):[],[St,s]),wt=(0,E.useMemo)(()=>W.map(e=>e.entry.fullPath),[W]),Dt=W.length>0&&ke.size>=W.length,Ot=ke.size>0&&!Dt,kt=()=>{fe||(Dt?zt():Ae(new Set(wt)))},Pt=e?.path??``,Ft=(0,E.useCallback)((e,t)=>{if(fe){we.current=t,Ae(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Ae(r=>{if(e.shiftKey&&we.current!==null){let e=wt.indexOf(we.current),i=wt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(wt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),we.current=t,e}return we.current=t,new Set([t])})},[wt,fe]),It=(0,E.useCallback)(e=>{fe?(we.current=e,Ae(new Set([e]))):(we.current=e,Ae(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[fe]),zt=(0,E.useCallback)(()=>{we.current=null,Ae(new Set)},[]);(0,E.useEffect)(()=>{if(me===0||!pe||We.current===me||!e?.entries.some(e=>e.fullPath===pe))return;We.current=me,we.current=pe,Ae(new Set([pe])),He({path:pe,value:v(pe)});let t=W.findIndex(e=>e.entry.fullPath===pe),n=V.current;if(!(t<0||!n)){if(a.mode===`list`){let e=t*ft;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(pe)}"]`)?.scrollIntoView({block:`nearest`})})}},[V,e,pe,me,ft,W,a.mode]),(0,E.useEffect)(()=>{if(!Ve)return;let e=W.findIndex(e=>e.entry.fullPath===Ve.path),t=V.current;if(!(e<0||!t)){if(a.mode===`list`){let n=e*ft;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ve.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[V,Ve,ft,W,a.mode]);let Vt=(0,E.useCallback)(()=>Fe(null),[]),Ht=(0,E.useCallback)((e,t)=>{e.isDirectory?p(e.fullPath,Qt(t)):m?.(e.fullPath,Qt(t))},[p,m]),Ut=(0,E.useCallback)((e,t,n)=>{Ee({entry:e,x:t,y:n})},[]),Wt=(0,E.useRef)(null),Gt=(0,E.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;gc(e,ke.has(n)?[...ke]:[n])},[ke]),Kt=(0,E.useCallback)(e=>{if(!fc(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Wt.current=t?.dataset.directory===`true`?t.dataset.path??Pt:Pt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Pt]),qt=(0,E.useCallback)(e=>{if(le)return;let{paths:t,move:n}=pc(e),r=Wt.current??Pt;Wt.current=null,t.length!==0&&re&&(e.preventDefault(),re(t,r,!e.ctrlKey&&n))},[Pt,re,le]),G=(0,E.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),le||!t&&!P)return;let n=Ne.current;t&&!n.has(t)&&Ae(new Set([t])),t&&(we.current=t);let r=t?n.has(t)?[...n]:[t]:[];Fe({x:e.clientX,y:e.clientY,paths:r,background:!t}),Et().then(Xe,()=>Xe(!1))},[P,Pt]),Yt=(0,E.useCallback)(()=>S?.(),[S]),K=(e,t)=>{we.current=e,Ae(new Set([e])),t&&He({path:e,value:v(e)}),Yt()},Zt=Le&&(0,F.jsx)(Uo,{initialDirectory:Pt,initialName:Le.name,onCancel:()=>Re(null),onCompress:async e=>{let t=await Jt(Le.paths,e);return!t.ok||!t.path?(za(t.error??z(`Could not create the archive.`)),!1):(K(t.path,!1),!0)}}),en=async(e,t=!1)=>{let n=e,r=t;if(e.some(qc)){let t=[];for(let n of e)if(!qc(n))t.push(n);else{if(H.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){za(z(`Folders on a shared device cannot be copied yet.`));return}try{t.push(await Zc(n))}catch(e){za(e instanceof Error?e.message:z(`The file could not be copied.`));return}}n=t,r=!1}await Tt(n,r)&&(Xe(!0),te?.())},q=async e=>{if(!e)return;let t=await At(e);t.ok?(ve.current=t.created,Yt(),O?.()):za(z(`Nothing on the clipboard could be pasted here.`))},nn=async(e,t=!1)=>{if(!Pt)return;let n=e===null?await Nt(Pt,t):await Lt(Pt,e);!n.ok||n.path===null?za(n.error??z(`Could not create the item.`)):(we.current=n.path,Ae(new Set([n.path])),He({path:n.path,value:v(n.path)}),Yt())},rn=e=>{Ae(new Set([e.fullPath])),we.current=e.fullPath,He({path:e.fullPath,value:e.name})},an=(0,E.useCallback)(e=>He(t=>t&&{...t,value:e}),[]),on=(0,E.useCallback)(()=>He(null),[]),sn=(0,E.useCallback)(async()=>{let e=Ue.current;if(He(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=H.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Mt(e.path,t);r.ok?(zt(),r.path&&ee?.(e.path,r.path),Yt(),window.setTimeout(()=>Yt(),250)):za(r.error??z(`Could not rename the entry.`))},[zt,ee,Yt,z]),cn=async(e,t=!1)=>{if((t||ae)&&!await ln(e,t))return;let n=await jt(e,t);if(!n.ok&&n.needsPermanent){if(!await ln(e,!0))return;n=await jt(e,!0)}if(n.ok)zt(),Yt();else{if(n.cancelled)return;za(n.error??z(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},ln=(0,E.useCallback)((e,t)=>new Promise(n=>Be({paths:e,permanent:t,resolve:n})),[]),un=(0,E.useCallback)(e=>{Be(t=>(t?.resolve(e),null))},[]);(0,E.useEffect)(()=>{if(!b||Pe)return;let e=e=>{if(tn(e.target))return;Ge.current?.();let t=$t(e),n=[...ke],r=n.length===1?W.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(wt.length===0)return;e.preventDefault();let n=we.current&&wt.includes(we.current)?we.current:ke.size===1?[...ke][0]:null,r=n?wt.indexOf(n):-1,i=t===`home`?0:t===`end`?wt.length-1:Math.max(0,Math.min(wt.length-1,r+(t===`arrowdown`?1:-1))),a=wt[i];Ae(new Set([a])),we.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===_.copy?i(()=>{n.length>0&&en(n)}):t===_.cut?i(()=>{n.length>0&&en(n,!0)}):t===_.paste?i(()=>void q(Pt)):t===_.delete?i(()=>{n.length>0&&cn(n)}):t===_.deletePermanently?i(()=>{n.length>0&&cn(n,!0)}):t===_.selectAll?i(()=>{Ae(new Set(wt)),we.current=wt[0]??null}):t===_.invertSelection?i(()=>{Ae(new Set(wt.filter(e=>!ke.has(e)))),we.current=wt[0]??null}):t===_.rename&&r?i(()=>void rn(r)):t===_.open&&r?i(()=>{r.isDirectory?p(r.fullPath):m?.(r.fullPath)}):t===_.newFolder||t===`f10`?i(()=>void nn(null)):t===_.terminal?i(()=>void Bt(Pt)):t===_.properties&&i(()=>void Rt(n.length>0?n:Pt?[Pt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[wt,en,nn,Pt,b,Pe,p,m,q,cn,rn,W,ke,_]);let dn=ze&&(0,F.jsx)(ns,{confirmLabel:ze.permanent?z(`Delete`):z(`Move`),danger:ze.permanent,message:ze.permanent?z(`Permanently delete {target}? This cannot be undone.`,{target:ze.paths.length===1?z(`this item`):z(`{count} items`,{count:ze.paths.length})}):z(`Move {target} to the recycle bin?`,{target:ze.paths.length===1?z(`this item`):z(`{count} items`,{count:ze.paths.length})}),onCancel:()=>un(!1),onConfirm:()=>un(!0),open:!0,title:ze.permanent?z(`Delete permanently`):z(`Move to the recycle bin`)}),J=(0,E.useMemo)(()=>{if(!e||ke.size===0)return null;let t=wt.find(e=>ke.has(e));return t?W.find(e=>e.entry.fullPath===t)?.entry??null:null},[wt,e,W,ke]),fn=(0,E.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:v(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:z(`Type`),value:z(`Folder`)},{label:z(`Location`),value:e.parent??`—`},{label:z(`Path`),value:e.path},{label:z(`Size`),value:f(t)},{label:z(`Items`),value:o(z,n,`1 item`,`{count} items`)},{label:z(`Modified`),value:`—`},{label:z(`Created`),value:`—`},{label:z(`Attributes`),value:`—`}]}},[e,z]),pn=(0,E.useMemo)(()=>{if(!J||!e)return null;let t=J.isDirectory?e.folderSizes[J.name]:void 0,n=e.tags[J.name]??[],r=J.name.lastIndexOf(`.`),i=r>0&&r<J.name.length-1?J.name.slice(r+1).toUpperCase():`—`;return{name:J.name,path:J.fullPath,isDirectory:J.isDirectory,size:J.size,modified:J.modified,created:J.created,fields:[{label:z(`Type`),value:jl(J,z)},...J.isEncrypted?[{label:z(`Encryption`),value:z(`Password required`)}]:[],{label:z(`Extension`),value:J.isDirectory?`—`:i},{label:z(`Location`),value:e.path},{label:z(`Full path`),value:J.fullPath},{label:z(`Size`),value:J.isDirectory?t===void 0?`—`:f(t):f(J.size)},...J.isDirectory?[{label:z(`Items`),value:`${e.counts[J.name]??`—`}`}]:[],{label:z(`Modified`),value:y(J.modified)},{label:z(`Created`),value:y(J.created)},{label:z(`Link status`),value:J.linkTarget==null?J.linkCount>1?z(`Hard link`):`—`:J.linkValid?`OK`:z(`Broken`)},...J.linkTarget?[{label:z(`Target`),value:J.linkTarget}]:[],...J.linkCount>1?[{label:z(`Links`),value:String(J.linkCount)}]:[],{label:z(`Attributes`),value:[J.isHidden?z(`Hidden`):``,J.isSystem?z(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:z(`Tags`),value:n.join(`, `)}]:[]]}},[e,J,z]),mn=Pe?.paths.length===1?Pe.paths[0]:null,hn=mn?W.find(e=>e.entry.fullPath===mn)?.entry:void 0,gn=hn?{path:hn.fullPath,isDirectory:hn.isDirectory}:null,_n=pn??fn,vn=(0,E.useRef)(j);vn.current=j,(0,E.useEffect)(()=>{vn.current?.(_n)},[j,_n]);let yn=A&&_n&&(0,F.jsx)(ps,{info:_n,onWidth:Je,selectionNote:ke.size>1?o(z,ke.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:k,videoAutoplay:oe,width:Ke});return r&&!e?(0,F.jsx)(Fu,{children:(0,F.jsx)(Lu,{children:r})}):!e&&!n?(0,F.jsx)(Fu,{children:(0,F.jsx)(Iu,{children:z(`Nothing selected.`)})}):a.mode===`grid`?(0,F.jsxs)(Ql,{onPointerDown:M,children:[(0,F.jsxs)($l,{children:[(0,F.jsxs)(su,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||zt()},onContextMenu:e=>G(e),onDragOver:Kt,onDragStart:Gt,onDrop:qt,onScroll:e=>{se?.(e.currentTarget),_t(e.currentTarget)},children:[h&&W.length>0&&(0,F.jsxs)(Yl,{children:[(0,F.jsx)(ql,{$checked:!fe&&Dt,$partial:!fe&&Ot,"aria-label":z(Dt?`Select none`:`Select all`),disabled:fe,onClick:kt,title:z(Dt?`Select none`:`Select all`),type:`button`,children:Dt?(0,F.jsx)(Li,{size:10}):Ot?(0,F.jsx)(Jl,{}):null}),(0,F.jsx)(`span`,{children:z(Dt?`Select none`:`Select all`)})]}),n&&!e?(0,F.jsx)(fu,{$size:a.gridSize,children:(0,F.jsx)(Ll,{size:a.gridSize})}):(0,F.jsx)(zl,{counts:e?.counts,currentPath:nt?i.currentPath:null,groups:yt,gridSize:a.gridSize,innerRef:_e,onContextMenu:G,onOpen:p,onOpenFile:m,onRenameCancel:on,onRenameChange:an,onRenameCommit:sn,onSelect:Ft,onToggle:It,openOnSingleClick:g,renaming:Ve,searching:nt,selected:ke,showCheckboxes:h,showTarget:it}),!n&&e&&W.length===0&&(0,F.jsx)(Pu,{children:(0,F.jsx)(Iu,{children:r??(nt&&i.mode===`hide`?z(`No entries match the search.`):z(`This folder is empty.`))})}),ce]}),Pe&&(0,F.jsx)(Do,{canPaste:Ye,directory:Pt,allowCompression:!0,menu:Pe,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ie,favoritePaths:T,onExtractArchive:D,onArchiveCreated:K,onClose:Vt,onCompressTo:(e,t)=>Re({paths:e,name:t}),onCopy:en,onCreateFile:e=>void nn(e),onCreateFolder:e=>void nn(null,e),onDelete:cn,onOpen:p,onOpenFile:m,onPaste:q,onRefresh:Yt,onRename:e=>{let t=W.find(t=>t.entry.fullPath===e)?.entry;t&&rn(t)},shortcuts:_,target:gn}),Zt,dn]}),yn]}):(0,F.jsxs)(Ql,{onPointerDown:M,children:[(0,F.jsxs)($l,{children:[(0,F.jsxs)(eu,{onScroll:e=>{V.current&&V.current.scrollLeft!==e.currentTarget.scrollLeft&&(V.current.scrollLeft=e.currentTarget.scrollLeft)},ref:B,style:{gridTemplateColumns:ot},children:[(0,F.jsxs)(Wl,{ref:st,children:[h&&(0,F.jsx)(ql,{$checked:!fe&&Dt,$partial:!fe&&Ot,"aria-label":z(Dt?`Select none`:`Select all`),disabled:fe,onClick:e=>{e.stopPropagation(),kt()},title:z(Dt?`Select none`:`Select all`),type:`button`,children:Dt?(0,F.jsx)(Li,{size:10}):Ot?(0,F.jsx)(Jl,{}):null}),(0,F.jsxs)(tu,{onClick:()=>u(`name`),type:`button`,children:[z(`Name`),Cl(a,`name`)]}),(0,F.jsx)(Kl,{"aria-label":z(`Resize column`),onDoubleClick:()=>rt[0]&&dt(rt[0].id),onPointerDown:lt,role:`separator`})]}),rt.map((e,t)=>(0,F.jsxs)(Gl,{children:[(0,F.jsxs)(tu,{onClick:()=>u(e.id),type:`button`,children:[z(e.label),Cl(a,e.id)]}),t<rt.length-1&&(0,F.jsx)(Kl,{"aria-label":z(`Resize column`),onDoubleClick:()=>dt(e.id),onPointerDown:e=>ut(e,t),role:`separator`})]},e.id))]}),(0,F.jsxs)(nu,{onClick:e=>{e.target===e.currentTarget&&zt()},onContextMenu:e=>G(e),onDragOver:Kt,onDragStart:Gt,onDrop:qt,onScroll:e=>{B.current&&B.current.scrollLeft!==e.currentTarget.scrollLeft&&(B.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;Se(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:V,children:[n&&!e?(0,F.jsx)(Il,{template:ot,columns:rt.length}):(0,F.jsxs)(F.Fragment,{children:[pt>0&&(0,F.jsx)(`div`,{style:{height:pt*ft}}),ht.map(t=>{let n=t.entry.fullPath;return(0,F.jsx)(Vl,{current:nt&&n===i.currentPath,dim:nt&&t.ranges===null,height:ft,iconSize:a.iconSize,innerRef:_e,listing:e,onContextMenu:G,onOpen:Ht,onRenameCancel:on,onRenameChange:an,onRenameCommit:sn,onSelect:Ft,onTagEdit:Ut,onToggle:It,openOnSingleClick:g,renaming:Ve?.path===n?{value:Ve.value}:null,row:t,selected:ke.has(n),showCheckboxes:h,showTarget:it,template:ot,visible:rt},n)}),mt<W.length&&(0,F.jsx)(`div`,{style:{height:(W.length-mt)*ft}})]}),!n&&e&&W.length===0&&(0,F.jsx)(Fu,{children:(0,F.jsx)(Iu,{children:r??(nt&&i.mode===`hide`?z(`No entries match the search.`):z(`This folder is empty.`))})})]}),s&&bt.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ru,{onDoubleClick:tt,onPointerDown:Qe,onPointerMove:$e,onPointerUp:et,title:z(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(iu,{style:{height:De},children:[(0,F.jsxs)(au,{children:[z(`Preview`),(0,F.jsx)(ou,{children:xt>dl?`${St.length} / ${xt}`:xt})]}),(0,F.jsx)(su,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||zt()},onContextMenu:e=>G(e),children:(0,F.jsx)(zl,{counts:e?.counts,currentPath:nt?i.currentPath:null,groups:Ct,gridSize:a.gridSize,onContextMenu:G,onOpen:p,onOpenFile:m,onSelect:Ft,onToggle:It,openOnSingleClick:g,searching:nt,selected:ke,showCheckboxes:h,showTarget:it})})]})]}),Te&&e&&(0,F.jsx)(Js,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>d?.(Te.entry.name,e,t),onClose:()=>Ee(null),tags:e.tags[Te.entry.name]??[],x:Te.x,y:Te.y}),Pe&&(0,F.jsx)(Do,{canPaste:Ye,directory:Pt,allowCompression:!0,menu:Pe,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ie,favoritePaths:T,onExtractArchive:D,onArchiveCreated:K,onClose:Vt,onCompressTo:(e,t)=>Re({paths:e,name:t}),onCopy:en,onCreateFile:e=>void nn(e),onCreateFolder:e=>void nn(null,e),onDelete:cn,onOpen:p,onOpenFile:m,onPaste:q,onRefresh:Yt,onRename:e=>{let t=W.find(t=>t.entry.fullPath===e)?.entry;t&&rn(t)},shortcuts:_,target:gn}),Zt,dn]}),yn]})}function Cl(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var wl=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Tl(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return jl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:wl.compare(String(r),String(i));return t.sortDescending?-o:o})}var El=Ln.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&zn(t.entry.name)===e})),Dl=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...El.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Ol(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function kl(e){return Math.max(24,Math.min(e-56,160))}var Al={file:`File`,folder:`Folder`,text:`Text file`,code:`source file`,image:`image`,video:`Video`,audio:`Audio`,archive:`archive`,pdf:`PDF`,executable:`Application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function jl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Al[sc(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Ml(e,t,n,r){switch(e){case`type`:return jl(t,r);case`size`:return Pl(t,n.folderSizes);case`modified`:return y(t.modified);case`created`:return y(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Nl({name:e,ranges:t}){if(!t||t.length===0)return(0,F.jsx)(F.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,F.jsx)(Nu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,F.jsx)(F.Fragment,{children:n})}function Pl(e,t){if(!e.isDirectory)return f(e.size);let n=t[e.name];return n===void 0?`—`:f(n)}function Fl({entry:e,size:t=18}){let n=L(),r=(0,E.useRef)(null),[i,a]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=_n(i?e.fullPath:null,e.isDirectory,t>32),s=yn(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,F.jsxs)(Hl,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,F.jsx)(cc,{name:e.iconSource.slice(5),size:t}):s?(0,F.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,F.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,F.jsx)(bi,{size:t}):(0,F.jsx)(cc,{name:sc(e.name),size:t}),e.isEncrypted&&(0,F.jsx)(Ul,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,F.jsx)(ja,{size:Math.max(8,Math.round(t*.52))})})]})}function Il({template:e,columns:t}){return(0,F.jsx)(F.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,F.jsxs)(pu,{style:{gridTemplateColumns:e},children:[(0,F.jsxs)(gu,{children:[(0,F.jsx)(mu,{style:{flexShrink:0,height:18,width:18}}),(0,F.jsx)(mu,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,F.jsx)(mu,{style:{width:t%2==0?44:92}},t))]},r))})}function Ll({size:e}){return(0,F.jsx)(F.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,F.jsxs)(Du,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,F.jsx)(Ou,{children:(0,F.jsx)(mu,{style:{height:e,width:e}})}),(0,F.jsx)(Au,{children:(0,F.jsx)(mu,{style:{height:9,width:`${t}%`}})})]},n))})}var Rl=(0,E.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=L(),x=Wn(),S=!e.entry.isDirectory&&Bn(e.entry.name),ee=(0,E.useRef)(null),[te,ne]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(!S||te)return;let e=ee.current;if(!e)return;if(!(`IntersectionObserver`in window)){ne(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(ne(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,te]);let re=Cn(S&&te?e.entry.fullPath:null,192,e.entry.modified),[C,w]=(0,E.useState)(!1),ie=S&&re!==null&&!C,T=e.entry.fullPath,D=t=>{e.entry.isDirectory?v(T,Qt(t)):y?.(T,Qt(t))};return(0,F.jsxs)(Du,{$current:t,$dim:n,$image:ie,$selected:s,onClick:e=>{h(e,T),l&&D(e)},onContextMenu:e=>_(e,T),onDoubleClick:e=>{l||D(e)},ref:e=>{ee.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!u,children:[c&&(0,F.jsx)(Zl,{$checked:s,onClick:e=>{e.stopPropagation(),g(T)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,F.jsx)(Li,{size:10})}),(0,F.jsx)(Ou,{children:ie?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:re}):(0,F.jsx)(ku,{children:e.place&&x.useIcons?(0,F.jsx)(Gs,{place:e.place,size:r}):(0,F.jsx)(Fl,{entry:e.entry,size:r})})}),(0,F.jsxs)(Au,{children:[u?(0,F.jsx)(Bl,{onCancel:()=>m?.(),onChange:e=>d?.(e),onCommit:()=>p?.(),value:u.value}):(0,F.jsx)(ju,{$broken:e.entry.linkValid===!1,children:(0,F.jsx)(Nl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,F.jsxs)(vu,{title:b(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(ja,{size:9}),b(`Encrypted`)]}),e.cut&&(0,F.jsxs)(yu,{title:b(`This item is cut and will move when something is pasted.`),children:[(0,F.jsx)(wa,{size:9}),b(`Cut`)]}),(0,F.jsx)(Mu,{children:e.entry.isDirectory?i===void 0?jl(e.entry,b):b(`{type} · {count} items`,{type:jl(e.entry,b),count:i}):b(`{type} · {size}`,{type:jl(e.entry,b),size:f(e.entry.size)})}),a&&e.entry.linkTarget&&(0,F.jsxs)(xu,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,F.jsx)(Ma,{size:9}),(0,F.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function zl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=L();return(0,F.jsx)(F.Fragment,{children:e.map(e=>(0,F.jsxs)(cu,{children:[(0,F.jsxs)(lu,{children:[y(e.label),(0,F.jsx)(uu,{children:e.rows.length}),(0,F.jsx)(du,{})]}),(0,F.jsx)(fu,{$size:t,children:e.rows.map(e=>(0,F.jsx)(Rl,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:kl(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Bl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,F.jsx)(bu,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Vl=(0,E.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=L(),ee=Wn(),te=e.entry.fullPath;return(0,F.jsxs)(hu,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,te),o&&_(e.entry,t)},onContextMenu:e=>g(e,te),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":te,draggable:!p,children:[(0,F.jsxs)(gu,{children:[i&&(0,F.jsx)(Xl,{$checked:r,onClick:e=>{e.stopPropagation(),h(te)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,F.jsx)(Li,{size:10})}),e.place&&ee.useIcons?(0,F.jsx)(Hl,{children:(0,F.jsx)(Gs,{place:e.place,size:s})}):(0,F.jsx)(Fl,{entry:e.entry,size:s}),p?(0,F.jsx)(Bl,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,F.jsx)(_u,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,F.jsx)(Nl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,F.jsxs)(vu,{title:S(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(ja,{size:9}),S(`Encrypted`)]}),e.cut&&(0,F.jsxs)(yu,{title:S(`This item is cut and will move when something is pasted.`),children:[(0,F.jsx)(wa,{size:9}),S(`Cut`)]}),a&&e.entry.linkTarget&&(0,F.jsxs)(xu,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,F.jsx)(Ma,{size:9}),(0,F.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,F.jsx)(Su,{children:t.id===`tags`?(0,F.jsx)(Cu,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,F.jsx)(wu,{$color:t,$ink:qs(t),children:e},e)}):(0,F.jsx)(Tu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,F.jsx)(Eu,{children:S(`Broken`)}):Ml(t.id,e.entry,d,S)},t.id))]})}),Hl=_.span`
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
`,Ul=_.span`
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
`,Wl=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,Gl=_.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,Kl=_.span`
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
`,ql=_.button`
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
`,Jl=_.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Yl=_.div`
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
`,Xl=_.button`
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
`,Zl=_(Xl)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Ql=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,$l=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,eu=_.div`
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
`,tu=_.button`
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
`,nu=_.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,ru=_.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,iu=_.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,au=_.div`
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
`,ou=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,su=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,cu=_.section`
    & + & {
        margin-top: 22px;
    }
`,lu=_.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,uu=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,du=_.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,fu=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,pu=_.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,mu=_.span`
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
`,hu=_.div`
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
`,gu=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,_u=_.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,vu=_.span`
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
`,yu=_.span`
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
`,bu=_.input`
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
`,xu=_.span`
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
`,Su=_.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cu=_.button`
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
`,wu=_.span`
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
`,Tu=_.span`
    color: var(--text-muted);
    font-size: 11px;
`,Eu=_.span`
    color: #fca5a5;
`,Du=_.div`
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
`,Ou=_.div`
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
`,ku=_.span`
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
`,Au=_.div`
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
`,ju=_.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Mu=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Nu=_.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Pu=_.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Fu=_.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Iu=_.p`
    font-size: 13px;
    color: var(--text-muted);
`,Lu=_.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Ru=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,zu=`/assets/bloom-BpfZWiaG.mp4`,Bu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Vu=`/assets/drift-BRBSQL2_.mp4`,Hu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Uu=`/assets/ember-CtSz0YxR.mp4`,Wu=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],Gu=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],Ku=[{id:`builtin:video:drift`,name:`Drift`,url:Vu,poster:Bu},{id:`builtin:video:ember`,name:`Ember`,url:Uu,poster:Hu},{id:`builtin:video:bloom`,name:`Bloom`,url:zu,poster:Ru}],qu=Gu.map(e=>({...e,variants:Wu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:$u(ed(e.id,t))}))})),Ju=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>Wu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:$u(td(e.id,t))}))),Yu=new Map([...qu.flatMap(e=>e.variants),...Ju].map(e=>[e.id,e])),Xu=new Map(Ku.map(e=>[e.id,e]));function Zu(e){if(Yu.has(e))return Yu.get(e).url;if(Xu.has(e))return Xu.get(e).url;let t=e.split(`:`)[1];return t?Yu.get(`builtin:${t}:indigo`)?.url??null:null}function Qu(e){return Xu.has(e)}function $u(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function ed(e,t){return e===`dunes`?cd(t):e===`tide`?ld(t):sd(t)}function td(e,t){return e===`skyline`?rd(t):e===`orbit`?id(t):nd(t)}function nd({accent:e,secondary:t}){let n=od(t,`#05070f`,.86),r=od(e,`#0b1020`,.72),i=od(t,`#0a0f1d`,.66),a=od(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${n}"/>
            <stop offset="0.62" stop-color="${r}"/>
            <stop offset="1" stop-color="#05070d"/>
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stop-color="${t}" stop-opacity="0.95"/>
            <stop offset="0.4" stop-color="${e}" stop-opacity="0.45"/>
            <stop offset="1" stop-color="${e}" stop-opacity="0"/>
        </radialGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1450" cy="330" r="360" fill="url(#sun)"/>
    <circle cx="1450" cy="330" r="120" fill="${od(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${od(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function rd({accent:e,secondary:t}){let n=od(t,`#07040d`,.84),r=od(e,`#100716`,.7),i=od(e,`#08050e`,.82),a=od(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${n}"/>
            <stop offset="0.7" stop-color="${r}"/>
            <stop offset="1" stop-color="#05030a"/>
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
    ${[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],o)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${o%2?i:a}" opacity="0.92"/>`+Array.from({length:5},(i,a)=>`<rect x="${t+14}" y="${n+24+a*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+o%3*.05}"/>`).join(``)).join(``)}
    <rect x="0" y="720" width="1920" height="360" fill="${od(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function id({accent:e,secondary:t}){let n=od(e,`#03050d`,.9),r=od(t,`#05030c`,.94),i=od(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${od(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${od(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${od(e,`#08050f`,.7)}"/>
        </radialGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#space)"/>
    ${a}
    <g transform="rotate(-18 960 540)">
        <ellipse cx="960" cy="540" rx="610" ry="210" fill="none" stroke="${i}" stroke-width="3" opacity="0.55"/>
        <ellipse cx="960" cy="540" rx="480" ry="150" fill="none" stroke="${e}" stroke-width="1.6" opacity="0.4"/>
        <ellipse cx="960" cy="540" rx="760" ry="280" fill="none" stroke="${t}" stroke-width="1.2" opacity="0.25"/>
    </g>
    <circle cx="960" cy="540" r="170" fill="url(#planet)"/>
    <circle cx="960" cy="540" r="220" fill="none" stroke="${e}" stroke-width="2" opacity="0.5"/>
    <circle cx="1450" cy="300" r="18" fill="${od(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function ad(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function od(e,t,n){let[r,i,a]=ad(e),[o,s,c]=ad(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function sd({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${od(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${od(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${od(e,`#04060c`,.94)}"/>
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
    <ellipse cx="420" cy="260" rx="540" ry="300" fill="${e}" opacity="0.7" filter="url(#soft)"/>
    <ellipse cx="1450" cy="220" rx="460" ry="260" fill="${t}" opacity="0.66" filter="url(#soft)"/>
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${od(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function cd({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${od(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${od(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${od(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${od(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${od(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
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
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${od(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function ld({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${od(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${od(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${od(e,`#020609`,.94)}"/>
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
    <ellipse cx="350" cy="840" rx="620" ry="280" fill="${e}" opacity="0.45" filter="url(#blur)"/>
    <ellipse cx="1550" cy="240" rx="520" ry="260" fill="${t}" opacity="0.38" filter="url(#blur)"/>
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${od(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var ud=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function dd(e){return ud.test(e)}function fd({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):C(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=Tn(r),a=t?.startsWith(`builtin:`)?Zu(t):n??i,o=n===null?r===null?t!==null&&Qu(t):dd(r):dd(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,F.jsxs)(pd,{"aria-hidden":!0,children:[o?(0,F.jsx)(hd,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,F.jsx)(md,{src:a,style:{filter:s}}),(0,F.jsx)(gd,{})]})}var pd=_.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,md=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,hd=_.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,gd=_.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function _d({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=L(),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(()=>Math.max(1,Math.ceil(t)));return(0,E.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,Za.createPortal)((0,F.jsx)(vd,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,F.jsxs)(yd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(bd,{children:a(`Protected folder`)}),(0,F.jsx)(xd,{children:a(`These paths are protected by the safety settings:`)}),(0,F.jsx)(Sd,{children:e.map(e=>(0,F.jsxs)(Cd,{children:[(0,F.jsx)(wd,{children:e.path}),(0,F.jsx)(Td,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,F.jsx)(Ed,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,F.jsx)(Dd,{children:a(`Nothing has been deleted.`)}),(0,F.jsx)(Od,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,F.jsxs)(kd,{children:[(0,F.jsx)(Ad,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,F.jsx)(jd,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var vd=_.div`
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
`,yd=_.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${so}
`,bd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,xd=_.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Sd=_.div`
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
`,Cd=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,wd=_.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Td=_.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Ed=_.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Dd=_.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Od=_.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,kd=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Ad=_.button`
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
`,jd=_.button`
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
`;function Md(){let e=L(),[t,n]=(0,E.useState)(null),r=(0,E.useRef)(null),i=(0,E.useRef)(null);(0,E.useEffect)(()=>(Ra(e=>new Promise(t=>{r.current=t,n(e)})),()=>Ra(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,E.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Za.createPortal)((0,F.jsx)(Nd,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,F.jsxs)(Pd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(Fd,{children:e(`Notice`)}),(0,F.jsx)(Id,{children:t}),(0,F.jsx)(Ld,{children:(0,F.jsx)(Rd,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var Nd=_.div`
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
`,Pd=_.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${so}
`,Fd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Id=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Ld=_.div`
    display: flex;
    justify-content: flex-end;
`,Rd=_.button`
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
`;function zd(){let e=L(),[t,n]=(0,E.useState)(null),[r,i]=(0,E.useState)(``),a=(0,E.useRef)(null),o=(0,E.useRef)(null);(0,E.useEffect)(()=>(Ba((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Ba(null)),[]),(0,E.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Za.createPortal)((0,F.jsx)(Bd,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,F.jsxs)(Vd,{role:`dialog`,"aria-modal":`true`,children:[(0,F.jsx)(Hd,{children:e(`Archive password`)}),(0,F.jsx)(Ud,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,F.jsx)(Wd,{title:t.archive,children:t.archive}),(0,F.jsx)(Gd,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,F.jsxs)(Kd,{children:[(0,F.jsx)(qd,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,F.jsx)(Jd,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var Bd=_.div`
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
`,Vd=_.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${so}
`,Hd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ud=_.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Wd=_.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Gd=_.input`
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
`,Kd=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,qd=_.button`
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
`,Jd=_(qd)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Yd({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h,onSelectMatches:g}){let _=L(),v=(0,E.useRef)(null),y=c??_(`Search this folder`);(0,E.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,F.jsxs)(Xd,{children:[(0,F.jsx)(Ci,{}),(0,F.jsx)(Zd,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Qd,{children:i===0?`0/0`:`${a+1}/${i}`}),g&&(0,F.jsx)($d,{disabled:i===0,onClick:g,title:_(`Select all matches`),type:`button`,children:(0,F.jsx)(Li,{size:12})}),(0,F.jsx)($d,{$chevron:!0,onClick:()=>b(u),title:_(`Previous match (Shift+Enter)`),type:`button`,children:(0,F.jsx)(ki,{size:12})}),(0,F.jsx)($d,{$chevron:!0,$down:!0,onClick:()=>b(d),title:_(`Next match (Enter)`),type:`button`,children:(0,F.jsx)(ki,{size:12})})]}),(0,F.jsx)(ef,{$on:n,onClick:()=>b(f),title:_(`Match case`),type:`button`,children:`Aa`}),(0,F.jsx)(ef,{$on:r,onClick:()=>b(p),title:_(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,F.jsx)(tf,{$on:t===`hide`,onClick:()=>b(m),title:_(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:t===`hide`?(0,F.jsx)(Bi,{size:12}):(0,F.jsx)(zi,{size:12})}),(0,F.jsx)($d,{onClick:h,title:_(`Close search (Esc)`),type:`button`,children:(0,F.jsx)(Ri,{size:12})})]})}var Xd=_.div`
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
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--text-muted);
    ${uo}
`,Zd=_.input`
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
`,Qd=_.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,$d=_.button`
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
`,ef=_.button`
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
`,tf=_(ef)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function nf(e,t,n,r,i=[]){(0,E.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=kn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function rf({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=L(),a=(0,E.useRef)(null),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(null);return(0,E.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,E.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,E.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Za.createPortal)((0,F.jsxs)(af,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Bs).map(n=>(0,F.jsx)(of,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Bs[n](16)},n)),(0,F.jsx)(of,{onClick:async()=>{let e=await Fa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,F.jsx)(Ei,{size:13})}),r&&(0,F.jsx)(of,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,F.jsx)(Ri,{size:12})})]}),document.body)]})}var af=_.div`
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
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
    ${co}
    transform-origin: top left;
`,of=_.button`
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
`;function sf({source:e,poster:t}){let n=C(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=Tn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??Zu(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,F.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,F.jsx)(`img`,{alt:``,src:a}):null}function cf({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=L(),s=(0,E.useRef)(null),c=(0,E.useRef)(null),l=(0,E.useRef)(!1),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,E.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,E.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,E.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,F.jsx)(kf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,F.jsxs)(Af,{children:[(0,F.jsxs)(jf,{children:[(0,F.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,F.jsx)(Rf,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,F.jsx)(Ri,{size:12})})]}),(0,F.jsx)(Mf,{children:o(`Drag the frame to choose the visible part.`)}),(0,F.jsxs)(Nf,{children:[t?(0,F.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,F.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,F.jsx)(Pf,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:m},children:(0,F.jsx)(Ff,{})})]}),(0,F.jsxs)(If,{children:[(0,F.jsx)(Lf,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,F.jsx)(Lf,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var lf=150,uf=120,df=200,ff=_.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,pf=_.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,mf=_.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${df}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${df}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(df*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(df*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(df*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${df}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(df*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(df*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(df*.18)}px),
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
`,hf=_.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${lf}px);
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
`,gf=_.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,_f=_.section`
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
`,vf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,yf=_.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,bf=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,xf=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Sf=_.input`
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
`,Cf=_.button`
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
`,wf=_.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Tf=_.button`
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
`,Ef=_.button`
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
`,Df=_.span`
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
`,Of=_.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,kf=_.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Af=_.div`
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
`,jf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Mf=_.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,Nf=_.div`
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
`,Pf=_.div`
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
`,Ff=_.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,If=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Lf=_.button`
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
`,Rf=_.button`
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
`,zf=_.button`
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
`,Bf=_.div`
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
`,Vf=_.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Hf=_.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Uf=_.button`
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
`,Wf=_.div`
    position: relative;
    display: inline-flex;
`,Gf=_.div`
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
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
`,Kf=_.button`
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
`,qf=_.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Jf=_.section`
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
`,Yf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Xf=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Zf=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Qf=_.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,$f=_.input`
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
`,ep=_.button`
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
`,tp=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,np=_.div`
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
`,rp=_.span`
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
`,ip=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,ap=_.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,op=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,sp=_.button`
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
`,cp=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,lp=_.button`
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
`,up=_.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,dp=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,fp=_.div`
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
`,pp=_.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,mp=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,hp=_.button`
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
`,gp=_.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,_p=_.button`
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
`,vp=_.button`
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
`,yp=_.button`
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
`,bp=_.span`
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
`,xp=_.button`
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
`,Sp=_.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,Cp=_.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,wp=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Tp=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Ep=_.input`
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
`,Dp=_.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Op=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,kp=_.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ap=_.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,jp=_.button`
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
`;function Mp({places:e,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:u,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:_,onSearchMatches:y,readOnly:b=!1,onPick:x,onSelectionChange:S,onAddToTray:ee,onAddFavorite:te,onRemoveFavorite:ne,favoritePaths:ie,onExtractArchive:T,settingsVersion:D=0}){let O=L(),ae=Wn(),[k,oe]=(0,E.useState)(!1),[A,j]=(0,E.useState)(null),M=A?.overviewBanner??null,N=M?.startsWith(`builtin:`)??!1,se=M?.startsWith(`url:`)?M.slice(4):C(M)?M:null,ce=N||se?``:M??``,le=N?``:se?se.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:ce.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,ue=N?Qu(M):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(le),de=Tn(ce.length>0?ce:null,0,le?`.${le}`:``),I=M?Zu(M)??se??de:null,[R,fe]=(0,E.useState)(``),[pe,me]=(0,E.useState)(null),[he,z]=(0,E.useState)(!1),[ge,_e]=(0,E.useState)(null),[ve,B]=(0,E.useState)(null),[V,ye]=(0,E.useState)(null),[Se,Ce]=(0,E.useState)([]),[we,Te]=(0,E.useState)(null),[Ee,De]=(0,E.useState)(``),[Oe,ke]=(0,E.useState)(null),[je,Me]=(0,E.useState)(null),Ne=ul(`overview`),[H,Pe]=(0,E.useState)(null),[Fe,Ie]=(0,E.useState)(null),Le=(0,E.useRef)(null),Re=(0,E.useRef)(null),ze=(0,E.useRef)(null),Be=(0,E.useRef)(null),Ve=(0,E.useRef)(null),He=Fe??A?.overviewBannerHeight??220,[Ge,Ke]=(0,E.useState)(0),[qe,Je]=(0,E.useState)(null),Xe=Math.min(1,Math.max(0,A?.overviewBannerOffset??.3)),Ze=He+df,Qe=qe&&Ge>0?qe.height*(Ge/qe.width):Ze,$e=Qe>0&&Qe<Ze+240?(Ze+240)/Qe:1,et=Math.max(1,Math.round(Ge*$e)),tt=Math.max(0,Qe*$e-Ze),nt=Math.min(uf,tt/2,Math.max(20,He*.42)),rt=nt+Xe*Math.max(0,tt-nt*2),[at,ot]=(0,E.useState)(!1),U=(e,t=!1)=>x?(ke(e),Me({path:e,isDirectory:t}),S?.([e]),!0):!1,st=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),ke(t),Me({path:t,isDirectory:n}),Pe({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,E.useEffect)(()=>(rl(`overview`,je?(e,t)=>Pe({x:e,y:t,target:je}):null),()=>rl(`overview`,null)),[je]);let ct=(e,t)=>c(e,t);(0,E.useEffect)(()=>{Ye().then(j,()=>j(null))},[D]),(0,E.useEffect)(()=>{if(P.available)return Hc().then(Ce,()=>void 0),P.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Ce(t.data.peers)})},[]),(0,E.useEffect)(()=>{let e=ze.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,E.useEffect)(()=>{if(N&&!ue){Je({width:1920,height:1080});return}Je(null);let e=Ve.current;e?.complete&&e.naturalWidth>0&&Je({width:e.naturalWidth,height:e.naturalHeight})},[M,N,ue]),(0,E.useEffect)(()=>{let e=Be.current;if(!e)return;let t=()=>Ke(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[A?.overviewBanner]),(0,E.useEffect)(()=>{if(!pe)return;let e=()=>me(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||me(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[pe]),(0,E.useEffect)(()=>{if(!he)return;let e=()=>z(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[he]);let lt=Hs(A),ut=lt.map(e=>e.id),dt=(0,E.useRef)(null),W=e=>pe?.kind===`panel`&&pe.id===e,ft=e=>pe?.kind===`place`&&pe.id===e;(0,E.useEffect)(()=>{if(!P.available)return;let e=lt.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return P.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>P.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[lt.map(e=>e.path??e.id).join(`|`),a]),nf(dt,_??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let pt=async(e,t)=>{let n={...A?.placeIcons};t?n[e]=t:delete n[e],me(null),await vt({placeIcons:n}),l(await Ae())},mt=async(e,t)=>{let n={...A?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],B(null),await vt({placeNames:n}),l(await Ae())},ht=e=>{ye(null),_e({drive:e,label:e.label||`Local Disk`})},gt=async()=>{if(!ge)return;let{drive:e,label:t}=ge;_e(null);let n=await be(e.name,t.trim());n.ok?(ye(null),h?.()):ye(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},_t=A?.overviewColumns??1,vt=async e=>{if(!A)return;let t={...A,...e,overviewPanels:e.overviewPanels??ut,overviewHidden:[]};j(await it(t)),p?.()},yt=async()=>{await vt({overviewPanels:[...Ls],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),l(await Ae()),oe(!1)},bt=async()=>{let e=await Fa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=A?.overviewBanners??[];await vt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},xt=async()=>{let e=R.trim();if(!A||!C(e))return;let t=A.overviewBanners??[];fe(``),await vt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},St=()=>void vt({overviewBanner:null}),Ct=e=>void vt({overviewBanners:(A?.overviewBanners??[]).filter(t=>t!==e),...A?.overviewBanner===e||A?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),wt=e=>{Le.current={y:e.clientY,height:He},e.currentTarget.setPointerCapture(e.pointerId)},Et=e=>{let t=Le.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Re.current=n,Ie(n)},Dt=e=>{Le.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Re.current!==null&&(vt({overviewBannerHeight:Re.current}),Re.current=null)},Ot=(e,t)=>{let n=ut.indexOf(e),r=n+t;if(n<0||r<0||r>=ut.length)return;let i=[...ut];[i[n],i[r]]=[i[r],i[n]],vt({overviewPanels:i})},kt=(e,t)=>{let n={...A?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],vt({overviewTitles:n})},At=(e,t)=>void vt({overviewViews:{...A?.overviewViews,[e]:t}}),jt=e=>{let t=A?.overviewPinned??lt.filter(e=>e.pinned).map(e=>e.id);vt({overviewPinned:lt.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Mt=e=>{me(null);let t=t=>{let n={...t};return delete n[e],n},n=A?.overviewPinned??lt.filter(e=>e.pinned).map(e=>e.id);vt({overviewPanels:ut.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(A?.overviewTitles),overviewViews:t(A?.overviewViews),overviewIcons:t(A?.overviewIcons),panelPlaces:t(A?.panelPlaces)})},Nt=(e,t)=>{let n={...A?.overviewIcons};t?n[e]=t:delete n[e],me(null),vt({overviewIcons:n})},Pt=async e=>{if(!A)return;if(e===`folder`){let e=await Pa();if(!e)return;let t=`folder:${e}`;ut.includes(t)||await vt({overviewPanels:[...ut,t]});return}if(e===`quick`){let e=2;for(;ut.includes(`quick:${e}`);)e+=1;await vt({overviewPanels:[...ut,`quick:${e}`]});return}let t=e;for(let n=2;ut.includes(t);n+=1)t=`${e}:${n}`;await vt({overviewPanels:[...ut,t]})},Ft=async n=>{let r=await Pa();if(!r)return;if(n.id===`quick`){await vt({quickAccess:[...new Set([...e.map(e=>e.path),r])]}),l(await Ae());return}let i=n.places??[];i.some(e=>t(e,r))||await vt({panelPlaces:{...A?.panelPlaces,[n.id]:[...i,r]}})},It=async(n,r)=>{me(null),n.id===`quick`?(await vt({quickAccess:e.filter(e=>!t(e.path,r)).map(e=>e.path)}),l(await Ae())):await vt({panelPlaces:{...A?.panelPlaces,[n.id]:(n.places??[]).filter(e=>!t(e,r))}})},Lt=async(n,r,i)=>{if(t(r,i))return;let a=n.id===`quick`?e.map(e=>e.path):n.places??[],o=a.findIndex(e=>t(e,r)),s=a.findIndex(e=>t(e,i));if(o<0||s<0)return;let c=[...a],[u]=c.splice(o,1);c.splice(s,0,u),n.id===`quick`?(await vt({quickAccess:c}),l(await Ae())):await vt({panelPlaces:{...A?.panelPlaces,[n.id]:c}})},Rt=(e,t)=>({draggable:k,onDragOver:e=>{k&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{k&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{k&&(n.preventDefault(),Lt(e,n.dataTransfer.getData(`text/plain`),t))}}),zt=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:A?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??A?.placeIcons?.[n]??null}}),Bt=e=>{if(r.length===0)return(0,F.jsx)(Cp,{children:O(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,F.jsx)(tp,{children:t.map(e=>{let t=Gn(ae,e.path);return(0,F.jsxs)(np,{$plain:!1,$selected:Oe===e.path,onClick:t=>{U(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Qt(t)):xe(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>st(t,e.path,e.isDirectory),title:e.path,children:[(0,F.jsx)(rp,{children:t&&ae.useIcons?(0,F.jsx)(Gs,{place:t,size:18}):(0,F.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(ip,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(ap,{children:e.path})]})]},e.path)})}):(0,F.jsx)(op,{children:t.map(e=>{let t=Gn(ae,e.path);return(0,F.jsxs)(sp,{$selected:Oe===e.path,onClick:t=>{U(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Qt(t)):xe(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>st(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ae.useIcons?(0,F.jsx)(Gs,{place:t,size:15}):(0,F.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,F.jsxs)(cp,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(ap,{children:e.path})]})]},e.path)})})},Vt=e=>{let n=A?.favorites??[],r=async e=>{await vt({favorites:n.filter(t=>t.path!==e)})},i=async(e,r)=>{e&&!n.some(n=>t(n.path,e))&&await vt({favorites:[...n,{path:e,name:v(e)||e,isDirectory:r}]})},a=(e,t,n)=>{k||U(t,n)||(n?c(t,Qt(e)):xe(t))},o=k?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(lp,{$row:e.view===`list`,onClick:()=>void Fa().then(e=>i(e,!1)),title:O(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,F.jsx)(Ei,{size:15}):(0,F.jsx)(rp,{children:(0,F.jsx)(Ei,{size:15})}),e.view===`list`?(0,F.jsxs)(cp,{children:[(0,F.jsx)(`strong`,{children:O(`Add file`)}),(0,F.jsx)(ap,{children:O(`Pin any file here`)})]}):(0,F.jsxs)(ip,{children:[(0,F.jsx)(`strong`,{children:O(`Add file`)}),(0,F.jsx)(ap,{children:O(`Pin any file here`)})]})]}),(0,F.jsxs)(lp,{$row:e.view===`list`,onClick:()=>void Pa().then(e=>i(e,!0)),title:O(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,F.jsx)(Ei,{size:15}):(0,F.jsx)(rp,{children:(0,F.jsx)(Ei,{size:15})}),e.view===`list`?(0,F.jsxs)(cp,{children:[(0,F.jsx)(`strong`,{children:O(`Add folder`)}),(0,F.jsx)(ap,{children:O(`Pin any folder here`)})]}):(0,F.jsxs)(ip,{children:[(0,F.jsx)(`strong`,{children:O(`Add folder`)}),(0,F.jsx)(ap,{children:O(`Pin any folder here`)})]})]})]}):null;return n.length===0&&!k?(0,F.jsx)(Cp,{children:O(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,F.jsxs)(tp,{children:[n.map(e=>{let t=Gn(ae,e.path);return(0,F.jsxs)(np,{$plain:k,$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!k&&x?.(e.path),onContextMenu:t=>!k&&st(t,e.path,e.isDirectory),title:e.path,children:[k&&(0,F.jsx)(vp,{onClick:t=>{t.stopPropagation(),r(e.path)},title:O(`Remove from favorites`),type:`button`,children:(0,F.jsx)(Ri,{size:11})}),(0,F.jsx)(rp,{children:t&&ae.useIcons?(0,F.jsx)(Gs,{place:t,size:18}):(0,F.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(ip,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(ap,{children:e.path})]})]},e.path)}),o]}):(0,F.jsxs)(op,{children:[n.map(e=>{let t=Gn(ae,e.path);return(0,F.jsxs)(sp,{$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!k&&x?.(e.path),onContextMenu:t=>!k&&st(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ae.useIcons?(0,F.jsx)(Gs,{place:t,size:15}):(0,F.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,F.jsxs)(cp,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(ap,{children:e.path})]}),k&&(0,F.jsx)(vp,{$inline:!0,onClick:t=>{t.stopPropagation(),r(e.path)},title:O(`Remove from favorites`),type:`button`,children:(0,F.jsx)(Ri,{size:11})})]},e.path)}),o]})},Ht=e=>{if(n.length===0)return(0,F.jsx)(Cp,{children:O(`No drives are available.`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=ge?.drive.name===t.name,i=r?(0,F.jsx)(Np,{maxLength:32,onCancel:()=>_e(null),onChange:e=>_e({...ge,label:e}),onCommit:()=>void gt(),value:ge?.label??``}):(0,F.jsx)(F.Fragment,{children:d(t)}),a=!r&&k&&(0,F.jsx)(yp,{onClick:e=>{e.stopPropagation(),ht(t)},title:O(`Rename volume`),type:`button`,children:(0,F.jsx)(ra,{size:11})}),o=(0,F.jsx)(ap,{children:O(`{free} free of {total}`,{free:f(t.freeSpace),total:f(t.totalSize)})});return e.view===`grid`?(0,F.jsxs)(np,{$plain:!1,$selected:Oe===t.name,onClick:e=>{!r&&U(t.name,!0)||r||c(t.name,Qt(e))},onDoubleClick:()=>!r&&x?.(t.name),onContextMenu:e=>!r&&st(e,t.name,!0),title:t.name,children:[(0,F.jsx)(rp,{children:(0,F.jsx)(Si,{size:18})}),(0,F.jsxs)(ip,{children:[(0,F.jsxs)(`strong`,{children:[i,r&&re(t),a]}),o]})]},t.name):(0,F.jsxs)(sp,{as:r?`div`:`button`,$selected:Oe===t.name,onClick:r?void 0:e=>{U(t.name,!0)||c(t.name,Qt(e))},onDoubleClick:r?void 0:()=>x?.(t.name),onContextMenu:r?void 0:e=>st(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,F.jsx)(Si,{size:18}),(0,F.jsxs)(cp,{children:[(0,F.jsxs)(`strong`,{children:[i,r&&re(t),a]}),o]}),(0,F.jsx)(up,{children:(0,F.jsx)(dp,{$used:n,$tone:w(n)})})]},t.name)});return e.view===`grid`?(0,F.jsx)(tp,{children:t}):(0,F.jsx)(op,{children:t})},Ut=()=>{let e=async e=>{Te(e.id);try{await Uc(e.host,e.port)}finally{Te(null)}},t=async()=>{let e=Ee.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Te(`manual`);try{await Uc(n,r)}finally{Te(null)}}};return(0,F.jsxs)(wp,{children:[(0,F.jsxs)(Tp,{children:[(0,F.jsx)(Ep,{onChange:e=>De(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:O(`Address, e.g. 192.168.1.20:45701`),value:Ee}),(0,F.jsx)(jp,{disabled:we!==null||!Ee.includes(`:`),onClick:()=>void t(),type:`button`,children:O(we===`manual`?`Pairing…`:`Pair by address`)})]}),Se.length===0&&(0,F.jsx)(Cp,{children:O(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),Se.map(t=>(0,F.jsxs)(Dp,{children:[(0,F.jsxs)(Op,{children:[(0,F.jsx)(_a,{size:14}),(0,F.jsx)(kp,{title:t.host,children:t.name}),(0,F.jsx)(Ap,{$online:t.online,children:t.paired?t.online?O(`Paired`):O(`Offline`):O(`Not paired`)}),!t.paired&&t.online&&(0,F.jsx)(jp,{disabled:we===t.id,onClick:()=>void e(t),type:`button`,children:we===t.id?O(`Pairing…`):O(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,F.jsx)(ap,{children:O(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,F.jsxs)(sp,{onClick:n=>c(Yc(t.id,e.id),Qt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,F.jsx)(_a,{size:14}),(0,F.jsxs)(cp,{children:[(0,F.jsx)(`strong`,{children:e.name}),(0,F.jsx)(ap,{children:t.name})]}),(0,F.jsx)(ya,{size:12})]},e.id))]},t.id))]})},Wt=e=>{switch(e.kind){case`share`:return Ut();case`favorites`:return Vt(e);case`quick`:{let t=zt(e);return!k&&t.length===0?(0,F.jsx)(Cp,{children:O(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,F.jsxs)(tp,{children:[t.map(t=>(0,F.jsxs)(np,{$plain:k,$selected:Oe===t.path,...Rt(e,t.path),onClick:e=>{!k&&!U(t.path,!0)&&c(t.path,Qt(e))},onDoubleClick:()=>!k&&x?.(t.path),onContextMenu:e=>!k&&st(e,t.path,!0),title:t.path,children:[k&&(0,F.jsx)(vp,{onClick:n=>{n.stopPropagation(),It(e,t.path)},title:O(`Remove from Quick access`),type:`button`,children:(0,F.jsx)(Ri,{size:11})}),(0,F.jsxs)(gp,{children:[k?(0,F.jsx)(_p,{onClick:e=>{e.stopPropagation(),me(ft(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,F.jsx)(rp,{children:(0,F.jsx)(Gs,{place:t})})}):(0,F.jsx)(rp,{children:(0,F.jsx)(Gs,{place:t})}),ft(t.path)&&(0,F.jsx)(rf,{onPick:e=>void pt(t.path,e),value:A?.placeIcons?.[t.path]??t.icon})]}),(0,F.jsxs)(ip,{children:[ve?.path===t.path?(0,F.jsx)(`strong`,{children:(0,F.jsx)(Np,{onCancel:()=>B(null),onChange:e=>B({path:t.path,name:e}),onCommit:()=>void mt(t.path,ve?.name??``),value:ve?.name??``})}):(0,F.jsxs)(`strong`,{children:[t.name,k&&(0,F.jsx)(yp,{onClick:e=>{e.stopPropagation(),me(null),B({path:t.path,name:t.name})},title:O(`Rename folder`),type:`button`,children:(0,F.jsx)(ra,{size:11})})]}),(0,F.jsx)(ap,{children:t.path})]})]},t.path)),k&&(0,F.jsxs)(lp,{onClick:()=>void Ft(e),title:O(`Pin a folder here`),type:`button`,children:[(0,F.jsx)(rp,{children:(0,F.jsx)(Ei,{size:15})}),(0,F.jsxs)(ip,{children:[(0,F.jsx)(`strong`,{children:O(`Add folder`)}),(0,F.jsx)(ap,{children:O(`Pin a directory here`)})]})]})]}):(0,F.jsxs)(op,{children:[t.map(t=>(0,F.jsxs)(sp,{$selected:Oe===t.path,...Rt(e,t.path),onClick:e=>{!k&&!U(t.path,!0)&&c(t.path,Qt(e))},onDoubleClick:()=>!k&&x?.(t.path),onContextMenu:e=>!k&&st(e,t.path,!0),title:t.path,type:`button`,children:[(0,F.jsxs)(gp,{children:[k?(0,F.jsx)(_p,{onClick:e=>{e.stopPropagation(),me(ft(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,F.jsx)(Gs,{place:t,size:15})}):(0,F.jsx)(Gs,{place:t,size:15}),ft(t.path)&&(0,F.jsx)(rf,{onPick:e=>void pt(t.path,e),value:A?.placeIcons?.[t.path]??t.icon})]}),(0,F.jsxs)(cp,{children:[ve?.path===t.path?(0,F.jsx)(`strong`,{children:(0,F.jsx)(Np,{onCancel:()=>B(null),onChange:e=>B({path:t.path,name:e}),onCommit:()=>void mt(t.path,ve?.name??``),value:ve?.name??``})}):(0,F.jsxs)(`strong`,{children:[t.name,k&&(0,F.jsx)(yp,{onClick:e=>{e.stopPropagation(),me(null),B({path:t.path,name:t.name})},title:O(`Rename folder`),type:`button`,children:(0,F.jsx)(ra,{size:11})})]}),(0,F.jsx)(ap,{children:t.path})]}),k&&(0,F.jsx)(vp,{$inline:!0,onClick:n=>{n.stopPropagation(),It(e,t.path)},title:O(`Remove from Quick access`),type:`button`,children:(0,F.jsx)(Ri,{size:11})})]},t.path)),k&&(0,F.jsxs)(lp,{$row:!0,onClick:()=>void Ft(e),title:O(`Pin a folder here`),type:`button`,children:[(0,F.jsx)(Ei,{size:15}),(0,F.jsxs)(cp,{children:[(0,F.jsx)(`strong`,{children:O(`Add folder`)}),(0,F.jsx)(ap,{children:O(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,F.jsx)(Pp,{mode:e.view,onContextMenu:st,onOpen:c,onPick:x,onSelectionChange:S,version:s});case`recent`:return Bt(e);case`drives`:return Ht(e);default:return(0,F.jsx)(Fp,{mode:e.view,onContextMenu:st,onOpen:c,onPick:x,onSelectionChange:S,openOnSingleClick:A?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:A?.showCheckboxes??!0,visibilityVersion:g})}};return(0,F.jsxs)(ff,{$flush:!!A?.overviewBanner,ref:ze,children:[!b&&(0,F.jsxs)(Bf,{$overlay:!!A?.overviewBanner,children:[(0,F.jsx)(Vf,{role:`group`,title:O(`Columns`),children:[1,2,3,4,5].map(e=>(0,F.jsx)(Hf,{$active:_t===e,onClick:()=>void vt({overviewColumns:e}),title:o(O,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),k&&(0,F.jsxs)(Wf,{children:[(0,F.jsxs)(Uf,{onClick:()=>z(e=>!e),onPointerDown:e=>e.stopPropagation(),title:O(`Add a panel`),type:`button`,children:[(0,F.jsx)(Ei,{size:12}),O(`Add panel ▾`)]}),he&&(0,F.jsx)(Gf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,F.jsx)(Kf,{onClick:()=>{z(!1),Pt(e)},type:`button`,children:O(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),k&&(0,F.jsxs)(Uf,{onClick:()=>void yt(),title:O(`Put every panel back the way the app ships it`),type:`button`,children:[(0,F.jsx)(Ti,{size:12}),O(`Restore default panels`)]}),Ne.available&&(0,F.jsx)(ep,{onClick:e=>Ne.open(e.clientX,e.clientY),title:O(`Selection menu`),type:`button`,children:(0,F.jsx)(Aa,{size:14})}),(0,F.jsxs)(Uf,{onClick:()=>{oe(e=>!e),z(!1),me(null),B(null),_e(null)},title:O(k?`Done`:`Edit`),type:`button`,children:[k?(0,F.jsx)(Li,{size:13}):(0,F.jsx)(ra,{size:13}),O(k?`Done`:`Edit`)]})]}),V&&(0,F.jsx)(Sp,{children:V}),A?.overviewBanner&&(0,F.jsxs)(pf,{ref:Be,style:{height:`${He}px`,"--banner-image-width":`${et}px`,"--banner-image-shift":`${rt}px`,"--banner-travel":`${nt}px`,"--banner-overlap":`0px`},children:[(0,F.jsx)(mf,{children:ue?(0,F.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Je({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:I??void 0}):(0,F.jsx)(`img`,{alt:``,onLoad:e=>{let t=N?1920:e.currentTarget.naturalWidth||1920,n=N?1080:e.currentTarget.naturalHeight||1080;Je({width:t,height:n})},ref:Ve,src:I??void 0})}),k&&(0,F.jsx)(hf,{onDoubleClick:()=>{Re.current=null,Ie(null),vt({overviewBannerHeight:220})},onPointerCancel:Dt,onPointerDown:wt,onPointerMove:Et,onPointerUp:Dt,title:O(`Drag to resize; double-click to reset`)})]}),(0,F.jsxs)(gf,{$offset:A?.overviewBanner?100:0,children:[k&&(0,F.jsxs)(_f,{children:[(0,F.jsxs)(vf,{children:[(0,F.jsx)(yf,{children:O(`Banners`)}),A?.overviewBanner&&(0,F.jsxs)(Uf,{onClick:()=>ot(!0),title:O(`Adjust framing…`),type:`button`,children:[(0,F.jsx)(ra,{size:12}),O(`Adjust framing…`)]})]}),(0,F.jsxs)(bf,{children:[(0,F.jsx)(wf,{children:(0,F.jsx)(Tf,{$active:!A?.overviewBanner,onClick:St,title:O(`No banner`),type:`button`,children:(0,F.jsxs)(Of,{children:[(0,F.jsx)(Ri,{size:16}),(0,F.jsx)(`span`,{children:O(`No banner`)})]})})}),Ju.map(e=>(0,F.jsx)(wf,{children:(0,F.jsx)(Tf,{$active:A?.overviewBanner===e.id,onClick:()=>void vt({overviewBanner:e.id}),title:`${O(e.concept)} · ${O(e.preset)}`,type:`button`,children:(0,F.jsx)(sf,{poster:e.url,source:e.id})})},e.id)),Ku.map(e=>(0,F.jsx)(wf,{children:(0,F.jsxs)(Tf,{$active:A?.overviewBanner===e.id,onClick:()=>void vt({overviewBanner:e.id}),title:O(e.name),type:`button`,children:[(0,F.jsx)(sf,{poster:e.poster,source:e.id}),(0,F.jsx)(Df,{children:(0,F.jsx)(Gi,{size:11})})]})},e.id)),(A?.overviewBanners??[]).map(e=>(0,F.jsxs)(wf,{children:[(0,F.jsx)(Tf,{$active:A?.overviewBanner===e||A?.overviewBanner===`url:${e}`,onClick:()=>void vt({overviewBanner:C(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,F.jsx)(sf,{source:e})}),(0,F.jsx)(Ef,{onClick:()=>Ct(e),title:O(`Remove`),type:`button`,children:(0,F.jsx)(Ri,{size:10})})]},e)),(0,F.jsxs)(zf,{onClick:()=>void bt(),title:O(`Add banner…`),type:`button`,children:[(0,F.jsx)(Ei,{size:18}),(0,F.jsx)(`span`,{children:O(`Add banner…`)})]})]}),(0,F.jsxs)(xf,{children:[(0,F.jsx)(Sf,{onChange:e=>fe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&xt()},placeholder:`https://…`,value:R}),(0,F.jsx)(Cf,{disabled:!C(R),onClick:()=>void xt(),type:`button`,children:O(`Add URL`)})]})]}),(0,F.jsx)(qf,{ref:dt,$columns:_t,children:lt.map(e=>{let t=ut.indexOf(e.id);return(0,F.jsxs)(Jf,{children:[(0,F.jsxs)(Yf,{children:[(0,F.jsxs)(Xf,{children:[(0,F.jsxs)(gp,{children:[k?(0,F.jsx)(_p,{onClick:()=>me(W(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,F.jsx)(Ws,{panel:e,size:15})}):(0,F.jsx)(Ws,{panel:e,size:15}),W(e.id)&&(0,F.jsx)(rf,{onPick:t=>Nt(e.id,t),value:e.icon})]}),k?(0,F.jsx)($f,{defaultValue:e.title,onBlur:t=>kt(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,F.jsx)(Qf,{children:O(e.title)})]}),(0,F.jsxs)(Zf,{children:[!k&&e.kind===`recent`&&(0,F.jsx)(Uf,{onClick:()=>void Ue().then(u),title:O(`Clear`),type:`button`,children:O(`Clear`)}),!k&&e.kind===`frequent`&&(0,F.jsx)(Uf,{onClick:()=>void We().then(()=>m?.()),title:O(`Clear the frequent list`),type:`button`,children:O(`Clear`)}),!k&&(e.kind===`home`||e.kind===`folder`)&&(0,F.jsx)(Uf,{onClick:()=>c(e.path??a),title:O(`Open folder`),type:`button`,children:O(`Open`)}),k&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ep,{$active:e.pinned,onClick:()=>jt(e.id),title:e.pinned?O(`Unpin from the sidebar`):O(`Pin to the sidebar`),type:`button`,children:(0,F.jsx)(ji,{size:12})}),(0,F.jsx)(ep,{$active:e.view===`list`,onClick:()=>At(e.id,`list`),title:O(`List`),type:`button`,children:(0,F.jsx)(Mi,{size:13})}),(0,F.jsx)(ep,{$active:e.view===`grid`,onClick:()=>At(e.id,`grid`),title:O(`Grid`),type:`button`,children:(0,F.jsx)(Ni,{size:13})}),(0,F.jsx)(ep,{disabled:t===0,onClick:()=>Ot(e.id,-1),title:O(`Move up`),type:`button`,children:(0,F.jsx)(wi,{size:12})}),(0,F.jsx)(ep,{disabled:t===ut.length-1,onClick:()=>Ot(e.id,1),title:O(`Move down`),type:`button`,children:(0,F.jsx)(wi,{size:12})}),(0,F.jsx)(ep,{onClick:()=>Mt(e.id),title:O(`Remove panel`),type:`button`,children:(0,F.jsx)(Ri,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Wt(e):(0,F.jsx)(pp,{children:Wt(e)})]},e.id)})})]}),at&&I&&(0,F.jsx)(cf,{height:He,offset:Xe,onCancel:()=>ot(!1),onSave:e=>{vt({overviewBannerOffset:e}),ot(!1)},source:I,video:ue}),H&&(0,F.jsx)(Do,{directory:a,menu:{x:H.x,y:H.y,paths:[H.target.path]},onClose:()=>Pe(null),onCopy:(e,t)=>void Tt(e,t),onAddToTray:ee,onAddFavorite:te,onRemoveFavorite:ne,favoritePaths:ie,onExtractArchive:T,onOpen:ct,onOpenFile:e=>x?x(e):void xe(e),shortcuts:Xt,target:H.target})]})}function Np({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=L();return(0,F.jsxs)(bp,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,F.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,F.jsx)(xp,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,F.jsx)(Ri,{size:11})}),(0,F.jsx)(xp,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,F.jsx)(Li,{size:12})})]})}function Pp({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=L(),[c,l]=(0,E.useState)(null),[u,d]=(0,E.useState)(null),f=Wn(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,E.useEffect)(()=>{Ve().then(l,()=>l([]))},[a]),!c)return(0,F.jsx)(Cp,{children:s(`Reading…`)});if(c.length===0)return(0,F.jsx)(Cp,{children:s(`Folders you open often show up here.`)});let m=e=>o(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,F.jsx)(tp,{children:c.map(e=>{let i=Gn(f,e.path);return(0,F.jsxs)(np,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Qt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,F.jsx)(rp,{children:i&&f.useIcons?(0,F.jsx)(Gs,{place:i,size:18}):(0,F.jsx)(lc,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(ip,{children:[(0,F.jsx)(`strong`,{children:i?.name||e.name}),(0,F.jsx)(ap,{children:m(e)})]})]},e.path)})}):(0,F.jsx)(op,{children:c.map(e=>{let i=Gn(f,e.path);return(0,F.jsxs)(sp,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Qt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,F.jsx)(Gs,{place:i,size:15}):(0,F.jsx)(lc,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,F.jsxs)(cp,{children:[(0,F.jsx)(`strong`,{children:i?.name||e.name}),(0,F.jsx)(ap,{children:m(e)})]})]},e.path)})})}function Fp({path:e,mode:n,onOpen:r,onContextMenu:i,onPick:a,onSelectionChange:o,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:l,visibilityVersion:u}){let d=L(),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=Wn();return(0,E.useEffect)(()=>{e&&(p(null),Se(e).then(p,()=>p(null)))},[e,u]),(0,E.useEffect)(()=>{if(P.available)return P.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Se(e,!1).then(p,()=>void 0)})},[e]),f?n===`list`?(0,F.jsx)(fp,{children:(0,F.jsx)(Sl,{error:null,listing:f,loading:!1,onOpen:a??r,onOpenFile:a??(e=>void xe(e)),onRefresh:()=>void Se(e,!1).then(p,()=>void 0),onRename:(e,n)=>p(r=>r&&{...r,entries:r.entries.map(r=>t(r.fullPath,e)?{...r,name:v(n),fullPath:n}:r)}),onSelectionChange:o,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:l,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...V,columns:ye.columns??[]}})}):(0,F.jsx)(pp,{children:f.entries.length===0?(0,F.jsx)(Cp,{children:d(`This folder is empty.`)}):(0,F.jsx)(mp,{children:f.entries.map(e=>{let t=Gn(g,e.fullPath);return(0,F.jsxs)(hp,{$selected:m===e.fullPath,onClick:t=>{a?(h(e.fullPath),o?.([e.fullPath])):e.isDirectory?r(e.fullPath,Qt(t)):xe(e.fullPath)},onDoubleClick:()=>a?.(e.fullPath),onContextMenu:t=>i?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&g.useIcons?(0,F.jsx)(Gs,{place:t,size:16}):(0,F.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,F.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,F.jsx)(Cp,{children:d(`Reading…`)})}var Ip=`yafm://`,Lp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Rp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function zp(e){return`${Ip}${e===`home`?`overview`:e}`}function Bp(e){return Rp(e)?Lp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Vp(e){let t=e.trim();if(t.length===0)return null;if(!Rp(t))return t;let n=Lp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?zp(n):null}function Hp({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=L(),s=Wn(),[c,l]=(0,E.useState)(!1),[u,d]=(0,E.useState)(``),[f,p]=(0,E.useState)([]),[m,h]=(0,E.useState)(0),[g,_]=(0,E.useState)(null),[v,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(null),S=(0,E.useRef)(null),ee=(0,E.useRef)(null),te=(0,E.useRef)(0);(0,E.useEffect)(()=>{if(!qc(e)){x(null);return}let t=Jc(e);if(!t){x(null);return}let n=!0;return Vc().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);x({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&x(null)),()=>{n=!1}},[e]),(0,E.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,E.useEffect)(()=>{r&&r!==te.current&&(te.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,E.useEffect)(()=>{c&&S.current?.select()},[c]),(0,E.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let ne=()=>{d(e.replace(/\\/g,`/`)),l(!0)},re=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,E.useEffect)(()=>{if(!c){p([]);return}let e=Kp(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{Se(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let C=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,E.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=ee.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,F.jsxs)(Qp,{onPointerDown:e=>e.stopPropagation(),ref:ee,children:[(0,F.jsxs)(nm,{children:[(0,F.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?C(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):re(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:S,spellCheck:!1,value:u}),(0,F.jsx)(rm,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,F.jsx)(Ri,{size:12})}),(0,F.jsx)(rm,{$apply:!0,onClick:re,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,F.jsx)(Li,{size:14})})]}),f.length>0&&g&&(0,Za.createPortal)((0,F.jsx)($p,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,F.jsxs)(em,{$active:t===m,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,F.jsx)(lc,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,F.jsx)(tm,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:Up(e,b)??Gp(e,s.places);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(qp,{onClick:ne,title:o(`Click to type a path`),children:w.map((t,n)=>(0,F.jsxs)(Jp,{$last:n===w.length-1,children:[n>0&&(0,F.jsx)(Xp,{children:(0,F.jsx)(ki,{size:9})}),(0,F.jsxs)(Zp,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,F.jsx)(Yp,{children:(0,F.jsx)(Gs,{place:t.place,size:13})}):t.icon&&(0,F.jsx)(Yp,{children:t.icon}),t.label]})]},t.path))}),v&&(0,F.jsx)(ho,{items:[{label:o(`Open`),icon:(0,F.jsx)(Oi,{size:14}),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),icon:(0,F.jsx)(Ei,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`Copy as path`),icon:(0,F.jsx)(Ca,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...Rp(v.path)?[{label:o(`Open with…`),icon:(0,F.jsx)(Yi,{size:14}),onSelect:()=>void zt(v.path)},{label:o(`Properties`),icon:(0,F.jsx)(Ai,{size:14}),onSelect:()=>void Rt([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function Up(e,t){let n=Jc(e);if(!n)return null;let r=Yc(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,F.jsx)(_a,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Wp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Gp(e,n){let r=Wp(e),i=-1,a=null;for(let e of Object.values(n)){if(e.name.trim().length===0)continue;let n=r.findIndex(n=>t(n.path,e.path));n>i&&(i=n,a=e)}return a&&i>=0&&r.splice(0,i+1,{label:a.name,path:r[i].path,place:a}),r}function Kp(e){if(Rp(e)||qc(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var qp=_.div`
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
`,Jp=_.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Yp=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Xp=_.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Zp=_.button`
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
`,Qp=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,$p=_.div`
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
`,em=_.button`
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
`,tm=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nm=_.div`
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
`,rm=_.button`
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
`,im=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,F.jsx)(`path`,{d:`M4 4v6h6`})]});function am({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,showDetails:i=!0,onShowDetails:a,videoAudio:s=!1,videoAutoplay:c=!1,platform:l}){let u=L(),d=cl(`recycle`),p=l===`windows`,[m,h]=(0,E.useState)([]),[g,_]=(0,E.useState)([]),[v,b]=(0,E.useState)(!1),[x,S]=(0,E.useState)(null),[ee,te]=(0,E.useState)(!0),[ne,re]=(0,E.useState)(!1),[C,w]=(0,E.useState)(null),[ie,T]=(0,E.useState)(!1),[D,O]=(0,E.useState)(()=>new Set),[ae,k]=(0,E.useState)(null),[oe,A]=(0,E.useState)(()=>{let e=rr(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[j,M]=(0,E.useState)(null),[N,se]=(0,E.useState)(null),[ce,P]=(0,E.useState)(()=>{let e=tr(`yafm.recycle.preview.width`,320);return e>=220?e:320}),le=(0,E.useRef)(null),ue=e=>{P(e),nr(`yafm.recycle.preview.width`,e)},de=(0,E.useCallback)(async()=>{te(!0),w(null);try{h(await Me(ie))}catch(e){w(e instanceof Error?e.message:String(e))}finally{te(!1)}},[ie]),I=(0,E.useCallback)(async()=>{try{h(await Me(ie))}catch{}},[ie]);(0,E.useEffect)(()=>{de()},[de]),(0,E.useEffect)(()=>{let e=window.setInterval(()=>void I(),1e4);return()=>window.clearInterval(e)},[I]),(0,E.useEffect)(()=>{ie||(_([]),b(!1),S(null))},[ie]),(0,E.useEffect)(()=>{O(e=>{let t=new Set(m.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[m]);let R=(0,E.useMemo)(()=>{let e=new Set(m.map(e=>e.id));return[...m,...g.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=om(e,t,oe.column);return oe.descending?-n:n})},[m,g,oe]),fe=(0,E.useMemo)(()=>!t?.open||t.query.trim().length===0?R:R.filter(e=>In(e.name,t)||In(e.originalPath,t)),[R,t?.open,t?.query,t?.matchCase,t?.regex]),pe=(0,E.useRef)(null);nf(pe,t??null,`[data-search-block]`,n??(()=>void 0),[R]),(0,E.useEffect)(()=>{O(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,E.useEffect)(()=>{r&&O(new Set(fe.map(e=>e.id)))},[r]);let me=(0,E.useMemo)(()=>R.filter(e=>D.has(e.id)),[R,D]),he=me.filter(e=>e.removable&&!e.isOrphan),z=me.filter(e=>e.removable),ge=(e,t)=>{let n=t.ctrlKey||t.metaKey;O(r=>{if(t.shiftKey&&ae){let t=R.findIndex(e=>e.id===ae),i=R.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(R[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),k(e.id)},_e=(0,E.useCallback)(()=>O(new Set(fe.map(e=>e.id))),[fe]),ve=fe.length>0&&fe.every(e=>D.has(e.id)),B=(0,E.useCallback)(async()=>{let e=he.map(e=>e.id);if(e.length!==0){re(!0);try{let t=await Pe(e);t.ok||await za(o(u,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),O(new Set),await de()}finally{re(!1)}}},[de,he,u]),V=(0,E.useCallback)(async()=>{let e=z.map(e=>e.id);if(se(null),e.length!==0){re(!0);try{let t=await Fe(e);!t.ok&&!t.cancelled&&await za(o(u,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),O(new Set),await de()}finally{re(!1)}}},[z,de,u]),ye=async()=>{se(null),re(!0);try{await H(ie),O(new Set),await de()}finally{re(!1)}},be=async()=>{re(!0),S(null);try{let e=await Le();if(e.cancelled){S(`Elevation was declined — nothing was read.`);return}if(e.failed){S(`The elevated helper could not produce a report. Try again.`);return}_(e.entries),b(!0)}finally{re(!1)}},xe=async()=>{re(!0),se(null);try{await Re(),_([]),b(!1),S(null),await de()}finally{re(!1)}},Se=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},Ce=e=>{navigator.clipboard.writeText(e.originalPath)},we=(e,t)=>{e.preventDefault(),t&&!D.has(t.id)&&O(new Set([t.id])),M({x:e.clientX,y:e.clientY})};(0,E.useEffect)(()=>(rl(`recycle`,D.size>0?(e,t)=>M({x:e,y:t}):null),()=>rl(`recycle`,null)),[D]),(0,E.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),_e()):e.key===`Delete`?(e.preventDefault(),z.length>0&&se(`delete`)):e.key===`Enter`&&he.length>0?(e.preventDefault(),B()):e.key===`Escape`&&(O(new Set),M(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[z.length,he.length,B,_e]);let Te=[{label:u(`Restore`),icon:(0,F.jsx)(im,{width:14,height:14}),disabled:he.length===0,onSelect:()=>void B()},{label:u(`Delete permanently`),icon:(0,F.jsx)(Ii,{size:14}),danger:!0,disabled:z.length===0,onSelect:()=>se(`delete`)},{label:u(`Properties`),icon:(0,F.jsx)(Ai,{size:14}),disabled:me.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=me;e&&Ie(e.id)}},{label:u(`Open original location`),icon:(0,F.jsx)(bi,{size:14}),disabled:me.length!==1,onSelect:()=>{let[e]=me;e&&Se(e)}},{label:u(`Copy original path`),icon:(0,F.jsx)(Ca,{size:14}),disabled:me.length!==1,onSelect:()=>{let[e]=me;e&&Ce(e)}},{label:u(`Select all`),separatorBefore:!0,onSelect:_e},{label:u(`Refresh`),icon:(0,F.jsx)(Ti,{size:14}),onSelect:()=>void de()}],Ee=me.length>0?me[0]:null,De=Ee?{name:Ee.name,path:Ee.contentPath||Ee.originalPath,isDirectory:Ee.isDirectory,size:Ee.size,modified:Ee.deleted,fields:[{label:u(`Type`),value:u(cm(Ee))},{label:u(`Original location`),value:Ee.originalPath},{label:u(`Date deleted`),value:y(Ee.deleted)},{label:u(`Size`),value:Ee.isDirectory?`—`:f(Ee.size)},...Ee.owner?[{label:u(`Owner`),value:Ee.owner}]:[],{label:u(`Status`),value:Ee.isOrphan?u(`Metadata only`):Ee.removable?u(`Restorable`):u(`Other profile`)}]}:null;return(0,F.jsxs)(um,{ref:le,onContextMenu:e=>we(e),children:[(0,F.jsxs)(dm,{children:[(0,F.jsxs)(fm,{children:[(0,F.jsx)(Ii,{size:16}),(0,F.jsx)(`span`,{children:u(`Recycle Bin`)}),(0,F.jsxs)(pm,{children:[ee?`…`:o(u,R.length,`1 item`,`{count} items`),D.size>0&&` · ${u(`{count} selected`,{count:D.size})}`]})]}),(0,F.jsxs)(mm,{children:[(0,F.jsx)(gm,{$on:ie,onClick:()=>T(e=>!e),title:u(`Show metadata records whose content is already gone`),type:`button`,children:u(`Orphans`)}),ie&&p&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(hm,{disabled:ne||v,onClick:()=>void be(),title:u(v?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:u(ne?`Working…`:v?`Admin view loaded`:`Show all (admin)…`)}),v&&g.length>0&&(0,F.jsx)(hm,{disabled:ne,onClick:()=>se(`purge`),type:`button`,children:u(`Delete every orphan`)})]}),(0,F.jsx)(hm,{disabled:ne||he.length===0,onClick:()=>void B(),type:`button`,children:u(`Restore`)}),(0,F.jsx)(hm,{$danger:!0,disabled:ne||z.length===0,onClick:()=>se(`delete`),type:`button`,children:u(`Delete`)}),(0,F.jsx)(hm,{disabled:ne||R.length===0,onClick:()=>se(`empty`),type:`button`,children:u(`Empty`)}),(0,F.jsx)(_m,{onClick:()=>void de(),title:u(`Refresh`),type:`button`,children:(0,F.jsx)(Ti,{size:14})}),d.available&&(0,F.jsx)(_m,{onClick:e=>d.open(e.clientX,e.clientY),title:u(`Selection menu`),type:`button`,children:(0,F.jsx)(Aa,{size:14})})]})]}),x&&(0,F.jsx)(Rm,{children:x}),C&&(0,F.jsx)(zm,{children:C}),!C&&!ee&&(t?.open&&t.query.trim().length>0?fe.length===0:R.length===0)&&(0,F.jsx)(zm,{children:t?.open&&t.query.trim().length>0?u(`No matching items.`):u(`The recycle bin is empty.`)}),R.length>0&&(0,F.jsxs)(Lm,{children:[(0,F.jsxs)(vm,{ref:pe,children:[(0,F.jsxs)(bm,{children:[(0,F.jsx)(Em,{$checked:ve,$partial:!ve&&D.size>0,onClick:()=>ve?O(new Set):_e(),title:u(ve?`Select none`:`Select all`),type:`button`,children:ve?(0,F.jsx)(Li,{size:9}):D.size>0&&(0,F.jsx)(Dm,{})}),(0,F.jsxs)(xm,{onClick:()=>Oe(`name`),type:`button`,children:[u(`Name`),sm(oe,`name`)]}),(0,F.jsxs)(xm,{onClick:()=>Oe(`original`),type:`button`,children:[u(`Original location`),sm(oe,`original`)]}),(0,F.jsxs)(xm,{onClick:()=>Oe(`deleted`),type:`button`,children:[u(`Date deleted`),sm(oe,`deleted`)]}),(0,F.jsxs)(xm,{onClick:()=>Oe(`size`),type:`button`,children:[u(`Size`),sm(oe,`size`)]}),(0,F.jsxs)(xm,{onClick:()=>Oe(`type`),type:`button`,children:[u(`Type`),sm(oe,`type`)]}),(0,F.jsx)(`span`,{})]}),(0,F.jsx)(Sm,{onClick:e=>{e.target===e.currentTarget&&O(new Set)},children:R.map(e=>(0,F.jsxs)(Cm,{$checked:D.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>ge(e,t),onContextMenu:t=>we(t,e),onDoubleClick:()=>{O(new Set([e.id])),k(e.id),a?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,F.jsx)(Tm,{$checked:D.has(e.id),children:D.has(e.id)&&(0,F.jsx)(Li,{size:9})}),(0,F.jsxs)(Om,{children:[(0,F.jsx)(lm,{entry:e}),(0,F.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,F.jsx)(Im,{children:u(`Metadata only`)}),e.owner&&(0,F.jsx)(Im,{$other:!0,children:u(`Other profile`)})]}),(0,F.jsx)(Am,{children:e.originalPath}),(0,F.jsx)(jm,{children:y(e.deleted)}),(0,F.jsx)(Mm,{children:e.isDirectory?`—`:f(e.size)}),(0,F.jsx)(Nm,{children:u(cm(e))}),(0,F.jsxs)(Pm,{children:[e.removable&&!e.isOrphan&&(0,F.jsx)(Fm,{onClick:t=>{t.stopPropagation(),Pe([e.id]).then(de)},title:u(`Restore to its original folder`),type:`button`,children:(0,F.jsx)(im,{})}),e.removable&&(0,F.jsx)(Fm,{$danger:!0,onClick:t=>{t.stopPropagation(),O(new Set([e.id])),se(`delete`)},title:e.isOrphan?u(`Remove the leftover record`):u(`Delete permanently`),type:`button`,children:(0,F.jsx)(Ii,{size:13})})]})]},e.id))})]}),i&&(0,F.jsx)(ps,{emptyNote:u(`Nothing selected.`),info:De,onWidth:ue,selectionNote:me.length>1?o(u,me.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:s,videoAutoplay:c,width:ce})]}),j&&(0,F.jsx)(ho,{items:Te,onClose:()=>M(null),x:j.x,y:j.y}),(0,F.jsx)(ns,{confirmLabel:u(N===`empty`?`Empty the bin`:N===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:N===`empty`?o(u,R.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):N===`purge`?u(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):o(u,z.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>se(null),onConfirm:()=>{N===`empty`?ye():N===`purge`?xe():V()},open:N!==null,title:u(N===`empty`?`Empty the recycle bin`:N===`purge`?`Delete every orphan`:`Delete permanently`)})]});function Oe(e){A(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return ir(`yafm.recycle.sort`,n),n})}}function om(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return cm(e).localeCompare(cm(t),void 0,{sensitivity:`base`})}}function sm(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function cm(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function lm({entry:e}){let t=_n(e.originalPath,e.isDirectory);return(0,F.jsx)(km,{children:t?(0,F.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,F.jsx)(bi,{}):(0,F.jsx)(xi,{})})}var um=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,dm=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,fm=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,pm=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,mm=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,hm=_.button`
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
`,gm=_(hm)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,_m=_.button`
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
`,vm=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,ym=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,bm=_.div`
    display: grid;
    grid-template-columns: ${ym};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,xm=_.button`
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
`,Sm=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Cm=_.div`
    display: grid;
    grid-template-columns: ${ym};
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
`,wm=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Tm=_.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Em=_.button`
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
`,Dm=_.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Om=_(wm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,km=_.span`
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
`,Am=_(wm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,jm=_(wm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Mm=_(wm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Nm=_(wm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Pm=_.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Fm=_.button`
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
`,Im=_.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Lm=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Rm=_.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,zm=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Bm(){return P.available?(await P.request(`app.tags`)).tags:[]}async function Vm(e){return!P.available||!e?!1:(await P.request(`app.tags.delete`,{name:e})).ok}async function Hm(e,t){return!P.available||!e?[]:(await P.request(`app.tags.create`,{name:e,color:t})).tags}async function Um(e,t){return!P.available||!e?!1:(await P.request(`app.tags.color`,{name:e,color:t})).ok}async function Wm(e,t){return!P.available||!e||!t?!1:(await P.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function Gm(){let e=L();return(0,F.jsx)(Km,{title:e(`Always applies to every folder`),children:e(`Global`)})}var Km=_.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,qm=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function Jm(e){return`"${e.replaceAll(`"`,``)}"`}function Ym(e){let t=document.documentElement.style;for(let n of qm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Jm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Xm(){return P.available?(await P.request(`app.fonts`)).fonts??[]:[]}function Zm({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=L(),[s,c]=(0,E.useState)(null),[l,u]=(0,E.useState)(``),d=(0,E.useRef)(null),f=(0,E.useRef)(null),p=(0,E.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,E.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Qm,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,F.jsx)($m,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,F.jsx)(eh,{children:`▾`})]}),s&&(0,Za.createPortal)((0,F.jsxs)(th,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,F.jsxs)(nh,{children:[(0,F.jsx)(Ci,{size:12}),(0,F.jsx)(rh,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(ah,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,F.jsxs)(sh,{children:[n,` `,(0,F.jsx)(lh,{children:o(`(default)`)})]}),!e&&(0,F.jsx)(Li,{size:11})]}),p.map(t=>(0,F.jsxs)(ah,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,F.jsxs)(oh,{children:[(0,F.jsx)(sh,{children:t}),(0,F.jsx)(ch,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,F.jsx)(Li,{size:11})]},t)),p.length===0&&(0,F.jsx)(uh,{children:o(`No matching font.`)})]})]}),document.body)]})}var Qm=_.button`
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
`,$m=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,eh=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,th=_.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${co}
`,nh=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,rh=_.input`
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
`,ih=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,ah=_.button`
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
`,oh=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,sh=_.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ch=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lh=_.span`
    color: var(--text-muted);
    font-size: 10px;
`,uh=_.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,dh=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],fh=`en`,ph=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],mh=new Date(2026,10,5,16,8).getTime(),hh=`system`,gh={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},_h=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],vh=`yafm.colors.recent`;function yh(){let e=rr(vh);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function bh({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let a=L(),[s,c]=(0,E.useState)([]),[l,u]=(0,E.useState)(null),[d,p]=(0,E.useState)(null),[g,_]=(0,E.useState)(null),[y,x]=(0,E.useState)(``),[S,ee]=(0,E.useState)(`file`),[te,re]=(0,E.useState)(!1),[ie,T]=(0,E.useState)(!1),[D,O]=(0,E.useState)(null),[ae,k]=(0,E.useState)(!1),[oe,A]=(0,E.useState)(!1),[j,M]=(0,E.useState)(null),[N,se]=(0,E.useState)(null),[ce,P]=(0,E.useState)(null),[le,de]=(0,E.useState)(!1),[I,R]=(0,E.useState)(null),[fe,pe]=(0,E.useState)(!1),[me,he]=(0,E.useState)(null),[z,ge]=(0,E.useState)(null),[_e,ve]=(0,E.useState)(!1),[B,V]=(0,E.useState)([]),[be,xe]=(0,E.useState)(null),[Se,Ce]=(0,E.useState)(!1),[we,Te]=(0,E.useState)(null),[Ee,De]=(0,E.useState)(``),[Oe,ke]=(0,E.useState)(Ks),[Ae,je]=(0,E.useState)(null),[Me,Ne]=(0,E.useState)(null),[H,Pe]=(0,E.useState)(``),[Fe,Ie]=(0,E.useState)(``),[Le,Re]=(0,E.useState)(null),[ze,Be]=(0,E.useState)(yh),[Ve,He]=(0,E.useState)({}),[Ue,We]=(0,E.useState)(null),[Ke,qe]=(0,E.useState)(null),[Je,Ze]=(0,E.useState)(!1),[Qe,at]=(0,E.useState)(null),[U,st]=(0,E.useState)(null),[ut,St]=(0,E.useState)(null),[Tt,Et]=(0,E.useState)(_h[0].id),[Dt,Ot]=(0,E.useState)([]),[kt,At]=(0,E.useState)(null),[jt,Mt]=(0,E.useState)(null),[Nt,Pt]=(0,E.useState)(null),[Ft,It]=(0,E.useState)(!1),[Lt,Rt]=(0,E.useState)(``),zt=(0,E.useRef)(null),Bt=(0,E.useRef)({}),Vt=d?.defaultView??ye,Ht=d?.themePresets??[],Ut=e?.platform===`windows`,Wt=Ut?N?N.registered&&N.pathMatches:!1:d?.archiveHandler??!1,Gt=N?.registered??d?.archiveHandler??!1,Kt=Ut?ce?ce.registered&&ce.pathMatches:!1:d?.defaultFileManager??!1;nf(zt,r??null,`section`,i??(()=>void 0),[d]),(0,E.useEffect)(()=>{let e=zt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Et(_h[_h.length-1].id);return}let n=t+110,r=_h[0].id;for(let{id:e}of _h){let t=Bt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Et(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let qt=e=>t=>{Bt.current[e]=t},Jt=e=>{Bt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),Et(e)};(0,E.useEffect)(()=>{t&&Jt(t)},[t]),(0,E.useEffect)(()=>{ue().then(e=>c(e.available),()=>c([]))},[]),(0,E.useEffect)(()=>{Xm().then(Ot,()=>Ot([]))},[]),(0,E.useEffect)(()=>{Ct().then(Mt,()=>Mt(null))},[]),(0,E.useEffect)(()=>{ct().then(qe,()=>void 0)},[]),(0,E.useEffect)(()=>{Ge().then(u,()=>u(null)),Ye().then(p,()=>p(null)),bt().then(k,()=>k(!1)),tt().then(se,()=>se(null)),$e().then(P,()=>P(null)),Bm().then(V,()=>V([]))},[]),(0,E.useEffect)(()=>{let e=()=>void vt().then(O,()=>O(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let G=async e=>{if(!d)return;let t={...d,...e};Object.keys(e).every(e=>t[e]===d[e])||(p(t),fn(),p(await it(t)),n())},Yt=async e=>{let t=await Fa(e);if(!t)return;let n=d?.backgroundCustom??[];await G({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},K=async()=>{let e=Lt.trim();if(!d||!C(e))return;let t=d.backgroundCustom??[];Rt(``),await G({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Zt=e=>{if(!d)return;let t=d.backgroundSource;G({backgroundCustom:d.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},Qt=async()=>{if(!d)return;let t=await Pa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;d.protectedPaths.includes(r)||await G({protectedPaths:[...d.protectedPaths,r]})},q=()=>{let e=H.trim();d&&e&&!d.protectedPaths.includes(e)&&(Pe(``),G({protectedPaths:[...d.protectedPaths,e]}))},tn=()=>{if(!d||!Ae)return;let e=Ae.value.trim(),t=Ae.from;je(null),e.length!==0&&e!==t&&G({protectedPaths:d.protectedPaths.map(n=>n===t?e:n)})},nn=e=>{d&&G({protectedPaths:d.protectedPaths.filter(t=>t!==e)})},rn=async()=>{let e=await Xe();e.length>0&&await G({protectedPaths:e})},an=()=>{if(!d||!Me)return;let e=Me.value.trim(),t=Me.from;Ne(null),e&&e!==t&&G({directoryIndexBlacklist:d.directoryIndexBlacklist.map(n=>n===t?e:n)})},on=()=>{let e=Fe.trim();d&&e&&!d.directoryIndexBlacklist.includes(e)&&(Ie(``),G({directoryIndexBlacklist:[...d.directoryIndexBlacklist,e]}))},sn=async()=>{if(!d)return;let t=await Pa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;d.directoryIndexBlacklist.includes(r)||await G({directoryIndexBlacklist:[...d.directoryIndexBlacklist,r]})},cn=e=>{d&&G({directoryIndexBlacklist:d.directoryIndexBlacklist.filter(t=>t!==e)})},ln=()=>{G({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},un=()=>{if(!d||Le===null)return;let e=Le.trim()||`yyyy/MM/dd HH:mm`;Re(null),e!==d.timeFormatPattern&&G({timeFormatPattern:e})},dn=(e,t)=>{Be(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return ir(vh,i),i})},J=h(d?.accentColor,ne),pn=h(d?.secondaryColor,b),mn=(e,t)=>{d&&(dn(`accent`,J),dn(`secondary`,pn),G({accentColor:e,secondaryColor:t}))},hn=(e,t)=>{d&&(dn(e,e===`accent`?J:pn),G(e===`accent`?{accentColor:t}:{secondaryColor:t}))},gn=async()=>{Ze(!0),at(null);try{qe(await lt())}catch{at(a(`Could not check for updates.`))}finally{Ze(!1)}},_n=async()=>{at(null),st({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await ft();e.ok||vn(e.error??``)}catch(e){vn(e instanceof Error?e.message:String(e))}},vn=e=>st(t=>t&&{...t,phase:`error`,error:e}),yn=async()=>{try{await pt()}catch(e){at(e instanceof Error?e.message:String(e))}},bn=async()=>{st(e=>e&&{...e,phase:`installing`});try{let e=await mt();e.ok||vn(e.error??a(`The update failed.`))}catch(e){vn(e instanceof Error?e.message:String(e))}};(0,E.useEffect)(()=>ht(e=>st(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,E.useEffect)(()=>gt(e=>st(t=>t&&{...t,changelog:e})),[]);let xn=async()=>{if(!d||!Ue)return;let e=Ue.name.trim()||`${Ue.accent.toUpperCase()} / ${Ue.secondary.toUpperCase()}`,t=[...d.themePresets,{name:e,accent:Ue.accent,secondary:Ue.secondary}];We(null),await G({themePresets:t})},Sn=async e=>{d&&await G({themePresets:d.themePresets.filter((t,n)=>n!==e)})},Cn=e=>{let t=ut;St(null),t&&t.role===e&&(e===`accent`?J:pn).toLowerCase()!==t.color.toLowerCase()&&dn(e,t.color)},wn=async()=>{let e=Ee.trim();if(e&&!Se){Ce(!0),Te(null);try{V(await Hm(e,Oe)),De(``)}catch{Te(a(`Could not add the tag.`))}finally{Ce(!1)}}},Tn=async(e,t)=>{V(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Um(e,t)||Te(a(`Could not change the tag's color.`))},En=async e=>{if(Se)return;Ce(!0),Te(null);let t=await Vm(e);V(await Bm()),t||Te(`"${e}" is still used by a folder whose index could not be updated.`),Ce(!1)},Dn=async()=>{let e=be;if(!e||Se)return;let t=e.value.trim();t.length===0||t===e.name?xe(null):(Ce(!0),Te(null),await Wm(e.name,t)?(V(await Bm()),xe(null)):Te(`Could not rename "${e.name}".`),Ce(!1))},On=async e=>{let t=new Set(Vt.columns??ye.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=pl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await G({defaultView:{...Vt,columns:n}})},kn=async()=>{if(oe)return;let e=!ae;A(!0),M(null);try{let t=await xt(e);k(t),p(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&M(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{M(`The request to Windows failed. Try again.`)}finally{A(!1)}},An=async()=>{if(fe||!d)return;let e=!Kt;pe(!0),he(null);try{let t=await et(e);P(t);let r=Ut?t.registered&&t.pathMatches:e;p(e=>e&&{...e,defaultFileManager:r}),n(),Ut&&r!==e&&he(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{he(`The request to Windows failed. Try again.`)}finally{pe(!1)}},jn=async()=>{if(!le){de(!0),R(null);try{let e=await nt();se(e);let t=e.registered&&e.pathMatches;p(e=>e&&{...e,archiveHandler:t}),n(),t||R(`Windows did not accept the archive registration. Try again.`)}catch{R(`The request to Windows failed. Try again.`)}finally{de(!1)}}},Mn=async()=>{if(!le){de(!0),R(null);try{let e=await rt();se(e),p(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&R(`The registration is still there. Try turning it off again.`)}catch{R(`The request to Windows failed. Try again.`)}finally{de(!1)}}},Nn=async(e,t)=>{if(!d)return;let n={...d.extensionIcons};t===null?delete n[e]:n[e]=t,await G({extensionIcons:n})},Pn={...Xt,...d?.shortcuts};(0,E.useEffect)(()=>{if(!z)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){ge(null);return}let t=$t(e);t&&(ge(null),G({shortcuts:{...Pn,[z]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[z,d]),(0,E.useEffect)(()=>{if(!_e)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){ve(!1);return}let t=$t(e);t&&(ve(!1),G({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[_e,d]);let Fn=async e=>{await G({recentLimit:Math.min(Math.max(e,0),50)})},In=(e,t)=>{let n=t??Ve[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};He(t=>({...t,[e]:void 0})),G(i)},Ln=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;At(null),await G({sharePortMode:`custom`,sharePort:n}),await Gc(n,`custom`)},Rn=async e=>{let t=e===`custom`,n=t?d?.sharePort??8080:null;await G({sharePortMode:t?`custom`:`random`,sharePort:n}),await Gc(n,t?`custom`:`random`)},zn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;It(!0),Pt(null);try{let e=await wt(t);Mt(e),Pt(e.error),e.error||await G({startupMode:t})}finally{It(!1)}},Bn=async e=>{await G({galleryRoots:e.length>0?e:null})},Vn=async()=>{let e=await Pa(),t=d?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await Bn([...t,e])},Hn=async()=>{let e=y.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await Nn(e,S),x(``))},Un=async()=>{T(!0);try{let e=await Pa();if(!e)return;let t=await Fa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await ot(e.replace(/[\\/][^\\/]+$/,``),v(e),`file:${t}`)&&(fn(),_({folder:e,icon:t}))}finally{T(!1)}},Wn=async(e,t)=>{let n={...d?.fonts};t?n[e]=t:delete n[e],await G({fonts:n})};return(0,F.jsxs)(Mh,{children:[(0,F.jsxs)(Nh,{ref:zt,children:[(0,F.jsxs)(Ph,{ref:qt(`application`),children:[(0,F.jsx)(jh,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:a(`Version`)}),(0,F.jsx)(xg,{children:e?`v${e.version}`:`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:a(`Platform`)}),(0,F.jsx)(xg,{children:e?.platform??`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Language`)}),(0,F.jsx)($,{children:a(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(Oh,{disabled:!d,onChange:e=>void G({language:e}),options:[hh,...s.length>0?s:[fh]],value:d?.language??fh})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Picker window size`)}),(0,F.jsx)($,{children:a(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(jg,{inputMode:`numeric`,onBlur:e=>In(`width`,e.currentTarget.value),onChange:e=>He(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ve.width??String(d?.pickerWindowWidth??1200)}),(0,F.jsx)(xg,{children:`×`}),(0,F.jsx)(jg,{inputMode:`numeric`,onBlur:e=>In(`height`,e.currentTarget.value),onChange:e=>He(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ve.height??String(d?.pickerWindowHeight??800)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Web server port`)}),(0,F.jsx)($,{children:a(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(Ao,{disabled:!d,onChange:e=>void Rn(e),options:[{value:`random`,label:a(`Random`)},{value:`custom`,label:a(`Custom port`)}],value:d?.sharePortMode??`random`,width:160})})]}),d?.sharePortMode===`custom`&&(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Custom port`)}),(0,F.jsx)($,{children:a(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(jg,{inputMode:`numeric`,onBlur:e=>void Ln(e.currentTarget.value),onChange:e=>At(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:kt??(d?.sharePort?String(d.sharePort):``)})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Link paths`)}),(0,F.jsx)($,{children:a(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(Ao,{disabled:!d,onChange:e=>void G({linkPathMode:e}),options:[{value:`relative`,label:a(`Relative`)},{value:`absolute`,label:a(`Absolute`)}],value:d?.linkPathMode??`relative`,width:160})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Global hotkey`)}),(0,F.jsx)($,{children:a(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(l_,{$listening:_e,disabled:!d,onClick:()=>ve(!0),type:`button`,children:_e?a(`Press a key…`):d?.globalHotkey?en(d.globalHotkey):a(`None`)}),d?.globalHotkey&&(0,F.jsx)(wg,{onClick:()=>void G({globalHotkey:null}),type:`button`,children:a(`Clear`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Open yafm:// links`)}),(0,F.jsx)($,{children:a(`Registers this app for yafm:// links, for the current user only. Turning it on writes this copy's path; starting the app never touches the registry.`)}),j&&(0,F.jsx)(bg,{children:j})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(Og,{$on:ae,children:a(ae?`Active`:`Off`)}),(0,F.jsx)(kg,{$on:ae,disabled:oe,onClick:()=>void kn(),title:a(ae?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,F.jsx)(Ag,{})})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Use as the default file manager`)}),(0,F.jsx)($,{children:a(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),ce?.registered&&!ce.pathMatches&&(0,F.jsx)(bg,{children:a(`The registered path points to {path}. Register again to use this build.`,{path:ce.registeredPath??`?`})}),me&&(0,F.jsx)(bg,{children:me})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(Og,{$on:Kt,children:a(Kt?`Active`:`Off`)}),(0,F.jsx)(kg,{$on:Kt,disabled:!d||fe,onClick:()=>void An(),title:a(Kt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,F.jsx)(Ag,{})})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Open archives with this app`)}),(0,F.jsx)($,{children:a(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,F.jsx)($,{children:a(`When this is off, opening an archive uses the system's default application instead.`)}),N?.registered&&!N.pathMatches&&(0,F.jsx)(bg,{children:a(`The registered path points to {path}. Register again to use this build.`,{path:N.registeredPath??`?`})}),I&&(0,F.jsx)(bg,{children:I})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(Og,{$on:Wt,children:a(Wt?`Active`:`Off`)}),(0,F.jsx)(u_,{disabled:!d||le||Wt,onClick:()=>void jn(),type:`button`,children:a(`Register`)}),e?.platform===`windows`&&(0,F.jsx)(u_,{onClick:()=>void _t(`ms-settings:defaultapps`),type:`button`,children:a(`Default apps…`)}),(0,F.jsx)(Dg,{disabled:!d||le||!Gt,onClick:()=>void Mn(),type:`button`,children:a(`Unregister`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Reopen the tabs that were open`)}),(0,F.jsx)($,{children:a(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,F.jsx)(kg,{$on:d?.restoreTabs??!0,disabled:!d,onClick:()=>void G({restoreTabs:!d?.restoreTabs}),type:`button`,children:(0,F.jsx)(Ag,{})})]})]})]}),(0,F.jsxs)(Ph,{ref:qt(`startup`),children:[(0,F.jsx)(jh,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Start with the computer`)}),(0,F.jsx)($,{children:a(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),Nt&&(0,F.jsx)(bg,{children:Nt}),jt&&!jt.supported&&(0,F.jsx)(bg,{children:a(`This platform cannot create a per-user startup entry.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(Ao,{disabled:!d||Ft||jt!==null&&!jt.supported,onChange:e=>void zn(e),options:[{value:`none`,label:a(`None`)},{value:`shortcut`,label:a(`Shortcut`)},{value:`task`,label:a(`Scheduled task`)}],value:jt?.mode??d?.startupMode??`none`,width:170})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Start hidden in the tray`)}),(0,F.jsx)($,{children:a(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(kg,{$on:d?.startHidden??!1,disabled:!d,onClick:()=>void G({startHidden:!d?.startHidden}),type:`button`,children:(0,F.jsx)(Ag,{})})})]})]})]}),(0,F.jsxs)(Ph,{ref:qt(`fonts`),children:[(0,F.jsx)(jh,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,F.jsxs)(Ih,{children:[qm.map(e=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(e.label)}),(0,F.jsx)($,{children:a(`Falls back to {font} until another family is chosen.`,{font:a(e.fallback)})})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(Zm,{defaultLabel:a(e.fallback),disabled:!d,fonts:Dt,onChange:t=>void Wn(e.id,t),sample:e.sample,value:d?.fonts?.[e.id]??null})})]},e.id)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Reset`)}),(0,F.jsx)($,{children:a(`Back to the app's built-in font for every role.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(u_,{onClick:()=>void G({fonts:{}}),type:`button`,children:a(`Reset`)})})]})]})]}),(0,F.jsxs)(Ph,{ref:qt(`time`),children:[(0,F.jsx)(jh,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,F.jsx)(Ih,{children:(0,F.jsxs)(Lh,{children:[(0,F.jsxs)(Rh,{children:[(0,F.jsx)(Q,{children:a(`Format`)}),(0,F.jsx)($,{children:a(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,F.jsx)(r_,{children:ph.map(e=>(0,F.jsx)(i_,{$active:(d?.timeFormat??`24`)===e.id,onClick:()=>void G({timeFormat:e.id}),type:`button`,children:a(e.label)},e.id))}),(d?.timeFormat??`24`)===`custom`&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(a_,{"aria-label":a(`Pattern`),onBlur:un,onChange:e=>Re(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),un()):e.key===`Escape`&&Re(null)},spellCheck:!1,value:Le??d?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,F.jsx)($,{children:a(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,F.jsxs)(o_,{children:[(0,F.jsx)(`span`,{children:a(`Preview`)}),(0,F.jsx)(`code`,{children:m(mh,d?.timeFormat,Le??d?.timeFormatPattern)})]})]})})]}),(0,F.jsxs)(Ph,{ref:qt(`updates`),children:[(0,F.jsx)(jh,{note:`The running build and the newest one published.`,title:`Updates`}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:a(`Current version`)}),(0,F.jsx)(xg,{children:e?`v${e.version}`:`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:a(`Latest version`)}),(0,F.jsx)(xg,{children:Ke?`v${Ke.latest}`:`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:Ke?Ke.available?a(`Version {version} is available.`,{version:Ke.latest}):a(`You are on the latest version.`):a(`Not checked yet`)}),(0,F.jsx)($,{children:Ke?.available?a(`The installer downloads, installs itself, and closes the app.`):a(`Reads the version file the release workflow publishes.`)})]}),(0,F.jsx)(vg,{children:Ke?.available?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(u_,{onClick:()=>void dt(),type:`button`,children:a(`Open release page`)}),Ut&&(0,F.jsx)(u_,{disabled:U!==null,onClick:()=>void _n(),type:`button`,children:a(`Download and install`)})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(u_,{disabled:Je,onClick:()=>void gn(),type:`button`,children:a(Je?`Checking…`:`Check for updates`)}),(0,F.jsx)(u_,{onClick:()=>void W(),type:`button`,children:a(`Open log folder`)})]})})]}),Qe&&(0,F.jsx)(X,{children:(0,F.jsx)(bg,{children:Qe})})]})]}),(0,F.jsxs)(Ph,{ref:qt(`colors`),children:[(0,F.jsx)(jh,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(Lh,{children:[(0,F.jsxs)(Rh,{children:[(0,F.jsx)(Q,{children:a(`Presets`)}),(0,F.jsx)($,{children:a(`One click changes the accent and the highlight together.`)})]}),(0,F.jsxs)(zh,{children:[Wu.map(e=>(0,F.jsxs)(Bh,{$on:J.toLowerCase()===e.accent&&pn.toLowerCase()===e.secondary,onClick:()=>mn(e.accent,e.secondary),title:`${a(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,F.jsxs)(qh,{children:[(0,F.jsx)(`i`,{style:{background:e.accent}}),(0,F.jsx)(`i`,{style:{background:e.secondary}})]}),(0,F.jsx)(Vh,{children:a(e.name)})]},e.name)),Ht.map((e,t)=>(0,F.jsxs)(Hh,{children:[(0,F.jsxs)(Bh,{$on:J.toLowerCase()===e.accent.toLowerCase()&&pn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>mn(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,F.jsxs)(qh,{children:[(0,F.jsx)(`i`,{style:{background:e.accent}}),(0,F.jsx)(`i`,{style:{background:e.secondary}})]}),(0,F.jsx)(Vh,{children:e.name})]}),(0,F.jsx)(Uh,{onClick:()=>void Sn(t),title:a(`Remove preset`),type:`button`,children:(0,F.jsx)(Ri,{size:9})})]},`${e.name}-${t}`)),Ue?(0,F.jsxs)(Gh,{children:[(0,F.jsxs)(qh,{children:[(0,F.jsx)(`i`,{style:{background:Ue.accent}}),(0,F.jsx)(`i`,{style:{background:Ue.secondary}})]}),(0,F.jsx)(Kh,{autoFocus:!0,maxLength:24,onChange:e=>We({...Ue,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),xn()):e.key===`Escape`&&(e.preventDefault(),We(null))},placeholder:a(`Preset name`),spellCheck:!1,value:Ue.name}),(0,F.jsx)(wg,{onClick:()=>void xn(),type:`button`,children:a(`Save`)}),(0,F.jsx)(wg,{onClick:()=>We(null),type:`button`,children:a(`Cancel`)})]}):(0,F.jsxs)(Wh,{disabled:!d,onClick:()=>We({name:``,accent:J,secondary:pn}),title:a(`Save the current colours as a preset`),type:`button`,children:[(0,F.jsx)(Ei,{size:12}),a(`Add preset`)]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Accent color`)}),(0,F.jsx)($,{children:a(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(Ah,{colors:ze.accent,current:J,onApply:e=>hn(`accent`,e)}),(0,F.jsx)(Tg,{"aria-label":a(`Accent color`),disabled:!d,onBlur:()=>Cn(`accent`),onChange:e=>void G({accentColor:e.target.value}),onFocus:()=>St({role:`accent`,color:J}),type:`color`,value:J}),(0,F.jsx)(Eg,{children:J.toUpperCase()})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Secondary color`)}),(0,F.jsx)($,{children:a(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(Ah,{colors:ze.secondary,current:pn,onApply:e=>hn(`secondary`,e)}),(0,F.jsx)(Tg,{"aria-label":a(`Secondary color`),disabled:!d,onBlur:()=>Cn(`secondary`),onChange:e=>void G({secondaryColor:e.target.value}),onFocus:()=>St({role:`secondary`,color:pn}),type:`color`,value:pn}),(0,F.jsx)(Eg,{children:pn.toUpperCase()})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Reset colors`)}),(0,F.jsx)($,{children:a(`Returns the interface to the default blue and indigo theme.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(wg,{disabled:!d,onClick:()=>{dn(`accent`,J),dn(`secondary`,pn),G({accentColor:null,secondaryColor:null})},type:`button`,children:a(`Reset`)})})]})]})]}),(0,F.jsxs)(Ph,{ref:qt(`background`),children:[(0,F.jsx)(jh,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(Lh,{children:[(0,F.jsxs)(Rh,{children:[(0,F.jsx)(Q,{children:a(`Wallpaper`)}),(0,F.jsx)($,{children:a(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,F.jsx)(Ug,{children:(0,F.jsx)(Wg,{$active:!d?.backgroundSource,onClick:()=>void G({backgroundSource:null}),title:a(`None`),type:`button`,children:(0,F.jsx)(Yg,{children:a(`None`)})})}),(0,F.jsxs)(Bg,{children:[qu.map(e=>(0,F.jsxs)(Vg,{children:[(0,F.jsx)(Hg,{children:a(e.name)}),(0,F.jsx)(Ug,{children:e.variants.map(t=>(0,F.jsx)(Wg,{$active:d?.backgroundSource===t.id,onClick:()=>void G({backgroundSource:t.id}),title:`${a(e.name)} · ${a(t.preset)}`,type:`button`,children:(0,F.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,F.jsxs)(Vg,{children:[(0,F.jsx)(Hg,{children:a(`Motion`)}),(0,F.jsx)(Ug,{children:Ku.map(e=>(0,F.jsxs)(Wg,{$active:d?.backgroundSource===e.id,onClick:()=>void G({backgroundSource:e.id}),title:a(e.name),type:`button`,children:[(0,F.jsx)(`img`,{alt:``,src:e.poster}),(0,F.jsx)(qg,{children:(0,F.jsx)(Gi,{size:11})})]},e.id))})]}),(0,F.jsxs)(Vg,{children:[(0,F.jsx)(Hg,{children:a(`Custom`)}),(0,F.jsxs)(Ug,{children:[(d?.backgroundCustom??[]).map(e=>(0,F.jsx)(Dh,{active:d?.backgroundSource===`file:${e}`||d?.backgroundSource===`url:${e}`||d?.backgroundSource===e,onRemove:()=>Zt(e),onSelect:()=>void G({backgroundSource:C(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,F.jsxs)(Jg,{onClick:()=>void Yt([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,F.jsx)(Ei,{size:12}),a(`Image…`)]}),(0,F.jsxs)(Jg,{onClick:()=>void Yt([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,F.jsx)(Ei,{size:12}),a(`Video…`)]})]})]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Image or video URL`)}),(0,F.jsx)($,{children:a(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(jg,{onChange:e=>Rt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&K()},placeholder:`https://…`,value:Lt}),(0,F.jsx)(wg,{disabled:!C(Lt),onClick:()=>void K(),type:`button`,children:a(`Add`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:a(`Blur`)}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(zg,{max:40,min:0,onChange:e=>void G({backgroundBlur:Number(e.target.value)}),type:`range`,value:d?.backgroundBlur??0}),(0,F.jsxs)(xg,{children:[d?.backgroundBlur??0,`px`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:a(`Saturation`)}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(zg,{max:200,min:0,onChange:e=>void G({backgroundSaturation:Number(e.target.value)}),type:`range`,value:d?.backgroundSaturation??100}),(0,F.jsxs)(xg,{children:[d?.backgroundSaturation??100,`%`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:a(`Brightness`)}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(zg,{max:150,min:40,onChange:e=>void G({backgroundBrightness:Number(e.target.value)}),type:`range`,value:d?.backgroundBrightness??100}),(0,F.jsxs)(xg,{children:[d?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,F.jsxs)(Ph,{ref:qt(`safety`),children:[(0,F.jsx)(jh,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(Lh,{children:[(0,F.jsxs)(Rh,{children:[(0,F.jsx)(Q,{children:a(`Protected folders`)}),(0,F.jsx)($,{children:a(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,F.jsx)(Xg,{children:(d?.protectedPaths??[]).map(e=>(0,F.jsxs)(Zg,{children:[(0,F.jsx)(Qg,{"aria-label":a(`Protected path`),onBlur:tn,onChange:t=>je({from:e,value:t.target.value}),onFocus:()=>je({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),tn()):e.key===`Escape`&&je(null)},spellCheck:!1,value:Ae?.from===e?Ae.value:e}),(0,F.jsx)($g,{onClick:()=>nn(e),title:a(`Remove`),type:`button`,children:(0,F.jsx)(Ri,{size:10})})]},e))}),(0,F.jsxs)(t_,{children:[(0,F.jsx)(n_,{"aria-label":a(`New protected rule`),onChange:e=>Pe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),q())},placeholder:`*.log`,spellCheck:!1,value:H}),(0,F.jsx)(wg,{onClick:q,type:`button`,children:a(`Add the rule`)})]}),(0,F.jsxs)(e_,{children:[(0,F.jsx)(wg,{onClick:()=>void rn(),type:`button`,children:a(`Restore defaults`)}),(0,F.jsx)(wg,{onClick:()=>void Qt(),type:`button`,children:a(`Add folder…`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Confirmation delay`)}),(0,F.jsx)($,{children:a(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(zg,{max:30,min:2,onChange:e=>void G({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:d?.deleteDelaySeconds??5}),(0,F.jsxs)(xg,{children:[d?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,F.jsxs)(Ph,{ref:qt(`tags`),children:[(0,F.jsx)(jh,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(yg,{children:[(0,F.jsx)(Sg,{"aria-label":a(`Color of the new tag`),onChange:e=>ke(e.target.value),type:`color`,value:Oe}),(0,F.jsx)(jg,{onChange:e=>De(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),wn())},placeholder:a(`New tag`),spellCheck:!1,value:Ee})]}),(0,F.jsx)($,{children:a(`Add a tag here; it is available in every folder.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(wg,{disabled:Se||Ee.trim().length===0,onClick:()=>void wn(),type:`button`,children:a(`Add`)})})]}),we&&(0,F.jsx)(X,{children:(0,F.jsx)(bg,{children:we})}),B.length===0&&(0,F.jsx)(X,{children:(0,F.jsx)($,{children:a(`No tags yet. Add one below; it is available in every folder.`)})}),B.map(e=>(0,F.jsx)(X,{children:be?.name===e.name?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(yg,{children:[(0,F.jsx)(Sg,{"aria-label":a(`Color of {tag}`,{tag:e.name}),onChange:t=>void Tn(e.name,t.target.value),title:a(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,F.jsx)(Cg,{autoFocus:!0,disabled:Se,onChange:t=>xe({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Dn()):e.key===`Escape`&&(e.preventDefault(),xe(null))},value:be.value})]}),(0,F.jsx)($,{children:a(`Press Enter to save, Escape to cancel.`)})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(wg,{disabled:Se,onClick:()=>void Dn(),type:`button`,children:a(`Save`)}),(0,F.jsx)(wg,{disabled:Se,onClick:()=>xe(null),type:`button`,children:a(`Cancel`)})]})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(yg,{children:[(0,F.jsx)(Sg,{"aria-label":a(`Color of {tag}`,{tag:e.name}),onChange:t=>void Tn(e.name,t.target.value),title:a(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,F.jsx)(Q,{children:e.name})]}),(0,F.jsx)($,{children:o(a,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(wg,{disabled:Se,onClick:()=>xe({name:e.name,value:e.name}),type:`button`,children:a(`Edit`)}),(0,F.jsxs)(Dg,{disabled:Se,onClick:()=>void En(e.name),type:`button`,children:[(0,F.jsx)(Ii,{size:13}),a(`Remove`)]})]})]})},e.name))]})]}),(0,F.jsxs)(Ph,{ref:qt(`files-view`),children:[(0,F.jsx)(jh,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Default view`)}),(0,F.jsx)($,{children:a(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsxs)(Lg,{children:[(0,F.jsx)(Rg,{$on:Vt.mode===`list`,onClick:()=>void G({defaultView:{...Vt,mode:`list`}}),type:`button`,children:a(`List`)}),(0,F.jsx)(Rg,{$on:Vt.mode===`grid`,onClick:()=>void G({defaultView:{...Vt,mode:`grid`}}),type:`button`,children:a(`Grid`)})]})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`List icon size`)}),(0,F.jsx)($,{children:a(`The icon in the list rows.`)})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(zg,{max:48,min:16,onChange:e=>void G({defaultView:{...Vt,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Vt.iconSize}),(0,F.jsxs)(xg,{children:[Vt.iconSize,`px`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Grid size`)}),(0,F.jsx)($,{children:a(`The height of a grid tile; the icon inside follows it.`)})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(zg,{max:260,min:100,onChange:e=>void G({defaultView:{...Vt,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Vt.gridSize}),(0,F.jsxs)(xg,{children:[Vt.gridSize,`px`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(yg,{children:[(0,F.jsx)(Q,{children:a(`Selection checkboxes`)}),(0,F.jsx)(Gm,{})]}),(0,F.jsx)($,{children:a(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,F.jsx)(kg,{$on:d?.showCheckboxes??!0,disabled:!d,onClick:()=>void G({showCheckboxes:!(d?.showCheckboxes??!0)}),type:`button`,children:(0,F.jsx)(Ag,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(yg,{children:[(0,F.jsx)(Q,{children:a(`Open with a single click`)}),(0,F.jsx)(Gm,{})]}),(0,F.jsx)($,{children:a(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,F.jsx)(kg,{$on:d?.openOnSingleClick??!1,disabled:!d,onClick:()=>void G({openOnSingleClick:!(d?.openOnSingleClick??!1)}),type:`button`,children:(0,F.jsx)(Ag,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(yg,{children:[(0,F.jsx)(Q,{children:a(`Open the file tray while dragging`)}),(0,F.jsx)(Gm,{})]}),(0,F.jsx)($,{children:a(`The tray appears when a drag starts and closes again if it is still empty. Off leaves it to the title bar button.`)})]}),(0,F.jsx)(kg,{$on:d?.trayAutoShow??!0,disabled:!d,onClick:()=>void G({trayAutoShow:!(d?.trayAutoShow??!0)}),type:`button`,children:(0,F.jsx)(Ag,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(yg,{children:[(0,F.jsx)(Q,{children:a(`Confirm before deleting`)}),(0,F.jsx)(Gm,{})]}),(0,F.jsx)($,{children:a(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,F.jsx)(kg,{$on:d?.confirmDelete??!1,disabled:!d,onClick:()=>void G({confirmDelete:!(d?.confirmDelete??!1)}),type:`button`,children:(0,F.jsx)(Ag,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(yg,{children:[(0,F.jsx)(Q,{children:a(`Play audio in video previews`)}),(0,F.jsx)(Gm,{})]}),(0,F.jsx)($,{children:a(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,F.jsx)(kg,{$on:d?.previewVideoAudio??!1,disabled:!d,onClick:()=>void G({previewVideoAudio:!(d?.previewVideoAudio??!1)}),type:`button`,children:(0,F.jsx)(Ag,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(yg,{children:[(0,F.jsx)(Q,{children:a(`Autoplay video previews`)}),(0,F.jsx)(Gm,{})]}),(0,F.jsx)($,{children:a(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,F.jsx)(kg,{$on:d?.previewVideoAutoplay??!1,disabled:!d,onClick:()=>void G({previewVideoAutoplay:!(d?.previewVideoAutoplay??!1)}),type:`button`,children:(0,F.jsx)(Ag,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(yg,{children:[(0,F.jsx)(Q,{children:a(`Preview panel under the list`)}),(0,F.jsx)(Gm,{})]}),(0,F.jsx)($,{children:a(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,F.jsx)(kg,{$on:Vt.showImages??!0,onClick:()=>void G({defaultView:{...Vt,showImages:!(Vt.showImages??!0)}}),type:`button`,children:(0,F.jsx)(Ag,{})})]}),(0,F.jsx)(X,{children:(0,F.jsxs)(Z,{children:[(0,F.jsxs)(yg,{children:[(0,F.jsx)(Q,{children:a(`Columns`)}),(0,F.jsx)(Gm,{})]}),(0,F.jsx)($,{children:a(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,F.jsx)(X,{children:(0,F.jsxs)(s_,{children:[pl.map(e=>(0,F.jsxs)(c_,{children:[(0,F.jsx)(`input`,{checked:(Vt.columns??[]).includes(e.id),onChange:()=>void On(e.id),type:`checkbox`}),(0,F.jsx)(`span`,{children:a(e.label)})]},e.id)),(0,F.jsxs)(c_,{children:[(0,F.jsx)(`input`,{checked:(Vt.columns??[]).includes(`linkTarget`),onChange:()=>void On(`linkTarget`),type:`checkbox`}),(0,F.jsx)(`span`,{children:a(`Link target after the name`)})]})]})})]}),(0,F.jsxs)(m_,{children:[a(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,F.jsx)(Gm,{}),` `,a(`Anything marked as global always applies to every folder.`)]})]}),(0,F.jsxs)(Ph,{ref:qt(`shortcuts`),children:[(0,F.jsx)(jh,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,F.jsxs)(Ih,{children:[dh.map(({id:e,label:t,note:n})=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(t)}),(0,F.jsx)($,{children:a(n)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(l_,{$listening:z===e,onClick:()=>ge(e),type:`button`,children:z===e?a(`Press a key…`):en(Pn[e])})})]},e)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Reset`)}),(0,F.jsx)($,{children:a(`Back to the default combination for every action.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(u_,{onClick:()=>void G({shortcuts:{...Xt}}),type:`button`,children:a(`Reset`)})})]})]})]}),(0,F.jsxs)(Ph,{ref:qt(`memory`),children:[(0,F.jsx)(jh,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(mg,{children:[(0,F.jsxs)(hg,{children:[(0,F.jsx)(Q,{children:a(`Process memory`)}),(0,F.jsx)(xg,{children:D?`${f(D.private)} · ${ng(D.private,D.available)}`:`—`})]}),(0,F.jsx)(gg,{children:(0,F.jsx)(_g,{$ratio:D?D.private/Math.max(D.available,1):0,$tone:w(D?D.private/Math.max(D.available,1):0)})}),(0,F.jsx)($,{children:D?a(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:f(D.available),resident:f(D.workingSet)}):a(`Reading the current usage…`)})]}),(0,F.jsxs)(mg,{children:[(0,F.jsxs)(hg,{children:[(0,F.jsx)(Q,{children:a(`Managed heap`)}),(0,F.jsx)(xg,{children:D?`${f(D.managed)} · ${ng(D.managed,D.private)}`:`—`})]}),(0,F.jsx)(gg,{children:(0,F.jsx)(_g,{$ratio:D?D.managed/Math.max(D.private,1):0,$tone:`var(--accent-secondary)`})}),(0,F.jsx)($,{children:a(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,F.jsxs)(mg,{children:[(0,F.jsxs)(hg,{children:[(0,F.jsx)(Q,{children:a(`Native and runtime`)}),(0,F.jsx)(xg,{children:D?`${f(Math.max(0,D.private-D.managed))} · ${ng(Math.max(0,D.private-D.managed),D.private)}`:`—`})]}),(0,F.jsx)(gg,{children:(0,F.jsx)(_g,{$ratio:D?Math.max(0,D.private-D.managed)/Math.max(D.private,1):0,$tone:`var(--accent-primary)`})}),(0,F.jsx)($,{children:a(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Free memory`)}),(0,F.jsx)($,{children:a(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(u_,{onClick:()=>void yt().then(O),type:`button`,children:a(`Trim now`)})})]})]})]}),(0,F.jsxs)(Ph,{ref:qt(`overview`),children:[(0,F.jsx)(jh,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,F.jsx)(Ih,{children:(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Recent items`)}),(0,F.jsx)($,{children:a(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(jg,{max:50,min:0,onChange:e=>void Fn(Number(e.target.value)),type:`number`,value:d?.recentLimit??10})})]})})]}),(0,F.jsxs)(Ph,{ref:qt(`gallery`),children:[(0,F.jsx)(jh,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,F.jsxs)(Ih,{children:[(d?.galleryRoots??[]).map(e=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:v(e)}),(0,F.jsx)($,{children:e})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(d_,{onClick:()=>void Bn((d?.galleryRoots??[]).filter(t=>t!==e)),title:a(`Stop scanning this folder`),type:`button`,children:(0,F.jsx)(Ri,{size:12})})})]},e)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Scan folders`)}),(0,F.jsx)($,{children:(d?.galleryRoots??[]).length===0?a(`Nothing added yet, so the gallery reads the Pictures folder.`):a(`Only these folders are scanned, three levels deep.`)})]}),(0,F.jsx)(vg,{children:(0,F.jsx)(u_,{onClick:()=>void Vn(),type:`button`,children:a(`Choose folder…`)})})]})]})]}),(0,F.jsxs)(Ph,{ref:qt(`icons`),children:[(0,F.jsx)(jh,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Use system file icons`)}),(0,F.jsx)($,{children:a(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,F.jsx)(kg,{$on:d?.systemIcons??!1,disabled:!d,onClick:()=>void G({systemIcons:!d?.systemIcons}),type:`button`,children:(0,F.jsx)(Ag,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Use custom folder icons`)}),(0,F.jsx)($,{children:a(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,F.jsx)(kg,{$on:d?.customFolderIcons??!1,disabled:!d,onClick:()=>void G({customFolderIcons:!d?.customFolderIcons}),type:`button`,children:(0,F.jsx)(Ag,{})})]})]})]}),(0,F.jsxs)(Ph,{ref:qt(`extension-icons`),children:[(0,F.jsx)(jh,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,F.jsxs)(Ih,{children:[Object.entries(d?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:e}),(0,F.jsx)($,{children:wh(a,t)})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(Th,{source:t}),(0,F.jsx)(d_,{onClick:()=>void Nn(e,null),title:a(`Remove this rule`),type:`button`,children:(0,F.jsx)(Ri,{size:12})})]})]},e)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Add a rule`)}),(0,F.jsx)($,{children:a(`Extension and the icon to draw for it.`)})]}),(0,F.jsxs)(vg,{children:[(0,F.jsx)(jg,{onChange:e=>x(e.target.value),placeholder:`.psd`,spellCheck:!1,value:y}),(0,F.jsxs)(Ig,{children:[(0,F.jsx)(d_,{onClick:()=>re(e=>!e),title:a(`Choose the icon`),type:`button`,children:(0,F.jsx)(Th,{source:S})}),te&&(0,F.jsx)(rf,{allowDefault:!1,onClose:()=>re(!1),onPick:e=>{ee(e??`file`),re(!1)},value:S})]}),(0,F.jsx)(d_,{onClick:()=>void Hn(),title:a(`Add the rule`),type:`button`,children:(0,F.jsx)(Ei,{size:13})})]})]})]})]}),(0,F.jsxs)(Ph,{ref:qt(`folder-icons`),children:[(0,F.jsx)(jh,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Give a folder its own icon`)}),(0,F.jsx)($,{children:a(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,F.jsxs)(vg,{children:[g&&(0,F.jsx)(Eh,{src:g.icon}),(0,F.jsx)(u_,{disabled:ie,onClick:()=>void Un(),type:`button`,children:a(ie?`Choosing…`:`Choose folder and icon…`)})]})]}),g&&(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:v(g.folder)}),(0,F.jsx)($,{children:g.folder})]}),(0,F.jsx)(vg,{children:(0,F.jsxs)(p_,{children:[(0,F.jsx)(Li,{size:11}),` `,a(`Saved`)]})})]})]})]}),(0,F.jsxs)(Ph,{ref:qt(`folder-index`),children:[(0,F.jsx)(jh,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:a(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,F.jsx)($,{children:a(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,F.jsx)(kg,{$on:d?.writeDirectoryIndex??!0,disabled:!d,onClick:()=>void G({writeDirectoryIndex:!d?.writeDirectoryIndex}),type:`button`,children:(0,F.jsx)(Ag,{})})]}),(0,F.jsxs)(Lh,{children:[(0,F.jsxs)(Rh,{children:[(0,F.jsx)(Q,{children:a(`Directory index blacklist`)}),(0,F.jsx)($,{children:a(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,F.jsx)(Xg,{children:(d?.directoryIndexBlacklist??[]).map(e=>(0,F.jsxs)(Zg,{children:[(0,F.jsx)(Qg,{"aria-label":a(`Directory index blacklist rule`),onBlur:an,onChange:t=>Ne({from:e,value:t.target.value}),onFocus:()=>Ne({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),an()):e.key===`Escape`&&Ne(null)},spellCheck:!1,value:Me?.from===e?Me.value:e}),(0,F.jsx)($g,{onClick:()=>cn(e),title:a(`Remove`),type:`button`,children:(0,F.jsx)(Ri,{size:10})})]},e))}),(0,F.jsxs)(t_,{children:[(0,F.jsx)(n_,{"aria-label":a(`Directory index blacklist rule`),onChange:e=>Ie(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),on())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Fe}),(0,F.jsx)(wg,{onClick:on,type:`button`,children:a(`Add the rule`)})]}),(0,F.jsxs)(e_,{children:[(0,F.jsx)(wg,{onClick:ln,type:`button`,children:a(`Restore defaults`)}),(0,F.jsx)(wg,{onClick:()=>void sn(),type:`button`,children:a(`Add folder…`)})]})]})]}),!(d?.writeDirectoryIndex??!0)&&(0,F.jsx)(h_,{children:Ch(a,e?.platform)})]}),(0,F.jsxs)(Ph,{ref:qt(`indexing`),children:[(0,F.jsx)(jh,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,F.jsx)(Sh,{})]}),(0,F.jsxs)(Ph,{ref:qt(`files`),children:[(0,F.jsx)(jh,{note:`What the listings include.`,title:`Files`}),(0,F.jsxs)(Ih,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:a(`Hidden items`)}),(0,F.jsx)(xg,{children:xh(a,l?.showHidden)})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:a(`Protected operating system files`)}),(0,F.jsx)(xg,{children:xh(a,l?.showSystem)})]})]}),(0,F.jsx)(m_,{children:a(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,F.jsxs)(Zh,{"aria-label":a(`Settings sections`),children:[(0,F.jsx)(Qh,{children:a(`Sections`)}),(0,F.jsx)($h,{children:_h.map(({id:e,label:t})=>(0,F.jsx)(eg,{$active:Tt===e,onClick:()=>Jt(e),type:`button`,children:(0,F.jsx)(`span`,{children:a(t)})},e))}),(0,F.jsx)(tg,{children:a(`Changes are saved as you make them.`)})]}),U&&(0,Za.createPortal)((0,F.jsx)(ag,{children:(0,F.jsxs)(og,{"aria-modal":`true`,role:`dialog`,children:[(0,F.jsxs)(sg,{children:[(0,F.jsx)(`h2`,{children:a(`Software update`)}),(0,F.jsx)(`p`,{children:Ke?.latest?a(`Version {version}`,{version:Ke.latest}):a(`Preparing the update…`)})]}),(0,F.jsx)(cg,{children:a(`Changelog`)}),(0,F.jsx)(lg,{children:U.changelog||(U.phase===`changelog`?a(`Loading the changelog…`):a(`The changelog could not be loaded.`))}),(0,F.jsxs)(ug,{children:[(0,F.jsx)(`span`,{children:rg(U,a)}),(0,F.jsx)(`span`,{children:ig(U)})]}),(0,F.jsx)(dg,{children:(0,F.jsx)(fg,{$percent:Math.max(0,Math.min(100,U.percent))})}),U.error&&(0,F.jsx)(bg,{children:U.error}),(0,F.jsxs)(pg,{children:[(U.phase===`changelog`||U.phase===`downloading`)&&(0,F.jsx)(u_,{onClick:()=>void yn(),type:`button`,children:a(`Cancel`)}),U.phase===`ready`&&(0,F.jsx)(u_,{onClick:()=>void bn(),type:`button`,children:a(`Install update`)}),U.phase===`installing`&&(0,F.jsx)(u_,{disabled:!0,type:`button`,children:a(`Installing…`)}),(U.phase===`ready`||U.phase===`error`||U.phase===`cancelled`||U.phase===`installing`)&&(0,F.jsx)(u_,{onClick:()=>st(null),type:`button`,children:a(`Close`)})]})]})}),document.body)]})}function xh(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Sh(){let e=L(),[t,n]=(0,E.useState)(null);return(0,E.useEffect)(()=>{let e=!0,t=()=>qe().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,F.jsx)(h_,{children:e(`No indexing tasks are running.`)}):(0,F.jsxs)(Ih,{children:[(0,F.jsx)(X,{children:(0,F.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,F.jsx)(X,{children:(0,F.jsx)(xg,{title:e,children:e})},e))]}):(0,F.jsx)(h_,{children:e(`Index task information is unavailable.`)})}function Ch(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function wh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function Th({source:e}){let t=yn(e.startsWith(`file:`)?e.slice(5):null);return(0,F.jsx)(f_,{children:t?(0,F.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,F.jsx)(cc,{name:e,size:16})})}function Eh({src:e}){let t=yn(e);return(0,F.jsx)(f_,{children:t&&(0,F.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Dh({path:e,active:t,onSelect:n,onRemove:r}){let i=L(),a=C(e),o=Tn(a?null:e),s=a?e:o,c=dd(e.split(/[?#]/)[0]);return(0,F.jsxs)(Gg,{children:[(0,F.jsxs)(Wg,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,F.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,F.jsx)(`img`,{alt:``,src:s})),c&&(0,F.jsx)(qg,{children:(0,F.jsx)(Gi,{size:11})})]}),(0,F.jsx)(Kg,{onClick:r,title:i(`Remove`),type:`button`,children:(0,F.jsx)(Ri,{size:9})})]})}function Oh({value:e,options:t,onChange:n,disabled:r}){let i=L(),[a,o]=(0,E.useState)(null),s=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Mg,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,F.jsx)(`span`,{children:kh(i,e)}),(0,F.jsx)(Ng,{children:(0,F.jsx)(ki,{size:11})})]}),a&&(0,Za.createPortal)((0,F.jsx)(Pg,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,F.jsxs)(Fg,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,F.jsx)(`span`,{children:kh(i,t)}),t===e&&(0,F.jsx)(Li,{size:11})]},t))}),document.body)]})}function kh(e,t){return t===hh?e(`System default`):gh[t]??t}function Ah({colors:e,current:t,onApply:n}){let r=L();if(e.length===0)return null;let[i,...a]=e;return(0,F.jsxs)(Jh,{children:[(0,F.jsxs)(Xh,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,F.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,F.jsx)(Yh,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,F.jsx)(Li,{size:9})},e))]})}function jh({title:e,note:t,global:n=!1}){let r=L();return(0,F.jsxs)(Fh,{children:[(0,F.jsxs)(`h2`,{children:[r(e),n&&(0,F.jsx)(Gm,{})]}),(0,F.jsx)(`p`,{children:r(t)})]})}var Mh=_.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Nh=_.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Ph=_.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Fh=_.header`
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
`,Ih=_.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Lh=_.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Rh=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,zh=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Bh=_.button`
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
`,Vh=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Hh=_.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Uh=_.button`
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
`,Wh=_.button`
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
`,Gh=_.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Kh=_.input`
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
`,qh=_.span`
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
`,Jh=_.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Yh=_.button`
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
`,Xh=_.button`
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
`,Zh=_.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,Qh=_.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,$h=_.div`
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
`,eg=_.button`
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

    ${({$active:e})=>e&&a`
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
`,tg=_.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function ng(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function rg(e,t){switch(e.phase){case`changelog`:return t(`Preparing the update…`);case`downloading`:return t(`Downloading the update…`);case`ready`:return t(`Download complete.`);case`cancelled`:return t(`Update cancelled.`);case`error`:return t(`The update failed.`);case`installing`:return t(`Installing…`);default:return``}}function ig(e){return e.total>0?`${f(e.downloaded)} / ${f(e.total)}`:e.downloaded>0?f(e.downloaded):``}var ag=_.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,og=_.div`
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
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
`,sg=_.div`
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
`,cg=_.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,lg=_.pre`
    margin: 0;
    max-height: 260px;
    overflow: auto;
    font-family: var(--font-mono);
    font-size: 11px;
    line-height: 1.6;
    white-space: pre-wrap;
    color: var(--text-secondary);
`,ug=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,dg=_.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,fg=_.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,pg=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,mg=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,hg=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,gg=_.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,_g=_.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,X=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Z=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,vg=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=_.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,yg=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=_.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,bg=_.span`
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
`,xg=_.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Sg=_.input`
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
`,Cg=_.input`
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
`,wg=_.button`
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
`,Tg=_.input`
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
`,Eg=_.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Dg=_.button`
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
`,Og=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,kg=_.button`
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
`,Ag=_.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,jg=_.input`
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
`,Mg=_.button`
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
`,Ng=_.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Pg=_.div`
    position: fixed;
    z-index: 2600;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
`,Fg=_.button`
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
`,Ig=_.span`
    position: relative;
    display: inline-flex;
`,Lg=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Rg=_.button`
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
`,zg=_.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Bg=_.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Vg=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Hg=_.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Ug=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Wg=_.button`
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
`,Gg=_.div`
    position: relative;
    width: 102px;
    height: 58px;
`,Kg=_.button`
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
`,qg=_.span`
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
`,Jg=_.button`
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
`,Yg=_.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,Xg=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Zg=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Qg=_.input`
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
`,$g=_.button`
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
`,e_=_.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,t_=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,n_=_.input`
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
`,r_=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,i_=_.button`
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
`,a_=_.input`
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
`,o_=_.div`
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
`,s_=_.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,c_=_.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,l_=_.button`
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
`,u_=_.button`
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
`,d_=_.button`
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
`,f_=_.span`
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
`,p_=_.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,m_=_.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,h_=_.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,g_=150,__=2500,v_=3,y_=600;function b_({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:s,onSearchMatches:c,onPick:l,onSelectionChange:u,onAddToTray:d,onAddFavorite:p,onRemoveFavorite:m,favoritePaths:h,onExtractArchive:g,showDetails:_=!0,videoAudio:v=!1,videoAutoplay:b=!1}){let x=L(),S=cl(`gallery`),[ee,te]=(0,E.useState)([]),[ne,re]=(0,E.useState)(0),[C,w]=(0,E.useState)(!0),[ie,T]=(0,E.useState)(null),[D,O]=(0,E.useState)(!1),[ae,k]=(0,E.useState)([]),[oe,A]=(0,E.useState)(()=>{let e=tr(`yafm.preview.width`,320);return e>=220?e:320}),j=(0,E.useRef)([]),M=(0,E.useRef)(0),N=(0,E.useRef)(!1),se=(0,E.useRef)(!0),ce=(0,E.useRef)(0),P=(0,E.useRef)(null),le=(0,E.useRef)(0),ue=(0,E.useCallback)(async e=>{let t=++ce.current;w(!0),se.current=!0,T(null);try{let n=await ze(0,g_,e);if(t!==ce.current)return;j.current=n.entries,M.current=n.total,te(n.entries),re(n.total)}catch(e){t===ce.current&&T(e instanceof Error?e.message:String(e))}finally{t===ce.current&&(se.current=!1,w(!1))}},[]);(0,E.useEffect)(()=>{ue(!1)},[ue]);let de=(0,E.useCallback)(async()=>{if(se.current||N.current||j.current.length>=M.current)return;let e=ce.current;N.current=!0;try{let t=j.current,n=M.current;for(let r=0;r<v_&&t.length<n;r++){let r=await ze(t.length,g_,!1);if(e!==ce.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<g_)break}if(e!==ce.current)return;j.current=t,M.current=n,(0,E.startTransition)(()=>{te(t),re(n)})}catch{}finally{N.current=!1}},[]),I=(0,E.useCallback)(e=>{le.current||=window.requestAnimationFrame(()=>{le.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<__&&de()})},[de]);(0,E.useEffect)(()=>{let e=P.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&de()},{root:e.parentElement,rootMargin:`${__}px 0px`});return t.observe(e),()=>t.disconnect()},[de]),(0,E.useEffect)(()=>{if(ee.length>=ne)return;let e=window.setTimeout(()=>{let e=P.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<__&&de()},200);return()=>window.clearTimeout(e)},[ee.length,ne,de]);let R=(0,E.useMemo)(()=>({path:``,parent:null,entries:ee.map(x_),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[ee]),fe=(0,E.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),pe=(0,E.useCallback)(e=>{l?l(e):xe(e)},[l]),me=(0,E.useCallback)(e=>{let t=S_(e.modified);return{id:t,label:t}},[]),he=()=>{O(!0),ue(!0).finally(()=>O(!1))},z=ee.length<ne,ge=(0,E.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:ee.filter(e=>In(e.name,a)||In(e.path,a)),[ee,a?.open,a?.query,a?.matchCase,a?.regex]),_e=(0,E.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:ge[Math.min(a.index,Math.max(0,ge.length-1))]?.path??null}:On,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,ge]);(0,E.useEffect)(()=>{c?.(ge.length)},[ge.length,c]);let ve=(0,E.useCallback)(e=>{k(e),u?.(e)},[u]),B=e=>{A(e),nr(`yafm.preview.width`,e)},V=ae.length>0?ee.find(e=>e.path===ae[0])??null:null,ye=V?.name.includes(`.`)?V.name.slice(V.name.lastIndexOf(`.`)+1).toUpperCase():`—`,be=V&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(V.name)?x(`Video`):x(`Picture`),Se=V?V.path.slice(0,Math.max(V.path.lastIndexOf(`\\`),V.path.lastIndexOf(`/`))):``,Ce=V?{name:V.name,path:V.path,isDirectory:!1,size:V.size,modified:V.modified,fields:[{label:x(`Type`),value:be},{label:x(`Extension`),value:ye},{label:x(`Location`),value:Se},{label:x(`Full path`),value:V.path},{label:x(`Size`),value:f(V.size)},{label:x(`Modified`),value:y(V.modified)},{label:x(`Created`),value:`—`}]}:null;return(0,F.jsxs)(C_,{children:[(0,F.jsxs)(E_,{children:[(0,F.jsxs)(O_,{children:[(0,F.jsx)(`span`,{children:x(`Gallery`)}),(0,F.jsx)(k_,{children:C?x(`scanning…`):x(`{shown} of {total} pictures`,{shown:ee.length,total:ne})})]}),(0,F.jsxs)(D_,{children:[(0,F.jsx)(A_,{onClick:he,title:x(`Scan the folders again`),type:`button`,children:(0,F.jsx)(j_,{$spinning:D,children:(0,F.jsx)(Ti,{size:14})})}),S.available&&(0,F.jsx)(A_,{onClick:e=>S.open(e.clientX,e.clientY),title:x(`Selection menu`),type:`button`,children:(0,F.jsx)(Aa,{size:14})})]})]}),ie&&(0,F.jsx)(N_,{children:ie}),!ie&&!C&&ne===0&&(0,F.jsx)(N_,{children:x(`No pictures found.`)}),!ie&&(C||ne>0)&&(0,F.jsxs)(w_,{children:[(0,F.jsx)(T_,{children:(0,F.jsx)(Sl,{confirmDelete:n,find:_e,selectMatchesToken:s,listing:C&&ee.length===0?null:R,loading:C,error:null,view:fe,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:ve,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:pe,onOpenFile:pe,onRefresh:he,onAddToTray:d,onAddFavorite:p,onRemoveFavorite:m,favoritePaths:h,onExtractArchive:g,groupOf:me,onGridScroll:I,gridFooter:(0,F.jsx)(M_,{$space:z?y_:1,ref:P}),allowBackgroundMenu:!1})}),_&&(0,F.jsx)(ps,{emptyNote:x(`Nothing selected.`),info:Ce,onWidth:B,selectionNote:ae.length>1?o(x,ae.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:v,videoAutoplay:b,width:oe})]})]})}function x_(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function S_(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(x(),{weekday:`long`}):t.toLocaleDateString(x(),{year:`numeric`,month:`long`,day:`numeric`})}var C_=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,w_=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,T_=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,E_=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,D_=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,O_=_.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,k_=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,A_=_.button`
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
`,j_=_.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,M_=_.div`
    height: ${({$space:e})=>e}px;
`,N_=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function P_({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:u=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,E.useState)([]),_=L(),[y,b]=(0,E.useState)(null),x=Wn();(0,E.useEffect)(()=>{Ye().then(e=>{b(e),g(Hs(e).filter(e=>e.pinned))},()=>{b(null),g([])})},[c]),(0,E.useEffect)(()=>{if(!P.available)return;let e=h.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return P.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>P.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[h,s]);let S=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:y?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??y?.placeIcons?.[n]??null}}),ee=o===`files`;return(0,F.jsxs)(B_,{children:[(0,F.jsxs)(V_,{children:[!u.includes(`home`)&&(0,F.jsxs)(K_,{$active:o===`home`,onClick:e=>m(`home`,Qt(e)),title:_(`Overview`),type:`button`,children:[(0,F.jsx)(na,{}),(0,F.jsx)(J_,{children:_(`Overview`)})]}),!u.includes(`recycle`)&&(0,F.jsxs)(K_,{$active:o===`recycle`,onClick:e=>m(`recycle`,Qt(e)),title:_(`Recycle Bin`),type:`button`,children:[(0,F.jsx)(Ii,{}),(0,F.jsx)(J_,{children:_(`Recycle Bin`)})]}),!u.includes(`gallery`)&&(0,F.jsxs)(K_,{$active:o===`gallery`,onClick:e=>m(`gallery`,Qt(e)),title:_(`Gallery`),type:`button`,children:[(0,F.jsx)(Wi,{}),(0,F.jsx)(J_,{children:_(`Gallery`)})]})]}),h.map(e=>(0,F.jsxs)(U_,{children:[(0,F.jsxs)(K_,{as:`div`,$active:!1,children:[(0,F.jsx)(q_,{children:(0,F.jsx)(Ws,{panel:e,size:16})}),(0,F.jsx)(J_,{children:_(e.title)})]}),(0,F.jsx)(W_,{children:(0,F.jsxs)(G_,{children:[e.kind===`quick`&&S(e).map(e=>(0,F.jsxs)(K_,{$active:ee&&t(a,e.path),onClick:t=>p(e.path,Qt(t)),title:e.path,type:`button`,children:[(0,F.jsx)(Gs,{place:e}),(0,F.jsx)(J_,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let n=Gn(x,e.path);return(0,F.jsxs)(K_,{$active:ee&&t(a,e.path),onClick:t=>e.isDirectory?p(e.path,Qt(t)):void xe(e.path),title:e.path,type:`button`,children:[n&&x.useIcons?(0,F.jsx)(Gs,{place:n}):(0,F.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,F.jsx)(J_,{children:n?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,F.jsx)(L_,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,F.jsxs)(K_,{$active:ee&&t(a,e.name),onClick:t=>p(e.name,Qt(t)),title:e.name,type:`button`,children:[(0,F.jsx)(Si,{}),(0,F.jsxs)(J_,{children:[d(e),(0,F.jsxs)(Y_,{children:[f(e.freeSpace),` free`]}),(0,F.jsx)(X_,{children:(0,F.jsx)(Z_,{$used:n,$tone:w(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,F.jsx)(R_,{onNavigate:p,path:e.path||s})]})})]},e.id)),!u.includes(`settings`)&&(0,F.jsx)(H_,{children:(0,F.jsxs)(K_,{$active:o===`settings`,onClick:e=>m(`settings`,Qt(e)),title:_(`Settings`),type:`button`,children:[(0,F.jsx)(Ai,{}),(0,F.jsx)(J_,{children:_(`Settings`)})]})})]})}var F_=10,I_=40;function L_({historyVersion:e=0,onNavigate:t}){let n=L(),[r,i]=(0,E.useState)(null),a=Wn();return(0,E.useEffect)(()=>{Ve().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Gn(a,e.path);return(0,F.jsxs)(K_,{$active:!1,onClick:n=>t(e.path,Qt(n)),title:o(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,F.jsx)(Gs,{place:r}):(0,F.jsx)(lc,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,F.jsx)(J_,{children:r?.name||e.name})]},e.path)})}function R_({path:e,onNavigate:n}){let[r,i]=(0,E.useState)(null);(0,E.useEffect)(()=>{e&&(i(null),Se(e,!1).then(i,()=>i(null)))},[e]),(0,E.useEffect)(()=>{if(e&&P.available)return P.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Se(e,!1).then(i,()=>void 0)})},[e]);let a=r?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,F_),s=a.filter(e=>!e.isDirectory).slice(0,I_);return(0,F.jsxs)(F.Fragment,{children:[o.map(e=>(0,F.jsx)(z_,{entry:e,onNavigate:n},e.fullPath)),s.map(e=>(0,F.jsx)(z_,{entry:e,onNavigate:n},e.fullPath))]})}function z_({entry:e,onNavigate:t}){let n=Wn(),r=Gn(n,e.fullPath);return(0,F.jsxs)(K_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Qt(n)):void xe(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,F.jsx)(Gs,{place:r}):(0,F.jsx)(lc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,F.jsx)(J_,{children:r?.name||e.name})]})}var B_=_.aside`
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
        box-shadow: 14px 0 36px rgba(0, 0, 0, 0.45), 0 0 28px rgba(var(--accent-secondary-rgb), 0.06);
        overflow-y: auto;
        scrollbar-width: none;
    }

    &:not(:hover) ${()=>Y_},
    &:not(:hover) ${()=>X_} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,V_=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,H_=_(V_)`
    margin-top: auto;
`,U_=_.div`
    display: flex;
    flex-direction: column;
`,W_=_.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${B_}:hover ${U_}:hover > & {
        grid-template-rows: 1fr;
    }
`,G_=_.div`
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
`,K_=_.button`
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
`,q_=_.span`
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
`,J_=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Y_=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,X_=_.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Z_=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,Q_=_.span`
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
`;function $_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=L(),a=(0,E.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,E.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,F.jsxs)(tv,{ref:a,children:[(0,F.jsxs)(nv,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,F.jsx)(Fi,{size:13}),c>0&&(0,F.jsx)(Q_,{children:c>9?`9+`:c})]}),n&&(0,F.jsxs)(rv,{children:[(0,F.jsxs)(iv,{children:[(0,F.jsx)(av,{children:i(`Status center`)}),(0,F.jsxs)(ov,{children:[(0,F.jsx)(sv,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,F.jsx)(cv,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,F.jsx)(Ri,{size:10})})]})]}),e.length===0?(0,F.jsx)(uv,{children:i(`No operations yet.`)}):(0,F.jsx)(lv,{children:e.map(e=>(0,F.jsx)(ev,{task:e},e.id))})]})]})}function ev({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,F.jsxs)(dv,{children:[(0,F.jsxs)(fv,{children:[(0,F.jsx)(pv,{$state:e.state,children:e.state===`done`?(0,F.jsx)(Li,{size:10}):e.state===`failed`?(0,F.jsx)(Ri,{size:10}):(0,F.jsx)(mv,{})}),(0,F.jsx)(hv,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,F.jsxs)(gv,{children:[f(e.bytesDone),` / `,f(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,F.jsxs)(gv,{children:[e.done,` / `,e.total]})]}),i&&(0,F.jsx)(_v,{children:(0,F.jsx)(vv,{$percent:r,$indeterminate:t===0})}),e.error&&(0,F.jsx)(yv,{children:e.error})]})}var tv=_.div`
    position: relative;
    display: flex;
`,nv=_.button`
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
`,rv=_.div`
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
`,iv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,av=_.span`
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
`,ov=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,sv=_.button`
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
`,cv=_.button`
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
`,lv=_.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,uv=_.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,dv=_.div`
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
`,fv=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,pv=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,mv=_.span`
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
`,hv=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gv=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,_v=_.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,vv=_.div`
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
`,yv=_.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function bv(){return P.available?(await P.request(`fs.history.list`)).entries:[]}async function xv(e){return P.available?(await P.request(`fs.history.undoTo`,{id:e})).ok:!1}function Sv(){let e=L(),[t,n]=(0,E.useState)(!1),[r,i]=(0,E.useState)([]),[a,o]=(0,E.useState)(!1),s=(0,E.useRef)(null),c=()=>void bv().then(i,()=>i([]));(0,E.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await xv(e),c()}finally{o(!1)}};return(0,F.jsxs)(Tv,{ref:s,children:[(0,F.jsx)(Ev,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,F.jsx)(Pi,{size:14})}),t&&(0,F.jsxs)(Dv,{children:[(0,F.jsxs)(Ov,{children:[(0,F.jsx)(kv,{children:e(`History`)}),(0,F.jsx)(Av,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,F.jsx)(Ri,{size:10})})]}),r.length===0?(0,F.jsx)(zv,{children:e(`No operations yet.`)}):(0,F.jsx)(jv,{children:r.map(t=>(0,F.jsxs)(Mv,{children:[(0,F.jsxs)(Nv,{children:[(0,F.jsxs)(Pv,{children:[(0,F.jsx)(wv,{label:t.label}),Cv(e,t.label)]}),(0,F.jsx)(Fv,{children:S(t.at)})]}),t.paths.length>0&&(0,F.jsxs)(Iv,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,F.jsx)(Lv,{children:(0,F.jsx)(Rv,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function Cv(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);if(t===`Paste text`)return e(`Paste text`);if(t===`Paste image`)return e(`Paste image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function wv({label:e}){return e.startsWith(`Delete`)?(0,F.jsx)(Ii,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,F.jsx)(Ca,{size:13}):e.startsWith(`Rename`)?(0,F.jsx)(ra,{size:13}):e.startsWith(`Compress`)?(0,F.jsx)(qi,{size:13}):e.startsWith(`New`)?(0,F.jsx)(Ei,{size:13}):(0,F.jsx)(Oi,{size:13})}var Tv=_.div`
    position: relative;
    display: flex;
`,Ev=_.button`
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
`,Dv=_.div`
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
`,Ov=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,kv=_.span`
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
`,Av=_.button`
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
`,jv=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Mv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,Nv=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,Pv=_.span`
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
`,Fv=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Iv=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Lv=_.div`
    display: flex;
    justify-content: flex-end;
`,Rv=_.button`
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
`,zv=_.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function Bv({currentFolder:e}){let n=L(),[r,i]=(0,E.useState)(!1),[a,o]=(0,E.useState)(null),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!r)return;let e=()=>void Lc().then(o,()=>void 0);e();let t=window.setInterval(e,2500),n=e=>{l.current?.contains(e.target)||i(!1)};return window.addEventListener(`pointerdown`,n),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,n)}},[r]),(0,E.useEffect)(()=>{let e=()=>void Lc().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(n=>t(n.path,e))??!1;return(0,F.jsxs)(Vv,{ref:l,children:[(0,F.jsxs)(Hv,{$active:r,onClick:()=>i(e=>!e),title:n(`Share folders`),type:`button`,children:[(0,F.jsx)(_a,{size:15}),a&&a.shares.length>0&&(0,F.jsx)(Q_,{children:a.shares.length>9?`9+`:a.shares.length})]}),r&&(0,F.jsxs)(Uv,{children:[(0,F.jsxs)(Wv,{children:[(0,F.jsx)(Gv,{children:n(`Share`)}),(0,F.jsx)(Kv,{onClick:()=>i(!1),title:n(`Close`),type:`button`,children:(0,F.jsx)(Ri,{size:10})})]}),(0,F.jsxs)(qv,{children:[(0,F.jsxs)(Jv,{children:[(0,F.jsx)(Vi,{size:15}),(0,F.jsxs)(`span`,{children:[(0,F.jsx)(`strong`,{children:a?.deviceName||n(`This device`)}),(0,F.jsx)(Yv,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,F.jsx)(Xv,{children:n(`No folders are shared yet.`)}),a?.shares.map(e=>(0,F.jsxs)(Zv,{children:[(0,F.jsxs)(Qv,{children:[(0,F.jsx)($v,{title:e.path,children:e.name}),(0,F.jsx)(ty,{disabled:s,onClick:()=>void u(()=>zc(e.id)),title:n(`Stop sharing`),type:`button`,children:(0,F.jsx)(Ri,{size:10})})]}),(0,F.jsx)(ey,{title:e.path,children:e.path}),(0,F.jsxs)(ny,{children:[(0,F.jsxs)(ry,{$active:e.mode===`client`,onClick:()=>void u(()=>Bc(e.id,`client`)),title:n(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,F.jsx)(Vi,{size:11}),n(`App`)]}),(0,F.jsxs)(ry,{$active:e.mode===`web`,onClick:()=>void u(()=>Bc(e.id,`web`)),title:n(`Any device with a browser can open this folder.`),type:`button`,children:[(0,F.jsx)(ya,{size:11}),n(`Web`)]})]})]},e.id)),(0,F.jsxs)(iy,{disabled:s||e.length===0||d,onClick:()=>void u(()=>Rc(e,`client`)),title:d?n(`This folder is already shared.`):e,type:`button`,children:[(0,F.jsx)(Ei,{size:12}),n(`Share this folder`)]}),a?.webRunning&&(0,F.jsxs)(ay,{children:[(0,F.jsxs)(oy,{children:[(0,F.jsx)(ya,{size:12}),n(`Browser access`)]}),a.urls.map(e=>(0,F.jsx)(sy,{onClick:()=>void _t(e),type:`button`,children:e},e)),(0,F.jsx)(Yv,{children:n(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var Vv=_.div`
    position: relative;
    display: flex;
`,Hv=_.button`
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
`,Uv=_.div`
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
`,Wv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Gv=_.span`
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
`,Kv=_.button`
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
`,qv=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,Jv=_.div`
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
`,Yv=_.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,Xv=_.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,Zv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,Qv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,$v=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ey=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ty=_.button`
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
`,ny=_.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,ry=_.button`
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
`,iy=_.button`
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
`,ay=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,oy=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,sy=_.button`
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
`;function cy({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=L(),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,E.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=pl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,F.jsxs)(ly,{ref:l,children:[(0,F.jsx)(uy,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,F.jsx)(Ni,{size:14}):(0,F.jsx)(Mi,{size:14})}),s&&(0,F.jsxs)(dy,{children:[(0,F.jsx)(fy,{children:o(`View`)}),(0,F.jsxs)(my,{children:[(0,F.jsxs)(hy,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,F.jsx)(Mi,{size:12}),` `,o(`List`)]}),(0,F.jsxs)(hy,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,F.jsx)(Ni,{size:12}),` `,o(`Grid`)]})]}),(0,F.jsx)(fy,{children:o(`List icon size`)}),(0,F.jsxs)(gy,{children:[(0,F.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,F.jsxs)(_y,{children:[e.iconSize,`px`]})]}),(0,F.jsx)(fy,{children:o(`Grid size`)}),(0,F.jsxs)(gy,{children:[(0,F.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,F.jsxs)(_y,{children:[e.gridSize,`px`]})]}),(0,F.jsxs)(fy,{children:[o(`Columns`),(0,F.jsx)(Gm,{}),(0,F.jsx)(py,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`Reset column widths`),type:`button`,children:o(`Reset widths`)})]}),pl.map(e=>(0,F.jsxs)(vy,{children:[(0,F.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,F.jsxs)(vy,{children:[(0,F.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,F.jsxs)(fy,{children:[o(`Preview panel`),(0,F.jsx)(Gm,{})]}),(0,F.jsxs)(vy,{children:[(0,F.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var ly=_.div`
    position: relative;
    display: flex;
    height: 100%;
`,uy=_.button`
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
`,dy=_.div`
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
`,fy=_.div`
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
`,py=_.button`
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
`,my=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,hy=_.button`
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
`,gy=_.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,_y=_.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,vy=_.label`
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
`,yy=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),by=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),xy=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Sy=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,F.jsx)(`path`,{d:`M2 5h6`})}),Cy=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,F.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),wy=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,F.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,F.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Ty({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:ee,onToggleDetails:te,shortcuts:ne,currentFolder:re}){let C=L(),w=pe(),ie=me(),[T,D]=(0,E.useState)({left:!1,right:!1}),[O,ae]=(0,E.useState)(null),[k,oe]=(0,E.useState)(null),A=(0,E.useRef)(null),j=(0,E.useRef)(null),M=(0,E.useRef)(null),N=(0,E.useCallback)(()=>{let e=j.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;D(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,E.useEffect)(()=>{N();let e=j.current;if(!e)return;let t=new ResizeObserver(N);return t.observe(e),()=>t.disconnect()},[N,e.length]),(0,E.useEffect)(()=>()=>{A.current&&window.clearTimeout(A.current.timer)},[]),(0,E.useEffect)(()=>{M.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let se=e=>j.current?.scrollBy({left:e,behavior:`smooth`}),ce=()=>{A.current&&window.clearTimeout(A.current.timer),A.current=null,oe(null)};return(0,F.jsxs)(ky,{children:[(0,F.jsx)(Ay,{children:(0,F.jsx)(Vi,{size:19})}),(0,F.jsxs)(jy,{children:[T.left&&(0,F.jsx)(Ny,{onClick:()=>se(-180),title:C(`Scroll tabs left`),type:`button`,children:(0,F.jsx)(yy,{})}),(0,F.jsx)(My,{onScroll:N,onWheel:e=>{let t=j.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:j,children:e.map(e=>(0,F.jsxs)(Py,{$active:e.id===t,$dragging:O===e.id,$dropTarget:k===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!fc(t.dataTransfer)||!Ey(e)||(t.preventDefault(),A.current?.id===e.id))return;ce(),oe(e.id);let r=window.setTimeout(()=>{n(e.id),A.current=null},500);A.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(A.current?.id===e.id||k===e.id)&&ce()},onDragEnd:()=>{ae(null),ce()},onDragOver:t=>{(O||fc(t.dataTransfer)&&Ey(e))&&(t.preventDefault(),fc(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>ae(e.id),onDrop:t=>{if(t.preventDefault(),O)a(O,e.id);else if(Ey(e)&&fc(t.dataTransfer)){let{paths:r,move:i}=pc(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}ae(null),ce()},onClick:()=>n(e.id),ref:e.id===t?M:void 0,title:e.path||e.title,type:`button`,children:[(0,F.jsx)(Dy,{tab:e}),(0,F.jsx)(Fy,{children:e.title}),e.partner&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Iy,{children:`|`}),(0,F.jsx)(Oy,{place:e.partner.place}),(0,F.jsx)(Fy,{children:e.partner.title})]}),(0,F.jsx)(Ly,{"data-shortcut":en(ne.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:C(`Close tab`),children:(0,F.jsx)(xy,{})})]},e.id))}),T.right&&(0,F.jsx)(Ny,{onClick:()=>se(180),title:C(`Scroll tabs right`),type:`button`,children:(0,F.jsx)(by,{})}),(0,F.jsx)(Ry,{"data-shortcut":en(ne.newTab),onClick:i,title:C(`New tab`),type:`button`,children:(0,F.jsx)(Ei,{size:13})})]}),(0,F.jsx)(zy,{...ie}),(0,F.jsxs)(By,{children:[(0,F.jsx)(Hy,{$active:y,"data-shortcut":en(ne.splitView),disabled:!b,onClick:x,title:C(y?`Close split view`:`Split view`),type:`button`,children:(0,F.jsx)(Oa,{size:15})}),(0,F.jsx)(Hy,{$active:S,disabled:!ee,onClick:te,title:C(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,F.jsx)(ka,{size:15})}),(0,F.jsxs)(Vy,{$active:_,onClick:v,title:C(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,F.jsx)(va,{size:14}),g>0&&(0,F.jsx)(Q_,{children:g>9?`9+`:g})]}),(0,F.jsx)(Sv,{}),(0,F.jsx)(Bv,{currentFolder:re}),(0,F.jsx)($_,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,F.jsx)(cy,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,F.jsx)(Uy,{onClick:w.minimize,title:C(`Minimize`),type:`button`,children:(0,F.jsx)(Sy,{})}),(0,F.jsx)(Uy,{onClick:w.toggleMaximize,title:w.maximized?C(`Restore`):C(`Maximize`),type:`button`,children:w.maximized?(0,F.jsx)(wy,{}):(0,F.jsx)(Cy,{})}),(0,F.jsx)(Wy,{onClick:w.close,title:C(`Close`),type:`button`,children:(0,F.jsx)(xy,{})})]})]})}function Ey(e){return e.kind===`files`&&(!p(e.path)||T(e.path))}function Dy({tab:e}){switch(e.kind){case`home`:return(0,F.jsx)(yi,{size:13});case`settings`:return(0,F.jsx)(Ai,{size:13});case`recycle`:return(0,F.jsx)(Ii,{size:13});default:return e.archive?(0,F.jsx)(qi,{size:13}):(0,F.jsx)(Oy,{place:e.place})}}function Oy({place:e}){return e?(0,F.jsx)(Gs,{place:e,size:13}):(0,F.jsx)(bi,{size:13})}var ky=_.header`
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
`,Ay=_.span`
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
`,jy=_.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,My=_.div`
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
`,Ny=_.button`
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
`,Py=_.button`
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
`,Fy=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Iy=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Ly=_.span`
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
`,Ry=_.button`
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
`,zy=_.div`
    flex: 1;
    min-width: 28px;
`,By=_.div`
    display: flex;
    flex-shrink: 0;
`,Vy=_.button`
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
`,Hy=_.button`
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
`,Uy=_.button`
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
`,Wy=_(Uy)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Gy(){let[e,t]=(0,E.useState)(null),n=(0,E.useRef)(null),r=(0,E.useRef)(void 0);return(0,E.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Za.createPortal)((0,F.jsx)(Ky,{tooltip:e}),document.body):null}function Ky({tooltip:e}){let t=(0,E.useRef)(null),[n,r]=(0,E.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,E.useState)(()=>e.bottom+6);return(0,E.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,F.jsxs)(qy,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,F.jsx)(Jy,{children:e.text}),e.shortcut&&(0,F.jsx)(Yy,{children:e.shortcut})]})}var qy=_.div`
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
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55);
    pointer-events: none;
    ${po}
`,Jy=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Yy=_.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Xy={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function Zy({deviceName:e,code:t,onAccept:n,onReject:r}){let i=L(),a=(0,E.useRef)(null);return(0,E.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Za.createPortal)((0,F.jsx)(Qy,{children:(0,F.jsxs)($y,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsxs)(eb,{children:[(0,F.jsx)(_a,{size:15}),i(`Pair for sharing`)]}),(0,F.jsx)(tb,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,F.jsx)(nb,{children:t}),(0,F.jsx)(rb,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,F.jsxs)(ib,{children:[(0,F.jsx)(ab,{onClick:r,type:`button`,children:i(`Reject`)}),(0,F.jsx)(ob,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var Qy=_.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${po}
`,$y=_.div`
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
`,eb=_.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,tb=_.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,nb=_.div`
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
`,rb=_.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,ib=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,ab=_.button`
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
`,ob=_(ab)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,sb=0,cb=new Set;function lb(e){cb.add(e),P.send({type:`app.navigate.done`,payload:{path:e}})}var ub=20,db=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function fb(e){return e.history[e.index]??zp(`home`)}function pb(e){return Bp(fb(e))??`files`}function mb(e){let t=fb(e);return Bp(t)?``:e.listing?.path||t}function hb(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||pb(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function gb(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function _b(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||V.iconSize,gridSize:e.view?.gridSize||t.gridSize||V.gridSize,sort:e.view?.sort??V.sort,sortDescending:e.view?.sortDescending??V.sortDescending,columns:t.columns??ye.columns??[]}}function vb(e=zp(`home`)){return sb+=1,{id:`tab-${sb}`,listing:null,loading:!Bp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function yb(e){return e instanceof Error?e.message:String(e)}function bb(e){let t=Jc(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return Yc(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function xb(e){let t=v(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Sb(e){return p(e)?an(e):void 0}function Cb(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:f(n)})}function wb(){let e=L(),[n,r]=(0,E.useState)(()=>[vb()]),[i,a]=(0,E.useState)(()=>n[0].id),[o,s]=(0,E.useState)(null),[d,f]=(0,E.useState)(()=>{let e=tr(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[m,h]=(0,E.useState)([]),[g,_]=(0,E.useState)([]),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(null),[ne,re]=(0,E.useState)(null),C=he(),[w,ie]=(0,E.useState)(Dn),[D,O]=(0,E.useState)(0),[ae,k]=(0,E.useState)(0),[oe,A]=(0,E.useState)(0),[j,M]=(0,E.useState)(Dn),[N,se]=(0,E.useState)(0),[ce,le]=(0,E.useState)(0),[ue,de]=(0,E.useState)(0),[I,R]=(0,E.useState)(0),fe=(0,E.useRef)(I);fe.current=I;let[pe,me]=(0,E.useState)([]),[z,_e]=(0,E.useState)(10),[B,be]=(0,E.useState)(null),Ee=(0,E.useMemo)(()=>(B?.favorites??[]).map(e=>l(e.path)),[B?.favorites]),[Me,Ne]=(0,E.useState)(0),[H,Pe]=(0,E.useState)(Xt),[Fe,Ie]=(0,E.useState)(0),[Le,Re]=(0,E.useState)(0),[ze,Ve]=(0,E.useState)(0),[Ue,We]=(0,E.useState)(!0),[Ge,qe]=(0,E.useState)(()=>{let e=tr(`yafm.preview.width`,320);return e>=220?e:320}),[Je,Xe]=(0,E.useState)(null),[Ze,Qe]=(0,E.useState)(null),[$e,et]=(0,E.useState)(`primary`),[tt,nt]=(0,E.useState)(null),[rt,ot]=(0,E.useState)(null),[U,lt]=(0,E.useState)(null),[ut,dt]=(0,E.useState)(null),[W,ft]=(0,E.useState)({primary:0,secondary:0}),[pt,mt]=(0,E.useState)({primary:null,secondary:null}),[ht,gt]=(0,E.useState)(null),[_t,vt]=(0,E.useState)([]),[yt,bt]=(0,E.useState)(!1),xt=(0,E.useRef)([]),St=(0,E.useRef)([]),[Ct,wt]=(0,E.useState)([]),[Et,Mt]=(0,E.useState)(!1),Pt=(0,E.useMemo)(()=>Et?new Set(Ct.map(e=>e.path)):new Set,[Ct,Et]),[Ft,It]=(0,E.useState)(!1),[Rt,zt]=(0,E.useState)([]),[Bt,Vt]=(0,E.useState)(null),Ht=(0,E.useRef)(0),[Gt,Kt]=(0,E.useState)(()=>{let e=rr(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?gb({x:e.x,y:e.y}):gb({x:Math.max(20,window.innerWidth-340),y:110})}),qt=(0,E.useCallback)(()=>{Kt(e=>gb(e)),It(!0)},[]),K=n.find(e=>e.id===i)??n[0],q=pb(K),nn=fb(K),rn=mb(K),ln=q===`files`?K.listing?.parent??bb(rn):null,un=K.splitWith?n.find(e=>e.id===K.splitWith):void 0,dn=q===`files`&&un!==void 0,J=un?mb(un):``,mn=un?un.listing?.parent??bb(J):null,hn=dn&&un&&$e===`secondary`?un:K,gn=B?.defaultView??ye,_n=_b(hn,gn);(0,E.useEffect)(()=>{ee(B?.accentColor,B?.secondaryColor)},[B?.accentColor,B?.secondaryColor]),(0,E.useEffect)(()=>{Ym(B?.fonts)},[B?.fonts]),(0,E.useEffect)(()=>{te(B?.timeFormat,B?.timeFormatPattern)},[B?.timeFormat,B?.timeFormatPattern]),(0,E.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!B?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[B?.backgroundSource]),(0,E.useEffect)(()=>(ve(e=>new Promise(t=>{Vt({id:++Ht.current,prompt:e,resolve:t})})),()=>ve(null)),[]),(0,E.useEffect)(()=>{et(`primary`)},[i]),(0,E.useEffect)(()=>{M(Dn),le(0),de(0)},[q]),(0,E.useEffect)(()=>{le(0)},[j.query,j.matchCase,j.regex]),(0,E.useEffect)(()=>{le(e=>ue===0?0:Math.min(e,ue-1))},[ue]);let vn=_n.columns.includes(`linkCount`),yn=(0,E.useMemo)(()=>{let e={},t=Hs(B),n={};for(let[e,t]of Object.entries(B?.placeNames??{}))n[l(e)]=t;for(let t of m)e[l(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=l(t),i=m.find(e=>l(e.path)===r);e[r]={name:n[r]??i?.name??(v(t)||t),path:t,kind:`folder`,icon:i?.icon??B?.placeIcons?.[t]??null}}return e},[m,B]),bn=(0,E.useMemo)(()=>({places:yn,useIcons:B?.systemIcons===!1}),[yn,B?.systemIcons]),xn=B?.defaultView?.showImages??!0,Sn=B?.defaultView?.imageStripHeight??ye.imageStripHeight,Cn=q===`home`?(0,F.jsx)(na,{size:13}):q===`settings`?(0,F.jsx)(Ai,{size:13}):q===`recycle`?(0,F.jsx)(Ii,{size:13}):q===`gallery`?(0,F.jsx)(Wi,{size:13}):void 0,wn=w.open&&w.query.length>0,Tn=(0,E.useMemo)(()=>wn&&hn.listing?hn.listing.entries.filter(e=>In(e.isDirectory?Kn(bn,e.fullPath,e.name):e.name,w)).map(e=>e.fullPath):[],[wn,w,hn.listing,bn]);(0,E.useEffect)(()=>{O(0)},[w.query,w.matchCase,w.regex,hn.listing?.path]);let En=Tn.length===0?-1:Math.min(D,Tn.length-1),On=(0,E.useCallback)(()=>{ie(e=>({...e,open:!1,query:``})),O(0)},[]),kn=(0,E.useCallback)(()=>{ie(e=>({...e,open:!0})),k(e=>e+1)},[]),An=(0,E.useCallback)(()=>{M(e=>({...e,open:!0})),se(e=>e+1)},[]),jn=(0,E.useCallback)(()=>{M(Dn),le(0),de(0)},[]),Mn=(0,E.useCallback)(e=>{le(t=>ue===0?0:(Math.min(t,ue-1)+e+ue)%ue)},[ue]),Nn=(0,E.useCallback)(e=>{ie(t=>({...t,open:!0,query:t.open?t.query+e:e})),k(e=>e+1)},[]),Pn=(0,E.useCallback)(e=>{O(t=>Tn.length===0?0:(Math.min(t,Tn.length-1)+e+Tn.length)%Tn.length)},[Tn.length]),Fn=(0,E.useRef)({tabs:n,activeId:i,activePane:$e});Fn.current={tabs:n,activeId:i,activePane:$e};let Ln=(0,E.useRef)(B);Ln.current=B;let Rn=(0,E.useRef)(!1),zn=(0,E.useRef)([]),Bn=(0,E.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Vn=(0,E.useRef)(new Map),Hn=(0,E.useCallback)(e=>{let t=(Vn.current.get(e)??0)+1;return Vn.current.set(e,t),()=>Vn.current.get(e)===t},[]),Wn=(0,E.useCallback)((e,t)=>{P.available&&t&&e===hb(Fn.current)&&P.send({type:`fs.focus`,payload:{path:t}})},[]),qn=(0,E.useCallback)(async(e,t,n)=>{if(!(t&&qc(t)))try{let r=await ke(t,vn);if(!n()||!r.listing)return;Bn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[vn,Bn]),Jn=(0,E.useCallback)(async(e,n,r=!1)=>{let i=Hn(e);On(),Wn(e,n);let a=!r||!Fn.current.tabs.find(t=>t.id===e)?.listing,o=!r&&n!==void 0;Bn(e,e=>{if(!o)return{listing:r?e.listing:null,loading:!0,error:null,fresh:r&&e.fresh};let i=e.history[e.index],a=i!==void 0&&t(i,n);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),n],index:a?e.index:e.index+1}});try{a&&qn(e,n,i);let t=n&&qc(n)?await Xc(n):await Se(n,!0,vn,fe.current,n?Sb(n):void 0);if(!i())return;Bn(e,e=>({listing:t,view:t.view??null,loading:!1,fresh:!1,history:o?e.history.map((n,r)=>r===e.index?t.path:n):e.history,index:e.index})),!r&&!qc(t.path)&&He(t.path).then(()=>Ne(e=>e+1))}catch(t){if(!i())return;let a=Fn.current.tabs.find(t=>t.id===e),o=n&&n.length>0?n:a?mb(a):``,s=bb(o),c=yb(t);if(o&&cn(c)){let t=u(o),a=await Va(t,!!an(t));if(a){on(t,a),i()&&Jn(e,n,r);return}}Bn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...r?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Hn,vn,Bn,Wn,On,qn]),Yn=(0,E.useCallback)((e,t)=>{let n=Vp(t);n&&(Bp(n)?(On(),Hn(e),Bn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Jn(e,n))},[Hn,Jn,Bn,On]),Xn=(0,E.useCallback)(async(e,t,n)=>{if(On(),Bp(t)){Hn(e),Bn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Hn(e);Wn(e,t),Bn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{qc(t)||qn(e,t,r);let n=qc(t)?await Xc(t):await Se(t,!0,vn,fe.current,Sb(t));if(!r())return;Bn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(cn(yb(i))){let i=u(t),a=await Va(i,!!an(i));if(a){on(i,a),r()&&Xn(e,t,n);return}}Bn(e,()=>({listing:{path:t,parent:bb(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:yb(i)}))}},[Hn,vn,Bn,Wn,On,qn]),Zn=(0,E.useCallback)((e,t=!0)=>{let n=vb(e??zp(`home`));return r(e=>[...e,n]),t&&a(n.id),e&&!Bp(e)&&Jn(n.id,e),n.id},[Jn]),Qn=(0,E.useCallback)(e=>{for(let n of Fn.current.tabs)pb(n)===`files`&&t(mb(n),e)&&Jn(n.id,e,!0)},[Jn]),$n=(0,E.useCallback)((e,n)=>{let r=v(n);for(let i of Fn.current.tabs)i.listing?.entries.some(n=>t(n.fullPath,e))&&Bn(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>t(i.fullPath,e)?{...i,name:r,fullPath:n}:i);return{listing:{...a,entries:o}}})},[Bn]),er=(0,E.useRef)([]);(0,E.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&p(n)&&e.add(l(u(n)))}let t=er.current.filter(t=>!e.has(t));er.current=[...e],t.length>0&&Te(t)},[n]);let ar=(0,E.useCallback)((e,t=!1)=>{t?Zn(zp(e)):Yn(Fn.current.activeId,zp(e))},[Zn,Yn]),or=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Fn.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(St.current.push(fb(i)),St.current.length>ub&&St.current.shift()),o.length===0){let e=vb();r([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);r(o),n===e&&a(o[Math.min(s,o.length-1)].id)},[]),sr=(0,E.useCallback)(()=>{let e=St.current.pop();if(!e)return;let t={...vb(e),fresh:!1};r(e=>[...e,t]),a(t.id),pb(t)===`files`&&Jn(t.id,mb(t))},[Jn]),cr=(0,E.useCallback)((e,t=!1)=>{t?Zn(e):Yn(hb(Fn.current),e??zp(`home`))},[Yn,Zn]),lr=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Fn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),ur=(0,E.useCallback)(()=>{let{tabs:e,activeId:t}=Fn.current,n=e.find(e=>e.id===t);if(!n||pb(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),Bn(t,()=>({splitWith:void 0})),et(`primary`);return}let a=mb(n),o={...vb(a),hidden:!0};r(e=>[...e,o]),Bn(t,()=>({splitWith:o.id})),Jn(o.id,a),et(`primary`)},[Jn,Bn]),dr=(0,E.useCallback)(e=>{qe(e),nr(`yafm.preview.width`,e)},[]),fr=dn?$e===`secondary`?Ze??Je:Je??Ze:Je,pr=(0,E.useRef)(null),mr=e=>{e.preventDefault();let t=pr.current?.getBoundingClientRect();if(!t)return;let n=Ue?Ge:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);f(n),nr(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},hr=(e,t,n)=>{t&&nt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},gr=(0,E.useCallback)((e,t)=>{ft(n=>n[e]===t?n:{...n,[e]:t})},[]),_r=(0,E.useCallback)(e=>gr(`primary`,e),[gr]),vr=(0,E.useCallback)(e=>gr(`secondary`,e),[gr]),yr=(e,t)=>{W[e]!==0&&mt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},br=async(e,t=!1)=>{let n=tt;if(nt(null),!n)return;let r=e===null?await Nt(n.directory,t):await Lt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;On(),gt(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},xr=(0,E.useCallback)(()=>{let{tabs:e}=Fn.current,t=e.find(e=>e.id===hb(Fn.current));t&&t.index>0&&Xn(t.id,t.history[t.index-1],t.index-1)},[Xn]),Sr=(0,E.useCallback)(()=>{let{tabs:e}=Fn.current,t=e.find(e=>e.id===hb(Fn.current));t&&t.index<t.history.length-1&&Xn(t.id,t.history[t.index+1],t.index+1)},[Xn]),Cr=(0,E.useCallback)(()=>{let{tabs:e}=Fn.current,t=e.find(e=>e.id===hb(Fn.current));t&&pb(t)===`files`&&t.listing?.parent&&cr(t.listing.parent)},[cr]),wr=(0,E.useRef)(null),Tr=(0,E.useCallback)(()=>{for(let e of Fn.current.tabs)e.listing&&Jn(e.id,e.listing.path,!0)},[Jn]),Er=(0,E.useCallback)(e=>{e.length!==0&&(zt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),qt())},[qt]),Dr=(0,E.useCallback)(async e=>{let t=await kt(e);t.length!==0&&Er(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Er]),Or=(0,E.useCallback)(e=>{let t=new Set(e);zt(e=>e.filter(e=>!t.has(e.path)))},[]),kr=(0,E.useCallback)(async e=>{let t=Ln.current;if(!t)return;let n=await kt(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>l(e.path))),i=n.filter(e=>!r.has(l(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};be(a),await it(a),Ie(e=>e+1)},[]),Ar=(0,E.useCallback)(async e=>{let t=Ln.current;if(!t)return;let n=new Set(e.map(l)),r=(t.favorites??[]).filter(e=>!n.has(l(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};be(i),await it(i),Ie(e=>e+1)},[]),jr=(0,E.useCallback)(()=>zt([]),[]),Mr=(0,E.useRef)(-1),Nr=(0,E.useCallback)(e=>{wt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Mt(e.move),e.entries.length>0&&qt()},[qt]),Pr=(0,E.useCallback)(async()=>{if(P.available)try{let e=await Dt();Mr.current=e.sequence,Nr(e)}catch{}},[Nr]),Fr=(0,E.useCallback)(async e=>{e.length!==0&&await Tt(e,!1)&&await Pr()},[Pr]),Ir=(0,E.useRef)(Rt);Ir.current=Rt;let Lr=(0,E.useRef)(Ft);Lr.current=Ft;let Rr=(0,E.useRef)(!1);(0,E.useEffect)(()=>{let e=B?.trayAutoShow??!0,t=t=>{e&&fc(t)&&(Lr.current||(Rr.current=!0),qt())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{Rr.current&&window.setTimeout(()=>{Rr.current&&Ir.current.length===0&&It(!1),Rr.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[qt,B?.trayAutoShow]),(0,E.useEffect)(()=>{let e=()=>Kt(e=>gb(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let zr=(0,E.useCallback)(async()=>{let e=Ir.current;if(e.length>0){let t=await kt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));zt(e=>e.filter(e=>n.has(e.path)))}await Pr()},[Pr]),Br=(0,E.useCallback)(()=>{zr(),Ve(e=>e+1),Tr()},[zr,Tr]),Vr=(0,E.useCallback)(e=>{let t=gb(e);Kt(t),ir(`yafm.tray.position`,t)},[]),Hr=(0,E.useCallback)(()=>{Rr.current=!1,Ft?It(!1):qt()},[qt,Ft]),Ur=(0,E.useCallback)(async(t,n,r)=>{let i=await Ot(t,n,r);i.ok?(r&&Or(t),Ve(e=>e+1),Tr(),Pr()):za(i.error??e(`The files could not be transferred.`))},[Tr,Pr,Or]);(0,E.useEffect)(()=>{if(P.available)return G().then(e=>{xt.current=e,vt(e)},()=>void 0),P.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=xt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});xt.current=n,vt(n),r&&bt(!0)})},[]);let Wr=(0,E.useCallback)(()=>{Yt().then(()=>G().then(e=>{xt.current=e,vt(e)},()=>void 0))},[]);(0,E.useEffect)(()=>{if(!P.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Dt();if(!e||t.sequence===Mr.current)return;Mr.current=t.sequence,Nr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Nr]);let Gr=(0,E.useCallback)(async e=>{let t=e?await Ut():await Wt();t.ok?(Ve(e=>e+1),Tr()):t.error&&!t.error.startsWith(`Nothing to`)&&za(t.error)},[Tr]),Kr=(0,E.useRef)(vn);(0,E.useEffect)(()=>{Kr.current!==vn&&(Kr.current=vn,Tr())},[vn,Tr]);let qr=(0,E.useCallback)((e,t)=>{let{tabs:n}=Fn.current,r=n.find(t=>t.id===e);if(!r||pb(r)!==`files`)return;let i=mb(r),a=Ln.current?.defaultView??ye,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||V.iconSize,gridSize:r.view?.gridSize||a.gridSize||V.gridSize,sort:r.view?.sort??V.sort,sortDescending:r.view?.sortDescending??V.sortDescending,...t};Bn(e,()=>({view:o})),wr.current!==null&&window.clearTimeout(wr.current),wr.current=window.setTimeout(()=>{wr.current=null,De(i,o)},250)},[Bn]),Jr=(0,E.useCallback)(e=>{qr(hb(Fn.current),e)},[qr]),Yr=(0,E.useCallback)(e=>{let t=Ln.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ye,columns:e}};be(n),it(n)},[]),Xr=(0,E.useCallback)(e=>{let t=Ln.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ye,showImages:e}};be(n),it(n)},[]),Zr=(0,E.useCallback)(e=>{let t=Ln.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ye,imageStripHeight:e}};be(n),it(n)},[]),Qr=(0,E.useCallback)((e,t,n,r)=>{let i=Fn.current.tabs.find(t=>t.id===e);if(!i||pb(i)!==`files`||!i.listing)return;let a=mb(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Bn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Oe(a,t,n,r)},[Bn]),$r=(0,E.useCallback)((e,t)=>{let n=Fn.current.tabs.find(t=>t.id===e);if(!n)return;let r=_b(n,Ln.current?.defaultView??ye);qr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[qr]),ei=(0,E.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),ti=(0,E.useCallback)(()=>{Ae().then(h,()=>h([]))},[]),ni=(0,E.useCallback)(e=>{let t=(e.openTabs??[]).map(Vp).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...vb(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),a(n[i].id);for(let e of n)pb(e)===`files`&&Jn(e.id,mb(e),!0);return!0},[Jn]),ri=(0,E.useCallback)(e=>{let t=zn.current;if(zn.current=[],t.length===0)return;let n=t.filter(e=>!cb.has(e));for(let e of t)n.includes(e)||lb(e);if(n.length===0)return;let{tabs:r}=Fn.current;if(!e&&r.length===1&&r[0].fresh){Yn(r[0].id,n[0]),lb(n[0]);for(let e of n.slice(1))Zn(e),lb(e);return}let i=n.map(e=>{let t=Zn(e);return lb(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[Zn,Yn]),ii=(0,E.useCallback)(()=>{Ye().then(e=>{be(e),_e(e.recentLimit);let t={...Xt,...e.shortcuts};Pe(t),Zt(t.openInNewTab),Ie(e=>e+1),Rn.current||(Rn.current=!0,ri(e.restoreTabs&&ni(e)))},()=>{_e(10),Rn.current=!0,ri(!1)})},[ri,ni]),ai=(0,E.useCallback)(()=>{Be().then(me,()=>me([]))},[]),oi=(0,E.useCallback)(()=>{je().then(_,()=>_([]))},[]),si=n.filter(e=>!e.hidden),ci=si.map(fb),li=ci.join(`
`),ui=Math.max(si.findIndex(e=>e.id===i),0);(0,E.useEffect)(()=>{if(!B?.restoreTabs)return;let e=setTimeout(()=>void at(ci,ui),700);return()=>clearTimeout(e)},[li,ui,B?.restoreTabs]),(0,E.useEffect)(()=>{let{tabs:e,activeId:t}=Fn.current,n=e.find(e=>e.id===t);n&&n.fresh&&pb(n)===`files`&&Jn(n.id,mb(n),!0),ti(),ii(),oi(),st().then(b,()=>b(null))},[Jn,ti,ii,oi]),(0,E.useEffect)(()=>{if(ct().then(S,()=>S(null)),P.available)return P.on(e=>{let t=e;t.type===`update.checked`&&t.data&&S(t.data)})},[]),(0,E.useEffect)(()=>{if(P.available)return P.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&s({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&za(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&za(n.data.error??e(`Pairing failed.`))}})},[e]),(0,E.useEffect)(()=>{let e=setInterval(oi,3e4);return()=>clearInterval(e)},[oi]),(0,E.useEffect)(()=>{q===`home`&&(ai(),oi())},[q,K.id,ai,oi]),(0,E.useEffect)(()=>{if(!P.available)return;let e=P.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Fn.current,i=t.data.startup===!0;i&&cb.has(n)?lb(n):i&&!Rn.current?zn.current.includes(n)||zn.current.push(n):(i&&r.length===1&&r[0].fresh?Yn(r[0].id,n):Bp(n)?Yn(hb(Fn.current),n):Zn(n),i&&lb(n))});return P.send({type:`app.ready`}),e},[Yn,Zn]),(0,E.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},r})})},[]),(0,E.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},r})})},[]),(0,E.useEffect)(()=>{let e=e=>{if(tn(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),xr();return}if(e.key===`BrowserForward`){e.preventDefault(),Sr();return}if(e.key===`Escape`&&w.open){e.preventDefault(),On();return}let t=$t(e);if(t===H.closeTab)e.preventDefault(),or(hb(Fn.current));else if(t===H.newTab)e.preventDefault(),Zn();else if(t===H.reopenTab)e.preventDefault(),sr();else if(t===H.goBack)e.preventDefault(),xr();else if(t===H.goForward)e.preventDefault(),Sr();else if(t===H.goUp)e.preventDefault(),Cr();else if(t===H.find)e.preventDefault(),q===`files`?kn():An();else if(t===H.location)e.preventDefault(),Re(e=>e+1);else if(t===H.home){e.preventDefault();let t=m.find(e=>e.kind===`home`)?.path;t&&cr(t)}else t===H.iconsView?(e.preventDefault(),q===`files`&&Jr({mode:`grid`})):t===H.detailsView?(e.preventDefault(),q===`files`&&Jr({mode:`list`})):t===H.nextTab?(e.preventDefault(),lr(1)):t===H.previousTab?(e.preventDefault(),lr(-1)):t===H.hidden||t===`alt+.`?(e.preventDefault(),Ke().then(()=>{Ve(e=>e+1),Tr()})):t===H.undo?(e.preventDefault(),Gr(!0)):t===H.redo?(e.preventDefault(),Gr(!1)):t===H.splitView?(e.preventDefault(),ur()):q!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Nn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[H,q,w.open,or,sr,Zn,xr,Sr,Cr,kn,An,On,Nn,Jr,lr,cr,m,Tr,Gr,ur]),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),xr()):e.button===4&&(e.preventDefault(),Sr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[xr,Sr]);let di=(0,E.useMemo)(()=>{let e=new Set;for(let t of n){if(pb(t)!==`files`)continue;let n=mb(t);if(n&&!qc(n)){if(p(n)){let t=bb(u(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),fi=di.join(`\0`);(0,E.useEffect)(()=>{P.available&&P.send({type:`fs.watch`,payload:{paths:di,owner:`app`}})},[fi,i]);let pi=pb(hn)===`files`?mb(hn):``;(0,E.useEffect)(()=>{P.available&&P.send({type:`fs.focus`,payload:{path:pi||null}})},[pi]),(0,E.useEffect)(()=>{if(P.available)return P.on(e=>{let n=e;if(n.type!==`fs.changed`||typeof n.data?.path!=`string`)return;let r=n.data.path,i=Fn.current.tabs.filter(e=>pb(e)===`files`&&t(mb(e),r)),a=Fn.current.tabs.filter(e=>{let n=mb(e);return pb(e)===`files`&&n.length>0&&p(n)&&t(u(n),r)});if(i.length!==0||a.length!==0){pn(r);for(let e of a){let n=Fn.current.tabs.find(t=>t.id===e.id),i=n?mb(n):``;n&&pb(n)===`files`&&!n.loading&&p(i)&&t(u(i),r)&&Jn(e.id,i,!0)}i.length!==0&&Se(r,!1,vn).then(e=>{for(let n of i){let r=Fn.current.tabs.find(e=>e.id===n.id);r&&pb(r)===`files`&&t(mb(r),e.path)&&(r.loading?window.setTimeout(()=>{let r=Fn.current.tabs.find(e=>e.id===n.id);r&&!r.loading&&pb(r)===`files`&&t(mb(r),e.path)&&Bn(n.id,()=>({listing:e}))},300):Bn(n.id,()=>({listing:e})))}},()=>void 0)}})},[vn,Jn,Bn]);let mi=K.index>0,hi=K.index<K.history.length-1,gi=(e,n)=>{let r=_b(e,gn),i=e.listing?.path??e.history[e.index]??``,a=p(i),o=a&&T(i);return(0,F.jsx)(Sl,{confirmDelete:B?.confirmDelete??!1,cutPaths:Pt,previewVideoAudio:B?.previewVideoAudio??!1,previewVideoAutoplay:B?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:n?Xe:Qe,onActivate:()=>et(n?`primary`:`secondary`),enableShortcuts:(!dn||(n?$e===`primary`:$e===`secondary`))&&(!a||o),error:e.error,find:e.id===hn.id?{...w,currentPath:En<0?null:Tn[En]}:void 0,selectMatchesToken:e.id===hn.id?oe:0,imageStripHeight:Sn,listing:e.listing,loading:e.loading,onImageStripHeight:Zr,readOnly:a&&!o||qc(e.listing?.path??``),onOpen:(t,n)=>{n?Zn(t):Jn(e.id,t)},onOpenFile:(t,n)=>{qc(t)?Qc(t).catch(e=>void za(yb(e))):c(t)?B?.archiveHandler??!1?n?Zn(t):Jn(e.id,t):xe(t):p(t)?(async()=>{let e=await we(t,fe.current,Sb(t));if(!e.path&&cn(e.error)){let n=u(t),r=an(n);r&&sn(n);let i=await Va(n,!!r);i&&(on(n,i),e=await we(t,fe.current,i))}e.path?xe(e.path):e.error&&za(e.error)})():xe(t)},onRefresh:()=>{let t=e.listing?.path;t&&Qn(t)},onRename:$n,onSelectionCountChange:n?_r:vr,onSetTags:(t,n,r)=>Qr(e.id,t,n,r),selectionMenuRequest:n?pt.primary:pt.secondary,onSort:t=>$r(e.id,t),onPaste:Br,onClipboardChanged:()=>void Pr(),onTransfer:Ur,onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void xi(e,t),openOnSingleClick:B?.openOnSingleClick??!1,pendingRename:ht&&n===($e===`primary`)&&t(ht.directory,e.listing?.path??``)?ht.path:null,pendingRenameToken:ht?.token??0,refreshToken:ze,shortcuts:H,showCheckboxes:B?.showCheckboxes??!0,showImages:xn,view:r})},_i=w.open&&(0,F.jsx)(Yd,{current:En,focusToken:ae,matchCase:w.matchCase,mode:w.mode,onClose:On,onMatchCase:()=>ie(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ie(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Pn(1),onPrevious:()=>Pn(-1),onQuery:e=>ie(t=>({...t,query:e})),onRegex:()=>ie(e=>({...e,regex:!e.regex})),query:w.query,regex:w.regex,total:Tn.length,onSelectMatches:Tn.length>0?()=>A(e=>e+1):void 0}),vi=q===`files`&&p(rn),Y=vi&&T(rn),yi=vi&&K.listing?.archiveEncrypted===!0,bi=async(t,n)=>{let r=u(t),i=await Ce(r,n,fe.current,Sb(r));if(!i.ok&&cn(i.error)){let e=an(r);e&&sn(r);let t=await Va(r,!!e);t&&(on(r,t),i=await Ce(r,n,fe.current,t))}i.ok?(Qn(n),fn(),Jn(K.id,n,!0)):za(`${e(`Could not extract the archive.`)}${i.error?`\n${i.error}`:``}`)},xi=async(e,n)=>{let r=u(e),i=bb(r);if(!i)return;if(n===`choose`){let e=await Pa(i);e&&await bi(r,e);return}let a=n===`named`;if(n===`auto`){let e=t(r,rn)?K.listing?.entries??[]:(await Se(r,!1,!1,fe.current,Sb(r))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${xb(r)}`:i;await bi(r,s)},Si=async e=>{vi&&await xi(rn,e)},Ti=async()=>{vi&&await xi(rn,`choose`)},ki=(0,F.jsxs)(kb,{children:[(0,F.jsx)(Ab,{"data-shortcut":en(H.goBack),disabled:!mi,onClick:e=>{K.index>0&&Qt(e)?Zn(K.history[K.index-1]):xr()},title:e(`Back`),type:`button`,children:(0,F.jsx)(Di,{})}),(0,F.jsx)(Ab,{"data-shortcut":en(H.goForward),disabled:!hi,onClick:e=>{K.index<K.history.length-1&&Qt(e)?Zn(K.history[K.index+1]):Sr()},title:e(`Forward`),type:`button`,children:(0,F.jsx)(Oi,{})}),(0,F.jsx)(Ab,{"data-shortcut":en(H.goUp),disabled:q!==`files`||!ln,onClick:e=>{ln&&(Qt(e)?Zn(ln):cr(ln))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(wi,{})}),(0,F.jsx)(Hp,{focusToken:Le,icon:Cn,label:q===`files`?void 0:e(Xy[q]),onContextMenu:q===`files`?(e,t,n)=>lt({x:t,y:n,path:e}):void 0,onNavigate:cr,path:q===`files`?rn:nn}),q===`files`&&(!vi||Y)&&(0,F.jsx)(Ab,{onClick:e=>hr(e,rn,()=>void Jn(K.id,rn,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)(Ei,{})}),(0,F.jsx)(Ab,{"data-shortcut":en(H.find),onClick:()=>q===`files`?kn():An(),title:e(`Search`),type:`button`,children:(0,F.jsx)(Ci,{})}),W.primary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Nb,{}),(0,F.jsx)(Ab,{onClick:e=>yr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)(Aa,{})})]}),vi&&(0,F.jsxs)(jb,{children:[(0,F.jsx)(Nb,{}),yi&&(0,F.jsxs)(Mb,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(ja,{size:12}),e(`Encrypted`)]}),(0,F.jsx)(Ab,{onClick:()=>void Ti(),onContextMenu:e=>{e.preventDefault(),ot({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,F.jsx)(qi,{})}),(0,F.jsx)(Ao,{icon:(0,F.jsx)(ya,{size:15}),onChange:e=>{let t=Number(e);R(t),fe.current=t,vi&&Jn(K.id,rn,!0)},options:db.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(db.find(e=>e.value===String(I))?.label??`Auto`)}`,value:String(I)})]})]}),ji=j.open?{...j,index:ce}:null;return(0,F.jsx)(Un,{value:bn,children:(0,F.jsxs)(Tb,{$rounded:C,children:[(0,F.jsx)(fd,{settings:B}),(0,F.jsx)(Ty,{activeId:K.id,onClose:or,onNewTab:()=>Zn(),onReorder:ei,onTransferToTab:Ur,onSelect:a,onViewChange:Jr,onColumns:Yr,onShowImages:Xr,showImages:xn,tasks:_t,onClearTasks:Wr,activityOpen:yt,onActivityOpenChange:bt,trayCount:Rt.length+Ct.length,trayVisible:Ft,onToggleTray:Hr,split:dn,canSplit:q===`files`,onToggleSplit:ur,details:Ue,canDetails:q===`files`||q===`recycle`||q===`gallery`,onToggleDetails:()=>We(e=>!e),currentFolder:q===`files`&&!qc(rn)?rn:``,shortcuts:H,view:_n,tabs:n.filter(e=>!e.hidden).map(t=>{let r=pb(t),i=mb(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?mb(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Gn(bn,i):void 0,archive:r===`files`&&p(i),split:!!a,title:r===`files`?Kn(bn,i,v(i)||e(`Files`)):e(Xy[r]),partner:a?{title:Kn(bn,o,v(o)||e(`Files`)),place:Gn(bn,o)}:void 0}})}),(0,F.jsxs)(Eb,{children:[(0,F.jsx)(P_,{activeKind:q,currentPath:q===`files`?nn:``,drives:g,historyVersion:Me,onNavigate:cr,onOpenView:ar,homePath:m.find(e=>e.kind===`home`)?.path??``,places:m,recent:pe,recentLimit:z,version:Fe}),(0,F.jsxs)(Db,{children:[q!==`files`&&ki,(0,F.jsxs)(Ob,{children:[q!==`files`&&j.open&&(0,F.jsx)(Yd,{current:ce,focusToken:N,matchCase:j.matchCase,mode:j.mode,onClose:jn,onMatchCase:()=>M(e=>({...e,matchCase:!e.matchCase})),onMode:()=>M(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Mn(1),onPrevious:()=>Mn(-1),onQuery:e=>M(t=>({...t,query:e})),onRegex:()=>M(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:j.query,regex:j.regex,total:ue,onSelectMatches:q===`gallery`||q===`recycle`?()=>A(e=>e+1):void 0}),q===`files`?dn&&un?(0,F.jsxs)(Fb,{ref:pr,children:[(0,F.jsxs)(Ib,{style:{flex:d},children:[(0,F.jsxs)(Pb,{$active:$e===`primary`,onPointerDown:()=>et(`primary`),children:[(0,F.jsx)(Ab,{"data-shortcut":en(H.goBack),disabled:!mi,onClick:e=>{let t=K.index-1;t<0||(Qt(e)?Zn(K.history[t]):Xn(K.id,K.history[t],t))},title:e(`Back`),type:`button`,children:(0,F.jsx)(Di,{})}),(0,F.jsx)(Ab,{"data-shortcut":en(H.goForward),disabled:!hi,onClick:e=>{let t=K.index+1;t>=K.history.length||(Qt(e)?Zn(K.history[t]):Xn(K.id,K.history[t],t))},title:e(`Forward`),type:`button`,children:(0,F.jsx)(Oi,{})}),(0,F.jsx)(Ab,{"data-shortcut":en(H.goUp),disabled:!ln,onClick:e=>{ln&&(Qt(e)?Zn(ln):Jn(K.id,ln))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(wi,{})}),(0,F.jsx)(Hp,{focusToken:$e===`primary`?Le:void 0,onContextMenu:(e,t,n)=>lt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Zn(e):void Jn(K.id,e),path:rn}),(0,F.jsx)(Ab,{onClick:e=>hr(e,rn,()=>void Jn(K.id,rn,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)(Ei,{})}),(0,F.jsx)(Ab,{"data-shortcut":en(H.find),onClick:kn,title:e(`Search`),type:`button`,children:(0,F.jsx)(Ci,{})}),W.primary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Nb,{}),(0,F.jsx)(Ab,{onClick:e=>yr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)(Aa,{})})]})]}),gi(K,!0),$e===`primary`&&_i]}),(0,F.jsx)(Lb,{onDoubleClick:()=>f(.5),onPointerDown:mr,title:e(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(Ib,{$enter:!0,style:{flex:1-d},children:[(0,F.jsxs)(Pb,{$active:$e===`secondary`,onPointerDown:()=>et(`secondary`),children:[(0,F.jsx)(Ab,{"data-shortcut":en(H.goBack),disabled:un.index<=0,onClick:e=>{let t=un.index-1;t<0||(Qt(e)?Zn(un.history[t]):Xn(un.id,un.history[t],t))},title:e(`Back`),type:`button`,children:(0,F.jsx)(Di,{})}),(0,F.jsx)(Ab,{"data-shortcut":en(H.goForward),disabled:un.index>=un.history.length-1,onClick:e=>{let t=un.index+1;t>=un.history.length||(Qt(e)?Zn(un.history[t]):Xn(un.id,un.history[t],t))},title:e(`Forward`),type:`button`,children:(0,F.jsx)(Oi,{})}),(0,F.jsx)(Ab,{"data-shortcut":en(H.goUp),disabled:!mn,onClick:e=>{mn&&(Qt(e)?Zn(mn):Jn(un.id,mn))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(wi,{})}),(0,F.jsx)(Hp,{focusToken:$e===`secondary`?Le:void 0,onContextMenu:(e,t,n)=>lt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Zn(e):void Jn(un.id,e),path:J}),(0,F.jsx)(Ab,{onClick:e=>hr(e,J,()=>void Jn(un.id,J,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)(Ei,{})}),(0,F.jsx)(Ab,{"data-shortcut":en(H.find),onClick:kn,title:e(`Search`),type:`button`,children:(0,F.jsx)(Ci,{})}),W.secondary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Nb,{}),(0,F.jsx)(Ab,{onClick:e=>yr(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)(Aa,{})})]})]}),gi(un,!1),$e===`secondary`&&_i]}),(0,F.jsx)(ps,{info:fr,onWidth:dr,open:Ue,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,width:Ge})]}):(0,F.jsxs)(zb,{children:[(0,F.jsxs)(Bb,{children:[ki,(0,F.jsxs)(Rb,{children:[gi(K,!0),_i]})]}),(0,F.jsx)(ps,{info:Je,onWidth:dr,open:Ue,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,width:Ge})]}):q===`home`?(0,F.jsx)(Mp,{drives:g,find:ji,historyVersion:Me,onSearchMatches:de,homePath:m.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:oi,onHistoryChanged:()=>Ne(e=>e+1),onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void xi(e,t),settingsVersion:Fe,onOpen:cr,onLayoutChanged:ii,onPlacesChanged:h,onRecentCleared:ai,places:m,recent:pe,recentLimit:z,visibilityVersion:ze}):q===`settings`?(0,F.jsx)(bh,{appInfo:y,find:ji,focusSection:ne,onSearchMatches:de,onSettingsChanged:ii}):q===`gallery`?(0,F.jsx)(b_,{confirmDelete:B?.confirmDelete??!1,find:ji,onSearchMatches:de,openOnSingleClick:B?.openOnSingleClick??!1,onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void xi(e,t),shortcuts:H,showCheckboxes:B?.showCheckboxes??!0,selectMatchesToken:oe,showDetails:Ue,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,view:_n}):(0,F.jsx)(am,{find:ji,onOpenLocation:cr,onShowDetails:()=>We(!0),platform:y?.platform,selectMatchesToken:oe,showDetails:Ue,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1})]},q),(0,F.jsxs)(Gb,{children:[(0,F.jsx)(`span`,{children:q===`files`&&K.listing?Cb(e,K.listing):``}),y?(0,F.jsxs)(Vb,{children:[(0,F.jsxs)(`span`,{children:[`v`,y.version,` · `,y.platform]}),y.debug&&(0,F.jsx)(Wb,{children:`debug`}),x?.available&&(0,F.jsxs)(Hb,{onClick:()=>{re(`updates`),ar(`settings`)},title:e(`Version {version} is available.`,{version:x.latest}),type:`button`,children:[(0,F.jsx)(Ub,{}),e(`Update available`)]})]}):(0,F.jsx)(`span`,{children:e(`browser preview`)})]})]})]}),(0,F.jsx)(_c,{clipboardItems:Ct,clipboardMove:Et,currentDirectory:q===`files`?nn:``,items:Rt,onAdd:e=>void Dr(e),onClear:jr,onClose:()=>It(!1),onCopyToClipboard:e=>void Fr(e),onPosition:Vr,onRemove:Or,onTransfer:Ur,position:Gt,visible:Ft}),tt&&(0,F.jsx)(Do,{creationOnly:!0,directory:tt.directory,menu:{x:tt.x,y:tt.y,paths:[],background:!0},onClose:()=>nt(null),onCreateFile:e=>void br(e),onCreateFolder:e=>void br(null,e),shortcuts:H}),U&&(0,F.jsx)(Do,{allowCompression:!0,directory:bb(U.path)??U.path,menu:{x:U.x,y:U.y,paths:[U.path]},onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void xi(e,t),onArchiveCreated:e=>{e&&Qn(bb(U.path)??U.path)},onClose:()=>lt(null),onCompressTo:(e,t)=>dt({paths:e,name:t}),onCopy:(e,t)=>void Tt(e,t),onDelete:e=>void jt(e,!1).then(()=>Qn(bb(U.path)??U.path)),onOpen:(e,t)=>t?Zn(e):void Jn(K.id,e),onOpenFile:e=>void xe(e),onPaste:e=>void At(e).then(t=>{t.ok&&Qn(e)}),onRefresh:()=>Qn(U.path),shortcuts:H,target:{path:U.path,isDirectory:!0}}),ut&&(0,F.jsx)(Uo,{initialDirectory:bb(U?.path??rn)??rn,initialName:ut.name,onCancel:()=>dt(null),onCompress:async e=>{let t=await Jt(ut.paths,e);return!t.ok&&t.error&&za(t.error),t.ok}}),rt&&(0,F.jsx)(ho,{items:[{label:e(`Extract here`),onSelect:()=>void Si(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void Si(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void Si(`auto`)}],onClose:()=>ot(null),x:rt.x,y:rt.y}),Bt&&(0,F.jsx)(_d,{delaySeconds:Bt.prompt.delaySeconds,hits:Bt.prompt.hits,onCancel:()=>{Bt.resolve(!1),Vt(null)},onConfirm:()=>{Bt.resolve(!0),Vt(null)},permanent:Bt.prompt.permanent},Bt.id),(0,F.jsx)(Md,{}),(0,F.jsx)(zd,{}),o&&(0,F.jsx)(Zy,{code:o.code,deviceName:o.deviceName,onAccept:()=>{Wc(o.requestId,!0),s(null)},onReject:()=>{Wc(o.requestId,!1),s(null)}}),(0,F.jsx)(Gy,{}),(0,F.jsx)(ge,{})]})})}var Tb=_.div`
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
`,Eb=_.div`
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
    }
`,Db=_.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Ob=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${lo}
`,kb=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Ab=_.button`
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
`,jb=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Mb=_.span`
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
`,Nb=_.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Pb=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Fb=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Ib=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?po:``}
`,Lb=_.div`
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
`,Rb=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,zb=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Bb=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Vb=_.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Hb=_.button`
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
`,Ub=_.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Wb=_.span`
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
`,Gb=_.footer`
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
`;function Kb({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:c,onSelect:u}){let d=L(),f=cl(`picker`),p=t===`file`,m=r??[],[h,g]=(0,E.useState)(e),[_,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(!0),[S,ee]=(0,E.useState)(null),[te,ne]=(0,E.useState)(()=>new Set),[re,C]=(0,E.useState)(a??[]),[w,T]=(0,E.useState)([]),[D,O]=(0,E.useState)([]),[ae,k]=(0,E.useState)([]),[oe,A]=(0,E.useState)([]),[j,M]=(0,E.useState)(``),[N,se]=(0,E.useState)(m.length===0),[ce,le]=(0,E.useState)(`files`),[ue,de]=(0,E.useState)(0),[I,R]=(0,E.useState)(Dn),[fe,pe]=(0,E.useState)(0),[me,he]=(0,E.useState)(0),[z,ge]=(0,E.useState)(0),[_e,ve]=(0,E.useState)(null),[B,be]=(0,E.useState)(null),[xe,Ce]=(0,E.useState)(0),[we,Te]=(0,E.useState)(null),[Ee,De]=(0,E.useState)(ye.imageStripHeight);(0,E.useEffect)(()=>{Ye().then(Te,()=>Te(null))},[]),(0,E.useEffect)(()=>{a?C(a):Ae().then(C,()=>C([]))},[a]),(0,E.useEffect)(()=>{je().then(T,()=>T([])),Be().then(O,()=>O([]))},[]),(0,E.useEffect)(()=>{let e=!0;return x(!0),ee(null),ne(new Set),M(p?``:v(h)),Se(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),M(p?``:v(t.path)),x(!1))},t=>{e&&(ee(t instanceof Error?t.message:String(t)),x(!1))}),()=>{e=!1}},[h,ue,p]),(0,E.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),R(e=>({...e,open:!0})),pe(e=>e+1);return}if(e.key===`Escape`){I.open?(R(e=>({...e,open:!1,query:``})),he(0)):c();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),ke();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Me();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),R(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),pe(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ke()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),ke()):e.button===4&&(e.preventDefault(),Me())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Oe=e=>{let t=e.trim();t.length!==0&&l(t)!==l(h)&&(k(e=>[...e,h]),A([]),le(`files`),g(t))},ke=()=>{let e=ae.at(-1);e!==void 0&&(k(e=>e.slice(0,-1)),A(e=>[h,...e]),g(e))},Me=()=>{let e=oe[0];e!==void 0&&(A(e=>e.slice(1)),k(e=>[...e,h]),g(e))},Ne=_?.path??h,H=_?.parent??(h?ie(h):null);(0,E.useEffect)(()=>{P.available&&Ne&&P.send({type:`fs.watch`,payload:{paths:[Ne],owner:`picker`}})},[Ne]),(0,E.useEffect)(()=>{if(P.available&&Ne)return P.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&l(t.data.path)===l(Ne)&&Se(Ne,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));ne(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Ne]);let Pe=(_?.entries??[]).filter(e=>e.isDirectory||p&&(N||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Fe=_?{..._,entries:Pe}:null,Ie=I.open&&I.query.length>0,Le=(0,E.useMemo)(()=>Ie?Pe.filter(e=>In(e.name,I)).map(e=>e.fullPath):[],[Ie,Pe,I]);(0,E.useEffect)(()=>{he(0)},[I.query,I.matchCase,I.regex,_?.path]);let Re=Le.length===0?-1:Math.min(me,Le.length-1),ze=(0,E.useMemo)(()=>({...I,currentPath:Re>=0?Le[Re]:null}),[I,Re,Le]),Ve=we?.defaultView??ye,He=o??{mode:Ve.mode,iconSize:Ve.iconSize,gridSize:Ve.gridSize,sort:`name`,sortDescending:!1,columns:Ve.columns??[`type`,`size`,`modified`]},Ue=(s??Ve.showImages)&&He.mode===`list`,We=j.trim(),Ge=We.length>0?Jb(We)?We:qb(Ne,We):null,Ke=()=>{if(b||S)return;let e=n?[...te]:[...te].slice(0,1);e.length>0?u(e):Ge!==null&&We!==v(Ne)?u([Ge]):!p&&Ne&&u([Ne])},qe=(0,E.useCallback)(e=>{ne(new Set(e)),M(e.length===1?v(e[0]):e.length===0&&!p?v(Ne):``)},[Ne,p]),Je=e=>{_?.entries.find(t=>t.fullPath===e)?.isDirectory?Oe(e):p&&u([e])},Xe=e=>M(e),Ze=async e=>{let t=_e;if(ve(null),!t||!Ne)return;let n=e===null?await Nt(Ne):await Lt(Ne,e);n.ok&&n.path!==null&&(R(e=>({...e,open:!1,query:``})),e!==null&&se(!0),de(e=>e+1),window.setTimeout(()=>{be(n.path),Ce(e=>e+1)},120))},Qe=()=>{R(e=>({...e,open:!0})),pe(e=>e+1)},$e=e=>{he(t=>Le.length===0?0:(t+e+Le.length)%Le.length)},et=e=>(0,F.jsxs)(ix,{children:[(0,F.jsxs)(ax,{children:[(0,F.jsx)(ox,{children:d(p?`File name:`:`Folder:`)}),(0,F.jsx)(sx,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ke())},spellCheck:!1,value:j}),p&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ox,{children:d(`Files of type:`)}),(0,F.jsx)(Ao,{onChange:e=>se(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:N?`all`:`supported`})]})]}),(0,F.jsxs)(cx,{children:[(0,F.jsx)(lx,{onClick:c,type:`button`,children:d(`Cancel`)}),(0,F.jsxs)(lx,{$primary:!0,disabled:b||S!==null||p&&te.size===0&&We.length===0,onClick:Ke,type:`button`,children:[(0,F.jsx)(Li,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),tt=(0,F.jsxs)(Xb,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,F.jsxs)(Zb,{children:[(0,F.jsxs)(Qb,{children:[(0,F.jsx)(bi,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,F.jsx)($b,{onClick:c,title:d(`Cancel`),type:`button`,children:(0,F.jsx)(Ri,{size:12})})]}),(0,F.jsxs)(ex,{children:[(0,F.jsx)(P_,{activeKind:ce===`overview`?`home`:ce===`gallery`?`gallery`:`files`,currentPath:Ne,drives:w,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:re.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Oe(e),onOpenView:e=>{e===`home`?(ne(new Set),M(p?``:v(Ne)),le(`overview`)):e===`gallery`&&p&&(ne(new Set),M(``),le(`gallery`))},places:re,recent:D,recentLimit:10}),(0,F.jsx)(tx,{children:ce===`overview`?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Mp,{drives:w,historyVersion:0,homePath:re.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Oe(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:qe,places:re,readOnly:!0,recent:D,recentLimit:10,visibilityVersion:0}),et(M)]}):ce===`gallery`?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(b_,{onPick:e=>u([e]),onSelectionChange:qe,showCheckboxes:we?.showCheckboxes??!0,view:{...V,columns:[]}}),et(M)]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(nx,{children:[(0,F.jsx)(rx,{disabled:ae.length===0,onClick:ke,title:d(`Back`),type:`button`,children:(0,F.jsx)(Di,{})}),(0,F.jsx)(rx,{disabled:oe.length===0,onClick:Me,title:d(`Forward`),type:`button`,children:(0,F.jsx)(Oi,{})}),(0,F.jsx)(rx,{disabled:!H,onClick:()=>H&&Oe(H),title:d(`Up one level`),type:`button`,children:(0,F.jsx)(wi,{})}),(0,F.jsx)(Hp,{onNavigate:Oe,path:Ne}),(0,F.jsx)(rx,{onClick:e=>ve({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,F.jsx)(Ei,{})}),(0,F.jsx)(rx,{onClick:Qe,title:d(`Search`),type:`button`,children:(0,F.jsx)(Ci,{})}),f.available&&(0,F.jsx)(rx,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,F.jsx)(Aa,{})})]}),I.open&&(0,F.jsx)(Yd,{current:Re,focusToken:fe,matchCase:I.matchCase,mode:I.mode,onClose:()=>{R(e=>({...e,open:!1,query:``})),he(0)},onMatchCase:()=>R(e=>({...e,matchCase:!e.matchCase})),onMode:()=>R(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>$e(1),onPrevious:()=>$e(-1),onQuery:e=>R(t=>({...t,query:e})),onRegex:()=>R(e=>({...e,regex:!e.regex})),query:I.query,regex:I.regex,total:Le.length,onSelectMatches:()=>ge(e=>e+1)}),(0,F.jsx)(Sl,{allowBackgroundMenu:!0,confirmDelete:we?.confirmDelete??!1,enableShortcuts:!0,error:S,find:ze,selectMatchesToken:z,imageStripHeight:Ee,loading:b,listing:Fe,onImageStripHeight:De,onOpen:Je,onOpenFile:Je,onRefresh:()=>de(e=>e+1),onSelectionChange:qe,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:we?.openOnSingleClick??!1,refreshToken:ue,pendingRename:B,pendingRenameToken:xe,showCheckboxes:we?.showCheckboxes??!0,showDetails:!1,showImages:Ue,singleSelect:!n,view:He}),et(Xe)]})})]}),_e&&(0,F.jsx)(Do,{creationOnly:!0,directory:Ne,menu:{x:_e.x,y:_e.y,paths:[],background:!0},onClose:()=>ve(null),onCreateFile:p?e=>void Ze(e):void 0,onCreateFolder:()=>void Ze(null),shortcuts:Xt})]});return i?tt:(0,Za.createPortal)((0,F.jsx)(Yb,{onPointerDown:e=>{e.target===e.currentTarget&&c()},children:tt}),document.body)}function qb(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Jb(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Yb=_.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${po}
`,Xb=_.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Qa}
    ${({$inline:e})=>e?``:so}
`,Zb=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Qb=_.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,$b=_.button`
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
`,ex=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,tx=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,nx=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,rx=_.button`
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
`,ix=_.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,ax=_.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,ox=_.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,sx=_.input`
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
`,cx=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,lx=_.button`
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
`;function ux({mode:e,multiple:t,extensions:n,initial:r}){let i=L(),a=me(),[o,s]=(0,E.useState)(null),[c,l]=(0,E.useState)({}),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=(0,E.useRef)(0);(0,E.useEffect)(()=>{P.send({type:`app.ready`})},[]),(0,E.useEffect)(()=>(ve(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>ve(null)),[]),(0,E.useEffect)(()=>{Ye().then(e=>{s(e),ee(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??ye,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,F.jsxs)(dx,{children:[(0,F.jsxs)(fx,{children:[(0,F.jsx)(px,{children:(0,F.jsx)(Vi,{size:17})}),(0,F.jsx)(mx,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,F.jsx)(cy,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,F.jsx)(hx,{children:(0,F.jsx)(gx,{onClick:()=>P.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,F.jsx)(Ri,{size:12})})})]}),(0,F.jsx)(_x,{children:(0,F.jsx)(Kb,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>P.send({type:`pick.cancel`}),onSelect:e=>P.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,F.jsx)(_d,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,F.jsx)(Md,{}),(0,F.jsx)(ge,{})]})}var dx=_.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,fx=_.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,px=_.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,mx=_.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hx=_.div`
    display: flex;
    flex-shrink: 0;
`,gx=_.button`
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
`,_x=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,vx=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,vx),window.addEventListener(`pagehide`,er);var yx=document.getElementById(`root`),bx=new URLSearchParams(window.location.search),xx=bx.get(`picker`),Sx=bx.get(`filter`)??``;yx&&(Xn(),(0,D.createRoot)(yx).render((0,F.jsx)(E.StrictMode,{children:(0,F.jsx)(R,{children:xx===`folder`||xx===`file`?(0,F.jsx)(ux,{extensions:Sx?Sx.split(`;`).filter(Boolean):[],initial:bx.get(`initial`)??``,mode:xx,multiple:bx.get(`multiple`)===`1`}):(0,F.jsx)(wb,{})})})));