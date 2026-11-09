import{A as e,C as t,D as n,M as r,O as i,S as a,T as o,_ as s,b as c,c as l,d as u,f as d,g as f,h as p,i as m,j as h,k as g,l as _,m as v,n as y,o as ee,p as b,r as x,s as te,t as S,u as C,v as w,w as T,x as E,y as ne}from"./theme-GtEFL-tp.js";var D=r(h(),1),O=g(),k=15e3,A=new Set,re=new Map,j=!1,ie=0,ae;function M(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function N(){j||(j=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>oe(e)))}function oe(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?re.get(n):void 0;n&&r&&(re.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),A.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function se(){if(ae!==void 0)return;let e=()=>{if(!M())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),ae=setInterval(e,5e3)}var P={get available(){return M()},send(e){M()?(N(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&se()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=k){if(!M())return Promise.reject(Error(`Native bridge is not available.`));N();let r=`req-${++ie}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{re.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);re.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return N(),A.add(e),()=>A.delete(e)}},F=T();function ce(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function le(e){return P.available?await P.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var I=(0,D.createContext)(ce({})),L=(0,D.createContext)(`en`);function R(){return(0,D.useContext)(I)}var z=({children:e})=>{let[t,n]=(0,D.useState)(()=>ce({})),[r,i]=(0,D.useState)(`en`);return(0,D.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await le();if(e)return;n(()=>ce(t.strings)),i(t.locale)}catch{}};t();let r=P.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,D.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,F.jsx)(I.Provider,{value:t,children:(0,F.jsx)(L.Provider,{value:r,children:e})})},ue=e=>P.send({type:e});function de(){let[e,t]=(0,D.useState)(!1);return(0,D.useEffect)(()=>{if(P.available)return P.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>ue(`window.minimize`),toggleMaximize:()=>ue(`window.toggleMaximize`),close:()=>ue(`window.close`)}}function fe(){return{onMouseDown:()=>ue(`window.drag`),onDoubleClick:()=>ue(`window.toggleMaximize`)}}function pe(){let[e,t]=(0,D.useState)(!1),{maximized:n}=de();return(0,D.useEffect)(()=>{if(!P.available)return;let e=!1;return P.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,D.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var B=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function me(){return(0,F.jsx)(F.Fragment,{children:B.map(([e,t])=>(0,F.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),P.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var V=null;function he(e){V=e}function ge(e){return V?V(e):Promise.resolve(!1)}var H={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},_e={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function ve(e,t){return P.available?await P.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function ye(e){return P.available?(await P.request(`fs.open`,{path:e})).ok:!1}async function be(e,t=!0,n=!1,r=0,i){return await P.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function xe(e,t,n=0,r){return await P.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function Se(e,t=0,n){return await P.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function U(e){return P.available?await P.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Ce(e,t){return P.available?(await P.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function we(e,t,n,r){return P.available?(await P.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Te(e,t=!1){return P.available?await P.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ee(){return(await P.request(`fs.places`)).places}async function De(){return(await P.request(`fs.drives`)).drives}async function Oe(e=!1){return(await P.request(`fs.recycle`,{includeOrphans:e})).entries}async function ke(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await ge({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await P.request(e,{...t,confirm:r.token})}return r}async function Ae(e=!1){let t=await P.request(`fs.recycle.empty`,{includeOrphans:e});await ke(`fs.recycle.empty`,{includeOrphans:e},t)}async function je(e){return!P.available||e.length===0?{ok:!1,done:0}:await P.request(`fs.recycle.restoreMany`,{ids:e})}async function Me(e){if(!P.available||e.length===0)return{ok:!1,done:0};let t=await P.request(`fs.recycle.deleteMany`,{ids:e}),n=await ke(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ne(e){P.available&&e&&await P.request(`fs.recycle.properties`,{id:e})}async function Pe(){if(!P.available)return{entries:[],cancelled:!0,failed:!1};let e=await P.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Fe(){return P.available?(await P.request(`fs.recycle.admin.purge`)).ok:!1}async function Ie(e=0,t=150,n=!1){return P.available?await P.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Le(){return P.available?(await P.request(`fs.recent`)).entries:[]}async function Re(){return P.available?(await P.request(`fs.frequent`)).entries:[]}async function ze(e){P.available&&await P.request(`fs.frequent.record`,{path:e})}async function Be(){await P.request(`fs.recent.clear`)}async function Ve(){await P.request(`fs.frequent.clear`)}async function He(){return await P.request(`fs.visibility`)}async function Ue(){return await P.request(`fs.hidden.toggle`)}async function We(){return P.available?await P.request(`fs.index.tasks`):{count:0,directories:[]}}var Ge={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Ke(){if(!P.available)return Ge;let e=await P.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function qe(){return P.available?(await P.request(`app.protection.defaults`)).paths??[]:[]}var Je={registered:!1,pathMatches:!1,registeredPath:null};async function Ye(){return P.available?await P.request(`app.defaultManager.status`):{registered:!1,pathMatches:!1,registeredPath:null}}async function Xe(){return P.available?await P.request(`app.archive.status`):Je}async function Ze(){return P.available?await P.request(`app.archive.register`):Je}async function Qe(){return P.available?await P.request(`app.archive.unregister`):Je}async function $e(e){if(!P.available)return e;let t=await P.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function et(e,t){P.available&&await P.request(`app.tabs.set`,{tabs:e,active:t})}async function tt(e,t,n){return P.available?(await P.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var nt={managed:0,private:0,workingSet:0,available:0};async function rt(){return P.available?await P.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function it(){return P.available?await P.request(`app.updateStatus`)??null:null}async function at(){return P.available?await P.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function ot(e){return!P.available||!e?!1:(await P.request(`app.openUrl`,{url:e})).ok}async function st(){return P.available?await P.request(`app.memory`):nt}async function ct(){return P.available?await P.request(`app.memory.trim`):nt}async function lt(){return P.available?(await P.request(`app.scheme`)).registered:!1}async function ut(e){return P.available?(await P.request(`app.scheme.set`,{enabled:e})).registered:!1}var dt={supported:!1,mode:`none`,active:!1,error:null};async function ft(){return P.available?await P.request(`app.startup`):dt}async function pt(e){return P.available?await P.request(`app.startup.set`,{mode:e}):dt}async function mt(e,t=!1){return!P.available||e.length===0?!1:(await P.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function ht(){return P.available?(await P.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function gt(){return P.available?await P.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function _t(e,t,n){return!P.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await P.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function W(e){return!P.available||e.length===0?[]:(await P.request(`fs.paths.info`,{paths:e})).entries}async function vt(e){return P.available?(await P.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function yt(e,t=!1){if(!P.available||e.length===0)return{ok:!1,error:null};let n=await P.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await ge({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await P.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function bt(e,t){return P.available?await P.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function xt(e,t=!1){return P.available?await P.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function St(e){return P.available?(await P.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Ct(e,t){return P.available?await P.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function wt(e,t,n){return P.available?await P.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Tt(e,t){return P.available?await P.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Et(e){P.available&&e.length!==0&&await P.request(`fs.operation.properties`,{paths:e})}async function Dt(e){P.available&&await P.request(`fs.operation.openWith`,{path:e})}async function Ot(e){P.available&&await P.request(`fs.operation.terminal`,{path:e})}async function kt(e){return P.available?await P.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function At(e,t){return P.available?(await P.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function jt(){return P.available?await P.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Mt(){return P.available?await P.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Nt(e){P.available&&await P.request(`fs.operation.showInExplorer`,{path:e})}async function G(e){return!P.available||e.length===0?{verbs:[],safe:!0}:await P.request(`shell.verbs`,{paths:e})}async function Pt(e,t,n,r){P.available&&e.length!==0&&await P.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Ft(e,t){return!P.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await P.request(`fs.operation.compress`,{...t,paths:e})}async function It(){return P.available?(await P.request(`app.tasks`)).tasks:[]}async function Lt(){P.available&&await P.request(`app.tasks.clear`)}var Rt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},zt=Rt.openInNewTab;function Bt(e){zt=e.trim()||Rt.openInNewTab}function Vt(e){let t=zt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Ht(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Ut(e){return e.split(`+`).filter(Boolean).map(e=>Wt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Wt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Gt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Kt=new Map;function qt(e){return c(f(e)?l(e):e)}function Jt(e){return Kt.get(qt(e))}function Yt(e,t){Kt.set(qt(e),t)}function Xt(e){Kt.delete(qt(e))}function K(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var Zt=new Map,Qt=new Map,q=new Set,J=0;function $t(){Zt.clear(),Qt.clear(),J+=1,q.forEach(e=>e())}function en(){let[e,t]=(0,D.useState)(J);return(0,D.useEffect)(()=>{let e=()=>t(J);return q.add(e),()=>{q.delete(e)}},[]),e}var tn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function nn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return tn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function rn(e,t,n=!1){let r=en(),i=e===null?``:nn(e,t,n),[a,o]=(0,D.useState)(()=>Zt.get(i)??null);return(0,D.useEffect)(()=>{if(e===null){o(null);return}if(!P.available)return;if(Zt.has(i)){o(Zt.get(i)??null);return}let r=!0;return P.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?Zt.set(i,e.dataUrl):Zt.delete(i),r&&o(e.dataUrl)},()=>{Zt.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function an(e){let[t,n]=(0,D.useState)(e);return(0,D.useEffect)(()=>{if(!e){n(null);return}if(!f(e)){n(e);return}let t=!0;return Se(e,0,Jt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function on(e){let t=en(),[n,r]=(0,D.useState)(()=>e?Qt.get(e)??null:null);return(0,D.useEffect)(()=>{if(!e||!P.available){r(null);return}if(Qt.has(e)){r(Qt.get(e)??null);return}let t=!0;return P.request(`fs.iconFile`,{path:e}).then(n=>{Qt.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{Qt.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var sn=null,cn=null;function ln(){return sn===null?P.available?(cn??=P.request(`app.thumbnails`).then(e=>(sn=e.base??``,sn),()=>(sn=``,``)),cn):Promise.resolve(``):Promise.resolve(sn)}function un(e,t=128,n=0){let[r,i]=(0,D.useState)(sn);return(0,D.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return ln().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function dn(e,t=0,n=``){let[r,i]=(0,D.useState)(sn);if((0,D.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return ln().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function fn(e,t=0){let[n,r]=(0,D.useState)(sn);return(0,D.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return ln().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var pn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},mn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function hn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=vn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=xn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var gn=`\0`,_n=``;function vn(e){return e.query!==gn&&(gn=e.query,_n=e.query.toLowerCase()),_n}var yn=`\0`,bn=null;function xn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===yn)return bn;yn=t;try{bn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{bn=null}return bn}function Sn(e,t){return hn(e,t)!==null}var Cn=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],wn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Tn(e){let t=Dn(e);for(let{kind:e}of Cn)if(wn[e].has(t))return e;return null}function En(e){return Tn(e)!==null}function Dn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var On=(0,D.createContext)({places:{},useIcons:!1}),kn=On.Provider;function An(){return(0,D.useContext)(On)}function jn(e,t){return e.places[c(t)]}function Mn(e,t,n){return jn(e,t)?.name||n}function Nn(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function Pn(e,t){try{localStorage.setItem(e,String(t))}catch{}}function Fn(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function In(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Ln=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,F.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,F.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Rn=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),zn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M14 3v4h4`})]}),Bn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,F.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,F.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Vn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,F.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),Hn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 19V5`}),(0,F.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Un=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,F.jsx)(`path`,{d:`M20 4v7h-7`})]}),Wn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 5v14`}),(0,F.jsx)(`path`,{d:`M5 12h14`})]}),Gn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M19 12H5`}),(0,F.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Kn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M5 12h14`}),(0,F.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),qn=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,F.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),Jn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,F.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),Yn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,F.jsx)(`path`,{d:`M12 12v8`})]}),Xn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,F.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),Zn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),Qn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,F.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),$n=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),er=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 7h16`}),(0,F.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,F.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,F.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),tr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),nr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),rr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,F.jsxs)(`defs`,{children:[(0,F.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,F.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,F.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,F.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,F.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,F.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,F.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,F.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,F.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,F.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),ir=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),ar=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,F.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,F.jsx)(`path`,{d:`m13 5-2 14`})]}),or=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,F.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,F.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),sr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,F.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),cr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,F.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,F.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),lr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),ur=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),dr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),fr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,F.jsx)(`path`,{d:`M8.5 14h7`})]}),pr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,F.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,F.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),mr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),hr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),gr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),_r=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),vr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),yr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,F.jsx)(`path`,{d:`m14 6 4 4`})]}),br=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,F.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),xr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,F.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Sr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 4v10`}),(0,F.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,F.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Cr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,F.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,F.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),wr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,F.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,F.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Tr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,F.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Er=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Dr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,F.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Or=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,F.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,F.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),kr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Ar=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,F.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,F.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,F.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),jr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,F.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Mr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,F.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Nr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,F.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,F.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Pr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,F.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Fr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,F.jsx)(`path`,{d:`M3.5 12h17`}),(0,F.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Ir=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Lr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,F.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Rr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,F.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,F.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),zr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Br=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 16V4`}),(0,F.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,F.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),Vr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),Hr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,F.jsx)(`path`,{d:`M12 4v16`})]}),Ur=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,F.jsx)(`path`,{d:`M15 4v16`})]}),Wr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,F.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,F.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,F.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),Gr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,F.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,F.jsx)(`path`,{d:`M12 14v2`})]}),Kr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,F.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]});function Y(e,t){return({size:n=t,...r})=>(0,F.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var qr=Y(Ln,18),Jr=Y(Rn,18),Yr=Y(zn,18),Xr=Y(Bn,18),Zr=Y(Vn,16),Qr=Y(Hn,16),$r=Y(Un,16),ei=Y(Wn,16),ti=Y(Gn,16),ni=Y(Kn,16),ri=Y(qn,12),ii=Y(Jn,18),ai=Y(Yn,14),oi=Y(Xn,14),si=Y(Zn,14),ci=Y(Qn,18),li=Y($n,18),ui=Y(er,18),di=Y(tr,14),fi=Y(nr,14),pi=Y(rr,18),mi=Y(ir,18),hi=Y(ar,18),gi=Y(or,18),_i=Y(sr,18),vi=Y(cr,18),yi=Y(lr,18),bi=Y(ur,18),xi=Y(dr,18),Si=Y(fr,18),Ci=Y(pr,18),wi=Y(mr,18),Ti=Y(hr,18),Ei=Y(gr,18),Di=Y(_r,18),Oi=Y(vr,18),ki=Y(yr,16),Ai=Y(br,18),ji=Y(xr,18),Mi=Y(Sr,18),Ni=Y(Cr,18),Pi=Y(wr,18),Fi=Y(Tr,18),Ii=Y(Er,18),Li=Y(Dr,18),Ri=Y(Or,18),zi=Y(kr,18),Bi=Y(Ar,18),Vi=Y(jr,18),Hi=Y(Mr,18),Ui=Y(Nr,18),Wi=Y(Pr,18),Gi=Y(Fr,18),Ki=Y(Ir,18),qi=Y(Lr,16),Ji=Y(Rr,16),Yi=Y(zr,16),Xi=Y(Br,16),Zi=Y(Vr,16),Qi=Y(Hr,16),$i=Y(Ur,16),ea=Y(Wr,16),ta=Y(Gr,14),na=Y(Kr,14);async function ra(e,t,n){return P.available?(await P.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function ia(e){return ra(`folder`,[],e??``)}function aa(e){return ra(`file`,e??[],``)}var oa=null,sa=null;function ca(e){oa=e}function la(e){return oa?oa(e):Promise.resolve()}function ua(e){sa=e}function da(e,t=!1){return sa?sa(e,t):Promise.resolve(null)}var fa=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],pa=null,ma=0,ha=new Set;function ga(){ma+=1;for(let e of ha)e()}function _a(e){return ha.add(e),()=>ha.delete(e)}function va(){return ma}function ya(e){pa=e,ga()}function ba(){return(0,D.useSyncExternalStore)(_a,va,va),pa}var xa=e(),Sa=n`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Ca=o`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,wa=o`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ta=o`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Ea=o`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Da=o`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Oa=o`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,ka=o`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Aa=o`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,ja=n`animation: ${Ca} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ma=n`animation: ${wa} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Na=n`animation: ${Ta} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${Ea} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var Pa=n`animation: ${Da} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Fa=n`animation: ${Oa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ia=n`animation: ${ka} 140ms ease-out;`,La=n`animation: ${Aa} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Ra({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,D.useState)([]),s=(0,D.useRef)(void 0);if((0,D.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,D.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,F.jsx)(Ja,{},`group-rule-${i}`)),n.push((0,F.jsx)(qa,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,F.jsx)(Ja,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,F.jsxs)(Wa,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,F.jsx)(Ga,{children:e.loading?(0,F.jsx)(Ya,{}):e.icon}),(0,F.jsx)(Ka,{children:e.label}),a?(0,F.jsx)(ri,{size:12}):e.checked&&(0,F.jsx)(di,{size:12})]},`${e.label}-${i}`))}),n};return(0,xa.createPortal)((0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(za,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ba,{children:r.map((e,t)=>(0,F.jsxs)(Va,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,F.jsx)(Ha,{children:e.icon}),(0,F.jsx)(Ua,{children:e.label})]},`${e.label}-${t}`))}),(0,F.jsx)(Ja,{})]}),m(n,0)]}),a.map((e,t)=>(0,F.jsx)(za,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var za=i.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Sa}
    ${Ma}
    transform-origin: top left;
`,Ba=i.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Va=i.button`
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
`,Ha=i.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Ua=i.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wa=i.button`
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
`,Ga=i.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Ka=i.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,qa=i.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Ja=i.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Ya=i.span`
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
`;function Xa({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:l,onDelete:u,onCopy:d,onPaste:p,onCreateFolder:m,onCreateFile:h,creationOnly:g=!1,onRefresh:v,onAddToTray:y,onAddFavorite:ee,allowCompression:b=!1,onCompressTo:x,onArchiveCreated:te}){let S=R(),C=ba(),w=f(t),[T,E]=(0,D.useState)({verbs:[],safe:!0,loading:!1}),[ne,O]=(0,D.useState)({recommended:[],other:[],loading:!1}),[k,A]=(0,D.useState)(null),re=(0,D.useRef)(0),j=(0,D.useRef)(0),ie=e?.paths.length===1,ae=e?.background?t?[t]:[]:e?.paths??[];if((0,D.useEffect)(()=>{if(!e){E({verbs:[],safe:!0,loading:!1}),O({recommended:[],other:[],loading:!1});return}let t=++re.current;E({verbs:[],safe:!0,loading:ae.length>0&&!w}),ae.length>0&&!w&&G(ae).then(e=>{re.current===t&&E({...e,loading:!1})},()=>{re.current===t&&E({verbs:[],safe:!0,loading:!1})});let r=++j.current;!w&&ie&&n?(O({recommended:[],other:[],loading:!0}),kt(n.path).then(e=>{j.current===r&&O({...e,loading:!1})},()=>{j.current===r&&O({recommended:[],other:[],loading:!1})})):O({recommended:[],other:[],loading:!1})},[e,ie,n?.path,n?.isDirectory,ae.length,w]),(0,D.useEffect)(()=>{if(!e||e.background||!ie||!n?.isDirectory){A(null);return}let t=!0;return St(n.path).then(e=>{t&&A(e)},()=>{t&&A(null)}),()=>{t=!1}},[e,ie,n?.path,n?.isDirectory]),!e)return null;let M=[],N=[],oe=()=>{if(!ie||!n)return`Archive`;let e=_(n.path);if(n.isDirectory)return e;let t=e.lastIndexOf(`.`);return t>0?e.slice(0,t):e},se=async e=>{let n=await Ft(e,{directory:t,name:oe(),format:`zip`,level:5});n.ok&&n.path?te?.(n.path,!0):la(n.error??S(`Could not create the archive.`))},P=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},ce=async()=>{if(!n||k===null)return;let e=await Ct(n.path,!k);e.ok?(A(e.enabled),v?.()):la(e.error??S(`Could not change the case sensitivity.`))},le=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await wt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await wt(e,t,`${a}\\${Qa(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?v?.():la(o.error??S(`Could not create the link.`))},I=async e=>{if(!n)return;let r=await ia(t);r&&await le(e,n.path,r,_(n.path),e.endsWith(`-copy`))},L=async e=>{let n=C?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=c(a)===c(t);await le(n,r.path,t,_(r.path),i&&!o)}},z=async()=>{let t=(await W(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&ya({paths:t})},ue=()=>{let e=C?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:S(`Cancel selected link`),icon:(0,F.jsx)(fi,{size:14}),onSelect:()=>ya(null)},...t?[{label:S(`Hard link`),icon:(0,F.jsx)(Yr,{size:14}),separatorBefore:!0,onSelect:()=>void L(`hard`)}]:[],{label:S(`Symbolic link`),icon:(0,F.jsx)(Yr,{size:14}),separatorBefore:!t,onSelect:()=>void L(`symbolic-file`)},...n?[{label:S(`Directory junction`),icon:(0,F.jsx)(Jr,{size:14}),onSelect:()=>void L(`junction`)},{label:S(`Smart copy`),icon:(0,F.jsx)(qi,{size:14}),separatorBefore:!0,onSelect:()=>void L(`smart-copy`)},{label:S(`Smart mirror`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>void L(`smart-mirror`)},{label:S(`Multi-version smart copy`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>void L(`multi-version-smart-copy`)},{label:S(`Hardlink copy`),icon:(0,F.jsx)(qi,{size:14}),separatorBefore:!0,onSelect:()=>void L(`hard-copy`)},{label:S(`Symbolic link copy`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>void L(`symbolic-copy`)}]:[]]};if(e.background){if(m&&N.push({label:S(`New folder`),icon:(0,F.jsx)(ei,{size:16}),shortcut:Ut(r.newFolder),onSelect:m}),h||m){let e=[];m&&(e.push({label:S(`Folder`),icon:(0,F.jsx)(Jr,{size:14}),onSelect:()=>m(!1)}),w||e.push({label:S(`Case-sensitive folder`),icon:(0,F.jsx)(Jr,{size:14}),onSelect:()=>m(!0)})),h&&e.push(...fa.map((e,t)=>({label:`${S(e.label)} (${e.extension})`,icon:(0,F.jsx)(Yr,{size:14}),separatorBefore:t===0,onSelect:()=>h(e.extension)}))),M.push({label:S(`New`),icon:(0,F.jsx)(ei,{size:14}),children:e,onSelect:()=>void 0})}if(w||M.push({label:S(`Create link`),icon:(0,F.jsx)(Xi,{size:14}),disabled:!C,children:ue(),onSelect:()=>void 0}),g)return(0,F.jsx)(Ra,{items:M,onClose:a,quick:N,x:e.x,y:e.y});!w&&b&&(M.push({label:S(`Open in Terminal`),icon:(0,F.jsx)(Hi,{size:14}),onSelect:()=>void Ot(t)}),M.push({label:S(`Show in Explorer`),icon:(0,F.jsx)(Jr,{size:14}),separatorBefore:!0,onSelect:()=>void Nt(t)})),p&&N.push({label:S(`Paste`),icon:(0,F.jsx)(Yi,{size:16}),disabled:!i,shortcut:Ut(r.paste),onSelect:()=>p(t)}),v&&N.push({label:S(`Refresh`),icon:(0,F.jsx)($r,{size:16}),shortcut:Ut(r.refresh),onSelect:v}),w||N.push({label:S(`Properties`),icon:(0,F.jsx)(ii,{size:16}),shortcut:Ut(r.properties),onSelect:()=>void Et([t])})}else{if(o&&M.push({label:S(`Open`),icon:(0,F.jsx)(ni,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&M.push({label:S(`Open in new tab`),icon:(0,F.jsx)(ei,{size:14}),onSelect:()=>o(n.path,!0)}),p&&M.push({label:S(`Paste into folder`),icon:(0,F.jsx)(Yi,{size:14}),disabled:!i,onSelect:()=>p(n.path)}),w||M.push({label:S(`Open in Terminal`),icon:(0,F.jsx)(Hi,{size:14}),onSelect:()=>void Ot(n.path)})),!w&&ie&&n){let e=[];if(ne.loading)e.push({label:S(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ne.recommended)e.push({label:t.name,group:S(`Suggested apps`),icon:t.icon?(0,F.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,F.jsx)(xi,{size:14}),onSelect:()=>void At(n.path,t.path).then(e=>{e||Dt(n.path)})});for(let t of ne.other)e.push({label:t.name,group:S(`Other apps`),icon:t.icon?(0,F.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,F.jsx)(xi,{size:14}),onSelect:()=>void At(n.path,t.path).then(e=>{e||Dt(n.path)})})}e.push({label:S(`Choose another app…`),icon:(0,F.jsx)(xi,{size:14}),separatorBefore:!0,onSelect:()=>void Dt(n.path)}),M.push({label:S(`Open with`),icon:(0,F.jsx)(xi,{size:14}),children:e,onSelect:()=>void Dt(n.path)})}if(w||M.push({label:S(`Compress`),icon:(0,F.jsx)(yi,{size:14}),separatorBefore:!0,children:[{label:S(`Compress to ZIP`),icon:(0,F.jsx)(yi,{size:14}),onSelect:()=>void se(e.paths)},{label:S(`Compress to…`),icon:(0,F.jsx)(yi,{size:14}),onSelect:()=>x?.(e.paths,oe())}],onSelect:()=>void 0}),!w&&(e?.paths.length??0)>0){let e=[{label:S(`Select link source`),icon:(0,F.jsx)(Xi,{size:14}),onSelect:()=>void z()},...C?[{label:S(`Cancel selected link`),icon:(0,F.jsx)(fi,{size:14}),onSelect:()=>ya(null)}]:[],...ie&&n?n.isDirectory?[{label:S(`Symbolic link`),icon:(0,F.jsx)(Jr,{size:14}),separatorBefore:!0,onSelect:()=>void I(`symbolic-folder`)},{label:S(`Directory junction`),icon:(0,F.jsx)(Jr,{size:14}),onSelect:()=>void I(`junction`)},{label:S(`Smart copy`),icon:(0,F.jsx)(qi,{size:14}),separatorBefore:!0,onSelect:()=>void I(`smart-copy`)},{label:S(`Smart mirror`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>void I(`smart-mirror`)},{label:S(`Multi-version smart copy`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>void I(`multi-version-smart-copy`)},{label:S(`Hardlink copy`),icon:(0,F.jsx)(qi,{size:14}),separatorBefore:!0,onSelect:()=>void I(`hard-copy`)},{label:S(`Symbolic link copy`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>void I(`symbolic-copy`)}]:[{label:S(`Symbolic link`),icon:(0,F.jsx)(Yr,{size:14}),separatorBefore:!0,onSelect:()=>void I(`symbolic-file`)},{label:S(`Hard link`),icon:(0,F.jsx)(Yr,{size:14}),onSelect:()=>void I(`hard`)}]:[]];M.push({label:S(`Create link`),icon:(0,F.jsx)(Xi,{size:14}),children:e,onSelect:()=>void 0})}!w&&n?.isDirectory&&k!==null&&M.push({label:S(`Case-sensitive names`),icon:(0,F.jsx)(Jr,{size:14}),checked:k,onSelect:()=>void ce()}),M.push({label:S(`Copy as path`),icon:(0,F.jsx)(qi,{size:14}),onSelect:()=>void P(e.paths)}),y&&M.push({label:S(`Add to file tray`),icon:(0,F.jsx)(Wi,{size:14}),onSelect:()=>y(e.paths)}),ee&&!w&&M.push({label:S(`Add to favorites`),icon:(0,F.jsx)(Ki,{size:14}),onSelect:()=>ee(e.paths)}),w||M.push({label:S(`Show in Explorer`),icon:(0,F.jsx)(Jr,{size:14}),separatorBefore:!0,onSelect:()=>void Nt(e.paths[0])}),d&&N.push({label:S(`Cut`),icon:(0,F.jsx)(Ji,{size:16}),shortcut:Ut(r.cut),onSelect:()=>d(e.paths,!0)},{label:S(`Copy`),icon:(0,F.jsx)(qi,{size:16}),shortcut:Ut(r.copy),onSelect:()=>d(e.paths,!1)}),ie&&n&&l&&N.push({label:S(`Rename`),icon:(0,F.jsx)(ki,{size:16}),shortcut:Ut(r.rename),onSelect:()=>l(n.path)}),u&&N.push({label:S(`Delete`),icon:(0,F.jsx)(ui,{size:16}),danger:!0,shortcut:Ut(r.delete),onSelect:()=>u(e.paths)}),w||N.push({label:S(`Properties`),icon:(0,F.jsx)(ii,{size:16}),shortcut:Ut(r.properties),onSelect:()=>void Et(e.paths)})}if(T.loading)M.push({label:S(`More actions`),icon:(0,F.jsx)(xi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(T.verbs.length>0){let e={items:[],children:new Map};for(let t of T.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,F.jsx)(Za,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Pt(ae,T.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];M.push({label:S(T.safe?`More actions`:`More actions (extensions)`),icon:(0,F.jsx)(xi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,F.jsx)(Ra,{items:M,onClose:a,quick:N,x:e.x,y:e.y})}function Za({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,F.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,F.jsx)(ni,{size:14});case`document`:return(0,F.jsx)(Di,{size:14});case`cut`:return(0,F.jsx)(Ji,{size:14});case`copy`:return(0,F.jsx)(qi,{size:14});case`paste`:return(0,F.jsx)(Yi,{size:14});case`trash`:return(0,F.jsx)(ui,{size:14});case`pencil`:return(0,F.jsx)(ki,{size:14});case`gear`:return(0,F.jsx)(ii,{size:14});case`star`:return(0,F.jsx)(Ii,{size:14});case`pin`:return(0,F.jsx)(ai,{size:14});case`executable`:return(0,F.jsx)(xi,{size:14});case`share`:return(0,F.jsx)(Xi,{size:14});case`arrow`:return(0,F.jsx)(ni,{size:14});default:return(0,F.jsx)(pi,{size:14})}}function Qa(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function $a({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let[c,l]=(0,D.useState)(null),u=(0,D.useRef)(null),d=t.find(t=>t.value===e)??t[0];return(0,D.useEffect)(()=>{if(!c)return;let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&u.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[c]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(eo,{$icon:a!==void 0,"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(c){l(null);return}let e=u.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;l({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:u,style:i&&!a?{width:i}:void 0,title:o??d?.title,type:`button`,children:[a===void 0?(0,F.jsx)(to,{children:d?.label??``}):(0,F.jsx)(no,{children:a}),a===void 0&&(0,F.jsx)(ro,{children:(0,F.jsx)(ri,{size:11})})]}),c&&(0,xa.createPortal)((0,F.jsx)(io,{"aria-label":`options`,"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:c.bottom,left:c.left,minWidth:c.width,top:c.top},children:t.map(t=>(0,F.jsxs)(ao,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),l(null)},role:`option`,title:t.title,type:`button`,children:[(0,F.jsx)(oo,{children:t.label}),t.value===e&&(0,F.jsx)(di,{size:11})]},t.value))}),document.body)]})}var eo=i.button`
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
`,to=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,no=i.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,ro=i.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,io=i.div`
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
    ${Ma}
`,ao=i.button`
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
`,oo=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,so=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],co=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],lo=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],uo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],fo=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function po({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=R(),a=(0,D.useRef)(null),[o,s]=(0,D.useState)(e),[c,l]=(0,D.useState)(t),[u,d]=(0,D.useState)(`zip`),[f,p]=(0,D.useState)(`5`),[m,h]=(0,D.useState)(`default`),[g,_]=(0,D.useState)(`none`),[v,y]=(0,D.useState)(``),[ee,b]=(0,D.useState)(`0`),[x,te]=(0,D.useState)(!1);(0,D.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let S=so.find(e=>e.value===u)??so[0],C=u===`zip`||u===`zipx`,w=g!==`none`,T=C||u===`7z`,E=u===`zip`||u===`7z`,ne=async()=>{if(x||!c.trim()||!o||w&&v.length===0)return;te(!0);let e=await r({directory:o,name:c.trim(),format:u,level:S.level?Number(f):0,method:C?m:null,encryption:T?g:`none`,password:w?v:void 0,splitSize:E?Number(ee):0});te(!1),e&&n()};return(0,xa.createPortal)((0,F.jsx)(mo,{onPointerDown:e=>{e.target===e.currentTarget&&!x&&n()},children:(0,F.jsxs)(ho,{"aria-modal":`true`,role:`dialog`,children:[(0,F.jsx)(go,{children:i(`Compress to…`)}),(0,F.jsxs)(_o,{children:[(0,F.jsx)(vo,{children:i(`Archive name`)}),(0,F.jsx)(yo,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ne()}}),(0,F.jsx)(bo,{children:S.extension})]}),(0,F.jsxs)(_o,{children:[(0,F.jsx)(vo,{children:i(`Format`)}),(0,F.jsx)($a,{onChange:e=>d(e),options:so.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,F.jsxs)(_o,{children:[(0,F.jsx)(vo,{children:i(`Method`)}),(0,F.jsx)($a,{disabled:!C,onChange:h,options:co.map(e=>({...e,label:i(e.label)})),value:C?m:`default`,width:236,zIndex:3700})]}),(0,F.jsxs)(_o,{children:[(0,F.jsx)(vo,{children:i(`Encryption`)}),(0,F.jsx)($a,{disabled:!T,onChange:e=>{_(e),e===`none`&&y(``)},options:lo.map(e=>({...e,label:i(e.label)})),value:T?g:`none`,width:236,zIndex:3700})]}),w&&(0,F.jsxs)(_o,{children:[(0,F.jsx)(vo,{children:i(`Password`)}),(0,F.jsx)(yo,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,F.jsxs)(_o,{children:[(0,F.jsx)(vo,{children:i(`Split volumes`)}),(0,F.jsx)($a,{disabled:!E,onChange:b,options:uo.map(e=>({...e,label:i(e.label)})),value:E?ee:`0`,width:236,zIndex:3700})]}),(0,F.jsxs)(_o,{children:[(0,F.jsx)(vo,{children:i(`Compression level`)}),(0,F.jsx)($a,{disabled:!S.level,onChange:p,options:fo.map(e=>({...e,label:i(e.label)})),value:S.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,F.jsxs)(_o,{$stack:!0,children:[(0,F.jsx)(vo,{children:i(`Destination`)}),(0,F.jsxs)(xo,{children:[(0,F.jsx)(So,{title:o,children:o}),(0,F.jsx)(wo,{disabled:x,onClick:()=>void ia(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,F.jsxs)(Co,{children:[(0,F.jsx)(wo,{disabled:x,onClick:n,type:`button`,children:i(`Cancel`)}),(0,F.jsx)(To,{disabled:x||!c.trim()||w&&v.length===0,onClick:()=>void ne(),type:`button`,children:i(x?`Compressing…`:`Compress`)})]})]})}),document.body)}var mo=i.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ia}
`,ho=i.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${ja}
`,go=i.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,_o=i.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,vo=i.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,yo=i.input`
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
`,bo=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,xo=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,So=i.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Co=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,wo=i.button`
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
`,To=i(wo)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Eo({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=R(),c=(0,D.useRef)(null);return(0,D.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,xa.createPortal)((0,F.jsx)(Do,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,F.jsxs)(Oo,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(ko,{children:t}),(0,F.jsx)(Ao,{children:n}),(0,F.jsxs)(jo,{children:[(0,F.jsx)(Mo,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,F.jsx)(Mo,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Do=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ia}
`,Oo=i.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${ja}
`,ko=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ao=i.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,jo=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Mo=i.button`
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
`,No=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Po=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Fo=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Io=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Lo({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=R(),[l,u]=(0,D.useState)(!1),[d,f]=(0,D.useState)(!1),[p,m]=(0,D.useState)(!1),[h,g]=(0,D.useState)(0),[_,v]=(0,D.useState)(0),[y,ee]=(0,D.useState)(null),[b,x]=(0,D.useState)(!1),[te,S]=(0,D.useState)(!1),C=(0,D.useRef)(null),w=(0,D.useRef)(null),T=(0,D.useRef)(null),E=(0,D.useRef)(null),[ne,O]=(0,D.useState)(()=>{let e=Nn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),k=e?.path??null,A=an(k),re=e?Ro(e.name):``,j=!!e&&!e.isDirectory&&No.has(re),ie=!!e&&!e.isDirectory&&Po.has(re),ae=!!e&&!e.isDirectory&&Fo.has(re),M=!!e&&!e.isDirectory&&Io.has(re),N=!!e&&!e.isDirectory&&re===`pdf`,oe=un(j?A:null,512,e?.modified??0),se=dn(ae?A:null,e?.modified??0,re),P=dn(j||ie?A:null,e?.modified??0,re),ce=fn(N?A:null,e?.modified??0),le=rn(!j&&!ie&&!ae&&!M&&!N?A:null,e?.isDirectory??!1);if((0,D.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),S(!1)},[k]),(0,D.useEffect)(()=>{if(!A||!M){ee(null),x(!1);return}let e=!0;return x(!0),ee(null),U(A).then(t=>{e&&(ee(t),x(!1))},()=>{e&&(ee({text:null,truncated:!1,error:`Could not read this file.`}),x(!1))}),()=>{e=!1}},[A,M]),!e&&!s)return null;let I=e=>{T.current={x:e.clientX,width:w.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},L=e=>{let t=T.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},z=e=>{T.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},ue=e=>{E.current={y:e.clientY,height:ne},e.currentTarget.setPointerCapture(e.pointerId)},de=e=>{let t=E.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));O(n),Pn(`yafm.preview.media.height`,n)},fe=e=>{E.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,F.jsxs)(Bo,{children:[r&&(0,F.jsx)(Vo,{onPointerDown:I,onPointerMove:L,onPointerUp:z,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,F.jsx)(Ho,{ref:w,style:{width:r?t:0},children:(0,F.jsxs)(Uo,{children:[(0,F.jsx)(Jr,{size:56}),(0,F.jsx)(`span`,{children:s})]})})]});let pe=()=>{let e=C.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,F.jsxs)(Bo,{children:[r&&(0,F.jsx)(Vo,{onPointerDown:I,onPointerMove:L,onPointerUp:z,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(Ho,{ref:w,style:{width:r?t:0},children:[(0,F.jsx)(Wo,{style:{height:ne},children:j&&P&&!l?(0,F.jsxs)(Ko,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,F.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:pe,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:oe??void 0,preload:`metadata`,ref:C,src:P}),(0,F.jsx)(qo,{$visible:!d,onClick:pe,title:c(`Play`),type:`button`,children:(0,F.jsx)(Zi,{size:28})}),(0,F.jsxs)(Jo,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,F.jsxs)(Yo,{children:[(0,F.jsx)(`span`,{children:zo(_)}),(0,F.jsx)(`span`,{children:zo(h)})]}),(0,F.jsx)(Xo,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=C.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):ie&&P?(0,F.jsx)(`audio`,{controls:!0,src:P}):ae&&se?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:se}):N&&ce&&!te?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>S(!0),src:ce}):N?(0,F.jsx)(Yr,{size:64}):M?(0,F.jsx)(Zo,{children:b||!y?(0,F.jsx)($o,{children:c(`Loading…`)}):y.error?(0,F.jsx)($o,{children:y.error}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Qo,{children:y.text}),y.truncated&&(0,F.jsx)($o,{children:c(`Showing the first 256 KB.`)})]})}):j&&oe?(0,F.jsx)(`img`,{alt:``,src:oe}):le?(0,F.jsx)(`img`,{alt:``,src:le}):e.isDirectory?(0,F.jsx)(Jr,{size:64}):(0,F.jsx)(Yr,{size:64})}),(0,F.jsx)(Go,{onDoubleClick:()=>{O(210),Pn(`yafm.preview.media.height`,210)},onPointerDown:ue,onPointerMove:de,onPointerUp:fe,title:c(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(es,{children:[(0,F.jsx)(ts,{title:e.path,children:e.name}),o&&(0,F.jsx)(ns,{children:o}),(0,F.jsx)(rs,{children:e.fields.map(e=>(0,F.jsxs)(is,{children:[(0,F.jsx)(as,{children:e.label}),(0,F.jsx)(os,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Ro(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function zo(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Bo=i.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    min-width: 220px;
    min-height: 0;
`,Vo=i.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Ho=i.aside`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    background: var(--bg-secondary);
    font-family: var(--font-details), var(--font-cjk);
    transition: width 180ms cubic-bezier(0.22, 1, 0.36, 1);
`,Uo=i.div`
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
`,Wo=i.div`
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
`,Go=i.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Ko=i.div`
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
`,qo=i.button`
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
`,Jo=i.div`
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
`,Yo=i.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,Xo=i.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Zo=i.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,Qo=i.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,$o=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,es=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,ts=i.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,ns=i.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,rs=i.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,is=i.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,as=i.span`
    color: var(--text-muted);
`,os=i.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,ss=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],cs=[...ss],ls={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},us={folder:e=>(0,F.jsx)(Jr,{size:e}),home:e=>(0,F.jsx)(qr,{size:e}),desktop:e=>(0,F.jsx)(Ai,{size:e}),documents:e=>(0,F.jsx)(ji,{size:e}),downloads:e=>(0,F.jsx)(Mi,{size:e}),pictures:e=>(0,F.jsx)(Ni,{size:e}),music:e=>(0,F.jsx)(Pi,{size:e}),videos:e=>(0,F.jsx)(Fi,{size:e}),drive:e=>(0,F.jsx)(Xr,{size:e}),image:e=>(0,F.jsx)(gi,{size:e}),video:e=>(0,F.jsx)(_i,{size:e}),audio:e=>(0,F.jsx)(vi,{size:e}),text:e=>(0,F.jsx)(mi,{size:e}),code:e=>(0,F.jsx)(hi,{size:e}),clock:e=>(0,F.jsx)(ci,{size:e}),star:e=>(0,F.jsx)(Ii,{size:e}),file:e=>(0,F.jsx)(Yr,{size:e}),archive:e=>(0,F.jsx)(yi,{size:e}),pdf:e=>(0,F.jsx)(bi,{size:e}),executable:e=>(0,F.jsx)(xi,{size:e}),font:e=>(0,F.jsx)(Si,{size:e}),database:e=>(0,F.jsx)(Ci,{size:e}),config:e=>(0,F.jsx)(wi,{size:e}),spreadsheet:e=>(0,F.jsx)(Ti,{size:e}),presentation:e=>(0,F.jsx)(Ei,{size:e}),document:e=>(0,F.jsx)(Di,{size:e}),app:e=>(0,F.jsx)(pi,{size:e}),gear:e=>(0,F.jsx)(ii,{size:e}),pin:e=>(0,F.jsx)(ai,{size:e}),trash:e=>(0,F.jsx)(ui,{size:e}),overview:e=>(0,F.jsx)(Oi,{size:e}),book:e=>(0,F.jsx)(Li,{size:e}),briefcase:e=>(0,F.jsx)(Ri,{size:e}),cloud:e=>(0,F.jsx)(zi,{size:e}),gamepad:e=>(0,F.jsx)(Bi,{size:e}),camera:e=>(0,F.jsx)(Vi,{size:e}),terminal:e=>(0,F.jsx)(Hi,{size:e}),server:e=>(0,F.jsx)(Ui,{size:e}),package:e=>(0,F.jsx)(Wi,{size:e}),globe:e=>(0,F.jsx)(Gi,{size:e}),heart:e=>(0,F.jsx)(Ki,{size:e}),share:e=>(0,F.jsx)(Ui,{size:e}),favorites:e=>(0,F.jsx)(Ki,{size:e})};function ds(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function fs(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??ss)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||cs.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=ds(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${ls[n]??n}${ps(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function ps(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function ms({panel:e,size:t=16}){let n=on(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,F.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?us[e.icon]:void 0;if(r)return(0,F.jsx)(F.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,F.jsx)(Jr,{size:t});case`recent`:return(0,F.jsx)(ci,{size:t});case`frequent`:return(0,F.jsx)(Ii,{size:t});case`drives`:return(0,F.jsx)(Xr,{size:t});case`home`:return(0,F.jsx)(qr,{size:t});case`share`:return(0,F.jsx)(Ui,{size:t});case`favorites`:return(0,F.jsx)(Ki,{size:t});default:return(0,F.jsx)(Jr,{size:t})}}function hs({place:e,size:t=18}){let n=on(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,F.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&us[e.icon]?(0,F.jsx)(F.Fragment,{children:us[e.icon](t)}):(0,F.jsx)(Jr,{size:t})}var gs=`#64748b`;function _s(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function vs({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=R(),[c,l]=(0,D.useState)(``),[u,d]=(0,D.useState)(`#2dd4bf`),f=(0,D.useRef)(null);(0,D.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,xa.createPortal)((0,F.jsxs)(ys,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,F.jsxs)(bs,{children:[(0,F.jsx)(`span`,{children:s(`Tags`)}),(0,F.jsx)(xs,{onClick:o,title:s(`Close`),type:`button`,children:(0,F.jsx)(fi,{size:11})})]}),(0,F.jsxs)(Ss,{children:[p.length===0&&(0,F.jsx)(Es,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,F.jsxs)(Cs,{children:[(0,F.jsx)(ws,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,F.jsxs)(Ts,{$color:t,$ink:_s(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,F.jsx)(di,{size:11}),(0,F.jsx)(`span`,{children:e})]})]},e)})]}),(0,F.jsxs)(Ds,{children:[(0,F.jsx)(ws,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,F.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,F.jsx)(Os,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var ys=i.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${ja}
`,bs=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,xs=i.button`
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
`,Ss=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Cs=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,ws=i.input`
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
`,Ts=i.button`
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
`,Es=i.span`
    font-size: 11px;
    color: var(--text-muted);
`,Ds=i.div`
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
`,Os=i.button`
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
`,ks={file:Yr,folder:Jr,text:mi,code:hi,image:gi,video:_i,audio:vi,archive:yi,pdf:bi,executable:xi,font:Si,database:Ci,config:wi,spreadsheet:Ti,presentation:Ei,document:Di},As={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function js(e){let t=e.lastIndexOf(`.`);return t>0?As[e.slice(t).toLowerCase()]??`file`:`file`}function Ms({name:e,size:t}){let n=ks[e??`file`]??Yr;return(0,F.jsx)(n,{size:t})}function Ns({path:e,name:t,isDirectory:n,size:r=18}){let i=rn(e,n);return i?(0,F.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,F.jsx)(Jr,{size:r}):(0,F.jsx)(Ms,{name:js(t),size:r})}var Ps=`application/x-yafm-paths`,Fs=[Ps,`text/uri-list`];function Is(e){return e?.types.some(e=>Fs.includes(e.toLowerCase()))??!1}function Ls(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Ps);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(zs).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Rs=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function zs(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Rs?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Bs(e,t,n=!0){e.dataTransfer.setData(Ps,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Vs({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=R(),[m,h]=(0,D.useState)(()=>new Set),[g,_]=(0,D.useState)(!1),v=(0,D.useRef)(null),y=(0,D.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),ee=(0,D.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),b=(0,D.useRef)(null);if((0,D.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=b.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Is(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Ls(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let x=new Set([...e,...t].map(e=>e.path)),te=x.size>0&&[...x].every(e=>m.has(e)),S=x.size,C=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},w=()=>{h(te?new Set:x)},T=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},ne=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},O=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},k=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},A=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},re=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of ee)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},j=(e,t)=>{let n=m.has(e.path);return(0,F.jsxs)($s,{$checked:n,draggable:!0,onClick:()=>C(e.path),onDragStart:r=>{Bs(r,n&&m.size>0?[...new Set([...y,...ee].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,F.jsx)(ec,{$checked:n,onClick:t=>{t.stopPropagation(),C(e.path)},type:`button`,children:n&&(0,F.jsx)(di,{size:8})}),(0,F.jsx)(Ns,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,F.jsxs)(tc,{children:[(0,F.jsx)(nc,{children:e.name}),(0,F.jsx)(rc,{children:E(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},ie=e=>{Is(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,F.jsxs)(Hs,{$dragging:g,"data-tray":`true`,ref:b,style:{left:i.x,top:i.y},onDragEnter:ie,onDragOver:ie,onDrop:e=>{let{paths:t}=Ls(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,F.jsxs)(Us,{onPointerDown:T,onPointerMove:ne,onPointerUp:O,children:[(0,F.jsxs)(Ws,{children:[(0,F.jsx)(Wi,{size:13}),p(`Tray`),(0,F.jsx)(Gs,{children:S})]}),(0,F.jsxs)(Ks,{onPointerDown:e=>e.stopPropagation(),children:[(0,F.jsx)(qs,{onClick:w,title:p(te?`Select none`:`Select all`),type:`button`,children:p(te?`None`:`All`)}),(0,F.jsx)(qs,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,F.jsx)(Js,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,F.jsx)(fi,{size:10})})]})]}),(0,F.jsxs)(Ys,{children:[(0,F.jsxs)(Zs,{children:[p(`In this app`),(0,F.jsx)(Gs,{children:e.length})]}),e.length===0&&(0,F.jsx)(Xs,{children:p(`Drag files or folders here`)}),e.map(e=>j(e,!0)),t.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Zs,{$clipboard:!0,children:[p(`Clipboard`),(0,F.jsx)(Gs,{children:t.length}),n&&(0,F.jsx)(Qs,{children:p(`cut`)})]}),t.map(e=>j(e,n))]})]}),(0,F.jsxs)(ic,{children:[(0,F.jsx)(ac,{$plain:!0,disabled:y.length===0,onClick:A,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,F.jsx)(ac,{disabled:m.size===0||!a,onClick:re,type:`button`,children:p(`Move here`)}),(0,F.jsx)(ac,{$danger:!0,disabled:y.length===0,onClick:k,type:`button`,children:p(`Remove`)})]})]})}var Hs=i.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Sa}
    ${ja}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Us=i.div`
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
`,Ws=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,Gs=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Ks=i.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,qs=i.button`
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
`,Js=i.button`
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
`,Ys=i.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,Xs=i.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Zs=i.div`
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
`,Qs=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,$s=i.div`
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
`,ec=i.button`
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
`,tc=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,nc=i.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rc=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ic=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,ac=i.button`
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
`,oc=new Map,sc=new Set,cc=0;function lc(){cc+=1;for(let e of sc)e()}function uc(e,t){t?oc.set(e,t):oc.delete(e),lc()}function dc(e){return oc.has(e)}function fc(e,t,n){oc.get(e)?.(t,n)}function pc(e){return sc.add(e),()=>sc.delete(e)}function mc(){return cc}function hc(e){return(0,D.useSyncExternalStore)(pc,mc,mc),{available:dc(e),open:(t,n)=>fc(e,t,n)}}function gc(e){return[...oc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function _c(e){return(0,D.useSyncExternalStore)(pc,mc,mc),{available:gc(e).length>0,open:(t,n)=>{let r=gc(e).at(-1);r&&fc(r,t,n)}}}var vc=60,yc=300,bc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],xc=190,Sc=120;function Cc({listing:e,loading:t,error:n,find:r=mn,view:i,showImages:o,imageStripHeight:s=xc,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:f,onOpenFile:p,showCheckboxes:m=!0,openOnSingleClick:h=!1,shortcuts:g=Rt,enableShortcuts:y=!0,refreshToken:ee=0,onRefresh:b,onRename:x,onClipboardChanged:te,onTransfer:S,onAddToTray:C,onAddFavorite:w,onPaste:T,confirmDelete:E=!1,previewVideoAudio:ne=!1,previewVideoAutoplay:O=!1,showDetails:k=!0,onPreviewInfo:A,onActivate:re,groupOf:j,onGridScroll:ie,gridFooter:ae,allowBackgroundMenu:M=!0,readOnly:N=!1,onSelectionChange:oe,onSelectionCountChange:se,selectionMenuRequest:P,selectionMenuId:ce,singleSelect:le=!1,pendingRename:I=null,pendingRenameToken:L=0}){let z=R(),ue=An(),de=(0,D.useRef)(null),fe=(0,D.useRef)(null),pe=(0,D.useRef)(null),[B,me]=(0,D.useState)(yc),[V,he]=(0,D.useState)({top:0,height:640}),ge=(0,D.useRef)(null),H=(0,D.useRef)(null),[_e,ve]=(0,D.useState)(null),[ye,be]=(0,D.useState)(s),[xe,Se]=(0,D.useState)(()=>new Set),U=(0,D.useRef)(xe),Ce=(0,D.useRef)([]);U.current=xe,(0,D.useEffect)(()=>oe?.([...xe]),[xe,oe]),(0,D.useEffect)(()=>se?.(xe.size),[xe,se]),(0,D.useEffect)(()=>{let e=P;if(!e||e.token===Ee.current)return;Ee.current=e.token;let t=[...U.current];t.length!==0&&(Te({x:e.x,y:e.y,paths:t,background:!1}),ht().then(Be,()=>Be(!1)))},[P]);let[we,Te]=(0,D.useState)(null),Ee=(0,D.useRef)(0),[De,Oe]=(0,D.useState)(null),[ke,Ae]=(0,D.useState)(null),[je,Me]=(0,D.useState)(null),Ne=(0,D.useRef)(je);Ne.current=je;let Pe=(0,D.useRef)(0),Fe=(0,D.useRef)(re);Fe.current=re;let[Ie,Le]=(0,D.useState)(()=>{let e=Nn(`yafm.preview.width`,320);return e>=220?e:320}),Re=(0,D.useCallback)(e=>{Le(e),Pn(`yafm.preview.width`,e)},[]),[ze,Be]=(0,D.useState)(!1),Ve=(0,D.useCallback)((e,t)=>{let n=[...U.current];n.length!==0&&(Te({x:e,y:t,paths:n,background:!1}),ht().then(Be,()=>Be(!1)))},[]);(0,D.useEffect)(()=>{if(ce)return uc(ce,xe.size>0?Ve:null),()=>uc(ce,null)},[ce,xe,Ve]),(0,D.useEffect)(()=>{Se(new Set),Me(null),Te(null),H.current=null},[e?.path]),(0,D.useEffect)(()=>{be(s)},[s]),(0,D.useEffect)(()=>{Se(new Set),Me(null),H.current=null},[ee]);let He=e=>{ge.current={y:e.clientY,height:ye},e.currentTarget.setPointerCapture(e.pointerId)},Ue=e=>{let t=ge.current;if(!t)return;let n=Math.max(Sc,Math.round(window.innerHeight*.7));be(Math.min(n,Math.max(Sc,t.height+t.y-e.clientY)))},We=e=>{ge.current&&(ge.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(ye))},Ge=()=>{be(xc),c?.(xc)},Ke=r.query.length>0,qe=(0,D.useMemo)(()=>bc.filter(e=>i.columns?.includes(e.id)),[i.columns]),Je=i.columns?.includes(`linkTarget`)??!1,Ye=(0,D.useMemo)(()=>`minmax(160px, 1fr) ${qe.map(e=>`${e.width}px`).join(` `)}`.trim(),[qe]),Xe=(0,D.useMemo)(()=>e?Ec(e.entries.map(t=>{let n=t.isDirectory?jn(ue,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:Ke?hn(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!Ke||r.mode===`dim`||e.ranges!==null),i,e,z):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,Ke,r,ue,i.sort,i.sortDescending,z]);Ce.current=Xe;let Ze=Math.max(40,i.iconSize+20),Qe=Math.max(0,Math.floor(V.top/Ze)-4),$e=Math.min(Xe.length,Qe+Math.ceil(V.height/Ze)+10),et=(0,D.useMemo)(()=>Xe.slice(Qe,$e),[Xe,Qe,$e]);(0,D.useEffect)(()=>{let e=pe.current;if(!e||i.mode!==`list`)return;let t=()=>he(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,D.useEffect)(()=>{he(e=>({...e,top:0})),pe.current&&(pe.current.scrollTop=0)},[e?.path]),(0,D.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=Xe.findIndex(e=>e.entry.fullPath===r.currentPath),t=pe.current;if(e<0||!t)return;let n=e*Ze;(n<t.scrollTop||n+Ze>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else de.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,Xe,Ze]);let tt=(0,D.useMemo)(()=>Xe.slice(0,B),[Xe,B]);(0,D.useEffect)(()=>{me(yc)},[e?.path]),(0,D.useEffect)(()=>{if(!r.currentPath)return;let e=Xe.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&me(t=>Math.max(t,e+yc))},[r.currentPath,Xe]);let nt=(0,D.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&me(e=>Math.min(Xe.length,e+yc))},[Xe.length]),rt=i.mode===`grid`,it=(0,D.useMemo)(()=>{if(!rt)return[];if(!j)return kc(tt,Oc);let e=[],t=new Map;for(let n of tt){let r=j(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[tt,rt,j]),at=(0,D.useMemo)(()=>o?Xe.filter(e=>!e.entry.isDirectory&&En(e.entry.name)):[],[Xe,o]),ot=at.length,st=(0,D.useMemo)(()=>at.slice(0,vc),[at]),ct=(0,D.useMemo)(()=>o?kc(st,Dc):[],[st,o]),lt=(0,D.useMemo)(()=>Xe.map(e=>e.entry.fullPath),[Xe]),ut=Xe.length>0&&xe.size>=Xe.length,dt=xe.size>0&&!ut,ft=()=>{le||(ut?W():Se(new Set(lt)))},pt=e?.path??``,gt=(0,D.useCallback)((e,t)=>{if(le){H.current=t,Se(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Se(r=>{if(e.shiftKey&&H.current!==null){let e=lt.indexOf(H.current),i=lt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(lt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),H.current=t,e}return H.current=t,new Set([t])})},[lt,le]),_t=(0,D.useCallback)(e=>{le?(H.current=e,Se(new Set([e]))):(H.current=e,Se(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[le]),W=(0,D.useCallback)(()=>{H.current=null,Se(new Set)},[]);(0,D.useEffect)(()=>{if(L===0||!I||Pe.current===L||!e?.entries.some(e=>e.fullPath===I))return;Pe.current=L,H.current=I,Se(new Set([I])),Me({path:I,value:_(I)});let t=Xe.findIndex(e=>e.entry.fullPath===I),n=pe.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*Ze;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(I)}"]`)?.scrollIntoView({block:`nearest`})})}},[pe,e,I,L,Ze,Xe,i.mode]),(0,D.useEffect)(()=>{if(!je)return;let e=Xe.findIndex(e=>e.entry.fullPath===je.path),t=pe.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*Ze;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(je.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[pe,je,Ze,Xe,i.mode]);let St=(0,D.useCallback)(()=>Te(null),[]),Ct=(0,D.useCallback)((e,t)=>{e.isDirectory?f(e.fullPath,Vt(t)):p?.(e.fullPath,Vt(t))},[f,p]),wt=(0,D.useCallback)((e,t,n)=>{ve({entry:e,x:t,y:n})},[]),Dt=(0,D.useRef)(null),kt=(0,D.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Bs(e,xe.has(n)?[...xe]:[n])},[xe]),At=(0,D.useCallback)(e=>{if(!Is(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Dt.current=t?.dataset.directory===`true`?t.dataset.path??pt:pt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[pt]),jt=(0,D.useCallback)(e=>{if(N)return;let{paths:t,move:n}=Ls(e),r=Dt.current??pt;Dt.current=null,t.length!==0&&S&&(e.preventDefault(),S(t,r,!e.ctrlKey&&n))},[pt,S,N]),Mt=(0,D.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),N||!t&&!M)return;let n=U.current;t&&!n.has(t)&&Se(new Set([t])),t&&(H.current=t);let r=t?n.has(t)?[...n]:[t]:[];Te({x:e.clientX,y:e.clientY,paths:r,background:!t}),ht().then(Be,()=>Be(!1))},[M,pt]),Nt=(0,D.useCallback)(()=>b?.(),[b]),G=(e,t)=>{H.current=e,Se(new Set([e])),t&&Me({path:e,value:_(e)}),Nt()},Pt=De&&(0,F.jsx)(po,{initialDirectory:pt,initialName:De.name,onCancel:()=>Oe(null),onCompress:async e=>{let t=await Ft(De.paths,e);return!t.ok||!t.path?(la(t.error??z(`Could not create the archive.`)),!1):(G(t.path,!1),!0)}}),It=async(e,t=!1)=>{await mt(e,t)&&(Be(!0),te?.())},Lt=async e=>{e&&(await vt(e)?(Nt(),T?.()):la(z(`Nothing on the clipboard could be pasted here.`)))},zt=async(e,t=!1)=>{if(!pt)return;let n=e===null?await xt(pt,t):await Tt(pt,e);!n.ok||n.path===null?la(n.error??z(`Could not create the item.`)):(H.current=n.path,Se(new Set([n.path])),Me({path:n.path,value:_(n.path)}),Nt())},Bt=e=>{Se(new Set([e.fullPath])),H.current=e.fullPath,Me({path:e.fullPath,value:e.name})},Ut=(0,D.useCallback)(e=>Me(t=>t&&{...t,value:e}),[]),Wt=(0,D.useCallback)(()=>Me(null),[]),Kt=(0,D.useCallback)(async()=>{let e=Ne.current;if(Me(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Ce.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await bt(e.path,t);r.ok?(W(),r.path&&x?.(e.path,r.path),Nt(),window.setTimeout(()=>Nt(),250)):la(r.error??z(`Could not rename the entry.`))},[W,x,Nt,z]),qt=async(e,t=!1)=>{if((t||E)&&!await Jt(e,t))return;let n=await yt(e,t);if(!n.ok&&n.needsPermanent){if(!await Jt(e,!0))return;n=await yt(e,!0)}if(n.ok)W(),Nt();else{if(n.cancelled)return;la(n.error??z(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},Jt=(0,D.useCallback)((e,t)=>new Promise(n=>Ae({paths:e,permanent:t,resolve:n})),[]),Yt=(0,D.useCallback)(e=>{Ae(t=>(t?.resolve(e),null))},[]);(0,D.useEffect)(()=>{if(!y||we)return;let e=e=>{if(Gt(e.target))return;Fe.current?.();let t=Ht(e),n=[...xe],r=n.length===1?Xe.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(lt.length===0)return;e.preventDefault();let n=H.current&&lt.includes(H.current)?H.current:xe.size===1?[...xe][0]:null,r=n?lt.indexOf(n):-1,i=t===`home`?0:t===`end`?lt.length-1:Math.max(0,Math.min(lt.length-1,r+(t===`arrowdown`?1:-1))),a=lt[i];Se(new Set([a])),H.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===g.copy?i(()=>{n.length>0&&It(n)}):t===g.cut?i(()=>{n.length>0&&It(n,!0)}):t===g.paste?i(()=>void Lt(pt)):t===g.delete?i(()=>{n.length>0&&qt(n)}):t===g.deletePermanently?i(()=>{n.length>0&&qt(n,!0)}):t===g.selectAll?i(()=>{Se(new Set(lt)),H.current=lt[0]??null}):t===g.invertSelection?i(()=>{Se(new Set(lt.filter(e=>!xe.has(e)))),H.current=lt[0]??null}):t===g.rename&&r?i(()=>void Bt(r)):t===g.open&&r?i(()=>{r.isDirectory?f(r.fullPath):p?.(r.fullPath)}):t===g.newFolder||t===`f10`?i(()=>void zt(null)):t===g.terminal?i(()=>void Ot(pt)):t===g.properties?i(()=>void Et(n.length>0?n:pt?[pt]:[])):t===g.refresh&&i(Nt)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[lt,It,zt,pt,y,we,f,p,Lt,Nt,qt,Bt,Xe,xe,g]);let Xt=ke&&(0,F.jsx)(Eo,{confirmLabel:ke.permanent?z(`Delete`):z(`Move`),danger:ke.permanent,message:ke.permanent?z(`Permanently delete {target}? This cannot be undone.`,{target:ke.paths.length===1?z(`this item`):z(`{count} items`,{count:ke.paths.length})}):z(`Move {target} to the recycle bin?`,{target:ke.paths.length===1?z(`this item`):z(`{count} items`,{count:ke.paths.length})}),onCancel:()=>Yt(!1),onConfirm:()=>Yt(!0),open:!0,title:ke.permanent?z(`Delete permanently`):z(`Move to the recycle bin`)}),K=(0,D.useMemo)(()=>{if(!e||xe.size===0)return null;let t=lt.find(e=>xe.has(e));return t?Xe.find(e=>e.entry.fullPath===t)?.entry??null:null},[lt,e,Xe,xe]),Zt=(0,D.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:_(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:z(`Type`),value:z(`Folder`)},{label:z(`Location`),value:e.parent??`—`},{label:z(`Path`),value:e.path},{label:z(`Size`),value:d(t)},{label:z(`Items`),value:a(z,n,`1 item`,`{count} items`)},{label:z(`Modified`),value:`—`},{label:z(`Created`),value:`—`},{label:z(`Attributes`),value:`—`}]}},[e,z]),Qt=(0,D.useMemo)(()=>{if(!K||!e)return null;let t=K.isDirectory?e.folderSizes[K.name]:void 0,n=e.tags[K.name]??[],r=K.name.lastIndexOf(`.`),i=r>0&&r<K.name.length-1?K.name.slice(r+1).toUpperCase():`—`;return{name:K.name,path:K.fullPath,isDirectory:K.isDirectory,size:K.size,modified:K.modified,created:K.created,fields:[{label:z(`Type`),value:Mc(K,z)},...K.isEncrypted?[{label:z(`Encryption`),value:z(`Password required`)}]:[],{label:z(`Extension`),value:K.isDirectory?`—`:i},{label:z(`Location`),value:e.path},{label:z(`Full path`),value:K.fullPath},{label:z(`Size`),value:K.isDirectory?t===void 0?`—`:d(t):d(K.size)},...K.isDirectory?[{label:z(`Items`),value:`${e.counts[K.name]??`—`}`}]:[],{label:z(`Modified`),value:v(K.modified)},{label:z(`Created`),value:v(K.created)},{label:z(`Link status`),value:K.linkTarget==null?K.linkCount>1?z(`Hard link`):`—`:K.linkValid?`OK`:z(`Broken`)},...K.linkTarget?[{label:z(`Target`),value:K.linkTarget}]:[],...K.linkCount>1?[{label:z(`Links`),value:String(K.linkCount)}]:[],{label:z(`Attributes`),value:[K.isHidden?z(`Hidden`):``,K.isSystem?z(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:z(`Tags`),value:n.join(`, `)}]:[]]}},[e,K,z]),q=we?.paths.length===1?we.paths[0]:null,J=q?Xe.find(e=>e.entry.fullPath===q)?.entry:void 0,$t=J?{path:J.fullPath,isDirectory:J.isDirectory}:null,en=Qt??Zt,tn=(0,D.useRef)(A);tn.current=A,(0,D.useEffect)(()=>{tn.current?.(en)},[A,en]);let nn=k&&en&&(0,F.jsx)(Lo,{info:en,onWidth:Re,selectionNote:xe.size>1?a(z,xe.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:ne,videoAutoplay:O,width:Ie});return n&&!e?(0,F.jsx)(Nl,{children:(0,F.jsx)(Fl,{children:n})}):!e&&!t?(0,F.jsx)(Nl,{children:(0,F.jsx)(Pl,{children:z(`Nothing selected.`)})}):i.mode===`grid`?(0,F.jsxs)(Zc,{onPointerDown:re,children:[(0,F.jsxs)(Qc,{children:[(0,F.jsxs)(ol,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||W()},onContextMenu:e=>Mt(e),onDragOver:At,onDragStart:kt,onDrop:jt,onScroll:e=>{ie?.(e.currentTarget),nt(e.currentTarget)},children:[m&&Xe.length>0&&(0,F.jsxs)(Jc,{children:[(0,F.jsx)(Kc,{$checked:!le&&ut,$partial:!le&&dt,"aria-label":z(ut?`Select none`:`Select all`),disabled:le,onClick:ft,title:z(ut?`Select none`:`Select all`),type:`button`,children:ut?(0,F.jsx)(di,{size:10}):dt?(0,F.jsx)(qc,{}):null}),(0,F.jsx)(`span`,{children:z(ut?`Select none`:`Select all`)})]}),t&&!e?(0,F.jsx)(dl,{$size:i.gridSize,children:(0,F.jsx)(Rc,{size:i.gridSize})}):(0,F.jsx)(Bc,{counts:e?.counts,currentPath:Ke?r.currentPath:null,groups:it,gridSize:i.gridSize,innerRef:de,onContextMenu:Mt,onOpen:f,onOpenFile:p,onRenameCancel:Wt,onRenameChange:Ut,onRenameCommit:Kt,onSelect:gt,onToggle:_t,openOnSingleClick:h,renaming:je,searching:Ke,selected:xe,showCheckboxes:m,showTarget:Je}),!t&&e&&Xe.length===0&&(0,F.jsx)(Ml,{children:(0,F.jsx)(Pl,{children:n??(Ke&&r.mode===`hide`?z(`No entries match the search.`):z(`This folder is empty.`))})}),ae]}),we&&(0,F.jsx)(Xa,{canPaste:ze,directory:pt,allowCompression:!0,menu:we,onAddToTray:C,onAddFavorite:w,onArchiveCreated:G,onClose:St,onCompressTo:(e,t)=>Oe({paths:e,name:t}),onCopy:It,onCreateFile:e=>void zt(e),onCreateFolder:e=>void zt(null,e),onDelete:qt,onOpen:f,onOpenFile:p,onPaste:Lt,onRefresh:Nt,onRename:e=>{let t=Xe.find(t=>t.entry.fullPath===e)?.entry;t&&Bt(t)},shortcuts:g,target:$t}),Pt,Xt]}),nn]}):(0,F.jsxs)(Zc,{onPointerDown:re,children:[(0,F.jsxs)(Qc,{children:[(0,F.jsxs)($c,{onScroll:e=>{pe.current&&pe.current.scrollLeft!==e.currentTarget.scrollLeft&&(pe.current.scrollLeft=e.currentTarget.scrollLeft)},ref:fe,style:{gridTemplateColumns:Ye},children:[(0,F.jsxs)(Gc,{children:[m&&(0,F.jsx)(Kc,{$checked:!le&&ut,$partial:!le&&dt,"aria-label":z(ut?`Select none`:`Select all`),disabled:le,onClick:e=>{e.stopPropagation(),ft()},title:z(ut?`Select none`:`Select all`),type:`button`,children:ut?(0,F.jsx)(di,{size:10}):dt?(0,F.jsx)(qc,{}):null}),(0,F.jsxs)(el,{onClick:()=>l(`name`),type:`button`,children:[z(`Name`),wc(i,`name`)]})]}),qe.map(e=>(0,F.jsxs)(el,{onClick:()=>l(e.id),type:`button`,children:[z(e.label),wc(i,e.id)]},e.id))]}),(0,F.jsxs)(tl,{onClick:e=>{e.target===e.currentTarget&&W()},onContextMenu:e=>Mt(e),onDragOver:At,onDragStart:kt,onDrop:jt,onScroll:e=>{fe.current&&fe.current.scrollLeft!==e.currentTarget.scrollLeft&&(fe.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;he(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:pe,children:[t&&!e?(0,F.jsx)(Lc,{template:Ye,columns:qe.length}):(0,F.jsxs)(F.Fragment,{children:[Qe>0&&(0,F.jsx)(`div`,{style:{height:Qe*Ze}}),et.map(t=>{let n=t.entry.fullPath;return(0,F.jsx)(Hc,{current:Ke&&n===r.currentPath,dim:Ke&&t.ranges===null,height:Ze,iconSize:i.iconSize,innerRef:de,listing:e,onContextMenu:Mt,onOpen:Ct,onRenameCancel:Wt,onRenameChange:Ut,onRenameCommit:Kt,onSelect:gt,onTagEdit:wt,onToggle:_t,openOnSingleClick:h,renaming:je?.path===n?{value:je.value}:null,row:t,selected:xe.has(n),showCheckboxes:m,showTarget:Je,template:Ye,visible:qe},n)}),$e<Xe.length&&(0,F.jsx)(`div`,{style:{height:(Xe.length-$e)*Ze}})]}),!t&&e&&Xe.length===0&&(0,F.jsx)(Nl,{children:(0,F.jsx)(Pl,{children:n??(Ke&&r.mode===`hide`?z(`No entries match the search.`):z(`This folder is empty.`))})})]}),o&&at.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(nl,{onDoubleClick:Ge,onPointerDown:He,onPointerMove:Ue,onPointerUp:We,title:z(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(rl,{style:{height:ye},children:[(0,F.jsxs)(il,{children:[z(`Preview`),(0,F.jsx)(al,{children:ot>vc?`${st.length} / ${ot}`:ot})]}),(0,F.jsx)(ol,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||W()},onContextMenu:e=>Mt(e),children:(0,F.jsx)(Bc,{counts:e?.counts,currentPath:Ke?r.currentPath:null,groups:ct,gridSize:i.gridSize,onContextMenu:Mt,onOpen:f,onOpenFile:p,onSelect:gt,onToggle:_t,openOnSingleClick:h,searching:Ke,selected:xe,showCheckboxes:m,showTarget:Je})})]})]}),_e&&e&&(0,F.jsx)(vs,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(_e.entry.name,e,t),onClose:()=>ve(null),tags:e.tags[_e.entry.name]??[],x:_e.x,y:_e.y}),we&&(0,F.jsx)(Xa,{canPaste:ze,directory:pt,allowCompression:!0,menu:we,onAddToTray:C,onAddFavorite:w,onArchiveCreated:G,onClose:St,onCompressTo:(e,t)=>Oe({paths:e,name:t}),onCopy:It,onCreateFile:e=>void zt(e),onCreateFolder:e=>void zt(null,e),onDelete:qt,onOpen:f,onOpenFile:p,onPaste:Lt,onRefresh:Nt,onRename:e=>{let t=Xe.find(t=>t.entry.fullPath===e)?.entry;t&&Bt(t)},shortcuts:g,target:$t}),Pt,Xt]}),nn]})}function wc(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Tc=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Ec(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Mc(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Tc.compare(String(r),String(i));return t.sortDescending?-o:o})}var Dc=Cn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Tn(t.entry.name)===e})),Oc=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Dc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function kc(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Ac(e){return Math.max(24,Math.min(e-56,160))}var jc={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Mc(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(jc[js(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Nc(e,t,n,r){switch(e){case`type`:return Mc(t,r);case`size`:return Fc(t,n.folderSizes);case`modified`:return v(t.modified);case`created`:return v(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Pc({name:e,ranges:t}){if(!t||t.length===0)return(0,F.jsx)(F.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,F.jsx)(jl,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,F.jsx)(F.Fragment,{children:n})}function Fc(e,t){if(!e.isDirectory)return d(e.size);let n=t[e.name];return n===void 0?`—`:d(n)}function Ic({entry:e,size:t=18}){let n=R(),r=(0,D.useRef)(null),[i,a]=(0,D.useState)(!1);(0,D.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=rn(i?e.fullPath:null,e.isDirectory,t>32),s=on(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,F.jsxs)(Uc,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,F.jsx)(Ms,{name:e.iconSource.slice(5),size:t}):s?(0,F.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,F.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,F.jsx)(Jr,{size:t}):(0,F.jsx)(Ms,{name:js(e.name),size:t}),e.isEncrypted&&(0,F.jsx)(Wc,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,F.jsx)(ta,{size:Math.max(8,Math.round(t*.52))})})]})}function Lc({template:e,columns:t}){return(0,F.jsx)(F.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,F.jsxs)(fl,{style:{gridTemplateColumns:e},children:[(0,F.jsxs)(hl,{children:[(0,F.jsx)(pl,{style:{flexShrink:0,height:18,width:18}}),(0,F.jsx)(pl,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,F.jsx)(pl,{style:{width:t%2==0?44:92}},t))]},r))})}function Rc({size:e}){return(0,F.jsx)(F.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,F.jsxs)(Tl,{$dim:!1,$current:!1,$selected:!1,children:[(0,F.jsx)(El,{children:(0,F.jsx)(pl,{style:{height:e,width:e}})}),(0,F.jsx)(Ol,{children:(0,F.jsx)(pl,{style:{height:9,width:`${t}%`}})})]},n))})}var zc=(0,D.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let ee=R(),b=An(),x=!e.entry.isDirectory&&En(e.entry.name),te=(0,D.useRef)(null),[S,C]=(0,D.useState)(!1);(0,D.useEffect)(()=>{if(!x||S)return;let e=te.current;if(!e)return;if(!(`IntersectionObserver`in window)){C(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(C(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[x,S]);let w=un(x&&S?e.entry.fullPath:null,192,e.entry.modified),[T,E]=(0,D.useState)(!1),ne=e.entry.fullPath,O=t=>{e.entry.isDirectory?v(ne,Vt(t)):y?.(ne,Vt(t))};return(0,F.jsxs)(Tl,{$current:t,$dim:n,$selected:s,onClick:e=>{h(e,ne),l&&O(e)},onContextMenu:e=>_(e,ne),onDoubleClick:e=>{l||O(e)},ref:e=>{te.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":ne,draggable:!u,children:[c&&(0,F.jsx)(Xc,{$checked:s,onClick:e=>{e.stopPropagation(),g(ne)},onDoubleClick:e=>e.stopPropagation(),title:ee(s?`Deselect`:`Select`),type:`button`,children:s&&(0,F.jsx)(di,{size:10})}),(0,F.jsx)(El,{children:x&&w&&!T?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>E(!0),src:w}):(0,F.jsx)(Dl,{children:e.place&&b.useIcons?(0,F.jsx)(hs,{place:e.place,size:r}):(0,F.jsx)(Ic,{entry:e.entry,size:r})})}),(0,F.jsxs)(Ol,{children:[u?(0,F.jsx)(Vc,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:u.value}):(0,F.jsx)(kl,{$broken:e.entry.linkValid===!1,children:(0,F.jsx)(Pc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,F.jsxs)(_l,{title:ee(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(ta,{size:9}),ee(`Encrypted`)]}),(0,F.jsx)(Al,{children:e.entry.isDirectory?i===void 0?Mc(e.entry,ee):ee(`{type} · {count} items`,{type:Mc(e.entry,ee),count:i}):ee(`{type} · {size}`,{type:Mc(e.entry,ee),size:d(e.entry.size)})}),a&&e.entry.linkTarget&&(0,F.jsxs)(yl,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,F.jsx)(na,{size:9}),(0,F.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Bc({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=R();return(0,F.jsx)(F.Fragment,{children:e.map(e=>(0,F.jsxs)(sl,{children:[(0,F.jsxs)(cl,{children:[y(e.label),(0,F.jsx)(ll,{children:e.rows.length}),(0,F.jsx)(ul,{})]}),(0,F.jsx)(dl,{$size:t,children:e.rows.map(e=>(0,F.jsx)(zc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Ac(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Vc({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,D.useRef)(null);return(0,D.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,F.jsx)(vl,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Hc=(0,D.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:ee,onRenameCancel:b}){let x=R(),te=An(),S=e.entry.fullPath;return(0,F.jsxs)(ml,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,S),o&&_(e.entry,t)},onContextMenu:e=>g(e,S),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":S,draggable:!p,children:[(0,F.jsxs)(hl,{children:[i&&(0,F.jsx)(Yc,{$checked:r,onClick:e=>{e.stopPropagation(),h(S)},onDoubleClick:e=>e.stopPropagation(),title:x(r?`Deselect`:`Select`),type:`button`,children:r&&(0,F.jsx)(di,{size:10})}),e.place&&te.useIcons?(0,F.jsx)(Uc,{children:(0,F.jsx)(hs,{place:e.place,size:s})}):(0,F.jsx)(Ic,{entry:e.entry,size:s}),p?(0,F.jsx)(Vc,{onCancel:b,onChange:y,onCommit:ee,value:p.value}):(0,F.jsx)(gl,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,F.jsx)(Pc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,F.jsxs)(_l,{title:x(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(ta,{size:9}),x(`Encrypted`)]}),a&&e.entry.linkTarget&&(0,F.jsxs)(yl,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,F.jsx)(na,{size:9}),(0,F.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,F.jsx)(bl,{children:t.id===`tags`?(0,F.jsx)(xl,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:x(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,F.jsx)(Sl,{$color:t,$ink:_s(t),children:e},e)}):(0,F.jsx)(Cl,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,F.jsx)(wl,{children:x(`Broken`)}):Nc(t.id,e.entry,d,x)},t.id))]})}),Uc=i.span`
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
`,Wc=i.span`
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
`,Gc=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Kc=i.button`
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
`,qc=i.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Jc=i.div`
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
`,Yc=i.button`
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
`,Xc=i(Yc)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Zc=i.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Qc=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,$c=i.div`
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
`,el=i.button`
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
`,tl=i.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,nl=i.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,rl=i.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,il=i.div`
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
`,al=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,ol=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,sl=i.section`
    & + & {
        margin-top: 22px;
    }
`,cl=i.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ll=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,ul=i.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,dl=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,fl=i.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,pl=i.span`
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
`,ml=i.div`
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
`,hl=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,gl=i.span`
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,_l=i.span`
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
`,vl=i.input`
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
`,yl=i.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    overflow: hidden;
    min-width: 0;
    max-width: ${({$block:e})=>e?`100%`:`min(60%, 420px)`};
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
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`,bl=i.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,xl=i.button`
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
`,Sl=i.span`
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
`,Cl=i.span`
    color: var(--text-muted);
    font-size: 11px;
`,wl=i.span`
    color: #fca5a5;
`,Tl=i.div`
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
`,El=i.div`
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
`,Dl=i.span`
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
`,Ol=i.div`
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
`,kl=i.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Al=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,jl=i.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Ml=i.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Nl=i.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Pl=i.p`
    font-size: 13px;
    color: var(--text-muted);
`,Fl=i.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Il=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Ll=`/assets/bloom-BpfZWiaG.mp4`,Rl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,zl=`/assets/drift-BRBSQL2_.mp4`,Bl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Vl=`/assets/ember-CtSz0YxR.mp4`,Hl=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],Ul=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],Wl=[{id:`builtin:video:drift`,name:`Drift`,url:zl,poster:Rl},{id:`builtin:video:ember`,name:`Ember`,url:Vl,poster:Bl},{id:`builtin:video:bloom`,name:`Bloom`,url:Ll,poster:Il}],Gl=Ul.map(e=>({...e,variants:Hl.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Zl(Ql(e.id,t))}))})),Kl=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>Hl.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Zl($l(e.id,t))}))),ql=new Map([...Gl.flatMap(e=>e.variants),...Kl].map(e=>[e.id,e])),Jl=new Map(Wl.map(e=>[e.id,e]));function Yl(e){if(ql.has(e))return ql.get(e).url;if(Jl.has(e))return Jl.get(e).url;let t=e.split(`:`)[1];return t?ql.get(`builtin:${t}:indigo`)?.url??null:null}function Xl(e){return Jl.has(e)}function Zl(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function Ql(e,t){return e===`dunes`?ou(t):e===`tide`?su(t):au(t)}function $l(e,t){return e===`skyline`?tu(t):e===`orbit`?nu(t):eu(t)}function eu({accent:e,secondary:t}){let n=iu(t,`#05070f`,.86),r=iu(e,`#0b1020`,.72),i=iu(t,`#0a0f1d`,.66),a=iu(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${iu(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${iu(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function tu({accent:e,secondary:t}){let n=iu(t,`#07040d`,.84),r=iu(e,`#100716`,.7),i=iu(e,`#08050e`,.82),a=iu(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${iu(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function nu({accent:e,secondary:t}){let n=iu(e,`#03050d`,.9),r=iu(t,`#05030c`,.94),i=iu(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${iu(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${iu(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${iu(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${iu(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function ru(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function iu(e,t,n){let[r,i,a]=ru(e),[o,s,c]=ru(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function au({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${iu(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${iu(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${iu(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${iu(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function ou({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${iu(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${iu(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${iu(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${iu(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${iu(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${iu(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${iu(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function su({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${iu(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${iu(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${iu(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${iu(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var cu=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function lu(e){return cu.test(e)}function uu({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):w(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=dn(r),a=t?.startsWith(`builtin:`)?Yl(t):n??i,o=n===null?r===null?t!==null&&Xl(t):lu(r):lu(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,F.jsxs)(du,{"aria-hidden":!0,children:[o?(0,F.jsx)(pu,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,F.jsx)(fu,{src:a,style:{filter:s}}),(0,F.jsx)(mu,{})]})}var du=i.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,fu=i.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,pu=i.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,mu=i.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
        radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function hu({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=R(),o=(0,D.useRef)(null),[s,c]=(0,D.useState)(()=>Math.max(1,Math.ceil(t)));return(0,D.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,xa.createPortal)((0,F.jsx)(gu,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,F.jsxs)(_u,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(vu,{children:a(`Protected folder`)}),(0,F.jsx)(yu,{children:a(`These paths are protected by the safety settings:`)}),(0,F.jsx)(bu,{children:e.map(e=>(0,F.jsxs)(xu,{children:[(0,F.jsx)(Su,{children:e.path}),(0,F.jsx)(Cu,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,F.jsx)(wu,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,F.jsx)(Tu,{children:a(`Nothing has been deleted.`)}),(0,F.jsx)(Eu,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,F.jsxs)(Du,{children:[(0,F.jsx)(Ou,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,F.jsx)(ku,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var gu=i.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ia}
`,_u=i.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${ja}
`,vu=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,yu=i.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,bu=i.div`
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
`,xu=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Su=i.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Cu=i.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,wu=i.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Tu=i.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Eu=i.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Du=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Ou=i.button`
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
`,ku=i.button`
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
`;function Au(){let e=R(),[t,n]=(0,D.useState)(null),r=(0,D.useRef)(null),i=(0,D.useRef)(null);(0,D.useEffect)(()=>(ca(e=>new Promise(t=>{r.current=t,n(e)})),()=>ca(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,D.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,xa.createPortal)((0,F.jsx)(ju,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,F.jsxs)(Mu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(Nu,{children:e(`Notice`)}),(0,F.jsx)(Pu,{children:t}),(0,F.jsx)(Fu,{children:(0,F.jsx)(Iu,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var ju=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ia}
`,Mu=i.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${ja}
`,Nu=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Pu=i.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Fu=i.div`
    display: flex;
    justify-content: flex-end;
`,Iu=i.button`
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
`;function Lu(){let e=R(),[t,n]=(0,D.useState)(null),[r,i]=(0,D.useState)(``),a=(0,D.useRef)(null),o=(0,D.useRef)(null);(0,D.useEffect)(()=>(ua((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>ua(null)),[]),(0,D.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,xa.createPortal)((0,F.jsx)(Ru,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,F.jsxs)(zu,{role:`dialog`,"aria-modal":`true`,children:[(0,F.jsx)(Bu,{children:e(`Archive password`)}),(0,F.jsx)(Vu,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,F.jsx)(Hu,{title:t.archive,children:t.archive}),(0,F.jsx)(Uu,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,F.jsxs)(Wu,{children:[(0,F.jsx)(Gu,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,F.jsx)(Ku,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var Ru=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ia}
`,zu=i.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${ja}
`,Bu=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Vu=i.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Hu=i.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Uu=i.input`
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
`,Wu=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Gu=i.button`
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
`,Ku=i(Gu)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function qu({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h}){let g=R(),_=(0,D.useRef)(null),v=c??g(`Search this folder`);(0,D.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,F.jsxs)(Ju,{children:[(0,F.jsx)(Zr,{}),(0,F.jsx)(Yu,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Xu,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,F.jsx)(Zu,{onClick:()=>y(u),title:g(`Previous match (Shift+Enter)`),type:`button`,children:(0,F.jsx)(ri,{size:12})}),(0,F.jsx)(Zu,{$down:!0,onClick:()=>y(d),title:g(`Next match (Enter)`),type:`button`,children:(0,F.jsx)(ri,{size:12})})]}),(0,F.jsx)(Qu,{$on:n,onClick:()=>y(f),title:g(`Match case`),type:`button`,children:`Aa`}),(0,F.jsx)(Qu,{$on:r,onClick:()=>y(p),title:g(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,F.jsx)($u,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:g(t===`hide`?`Hide`:`Dim`)}),(0,F.jsx)(Zu,{onClick:h,title:g(`Close search (Esc)`),type:`button`,children:(0,F.jsx)(fi,{size:12})})]})}var Ju=i.div`
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
    ${Pa}
`,Yu=i.input`
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
`,Xu=i.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Zu=i.button`
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
`,Qu=i.button`
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
`,$u=i(Qu)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function ed(e,t,n,r,i=[]){(0,D.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=hn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function td({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=R(),a=(0,D.useRef)(null),o=(0,D.useRef)(null),[s,c]=(0,D.useState)(null);return(0,D.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,D.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,D.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,xa.createPortal)((0,F.jsxs)(nd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(us).map(n=>(0,F.jsx)(rd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:us[n](16)},n)),(0,F.jsx)(rd,{onClick:async()=>{let e=await aa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,F.jsx)(ei,{size:13})}),r&&(0,F.jsx)(rd,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,F.jsx)(fi,{size:12})})]}),document.body)]})}var nd=i.div`
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
    ${Ma}
    transform-origin: top left;
`,rd=i.button`
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
`,id={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function ad(){return P.available?await P.request(`share.list`):id}async function od(e,t){return P.available?await P.request(`share.add`,{path:e,mode:t}):id}async function sd(e){return P.available?await P.request(`share.remove`,{id:e}):id}async function cd(e,t){return P.available?await P.request(`share.mode`,{id:e,mode:t}):id}async function ld(){return P.available?(await P.request(`share.peers.refresh`)).peers??[]:[]}async function ud(e,t){P.available&&await P.request(`share.pair.start`,{host:e,port:t})}async function dd(e,t){P.available&&await P.request(`share.pair.respond`,{requestId:e,accept:t})}async function fd(e,t){P.available&&await P.request(`share.port`,{mode:t,port:e})}var pd=`share://`;function md(e){return e.toLowerCase().startsWith(pd)}function hd(e){if(!md(e))return null;let[t,n,...r]=e.slice(8).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function gd(e,t,n=``){let r=`${pd}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function _d(e){let t=hd(e);if(!t||!P.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await P.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:gd(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:gd(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function vd(e){let t=hd(e);if(!t||!P.available)throw Error(`This shared file is only available in the desktop app.`);let n=await P.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function yd(e){await ye(await vd(e))}function bd({source:e,poster:t}){let n=w(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=dn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??Yl(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,F.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,F.jsx)(`img`,{alt:``,src:a}):null}function xd({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=R(),s=(0,D.useRef)(null),c=(0,D.useRef)(null),l=(0,D.useRef)(!1),[u,d]=(0,D.useState)(null),[f,p]=(0,D.useState)(null),[m,h]=(0,D.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,D.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,D.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,D.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},ee=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},b=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,F.jsx)(Hd,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,F.jsxs)(Ud,{children:[(0,F.jsxs)(Wd,{children:[(0,F.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,F.jsx)(Zd,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,F.jsx)(fi,{size:12})})]}),(0,F.jsx)(Gd,{children:o(`Drag the frame to choose the visible part.`)}),(0,F.jsxs)(Kd,{children:[t?(0,F.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,F.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,F.jsx)(qd,{onPointerCancel:b,onPointerDown:y,onPointerMove:ee,onPointerUp:b,style:{height:_,top:m},children:(0,F.jsx)(Jd,{})})]}),(0,F.jsxs)(Yd,{children:[(0,F.jsx)(Xd,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,F.jsx)(Xd,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var Sd=150,Cd=120,wd=200,Td=i.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Ed=i.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Dd=i.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${wd}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
        #000 0,
        #000 calc(100% - ${wd}px),
        rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(wd*.72)}px),
        rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(wd*.44)}px),
        rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(wd*.18)}px),
        transparent 100%);
    mask-image: linear-gradient(to bottom,
        #000 0,
        #000 calc(100% - ${wd}px),
        rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(wd*.72)}px),
        rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(wd*.44)}px),
        rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(wd*.18)}px),
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
`,Od=i.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Sd}px);
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
`,kd=i.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$overlap:e})=>e?`-${e}px`:`0`};
`,Ad=i.section`
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
`,jd=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Md=i.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Nd=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Pd=i.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Fd=i.input`
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
`,Id=i.button`
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
`,Ld=i.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Rd=i.button`
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
`,zd=i.button`
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
`,Bd=i.span`
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
`,Vd=i.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Hd=i.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Ud=i.div`
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
`,Wd=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Gd=i.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,Kd=i.div`
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
`,qd=i.div`
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
`,Jd=i.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,Yd=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Xd=i.button`
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
`,Zd=i.button`
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
`,Qd=i.button`
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
`,$d=i.div`
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
`,ef=i.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,tf=i.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,nf=i.button`
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
`,rf=i.div`
    position: relative;
    display: inline-flex;
`,af=i.div`
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
`,of=i.button`
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
`,sf=i.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,cf=i.section`
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
`,lf=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,uf=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,df=i.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,ff=i.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,pf=i.input`
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
`,mf=i.button`
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
`,hf=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,gf=i.div`
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
`,_f=i.span`
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
`,vf=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,yf=i.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,bf=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,xf=i.button`
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
`,Sf=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Cf=i.button`
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
`,wf=i.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Tf=i.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Ef=i.div`
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
`,Df=i.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Of=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,kf=i.button`
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
`,Af=i.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,jf=i.button`
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
`,Mf=i.button`
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
`,Nf=i.button`
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
`,Pf=i.span`
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
`,Ff=i.button`
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
`,If=i.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,Lf=i.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,Rf=i.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,zf=i.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Bf=i.input`
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
`,Vf=i.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Hf=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Uf=i.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wf=i.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,Gf=i.button`
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
`;function Kf({places:e,drives:n,recent:r,recentLimit:i,homePath:o,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:f,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:v,onSearchMatches:y,readOnly:ee=!1,onPick:b,onSelectionChange:x,onAddToTray:te,onAddFavorite:S,settingsVersion:T=0}){let E=R(),ne=An(),[O,k]=(0,D.useState)(!1),[A,re]=(0,D.useState)(null),j=A?.overviewBanner??null,ie=j?.startsWith(`builtin:`)??!1,ae=j?.startsWith(`url:`)?j.slice(4):w(j)?j:null,M=ie||ae?``:j??``,N=ie?``:ae?ae.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:M.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,oe=ie?Xl(j):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(N),se=dn(M.length>0?M:null,0,N?`.${N}`:``),ce=j?Yl(j)??ae??se:null,[le,I]=(0,D.useState)(``),[L,z]=(0,D.useState)(null),[ue,de]=(0,D.useState)(!1),[fe,pe]=(0,D.useState)(null),[B,me]=(0,D.useState)(null),[V,he]=(0,D.useState)(null),[ge,H]=(0,D.useState)([]),[_e,be]=(0,D.useState)(null),[xe,Se]=(0,D.useState)(``),[U,Ce]=(0,D.useState)(null),[we,Te]=(0,D.useState)(null),De=_c(`overview`),[Oe,ke]=(0,D.useState)(null),[Ae,je]=(0,D.useState)(null),Me=(0,D.useRef)(null),Ne=(0,D.useRef)(null),Pe=(0,D.useRef)(null),Fe=(0,D.useRef)(null),Ie=(0,D.useRef)(null),Le=Ae??A?.overviewBannerHeight??220,Re=(0,D.useRef)(Le);Re.current=Le;let[ze,He]=(0,D.useState)(0),[Ue,We]=(0,D.useState)(null),Ge=Math.min(1,Math.max(0,A?.overviewBannerOffset??.3)),qe=Le+wd,Je=Ue&&ze>0?Ue.height*(ze/Ue.width):qe,Ye=Je>0&&Je<qe+240?(qe+240)/Je:1,Xe=Math.max(1,Math.round(ze*Ye)),Ze=Math.max(0,Je*Ye-qe),Qe=Math.min(Cd,Ze/2,Math.max(20,Le*.42)),et=Qe+Ge*Math.max(0,Ze-Qe*2),tt=Math.round(Math.min(70,Le*.1)),[nt,rt]=(0,D.useState)(!1),it=(e,t=!1)=>b?(Ce(e),Te({path:e,isDirectory:t}),x?.([e]),!0):!1,at=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),Ce(t),Te({path:t,isDirectory:n}),ke({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,D.useEffect)(()=>(uc(`overview`,we?(e,t)=>ke({x:e,y:t,target:we}):null),()=>uc(`overview`,null)),[we]);let ot=(e,t)=>c(e,t);(0,D.useEffect)(()=>{Ke().then(re,()=>re(null))},[T]),(0,D.useEffect)(()=>{if(P.available)return ld().then(H,()=>void 0),P.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&H(t.data.peers)})},[]),(0,D.useEffect)(()=>{let e=Pe.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.min(e.scrollTop/Math.max(Re.current,1),1);e.style.setProperty(`--banner-progress`,`${n}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,D.useEffect)(()=>{if(ie&&!oe){We({width:1920,height:1080});return}We(null);let e=Ie.current;e?.complete&&e.naturalWidth>0&&We({width:e.naturalWidth,height:e.naturalHeight})},[j,ie,oe]),(0,D.useEffect)(()=>{let e=Fe.current;if(!e)return;let t=()=>He(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[A?.overviewBanner]),(0,D.useEffect)(()=>{if(!L)return;let e=()=>z(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||z(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[L]),(0,D.useEffect)(()=>{if(!ue)return;let e=()=>de(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[ue]);let st=fs(A),ct=st.map(e=>e.id),lt=(0,D.useRef)(null),ut=e=>L?.kind===`panel`&&L.id===e,dt=e=>L?.kind===`place`&&L.id===e;(0,D.useEffect)(()=>{if(!P.available)return;let e=st.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??o).filter(e=>e.length>0);P.send({type:`fs.watch`,payload:{paths:e}})},[st.map(e=>e.path??e.id).join(`|`),o]),ed(lt,v??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let ft=async(e,t)=>{let n={...A?.placeIcons};t?n[e]=t:delete n[e],z(null),await W({placeIcons:n}),l(await Ee())},pt=async(e,t)=>{let n={...A?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],me(null),await W({placeNames:n}),l(await Ee())},ht=e=>{he(null),pe({drive:e,label:e.label||`Local Disk`})},gt=async()=>{if(!fe)return;let{drive:e,label:t}=fe;pe(null);let n=await ve(e.name,t.trim());n.ok?(he(null),h?.()):he(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},_t=A?.overviewColumns??1,W=async e=>{if(!A)return;let t={...A,...e,overviewPanels:e.overviewPanels??ct,overviewHidden:[]};re(await $e(t)),p?.()},vt=async()=>{let e=await aa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=A?.overviewBanners??[];await W({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},yt=async()=>{let e=le.trim();if(!A||!w(e))return;let t=A.overviewBanners??[];I(``),await W({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},bt=()=>void W({overviewBanner:null}),xt=e=>void W({overviewBanners:(A?.overviewBanners??[]).filter(t=>t!==e),...A?.overviewBanner===e||A?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),St=e=>{Me.current={y:e.clientY,height:Le},e.currentTarget.setPointerCapture(e.pointerId)},Ct=e=>{let t=Me.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Ne.current=n,je(n)},wt=e=>{Me.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Ne.current!==null&&(W({overviewBannerHeight:Ne.current}),Ne.current=null)},Tt=(e,t)=>{let n=ct.indexOf(e),r=n+t;if(n<0||r<0||r>=ct.length)return;let i=[...ct];[i[n],i[r]]=[i[r],i[n]],W({overviewPanels:i})},Et=(e,t)=>{let n={...A?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],W({overviewTitles:n})},Dt=(e,t)=>void W({overviewViews:{...A?.overviewViews,[e]:t}}),Ot=e=>{let t=A?.overviewPinned??st.filter(e=>e.pinned).map(e=>e.id);W({overviewPinned:st.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},kt=e=>{z(null);let t=t=>{let n={...t};return delete n[e],n},n=A?.overviewPinned??st.filter(e=>e.pinned).map(e=>e.id);W({overviewPanels:ct.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(A?.overviewTitles),overviewViews:t(A?.overviewViews),overviewIcons:t(A?.overviewIcons),panelPlaces:t(A?.panelPlaces)})},At=(e,t)=>{let n={...A?.overviewIcons};t?n[e]=t:delete n[e],z(null),W({overviewIcons:n})},jt=async e=>{if(!A)return;if(e===`folder`){let e=await ia();if(!e)return;let t=`folder:${e}`;ct.includes(t)||await W({overviewPanels:[...ct,t]});return}if(e===`quick`){let e=2;for(;ct.includes(`quick:${e}`);)e+=1;await W({overviewPanels:[...ct,`quick:${e}`]});return}let t=e;for(let n=2;ct.includes(t);n+=1)t=`${e}:${n}`;await W({overviewPanels:[...ct,t]})},Mt=async t=>{let n=await ia();if(!n)return;if(t.id===`quick`){await W({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),l(await Ee());return}let r=t.places??[];r.some(e=>Jf(e,n))||await W({panelPlaces:{...A?.panelPlaces,[t.id]:[...r,n]}})},Nt=async(t,n)=>{z(null),t.id===`quick`?(await W({quickAccess:e.filter(e=>!Jf(e.path,n)).map(e=>e.path)}),l(await Ee())):await W({panelPlaces:{...A?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!Jf(e,n))}})},G=async(t,n,r)=>{if(Jf(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>Jf(e,n)),o=i.findIndex(e=>Jf(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),t.id===`quick`?(await W({quickAccess:s}),l(await Ee())):await W({panelPlaces:{...A?.panelPlaces,[t.id]:s}})},Pt=(e,t)=>({draggable:O,onDragOver:e=>{O&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{O&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{O&&(n.preventDefault(),G(e,n.dataTransfer.getData(`text/plain`),t))}}),Ft=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Jf(e.path,t));return{name:A?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??A?.placeIcons?.[t]??null}}),It=e=>{if(r.length===0)return(0,F.jsx)(Lf,{children:E(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,F.jsx)(hf,{children:t.map(e=>{let t=jn(ne,e.path);return(0,F.jsxs)(gf,{$plain:!1,$selected:U===e.path,onClick:t=>{it(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Vt(t)):ye(e.path))},onDoubleClick:()=>b?.(e.path),onContextMenu:t=>at(t,e.path,e.isDirectory),title:e.path,children:[(0,F.jsx)(_f,{children:t&&ne.useIcons?(0,F.jsx)(hs,{place:t,size:18}):(0,F.jsx)(Ns,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(vf,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(yf,{children:e.path})]})]},e.path)})}):(0,F.jsx)(bf,{children:t.map(e=>{let t=jn(ne,e.path);return(0,F.jsxs)(xf,{$selected:U===e.path,onClick:t=>{it(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Vt(t)):ye(e.path))},onDoubleClick:()=>b?.(e.path),onContextMenu:t=>at(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,F.jsx)(hs,{place:t,size:15}):(0,F.jsx)(Ns,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,F.jsxs)(Sf,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(yf,{children:e.path})]})]},e.path)})})},Lt=e=>{let t=A?.favorites??[],n=async e=>{await W({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>t.path.toLowerCase()===e.toLowerCase())&&await W({favorites:[...t,{path:e,name:_(e)||e,isDirectory:n}]})},i=(e,t,n)=>{O||it(t,n)||(n?c(t,Vt(e)):ye(t))},a=O?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Cf,{$row:e.view===`list`,onClick:()=>void aa().then(e=>r(e,!1)),title:E(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,F.jsx)(ei,{size:15}):(0,F.jsx)(_f,{children:(0,F.jsx)(ei,{size:15})}),e.view===`list`?(0,F.jsxs)(Sf,{children:[(0,F.jsx)(`strong`,{children:E(`Add file`)}),(0,F.jsx)(yf,{children:E(`Pin any file here`)})]}):(0,F.jsxs)(vf,{children:[(0,F.jsx)(`strong`,{children:E(`Add file`)}),(0,F.jsx)(yf,{children:E(`Pin any file here`)})]})]}),(0,F.jsxs)(Cf,{$row:e.view===`list`,onClick:()=>void ia().then(e=>r(e,!0)),title:E(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,F.jsx)(ei,{size:15}):(0,F.jsx)(_f,{children:(0,F.jsx)(ei,{size:15})}),e.view===`list`?(0,F.jsxs)(Sf,{children:[(0,F.jsx)(`strong`,{children:E(`Add folder`)}),(0,F.jsx)(yf,{children:E(`Pin any folder here`)})]}):(0,F.jsxs)(vf,{children:[(0,F.jsx)(`strong`,{children:E(`Add folder`)}),(0,F.jsx)(yf,{children:E(`Pin any folder here`)})]})]})]}):null;return t.length===0&&!O?(0,F.jsx)(Lf,{children:E(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,F.jsxs)(hf,{children:[t.map(e=>{let t=jn(ne,e.path);return(0,F.jsxs)(gf,{$plain:O,$selected:U===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&b?.(e.path),onContextMenu:t=>!O&&at(t,e.path,e.isDirectory),title:e.path,children:[O&&(0,F.jsx)(Mf,{onClick:t=>{t.stopPropagation(),n(e.path)},title:E(`Remove from favorites`),type:`button`,children:(0,F.jsx)(fi,{size:11})}),(0,F.jsx)(_f,{children:t&&ne.useIcons?(0,F.jsx)(hs,{place:t,size:18}):(0,F.jsx)(Ns,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(vf,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(yf,{children:e.path})]})]},e.path)}),a]}):(0,F.jsxs)(bf,{children:[t.map(e=>{let t=jn(ne,e.path);return(0,F.jsxs)(xf,{$selected:U===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&b?.(e.path),onContextMenu:t=>!O&&at(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,F.jsx)(hs,{place:t,size:15}):(0,F.jsx)(Ns,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,F.jsxs)(Sf,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(yf,{children:e.path})]}),O&&(0,F.jsx)(Mf,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:E(`Remove from favorites`),type:`button`,children:(0,F.jsx)(fi,{size:11})})]},e.path)}),a]})},zt=e=>{if(n.length===0)return(0,F.jsx)(Lf,{children:E(`No drives are available.`)});let r=n.map(n=>{let r=n.totalSize>0?1-n.freeSpace/n.totalSize:0,i=fe?.drive.name===n.name,a=i?(0,F.jsx)(qf,{maxLength:32,onCancel:()=>pe(null),onChange:e=>pe({...fe,label:e}),onCommit:()=>void gt(),value:fe?.label??``}):(0,F.jsx)(F.Fragment,{children:u(n)}),o=!i&&O&&(0,F.jsx)(Nf,{onClick:e=>{e.stopPropagation(),ht(n)},title:E(`Rename volume`),type:`button`,children:(0,F.jsx)(ki,{size:11})}),s=(0,F.jsx)(yf,{children:E(`{free} free of {total}`,{free:d(n.freeSpace),total:d(n.totalSize)})});return e.view===`grid`?(0,F.jsxs)(gf,{$plain:!1,$selected:U===n.name,onClick:e=>{!i&&it(n.name,!0)||i||c(n.name,Vt(e))},onDoubleClick:()=>!i&&b?.(n.name),onContextMenu:e=>!i&&at(e,n.name,!0),title:n.name,children:[(0,F.jsx)(_f,{children:(0,F.jsx)(Xr,{size:18})}),(0,F.jsxs)(vf,{children:[(0,F.jsxs)(`strong`,{children:[a,i&&C(n),o]}),s]})]},n.name):(0,F.jsxs)(xf,{as:i?`div`:`button`,$selected:U===n.name,onClick:i?void 0:e=>{it(n.name,!0)||c(n.name,Vt(e))},onDoubleClick:i?void 0:()=>b?.(n.name),onContextMenu:i?void 0:e=>at(e,n.name,!0),title:n.name,type:i?void 0:`button`,children:[(0,F.jsx)(Xr,{size:18}),(0,F.jsxs)(Sf,{children:[(0,F.jsxs)(`strong`,{children:[a,i&&C(n),o]}),s]}),(0,F.jsx)(wf,{children:(0,F.jsx)(Tf,{$used:r,$tone:t(r)})})]},n.name)});return e.view===`grid`?(0,F.jsx)(hf,{children:r}):(0,F.jsx)(bf,{children:r})},Bt=()=>{let e=async e=>{be(e.id);try{await ud(e.host,e.port)}finally{be(null)}},t=async()=>{let e=xe.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){be(`manual`);try{await ud(n,r)}finally{be(null)}}};return(0,F.jsxs)(Rf,{children:[(0,F.jsxs)(zf,{children:[(0,F.jsx)(Bf,{onChange:e=>Se(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:E(`Address, e.g. 192.168.1.20:45701`),value:xe}),(0,F.jsx)(Gf,{disabled:_e!==null||!xe.includes(`:`),onClick:()=>void t(),type:`button`,children:E(_e===`manual`?`Pairing…`:`Pair by address`)})]}),ge.length===0&&(0,F.jsx)(Lf,{children:E(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),ge.map(t=>(0,F.jsxs)(Vf,{children:[(0,F.jsxs)(Hf,{children:[(0,F.jsx)(Ui,{size:14}),(0,F.jsx)(Uf,{title:t.host,children:t.name}),(0,F.jsx)(Wf,{$online:t.online,children:t.paired?t.online?E(`Paired`):E(`Offline`):E(`Not paired`)}),!t.paired&&t.online&&(0,F.jsx)(Gf,{disabled:_e===t.id,onClick:()=>void e(t),type:`button`,children:_e===t.id?E(`Pairing…`):E(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,F.jsx)(yf,{children:E(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,F.jsxs)(xf,{onClick:n=>c(gd(t.id,e.id),Vt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,F.jsx)(Ui,{size:14}),(0,F.jsxs)(Sf,{children:[(0,F.jsx)(`strong`,{children:e.name}),(0,F.jsx)(yf,{children:t.name})]}),(0,F.jsx)(Gi,{size:12})]},e.id))]},t.id))]})},Ht=e=>{switch(e.kind){case`share`:return Bt();case`favorites`:return Lt(e);case`quick`:{let t=Ft(e);return!O&&t.length===0?(0,F.jsx)(Lf,{children:E(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,F.jsxs)(hf,{children:[t.map(t=>(0,F.jsxs)(gf,{$plain:O,$selected:U===t.path,...Pt(e,t.path),onClick:e=>{!O&&!it(t.path,!0)&&c(t.path,Vt(e))},onDoubleClick:()=>!O&&b?.(t.path),onContextMenu:e=>!O&&at(e,t.path,!0),title:t.path,children:[O&&(0,F.jsx)(Mf,{onClick:n=>{n.stopPropagation(),Nt(e,t.path)},title:E(`Remove from Quick access`),type:`button`,children:(0,F.jsx)(fi,{size:11})}),(0,F.jsxs)(Af,{children:[O?(0,F.jsx)(jf,{onClick:e=>{e.stopPropagation(),z(dt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:E(`Change icon`),type:`button`,children:(0,F.jsx)(_f,{children:(0,F.jsx)(hs,{place:t})})}):(0,F.jsx)(_f,{children:(0,F.jsx)(hs,{place:t})}),dt(t.path)&&(0,F.jsx)(td,{onPick:e=>void ft(t.path,e),value:A?.placeIcons?.[t.path]??t.icon})]}),(0,F.jsxs)(vf,{children:[B?.path===t.path?(0,F.jsx)(`strong`,{children:(0,F.jsx)(qf,{onCancel:()=>me(null),onChange:e=>me({path:t.path,name:e}),onCommit:()=>void pt(t.path,B?.name??``),value:B?.name??``})}):(0,F.jsxs)(`strong`,{children:[t.name,O&&(0,F.jsx)(Nf,{onClick:e=>{e.stopPropagation(),z(null),me({path:t.path,name:t.name})},title:E(`Rename folder`),type:`button`,children:(0,F.jsx)(ki,{size:11})})]}),(0,F.jsx)(yf,{children:t.path})]})]},t.path)),O&&(0,F.jsxs)(Cf,{onClick:()=>void Mt(e),title:E(`Pin a folder here`),type:`button`,children:[(0,F.jsx)(_f,{children:(0,F.jsx)(ei,{size:15})}),(0,F.jsxs)(vf,{children:[(0,F.jsx)(`strong`,{children:E(`Add folder`)}),(0,F.jsx)(yf,{children:E(`Pin a directory here`)})]})]})]}):(0,F.jsxs)(bf,{children:[t.map(t=>(0,F.jsxs)(xf,{$selected:U===t.path,...Pt(e,t.path),onClick:e=>{!O&&!it(t.path,!0)&&c(t.path,Vt(e))},onDoubleClick:()=>!O&&b?.(t.path),onContextMenu:e=>!O&&at(e,t.path,!0),title:t.path,type:`button`,children:[(0,F.jsxs)(Af,{children:[O?(0,F.jsx)(jf,{onClick:e=>{e.stopPropagation(),z(dt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:E(`Change icon`),type:`button`,children:(0,F.jsx)(hs,{place:t,size:15})}):(0,F.jsx)(hs,{place:t,size:15}),dt(t.path)&&(0,F.jsx)(td,{onPick:e=>void ft(t.path,e),value:A?.placeIcons?.[t.path]??t.icon})]}),(0,F.jsxs)(Sf,{children:[B?.path===t.path?(0,F.jsx)(`strong`,{children:(0,F.jsx)(qf,{onCancel:()=>me(null),onChange:e=>me({path:t.path,name:e}),onCommit:()=>void pt(t.path,B?.name??``),value:B?.name??``})}):(0,F.jsxs)(`strong`,{children:[t.name,O&&(0,F.jsx)(Nf,{onClick:e=>{e.stopPropagation(),z(null),me({path:t.path,name:t.name})},title:E(`Rename folder`),type:`button`,children:(0,F.jsx)(ki,{size:11})})]}),(0,F.jsx)(yf,{children:t.path})]}),O&&(0,F.jsx)(Mf,{$inline:!0,onClick:n=>{n.stopPropagation(),Nt(e,t.path)},title:E(`Remove from Quick access`),type:`button`,children:(0,F.jsx)(fi,{size:11})})]},t.path)),O&&(0,F.jsxs)(Cf,{$row:!0,onClick:()=>void Mt(e),title:E(`Pin a folder here`),type:`button`,children:[(0,F.jsx)(ei,{size:15}),(0,F.jsxs)(Sf,{children:[(0,F.jsx)(`strong`,{children:E(`Add folder`)}),(0,F.jsx)(yf,{children:E(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,F.jsx)(Yf,{mode:e.view,onContextMenu:at,onOpen:c,onPick:b,onSelectionChange:x,version:s});case`recent`:return It(e);case`drives`:return zt(e);default:return(0,F.jsx)(Xf,{mode:e.view,onContextMenu:at,onOpen:c,onPick:b,onSelectionChange:x,openOnSingleClick:A?.openOnSingleClick??!1,path:e.path??o,selectionMenuId:`overview:${e.id}`,showCheckboxes:A?.showCheckboxes??!0,visibilityVersion:g})}};return(0,F.jsxs)(Td,{$flush:!!A?.overviewBanner,ref:Pe,children:[!ee&&(0,F.jsxs)($d,{$overlay:!!A?.overviewBanner,children:[(0,F.jsx)(ef,{role:`group`,title:E(`Columns`),children:[1,2,3,4,5].map(e=>(0,F.jsx)(tf,{$active:_t===e,onClick:()=>void W({overviewColumns:e}),title:a(E,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),O&&(0,F.jsxs)(rf,{children:[(0,F.jsxs)(nf,{onClick:()=>de(e=>!e),onPointerDown:e=>e.stopPropagation(),title:E(`Add a panel`),type:`button`,children:[(0,F.jsx)(ei,{size:12}),E(`Add panel ▾`)]}),ue&&(0,F.jsx)(af,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,F.jsx)(of,{onClick:()=>{de(!1),jt(e)},type:`button`,children:E(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),De.available&&(0,F.jsx)(mf,{onClick:e=>De.open(e.clientX,e.clientY),title:E(`Selection menu`),type:`button`,children:(0,F.jsx)(ea,{size:14})}),(0,F.jsxs)(nf,{onClick:()=>{k(e=>!e),de(!1),z(null),me(null),pe(null)},title:E(O?`Done`:`Edit`),type:`button`,children:[O?(0,F.jsx)(di,{size:13}):(0,F.jsx)(ki,{size:13}),E(O?`Done`:`Edit`)]})]}),V&&(0,F.jsx)(If,{children:V}),A?.overviewBanner&&(0,F.jsxs)(Ed,{ref:Fe,style:{height:`${Le}px`,"--banner-image-width":`${Xe}px`,"--banner-image-shift":`${et}px`,"--banner-travel":`${Qe}px`,"--banner-overlap":`${tt}px`},children:[(0,F.jsx)(Dd,{children:oe?(0,F.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&We({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:ce??void 0}):(0,F.jsx)(`img`,{alt:``,onLoad:e=>{let t=ie?1920:e.currentTarget.naturalWidth||1920,n=ie?1080:e.currentTarget.naturalHeight||1080;We({width:t,height:n})},ref:Ie,src:ce??void 0})}),O&&(0,F.jsx)(Od,{onDoubleClick:()=>{Ne.current=null,je(null),W({overviewBannerHeight:220})},onPointerCancel:wt,onPointerDown:St,onPointerMove:Ct,onPointerUp:wt,title:E(`Drag to resize; double-click to reset`)})]}),(0,F.jsxs)(kd,{$overlap:A?.overviewBanner?tt:0,children:[O&&(0,F.jsxs)(Ad,{children:[(0,F.jsxs)(jd,{children:[(0,F.jsx)(Md,{children:E(`Banners`)}),A?.overviewBanner&&(0,F.jsxs)(nf,{onClick:()=>rt(!0),title:E(`Adjust framing…`),type:`button`,children:[(0,F.jsx)(ki,{size:12}),E(`Adjust framing…`)]})]}),(0,F.jsxs)(Nd,{children:[(0,F.jsx)(Ld,{children:(0,F.jsx)(Rd,{$active:!A?.overviewBanner,onClick:bt,title:E(`No banner`),type:`button`,children:(0,F.jsxs)(Vd,{children:[(0,F.jsx)(fi,{size:16}),(0,F.jsx)(`span`,{children:E(`No banner`)})]})})}),Kl.map(e=>(0,F.jsx)(Ld,{children:(0,F.jsx)(Rd,{$active:A?.overviewBanner===e.id,onClick:()=>void W({overviewBanner:e.id}),title:`${E(e.concept)} · ${E(e.preset)}`,type:`button`,children:(0,F.jsx)(bd,{poster:e.url,source:e.id})})},e.id)),Wl.map(e=>(0,F.jsx)(Ld,{children:(0,F.jsxs)(Rd,{$active:A?.overviewBanner===e.id,onClick:()=>void W({overviewBanner:e.id}),title:E(e.name),type:`button`,children:[(0,F.jsx)(bd,{poster:e.poster,source:e.id}),(0,F.jsx)(Bd,{children:(0,F.jsx)(_i,{size:11})})]})},e.id)),(A?.overviewBanners??[]).map(e=>(0,F.jsxs)(Ld,{children:[(0,F.jsx)(Rd,{$active:A?.overviewBanner===e||A?.overviewBanner===`url:${e}`,onClick:()=>void W({overviewBanner:w(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,F.jsx)(bd,{source:e})}),(0,F.jsx)(zd,{onClick:()=>xt(e),title:E(`Remove`),type:`button`,children:(0,F.jsx)(fi,{size:10})})]},e)),(0,F.jsxs)(Qd,{onClick:()=>void vt(),title:E(`Add banner…`),type:`button`,children:[(0,F.jsx)(ei,{size:18}),(0,F.jsx)(`span`,{children:E(`Add banner…`)})]})]}),(0,F.jsxs)(Pd,{children:[(0,F.jsx)(Fd,{onChange:e=>I(e.target.value),onKeyDown:e=>{e.key===`Enter`&&yt()},placeholder:`https://…`,value:le}),(0,F.jsx)(Id,{disabled:!w(le),onClick:()=>void yt(),type:`button`,children:E(`Add URL`)})]})]}),(0,F.jsx)(sf,{ref:lt,$columns:_t,children:st.map(e=>{let t=ct.indexOf(e.id);return(0,F.jsxs)(cf,{children:[(0,F.jsxs)(lf,{children:[(0,F.jsxs)(uf,{children:[(0,F.jsxs)(Af,{children:[O?(0,F.jsx)(jf,{onClick:()=>z(ut(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:E(`Change icon`),type:`button`,children:(0,F.jsx)(ms,{panel:e,size:15})}):(0,F.jsx)(ms,{panel:e,size:15}),ut(e.id)&&(0,F.jsx)(td,{onPick:t=>At(e.id,t),value:e.icon})]}),O?(0,F.jsx)(pf,{defaultValue:e.title,onBlur:t=>Et(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,F.jsx)(ff,{children:E(e.title)})]}),(0,F.jsxs)(df,{children:[!O&&e.kind===`recent`&&(0,F.jsx)(nf,{onClick:()=>void Be().then(f),title:E(`Clear`),type:`button`,children:E(`Clear`)}),!O&&e.kind===`frequent`&&(0,F.jsx)(nf,{onClick:()=>void Ve().then(()=>m?.()),title:E(`Clear the frequent list`),type:`button`,children:E(`Clear`)}),!O&&(e.kind===`home`||e.kind===`folder`)&&(0,F.jsx)(nf,{onClick:()=>c(e.path??o),title:E(`Open folder`),type:`button`,children:E(`Open`)}),O&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(mf,{$active:e.pinned,onClick:()=>Ot(e.id),title:e.pinned?E(`Unpin from the sidebar`):E(`Pin to the sidebar`),type:`button`,children:(0,F.jsx)(ai,{size:12})}),(0,F.jsx)(mf,{$active:e.view===`list`,onClick:()=>Dt(e.id,`list`),title:E(`List`),type:`button`,children:(0,F.jsx)(oi,{size:13})}),(0,F.jsx)(mf,{$active:e.view===`grid`,onClick:()=>Dt(e.id,`grid`),title:E(`Grid`),type:`button`,children:(0,F.jsx)(si,{size:13})}),(0,F.jsx)(mf,{disabled:t===0,onClick:()=>Tt(e.id,-1),title:E(`Move up`),type:`button`,children:(0,F.jsx)(Qr,{size:12})}),(0,F.jsx)(mf,{disabled:t===ct.length-1,onClick:()=>Tt(e.id,1),title:E(`Move down`),type:`button`,children:(0,F.jsx)(Qr,{size:12})}),(0,F.jsx)(mf,{onClick:()=>kt(e.id),title:E(`Remove panel`),type:`button`,children:(0,F.jsx)(fi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Ht(e):(0,F.jsx)(Df,{children:Ht(e)})]},e.id)})})]}),nt&&ce&&(0,F.jsx)(xd,{height:Le,offset:Ge,onCancel:()=>rt(!1),onSave:e=>{W({overviewBannerOffset:e}),rt(!1)},source:ce,video:oe}),Oe&&(0,F.jsx)(Xa,{directory:o,menu:{x:Oe.x,y:Oe.y,paths:[Oe.target.path]},onClose:()=>ke(null),onCopy:(e,t)=>void mt(e,t),onAddToTray:te,onAddFavorite:S,onOpen:ot,onOpenFile:e=>b?b(e):void ye(e),shortcuts:Rt,target:Oe.target})]})}function qf({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=R();return(0,F.jsxs)(Pf,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,F.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,F.jsx)(Ff,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,F.jsx)(fi,{size:11})}),(0,F.jsx)(Ff,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,F.jsx)(di,{size:12})})]})}function Jf(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function Yf({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:o}){let s=R(),[c,l]=(0,D.useState)(null),[u,d]=(0,D.useState)(null),f=An(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,D.useEffect)(()=>{Re().then(l,()=>l([]))},[o]),!c)return(0,F.jsx)(Lf,{children:s(`Reading…`)});if(c.length===0)return(0,F.jsx)(Lf,{children:s(`Folders you open often show up here.`)});let m=e=>a(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,F.jsx)(hf,{children:c.map(e=>{let i=jn(f,e.path);return(0,F.jsxs)(gf,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Vt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,F.jsx)(_f,{children:i&&f.useIcons?(0,F.jsx)(hs,{place:i,size:18}):(0,F.jsx)(Ns,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(vf,{children:[(0,F.jsx)(`strong`,{children:i?.name||e.name}),(0,F.jsx)(yf,{children:m(e)})]})]},e.path)})}):(0,F.jsx)(bf,{children:c.map(e=>{let i=jn(f,e.path);return(0,F.jsxs)(xf,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Vt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,F.jsx)(hs,{place:i,size:15}):(0,F.jsx)(Ns,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,F.jsxs)(Sf,{children:[(0,F.jsx)(`strong`,{children:i?.name||e.name}),(0,F.jsx)(yf,{children:m(e)})]})]},e.path)})})}function Xf({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:o,showCheckboxes:s,openOnSingleClick:c,visibilityVersion:l}){let u=R(),[d,f]=(0,D.useState)(null),[p,m]=(0,D.useState)(null),h=An();return(0,D.useEffect)(()=>{e&&(f(null),be(e).then(f,()=>f(null)))},[e,l]),(0,D.useEffect)(()=>{if(P.available)return P.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&be(e,!1).then(f,()=>void 0)})},[e]),d?t===`list`?(0,F.jsx)(Ef,{children:(0,F.jsx)(Cc,{error:null,listing:d,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void ye(e)),onRefresh:()=>void be(e,!1).then(f,()=>void 0),onRename:(e,t)=>f(n=>n&&{...n,entries:n.entries.map(n=>n.fullPath.toLowerCase()===e.toLowerCase()?{...n,name:_(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:o,onSort:()=>void 0,openOnSingleClick:c,enableShortcuts:!1,showCheckboxes:s,showDetails:!1,showImages:!1,view:{...H,columns:_e.columns??[]}})}):(0,F.jsx)(Df,{children:d.entries.length===0?(0,F.jsx)(Lf,{children:u(`This folder is empty.`)}):(0,F.jsx)(Of,{children:d.entries.map(e=>{let t=jn(h,e.fullPath);return(0,F.jsxs)(kf,{$selected:p===e.fullPath,onClick:t=>{i?(m(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Vt(t)):ye(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&h.useIcons?(0,F.jsx)(hs,{place:t,size:16}):(0,F.jsx)(Ns,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,F.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,F.jsx)(Lf,{children:u(`Reading…`)})}function Zf({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=R(),s=An(),[c,l]=(0,D.useState)(!1),[u,d]=(0,D.useState)(``),[f,p]=(0,D.useState)([]),[m,h]=(0,D.useState)(0),[g,_]=(0,D.useState)(null),[v,y]=(0,D.useState)(null),ee=(0,D.useRef)(null),b=(0,D.useRef)(null),x=(0,D.useRef)(0);(0,D.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,D.useEffect)(()=>{r&&r!==x.current&&(x.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,D.useEffect)(()=>{c&&ee.current?.select()},[c]),(0,D.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let te=()=>{d(e.replace(/\\/g,`/`)),l(!0)},S=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,D.useEffect)(()=>{if(!c){p([]);return}let e=ep(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{be(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let C=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,D.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=b.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,F.jsxs)(op,{onPointerDown:e=>e.stopPropagation(),ref:b,children:[(0,F.jsxs)(up,{children:[(0,F.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?C(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):S(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:ee,spellCheck:!1,value:u}),(0,F.jsx)(dp,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,F.jsx)(fi,{size:12})}),(0,F.jsx)(dp,{$apply:!0,onClick:S,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,F.jsx)(di,{size:14})})]}),f.length>0&&g&&(0,xa.createPortal)((0,F.jsx)(sp,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,F.jsxs)(cp,{$active:t===m,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,F.jsx)(Ns,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,F.jsx)(lp,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:$f(e,s.places);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(tp,{onClick:te,title:o(`Click to type a path`),children:w.map((t,n)=>(0,F.jsxs)(np,{$last:n===w.length-1,children:[n>0&&(0,F.jsx)(ip,{children:(0,F.jsx)(ri,{size:9})}),(0,F.jsxs)(ap,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,F.jsx)(rp,{children:(0,F.jsx)(hs,{place:t.place,size:13})}):t.icon&&(0,F.jsx)(rp,{children:t.icon}),t.label]})]},t.path))}),v&&(0,F.jsx)(Ra,{items:[{label:o(`Open`),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),onSelect:()=>i(v.path,!0)},{label:o(`Open with…`),onSelect:()=>void Dt(v.path)},{label:o(`Copy path`),onSelect:()=>void navigator.clipboard.writeText(v.path)},{label:o(`Properties`),onSelect:()=>void Et([v.path])}],onClose:()=>y(null),x:v.x,y:v.y})]})}function Qf(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function $f(e,t){let n=Qf(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function ep(e){if(e.toLowerCase().startsWith(`yafm://`))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var tp=i.div`
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
`,np=i.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,rp=i.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,ip=i.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,ap=i.button`
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
`,op=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,sp=i.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Sa}
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
`,cp=i.button`
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
`,lp=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,up=i.div`
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
`,dp=i.button`
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
`,fp=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,F.jsx)(`path`,{d:`M4 4v6h6`})]});function pp({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:o=!1,videoAutoplay:s=!1,platform:c}){let l=R(),u=hc(`recycle`),f=c===`windows`,[p,m]=(0,D.useState)([]),[h,g]=(0,D.useState)([]),[_,y]=(0,D.useState)(!1),[ee,b]=(0,D.useState)(null),[x,te]=(0,D.useState)(!0),[S,C]=(0,D.useState)(!1),[w,T]=(0,D.useState)(null),[E,ne]=(0,D.useState)(!1),[O,k]=(0,D.useState)(()=>new Set),[A,re]=(0,D.useState)(null),[j,ie]=(0,D.useState)(()=>{let e=Fn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[ae,M]=(0,D.useState)(null),[N,oe]=(0,D.useState)(null),[se,P]=(0,D.useState)(()=>{let e=Nn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),ce=(0,D.useRef)(null),le=e=>{P(e),Pn(`yafm.recycle.preview.width`,e)},I=(0,D.useCallback)(async()=>{te(!0),T(null);try{m(await Oe(E))}catch(e){T(e instanceof Error?e.message:String(e))}finally{te(!1)}},[E]);(0,D.useEffect)(()=>{I()},[I]),(0,D.useEffect)(()=>{E||(g([]),y(!1),b(null))},[E]),(0,D.useEffect)(()=>{k(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let L=(0,D.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=mp(e,t,j.column);return j.descending?-n:n})},[p,h,j]),z=(0,D.useMemo)(()=>!t?.open||t.query.trim().length===0?L:L.filter(e=>Sn(e.name,t)||Sn(e.originalPath,t)),[L,t?.open,t?.query,t?.matchCase,t?.regex]),ue=(0,D.useRef)(null);ed(ue,t??null,`[data-search-block]`,n??(()=>void 0),[L]),(0,D.useEffect)(()=>{k(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let de=(0,D.useMemo)(()=>L.filter(e=>O.has(e.id)),[L,O]),fe=de.filter(e=>e.removable&&!e.isOrphan),pe=de.filter(e=>e.removable),B=(e,t)=>{let n=t.ctrlKey||t.metaKey;k(r=>{if(t.shiftKey&&A){let t=L.findIndex(e=>e.id===A),i=L.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(L[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),re(e.id)},me=(0,D.useCallback)(()=>k(new Set(z.map(e=>e.id))),[z]),V=z.length>0&&z.every(e=>O.has(e.id)),he=(0,D.useCallback)(async()=>{let e=fe.map(e=>e.id);if(e.length!==0){C(!0);try{let t=await je(e);t.ok||await la(a(l,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),k(new Set),await I()}finally{C(!1)}}},[I,fe,l]),ge=(0,D.useCallback)(async()=>{let e=pe.map(e=>e.id);if(oe(null),e.length!==0){C(!0);try{let t=await Me(e);!t.ok&&!t.cancelled&&await la(a(l,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),k(new Set),await I()}finally{C(!1)}}},[pe,I,l]),H=async()=>{oe(null),C(!0);try{await Ae(E),k(new Set),await I()}finally{C(!1)}},_e=async()=>{C(!0),b(null);try{let e=await Pe();if(e.cancelled){b(`Elevation was declined — nothing was read.`);return}if(e.failed){b(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),y(!0)}finally{C(!1)}},ve=async()=>{C(!0),oe(null);try{await Fe(),g([]),y(!1),b(null),await I()}finally{C(!1)}},ye=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},be=e=>{navigator.clipboard.writeText(e.originalPath)},xe=(e,t)=>{e.preventDefault(),t&&!O.has(t.id)&&k(new Set([t.id])),M({x:e.clientX,y:e.clientY})};(0,D.useEffect)(()=>(uc(`recycle`,O.size>0?(e,t)=>M({x:e,y:t}):null),()=>uc(`recycle`,null)),[O]),(0,D.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),me()):e.key===`Delete`?(e.preventDefault(),pe.length>0&&oe(`delete`)):e.key===`Enter`&&fe.length>0?(e.preventDefault(),he()):e.key===`Escape`&&(k(new Set),M(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[pe.length,fe.length,he,me]);let Se=[{label:l(`Restore`),icon:(0,F.jsx)(fp,{width:14,height:14}),disabled:fe.length===0,onSelect:()=>void he()},{label:l(`Delete permanently`),icon:(0,F.jsx)(ui,{size:14}),danger:!0,disabled:pe.length===0,onSelect:()=>oe(`delete`)},{label:l(`Properties`),icon:(0,F.jsx)(ii,{size:14}),disabled:de.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=de;e&&Ne(e.id)}},{label:l(`Open original location`),icon:(0,F.jsx)(Jr,{size:14}),disabled:de.length!==1,onSelect:()=>{let[e]=de;e&&ye(e)}},{label:l(`Copy original path`),icon:(0,F.jsx)(qi,{size:14}),disabled:de.length!==1,onSelect:()=>{let[e]=de;e&&be(e)}},{label:l(`Select all`),separatorBefore:!0,onSelect:me},{label:l(`Refresh`),icon:(0,F.jsx)($r,{size:14}),onSelect:()=>void I()}],U=de.length>0?de[0]:null,Ce=U?{name:U.name,path:U.contentPath||U.originalPath,isDirectory:U.isDirectory,size:U.size,modified:U.deleted,fields:[{label:l(`Type`),value:l(gp(U))},{label:l(`Original location`),value:U.originalPath},{label:l(`Date deleted`),value:v(U.deleted)},{label:l(`Size`),value:U.isDirectory?`—`:d(U.size)},...U.owner?[{label:l(`Owner`),value:U.owner}]:[],{label:l(`Status`),value:U.isOrphan?l(`Metadata only`):U.removable?l(`Restorable`):l(`Other profile`)}]}:null;return(0,F.jsxs)(vp,{ref:ce,onContextMenu:e=>xe(e),children:[(0,F.jsxs)(yp,{children:[(0,F.jsxs)(bp,{children:[(0,F.jsx)(ui,{size:16}),(0,F.jsx)(`span`,{children:l(`Recycle Bin`)}),(0,F.jsxs)(xp,{children:[x?`…`:a(l,L.length,`1 item`,`{count} items`),O.size>0&&` · ${l(`{count} selected`,{count:O.size})}`]})]}),(0,F.jsxs)(Sp,{children:[(0,F.jsx)(wp,{$on:E,onClick:()=>ne(e=>!e),title:l(`Show metadata records whose content is already gone`),type:`button`,children:l(`Orphans`)}),E&&f&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Cp,{disabled:S||_,onClick:()=>void _e(),title:l(_?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:l(S?`Working…`:_?`Admin view loaded`:`Show all (admin)…`)}),_&&h.length>0&&(0,F.jsx)(Cp,{disabled:S,onClick:()=>oe(`purge`),type:`button`,children:l(`Delete every orphan`)})]}),(0,F.jsx)(Cp,{disabled:S||fe.length===0,onClick:()=>void he(),type:`button`,children:l(`Restore`)}),(0,F.jsx)(Cp,{$danger:!0,disabled:S||pe.length===0,onClick:()=>oe(`delete`),type:`button`,children:l(`Delete`)}),(0,F.jsx)(Cp,{disabled:S||L.length===0,onClick:()=>oe(`empty`),type:`button`,children:l(`Empty`)}),(0,F.jsx)(Tp,{onClick:()=>void I(),title:l(`Refresh`),type:`button`,children:(0,F.jsx)($r,{size:14})}),u.available&&(0,F.jsx)(Tp,{onClick:e=>u.open(e.clientX,e.clientY),title:l(`Selection menu`),type:`button`,children:(0,F.jsx)(ea,{size:14})})]})]}),ee&&(0,F.jsx)(Kp,{children:ee}),w&&(0,F.jsx)(qp,{children:w}),!w&&!x&&(t?.open&&t.query.trim().length>0?z.length===0:L.length===0)&&(0,F.jsx)(qp,{children:t?.open&&t.query.trim().length>0?l(`No matching items.`):l(`The recycle bin is empty.`)}),L.length>0&&(0,F.jsxs)(Gp,{children:[(0,F.jsxs)(Ep,{ref:ue,children:[(0,F.jsxs)(Op,{children:[(0,F.jsx)(Pp,{$checked:V,$partial:!V&&O.size>0,onClick:()=>V?k(new Set):me(),title:l(V?`Select none`:`Select all`),type:`button`,children:V?(0,F.jsx)(di,{size:9}):O.size>0&&(0,F.jsx)(Fp,{})}),(0,F.jsxs)(kp,{onClick:()=>we(`name`),type:`button`,children:[l(`Name`),hp(j,`name`)]}),(0,F.jsxs)(kp,{onClick:()=>we(`original`),type:`button`,children:[l(`Original location`),hp(j,`original`)]}),(0,F.jsxs)(kp,{onClick:()=>we(`deleted`),type:`button`,children:[l(`Date deleted`),hp(j,`deleted`)]}),(0,F.jsxs)(kp,{onClick:()=>we(`size`),type:`button`,children:[l(`Size`),hp(j,`size`)]}),(0,F.jsxs)(kp,{onClick:()=>we(`type`),type:`button`,children:[l(`Type`),hp(j,`type`)]}),(0,F.jsx)(`span`,{})]}),(0,F.jsx)(Ap,{onClick:e=>{e.target===e.currentTarget&&k(new Set)},children:L.map(e=>(0,F.jsxs)(jp,{$checked:O.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>B(e,t),onContextMenu:t=>xe(t,e),onDoubleClick:()=>{k(new Set([e.id])),re(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,F.jsx)(Np,{$checked:O.has(e.id),children:O.has(e.id)&&(0,F.jsx)(di,{size:9})}),(0,F.jsxs)(Ip,{children:[(0,F.jsx)(_p,{entry:e}),(0,F.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,F.jsx)(Wp,{children:l(`metadata only`)}),e.owner&&(0,F.jsx)(Wp,{$other:!0,children:l(`other profile`)})]}),(0,F.jsx)(Rp,{children:e.originalPath}),(0,F.jsx)(zp,{children:v(e.deleted)}),(0,F.jsx)(Bp,{children:e.isDirectory?`—`:d(e.size)}),(0,F.jsx)(Vp,{children:l(gp(e))}),(0,F.jsxs)(Hp,{children:[e.removable&&!e.isOrphan&&(0,F.jsx)(Up,{onClick:t=>{t.stopPropagation(),je([e.id]).then(I)},title:l(`Restore to its original folder`),type:`button`,children:(0,F.jsx)(fp,{})}),e.removable&&(0,F.jsx)(Up,{$danger:!0,onClick:t=>{t.stopPropagation(),k(new Set([e.id])),oe(`delete`)},title:e.isOrphan?l(`Remove the leftover record`):l(`Delete permanently`),type:`button`,children:(0,F.jsx)(ui,{size:13})})]})]},e.id))})]}),r&&(0,F.jsx)(Lo,{emptyNote:l(`Nothing selected.`),info:Ce,onWidth:le,selectionNote:de.length>1?a(l,de.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:o,videoAutoplay:s,width:se})]}),ae&&(0,F.jsx)(Ra,{items:Se,onClose:()=>M(null),x:ae.x,y:ae.y}),(0,F.jsx)(Eo,{confirmLabel:l(N===`empty`?`Empty the bin`:N===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:N===`empty`?a(l,L.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):N===`purge`?l(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):a(l,pe.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>oe(null),onConfirm:()=>{N===`empty`?H():N===`purge`?ve():ge()},open:N!==null,title:l(N===`empty`?`Empty the recycle bin`:N===`purge`?`Delete every orphan`:`Delete permanently`)})]});function we(e){ie(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return In(`yafm.recycle.sort`,n),n})}}function mp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return gp(e).localeCompare(gp(t),void 0,{sensitivity:`base`})}}function hp(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function gp(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function _p({entry:e}){let t=rn(e.originalPath,e.isDirectory);return(0,F.jsx)(Lp,{children:t?(0,F.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,F.jsx)(Jr,{}):(0,F.jsx)(Yr,{})})}var vp=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,yp=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,bp=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,xp=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Sp=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Cp=i.button`
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
`,wp=i(Cp)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Tp=i.button`
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
`,Ep=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Dp=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Op=i.div`
    display: grid;
    grid-template-columns: ${Dp};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,kp=i.button`
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
`,Ap=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,jp=i.div`
    display: grid;
    grid-template-columns: ${Dp};
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
`,Mp=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Np=i.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Pp=i.button`
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
`,Fp=i.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Ip=i(Mp)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Lp=i.span`
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
`,Rp=i(Mp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,zp=i(Mp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Bp=i(Mp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Vp=i(Mp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Hp=i.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Up=i.button`
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
`,Wp=i.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Gp=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Kp=i.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,qp=i.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Jp(){return P.available?(await P.request(`app.tags`)).tags:[]}async function Yp(e){return!P.available||!e?!1:(await P.request(`app.tags.delete`,{name:e})).ok}async function Xp(e,t){return!P.available||!e?[]:(await P.request(`app.tags.create`,{name:e,color:t})).tags}async function Zp(e,t){return!P.available||!e?!1:(await P.request(`app.tags.color`,{name:e,color:t})).ok}async function Qp(e,t){return!P.available||!e||!t?!1:(await P.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function $p(){let e=R();return(0,F.jsx)(em,{title:e(`Always applies to every folder`),children:e(`Global`)})}var em=i.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,tm=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function nm(e){return`"${e.replaceAll(`"`,``)}"`}function rm(e){let t=document.documentElement.style;for(let n of tm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${nm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function im(){return P.available?(await P.request(`app.fonts`)).fonts??[]:[]}function am({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=R(),[s,c]=(0,D.useState)(null),[l,u]=(0,D.useState)(``),d=(0,D.useRef)(null),f=(0,D.useRef)(null),p=(0,D.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,D.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(om,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,F.jsx)(sm,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,F.jsx)(cm,{children:`▾`})]}),s&&(0,xa.createPortal)((0,F.jsxs)(lm,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,F.jsxs)(um,{children:[(0,F.jsx)(Zr,{size:12}),(0,F.jsx)(dm,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,F.jsxs)(fm,{children:[(0,F.jsxs)(pm,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,F.jsxs)(hm,{children:[n,` `,(0,F.jsx)(_m,{children:o(`(default)`)})]}),!e&&(0,F.jsx)(di,{size:11})]}),p.map(t=>(0,F.jsxs)(pm,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,F.jsxs)(mm,{children:[(0,F.jsx)(hm,{children:t}),(0,F.jsx)(gm,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,F.jsx)(di,{size:11})]},t)),p.length===0&&(0,F.jsx)(vm,{children:o(`No matching font.`)})]})]}),document.body)]})}var om=i.button`
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
`,sm=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,cm=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,lm=i.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${Ma}
`,um=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,dm=i.input`
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
`,fm=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,pm=i.button`
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
`,mm=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,hm=i.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gm=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_m=i.span`
    color: var(--text-muted);
    font-size: 10px;
`,vm=i.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,ym=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],bm=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,xm=`en`,Sm=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],Cm=new Date(2026,10,5,16,8).getTime(),wm=`system`,Tm={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},Em=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],Dm=`yafm.colors.recent`;function Om(){let e=Fn(Dm);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function km({appInfo:e,focusSection:n,onSettingsChanged:r,find:i,onSearchMatches:o}){let s=R(),[c,l]=(0,D.useState)([]),[u,f]=(0,D.useState)(null),[h,g]=(0,D.useState)(null),[v,ee]=(0,D.useState)(null),[b,x]=(0,D.useState)(``),[te,C]=(0,D.useState)(`file`),[T,E]=(0,D.useState)(!1),[ne,O]=(0,D.useState)(!1),[k,A]=(0,D.useState)(null),[re,j]=(0,D.useState)(!1),[ie,ae]=(0,D.useState)(!1),[M,N]=(0,D.useState)(null),[oe,se]=(0,D.useState)(null),[P,ce]=(0,D.useState)(null),[I,L]=(0,D.useState)(!1),[z,ue]=(0,D.useState)(null),[de,fe]=(0,D.useState)(null),[pe,B]=(0,D.useState)(!1),[me,V]=(0,D.useState)([]),[he,ge]=(0,D.useState)(null),[H,ve]=(0,D.useState)(!1),[ye,be]=(0,D.useState)(null),[xe,Se]=(0,D.useState)(``),[U,Ce]=(0,D.useState)(gs),[we,Te]=(0,D.useState)(null),[Ee,De]=(0,D.useState)(null),[Oe,ke]=(0,D.useState)(``),[Ae,je]=(0,D.useState)(``),[Me,Ne]=(0,D.useState)(null),[Pe,Fe]=(0,D.useState)(Om),[Ie,Le]=(0,D.useState)({}),[Re,ze]=(0,D.useState)(null),[Be,Ve]=(0,D.useState)(null),[Ue,We]=(0,D.useState)(!1),[Ge,Je]=(0,D.useState)(!1),[et,nt]=(0,D.useState)(null),[rt,dt]=(0,D.useState)(Em[0].id),[mt,ht]=(0,D.useState)([]),[gt,_t]=(0,D.useState)(null),[W,vt]=(0,D.useState)(null),[yt,bt]=(0,D.useState)(null),[xt,St]=(0,D.useState)(!1),[Ct,wt]=(0,D.useState)(``),Tt=(0,D.useRef)(null),Et=(0,D.useRef)({}),Dt=h?.defaultView??_e,Ot=h?.themePresets??[],kt=oe?oe.registered&&oe.pathMatches:h?.archiveHandler??!1,At=oe?.registered??h?.archiveHandler??!1,jt=P?P.registered&&P.pathMatches:h?.defaultFileManager??!1;ed(Tt,i??null,`section`,o??(()=>void 0),[h]),(0,D.useEffect)(()=>{let e=Tt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){dt(Em[Em.length-1].id);return}let n=t+110,r=Em[0].id;for(let{id:e}of Em){let t=Et.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}dt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Mt=e=>t=>{Et.current[e]=t},Nt=e=>{Et.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),dt(e)};(0,D.useEffect)(()=>{n&&Nt(n)},[n]),(0,D.useEffect)(()=>{le().then(e=>l(e.available),()=>l([]))},[]),(0,D.useEffect)(()=>{im().then(ht,()=>ht([]))},[]),(0,D.useEffect)(()=>{ft().then(vt,()=>vt(null))},[]),(0,D.useEffect)(()=>{it().then(Ve,()=>void 0)},[]),(0,D.useEffect)(()=>{He().then(f,()=>f(null)),Ke().then(g,()=>g(null)),lt().then(j,()=>j(!1)),Xe().then(se,()=>se(null)),Ye().then(ce,()=>ce(null)),Jp().then(V,()=>V([]))},[]),(0,D.useEffect)(()=>{let e=()=>void st().then(A,()=>A(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let G=async e=>{if(!h)return;let t={...h,...e};Object.keys(e).every(e=>t[e]===h[e])||(g(t),$t(),g(await $e(t)),r())},Pt=async e=>{let t=await aa(e);if(!t)return;let n=h?.backgroundCustom??[];await G({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Ft=async()=>{let e=Ct.trim();if(!h||!w(e))return;let t=h.backgroundCustom??[];wt(``),await G({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},It=e=>{if(!h)return;let t=h.backgroundSource;G({backgroundCustom:h.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},Lt=async()=>{if(!h)return;let t=await ia();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;h.protectedPaths.includes(r)||await G({protectedPaths:[...h.protectedPaths,r]})},zt=()=>{let e=Oe.trim();h&&e&&!h.protectedPaths.includes(e)&&(ke(``),G({protectedPaths:[...h.protectedPaths,e]}))},Bt=()=>{if(!h||!we)return;let e=we.value.trim(),t=we.from;Te(null),e.length!==0&&e!==t&&G({protectedPaths:h.protectedPaths.map(n=>n===t?e:n)})},Vt=e=>{h&&G({protectedPaths:h.protectedPaths.filter(t=>t!==e)})},Wt=async()=>{let e=await qe();e.length>0&&await G({protectedPaths:e})},Gt=()=>{if(!h||!Ee)return;let e=Ee.value.trim(),t=Ee.from;De(null),e&&e!==t&&G({directoryIndexBlacklist:h.directoryIndexBlacklist.map(n=>n===t?e:n)})},Kt=()=>{let e=Ae.trim();h&&e&&!h.directoryIndexBlacklist.includes(e)&&(je(``),G({directoryIndexBlacklist:[...h.directoryIndexBlacklist,e]}))},qt=async()=>{if(!h)return;let t=await ia();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;h.directoryIndexBlacklist.includes(r)||await G({directoryIndexBlacklist:[...h.directoryIndexBlacklist,r]})},Jt=e=>{h&&G({directoryIndexBlacklist:h.directoryIndexBlacklist.filter(t=>t!==e)})},Yt=()=>{G({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},Xt=()=>{if(!h||Me===null)return;let e=Me.trim()||`yyyy/MM/dd HH:mm`;Ne(null),e!==h.timeFormatPattern&&G({timeFormatPattern:e})},K=(e,t)=>{Fe(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return In(Dm,i),i})},Zt=m(h?.accentColor,S),Qt=m(h?.secondaryColor,y),q=(e,t)=>{h&&(K(`accent`,Zt),K(`secondary`,Qt),G({accentColor:e,secondaryColor:t}))},J=(e,t)=>{h&&(K(e,e===`accent`?Zt:Qt),G(e===`accent`?{accentColor:t}:{secondaryColor:t}))},en=async()=>{We(!0),Je(!1);try{Ve(await at())}catch{Je(!0)}finally{We(!1)}},tn=async()=>{if(!h||!Re)return;let e=Re.name.trim()||`${Re.accent.toUpperCase()} / ${Re.secondary.toUpperCase()}`,t=[...h.themePresets,{name:e,accent:Re.accent,secondary:Re.secondary}];ze(null),await G({themePresets:t})},nn=async e=>{h&&await G({themePresets:h.themePresets.filter((t,n)=>n!==e)})},rn=e=>{let t=et;nt(null),t&&t.role===e&&(e===`accent`?Zt:Qt).toLowerCase()!==t.color.toLowerCase()&&K(e,t.color)},an=async()=>{let e=xe.trim();if(e&&!H){ve(!0),be(null);try{V(await Xp(e,U)),Se(``)}catch{be(s(`Could not add the tag.`))}finally{ve(!1)}}},on=async(e,t)=>{V(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Zp(e,t)||be(s(`Could not change the tag's color.`))},sn=async e=>{if(H)return;ve(!0),be(null);let t=await Yp(e);V(await Jp()),t||be(`"${e}" is still used by a folder whose index could not be updated.`),ve(!1)},cn=async()=>{let e=he;if(!e||H)return;let t=e.value.trim();t.length===0||t===e.name?ge(null):(ve(!0),be(null),await Qp(e.name,t)?(V(await Jp()),ge(null)):be(`Could not rename "${e.name}".`),ve(!1))},ln=async e=>{let t=new Set(Dt.columns??_e.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=bc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await G({defaultView:{...Dt,columns:n}})},un=async()=>{if(ie)return;let e=!re;ae(!0),N(null);try{let t=await ut(e);j(t),g(e=>e&&{...e,linksEnabled:t}),r(),t!==e&&N(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{N(`The request to Windows failed. Try again.`)}finally{ae(!1)}},dn=async()=>{if(!I){L(!0),ue(null);try{let e=await Ze();se(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),r(),t||ue(`Windows did not accept the archive registration. Try again.`)}catch{ue(`The request to Windows failed. Try again.`)}finally{L(!1)}}},fn=async()=>{if(!I){L(!0),ue(null);try{let e=await Qe();se(e),g(e=>e&&{...e,archiveHandler:!1}),r(),e.registered&&ue(`The registration is still there. Try turning it off again.`)}catch{ue(`The request to Windows failed. Try again.`)}finally{L(!1)}}},pn=async(e,t)=>{if(!h)return;let n={...h.extensionIcons};t===null?delete n[e]:n[e]=t,await G({extensionIcons:n})},mn={...Rt,...h?.shortcuts};(0,D.useEffect)(()=>{if(!de)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){fe(null);return}let t=Ht(e);t&&(fe(null),G({shortcuts:{...mn,[de]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[de,h]),(0,D.useEffect)(()=>{if(!pe)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){B(!1);return}let t=Ht(e);t&&(B(!1),G({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[pe,h]);let hn=async e=>{await G({recentLimit:Math.min(Math.max(e,0),50)})},gn=(e,t)=>{let n=t??Ie[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Le(t=>({...t,[e]:void 0})),G(i)},_n=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;_t(null),await G({sharePortMode:`custom`,sharePort:n}),await fd(n,`custom`)},vn=async e=>{let t=e===`custom`,n=t?h?.sharePort??8080:null;await G({sharePortMode:t?`custom`:`random`,sharePort:n}),await fd(n,t?`custom`:`random`)},yn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;St(!0),bt(null);try{let e=await pt(t);vt(e),bt(e.error),e.error||await G({startupMode:t})}finally{St(!1)}},bn=async e=>{await G({galleryRoots:e.length>0?e:null})},xn=async()=>{let e=await ia(),t=h?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await bn([...t,e])},Sn=async()=>{let e=b.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await pn(e,te),x(``))},Cn=async()=>{O(!0);try{let e=await ia();if(!e)return;let t=await aa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await tt(e.replace(/[\\/][^\\/]+$/,``),_(e),`file:${t}`)&&($t(),ee({folder:e,icon:t}))}finally{O(!1)}},wn=async(e,t)=>{let n={...h?.fonts};t?n[e]=t:delete n[e],await G({fonts:n})};return(0,F.jsxs)(Vm,{children:[(0,F.jsxs)(Hm,{ref:Tt,children:[(0,F.jsxs)(Um,{ref:Mt(`application`),children:[(0,F.jsx)(Bm,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Version`)}),(0,F.jsx)(yh,{children:e?`v${e.version}`:`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Platform`)}),(0,F.jsx)(yh,{children:e?.platform??`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Language`)}),(0,F.jsx)($,{children:s(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(Lm,{disabled:!h,onChange:e=>void G({language:e}),options:[wm,...c.length>0?c:[xm]],value:h?.language??xm})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Picker window size`)}),(0,F.jsx)($,{children:s(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(kh,{inputMode:`numeric`,onBlur:e=>gn(`width`,e.currentTarget.value),onChange:e=>Le(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ie.width??String(h?.pickerWindowWidth??1200)}),(0,F.jsx)(yh,{children:`×`}),(0,F.jsx)(kh,{inputMode:`numeric`,onBlur:e=>gn(`height`,e.currentTarget.value),onChange:e=>Le(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ie.height??String(h?.pickerWindowHeight??800)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Web server port`)}),(0,F.jsx)($,{children:s(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)($a,{disabled:!h,onChange:e=>void vn(e),options:[{value:`random`,label:s(`Random`)},{value:`custom`,label:s(`Custom port`)}],value:h?.sharePortMode??`random`,width:160})})]}),h?.sharePortMode===`custom`&&(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Custom port`)}),(0,F.jsx)($,{children:s(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(kh,{inputMode:`numeric`,onBlur:e=>void _n(e.currentTarget.value),onChange:e=>_t(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:gt??(h?.sharePort?String(h.sharePort):``)})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Link paths`)}),(0,F.jsx)($,{children:s(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)($a,{disabled:!h,onChange:e=>void G({linkPathMode:e}),options:[{value:`relative`,label:s(`Relative`)},{value:`absolute`,label:s(`Absolute`)}],value:h?.linkPathMode??`relative`,width:160})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Global hotkey`)}),(0,F.jsx)($,{children:s(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(sg,{$listening:pe,disabled:!h,onClick:()=>B(!0),type:`button`,children:pe?s(`Press a key…`):h?.globalHotkey?Ut(h.globalHotkey):s(`None`)}),h?.globalHotkey&&(0,F.jsx)(Sh,{onClick:()=>void G({globalHotkey:null}),type:`button`,children:s(`Clear`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Open yafm:// links`)}),(0,F.jsx)($,{children:s(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),M&&(0,F.jsx)(vh,{children:M})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(Eh,{$on:re,children:s(re?`Active`:`Off`)}),(0,F.jsx)(Dh,{$on:re,disabled:ie,onClick:()=>void un(),title:s(re?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,F.jsx)(Oh,{})})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Use as the default file manager`)}),(0,F.jsx)($,{children:s(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),P?.registered&&!P.pathMatches&&(0,F.jsx)(vh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:P.registeredPath??`?`})})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(Eh,{$on:jt,children:s(jt?`Active`:`Off`)}),(0,F.jsx)(Dh,{$on:jt,disabled:!h,onClick:()=>void(async()=>{let e=P?.registered&&!P.pathMatches?!0:!h?.defaultFileManager;await G({defaultFileManager:e}),ce(await Ye().catch(()=>null))})(),title:s(jt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,F.jsx)(Oh,{})})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Open archives with this app`)}),(0,F.jsx)($,{children:s(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,F.jsx)($,{children:s(`When this is off, opening an archive uses the system's default application instead.`)}),oe?.registered&&!oe.pathMatches&&(0,F.jsx)(vh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:oe.registeredPath??`?`})}),z&&(0,F.jsx)(vh,{children:z})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(Eh,{$on:kt,children:s(kt?`Active`:`Off`)}),(0,F.jsx)(cg,{disabled:!h||I||kt,onClick:()=>void dn(),type:`button`,children:s(`Register`)}),e?.platform===`windows`&&(0,F.jsx)(cg,{onClick:()=>void ot(`ms-settings:defaultapps`),type:`button`,children:s(`Default apps…`)}),(0,F.jsx)(Th,{disabled:!h||I||!At,onClick:()=>void fn(),type:`button`,children:s(`Unregister`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Reopen the tabs that were open`)}),(0,F.jsx)($,{children:s(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,F.jsx)(Dh,{$on:h?.restoreTabs??!0,disabled:!h,onClick:()=>void G({restoreTabs:!h?.restoreTabs}),type:`button`,children:(0,F.jsx)(Oh,{})})]})]})]}),(0,F.jsxs)(Um,{ref:Mt(`startup`),children:[(0,F.jsx)(Bm,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Start with the computer`)}),(0,F.jsx)($,{children:s(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),yt&&(0,F.jsx)(vh,{children:yt}),W&&!W.supported&&(0,F.jsx)(vh,{children:s(`This platform cannot create a per-user startup entry.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)($a,{disabled:!h||xt||W!==null&&!W.supported,onChange:e=>void yn(e),options:[{value:`none`,label:s(`None`)},{value:`shortcut`,label:s(`Shortcut`)},{value:`task`,label:s(`Scheduled task`)}],value:W?.mode??h?.startupMode??`none`,width:170})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Start hidden in the tray`)}),(0,F.jsx)($,{children:s(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(Dh,{$on:h?.startHidden??!1,disabled:!h,onClick:()=>void G({startHidden:!h?.startHidden}),type:`button`,children:(0,F.jsx)(Oh,{})})})]})]})]}),(0,F.jsxs)(Um,{ref:Mt(`fonts`),children:[(0,F.jsx)(Bm,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,F.jsxs)(Gm,{children:[tm.map(e=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(e.label)}),(0,F.jsx)($,{children:s(`Falls back to {font} until another family is chosen.`,{font:s(e.fallback)})})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(am,{defaultLabel:s(e.fallback),disabled:!h,fonts:mt,onChange:t=>void wn(e.id,t),sample:e.sample,value:h?.fonts?.[e.id]??null})})]},e.id)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Reset`)}),(0,F.jsx)($,{children:s(`Back to the app's built-in font for every role.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(cg,{onClick:()=>void G({fonts:{}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,F.jsxs)(Um,{ref:Mt(`time`),children:[(0,F.jsx)(Bm,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,F.jsx)(Gm,{children:(0,F.jsxs)(Km,{children:[(0,F.jsxs)(qm,{children:[(0,F.jsx)(Q,{children:s(`Format`)}),(0,F.jsx)($,{children:s(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,F.jsx)(tg,{children:Sm.map(e=>(0,F.jsx)(ng,{$active:(h?.timeFormat??`24`)===e.id,onClick:()=>void G({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(h?.timeFormat??`24`)===`custom`&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(rg,{"aria-label":s(`Pattern`),onBlur:Xt,onChange:e=>Ne(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Xt()):e.key===`Escape`&&Ne(null)},spellCheck:!1,value:Me??h?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,F.jsx)($,{children:s(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,F.jsxs)(ig,{children:[(0,F.jsx)(`span`,{children:s(`Preview`)}),(0,F.jsx)(`code`,{children:p(Cm,h?.timeFormat,Me??h?.timeFormatPattern)})]})]})})]}),(0,F.jsxs)(Um,{ref:Mt(`updates`),children:[(0,F.jsx)(Bm,{note:`The running build and the newest one published.`,title:`Updates`}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Current version`)}),(0,F.jsx)(yh,{children:e?`v${e.version}`:`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Latest version`)}),(0,F.jsx)(yh,{children:Be?`v${Be.latest}`:`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Check for updates`)}),(0,F.jsx)($,{children:Be&&!Be.available?s(`You are on the latest version.`):s(`Reads the version file the release workflow publishes.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(cg,{disabled:Ue,onClick:()=>void en(),type:`button`,children:s(Ue?`Checking…`:`Check now`)})})]}),Be?.available&&(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Version {version} is available.`,{version:Be.latest})}),(0,F.jsx)($,{children:s(`Download the new build from the releases page.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(cg,{onClick:()=>void ot(bm),type:`button`,children:s(`Open release page`)})})]}),Ge&&(0,F.jsx)(X,{children:(0,F.jsx)(vh,{children:s(`Could not check for updates.`)})})]})]}),(0,F.jsxs)(Um,{ref:Mt(`colors`),children:[(0,F.jsx)(Bm,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(Km,{children:[(0,F.jsxs)(qm,{children:[(0,F.jsx)(Q,{children:s(`Presets`)}),(0,F.jsx)($,{children:s(`One click changes the accent and the highlight together.`)})]}),(0,F.jsxs)(Jm,{children:[Hl.map(e=>(0,F.jsxs)(Ym,{$on:Zt.toLowerCase()===e.accent&&Qt.toLowerCase()===e.secondary,onClick:()=>q(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,F.jsxs)(nh,{children:[(0,F.jsx)(`i`,{style:{background:e.accent}}),(0,F.jsx)(`i`,{style:{background:e.secondary}})]}),(0,F.jsx)(Xm,{children:s(e.name)})]},e.name)),Ot.map((e,t)=>(0,F.jsxs)(Zm,{children:[(0,F.jsxs)(Ym,{$on:Zt.toLowerCase()===e.accent.toLowerCase()&&Qt.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>q(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,F.jsxs)(nh,{children:[(0,F.jsx)(`i`,{style:{background:e.accent}}),(0,F.jsx)(`i`,{style:{background:e.secondary}})]}),(0,F.jsx)(Xm,{children:e.name})]}),(0,F.jsx)(Qm,{onClick:()=>void nn(t),title:s(`Remove preset`),type:`button`,children:(0,F.jsx)(fi,{size:9})})]},`${e.name}-${t}`)),Re?(0,F.jsxs)(eh,{children:[(0,F.jsxs)(nh,{children:[(0,F.jsx)(`i`,{style:{background:Re.accent}}),(0,F.jsx)(`i`,{style:{background:Re.secondary}})]}),(0,F.jsx)(th,{autoFocus:!0,maxLength:24,onChange:e=>ze({...Re,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),tn()):e.key===`Escape`&&(e.preventDefault(),ze(null))},placeholder:s(`Preset name`),spellCheck:!1,value:Re.name}),(0,F.jsx)(Sh,{onClick:()=>void tn(),type:`button`,children:s(`Save`)}),(0,F.jsx)(Sh,{onClick:()=>ze(null),type:`button`,children:s(`Cancel`)})]}):(0,F.jsxs)($m,{disabled:!h,onClick:()=>ze({name:``,accent:Zt,secondary:Qt}),title:s(`Save the current colours as a preset`),type:`button`,children:[(0,F.jsx)(ei,{size:12}),s(`Add preset`)]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Accent color`)}),(0,F.jsx)($,{children:s(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(zm,{colors:Pe.accent,current:Zt,onApply:e=>J(`accent`,e)}),(0,F.jsx)(Ch,{"aria-label":s(`Accent color`),disabled:!h,onBlur:()=>rn(`accent`),onChange:e=>void G({accentColor:e.target.value}),onFocus:()=>nt({role:`accent`,color:Zt}),type:`color`,value:Zt}),(0,F.jsx)(wh,{children:Zt.toUpperCase()})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Secondary color`)}),(0,F.jsx)($,{children:s(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(zm,{colors:Pe.secondary,current:Qt,onApply:e=>J(`secondary`,e)}),(0,F.jsx)(Ch,{"aria-label":s(`Secondary color`),disabled:!h,onBlur:()=>rn(`secondary`),onChange:e=>void G({secondaryColor:e.target.value}),onFocus:()=>nt({role:`secondary`,color:Qt}),type:`color`,value:Qt}),(0,F.jsx)(wh,{children:Qt.toUpperCase()})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Reset colors`)}),(0,F.jsx)($,{children:s(`Returns the interface to the default blue and indigo theme.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(Sh,{disabled:!h,onClick:()=>{K(`accent`,Zt),K(`secondary`,Qt),G({accentColor:null,secondaryColor:null})},type:`button`,children:s(`Reset`)})})]})]})]}),(0,F.jsxs)(Um,{ref:Mt(`background`),children:[(0,F.jsx)(Bm,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(Km,{children:[(0,F.jsxs)(qm,{children:[(0,F.jsx)(Q,{children:s(`Wallpaper`)}),(0,F.jsx)($,{children:s(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,F.jsx)(Vh,{children:(0,F.jsx)(Hh,{$active:!h?.backgroundSource,onClick:()=>void G({backgroundSource:null}),title:s(`None`),type:`button`,children:(0,F.jsx)(qh,{children:s(`None`)})})}),(0,F.jsxs)(Rh,{children:[Gl.map(e=>(0,F.jsxs)(zh,{children:[(0,F.jsx)(Bh,{children:s(e.name)}),(0,F.jsx)(Vh,{children:e.variants.map(t=>(0,F.jsx)(Hh,{$active:h?.backgroundSource===t.id,onClick:()=>void G({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,F.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,F.jsxs)(zh,{children:[(0,F.jsx)(Bh,{children:s(`Motion`)}),(0,F.jsx)(Vh,{children:Wl.map(e=>(0,F.jsxs)(Hh,{$active:h?.backgroundSource===e.id,onClick:()=>void G({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,F.jsx)(`img`,{alt:``,src:e.poster}),(0,F.jsx)(Gh,{children:(0,F.jsx)(_i,{size:11})})]},e.id))})]}),(0,F.jsxs)(zh,{children:[(0,F.jsx)(Bh,{children:s(`Custom`)}),(0,F.jsxs)(Vh,{children:[(h?.backgroundCustom??[]).map(e=>(0,F.jsx)(Im,{active:h?.backgroundSource===`file:${e}`||h?.backgroundSource===`url:${e}`||h?.backgroundSource===e,onRemove:()=>It(e),onSelect:()=>void G({backgroundSource:w(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,F.jsxs)(Kh,{onClick:()=>void Pt([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,F.jsx)(ei,{size:12}),s(`Image…`)]}),(0,F.jsxs)(Kh,{onClick:()=>void Pt([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,F.jsx)(ei,{size:12}),s(`Video…`)]})]})]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Image or video URL`)}),(0,F.jsx)($,{children:s(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(kh,{onChange:e=>wt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ft()},placeholder:`https://…`,value:Ct}),(0,F.jsx)(Sh,{disabled:!w(Ct),onClick:()=>void Ft(),type:`button`,children:s(`Add`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Blur`)}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(Lh,{max:40,min:0,onChange:e=>void G({backgroundBlur:Number(e.target.value)}),type:`range`,value:h?.backgroundBlur??0}),(0,F.jsxs)(yh,{children:[h?.backgroundBlur??0,`px`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Saturation`)}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(Lh,{max:200,min:0,onChange:e=>void G({backgroundSaturation:Number(e.target.value)}),type:`range`,value:h?.backgroundSaturation??100}),(0,F.jsxs)(yh,{children:[h?.backgroundSaturation??100,`%`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Brightness`)}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(Lh,{max:150,min:40,onChange:e=>void G({backgroundBrightness:Number(e.target.value)}),type:`range`,value:h?.backgroundBrightness??100}),(0,F.jsxs)(yh,{children:[h?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,F.jsxs)(Um,{ref:Mt(`safety`),children:[(0,F.jsx)(Bm,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(Km,{children:[(0,F.jsxs)(qm,{children:[(0,F.jsx)(Q,{children:s(`Protected folders`)}),(0,F.jsx)($,{children:s(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,F.jsx)(Jh,{children:(h?.protectedPaths??[]).map(e=>(0,F.jsxs)(Yh,{children:[(0,F.jsx)(Xh,{"aria-label":s(`Protected path`),onBlur:Bt,onChange:t=>Te({from:e,value:t.target.value}),onFocus:()=>Te({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Bt()):e.key===`Escape`&&Te(null)},spellCheck:!1,value:we?.from===e?we.value:e}),(0,F.jsx)(Zh,{onClick:()=>Vt(e),title:s(`Remove`),type:`button`,children:(0,F.jsx)(fi,{size:10})})]},e))}),(0,F.jsxs)($h,{children:[(0,F.jsx)(eg,{"aria-label":s(`New protected rule`),onChange:e=>ke(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),zt())},placeholder:`*.log`,spellCheck:!1,value:Oe}),(0,F.jsx)(Sh,{onClick:zt,type:`button`,children:s(`Add the rule`)})]}),(0,F.jsxs)(Qh,{children:[(0,F.jsx)(Sh,{onClick:()=>void Wt(),type:`button`,children:s(`Restore defaults`)}),(0,F.jsx)(Sh,{onClick:()=>void Lt(),type:`button`,children:s(`Add folder…`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Confirmation delay`)}),(0,F.jsx)($,{children:s(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(Lh,{max:30,min:2,onChange:e=>void G({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:h?.deleteDelaySeconds??5}),(0,F.jsxs)(yh,{children:[h?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,F.jsxs)(Um,{ref:Mt(`tags`),children:[(0,F.jsx)(Bm,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(_h,{children:[(0,F.jsx)(bh,{"aria-label":s(`Color of the new tag`),onChange:e=>Ce(e.target.value),type:`color`,value:U}),(0,F.jsx)(kh,{onChange:e=>Se(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),an())},placeholder:s(`New tag`),spellCheck:!1,value:xe})]}),(0,F.jsx)($,{children:s(`Add a tag here; it is available in every folder.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(Sh,{disabled:H||xe.trim().length===0,onClick:()=>void an(),type:`button`,children:s(`Add`)})})]}),ye&&(0,F.jsx)(X,{children:(0,F.jsx)(vh,{children:ye})}),me.length===0&&(0,F.jsx)(X,{children:(0,F.jsx)($,{children:s(`No tags yet. Add one below; it is available in every folder.`)})}),me.map(e=>(0,F.jsx)(X,{children:he?.name===e.name?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(_h,{children:[(0,F.jsx)(bh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void on(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,F.jsx)(xh,{autoFocus:!0,disabled:H,onChange:t=>ge({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),cn()):e.key===`Escape`&&(e.preventDefault(),ge(null))},value:he.value})]}),(0,F.jsx)($,{children:s(`Press Enter to save, Escape to cancel.`)})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(Sh,{disabled:H,onClick:()=>void cn(),type:`button`,children:s(`Save`)}),(0,F.jsx)(Sh,{disabled:H,onClick:()=>ge(null),type:`button`,children:s(`Cancel`)})]})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(_h,{children:[(0,F.jsx)(bh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void on(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,F.jsx)(Q,{children:e.name})]}),(0,F.jsx)($,{children:a(s,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(Sh,{disabled:H,onClick:()=>ge({name:e.name,value:e.name}),type:`button`,children:s(`Edit`)}),(0,F.jsxs)(Th,{disabled:H,onClick:()=>void sn(e.name),type:`button`,children:[(0,F.jsx)(ui,{size:13}),s(`Remove`)]})]})]})},e.name))]})]}),(0,F.jsxs)(Um,{ref:Mt(`files-view`),children:[(0,F.jsx)(Bm,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Default view`)}),(0,F.jsx)($,{children:s(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsxs)(Fh,{children:[(0,F.jsx)(Ih,{$on:Dt.mode===`list`,onClick:()=>void G({defaultView:{...Dt,mode:`list`}}),type:`button`,children:s(`List`)}),(0,F.jsx)(Ih,{$on:Dt.mode===`grid`,onClick:()=>void G({defaultView:{...Dt,mode:`grid`}}),type:`button`,children:s(`Grid`)})]})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`List icon size`)}),(0,F.jsx)($,{children:s(`The icon in the list rows.`)})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(Lh,{max:48,min:16,onChange:e=>void G({defaultView:{...Dt,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Dt.iconSize}),(0,F.jsxs)(yh,{children:[Dt.iconSize,`px`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Grid size`)}),(0,F.jsx)($,{children:s(`The height of a grid tile; the icon inside follows it.`)})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(Lh,{max:260,min:100,onChange:e=>void G({defaultView:{...Dt,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Dt.gridSize}),(0,F.jsxs)(yh,{children:[Dt.gridSize,`px`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(_h,{children:[(0,F.jsx)(Q,{children:s(`Selection checkboxes`)}),(0,F.jsx)($p,{})]}),(0,F.jsx)($,{children:s(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,F.jsx)(Dh,{$on:h?.showCheckboxes??!0,disabled:!h,onClick:()=>void G({showCheckboxes:!(h?.showCheckboxes??!0)}),type:`button`,children:(0,F.jsx)(Oh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(_h,{children:[(0,F.jsx)(Q,{children:s(`Open with a single click`)}),(0,F.jsx)($p,{})]}),(0,F.jsx)($,{children:s(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,F.jsx)(Dh,{$on:h?.openOnSingleClick??!1,disabled:!h,onClick:()=>void G({openOnSingleClick:!(h?.openOnSingleClick??!1)}),type:`button`,children:(0,F.jsx)(Oh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(_h,{children:[(0,F.jsx)(Q,{children:s(`Confirm before deleting`)}),(0,F.jsx)($p,{})]}),(0,F.jsx)($,{children:s(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,F.jsx)(Dh,{$on:h?.confirmDelete??!1,disabled:!h,onClick:()=>void G({confirmDelete:!(h?.confirmDelete??!1)}),type:`button`,children:(0,F.jsx)(Oh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(_h,{children:[(0,F.jsx)(Q,{children:s(`Play audio in video previews`)}),(0,F.jsx)($p,{})]}),(0,F.jsx)($,{children:s(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,F.jsx)(Dh,{$on:h?.previewVideoAudio??!1,disabled:!h,onClick:()=>void G({previewVideoAudio:!(h?.previewVideoAudio??!1)}),type:`button`,children:(0,F.jsx)(Oh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(_h,{children:[(0,F.jsx)(Q,{children:s(`Autoplay video previews`)}),(0,F.jsx)($p,{})]}),(0,F.jsx)($,{children:s(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,F.jsx)(Dh,{$on:h?.previewVideoAutoplay??!1,disabled:!h,onClick:()=>void G({previewVideoAutoplay:!(h?.previewVideoAutoplay??!1)}),type:`button`,children:(0,F.jsx)(Oh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(_h,{children:[(0,F.jsx)(Q,{children:s(`Preview panel under the list`)}),(0,F.jsx)($p,{})]}),(0,F.jsx)($,{children:s(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,F.jsx)(Dh,{$on:Dt.showImages??!0,onClick:()=>void G({defaultView:{...Dt,showImages:!(Dt.showImages??!0)}}),type:`button`,children:(0,F.jsx)(Oh,{})})]}),(0,F.jsx)(X,{children:(0,F.jsxs)(Z,{children:[(0,F.jsxs)(_h,{children:[(0,F.jsx)(Q,{children:s(`Columns`)}),(0,F.jsx)($p,{})]}),(0,F.jsx)($,{children:s(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,F.jsx)(X,{children:(0,F.jsxs)(ag,{children:[bc.map(e=>(0,F.jsxs)(og,{children:[(0,F.jsx)(`input`,{checked:(Dt.columns??[]).includes(e.id),onChange:()=>void ln(e.id),type:`checkbox`}),(0,F.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,F.jsxs)(og,{children:[(0,F.jsx)(`input`,{checked:(Dt.columns??[]).includes(`linkTarget`),onChange:()=>void ln(`linkTarget`),type:`checkbox`}),(0,F.jsx)(`span`,{children:s(`Link target after the name`)})]})]})})]}),(0,F.jsxs)(fg,{children:[s(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,F.jsx)($p,{}),` `,s(`Anything marked as global always applies to every folder.`)]})]}),(0,F.jsxs)(Um,{ref:Mt(`shortcuts`),children:[(0,F.jsx)(Bm,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,F.jsxs)(Gm,{children:[ym.map(({id:e,label:t,note:n})=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(t)}),(0,F.jsx)($,{children:s(n)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(sg,{$listening:de===e,onClick:()=>fe(e),type:`button`,children:de===e?s(`Press a key…`):Ut(mn[e])})})]},e)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Reset`)}),(0,F.jsx)($,{children:s(`Back to the default combination for every action.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(cg,{onClick:()=>void G({shortcuts:{...Rt}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,F.jsxs)(Um,{ref:Mt(`memory`),children:[(0,F.jsx)(Bm,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(fh,{children:[(0,F.jsxs)(ph,{children:[(0,F.jsx)(Q,{children:s(`Process memory`)}),(0,F.jsx)(yh,{children:k?`${d(k.private)} · ${dh(k.private,k.available)}`:`—`})]}),(0,F.jsx)(mh,{children:(0,F.jsx)(hh,{$ratio:k?k.private/Math.max(k.available,1):0,$tone:t(k?k.private/Math.max(k.available,1):0)})}),(0,F.jsx)($,{children:k?s(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:d(k.available),resident:d(k.workingSet)}):s(`Reading the current usage…`)})]}),(0,F.jsxs)(fh,{children:[(0,F.jsxs)(ph,{children:[(0,F.jsx)(Q,{children:s(`Managed heap`)}),(0,F.jsx)(yh,{children:k?`${d(k.managed)} · ${dh(k.managed,k.private)}`:`—`})]}),(0,F.jsx)(mh,{children:(0,F.jsx)(hh,{$ratio:k?k.managed/Math.max(k.private,1):0,$tone:`var(--accent-secondary)`})}),(0,F.jsx)($,{children:s(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,F.jsxs)(fh,{children:[(0,F.jsxs)(ph,{children:[(0,F.jsx)(Q,{children:s(`Native and runtime`)}),(0,F.jsx)(yh,{children:k?`${d(Math.max(0,k.private-k.managed))} · ${dh(Math.max(0,k.private-k.managed),k.private)}`:`—`})]}),(0,F.jsx)(mh,{children:(0,F.jsx)(hh,{$ratio:k?Math.max(0,k.private-k.managed)/Math.max(k.private,1):0,$tone:`var(--accent-primary)`})}),(0,F.jsx)($,{children:s(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Free memory`)}),(0,F.jsx)($,{children:s(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(cg,{onClick:()=>void ct().then(A),type:`button`,children:s(`Trim now`)})})]})]})]}),(0,F.jsxs)(Um,{ref:Mt(`overview`),children:[(0,F.jsx)(Bm,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,F.jsx)(Gm,{children:(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Recent items`)}),(0,F.jsx)($,{children:s(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(kh,{max:50,min:0,onChange:e=>void hn(Number(e.target.value)),type:`number`,value:h?.recentLimit??10})})]})})]}),(0,F.jsxs)(Um,{ref:Mt(`gallery`),children:[(0,F.jsx)(Bm,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,F.jsxs)(Gm,{children:[(h?.galleryRoots??[]).map(e=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:_(e)}),(0,F.jsx)($,{children:e})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(lg,{onClick:()=>void bn((h?.galleryRoots??[]).filter(t=>t!==e)),title:s(`Stop scanning this folder`),type:`button`,children:(0,F.jsx)(fi,{size:12})})})]},e)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Scan folders`)}),(0,F.jsx)($,{children:(h?.galleryRoots??[]).length===0?s(`Nothing added yet, so the gallery reads the Pictures folder.`):s(`Only these folders are scanned, three levels deep.`)})]}),(0,F.jsx)(gh,{children:(0,F.jsx)(cg,{onClick:()=>void xn(),type:`button`,children:s(`Choose folder…`)})})]})]})]}),(0,F.jsxs)(Um,{ref:Mt(`icons`),children:[(0,F.jsx)(Bm,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Use system file icons`)}),(0,F.jsx)($,{children:s(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,F.jsx)(Dh,{$on:h?.systemIcons??!1,disabled:!h,onClick:()=>void G({systemIcons:!h?.systemIcons}),type:`button`,children:(0,F.jsx)(Oh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Use custom folder icons`)}),(0,F.jsx)($,{children:s(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,F.jsx)(Dh,{$on:h?.customFolderIcons??!1,disabled:!h,onClick:()=>void G({customFolderIcons:!h?.customFolderIcons}),type:`button`,children:(0,F.jsx)(Oh,{})})]})]})]}),(0,F.jsxs)(Um,{ref:Mt(`extension-icons`),children:[(0,F.jsx)(Bm,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,F.jsxs)(Gm,{children:[Object.entries(h?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:e}),(0,F.jsx)($,{children:Nm(s,t)})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(Pm,{source:t}),(0,F.jsx)(lg,{onClick:()=>void pn(e,null),title:s(`Remove this rule`),type:`button`,children:(0,F.jsx)(fi,{size:12})})]})]},e)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Add a rule`)}),(0,F.jsx)($,{children:s(`Extension and the icon to draw for it.`)})]}),(0,F.jsxs)(gh,{children:[(0,F.jsx)(kh,{onChange:e=>x(e.target.value),placeholder:`.psd`,spellCheck:!1,value:b}),(0,F.jsxs)(Ph,{children:[(0,F.jsx)(lg,{onClick:()=>E(e=>!e),title:s(`Choose the icon`),type:`button`,children:(0,F.jsx)(Pm,{source:te})}),T&&(0,F.jsx)(td,{allowDefault:!1,onClose:()=>E(!1),onPick:e=>{C(e??`file`),E(!1)},value:te})]}),(0,F.jsx)(lg,{onClick:()=>void Sn(),title:s(`Add the rule`),type:`button`,children:(0,F.jsx)(ei,{size:13})})]})]})]})]}),(0,F.jsxs)(Um,{ref:Mt(`folder-icons`),children:[(0,F.jsx)(Bm,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Give a folder its own icon`)}),(0,F.jsx)($,{children:s(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,F.jsxs)(gh,{children:[v&&(0,F.jsx)(Fm,{src:v.icon}),(0,F.jsx)(cg,{disabled:ne,onClick:()=>void Cn(),type:`button`,children:s(ne?`Choosing…`:`Choose folder and icon…`)})]})]}),v&&(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:_(v.folder)}),(0,F.jsx)($,{children:v.folder})]}),(0,F.jsx)(gh,{children:(0,F.jsxs)(dg,{children:[(0,F.jsx)(di,{size:11}),` `,s(`Saved`)]})})]})]})]}),(0,F.jsxs)(Um,{ref:Mt(`folder-index`),children:[(0,F.jsx)(Bm,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,F.jsx)($,{children:s(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,F.jsx)(Dh,{$on:h?.writeDirectoryIndex??!0,disabled:!h,onClick:()=>void G({writeDirectoryIndex:!h?.writeDirectoryIndex}),type:`button`,children:(0,F.jsx)(Oh,{})})]}),(0,F.jsxs)(Km,{children:[(0,F.jsxs)(qm,{children:[(0,F.jsx)(Q,{children:s(`Directory index blacklist`)}),(0,F.jsx)($,{children:s(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,F.jsx)(Jh,{children:(h?.directoryIndexBlacklist??[]).map(e=>(0,F.jsxs)(Yh,{children:[(0,F.jsx)(Xh,{"aria-label":s(`Directory index blacklist rule`),onBlur:Gt,onChange:t=>De({from:e,value:t.target.value}),onFocus:()=>De({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Gt()):e.key===`Escape`&&De(null)},spellCheck:!1,value:Ee?.from===e?Ee.value:e}),(0,F.jsx)(Zh,{onClick:()=>Jt(e),title:s(`Remove`),type:`button`,children:(0,F.jsx)(fi,{size:10})})]},e))}),(0,F.jsxs)($h,{children:[(0,F.jsx)(eg,{"aria-label":s(`Directory index blacklist rule`),onChange:e=>je(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Kt())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Ae}),(0,F.jsx)(Sh,{onClick:Kt,type:`button`,children:s(`Add the rule`)})]}),(0,F.jsxs)(Qh,{children:[(0,F.jsx)(Sh,{onClick:Yt,type:`button`,children:s(`Restore defaults`)}),(0,F.jsx)(Sh,{onClick:()=>void qt(),type:`button`,children:s(`Add folder…`)})]})]})]}),!(h?.writeDirectoryIndex??!0)&&(0,F.jsx)(pg,{children:Mm(s,e?.platform)})]}),(0,F.jsxs)(Um,{ref:Mt(`indexing`),children:[(0,F.jsx)(Bm,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,F.jsx)(jm,{})]}),(0,F.jsxs)(Um,{ref:Mt(`files`),children:[(0,F.jsx)(Bm,{note:`What the listings include.`,title:`Files`}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Hidden items`)}),(0,F.jsx)(yh,{children:Am(s,u?.showHidden)})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Protected operating system files`)}),(0,F.jsx)(yh,{children:Am(s,u?.showSystem)})]})]}),(0,F.jsx)(fg,{children:s(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,F.jsxs)(oh,{"aria-label":s(`Settings sections`),children:[(0,F.jsx)(sh,{children:s(`Sections`)}),(0,F.jsx)(ch,{children:Em.map(({id:e,label:t})=>(0,F.jsx)(lh,{$active:rt===e,onClick:()=>Nt(e),type:`button`,children:(0,F.jsx)(`span`,{children:s(t)})},e))}),(0,F.jsx)(uh,{children:s(`Changes are saved as you make them.`)})]})]})}function Am(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function jm(){let e=R(),[t,n]=(0,D.useState)(null);return(0,D.useEffect)(()=>{let e=!0,t=()=>We().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,F.jsx)(pg,{children:e(`No indexing tasks are running.`)}):(0,F.jsxs)(Gm,{children:[(0,F.jsx)(X,{children:(0,F.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,F.jsx)(X,{children:(0,F.jsx)(yh,{title:e,children:e})},e))]}):(0,F.jsx)(pg,{children:e(`Index task information is unavailable.`)})}function Mm(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function Nm(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function Pm({source:e}){let t=on(e.startsWith(`file:`)?e.slice(5):null);return(0,F.jsx)(ug,{children:t?(0,F.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,F.jsx)(Ms,{name:e,size:16})})}function Fm({src:e}){let t=on(e);return(0,F.jsx)(ug,{children:t&&(0,F.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Im({path:e,active:t,onSelect:n,onRemove:r}){let i=R(),a=w(e),o=dn(a?null:e),s=a?e:o,c=lu(e.split(/[?#]/)[0]);return(0,F.jsxs)(Uh,{children:[(0,F.jsxs)(Hh,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,F.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,F.jsx)(`img`,{alt:``,src:s})),c&&(0,F.jsx)(Gh,{children:(0,F.jsx)(_i,{size:11})})]}),(0,F.jsx)(Wh,{onClick:r,title:i(`Remove`),type:`button`,children:(0,F.jsx)(fi,{size:9})})]})}function Lm({value:e,options:t,onChange:n,disabled:r}){let i=R(),[a,o]=(0,D.useState)(null),s=(0,D.useRef)(null);return(0,D.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Ah,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,F.jsx)(`span`,{children:Rm(i,e)}),(0,F.jsx)(jh,{children:(0,F.jsx)(ri,{size:11})})]}),a&&(0,xa.createPortal)((0,F.jsx)(Mh,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,F.jsxs)(Nh,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,F.jsx)(`span`,{children:Rm(i,t)}),t===e&&(0,F.jsx)(di,{size:11})]},t))}),document.body)]})}function Rm(e,t){return t===wm?e(`System default`):Tm[t]??t}function zm({colors:e,current:t,onApply:n}){let r=R();if(e.length===0)return null;let[i,...a]=e;return(0,F.jsxs)(rh,{children:[(0,F.jsxs)(ah,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,F.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,F.jsx)(ih,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,F.jsx)(di,{size:9})},e))]})}function Bm({title:e,note:t,global:n=!1}){let r=R();return(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(`h2`,{children:[r(e),n&&(0,F.jsx)($p,{})]}),(0,F.jsx)(`p`,{children:r(t)})]})}var Vm=i.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Hm=i.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Um=i.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Wm=i.header`
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
`,Gm=i.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Km=i.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,qm=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Jm=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Ym=i.button`
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
`,Xm=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Zm=i.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Qm=i.button`
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
`,$m=i.button`
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
`,eh=i.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,th=i.input`
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
`,nh=i.span`
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
`,rh=i.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,ih=i.button`
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
`,ah=i.button`
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
`,oh=i.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,sh=i.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ch=i.div`
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
`,lh=i.button`
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
`,uh=i.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function dh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var fh=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,ph=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,mh=i.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,hh=i.div`
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
`,gh=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=i.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,_h=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=i.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,vh=i.span`
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
`,yh=i.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,bh=i.input`
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
`,xh=i.input`
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
`,Sh=i.button`
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
`,Ch=i.input`
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
`,wh=i.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Th=i.button`
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
`,Eh=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Dh=i.button`
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
`,Oh=i.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,kh=i.input`
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
`,Ah=i.button`
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
`,jh=i.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Mh=i.div`
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
`,Nh=i.button`
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
`,Ph=i.span`
    position: relative;
    display: inline-flex;
`,Fh=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Ih=i.button`
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
`,Lh=i.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Rh=i.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,zh=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Bh=i.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Vh=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Hh=i.button`
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
`,Uh=i.div`
    position: relative;
    width: 102px;
    height: 58px;
`,Wh=i.button`
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
`,Gh=i.span`
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
`,Kh=i.button`
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
`,qh=i.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,Jh=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Yh=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Xh=i.input`
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
`,Zh=i.button`
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
`,Qh=i.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,$h=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,eg=i.input`
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
`,tg=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,ng=i.button`
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
`,rg=i.input`
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
`,ig=i.div`
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
`,ag=i.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,og=i.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,sg=i.button`
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
`,cg=i.button`
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
`,lg=i.button`
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
`,ug=i.span`
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
`,dg=i.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,fg=i.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,pg=i.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,mg=150,hg=2500,gg=3,_g=600;function vg({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:o,onSearchMatches:s,onPick:c,onSelectionChange:l,onAddToTray:u,onAddFavorite:f,showDetails:p=!0,videoAudio:m=!1,videoAutoplay:h=!1}){let g=R(),_=hc(`gallery`),[y,ee]=(0,D.useState)([]),[b,x]=(0,D.useState)(0),[te,S]=(0,D.useState)(!0),[C,w]=(0,D.useState)(null),[T,E]=(0,D.useState)(!1),[ne,O]=(0,D.useState)([]),[k,A]=(0,D.useState)(()=>{let e=Nn(`yafm.preview.width`,320);return e>=220?e:320}),re=(0,D.useRef)([]),j=(0,D.useRef)(0),ie=(0,D.useRef)(!1),ae=(0,D.useRef)(!0),M=(0,D.useRef)(0),N=(0,D.useRef)(null),oe=(0,D.useRef)(0),se=(0,D.useCallback)(async e=>{let t=++M.current;S(!0),ae.current=!0,w(null);try{let n=await Ie(0,mg,e);if(t!==M.current)return;re.current=n.entries,j.current=n.total,ee(n.entries),x(n.total)}catch(e){t===M.current&&w(e instanceof Error?e.message:String(e))}finally{t===M.current&&(ae.current=!1,S(!1))}},[]);(0,D.useEffect)(()=>{se(!1)},[se]);let P=(0,D.useCallback)(async()=>{if(ae.current||ie.current||re.current.length>=j.current)return;let e=M.current;ie.current=!0;try{let t=re.current,n=j.current;for(let r=0;r<gg&&t.length<n;r++){let r=await Ie(t.length,mg,!1);if(e!==M.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<mg)break}if(e!==M.current)return;re.current=t,j.current=n,(0,D.startTransition)(()=>{ee(t),x(n)})}catch{}finally{ie.current=!1}},[]),ce=(0,D.useCallback)(e=>{oe.current||=window.requestAnimationFrame(()=>{oe.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<hg&&P()})},[P]);(0,D.useEffect)(()=>{let e=N.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&P()},{root:e.parentElement,rootMargin:`${hg}px 0px`});return t.observe(e),()=>t.disconnect()},[P]),(0,D.useEffect)(()=>{if(y.length>=b)return;let e=window.setTimeout(()=>{let e=N.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<hg&&P()},200);return()=>window.clearTimeout(e)},[y.length,b,P]);let le=(0,D.useMemo)(()=>({path:``,parent:null,entries:y.map(yg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[y]),I=(0,D.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),L=(0,D.useCallback)(e=>{c?c(e):ye(e)},[c]),z=(0,D.useCallback)(e=>{let t=bg(e.modified);return{id:t,label:t}},[]),ue=()=>{E(!0),se(!0).finally(()=>E(!1))},de=y.length<b,fe=(0,D.useMemo)(()=>!o?.open||o.query.trim().length===0?[]:y.filter(e=>Sn(e.name,o)||Sn(e.path,o)),[y,o?.open,o?.query,o?.matchCase,o?.regex]),pe=(0,D.useMemo)(()=>o?.open?{query:o.query,matchCase:o.matchCase,regex:o.regex,mode:o.mode,currentPath:fe[Math.min(o.index,Math.max(0,fe.length-1))]?.path??null}:mn,[o?.open,o?.query,o?.matchCase,o?.regex,o?.mode,o?.index,fe]);(0,D.useEffect)(()=>{s?.(fe.length)},[fe.length,s]);let B=(0,D.useCallback)(e=>{O(e),l?.(e)},[l]),me=e=>{A(e),Pn(`yafm.preview.width`,e)},V=ne.length>0?y.find(e=>e.path===ne[0])??null:null,he=V?.name.includes(`.`)?V.name.slice(V.name.lastIndexOf(`.`)+1).toUpperCase():`—`,ge=V&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(V.name)?g(`Video`):g(`Picture`),H=V?V.path.slice(0,Math.max(V.path.lastIndexOf(`\\`),V.path.lastIndexOf(`/`))):``,_e=V?{name:V.name,path:V.path,isDirectory:!1,size:V.size,modified:V.modified,fields:[{label:g(`Type`),value:ge},{label:g(`Extension`),value:he},{label:g(`Location`),value:H},{label:g(`Full path`),value:V.path},{label:g(`Size`),value:d(V.size)},{label:g(`Modified`),value:v(V.modified)},{label:g(`Created`),value:`—`}]}:null;return(0,F.jsxs)(xg,{children:[(0,F.jsxs)(wg,{children:[(0,F.jsxs)(Eg,{children:[(0,F.jsx)(`span`,{children:g(`Gallery`)}),(0,F.jsx)(Dg,{children:te?g(`scanning…`):g(`{shown} of {total} pictures`,{shown:y.length,total:b})})]}),(0,F.jsxs)(Tg,{children:[(0,F.jsx)(Og,{onClick:ue,title:g(`Scan the folders again`),type:`button`,children:(0,F.jsx)(kg,{$spinning:T,children:(0,F.jsx)($r,{size:14})})}),_.available&&(0,F.jsx)(Og,{onClick:e=>_.open(e.clientX,e.clientY),title:g(`Selection menu`),type:`button`,children:(0,F.jsx)(ea,{size:14})})]})]}),C&&(0,F.jsx)(jg,{children:C}),!C&&!te&&b===0&&(0,F.jsx)(jg,{children:g(`No pictures found.`)}),!C&&(te||b>0)&&(0,F.jsxs)(Sg,{children:[(0,F.jsx)(Cg,{children:(0,F.jsx)(Cc,{confirmDelete:n,find:pe,listing:te&&y.length===0?null:le,loading:te,error:null,view:I,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:B,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:L,onOpenFile:L,onRefresh:ue,onAddToTray:u,onAddFavorite:f,groupOf:z,onGridScroll:ce,gridFooter:(0,F.jsx)(Ag,{$space:de?_g:1,ref:N}),allowBackgroundMenu:!1})}),p&&(0,F.jsx)(Lo,{emptyNote:g(`Nothing selected.`),info:_e,onWidth:me,selectionNote:ne.length>1?a(g,ne.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:m,videoAutoplay:h,width:k})]})]})}function yg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function bg(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(ee(),{weekday:`long`}):t.toLocaleDateString(ee(),{year:`numeric`,month:`long`,day:`numeric`})}var xg=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Sg=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Cg=i.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,wg=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,Tg=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Eg=i.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Dg=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Og=i.button`
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
`,kg=i.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,Ag=i.div`
    height: ${({$space:e})=>e}px;
`,jg=i.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function Mg({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:f=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,D.useState)([]),v=R(),[y,ee]=(0,D.useState)(null),b=An();(0,D.useEffect)(()=>{Ke().then(e=>{ee(e),g(fs(e).filter(e=>e.pinned))},()=>{ee(null),g([])})},[c]);let x=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Rg(e.path,t));return{name:y?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??y?.placeIcons?.[t]??null}}),te=o===`files`;return(0,F.jsxs)(zg,{children:[(0,F.jsxs)(Bg,{children:[!f.includes(`home`)&&(0,F.jsxs)(Gg,{$active:o===`home`,onClick:e=>m(`home`,Vt(e)),title:v(`Overview`),type:`button`,children:[(0,F.jsx)(Oi,{}),(0,F.jsx)(qg,{children:v(`Overview`)})]}),!f.includes(`recycle`)&&(0,F.jsxs)(Gg,{$active:o===`recycle`,onClick:e=>m(`recycle`,Vt(e)),title:v(`Recycle Bin`),type:`button`,children:[(0,F.jsx)(ui,{}),(0,F.jsx)(qg,{children:v(`Recycle Bin`)})]}),!f.includes(`gallery`)&&(0,F.jsxs)(Gg,{$active:o===`gallery`,onClick:e=>m(`gallery`,Vt(e)),title:v(`Gallery`),type:`button`,children:[(0,F.jsx)(gi,{}),(0,F.jsx)(qg,{children:v(`Gallery`)})]})]}),h.map(e=>(0,F.jsxs)(Hg,{children:[(0,F.jsxs)(Gg,{as:`div`,$active:!1,children:[(0,F.jsx)(Kg,{children:(0,F.jsx)(ms,{panel:e,size:16})}),(0,F.jsx)(qg,{children:v(e.title)})]}),(0,F.jsx)(Ug,{children:(0,F.jsxs)(Wg,{children:[e.kind===`quick`&&x(e).map(e=>(0,F.jsxs)(Gg,{$active:te&&Rg(a,e.path),onClick:t=>p(e.path,Vt(t)),title:e.path,type:`button`,children:[(0,F.jsx)(hs,{place:e}),(0,F.jsx)(qg,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let t=jn(b,e.path);return(0,F.jsxs)(Gg,{$active:te&&Rg(a,e.path),onClick:t=>e.isDirectory?p(e.path,Vt(t)):void ye(e.path),title:e.path,type:`button`,children:[t&&b.useIcons?(0,F.jsx)(hs,{place:t}):(0,F.jsx)(Ns,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,F.jsx)(qg,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,F.jsx)(Fg,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,F.jsxs)(Gg,{$active:te&&Rg(a,e.name),onClick:t=>p(e.name,Vt(t)),title:e.name,type:`button`,children:[(0,F.jsx)(Xr,{}),(0,F.jsxs)(qg,{children:[u(e),(0,F.jsxs)(Jg,{children:[d(e.freeSpace),` free`]}),(0,F.jsx)(Yg,{children:(0,F.jsx)(Xg,{$used:n,$tone:t(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,F.jsx)(Ig,{onNavigate:p,path:e.path||s})]})})]},e.id)),!f.includes(`settings`)&&(0,F.jsx)(Vg,{children:(0,F.jsxs)(Gg,{$active:o===`settings`,onClick:e=>m(`settings`,Vt(e)),title:v(`Settings`),type:`button`,children:[(0,F.jsx)(ii,{}),(0,F.jsx)(qg,{children:v(`Settings`)})]})})]})}var Ng=10,Pg=40;function Fg({historyVersion:e=0,onNavigate:t}){let n=R(),[r,i]=(0,D.useState)(null),o=An();return(0,D.useEffect)(()=>{Re().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=jn(o,e.path);return(0,F.jsxs)(Gg,{$active:!1,onClick:n=>t(e.path,Vt(n)),title:a(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&o.useIcons?(0,F.jsx)(hs,{place:r}):(0,F.jsx)(Ns,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,F.jsx)(qg,{children:r?.name||e.name})]},e.path)})}function Ig({path:e,onNavigate:t}){let[n,r]=(0,D.useState)(null);(0,D.useEffect)(()=>{e&&(r(null),be(e,!1).then(r,()=>r(null)))},[e]),(0,D.useEffect)(()=>{if(e&&P.available)return P.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&Rg(n.data.path,e)&&be(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,Ng),o=i.filter(e=>!e.isDirectory).slice(0,Pg);return(0,F.jsxs)(F.Fragment,{children:[a.map(e=>(0,F.jsx)(Lg,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,F.jsx)(Lg,{entry:e,onNavigate:t},e.fullPath))]})}function Lg({entry:e,onNavigate:t}){let n=An(),r=jn(n,e.fullPath);return(0,F.jsxs)(Gg,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Vt(n)):void ye(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,F.jsx)(hs,{place:r}):(0,F.jsx)(Ns,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,F.jsx)(qg,{children:r?.name||e.name})]})}function Rg(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var zg=i.aside`
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

    &:not(:hover) ${()=>Jg},
    &:not(:hover) ${()=>Yg} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Bg=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Vg=i(Bg)`
    margin-top: auto;
`,Hg=i.div`
    display: flex;
    flex-direction: column;
`,Ug=i.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${zg}:hover ${Hg}:hover > & {
        grid-template-rows: 1fr;
    }
`,Wg=i.div`
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
`,Gg=i.button`
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
`,Kg=i.span`
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
`,qg=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Jg=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Yg=i.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Xg=i.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,Zg=i.span`
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
`;function Qg({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=R(),o=(0,D.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,D.useEffect)(()=>{if(!n)return;let e=e=>{o.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,F.jsxs)(e_,{ref:o,children:[(0,F.jsxs)(t_,{$active:n,onClick:()=>r(!n),title:s>0?a(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,F.jsx)(li,{size:13}),c>0&&(0,F.jsx)(Zg,{children:c>9?`9+`:c})]}),n&&(0,F.jsxs)(n_,{children:[(0,F.jsxs)(r_,{children:[(0,F.jsx)(i_,{children:i(`Status center`)}),(0,F.jsxs)(a_,{children:[(0,F.jsx)(o_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,F.jsx)(s_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,F.jsx)(fi,{size:10})})]})]}),e.length===0?(0,F.jsx)(l_,{children:i(`No operations yet.`)}):(0,F.jsx)(c_,{children:e.map(e=>(0,F.jsx)($g,{task:e},e.id))})]})]})}function $g({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,F.jsxs)(u_,{children:[(0,F.jsxs)(d_,{children:[(0,F.jsx)(f_,{$state:e.state,children:e.state===`done`?(0,F.jsx)(di,{size:10}):e.state===`failed`?(0,F.jsx)(fi,{size:10}):(0,F.jsx)(p_,{})}),(0,F.jsx)(m_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,F.jsxs)(h_,{children:[d(e.bytesDone),` / `,d(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,F.jsxs)(h_,{children:[e.done,` / `,e.total]})]}),i&&(0,F.jsx)(g_,{children:(0,F.jsx)(__,{$percent:r,$indeterminate:t===0})}),e.error&&(0,F.jsx)(v_,{children:e.error})]})}var e_=i.div`
    position: relative;
    display: flex;
`,t_=i.button`
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
`,n_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Sa}
    ${Fa}
`,r_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,i_=i.span`
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
`,a_=i.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,o_=i.button`
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
`,s_=i.button`
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
`,c_=i.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,l_=i.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,u_=i.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;
    ${Ia}

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,d_=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,f_=i.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,p_=i.span`
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
`,m_=i.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,h_=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,g_=i.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,__=i.div`
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
`,v_=i.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function y_(){return P.available?(await P.request(`fs.history.list`)).entries:[]}async function b_(e){return P.available?(await P.request(`fs.history.undoTo`,{id:e})).ok:!1}function x_(){let e=R(),[t,n]=(0,D.useState)(!1),[r,i]=(0,D.useState)([]),[a,o]=(0,D.useState)(!1),s=(0,D.useRef)(null),c=()=>void y_().then(i,()=>i([]));(0,D.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await b_(e),c()}finally{o(!1)}};return(0,F.jsxs)(w_,{ref:s,children:[(0,F.jsx)(T_,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,F.jsx)(ci,{size:14})}),t&&(0,F.jsxs)(E_,{children:[(0,F.jsxs)(D_,{children:[(0,F.jsx)(O_,{children:e(`History`)}),(0,F.jsx)(k_,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,F.jsx)(fi,{size:10})})]}),r.length===0?(0,F.jsx)(R_,{children:e(`No operations yet.`)}):(0,F.jsx)(A_,{children:r.map(t=>(0,F.jsxs)(j_,{children:[(0,F.jsxs)(M_,{children:[(0,F.jsxs)(N_,{children:[(0,F.jsx)(C_,{label:t.label}),S_(e,t.label)]}),(0,F.jsx)(P_,{children:b(t.at)})]}),t.paths.length>0&&(0,F.jsxs)(F_,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,F.jsx)(I_,{children:(0,F.jsx)(L_,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function S_(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function C_({label:e}){return e.startsWith(`Delete`)?(0,F.jsx)(ui,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,F.jsx)(qi,{size:13}):e.startsWith(`Rename`)?(0,F.jsx)(ki,{size:13}):e.startsWith(`Compress`)?(0,F.jsx)(yi,{size:13}):e.startsWith(`New`)?(0,F.jsx)(ei,{size:13}):(0,F.jsx)(ni,{size:13})}var w_=i.div`
    position: relative;
    display: flex;
`,T_=i.button`
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
`,E_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Sa}
    ${Fa}
`,D_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,O_=i.span`
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
`,k_=i.button`
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
`,A_=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,j_=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,M_=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,N_=i.span`
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
`,P_=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,F_=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,I_=i.div`
    display: flex;
    justify-content: flex-end;
`,L_=i.button`
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
`,R_=i.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function z_({currentFolder:e}){let t=R(),[n,r]=(0,D.useState)(!1),[i,a]=(0,D.useState)(null),[o,s]=(0,D.useState)(!1),c=(0,D.useRef)(null);(0,D.useEffect)(()=>{if(!n)return;let e=()=>void ad().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{c.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,i),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i)}},[n]),(0,D.useEffect)(()=>{let e=()=>void ad().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let l=async e=>{s(!0);try{a(await e())}finally{s(!1)}},u=i?.shares.some(t=>t.path.replace(/[\\/]+$/,``).toLowerCase()===e.replace(/[\\/]+$/,``).toLowerCase())??!1;return(0,F.jsxs)(B_,{ref:c,children:[(0,F.jsxs)(V_,{$active:n,onClick:()=>r(e=>!e),title:t(`Share folders`),type:`button`,children:[(0,F.jsx)(Ui,{size:15}),i&&i.shares.length>0&&(0,F.jsx)(Zg,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,F.jsxs)(H_,{children:[(0,F.jsxs)(U_,{children:[(0,F.jsx)(W_,{children:t(`Share`)}),(0,F.jsx)(G_,{onClick:()=>r(!1),title:t(`Close`),type:`button`,children:(0,F.jsx)(fi,{size:10})})]}),(0,F.jsxs)(K_,{children:[(0,F.jsxs)(q_,{children:[(0,F.jsx)(pi,{size:15}),(0,F.jsxs)(`span`,{children:[(0,F.jsx)(`strong`,{children:i?.deviceName||t(`This device`)}),(0,F.jsx)(J_,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,F.jsx)(Y_,{children:t(`No folders are shared yet.`)}),i?.shares.map(e=>(0,F.jsxs)(X_,{children:[(0,F.jsxs)(Z_,{children:[(0,F.jsx)(Q_,{title:e.path,children:e.name}),(0,F.jsx)(ev,{disabled:o,onClick:()=>void l(()=>sd(e.id)),title:t(`Stop sharing`),type:`button`,children:(0,F.jsx)(fi,{size:10})})]}),(0,F.jsx)($_,{title:e.path,children:e.path}),(0,F.jsxs)(tv,{children:[(0,F.jsxs)(nv,{$active:e.mode===`client`,onClick:()=>void l(()=>cd(e.id,`client`)),title:t(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,F.jsx)(pi,{size:11}),t(`App`)]}),(0,F.jsxs)(nv,{$active:e.mode===`web`,onClick:()=>void l(()=>cd(e.id,`web`)),title:t(`Any device with a browser can open this folder.`),type:`button`,children:[(0,F.jsx)(Gi,{size:11}),t(`Web`)]})]})]},e.id)),(0,F.jsxs)(rv,{disabled:o||e.length===0||u,onClick:()=>void l(()=>od(e,`client`)),title:u?t(`This folder is already shared.`):e,type:`button`,children:[(0,F.jsx)(ei,{size:12}),t(`Share this folder`)]}),i?.webRunning&&(0,F.jsxs)(iv,{children:[(0,F.jsxs)(av,{children:[(0,F.jsx)(Gi,{size:12}),t(`Browser access`)]}),i.urls.map(e=>(0,F.jsx)(ov,{onClick:()=>void ot(e),type:`button`,children:e},e)),(0,F.jsx)(J_,{children:t(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var B_=i.div`
    position: relative;
    display: flex;
`,V_=i.button`
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
`,H_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Sa}
    ${Fa}
`,U_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,W_=i.span`
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
`,G_=i.button`
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
`,K_=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,q_=i.div`
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
`,J_=i.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,Y_=i.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,X_=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,Z_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Q_=i.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$_=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ev=i.button`
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
`,tv=i.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,nv=i.button`
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
`,rv=i.button`
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
`,iv=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,av=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,ov=i.button`
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
`;function sv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=R(),[s,c]=(0,D.useState)(!1),l=(0,D.useRef)(null);(0,D.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,D.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=bc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,F.jsxs)(cv,{ref:l,children:[(0,F.jsx)(lv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,F.jsx)(si,{size:14}):(0,F.jsx)(oi,{size:14})}),s&&(0,F.jsxs)(uv,{children:[(0,F.jsx)(dv,{children:o(`View`)}),(0,F.jsxs)(fv,{children:[(0,F.jsxs)(pv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,F.jsx)(oi,{size:12}),` `,o(`List`)]}),(0,F.jsxs)(pv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,F.jsx)(si,{size:12}),` `,o(`Grid`)]})]}),(0,F.jsx)(dv,{children:o(`List icon size`)}),(0,F.jsxs)(mv,{children:[(0,F.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,F.jsxs)(hv,{children:[e.iconSize,`px`]})]}),(0,F.jsx)(dv,{children:o(`Grid size`)}),(0,F.jsxs)(mv,{children:[(0,F.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,F.jsxs)(hv,{children:[e.gridSize,`px`]})]}),(0,F.jsxs)(dv,{children:[o(`Columns`),(0,F.jsx)($p,{})]}),bc.map(e=>(0,F.jsxs)(gv,{children:[(0,F.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,F.jsxs)(gv,{children:[(0,F.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,F.jsxs)(dv,{children:[o(`Preview panel`),(0,F.jsx)($p,{})]}),(0,F.jsxs)(gv,{children:[(0,F.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var cv=i.div`
    position: relative;
    display: flex;
    height: 100%;
`,lv=i.button`
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
`,uv=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Sa}
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
`,dv=i.div`
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
`,fv=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,pv=i.button`
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
`,mv=i.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,hv=i.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,gv=i.label`
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
`,_v=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),vv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),yv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),bv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,F.jsx)(`path`,{d:`M2 5h6`})}),xv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,F.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Sv=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,F.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,F.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Cv({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:ee,onToggleSplit:b,details:x,canDetails:te,onToggleDetails:S,shortcuts:C,currentFolder:w}){let T=R(),E=de(),ne=fe(),[O,k]=(0,D.useState)({left:!1,right:!1}),[A,re]=(0,D.useState)(null),[j,ie]=(0,D.useState)(null),ae=(0,D.useRef)(null),M=(0,D.useRef)(null),N=(0,D.useRef)(null),oe=(0,D.useCallback)(()=>{let e=M.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;k(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,D.useEffect)(()=>{oe();let e=M.current;if(!e)return;let t=new ResizeObserver(oe);return t.observe(e),()=>t.disconnect()},[oe,e.length]),(0,D.useEffect)(()=>()=>{ae.current&&window.clearTimeout(ae.current.timer)},[]),(0,D.useEffect)(()=>{N.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let se=e=>M.current?.scrollBy({left:e,behavior:`smooth`}),P=()=>{ae.current&&window.clearTimeout(ae.current.timer),ae.current=null,ie(null)};return(0,F.jsxs)(Dv,{children:[(0,F.jsx)(Ov,{children:(0,F.jsx)(pi,{size:19})}),(0,F.jsxs)(kv,{children:[O.left&&(0,F.jsx)(jv,{onClick:()=>se(-180),title:T(`Scroll tabs left`),type:`button`,children:(0,F.jsx)(_v,{})}),(0,F.jsx)(Av,{onScroll:oe,onWheel:e=>{let t=M.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:M,children:e.map(e=>(0,F.jsxs)(Mv,{$active:e.id===t,$dragging:A===e.id,$dropTarget:j===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Is(t.dataTransfer)||!wv(e)||(t.preventDefault(),ae.current?.id===e.id))return;P(),ie(e.id);let r=window.setTimeout(()=>{n(e.id),ae.current=null},500);ae.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ae.current?.id===e.id||j===e.id)&&P()},onDragEnd:()=>{re(null),P()},onDragOver:t=>{(A||Is(t.dataTransfer)&&wv(e))&&(t.preventDefault(),Is(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>re(e.id),onDrop:t=>{if(t.preventDefault(),A)a(A,e.id);else if(wv(e)&&Is(t.dataTransfer)){let{paths:r,move:i}=Ls(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}re(null),P()},onClick:()=>n(e.id),ref:e.id===t?N:void 0,title:e.path||e.title,type:`button`,children:[(0,F.jsx)(Tv,{tab:e}),(0,F.jsx)(Nv,{children:e.title}),e.partner&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Pv,{children:`|`}),(0,F.jsx)(Ev,{place:e.partner.place}),(0,F.jsx)(Nv,{children:e.partner.title})]}),(0,F.jsx)(Fv,{"data-shortcut":Ut(C.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:T(`Close tab`),children:(0,F.jsx)(yv,{})})]},e.id))}),O.right&&(0,F.jsx)(jv,{onClick:()=>se(180),title:T(`Scroll tabs right`),type:`button`,children:(0,F.jsx)(vv,{})}),(0,F.jsx)(Iv,{"data-shortcut":Ut(C.newTab),onClick:i,title:T(`New tab`),type:`button`,children:(0,F.jsx)(ei,{size:13})})]}),(0,F.jsx)(Lv,{...ne}),(0,F.jsxs)(Rv,{children:[(0,F.jsx)(Bv,{$active:y,"data-shortcut":Ut(C.splitView),disabled:!ee,onClick:b,title:T(y?`Close split view`:`Split view`),type:`button`,children:(0,F.jsx)(Qi,{size:15})}),(0,F.jsx)(Bv,{$active:x,disabled:!te,onClick:S,title:T(x?`Hide details panel`:`Show details panel`),type:`button`,children:(0,F.jsx)($i,{size:15})}),(0,F.jsxs)(zv,{$active:_,onClick:v,title:T(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,F.jsx)(Wi,{size:14}),g>0&&(0,F.jsx)(Zg,{children:g>9?`9+`:g})]}),(0,F.jsx)(x_,{}),(0,F.jsx)(z_,{currentFolder:w}),(0,F.jsx)(Qg,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,F.jsx)(sv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,F.jsx)(Vv,{onClick:E.minimize,title:T(`Minimize`),type:`button`,children:(0,F.jsx)(bv,{})}),(0,F.jsx)(Vv,{onClick:E.toggleMaximize,title:E.maximized?T(`Restore`):T(`Maximize`),type:`button`,children:E.maximized?(0,F.jsx)(Sv,{}):(0,F.jsx)(xv,{})}),(0,F.jsx)(Hv,{onClick:E.close,title:T(`Close`),type:`button`,children:(0,F.jsx)(yv,{})})]})]})}function wv(e){return e.kind===`files`&&(!f(e.path)||ne(e.path))}function Tv({tab:e}){switch(e.kind){case`home`:return(0,F.jsx)(qr,{size:13});case`settings`:return(0,F.jsx)(ii,{size:13});case`recycle`:return(0,F.jsx)(ui,{size:13});default:return e.archive?(0,F.jsx)(yi,{size:13}):(0,F.jsx)(Ev,{place:e.place})}}function Ev({place:e}){return e?(0,F.jsx)(hs,{place:e,size:13}):(0,F.jsx)(Jr,{size:13})}var Dv=i.header`
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
`,Ov=i.span`
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
`,kv=i.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Av=i.div`
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
`,jv=i.button`
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
`,Mv=i.button`
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
`,Nv=i.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Pv=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Fv=i.span`
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
`,Iv=i.button`
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
`,Lv=i.div`
    flex: 1;
    min-width: 28px;
`,Rv=i.div`
    display: flex;
    flex-shrink: 0;
`,zv=i.button`
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
`,Bv=i.button`
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
`,Vv=i.button`
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
`,Hv=i(Vv)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Uv(){let[e,t]=(0,D.useState)(null),n=(0,D.useRef)(null),r=(0,D.useRef)(void 0);return(0,D.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,xa.createPortal)((0,F.jsx)(Wv,{tooltip:e}),document.body):null}function Wv({tooltip:e}){let t=(0,D.useRef)(null),[n,r]=(0,D.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,D.useState)(()=>e.bottom+6);return(0,D.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,F.jsxs)(Gv,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,F.jsx)(Kv,{children:e.text}),e.shortcut&&(0,F.jsx)(qv,{children:e.shortcut})]})}var Gv=i.div`
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
    ${Ia}
`,Kv=i.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,qv=i.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Jv={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function Yv({deviceName:e,code:t,onAccept:n,onReject:r}){let i=R(),a=(0,D.useRef)(null);return(0,D.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,xa.createPortal)((0,F.jsx)(Xv,{children:(0,F.jsxs)(Zv,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsxs)(Qv,{children:[(0,F.jsx)(Ui,{size:15}),i(`Pair for sharing`)]}),(0,F.jsx)($v,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,F.jsx)(ey,{children:t}),(0,F.jsx)(ty,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,F.jsxs)(ny,{children:[(0,F.jsx)(ry,{onClick:r,type:`button`,children:i(`Reject`)}),(0,F.jsx)(iy,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var Xv=i.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Ia}
`,Zv=i.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${ja}
`,Qv=i.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,$v=i.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,ey=i.div`
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
`,ty=i.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,ny=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,ry=i.button`
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
`,iy=i(ry)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,ay=`yafm://`,oy={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},sy=0,cy=new Set;function ly(e){cy.add(e),P.send({type:`app.navigate.done`,payload:{path:e}})}var uy=20,dy=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function fy(e){return`${ay}${e===`home`?`overview`:e}`}function py(e){return e.toLowerCase().startsWith(ay)?oy[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function my(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(ay))return t;let n=oy[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?fy(n):null}function hy(e){return e.history[e.index]??fy(`home`)}function gy(e){return py(hy(e))??`files`}function _y(e){let t=hy(e);return py(t)?``:e.listing?.path||t}function vy(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||gy(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function yy(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function by(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||H.iconSize,gridSize:e.view?.gridSize||t.gridSize||H.gridSize,sort:e.view?.sort??H.sort,sortDescending:e.view?.sortDescending??H.sortDescending,columns:t.columns??_e.columns??[]}}function xy(e=fy(`home`)){return sy+=1,{id:`tab-${sy}`,listing:null,loading:!py(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Sy(e){return e instanceof Error?e.message:String(e)}function Cy(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function wy(e){let t=hd(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return gd(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Ty(e){let t=_(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Ey(e){return f(e)?Jt(e):void 0}function Dy(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return a(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:d(n)})}function Oy(){let e=R(),[t,n]=(0,D.useState)(()=>[xy()]),[r,i]=(0,D.useState)(()=>t[0].id),[a,o]=(0,D.useState)(null),[u,d]=(0,D.useState)(()=>{let e=Nn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,D.useState)([]),[h,g]=(0,D.useState)([]),[v,y]=(0,D.useState)(null),[ee,b]=(0,D.useState)(null),[S,C]=(0,D.useState)(null),w=pe(),[T,E]=(0,D.useState)(pn),[O,k]=(0,D.useState)(0),[A,re]=(0,D.useState)(0),[j,ie]=(0,D.useState)(pn),[ae,M]=(0,D.useState)(0),[N,oe]=(0,D.useState)(0),[se,ce]=(0,D.useState)(0),[le,I]=(0,D.useState)(0),L=(0,D.useRef)(le);L.current=le;let[z,ue]=(0,D.useState)([]),[de,fe]=(0,D.useState)(10),[B,V]=(0,D.useState)(null),[ge,ve]=(0,D.useState)(0),[U,Oe]=(0,D.useState)(Rt),[ke,Ae]=(0,D.useState)(0),[je,Me]=(0,D.useState)(0),[Ne,Pe]=(0,D.useState)(0),[Fe,Ie]=(0,D.useState)(!0),[Re,Be]=(0,D.useState)(()=>{let e=Nn(`yafm.preview.width`,320);return e>=220?e:320}),[Ve,He]=(0,D.useState)(null),[We,Ge]=(0,D.useState)(null),[qe,Je]=(0,D.useState)(`primary`),[Ye,Xe]=(0,D.useState)(null),[Ze,Qe]=(0,D.useState)(null),[tt,nt]=(0,D.useState)(null),[at,ot]=(0,D.useState)(null),[st,ct]=(0,D.useState)({primary:0,secondary:0}),[lt,ut]=(0,D.useState)({primary:null,secondary:null}),[dt,ft]=(0,D.useState)(null),[pt,ht]=(0,D.useState)([]),[bt,St]=(0,D.useState)(!1),Ct=(0,D.useRef)([]),wt=(0,D.useRef)([]),[Et,Dt]=(0,D.useState)([]),[Ot,kt]=(0,D.useState)(!1),[At,Nt]=(0,D.useState)(!1),[G,Pt]=(0,D.useState)([]),[zt,Wt]=(0,D.useState)(null),Kt=(0,D.useRef)(0),[qt,Zt]=(0,D.useState)(()=>{let e=Fn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?yy({x:e.x,y:e.y}):yy({x:Math.max(20,window.innerWidth-340),y:110})}),Qt=(0,D.useCallback)(()=>{Zt(e=>yy(e)),Nt(!0)},[]),q=t.find(e=>e.id===r)??t[0],J=gy(q),en=hy(q),tn=_y(q),nn=J===`files`?q.listing?.parent??wy(tn):null,rn=q.splitWith?t.find(e=>e.id===q.splitWith):void 0,an=J===`files`&&rn!==void 0,on=rn?_y(rn):``,sn=rn?rn.listing?.parent??wy(on):null,cn=an&&rn&&qe===`secondary`?rn:q,ln=B?.defaultView??_e,un=by(cn,ln);(0,D.useEffect)(()=>{x(B?.accentColor,B?.secondaryColor)},[B?.accentColor,B?.secondaryColor]),(0,D.useEffect)(()=>{rm(B?.fonts)},[B?.fonts]),(0,D.useEffect)(()=>{te(B?.timeFormat,B?.timeFormatPattern)},[B?.timeFormat,B?.timeFormatPattern]),(0,D.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!B?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[B?.backgroundSource]),(0,D.useEffect)(()=>(he(e=>new Promise(t=>{Wt({id:++Kt.current,prompt:e,resolve:t})})),()=>he(null)),[]),(0,D.useEffect)(()=>{Je(`primary`)},[r]),(0,D.useEffect)(()=>{ie(pn),oe(0),ce(0)},[J]),(0,D.useEffect)(()=>{oe(0)},[j.query,j.matchCase,j.regex]),(0,D.useEffect)(()=>{oe(e=>se===0?0:Math.min(e,se-1))},[se]);let dn=un.columns.includes(`linkCount`),fn=(0,D.useMemo)(()=>{let e={},t=fs(B),n={};for(let[e,t]of Object.entries(B?.placeNames??{}))n[c(e)]=t;for(let t of p)e[c(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=c(t),i=p.find(e=>c(e.path)===r);e[r]={name:n[r]??i?.name??(_(t)||t),path:t,kind:`folder`,icon:i?.icon??B?.placeIcons?.[t]??null}}return e},[p,B]),mn=(0,D.useMemo)(()=>({places:fn,useIcons:B?.systemIcons===!1}),[fn,B?.systemIcons]),hn=B?.defaultView?.showImages??!0,gn=B?.defaultView?.imageStripHeight??_e.imageStripHeight,_n=J===`home`?(0,F.jsx)(Oi,{size:13}):J===`settings`?(0,F.jsx)(ii,{size:13}):J===`recycle`?(0,F.jsx)(ui,{size:13}):J===`gallery`?(0,F.jsx)(gi,{size:13}):void 0,vn=T.open&&T.query.length>0,yn=(0,D.useMemo)(()=>vn&&cn.listing?cn.listing.entries.filter(e=>Sn(e.isDirectory?Mn(mn,e.fullPath,e.name):e.name,T)).map(e=>e.fullPath):[],[vn,T,cn.listing,mn]);(0,D.useEffect)(()=>{k(0)},[T.query,T.matchCase,T.regex,cn.listing?.path]);let bn=yn.length===0?-1:Math.min(O,yn.length-1),xn=(0,D.useCallback)(()=>{E(e=>({...e,open:!1,query:``})),k(0)},[]),Cn=(0,D.useCallback)(()=>{E(e=>({...e,open:!0})),re(e=>e+1)},[]),wn=(0,D.useCallback)(()=>{ie(e=>({...e,open:!0})),M(e=>e+1)},[]),Tn=(0,D.useCallback)(()=>{ie(pn),oe(0),ce(0)},[]),En=(0,D.useCallback)(e=>{oe(t=>se===0?0:(Math.min(t,se-1)+e+se)%se)},[se]),Dn=(0,D.useCallback)(e=>{E(t=>({...t,open:!0,query:t.open?t.query+e:e})),re(e=>e+1)},[]),On=(0,D.useCallback)(e=>{k(t=>yn.length===0?0:(Math.min(t,yn.length-1)+e+yn.length)%yn.length)},[yn.length]),An=(0,D.useRef)({tabs:t,activeId:r,activePane:qe});An.current={tabs:t,activeId:r,activePane:qe};let Ln=(0,D.useRef)(B);Ln.current=B;let Rn=(0,D.useRef)(!1),zn=(0,D.useRef)([]),Bn=(0,D.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Vn=(0,D.useRef)(new Map),Hn=(0,D.useCallback)(e=>{let t=(Vn.current.get(e)??0)+1;return Vn.current.set(e,t),()=>Vn.current.get(e)===t},[]),Un=(0,D.useCallback)(async(e,t,n)=>{if(!(t&&md(t)))try{let r=await Te(t,dn);if(!n()||!r.listing)return;Bn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[dn,Bn]),Wn=(0,D.useCallback)(async(e,t,n=!1)=>{let r=Hn(e);xn();let i=!n||!An.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;Bn(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&Cy(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&Un(e,t,r);let o=t&&md(t)?await _d(t):await be(t,!0,dn,L.current,t?Ey(t):void 0);if(!r())return;Bn(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!md(o.path)&&ze(o.path).then(()=>ve(e=>e+1))}catch(i){if(!r())return;let a=An.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?_y(a):``,s=wy(o),c=Sy(i);if(o&&K(c)){let i=l(o),a=await da(i,!!Jt(i));if(a){Yt(i,a),r()&&Wn(e,t,n);return}}Bn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Hn,dn,Bn,xn,Un]),Gn=(0,D.useCallback)((e,t)=>{let n=my(t);n&&(py(n)?(xn(),Hn(e),Bn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Wn(e,n))},[Hn,Wn,Bn,xn]),Kn=(0,D.useCallback)(async(e,t,n)=>{if(xn(),py(t)){Hn(e),Bn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Hn(e);Bn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(md(t)||await Un(e,t,r),!r())return;let n=md(t)?await _d(t):await be(t,!0,dn,L.current,Ey(t));if(!r())return;Bn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(K(Sy(i))){let i=l(t),a=await da(i,!!Jt(i));if(a){Yt(i,a),r()&&Kn(e,t,n);return}}Bn(e,()=>({listing:{path:t,parent:wy(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Sy(i)}))}},[Hn,dn,Bn,xn,Un]),qn=(0,D.useCallback)((e,t=!0)=>{let r=xy(e??fy(`home`));return n(e=>[...e,r]),t&&i(r.id),e&&!py(e)&&Wn(r.id,e),r.id},[Wn]),Jn=(0,D.useCallback)(e=>{for(let t of An.current.tabs)gy(t)===`files`&&Cy(_y(t),e)&&Wn(t.id,e,!0)},[Wn]),Yn=(0,D.useCallback)((e,t)=>{let n=_(t);for(let r of An.current.tabs)r.listing?.entries.some(t=>Cy(t.fullPath,e))&&Bn(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>Cy(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[Bn]),Xn=(0,D.useCallback)((e,t=!1)=>{t?qn(fy(e)):Gn(An.current.activeId,fy(e))},[qn,Gn]),Zn=(0,D.useCallback)(e=>{let{tabs:t,activeId:r}=An.current,a=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==a?.splitWith);if(a&&!a.hidden&&(wt.current.push(hy(a)),wt.current.length>uy&&wt.current.shift()),o.length===0){let e=xy();n([e]),i(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&i(o[Math.min(s,o.length-1)].id)},[]),Qn=(0,D.useCallback)(()=>{let e=wt.current.pop();if(!e)return;let t={...xy(e),fresh:!1};n(e=>[...e,t]),i(t.id),gy(t)===`files`&&Wn(t.id,_y(t))},[Wn]),$n=(0,D.useCallback)((e,t=!1)=>{t?qn(e):Gn(vy(An.current),e??fy(`home`))},[Gn,qn]),er=(0,D.useCallback)(e=>{let{tabs:t,activeId:n}=An.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let a=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;i(r[a].id)},[]),tr=(0,D.useCallback)(()=>{let{tabs:e,activeId:t}=An.current,r=e.find(e=>e.id===t);if(!r||gy(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),Bn(t,()=>({splitWith:void 0})),Je(`primary`);return}let a=_y(r),o={...xy(a),hidden:!0};n(e=>[...e,o]),Bn(t,()=>({splitWith:o.id})),Wn(o.id,a),Je(`primary`)},[Wn,Bn]),nr=(0,D.useCallback)(e=>{Be(e),Pn(`yafm.preview.width`,e)},[]),rr=an?qe===`secondary`?We??Ve:Ve??We:Ve,ir=(0,D.useRef)(null),ar=e=>{e.preventDefault();let t=ir.current?.getBoundingClientRect();if(!t)return;let n=Fe?Re:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);d(n),Pn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},or=(e,t,n)=>{t&&Xe({x:e.clientX,y:e.clientY,directory:t,refresh:n})},sr=(0,D.useCallback)((e,t)=>{ct(n=>n[e]===t?n:{...n,[e]:t})},[]),cr=(0,D.useCallback)(e=>sr(`primary`,e),[sr]),lr=(0,D.useCallback)(e=>sr(`secondary`,e),[sr]),ur=(e,t)=>{st[e]!==0&&ut(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},dr=async(e,t=!1)=>{let n=Ye;if(Xe(null),!n)return;let r=e===null?await xt(n.directory,t):await Tt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;xn(),ft(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},fr=(0,D.useCallback)(()=>{let{tabs:e}=An.current,t=e.find(e=>e.id===vy(An.current));t&&t.index>0&&Kn(t.id,t.history[t.index-1],t.index-1)},[Kn]),pr=(0,D.useCallback)(()=>{let{tabs:e}=An.current,t=e.find(e=>e.id===vy(An.current));t&&t.index<t.history.length-1&&Kn(t.id,t.history[t.index+1],t.index+1)},[Kn]),mr=(0,D.useCallback)(()=>{let{tabs:e}=An.current,t=e.find(e=>e.id===vy(An.current));t&&gy(t)===`files`&&t.listing?.parent&&$n(t.listing.parent)},[$n]),hr=(0,D.useRef)(null),gr=(0,D.useCallback)(()=>{for(let e of An.current.tabs)e.listing&&Wn(e.id,e.listing.path,!0)},[Wn]),_r=(0,D.useCallback)(e=>{e.length!==0&&(Pt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Qt())},[Qt]),vr=(0,D.useCallback)(async e=>{let t=await W(e);t.length!==0&&_r(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[_r]),yr=(0,D.useCallback)(e=>{let t=new Set(e);Pt(e=>e.filter(e=>!t.has(e.path)))},[]),br=(0,D.useCallback)(async e=>{let t=Ln.current;if(!t)return;let n=await W(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>c(e.path))),i=n.filter(e=>!r.has(c(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};V(a),await $e(a),Ae(e=>e+1)},[]),xr=(0,D.useCallback)(()=>Pt([]),[]),Sr=(0,D.useRef)(-1),Cr=(0,D.useCallback)(e=>{Dt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),kt(e.move),e.entries.length>0&&Qt()},[Qt]),wr=(0,D.useCallback)(async()=>{if(P.available)try{let e=await gt();Sr.current=e.sequence,Cr(e)}catch{}},[Cr]),Tr=(0,D.useCallback)(async e=>{e.length!==0&&await mt(e,!1)&&await wr()},[wr]),Er=(0,D.useRef)(G);Er.current=G,(0,D.useEffect)(()=>{let e=e=>{Is(e.dataTransfer)&&Qt()},t=e=>{Is(e.dataTransfer)&&Qt()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[Qt]),(0,D.useEffect)(()=>{let e=()=>Zt(e=>yy(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Dr=(0,D.useCallback)(async()=>{let e=Er.current;if(e.length>0){let t=await W(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Pt(e=>e.filter(e=>n.has(e.path)))}await wr()},[wr]),Or=(0,D.useCallback)(()=>{Dr(),Pe(e=>e+1),gr()},[Dr,gr]),kr=(0,D.useCallback)(e=>{let t=yy(e);Zt(t),In(`yafm.tray.position`,t)},[]),Ar=(0,D.useCallback)(()=>{At?Nt(!1):Qt()},[Qt,At]),jr=(0,D.useCallback)(async(t,n,r)=>{let i=await _t(t,n,r);i.ok?(r&&yr(t),Pe(e=>e+1),gr(),wr()):la(i.error??e(`The files could not be transferred.`))},[gr,wr,yr]);(0,D.useEffect)(()=>{if(P.available)return It().then(e=>{Ct.current=e,ht(e)},()=>void 0),P.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Ct.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Ct.current=n,ht(n),r&&St(!0)})},[]);let Mr=(0,D.useCallback)(()=>{Lt().then(()=>It().then(e=>{Ct.current=e,ht(e)},()=>void 0))},[]);(0,D.useEffect)(()=>{if(!P.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await gt();if(!e||t.sequence===Sr.current)return;Sr.current=t.sequence,Cr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Cr]);let Nr=(0,D.useCallback)(async e=>{let t=e?await jt():await Mt();t.ok?(Pe(e=>e+1),gr()):t.error&&!t.error.startsWith(`Nothing to`)&&la(t.error)},[gr]),Pr=(0,D.useRef)(dn);(0,D.useEffect)(()=>{Pr.current!==dn&&(Pr.current=dn,gr())},[dn,gr]);let Fr=(0,D.useCallback)((e,t)=>{let{tabs:n}=An.current,r=n.find(t=>t.id===e);if(!r||gy(r)!==`files`)return;let i=_y(r),a=Ln.current?.defaultView??_e,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||H.iconSize,gridSize:r.view?.gridSize||a.gridSize||H.gridSize,sort:r.view?.sort??H.sort,sortDescending:r.view?.sortDescending??H.sortDescending,...t};Bn(e,()=>({view:o})),hr.current!==null&&window.clearTimeout(hr.current),hr.current=window.setTimeout(()=>{hr.current=null,Ce(i,o)},250)},[Bn]),Ir=(0,D.useCallback)(e=>{Fr(vy(An.current),e)},[Fr]),Lr=(0,D.useCallback)(e=>{let t=Ln.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,columns:e}};V(n),$e(n)},[]),Rr=(0,D.useCallback)(e=>{let t=Ln.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,showImages:e}};V(n),$e(n)},[]),zr=(0,D.useCallback)(e=>{let t=Ln.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,imageStripHeight:e}};V(n),$e(n)},[]),Br=(0,D.useCallback)((e,t,n,r)=>{let i=An.current.tabs.find(t=>t.id===e);if(!i||gy(i)!==`files`||!i.listing)return;let a=_y(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Bn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),we(a,t,n,r)},[Bn]),Vr=(0,D.useCallback)((e,t)=>{let n=An.current.tabs.find(t=>t.id===e);if(!n)return;let r=by(n,Ln.current?.defaultView??_e);Fr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Fr]),Hr=(0,D.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Ur=(0,D.useCallback)(()=>{Ee().then(m,()=>m([]))},[]),Wr=(0,D.useCallback)(e=>{let t=(e.openTabs??[]).map(my).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...xy(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),i(r[a].id);for(let e of r)gy(e)===`files`&&Wn(e.id,_y(e),!0);return!0},[Wn]),Gr=(0,D.useCallback)(e=>{let t=zn.current;if(zn.current=[],t.length===0)return;let n=t.filter(e=>!cy.has(e));for(let e of t)n.includes(e)||ly(e);if(n.length===0)return;let{tabs:r}=An.current;if(!e&&r.length===1&&r[0].fresh){Gn(r[0].id,n[0]),ly(n[0]);for(let e of n.slice(1))qn(e),ly(e);return}let a=n.map(e=>{let t=qn(e);return ly(e),t}).at(-1);a&&setTimeout(()=>i(a),0)},[qn,Gn]),Kr=(0,D.useCallback)(()=>{Ke().then(e=>{V(e),fe(e.recentLimit);let t={...Rt,...e.shortcuts};Oe(t),Bt(t.openInNewTab),Ae(e=>e+1),Rn.current||(Rn.current=!0,Gr(e.restoreTabs&&Wr(e)))},()=>{fe(10),Rn.current=!0,Gr(!1)})},[Gr,Wr]),Y=(0,D.useCallback)(()=>{Le().then(ue,()=>ue([]))},[]),qr=(0,D.useCallback)(()=>{De().then(g,()=>g([]))},[]),Jr=t.filter(e=>!e.hidden),Yr=Jr.map(hy),Xr=Yr.join(`
`),$r=Math.max(Jr.findIndex(e=>e.id===r),0);(0,D.useEffect)(()=>{if(!B?.restoreTabs)return;let e=setTimeout(()=>void et(Yr,$r),700);return()=>clearTimeout(e)},[Xr,$r,B?.restoreTabs]),(0,D.useEffect)(()=>{let{tabs:e,activeId:t}=An.current,n=e.find(e=>e.id===t);n&&n.fresh&&gy(n)===`files`&&Wn(n.id,_y(n),!0),Ur(),Kr(),qr(),rt().then(y,()=>y(null))},[Wn,Ur,Kr,qr]),(0,D.useEffect)(()=>{if(it().then(b,()=>b(null)),P.available)return P.on(e=>{let t=e;t.type===`app.update`&&t.data&&b(t.data)})},[]),(0,D.useEffect)(()=>{if(P.available)return P.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&o({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&la(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&la(n.data.error??e(`Pairing failed.`))}})},[e]),(0,D.useEffect)(()=>{let e=setInterval(qr,3e4);return()=>clearInterval(e)},[qr]),(0,D.useEffect)(()=>{J===`home`&&(Y(),qr())},[J,q.id,Y,qr]),(0,D.useEffect)(()=>{if(!P.available)return;let e=P.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=An.current,i=t.data.startup===!0;i&&cy.has(n)?ly(n):i&&!Rn.current?zn.current.includes(n)||zn.current.push(n):(i&&r.length===1&&r[0].fresh?Gn(r[0].id,n):py(n)?Gn(vy(An.current),n):qn(n),i&&ly(n))});return P.send({type:`app.ready`}),e},[Gn,qn]),(0,D.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,D.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,D.useEffect)(()=>{let e=e=>{if(Gt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),fr();return}if(e.key===`BrowserForward`){e.preventDefault(),pr();return}if(e.key===`Escape`&&T.open){e.preventDefault(),xn();return}let t=Ht(e);if(t===U.closeTab)e.preventDefault(),Zn(vy(An.current));else if(t===U.newTab)e.preventDefault(),qn();else if(t===U.reopenTab)e.preventDefault(),Qn();else if(t===U.goBack)e.preventDefault(),fr();else if(t===U.goForward)e.preventDefault(),pr();else if(t===U.goUp)e.preventDefault(),mr();else if(t===U.find)e.preventDefault(),J===`files`?Cn():wn();else if(t===U.location)e.preventDefault(),Me(e=>e+1);else if(t===U.home){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&$n(t)}else t===U.iconsView?(e.preventDefault(),J===`files`&&Ir({mode:`grid`})):t===U.detailsView?(e.preventDefault(),J===`files`&&Ir({mode:`list`})):t===U.nextTab?(e.preventDefault(),er(1)):t===U.previousTab?(e.preventDefault(),er(-1)):t===U.hidden||t===`alt+.`?(e.preventDefault(),Ue().then(()=>{Pe(e=>e+1),gr()})):t===U.undo?(e.preventDefault(),Nr(!0)):t===U.redo?(e.preventDefault(),Nr(!1)):t===U.splitView?(e.preventDefault(),tr()):J!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Dn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[U,J,T.open,Zn,Qn,qn,fr,pr,mr,Cn,wn,xn,Dn,Ir,er,$n,p,gr,Nr,tr]),(0,D.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),fr()):e.button===4&&(e.preventDefault(),pr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[fr,pr]),(0,D.useEffect)(()=>{if(!P.available||J!==`files`)return;let e=new Set;for(let n of t){if(gy(n)!==`files`)continue;let t=_y(n);if(t&&!md(t)){if(f(t)){let n=wy(l(t));n&&e.add(n)}else e.add(t)}}e.size>0&&P.send({type:`fs.watch`,payload:{paths:[...e]}})},[J,en,t]),(0,D.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=An.current.tabs.filter(e=>gy(e)===`files`&&Cy(_y(e),n));r.length!==0&&($t(),be(n,!1,dn).then(e=>{for(let t of r){let n=An.current.tabs.find(e=>e.id===t.id);n&&gy(n)===`files`&&!n.loading&&Cy(_y(n),e.path)&&Bn(t.id,()=>({listing:e}))}},()=>void 0))})},[dn,Bn]);let ri=q.index>0,ai=q.index<q.history.length-1,oi=(e,t)=>{let n=by(e,ln),r=e.listing?.path??e.history[e.index]??``,i=f(r),a=i&&ne(r);return(0,F.jsx)(Cc,{confirmDelete:B?.confirmDelete??!1,previewVideoAudio:B?.previewVideoAudio??!1,previewVideoAutoplay:B?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?He:Ge,onActivate:()=>Je(t?`primary`:`secondary`),enableShortcuts:(!an||(t?qe===`primary`:qe===`secondary`))&&(!i||a),error:e.error,find:e.id===cn.id?{...T,currentPath:bn<0?null:yn[bn]}:void 0,imageStripHeight:gn,listing:e.listing,loading:e.loading,onImageStripHeight:zr,readOnly:i&&!a||md(e.listing?.path??``),onOpen:(t,n)=>{n?qn(t):Wn(e.id,t)},onOpenFile:(t,n)=>{md(t)?yd(t).catch(e=>void la(Sy(e))):s(t)?B?.archiveHandler??!1?n?qn(t):Wn(e.id,t):ye(t):f(t)?(async()=>{let e=await Se(t,L.current,Ey(t));if(!e.path&&K(e.error)){let n=l(t),r=Jt(n);r&&Xt(n);let i=await da(n,!!r);i&&(Yt(n,i),e=await Se(t,L.current,i))}e.path?ye(e.path):e.error&&la(e.error)})():ye(t)},onRefresh:()=>{let t=e.listing?.path;t&&Jn(t)},onRename:Yn,onSelectionCountChange:t?cr:lr,onSetTags:(t,n,r)=>Br(e.id,t,n,r),selectionMenuRequest:t?lt.primary:lt.secondary,onSort:t=>Vr(e.id,t),onPaste:Or,onClipboardChanged:()=>void wr(),onTransfer:jr,onAddToTray:e=>void vr(e),onAddFavorite:e=>void br(e),openOnSingleClick:B?.openOnSingleClick??!1,pendingRename:dt&&t===(qe===`primary`)&&Cy(dt.directory,e.listing?.path??``)?dt.path:null,pendingRenameToken:dt?.token??0,refreshToken:Ne,shortcuts:U,showCheckboxes:B?.showCheckboxes??!0,showImages:hn,view:n})},si=T.open&&(0,F.jsx)(qu,{current:bn,focusToken:A,matchCase:T.matchCase,mode:T.mode,onClose:xn,onMatchCase:()=>E(e=>({...e,matchCase:!e.matchCase})),onMode:()=>E(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>On(1),onPrevious:()=>On(-1),onQuery:e=>E(t=>({...t,query:e})),onRegex:()=>E(e=>({...e,regex:!e.regex})),query:T.query,regex:T.regex,total:yn.length}),ci=J===`files`&&f(tn),li=ci&&ne(tn),di=ci&&q.listing?.archiveEncrypted===!0,fi=async e=>{if(!ci)return;let t=l(tn),n=wy(t);if(!n)return;let r=e===`named`;if(e===`auto`){let e=Cy(tn,t)?q.listing?.entries??[]:(await be(t,!1,!1,L.current,Ey(t))).entries;r=!(e.length===1&&e[0].isDirectory)}let i=n.includes(`\\`)?`\\`:`/`,a=r?`${n.replace(/[\\/]+$/,``)}${i}${Ty(t)}`:n;await pi(a)},pi=async t=>{let n=await xe(tn,t,L.current,Ey(tn));if(!n.ok&&K(n.error)){let e=l(tn),r=Jt(e);r&&Xt(e);let i=await da(e,!!r);i&&(Yt(e,i),n=await xe(tn,t,L.current,i))}n.ok?(Jn(t),$t(),Wn(q.id,t,!0)):la(`${e(`Could not extract the archive.`)}${n.error?`\n${n.error}`:``}`)},mi=async()=>{if(!ci)return;let e=await ia(wy(l(tn))??void 0);e&&await pi(e)},hi=(0,F.jsxs)(Ny,{children:[(0,F.jsx)(Py,{"data-shortcut":Ut(U.goBack),disabled:!ri,onClick:e=>{q.index>0&&Vt(e)?qn(q.history[q.index-1]):fr()},title:e(`Back`),type:`button`,children:(0,F.jsx)(ti,{})}),(0,F.jsx)(Py,{"data-shortcut":Ut(U.goForward),disabled:!ai,onClick:e=>{q.index<q.history.length-1&&Vt(e)?qn(q.history[q.index+1]):pr()},title:e(`Forward`),type:`button`,children:(0,F.jsx)(ni,{})}),(0,F.jsx)(Py,{"data-shortcut":Ut(U.goUp),disabled:J!==`files`||!nn,onClick:e=>{nn&&(Vt(e)?qn(nn):$n(nn))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(Qr,{})}),(0,F.jsx)(Zf,{focusToken:je,icon:_n,label:J===`files`?void 0:e(Jv[J]),onContextMenu:J===`files`?(e,t,n)=>nt({x:t,y:n,path:e}):void 0,onNavigate:$n,path:J===`files`?tn:en}),J===`files`&&(!ci||li)&&(0,F.jsx)(Py,{onClick:e=>or(e,tn,()=>void Wn(q.id,tn,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)(ei,{})}),(0,F.jsx)(Py,{"data-shortcut":Ut(U.find),onClick:wn,title:e(`Search`),type:`button`,children:(0,F.jsx)(Zr,{})}),st.primary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ly,{}),(0,F.jsx)(Py,{onClick:e=>ur(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)(ea,{})})]}),ci&&(0,F.jsxs)(Fy,{children:[di&&(0,F.jsxs)(Iy,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(ta,{size:12}),e(`Encrypted archive`)]}),(0,F.jsx)(Ly,{}),(0,F.jsx)(Py,{onClick:()=>void mi(),onContextMenu:e=>{e.preventDefault(),Qe({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,F.jsx)(yi,{})}),(0,F.jsx)($a,{icon:(0,F.jsx)(Gi,{size:15}),onChange:e=>{let t=Number(e);I(t),L.current=t,ci&&Wn(q.id,tn,!0)},options:dy.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(dy.find(e=>e.value===String(le))?.label??`Auto`)}`,value:String(le)})]})]}),_i=j.open?{...j,index:N}:null;return(0,F.jsx)(kn,{value:mn,children:(0,F.jsxs)(ky,{$rounded:w,children:[(0,F.jsx)(uu,{settings:B}),(0,F.jsx)(Cv,{activeId:q.id,onClose:Zn,onNewTab:()=>qn(),onReorder:Hr,onTransferToTab:jr,onSelect:i,onViewChange:Ir,onColumns:Lr,onShowImages:Rr,showImages:hn,tasks:pt,onClearTasks:Mr,activityOpen:bt,onActivityOpenChange:St,trayCount:G.length+Et.length,trayVisible:At,onToggleTray:Ar,split:an,canSplit:J===`files`,onToggleSplit:tr,details:Fe,canDetails:J===`files`||J===`recycle`||J===`gallery`,onToggleDetails:()=>Ie(e=>!e),currentFolder:J===`files`&&!md(tn)?tn:``,shortcuts:U,view:un,tabs:t.filter(e=>!e.hidden).map(n=>{let r=gy(n),i=_y(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?_y(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?jn(mn,i):void 0,archive:r===`files`&&f(i),split:!!a,title:r===`files`?Mn(mn,i,_(i)||e(`Files`)):e(Jv[r]),partner:a?{title:Mn(mn,o,_(o)||e(`Files`)),place:jn(mn,o)}:void 0}})}),(0,F.jsxs)(Ay,{children:[(0,F.jsx)(Mg,{activeKind:J,currentPath:J===`files`?en:``,drives:h,historyVersion:ge,onNavigate:$n,onOpenView:Xn,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:z,recentLimit:de,version:ke}),(0,F.jsxs)(jy,{children:[J!==`files`&&hi,(0,F.jsxs)(My,{children:[J!==`files`&&j.open&&(0,F.jsx)(qu,{current:N,focusToken:ae,matchCase:j.matchCase,mode:j.mode,onClose:Tn,onMatchCase:()=>ie(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ie(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>En(1),onPrevious:()=>En(-1),onQuery:e=>ie(t=>({...t,query:e})),onRegex:()=>ie(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:j.query,regex:j.regex,total:se}),J===`files`?an&&rn?(0,F.jsxs)(zy,{ref:ir,children:[(0,F.jsxs)(By,{style:{flex:u},children:[(0,F.jsxs)(Ry,{$active:qe===`primary`,onPointerDown:()=>Je(`primary`),children:[(0,F.jsx)(Py,{"data-shortcut":Ut(U.goBack),disabled:!ri,onClick:e=>{let t=q.index-1;t<0||(Vt(e)?qn(q.history[t]):Kn(q.id,q.history[t],t))},title:e(`Back`),type:`button`,children:(0,F.jsx)(ti,{})}),(0,F.jsx)(Py,{"data-shortcut":Ut(U.goForward),disabled:!ai,onClick:e=>{let t=q.index+1;t>=q.history.length||(Vt(e)?qn(q.history[t]):Kn(q.id,q.history[t],t))},title:e(`Forward`),type:`button`,children:(0,F.jsx)(ni,{})}),(0,F.jsx)(Py,{"data-shortcut":Ut(U.goUp),disabled:!nn,onClick:e=>{nn&&(Vt(e)?qn(nn):Wn(q.id,nn))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(Qr,{})}),(0,F.jsx)(Zf,{focusToken:qe===`primary`?je:void 0,onContextMenu:(e,t,n)=>nt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?qn(e):void Wn(q.id,e),path:tn}),(0,F.jsx)(Py,{onClick:e=>or(e,tn,()=>void Wn(q.id,tn,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)(ei,{})}),(0,F.jsx)(Py,{"data-shortcut":Ut(U.find),onClick:Cn,title:e(`Search`),type:`button`,children:(0,F.jsx)(Zr,{})}),st.primary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ly,{}),(0,F.jsx)(Py,{onClick:e=>ur(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)(ea,{})})]})]}),oi(q,!0),qe===`primary`&&si]}),(0,F.jsx)(Vy,{onDoubleClick:()=>d(.5),onPointerDown:ar,title:e(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(By,{$enter:!0,style:{flex:1-u},children:[(0,F.jsxs)(Ry,{$active:qe===`secondary`,onPointerDown:()=>Je(`secondary`),children:[(0,F.jsx)(Py,{"data-shortcut":Ut(U.goBack),disabled:rn.index<=0,onClick:e=>{let t=rn.index-1;t<0||(Vt(e)?qn(rn.history[t]):Kn(rn.id,rn.history[t],t))},title:e(`Back`),type:`button`,children:(0,F.jsx)(ti,{})}),(0,F.jsx)(Py,{"data-shortcut":Ut(U.goForward),disabled:rn.index>=rn.history.length-1,onClick:e=>{let t=rn.index+1;t>=rn.history.length||(Vt(e)?qn(rn.history[t]):Kn(rn.id,rn.history[t],t))},title:e(`Forward`),type:`button`,children:(0,F.jsx)(ni,{})}),(0,F.jsx)(Py,{"data-shortcut":Ut(U.goUp),disabled:!sn,onClick:e=>{sn&&(Vt(e)?qn(sn):Wn(rn.id,sn))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(Qr,{})}),(0,F.jsx)(Zf,{focusToken:qe===`secondary`?je:void 0,onContextMenu:(e,t,n)=>nt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?qn(e):void Wn(rn.id,e),path:on}),(0,F.jsx)(Py,{onClick:e=>or(e,on,()=>void Wn(rn.id,on,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)(ei,{})}),(0,F.jsx)(Py,{"data-shortcut":Ut(U.find),onClick:Cn,title:e(`Search`),type:`button`,children:(0,F.jsx)(Zr,{})}),st.secondary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ly,{}),(0,F.jsx)(Py,{onClick:e=>ur(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)(ea,{})})]})]}),oi(rn,!1),qe===`secondary`&&si]}),(0,F.jsx)(Lo,{info:rr,onWidth:nr,open:Fe,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,width:Re})]}):(0,F.jsxs)(Uy,{children:[(0,F.jsxs)(Wy,{children:[hi,(0,F.jsxs)(Hy,{children:[oi(q,!0),si]})]}),(0,F.jsx)(Lo,{info:Ve,onWidth:nr,open:Fe,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,width:Re})]}):J===`home`?(0,F.jsx)(Kf,{drives:h,find:_i,historyVersion:ge,onSearchMatches:ce,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:qr,onHistoryChanged:()=>ve(e=>e+1),onAddToTray:e=>void vr(e),onAddFavorite:e=>void br(e),settingsVersion:ke,onOpen:$n,onLayoutChanged:Kr,onPlacesChanged:m,onRecentCleared:Y,places:p,recent:z,recentLimit:de,visibilityVersion:Ne}):J===`settings`?(0,F.jsx)(km,{appInfo:v,find:_i,focusSection:S,onSearchMatches:ce,onSettingsChanged:Kr}):J===`gallery`?(0,F.jsx)(vg,{confirmDelete:B?.confirmDelete??!1,find:_i,onSearchMatches:ce,openOnSingleClick:B?.openOnSingleClick??!1,onAddToTray:e=>void vr(e),onAddFavorite:e=>void br(e),shortcuts:U,showCheckboxes:B?.showCheckboxes??!0,showDetails:Fe,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,view:un}):(0,F.jsx)(pp,{find:_i,onOpenLocation:$n,onShowDetails:()=>Ie(!0),platform:v?.platform,showDetails:Fe,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1})]},J),(0,F.jsxs)(Jy,{children:[(0,F.jsx)(`span`,{children:J===`files`&&q.listing?Dy(e,q.listing):``}),v?(0,F.jsxs)(Gy,{children:[(0,F.jsxs)(`span`,{children:[`v`,v.version,` · `,v.platform]}),ee?.available&&(0,F.jsxs)(Ky,{onClick:()=>{C(`updates`),Xn(`settings`)},title:e(`Version {version} is available.`,{version:ee.latest}),type:`button`,children:[(0,F.jsx)(qy,{}),e(`Update available`)]})]}):(0,F.jsx)(`span`,{children:`browser preview`})]})]})]}),(0,F.jsx)(Vs,{clipboardItems:Et,clipboardMove:Ot,currentDirectory:J===`files`?en:``,items:G,onAdd:e=>void vr(e),onClear:xr,onClose:()=>Nt(!1),onCopyToClipboard:e=>void Tr(e),onPosition:kr,onRemove:yr,onTransfer:jr,position:qt,visible:At}),Ye&&(0,F.jsx)(Xa,{creationOnly:!0,directory:Ye.directory,menu:{x:Ye.x,y:Ye.y,paths:[],background:!0},onClose:()=>Xe(null),onCreateFile:e=>void dr(e),onCreateFolder:e=>void dr(null,e),shortcuts:U}),tt&&(0,F.jsx)(Xa,{allowCompression:!0,directory:wy(tt.path)??tt.path,menu:{x:tt.x,y:tt.y,paths:[tt.path]},onAddToTray:e=>void vr(e),onAddFavorite:e=>void br(e),onArchiveCreated:e=>{e&&Jn(wy(tt.path)??tt.path)},onClose:()=>nt(null),onCompressTo:(e,t)=>ot({paths:e,name:t}),onCopy:(e,t)=>void mt(e,t),onDelete:e=>void yt(e,!1).then(()=>Jn(wy(tt.path)??tt.path)),onOpen:(e,t)=>t?qn(e):void Wn(q.id,e),onOpenFile:e=>void ye(e),onPaste:e=>void vt(e).then(t=>{t&&Jn(e)}),onRefresh:()=>Jn(tt.path),shortcuts:U,target:{path:tt.path,isDirectory:!0}}),at&&(0,F.jsx)(po,{initialDirectory:wy(tt?.path??tn)??tn,initialName:at.name,onCancel:()=>ot(null),onCompress:async e=>{let t=await Ft(at.paths,e);return!t.ok&&t.error&&la(t.error),t.ok}}),Ze&&(0,F.jsx)(Ra,{items:[{label:e(`Extract here`),onSelect:()=>void fi(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void fi(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void fi(`auto`)}],onClose:()=>Qe(null),x:Ze.x,y:Ze.y}),zt&&(0,F.jsx)(hu,{delaySeconds:zt.prompt.delaySeconds,hits:zt.prompt.hits,onCancel:()=>{zt.resolve(!1),Wt(null)},onConfirm:()=>{zt.resolve(!0),Wt(null)},permanent:zt.prompt.permanent},zt.id),(0,F.jsx)(Au,{}),(0,F.jsx)(Lu,{}),a&&(0,F.jsx)(Yv,{code:a.code,deviceName:a.deviceName,onAccept:()=>{dd(a.requestId,!0),o(null)},onReject:()=>{dd(a.requestId,!1),o(null)}}),(0,F.jsx)(Uv,{}),(0,F.jsx)(me,{})]})})}var ky=i.div`
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
`,Ay=i.div`
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
`,jy=i.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,My=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Na}
`,Ny=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Py=i.button`
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
`,Fy=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Iy=i.span`
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
`,Ly=i.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Ry=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,zy=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,By=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Ia:``}
`,Vy=i.div`
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
        ${La}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,Hy=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Uy=i.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Wy=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Gy=i.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Ky=i.button`
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
`,qy=i.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Jy=i.footer`
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
`;function Yy({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:l,onSelect:u}){let d=R(),f=hc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,D.useState)(e),[v,y]=(0,D.useState)(null),[ee,b]=(0,D.useState)(!0),[x,te]=(0,D.useState)(null),[S,C]=(0,D.useState)(()=>new Set),[w,T]=(0,D.useState)(a??[]),[ne,O]=(0,D.useState)([]),[k,A]=(0,D.useState)([]),[re,j]=(0,D.useState)([]),[ie,ae]=(0,D.useState)([]),[M,N]=(0,D.useState)(``),[oe,se]=(0,D.useState)(m.length===0),[ce,le]=(0,D.useState)(`files`),[I,L]=(0,D.useState)(0),[z,ue]=(0,D.useState)(pn),[de,fe]=(0,D.useState)(0),[pe,B]=(0,D.useState)(0),[me,V]=(0,D.useState)(null),[he,ge]=(0,D.useState)(null),[ve,ye]=(0,D.useState)(0),[xe,Se]=(0,D.useState)(null),[U,Ce]=(0,D.useState)(_e.imageStripHeight);(0,D.useEffect)(()=>{Ke().then(Se,()=>Se(null))},[]),(0,D.useEffect)(()=>{a?T(a):Ee().then(T,()=>T([]))},[a]),(0,D.useEffect)(()=>{De().then(O,()=>O([])),Le().then(A,()=>A([]))},[]),(0,D.useEffect)(()=>{let e=!0;return b(!0),te(null),C(new Set),N(p?``:_(h)),be(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),N(p?``:_(t.path)),b(!1))},t=>{e&&(te(t instanceof Error?t.message:String(t)),b(!1))}),()=>{e=!1}},[h,I,p]),(0,D.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),ue(e=>({...e,open:!0})),fe(e=>e+1);return}if(e.key===`Escape`){z.open?(ue(e=>({...e,open:!1,query:``})),B(0)):l();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Te();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Oe();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),ue(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),fe(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ue()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,D.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Te()):e.button===4&&(e.preventDefault(),Oe())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let we=e=>{let t=e.trim();t.length!==0&&c(t)!==c(h)&&(j(e=>[...e,h]),ae([]),le(`files`),g(t))},Te=()=>{let e=re.at(-1);e!==void 0&&(j(e=>e.slice(0,-1)),ae(e=>[h,...e]),g(e))},Oe=()=>{let e=ie[0];e!==void 0&&(ae(e=>e.slice(1)),j(e=>[...e,h]),g(e))},ke=v?.path??h,Ae=v?.parent??(h?E(h):null);(0,D.useEffect)(()=>{P.available&&ke&&P.send({type:`fs.watch`,payload:{paths:[ke]}})},[ke]),(0,D.useEffect)(()=>{if(P.available&&ke)return P.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&c(t.data.path)===c(ke)&&be(ke,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));C(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[ke]);let je=(v?.entries??[]).filter(e=>e.isDirectory||p&&(oe||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Me=v?{...v,entries:je}:null,Ne=z.open&&z.query.length>0,Pe=(0,D.useMemo)(()=>Ne?je.filter(e=>Sn(e.name,z)).map(e=>e.fullPath):[],[Ne,je,z]);(0,D.useEffect)(()=>{B(0)},[z.query,z.matchCase,z.regex,v?.path]);let Fe=Pe.length===0?-1:Math.min(pe,Pe.length-1),Ie=(0,D.useMemo)(()=>({...z,currentPath:Fe>=0?Pe[Fe]:null}),[z,Fe,Pe]),Re=xe?.defaultView??_e,ze=o??{mode:Re.mode,iconSize:Re.iconSize,gridSize:Re.gridSize,sort:`name`,sortDescending:!1,columns:Re.columns??[`type`,`size`,`modified`]},Be=(s??Re.showImages)&&ze.mode===`list`,Ve=M.trim(),He=Ve.length>0?Zy(Ve)?Ve:Xy(ke,Ve):null,Ue=()=>{if(ee||x)return;let e=n?[...S]:[...S].slice(0,1);e.length>0?u(e):He!==null&&Ve!==_(ke)?u([He]):!p&&ke&&u([ke])},We=(0,D.useCallback)(e=>{C(new Set(e)),N(e.length===1?_(e[0]):e.length===0&&!p?_(ke):``)},[ke,p]),Ge=e=>{v?.entries.find(t=>t.fullPath===e)?.isDirectory?we(e):p&&u([e])},qe=e=>N(e),Je=async e=>{let t=me;if(V(null),!t||!ke)return;let n=e===null?await xt(ke):await Tt(ke,e);n.ok&&n.path!==null&&(ue(e=>({...e,open:!1,query:``})),e!==null&&se(!0),L(e=>e+1),window.setTimeout(()=>{ge(n.path),ye(e=>e+1)},120))},Ye=()=>{ue(e=>({...e,open:!0})),fe(e=>e+1)},Xe=e=>{B(t=>Pe.length===0?0:(t+e+Pe.length)%Pe.length)},Ze=e=>(0,F.jsxs)(sb,{children:[(0,F.jsxs)(cb,{children:[(0,F.jsx)(lb,{children:d(p?`File name:`:`Folder:`)}),(0,F.jsx)(ub,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ue())},spellCheck:!1,value:M}),p&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(lb,{children:d(`Files of type:`)}),(0,F.jsx)($a,{onChange:e=>se(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:oe?`all`:`supported`,width:220})]})]}),(0,F.jsxs)(db,{children:[(0,F.jsx)(fb,{onClick:l,type:`button`,children:d(`Cancel`)}),(0,F.jsxs)(fb,{$primary:!0,disabled:ee||x!==null||p&&S.size===0&&Ve.length===0,onClick:Ue,type:`button`,children:[(0,F.jsx)(di,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),Qe=(0,F.jsxs)($y,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,F.jsxs)(eb,{children:[(0,F.jsxs)(tb,{children:[(0,F.jsx)(Jr,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,F.jsx)(nb,{onClick:l,title:d(`Cancel`),type:`button`,children:(0,F.jsx)(fi,{size:12})})]}),(0,F.jsxs)(rb,{children:[(0,F.jsx)(Mg,{activeKind:ce===`overview`?`home`:ce===`gallery`?`gallery`:`files`,currentPath:ke,drives:ne,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:w.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>we(e),onOpenView:e=>{e===`home`?(C(new Set),N(p?``:_(ke)),le(`overview`)):e===`gallery`&&p&&(C(new Set),N(``),le(`gallery`))},places:w,recent:k,recentLimit:10}),(0,F.jsx)(ib,{children:ce===`overview`?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Kf,{drives:ne,historyVersion:0,homePath:w.find(e=>e.kind===`home`)?.path??``,onOpen:e=>we(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:We,places:w,readOnly:!0,recent:k,recentLimit:10,visibilityVersion:0}),Ze(N)]}):ce===`gallery`?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(vg,{onPick:e=>u([e]),onSelectionChange:We,showCheckboxes:xe?.showCheckboxes??!0,view:{...H,columns:[]}}),Ze(N)]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(ab,{children:[(0,F.jsx)(ob,{disabled:re.length===0,onClick:Te,title:d(`Back`),type:`button`,children:(0,F.jsx)(ti,{})}),(0,F.jsx)(ob,{disabled:ie.length===0,onClick:Oe,title:d(`Forward`),type:`button`,children:(0,F.jsx)(ni,{})}),(0,F.jsx)(ob,{disabled:!Ae,onClick:()=>Ae&&we(Ae),title:d(`Up one level`),type:`button`,children:(0,F.jsx)(Qr,{})}),(0,F.jsx)(Zf,{onNavigate:we,path:ke}),(0,F.jsx)(ob,{onClick:e=>V({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,F.jsx)(ei,{})}),(0,F.jsx)(ob,{onClick:Ye,title:d(`Search`),type:`button`,children:(0,F.jsx)(Zr,{})}),f.available&&(0,F.jsx)(ob,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,F.jsx)(ea,{})})]}),z.open&&(0,F.jsx)(qu,{current:Fe,focusToken:de,matchCase:z.matchCase,mode:z.mode,onClose:()=>{ue(e=>({...e,open:!1,query:``})),B(0)},onMatchCase:()=>ue(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ue(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Xe(1),onPrevious:()=>Xe(-1),onQuery:e=>ue(t=>({...t,query:e})),onRegex:()=>ue(e=>({...e,regex:!e.regex})),query:z.query,regex:z.regex,total:Pe.length}),(0,F.jsx)(Cc,{allowBackgroundMenu:!0,confirmDelete:xe?.confirmDelete??!1,enableShortcuts:!0,error:x,find:Ie,imageStripHeight:U,loading:ee,listing:Me,onImageStripHeight:Ce,onOpen:Ge,onOpenFile:Ge,onRefresh:()=>L(e=>e+1),onSelectionChange:We,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:xe?.openOnSingleClick??!1,refreshToken:I,pendingRename:he,pendingRenameToken:ve,showCheckboxes:xe?.showCheckboxes??!0,showDetails:!1,showImages:Be,singleSelect:!n,view:ze}),Ze(qe)]})})]}),me&&(0,F.jsx)(Xa,{creationOnly:!0,directory:ke,menu:{x:me.x,y:me.y,paths:[],background:!0},onClose:()=>V(null),onCreateFile:p?e=>void Je(e):void 0,onCreateFolder:()=>void Je(null),shortcuts:Rt})]});return i?Qe:(0,xa.createPortal)((0,F.jsx)(Qy,{onPointerDown:e=>{e.target===e.currentTarget&&l()},children:Qe}),document.body)}function Xy(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Zy(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Qy=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Ia}
`,$y=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Sa}
    ${({$inline:e})=>e?``:ja}
`,eb=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,tb=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,nb=i.button`
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
`,rb=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,ib=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,ab=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,ob=i.button`
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
`,sb=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,cb=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,lb=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,ub=i.input`
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
`,db=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,fb=i.button`
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
`;function pb({mode:e,multiple:t,extensions:n,initial:r}){let i=R(),a=fe(),[o,s]=(0,D.useState)(null),[c,l]=(0,D.useState)({}),[u,d]=(0,D.useState)(null),[f,p]=(0,D.useState)(null),[m,h]=(0,D.useState)(null),g=(0,D.useRef)(0);(0,D.useEffect)(()=>{P.send({type:`app.ready`})},[]),(0,D.useEffect)(()=>(he(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>he(null)),[]),(0,D.useEffect)(()=>{Ke().then(e=>{s(e),x(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??_e,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,F.jsxs)(mb,{children:[(0,F.jsxs)(hb,{children:[(0,F.jsx)(gb,{children:(0,F.jsx)(pi,{size:17})}),(0,F.jsx)(_b,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,F.jsx)(sv,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,F.jsx)(vb,{children:(0,F.jsx)(yb,{onClick:()=>P.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,F.jsx)(fi,{size:12})})})]}),(0,F.jsx)(bb,{children:(0,F.jsx)(Yy,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>P.send({type:`pick.cancel`}),onSelect:e=>P.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,F.jsx)(hu,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,F.jsx)(Au,{}),(0,F.jsx)(me,{})]})}var mb=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,hb=i.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,gb=i.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,_b=i.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,vb=i.div`
    display: flex;
    flex-shrink: 0;
`,yb=i.button`
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
`,bb=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,xb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,xb);var Sb=document.getElementById(`root`),Cb=new URLSearchParams(window.location.search),wb=Cb.get(`picker`),Tb=Cb.get(`filter`)??``;Sb&&(0,O.createRoot)(Sb).render((0,F.jsx)(D.StrictMode,{children:(0,F.jsx)(z,{children:wb===`folder`||wb===`file`?(0,F.jsx)(pb,{extensions:Tb?Tb.split(`;`).filter(Boolean):[],initial:Cb.get(`initial`)??``,mode:wb,multiple:Cb.get(`multiple`)===`1`}):(0,F.jsx)(Oy,{})})}));