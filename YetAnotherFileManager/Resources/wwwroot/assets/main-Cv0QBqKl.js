import{A as e,C as t,D as n,M as r,O as i,S as a,T as o,_ as s,b as c,c as l,d as u,f as d,g as f,h as p,i as m,j as h,k as g,l as _,m as v,n as y,o as b,p as x,r as S,s as ee,t as C,u as te,v as ne,w,x as T,y as re}from"./theme-GtEFL-tp.js";var E=r(h(),1),D=g(),O=15e3,k=new Set,A=new Map,j=!1,M=0,ie;function ae(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function N(){j||(j=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>oe(e)))}function oe(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?A.get(n):void 0;n&&r&&(A.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),k.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function se(){if(ie!==void 0)return;let e=()=>{if(!ae())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),ie=setInterval(e,5e3)}var P={get available(){return ae()},send(e){ae()?(N(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&se()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=O){if(!ae())return Promise.reject(Error(`Native bridge is not available.`));N();let r=`req-${++M}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{A.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);A.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return N(),k.add(e),()=>k.delete(e)}},F=w();function I(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function ce(e){return P.available?await P.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var le=(0,E.createContext)(I({})),L=(0,E.createContext)(`en`);function R(){return(0,E.useContext)(le)}var z=({children:e})=>{let[t,n]=(0,E.useState)(()=>I({})),[r,i]=(0,E.useState)(`en`);return(0,E.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await ce();if(e)return;n(()=>I(t.strings)),i(t.locale)}catch{}};t();let r=P.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,E.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,F.jsx)(le.Provider,{value:t,children:(0,F.jsx)(L.Provider,{value:r,children:e})})},ue=e=>P.send({type:e});function de(){let[e,t]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{if(P.available)return P.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>ue(`window.minimize`),toggleMaximize:()=>ue(`window.toggleMaximize`),close:()=>ue(`window.close`)}}function B(){return{onMouseDown:()=>ue(`window.drag`),onDoubleClick:()=>ue(`window.toggleMaximize`)}}function fe(){let[e,t]=(0,E.useState)(!1),{maximized:n}=de();return(0,E.useEffect)(()=>{if(!P.available)return;let e=!1;return P.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,E.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var V=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function pe(){return(0,F.jsx)(F.Fragment,{children:V.map(([e,t])=>(0,F.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),P.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var H=null;function me(e){H=e}function he(e){return H?H(e):Promise.resolve(!1)}var ge={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},_e={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function ve(e,t){return P.available?await P.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function U(e){return P.available?(await P.request(`fs.open`,{path:e})).ok:!1}async function ye(e,t=!0,n=!1,r=0,i){return await P.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function be(e,t,n=0,r){return await P.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function xe(e,t=0,n){return await P.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Se(e){P.available&&e.length!==0&&await P.request(`fs.archive.release`,{paths:e})}async function Ce(e){return P.available?await P.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function we(e,t){return P.available?(await P.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Te(e,t,n,r){return P.available?(await P.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Ee(e,t=!1){return P.available?await P.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function De(){return(await P.request(`fs.places`)).places}async function Oe(){return(await P.request(`fs.drives`)).drives}async function W(e=!1){return(await P.request(`fs.recycle`,{includeOrphans:e})).entries}async function ke(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await he({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await P.request(e,{...t,confirm:r.token})}return r}async function Ae(e=!1){let t=await P.request(`fs.recycle.empty`,{includeOrphans:e});await ke(`fs.recycle.empty`,{includeOrphans:e},t)}async function je(e){return!P.available||e.length===0?{ok:!1,done:0}:await P.request(`fs.recycle.restoreMany`,{ids:e})}async function Me(e){if(!P.available||e.length===0)return{ok:!1,done:0};let t=await P.request(`fs.recycle.deleteMany`,{ids:e}),n=await ke(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ne(e){P.available&&e&&await P.request(`fs.recycle.properties`,{id:e})}async function Pe(){if(!P.available)return{entries:[],cancelled:!0,failed:!1};let e=await P.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Fe(){return P.available?(await P.request(`fs.recycle.admin.purge`)).ok:!1}async function Ie(e=0,t=150,n=!1){return P.available?await P.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Le(){return P.available?(await P.request(`fs.recent`)).entries:[]}async function Re(){return P.available?(await P.request(`fs.frequent`)).entries:[]}async function ze(e){P.available&&await P.request(`fs.frequent.record`,{path:e})}async function Be(){await P.request(`fs.recent.clear`)}async function Ve(){await P.request(`fs.frequent.clear`)}async function He(){return await P.request(`fs.visibility`)}async function Ue(){return await P.request(`fs.hidden.toggle`)}async function We(){return P.available?await P.request(`fs.index.tasks`):{count:0,directories:[]}}var Ge={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Ke(){if(!P.available)return Ge;let e=await P.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function qe(){return P.available?(await P.request(`app.protection.defaults`)).paths??[]:[]}var Je={registered:!1,pathMatches:!1,registeredPath:null};async function Ye(){return P.available?await P.request(`app.defaultManager.status`):{registered:!1,pathMatches:!1,registeredPath:null}}async function Xe(){return P.available?await P.request(`app.archive.status`):Je}async function Ze(){return P.available?await P.request(`app.archive.register`):Je}async function Qe(){return P.available?await P.request(`app.archive.unregister`):Je}async function $e(e){if(!P.available)return e;let t=await P.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function et(e,t){P.available&&await P.request(`app.tabs.set`,{tabs:e,active:t})}async function tt(e,t,n){return P.available?(await P.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var nt={managed:0,private:0,workingSet:0,available:0};async function rt(){return P.available?await P.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1,logDirectory:``}}async function it(){return P.available?await P.request(`app.updateStatus`)??null:null}async function at(){return P.available?await P.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function ot(e){return!P.available||!e?!1:(await P.request(`app.openUrl`,{url:e})).ok}async function st(){return P.available?await P.request(`app.memory`):nt}async function ct(){return P.available?await P.request(`app.memory.trim`):nt}async function lt(){return P.available?(await P.request(`app.scheme`)).registered:!1}async function ut(e){return P.available?(await P.request(`app.scheme.set`,{enabled:e})).registered:!1}var dt={supported:!1,mode:`none`,active:!1,error:null};async function ft(){return P.available?await P.request(`app.startup`):dt}async function pt(e){return P.available?await P.request(`app.startup.set`,{mode:e}):dt}async function mt(e,t=!1){return!P.available||e.length===0?!1:(await P.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function ht(){return P.available?(await P.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function gt(){return P.available?await P.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function _t(e,t,n){return!P.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await P.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function vt(e){return!P.available||e.length===0?[]:(await P.request(`fs.paths.info`,{paths:e})).entries}async function yt(e){return P.available?(await P.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function bt(e,t=!1){if(!P.available||e.length===0)return{ok:!1,error:null};let n=await P.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await he({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await P.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function xt(e,t){return P.available?await P.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function St(e,t=!1){return P.available?await P.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Ct(e){return P.available?(await P.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function wt(e,t){return P.available?await P.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Tt(e,t,n){return P.available?await P.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Et(e,t){return P.available?await P.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Dt(e){P.available&&e.length!==0&&await P.request(`fs.operation.properties`,{paths:e})}async function Ot(e){P.available&&await P.request(`fs.operation.openWith`,{path:e})}async function kt(e){P.available&&await P.request(`fs.operation.terminal`,{path:e})}async function At(e){return P.available?await P.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function jt(e,t){return P.available?(await P.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Mt(){return P.available?await P.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Nt(){return P.available?await P.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Pt(e){P.available&&await P.request(`fs.operation.showInExplorer`,{path:e})}async function G(e){return!P.available||e.length===0?{verbs:[],safe:!0}:await P.request(`shell.verbs`,{paths:e})}async function Ft(e,t,n,r){P.available&&e.length!==0&&await P.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function It(e,t){return!P.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await P.request(`fs.operation.compress`,{...t,paths:e})}async function Lt(){return P.available?(await P.request(`app.tasks`)).tasks:[]}async function Rt(){P.available&&await P.request(`app.tasks.clear`)}var zt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Bt=zt.openInNewTab;function Vt(e){Bt=e.trim()||zt.openInNewTab}function Ht(e){let t=Bt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Ut(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Wt(e){return e.split(`+`).filter(Boolean).map(e=>Gt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Gt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Kt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var qt=new Map;function Jt(e){return c(f(e)?l(e):e)}function Yt(e){return qt.get(Jt(e))}function Xt(e,t){qt.set(Jt(e),t)}function Zt(e){qt.delete(Jt(e))}function Qt(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var $t=new Map,K=new Map,en=new Set,q=0;function tn(){$t.clear(),K.clear(),q+=1,en.forEach(e=>e())}function J(){let[e,t]=(0,E.useState)(q);return(0,E.useEffect)(()=>{let e=()=>t(q);return en.add(e),()=>{en.delete(e)}},[]),e}var nn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function rn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return nn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function an(e,t,n=!1){let r=J(),i=e===null?``:rn(e,t,n),[a,o]=(0,E.useState)(()=>$t.get(i)??null);return(0,E.useEffect)(()=>{if(e===null){o(null);return}if(!P.available)return;if($t.has(i)){o($t.get(i)??null);return}let r=!0;return P.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?$t.set(i,e.dataUrl):$t.delete(i),r&&o(e.dataUrl)},()=>{$t.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function on(e){let[t,n]=(0,E.useState)(e);return(0,E.useEffect)(()=>{if(!e){n(null);return}if(!f(e)){n(e);return}let t=!0;return xe(e,0,Yt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function sn(e){let t=J(),[n,r]=(0,E.useState)(()=>e?K.get(e)??null:null);return(0,E.useEffect)(()=>{if(!e||!P.available){r(null);return}if(K.has(e)){r(K.get(e)??null);return}let t=!0;return P.request(`fs.iconFile`,{path:e}).then(n=>{K.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{K.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var cn=null,ln=null;function un(){return cn===null?P.available?(ln??=P.request(`app.thumbnails`).then(e=>(cn=e.base??``,cn),()=>(cn=``,``)),ln):Promise.resolve(``):Promise.resolve(cn)}function dn(e,t=128,n=0){let[r,i]=(0,E.useState)(cn);return(0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return un().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function fn(e,t=0,n=``){let[r,i]=(0,E.useState)(cn);if((0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return un().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function pn(e,t=0){let[n,r]=(0,E.useState)(cn);return(0,E.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return un().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var mn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},hn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function gn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=yn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Sn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var _n=`\0`,vn=``;function yn(e){return e.query!==_n&&(_n=e.query,vn=e.query.toLowerCase()),vn}var bn=`\0`,xn=null;function Sn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===bn)return xn;bn=t;try{xn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{xn=null}return xn}function Cn(e,t){return gn(e,t)!==null}var wn=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Tn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function En(e){let t=On(e);for(let{kind:e}of wn)if(Tn[e].has(t))return e;return null}function Dn(e){return En(e)!==null}function On(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var kn=(0,E.createContext)({places:{},useIcons:!1}),An=kn.Provider;function jn(){return(0,E.useContext)(kn)}function Mn(e,t){return e.places[c(t)]}function Nn(e,t,n){return Mn(e,t)?.name||n}function Pn(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function Fn(e,t){try{localStorage.setItem(e,String(t))}catch{}}function In(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function Ln(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Rn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,F.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,F.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),zn=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Bn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M14 3v4h4`})]}),Vn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,F.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,F.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Hn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,F.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),Un=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 19V5`}),(0,F.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Wn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,F.jsx)(`path`,{d:`M20 4v7h-7`})]}),Gn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 5v14`}),(0,F.jsx)(`path`,{d:`M5 12h14`})]}),Kn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M19 12H5`}),(0,F.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),qn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M5 12h14`}),(0,F.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Jn=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,F.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),Yn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,F.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),Xn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,F.jsx)(`path`,{d:`M12 12v8`})]}),Zn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,F.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),Qn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),$n=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,F.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),er=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),tr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 7h16`}),(0,F.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,F.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,F.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),nr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),rr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),ir=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,F.jsxs)(`defs`,{children:[(0,F.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,F.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,F.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,F.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,F.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,F.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,F.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,F.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,F.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,F.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),ar=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),or=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,F.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,F.jsx)(`path`,{d:`m13 5-2 14`})]}),sr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,F.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,F.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),cr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,F.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),lr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,F.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,F.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),ur=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),dr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),fr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),pr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,F.jsx)(`path`,{d:`M8.5 14h7`})]}),mr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,F.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,F.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),hr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),gr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),_r=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),vr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),yr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),br=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,F.jsx)(`path`,{d:`m14 6 4 4`})]}),xr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,F.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Sr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,F.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Cr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 4v10`}),(0,F.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,F.jsx)(`path`,{d:`M4.5 19.5h15`})]}),wr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,F.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,F.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Tr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,F.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,F.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Er=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,F.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Dr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Or=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,F.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),kr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,F.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,F.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Ar=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),jr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,F.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,F.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,F.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Mr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,F.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Nr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,F.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Pr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,F.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,F.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Fr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,F.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Ir=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,F.jsx)(`path`,{d:`M3.5 12h17`}),(0,F.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Lr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Rr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,F.jsx)(`path`,{d:`M8.5 10.5h7`})]}),zr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,F.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,F.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa`})]}),Br=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,F.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Vr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,F.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,F.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),Hr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Ur=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 16V4`}),(0,F.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,F.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),Wr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),Gr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,F.jsx)(`path`,{d:`M12 4v16`})]}),Kr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,F.jsx)(`path`,{d:`M15 4v16`})]}),qr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,F.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,F.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,F.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),Jr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,F.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,F.jsx)(`path`,{d:`M12 14v2`})]}),Yr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,F.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]});function Y(e,t){return({size:n=t,...r})=>(0,F.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var Xr=Y(Rn,18),Zr=Y(zn,18),Qr=Y(Bn,18),$r=Y(Vn,18),ei=Y(Hn,16),ti=Y(Un,16),ni=Y(Wn,16),ri=Y(Gn,16),ii=Y(Kn,16),ai=Y(qn,16),oi=Y(Jn,12),si=Y(Yn,18),ci=Y(Xn,14),li=Y(Zn,14),ui=Y(Qn,14),di=Y($n,18),fi=Y(er,18),pi=Y(tr,18),mi=Y(nr,14),hi=Y(rr,14),gi=Y(ir,18),_i=Y(ar,18),vi=Y(or,18),yi=Y(sr,18),bi=Y(cr,18),xi=Y(lr,18),Si=Y(ur,18),Ci=Y(dr,18),wi=Y(fr,18),Ti=Y(pr,18),Ei=Y(mr,18),Di=Y(hr,18),Oi=Y(gr,18),ki=Y(_r,18),Ai=Y(vr,18),ji=Y(yr,18),Mi=Y(br,16),Ni=Y(xr,18),Pi=Y(Sr,18),Fi=Y(Cr,18),Ii=Y(wr,18),Li=Y(Tr,18),Ri=Y(Er,18),zi=Y(Dr,18),Bi=Y(Or,18),Vi=Y(kr,18),Hi=Y(Ar,18),Ui=Y(jr,18),Wi=Y(Mr,18),Gi=Y(Nr,18),Ki=Y(Pr,18),qi=Y(Fr,18),Ji=Y(Ir,18),Yi=Y(Lr,18),Xi=Y(Rr,14),Zi=Y(zr,14),Qi=Y(Br,16),$i=Y(Vr,16),ea=Y(Hr,16),ta=Y(Ur,16),na=Y(Wr,16),ra=Y(Gr,16),ia=Y(Kr,16),aa=Y(qr,16),oa=Y(Jr,14),sa=Y(Yr,14);async function ca(e,t,n){return P.available?(await P.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function la(e){return ca(`folder`,[],e??``)}function ua(e){return ca(`file`,e??[],``)}var da=null,fa=null;function pa(e){da=e}function ma(e){return da?da(e):Promise.resolve()}function ha(e){fa=e}function ga(e,t=!1){return fa?fa(e,t):Promise.resolve(null)}var _a=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],va=null,ya=0,ba=new Set;function xa(){ya+=1;for(let e of ba)e()}function Sa(e){return ba.add(e),()=>ba.delete(e)}function Ca(){return ya}function wa(e){va=e,xa()}function Ta(){return(0,E.useSyncExternalStore)(Sa,Ca,Ca),va}var Ea=e(),Da=n`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Oa=o`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,ka=o`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Aa=o`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,ja=o`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Ma=o`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Na=o`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Pa=o`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Fa=o`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Ia=n`animation: ${Oa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,La=n`animation: ${ka} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Ra=n`animation: ${Aa} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${ja} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var za=n`animation: ${Ma} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ba=n`animation: ${Na} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Va=n`animation: ${Pa} 140ms ease-out;`,Ha=n`animation: ${Fa} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Ua({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,E.useState)([]),s=(0,E.useRef)(void 0);if((0,E.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,E.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,F.jsx)($a,{},`group-rule-${i}`)),n.push((0,F.jsx)(Qa,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,F.jsx)($a,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,F.jsxs)(Ya,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,F.jsx)(Xa,{children:e.loading?(0,F.jsx)(eo,{}):e.icon}),(0,F.jsx)(Za,{children:e.label}),a?(0,F.jsx)(oi,{size:12}):e.checked&&(0,F.jsx)(mi,{size:12})]},`${e.label}-${i}`))}),n};return(0,Ea.createPortal)((0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Wa,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ga,{children:r.map((e,t)=>(0,F.jsxs)(Ka,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,F.jsx)(qa,{children:e.icon}),(0,F.jsx)(Ja,{children:e.label})]},`${e.label}-${t}`))}),(0,F.jsx)($a,{})]}),m(n,0)]}),a.map((e,t)=>(0,F.jsx)(Wa,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Wa=i.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Da}
    ${La}
    transform-origin: top left;
`,Ga=i.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Ka=i.button`
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
`,qa=i.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Ja=i.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ya=i.button`
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
`,Xa=i.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Za=i.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qa=i.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,$a=i.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,eo=i.span`
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
`;function to({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:l,onRename:u,onDelete:d,onCopy:p,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:v=!1,onRefresh:y,onAddToTray:b,onAddFavorite:x,onRemoveFavorite:S,favoritePaths:ee,onExtractArchive:C,allowCompression:te=!1,onCompressTo:ne,onArchiveCreated:w}){let T=R(),re=Ta(),D=f(t),[O,k]=(0,E.useState)({verbs:[],safe:!0,loading:!1}),[A,j]=(0,E.useState)({recommended:[],other:[],loading:!1}),[M,ie]=(0,E.useState)(null),ae=(0,E.useRef)(0),N=(0,E.useRef)(0),oe=e?.paths.length===1,se=e?.background?t?[t]:[]:e?.paths??[],P=e?.background?t||null:oe&&n?.isDirectory?n.path:null;if((0,E.useEffect)(()=>{if(!e){k({verbs:[],safe:!0,loading:!1}),j({recommended:[],other:[],loading:!1});return}let t=++ae.current;k({verbs:[],safe:!0,loading:se.length>0&&!D}),se.length>0&&!D&&G(se).then(e=>{ae.current===t&&k({...e,loading:!1})},()=>{ae.current===t&&k({verbs:[],safe:!0,loading:!1})});let r=++N.current;!D&&oe&&n?(j({recommended:[],other:[],loading:!0}),At(n.path).then(e=>{N.current===r&&j({...e,loading:!1})},()=>{N.current===r&&j({recommended:[],other:[],loading:!1})})):j({recommended:[],other:[],loading:!1})},[e,oe,n?.path,n?.isDirectory,se.length,D]),(0,E.useEffect)(()=>{if(!e||D||!P){ie(null);return}let t=!0;return Ct(P).then(e=>{t&&ie(e)},()=>{t&&ie(null)}),()=>{t=!1}},[e,P,D]),!e)return null;let I=[],ce=[],le=new Set((ee??[]).map(c)),L=e.background?t?[t]:[]:e.paths,z=L.length>0&&L.every(e=>le.has(c(e))),ue=()=>n?de(n.path,n.isDirectory):`Archive`,de=(e,t)=>{let n=_(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},B=async(e,n=ue())=>{let r=await It(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?w?.(r.path,!0):ma(r.error??T(`Could not create the archive.`))},fe=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},V=async()=>{if(!P||M===null)return;let e=await wt(P,!M);e.ok?(ie(e.enabled),y?.()):ma(e.error??T(`Could not change the case sensitivity.`))},pe=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Tt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Tt(e,t,`${a}\\${ro(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?y?.():ma(o.error??T(`Could not create the link.`))},H=async e=>{if(!n)return;let r=await la(t);r&&await pe(e,n.path,r,_(n.path),e.endsWith(`-copy`))},me=async e=>{let n=re?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=c(a)===c(t);await pe(n,r.path,t,_(r.path),i&&!o)}},he=async()=>{let t=(await vt(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&wa({paths:t})},ge=()=>{let e=re?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:T(`Cancel selected link`),icon:(0,F.jsx)(hi,{size:14}),onSelect:()=>wa(null)},...t?[{label:T(`Hard link`),icon:(0,F.jsx)(Qr,{size:14}),separatorBefore:!0,onSelect:()=>void me(`hard`)}]:[],{label:T(`Symbolic link`),icon:(0,F.jsx)(Qr,{size:14}),separatorBefore:!t,onSelect:()=>void me(`symbolic-file`)},...n?[{label:T(`Directory junction`),icon:(0,F.jsx)(Zr,{size:14}),onSelect:()=>void me(`junction`)},{label:T(`Smart copy`),icon:(0,F.jsx)(Qi,{size:14}),separatorBefore:!0,onSelect:()=>void me(`smart-copy`)},{label:T(`Smart mirror`),icon:(0,F.jsx)(Qi,{size:14}),onSelect:()=>void me(`smart-mirror`)},{label:T(`Multi-version smart copy`),icon:(0,F.jsx)(Qi,{size:14}),onSelect:()=>void me(`multi-version-smart-copy`)},{label:T(`Hardlink copy`),icon:(0,F.jsx)(Qi,{size:14}),separatorBefore:!0,onSelect:()=>void me(`hard-copy`)},{label:T(`Symbolic link copy`),icon:(0,F.jsx)(Qi,{size:14}),onSelect:()=>void me(`symbolic-copy`)}]:[]]};if(e.background){if(h&&ce.push({label:T(`New folder`),icon:(0,F.jsx)(ri,{size:16}),shortcut:Wt(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:T(`Folder`),icon:(0,F.jsx)(Zr,{size:14}),onSelect:()=>h(!1)}),D||e.push({label:T(`Case-sensitive folder`),icon:(0,F.jsx)(Zi,{size:14}),onSelect:()=>h(!0)})),g&&e.push(..._a.map((e,t)=>({label:`${T(e.label)} (${e.extension})`,icon:(0,F.jsx)(Qr,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),I.push({label:T(`New`),icon:(0,F.jsx)(ri,{size:14}),children:e,onSelect:()=>void 0})}if(D||I.push({label:T(`Create link`),icon:(0,F.jsx)(ta,{size:14}),disabled:!re,children:ge(),onSelect:()=>void 0}),v)return(0,F.jsx)(Ua,{items:I,onClose:a,quick:ce,x:e.x,y:e.y});!D&&o&&I.push({label:T(`Open in new tab`),icon:(0,F.jsx)(ri,{size:14}),onSelect:()=>o(t,!0)}),I.push({label:T(`Copy as path`),icon:(0,F.jsx)(Qi,{size:14}),onSelect:()=>void fe([t])}),b&&I.push({label:T(`Add to file tray`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>b([t])}),!D&&(z?S:x)&&I.push({label:T(z?`Remove from favorites`:`Add to favorites`),icon:z?(0,F.jsx)(Xi,{size:14}):(0,F.jsx)(Yi,{size:14}),onSelect:()=>z?S?.([t]):x?.([t])}),!D&&M!==null&&I.push({label:T(`Case-sensitive names`),icon:(0,F.jsx)(Zi,{size:14}),checked:M,onSelect:()=>void V()}),!D&&te&&(I.push({label:T(`Open in Terminal`),icon:(0,F.jsx)(Gi,{size:14}),onSelect:()=>void kt(t)}),I.push({label:T(`Show in Explorer`),icon:(0,F.jsx)(Zr,{size:14}),separatorBefore:!0,onSelect:()=>void Pt(t)})),m&&ce.push({label:T(`Paste`),icon:(0,F.jsx)(ea,{size:16}),disabled:!i,shortcut:Wt(r.paste),onSelect:()=>m(t)}),y&&ce.push({label:T(`Refresh`),icon:(0,F.jsx)(ni,{size:16}),shortcut:Wt(r.refresh),onSelect:y}),D||ce.push({label:T(`Properties`),icon:(0,F.jsx)(si,{size:16}),shortcut:Wt(r.properties),onSelect:()=>void Dt([t])})}else{if(o&&I.push({label:T(`Open`),icon:(0,F.jsx)(ai,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&l?.(n.path)}}),n?.isDirectory&&(o&&I.push({label:T(`Open in new tab`),icon:(0,F.jsx)(ri,{size:14}),onSelect:()=>o(n.path,!0)}),m&&I.push({label:T(`Paste into folder`),icon:(0,F.jsx)(ea,{size:14}),disabled:!i,onSelect:()=>m(n.path)}),D||I.push({label:T(`Open in Terminal`),icon:(0,F.jsx)(Gi,{size:14}),onSelect:()=>void kt(n.path)})),!D&&oe&&n&&!n.isDirectory&&s(n.path)&&C&&I.push({label:T(`Extract archive`),icon:(0,F.jsx)(Si,{size:14}),separatorBefore:!0,children:[{label:T(`Extract here`),icon:(0,F.jsx)(Si,{size:14}),onSelect:()=>C(n.path,`here`)},{label:T(`Extract to a folder named after the archive`),icon:(0,F.jsx)(Si,{size:14}),onSelect:()=>C(n.path,`named`)},{label:T(`Auto extract to the current folder`),icon:(0,F.jsx)(Si,{size:14}),onSelect:()=>C(n.path,`auto`)},{label:T(`Extract to…`),icon:(0,F.jsx)(Zr,{size:14}),separatorBefore:!0,onSelect:()=>C(n.path,`choose`)}],onSelect:()=>void 0}),!D&&oe&&n){let e=[];if(A.loading)e.push({label:T(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of A.recommended)e.push({label:t.name,group:T(`Suggested apps`),icon:t.icon?(0,F.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,F.jsx)(wi,{size:14}),onSelect:()=>void jt(n.path,t.path).then(e=>{e||Ot(n.path)})});for(let t of A.other)e.push({label:t.name,group:T(`Other apps`),icon:t.icon?(0,F.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,F.jsx)(wi,{size:14}),onSelect:()=>void jt(n.path,t.path).then(e=>{e||Ot(n.path)})})}e.push({label:T(`Choose another app…`),icon:(0,F.jsx)(wi,{size:14}),separatorBefore:!0,onSelect:()=>void Ot(n.path)}),I.push({label:T(`Open with`),icon:(0,F.jsx)(wi,{size:14}),children:e,onSelect:()=>void Ot(n.path)})}if(D||I.push({label:T(`Compress`),icon:(0,F.jsx)(Si,{size:14}),separatorBefore:!0,children:[{label:T(`Compress to ZIP`),icon:(0,F.jsx)(Si,{size:14}),onSelect:()=>void B(e.paths)},{label:T(`Compress to…`),icon:(0,F.jsx)(Si,{size:14}),onSelect:()=>ne?.(e.paths,ue())}],onSelect:()=>void 0}),!D&&(e?.paths.length??0)>0){let e=[{label:T(`Select link source`),icon:(0,F.jsx)(ta,{size:14}),onSelect:()=>void he()},...re?[{label:T(`Cancel selected link`),icon:(0,F.jsx)(hi,{size:14}),onSelect:()=>wa(null)}]:[],...oe&&n?n.isDirectory?[{label:T(`Symbolic link`),icon:(0,F.jsx)(Zr,{size:14}),separatorBefore:!0,onSelect:()=>void H(`symbolic-folder`)},{label:T(`Directory junction`),icon:(0,F.jsx)(Zr,{size:14}),onSelect:()=>void H(`junction`)},{label:T(`Smart copy`),icon:(0,F.jsx)(Qi,{size:14}),separatorBefore:!0,onSelect:()=>void H(`smart-copy`)},{label:T(`Smart mirror`),icon:(0,F.jsx)(Qi,{size:14}),onSelect:()=>void H(`smart-mirror`)},{label:T(`Multi-version smart copy`),icon:(0,F.jsx)(Qi,{size:14}),onSelect:()=>void H(`multi-version-smart-copy`)},{label:T(`Hardlink copy`),icon:(0,F.jsx)(Qi,{size:14}),separatorBefore:!0,onSelect:()=>void H(`hard-copy`)},{label:T(`Symbolic link copy`),icon:(0,F.jsx)(Qi,{size:14}),onSelect:()=>void H(`symbolic-copy`)}]:[{label:T(`Symbolic link`),icon:(0,F.jsx)(Qr,{size:14}),separatorBefore:!0,onSelect:()=>void H(`symbolic-file`)},{label:T(`Hard link`),icon:(0,F.jsx)(Qr,{size:14}),onSelect:()=>void H(`hard`)}]:[]];I.push({label:T(`Create link`),icon:(0,F.jsx)(ta,{size:14}),children:e,onSelect:()=>void 0})}!D&&n?.isDirectory&&M!==null&&I.push({label:T(`Case-sensitive names`),icon:(0,F.jsx)(Zi,{size:14}),checked:M,onSelect:()=>void V()}),I.push({label:T(`Copy as path`),icon:(0,F.jsx)(Qi,{size:14}),onSelect:()=>void fe(e.paths)}),b&&I.push({label:T(`Add to file tray`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>b(e.paths)}),!D&&(z?S:x)&&I.push({label:T(z?`Remove from favorites`:`Add to favorites`),icon:z?(0,F.jsx)(Xi,{size:14}):(0,F.jsx)(Yi,{size:14}),onSelect:()=>z?S?.(L):x?.(L)}),D||I.push({label:T(`Show in Explorer`),icon:(0,F.jsx)(Zr,{size:14}),separatorBefore:!0,onSelect:()=>void Pt(L[0])}),p&&ce.push({label:T(`Cut`),icon:(0,F.jsx)($i,{size:16}),shortcut:Wt(r.cut),onSelect:()=>p(e.paths,!0)},{label:T(`Copy`),icon:(0,F.jsx)(Qi,{size:16}),shortcut:Wt(r.copy),onSelect:()=>p(e.paths,!1)}),oe&&n&&u&&ce.push({label:T(`Rename`),icon:(0,F.jsx)(Mi,{size:16}),shortcut:Wt(r.rename),onSelect:()=>u(n.path)}),d&&ce.push({label:T(`Delete`),icon:(0,F.jsx)(pi,{size:16}),danger:!0,shortcut:Wt(r.delete),onSelect:()=>d(e.paths)}),D||ce.push({label:T(`Properties`),icon:(0,F.jsx)(si,{size:16}),shortcut:Wt(r.properties),onSelect:()=>void Dt(e.paths)})}if(O.loading)I.push({label:T(`More actions`),icon:(0,F.jsx)(wi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(O.verbs.length>0){let e={items:[],children:new Map};for(let t of O.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,F.jsx)(no,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Ft(se,O.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];I.push({label:T(O.safe?`More actions`:`More actions (extensions)`),icon:(0,F.jsx)(wi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,F.jsx)(Ua,{items:I,onClose:a,quick:ce,x:e.x,y:e.y})}function no({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,F.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,F.jsx)(ai,{size:14});case`document`:return(0,F.jsx)(Ai,{size:14});case`cut`:return(0,F.jsx)($i,{size:14});case`copy`:return(0,F.jsx)(Qi,{size:14});case`paste`:return(0,F.jsx)(ea,{size:14});case`trash`:return(0,F.jsx)(pi,{size:14});case`pencil`:return(0,F.jsx)(Mi,{size:14});case`gear`:return(0,F.jsx)(si,{size:14});case`star`:return(0,F.jsx)(zi,{size:14});case`pin`:return(0,F.jsx)(ci,{size:14});case`executable`:return(0,F.jsx)(wi,{size:14});case`share`:return(0,F.jsx)(ta,{size:14});case`arrow`:return(0,F.jsx)(ai,{size:14});default:return(0,F.jsx)(gi,{size:14})}}function ro(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function io({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let[c,l]=(0,E.useState)(null),u=(0,E.useRef)(null),d=t.find(t=>t.value===e)??t[0];return(0,E.useEffect)(()=>{if(!c)return;let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&u.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[c]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(ao,{$icon:a!==void 0,"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(c){l(null);return}let e=u.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;l({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:u,style:i&&!a?{width:i}:void 0,title:o??d?.title,type:`button`,children:[a===void 0?(0,F.jsx)(oo,{children:d?.label??``}):(0,F.jsx)(so,{children:a}),a===void 0&&(0,F.jsx)(co,{children:(0,F.jsx)(oi,{size:11})})]}),c&&(0,Ea.createPortal)((0,F.jsx)(lo,{"aria-label":`options`,"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:c.bottom,left:c.left,minWidth:c.width,top:c.top},children:t.map(t=>(0,F.jsxs)(uo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),l(null)},role:`option`,title:t.title,type:`button`,children:[(0,F.jsx)(fo,{children:t.label}),t.value===e&&(0,F.jsx)(mi,{size:11})]},t.value))}),document.body)]})}var ao=i.button`
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
`,oo=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,so=i.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,co=i.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,lo=i.div`
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
    ${La}
`,uo=i.button`
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
`,fo=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,po=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],mo=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],ho=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],go=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],_o=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function vo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=R(),a=(0,E.useRef)(null),[o,s]=(0,E.useState)(e),[c,l]=(0,E.useState)(t),[u,d]=(0,E.useState)(`zip`),[f,p]=(0,E.useState)(`5`),[m,h]=(0,E.useState)(`default`),[g,_]=(0,E.useState)(`none`),[v,y]=(0,E.useState)(``),[b,x]=(0,E.useState)(`0`),[S,ee]=(0,E.useState)(!1);(0,E.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let C=po.find(e=>e.value===u)??po[0],te=u===`zip`||u===`zipx`,ne=g!==`none`,w=te||u===`7z`,T=u===`zip`||u===`7z`,re=async()=>{if(S||!c.trim()||!o||ne&&v.length===0)return;ee(!0);let e=await r({directory:o,name:c.trim(),format:u,level:C.level?Number(f):0,method:te?m:null,encryption:w?g:`none`,password:ne?v:void 0,splitSize:T?Number(b):0});ee(!1),e&&n()};return(0,Ea.createPortal)((0,F.jsx)(yo,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,F.jsxs)(bo,{"aria-modal":`true`,role:`dialog`,children:[(0,F.jsx)(xo,{children:i(`Compress to…`)}),(0,F.jsxs)(So,{children:[(0,F.jsx)(Co,{children:i(`Archive name`)}),(0,F.jsx)(wo,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&re()}}),(0,F.jsx)(To,{children:C.extension})]}),(0,F.jsxs)(So,{children:[(0,F.jsx)(Co,{children:i(`Format`)}),(0,F.jsx)(io,{onChange:e=>d(e),options:po.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,F.jsxs)(So,{children:[(0,F.jsx)(Co,{children:i(`Method`)}),(0,F.jsx)(io,{disabled:!te,onChange:h,options:mo.map(e=>({...e,label:i(e.label)})),value:te?m:`default`,width:236,zIndex:3700})]}),(0,F.jsxs)(So,{children:[(0,F.jsx)(Co,{children:i(`Encryption`)}),(0,F.jsx)(io,{disabled:!w,onChange:e=>{_(e),e===`none`&&y(``)},options:ho.map(e=>({...e,label:i(e.label)})),value:w?g:`none`,width:236,zIndex:3700})]}),ne&&(0,F.jsxs)(So,{children:[(0,F.jsx)(Co,{children:i(`Password`)}),(0,F.jsx)(wo,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,F.jsxs)(So,{children:[(0,F.jsx)(Co,{children:i(`Split volumes`)}),(0,F.jsx)(io,{disabled:!T,onChange:x,options:go.map(e=>({...e,label:i(e.label)})),value:T?b:`0`,width:236,zIndex:3700})]}),(0,F.jsxs)(So,{children:[(0,F.jsx)(Co,{children:i(`Compression level`)}),(0,F.jsx)(io,{disabled:!C.level,onChange:p,options:_o.map(e=>({...e,label:i(e.label)})),value:C.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,F.jsxs)(So,{$stack:!0,children:[(0,F.jsx)(Co,{children:i(`Destination`)}),(0,F.jsxs)(Eo,{children:[(0,F.jsx)(Do,{title:o,children:o}),(0,F.jsx)(ko,{disabled:S,onClick:()=>void la(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,F.jsxs)(Oo,{children:[(0,F.jsx)(ko,{disabled:S,onClick:n,type:`button`,children:i(`Cancel`)}),(0,F.jsx)(Ao,{disabled:S||!c.trim()||ne&&v.length===0,onClick:()=>void re(),type:`button`,children:i(S?`Compressing…`:`Compress`)})]})]})}),document.body)}var yo=i.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Va}
`,bo=i.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ia}
`,xo=i.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,So=i.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Co=i.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,wo=i.input`
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

    &:focus { border-color: var(--border-color-focus); }
`,To=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Eo=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Do=i.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Oo=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,ko=i.button`
    min-height: 32px;
    padding: 0 11px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;
    &:hover:not(:disabled) { border-color: var(--border-color-hover); color: var(--text-primary); }
    &:disabled { opacity: 0.5; cursor: default; }
`,Ao=i(ko)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function jo({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=R(),c=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Ea.createPortal)((0,F.jsx)(Mo,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,F.jsxs)(No,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(Po,{children:t}),(0,F.jsx)(Fo,{children:n}),(0,F.jsxs)(Io,{children:[(0,F.jsx)(Lo,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,F.jsx)(Lo,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Mo=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Va}
`,No=i.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ia}
`,Po=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Fo=i.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Io=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Lo=i.button`
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
`,Ro=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),zo=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Bo=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Vo=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Ho({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=R(),[l,u]=(0,E.useState)(!1),[d,f]=(0,E.useState)(!1),[p,m]=(0,E.useState)(!1),[h,g]=(0,E.useState)(0),[_,v]=(0,E.useState)(0),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(!1),[ee,C]=(0,E.useState)(!1),te=(0,E.useRef)(null),ne=(0,E.useRef)(null),w=(0,E.useRef)(null),T=(0,E.useRef)(null),[re,D]=(0,E.useState)(()=>{let e=Pn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),O=e?.path??null,k=on(O),A=e?Uo(e.name):``,j=!!e&&!e.isDirectory&&Ro.has(A),M=!!e&&!e.isDirectory&&zo.has(A),ie=!!e&&!e.isDirectory&&Bo.has(A),ae=!!e&&!e.isDirectory&&Vo.has(A),N=!!e&&!e.isDirectory&&A===`pdf`,oe=dn(j?k:null,512,e?.modified??0),se=fn(ie?k:null,e?.modified??0,A),P=fn(j||M?k:null,e?.modified??0,A),I=pn(N?k:null,e?.modified??0),ce=an(!j&&!M&&!ie&&!ae&&!N?k:null,e?.isDirectory??!1);if((0,E.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),C(!1)},[O]),(0,E.useEffect)(()=>{if(!k||!ae){b(null),S(!1);return}let e=!0;return S(!0),b(null),Ce(k).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:`Could not read this file.`}),S(!1))}),()=>{e=!1}},[k,ae]),!e&&!s)return null;let le=e=>{w.current={x:e.clientX,width:ne.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},L=e=>{let t=w.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},z=e=>{w.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},ue=e=>{T.current={y:e.clientY,height:re},e.currentTarget.setPointerCapture(e.pointerId)},de=e=>{let t=T.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));D(n),Fn(`yafm.preview.media.height`,n)},B=e=>{T.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,F.jsxs)(Go,{children:[r&&(0,F.jsx)(Ko,{onPointerDown:le,onPointerMove:L,onPointerUp:z,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,F.jsx)(qo,{ref:ne,style:{width:r?t:0},children:(0,F.jsxs)(Jo,{children:[(0,F.jsx)(Zr,{size:56}),(0,F.jsx)(`span`,{children:s})]})})]});let fe=()=>{let e=te.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,F.jsxs)(Go,{children:[r&&(0,F.jsx)(Ko,{onPointerDown:le,onPointerMove:L,onPointerUp:z,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(qo,{ref:ne,style:{width:r?t:0},children:[(0,F.jsx)(Yo,{style:{height:re},children:j&&P&&!l?(0,F.jsxs)(Zo,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,F.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:fe,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:oe??void 0,preload:`metadata`,ref:te,src:P}),(0,F.jsx)(Qo,{$visible:!d,onClick:fe,title:c(`Play`),type:`button`,children:(0,F.jsx)(na,{size:28})}),(0,F.jsxs)($o,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,F.jsxs)(es,{children:[(0,F.jsx)(`span`,{children:Wo(_)}),(0,F.jsx)(`span`,{children:Wo(h)})]}),(0,F.jsx)(ts,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=te.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):M&&P?(0,F.jsx)(`audio`,{controls:!0,src:P}):ie&&se?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:se}):N&&I&&!ee?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>C(!0),src:I}):N?(0,F.jsx)(Qr,{size:64}):ae?(0,F.jsx)(ns,{children:x||!y?(0,F.jsx)(is,{children:c(`Loading…`)}):y.error?(0,F.jsx)(is,{children:y.error}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(rs,{children:y.text}),y.truncated&&(0,F.jsx)(is,{children:c(`Showing the first 256 KB.`)})]})}):j&&oe?(0,F.jsx)(`img`,{alt:``,src:oe}):ce?(0,F.jsx)(`img`,{alt:``,src:ce}):e.isDirectory?(0,F.jsx)(Zr,{size:64}):(0,F.jsx)(Qr,{size:64})}),(0,F.jsx)(Xo,{onDoubleClick:()=>{D(210),Fn(`yafm.preview.media.height`,210)},onPointerDown:ue,onPointerMove:de,onPointerUp:B,title:c(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(as,{children:[(0,F.jsx)(os,{title:e.path,children:e.name}),o&&(0,F.jsx)(ss,{children:o}),(0,F.jsx)(cs,{children:e.fields.map(e=>(0,F.jsxs)(ls,{children:[(0,F.jsx)(us,{children:e.label}),(0,F.jsx)(ds,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Uo(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Wo(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Go=i.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    min-width: 220px;
    min-height: 0;
`,Ko=i.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,qo=i.aside`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    background: var(--bg-secondary);
    font-family: var(--font-details), var(--font-cjk);
    transition: width 180ms cubic-bezier(0.22, 1, 0.36, 1);
`,Jo=i.div`
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
`,Yo=i.div`
    position: relative;
    display: grid;
    place-items: center;
    height: 210px;
    flex-shrink: 0;
    overflow: hidden;
    border-bottom: 1px solid var(--border-color);
    background: var(--bg-secondary);
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
`,Xo=i.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Zo=i.div`
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
`,Qo=i.button`
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
`,$o=i.div`
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
`,es=i.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,ts=i.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,ns=i.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,rs=i.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,is=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,as=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,os=i.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,ss=i.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,cs=i.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,ls=i.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,us=i.span`
    color: var(--text-muted);
`,ds=i.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,fs=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],ps=[...fs],ms={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},hs={folder:e=>(0,F.jsx)(Zr,{size:e}),home:e=>(0,F.jsx)(Xr,{size:e}),desktop:e=>(0,F.jsx)(Ni,{size:e}),documents:e=>(0,F.jsx)(Pi,{size:e}),downloads:e=>(0,F.jsx)(Fi,{size:e}),pictures:e=>(0,F.jsx)(Ii,{size:e}),music:e=>(0,F.jsx)(Li,{size:e}),videos:e=>(0,F.jsx)(Ri,{size:e}),drive:e=>(0,F.jsx)($r,{size:e}),image:e=>(0,F.jsx)(yi,{size:e}),video:e=>(0,F.jsx)(bi,{size:e}),audio:e=>(0,F.jsx)(xi,{size:e}),text:e=>(0,F.jsx)(_i,{size:e}),code:e=>(0,F.jsx)(vi,{size:e}),clock:e=>(0,F.jsx)(di,{size:e}),star:e=>(0,F.jsx)(zi,{size:e}),file:e=>(0,F.jsx)(Qr,{size:e}),archive:e=>(0,F.jsx)(Si,{size:e}),pdf:e=>(0,F.jsx)(Ci,{size:e}),executable:e=>(0,F.jsx)(wi,{size:e}),font:e=>(0,F.jsx)(Ti,{size:e}),database:e=>(0,F.jsx)(Ei,{size:e}),config:e=>(0,F.jsx)(Di,{size:e}),spreadsheet:e=>(0,F.jsx)(Oi,{size:e}),presentation:e=>(0,F.jsx)(ki,{size:e}),document:e=>(0,F.jsx)(Ai,{size:e}),app:e=>(0,F.jsx)(gi,{size:e}),gear:e=>(0,F.jsx)(si,{size:e}),pin:e=>(0,F.jsx)(ci,{size:e}),trash:e=>(0,F.jsx)(pi,{size:e}),overview:e=>(0,F.jsx)(ji,{size:e}),book:e=>(0,F.jsx)(Bi,{size:e}),briefcase:e=>(0,F.jsx)(Vi,{size:e}),cloud:e=>(0,F.jsx)(Hi,{size:e}),gamepad:e=>(0,F.jsx)(Ui,{size:e}),camera:e=>(0,F.jsx)(Wi,{size:e}),terminal:e=>(0,F.jsx)(Gi,{size:e}),server:e=>(0,F.jsx)(Ki,{size:e}),package:e=>(0,F.jsx)(qi,{size:e}),globe:e=>(0,F.jsx)(Ji,{size:e}),heart:e=>(0,F.jsx)(Yi,{size:e}),share:e=>(0,F.jsx)(Ki,{size:e}),favorites:e=>(0,F.jsx)(Yi,{size:e})};function gs(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function _s(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??fs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||ps.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=gs(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${ms[n]??n}${vs(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function vs(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function ys({panel:e,size:t=16}){let n=sn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,F.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?hs[e.icon]:void 0;if(r)return(0,F.jsx)(F.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,F.jsx)(Zr,{size:t});case`recent`:return(0,F.jsx)(di,{size:t});case`frequent`:return(0,F.jsx)(zi,{size:t});case`drives`:return(0,F.jsx)($r,{size:t});case`home`:return(0,F.jsx)(Xr,{size:t});case`share`:return(0,F.jsx)(Ki,{size:t});case`favorites`:return(0,F.jsx)(Yi,{size:t});default:return(0,F.jsx)(Zr,{size:t})}}function bs({place:e,size:t=18}){let n=sn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,F.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&hs[e.icon]?(0,F.jsx)(F.Fragment,{children:hs[e.icon](t)}):(0,F.jsx)(Zr,{size:t})}var xs=`#64748b`;function Ss(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Cs({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=R(),[c,l]=(0,E.useState)(``),[u,d]=(0,E.useState)(`#2dd4bf`),f=(0,E.useRef)(null);(0,E.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Ea.createPortal)((0,F.jsxs)(ws,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,F.jsxs)(Ts,{children:[(0,F.jsx)(`span`,{children:s(`Tags`)}),(0,F.jsx)(Es,{onClick:o,title:s(`Close`),type:`button`,children:(0,F.jsx)(hi,{size:11})})]}),(0,F.jsxs)(Ds,{children:[p.length===0&&(0,F.jsx)(js,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,F.jsxs)(Os,{children:[(0,F.jsx)(ks,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,F.jsxs)(As,{$color:t,$ink:Ss(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,F.jsx)(mi,{size:11}),(0,F.jsx)(`span`,{children:e})]})]},e)})]}),(0,F.jsxs)(Ms,{children:[(0,F.jsx)(ks,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,F.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,F.jsx)(Ns,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var ws=i.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${Ia}
`,Ts=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Es=i.button`
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
`,Ds=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Os=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,ks=i.input`
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
`,As=i.button`
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
`,js=i.span`
    font-size: 11px;
    color: var(--text-muted);
`,Ms=i.div`
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
`,Ns=i.button`
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
`,Ps={file:Qr,folder:Zr,text:_i,code:vi,image:yi,video:bi,audio:xi,archive:Si,pdf:Ci,executable:wi,font:Ti,database:Ei,config:Di,spreadsheet:Oi,presentation:ki,document:Ai},Fs={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Is(e){let t=e.lastIndexOf(`.`);return t>0?Fs[e.slice(t).toLowerCase()]??`file`:`file`}function Ls({name:e,size:t}){let n=Ps[e??`file`]??Qr;return(0,F.jsx)(n,{size:t})}function Rs({path:e,name:t,isDirectory:n,size:r=18}){let i=an(e,n);return i?(0,F.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,F.jsx)(Zr,{size:r}):(0,F.jsx)(Ls,{name:Is(t),size:r})}var zs=`application/x-yafm-paths`,Bs=[zs,`text/uri-list`];function Vs(e){return e?.types.some(e=>Bs.includes(e.toLowerCase()))??!1}function Hs(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(zs);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Ws).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Us=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Ws(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Us?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Gs(e,t,n=!0){e.dataTransfer.setData(zs,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Ks({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=R(),[m,h]=(0,E.useState)(()=>new Set),[g,_]=(0,E.useState)(!1),v=(0,E.useRef)(null),y=(0,E.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),b=(0,E.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),x=(0,E.useRef)(null);if((0,E.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=x.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Vs(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Hs(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let S=new Set([...e,...t].map(e=>e.path)),ee=S.size>0&&[...S].every(e=>m.has(e)),C=S.size,te=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},ne=()=>{h(ee?new Set:S)},w=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},re=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},D=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},O=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},k=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},A=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of b)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},j=(e,t)=>{let n=m.has(e.path);return(0,F.jsxs)(ic,{$checked:n,draggable:!0,onClick:()=>te(e.path),onDragStart:r=>{Gs(r,n&&m.size>0?[...new Set([...y,...b].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,F.jsx)(ac,{$checked:n,onClick:t=>{t.stopPropagation(),te(e.path)},type:`button`,children:n&&(0,F.jsx)(mi,{size:8})}),(0,F.jsx)(Rs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,F.jsxs)(oc,{children:[(0,F.jsx)(sc,{children:e.name}),(0,F.jsx)(cc,{children:T(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},M=e=>{Vs(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,F.jsxs)(qs,{$dragging:g,"data-tray":`true`,ref:x,style:{left:i.x,top:i.y},onDragEnter:M,onDragOver:M,onDrop:e=>{let{paths:t}=Hs(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,F.jsxs)(Js,{onPointerDown:w,onPointerMove:re,onPointerUp:D,children:[(0,F.jsxs)(Ys,{children:[(0,F.jsx)(qi,{size:13}),p(`Tray`),(0,F.jsx)(Xs,{children:C})]}),(0,F.jsxs)(Zs,{onPointerDown:e=>e.stopPropagation(),children:[(0,F.jsx)(Qs,{onClick:ne,title:p(ee?`Select none`:`Select all`),type:`button`,children:p(ee?`None`:`All`)}),(0,F.jsx)(Qs,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,F.jsx)($s,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,F.jsx)(hi,{size:10})})]})]}),(0,F.jsxs)(ec,{children:[(0,F.jsxs)(nc,{children:[p(`In this app`),(0,F.jsx)(Xs,{children:e.length})]}),e.length===0&&(0,F.jsx)(tc,{children:p(`Drag files or folders here`)}),e.map(e=>j(e,!0)),t.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(nc,{$clipboard:!0,children:[p(`Clipboard`),(0,F.jsx)(Xs,{children:t.length}),n&&(0,F.jsx)(rc,{children:p(`cut`)})]}),t.map(e=>j(e,n))]})]}),(0,F.jsxs)(lc,{children:[(0,F.jsx)(uc,{$plain:!0,disabled:y.length===0,onClick:k,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,F.jsx)(uc,{disabled:m.size===0||!a,onClick:A,type:`button`,children:p(`Move here`)}),(0,F.jsx)(uc,{$danger:!0,disabled:y.length===0,onClick:O,type:`button`,children:p(`Remove`)})]})]})}var qs=i.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Da}
    ${Ia}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Js=i.div`
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
`,Ys=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,Xs=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Zs=i.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Qs=i.button`
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
`,$s=i.button`
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
`,ec=i.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,tc=i.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,nc=i.div`
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
`,rc=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,ic=i.div`
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
`,ac=i.button`
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
`,oc=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,sc=i.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,cc=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lc=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,uc=i.button`
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
`,dc=new Map,fc=new Set,pc=0;function mc(){pc+=1;for(let e of fc)e()}function hc(e,t){t?dc.set(e,t):dc.delete(e),mc()}function gc(e){return dc.has(e)}function _c(e,t,n){dc.get(e)?.(t,n)}function vc(e){return fc.add(e),()=>fc.delete(e)}function yc(){return pc}function bc(e){return(0,E.useSyncExternalStore)(vc,yc,yc),{available:gc(e),open:(t,n)=>_c(e,t,n)}}function xc(e){return[...dc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function Sc(e){return(0,E.useSyncExternalStore)(vc,yc,yc),{available:xc(e).length>0,open:(t,n)=>{let r=xc(e).at(-1);r&&_c(r,t,n)}}}var Cc=60,wc=300,Tc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Ec=190,Dc=120;function Oc({listing:e,loading:t,error:n,find:r=hn,view:i,showImages:o,imageStripHeight:s=Ec,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:f,onOpenFile:p,showCheckboxes:m=!0,openOnSingleClick:h=!1,shortcuts:g=zt,enableShortcuts:y=!0,refreshToken:b=0,onRefresh:x,onRename:S,onClipboardChanged:ee,onTransfer:C,onAddToTray:te,onAddFavorite:ne,onRemoveFavorite:w,favoritePaths:T,onExtractArchive:re,onPaste:D,confirmDelete:O=!1,previewVideoAudio:k=!1,previewVideoAutoplay:A=!1,showDetails:j=!0,onPreviewInfo:M,onActivate:ie,groupOf:ae,onGridScroll:N,gridFooter:oe,allowBackgroundMenu:se=!0,readOnly:P=!1,onSelectionChange:I,onSelectionCountChange:ce,selectionMenuRequest:le,selectionMenuId:L,singleSelect:z=!1,pendingRename:ue=null,pendingRenameToken:de=0}){let B=R(),fe=jn(),V=(0,E.useRef)(null),pe=(0,E.useRef)(null),H=(0,E.useRef)(null),[me,he]=(0,E.useState)(wc),[ge,_e]=(0,E.useState)({top:0,height:640}),ve=(0,E.useRef)(null),U=(0,E.useRef)(null),[ye,be]=(0,E.useState)(null),[xe,Se]=(0,E.useState)(s),[Ce,we]=(0,E.useState)(()=>new Set),Te=(0,E.useRef)(Ce),Ee=(0,E.useRef)([]);Te.current=Ce,(0,E.useEffect)(()=>I?.([...Ce]),[Ce,I]),(0,E.useEffect)(()=>ce?.(Ce.size),[Ce,ce]),(0,E.useEffect)(()=>{let e=le;if(!e||e.token===W.current)return;W.current=e.token;let t=[...Te.current];t.length!==0&&(Oe({x:e.x,y:e.y,paths:t,background:!1}),ht().then(He,()=>He(!1)))},[le]);let[De,Oe]=(0,E.useState)(null),W=(0,E.useRef)(0),[ke,Ae]=(0,E.useState)(null),[je,Me]=(0,E.useState)(null),[Ne,Pe]=(0,E.useState)(null),Fe=(0,E.useRef)(Ne);Fe.current=Ne;let Ie=(0,E.useRef)(0),Le=(0,E.useRef)(ie);Le.current=ie;let[Re,ze]=(0,E.useState)(()=>{let e=Pn(`yafm.preview.width`,320);return e>=220?e:320}),Be=(0,E.useCallback)(e=>{ze(e),Fn(`yafm.preview.width`,e)},[]),[Ve,He]=(0,E.useState)(!1),Ue=(0,E.useCallback)((e,t)=>{let n=[...Te.current];n.length!==0&&(Oe({x:e,y:t,paths:n,background:!1}),ht().then(He,()=>He(!1)))},[]);(0,E.useEffect)(()=>{if(L)return hc(L,Ce.size>0?Ue:null),()=>hc(L,null)},[L,Ce,Ue]),(0,E.useEffect)(()=>{we(new Set),Pe(null),Oe(null),U.current=null},[e?.path]),(0,E.useEffect)(()=>{Se(s)},[s]),(0,E.useEffect)(()=>{we(new Set),Pe(null),U.current=null},[b]);let We=e=>{ve.current={y:e.clientY,height:xe},e.currentTarget.setPointerCapture(e.pointerId)},Ge=e=>{let t=ve.current;if(!t)return;let n=Math.max(Dc,Math.round(window.innerHeight*.7));Se(Math.min(n,Math.max(Dc,t.height+t.y-e.clientY)))},Ke=e=>{ve.current&&(ve.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(xe))},qe=()=>{Se(Ec),c?.(Ec)},Je=r.query.length>0,Ye=(0,E.useMemo)(()=>Tc.filter(e=>i.columns?.includes(e.id)),[i.columns]),Xe=i.columns?.includes(`linkTarget`)??!1,Ze=(0,E.useMemo)(()=>`minmax(160px, 1fr) ${Ye.map(e=>`${e.width}px`).join(` `)}`.trim(),[Ye]),Qe=(0,E.useMemo)(()=>e?jc(e.entries.map(t=>{let n=t.isDirectory?Mn(fe,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:Je?gn(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!Je||r.mode===`dim`||e.ranges!==null),i,e,B):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,Je,r,fe,i.sort,i.sortDescending,B]);Ee.current=Qe;let $e=Math.max(40,i.iconSize+20),et=Math.max(0,Math.floor(ge.top/$e)-4),tt=Math.min(Qe.length,et+Math.ceil(ge.height/$e)+10),nt=(0,E.useMemo)(()=>Qe.slice(et,tt),[Qe,et,tt]);(0,E.useEffect)(()=>{let e=H.current;if(!e||i.mode!==`list`)return;let t=()=>_e(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,E.useEffect)(()=>{_e(e=>({...e,top:0})),H.current&&(H.current.scrollTop=0)},[e?.path]),(0,E.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=Qe.findIndex(e=>e.entry.fullPath===r.currentPath),t=H.current;if(e<0||!t)return;let n=e*$e;(n<t.scrollTop||n+$e>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else V.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,Qe,$e]);let rt=(0,E.useMemo)(()=>Qe.slice(0,me),[Qe,me]);(0,E.useEffect)(()=>{he(wc)},[e?.path]),(0,E.useEffect)(()=>{if(!r.currentPath)return;let e=Qe.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&he(t=>Math.max(t,e+wc))},[r.currentPath,Qe]);let it=(0,E.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&he(e=>Math.min(Qe.length,e+wc))},[Qe.length]),at=i.mode===`grid`,ot=(0,E.useMemo)(()=>{if(!at)return[];if(!ae)return Pc(rt,Nc);let e=[],t=new Map;for(let n of rt){let r=ae(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[rt,at,ae]),st=(0,E.useMemo)(()=>o?Qe.filter(e=>!e.entry.isDirectory&&Dn(e.entry.name)):[],[Qe,o]),ct=st.length,lt=(0,E.useMemo)(()=>st.slice(0,Cc),[st]),ut=(0,E.useMemo)(()=>o?Pc(lt,Mc):[],[lt,o]),dt=(0,E.useMemo)(()=>Qe.map(e=>e.entry.fullPath),[Qe]),ft=Qe.length>0&&Ce.size>=Qe.length,pt=Ce.size>0&&!ft,gt=()=>{z||(ft?wt():we(new Set(dt)))},_t=e?.path??``,vt=(0,E.useCallback)((e,t)=>{if(z){U.current=t,we(new Set([t]));return}let n=e.ctrlKey||e.metaKey;we(r=>{if(e.shiftKey&&U.current!==null){let e=dt.indexOf(U.current),i=dt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(dt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),U.current=t,e}return U.current=t,new Set([t])})},[dt,z]),Ct=(0,E.useCallback)(e=>{z?(U.current=e,we(new Set([e]))):(U.current=e,we(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[z]),wt=(0,E.useCallback)(()=>{U.current=null,we(new Set)},[]);(0,E.useEffect)(()=>{if(de===0||!ue||Ie.current===de||!e?.entries.some(e=>e.fullPath===ue))return;Ie.current=de,U.current=ue,we(new Set([ue])),Pe({path:ue,value:_(ue)});let t=Qe.findIndex(e=>e.entry.fullPath===ue),n=H.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*$e;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(ue)}"]`)?.scrollIntoView({block:`nearest`})})}},[H,e,ue,de,$e,Qe,i.mode]),(0,E.useEffect)(()=>{if(!Ne)return;let e=Qe.findIndex(e=>e.entry.fullPath===Ne.path),t=H.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*$e;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ne.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[H,Ne,$e,Qe,i.mode]);let Tt=(0,E.useCallback)(()=>Oe(null),[]),Ot=(0,E.useCallback)((e,t)=>{e.isDirectory?f(e.fullPath,Ht(t)):p?.(e.fullPath,Ht(t))},[f,p]),At=(0,E.useCallback)((e,t,n)=>{be({entry:e,x:t,y:n})},[]),jt=(0,E.useRef)(null),Mt=(0,E.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Gs(e,Ce.has(n)?[...Ce]:[n])},[Ce]),Nt=(0,E.useCallback)(e=>{if(!Vs(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);jt.current=t?.dataset.directory===`true`?t.dataset.path??_t:_t,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[_t]),Pt=(0,E.useCallback)(e=>{if(P)return;let{paths:t,move:n}=Hs(e),r=jt.current??_t;jt.current=null,t.length!==0&&C&&(e.preventDefault(),C(t,r,!e.ctrlKey&&n))},[_t,C,P]),G=(0,E.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),P||!t&&!se)return;let n=Te.current;t&&!n.has(t)&&we(new Set([t])),t&&(U.current=t);let r=t?n.has(t)?[...n]:[t]:[];Oe({x:e.clientX,y:e.clientY,paths:r,background:!t}),ht().then(He,()=>He(!1))},[se,_t]),Ft=(0,E.useCallback)(()=>x?.(),[x]),Lt=(e,t)=>{U.current=e,we(new Set([e])),t&&Pe({path:e,value:_(e)}),Ft()},Rt=ke&&(0,F.jsx)(vo,{initialDirectory:_t,initialName:ke.name,onCancel:()=>Ae(null),onCompress:async e=>{let t=await It(ke.paths,e);return!t.ok||!t.path?(ma(t.error??B(`Could not create the archive.`)),!1):(Lt(t.path,!1),!0)}}),Bt=async(e,t=!1)=>{await mt(e,t)&&(He(!0),ee?.())},Vt=async e=>{e&&(await yt(e)?(Ft(),D?.()):ma(B(`Nothing on the clipboard could be pasted here.`)))},Wt=async(e,t=!1)=>{if(!_t)return;let n=e===null?await St(_t,t):await Et(_t,e);!n.ok||n.path===null?ma(n.error??B(`Could not create the item.`)):(U.current=n.path,we(new Set([n.path])),Pe({path:n.path,value:_(n.path)}),Ft())},Gt=e=>{we(new Set([e.fullPath])),U.current=e.fullPath,Pe({path:e.fullPath,value:e.name})},qt=(0,E.useCallback)(e=>Pe(t=>t&&{...t,value:e}),[]),Jt=(0,E.useCallback)(()=>Pe(null),[]),Yt=(0,E.useCallback)(async()=>{let e=Fe.current;if(Pe(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Ee.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await xt(e.path,t);r.ok?(wt(),r.path&&S?.(e.path,r.path),Ft(),window.setTimeout(()=>Ft(),250)):ma(r.error??B(`Could not rename the entry.`))},[wt,S,Ft,B]),Xt=async(e,t=!1)=>{if((t||O)&&!await Zt(e,t))return;let n=await bt(e,t);if(!n.ok&&n.needsPermanent){if(!await Zt(e,!0))return;n=await bt(e,!0)}if(n.ok)wt(),Ft();else{if(n.cancelled)return;ma(n.error??B(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},Zt=(0,E.useCallback)((e,t)=>new Promise(n=>Me({paths:e,permanent:t,resolve:n})),[]),Qt=(0,E.useCallback)(e=>{Me(t=>(t?.resolve(e),null))},[]);(0,E.useEffect)(()=>{if(!y||De)return;let e=e=>{if(Kt(e.target))return;Le.current?.();let t=Ut(e),n=[...Ce],r=n.length===1?Qe.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(dt.length===0)return;e.preventDefault();let n=U.current&&dt.includes(U.current)?U.current:Ce.size===1?[...Ce][0]:null,r=n?dt.indexOf(n):-1,i=t===`home`?0:t===`end`?dt.length-1:Math.max(0,Math.min(dt.length-1,r+(t===`arrowdown`?1:-1))),a=dt[i];we(new Set([a])),U.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===g.copy?i(()=>{n.length>0&&Bt(n)}):t===g.cut?i(()=>{n.length>0&&Bt(n,!0)}):t===g.paste?i(()=>void Vt(_t)):t===g.delete?i(()=>{n.length>0&&Xt(n)}):t===g.deletePermanently?i(()=>{n.length>0&&Xt(n,!0)}):t===g.selectAll?i(()=>{we(new Set(dt)),U.current=dt[0]??null}):t===g.invertSelection?i(()=>{we(new Set(dt.filter(e=>!Ce.has(e)))),U.current=dt[0]??null}):t===g.rename&&r?i(()=>void Gt(r)):t===g.open&&r?i(()=>{r.isDirectory?f(r.fullPath):p?.(r.fullPath)}):t===g.newFolder||t===`f10`?i(()=>void Wt(null)):t===g.terminal?i(()=>void kt(_t)):t===g.properties?i(()=>void Dt(n.length>0?n:_t?[_t]:[])):t===g.refresh&&i(Ft)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[dt,Bt,Wt,_t,y,De,f,p,Vt,Ft,Xt,Gt,Qe,Ce,g]);let $t=je&&(0,F.jsx)(jo,{confirmLabel:je.permanent?B(`Delete`):B(`Move`),danger:je.permanent,message:je.permanent?B(`Permanently delete {target}? This cannot be undone.`,{target:je.paths.length===1?B(`this item`):B(`{count} items`,{count:je.paths.length})}):B(`Move {target} to the recycle bin?`,{target:je.paths.length===1?B(`this item`):B(`{count} items`,{count:je.paths.length})}),onCancel:()=>Qt(!1),onConfirm:()=>Qt(!0),open:!0,title:je.permanent?B(`Delete permanently`):B(`Move to the recycle bin`)}),K=(0,E.useMemo)(()=>{if(!e||Ce.size===0)return null;let t=dt.find(e=>Ce.has(e));return t?Qe.find(e=>e.entry.fullPath===t)?.entry??null:null},[dt,e,Qe,Ce]),en=(0,E.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:_(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:B(`Type`),value:B(`Folder`)},{label:B(`Location`),value:e.parent??`—`},{label:B(`Path`),value:e.path},{label:B(`Size`),value:d(t)},{label:B(`Items`),value:a(B,n,`1 item`,`{count} items`)},{label:B(`Modified`),value:`—`},{label:B(`Created`),value:`—`},{label:B(`Attributes`),value:`—`}]}},[e,B]),q=(0,E.useMemo)(()=>{if(!K||!e)return null;let t=K.isDirectory?e.folderSizes[K.name]:void 0,n=e.tags[K.name]??[],r=K.name.lastIndexOf(`.`),i=r>0&&r<K.name.length-1?K.name.slice(r+1).toUpperCase():`—`;return{name:K.name,path:K.fullPath,isDirectory:K.isDirectory,size:K.size,modified:K.modified,created:K.created,fields:[{label:B(`Type`),value:Lc(K,B)},...K.isEncrypted?[{label:B(`Encryption`),value:B(`Password required`)}]:[],{label:B(`Extension`),value:K.isDirectory?`—`:i},{label:B(`Location`),value:e.path},{label:B(`Full path`),value:K.fullPath},{label:B(`Size`),value:K.isDirectory?t===void 0?`—`:d(t):d(K.size)},...K.isDirectory?[{label:B(`Items`),value:`${e.counts[K.name]??`—`}`}]:[],{label:B(`Modified`),value:v(K.modified)},{label:B(`Created`),value:v(K.created)},{label:B(`Link status`),value:K.linkTarget==null?K.linkCount>1?B(`Hard link`):`—`:K.linkValid?`OK`:B(`Broken`)},...K.linkTarget?[{label:B(`Target`),value:K.linkTarget}]:[],...K.linkCount>1?[{label:B(`Links`),value:String(K.linkCount)}]:[],{label:B(`Attributes`),value:[K.isHidden?B(`Hidden`):``,K.isSystem?B(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:B(`Tags`),value:n.join(`, `)}]:[]]}},[e,K,B]),tn=De?.paths.length===1?De.paths[0]:null,J=tn?Qe.find(e=>e.entry.fullPath===tn)?.entry:void 0,nn=J?{path:J.fullPath,isDirectory:J.isDirectory}:null,rn=q??en,an=(0,E.useRef)(M);an.current=M,(0,E.useEffect)(()=>{an.current?.(rn)},[M,rn]);let on=j&&rn&&(0,F.jsx)(Ho,{info:rn,onWidth:Be,selectionNote:Ce.size>1?a(B,Ce.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:k,videoAutoplay:A,width:Re});return n&&!e?(0,F.jsx)(Rl,{children:(0,F.jsx)(Bl,{children:n})}):!e&&!t?(0,F.jsx)(Rl,{children:(0,F.jsx)(zl,{children:B(`Nothing selected.`)})}):i.mode===`grid`?(0,F.jsxs)(nl,{onPointerDown:ie,children:[(0,F.jsxs)(rl,{children:[(0,F.jsxs)(dl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||wt()},onContextMenu:e=>G(e),onDragOver:Nt,onDragStart:Mt,onDrop:Pt,onScroll:e=>{N?.(e.currentTarget),it(e.currentTarget)},children:[m&&Qe.length>0&&(0,F.jsxs)($c,{children:[(0,F.jsx)(Zc,{$checked:!z&&ft,$partial:!z&&pt,"aria-label":B(ft?`Select none`:`Select all`),disabled:z,onClick:gt,title:B(ft?`Select none`:`Select all`),type:`button`,children:ft?(0,F.jsx)(mi,{size:10}):pt?(0,F.jsx)(Qc,{}):null}),(0,F.jsx)(`span`,{children:B(ft?`Select none`:`Select all`)})]}),t&&!e?(0,F.jsx)(gl,{$size:i.gridSize,children:(0,F.jsx)(Uc,{size:i.gridSize})}):(0,F.jsx)(Gc,{counts:e?.counts,currentPath:Je?r.currentPath:null,groups:ot,gridSize:i.gridSize,innerRef:V,onContextMenu:G,onOpen:f,onOpenFile:p,onRenameCancel:Jt,onRenameChange:qt,onRenameCommit:Yt,onSelect:vt,onToggle:Ct,openOnSingleClick:h,renaming:Ne,searching:Je,selected:Ce,showCheckboxes:m,showTarget:Xe}),!t&&e&&Qe.length===0&&(0,F.jsx)(Ll,{children:(0,F.jsx)(zl,{children:n??(Je&&r.mode===`hide`?B(`No entries match the search.`):B(`This folder is empty.`))})}),oe]}),De&&(0,F.jsx)(to,{canPaste:Ve,directory:_t,allowCompression:!0,menu:De,onAddToTray:te,onAddFavorite:ne,onRemoveFavorite:w,favoritePaths:T,onExtractArchive:re,onArchiveCreated:Lt,onClose:Tt,onCompressTo:(e,t)=>Ae({paths:e,name:t}),onCopy:Bt,onCreateFile:e=>void Wt(e),onCreateFolder:e=>void Wt(null,e),onDelete:Xt,onOpen:f,onOpenFile:p,onPaste:Vt,onRefresh:Ft,onRename:e=>{let t=Qe.find(t=>t.entry.fullPath===e)?.entry;t&&Gt(t)},shortcuts:g,target:nn}),Rt,$t]}),on]}):(0,F.jsxs)(nl,{onPointerDown:ie,children:[(0,F.jsxs)(rl,{children:[(0,F.jsxs)(il,{onScroll:e=>{H.current&&H.current.scrollLeft!==e.currentTarget.scrollLeft&&(H.current.scrollLeft=e.currentTarget.scrollLeft)},ref:pe,style:{gridTemplateColumns:Ze},children:[(0,F.jsxs)(Xc,{children:[m&&(0,F.jsx)(Zc,{$checked:!z&&ft,$partial:!z&&pt,"aria-label":B(ft?`Select none`:`Select all`),disabled:z,onClick:e=>{e.stopPropagation(),gt()},title:B(ft?`Select none`:`Select all`),type:`button`,children:ft?(0,F.jsx)(mi,{size:10}):pt?(0,F.jsx)(Qc,{}):null}),(0,F.jsxs)(al,{onClick:()=>l(`name`),type:`button`,children:[B(`Name`),kc(i,`name`)]})]}),Ye.map(e=>(0,F.jsxs)(al,{onClick:()=>l(e.id),type:`button`,children:[B(e.label),kc(i,e.id)]},e.id))]}),(0,F.jsxs)(ol,{onClick:e=>{e.target===e.currentTarget&&wt()},onContextMenu:e=>G(e),onDragOver:Nt,onDragStart:Mt,onDrop:Pt,onScroll:e=>{pe.current&&pe.current.scrollLeft!==e.currentTarget.scrollLeft&&(pe.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;_e(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:H,children:[t&&!e?(0,F.jsx)(Hc,{template:Ze,columns:Ye.length}):(0,F.jsxs)(F.Fragment,{children:[et>0&&(0,F.jsx)(`div`,{style:{height:et*$e}}),nt.map(t=>{let n=t.entry.fullPath;return(0,F.jsx)(qc,{current:Je&&n===r.currentPath,dim:Je&&t.ranges===null,height:$e,iconSize:i.iconSize,innerRef:V,listing:e,onContextMenu:G,onOpen:Ot,onRenameCancel:Jt,onRenameChange:qt,onRenameCommit:Yt,onSelect:vt,onTagEdit:At,onToggle:Ct,openOnSingleClick:h,renaming:Ne?.path===n?{value:Ne.value}:null,row:t,selected:Ce.has(n),showCheckboxes:m,showTarget:Xe,template:Ze,visible:Ye},n)}),tt<Qe.length&&(0,F.jsx)(`div`,{style:{height:(Qe.length-tt)*$e}})]}),!t&&e&&Qe.length===0&&(0,F.jsx)(Rl,{children:(0,F.jsx)(zl,{children:n??(Je&&r.mode===`hide`?B(`No entries match the search.`):B(`This folder is empty.`))})})]}),o&&st.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(sl,{onDoubleClick:qe,onPointerDown:We,onPointerMove:Ge,onPointerUp:Ke,title:B(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(cl,{style:{height:xe},children:[(0,F.jsxs)(ll,{children:[B(`Preview`),(0,F.jsx)(ul,{children:ct>Cc?`${lt.length} / ${ct}`:ct})]}),(0,F.jsx)(dl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||wt()},onContextMenu:e=>G(e),children:(0,F.jsx)(Gc,{counts:e?.counts,currentPath:Je?r.currentPath:null,groups:ut,gridSize:i.gridSize,onContextMenu:G,onOpen:f,onOpenFile:p,onSelect:vt,onToggle:Ct,openOnSingleClick:h,searching:Je,selected:Ce,showCheckboxes:m,showTarget:Xe})})]})]}),ye&&e&&(0,F.jsx)(Cs,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(ye.entry.name,e,t),onClose:()=>be(null),tags:e.tags[ye.entry.name]??[],x:ye.x,y:ye.y}),De&&(0,F.jsx)(to,{canPaste:Ve,directory:_t,allowCompression:!0,menu:De,onAddToTray:te,onAddFavorite:ne,onRemoveFavorite:w,favoritePaths:T,onExtractArchive:re,onArchiveCreated:Lt,onClose:Tt,onCompressTo:(e,t)=>Ae({paths:e,name:t}),onCopy:Bt,onCreateFile:e=>void Wt(e),onCreateFolder:e=>void Wt(null,e),onDelete:Xt,onOpen:f,onOpenFile:p,onPaste:Vt,onRefresh:Ft,onRename:e=>{let t=Qe.find(t=>t.entry.fullPath===e)?.entry;t&&Gt(t)},shortcuts:g,target:nn}),Rt,$t]}),on]})}function kc(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Ac=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function jc(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Lc(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Ac.compare(String(r),String(i));return t.sortDescending?-o:o})}var Mc=wn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&En(t.entry.name)===e})),Nc=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Mc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Pc(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Fc(e){return Math.max(24,Math.min(e-56,160))}var Ic={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Lc(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Ic[Is(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Rc(e,t,n,r){switch(e){case`type`:return Lc(t,r);case`size`:return Bc(t,n.folderSizes);case`modified`:return v(t.modified);case`created`:return v(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function zc({name:e,ranges:t}){if(!t||t.length===0)return(0,F.jsx)(F.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,F.jsx)(Il,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,F.jsx)(F.Fragment,{children:n})}function Bc(e,t){if(!e.isDirectory)return d(e.size);let n=t[e.name];return n===void 0?`—`:d(n)}function Vc({entry:e,size:t=18}){let n=R(),r=(0,E.useRef)(null),[i,a]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=an(i?e.fullPath:null,e.isDirectory,t>32),s=sn(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,F.jsxs)(Jc,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,F.jsx)(Ls,{name:e.iconSource.slice(5),size:t}):s?(0,F.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,F.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,F.jsx)(Zr,{size:t}):(0,F.jsx)(Ls,{name:Is(e.name),size:t}),e.isEncrypted&&(0,F.jsx)(Yc,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,F.jsx)(oa,{size:Math.max(8,Math.round(t*.52))})})]})}function Hc({template:e,columns:t}){return(0,F.jsx)(F.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,F.jsxs)(_l,{style:{gridTemplateColumns:e},children:[(0,F.jsxs)(bl,{children:[(0,F.jsx)(vl,{style:{flexShrink:0,height:18,width:18}}),(0,F.jsx)(vl,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,F.jsx)(vl,{style:{width:t%2==0?44:92}},t))]},r))})}function Uc({size:e}){return(0,F.jsx)(F.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,F.jsxs)(Al,{$dim:!1,$current:!1,$selected:!1,children:[(0,F.jsx)(jl,{children:(0,F.jsx)(vl,{style:{height:e,width:e}})}),(0,F.jsx)(Nl,{children:(0,F.jsx)(vl,{style:{height:9,width:`${t}%`}})})]},n))})}var Wc=(0,E.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=R(),x=jn(),S=!e.entry.isDirectory&&Dn(e.entry.name),ee=(0,E.useRef)(null),[C,te]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(!S||C)return;let e=ee.current;if(!e)return;if(!(`IntersectionObserver`in window)){te(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(te(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,C]);let ne=dn(S&&C?e.entry.fullPath:null,192,e.entry.modified),[w,T]=(0,E.useState)(!1),re=e.entry.fullPath,D=t=>{e.entry.isDirectory?v(re,Ht(t)):y?.(re,Ht(t))};return(0,F.jsxs)(Al,{$current:t,$dim:n,$selected:s,onClick:e=>{h(e,re),l&&D(e)},onContextMenu:e=>_(e,re),onDoubleClick:e=>{l||D(e)},ref:e=>{ee.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":re,draggable:!u,children:[c&&(0,F.jsx)(tl,{$checked:s,onClick:e=>{e.stopPropagation(),g(re)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,F.jsx)(mi,{size:10})}),(0,F.jsx)(jl,{children:S&&ne&&!w?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>T(!0),src:ne}):(0,F.jsx)(Ml,{children:e.place&&x.useIcons?(0,F.jsx)(bs,{place:e.place,size:r}):(0,F.jsx)(Vc,{entry:e.entry,size:r})})}),(0,F.jsxs)(Nl,{children:[u?(0,F.jsx)(Kc,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:u.value}):(0,F.jsx)(Pl,{$broken:e.entry.linkValid===!1,children:(0,F.jsx)(zc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,F.jsxs)(Sl,{title:b(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(oa,{size:9}),b(`Encrypted`)]}),(0,F.jsx)(Fl,{children:e.entry.isDirectory?i===void 0?Lc(e.entry,b):b(`{type} · {count} items`,{type:Lc(e.entry,b),count:i}):b(`{type} · {size}`,{type:Lc(e.entry,b),size:d(e.entry.size)})}),a&&e.entry.linkTarget&&(0,F.jsxs)(wl,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,F.jsx)(sa,{size:9}),(0,F.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Gc({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=R();return(0,F.jsx)(F.Fragment,{children:e.map(e=>(0,F.jsxs)(fl,{children:[(0,F.jsxs)(pl,{children:[y(e.label),(0,F.jsx)(ml,{children:e.rows.length}),(0,F.jsx)(hl,{})]}),(0,F.jsx)(gl,{$size:t,children:e.rows.map(e=>(0,F.jsx)(Wc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Fc(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Kc({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,F.jsx)(Cl,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var qc=(0,E.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=R(),ee=jn(),C=e.entry.fullPath;return(0,F.jsxs)(yl,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,C),o&&_(e.entry,t)},onContextMenu:e=>g(e,C),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":C,draggable:!p,children:[(0,F.jsxs)(bl,{children:[i&&(0,F.jsx)(el,{$checked:r,onClick:e=>{e.stopPropagation(),h(C)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,F.jsx)(mi,{size:10})}),e.place&&ee.useIcons?(0,F.jsx)(Jc,{children:(0,F.jsx)(bs,{place:e.place,size:s})}):(0,F.jsx)(Vc,{entry:e.entry,size:s}),p?(0,F.jsx)(Kc,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,F.jsx)(xl,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,F.jsx)(zc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,F.jsxs)(Sl,{title:S(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(oa,{size:9}),S(`Encrypted`)]}),a&&e.entry.linkTarget&&(0,F.jsxs)(wl,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,F.jsx)(sa,{size:9}),(0,F.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,F.jsx)(Tl,{children:t.id===`tags`?(0,F.jsx)(El,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,F.jsx)(Dl,{$color:t,$ink:Ss(t),children:e},e)}):(0,F.jsx)(Ol,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,F.jsx)(kl,{children:S(`Broken`)}):Rc(t.id,e.entry,d,S)},t.id))]})}),Jc=i.span`
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
`,Yc=i.span`
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
`,Xc=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Zc=i.button`
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
`,Qc=i.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,$c=i.div`
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
`,el=i.button`
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
`,tl=i(el)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,nl=i.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,rl=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,il=i.div`
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
`,al=i.button`
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
`,ol=i.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,sl=i.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,cl=i.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,ll=i.div`
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
`,ul=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,dl=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,fl=i.section`
    & + & {
        margin-top: 22px;
    }
`,pl=i.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ml=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,hl=i.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,gl=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,_l=i.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,vl=i.span`
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
`,yl=i.div`
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
`,bl=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,xl=i.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Sl=i.span`
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
`,Cl=i.input`
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
`,wl=i.span`
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
`,Tl=i.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,El=i.button`
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
`,Dl=i.span`
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
`,Ol=i.span`
    color: var(--text-muted);
    font-size: 11px;
`,kl=i.span`
    color: #fca5a5;
`,Al=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid ${({$current:e,$selected:t})=>e?`rgba(var(--accent-rgb), 0.5)`:t?`rgba(var(--accent-rgb), 0.4)`:`var(--border-color)`};
    border-radius: var(--radius-lg);
    background: ${({$current:e,$selected:t})=>e?`rgba(var(--accent-rgb), 0.14)`:t?`rgba(var(--accent-rgb), 0.1)`:`var(--bg-primary)`};
    opacity: ${({$dim:e})=>e?.3:1};
    cursor: default;
    user-select: none;
    content-visibility: auto;
    transition: background 120ms ease, border-color 120ms ease, opacity 120ms ease,
        transform 140ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 140ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color-hover);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        transform: translateY(-1px);
    }
`,jl=i.div`
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
`,Ml=i.span`
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
`,Nl=i.div`
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
`,Pl=i.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fl=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Il=i.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Ll=i.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Rl=i.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,zl=i.p`
    font-size: 13px;
    color: var(--text-muted);
`,Bl=i.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Vl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Hl=`/assets/bloom-BpfZWiaG.mp4`,Ul=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Wl=`/assets/drift-BRBSQL2_.mp4`,Gl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Kl=`/assets/ember-CtSz0YxR.mp4`,ql=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],Jl=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],Yl=[{id:`builtin:video:drift`,name:`Drift`,url:Wl,poster:Ul},{id:`builtin:video:ember`,name:`Ember`,url:Kl,poster:Gl},{id:`builtin:video:bloom`,name:`Bloom`,url:Hl,poster:Vl}],Xl=Jl.map(e=>({...e,variants:ql.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:nu(ru(e.id,t))}))})),Zl=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>ql.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:nu(iu(e.id,t))}))),Ql=new Map([...Xl.flatMap(e=>e.variants),...Zl].map(e=>[e.id,e])),$l=new Map(Yl.map(e=>[e.id,e]));function eu(e){if(Ql.has(e))return Ql.get(e).url;if($l.has(e))return $l.get(e).url;let t=e.split(`:`)[1];return t?Ql.get(`builtin:${t}:indigo`)?.url??null:null}function tu(e){return $l.has(e)}function nu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function ru(e,t){return e===`dunes`?du(t):e===`tide`?fu(t):uu(t)}function iu(e,t){return e===`skyline`?ou(t):e===`orbit`?su(t):au(t)}function au({accent:e,secondary:t}){let n=lu(t,`#05070f`,.86),r=lu(e,`#0b1020`,.72),i=lu(t,`#0a0f1d`,.66),a=lu(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${lu(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${lu(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function ou({accent:e,secondary:t}){let n=lu(t,`#07040d`,.84),r=lu(e,`#100716`,.7),i=lu(e,`#08050e`,.82),a=lu(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${lu(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function su({accent:e,secondary:t}){let n=lu(e,`#03050d`,.9),r=lu(t,`#05030c`,.94),i=lu(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${lu(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${lu(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${lu(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${lu(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function cu(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function lu(e,t,n){let[r,i,a]=cu(e),[o,s,c]=cu(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function uu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${lu(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${lu(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${lu(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${lu(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function du({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${lu(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${lu(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${lu(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${lu(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${lu(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${lu(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${lu(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function fu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${lu(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${lu(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${lu(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${lu(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var pu=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function mu(e){return pu.test(e)}function hu({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):ne(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=fn(r),a=t?.startsWith(`builtin:`)?eu(t):n??i,o=n===null?r===null?t!==null&&tu(t):mu(r):mu(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,F.jsxs)(gu,{"aria-hidden":!0,children:[o?(0,F.jsx)(vu,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,F.jsx)(_u,{src:a,style:{filter:s}}),(0,F.jsx)(yu,{})]})}var gu=i.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,_u=i.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,vu=i.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,yu=i.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
        radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function bu({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=R(),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(()=>Math.max(1,Math.ceil(t)));return(0,E.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,Ea.createPortal)((0,F.jsx)(xu,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,F.jsxs)(Su,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(Cu,{children:a(`Protected folder`)}),(0,F.jsx)(wu,{children:a(`These paths are protected by the safety settings:`)}),(0,F.jsx)(Tu,{children:e.map(e=>(0,F.jsxs)(Eu,{children:[(0,F.jsx)(Du,{children:e.path}),(0,F.jsx)(Ou,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,F.jsx)(ku,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,F.jsx)(Au,{children:a(`Nothing has been deleted.`)}),(0,F.jsx)(ju,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,F.jsxs)(Mu,{children:[(0,F.jsx)(Nu,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,F.jsx)(Pu,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var xu=i.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Va}
`,Su=i.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ia}
`,Cu=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,wu=i.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Tu=i.div`
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
`,Eu=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Du=i.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Ou=i.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,ku=i.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Au=i.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,ju=i.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Mu=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Nu=i.button`
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
`,Pu=i.button`
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
`;function Fu(){let e=R(),[t,n]=(0,E.useState)(null),r=(0,E.useRef)(null),i=(0,E.useRef)(null);(0,E.useEffect)(()=>(pa(e=>new Promise(t=>{r.current=t,n(e)})),()=>pa(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,E.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Ea.createPortal)((0,F.jsx)(Iu,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,F.jsxs)(Lu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(Ru,{children:e(`Notice`)}),(0,F.jsx)(zu,{children:t}),(0,F.jsx)(Bu,{children:(0,F.jsx)(Vu,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var Iu=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Va}
`,Lu=i.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ia}
`,Ru=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,zu=i.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Bu=i.div`
    display: flex;
    justify-content: flex-end;
`,Vu=i.button`
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
`;function Hu(){let e=R(),[t,n]=(0,E.useState)(null),[r,i]=(0,E.useState)(``),a=(0,E.useRef)(null),o=(0,E.useRef)(null);(0,E.useEffect)(()=>(ha((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>ha(null)),[]),(0,E.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Ea.createPortal)((0,F.jsx)(Uu,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,F.jsxs)(Wu,{role:`dialog`,"aria-modal":`true`,children:[(0,F.jsx)(Gu,{children:e(`Archive password`)}),(0,F.jsx)(Ku,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,F.jsx)(qu,{title:t.archive,children:t.archive}),(0,F.jsx)(Ju,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,F.jsxs)(Yu,{children:[(0,F.jsx)(Xu,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,F.jsx)(Zu,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var Uu=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Va}
`,Wu=i.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ia}
`,Gu=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ku=i.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,qu=i.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ju=i.input`
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
`,Yu=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Xu=i.button`
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
`,Zu=i(Xu)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Qu({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h}){let g=R(),_=(0,E.useRef)(null),v=c??g(`Search this folder`);(0,E.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,F.jsxs)($u,{children:[(0,F.jsx)(ei,{}),(0,F.jsx)(ed,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(td,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,F.jsx)(nd,{onClick:()=>y(u),title:g(`Previous match (Shift+Enter)`),type:`button`,children:(0,F.jsx)(oi,{size:12})}),(0,F.jsx)(nd,{$down:!0,onClick:()=>y(d),title:g(`Next match (Enter)`),type:`button`,children:(0,F.jsx)(oi,{size:12})})]}),(0,F.jsx)(rd,{$on:n,onClick:()=>y(f),title:g(`Match case`),type:`button`,children:`Aa`}),(0,F.jsx)(rd,{$on:r,onClick:()=>y(p),title:g(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,F.jsx)(id,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:g(t===`hide`?`Hide`:`Dim`)}),(0,F.jsx)(nd,{onClick:h,title:g(`Close search (Esc)`),type:`button`,children:(0,F.jsx)(hi,{size:12})})]})}var $u=i.div`
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
    ${za}
`,ed=i.input`
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
`,td=i.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,nd=i.button`
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
        transform: rotate(${({$down:e})=>e?`90deg`:`-90deg`});
    }

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,rd=i.button`
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
`,id=i(rd)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function ad(e,t,n,r,i=[]){(0,E.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=gn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function od({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=R(),a=(0,E.useRef)(null),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(null);return(0,E.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,E.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,E.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Ea.createPortal)((0,F.jsxs)(sd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(hs).map(n=>(0,F.jsx)(cd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:hs[n](16)},n)),(0,F.jsx)(cd,{onClick:async()=>{let e=await ua([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,F.jsx)(ri,{size:13})}),r&&(0,F.jsx)(cd,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,F.jsx)(hi,{size:12})})]}),document.body)]})}var sd=i.div`
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
    ${La}
    transform-origin: top left;
`,cd=i.button`
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
`,ld={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function ud(){return P.available?await P.request(`share.list`):ld}async function dd(e,t){return P.available?await P.request(`share.add`,{path:e,mode:t}):ld}async function fd(e){return P.available?await P.request(`share.remove`,{id:e}):ld}async function pd(e,t){return P.available?await P.request(`share.mode`,{id:e,mode:t}):ld}async function md(){return P.available?(await P.request(`share.peers.refresh`)).peers??[]:[]}async function hd(e,t){P.available&&await P.request(`share.pair.start`,{host:e,port:t})}async function gd(e,t){P.available&&await P.request(`share.pair.respond`,{requestId:e,accept:t})}async function _d(e,t){P.available&&await P.request(`share.port`,{mode:t,port:e})}var vd=`share://`;function yd(e){return e.toLowerCase().startsWith(vd)}function bd(e){if(!yd(e))return null;let[t,n,...r]=e.slice(8).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function xd(e,t,n=``){let r=`${vd}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Sd(e){let t=bd(e);if(!t||!P.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await P.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:xd(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:xd(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Cd(e){let t=bd(e);if(!t||!P.available)throw Error(`This shared file is only available in the desktop app.`);let n=await P.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function wd(e){await U(await Cd(e))}function Td({source:e,poster:t}){let n=ne(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=fn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??eu(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,F.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,F.jsx)(`img`,{alt:``,src:a}):null}function Ed({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=R(),s=(0,E.useRef)(null),c=(0,E.useRef)(null),l=(0,E.useRef)(!1),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,E.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,E.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,E.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,F.jsx)(qd,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,F.jsxs)(Jd,{children:[(0,F.jsxs)(Yd,{children:[(0,F.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,F.jsx)(nf,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,F.jsx)(hi,{size:12})})]}),(0,F.jsx)(Xd,{children:o(`Drag the frame to choose the visible part.`)}),(0,F.jsxs)(Zd,{children:[t?(0,F.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,F.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,F.jsx)(Qd,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:m},children:(0,F.jsx)($d,{})})]}),(0,F.jsxs)(ef,{children:[(0,F.jsx)(tf,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,F.jsx)(tf,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var Dd=150,Od=120,kd=200,Ad=i.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,jd=i.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Md=i.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${kd}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
        #000 0,
        #000 calc(100% - ${kd}px),
        rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(kd*.72)}px),
        rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(kd*.44)}px),
        rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(kd*.18)}px),
        transparent 100%);
    mask-image: linear-gradient(to bottom,
        #000 0,
        #000 calc(100% - ${kd}px),
        rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(kd*.72)}px),
        rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(kd*.44)}px),
        rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(kd*.18)}px),
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
        transform: translate(-50%, calc(-1 * (var(--banner-image-shift, 0px) + var(--banner-progress, 0) * var(--banner-travel, 0px))))
        scale(calc(1 + var(--banner-progress, 0) * 0.05));
        will-change: transform;
    }
`,Nd=i.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Dd}px);
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
`,Pd=i.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,Fd=i.section`
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
`,Id=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Ld=i.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Rd=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,zd=i.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Bd=i.input`
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
`,Vd=i.button`
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
`,Hd=i.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Ud=i.button`
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
`,Wd=i.button`
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
`,Gd=i.span`
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
`,Kd=i.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,qd=i.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Jd=i.div`
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
`,Yd=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Xd=i.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,Zd=i.div`
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
`,Qd=i.div`
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
`,$d=i.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,ef=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,tf=i.button`
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
`,nf=i.button`
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
`,rf=i.button`
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
`,af=i.div`
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
`,of=i.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,sf=i.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,cf=i.button`
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
`,lf=i.div`
    position: relative;
    display: inline-flex;
`,uf=i.div`
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
`,df=i.button`
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
`,ff=i.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,pf=i.section`
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
`,mf=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,hf=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,gf=i.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,_f=i.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,vf=i.input`
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
`,yf=i.button`
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
`,bf=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,xf=i.div`
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
`,Sf=i.span`
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
`,Cf=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,wf=i.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Tf=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Ef=i.button`
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
`,Df=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Of=i.button`
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
`,kf=i.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Af=i.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,jf=i.div`
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
`,Mf=i.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Nf=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Pf=i.button`
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
`,Ff=i.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,If=i.button`
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
`,Lf=i.button`
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
`,Rf=i.button`
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
`,zf=i.span`
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
`,Bf=i.button`
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
`,Vf=i.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,Hf=i.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,Uf=i.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Wf=i.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Gf=i.input`
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
`,Kf=i.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,qf=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Jf=i.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yf=i.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,Xf=i.button`
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
`;function Zf({places:e,drives:n,recent:r,recentLimit:i,homePath:o,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:f,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:v,onSearchMatches:y,readOnly:b=!1,onPick:x,onSelectionChange:S,onAddToTray:ee,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:T,onExtractArchive:re,settingsVersion:D=0}){let O=R(),k=jn(),[A,j]=(0,E.useState)(!1),[M,ie]=(0,E.useState)(null),ae=M?.overviewBanner??null,N=ae?.startsWith(`builtin:`)??!1,oe=ae?.startsWith(`url:`)?ae.slice(4):ne(ae)?ae:null,se=N||oe?``:ae??``,I=N?``:oe?oe.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:se.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,ce=N?tu(ae):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(I),le=fn(se.length>0?se:null,0,I?`.${I}`:``),L=ae?eu(ae)??oe??le:null,[z,ue]=(0,E.useState)(``),[de,B]=(0,E.useState)(null),[fe,V]=(0,E.useState)(!1),[pe,H]=(0,E.useState)(null),[me,he]=(0,E.useState)(null),[ge,_e]=(0,E.useState)(null),[ye,be]=(0,E.useState)([]),[xe,Se]=(0,E.useState)(null),[Ce,we]=(0,E.useState)(``),[Te,Ee]=(0,E.useState)(null),[Oe,W]=(0,E.useState)(null),ke=Sc(`overview`),[Ae,je]=(0,E.useState)(null),[Me,Ne]=(0,E.useState)(null),Pe=(0,E.useRef)(null),Fe=(0,E.useRef)(null),Ie=(0,E.useRef)(null),Le=(0,E.useRef)(null),Re=(0,E.useRef)(null),ze=Me??M?.overviewBannerHeight??220,[He,Ue]=(0,E.useState)(0),[We,Ge]=(0,E.useState)(null),qe=Math.min(1,Math.max(0,M?.overviewBannerOffset??.3)),Je=ze+kd,Ye=We&&He>0?We.height*(He/We.width):Je,Xe=Ye>0&&Ye<Je+240?(Je+240)/Ye:1,Ze=Math.max(1,Math.round(He*Xe)),Qe=Math.max(0,Ye*Xe-Je),et=Math.min(Od,Qe/2,Math.max(20,ze*.42)),tt=et+qe*Math.max(0,Qe-et*2),[nt,rt]=(0,E.useState)(!1),it=(e,t=!1)=>x?(Ee(e),W({path:e,isDirectory:t}),S?.([e]),!0):!1,at=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),Ee(t),W({path:t,isDirectory:n}),je({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,E.useEffect)(()=>(hc(`overview`,Oe?(e,t)=>je({x:e,y:t,target:Oe}):null),()=>hc(`overview`,null)),[Oe]);let ot=(e,t)=>c(e,t);(0,E.useEffect)(()=>{Ke().then(ie,()=>ie(null))},[D]),(0,E.useEffect)(()=>{if(P.available)return md().then(be,()=>void 0),P.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&be(t.data.peers)})},[]),(0,E.useEffect)(()=>{let e=Ie.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,E.useEffect)(()=>{if(N&&!ce){Ge({width:1920,height:1080});return}Ge(null);let e=Re.current;e?.complete&&e.naturalWidth>0&&Ge({width:e.naturalWidth,height:e.naturalHeight})},[ae,N,ce]),(0,E.useEffect)(()=>{let e=Le.current;if(!e)return;let t=()=>Ue(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[M?.overviewBanner]),(0,E.useEffect)(()=>{if(!de)return;let e=()=>B(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||B(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[de]),(0,E.useEffect)(()=>{if(!fe)return;let e=()=>V(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[fe]);let st=_s(M),ct=st.map(e=>e.id),lt=(0,E.useRef)(null),ut=e=>de?.kind===`panel`&&de.id===e,dt=e=>de?.kind===`place`&&de.id===e;(0,E.useEffect)(()=>{if(!P.available)return;let e=st.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??o).filter(e=>e.length>0);P.send({type:`fs.watch`,payload:{paths:e}})},[st.map(e=>e.path??e.id).join(`|`),o]),ad(lt,v??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let ft=async(e,t)=>{let n={...M?.placeIcons};t?n[e]=t:delete n[e],B(null),await vt({placeIcons:n}),l(await De())},pt=async(e,t)=>{let n={...M?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],he(null),await vt({placeNames:n}),l(await De())},ht=e=>{_e(null),H({drive:e,label:e.label||`Local Disk`})},gt=async()=>{if(!pe)return;let{drive:e,label:t}=pe;H(null);let n=await ve(e.name,t.trim());n.ok?(_e(null),h?.()):_e(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},_t=M?.overviewColumns??1,vt=async e=>{if(!M)return;let t={...M,...e,overviewPanels:e.overviewPanels??ct,overviewHidden:[]};ie(await $e(t)),p?.()},yt=async()=>{let e=await ua([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=M?.overviewBanners??[];await vt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},bt=async()=>{let e=z.trim();if(!M||!ne(e))return;let t=M.overviewBanners??[];ue(``),await vt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},xt=()=>void vt({overviewBanner:null}),St=e=>void vt({overviewBanners:(M?.overviewBanners??[]).filter(t=>t!==e),...M?.overviewBanner===e||M?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Ct=e=>{Pe.current={y:e.clientY,height:ze},e.currentTarget.setPointerCapture(e.pointerId)},wt=e=>{let t=Pe.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Fe.current=n,Ne(n)},Tt=e=>{Pe.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Fe.current!==null&&(vt({overviewBannerHeight:Fe.current}),Fe.current=null)},Et=(e,t)=>{let n=ct.indexOf(e),r=n+t;if(n<0||r<0||r>=ct.length)return;let i=[...ct];[i[n],i[r]]=[i[r],i[n]],vt({overviewPanels:i})},Dt=(e,t)=>{let n={...M?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],vt({overviewTitles:n})},Ot=(e,t)=>void vt({overviewViews:{...M?.overviewViews,[e]:t}}),kt=e=>{let t=M?.overviewPinned??st.filter(e=>e.pinned).map(e=>e.id);vt({overviewPinned:st.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},At=e=>{B(null);let t=t=>{let n={...t};return delete n[e],n},n=M?.overviewPinned??st.filter(e=>e.pinned).map(e=>e.id);vt({overviewPanels:ct.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(M?.overviewTitles),overviewViews:t(M?.overviewViews),overviewIcons:t(M?.overviewIcons),panelPlaces:t(M?.panelPlaces)})},jt=(e,t)=>{let n={...M?.overviewIcons};t?n[e]=t:delete n[e],B(null),vt({overviewIcons:n})},Mt=async e=>{if(!M)return;if(e===`folder`){let e=await la();if(!e)return;let t=`folder:${e}`;ct.includes(t)||await vt({overviewPanels:[...ct,t]});return}if(e===`quick`){let e=2;for(;ct.includes(`quick:${e}`);)e+=1;await vt({overviewPanels:[...ct,`quick:${e}`]});return}let t=e;for(let n=2;ct.includes(t);n+=1)t=`${e}:${n}`;await vt({overviewPanels:[...ct,t]})},Nt=async t=>{let n=await la();if(!n)return;if(t.id===`quick`){await vt({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),l(await De());return}let r=t.places??[];r.some(e=>$f(e,n))||await vt({panelPlaces:{...M?.panelPlaces,[t.id]:[...r,n]}})},Pt=async(t,n)=>{B(null),t.id===`quick`?(await vt({quickAccess:e.filter(e=>!$f(e.path,n)).map(e=>e.path)}),l(await De())):await vt({panelPlaces:{...M?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!$f(e,n))}})},G=async(t,n,r)=>{if($f(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>$f(e,n)),o=i.findIndex(e=>$f(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),t.id===`quick`?(await vt({quickAccess:s}),l(await De())):await vt({panelPlaces:{...M?.panelPlaces,[t.id]:s}})},Ft=(e,t)=>({draggable:A,onDragOver:e=>{A&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{A&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{A&&(n.preventDefault(),G(e,n.dataTransfer.getData(`text/plain`),t))}}),It=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>$f(e.path,t));return{name:M?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??M?.placeIcons?.[t]??null}}),Lt=e=>{if(r.length===0)return(0,F.jsx)(Hf,{children:O(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,F.jsx)(bf,{children:t.map(e=>{let t=Mn(k,e.path);return(0,F.jsxs)(xf,{$plain:!1,$selected:Te===e.path,onClick:t=>{it(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Ht(t)):U(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>at(t,e.path,e.isDirectory),title:e.path,children:[(0,F.jsx)(Sf,{children:t&&k.useIcons?(0,F.jsx)(bs,{place:t,size:18}):(0,F.jsx)(Rs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(Cf,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(wf,{children:e.path})]})]},e.path)})}):(0,F.jsx)(Tf,{children:t.map(e=>{let t=Mn(k,e.path);return(0,F.jsxs)(Ef,{$selected:Te===e.path,onClick:t=>{it(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Ht(t)):U(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>at(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&k.useIcons?(0,F.jsx)(bs,{place:t,size:15}):(0,F.jsx)(Rs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,F.jsxs)(Df,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(wf,{children:e.path})]})]},e.path)})})},Rt=e=>{let t=M?.favorites??[],n=async e=>{await vt({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>t.path.toLowerCase()===e.toLowerCase())&&await vt({favorites:[...t,{path:e,name:_(e)||e,isDirectory:n}]})},i=(e,t,n)=>{A||it(t,n)||(n?c(t,Ht(e)):U(t))},a=A?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Of,{$row:e.view===`list`,onClick:()=>void ua().then(e=>r(e,!1)),title:O(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,F.jsx)(ri,{size:15}):(0,F.jsx)(Sf,{children:(0,F.jsx)(ri,{size:15})}),e.view===`list`?(0,F.jsxs)(Df,{children:[(0,F.jsx)(`strong`,{children:O(`Add file`)}),(0,F.jsx)(wf,{children:O(`Pin any file here`)})]}):(0,F.jsxs)(Cf,{children:[(0,F.jsx)(`strong`,{children:O(`Add file`)}),(0,F.jsx)(wf,{children:O(`Pin any file here`)})]})]}),(0,F.jsxs)(Of,{$row:e.view===`list`,onClick:()=>void la().then(e=>r(e,!0)),title:O(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,F.jsx)(ri,{size:15}):(0,F.jsx)(Sf,{children:(0,F.jsx)(ri,{size:15})}),e.view===`list`?(0,F.jsxs)(Df,{children:[(0,F.jsx)(`strong`,{children:O(`Add folder`)}),(0,F.jsx)(wf,{children:O(`Pin any folder here`)})]}):(0,F.jsxs)(Cf,{children:[(0,F.jsx)(`strong`,{children:O(`Add folder`)}),(0,F.jsx)(wf,{children:O(`Pin any folder here`)})]})]})]}):null;return t.length===0&&!A?(0,F.jsx)(Hf,{children:O(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,F.jsxs)(bf,{children:[t.map(e=>{let t=Mn(k,e.path);return(0,F.jsxs)(xf,{$plain:A,$selected:Te===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!A&&x?.(e.path),onContextMenu:t=>!A&&at(t,e.path,e.isDirectory),title:e.path,children:[A&&(0,F.jsx)(Lf,{onClick:t=>{t.stopPropagation(),n(e.path)},title:O(`Remove from favorites`),type:`button`,children:(0,F.jsx)(hi,{size:11})}),(0,F.jsx)(Sf,{children:t&&k.useIcons?(0,F.jsx)(bs,{place:t,size:18}):(0,F.jsx)(Rs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(Cf,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(wf,{children:e.path})]})]},e.path)}),a]}):(0,F.jsxs)(Tf,{children:[t.map(e=>{let t=Mn(k,e.path);return(0,F.jsxs)(Ef,{$selected:Te===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!A&&x?.(e.path),onContextMenu:t=>!A&&at(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&k.useIcons?(0,F.jsx)(bs,{place:t,size:15}):(0,F.jsx)(Rs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,F.jsxs)(Df,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(wf,{children:e.path})]}),A&&(0,F.jsx)(Lf,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:O(`Remove from favorites`),type:`button`,children:(0,F.jsx)(hi,{size:11})})]},e.path)}),a]})},Bt=e=>{if(n.length===0)return(0,F.jsx)(Hf,{children:O(`No drives are available.`)});let r=n.map(n=>{let r=n.totalSize>0?1-n.freeSpace/n.totalSize:0,i=pe?.drive.name===n.name,a=i?(0,F.jsx)(Qf,{maxLength:32,onCancel:()=>H(null),onChange:e=>H({...pe,label:e}),onCommit:()=>void gt(),value:pe?.label??``}):(0,F.jsx)(F.Fragment,{children:u(n)}),o=!i&&A&&(0,F.jsx)(Rf,{onClick:e=>{e.stopPropagation(),ht(n)},title:O(`Rename volume`),type:`button`,children:(0,F.jsx)(Mi,{size:11})}),s=(0,F.jsx)(wf,{children:O(`{free} free of {total}`,{free:d(n.freeSpace),total:d(n.totalSize)})});return e.view===`grid`?(0,F.jsxs)(xf,{$plain:!1,$selected:Te===n.name,onClick:e=>{!i&&it(n.name,!0)||i||c(n.name,Ht(e))},onDoubleClick:()=>!i&&x?.(n.name),onContextMenu:e=>!i&&at(e,n.name,!0),title:n.name,children:[(0,F.jsx)(Sf,{children:(0,F.jsx)($r,{size:18})}),(0,F.jsxs)(Cf,{children:[(0,F.jsxs)(`strong`,{children:[a,i&&te(n),o]}),s]})]},n.name):(0,F.jsxs)(Ef,{as:i?`div`:`button`,$selected:Te===n.name,onClick:i?void 0:e=>{it(n.name,!0)||c(n.name,Ht(e))},onDoubleClick:i?void 0:()=>x?.(n.name),onContextMenu:i?void 0:e=>at(e,n.name,!0),title:n.name,type:i?void 0:`button`,children:[(0,F.jsx)($r,{size:18}),(0,F.jsxs)(Df,{children:[(0,F.jsxs)(`strong`,{children:[a,i&&te(n),o]}),s]}),(0,F.jsx)(kf,{children:(0,F.jsx)(Af,{$used:r,$tone:t(r)})})]},n.name)});return e.view===`grid`?(0,F.jsx)(bf,{children:r}):(0,F.jsx)(Tf,{children:r})},Vt=()=>{let e=async e=>{Se(e.id);try{await hd(e.host,e.port)}finally{Se(null)}},t=async()=>{let e=Ce.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Se(`manual`);try{await hd(n,r)}finally{Se(null)}}};return(0,F.jsxs)(Uf,{children:[(0,F.jsxs)(Wf,{children:[(0,F.jsx)(Gf,{onChange:e=>we(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:O(`Address, e.g. 192.168.1.20:45701`),value:Ce}),(0,F.jsx)(Xf,{disabled:xe!==null||!Ce.includes(`:`),onClick:()=>void t(),type:`button`,children:O(xe===`manual`?`Pairing…`:`Pair by address`)})]}),ye.length===0&&(0,F.jsx)(Hf,{children:O(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),ye.map(t=>(0,F.jsxs)(Kf,{children:[(0,F.jsxs)(qf,{children:[(0,F.jsx)(Ki,{size:14}),(0,F.jsx)(Jf,{title:t.host,children:t.name}),(0,F.jsx)(Yf,{$online:t.online,children:t.paired?t.online?O(`Paired`):O(`Offline`):O(`Not paired`)}),!t.paired&&t.online&&(0,F.jsx)(Xf,{disabled:xe===t.id,onClick:()=>void e(t),type:`button`,children:xe===t.id?O(`Pairing…`):O(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,F.jsx)(wf,{children:O(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,F.jsxs)(Ef,{onClick:n=>c(xd(t.id,e.id),Ht(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,F.jsx)(Ki,{size:14}),(0,F.jsxs)(Df,{children:[(0,F.jsx)(`strong`,{children:e.name}),(0,F.jsx)(wf,{children:t.name})]}),(0,F.jsx)(Ji,{size:12})]},e.id))]},t.id))]})},Ut=e=>{switch(e.kind){case`share`:return Vt();case`favorites`:return Rt(e);case`quick`:{let t=It(e);return!A&&t.length===0?(0,F.jsx)(Hf,{children:O(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,F.jsxs)(bf,{children:[t.map(t=>(0,F.jsxs)(xf,{$plain:A,$selected:Te===t.path,...Ft(e,t.path),onClick:e=>{!A&&!it(t.path,!0)&&c(t.path,Ht(e))},onDoubleClick:()=>!A&&x?.(t.path),onContextMenu:e=>!A&&at(e,t.path,!0),title:t.path,children:[A&&(0,F.jsx)(Lf,{onClick:n=>{n.stopPropagation(),Pt(e,t.path)},title:O(`Remove from Quick access`),type:`button`,children:(0,F.jsx)(hi,{size:11})}),(0,F.jsxs)(Ff,{children:[A?(0,F.jsx)(If,{onClick:e=>{e.stopPropagation(),B(dt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,F.jsx)(Sf,{children:(0,F.jsx)(bs,{place:t})})}):(0,F.jsx)(Sf,{children:(0,F.jsx)(bs,{place:t})}),dt(t.path)&&(0,F.jsx)(od,{onPick:e=>void ft(t.path,e),value:M?.placeIcons?.[t.path]??t.icon})]}),(0,F.jsxs)(Cf,{children:[me?.path===t.path?(0,F.jsx)(`strong`,{children:(0,F.jsx)(Qf,{onCancel:()=>he(null),onChange:e=>he({path:t.path,name:e}),onCommit:()=>void pt(t.path,me?.name??``),value:me?.name??``})}):(0,F.jsxs)(`strong`,{children:[t.name,A&&(0,F.jsx)(Rf,{onClick:e=>{e.stopPropagation(),B(null),he({path:t.path,name:t.name})},title:O(`Rename folder`),type:`button`,children:(0,F.jsx)(Mi,{size:11})})]}),(0,F.jsx)(wf,{children:t.path})]})]},t.path)),A&&(0,F.jsxs)(Of,{onClick:()=>void Nt(e),title:O(`Pin a folder here`),type:`button`,children:[(0,F.jsx)(Sf,{children:(0,F.jsx)(ri,{size:15})}),(0,F.jsxs)(Cf,{children:[(0,F.jsx)(`strong`,{children:O(`Add folder`)}),(0,F.jsx)(wf,{children:O(`Pin a directory here`)})]})]})]}):(0,F.jsxs)(Tf,{children:[t.map(t=>(0,F.jsxs)(Ef,{$selected:Te===t.path,...Ft(e,t.path),onClick:e=>{!A&&!it(t.path,!0)&&c(t.path,Ht(e))},onDoubleClick:()=>!A&&x?.(t.path),onContextMenu:e=>!A&&at(e,t.path,!0),title:t.path,type:`button`,children:[(0,F.jsxs)(Ff,{children:[A?(0,F.jsx)(If,{onClick:e=>{e.stopPropagation(),B(dt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,F.jsx)(bs,{place:t,size:15})}):(0,F.jsx)(bs,{place:t,size:15}),dt(t.path)&&(0,F.jsx)(od,{onPick:e=>void ft(t.path,e),value:M?.placeIcons?.[t.path]??t.icon})]}),(0,F.jsxs)(Df,{children:[me?.path===t.path?(0,F.jsx)(`strong`,{children:(0,F.jsx)(Qf,{onCancel:()=>he(null),onChange:e=>he({path:t.path,name:e}),onCommit:()=>void pt(t.path,me?.name??``),value:me?.name??``})}):(0,F.jsxs)(`strong`,{children:[t.name,A&&(0,F.jsx)(Rf,{onClick:e=>{e.stopPropagation(),B(null),he({path:t.path,name:t.name})},title:O(`Rename folder`),type:`button`,children:(0,F.jsx)(Mi,{size:11})})]}),(0,F.jsx)(wf,{children:t.path})]}),A&&(0,F.jsx)(Lf,{$inline:!0,onClick:n=>{n.stopPropagation(),Pt(e,t.path)},title:O(`Remove from Quick access`),type:`button`,children:(0,F.jsx)(hi,{size:11})})]},t.path)),A&&(0,F.jsxs)(Of,{$row:!0,onClick:()=>void Nt(e),title:O(`Pin a folder here`),type:`button`,children:[(0,F.jsx)(ri,{size:15}),(0,F.jsxs)(Df,{children:[(0,F.jsx)(`strong`,{children:O(`Add folder`)}),(0,F.jsx)(wf,{children:O(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,F.jsx)(ep,{mode:e.view,onContextMenu:at,onOpen:c,onPick:x,onSelectionChange:S,version:s});case`recent`:return Lt(e);case`drives`:return Bt(e);default:return(0,F.jsx)(tp,{mode:e.view,onContextMenu:at,onOpen:c,onPick:x,onSelectionChange:S,openOnSingleClick:M?.openOnSingleClick??!1,path:e.path??o,selectionMenuId:`overview:${e.id}`,showCheckboxes:M?.showCheckboxes??!0,visibilityVersion:g})}};return(0,F.jsxs)(Ad,{$flush:!!M?.overviewBanner,ref:Ie,children:[!b&&(0,F.jsxs)(af,{$overlay:!!M?.overviewBanner,children:[(0,F.jsx)(of,{role:`group`,title:O(`Columns`),children:[1,2,3,4,5].map(e=>(0,F.jsx)(sf,{$active:_t===e,onClick:()=>void vt({overviewColumns:e}),title:a(O,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),A&&(0,F.jsxs)(lf,{children:[(0,F.jsxs)(cf,{onClick:()=>V(e=>!e),onPointerDown:e=>e.stopPropagation(),title:O(`Add a panel`),type:`button`,children:[(0,F.jsx)(ri,{size:12}),O(`Add panel ▾`)]}),fe&&(0,F.jsx)(uf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,F.jsx)(df,{onClick:()=>{V(!1),Mt(e)},type:`button`,children:O(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),ke.available&&(0,F.jsx)(yf,{onClick:e=>ke.open(e.clientX,e.clientY),title:O(`Selection menu`),type:`button`,children:(0,F.jsx)(aa,{size:14})}),(0,F.jsxs)(cf,{onClick:()=>{j(e=>!e),V(!1),B(null),he(null),H(null)},title:O(A?`Done`:`Edit`),type:`button`,children:[A?(0,F.jsx)(mi,{size:13}):(0,F.jsx)(Mi,{size:13}),O(A?`Done`:`Edit`)]})]}),ge&&(0,F.jsx)(Vf,{children:ge}),M?.overviewBanner&&(0,F.jsxs)(jd,{ref:Le,style:{height:`${ze}px`,"--banner-image-width":`${Ze}px`,"--banner-image-shift":`${tt}px`,"--banner-travel":`${et}px`,"--banner-overlap":`0px`},children:[(0,F.jsx)(Md,{children:ce?(0,F.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Ge({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:L??void 0}):(0,F.jsx)(`img`,{alt:``,onLoad:e=>{let t=N?1920:e.currentTarget.naturalWidth||1920,n=N?1080:e.currentTarget.naturalHeight||1080;Ge({width:t,height:n})},ref:Re,src:L??void 0})}),A&&(0,F.jsx)(Nd,{onDoubleClick:()=>{Fe.current=null,Ne(null),vt({overviewBannerHeight:220})},onPointerCancel:Tt,onPointerDown:Ct,onPointerMove:wt,onPointerUp:Tt,title:O(`Drag to resize; double-click to reset`)})]}),(0,F.jsxs)(Pd,{$offset:M?.overviewBanner?100:0,children:[A&&(0,F.jsxs)(Fd,{children:[(0,F.jsxs)(Id,{children:[(0,F.jsx)(Ld,{children:O(`Banners`)}),M?.overviewBanner&&(0,F.jsxs)(cf,{onClick:()=>rt(!0),title:O(`Adjust framing…`),type:`button`,children:[(0,F.jsx)(Mi,{size:12}),O(`Adjust framing…`)]})]}),(0,F.jsxs)(Rd,{children:[(0,F.jsx)(Hd,{children:(0,F.jsx)(Ud,{$active:!M?.overviewBanner,onClick:xt,title:O(`No banner`),type:`button`,children:(0,F.jsxs)(Kd,{children:[(0,F.jsx)(hi,{size:16}),(0,F.jsx)(`span`,{children:O(`No banner`)})]})})}),Zl.map(e=>(0,F.jsx)(Hd,{children:(0,F.jsx)(Ud,{$active:M?.overviewBanner===e.id,onClick:()=>void vt({overviewBanner:e.id}),title:`${O(e.concept)} · ${O(e.preset)}`,type:`button`,children:(0,F.jsx)(Td,{poster:e.url,source:e.id})})},e.id)),Yl.map(e=>(0,F.jsx)(Hd,{children:(0,F.jsxs)(Ud,{$active:M?.overviewBanner===e.id,onClick:()=>void vt({overviewBanner:e.id}),title:O(e.name),type:`button`,children:[(0,F.jsx)(Td,{poster:e.poster,source:e.id}),(0,F.jsx)(Gd,{children:(0,F.jsx)(bi,{size:11})})]})},e.id)),(M?.overviewBanners??[]).map(e=>(0,F.jsxs)(Hd,{children:[(0,F.jsx)(Ud,{$active:M?.overviewBanner===e||M?.overviewBanner===`url:${e}`,onClick:()=>void vt({overviewBanner:ne(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,F.jsx)(Td,{source:e})}),(0,F.jsx)(Wd,{onClick:()=>St(e),title:O(`Remove`),type:`button`,children:(0,F.jsx)(hi,{size:10})})]},e)),(0,F.jsxs)(rf,{onClick:()=>void yt(),title:O(`Add banner…`),type:`button`,children:[(0,F.jsx)(ri,{size:18}),(0,F.jsx)(`span`,{children:O(`Add banner…`)})]})]}),(0,F.jsxs)(zd,{children:[(0,F.jsx)(Bd,{onChange:e=>ue(e.target.value),onKeyDown:e=>{e.key===`Enter`&&bt()},placeholder:`https://…`,value:z}),(0,F.jsx)(Vd,{disabled:!ne(z),onClick:()=>void bt(),type:`button`,children:O(`Add URL`)})]})]}),(0,F.jsx)(ff,{ref:lt,$columns:_t,children:st.map(e=>{let t=ct.indexOf(e.id);return(0,F.jsxs)(pf,{children:[(0,F.jsxs)(mf,{children:[(0,F.jsxs)(hf,{children:[(0,F.jsxs)(Ff,{children:[A?(0,F.jsx)(If,{onClick:()=>B(ut(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,F.jsx)(ys,{panel:e,size:15})}):(0,F.jsx)(ys,{panel:e,size:15}),ut(e.id)&&(0,F.jsx)(od,{onPick:t=>jt(e.id,t),value:e.icon})]}),A?(0,F.jsx)(vf,{defaultValue:e.title,onBlur:t=>Dt(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,F.jsx)(_f,{children:O(e.title)})]}),(0,F.jsxs)(gf,{children:[!A&&e.kind===`recent`&&(0,F.jsx)(cf,{onClick:()=>void Be().then(f),title:O(`Clear`),type:`button`,children:O(`Clear`)}),!A&&e.kind===`frequent`&&(0,F.jsx)(cf,{onClick:()=>void Ve().then(()=>m?.()),title:O(`Clear the frequent list`),type:`button`,children:O(`Clear`)}),!A&&(e.kind===`home`||e.kind===`folder`)&&(0,F.jsx)(cf,{onClick:()=>c(e.path??o),title:O(`Open folder`),type:`button`,children:O(`Open`)}),A&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(yf,{$active:e.pinned,onClick:()=>kt(e.id),title:e.pinned?O(`Unpin from the sidebar`):O(`Pin to the sidebar`),type:`button`,children:(0,F.jsx)(ci,{size:12})}),(0,F.jsx)(yf,{$active:e.view===`list`,onClick:()=>Ot(e.id,`list`),title:O(`List`),type:`button`,children:(0,F.jsx)(li,{size:13})}),(0,F.jsx)(yf,{$active:e.view===`grid`,onClick:()=>Ot(e.id,`grid`),title:O(`Grid`),type:`button`,children:(0,F.jsx)(ui,{size:13})}),(0,F.jsx)(yf,{disabled:t===0,onClick:()=>Et(e.id,-1),title:O(`Move up`),type:`button`,children:(0,F.jsx)(ti,{size:12})}),(0,F.jsx)(yf,{disabled:t===ct.length-1,onClick:()=>Et(e.id,1),title:O(`Move down`),type:`button`,children:(0,F.jsx)(ti,{size:12})}),(0,F.jsx)(yf,{onClick:()=>At(e.id),title:O(`Remove panel`),type:`button`,children:(0,F.jsx)(hi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Ut(e):(0,F.jsx)(Mf,{children:Ut(e)})]},e.id)})})]}),nt&&L&&(0,F.jsx)(Ed,{height:ze,offset:qe,onCancel:()=>rt(!1),onSave:e=>{vt({overviewBannerOffset:e}),rt(!1)},source:L,video:ce}),Ae&&(0,F.jsx)(to,{directory:o,menu:{x:Ae.x,y:Ae.y,paths:[Ae.target.path]},onClose:()=>je(null),onCopy:(e,t)=>void mt(e,t),onAddToTray:ee,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:T,onExtractArchive:re,onOpen:ot,onOpenFile:e=>x?x(e):void U(e),shortcuts:zt,target:Ae.target})]})}function Qf({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=R();return(0,F.jsxs)(zf,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,F.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,F.jsx)(Bf,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,F.jsx)(hi,{size:11})}),(0,F.jsx)(Bf,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,F.jsx)(mi,{size:12})})]})}function $f(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function ep({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:o}){let s=R(),[c,l]=(0,E.useState)(null),[u,d]=(0,E.useState)(null),f=jn(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,E.useEffect)(()=>{Re().then(l,()=>l([]))},[o]),!c)return(0,F.jsx)(Hf,{children:s(`Reading…`)});if(c.length===0)return(0,F.jsx)(Hf,{children:s(`Folders you open often show up here.`)});let m=e=>a(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,F.jsx)(bf,{children:c.map(e=>{let i=Mn(f,e.path);return(0,F.jsxs)(xf,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Ht(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,F.jsx)(Sf,{children:i&&f.useIcons?(0,F.jsx)(bs,{place:i,size:18}):(0,F.jsx)(Rs,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(Cf,{children:[(0,F.jsx)(`strong`,{children:i?.name||e.name}),(0,F.jsx)(wf,{children:m(e)})]})]},e.path)})}):(0,F.jsx)(Tf,{children:c.map(e=>{let i=Mn(f,e.path);return(0,F.jsxs)(Ef,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Ht(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,F.jsx)(bs,{place:i,size:15}):(0,F.jsx)(Rs,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,F.jsxs)(Df,{children:[(0,F.jsx)(`strong`,{children:i?.name||e.name}),(0,F.jsx)(wf,{children:m(e)})]})]},e.path)})})}function tp({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:o,showCheckboxes:s,openOnSingleClick:c,visibilityVersion:l}){let u=R(),[d,f]=(0,E.useState)(null),[p,m]=(0,E.useState)(null),h=jn();return(0,E.useEffect)(()=>{e&&(f(null),ye(e).then(f,()=>f(null)))},[e,l]),(0,E.useEffect)(()=>{if(P.available)return P.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&ye(e,!1).then(f,()=>void 0)})},[e]),d?t===`list`?(0,F.jsx)(jf,{children:(0,F.jsx)(Oc,{error:null,listing:d,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void U(e)),onRefresh:()=>void ye(e,!1).then(f,()=>void 0),onRename:(e,t)=>f(n=>n&&{...n,entries:n.entries.map(n=>n.fullPath.toLowerCase()===e.toLowerCase()?{...n,name:_(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:o,onSort:()=>void 0,openOnSingleClick:c,enableShortcuts:!1,showCheckboxes:s,showDetails:!1,showImages:!1,view:{...ge,columns:_e.columns??[]}})}):(0,F.jsx)(Mf,{children:d.entries.length===0?(0,F.jsx)(Hf,{children:u(`This folder is empty.`)}):(0,F.jsx)(Nf,{children:d.entries.map(e=>{let t=Mn(h,e.fullPath);return(0,F.jsxs)(Pf,{$selected:p===e.fullPath,onClick:t=>{i?(m(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Ht(t)):U(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&h.useIcons?(0,F.jsx)(bs,{place:t,size:16}):(0,F.jsx)(Rs,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,F.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,F.jsx)(Hf,{children:u(`Reading…`)})}function np({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=R(),s=jn(),[c,l]=(0,E.useState)(!1),[u,d]=(0,E.useState)(``),[f,p]=(0,E.useState)([]),[m,h]=(0,E.useState)(0),[g,_]=(0,E.useState)(null),[v,y]=(0,E.useState)(null),b=(0,E.useRef)(null),x=(0,E.useRef)(null),S=(0,E.useRef)(0);(0,E.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,E.useEffect)(()=>{r&&r!==S.current&&(S.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,E.useEffect)(()=>{c&&b.current?.select()},[c]),(0,E.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let ee=()=>{d(e.replace(/\\/g,`/`)),l(!0)},C=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,E.useEffect)(()=>{if(!c){p([]);return}let e=ap(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{ye(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let te=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,E.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=x.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,F.jsxs)(dp,{onPointerDown:e=>e.stopPropagation(),ref:x,children:[(0,F.jsxs)(hp,{children:[(0,F.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?te(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):C(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:b,spellCheck:!1,value:u}),(0,F.jsx)(gp,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,F.jsx)(hi,{size:12})}),(0,F.jsx)(gp,{$apply:!0,onClick:C,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,F.jsx)(mi,{size:14})})]}),f.length>0&&g&&(0,Ea.createPortal)((0,F.jsx)(fp,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,F.jsxs)(pp,{$active:t===m,onClick:t=>te(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,F.jsx)(Rs,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,F.jsx)(mp,{children:e.name})]},e.path))}),document.body)]});let ne=t?[{label:t,path:e,icon:n}]:ip(e,s.places);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(op,{onClick:ee,title:o(`Click to type a path`),children:ne.map((t,n)=>(0,F.jsxs)(sp,{$last:n===ne.length-1,children:[n>0&&(0,F.jsx)(lp,{children:(0,F.jsx)(oi,{size:9})}),(0,F.jsxs)(up,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,F.jsx)(cp,{children:(0,F.jsx)(bs,{place:t.place,size:13})}):t.icon&&(0,F.jsx)(cp,{children:t.icon}),t.label]})]},t.path))}),v&&(0,F.jsx)(Ua,{items:[{label:o(`Open`),icon:(0,F.jsx)(ai,{size:14}),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),icon:(0,F.jsx)(ri,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`Copy as path`),icon:(0,F.jsx)(Qi,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},.../^yafm:\/\//i.test(v.path)?[]:[{label:o(`Open with…`),icon:(0,F.jsx)(wi,{size:14}),onSelect:()=>void Ot(v.path)},{label:o(`Properties`),icon:(0,F.jsx)(si,{size:14}),onSelect:()=>void Dt([v.path])}]],onClose:()=>y(null),x:v.x,y:v.y})]})}function rp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function ip(e,t){let n=rp(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function ap(e){if(e.toLowerCase().startsWith(`yafm://`))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var op=i.div`
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
`,sp=i.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,cp=i.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,lp=i.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,up=i.button`
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
`,dp=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,fp=i.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Da}
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
`,pp=i.button`
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
`,mp=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hp=i.div`
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
`,gp=i.button`
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
`,_p=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,F.jsx)(`path`,{d:`M4 4v6h6`})]});function vp({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:o=!1,videoAutoplay:s=!1,platform:c}){let l=R(),u=bc(`recycle`),f=c===`windows`,[p,m]=(0,E.useState)([]),[h,g]=(0,E.useState)([]),[_,y]=(0,E.useState)(!1),[b,x]=(0,E.useState)(null),[S,ee]=(0,E.useState)(!0),[C,te]=(0,E.useState)(!1),[ne,w]=(0,E.useState)(null),[T,re]=(0,E.useState)(!1),[D,O]=(0,E.useState)(()=>new Set),[k,A]=(0,E.useState)(null),[j,M]=(0,E.useState)(()=>{let e=In(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[ie,ae]=(0,E.useState)(null),[N,oe]=(0,E.useState)(null),[se,P]=(0,E.useState)(()=>{let e=Pn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),I=(0,E.useRef)(null),ce=e=>{P(e),Fn(`yafm.recycle.preview.width`,e)},le=(0,E.useCallback)(async()=>{ee(!0),w(null);try{m(await W(T))}catch(e){w(e instanceof Error?e.message:String(e))}finally{ee(!1)}},[T]);(0,E.useEffect)(()=>{le()},[le]),(0,E.useEffect)(()=>{T||(g([]),y(!1),x(null))},[T]),(0,E.useEffect)(()=>{O(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let L=(0,E.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=yp(e,t,j.column);return j.descending?-n:n})},[p,h,j]),z=(0,E.useMemo)(()=>!t?.open||t.query.trim().length===0?L:L.filter(e=>Cn(e.name,t)||Cn(e.originalPath,t)),[L,t?.open,t?.query,t?.matchCase,t?.regex]),ue=(0,E.useRef)(null);ad(ue,t??null,`[data-search-block]`,n??(()=>void 0),[L]),(0,E.useEffect)(()=>{O(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let de=(0,E.useMemo)(()=>L.filter(e=>D.has(e.id)),[L,D]),B=de.filter(e=>e.removable&&!e.isOrphan),fe=de.filter(e=>e.removable),V=(e,t)=>{let n=t.ctrlKey||t.metaKey;O(r=>{if(t.shiftKey&&k){let t=L.findIndex(e=>e.id===k),i=L.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(L[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),A(e.id)},pe=(0,E.useCallback)(()=>O(new Set(z.map(e=>e.id))),[z]),H=z.length>0&&z.every(e=>D.has(e.id)),me=(0,E.useCallback)(async()=>{let e=B.map(e=>e.id);if(e.length!==0){te(!0);try{let t=await je(e);t.ok||await ma(a(l,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),O(new Set),await le()}finally{te(!1)}}},[le,B,l]),he=(0,E.useCallback)(async()=>{let e=fe.map(e=>e.id);if(oe(null),e.length!==0){te(!0);try{let t=await Me(e);!t.ok&&!t.cancelled&&await ma(a(l,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),O(new Set),await le()}finally{te(!1)}}},[fe,le,l]),ge=async()=>{oe(null),te(!0);try{await Ae(T),O(new Set),await le()}finally{te(!1)}},_e=async()=>{te(!0),x(null);try{let e=await Pe();if(e.cancelled){x(`Elevation was declined — nothing was read.`);return}if(e.failed){x(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),y(!0)}finally{te(!1)}},ve=async()=>{te(!0),oe(null);try{await Fe(),g([]),y(!1),x(null),await le()}finally{te(!1)}},U=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},ye=e=>{navigator.clipboard.writeText(e.originalPath)},be=(e,t)=>{e.preventDefault(),t&&!D.has(t.id)&&O(new Set([t.id])),ae({x:e.clientX,y:e.clientY})};(0,E.useEffect)(()=>(hc(`recycle`,D.size>0?(e,t)=>ae({x:e,y:t}):null),()=>hc(`recycle`,null)),[D]),(0,E.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),pe()):e.key===`Delete`?(e.preventDefault(),fe.length>0&&oe(`delete`)):e.key===`Enter`&&B.length>0?(e.preventDefault(),me()):e.key===`Escape`&&(O(new Set),ae(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[fe.length,B.length,me,pe]);let xe=[{label:l(`Restore`),icon:(0,F.jsx)(_p,{width:14,height:14}),disabled:B.length===0,onSelect:()=>void me()},{label:l(`Delete permanently`),icon:(0,F.jsx)(pi,{size:14}),danger:!0,disabled:fe.length===0,onSelect:()=>oe(`delete`)},{label:l(`Properties`),icon:(0,F.jsx)(si,{size:14}),disabled:de.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=de;e&&Ne(e.id)}},{label:l(`Open original location`),icon:(0,F.jsx)(Zr,{size:14}),disabled:de.length!==1,onSelect:()=>{let[e]=de;e&&U(e)}},{label:l(`Copy original path`),icon:(0,F.jsx)(Qi,{size:14}),disabled:de.length!==1,onSelect:()=>{let[e]=de;e&&ye(e)}},{label:l(`Select all`),separatorBefore:!0,onSelect:pe},{label:l(`Refresh`),icon:(0,F.jsx)(ni,{size:14}),onSelect:()=>void le()}],Se=de.length>0?de[0]:null,Ce=Se?{name:Se.name,path:Se.contentPath||Se.originalPath,isDirectory:Se.isDirectory,size:Se.size,modified:Se.deleted,fields:[{label:l(`Type`),value:l(xp(Se))},{label:l(`Original location`),value:Se.originalPath},{label:l(`Date deleted`),value:v(Se.deleted)},{label:l(`Size`),value:Se.isDirectory?`—`:d(Se.size)},...Se.owner?[{label:l(`Owner`),value:Se.owner}]:[],{label:l(`Status`),value:Se.isOrphan?l(`Metadata only`):Se.removable?l(`Restorable`):l(`Other profile`)}]}:null;return(0,F.jsxs)(Cp,{ref:I,onContextMenu:e=>be(e),children:[(0,F.jsxs)(wp,{children:[(0,F.jsxs)(Tp,{children:[(0,F.jsx)(pi,{size:16}),(0,F.jsx)(`span`,{children:l(`Recycle Bin`)}),(0,F.jsxs)(Ep,{children:[S?`…`:a(l,L.length,`1 item`,`{count} items`),D.size>0&&` · ${l(`{count} selected`,{count:D.size})}`]})]}),(0,F.jsxs)(Dp,{children:[(0,F.jsx)(kp,{$on:T,onClick:()=>re(e=>!e),title:l(`Show metadata records whose content is already gone`),type:`button`,children:l(`Orphans`)}),T&&f&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Op,{disabled:C||_,onClick:()=>void _e(),title:l(_?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:l(C?`Working…`:_?`Admin view loaded`:`Show all (admin)…`)}),_&&h.length>0&&(0,F.jsx)(Op,{disabled:C,onClick:()=>oe(`purge`),type:`button`,children:l(`Delete every orphan`)})]}),(0,F.jsx)(Op,{disabled:C||B.length===0,onClick:()=>void me(),type:`button`,children:l(`Restore`)}),(0,F.jsx)(Op,{$danger:!0,disabled:C||fe.length===0,onClick:()=>oe(`delete`),type:`button`,children:l(`Delete`)}),(0,F.jsx)(Op,{disabled:C||L.length===0,onClick:()=>oe(`empty`),type:`button`,children:l(`Empty`)}),(0,F.jsx)(Ap,{onClick:()=>void le(),title:l(`Refresh`),type:`button`,children:(0,F.jsx)(ni,{size:14})}),u.available&&(0,F.jsx)(Ap,{onClick:e=>u.open(e.clientX,e.clientY),title:l(`Selection menu`),type:`button`,children:(0,F.jsx)(aa,{size:14})})]})]}),b&&(0,F.jsx)(Zp,{children:b}),ne&&(0,F.jsx)(Qp,{children:ne}),!ne&&!S&&(t?.open&&t.query.trim().length>0?z.length===0:L.length===0)&&(0,F.jsx)(Qp,{children:t?.open&&t.query.trim().length>0?l(`No matching items.`):l(`The recycle bin is empty.`)}),L.length>0&&(0,F.jsxs)(Xp,{children:[(0,F.jsxs)(jp,{ref:ue,children:[(0,F.jsxs)(Np,{children:[(0,F.jsx)(zp,{$checked:H,$partial:!H&&D.size>0,onClick:()=>H?O(new Set):pe(),title:l(H?`Select none`:`Select all`),type:`button`,children:H?(0,F.jsx)(mi,{size:9}):D.size>0&&(0,F.jsx)(Bp,{})}),(0,F.jsxs)(Pp,{onClick:()=>we(`name`),type:`button`,children:[l(`Name`),bp(j,`name`)]}),(0,F.jsxs)(Pp,{onClick:()=>we(`original`),type:`button`,children:[l(`Original location`),bp(j,`original`)]}),(0,F.jsxs)(Pp,{onClick:()=>we(`deleted`),type:`button`,children:[l(`Date deleted`),bp(j,`deleted`)]}),(0,F.jsxs)(Pp,{onClick:()=>we(`size`),type:`button`,children:[l(`Size`),bp(j,`size`)]}),(0,F.jsxs)(Pp,{onClick:()=>we(`type`),type:`button`,children:[l(`Type`),bp(j,`type`)]}),(0,F.jsx)(`span`,{})]}),(0,F.jsx)(Fp,{onClick:e=>{e.target===e.currentTarget&&O(new Set)},children:L.map(e=>(0,F.jsxs)(Ip,{$checked:D.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>V(e,t),onContextMenu:t=>be(t,e),onDoubleClick:()=>{O(new Set([e.id])),A(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,F.jsx)(Rp,{$checked:D.has(e.id),children:D.has(e.id)&&(0,F.jsx)(mi,{size:9})}),(0,F.jsxs)(Vp,{children:[(0,F.jsx)(Sp,{entry:e}),(0,F.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,F.jsx)(Yp,{children:l(`metadata only`)}),e.owner&&(0,F.jsx)(Yp,{$other:!0,children:l(`other profile`)})]}),(0,F.jsx)(Up,{children:e.originalPath}),(0,F.jsx)(Wp,{children:v(e.deleted)}),(0,F.jsx)(Gp,{children:e.isDirectory?`—`:d(e.size)}),(0,F.jsx)(Kp,{children:l(xp(e))}),(0,F.jsxs)(qp,{children:[e.removable&&!e.isOrphan&&(0,F.jsx)(Jp,{onClick:t=>{t.stopPropagation(),je([e.id]).then(le)},title:l(`Restore to its original folder`),type:`button`,children:(0,F.jsx)(_p,{})}),e.removable&&(0,F.jsx)(Jp,{$danger:!0,onClick:t=>{t.stopPropagation(),O(new Set([e.id])),oe(`delete`)},title:e.isOrphan?l(`Remove the leftover record`):l(`Delete permanently`),type:`button`,children:(0,F.jsx)(pi,{size:13})})]})]},e.id))})]}),r&&(0,F.jsx)(Ho,{emptyNote:l(`Nothing selected.`),info:Ce,onWidth:ce,selectionNote:de.length>1?a(l,de.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:o,videoAutoplay:s,width:se})]}),ie&&(0,F.jsx)(Ua,{items:xe,onClose:()=>ae(null),x:ie.x,y:ie.y}),(0,F.jsx)(jo,{confirmLabel:l(N===`empty`?`Empty the bin`:N===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:N===`empty`?a(l,L.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):N===`purge`?l(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):a(l,fe.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>oe(null),onConfirm:()=>{N===`empty`?ge():N===`purge`?ve():he()},open:N!==null,title:l(N===`empty`?`Empty the recycle bin`:N===`purge`?`Delete every orphan`:`Delete permanently`)})]});function we(e){M(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Ln(`yafm.recycle.sort`,n),n})}}function yp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return xp(e).localeCompare(xp(t),void 0,{sensitivity:`base`})}}function bp(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function xp(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function Sp({entry:e}){let t=an(e.originalPath,e.isDirectory);return(0,F.jsx)(Hp,{children:t?(0,F.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,F.jsx)(Zr,{}):(0,F.jsx)(Qr,{})})}var Cp=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,wp=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Tp=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Ep=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Dp=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Op=i.button`
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
`,kp=i(Op)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Ap=i.button`
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
`,jp=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Mp=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Np=i.div`
    display: grid;
    grid-template-columns: ${Mp};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Pp=i.button`
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
`,Fp=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Ip=i.div`
    display: grid;
    grid-template-columns: ${Mp};
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
`,Lp=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Rp=i.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,zp=i.button`
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
`,Bp=i.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Vp=i(Lp)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Hp=i.span`
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
`,Up=i(Lp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Wp=i(Lp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Gp=i(Lp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Kp=i(Lp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,qp=i.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Jp=i.button`
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
`,Yp=i.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Xp=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Zp=i.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Qp=i.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function $p(){return P.available?(await P.request(`app.tags`)).tags:[]}async function em(e){return!P.available||!e?!1:(await P.request(`app.tags.delete`,{name:e})).ok}async function tm(e,t){return!P.available||!e?[]:(await P.request(`app.tags.create`,{name:e,color:t})).tags}async function nm(e,t){return!P.available||!e?!1:(await P.request(`app.tags.color`,{name:e,color:t})).ok}async function rm(e,t){return!P.available||!e||!t?!1:(await P.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function im(){let e=R();return(0,F.jsx)(am,{title:e(`Always applies to every folder`),children:e(`Global`)})}var am=i.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,om=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function sm(e){return`"${e.replaceAll(`"`,``)}"`}function cm(e){let t=document.documentElement.style;for(let n of om){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${sm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function lm(){return P.available?(await P.request(`app.fonts`)).fonts??[]:[]}function um({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=R(),[s,c]=(0,E.useState)(null),[l,u]=(0,E.useState)(``),d=(0,E.useRef)(null),f=(0,E.useRef)(null),p=(0,E.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,E.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(dm,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,F.jsx)(fm,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,F.jsx)(pm,{children:`▾`})]}),s&&(0,Ea.createPortal)((0,F.jsxs)(mm,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,F.jsxs)(hm,{children:[(0,F.jsx)(ei,{size:12}),(0,F.jsx)(gm,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,F.jsxs)(_m,{children:[(0,F.jsxs)(vm,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,F.jsxs)(bm,{children:[n,` `,(0,F.jsx)(Sm,{children:o(`(default)`)})]}),!e&&(0,F.jsx)(mi,{size:11})]}),p.map(t=>(0,F.jsxs)(vm,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,F.jsxs)(ym,{children:[(0,F.jsx)(bm,{children:t}),(0,F.jsx)(xm,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,F.jsx)(mi,{size:11})]},t)),p.length===0&&(0,F.jsx)(Cm,{children:o(`No matching font.`)})]})]}),document.body)]})}var dm=i.button`
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
`,fm=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,pm=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,mm=i.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${La}
`,hm=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,gm=i.input`
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
`,_m=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,vm=i.button`
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
`,ym=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,bm=i.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xm=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Sm=i.span`
    color: var(--text-muted);
    font-size: 10px;
`,Cm=i.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,wm=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],Tm=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Em=`en`,Dm=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],Om=new Date(2026,10,5,16,8).getTime(),km=`system`,Am={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},jm=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],Mm=`yafm.colors.recent`;function Nm(){let e=In(Mm);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Pm({appInfo:e,focusSection:n,onSettingsChanged:r,onOpenFolder:i,find:o,onSearchMatches:s}){let c=R(),[l,u]=(0,E.useState)([]),[f,h]=(0,E.useState)(null),[g,v]=(0,E.useState)(null),[b,x]=(0,E.useState)(null),[S,ee]=(0,E.useState)(``),[te,w]=(0,E.useState)(`file`),[T,re]=(0,E.useState)(!1),[D,O]=(0,E.useState)(!1),[k,A]=(0,E.useState)(null),[j,M]=(0,E.useState)(!1),[ie,ae]=(0,E.useState)(!1),[N,oe]=(0,E.useState)(null),[se,P]=(0,E.useState)(null),[I,le]=(0,E.useState)(null),[L,z]=(0,E.useState)(!1),[ue,de]=(0,E.useState)(null),[B,fe]=(0,E.useState)(null),[V,pe]=(0,E.useState)(!1),[H,me]=(0,E.useState)([]),[he,ge]=(0,E.useState)(null),[ve,U]=(0,E.useState)(!1),[ye,be]=(0,E.useState)(null),[xe,Se]=(0,E.useState)(``),[Ce,we]=(0,E.useState)(xs),[Te,Ee]=(0,E.useState)(null),[De,Oe]=(0,E.useState)(null),[W,ke]=(0,E.useState)(``),[Ae,je]=(0,E.useState)(``),[Me,Ne]=(0,E.useState)(null),[Pe,Fe]=(0,E.useState)(Nm),[Ie,Le]=(0,E.useState)({}),[Re,ze]=(0,E.useState)(null),[Be,Ve]=(0,E.useState)(null),[Ue,We]=(0,E.useState)(!1),[Ge,Je]=(0,E.useState)(!1),[et,nt]=(0,E.useState)(null),[rt,dt]=(0,E.useState)(jm[0].id),[mt,ht]=(0,E.useState)([]),[gt,_t]=(0,E.useState)(null),[vt,yt]=(0,E.useState)(null),[bt,xt]=(0,E.useState)(null),[St,Ct]=(0,E.useState)(!1),[wt,Tt]=(0,E.useState)(``),Et=(0,E.useRef)(null),Dt=(0,E.useRef)({}),Ot=g?.defaultView??_e,kt=g?.themePresets??[],At=se?se.registered&&se.pathMatches:g?.archiveHandler??!1,jt=se?.registered??g?.archiveHandler??!1,Mt=I?I.registered&&I.pathMatches:g?.defaultFileManager??!1;ad(Et,o??null,`section`,s??(()=>void 0),[g]),(0,E.useEffect)(()=>{let e=Et.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){dt(jm[jm.length-1].id);return}let n=t+110,r=jm[0].id;for(let{id:e}of jm){let t=Dt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}dt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Nt=e=>t=>{Dt.current[e]=t},Pt=e=>{Dt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),dt(e)};(0,E.useEffect)(()=>{n&&Pt(n)},[n]),(0,E.useEffect)(()=>{ce().then(e=>u(e.available),()=>u([]))},[]),(0,E.useEffect)(()=>{lm().then(ht,()=>ht([]))},[]),(0,E.useEffect)(()=>{ft().then(yt,()=>yt(null))},[]),(0,E.useEffect)(()=>{it().then(Ve,()=>void 0)},[]),(0,E.useEffect)(()=>{He().then(h,()=>h(null)),Ke().then(v,()=>v(null)),lt().then(M,()=>M(!1)),Xe().then(P,()=>P(null)),Ye().then(le,()=>le(null)),$p().then(me,()=>me([]))},[]),(0,E.useEffect)(()=>{let e=()=>void st().then(A,()=>A(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let G=async e=>{if(!g)return;let t={...g,...e};Object.keys(e).every(e=>t[e]===g[e])||(v(t),tn(),v(await $e(t)),r())},Ft=async e=>{let t=await ua(e);if(!t)return;let n=g?.backgroundCustom??[];await G({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},It=async()=>{let e=wt.trim();if(!g||!ne(e))return;let t=g.backgroundCustom??[];Tt(``),await G({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Lt=e=>{if(!g)return;let t=g.backgroundSource;G({backgroundCustom:g.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},Rt=async()=>{if(!g)return;let t=await la();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;g.protectedPaths.includes(r)||await G({protectedPaths:[...g.protectedPaths,r]})},Bt=()=>{let e=W.trim();g&&e&&!g.protectedPaths.includes(e)&&(ke(``),G({protectedPaths:[...g.protectedPaths,e]}))},Vt=()=>{if(!g||!Te)return;let e=Te.value.trim(),t=Te.from;Ee(null),e.length!==0&&e!==t&&G({protectedPaths:g.protectedPaths.map(n=>n===t?e:n)})},Ht=e=>{g&&G({protectedPaths:g.protectedPaths.filter(t=>t!==e)})},Gt=async()=>{let e=await qe();e.length>0&&await G({protectedPaths:e})},Kt=()=>{if(!g||!De)return;let e=De.value.trim(),t=De.from;Oe(null),e&&e!==t&&G({directoryIndexBlacklist:g.directoryIndexBlacklist.map(n=>n===t?e:n)})},qt=()=>{let e=Ae.trim();g&&e&&!g.directoryIndexBlacklist.includes(e)&&(je(``),G({directoryIndexBlacklist:[...g.directoryIndexBlacklist,e]}))},Jt=async()=>{if(!g)return;let t=await la();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;g.directoryIndexBlacklist.includes(r)||await G({directoryIndexBlacklist:[...g.directoryIndexBlacklist,r]})},Yt=e=>{g&&G({directoryIndexBlacklist:g.directoryIndexBlacklist.filter(t=>t!==e)})},Xt=()=>{G({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},Zt=()=>{if(!g||Me===null)return;let e=Me.trim()||`yyyy/MM/dd HH:mm`;Ne(null),e!==g.timeFormatPattern&&G({timeFormatPattern:e})},Qt=(e,t)=>{Fe(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Ln(Mm,i),i})},$t=m(g?.accentColor,C),K=m(g?.secondaryColor,y),en=(e,t)=>{g&&(Qt(`accent`,$t),Qt(`secondary`,K),G({accentColor:e,secondaryColor:t}))},q=(e,t)=>{g&&(Qt(e,e===`accent`?$t:K),G(e===`accent`?{accentColor:t}:{secondaryColor:t}))},J=async()=>{We(!0),Je(!1);try{Ve(await at())}catch{Je(!0)}finally{We(!1)}},nn=async()=>{if(!g||!Re)return;let e=Re.name.trim()||`${Re.accent.toUpperCase()} / ${Re.secondary.toUpperCase()}`,t=[...g.themePresets,{name:e,accent:Re.accent,secondary:Re.secondary}];ze(null),await G({themePresets:t})},rn=async e=>{g&&await G({themePresets:g.themePresets.filter((t,n)=>n!==e)})},an=e=>{let t=et;nt(null),t&&t.role===e&&(e===`accent`?$t:K).toLowerCase()!==t.color.toLowerCase()&&Qt(e,t.color)},on=async()=>{let e=xe.trim();if(e&&!ve){U(!0),be(null);try{me(await tm(e,Ce)),Se(``)}catch{be(c(`Could not add the tag.`))}finally{U(!1)}}},sn=async(e,t)=>{me(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await nm(e,t)||be(c(`Could not change the tag's color.`))},cn=async e=>{if(ve)return;U(!0),be(null);let t=await em(e);me(await $p()),t||be(`"${e}" is still used by a folder whose index could not be updated.`),U(!1)},ln=async()=>{let e=he;if(!e||ve)return;let t=e.value.trim();t.length===0||t===e.name?ge(null):(U(!0),be(null),await rm(e.name,t)?(me(await $p()),ge(null)):be(`Could not rename "${e.name}".`),U(!1))},un=async e=>{let t=new Set(Ot.columns??_e.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Tc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await G({defaultView:{...Ot,columns:n}})},dn=async()=>{if(ie)return;let e=!j;ae(!0),oe(null);try{let t=await ut(e);M(t),v(e=>e&&{...e,linksEnabled:t}),r(),t!==e&&oe(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{oe(`The request to Windows failed. Try again.`)}finally{ae(!1)}},fn=async()=>{if(!L){z(!0),de(null);try{let e=await Ze();P(e);let t=e.registered&&e.pathMatches;v(e=>e&&{...e,archiveHandler:t}),r(),t||de(`Windows did not accept the archive registration. Try again.`)}catch{de(`The request to Windows failed. Try again.`)}finally{z(!1)}}},pn=async()=>{if(!L){z(!0),de(null);try{let e=await Qe();P(e),v(e=>e&&{...e,archiveHandler:!1}),r(),e.registered&&de(`The registration is still there. Try turning it off again.`)}catch{de(`The request to Windows failed. Try again.`)}finally{z(!1)}}},mn=async(e,t)=>{if(!g)return;let n={...g.extensionIcons};t===null?delete n[e]:n[e]=t,await G({extensionIcons:n})},hn={...zt,...g?.shortcuts};(0,E.useEffect)(()=>{if(!B)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){fe(null);return}let t=Ut(e);t&&(fe(null),G({shortcuts:{...hn,[B]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[B,g]),(0,E.useEffect)(()=>{if(!V)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){pe(!1);return}let t=Ut(e);t&&(pe(!1),G({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[V,g]);let gn=async e=>{await G({recentLimit:Math.min(Math.max(e,0),50)})},_n=(e,t)=>{let n=t??Ie[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Le(t=>({...t,[e]:void 0})),G(i)},vn=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;_t(null),await G({sharePortMode:`custom`,sharePort:n}),await _d(n,`custom`)},yn=async e=>{let t=e===`custom`,n=t?g?.sharePort??8080:null;await G({sharePortMode:t?`custom`:`random`,sharePort:n}),await _d(n,t?`custom`:`random`)},bn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;Ct(!0),xt(null);try{let e=await pt(t);yt(e),xt(e.error),e.error||await G({startupMode:t})}finally{Ct(!1)}},xn=async e=>{await G({galleryRoots:e.length>0?e:null})},Sn=async()=>{let e=await la(),t=g?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await xn([...t,e])},Cn=async()=>{let e=S.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await mn(e,te),ee(``))},wn=async()=>{O(!0);try{let e=await la();if(!e)return;let t=await ua([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await tt(e.replace(/[\\/][^\\/]+$/,``),_(e),`file:${t}`)&&(tn(),x({folder:e,icon:t}))}finally{O(!1)}},Tn=async(e,t)=>{let n={...g?.fonts};t?n[e]=t:delete n[e],await G({fonts:n})};return(0,F.jsxs)(Km,{children:[(0,F.jsxs)(qm,{ref:Et,children:[(0,F.jsxs)(Jm,{ref:Nt(`application`),children:[(0,F.jsx)(Gm,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:c(`Version`)}),(0,F.jsx)(wh,{children:e?`v${e.version}`:`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:c(`Platform`)}),(0,F.jsx)(wh,{children:e?.platform??`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Logs`)}),(0,F.jsx)($,{children:c(`Application logs and crash details. Open the folder here to inspect them without leaving the app.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(pg,{disabled:!e?.logDirectory,onClick:()=>e?.logDirectory&&i(e.logDirectory),type:`button`,children:c(`Open log folder`)})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Language`)}),(0,F.jsx)($,{children:c(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(Hm,{disabled:!g,onChange:e=>void G({language:e}),options:[km,...l.length>0?l:[Em]],value:g?.language??Em})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Picker window size`)}),(0,F.jsx)($,{children:c(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Ph,{inputMode:`numeric`,onBlur:e=>_n(`width`,e.currentTarget.value),onChange:e=>Le(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ie.width??String(g?.pickerWindowWidth??1200)}),(0,F.jsx)(wh,{children:`×`}),(0,F.jsx)(Ph,{inputMode:`numeric`,onBlur:e=>_n(`height`,e.currentTarget.value),onChange:e=>Le(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ie.height??String(g?.pickerWindowHeight??800)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Web server port`)}),(0,F.jsx)($,{children:c(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(io,{disabled:!g,onChange:e=>void yn(e),options:[{value:`random`,label:c(`Random`)},{value:`custom`,label:c(`Custom port`)}],value:g?.sharePortMode??`random`,width:160})})]}),g?.sharePortMode===`custom`&&(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Custom port`)}),(0,F.jsx)($,{children:c(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(Ph,{inputMode:`numeric`,onBlur:e=>void vn(e.currentTarget.value),onChange:e=>_t(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:gt??(g?.sharePort?String(g.sharePort):``)})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Link paths`)}),(0,F.jsx)($,{children:c(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(io,{disabled:!g,onChange:e=>void G({linkPathMode:e}),options:[{value:`relative`,label:c(`Relative`)},{value:`absolute`,label:c(`Absolute`)}],value:g?.linkPathMode??`relative`,width:160})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Global hotkey`)}),(0,F.jsx)($,{children:c(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(fg,{$listening:V,disabled:!g,onClick:()=>pe(!0),type:`button`,children:V?c(`Press a key…`):g?.globalHotkey?Wt(g.globalHotkey):c(`None`)}),g?.globalHotkey&&(0,F.jsx)(Dh,{onClick:()=>void G({globalHotkey:null}),type:`button`,children:c(`Clear`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Open yafm:// links`)}),(0,F.jsx)($,{children:c(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),N&&(0,F.jsx)(Ch,{children:N})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(jh,{$on:j,children:c(j?`Active`:`Off`)}),(0,F.jsx)(Mh,{$on:j,disabled:ie,onClick:()=>void dn(),title:c(j?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,F.jsx)(Nh,{})})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Use as the default file manager`)}),(0,F.jsx)($,{children:c(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),I?.registered&&!I.pathMatches&&(0,F.jsx)(Ch,{children:c(`The registered path points to {path}. Register again to use this build.`,{path:I.registeredPath??`?`})})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(jh,{$on:Mt,children:c(Mt?`Active`:`Off`)}),(0,F.jsx)(Mh,{$on:Mt,disabled:!g,onClick:()=>void(async()=>{let e=I?.registered&&!I.pathMatches?!0:!g?.defaultFileManager;await G({defaultFileManager:e}),le(await Ye().catch(()=>null))})(),title:c(Mt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,F.jsx)(Nh,{})})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Open archives with this app`)}),(0,F.jsx)($,{children:c(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,F.jsx)($,{children:c(`When this is off, opening an archive uses the system's default application instead.`)}),se?.registered&&!se.pathMatches&&(0,F.jsx)(Ch,{children:c(`The registered path points to {path}. Register again to use this build.`,{path:se.registeredPath??`?`})}),ue&&(0,F.jsx)(Ch,{children:ue})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(jh,{$on:At,children:c(At?`Active`:`Off`)}),(0,F.jsx)(pg,{disabled:!g||L||At,onClick:()=>void fn(),type:`button`,children:c(`Register`)}),e?.platform===`windows`&&(0,F.jsx)(pg,{onClick:()=>void ot(`ms-settings:defaultapps`),type:`button`,children:c(`Default apps…`)}),(0,F.jsx)(Ah,{disabled:!g||L||!jt,onClick:()=>void pn(),type:`button`,children:c(`Unregister`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Reopen the tabs that were open`)}),(0,F.jsx)($,{children:c(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,F.jsx)(Mh,{$on:g?.restoreTabs??!0,disabled:!g,onClick:()=>void G({restoreTabs:!g?.restoreTabs}),type:`button`,children:(0,F.jsx)(Nh,{})})]})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`startup`),children:[(0,F.jsx)(Gm,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Start with the computer`)}),(0,F.jsx)($,{children:c(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),bt&&(0,F.jsx)(Ch,{children:bt}),vt&&!vt.supported&&(0,F.jsx)(Ch,{children:c(`This platform cannot create a per-user startup entry.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(io,{disabled:!g||St||vt!==null&&!vt.supported,onChange:e=>void bn(e),options:[{value:`none`,label:c(`None`)},{value:`shortcut`,label:c(`Shortcut`)},{value:`task`,label:c(`Scheduled task`)}],value:vt?.mode??g?.startupMode??`none`,width:170})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Start hidden in the tray`)}),(0,F.jsx)($,{children:c(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(Mh,{$on:g?.startHidden??!1,disabled:!g,onClick:()=>void G({startHidden:!g?.startHidden}),type:`button`,children:(0,F.jsx)(Nh,{})})})]})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`fonts`),children:[(0,F.jsx)(Gm,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,F.jsxs)(Xm,{children:[om.map(e=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(e.label)}),(0,F.jsx)($,{children:c(`Falls back to {font} until another family is chosen.`,{font:c(e.fallback)})})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(um,{defaultLabel:c(e.fallback),disabled:!g,fonts:mt,onChange:t=>void Tn(e.id,t),sample:e.sample,value:g?.fonts?.[e.id]??null})})]},e.id)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Reset`)}),(0,F.jsx)($,{children:c(`Back to the app's built-in font for every role.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(pg,{onClick:()=>void G({fonts:{}}),type:`button`,children:c(`Reset`)})})]})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`time`),children:[(0,F.jsx)(Gm,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,F.jsx)(Xm,{children:(0,F.jsxs)(Zm,{children:[(0,F.jsxs)(Qm,{children:[(0,F.jsx)(Q,{children:c(`Format`)}),(0,F.jsx)($,{children:c(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,F.jsx)(og,{children:Dm.map(e=>(0,F.jsx)(sg,{$active:(g?.timeFormat??`24`)===e.id,onClick:()=>void G({timeFormat:e.id}),type:`button`,children:c(e.label)},e.id))}),(g?.timeFormat??`24`)===`custom`&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(cg,{"aria-label":c(`Pattern`),onBlur:Zt,onChange:e=>Ne(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Zt()):e.key===`Escape`&&Ne(null)},spellCheck:!1,value:Me??g?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,F.jsx)($,{children:c(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,F.jsxs)(lg,{children:[(0,F.jsx)(`span`,{children:c(`Preview`)}),(0,F.jsx)(`code`,{children:p(Om,g?.timeFormat,Me??g?.timeFormatPattern)})]})]})})]}),(0,F.jsxs)(Jm,{ref:Nt(`updates`),children:[(0,F.jsx)(Gm,{note:`The running build and the newest one published.`,title:`Updates`}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:c(`Current version`)}),(0,F.jsx)(wh,{children:e?`v${e.version}`:`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:c(`Latest version`)}),(0,F.jsx)(wh,{children:Be?`v${Be.latest}`:`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Check for updates`)}),(0,F.jsx)($,{children:Be&&!Be.available?c(`You are on the latest version.`):c(`Reads the version file the release workflow publishes.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(pg,{disabled:Ue,onClick:()=>void J(),type:`button`,children:c(Ue?`Checking…`:`Check now`)})})]}),Be?.available&&(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Version {version} is available.`,{version:Be.latest})}),(0,F.jsx)($,{children:c(`Download the new build from the releases page.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(pg,{onClick:()=>void ot(Tm),type:`button`,children:c(`Open release page`)})})]}),Ge&&(0,F.jsx)(X,{children:(0,F.jsx)(Ch,{children:c(`Could not check for updates.`)})})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`colors`),children:[(0,F.jsx)(Gm,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(Zm,{children:[(0,F.jsxs)(Qm,{children:[(0,F.jsx)(Q,{children:c(`Presets`)}),(0,F.jsx)($,{children:c(`One click changes the accent and the highlight together.`)})]}),(0,F.jsxs)($m,{children:[ql.map(e=>(0,F.jsxs)(eh,{$on:$t.toLowerCase()===e.accent&&K.toLowerCase()===e.secondary,onClick:()=>en(e.accent,e.secondary),title:`${c(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,F.jsxs)(sh,{children:[(0,F.jsx)(`i`,{style:{background:e.accent}}),(0,F.jsx)(`i`,{style:{background:e.secondary}})]}),(0,F.jsx)(th,{children:c(e.name)})]},e.name)),kt.map((e,t)=>(0,F.jsxs)(nh,{children:[(0,F.jsxs)(eh,{$on:$t.toLowerCase()===e.accent.toLowerCase()&&K.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>en(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,F.jsxs)(sh,{children:[(0,F.jsx)(`i`,{style:{background:e.accent}}),(0,F.jsx)(`i`,{style:{background:e.secondary}})]}),(0,F.jsx)(th,{children:e.name})]}),(0,F.jsx)(rh,{onClick:()=>void rn(t),title:c(`Remove preset`),type:`button`,children:(0,F.jsx)(hi,{size:9})})]},`${e.name}-${t}`)),Re?(0,F.jsxs)(ah,{children:[(0,F.jsxs)(sh,{children:[(0,F.jsx)(`i`,{style:{background:Re.accent}}),(0,F.jsx)(`i`,{style:{background:Re.secondary}})]}),(0,F.jsx)(oh,{autoFocus:!0,maxLength:24,onChange:e=>ze({...Re,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),nn()):e.key===`Escape`&&(e.preventDefault(),ze(null))},placeholder:c(`Preset name`),spellCheck:!1,value:Re.name}),(0,F.jsx)(Dh,{onClick:()=>void nn(),type:`button`,children:c(`Save`)}),(0,F.jsx)(Dh,{onClick:()=>ze(null),type:`button`,children:c(`Cancel`)})]}):(0,F.jsxs)(ih,{disabled:!g,onClick:()=>ze({name:``,accent:$t,secondary:K}),title:c(`Save the current colours as a preset`),type:`button`,children:[(0,F.jsx)(ri,{size:12}),c(`Add preset`)]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Accent color`)}),(0,F.jsx)($,{children:c(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Wm,{colors:Pe.accent,current:$t,onApply:e=>q(`accent`,e)}),(0,F.jsx)(Oh,{"aria-label":c(`Accent color`),disabled:!g,onBlur:()=>an(`accent`),onChange:e=>void G({accentColor:e.target.value}),onFocus:()=>nt({role:`accent`,color:$t}),type:`color`,value:$t}),(0,F.jsx)(kh,{children:$t.toUpperCase()})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Secondary color`)}),(0,F.jsx)($,{children:c(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Wm,{colors:Pe.secondary,current:K,onApply:e=>q(`secondary`,e)}),(0,F.jsx)(Oh,{"aria-label":c(`Secondary color`),disabled:!g,onBlur:()=>an(`secondary`),onChange:e=>void G({secondaryColor:e.target.value}),onFocus:()=>nt({role:`secondary`,color:K}),type:`color`,value:K}),(0,F.jsx)(kh,{children:K.toUpperCase()})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Reset colors`)}),(0,F.jsx)($,{children:c(`Returns the interface to the default blue and indigo theme.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(Dh,{disabled:!g,onClick:()=>{Qt(`accent`,$t),Qt(`secondary`,K),G({accentColor:null,secondaryColor:null})},type:`button`,children:c(`Reset`)})})]})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`background`),children:[(0,F.jsx)(Gm,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(Zm,{children:[(0,F.jsxs)(Qm,{children:[(0,F.jsx)(Q,{children:c(`Wallpaper`)}),(0,F.jsx)($,{children:c(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,F.jsx)(Kh,{children:(0,F.jsx)(qh,{$active:!g?.backgroundSource,onClick:()=>void G({backgroundSource:null}),title:c(`None`),type:`button`,children:(0,F.jsx)(Qh,{children:c(`None`)})})}),(0,F.jsxs)(Uh,{children:[Xl.map(e=>(0,F.jsxs)(Wh,{children:[(0,F.jsx)(Gh,{children:c(e.name)}),(0,F.jsx)(Kh,{children:e.variants.map(t=>(0,F.jsx)(qh,{$active:g?.backgroundSource===t.id,onClick:()=>void G({backgroundSource:t.id}),title:`${c(e.name)} · ${c(t.preset)}`,type:`button`,children:(0,F.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,F.jsxs)(Wh,{children:[(0,F.jsx)(Gh,{children:c(`Motion`)}),(0,F.jsx)(Kh,{children:Yl.map(e=>(0,F.jsxs)(qh,{$active:g?.backgroundSource===e.id,onClick:()=>void G({backgroundSource:e.id}),title:c(e.name),type:`button`,children:[(0,F.jsx)(`img`,{alt:``,src:e.poster}),(0,F.jsx)(Xh,{children:(0,F.jsx)(bi,{size:11})})]},e.id))})]}),(0,F.jsxs)(Wh,{children:[(0,F.jsx)(Gh,{children:c(`Custom`)}),(0,F.jsxs)(Kh,{children:[(g?.backgroundCustom??[]).map(e=>(0,F.jsx)(Vm,{active:g?.backgroundSource===`file:${e}`||g?.backgroundSource===`url:${e}`||g?.backgroundSource===e,onRemove:()=>Lt(e),onSelect:()=>void G({backgroundSource:ne(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,F.jsxs)(Zh,{onClick:()=>void Ft([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,F.jsx)(ri,{size:12}),c(`Image…`)]}),(0,F.jsxs)(Zh,{onClick:()=>void Ft([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,F.jsx)(ri,{size:12}),c(`Video…`)]})]})]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Image or video URL`)}),(0,F.jsx)($,{children:c(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Ph,{onChange:e=>Tt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&It()},placeholder:`https://…`,value:wt}),(0,F.jsx)(Dh,{disabled:!ne(wt),onClick:()=>void It(),type:`button`,children:c(`Add`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:c(`Blur`)}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Hh,{max:40,min:0,onChange:e=>void G({backgroundBlur:Number(e.target.value)}),type:`range`,value:g?.backgroundBlur??0}),(0,F.jsxs)(wh,{children:[g?.backgroundBlur??0,`px`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:c(`Saturation`)}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Hh,{max:200,min:0,onChange:e=>void G({backgroundSaturation:Number(e.target.value)}),type:`range`,value:g?.backgroundSaturation??100}),(0,F.jsxs)(wh,{children:[g?.backgroundSaturation??100,`%`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:c(`Brightness`)}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Hh,{max:150,min:40,onChange:e=>void G({backgroundBrightness:Number(e.target.value)}),type:`range`,value:g?.backgroundBrightness??100}),(0,F.jsxs)(wh,{children:[g?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`safety`),children:[(0,F.jsx)(Gm,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(Zm,{children:[(0,F.jsxs)(Qm,{children:[(0,F.jsx)(Q,{children:c(`Protected folders`)}),(0,F.jsx)($,{children:c(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,F.jsx)($h,{children:(g?.protectedPaths??[]).map(e=>(0,F.jsxs)(eg,{children:[(0,F.jsx)(tg,{"aria-label":c(`Protected path`),onBlur:Vt,onChange:t=>Ee({from:e,value:t.target.value}),onFocus:()=>Ee({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Vt()):e.key===`Escape`&&Ee(null)},spellCheck:!1,value:Te?.from===e?Te.value:e}),(0,F.jsx)(ng,{onClick:()=>Ht(e),title:c(`Remove`),type:`button`,children:(0,F.jsx)(hi,{size:10})})]},e))}),(0,F.jsxs)(ig,{children:[(0,F.jsx)(ag,{"aria-label":c(`New protected rule`),onChange:e=>ke(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Bt())},placeholder:`*.log`,spellCheck:!1,value:W}),(0,F.jsx)(Dh,{onClick:Bt,type:`button`,children:c(`Add the rule`)})]}),(0,F.jsxs)(rg,{children:[(0,F.jsx)(Dh,{onClick:()=>void Gt(),type:`button`,children:c(`Restore defaults`)}),(0,F.jsx)(Dh,{onClick:()=>void Rt(),type:`button`,children:c(`Add folder…`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Confirmation delay`)}),(0,F.jsx)($,{children:c(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Hh,{max:30,min:2,onChange:e=>void G({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:g?.deleteDelaySeconds??5}),(0,F.jsxs)(wh,{children:[g?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`tags`),children:[(0,F.jsx)(Gm,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(Sh,{children:[(0,F.jsx)(Th,{"aria-label":c(`Color of the new tag`),onChange:e=>we(e.target.value),type:`color`,value:Ce}),(0,F.jsx)(Ph,{onChange:e=>Se(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),on())},placeholder:c(`New tag`),spellCheck:!1,value:xe})]}),(0,F.jsx)($,{children:c(`Add a tag here; it is available in every folder.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(Dh,{disabled:ve||xe.trim().length===0,onClick:()=>void on(),type:`button`,children:c(`Add`)})})]}),ye&&(0,F.jsx)(X,{children:(0,F.jsx)(Ch,{children:ye})}),H.length===0&&(0,F.jsx)(X,{children:(0,F.jsx)($,{children:c(`No tags yet. Add one below; it is available in every folder.`)})}),H.map(e=>(0,F.jsx)(X,{children:he?.name===e.name?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(Sh,{children:[(0,F.jsx)(Th,{"aria-label":c(`Color of {tag}`,{tag:e.name}),onChange:t=>void sn(e.name,t.target.value),title:c(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,F.jsx)(Eh,{autoFocus:!0,disabled:ve,onChange:t=>ge({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),ln()):e.key===`Escape`&&(e.preventDefault(),ge(null))},value:he.value})]}),(0,F.jsx)($,{children:c(`Press Enter to save, Escape to cancel.`)})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Dh,{disabled:ve,onClick:()=>void ln(),type:`button`,children:c(`Save`)}),(0,F.jsx)(Dh,{disabled:ve,onClick:()=>ge(null),type:`button`,children:c(`Cancel`)})]})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(Sh,{children:[(0,F.jsx)(Th,{"aria-label":c(`Color of {tag}`,{tag:e.name}),onChange:t=>void sn(e.name,t.target.value),title:c(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,F.jsx)(Q,{children:e.name})]}),(0,F.jsx)($,{children:a(c,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Dh,{disabled:ve,onClick:()=>ge({name:e.name,value:e.name}),type:`button`,children:c(`Edit`)}),(0,F.jsxs)(Ah,{disabled:ve,onClick:()=>void cn(e.name),type:`button`,children:[(0,F.jsx)(pi,{size:13}),c(`Remove`)]})]})]})},e.name))]})]}),(0,F.jsxs)(Jm,{ref:Nt(`files-view`),children:[(0,F.jsx)(Gm,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Default view`)}),(0,F.jsx)($,{children:c(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsxs)(Bh,{children:[(0,F.jsx)(Vh,{$on:Ot.mode===`list`,onClick:()=>void G({defaultView:{...Ot,mode:`list`}}),type:`button`,children:c(`List`)}),(0,F.jsx)(Vh,{$on:Ot.mode===`grid`,onClick:()=>void G({defaultView:{...Ot,mode:`grid`}}),type:`button`,children:c(`Grid`)})]})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`List icon size`)}),(0,F.jsx)($,{children:c(`The icon in the list rows.`)})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Hh,{max:48,min:16,onChange:e=>void G({defaultView:{...Ot,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Ot.iconSize}),(0,F.jsxs)(wh,{children:[Ot.iconSize,`px`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Grid size`)}),(0,F.jsx)($,{children:c(`The height of a grid tile; the icon inside follows it.`)})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Hh,{max:260,min:100,onChange:e=>void G({defaultView:{...Ot,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Ot.gridSize}),(0,F.jsxs)(wh,{children:[Ot.gridSize,`px`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(Sh,{children:[(0,F.jsx)(Q,{children:c(`Selection checkboxes`)}),(0,F.jsx)(im,{})]}),(0,F.jsx)($,{children:c(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,F.jsx)(Mh,{$on:g?.showCheckboxes??!0,disabled:!g,onClick:()=>void G({showCheckboxes:!(g?.showCheckboxes??!0)}),type:`button`,children:(0,F.jsx)(Nh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(Sh,{children:[(0,F.jsx)(Q,{children:c(`Open with a single click`)}),(0,F.jsx)(im,{})]}),(0,F.jsx)($,{children:c(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,F.jsx)(Mh,{$on:g?.openOnSingleClick??!1,disabled:!g,onClick:()=>void G({openOnSingleClick:!(g?.openOnSingleClick??!1)}),type:`button`,children:(0,F.jsx)(Nh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(Sh,{children:[(0,F.jsx)(Q,{children:c(`Confirm before deleting`)}),(0,F.jsx)(im,{})]}),(0,F.jsx)($,{children:c(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,F.jsx)(Mh,{$on:g?.confirmDelete??!1,disabled:!g,onClick:()=>void G({confirmDelete:!(g?.confirmDelete??!1)}),type:`button`,children:(0,F.jsx)(Nh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(Sh,{children:[(0,F.jsx)(Q,{children:c(`Play audio in video previews`)}),(0,F.jsx)(im,{})]}),(0,F.jsx)($,{children:c(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,F.jsx)(Mh,{$on:g?.previewVideoAudio??!1,disabled:!g,onClick:()=>void G({previewVideoAudio:!(g?.previewVideoAudio??!1)}),type:`button`,children:(0,F.jsx)(Nh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(Sh,{children:[(0,F.jsx)(Q,{children:c(`Autoplay video previews`)}),(0,F.jsx)(im,{})]}),(0,F.jsx)($,{children:c(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,F.jsx)(Mh,{$on:g?.previewVideoAutoplay??!1,disabled:!g,onClick:()=>void G({previewVideoAutoplay:!(g?.previewVideoAutoplay??!1)}),type:`button`,children:(0,F.jsx)(Nh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(Sh,{children:[(0,F.jsx)(Q,{children:c(`Preview panel under the list`)}),(0,F.jsx)(im,{})]}),(0,F.jsx)($,{children:c(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,F.jsx)(Mh,{$on:Ot.showImages??!0,onClick:()=>void G({defaultView:{...Ot,showImages:!(Ot.showImages??!0)}}),type:`button`,children:(0,F.jsx)(Nh,{})})]}),(0,F.jsx)(X,{children:(0,F.jsxs)(Z,{children:[(0,F.jsxs)(Sh,{children:[(0,F.jsx)(Q,{children:c(`Columns`)}),(0,F.jsx)(im,{})]}),(0,F.jsx)($,{children:c(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,F.jsx)(X,{children:(0,F.jsxs)(ug,{children:[Tc.map(e=>(0,F.jsxs)(dg,{children:[(0,F.jsx)(`input`,{checked:(Ot.columns??[]).includes(e.id),onChange:()=>void un(e.id),type:`checkbox`}),(0,F.jsx)(`span`,{children:c(e.label)})]},e.id)),(0,F.jsxs)(dg,{children:[(0,F.jsx)(`input`,{checked:(Ot.columns??[]).includes(`linkTarget`),onChange:()=>void un(`linkTarget`),type:`checkbox`}),(0,F.jsx)(`span`,{children:c(`Link target after the name`)})]})]})})]}),(0,F.jsxs)(_g,{children:[c(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,F.jsx)(im,{}),` `,c(`Anything marked as global always applies to every folder.`)]})]}),(0,F.jsxs)(Jm,{ref:Nt(`shortcuts`),children:[(0,F.jsx)(Gm,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,F.jsxs)(Xm,{children:[wm.map(({id:e,label:t,note:n})=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(t)}),(0,F.jsx)($,{children:c(n)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(fg,{$listening:B===e,onClick:()=>fe(e),type:`button`,children:B===e?c(`Press a key…`):Wt(hn[e])})})]},e)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Reset`)}),(0,F.jsx)($,{children:c(`Back to the default combination for every action.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(pg,{onClick:()=>void G({shortcuts:{...zt}}),type:`button`,children:c(`Reset`)})})]})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`memory`),children:[(0,F.jsx)(Gm,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(_h,{children:[(0,F.jsxs)(vh,{children:[(0,F.jsx)(Q,{children:c(`Process memory`)}),(0,F.jsx)(wh,{children:k?`${d(k.private)} · ${gh(k.private,k.available)}`:`—`})]}),(0,F.jsx)(yh,{children:(0,F.jsx)(bh,{$ratio:k?k.private/Math.max(k.available,1):0,$tone:t(k?k.private/Math.max(k.available,1):0)})}),(0,F.jsx)($,{children:k?c(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:d(k.available),resident:d(k.workingSet)}):c(`Reading the current usage…`)})]}),(0,F.jsxs)(_h,{children:[(0,F.jsxs)(vh,{children:[(0,F.jsx)(Q,{children:c(`Managed heap`)}),(0,F.jsx)(wh,{children:k?`${d(k.managed)} · ${gh(k.managed,k.private)}`:`—`})]}),(0,F.jsx)(yh,{children:(0,F.jsx)(bh,{$ratio:k?k.managed/Math.max(k.private,1):0,$tone:`var(--accent-secondary)`})}),(0,F.jsx)($,{children:c(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,F.jsxs)(_h,{children:[(0,F.jsxs)(vh,{children:[(0,F.jsx)(Q,{children:c(`Native and runtime`)}),(0,F.jsx)(wh,{children:k?`${d(Math.max(0,k.private-k.managed))} · ${gh(Math.max(0,k.private-k.managed),k.private)}`:`—`})]}),(0,F.jsx)(yh,{children:(0,F.jsx)(bh,{$ratio:k?Math.max(0,k.private-k.managed)/Math.max(k.private,1):0,$tone:`var(--accent-primary)`})}),(0,F.jsx)($,{children:c(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Free memory`)}),(0,F.jsx)($,{children:c(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(pg,{onClick:()=>void ct().then(A),type:`button`,children:c(`Trim now`)})})]})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`overview`),children:[(0,F.jsx)(Gm,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,F.jsx)(Xm,{children:(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Recent items`)}),(0,F.jsx)($,{children:c(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(Ph,{max:50,min:0,onChange:e=>void gn(Number(e.target.value)),type:`number`,value:g?.recentLimit??10})})]})})]}),(0,F.jsxs)(Jm,{ref:Nt(`gallery`),children:[(0,F.jsx)(Gm,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,F.jsxs)(Xm,{children:[(g?.galleryRoots??[]).map(e=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:_(e)}),(0,F.jsx)($,{children:e})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(mg,{onClick:()=>void xn((g?.galleryRoots??[]).filter(t=>t!==e)),title:c(`Stop scanning this folder`),type:`button`,children:(0,F.jsx)(hi,{size:12})})})]},e)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Scan folders`)}),(0,F.jsx)($,{children:(g?.galleryRoots??[]).length===0?c(`Nothing added yet, so the gallery reads the Pictures folder.`):c(`Only these folders are scanned, three levels deep.`)})]}),(0,F.jsx)(xh,{children:(0,F.jsx)(pg,{onClick:()=>void Sn(),type:`button`,children:c(`Choose folder…`)})})]})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`icons`),children:[(0,F.jsx)(Gm,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Use system file icons`)}),(0,F.jsx)($,{children:c(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,F.jsx)(Mh,{$on:g?.systemIcons??!1,disabled:!g,onClick:()=>void G({systemIcons:!g?.systemIcons}),type:`button`,children:(0,F.jsx)(Nh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Use custom folder icons`)}),(0,F.jsx)($,{children:c(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,F.jsx)(Mh,{$on:g?.customFolderIcons??!1,disabled:!g,onClick:()=>void G({customFolderIcons:!g?.customFolderIcons}),type:`button`,children:(0,F.jsx)(Nh,{})})]})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`extension-icons`),children:[(0,F.jsx)(Gm,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,F.jsxs)(Xm,{children:[Object.entries(g?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:e}),(0,F.jsx)($,{children:Rm(c,t)})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(zm,{source:t}),(0,F.jsx)(mg,{onClick:()=>void mn(e,null),title:c(`Remove this rule`),type:`button`,children:(0,F.jsx)(hi,{size:12})})]})]},e)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Add a rule`)}),(0,F.jsx)($,{children:c(`Extension and the icon to draw for it.`)})]}),(0,F.jsxs)(xh,{children:[(0,F.jsx)(Ph,{onChange:e=>ee(e.target.value),placeholder:`.psd`,spellCheck:!1,value:S}),(0,F.jsxs)(zh,{children:[(0,F.jsx)(mg,{onClick:()=>re(e=>!e),title:c(`Choose the icon`),type:`button`,children:(0,F.jsx)(zm,{source:te})}),T&&(0,F.jsx)(od,{allowDefault:!1,onClose:()=>re(!1),onPick:e=>{w(e??`file`),re(!1)},value:te})]}),(0,F.jsx)(mg,{onClick:()=>void Cn(),title:c(`Add the rule`),type:`button`,children:(0,F.jsx)(ri,{size:13})})]})]})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`folder-icons`),children:[(0,F.jsx)(Gm,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Give a folder its own icon`)}),(0,F.jsx)($,{children:c(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,F.jsxs)(xh,{children:[b&&(0,F.jsx)(Bm,{src:b.icon}),(0,F.jsx)(pg,{disabled:D,onClick:()=>void wn(),type:`button`,children:c(D?`Choosing…`:`Choose folder and icon…`)})]})]}),b&&(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:_(b.folder)}),(0,F.jsx)($,{children:b.folder})]}),(0,F.jsx)(xh,{children:(0,F.jsxs)(gg,{children:[(0,F.jsx)(mi,{size:11}),` `,c(`Saved`)]})})]})]})]}),(0,F.jsxs)(Jm,{ref:Nt(`folder-index`),children:[(0,F.jsx)(Gm,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:c(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,F.jsx)($,{children:c(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,F.jsx)(Mh,{$on:g?.writeDirectoryIndex??!0,disabled:!g,onClick:()=>void G({writeDirectoryIndex:!g?.writeDirectoryIndex}),type:`button`,children:(0,F.jsx)(Nh,{})})]}),(0,F.jsxs)(Zm,{children:[(0,F.jsxs)(Qm,{children:[(0,F.jsx)(Q,{children:c(`Directory index blacklist`)}),(0,F.jsx)($,{children:c(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,F.jsx)($h,{children:(g?.directoryIndexBlacklist??[]).map(e=>(0,F.jsxs)(eg,{children:[(0,F.jsx)(tg,{"aria-label":c(`Directory index blacklist rule`),onBlur:Kt,onChange:t=>Oe({from:e,value:t.target.value}),onFocus:()=>Oe({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Kt()):e.key===`Escape`&&Oe(null)},spellCheck:!1,value:De?.from===e?De.value:e}),(0,F.jsx)(ng,{onClick:()=>Yt(e),title:c(`Remove`),type:`button`,children:(0,F.jsx)(hi,{size:10})})]},e))}),(0,F.jsxs)(ig,{children:[(0,F.jsx)(ag,{"aria-label":c(`Directory index blacklist rule`),onChange:e=>je(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),qt())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Ae}),(0,F.jsx)(Dh,{onClick:qt,type:`button`,children:c(`Add the rule`)})]}),(0,F.jsxs)(rg,{children:[(0,F.jsx)(Dh,{onClick:Xt,type:`button`,children:c(`Restore defaults`)}),(0,F.jsx)(Dh,{onClick:()=>void Jt(),type:`button`,children:c(`Add folder…`)})]})]})]}),!(g?.writeDirectoryIndex??!0)&&(0,F.jsx)(vg,{children:Lm(c,e?.platform)})]}),(0,F.jsxs)(Jm,{ref:Nt(`indexing`),children:[(0,F.jsx)(Gm,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,F.jsx)(Im,{})]}),(0,F.jsxs)(Jm,{ref:Nt(`files`),children:[(0,F.jsx)(Gm,{note:`What the listings include.`,title:`Files`}),(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:c(`Hidden items`)}),(0,F.jsx)(wh,{children:Fm(c,f?.showHidden)})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:c(`Protected operating system files`)}),(0,F.jsx)(wh,{children:Fm(c,f?.showSystem)})]})]}),(0,F.jsx)(_g,{children:c(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,F.jsxs)(dh,{"aria-label":c(`Settings sections`),children:[(0,F.jsx)(fh,{children:c(`Sections`)}),(0,F.jsx)(ph,{children:jm.map(({id:e,label:t})=>(0,F.jsx)(mh,{$active:rt===e,onClick:()=>Pt(e),type:`button`,children:(0,F.jsx)(`span`,{children:c(t)})},e))}),(0,F.jsx)(hh,{children:c(`Changes are saved as you make them.`)})]})]})}function Fm(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Im(){let e=R(),[t,n]=(0,E.useState)(null);return(0,E.useEffect)(()=>{let e=!0,t=()=>We().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,F.jsx)(vg,{children:e(`No indexing tasks are running.`)}):(0,F.jsxs)(Xm,{children:[(0,F.jsx)(X,{children:(0,F.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,F.jsx)(X,{children:(0,F.jsx)(wh,{title:e,children:e})},e))]}):(0,F.jsx)(vg,{children:e(`Index task information is unavailable.`)})}function Lm(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function Rm(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function zm({source:e}){let t=sn(e.startsWith(`file:`)?e.slice(5):null);return(0,F.jsx)(hg,{children:t?(0,F.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,F.jsx)(Ls,{name:e,size:16})})}function Bm({src:e}){let t=sn(e);return(0,F.jsx)(hg,{children:t&&(0,F.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Vm({path:e,active:t,onSelect:n,onRemove:r}){let i=R(),a=ne(e),o=fn(a?null:e),s=a?e:o,c=mu(e.split(/[?#]/)[0]);return(0,F.jsxs)(Jh,{children:[(0,F.jsxs)(qh,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,F.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,F.jsx)(`img`,{alt:``,src:s})),c&&(0,F.jsx)(Xh,{children:(0,F.jsx)(bi,{size:11})})]}),(0,F.jsx)(Yh,{onClick:r,title:i(`Remove`),type:`button`,children:(0,F.jsx)(hi,{size:9})})]})}function Hm({value:e,options:t,onChange:n,disabled:r}){let i=R(),[a,o]=(0,E.useState)(null),s=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Fh,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,F.jsx)(`span`,{children:Um(i,e)}),(0,F.jsx)(Ih,{children:(0,F.jsx)(oi,{size:11})})]}),a&&(0,Ea.createPortal)((0,F.jsx)(Lh,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,F.jsxs)(Rh,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,F.jsx)(`span`,{children:Um(i,t)}),t===e&&(0,F.jsx)(mi,{size:11})]},t))}),document.body)]})}function Um(e,t){return t===km?e(`System default`):Am[t]??t}function Wm({colors:e,current:t,onApply:n}){let r=R();if(e.length===0)return null;let[i,...a]=e;return(0,F.jsxs)(ch,{children:[(0,F.jsxs)(uh,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,F.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,F.jsx)(lh,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,F.jsx)(mi,{size:9})},e))]})}function Gm({title:e,note:t,global:n=!1}){let r=R();return(0,F.jsxs)(Ym,{children:[(0,F.jsxs)(`h2`,{children:[r(e),n&&(0,F.jsx)(im,{})]}),(0,F.jsx)(`p`,{children:r(t)})]})}var Km=i.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,qm=i.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Jm=i.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Ym=i.header`
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
`,Xm=i.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Zm=i.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Qm=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,$m=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,eh=i.button`
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
`,th=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nh=i.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,rh=i.button`
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
`,ih=i.button`
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
`,ah=i.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,oh=i.input`
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
`,sh=i.span`
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
`,ch=i.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,lh=i.button`
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
`,uh=i.button`
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
`,dh=i.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,fh=i.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ph=i.div`
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
`,mh=i.button`
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
`,hh=i.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function gh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var _h=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,vh=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,yh=i.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,bh=i.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,X=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Z=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,xh=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=i.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,Sh=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=i.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,Ch=i.span`
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
`,wh=i.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Th=i.input`
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
`,Eh=i.input`
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
`,Dh=i.button`
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
`,Oh=i.input`
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
`,kh=i.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Ah=i.button`
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
`,jh=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Mh=i.button`
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
`,Nh=i.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Ph=i.input`
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
`,Fh=i.button`
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
`,Ih=i.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Lh=i.div`
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
`,Rh=i.button`
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
`,zh=i.span`
    position: relative;
    display: inline-flex;
`,Bh=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Vh=i.button`
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
`,Hh=i.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Uh=i.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Wh=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Gh=i.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Kh=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,qh=i.button`
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
`,Jh=i.div`
    position: relative;
    width: 102px;
    height: 58px;
`,Yh=i.button`
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
`,Xh=i.span`
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
`,Zh=i.button`
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
`,Qh=i.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,$h=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,eg=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,tg=i.input`
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
`,ng=i.button`
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
`,rg=i.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,ig=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,ag=i.input`
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
`,og=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,sg=i.button`
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
`,cg=i.input`
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
`,lg=i.div`
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
`,ug=i.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,dg=i.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,fg=i.button`
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
`,pg=i.button`
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
`,mg=i.button`
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
`,hg=i.span`
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
`,gg=i.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,_g=i.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,vg=i.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,yg=150,bg=2500,xg=3,Sg=600;function Cg({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:o,onSearchMatches:s,onPick:c,onSelectionChange:l,onAddToTray:u,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,showDetails:g=!0,videoAudio:_=!1,videoAutoplay:y=!1}){let b=R(),x=bc(`gallery`),[S,ee]=(0,E.useState)([]),[C,te]=(0,E.useState)(0),[ne,w]=(0,E.useState)(!0),[T,re]=(0,E.useState)(null),[D,O]=(0,E.useState)(!1),[k,A]=(0,E.useState)([]),[j,M]=(0,E.useState)(()=>{let e=Pn(`yafm.preview.width`,320);return e>=220?e:320}),ie=(0,E.useRef)([]),ae=(0,E.useRef)(0),N=(0,E.useRef)(!1),oe=(0,E.useRef)(!0),se=(0,E.useRef)(0),P=(0,E.useRef)(null),I=(0,E.useRef)(0),ce=(0,E.useCallback)(async e=>{let t=++se.current;w(!0),oe.current=!0,re(null);try{let n=await Ie(0,yg,e);if(t!==se.current)return;ie.current=n.entries,ae.current=n.total,ee(n.entries),te(n.total)}catch(e){t===se.current&&re(e instanceof Error?e.message:String(e))}finally{t===se.current&&(oe.current=!1,w(!1))}},[]);(0,E.useEffect)(()=>{ce(!1)},[ce]);let le=(0,E.useCallback)(async()=>{if(oe.current||N.current||ie.current.length>=ae.current)return;let e=se.current;N.current=!0;try{let t=ie.current,n=ae.current;for(let r=0;r<xg&&t.length<n;r++){let r=await Ie(t.length,yg,!1);if(e!==se.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<yg)break}if(e!==se.current)return;ie.current=t,ae.current=n,(0,E.startTransition)(()=>{ee(t),te(n)})}catch{}finally{N.current=!1}},[]),L=(0,E.useCallback)(e=>{I.current||=window.requestAnimationFrame(()=>{I.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<bg&&le()})},[le]);(0,E.useEffect)(()=>{let e=P.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&le()},{root:e.parentElement,rootMargin:`${bg}px 0px`});return t.observe(e),()=>t.disconnect()},[le]),(0,E.useEffect)(()=>{if(S.length>=C)return;let e=window.setTimeout(()=>{let e=P.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<bg&&le()},200);return()=>window.clearTimeout(e)},[S.length,C,le]);let z=(0,E.useMemo)(()=>({path:``,parent:null,entries:S.map(wg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[S]),ue=(0,E.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),de=(0,E.useCallback)(e=>{c?c(e):U(e)},[c]),B=(0,E.useCallback)(e=>{let t=Tg(e.modified);return{id:t,label:t}},[]),fe=()=>{O(!0),ce(!0).finally(()=>O(!1))},V=S.length<C,pe=(0,E.useMemo)(()=>!o?.open||o.query.trim().length===0?[]:S.filter(e=>Cn(e.name,o)||Cn(e.path,o)),[S,o?.open,o?.query,o?.matchCase,o?.regex]),H=(0,E.useMemo)(()=>o?.open?{query:o.query,matchCase:o.matchCase,regex:o.regex,mode:o.mode,currentPath:pe[Math.min(o.index,Math.max(0,pe.length-1))]?.path??null}:hn,[o?.open,o?.query,o?.matchCase,o?.regex,o?.mode,o?.index,pe]);(0,E.useEffect)(()=>{s?.(pe.length)},[pe.length,s]);let me=(0,E.useCallback)(e=>{A(e),l?.(e)},[l]),he=e=>{M(e),Fn(`yafm.preview.width`,e)},ge=k.length>0?S.find(e=>e.path===k[0])??null:null,_e=ge?.name.includes(`.`)?ge.name.slice(ge.name.lastIndexOf(`.`)+1).toUpperCase():`—`,ve=ge&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(ge.name)?b(`Video`):b(`Picture`),ye=ge?ge.path.slice(0,Math.max(ge.path.lastIndexOf(`\\`),ge.path.lastIndexOf(`/`))):``,be=ge?{name:ge.name,path:ge.path,isDirectory:!1,size:ge.size,modified:ge.modified,fields:[{label:b(`Type`),value:ve},{label:b(`Extension`),value:_e},{label:b(`Location`),value:ye},{label:b(`Full path`),value:ge.path},{label:b(`Size`),value:d(ge.size)},{label:b(`Modified`),value:v(ge.modified)},{label:b(`Created`),value:`—`}]}:null;return(0,F.jsxs)(Eg,{children:[(0,F.jsxs)(kg,{children:[(0,F.jsxs)(jg,{children:[(0,F.jsx)(`span`,{children:b(`Gallery`)}),(0,F.jsx)(Mg,{children:ne?b(`scanning…`):b(`{shown} of {total} pictures`,{shown:S.length,total:C})})]}),(0,F.jsxs)(Ag,{children:[(0,F.jsx)(Ng,{onClick:fe,title:b(`Scan the folders again`),type:`button`,children:(0,F.jsx)(Pg,{$spinning:D,children:(0,F.jsx)(ni,{size:14})})}),x.available&&(0,F.jsx)(Ng,{onClick:e=>x.open(e.clientX,e.clientY),title:b(`Selection menu`),type:`button`,children:(0,F.jsx)(aa,{size:14})})]})]}),T&&(0,F.jsx)(Ig,{children:T}),!T&&!ne&&C===0&&(0,F.jsx)(Ig,{children:b(`No pictures found.`)}),!T&&(ne||C>0)&&(0,F.jsxs)(Dg,{children:[(0,F.jsx)(Og,{children:(0,F.jsx)(Oc,{confirmDelete:n,find:H,listing:ne&&S.length===0?null:z,loading:ne,error:null,view:ue,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:me,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:de,onOpenFile:de,onRefresh:fe,onAddToTray:u,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,groupOf:B,onGridScroll:L,gridFooter:(0,F.jsx)(Fg,{$space:V?Sg:1,ref:P}),allowBackgroundMenu:!1})}),g&&(0,F.jsx)(Ho,{emptyNote:b(`Nothing selected.`),info:be,onWidth:he,selectionNote:k.length>1?a(b,k.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:_,videoAutoplay:y,width:j})]})]})}function wg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function Tg(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(b(),{weekday:`long`}):t.toLocaleDateString(b(),{year:`numeric`,month:`long`,day:`numeric`})}var Eg=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Dg=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Og=i.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,kg=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,Ag=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,jg=i.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Mg=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Ng=i.button`
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
`,Pg=i.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,Fg=i.div`
    height: ${({$space:e})=>e}px;
`,Ig=i.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function Lg({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:f=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,E.useState)([]),v=R(),[y,b]=(0,E.useState)(null),x=jn();(0,E.useEffect)(()=>{Ke().then(e=>{b(e),g(_s(e).filter(e=>e.pinned))},()=>{b(null),g([])})},[c]);let S=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Ug(e.path,t));return{name:y?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??y?.placeIcons?.[t]??null}}),ee=o===`files`;return(0,F.jsxs)(Wg,{children:[(0,F.jsxs)(Gg,{children:[!f.includes(`home`)&&(0,F.jsxs)(Xg,{$active:o===`home`,onClick:e=>m(`home`,Ht(e)),title:v(`Overview`),type:`button`,children:[(0,F.jsx)(ji,{}),(0,F.jsx)(Qg,{children:v(`Overview`)})]}),!f.includes(`recycle`)&&(0,F.jsxs)(Xg,{$active:o===`recycle`,onClick:e=>m(`recycle`,Ht(e)),title:v(`Recycle Bin`),type:`button`,children:[(0,F.jsx)(pi,{}),(0,F.jsx)(Qg,{children:v(`Recycle Bin`)})]}),!f.includes(`gallery`)&&(0,F.jsxs)(Xg,{$active:o===`gallery`,onClick:e=>m(`gallery`,Ht(e)),title:v(`Gallery`),type:`button`,children:[(0,F.jsx)(yi,{}),(0,F.jsx)(Qg,{children:v(`Gallery`)})]})]}),h.map(e=>(0,F.jsxs)(qg,{children:[(0,F.jsxs)(Xg,{as:`div`,$active:!1,children:[(0,F.jsx)(Zg,{children:(0,F.jsx)(ys,{panel:e,size:16})}),(0,F.jsx)(Qg,{children:v(e.title)})]}),(0,F.jsx)(Jg,{children:(0,F.jsxs)(Yg,{children:[e.kind===`quick`&&S(e).map(e=>(0,F.jsxs)(Xg,{$active:ee&&Ug(a,e.path),onClick:t=>p(e.path,Ht(t)),title:e.path,type:`button`,children:[(0,F.jsx)(bs,{place:e}),(0,F.jsx)(Qg,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let t=Mn(x,e.path);return(0,F.jsxs)(Xg,{$active:ee&&Ug(a,e.path),onClick:t=>e.isDirectory?p(e.path,Ht(t)):void U(e.path),title:e.path,type:`button`,children:[t&&x.useIcons?(0,F.jsx)(bs,{place:t}):(0,F.jsx)(Rs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,F.jsx)(Qg,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,F.jsx)(Bg,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,F.jsxs)(Xg,{$active:ee&&Ug(a,e.name),onClick:t=>p(e.name,Ht(t)),title:e.name,type:`button`,children:[(0,F.jsx)($r,{}),(0,F.jsxs)(Qg,{children:[u(e),(0,F.jsxs)($g,{children:[d(e.freeSpace),` free`]}),(0,F.jsx)(e_,{children:(0,F.jsx)(t_,{$used:n,$tone:t(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,F.jsx)(Vg,{onNavigate:p,path:e.path||s})]})})]},e.id)),!f.includes(`settings`)&&(0,F.jsx)(Kg,{children:(0,F.jsxs)(Xg,{$active:o===`settings`,onClick:e=>m(`settings`,Ht(e)),title:v(`Settings`),type:`button`,children:[(0,F.jsx)(si,{}),(0,F.jsx)(Qg,{children:v(`Settings`)})]})})]})}var Rg=10,zg=40;function Bg({historyVersion:e=0,onNavigate:t}){let n=R(),[r,i]=(0,E.useState)(null),o=jn();return(0,E.useEffect)(()=>{Re().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Mn(o,e.path);return(0,F.jsxs)(Xg,{$active:!1,onClick:n=>t(e.path,Ht(n)),title:a(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&o.useIcons?(0,F.jsx)(bs,{place:r}):(0,F.jsx)(Rs,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,F.jsx)(Qg,{children:r?.name||e.name})]},e.path)})}function Vg({path:e,onNavigate:t}){let[n,r]=(0,E.useState)(null);(0,E.useEffect)(()=>{e&&(r(null),ye(e,!1).then(r,()=>r(null)))},[e]),(0,E.useEffect)(()=>{if(e&&P.available)return P.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&Ug(n.data.path,e)&&ye(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,Rg),o=i.filter(e=>!e.isDirectory).slice(0,zg);return(0,F.jsxs)(F.Fragment,{children:[a.map(e=>(0,F.jsx)(Hg,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,F.jsx)(Hg,{entry:e,onNavigate:t},e.fullPath))]})}function Hg({entry:e,onNavigate:t}){let n=jn(),r=Mn(n,e.fullPath);return(0,F.jsxs)(Xg,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Ht(n)):void U(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,F.jsx)(bs,{place:r}):(0,F.jsx)(Rs,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,F.jsx)(Qg,{children:r?.name||e.name})]})}function Ug(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var Wg=i.aside`
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

    &:not(:hover) ${()=>$g},
    &:not(:hover) ${()=>e_} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Gg=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Kg=i(Gg)`
    margin-top: auto;
`,qg=i.div`
    display: flex;
    flex-direction: column;
`,Jg=i.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Wg}:hover ${qg}:hover > & {
        grid-template-rows: 1fr;
    }
`,Yg=i.div`
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
`,Xg=i.button`
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
`,Zg=i.span`
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
`,Qg=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$g=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,e_=i.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,t_=i.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,n_=i.span`
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
`;function r_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=R(),o=(0,E.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,E.useEffect)(()=>{if(!n)return;let e=e=>{o.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,F.jsxs)(a_,{ref:o,children:[(0,F.jsxs)(o_,{$active:n,onClick:()=>r(!n),title:s>0?a(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,F.jsx)(fi,{size:13}),c>0&&(0,F.jsx)(n_,{children:c>9?`9+`:c})]}),n&&(0,F.jsxs)(s_,{children:[(0,F.jsxs)(c_,{children:[(0,F.jsx)(l_,{children:i(`Status center`)}),(0,F.jsxs)(u_,{children:[(0,F.jsx)(d_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,F.jsx)(f_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,F.jsx)(hi,{size:10})})]})]}),e.length===0?(0,F.jsx)(m_,{children:i(`No operations yet.`)}):(0,F.jsx)(p_,{children:e.map(e=>(0,F.jsx)(i_,{task:e},e.id))})]})]})}function i_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,F.jsxs)(h_,{children:[(0,F.jsxs)(g_,{children:[(0,F.jsx)(__,{$state:e.state,children:e.state===`done`?(0,F.jsx)(mi,{size:10}):e.state===`failed`?(0,F.jsx)(hi,{size:10}):(0,F.jsx)(v_,{})}),(0,F.jsx)(y_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,F.jsxs)(b_,{children:[d(e.bytesDone),` / `,d(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,F.jsxs)(b_,{children:[e.done,` / `,e.total]})]}),i&&(0,F.jsx)(x_,{children:(0,F.jsx)(S_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,F.jsx)(C_,{children:e.error})]})}var a_=i.div`
    position: relative;
    display: flex;
`,o_=i.button`
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
`,s_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Da}
    ${Ba}
`,c_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,l_=i.span`
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
`,u_=i.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,d_=i.button`
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
`,f_=i.button`
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
`,p_=i.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,m_=i.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,h_=i.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;
    ${Va}

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,g_=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,__=i.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,v_=i.span`
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
`,y_=i.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,b_=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,x_=i.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,S_=i.div`
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
`,C_=i.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function w_(){return P.available?(await P.request(`fs.history.list`)).entries:[]}async function T_(e){return P.available?(await P.request(`fs.history.undoTo`,{id:e})).ok:!1}function E_(){let e=R(),[t,n]=(0,E.useState)(!1),[r,i]=(0,E.useState)([]),[a,o]=(0,E.useState)(!1),s=(0,E.useRef)(null),c=()=>void w_().then(i,()=>i([]));(0,E.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await T_(e),c()}finally{o(!1)}};return(0,F.jsxs)(k_,{ref:s,children:[(0,F.jsx)(A_,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,F.jsx)(di,{size:14})}),t&&(0,F.jsxs)(j_,{children:[(0,F.jsxs)(M_,{children:[(0,F.jsx)(N_,{children:e(`History`)}),(0,F.jsx)(P_,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,F.jsx)(hi,{size:10})})]}),r.length===0?(0,F.jsx)(U_,{children:e(`No operations yet.`)}):(0,F.jsx)(F_,{children:r.map(t=>(0,F.jsxs)(I_,{children:[(0,F.jsxs)(L_,{children:[(0,F.jsxs)(R_,{children:[(0,F.jsx)(O_,{label:t.label}),D_(e,t.label)]}),(0,F.jsx)(z_,{children:x(t.at)})]}),t.paths.length>0&&(0,F.jsxs)(B_,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,F.jsx)(V_,{children:(0,F.jsx)(H_,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function D_(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function O_({label:e}){return e.startsWith(`Delete`)?(0,F.jsx)(pi,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,F.jsx)(Qi,{size:13}):e.startsWith(`Rename`)?(0,F.jsx)(Mi,{size:13}):e.startsWith(`Compress`)?(0,F.jsx)(Si,{size:13}):e.startsWith(`New`)?(0,F.jsx)(ri,{size:13}):(0,F.jsx)(ai,{size:13})}var k_=i.div`
    position: relative;
    display: flex;
`,A_=i.button`
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
`,j_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Da}
    ${Ba}
`,M_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,N_=i.span`
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
`,P_=i.button`
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
`,F_=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,I_=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,L_=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,R_=i.span`
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
`,z_=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,B_=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,V_=i.div`
    display: flex;
    justify-content: flex-end;
`,H_=i.button`
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
`,U_=i.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function W_({currentFolder:e}){let t=R(),[n,r]=(0,E.useState)(!1),[i,a]=(0,E.useState)(null),[o,s]=(0,E.useState)(!1),c=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!n)return;let e=()=>void ud().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{c.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,i),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i)}},[n]),(0,E.useEffect)(()=>{let e=()=>void ud().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let l=async e=>{s(!0);try{a(await e())}finally{s(!1)}},u=i?.shares.some(t=>t.path.replace(/[\\/]+$/,``).toLowerCase()===e.replace(/[\\/]+$/,``).toLowerCase())??!1;return(0,F.jsxs)(G_,{ref:c,children:[(0,F.jsxs)(K_,{$active:n,onClick:()=>r(e=>!e),title:t(`Share folders`),type:`button`,children:[(0,F.jsx)(Ki,{size:15}),i&&i.shares.length>0&&(0,F.jsx)(n_,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,F.jsxs)(q_,{children:[(0,F.jsxs)(J_,{children:[(0,F.jsx)(Y_,{children:t(`Share`)}),(0,F.jsx)(X_,{onClick:()=>r(!1),title:t(`Close`),type:`button`,children:(0,F.jsx)(hi,{size:10})})]}),(0,F.jsxs)(Z_,{children:[(0,F.jsxs)(Q_,{children:[(0,F.jsx)(gi,{size:15}),(0,F.jsxs)(`span`,{children:[(0,F.jsx)(`strong`,{children:i?.deviceName||t(`This device`)}),(0,F.jsx)($_,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,F.jsx)(ev,{children:t(`No folders are shared yet.`)}),i?.shares.map(e=>(0,F.jsxs)(tv,{children:[(0,F.jsxs)(nv,{children:[(0,F.jsx)(rv,{title:e.path,children:e.name}),(0,F.jsx)(av,{disabled:o,onClick:()=>void l(()=>fd(e.id)),title:t(`Stop sharing`),type:`button`,children:(0,F.jsx)(hi,{size:10})})]}),(0,F.jsx)(iv,{title:e.path,children:e.path}),(0,F.jsxs)(ov,{children:[(0,F.jsxs)(sv,{$active:e.mode===`client`,onClick:()=>void l(()=>pd(e.id,`client`)),title:t(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,F.jsx)(gi,{size:11}),t(`App`)]}),(0,F.jsxs)(sv,{$active:e.mode===`web`,onClick:()=>void l(()=>pd(e.id,`web`)),title:t(`Any device with a browser can open this folder.`),type:`button`,children:[(0,F.jsx)(Ji,{size:11}),t(`Web`)]})]})]},e.id)),(0,F.jsxs)(cv,{disabled:o||e.length===0||u,onClick:()=>void l(()=>dd(e,`client`)),title:u?t(`This folder is already shared.`):e,type:`button`,children:[(0,F.jsx)(ri,{size:12}),t(`Share this folder`)]}),i?.webRunning&&(0,F.jsxs)(lv,{children:[(0,F.jsxs)(uv,{children:[(0,F.jsx)(Ji,{size:12}),t(`Browser access`)]}),i.urls.map(e=>(0,F.jsx)(dv,{onClick:()=>void ot(e),type:`button`,children:e},e)),(0,F.jsx)($_,{children:t(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var G_=i.div`
    position: relative;
    display: flex;
`,K_=i.button`
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
`,q_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Da}
    ${Ba}
`,J_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Y_=i.span`
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
`,X_=i.button`
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
`,Z_=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,Q_=i.div`
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
`,$_=i.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,ev=i.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,tv=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,nv=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,rv=i.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,iv=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,av=i.button`
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
`,ov=i.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,sv=i.button`
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
`,cv=i.button`
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
`,lv=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,uv=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,dv=i.button`
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
`;function fv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=R(),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,E.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Tc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,F.jsxs)(pv,{ref:l,children:[(0,F.jsx)(mv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,F.jsx)(ui,{size:14}):(0,F.jsx)(li,{size:14})}),s&&(0,F.jsxs)(hv,{children:[(0,F.jsx)(gv,{children:o(`View`)}),(0,F.jsxs)(_v,{children:[(0,F.jsxs)(vv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,F.jsx)(li,{size:12}),` `,o(`List`)]}),(0,F.jsxs)(vv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,F.jsx)(ui,{size:12}),` `,o(`Grid`)]})]}),(0,F.jsx)(gv,{children:o(`List icon size`)}),(0,F.jsxs)(yv,{children:[(0,F.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,F.jsxs)(bv,{children:[e.iconSize,`px`]})]}),(0,F.jsx)(gv,{children:o(`Grid size`)}),(0,F.jsxs)(yv,{children:[(0,F.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,F.jsxs)(bv,{children:[e.gridSize,`px`]})]}),(0,F.jsxs)(gv,{children:[o(`Columns`),(0,F.jsx)(im,{})]}),Tc.map(e=>(0,F.jsxs)(xv,{children:[(0,F.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,F.jsxs)(xv,{children:[(0,F.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,F.jsxs)(gv,{children:[o(`Preview panel`),(0,F.jsx)(im,{})]}),(0,F.jsxs)(xv,{children:[(0,F.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var pv=i.div`
    position: relative;
    display: flex;
    height: 100%;
`,mv=i.button`
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
`,hv=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Da}
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
`,gv=i.div`
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
`,_v=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,vv=i.button`
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
`,yv=i.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,bv=i.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,xv=i.label`
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
`,Sv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Cv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),wv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Tv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,F.jsx)(`path`,{d:`M2 5h6`})}),Ev=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,F.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Dv=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,F.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,F.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Ov({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:ee,onToggleDetails:C,shortcuts:te,currentFolder:ne}){let w=R(),T=de(),re=B(),[D,O]=(0,E.useState)({left:!1,right:!1}),[k,A]=(0,E.useState)(null),[j,M]=(0,E.useState)(null),ie=(0,E.useRef)(null),ae=(0,E.useRef)(null),N=(0,E.useRef)(null),oe=(0,E.useCallback)(()=>{let e=ae.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;O(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,E.useEffect)(()=>{oe();let e=ae.current;if(!e)return;let t=new ResizeObserver(oe);return t.observe(e),()=>t.disconnect()},[oe,e.length]),(0,E.useEffect)(()=>()=>{ie.current&&window.clearTimeout(ie.current.timer)},[]),(0,E.useEffect)(()=>{N.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let se=e=>ae.current?.scrollBy({left:e,behavior:`smooth`}),P=()=>{ie.current&&window.clearTimeout(ie.current.timer),ie.current=null,M(null)};return(0,F.jsxs)(Mv,{children:[(0,F.jsx)(Nv,{children:(0,F.jsx)(gi,{size:19})}),(0,F.jsxs)(Pv,{children:[D.left&&(0,F.jsx)(Iv,{onClick:()=>se(-180),title:w(`Scroll tabs left`),type:`button`,children:(0,F.jsx)(Sv,{})}),(0,F.jsx)(Fv,{onScroll:oe,onWheel:e=>{let t=ae.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:ae,children:e.map(e=>(0,F.jsxs)(Lv,{$active:e.id===t,$dragging:k===e.id,$dropTarget:j===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Vs(t.dataTransfer)||!kv(e)||(t.preventDefault(),ie.current?.id===e.id))return;P(),M(e.id);let r=window.setTimeout(()=>{n(e.id),ie.current=null},500);ie.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ie.current?.id===e.id||j===e.id)&&P()},onDragEnd:()=>{A(null),P()},onDragOver:t=>{(k||Vs(t.dataTransfer)&&kv(e))&&(t.preventDefault(),Vs(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>A(e.id),onDrop:t=>{if(t.preventDefault(),k)a(k,e.id);else if(kv(e)&&Vs(t.dataTransfer)){let{paths:r,move:i}=Hs(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}A(null),P()},onClick:()=>n(e.id),ref:e.id===t?N:void 0,title:e.path||e.title,type:`button`,children:[(0,F.jsx)(Av,{tab:e}),(0,F.jsx)(Rv,{children:e.title}),e.partner&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(zv,{children:`|`}),(0,F.jsx)(jv,{place:e.partner.place}),(0,F.jsx)(Rv,{children:e.partner.title})]}),(0,F.jsx)(Bv,{"data-shortcut":Wt(te.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:w(`Close tab`),children:(0,F.jsx)(wv,{})})]},e.id))}),D.right&&(0,F.jsx)(Iv,{onClick:()=>se(180),title:w(`Scroll tabs right`),type:`button`,children:(0,F.jsx)(Cv,{})}),(0,F.jsx)(Vv,{"data-shortcut":Wt(te.newTab),onClick:i,title:w(`New tab`),type:`button`,children:(0,F.jsx)(ri,{size:13})})]}),(0,F.jsx)(Hv,{...re}),(0,F.jsxs)(Uv,{children:[(0,F.jsx)(Gv,{$active:y,"data-shortcut":Wt(te.splitView),disabled:!b,onClick:x,title:w(y?`Close split view`:`Split view`),type:`button`,children:(0,F.jsx)(ra,{size:15})}),(0,F.jsx)(Gv,{$active:S,disabled:!ee,onClick:C,title:w(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,F.jsx)(ia,{size:15})}),(0,F.jsxs)(Wv,{$active:_,onClick:v,title:w(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,F.jsx)(qi,{size:14}),g>0&&(0,F.jsx)(n_,{children:g>9?`9+`:g})]}),(0,F.jsx)(E_,{}),(0,F.jsx)(W_,{currentFolder:ne}),(0,F.jsx)(r_,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,F.jsx)(fv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,F.jsx)(Kv,{onClick:T.minimize,title:w(`Minimize`),type:`button`,children:(0,F.jsx)(Tv,{})}),(0,F.jsx)(Kv,{onClick:T.toggleMaximize,title:T.maximized?w(`Restore`):w(`Maximize`),type:`button`,children:T.maximized?(0,F.jsx)(Dv,{}):(0,F.jsx)(Ev,{})}),(0,F.jsx)(qv,{onClick:T.close,title:w(`Close`),type:`button`,children:(0,F.jsx)(wv,{})})]})]})}function kv(e){return e.kind===`files`&&(!f(e.path)||re(e.path))}function Av({tab:e}){switch(e.kind){case`home`:return(0,F.jsx)(Xr,{size:13});case`settings`:return(0,F.jsx)(si,{size:13});case`recycle`:return(0,F.jsx)(pi,{size:13});default:return e.archive?(0,F.jsx)(Si,{size:13}):(0,F.jsx)(jv,{place:e.place})}}function jv({place:e}){return e?(0,F.jsx)(bs,{place:e,size:13}):(0,F.jsx)(Zr,{size:13})}var Mv=i.header`
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
`,Nv=i.span`
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
`,Pv=i.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Fv=i.div`
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
`,Iv=i.button`
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
`,Lv=i.button`
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
`,Rv=i.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zv=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Bv=i.span`
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
`,Vv=i.button`
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
`,Hv=i.div`
    flex: 1;
    min-width: 28px;
`,Uv=i.div`
    display: flex;
    flex-shrink: 0;
`,Wv=i.button`
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
`,Gv=i.button`
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
`,Kv=i.button`
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
`,qv=i(Kv)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Jv(){let[e,t]=(0,E.useState)(null),n=(0,E.useRef)(null),r=(0,E.useRef)(void 0);return(0,E.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Ea.createPortal)((0,F.jsx)(Yv,{tooltip:e}),document.body):null}function Yv({tooltip:e}){let t=(0,E.useRef)(null),[n,r]=(0,E.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,E.useState)(()=>e.bottom+6);return(0,E.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,F.jsxs)(Xv,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,F.jsx)(Zv,{children:e.text}),e.shortcut&&(0,F.jsx)(Qv,{children:e.shortcut})]})}var Xv=i.div`
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
    ${Va}
`,Zv=i.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Qv=i.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,$v={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function ey({deviceName:e,code:t,onAccept:n,onReject:r}){let i=R(),a=(0,E.useRef)(null);return(0,E.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Ea.createPortal)((0,F.jsx)(ty,{children:(0,F.jsxs)(ny,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsxs)(ry,{children:[(0,F.jsx)(Ki,{size:15}),i(`Pair for sharing`)]}),(0,F.jsx)(iy,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,F.jsx)(ay,{children:t}),(0,F.jsx)(oy,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,F.jsxs)(sy,{children:[(0,F.jsx)(cy,{onClick:r,type:`button`,children:i(`Reject`)}),(0,F.jsx)(ly,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var ty=i.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Va}
`,ny=i.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Ia}
`,ry=i.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,iy=i.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,ay=i.div`
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
`,oy=i.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,sy=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,cy=i.button`
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
`,ly=i(cy)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,uy=`yafm://`,dy={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},fy=0,py=new Set;function my(e){py.add(e),P.send({type:`app.navigate.done`,payload:{path:e}})}var hy=20,gy=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function _y(e){return`${uy}${e===`home`?`overview`:e}`}function vy(e){return e.toLowerCase().startsWith(uy)?dy[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function yy(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(uy))return t;let n=dy[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?_y(n):null}function by(e){return e.history[e.index]??_y(`home`)}function xy(e){return vy(by(e))??`files`}function Sy(e){let t=by(e);return vy(t)?``:e.listing?.path||t}function Cy(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||xy(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function wy(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Ty(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||ge.iconSize,gridSize:e.view?.gridSize||t.gridSize||ge.gridSize,sort:e.view?.sort??ge.sort,sortDescending:e.view?.sortDescending??ge.sortDescending,columns:t.columns??_e.columns??[]}}function Ey(e=_y(`home`)){return fy+=1,{id:`tab-${fy}`,listing:null,loading:!vy(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Dy(e){return e instanceof Error?e.message:String(e)}function Oy(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function ky(e){let t=bd(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return xd(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Ay(e){let t=_(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function jy(e){return f(e)?Yt(e):void 0}function My(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return a(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:d(n)})}function Ny(){let e=R(),[t,n]=(0,E.useState)(()=>[Ey()]),[r,i]=(0,E.useState)(()=>t[0].id),[a,o]=(0,E.useState)(null),[u,d]=(0,E.useState)(()=>{let e=Pn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,E.useState)([]),[h,g]=(0,E.useState)([]),[v,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(null),[C,te]=(0,E.useState)(null),ne=fe(),[w,T]=(0,E.useState)(mn),[D,O]=(0,E.useState)(0),[k,A]=(0,E.useState)(0),[j,M]=(0,E.useState)(mn),[ie,ae]=(0,E.useState)(0),[N,oe]=(0,E.useState)(0),[se,I]=(0,E.useState)(0),[ce,le]=(0,E.useState)(0),L=(0,E.useRef)(ce);L.current=ce;let[z,ue]=(0,E.useState)([]),[de,B]=(0,E.useState)(10),[V,H]=(0,E.useState)(null),he=(0,E.useMemo)(()=>(V?.favorites??[]).map(e=>c(e.path)),[V?.favorites]),[ve,Ce]=(0,E.useState)(0),[W,ke]=(0,E.useState)(zt),[Ae,je]=(0,E.useState)(0),[Me,Ne]=(0,E.useState)(0),[Pe,Fe]=(0,E.useState)(0),[Ie,Re]=(0,E.useState)(!0),[Be,Ve]=(0,E.useState)(()=>{let e=Pn(`yafm.preview.width`,320);return e>=220?e:320}),[He,We]=(0,E.useState)(null),[Ge,qe]=(0,E.useState)(null),[Je,Ye]=(0,E.useState)(`primary`),[Xe,Ze]=(0,E.useState)(null),[Qe,tt]=(0,E.useState)(null),[nt,at]=(0,E.useState)(null),[ot,st]=(0,E.useState)(null),[ct,lt]=(0,E.useState)({primary:0,secondary:0}),[ut,dt]=(0,E.useState)({primary:null,secondary:null}),[ft,pt]=(0,E.useState)(null),[ht,xt]=(0,E.useState)([]),[Ct,wt]=(0,E.useState)(!1),Tt=(0,E.useRef)([]),Dt=(0,E.useRef)([]),[Ot,kt]=(0,E.useState)([]),[At,jt]=(0,E.useState)(!1),[Pt,G]=(0,E.useState)(!1),[Ft,Bt]=(0,E.useState)([]),[Gt,qt]=(0,E.useState)(null),Jt=(0,E.useRef)(0),[$t,K]=(0,E.useState)(()=>{let e=In(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?wy({x:e.x,y:e.y}):wy({x:Math.max(20,window.innerWidth-340),y:110})}),en=(0,E.useCallback)(()=>{K(e=>wy(e)),G(!0)},[]),q=t.find(e=>e.id===r)??t[0],J=xy(q),nn=by(q),rn=Sy(q),an=J===`files`?q.listing?.parent??ky(rn):null,on=q.splitWith?t.find(e=>e.id===q.splitWith):void 0,sn=J===`files`&&on!==void 0,cn=on?Sy(on):``,ln=on?on.listing?.parent??ky(cn):null,un=sn&&on&&Je===`secondary`?on:q,dn=V?.defaultView??_e,fn=Ty(un,dn);(0,E.useEffect)(()=>{S(V?.accentColor,V?.secondaryColor)},[V?.accentColor,V?.secondaryColor]),(0,E.useEffect)(()=>{cm(V?.fonts)},[V?.fonts]),(0,E.useEffect)(()=>{ee(V?.timeFormat,V?.timeFormatPattern)},[V?.timeFormat,V?.timeFormatPattern]),(0,E.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!V?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[V?.backgroundSource]),(0,E.useEffect)(()=>(me(e=>new Promise(t=>{qt({id:++Jt.current,prompt:e,resolve:t})})),()=>me(null)),[]),(0,E.useEffect)(()=>{Ye(`primary`)},[r]),(0,E.useEffect)(()=>{M(mn),oe(0),I(0)},[J]),(0,E.useEffect)(()=>{oe(0)},[j.query,j.matchCase,j.regex]),(0,E.useEffect)(()=>{oe(e=>se===0?0:Math.min(e,se-1))},[se]);let pn=fn.columns.includes(`linkCount`),hn=(0,E.useMemo)(()=>{let e={},t=_s(V),n={};for(let[e,t]of Object.entries(V?.placeNames??{}))n[c(e)]=t;for(let t of p)e[c(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=c(t),i=p.find(e=>c(e.path)===r);e[r]={name:n[r]??i?.name??(_(t)||t),path:t,kind:`folder`,icon:i?.icon??V?.placeIcons?.[t]??null}}return e},[p,V]),gn=(0,E.useMemo)(()=>({places:hn,useIcons:V?.systemIcons===!1}),[hn,V?.systemIcons]),_n=V?.defaultView?.showImages??!0,vn=V?.defaultView?.imageStripHeight??_e.imageStripHeight,yn=J===`home`?(0,F.jsx)(ji,{size:13}):J===`settings`?(0,F.jsx)(si,{size:13}):J===`recycle`?(0,F.jsx)(pi,{size:13}):J===`gallery`?(0,F.jsx)(yi,{size:13}):void 0,bn=w.open&&w.query.length>0,xn=(0,E.useMemo)(()=>bn&&un.listing?un.listing.entries.filter(e=>Cn(e.isDirectory?Nn(gn,e.fullPath,e.name):e.name,w)).map(e=>e.fullPath):[],[bn,w,un.listing,gn]);(0,E.useEffect)(()=>{O(0)},[w.query,w.matchCase,w.regex,un.listing?.path]);let Sn=xn.length===0?-1:Math.min(D,xn.length-1),wn=(0,E.useCallback)(()=>{T(e=>({...e,open:!1,query:``})),O(0)},[]),Tn=(0,E.useCallback)(()=>{T(e=>({...e,open:!0})),A(e=>e+1)},[]),En=(0,E.useCallback)(()=>{M(e=>({...e,open:!0})),ae(e=>e+1)},[]),Dn=(0,E.useCallback)(()=>{M(mn),oe(0),I(0)},[]),On=(0,E.useCallback)(e=>{oe(t=>se===0?0:(Math.min(t,se-1)+e+se)%se)},[se]),kn=(0,E.useCallback)(e=>{T(t=>({...t,open:!0,query:t.open?t.query+e:e})),A(e=>e+1)},[]),jn=(0,E.useCallback)(e=>{O(t=>xn.length===0?0:(Math.min(t,xn.length-1)+e+xn.length)%xn.length)},[xn.length]),Rn=(0,E.useRef)({tabs:t,activeId:r,activePane:Je});Rn.current={tabs:t,activeId:r,activePane:Je};let zn=(0,E.useRef)(V);zn.current=V;let Bn=(0,E.useRef)(!1),Vn=(0,E.useRef)([]),Hn=(0,E.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Un=(0,E.useRef)(new Map),Wn=(0,E.useCallback)(e=>{let t=(Un.current.get(e)??0)+1;return Un.current.set(e,t),()=>Un.current.get(e)===t},[]),Gn=(0,E.useCallback)(async(e,t,n)=>{if(!(t&&yd(t)))try{let r=await Ee(t,pn);if(!n()||!r.listing)return;Hn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[pn,Hn]),Kn=(0,E.useCallback)(async(e,t,n=!1)=>{let r=Wn(e);wn();let i=!n||!Rn.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;Hn(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&Oy(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&Gn(e,t,r);let o=t&&yd(t)?await Sd(t):await ye(t,!0,pn,L.current,t?jy(t):void 0);if(!r())return;Hn(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!yd(o.path)&&ze(o.path).then(()=>Ce(e=>e+1))}catch(i){if(!r())return;let a=Rn.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Sy(a):``,s=ky(o),c=Dy(i);if(o&&Qt(c)){let i=l(o),a=await ga(i,!!Yt(i));if(a){Xt(i,a),r()&&Kn(e,t,n);return}}Hn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Wn,pn,Hn,wn,Gn]),qn=(0,E.useCallback)((e,t)=>{let n=yy(t);n&&(vy(n)?(wn(),Wn(e),Hn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Kn(e,n))},[Wn,Kn,Hn,wn]),Jn=(0,E.useCallback)(async(e,t,n)=>{if(wn(),vy(t)){Wn(e),Hn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Wn(e);Hn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(yd(t)||await Gn(e,t,r),!r())return;let n=yd(t)?await Sd(t):await ye(t,!0,pn,L.current,jy(t));if(!r())return;Hn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(Qt(Dy(i))){let i=l(t),a=await ga(i,!!Yt(i));if(a){Xt(i,a),r()&&Jn(e,t,n);return}}Hn(e,()=>({listing:{path:t,parent:ky(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Dy(i)}))}},[Wn,pn,Hn,wn,Gn]),Yn=(0,E.useCallback)((e,t=!0)=>{let r=Ey(e??_y(`home`));return n(e=>[...e,r]),t&&i(r.id),e&&!vy(e)&&Kn(r.id,e),r.id},[Kn]),Xn=(0,E.useCallback)(e=>{for(let t of Rn.current.tabs)xy(t)===`files`&&Oy(Sy(t),e)&&Kn(t.id,e,!0)},[Kn]),Zn=(0,E.useCallback)((e,t)=>{let n=_(t);for(let r of Rn.current.tabs)r.listing?.entries.some(t=>Oy(t.fullPath,e))&&Hn(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>Oy(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[Hn]),Qn=(0,E.useRef)([]);(0,E.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&f(t)&&e.add(c(l(t)))}let n=Qn.current.filter(t=>!e.has(t));Qn.current=[...e],n.length>0&&Se(n)},[t]);let $n=(0,E.useCallback)((e,t=!1)=>{t?Yn(_y(e)):qn(Rn.current.activeId,_y(e))},[Yn,qn]),er=(0,E.useCallback)(e=>{let{tabs:t,activeId:r}=Rn.current,a=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==a?.splitWith);if(a&&!a.hidden&&(Dt.current.push(by(a)),Dt.current.length>hy&&Dt.current.shift()),o.length===0){let e=Ey();n([e]),i(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&i(o[Math.min(s,o.length-1)].id)},[]),tr=(0,E.useCallback)(()=>{let e=Dt.current.pop();if(!e)return;let t={...Ey(e),fresh:!1};n(e=>[...e,t]),i(t.id),xy(t)===`files`&&Kn(t.id,Sy(t))},[Kn]),nr=(0,E.useCallback)((e,t=!1)=>{t?Yn(e):qn(Cy(Rn.current),e??_y(`home`))},[qn,Yn]),rr=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Rn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let a=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;i(r[a].id)},[]),ir=(0,E.useCallback)(()=>{let{tabs:e,activeId:t}=Rn.current,r=e.find(e=>e.id===t);if(!r||xy(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),Hn(t,()=>({splitWith:void 0})),Ye(`primary`);return}let a=Sy(r),o={...Ey(a),hidden:!0};n(e=>[...e,o]),Hn(t,()=>({splitWith:o.id})),Kn(o.id,a),Ye(`primary`)},[Kn,Hn]),ar=(0,E.useCallback)(e=>{Ve(e),Fn(`yafm.preview.width`,e)},[]),or=sn?Je===`secondary`?Ge??He:He??Ge:He,sr=(0,E.useRef)(null),cr=e=>{e.preventDefault();let t=sr.current?.getBoundingClientRect();if(!t)return;let n=Ie?Be:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);d(n),Fn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},lr=(e,t,n)=>{t&&Ze({x:e.clientX,y:e.clientY,directory:t,refresh:n})},ur=(0,E.useCallback)((e,t)=>{lt(n=>n[e]===t?n:{...n,[e]:t})},[]),dr=(0,E.useCallback)(e=>ur(`primary`,e),[ur]),fr=(0,E.useCallback)(e=>ur(`secondary`,e),[ur]),pr=(e,t)=>{ct[e]!==0&&dt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},mr=async(e,t=!1)=>{let n=Xe;if(Ze(null),!n)return;let r=e===null?await St(n.directory,t):await Et(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;wn(),pt(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},hr=(0,E.useCallback)(()=>{let{tabs:e}=Rn.current,t=e.find(e=>e.id===Cy(Rn.current));t&&t.index>0&&Jn(t.id,t.history[t.index-1],t.index-1)},[Jn]),gr=(0,E.useCallback)(()=>{let{tabs:e}=Rn.current,t=e.find(e=>e.id===Cy(Rn.current));t&&t.index<t.history.length-1&&Jn(t.id,t.history[t.index+1],t.index+1)},[Jn]),_r=(0,E.useCallback)(()=>{let{tabs:e}=Rn.current,t=e.find(e=>e.id===Cy(Rn.current));t&&xy(t)===`files`&&t.listing?.parent&&nr(t.listing.parent)},[nr]),vr=(0,E.useRef)(null),yr=(0,E.useCallback)(()=>{for(let e of Rn.current.tabs)e.listing&&Kn(e.id,e.listing.path,!0)},[Kn]),br=(0,E.useCallback)(e=>{e.length!==0&&(Bt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),en())},[en]),xr=(0,E.useCallback)(async e=>{let t=await vt(e);t.length!==0&&br(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[br]),Sr=(0,E.useCallback)(e=>{let t=new Set(e);Bt(e=>e.filter(e=>!t.has(e.path)))},[]),Cr=(0,E.useCallback)(async e=>{let t=zn.current;if(!t)return;let n=await vt(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>c(e.path))),i=n.filter(e=>!r.has(c(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};H(a),await $e(a),je(e=>e+1)},[]),wr=(0,E.useCallback)(async e=>{let t=zn.current;if(!t)return;let n=new Set(e.map(c)),r=(t.favorites??[]).filter(e=>!n.has(c(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};H(i),await $e(i),je(e=>e+1)},[]),Tr=(0,E.useCallback)(()=>Bt([]),[]),Er=(0,E.useRef)(-1),Dr=(0,E.useCallback)(e=>{kt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),jt(e.move),e.entries.length>0&&en()},[en]),Or=(0,E.useCallback)(async()=>{if(P.available)try{let e=await gt();Er.current=e.sequence,Dr(e)}catch{}},[Dr]),kr=(0,E.useCallback)(async e=>{e.length!==0&&await mt(e,!1)&&await Or()},[Or]),Ar=(0,E.useRef)(Ft);Ar.current=Ft,(0,E.useEffect)(()=>{let e=e=>{Vs(e.dataTransfer)&&en()},t=e=>{Vs(e.dataTransfer)&&en()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[en]),(0,E.useEffect)(()=>{let e=()=>K(e=>wy(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let jr=(0,E.useCallback)(async()=>{let e=Ar.current;if(e.length>0){let t=await vt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Bt(e=>e.filter(e=>n.has(e.path)))}await Or()},[Or]),Mr=(0,E.useCallback)(()=>{jr(),Fe(e=>e+1),yr()},[jr,yr]),Nr=(0,E.useCallback)(e=>{let t=wy(e);K(t),Ln(`yafm.tray.position`,t)},[]),Pr=(0,E.useCallback)(()=>{Pt?G(!1):en()},[en,Pt]),Fr=(0,E.useCallback)(async(t,n,r)=>{let i=await _t(t,n,r);i.ok?(r&&Sr(t),Fe(e=>e+1),yr(),Or()):ma(i.error??e(`The files could not be transferred.`))},[yr,Or,Sr]);(0,E.useEffect)(()=>{if(P.available)return Lt().then(e=>{Tt.current=e,xt(e)},()=>void 0),P.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Tt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Tt.current=n,xt(n),r&&wt(!0)})},[]);let Ir=(0,E.useCallback)(()=>{Rt().then(()=>Lt().then(e=>{Tt.current=e,xt(e)},()=>void 0))},[]);(0,E.useEffect)(()=>{if(!P.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await gt();if(!e||t.sequence===Er.current)return;Er.current=t.sequence,Dr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Dr]);let Lr=(0,E.useCallback)(async e=>{let t=e?await Mt():await Nt();t.ok?(Fe(e=>e+1),yr()):t.error&&!t.error.startsWith(`Nothing to`)&&ma(t.error)},[yr]),Rr=(0,E.useRef)(pn);(0,E.useEffect)(()=>{Rr.current!==pn&&(Rr.current=pn,yr())},[pn,yr]);let zr=(0,E.useCallback)((e,t)=>{let{tabs:n}=Rn.current,r=n.find(t=>t.id===e);if(!r||xy(r)!==`files`)return;let i=Sy(r),a=zn.current?.defaultView??_e,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||ge.iconSize,gridSize:r.view?.gridSize||a.gridSize||ge.gridSize,sort:r.view?.sort??ge.sort,sortDescending:r.view?.sortDescending??ge.sortDescending,...t};Hn(e,()=>({view:o})),vr.current!==null&&window.clearTimeout(vr.current),vr.current=window.setTimeout(()=>{vr.current=null,we(i,o)},250)},[Hn]),Br=(0,E.useCallback)(e=>{zr(Cy(Rn.current),e)},[zr]),Vr=(0,E.useCallback)(e=>{let t=zn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,columns:e}};H(n),$e(n)},[]),Hr=(0,E.useCallback)(e=>{let t=zn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,showImages:e}};H(n),$e(n)},[]),Ur=(0,E.useCallback)(e=>{let t=zn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,imageStripHeight:e}};H(n),$e(n)},[]),Wr=(0,E.useCallback)((e,t,n,r)=>{let i=Rn.current.tabs.find(t=>t.id===e);if(!i||xy(i)!==`files`||!i.listing)return;let a=Sy(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Hn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Te(a,t,n,r)},[Hn]),Gr=(0,E.useCallback)((e,t)=>{let n=Rn.current.tabs.find(t=>t.id===e);if(!n)return;let r=Ty(n,zn.current?.defaultView??_e);zr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[zr]),Kr=(0,E.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),qr=(0,E.useCallback)(()=>{De().then(m,()=>m([]))},[]),Jr=(0,E.useCallback)(e=>{let t=(e.openTabs??[]).map(yy).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...Ey(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),i(r[a].id);for(let e of r)xy(e)===`files`&&Kn(e.id,Sy(e),!0);return!0},[Kn]),Yr=(0,E.useCallback)(e=>{let t=Vn.current;if(Vn.current=[],t.length===0)return;let n=t.filter(e=>!py.has(e));for(let e of t)n.includes(e)||my(e);if(n.length===0)return;let{tabs:r}=Rn.current;if(!e&&r.length===1&&r[0].fresh){qn(r[0].id,n[0]),my(n[0]);for(let e of n.slice(1))Yn(e),my(e);return}let a=n.map(e=>{let t=Yn(e);return my(e),t}).at(-1);a&&setTimeout(()=>i(a),0)},[Yn,qn]),Y=(0,E.useCallback)(()=>{Ke().then(e=>{H(e),B(e.recentLimit);let t={...zt,...e.shortcuts};ke(t),Vt(t.openInNewTab),je(e=>e+1),Bn.current||(Bn.current=!0,Yr(e.restoreTabs&&Jr(e)))},()=>{B(10),Bn.current=!0,Yr(!1)})},[Yr,Jr]),Xr=(0,E.useCallback)(()=>{Le().then(ue,()=>ue([]))},[]),Zr=(0,E.useCallback)(()=>{Oe().then(g,()=>g([]))},[]),Qr=t.filter(e=>!e.hidden),$r=Qr.map(by),ni=$r.join(`
`),oi=Math.max(Qr.findIndex(e=>e.id===r),0);(0,E.useEffect)(()=>{if(!V?.restoreTabs)return;let e=setTimeout(()=>void et($r,oi),700);return()=>clearTimeout(e)},[ni,oi,V?.restoreTabs]),(0,E.useEffect)(()=>{let{tabs:e,activeId:t}=Rn.current,n=e.find(e=>e.id===t);n&&n.fresh&&xy(n)===`files`&&Kn(n.id,Sy(n),!0),qr(),Y(),Zr(),rt().then(y,()=>y(null))},[Kn,qr,Y,Zr]),(0,E.useEffect)(()=>{if(it().then(x,()=>x(null)),P.available)return P.on(e=>{let t=e;t.type===`app.update`&&t.data&&x(t.data)})},[]),(0,E.useEffect)(()=>{if(P.available)return P.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&o({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&ma(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&ma(n.data.error??e(`Pairing failed.`))}})},[e]),(0,E.useEffect)(()=>{let e=setInterval(Zr,3e4);return()=>clearInterval(e)},[Zr]),(0,E.useEffect)(()=>{J===`home`&&(Xr(),Zr())},[J,q.id,Xr,Zr]),(0,E.useEffect)(()=>{if(!P.available)return;let e=P.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Rn.current,i=t.data.startup===!0;i&&py.has(n)?my(n):i&&!Bn.current?Vn.current.includes(n)||Vn.current.push(n):(i&&r.length===1&&r[0].fresh?qn(r[0].id,n):vy(n)?qn(Cy(Rn.current),n):Yn(n),i&&my(n))});return P.send({type:`app.ready`}),e},[qn,Yn]),(0,E.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,E.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,E.useEffect)(()=>{let e=e=>{if(Kt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),hr();return}if(e.key===`BrowserForward`){e.preventDefault(),gr();return}if(e.key===`Escape`&&w.open){e.preventDefault(),wn();return}let t=Ut(e);if(t===W.closeTab)e.preventDefault(),er(Cy(Rn.current));else if(t===W.newTab)e.preventDefault(),Yn();else if(t===W.reopenTab)e.preventDefault(),tr();else if(t===W.goBack)e.preventDefault(),hr();else if(t===W.goForward)e.preventDefault(),gr();else if(t===W.goUp)e.preventDefault(),_r();else if(t===W.find)e.preventDefault(),J===`files`?Tn():En();else if(t===W.location)e.preventDefault(),Ne(e=>e+1);else if(t===W.home){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&nr(t)}else t===W.iconsView?(e.preventDefault(),J===`files`&&Br({mode:`grid`})):t===W.detailsView?(e.preventDefault(),J===`files`&&Br({mode:`list`})):t===W.nextTab?(e.preventDefault(),rr(1)):t===W.previousTab?(e.preventDefault(),rr(-1)):t===W.hidden||t===`alt+.`?(e.preventDefault(),Ue().then(()=>{Fe(e=>e+1),yr()})):t===W.undo?(e.preventDefault(),Lr(!0)):t===W.redo?(e.preventDefault(),Lr(!1)):t===W.splitView?(e.preventDefault(),ir()):J!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),kn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[W,J,w.open,er,tr,Yn,hr,gr,_r,Tn,En,wn,kn,Br,rr,nr,p,yr,Lr,ir]),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),hr()):e.button===4&&(e.preventDefault(),gr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[hr,gr]),(0,E.useEffect)(()=>{if(!P.available||J!==`files`)return;let e=new Set;for(let n of t){if(xy(n)!==`files`)continue;let t=Sy(n);if(t&&!yd(t)){if(f(t)){let n=ky(l(t));n&&e.add(n)}else e.add(t)}}e.size>0&&P.send({type:`fs.watch`,payload:{paths:[...e]}})},[J,nn,t]),(0,E.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=Rn.current.tabs.filter(e=>xy(e)===`files`&&Oy(Sy(e),n));r.length!==0&&(tn(),ye(n,!1,pn).then(e=>{for(let t of r){let n=Rn.current.tabs.find(e=>e.id===t.id);n&&xy(n)===`files`&&!n.loading&&Oy(Sy(n),e.path)&&Hn(t.id,()=>({listing:e}))}},()=>void 0))})},[pn,Hn]);let ci=q.index>0,li=q.index<q.history.length-1,ui=(e,t)=>{let n=Ty(e,dn),r=e.listing?.path??e.history[e.index]??``,i=f(r),a=i&&re(r);return(0,F.jsx)(Oc,{confirmDelete:V?.confirmDelete??!1,previewVideoAudio:V?.previewVideoAudio??!1,previewVideoAutoplay:V?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?We:qe,onActivate:()=>Ye(t?`primary`:`secondary`),enableShortcuts:(!sn||(t?Je===`primary`:Je===`secondary`))&&(!i||a),error:e.error,find:e.id===un.id?{...w,currentPath:Sn<0?null:xn[Sn]}:void 0,imageStripHeight:vn,listing:e.listing,loading:e.loading,onImageStripHeight:Ur,readOnly:i&&!a||yd(e.listing?.path??``),onOpen:(t,n)=>{n?Yn(t):Kn(e.id,t)},onOpenFile:(t,n)=>{yd(t)?wd(t).catch(e=>void ma(Dy(e))):s(t)?V?.archiveHandler??!1?n?Yn(t):Kn(e.id,t):U(t):f(t)?(async()=>{let e=await xe(t,L.current,jy(t));if(!e.path&&Qt(e.error)){let n=l(t),r=Yt(n);r&&Zt(n);let i=await ga(n,!!r);i&&(Xt(n,i),e=await xe(t,L.current,i))}e.path?U(e.path):e.error&&ma(e.error)})():U(t)},onRefresh:()=>{let t=e.listing?.path;t&&Xn(t)},onRename:Zn,onSelectionCountChange:t?dr:fr,onSetTags:(t,n,r)=>Wr(e.id,t,n,r),selectionMenuRequest:t?ut.primary:ut.secondary,onSort:t=>Gr(e.id,t),onPaste:Mr,onClipboardChanged:()=>void Or(),onTransfer:Fr,onAddToTray:e=>void xr(e),onAddFavorite:e=>void Cr(e),onRemoveFavorite:e=>void wr(e),favoritePaths:he,onExtractArchive:(e,t)=>void _i(e,t),openOnSingleClick:V?.openOnSingleClick??!1,pendingRename:ft&&t===(Je===`primary`)&&Oy(ft.directory,e.listing?.path??``)?ft.path:null,pendingRenameToken:ft?.token??0,refreshToken:Pe,shortcuts:W,showCheckboxes:V?.showCheckboxes??!0,showImages:_n,view:n})},di=w.open&&(0,F.jsx)(Qu,{current:Sn,focusToken:k,matchCase:w.matchCase,mode:w.mode,onClose:wn,onMatchCase:()=>T(e=>({...e,matchCase:!e.matchCase})),onMode:()=>T(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>jn(1),onPrevious:()=>jn(-1),onQuery:e=>T(t=>({...t,query:e})),onRegex:()=>T(e=>({...e,regex:!e.regex})),query:w.query,regex:w.regex,total:xn.length}),fi=J===`files`&&f(rn),mi=fi&&re(rn),hi=fi&&q.listing?.archiveEncrypted===!0,gi=async(t,n)=>{let r=l(t),i=await be(r,n,L.current,jy(r));if(!i.ok&&Qt(i.error)){let e=Yt(r);e&&Zt(r);let t=await ga(r,!!e);t&&(Xt(r,t),i=await be(r,n,L.current,t))}i.ok?(Xn(n),tn(),Kn(q.id,n,!0)):ma(`${e(`Could not extract the archive.`)}${i.error?`\n${i.error}`:``}`)},_i=async(e,t)=>{let n=l(e),r=ky(n);if(!r)return;if(t===`choose`){let e=await la(r);e&&await gi(n,e);return}let i=t===`named`;if(t===`auto`){let e=Oy(n,rn)?q.listing?.entries??[]:(await ye(n,!1,!1,L.current,jy(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${Ay(n)}`:r;await gi(n,o)},vi=async e=>{fi&&await _i(rn,e)},bi=async()=>{fi&&await _i(rn,`choose`)},xi=(0,F.jsxs)(Ry,{children:[(0,F.jsx)(zy,{"data-shortcut":Wt(W.goBack),disabled:!ci,onClick:e=>{q.index>0&&Ht(e)?Yn(q.history[q.index-1]):hr()},title:e(`Back`),type:`button`,children:(0,F.jsx)(ii,{})}),(0,F.jsx)(zy,{"data-shortcut":Wt(W.goForward),disabled:!li,onClick:e=>{q.index<q.history.length-1&&Ht(e)?Yn(q.history[q.index+1]):gr()},title:e(`Forward`),type:`button`,children:(0,F.jsx)(ai,{})}),(0,F.jsx)(zy,{"data-shortcut":Wt(W.goUp),disabled:J!==`files`||!an,onClick:e=>{an&&(Ht(e)?Yn(an):nr(an))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(ti,{})}),(0,F.jsx)(np,{focusToken:Me,icon:yn,label:J===`files`?void 0:e($v[J]),onContextMenu:J===`files`?(e,t,n)=>at({x:t,y:n,path:e}):void 0,onNavigate:nr,path:J===`files`?rn:nn}),J===`files`&&(!fi||mi)&&(0,F.jsx)(zy,{onClick:e=>lr(e,rn,()=>void Kn(q.id,rn,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)(ri,{})}),(0,F.jsx)(zy,{"data-shortcut":Wt(W.find),onClick:En,title:e(`Search`),type:`button`,children:(0,F.jsx)(ei,{})}),ct.primary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Hy,{}),(0,F.jsx)(zy,{onClick:e=>pr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)(aa,{})})]}),fi&&(0,F.jsxs)(By,{children:[(0,F.jsx)(Hy,{}),hi&&(0,F.jsxs)(Vy,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(oa,{size:12}),e(`Encrypted`)]}),(0,F.jsx)(zy,{onClick:()=>void bi(),onContextMenu:e=>{e.preventDefault(),tt({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,F.jsx)(Si,{})}),(0,F.jsx)(io,{icon:(0,F.jsx)(Ji,{size:15}),onChange:e=>{let t=Number(e);le(t),L.current=t,fi&&Kn(q.id,rn,!0)},options:gy.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(gy.find(e=>e.value===String(ce))?.label??`Auto`)}`,value:String(ce)})]})]}),Ci=j.open?{...j,index:N}:null;return(0,F.jsx)(An,{value:gn,children:(0,F.jsxs)(Py,{$rounded:ne,children:[(0,F.jsx)(hu,{settings:V}),(0,F.jsx)(Ov,{activeId:q.id,onClose:er,onNewTab:()=>Yn(),onReorder:Kr,onTransferToTab:Fr,onSelect:i,onViewChange:Br,onColumns:Vr,onShowImages:Hr,showImages:_n,tasks:ht,onClearTasks:Ir,activityOpen:Ct,onActivityOpenChange:wt,trayCount:Ft.length+Ot.length,trayVisible:Pt,onToggleTray:Pr,split:sn,canSplit:J===`files`,onToggleSplit:ir,details:Ie,canDetails:J===`files`||J===`recycle`||J===`gallery`,onToggleDetails:()=>Re(e=>!e),currentFolder:J===`files`&&!yd(rn)?rn:``,shortcuts:W,view:fn,tabs:t.filter(e=>!e.hidden).map(n=>{let r=xy(n),i=Sy(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?Sy(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Mn(gn,i):void 0,archive:r===`files`&&f(i),split:!!a,title:r===`files`?Nn(gn,i,_(i)||e(`Files`)):e($v[r]),partner:a?{title:Nn(gn,o,_(o)||e(`Files`)),place:Mn(gn,o)}:void 0}})}),(0,F.jsxs)(Fy,{children:[(0,F.jsx)(Lg,{activeKind:J,currentPath:J===`files`?nn:``,drives:h,historyVersion:ve,onNavigate:nr,onOpenView:$n,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:z,recentLimit:de,version:Ae}),(0,F.jsxs)(Iy,{children:[J!==`files`&&xi,(0,F.jsxs)(Ly,{children:[J!==`files`&&j.open&&(0,F.jsx)(Qu,{current:N,focusToken:ie,matchCase:j.matchCase,mode:j.mode,onClose:Dn,onMatchCase:()=>M(e=>({...e,matchCase:!e.matchCase})),onMode:()=>M(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>On(1),onPrevious:()=>On(-1),onQuery:e=>M(t=>({...t,query:e})),onRegex:()=>M(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:j.query,regex:j.regex,total:se}),J===`files`?sn&&on?(0,F.jsxs)(Wy,{ref:sr,children:[(0,F.jsxs)(Gy,{style:{flex:u},children:[(0,F.jsxs)(Uy,{$active:Je===`primary`,onPointerDown:()=>Ye(`primary`),children:[(0,F.jsx)(zy,{"data-shortcut":Wt(W.goBack),disabled:!ci,onClick:e=>{let t=q.index-1;t<0||(Ht(e)?Yn(q.history[t]):Jn(q.id,q.history[t],t))},title:e(`Back`),type:`button`,children:(0,F.jsx)(ii,{})}),(0,F.jsx)(zy,{"data-shortcut":Wt(W.goForward),disabled:!li,onClick:e=>{let t=q.index+1;t>=q.history.length||(Ht(e)?Yn(q.history[t]):Jn(q.id,q.history[t],t))},title:e(`Forward`),type:`button`,children:(0,F.jsx)(ai,{})}),(0,F.jsx)(zy,{"data-shortcut":Wt(W.goUp),disabled:!an,onClick:e=>{an&&(Ht(e)?Yn(an):Kn(q.id,an))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(ti,{})}),(0,F.jsx)(np,{focusToken:Je===`primary`?Me:void 0,onContextMenu:(e,t,n)=>at({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Yn(e):void Kn(q.id,e),path:rn}),(0,F.jsx)(zy,{onClick:e=>lr(e,rn,()=>void Kn(q.id,rn,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)(ri,{})}),(0,F.jsx)(zy,{"data-shortcut":Wt(W.find),onClick:Tn,title:e(`Search`),type:`button`,children:(0,F.jsx)(ei,{})}),ct.primary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Hy,{}),(0,F.jsx)(zy,{onClick:e=>pr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)(aa,{})})]})]}),ui(q,!0),Je===`primary`&&di]}),(0,F.jsx)(Ky,{onDoubleClick:()=>d(.5),onPointerDown:cr,title:e(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(Gy,{$enter:!0,style:{flex:1-u},children:[(0,F.jsxs)(Uy,{$active:Je===`secondary`,onPointerDown:()=>Ye(`secondary`),children:[(0,F.jsx)(zy,{"data-shortcut":Wt(W.goBack),disabled:on.index<=0,onClick:e=>{let t=on.index-1;t<0||(Ht(e)?Yn(on.history[t]):Jn(on.id,on.history[t],t))},title:e(`Back`),type:`button`,children:(0,F.jsx)(ii,{})}),(0,F.jsx)(zy,{"data-shortcut":Wt(W.goForward),disabled:on.index>=on.history.length-1,onClick:e=>{let t=on.index+1;t>=on.history.length||(Ht(e)?Yn(on.history[t]):Jn(on.id,on.history[t],t))},title:e(`Forward`),type:`button`,children:(0,F.jsx)(ai,{})}),(0,F.jsx)(zy,{"data-shortcut":Wt(W.goUp),disabled:!ln,onClick:e=>{ln&&(Ht(e)?Yn(ln):Kn(on.id,ln))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(ti,{})}),(0,F.jsx)(np,{focusToken:Je===`secondary`?Me:void 0,onContextMenu:(e,t,n)=>at({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Yn(e):void Kn(on.id,e),path:cn}),(0,F.jsx)(zy,{onClick:e=>lr(e,cn,()=>void Kn(on.id,cn,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)(ri,{})}),(0,F.jsx)(zy,{"data-shortcut":Wt(W.find),onClick:Tn,title:e(`Search`),type:`button`,children:(0,F.jsx)(ei,{})}),ct.secondary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Hy,{}),(0,F.jsx)(zy,{onClick:e=>pr(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)(aa,{})})]})]}),ui(on,!1),Je===`secondary`&&di]}),(0,F.jsx)(Ho,{info:or,onWidth:ar,open:Ie,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,width:Be})]}):(0,F.jsxs)(Jy,{children:[(0,F.jsxs)(Yy,{children:[xi,(0,F.jsxs)(qy,{children:[ui(q,!0),di]})]}),(0,F.jsx)(Ho,{info:He,onWidth:ar,open:Ie,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,width:Be})]}):J===`home`?(0,F.jsx)(Zf,{drives:h,find:Ci,historyVersion:ve,onSearchMatches:I,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Zr,onHistoryChanged:()=>Ce(e=>e+1),onAddToTray:e=>void xr(e),onAddFavorite:e=>void Cr(e),onRemoveFavorite:e=>void wr(e),favoritePaths:he,onExtractArchive:(e,t)=>void _i(e,t),settingsVersion:Ae,onOpen:nr,onLayoutChanged:Y,onPlacesChanged:m,onRecentCleared:Xr,places:p,recent:z,recentLimit:de,visibilityVersion:Pe}):J===`settings`?(0,F.jsx)(Pm,{appInfo:v,find:Ci,focusSection:C,onSearchMatches:I,onSettingsChanged:Y,onOpenFolder:Yn}):J===`gallery`?(0,F.jsx)(Cg,{confirmDelete:V?.confirmDelete??!1,find:Ci,onSearchMatches:I,openOnSingleClick:V?.openOnSingleClick??!1,onAddToTray:e=>void xr(e),onAddFavorite:e=>void Cr(e),onRemoveFavorite:e=>void wr(e),favoritePaths:he,onExtractArchive:(e,t)=>void _i(e,t),shortcuts:W,showCheckboxes:V?.showCheckboxes??!0,showDetails:Ie,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,view:fn}):(0,F.jsx)(vp,{find:Ci,onOpenLocation:nr,onShowDetails:()=>Re(!0),platform:v?.platform,showDetails:Ie,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1})]},J),(0,F.jsxs)($y,{children:[(0,F.jsx)(`span`,{children:J===`files`&&q.listing?My(e,q.listing):``}),v?(0,F.jsxs)(Xy,{children:[(0,F.jsxs)(`span`,{children:[`v`,v.version,` · `,v.platform]}),b?.available&&(0,F.jsxs)(Zy,{onClick:()=>{te(`updates`),$n(`settings`)},title:e(`Version {version} is available.`,{version:b.latest}),type:`button`,children:[(0,F.jsx)(Qy,{}),e(`Update available`)]})]}):(0,F.jsx)(`span`,{children:`browser preview`})]})]})]}),(0,F.jsx)(Ks,{clipboardItems:Ot,clipboardMove:At,currentDirectory:J===`files`?nn:``,items:Ft,onAdd:e=>void xr(e),onClear:Tr,onClose:()=>G(!1),onCopyToClipboard:e=>void kr(e),onPosition:Nr,onRemove:Sr,onTransfer:Fr,position:$t,visible:Pt}),Xe&&(0,F.jsx)(to,{creationOnly:!0,directory:Xe.directory,menu:{x:Xe.x,y:Xe.y,paths:[],background:!0},onClose:()=>Ze(null),onCreateFile:e=>void mr(e),onCreateFolder:e=>void mr(null,e),shortcuts:W}),nt&&(0,F.jsx)(to,{allowCompression:!0,directory:ky(nt.path)??nt.path,menu:{x:nt.x,y:nt.y,paths:[nt.path]},onAddToTray:e=>void xr(e),onAddFavorite:e=>void Cr(e),onRemoveFavorite:e=>void wr(e),favoritePaths:he,onExtractArchive:(e,t)=>void _i(e,t),onArchiveCreated:e=>{e&&Xn(ky(nt.path)??nt.path)},onClose:()=>at(null),onCompressTo:(e,t)=>st({paths:e,name:t}),onCopy:(e,t)=>void mt(e,t),onDelete:e=>void bt(e,!1).then(()=>Xn(ky(nt.path)??nt.path)),onOpen:(e,t)=>t?Yn(e):void Kn(q.id,e),onOpenFile:e=>void U(e),onPaste:e=>void yt(e).then(t=>{t&&Xn(e)}),onRefresh:()=>Xn(nt.path),shortcuts:W,target:{path:nt.path,isDirectory:!0}}),ot&&(0,F.jsx)(vo,{initialDirectory:ky(nt?.path??rn)??rn,initialName:ot.name,onCancel:()=>st(null),onCompress:async e=>{let t=await It(ot.paths,e);return!t.ok&&t.error&&ma(t.error),t.ok}}),Qe&&(0,F.jsx)(Ua,{items:[{label:e(`Extract here`),onSelect:()=>void vi(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void vi(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void vi(`auto`)}],onClose:()=>tt(null),x:Qe.x,y:Qe.y}),Gt&&(0,F.jsx)(bu,{delaySeconds:Gt.prompt.delaySeconds,hits:Gt.prompt.hits,onCancel:()=>{Gt.resolve(!1),qt(null)},onConfirm:()=>{Gt.resolve(!0),qt(null)},permanent:Gt.prompt.permanent},Gt.id),(0,F.jsx)(Fu,{}),(0,F.jsx)(Hu,{}),a&&(0,F.jsx)(ey,{code:a.code,deviceName:a.deviceName,onAccept:()=>{gd(a.requestId,!0),o(null)},onReject:()=>{gd(a.requestId,!1),o(null)}}),(0,F.jsx)(Jv,{}),(0,F.jsx)(pe,{})]})})}var Py=i.div`
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
`,Fy=i.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex: 1;
    min-height: 0;
    background:
        radial-gradient(1200px 650px at 12% -10%, rgba(var(--accent-secondary-rgb), 0.12), transparent 60%),
        radial-gradient(900px 520px at 110% 18%, rgba(var(--accent-rgb), 0.09), transparent 55%),
        linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-media) 100%);

    html.has-wallpaper & {
        background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.12), rgba(var(--bg-rgb), 0.3));
    }
`,Iy=i.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Ly=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Ra}
`,Ry=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,zy=i.button`
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
`,By=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Vy=i.span`
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
`,Hy=i.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Uy=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Wy=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Gy=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Va:``}
`,Ky=i.div`
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
        ${Ha}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,qy=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Jy=i.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Yy=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Xy=i.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Zy=i.button`
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
`,Qy=i.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,$y=i.footer`
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
`;function eb({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:l,onSelect:u}){let d=R(),f=bc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,E.useState)(e),[v,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(!0),[S,ee]=(0,E.useState)(null),[C,te]=(0,E.useState)(()=>new Set),[ne,w]=(0,E.useState)(a??[]),[re,D]=(0,E.useState)([]),[O,k]=(0,E.useState)([]),[A,j]=(0,E.useState)([]),[M,ie]=(0,E.useState)([]),[ae,N]=(0,E.useState)(``),[oe,se]=(0,E.useState)(m.length===0),[I,ce]=(0,E.useState)(`files`),[le,L]=(0,E.useState)(0),[z,ue]=(0,E.useState)(mn),[de,B]=(0,E.useState)(0),[fe,V]=(0,E.useState)(0),[pe,H]=(0,E.useState)(null),[me,he]=(0,E.useState)(null),[ve,U]=(0,E.useState)(0),[be,xe]=(0,E.useState)(null),[Se,Ce]=(0,E.useState)(_e.imageStripHeight);(0,E.useEffect)(()=>{Ke().then(xe,()=>xe(null))},[]),(0,E.useEffect)(()=>{a?w(a):De().then(w,()=>w([]))},[a]),(0,E.useEffect)(()=>{Oe().then(D,()=>D([])),Le().then(k,()=>k([]))},[]),(0,E.useEffect)(()=>{let e=!0;return x(!0),ee(null),te(new Set),N(p?``:_(h)),ye(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),N(p?``:_(t.path)),x(!1))},t=>{e&&(ee(t instanceof Error?t.message:String(t)),x(!1))}),()=>{e=!1}},[h,le,p]),(0,E.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),ue(e=>({...e,open:!0})),B(e=>e+1);return}if(e.key===`Escape`){z.open?(ue(e=>({...e,open:!1,query:``})),V(0)):l();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Te();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Ee();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),ue(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),B(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||He()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Te()):e.button===4&&(e.preventDefault(),Ee())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let we=e=>{let t=e.trim();t.length!==0&&c(t)!==c(h)&&(j(e=>[...e,h]),ie([]),ce(`files`),g(t))},Te=()=>{let e=A.at(-1);e!==void 0&&(j(e=>e.slice(0,-1)),ie(e=>[h,...e]),g(e))},Ee=()=>{let e=M[0];e!==void 0&&(ie(e=>e.slice(1)),j(e=>[...e,h]),g(e))},W=v?.path??h,ke=v?.parent??(h?T(h):null);(0,E.useEffect)(()=>{P.available&&W&&P.send({type:`fs.watch`,payload:{paths:[W]}})},[W]),(0,E.useEffect)(()=>{if(P.available&&W)return P.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&c(t.data.path)===c(W)&&ye(W,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));te(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[W]);let Ae=(v?.entries??[]).filter(e=>e.isDirectory||p&&(oe||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),je=v?{...v,entries:Ae}:null,Me=z.open&&z.query.length>0,Ne=(0,E.useMemo)(()=>Me?Ae.filter(e=>Cn(e.name,z)).map(e=>e.fullPath):[],[Me,Ae,z]);(0,E.useEffect)(()=>{V(0)},[z.query,z.matchCase,z.regex,v?.path]);let Pe=Ne.length===0?-1:Math.min(fe,Ne.length-1),Fe=(0,E.useMemo)(()=>({...z,currentPath:Pe>=0?Ne[Pe]:null}),[z,Pe,Ne]),Ie=be?.defaultView??_e,Re=o??{mode:Ie.mode,iconSize:Ie.iconSize,gridSize:Ie.gridSize,sort:`name`,sortDescending:!1,columns:Ie.columns??[`type`,`size`,`modified`]},ze=(s??Ie.showImages)&&Re.mode===`list`,Be=ae.trim(),Ve=Be.length>0?nb(Be)?Be:tb(W,Be):null,He=()=>{if(b||S)return;let e=n?[...C]:[...C].slice(0,1);e.length>0?u(e):Ve!==null&&Be!==_(W)?u([Ve]):!p&&W&&u([W])},Ue=(0,E.useCallback)(e=>{te(new Set(e)),N(e.length===1?_(e[0]):e.length===0&&!p?_(W):``)},[W,p]),We=e=>{v?.entries.find(t=>t.fullPath===e)?.isDirectory?we(e):p&&u([e])},Ge=e=>N(e),qe=async e=>{let t=pe;if(H(null),!t||!W)return;let n=e===null?await St(W):await Et(W,e);n.ok&&n.path!==null&&(ue(e=>({...e,open:!1,query:``})),e!==null&&se(!0),L(e=>e+1),window.setTimeout(()=>{he(n.path),U(e=>e+1)},120))},Je=()=>{ue(e=>({...e,open:!0})),B(e=>e+1)},Ye=e=>{V(t=>Ne.length===0?0:(t+e+Ne.length)%Ne.length)},Xe=e=>(0,F.jsxs)(fb,{children:[(0,F.jsxs)(pb,{children:[(0,F.jsx)(mb,{children:d(p?`File name:`:`Folder:`)}),(0,F.jsx)(hb,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),He())},spellCheck:!1,value:ae}),p&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(mb,{children:d(`Files of type:`)}),(0,F.jsx)(io,{onChange:e=>se(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:oe?`all`:`supported`,width:220})]})]}),(0,F.jsxs)(gb,{children:[(0,F.jsx)(_b,{onClick:l,type:`button`,children:d(`Cancel`)}),(0,F.jsxs)(_b,{$primary:!0,disabled:b||S!==null||p&&C.size===0&&Be.length===0,onClick:He,type:`button`,children:[(0,F.jsx)(mi,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),Ze=(0,F.jsxs)(ib,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,F.jsxs)(ab,{children:[(0,F.jsxs)(ob,{children:[(0,F.jsx)(Zr,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,F.jsx)(sb,{onClick:l,title:d(`Cancel`),type:`button`,children:(0,F.jsx)(hi,{size:12})})]}),(0,F.jsxs)(cb,{children:[(0,F.jsx)(Lg,{activeKind:I===`overview`?`home`:I===`gallery`?`gallery`:`files`,currentPath:W,drives:re,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:ne.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>we(e),onOpenView:e=>{e===`home`?(te(new Set),N(p?``:_(W)),ce(`overview`)):e===`gallery`&&p&&(te(new Set),N(``),ce(`gallery`))},places:ne,recent:O,recentLimit:10}),(0,F.jsx)(lb,{children:I===`overview`?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Zf,{drives:re,historyVersion:0,homePath:ne.find(e=>e.kind===`home`)?.path??``,onOpen:e=>we(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Ue,places:ne,readOnly:!0,recent:O,recentLimit:10,visibilityVersion:0}),Xe(N)]}):I===`gallery`?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Cg,{onPick:e=>u([e]),onSelectionChange:Ue,showCheckboxes:be?.showCheckboxes??!0,view:{...ge,columns:[]}}),Xe(N)]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(ub,{children:[(0,F.jsx)(db,{disabled:A.length===0,onClick:Te,title:d(`Back`),type:`button`,children:(0,F.jsx)(ii,{})}),(0,F.jsx)(db,{disabled:M.length===0,onClick:Ee,title:d(`Forward`),type:`button`,children:(0,F.jsx)(ai,{})}),(0,F.jsx)(db,{disabled:!ke,onClick:()=>ke&&we(ke),title:d(`Up one level`),type:`button`,children:(0,F.jsx)(ti,{})}),(0,F.jsx)(np,{onNavigate:we,path:W}),(0,F.jsx)(db,{onClick:e=>H({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,F.jsx)(ri,{})}),(0,F.jsx)(db,{onClick:Je,title:d(`Search`),type:`button`,children:(0,F.jsx)(ei,{})}),f.available&&(0,F.jsx)(db,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,F.jsx)(aa,{})})]}),z.open&&(0,F.jsx)(Qu,{current:Pe,focusToken:de,matchCase:z.matchCase,mode:z.mode,onClose:()=>{ue(e=>({...e,open:!1,query:``})),V(0)},onMatchCase:()=>ue(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ue(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ye(1),onPrevious:()=>Ye(-1),onQuery:e=>ue(t=>({...t,query:e})),onRegex:()=>ue(e=>({...e,regex:!e.regex})),query:z.query,regex:z.regex,total:Ne.length}),(0,F.jsx)(Oc,{allowBackgroundMenu:!0,confirmDelete:be?.confirmDelete??!1,enableShortcuts:!0,error:S,find:Fe,imageStripHeight:Se,loading:b,listing:je,onImageStripHeight:Ce,onOpen:We,onOpenFile:We,onRefresh:()=>L(e=>e+1),onSelectionChange:Ue,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:be?.openOnSingleClick??!1,refreshToken:le,pendingRename:me,pendingRenameToken:ve,showCheckboxes:be?.showCheckboxes??!0,showDetails:!1,showImages:ze,singleSelect:!n,view:Re}),Xe(Ge)]})})]}),pe&&(0,F.jsx)(to,{creationOnly:!0,directory:W,menu:{x:pe.x,y:pe.y,paths:[],background:!0},onClose:()=>H(null),onCreateFile:p?e=>void qe(e):void 0,onCreateFolder:()=>void qe(null),shortcuts:zt})]});return i?Ze:(0,Ea.createPortal)((0,F.jsx)(rb,{onPointerDown:e=>{e.target===e.currentTarget&&l()},children:Ze}),document.body)}function tb(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function nb(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var rb=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Va}
`,ib=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Da}
    ${({$inline:e})=>e?``:Ia}
`,ab=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,ob=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,sb=i.button`
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
`,cb=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,lb=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,ub=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,db=i.button`
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
`,fb=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,pb=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,mb=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,hb=i.input`
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
`,gb=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,_b=i.button`
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
`;function vb({mode:e,multiple:t,extensions:n,initial:r}){let i=R(),a=B(),[o,s]=(0,E.useState)(null),[c,l]=(0,E.useState)({}),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=(0,E.useRef)(0);(0,E.useEffect)(()=>{P.send({type:`app.ready`})},[]),(0,E.useEffect)(()=>(me(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>me(null)),[]),(0,E.useEffect)(()=>{Ke().then(e=>{s(e),S(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??_e,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,F.jsxs)(yb,{children:[(0,F.jsxs)(bb,{children:[(0,F.jsx)(xb,{children:(0,F.jsx)(gi,{size:17})}),(0,F.jsx)(Sb,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,F.jsx)(fv,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,F.jsx)(Cb,{children:(0,F.jsx)(wb,{onClick:()=>P.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,F.jsx)(hi,{size:12})})})]}),(0,F.jsx)(Tb,{children:(0,F.jsx)(eb,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>P.send({type:`pick.cancel`}),onSelect:e=>P.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,F.jsx)(bu,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,F.jsx)(Fu,{}),(0,F.jsx)(pe,{})]})}var yb=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,bb=i.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,xb=i.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Sb=i.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cb=i.div`
    display: flex;
    flex-shrink: 0;
`,wb=i.button`
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
`,Tb=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Eb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Eb);var Db=document.getElementById(`root`),Ob=new URLSearchParams(window.location.search),kb=Ob.get(`picker`),Ab=Ob.get(`filter`)??``;Db&&(0,D.createRoot)(Db).render((0,F.jsx)(E.StrictMode,{children:(0,F.jsx)(z,{children:kb===`folder`||kb===`file`?(0,F.jsx)(vb,{extensions:Ab?Ab.split(`;`).filter(Boolean):[],initial:Ob.get(`initial`)??``,mode:kb,multiple:Ob.get(`multiple`)===`1`}):(0,F.jsx)(Ny,{})})}));