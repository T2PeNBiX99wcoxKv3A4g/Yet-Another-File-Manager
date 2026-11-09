import{A as e,C as t,D as n,M as r,O as i,S as a,T as o,_ as s,b as c,c as l,d as u,f as d,g as f,h as p,i as m,j as h,k as g,l as _,m as v,n as y,o as ee,p as b,r as x,s as te,t as S,u as C,v as w,w as T,x as E,y as ne}from"./theme-GtEFL-tp.js";var D=r(h(),1),O=g(),k=15e3,A=new Set,re=new Map,j=!1,ie=0,ae;function M(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function N(){j||(j=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>oe(e)))}function oe(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?re.get(n):void 0;n&&r&&(re.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),A.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function se(){if(ae!==void 0)return;let e=()=>{if(!M())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),ae=setInterval(e,5e3)}var P={get available(){return M()},send(e){M()?(N(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&se()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=k){if(!M())return Promise.reject(Error(`Native bridge is not available.`));N();let r=`req-${++ie}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{re.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);re.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return N(),A.add(e),()=>A.delete(e)}},F=T();function ce(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function le(e){return P.available?await P.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var I=(0,D.createContext)(ce({})),L=(0,D.createContext)(`en`);function R(){return(0,D.useContext)(I)}var z=({children:e})=>{let[t,n]=(0,D.useState)(()=>ce({})),[r,i]=(0,D.useState)(`en`);return(0,D.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await le();if(e)return;n(()=>ce(t.strings)),i(t.locale)}catch{}};t();let r=P.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,D.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,F.jsx)(I.Provider,{value:t,children:(0,F.jsx)(L.Provider,{value:r,children:e})})},ue=e=>P.send({type:e});function de(){let[e,t]=(0,D.useState)(!1);return(0,D.useEffect)(()=>{if(P.available)return P.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>ue(`window.minimize`),toggleMaximize:()=>ue(`window.toggleMaximize`),close:()=>ue(`window.close`)}}function fe(){return{onMouseDown:()=>ue(`window.drag`),onDoubleClick:()=>ue(`window.toggleMaximize`)}}function pe(){let[e,t]=(0,D.useState)(!1),{maximized:n}=de();return(0,D.useEffect)(()=>{if(!P.available)return;let e=!1;return P.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,D.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var B=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function me(){return(0,F.jsx)(F.Fragment,{children:B.map(([e,t])=>(0,F.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),P.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var V=null;function he(e){V=e}function ge(e){return V?V(e):Promise.resolve(!1)}var H={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},_e={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function ve(e,t){return P.available?await P.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function ye(e){return P.available?(await P.request(`fs.open`,{path:e})).ok:!1}async function be(e,t=!0,n=!1,r=0,i){return await P.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function xe(e,t,n=0,r){return await P.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function Se(e,t=0,n){return await P.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function U(e){return P.available?await P.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Ce(e,t){return P.available?(await P.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function we(e,t,n,r){return P.available?(await P.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Te(e,t=!1){return P.available?await P.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ee(){return(await P.request(`fs.places`)).places}async function De(){return(await P.request(`fs.drives`)).drives}async function Oe(e=!1){return(await P.request(`fs.recycle`,{includeOrphans:e})).entries}async function ke(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await ge({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await P.request(e,{...t,confirm:r.token})}return r}async function Ae(e=!1){let t=await P.request(`fs.recycle.empty`,{includeOrphans:e});await ke(`fs.recycle.empty`,{includeOrphans:e},t)}async function je(e){return!P.available||e.length===0?{ok:!1,done:0}:await P.request(`fs.recycle.restoreMany`,{ids:e})}async function Me(e){if(!P.available||e.length===0)return{ok:!1,done:0};let t=await P.request(`fs.recycle.deleteMany`,{ids:e}),n=await ke(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ne(e){P.available&&e&&await P.request(`fs.recycle.properties`,{id:e})}async function Pe(){if(!P.available)return{entries:[],cancelled:!0,failed:!1};let e=await P.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Fe(){return P.available?(await P.request(`fs.recycle.admin.purge`)).ok:!1}async function Ie(e=0,t=150,n=!1){return P.available?await P.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Le(){return P.available?(await P.request(`fs.recent`)).entries:[]}async function Re(){return P.available?(await P.request(`fs.frequent`)).entries:[]}async function ze(e){P.available&&await P.request(`fs.frequent.record`,{path:e})}async function Be(){await P.request(`fs.recent.clear`)}async function Ve(){await P.request(`fs.frequent.clear`)}async function He(){return await P.request(`fs.visibility`)}async function Ue(){return await P.request(`fs.hidden.toggle`)}async function We(){return P.available?await P.request(`fs.index.tasks`):{count:0,directories:[]}}var Ge={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Ke(){if(!P.available)return Ge;let e=await P.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function qe(){return P.available?(await P.request(`app.protection.defaults`)).paths??[]:[]}var Je={registered:!1,pathMatches:!1,registeredPath:null};async function Ye(){return P.available?await P.request(`app.defaultManager.status`):{registered:!1,pathMatches:!1,registeredPath:null}}async function Xe(){return P.available?await P.request(`app.archive.status`):Je}async function Ze(){return P.available?await P.request(`app.archive.register`):Je}async function Qe(){return P.available?await P.request(`app.archive.unregister`):Je}async function $e(e){if(!P.available)return e;let t=await P.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function et(e,t){P.available&&await P.request(`app.tabs.set`,{tabs:e,active:t})}async function tt(e,t,n){return P.available?(await P.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var nt={managed:0,private:0,workingSet:0,available:0};async function rt(){return P.available?await P.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function it(){return P.available?await P.request(`app.updateStatus`)??null:null}async function at(){return P.available?await P.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function ot(e){return!P.available||!e?!1:(await P.request(`app.openUrl`,{url:e})).ok}async function st(){return P.available?await P.request(`app.memory`):nt}async function ct(){return P.available?await P.request(`app.memory.trim`):nt}async function lt(){return P.available?(await P.request(`app.scheme`)).registered:!1}async function ut(e){return P.available?(await P.request(`app.scheme.set`,{enabled:e})).registered:!1}var dt={supported:!1,mode:`none`,active:!1,error:null};async function ft(){return P.available?await P.request(`app.startup`):dt}async function pt(e){return P.available?await P.request(`app.startup.set`,{mode:e}):dt}async function mt(e,t=!1){return!P.available||e.length===0?!1:(await P.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function ht(){return P.available?(await P.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function gt(){return P.available?await P.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function _t(e,t,n){return!P.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await P.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function W(e){return!P.available||e.length===0?[]:(await P.request(`fs.paths.info`,{paths:e})).entries}async function vt(e){return P.available?(await P.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function yt(e,t=!1){if(!P.available||e.length===0)return{ok:!1,error:null};let n=await P.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await ge({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await P.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function bt(e,t){return P.available?await P.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function xt(e,t=!1){return P.available?await P.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function St(e){return P.available?(await P.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Ct(e,t){return P.available?await P.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function wt(e,t,n){return P.available?await P.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Tt(e,t){return P.available?await P.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Et(e){P.available&&e.length!==0&&await P.request(`fs.operation.properties`,{paths:e})}async function Dt(e){P.available&&await P.request(`fs.operation.openWith`,{path:e})}async function Ot(e){P.available&&await P.request(`fs.operation.terminal`,{path:e})}async function kt(e){return P.available?await P.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function At(e,t){return P.available?(await P.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function jt(){return P.available?await P.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Mt(){return P.available?await P.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Nt(e){P.available&&await P.request(`fs.operation.showInExplorer`,{path:e})}async function G(e){return!P.available||e.length===0?{verbs:[],safe:!0}:await P.request(`shell.verbs`,{paths:e})}async function Pt(e,t,n,r){P.available&&e.length!==0&&await P.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Ft(e,t){return!P.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await P.request(`fs.operation.compress`,{...t,paths:e})}async function It(){return P.available?(await P.request(`app.tasks`)).tasks:[]}async function Lt(){P.available&&await P.request(`app.tasks.clear`)}var Rt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},zt=Rt.openInNewTab;function Bt(e){zt=e.trim()||Rt.openInNewTab}function Vt(e){let t=zt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Ht(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Ut(e){return e.split(`+`).filter(Boolean).map(e=>Wt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Wt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Gt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Kt=new Map;function qt(e){return c(f(e)?l(e):e)}function Jt(e){return Kt.get(qt(e))}function Yt(e,t){Kt.set(qt(e),t)}function Xt(e){Kt.delete(qt(e))}function K(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var Zt=new Map,Qt=new Map,q=new Set,J=0;function $t(){Zt.clear(),Qt.clear(),J+=1,q.forEach(e=>e())}function en(){let[e,t]=(0,D.useState)(J);return(0,D.useEffect)(()=>{let e=()=>t(J);return q.add(e),()=>{q.delete(e)}},[]),e}var tn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function nn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return tn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function rn(e,t,n=!1){let r=en(),i=e===null?``:nn(e,t,n),[a,o]=(0,D.useState)(()=>Zt.get(i)??null);return(0,D.useEffect)(()=>{if(e===null){o(null);return}if(!P.available)return;if(Zt.has(i)){o(Zt.get(i)??null);return}let r=!0;return P.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?Zt.set(i,e.dataUrl):Zt.delete(i),r&&o(e.dataUrl)},()=>{Zt.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function an(e){let[t,n]=(0,D.useState)(e);return(0,D.useEffect)(()=>{if(!e){n(null);return}if(!f(e)){n(e);return}let t=!0;return Se(e,0,Jt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function on(e){let t=en(),[n,r]=(0,D.useState)(()=>e?Qt.get(e)??null:null);return(0,D.useEffect)(()=>{if(!e||!P.available){r(null);return}if(Qt.has(e)){r(Qt.get(e)??null);return}let t=!0;return P.request(`fs.iconFile`,{path:e}).then(n=>{Qt.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{Qt.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var sn=null,cn=null;function ln(){return sn===null?P.available?(cn??=P.request(`app.thumbnails`).then(e=>(sn=e.base??``,sn),()=>(sn=``,``)),cn):Promise.resolve(``):Promise.resolve(sn)}function un(e,t=128,n=0){let[r,i]=(0,D.useState)(sn);return(0,D.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return ln().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function dn(e,t=0,n=``){let[r,i]=(0,D.useState)(sn);if((0,D.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return ln().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function fn(e,t=0){let[n,r]=(0,D.useState)(sn);return(0,D.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return ln().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var pn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},mn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function hn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=vn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=xn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var gn=`\0`,_n=``;function vn(e){return e.query!==gn&&(gn=e.query,_n=e.query.toLowerCase()),_n}var yn=`\0`,bn=null;function xn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===yn)return bn;yn=t;try{bn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{bn=null}return bn}function Sn(e,t){return hn(e,t)!==null}var Cn=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],wn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Tn(e){let t=Dn(e);for(let{kind:e}of Cn)if(wn[e].has(t))return e;return null}function En(e){return Tn(e)!==null}function Dn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var On=(0,D.createContext)({places:{},useIcons:!1}),kn=On.Provider;function An(){return(0,D.useContext)(On)}function jn(e,t){return e.places[c(t)]}function Mn(e,t,n){return jn(e,t)?.name||n}function Nn(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function Pn(e,t){try{localStorage.setItem(e,String(t))}catch{}}function Fn(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function In(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Ln=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,F.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,F.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Rn=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),zn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M14 3v4h4`})]}),Bn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,F.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,F.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Vn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,F.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),Hn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 19V5`}),(0,F.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Un=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,F.jsx)(`path`,{d:`M20 4v7h-7`})]}),Wn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 5v14`}),(0,F.jsx)(`path`,{d:`M5 12h14`})]}),Gn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M19 12H5`}),(0,F.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Kn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M5 12h14`}),(0,F.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),qn=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,F.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),Jn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,F.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),Yn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,F.jsx)(`path`,{d:`M12 12v8`})]}),Xn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,F.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),Zn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),Qn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,F.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),$n=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),er=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 7h16`}),(0,F.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,F.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,F.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),tr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),nr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),rr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,F.jsxs)(`defs`,{children:[(0,F.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,F.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,F.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,F.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,F.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,F.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,F.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,F.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,F.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,F.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),ir=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),ar=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,F.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,F.jsx)(`path`,{d:`m13 5-2 14`})]}),or=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,F.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,F.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),sr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,F.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),cr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,F.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,F.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),lr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),ur=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),dr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),fr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,F.jsx)(`path`,{d:`M8.5 14h7`})]}),pr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,F.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,F.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),mr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),hr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),gr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),_r=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),vr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),yr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,F.jsx)(`path`,{d:`m14 6 4 4`})]}),br=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,F.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),xr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,F.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Sr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 4v10`}),(0,F.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,F.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Cr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,F.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,F.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),wr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,F.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,F.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Tr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,F.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Er=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Dr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,F.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Or=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,F.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,F.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),kr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Ar=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,F.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,F.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,F.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),jr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,F.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Mr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,F.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Nr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,F.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,F.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Pr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,F.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Fr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,F.jsx)(`path`,{d:`M3.5 12h17`}),(0,F.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Ir=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Lr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,F.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Rr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,F.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,F.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),zr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Br=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 16V4`}),(0,F.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,F.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),Vr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),Hr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,F.jsx)(`path`,{d:`M12 4v16`})]}),Ur=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,F.jsx)(`path`,{d:`M15 4v16`})]}),Wr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,F.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,F.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,F.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),Gr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,F.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,F.jsx)(`path`,{d:`M12 14v2`})]});function Y(e,t){return({size:n=t,...r})=>(0,F.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var Kr=Y(Ln,18),qr=Y(Rn,18),Jr=Y(zn,18),Yr=Y(Bn,18),Xr=Y(Vn,16),Zr=Y(Hn,16),Qr=Y(Un,16),$r=Y(Wn,16),ei=Y(Gn,16),ti=Y(Kn,16),ni=Y(qn,12),ri=Y(Jn,18),ii=Y(Yn,14),ai=Y(Xn,14),oi=Y(Zn,14),si=Y(Qn,18),ci=Y($n,18),li=Y(er,18),ui=Y(tr,14),di=Y(nr,14),fi=Y(rr,18),pi=Y(ir,18),mi=Y(ar,18),hi=Y(or,18),gi=Y(sr,18),_i=Y(cr,18),vi=Y(lr,18),yi=Y(ur,18),bi=Y(dr,18),xi=Y(fr,18),Si=Y(pr,18),Ci=Y(mr,18),wi=Y(hr,18),Ti=Y(gr,18),Ei=Y(_r,18),Di=Y(vr,18),Oi=Y(yr,16),ki=Y(br,18),Ai=Y(xr,18),ji=Y(Sr,18),Mi=Y(Cr,18),Ni=Y(wr,18),Pi=Y(Tr,18),Fi=Y(Er,18),Ii=Y(Dr,18),Li=Y(Or,18),Ri=Y(kr,18),zi=Y(Ar,18),Bi=Y(jr,18),Vi=Y(Mr,18),Hi=Y(Nr,18),Ui=Y(Pr,18),Wi=Y(Fr,18),Gi=Y(Ir,18),Ki=Y(Lr,16),qi=Y(Rr,16),Ji=Y(zr,16),Yi=Y(Br,16),Xi=Y(Vr,16),Zi=Y(Hr,16),Qi=Y(Ur,16),$i=Y(Wr,16),ea=Y(Gr,14);async function ta(e,t,n){return P.available?(await P.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function na(e){return ta(`folder`,[],e??``)}function ra(e){return ta(`file`,e??[],``)}var ia=null,aa=null;function oa(e){ia=e}function sa(e){return ia?ia(e):Promise.resolve()}function ca(e){aa=e}function la(e,t=!1){return aa?aa(e,t):Promise.resolve(null)}var ua=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],da=null,fa=0,pa=new Set;function ma(){fa+=1;for(let e of pa)e()}function ha(e){return pa.add(e),()=>pa.delete(e)}function ga(){return fa}function _a(e){da=e,ma()}function va(){return(0,D.useSyncExternalStore)(ha,ga,ga),da}var ya=e(),ba=n`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,xa=o`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Sa=o`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ca=o`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,wa=o`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Ta=o`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Ea=o`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Da=o`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Oa=o`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,ka=n`animation: ${xa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Aa=n`animation: ${Sa} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,ja=n`animation: ${Ca} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${wa} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var Ma=n`animation: ${Ta} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Na=n`animation: ${Ea} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Pa=n`animation: ${Da} 140ms ease-out;`,Fa=n`animation: ${Oa} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Ia({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,D.useState)([]),s=(0,D.useRef)(void 0);if((0,D.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,D.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,F.jsx)(Ka,{},`group-rule-${i}`)),n.push((0,F.jsx)(Ga,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,F.jsx)(Ka,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,F.jsxs)(Ha,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,F.jsx)(Ua,{children:e.loading?(0,F.jsx)(qa,{}):e.icon}),(0,F.jsx)(Wa,{children:e.label}),a?(0,F.jsx)(ni,{size:12}):e.checked&&(0,F.jsx)(ui,{size:12})]},`${e.label}-${i}`))}),n};return(0,ya.createPortal)((0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(La,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ra,{children:r.map((e,t)=>(0,F.jsxs)(za,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,F.jsx)(Ba,{children:e.icon}),(0,F.jsx)(Va,{children:e.label})]},`${e.label}-${t}`))}),(0,F.jsx)(Ka,{})]}),m(n,0)]}),a.map((e,t)=>(0,F.jsx)(La,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var La=i.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${ba}
    ${Aa}
    transform-origin: top left;
`,Ra=i.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,za=i.button`
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
`,Ba=i.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Va=i.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ha=i.button`
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
`,Ua=i.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Wa=i.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ga=i.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Ka=i.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,qa=i.span`
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
`;function Ja({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:l,onDelete:u,onCopy:d,onPaste:p,onCreateFolder:m,onCreateFile:h,creationOnly:g=!1,onRefresh:v,onAddToTray:y,onAddFavorite:ee,allowCompression:b=!1,onCompressTo:x,onArchiveCreated:te}){let S=R(),C=va(),w=f(t),[T,E]=(0,D.useState)({verbs:[],safe:!0,loading:!1}),[ne,O]=(0,D.useState)({recommended:[],other:[],loading:!1}),[k,A]=(0,D.useState)(null),re=(0,D.useRef)(0),j=(0,D.useRef)(0),ie=e?.paths.length===1,ae=e?.background?t?[t]:[]:e?.paths??[];if((0,D.useEffect)(()=>{if(!e){E({verbs:[],safe:!0,loading:!1}),O({recommended:[],other:[],loading:!1});return}let t=++re.current;E({verbs:[],safe:!0,loading:ae.length>0&&!w}),ae.length>0&&!w&&G(ae).then(e=>{re.current===t&&E({...e,loading:!1})},()=>{re.current===t&&E({verbs:[],safe:!0,loading:!1})});let r=++j.current;!w&&ie&&n?(O({recommended:[],other:[],loading:!0}),kt(n.path).then(e=>{j.current===r&&O({...e,loading:!1})},()=>{j.current===r&&O({recommended:[],other:[],loading:!1})})):O({recommended:[],other:[],loading:!1})},[e,ie,n?.path,n?.isDirectory,ae.length,w]),(0,D.useEffect)(()=>{if(!e||e.background||!ie||!n?.isDirectory){A(null);return}let t=!0;return St(n.path).then(e=>{t&&A(e)},()=>{t&&A(null)}),()=>{t=!1}},[e,ie,n?.path,n?.isDirectory]),!e)return null;let M=[],N=[],oe=()=>{if(!ie||!n)return`Archive`;let e=_(n.path);if(n.isDirectory)return e;let t=e.lastIndexOf(`.`);return t>0?e.slice(0,t):e},se=async e=>{let n=await Ft(e,{directory:t,name:oe(),format:`zip`,level:5});n.ok&&n.path?te?.(n.path,!0):sa(n.error??S(`Could not create the archive.`))},P=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},ce=async()=>{if(!n||k===null)return;let e=await Ct(n.path,!k);e.ok?(A(e.enabled),v?.()):sa(e.error??S(`Could not change the case sensitivity.`))},le=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await wt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await wt(e,t,`${a}\\${Xa(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?v?.():sa(o.error??S(`Could not create the link.`))},I=async e=>{if(!n)return;let r=await na(t);r&&await le(e,n.path,r,_(n.path),e.endsWith(`-copy`))},L=async e=>{let n=C?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=c(a)===c(t);await le(n,r.path,t,_(r.path),i&&!o)}},z=async()=>{let t=(await W(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&_a({paths:t})},ue=()=>{let e=C?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:S(`Cancel selected link`),icon:(0,F.jsx)(di,{size:14}),onSelect:()=>_a(null)},...t?[{label:S(`Hard link`),icon:(0,F.jsx)(Jr,{size:14}),separatorBefore:!0,onSelect:()=>void L(`hard`)}]:[],{label:S(`Symbolic link`),icon:(0,F.jsx)(Jr,{size:14}),separatorBefore:!t,onSelect:()=>void L(`symbolic-file`)},...n?[{label:S(`Directory junction`),icon:(0,F.jsx)(qr,{size:14}),onSelect:()=>void L(`junction`)},{label:S(`Smart copy`),icon:(0,F.jsx)(Ki,{size:14}),separatorBefore:!0,onSelect:()=>void L(`smart-copy`)},{label:S(`Smart mirror`),icon:(0,F.jsx)(Ki,{size:14}),onSelect:()=>void L(`smart-mirror`)},{label:S(`Multi-version smart copy`),icon:(0,F.jsx)(Ki,{size:14}),onSelect:()=>void L(`multi-version-smart-copy`)},{label:S(`Hardlink copy`),icon:(0,F.jsx)(Ki,{size:14}),separatorBefore:!0,onSelect:()=>void L(`hard-copy`)},{label:S(`Symbolic link copy`),icon:(0,F.jsx)(Ki,{size:14}),onSelect:()=>void L(`symbolic-copy`)}]:[]]};if(e.background){if(m&&N.push({label:S(`New folder`),icon:(0,F.jsx)($r,{size:16}),shortcut:Ut(r.newFolder),onSelect:m}),h||m){let e=[];m&&(e.push({label:S(`Folder`),icon:(0,F.jsx)(qr,{size:14}),onSelect:()=>m(!1)}),w||e.push({label:S(`Case-sensitive folder`),icon:(0,F.jsx)(qr,{size:14}),onSelect:()=>m(!0)})),h&&e.push(...ua.map((e,t)=>({label:`${S(e.label)} (${e.extension})`,icon:(0,F.jsx)(Jr,{size:14}),separatorBefore:t===0,onSelect:()=>h(e.extension)}))),M.push({label:S(`New`),icon:(0,F.jsx)($r,{size:14}),children:e,onSelect:()=>void 0})}if(w||M.push({label:S(`Create link`),icon:(0,F.jsx)(Yi,{size:14}),disabled:!C,children:ue(),onSelect:()=>void 0}),g)return(0,F.jsx)(Ia,{items:M,onClose:a,quick:N,x:e.x,y:e.y});!w&&b&&(M.push({label:S(`Open in Terminal`),icon:(0,F.jsx)(Vi,{size:14}),onSelect:()=>void Ot(t)}),M.push({label:S(`Show in Explorer`),icon:(0,F.jsx)(qr,{size:14}),separatorBefore:!0,onSelect:()=>void Nt(t)})),p&&N.push({label:S(`Paste`),icon:(0,F.jsx)(Ji,{size:16}),disabled:!i,shortcut:Ut(r.paste),onSelect:()=>p(t)}),v&&N.push({label:S(`Refresh`),icon:(0,F.jsx)(Qr,{size:16}),shortcut:Ut(r.refresh),onSelect:v}),w||N.push({label:S(`Properties`),icon:(0,F.jsx)(ri,{size:16}),shortcut:Ut(r.properties),onSelect:()=>void Et([t])})}else{if(o&&M.push({label:S(`Open`),icon:(0,F.jsx)(ti,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&M.push({label:S(`Open in new tab`),icon:(0,F.jsx)($r,{size:14}),onSelect:()=>o(n.path,!0)}),p&&M.push({label:S(`Paste into folder`),icon:(0,F.jsx)(Ji,{size:14}),disabled:!i,onSelect:()=>p(n.path)}),w||M.push({label:S(`Open in Terminal`),icon:(0,F.jsx)(Vi,{size:14}),onSelect:()=>void Ot(n.path)})),!w&&ie&&n){let e=[];if(ne.loading)e.push({label:S(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ne.recommended)e.push({label:t.name,group:S(`Suggested apps`),icon:t.icon?(0,F.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,F.jsx)(bi,{size:14}),onSelect:()=>void At(n.path,t.path).then(e=>{e||Dt(n.path)})});for(let t of ne.other)e.push({label:t.name,group:S(`Other apps`),icon:t.icon?(0,F.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,F.jsx)(bi,{size:14}),onSelect:()=>void At(n.path,t.path).then(e=>{e||Dt(n.path)})})}e.push({label:S(`Choose another app…`),icon:(0,F.jsx)(bi,{size:14}),separatorBefore:!0,onSelect:()=>void Dt(n.path)}),M.push({label:S(`Open with`),icon:(0,F.jsx)(bi,{size:14}),children:e,onSelect:()=>void Dt(n.path)})}if(w||M.push({label:S(`Compress`),icon:(0,F.jsx)(vi,{size:14}),separatorBefore:!0,children:[{label:S(`Compress to ZIP`),icon:(0,F.jsx)(vi,{size:14}),onSelect:()=>void se(e.paths)},{label:S(`Compress to…`),icon:(0,F.jsx)(vi,{size:14}),onSelect:()=>x?.(e.paths,oe())}],onSelect:()=>void 0}),!w&&(e?.paths.length??0)>0){let e=[{label:S(`Select link source`),icon:(0,F.jsx)(Yi,{size:14}),onSelect:()=>void z()},...C?[{label:S(`Cancel selected link`),icon:(0,F.jsx)(di,{size:14}),onSelect:()=>_a(null)}]:[],...ie&&n?n.isDirectory?[{label:S(`Symbolic link`),icon:(0,F.jsx)(qr,{size:14}),separatorBefore:!0,onSelect:()=>void I(`symbolic-folder`)},{label:S(`Directory junction`),icon:(0,F.jsx)(qr,{size:14}),onSelect:()=>void I(`junction`)},{label:S(`Smart copy`),icon:(0,F.jsx)(Ki,{size:14}),separatorBefore:!0,onSelect:()=>void I(`smart-copy`)},{label:S(`Smart mirror`),icon:(0,F.jsx)(Ki,{size:14}),onSelect:()=>void I(`smart-mirror`)},{label:S(`Multi-version smart copy`),icon:(0,F.jsx)(Ki,{size:14}),onSelect:()=>void I(`multi-version-smart-copy`)},{label:S(`Hardlink copy`),icon:(0,F.jsx)(Ki,{size:14}),separatorBefore:!0,onSelect:()=>void I(`hard-copy`)},{label:S(`Symbolic link copy`),icon:(0,F.jsx)(Ki,{size:14}),onSelect:()=>void I(`symbolic-copy`)}]:[{label:S(`Symbolic link`),icon:(0,F.jsx)(Jr,{size:14}),separatorBefore:!0,onSelect:()=>void I(`symbolic-file`)},{label:S(`Hard link`),icon:(0,F.jsx)(Jr,{size:14}),onSelect:()=>void I(`hard`)}]:[]];M.push({label:S(`Create link`),icon:(0,F.jsx)(Yi,{size:14}),children:e,onSelect:()=>void 0})}!w&&n?.isDirectory&&k!==null&&M.push({label:S(`Case-sensitive names`),icon:(0,F.jsx)(qr,{size:14}),checked:k,onSelect:()=>void ce()}),M.push({label:S(`Copy as path`),icon:(0,F.jsx)(Ki,{size:14}),onSelect:()=>void P(e.paths)}),y&&M.push({label:S(`Add to file tray`),icon:(0,F.jsx)(Ui,{size:14}),onSelect:()=>y(e.paths)}),ee&&!w&&M.push({label:S(`Add to favorites`),icon:(0,F.jsx)(Gi,{size:14}),onSelect:()=>ee(e.paths)}),w||M.push({label:S(`Show in Explorer`),icon:(0,F.jsx)(qr,{size:14}),separatorBefore:!0,onSelect:()=>void Nt(e.paths[0])}),d&&N.push({label:S(`Cut`),icon:(0,F.jsx)(qi,{size:16}),shortcut:Ut(r.cut),onSelect:()=>d(e.paths,!0)},{label:S(`Copy`),icon:(0,F.jsx)(Ki,{size:16}),shortcut:Ut(r.copy),onSelect:()=>d(e.paths,!1)}),ie&&n&&l&&N.push({label:S(`Rename`),icon:(0,F.jsx)(Oi,{size:16}),shortcut:Ut(r.rename),onSelect:()=>l(n.path)}),u&&N.push({label:S(`Delete`),icon:(0,F.jsx)(li,{size:16}),danger:!0,shortcut:Ut(r.delete),onSelect:()=>u(e.paths)}),w||N.push({label:S(`Properties`),icon:(0,F.jsx)(ri,{size:16}),shortcut:Ut(r.properties),onSelect:()=>void Et(e.paths)})}if(T.loading)M.push({label:S(`More actions`),icon:(0,F.jsx)(bi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(T.verbs.length>0){let e={items:[],children:new Map};for(let t of T.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,F.jsx)(Ya,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Pt(ae,T.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];M.push({label:S(T.safe?`More actions`:`More actions (extensions)`),icon:(0,F.jsx)(bi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,F.jsx)(Ia,{items:M,onClose:a,quick:N,x:e.x,y:e.y})}function Ya({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,F.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,F.jsx)(ti,{size:14});case`document`:return(0,F.jsx)(Ei,{size:14});case`cut`:return(0,F.jsx)(qi,{size:14});case`copy`:return(0,F.jsx)(Ki,{size:14});case`paste`:return(0,F.jsx)(Ji,{size:14});case`trash`:return(0,F.jsx)(li,{size:14});case`pencil`:return(0,F.jsx)(Oi,{size:14});case`gear`:return(0,F.jsx)(ri,{size:14});case`star`:return(0,F.jsx)(Fi,{size:14});case`pin`:return(0,F.jsx)(ii,{size:14});case`executable`:return(0,F.jsx)(bi,{size:14});case`share`:return(0,F.jsx)(Yi,{size:14});case`arrow`:return(0,F.jsx)(ti,{size:14});default:return(0,F.jsx)(fi,{size:14})}}function Xa(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function Za({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let[c,l]=(0,D.useState)(null),u=(0,D.useRef)(null),d=t.find(t=>t.value===e)??t[0];return(0,D.useEffect)(()=>{if(!c)return;let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&u.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[c]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Qa,{$icon:a!==void 0,"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(c){l(null);return}let e=u.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;l({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:u,style:i&&!a?{width:i}:void 0,title:o??d?.title,type:`button`,children:[a===void 0?(0,F.jsx)($a,{children:d?.label??``}):(0,F.jsx)(eo,{children:a}),a===void 0&&(0,F.jsx)(to,{children:(0,F.jsx)(ni,{size:11})})]}),c&&(0,ya.createPortal)((0,F.jsx)(no,{"aria-label":`options`,"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:c.bottom,left:c.left,minWidth:c.width,top:c.top},children:t.map(t=>(0,F.jsxs)(ro,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),l(null)},role:`option`,title:t.title,type:`button`,children:[(0,F.jsx)(io,{children:t.label}),t.value===e&&(0,F.jsx)(ui,{size:11})]},t.value))}),document.body)]})}var Qa=i.button`
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
`,$a=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,eo=i.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,to=i.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,no=i.div`
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
    ${Aa}
`,ro=i.button`
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
`,io=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ao=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],oo=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],so=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],co=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],lo=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function uo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=R(),a=(0,D.useRef)(null),[o,s]=(0,D.useState)(e),[c,l]=(0,D.useState)(t),[u,d]=(0,D.useState)(`zip`),[f,p]=(0,D.useState)(`5`),[m,h]=(0,D.useState)(`default`),[g,_]=(0,D.useState)(`none`),[v,y]=(0,D.useState)(``),[ee,b]=(0,D.useState)(`0`),[x,te]=(0,D.useState)(!1);(0,D.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let S=ao.find(e=>e.value===u)??ao[0],C=u===`zip`||u===`zipx`,w=g!==`none`,T=C||u===`7z`,E=u===`zip`||u===`7z`,ne=async()=>{if(x||!c.trim()||!o||w&&v.length===0)return;te(!0);let e=await r({directory:o,name:c.trim(),format:u,level:S.level?Number(f):0,method:C?m:null,encryption:T?g:`none`,password:w?v:void 0,splitSize:E?Number(ee):0});te(!1),e&&n()};return(0,ya.createPortal)((0,F.jsx)(fo,{onPointerDown:e=>{e.target===e.currentTarget&&!x&&n()},children:(0,F.jsxs)(po,{"aria-modal":`true`,role:`dialog`,children:[(0,F.jsx)(mo,{children:i(`Compress to…`)}),(0,F.jsxs)(ho,{children:[(0,F.jsx)(go,{children:i(`Archive name`)}),(0,F.jsx)(_o,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ne()}}),(0,F.jsx)(vo,{children:S.extension})]}),(0,F.jsxs)(ho,{children:[(0,F.jsx)(go,{children:i(`Format`)}),(0,F.jsx)(Za,{onChange:e=>d(e),options:ao.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,F.jsxs)(ho,{children:[(0,F.jsx)(go,{children:i(`Method`)}),(0,F.jsx)(Za,{disabled:!C,onChange:h,options:oo.map(e=>({...e,label:i(e.label)})),value:C?m:`default`,width:236,zIndex:3700})]}),(0,F.jsxs)(ho,{children:[(0,F.jsx)(go,{children:i(`Encryption`)}),(0,F.jsx)(Za,{disabled:!T,onChange:e=>{_(e),e===`none`&&y(``)},options:so.map(e=>({...e,label:i(e.label)})),value:T?g:`none`,width:236,zIndex:3700})]}),w&&(0,F.jsxs)(ho,{children:[(0,F.jsx)(go,{children:i(`Password`)}),(0,F.jsx)(_o,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,F.jsxs)(ho,{children:[(0,F.jsx)(go,{children:i(`Split volumes`)}),(0,F.jsx)(Za,{disabled:!E,onChange:b,options:co.map(e=>({...e,label:i(e.label)})),value:E?ee:`0`,width:236,zIndex:3700})]}),(0,F.jsxs)(ho,{children:[(0,F.jsx)(go,{children:i(`Compression level`)}),(0,F.jsx)(Za,{disabled:!S.level,onChange:p,options:lo.map(e=>({...e,label:i(e.label)})),value:S.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,F.jsxs)(ho,{$stack:!0,children:[(0,F.jsx)(go,{children:i(`Destination`)}),(0,F.jsxs)(yo,{children:[(0,F.jsx)(bo,{title:o,children:o}),(0,F.jsx)(So,{disabled:x,onClick:()=>void na(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,F.jsxs)(xo,{children:[(0,F.jsx)(So,{disabled:x,onClick:n,type:`button`,children:i(`Cancel`)}),(0,F.jsx)(Co,{disabled:x||!c.trim()||w&&v.length===0,onClick:()=>void ne(),type:`button`,children:i(x?`Compressing…`:`Compress`)})]})]})}),document.body)}var fo=i.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Pa}
`,po=i.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${ka}
`,mo=i.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,ho=i.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,go=i.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,_o=i.input`
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
`,vo=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,yo=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,bo=i.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xo=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,So=i.button`
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
`,Co=i(So)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function wo({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=R(),c=(0,D.useRef)(null);return(0,D.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,ya.createPortal)((0,F.jsx)(To,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,F.jsxs)(Eo,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(Do,{children:t}),(0,F.jsx)(Oo,{children:n}),(0,F.jsxs)(ko,{children:[(0,F.jsx)(Ao,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,F.jsx)(Ao,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var To=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Pa}
`,Eo=i.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${ka}
`,Do=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Oo=i.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,ko=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Ao=i.button`
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
`,jo=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Mo=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),No=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Po=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Fo({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=R(),[l,u]=(0,D.useState)(!1),[d,f]=(0,D.useState)(!1),[p,m]=(0,D.useState)(!1),[h,g]=(0,D.useState)(0),[_,v]=(0,D.useState)(0),[y,ee]=(0,D.useState)(null),[b,x]=(0,D.useState)(!1),[te,S]=(0,D.useState)(!1),C=(0,D.useRef)(null),w=(0,D.useRef)(null),T=(0,D.useRef)(null),[E,ne]=(0,D.useState)(()=>{let e=Nn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),O=e?.path??null,k=an(O),A=e?Io(e.name):``,re=!!e&&!e.isDirectory&&jo.has(A),j=!!e&&!e.isDirectory&&Mo.has(A),ie=!!e&&!e.isDirectory&&No.has(A),ae=!!e&&!e.isDirectory&&Po.has(A),M=!!e&&!e.isDirectory&&A===`pdf`,N=un(re?k:null,512,e?.modified??0),oe=dn(ie?k:null,e?.modified??0,A),se=dn(re||j?k:null,e?.modified??0,A),P=fn(M?k:null,e?.modified??0),ce=rn(!re&&!j&&!ie&&!ae&&!M?k:null,e?.isDirectory??!1);if((0,D.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),S(!1)},[O]),(0,D.useEffect)(()=>{if(!k||!ae){ee(null),x(!1);return}let e=!0;return x(!0),ee(null),U(k).then(t=>{e&&(ee(t),x(!1))},()=>{e&&(ee({text:null,truncated:!1,error:`Could not read this file.`}),x(!1))}),()=>{e=!1}},[k,ae]),!e&&!s)return null;let le=e=>{w.current={x:e.clientX,width:t},e.currentTarget.setPointerCapture(e.pointerId)},I=e=>{let t=w.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},L=e=>{w.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},z=e=>{T.current={y:e.clientY,height:E},e.currentTarget.setPointerCapture(e.pointerId)},ue=e=>{let t=T.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));ne(n),Pn(`yafm.preview.media.height`,n)},de=e=>{T.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,F.jsxs)(Ro,{children:[r&&(0,F.jsx)(zo,{onPointerDown:le,onPointerMove:I,onPointerUp:L,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,F.jsx)(Bo,{style:{width:r?t:0},children:(0,F.jsxs)(Vo,{children:[(0,F.jsx)(qr,{size:56}),(0,F.jsx)(`span`,{children:s})]})})]});let fe=()=>{let e=C.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,F.jsxs)(Ro,{children:[r&&(0,F.jsx)(zo,{onPointerDown:le,onPointerMove:I,onPointerUp:L,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(Bo,{style:{width:r?t:0},children:[(0,F.jsx)(Ho,{style:{height:E},children:re&&se&&!l?(0,F.jsxs)(Wo,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,F.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:fe,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:N??void 0,preload:`metadata`,ref:C,src:se}),(0,F.jsx)(Go,{$visible:!d,onClick:fe,title:c(`Play`),type:`button`,children:(0,F.jsx)(Xi,{size:28})}),(0,F.jsxs)(Ko,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,F.jsxs)(qo,{children:[(0,F.jsx)(`span`,{children:Lo(_)}),(0,F.jsx)(`span`,{children:Lo(h)})]}),(0,F.jsx)(Jo,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=C.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):j&&se?(0,F.jsx)(`audio`,{controls:!0,src:se}):ie&&oe?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:oe}):M&&P&&!te?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>S(!0),src:P}):M?(0,F.jsx)(Jr,{size:64}):ae?(0,F.jsx)(Yo,{children:b||!y?(0,F.jsx)(Zo,{children:c(`Loading…`)}):y.error?(0,F.jsx)(Zo,{children:y.error}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Xo,{children:y.text}),y.truncated&&(0,F.jsx)(Zo,{children:c(`Showing the first 256 KB.`)})]})}):re&&N?(0,F.jsx)(`img`,{alt:``,src:N}):ce?(0,F.jsx)(`img`,{alt:``,src:ce}):e.isDirectory?(0,F.jsx)(qr,{size:64}):(0,F.jsx)(Jr,{size:64})}),(0,F.jsx)(Uo,{onDoubleClick:()=>{ne(210),Pn(`yafm.preview.media.height`,210)},onPointerDown:z,onPointerMove:ue,onPointerUp:de,title:c(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(Qo,{children:[(0,F.jsx)($o,{title:e.path,children:e.name}),o&&(0,F.jsx)(es,{children:o}),(0,F.jsx)(ts,{children:e.fields.map(e=>(0,F.jsxs)(ns,{children:[(0,F.jsx)(rs,{children:e.label}),(0,F.jsx)(is,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Io(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Lo(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Ro=i.div`
    display: flex;
    flex-shrink: 0;
    align-self: stretch;
    min-height: 0;
`,zo=i.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Bo=i.aside`
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    background: var(--bg-secondary);
    font-family: var(--font-details), var(--font-cjk);
    transition: width 180ms cubic-bezier(0.22, 1, 0.36, 1);
`,Vo=i.div`
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
`,Ho=i.div`
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
`,Uo=i.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Wo=i.div`
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
`,Go=i.button`
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
`,Ko=i.div`
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
`,qo=i.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,Jo=i.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Yo=i.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,Xo=i.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Zo=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Qo=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,$o=i.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,es=i.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,ts=i.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,ns=i.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,rs=i.span`
    color: var(--text-muted);
`,is=i.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,as=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],os=[...as],ss={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},cs={folder:e=>(0,F.jsx)(qr,{size:e}),home:e=>(0,F.jsx)(Kr,{size:e}),desktop:e=>(0,F.jsx)(ki,{size:e}),documents:e=>(0,F.jsx)(Ai,{size:e}),downloads:e=>(0,F.jsx)(ji,{size:e}),pictures:e=>(0,F.jsx)(Mi,{size:e}),music:e=>(0,F.jsx)(Ni,{size:e}),videos:e=>(0,F.jsx)(Pi,{size:e}),drive:e=>(0,F.jsx)(Yr,{size:e}),image:e=>(0,F.jsx)(hi,{size:e}),video:e=>(0,F.jsx)(gi,{size:e}),audio:e=>(0,F.jsx)(_i,{size:e}),text:e=>(0,F.jsx)(pi,{size:e}),code:e=>(0,F.jsx)(mi,{size:e}),clock:e=>(0,F.jsx)(si,{size:e}),star:e=>(0,F.jsx)(Fi,{size:e}),file:e=>(0,F.jsx)(Jr,{size:e}),archive:e=>(0,F.jsx)(vi,{size:e}),pdf:e=>(0,F.jsx)(yi,{size:e}),executable:e=>(0,F.jsx)(bi,{size:e}),font:e=>(0,F.jsx)(xi,{size:e}),database:e=>(0,F.jsx)(Si,{size:e}),config:e=>(0,F.jsx)(Ci,{size:e}),spreadsheet:e=>(0,F.jsx)(wi,{size:e}),presentation:e=>(0,F.jsx)(Ti,{size:e}),document:e=>(0,F.jsx)(Ei,{size:e}),app:e=>(0,F.jsx)(fi,{size:e}),gear:e=>(0,F.jsx)(ri,{size:e}),pin:e=>(0,F.jsx)(ii,{size:e}),trash:e=>(0,F.jsx)(li,{size:e}),overview:e=>(0,F.jsx)(Di,{size:e}),book:e=>(0,F.jsx)(Ii,{size:e}),briefcase:e=>(0,F.jsx)(Li,{size:e}),cloud:e=>(0,F.jsx)(Ri,{size:e}),gamepad:e=>(0,F.jsx)(zi,{size:e}),camera:e=>(0,F.jsx)(Bi,{size:e}),terminal:e=>(0,F.jsx)(Vi,{size:e}),server:e=>(0,F.jsx)(Hi,{size:e}),package:e=>(0,F.jsx)(Ui,{size:e}),globe:e=>(0,F.jsx)(Wi,{size:e}),heart:e=>(0,F.jsx)(Gi,{size:e}),share:e=>(0,F.jsx)(Hi,{size:e}),favorites:e=>(0,F.jsx)(Gi,{size:e})};function ls(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function us(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??as)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||os.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=ls(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${ss[n]??n}${ds(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function ds(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function fs({panel:e,size:t=16}){let n=on(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,F.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?cs[e.icon]:void 0;if(r)return(0,F.jsx)(F.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,F.jsx)(qr,{size:t});case`recent`:return(0,F.jsx)(si,{size:t});case`frequent`:return(0,F.jsx)(Fi,{size:t});case`drives`:return(0,F.jsx)(Yr,{size:t});case`home`:return(0,F.jsx)(Kr,{size:t});case`share`:return(0,F.jsx)(Hi,{size:t});case`favorites`:return(0,F.jsx)(Gi,{size:t});default:return(0,F.jsx)(qr,{size:t})}}function ps({place:e,size:t=18}){let n=on(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,F.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&cs[e.icon]?(0,F.jsx)(F.Fragment,{children:cs[e.icon](t)}):(0,F.jsx)(qr,{size:t})}var ms=`#64748b`;function hs(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function gs({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=R(),[c,l]=(0,D.useState)(``),[u,d]=(0,D.useState)(`#2dd4bf`),f=(0,D.useRef)(null);(0,D.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,ya.createPortal)((0,F.jsxs)(_s,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,F.jsxs)(vs,{children:[(0,F.jsx)(`span`,{children:s(`Tags`)}),(0,F.jsx)(ys,{onClick:o,title:s(`Close`),type:`button`,children:(0,F.jsx)(di,{size:11})})]}),(0,F.jsxs)(bs,{children:[p.length===0&&(0,F.jsx)(ws,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,F.jsxs)(xs,{children:[(0,F.jsx)(Ss,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,F.jsxs)(Cs,{$color:t,$ink:hs(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,F.jsx)(ui,{size:11}),(0,F.jsx)(`span`,{children:e})]})]},e)})]}),(0,F.jsxs)(Ts,{children:[(0,F.jsx)(Ss,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,F.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,F.jsx)(Es,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var _s=i.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${ka}
`,vs=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,ys=i.button`
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
`,bs=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,xs=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ss=i.input`
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
`,Cs=i.button`
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
`,ws=i.span`
    font-size: 11px;
    color: var(--text-muted);
`,Ts=i.div`
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
`,Es=i.button`
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
`,Ds={file:Jr,folder:qr,text:pi,code:mi,image:hi,video:gi,audio:_i,archive:vi,pdf:yi,executable:bi,font:xi,database:Si,config:Ci,spreadsheet:wi,presentation:Ti,document:Ei},Os={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function ks(e){let t=e.lastIndexOf(`.`);return t>0?Os[e.slice(t).toLowerCase()]??`file`:`file`}function As({name:e,size:t}){let n=Ds[e??`file`]??Jr;return(0,F.jsx)(n,{size:t})}function js({path:e,name:t,isDirectory:n,size:r=18}){let i=rn(e,n);return i?(0,F.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,F.jsx)(qr,{size:r}):(0,F.jsx)(As,{name:ks(t),size:r})}var Ms=`application/x-yafm-paths`,Ns=[Ms,`text/uri-list`];function Ps(e){return e?.types.some(e=>Ns.includes(e.toLowerCase()))??!1}function Fs(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Ms);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Ls).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Is=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Ls(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Is?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Rs(e,t,n=!0){e.dataTransfer.setData(Ms,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function zs({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=R(),[m,h]=(0,D.useState)(()=>new Set),[g,_]=(0,D.useState)(!1),v=(0,D.useRef)(null),y=(0,D.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),ee=(0,D.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),b=(0,D.useRef)(null);if((0,D.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=b.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Ps(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Fs(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let x=new Set([...e,...t].map(e=>e.path)),te=x.size>0&&[...x].every(e=>m.has(e)),S=x.size,C=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},w=()=>{h(te?new Set:x)},T=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},ne=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},O=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},k=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},A=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},re=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of ee)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},j=(e,t)=>{let n=m.has(e.path);return(0,F.jsxs)(Zs,{$checked:n,draggable:!0,onClick:()=>C(e.path),onDragStart:r=>{Rs(r,n&&m.size>0?[...new Set([...y,...ee].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,F.jsx)(Qs,{$checked:n,onClick:t=>{t.stopPropagation(),C(e.path)},type:`button`,children:n&&(0,F.jsx)(ui,{size:8})}),(0,F.jsx)(js,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,F.jsxs)($s,{children:[(0,F.jsx)(ec,{children:e.name}),(0,F.jsx)(tc,{children:E(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},ie=e=>{Ps(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,F.jsxs)(Bs,{$dragging:g,"data-tray":`true`,ref:b,style:{left:i.x,top:i.y},onDragEnter:ie,onDragOver:ie,onDrop:e=>{let{paths:t}=Fs(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,F.jsxs)(Vs,{onPointerDown:T,onPointerMove:ne,onPointerUp:O,children:[(0,F.jsxs)(Hs,{children:[(0,F.jsx)(Ui,{size:13}),p(`Tray`),(0,F.jsx)(Us,{children:S})]}),(0,F.jsxs)(Ws,{onPointerDown:e=>e.stopPropagation(),children:[(0,F.jsx)(Gs,{onClick:w,title:p(te?`Select none`:`Select all`),type:`button`,children:p(te?`None`:`All`)}),(0,F.jsx)(Gs,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,F.jsx)(Ks,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,F.jsx)(di,{size:10})})]})]}),(0,F.jsxs)(qs,{children:[(0,F.jsxs)(Ys,{children:[p(`In this app`),(0,F.jsx)(Us,{children:e.length})]}),e.length===0&&(0,F.jsx)(Js,{children:p(`Drag files or folders here`)}),e.map(e=>j(e,!0)),t.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Ys,{$clipboard:!0,children:[p(`Clipboard`),(0,F.jsx)(Us,{children:t.length}),n&&(0,F.jsx)(Xs,{children:p(`cut`)})]}),t.map(e=>j(e,n))]})]}),(0,F.jsxs)(nc,{children:[(0,F.jsx)(rc,{$plain:!0,disabled:y.length===0,onClick:A,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,F.jsx)(rc,{disabled:m.size===0||!a,onClick:re,type:`button`,children:p(`Move here`)}),(0,F.jsx)(rc,{$danger:!0,disabled:y.length===0,onClick:k,type:`button`,children:p(`Remove`)})]})]})}var Bs=i.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${ba}
    ${ka}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Vs=i.div`
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
`,Hs=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,Us=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Ws=i.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Gs=i.button`
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
`,Ks=i.button`
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
`,qs=i.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,Js=i.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Ys=i.div`
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
`,Xs=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,Zs=i.div`
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
`,Qs=i.button`
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
`,$s=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,ec=i.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,tc=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nc=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,rc=i.button`
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
`,ic=new Map,ac=new Set,oc=0;function sc(){oc+=1;for(let e of ac)e()}function cc(e,t){t?ic.set(e,t):ic.delete(e),sc()}function lc(e){return ic.has(e)}function uc(e,t,n){ic.get(e)?.(t,n)}function dc(e){return ac.add(e),()=>ac.delete(e)}function fc(){return oc}function pc(e){return(0,D.useSyncExternalStore)(dc,fc,fc),{available:lc(e),open:(t,n)=>uc(e,t,n)}}function mc(e){return[...ic.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function hc(e){return(0,D.useSyncExternalStore)(dc,fc,fc),{available:mc(e).length>0,open:(t,n)=>{let r=mc(e).at(-1);r&&uc(r,t,n)}}}var gc=60,_c=300,vc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],yc=190,bc=120;function xc({listing:e,loading:t,error:n,find:r=mn,view:i,showImages:o,imageStripHeight:s=yc,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:f,onOpenFile:p,showCheckboxes:m=!0,openOnSingleClick:h=!1,shortcuts:g=Rt,enableShortcuts:y=!0,refreshToken:ee=0,onRefresh:b,onRename:x,onClipboardChanged:te,onTransfer:S,onAddToTray:C,onAddFavorite:w,onPaste:T,confirmDelete:E=!1,previewVideoAudio:ne=!1,previewVideoAutoplay:O=!1,showDetails:k=!0,onPreviewInfo:A,onActivate:re,groupOf:j,onGridScroll:ie,gridFooter:ae,allowBackgroundMenu:M=!0,readOnly:N=!1,onSelectionChange:oe,onSelectionCountChange:se,selectionMenuRequest:P,selectionMenuId:ce,singleSelect:le=!1,pendingRename:I=null,pendingRenameToken:L=0}){let z=R(),ue=An(),de=(0,D.useRef)(null),fe=(0,D.useRef)(null),pe=(0,D.useRef)(null),[B,me]=(0,D.useState)(_c),[V,he]=(0,D.useState)({top:0,height:640}),ge=(0,D.useRef)(null),H=(0,D.useRef)(null),[_e,ve]=(0,D.useState)(null),[ye,be]=(0,D.useState)(s),[xe,Se]=(0,D.useState)(()=>new Set),U=(0,D.useRef)(xe),Ce=(0,D.useRef)([]);U.current=xe,(0,D.useEffect)(()=>oe?.([...xe]),[xe,oe]),(0,D.useEffect)(()=>se?.(xe.size),[xe,se]),(0,D.useEffect)(()=>{let e=P;if(!e||e.token===Ee.current)return;Ee.current=e.token;let t=[...U.current];t.length!==0&&(Te({x:e.x,y:e.y,paths:t,background:!1}),ht().then(Be,()=>Be(!1)))},[P]);let[we,Te]=(0,D.useState)(null),Ee=(0,D.useRef)(0),[De,Oe]=(0,D.useState)(null),[ke,Ae]=(0,D.useState)(null),[je,Me]=(0,D.useState)(null),Ne=(0,D.useRef)(je);Ne.current=je;let Pe=(0,D.useRef)(0),Fe=(0,D.useRef)(re);Fe.current=re;let[Ie,Le]=(0,D.useState)(()=>{let e=Nn(`yafm.preview.width`,320);return e>=220?e:320}),Re=(0,D.useCallback)(e=>{Le(e),Pn(`yafm.preview.width`,e)},[]),[ze,Be]=(0,D.useState)(!1),Ve=(0,D.useCallback)((e,t)=>{let n=[...U.current];n.length!==0&&(Te({x:e,y:t,paths:n,background:!1}),ht().then(Be,()=>Be(!1)))},[]);(0,D.useEffect)(()=>{if(ce)return cc(ce,xe.size>0?Ve:null),()=>cc(ce,null)},[ce,xe,Ve]),(0,D.useEffect)(()=>{Se(new Set),Me(null),Te(null),H.current=null},[e?.path]),(0,D.useEffect)(()=>{be(s)},[s]),(0,D.useEffect)(()=>{Se(new Set),Me(null),H.current=null},[ee]);let He=e=>{ge.current={y:e.clientY,height:ye},e.currentTarget.setPointerCapture(e.pointerId)},Ue=e=>{let t=ge.current;if(!t)return;let n=Math.max(bc,Math.round(window.innerHeight*.7));be(Math.min(n,Math.max(bc,t.height+t.y-e.clientY)))},We=e=>{ge.current&&(ge.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(ye))},Ge=()=>{be(yc),c?.(yc)},Ke=r.query.length>0,qe=(0,D.useMemo)(()=>vc.filter(e=>i.columns?.includes(e.id)),[i.columns]),Je=i.columns?.includes(`linkTarget`)??!1,Ye=(0,D.useMemo)(()=>`minmax(160px, 1fr) ${qe.map(e=>`${e.width}px`).join(` `)}`.trim(),[qe]),Xe=(0,D.useMemo)(()=>e?wc(e.entries.map(t=>{let n=t.isDirectory?jn(ue,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:Ke?hn(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!Ke||r.mode===`dim`||e.ranges!==null),i,e,z):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,Ke,r,ue,i.sort,i.sortDescending,z]);Ce.current=Xe;let Ze=Math.max(40,i.iconSize+20),Qe=Math.max(0,Math.floor(V.top/Ze)-4),$e=Math.min(Xe.length,Qe+Math.ceil(V.height/Ze)+10),et=(0,D.useMemo)(()=>Xe.slice(Qe,$e),[Xe,Qe,$e]);(0,D.useEffect)(()=>{let e=pe.current;if(!e||i.mode!==`list`)return;let t=()=>he(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,D.useEffect)(()=>{he(e=>({...e,top:0})),pe.current&&(pe.current.scrollTop=0)},[e?.path]),(0,D.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=Xe.findIndex(e=>e.entry.fullPath===r.currentPath),t=pe.current;if(e<0||!t)return;let n=e*Ze;(n<t.scrollTop||n+Ze>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else de.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,Xe,Ze]);let tt=(0,D.useMemo)(()=>Xe.slice(0,B),[Xe,B]);(0,D.useEffect)(()=>{me(_c)},[e?.path]),(0,D.useEffect)(()=>{if(!r.currentPath)return;let e=Xe.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&me(t=>Math.max(t,e+_c))},[r.currentPath,Xe]);let nt=(0,D.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&me(e=>Math.min(Xe.length,e+_c))},[Xe.length]),rt=i.mode===`grid`,it=(0,D.useMemo)(()=>{if(!rt)return[];if(!j)return Dc(tt,Ec);let e=[],t=new Map;for(let n of tt){let r=j(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[tt,rt,j]),at=(0,D.useMemo)(()=>o?Xe.filter(e=>!e.entry.isDirectory&&En(e.entry.name)):[],[Xe,o]),ot=at.length,st=(0,D.useMemo)(()=>at.slice(0,gc),[at]),ct=(0,D.useMemo)(()=>o?Dc(st,Tc):[],[st,o]),lt=(0,D.useMemo)(()=>Xe.map(e=>e.entry.fullPath),[Xe]),ut=Xe.length>0&&xe.size>=Xe.length,dt=xe.size>0&&!ut,ft=()=>{le||(ut?W():Se(new Set(lt)))},pt=e?.path??``,gt=(0,D.useCallback)((e,t)=>{if(le){H.current=t,Se(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Se(r=>{if(e.shiftKey&&H.current!==null){let e=lt.indexOf(H.current),i=lt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(lt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),H.current=t,e}return H.current=t,new Set([t])})},[lt,le]),_t=(0,D.useCallback)(e=>{le?(H.current=e,Se(new Set([e]))):(H.current=e,Se(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[le]),W=(0,D.useCallback)(()=>{H.current=null,Se(new Set)},[]);(0,D.useEffect)(()=>{if(L===0||!I||Pe.current===L||!e?.entries.some(e=>e.fullPath===I))return;Pe.current=L,H.current=I,Se(new Set([I])),Me({path:I,value:_(I)});let t=Xe.findIndex(e=>e.entry.fullPath===I),n=pe.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*Ze;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(I)}"]`)?.scrollIntoView({block:`nearest`})})}},[pe,e,I,L,Ze,Xe,i.mode]),(0,D.useEffect)(()=>{if(!je)return;let e=Xe.findIndex(e=>e.entry.fullPath===je.path),t=pe.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*Ze;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(je.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[pe,je,Ze,Xe,i.mode]);let St=(0,D.useCallback)(()=>Te(null),[]),Ct=(0,D.useCallback)((e,t)=>{e.isDirectory?f(e.fullPath,Vt(t)):p?.(e.fullPath,Vt(t))},[f,p]),wt=(0,D.useCallback)((e,t,n)=>{ve({entry:e,x:t,y:n})},[]),Dt=(0,D.useRef)(null),kt=(0,D.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Rs(e,xe.has(n)?[...xe]:[n])},[xe]),At=(0,D.useCallback)(e=>{if(!Ps(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Dt.current=t?.dataset.directory===`true`?t.dataset.path??pt:pt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[pt]),jt=(0,D.useCallback)(e=>{if(N)return;let{paths:t,move:n}=Fs(e),r=Dt.current??pt;Dt.current=null,t.length!==0&&S&&(e.preventDefault(),S(t,r,!e.ctrlKey&&n))},[pt,S,N]),Mt=(0,D.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),N||!t&&!M)return;let n=U.current;t&&!n.has(t)&&Se(new Set([t])),t&&(H.current=t);let r=t?n.has(t)?[...n]:[t]:[];Te({x:e.clientX,y:e.clientY,paths:r,background:!t}),ht().then(Be,()=>Be(!1))},[M,pt]),Nt=(0,D.useCallback)(()=>b?.(),[b]),G=(e,t)=>{H.current=e,Se(new Set([e])),t&&Me({path:e,value:_(e)}),Nt()},Pt=De&&(0,F.jsx)(uo,{initialDirectory:pt,initialName:De.name,onCancel:()=>Oe(null),onCompress:async e=>{let t=await Ft(De.paths,e);return!t.ok||!t.path?(sa(t.error??z(`Could not create the archive.`)),!1):(G(t.path,!1),!0)}}),It=async(e,t=!1)=>{await mt(e,t)&&(Be(!0),te?.())},Lt=async e=>{e&&(await vt(e)?(Nt(),T?.()):sa(z(`Nothing on the clipboard could be pasted here.`)))},zt=async(e,t=!1)=>{if(!pt)return;let n=e===null?await xt(pt,t):await Tt(pt,e);!n.ok||n.path===null?sa(n.error??z(`Could not create the item.`)):(H.current=n.path,Se(new Set([n.path])),Me({path:n.path,value:_(n.path)}),Nt())},Bt=e=>{Se(new Set([e.fullPath])),H.current=e.fullPath,Me({path:e.fullPath,value:e.name})},Ut=(0,D.useCallback)(e=>Me(t=>t&&{...t,value:e}),[]),Wt=(0,D.useCallback)(()=>Me(null),[]),Kt=(0,D.useCallback)(async()=>{let e=Ne.current;if(Me(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Ce.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await bt(e.path,t);r.ok?(W(),r.path&&x?.(e.path,r.path),Nt(),window.setTimeout(()=>Nt(),250)):sa(r.error??z(`Could not rename the entry.`))},[W,x,Nt,z]),qt=async(e,t=!1)=>{if((t||E)&&!await Jt(e,t))return;let n=await yt(e,t);if(!n.ok&&n.needsPermanent){if(!await Jt(e,!0))return;n=await yt(e,!0)}if(n.ok)W(),Nt();else{if(n.cancelled)return;sa(n.error??z(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},Jt=(0,D.useCallback)((e,t)=>new Promise(n=>Ae({paths:e,permanent:t,resolve:n})),[]),Yt=(0,D.useCallback)(e=>{Ae(t=>(t?.resolve(e),null))},[]);(0,D.useEffect)(()=>{if(!y||we)return;let e=e=>{if(Gt(e.target))return;Fe.current?.();let t=Ht(e),n=[...xe],r=n.length===1?Xe.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(lt.length===0)return;e.preventDefault();let n=H.current&&lt.includes(H.current)?H.current:xe.size===1?[...xe][0]:null,r=n?lt.indexOf(n):-1,i=t===`home`?0:t===`end`?lt.length-1:Math.max(0,Math.min(lt.length-1,r+(t===`arrowdown`?1:-1))),a=lt[i];Se(new Set([a])),H.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===g.copy?i(()=>{n.length>0&&It(n)}):t===g.cut?i(()=>{n.length>0&&It(n,!0)}):t===g.paste?i(()=>void Lt(pt)):t===g.delete?i(()=>{n.length>0&&qt(n)}):t===g.deletePermanently?i(()=>{n.length>0&&qt(n,!0)}):t===g.selectAll?i(()=>{Se(new Set(lt)),H.current=lt[0]??null}):t===g.invertSelection?i(()=>{Se(new Set(lt.filter(e=>!xe.has(e)))),H.current=lt[0]??null}):t===g.rename&&r?i(()=>void Bt(r)):t===g.open&&r?i(()=>{r.isDirectory?f(r.fullPath):p?.(r.fullPath)}):t===g.newFolder||t===`f10`?i(()=>void zt(null)):t===g.terminal?i(()=>void Ot(pt)):t===g.properties?i(()=>void Et(n.length>0?n:pt?[pt]:[])):t===g.refresh&&i(Nt)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[lt,It,zt,pt,y,we,f,p,Lt,Nt,qt,Bt,Xe,xe,g]);let Xt=ke&&(0,F.jsx)(wo,{confirmLabel:ke.permanent?z(`Delete`):z(`Move`),danger:ke.permanent,message:ke.permanent?z(`Permanently delete {target}? This cannot be undone.`,{target:ke.paths.length===1?z(`this item`):z(`{count} items`,{count:ke.paths.length})}):z(`Move {target} to the recycle bin?`,{target:ke.paths.length===1?z(`this item`):z(`{count} items`,{count:ke.paths.length})}),onCancel:()=>Yt(!1),onConfirm:()=>Yt(!0),open:!0,title:ke.permanent?z(`Delete permanently`):z(`Move to the recycle bin`)}),K=(0,D.useMemo)(()=>{if(!e||xe.size===0)return null;let t=lt.find(e=>xe.has(e));return t?Xe.find(e=>e.entry.fullPath===t)?.entry??null:null},[lt,e,Xe,xe]),Zt=(0,D.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:_(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:z(`Type`),value:z(`Folder`)},{label:z(`Location`),value:e.parent??`—`},{label:z(`Path`),value:e.path},{label:z(`Size`),value:d(t)},{label:z(`Items`),value:a(z,n,`1 item`,`{count} items`)},{label:z(`Modified`),value:`—`},{label:z(`Created`),value:`—`},{label:z(`Attributes`),value:`—`}]}},[e,z]),Qt=(0,D.useMemo)(()=>{if(!K||!e)return null;let t=K.isDirectory?e.folderSizes[K.name]:void 0,n=e.tags[K.name]??[],r=K.name.lastIndexOf(`.`),i=r>0&&r<K.name.length-1?K.name.slice(r+1).toUpperCase():`—`;return{name:K.name,path:K.fullPath,isDirectory:K.isDirectory,size:K.size,modified:K.modified,created:K.created,fields:[{label:z(`Type`),value:Ac(K,z)},...K.isEncrypted?[{label:z(`Encryption`),value:z(`Password required`)}]:[],{label:z(`Extension`),value:K.isDirectory?`—`:i},{label:z(`Location`),value:e.path},{label:z(`Full path`),value:K.fullPath},{label:z(`Size`),value:K.isDirectory?t===void 0?`—`:d(t):d(K.size)},...K.isDirectory?[{label:z(`Items`),value:`${e.counts[K.name]??`—`}`}]:[],{label:z(`Modified`),value:v(K.modified)},{label:z(`Created`),value:v(K.created)},{label:z(`Link status`),value:K.linkTarget==null?K.linkCount>1?z(`Hard link`):`—`:K.linkValid?`OK`:z(`Broken`)},...K.linkTarget?[{label:z(`Target`),value:K.linkTarget}]:[],...K.linkCount>1?[{label:z(`Links`),value:String(K.linkCount)}]:[],{label:z(`Attributes`),value:[K.isHidden?z(`Hidden`):``,K.isSystem?z(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:z(`Tags`),value:n.join(`, `)}]:[]]}},[e,K,z]),q=we?.paths.length===1?we.paths[0]:null,J=q?Xe.find(e=>e.entry.fullPath===q)?.entry:void 0,$t=J?{path:J.fullPath,isDirectory:J.isDirectory}:null,en=Qt??Zt,tn=(0,D.useRef)(A);tn.current=A,(0,D.useEffect)(()=>{tn.current?.(en)},[A,en]);let nn=k&&en&&(0,F.jsx)(Fo,{info:en,onWidth:Re,selectionNote:xe.size>1?a(z,xe.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:ne,videoAutoplay:O,width:Ie});return n&&!e?(0,F.jsx)(Ml,{children:(0,F.jsx)(Pl,{children:n})}):!e&&!t?(0,F.jsx)(Ml,{children:(0,F.jsx)(Nl,{children:z(`Nothing selected.`)})}):i.mode===`grid`?(0,F.jsxs)(Yc,{onPointerDown:re,children:[(0,F.jsxs)(Xc,{children:[(0,F.jsxs)(il,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||W()},onContextMenu:e=>Mt(e),onDragOver:At,onDragStart:kt,onDrop:jt,onScroll:e=>{ie?.(e.currentTarget),nt(e.currentTarget)},children:[m&&Xe.length>0&&(0,F.jsxs)(Kc,{children:[(0,F.jsx)(Wc,{$checked:!le&&ut,$partial:!le&&dt,"aria-label":z(ut?`Select none`:`Select all`),disabled:le,onClick:ft,title:z(ut?`Select none`:`Select all`),type:`button`,children:ut?(0,F.jsx)(ui,{size:10}):dt?(0,F.jsx)(Gc,{}):null}),(0,F.jsx)(`span`,{children:z(ut?`Select none`:`Select all`)})]}),t&&!e?(0,F.jsx)(ll,{$size:i.gridSize,children:(0,F.jsx)(Ic,{size:i.gridSize})}):(0,F.jsx)(Rc,{counts:e?.counts,currentPath:Ke?r.currentPath:null,groups:it,gridSize:i.gridSize,innerRef:de,onContextMenu:Mt,onOpen:f,onOpenFile:p,onRenameCancel:Wt,onRenameChange:Ut,onRenameCommit:Kt,onSelect:gt,onToggle:_t,openOnSingleClick:h,renaming:je,searching:Ke,selected:xe,showCheckboxes:m,showTarget:Je}),!t&&e&&Xe.length===0&&(0,F.jsx)(jl,{children:(0,F.jsx)(Nl,{children:n??(Ke&&r.mode===`hide`?z(`No entries match the search.`):z(`This folder is empty.`))})}),ae]}),we&&(0,F.jsx)(Ja,{canPaste:ze,directory:pt,allowCompression:!0,menu:we,onAddToTray:C,onAddFavorite:w,onArchiveCreated:G,onClose:St,onCompressTo:(e,t)=>Oe({paths:e,name:t}),onCopy:It,onCreateFile:e=>void zt(e),onCreateFolder:e=>void zt(null,e),onDelete:qt,onOpen:f,onOpenFile:p,onPaste:Lt,onRefresh:Nt,onRename:e=>{let t=Xe.find(t=>t.entry.fullPath===e)?.entry;t&&Bt(t)},shortcuts:g,target:$t}),Pt,Xt]}),nn]}):(0,F.jsxs)(Yc,{onPointerDown:re,children:[(0,F.jsxs)(Xc,{children:[(0,F.jsxs)(Zc,{onScroll:e=>{pe.current&&pe.current.scrollLeft!==e.currentTarget.scrollLeft&&(pe.current.scrollLeft=e.currentTarget.scrollLeft)},ref:fe,style:{gridTemplateColumns:Ye},children:[(0,F.jsxs)(Uc,{children:[m&&(0,F.jsx)(Wc,{$checked:!le&&ut,$partial:!le&&dt,"aria-label":z(ut?`Select none`:`Select all`),disabled:le,onClick:e=>{e.stopPropagation(),ft()},title:z(ut?`Select none`:`Select all`),type:`button`,children:ut?(0,F.jsx)(ui,{size:10}):dt?(0,F.jsx)(Gc,{}):null}),(0,F.jsxs)(Qc,{onClick:()=>l(`name`),type:`button`,children:[z(`Name`),Sc(i,`name`)]})]}),qe.map(e=>(0,F.jsxs)(Qc,{onClick:()=>l(e.id),type:`button`,children:[z(e.label),Sc(i,e.id)]},e.id))]}),(0,F.jsxs)($c,{onClick:e=>{e.target===e.currentTarget&&W()},onContextMenu:e=>Mt(e),onDragOver:At,onDragStart:kt,onDrop:jt,onScroll:e=>{fe.current&&fe.current.scrollLeft!==e.currentTarget.scrollLeft&&(fe.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;he(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:pe,children:[t&&!e?(0,F.jsx)(Fc,{template:Ye,columns:qe.length}):(0,F.jsxs)(F.Fragment,{children:[Qe>0&&(0,F.jsx)(`div`,{style:{height:Qe*Ze}}),et.map(t=>{let n=t.entry.fullPath;return(0,F.jsx)(Bc,{current:Ke&&n===r.currentPath,dim:Ke&&t.ranges===null,height:Ze,iconSize:i.iconSize,innerRef:de,listing:e,onContextMenu:Mt,onOpen:Ct,onRenameCancel:Wt,onRenameChange:Ut,onRenameCommit:Kt,onSelect:gt,onTagEdit:wt,onToggle:_t,openOnSingleClick:h,renaming:je?.path===n?{value:je.value}:null,row:t,selected:xe.has(n),showCheckboxes:m,showTarget:Je,template:Ye,visible:qe},n)}),$e<Xe.length&&(0,F.jsx)(`div`,{style:{height:(Xe.length-$e)*Ze}})]}),!t&&e&&Xe.length===0&&(0,F.jsx)(Ml,{children:(0,F.jsx)(Nl,{children:n??(Ke&&r.mode===`hide`?z(`No entries match the search.`):z(`This folder is empty.`))})})]}),o&&at.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(el,{onDoubleClick:Ge,onPointerDown:He,onPointerMove:Ue,onPointerUp:We,title:z(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(tl,{style:{height:ye},children:[(0,F.jsxs)(nl,{children:[z(`Preview`),(0,F.jsx)(rl,{children:ot>gc?`${st.length} / ${ot}`:ot})]}),(0,F.jsx)(il,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||W()},onContextMenu:e=>Mt(e),children:(0,F.jsx)(Rc,{counts:e?.counts,currentPath:Ke?r.currentPath:null,groups:ct,gridSize:i.gridSize,onContextMenu:Mt,onOpen:f,onOpenFile:p,onSelect:gt,onToggle:_t,openOnSingleClick:h,searching:Ke,selected:xe,showCheckboxes:m,showTarget:Je})})]})]}),_e&&e&&(0,F.jsx)(gs,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(_e.entry.name,e,t),onClose:()=>ve(null),tags:e.tags[_e.entry.name]??[],x:_e.x,y:_e.y}),we&&(0,F.jsx)(Ja,{canPaste:ze,directory:pt,allowCompression:!0,menu:we,onAddToTray:C,onAddFavorite:w,onArchiveCreated:G,onClose:St,onCompressTo:(e,t)=>Oe({paths:e,name:t}),onCopy:It,onCreateFile:e=>void zt(e),onCreateFolder:e=>void zt(null,e),onDelete:qt,onOpen:f,onOpenFile:p,onPaste:Lt,onRefresh:Nt,onRename:e=>{let t=Xe.find(t=>t.entry.fullPath===e)?.entry;t&&Bt(t)},shortcuts:g,target:$t}),Pt,Xt]}),nn]})}function Sc(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Cc=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function wc(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Ac(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Cc.compare(String(r),String(i));return t.sortDescending?-o:o})}var Tc=Cn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Tn(t.entry.name)===e})),Ec=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Tc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Dc(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Oc(e){return Math.max(24,Math.min(e-56,160))}var kc={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Ac(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(kc[ks(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function jc(e,t,n,r){switch(e){case`type`:return Ac(t,r);case`size`:return Nc(t,n.folderSizes);case`modified`:return v(t.modified);case`created`:return v(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Mc({name:e,ranges:t}){if(!t||t.length===0)return(0,F.jsx)(F.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,F.jsx)(Al,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,F.jsx)(F.Fragment,{children:n})}function Nc(e,t){if(!e.isDirectory)return d(e.size);let n=t[e.name];return n===void 0?`—`:d(n)}function Pc({entry:e,size:t=18}){let n=R(),r=(0,D.useRef)(null),[i,a]=(0,D.useState)(!1);(0,D.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=rn(i?e.fullPath:null,e.isDirectory,t>32),s=on(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,F.jsxs)(Vc,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,F.jsx)(As,{name:e.iconSource.slice(5),size:t}):s?(0,F.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,F.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,F.jsx)(qr,{size:t}):(0,F.jsx)(As,{name:ks(e.name),size:t}),e.isEncrypted&&(0,F.jsx)(Hc,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,F.jsx)(ea,{size:Math.max(8,Math.round(t*.52))})})]})}function Fc({template:e,columns:t}){return(0,F.jsx)(F.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,F.jsxs)(ul,{style:{gridTemplateColumns:e},children:[(0,F.jsxs)(pl,{children:[(0,F.jsx)(dl,{style:{flexShrink:0,height:18,width:18}}),(0,F.jsx)(dl,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,F.jsx)(dl,{style:{width:t%2==0?44:92}},t))]},r))})}function Ic({size:e}){return(0,F.jsx)(F.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,F.jsxs)(Cl,{$dim:!1,$current:!1,$selected:!1,children:[(0,F.jsx)(wl,{children:(0,F.jsx)(dl,{style:{height:e,width:e}})}),(0,F.jsx)(El,{children:(0,F.jsx)(dl,{style:{height:9,width:`${t}%`}})})]},n))})}var Lc=(0,D.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let ee=R(),b=An(),x=!e.entry.isDirectory&&En(e.entry.name),te=(0,D.useRef)(null),[S,C]=(0,D.useState)(!1);(0,D.useEffect)(()=>{if(!x||S)return;let e=te.current;if(!e)return;if(!(`IntersectionObserver`in window)){C(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(C(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[x,S]);let w=un(x&&S?e.entry.fullPath:null,192,e.entry.modified),[T,E]=(0,D.useState)(!1),ne=e.entry.fullPath,O=t=>{e.entry.isDirectory?v(ne,Vt(t)):y?.(ne,Vt(t))};return(0,F.jsxs)(Cl,{$current:t,$dim:n,$selected:s,onClick:e=>{h(e,ne),l&&O(e)},onContextMenu:e=>_(e,ne),onDoubleClick:e=>{l||O(e)},ref:e=>{te.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":ne,draggable:!u,children:[c&&(0,F.jsx)(Jc,{$checked:s,onClick:e=>{e.stopPropagation(),g(ne)},onDoubleClick:e=>e.stopPropagation(),title:ee(s?`Deselect`:`Select`),type:`button`,children:s&&(0,F.jsx)(ui,{size:10})}),(0,F.jsx)(wl,{children:x&&w&&!T?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>E(!0),src:w}):(0,F.jsx)(Tl,{children:e.place&&b.useIcons?(0,F.jsx)(ps,{place:e.place,size:r}):(0,F.jsx)(Pc,{entry:e.entry,size:r})})}),(0,F.jsxs)(El,{children:[u?(0,F.jsx)(zc,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:u.value}):(0,F.jsx)(Dl,{$broken:e.entry.linkValid===!1,children:(0,F.jsx)(Mc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,F.jsxs)(hl,{title:ee(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(ea,{size:9}),ee(`Encrypted`)]}),(0,F.jsx)(Ol,{children:e.entry.isDirectory?i===void 0?Ac(e.entry,ee):ee(`{type} · {count} items`,{type:Ac(e.entry,ee),count:i}):ee(`{type} · {size}`,{type:Ac(e.entry,ee),size:d(e.entry.size)})}),a&&e.entry.linkTarget&&(0,F.jsxs)(kl,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]})]})});function Rc({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=R();return(0,F.jsx)(F.Fragment,{children:e.map(e=>(0,F.jsxs)(al,{children:[(0,F.jsxs)(ol,{children:[y(e.label),(0,F.jsx)(sl,{children:e.rows.length}),(0,F.jsx)(cl,{})]}),(0,F.jsx)(ll,{$size:t,children:e.rows.map(e=>(0,F.jsx)(Lc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Oc(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function zc({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,D.useRef)(null);return(0,D.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,F.jsx)(gl,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Bc=(0,D.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:ee,onRenameCancel:b}){let x=R(),te=An(),S=e.entry.fullPath;return(0,F.jsxs)(fl,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,S),o&&_(e.entry,t)},onContextMenu:e=>g(e,S),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":S,draggable:!p,children:[(0,F.jsxs)(pl,{children:[i&&(0,F.jsx)(qc,{$checked:r,onClick:e=>{e.stopPropagation(),h(S)},onDoubleClick:e=>e.stopPropagation(),title:x(r?`Deselect`:`Select`),type:`button`,children:r&&(0,F.jsx)(ui,{size:10})}),e.place&&te.useIcons?(0,F.jsx)(Vc,{children:(0,F.jsx)(ps,{place:e.place,size:s})}):(0,F.jsx)(Pc,{entry:e.entry,size:s}),p?(0,F.jsx)(zc,{onCancel:b,onChange:y,onCommit:ee,value:p.value}):(0,F.jsx)(ml,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,F.jsx)(Mc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,F.jsxs)(hl,{title:x(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(ea,{size:9}),x(`Encrypted`)]}),a&&e.entry.linkTarget&&(0,F.jsxs)(_l,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]}),u.map(t=>(0,F.jsx)(vl,{children:t.id===`tags`?(0,F.jsx)(yl,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:x(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,F.jsx)(bl,{$color:t,$ink:hs(t),children:e},e)}):(0,F.jsx)(xl,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,F.jsx)(Sl,{children:x(`Broken`)}):jc(t.id,e.entry,d,x)},t.id))]})}),Vc=i.span`
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
`,Hc=i.span`
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
`,Uc=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Wc=i.button`
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
`,Gc=i.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Kc=i.div`
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
`,qc=i.button`
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
`,Jc=i(qc)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Yc=i.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Xc=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,Zc=i.div`
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
`,Qc=i.button`
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
`,$c=i.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,el=i.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,tl=i.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,nl=i.div`
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
`,rl=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,il=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,al=i.section`
    & + & {
        margin-top: 22px;
    }
`,ol=i.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,sl=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,cl=i.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,ll=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,ul=i.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,dl=i.span`
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
`,fl=i.div`
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
`,pl=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,ml=i.span`
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,hl=i.span`
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
`,gl=i.input`
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
`,_l=i.span`
    overflow: hidden;
    min-width: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
`,vl=i.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,yl=i.button`
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
`,bl=i.span`
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
`,xl=i.span`
    color: var(--text-muted);
    font-size: 11px;
`,Sl=i.span`
    color: #fca5a5;
`,Cl=i.div`
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
`,wl=i.div`
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
`,Tl=i.span`
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
`,El=i.div`
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
`,Dl=i.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ol=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,kl=i.span`
    width: 100%;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Al=i.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,jl=i.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Ml=i.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Nl=i.p`
    font-size: 13px;
    color: var(--text-muted);
`,Pl=i.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Fl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Il=`/assets/bloom-BpfZWiaG.mp4`,Ll=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Rl=`/assets/drift-BRBSQL2_.mp4`,zl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Bl=`/assets/ember-CtSz0YxR.mp4`,Vl=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],Hl=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],Ul=[{id:`builtin:video:drift`,name:`Drift`,url:Rl,poster:Ll},{id:`builtin:video:ember`,name:`Ember`,url:Bl,poster:zl},{id:`builtin:video:bloom`,name:`Bloom`,url:Il,poster:Fl}],Wl=Hl.map(e=>({...e,variants:Vl.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Xl(Zl(e.id,t))}))})),Gl=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>Vl.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Xl(Ql(e.id,t))}))),Kl=new Map([...Wl.flatMap(e=>e.variants),...Gl].map(e=>[e.id,e])),ql=new Map(Ul.map(e=>[e.id,e]));function Jl(e){if(Kl.has(e))return Kl.get(e).url;if(ql.has(e))return ql.get(e).url;let t=e.split(`:`)[1];return t?Kl.get(`builtin:${t}:indigo`)?.url??null:null}function Yl(e){return ql.has(e)}function Xl(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function Zl(e,t){return e===`dunes`?au(t):e===`tide`?ou(t):iu(t)}function Ql(e,t){return e===`skyline`?eu(t):e===`orbit`?tu(t):$l(t)}function $l({accent:e,secondary:t}){let n=ru(t,`#05070f`,.86),r=ru(e,`#0b1020`,.72),i=ru(t,`#0a0f1d`,.66),a=ru(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${ru(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${ru(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function eu({accent:e,secondary:t}){let n=ru(t,`#07040d`,.84),r=ru(e,`#100716`,.7),i=ru(e,`#08050e`,.82),a=ru(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${ru(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function tu({accent:e,secondary:t}){let n=ru(e,`#03050d`,.9),r=ru(t,`#05030c`,.94),i=ru(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${ru(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${ru(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${ru(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${ru(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function nu(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function ru(e,t,n){let[r,i,a]=nu(e),[o,s,c]=nu(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function iu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${ru(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${ru(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${ru(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${ru(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function au({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${ru(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${ru(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${ru(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${ru(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${ru(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${ru(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${ru(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function ou({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${ru(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${ru(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${ru(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${ru(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var su=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function cu(e){return su.test(e)}function lu({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):w(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=dn(r),a=t?.startsWith(`builtin:`)?Jl(t):n??i,o=n===null?r===null?t!==null&&Yl(t):cu(r):cu(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,F.jsxs)(uu,{"aria-hidden":!0,children:[o?(0,F.jsx)(fu,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,F.jsx)(du,{src:a,style:{filter:s}}),(0,F.jsx)(pu,{})]})}var uu=i.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,du=i.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,fu=i.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,pu=i.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
        radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function mu({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=R(),o=(0,D.useRef)(null),[s,c]=(0,D.useState)(()=>Math.max(1,Math.ceil(t)));return(0,D.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,ya.createPortal)((0,F.jsx)(hu,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,F.jsxs)(gu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(_u,{children:a(`Protected folder`)}),(0,F.jsx)(vu,{children:a(`These paths are protected by the safety settings:`)}),(0,F.jsx)(yu,{children:e.map(e=>(0,F.jsxs)(bu,{children:[(0,F.jsx)(xu,{children:e.path}),(0,F.jsx)(Su,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,F.jsx)(Cu,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,F.jsx)(wu,{children:a(`Nothing has been deleted.`)}),(0,F.jsx)(Tu,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,F.jsxs)(Eu,{children:[(0,F.jsx)(Du,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,F.jsx)(Ou,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var hu=i.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Pa}
`,gu=i.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${ka}
`,_u=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,vu=i.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,yu=i.div`
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
`,bu=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,xu=i.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Su=i.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Cu=i.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,wu=i.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Tu=i.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Eu=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Du=i.button`
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
`,Ou=i.button`
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
`;function ku(){let e=R(),[t,n]=(0,D.useState)(null),r=(0,D.useRef)(null),i=(0,D.useRef)(null);(0,D.useEffect)(()=>(oa(e=>new Promise(t=>{r.current=t,n(e)})),()=>oa(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,D.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,ya.createPortal)((0,F.jsx)(Au,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,F.jsxs)(ju,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(Mu,{children:e(`Notice`)}),(0,F.jsx)(Nu,{children:t}),(0,F.jsx)(Pu,{children:(0,F.jsx)(Fu,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var Au=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Pa}
`,ju=i.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${ka}
`,Mu=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Nu=i.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Pu=i.div`
    display: flex;
    justify-content: flex-end;
`,Fu=i.button`
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
`;function Iu(){let e=R(),[t,n]=(0,D.useState)(null),[r,i]=(0,D.useState)(``),a=(0,D.useRef)(null),o=(0,D.useRef)(null);(0,D.useEffect)(()=>(ca((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>ca(null)),[]),(0,D.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,ya.createPortal)((0,F.jsx)(Lu,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,F.jsxs)(Ru,{role:`dialog`,"aria-modal":`true`,children:[(0,F.jsx)(zu,{children:e(`Archive password`)}),(0,F.jsx)(Bu,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,F.jsx)(Vu,{title:t.archive,children:t.archive}),(0,F.jsx)(Hu,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,F.jsxs)(Uu,{children:[(0,F.jsx)(Wu,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,F.jsx)(Gu,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var Lu=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Pa}
`,Ru=i.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${ka}
`,zu=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Bu=i.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Vu=i.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Hu=i.input`
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
`,Uu=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Wu=i.button`
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
`,Gu=i(Wu)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Ku({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h}){let g=R(),_=(0,D.useRef)(null),v=c??g(`Search this folder`);(0,D.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,F.jsxs)(qu,{children:[(0,F.jsx)(Xr,{}),(0,F.jsx)(Ju,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Yu,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,F.jsx)(Xu,{onClick:()=>y(u),title:g(`Previous match (Shift+Enter)`),type:`button`,children:(0,F.jsx)(ni,{size:12})}),(0,F.jsx)(Xu,{$down:!0,onClick:()=>y(d),title:g(`Next match (Enter)`),type:`button`,children:(0,F.jsx)(ni,{size:12})})]}),(0,F.jsx)(Zu,{$on:n,onClick:()=>y(f),title:g(`Match case`),type:`button`,children:`Aa`}),(0,F.jsx)(Zu,{$on:r,onClick:()=>y(p),title:g(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,F.jsx)(Qu,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:g(t===`hide`?`Hide`:`Dim`)}),(0,F.jsx)(Xu,{onClick:h,title:g(`Close search (Esc)`),type:`button`,children:(0,F.jsx)(di,{size:12})})]})}var qu=i.div`
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
    ${Ma}
`,Ju=i.input`
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
`,Yu=i.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Xu=i.button`
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
`,Zu=i.button`
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
`,Qu=i(Zu)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function $u(e,t,n,r,i=[]){(0,D.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=hn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function ed({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=R(),a=(0,D.useRef)(null),o=(0,D.useRef)(null),[s,c]=(0,D.useState)(null);return(0,D.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,D.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,D.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,ya.createPortal)((0,F.jsxs)(td,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(cs).map(n=>(0,F.jsx)(nd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:cs[n](16)},n)),(0,F.jsx)(nd,{onClick:async()=>{let e=await ra([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,F.jsx)($r,{size:13})}),r&&(0,F.jsx)(nd,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,F.jsx)(di,{size:12})})]}),document.body)]})}var td=i.div`
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
    ${Aa}
    transform-origin: top left;
`,nd=i.button`
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
`,rd={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function id(){return P.available?await P.request(`share.list`):rd}async function ad(e,t){return P.available?await P.request(`share.add`,{path:e,mode:t}):rd}async function od(e){return P.available?await P.request(`share.remove`,{id:e}):rd}async function sd(e,t){return P.available?await P.request(`share.mode`,{id:e,mode:t}):rd}async function cd(){return P.available?(await P.request(`share.peers.refresh`)).peers??[]:[]}async function ld(e,t){P.available&&await P.request(`share.pair.start`,{host:e,port:t})}async function ud(e,t){P.available&&await P.request(`share.pair.respond`,{requestId:e,accept:t})}async function dd(e,t){P.available&&await P.request(`share.port`,{mode:t,port:e})}var fd=`share://`;function pd(e){return e.toLowerCase().startsWith(fd)}function md(e){if(!pd(e))return null;let[t,n,...r]=e.slice(8).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function hd(e,t,n=``){let r=`${fd}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function gd(e){let t=md(e);if(!t||!P.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await P.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:hd(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:hd(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function _d(e){let t=md(e);if(!t||!P.available)throw Error(`This shared file is only available in the desktop app.`);let n=await P.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function vd(e){await ye(await _d(e))}function yd({source:e,poster:t}){let n=w(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=dn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??Jl(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,F.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,F.jsx)(`img`,{alt:``,src:a}):null}function bd({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=R(),s=(0,D.useRef)(null),c=(0,D.useRef)(null),l=(0,D.useRef)(!1),[u,d]=(0,D.useState)(null),[f,p]=(0,D.useState)(null),[m,h]=(0,D.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,D.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,D.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,D.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},ee=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},b=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,F.jsx)(Vd,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,F.jsxs)(Hd,{children:[(0,F.jsxs)(Ud,{children:[(0,F.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,F.jsx)(Xd,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,F.jsx)(di,{size:12})})]}),(0,F.jsx)(Wd,{children:o(`Drag the frame to choose the visible part.`)}),(0,F.jsxs)(Gd,{children:[t?(0,F.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,F.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,F.jsx)(Kd,{onPointerCancel:b,onPointerDown:y,onPointerMove:ee,onPointerUp:b,style:{height:_,top:m},children:(0,F.jsx)(qd,{})})]}),(0,F.jsxs)(Jd,{children:[(0,F.jsx)(Yd,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,F.jsx)(Yd,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var xd=150,Sd=120,Cd=200,wd=i.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Td=i.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Ed=i.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${Cd}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
        #000 0,
        #000 calc(100% - ${Cd}px),
        rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Cd*.72)}px),
        rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Cd*.44)}px),
        rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Cd*.18)}px),
        transparent 100%);
    mask-image: linear-gradient(to bottom,
        #000 0,
        #000 calc(100% - ${Cd}px),
        rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Cd*.72)}px),
        rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Cd*.44)}px),
        rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Cd*.18)}px),
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
`,Dd=i.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${xd}px);
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
`,Od=i.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$overlap:e})=>e?`-${e}px`:`0`};
`,kd=i.section`
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
`,Ad=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,jd=i.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Md=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Nd=i.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Pd=i.input`
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
`,Fd=i.button`
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
`,Id=i.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Ld=i.button`
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
`,Rd=i.button`
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
`,zd=i.span`
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
`,Bd=i.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Vd=i.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Hd=i.div`
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
`,Ud=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Wd=i.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,Gd=i.div`
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
`,Kd=i.div`
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
`,qd=i.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,Jd=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Yd=i.button`
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
`,Xd=i.button`
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
`,Zd=i.button`
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
`,Qd=i.div`
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
`,$d=i.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,ef=i.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,tf=i.button`
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
`,nf=i.div`
    position: relative;
    display: inline-flex;
`,rf=i.div`
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
`,af=i.button`
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
`,of=i.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,sf=i.section`
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
`,cf=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,lf=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,uf=i.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,df=i.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,ff=i.input`
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
`,pf=i.button`
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
`,mf=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,hf=i.div`
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
`,gf=i.span`
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
`,_f=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,vf=i.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,yf=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,bf=i.button`
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
`,xf=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Sf=i.button`
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
`,Cf=i.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,wf=i.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Tf=i.div`
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
`,Ef=i.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Df=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Of=i.button`
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
`,kf=i.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Af=i.button`
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
`,jf=i.button`
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
`,Mf=i.button`
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
`,Nf=i.span`
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
`,Pf=i.button`
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
`,Ff=i.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,If=i.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,Lf=i.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Rf=i.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,zf=i.input`
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
`,Bf=i.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Vf=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Hf=i.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Uf=i.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,Wf=i.button`
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
`;function Gf({places:e,drives:n,recent:r,recentLimit:i,homePath:o,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:f,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:v,onSearchMatches:y,readOnly:ee=!1,onPick:b,onSelectionChange:x,onAddToTray:te,onAddFavorite:S,settingsVersion:T=0}){let E=R(),ne=An(),[O,k]=(0,D.useState)(!1),[A,re]=(0,D.useState)(null),j=A?.overviewBanner??null,ie=j?.startsWith(`builtin:`)??!1,ae=j?.startsWith(`url:`)?j.slice(4):w(j)?j:null,M=ie||ae?``:j??``,N=ie?``:ae?ae.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:M.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,oe=ie?Yl(j):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(N),se=dn(M.length>0?M:null,0,N?`.${N}`:``),ce=j?Jl(j)??ae??se:null,[le,I]=(0,D.useState)(``),[L,z]=(0,D.useState)(null),[ue,de]=(0,D.useState)(!1),[fe,pe]=(0,D.useState)(null),[B,me]=(0,D.useState)(null),[V,he]=(0,D.useState)(null),[ge,H]=(0,D.useState)([]),[_e,be]=(0,D.useState)(null),[xe,Se]=(0,D.useState)(``),[U,Ce]=(0,D.useState)(null),[we,Te]=(0,D.useState)(null),De=hc(`overview`),[Oe,ke]=(0,D.useState)(null),[Ae,je]=(0,D.useState)(null),Me=(0,D.useRef)(null),Ne=(0,D.useRef)(null),Pe=(0,D.useRef)(null),Fe=(0,D.useRef)(null),Ie=(0,D.useRef)(null),Le=Ae??A?.overviewBannerHeight??220,Re=(0,D.useRef)(Le);Re.current=Le;let[ze,He]=(0,D.useState)(0),[Ue,We]=(0,D.useState)(null),Ge=Math.min(1,Math.max(0,A?.overviewBannerOffset??.3)),qe=Le+Cd,Je=Ue&&ze>0?Ue.height*(ze/Ue.width):qe,Ye=Je>0&&Je<qe+240?(qe+240)/Je:1,Xe=Math.max(1,Math.round(ze*Ye)),Ze=Math.max(0,Je*Ye-qe),Qe=Math.min(Sd,Ze/2,Math.max(20,Le*.42)),et=Qe+Ge*Math.max(0,Ze-Qe*2),tt=Math.round(Math.min(70,Le*.1)),[nt,rt]=(0,D.useState)(!1),it=(e,t=!1)=>b?(Ce(e),Te({path:e,isDirectory:t}),x?.([e]),!0):!1,at=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),Ce(t),Te({path:t,isDirectory:n}),ke({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,D.useEffect)(()=>(cc(`overview`,we?(e,t)=>ke({x:e,y:t,target:we}):null),()=>cc(`overview`,null)),[we]);let ot=(e,t)=>c(e,t);(0,D.useEffect)(()=>{Ke().then(re,()=>re(null))},[T]),(0,D.useEffect)(()=>{if(P.available)return cd().then(H,()=>void 0),P.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&H(t.data.peers)})},[]),(0,D.useEffect)(()=>{let e=Pe.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.min(e.scrollTop/Math.max(Re.current,1),1);e.style.setProperty(`--banner-progress`,`${n}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,D.useEffect)(()=>{if(ie&&!oe){We({width:1920,height:1080});return}We(null);let e=Ie.current;e?.complete&&e.naturalWidth>0&&We({width:e.naturalWidth,height:e.naturalHeight})},[j,ie,oe]),(0,D.useEffect)(()=>{let e=Fe.current;if(!e)return;let t=()=>He(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[A?.overviewBanner]),(0,D.useEffect)(()=>{if(!L)return;let e=()=>z(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||z(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[L]),(0,D.useEffect)(()=>{if(!ue)return;let e=()=>de(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[ue]);let st=us(A),ct=st.map(e=>e.id),lt=(0,D.useRef)(null),ut=e=>L?.kind===`panel`&&L.id===e,dt=e=>L?.kind===`place`&&L.id===e;(0,D.useEffect)(()=>{if(!P.available)return;let e=st.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??o).filter(e=>e.length>0);P.send({type:`fs.watch`,payload:{paths:e}})},[st.map(e=>e.path??e.id).join(`|`),o]),$u(lt,v??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let ft=async(e,t)=>{let n={...A?.placeIcons};t?n[e]=t:delete n[e],z(null),await W({placeIcons:n}),l(await Ee())},pt=async(e,t)=>{let n={...A?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],me(null),await W({placeNames:n}),l(await Ee())},ht=e=>{he(null),pe({drive:e,label:e.label||`Local Disk`})},gt=async()=>{if(!fe)return;let{drive:e,label:t}=fe;pe(null);let n=await ve(e.name,t.trim());n.ok?(he(null),h?.()):he(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},_t=A?.overviewColumns??1,W=async e=>{if(!A)return;let t={...A,...e,overviewPanels:e.overviewPanels??ct,overviewHidden:[]};re(await $e(t)),p?.()},vt=async()=>{let e=await ra([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=A?.overviewBanners??[];await W({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},yt=async()=>{let e=le.trim();if(!A||!w(e))return;let t=A.overviewBanners??[];I(``),await W({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},bt=()=>void W({overviewBanner:null}),xt=e=>void W({overviewBanners:(A?.overviewBanners??[]).filter(t=>t!==e),...A?.overviewBanner===e||A?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),St=e=>{Me.current={y:e.clientY,height:Le},e.currentTarget.setPointerCapture(e.pointerId)},Ct=e=>{let t=Me.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Ne.current=n,je(n)},wt=e=>{Me.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Ne.current!==null&&(W({overviewBannerHeight:Ne.current}),Ne.current=null)},Tt=(e,t)=>{let n=ct.indexOf(e),r=n+t;if(n<0||r<0||r>=ct.length)return;let i=[...ct];[i[n],i[r]]=[i[r],i[n]],W({overviewPanels:i})},Et=(e,t)=>{let n={...A?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],W({overviewTitles:n})},Dt=(e,t)=>void W({overviewViews:{...A?.overviewViews,[e]:t}}),Ot=e=>{let t=A?.overviewPinned??st.filter(e=>e.pinned).map(e=>e.id);W({overviewPinned:st.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},kt=e=>{z(null);let t=t=>{let n={...t};return delete n[e],n},n=A?.overviewPinned??st.filter(e=>e.pinned).map(e=>e.id);W({overviewPanels:ct.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(A?.overviewTitles),overviewViews:t(A?.overviewViews),overviewIcons:t(A?.overviewIcons),panelPlaces:t(A?.panelPlaces)})},At=(e,t)=>{let n={...A?.overviewIcons};t?n[e]=t:delete n[e],z(null),W({overviewIcons:n})},jt=async e=>{if(!A)return;if(e===`folder`){let e=await na();if(!e)return;let t=`folder:${e}`;ct.includes(t)||await W({overviewPanels:[...ct,t]});return}if(e===`quick`){let e=2;for(;ct.includes(`quick:${e}`);)e+=1;await W({overviewPanels:[...ct,`quick:${e}`]});return}let t=e;for(let n=2;ct.includes(t);n+=1)t=`${e}:${n}`;await W({overviewPanels:[...ct,t]})},Mt=async t=>{let n=await na();if(!n)return;if(t.id===`quick`){await W({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),l(await Ee());return}let r=t.places??[];r.some(e=>qf(e,n))||await W({panelPlaces:{...A?.panelPlaces,[t.id]:[...r,n]}})},Nt=async(t,n)=>{z(null),t.id===`quick`?(await W({quickAccess:e.filter(e=>!qf(e.path,n)).map(e=>e.path)}),l(await Ee())):await W({panelPlaces:{...A?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!qf(e,n))}})},G=async(t,n,r)=>{if(qf(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>qf(e,n)),o=i.findIndex(e=>qf(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),t.id===`quick`?(await W({quickAccess:s}),l(await Ee())):await W({panelPlaces:{...A?.panelPlaces,[t.id]:s}})},Pt=(e,t)=>({draggable:O,onDragOver:e=>{O&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{O&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{O&&(n.preventDefault(),G(e,n.dataTransfer.getData(`text/plain`),t))}}),Ft=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>qf(e.path,t));return{name:A?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??A?.placeIcons?.[t]??null}}),It=e=>{if(r.length===0)return(0,F.jsx)(If,{children:E(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,F.jsx)(mf,{children:t.map(e=>{let t=jn(ne,e.path);return(0,F.jsxs)(hf,{$plain:!1,$selected:U===e.path,onClick:t=>{it(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Vt(t)):ye(e.path))},onDoubleClick:()=>b?.(e.path),onContextMenu:t=>at(t,e.path,e.isDirectory),title:e.path,children:[(0,F.jsx)(gf,{children:t&&ne.useIcons?(0,F.jsx)(ps,{place:t,size:18}):(0,F.jsx)(js,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(_f,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(vf,{children:e.path})]})]},e.path)})}):(0,F.jsx)(yf,{children:t.map(e=>{let t=jn(ne,e.path);return(0,F.jsxs)(bf,{$selected:U===e.path,onClick:t=>{it(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Vt(t)):ye(e.path))},onDoubleClick:()=>b?.(e.path),onContextMenu:t=>at(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,F.jsx)(ps,{place:t,size:15}):(0,F.jsx)(js,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,F.jsxs)(xf,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(vf,{children:e.path})]})]},e.path)})})},Lt=e=>{let t=A?.favorites??[],n=async e=>{await W({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>t.path.toLowerCase()===e.toLowerCase())&&await W({favorites:[...t,{path:e,name:_(e)||e,isDirectory:n}]})},i=(e,t,n)=>{O||it(t,n)||(n?c(t,Vt(e)):ye(t))},a=O?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Sf,{$row:e.view===`list`,onClick:()=>void ra().then(e=>r(e,!1)),title:E(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,F.jsx)($r,{size:15}):(0,F.jsx)(gf,{children:(0,F.jsx)($r,{size:15})}),e.view===`list`?(0,F.jsxs)(xf,{children:[(0,F.jsx)(`strong`,{children:E(`Add file`)}),(0,F.jsx)(vf,{children:E(`Pin any file here`)})]}):(0,F.jsxs)(_f,{children:[(0,F.jsx)(`strong`,{children:E(`Add file`)}),(0,F.jsx)(vf,{children:E(`Pin any file here`)})]})]}),(0,F.jsxs)(Sf,{$row:e.view===`list`,onClick:()=>void na().then(e=>r(e,!0)),title:E(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,F.jsx)($r,{size:15}):(0,F.jsx)(gf,{children:(0,F.jsx)($r,{size:15})}),e.view===`list`?(0,F.jsxs)(xf,{children:[(0,F.jsx)(`strong`,{children:E(`Add folder`)}),(0,F.jsx)(vf,{children:E(`Pin any folder here`)})]}):(0,F.jsxs)(_f,{children:[(0,F.jsx)(`strong`,{children:E(`Add folder`)}),(0,F.jsx)(vf,{children:E(`Pin any folder here`)})]})]})]}):null;return t.length===0&&!O?(0,F.jsx)(If,{children:E(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,F.jsxs)(mf,{children:[t.map(e=>{let t=jn(ne,e.path);return(0,F.jsxs)(hf,{$plain:O,$selected:U===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&b?.(e.path),onContextMenu:t=>!O&&at(t,e.path,e.isDirectory),title:e.path,children:[O&&(0,F.jsx)(jf,{onClick:t=>{t.stopPropagation(),n(e.path)},title:E(`Remove from favorites`),type:`button`,children:(0,F.jsx)(di,{size:11})}),(0,F.jsx)(gf,{children:t&&ne.useIcons?(0,F.jsx)(ps,{place:t,size:18}):(0,F.jsx)(js,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(_f,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(vf,{children:e.path})]})]},e.path)}),a]}):(0,F.jsxs)(yf,{children:[t.map(e=>{let t=jn(ne,e.path);return(0,F.jsxs)(bf,{$selected:U===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&b?.(e.path),onContextMenu:t=>!O&&at(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,F.jsx)(ps,{place:t,size:15}):(0,F.jsx)(js,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,F.jsxs)(xf,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(vf,{children:e.path})]}),O&&(0,F.jsx)(jf,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:E(`Remove from favorites`),type:`button`,children:(0,F.jsx)(di,{size:11})})]},e.path)}),a]})},zt=e=>{if(n.length===0)return(0,F.jsx)(If,{children:E(`No drives are available.`)});let r=n.map(n=>{let r=n.totalSize>0?1-n.freeSpace/n.totalSize:0,i=fe?.drive.name===n.name,a=i?(0,F.jsx)(Kf,{maxLength:32,onCancel:()=>pe(null),onChange:e=>pe({...fe,label:e}),onCommit:()=>void gt(),value:fe?.label??``}):(0,F.jsx)(F.Fragment,{children:u(n)}),o=!i&&O&&(0,F.jsx)(Mf,{onClick:e=>{e.stopPropagation(),ht(n)},title:E(`Rename volume`),type:`button`,children:(0,F.jsx)(Oi,{size:11})}),s=(0,F.jsx)(vf,{children:E(`{free} free of {total}`,{free:d(n.freeSpace),total:d(n.totalSize)})});return e.view===`grid`?(0,F.jsxs)(hf,{$plain:!1,$selected:U===n.name,onClick:e=>{!i&&it(n.name,!0)||i||c(n.name,Vt(e))},onDoubleClick:()=>!i&&b?.(n.name),onContextMenu:e=>!i&&at(e,n.name,!0),title:n.name,children:[(0,F.jsx)(gf,{children:(0,F.jsx)(Yr,{size:18})}),(0,F.jsxs)(_f,{children:[(0,F.jsxs)(`strong`,{children:[a,i&&C(n),o]}),s]})]},n.name):(0,F.jsxs)(bf,{as:i?`div`:`button`,$selected:U===n.name,onClick:i?void 0:e=>{it(n.name,!0)||c(n.name,Vt(e))},onDoubleClick:i?void 0:()=>b?.(n.name),onContextMenu:i?void 0:e=>at(e,n.name,!0),title:n.name,type:i?void 0:`button`,children:[(0,F.jsx)(Yr,{size:18}),(0,F.jsxs)(xf,{children:[(0,F.jsxs)(`strong`,{children:[a,i&&C(n),o]}),s]}),(0,F.jsx)(Cf,{children:(0,F.jsx)(wf,{$used:r,$tone:t(r)})})]},n.name)});return e.view===`grid`?(0,F.jsx)(mf,{children:r}):(0,F.jsx)(yf,{children:r})},Bt=()=>{let e=async e=>{be(e.id);try{await ld(e.host,e.port)}finally{be(null)}},t=async()=>{let e=xe.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){be(`manual`);try{await ld(n,r)}finally{be(null)}}};return(0,F.jsxs)(Lf,{children:[(0,F.jsxs)(Rf,{children:[(0,F.jsx)(zf,{onChange:e=>Se(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:E(`Address, e.g. 192.168.1.20:45701`),value:xe}),(0,F.jsx)(Wf,{disabled:_e!==null||!xe.includes(`:`),onClick:()=>void t(),type:`button`,children:E(_e===`manual`?`Pairing…`:`Pair by address`)})]}),ge.length===0&&(0,F.jsx)(If,{children:E(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),ge.map(t=>(0,F.jsxs)(Bf,{children:[(0,F.jsxs)(Vf,{children:[(0,F.jsx)(Hi,{size:14}),(0,F.jsx)(Hf,{title:t.host,children:t.name}),(0,F.jsx)(Uf,{$online:t.online,children:t.paired?t.online?E(`Paired`):E(`Offline`):E(`Not paired`)}),!t.paired&&t.online&&(0,F.jsx)(Wf,{disabled:_e===t.id,onClick:()=>void e(t),type:`button`,children:_e===t.id?E(`Pairing…`):E(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,F.jsx)(vf,{children:E(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,F.jsxs)(bf,{onClick:n=>c(hd(t.id,e.id),Vt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,F.jsx)(Hi,{size:14}),(0,F.jsxs)(xf,{children:[(0,F.jsx)(`strong`,{children:e.name}),(0,F.jsx)(vf,{children:t.name})]}),(0,F.jsx)(Wi,{size:12})]},e.id))]},t.id))]})},Ht=e=>{switch(e.kind){case`share`:return Bt();case`favorites`:return Lt(e);case`quick`:{let t=Ft(e);return!O&&t.length===0?(0,F.jsx)(If,{children:E(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,F.jsxs)(mf,{children:[t.map(t=>(0,F.jsxs)(hf,{$plain:O,$selected:U===t.path,...Pt(e,t.path),onClick:e=>{!O&&!it(t.path,!0)&&c(t.path,Vt(e))},onDoubleClick:()=>!O&&b?.(t.path),onContextMenu:e=>!O&&at(e,t.path,!0),title:t.path,children:[O&&(0,F.jsx)(jf,{onClick:n=>{n.stopPropagation(),Nt(e,t.path)},title:E(`Remove from Quick access`),type:`button`,children:(0,F.jsx)(di,{size:11})}),(0,F.jsxs)(kf,{children:[O?(0,F.jsx)(Af,{onClick:e=>{e.stopPropagation(),z(dt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:E(`Change icon`),type:`button`,children:(0,F.jsx)(gf,{children:(0,F.jsx)(ps,{place:t})})}):(0,F.jsx)(gf,{children:(0,F.jsx)(ps,{place:t})}),dt(t.path)&&(0,F.jsx)(ed,{onPick:e=>void ft(t.path,e),value:A?.placeIcons?.[t.path]??t.icon})]}),(0,F.jsxs)(_f,{children:[B?.path===t.path?(0,F.jsx)(`strong`,{children:(0,F.jsx)(Kf,{onCancel:()=>me(null),onChange:e=>me({path:t.path,name:e}),onCommit:()=>void pt(t.path,B?.name??``),value:B?.name??``})}):(0,F.jsxs)(`strong`,{children:[t.name,O&&(0,F.jsx)(Mf,{onClick:e=>{e.stopPropagation(),z(null),me({path:t.path,name:t.name})},title:E(`Rename folder`),type:`button`,children:(0,F.jsx)(Oi,{size:11})})]}),(0,F.jsx)(vf,{children:t.path})]})]},t.path)),O&&(0,F.jsxs)(Sf,{onClick:()=>void Mt(e),title:E(`Pin a folder here`),type:`button`,children:[(0,F.jsx)(gf,{children:(0,F.jsx)($r,{size:15})}),(0,F.jsxs)(_f,{children:[(0,F.jsx)(`strong`,{children:E(`Add folder`)}),(0,F.jsx)(vf,{children:E(`Pin a directory here`)})]})]})]}):(0,F.jsxs)(yf,{children:[t.map(t=>(0,F.jsxs)(bf,{$selected:U===t.path,...Pt(e,t.path),onClick:e=>{!O&&!it(t.path,!0)&&c(t.path,Vt(e))},onDoubleClick:()=>!O&&b?.(t.path),onContextMenu:e=>!O&&at(e,t.path,!0),title:t.path,type:`button`,children:[(0,F.jsxs)(kf,{children:[O?(0,F.jsx)(Af,{onClick:e=>{e.stopPropagation(),z(dt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:E(`Change icon`),type:`button`,children:(0,F.jsx)(ps,{place:t,size:15})}):(0,F.jsx)(ps,{place:t,size:15}),dt(t.path)&&(0,F.jsx)(ed,{onPick:e=>void ft(t.path,e),value:A?.placeIcons?.[t.path]??t.icon})]}),(0,F.jsxs)(xf,{children:[B?.path===t.path?(0,F.jsx)(`strong`,{children:(0,F.jsx)(Kf,{onCancel:()=>me(null),onChange:e=>me({path:t.path,name:e}),onCommit:()=>void pt(t.path,B?.name??``),value:B?.name??``})}):(0,F.jsxs)(`strong`,{children:[t.name,O&&(0,F.jsx)(Mf,{onClick:e=>{e.stopPropagation(),z(null),me({path:t.path,name:t.name})},title:E(`Rename folder`),type:`button`,children:(0,F.jsx)(Oi,{size:11})})]}),(0,F.jsx)(vf,{children:t.path})]}),O&&(0,F.jsx)(jf,{$inline:!0,onClick:n=>{n.stopPropagation(),Nt(e,t.path)},title:E(`Remove from Quick access`),type:`button`,children:(0,F.jsx)(di,{size:11})})]},t.path)),O&&(0,F.jsxs)(Sf,{$row:!0,onClick:()=>void Mt(e),title:E(`Pin a folder here`),type:`button`,children:[(0,F.jsx)($r,{size:15}),(0,F.jsxs)(xf,{children:[(0,F.jsx)(`strong`,{children:E(`Add folder`)}),(0,F.jsx)(vf,{children:E(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,F.jsx)(Jf,{mode:e.view,onContextMenu:at,onOpen:c,onPick:b,onSelectionChange:x,version:s});case`recent`:return It(e);case`drives`:return zt(e);default:return(0,F.jsx)(Yf,{mode:e.view,onContextMenu:at,onOpen:c,onPick:b,onSelectionChange:x,openOnSingleClick:A?.openOnSingleClick??!1,path:e.path??o,selectionMenuId:`overview:${e.id}`,showCheckboxes:A?.showCheckboxes??!0,visibilityVersion:g})}};return(0,F.jsxs)(wd,{$flush:!!A?.overviewBanner,ref:Pe,children:[!ee&&(0,F.jsxs)(Qd,{$overlay:!!A?.overviewBanner,children:[(0,F.jsx)($d,{role:`group`,title:E(`Columns`),children:[1,2,3,4,5].map(e=>(0,F.jsx)(ef,{$active:_t===e,onClick:()=>void W({overviewColumns:e}),title:a(E,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),O&&(0,F.jsxs)(nf,{children:[(0,F.jsxs)(tf,{onClick:()=>de(e=>!e),onPointerDown:e=>e.stopPropagation(),title:E(`Add a panel`),type:`button`,children:[(0,F.jsx)($r,{size:12}),E(`Add panel ▾`)]}),ue&&(0,F.jsx)(rf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,F.jsx)(af,{onClick:()=>{de(!1),jt(e)},type:`button`,children:E(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),De.available&&(0,F.jsx)(pf,{onClick:e=>De.open(e.clientX,e.clientY),title:E(`Selection menu`),type:`button`,children:(0,F.jsx)($i,{size:14})}),(0,F.jsxs)(tf,{onClick:()=>{k(e=>!e),de(!1),z(null),me(null),pe(null)},title:E(O?`Done`:`Edit`),type:`button`,children:[O?(0,F.jsx)(ui,{size:13}):(0,F.jsx)(Oi,{size:13}),E(O?`Done`:`Edit`)]})]}),V&&(0,F.jsx)(Ff,{children:V}),A?.overviewBanner&&(0,F.jsxs)(Td,{ref:Fe,style:{height:`${Le}px`,"--banner-image-width":`${Xe}px`,"--banner-image-shift":`${et}px`,"--banner-travel":`${Qe}px`,"--banner-overlap":`${tt}px`},children:[(0,F.jsx)(Ed,{children:oe?(0,F.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&We({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:ce??void 0}):(0,F.jsx)(`img`,{alt:``,onLoad:e=>{let t=ie?1920:e.currentTarget.naturalWidth||1920,n=ie?1080:e.currentTarget.naturalHeight||1080;We({width:t,height:n})},ref:Ie,src:ce??void 0})}),O&&(0,F.jsx)(Dd,{onDoubleClick:()=>{Ne.current=null,je(null),W({overviewBannerHeight:220})},onPointerCancel:wt,onPointerDown:St,onPointerMove:Ct,onPointerUp:wt,title:E(`Drag to resize; double-click to reset`)})]}),(0,F.jsxs)(Od,{$overlap:A?.overviewBanner?tt:0,children:[O&&(0,F.jsxs)(kd,{children:[(0,F.jsxs)(Ad,{children:[(0,F.jsx)(jd,{children:E(`Banners`)}),A?.overviewBanner&&(0,F.jsxs)(tf,{onClick:()=>rt(!0),title:E(`Adjust framing…`),type:`button`,children:[(0,F.jsx)(Oi,{size:12}),E(`Adjust framing…`)]})]}),(0,F.jsxs)(Md,{children:[(0,F.jsx)(Id,{children:(0,F.jsx)(Ld,{$active:!A?.overviewBanner,onClick:bt,title:E(`No banner`),type:`button`,children:(0,F.jsxs)(Bd,{children:[(0,F.jsx)(di,{size:16}),(0,F.jsx)(`span`,{children:E(`No banner`)})]})})}),Gl.map(e=>(0,F.jsx)(Id,{children:(0,F.jsx)(Ld,{$active:A?.overviewBanner===e.id,onClick:()=>void W({overviewBanner:e.id}),title:`${E(e.concept)} · ${E(e.preset)}`,type:`button`,children:(0,F.jsx)(yd,{poster:e.url,source:e.id})})},e.id)),Ul.map(e=>(0,F.jsx)(Id,{children:(0,F.jsxs)(Ld,{$active:A?.overviewBanner===e.id,onClick:()=>void W({overviewBanner:e.id}),title:E(e.name),type:`button`,children:[(0,F.jsx)(yd,{poster:e.poster,source:e.id}),(0,F.jsx)(zd,{children:(0,F.jsx)(gi,{size:11})})]})},e.id)),(A?.overviewBanners??[]).map(e=>(0,F.jsxs)(Id,{children:[(0,F.jsx)(Ld,{$active:A?.overviewBanner===e||A?.overviewBanner===`url:${e}`,onClick:()=>void W({overviewBanner:w(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,F.jsx)(yd,{source:e})}),(0,F.jsx)(Rd,{onClick:()=>xt(e),title:E(`Remove`),type:`button`,children:(0,F.jsx)(di,{size:10})})]},e)),(0,F.jsxs)(Zd,{onClick:()=>void vt(),title:E(`Add banner…`),type:`button`,children:[(0,F.jsx)($r,{size:18}),(0,F.jsx)(`span`,{children:E(`Add banner…`)})]})]}),(0,F.jsxs)(Nd,{children:[(0,F.jsx)(Pd,{onChange:e=>I(e.target.value),onKeyDown:e=>{e.key===`Enter`&&yt()},placeholder:`https://…`,value:le}),(0,F.jsx)(Fd,{disabled:!w(le),onClick:()=>void yt(),type:`button`,children:E(`Add URL`)})]})]}),(0,F.jsx)(of,{ref:lt,$columns:_t,children:st.map(e=>{let t=ct.indexOf(e.id);return(0,F.jsxs)(sf,{children:[(0,F.jsxs)(cf,{children:[(0,F.jsxs)(lf,{children:[(0,F.jsxs)(kf,{children:[O?(0,F.jsx)(Af,{onClick:()=>z(ut(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:E(`Change icon`),type:`button`,children:(0,F.jsx)(fs,{panel:e,size:15})}):(0,F.jsx)(fs,{panel:e,size:15}),ut(e.id)&&(0,F.jsx)(ed,{onPick:t=>At(e.id,t),value:e.icon})]}),O?(0,F.jsx)(ff,{defaultValue:e.title,onBlur:t=>Et(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,F.jsx)(df,{children:E(e.title)})]}),(0,F.jsxs)(uf,{children:[!O&&e.kind===`recent`&&(0,F.jsx)(tf,{onClick:()=>void Be().then(f),title:E(`Clear`),type:`button`,children:E(`Clear`)}),!O&&e.kind===`frequent`&&(0,F.jsx)(tf,{onClick:()=>void Ve().then(()=>m?.()),title:E(`Clear the frequent list`),type:`button`,children:E(`Clear`)}),!O&&(e.kind===`home`||e.kind===`folder`)&&(0,F.jsx)(tf,{onClick:()=>c(e.path??o),title:E(`Open folder`),type:`button`,children:E(`Open`)}),O&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(pf,{$active:e.pinned,onClick:()=>Ot(e.id),title:e.pinned?E(`Unpin from the sidebar`):E(`Pin to the sidebar`),type:`button`,children:(0,F.jsx)(ii,{size:12})}),(0,F.jsx)(pf,{$active:e.view===`list`,onClick:()=>Dt(e.id,`list`),title:E(`List`),type:`button`,children:(0,F.jsx)(ai,{size:13})}),(0,F.jsx)(pf,{$active:e.view===`grid`,onClick:()=>Dt(e.id,`grid`),title:E(`Grid`),type:`button`,children:(0,F.jsx)(oi,{size:13})}),(0,F.jsx)(pf,{disabled:t===0,onClick:()=>Tt(e.id,-1),title:E(`Move up`),type:`button`,children:(0,F.jsx)(Zr,{size:12})}),(0,F.jsx)(pf,{disabled:t===ct.length-1,onClick:()=>Tt(e.id,1),title:E(`Move down`),type:`button`,children:(0,F.jsx)(Zr,{size:12})}),(0,F.jsx)(pf,{onClick:()=>kt(e.id),title:E(`Remove panel`),type:`button`,children:(0,F.jsx)(di,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Ht(e):(0,F.jsx)(Ef,{children:Ht(e)})]},e.id)})})]}),nt&&ce&&(0,F.jsx)(bd,{height:Le,offset:Ge,onCancel:()=>rt(!1),onSave:e=>{W({overviewBannerOffset:e}),rt(!1)},source:ce,video:oe}),Oe&&(0,F.jsx)(Ja,{directory:o,menu:{x:Oe.x,y:Oe.y,paths:[Oe.target.path]},onClose:()=>ke(null),onCopy:(e,t)=>void mt(e,t),onAddToTray:te,onAddFavorite:S,onOpen:ot,onOpenFile:e=>b?b(e):void ye(e),shortcuts:Rt,target:Oe.target})]})}function Kf({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=R();return(0,F.jsxs)(Nf,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,F.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,F.jsx)(Pf,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,F.jsx)(di,{size:11})}),(0,F.jsx)(Pf,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,F.jsx)(ui,{size:12})})]})}function qf(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function Jf({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:o}){let s=R(),[c,l]=(0,D.useState)(null),[u,d]=(0,D.useState)(null),f=An(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,D.useEffect)(()=>{Re().then(l,()=>l([]))},[o]),!c)return(0,F.jsx)(If,{children:s(`Reading…`)});if(c.length===0)return(0,F.jsx)(If,{children:s(`Folders you open often show up here.`)});let m=e=>a(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,F.jsx)(mf,{children:c.map(e=>{let i=jn(f,e.path);return(0,F.jsxs)(hf,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Vt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,F.jsx)(gf,{children:i&&f.useIcons?(0,F.jsx)(ps,{place:i,size:18}):(0,F.jsx)(js,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(_f,{children:[(0,F.jsx)(`strong`,{children:i?.name||e.name}),(0,F.jsx)(vf,{children:m(e)})]})]},e.path)})}):(0,F.jsx)(yf,{children:c.map(e=>{let i=jn(f,e.path);return(0,F.jsxs)(bf,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Vt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,F.jsx)(ps,{place:i,size:15}):(0,F.jsx)(js,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,F.jsxs)(xf,{children:[(0,F.jsx)(`strong`,{children:i?.name||e.name}),(0,F.jsx)(vf,{children:m(e)})]})]},e.path)})})}function Yf({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:o,showCheckboxes:s,openOnSingleClick:c,visibilityVersion:l}){let u=R(),[d,f]=(0,D.useState)(null),[p,m]=(0,D.useState)(null),h=An();return(0,D.useEffect)(()=>{e&&(f(null),be(e).then(f,()=>f(null)))},[e,l]),(0,D.useEffect)(()=>{if(P.available)return P.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&be(e,!1).then(f,()=>void 0)})},[e]),d?t===`list`?(0,F.jsx)(Tf,{children:(0,F.jsx)(xc,{error:null,listing:d,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void ye(e)),onRefresh:()=>void be(e,!1).then(f,()=>void 0),onRename:(e,t)=>f(n=>n&&{...n,entries:n.entries.map(n=>n.fullPath.toLowerCase()===e.toLowerCase()?{...n,name:_(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:o,onSort:()=>void 0,openOnSingleClick:c,enableShortcuts:!1,showCheckboxes:s,showDetails:!1,showImages:!1,view:{...H,columns:_e.columns??[]}})}):(0,F.jsx)(Ef,{children:d.entries.length===0?(0,F.jsx)(If,{children:u(`This folder is empty.`)}):(0,F.jsx)(Df,{children:d.entries.map(e=>{let t=jn(h,e.fullPath);return(0,F.jsxs)(Of,{$selected:p===e.fullPath,onClick:t=>{i?(m(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Vt(t)):ye(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&h.useIcons?(0,F.jsx)(ps,{place:t,size:16}):(0,F.jsx)(js,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,F.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,F.jsx)(If,{children:u(`Reading…`)})}function Xf({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=R(),s=An(),[c,l]=(0,D.useState)(!1),[u,d]=(0,D.useState)(``),[f,p]=(0,D.useState)([]),[m,h]=(0,D.useState)(0),[g,_]=(0,D.useState)(null),[v,y]=(0,D.useState)(null),ee=(0,D.useRef)(null),b=(0,D.useRef)(null),x=(0,D.useRef)(0);(0,D.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,D.useEffect)(()=>{r&&r!==x.current&&(x.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,D.useEffect)(()=>{c&&ee.current?.select()},[c]),(0,D.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let te=()=>{d(e.replace(/\\/g,`/`)),l(!0)},S=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,D.useEffect)(()=>{if(!c){p([]);return}let e=$f(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{be(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let C=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,D.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=b.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,F.jsxs)(ap,{onPointerDown:e=>e.stopPropagation(),ref:b,children:[(0,F.jsxs)(lp,{children:[(0,F.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?C(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):S(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:ee,spellCheck:!1,value:u}),(0,F.jsx)(up,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,F.jsx)(di,{size:12})}),(0,F.jsx)(up,{$apply:!0,onClick:S,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,F.jsx)(ui,{size:14})})]}),f.length>0&&g&&(0,ya.createPortal)((0,F.jsx)(op,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,F.jsxs)(sp,{$active:t===m,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,F.jsx)(js,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,F.jsx)(cp,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:Qf(e,s.places);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ep,{onClick:te,title:o(`Click to type a path`),children:w.map((t,n)=>(0,F.jsxs)(tp,{$last:n===w.length-1,children:[n>0&&(0,F.jsx)(rp,{children:(0,F.jsx)(ni,{size:9})}),(0,F.jsxs)(ip,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,F.jsx)(np,{children:(0,F.jsx)(ps,{place:t.place,size:13})}):t.icon&&(0,F.jsx)(np,{children:t.icon}),t.label]})]},t.path))}),v&&(0,F.jsx)(Ia,{items:[{label:o(`Open`),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),onSelect:()=>i(v.path,!0)},{label:o(`Open with…`),onSelect:()=>void Dt(v.path)},{label:o(`Copy path`),onSelect:()=>void navigator.clipboard.writeText(v.path)},{label:o(`Properties`),onSelect:()=>void Et([v.path])}],onClose:()=>y(null),x:v.x,y:v.y})]})}function Zf(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Qf(e,t){let n=Zf(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function $f(e){if(e.toLowerCase().startsWith(`yafm://`))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var ep=i.div`
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
`,tp=i.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,np=i.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,rp=i.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,ip=i.button`
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
`,ap=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,op=i.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${ba}
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
`,sp=i.button`
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
`,cp=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lp=i.div`
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
`,up=i.button`
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
`,dp=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,F.jsx)(`path`,{d:`M4 4v6h6`})]});function fp({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:o=!1,videoAutoplay:s=!1,platform:c}){let l=R(),u=pc(`recycle`),f=c===`windows`,[p,m]=(0,D.useState)([]),[h,g]=(0,D.useState)([]),[_,y]=(0,D.useState)(!1),[ee,b]=(0,D.useState)(null),[x,te]=(0,D.useState)(!0),[S,C]=(0,D.useState)(!1),[w,T]=(0,D.useState)(null),[E,ne]=(0,D.useState)(!1),[O,k]=(0,D.useState)(()=>new Set),[A,re]=(0,D.useState)(null),[j,ie]=(0,D.useState)(()=>{let e=Fn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[ae,M]=(0,D.useState)(null),[N,oe]=(0,D.useState)(null),[se,P]=(0,D.useState)(()=>{let e=Nn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),ce=(0,D.useRef)(null),le=e=>{P(e),Pn(`yafm.recycle.preview.width`,e)},I=(0,D.useCallback)(async()=>{te(!0),T(null);try{m(await Oe(E))}catch(e){T(e instanceof Error?e.message:String(e))}finally{te(!1)}},[E]);(0,D.useEffect)(()=>{I()},[I]),(0,D.useEffect)(()=>{E||(g([]),y(!1),b(null))},[E]),(0,D.useEffect)(()=>{k(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let L=(0,D.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=pp(e,t,j.column);return j.descending?-n:n})},[p,h,j]),z=(0,D.useMemo)(()=>!t?.open||t.query.trim().length===0?L:L.filter(e=>Sn(e.name,t)||Sn(e.originalPath,t)),[L,t?.open,t?.query,t?.matchCase,t?.regex]),ue=(0,D.useRef)(null);$u(ue,t??null,`[data-search-block]`,n??(()=>void 0),[L]),(0,D.useEffect)(()=>{k(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let de=(0,D.useMemo)(()=>L.filter(e=>O.has(e.id)),[L,O]),fe=de.filter(e=>e.removable&&!e.isOrphan),pe=de.filter(e=>e.removable),B=(e,t)=>{let n=t.ctrlKey||t.metaKey;k(r=>{if(t.shiftKey&&A){let t=L.findIndex(e=>e.id===A),i=L.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(L[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),re(e.id)},me=(0,D.useCallback)(()=>k(new Set(z.map(e=>e.id))),[z]),V=z.length>0&&z.every(e=>O.has(e.id)),he=(0,D.useCallback)(async()=>{let e=fe.map(e=>e.id);if(e.length!==0){C(!0);try{let t=await je(e);t.ok||await sa(a(l,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),k(new Set),await I()}finally{C(!1)}}},[I,fe,l]),ge=(0,D.useCallback)(async()=>{let e=pe.map(e=>e.id);if(oe(null),e.length!==0){C(!0);try{let t=await Me(e);!t.ok&&!t.cancelled&&await sa(a(l,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),k(new Set),await I()}finally{C(!1)}}},[pe,I,l]),H=async()=>{oe(null),C(!0);try{await Ae(E),k(new Set),await I()}finally{C(!1)}},_e=async()=>{C(!0),b(null);try{let e=await Pe();if(e.cancelled){b(`Elevation was declined — nothing was read.`);return}if(e.failed){b(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),y(!0)}finally{C(!1)}},ve=async()=>{C(!0),oe(null);try{await Fe(),g([]),y(!1),b(null),await I()}finally{C(!1)}},ye=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},be=e=>{navigator.clipboard.writeText(e.originalPath)},xe=(e,t)=>{e.preventDefault(),t&&!O.has(t.id)&&k(new Set([t.id])),M({x:e.clientX,y:e.clientY})};(0,D.useEffect)(()=>(cc(`recycle`,O.size>0?(e,t)=>M({x:e,y:t}):null),()=>cc(`recycle`,null)),[O]),(0,D.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),me()):e.key===`Delete`?(e.preventDefault(),pe.length>0&&oe(`delete`)):e.key===`Enter`&&fe.length>0?(e.preventDefault(),he()):e.key===`Escape`&&(k(new Set),M(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[pe.length,fe.length,he,me]);let Se=[{label:l(`Restore`),icon:(0,F.jsx)(dp,{width:14,height:14}),disabled:fe.length===0,onSelect:()=>void he()},{label:l(`Delete permanently`),icon:(0,F.jsx)(li,{size:14}),danger:!0,disabled:pe.length===0,onSelect:()=>oe(`delete`)},{label:l(`Properties`),icon:(0,F.jsx)(ri,{size:14}),disabled:de.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=de;e&&Ne(e.id)}},{label:l(`Open original location`),icon:(0,F.jsx)(qr,{size:14}),disabled:de.length!==1,onSelect:()=>{let[e]=de;e&&ye(e)}},{label:l(`Copy original path`),icon:(0,F.jsx)(Ki,{size:14}),disabled:de.length!==1,onSelect:()=>{let[e]=de;e&&be(e)}},{label:l(`Select all`),separatorBefore:!0,onSelect:me},{label:l(`Refresh`),icon:(0,F.jsx)(Qr,{size:14}),onSelect:()=>void I()}],U=de.length>0?de[0]:null,Ce=U?{name:U.name,path:U.contentPath||U.originalPath,isDirectory:U.isDirectory,size:U.size,modified:U.deleted,fields:[{label:l(`Type`),value:l(hp(U))},{label:l(`Original location`),value:U.originalPath},{label:l(`Date deleted`),value:v(U.deleted)},{label:l(`Size`),value:U.isDirectory?`—`:d(U.size)},...U.owner?[{label:l(`Owner`),value:U.owner}]:[],{label:l(`Status`),value:U.isOrphan?l(`Metadata only`):U.removable?l(`Restorable`):l(`Other profile`)}]}:null;return(0,F.jsxs)(_p,{ref:ce,onContextMenu:e=>xe(e),children:[(0,F.jsxs)(vp,{children:[(0,F.jsxs)(yp,{children:[(0,F.jsx)(li,{size:16}),(0,F.jsx)(`span`,{children:l(`Recycle Bin`)}),(0,F.jsxs)(bp,{children:[x?`…`:a(l,L.length,`1 item`,`{count} items`),O.size>0&&` · ${l(`{count} selected`,{count:O.size})}`]})]}),(0,F.jsxs)(xp,{children:[(0,F.jsx)(Cp,{$on:E,onClick:()=>ne(e=>!e),title:l(`Show metadata records whose content is already gone`),type:`button`,children:l(`Orphans`)}),E&&f&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Sp,{disabled:S||_,onClick:()=>void _e(),title:l(_?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:l(S?`Working…`:_?`Admin view loaded`:`Show all (admin)…`)}),_&&h.length>0&&(0,F.jsx)(Sp,{disabled:S,onClick:()=>oe(`purge`),type:`button`,children:l(`Delete every orphan`)})]}),(0,F.jsx)(Sp,{disabled:S||fe.length===0,onClick:()=>void he(),type:`button`,children:l(`Restore`)}),(0,F.jsx)(Sp,{$danger:!0,disabled:S||pe.length===0,onClick:()=>oe(`delete`),type:`button`,children:l(`Delete`)}),(0,F.jsx)(Sp,{disabled:S||L.length===0,onClick:()=>oe(`empty`),type:`button`,children:l(`Empty`)}),(0,F.jsx)(wp,{onClick:()=>void I(),title:l(`Refresh`),type:`button`,children:(0,F.jsx)(Qr,{size:14})}),u.available&&(0,F.jsx)(wp,{onClick:e=>u.open(e.clientX,e.clientY),title:l(`Selection menu`),type:`button`,children:(0,F.jsx)($i,{size:14})})]})]}),ee&&(0,F.jsx)(Gp,{children:ee}),w&&(0,F.jsx)(Kp,{children:w}),!w&&!x&&(t?.open&&t.query.trim().length>0?z.length===0:L.length===0)&&(0,F.jsx)(Kp,{children:t?.open&&t.query.trim().length>0?l(`No matching items.`):l(`The recycle bin is empty.`)}),L.length>0&&(0,F.jsxs)(Wp,{children:[(0,F.jsxs)(Tp,{ref:ue,children:[(0,F.jsxs)(Dp,{children:[(0,F.jsx)(Np,{$checked:V,$partial:!V&&O.size>0,onClick:()=>V?k(new Set):me(),title:l(V?`Select none`:`Select all`),type:`button`,children:V?(0,F.jsx)(ui,{size:9}):O.size>0&&(0,F.jsx)(Pp,{})}),(0,F.jsxs)(Op,{onClick:()=>we(`name`),type:`button`,children:[l(`Name`),mp(j,`name`)]}),(0,F.jsxs)(Op,{onClick:()=>we(`original`),type:`button`,children:[l(`Original location`),mp(j,`original`)]}),(0,F.jsxs)(Op,{onClick:()=>we(`deleted`),type:`button`,children:[l(`Date deleted`),mp(j,`deleted`)]}),(0,F.jsxs)(Op,{onClick:()=>we(`size`),type:`button`,children:[l(`Size`),mp(j,`size`)]}),(0,F.jsxs)(Op,{onClick:()=>we(`type`),type:`button`,children:[l(`Type`),mp(j,`type`)]}),(0,F.jsx)(`span`,{})]}),(0,F.jsx)(kp,{onClick:e=>{e.target===e.currentTarget&&k(new Set)},children:L.map(e=>(0,F.jsxs)(Ap,{$checked:O.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>B(e,t),onContextMenu:t=>xe(t,e),onDoubleClick:()=>{k(new Set([e.id])),re(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,F.jsx)(Mp,{$checked:O.has(e.id),children:O.has(e.id)&&(0,F.jsx)(ui,{size:9})}),(0,F.jsxs)(Fp,{children:[(0,F.jsx)(gp,{entry:e}),(0,F.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,F.jsx)(Up,{children:l(`metadata only`)}),e.owner&&(0,F.jsx)(Up,{$other:!0,children:l(`other profile`)})]}),(0,F.jsx)(Lp,{children:e.originalPath}),(0,F.jsx)(Rp,{children:v(e.deleted)}),(0,F.jsx)(zp,{children:e.isDirectory?`—`:d(e.size)}),(0,F.jsx)(Bp,{children:l(hp(e))}),(0,F.jsxs)(Vp,{children:[e.removable&&!e.isOrphan&&(0,F.jsx)(Hp,{onClick:t=>{t.stopPropagation(),je([e.id]).then(I)},title:l(`Restore to its original folder`),type:`button`,children:(0,F.jsx)(dp,{})}),e.removable&&(0,F.jsx)(Hp,{$danger:!0,onClick:t=>{t.stopPropagation(),k(new Set([e.id])),oe(`delete`)},title:e.isOrphan?l(`Remove the leftover record`):l(`Delete permanently`),type:`button`,children:(0,F.jsx)(li,{size:13})})]})]},e.id))})]}),r&&(0,F.jsx)(Fo,{emptyNote:l(`Nothing selected.`),info:Ce,onWidth:le,selectionNote:de.length>1?a(l,de.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:o,videoAutoplay:s,width:se})]}),ae&&(0,F.jsx)(Ia,{items:Se,onClose:()=>M(null),x:ae.x,y:ae.y}),(0,F.jsx)(wo,{confirmLabel:l(N===`empty`?`Empty the bin`:N===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:N===`empty`?a(l,L.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):N===`purge`?l(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):a(l,pe.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>oe(null),onConfirm:()=>{N===`empty`?H():N===`purge`?ve():ge()},open:N!==null,title:l(N===`empty`?`Empty the recycle bin`:N===`purge`?`Delete every orphan`:`Delete permanently`)})]});function we(e){ie(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return In(`yafm.recycle.sort`,n),n})}}function pp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return hp(e).localeCompare(hp(t),void 0,{sensitivity:`base`})}}function mp(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function hp(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function gp({entry:e}){let t=rn(e.originalPath,e.isDirectory);return(0,F.jsx)(Ip,{children:t?(0,F.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,F.jsx)(qr,{}):(0,F.jsx)(Jr,{})})}var _p=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,vp=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,yp=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,bp=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,xp=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Sp=i.button`
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
`,Cp=i(Sp)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,wp=i.button`
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
`,Tp=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Ep=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Dp=i.div`
    display: grid;
    grid-template-columns: ${Ep};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Op=i.button`
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
`,kp=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Ap=i.div`
    display: grid;
    grid-template-columns: ${Ep};
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
`,jp=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Mp=i.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Np=i.button`
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
`,Pp=i.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Fp=i(jp)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Ip=i.span`
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
`,Lp=i(jp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Rp=i(jp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,zp=i(jp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Bp=i(jp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Vp=i.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Hp=i.button`
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
`,Up=i.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Wp=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Gp=i.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Kp=i.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function qp(){return P.available?(await P.request(`app.tags`)).tags:[]}async function Jp(e){return!P.available||!e?!1:(await P.request(`app.tags.delete`,{name:e})).ok}async function Yp(e,t){return!P.available||!e?[]:(await P.request(`app.tags.create`,{name:e,color:t})).tags}async function Xp(e,t){return!P.available||!e?!1:(await P.request(`app.tags.color`,{name:e,color:t})).ok}async function Zp(e,t){return!P.available||!e||!t?!1:(await P.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function Qp(){let e=R();return(0,F.jsx)($p,{title:e(`Always applies to every folder`),children:e(`Global`)})}var $p=i.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,em=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function tm(e){return`"${e.replaceAll(`"`,``)}"`}function nm(e){let t=document.documentElement.style;for(let n of em){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${tm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function rm(){return P.available?(await P.request(`app.fonts`)).fonts??[]:[]}function im({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=R(),[s,c]=(0,D.useState)(null),[l,u]=(0,D.useState)(``),d=(0,D.useRef)(null),f=(0,D.useRef)(null),p=(0,D.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,D.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(am,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,F.jsx)(om,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,F.jsx)(sm,{children:`▾`})]}),s&&(0,ya.createPortal)((0,F.jsxs)(cm,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,F.jsxs)(lm,{children:[(0,F.jsx)(Xr,{size:12}),(0,F.jsx)(um,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,F.jsxs)(dm,{children:[(0,F.jsxs)(fm,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,F.jsxs)(mm,{children:[n,` `,(0,F.jsx)(gm,{children:o(`(default)`)})]}),!e&&(0,F.jsx)(ui,{size:11})]}),p.map(t=>(0,F.jsxs)(fm,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,F.jsxs)(pm,{children:[(0,F.jsx)(mm,{children:t}),(0,F.jsx)(hm,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,F.jsx)(ui,{size:11})]},t)),p.length===0&&(0,F.jsx)(_m,{children:o(`No matching font.`)})]})]}),document.body)]})}var am=i.button`
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
`,om=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,sm=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,cm=i.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${Aa}
`,lm=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,um=i.input`
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
`,dm=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,fm=i.button`
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
`,pm=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,mm=i.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hm=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gm=i.span`
    color: var(--text-muted);
    font-size: 10px;
`,_m=i.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,vm=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],ym=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,bm=`en`,xm=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],Sm=new Date(2026,10,5,16,8).getTime(),Cm=`system`,wm={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},Tm=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],Em=`yafm.colors.recent`;function Dm(){let e=Fn(Em);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Om({appInfo:e,focusSection:n,onSettingsChanged:r,find:i,onSearchMatches:o}){let s=R(),[c,l]=(0,D.useState)([]),[u,f]=(0,D.useState)(null),[h,g]=(0,D.useState)(null),[v,ee]=(0,D.useState)(null),[b,x]=(0,D.useState)(``),[te,C]=(0,D.useState)(`file`),[T,E]=(0,D.useState)(!1),[ne,O]=(0,D.useState)(!1),[k,A]=(0,D.useState)(null),[re,j]=(0,D.useState)(!1),[ie,ae]=(0,D.useState)(!1),[M,N]=(0,D.useState)(null),[oe,se]=(0,D.useState)(null),[P,ce]=(0,D.useState)(null),[I,L]=(0,D.useState)(!1),[z,ue]=(0,D.useState)(null),[de,fe]=(0,D.useState)(null),[pe,B]=(0,D.useState)(!1),[me,V]=(0,D.useState)([]),[he,ge]=(0,D.useState)(null),[H,ve]=(0,D.useState)(!1),[ye,be]=(0,D.useState)(null),[xe,Se]=(0,D.useState)(``),[U,Ce]=(0,D.useState)(ms),[we,Te]=(0,D.useState)(null),[Ee,De]=(0,D.useState)(null),[Oe,ke]=(0,D.useState)(``),[Ae,je]=(0,D.useState)(``),[Me,Ne]=(0,D.useState)(null),[Pe,Fe]=(0,D.useState)(Dm),[Ie,Le]=(0,D.useState)({}),[Re,ze]=(0,D.useState)(null),[Be,Ve]=(0,D.useState)(null),[Ue,We]=(0,D.useState)(!1),[Ge,Je]=(0,D.useState)(!1),[et,nt]=(0,D.useState)(null),[rt,dt]=(0,D.useState)(Tm[0].id),[mt,ht]=(0,D.useState)([]),[gt,_t]=(0,D.useState)(null),[W,vt]=(0,D.useState)(null),[yt,bt]=(0,D.useState)(null),[xt,St]=(0,D.useState)(!1),[Ct,wt]=(0,D.useState)(``),Tt=(0,D.useRef)(null),Et=(0,D.useRef)({}),Dt=h?.defaultView??_e,Ot=h?.themePresets??[],kt=oe?oe.registered&&oe.pathMatches:h?.archiveHandler??!1,At=oe?.registered??h?.archiveHandler??!1,jt=P?P.registered&&P.pathMatches:h?.defaultFileManager??!1;$u(Tt,i??null,`section`,o??(()=>void 0),[h]),(0,D.useEffect)(()=>{let e=Tt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){dt(Tm[Tm.length-1].id);return}let n=t+110,r=Tm[0].id;for(let{id:e}of Tm){let t=Et.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}dt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Mt=e=>t=>{Et.current[e]=t},Nt=e=>{Et.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),dt(e)};(0,D.useEffect)(()=>{n&&Nt(n)},[n]),(0,D.useEffect)(()=>{le().then(e=>l(e.available),()=>l([]))},[]),(0,D.useEffect)(()=>{rm().then(ht,()=>ht([]))},[]),(0,D.useEffect)(()=>{ft().then(vt,()=>vt(null))},[]),(0,D.useEffect)(()=>{it().then(Ve,()=>void 0)},[]),(0,D.useEffect)(()=>{He().then(f,()=>f(null)),Ke().then(g,()=>g(null)),lt().then(j,()=>j(!1)),Xe().then(se,()=>se(null)),Ye().then(ce,()=>ce(null)),qp().then(V,()=>V([]))},[]),(0,D.useEffect)(()=>{let e=()=>void st().then(A,()=>A(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let G=async e=>{if(!h)return;let t={...h,...e};Object.keys(e).every(e=>t[e]===h[e])||(g(t),$t(),g(await $e(t)),r())},Pt=async e=>{let t=await ra(e);if(!t)return;let n=h?.backgroundCustom??[];await G({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Ft=async()=>{let e=Ct.trim();if(!h||!w(e))return;let t=h.backgroundCustom??[];wt(``),await G({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},It=e=>{if(!h)return;let t=h.backgroundSource;G({backgroundCustom:h.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},Lt=async()=>{if(!h)return;let t=await na();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;h.protectedPaths.includes(r)||await G({protectedPaths:[...h.protectedPaths,r]})},zt=()=>{let e=Oe.trim();h&&e&&!h.protectedPaths.includes(e)&&(ke(``),G({protectedPaths:[...h.protectedPaths,e]}))},Bt=()=>{if(!h||!we)return;let e=we.value.trim(),t=we.from;Te(null),e.length!==0&&e!==t&&G({protectedPaths:h.protectedPaths.map(n=>n===t?e:n)})},Vt=e=>{h&&G({protectedPaths:h.protectedPaths.filter(t=>t!==e)})},Wt=async()=>{let e=await qe();e.length>0&&await G({protectedPaths:e})},Gt=()=>{if(!h||!Ee)return;let e=Ee.value.trim(),t=Ee.from;De(null),e&&e!==t&&G({directoryIndexBlacklist:h.directoryIndexBlacklist.map(n=>n===t?e:n)})},Kt=()=>{let e=Ae.trim();h&&e&&!h.directoryIndexBlacklist.includes(e)&&(je(``),G({directoryIndexBlacklist:[...h.directoryIndexBlacklist,e]}))},qt=async()=>{if(!h)return;let t=await na();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;h.directoryIndexBlacklist.includes(r)||await G({directoryIndexBlacklist:[...h.directoryIndexBlacklist,r]})},Jt=e=>{h&&G({directoryIndexBlacklist:h.directoryIndexBlacklist.filter(t=>t!==e)})},Yt=()=>{G({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},Xt=()=>{if(!h||Me===null)return;let e=Me.trim()||`yyyy/MM/dd HH:mm`;Ne(null),e!==h.timeFormatPattern&&G({timeFormatPattern:e})},K=(e,t)=>{Fe(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return In(Em,i),i})},Zt=m(h?.accentColor,S),Qt=m(h?.secondaryColor,y),q=(e,t)=>{h&&(K(`accent`,Zt),K(`secondary`,Qt),G({accentColor:e,secondaryColor:t}))},J=(e,t)=>{h&&(K(e,e===`accent`?Zt:Qt),G(e===`accent`?{accentColor:t}:{secondaryColor:t}))},en=async()=>{We(!0),Je(!1);try{Ve(await at())}catch{Je(!0)}finally{We(!1)}},tn=async()=>{if(!h||!Re)return;let e=Re.name.trim()||`${Re.accent.toUpperCase()} / ${Re.secondary.toUpperCase()}`,t=[...h.themePresets,{name:e,accent:Re.accent,secondary:Re.secondary}];ze(null),await G({themePresets:t})},nn=async e=>{h&&await G({themePresets:h.themePresets.filter((t,n)=>n!==e)})},rn=e=>{let t=et;nt(null),t&&t.role===e&&(e===`accent`?Zt:Qt).toLowerCase()!==t.color.toLowerCase()&&K(e,t.color)},an=async()=>{let e=xe.trim();if(e&&!H){ve(!0),be(null);try{V(await Yp(e,U)),Se(``)}catch{be(s(`Could not add the tag.`))}finally{ve(!1)}}},on=async(e,t)=>{V(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Xp(e,t)||be(s(`Could not change the tag's color.`))},sn=async e=>{if(H)return;ve(!0),be(null);let t=await Jp(e);V(await qp()),t||be(`"${e}" is still used by a folder whose index could not be updated.`),ve(!1)},cn=async()=>{let e=he;if(!e||H)return;let t=e.value.trim();t.length===0||t===e.name?ge(null):(ve(!0),be(null),await Zp(e.name,t)?(V(await qp()),ge(null)):be(`Could not rename "${e.name}".`),ve(!1))},ln=async e=>{let t=new Set(Dt.columns??_e.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=vc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await G({defaultView:{...Dt,columns:n}})},un=async()=>{if(ie)return;let e=!re;ae(!0),N(null);try{let t=await ut(e);j(t),g(e=>e&&{...e,linksEnabled:t}),r(),t!==e&&N(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{N(`The request to Windows failed. Try again.`)}finally{ae(!1)}},dn=async()=>{if(!I){L(!0),ue(null);try{let e=await Ze();se(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),r(),t||ue(`Windows did not accept the archive registration. Try again.`)}catch{ue(`The request to Windows failed. Try again.`)}finally{L(!1)}}},fn=async()=>{if(!I){L(!0),ue(null);try{let e=await Qe();se(e),g(e=>e&&{...e,archiveHandler:!1}),r(),e.registered&&ue(`The registration is still there. Try turning it off again.`)}catch{ue(`The request to Windows failed. Try again.`)}finally{L(!1)}}},pn=async(e,t)=>{if(!h)return;let n={...h.extensionIcons};t===null?delete n[e]:n[e]=t,await G({extensionIcons:n})},mn={...Rt,...h?.shortcuts};(0,D.useEffect)(()=>{if(!de)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){fe(null);return}let t=Ht(e);t&&(fe(null),G({shortcuts:{...mn,[de]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[de,h]),(0,D.useEffect)(()=>{if(!pe)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){B(!1);return}let t=Ht(e);t&&(B(!1),G({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[pe,h]);let hn=async e=>{await G({recentLimit:Math.min(Math.max(e,0),50)})},gn=(e,t)=>{let n=t??Ie[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Le(t=>({...t,[e]:void 0})),G(i)},_n=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;_t(null),await G({sharePortMode:`custom`,sharePort:n}),await dd(n,`custom`)},vn=async e=>{let t=e===`custom`,n=t?h?.sharePort??8080:null;await G({sharePortMode:t?`custom`:`random`,sharePort:n}),await dd(n,t?`custom`:`random`)},yn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;St(!0),bt(null);try{let e=await pt(t);vt(e),bt(e.error),e.error||await G({startupMode:t})}finally{St(!1)}},bn=async e=>{await G({galleryRoots:e.length>0?e:null})},xn=async()=>{let e=await na(),t=h?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await bn([...t,e])},Sn=async()=>{let e=b.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await pn(e,te),x(``))},Cn=async()=>{O(!0);try{let e=await na();if(!e)return;let t=await ra([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await tt(e.replace(/[\\/][^\\/]+$/,``),_(e),`file:${t}`)&&($t(),ee({folder:e,icon:t}))}finally{O(!1)}},wn=async(e,t)=>{let n={...h?.fonts};t?n[e]=t:delete n[e],await G({fonts:n})};return(0,F.jsxs)(Bm,{children:[(0,F.jsxs)(Vm,{ref:Tt,children:[(0,F.jsxs)(Hm,{ref:Mt(`application`),children:[(0,F.jsx)(zm,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Version`)}),(0,F.jsx)(vh,{children:e?`v${e.version}`:`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Platform`)}),(0,F.jsx)(vh,{children:e?.platform??`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Language`)}),(0,F.jsx)($,{children:s(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(Im,{disabled:!h,onChange:e=>void G({language:e}),options:[Cm,...c.length>0?c:[bm]],value:h?.language??bm})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Picker window size`)}),(0,F.jsx)($,{children:s(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Oh,{inputMode:`numeric`,onBlur:e=>gn(`width`,e.currentTarget.value),onChange:e=>Le(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ie.width??String(h?.pickerWindowWidth??1200)}),(0,F.jsx)(vh,{children:`×`}),(0,F.jsx)(Oh,{inputMode:`numeric`,onBlur:e=>gn(`height`,e.currentTarget.value),onChange:e=>Le(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ie.height??String(h?.pickerWindowHeight??800)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Web server port`)}),(0,F.jsx)($,{children:s(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(Za,{disabled:!h,onChange:e=>void vn(e),options:[{value:`random`,label:s(`Random`)},{value:`custom`,label:s(`Custom port`)}],value:h?.sharePortMode??`random`,width:160})})]}),h?.sharePortMode===`custom`&&(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Custom port`)}),(0,F.jsx)($,{children:s(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(Oh,{inputMode:`numeric`,onBlur:e=>void _n(e.currentTarget.value),onChange:e=>_t(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:gt??(h?.sharePort?String(h.sharePort):``)})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Link paths`)}),(0,F.jsx)($,{children:s(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(Za,{disabled:!h,onChange:e=>void G({linkPathMode:e}),options:[{value:`relative`,label:s(`Relative`)},{value:`absolute`,label:s(`Absolute`)}],value:h?.linkPathMode??`relative`,width:160})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Global hotkey`)}),(0,F.jsx)($,{children:s(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(og,{$listening:pe,disabled:!h,onClick:()=>B(!0),type:`button`,children:pe?s(`Press a key…`):h?.globalHotkey?Ut(h.globalHotkey):s(`None`)}),h?.globalHotkey&&(0,F.jsx)(xh,{onClick:()=>void G({globalHotkey:null}),type:`button`,children:s(`Clear`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Open yafm:// links`)}),(0,F.jsx)($,{children:s(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),M&&(0,F.jsx)(_h,{children:M})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Th,{$on:re,children:s(re?`Active`:`Off`)}),(0,F.jsx)(Eh,{$on:re,disabled:ie,onClick:()=>void un(),title:s(re?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,F.jsx)(Dh,{})})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Use as the default file manager`)}),(0,F.jsx)($,{children:s(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),P?.registered&&!P.pathMatches&&(0,F.jsx)(_h,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:P.registeredPath??`?`})})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Th,{$on:jt,children:s(jt?`Active`:`Off`)}),(0,F.jsx)(Eh,{$on:jt,disabled:!h,onClick:()=>void(async()=>{let e=P?.registered&&!P.pathMatches?!0:!h?.defaultFileManager;await G({defaultFileManager:e}),ce(await Ye().catch(()=>null))})(),title:s(jt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,F.jsx)(Dh,{})})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Open archives with this app`)}),(0,F.jsx)($,{children:s(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,F.jsx)($,{children:s(`When this is off, opening an archive uses the system's default application instead.`)}),oe?.registered&&!oe.pathMatches&&(0,F.jsx)(_h,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:oe.registeredPath??`?`})}),z&&(0,F.jsx)(_h,{children:z})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Th,{$on:kt,children:s(kt?`Active`:`Off`)}),(0,F.jsx)(sg,{disabled:!h||I||kt,onClick:()=>void dn(),type:`button`,children:s(`Register`)}),e?.platform===`windows`&&(0,F.jsx)(sg,{onClick:()=>void ot(`ms-settings:defaultapps`),type:`button`,children:s(`Default apps…`)}),(0,F.jsx)(wh,{disabled:!h||I||!At,onClick:()=>void fn(),type:`button`,children:s(`Unregister`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Reopen the tabs that were open`)}),(0,F.jsx)($,{children:s(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,F.jsx)(Eh,{$on:h?.restoreTabs??!0,disabled:!h,onClick:()=>void G({restoreTabs:!h?.restoreTabs}),type:`button`,children:(0,F.jsx)(Dh,{})})]})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`startup`),children:[(0,F.jsx)(zm,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Start with the computer`)}),(0,F.jsx)($,{children:s(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),yt&&(0,F.jsx)(_h,{children:yt}),W&&!W.supported&&(0,F.jsx)(_h,{children:s(`This platform cannot create a per-user startup entry.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(Za,{disabled:!h||xt||W!==null&&!W.supported,onChange:e=>void yn(e),options:[{value:`none`,label:s(`None`)},{value:`shortcut`,label:s(`Shortcut`)},{value:`task`,label:s(`Scheduled task`)}],value:W?.mode??h?.startupMode??`none`,width:170})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Start hidden in the tray`)}),(0,F.jsx)($,{children:s(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(Eh,{$on:h?.startHidden??!1,disabled:!h,onClick:()=>void G({startHidden:!h?.startHidden}),type:`button`,children:(0,F.jsx)(Dh,{})})})]})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`fonts`),children:[(0,F.jsx)(zm,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,F.jsxs)(Wm,{children:[em.map(e=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(e.label)}),(0,F.jsx)($,{children:s(`Falls back to {font} until another family is chosen.`,{font:s(e.fallback)})})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(im,{defaultLabel:s(e.fallback),disabled:!h,fonts:mt,onChange:t=>void wn(e.id,t),sample:e.sample,value:h?.fonts?.[e.id]??null})})]},e.id)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Reset`)}),(0,F.jsx)($,{children:s(`Back to the app's built-in font for every role.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(sg,{onClick:()=>void G({fonts:{}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`time`),children:[(0,F.jsx)(zm,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,F.jsx)(Wm,{children:(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(Km,{children:[(0,F.jsx)(Q,{children:s(`Format`)}),(0,F.jsx)($,{children:s(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,F.jsx)(eg,{children:xm.map(e=>(0,F.jsx)(tg,{$active:(h?.timeFormat??`24`)===e.id,onClick:()=>void G({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(h?.timeFormat??`24`)===`custom`&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ng,{"aria-label":s(`Pattern`),onBlur:Xt,onChange:e=>Ne(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Xt()):e.key===`Escape`&&Ne(null)},spellCheck:!1,value:Me??h?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,F.jsx)($,{children:s(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,F.jsxs)(rg,{children:[(0,F.jsx)(`span`,{children:s(`Preview`)}),(0,F.jsx)(`code`,{children:p(Sm,h?.timeFormat,Me??h?.timeFormatPattern)})]})]})})]}),(0,F.jsxs)(Hm,{ref:Mt(`updates`),children:[(0,F.jsx)(zm,{note:`The running build and the newest one published.`,title:`Updates`}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Current version`)}),(0,F.jsx)(vh,{children:e?`v${e.version}`:`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Latest version`)}),(0,F.jsx)(vh,{children:Be?`v${Be.latest}`:`—`})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Check for updates`)}),(0,F.jsx)($,{children:Be&&!Be.available?s(`You are on the latest version.`):s(`Reads the version file the release workflow publishes.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(sg,{disabled:Ue,onClick:()=>void en(),type:`button`,children:s(Ue?`Checking…`:`Check now`)})})]}),Be?.available&&(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Version {version} is available.`,{version:Be.latest})}),(0,F.jsx)($,{children:s(`Download the new build from the releases page.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(sg,{onClick:()=>void ot(ym),type:`button`,children:s(`Open release page`)})})]}),Ge&&(0,F.jsx)(X,{children:(0,F.jsx)(_h,{children:s(`Could not check for updates.`)})})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`colors`),children:[(0,F.jsx)(zm,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(Km,{children:[(0,F.jsx)(Q,{children:s(`Presets`)}),(0,F.jsx)($,{children:s(`One click changes the accent and the highlight together.`)})]}),(0,F.jsxs)(qm,{children:[Vl.map(e=>(0,F.jsxs)(Jm,{$on:Zt.toLowerCase()===e.accent&&Qt.toLowerCase()===e.secondary,onClick:()=>q(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,F.jsxs)(th,{children:[(0,F.jsx)(`i`,{style:{background:e.accent}}),(0,F.jsx)(`i`,{style:{background:e.secondary}})]}),(0,F.jsx)(Ym,{children:s(e.name)})]},e.name)),Ot.map((e,t)=>(0,F.jsxs)(Xm,{children:[(0,F.jsxs)(Jm,{$on:Zt.toLowerCase()===e.accent.toLowerCase()&&Qt.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>q(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,F.jsxs)(th,{children:[(0,F.jsx)(`i`,{style:{background:e.accent}}),(0,F.jsx)(`i`,{style:{background:e.secondary}})]}),(0,F.jsx)(Ym,{children:e.name})]}),(0,F.jsx)(Zm,{onClick:()=>void nn(t),title:s(`Remove preset`),type:`button`,children:(0,F.jsx)(di,{size:9})})]},`${e.name}-${t}`)),Re?(0,F.jsxs)($m,{children:[(0,F.jsxs)(th,{children:[(0,F.jsx)(`i`,{style:{background:Re.accent}}),(0,F.jsx)(`i`,{style:{background:Re.secondary}})]}),(0,F.jsx)(eh,{autoFocus:!0,maxLength:24,onChange:e=>ze({...Re,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),tn()):e.key===`Escape`&&(e.preventDefault(),ze(null))},placeholder:s(`Preset name`),spellCheck:!1,value:Re.name}),(0,F.jsx)(xh,{onClick:()=>void tn(),type:`button`,children:s(`Save`)}),(0,F.jsx)(xh,{onClick:()=>ze(null),type:`button`,children:s(`Cancel`)})]}):(0,F.jsxs)(Qm,{disabled:!h,onClick:()=>ze({name:``,accent:Zt,secondary:Qt}),title:s(`Save the current colours as a preset`),type:`button`,children:[(0,F.jsx)($r,{size:12}),s(`Add preset`)]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Accent color`)}),(0,F.jsx)($,{children:s(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Rm,{colors:Pe.accent,current:Zt,onApply:e=>J(`accent`,e)}),(0,F.jsx)(Sh,{"aria-label":s(`Accent color`),disabled:!h,onBlur:()=>rn(`accent`),onChange:e=>void G({accentColor:e.target.value}),onFocus:()=>nt({role:`accent`,color:Zt}),type:`color`,value:Zt}),(0,F.jsx)(Ch,{children:Zt.toUpperCase()})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Secondary color`)}),(0,F.jsx)($,{children:s(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Rm,{colors:Pe.secondary,current:Qt,onApply:e=>J(`secondary`,e)}),(0,F.jsx)(Sh,{"aria-label":s(`Secondary color`),disabled:!h,onBlur:()=>rn(`secondary`),onChange:e=>void G({secondaryColor:e.target.value}),onFocus:()=>nt({role:`secondary`,color:Qt}),type:`color`,value:Qt}),(0,F.jsx)(Ch,{children:Qt.toUpperCase()})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Reset colors`)}),(0,F.jsx)($,{children:s(`Returns the interface to the default blue and indigo theme.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(xh,{disabled:!h,onClick:()=>{K(`accent`,Zt),K(`secondary`,Qt),G({accentColor:null,secondaryColor:null})},type:`button`,children:s(`Reset`)})})]})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`background`),children:[(0,F.jsx)(zm,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(Km,{children:[(0,F.jsx)(Q,{children:s(`Wallpaper`)}),(0,F.jsx)($,{children:s(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,F.jsx)(Bh,{children:(0,F.jsx)(Vh,{$active:!h?.backgroundSource,onClick:()=>void G({backgroundSource:null}),title:s(`None`),type:`button`,children:(0,F.jsx)(Kh,{children:s(`None`)})})}),(0,F.jsxs)(Lh,{children:[Wl.map(e=>(0,F.jsxs)(Rh,{children:[(0,F.jsx)(zh,{children:s(e.name)}),(0,F.jsx)(Bh,{children:e.variants.map(t=>(0,F.jsx)(Vh,{$active:h?.backgroundSource===t.id,onClick:()=>void G({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,F.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,F.jsxs)(Rh,{children:[(0,F.jsx)(zh,{children:s(`Motion`)}),(0,F.jsx)(Bh,{children:Ul.map(e=>(0,F.jsxs)(Vh,{$active:h?.backgroundSource===e.id,onClick:()=>void G({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,F.jsx)(`img`,{alt:``,src:e.poster}),(0,F.jsx)(Wh,{children:(0,F.jsx)(gi,{size:11})})]},e.id))})]}),(0,F.jsxs)(Rh,{children:[(0,F.jsx)(zh,{children:s(`Custom`)}),(0,F.jsxs)(Bh,{children:[(h?.backgroundCustom??[]).map(e=>(0,F.jsx)(Fm,{active:h?.backgroundSource===`file:${e}`||h?.backgroundSource===`url:${e}`||h?.backgroundSource===e,onRemove:()=>It(e),onSelect:()=>void G({backgroundSource:w(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,F.jsxs)(Gh,{onClick:()=>void Pt([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,F.jsx)($r,{size:12}),s(`Image…`)]}),(0,F.jsxs)(Gh,{onClick:()=>void Pt([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,F.jsx)($r,{size:12}),s(`Video…`)]})]})]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Image or video URL`)}),(0,F.jsx)($,{children:s(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Oh,{onChange:e=>wt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ft()},placeholder:`https://…`,value:Ct}),(0,F.jsx)(xh,{disabled:!w(Ct),onClick:()=>void Ft(),type:`button`,children:s(`Add`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Blur`)}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Ih,{max:40,min:0,onChange:e=>void G({backgroundBlur:Number(e.target.value)}),type:`range`,value:h?.backgroundBlur??0}),(0,F.jsxs)(vh,{children:[h?.backgroundBlur??0,`px`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Saturation`)}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Ih,{max:200,min:0,onChange:e=>void G({backgroundSaturation:Number(e.target.value)}),type:`range`,value:h?.backgroundSaturation??100}),(0,F.jsxs)(vh,{children:[h?.backgroundSaturation??100,`%`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Brightness`)}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Ih,{max:150,min:40,onChange:e=>void G({backgroundBrightness:Number(e.target.value)}),type:`range`,value:h?.backgroundBrightness??100}),(0,F.jsxs)(vh,{children:[h?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`safety`),children:[(0,F.jsx)(zm,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(Km,{children:[(0,F.jsx)(Q,{children:s(`Protected folders`)}),(0,F.jsx)($,{children:s(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,F.jsx)(qh,{children:(h?.protectedPaths??[]).map(e=>(0,F.jsxs)(Jh,{children:[(0,F.jsx)(Yh,{"aria-label":s(`Protected path`),onBlur:Bt,onChange:t=>Te({from:e,value:t.target.value}),onFocus:()=>Te({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Bt()):e.key===`Escape`&&Te(null)},spellCheck:!1,value:we?.from===e?we.value:e}),(0,F.jsx)(Xh,{onClick:()=>Vt(e),title:s(`Remove`),type:`button`,children:(0,F.jsx)(di,{size:10})})]},e))}),(0,F.jsxs)(Qh,{children:[(0,F.jsx)($h,{"aria-label":s(`New protected rule`),onChange:e=>ke(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),zt())},placeholder:`*.log`,spellCheck:!1,value:Oe}),(0,F.jsx)(xh,{onClick:zt,type:`button`,children:s(`Add the rule`)})]}),(0,F.jsxs)(Zh,{children:[(0,F.jsx)(xh,{onClick:()=>void Wt(),type:`button`,children:s(`Restore defaults`)}),(0,F.jsx)(xh,{onClick:()=>void Lt(),type:`button`,children:s(`Add folder…`)})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Confirmation delay`)}),(0,F.jsx)($,{children:s(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Ih,{max:30,min:2,onChange:e=>void G({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:h?.deleteDelaySeconds??5}),(0,F.jsxs)(vh,{children:[h?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`tags`),children:[(0,F.jsx)(zm,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(gh,{children:[(0,F.jsx)(yh,{"aria-label":s(`Color of the new tag`),onChange:e=>Ce(e.target.value),type:`color`,value:U}),(0,F.jsx)(Oh,{onChange:e=>Se(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),an())},placeholder:s(`New tag`),spellCheck:!1,value:xe})]}),(0,F.jsx)($,{children:s(`Add a tag here; it is available in every folder.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(xh,{disabled:H||xe.trim().length===0,onClick:()=>void an(),type:`button`,children:s(`Add`)})})]}),ye&&(0,F.jsx)(X,{children:(0,F.jsx)(_h,{children:ye})}),me.length===0&&(0,F.jsx)(X,{children:(0,F.jsx)($,{children:s(`No tags yet. Add one below; it is available in every folder.`)})}),me.map(e=>(0,F.jsx)(X,{children:he?.name===e.name?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(gh,{children:[(0,F.jsx)(yh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void on(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,F.jsx)(bh,{autoFocus:!0,disabled:H,onChange:t=>ge({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),cn()):e.key===`Escape`&&(e.preventDefault(),ge(null))},value:he.value})]}),(0,F.jsx)($,{children:s(`Press Enter to save, Escape to cancel.`)})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(xh,{disabled:H,onClick:()=>void cn(),type:`button`,children:s(`Save`)}),(0,F.jsx)(xh,{disabled:H,onClick:()=>ge(null),type:`button`,children:s(`Cancel`)})]})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(gh,{children:[(0,F.jsx)(yh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void on(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,F.jsx)(Q,{children:e.name})]}),(0,F.jsx)($,{children:a(s,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(xh,{disabled:H,onClick:()=>ge({name:e.name,value:e.name}),type:`button`,children:s(`Edit`)}),(0,F.jsxs)(wh,{disabled:H,onClick:()=>void sn(e.name),type:`button`,children:[(0,F.jsx)(li,{size:13}),s(`Remove`)]})]})]})},e.name))]})]}),(0,F.jsxs)(Hm,{ref:Mt(`files-view`),children:[(0,F.jsx)(zm,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Default view`)}),(0,F.jsx)($,{children:s(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsxs)(Ph,{children:[(0,F.jsx)(Fh,{$on:Dt.mode===`list`,onClick:()=>void G({defaultView:{...Dt,mode:`list`}}),type:`button`,children:s(`List`)}),(0,F.jsx)(Fh,{$on:Dt.mode===`grid`,onClick:()=>void G({defaultView:{...Dt,mode:`grid`}}),type:`button`,children:s(`Grid`)})]})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`List icon size`)}),(0,F.jsx)($,{children:s(`The icon in the list rows.`)})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Ih,{max:48,min:16,onChange:e=>void G({defaultView:{...Dt,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Dt.iconSize}),(0,F.jsxs)(vh,{children:[Dt.iconSize,`px`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Grid size`)}),(0,F.jsx)($,{children:s(`The height of a grid tile; the icon inside follows it.`)})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Ih,{max:260,min:100,onChange:e=>void G({defaultView:{...Dt,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Dt.gridSize}),(0,F.jsxs)(vh,{children:[Dt.gridSize,`px`]})]})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(gh,{children:[(0,F.jsx)(Q,{children:s(`Selection checkboxes`)}),(0,F.jsx)(Qp,{})]}),(0,F.jsx)($,{children:s(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,F.jsx)(Eh,{$on:h?.showCheckboxes??!0,disabled:!h,onClick:()=>void G({showCheckboxes:!(h?.showCheckboxes??!0)}),type:`button`,children:(0,F.jsx)(Dh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(gh,{children:[(0,F.jsx)(Q,{children:s(`Open with a single click`)}),(0,F.jsx)(Qp,{})]}),(0,F.jsx)($,{children:s(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,F.jsx)(Eh,{$on:h?.openOnSingleClick??!1,disabled:!h,onClick:()=>void G({openOnSingleClick:!(h?.openOnSingleClick??!1)}),type:`button`,children:(0,F.jsx)(Dh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(gh,{children:[(0,F.jsx)(Q,{children:s(`Confirm before deleting`)}),(0,F.jsx)(Qp,{})]}),(0,F.jsx)($,{children:s(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,F.jsx)(Eh,{$on:h?.confirmDelete??!1,disabled:!h,onClick:()=>void G({confirmDelete:!(h?.confirmDelete??!1)}),type:`button`,children:(0,F.jsx)(Dh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(gh,{children:[(0,F.jsx)(Q,{children:s(`Play audio in video previews`)}),(0,F.jsx)(Qp,{})]}),(0,F.jsx)($,{children:s(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,F.jsx)(Eh,{$on:h?.previewVideoAudio??!1,disabled:!h,onClick:()=>void G({previewVideoAudio:!(h?.previewVideoAudio??!1)}),type:`button`,children:(0,F.jsx)(Dh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(gh,{children:[(0,F.jsx)(Q,{children:s(`Autoplay video previews`)}),(0,F.jsx)(Qp,{})]}),(0,F.jsx)($,{children:s(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,F.jsx)(Eh,{$on:h?.previewVideoAutoplay??!1,disabled:!h,onClick:()=>void G({previewVideoAutoplay:!(h?.previewVideoAutoplay??!1)}),type:`button`,children:(0,F.jsx)(Dh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsxs)(gh,{children:[(0,F.jsx)(Q,{children:s(`Preview panel under the list`)}),(0,F.jsx)(Qp,{})]}),(0,F.jsx)($,{children:s(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,F.jsx)(Eh,{$on:Dt.showImages??!0,onClick:()=>void G({defaultView:{...Dt,showImages:!(Dt.showImages??!0)}}),type:`button`,children:(0,F.jsx)(Dh,{})})]}),(0,F.jsx)(X,{children:(0,F.jsxs)(Z,{children:[(0,F.jsxs)(gh,{children:[(0,F.jsx)(Q,{children:s(`Columns`)}),(0,F.jsx)(Qp,{})]}),(0,F.jsx)($,{children:s(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,F.jsx)(X,{children:(0,F.jsxs)(ig,{children:[vc.map(e=>(0,F.jsxs)(ag,{children:[(0,F.jsx)(`input`,{checked:(Dt.columns??[]).includes(e.id),onChange:()=>void ln(e.id),type:`checkbox`}),(0,F.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,F.jsxs)(ag,{children:[(0,F.jsx)(`input`,{checked:(Dt.columns??[]).includes(`linkTarget`),onChange:()=>void ln(`linkTarget`),type:`checkbox`}),(0,F.jsx)(`span`,{children:s(`Link target after the name`)})]})]})})]}),(0,F.jsxs)(dg,{children:[s(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,F.jsx)(Qp,{}),` `,s(`Anything marked as global always applies to every folder.`)]})]}),(0,F.jsxs)(Hm,{ref:Mt(`shortcuts`),children:[(0,F.jsx)(zm,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,F.jsxs)(Wm,{children:[vm.map(({id:e,label:t,note:n})=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(t)}),(0,F.jsx)($,{children:s(n)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(og,{$listening:de===e,onClick:()=>fe(e),type:`button`,children:de===e?s(`Press a key…`):Ut(mn[e])})})]},e)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Reset`)}),(0,F.jsx)($,{children:s(`Back to the default combination for every action.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(sg,{onClick:()=>void G({shortcuts:{...Rt}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`memory`),children:[(0,F.jsx)(zm,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(dh,{children:[(0,F.jsxs)(fh,{children:[(0,F.jsx)(Q,{children:s(`Process memory`)}),(0,F.jsx)(vh,{children:k?`${d(k.private)} · ${uh(k.private,k.available)}`:`—`})]}),(0,F.jsx)(ph,{children:(0,F.jsx)(mh,{$ratio:k?k.private/Math.max(k.available,1):0,$tone:t(k?k.private/Math.max(k.available,1):0)})}),(0,F.jsx)($,{children:k?s(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:d(k.available),resident:d(k.workingSet)}):s(`Reading the current usage…`)})]}),(0,F.jsxs)(dh,{children:[(0,F.jsxs)(fh,{children:[(0,F.jsx)(Q,{children:s(`Managed heap`)}),(0,F.jsx)(vh,{children:k?`${d(k.managed)} · ${uh(k.managed,k.private)}`:`—`})]}),(0,F.jsx)(ph,{children:(0,F.jsx)(mh,{$ratio:k?k.managed/Math.max(k.private,1):0,$tone:`var(--accent-secondary)`})}),(0,F.jsx)($,{children:s(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,F.jsxs)(dh,{children:[(0,F.jsxs)(fh,{children:[(0,F.jsx)(Q,{children:s(`Native and runtime`)}),(0,F.jsx)(vh,{children:k?`${d(Math.max(0,k.private-k.managed))} · ${uh(Math.max(0,k.private-k.managed),k.private)}`:`—`})]}),(0,F.jsx)(ph,{children:(0,F.jsx)(mh,{$ratio:k?Math.max(0,k.private-k.managed)/Math.max(k.private,1):0,$tone:`var(--accent-primary)`})}),(0,F.jsx)($,{children:s(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Free memory`)}),(0,F.jsx)($,{children:s(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(sg,{onClick:()=>void ct().then(A),type:`button`,children:s(`Trim now`)})})]})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`overview`),children:[(0,F.jsx)(zm,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,F.jsx)(Wm,{children:(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Recent items`)}),(0,F.jsx)($,{children:s(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(Oh,{max:50,min:0,onChange:e=>void hn(Number(e.target.value)),type:`number`,value:h?.recentLimit??10})})]})})]}),(0,F.jsxs)(Hm,{ref:Mt(`gallery`),children:[(0,F.jsx)(zm,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,F.jsxs)(Wm,{children:[(h?.galleryRoots??[]).map(e=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:_(e)}),(0,F.jsx)($,{children:e})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(cg,{onClick:()=>void bn((h?.galleryRoots??[]).filter(t=>t!==e)),title:s(`Stop scanning this folder`),type:`button`,children:(0,F.jsx)(di,{size:12})})})]},e)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Scan folders`)}),(0,F.jsx)($,{children:(h?.galleryRoots??[]).length===0?s(`Nothing added yet, so the gallery reads the Pictures folder.`):s(`Only these folders are scanned, three levels deep.`)})]}),(0,F.jsx)(hh,{children:(0,F.jsx)(sg,{onClick:()=>void xn(),type:`button`,children:s(`Choose folder…`)})})]})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`icons`),children:[(0,F.jsx)(zm,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Use system file icons`)}),(0,F.jsx)($,{children:s(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,F.jsx)(Eh,{$on:h?.systemIcons??!1,disabled:!h,onClick:()=>void G({systemIcons:!h?.systemIcons}),type:`button`,children:(0,F.jsx)(Dh,{})})]}),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Use custom folder icons`)}),(0,F.jsx)($,{children:s(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,F.jsx)(Eh,{$on:h?.customFolderIcons??!1,disabled:!h,onClick:()=>void G({customFolderIcons:!h?.customFolderIcons}),type:`button`,children:(0,F.jsx)(Dh,{})})]})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`extension-icons`),children:[(0,F.jsx)(zm,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,F.jsxs)(Wm,{children:[Object.entries(h?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:e}),(0,F.jsx)($,{children:Mm(s,t)})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Nm,{source:t}),(0,F.jsx)(cg,{onClick:()=>void pn(e,null),title:s(`Remove this rule`),type:`button`,children:(0,F.jsx)(di,{size:12})})]})]},e)),(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Add a rule`)}),(0,F.jsx)($,{children:s(`Extension and the icon to draw for it.`)})]}),(0,F.jsxs)(hh,{children:[(0,F.jsx)(Oh,{onChange:e=>x(e.target.value),placeholder:`.psd`,spellCheck:!1,value:b}),(0,F.jsxs)(Nh,{children:[(0,F.jsx)(cg,{onClick:()=>E(e=>!e),title:s(`Choose the icon`),type:`button`,children:(0,F.jsx)(Nm,{source:te})}),T&&(0,F.jsx)(ed,{allowDefault:!1,onClose:()=>E(!1),onPick:e=>{C(e??`file`),E(!1)},value:te})]}),(0,F.jsx)(cg,{onClick:()=>void Sn(),title:s(`Add the rule`),type:`button`,children:(0,F.jsx)($r,{size:13})})]})]})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`folder-icons`),children:[(0,F.jsx)(zm,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Give a folder its own icon`)}),(0,F.jsx)($,{children:s(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,F.jsxs)(hh,{children:[v&&(0,F.jsx)(Pm,{src:v.icon}),(0,F.jsx)(sg,{disabled:ne,onClick:()=>void Cn(),type:`button`,children:s(ne?`Choosing…`:`Choose folder and icon…`)})]})]}),v&&(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:_(v.folder)}),(0,F.jsx)($,{children:v.folder})]}),(0,F.jsx)(hh,{children:(0,F.jsxs)(ug,{children:[(0,F.jsx)(ui,{size:11}),` `,s(`Saved`)]})})]})]})]}),(0,F.jsxs)(Hm,{ref:Mt(`folder-index`),children:[(0,F.jsx)(zm,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(Z,{children:[(0,F.jsx)(Q,{children:s(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,F.jsx)($,{children:s(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,F.jsx)(Eh,{$on:h?.writeDirectoryIndex??!0,disabled:!h,onClick:()=>void G({writeDirectoryIndex:!h?.writeDirectoryIndex}),type:`button`,children:(0,F.jsx)(Dh,{})})]}),(0,F.jsxs)(Gm,{children:[(0,F.jsxs)(Km,{children:[(0,F.jsx)(Q,{children:s(`Directory index blacklist`)}),(0,F.jsx)($,{children:s(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,F.jsx)(qh,{children:(h?.directoryIndexBlacklist??[]).map(e=>(0,F.jsxs)(Jh,{children:[(0,F.jsx)(Yh,{"aria-label":s(`Directory index blacklist rule`),onBlur:Gt,onChange:t=>De({from:e,value:t.target.value}),onFocus:()=>De({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Gt()):e.key===`Escape`&&De(null)},spellCheck:!1,value:Ee?.from===e?Ee.value:e}),(0,F.jsx)(Xh,{onClick:()=>Jt(e),title:s(`Remove`),type:`button`,children:(0,F.jsx)(di,{size:10})})]},e))}),(0,F.jsxs)(Qh,{children:[(0,F.jsx)($h,{"aria-label":s(`Directory index blacklist rule`),onChange:e=>je(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Kt())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Ae}),(0,F.jsx)(xh,{onClick:Kt,type:`button`,children:s(`Add the rule`)})]}),(0,F.jsxs)(Zh,{children:[(0,F.jsx)(xh,{onClick:Yt,type:`button`,children:s(`Restore defaults`)}),(0,F.jsx)(xh,{onClick:()=>void qt(),type:`button`,children:s(`Add folder…`)})]})]})]}),!(h?.writeDirectoryIndex??!0)&&(0,F.jsx)(fg,{children:jm(s,e?.platform)})]}),(0,F.jsxs)(Hm,{ref:Mt(`indexing`),children:[(0,F.jsx)(zm,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,F.jsx)(Am,{})]}),(0,F.jsxs)(Hm,{ref:Mt(`files`),children:[(0,F.jsx)(zm,{note:`What the listings include.`,title:`Files`}),(0,F.jsxs)(Wm,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Hidden items`)}),(0,F.jsx)(vh,{children:km(s,u?.showHidden)})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Protected operating system files`)}),(0,F.jsx)(vh,{children:km(s,u?.showSystem)})]})]}),(0,F.jsx)(dg,{children:s(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,F.jsxs)(ah,{"aria-label":s(`Settings sections`),children:[(0,F.jsx)(oh,{children:s(`Sections`)}),(0,F.jsx)(sh,{children:Tm.map(({id:e,label:t})=>(0,F.jsx)(ch,{$active:rt===e,onClick:()=>Nt(e),type:`button`,children:(0,F.jsx)(`span`,{children:s(t)})},e))}),(0,F.jsx)(lh,{children:s(`Changes are saved as you make them.`)})]})]})}function km(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Am(){let e=R(),[t,n]=(0,D.useState)(null);return(0,D.useEffect)(()=>{let e=!0,t=()=>We().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,F.jsx)(fg,{children:e(`No indexing tasks are running.`)}):(0,F.jsxs)(Wm,{children:[(0,F.jsx)(X,{children:(0,F.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,F.jsx)(X,{children:(0,F.jsx)(vh,{title:e,children:e})},e))]}):(0,F.jsx)(fg,{children:e(`Index task information is unavailable.`)})}function jm(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function Mm(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function Nm({source:e}){let t=on(e.startsWith(`file:`)?e.slice(5):null);return(0,F.jsx)(lg,{children:t?(0,F.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,F.jsx)(As,{name:e,size:16})})}function Pm({src:e}){let t=on(e);return(0,F.jsx)(lg,{children:t&&(0,F.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Fm({path:e,active:t,onSelect:n,onRemove:r}){let i=R(),a=w(e),o=dn(a?null:e),s=a?e:o,c=cu(e.split(/[?#]/)[0]);return(0,F.jsxs)(Hh,{children:[(0,F.jsxs)(Vh,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,F.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,F.jsx)(`img`,{alt:``,src:s})),c&&(0,F.jsx)(Wh,{children:(0,F.jsx)(gi,{size:11})})]}),(0,F.jsx)(Uh,{onClick:r,title:i(`Remove`),type:`button`,children:(0,F.jsx)(di,{size:9})})]})}function Im({value:e,options:t,onChange:n,disabled:r}){let i=R(),[a,o]=(0,D.useState)(null),s=(0,D.useRef)(null);return(0,D.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(kh,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,F.jsx)(`span`,{children:Lm(i,e)}),(0,F.jsx)(Ah,{children:(0,F.jsx)(ni,{size:11})})]}),a&&(0,ya.createPortal)((0,F.jsx)(jh,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,F.jsxs)(Mh,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,F.jsx)(`span`,{children:Lm(i,t)}),t===e&&(0,F.jsx)(ui,{size:11})]},t))}),document.body)]})}function Lm(e,t){return t===Cm?e(`System default`):wm[t]??t}function Rm({colors:e,current:t,onApply:n}){let r=R();if(e.length===0)return null;let[i,...a]=e;return(0,F.jsxs)(nh,{children:[(0,F.jsxs)(ih,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,F.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,F.jsx)(rh,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,F.jsx)(ui,{size:9})},e))]})}function zm({title:e,note:t,global:n=!1}){let r=R();return(0,F.jsxs)(Um,{children:[(0,F.jsxs)(`h2`,{children:[r(e),n&&(0,F.jsx)(Qp,{})]}),(0,F.jsx)(`p`,{children:r(t)})]})}var Bm=i.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Vm=i.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Hm=i.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Um=i.header`
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
`,Wm=i.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Gm=i.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Km=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,qm=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Jm=i.button`
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
`,Ym=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Xm=i.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Zm=i.button`
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
`,Qm=i.button`
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
`,$m=i.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,eh=i.input`
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
`,th=i.span`
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
`,nh=i.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,rh=i.button`
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
`,ih=i.button`
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
`,ah=i.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,oh=i.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,sh=i.div`
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
`,ch=i.button`
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
`,lh=i.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function uh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var dh=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,fh=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,ph=i.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,mh=i.div`
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
`,hh=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=i.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,gh=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=i.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,_h=i.span`
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
`,vh=i.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,yh=i.input`
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
`,bh=i.input`
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
`,xh=i.button`
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
`,Sh=i.input`
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
`,Ch=i.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,wh=i.button`
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
`,Th=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Eh=i.button`
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
`,Dh=i.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Oh=i.input`
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
`,kh=i.button`
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
`,Ah=i.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,jh=i.div`
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
`,Mh=i.button`
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
`,Nh=i.span`
    position: relative;
    display: inline-flex;
`,Ph=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Fh=i.button`
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
`,Ih=i.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Lh=i.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Rh=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,zh=i.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Bh=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Vh=i.button`
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
`,Hh=i.div`
    position: relative;
    width: 102px;
    height: 58px;
`,Uh=i.button`
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
`,Wh=i.span`
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
`,Gh=i.button`
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
`,Kh=i.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,qh=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Jh=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Yh=i.input`
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
`,Xh=i.button`
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
`,Zh=i.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,Qh=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,$h=i.input`
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
`,eg=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,tg=i.button`
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
`,ng=i.input`
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
`,rg=i.div`
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
`,ig=i.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,ag=i.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,og=i.button`
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
`,sg=i.button`
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
`,cg=i.button`
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
`,lg=i.span`
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
`,ug=i.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,dg=i.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,fg=i.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,pg=150,mg=2500,hg=3,gg=600;function _g({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:o,onSearchMatches:s,onPick:c,onSelectionChange:l,onAddToTray:u,onAddFavorite:f,showDetails:p=!0,videoAudio:m=!1,videoAutoplay:h=!1}){let g=R(),_=pc(`gallery`),[y,ee]=(0,D.useState)([]),[b,x]=(0,D.useState)(0),[te,S]=(0,D.useState)(!0),[C,w]=(0,D.useState)(null),[T,E]=(0,D.useState)(!1),[ne,O]=(0,D.useState)([]),[k,A]=(0,D.useState)(()=>{let e=Nn(`yafm.preview.width`,320);return e>=220?e:320}),re=(0,D.useRef)([]),j=(0,D.useRef)(0),ie=(0,D.useRef)(!1),ae=(0,D.useRef)(!0),M=(0,D.useRef)(0),N=(0,D.useRef)(null),oe=(0,D.useRef)(0),se=(0,D.useCallback)(async e=>{let t=++M.current;S(!0),ae.current=!0,w(null);try{let n=await Ie(0,pg,e);if(t!==M.current)return;re.current=n.entries,j.current=n.total,ee(n.entries),x(n.total)}catch(e){t===M.current&&w(e instanceof Error?e.message:String(e))}finally{t===M.current&&(ae.current=!1,S(!1))}},[]);(0,D.useEffect)(()=>{se(!1)},[se]);let P=(0,D.useCallback)(async()=>{if(ae.current||ie.current||re.current.length>=j.current)return;let e=M.current;ie.current=!0;try{let t=re.current,n=j.current;for(let r=0;r<hg&&t.length<n;r++){let r=await Ie(t.length,pg,!1);if(e!==M.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<pg)break}if(e!==M.current)return;re.current=t,j.current=n,(0,D.startTransition)(()=>{ee(t),x(n)})}catch{}finally{ie.current=!1}},[]),ce=(0,D.useCallback)(e=>{oe.current||=window.requestAnimationFrame(()=>{oe.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<mg&&P()})},[P]);(0,D.useEffect)(()=>{let e=N.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&P()},{root:e.parentElement,rootMargin:`${mg}px 0px`});return t.observe(e),()=>t.disconnect()},[P]),(0,D.useEffect)(()=>{if(y.length>=b)return;let e=window.setTimeout(()=>{let e=N.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<mg&&P()},200);return()=>window.clearTimeout(e)},[y.length,b,P]);let le=(0,D.useMemo)(()=>({path:``,parent:null,entries:y.map(vg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[y]),I=(0,D.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),L=(0,D.useCallback)(e=>{c?c(e):ye(e)},[c]),z=(0,D.useCallback)(e=>{let t=yg(e.modified);return{id:t,label:t}},[]),ue=()=>{E(!0),se(!0).finally(()=>E(!1))},de=y.length<b,fe=(0,D.useMemo)(()=>!o?.open||o.query.trim().length===0?[]:y.filter(e=>Sn(e.name,o)||Sn(e.path,o)),[y,o?.open,o?.query,o?.matchCase,o?.regex]),pe=(0,D.useMemo)(()=>o?.open?{query:o.query,matchCase:o.matchCase,regex:o.regex,mode:o.mode,currentPath:fe[Math.min(o.index,Math.max(0,fe.length-1))]?.path??null}:mn,[o?.open,o?.query,o?.matchCase,o?.regex,o?.mode,o?.index,fe]);(0,D.useEffect)(()=>{s?.(fe.length)},[fe.length,s]);let B=(0,D.useCallback)(e=>{O(e),l?.(e)},[l]),me=e=>{A(e),Pn(`yafm.preview.width`,e)},V=ne.length>0?y.find(e=>e.path===ne[0])??null:null,he=V?.name.includes(`.`)?V.name.slice(V.name.lastIndexOf(`.`)+1).toUpperCase():`—`,ge=V&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(V.name)?g(`Video`):g(`Picture`),H=V?V.path.slice(0,Math.max(V.path.lastIndexOf(`\\`),V.path.lastIndexOf(`/`))):``,_e=V?{name:V.name,path:V.path,isDirectory:!1,size:V.size,modified:V.modified,fields:[{label:g(`Type`),value:ge},{label:g(`Extension`),value:he},{label:g(`Location`),value:H},{label:g(`Full path`),value:V.path},{label:g(`Size`),value:d(V.size)},{label:g(`Modified`),value:v(V.modified)},{label:g(`Created`),value:`—`}]}:null;return(0,F.jsxs)(bg,{children:[(0,F.jsxs)(Cg,{children:[(0,F.jsxs)(Tg,{children:[(0,F.jsx)(`span`,{children:g(`Gallery`)}),(0,F.jsx)(Eg,{children:te?g(`scanning…`):g(`{shown} of {total} pictures`,{shown:y.length,total:b})})]}),(0,F.jsxs)(wg,{children:[(0,F.jsx)(Dg,{onClick:ue,title:g(`Scan the folders again`),type:`button`,children:(0,F.jsx)(Og,{$spinning:T,children:(0,F.jsx)(Qr,{size:14})})}),_.available&&(0,F.jsx)(Dg,{onClick:e=>_.open(e.clientX,e.clientY),title:g(`Selection menu`),type:`button`,children:(0,F.jsx)($i,{size:14})})]})]}),C&&(0,F.jsx)(Ag,{children:C}),!C&&!te&&b===0&&(0,F.jsx)(Ag,{children:g(`No pictures found.`)}),!C&&(te||b>0)&&(0,F.jsxs)(xg,{children:[(0,F.jsx)(Sg,{children:(0,F.jsx)(xc,{confirmDelete:n,find:pe,listing:te&&y.length===0?null:le,loading:te,error:null,view:I,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:B,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:L,onOpenFile:L,onRefresh:ue,onAddToTray:u,onAddFavorite:f,groupOf:z,onGridScroll:ce,gridFooter:(0,F.jsx)(kg,{$space:de?gg:1,ref:N}),allowBackgroundMenu:!1})}),p&&(0,F.jsx)(Fo,{emptyNote:g(`Nothing selected.`),info:_e,onWidth:me,selectionNote:ne.length>1?a(g,ne.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:m,videoAutoplay:h,width:k})]})]})}function vg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function yg(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(ee(),{weekday:`long`}):t.toLocaleDateString(ee(),{year:`numeric`,month:`long`,day:`numeric`})}var bg=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,xg=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Sg=i.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,Cg=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,wg=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Tg=i.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Eg=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Dg=i.button`
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
`,Og=i.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,kg=i.div`
    height: ${({$space:e})=>e}px;
`,Ag=i.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function jg({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:f=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,D.useState)([]),v=R(),[y,ee]=(0,D.useState)(null),b=An();(0,D.useEffect)(()=>{Ke().then(e=>{ee(e),g(us(e).filter(e=>e.pinned))},()=>{ee(null),g([])})},[c]);let x=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Lg(e.path,t));return{name:y?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??y?.placeIcons?.[t]??null}}),te=o===`files`;return(0,F.jsxs)(Rg,{children:[(0,F.jsxs)(zg,{children:[!f.includes(`home`)&&(0,F.jsxs)(Wg,{$active:o===`home`,onClick:e=>m(`home`,Vt(e)),title:v(`Overview`),type:`button`,children:[(0,F.jsx)(Di,{}),(0,F.jsx)(Kg,{children:v(`Overview`)})]}),!f.includes(`recycle`)&&(0,F.jsxs)(Wg,{$active:o===`recycle`,onClick:e=>m(`recycle`,Vt(e)),title:v(`Recycle Bin`),type:`button`,children:[(0,F.jsx)(li,{}),(0,F.jsx)(Kg,{children:v(`Recycle Bin`)})]}),!f.includes(`gallery`)&&(0,F.jsxs)(Wg,{$active:o===`gallery`,onClick:e=>m(`gallery`,Vt(e)),title:v(`Gallery`),type:`button`,children:[(0,F.jsx)(hi,{}),(0,F.jsx)(Kg,{children:v(`Gallery`)})]})]}),h.map(e=>(0,F.jsxs)(Vg,{children:[(0,F.jsxs)(Wg,{as:`div`,$active:!1,children:[(0,F.jsx)(Gg,{children:(0,F.jsx)(fs,{panel:e,size:16})}),(0,F.jsx)(Kg,{children:v(e.title)})]}),(0,F.jsx)(Hg,{children:(0,F.jsxs)(Ug,{children:[e.kind===`quick`&&x(e).map(e=>(0,F.jsxs)(Wg,{$active:te&&Lg(a,e.path),onClick:t=>p(e.path,Vt(t)),title:e.path,type:`button`,children:[(0,F.jsx)(ps,{place:e}),(0,F.jsx)(Kg,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let t=jn(b,e.path);return(0,F.jsxs)(Wg,{$active:te&&Lg(a,e.path),onClick:t=>e.isDirectory?p(e.path,Vt(t)):void ye(e.path),title:e.path,type:`button`,children:[t&&b.useIcons?(0,F.jsx)(ps,{place:t}):(0,F.jsx)(js,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,F.jsx)(Kg,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,F.jsx)(Pg,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,F.jsxs)(Wg,{$active:te&&Lg(a,e.name),onClick:t=>p(e.name,Vt(t)),title:e.name,type:`button`,children:[(0,F.jsx)(Yr,{}),(0,F.jsxs)(Kg,{children:[u(e),(0,F.jsxs)(qg,{children:[d(e.freeSpace),` free`]}),(0,F.jsx)(Jg,{children:(0,F.jsx)(Yg,{$used:n,$tone:t(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,F.jsx)(Fg,{onNavigate:p,path:e.path||s})]})})]},e.id)),!f.includes(`settings`)&&(0,F.jsx)(Bg,{children:(0,F.jsxs)(Wg,{$active:o===`settings`,onClick:e=>m(`settings`,Vt(e)),title:v(`Settings`),type:`button`,children:[(0,F.jsx)(ri,{}),(0,F.jsx)(Kg,{children:v(`Settings`)})]})})]})}var Mg=10,Ng=40;function Pg({historyVersion:e=0,onNavigate:t}){let n=R(),[r,i]=(0,D.useState)(null),o=An();return(0,D.useEffect)(()=>{Re().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=jn(o,e.path);return(0,F.jsxs)(Wg,{$active:!1,onClick:n=>t(e.path,Vt(n)),title:a(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&o.useIcons?(0,F.jsx)(ps,{place:r}):(0,F.jsx)(js,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,F.jsx)(Kg,{children:r?.name||e.name})]},e.path)})}function Fg({path:e,onNavigate:t}){let[n,r]=(0,D.useState)(null);(0,D.useEffect)(()=>{e&&(r(null),be(e,!1).then(r,()=>r(null)))},[e]),(0,D.useEffect)(()=>{if(e&&P.available)return P.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&Lg(n.data.path,e)&&be(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,Mg),o=i.filter(e=>!e.isDirectory).slice(0,Ng);return(0,F.jsxs)(F.Fragment,{children:[a.map(e=>(0,F.jsx)(Ig,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,F.jsx)(Ig,{entry:e,onNavigate:t},e.fullPath))]})}function Ig({entry:e,onNavigate:t}){let n=An(),r=jn(n,e.fullPath);return(0,F.jsxs)(Wg,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Vt(n)):void ye(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,F.jsx)(ps,{place:r}):(0,F.jsx)(js,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,F.jsx)(Kg,{children:r?.name||e.name})]})}function Lg(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var Rg=i.aside`
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

    &:not(:hover) ${()=>qg},
    &:not(:hover) ${()=>Jg} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,zg=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Bg=i(zg)`
    margin-top: auto;
`,Vg=i.div`
    display: flex;
    flex-direction: column;
`,Hg=i.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Rg}:hover ${Vg}:hover > & {
        grid-template-rows: 1fr;
    }
`,Ug=i.div`
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
`,Wg=i.button`
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
`,Gg=i.span`
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
`,Kg=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,qg=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Jg=i.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Yg=i.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,Xg=i.span`
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
`;function Zg({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=R(),o=(0,D.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,D.useEffect)(()=>{if(!n)return;let e=e=>{o.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,F.jsxs)($g,{ref:o,children:[(0,F.jsxs)(e_,{$active:n,onClick:()=>r(!n),title:s>0?a(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,F.jsx)(ci,{size:13}),c>0&&(0,F.jsx)(Xg,{children:c>9?`9+`:c})]}),n&&(0,F.jsxs)(t_,{children:[(0,F.jsxs)(n_,{children:[(0,F.jsx)(r_,{children:i(`Status center`)}),(0,F.jsxs)(i_,{children:[(0,F.jsx)(a_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,F.jsx)(o_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,F.jsx)(di,{size:10})})]})]}),e.length===0?(0,F.jsx)(c_,{children:i(`No operations yet.`)}):(0,F.jsx)(s_,{children:e.map(e=>(0,F.jsx)(Qg,{task:e},e.id))})]})]})}function Qg({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,F.jsxs)(l_,{children:[(0,F.jsxs)(u_,{children:[(0,F.jsx)(d_,{$state:e.state,children:e.state===`done`?(0,F.jsx)(ui,{size:10}):e.state===`failed`?(0,F.jsx)(di,{size:10}):(0,F.jsx)(f_,{})}),(0,F.jsx)(p_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,F.jsxs)(m_,{children:[d(e.bytesDone),` / `,d(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,F.jsxs)(m_,{children:[e.done,` / `,e.total]})]}),i&&(0,F.jsx)(h_,{children:(0,F.jsx)(g_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,F.jsx)(__,{children:e.error})]})}var $g=i.div`
    position: relative;
    display: flex;
`,e_=i.button`
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
`,t_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${ba}
    ${Na}
`,n_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,r_=i.span`
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
`,i_=i.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,a_=i.button`
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
`,o_=i.button`
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
`,s_=i.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,c_=i.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,l_=i.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;
    ${Pa}

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,u_=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,d_=i.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,f_=i.span`
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
`,p_=i.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,m_=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,h_=i.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,g_=i.div`
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
`,__=i.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function v_(){return P.available?(await P.request(`fs.history.list`)).entries:[]}async function y_(e){return P.available?(await P.request(`fs.history.undoTo`,{id:e})).ok:!1}function b_(){let e=R(),[t,n]=(0,D.useState)(!1),[r,i]=(0,D.useState)([]),[a,o]=(0,D.useState)(!1),s=(0,D.useRef)(null),c=()=>void v_().then(i,()=>i([]));(0,D.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await y_(e),c()}finally{o(!1)}};return(0,F.jsxs)(C_,{ref:s,children:[(0,F.jsx)(w_,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,F.jsx)(si,{size:14})}),t&&(0,F.jsxs)(T_,{children:[(0,F.jsxs)(E_,{children:[(0,F.jsx)(D_,{children:e(`History`)}),(0,F.jsx)(O_,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,F.jsx)(di,{size:10})})]}),r.length===0?(0,F.jsx)(L_,{children:e(`No operations yet.`)}):(0,F.jsx)(k_,{children:r.map(t=>(0,F.jsxs)(A_,{children:[(0,F.jsxs)(j_,{children:[(0,F.jsxs)(M_,{children:[(0,F.jsx)(S_,{label:t.label}),x_(e,t.label)]}),(0,F.jsx)(N_,{children:b(t.at)})]}),t.paths.length>0&&(0,F.jsxs)(P_,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,F.jsx)(F_,{children:(0,F.jsx)(I_,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function x_(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function S_({label:e}){return e.startsWith(`Delete`)?(0,F.jsx)(li,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,F.jsx)(Ki,{size:13}):e.startsWith(`Rename`)?(0,F.jsx)(Oi,{size:13}):e.startsWith(`Compress`)?(0,F.jsx)(vi,{size:13}):e.startsWith(`New`)?(0,F.jsx)($r,{size:13}):(0,F.jsx)(ti,{size:13})}var C_=i.div`
    position: relative;
    display: flex;
`,w_=i.button`
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
`,T_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${ba}
    ${Na}
`,E_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,D_=i.span`
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
`,O_=i.button`
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
`,k_=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,A_=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,j_=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,M_=i.span`
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
`,N_=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,P_=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,F_=i.div`
    display: flex;
    justify-content: flex-end;
`,I_=i.button`
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
`,L_=i.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function R_({currentFolder:e}){let t=R(),[n,r]=(0,D.useState)(!1),[i,a]=(0,D.useState)(null),[o,s]=(0,D.useState)(!1),c=(0,D.useRef)(null);(0,D.useEffect)(()=>{if(!n)return;let e=()=>void id().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{c.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,i),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i)}},[n]),(0,D.useEffect)(()=>{let e=()=>void id().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let l=async e=>{s(!0);try{a(await e())}finally{s(!1)}},u=i?.shares.some(t=>t.path.replace(/[\\/]+$/,``).toLowerCase()===e.replace(/[\\/]+$/,``).toLowerCase())??!1;return(0,F.jsxs)(z_,{ref:c,children:[(0,F.jsxs)(B_,{$active:n,onClick:()=>r(e=>!e),title:t(`Share folders`),type:`button`,children:[(0,F.jsx)(Hi,{size:15}),i&&i.shares.length>0&&(0,F.jsx)(Xg,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,F.jsxs)(V_,{children:[(0,F.jsxs)(H_,{children:[(0,F.jsx)(U_,{children:t(`Share`)}),(0,F.jsx)(W_,{onClick:()=>r(!1),title:t(`Close`),type:`button`,children:(0,F.jsx)(di,{size:10})})]}),(0,F.jsxs)(G_,{children:[(0,F.jsxs)(K_,{children:[(0,F.jsx)(fi,{size:15}),(0,F.jsxs)(`span`,{children:[(0,F.jsx)(`strong`,{children:i?.deviceName||t(`This device`)}),(0,F.jsx)(q_,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,F.jsx)(J_,{children:t(`No folders are shared yet.`)}),i?.shares.map(e=>(0,F.jsxs)(Y_,{children:[(0,F.jsxs)(X_,{children:[(0,F.jsx)(Z_,{title:e.path,children:e.name}),(0,F.jsx)($_,{disabled:o,onClick:()=>void l(()=>od(e.id)),title:t(`Stop sharing`),type:`button`,children:(0,F.jsx)(di,{size:10})})]}),(0,F.jsx)(Q_,{title:e.path,children:e.path}),(0,F.jsxs)(ev,{children:[(0,F.jsxs)(tv,{$active:e.mode===`client`,onClick:()=>void l(()=>sd(e.id,`client`)),title:t(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,F.jsx)(fi,{size:11}),t(`App`)]}),(0,F.jsxs)(tv,{$active:e.mode===`web`,onClick:()=>void l(()=>sd(e.id,`web`)),title:t(`Any device with a browser can open this folder.`),type:`button`,children:[(0,F.jsx)(Wi,{size:11}),t(`Web`)]})]})]},e.id)),(0,F.jsxs)(nv,{disabled:o||e.length===0||u,onClick:()=>void l(()=>ad(e,`client`)),title:u?t(`This folder is already shared.`):e,type:`button`,children:[(0,F.jsx)($r,{size:12}),t(`Share this folder`)]}),i?.webRunning&&(0,F.jsxs)(rv,{children:[(0,F.jsxs)(iv,{children:[(0,F.jsx)(Wi,{size:12}),t(`Browser access`)]}),i.urls.map(e=>(0,F.jsx)(av,{onClick:()=>void ot(e),type:`button`,children:e},e)),(0,F.jsx)(q_,{children:t(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var z_=i.div`
    position: relative;
    display: flex;
`,B_=i.button`
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
`,V_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${ba}
    ${Na}
`,H_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,U_=i.span`
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
`,W_=i.button`
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
`,G_=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,K_=i.div`
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
`,q_=i.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,J_=i.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,Y_=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,X_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Z_=i.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Q_=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$_=i.button`
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
`,ev=i.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,tv=i.button`
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
`,nv=i.button`
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
`,rv=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,iv=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,av=i.button`
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
`;function ov({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=R(),[s,c]=(0,D.useState)(!1),l=(0,D.useRef)(null);(0,D.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,D.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=vc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,F.jsxs)(sv,{ref:l,children:[(0,F.jsx)(cv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,F.jsx)(oi,{size:14}):(0,F.jsx)(ai,{size:14})}),s&&(0,F.jsxs)(lv,{children:[(0,F.jsx)(uv,{children:o(`View`)}),(0,F.jsxs)(dv,{children:[(0,F.jsxs)(fv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,F.jsx)(ai,{size:12}),` `,o(`List`)]}),(0,F.jsxs)(fv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,F.jsx)(oi,{size:12}),` `,o(`Grid`)]})]}),(0,F.jsx)(uv,{children:o(`List icon size`)}),(0,F.jsxs)(pv,{children:[(0,F.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,F.jsxs)(mv,{children:[e.iconSize,`px`]})]}),(0,F.jsx)(uv,{children:o(`Grid size`)}),(0,F.jsxs)(pv,{children:[(0,F.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,F.jsxs)(mv,{children:[e.gridSize,`px`]})]}),(0,F.jsxs)(uv,{children:[o(`Columns`),(0,F.jsx)(Qp,{})]}),vc.map(e=>(0,F.jsxs)(hv,{children:[(0,F.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,F.jsxs)(hv,{children:[(0,F.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,F.jsxs)(uv,{children:[o(`Preview panel`),(0,F.jsx)(Qp,{})]}),(0,F.jsxs)(hv,{children:[(0,F.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var sv=i.div`
    position: relative;
    display: flex;
    height: 100%;
`,cv=i.button`
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
`,lv=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${ba}
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
`,uv=i.div`
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
`,dv=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,fv=i.button`
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
`,pv=i.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,mv=i.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,hv=i.label`
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
`,gv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),_v=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),vv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),yv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,F.jsx)(`path`,{d:`M2 5h6`})}),bv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,F.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),xv=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,F.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,F.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Sv({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:ee,onToggleSplit:b,details:x,canDetails:te,onToggleDetails:S,shortcuts:C,currentFolder:w}){let T=R(),E=de(),ne=fe(),[O,k]=(0,D.useState)({left:!1,right:!1}),[A,re]=(0,D.useState)(null),[j,ie]=(0,D.useState)(null),ae=(0,D.useRef)(null),M=(0,D.useRef)(null),N=(0,D.useRef)(null),oe=(0,D.useCallback)(()=>{let e=M.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;k(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,D.useEffect)(()=>{oe();let e=M.current;if(!e)return;let t=new ResizeObserver(oe);return t.observe(e),()=>t.disconnect()},[oe,e.length]),(0,D.useEffect)(()=>()=>{ae.current&&window.clearTimeout(ae.current.timer)},[]),(0,D.useEffect)(()=>{N.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let se=e=>M.current?.scrollBy({left:e,behavior:`smooth`}),P=()=>{ae.current&&window.clearTimeout(ae.current.timer),ae.current=null,ie(null)};return(0,F.jsxs)(Ev,{children:[(0,F.jsx)(Dv,{children:(0,F.jsx)(fi,{size:19})}),(0,F.jsxs)(Ov,{children:[O.left&&(0,F.jsx)(Av,{onClick:()=>se(-180),title:T(`Scroll tabs left`),type:`button`,children:(0,F.jsx)(gv,{})}),(0,F.jsx)(kv,{onScroll:oe,onWheel:e=>{let t=M.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:M,children:e.map(e=>(0,F.jsxs)(jv,{$active:e.id===t,$dragging:A===e.id,$dropTarget:j===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Ps(t.dataTransfer)||!Cv(e)||(t.preventDefault(),ae.current?.id===e.id))return;P(),ie(e.id);let r=window.setTimeout(()=>{n(e.id),ae.current=null},500);ae.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ae.current?.id===e.id||j===e.id)&&P()},onDragEnd:()=>{re(null),P()},onDragOver:t=>{(A||Ps(t.dataTransfer)&&Cv(e))&&(t.preventDefault(),Ps(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>re(e.id),onDrop:t=>{if(t.preventDefault(),A)a(A,e.id);else if(Cv(e)&&Ps(t.dataTransfer)){let{paths:r,move:i}=Fs(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}re(null),P()},onClick:()=>n(e.id),ref:e.id===t?N:void 0,title:e.path||e.title,type:`button`,children:[(0,F.jsx)(wv,{tab:e}),(0,F.jsx)(Mv,{children:e.title}),e.partner&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Nv,{children:`|`}),(0,F.jsx)(Tv,{place:e.partner.place}),(0,F.jsx)(Mv,{children:e.partner.title})]}),(0,F.jsx)(Pv,{"data-shortcut":Ut(C.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:T(`Close tab`),children:(0,F.jsx)(vv,{})})]},e.id))}),O.right&&(0,F.jsx)(Av,{onClick:()=>se(180),title:T(`Scroll tabs right`),type:`button`,children:(0,F.jsx)(_v,{})}),(0,F.jsx)(Fv,{"data-shortcut":Ut(C.newTab),onClick:i,title:T(`New tab`),type:`button`,children:(0,F.jsx)($r,{size:13})})]}),(0,F.jsx)(Iv,{...ne}),(0,F.jsxs)(Lv,{children:[(0,F.jsx)(zv,{$active:y,"data-shortcut":Ut(C.splitView),disabled:!ee,onClick:b,title:T(y?`Close split view`:`Split view`),type:`button`,children:(0,F.jsx)(Zi,{size:15})}),(0,F.jsx)(zv,{$active:x,disabled:!te,onClick:S,title:T(x?`Hide details panel`:`Show details panel`),type:`button`,children:(0,F.jsx)(Qi,{size:15})}),(0,F.jsxs)(Rv,{$active:_,onClick:v,title:T(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,F.jsx)(Ui,{size:14}),g>0&&(0,F.jsx)(Xg,{children:g>9?`9+`:g})]}),(0,F.jsx)(b_,{}),(0,F.jsx)(R_,{currentFolder:w}),(0,F.jsx)(Zg,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,F.jsx)(ov,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,F.jsx)(Bv,{onClick:E.minimize,title:T(`Minimize`),type:`button`,children:(0,F.jsx)(yv,{})}),(0,F.jsx)(Bv,{onClick:E.toggleMaximize,title:E.maximized?T(`Restore`):T(`Maximize`),type:`button`,children:E.maximized?(0,F.jsx)(xv,{}):(0,F.jsx)(bv,{})}),(0,F.jsx)(Vv,{onClick:E.close,title:T(`Close`),type:`button`,children:(0,F.jsx)(vv,{})})]})]})}function Cv(e){return e.kind===`files`&&(!f(e.path)||ne(e.path))}function wv({tab:e}){switch(e.kind){case`home`:return(0,F.jsx)(Kr,{size:13});case`settings`:return(0,F.jsx)(ri,{size:13});case`recycle`:return(0,F.jsx)(li,{size:13});default:return e.archive?(0,F.jsx)(vi,{size:13}):(0,F.jsx)(Tv,{place:e.place})}}function Tv({place:e}){return e?(0,F.jsx)(ps,{place:e,size:13}):(0,F.jsx)(qr,{size:13})}var Ev=i.header`
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
`,Dv=i.span`
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
`,Ov=i.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,kv=i.div`
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
`,Av=i.button`
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
`,jv=i.button`
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
`,Mv=i.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Nv=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Pv=i.span`
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
`,Fv=i.button`
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
`,Iv=i.div`
    flex: 1;
    min-width: 28px;
`,Lv=i.div`
    display: flex;
    flex-shrink: 0;
`,Rv=i.button`
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
`,zv=i.button`
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
`,Bv=i.button`
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
`,Vv=i(Bv)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Hv(){let[e,t]=(0,D.useState)(null),n=(0,D.useRef)(null),r=(0,D.useRef)(void 0);return(0,D.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,ya.createPortal)((0,F.jsx)(Uv,{tooltip:e}),document.body):null}function Uv({tooltip:e}){let t=(0,D.useRef)(null),[n,r]=(0,D.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,D.useState)(()=>e.bottom+6);return(0,D.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,F.jsxs)(Wv,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,F.jsx)(Gv,{children:e.text}),e.shortcut&&(0,F.jsx)(Kv,{children:e.shortcut})]})}var Wv=i.div`
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
    ${Pa}
`,Gv=i.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Kv=i.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,qv={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function Jv({deviceName:e,code:t,onAccept:n,onReject:r}){let i=R(),a=(0,D.useRef)(null);return(0,D.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,ya.createPortal)((0,F.jsx)(Yv,{children:(0,F.jsxs)(Xv,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsxs)(Zv,{children:[(0,F.jsx)(Hi,{size:15}),i(`Pair for sharing`)]}),(0,F.jsx)(Qv,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,F.jsx)($v,{children:t}),(0,F.jsx)(ey,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,F.jsxs)(ty,{children:[(0,F.jsx)(ny,{onClick:r,type:`button`,children:i(`Reject`)}),(0,F.jsx)(ry,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var Yv=i.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Pa}
`,Xv=i.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${ka}
`,Zv=i.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Qv=i.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,$v=i.div`
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
`,ey=i.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,ty=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,ny=i.button`
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
`,ry=i(ny)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,iy=`yafm://`,ay={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},oy=0,sy=new Set;function cy(e){sy.add(e),P.send({type:`app.navigate.done`,payload:{path:e}})}var ly=20,uy=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function dy(e){return`${iy}${e===`home`?`overview`:e}`}function fy(e){return e.toLowerCase().startsWith(iy)?ay[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function py(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(iy))return t;let n=ay[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?dy(n):null}function my(e){return e.history[e.index]??dy(`home`)}function hy(e){return fy(my(e))??`files`}function gy(e){let t=my(e);return fy(t)?``:e.listing?.path||t}function _y(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||hy(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function vy(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function yy(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||H.iconSize,gridSize:e.view?.gridSize||t.gridSize||H.gridSize,sort:e.view?.sort??H.sort,sortDescending:e.view?.sortDescending??H.sortDescending,columns:t.columns??_e.columns??[]}}function by(e=dy(`home`)){return oy+=1,{id:`tab-${oy}`,listing:null,loading:!fy(e),error:null,history:[e],index:0,fresh:!0,view:null}}function xy(e){return e instanceof Error?e.message:String(e)}function Sy(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function Cy(e){let t=md(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return hd(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function wy(e){let t=_(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Ty(e){return f(e)?Jt(e):void 0}function Ey(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return a(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:d(n)})}function Dy(){let e=R(),[t,n]=(0,D.useState)(()=>[by()]),[r,i]=(0,D.useState)(()=>t[0].id),[a,o]=(0,D.useState)(null),[u,d]=(0,D.useState)(()=>{let e=Nn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,D.useState)([]),[h,g]=(0,D.useState)([]),[v,y]=(0,D.useState)(null),[ee,b]=(0,D.useState)(null),[S,C]=(0,D.useState)(null),w=pe(),[T,E]=(0,D.useState)(pn),[O,k]=(0,D.useState)(0),[A,re]=(0,D.useState)(0),[j,ie]=(0,D.useState)(pn),[ae,M]=(0,D.useState)(0),[N,oe]=(0,D.useState)(0),[se,ce]=(0,D.useState)(0),[le,I]=(0,D.useState)(0),L=(0,D.useRef)(le);L.current=le;let[z,ue]=(0,D.useState)([]),[de,fe]=(0,D.useState)(10),[B,V]=(0,D.useState)(null),[ge,ve]=(0,D.useState)(0),[U,Oe]=(0,D.useState)(Rt),[ke,Ae]=(0,D.useState)(0),[je,Me]=(0,D.useState)(0),[Ne,Pe]=(0,D.useState)(0),[Fe,Ie]=(0,D.useState)(!0),[Re,Be]=(0,D.useState)(()=>{let e=Nn(`yafm.preview.width`,320);return e>=220?e:320}),[Ve,He]=(0,D.useState)(null),[We,Ge]=(0,D.useState)(null),[qe,Je]=(0,D.useState)(`primary`),[Ye,Xe]=(0,D.useState)(null),[Ze,Qe]=(0,D.useState)(null),[tt,nt]=(0,D.useState)(null),[at,ot]=(0,D.useState)(null),[st,ct]=(0,D.useState)({primary:0,secondary:0}),[lt,ut]=(0,D.useState)({primary:null,secondary:null}),[dt,ft]=(0,D.useState)(null),[pt,ht]=(0,D.useState)([]),[bt,St]=(0,D.useState)(!1),Ct=(0,D.useRef)([]),wt=(0,D.useRef)([]),[Et,Dt]=(0,D.useState)([]),[Ot,kt]=(0,D.useState)(!1),[At,Nt]=(0,D.useState)(!1),[G,Pt]=(0,D.useState)([]),[zt,Wt]=(0,D.useState)(null),Kt=(0,D.useRef)(0),[qt,Zt]=(0,D.useState)(()=>{let e=Fn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?vy({x:e.x,y:e.y}):vy({x:Math.max(20,window.innerWidth-340),y:110})}),Qt=(0,D.useCallback)(()=>{Zt(e=>vy(e)),Nt(!0)},[]),q=t.find(e=>e.id===r)??t[0],J=hy(q),en=my(q),tn=gy(q),nn=J===`files`?q.listing?.parent??Cy(tn):null,rn=q.splitWith?t.find(e=>e.id===q.splitWith):void 0,an=J===`files`&&rn!==void 0,on=rn?gy(rn):``,sn=rn?rn.listing?.parent??Cy(on):null,cn=an&&rn&&qe===`secondary`?rn:q,ln=B?.defaultView??_e,un=yy(cn,ln);(0,D.useEffect)(()=>{x(B?.accentColor,B?.secondaryColor)},[B?.accentColor,B?.secondaryColor]),(0,D.useEffect)(()=>{nm(B?.fonts)},[B?.fonts]),(0,D.useEffect)(()=>{te(B?.timeFormat,B?.timeFormatPattern)},[B?.timeFormat,B?.timeFormatPattern]),(0,D.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!B?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[B?.backgroundSource]),(0,D.useEffect)(()=>(he(e=>new Promise(t=>{Wt({id:++Kt.current,prompt:e,resolve:t})})),()=>he(null)),[]),(0,D.useEffect)(()=>{Je(`primary`)},[r]),(0,D.useEffect)(()=>{ie(pn),oe(0),ce(0)},[J]),(0,D.useEffect)(()=>{oe(0)},[j.query,j.matchCase,j.regex]),(0,D.useEffect)(()=>{oe(e=>se===0?0:Math.min(e,se-1))},[se]);let dn=un.columns.includes(`linkCount`),fn=(0,D.useMemo)(()=>{let e={},t=us(B),n={};for(let[e,t]of Object.entries(B?.placeNames??{}))n[c(e)]=t;for(let t of p)e[c(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=c(t),i=p.find(e=>c(e.path)===r);e[r]={name:n[r]??i?.name??(_(t)||t),path:t,kind:`folder`,icon:i?.icon??B?.placeIcons?.[t]??null}}return e},[p,B]),mn=(0,D.useMemo)(()=>({places:fn,useIcons:B?.systemIcons===!1}),[fn,B?.systemIcons]),hn=B?.defaultView?.showImages??!0,gn=B?.defaultView?.imageStripHeight??_e.imageStripHeight,_n=J===`home`?(0,F.jsx)(Di,{size:13}):J===`settings`?(0,F.jsx)(ri,{size:13}):J===`recycle`?(0,F.jsx)(li,{size:13}):J===`gallery`?(0,F.jsx)(hi,{size:13}):void 0,vn=T.open&&T.query.length>0,yn=(0,D.useMemo)(()=>vn&&cn.listing?cn.listing.entries.filter(e=>Sn(e.isDirectory?Mn(mn,e.fullPath,e.name):e.name,T)).map(e=>e.fullPath):[],[vn,T,cn.listing,mn]);(0,D.useEffect)(()=>{k(0)},[T.query,T.matchCase,T.regex,cn.listing?.path]);let bn=yn.length===0?-1:Math.min(O,yn.length-1),xn=(0,D.useCallback)(()=>{E(e=>({...e,open:!1,query:``})),k(0)},[]),Cn=(0,D.useCallback)(()=>{E(e=>({...e,open:!0})),re(e=>e+1)},[]),wn=(0,D.useCallback)(()=>{ie(e=>({...e,open:!0})),M(e=>e+1)},[]),Tn=(0,D.useCallback)(()=>{ie(pn),oe(0),ce(0)},[]),En=(0,D.useCallback)(e=>{oe(t=>se===0?0:(Math.min(t,se-1)+e+se)%se)},[se]),Dn=(0,D.useCallback)(e=>{E(t=>({...t,open:!0,query:t.open?t.query+e:e})),re(e=>e+1)},[]),On=(0,D.useCallback)(e=>{k(t=>yn.length===0?0:(Math.min(t,yn.length-1)+e+yn.length)%yn.length)},[yn.length]),An=(0,D.useRef)({tabs:t,activeId:r,activePane:qe});An.current={tabs:t,activeId:r,activePane:qe};let Ln=(0,D.useRef)(B);Ln.current=B;let Rn=(0,D.useRef)(!1),zn=(0,D.useRef)([]),Bn=(0,D.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Vn=(0,D.useRef)(new Map),Hn=(0,D.useCallback)(e=>{let t=(Vn.current.get(e)??0)+1;return Vn.current.set(e,t),()=>Vn.current.get(e)===t},[]),Un=(0,D.useCallback)(async(e,t,n)=>{if(!(t&&pd(t)))try{let r=await Te(t,dn);if(!n()||!r.listing)return;Bn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[dn,Bn]),Wn=(0,D.useCallback)(async(e,t,n=!1)=>{let r=Hn(e);xn();let i=!n||!An.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;Bn(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&Sy(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&Un(e,t,r);let o=t&&pd(t)?await gd(t):await be(t,!0,dn,L.current,t?Ty(t):void 0);if(!r())return;Bn(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!pd(o.path)&&ze(o.path).then(()=>ve(e=>e+1))}catch(i){if(!r())return;let a=An.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?gy(a):``,s=Cy(o),c=xy(i);if(o&&K(c)){let i=l(o),a=await la(i,!!Jt(i));if(a){Yt(i,a),r()&&Wn(e,t,n);return}}Bn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Hn,dn,Bn,xn,Un]),Gn=(0,D.useCallback)((e,t)=>{let n=py(t);n&&(fy(n)?(xn(),Hn(e),Bn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Wn(e,n))},[Hn,Wn,Bn,xn]),Kn=(0,D.useCallback)(async(e,t,n)=>{if(xn(),fy(t)){Hn(e),Bn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Hn(e);Bn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(pd(t)||await Un(e,t,r),!r())return;let n=pd(t)?await gd(t):await be(t,!0,dn,L.current,Ty(t));if(!r())return;Bn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(K(xy(i))){let i=l(t),a=await la(i,!!Jt(i));if(a){Yt(i,a),r()&&Kn(e,t,n);return}}Bn(e,()=>({listing:{path:t,parent:Cy(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:xy(i)}))}},[Hn,dn,Bn,xn,Un]),qn=(0,D.useCallback)((e,t=!0)=>{let r=by(e??dy(`home`));return n(e=>[...e,r]),t&&i(r.id),e&&!fy(e)&&Wn(r.id,e),r.id},[Wn]),Jn=(0,D.useCallback)(e=>{for(let t of An.current.tabs)hy(t)===`files`&&Sy(gy(t),e)&&Wn(t.id,e,!0)},[Wn]),Yn=(0,D.useCallback)((e,t)=>{let n=_(t);for(let r of An.current.tabs)r.listing?.entries.some(t=>Sy(t.fullPath,e))&&Bn(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>Sy(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[Bn]),Xn=(0,D.useCallback)((e,t=!1)=>{t?qn(dy(e)):Gn(An.current.activeId,dy(e))},[qn,Gn]),Zn=(0,D.useCallback)(e=>{let{tabs:t,activeId:r}=An.current,a=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==a?.splitWith);if(a&&!a.hidden&&(wt.current.push(my(a)),wt.current.length>ly&&wt.current.shift()),o.length===0){let e=by();n([e]),i(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&i(o[Math.min(s,o.length-1)].id)},[]),Qn=(0,D.useCallback)(()=>{let e=wt.current.pop();if(!e)return;let t={...by(e),fresh:!1};n(e=>[...e,t]),i(t.id),hy(t)===`files`&&Wn(t.id,gy(t))},[Wn]),$n=(0,D.useCallback)((e,t=!1)=>{t?qn(e):Gn(_y(An.current),e??dy(`home`))},[Gn,qn]),er=(0,D.useCallback)(e=>{let{tabs:t,activeId:n}=An.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let a=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;i(r[a].id)},[]),tr=(0,D.useCallback)(()=>{let{tabs:e,activeId:t}=An.current,r=e.find(e=>e.id===t);if(!r||hy(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),Bn(t,()=>({splitWith:void 0})),Je(`primary`);return}let a=gy(r),o={...by(a),hidden:!0};n(e=>[...e,o]),Bn(t,()=>({splitWith:o.id})),Wn(o.id,a),Je(`primary`)},[Wn,Bn]),nr=(0,D.useCallback)(e=>{Be(e),Pn(`yafm.preview.width`,e)},[]),rr=an?qe===`secondary`?We??Ve:Ve??We:Ve,ir=(0,D.useRef)(null),ar=e=>{e.preventDefault();let t=ir.current?.getBoundingClientRect();if(!t)return;let n=Fe?Re:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);d(n),Pn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},or=(e,t,n)=>{t&&Xe({x:e.clientX,y:e.clientY,directory:t,refresh:n})},sr=(0,D.useCallback)((e,t)=>{ct(n=>n[e]===t?n:{...n,[e]:t})},[]),cr=(0,D.useCallback)(e=>sr(`primary`,e),[sr]),lr=(0,D.useCallback)(e=>sr(`secondary`,e),[sr]),ur=(e,t)=>{st[e]!==0&&ut(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},dr=async(e,t=!1)=>{let n=Ye;if(Xe(null),!n)return;let r=e===null?await xt(n.directory,t):await Tt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;xn(),ft(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},fr=(0,D.useCallback)(()=>{let{tabs:e}=An.current,t=e.find(e=>e.id===_y(An.current));t&&t.index>0&&Kn(t.id,t.history[t.index-1],t.index-1)},[Kn]),pr=(0,D.useCallback)(()=>{let{tabs:e}=An.current,t=e.find(e=>e.id===_y(An.current));t&&t.index<t.history.length-1&&Kn(t.id,t.history[t.index+1],t.index+1)},[Kn]),mr=(0,D.useCallback)(()=>{let{tabs:e}=An.current,t=e.find(e=>e.id===_y(An.current));t&&hy(t)===`files`&&t.listing?.parent&&$n(t.listing.parent)},[$n]),hr=(0,D.useRef)(null),gr=(0,D.useCallback)(()=>{for(let e of An.current.tabs)e.listing&&Wn(e.id,e.listing.path,!0)},[Wn]),_r=(0,D.useCallback)(e=>{e.length!==0&&(Pt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Qt())},[Qt]),vr=(0,D.useCallback)(async e=>{let t=await W(e);t.length!==0&&_r(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[_r]),yr=(0,D.useCallback)(e=>{let t=new Set(e);Pt(e=>e.filter(e=>!t.has(e.path)))},[]),br=(0,D.useCallback)(async e=>{let t=Ln.current;if(!t)return;let n=await W(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>c(e.path))),i=n.filter(e=>!r.has(c(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};V(a),await $e(a),Ae(e=>e+1)},[]),xr=(0,D.useCallback)(()=>Pt([]),[]),Sr=(0,D.useRef)(-1),Cr=(0,D.useCallback)(e=>{Dt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),kt(e.move),e.entries.length>0&&Qt()},[Qt]),wr=(0,D.useCallback)(async()=>{if(P.available)try{let e=await gt();Sr.current=e.sequence,Cr(e)}catch{}},[Cr]),Tr=(0,D.useCallback)(async e=>{e.length!==0&&await mt(e,!1)&&await wr()},[wr]),Er=(0,D.useRef)(G);Er.current=G,(0,D.useEffect)(()=>{let e=e=>{Ps(e.dataTransfer)&&Qt()},t=e=>{Ps(e.dataTransfer)&&Qt()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[Qt]),(0,D.useEffect)(()=>{let e=()=>Zt(e=>vy(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Dr=(0,D.useCallback)(async()=>{let e=Er.current;if(e.length>0){let t=await W(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Pt(e=>e.filter(e=>n.has(e.path)))}await wr()},[wr]),Or=(0,D.useCallback)(()=>{Dr(),Pe(e=>e+1),gr()},[Dr,gr]),kr=(0,D.useCallback)(e=>{let t=vy(e);Zt(t),In(`yafm.tray.position`,t)},[]),Ar=(0,D.useCallback)(()=>{At?Nt(!1):Qt()},[Qt,At]),jr=(0,D.useCallback)(async(t,n,r)=>{let i=await _t(t,n,r);i.ok?(r&&yr(t),Pe(e=>e+1),gr(),wr()):sa(i.error??e(`The files could not be transferred.`))},[gr,wr,yr]);(0,D.useEffect)(()=>{if(P.available)return It().then(e=>{Ct.current=e,ht(e)},()=>void 0),P.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Ct.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Ct.current=n,ht(n),r&&St(!0)})},[]);let Mr=(0,D.useCallback)(()=>{Lt().then(()=>It().then(e=>{Ct.current=e,ht(e)},()=>void 0))},[]);(0,D.useEffect)(()=>{if(!P.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await gt();if(!e||t.sequence===Sr.current)return;Sr.current=t.sequence,Cr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Cr]);let Nr=(0,D.useCallback)(async e=>{let t=e?await jt():await Mt();t.ok?(Pe(e=>e+1),gr()):t.error&&!t.error.startsWith(`Nothing to`)&&sa(t.error)},[gr]),Pr=(0,D.useRef)(dn);(0,D.useEffect)(()=>{Pr.current!==dn&&(Pr.current=dn,gr())},[dn,gr]);let Fr=(0,D.useCallback)((e,t)=>{let{tabs:n}=An.current,r=n.find(t=>t.id===e);if(!r||hy(r)!==`files`)return;let i=gy(r),a=Ln.current?.defaultView??_e,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||H.iconSize,gridSize:r.view?.gridSize||a.gridSize||H.gridSize,sort:r.view?.sort??H.sort,sortDescending:r.view?.sortDescending??H.sortDescending,...t};Bn(e,()=>({view:o})),hr.current!==null&&window.clearTimeout(hr.current),hr.current=window.setTimeout(()=>{hr.current=null,Ce(i,o)},250)},[Bn]),Ir=(0,D.useCallback)(e=>{Fr(_y(An.current),e)},[Fr]),Lr=(0,D.useCallback)(e=>{let t=Ln.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,columns:e}};V(n),$e(n)},[]),Rr=(0,D.useCallback)(e=>{let t=Ln.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,showImages:e}};V(n),$e(n)},[]),zr=(0,D.useCallback)(e=>{let t=Ln.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,imageStripHeight:e}};V(n),$e(n)},[]),Br=(0,D.useCallback)((e,t,n,r)=>{let i=An.current.tabs.find(t=>t.id===e);if(!i||hy(i)!==`files`||!i.listing)return;let a=gy(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Bn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),we(a,t,n,r)},[Bn]),Vr=(0,D.useCallback)((e,t)=>{let n=An.current.tabs.find(t=>t.id===e);if(!n)return;let r=yy(n,Ln.current?.defaultView??_e);Fr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Fr]),Hr=(0,D.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Ur=(0,D.useCallback)(()=>{Ee().then(m,()=>m([]))},[]),Wr=(0,D.useCallback)(e=>{let t=(e.openTabs??[]).map(py).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...by(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),i(r[a].id);for(let e of r)hy(e)===`files`&&Wn(e.id,gy(e),!0);return!0},[Wn]),Gr=(0,D.useCallback)(e=>{let t=zn.current;if(zn.current=[],t.length===0)return;let n=t.filter(e=>!sy.has(e));for(let e of t)n.includes(e)||cy(e);if(n.length===0)return;let{tabs:r}=An.current;if(!e&&r.length===1&&r[0].fresh){Gn(r[0].id,n[0]),cy(n[0]);for(let e of n.slice(1))qn(e),cy(e);return}let a=n.map(e=>{let t=qn(e);return cy(e),t}).at(-1);a&&setTimeout(()=>i(a),0)},[qn,Gn]),Y=(0,D.useCallback)(()=>{Ke().then(e=>{V(e),fe(e.recentLimit);let t={...Rt,...e.shortcuts};Oe(t),Bt(t.openInNewTab),Ae(e=>e+1),Rn.current||(Rn.current=!0,Gr(e.restoreTabs&&Wr(e)))},()=>{fe(10),Rn.current=!0,Gr(!1)})},[Gr,Wr]),Kr=(0,D.useCallback)(()=>{Le().then(ue,()=>ue([]))},[]),qr=(0,D.useCallback)(()=>{De().then(g,()=>g([]))},[]),Jr=t.filter(e=>!e.hidden),Yr=Jr.map(my),Qr=Yr.join(`
`),ni=Math.max(Jr.findIndex(e=>e.id===r),0);(0,D.useEffect)(()=>{if(!B?.restoreTabs)return;let e=setTimeout(()=>void et(Yr,ni),700);return()=>clearTimeout(e)},[Qr,ni,B?.restoreTabs]),(0,D.useEffect)(()=>{let{tabs:e,activeId:t}=An.current,n=e.find(e=>e.id===t);n&&n.fresh&&hy(n)===`files`&&Wn(n.id,gy(n),!0),Ur(),Y(),qr(),rt().then(y,()=>y(null))},[Wn,Ur,Y,qr]),(0,D.useEffect)(()=>{if(it().then(b,()=>b(null)),P.available)return P.on(e=>{let t=e;t.type===`app.update`&&t.data&&b(t.data)})},[]),(0,D.useEffect)(()=>{if(P.available)return P.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&o({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&sa(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&sa(n.data.error??e(`Pairing failed.`))}})},[e]),(0,D.useEffect)(()=>{let e=setInterval(qr,3e4);return()=>clearInterval(e)},[qr]),(0,D.useEffect)(()=>{J===`home`&&(Kr(),qr())},[J,q.id,Kr,qr]),(0,D.useEffect)(()=>{if(!P.available)return;let e=P.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=An.current,i=t.data.startup===!0;i&&sy.has(n)?cy(n):i&&!Rn.current?zn.current.includes(n)||zn.current.push(n):(i&&r.length===1&&r[0].fresh?Gn(r[0].id,n):fy(n)?Gn(_y(An.current),n):qn(n),i&&cy(n))});return P.send({type:`app.ready`}),e},[Gn,qn]),(0,D.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,D.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,D.useEffect)(()=>{let e=e=>{if(Gt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),fr();return}if(e.key===`BrowserForward`){e.preventDefault(),pr();return}if(e.key===`Escape`&&T.open){e.preventDefault(),xn();return}let t=Ht(e);if(t===U.closeTab)e.preventDefault(),Zn(_y(An.current));else if(t===U.newTab)e.preventDefault(),qn();else if(t===U.reopenTab)e.preventDefault(),Qn();else if(t===U.goBack)e.preventDefault(),fr();else if(t===U.goForward)e.preventDefault(),pr();else if(t===U.goUp)e.preventDefault(),mr();else if(t===U.find)e.preventDefault(),J===`files`?Cn():wn();else if(t===U.location)e.preventDefault(),Me(e=>e+1);else if(t===U.home){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&$n(t)}else t===U.iconsView?(e.preventDefault(),J===`files`&&Ir({mode:`grid`})):t===U.detailsView?(e.preventDefault(),J===`files`&&Ir({mode:`list`})):t===U.nextTab?(e.preventDefault(),er(1)):t===U.previousTab?(e.preventDefault(),er(-1)):t===U.hidden||t===`alt+.`?(e.preventDefault(),Ue().then(()=>{Pe(e=>e+1),gr()})):t===U.undo?(e.preventDefault(),Nr(!0)):t===U.redo?(e.preventDefault(),Nr(!1)):t===U.splitView?(e.preventDefault(),tr()):J!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Dn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[U,J,T.open,Zn,Qn,qn,fr,pr,mr,Cn,wn,xn,Dn,Ir,er,$n,p,gr,Nr,tr]),(0,D.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),fr()):e.button===4&&(e.preventDefault(),pr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[fr,pr]),(0,D.useEffect)(()=>{if(!P.available||J!==`files`)return;let e=new Set;for(let n of t){if(hy(n)!==`files`)continue;let t=gy(n);if(t&&!pd(t)){if(f(t)){let n=Cy(l(t));n&&e.add(n)}else e.add(t)}}e.size>0&&P.send({type:`fs.watch`,payload:{paths:[...e]}})},[J,en,t]),(0,D.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=An.current.tabs.filter(e=>hy(e)===`files`&&Sy(gy(e),n));r.length!==0&&($t(),be(n,!1,dn).then(e=>{for(let t of r){let n=An.current.tabs.find(e=>e.id===t.id);n&&hy(n)===`files`&&!n.loading&&Sy(gy(n),e.path)&&Bn(t.id,()=>({listing:e}))}},()=>void 0))})},[dn,Bn]);let ii=q.index>0,ai=q.index<q.history.length-1,oi=(e,t)=>{let n=yy(e,ln),r=e.listing?.path??e.history[e.index]??``,i=f(r),a=i&&ne(r);return(0,F.jsx)(xc,{confirmDelete:B?.confirmDelete??!1,previewVideoAudio:B?.previewVideoAudio??!1,previewVideoAutoplay:B?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?He:Ge,onActivate:()=>Je(t?`primary`:`secondary`),enableShortcuts:(!an||(t?qe===`primary`:qe===`secondary`))&&(!i||a),error:e.error,find:e.id===cn.id?{...T,currentPath:bn<0?null:yn[bn]}:void 0,imageStripHeight:gn,listing:e.listing,loading:e.loading,onImageStripHeight:zr,readOnly:i&&!a||pd(e.listing?.path??``),onOpen:(t,n)=>{n?qn(t):Wn(e.id,t)},onOpenFile:(t,n)=>{pd(t)?vd(t).catch(e=>void sa(xy(e))):s(t)?B?.archiveHandler??!1?n?qn(t):Wn(e.id,t):ye(t):f(t)?(async()=>{let e=await Se(t,L.current,Ty(t));if(!e.path&&K(e.error)){let n=l(t),r=Jt(n);r&&Xt(n);let i=await la(n,!!r);i&&(Yt(n,i),e=await Se(t,L.current,i))}e.path?ye(e.path):e.error&&sa(e.error)})():ye(t)},onRefresh:()=>{let t=e.listing?.path;t&&Jn(t)},onRename:Yn,onSelectionCountChange:t?cr:lr,onSetTags:(t,n,r)=>Br(e.id,t,n,r),selectionMenuRequest:t?lt.primary:lt.secondary,onSort:t=>Vr(e.id,t),onPaste:Or,onClipboardChanged:()=>void wr(),onTransfer:jr,onAddToTray:e=>void vr(e),onAddFavorite:e=>void br(e),openOnSingleClick:B?.openOnSingleClick??!1,pendingRename:dt&&t===(qe===`primary`)&&Sy(dt.directory,e.listing?.path??``)?dt.path:null,pendingRenameToken:dt?.token??0,refreshToken:Ne,shortcuts:U,showCheckboxes:B?.showCheckboxes??!0,showImages:hn,view:n})},si=T.open&&(0,F.jsx)(Ku,{current:bn,focusToken:A,matchCase:T.matchCase,mode:T.mode,onClose:xn,onMatchCase:()=>E(e=>({...e,matchCase:!e.matchCase})),onMode:()=>E(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>On(1),onPrevious:()=>On(-1),onQuery:e=>E(t=>({...t,query:e})),onRegex:()=>E(e=>({...e,regex:!e.regex})),query:T.query,regex:T.regex,total:yn.length}),ci=J===`files`&&f(tn),ui=ci&&ne(tn),di=async e=>{if(!ci)return;let t=l(tn),n=Cy(t);if(!n)return;let r=e===`named`;if(e===`auto`){let e=Sy(tn,t)?q.listing?.entries??[]:(await be(t,!1,!1,L.current,Ty(t))).entries;r=!(e.length===1&&e[0].isDirectory)}let i=n.includes(`\\`)?`\\`:`/`,a=r?`${n.replace(/[\\/]+$/,``)}${i}${wy(t)}`:n;await fi(a)},fi=async t=>{let n=await xe(tn,t,L.current,Ty(tn));if(!n.ok&&K(n.error)){let e=l(tn),r=Jt(e);r&&Xt(e);let i=await la(e,!!r);i&&(Yt(e,i),n=await xe(tn,t,L.current,i))}n.ok?(Jn(t),$t(),Wn(q.id,t,!0)):sa(`${e(`Could not extract the archive.`)}${n.error?`\n${n.error}`:``}`)},pi=async()=>{if(!ci)return;let e=await na(Cy(l(tn))??void 0);e&&await fi(e)},mi=(0,F.jsxs)(My,{children:[(0,F.jsx)(Ny,{"data-shortcut":Ut(U.goBack),disabled:!ii,onClick:e=>{q.index>0&&Vt(e)?qn(q.history[q.index-1]):fr()},title:e(`Back`),type:`button`,children:(0,F.jsx)(ei,{})}),(0,F.jsx)(Ny,{"data-shortcut":Ut(U.goForward),disabled:!ai,onClick:e=>{q.index<q.history.length-1&&Vt(e)?qn(q.history[q.index+1]):pr()},title:e(`Forward`),type:`button`,children:(0,F.jsx)(ti,{})}),(0,F.jsx)(Ny,{"data-shortcut":Ut(U.goUp),disabled:J!==`files`||!nn,onClick:e=>{nn&&(Vt(e)?qn(nn):$n(nn))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(Zr,{})}),(0,F.jsx)(Xf,{focusToken:je,icon:_n,label:J===`files`?void 0:e(qv[J]),onContextMenu:J===`files`?(e,t,n)=>nt({x:t,y:n,path:e}):void 0,onNavigate:$n,path:J===`files`?tn:en}),J===`files`&&(!ci||ui)&&(0,F.jsx)(Ny,{onClick:e=>or(e,tn,()=>void Wn(q.id,tn,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)($r,{})}),(0,F.jsx)(Ny,{"data-shortcut":Ut(U.find),onClick:wn,title:e(`Search`),type:`button`,children:(0,F.jsx)(Xr,{})}),st.primary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Fy,{}),(0,F.jsx)(Ny,{onClick:e=>ur(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)($i,{})})]}),ci&&(0,F.jsxs)(Py,{children:[(0,F.jsx)(Fy,{}),(0,F.jsx)(Ny,{onClick:()=>void pi(),onContextMenu:e=>{e.preventDefault(),Qe({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,F.jsx)(vi,{})}),(0,F.jsx)(Za,{icon:(0,F.jsx)(Wi,{size:15}),onChange:e=>{let t=Number(e);I(t),L.current=t,ci&&Wn(q.id,tn,!0)},options:uy.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(uy.find(e=>e.value===String(le))?.label??`Auto`)}`,value:String(le)})]})]}),gi=j.open?{...j,index:N}:null;return(0,F.jsx)(kn,{value:mn,children:(0,F.jsxs)(Oy,{$rounded:w,children:[(0,F.jsx)(lu,{settings:B}),(0,F.jsx)(Sv,{activeId:q.id,onClose:Zn,onNewTab:()=>qn(),onReorder:Hr,onTransferToTab:jr,onSelect:i,onViewChange:Ir,onColumns:Lr,onShowImages:Rr,showImages:hn,tasks:pt,onClearTasks:Mr,activityOpen:bt,onActivityOpenChange:St,trayCount:G.length+Et.length,trayVisible:At,onToggleTray:Ar,split:an,canSplit:J===`files`,onToggleSplit:tr,details:Fe,canDetails:J===`files`||J===`recycle`||J===`gallery`,onToggleDetails:()=>Ie(e=>!e),currentFolder:J===`files`&&!pd(tn)?tn:``,shortcuts:U,view:un,tabs:t.filter(e=>!e.hidden).map(n=>{let r=hy(n),i=gy(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?gy(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?jn(mn,i):void 0,archive:r===`files`&&f(i),split:!!a,title:r===`files`?Mn(mn,i,_(i)||e(`Files`)):e(qv[r]),partner:a?{title:Mn(mn,o,_(o)||e(`Files`)),place:jn(mn,o)}:void 0}})}),(0,F.jsxs)(ky,{children:[(0,F.jsx)(jg,{activeKind:J,currentPath:J===`files`?en:``,drives:h,historyVersion:ge,onNavigate:$n,onOpenView:Xn,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:z,recentLimit:de,version:ke}),(0,F.jsxs)(Ay,{children:[J!==`files`&&mi,(0,F.jsxs)(jy,{children:[J!==`files`&&j.open&&(0,F.jsx)(Ku,{current:N,focusToken:ae,matchCase:j.matchCase,mode:j.mode,onClose:Tn,onMatchCase:()=>ie(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ie(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>En(1),onPrevious:()=>En(-1),onQuery:e=>ie(t=>({...t,query:e})),onRegex:()=>ie(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:j.query,regex:j.regex,total:se}),J===`files`?an&&rn?(0,F.jsxs)(Ly,{ref:ir,children:[(0,F.jsxs)(Ry,{style:{flex:u},children:[(0,F.jsxs)(Iy,{$active:qe===`primary`,onPointerDown:()=>Je(`primary`),children:[(0,F.jsx)(Ny,{"data-shortcut":Ut(U.goBack),disabled:!ii,onClick:e=>{let t=q.index-1;t<0||(Vt(e)?qn(q.history[t]):Kn(q.id,q.history[t],t))},title:e(`Back`),type:`button`,children:(0,F.jsx)(ei,{})}),(0,F.jsx)(Ny,{"data-shortcut":Ut(U.goForward),disabled:!ai,onClick:e=>{let t=q.index+1;t>=q.history.length||(Vt(e)?qn(q.history[t]):Kn(q.id,q.history[t],t))},title:e(`Forward`),type:`button`,children:(0,F.jsx)(ti,{})}),(0,F.jsx)(Ny,{"data-shortcut":Ut(U.goUp),disabled:!nn,onClick:e=>{nn&&(Vt(e)?qn(nn):Wn(q.id,nn))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(Zr,{})}),(0,F.jsx)(Xf,{focusToken:qe===`primary`?je:void 0,onContextMenu:(e,t,n)=>nt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?qn(e):void Wn(q.id,e),path:tn}),(0,F.jsx)(Ny,{onClick:e=>or(e,tn,()=>void Wn(q.id,tn,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)($r,{})}),(0,F.jsx)(Ny,{"data-shortcut":Ut(U.find),onClick:Cn,title:e(`Search`),type:`button`,children:(0,F.jsx)(Xr,{})}),st.primary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Fy,{}),(0,F.jsx)(Ny,{onClick:e=>ur(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)($i,{})})]})]}),oi(q,!0),qe===`primary`&&si]}),(0,F.jsx)(zy,{onDoubleClick:()=>d(.5),onPointerDown:ar,title:e(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(Ry,{$enter:!0,style:{flex:1-u},children:[(0,F.jsxs)(Iy,{$active:qe===`secondary`,onPointerDown:()=>Je(`secondary`),children:[(0,F.jsx)(Ny,{"data-shortcut":Ut(U.goBack),disabled:rn.index<=0,onClick:e=>{let t=rn.index-1;t<0||(Vt(e)?qn(rn.history[t]):Kn(rn.id,rn.history[t],t))},title:e(`Back`),type:`button`,children:(0,F.jsx)(ei,{})}),(0,F.jsx)(Ny,{"data-shortcut":Ut(U.goForward),disabled:rn.index>=rn.history.length-1,onClick:e=>{let t=rn.index+1;t>=rn.history.length||(Vt(e)?qn(rn.history[t]):Kn(rn.id,rn.history[t],t))},title:e(`Forward`),type:`button`,children:(0,F.jsx)(ti,{})}),(0,F.jsx)(Ny,{"data-shortcut":Ut(U.goUp),disabled:!sn,onClick:e=>{sn&&(Vt(e)?qn(sn):Wn(rn.id,sn))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(Zr,{})}),(0,F.jsx)(Xf,{focusToken:qe===`secondary`?je:void 0,onContextMenu:(e,t,n)=>nt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?qn(e):void Wn(rn.id,e),path:on}),(0,F.jsx)(Ny,{onClick:e=>or(e,on,()=>void Wn(rn.id,on,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)($r,{})}),(0,F.jsx)(Ny,{"data-shortcut":Ut(U.find),onClick:Cn,title:e(`Search`),type:`button`,children:(0,F.jsx)(Xr,{})}),st.secondary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Fy,{}),(0,F.jsx)(Ny,{onClick:e=>ur(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)($i,{})})]})]}),oi(rn,!1),qe===`secondary`&&si]}),(0,F.jsx)(Fo,{info:rr,onWidth:nr,open:Fe,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,width:Re})]}):(0,F.jsxs)(Vy,{children:[(0,F.jsxs)(Hy,{children:[mi,(0,F.jsxs)(By,{children:[oi(q,!0),si]})]}),(0,F.jsx)(Fo,{info:Ve,onWidth:nr,open:Fe,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,width:Re})]}):J===`home`?(0,F.jsx)(Gf,{drives:h,find:gi,historyVersion:ge,onSearchMatches:ce,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:qr,onHistoryChanged:()=>ve(e=>e+1),onAddToTray:e=>void vr(e),onAddFavorite:e=>void br(e),settingsVersion:ke,onOpen:$n,onLayoutChanged:Y,onPlacesChanged:m,onRecentCleared:Kr,places:p,recent:z,recentLimit:de,visibilityVersion:Ne}):J===`settings`?(0,F.jsx)(Om,{appInfo:v,find:gi,focusSection:S,onSearchMatches:ce,onSettingsChanged:Y}):J===`gallery`?(0,F.jsx)(_g,{confirmDelete:B?.confirmDelete??!1,find:gi,onSearchMatches:ce,openOnSingleClick:B?.openOnSingleClick??!1,onAddToTray:e=>void vr(e),onAddFavorite:e=>void br(e),shortcuts:U,showCheckboxes:B?.showCheckboxes??!0,showDetails:Fe,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,view:un}):(0,F.jsx)(fp,{find:gi,onOpenLocation:$n,onShowDetails:()=>Ie(!0),platform:v?.platform,showDetails:Fe,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1})]},J),(0,F.jsxs)(Ky,{children:[(0,F.jsx)(`span`,{children:J===`files`&&q.listing?Ey(e,q.listing):``}),v?(0,F.jsxs)(Uy,{children:[(0,F.jsxs)(`span`,{children:[`v`,v.version,` · `,v.platform]}),ee?.available&&(0,F.jsxs)(Wy,{onClick:()=>{C(`updates`),Xn(`settings`)},title:e(`Version {version} is available.`,{version:ee.latest}),type:`button`,children:[(0,F.jsx)(Gy,{}),e(`Update available`)]})]}):(0,F.jsx)(`span`,{children:`browser preview`})]})]})]}),(0,F.jsx)(zs,{clipboardItems:Et,clipboardMove:Ot,currentDirectory:J===`files`?en:``,items:G,onAdd:e=>void vr(e),onClear:xr,onClose:()=>Nt(!1),onCopyToClipboard:e=>void Tr(e),onPosition:kr,onRemove:yr,onTransfer:jr,position:qt,visible:At}),Ye&&(0,F.jsx)(Ja,{creationOnly:!0,directory:Ye.directory,menu:{x:Ye.x,y:Ye.y,paths:[],background:!0},onClose:()=>Xe(null),onCreateFile:e=>void dr(e),onCreateFolder:e=>void dr(null,e),shortcuts:U}),tt&&(0,F.jsx)(Ja,{allowCompression:!0,directory:Cy(tt.path)??tt.path,menu:{x:tt.x,y:tt.y,paths:[tt.path]},onAddToTray:e=>void vr(e),onAddFavorite:e=>void br(e),onArchiveCreated:e=>{e&&Jn(Cy(tt.path)??tt.path)},onClose:()=>nt(null),onCompressTo:(e,t)=>ot({paths:e,name:t}),onCopy:(e,t)=>void mt(e,t),onDelete:e=>void yt(e,!1).then(()=>Jn(Cy(tt.path)??tt.path)),onOpen:(e,t)=>t?qn(e):void Wn(q.id,e),onOpenFile:e=>void ye(e),onPaste:e=>void vt(e).then(t=>{t&&Jn(e)}),onRefresh:()=>Jn(tt.path),shortcuts:U,target:{path:tt.path,isDirectory:!0}}),at&&(0,F.jsx)(uo,{initialDirectory:Cy(tt?.path??tn)??tn,initialName:at.name,onCancel:()=>ot(null),onCompress:async e=>{let t=await Ft(at.paths,e);return!t.ok&&t.error&&sa(t.error),t.ok}}),Ze&&(0,F.jsx)(Ia,{items:[{label:e(`Extract here`),onSelect:()=>void di(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void di(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void di(`auto`)}],onClose:()=>Qe(null),x:Ze.x,y:Ze.y}),zt&&(0,F.jsx)(mu,{delaySeconds:zt.prompt.delaySeconds,hits:zt.prompt.hits,onCancel:()=>{zt.resolve(!1),Wt(null)},onConfirm:()=>{zt.resolve(!0),Wt(null)},permanent:zt.prompt.permanent},zt.id),(0,F.jsx)(ku,{}),(0,F.jsx)(Iu,{}),a&&(0,F.jsx)(Jv,{code:a.code,deviceName:a.deviceName,onAccept:()=>{ud(a.requestId,!0),o(null)},onReject:()=>{ud(a.requestId,!1),o(null)}}),(0,F.jsx)(Hv,{}),(0,F.jsx)(me,{})]})})}var Oy=i.div`
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
`,ky=i.div`
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
`,Ay=i.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,jy=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${ja}
`,My=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Ny=i.button`
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
`,Py=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Fy=i.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Iy=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Ly=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Ry=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Pa:``}
`,zy=i.div`
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
        ${Fa}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,By=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Vy=i.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Hy=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Uy=i.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Wy=i.button`
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
`,Gy=i.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Ky=i.footer`
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
`;function qy({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:l,onSelect:u}){let d=R(),f=pc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,D.useState)(e),[v,y]=(0,D.useState)(null),[ee,b]=(0,D.useState)(!0),[x,te]=(0,D.useState)(null),[S,C]=(0,D.useState)(()=>new Set),[w,T]=(0,D.useState)(a??[]),[ne,O]=(0,D.useState)([]),[k,A]=(0,D.useState)([]),[re,j]=(0,D.useState)([]),[ie,ae]=(0,D.useState)([]),[M,N]=(0,D.useState)(``),[oe,se]=(0,D.useState)(m.length===0),[ce,le]=(0,D.useState)(`files`),[I,L]=(0,D.useState)(0),[z,ue]=(0,D.useState)(pn),[de,fe]=(0,D.useState)(0),[pe,B]=(0,D.useState)(0),[me,V]=(0,D.useState)(null),[he,ge]=(0,D.useState)(null),[ve,ye]=(0,D.useState)(0),[xe,Se]=(0,D.useState)(null),[U,Ce]=(0,D.useState)(_e.imageStripHeight);(0,D.useEffect)(()=>{Ke().then(Se,()=>Se(null))},[]),(0,D.useEffect)(()=>{a?T(a):Ee().then(T,()=>T([]))},[a]),(0,D.useEffect)(()=>{De().then(O,()=>O([])),Le().then(A,()=>A([]))},[]),(0,D.useEffect)(()=>{let e=!0;return b(!0),te(null),C(new Set),N(p?``:_(h)),be(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),N(p?``:_(t.path)),b(!1))},t=>{e&&(te(t instanceof Error?t.message:String(t)),b(!1))}),()=>{e=!1}},[h,I,p]),(0,D.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),ue(e=>({...e,open:!0})),fe(e=>e+1);return}if(e.key===`Escape`){z.open?(ue(e=>({...e,open:!1,query:``})),B(0)):l();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Te();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Oe();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),ue(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),fe(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ue()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,D.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Te()):e.button===4&&(e.preventDefault(),Oe())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let we=e=>{let t=e.trim();t.length!==0&&c(t)!==c(h)&&(j(e=>[...e,h]),ae([]),le(`files`),g(t))},Te=()=>{let e=re.at(-1);e!==void 0&&(j(e=>e.slice(0,-1)),ae(e=>[h,...e]),g(e))},Oe=()=>{let e=ie[0];e!==void 0&&(ae(e=>e.slice(1)),j(e=>[...e,h]),g(e))},ke=v?.path??h,Ae=v?.parent??(h?E(h):null);(0,D.useEffect)(()=>{P.available&&ke&&P.send({type:`fs.watch`,payload:{paths:[ke]}})},[ke]),(0,D.useEffect)(()=>{if(P.available&&ke)return P.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&c(t.data.path)===c(ke)&&be(ke,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));C(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[ke]);let je=(v?.entries??[]).filter(e=>e.isDirectory||p&&(oe||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Me=v?{...v,entries:je}:null,Ne=z.open&&z.query.length>0,Pe=(0,D.useMemo)(()=>Ne?je.filter(e=>Sn(e.name,z)).map(e=>e.fullPath):[],[Ne,je,z]);(0,D.useEffect)(()=>{B(0)},[z.query,z.matchCase,z.regex,v?.path]);let Fe=Pe.length===0?-1:Math.min(pe,Pe.length-1),Ie=(0,D.useMemo)(()=>({...z,currentPath:Fe>=0?Pe[Fe]:null}),[z,Fe,Pe]),Re=xe?.defaultView??_e,ze=o??{mode:Re.mode,iconSize:Re.iconSize,gridSize:Re.gridSize,sort:`name`,sortDescending:!1,columns:Re.columns??[`type`,`size`,`modified`]},Be=(s??Re.showImages)&&ze.mode===`list`,Ve=M.trim(),He=Ve.length>0?Yy(Ve)?Ve:Jy(ke,Ve):null,Ue=()=>{if(ee||x)return;let e=n?[...S]:[...S].slice(0,1);e.length>0?u(e):He!==null&&Ve!==_(ke)?u([He]):!p&&ke&&u([ke])},We=(0,D.useCallback)(e=>{C(new Set(e)),N(e.length===1?_(e[0]):e.length===0&&!p?_(ke):``)},[ke,p]),Ge=e=>{v?.entries.find(t=>t.fullPath===e)?.isDirectory?we(e):p&&u([e])},qe=e=>N(e),Je=async e=>{let t=me;if(V(null),!t||!ke)return;let n=e===null?await xt(ke):await Tt(ke,e);n.ok&&n.path!==null&&(ue(e=>({...e,open:!1,query:``})),e!==null&&se(!0),L(e=>e+1),window.setTimeout(()=>{ge(n.path),ye(e=>e+1)},120))},Ye=()=>{ue(e=>({...e,open:!0})),fe(e=>e+1)},Xe=e=>{B(t=>Pe.length===0?0:(t+e+Pe.length)%Pe.length)},Ze=e=>(0,F.jsxs)(ab,{children:[(0,F.jsxs)(ob,{children:[(0,F.jsx)(sb,{children:d(p?`File name:`:`Folder:`)}),(0,F.jsx)(cb,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ue())},spellCheck:!1,value:M}),p&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(sb,{children:d(`Files of type:`)}),(0,F.jsx)(Za,{onChange:e=>se(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:oe?`all`:`supported`,width:220})]})]}),(0,F.jsxs)(lb,{children:[(0,F.jsx)(ub,{onClick:l,type:`button`,children:d(`Cancel`)}),(0,F.jsxs)(ub,{$primary:!0,disabled:ee||x!==null||p&&S.size===0&&Ve.length===0,onClick:Ue,type:`button`,children:[(0,F.jsx)(ui,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),Qe=(0,F.jsxs)(Zy,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,F.jsxs)(Qy,{children:[(0,F.jsxs)($y,{children:[(0,F.jsx)(qr,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,F.jsx)(eb,{onClick:l,title:d(`Cancel`),type:`button`,children:(0,F.jsx)(di,{size:12})})]}),(0,F.jsxs)(tb,{children:[(0,F.jsx)(jg,{activeKind:ce===`overview`?`home`:ce===`gallery`?`gallery`:`files`,currentPath:ke,drives:ne,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:w.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>we(e),onOpenView:e=>{e===`home`?(C(new Set),N(p?``:_(ke)),le(`overview`)):e===`gallery`&&p&&(C(new Set),N(``),le(`gallery`))},places:w,recent:k,recentLimit:10}),(0,F.jsx)(nb,{children:ce===`overview`?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Gf,{drives:ne,historyVersion:0,homePath:w.find(e=>e.kind===`home`)?.path??``,onOpen:e=>we(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:We,places:w,readOnly:!0,recent:k,recentLimit:10,visibilityVersion:0}),Ze(N)]}):ce===`gallery`?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(_g,{onPick:e=>u([e]),onSelectionChange:We,showCheckboxes:xe?.showCheckboxes??!0,view:{...H,columns:[]}}),Ze(N)]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(rb,{children:[(0,F.jsx)(ib,{disabled:re.length===0,onClick:Te,title:d(`Back`),type:`button`,children:(0,F.jsx)(ei,{})}),(0,F.jsx)(ib,{disabled:ie.length===0,onClick:Oe,title:d(`Forward`),type:`button`,children:(0,F.jsx)(ti,{})}),(0,F.jsx)(ib,{disabled:!Ae,onClick:()=>Ae&&we(Ae),title:d(`Up one level`),type:`button`,children:(0,F.jsx)(Zr,{})}),(0,F.jsx)(Xf,{onNavigate:we,path:ke}),(0,F.jsx)(ib,{onClick:e=>V({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,F.jsx)($r,{})}),(0,F.jsx)(ib,{onClick:Ye,title:d(`Search`),type:`button`,children:(0,F.jsx)(Xr,{})}),f.available&&(0,F.jsx)(ib,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,F.jsx)($i,{})})]}),z.open&&(0,F.jsx)(Ku,{current:Fe,focusToken:de,matchCase:z.matchCase,mode:z.mode,onClose:()=>{ue(e=>({...e,open:!1,query:``})),B(0)},onMatchCase:()=>ue(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ue(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Xe(1),onPrevious:()=>Xe(-1),onQuery:e=>ue(t=>({...t,query:e})),onRegex:()=>ue(e=>({...e,regex:!e.regex})),query:z.query,regex:z.regex,total:Pe.length}),(0,F.jsx)(xc,{allowBackgroundMenu:!0,confirmDelete:xe?.confirmDelete??!1,enableShortcuts:!0,error:x,find:Ie,imageStripHeight:U,loading:ee,listing:Me,onImageStripHeight:Ce,onOpen:Ge,onOpenFile:Ge,onRefresh:()=>L(e=>e+1),onSelectionChange:We,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:xe?.openOnSingleClick??!1,refreshToken:I,pendingRename:he,pendingRenameToken:ve,showCheckboxes:xe?.showCheckboxes??!0,showDetails:!1,showImages:Be,singleSelect:!n,view:ze}),Ze(qe)]})})]}),me&&(0,F.jsx)(Ja,{creationOnly:!0,directory:ke,menu:{x:me.x,y:me.y,paths:[],background:!0},onClose:()=>V(null),onCreateFile:p?e=>void Je(e):void 0,onCreateFolder:()=>void Je(null),shortcuts:Rt})]});return i?Qe:(0,ya.createPortal)((0,F.jsx)(Xy,{onPointerDown:e=>{e.target===e.currentTarget&&l()},children:Qe}),document.body)}function Jy(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Yy(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Xy=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Pa}
`,Zy=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:ba}
    ${({$inline:e})=>e?``:ka}
`,Qy=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,$y=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,eb=i.button`
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
`,tb=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,nb=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,rb=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,ib=i.button`
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
`,ab=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,ob=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,sb=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,cb=i.input`
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
`,lb=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,ub=i.button`
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
`;function db({mode:e,multiple:t,extensions:n,initial:r}){let i=R(),a=fe(),[o,s]=(0,D.useState)(null),[c,l]=(0,D.useState)({}),[u,d]=(0,D.useState)(null),[f,p]=(0,D.useState)(null),[m,h]=(0,D.useState)(null),g=(0,D.useRef)(0);(0,D.useEffect)(()=>{P.send({type:`app.ready`})},[]),(0,D.useEffect)(()=>(he(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>he(null)),[]),(0,D.useEffect)(()=>{Ke().then(e=>{s(e),x(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??_e,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,F.jsxs)(fb,{children:[(0,F.jsxs)(pb,{children:[(0,F.jsx)(mb,{children:(0,F.jsx)(fi,{size:17})}),(0,F.jsx)(hb,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,F.jsx)(ov,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,F.jsx)(gb,{children:(0,F.jsx)(_b,{onClick:()=>P.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,F.jsx)(di,{size:12})})})]}),(0,F.jsx)(vb,{children:(0,F.jsx)(qy,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>P.send({type:`pick.cancel`}),onSelect:e=>P.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,F.jsx)(mu,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,F.jsx)(ku,{}),(0,F.jsx)(me,{})]})}var fb=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,pb=i.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,mb=i.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,hb=i.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gb=i.div`
    display: flex;
    flex-shrink: 0;
`,_b=i.button`
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
`,vb=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,yb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,yb);var bb=document.getElementById(`root`),xb=new URLSearchParams(window.location.search),Sb=xb.get(`picker`),Cb=xb.get(`filter`)??``;bb&&(0,O.createRoot)(bb).render((0,F.jsx)(D.StrictMode,{children:(0,F.jsx)(z,{children:Sb===`folder`||Sb===`file`?(0,F.jsx)(db,{extensions:Cb?Cb.split(`;`).filter(Boolean):[],initial:xb.get(`initial`)??``,mode:Sb,multiple:xb.get(`multiple`)===`1`}):(0,F.jsx)(Dy,{})})}));