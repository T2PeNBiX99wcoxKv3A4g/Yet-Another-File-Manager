import{A as e,C as t,D as n,M as r,O as i,S as a,T as o,_ as s,b as c,c as l,d as u,f as d,g as f,h as p,i as m,j as h,k as g,l as _,m as v,n as y,o as ee,p as b,r as x,s as te,t as S,u as C,v as w,w as T,x as E,y as ne}from"./theme-GtEFL-tp.js";var D=r(h(),1),O=g(),k=15e3,A=new Set,re=new Map,j=!1,ie=0,ae;function M(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function N(){j||(j=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>P(e)))}function P(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?re.get(n):void 0;n&&r&&(re.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),A.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function oe(){if(ae!==void 0)return;let e=()=>{if(!M())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),ae=setInterval(e,5e3)}var F={get available(){return M()},send(e){M()?(N(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&oe()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=k){if(!M())return Promise.reject(Error(`Native bridge is not available.`));N();let r=`req-${++ie}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{re.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);re.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return N(),A.add(e),()=>A.delete(e)}},I=T();function se(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function ce(e){return F.available?await F.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var L=(0,D.createContext)(se({})),R=(0,D.createContext)(`en`);function z(){return(0,D.useContext)(L)}var B=({children:e})=>{let[t,n]=(0,D.useState)(()=>se({})),[r,i]=(0,D.useState)(`en`);return(0,D.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await ce();if(e)return;n(()=>se(t.strings)),i(t.locale)}catch{}};t();let r=F.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,D.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,I.jsx)(L.Provider,{value:t,children:(0,I.jsx)(R.Provider,{value:r,children:e})})},le=e=>F.send({type:e});function ue(){let[e,t]=(0,D.useState)(!1);return(0,D.useEffect)(()=>{if(F.available)return F.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>le(`window.minimize`),toggleMaximize:()=>le(`window.toggleMaximize`),close:()=>le(`window.close`)}}function de(){return{onMouseDown:()=>le(`window.drag`),onDoubleClick:()=>le(`window.toggleMaximize`)}}function fe(){let[e,t]=(0,D.useState)(!1),{maximized:n}=ue();return(0,D.useEffect)(()=>{if(!F.available)return;let e=!1;return F.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,D.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var V=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function pe(){return(0,I.jsx)(I.Fragment,{children:V.map(([e,t])=>(0,I.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),F.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var H=null;function me(e){H=e}function he(e){return H?H(e):Promise.resolve(!1)}var U={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},ge={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function _e(e,t){return F.available?await F.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function ve(e){return F.available?(await F.request(`fs.open`,{path:e})).ok:!1}async function ye(e,t=!0,n=!1,r=0,i){return await F.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function be(e,t,n=0,r){return await F.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function xe(e,t=0,n){return await F.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Se(e){F.available&&e.length!==0&&await F.request(`fs.archive.release`,{paths:e})}async function W(e){return F.available?await F.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Ce(e,t){return F.available?(await F.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function we(e,t,n,r){return F.available?(await F.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Te(e,t=!1){return F.available?await F.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ee(){return(await F.request(`fs.places`)).places}async function De(){return(await F.request(`fs.drives`)).drives}async function Oe(e=!1){return(await F.request(`fs.recycle`,{includeOrphans:e})).entries}async function ke(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await he({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await F.request(e,{...t,confirm:r.token})}return r}async function Ae(e=!1){let t=await F.request(`fs.recycle.empty`,{includeOrphans:e});await ke(`fs.recycle.empty`,{includeOrphans:e},t)}async function je(e){return!F.available||e.length===0?{ok:!1,done:0}:await F.request(`fs.recycle.restoreMany`,{ids:e})}async function Me(e){if(!F.available||e.length===0)return{ok:!1,done:0};let t=await F.request(`fs.recycle.deleteMany`,{ids:e}),n=await ke(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ne(e){F.available&&e&&await F.request(`fs.recycle.properties`,{id:e})}async function Pe(){if(!F.available)return{entries:[],cancelled:!0,failed:!1};let e=await F.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Fe(){return F.available?(await F.request(`fs.recycle.admin.purge`)).ok:!1}async function Ie(e=0,t=150,n=!1){return F.available?await F.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Le(){return F.available?(await F.request(`fs.recent`)).entries:[]}async function Re(){return F.available?(await F.request(`fs.frequent`)).entries:[]}async function ze(e){F.available&&await F.request(`fs.frequent.record`,{path:e})}async function Be(){await F.request(`fs.recent.clear`)}async function Ve(){await F.request(`fs.frequent.clear`)}async function He(){return await F.request(`fs.visibility`)}async function Ue(){return await F.request(`fs.hidden.toggle`)}async function We(){return F.available?await F.request(`fs.index.tasks`):{count:0,directories:[]}}var Ge={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Ke(){if(!F.available)return Ge;let e=await F.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function qe(){return F.available?(await F.request(`app.protection.defaults`)).paths??[]:[]}var Je={registered:!1,pathMatches:!1,registeredPath:null};async function G(){return F.available?await F.request(`app.defaultManager.status`):{registered:!1,pathMatches:!1,registeredPath:null}}async function Ye(){return F.available?await F.request(`app.archive.status`):Je}async function Xe(){return F.available?await F.request(`app.archive.register`):Je}async function Ze(){return F.available?await F.request(`app.archive.unregister`):Je}async function Qe(e){if(!F.available)return e;let t=await F.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function $e(e,t){F.available&&await F.request(`app.tabs.set`,{tabs:e,active:t})}async function et(e,t,n){return F.available?(await F.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var tt={managed:0,private:0,workingSet:0,available:0};async function nt(){return F.available?await F.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function rt(){return F.available?await F.request(`app.updateStatus`)??null:null}async function it(){return F.available?await F.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function at(e){return!F.available||!e?!1:(await F.request(`app.openUrl`,{url:e})).ok}async function ot(){return F.available?await F.request(`app.memory`):tt}async function st(){return F.available?await F.request(`app.memory.trim`):tt}async function ct(){return F.available?(await F.request(`app.scheme`)).registered:!1}async function lt(e){return F.available?(await F.request(`app.scheme.set`,{enabled:e})).registered:!1}var ut={supported:!1,mode:`none`,active:!1,error:null};async function dt(){return F.available?await F.request(`app.startup`):ut}async function ft(e){return F.available?await F.request(`app.startup.set`,{mode:e}):ut}async function pt(e,t=!1){return!F.available||e.length===0?!1:(await F.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function mt(){return F.available?(await F.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function ht(){return F.available?await F.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function gt(e,t,n){return!F.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await F.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function _t(e){return!F.available||e.length===0?[]:(await F.request(`fs.paths.info`,{paths:e})).entries}async function vt(e){return F.available?(await F.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function yt(e,t=!1){if(!F.available||e.length===0)return{ok:!1,error:null};let n=await F.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await he({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await F.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function bt(e,t){return F.available?await F.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function xt(e,t=!1){return F.available?await F.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function St(e){return F.available?(await F.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Ct(e,t){return F.available?await F.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function wt(e,t,n){return F.available?await F.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Tt(e,t){return F.available?await F.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Et(e){F.available&&e.length!==0&&await F.request(`fs.operation.properties`,{paths:e})}async function Dt(e){F.available&&await F.request(`fs.operation.openWith`,{path:e})}async function Ot(e){F.available&&await F.request(`fs.operation.terminal`,{path:e})}async function kt(e){return F.available?await F.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function At(e,t){return F.available?(await F.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function jt(){return F.available?await F.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Mt(){return F.available?await F.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function K(e){F.available&&await F.request(`fs.operation.showInExplorer`,{path:e})}async function Nt(e){return!F.available||e.length===0?{verbs:[],safe:!0}:await F.request(`shell.verbs`,{paths:e})}async function Pt(e,t,n,r){F.available&&e.length!==0&&await F.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Ft(e,t){return!F.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await F.request(`fs.operation.compress`,{...t,paths:e})}async function It(){return F.available?(await F.request(`app.tasks`)).tasks:[]}async function Lt(){F.available&&await F.request(`app.tasks.clear`)}var Rt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},zt=Rt.openInNewTab;function Bt(e){zt=e.trim()||Rt.openInNewTab}function Vt(e){let t=zt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Ht(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Ut(e){return e.split(`+`).filter(Boolean).map(e=>Wt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Wt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Gt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Kt=new Map;function qt(e){return c(f(e)?l(e):e)}function Jt(e){return Kt.get(qt(e))}function Yt(e,t){Kt.set(qt(e),t)}function Xt(e){Kt.delete(qt(e))}function Zt(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var Qt=new Map,$t=new Map,q=new Set,J=0;function en(){Qt.clear(),$t.clear(),J+=1,q.forEach(e=>e())}function tn(){let[e,t]=(0,D.useState)(J);return(0,D.useEffect)(()=>{let e=()=>t(J);return q.add(e),()=>{q.delete(e)}},[]),e}var nn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function rn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return nn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function an(e,t,n=!1){let r=tn(),i=e===null?``:rn(e,t,n),[a,o]=(0,D.useState)(()=>Qt.get(i)??null);return(0,D.useEffect)(()=>{if(e===null){o(null);return}if(!F.available)return;if(Qt.has(i)){o(Qt.get(i)??null);return}let r=!0;return F.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?Qt.set(i,e.dataUrl):Qt.delete(i),r&&o(e.dataUrl)},()=>{Qt.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function on(e){let[t,n]=(0,D.useState)(e);return(0,D.useEffect)(()=>{if(!e){n(null);return}if(!f(e)){n(e);return}let t=!0;return xe(e,0,Jt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function sn(e){let t=tn(),[n,r]=(0,D.useState)(()=>e?$t.get(e)??null:null);return(0,D.useEffect)(()=>{if(!e||!F.available){r(null);return}if($t.has(e)){r($t.get(e)??null);return}let t=!0;return F.request(`fs.iconFile`,{path:e}).then(n=>{$t.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{$t.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var cn=null,ln=null;function un(){return cn===null?F.available?(ln??=F.request(`app.thumbnails`).then(e=>(cn=e.base??``,cn),()=>(cn=``,``)),ln):Promise.resolve(``):Promise.resolve(cn)}function dn(e,t=128,n=0){let[r,i]=(0,D.useState)(cn);return(0,D.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return un().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function fn(e,t=0,n=``){let[r,i]=(0,D.useState)(cn);if((0,D.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return un().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function pn(e,t=0){let[n,r]=(0,D.useState)(cn);return(0,D.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return un().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var mn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},hn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function gn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=yn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Sn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var _n=`\0`,vn=``;function yn(e){return e.query!==_n&&(_n=e.query,vn=e.query.toLowerCase()),vn}var bn=`\0`,xn=null;function Sn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===bn)return xn;bn=t;try{xn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{xn=null}return xn}function Cn(e,t){return gn(e,t)!==null}var wn=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Tn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function En(e){let t=On(e);for(let{kind:e}of wn)if(Tn[e].has(t))return e;return null}function Dn(e){return En(e)!==null}function On(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var kn=(0,D.createContext)({places:{},useIcons:!1}),An=kn.Provider;function jn(){return(0,D.useContext)(kn)}function Mn(e,t){return e.places[c(t)]}function Nn(e,t,n){return Mn(e,t)?.name||n}function Pn(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function Fn(e,t){try{localStorage.setItem(e,String(t))}catch{}}function In(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function Ln(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Rn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,I.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,I.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),zn=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Bn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,I.jsx)(`path`,{d:`M14 3v4h4`})]}),Vn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,I.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,I.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Hn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,I.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),Un=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M12 19V5`}),(0,I.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Wn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,I.jsx)(`path`,{d:`M20 4v7h-7`})]}),Gn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M12 5v14`}),(0,I.jsx)(`path`,{d:`M5 12h14`})]}),Kn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M19 12H5`}),(0,I.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),qn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M5 12h14`}),(0,I.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Jn=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,I.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),Yn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,I.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),Xn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,I.jsx)(`path`,{d:`M12 12v8`})]}),Zn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,I.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),Qn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,I.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,I.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,I.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),$n=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,I.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),er=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),tr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M4 7h16`}),(0,I.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,I.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,I.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),nr=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),rr=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),ir=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,I.jsxs)(`defs`,{children:[(0,I.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,I.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,I.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,I.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,I.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,I.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,I.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,I.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,I.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,I.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),ar=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,I.jsx)(`path`,{d:`M15 3v4h4`}),(0,I.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),or=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,I.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,I.jsx)(`path`,{d:`m13 5-2 14`})]}),sr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,I.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,I.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),cr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,I.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),lr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,I.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,I.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),ur=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,I.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),dr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,I.jsx)(`path`,{d:`M15 3v4h4`}),(0,I.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),fr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,I.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),pr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,I.jsx)(`path`,{d:`M8.5 14h7`})]}),mr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,I.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,I.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),hr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,I.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),gr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,I.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),_r=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,I.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),vr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,I.jsx)(`path`,{d:`M15 3v4h4`}),(0,I.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),yr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,I.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,I.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,I.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),br=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,I.jsx)(`path`,{d:`m14 6 4 4`})]}),xr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,I.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Sr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,I.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Cr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M12 4v10`}),(0,I.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,I.jsx)(`path`,{d:`M4.5 19.5h15`})]}),wr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,I.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,I.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Tr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,I.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,I.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Er=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,I.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Dr=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Or=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,I.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),kr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,I.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,I.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Ar=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),jr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,I.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,I.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,I.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Mr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,I.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Nr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,I.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Pr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,I.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,I.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Fr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,I.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Ir=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,I.jsx)(`path`,{d:`M3.5 12h17`}),(0,I.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Lr=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Rr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,I.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),zr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,I.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,I.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),Br=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,I.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Vr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M12 16V4`}),(0,I.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,I.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),Hr=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),Ur=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,I.jsx)(`path`,{d:`M12 4v16`})]}),Wr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,I.jsx)(`path`,{d:`M15 4v16`})]}),Gr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,I.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,I.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,I.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),Kr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,I.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,I.jsx)(`path`,{d:`M12 14v2`})]}),qr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,I.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]});function Y(e,t){return({size:n=t,...r})=>(0,I.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var Jr=Y(Rn,18),Yr=Y(zn,18),Xr=Y(Bn,18),Zr=Y(Vn,18),Qr=Y(Hn,16),$r=Y(Un,16),ei=Y(Wn,16),ti=Y(Gn,16),ni=Y(Kn,16),ri=Y(qn,16),ii=Y(Jn,12),ai=Y(Yn,18),oi=Y(Xn,14),si=Y(Zn,14),ci=Y(Qn,14),li=Y($n,18),ui=Y(er,18),di=Y(tr,18),fi=Y(nr,14),pi=Y(rr,14),mi=Y(ir,18),hi=Y(ar,18),gi=Y(or,18),_i=Y(sr,18),vi=Y(cr,18),yi=Y(lr,18),bi=Y(ur,18),xi=Y(dr,18),Si=Y(fr,18),Ci=Y(pr,18),wi=Y(mr,18),Ti=Y(hr,18),Ei=Y(gr,18),Di=Y(_r,18),Oi=Y(vr,18),ki=Y(yr,18),Ai=Y(br,16),ji=Y(xr,18),Mi=Y(Sr,18),Ni=Y(Cr,18),Pi=Y(wr,18),Fi=Y(Tr,18),Ii=Y(Er,18),Li=Y(Dr,18),Ri=Y(Or,18),zi=Y(kr,18),Bi=Y(Ar,18),Vi=Y(jr,18),Hi=Y(Mr,18),Ui=Y(Nr,18),Wi=Y(Pr,18),Gi=Y(Fr,18),Ki=Y(Ir,18),qi=Y(Lr,18),Ji=Y(Rr,16),Yi=Y(zr,16),Xi=Y(Br,16),Zi=Y(Vr,16),Qi=Y(Hr,16),$i=Y(Ur,16),ea=Y(Wr,16),ta=Y(Gr,16),na=Y(Kr,14),ra=Y(qr,14);async function ia(e,t,n){return F.available?(await F.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function aa(e){return ia(`folder`,[],e??``)}function oa(e){return ia(`file`,e??[],``)}var sa=null,ca=null;function la(e){sa=e}function ua(e){return sa?sa(e):Promise.resolve()}function da(e){ca=e}function fa(e,t=!1){return ca?ca(e,t):Promise.resolve(null)}var pa=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],ma=null,ha=0,ga=new Set;function _a(){ha+=1;for(let e of ga)e()}function va(e){return ga.add(e),()=>ga.delete(e)}function ya(){return ha}function ba(e){ma=e,_a()}function xa(){return(0,D.useSyncExternalStore)(va,ya,ya),ma}var Sa=e(),Ca=n`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,wa=o`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ta=o`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ea=o`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Da=o`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Oa=o`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,ka=o`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Aa=o`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,ja=o`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Ma=n`animation: ${wa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Na=n`animation: ${Ta} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Pa=n`animation: ${Ea} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${Da} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var Fa=n`animation: ${Oa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ia=n`animation: ${ka} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,La=n`animation: ${Aa} 140ms ease-out;`,Ra=n`animation: ${ja} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function za({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,D.useState)([]),s=(0,D.useRef)(void 0);if((0,D.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,D.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,I.jsx)(Ya,{},`group-rule-${i}`)),n.push((0,I.jsx)(Ja,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,I.jsx)(Ya,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,I.jsxs)(Ga,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,I.jsx)(Ka,{children:e.loading?(0,I.jsx)(Xa,{}):e.icon}),(0,I.jsx)(qa,{children:e.label}),a?(0,I.jsx)(ii,{size:12}):e.checked&&(0,I.jsx)(fi,{size:12})]},`${e.label}-${i}`))}),n};return(0,Sa.createPortal)((0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(Ba,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Va,{children:r.map((e,t)=>(0,I.jsxs)(Ha,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,I.jsx)(Ua,{children:e.icon}),(0,I.jsx)(Wa,{children:e.label})]},`${e.label}-${t}`))}),(0,I.jsx)(Ya,{})]}),m(n,0)]}),a.map((e,t)=>(0,I.jsx)(Ba,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Ba=i.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Ca}
    ${Na}
    transform-origin: top left;
`,Va=i.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Ha=i.button`
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
`,Ua=i.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Wa=i.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ga=i.button`
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
`,Ka=i.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,qa=i.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ja=i.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Ya=i.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Xa=i.span`
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
`;function Za({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:l,onDelete:u,onCopy:d,onPaste:p,onCreateFolder:m,onCreateFile:h,creationOnly:g=!1,onRefresh:v,onAddToTray:y,onAddFavorite:ee,allowCompression:b=!1,onCompressTo:x,onArchiveCreated:te}){let S=z(),C=xa(),w=f(t),[T,E]=(0,D.useState)({verbs:[],safe:!0,loading:!1}),[ne,O]=(0,D.useState)({recommended:[],other:[],loading:!1}),[k,A]=(0,D.useState)(null),re=(0,D.useRef)(0),j=(0,D.useRef)(0),ie=e?.paths.length===1,ae=e?.background?t?[t]:[]:e?.paths??[];if((0,D.useEffect)(()=>{if(!e){E({verbs:[],safe:!0,loading:!1}),O({recommended:[],other:[],loading:!1});return}let t=++re.current;E({verbs:[],safe:!0,loading:ae.length>0&&!w}),ae.length>0&&!w&&Nt(ae).then(e=>{re.current===t&&E({...e,loading:!1})},()=>{re.current===t&&E({verbs:[],safe:!0,loading:!1})});let r=++j.current;!w&&ie&&n?(O({recommended:[],other:[],loading:!0}),kt(n.path).then(e=>{j.current===r&&O({...e,loading:!1})},()=>{j.current===r&&O({recommended:[],other:[],loading:!1})})):O({recommended:[],other:[],loading:!1})},[e,ie,n?.path,n?.isDirectory,ae.length,w]),(0,D.useEffect)(()=>{if(!e||e.background||!ie||!n?.isDirectory){A(null);return}let t=!0;return St(n.path).then(e=>{t&&A(e)},()=>{t&&A(null)}),()=>{t=!1}},[e,ie,n?.path,n?.isDirectory]),!e)return null;let M=[],N=[],P=()=>{if(!ie||!n)return`Archive`;let e=_(n.path);if(n.isDirectory)return e;let t=e.lastIndexOf(`.`);return t>0?e.slice(0,t):e},oe=async e=>{let n=await Ft(e,{directory:t,name:P(),format:`zip`,level:5});n.ok&&n.path?te?.(n.path,!0):ua(n.error??S(`Could not create the archive.`))},F=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},se=async()=>{if(!n||k===null)return;let e=await Ct(n.path,!k);e.ok?(A(e.enabled),v?.()):ua(e.error??S(`Could not change the case sensitivity.`))},ce=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await wt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await wt(e,t,`${a}\\${$a(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?v?.():ua(o.error??S(`Could not create the link.`))},L=async e=>{if(!n)return;let r=await aa(t);r&&await ce(e,n.path,r,_(n.path),e.endsWith(`-copy`))},R=async e=>{let n=C?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=c(a)===c(t);await ce(n,r.path,t,_(r.path),i&&!o)}},B=async()=>{let t=(await _t(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&ba({paths:t})},le=()=>{let e=C?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:S(`Cancel selected link`),icon:(0,I.jsx)(pi,{size:14}),onSelect:()=>ba(null)},...t?[{label:S(`Hard link`),icon:(0,I.jsx)(Xr,{size:14}),separatorBefore:!0,onSelect:()=>void R(`hard`)}]:[],{label:S(`Symbolic link`),icon:(0,I.jsx)(Xr,{size:14}),separatorBefore:!t,onSelect:()=>void R(`symbolic-file`)},...n?[{label:S(`Directory junction`),icon:(0,I.jsx)(Yr,{size:14}),onSelect:()=>void R(`junction`)},{label:S(`Smart copy`),icon:(0,I.jsx)(Ji,{size:14}),separatorBefore:!0,onSelect:()=>void R(`smart-copy`)},{label:S(`Smart mirror`),icon:(0,I.jsx)(Ji,{size:14}),onSelect:()=>void R(`smart-mirror`)},{label:S(`Multi-version smart copy`),icon:(0,I.jsx)(Ji,{size:14}),onSelect:()=>void R(`multi-version-smart-copy`)},{label:S(`Hardlink copy`),icon:(0,I.jsx)(Ji,{size:14}),separatorBefore:!0,onSelect:()=>void R(`hard-copy`)},{label:S(`Symbolic link copy`),icon:(0,I.jsx)(Ji,{size:14}),onSelect:()=>void R(`symbolic-copy`)}]:[]]};if(e.background){if(m&&N.push({label:S(`New folder`),icon:(0,I.jsx)(ti,{size:16}),shortcut:Ut(r.newFolder),onSelect:m}),h||m){let e=[];m&&(e.push({label:S(`Folder`),icon:(0,I.jsx)(Yr,{size:14}),onSelect:()=>m(!1)}),w||e.push({label:S(`Case-sensitive folder`),icon:(0,I.jsx)(Yr,{size:14}),onSelect:()=>m(!0)})),h&&e.push(...pa.map((e,t)=>({label:`${S(e.label)} (${e.extension})`,icon:(0,I.jsx)(Xr,{size:14}),separatorBefore:t===0,onSelect:()=>h(e.extension)}))),M.push({label:S(`New`),icon:(0,I.jsx)(ti,{size:14}),children:e,onSelect:()=>void 0})}if(w||M.push({label:S(`Create link`),icon:(0,I.jsx)(Zi,{size:14}),disabled:!C,children:le(),onSelect:()=>void 0}),g)return(0,I.jsx)(za,{items:M,onClose:a,quick:N,x:e.x,y:e.y});!w&&b&&(M.push({label:S(`Open in Terminal`),icon:(0,I.jsx)(Ui,{size:14}),onSelect:()=>void Ot(t)}),M.push({label:S(`Show in Explorer`),icon:(0,I.jsx)(Yr,{size:14}),separatorBefore:!0,onSelect:()=>void K(t)})),p&&N.push({label:S(`Paste`),icon:(0,I.jsx)(Xi,{size:16}),disabled:!i,shortcut:Ut(r.paste),onSelect:()=>p(t)}),v&&N.push({label:S(`Refresh`),icon:(0,I.jsx)(ei,{size:16}),shortcut:Ut(r.refresh),onSelect:v}),w||N.push({label:S(`Properties`),icon:(0,I.jsx)(ai,{size:16}),shortcut:Ut(r.properties),onSelect:()=>void Et([t])})}else{if(o&&M.push({label:S(`Open`),icon:(0,I.jsx)(ri,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&M.push({label:S(`Open in new tab`),icon:(0,I.jsx)(ti,{size:14}),onSelect:()=>o(n.path,!0)}),p&&M.push({label:S(`Paste into folder`),icon:(0,I.jsx)(Xi,{size:14}),disabled:!i,onSelect:()=>p(n.path)}),w||M.push({label:S(`Open in Terminal`),icon:(0,I.jsx)(Ui,{size:14}),onSelect:()=>void Ot(n.path)})),!w&&ie&&n){let e=[];if(ne.loading)e.push({label:S(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ne.recommended)e.push({label:t.name,group:S(`Suggested apps`),icon:t.icon?(0,I.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,I.jsx)(Si,{size:14}),onSelect:()=>void At(n.path,t.path).then(e=>{e||Dt(n.path)})});for(let t of ne.other)e.push({label:t.name,group:S(`Other apps`),icon:t.icon?(0,I.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,I.jsx)(Si,{size:14}),onSelect:()=>void At(n.path,t.path).then(e=>{e||Dt(n.path)})})}e.push({label:S(`Choose another app…`),icon:(0,I.jsx)(Si,{size:14}),separatorBefore:!0,onSelect:()=>void Dt(n.path)}),M.push({label:S(`Open with`),icon:(0,I.jsx)(Si,{size:14}),children:e,onSelect:()=>void Dt(n.path)})}if(w||M.push({label:S(`Compress`),icon:(0,I.jsx)(bi,{size:14}),separatorBefore:!0,children:[{label:S(`Compress to ZIP`),icon:(0,I.jsx)(bi,{size:14}),onSelect:()=>void oe(e.paths)},{label:S(`Compress to…`),icon:(0,I.jsx)(bi,{size:14}),onSelect:()=>x?.(e.paths,P())}],onSelect:()=>void 0}),!w&&(e?.paths.length??0)>0){let e=[{label:S(`Select link source`),icon:(0,I.jsx)(Zi,{size:14}),onSelect:()=>void B()},...C?[{label:S(`Cancel selected link`),icon:(0,I.jsx)(pi,{size:14}),onSelect:()=>ba(null)}]:[],...ie&&n?n.isDirectory?[{label:S(`Symbolic link`),icon:(0,I.jsx)(Yr,{size:14}),separatorBefore:!0,onSelect:()=>void L(`symbolic-folder`)},{label:S(`Directory junction`),icon:(0,I.jsx)(Yr,{size:14}),onSelect:()=>void L(`junction`)},{label:S(`Smart copy`),icon:(0,I.jsx)(Ji,{size:14}),separatorBefore:!0,onSelect:()=>void L(`smart-copy`)},{label:S(`Smart mirror`),icon:(0,I.jsx)(Ji,{size:14}),onSelect:()=>void L(`smart-mirror`)},{label:S(`Multi-version smart copy`),icon:(0,I.jsx)(Ji,{size:14}),onSelect:()=>void L(`multi-version-smart-copy`)},{label:S(`Hardlink copy`),icon:(0,I.jsx)(Ji,{size:14}),separatorBefore:!0,onSelect:()=>void L(`hard-copy`)},{label:S(`Symbolic link copy`),icon:(0,I.jsx)(Ji,{size:14}),onSelect:()=>void L(`symbolic-copy`)}]:[{label:S(`Symbolic link`),icon:(0,I.jsx)(Xr,{size:14}),separatorBefore:!0,onSelect:()=>void L(`symbolic-file`)},{label:S(`Hard link`),icon:(0,I.jsx)(Xr,{size:14}),onSelect:()=>void L(`hard`)}]:[]];M.push({label:S(`Create link`),icon:(0,I.jsx)(Zi,{size:14}),children:e,onSelect:()=>void 0})}!w&&n?.isDirectory&&k!==null&&M.push({label:S(`Case-sensitive names`),icon:(0,I.jsx)(Yr,{size:14}),checked:k,onSelect:()=>void se()}),M.push({label:S(`Copy as path`),icon:(0,I.jsx)(Ji,{size:14}),onSelect:()=>void F(e.paths)}),y&&M.push({label:S(`Add to file tray`),icon:(0,I.jsx)(Gi,{size:14}),onSelect:()=>y(e.paths)}),ee&&!w&&M.push({label:S(`Add to favorites`),icon:(0,I.jsx)(qi,{size:14}),onSelect:()=>ee(e.paths)}),w||M.push({label:S(`Show in Explorer`),icon:(0,I.jsx)(Yr,{size:14}),separatorBefore:!0,onSelect:()=>void K(e.paths[0])}),d&&N.push({label:S(`Cut`),icon:(0,I.jsx)(Yi,{size:16}),shortcut:Ut(r.cut),onSelect:()=>d(e.paths,!0)},{label:S(`Copy`),icon:(0,I.jsx)(Ji,{size:16}),shortcut:Ut(r.copy),onSelect:()=>d(e.paths,!1)}),ie&&n&&l&&N.push({label:S(`Rename`),icon:(0,I.jsx)(Ai,{size:16}),shortcut:Ut(r.rename),onSelect:()=>l(n.path)}),u&&N.push({label:S(`Delete`),icon:(0,I.jsx)(di,{size:16}),danger:!0,shortcut:Ut(r.delete),onSelect:()=>u(e.paths)}),w||N.push({label:S(`Properties`),icon:(0,I.jsx)(ai,{size:16}),shortcut:Ut(r.properties),onSelect:()=>void Et(e.paths)})}if(T.loading)M.push({label:S(`More actions`),icon:(0,I.jsx)(Si,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(T.verbs.length>0){let e={items:[],children:new Map};for(let t of T.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,I.jsx)(Qa,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Pt(ae,T.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];M.push({label:S(T.safe?`More actions`:`More actions (extensions)`),icon:(0,I.jsx)(Si,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,I.jsx)(za,{items:M,onClose:a,quick:N,x:e.x,y:e.y})}function Qa({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,I.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,I.jsx)(ri,{size:14});case`document`:return(0,I.jsx)(Oi,{size:14});case`cut`:return(0,I.jsx)(Yi,{size:14});case`copy`:return(0,I.jsx)(Ji,{size:14});case`paste`:return(0,I.jsx)(Xi,{size:14});case`trash`:return(0,I.jsx)(di,{size:14});case`pencil`:return(0,I.jsx)(Ai,{size:14});case`gear`:return(0,I.jsx)(ai,{size:14});case`star`:return(0,I.jsx)(Li,{size:14});case`pin`:return(0,I.jsx)(oi,{size:14});case`executable`:return(0,I.jsx)(Si,{size:14});case`share`:return(0,I.jsx)(Zi,{size:14});case`arrow`:return(0,I.jsx)(ri,{size:14});default:return(0,I.jsx)(mi,{size:14})}}function $a(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function eo({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let[c,l]=(0,D.useState)(null),u=(0,D.useRef)(null),d=t.find(t=>t.value===e)??t[0];return(0,D.useEffect)(()=>{if(!c)return;let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&u.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[c]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(to,{$icon:a!==void 0,"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(c){l(null);return}let e=u.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;l({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:u,style:i&&!a?{width:i}:void 0,title:o??d?.title,type:`button`,children:[a===void 0?(0,I.jsx)(no,{children:d?.label??``}):(0,I.jsx)(ro,{children:a}),a===void 0&&(0,I.jsx)(io,{children:(0,I.jsx)(ii,{size:11})})]}),c&&(0,Sa.createPortal)((0,I.jsx)(ao,{"aria-label":`options`,"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:c.bottom,left:c.left,minWidth:c.width,top:c.top},children:t.map(t=>(0,I.jsxs)(oo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),l(null)},role:`option`,title:t.title,type:`button`,children:[(0,I.jsx)(so,{children:t.label}),t.value===e&&(0,I.jsx)(fi,{size:11})]},t.value))}),document.body)]})}var to=i.button`
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
`,no=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ro=i.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,io=i.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,ao=i.div`
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
    ${Na}
`,oo=i.button`
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
`,so=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,co=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],lo=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],uo=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],fo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],po=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function mo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=z(),a=(0,D.useRef)(null),[o,s]=(0,D.useState)(e),[c,l]=(0,D.useState)(t),[u,d]=(0,D.useState)(`zip`),[f,p]=(0,D.useState)(`5`),[m,h]=(0,D.useState)(`default`),[g,_]=(0,D.useState)(`none`),[v,y]=(0,D.useState)(``),[ee,b]=(0,D.useState)(`0`),[x,te]=(0,D.useState)(!1);(0,D.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let S=co.find(e=>e.value===u)??co[0],C=u===`zip`||u===`zipx`,w=g!==`none`,T=C||u===`7z`,E=u===`zip`||u===`7z`,ne=async()=>{if(x||!c.trim()||!o||w&&v.length===0)return;te(!0);let e=await r({directory:o,name:c.trim(),format:u,level:S.level?Number(f):0,method:C?m:null,encryption:T?g:`none`,password:w?v:void 0,splitSize:E?Number(ee):0});te(!1),e&&n()};return(0,Sa.createPortal)((0,I.jsx)(ho,{onPointerDown:e=>{e.target===e.currentTarget&&!x&&n()},children:(0,I.jsxs)(go,{"aria-modal":`true`,role:`dialog`,children:[(0,I.jsx)(_o,{children:i(`Compress to…`)}),(0,I.jsxs)(vo,{children:[(0,I.jsx)(yo,{children:i(`Archive name`)}),(0,I.jsx)(bo,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ne()}}),(0,I.jsx)(xo,{children:S.extension})]}),(0,I.jsxs)(vo,{children:[(0,I.jsx)(yo,{children:i(`Format`)}),(0,I.jsx)(eo,{onChange:e=>d(e),options:co.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,I.jsxs)(vo,{children:[(0,I.jsx)(yo,{children:i(`Method`)}),(0,I.jsx)(eo,{disabled:!C,onChange:h,options:lo.map(e=>({...e,label:i(e.label)})),value:C?m:`default`,width:236,zIndex:3700})]}),(0,I.jsxs)(vo,{children:[(0,I.jsx)(yo,{children:i(`Encryption`)}),(0,I.jsx)(eo,{disabled:!T,onChange:e=>{_(e),e===`none`&&y(``)},options:uo.map(e=>({...e,label:i(e.label)})),value:T?g:`none`,width:236,zIndex:3700})]}),w&&(0,I.jsxs)(vo,{children:[(0,I.jsx)(yo,{children:i(`Password`)}),(0,I.jsx)(bo,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,I.jsxs)(vo,{children:[(0,I.jsx)(yo,{children:i(`Split volumes`)}),(0,I.jsx)(eo,{disabled:!E,onChange:b,options:fo.map(e=>({...e,label:i(e.label)})),value:E?ee:`0`,width:236,zIndex:3700})]}),(0,I.jsxs)(vo,{children:[(0,I.jsx)(yo,{children:i(`Compression level`)}),(0,I.jsx)(eo,{disabled:!S.level,onChange:p,options:po.map(e=>({...e,label:i(e.label)})),value:S.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,I.jsxs)(vo,{$stack:!0,children:[(0,I.jsx)(yo,{children:i(`Destination`)}),(0,I.jsxs)(So,{children:[(0,I.jsx)(Co,{title:o,children:o}),(0,I.jsx)(To,{disabled:x,onClick:()=>void aa(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,I.jsxs)(wo,{children:[(0,I.jsx)(To,{disabled:x,onClick:n,type:`button`,children:i(`Cancel`)}),(0,I.jsx)(Eo,{disabled:x||!c.trim()||w&&v.length===0,onClick:()=>void ne(),type:`button`,children:i(x?`Compressing…`:`Compress`)})]})]})}),document.body)}var ho=i.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${La}
`,go=i.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ma}
`,_o=i.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,vo=i.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,yo=i.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,bo=i.input`
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
`,xo=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,So=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Co=i.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wo=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,To=i.button`
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
`,Eo=i(To)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Do({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=z(),c=(0,D.useRef)(null);return(0,D.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Sa.createPortal)((0,I.jsx)(Oo,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,I.jsxs)(ko,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(Ao,{children:t}),(0,I.jsx)(jo,{children:n}),(0,I.jsxs)(Mo,{children:[(0,I.jsx)(No,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,I.jsx)(No,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Oo=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${La}
`,ko=i.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ma}
`,Ao=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,jo=i.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Mo=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,No=i.button`
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
`,Po=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Fo=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Io=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Lo=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Ro({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=z(),[l,u]=(0,D.useState)(!1),[d,f]=(0,D.useState)(!1),[p,m]=(0,D.useState)(!1),[h,g]=(0,D.useState)(0),[_,v]=(0,D.useState)(0),[y,ee]=(0,D.useState)(null),[b,x]=(0,D.useState)(!1),[te,S]=(0,D.useState)(!1),C=(0,D.useRef)(null),w=(0,D.useRef)(null),T=(0,D.useRef)(null),E=(0,D.useRef)(null),[ne,O]=(0,D.useState)(()=>{let e=Pn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),k=e?.path??null,A=on(k),re=e?zo(e.name):``,j=!!e&&!e.isDirectory&&Po.has(re),ie=!!e&&!e.isDirectory&&Fo.has(re),ae=!!e&&!e.isDirectory&&Io.has(re),M=!!e&&!e.isDirectory&&Lo.has(re),N=!!e&&!e.isDirectory&&re===`pdf`,P=dn(j?A:null,512,e?.modified??0),oe=fn(ae?A:null,e?.modified??0,re),F=fn(j||ie?A:null,e?.modified??0,re),se=pn(N?A:null,e?.modified??0),ce=an(!j&&!ie&&!ae&&!M&&!N?A:null,e?.isDirectory??!1);if((0,D.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),S(!1)},[k]),(0,D.useEffect)(()=>{if(!A||!M){ee(null),x(!1);return}let e=!0;return x(!0),ee(null),W(A).then(t=>{e&&(ee(t),x(!1))},()=>{e&&(ee({text:null,truncated:!1,error:`Could not read this file.`}),x(!1))}),()=>{e=!1}},[A,M]),!e&&!s)return null;let L=e=>{T.current={x:e.clientX,width:w.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},R=e=>{let t=T.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},B=e=>{T.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},le=e=>{E.current={y:e.clientY,height:ne},e.currentTarget.setPointerCapture(e.pointerId)},ue=e=>{let t=E.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));O(n),Fn(`yafm.preview.media.height`,n)},de=e=>{E.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,I.jsxs)(Vo,{children:[r&&(0,I.jsx)(Ho,{onPointerDown:L,onPointerMove:R,onPointerUp:B,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,I.jsx)(Uo,{ref:w,style:{width:r?t:0},children:(0,I.jsxs)(Wo,{children:[(0,I.jsx)(Yr,{size:56}),(0,I.jsx)(`span`,{children:s})]})})]});let fe=()=>{let e=C.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,I.jsxs)(Vo,{children:[r&&(0,I.jsx)(Ho,{onPointerDown:L,onPointerMove:R,onPointerUp:B,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,I.jsxs)(Uo,{ref:w,style:{width:r?t:0},children:[(0,I.jsx)(Go,{style:{height:ne},children:j&&F&&!l?(0,I.jsxs)(qo,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,I.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:fe,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:P??void 0,preload:`metadata`,ref:C,src:F}),(0,I.jsx)(Jo,{$visible:!d,onClick:fe,title:c(`Play`),type:`button`,children:(0,I.jsx)(Qi,{size:28})}),(0,I.jsxs)(Yo,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,I.jsxs)(Xo,{children:[(0,I.jsx)(`span`,{children:Bo(_)}),(0,I.jsx)(`span`,{children:Bo(h)})]}),(0,I.jsx)(Zo,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=C.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):ie&&F?(0,I.jsx)(`audio`,{controls:!0,src:F}):ae&&oe?(0,I.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:oe}):N&&se&&!te?(0,I.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>S(!0),src:se}):N?(0,I.jsx)(Xr,{size:64}):M?(0,I.jsx)(Qo,{children:b||!y?(0,I.jsx)(es,{children:c(`Loading…`)}):y.error?(0,I.jsx)(es,{children:y.error}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)($o,{children:y.text}),y.truncated&&(0,I.jsx)(es,{children:c(`Showing the first 256 KB.`)})]})}):j&&P?(0,I.jsx)(`img`,{alt:``,src:P}):ce?(0,I.jsx)(`img`,{alt:``,src:ce}):e.isDirectory?(0,I.jsx)(Yr,{size:64}):(0,I.jsx)(Xr,{size:64})}),(0,I.jsx)(Ko,{onDoubleClick:()=>{O(210),Fn(`yafm.preview.media.height`,210)},onPointerDown:le,onPointerMove:ue,onPointerUp:de,title:c(`Drag to resize; double-click to reset`)}),(0,I.jsxs)(ts,{children:[(0,I.jsx)(ns,{title:e.path,children:e.name}),o&&(0,I.jsx)(rs,{children:o}),(0,I.jsx)(is,{children:e.fields.map(e=>(0,I.jsxs)(as,{children:[(0,I.jsx)(os,{children:e.label}),(0,I.jsx)(ss,{title:e.value,children:e.value})]},e.label))})]})]})]})}function zo(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Bo(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Vo=i.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    min-width: 220px;
    min-height: 0;
`,Ho=i.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Uo=i.aside`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    background: var(--bg-secondary);
    font-family: var(--font-details), var(--font-cjk);
    transition: width 180ms cubic-bezier(0.22, 1, 0.36, 1);
`,Wo=i.div`
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
`,Go=i.div`
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
`,Ko=i.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,qo=i.div`
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
`,Jo=i.button`
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
`,Yo=i.div`
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
`,Xo=i.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,Zo=i.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Qo=i.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,$o=i.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,es=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,ts=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,ns=i.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,rs=i.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,is=i.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,as=i.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,os=i.span`
    color: var(--text-muted);
`,ss=i.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,cs=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],ls=[...cs],us={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},ds={folder:e=>(0,I.jsx)(Yr,{size:e}),home:e=>(0,I.jsx)(Jr,{size:e}),desktop:e=>(0,I.jsx)(ji,{size:e}),documents:e=>(0,I.jsx)(Mi,{size:e}),downloads:e=>(0,I.jsx)(Ni,{size:e}),pictures:e=>(0,I.jsx)(Pi,{size:e}),music:e=>(0,I.jsx)(Fi,{size:e}),videos:e=>(0,I.jsx)(Ii,{size:e}),drive:e=>(0,I.jsx)(Zr,{size:e}),image:e=>(0,I.jsx)(_i,{size:e}),video:e=>(0,I.jsx)(vi,{size:e}),audio:e=>(0,I.jsx)(yi,{size:e}),text:e=>(0,I.jsx)(hi,{size:e}),code:e=>(0,I.jsx)(gi,{size:e}),clock:e=>(0,I.jsx)(li,{size:e}),star:e=>(0,I.jsx)(Li,{size:e}),file:e=>(0,I.jsx)(Xr,{size:e}),archive:e=>(0,I.jsx)(bi,{size:e}),pdf:e=>(0,I.jsx)(xi,{size:e}),executable:e=>(0,I.jsx)(Si,{size:e}),font:e=>(0,I.jsx)(Ci,{size:e}),database:e=>(0,I.jsx)(wi,{size:e}),config:e=>(0,I.jsx)(Ti,{size:e}),spreadsheet:e=>(0,I.jsx)(Ei,{size:e}),presentation:e=>(0,I.jsx)(Di,{size:e}),document:e=>(0,I.jsx)(Oi,{size:e}),app:e=>(0,I.jsx)(mi,{size:e}),gear:e=>(0,I.jsx)(ai,{size:e}),pin:e=>(0,I.jsx)(oi,{size:e}),trash:e=>(0,I.jsx)(di,{size:e}),overview:e=>(0,I.jsx)(ki,{size:e}),book:e=>(0,I.jsx)(Ri,{size:e}),briefcase:e=>(0,I.jsx)(zi,{size:e}),cloud:e=>(0,I.jsx)(Bi,{size:e}),gamepad:e=>(0,I.jsx)(Vi,{size:e}),camera:e=>(0,I.jsx)(Hi,{size:e}),terminal:e=>(0,I.jsx)(Ui,{size:e}),server:e=>(0,I.jsx)(Wi,{size:e}),package:e=>(0,I.jsx)(Gi,{size:e}),globe:e=>(0,I.jsx)(Ki,{size:e}),heart:e=>(0,I.jsx)(qi,{size:e}),share:e=>(0,I.jsx)(Wi,{size:e}),favorites:e=>(0,I.jsx)(qi,{size:e})};function fs(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function ps(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??cs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||ls.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=fs(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${us[n]??n}${ms(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function ms(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function hs({panel:e,size:t=16}){let n=sn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,I.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?ds[e.icon]:void 0;if(r)return(0,I.jsx)(I.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,I.jsx)(Yr,{size:t});case`recent`:return(0,I.jsx)(li,{size:t});case`frequent`:return(0,I.jsx)(Li,{size:t});case`drives`:return(0,I.jsx)(Zr,{size:t});case`home`:return(0,I.jsx)(Jr,{size:t});case`share`:return(0,I.jsx)(Wi,{size:t});case`favorites`:return(0,I.jsx)(qi,{size:t});default:return(0,I.jsx)(Yr,{size:t})}}function gs({place:e,size:t=18}){let n=sn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,I.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&ds[e.icon]?(0,I.jsx)(I.Fragment,{children:ds[e.icon](t)}):(0,I.jsx)(Yr,{size:t})}var _s=`#64748b`;function vs(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function ys({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=z(),[c,l]=(0,D.useState)(``),[u,d]=(0,D.useState)(`#2dd4bf`),f=(0,D.useRef)(null);(0,D.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Sa.createPortal)((0,I.jsxs)(bs,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,I.jsxs)(xs,{children:[(0,I.jsx)(`span`,{children:s(`Tags`)}),(0,I.jsx)(Ss,{onClick:o,title:s(`Close`),type:`button`,children:(0,I.jsx)(pi,{size:11})})]}),(0,I.jsxs)(Cs,{children:[p.length===0&&(0,I.jsx)(Ds,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,I.jsxs)(ws,{children:[(0,I.jsx)(Ts,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,I.jsxs)(Es,{$color:t,$ink:vs(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,I.jsx)(fi,{size:11}),(0,I.jsx)(`span`,{children:e})]})]},e)})]}),(0,I.jsxs)(Os,{children:[(0,I.jsx)(Ts,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,I.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,I.jsx)(ks,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var bs=i.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${Ma}
`,xs=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Ss=i.button`
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
`,Cs=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,ws=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ts=i.input`
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
`,Es=i.button`
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
`,Ds=i.span`
    font-size: 11px;
    color: var(--text-muted);
`,Os=i.div`
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
`,ks=i.button`
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
`,As={file:Xr,folder:Yr,text:hi,code:gi,image:_i,video:vi,audio:yi,archive:bi,pdf:xi,executable:Si,font:Ci,database:wi,config:Ti,spreadsheet:Ei,presentation:Di,document:Oi},js={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Ms(e){let t=e.lastIndexOf(`.`);return t>0?js[e.slice(t).toLowerCase()]??`file`:`file`}function Ns({name:e,size:t}){let n=As[e??`file`]??Xr;return(0,I.jsx)(n,{size:t})}function Ps({path:e,name:t,isDirectory:n,size:r=18}){let i=an(e,n);return i?(0,I.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,I.jsx)(Yr,{size:r}):(0,I.jsx)(Ns,{name:Ms(t),size:r})}var Fs=`application/x-yafm-paths`,Is=[Fs,`text/uri-list`];function Ls(e){return e?.types.some(e=>Is.includes(e.toLowerCase()))??!1}function Rs(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Fs);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Bs).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var zs=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Bs(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return zs?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Vs(e,t,n=!0){e.dataTransfer.setData(Fs,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Hs({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=z(),[m,h]=(0,D.useState)(()=>new Set),[g,_]=(0,D.useState)(!1),v=(0,D.useRef)(null),y=(0,D.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),ee=(0,D.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),b=(0,D.useRef)(null);if((0,D.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=b.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Ls(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Rs(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let x=new Set([...e,...t].map(e=>e.path)),te=x.size>0&&[...x].every(e=>m.has(e)),S=x.size,C=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},w=()=>{h(te?new Set:x)},T=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},ne=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},O=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},k=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},A=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},re=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of ee)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},j=(e,t)=>{let n=m.has(e.path);return(0,I.jsxs)(ec,{$checked:n,draggable:!0,onClick:()=>C(e.path),onDragStart:r=>{Vs(r,n&&m.size>0?[...new Set([...y,...ee].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,I.jsx)(tc,{$checked:n,onClick:t=>{t.stopPropagation(),C(e.path)},type:`button`,children:n&&(0,I.jsx)(fi,{size:8})}),(0,I.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,I.jsxs)(nc,{children:[(0,I.jsx)(rc,{children:e.name}),(0,I.jsx)(ic,{children:E(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},ie=e=>{Ls(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,I.jsxs)(Us,{$dragging:g,"data-tray":`true`,ref:b,style:{left:i.x,top:i.y},onDragEnter:ie,onDragOver:ie,onDrop:e=>{let{paths:t}=Rs(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,I.jsxs)(Ws,{onPointerDown:T,onPointerMove:ne,onPointerUp:O,children:[(0,I.jsxs)(Gs,{children:[(0,I.jsx)(Gi,{size:13}),p(`Tray`),(0,I.jsx)(Ks,{children:S})]}),(0,I.jsxs)(qs,{onPointerDown:e=>e.stopPropagation(),children:[(0,I.jsx)(Js,{onClick:w,title:p(te?`Select none`:`Select all`),type:`button`,children:p(te?`None`:`All`)}),(0,I.jsx)(Js,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,I.jsx)(Ys,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,I.jsx)(pi,{size:10})})]})]}),(0,I.jsxs)(Xs,{children:[(0,I.jsxs)(Qs,{children:[p(`In this app`),(0,I.jsx)(Ks,{children:e.length})]}),e.length===0&&(0,I.jsx)(Zs,{children:p(`Drag files or folders here`)}),e.map(e=>j(e,!0)),t.length>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(Qs,{$clipboard:!0,children:[p(`Clipboard`),(0,I.jsx)(Ks,{children:t.length}),n&&(0,I.jsx)($s,{children:p(`cut`)})]}),t.map(e=>j(e,n))]})]}),(0,I.jsxs)(ac,{children:[(0,I.jsx)(oc,{$plain:!0,disabled:y.length===0,onClick:A,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,I.jsx)(oc,{disabled:m.size===0||!a,onClick:re,type:`button`,children:p(`Move here`)}),(0,I.jsx)(oc,{$danger:!0,disabled:y.length===0,onClick:k,type:`button`,children:p(`Remove`)})]})]})}var Us=i.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Ca}
    ${Ma}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Ws=i.div`
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
`,Gs=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,Ks=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,qs=i.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Js=i.button`
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
`,Ys=i.button`
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
`,Xs=i.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,Zs=i.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Qs=i.div`
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
`,$s=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,ec=i.div`
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
`,tc=i.button`
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
`,nc=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,rc=i.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ic=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ac=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,oc=i.button`
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
`,sc=new Map,cc=new Set,lc=0;function uc(){lc+=1;for(let e of cc)e()}function dc(e,t){t?sc.set(e,t):sc.delete(e),uc()}function fc(e){return sc.has(e)}function pc(e,t,n){sc.get(e)?.(t,n)}function mc(e){return cc.add(e),()=>cc.delete(e)}function hc(){return lc}function gc(e){return(0,D.useSyncExternalStore)(mc,hc,hc),{available:fc(e),open:(t,n)=>pc(e,t,n)}}function _c(e){return[...sc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function vc(e){return(0,D.useSyncExternalStore)(mc,hc,hc),{available:_c(e).length>0,open:(t,n)=>{let r=_c(e).at(-1);r&&pc(r,t,n)}}}var yc=60,bc=300,xc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Sc=190,Cc=120;function wc({listing:e,loading:t,error:n,find:r=hn,view:i,showImages:o,imageStripHeight:s=Sc,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:f,onOpenFile:p,showCheckboxes:m=!0,openOnSingleClick:h=!1,shortcuts:g=Rt,enableShortcuts:y=!0,refreshToken:ee=0,onRefresh:b,onRename:x,onClipboardChanged:te,onTransfer:S,onAddToTray:C,onAddFavorite:w,onPaste:T,confirmDelete:E=!1,previewVideoAudio:ne=!1,previewVideoAutoplay:O=!1,showDetails:k=!0,onPreviewInfo:A,onActivate:re,groupOf:j,onGridScroll:ie,gridFooter:ae,allowBackgroundMenu:M=!0,readOnly:N=!1,onSelectionChange:P,onSelectionCountChange:oe,selectionMenuRequest:F,selectionMenuId:se,singleSelect:ce=!1,pendingRename:L=null,pendingRenameToken:R=0}){let B=z(),le=jn(),ue=(0,D.useRef)(null),de=(0,D.useRef)(null),fe=(0,D.useRef)(null),[V,pe]=(0,D.useState)(bc),[H,me]=(0,D.useState)({top:0,height:640}),he=(0,D.useRef)(null),U=(0,D.useRef)(null),[ge,_e]=(0,D.useState)(null),[ve,ye]=(0,D.useState)(s),[be,xe]=(0,D.useState)(()=>new Set),Se=(0,D.useRef)(be),W=(0,D.useRef)([]);Se.current=be,(0,D.useEffect)(()=>P?.([...be]),[be,P]),(0,D.useEffect)(()=>oe?.(be.size),[be,oe]),(0,D.useEffect)(()=>{let e=F;if(!e||e.token===Te.current)return;Te.current=e.token;let t=[...Se.current];t.length!==0&&(we({x:e.x,y:e.y,paths:t,background:!1}),mt().then(ze,()=>ze(!1)))},[F]);let[Ce,we]=(0,D.useState)(null),Te=(0,D.useRef)(0),[Ee,De]=(0,D.useState)(null),[Oe,ke]=(0,D.useState)(null),[Ae,je]=(0,D.useState)(null),Me=(0,D.useRef)(Ae);Me.current=Ae;let Ne=(0,D.useRef)(0),Pe=(0,D.useRef)(re);Pe.current=re;let[Fe,Ie]=(0,D.useState)(()=>{let e=Pn(`yafm.preview.width`,320);return e>=220?e:320}),Le=(0,D.useCallback)(e=>{Ie(e),Fn(`yafm.preview.width`,e)},[]),[Re,ze]=(0,D.useState)(!1),Be=(0,D.useCallback)((e,t)=>{let n=[...Se.current];n.length!==0&&(we({x:e,y:t,paths:n,background:!1}),mt().then(ze,()=>ze(!1)))},[]);(0,D.useEffect)(()=>{if(se)return dc(se,be.size>0?Be:null),()=>dc(se,null)},[se,be,Be]),(0,D.useEffect)(()=>{xe(new Set),je(null),we(null),U.current=null},[e?.path]),(0,D.useEffect)(()=>{ye(s)},[s]),(0,D.useEffect)(()=>{xe(new Set),je(null),U.current=null},[ee]);let Ve=e=>{he.current={y:e.clientY,height:ve},e.currentTarget.setPointerCapture(e.pointerId)},He=e=>{let t=he.current;if(!t)return;let n=Math.max(Cc,Math.round(window.innerHeight*.7));ye(Math.min(n,Math.max(Cc,t.height+t.y-e.clientY)))},Ue=e=>{he.current&&(he.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(ve))},We=()=>{ye(Sc),c?.(Sc)},Ge=r.query.length>0,Ke=(0,D.useMemo)(()=>xc.filter(e=>i.columns?.includes(e.id)),[i.columns]),qe=i.columns?.includes(`linkTarget`)??!1,Je=(0,D.useMemo)(()=>`minmax(160px, 1fr) ${Ke.map(e=>`${e.width}px`).join(` `)}`.trim(),[Ke]),G=(0,D.useMemo)(()=>e?Dc(e.entries.map(t=>{let n=t.isDirectory?Mn(le,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:Ge?gn(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!Ge||r.mode===`dim`||e.ranges!==null),i,e,B):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,Ge,r,le,i.sort,i.sortDescending,B]);W.current=G;let Ye=Math.max(40,i.iconSize+20),Xe=Math.max(0,Math.floor(H.top/Ye)-4),Ze=Math.min(G.length,Xe+Math.ceil(H.height/Ye)+10),Qe=(0,D.useMemo)(()=>G.slice(Xe,Ze),[G,Xe,Ze]);(0,D.useEffect)(()=>{let e=fe.current;if(!e||i.mode!==`list`)return;let t=()=>me(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,D.useEffect)(()=>{me(e=>({...e,top:0})),fe.current&&(fe.current.scrollTop=0)},[e?.path]),(0,D.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=G.findIndex(e=>e.entry.fullPath===r.currentPath),t=fe.current;if(e<0||!t)return;let n=e*Ye;(n<t.scrollTop||n+Ye>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ue.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,G,Ye]);let $e=(0,D.useMemo)(()=>G.slice(0,V),[G,V]);(0,D.useEffect)(()=>{pe(bc)},[e?.path]),(0,D.useEffect)(()=>{if(!r.currentPath)return;let e=G.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&pe(t=>Math.max(t,e+bc))},[r.currentPath,G]);let et=(0,D.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&pe(e=>Math.min(G.length,e+bc))},[G.length]),tt=i.mode===`grid`,nt=(0,D.useMemo)(()=>{if(!tt)return[];if(!j)return Ac($e,kc);let e=[],t=new Map;for(let n of $e){let r=j(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[$e,tt,j]),rt=(0,D.useMemo)(()=>o?G.filter(e=>!e.entry.isDirectory&&Dn(e.entry.name)):[],[G,o]),it=rt.length,at=(0,D.useMemo)(()=>rt.slice(0,yc),[rt]),ot=(0,D.useMemo)(()=>o?Ac(at,Oc):[],[at,o]),st=(0,D.useMemo)(()=>G.map(e=>e.entry.fullPath),[G]),ct=G.length>0&&be.size>=G.length,lt=be.size>0&&!ct,ut=()=>{ce||(ct?gt():xe(new Set(st)))},dt=e?.path??``,ft=(0,D.useCallback)((e,t)=>{if(ce){U.current=t,xe(new Set([t]));return}let n=e.ctrlKey||e.metaKey;xe(r=>{if(e.shiftKey&&U.current!==null){let e=st.indexOf(U.current),i=st.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(st[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),U.current=t,e}return U.current=t,new Set([t])})},[st,ce]),ht=(0,D.useCallback)(e=>{ce?(U.current=e,xe(new Set([e]))):(U.current=e,xe(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[ce]),gt=(0,D.useCallback)(()=>{U.current=null,xe(new Set)},[]);(0,D.useEffect)(()=>{if(R===0||!L||Ne.current===R||!e?.entries.some(e=>e.fullPath===L))return;Ne.current=R,U.current=L,xe(new Set([L])),je({path:L,value:_(L)});let t=G.findIndex(e=>e.entry.fullPath===L),n=fe.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*Ye;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(L)}"]`)?.scrollIntoView({block:`nearest`})})}},[fe,e,L,R,Ye,G,i.mode]),(0,D.useEffect)(()=>{if(!Ae)return;let e=G.findIndex(e=>e.entry.fullPath===Ae.path),t=fe.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*Ye;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ae.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[fe,Ae,Ye,G,i.mode]);let _t=(0,D.useCallback)(()=>we(null),[]),St=(0,D.useCallback)((e,t)=>{e.isDirectory?f(e.fullPath,Vt(t)):p?.(e.fullPath,Vt(t))},[f,p]),Ct=(0,D.useCallback)((e,t,n)=>{_e({entry:e,x:t,y:n})},[]),wt=(0,D.useRef)(null),Dt=(0,D.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Vs(e,be.has(n)?[...be]:[n])},[be]),kt=(0,D.useCallback)(e=>{if(!Ls(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);wt.current=t?.dataset.directory===`true`?t.dataset.path??dt:dt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[dt]),At=(0,D.useCallback)(e=>{if(N)return;let{paths:t,move:n}=Rs(e),r=wt.current??dt;wt.current=null,t.length!==0&&S&&(e.preventDefault(),S(t,r,!e.ctrlKey&&n))},[dt,S,N]),jt=(0,D.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),N||!t&&!M)return;let n=Se.current;t&&!n.has(t)&&xe(new Set([t])),t&&(U.current=t);let r=t?n.has(t)?[...n]:[t]:[];we({x:e.clientX,y:e.clientY,paths:r,background:!t}),mt().then(ze,()=>ze(!1))},[M,dt]),Mt=(0,D.useCallback)(()=>b?.(),[b]),K=(e,t)=>{U.current=e,xe(new Set([e])),t&&je({path:e,value:_(e)}),Mt()},Nt=Ee&&(0,I.jsx)(mo,{initialDirectory:dt,initialName:Ee.name,onCancel:()=>De(null),onCompress:async e=>{let t=await Ft(Ee.paths,e);return!t.ok||!t.path?(ua(t.error??B(`Could not create the archive.`)),!1):(K(t.path,!1),!0)}}),Pt=async(e,t=!1)=>{await pt(e,t)&&(ze(!0),te?.())},It=async e=>{e&&(await vt(e)?(Mt(),T?.()):ua(B(`Nothing on the clipboard could be pasted here.`)))},Lt=async(e,t=!1)=>{if(!dt)return;let n=e===null?await xt(dt,t):await Tt(dt,e);!n.ok||n.path===null?ua(n.error??B(`Could not create the item.`)):(U.current=n.path,xe(new Set([n.path])),je({path:n.path,value:_(n.path)}),Mt())},zt=e=>{xe(new Set([e.fullPath])),U.current=e.fullPath,je({path:e.fullPath,value:e.name})},Bt=(0,D.useCallback)(e=>je(t=>t&&{...t,value:e}),[]),Ut=(0,D.useCallback)(()=>je(null),[]),Wt=(0,D.useCallback)(async()=>{let e=Me.current;if(je(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=W.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await bt(e.path,t);r.ok?(gt(),r.path&&x?.(e.path,r.path),Mt(),window.setTimeout(()=>Mt(),250)):ua(r.error??B(`Could not rename the entry.`))},[gt,x,Mt,B]),Kt=async(e,t=!1)=>{if((t||E)&&!await qt(e,t))return;let n=await yt(e,t);if(!n.ok&&n.needsPermanent){if(!await qt(e,!0))return;n=await yt(e,!0)}if(n.ok)gt(),Mt();else{if(n.cancelled)return;ua(n.error??B(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},qt=(0,D.useCallback)((e,t)=>new Promise(n=>ke({paths:e,permanent:t,resolve:n})),[]),Jt=(0,D.useCallback)(e=>{ke(t=>(t?.resolve(e),null))},[]);(0,D.useEffect)(()=>{if(!y||Ce)return;let e=e=>{if(Gt(e.target))return;Pe.current?.();let t=Ht(e),n=[...be],r=n.length===1?G.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(st.length===0)return;e.preventDefault();let n=U.current&&st.includes(U.current)?U.current:be.size===1?[...be][0]:null,r=n?st.indexOf(n):-1,i=t===`home`?0:t===`end`?st.length-1:Math.max(0,Math.min(st.length-1,r+(t===`arrowdown`?1:-1))),a=st[i];xe(new Set([a])),U.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===g.copy?i(()=>{n.length>0&&Pt(n)}):t===g.cut?i(()=>{n.length>0&&Pt(n,!0)}):t===g.paste?i(()=>void It(dt)):t===g.delete?i(()=>{n.length>0&&Kt(n)}):t===g.deletePermanently?i(()=>{n.length>0&&Kt(n,!0)}):t===g.selectAll?i(()=>{xe(new Set(st)),U.current=st[0]??null}):t===g.invertSelection?i(()=>{xe(new Set(st.filter(e=>!be.has(e)))),U.current=st[0]??null}):t===g.rename&&r?i(()=>void zt(r)):t===g.open&&r?i(()=>{r.isDirectory?f(r.fullPath):p?.(r.fullPath)}):t===g.newFolder||t===`f10`?i(()=>void Lt(null)):t===g.terminal?i(()=>void Ot(dt)):t===g.properties?i(()=>void Et(n.length>0?n:dt?[dt]:[])):t===g.refresh&&i(Mt)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[st,Pt,Lt,dt,y,Ce,f,p,It,Mt,Kt,zt,G,be,g]);let Yt=Oe&&(0,I.jsx)(Do,{confirmLabel:Oe.permanent?B(`Delete`):B(`Move`),danger:Oe.permanent,message:Oe.permanent?B(`Permanently delete {target}? This cannot be undone.`,{target:Oe.paths.length===1?B(`this item`):B(`{count} items`,{count:Oe.paths.length})}):B(`Move {target} to the recycle bin?`,{target:Oe.paths.length===1?B(`this item`):B(`{count} items`,{count:Oe.paths.length})}),onCancel:()=>Jt(!1),onConfirm:()=>Jt(!0),open:!0,title:Oe.permanent?B(`Delete permanently`):B(`Move to the recycle bin`)}),Xt=(0,D.useMemo)(()=>{if(!e||be.size===0)return null;let t=st.find(e=>be.has(e));return t?G.find(e=>e.entry.fullPath===t)?.entry??null:null},[st,e,G,be]),Zt=(0,D.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:_(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:B(`Type`),value:B(`Folder`)},{label:B(`Location`),value:e.parent??`—`},{label:B(`Path`),value:e.path},{label:B(`Size`),value:d(t)},{label:B(`Items`),value:a(B,n,`1 item`,`{count} items`)},{label:B(`Modified`),value:`—`},{label:B(`Created`),value:`—`},{label:B(`Attributes`),value:`—`}]}},[e,B]),Qt=(0,D.useMemo)(()=>{if(!Xt||!e)return null;let t=Xt.isDirectory?e.folderSizes[Xt.name]:void 0,n=e.tags[Xt.name]??[],r=Xt.name.lastIndexOf(`.`),i=r>0&&r<Xt.name.length-1?Xt.name.slice(r+1).toUpperCase():`—`;return{name:Xt.name,path:Xt.fullPath,isDirectory:Xt.isDirectory,size:Xt.size,modified:Xt.modified,created:Xt.created,fields:[{label:B(`Type`),value:Nc(Xt,B)},...Xt.isEncrypted?[{label:B(`Encryption`),value:B(`Password required`)}]:[],{label:B(`Extension`),value:Xt.isDirectory?`—`:i},{label:B(`Location`),value:e.path},{label:B(`Full path`),value:Xt.fullPath},{label:B(`Size`),value:Xt.isDirectory?t===void 0?`—`:d(t):d(Xt.size)},...Xt.isDirectory?[{label:B(`Items`),value:`${e.counts[Xt.name]??`—`}`}]:[],{label:B(`Modified`),value:v(Xt.modified)},{label:B(`Created`),value:v(Xt.created)},{label:B(`Link status`),value:Xt.linkTarget==null?Xt.linkCount>1?B(`Hard link`):`—`:Xt.linkValid?`OK`:B(`Broken`)},...Xt.linkTarget?[{label:B(`Target`),value:Xt.linkTarget}]:[],...Xt.linkCount>1?[{label:B(`Links`),value:String(Xt.linkCount)}]:[],{label:B(`Attributes`),value:[Xt.isHidden?B(`Hidden`):``,Xt.isSystem?B(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:B(`Tags`),value:n.join(`, `)}]:[]]}},[e,Xt,B]),$t=Ce?.paths.length===1?Ce.paths[0]:null,q=$t?G.find(e=>e.entry.fullPath===$t)?.entry:void 0,J=q?{path:q.fullPath,isDirectory:q.isDirectory}:null,en=Qt??Zt,tn=(0,D.useRef)(A);tn.current=A,(0,D.useEffect)(()=>{tn.current?.(en)},[A,en]);let nn=k&&en&&(0,I.jsx)(Ro,{info:en,onWidth:Le,selectionNote:be.size>1?a(B,be.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:ne,videoAutoplay:O,width:Fe});return n&&!e?(0,I.jsx)(Pl,{children:(0,I.jsx)(Il,{children:n})}):!e&&!t?(0,I.jsx)(Pl,{children:(0,I.jsx)(Fl,{children:B(`Nothing selected.`)})}):i.mode===`grid`?(0,I.jsxs)(Qc,{onPointerDown:re,children:[(0,I.jsxs)($c,{children:[(0,I.jsxs)(sl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||gt()},onContextMenu:e=>jt(e),onDragOver:kt,onDragStart:Dt,onDrop:At,onScroll:e=>{ie?.(e.currentTarget),et(e.currentTarget)},children:[m&&G.length>0&&(0,I.jsxs)(Yc,{children:[(0,I.jsx)(qc,{$checked:!ce&&ct,$partial:!ce&&lt,"aria-label":B(ct?`Select none`:`Select all`),disabled:ce,onClick:ut,title:B(ct?`Select none`:`Select all`),type:`button`,children:ct?(0,I.jsx)(fi,{size:10}):lt?(0,I.jsx)(Jc,{}):null}),(0,I.jsx)(`span`,{children:B(ct?`Select none`:`Select all`)})]}),t&&!e?(0,I.jsx)(fl,{$size:i.gridSize,children:(0,I.jsx)(zc,{size:i.gridSize})}):(0,I.jsx)(Vc,{counts:e?.counts,currentPath:Ge?r.currentPath:null,groups:nt,gridSize:i.gridSize,innerRef:ue,onContextMenu:jt,onOpen:f,onOpenFile:p,onRenameCancel:Ut,onRenameChange:Bt,onRenameCommit:Wt,onSelect:ft,onToggle:ht,openOnSingleClick:h,renaming:Ae,searching:Ge,selected:be,showCheckboxes:m,showTarget:qe}),!t&&e&&G.length===0&&(0,I.jsx)(Nl,{children:(0,I.jsx)(Fl,{children:n??(Ge&&r.mode===`hide`?B(`No entries match the search.`):B(`This folder is empty.`))})}),ae]}),Ce&&(0,I.jsx)(Za,{canPaste:Re,directory:dt,allowCompression:!0,menu:Ce,onAddToTray:C,onAddFavorite:w,onArchiveCreated:K,onClose:_t,onCompressTo:(e,t)=>De({paths:e,name:t}),onCopy:Pt,onCreateFile:e=>void Lt(e),onCreateFolder:e=>void Lt(null,e),onDelete:Kt,onOpen:f,onOpenFile:p,onPaste:It,onRefresh:Mt,onRename:e=>{let t=G.find(t=>t.entry.fullPath===e)?.entry;t&&zt(t)},shortcuts:g,target:J}),Nt,Yt]}),nn]}):(0,I.jsxs)(Qc,{onPointerDown:re,children:[(0,I.jsxs)($c,{children:[(0,I.jsxs)(el,{onScroll:e=>{fe.current&&fe.current.scrollLeft!==e.currentTarget.scrollLeft&&(fe.current.scrollLeft=e.currentTarget.scrollLeft)},ref:de,style:{gridTemplateColumns:Je},children:[(0,I.jsxs)(Kc,{children:[m&&(0,I.jsx)(qc,{$checked:!ce&&ct,$partial:!ce&&lt,"aria-label":B(ct?`Select none`:`Select all`),disabled:ce,onClick:e=>{e.stopPropagation(),ut()},title:B(ct?`Select none`:`Select all`),type:`button`,children:ct?(0,I.jsx)(fi,{size:10}):lt?(0,I.jsx)(Jc,{}):null}),(0,I.jsxs)(tl,{onClick:()=>l(`name`),type:`button`,children:[B(`Name`),Tc(i,`name`)]})]}),Ke.map(e=>(0,I.jsxs)(tl,{onClick:()=>l(e.id),type:`button`,children:[B(e.label),Tc(i,e.id)]},e.id))]}),(0,I.jsxs)(nl,{onClick:e=>{e.target===e.currentTarget&&gt()},onContextMenu:e=>jt(e),onDragOver:kt,onDragStart:Dt,onDrop:At,onScroll:e=>{de.current&&de.current.scrollLeft!==e.currentTarget.scrollLeft&&(de.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;me(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:fe,children:[t&&!e?(0,I.jsx)(Rc,{template:Je,columns:Ke.length}):(0,I.jsxs)(I.Fragment,{children:[Xe>0&&(0,I.jsx)(`div`,{style:{height:Xe*Ye}}),Qe.map(t=>{let n=t.entry.fullPath;return(0,I.jsx)(Uc,{current:Ge&&n===r.currentPath,dim:Ge&&t.ranges===null,height:Ye,iconSize:i.iconSize,innerRef:ue,listing:e,onContextMenu:jt,onOpen:St,onRenameCancel:Ut,onRenameChange:Bt,onRenameCommit:Wt,onSelect:ft,onTagEdit:Ct,onToggle:ht,openOnSingleClick:h,renaming:Ae?.path===n?{value:Ae.value}:null,row:t,selected:be.has(n),showCheckboxes:m,showTarget:qe,template:Je,visible:Ke},n)}),Ze<G.length&&(0,I.jsx)(`div`,{style:{height:(G.length-Ze)*Ye}})]}),!t&&e&&G.length===0&&(0,I.jsx)(Pl,{children:(0,I.jsx)(Fl,{children:n??(Ge&&r.mode===`hide`?B(`No entries match the search.`):B(`This folder is empty.`))})})]}),o&&rt.length>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(rl,{onDoubleClick:We,onPointerDown:Ve,onPointerMove:He,onPointerUp:Ue,title:B(`Drag to resize; double-click to reset`)}),(0,I.jsxs)(il,{style:{height:ve},children:[(0,I.jsxs)(al,{children:[B(`Preview`),(0,I.jsx)(ol,{children:it>yc?`${at.length} / ${it}`:it})]}),(0,I.jsx)(sl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||gt()},onContextMenu:e=>jt(e),children:(0,I.jsx)(Vc,{counts:e?.counts,currentPath:Ge?r.currentPath:null,groups:ot,gridSize:i.gridSize,onContextMenu:jt,onOpen:f,onOpenFile:p,onSelect:ft,onToggle:ht,openOnSingleClick:h,searching:Ge,selected:be,showCheckboxes:m,showTarget:qe})})]})]}),ge&&e&&(0,I.jsx)(ys,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(ge.entry.name,e,t),onClose:()=>_e(null),tags:e.tags[ge.entry.name]??[],x:ge.x,y:ge.y}),Ce&&(0,I.jsx)(Za,{canPaste:Re,directory:dt,allowCompression:!0,menu:Ce,onAddToTray:C,onAddFavorite:w,onArchiveCreated:K,onClose:_t,onCompressTo:(e,t)=>De({paths:e,name:t}),onCopy:Pt,onCreateFile:e=>void Lt(e),onCreateFolder:e=>void Lt(null,e),onDelete:Kt,onOpen:f,onOpenFile:p,onPaste:It,onRefresh:Mt,onRename:e=>{let t=G.find(t=>t.entry.fullPath===e)?.entry;t&&zt(t)},shortcuts:g,target:J}),Nt,Yt]}),nn]})}function Tc(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Ec=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Dc(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Nc(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Ec.compare(String(r),String(i));return t.sortDescending?-o:o})}var Oc=wn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&En(t.entry.name)===e})),kc=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Oc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Ac(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function jc(e){return Math.max(24,Math.min(e-56,160))}var Mc={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Nc(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Mc[Ms(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Pc(e,t,n,r){switch(e){case`type`:return Nc(t,r);case`size`:return Ic(t,n.folderSizes);case`modified`:return v(t.modified);case`created`:return v(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Fc({name:e,ranges:t}){if(!t||t.length===0)return(0,I.jsx)(I.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,I.jsx)(Ml,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,I.jsx)(I.Fragment,{children:n})}function Ic(e,t){if(!e.isDirectory)return d(e.size);let n=t[e.name];return n===void 0?`—`:d(n)}function Lc({entry:e,size:t=18}){let n=z(),r=(0,D.useRef)(null),[i,a]=(0,D.useState)(!1);(0,D.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=an(i?e.fullPath:null,e.isDirectory,t>32),s=sn(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,I.jsxs)(Wc,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,I.jsx)(Ns,{name:e.iconSource.slice(5),size:t}):s?(0,I.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,I.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,I.jsx)(Yr,{size:t}):(0,I.jsx)(Ns,{name:Ms(e.name),size:t}),e.isEncrypted&&(0,I.jsx)(Gc,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,I.jsx)(na,{size:Math.max(8,Math.round(t*.52))})})]})}function Rc({template:e,columns:t}){return(0,I.jsx)(I.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,I.jsxs)(pl,{style:{gridTemplateColumns:e},children:[(0,I.jsxs)(gl,{children:[(0,I.jsx)(ml,{style:{flexShrink:0,height:18,width:18}}),(0,I.jsx)(ml,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,I.jsx)(ml,{style:{width:t%2==0?44:92}},t))]},r))})}function zc({size:e}){return(0,I.jsx)(I.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,I.jsxs)(El,{$dim:!1,$current:!1,$selected:!1,children:[(0,I.jsx)(Dl,{children:(0,I.jsx)(ml,{style:{height:e,width:e}})}),(0,I.jsx)(kl,{children:(0,I.jsx)(ml,{style:{height:9,width:`${t}%`}})})]},n))})}var Bc=(0,D.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let ee=z(),b=jn(),x=!e.entry.isDirectory&&Dn(e.entry.name),te=(0,D.useRef)(null),[S,C]=(0,D.useState)(!1);(0,D.useEffect)(()=>{if(!x||S)return;let e=te.current;if(!e)return;if(!(`IntersectionObserver`in window)){C(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(C(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[x,S]);let w=dn(x&&S?e.entry.fullPath:null,192,e.entry.modified),[T,E]=(0,D.useState)(!1),ne=e.entry.fullPath,O=t=>{e.entry.isDirectory?v(ne,Vt(t)):y?.(ne,Vt(t))};return(0,I.jsxs)(El,{$current:t,$dim:n,$selected:s,onClick:e=>{h(e,ne),l&&O(e)},onContextMenu:e=>_(e,ne),onDoubleClick:e=>{l||O(e)},ref:e=>{te.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":ne,draggable:!u,children:[c&&(0,I.jsx)(Zc,{$checked:s,onClick:e=>{e.stopPropagation(),g(ne)},onDoubleClick:e=>e.stopPropagation(),title:ee(s?`Deselect`:`Select`),type:`button`,children:s&&(0,I.jsx)(fi,{size:10})}),(0,I.jsx)(Dl,{children:x&&w&&!T?(0,I.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>E(!0),src:w}):(0,I.jsx)(Ol,{children:e.place&&b.useIcons?(0,I.jsx)(gs,{place:e.place,size:r}):(0,I.jsx)(Lc,{entry:e.entry,size:r})})}),(0,I.jsxs)(kl,{children:[u?(0,I.jsx)(Hc,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:u.value}):(0,I.jsx)(Al,{$broken:e.entry.linkValid===!1,children:(0,I.jsx)(Fc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,I.jsxs)(vl,{title:ee(`This archive is encrypted and asks for a password when opened.`),children:[(0,I.jsx)(na,{size:9}),ee(`Encrypted`)]}),(0,I.jsx)(jl,{children:e.entry.isDirectory?i===void 0?Nc(e.entry,ee):ee(`{type} · {count} items`,{type:Nc(e.entry,ee),count:i}):ee(`{type} · {size}`,{type:Nc(e.entry,ee),size:d(e.entry.size)})}),a&&e.entry.linkTarget&&(0,I.jsxs)(bl,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,I.jsx)(ra,{size:9}),(0,I.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Vc({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=z();return(0,I.jsx)(I.Fragment,{children:e.map(e=>(0,I.jsxs)(cl,{children:[(0,I.jsxs)(ll,{children:[y(e.label),(0,I.jsx)(ul,{children:e.rows.length}),(0,I.jsx)(dl,{})]}),(0,I.jsx)(fl,{$size:t,children:e.rows.map(e=>(0,I.jsx)(Bc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:jc(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Hc({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,D.useRef)(null);return(0,D.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,I.jsx)(yl,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Uc=(0,D.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:ee,onRenameCancel:b}){let x=z(),te=jn(),S=e.entry.fullPath;return(0,I.jsxs)(hl,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,S),o&&_(e.entry,t)},onContextMenu:e=>g(e,S),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":S,draggable:!p,children:[(0,I.jsxs)(gl,{children:[i&&(0,I.jsx)(Xc,{$checked:r,onClick:e=>{e.stopPropagation(),h(S)},onDoubleClick:e=>e.stopPropagation(),title:x(r?`Deselect`:`Select`),type:`button`,children:r&&(0,I.jsx)(fi,{size:10})}),e.place&&te.useIcons?(0,I.jsx)(Wc,{children:(0,I.jsx)(gs,{place:e.place,size:s})}):(0,I.jsx)(Lc,{entry:e.entry,size:s}),p?(0,I.jsx)(Hc,{onCancel:b,onChange:y,onCommit:ee,value:p.value}):(0,I.jsx)(_l,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,I.jsx)(Fc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,I.jsxs)(vl,{title:x(`This archive is encrypted and asks for a password when opened.`),children:[(0,I.jsx)(na,{size:9}),x(`Encrypted`)]}),a&&e.entry.linkTarget&&(0,I.jsxs)(bl,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,I.jsx)(ra,{size:9}),(0,I.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,I.jsx)(xl,{children:t.id===`tags`?(0,I.jsx)(Sl,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:x(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,I.jsx)(Cl,{$color:t,$ink:vs(t),children:e},e)}):(0,I.jsx)(wl,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,I.jsx)(Tl,{children:x(`Broken`)}):Pc(t.id,e.entry,d,x)},t.id))]})}),Wc=i.span`
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
`,Gc=i.span`
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
`,Kc=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,qc=i.button`
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
`,Jc=i.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Yc=i.div`
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
`,Xc=i.button`
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
`,Zc=i(Xc)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Qc=i.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,$c=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,el=i.div`
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
`,tl=i.button`
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
`,nl=i.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,rl=i.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,il=i.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,al=i.div`
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
`,ol=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,sl=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,cl=i.section`
    & + & {
        margin-top: 22px;
    }
`,ll=i.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ul=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,dl=i.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,fl=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,pl=i.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,ml=i.span`
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
`,hl=i.div`
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
`,gl=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,_l=i.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,vl=i.span`
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
`,yl=i.input`
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
`,bl=i.span`
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
`,xl=i.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Sl=i.button`
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
`,Cl=i.span`
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
`,wl=i.span`
    color: var(--text-muted);
    font-size: 11px;
`,Tl=i.span`
    color: #fca5a5;
`,El=i.div`
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
`,Dl=i.div`
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
`,Ol=i.span`
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
`,kl=i.div`
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
`,Al=i.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,jl=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Ml=i.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Nl=i.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Pl=i.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Fl=i.p`
    font-size: 13px;
    color: var(--text-muted);
`,Il=i.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Ll=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Rl=`/assets/bloom-BpfZWiaG.mp4`,zl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Bl=`/assets/drift-BRBSQL2_.mp4`,Vl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Hl=`/assets/ember-CtSz0YxR.mp4`,Ul=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],Wl=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],Gl=[{id:`builtin:video:drift`,name:`Drift`,url:Bl,poster:zl},{id:`builtin:video:ember`,name:`Ember`,url:Hl,poster:Vl},{id:`builtin:video:bloom`,name:`Bloom`,url:Rl,poster:Ll}],Kl=Wl.map(e=>({...e,variants:Ul.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Ql($l(e.id,t))}))})),ql=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>Ul.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Ql(eu(e.id,t))}))),Jl=new Map([...Kl.flatMap(e=>e.variants),...ql].map(e=>[e.id,e])),Yl=new Map(Gl.map(e=>[e.id,e]));function Xl(e){if(Jl.has(e))return Jl.get(e).url;if(Yl.has(e))return Yl.get(e).url;let t=e.split(`:`)[1];return t?Jl.get(`builtin:${t}:indigo`)?.url??null:null}function Zl(e){return Yl.has(e)}function Ql(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function $l(e,t){return e===`dunes`?su(t):e===`tide`?cu(t):ou(t)}function eu(e,t){return e===`skyline`?nu(t):e===`orbit`?ru(t):tu(t)}function tu({accent:e,secondary:t}){let n=au(t,`#05070f`,.86),r=au(e,`#0b1020`,.72),i=au(t,`#0a0f1d`,.66),a=au(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${au(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${au(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function nu({accent:e,secondary:t}){let n=au(t,`#07040d`,.84),r=au(e,`#100716`,.7),i=au(e,`#08050e`,.82),a=au(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${au(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function ru({accent:e,secondary:t}){let n=au(e,`#03050d`,.9),r=au(t,`#05030c`,.94),i=au(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${au(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${au(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${au(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${au(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function iu(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function au(e,t,n){let[r,i,a]=iu(e),[o,s,c]=iu(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function ou({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${au(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${au(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${au(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${au(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function su({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${au(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${au(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${au(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${au(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${au(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${au(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${au(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function cu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${au(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${au(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${au(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${au(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var lu=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function uu(e){return lu.test(e)}function du({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):w(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=fn(r),a=t?.startsWith(`builtin:`)?Xl(t):n??i,o=n===null?r===null?t!==null&&Zl(t):uu(r):uu(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,I.jsxs)(fu,{"aria-hidden":!0,children:[o?(0,I.jsx)(mu,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,I.jsx)(pu,{src:a,style:{filter:s}}),(0,I.jsx)(hu,{})]})}var fu=i.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,pu=i.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,mu=i.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,hu=i.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
        radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function gu({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=z(),o=(0,D.useRef)(null),[s,c]=(0,D.useState)(()=>Math.max(1,Math.ceil(t)));return(0,D.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,Sa.createPortal)((0,I.jsx)(_u,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,I.jsxs)(vu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(yu,{children:a(`Protected folder`)}),(0,I.jsx)(bu,{children:a(`These paths are protected by the safety settings:`)}),(0,I.jsx)(xu,{children:e.map(e=>(0,I.jsxs)(Su,{children:[(0,I.jsx)(Cu,{children:e.path}),(0,I.jsx)(wu,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,I.jsx)(Tu,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,I.jsx)(Eu,{children:a(`Nothing has been deleted.`)}),(0,I.jsx)(Du,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,I.jsxs)(Ou,{children:[(0,I.jsx)(ku,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,I.jsx)(Au,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var _u=i.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${La}
`,vu=i.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ma}
`,yu=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,bu=i.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,xu=i.div`
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
`,Su=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Cu=i.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,wu=i.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Tu=i.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Eu=i.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Du=i.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Ou=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,ku=i.button`
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
`,Au=i.button`
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
`;function ju(){let e=z(),[t,n]=(0,D.useState)(null),r=(0,D.useRef)(null),i=(0,D.useRef)(null);(0,D.useEffect)(()=>(la(e=>new Promise(t=>{r.current=t,n(e)})),()=>la(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,D.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Sa.createPortal)((0,I.jsx)(Mu,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,I.jsxs)(Nu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(Pu,{children:e(`Notice`)}),(0,I.jsx)(Fu,{children:t}),(0,I.jsx)(Iu,{children:(0,I.jsx)(Lu,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var Mu=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${La}
`,Nu=i.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ma}
`,Pu=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Fu=i.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Iu=i.div`
    display: flex;
    justify-content: flex-end;
`,Lu=i.button`
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
`;function Ru(){let e=z(),[t,n]=(0,D.useState)(null),[r,i]=(0,D.useState)(``),a=(0,D.useRef)(null),o=(0,D.useRef)(null);(0,D.useEffect)(()=>(da((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>da(null)),[]),(0,D.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Sa.createPortal)((0,I.jsx)(zu,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,I.jsxs)(Bu,{role:`dialog`,"aria-modal":`true`,children:[(0,I.jsx)(Vu,{children:e(`Archive password`)}),(0,I.jsx)(Hu,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,I.jsx)(Uu,{title:t.archive,children:t.archive}),(0,I.jsx)(Wu,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,I.jsxs)(Gu,{children:[(0,I.jsx)(Ku,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,I.jsx)(qu,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var zu=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${La}
`,Bu=i.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ma}
`,Vu=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Hu=i.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Uu=i.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wu=i.input`
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
`,Gu=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Ku=i.button`
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
`,qu=i(Ku)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Ju({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h}){let g=z(),_=(0,D.useRef)(null),v=c??g(`Search this folder`);(0,D.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,I.jsxs)(Yu,{children:[(0,I.jsx)(Qr,{}),(0,I.jsx)(Xu,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Zu,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,I.jsx)(Qu,{onClick:()=>y(u),title:g(`Previous match (Shift+Enter)`),type:`button`,children:(0,I.jsx)(ii,{size:12})}),(0,I.jsx)(Qu,{$down:!0,onClick:()=>y(d),title:g(`Next match (Enter)`),type:`button`,children:(0,I.jsx)(ii,{size:12})})]}),(0,I.jsx)($u,{$on:n,onClick:()=>y(f),title:g(`Match case`),type:`button`,children:`Aa`}),(0,I.jsx)($u,{$on:r,onClick:()=>y(p),title:g(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,I.jsx)(ed,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:g(t===`hide`?`Hide`:`Dim`)}),(0,I.jsx)(Qu,{onClick:h,title:g(`Close search (Esc)`),type:`button`,children:(0,I.jsx)(pi,{size:12})})]})}var Yu=i.div`
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
    ${Fa}
`,Xu=i.input`
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
`,Zu=i.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Qu=i.button`
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
`,$u=i.button`
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
`,ed=i($u)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function td(e,t,n,r,i=[]){(0,D.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=gn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function nd({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=z(),a=(0,D.useRef)(null),o=(0,D.useRef)(null),[s,c]=(0,D.useState)(null);return(0,D.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,D.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,D.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Sa.createPortal)((0,I.jsxs)(rd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(ds).map(n=>(0,I.jsx)(id,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:ds[n](16)},n)),(0,I.jsx)(id,{onClick:async()=>{let e=await oa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,I.jsx)(ti,{size:13})}),r&&(0,I.jsx)(id,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,I.jsx)(pi,{size:12})})]}),document.body)]})}var rd=i.div`
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
    ${Na}
    transform-origin: top left;
`,id=i.button`
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
`,ad={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function od(){return F.available?await F.request(`share.list`):ad}async function sd(e,t){return F.available?await F.request(`share.add`,{path:e,mode:t}):ad}async function cd(e){return F.available?await F.request(`share.remove`,{id:e}):ad}async function ld(e,t){return F.available?await F.request(`share.mode`,{id:e,mode:t}):ad}async function ud(){return F.available?(await F.request(`share.peers.refresh`)).peers??[]:[]}async function dd(e,t){F.available&&await F.request(`share.pair.start`,{host:e,port:t})}async function fd(e,t){F.available&&await F.request(`share.pair.respond`,{requestId:e,accept:t})}async function pd(e,t){F.available&&await F.request(`share.port`,{mode:t,port:e})}var md=`share://`;function hd(e){return e.toLowerCase().startsWith(md)}function gd(e){if(!hd(e))return null;let[t,n,...r]=e.slice(8).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function _d(e,t,n=``){let r=`${md}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function vd(e){let t=gd(e);if(!t||!F.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await F.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:_d(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:_d(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function yd(e){let t=gd(e);if(!t||!F.available)throw Error(`This shared file is only available in the desktop app.`);let n=await F.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function bd(e){await ve(await yd(e))}function xd({source:e,poster:t}){let n=w(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=fn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??Xl(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,I.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,I.jsx)(`img`,{alt:``,src:a}):null}function Sd({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=z(),s=(0,D.useRef)(null),c=(0,D.useRef)(null),l=(0,D.useRef)(!1),[u,d]=(0,D.useState)(null),[f,p]=(0,D.useState)(null),[m,h]=(0,D.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,D.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,D.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,D.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},ee=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},b=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,I.jsx)(Ud,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,I.jsxs)(Wd,{children:[(0,I.jsxs)(Gd,{children:[(0,I.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,I.jsx)(Qd,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,I.jsx)(pi,{size:12})})]}),(0,I.jsx)(Kd,{children:o(`Drag the frame to choose the visible part.`)}),(0,I.jsxs)(qd,{children:[t?(0,I.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,I.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,I.jsx)(Jd,{onPointerCancel:b,onPointerDown:y,onPointerMove:ee,onPointerUp:b,style:{height:_,top:m},children:(0,I.jsx)(Yd,{})})]}),(0,I.jsxs)(Xd,{children:[(0,I.jsx)(Zd,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,I.jsx)(Zd,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var Cd=150,wd=120,Td=200,Ed=i.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Dd=i.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Od=i.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${Td}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
        #000 0,
        #000 calc(100% - ${Td}px),
        rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Td*.72)}px),
        rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Td*.44)}px),
        rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Td*.18)}px),
        transparent 100%);
    mask-image: linear-gradient(to bottom,
        #000 0,
        #000 calc(100% - ${Td}px),
        rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Td*.72)}px),
        rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Td*.44)}px),
        rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Td*.18)}px),
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
`,kd=i.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Cd}px);
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
`,Ad=i.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,jd=i.section`
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
`,Md=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Nd=i.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Pd=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Fd=i.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Id=i.input`
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
`,Ld=i.button`
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
`,Rd=i.div`
    position: relative;
    width: 132px;
    height: 72px;
`,zd=i.button`
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
`,Bd=i.button`
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
`,Vd=i.span`
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
`,Hd=i.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Ud=i.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Wd=i.div`
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
`,Gd=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Kd=i.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,qd=i.div`
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
`,Jd=i.div`
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
`,Yd=i.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,Xd=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Zd=i.button`
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
`,Qd=i.button`
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
`,$d=i.button`
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
`,ef=i.div`
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
`,tf=i.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,nf=i.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,rf=i.button`
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
`,af=i.div`
    position: relative;
    display: inline-flex;
`,of=i.div`
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
`,sf=i.button`
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
`,cf=i.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,lf=i.section`
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
`,uf=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,df=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,ff=i.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,pf=i.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,mf=i.input`
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
`,hf=i.button`
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
`,gf=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,_f=i.div`
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
`,vf=i.span`
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
`,yf=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,bf=i.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,xf=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Sf=i.button`
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
`,Cf=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,wf=i.button`
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
`,Tf=i.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Ef=i.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Df=i.div`
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
`,Of=i.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,kf=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Af=i.button`
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
`,jf=i.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Mf=i.button`
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
`,Nf=i.button`
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
`,Pf=i.button`
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
`,Ff=i.span`
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
`,If=i.button`
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
`,Lf=i.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,Rf=i.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,zf=i.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Bf=i.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Vf=i.input`
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
`,Hf=i.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Uf=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Wf=i.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Gf=i.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,Kf=i.button`
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
`;function qf({places:e,drives:n,recent:r,recentLimit:i,homePath:o,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:f,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:v,onSearchMatches:y,readOnly:ee=!1,onPick:b,onSelectionChange:x,onAddToTray:te,onAddFavorite:S,settingsVersion:T=0}){let E=z(),ne=jn(),[O,k]=(0,D.useState)(!1),[A,re]=(0,D.useState)(null),j=A?.overviewBanner??null,ie=j?.startsWith(`builtin:`)??!1,ae=j?.startsWith(`url:`)?j.slice(4):w(j)?j:null,M=ie||ae?``:j??``,N=ie?``:ae?ae.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:M.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,P=ie?Zl(j):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(N),oe=fn(M.length>0?M:null,0,N?`.${N}`:``),se=j?Xl(j)??ae??oe:null,[ce,L]=(0,D.useState)(``),[R,B]=(0,D.useState)(null),[le,ue]=(0,D.useState)(!1),[de,fe]=(0,D.useState)(null),[V,pe]=(0,D.useState)(null),[H,me]=(0,D.useState)(null),[he,U]=(0,D.useState)([]),[ge,ye]=(0,D.useState)(null),[be,xe]=(0,D.useState)(``),[Se,W]=(0,D.useState)(null),[Ce,we]=(0,D.useState)(null),Te=vc(`overview`),[De,Oe]=(0,D.useState)(null),[ke,Ae]=(0,D.useState)(null),je=(0,D.useRef)(null),Me=(0,D.useRef)(null),Ne=(0,D.useRef)(null),Pe=(0,D.useRef)(null),Fe=(0,D.useRef)(null),Ie=ke??A?.overviewBannerHeight??220,[Le,Re]=(0,D.useState)(0),[ze,He]=(0,D.useState)(null),Ue=Math.min(1,Math.max(0,A?.overviewBannerOffset??.3)),We=Ie+Td,Ge=ze&&Le>0?ze.height*(Le/ze.width):We,qe=Ge>0&&Ge<We+240?(We+240)/Ge:1,Je=Math.max(1,Math.round(Le*qe)),G=Math.max(0,Ge*qe-We),Ye=Math.min(wd,G/2,Math.max(20,Ie*.42)),Xe=Ye+Ue*Math.max(0,G-Ye*2),[Ze,$e]=(0,D.useState)(!1),et=(e,t=!1)=>b?(W(e),we({path:e,isDirectory:t}),x?.([e]),!0):!1,tt=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),W(t),we({path:t,isDirectory:n}),Oe({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,D.useEffect)(()=>(dc(`overview`,Ce?(e,t)=>Oe({x:e,y:t,target:Ce}):null),()=>dc(`overview`,null)),[Ce]);let nt=(e,t)=>c(e,t);(0,D.useEffect)(()=>{Ke().then(re,()=>re(null))},[T]),(0,D.useEffect)(()=>{if(F.available)return ud().then(U,()=>void 0),F.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&U(t.data.peers)})},[]),(0,D.useEffect)(()=>{let e=Ne.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,D.useEffect)(()=>{if(ie&&!P){He({width:1920,height:1080});return}He(null);let e=Fe.current;e?.complete&&e.naturalWidth>0&&He({width:e.naturalWidth,height:e.naturalHeight})},[j,ie,P]),(0,D.useEffect)(()=>{let e=Pe.current;if(!e)return;let t=()=>Re(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[A?.overviewBanner]),(0,D.useEffect)(()=>{if(!R)return;let e=()=>B(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||B(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[R]),(0,D.useEffect)(()=>{if(!le)return;let e=()=>ue(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[le]);let rt=ps(A),it=rt.map(e=>e.id),at=(0,D.useRef)(null),ot=e=>R?.kind===`panel`&&R.id===e,st=e=>R?.kind===`place`&&R.id===e;(0,D.useEffect)(()=>{if(!F.available)return;let e=rt.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??o).filter(e=>e.length>0);F.send({type:`fs.watch`,payload:{paths:e}})},[rt.map(e=>e.path??e.id).join(`|`),o]),td(at,v??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let ct=async(e,t)=>{let n={...A?.placeIcons};t?n[e]=t:delete n[e],B(null),await mt({placeIcons:n}),l(await Ee())},lt=async(e,t)=>{let n={...A?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],pe(null),await mt({placeNames:n}),l(await Ee())},ut=e=>{me(null),fe({drive:e,label:e.label||`Local Disk`})},dt=async()=>{if(!de)return;let{drive:e,label:t}=de;fe(null);let n=await _e(e.name,t.trim());n.ok?(me(null),h?.()):me(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},ft=A?.overviewColumns??1,mt=async e=>{if(!A)return;let t={...A,...e,overviewPanels:e.overviewPanels??it,overviewHidden:[]};re(await Qe(t)),p?.()},ht=async()=>{let e=await oa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=A?.overviewBanners??[];await mt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},gt=async()=>{let e=ce.trim();if(!A||!w(e))return;let t=A.overviewBanners??[];L(``),await mt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},_t=()=>void mt({overviewBanner:null}),vt=e=>void mt({overviewBanners:(A?.overviewBanners??[]).filter(t=>t!==e),...A?.overviewBanner===e||A?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),yt=e=>{je.current={y:e.clientY,height:Ie},e.currentTarget.setPointerCapture(e.pointerId)},bt=e=>{let t=je.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Me.current=n,Ae(n)},xt=e=>{je.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Me.current!==null&&(mt({overviewBannerHeight:Me.current}),Me.current=null)},St=(e,t)=>{let n=it.indexOf(e),r=n+t;if(n<0||r<0||r>=it.length)return;let i=[...it];[i[n],i[r]]=[i[r],i[n]],mt({overviewPanels:i})},Ct=(e,t)=>{let n={...A?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],mt({overviewTitles:n})},wt=(e,t)=>void mt({overviewViews:{...A?.overviewViews,[e]:t}}),Tt=e=>{let t=A?.overviewPinned??rt.filter(e=>e.pinned).map(e=>e.id);mt({overviewPinned:rt.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Et=e=>{B(null);let t=t=>{let n={...t};return delete n[e],n},n=A?.overviewPinned??rt.filter(e=>e.pinned).map(e=>e.id);mt({overviewPanels:it.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(A?.overviewTitles),overviewViews:t(A?.overviewViews),overviewIcons:t(A?.overviewIcons),panelPlaces:t(A?.panelPlaces)})},Dt=(e,t)=>{let n={...A?.overviewIcons};t?n[e]=t:delete n[e],B(null),mt({overviewIcons:n})},Ot=async e=>{if(!A)return;if(e===`folder`){let e=await aa();if(!e)return;let t=`folder:${e}`;it.includes(t)||await mt({overviewPanels:[...it,t]});return}if(e===`quick`){let e=2;for(;it.includes(`quick:${e}`);)e+=1;await mt({overviewPanels:[...it,`quick:${e}`]});return}let t=e;for(let n=2;it.includes(t);n+=1)t=`${e}:${n}`;await mt({overviewPanels:[...it,t]})},kt=async t=>{let n=await aa();if(!n)return;if(t.id===`quick`){await mt({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),l(await Ee());return}let r=t.places??[];r.some(e=>Yf(e,n))||await mt({panelPlaces:{...A?.panelPlaces,[t.id]:[...r,n]}})},At=async(t,n)=>{B(null),t.id===`quick`?(await mt({quickAccess:e.filter(e=>!Yf(e.path,n)).map(e=>e.path)}),l(await Ee())):await mt({panelPlaces:{...A?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!Yf(e,n))}})},jt=async(t,n,r)=>{if(Yf(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>Yf(e,n)),o=i.findIndex(e=>Yf(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),t.id===`quick`?(await mt({quickAccess:s}),l(await Ee())):await mt({panelPlaces:{...A?.panelPlaces,[t.id]:s}})},Mt=(e,t)=>({draggable:O,onDragOver:e=>{O&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{O&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{O&&(n.preventDefault(),jt(e,n.dataTransfer.getData(`text/plain`),t))}}),K=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Yf(e.path,t));return{name:A?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??A?.placeIcons?.[t]??null}}),Nt=e=>{if(r.length===0)return(0,I.jsx)(Rf,{children:E(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,I.jsx)(gf,{children:t.map(e=>{let t=Mn(ne,e.path);return(0,I.jsxs)(_f,{$plain:!1,$selected:Se===e.path,onClick:t=>{et(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Vt(t)):ve(e.path))},onDoubleClick:()=>b?.(e.path),onContextMenu:t=>tt(t,e.path,e.isDirectory),title:e.path,children:[(0,I.jsx)(vf,{children:t&&ne.useIcons?(0,I.jsx)(gs,{place:t,size:18}):(0,I.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,I.jsxs)(yf,{children:[(0,I.jsx)(`strong`,{children:t?.name||e.name}),(0,I.jsx)(bf,{children:e.path})]})]},e.path)})}):(0,I.jsx)(xf,{children:t.map(e=>{let t=Mn(ne,e.path);return(0,I.jsxs)(Sf,{$selected:Se===e.path,onClick:t=>{et(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Vt(t)):ve(e.path))},onDoubleClick:()=>b?.(e.path),onContextMenu:t=>tt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,I.jsx)(gs,{place:t,size:15}):(0,I.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,I.jsxs)(Cf,{children:[(0,I.jsx)(`strong`,{children:t?.name||e.name}),(0,I.jsx)(bf,{children:e.path})]})]},e.path)})})},Pt=e=>{let t=A?.favorites??[],n=async e=>{await mt({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>t.path.toLowerCase()===e.toLowerCase())&&await mt({favorites:[...t,{path:e,name:_(e)||e,isDirectory:n}]})},i=(e,t,n)=>{O||et(t,n)||(n?c(t,Vt(e)):ve(t))},a=O?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(wf,{$row:e.view===`list`,onClick:()=>void oa().then(e=>r(e,!1)),title:E(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,I.jsx)(ti,{size:15}):(0,I.jsx)(vf,{children:(0,I.jsx)(ti,{size:15})}),e.view===`list`?(0,I.jsxs)(Cf,{children:[(0,I.jsx)(`strong`,{children:E(`Add file`)}),(0,I.jsx)(bf,{children:E(`Pin any file here`)})]}):(0,I.jsxs)(yf,{children:[(0,I.jsx)(`strong`,{children:E(`Add file`)}),(0,I.jsx)(bf,{children:E(`Pin any file here`)})]})]}),(0,I.jsxs)(wf,{$row:e.view===`list`,onClick:()=>void aa().then(e=>r(e,!0)),title:E(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,I.jsx)(ti,{size:15}):(0,I.jsx)(vf,{children:(0,I.jsx)(ti,{size:15})}),e.view===`list`?(0,I.jsxs)(Cf,{children:[(0,I.jsx)(`strong`,{children:E(`Add folder`)}),(0,I.jsx)(bf,{children:E(`Pin any folder here`)})]}):(0,I.jsxs)(yf,{children:[(0,I.jsx)(`strong`,{children:E(`Add folder`)}),(0,I.jsx)(bf,{children:E(`Pin any folder here`)})]})]})]}):null;return t.length===0&&!O?(0,I.jsx)(Rf,{children:E(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,I.jsxs)(gf,{children:[t.map(e=>{let t=Mn(ne,e.path);return(0,I.jsxs)(_f,{$plain:O,$selected:Se===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&b?.(e.path),onContextMenu:t=>!O&&tt(t,e.path,e.isDirectory),title:e.path,children:[O&&(0,I.jsx)(Nf,{onClick:t=>{t.stopPropagation(),n(e.path)},title:E(`Remove from favorites`),type:`button`,children:(0,I.jsx)(pi,{size:11})}),(0,I.jsx)(vf,{children:t&&ne.useIcons?(0,I.jsx)(gs,{place:t,size:18}):(0,I.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,I.jsxs)(yf,{children:[(0,I.jsx)(`strong`,{children:t?.name||e.name}),(0,I.jsx)(bf,{children:e.path})]})]},e.path)}),a]}):(0,I.jsxs)(xf,{children:[t.map(e=>{let t=Mn(ne,e.path);return(0,I.jsxs)(Sf,{$selected:Se===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&b?.(e.path),onContextMenu:t=>!O&&tt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,I.jsx)(gs,{place:t,size:15}):(0,I.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,I.jsxs)(Cf,{children:[(0,I.jsx)(`strong`,{children:t?.name||e.name}),(0,I.jsx)(bf,{children:e.path})]}),O&&(0,I.jsx)(Nf,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:E(`Remove from favorites`),type:`button`,children:(0,I.jsx)(pi,{size:11})})]},e.path)}),a]})},Ft=e=>{if(n.length===0)return(0,I.jsx)(Rf,{children:E(`No drives are available.`)});let r=n.map(n=>{let r=n.totalSize>0?1-n.freeSpace/n.totalSize:0,i=de?.drive.name===n.name,a=i?(0,I.jsx)(Jf,{maxLength:32,onCancel:()=>fe(null),onChange:e=>fe({...de,label:e}),onCommit:()=>void dt(),value:de?.label??``}):(0,I.jsx)(I.Fragment,{children:u(n)}),o=!i&&O&&(0,I.jsx)(Pf,{onClick:e=>{e.stopPropagation(),ut(n)},title:E(`Rename volume`),type:`button`,children:(0,I.jsx)(Ai,{size:11})}),s=(0,I.jsx)(bf,{children:E(`{free} free of {total}`,{free:d(n.freeSpace),total:d(n.totalSize)})});return e.view===`grid`?(0,I.jsxs)(_f,{$plain:!1,$selected:Se===n.name,onClick:e=>{!i&&et(n.name,!0)||i||c(n.name,Vt(e))},onDoubleClick:()=>!i&&b?.(n.name),onContextMenu:e=>!i&&tt(e,n.name,!0),title:n.name,children:[(0,I.jsx)(vf,{children:(0,I.jsx)(Zr,{size:18})}),(0,I.jsxs)(yf,{children:[(0,I.jsxs)(`strong`,{children:[a,i&&C(n),o]}),s]})]},n.name):(0,I.jsxs)(Sf,{as:i?`div`:`button`,$selected:Se===n.name,onClick:i?void 0:e=>{et(n.name,!0)||c(n.name,Vt(e))},onDoubleClick:i?void 0:()=>b?.(n.name),onContextMenu:i?void 0:e=>tt(e,n.name,!0),title:n.name,type:i?void 0:`button`,children:[(0,I.jsx)(Zr,{size:18}),(0,I.jsxs)(Cf,{children:[(0,I.jsxs)(`strong`,{children:[a,i&&C(n),o]}),s]}),(0,I.jsx)(Tf,{children:(0,I.jsx)(Ef,{$used:r,$tone:t(r)})})]},n.name)});return e.view===`grid`?(0,I.jsx)(gf,{children:r}):(0,I.jsx)(xf,{children:r})},It=()=>{let e=async e=>{ye(e.id);try{await dd(e.host,e.port)}finally{ye(null)}},t=async()=>{let e=be.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){ye(`manual`);try{await dd(n,r)}finally{ye(null)}}};return(0,I.jsxs)(zf,{children:[(0,I.jsxs)(Bf,{children:[(0,I.jsx)(Vf,{onChange:e=>xe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:E(`Address, e.g. 192.168.1.20:45701`),value:be}),(0,I.jsx)(Kf,{disabled:ge!==null||!be.includes(`:`),onClick:()=>void t(),type:`button`,children:E(ge===`manual`?`Pairing…`:`Pair by address`)})]}),he.length===0&&(0,I.jsx)(Rf,{children:E(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),he.map(t=>(0,I.jsxs)(Hf,{children:[(0,I.jsxs)(Uf,{children:[(0,I.jsx)(Wi,{size:14}),(0,I.jsx)(Wf,{title:t.host,children:t.name}),(0,I.jsx)(Gf,{$online:t.online,children:t.paired?t.online?E(`Paired`):E(`Offline`):E(`Not paired`)}),!t.paired&&t.online&&(0,I.jsx)(Kf,{disabled:ge===t.id,onClick:()=>void e(t),type:`button`,children:ge===t.id?E(`Pairing…`):E(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,I.jsx)(bf,{children:E(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,I.jsxs)(Sf,{onClick:n=>c(_d(t.id,e.id),Vt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,I.jsx)(Wi,{size:14}),(0,I.jsxs)(Cf,{children:[(0,I.jsx)(`strong`,{children:e.name}),(0,I.jsx)(bf,{children:t.name})]}),(0,I.jsx)(Ki,{size:12})]},e.id))]},t.id))]})},Lt=e=>{switch(e.kind){case`share`:return It();case`favorites`:return Pt(e);case`quick`:{let t=K(e);return!O&&t.length===0?(0,I.jsx)(Rf,{children:E(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,I.jsxs)(gf,{children:[t.map(t=>(0,I.jsxs)(_f,{$plain:O,$selected:Se===t.path,...Mt(e,t.path),onClick:e=>{!O&&!et(t.path,!0)&&c(t.path,Vt(e))},onDoubleClick:()=>!O&&b?.(t.path),onContextMenu:e=>!O&&tt(e,t.path,!0),title:t.path,children:[O&&(0,I.jsx)(Nf,{onClick:n=>{n.stopPropagation(),At(e,t.path)},title:E(`Remove from Quick access`),type:`button`,children:(0,I.jsx)(pi,{size:11})}),(0,I.jsxs)(jf,{children:[O?(0,I.jsx)(Mf,{onClick:e=>{e.stopPropagation(),B(st(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:E(`Change icon`),type:`button`,children:(0,I.jsx)(vf,{children:(0,I.jsx)(gs,{place:t})})}):(0,I.jsx)(vf,{children:(0,I.jsx)(gs,{place:t})}),st(t.path)&&(0,I.jsx)(nd,{onPick:e=>void ct(t.path,e),value:A?.placeIcons?.[t.path]??t.icon})]}),(0,I.jsxs)(yf,{children:[V?.path===t.path?(0,I.jsx)(`strong`,{children:(0,I.jsx)(Jf,{onCancel:()=>pe(null),onChange:e=>pe({path:t.path,name:e}),onCommit:()=>void lt(t.path,V?.name??``),value:V?.name??``})}):(0,I.jsxs)(`strong`,{children:[t.name,O&&(0,I.jsx)(Pf,{onClick:e=>{e.stopPropagation(),B(null),pe({path:t.path,name:t.name})},title:E(`Rename folder`),type:`button`,children:(0,I.jsx)(Ai,{size:11})})]}),(0,I.jsx)(bf,{children:t.path})]})]},t.path)),O&&(0,I.jsxs)(wf,{onClick:()=>void kt(e),title:E(`Pin a folder here`),type:`button`,children:[(0,I.jsx)(vf,{children:(0,I.jsx)(ti,{size:15})}),(0,I.jsxs)(yf,{children:[(0,I.jsx)(`strong`,{children:E(`Add folder`)}),(0,I.jsx)(bf,{children:E(`Pin a directory here`)})]})]})]}):(0,I.jsxs)(xf,{children:[t.map(t=>(0,I.jsxs)(Sf,{$selected:Se===t.path,...Mt(e,t.path),onClick:e=>{!O&&!et(t.path,!0)&&c(t.path,Vt(e))},onDoubleClick:()=>!O&&b?.(t.path),onContextMenu:e=>!O&&tt(e,t.path,!0),title:t.path,type:`button`,children:[(0,I.jsxs)(jf,{children:[O?(0,I.jsx)(Mf,{onClick:e=>{e.stopPropagation(),B(st(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:E(`Change icon`),type:`button`,children:(0,I.jsx)(gs,{place:t,size:15})}):(0,I.jsx)(gs,{place:t,size:15}),st(t.path)&&(0,I.jsx)(nd,{onPick:e=>void ct(t.path,e),value:A?.placeIcons?.[t.path]??t.icon})]}),(0,I.jsxs)(Cf,{children:[V?.path===t.path?(0,I.jsx)(`strong`,{children:(0,I.jsx)(Jf,{onCancel:()=>pe(null),onChange:e=>pe({path:t.path,name:e}),onCommit:()=>void lt(t.path,V?.name??``),value:V?.name??``})}):(0,I.jsxs)(`strong`,{children:[t.name,O&&(0,I.jsx)(Pf,{onClick:e=>{e.stopPropagation(),B(null),pe({path:t.path,name:t.name})},title:E(`Rename folder`),type:`button`,children:(0,I.jsx)(Ai,{size:11})})]}),(0,I.jsx)(bf,{children:t.path})]}),O&&(0,I.jsx)(Nf,{$inline:!0,onClick:n=>{n.stopPropagation(),At(e,t.path)},title:E(`Remove from Quick access`),type:`button`,children:(0,I.jsx)(pi,{size:11})})]},t.path)),O&&(0,I.jsxs)(wf,{$row:!0,onClick:()=>void kt(e),title:E(`Pin a folder here`),type:`button`,children:[(0,I.jsx)(ti,{size:15}),(0,I.jsxs)(Cf,{children:[(0,I.jsx)(`strong`,{children:E(`Add folder`)}),(0,I.jsx)(bf,{children:E(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,I.jsx)(Xf,{mode:e.view,onContextMenu:tt,onOpen:c,onPick:b,onSelectionChange:x,version:s});case`recent`:return Nt(e);case`drives`:return Ft(e);default:return(0,I.jsx)(Zf,{mode:e.view,onContextMenu:tt,onOpen:c,onPick:b,onSelectionChange:x,openOnSingleClick:A?.openOnSingleClick??!1,path:e.path??o,selectionMenuId:`overview:${e.id}`,showCheckboxes:A?.showCheckboxes??!0,visibilityVersion:g})}};return(0,I.jsxs)(Ed,{$flush:!!A?.overviewBanner,ref:Ne,children:[!ee&&(0,I.jsxs)(ef,{$overlay:!!A?.overviewBanner,children:[(0,I.jsx)(tf,{role:`group`,title:E(`Columns`),children:[1,2,3,4,5].map(e=>(0,I.jsx)(nf,{$active:ft===e,onClick:()=>void mt({overviewColumns:e}),title:a(E,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),O&&(0,I.jsxs)(af,{children:[(0,I.jsxs)(rf,{onClick:()=>ue(e=>!e),onPointerDown:e=>e.stopPropagation(),title:E(`Add a panel`),type:`button`,children:[(0,I.jsx)(ti,{size:12}),E(`Add panel ▾`)]}),le&&(0,I.jsx)(of,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,I.jsx)(sf,{onClick:()=>{ue(!1),Ot(e)},type:`button`,children:E(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),Te.available&&(0,I.jsx)(hf,{onClick:e=>Te.open(e.clientX,e.clientY),title:E(`Selection menu`),type:`button`,children:(0,I.jsx)(ta,{size:14})}),(0,I.jsxs)(rf,{onClick:()=>{k(e=>!e),ue(!1),B(null),pe(null),fe(null)},title:E(O?`Done`:`Edit`),type:`button`,children:[O?(0,I.jsx)(fi,{size:13}):(0,I.jsx)(Ai,{size:13}),E(O?`Done`:`Edit`)]})]}),H&&(0,I.jsx)(Lf,{children:H}),A?.overviewBanner&&(0,I.jsxs)(Dd,{ref:Pe,style:{height:`${Ie}px`,"--banner-image-width":`${Je}px`,"--banner-image-shift":`${Xe}px`,"--banner-travel":`${Ye}px`,"--banner-overlap":`0px`},children:[(0,I.jsx)(Od,{children:P?(0,I.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&He({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:se??void 0}):(0,I.jsx)(`img`,{alt:``,onLoad:e=>{let t=ie?1920:e.currentTarget.naturalWidth||1920,n=ie?1080:e.currentTarget.naturalHeight||1080;He({width:t,height:n})},ref:Fe,src:se??void 0})}),O&&(0,I.jsx)(kd,{onDoubleClick:()=>{Me.current=null,Ae(null),mt({overviewBannerHeight:220})},onPointerCancel:xt,onPointerDown:yt,onPointerMove:bt,onPointerUp:xt,title:E(`Drag to resize; double-click to reset`)})]}),(0,I.jsxs)(Ad,{$offset:A?.overviewBanner?100:0,children:[O&&(0,I.jsxs)(jd,{children:[(0,I.jsxs)(Md,{children:[(0,I.jsx)(Nd,{children:E(`Banners`)}),A?.overviewBanner&&(0,I.jsxs)(rf,{onClick:()=>$e(!0),title:E(`Adjust framing…`),type:`button`,children:[(0,I.jsx)(Ai,{size:12}),E(`Adjust framing…`)]})]}),(0,I.jsxs)(Pd,{children:[(0,I.jsx)(Rd,{children:(0,I.jsx)(zd,{$active:!A?.overviewBanner,onClick:_t,title:E(`No banner`),type:`button`,children:(0,I.jsxs)(Hd,{children:[(0,I.jsx)(pi,{size:16}),(0,I.jsx)(`span`,{children:E(`No banner`)})]})})}),ql.map(e=>(0,I.jsx)(Rd,{children:(0,I.jsx)(zd,{$active:A?.overviewBanner===e.id,onClick:()=>void mt({overviewBanner:e.id}),title:`${E(e.concept)} · ${E(e.preset)}`,type:`button`,children:(0,I.jsx)(xd,{poster:e.url,source:e.id})})},e.id)),Gl.map(e=>(0,I.jsx)(Rd,{children:(0,I.jsxs)(zd,{$active:A?.overviewBanner===e.id,onClick:()=>void mt({overviewBanner:e.id}),title:E(e.name),type:`button`,children:[(0,I.jsx)(xd,{poster:e.poster,source:e.id}),(0,I.jsx)(Vd,{children:(0,I.jsx)(vi,{size:11})})]})},e.id)),(A?.overviewBanners??[]).map(e=>(0,I.jsxs)(Rd,{children:[(0,I.jsx)(zd,{$active:A?.overviewBanner===e||A?.overviewBanner===`url:${e}`,onClick:()=>void mt({overviewBanner:w(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,I.jsx)(xd,{source:e})}),(0,I.jsx)(Bd,{onClick:()=>vt(e),title:E(`Remove`),type:`button`,children:(0,I.jsx)(pi,{size:10})})]},e)),(0,I.jsxs)($d,{onClick:()=>void ht(),title:E(`Add banner…`),type:`button`,children:[(0,I.jsx)(ti,{size:18}),(0,I.jsx)(`span`,{children:E(`Add banner…`)})]})]}),(0,I.jsxs)(Fd,{children:[(0,I.jsx)(Id,{onChange:e=>L(e.target.value),onKeyDown:e=>{e.key===`Enter`&&gt()},placeholder:`https://…`,value:ce}),(0,I.jsx)(Ld,{disabled:!w(ce),onClick:()=>void gt(),type:`button`,children:E(`Add URL`)})]})]}),(0,I.jsx)(cf,{ref:at,$columns:ft,children:rt.map(e=>{let t=it.indexOf(e.id);return(0,I.jsxs)(lf,{children:[(0,I.jsxs)(uf,{children:[(0,I.jsxs)(df,{children:[(0,I.jsxs)(jf,{children:[O?(0,I.jsx)(Mf,{onClick:()=>B(ot(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:E(`Change icon`),type:`button`,children:(0,I.jsx)(hs,{panel:e,size:15})}):(0,I.jsx)(hs,{panel:e,size:15}),ot(e.id)&&(0,I.jsx)(nd,{onPick:t=>Dt(e.id,t),value:e.icon})]}),O?(0,I.jsx)(mf,{defaultValue:e.title,onBlur:t=>Ct(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,I.jsx)(pf,{children:E(e.title)})]}),(0,I.jsxs)(ff,{children:[!O&&e.kind===`recent`&&(0,I.jsx)(rf,{onClick:()=>void Be().then(f),title:E(`Clear`),type:`button`,children:E(`Clear`)}),!O&&e.kind===`frequent`&&(0,I.jsx)(rf,{onClick:()=>void Ve().then(()=>m?.()),title:E(`Clear the frequent list`),type:`button`,children:E(`Clear`)}),!O&&(e.kind===`home`||e.kind===`folder`)&&(0,I.jsx)(rf,{onClick:()=>c(e.path??o),title:E(`Open folder`),type:`button`,children:E(`Open`)}),O&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(hf,{$active:e.pinned,onClick:()=>Tt(e.id),title:e.pinned?E(`Unpin from the sidebar`):E(`Pin to the sidebar`),type:`button`,children:(0,I.jsx)(oi,{size:12})}),(0,I.jsx)(hf,{$active:e.view===`list`,onClick:()=>wt(e.id,`list`),title:E(`List`),type:`button`,children:(0,I.jsx)(si,{size:13})}),(0,I.jsx)(hf,{$active:e.view===`grid`,onClick:()=>wt(e.id,`grid`),title:E(`Grid`),type:`button`,children:(0,I.jsx)(ci,{size:13})}),(0,I.jsx)(hf,{disabled:t===0,onClick:()=>St(e.id,-1),title:E(`Move up`),type:`button`,children:(0,I.jsx)($r,{size:12})}),(0,I.jsx)(hf,{disabled:t===it.length-1,onClick:()=>St(e.id,1),title:E(`Move down`),type:`button`,children:(0,I.jsx)($r,{size:12})}),(0,I.jsx)(hf,{onClick:()=>Et(e.id),title:E(`Remove panel`),type:`button`,children:(0,I.jsx)(pi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Lt(e):(0,I.jsx)(Of,{children:Lt(e)})]},e.id)})})]}),Ze&&se&&(0,I.jsx)(Sd,{height:Ie,offset:Ue,onCancel:()=>$e(!1),onSave:e=>{mt({overviewBannerOffset:e}),$e(!1)},source:se,video:P}),De&&(0,I.jsx)(Za,{directory:o,menu:{x:De.x,y:De.y,paths:[De.target.path]},onClose:()=>Oe(null),onCopy:(e,t)=>void pt(e,t),onAddToTray:te,onAddFavorite:S,onOpen:nt,onOpenFile:e=>b?b(e):void ve(e),shortcuts:Rt,target:De.target})]})}function Jf({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=z();return(0,I.jsxs)(Ff,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,I.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,I.jsx)(If,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,I.jsx)(pi,{size:11})}),(0,I.jsx)(If,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,I.jsx)(fi,{size:12})})]})}function Yf(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function Xf({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:o}){let s=z(),[c,l]=(0,D.useState)(null),[u,d]=(0,D.useState)(null),f=jn(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,D.useEffect)(()=>{Re().then(l,()=>l([]))},[o]),!c)return(0,I.jsx)(Rf,{children:s(`Reading…`)});if(c.length===0)return(0,I.jsx)(Rf,{children:s(`Folders you open often show up here.`)});let m=e=>a(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,I.jsx)(gf,{children:c.map(e=>{let i=Mn(f,e.path);return(0,I.jsxs)(_f,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Vt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,I.jsx)(vf,{children:i&&f.useIcons?(0,I.jsx)(gs,{place:i,size:18}):(0,I.jsx)(Ps,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,I.jsxs)(yf,{children:[(0,I.jsx)(`strong`,{children:i?.name||e.name}),(0,I.jsx)(bf,{children:m(e)})]})]},e.path)})}):(0,I.jsx)(xf,{children:c.map(e=>{let i=Mn(f,e.path);return(0,I.jsxs)(Sf,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Vt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,I.jsx)(gs,{place:i,size:15}):(0,I.jsx)(Ps,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,I.jsxs)(Cf,{children:[(0,I.jsx)(`strong`,{children:i?.name||e.name}),(0,I.jsx)(bf,{children:m(e)})]})]},e.path)})})}function Zf({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:o,showCheckboxes:s,openOnSingleClick:c,visibilityVersion:l}){let u=z(),[d,f]=(0,D.useState)(null),[p,m]=(0,D.useState)(null),h=jn();return(0,D.useEffect)(()=>{e&&(f(null),ye(e).then(f,()=>f(null)))},[e,l]),(0,D.useEffect)(()=>{if(F.available)return F.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&ye(e,!1).then(f,()=>void 0)})},[e]),d?t===`list`?(0,I.jsx)(Df,{children:(0,I.jsx)(wc,{error:null,listing:d,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void ve(e)),onRefresh:()=>void ye(e,!1).then(f,()=>void 0),onRename:(e,t)=>f(n=>n&&{...n,entries:n.entries.map(n=>n.fullPath.toLowerCase()===e.toLowerCase()?{...n,name:_(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:o,onSort:()=>void 0,openOnSingleClick:c,enableShortcuts:!1,showCheckboxes:s,showDetails:!1,showImages:!1,view:{...U,columns:ge.columns??[]}})}):(0,I.jsx)(Of,{children:d.entries.length===0?(0,I.jsx)(Rf,{children:u(`This folder is empty.`)}):(0,I.jsx)(kf,{children:d.entries.map(e=>{let t=Mn(h,e.fullPath);return(0,I.jsxs)(Af,{$selected:p===e.fullPath,onClick:t=>{i?(m(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Vt(t)):ve(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&h.useIcons?(0,I.jsx)(gs,{place:t,size:16}):(0,I.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,I.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,I.jsx)(Rf,{children:u(`Reading…`)})}function Qf({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=z(),s=jn(),[c,l]=(0,D.useState)(!1),[u,d]=(0,D.useState)(``),[f,p]=(0,D.useState)([]),[m,h]=(0,D.useState)(0),[g,_]=(0,D.useState)(null),[v,y]=(0,D.useState)(null),ee=(0,D.useRef)(null),b=(0,D.useRef)(null),x=(0,D.useRef)(0);(0,D.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,D.useEffect)(()=>{r&&r!==x.current&&(x.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,D.useEffect)(()=>{c&&ee.current?.select()},[c]),(0,D.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let te=()=>{d(e.replace(/\\/g,`/`)),l(!0)},S=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,D.useEffect)(()=>{if(!c){p([]);return}let e=tp(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{ye(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let C=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,D.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=b.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,I.jsxs)(sp,{onPointerDown:e=>e.stopPropagation(),ref:b,children:[(0,I.jsxs)(dp,{children:[(0,I.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?C(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):S(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:ee,spellCheck:!1,value:u}),(0,I.jsx)(fp,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,I.jsx)(pi,{size:12})}),(0,I.jsx)(fp,{$apply:!0,onClick:S,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,I.jsx)(fi,{size:14})})]}),f.length>0&&g&&(0,Sa.createPortal)((0,I.jsx)(cp,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,I.jsxs)(lp,{$active:t===m,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,I.jsx)(Ps,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,I.jsx)(up,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:ep(e,s.places);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(np,{onClick:te,title:o(`Click to type a path`),children:w.map((t,n)=>(0,I.jsxs)(rp,{$last:n===w.length-1,children:[n>0&&(0,I.jsx)(ap,{children:(0,I.jsx)(ii,{size:9})}),(0,I.jsxs)(op,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,I.jsx)(ip,{children:(0,I.jsx)(gs,{place:t.place,size:13})}):t.icon&&(0,I.jsx)(ip,{children:t.icon}),t.label]})]},t.path))}),v&&(0,I.jsx)(za,{items:[{label:o(`Open`),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),onSelect:()=>i(v.path,!0)},{label:o(`Open with…`),onSelect:()=>void Dt(v.path)},{label:o(`Copy path`),onSelect:()=>void navigator.clipboard.writeText(v.path)},{label:o(`Properties`),onSelect:()=>void Et([v.path])}],onClose:()=>y(null),x:v.x,y:v.y})]})}function $f(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function ep(e,t){let n=$f(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function tp(e){if(e.toLowerCase().startsWith(`yafm://`))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var np=i.div`
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
`,rp=i.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,ip=i.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,ap=i.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,op=i.button`
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
`,sp=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,cp=i.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Ca}
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
`,lp=i.button`
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
`,up=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dp=i.div`
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
`,fp=i.button`
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
`,pp=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,I.jsx)(`path`,{d:`M4 4v6h6`})]});function mp({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:o=!1,videoAutoplay:s=!1,platform:c}){let l=z(),u=gc(`recycle`),f=c===`windows`,[p,m]=(0,D.useState)([]),[h,g]=(0,D.useState)([]),[_,y]=(0,D.useState)(!1),[ee,b]=(0,D.useState)(null),[x,te]=(0,D.useState)(!0),[S,C]=(0,D.useState)(!1),[w,T]=(0,D.useState)(null),[E,ne]=(0,D.useState)(!1),[O,k]=(0,D.useState)(()=>new Set),[A,re]=(0,D.useState)(null),[j,ie]=(0,D.useState)(()=>{let e=In(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[ae,M]=(0,D.useState)(null),[N,P]=(0,D.useState)(null),[oe,F]=(0,D.useState)(()=>{let e=Pn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),se=(0,D.useRef)(null),ce=e=>{F(e),Fn(`yafm.recycle.preview.width`,e)},L=(0,D.useCallback)(async()=>{te(!0),T(null);try{m(await Oe(E))}catch(e){T(e instanceof Error?e.message:String(e))}finally{te(!1)}},[E]);(0,D.useEffect)(()=>{L()},[L]),(0,D.useEffect)(()=>{E||(g([]),y(!1),b(null))},[E]),(0,D.useEffect)(()=>{k(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let R=(0,D.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=hp(e,t,j.column);return j.descending?-n:n})},[p,h,j]),B=(0,D.useMemo)(()=>!t?.open||t.query.trim().length===0?R:R.filter(e=>Cn(e.name,t)||Cn(e.originalPath,t)),[R,t?.open,t?.query,t?.matchCase,t?.regex]),le=(0,D.useRef)(null);td(le,t??null,`[data-search-block]`,n??(()=>void 0),[R]),(0,D.useEffect)(()=>{k(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let ue=(0,D.useMemo)(()=>R.filter(e=>O.has(e.id)),[R,O]),de=ue.filter(e=>e.removable&&!e.isOrphan),fe=ue.filter(e=>e.removable),V=(e,t)=>{let n=t.ctrlKey||t.metaKey;k(r=>{if(t.shiftKey&&A){let t=R.findIndex(e=>e.id===A),i=R.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(R[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),re(e.id)},pe=(0,D.useCallback)(()=>k(new Set(B.map(e=>e.id))),[B]),H=B.length>0&&B.every(e=>O.has(e.id)),me=(0,D.useCallback)(async()=>{let e=de.map(e=>e.id);if(e.length!==0){C(!0);try{let t=await je(e);t.ok||await ua(a(l,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),k(new Set),await L()}finally{C(!1)}}},[L,de,l]),he=(0,D.useCallback)(async()=>{let e=fe.map(e=>e.id);if(P(null),e.length!==0){C(!0);try{let t=await Me(e);!t.ok&&!t.cancelled&&await ua(a(l,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),k(new Set),await L()}finally{C(!1)}}},[fe,L,l]),U=async()=>{P(null),C(!0);try{await Ae(E),k(new Set),await L()}finally{C(!1)}},ge=async()=>{C(!0),b(null);try{let e=await Pe();if(e.cancelled){b(`Elevation was declined — nothing was read.`);return}if(e.failed){b(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),y(!0)}finally{C(!1)}},_e=async()=>{C(!0),P(null);try{await Fe(),g([]),y(!1),b(null),await L()}finally{C(!1)}},ve=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},ye=e=>{navigator.clipboard.writeText(e.originalPath)},be=(e,t)=>{e.preventDefault(),t&&!O.has(t.id)&&k(new Set([t.id])),M({x:e.clientX,y:e.clientY})};(0,D.useEffect)(()=>(dc(`recycle`,O.size>0?(e,t)=>M({x:e,y:t}):null),()=>dc(`recycle`,null)),[O]),(0,D.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),pe()):e.key===`Delete`?(e.preventDefault(),fe.length>0&&P(`delete`)):e.key===`Enter`&&de.length>0?(e.preventDefault(),me()):e.key===`Escape`&&(k(new Set),M(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[fe.length,de.length,me,pe]);let xe=[{label:l(`Restore`),icon:(0,I.jsx)(pp,{width:14,height:14}),disabled:de.length===0,onSelect:()=>void me()},{label:l(`Delete permanently`),icon:(0,I.jsx)(di,{size:14}),danger:!0,disabled:fe.length===0,onSelect:()=>P(`delete`)},{label:l(`Properties`),icon:(0,I.jsx)(ai,{size:14}),disabled:ue.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=ue;e&&Ne(e.id)}},{label:l(`Open original location`),icon:(0,I.jsx)(Yr,{size:14}),disabled:ue.length!==1,onSelect:()=>{let[e]=ue;e&&ve(e)}},{label:l(`Copy original path`),icon:(0,I.jsx)(Ji,{size:14}),disabled:ue.length!==1,onSelect:()=>{let[e]=ue;e&&ye(e)}},{label:l(`Select all`),separatorBefore:!0,onSelect:pe},{label:l(`Refresh`),icon:(0,I.jsx)(ei,{size:14}),onSelect:()=>void L()}],Se=ue.length>0?ue[0]:null,W=Se?{name:Se.name,path:Se.contentPath||Se.originalPath,isDirectory:Se.isDirectory,size:Se.size,modified:Se.deleted,fields:[{label:l(`Type`),value:l(_p(Se))},{label:l(`Original location`),value:Se.originalPath},{label:l(`Date deleted`),value:v(Se.deleted)},{label:l(`Size`),value:Se.isDirectory?`—`:d(Se.size)},...Se.owner?[{label:l(`Owner`),value:Se.owner}]:[],{label:l(`Status`),value:Se.isOrphan?l(`Metadata only`):Se.removable?l(`Restorable`):l(`Other profile`)}]}:null;return(0,I.jsxs)(yp,{ref:se,onContextMenu:e=>be(e),children:[(0,I.jsxs)(bp,{children:[(0,I.jsxs)(xp,{children:[(0,I.jsx)(di,{size:16}),(0,I.jsx)(`span`,{children:l(`Recycle Bin`)}),(0,I.jsxs)(Sp,{children:[x?`…`:a(l,R.length,`1 item`,`{count} items`),O.size>0&&` · ${l(`{count} selected`,{count:O.size})}`]})]}),(0,I.jsxs)(Cp,{children:[(0,I.jsx)(Tp,{$on:E,onClick:()=>ne(e=>!e),title:l(`Show metadata records whose content is already gone`),type:`button`,children:l(`Orphans`)}),E&&f&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(wp,{disabled:S||_,onClick:()=>void ge(),title:l(_?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:l(S?`Working…`:_?`Admin view loaded`:`Show all (admin)…`)}),_&&h.length>0&&(0,I.jsx)(wp,{disabled:S,onClick:()=>P(`purge`),type:`button`,children:l(`Delete every orphan`)})]}),(0,I.jsx)(wp,{disabled:S||de.length===0,onClick:()=>void me(),type:`button`,children:l(`Restore`)}),(0,I.jsx)(wp,{$danger:!0,disabled:S||fe.length===0,onClick:()=>P(`delete`),type:`button`,children:l(`Delete`)}),(0,I.jsx)(wp,{disabled:S||R.length===0,onClick:()=>P(`empty`),type:`button`,children:l(`Empty`)}),(0,I.jsx)(Ep,{onClick:()=>void L(),title:l(`Refresh`),type:`button`,children:(0,I.jsx)(ei,{size:14})}),u.available&&(0,I.jsx)(Ep,{onClick:e=>u.open(e.clientX,e.clientY),title:l(`Selection menu`),type:`button`,children:(0,I.jsx)(ta,{size:14})})]})]}),ee&&(0,I.jsx)(qp,{children:ee}),w&&(0,I.jsx)(Jp,{children:w}),!w&&!x&&(t?.open&&t.query.trim().length>0?B.length===0:R.length===0)&&(0,I.jsx)(Jp,{children:t?.open&&t.query.trim().length>0?l(`No matching items.`):l(`The recycle bin is empty.`)}),R.length>0&&(0,I.jsxs)(Kp,{children:[(0,I.jsxs)(Dp,{ref:le,children:[(0,I.jsxs)(kp,{children:[(0,I.jsx)(Fp,{$checked:H,$partial:!H&&O.size>0,onClick:()=>H?k(new Set):pe(),title:l(H?`Select none`:`Select all`),type:`button`,children:H?(0,I.jsx)(fi,{size:9}):O.size>0&&(0,I.jsx)(Ip,{})}),(0,I.jsxs)(Ap,{onClick:()=>Ce(`name`),type:`button`,children:[l(`Name`),gp(j,`name`)]}),(0,I.jsxs)(Ap,{onClick:()=>Ce(`original`),type:`button`,children:[l(`Original location`),gp(j,`original`)]}),(0,I.jsxs)(Ap,{onClick:()=>Ce(`deleted`),type:`button`,children:[l(`Date deleted`),gp(j,`deleted`)]}),(0,I.jsxs)(Ap,{onClick:()=>Ce(`size`),type:`button`,children:[l(`Size`),gp(j,`size`)]}),(0,I.jsxs)(Ap,{onClick:()=>Ce(`type`),type:`button`,children:[l(`Type`),gp(j,`type`)]}),(0,I.jsx)(`span`,{})]}),(0,I.jsx)(jp,{onClick:e=>{e.target===e.currentTarget&&k(new Set)},children:R.map(e=>(0,I.jsxs)(Mp,{$checked:O.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>V(e,t),onContextMenu:t=>be(t,e),onDoubleClick:()=>{k(new Set([e.id])),re(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,I.jsx)(Pp,{$checked:O.has(e.id),children:O.has(e.id)&&(0,I.jsx)(fi,{size:9})}),(0,I.jsxs)(Lp,{children:[(0,I.jsx)(vp,{entry:e}),(0,I.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,I.jsx)(Gp,{children:l(`metadata only`)}),e.owner&&(0,I.jsx)(Gp,{$other:!0,children:l(`other profile`)})]}),(0,I.jsx)(zp,{children:e.originalPath}),(0,I.jsx)(Bp,{children:v(e.deleted)}),(0,I.jsx)(Vp,{children:e.isDirectory?`—`:d(e.size)}),(0,I.jsx)(Hp,{children:l(_p(e))}),(0,I.jsxs)(Up,{children:[e.removable&&!e.isOrphan&&(0,I.jsx)(Wp,{onClick:t=>{t.stopPropagation(),je([e.id]).then(L)},title:l(`Restore to its original folder`),type:`button`,children:(0,I.jsx)(pp,{})}),e.removable&&(0,I.jsx)(Wp,{$danger:!0,onClick:t=>{t.stopPropagation(),k(new Set([e.id])),P(`delete`)},title:e.isOrphan?l(`Remove the leftover record`):l(`Delete permanently`),type:`button`,children:(0,I.jsx)(di,{size:13})})]})]},e.id))})]}),r&&(0,I.jsx)(Ro,{emptyNote:l(`Nothing selected.`),info:W,onWidth:ce,selectionNote:ue.length>1?a(l,ue.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:o,videoAutoplay:s,width:oe})]}),ae&&(0,I.jsx)(za,{items:xe,onClose:()=>M(null),x:ae.x,y:ae.y}),(0,I.jsx)(Do,{confirmLabel:l(N===`empty`?`Empty the bin`:N===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:N===`empty`?a(l,R.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):N===`purge`?l(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):a(l,fe.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>P(null),onConfirm:()=>{N===`empty`?U():N===`purge`?_e():he()},open:N!==null,title:l(N===`empty`?`Empty the recycle bin`:N===`purge`?`Delete every orphan`:`Delete permanently`)})]});function Ce(e){ie(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Ln(`yafm.recycle.sort`,n),n})}}function hp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return _p(e).localeCompare(_p(t),void 0,{sensitivity:`base`})}}function gp(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function _p(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function vp({entry:e}){let t=an(e.originalPath,e.isDirectory);return(0,I.jsx)(Rp,{children:t?(0,I.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,I.jsx)(Yr,{}):(0,I.jsx)(Xr,{})})}var yp=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,bp=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,xp=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Sp=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Cp=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,wp=i.button`
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
`,Tp=i(wp)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Ep=i.button`
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
`,Dp=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Op=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,kp=i.div`
    display: grid;
    grid-template-columns: ${Op};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Ap=i.button`
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
`,jp=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Mp=i.div`
    display: grid;
    grid-template-columns: ${Op};
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
`,Np=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Pp=i.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Fp=i.button`
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
`,Ip=i.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Lp=i(Np)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Rp=i.span`
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
`,zp=i(Np)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Bp=i(Np)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Vp=i(Np)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Hp=i(Np)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Up=i.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Wp=i.button`
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
`,Gp=i.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Kp=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,qp=i.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Jp=i.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Yp(){return F.available?(await F.request(`app.tags`)).tags:[]}async function Xp(e){return!F.available||!e?!1:(await F.request(`app.tags.delete`,{name:e})).ok}async function Zp(e,t){return!F.available||!e?[]:(await F.request(`app.tags.create`,{name:e,color:t})).tags}async function Qp(e,t){return!F.available||!e?!1:(await F.request(`app.tags.color`,{name:e,color:t})).ok}async function $p(e,t){return!F.available||!e||!t?!1:(await F.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function em(){let e=z();return(0,I.jsx)(tm,{title:e(`Always applies to every folder`),children:e(`Global`)})}var tm=i.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,nm=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function rm(e){return`"${e.replaceAll(`"`,``)}"`}function im(e){let t=document.documentElement.style;for(let n of nm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${rm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function am(){return F.available?(await F.request(`app.fonts`)).fonts??[]:[]}function om({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=z(),[s,c]=(0,D.useState)(null),[l,u]=(0,D.useState)(``),d=(0,D.useRef)(null),f=(0,D.useRef)(null),p=(0,D.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,D.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(sm,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,I.jsx)(cm,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,I.jsx)(lm,{children:`▾`})]}),s&&(0,Sa.createPortal)((0,I.jsxs)(um,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,I.jsxs)(dm,{children:[(0,I.jsx)(Qr,{size:12}),(0,I.jsx)(fm,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,I.jsxs)(pm,{children:[(0,I.jsxs)(mm,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,I.jsxs)(gm,{children:[n,` `,(0,I.jsx)(vm,{children:o(`(default)`)})]}),!e&&(0,I.jsx)(fi,{size:11})]}),p.map(t=>(0,I.jsxs)(mm,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,I.jsxs)(hm,{children:[(0,I.jsx)(gm,{children:t}),(0,I.jsx)(_m,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,I.jsx)(fi,{size:11})]},t)),p.length===0&&(0,I.jsx)(ym,{children:o(`No matching font.`)})]})]}),document.body)]})}var sm=i.button`
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
`,cm=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lm=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,um=i.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${Na}
`,dm=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,fm=i.input`
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
`,pm=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,mm=i.button`
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
`,hm=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,gm=i.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_m=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,vm=i.span`
    color: var(--text-muted);
    font-size: 10px;
`,ym=i.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,bm=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],xm=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Sm=`en`,Cm=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],wm=new Date(2026,10,5,16,8).getTime(),Tm=`system`,Em={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},Dm=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],Om=`yafm.colors.recent`;function km(){let e=In(Om);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Am({appInfo:e,focusSection:n,onSettingsChanged:r,find:i,onSearchMatches:o}){let s=z(),[c,l]=(0,D.useState)([]),[u,f]=(0,D.useState)(null),[h,g]=(0,D.useState)(null),[v,ee]=(0,D.useState)(null),[b,x]=(0,D.useState)(``),[te,C]=(0,D.useState)(`file`),[T,E]=(0,D.useState)(!1),[ne,O]=(0,D.useState)(!1),[k,A]=(0,D.useState)(null),[re,j]=(0,D.useState)(!1),[ie,ae]=(0,D.useState)(!1),[M,N]=(0,D.useState)(null),[P,oe]=(0,D.useState)(null),[F,se]=(0,D.useState)(null),[L,R]=(0,D.useState)(!1),[B,le]=(0,D.useState)(null),[ue,de]=(0,D.useState)(null),[fe,V]=(0,D.useState)(!1),[pe,H]=(0,D.useState)([]),[me,he]=(0,D.useState)(null),[U,_e]=(0,D.useState)(!1),[ve,ye]=(0,D.useState)(null),[be,xe]=(0,D.useState)(``),[Se,W]=(0,D.useState)(_s),[Ce,we]=(0,D.useState)(null),[Te,Ee]=(0,D.useState)(null),[De,Oe]=(0,D.useState)(``),[ke,Ae]=(0,D.useState)(``),[je,Me]=(0,D.useState)(null),[Ne,Pe]=(0,D.useState)(km),[Fe,Ie]=(0,D.useState)({}),[Le,Re]=(0,D.useState)(null),[ze,Be]=(0,D.useState)(null),[Ve,Ue]=(0,D.useState)(!1),[We,Ge]=(0,D.useState)(!1),[Je,$e]=(0,D.useState)(null),[tt,nt]=(0,D.useState)(Dm[0].id),[ut,pt]=(0,D.useState)([]),[mt,ht]=(0,D.useState)(null),[gt,_t]=(0,D.useState)(null),[vt,yt]=(0,D.useState)(null),[bt,xt]=(0,D.useState)(!1),[St,Ct]=(0,D.useState)(``),wt=(0,D.useRef)(null),Tt=(0,D.useRef)({}),Et=h?.defaultView??ge,Dt=h?.themePresets??[],Ot=P?P.registered&&P.pathMatches:h?.archiveHandler??!1,kt=P?.registered??h?.archiveHandler??!1,At=F?F.registered&&F.pathMatches:h?.defaultFileManager??!1;td(wt,i??null,`section`,o??(()=>void 0),[h]),(0,D.useEffect)(()=>{let e=wt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){nt(Dm[Dm.length-1].id);return}let n=t+110,r=Dm[0].id;for(let{id:e}of Dm){let t=Tt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}nt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let jt=e=>t=>{Tt.current[e]=t},Mt=e=>{Tt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),nt(e)};(0,D.useEffect)(()=>{n&&Mt(n)},[n]),(0,D.useEffect)(()=>{ce().then(e=>l(e.available),()=>l([]))},[]),(0,D.useEffect)(()=>{am().then(pt,()=>pt([]))},[]),(0,D.useEffect)(()=>{dt().then(_t,()=>_t(null))},[]),(0,D.useEffect)(()=>{rt().then(Be,()=>void 0)},[]),(0,D.useEffect)(()=>{He().then(f,()=>f(null)),Ke().then(g,()=>g(null)),ct().then(j,()=>j(!1)),Ye().then(oe,()=>oe(null)),G().then(se,()=>se(null)),Yp().then(H,()=>H([]))},[]),(0,D.useEffect)(()=>{let e=()=>void ot().then(A,()=>A(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let K=async e=>{if(!h)return;let t={...h,...e};Object.keys(e).every(e=>t[e]===h[e])||(g(t),en(),g(await Qe(t)),r())},Nt=async e=>{let t=await oa(e);if(!t)return;let n=h?.backgroundCustom??[];await K({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Pt=async()=>{let e=St.trim();if(!h||!w(e))return;let t=h.backgroundCustom??[];Ct(``),await K({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Ft=e=>{if(!h)return;let t=h.backgroundSource;K({backgroundCustom:h.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},It=async()=>{if(!h)return;let t=await aa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;h.protectedPaths.includes(r)||await K({protectedPaths:[...h.protectedPaths,r]})},Lt=()=>{let e=De.trim();h&&e&&!h.protectedPaths.includes(e)&&(Oe(``),K({protectedPaths:[...h.protectedPaths,e]}))},zt=()=>{if(!h||!Ce)return;let e=Ce.value.trim(),t=Ce.from;we(null),e.length!==0&&e!==t&&K({protectedPaths:h.protectedPaths.map(n=>n===t?e:n)})},Bt=e=>{h&&K({protectedPaths:h.protectedPaths.filter(t=>t!==e)})},Vt=async()=>{let e=await qe();e.length>0&&await K({protectedPaths:e})},Wt=()=>{if(!h||!Te)return;let e=Te.value.trim(),t=Te.from;Ee(null),e&&e!==t&&K({directoryIndexBlacklist:h.directoryIndexBlacklist.map(n=>n===t?e:n)})},Gt=()=>{let e=ke.trim();h&&e&&!h.directoryIndexBlacklist.includes(e)&&(Ae(``),K({directoryIndexBlacklist:[...h.directoryIndexBlacklist,e]}))},Kt=async()=>{if(!h)return;let t=await aa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;h.directoryIndexBlacklist.includes(r)||await K({directoryIndexBlacklist:[...h.directoryIndexBlacklist,r]})},qt=e=>{h&&K({directoryIndexBlacklist:h.directoryIndexBlacklist.filter(t=>t!==e)})},Jt=()=>{K({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},Yt=()=>{if(!h||je===null)return;let e=je.trim()||`yyyy/MM/dd HH:mm`;Me(null),e!==h.timeFormatPattern&&K({timeFormatPattern:e})},Xt=(e,t)=>{Pe(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Ln(Om,i),i})},Zt=m(h?.accentColor,S),Qt=m(h?.secondaryColor,y),$t=(e,t)=>{h&&(Xt(`accent`,Zt),Xt(`secondary`,Qt),K({accentColor:e,secondaryColor:t}))},q=(e,t)=>{h&&(Xt(e,e===`accent`?Zt:Qt),K(e===`accent`?{accentColor:t}:{secondaryColor:t}))},J=async()=>{Ue(!0),Ge(!1);try{Be(await it())}catch{Ge(!0)}finally{Ue(!1)}},tn=async()=>{if(!h||!Le)return;let e=Le.name.trim()||`${Le.accent.toUpperCase()} / ${Le.secondary.toUpperCase()}`,t=[...h.themePresets,{name:e,accent:Le.accent,secondary:Le.secondary}];Re(null),await K({themePresets:t})},nn=async e=>{h&&await K({themePresets:h.themePresets.filter((t,n)=>n!==e)})},rn=e=>{let t=Je;$e(null),t&&t.role===e&&(e===`accent`?Zt:Qt).toLowerCase()!==t.color.toLowerCase()&&Xt(e,t.color)},an=async()=>{let e=be.trim();if(e&&!U){_e(!0),ye(null);try{H(await Zp(e,Se)),xe(``)}catch{ye(s(`Could not add the tag.`))}finally{_e(!1)}}},on=async(e,t)=>{H(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Qp(e,t)||ye(s(`Could not change the tag's color.`))},sn=async e=>{if(U)return;_e(!0),ye(null);let t=await Xp(e);H(await Yp()),t||ye(`"${e}" is still used by a folder whose index could not be updated.`),_e(!1)},cn=async()=>{let e=me;if(!e||U)return;let t=e.value.trim();t.length===0||t===e.name?he(null):(_e(!0),ye(null),await $p(e.name,t)?(H(await Yp()),he(null)):ye(`Could not rename "${e.name}".`),_e(!1))},ln=async e=>{let t=new Set(Et.columns??ge.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=xc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await K({defaultView:{...Et,columns:n}})},un=async()=>{if(ie)return;let e=!re;ae(!0),N(null);try{let t=await lt(e);j(t),g(e=>e&&{...e,linksEnabled:t}),r(),t!==e&&N(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{N(`The request to Windows failed. Try again.`)}finally{ae(!1)}},dn=async()=>{if(!L){R(!0),le(null);try{let e=await Xe();oe(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),r(),t||le(`Windows did not accept the archive registration. Try again.`)}catch{le(`The request to Windows failed. Try again.`)}finally{R(!1)}}},fn=async()=>{if(!L){R(!0),le(null);try{let e=await Ze();oe(e),g(e=>e&&{...e,archiveHandler:!1}),r(),e.registered&&le(`The registration is still there. Try turning it off again.`)}catch{le(`The request to Windows failed. Try again.`)}finally{R(!1)}}},pn=async(e,t)=>{if(!h)return;let n={...h.extensionIcons};t===null?delete n[e]:n[e]=t,await K({extensionIcons:n})},mn={...Rt,...h?.shortcuts};(0,D.useEffect)(()=>{if(!ue)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){de(null);return}let t=Ht(e);t&&(de(null),K({shortcuts:{...mn,[ue]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[ue,h]),(0,D.useEffect)(()=>{if(!fe)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){V(!1);return}let t=Ht(e);t&&(V(!1),K({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[fe,h]);let hn=async e=>{await K({recentLimit:Math.min(Math.max(e,0),50)})},gn=(e,t)=>{let n=t??Fe[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Ie(t=>({...t,[e]:void 0})),K(i)},_n=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;ht(null),await K({sharePortMode:`custom`,sharePort:n}),await pd(n,`custom`)},vn=async e=>{let t=e===`custom`,n=t?h?.sharePort??8080:null;await K({sharePortMode:t?`custom`:`random`,sharePort:n}),await pd(n,t?`custom`:`random`)},yn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;xt(!0),yt(null);try{let e=await ft(t);_t(e),yt(e.error),e.error||await K({startupMode:t})}finally{xt(!1)}},bn=async e=>{await K({galleryRoots:e.length>0?e:null})},xn=async()=>{let e=await aa(),t=h?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await bn([...t,e])},Sn=async()=>{let e=b.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await pn(e,te),x(``))},Cn=async()=>{O(!0);try{let e=await aa();if(!e)return;let t=await oa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await et(e.replace(/[\\/][^\\/]+$/,``),_(e),`file:${t}`)&&(en(),ee({folder:e,icon:t}))}finally{O(!1)}},wn=async(e,t)=>{let n={...h?.fonts};t?n[e]=t:delete n[e],await K({fonts:n})};return(0,I.jsxs)(Hm,{children:[(0,I.jsxs)(Um,{ref:wt,children:[(0,I.jsxs)(Wm,{ref:jt(`application`),children:[(0,I.jsx)(Vm,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Version`)}),(0,I.jsx)(bh,{children:e?`v${e.version}`:`—`})]}),(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Platform`)}),(0,I.jsx)(bh,{children:e?.platform??`—`})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Language`)}),(0,I.jsx)($,{children:s(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(Rm,{disabled:!h,onChange:e=>void K({language:e}),options:[Tm,...c.length>0?c:[Sm]],value:h?.language??Sm})})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Picker window size`)}),(0,I.jsx)($,{children:s(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Ah,{inputMode:`numeric`,onBlur:e=>gn(`width`,e.currentTarget.value),onChange:e=>Ie(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Fe.width??String(h?.pickerWindowWidth??1200)}),(0,I.jsx)(bh,{children:`×`}),(0,I.jsx)(Ah,{inputMode:`numeric`,onBlur:e=>gn(`height`,e.currentTarget.value),onChange:e=>Ie(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Fe.height??String(h?.pickerWindowHeight??800)})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Web server port`)}),(0,I.jsx)($,{children:s(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(eo,{disabled:!h,onChange:e=>void vn(e),options:[{value:`random`,label:s(`Random`)},{value:`custom`,label:s(`Custom port`)}],value:h?.sharePortMode??`random`,width:160})})]}),h?.sharePortMode===`custom`&&(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Custom port`)}),(0,I.jsx)($,{children:s(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(Ah,{inputMode:`numeric`,onBlur:e=>void _n(e.currentTarget.value),onChange:e=>ht(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:mt??(h?.sharePort?String(h.sharePort):``)})})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Link paths`)}),(0,I.jsx)($,{children:s(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(eo,{disabled:!h,onChange:e=>void K({linkPathMode:e}),options:[{value:`relative`,label:s(`Relative`)},{value:`absolute`,label:s(`Absolute`)}],value:h?.linkPathMode??`relative`,width:160})})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Global hotkey`)}),(0,I.jsx)($,{children:s(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(cg,{$listening:fe,disabled:!h,onClick:()=>V(!0),type:`button`,children:fe?s(`Press a key…`):h?.globalHotkey?Ut(h.globalHotkey):s(`None`)}),h?.globalHotkey&&(0,I.jsx)(Ch,{onClick:()=>void K({globalHotkey:null}),type:`button`,children:s(`Clear`)})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Open yafm:// links`)}),(0,I.jsx)($,{children:s(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),M&&(0,I.jsx)(yh,{children:M})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Dh,{$on:re,children:s(re?`Active`:`Off`)}),(0,I.jsx)(Oh,{$on:re,disabled:ie,onClick:()=>void un(),title:s(re?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,I.jsx)(kh,{})})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Use as the default file manager`)}),(0,I.jsx)($,{children:s(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),F?.registered&&!F.pathMatches&&(0,I.jsx)(yh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:F.registeredPath??`?`})})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Dh,{$on:At,children:s(At?`Active`:`Off`)}),(0,I.jsx)(Oh,{$on:At,disabled:!h,onClick:()=>void(async()=>{let e=F?.registered&&!F.pathMatches?!0:!h?.defaultFileManager;await K({defaultFileManager:e}),se(await G().catch(()=>null))})(),title:s(At?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,I.jsx)(kh,{})})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Open archives with this app`)}),(0,I.jsx)($,{children:s(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,I.jsx)($,{children:s(`When this is off, opening an archive uses the system's default application instead.`)}),P?.registered&&!P.pathMatches&&(0,I.jsx)(yh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:P.registeredPath??`?`})}),B&&(0,I.jsx)(yh,{children:B})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Dh,{$on:Ot,children:s(Ot?`Active`:`Off`)}),(0,I.jsx)(lg,{disabled:!h||L||Ot,onClick:()=>void dn(),type:`button`,children:s(`Register`)}),e?.platform===`windows`&&(0,I.jsx)(lg,{onClick:()=>void at(`ms-settings:defaultapps`),type:`button`,children:s(`Default apps…`)}),(0,I.jsx)(Eh,{disabled:!h||L||!kt,onClick:()=>void fn(),type:`button`,children:s(`Unregister`)})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Reopen the tabs that were open`)}),(0,I.jsx)($,{children:s(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,I.jsx)(Oh,{$on:h?.restoreTabs??!0,disabled:!h,onClick:()=>void K({restoreTabs:!h?.restoreTabs}),type:`button`,children:(0,I.jsx)(kh,{})})]})]})]}),(0,I.jsxs)(Wm,{ref:jt(`startup`),children:[(0,I.jsx)(Vm,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Start with the computer`)}),(0,I.jsx)($,{children:s(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),vt&&(0,I.jsx)(yh,{children:vt}),gt&&!gt.supported&&(0,I.jsx)(yh,{children:s(`This platform cannot create a per-user startup entry.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(eo,{disabled:!h||bt||gt!==null&&!gt.supported,onChange:e=>void yn(e),options:[{value:`none`,label:s(`None`)},{value:`shortcut`,label:s(`Shortcut`)},{value:`task`,label:s(`Scheduled task`)}],value:gt?.mode??h?.startupMode??`none`,width:170})})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Start hidden in the tray`)}),(0,I.jsx)($,{children:s(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(Oh,{$on:h?.startHidden??!1,disabled:!h,onClick:()=>void K({startHidden:!h?.startHidden}),type:`button`,children:(0,I.jsx)(kh,{})})})]})]})]}),(0,I.jsxs)(Wm,{ref:jt(`fonts`),children:[(0,I.jsx)(Vm,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,I.jsxs)(Km,{children:[nm.map(e=>(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(e.label)}),(0,I.jsx)($,{children:s(`Falls back to {font} until another family is chosen.`,{font:s(e.fallback)})})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(om,{defaultLabel:s(e.fallback),disabled:!h,fonts:ut,onChange:t=>void wn(e.id,t),sample:e.sample,value:h?.fonts?.[e.id]??null})})]},e.id)),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Reset`)}),(0,I.jsx)($,{children:s(`Back to the app's built-in font for every role.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(lg,{onClick:()=>void K({fonts:{}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,I.jsxs)(Wm,{ref:jt(`time`),children:[(0,I.jsx)(Vm,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,I.jsx)(Km,{children:(0,I.jsxs)(qm,{children:[(0,I.jsxs)(Jm,{children:[(0,I.jsx)(Q,{children:s(`Format`)}),(0,I.jsx)($,{children:s(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,I.jsx)(ng,{children:Cm.map(e=>(0,I.jsx)(rg,{$active:(h?.timeFormat??`24`)===e.id,onClick:()=>void K({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(h?.timeFormat??`24`)===`custom`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ig,{"aria-label":s(`Pattern`),onBlur:Yt,onChange:e=>Me(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Yt()):e.key===`Escape`&&Me(null)},spellCheck:!1,value:je??h?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,I.jsx)($,{children:s(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,I.jsxs)(ag,{children:[(0,I.jsx)(`span`,{children:s(`Preview`)}),(0,I.jsx)(`code`,{children:p(wm,h?.timeFormat,je??h?.timeFormatPattern)})]})]})})]}),(0,I.jsxs)(Wm,{ref:jt(`updates`),children:[(0,I.jsx)(Vm,{note:`The running build and the newest one published.`,title:`Updates`}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Current version`)}),(0,I.jsx)(bh,{children:e?`v${e.version}`:`—`})]}),(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Latest version`)}),(0,I.jsx)(bh,{children:ze?`v${ze.latest}`:`—`})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Check for updates`)}),(0,I.jsx)($,{children:ze&&!ze.available?s(`You are on the latest version.`):s(`Reads the version file the release workflow publishes.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(lg,{disabled:Ve,onClick:()=>void J(),type:`button`,children:s(Ve?`Checking…`:`Check now`)})})]}),ze?.available&&(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Version {version} is available.`,{version:ze.latest})}),(0,I.jsx)($,{children:s(`Download the new build from the releases page.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(lg,{onClick:()=>void at(xm),type:`button`,children:s(`Open release page`)})})]}),We&&(0,I.jsx)(X,{children:(0,I.jsx)(yh,{children:s(`Could not check for updates.`)})})]})]}),(0,I.jsxs)(Wm,{ref:jt(`colors`),children:[(0,I.jsx)(Vm,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(qm,{children:[(0,I.jsxs)(Jm,{children:[(0,I.jsx)(Q,{children:s(`Presets`)}),(0,I.jsx)($,{children:s(`One click changes the accent and the highlight together.`)})]}),(0,I.jsxs)(Ym,{children:[Ul.map(e=>(0,I.jsxs)(Xm,{$on:Zt.toLowerCase()===e.accent&&Qt.toLowerCase()===e.secondary,onClick:()=>$t(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,I.jsxs)(rh,{children:[(0,I.jsx)(`i`,{style:{background:e.accent}}),(0,I.jsx)(`i`,{style:{background:e.secondary}})]}),(0,I.jsx)(Zm,{children:s(e.name)})]},e.name)),Dt.map((e,t)=>(0,I.jsxs)(Qm,{children:[(0,I.jsxs)(Xm,{$on:Zt.toLowerCase()===e.accent.toLowerCase()&&Qt.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>$t(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,I.jsxs)(rh,{children:[(0,I.jsx)(`i`,{style:{background:e.accent}}),(0,I.jsx)(`i`,{style:{background:e.secondary}})]}),(0,I.jsx)(Zm,{children:e.name})]}),(0,I.jsx)($m,{onClick:()=>void nn(t),title:s(`Remove preset`),type:`button`,children:(0,I.jsx)(pi,{size:9})})]},`${e.name}-${t}`)),Le?(0,I.jsxs)(th,{children:[(0,I.jsxs)(rh,{children:[(0,I.jsx)(`i`,{style:{background:Le.accent}}),(0,I.jsx)(`i`,{style:{background:Le.secondary}})]}),(0,I.jsx)(nh,{autoFocus:!0,maxLength:24,onChange:e=>Re({...Le,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),tn()):e.key===`Escape`&&(e.preventDefault(),Re(null))},placeholder:s(`Preset name`),spellCheck:!1,value:Le.name}),(0,I.jsx)(Ch,{onClick:()=>void tn(),type:`button`,children:s(`Save`)}),(0,I.jsx)(Ch,{onClick:()=>Re(null),type:`button`,children:s(`Cancel`)})]}):(0,I.jsxs)(eh,{disabled:!h,onClick:()=>Re({name:``,accent:Zt,secondary:Qt}),title:s(`Save the current colours as a preset`),type:`button`,children:[(0,I.jsx)(ti,{size:12}),s(`Add preset`)]})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Accent color`)}),(0,I.jsx)($,{children:s(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Bm,{colors:Ne.accent,current:Zt,onApply:e=>q(`accent`,e)}),(0,I.jsx)(wh,{"aria-label":s(`Accent color`),disabled:!h,onBlur:()=>rn(`accent`),onChange:e=>void K({accentColor:e.target.value}),onFocus:()=>$e({role:`accent`,color:Zt}),type:`color`,value:Zt}),(0,I.jsx)(Th,{children:Zt.toUpperCase()})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Secondary color`)}),(0,I.jsx)($,{children:s(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Bm,{colors:Ne.secondary,current:Qt,onApply:e=>q(`secondary`,e)}),(0,I.jsx)(wh,{"aria-label":s(`Secondary color`),disabled:!h,onBlur:()=>rn(`secondary`),onChange:e=>void K({secondaryColor:e.target.value}),onFocus:()=>$e({role:`secondary`,color:Qt}),type:`color`,value:Qt}),(0,I.jsx)(Th,{children:Qt.toUpperCase()})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Reset colors`)}),(0,I.jsx)($,{children:s(`Returns the interface to the default blue and indigo theme.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(Ch,{disabled:!h,onClick:()=>{Xt(`accent`,Zt),Xt(`secondary`,Qt),K({accentColor:null,secondaryColor:null})},type:`button`,children:s(`Reset`)})})]})]})]}),(0,I.jsxs)(Wm,{ref:jt(`background`),children:[(0,I.jsx)(Vm,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(qm,{children:[(0,I.jsxs)(Jm,{children:[(0,I.jsx)(Q,{children:s(`Wallpaper`)}),(0,I.jsx)($,{children:s(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,I.jsx)(Hh,{children:(0,I.jsx)(Uh,{$active:!h?.backgroundSource,onClick:()=>void K({backgroundSource:null}),title:s(`None`),type:`button`,children:(0,I.jsx)(Jh,{children:s(`None`)})})}),(0,I.jsxs)(zh,{children:[Kl.map(e=>(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Vh,{children:s(e.name)}),(0,I.jsx)(Hh,{children:e.variants.map(t=>(0,I.jsx)(Uh,{$active:h?.backgroundSource===t.id,onClick:()=>void K({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,I.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Vh,{children:s(`Motion`)}),(0,I.jsx)(Hh,{children:Gl.map(e=>(0,I.jsxs)(Uh,{$active:h?.backgroundSource===e.id,onClick:()=>void K({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,I.jsx)(`img`,{alt:``,src:e.poster}),(0,I.jsx)(Kh,{children:(0,I.jsx)(vi,{size:11})})]},e.id))})]}),(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Vh,{children:s(`Custom`)}),(0,I.jsxs)(Hh,{children:[(h?.backgroundCustom??[]).map(e=>(0,I.jsx)(Lm,{active:h?.backgroundSource===`file:${e}`||h?.backgroundSource===`url:${e}`||h?.backgroundSource===e,onRemove:()=>Ft(e),onSelect:()=>void K({backgroundSource:w(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,I.jsxs)(qh,{onClick:()=>void Nt([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,I.jsx)(ti,{size:12}),s(`Image…`)]}),(0,I.jsxs)(qh,{onClick:()=>void Nt([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,I.jsx)(ti,{size:12}),s(`Video…`)]})]})]})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Image or video URL`)}),(0,I.jsx)($,{children:s(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Ah,{onChange:e=>Ct(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Pt()},placeholder:`https://…`,value:St}),(0,I.jsx)(Ch,{disabled:!w(St),onClick:()=>void Pt(),type:`button`,children:s(`Add`)})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Blur`)}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Rh,{max:40,min:0,onChange:e=>void K({backgroundBlur:Number(e.target.value)}),type:`range`,value:h?.backgroundBlur??0}),(0,I.jsxs)(bh,{children:[h?.backgroundBlur??0,`px`]})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Saturation`)}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Rh,{max:200,min:0,onChange:e=>void K({backgroundSaturation:Number(e.target.value)}),type:`range`,value:h?.backgroundSaturation??100}),(0,I.jsxs)(bh,{children:[h?.backgroundSaturation??100,`%`]})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Brightness`)}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Rh,{max:150,min:40,onChange:e=>void K({backgroundBrightness:Number(e.target.value)}),type:`range`,value:h?.backgroundBrightness??100}),(0,I.jsxs)(bh,{children:[h?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,I.jsxs)(Wm,{ref:jt(`safety`),children:[(0,I.jsx)(Vm,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(qm,{children:[(0,I.jsxs)(Jm,{children:[(0,I.jsx)(Q,{children:s(`Protected folders`)}),(0,I.jsx)($,{children:s(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,I.jsx)(Yh,{children:(h?.protectedPaths??[]).map(e=>(0,I.jsxs)(Xh,{children:[(0,I.jsx)(Zh,{"aria-label":s(`Protected path`),onBlur:zt,onChange:t=>we({from:e,value:t.target.value}),onFocus:()=>we({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),zt()):e.key===`Escape`&&we(null)},spellCheck:!1,value:Ce?.from===e?Ce.value:e}),(0,I.jsx)(Qh,{onClick:()=>Bt(e),title:s(`Remove`),type:`button`,children:(0,I.jsx)(pi,{size:10})})]},e))}),(0,I.jsxs)(eg,{children:[(0,I.jsx)(tg,{"aria-label":s(`New protected rule`),onChange:e=>Oe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Lt())},placeholder:`*.log`,spellCheck:!1,value:De}),(0,I.jsx)(Ch,{onClick:Lt,type:`button`,children:s(`Add the rule`)})]}),(0,I.jsxs)($h,{children:[(0,I.jsx)(Ch,{onClick:()=>void Vt(),type:`button`,children:s(`Restore defaults`)}),(0,I.jsx)(Ch,{onClick:()=>void It(),type:`button`,children:s(`Add folder…`)})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Confirmation delay`)}),(0,I.jsx)($,{children:s(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Rh,{max:30,min:2,onChange:e=>void K({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:h?.deleteDelaySeconds??5}),(0,I.jsxs)(bh,{children:[h?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,I.jsxs)(Wm,{ref:jt(`tags`),children:[(0,I.jsx)(Vm,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsxs)(vh,{children:[(0,I.jsx)(xh,{"aria-label":s(`Color of the new tag`),onChange:e=>W(e.target.value),type:`color`,value:Se}),(0,I.jsx)(Ah,{onChange:e=>xe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),an())},placeholder:s(`New tag`),spellCheck:!1,value:be})]}),(0,I.jsx)($,{children:s(`Add a tag here; it is available in every folder.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(Ch,{disabled:U||be.trim().length===0,onClick:()=>void an(),type:`button`,children:s(`Add`)})})]}),ve&&(0,I.jsx)(X,{children:(0,I.jsx)(yh,{children:ve})}),pe.length===0&&(0,I.jsx)(X,{children:(0,I.jsx)($,{children:s(`No tags yet. Add one below; it is available in every folder.`)})}),pe.map(e=>(0,I.jsx)(X,{children:me?.name===e.name?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsxs)(vh,{children:[(0,I.jsx)(xh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void on(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,I.jsx)(Sh,{autoFocus:!0,disabled:U,onChange:t=>he({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),cn()):e.key===`Escape`&&(e.preventDefault(),he(null))},value:me.value})]}),(0,I.jsx)($,{children:s(`Press Enter to save, Escape to cancel.`)})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Ch,{disabled:U,onClick:()=>void cn(),type:`button`,children:s(`Save`)}),(0,I.jsx)(Ch,{disabled:U,onClick:()=>he(null),type:`button`,children:s(`Cancel`)})]})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsxs)(vh,{children:[(0,I.jsx)(xh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void on(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,I.jsx)(Q,{children:e.name})]}),(0,I.jsx)($,{children:a(s,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Ch,{disabled:U,onClick:()=>he({name:e.name,value:e.name}),type:`button`,children:s(`Edit`)}),(0,I.jsxs)(Eh,{disabled:U,onClick:()=>void sn(e.name),type:`button`,children:[(0,I.jsx)(di,{size:13}),s(`Remove`)]})]})]})},e.name))]})]}),(0,I.jsxs)(Wm,{ref:jt(`files-view`),children:[(0,I.jsx)(Vm,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Default view`)}),(0,I.jsx)($,{children:s(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsxs)(Ih,{children:[(0,I.jsx)(Lh,{$on:Et.mode===`list`,onClick:()=>void K({defaultView:{...Et,mode:`list`}}),type:`button`,children:s(`List`)}),(0,I.jsx)(Lh,{$on:Et.mode===`grid`,onClick:()=>void K({defaultView:{...Et,mode:`grid`}}),type:`button`,children:s(`Grid`)})]})})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`List icon size`)}),(0,I.jsx)($,{children:s(`The icon in the list rows.`)})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Rh,{max:48,min:16,onChange:e=>void K({defaultView:{...Et,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Et.iconSize}),(0,I.jsxs)(bh,{children:[Et.iconSize,`px`]})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Grid size`)}),(0,I.jsx)($,{children:s(`The height of a grid tile; the icon inside follows it.`)})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Rh,{max:260,min:100,onChange:e=>void K({defaultView:{...Et,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Et.gridSize}),(0,I.jsxs)(bh,{children:[Et.gridSize,`px`]})]})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsxs)(vh,{children:[(0,I.jsx)(Q,{children:s(`Selection checkboxes`)}),(0,I.jsx)(em,{})]}),(0,I.jsx)($,{children:s(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,I.jsx)(Oh,{$on:h?.showCheckboxes??!0,disabled:!h,onClick:()=>void K({showCheckboxes:!(h?.showCheckboxes??!0)}),type:`button`,children:(0,I.jsx)(kh,{})})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsxs)(vh,{children:[(0,I.jsx)(Q,{children:s(`Open with a single click`)}),(0,I.jsx)(em,{})]}),(0,I.jsx)($,{children:s(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,I.jsx)(Oh,{$on:h?.openOnSingleClick??!1,disabled:!h,onClick:()=>void K({openOnSingleClick:!(h?.openOnSingleClick??!1)}),type:`button`,children:(0,I.jsx)(kh,{})})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsxs)(vh,{children:[(0,I.jsx)(Q,{children:s(`Confirm before deleting`)}),(0,I.jsx)(em,{})]}),(0,I.jsx)($,{children:s(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,I.jsx)(Oh,{$on:h?.confirmDelete??!1,disabled:!h,onClick:()=>void K({confirmDelete:!(h?.confirmDelete??!1)}),type:`button`,children:(0,I.jsx)(kh,{})})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsxs)(vh,{children:[(0,I.jsx)(Q,{children:s(`Play audio in video previews`)}),(0,I.jsx)(em,{})]}),(0,I.jsx)($,{children:s(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,I.jsx)(Oh,{$on:h?.previewVideoAudio??!1,disabled:!h,onClick:()=>void K({previewVideoAudio:!(h?.previewVideoAudio??!1)}),type:`button`,children:(0,I.jsx)(kh,{})})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsxs)(vh,{children:[(0,I.jsx)(Q,{children:s(`Autoplay video previews`)}),(0,I.jsx)(em,{})]}),(0,I.jsx)($,{children:s(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,I.jsx)(Oh,{$on:h?.previewVideoAutoplay??!1,disabled:!h,onClick:()=>void K({previewVideoAutoplay:!(h?.previewVideoAutoplay??!1)}),type:`button`,children:(0,I.jsx)(kh,{})})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsxs)(vh,{children:[(0,I.jsx)(Q,{children:s(`Preview panel under the list`)}),(0,I.jsx)(em,{})]}),(0,I.jsx)($,{children:s(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,I.jsx)(Oh,{$on:Et.showImages??!0,onClick:()=>void K({defaultView:{...Et,showImages:!(Et.showImages??!0)}}),type:`button`,children:(0,I.jsx)(kh,{})})]}),(0,I.jsx)(X,{children:(0,I.jsxs)(Z,{children:[(0,I.jsxs)(vh,{children:[(0,I.jsx)(Q,{children:s(`Columns`)}),(0,I.jsx)(em,{})]}),(0,I.jsx)($,{children:s(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,I.jsx)(X,{children:(0,I.jsxs)(og,{children:[xc.map(e=>(0,I.jsxs)(sg,{children:[(0,I.jsx)(`input`,{checked:(Et.columns??[]).includes(e.id),onChange:()=>void ln(e.id),type:`checkbox`}),(0,I.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,I.jsxs)(sg,{children:[(0,I.jsx)(`input`,{checked:(Et.columns??[]).includes(`linkTarget`),onChange:()=>void ln(`linkTarget`),type:`checkbox`}),(0,I.jsx)(`span`,{children:s(`Link target after the name`)})]})]})})]}),(0,I.jsxs)(pg,{children:[s(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,I.jsx)(em,{}),` `,s(`Anything marked as global always applies to every folder.`)]})]}),(0,I.jsxs)(Wm,{ref:jt(`shortcuts`),children:[(0,I.jsx)(Vm,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,I.jsxs)(Km,{children:[bm.map(({id:e,label:t,note:n})=>(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(t)}),(0,I.jsx)($,{children:s(n)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(cg,{$listening:ue===e,onClick:()=>de(e),type:`button`,children:ue===e?s(`Press a key…`):Ut(mn[e])})})]},e)),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Reset`)}),(0,I.jsx)($,{children:s(`Back to the default combination for every action.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(lg,{onClick:()=>void K({shortcuts:{...Rt}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,I.jsxs)(Wm,{ref:jt(`memory`),children:[(0,I.jsx)(Vm,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(ph,{children:[(0,I.jsxs)(mh,{children:[(0,I.jsx)(Q,{children:s(`Process memory`)}),(0,I.jsx)(bh,{children:k?`${d(k.private)} · ${fh(k.private,k.available)}`:`—`})]}),(0,I.jsx)(hh,{children:(0,I.jsx)(gh,{$ratio:k?k.private/Math.max(k.available,1):0,$tone:t(k?k.private/Math.max(k.available,1):0)})}),(0,I.jsx)($,{children:k?s(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:d(k.available),resident:d(k.workingSet)}):s(`Reading the current usage…`)})]}),(0,I.jsxs)(ph,{children:[(0,I.jsxs)(mh,{children:[(0,I.jsx)(Q,{children:s(`Managed heap`)}),(0,I.jsx)(bh,{children:k?`${d(k.managed)} · ${fh(k.managed,k.private)}`:`—`})]}),(0,I.jsx)(hh,{children:(0,I.jsx)(gh,{$ratio:k?k.managed/Math.max(k.private,1):0,$tone:`var(--accent-secondary)`})}),(0,I.jsx)($,{children:s(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,I.jsxs)(ph,{children:[(0,I.jsxs)(mh,{children:[(0,I.jsx)(Q,{children:s(`Native and runtime`)}),(0,I.jsx)(bh,{children:k?`${d(Math.max(0,k.private-k.managed))} · ${fh(Math.max(0,k.private-k.managed),k.private)}`:`—`})]}),(0,I.jsx)(hh,{children:(0,I.jsx)(gh,{$ratio:k?Math.max(0,k.private-k.managed)/Math.max(k.private,1):0,$tone:`var(--accent-primary)`})}),(0,I.jsx)($,{children:s(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Free memory`)}),(0,I.jsx)($,{children:s(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(lg,{onClick:()=>void st().then(A),type:`button`,children:s(`Trim now`)})})]})]})]}),(0,I.jsxs)(Wm,{ref:jt(`overview`),children:[(0,I.jsx)(Vm,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,I.jsx)(Km,{children:(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Recent items`)}),(0,I.jsx)($,{children:s(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(Ah,{max:50,min:0,onChange:e=>void hn(Number(e.target.value)),type:`number`,value:h?.recentLimit??10})})]})})]}),(0,I.jsxs)(Wm,{ref:jt(`gallery`),children:[(0,I.jsx)(Vm,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,I.jsxs)(Km,{children:[(h?.galleryRoots??[]).map(e=>(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:_(e)}),(0,I.jsx)($,{children:e})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(ug,{onClick:()=>void bn((h?.galleryRoots??[]).filter(t=>t!==e)),title:s(`Stop scanning this folder`),type:`button`,children:(0,I.jsx)(pi,{size:12})})})]},e)),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Scan folders`)}),(0,I.jsx)($,{children:(h?.galleryRoots??[]).length===0?s(`Nothing added yet, so the gallery reads the Pictures folder.`):s(`Only these folders are scanned, three levels deep.`)})]}),(0,I.jsx)(_h,{children:(0,I.jsx)(lg,{onClick:()=>void xn(),type:`button`,children:s(`Choose folder…`)})})]})]})]}),(0,I.jsxs)(Wm,{ref:jt(`icons`),children:[(0,I.jsx)(Vm,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Use system file icons`)}),(0,I.jsx)($,{children:s(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,I.jsx)(Oh,{$on:h?.systemIcons??!1,disabled:!h,onClick:()=>void K({systemIcons:!h?.systemIcons}),type:`button`,children:(0,I.jsx)(kh,{})})]}),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Use custom folder icons`)}),(0,I.jsx)($,{children:s(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,I.jsx)(Oh,{$on:h?.customFolderIcons??!1,disabled:!h,onClick:()=>void K({customFolderIcons:!h?.customFolderIcons}),type:`button`,children:(0,I.jsx)(kh,{})})]})]})]}),(0,I.jsxs)(Wm,{ref:jt(`extension-icons`),children:[(0,I.jsx)(Vm,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,I.jsxs)(Km,{children:[Object.entries(h?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:e}),(0,I.jsx)($,{children:Pm(s,t)})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Fm,{source:t}),(0,I.jsx)(ug,{onClick:()=>void pn(e,null),title:s(`Remove this rule`),type:`button`,children:(0,I.jsx)(pi,{size:12})})]})]},e)),(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Add a rule`)}),(0,I.jsx)($,{children:s(`Extension and the icon to draw for it.`)})]}),(0,I.jsxs)(_h,{children:[(0,I.jsx)(Ah,{onChange:e=>x(e.target.value),placeholder:`.psd`,spellCheck:!1,value:b}),(0,I.jsxs)(Fh,{children:[(0,I.jsx)(ug,{onClick:()=>E(e=>!e),title:s(`Choose the icon`),type:`button`,children:(0,I.jsx)(Fm,{source:te})}),T&&(0,I.jsx)(nd,{allowDefault:!1,onClose:()=>E(!1),onPick:e=>{C(e??`file`),E(!1)},value:te})]}),(0,I.jsx)(ug,{onClick:()=>void Sn(),title:s(`Add the rule`),type:`button`,children:(0,I.jsx)(ti,{size:13})})]})]})]})]}),(0,I.jsxs)(Wm,{ref:jt(`folder-icons`),children:[(0,I.jsx)(Vm,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Give a folder its own icon`)}),(0,I.jsx)($,{children:s(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,I.jsxs)(_h,{children:[v&&(0,I.jsx)(Im,{src:v.icon}),(0,I.jsx)(lg,{disabled:ne,onClick:()=>void Cn(),type:`button`,children:s(ne?`Choosing…`:`Choose folder and icon…`)})]})]}),v&&(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:_(v.folder)}),(0,I.jsx)($,{children:v.folder})]}),(0,I.jsx)(_h,{children:(0,I.jsxs)(fg,{children:[(0,I.jsx)(fi,{size:11}),` `,s(`Saved`)]})})]})]})]}),(0,I.jsxs)(Wm,{ref:jt(`folder-index`),children:[(0,I.jsx)(Vm,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Z,{children:[(0,I.jsx)(Q,{children:s(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,I.jsx)($,{children:s(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,I.jsx)(Oh,{$on:h?.writeDirectoryIndex??!0,disabled:!h,onClick:()=>void K({writeDirectoryIndex:!h?.writeDirectoryIndex}),type:`button`,children:(0,I.jsx)(kh,{})})]}),(0,I.jsxs)(qm,{children:[(0,I.jsxs)(Jm,{children:[(0,I.jsx)(Q,{children:s(`Directory index blacklist`)}),(0,I.jsx)($,{children:s(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,I.jsx)(Yh,{children:(h?.directoryIndexBlacklist??[]).map(e=>(0,I.jsxs)(Xh,{children:[(0,I.jsx)(Zh,{"aria-label":s(`Directory index blacklist rule`),onBlur:Wt,onChange:t=>Ee({from:e,value:t.target.value}),onFocus:()=>Ee({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Wt()):e.key===`Escape`&&Ee(null)},spellCheck:!1,value:Te?.from===e?Te.value:e}),(0,I.jsx)(Qh,{onClick:()=>qt(e),title:s(`Remove`),type:`button`,children:(0,I.jsx)(pi,{size:10})})]},e))}),(0,I.jsxs)(eg,{children:[(0,I.jsx)(tg,{"aria-label":s(`Directory index blacklist rule`),onChange:e=>Ae(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Gt())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:ke}),(0,I.jsx)(Ch,{onClick:Gt,type:`button`,children:s(`Add the rule`)})]}),(0,I.jsxs)($h,{children:[(0,I.jsx)(Ch,{onClick:Jt,type:`button`,children:s(`Restore defaults`)}),(0,I.jsx)(Ch,{onClick:()=>void Kt(),type:`button`,children:s(`Add folder…`)})]})]})]}),!(h?.writeDirectoryIndex??!0)&&(0,I.jsx)(mg,{children:Nm(s,e?.platform)})]}),(0,I.jsxs)(Wm,{ref:jt(`indexing`),children:[(0,I.jsx)(Vm,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,I.jsx)(Mm,{})]}),(0,I.jsxs)(Wm,{ref:jt(`files`),children:[(0,I.jsx)(Vm,{note:`What the listings include.`,title:`Files`}),(0,I.jsxs)(Km,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Hidden items`)}),(0,I.jsx)(bh,{children:jm(s,u?.showHidden)})]}),(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Protected operating system files`)}),(0,I.jsx)(bh,{children:jm(s,u?.showSystem)})]})]}),(0,I.jsx)(pg,{children:s(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,I.jsxs)(sh,{"aria-label":s(`Settings sections`),children:[(0,I.jsx)(ch,{children:s(`Sections`)}),(0,I.jsx)(lh,{children:Dm.map(({id:e,label:t})=>(0,I.jsx)(uh,{$active:tt===e,onClick:()=>Mt(e),type:`button`,children:(0,I.jsx)(`span`,{children:s(t)})},e))}),(0,I.jsx)(dh,{children:s(`Changes are saved as you make them.`)})]})]})}function jm(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Mm(){let e=z(),[t,n]=(0,D.useState)(null);return(0,D.useEffect)(()=>{let e=!0,t=()=>We().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,I.jsx)(mg,{children:e(`No indexing tasks are running.`)}):(0,I.jsxs)(Km,{children:[(0,I.jsx)(X,{children:(0,I.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,I.jsx)(X,{children:(0,I.jsx)(bh,{title:e,children:e})},e))]}):(0,I.jsx)(mg,{children:e(`Index task information is unavailable.`)})}function Nm(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function Pm(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function Fm({source:e}){let t=sn(e.startsWith(`file:`)?e.slice(5):null);return(0,I.jsx)(dg,{children:t?(0,I.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,I.jsx)(Ns,{name:e,size:16})})}function Im({src:e}){let t=sn(e);return(0,I.jsx)(dg,{children:t&&(0,I.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Lm({path:e,active:t,onSelect:n,onRemove:r}){let i=z(),a=w(e),o=fn(a?null:e),s=a?e:o,c=uu(e.split(/[?#]/)[0]);return(0,I.jsxs)(Wh,{children:[(0,I.jsxs)(Uh,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,I.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,I.jsx)(`img`,{alt:``,src:s})),c&&(0,I.jsx)(Kh,{children:(0,I.jsx)(vi,{size:11})})]}),(0,I.jsx)(Gh,{onClick:r,title:i(`Remove`),type:`button`,children:(0,I.jsx)(pi,{size:9})})]})}function Rm({value:e,options:t,onChange:n,disabled:r}){let i=z(),[a,o]=(0,D.useState)(null),s=(0,D.useRef)(null);return(0,D.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(jh,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,I.jsx)(`span`,{children:zm(i,e)}),(0,I.jsx)(Mh,{children:(0,I.jsx)(ii,{size:11})})]}),a&&(0,Sa.createPortal)((0,I.jsx)(Nh,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,I.jsxs)(Ph,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,I.jsx)(`span`,{children:zm(i,t)}),t===e&&(0,I.jsx)(fi,{size:11})]},t))}),document.body)]})}function zm(e,t){return t===Tm?e(`System default`):Em[t]??t}function Bm({colors:e,current:t,onApply:n}){let r=z();if(e.length===0)return null;let[i,...a]=e;return(0,I.jsxs)(ih,{children:[(0,I.jsxs)(oh,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,I.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,I.jsx)(ah,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,I.jsx)(fi,{size:9})},e))]})}function Vm({title:e,note:t,global:n=!1}){let r=z();return(0,I.jsxs)(Gm,{children:[(0,I.jsxs)(`h2`,{children:[r(e),n&&(0,I.jsx)(em,{})]}),(0,I.jsx)(`p`,{children:r(t)})]})}var Hm=i.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Um=i.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Wm=i.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Gm=i.header`
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
`,Km=i.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,qm=i.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Jm=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Ym=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Xm=i.button`
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
`,Zm=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qm=i.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,$m=i.button`
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
`,eh=i.button`
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
`,th=i.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,nh=i.input`
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
`,rh=i.span`
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
`,ih=i.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,ah=i.button`
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
`,oh=i.button`
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
`,sh=i.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,ch=i.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,lh=i.div`
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
`,uh=i.button`
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
`,dh=i.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function fh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var ph=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,mh=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,hh=i.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,gh=i.div`
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
`,_h=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=i.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,vh=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=i.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,yh=i.span`
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
`,bh=i.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,xh=i.input`
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
`,Sh=i.input`
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
`,Ch=i.button`
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
`,wh=i.input`
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
`,Th=i.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Eh=i.button`
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
`,Dh=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Oh=i.button`
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
`,kh=i.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Ah=i.input`
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
`,jh=i.button`
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
`,Mh=i.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Nh=i.div`
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
`,Ph=i.button`
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
`,Fh=i.span`
    position: relative;
    display: inline-flex;
`,Ih=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Lh=i.button`
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
`,Rh=i.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,zh=i.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Bh=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Vh=i.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Hh=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Uh=i.button`
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
`,Wh=i.div`
    position: relative;
    width: 102px;
    height: 58px;
`,Gh=i.button`
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
`,Kh=i.span`
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
`,qh=i.button`
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
`,Jh=i.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,Yh=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Xh=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Zh=i.input`
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
`,Qh=i.button`
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
`,$h=i.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,eg=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,tg=i.input`
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
`,ng=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,rg=i.button`
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
`,ig=i.input`
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
`,ag=i.div`
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
`,og=i.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,sg=i.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,cg=i.button`
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
`,lg=i.button`
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
`,ug=i.button`
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
`,dg=i.span`
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
`,fg=i.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,pg=i.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,mg=i.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,hg=150,gg=2500,_g=3,vg=600;function yg({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:o,onSearchMatches:s,onPick:c,onSelectionChange:l,onAddToTray:u,onAddFavorite:f,showDetails:p=!0,videoAudio:m=!1,videoAutoplay:h=!1}){let g=z(),_=gc(`gallery`),[y,ee]=(0,D.useState)([]),[b,x]=(0,D.useState)(0),[te,S]=(0,D.useState)(!0),[C,w]=(0,D.useState)(null),[T,E]=(0,D.useState)(!1),[ne,O]=(0,D.useState)([]),[k,A]=(0,D.useState)(()=>{let e=Pn(`yafm.preview.width`,320);return e>=220?e:320}),re=(0,D.useRef)([]),j=(0,D.useRef)(0),ie=(0,D.useRef)(!1),ae=(0,D.useRef)(!0),M=(0,D.useRef)(0),N=(0,D.useRef)(null),P=(0,D.useRef)(0),oe=(0,D.useCallback)(async e=>{let t=++M.current;S(!0),ae.current=!0,w(null);try{let n=await Ie(0,hg,e);if(t!==M.current)return;re.current=n.entries,j.current=n.total,ee(n.entries),x(n.total)}catch(e){t===M.current&&w(e instanceof Error?e.message:String(e))}finally{t===M.current&&(ae.current=!1,S(!1))}},[]);(0,D.useEffect)(()=>{oe(!1)},[oe]);let F=(0,D.useCallback)(async()=>{if(ae.current||ie.current||re.current.length>=j.current)return;let e=M.current;ie.current=!0;try{let t=re.current,n=j.current;for(let r=0;r<_g&&t.length<n;r++){let r=await Ie(t.length,hg,!1);if(e!==M.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<hg)break}if(e!==M.current)return;re.current=t,j.current=n,(0,D.startTransition)(()=>{ee(t),x(n)})}catch{}finally{ie.current=!1}},[]),se=(0,D.useCallback)(e=>{P.current||=window.requestAnimationFrame(()=>{P.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<gg&&F()})},[F]);(0,D.useEffect)(()=>{let e=N.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&F()},{root:e.parentElement,rootMargin:`${gg}px 0px`});return t.observe(e),()=>t.disconnect()},[F]),(0,D.useEffect)(()=>{if(y.length>=b)return;let e=window.setTimeout(()=>{let e=N.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<gg&&F()},200);return()=>window.clearTimeout(e)},[y.length,b,F]);let ce=(0,D.useMemo)(()=>({path:``,parent:null,entries:y.map(bg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[y]),L=(0,D.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),R=(0,D.useCallback)(e=>{c?c(e):ve(e)},[c]),B=(0,D.useCallback)(e=>{let t=xg(e.modified);return{id:t,label:t}},[]),le=()=>{E(!0),oe(!0).finally(()=>E(!1))},ue=y.length<b,de=(0,D.useMemo)(()=>!o?.open||o.query.trim().length===0?[]:y.filter(e=>Cn(e.name,o)||Cn(e.path,o)),[y,o?.open,o?.query,o?.matchCase,o?.regex]),fe=(0,D.useMemo)(()=>o?.open?{query:o.query,matchCase:o.matchCase,regex:o.regex,mode:o.mode,currentPath:de[Math.min(o.index,Math.max(0,de.length-1))]?.path??null}:hn,[o?.open,o?.query,o?.matchCase,o?.regex,o?.mode,o?.index,de]);(0,D.useEffect)(()=>{s?.(de.length)},[de.length,s]);let V=(0,D.useCallback)(e=>{O(e),l?.(e)},[l]),pe=e=>{A(e),Fn(`yafm.preview.width`,e)},H=ne.length>0?y.find(e=>e.path===ne[0])??null:null,me=H?.name.includes(`.`)?H.name.slice(H.name.lastIndexOf(`.`)+1).toUpperCase():`—`,he=H&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(H.name)?g(`Video`):g(`Picture`),U=H?H.path.slice(0,Math.max(H.path.lastIndexOf(`\\`),H.path.lastIndexOf(`/`))):``,ge=H?{name:H.name,path:H.path,isDirectory:!1,size:H.size,modified:H.modified,fields:[{label:g(`Type`),value:he},{label:g(`Extension`),value:me},{label:g(`Location`),value:U},{label:g(`Full path`),value:H.path},{label:g(`Size`),value:d(H.size)},{label:g(`Modified`),value:v(H.modified)},{label:g(`Created`),value:`—`}]}:null;return(0,I.jsxs)(Sg,{children:[(0,I.jsxs)(Tg,{children:[(0,I.jsxs)(Dg,{children:[(0,I.jsx)(`span`,{children:g(`Gallery`)}),(0,I.jsx)(Og,{children:te?g(`scanning…`):g(`{shown} of {total} pictures`,{shown:y.length,total:b})})]}),(0,I.jsxs)(Eg,{children:[(0,I.jsx)(kg,{onClick:le,title:g(`Scan the folders again`),type:`button`,children:(0,I.jsx)(Ag,{$spinning:T,children:(0,I.jsx)(ei,{size:14})})}),_.available&&(0,I.jsx)(kg,{onClick:e=>_.open(e.clientX,e.clientY),title:g(`Selection menu`),type:`button`,children:(0,I.jsx)(ta,{size:14})})]})]}),C&&(0,I.jsx)(Mg,{children:C}),!C&&!te&&b===0&&(0,I.jsx)(Mg,{children:g(`No pictures found.`)}),!C&&(te||b>0)&&(0,I.jsxs)(Cg,{children:[(0,I.jsx)(wg,{children:(0,I.jsx)(wc,{confirmDelete:n,find:fe,listing:te&&y.length===0?null:ce,loading:te,error:null,view:L,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:V,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:R,onOpenFile:R,onRefresh:le,onAddToTray:u,onAddFavorite:f,groupOf:B,onGridScroll:se,gridFooter:(0,I.jsx)(jg,{$space:ue?vg:1,ref:N}),allowBackgroundMenu:!1})}),p&&(0,I.jsx)(Ro,{emptyNote:g(`Nothing selected.`),info:ge,onWidth:pe,selectionNote:ne.length>1?a(g,ne.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:m,videoAutoplay:h,width:k})]})]})}function bg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function xg(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(ee(),{weekday:`long`}):t.toLocaleDateString(ee(),{year:`numeric`,month:`long`,day:`numeric`})}var Sg=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Cg=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,wg=i.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,Tg=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,Eg=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Dg=i.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Og=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,kg=i.button`
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
`,Ag=i.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,jg=i.div`
    height: ${({$space:e})=>e}px;
`,Mg=i.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function Ng({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:f=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,D.useState)([]),v=z(),[y,ee]=(0,D.useState)(null),b=jn();(0,D.useEffect)(()=>{Ke().then(e=>{ee(e),g(ps(e).filter(e=>e.pinned))},()=>{ee(null),g([])})},[c]);let x=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>zg(e.path,t));return{name:y?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??y?.placeIcons?.[t]??null}}),te=o===`files`;return(0,I.jsxs)(Bg,{children:[(0,I.jsxs)(Vg,{children:[!f.includes(`home`)&&(0,I.jsxs)(Kg,{$active:o===`home`,onClick:e=>m(`home`,Vt(e)),title:v(`Overview`),type:`button`,children:[(0,I.jsx)(ki,{}),(0,I.jsx)(Jg,{children:v(`Overview`)})]}),!f.includes(`recycle`)&&(0,I.jsxs)(Kg,{$active:o===`recycle`,onClick:e=>m(`recycle`,Vt(e)),title:v(`Recycle Bin`),type:`button`,children:[(0,I.jsx)(di,{}),(0,I.jsx)(Jg,{children:v(`Recycle Bin`)})]}),!f.includes(`gallery`)&&(0,I.jsxs)(Kg,{$active:o===`gallery`,onClick:e=>m(`gallery`,Vt(e)),title:v(`Gallery`),type:`button`,children:[(0,I.jsx)(_i,{}),(0,I.jsx)(Jg,{children:v(`Gallery`)})]})]}),h.map(e=>(0,I.jsxs)(Ug,{children:[(0,I.jsxs)(Kg,{as:`div`,$active:!1,children:[(0,I.jsx)(qg,{children:(0,I.jsx)(hs,{panel:e,size:16})}),(0,I.jsx)(Jg,{children:v(e.title)})]}),(0,I.jsx)(Wg,{children:(0,I.jsxs)(Gg,{children:[e.kind===`quick`&&x(e).map(e=>(0,I.jsxs)(Kg,{$active:te&&zg(a,e.path),onClick:t=>p(e.path,Vt(t)),title:e.path,type:`button`,children:[(0,I.jsx)(gs,{place:e}),(0,I.jsx)(Jg,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let t=Mn(b,e.path);return(0,I.jsxs)(Kg,{$active:te&&zg(a,e.path),onClick:t=>e.isDirectory?p(e.path,Vt(t)):void ve(e.path),title:e.path,type:`button`,children:[t&&b.useIcons?(0,I.jsx)(gs,{place:t}):(0,I.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,I.jsx)(Jg,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,I.jsx)(Ig,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,I.jsxs)(Kg,{$active:te&&zg(a,e.name),onClick:t=>p(e.name,Vt(t)),title:e.name,type:`button`,children:[(0,I.jsx)(Zr,{}),(0,I.jsxs)(Jg,{children:[u(e),(0,I.jsxs)(Yg,{children:[d(e.freeSpace),` free`]}),(0,I.jsx)(Xg,{children:(0,I.jsx)(Zg,{$used:n,$tone:t(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,I.jsx)(Lg,{onNavigate:p,path:e.path||s})]})})]},e.id)),!f.includes(`settings`)&&(0,I.jsx)(Hg,{children:(0,I.jsxs)(Kg,{$active:o===`settings`,onClick:e=>m(`settings`,Vt(e)),title:v(`Settings`),type:`button`,children:[(0,I.jsx)(ai,{}),(0,I.jsx)(Jg,{children:v(`Settings`)})]})})]})}var Pg=10,Fg=40;function Ig({historyVersion:e=0,onNavigate:t}){let n=z(),[r,i]=(0,D.useState)(null),o=jn();return(0,D.useEffect)(()=>{Re().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Mn(o,e.path);return(0,I.jsxs)(Kg,{$active:!1,onClick:n=>t(e.path,Vt(n)),title:a(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&o.useIcons?(0,I.jsx)(gs,{place:r}):(0,I.jsx)(Ps,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,I.jsx)(Jg,{children:r?.name||e.name})]},e.path)})}function Lg({path:e,onNavigate:t}){let[n,r]=(0,D.useState)(null);(0,D.useEffect)(()=>{e&&(r(null),ye(e,!1).then(r,()=>r(null)))},[e]),(0,D.useEffect)(()=>{if(e&&F.available)return F.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&zg(n.data.path,e)&&ye(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,Pg),o=i.filter(e=>!e.isDirectory).slice(0,Fg);return(0,I.jsxs)(I.Fragment,{children:[a.map(e=>(0,I.jsx)(Rg,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,I.jsx)(Rg,{entry:e,onNavigate:t},e.fullPath))]})}function Rg({entry:e,onNavigate:t}){let n=jn(),r=Mn(n,e.fullPath);return(0,I.jsxs)(Kg,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Vt(n)):void ve(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,I.jsx)(gs,{place:r}):(0,I.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,I.jsx)(Jg,{children:r?.name||e.name})]})}function zg(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var Bg=i.aside`
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

    &:not(:hover) ${()=>Yg},
    &:not(:hover) ${()=>Xg} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Vg=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Hg=i(Vg)`
    margin-top: auto;
`,Ug=i.div`
    display: flex;
    flex-direction: column;
`,Wg=i.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Bg}:hover ${Ug}:hover > & {
        grid-template-rows: 1fr;
    }
`,Gg=i.div`
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
`,Kg=i.button`
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
`,qg=i.span`
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
`,Jg=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yg=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Xg=i.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Zg=i.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,Qg=i.span`
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
`;function $g({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=z(),o=(0,D.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,D.useEffect)(()=>{if(!n)return;let e=e=>{o.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,I.jsxs)(t_,{ref:o,children:[(0,I.jsxs)(n_,{$active:n,onClick:()=>r(!n),title:s>0?a(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,I.jsx)(ui,{size:13}),c>0&&(0,I.jsx)(Qg,{children:c>9?`9+`:c})]}),n&&(0,I.jsxs)(r_,{children:[(0,I.jsxs)(i_,{children:[(0,I.jsx)(a_,{children:i(`Status center`)}),(0,I.jsxs)(o_,{children:[(0,I.jsx)(s_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,I.jsx)(c_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,I.jsx)(pi,{size:10})})]})]}),e.length===0?(0,I.jsx)(u_,{children:i(`No operations yet.`)}):(0,I.jsx)(l_,{children:e.map(e=>(0,I.jsx)(e_,{task:e},e.id))})]})]})}function e_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,I.jsxs)(d_,{children:[(0,I.jsxs)(f_,{children:[(0,I.jsx)(p_,{$state:e.state,children:e.state===`done`?(0,I.jsx)(fi,{size:10}):e.state===`failed`?(0,I.jsx)(pi,{size:10}):(0,I.jsx)(m_,{})}),(0,I.jsx)(h_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,I.jsxs)(g_,{children:[d(e.bytesDone),` / `,d(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,I.jsxs)(g_,{children:[e.done,` / `,e.total]})]}),i&&(0,I.jsx)(__,{children:(0,I.jsx)(v_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,I.jsx)(y_,{children:e.error})]})}var t_=i.div`
    position: relative;
    display: flex;
`,n_=i.button`
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
`,r_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Ca}
    ${Ia}
`,i_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,a_=i.span`
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
`,o_=i.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,s_=i.button`
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
`,c_=i.button`
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
`,l_=i.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,u_=i.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,d_=i.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;
    ${La}

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,f_=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,p_=i.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,m_=i.span`
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
`,h_=i.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,g_=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,__=i.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,v_=i.div`
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
`,y_=i.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function b_(){return F.available?(await F.request(`fs.history.list`)).entries:[]}async function x_(e){return F.available?(await F.request(`fs.history.undoTo`,{id:e})).ok:!1}function S_(){let e=z(),[t,n]=(0,D.useState)(!1),[r,i]=(0,D.useState)([]),[a,o]=(0,D.useState)(!1),s=(0,D.useRef)(null),c=()=>void b_().then(i,()=>i([]));(0,D.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await x_(e),c()}finally{o(!1)}};return(0,I.jsxs)(T_,{ref:s,children:[(0,I.jsx)(E_,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,I.jsx)(li,{size:14})}),t&&(0,I.jsxs)(D_,{children:[(0,I.jsxs)(O_,{children:[(0,I.jsx)(k_,{children:e(`History`)}),(0,I.jsx)(A_,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,I.jsx)(pi,{size:10})})]}),r.length===0?(0,I.jsx)(z_,{children:e(`No operations yet.`)}):(0,I.jsx)(j_,{children:r.map(t=>(0,I.jsxs)(M_,{children:[(0,I.jsxs)(N_,{children:[(0,I.jsxs)(P_,{children:[(0,I.jsx)(w_,{label:t.label}),C_(e,t.label)]}),(0,I.jsx)(F_,{children:b(t.at)})]}),t.paths.length>0&&(0,I.jsxs)(I_,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,I.jsx)(L_,{children:(0,I.jsx)(R_,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function C_(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function w_({label:e}){return e.startsWith(`Delete`)?(0,I.jsx)(di,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,I.jsx)(Ji,{size:13}):e.startsWith(`Rename`)?(0,I.jsx)(Ai,{size:13}):e.startsWith(`Compress`)?(0,I.jsx)(bi,{size:13}):e.startsWith(`New`)?(0,I.jsx)(ti,{size:13}):(0,I.jsx)(ri,{size:13})}var T_=i.div`
    position: relative;
    display: flex;
`,E_=i.button`
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
`,D_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Ca}
    ${Ia}
`,O_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,k_=i.span`
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
`,A_=i.button`
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
`,j_=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,M_=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,N_=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,P_=i.span`
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
`,F_=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,I_=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,L_=i.div`
    display: flex;
    justify-content: flex-end;
`,R_=i.button`
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
`,z_=i.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function B_({currentFolder:e}){let t=z(),[n,r]=(0,D.useState)(!1),[i,a]=(0,D.useState)(null),[o,s]=(0,D.useState)(!1),c=(0,D.useRef)(null);(0,D.useEffect)(()=>{if(!n)return;let e=()=>void od().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{c.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,i),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i)}},[n]),(0,D.useEffect)(()=>{let e=()=>void od().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let l=async e=>{s(!0);try{a(await e())}finally{s(!1)}},u=i?.shares.some(t=>t.path.replace(/[\\/]+$/,``).toLowerCase()===e.replace(/[\\/]+$/,``).toLowerCase())??!1;return(0,I.jsxs)(V_,{ref:c,children:[(0,I.jsxs)(H_,{$active:n,onClick:()=>r(e=>!e),title:t(`Share folders`),type:`button`,children:[(0,I.jsx)(Wi,{size:15}),i&&i.shares.length>0&&(0,I.jsx)(Qg,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,I.jsxs)(U_,{children:[(0,I.jsxs)(W_,{children:[(0,I.jsx)(G_,{children:t(`Share`)}),(0,I.jsx)(K_,{onClick:()=>r(!1),title:t(`Close`),type:`button`,children:(0,I.jsx)(pi,{size:10})})]}),(0,I.jsxs)(q_,{children:[(0,I.jsxs)(J_,{children:[(0,I.jsx)(mi,{size:15}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:i?.deviceName||t(`This device`)}),(0,I.jsx)(Y_,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,I.jsx)(X_,{children:t(`No folders are shared yet.`)}),i?.shares.map(e=>(0,I.jsxs)(Z_,{children:[(0,I.jsxs)(Q_,{children:[(0,I.jsx)($_,{title:e.path,children:e.name}),(0,I.jsx)(tv,{disabled:o,onClick:()=>void l(()=>cd(e.id)),title:t(`Stop sharing`),type:`button`,children:(0,I.jsx)(pi,{size:10})})]}),(0,I.jsx)(ev,{title:e.path,children:e.path}),(0,I.jsxs)(nv,{children:[(0,I.jsxs)(rv,{$active:e.mode===`client`,onClick:()=>void l(()=>ld(e.id,`client`)),title:t(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,I.jsx)(mi,{size:11}),t(`App`)]}),(0,I.jsxs)(rv,{$active:e.mode===`web`,onClick:()=>void l(()=>ld(e.id,`web`)),title:t(`Any device with a browser can open this folder.`),type:`button`,children:[(0,I.jsx)(Ki,{size:11}),t(`Web`)]})]})]},e.id)),(0,I.jsxs)(iv,{disabled:o||e.length===0||u,onClick:()=>void l(()=>sd(e,`client`)),title:u?t(`This folder is already shared.`):e,type:`button`,children:[(0,I.jsx)(ti,{size:12}),t(`Share this folder`)]}),i?.webRunning&&(0,I.jsxs)(av,{children:[(0,I.jsxs)(ov,{children:[(0,I.jsx)(Ki,{size:12}),t(`Browser access`)]}),i.urls.map(e=>(0,I.jsx)(sv,{onClick:()=>void at(e),type:`button`,children:e},e)),(0,I.jsx)(Y_,{children:t(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var V_=i.div`
    position: relative;
    display: flex;
`,H_=i.button`
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
`,U_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Ca}
    ${Ia}
`,W_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,G_=i.span`
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
`,K_=i.button`
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
`,q_=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,J_=i.div`
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
`,Y_=i.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,X_=i.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,Z_=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,Q_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,$_=i.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ev=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,tv=i.button`
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
`,nv=i.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,rv=i.button`
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
`,iv=i.button`
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
`,av=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,ov=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,sv=i.button`
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
`;function cv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=z(),[s,c]=(0,D.useState)(!1),l=(0,D.useRef)(null);(0,D.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,D.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=xc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,I.jsxs)(lv,{ref:l,children:[(0,I.jsx)(uv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,I.jsx)(ci,{size:14}):(0,I.jsx)(si,{size:14})}),s&&(0,I.jsxs)(dv,{children:[(0,I.jsx)(fv,{children:o(`View`)}),(0,I.jsxs)(pv,{children:[(0,I.jsxs)(mv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,I.jsx)(si,{size:12}),` `,o(`List`)]}),(0,I.jsxs)(mv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,I.jsx)(ci,{size:12}),` `,o(`Grid`)]})]}),(0,I.jsx)(fv,{children:o(`List icon size`)}),(0,I.jsxs)(hv,{children:[(0,I.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,I.jsxs)(gv,{children:[e.iconSize,`px`]})]}),(0,I.jsx)(fv,{children:o(`Grid size`)}),(0,I.jsxs)(hv,{children:[(0,I.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,I.jsxs)(gv,{children:[e.gridSize,`px`]})]}),(0,I.jsxs)(fv,{children:[o(`Columns`),(0,I.jsx)(em,{})]}),xc.map(e=>(0,I.jsxs)(_v,{children:[(0,I.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,I.jsxs)(_v,{children:[(0,I.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,I.jsxs)(fv,{children:[o(`Preview panel`),(0,I.jsx)(em,{})]}),(0,I.jsxs)(_v,{children:[(0,I.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var lv=i.div`
    position: relative;
    display: flex;
    height: 100%;
`,uv=i.button`
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
`,dv=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Ca}
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
`,fv=i.div`
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
`,pv=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,mv=i.button`
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
`,hv=i.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,gv=i.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,_v=i.label`
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
`,vv=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),yv=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),bv=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),xv=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,I.jsx)(`path`,{d:`M2 5h6`})}),Sv=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,I.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Cv=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,I.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,I.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function wv({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:ee,onToggleSplit:b,details:x,canDetails:te,onToggleDetails:S,shortcuts:C,currentFolder:w}){let T=z(),E=ue(),ne=de(),[O,k]=(0,D.useState)({left:!1,right:!1}),[A,re]=(0,D.useState)(null),[j,ie]=(0,D.useState)(null),ae=(0,D.useRef)(null),M=(0,D.useRef)(null),N=(0,D.useRef)(null),P=(0,D.useCallback)(()=>{let e=M.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;k(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,D.useEffect)(()=>{P();let e=M.current;if(!e)return;let t=new ResizeObserver(P);return t.observe(e),()=>t.disconnect()},[P,e.length]),(0,D.useEffect)(()=>()=>{ae.current&&window.clearTimeout(ae.current.timer)},[]),(0,D.useEffect)(()=>{N.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let oe=e=>M.current?.scrollBy({left:e,behavior:`smooth`}),F=()=>{ae.current&&window.clearTimeout(ae.current.timer),ae.current=null,ie(null)};return(0,I.jsxs)(Ov,{children:[(0,I.jsx)(kv,{children:(0,I.jsx)(mi,{size:19})}),(0,I.jsxs)(Av,{children:[O.left&&(0,I.jsx)(Mv,{onClick:()=>oe(-180),title:T(`Scroll tabs left`),type:`button`,children:(0,I.jsx)(vv,{})}),(0,I.jsx)(jv,{onScroll:P,onWheel:e=>{let t=M.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:M,children:e.map(e=>(0,I.jsxs)(Nv,{$active:e.id===t,$dragging:A===e.id,$dropTarget:j===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Ls(t.dataTransfer)||!Tv(e)||(t.preventDefault(),ae.current?.id===e.id))return;F(),ie(e.id);let r=window.setTimeout(()=>{n(e.id),ae.current=null},500);ae.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ae.current?.id===e.id||j===e.id)&&F()},onDragEnd:()=>{re(null),F()},onDragOver:t=>{(A||Ls(t.dataTransfer)&&Tv(e))&&(t.preventDefault(),Ls(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>re(e.id),onDrop:t=>{if(t.preventDefault(),A)a(A,e.id);else if(Tv(e)&&Ls(t.dataTransfer)){let{paths:r,move:i}=Rs(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}re(null),F()},onClick:()=>n(e.id),ref:e.id===t?N:void 0,title:e.path||e.title,type:`button`,children:[(0,I.jsx)(Ev,{tab:e}),(0,I.jsx)(Pv,{children:e.title}),e.partner&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Fv,{children:`|`}),(0,I.jsx)(Dv,{place:e.partner.place}),(0,I.jsx)(Pv,{children:e.partner.title})]}),(0,I.jsx)(Iv,{"data-shortcut":Ut(C.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:T(`Close tab`),children:(0,I.jsx)(bv,{})})]},e.id))}),O.right&&(0,I.jsx)(Mv,{onClick:()=>oe(180),title:T(`Scroll tabs right`),type:`button`,children:(0,I.jsx)(yv,{})}),(0,I.jsx)(Lv,{"data-shortcut":Ut(C.newTab),onClick:i,title:T(`New tab`),type:`button`,children:(0,I.jsx)(ti,{size:13})})]}),(0,I.jsx)(Rv,{...ne}),(0,I.jsxs)(zv,{children:[(0,I.jsx)(Vv,{$active:y,"data-shortcut":Ut(C.splitView),disabled:!ee,onClick:b,title:T(y?`Close split view`:`Split view`),type:`button`,children:(0,I.jsx)($i,{size:15})}),(0,I.jsx)(Vv,{$active:x,disabled:!te,onClick:S,title:T(x?`Hide details panel`:`Show details panel`),type:`button`,children:(0,I.jsx)(ea,{size:15})}),(0,I.jsxs)(Bv,{$active:_,onClick:v,title:T(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,I.jsx)(Gi,{size:14}),g>0&&(0,I.jsx)(Qg,{children:g>9?`9+`:g})]}),(0,I.jsx)(S_,{}),(0,I.jsx)(B_,{currentFolder:w}),(0,I.jsx)($g,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,I.jsx)(cv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,I.jsx)(Hv,{onClick:E.minimize,title:T(`Minimize`),type:`button`,children:(0,I.jsx)(xv,{})}),(0,I.jsx)(Hv,{onClick:E.toggleMaximize,title:E.maximized?T(`Restore`):T(`Maximize`),type:`button`,children:E.maximized?(0,I.jsx)(Cv,{}):(0,I.jsx)(Sv,{})}),(0,I.jsx)(Uv,{onClick:E.close,title:T(`Close`),type:`button`,children:(0,I.jsx)(bv,{})})]})]})}function Tv(e){return e.kind===`files`&&(!f(e.path)||ne(e.path))}function Ev({tab:e}){switch(e.kind){case`home`:return(0,I.jsx)(Jr,{size:13});case`settings`:return(0,I.jsx)(ai,{size:13});case`recycle`:return(0,I.jsx)(di,{size:13});default:return e.archive?(0,I.jsx)(bi,{size:13}):(0,I.jsx)(Dv,{place:e.place})}}function Dv({place:e}){return e?(0,I.jsx)(gs,{place:e,size:13}):(0,I.jsx)(Yr,{size:13})}var Ov=i.header`
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
`,kv=i.span`
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
`,Av=i.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,jv=i.div`
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
`,Mv=i.button`
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
`,Nv=i.button`
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
`,Pv=i.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fv=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Iv=i.span`
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
`,Lv=i.button`
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
`,Rv=i.div`
    flex: 1;
    min-width: 28px;
`,zv=i.div`
    display: flex;
    flex-shrink: 0;
`,Bv=i.button`
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
`,Vv=i.button`
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
`,Hv=i.button`
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
`,Uv=i(Hv)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Wv(){let[e,t]=(0,D.useState)(null),n=(0,D.useRef)(null),r=(0,D.useRef)(void 0);return(0,D.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Sa.createPortal)((0,I.jsx)(Gv,{tooltip:e}),document.body):null}function Gv({tooltip:e}){let t=(0,D.useRef)(null),[n,r]=(0,D.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,D.useState)(()=>e.bottom+6);return(0,D.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,I.jsxs)(Kv,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,I.jsx)(qv,{children:e.text}),e.shortcut&&(0,I.jsx)(Jv,{children:e.shortcut})]})}var Kv=i.div`
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
    ${La}
`,qv=i.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Jv=i.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Yv={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function Xv({deviceName:e,code:t,onAccept:n,onReject:r}){let i=z(),a=(0,D.useRef)(null);return(0,D.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Sa.createPortal)((0,I.jsx)(Zv,{children:(0,I.jsxs)(Qv,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsxs)($v,{children:[(0,I.jsx)(Wi,{size:15}),i(`Pair for sharing`)]}),(0,I.jsx)(ey,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,I.jsx)(ty,{children:t}),(0,I.jsx)(ny,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,I.jsxs)(ry,{children:[(0,I.jsx)(iy,{onClick:r,type:`button`,children:i(`Reject`)}),(0,I.jsx)(ay,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var Zv=i.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${La}
`,Qv=i.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Ma}
`,$v=i.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,ey=i.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,ty=i.div`
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
`,ny=i.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,ry=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,iy=i.button`
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
`,ay=i(iy)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,oy=`yafm://`,sy={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},cy=0,ly=new Set;function uy(e){ly.add(e),F.send({type:`app.navigate.done`,payload:{path:e}})}var dy=20,fy=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function py(e){return`${oy}${e===`home`?`overview`:e}`}function my(e){return e.toLowerCase().startsWith(oy)?sy[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function hy(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(oy))return t;let n=sy[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?py(n):null}function gy(e){return e.history[e.index]??py(`home`)}function _y(e){return my(gy(e))??`files`}function vy(e){let t=gy(e);return my(t)?``:e.listing?.path||t}function yy(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||_y(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function by(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function xy(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||U.iconSize,gridSize:e.view?.gridSize||t.gridSize||U.gridSize,sort:e.view?.sort??U.sort,sortDescending:e.view?.sortDescending??U.sortDescending,columns:t.columns??ge.columns??[]}}function Sy(e=py(`home`)){return cy+=1,{id:`tab-${cy}`,listing:null,loading:!my(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Cy(e){return e instanceof Error?e.message:String(e)}function wy(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function Ty(e){let t=gd(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return _d(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Ey(e){let t=_(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Dy(e){return f(e)?Jt(e):void 0}function Oy(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return a(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:d(n)})}function ky(){let e=z(),[t,n]=(0,D.useState)(()=>[Sy()]),[r,i]=(0,D.useState)(()=>t[0].id),[a,o]=(0,D.useState)(null),[u,d]=(0,D.useState)(()=>{let e=Pn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,D.useState)([]),[h,g]=(0,D.useState)([]),[v,y]=(0,D.useState)(null),[ee,b]=(0,D.useState)(null),[S,C]=(0,D.useState)(null),w=fe(),[T,E]=(0,D.useState)(mn),[O,k]=(0,D.useState)(0),[A,re]=(0,D.useState)(0),[j,ie]=(0,D.useState)(mn),[ae,M]=(0,D.useState)(0),[N,P]=(0,D.useState)(0),[oe,se]=(0,D.useState)(0),[ce,L]=(0,D.useState)(0),R=(0,D.useRef)(ce);R.current=ce;let[B,le]=(0,D.useState)([]),[ue,de]=(0,D.useState)(10),[V,H]=(0,D.useState)(null),[he,_e]=(0,D.useState)(0),[W,Oe]=(0,D.useState)(Rt),[ke,Ae]=(0,D.useState)(0),[je,Me]=(0,D.useState)(0),[Ne,Pe]=(0,D.useState)(0),[Fe,Ie]=(0,D.useState)(!0),[Re,Be]=(0,D.useState)(()=>{let e=Pn(`yafm.preview.width`,320);return e>=220?e:320}),[Ve,He]=(0,D.useState)(null),[We,Ge]=(0,D.useState)(null),[qe,Je]=(0,D.useState)(`primary`),[G,Ye]=(0,D.useState)(null),[Xe,Ze]=(0,D.useState)(null),[et,tt]=(0,D.useState)(null),[it,at]=(0,D.useState)(null),[ot,st]=(0,D.useState)({primary:0,secondary:0}),[ct,lt]=(0,D.useState)({primary:null,secondary:null}),[ut,dt]=(0,D.useState)(null),[ft,mt]=(0,D.useState)([]),[bt,St]=(0,D.useState)(!1),Ct=(0,D.useRef)([]),wt=(0,D.useRef)([]),[Et,Dt]=(0,D.useState)([]),[Ot,kt]=(0,D.useState)(!1),[At,K]=(0,D.useState)(!1),[Nt,Pt]=(0,D.useState)([]),[zt,Wt]=(0,D.useState)(null),Kt=(0,D.useRef)(0),[qt,Qt]=(0,D.useState)(()=>{let e=In(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?by({x:e.x,y:e.y}):by({x:Math.max(20,window.innerWidth-340),y:110})}),$t=(0,D.useCallback)(()=>{Qt(e=>by(e)),K(!0)},[]),q=t.find(e=>e.id===r)??t[0],J=_y(q),tn=gy(q),nn=vy(q),rn=J===`files`?q.listing?.parent??Ty(nn):null,an=q.splitWith?t.find(e=>e.id===q.splitWith):void 0,on=J===`files`&&an!==void 0,sn=an?vy(an):``,cn=an?an.listing?.parent??Ty(sn):null,ln=on&&an&&qe===`secondary`?an:q,un=V?.defaultView??ge,dn=xy(ln,un);(0,D.useEffect)(()=>{x(V?.accentColor,V?.secondaryColor)},[V?.accentColor,V?.secondaryColor]),(0,D.useEffect)(()=>{im(V?.fonts)},[V?.fonts]),(0,D.useEffect)(()=>{te(V?.timeFormat,V?.timeFormatPattern)},[V?.timeFormat,V?.timeFormatPattern]),(0,D.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!V?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[V?.backgroundSource]),(0,D.useEffect)(()=>(me(e=>new Promise(t=>{Wt({id:++Kt.current,prompt:e,resolve:t})})),()=>me(null)),[]),(0,D.useEffect)(()=>{Je(`primary`)},[r]),(0,D.useEffect)(()=>{ie(mn),P(0),se(0)},[J]),(0,D.useEffect)(()=>{P(0)},[j.query,j.matchCase,j.regex]),(0,D.useEffect)(()=>{P(e=>oe===0?0:Math.min(e,oe-1))},[oe]);let fn=dn.columns.includes(`linkCount`),pn=(0,D.useMemo)(()=>{let e={},t=ps(V),n={};for(let[e,t]of Object.entries(V?.placeNames??{}))n[c(e)]=t;for(let t of p)e[c(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=c(t),i=p.find(e=>c(e.path)===r);e[r]={name:n[r]??i?.name??(_(t)||t),path:t,kind:`folder`,icon:i?.icon??V?.placeIcons?.[t]??null}}return e},[p,V]),hn=(0,D.useMemo)(()=>({places:pn,useIcons:V?.systemIcons===!1}),[pn,V?.systemIcons]),gn=V?.defaultView?.showImages??!0,_n=V?.defaultView?.imageStripHeight??ge.imageStripHeight,vn=J===`home`?(0,I.jsx)(ki,{size:13}):J===`settings`?(0,I.jsx)(ai,{size:13}):J===`recycle`?(0,I.jsx)(di,{size:13}):J===`gallery`?(0,I.jsx)(_i,{size:13}):void 0,yn=T.open&&T.query.length>0,bn=(0,D.useMemo)(()=>yn&&ln.listing?ln.listing.entries.filter(e=>Cn(e.isDirectory?Nn(hn,e.fullPath,e.name):e.name,T)).map(e=>e.fullPath):[],[yn,T,ln.listing,hn]);(0,D.useEffect)(()=>{k(0)},[T.query,T.matchCase,T.regex,ln.listing?.path]);let xn=bn.length===0?-1:Math.min(O,bn.length-1),Sn=(0,D.useCallback)(()=>{E(e=>({...e,open:!1,query:``})),k(0)},[]),wn=(0,D.useCallback)(()=>{E(e=>({...e,open:!0})),re(e=>e+1)},[]),Tn=(0,D.useCallback)(()=>{ie(e=>({...e,open:!0})),M(e=>e+1)},[]),En=(0,D.useCallback)(()=>{ie(mn),P(0),se(0)},[]),Dn=(0,D.useCallback)(e=>{P(t=>oe===0?0:(Math.min(t,oe-1)+e+oe)%oe)},[oe]),On=(0,D.useCallback)(e=>{E(t=>({...t,open:!0,query:t.open?t.query+e:e})),re(e=>e+1)},[]),kn=(0,D.useCallback)(e=>{k(t=>bn.length===0?0:(Math.min(t,bn.length-1)+e+bn.length)%bn.length)},[bn.length]),jn=(0,D.useRef)({tabs:t,activeId:r,activePane:qe});jn.current={tabs:t,activeId:r,activePane:qe};let Rn=(0,D.useRef)(V);Rn.current=V;let zn=(0,D.useRef)(!1),Bn=(0,D.useRef)([]),Vn=(0,D.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Hn=(0,D.useRef)(new Map),Un=(0,D.useCallback)(e=>{let t=(Hn.current.get(e)??0)+1;return Hn.current.set(e,t),()=>Hn.current.get(e)===t},[]),Wn=(0,D.useCallback)(async(e,t,n)=>{if(!(t&&hd(t)))try{let r=await Te(t,fn);if(!n()||!r.listing)return;Vn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[fn,Vn]),Gn=(0,D.useCallback)(async(e,t,n=!1)=>{let r=Un(e);Sn();let i=!n||!jn.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;Vn(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&wy(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&Wn(e,t,r);let o=t&&hd(t)?await vd(t):await ye(t,!0,fn,R.current,t?Dy(t):void 0);if(!r())return;Vn(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!hd(o.path)&&ze(o.path).then(()=>_e(e=>e+1))}catch(i){if(!r())return;let a=jn.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?vy(a):``,s=Ty(o),c=Cy(i);if(o&&Zt(c)){let i=l(o),a=await fa(i,!!Jt(i));if(a){Yt(i,a),r()&&Gn(e,t,n);return}}Vn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Un,fn,Vn,Sn,Wn]),Kn=(0,D.useCallback)((e,t)=>{let n=hy(t);n&&(my(n)?(Sn(),Un(e),Vn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Gn(e,n))},[Un,Gn,Vn,Sn]),qn=(0,D.useCallback)(async(e,t,n)=>{if(Sn(),my(t)){Un(e),Vn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Un(e);Vn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(hd(t)||await Wn(e,t,r),!r())return;let n=hd(t)?await vd(t):await ye(t,!0,fn,R.current,Dy(t));if(!r())return;Vn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(Zt(Cy(i))){let i=l(t),a=await fa(i,!!Jt(i));if(a){Yt(i,a),r()&&qn(e,t,n);return}}Vn(e,()=>({listing:{path:t,parent:Ty(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Cy(i)}))}},[Un,fn,Vn,Sn,Wn]),Jn=(0,D.useCallback)((e,t=!0)=>{let r=Sy(e??py(`home`));return n(e=>[...e,r]),t&&i(r.id),e&&!my(e)&&Gn(r.id,e),r.id},[Gn]),Yn=(0,D.useCallback)(e=>{for(let t of jn.current.tabs)_y(t)===`files`&&wy(vy(t),e)&&Gn(t.id,e,!0)},[Gn]),Xn=(0,D.useCallback)((e,t)=>{let n=_(t);for(let r of jn.current.tabs)r.listing?.entries.some(t=>wy(t.fullPath,e))&&Vn(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>wy(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[Vn]),Zn=(0,D.useRef)([]);(0,D.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&f(t)&&e.add(c(l(t)))}let n=Zn.current.filter(t=>!e.has(t));Zn.current=[...e],n.length>0&&Se(n)},[t]);let Qn=(0,D.useCallback)((e,t=!1)=>{t?Jn(py(e)):Kn(jn.current.activeId,py(e))},[Jn,Kn]),$n=(0,D.useCallback)(e=>{let{tabs:t,activeId:r}=jn.current,a=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==a?.splitWith);if(a&&!a.hidden&&(wt.current.push(gy(a)),wt.current.length>dy&&wt.current.shift()),o.length===0){let e=Sy();n([e]),i(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&i(o[Math.min(s,o.length-1)].id)},[]),er=(0,D.useCallback)(()=>{let e=wt.current.pop();if(!e)return;let t={...Sy(e),fresh:!1};n(e=>[...e,t]),i(t.id),_y(t)===`files`&&Gn(t.id,vy(t))},[Gn]),tr=(0,D.useCallback)((e,t=!1)=>{t?Jn(e):Kn(yy(jn.current),e??py(`home`))},[Kn,Jn]),nr=(0,D.useCallback)(e=>{let{tabs:t,activeId:n}=jn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let a=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;i(r[a].id)},[]),rr=(0,D.useCallback)(()=>{let{tabs:e,activeId:t}=jn.current,r=e.find(e=>e.id===t);if(!r||_y(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),Vn(t,()=>({splitWith:void 0})),Je(`primary`);return}let a=vy(r),o={...Sy(a),hidden:!0};n(e=>[...e,o]),Vn(t,()=>({splitWith:o.id})),Gn(o.id,a),Je(`primary`)},[Gn,Vn]),ir=(0,D.useCallback)(e=>{Be(e),Fn(`yafm.preview.width`,e)},[]),ar=on?qe===`secondary`?We??Ve:Ve??We:Ve,or=(0,D.useRef)(null),sr=e=>{e.preventDefault();let t=or.current?.getBoundingClientRect();if(!t)return;let n=Fe?Re:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);d(n),Fn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},cr=(e,t,n)=>{t&&Ye({x:e.clientX,y:e.clientY,directory:t,refresh:n})},lr=(0,D.useCallback)((e,t)=>{st(n=>n[e]===t?n:{...n,[e]:t})},[]),ur=(0,D.useCallback)(e=>lr(`primary`,e),[lr]),dr=(0,D.useCallback)(e=>lr(`secondary`,e),[lr]),fr=(e,t)=>{ot[e]!==0&&lt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},pr=async(e,t=!1)=>{let n=G;if(Ye(null),!n)return;let r=e===null?await xt(n.directory,t):await Tt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Sn(),dt(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},mr=(0,D.useCallback)(()=>{let{tabs:e}=jn.current,t=e.find(e=>e.id===yy(jn.current));t&&t.index>0&&qn(t.id,t.history[t.index-1],t.index-1)},[qn]),hr=(0,D.useCallback)(()=>{let{tabs:e}=jn.current,t=e.find(e=>e.id===yy(jn.current));t&&t.index<t.history.length-1&&qn(t.id,t.history[t.index+1],t.index+1)},[qn]),gr=(0,D.useCallback)(()=>{let{tabs:e}=jn.current,t=e.find(e=>e.id===yy(jn.current));t&&_y(t)===`files`&&t.listing?.parent&&tr(t.listing.parent)},[tr]),_r=(0,D.useRef)(null),vr=(0,D.useCallback)(()=>{for(let e of jn.current.tabs)e.listing&&Gn(e.id,e.listing.path,!0)},[Gn]),yr=(0,D.useCallback)(e=>{e.length!==0&&(Pt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),$t())},[$t]),br=(0,D.useCallback)(async e=>{let t=await _t(e);t.length!==0&&yr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[yr]),xr=(0,D.useCallback)(e=>{let t=new Set(e);Pt(e=>e.filter(e=>!t.has(e.path)))},[]),Sr=(0,D.useCallback)(async e=>{let t=Rn.current;if(!t)return;let n=await _t(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>c(e.path))),i=n.filter(e=>!r.has(c(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};H(a),await Qe(a),Ae(e=>e+1)},[]),Cr=(0,D.useCallback)(()=>Pt([]),[]),wr=(0,D.useRef)(-1),Tr=(0,D.useCallback)(e=>{Dt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),kt(e.move),e.entries.length>0&&$t()},[$t]),Er=(0,D.useCallback)(async()=>{if(F.available)try{let e=await ht();wr.current=e.sequence,Tr(e)}catch{}},[Tr]),Dr=(0,D.useCallback)(async e=>{e.length!==0&&await pt(e,!1)&&await Er()},[Er]),Or=(0,D.useRef)(Nt);Or.current=Nt,(0,D.useEffect)(()=>{let e=e=>{Ls(e.dataTransfer)&&$t()},t=e=>{Ls(e.dataTransfer)&&$t()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[$t]),(0,D.useEffect)(()=>{let e=()=>Qt(e=>by(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let kr=(0,D.useCallback)(async()=>{let e=Or.current;if(e.length>0){let t=await _t(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Pt(e=>e.filter(e=>n.has(e.path)))}await Er()},[Er]),Ar=(0,D.useCallback)(()=>{kr(),Pe(e=>e+1),vr()},[kr,vr]),jr=(0,D.useCallback)(e=>{let t=by(e);Qt(t),Ln(`yafm.tray.position`,t)},[]),Mr=(0,D.useCallback)(()=>{At?K(!1):$t()},[$t,At]),Nr=(0,D.useCallback)(async(t,n,r)=>{let i=await gt(t,n,r);i.ok?(r&&xr(t),Pe(e=>e+1),vr(),Er()):ua(i.error??e(`The files could not be transferred.`))},[vr,Er,xr]);(0,D.useEffect)(()=>{if(F.available)return It().then(e=>{Ct.current=e,mt(e)},()=>void 0),F.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Ct.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Ct.current=n,mt(n),r&&St(!0)})},[]);let Pr=(0,D.useCallback)(()=>{Lt().then(()=>It().then(e=>{Ct.current=e,mt(e)},()=>void 0))},[]);(0,D.useEffect)(()=>{if(!F.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await ht();if(!e||t.sequence===wr.current)return;wr.current=t.sequence,Tr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Tr]);let Fr=(0,D.useCallback)(async e=>{let t=e?await jt():await Mt();t.ok?(Pe(e=>e+1),vr()):t.error&&!t.error.startsWith(`Nothing to`)&&ua(t.error)},[vr]),Ir=(0,D.useRef)(fn);(0,D.useEffect)(()=>{Ir.current!==fn&&(Ir.current=fn,vr())},[fn,vr]);let Lr=(0,D.useCallback)((e,t)=>{let{tabs:n}=jn.current,r=n.find(t=>t.id===e);if(!r||_y(r)!==`files`)return;let i=vy(r),a=Rn.current?.defaultView??ge,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||U.iconSize,gridSize:r.view?.gridSize||a.gridSize||U.gridSize,sort:r.view?.sort??U.sort,sortDescending:r.view?.sortDescending??U.sortDescending,...t};Vn(e,()=>({view:o})),_r.current!==null&&window.clearTimeout(_r.current),_r.current=window.setTimeout(()=>{_r.current=null,Ce(i,o)},250)},[Vn]),Rr=(0,D.useCallback)(e=>{Lr(yy(jn.current),e)},[Lr]),zr=(0,D.useCallback)(e=>{let t=Rn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ge,columns:e}};H(n),Qe(n)},[]),Br=(0,D.useCallback)(e=>{let t=Rn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ge,showImages:e}};H(n),Qe(n)},[]),Vr=(0,D.useCallback)(e=>{let t=Rn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ge,imageStripHeight:e}};H(n),Qe(n)},[]),Hr=(0,D.useCallback)((e,t,n,r)=>{let i=jn.current.tabs.find(t=>t.id===e);if(!i||_y(i)!==`files`||!i.listing)return;let a=vy(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Vn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),we(a,t,n,r)},[Vn]),Ur=(0,D.useCallback)((e,t)=>{let n=jn.current.tabs.find(t=>t.id===e);if(!n)return;let r=xy(n,Rn.current?.defaultView??ge);Lr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Lr]),Wr=(0,D.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Gr=(0,D.useCallback)(()=>{Ee().then(m,()=>m([]))},[]),Kr=(0,D.useCallback)(e=>{let t=(e.openTabs??[]).map(hy).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...Sy(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),i(r[a].id);for(let e of r)_y(e)===`files`&&Gn(e.id,vy(e),!0);return!0},[Gn]),qr=(0,D.useCallback)(e=>{let t=Bn.current;if(Bn.current=[],t.length===0)return;let n=t.filter(e=>!ly.has(e));for(let e of t)n.includes(e)||uy(e);if(n.length===0)return;let{tabs:r}=jn.current;if(!e&&r.length===1&&r[0].fresh){Kn(r[0].id,n[0]),uy(n[0]);for(let e of n.slice(1))Jn(e),uy(e);return}let a=n.map(e=>{let t=Jn(e);return uy(e),t}).at(-1);a&&setTimeout(()=>i(a),0)},[Jn,Kn]),Y=(0,D.useCallback)(()=>{Ke().then(e=>{H(e),de(e.recentLimit);let t={...Rt,...e.shortcuts};Oe(t),Bt(t.openInNewTab),Ae(e=>e+1),zn.current||(zn.current=!0,qr(e.restoreTabs&&Kr(e)))},()=>{de(10),zn.current=!0,qr(!1)})},[qr,Kr]),Jr=(0,D.useCallback)(()=>{Le().then(le,()=>le([]))},[]),Yr=(0,D.useCallback)(()=>{De().then(g,()=>g([]))},[]),Xr=t.filter(e=>!e.hidden),Zr=Xr.map(gy),ei=Zr.join(`
`),ii=Math.max(Xr.findIndex(e=>e.id===r),0);(0,D.useEffect)(()=>{if(!V?.restoreTabs)return;let e=setTimeout(()=>void $e(Zr,ii),700);return()=>clearTimeout(e)},[ei,ii,V?.restoreTabs]),(0,D.useEffect)(()=>{let{tabs:e,activeId:t}=jn.current,n=e.find(e=>e.id===t);n&&n.fresh&&_y(n)===`files`&&Gn(n.id,vy(n),!0),Gr(),Y(),Yr(),nt().then(y,()=>y(null))},[Gn,Gr,Y,Yr]),(0,D.useEffect)(()=>{if(rt().then(b,()=>b(null)),F.available)return F.on(e=>{let t=e;t.type===`app.update`&&t.data&&b(t.data)})},[]),(0,D.useEffect)(()=>{if(F.available)return F.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&o({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&ua(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&ua(n.data.error??e(`Pairing failed.`))}})},[e]),(0,D.useEffect)(()=>{let e=setInterval(Yr,3e4);return()=>clearInterval(e)},[Yr]),(0,D.useEffect)(()=>{J===`home`&&(Jr(),Yr())},[J,q.id,Jr,Yr]),(0,D.useEffect)(()=>{if(!F.available)return;let e=F.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=jn.current,i=t.data.startup===!0;i&&ly.has(n)?uy(n):i&&!zn.current?Bn.current.includes(n)||Bn.current.push(n):(i&&r.length===1&&r[0].fresh?Kn(r[0].id,n):my(n)?Kn(yy(jn.current),n):Jn(n),i&&uy(n))});return F.send({type:`app.ready`}),e},[Kn,Jn]),(0,D.useEffect)(()=>{if(F.available)return F.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,D.useEffect)(()=>{if(F.available)return F.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,D.useEffect)(()=>{let e=e=>{if(Gt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),mr();return}if(e.key===`BrowserForward`){e.preventDefault(),hr();return}if(e.key===`Escape`&&T.open){e.preventDefault(),Sn();return}let t=Ht(e);if(t===W.closeTab)e.preventDefault(),$n(yy(jn.current));else if(t===W.newTab)e.preventDefault(),Jn();else if(t===W.reopenTab)e.preventDefault(),er();else if(t===W.goBack)e.preventDefault(),mr();else if(t===W.goForward)e.preventDefault(),hr();else if(t===W.goUp)e.preventDefault(),gr();else if(t===W.find)e.preventDefault(),J===`files`?wn():Tn();else if(t===W.location)e.preventDefault(),Me(e=>e+1);else if(t===W.home){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&tr(t)}else t===W.iconsView?(e.preventDefault(),J===`files`&&Rr({mode:`grid`})):t===W.detailsView?(e.preventDefault(),J===`files`&&Rr({mode:`list`})):t===W.nextTab?(e.preventDefault(),nr(1)):t===W.previousTab?(e.preventDefault(),nr(-1)):t===W.hidden||t===`alt+.`?(e.preventDefault(),Ue().then(()=>{Pe(e=>e+1),vr()})):t===W.undo?(e.preventDefault(),Fr(!0)):t===W.redo?(e.preventDefault(),Fr(!1)):t===W.splitView?(e.preventDefault(),rr()):J!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),On(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[W,J,T.open,$n,er,Jn,mr,hr,gr,wn,Tn,Sn,On,Rr,nr,tr,p,vr,Fr,rr]),(0,D.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),mr()):e.button===4&&(e.preventDefault(),hr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[mr,hr]),(0,D.useEffect)(()=>{if(!F.available||J!==`files`)return;let e=new Set;for(let n of t){if(_y(n)!==`files`)continue;let t=vy(n);if(t&&!hd(t)){if(f(t)){let n=Ty(l(t));n&&e.add(n)}else e.add(t)}}e.size>0&&F.send({type:`fs.watch`,payload:{paths:[...e]}})},[J,tn,t]),(0,D.useEffect)(()=>{if(F.available)return F.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=jn.current.tabs.filter(e=>_y(e)===`files`&&wy(vy(e),n));r.length!==0&&(en(),ye(n,!1,fn).then(e=>{for(let t of r){let n=jn.current.tabs.find(e=>e.id===t.id);n&&_y(n)===`files`&&!n.loading&&wy(vy(n),e.path)&&Vn(t.id,()=>({listing:e}))}},()=>void 0))})},[fn,Vn]);let oi=q.index>0,si=q.index<q.history.length-1,ci=(e,t)=>{let n=xy(e,un),r=e.listing?.path??e.history[e.index]??``,i=f(r),a=i&&ne(r);return(0,I.jsx)(wc,{confirmDelete:V?.confirmDelete??!1,previewVideoAudio:V?.previewVideoAudio??!1,previewVideoAutoplay:V?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?He:Ge,onActivate:()=>Je(t?`primary`:`secondary`),enableShortcuts:(!on||(t?qe===`primary`:qe===`secondary`))&&(!i||a),error:e.error,find:e.id===ln.id?{...T,currentPath:xn<0?null:bn[xn]}:void 0,imageStripHeight:_n,listing:e.listing,loading:e.loading,onImageStripHeight:Vr,readOnly:i&&!a||hd(e.listing?.path??``),onOpen:(t,n)=>{n?Jn(t):Gn(e.id,t)},onOpenFile:(t,n)=>{hd(t)?bd(t).catch(e=>void ua(Cy(e))):s(t)?V?.archiveHandler??!1?n?Jn(t):Gn(e.id,t):ve(t):f(t)?(async()=>{let e=await xe(t,R.current,Dy(t));if(!e.path&&Zt(e.error)){let n=l(t),r=Jt(n);r&&Xt(n);let i=await fa(n,!!r);i&&(Yt(n,i),e=await xe(t,R.current,i))}e.path?ve(e.path):e.error&&ua(e.error)})():ve(t)},onRefresh:()=>{let t=e.listing?.path;t&&Yn(t)},onRename:Xn,onSelectionCountChange:t?ur:dr,onSetTags:(t,n,r)=>Hr(e.id,t,n,r),selectionMenuRequest:t?ct.primary:ct.secondary,onSort:t=>Ur(e.id,t),onPaste:Ar,onClipboardChanged:()=>void Er(),onTransfer:Nr,onAddToTray:e=>void br(e),onAddFavorite:e=>void Sr(e),openOnSingleClick:V?.openOnSingleClick??!1,pendingRename:ut&&t===(qe===`primary`)&&wy(ut.directory,e.listing?.path??``)?ut.path:null,pendingRenameToken:ut?.token??0,refreshToken:Ne,shortcuts:W,showCheckboxes:V?.showCheckboxes??!0,showImages:gn,view:n})},li=T.open&&(0,I.jsx)(Ju,{current:xn,focusToken:A,matchCase:T.matchCase,mode:T.mode,onClose:Sn,onMatchCase:()=>E(e=>({...e,matchCase:!e.matchCase})),onMode:()=>E(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>kn(1),onPrevious:()=>kn(-1),onQuery:e=>E(t=>({...t,query:e})),onRegex:()=>E(e=>({...e,regex:!e.regex})),query:T.query,regex:T.regex,total:bn.length}),ui=J===`files`&&f(nn),fi=ui&&ne(nn),pi=ui&&q.listing?.archiveEncrypted===!0,mi=async e=>{if(!ui)return;let t=l(nn),n=Ty(t);if(!n)return;let r=e===`named`;if(e===`auto`){let e=wy(nn,t)?q.listing?.entries??[]:(await ye(t,!1,!1,R.current,Dy(t))).entries;r=!(e.length===1&&e[0].isDirectory)}let i=n.includes(`\\`)?`\\`:`/`,a=r?`${n.replace(/[\\/]+$/,``)}${i}${Ey(t)}`:n;await hi(a)},hi=async t=>{let n=await be(nn,t,R.current,Dy(nn));if(!n.ok&&Zt(n.error)){let e=l(nn),r=Jt(e);r&&Xt(e);let i=await fa(e,!!r);i&&(Yt(e,i),n=await be(nn,t,R.current,i))}n.ok?(Yn(t),en(),Gn(q.id,t,!0)):ua(`${e(`Could not extract the archive.`)}${n.error?`\n${n.error}`:``}`)},gi=async()=>{if(!ui)return;let e=await aa(Ty(l(nn))??void 0);e&&await hi(e)},vi=(0,I.jsxs)(Py,{children:[(0,I.jsx)(Fy,{"data-shortcut":Ut(W.goBack),disabled:!oi,onClick:e=>{q.index>0&&Vt(e)?Jn(q.history[q.index-1]):mr()},title:e(`Back`),type:`button`,children:(0,I.jsx)(ni,{})}),(0,I.jsx)(Fy,{"data-shortcut":Ut(W.goForward),disabled:!si,onClick:e=>{q.index<q.history.length-1&&Vt(e)?Jn(q.history[q.index+1]):hr()},title:e(`Forward`),type:`button`,children:(0,I.jsx)(ri,{})}),(0,I.jsx)(Fy,{"data-shortcut":Ut(W.goUp),disabled:J!==`files`||!rn,onClick:e=>{rn&&(Vt(e)?Jn(rn):tr(rn))},title:e(`Up one level`),type:`button`,children:(0,I.jsx)($r,{})}),(0,I.jsx)(Qf,{focusToken:je,icon:vn,label:J===`files`?void 0:e(Yv[J]),onContextMenu:J===`files`?(e,t,n)=>tt({x:t,y:n,path:e}):void 0,onNavigate:tr,path:J===`files`?nn:tn}),J===`files`&&(!ui||fi)&&(0,I.jsx)(Fy,{onClick:e=>cr(e,nn,()=>void Gn(q.id,nn,!0)),title:e(`New folder or file`),type:`button`,children:(0,I.jsx)(ti,{})}),(0,I.jsx)(Fy,{"data-shortcut":Ut(W.find),onClick:Tn,title:e(`Search`),type:`button`,children:(0,I.jsx)(Qr,{})}),ot.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Ry,{}),(0,I.jsx)(Fy,{onClick:e=>fr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,I.jsx)(ta,{})})]}),ui&&(0,I.jsxs)(Iy,{children:[(0,I.jsx)(Ry,{}),pi&&(0,I.jsxs)(Ly,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,I.jsx)(na,{size:12}),e(`Encrypted archive`)]}),(0,I.jsx)(Fy,{onClick:()=>void gi(),onContextMenu:e=>{e.preventDefault(),Ze({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,I.jsx)(bi,{})}),(0,I.jsx)(eo,{icon:(0,I.jsx)(Ki,{size:15}),onChange:e=>{let t=Number(e);L(t),R.current=t,ui&&Gn(q.id,nn,!0)},options:fy.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(fy.find(e=>e.value===String(ce))?.label??`Auto`)}`,value:String(ce)})]})]}),yi=j.open?{...j,index:N}:null;return(0,I.jsx)(An,{value:hn,children:(0,I.jsxs)(Ay,{$rounded:w,children:[(0,I.jsx)(du,{settings:V}),(0,I.jsx)(wv,{activeId:q.id,onClose:$n,onNewTab:()=>Jn(),onReorder:Wr,onTransferToTab:Nr,onSelect:i,onViewChange:Rr,onColumns:zr,onShowImages:Br,showImages:gn,tasks:ft,onClearTasks:Pr,activityOpen:bt,onActivityOpenChange:St,trayCount:Nt.length+Et.length,trayVisible:At,onToggleTray:Mr,split:on,canSplit:J===`files`,onToggleSplit:rr,details:Fe,canDetails:J===`files`||J===`recycle`||J===`gallery`,onToggleDetails:()=>Ie(e=>!e),currentFolder:J===`files`&&!hd(nn)?nn:``,shortcuts:W,view:dn,tabs:t.filter(e=>!e.hidden).map(n=>{let r=_y(n),i=vy(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?vy(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Mn(hn,i):void 0,archive:r===`files`&&f(i),split:!!a,title:r===`files`?Nn(hn,i,_(i)||e(`Files`)):e(Yv[r]),partner:a?{title:Nn(hn,o,_(o)||e(`Files`)),place:Mn(hn,o)}:void 0}})}),(0,I.jsxs)(jy,{children:[(0,I.jsx)(Ng,{activeKind:J,currentPath:J===`files`?tn:``,drives:h,historyVersion:he,onNavigate:tr,onOpenView:Qn,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:B,recentLimit:ue,version:ke}),(0,I.jsxs)(My,{children:[J!==`files`&&vi,(0,I.jsxs)(Ny,{children:[J!==`files`&&j.open&&(0,I.jsx)(Ju,{current:N,focusToken:ae,matchCase:j.matchCase,mode:j.mode,onClose:En,onMatchCase:()=>ie(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ie(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Dn(1),onPrevious:()=>Dn(-1),onQuery:e=>ie(t=>({...t,query:e})),onRegex:()=>ie(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:j.query,regex:j.regex,total:oe}),J===`files`?on&&an?(0,I.jsxs)(By,{ref:or,children:[(0,I.jsxs)(Vy,{style:{flex:u},children:[(0,I.jsxs)(zy,{$active:qe===`primary`,onPointerDown:()=>Je(`primary`),children:[(0,I.jsx)(Fy,{"data-shortcut":Ut(W.goBack),disabled:!oi,onClick:e=>{let t=q.index-1;t<0||(Vt(e)?Jn(q.history[t]):qn(q.id,q.history[t],t))},title:e(`Back`),type:`button`,children:(0,I.jsx)(ni,{})}),(0,I.jsx)(Fy,{"data-shortcut":Ut(W.goForward),disabled:!si,onClick:e=>{let t=q.index+1;t>=q.history.length||(Vt(e)?Jn(q.history[t]):qn(q.id,q.history[t],t))},title:e(`Forward`),type:`button`,children:(0,I.jsx)(ri,{})}),(0,I.jsx)(Fy,{"data-shortcut":Ut(W.goUp),disabled:!rn,onClick:e=>{rn&&(Vt(e)?Jn(rn):Gn(q.id,rn))},title:e(`Up one level`),type:`button`,children:(0,I.jsx)($r,{})}),(0,I.jsx)(Qf,{focusToken:qe===`primary`?je:void 0,onContextMenu:(e,t,n)=>tt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Jn(e):void Gn(q.id,e),path:nn}),(0,I.jsx)(Fy,{onClick:e=>cr(e,nn,()=>void Gn(q.id,nn,!0)),title:e(`New folder or file`),type:`button`,children:(0,I.jsx)(ti,{})}),(0,I.jsx)(Fy,{"data-shortcut":Ut(W.find),onClick:wn,title:e(`Search`),type:`button`,children:(0,I.jsx)(Qr,{})}),ot.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Ry,{}),(0,I.jsx)(Fy,{onClick:e=>fr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,I.jsx)(ta,{})})]})]}),ci(q,!0),qe===`primary`&&li]}),(0,I.jsx)(Hy,{onDoubleClick:()=>d(.5),onPointerDown:sr,title:e(`Drag to resize; double-click to reset`)}),(0,I.jsxs)(Vy,{$enter:!0,style:{flex:1-u},children:[(0,I.jsxs)(zy,{$active:qe===`secondary`,onPointerDown:()=>Je(`secondary`),children:[(0,I.jsx)(Fy,{"data-shortcut":Ut(W.goBack),disabled:an.index<=0,onClick:e=>{let t=an.index-1;t<0||(Vt(e)?Jn(an.history[t]):qn(an.id,an.history[t],t))},title:e(`Back`),type:`button`,children:(0,I.jsx)(ni,{})}),(0,I.jsx)(Fy,{"data-shortcut":Ut(W.goForward),disabled:an.index>=an.history.length-1,onClick:e=>{let t=an.index+1;t>=an.history.length||(Vt(e)?Jn(an.history[t]):qn(an.id,an.history[t],t))},title:e(`Forward`),type:`button`,children:(0,I.jsx)(ri,{})}),(0,I.jsx)(Fy,{"data-shortcut":Ut(W.goUp),disabled:!cn,onClick:e=>{cn&&(Vt(e)?Jn(cn):Gn(an.id,cn))},title:e(`Up one level`),type:`button`,children:(0,I.jsx)($r,{})}),(0,I.jsx)(Qf,{focusToken:qe===`secondary`?je:void 0,onContextMenu:(e,t,n)=>tt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Jn(e):void Gn(an.id,e),path:sn}),(0,I.jsx)(Fy,{onClick:e=>cr(e,sn,()=>void Gn(an.id,sn,!0)),title:e(`New folder or file`),type:`button`,children:(0,I.jsx)(ti,{})}),(0,I.jsx)(Fy,{"data-shortcut":Ut(W.find),onClick:wn,title:e(`Search`),type:`button`,children:(0,I.jsx)(Qr,{})}),ot.secondary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Ry,{}),(0,I.jsx)(Fy,{onClick:e=>fr(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,I.jsx)(ta,{})})]})]}),ci(an,!1),qe===`secondary`&&li]}),(0,I.jsx)(Ro,{info:ar,onWidth:ir,open:Fe,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,width:Re})]}):(0,I.jsxs)(Wy,{children:[(0,I.jsxs)(Gy,{children:[vi,(0,I.jsxs)(Uy,{children:[ci(q,!0),li]})]}),(0,I.jsx)(Ro,{info:Ve,onWidth:ir,open:Fe,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,width:Re})]}):J===`home`?(0,I.jsx)(qf,{drives:h,find:yi,historyVersion:he,onSearchMatches:se,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Yr,onHistoryChanged:()=>_e(e=>e+1),onAddToTray:e=>void br(e),onAddFavorite:e=>void Sr(e),settingsVersion:ke,onOpen:tr,onLayoutChanged:Y,onPlacesChanged:m,onRecentCleared:Jr,places:p,recent:B,recentLimit:ue,visibilityVersion:Ne}):J===`settings`?(0,I.jsx)(Am,{appInfo:v,find:yi,focusSection:S,onSearchMatches:se,onSettingsChanged:Y}):J===`gallery`?(0,I.jsx)(yg,{confirmDelete:V?.confirmDelete??!1,find:yi,onSearchMatches:se,openOnSingleClick:V?.openOnSingleClick??!1,onAddToTray:e=>void br(e),onAddFavorite:e=>void Sr(e),shortcuts:W,showCheckboxes:V?.showCheckboxes??!0,showDetails:Fe,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,view:dn}):(0,I.jsx)(mp,{find:yi,onOpenLocation:tr,onShowDetails:()=>Ie(!0),platform:v?.platform,showDetails:Fe,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1})]},J),(0,I.jsxs)(Yy,{children:[(0,I.jsx)(`span`,{children:J===`files`&&q.listing?Oy(e,q.listing):``}),v?(0,I.jsxs)(Ky,{children:[(0,I.jsxs)(`span`,{children:[`v`,v.version,` · `,v.platform]}),ee?.available&&(0,I.jsxs)(qy,{onClick:()=>{C(`updates`),Qn(`settings`)},title:e(`Version {version} is available.`,{version:ee.latest}),type:`button`,children:[(0,I.jsx)(Jy,{}),e(`Update available`)]})]}):(0,I.jsx)(`span`,{children:`browser preview`})]})]})]}),(0,I.jsx)(Hs,{clipboardItems:Et,clipboardMove:Ot,currentDirectory:J===`files`?tn:``,items:Nt,onAdd:e=>void br(e),onClear:Cr,onClose:()=>K(!1),onCopyToClipboard:e=>void Dr(e),onPosition:jr,onRemove:xr,onTransfer:Nr,position:qt,visible:At}),G&&(0,I.jsx)(Za,{creationOnly:!0,directory:G.directory,menu:{x:G.x,y:G.y,paths:[],background:!0},onClose:()=>Ye(null),onCreateFile:e=>void pr(e),onCreateFolder:e=>void pr(null,e),shortcuts:W}),et&&(0,I.jsx)(Za,{allowCompression:!0,directory:Ty(et.path)??et.path,menu:{x:et.x,y:et.y,paths:[et.path]},onAddToTray:e=>void br(e),onAddFavorite:e=>void Sr(e),onArchiveCreated:e=>{e&&Yn(Ty(et.path)??et.path)},onClose:()=>tt(null),onCompressTo:(e,t)=>at({paths:e,name:t}),onCopy:(e,t)=>void pt(e,t),onDelete:e=>void yt(e,!1).then(()=>Yn(Ty(et.path)??et.path)),onOpen:(e,t)=>t?Jn(e):void Gn(q.id,e),onOpenFile:e=>void ve(e),onPaste:e=>void vt(e).then(t=>{t&&Yn(e)}),onRefresh:()=>Yn(et.path),shortcuts:W,target:{path:et.path,isDirectory:!0}}),it&&(0,I.jsx)(mo,{initialDirectory:Ty(et?.path??nn)??nn,initialName:it.name,onCancel:()=>at(null),onCompress:async e=>{let t=await Ft(it.paths,e);return!t.ok&&t.error&&ua(t.error),t.ok}}),Xe&&(0,I.jsx)(za,{items:[{label:e(`Extract here`),onSelect:()=>void mi(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void mi(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void mi(`auto`)}],onClose:()=>Ze(null),x:Xe.x,y:Xe.y}),zt&&(0,I.jsx)(gu,{delaySeconds:zt.prompt.delaySeconds,hits:zt.prompt.hits,onCancel:()=>{zt.resolve(!1),Wt(null)},onConfirm:()=>{zt.resolve(!0),Wt(null)},permanent:zt.prompt.permanent},zt.id),(0,I.jsx)(ju,{}),(0,I.jsx)(Ru,{}),a&&(0,I.jsx)(Xv,{code:a.code,deviceName:a.deviceName,onAccept:()=>{fd(a.requestId,!0),o(null)},onReject:()=>{fd(a.requestId,!1),o(null)}}),(0,I.jsx)(Wv,{}),(0,I.jsx)(pe,{})]})})}var Ay=i.div`
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
`,jy=i.div`
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
`,My=i.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Ny=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Pa}
`,Py=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Fy=i.button`
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
`,Iy=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Ly=i.span`
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
`,Ry=i.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,zy=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,By=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Vy=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?La:``}
`,Hy=i.div`
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
        ${Ra}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,Uy=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Wy=i.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Gy=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Ky=i.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,qy=i.button`
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
`,Jy=i.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Yy=i.footer`
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
`;function Xy({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:l,onSelect:u}){let d=z(),f=gc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,D.useState)(e),[v,y]=(0,D.useState)(null),[ee,b]=(0,D.useState)(!0),[x,te]=(0,D.useState)(null),[S,C]=(0,D.useState)(()=>new Set),[w,T]=(0,D.useState)(a??[]),[ne,O]=(0,D.useState)([]),[k,A]=(0,D.useState)([]),[re,j]=(0,D.useState)([]),[ie,ae]=(0,D.useState)([]),[M,N]=(0,D.useState)(``),[P,oe]=(0,D.useState)(m.length===0),[se,ce]=(0,D.useState)(`files`),[L,R]=(0,D.useState)(0),[B,le]=(0,D.useState)(mn),[ue,de]=(0,D.useState)(0),[fe,V]=(0,D.useState)(0),[pe,H]=(0,D.useState)(null),[me,he]=(0,D.useState)(null),[_e,ve]=(0,D.useState)(0),[be,xe]=(0,D.useState)(null),[Se,W]=(0,D.useState)(ge.imageStripHeight);(0,D.useEffect)(()=>{Ke().then(xe,()=>xe(null))},[]),(0,D.useEffect)(()=>{a?T(a):Ee().then(T,()=>T([]))},[a]),(0,D.useEffect)(()=>{De().then(O,()=>O([])),Le().then(A,()=>A([]))},[]),(0,D.useEffect)(()=>{let e=!0;return b(!0),te(null),C(new Set),N(p?``:_(h)),ye(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),N(p?``:_(t.path)),b(!1))},t=>{e&&(te(t instanceof Error?t.message:String(t)),b(!1))}),()=>{e=!1}},[h,L,p]),(0,D.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),le(e=>({...e,open:!0})),de(e=>e+1);return}if(e.key===`Escape`){B.open?(le(e=>({...e,open:!1,query:``})),V(0)):l();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),we();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Te();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),le(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),de(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||He()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,D.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),we()):e.button===4&&(e.preventDefault(),Te())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Ce=e=>{let t=e.trim();t.length!==0&&c(t)!==c(h)&&(j(e=>[...e,h]),ae([]),ce(`files`),g(t))},we=()=>{let e=re.at(-1);e!==void 0&&(j(e=>e.slice(0,-1)),ae(e=>[h,...e]),g(e))},Te=()=>{let e=ie[0];e!==void 0&&(ae(e=>e.slice(1)),j(e=>[...e,h]),g(e))},Oe=v?.path??h,ke=v?.parent??(h?E(h):null);(0,D.useEffect)(()=>{F.available&&Oe&&F.send({type:`fs.watch`,payload:{paths:[Oe]}})},[Oe]),(0,D.useEffect)(()=>{if(F.available&&Oe)return F.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&c(t.data.path)===c(Oe)&&ye(Oe,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));C(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Oe]);let Ae=(v?.entries??[]).filter(e=>e.isDirectory||p&&(P||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),je=v?{...v,entries:Ae}:null,Me=B.open&&B.query.length>0,Ne=(0,D.useMemo)(()=>Me?Ae.filter(e=>Cn(e.name,B)).map(e=>e.fullPath):[],[Me,Ae,B]);(0,D.useEffect)(()=>{V(0)},[B.query,B.matchCase,B.regex,v?.path]);let Pe=Ne.length===0?-1:Math.min(fe,Ne.length-1),Fe=(0,D.useMemo)(()=>({...B,currentPath:Pe>=0?Ne[Pe]:null}),[B,Pe,Ne]),Ie=be?.defaultView??ge,Re=o??{mode:Ie.mode,iconSize:Ie.iconSize,gridSize:Ie.gridSize,sort:`name`,sortDescending:!1,columns:Ie.columns??[`type`,`size`,`modified`]},ze=(s??Ie.showImages)&&Re.mode===`list`,Be=M.trim(),Ve=Be.length>0?Qy(Be)?Be:Zy(Oe,Be):null,He=()=>{if(ee||x)return;let e=n?[...S]:[...S].slice(0,1);e.length>0?u(e):Ve!==null&&Be!==_(Oe)?u([Ve]):!p&&Oe&&u([Oe])},Ue=(0,D.useCallback)(e=>{C(new Set(e)),N(e.length===1?_(e[0]):e.length===0&&!p?_(Oe):``)},[Oe,p]),We=e=>{v?.entries.find(t=>t.fullPath===e)?.isDirectory?Ce(e):p&&u([e])},Ge=e=>N(e),qe=async e=>{let t=pe;if(H(null),!t||!Oe)return;let n=e===null?await xt(Oe):await Tt(Oe,e);n.ok&&n.path!==null&&(le(e=>({...e,open:!1,query:``})),e!==null&&oe(!0),R(e=>e+1),window.setTimeout(()=>{he(n.path),ve(e=>e+1)},120))},Je=()=>{le(e=>({...e,open:!0})),de(e=>e+1)},G=e=>{V(t=>Ne.length===0?0:(t+e+Ne.length)%Ne.length)},Ye=e=>(0,I.jsxs)(cb,{children:[(0,I.jsxs)(lb,{children:[(0,I.jsx)(ub,{children:d(p?`File name:`:`Folder:`)}),(0,I.jsx)(db,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),He())},spellCheck:!1,value:M}),p&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ub,{children:d(`Files of type:`)}),(0,I.jsx)(eo,{onChange:e=>oe(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:P?`all`:`supported`,width:220})]})]}),(0,I.jsxs)(fb,{children:[(0,I.jsx)(pb,{onClick:l,type:`button`,children:d(`Cancel`)}),(0,I.jsxs)(pb,{$primary:!0,disabled:ee||x!==null||p&&S.size===0&&Be.length===0,onClick:He,type:`button`,children:[(0,I.jsx)(fi,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),Xe=(0,I.jsxs)(eb,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,I.jsxs)(tb,{children:[(0,I.jsxs)(nb,{children:[(0,I.jsx)(Yr,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,I.jsx)(rb,{onClick:l,title:d(`Cancel`),type:`button`,children:(0,I.jsx)(pi,{size:12})})]}),(0,I.jsxs)(ib,{children:[(0,I.jsx)(Ng,{activeKind:se===`overview`?`home`:se===`gallery`?`gallery`:`files`,currentPath:Oe,drives:ne,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:w.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Ce(e),onOpenView:e=>{e===`home`?(C(new Set),N(p?``:_(Oe)),ce(`overview`)):e===`gallery`&&p&&(C(new Set),N(``),ce(`gallery`))},places:w,recent:k,recentLimit:10}),(0,I.jsx)(ab,{children:se===`overview`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(qf,{drives:ne,historyVersion:0,homePath:w.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Ce(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Ue,places:w,readOnly:!0,recent:k,recentLimit:10,visibilityVersion:0}),Ye(N)]}):se===`gallery`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(yg,{onPick:e=>u([e]),onSelectionChange:Ue,showCheckboxes:be?.showCheckboxes??!0,view:{...U,columns:[]}}),Ye(N)]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(ob,{children:[(0,I.jsx)(sb,{disabled:re.length===0,onClick:we,title:d(`Back`),type:`button`,children:(0,I.jsx)(ni,{})}),(0,I.jsx)(sb,{disabled:ie.length===0,onClick:Te,title:d(`Forward`),type:`button`,children:(0,I.jsx)(ri,{})}),(0,I.jsx)(sb,{disabled:!ke,onClick:()=>ke&&Ce(ke),title:d(`Up one level`),type:`button`,children:(0,I.jsx)($r,{})}),(0,I.jsx)(Qf,{onNavigate:Ce,path:Oe}),(0,I.jsx)(sb,{onClick:e=>H({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,I.jsx)(ti,{})}),(0,I.jsx)(sb,{onClick:Je,title:d(`Search`),type:`button`,children:(0,I.jsx)(Qr,{})}),f.available&&(0,I.jsx)(sb,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,I.jsx)(ta,{})})]}),B.open&&(0,I.jsx)(Ju,{current:Pe,focusToken:ue,matchCase:B.matchCase,mode:B.mode,onClose:()=>{le(e=>({...e,open:!1,query:``})),V(0)},onMatchCase:()=>le(e=>({...e,matchCase:!e.matchCase})),onMode:()=>le(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>G(1),onPrevious:()=>G(-1),onQuery:e=>le(t=>({...t,query:e})),onRegex:()=>le(e=>({...e,regex:!e.regex})),query:B.query,regex:B.regex,total:Ne.length}),(0,I.jsx)(wc,{allowBackgroundMenu:!0,confirmDelete:be?.confirmDelete??!1,enableShortcuts:!0,error:x,find:Fe,imageStripHeight:Se,loading:ee,listing:je,onImageStripHeight:W,onOpen:We,onOpenFile:We,onRefresh:()=>R(e=>e+1),onSelectionChange:Ue,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:be?.openOnSingleClick??!1,refreshToken:L,pendingRename:me,pendingRenameToken:_e,showCheckboxes:be?.showCheckboxes??!0,showDetails:!1,showImages:ze,singleSelect:!n,view:Re}),Ye(Ge)]})})]}),pe&&(0,I.jsx)(Za,{creationOnly:!0,directory:Oe,menu:{x:pe.x,y:pe.y,paths:[],background:!0},onClose:()=>H(null),onCreateFile:p?e=>void qe(e):void 0,onCreateFolder:()=>void qe(null),shortcuts:Rt})]});return i?Xe:(0,Sa.createPortal)((0,I.jsx)($y,{onPointerDown:e=>{e.target===e.currentTarget&&l()},children:Xe}),document.body)}function Zy(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Qy(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var $y=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${La}
`,eb=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Ca}
    ${({$inline:e})=>e?``:Ma}
`,tb=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,nb=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,rb=i.button`
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
`,ib=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,ab=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,ob=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,sb=i.button`
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
`,cb=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,lb=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,ub=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,db=i.input`
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
`,fb=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,pb=i.button`
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
`;function mb({mode:e,multiple:t,extensions:n,initial:r}){let i=z(),a=de(),[o,s]=(0,D.useState)(null),[c,l]=(0,D.useState)({}),[u,d]=(0,D.useState)(null),[f,p]=(0,D.useState)(null),[m,h]=(0,D.useState)(null),g=(0,D.useRef)(0);(0,D.useEffect)(()=>{F.send({type:`app.ready`})},[]),(0,D.useEffect)(()=>(me(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>me(null)),[]),(0,D.useEffect)(()=>{Ke().then(e=>{s(e),x(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??ge,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,I.jsxs)(hb,{children:[(0,I.jsxs)(gb,{children:[(0,I.jsx)(_b,{children:(0,I.jsx)(mi,{size:17})}),(0,I.jsx)(vb,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,I.jsx)(cv,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,I.jsx)(yb,{children:(0,I.jsx)(bb,{onClick:()=>F.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,I.jsx)(pi,{size:12})})})]}),(0,I.jsx)(xb,{children:(0,I.jsx)(Xy,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>F.send({type:`pick.cancel`}),onSelect:e=>F.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,I.jsx)(gu,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,I.jsx)(ju,{}),(0,I.jsx)(pe,{})]})}var hb=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,gb=i.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,_b=i.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,vb=i.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,yb=i.div`
    display: flex;
    flex-shrink: 0;
`,bb=i.button`
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
`,xb=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Sb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Sb);var Cb=document.getElementById(`root`),wb=new URLSearchParams(window.location.search),Tb=wb.get(`picker`),Eb=wb.get(`filter`)??``;Cb&&(0,O.createRoot)(Cb).render((0,I.jsx)(D.StrictMode,{children:(0,I.jsx)(B,{children:Tb===`folder`||Tb===`file`?(0,I.jsx)(mb,{extensions:Eb?Eb.split(`;`).filter(Boolean):[],initial:wb.get(`initial`)??``,mode:Tb,multiple:wb.get(`multiple`)===`1`}):(0,I.jsx)(ky,{})})}));