import{A as e,C as t,E as n,M as r,N as i,O as a,S as o,T as s,_ as c,b as l,c as u,d,f,g as p,h as m,i as h,j as g,k as _,l as v,m as y,n as b,o as x,p as S,r as ee,s as C,t as te,u as ne,v as re,w,x as ie,y as T}from"./theme-BMX5jShW.js";var E=i(r(),1),ae=e(),D=15e3,oe=new Set,O=new Map,se=!1,k=0,ce;function A(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function j(){se||(se=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>le(e)))}function le(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?O.get(n):void 0;n&&r&&(O.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),oe.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function M(){if(ce!==void 0)return;let e=()=>{if(!A())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),ce=setInterval(e,5e3)}var N={get available(){return A()},send(e){A()?(j(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&M()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=D){if(!A())return Promise.reject(Error(`Native bridge is not available.`));j();let r=`req-${++k}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{O.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);O.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return j(),oe.add(e),()=>oe.delete(e)}},P=s();function ue(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function de(e){return N.available?await N.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var fe=(0,E.createContext)(ue({})),F=(0,E.createContext)(`en`);function I(){return(0,E.useContext)(fe)}var pe=({children:e})=>{let[t,n]=(0,E.useState)(()=>ue({})),[r,i]=(0,E.useState)(`en`);return(0,E.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await de();if(e)return;n(()=>ue(t.strings)),i(t.locale)}catch{}};t();let r=N.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,E.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,P.jsx)(fe.Provider,{value:t,children:(0,P.jsx)(F.Provider,{value:r,children:e})})},me=e=>N.send({type:e});function he(){let[e,t]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>me(`window.minimize`),toggleMaximize:()=>me(`window.toggleMaximize`),close:()=>me(`window.close`)}}function L(){return{onMouseDown:()=>me(`window.drag`),onDoubleClick:()=>me(`window.toggleMaximize`)}}function ge(){let[e,t]=(0,E.useState)(!1),{maximized:n}=he();return(0,E.useEffect)(()=>{if(!N.available)return;let e=!1;return N.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,E.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var R=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function _e(){return(0,P.jsx)(P.Fragment,{children:R.map(([e,t])=>(0,P.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),N.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var z=null;function ve(e){z=e}function B(e){return z?z(e):Promise.resolve(!1)}var ye={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},be={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function xe(e,t){return N.available?await N.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function V(e){return N.available?(await N.request(`fs.open`,{path:e})).ok:!1}async function Se(e,t=!0,n=!1,r=0,i){return await N.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function Ce(e,t,n=0,r){return await N.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function we(e,t=0,n){return await N.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Te(e){N.available&&e.length!==0&&await N.request(`fs.archive.release`,{paths:e})}async function Ee(e){return N.available?await N.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function De(e,t){return N.available?(await N.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Oe(e,t,n,r){return N.available?(await N.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function ke(e,t=!1){return N.available?await N.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ae(){return(await N.request(`fs.places`)).places}async function je(){return(await N.request(`fs.drives`)).drives}async function H(e=!1){return(await N.request(`fs.recycle`,{includeOrphans:e})).entries}async function Me(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await B({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await N.request(e,{...t,confirm:r.token})}return r}async function Ne(e=!1){let t=await N.request(`fs.recycle.empty`,{includeOrphans:e});await Me(`fs.recycle.empty`,{includeOrphans:e},t)}async function Pe(e){return!N.available||e.length===0?{ok:!1,done:0}:await N.request(`fs.recycle.restoreMany`,{ids:e})}async function Fe(e){if(!N.available||e.length===0)return{ok:!1,done:0};let t=await N.request(`fs.recycle.deleteMany`,{ids:e}),n=await Me(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ie(e){N.available&&e&&await N.request(`fs.recycle.properties`,{id:e})}async function Le(){if(!N.available)return{entries:[],cancelled:!0,failed:!1};let e=await N.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Re(){return N.available?(await N.request(`fs.recycle.admin.purge`)).ok:!1}async function ze(e=0,t=150,n=!1){return N.available?await N.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Be(){return N.available?(await N.request(`fs.recent`)).entries:[]}async function Ve(){return N.available?(await N.request(`fs.frequent`)).entries:[]}async function He(e){N.available&&await N.request(`fs.frequent.record`,{path:e})}async function Ue(){await N.request(`fs.recent.clear`)}async function We(){await N.request(`fs.frequent.clear`)}async function Ge(){return await N.request(`fs.visibility`)}async function Ke(){return await N.request(`fs.hidden.toggle`)}async function qe(){return N.available?await N.request(`fs.index.tasks`):{count:0,directories:[]}}var Je={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Ye(){if(!N.available)return Je;let e=await N.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function Xe(){return N.available?(await N.request(`app.protection.defaults`)).paths??[]:[]}var Ze={registered:!1,pathMatches:!1,registeredPath:null};async function Qe(){return N.available?await N.request(`app.defaultManager.status`):{registered:!1,pathMatches:!1,registeredPath:null}}async function $e(){return N.available?await N.request(`app.archive.status`):Ze}async function et(){return N.available?await N.request(`app.archive.register`):Ze}async function tt(){return N.available?await N.request(`app.archive.unregister`):Ze}async function nt(e){if(!N.available)return e;let t=await N.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function rt(e,t){N.available&&await N.request(`app.tabs.set`,{tabs:e,active:t})}async function it(e,t,n){return N.available?(await N.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var at={managed:0,private:0,workingSet:0,available:0};async function ot(){return N.available?await N.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1,logDirectory:``}}async function st(){return N.available?await N.request(`app.updateStatus`)??null:null}async function ct(){return N.available?await N.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function lt(e){return!N.available||!e?!1:(await N.request(`app.openUrl`,{url:e})).ok}async function U(){return N.available?await N.request(`app.memory`):at}async function ut(){return N.available?await N.request(`app.memory.trim`):at}async function dt(){return N.available?(await N.request(`app.scheme`)).registered:!1}async function ft(e){return N.available?(await N.request(`app.scheme.set`,{enabled:e})).registered:!1}var pt={supported:!1,mode:`none`,active:!1,error:null};async function mt(){return N.available?await N.request(`app.startup`):pt}async function ht(e){return N.available?await N.request(`app.startup.set`,{mode:e}):pt}async function gt(e,t=!1){return!N.available||e.length===0?!1:(await N.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function _t(){return N.available?(await N.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function vt(){return N.available?await N.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function yt(e,t,n){return!N.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await N.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function W(e){return!N.available||e.length===0?[]:(await N.request(`fs.paths.info`,{paths:e})).entries}async function bt(e){return N.available?(await N.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function xt(e,t=!1){if(!N.available||e.length===0)return{ok:!1,error:null};let n=await N.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await B({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await N.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function St(e,t){return N.available?await N.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Ct(e,t=!1){return N.available?await N.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function wt(e){return N.available?(await N.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Tt(e,t){return N.available?await N.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Et(e,t,n){return N.available?await N.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Dt(e,t){return N.available?await N.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Ot(e){N.available&&e.length!==0&&await N.request(`fs.operation.properties`,{paths:e})}async function kt(e){N.available&&await N.request(`fs.operation.openWith`,{path:e})}async function At(e){N.available&&await N.request(`fs.operation.terminal`,{path:e})}async function jt(e){return N.available?await N.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Mt(e,t){return N.available?(await N.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Nt(){return N.available?await N.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Pt(){return N.available?await N.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function G(e){N.available&&await N.request(`fs.operation.showInExplorer`,{path:e})}async function Ft(e){return!N.available||e.length===0?{verbs:[],safe:!0}:await N.request(`shell.verbs`,{paths:e})}async function It(e,t,n,r){N.available&&e.length!==0&&await N.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Lt(e,t){return!N.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await N.request(`fs.operation.compress`,{...t,paths:e})}async function Rt(){return N.available?(await N.request(`app.tasks`)).tasks:[]}async function zt(){N.available&&await N.request(`app.tasks.clear`)}var Bt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Vt=Bt.openInNewTab;function Ht(e){Vt=e.trim()||Bt.openInNewTab}function Ut(e){let t=Vt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Wt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Gt(e){return e.split(`+`).filter(Boolean).map(e=>Kt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Kt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function qt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Jt=new Map;function Yt(e){return l(p(e)?u(e):e)}function Xt(e){return Jt.get(Yt(e))}function Zt(e,t){Jt.set(Yt(e),t)}function Qt(e){Jt.delete(Yt(e))}function $t(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var en=new Map,tn=new Map,nn=new Set,rn=0;function an(){en.clear(),tn.clear(),rn+=1,nn.forEach(e=>e())}function on(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...en.keys()])e.toLowerCase().includes(t)&&(en.delete(e),n=!0);n&&(rn+=1,nn.forEach(e=>e()))}function K(){let[e,t]=(0,E.useState)(rn);return(0,E.useEffect)(()=>{let e=()=>t(rn);return nn.add(e),()=>{nn.delete(e)}},[]),e}var q=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function sn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return q.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function cn(e,t,n=!1){let r=K(),i=e===null?``:sn(e,t,n),[a,o]=(0,E.useState)(()=>en.get(i)??null);return(0,E.useEffect)(()=>{if(e===null){o(null);return}if(!N.available)return;if(en.has(i)){o(en.get(i)??null);return}let r=!0;return N.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?en.set(i,e.dataUrl):en.delete(i),r&&o(e.dataUrl)},()=>{en.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function J(e){let[t,n]=(0,E.useState)(e);return(0,E.useEffect)(()=>{if(!e){n(null);return}if(!p(e)){n(e);return}let t=!0;return we(e,0,Xt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function ln(e){let t=K(),[n,r]=(0,E.useState)(()=>e?tn.get(e)??null:null);return(0,E.useEffect)(()=>{if(!e||!N.available){r(null);return}if(tn.has(e)){r(tn.get(e)??null);return}let t=!0;return N.request(`fs.iconFile`,{path:e}).then(n=>{tn.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{tn.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var un=null,dn=null;function fn(){return un===null?N.available?(dn??=N.request(`app.thumbnails`).then(e=>(un=e.base??``,un),()=>(un=``,``)),dn):Promise.resolve(``):Promise.resolve(un)}function pn(e,t=128,n=0){let[r,i]=(0,E.useState)(un);return(0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return fn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function mn(e,t=0,n=``){let[r,i]=(0,E.useState)(un);if((0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return fn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function hn(e,t=0){let[n,r]=(0,E.useState)(un);return(0,E.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return fn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var gn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},_n={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function vn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=xn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=wn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var yn=`\0`,bn=``;function xn(e){return e.query!==yn&&(yn=e.query,bn=e.query.toLowerCase()),bn}var Sn=`\0`,Cn=null;function wn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Sn)return Cn;Sn=t;try{Cn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Cn=null}return Cn}function Tn(e,t){return vn(e,t)!==null}var En=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Dn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function On(e){let t=An(e);for(let{kind:e}of En)if(Dn[e].has(t))return e;return null}function kn(e){return On(e)!==null}function An(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var jn=(0,E.createContext)({places:{},useIcons:!1}),Mn=jn.Provider;function Nn(){return(0,E.useContext)(jn)}function Pn(e,t){return e.places[l(t)]}function Fn(e,t,n){return Pn(e,t)?.name||n}function In(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function Ln(e,t){try{localStorage.setItem(e,String(t))}catch{}}function Rn(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function zn(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Bn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,P.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,P.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Vn=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Hn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M14 3v4h4`})]}),Un=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,P.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,P.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Wn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,P.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),Gn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 19V5`}),(0,P.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Kn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,P.jsx)(`path`,{d:`M20 4v7h-7`})]}),qn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 5v14`}),(0,P.jsx)(`path`,{d:`M5 12h14`})]}),Jn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M19 12H5`}),(0,P.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Yn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M5 12h14`}),(0,P.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Xn=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,P.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),Zn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,P.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),Qn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,P.jsx)(`path`,{d:`M12 12v8`})]}),$n=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,P.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),er=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),tr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,P.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),nr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),rr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 7h16`}),(0,P.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,P.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,P.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),ir=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),ar=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),or=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,P.jsxs)(`defs`,{children:[(0,P.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,P.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,P.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,P.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,P.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,P.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,P.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,P.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,P.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,P.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),sr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),cr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,P.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,P.jsx)(`path`,{d:`m13 5-2 14`})]}),lr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,P.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,P.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),ur=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,P.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),dr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,P.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,P.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),fr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),pr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),mr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),hr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,P.jsx)(`path`,{d:`M8.5 14h7`})]}),gr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,P.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,P.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),_r=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),vr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),yr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),br=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),xr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Sr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,P.jsx)(`path`,{d:`m14 6 4 4`})]}),Cr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,P.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),wr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,P.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Tr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 4v10`}),(0,P.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,P.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Er=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,P.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,P.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Dr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,P.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,P.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Or=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,P.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),kr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Ar=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,P.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),jr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,P.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,P.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Mr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Nr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,P.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,P.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,P.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Pr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,P.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Fr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,P.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Ir=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,P.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,P.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Lr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,P.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Rr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,P.jsx)(`path`,{d:`M3.5 12h17`}),(0,P.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),zr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Br=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,P.jsx)(`path`,{d:`M8.5 10.5h7`})]}),Vr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,P.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,P.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),Hr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,P.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Ur=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,P.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,P.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),Wr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Gr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 16V4`}),(0,P.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,P.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),Kr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),qr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,P.jsx)(`path`,{d:`M12 4v16`})]}),Jr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,P.jsx)(`path`,{d:`M15 4v16`})]}),Yr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,P.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,P.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,P.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),Xr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,P.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,P.jsx)(`path`,{d:`M12 14v2`})]}),Zr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,P.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]});function Y(e,t){return({size:n=t,...r})=>(0,P.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var Qr=Y(Bn,18),$r=Y(Vn,18),ei=Y(Hn,18),ti=Y(Un,18),ni=Y(Wn,16),ri=Y(Gn,16),ii=Y(Kn,16),ai=Y(qn,16),oi=Y(Jn,16),si=Y(Yn,16),ci=Y(Xn,12),li=Y(Zn,18),ui=Y(Qn,14),di=Y($n,14),fi=Y(er,14),pi=Y(tr,18),mi=Y(nr,18),hi=Y(rr,18),gi=Y(ir,14),_i=Y(ar,14),vi=Y(or,18),yi=Y(sr,18),bi=Y(cr,18),xi=Y(lr,18),Si=Y(ur,18),Ci=Y(dr,18),wi=Y(fr,18),Ti=Y(pr,18),Ei=Y(mr,18),Di=Y(hr,18),Oi=Y(gr,18),ki=Y(_r,18),Ai=Y(vr,18),ji=Y(yr,18),Mi=Y(br,18),Ni=Y(xr,18),Pi=Y(Sr,16),Fi=Y(Cr,18),Ii=Y(wr,18),Li=Y(Tr,18),Ri=Y(Er,18),zi=Y(Dr,18),Bi=Y(Or,18),Vi=Y(kr,18),Hi=Y(Ar,18),Ui=Y(jr,18),Wi=Y(Mr,18),Gi=Y(Nr,18),Ki=Y(Pr,18),qi=Y(Fr,18),Ji=Y(Ir,18),Yi=Y(Lr,18),Xi=Y(Rr,18),Zi=Y(zr,18),Qi=Y(Br,14),$i=Y(Vr,14),ea=Y(Hr,16),ta=Y(Ur,16),na=Y(Wr,16),ra=Y(Gr,16),ia=Y(Kr,16),aa=Y(qr,16),oa=Y(Jr,16),sa=Y(Yr,16),ca=Y(Xr,14),la=Y(Zr,14);async function ua(e,t,n){return N.available?(await N.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function da(e){return ua(`folder`,[],e??``)}function fa(e){return ua(`file`,e??[],``)}var pa=null,ma=null;function ha(e){pa=e}function ga(e){return pa?pa(e):Promise.resolve()}function _a(e){ma=e}function va(e,t=!1){return ma?ma(e,t):Promise.resolve(null)}var ya=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],ba=null,xa=0,Sa=new Set;function Ca(){xa+=1;for(let e of Sa)e()}function wa(e){return Sa.add(e),()=>Sa.delete(e)}function Ta(){return xa}function Ea(e){ba=e,Ca()}function Da(){return(0,E.useSyncExternalStore)(wa,Ta,Ta),ba}var Oa=g(),ka=a`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Aa=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,ja=n`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ma=n`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Na=n`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Pa=n`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Fa=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ia=n`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,La=n`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Ra=a`animation: ${Aa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,za=a`animation: ${ja} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Ba=a`animation: ${Ma} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;a`animation: ${Na} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var Va=a`animation: ${Pa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ha=a`animation: ${Fa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ua=a`animation: ${Ia} 140ms ease-out;`,Wa=a`animation: ${La} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Ga({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,E.useState)([]),s=(0,E.useRef)(void 0);if((0,E.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,E.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,P.jsx)(to,{},`group-rule-${i}`)),n.push((0,P.jsx)(eo,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,P.jsx)(to,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,P.jsxs)(Za,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,P.jsx)(Qa,{children:e.loading?(0,P.jsx)(no,{}):e.icon}),(0,P.jsx)($a,{children:e.label}),a?(0,P.jsx)(ci,{size:12}):e.checked&&(0,P.jsx)(gi,{size:12})]},`${e.label}-${i}`))}),n};return(0,Oa.createPortal)((0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Ka,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(qa,{children:r.map((e,t)=>(0,P.jsxs)(Ja,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,P.jsx)(Ya,{children:e.icon}),(0,P.jsx)(Xa,{children:e.label})]},`${e.label}-${t}`))}),(0,P.jsx)(to,{})]}),m(n,0)]}),a.map((e,t)=>(0,P.jsx)(Ka,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Ka=_.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${ka}
    ${za}
    transform-origin: top left;
`,qa=_.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Ja=_.button`
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
`,Ya=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Xa=_.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Za=_.button`
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
`,Qa=_.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,$a=_.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,eo=_.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,to=_.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,no=_.span`
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
`;function ro({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:u,onDelete:d,onCopy:f,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:_=!1,onRefresh:y,onAddToTray:b,onAddFavorite:x,onRemoveFavorite:S,favoritePaths:ee,onExtractArchive:C,allowCompression:te=!1,onCompressTo:ne,onArchiveCreated:re}){let w=I(),ie=Da(),T=p(t),[ae,D]=(0,E.useState)({verbs:[],safe:!0,loading:!1}),[oe,O]=(0,E.useState)({recommended:[],other:[],loading:!1}),[se,k]=(0,E.useState)(null),ce=(0,E.useRef)(0),A=(0,E.useRef)(0),j=e?.paths.length===1,le=e?.background?t?[t]:[]:e?.paths??[],M=e?.background?t||null:j&&n?.isDirectory?n.path:null;if((0,E.useEffect)(()=>{if(!e){D({verbs:[],safe:!0,loading:!1}),O({recommended:[],other:[],loading:!1});return}let t=++ce.current;D({verbs:[],safe:!0,loading:le.length>0&&!T}),le.length>0&&!T&&Ft(le).then(e=>{ce.current===t&&D({...e,loading:!1})},()=>{ce.current===t&&D({verbs:[],safe:!0,loading:!1})});let r=++A.current;!T&&j&&n?(O({recommended:[],other:[],loading:!0}),jt(n.path).then(e=>{A.current===r&&O({...e,loading:!1})},()=>{A.current===r&&O({recommended:[],other:[],loading:!1})})):O({recommended:[],other:[],loading:!1})},[e,j,n?.path,n?.isDirectory,le.length,T]),(0,E.useEffect)(()=>{if(!e||T||!M){k(null);return}let t=!0;return wt(M).then(e=>{t&&k(e)},()=>{t&&k(null)}),()=>{t=!1}},[e,M,T]),!e)return null;let N=[],ue=[],de=new Set((ee??[]).map(l)),fe=e.background?t?[t]:[]:e.paths,F=fe.length>0&&fe.every(e=>de.has(l(e))),pe=()=>n?me(n.path,n.isDirectory):`Archive`,me=(e,t)=>{let n=v(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},he=async(e,n=pe())=>{let r=await Lt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?re?.(r.path,!0):ga(r.error??w(`Could not create the archive.`))},L=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},ge=async()=>{if(!M||se===null)return;let e=await Tt(M,!se);e.ok?(k(e.enabled),y?.()):ga(e.error??w(`Could not change the case sensitivity.`))},R=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Et(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Et(e,t,`${a}\\${ao(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?y?.():ga(o.error??w(`Could not create the link.`))},_e=async e=>{if(!n)return;let r=await da(t);r&&await R(e,n.path,r,v(n.path),e.endsWith(`-copy`))},z=async e=>{let n=ie?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=l(a)===l(t);await R(n,r.path,t,v(r.path),i&&!o)}},ve=async()=>{let t=(await W(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Ea({paths:t})},B=()=>{let e=ie?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:w(`Cancel selected link`),icon:(0,P.jsx)(_i,{size:14}),onSelect:()=>Ea(null)},...t?[{label:w(`Hard link`),icon:(0,P.jsx)(ei,{size:14}),separatorBefore:!0,onSelect:()=>void z(`hard`)}]:[],{label:w(`Symbolic link`),icon:(0,P.jsx)(ei,{size:14}),separatorBefore:!t,onSelect:()=>void z(`symbolic-file`)},...n?[{label:w(`Directory junction`),icon:(0,P.jsx)($r,{size:14}),onSelect:()=>void z(`junction`)},{label:w(`Smart copy`),icon:(0,P.jsx)(ea,{size:14}),separatorBefore:!0,onSelect:()=>void z(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,P.jsx)(ea,{size:14}),onSelect:()=>void z(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,P.jsx)(ea,{size:14}),onSelect:()=>void z(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,P.jsx)(ea,{size:14}),separatorBefore:!0,onSelect:()=>void z(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,P.jsx)(ea,{size:14}),onSelect:()=>void z(`symbolic-copy`)}]:[]]};if(e.background){if(h&&ue.push({label:w(`New folder`),icon:(0,P.jsx)(ai,{size:16}),shortcut:Gt(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:w(`Folder`),icon:(0,P.jsx)($r,{size:14}),onSelect:()=>h(!1)}),T||e.push({label:w(`Case-sensitive folder`),icon:(0,P.jsx)($i,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...ya.map((e,t)=>({label:`${w(e.label)} (${e.extension})`,icon:(0,P.jsx)(ei,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),N.push({label:w(`New`),icon:(0,P.jsx)(ai,{size:14}),children:e,onSelect:()=>void 0})}if(T||N.push({label:w(`Create link`),icon:(0,P.jsx)(ra,{size:14}),disabled:!ie,children:B(),onSelect:()=>void 0}),_)return(0,P.jsx)(Ga,{items:N,onClose:a,quick:ue,x:e.x,y:e.y});!T&&o&&N.push({label:w(`Open in new tab`),icon:(0,P.jsx)(ai,{size:14}),onSelect:()=>o(t,!0)}),N.push({label:w(`Copy as path`),icon:(0,P.jsx)(ea,{size:14}),onSelect:()=>void L([t])}),b&&N.push({label:w(`Add to file tray`),icon:(0,P.jsx)(Yi,{size:14}),onSelect:()=>b([t])}),!T&&(F?S:x)&&N.push({label:w(F?`Remove from favorites`:`Add to favorites`),icon:F?(0,P.jsx)(Qi,{size:14}):(0,P.jsx)(Zi,{size:14}),onSelect:()=>F?S?.([t]):x?.([t])}),!T&&se!==null&&N.push({label:w(`Case-sensitive names`),icon:(0,P.jsx)($i,{size:14}),checked:se,onSelect:()=>void ge()}),!T&&te&&(N.push({label:w(`Open in Terminal`),icon:(0,P.jsx)(qi,{size:14}),onSelect:()=>void At(t)}),N.push({label:w(`Show in Explorer`),icon:(0,P.jsx)($r,{size:14}),separatorBefore:!0,onSelect:()=>void G(t)})),m&&ue.push({label:w(`Paste`),icon:(0,P.jsx)(na,{size:16}),disabled:!i,shortcut:Gt(r.paste),onSelect:()=>m(t)}),T||ue.push({label:w(`Properties`),icon:(0,P.jsx)(li,{size:16}),shortcut:Gt(r.properties),onSelect:()=>void Ot([t])})}else{if(o&&N.push({label:w(`Open`),icon:(0,P.jsx)(si,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&N.push({label:w(`Open in new tab`),icon:(0,P.jsx)(ai,{size:14}),onSelect:()=>o(n.path,!0)}),m&&N.push({label:w(`Paste into folder`),icon:(0,P.jsx)(na,{size:14}),disabled:!i,onSelect:()=>m(n.path)}),T||N.push({label:w(`Open in Terminal`),icon:(0,P.jsx)(qi,{size:14}),onSelect:()=>void At(n.path)})),!T&&j&&n&&!n.isDirectory&&c(n.path)&&C&&N.push({label:w(`Extract archive`),icon:(0,P.jsx)(wi,{size:14}),separatorBefore:!0,children:[{label:w(`Extract here`),icon:(0,P.jsx)(wi,{size:14}),onSelect:()=>C(n.path,`here`)},{label:w(`Extract to a folder named after the archive`),icon:(0,P.jsx)(wi,{size:14}),onSelect:()=>C(n.path,`named`)},{label:w(`Auto extract to the current folder`),icon:(0,P.jsx)(wi,{size:14}),onSelect:()=>C(n.path,`auto`)},{label:w(`Extract to…`),icon:(0,P.jsx)($r,{size:14}),separatorBefore:!0,onSelect:()=>C(n.path,`choose`)}],onSelect:()=>void 0}),!T&&j&&n){let e=[];if(oe.loading)e.push({label:w(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of oe.recommended)e.push({label:t.name,group:w(`Suggested apps`),icon:t.icon?(0,P.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,P.jsx)(Ei,{size:14}),onSelect:()=>void Mt(n.path,t.path).then(e=>{e||kt(n.path)})});for(let t of oe.other)e.push({label:t.name,group:w(`Other apps`),icon:t.icon?(0,P.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,P.jsx)(Ei,{size:14}),onSelect:()=>void Mt(n.path,t.path).then(e=>{e||kt(n.path)})})}e.push({label:w(`Choose another app…`),icon:(0,P.jsx)(Ei,{size:14}),separatorBefore:!0,onSelect:()=>void kt(n.path)}),N.push({label:w(`Open with`),icon:(0,P.jsx)(Ei,{size:14}),children:e,onSelect:()=>void kt(n.path)})}if(T||N.push({label:w(`Compress`),icon:(0,P.jsx)(wi,{size:14}),separatorBefore:!0,children:[{label:w(`Compress to ZIP`),icon:(0,P.jsx)(wi,{size:14}),onSelect:()=>void he(e.paths)},{label:w(`Compress to…`),icon:(0,P.jsx)(wi,{size:14}),onSelect:()=>ne?.(e.paths,pe())}],onSelect:()=>void 0}),!T&&(e?.paths.length??0)>0){let e=[{label:w(`Select link source`),icon:(0,P.jsx)(ra,{size:14}),onSelect:()=>void ve()},...ie?[{label:w(`Cancel selected link`),icon:(0,P.jsx)(_i,{size:14}),onSelect:()=>Ea(null)}]:[],...j&&n?n.isDirectory?[{label:w(`Symbolic link`),icon:(0,P.jsx)($r,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-folder`)},{label:w(`Directory junction`),icon:(0,P.jsx)($r,{size:14}),onSelect:()=>void _e(`junction`)},{label:w(`Smart copy`),icon:(0,P.jsx)(ea,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,P.jsx)(ea,{size:14}),onSelect:()=>void _e(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,P.jsx)(ea,{size:14}),onSelect:()=>void _e(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,P.jsx)(ea,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,P.jsx)(ea,{size:14}),onSelect:()=>void _e(`symbolic-copy`)}]:[{label:w(`Symbolic link`),icon:(0,P.jsx)(ei,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-file`)},{label:w(`Hard link`),icon:(0,P.jsx)(ei,{size:14}),onSelect:()=>void _e(`hard`)}]:[]];N.push({label:w(`Create link`),icon:(0,P.jsx)(ra,{size:14}),children:e,onSelect:()=>void 0})}!T&&n?.isDirectory&&se!==null&&N.push({label:w(`Case-sensitive names`),icon:(0,P.jsx)($i,{size:14}),checked:se,onSelect:()=>void ge()}),N.push({label:w(`Copy as path`),icon:(0,P.jsx)(ea,{size:14}),onSelect:()=>void L(e.paths)}),b&&N.push({label:w(`Add to file tray`),icon:(0,P.jsx)(Yi,{size:14}),onSelect:()=>b(e.paths)}),!T&&(F?S:x)&&N.push({label:w(F?`Remove from favorites`:`Add to favorites`),icon:F?(0,P.jsx)(Qi,{size:14}):(0,P.jsx)(Zi,{size:14}),onSelect:()=>F?S?.(fe):x?.(fe)}),T||N.push({label:w(`Show in Explorer`),icon:(0,P.jsx)($r,{size:14}),separatorBefore:!0,onSelect:()=>void G(fe[0])}),f&&ue.push({label:w(`Cut`),icon:(0,P.jsx)(ta,{size:16}),shortcut:Gt(r.cut),onSelect:()=>f(e.paths,!0)},{label:w(`Copy`),icon:(0,P.jsx)(ea,{size:16}),shortcut:Gt(r.copy),onSelect:()=>f(e.paths,!1)}),j&&n&&u&&ue.push({label:w(`Rename`),icon:(0,P.jsx)(Pi,{size:16}),shortcut:Gt(r.rename),onSelect:()=>u(n.path)}),d&&ue.push({label:w(`Delete`),icon:(0,P.jsx)(hi,{size:16}),danger:!0,shortcut:Gt(r.delete),onSelect:()=>d(e.paths)}),T||ue.push({label:w(`Properties`),icon:(0,P.jsx)(li,{size:16}),shortcut:Gt(r.properties),onSelect:()=>void Ot(e.paths)})}if(ae.loading)N.push({label:w(`More actions`),icon:(0,P.jsx)(Ei,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(ae.verbs.length>0){let e={items:[],children:new Map};for(let t of ae.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,P.jsx)(io,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void It(le,ae.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];N.push({label:w(ae.safe?`More actions`:`More actions (extensions)`),icon:(0,P.jsx)(Ei,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,P.jsx)(Ga,{items:N,onClose:a,quick:ue,x:e.x,y:e.y})}function io({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,P.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,P.jsx)(si,{size:14});case`document`:return(0,P.jsx)(Mi,{size:14});case`cut`:return(0,P.jsx)(ta,{size:14});case`copy`:return(0,P.jsx)(ea,{size:14});case`paste`:return(0,P.jsx)(na,{size:14});case`trash`:return(0,P.jsx)(hi,{size:14});case`pencil`:return(0,P.jsx)(Pi,{size:14});case`gear`:return(0,P.jsx)(li,{size:14});case`star`:return(0,P.jsx)(Vi,{size:14});case`pin`:return(0,P.jsx)(ui,{size:14});case`executable`:return(0,P.jsx)(Ei,{size:14});case`share`:return(0,P.jsx)(ra,{size:14});case`arrow`:return(0,P.jsx)(si,{size:14});default:return(0,P.jsx)(vi,{size:14})}}function ao(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function oo({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=I(),[l,u]=(0,E.useState)(null),d=(0,E.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,E.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(so,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,P.jsx)(co,{children:f?.label??``}):(0,P.jsx)(lo,{children:a}),a===void 0&&(0,P.jsx)(uo,{children:(0,P.jsx)(ci,{size:11})})]}),l&&(0,Oa.createPortal)((0,P.jsx)(fo,{"aria-label":c(`Options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,P.jsxs)(po,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,P.jsx)(mo,{children:t.label}),t.value===e&&(0,P.jsx)(gi,{size:11})]},t.value))}),document.body)]})}var so=_.button`
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
`,co=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lo=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,uo=_.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,fo=_.div`
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
    ${za}
`,po=_.button`
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
`,mo=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ho=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],go=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],_o=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],vo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],yo=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function bo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=I(),a=(0,E.useRef)(null),[o,s]=(0,E.useState)(e),[c,l]=(0,E.useState)(t),[u,d]=(0,E.useState)(`zip`),[f,p]=(0,E.useState)(`5`),[m,h]=(0,E.useState)(`default`),[g,_]=(0,E.useState)(`none`),[v,y]=(0,E.useState)(``),[b,x]=(0,E.useState)(`0`),[S,ee]=(0,E.useState)(!1);(0,E.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let C=ho.find(e=>e.value===u)??ho[0],te=u===`zip`||u===`zipx`,ne=g!==`none`,re=te||u===`7z`,w=u===`zip`||u===`7z`,ie=async()=>{if(S||!c.trim()||!o||ne&&v.length===0)return;ee(!0);let e=await r({directory:o,name:c.trim(),format:u,level:C.level?Number(f):0,method:te?m:null,encryption:re?g:`none`,password:ne?v:void 0,splitSize:w?Number(b):0});ee(!1),e&&n()};return(0,Oa.createPortal)((0,P.jsx)(xo,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,P.jsxs)(So,{"aria-modal":`true`,role:`dialog`,children:[(0,P.jsx)(Co,{children:i(`Compress to…`)}),(0,P.jsxs)(wo,{children:[(0,P.jsx)(To,{children:i(`Archive name`)}),(0,P.jsx)(Eo,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ie()}}),(0,P.jsx)(Do,{children:C.extension})]}),(0,P.jsxs)(wo,{children:[(0,P.jsx)(To,{children:i(`Format`)}),(0,P.jsx)(oo,{onChange:e=>d(e),options:ho.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,P.jsxs)(wo,{children:[(0,P.jsx)(To,{children:i(`Method`)}),(0,P.jsx)(oo,{disabled:!te,onChange:h,options:go.map(e=>({...e,label:i(e.label)})),value:te?m:`default`,width:236,zIndex:3700})]}),(0,P.jsxs)(wo,{children:[(0,P.jsx)(To,{children:i(`Encryption`)}),(0,P.jsx)(oo,{disabled:!re,onChange:e=>{_(e),e===`none`&&y(``)},options:_o.map(e=>({...e,label:i(e.label)})),value:re?g:`none`,width:236,zIndex:3700})]}),ne&&(0,P.jsxs)(wo,{children:[(0,P.jsx)(To,{children:i(`Password`)}),(0,P.jsx)(Eo,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,P.jsxs)(wo,{children:[(0,P.jsx)(To,{children:i(`Split volumes`)}),(0,P.jsx)(oo,{disabled:!w,onChange:x,options:vo.map(e=>({...e,label:i(e.label)})),value:w?b:`0`,width:236,zIndex:3700})]}),(0,P.jsxs)(wo,{children:[(0,P.jsx)(To,{children:i(`Compression level`)}),(0,P.jsx)(oo,{disabled:!C.level,onChange:p,options:yo.map(e=>({...e,label:i(e.label)})),value:C.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,P.jsxs)(wo,{$stack:!0,children:[(0,P.jsx)(To,{children:i(`Destination`)}),(0,P.jsxs)(Oo,{children:[(0,P.jsx)(ko,{title:o,children:o}),(0,P.jsx)(jo,{disabled:S,onClick:()=>void da(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{disabled:S,onClick:n,type:`button`,children:i(`Cancel`)}),(0,P.jsx)(Mo,{disabled:S||!c.trim()||ne&&v.length===0,onClick:()=>void ie(),type:`button`,children:i(S?`Compressing…`:`Compress`)})]})]})}),document.body)}var xo=_.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ua}
`,So=_.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ra}
`,Co=_.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,wo=_.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,To=_.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Eo=_.input`
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
`,Do=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Oo=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,ko=_.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ao=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,jo=_.button`
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
`,Mo=_(jo)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function No({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=I(),c=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Oa.createPortal)((0,P.jsx)(Po,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,P.jsxs)(Fo,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(Io,{children:t}),(0,P.jsx)(Lo,{children:n}),(0,P.jsxs)(Ro,{children:[(0,P.jsx)(zo,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,P.jsx)(zo,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Po=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ua}
`,Fo=_.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ra}
`,Io=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Lo=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Ro=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,zo=_.button`
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
`,Bo=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Vo=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Ho=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Uo=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Wo({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=I(),[l,u]=(0,E.useState)(!1),[d,f]=(0,E.useState)(!1),[p,m]=(0,E.useState)(!1),[h,g]=(0,E.useState)(0),[_,v]=(0,E.useState)(0),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(!1),[ee,C]=(0,E.useState)(!1),te=(0,E.useRef)(null),ne=(0,E.useRef)(null),re=(0,E.useRef)(null),w=(0,E.useRef)(null),[ie,T]=(0,E.useState)(()=>{let e=In(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),ae=e?.path??null,D=J(ae),oe=e?Go(e.name):``,O=!!e&&!e.isDirectory&&Bo.has(oe),se=!!e&&!e.isDirectory&&Vo.has(oe),k=!!e&&!e.isDirectory&&Ho.has(oe),ce=!!e&&!e.isDirectory&&Uo.has(oe),A=!!e&&!e.isDirectory&&oe===`pdf`,j=pn(O?D:null,512,e?.modified??0),le=mn(k?D:null,e?.modified??0,oe),M=mn(O||se?D:null,e?.modified??0,oe),N=hn(A?D:null,e?.modified??0),ue=cn(!O&&!se&&!k&&!ce&&!A?D:null,e?.isDirectory??!1);if((0,E.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),C(!1)},[ae]),(0,E.useEffect)(()=>{if(!D||!ce){b(null),S(!1);return}let e=!0;return S(!0),b(null),Ee(D).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`Could not read this file.`)}),S(!1))}),()=>{e=!1}},[D,ce]),!e&&!s)return null;let de=e=>{re.current={x:e.clientX,width:ne.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},fe=e=>{let t=re.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},F=e=>{re.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},pe=e=>{w.current={y:e.clientY,height:ie},e.currentTarget.setPointerCapture(e.pointerId)},me=e=>{let t=w.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));T(n),Ln(`yafm.preview.media.height`,n)},he=e=>{w.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,P.jsxs)(qo,{$open:r,children:[r&&(0,P.jsx)(Jo,{onPointerDown:de,onPointerMove:fe,onPointerUp:F,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,P.jsx)(Yo,{ref:ne,style:{width:r?t:0},children:(0,P.jsxs)(Xo,{children:[(0,P.jsx)($r,{size:56}),(0,P.jsx)(`span`,{children:s})]})})]});let L=()=>{let e=te.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,P.jsxs)(qo,{$open:r,children:[r&&(0,P.jsx)(Jo,{onPointerDown:de,onPointerMove:fe,onPointerUp:F,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(Yo,{ref:ne,style:{width:r?t:0},children:[(0,P.jsx)(Zo,{style:{height:ie},children:O&&M&&!l?(0,P.jsxs)($o,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,P.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:L,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:j??void 0,preload:`metadata`,ref:te,src:M}),(0,P.jsx)(es,{$visible:!d,onClick:L,title:c(`Play`),type:`button`,children:(0,P.jsx)(ia,{size:28})}),(0,P.jsxs)(ts,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,P.jsxs)(ns,{children:[(0,P.jsx)(`span`,{children:Ko(_)}),(0,P.jsx)(`span`,{children:Ko(h)})]}),(0,P.jsx)(rs,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=te.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):se&&M?(0,P.jsx)(`audio`,{controls:!0,src:M}):k&&le?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:le}):A&&N&&!ee?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>C(!0),src:N}):A?(0,P.jsx)(ei,{size:64}):ce?(0,P.jsx)(is,{children:x||!y?(0,P.jsx)(os,{children:c(`Loading…`)}):y.error?(0,P.jsx)(os,{children:y.error}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(as,{children:y.text}),y.truncated&&(0,P.jsx)(os,{children:c(`Showing the first 256 KB.`)})]})}):O&&j?(0,P.jsx)(`img`,{alt:``,src:j}):ue?(0,P.jsx)(`img`,{alt:``,src:ue}):e.isDirectory?(0,P.jsx)($r,{size:64}):(0,P.jsx)(ei,{size:64})}),(0,P.jsx)(Qo,{onDoubleClick:()=>{T(210),Ln(`yafm.preview.media.height`,210)},onPointerDown:pe,onPointerMove:me,onPointerUp:he,title:c(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(ss,{children:[(0,P.jsx)(cs,{title:e.path,children:e.name}),o&&(0,P.jsx)(ls,{children:o}),(0,P.jsx)(us,{children:e.fields.map(e=>(0,P.jsxs)(ds,{children:[(0,P.jsx)(fs,{children:e.label}),(0,P.jsx)(ps,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Go(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Ko(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var qo=_.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,Jo=_.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Yo=_.aside`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    background: var(--bg-secondary);
    font-family: var(--font-details), var(--font-cjk);
    transition: width 180ms cubic-bezier(0.22, 1, 0.36, 1);
`,Xo=_.div`
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
`,Zo=_.div`
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
`,Qo=_.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,$o=_.div`
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
`,es=_.button`
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
`,ts=_.div`
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
`,ns=_.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,rs=_.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,is=_.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,as=_.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,os=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,ss=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,cs=_.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,ls=_.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,us=_.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,ds=_.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,fs=_.span`
    color: var(--text-muted);
`,ps=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,ms=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],hs=[...ms],gs={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},_s={folder:e=>(0,P.jsx)($r,{size:e}),home:e=>(0,P.jsx)(Qr,{size:e}),desktop:e=>(0,P.jsx)(Fi,{size:e}),documents:e=>(0,P.jsx)(Ii,{size:e}),downloads:e=>(0,P.jsx)(Li,{size:e}),pictures:e=>(0,P.jsx)(Ri,{size:e}),music:e=>(0,P.jsx)(zi,{size:e}),videos:e=>(0,P.jsx)(Bi,{size:e}),drive:e=>(0,P.jsx)(ti,{size:e}),image:e=>(0,P.jsx)(xi,{size:e}),video:e=>(0,P.jsx)(Si,{size:e}),audio:e=>(0,P.jsx)(Ci,{size:e}),text:e=>(0,P.jsx)(yi,{size:e}),code:e=>(0,P.jsx)(bi,{size:e}),clock:e=>(0,P.jsx)(pi,{size:e}),star:e=>(0,P.jsx)(Vi,{size:e}),file:e=>(0,P.jsx)(ei,{size:e}),archive:e=>(0,P.jsx)(wi,{size:e}),pdf:e=>(0,P.jsx)(Ti,{size:e}),executable:e=>(0,P.jsx)(Ei,{size:e}),font:e=>(0,P.jsx)(Di,{size:e}),database:e=>(0,P.jsx)(Oi,{size:e}),config:e=>(0,P.jsx)(ki,{size:e}),spreadsheet:e=>(0,P.jsx)(Ai,{size:e}),presentation:e=>(0,P.jsx)(ji,{size:e}),document:e=>(0,P.jsx)(Mi,{size:e}),app:e=>(0,P.jsx)(vi,{size:e}),gear:e=>(0,P.jsx)(li,{size:e}),pin:e=>(0,P.jsx)(ui,{size:e}),trash:e=>(0,P.jsx)(hi,{size:e}),overview:e=>(0,P.jsx)(Ni,{size:e}),book:e=>(0,P.jsx)(Hi,{size:e}),briefcase:e=>(0,P.jsx)(Ui,{size:e}),cloud:e=>(0,P.jsx)(Wi,{size:e}),gamepad:e=>(0,P.jsx)(Gi,{size:e}),camera:e=>(0,P.jsx)(Ki,{size:e}),terminal:e=>(0,P.jsx)(qi,{size:e}),server:e=>(0,P.jsx)(Ji,{size:e}),package:e=>(0,P.jsx)(Yi,{size:e}),globe:e=>(0,P.jsx)(Xi,{size:e}),heart:e=>(0,P.jsx)(Zi,{size:e}),share:e=>(0,P.jsx)(Ji,{size:e}),favorites:e=>(0,P.jsx)(Zi,{size:e})};function vs(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function ys(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??ms)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||hs.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=vs(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${gs[n]??n}${bs(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function bs(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function xs({panel:e,size:t=16}){let n=ln(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,P.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?_s[e.icon]:void 0;if(r)return(0,P.jsx)(P.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,P.jsx)($r,{size:t});case`recent`:return(0,P.jsx)(pi,{size:t});case`frequent`:return(0,P.jsx)(Vi,{size:t});case`drives`:return(0,P.jsx)(ti,{size:t});case`home`:return(0,P.jsx)(Qr,{size:t});case`share`:return(0,P.jsx)(Ji,{size:t});case`favorites`:return(0,P.jsx)(Zi,{size:t});default:return(0,P.jsx)($r,{size:t})}}function Ss({place:e,size:t=18}){let n=ln(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,P.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&_s[e.icon]?(0,P.jsx)(P.Fragment,{children:_s[e.icon](t)}):(0,P.jsx)($r,{size:t})}var Cs=`#64748b`;function ws(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Ts({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=I(),[c,l]=(0,E.useState)(``),[u,d]=(0,E.useState)(`#2dd4bf`),f=(0,E.useRef)(null);(0,E.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Oa.createPortal)((0,P.jsxs)(Es,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,P.jsxs)(Ds,{children:[(0,P.jsx)(`span`,{children:s(`Tags`)}),(0,P.jsx)(Os,{onClick:o,title:s(`Close`),type:`button`,children:(0,P.jsx)(_i,{size:11})})]}),(0,P.jsxs)(ks,{children:[p.length===0&&(0,P.jsx)(Ns,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,P.jsxs)(As,{children:[(0,P.jsx)(js,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,P.jsxs)(Ms,{$color:t,$ink:ws(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,P.jsx)(gi,{size:11}),(0,P.jsx)(`span`,{children:e})]})]},e)})]}),(0,P.jsxs)(Ps,{children:[(0,P.jsx)(js,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,P.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,P.jsx)(Fs,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var Es=_.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${Ra}
`,Ds=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Os=_.button`
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
`,ks=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,As=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,js=_.input`
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
`,Ms=_.button`
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
`,Ns=_.span`
    font-size: 11px;
    color: var(--text-muted);
`,Ps=_.div`
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
`,Fs=_.button`
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
`,Is={file:ei,folder:$r,text:yi,code:bi,image:xi,video:Si,audio:Ci,archive:wi,pdf:Ti,executable:Ei,font:Di,database:Oi,config:ki,spreadsheet:Ai,presentation:ji,document:Mi},Ls={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Rs(e){let t=e.lastIndexOf(`.`);return t>0?Ls[e.slice(t).toLowerCase()]??`file`:`file`}function zs({name:e,size:t}){let n=Is[e??`file`]??ei;return(0,P.jsx)(n,{size:t})}function Bs({path:e,name:t,isDirectory:n,size:r=18}){let i=cn(e,n);return i?(0,P.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,P.jsx)($r,{size:r}):(0,P.jsx)(zs,{name:Rs(t),size:r})}var Vs=`application/x-yafm-paths`,Hs=[Vs,`text/uri-list`];function Us(e){return e?.types.some(e=>Hs.includes(e.toLowerCase()))??!1}function Ws(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Vs);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Ks).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Gs=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Ks(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Gs?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function qs(e,t,n=!0){e.dataTransfer.setData(Vs,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Js({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=I(),[m,h]=(0,E.useState)(()=>new Set),[g,_]=(0,E.useState)(!1),v=(0,E.useRef)(null),y=(0,E.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),b=(0,E.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),x=(0,E.useRef)(null);if((0,E.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=x.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Us(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Ws(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let S=new Set([...e,...t].map(e=>e.path)),ee=S.size>0&&[...S].every(e=>m.has(e)),C=S.size,te=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},ne=()=>{h(ee?new Set:S)},re=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},w=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},T=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},ae=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},D=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},oe=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of b)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},O=(e,t)=>{let n=m.has(e.path);return(0,P.jsxs)(oc,{$checked:n,draggable:!0,onClick:()=>te(e.path),onDragStart:r=>{qs(r,n&&m.size>0?[...new Set([...y,...b].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,P.jsx)(sc,{$checked:n,onClick:t=>{t.stopPropagation(),te(e.path)},type:`button`,children:n&&(0,P.jsx)(gi,{size:8})}),(0,P.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,P.jsxs)(cc,{children:[(0,P.jsx)(lc,{children:e.name}),(0,P.jsx)(uc,{children:ie(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},se=e=>{Us(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,P.jsxs)(Ys,{$dragging:g,"data-tray":`true`,ref:x,style:{left:i.x,top:i.y},onDragEnter:se,onDragOver:se,onDrop:e=>{let{paths:t}=Ws(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,P.jsxs)(Xs,{onPointerDown:re,onPointerMove:w,onPointerUp:T,children:[(0,P.jsxs)(Zs,{children:[(0,P.jsx)(Yi,{size:13}),p(`Tray`),(0,P.jsx)(Qs,{children:C})]}),(0,P.jsxs)($s,{onPointerDown:e=>e.stopPropagation(),children:[(0,P.jsx)(ec,{onClick:ne,title:p(ee?`Select none`:`Select all`),type:`button`,children:p(ee?`None`:`All`)}),(0,P.jsx)(ec,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,P.jsx)(tc,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,P.jsx)(_i,{size:10})})]})]}),(0,P.jsxs)(nc,{children:[(0,P.jsxs)(ic,{children:[p(`In this app`),(0,P.jsx)(Qs,{children:e.length})]}),e.length===0&&(0,P.jsx)(rc,{children:p(`Drag files or folders here`)}),e.map(e=>O(e,!0)),t.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(ic,{$clipboard:!0,children:[p(`Clipboard`),(0,P.jsx)(Qs,{children:t.length}),n&&(0,P.jsx)(ac,{children:p(`Cut`)})]}),t.map(e=>O(e,n))]})]}),(0,P.jsxs)(dc,{children:[(0,P.jsx)(fc,{$plain:!0,disabled:y.length===0,onClick:D,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,P.jsx)(fc,{disabled:m.size===0||!a,onClick:oe,type:`button`,children:p(`Move here`)}),(0,P.jsx)(fc,{$danger:!0,disabled:y.length===0,onClick:ae,type:`button`,children:p(`Remove`)})]})]})}var Ys=_.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${ka}
    ${Ra}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Xs=_.div`
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
`,Zs=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,Qs=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,$s=_.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,ec=_.button`
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
`,tc=_.button`
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
`,nc=_.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,rc=_.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,ic=_.div`
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
`,ac=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,oc=_.div`
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
`,sc=_.button`
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
`,cc=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,lc=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,uc=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dc=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,fc=_.button`
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
`,pc=new Map,mc=new Set,hc=0;function gc(){hc+=1;for(let e of mc)e()}function _c(e,t){t?pc.set(e,t):pc.delete(e),gc()}function vc(e){return pc.has(e)}function yc(e,t,n){pc.get(e)?.(t,n)}function bc(e){return mc.add(e),()=>mc.delete(e)}function xc(){return hc}function Sc(e){return(0,E.useSyncExternalStore)(bc,xc,xc),{available:vc(e),open:(t,n)=>yc(e,t,n)}}function Cc(e){return[...pc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function wc(e){return(0,E.useSyncExternalStore)(bc,xc,xc),{available:Cc(e).length>0,open:(t,n)=>{let r=Cc(e).at(-1);r&&yc(r,t,n)}}}var Tc=60,Ec=300,Dc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Oc=new Set,kc=`yafm.columnWidths`,Ac=`yafm.reset-column-widths`,jc=64,Mc=720,Nc=160,Pc=190,Fc=120;function Ic({listing:e,loading:t,error:n,find:r=_n,view:i,showImages:a,imageStripHeight:s=Pc,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:d,onOpenFile:p,showCheckboxes:m=!0,openOnSingleClick:h=!1,shortcuts:g=Bt,enableShortcuts:_=!0,refreshToken:b=0,onRefresh:x,onRename:S,onClipboardChanged:ee,cutPaths:C=Oc,onTransfer:te,onAddToTray:ne,onAddFavorite:re,onRemoveFavorite:w,favoritePaths:ie,onExtractArchive:T,onPaste:ae,confirmDelete:D=!1,previewVideoAudio:oe=!1,previewVideoAutoplay:O=!1,showDetails:se=!0,onPreviewInfo:k,onActivate:ce,groupOf:A,onGridScroll:j,gridFooter:le,allowBackgroundMenu:M=!0,readOnly:N=!1,onSelectionChange:ue,onSelectionCountChange:de,selectionMenuRequest:fe,selectionMenuId:F,singleSelect:pe=!1,pendingRename:me=null,pendingRenameToken:he=0}){let L=I(),ge=Nn(),R=(0,E.useRef)(null),_e=(0,E.useRef)(null),z=(0,E.useRef)(null),[ve,B]=(0,E.useState)(Ec),[ye,be]=(0,E.useState)({top:0,height:640}),xe=(0,E.useRef)(null),V=(0,E.useRef)(null),[Se,Ce]=(0,E.useState)(null),[we,Te]=(0,E.useState)(s),[Ee,De]=(0,E.useState)(()=>new Set),[Oe,ke]=(0,E.useState)(()=>Rn(kc)??{}),Ae=(0,E.useRef)(Ee),je=(0,E.useRef)([]);Ae.current=Ee,(0,E.useEffect)(()=>ue?.([...Ee]),[Ee,ue]),(0,E.useEffect)(()=>de?.(Ee.size),[Ee,de]),(0,E.useEffect)(()=>{let e=fe;if(!e||e.token===Ne.current)return;Ne.current=e.token;let t=[...Ae.current];t.length!==0&&(Me({x:e.x,y:e.y,paths:t,background:!1}),_t().then(qe,()=>qe(!1)))},[fe]);let[H,Me]=(0,E.useState)(null),Ne=(0,E.useRef)(0),[Pe,Fe]=(0,E.useState)(null),[Ie,Le]=(0,E.useState)(null),[Re,ze]=(0,E.useState)(null),Be=(0,E.useRef)(Re);Be.current=Re;let Ve=(0,E.useRef)(0),He=(0,E.useRef)(ce);He.current=ce;let[Ue,We]=(0,E.useState)(()=>{let e=In(`yafm.preview.width`,320);return e>=220?e:320}),Ge=(0,E.useCallback)(e=>{We(e),Ln(`yafm.preview.width`,e)},[]),[Ke,qe]=(0,E.useState)(!1),Je=(0,E.useCallback)((e,t)=>{let n=[...Ae.current];n.length!==0&&(Me({x:e,y:t,paths:n,background:!1}),_t().then(qe,()=>qe(!1)))},[]);(0,E.useEffect)(()=>{if(F)return _c(F,Ee.size>0?Je:null),()=>_c(F,null)},[F,Ee,Je]),(0,E.useEffect)(()=>{De(new Set),ze(null),Me(null),V.current=null},[e?.path]),(0,E.useEffect)(()=>{Te(s)},[s]),(0,E.useEffect)(()=>{De(new Set),ze(null),V.current=null},[b]);let Ye=e=>{xe.current={y:e.clientY,height:we},e.currentTarget.setPointerCapture(e.pointerId)},Xe=e=>{let t=xe.current;if(!t)return;let n=Math.max(Fc,Math.round(window.innerHeight*.7));Te(Math.min(n,Math.max(Fc,t.height+t.y-e.clientY)))},Ze=e=>{xe.current&&(xe.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(we))},Qe=()=>{Te(Pc),c?.(Pc)},$e=r.query.length>0,et=(0,E.useMemo)(()=>Dc.filter(e=>i.columns?.includes(e.id)),[i.columns]),tt=i.columns?.includes(`linkTarget`)??!1,nt=(0,E.useCallback)(e=>Math.min(Mc,Math.max(jc,Oe[e.id]??e.width)),[Oe]),rt=(0,E.useMemo)(()=>`minmax(160px, 1fr) ${et.map(e=>`${nt(e)}px`).join(` `)}`.trim(),[et,nt]),it=(0,E.useRef)(null),at=(0,E.useRef)(null),ot=()=>Math.floor(at.current?.getBoundingClientRect().width??Nc),st=e=>{let t=et[0];t&&(e.preventDefault(),e.stopPropagation(),it.current={left:{id:t.id,start:nt(t)},startX:e.clientX,nameStart:ot()})},ct=(e,t)=>{let n=et[t],r=et[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),it.current={left:{id:n.id,start:nt(n)},right:{id:r.id,start:nt(r)},startX:e.clientX,nameStart:0})},lt=e=>ke(t=>{let n={...t};return delete n[e],zn(kc,n),n});(0,E.useEffect)(()=>{let e=e=>{let t=it.current;if(!t)return;let n=e.clientX-t.startX;ke(e=>{if(!t.right){let r=Math.max(0,t.nameStart-Nc),i=Math.min(Math.min(Mc,t.left.start+r),Math.max(jc,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(Mc,Math.max(jc,t.left.start+n)),a=Math.min(Math.min(Mc,r-jc),Math.max(Math.max(jc,r-Mc),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{it.current&&(it.current=null,ke(e=>(zn(kc,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,E.useEffect)(()=>{let e=()=>ke(()=>(zn(kc,{}),{}));return window.addEventListener(Ac,e),()=>window.removeEventListener(Ac,e)},[]);let U=(0,E.useMemo)(()=>e?zc(e.entries.map(t=>{let n=t.isDirectory?Pn(ge,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:$e?vn(i,r):null,tags:e.tags[t.name]??[],cut:C.has(t.fullPath)}}).filter(e=>!$e||r.mode===`dim`||e.ranges!==null),i,e,L):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,$e,r,ge,i.sort,i.sortDescending,L,C]);je.current=U;let ut=Math.max(40,i.iconSize+20),dt=Math.max(0,Math.floor(ye.top/ut)-4),ft=Math.min(U.length,dt+Math.ceil(ye.height/ut)+10),pt=(0,E.useMemo)(()=>U.slice(dt,ft),[U,dt,ft]);(0,E.useEffect)(()=>{let e=z.current;if(!e||i.mode!==`list`)return;let t=()=>be(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,E.useEffect)(()=>{be(e=>({...e,top:0})),z.current&&(z.current.scrollTop=0)},[e?.path]),(0,E.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=U.findIndex(e=>e.entry.fullPath===r.currentPath),t=z.current;if(e<0||!t)return;let n=e*ut;(n<t.scrollTop||n+ut>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else R.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,U,ut]);let mt=(0,E.useMemo)(()=>U.slice(0,ve),[U,ve]);(0,E.useEffect)(()=>{B(Ec)},[e?.path]),(0,E.useEffect)(()=>{if(!r.currentPath)return;let e=U.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&B(t=>Math.max(t,e+Ec))},[r.currentPath,U]);let ht=(0,E.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&B(e=>Math.min(U.length,e+Ec))},[U.length]),vt=i.mode===`grid`,yt=(0,E.useMemo)(()=>{if(!vt)return[];if(!A)return Hc(mt,Vc);let e=[],t=new Map;for(let n of mt){let r=A(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[mt,vt,A]),W=(0,E.useMemo)(()=>a?U.filter(e=>!e.entry.isDirectory&&kn(e.entry.name)):[],[U,a]),wt=W.length,Tt=(0,E.useMemo)(()=>W.slice(0,Tc),[W]),Et=(0,E.useMemo)(()=>a?Hc(Tt,Bc):[],[Tt,a]),kt=(0,E.useMemo)(()=>U.map(e=>e.entry.fullPath),[U]),jt=U.length>0&&Ee.size>=U.length,Mt=Ee.size>0&&!jt,Nt=()=>{pe||(jt?It():De(new Set(kt)))},Pt=e?.path??``,G=(0,E.useCallback)((e,t)=>{if(pe){V.current=t,De(new Set([t]));return}let n=e.ctrlKey||e.metaKey;De(r=>{if(e.shiftKey&&V.current!==null){let e=kt.indexOf(V.current),i=kt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(kt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),V.current=t,e}return V.current=t,new Set([t])})},[kt,pe]),Ft=(0,E.useCallback)(e=>{pe?(V.current=e,De(new Set([e]))):(V.current=e,De(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[pe]),It=(0,E.useCallback)(()=>{V.current=null,De(new Set)},[]);(0,E.useEffect)(()=>{if(he===0||!me||Ve.current===he||!e?.entries.some(e=>e.fullPath===me))return;Ve.current=he,V.current=me,De(new Set([me])),ze({path:me,value:v(me)});let t=U.findIndex(e=>e.entry.fullPath===me),n=z.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*ut;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(me)}"]`)?.scrollIntoView({block:`nearest`})})}},[z,e,me,he,ut,U,i.mode]),(0,E.useEffect)(()=>{if(!Re)return;let e=U.findIndex(e=>e.entry.fullPath===Re.path),t=z.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*ut;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Re.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[z,Re,ut,U,i.mode]);let Rt=(0,E.useCallback)(()=>Me(null),[]),zt=(0,E.useCallback)((e,t)=>{e.isDirectory?d(e.fullPath,Ut(t)):p?.(e.fullPath,Ut(t))},[d,p]),Vt=(0,E.useCallback)((e,t,n)=>{Ce({entry:e,x:t,y:n})},[]),Ht=(0,E.useRef)(null),Gt=(0,E.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;qs(e,Ee.has(n)?[...Ee]:[n])},[Ee]),Kt=(0,E.useCallback)(e=>{if(!Us(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Ht.current=t?.dataset.directory===`true`?t.dataset.path??Pt:Pt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Pt]),Jt=(0,E.useCallback)(e=>{if(N)return;let{paths:t,move:n}=Ws(e),r=Ht.current??Pt;Ht.current=null,t.length!==0&&te&&(e.preventDefault(),te(t,r,!e.ctrlKey&&n))},[Pt,te,N]),Yt=(0,E.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),N||!t&&!M)return;let n=Ae.current;t&&!n.has(t)&&De(new Set([t])),t&&(V.current=t);let r=t?n.has(t)?[...n]:[t]:[];Me({x:e.clientX,y:e.clientY,paths:r,background:!t}),_t().then(qe,()=>qe(!1))},[M,Pt]),Xt=(0,E.useCallback)(()=>x?.(),[x]),Zt=(e,t)=>{V.current=e,De(new Set([e])),t&&ze({path:e,value:v(e)}),Xt()},Qt=Pe&&(0,P.jsx)(bo,{initialDirectory:Pt,initialName:Pe.name,onCancel:()=>Fe(null),onCompress:async e=>{let t=await Lt(Pe.paths,e);return!t.ok||!t.path?(ga(t.error??L(`Could not create the archive.`)),!1):(Zt(t.path,!1),!0)}}),$t=async(e,t=!1)=>{await gt(e,t)&&(qe(!0),ee?.())},en=async e=>{e&&(await bt(e)?(Xt(),ae?.()):ga(L(`Nothing on the clipboard could be pasted here.`)))},tn=async(e,t=!1)=>{if(!Pt)return;let n=e===null?await Ct(Pt,t):await Dt(Pt,e);!n.ok||n.path===null?ga(n.error??L(`Could not create the item.`)):(V.current=n.path,De(new Set([n.path])),ze({path:n.path,value:v(n.path)}),Xt())},nn=e=>{De(new Set([e.fullPath])),V.current=e.fullPath,ze({path:e.fullPath,value:e.name})},rn=(0,E.useCallback)(e=>ze(t=>t&&{...t,value:e}),[]),an=(0,E.useCallback)(()=>ze(null),[]),on=(0,E.useCallback)(async()=>{let e=Be.current;if(ze(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=je.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await St(e.path,t);r.ok?(It(),r.path&&S?.(e.path,r.path),Xt(),window.setTimeout(()=>Xt(),250)):ga(r.error??L(`Could not rename the entry.`))},[It,S,Xt,L]),K=async(e,t=!1)=>{if((t||D)&&!await q(e,t))return;let n=await xt(e,t);if(!n.ok&&n.needsPermanent){if(!await q(e,!0))return;n=await xt(e,!0)}if(n.ok)It(),Xt();else{if(n.cancelled)return;ga(n.error??L(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},q=(0,E.useCallback)((e,t)=>new Promise(n=>Le({paths:e,permanent:t,resolve:n})),[]),sn=(0,E.useCallback)(e=>{Le(t=>(t?.resolve(e),null))},[]);(0,E.useEffect)(()=>{if(!_||H)return;let e=e=>{if(qt(e.target))return;He.current?.();let t=Wt(e),n=[...Ee],r=n.length===1?U.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(kt.length===0)return;e.preventDefault();let n=V.current&&kt.includes(V.current)?V.current:Ee.size===1?[...Ee][0]:null,r=n?kt.indexOf(n):-1,i=t===`home`?0:t===`end`?kt.length-1:Math.max(0,Math.min(kt.length-1,r+(t===`arrowdown`?1:-1))),a=kt[i];De(new Set([a])),V.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===g.copy?i(()=>{n.length>0&&$t(n)}):t===g.cut?i(()=>{n.length>0&&$t(n,!0)}):t===g.paste?i(()=>void en(Pt)):t===g.delete?i(()=>{n.length>0&&K(n)}):t===g.deletePermanently?i(()=>{n.length>0&&K(n,!0)}):t===g.selectAll?i(()=>{De(new Set(kt)),V.current=kt[0]??null}):t===g.invertSelection?i(()=>{De(new Set(kt.filter(e=>!Ee.has(e)))),V.current=kt[0]??null}):t===g.rename&&r?i(()=>void nn(r)):t===g.open&&r?i(()=>{r.isDirectory?d(r.fullPath):p?.(r.fullPath)}):t===g.newFolder||t===`f10`?i(()=>void tn(null)):t===g.terminal?i(()=>void At(Pt)):t===g.properties&&i(()=>void Ot(n.length>0?n:Pt?[Pt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[kt,$t,tn,Pt,_,H,d,p,en,K,nn,U,Ee,g]);let cn=Ie&&(0,P.jsx)(No,{confirmLabel:Ie.permanent?L(`Delete`):L(`Move`),danger:Ie.permanent,message:Ie.permanent?L(`Permanently delete {target}? This cannot be undone.`,{target:Ie.paths.length===1?L(`this item`):L(`{count} items`,{count:Ie.paths.length})}):L(`Move {target} to the recycle bin?`,{target:Ie.paths.length===1?L(`this item`):L(`{count} items`,{count:Ie.paths.length})}),onCancel:()=>sn(!1),onConfirm:()=>sn(!0),open:!0,title:Ie.permanent?L(`Delete permanently`):L(`Move to the recycle bin`)}),J=(0,E.useMemo)(()=>{if(!e||Ee.size===0)return null;let t=kt.find(e=>Ee.has(e));return t?U.find(e=>e.entry.fullPath===t)?.entry??null:null},[kt,e,U,Ee]),ln=(0,E.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:v(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:L(`Type`),value:L(`Folder`)},{label:L(`Location`),value:e.parent??`—`},{label:L(`Path`),value:e.path},{label:L(`Size`),value:f(t)},{label:L(`Items`),value:o(L,n,`1 item`,`{count} items`)},{label:L(`Modified`),value:`—`},{label:L(`Created`),value:`—`},{label:L(`Attributes`),value:`—`}]}},[e,L]),un=(0,E.useMemo)(()=>{if(!J||!e)return null;let t=J.isDirectory?e.folderSizes[J.name]:void 0,n=e.tags[J.name]??[],r=J.name.lastIndexOf(`.`),i=r>0&&r<J.name.length-1?J.name.slice(r+1).toUpperCase():`—`;return{name:J.name,path:J.fullPath,isDirectory:J.isDirectory,size:J.size,modified:J.modified,created:J.created,fields:[{label:L(`Type`),value:Gc(J,L)},...J.isEncrypted?[{label:L(`Encryption`),value:L(`Password required`)}]:[],{label:L(`Extension`),value:J.isDirectory?`—`:i},{label:L(`Location`),value:e.path},{label:L(`Full path`),value:J.fullPath},{label:L(`Size`),value:J.isDirectory?t===void 0?`—`:f(t):f(J.size)},...J.isDirectory?[{label:L(`Items`),value:`${e.counts[J.name]??`—`}`}]:[],{label:L(`Modified`),value:y(J.modified)},{label:L(`Created`),value:y(J.created)},{label:L(`Link status`),value:J.linkTarget==null?J.linkCount>1?L(`Hard link`):`—`:J.linkValid?`OK`:L(`Broken`)},...J.linkTarget?[{label:L(`Target`),value:J.linkTarget}]:[],...J.linkCount>1?[{label:L(`Links`),value:String(J.linkCount)}]:[],{label:L(`Attributes`),value:[J.isHidden?L(`Hidden`):``,J.isSystem?L(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:L(`Tags`),value:n.join(`, `)}]:[]]}},[e,J,L]),dn=H?.paths.length===1?H.paths[0]:null,fn=dn?U.find(e=>e.entry.fullPath===dn)?.entry:void 0,pn=fn?{path:fn.fullPath,isDirectory:fn.isDirectory}:null,mn=un??ln,hn=(0,E.useRef)(k);hn.current=k,(0,E.useEffect)(()=>{hn.current?.(mn)},[k,mn]);let gn=se&&mn&&(0,P.jsx)(Wo,{info:mn,onWidth:Ge,selectionNote:Ee.size>1?o(L,Ee.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:oe,videoAutoplay:O,width:Ue});return n&&!e?(0,P.jsx)(Yl,{children:(0,P.jsx)(Zl,{children:n})}):!e&&!t?(0,P.jsx)(Yl,{children:(0,P.jsx)(Xl,{children:L(`Nothing selected.`)})}):i.mode===`grid`?(0,P.jsxs)(fl,{onPointerDown:ce,children:[(0,P.jsxs)(pl,{children:[(0,P.jsxs)(xl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||It()},onContextMenu:e=>Yt(e),onDragOver:Kt,onDragStart:Gt,onDrop:Jt,onScroll:e=>{j?.(e.currentTarget),ht(e.currentTarget)},children:[m&&U.length>0&&(0,P.jsxs)(ll,{children:[(0,P.jsx)(sl,{$checked:!pe&&jt,$partial:!pe&&Mt,"aria-label":L(jt?`Select none`:`Select all`),disabled:pe,onClick:Nt,title:L(jt?`Select none`:`Select all`),type:`button`,children:jt?(0,P.jsx)(gi,{size:10}):Mt?(0,P.jsx)(cl,{}):null}),(0,P.jsx)(`span`,{children:L(jt?`Select none`:`Select all`)})]}),t&&!e?(0,P.jsx)(El,{$size:i.gridSize,children:(0,P.jsx)(Zc,{size:i.gridSize})}):(0,P.jsx)($c,{counts:e?.counts,currentPath:$e?r.currentPath:null,groups:yt,gridSize:i.gridSize,innerRef:R,onContextMenu:Yt,onOpen:d,onOpenFile:p,onRenameCancel:an,onRenameChange:rn,onRenameCommit:on,onSelect:G,onToggle:Ft,openOnSingleClick:h,renaming:Re,searching:$e,selected:Ee,showCheckboxes:m,showTarget:tt}),!t&&e&&U.length===0&&(0,P.jsx)(Jl,{children:(0,P.jsx)(Xl,{children:n??($e&&r.mode===`hide`?L(`No entries match the search.`):L(`This folder is empty.`))})}),le]}),H&&(0,P.jsx)(ro,{canPaste:Ke,directory:Pt,allowCompression:!0,menu:H,onAddToTray:ne,onAddFavorite:re,onRemoveFavorite:w,favoritePaths:ie,onExtractArchive:T,onArchiveCreated:Zt,onClose:Rt,onCompressTo:(e,t)=>Fe({paths:e,name:t}),onCopy:$t,onCreateFile:e=>void tn(e),onCreateFolder:e=>void tn(null,e),onDelete:K,onOpen:d,onOpenFile:p,onPaste:en,onRefresh:Xt,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&nn(t)},shortcuts:g,target:pn}),Qt,cn]}),gn]}):(0,P.jsxs)(fl,{onPointerDown:ce,children:[(0,P.jsxs)(pl,{children:[(0,P.jsxs)(ml,{onScroll:e=>{z.current&&z.current.scrollLeft!==e.currentTarget.scrollLeft&&(z.current.scrollLeft=e.currentTarget.scrollLeft)},ref:_e,style:{gridTemplateColumns:rt},children:[(0,P.jsxs)(il,{ref:at,children:[m&&(0,P.jsx)(sl,{$checked:!pe&&jt,$partial:!pe&&Mt,"aria-label":L(jt?`Select none`:`Select all`),disabled:pe,onClick:e=>{e.stopPropagation(),Nt()},title:L(jt?`Select none`:`Select all`),type:`button`,children:jt?(0,P.jsx)(gi,{size:10}):Mt?(0,P.jsx)(cl,{}):null}),(0,P.jsxs)(hl,{onClick:()=>l(`name`),type:`button`,children:[L(`Name`),Lc(i,`name`)]}),(0,P.jsx)(ol,{"aria-label":L(`Resize column`),onDoubleClick:()=>et[0]&&lt(et[0].id),onPointerDown:st,role:`separator`})]}),et.map((e,t)=>(0,P.jsxs)(al,{children:[(0,P.jsxs)(hl,{onClick:()=>l(e.id),type:`button`,children:[L(e.label),Lc(i,e.id)]}),t<et.length-1&&(0,P.jsx)(ol,{"aria-label":L(`Resize column`),onDoubleClick:()=>lt(e.id),onPointerDown:e=>ct(e,t),role:`separator`})]},e.id))]}),(0,P.jsxs)(gl,{onClick:e=>{e.target===e.currentTarget&&It()},onContextMenu:e=>Yt(e),onDragOver:Kt,onDragStart:Gt,onDrop:Jt,onScroll:e=>{_e.current&&_e.current.scrollLeft!==e.currentTarget.scrollLeft&&(_e.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;be(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:z,children:[t&&!e?(0,P.jsx)(Xc,{template:rt,columns:et.length}):(0,P.jsxs)(P.Fragment,{children:[dt>0&&(0,P.jsx)(`div`,{style:{height:dt*ut}}),pt.map(t=>{let n=t.entry.fullPath;return(0,P.jsx)(tl,{current:$e&&n===r.currentPath,dim:$e&&t.ranges===null,height:ut,iconSize:i.iconSize,innerRef:R,listing:e,onContextMenu:Yt,onOpen:zt,onRenameCancel:an,onRenameChange:rn,onRenameCommit:on,onSelect:G,onTagEdit:Vt,onToggle:Ft,openOnSingleClick:h,renaming:Re?.path===n?{value:Re.value}:null,row:t,selected:Ee.has(n),showCheckboxes:m,showTarget:tt,template:rt,visible:et},n)}),ft<U.length&&(0,P.jsx)(`div`,{style:{height:(U.length-ft)*ut}})]}),!t&&e&&U.length===0&&(0,P.jsx)(Yl,{children:(0,P.jsx)(Xl,{children:n??($e&&r.mode===`hide`?L(`No entries match the search.`):L(`This folder is empty.`))})})]}),a&&W.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(_l,{onDoubleClick:Qe,onPointerDown:Ye,onPointerMove:Xe,onPointerUp:Ze,title:L(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(vl,{style:{height:we},children:[(0,P.jsxs)(yl,{children:[L(`Preview`),(0,P.jsx)(bl,{children:wt>Tc?`${Tt.length} / ${wt}`:wt})]}),(0,P.jsx)(xl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||It()},onContextMenu:e=>Yt(e),children:(0,P.jsx)($c,{counts:e?.counts,currentPath:$e?r.currentPath:null,groups:Et,gridSize:i.gridSize,onContextMenu:Yt,onOpen:d,onOpenFile:p,onSelect:G,onToggle:Ft,openOnSingleClick:h,searching:$e,selected:Ee,showCheckboxes:m,showTarget:tt})})]})]}),Se&&e&&(0,P.jsx)(Ts,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(Se.entry.name,e,t),onClose:()=>Ce(null),tags:e.tags[Se.entry.name]??[],x:Se.x,y:Se.y}),H&&(0,P.jsx)(ro,{canPaste:Ke,directory:Pt,allowCompression:!0,menu:H,onAddToTray:ne,onAddFavorite:re,onRemoveFavorite:w,favoritePaths:ie,onExtractArchive:T,onArchiveCreated:Zt,onClose:Rt,onCompressTo:(e,t)=>Fe({paths:e,name:t}),onCopy:$t,onCreateFile:e=>void tn(e),onCreateFolder:e=>void tn(null,e),onDelete:K,onOpen:d,onOpenFile:p,onPaste:en,onRefresh:Xt,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&nn(t)},shortcuts:g,target:pn}),Qt,cn]}),gn]})}function Lc(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Rc=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function zc(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Gc(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Rc.compare(String(r),String(i));return t.sortDescending?-o:o})}var Bc=En.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&On(t.entry.name)===e})),Vc=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Bc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Hc(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Uc(e){return Math.max(24,Math.min(e-56,160))}var Wc={file:`File`,folder:`Folder`,text:`Text file`,code:`source file`,image:`image`,video:`Video`,audio:`Audio`,archive:`archive`,pdf:`PDF`,executable:`Application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Gc(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Wc[Rs(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Kc(e,t,n,r){switch(e){case`type`:return Gc(t,r);case`size`:return Jc(t,n.folderSizes);case`modified`:return y(t.modified);case`created`:return y(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function qc({name:e,ranges:t}){if(!t||t.length===0)return(0,P.jsx)(P.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,P.jsx)(ql,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,P.jsx)(P.Fragment,{children:n})}function Jc(e,t){if(!e.isDirectory)return f(e.size);let n=t[e.name];return n===void 0?`—`:f(n)}function Yc({entry:e,size:t=18}){let n=I(),r=(0,E.useRef)(null),[i,a]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=cn(i?e.fullPath:null,e.isDirectory,t>32),s=ln(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,P.jsxs)(nl,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,P.jsx)(zs,{name:e.iconSource.slice(5),size:t}):s?(0,P.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,P.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,P.jsx)($r,{size:t}):(0,P.jsx)(zs,{name:Rs(e.name),size:t}),e.isEncrypted&&(0,P.jsx)(rl,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,P.jsx)(ca,{size:Math.max(8,Math.round(t*.52))})})]})}function Xc({template:e,columns:t}){return(0,P.jsx)(P.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,P.jsxs)(Dl,{style:{gridTemplateColumns:e},children:[(0,P.jsxs)(Al,{children:[(0,P.jsx)(Ol,{style:{flexShrink:0,height:18,width:18}}),(0,P.jsx)(Ol,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,P.jsx)(Ol,{style:{width:t%2==0?44:92}},t))]},r))})}function Zc({size:e}){return(0,P.jsx)(P.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,P.jsxs)(Vl,{$dim:!1,$current:!1,$selected:!1,children:[(0,P.jsx)(Hl,{children:(0,P.jsx)(Ol,{style:{height:e,width:e}})}),(0,P.jsx)(Wl,{children:(0,P.jsx)(Ol,{style:{height:9,width:`${t}%`}})})]},n))})}var Qc=(0,E.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=I(),x=Nn(),S=!e.entry.isDirectory&&kn(e.entry.name),ee=(0,E.useRef)(null),[C,te]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(!S||C)return;let e=ee.current;if(!e)return;if(!(`IntersectionObserver`in window)){te(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(te(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,C]);let ne=pn(S&&C?e.entry.fullPath:null,192,e.entry.modified),[re,w]=(0,E.useState)(!1),ie=e.entry.fullPath,T=t=>{e.entry.isDirectory?v(ie,Ut(t)):y?.(ie,Ut(t))};return(0,P.jsxs)(Vl,{$current:t,$dim:n,$selected:s,onClick:e=>{h(e,ie),l&&T(e)},onContextMenu:e=>_(e,ie),onDoubleClick:e=>{l||T(e)},ref:e=>{ee.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":ie,draggable:!u,children:[c&&(0,P.jsx)(dl,{$checked:s,onClick:e=>{e.stopPropagation(),g(ie)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,P.jsx)(gi,{size:10})}),(0,P.jsx)(Hl,{children:S&&ne&&!re?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:ne}):(0,P.jsx)(Ul,{children:e.place&&x.useIcons?(0,P.jsx)(Ss,{place:e.place,size:r}):(0,P.jsx)(Yc,{entry:e.entry,size:r})})}),(0,P.jsxs)(Wl,{children:[u?(0,P.jsx)(el,{onCancel:()=>m?.(),onChange:e=>d?.(e),onCommit:()=>p?.(),value:u.value}):(0,P.jsx)(Gl,{$broken:e.entry.linkValid===!1,children:(0,P.jsx)(qc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,P.jsxs)(Ml,{title:b(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(ca,{size:9}),b(`Encrypted`)]}),e.cut&&(0,P.jsxs)(Nl,{title:b(`This item is cut and will move when something is pasted.`),children:[(0,P.jsx)(ta,{size:9}),b(`Cut`)]}),(0,P.jsx)(Kl,{children:e.entry.isDirectory?i===void 0?Gc(e.entry,b):b(`{type} · {count} items`,{type:Gc(e.entry,b),count:i}):b(`{type} · {size}`,{type:Gc(e.entry,b),size:f(e.entry.size)})}),a&&e.entry.linkTarget&&(0,P.jsxs)(Fl,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,P.jsx)(la,{size:9}),(0,P.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function $c({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=I();return(0,P.jsx)(P.Fragment,{children:e.map(e=>(0,P.jsxs)(Sl,{children:[(0,P.jsxs)(Cl,{children:[y(e.label),(0,P.jsx)(wl,{children:e.rows.length}),(0,P.jsx)(Tl,{})]}),(0,P.jsx)(El,{$size:t,children:e.rows.map(e=>(0,P.jsx)(Qc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Uc(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function el({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,P.jsx)(Pl,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var tl=(0,E.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=I(),ee=Nn(),C=e.entry.fullPath;return(0,P.jsxs)(kl,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,C),o&&_(e.entry,t)},onContextMenu:e=>g(e,C),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":C,draggable:!p,children:[(0,P.jsxs)(Al,{children:[i&&(0,P.jsx)(ul,{$checked:r,onClick:e=>{e.stopPropagation(),h(C)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,P.jsx)(gi,{size:10})}),e.place&&ee.useIcons?(0,P.jsx)(nl,{children:(0,P.jsx)(Ss,{place:e.place,size:s})}):(0,P.jsx)(Yc,{entry:e.entry,size:s}),p?(0,P.jsx)(el,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,P.jsx)(jl,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,P.jsx)(qc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,P.jsxs)(Ml,{title:S(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(ca,{size:9}),S(`Encrypted`)]}),e.cut&&(0,P.jsxs)(Nl,{title:S(`This item is cut and will move when something is pasted.`),children:[(0,P.jsx)(ta,{size:9}),S(`Cut`)]}),a&&e.entry.linkTarget&&(0,P.jsxs)(Fl,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,P.jsx)(la,{size:9}),(0,P.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,P.jsx)(Il,{children:t.id===`tags`?(0,P.jsx)(Ll,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,P.jsx)(Rl,{$color:t,$ink:ws(t),children:e},e)}):(0,P.jsx)(zl,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,P.jsx)(Bl,{children:S(`Broken`)}):Kc(t.id,e.entry,d,S)},t.id))]})}),nl=_.span`
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
`,rl=_.span`
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
`,il=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,al=_.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,ol=_.span`
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
`,sl=_.button`
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
`,cl=_.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,ll=_.div`
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
`,ul=_.button`
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
`,dl=_(ul)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,fl=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,pl=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,ml=_.div`
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
`,hl=_.button`
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
`,gl=_.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,_l=_.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,vl=_.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,yl=_.div`
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
`,bl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,xl=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Sl=_.section`
    & + & {
        margin-top: 22px;
    }
`,Cl=_.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,wl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Tl=_.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,El=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Dl=_.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Ol=_.span`
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
`,kl=_.div`
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
`,Al=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,jl=_.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ml=_.span`
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
`,Nl=_.span`
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
`,Pl=_.input`
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
`,Fl=_.span`
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
`,Il=_.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ll=_.button`
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
`,Rl=_.span`
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
`,zl=_.span`
    color: var(--text-muted);
    font-size: 11px;
`,Bl=_.span`
    color: #fca5a5;
`,Vl=_.div`
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
`,Hl=_.div`
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
`,Ul=_.span`
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
`,Wl=_.div`
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
`,Gl=_.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Kl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,ql=_.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Jl=_.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Yl=_.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Xl=_.p`
    font-size: 13px;
    color: var(--text-muted);
`,Zl=_.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Ql=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,$l=`/assets/bloom-BpfZWiaG.mp4`,eu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,tu=`/assets/drift-BRBSQL2_.mp4`,nu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,ru=`/assets/ember-CtSz0YxR.mp4`,iu=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],au=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],ou=[{id:`builtin:video:drift`,name:`Drift`,url:tu,poster:eu},{id:`builtin:video:ember`,name:`Ember`,url:ru,poster:nu},{id:`builtin:video:bloom`,name:`Bloom`,url:$l,poster:Ql}],su=au.map(e=>({...e,variants:iu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:pu(mu(e.id,t))}))})),cu=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>iu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:pu(hu(e.id,t))}))),lu=new Map([...su.flatMap(e=>e.variants),...cu].map(e=>[e.id,e])),uu=new Map(ou.map(e=>[e.id,e]));function du(e){if(lu.has(e))return lu.get(e).url;if(uu.has(e))return uu.get(e).url;let t=e.split(`:`)[1];return t?lu.get(`builtin:${t}:indigo`)?.url??null:null}function fu(e){return uu.has(e)}function pu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function mu(e,t){return e===`dunes`?Su(t):e===`tide`?Cu(t):xu(t)}function hu(e,t){return e===`skyline`?_u(t):e===`orbit`?vu(t):gu(t)}function gu({accent:e,secondary:t}){let n=bu(t,`#05070f`,.86),r=bu(e,`#0b1020`,.72),i=bu(t,`#0a0f1d`,.66),a=bu(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${bu(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${bu(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function _u({accent:e,secondary:t}){let n=bu(t,`#07040d`,.84),r=bu(e,`#100716`,.7),i=bu(e,`#08050e`,.82),a=bu(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${bu(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function vu({accent:e,secondary:t}){let n=bu(e,`#03050d`,.9),r=bu(t,`#05030c`,.94),i=bu(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${bu(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${bu(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${bu(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${bu(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function yu(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function bu(e,t,n){let[r,i,a]=yu(e),[o,s,c]=yu(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function xu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${bu(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${bu(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${bu(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${bu(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function Su({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${bu(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${bu(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${bu(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${bu(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${bu(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${bu(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${bu(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function Cu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${bu(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${bu(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${bu(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${bu(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var wu=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Tu(e){return wu.test(e)}function Eu({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):re(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=mn(r),a=t?.startsWith(`builtin:`)?du(t):n??i,o=n===null?r===null?t!==null&&fu(t):Tu(r):Tu(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,P.jsxs)(Du,{"aria-hidden":!0,children:[o?(0,P.jsx)(ku,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,P.jsx)(Ou,{src:a,style:{filter:s}}),(0,P.jsx)(Au,{})]})}var Du=_.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,Ou=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,ku=_.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Au=_.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function ju({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=I(),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(()=>Math.max(1,Math.ceil(t)));return(0,E.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,Oa.createPortal)((0,P.jsx)(Mu,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,P.jsxs)(Nu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(Pu,{children:a(`Protected folder`)}),(0,P.jsx)(Fu,{children:a(`These paths are protected by the safety settings:`)}),(0,P.jsx)(Iu,{children:e.map(e=>(0,P.jsxs)(Lu,{children:[(0,P.jsx)(Ru,{children:e.path}),(0,P.jsx)(zu,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,P.jsx)(Bu,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,P.jsx)(Vu,{children:a(`Nothing has been deleted.`)}),(0,P.jsx)(Hu,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,P.jsxs)(Uu,{children:[(0,P.jsx)(Wu,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,P.jsx)(Gu,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var Mu=_.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ua}
`,Nu=_.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ra}
`,Pu=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Fu=_.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Iu=_.div`
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
`,Lu=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Ru=_.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,zu=_.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Bu=_.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Vu=_.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Hu=_.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Uu=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Wu=_.button`
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
`,Gu=_.button`
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
`;function Ku(){let e=I(),[t,n]=(0,E.useState)(null),r=(0,E.useRef)(null),i=(0,E.useRef)(null);(0,E.useEffect)(()=>(ha(e=>new Promise(t=>{r.current=t,n(e)})),()=>ha(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,E.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Oa.createPortal)((0,P.jsx)(qu,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,P.jsxs)(Ju,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(Yu,{children:e(`Notice`)}),(0,P.jsx)(Xu,{children:t}),(0,P.jsx)(Zu,{children:(0,P.jsx)(Qu,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var qu=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ua}
`,Ju=_.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ra}
`,Yu=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Xu=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Zu=_.div`
    display: flex;
    justify-content: flex-end;
`,Qu=_.button`
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
`;function $u(){let e=I(),[t,n]=(0,E.useState)(null),[r,i]=(0,E.useState)(``),a=(0,E.useRef)(null),o=(0,E.useRef)(null);(0,E.useEffect)(()=>(_a((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>_a(null)),[]),(0,E.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Oa.createPortal)((0,P.jsx)(ed,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,P.jsxs)(td,{role:`dialog`,"aria-modal":`true`,children:[(0,P.jsx)(nd,{children:e(`Archive password`)}),(0,P.jsx)(rd,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,P.jsx)(id,{title:t.archive,children:t.archive}),(0,P.jsx)(ad,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,P.jsxs)(od,{children:[(0,P.jsx)(sd,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,P.jsx)(cd,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var ed=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ua}
`,td=_.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ra}
`,nd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,rd=_.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,id=_.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ad=_.input`
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
`,od=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,sd=_.button`
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
`,cd=_(sd)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function ld({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h}){let g=I(),_=(0,E.useRef)(null),v=c??g(`Search this folder`);(0,E.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,P.jsxs)(ud,{children:[(0,P.jsx)(ni,{}),(0,P.jsx)(dd,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(fd,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,P.jsx)(pd,{onClick:()=>y(u),title:g(`Previous match (Shift+Enter)`),type:`button`,children:(0,P.jsx)(ci,{size:12})}),(0,P.jsx)(pd,{$down:!0,onClick:()=>y(d),title:g(`Next match (Enter)`),type:`button`,children:(0,P.jsx)(ci,{size:12})})]}),(0,P.jsx)(md,{$on:n,onClick:()=>y(f),title:g(`Match case`),type:`button`,children:`Aa`}),(0,P.jsx)(md,{$on:r,onClick:()=>y(p),title:g(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,P.jsx)(hd,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:g(t===`hide`?`Hide`:`Dim`)}),(0,P.jsx)(pd,{onClick:h,title:g(`Close search (Esc)`),type:`button`,children:(0,P.jsx)(_i,{size:12})})]})}var ud=_.div`
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
    ${Va}
`,dd=_.input`
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
`,fd=_.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,pd=_.button`
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
`,md=_.button`
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
`,hd=_(md)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function gd(e,t,n,r,i=[]){(0,E.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=vn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function _d({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=I(),a=(0,E.useRef)(null),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(null);return(0,E.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,E.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,E.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Oa.createPortal)((0,P.jsxs)(vd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(_s).map(n=>(0,P.jsx)(yd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:_s[n](16)},n)),(0,P.jsx)(yd,{onClick:async()=>{let e=await fa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,P.jsx)(ai,{size:13})}),r&&(0,P.jsx)(yd,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,P.jsx)(_i,{size:12})})]}),document.body)]})}var vd=_.div`
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
    ${za}
    transform-origin: top left;
`,yd=_.button`
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
`,bd={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function xd(){return N.available?await N.request(`share.list`):bd}async function Sd(e,t){return N.available?await N.request(`share.add`,{path:e,mode:t}):bd}async function Cd(e){return N.available?await N.request(`share.remove`,{id:e}):bd}async function wd(e,t){return N.available?await N.request(`share.mode`,{id:e,mode:t}):bd}async function Td(){return N.available?(await N.request(`share.peers.refresh`)).peers??[]:[]}async function Ed(e,t){N.available&&await N.request(`share.pair.start`,{host:e,port:t})}async function Dd(e,t){N.available&&await N.request(`share.pair.respond`,{requestId:e,accept:t})}async function Od(e,t){N.available&&await N.request(`share.port`,{mode:t,port:e})}var kd=`share://`;function Ad(e){return e.toLowerCase().startsWith(kd)}function jd(e){if(!Ad(e))return null;let[t,n,...r]=e.slice(8).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Md(e,t,n=``){let r=`${kd}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Nd(e){let t=jd(e);if(!t||!N.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await N.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Md(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Md(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Pd(e){let t=jd(e);if(!t||!N.available)throw Error(`This shared file is only available in the desktop app.`);let n=await N.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Fd(e){await V(await Pd(e))}function Id({source:e,poster:t}){let n=re(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=mn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??du(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,P.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,P.jsx)(`img`,{alt:``,src:a}):null}function Ld({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=I(),s=(0,E.useRef)(null),c=(0,E.useRef)(null),l=(0,E.useRef)(!1),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,E.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,E.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,E.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,P.jsx)(af,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,P.jsxs)(of,{children:[(0,P.jsxs)(sf,{children:[(0,P.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,P.jsx)(mf,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,P.jsx)(_i,{size:12})})]}),(0,P.jsx)(cf,{children:o(`Drag the frame to choose the visible part.`)}),(0,P.jsxs)(lf,{children:[t?(0,P.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,P.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,P.jsx)(uf,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:m},children:(0,P.jsx)(df,{})})]}),(0,P.jsxs)(ff,{children:[(0,P.jsx)(pf,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,P.jsx)(pf,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var Rd=150,zd=120,Bd=200,Vd=_.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Hd=_.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Ud=_.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${Bd}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Bd}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Bd*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Bd*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Bd*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Bd}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Bd*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Bd*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Bd*.18)}px),
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
`,Wd=_.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Rd}px);
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
`,Gd=_.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,Kd=_.section`
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
`,qd=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Jd=_.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Yd=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Xd=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Zd=_.input`
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
`,Qd=_.button`
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
`,$d=_.div`
    position: relative;
    width: 132px;
    height: 72px;
`,ef=_.button`
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
`,tf=_.button`
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
`,nf=_.span`
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
`,rf=_.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,af=_.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,of=_.div`
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
`,sf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,cf=_.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,lf=_.div`
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
`,uf=_.div`
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
`,df=_.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,ff=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,pf=_.button`
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
`,mf=_.button`
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
`,hf=_.button`
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
`,gf=_.div`
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
`,_f=_.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,vf=_.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,yf=_.button`
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
`,bf=_.div`
    position: relative;
    display: inline-flex;
`,xf=_.div`
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
`,Sf=_.button`
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
`,Cf=_.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,wf=_.section`
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
`,Tf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Ef=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Df=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Of=_.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,kf=_.input`
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
`,Af=_.button`
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
`,jf=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Mf=_.div`
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
`,Nf=_.span`
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
`,Pf=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Ff=_.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,If=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Lf=_.button`
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
`,Rf=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,zf=_.button`
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
`,Bf=_.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Vf=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Hf=_.div`
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
`,Uf=_.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Wf=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Gf=_.button`
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
`,Kf=_.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,qf=_.button`
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
`,Jf=_.button`
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
`,Yf=_.button`
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
`,Xf=_.span`
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
`,Zf=_.button`
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
`,Qf=_.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,$f=_.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,ep=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,tp=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,np=_.input`
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
`,rp=_.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,ip=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,ap=_.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,op=_.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,sp=_.button`
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
`;function cp({places:e,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:u,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:_,onSearchMatches:y,readOnly:b=!1,onPick:x,onSelectionChange:S,onAddToTray:ee,onAddFavorite:C,onRemoveFavorite:te,favoritePaths:ie,onExtractArchive:T,settingsVersion:ae=0}){let D=I(),oe=Nn(),[O,se]=(0,E.useState)(!1),[k,ce]=(0,E.useState)(null),A=k?.overviewBanner??null,j=A?.startsWith(`builtin:`)??!1,le=A?.startsWith(`url:`)?A.slice(4):re(A)?A:null,M=j||le?``:A??``,ue=j?``:le?le.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:M.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,de=j?fu(A):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(ue),fe=mn(M.length>0?M:null,0,ue?`.${ue}`:``),F=A?du(A)??le??fe:null,[pe,me]=(0,E.useState)(``),[he,L]=(0,E.useState)(null),[ge,R]=(0,E.useState)(!1),[_e,z]=(0,E.useState)(null),[ve,B]=(0,E.useState)(null),[ye,be]=(0,E.useState)(null),[Se,Ce]=(0,E.useState)([]),[we,Te]=(0,E.useState)(null),[Ee,De]=(0,E.useState)(``),[Oe,ke]=(0,E.useState)(null),[je,H]=(0,E.useState)(null),Me=wc(`overview`),[Ne,Pe]=(0,E.useState)(null),[Fe,Ie]=(0,E.useState)(null),Le=(0,E.useRef)(null),Re=(0,E.useRef)(null),ze=(0,E.useRef)(null),Be=(0,E.useRef)(null),Ve=(0,E.useRef)(null),He=Fe??k?.overviewBannerHeight??220,[Ge,Ke]=(0,E.useState)(0),[qe,Je]=(0,E.useState)(null),Xe=Math.min(1,Math.max(0,k?.overviewBannerOffset??.3)),Ze=He+Bd,Qe=qe&&Ge>0?qe.height*(Ge/qe.width):Ze,$e=Qe>0&&Qe<Ze+240?(Ze+240)/Qe:1,et=Math.max(1,Math.round(Ge*$e)),tt=Math.max(0,Qe*$e-Ze),rt=Math.min(zd,tt/2,Math.max(20,He*.42)),it=rt+Xe*Math.max(0,tt-rt*2),[at,ot]=(0,E.useState)(!1),st=(e,t=!1)=>x?(ke(e),H({path:e,isDirectory:t}),S?.([e]),!0):!1,ct=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),ke(t),H({path:t,isDirectory:n}),Pe({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,E.useEffect)(()=>(_c(`overview`,je?(e,t)=>Pe({x:e,y:t,target:je}):null),()=>_c(`overview`,null)),[je]);let lt=(e,t)=>c(e,t);(0,E.useEffect)(()=>{Ye().then(ce,()=>ce(null))},[ae]),(0,E.useEffect)(()=>{if(N.available)return Td().then(Ce,()=>void 0),N.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Ce(t.data.peers)})},[]),(0,E.useEffect)(()=>{let e=ze.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,E.useEffect)(()=>{if(j&&!de){Je({width:1920,height:1080});return}Je(null);let e=Ve.current;e?.complete&&e.naturalWidth>0&&Je({width:e.naturalWidth,height:e.naturalHeight})},[A,j,de]),(0,E.useEffect)(()=>{let e=Be.current;if(!e)return;let t=()=>Ke(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[k?.overviewBanner]),(0,E.useEffect)(()=>{if(!he)return;let e=()=>L(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||L(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[he]),(0,E.useEffect)(()=>{if(!ge)return;let e=()=>R(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[ge]);let U=ys(k),ut=U.map(e=>e.id),dt=(0,E.useRef)(null),ft=e=>he?.kind===`panel`&&he.id===e,pt=e=>he?.kind===`place`&&he.id===e;(0,E.useEffect)(()=>{if(!N.available)return;let e=U.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return N.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>N.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[U.map(e=>e.path??e.id).join(`|`),a]),gd(dt,_??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let mt=async(e,t)=>{let n={...k?.placeIcons};t?n[e]=t:delete n[e],L(null),await W({placeIcons:n}),l(await Ae())},ht=async(e,t)=>{let n={...k?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],B(null),await W({placeNames:n}),l(await Ae())},_t=e=>{be(null),z({drive:e,label:e.label||`Local Disk`})},vt=async()=>{if(!_e)return;let{drive:e,label:t}=_e;z(null);let n=await xe(e.name,t.trim());n.ok?(be(null),h?.()):be(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},yt=k?.overviewColumns??1,W=async e=>{if(!k)return;let t={...k,...e,overviewPanels:e.overviewPanels??ut,overviewHidden:[]};ce(await nt(t)),p?.()},bt=async()=>{await W({overviewPanels:[...ms],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),l(await Ae()),se(!1)},xt=async()=>{let e=await fa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=k?.overviewBanners??[];await W({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},St=async()=>{let e=pe.trim();if(!k||!re(e))return;let t=k.overviewBanners??[];me(``),await W({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},Ct=()=>void W({overviewBanner:null}),wt=e=>void W({overviewBanners:(k?.overviewBanners??[]).filter(t=>t!==e),...k?.overviewBanner===e||k?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Tt=e=>{Le.current={y:e.clientY,height:He},e.currentTarget.setPointerCapture(e.pointerId)},Et=e=>{let t=Le.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Re.current=n,Ie(n)},Dt=e=>{Le.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Re.current!==null&&(W({overviewBannerHeight:Re.current}),Re.current=null)},Ot=(e,t)=>{let n=ut.indexOf(e),r=n+t;if(n<0||r<0||r>=ut.length)return;let i=[...ut];[i[n],i[r]]=[i[r],i[n]],W({overviewPanels:i})},kt=(e,t)=>{let n={...k?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],W({overviewTitles:n})},At=(e,t)=>void W({overviewViews:{...k?.overviewViews,[e]:t}}),jt=e=>{let t=k?.overviewPinned??U.filter(e=>e.pinned).map(e=>e.id);W({overviewPinned:U.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Mt=e=>{L(null);let t=t=>{let n={...t};return delete n[e],n},n=k?.overviewPinned??U.filter(e=>e.pinned).map(e=>e.id);W({overviewPanels:ut.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(k?.overviewTitles),overviewViews:t(k?.overviewViews),overviewIcons:t(k?.overviewIcons),panelPlaces:t(k?.panelPlaces)})},Nt=(e,t)=>{let n={...k?.overviewIcons};t?n[e]=t:delete n[e],L(null),W({overviewIcons:n})},Pt=async e=>{if(!k)return;if(e===`folder`){let e=await da();if(!e)return;let t=`folder:${e}`;ut.includes(t)||await W({overviewPanels:[...ut,t]});return}if(e===`quick`){let e=2;for(;ut.includes(`quick:${e}`);)e+=1;await W({overviewPanels:[...ut,`quick:${e}`]});return}let t=e;for(let n=2;ut.includes(t);n+=1)t=`${e}:${n}`;await W({overviewPanels:[...ut,t]})},G=async n=>{let r=await da();if(!r)return;if(n.id===`quick`){await W({quickAccess:[...new Set([...e.map(e=>e.path),r])]}),l(await Ae());return}let i=n.places??[];i.some(e=>t(e,r))||await W({panelPlaces:{...k?.panelPlaces,[n.id]:[...i,r]}})},Ft=async(n,r)=>{L(null),n.id===`quick`?(await W({quickAccess:e.filter(e=>!t(e.path,r)).map(e=>e.path)}),l(await Ae())):await W({panelPlaces:{...k?.panelPlaces,[n.id]:(n.places??[]).filter(e=>!t(e,r))}})},It=async(n,r,i)=>{if(t(r,i))return;let a=n.id===`quick`?e.map(e=>e.path):n.places??[],o=a.findIndex(e=>t(e,r)),s=a.findIndex(e=>t(e,i));if(o<0||s<0)return;let c=[...a],[u]=c.splice(o,1);c.splice(s,0,u),n.id===`quick`?(await W({quickAccess:c}),l(await Ae())):await W({panelPlaces:{...k?.panelPlaces,[n.id]:c}})},Lt=(e,t)=>({draggable:O,onDragOver:e=>{O&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{O&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{O&&(n.preventDefault(),It(e,n.dataTransfer.getData(`text/plain`),t))}}),Rt=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:k?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??k?.placeIcons?.[n]??null}}),zt=e=>{if(r.length===0)return(0,P.jsx)($f,{children:D(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,P.jsx)(jf,{children:t.map(e=>{let t=Pn(oe,e.path);return(0,P.jsxs)(Mf,{$plain:!1,$selected:Oe===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Ut(t)):V(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,children:[(0,P.jsx)(Nf,{children:t&&oe.useIcons?(0,P.jsx)(Ss,{place:t,size:18}):(0,P.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(Pf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Ff,{children:e.path})]})]},e.path)})}):(0,P.jsx)(If,{children:t.map(e=>{let t=Pn(oe,e.path);return(0,P.jsxs)(Lf,{$selected:Oe===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Ut(t)):V(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&oe.useIcons?(0,P.jsx)(Ss,{place:t,size:15}):(0,P.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,P.jsxs)(Rf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Ff,{children:e.path})]})]},e.path)})})},Vt=e=>{let n=k?.favorites??[],r=async e=>{await W({favorites:n.filter(t=>t.path!==e)})},i=async(e,r)=>{e&&!n.some(n=>t(n.path,e))&&await W({favorites:[...n,{path:e,name:v(e)||e,isDirectory:r}]})},a=(e,t,n)=>{O||st(t,n)||(n?c(t,Ut(e)):V(t))},o=O?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(zf,{$row:e.view===`list`,onClick:()=>void fa().then(e=>i(e,!1)),title:D(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,P.jsx)(ai,{size:15}):(0,P.jsx)(Nf,{children:(0,P.jsx)(ai,{size:15})}),e.view===`list`?(0,P.jsxs)(Rf,{children:[(0,P.jsx)(`strong`,{children:D(`Add file`)}),(0,P.jsx)(Ff,{children:D(`Pin any file here`)})]}):(0,P.jsxs)(Pf,{children:[(0,P.jsx)(`strong`,{children:D(`Add file`)}),(0,P.jsx)(Ff,{children:D(`Pin any file here`)})]})]}),(0,P.jsxs)(zf,{$row:e.view===`list`,onClick:()=>void da().then(e=>i(e,!0)),title:D(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,P.jsx)(ai,{size:15}):(0,P.jsx)(Nf,{children:(0,P.jsx)(ai,{size:15})}),e.view===`list`?(0,P.jsxs)(Rf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Ff,{children:D(`Pin any folder here`)})]}):(0,P.jsxs)(Pf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Ff,{children:D(`Pin any folder here`)})]})]})]}):null;return n.length===0&&!O?(0,P.jsx)($f,{children:D(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,P.jsxs)(jf,{children:[n.map(e=>{let t=Pn(oe,e.path);return(0,P.jsxs)(Mf,{$plain:O,$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&x?.(e.path),onContextMenu:t=>!O&&ct(t,e.path,e.isDirectory),title:e.path,children:[O&&(0,P.jsx)(Jf,{onClick:t=>{t.stopPropagation(),r(e.path)},title:D(`Remove from favorites`),type:`button`,children:(0,P.jsx)(_i,{size:11})}),(0,P.jsx)(Nf,{children:t&&oe.useIcons?(0,P.jsx)(Ss,{place:t,size:18}):(0,P.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(Pf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Ff,{children:e.path})]})]},e.path)}),o]}):(0,P.jsxs)(If,{children:[n.map(e=>{let t=Pn(oe,e.path);return(0,P.jsxs)(Lf,{$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&x?.(e.path),onContextMenu:t=>!O&&ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&oe.useIcons?(0,P.jsx)(Ss,{place:t,size:15}):(0,P.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,P.jsxs)(Rf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Ff,{children:e.path})]}),O&&(0,P.jsx)(Jf,{$inline:!0,onClick:t=>{t.stopPropagation(),r(e.path)},title:D(`Remove from favorites`),type:`button`,children:(0,P.jsx)(_i,{size:11})})]},e.path)}),o]})},Ht=e=>{if(n.length===0)return(0,P.jsx)($f,{children:D(`No drives are available.`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=_e?.drive.name===t.name,i=r?(0,P.jsx)(lp,{maxLength:32,onCancel:()=>z(null),onChange:e=>z({..._e,label:e}),onCommit:()=>void vt(),value:_e?.label??``}):(0,P.jsx)(P.Fragment,{children:d(t)}),a=!r&&O&&(0,P.jsx)(Yf,{onClick:e=>{e.stopPropagation(),_t(t)},title:D(`Rename volume`),type:`button`,children:(0,P.jsx)(Pi,{size:11})}),o=(0,P.jsx)(Ff,{children:D(`{free} free of {total}`,{free:f(t.freeSpace),total:f(t.totalSize)})});return e.view===`grid`?(0,P.jsxs)(Mf,{$plain:!1,$selected:Oe===t.name,onClick:e=>{!r&&st(t.name,!0)||r||c(t.name,Ut(e))},onDoubleClick:()=>!r&&x?.(t.name),onContextMenu:e=>!r&&ct(e,t.name,!0),title:t.name,children:[(0,P.jsx)(Nf,{children:(0,P.jsx)(ti,{size:18})}),(0,P.jsxs)(Pf,{children:[(0,P.jsxs)(`strong`,{children:[i,r&&ne(t),a]}),o]})]},t.name):(0,P.jsxs)(Lf,{as:r?`div`:`button`,$selected:Oe===t.name,onClick:r?void 0:e=>{st(t.name,!0)||c(t.name,Ut(e))},onDoubleClick:r?void 0:()=>x?.(t.name),onContextMenu:r?void 0:e=>ct(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,P.jsx)(ti,{size:18}),(0,P.jsxs)(Rf,{children:[(0,P.jsxs)(`strong`,{children:[i,r&&ne(t),a]}),o]}),(0,P.jsx)(Bf,{children:(0,P.jsx)(Vf,{$used:n,$tone:w(n)})})]},t.name)});return e.view===`grid`?(0,P.jsx)(jf,{children:t}):(0,P.jsx)(If,{children:t})},Wt=()=>{let e=async e=>{Te(e.id);try{await Ed(e.host,e.port)}finally{Te(null)}},t=async()=>{let e=Ee.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Te(`manual`);try{await Ed(n,r)}finally{Te(null)}}};return(0,P.jsxs)(ep,{children:[(0,P.jsxs)(tp,{children:[(0,P.jsx)(np,{onChange:e=>De(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:D(`Address, e.g. 192.168.1.20:45701`),value:Ee}),(0,P.jsx)(sp,{disabled:we!==null||!Ee.includes(`:`),onClick:()=>void t(),type:`button`,children:D(we===`manual`?`Pairing…`:`Pair by address`)})]}),Se.length===0&&(0,P.jsx)($f,{children:D(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),Se.map(t=>(0,P.jsxs)(rp,{children:[(0,P.jsxs)(ip,{children:[(0,P.jsx)(Ji,{size:14}),(0,P.jsx)(ap,{title:t.host,children:t.name}),(0,P.jsx)(op,{$online:t.online,children:t.paired?t.online?D(`Paired`):D(`Offline`):D(`Not paired`)}),!t.paired&&t.online&&(0,P.jsx)(sp,{disabled:we===t.id,onClick:()=>void e(t),type:`button`,children:we===t.id?D(`Pairing…`):D(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,P.jsx)(Ff,{children:D(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,P.jsxs)(Lf,{onClick:n=>c(Md(t.id,e.id),Ut(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,P.jsx)(Ji,{size:14}),(0,P.jsxs)(Rf,{children:[(0,P.jsx)(`strong`,{children:e.name}),(0,P.jsx)(Ff,{children:t.name})]}),(0,P.jsx)(Xi,{size:12})]},e.id))]},t.id))]})},Gt=e=>{switch(e.kind){case`share`:return Wt();case`favorites`:return Vt(e);case`quick`:{let t=Rt(e);return!O&&t.length===0?(0,P.jsx)($f,{children:D(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,P.jsxs)(jf,{children:[t.map(t=>(0,P.jsxs)(Mf,{$plain:O,$selected:Oe===t.path,...Lt(e,t.path),onClick:e=>{!O&&!st(t.path,!0)&&c(t.path,Ut(e))},onDoubleClick:()=>!O&&x?.(t.path),onContextMenu:e=>!O&&ct(e,t.path,!0),title:t.path,children:[O&&(0,P.jsx)(Jf,{onClick:n=>{n.stopPropagation(),Ft(e,t.path)},title:D(`Remove from Quick access`),type:`button`,children:(0,P.jsx)(_i,{size:11})}),(0,P.jsxs)(Kf,{children:[O?(0,P.jsx)(qf,{onClick:e=>{e.stopPropagation(),L(pt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,P.jsx)(Nf,{children:(0,P.jsx)(Ss,{place:t})})}):(0,P.jsx)(Nf,{children:(0,P.jsx)(Ss,{place:t})}),pt(t.path)&&(0,P.jsx)(_d,{onPick:e=>void mt(t.path,e),value:k?.placeIcons?.[t.path]??t.icon})]}),(0,P.jsxs)(Pf,{children:[ve?.path===t.path?(0,P.jsx)(`strong`,{children:(0,P.jsx)(lp,{onCancel:()=>B(null),onChange:e=>B({path:t.path,name:e}),onCommit:()=>void ht(t.path,ve?.name??``),value:ve?.name??``})}):(0,P.jsxs)(`strong`,{children:[t.name,O&&(0,P.jsx)(Yf,{onClick:e=>{e.stopPropagation(),L(null),B({path:t.path,name:t.name})},title:D(`Rename folder`),type:`button`,children:(0,P.jsx)(Pi,{size:11})})]}),(0,P.jsx)(Ff,{children:t.path})]})]},t.path)),O&&(0,P.jsxs)(zf,{onClick:()=>void G(e),title:D(`Pin a folder here`),type:`button`,children:[(0,P.jsx)(Nf,{children:(0,P.jsx)(ai,{size:15})}),(0,P.jsxs)(Pf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Ff,{children:D(`Pin a directory here`)})]})]})]}):(0,P.jsxs)(If,{children:[t.map(t=>(0,P.jsxs)(Lf,{$selected:Oe===t.path,...Lt(e,t.path),onClick:e=>{!O&&!st(t.path,!0)&&c(t.path,Ut(e))},onDoubleClick:()=>!O&&x?.(t.path),onContextMenu:e=>!O&&ct(e,t.path,!0),title:t.path,type:`button`,children:[(0,P.jsxs)(Kf,{children:[O?(0,P.jsx)(qf,{onClick:e=>{e.stopPropagation(),L(pt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,P.jsx)(Ss,{place:t,size:15})}):(0,P.jsx)(Ss,{place:t,size:15}),pt(t.path)&&(0,P.jsx)(_d,{onPick:e=>void mt(t.path,e),value:k?.placeIcons?.[t.path]??t.icon})]}),(0,P.jsxs)(Rf,{children:[ve?.path===t.path?(0,P.jsx)(`strong`,{children:(0,P.jsx)(lp,{onCancel:()=>B(null),onChange:e=>B({path:t.path,name:e}),onCommit:()=>void ht(t.path,ve?.name??``),value:ve?.name??``})}):(0,P.jsxs)(`strong`,{children:[t.name,O&&(0,P.jsx)(Yf,{onClick:e=>{e.stopPropagation(),L(null),B({path:t.path,name:t.name})},title:D(`Rename folder`),type:`button`,children:(0,P.jsx)(Pi,{size:11})})]}),(0,P.jsx)(Ff,{children:t.path})]}),O&&(0,P.jsx)(Jf,{$inline:!0,onClick:n=>{n.stopPropagation(),Ft(e,t.path)},title:D(`Remove from Quick access`),type:`button`,children:(0,P.jsx)(_i,{size:11})})]},t.path)),O&&(0,P.jsxs)(zf,{$row:!0,onClick:()=>void G(e),title:D(`Pin a folder here`),type:`button`,children:[(0,P.jsx)(ai,{size:15}),(0,P.jsxs)(Rf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Ff,{children:D(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,P.jsx)(up,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:x,onSelectionChange:S,version:s});case`recent`:return zt(e);case`drives`:return Ht(e);default:return(0,P.jsx)(dp,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:x,onSelectionChange:S,openOnSingleClick:k?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:k?.showCheckboxes??!0,visibilityVersion:g})}};return(0,P.jsxs)(Vd,{$flush:!!k?.overviewBanner,ref:ze,children:[!b&&(0,P.jsxs)(gf,{$overlay:!!k?.overviewBanner,children:[(0,P.jsx)(_f,{role:`group`,title:D(`Columns`),children:[1,2,3,4,5].map(e=>(0,P.jsx)(vf,{$active:yt===e,onClick:()=>void W({overviewColumns:e}),title:o(D,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),O&&(0,P.jsxs)(bf,{children:[(0,P.jsxs)(yf,{onClick:()=>R(e=>!e),onPointerDown:e=>e.stopPropagation(),title:D(`Add a panel`),type:`button`,children:[(0,P.jsx)(ai,{size:12}),D(`Add panel ▾`)]}),ge&&(0,P.jsx)(xf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,P.jsx)(Sf,{onClick:()=>{R(!1),Pt(e)},type:`button`,children:D(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),O&&(0,P.jsxs)(yf,{onClick:()=>void bt(),title:D(`Put every panel back the way the app ships it`),type:`button`,children:[(0,P.jsx)(ii,{size:12}),D(`Restore default panels`)]}),Me.available&&(0,P.jsx)(Af,{onClick:e=>Me.open(e.clientX,e.clientY),title:D(`Selection menu`),type:`button`,children:(0,P.jsx)(sa,{size:14})}),(0,P.jsxs)(yf,{onClick:()=>{se(e=>!e),R(!1),L(null),B(null),z(null)},title:D(O?`Done`:`Edit`),type:`button`,children:[O?(0,P.jsx)(gi,{size:13}):(0,P.jsx)(Pi,{size:13}),D(O?`Done`:`Edit`)]})]}),ye&&(0,P.jsx)(Qf,{children:ye}),k?.overviewBanner&&(0,P.jsxs)(Hd,{ref:Be,style:{height:`${He}px`,"--banner-image-width":`${et}px`,"--banner-image-shift":`${it}px`,"--banner-travel":`${rt}px`,"--banner-overlap":`0px`},children:[(0,P.jsx)(Ud,{children:de?(0,P.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Je({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:F??void 0}):(0,P.jsx)(`img`,{alt:``,onLoad:e=>{let t=j?1920:e.currentTarget.naturalWidth||1920,n=j?1080:e.currentTarget.naturalHeight||1080;Je({width:t,height:n})},ref:Ve,src:F??void 0})}),O&&(0,P.jsx)(Wd,{onDoubleClick:()=>{Re.current=null,Ie(null),W({overviewBannerHeight:220})},onPointerCancel:Dt,onPointerDown:Tt,onPointerMove:Et,onPointerUp:Dt,title:D(`Drag to resize; double-click to reset`)})]}),(0,P.jsxs)(Gd,{$offset:k?.overviewBanner?100:0,children:[O&&(0,P.jsxs)(Kd,{children:[(0,P.jsxs)(qd,{children:[(0,P.jsx)(Jd,{children:D(`Banners`)}),k?.overviewBanner&&(0,P.jsxs)(yf,{onClick:()=>ot(!0),title:D(`Adjust framing…`),type:`button`,children:[(0,P.jsx)(Pi,{size:12}),D(`Adjust framing…`)]})]}),(0,P.jsxs)(Yd,{children:[(0,P.jsx)($d,{children:(0,P.jsx)(ef,{$active:!k?.overviewBanner,onClick:Ct,title:D(`No banner`),type:`button`,children:(0,P.jsxs)(rf,{children:[(0,P.jsx)(_i,{size:16}),(0,P.jsx)(`span`,{children:D(`No banner`)})]})})}),cu.map(e=>(0,P.jsx)($d,{children:(0,P.jsx)(ef,{$active:k?.overviewBanner===e.id,onClick:()=>void W({overviewBanner:e.id}),title:`${D(e.concept)} · ${D(e.preset)}`,type:`button`,children:(0,P.jsx)(Id,{poster:e.url,source:e.id})})},e.id)),ou.map(e=>(0,P.jsx)($d,{children:(0,P.jsxs)(ef,{$active:k?.overviewBanner===e.id,onClick:()=>void W({overviewBanner:e.id}),title:D(e.name),type:`button`,children:[(0,P.jsx)(Id,{poster:e.poster,source:e.id}),(0,P.jsx)(nf,{children:(0,P.jsx)(Si,{size:11})})]})},e.id)),(k?.overviewBanners??[]).map(e=>(0,P.jsxs)($d,{children:[(0,P.jsx)(ef,{$active:k?.overviewBanner===e||k?.overviewBanner===`url:${e}`,onClick:()=>void W({overviewBanner:re(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,P.jsx)(Id,{source:e})}),(0,P.jsx)(tf,{onClick:()=>wt(e),title:D(`Remove`),type:`button`,children:(0,P.jsx)(_i,{size:10})})]},e)),(0,P.jsxs)(hf,{onClick:()=>void xt(),title:D(`Add banner…`),type:`button`,children:[(0,P.jsx)(ai,{size:18}),(0,P.jsx)(`span`,{children:D(`Add banner…`)})]})]}),(0,P.jsxs)(Xd,{children:[(0,P.jsx)(Zd,{onChange:e=>me(e.target.value),onKeyDown:e=>{e.key===`Enter`&&St()},placeholder:`https://…`,value:pe}),(0,P.jsx)(Qd,{disabled:!re(pe),onClick:()=>void St(),type:`button`,children:D(`Add URL`)})]})]}),(0,P.jsx)(Cf,{ref:dt,$columns:yt,children:U.map(e=>{let t=ut.indexOf(e.id);return(0,P.jsxs)(wf,{children:[(0,P.jsxs)(Tf,{children:[(0,P.jsxs)(Ef,{children:[(0,P.jsxs)(Kf,{children:[O?(0,P.jsx)(qf,{onClick:()=>L(ft(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,P.jsx)(xs,{panel:e,size:15})}):(0,P.jsx)(xs,{panel:e,size:15}),ft(e.id)&&(0,P.jsx)(_d,{onPick:t=>Nt(e.id,t),value:e.icon})]}),O?(0,P.jsx)(kf,{defaultValue:e.title,onBlur:t=>kt(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,P.jsx)(Of,{children:D(e.title)})]}),(0,P.jsxs)(Df,{children:[!O&&e.kind===`recent`&&(0,P.jsx)(yf,{onClick:()=>void Ue().then(u),title:D(`Clear`),type:`button`,children:D(`Clear`)}),!O&&e.kind===`frequent`&&(0,P.jsx)(yf,{onClick:()=>void We().then(()=>m?.()),title:D(`Clear the frequent list`),type:`button`,children:D(`Clear`)}),!O&&(e.kind===`home`||e.kind===`folder`)&&(0,P.jsx)(yf,{onClick:()=>c(e.path??a),title:D(`Open folder`),type:`button`,children:D(`Open`)}),O&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Af,{$active:e.pinned,onClick:()=>jt(e.id),title:e.pinned?D(`Unpin from the sidebar`):D(`Pin to the sidebar`),type:`button`,children:(0,P.jsx)(ui,{size:12})}),(0,P.jsx)(Af,{$active:e.view===`list`,onClick:()=>At(e.id,`list`),title:D(`List`),type:`button`,children:(0,P.jsx)(di,{size:13})}),(0,P.jsx)(Af,{$active:e.view===`grid`,onClick:()=>At(e.id,`grid`),title:D(`Grid`),type:`button`,children:(0,P.jsx)(fi,{size:13})}),(0,P.jsx)(Af,{disabled:t===0,onClick:()=>Ot(e.id,-1),title:D(`Move up`),type:`button`,children:(0,P.jsx)(ri,{size:12})}),(0,P.jsx)(Af,{disabled:t===ut.length-1,onClick:()=>Ot(e.id,1),title:D(`Move down`),type:`button`,children:(0,P.jsx)(ri,{size:12})}),(0,P.jsx)(Af,{onClick:()=>Mt(e.id),title:D(`Remove panel`),type:`button`,children:(0,P.jsx)(_i,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Gt(e):(0,P.jsx)(Uf,{children:Gt(e)})]},e.id)})})]}),at&&F&&(0,P.jsx)(Ld,{height:He,offset:Xe,onCancel:()=>ot(!1),onSave:e=>{W({overviewBannerOffset:e}),ot(!1)},source:F,video:de}),Ne&&(0,P.jsx)(ro,{directory:a,menu:{x:Ne.x,y:Ne.y,paths:[Ne.target.path]},onClose:()=>Pe(null),onCopy:(e,t)=>void gt(e,t),onAddToTray:ee,onAddFavorite:C,onRemoveFavorite:te,favoritePaths:ie,onExtractArchive:T,onOpen:lt,onOpenFile:e=>x?x(e):void V(e),shortcuts:Bt,target:Ne.target})]})}function lp({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=I();return(0,P.jsxs)(Xf,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,P.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,P.jsx)(Zf,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,P.jsx)(_i,{size:11})}),(0,P.jsx)(Zf,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,P.jsx)(gi,{size:12})})]})}function up({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=I(),[c,l]=(0,E.useState)(null),[u,d]=(0,E.useState)(null),f=Nn(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,E.useEffect)(()=>{Ve().then(l,()=>l([]))},[a]),!c)return(0,P.jsx)($f,{children:s(`Reading…`)});if(c.length===0)return(0,P.jsx)($f,{children:s(`Folders you open often show up here.`)});let m=e=>o(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,P.jsx)(jf,{children:c.map(e=>{let i=Pn(f,e.path);return(0,P.jsxs)(Mf,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Ut(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,P.jsx)(Nf,{children:i&&f.useIcons?(0,P.jsx)(Ss,{place:i,size:18}):(0,P.jsx)(Bs,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(Pf,{children:[(0,P.jsx)(`strong`,{children:i?.name||e.name}),(0,P.jsx)(Ff,{children:m(e)})]})]},e.path)})}):(0,P.jsx)(If,{children:c.map(e=>{let i=Pn(f,e.path);return(0,P.jsxs)(Lf,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Ut(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,P.jsx)(Ss,{place:i,size:15}):(0,P.jsx)(Bs,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,P.jsxs)(Rf,{children:[(0,P.jsx)(`strong`,{children:i?.name||e.name}),(0,P.jsx)(Ff,{children:m(e)})]})]},e.path)})})}function dp({path:e,mode:n,onOpen:r,onContextMenu:i,onPick:a,onSelectionChange:o,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:l,visibilityVersion:u}){let d=I(),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=Nn();return(0,E.useEffect)(()=>{e&&(p(null),Se(e).then(p,()=>p(null)))},[e,u]),(0,E.useEffect)(()=>{if(N.available)return N.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Se(e,!1).then(p,()=>void 0)})},[e]),f?n===`list`?(0,P.jsx)(Hf,{children:(0,P.jsx)(Ic,{error:null,listing:f,loading:!1,onOpen:a??r,onOpenFile:a??(e=>void V(e)),onRefresh:()=>void Se(e,!1).then(p,()=>void 0),onRename:(e,n)=>p(r=>r&&{...r,entries:r.entries.map(r=>t(r.fullPath,e)?{...r,name:v(n),fullPath:n}:r)}),onSelectionChange:o,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:l,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...ye,columns:be.columns??[]}})}):(0,P.jsx)(Uf,{children:f.entries.length===0?(0,P.jsx)($f,{children:d(`This folder is empty.`)}):(0,P.jsx)(Wf,{children:f.entries.map(e=>{let t=Pn(g,e.fullPath);return(0,P.jsxs)(Gf,{$selected:m===e.fullPath,onClick:t=>{a?(h(e.fullPath),o?.([e.fullPath])):e.isDirectory?r(e.fullPath,Ut(t)):V(e.fullPath)},onDoubleClick:()=>a?.(e.fullPath),onContextMenu:t=>i?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&g.useIcons?(0,P.jsx)(Ss,{place:t,size:16}):(0,P.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,P.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,P.jsx)($f,{children:d(`Reading…`)})}var fp=`yafm://`,pp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function mp(e){return e.toLowerCase().startsWith(fp)}function hp(e){return`${fp}${e===`home`?`overview`:e}`}function gp(e){return mp(e)?pp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function _p(e){let t=e.trim();if(t.length===0)return null;if(!mp(t))return t;let n=pp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?hp(n):null}function vp({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=I(),s=Nn(),[c,l]=(0,E.useState)(!1),[u,d]=(0,E.useState)(``),[f,p]=(0,E.useState)([]),[m,h]=(0,E.useState)(0),[g,_]=(0,E.useState)(null),[v,y]=(0,E.useState)(null),b=(0,E.useRef)(null),x=(0,E.useRef)(null),S=(0,E.useRef)(0);(0,E.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,E.useEffect)(()=>{r&&r!==S.current&&(S.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,E.useEffect)(()=>{c&&b.current?.select()},[c]),(0,E.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let ee=()=>{d(e.replace(/\\/g,`/`)),l(!0)},C=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,E.useEffect)(()=>{if(!c){p([]);return}let e=xp(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{Se(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let te=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,E.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=x.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,P.jsxs)(Dp,{onPointerDown:e=>e.stopPropagation(),ref:x,children:[(0,P.jsxs)(jp,{children:[(0,P.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?te(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):C(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:b,spellCheck:!1,value:u}),(0,P.jsx)(Mp,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,P.jsx)(_i,{size:12})}),(0,P.jsx)(Mp,{$apply:!0,onClick:C,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,P.jsx)(gi,{size:14})})]}),f.length>0&&g&&(0,Oa.createPortal)((0,P.jsx)(Op,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,P.jsxs)(kp,{$active:t===m,onClick:t=>te(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,P.jsx)(Bs,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,P.jsx)(Ap,{children:e.name})]},e.path))}),document.body)]});let ne=t?[{label:t,path:e,icon:n}]:bp(e,s.places);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Sp,{onClick:ee,title:o(`Click to type a path`),children:ne.map((t,n)=>(0,P.jsxs)(Cp,{$last:n===ne.length-1,children:[n>0&&(0,P.jsx)(Tp,{children:(0,P.jsx)(ci,{size:9})}),(0,P.jsxs)(Ep,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,P.jsx)(wp,{children:(0,P.jsx)(Ss,{place:t.place,size:13})}):t.icon&&(0,P.jsx)(wp,{children:t.icon}),t.label]})]},t.path))}),v&&(0,P.jsx)(Ga,{items:[{label:o(`Open`),icon:(0,P.jsx)(si,{size:14}),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),icon:(0,P.jsx)(ai,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`Copy as path`),icon:(0,P.jsx)(ea,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...mp(v.path)?[{label:o(`Open with…`),icon:(0,P.jsx)(Ei,{size:14}),onSelect:()=>void kt(v.path)},{label:o(`Properties`),icon:(0,P.jsx)(li,{size:14}),onSelect:()=>void Ot([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function yp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function bp(e,n){let r=yp(e),i=-1,a=null;for(let e of Object.values(n)){if(e.name.trim().length===0)continue;let n=r.findIndex(n=>t(n.path,e.path));n>i&&(i=n,a=e)}return a&&i>=0&&r.splice(0,i+1,{label:a.name,path:r[i].path,place:a}),r}function xp(e){if(mp(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Sp=_.div`
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
`,Cp=_.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,wp=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Tp=_.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Ep=_.button`
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
`,Dp=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Op=_.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${ka}
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
`,kp=_.button`
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
`,Ap=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,jp=_.div`
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
`,Mp=_.button`
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
`,Np=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,P.jsx)(`path`,{d:`M4 4v6h6`})]});function Pp({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:a=!1,videoAutoplay:s=!1,platform:c}){let l=I(),u=Sc(`recycle`),d=c===`windows`,[p,m]=(0,E.useState)([]),[h,g]=(0,E.useState)([]),[_,v]=(0,E.useState)(!1),[b,x]=(0,E.useState)(null),[S,ee]=(0,E.useState)(!0),[C,te]=(0,E.useState)(!1),[ne,re]=(0,E.useState)(null),[w,ie]=(0,E.useState)(!1),[T,ae]=(0,E.useState)(()=>new Set),[D,oe]=(0,E.useState)(null),[O,se]=(0,E.useState)(()=>{let e=Rn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[k,ce]=(0,E.useState)(null),[A,j]=(0,E.useState)(null),[le,M]=(0,E.useState)(()=>{let e=In(`yafm.recycle.preview.width`,320);return e>=220?e:320}),N=(0,E.useRef)(null),ue=e=>{M(e),Ln(`yafm.recycle.preview.width`,e)},de=(0,E.useCallback)(async()=>{ee(!0),re(null);try{m(await H(w))}catch(e){re(e instanceof Error?e.message:String(e))}finally{ee(!1)}},[w]),fe=(0,E.useCallback)(async()=>{try{m(await H(w))}catch{}},[w]);(0,E.useEffect)(()=>{de()},[de]),(0,E.useEffect)(()=>{let e=window.setInterval(()=>void fe(),1e4);return()=>window.clearInterval(e)},[fe]),(0,E.useEffect)(()=>{w||(g([]),v(!1),x(null))},[w]),(0,E.useEffect)(()=>{ae(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let F=(0,E.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Fp(e,t,O.column);return O.descending?-n:n})},[p,h,O]),pe=(0,E.useMemo)(()=>!t?.open||t.query.trim().length===0?F:F.filter(e=>Tn(e.name,t)||Tn(e.originalPath,t)),[F,t?.open,t?.query,t?.matchCase,t?.regex]),me=(0,E.useRef)(null);gd(me,t??null,`[data-search-block]`,n??(()=>void 0),[F]),(0,E.useEffect)(()=>{ae(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let he=(0,E.useMemo)(()=>F.filter(e=>T.has(e.id)),[F,T]),L=he.filter(e=>e.removable&&!e.isOrphan),ge=he.filter(e=>e.removable),R=(e,t)=>{let n=t.ctrlKey||t.metaKey;ae(r=>{if(t.shiftKey&&D){let t=F.findIndex(e=>e.id===D),i=F.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(F[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),oe(e.id)},_e=(0,E.useCallback)(()=>ae(new Set(pe.map(e=>e.id))),[pe]),z=pe.length>0&&pe.every(e=>T.has(e.id)),ve=(0,E.useCallback)(async()=>{let e=L.map(e=>e.id);if(e.length!==0){te(!0);try{let t=await Pe(e);t.ok||await ga(o(l,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),ae(new Set),await de()}finally{te(!1)}}},[de,L,l]),B=(0,E.useCallback)(async()=>{let e=ge.map(e=>e.id);if(j(null),e.length!==0){te(!0);try{let t=await Fe(e);!t.ok&&!t.cancelled&&await ga(o(l,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),ae(new Set),await de()}finally{te(!1)}}},[ge,de,l]),ye=async()=>{j(null),te(!0);try{await Ne(w),ae(new Set),await de()}finally{te(!1)}},be=async()=>{te(!0),x(null);try{let e=await Le();if(e.cancelled){x(`Elevation was declined — nothing was read.`);return}if(e.failed){x(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),v(!0)}finally{te(!1)}},xe=async()=>{te(!0),j(null);try{await Re(),g([]),v(!1),x(null),await de()}finally{te(!1)}},V=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},Se=e=>{navigator.clipboard.writeText(e.originalPath)},Ce=(e,t)=>{e.preventDefault(),t&&!T.has(t.id)&&ae(new Set([t.id])),ce({x:e.clientX,y:e.clientY})};(0,E.useEffect)(()=>(_c(`recycle`,T.size>0?(e,t)=>ce({x:e,y:t}):null),()=>_c(`recycle`,null)),[T]),(0,E.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),_e()):e.key===`Delete`?(e.preventDefault(),ge.length>0&&j(`delete`)):e.key===`Enter`&&L.length>0?(e.preventDefault(),ve()):e.key===`Escape`&&(ae(new Set),ce(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[ge.length,L.length,ve,_e]);let we=[{label:l(`Restore`),icon:(0,P.jsx)(Np,{width:14,height:14}),disabled:L.length===0,onSelect:()=>void ve()},{label:l(`Delete permanently`),icon:(0,P.jsx)(hi,{size:14}),danger:!0,disabled:ge.length===0,onSelect:()=>j(`delete`)},{label:l(`Properties`),icon:(0,P.jsx)(li,{size:14}),disabled:he.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=he;e&&Ie(e.id)}},{label:l(`Open original location`),icon:(0,P.jsx)($r,{size:14}),disabled:he.length!==1,onSelect:()=>{let[e]=he;e&&V(e)}},{label:l(`Copy original path`),icon:(0,P.jsx)(ea,{size:14}),disabled:he.length!==1,onSelect:()=>{let[e]=he;e&&Se(e)}},{label:l(`Select all`),separatorBefore:!0,onSelect:_e},{label:l(`Refresh`),icon:(0,P.jsx)(ii,{size:14}),onSelect:()=>void de()}],Te=he.length>0?he[0]:null,Ee=Te?{name:Te.name,path:Te.contentPath||Te.originalPath,isDirectory:Te.isDirectory,size:Te.size,modified:Te.deleted,fields:[{label:l(`Type`),value:l(Lp(Te))},{label:l(`Original location`),value:Te.originalPath},{label:l(`Date deleted`),value:y(Te.deleted)},{label:l(`Size`),value:Te.isDirectory?`—`:f(Te.size)},...Te.owner?[{label:l(`Owner`),value:Te.owner}]:[],{label:l(`Status`),value:Te.isOrphan?l(`Metadata only`):Te.removable?l(`Restorable`):l(`Other profile`)}]}:null;return(0,P.jsxs)(zp,{ref:N,onContextMenu:e=>Ce(e),children:[(0,P.jsxs)(Bp,{children:[(0,P.jsxs)(Vp,{children:[(0,P.jsx)(hi,{size:16}),(0,P.jsx)(`span`,{children:l(`Recycle Bin`)}),(0,P.jsxs)(Hp,{children:[S?`…`:o(l,F.length,`1 item`,`{count} items`),T.size>0&&` · ${l(`{count} selected`,{count:T.size})}`]})]}),(0,P.jsxs)(Up,{children:[(0,P.jsx)(Gp,{$on:w,onClick:()=>ie(e=>!e),title:l(`Show metadata records whose content is already gone`),type:`button`,children:l(`Orphans`)}),w&&d&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Wp,{disabled:C||_,onClick:()=>void be(),title:l(_?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:l(C?`Working…`:_?`Admin view loaded`:`Show all (admin)…`)}),_&&h.length>0&&(0,P.jsx)(Wp,{disabled:C,onClick:()=>j(`purge`),type:`button`,children:l(`Delete every orphan`)})]}),(0,P.jsx)(Wp,{disabled:C||L.length===0,onClick:()=>void ve(),type:`button`,children:l(`Restore`)}),(0,P.jsx)(Wp,{$danger:!0,disabled:C||ge.length===0,onClick:()=>j(`delete`),type:`button`,children:l(`Delete`)}),(0,P.jsx)(Wp,{disabled:C||F.length===0,onClick:()=>j(`empty`),type:`button`,children:l(`Empty`)}),(0,P.jsx)(Kp,{onClick:()=>void de(),title:l(`Refresh`),type:`button`,children:(0,P.jsx)(ii,{size:14})}),u.available&&(0,P.jsx)(Kp,{onClick:e=>u.open(e.clientX,e.clientY),title:l(`Selection menu`),type:`button`,children:(0,P.jsx)(sa,{size:14})})]})]}),b&&(0,P.jsx)(pm,{children:b}),ne&&(0,P.jsx)(mm,{children:ne}),!ne&&!S&&(t?.open&&t.query.trim().length>0?pe.length===0:F.length===0)&&(0,P.jsx)(mm,{children:t?.open&&t.query.trim().length>0?l(`No matching items.`):l(`The recycle bin is empty.`)}),F.length>0&&(0,P.jsxs)(fm,{children:[(0,P.jsxs)(qp,{ref:me,children:[(0,P.jsxs)(Yp,{children:[(0,P.jsx)(tm,{$checked:z,$partial:!z&&T.size>0,onClick:()=>z?ae(new Set):_e(),title:l(z?`Select none`:`Select all`),type:`button`,children:z?(0,P.jsx)(gi,{size:9}):T.size>0&&(0,P.jsx)(nm,{})}),(0,P.jsxs)(Xp,{onClick:()=>De(`name`),type:`button`,children:[l(`Name`),Ip(O,`name`)]}),(0,P.jsxs)(Xp,{onClick:()=>De(`original`),type:`button`,children:[l(`Original location`),Ip(O,`original`)]}),(0,P.jsxs)(Xp,{onClick:()=>De(`deleted`),type:`button`,children:[l(`Date deleted`),Ip(O,`deleted`)]}),(0,P.jsxs)(Xp,{onClick:()=>De(`size`),type:`button`,children:[l(`Size`),Ip(O,`size`)]}),(0,P.jsxs)(Xp,{onClick:()=>De(`type`),type:`button`,children:[l(`Type`),Ip(O,`type`)]}),(0,P.jsx)(`span`,{})]}),(0,P.jsx)(Zp,{onClick:e=>{e.target===e.currentTarget&&ae(new Set)},children:F.map(e=>(0,P.jsxs)(Qp,{$checked:T.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>R(e,t),onContextMenu:t=>Ce(t,e),onDoubleClick:()=>{ae(new Set([e.id])),oe(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,P.jsx)(em,{$checked:T.has(e.id),children:T.has(e.id)&&(0,P.jsx)(gi,{size:9})}),(0,P.jsxs)(rm,{children:[(0,P.jsx)(Rp,{entry:e}),(0,P.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,P.jsx)(dm,{children:l(`Metadata only`)}),e.owner&&(0,P.jsx)(dm,{$other:!0,children:l(`Other profile`)})]}),(0,P.jsx)(am,{children:e.originalPath}),(0,P.jsx)(om,{children:y(e.deleted)}),(0,P.jsx)(sm,{children:e.isDirectory?`—`:f(e.size)}),(0,P.jsx)(cm,{children:l(Lp(e))}),(0,P.jsxs)(lm,{children:[e.removable&&!e.isOrphan&&(0,P.jsx)(um,{onClick:t=>{t.stopPropagation(),Pe([e.id]).then(de)},title:l(`Restore to its original folder`),type:`button`,children:(0,P.jsx)(Np,{})}),e.removable&&(0,P.jsx)(um,{$danger:!0,onClick:t=>{t.stopPropagation(),ae(new Set([e.id])),j(`delete`)},title:e.isOrphan?l(`Remove the leftover record`):l(`Delete permanently`),type:`button`,children:(0,P.jsx)(hi,{size:13})})]})]},e.id))})]}),r&&(0,P.jsx)(Wo,{emptyNote:l(`Nothing selected.`),info:Ee,onWidth:ue,selectionNote:he.length>1?o(l,he.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:a,videoAutoplay:s,width:le})]}),k&&(0,P.jsx)(Ga,{items:we,onClose:()=>ce(null),x:k.x,y:k.y}),(0,P.jsx)(No,{confirmLabel:l(A===`empty`?`Empty the bin`:A===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:A===`empty`?o(l,F.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):A===`purge`?l(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):o(l,ge.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>j(null),onConfirm:()=>{A===`empty`?ye():A===`purge`?xe():B()},open:A!==null,title:l(A===`empty`?`Empty the recycle bin`:A===`purge`?`Delete every orphan`:`Delete permanently`)})]});function De(e){se(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return zn(`yafm.recycle.sort`,n),n})}}function Fp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return Lp(e).localeCompare(Lp(t),void 0,{sensitivity:`base`})}}function Ip(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function Lp(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function Rp({entry:e}){let t=cn(e.originalPath,e.isDirectory);return(0,P.jsx)(im,{children:t?(0,P.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,P.jsx)($r,{}):(0,P.jsx)(ei,{})})}var zp=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Bp=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Vp=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Hp=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Up=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Wp=_.button`
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
`,Gp=_(Wp)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Kp=_.button`
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
`,qp=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Jp=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Yp=_.div`
    display: grid;
    grid-template-columns: ${Jp};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Xp=_.button`
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
`,Zp=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Qp=_.div`
    display: grid;
    grid-template-columns: ${Jp};
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
`,$p=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,em=_.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,tm=_.button`
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
`,nm=_.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,rm=_($p)`
    display: flex;
    align-items: center;
    gap: 9px;
`,im=_.span`
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
`,am=_($p)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,om=_($p)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,sm=_($p)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,cm=_($p)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,lm=_.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,um=_.button`
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
`,dm=_.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,fm=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,pm=_.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,mm=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function hm(){return N.available?(await N.request(`app.tags`)).tags:[]}async function gm(e){return!N.available||!e?!1:(await N.request(`app.tags.delete`,{name:e})).ok}async function _m(e,t){return!N.available||!e?[]:(await N.request(`app.tags.create`,{name:e,color:t})).tags}async function vm(e,t){return!N.available||!e?!1:(await N.request(`app.tags.color`,{name:e,color:t})).ok}async function ym(e,t){return!N.available||!e||!t?!1:(await N.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function bm(){let e=I();return(0,P.jsx)(xm,{title:e(`Always applies to every folder`),children:e(`Global`)})}var xm=_.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Sm=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function Cm(e){return`"${e.replaceAll(`"`,``)}"`}function wm(e){let t=document.documentElement.style;for(let n of Sm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Cm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Tm(){return N.available?(await N.request(`app.fonts`)).fonts??[]:[]}function Em({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=I(),[s,c]=(0,E.useState)(null),[l,u]=(0,E.useState)(``),d=(0,E.useRef)(null),f=(0,E.useRef)(null),p=(0,E.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,E.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Dm,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,P.jsx)(Om,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,P.jsx)(km,{children:`▾`})]}),s&&(0,Oa.createPortal)((0,P.jsxs)(Am,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,P.jsxs)(jm,{children:[(0,P.jsx)(ni,{size:12}),(0,P.jsx)(Mm,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,P.jsxs)(Nm,{children:[(0,P.jsxs)(Pm,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,P.jsxs)(Im,{children:[n,` `,(0,P.jsx)(Rm,{children:o(`(default)`)})]}),!e&&(0,P.jsx)(gi,{size:11})]}),p.map(t=>(0,P.jsxs)(Pm,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,P.jsxs)(Fm,{children:[(0,P.jsx)(Im,{children:t}),(0,P.jsx)(Lm,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,P.jsx)(gi,{size:11})]},t)),p.length===0&&(0,P.jsx)(zm,{children:o(`No matching font.`)})]})]}),document.body)]})}var Dm=_.button`
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
`,Om=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,km=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,Am=_.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${za}
`,jm=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,Mm=_.input`
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
`,Nm=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,Pm=_.button`
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
`,Fm=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Im=_.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Lm=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Rm=_.span`
    color: var(--text-muted);
    font-size: 10px;
`,zm=_.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Bm=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],Vm=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Hm=`en`,Um=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],Wm=new Date(2026,10,5,16,8).getTime(),Gm=`system`,Km={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},qm=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],Jm=`yafm.colors.recent`;function Ym(){let e=Rn(Jm);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Xm({appInfo:e,focusSection:t,onSettingsChanged:n,onOpenFolder:r,find:i,onSearchMatches:a}){let s=I(),[c,l]=(0,E.useState)([]),[u,d]=(0,E.useState)(null),[p,g]=(0,E.useState)(null),[_,y]=(0,E.useState)(null),[x,S]=(0,E.useState)(``),[ee,C]=(0,E.useState)(`file`),[ne,ie]=(0,E.useState)(!1),[T,ae]=(0,E.useState)(!1),[D,oe]=(0,E.useState)(null),[O,se]=(0,E.useState)(!1),[k,ce]=(0,E.useState)(!1),[A,j]=(0,E.useState)(null),[le,M]=(0,E.useState)(null),[N,ue]=(0,E.useState)(null),[fe,F]=(0,E.useState)(!1),[pe,me]=(0,E.useState)(null),[he,L]=(0,E.useState)(null),[ge,R]=(0,E.useState)(!1),[_e,z]=(0,E.useState)([]),[ve,B]=(0,E.useState)(null),[ye,xe]=(0,E.useState)(!1),[V,Se]=(0,E.useState)(null),[Ce,we]=(0,E.useState)(``),[Te,Ee]=(0,E.useState)(Cs),[De,Oe]=(0,E.useState)(null),[ke,Ae]=(0,E.useState)(null),[je,H]=(0,E.useState)(``),[Me,Ne]=(0,E.useState)(``),[Pe,Fe]=(0,E.useState)(null),[Ie,Le]=(0,E.useState)(Ym),[Re,ze]=(0,E.useState)({}),[Be,Ve]=(0,E.useState)(null),[He,Ue]=(0,E.useState)(null),[We,Ke]=(0,E.useState)(!1),[qe,Je]=(0,E.useState)(!1),[Ze,rt]=(0,E.useState)(null),[at,ot]=(0,E.useState)(qm[0].id),[pt,gt]=(0,E.useState)([]),[_t,vt]=(0,E.useState)(null),[yt,W]=(0,E.useState)(null),[bt,xt]=(0,E.useState)(null),[St,Ct]=(0,E.useState)(!1),[wt,Tt]=(0,E.useState)(``),Et=(0,E.useRef)(null),Dt=(0,E.useRef)({}),Ot=p?.defaultView??be,kt=p?.themePresets??[],At=le?le.registered&&le.pathMatches:p?.archiveHandler??!1,jt=le?.registered??p?.archiveHandler??!1,Mt=N?N.registered&&N.pathMatches:p?.defaultFileManager??!1;gd(Et,i??null,`section`,a??(()=>void 0),[p]),(0,E.useEffect)(()=>{let e=Et.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){ot(qm[qm.length-1].id);return}let n=t+110,r=qm[0].id;for(let{id:e}of qm){let t=Dt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}ot(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Nt=e=>t=>{Dt.current[e]=t},Pt=e=>{Dt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),ot(e)};(0,E.useEffect)(()=>{t&&Pt(t)},[t]),(0,E.useEffect)(()=>{de().then(e=>l(e.available),()=>l([]))},[]),(0,E.useEffect)(()=>{Tm().then(gt,()=>gt([]))},[]),(0,E.useEffect)(()=>{mt().then(W,()=>W(null))},[]),(0,E.useEffect)(()=>{st().then(Ue,()=>void 0)},[]),(0,E.useEffect)(()=>{Ge().then(d,()=>d(null)),Ye().then(g,()=>g(null)),dt().then(se,()=>se(!1)),$e().then(M,()=>M(null)),Qe().then(ue,()=>ue(null)),hm().then(z,()=>z([]))},[]),(0,E.useEffect)(()=>{let e=()=>void U().then(oe,()=>oe(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let G=async e=>{if(!p)return;let t={...p,...e};Object.keys(e).every(e=>t[e]===p[e])||(g(t),an(),g(await nt(t)),n())},Ft=async e=>{let t=await fa(e);if(!t)return;let n=p?.backgroundCustom??[];await G({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},It=async()=>{let e=wt.trim();if(!p||!re(e))return;let t=p.backgroundCustom??[];Tt(``),await G({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Lt=e=>{if(!p)return;let t=p.backgroundSource;G({backgroundCustom:p.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},Rt=async()=>{if(!p)return;let t=await da();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.protectedPaths.includes(r)||await G({protectedPaths:[...p.protectedPaths,r]})},zt=()=>{let e=je.trim();p&&e&&!p.protectedPaths.includes(e)&&(H(``),G({protectedPaths:[...p.protectedPaths,e]}))},Vt=()=>{if(!p||!De)return;let e=De.value.trim(),t=De.from;Oe(null),e.length!==0&&e!==t&&G({protectedPaths:p.protectedPaths.map(n=>n===t?e:n)})},Ht=e=>{p&&G({protectedPaths:p.protectedPaths.filter(t=>t!==e)})},Ut=async()=>{let e=await Xe();e.length>0&&await G({protectedPaths:e})},Kt=()=>{if(!p||!ke)return;let e=ke.value.trim(),t=ke.from;Ae(null),e&&e!==t&&G({directoryIndexBlacklist:p.directoryIndexBlacklist.map(n=>n===t?e:n)})},qt=()=>{let e=Me.trim();p&&e&&!p.directoryIndexBlacklist.includes(e)&&(Ne(``),G({directoryIndexBlacklist:[...p.directoryIndexBlacklist,e]}))},Jt=async()=>{if(!p)return;let t=await da();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.directoryIndexBlacklist.includes(r)||await G({directoryIndexBlacklist:[...p.directoryIndexBlacklist,r]})},Yt=e=>{p&&G({directoryIndexBlacklist:p.directoryIndexBlacklist.filter(t=>t!==e)})},Xt=()=>{G({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},Zt=()=>{if(!p||Pe===null)return;let e=Pe.trim()||`yyyy/MM/dd HH:mm`;Fe(null),e!==p.timeFormatPattern&&G({timeFormatPattern:e})},Qt=(e,t)=>{Le(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return zn(Jm,i),i})},$t=h(p?.accentColor,te),en=h(p?.secondaryColor,b),tn=(e,t)=>{p&&(Qt(`accent`,$t),Qt(`secondary`,en),G({accentColor:e,secondaryColor:t}))},nn=(e,t)=>{p&&(Qt(e,e===`accent`?$t:en),G(e===`accent`?{accentColor:t}:{secondaryColor:t}))},rn=async()=>{Ke(!0),Je(!1);try{Ue(await ct())}catch{Je(!0)}finally{Ke(!1)}},on=async()=>{if(!p||!Be)return;let e=Be.name.trim()||`${Be.accent.toUpperCase()} / ${Be.secondary.toUpperCase()}`,t=[...p.themePresets,{name:e,accent:Be.accent,secondary:Be.secondary}];Ve(null),await G({themePresets:t})},K=async e=>{p&&await G({themePresets:p.themePresets.filter((t,n)=>n!==e)})},q=e=>{let t=Ze;rt(null),t&&t.role===e&&(e===`accent`?$t:en).toLowerCase()!==t.color.toLowerCase()&&Qt(e,t.color)},sn=async()=>{let e=Ce.trim();if(e&&!ye){xe(!0),Se(null);try{z(await _m(e,Te)),we(``)}catch{Se(s(`Could not add the tag.`))}finally{xe(!1)}}},cn=async(e,t)=>{z(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await vm(e,t)||Se(s(`Could not change the tag's color.`))},J=async e=>{if(ye)return;xe(!0),Se(null);let t=await gm(e);z(await hm()),t||Se(`"${e}" is still used by a folder whose index could not be updated.`),xe(!1)},ln=async()=>{let e=ve;if(!e||ye)return;let t=e.value.trim();t.length===0||t===e.name?B(null):(xe(!0),Se(null),await ym(e.name,t)?(z(await hm()),B(null)):Se(`Could not rename "${e.name}".`),xe(!1))},un=async e=>{let t=new Set(Ot.columns??be.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Dc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await G({defaultView:{...Ot,columns:n}})},dn=async()=>{if(k)return;let e=!O;ce(!0),j(null);try{let t=await ft(e);se(t),g(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&j(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{j(`The request to Windows failed. Try again.`)}finally{ce(!1)}},fn=async()=>{if(!fe){F(!0),me(null);try{let e=await et();M(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),n(),t||me(`Windows did not accept the archive registration. Try again.`)}catch{me(`The request to Windows failed. Try again.`)}finally{F(!1)}}},pn=async()=>{if(!fe){F(!0),me(null);try{let e=await tt();M(e),g(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&me(`The registration is still there. Try turning it off again.`)}catch{me(`The request to Windows failed. Try again.`)}finally{F(!1)}}},mn=async(e,t)=>{if(!p)return;let n={...p.extensionIcons};t===null?delete n[e]:n[e]=t,await G({extensionIcons:n})},hn={...Bt,...p?.shortcuts};(0,E.useEffect)(()=>{if(!he)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){L(null);return}let t=Wt(e);t&&(L(null),G({shortcuts:{...hn,[he]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[he,p]),(0,E.useEffect)(()=>{if(!ge)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){R(!1);return}let t=Wt(e);t&&(R(!1),G({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[ge,p]);let gn=async e=>{await G({recentLimit:Math.min(Math.max(e,0),50)})},_n=(e,t)=>{let n=t??Re[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};ze(t=>({...t,[e]:void 0})),G(i)},vn=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;vt(null),await G({sharePortMode:`custom`,sharePort:n}),await Od(n,`custom`)},yn=async e=>{let t=e===`custom`,n=t?p?.sharePort??8080:null;await G({sharePortMode:t?`custom`:`random`,sharePort:n}),await Od(n,t?`custom`:`random`)},bn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;Ct(!0),xt(null);try{let e=await ht(t);W(e),xt(e.error),e.error||await G({startupMode:t})}finally{Ct(!1)}},xn=async e=>{await G({galleryRoots:e.length>0?e:null})},Sn=async()=>{let e=await da(),t=p?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await xn([...t,e])},Cn=async()=>{let e=x.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await mn(e,ee),S(``))},wn=async()=>{ae(!0);try{let e=await da();if(!e)return;let t=await fa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await it(e.replace(/[\\/][^\\/]+$/,``),v(e),`file:${t}`)&&(an(),y({folder:e,icon:t}))}finally{ae(!1)}},Tn=async(e,t)=>{let n={...p?.fonts};t?n[e]=t:delete n[e],await G({fonts:n})};return(0,P.jsxs)(ch,{children:[(0,P.jsxs)(lh,{ref:Et,children:[(0,P.jsxs)(uh,{ref:Nt(`application`),children:[(0,P.jsx)(sh,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Version`)}),(0,P.jsx)(Bh,{children:e?`v${e.version}`:`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Platform`)}),(0,P.jsx)(Bh,{children:e?.platform??`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Logs`)}),(0,P.jsx)($,{children:s(`Application logs and crash details. Open the folder here to inspect them without leaving the app.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(kg,{disabled:!e?.logDirectory,onClick:()=>e?.logDirectory&&r(e.logDirectory),type:`button`,children:s(`Open log folder`)})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Language`)}),(0,P.jsx)($,{children:s(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(ih,{disabled:!p,onChange:e=>void G({language:e}),options:[Gm,...c.length>0?c:[Hm]],value:p?.language??Hm})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Picker window size`)}),(0,P.jsx)($,{children:s(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(Xh,{inputMode:`numeric`,onBlur:e=>_n(`width`,e.currentTarget.value),onChange:e=>ze(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Re.width??String(p?.pickerWindowWidth??1200)}),(0,P.jsx)(Bh,{children:`×`}),(0,P.jsx)(Xh,{inputMode:`numeric`,onBlur:e=>_n(`height`,e.currentTarget.value),onChange:e=>ze(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Re.height??String(p?.pickerWindowHeight??800)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Web server port`)}),(0,P.jsx)($,{children:s(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(oo,{disabled:!p,onChange:e=>void yn(e),options:[{value:`random`,label:s(`Random`)},{value:`custom`,label:s(`Custom port`)}],value:p?.sharePortMode??`random`,width:160})})]}),p?.sharePortMode===`custom`&&(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Custom port`)}),(0,P.jsx)($,{children:s(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(Xh,{inputMode:`numeric`,onBlur:e=>void vn(e.currentTarget.value),onChange:e=>vt(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:_t??(p?.sharePort?String(p.sharePort):``)})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Link paths`)}),(0,P.jsx)($,{children:s(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(oo,{disabled:!p,onChange:e=>void G({linkPathMode:e}),options:[{value:`relative`,label:s(`Relative`)},{value:`absolute`,label:s(`Absolute`)}],value:p?.linkPathMode??`relative`,width:160})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Global hotkey`)}),(0,P.jsx)($,{children:s(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(Og,{$listening:ge,disabled:!p,onClick:()=>R(!0),type:`button`,children:ge?s(`Press a key…`):p?.globalHotkey?Gt(p.globalHotkey):s(`None`)}),p?.globalHotkey&&(0,P.jsx)(Uh,{onClick:()=>void G({globalHotkey:null}),type:`button`,children:s(`Clear`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Open yafm:// links`)}),(0,P.jsx)($,{children:s(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),A&&(0,P.jsx)(zh,{children:A})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(qh,{$on:O,children:s(O?`Active`:`Off`)}),(0,P.jsx)(Jh,{$on:O,disabled:k,onClick:()=>void dn(),title:s(O?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,P.jsx)(Yh,{})})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Use as the default file manager`)}),(0,P.jsx)($,{children:s(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),N?.registered&&!N.pathMatches&&(0,P.jsx)(zh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:N.registeredPath??`?`})})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(qh,{$on:Mt,children:s(Mt?`Active`:`Off`)}),(0,P.jsx)(Jh,{$on:Mt,disabled:!p,onClick:()=>void(async()=>{let e=N?.registered&&!N.pathMatches?!0:!p?.defaultFileManager;await G({defaultFileManager:e}),ue(await Qe().catch(()=>null))})(),title:s(Mt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,P.jsx)(Yh,{})})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Open archives with this app`)}),(0,P.jsx)($,{children:s(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,P.jsx)($,{children:s(`When this is off, opening an archive uses the system's default application instead.`)}),le?.registered&&!le.pathMatches&&(0,P.jsx)(zh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:le.registeredPath??`?`})}),pe&&(0,P.jsx)(zh,{children:pe})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(qh,{$on:At,children:s(At?`Active`:`Off`)}),(0,P.jsx)(kg,{disabled:!p||fe||At,onClick:()=>void fn(),type:`button`,children:s(`Register`)}),e?.platform===`windows`&&(0,P.jsx)(kg,{onClick:()=>void lt(`ms-settings:defaultapps`),type:`button`,children:s(`Default apps…`)}),(0,P.jsx)(Kh,{disabled:!p||fe||!jt,onClick:()=>void pn(),type:`button`,children:s(`Unregister`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Reopen the tabs that were open`)}),(0,P.jsx)($,{children:s(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,P.jsx)(Jh,{$on:p?.restoreTabs??!0,disabled:!p,onClick:()=>void G({restoreTabs:!p?.restoreTabs}),type:`button`,children:(0,P.jsx)(Yh,{})})]})]})]}),(0,P.jsxs)(uh,{ref:Nt(`startup`),children:[(0,P.jsx)(sh,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Start with the computer`)}),(0,P.jsx)($,{children:s(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),bt&&(0,P.jsx)(zh,{children:bt}),yt&&!yt.supported&&(0,P.jsx)(zh,{children:s(`This platform cannot create a per-user startup entry.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(oo,{disabled:!p||St||yt!==null&&!yt.supported,onChange:e=>void bn(e),options:[{value:`none`,label:s(`None`)},{value:`shortcut`,label:s(`Shortcut`)},{value:`task`,label:s(`Scheduled task`)}],value:yt?.mode??p?.startupMode??`none`,width:170})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Start hidden in the tray`)}),(0,P.jsx)($,{children:s(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(Jh,{$on:p?.startHidden??!1,disabled:!p,onClick:()=>void G({startHidden:!p?.startHidden}),type:`button`,children:(0,P.jsx)(Yh,{})})})]})]})]}),(0,P.jsxs)(uh,{ref:Nt(`fonts`),children:[(0,P.jsx)(sh,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,P.jsxs)(fh,{children:[Sm.map(e=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(e.label)}),(0,P.jsx)($,{children:s(`Falls back to {font} until another family is chosen.`,{font:s(e.fallback)})})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(Em,{defaultLabel:s(e.fallback),disabled:!p,fonts:pt,onChange:t=>void Tn(e.id,t),sample:e.sample,value:p?.fonts?.[e.id]??null})})]},e.id)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Reset`)}),(0,P.jsx)($,{children:s(`Back to the app's built-in font for every role.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(kg,{onClick:()=>void G({fonts:{}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,P.jsxs)(uh,{ref:Nt(`time`),children:[(0,P.jsx)(sh,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,P.jsx)(fh,{children:(0,P.jsxs)(ph,{children:[(0,P.jsxs)(mh,{children:[(0,P.jsx)(Q,{children:s(`Format`)}),(0,P.jsx)($,{children:s(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,P.jsx)(Sg,{children:Um.map(e=>(0,P.jsx)(Cg,{$active:(p?.timeFormat??`24`)===e.id,onClick:()=>void G({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(p?.timeFormat??`24`)===`custom`&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(wg,{"aria-label":s(`Pattern`),onBlur:Zt,onChange:e=>Fe(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Zt()):e.key===`Escape`&&Fe(null)},spellCheck:!1,value:Pe??p?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,P.jsx)($,{children:s(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(`span`,{children:s(`Preview`)}),(0,P.jsx)(`code`,{children:m(Wm,p?.timeFormat,Pe??p?.timeFormatPattern)})]})]})})]}),(0,P.jsxs)(uh,{ref:Nt(`updates`),children:[(0,P.jsx)(sh,{note:`The running build and the newest one published.`,title:`Updates`}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Current version`)}),(0,P.jsx)(Bh,{children:e?`v${e.version}`:`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Latest version`)}),(0,P.jsx)(Bh,{children:He?`v${He.latest}`:`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Check for updates`)}),(0,P.jsx)($,{children:He&&!He.available?s(`You are on the latest version.`):s(`Reads the version file the release workflow publishes.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(kg,{disabled:We,onClick:()=>void rn(),type:`button`,children:s(We?`Checking…`:`Check now`)})})]}),He?.available&&(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Version {version} is available.`,{version:He.latest})}),(0,P.jsx)($,{children:s(`Download the new build from the releases page.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(kg,{onClick:()=>void lt(Vm),type:`button`,children:s(`Open release page`)})})]}),qe&&(0,P.jsx)(X,{children:(0,P.jsx)(zh,{children:s(`Could not check for updates.`)})})]})]}),(0,P.jsxs)(uh,{ref:Nt(`colors`),children:[(0,P.jsx)(sh,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(ph,{children:[(0,P.jsxs)(mh,{children:[(0,P.jsx)(Q,{children:s(`Presets`)}),(0,P.jsx)($,{children:s(`One click changes the accent and the highlight together.`)})]}),(0,P.jsxs)(hh,{children:[iu.map(e=>(0,P.jsxs)(gh,{$on:$t.toLowerCase()===e.accent&&en.toLowerCase()===e.secondary,onClick:()=>tn(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,P.jsxs)(Ch,{children:[(0,P.jsx)(`i`,{style:{background:e.accent}}),(0,P.jsx)(`i`,{style:{background:e.secondary}})]}),(0,P.jsx)(_h,{children:s(e.name)})]},e.name)),kt.map((e,t)=>(0,P.jsxs)(vh,{children:[(0,P.jsxs)(gh,{$on:$t.toLowerCase()===e.accent.toLowerCase()&&en.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>tn(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,P.jsxs)(Ch,{children:[(0,P.jsx)(`i`,{style:{background:e.accent}}),(0,P.jsx)(`i`,{style:{background:e.secondary}})]}),(0,P.jsx)(_h,{children:e.name})]}),(0,P.jsx)(yh,{onClick:()=>void K(t),title:s(`Remove preset`),type:`button`,children:(0,P.jsx)(_i,{size:9})})]},`${e.name}-${t}`)),Be?(0,P.jsxs)(xh,{children:[(0,P.jsxs)(Ch,{children:[(0,P.jsx)(`i`,{style:{background:Be.accent}}),(0,P.jsx)(`i`,{style:{background:Be.secondary}})]}),(0,P.jsx)(Sh,{autoFocus:!0,maxLength:24,onChange:e=>Ve({...Be,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),on()):e.key===`Escape`&&(e.preventDefault(),Ve(null))},placeholder:s(`Preset name`),spellCheck:!1,value:Be.name}),(0,P.jsx)(Uh,{onClick:()=>void on(),type:`button`,children:s(`Save`)}),(0,P.jsx)(Uh,{onClick:()=>Ve(null),type:`button`,children:s(`Cancel`)})]}):(0,P.jsxs)(bh,{disabled:!p,onClick:()=>Ve({name:``,accent:$t,secondary:en}),title:s(`Save the current colours as a preset`),type:`button`,children:[(0,P.jsx)(ai,{size:12}),s(`Add preset`)]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Accent color`)}),(0,P.jsx)($,{children:s(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(oh,{colors:Ie.accent,current:$t,onApply:e=>nn(`accent`,e)}),(0,P.jsx)(Wh,{"aria-label":s(`Accent color`),disabled:!p,onBlur:()=>q(`accent`),onChange:e=>void G({accentColor:e.target.value}),onFocus:()=>rt({role:`accent`,color:$t}),type:`color`,value:$t}),(0,P.jsx)(Gh,{children:$t.toUpperCase()})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Secondary color`)}),(0,P.jsx)($,{children:s(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(oh,{colors:Ie.secondary,current:en,onApply:e=>nn(`secondary`,e)}),(0,P.jsx)(Wh,{"aria-label":s(`Secondary color`),disabled:!p,onBlur:()=>q(`secondary`),onChange:e=>void G({secondaryColor:e.target.value}),onFocus:()=>rt({role:`secondary`,color:en}),type:`color`,value:en}),(0,P.jsx)(Gh,{children:en.toUpperCase()})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Reset colors`)}),(0,P.jsx)($,{children:s(`Returns the interface to the default blue and indigo theme.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(Uh,{disabled:!p,onClick:()=>{Qt(`accent`,$t),Qt(`secondary`,en),G({accentColor:null,secondaryColor:null})},type:`button`,children:s(`Reset`)})})]})]})]}),(0,P.jsxs)(uh,{ref:Nt(`background`),children:[(0,P.jsx)(sh,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(ph,{children:[(0,P.jsxs)(mh,{children:[(0,P.jsx)(Q,{children:s(`Wallpaper`)}),(0,P.jsx)($,{children:s(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,P.jsx)(cg,{children:(0,P.jsx)(lg,{$active:!p?.backgroundSource,onClick:()=>void G({backgroundSource:null}),title:s(`None`),type:`button`,children:(0,P.jsx)(mg,{children:s(`None`)})})}),(0,P.jsxs)(ag,{children:[su.map(e=>(0,P.jsxs)(og,{children:[(0,P.jsx)(sg,{children:s(e.name)}),(0,P.jsx)(cg,{children:e.variants.map(t=>(0,P.jsx)(lg,{$active:p?.backgroundSource===t.id,onClick:()=>void G({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,P.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,P.jsxs)(og,{children:[(0,P.jsx)(sg,{children:s(`Motion`)}),(0,P.jsx)(cg,{children:ou.map(e=>(0,P.jsxs)(lg,{$active:p?.backgroundSource===e.id,onClick:()=>void G({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,P.jsx)(`img`,{alt:``,src:e.poster}),(0,P.jsx)(fg,{children:(0,P.jsx)(Si,{size:11})})]},e.id))})]}),(0,P.jsxs)(og,{children:[(0,P.jsx)(sg,{children:s(`Custom`)}),(0,P.jsxs)(cg,{children:[(p?.backgroundCustom??[]).map(e=>(0,P.jsx)(rh,{active:p?.backgroundSource===`file:${e}`||p?.backgroundSource===`url:${e}`||p?.backgroundSource===e,onRemove:()=>Lt(e),onSelect:()=>void G({backgroundSource:re(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,P.jsxs)(pg,{onClick:()=>void Ft([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,P.jsx)(ai,{size:12}),s(`Image…`)]}),(0,P.jsxs)(pg,{onClick:()=>void Ft([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,P.jsx)(ai,{size:12}),s(`Video…`)]})]})]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Image or video URL`)}),(0,P.jsx)($,{children:s(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(Xh,{onChange:e=>Tt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&It()},placeholder:`https://…`,value:wt}),(0,P.jsx)(Uh,{disabled:!re(wt),onClick:()=>void It(),type:`button`,children:s(`Add`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Blur`)}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(ig,{max:40,min:0,onChange:e=>void G({backgroundBlur:Number(e.target.value)}),type:`range`,value:p?.backgroundBlur??0}),(0,P.jsxs)(Bh,{children:[p?.backgroundBlur??0,`px`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Saturation`)}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(ig,{max:200,min:0,onChange:e=>void G({backgroundSaturation:Number(e.target.value)}),type:`range`,value:p?.backgroundSaturation??100}),(0,P.jsxs)(Bh,{children:[p?.backgroundSaturation??100,`%`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Brightness`)}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(ig,{max:150,min:40,onChange:e=>void G({backgroundBrightness:Number(e.target.value)}),type:`range`,value:p?.backgroundBrightness??100}),(0,P.jsxs)(Bh,{children:[p?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,P.jsxs)(uh,{ref:Nt(`safety`),children:[(0,P.jsx)(sh,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(ph,{children:[(0,P.jsxs)(mh,{children:[(0,P.jsx)(Q,{children:s(`Protected folders`)}),(0,P.jsx)($,{children:s(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,P.jsx)(hg,{children:(p?.protectedPaths??[]).map(e=>(0,P.jsxs)(gg,{children:[(0,P.jsx)(_g,{"aria-label":s(`Protected path`),onBlur:Vt,onChange:t=>Oe({from:e,value:t.target.value}),onFocus:()=>Oe({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Vt()):e.key===`Escape`&&Oe(null)},spellCheck:!1,value:De?.from===e?De.value:e}),(0,P.jsx)(vg,{onClick:()=>Ht(e),title:s(`Remove`),type:`button`,children:(0,P.jsx)(_i,{size:10})})]},e))}),(0,P.jsxs)(bg,{children:[(0,P.jsx)(xg,{"aria-label":s(`New protected rule`),onChange:e=>H(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),zt())},placeholder:`*.log`,spellCheck:!1,value:je}),(0,P.jsx)(Uh,{onClick:zt,type:`button`,children:s(`Add the rule`)})]}),(0,P.jsxs)(yg,{children:[(0,P.jsx)(Uh,{onClick:()=>void Ut(),type:`button`,children:s(`Restore defaults`)}),(0,P.jsx)(Uh,{onClick:()=>void Rt(),type:`button`,children:s(`Add folder…`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Confirmation delay`)}),(0,P.jsx)($,{children:s(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(ig,{max:30,min:2,onChange:e=>void G({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:p?.deleteDelaySeconds??5}),(0,P.jsxs)(Bh,{children:[p?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,P.jsxs)(uh,{ref:Nt(`tags`),children:[(0,P.jsx)(sh,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Rh,{children:[(0,P.jsx)(Vh,{"aria-label":s(`Color of the new tag`),onChange:e=>Ee(e.target.value),type:`color`,value:Te}),(0,P.jsx)(Xh,{onChange:e=>we(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),sn())},placeholder:s(`New tag`),spellCheck:!1,value:Ce})]}),(0,P.jsx)($,{children:s(`Add a tag here; it is available in every folder.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(Uh,{disabled:ye||Ce.trim().length===0,onClick:()=>void sn(),type:`button`,children:s(`Add`)})})]}),V&&(0,P.jsx)(X,{children:(0,P.jsx)(zh,{children:V})}),_e.length===0&&(0,P.jsx)(X,{children:(0,P.jsx)($,{children:s(`No tags yet. Add one below; it is available in every folder.`)})}),_e.map(e=>(0,P.jsx)(X,{children:ve?.name===e.name?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Rh,{children:[(0,P.jsx)(Vh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void cn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,P.jsx)(Hh,{autoFocus:!0,disabled:ye,onChange:t=>B({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),ln()):e.key===`Escape`&&(e.preventDefault(),B(null))},value:ve.value})]}),(0,P.jsx)($,{children:s(`Press Enter to save, Escape to cancel.`)})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(Uh,{disabled:ye,onClick:()=>void ln(),type:`button`,children:s(`Save`)}),(0,P.jsx)(Uh,{disabled:ye,onClick:()=>B(null),type:`button`,children:s(`Cancel`)})]})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Rh,{children:[(0,P.jsx)(Vh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void cn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,P.jsx)(Q,{children:e.name})]}),(0,P.jsx)($,{children:o(s,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(Uh,{disabled:ye,onClick:()=>B({name:e.name,value:e.name}),type:`button`,children:s(`Edit`)}),(0,P.jsxs)(Kh,{disabled:ye,onClick:()=>void J(e.name),type:`button`,children:[(0,P.jsx)(hi,{size:13}),s(`Remove`)]})]})]})},e.name))]})]}),(0,P.jsxs)(uh,{ref:Nt(`files-view`),children:[(0,P.jsx)(sh,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Default view`)}),(0,P.jsx)($,{children:s(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsxs)(ng,{children:[(0,P.jsx)(rg,{$on:Ot.mode===`list`,onClick:()=>void G({defaultView:{...Ot,mode:`list`}}),type:`button`,children:s(`List`)}),(0,P.jsx)(rg,{$on:Ot.mode===`grid`,onClick:()=>void G({defaultView:{...Ot,mode:`grid`}}),type:`button`,children:s(`Grid`)})]})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`List icon size`)}),(0,P.jsx)($,{children:s(`The icon in the list rows.`)})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(ig,{max:48,min:16,onChange:e=>void G({defaultView:{...Ot,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Ot.iconSize}),(0,P.jsxs)(Bh,{children:[Ot.iconSize,`px`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Grid size`)}),(0,P.jsx)($,{children:s(`The height of a grid tile; the icon inside follows it.`)})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(ig,{max:260,min:100,onChange:e=>void G({defaultView:{...Ot,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Ot.gridSize}),(0,P.jsxs)(Bh,{children:[Ot.gridSize,`px`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Rh,{children:[(0,P.jsx)(Q,{children:s(`Selection checkboxes`)}),(0,P.jsx)(bm,{})]}),(0,P.jsx)($,{children:s(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,P.jsx)(Jh,{$on:p?.showCheckboxes??!0,disabled:!p,onClick:()=>void G({showCheckboxes:!(p?.showCheckboxes??!0)}),type:`button`,children:(0,P.jsx)(Yh,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Rh,{children:[(0,P.jsx)(Q,{children:s(`Open with a single click`)}),(0,P.jsx)(bm,{})]}),(0,P.jsx)($,{children:s(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,P.jsx)(Jh,{$on:p?.openOnSingleClick??!1,disabled:!p,onClick:()=>void G({openOnSingleClick:!(p?.openOnSingleClick??!1)}),type:`button`,children:(0,P.jsx)(Yh,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Rh,{children:[(0,P.jsx)(Q,{children:s(`Confirm before deleting`)}),(0,P.jsx)(bm,{})]}),(0,P.jsx)($,{children:s(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,P.jsx)(Jh,{$on:p?.confirmDelete??!1,disabled:!p,onClick:()=>void G({confirmDelete:!(p?.confirmDelete??!1)}),type:`button`,children:(0,P.jsx)(Yh,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Rh,{children:[(0,P.jsx)(Q,{children:s(`Play audio in video previews`)}),(0,P.jsx)(bm,{})]}),(0,P.jsx)($,{children:s(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,P.jsx)(Jh,{$on:p?.previewVideoAudio??!1,disabled:!p,onClick:()=>void G({previewVideoAudio:!(p?.previewVideoAudio??!1)}),type:`button`,children:(0,P.jsx)(Yh,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Rh,{children:[(0,P.jsx)(Q,{children:s(`Autoplay video previews`)}),(0,P.jsx)(bm,{})]}),(0,P.jsx)($,{children:s(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,P.jsx)(Jh,{$on:p?.previewVideoAutoplay??!1,disabled:!p,onClick:()=>void G({previewVideoAutoplay:!(p?.previewVideoAutoplay??!1)}),type:`button`,children:(0,P.jsx)(Yh,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Rh,{children:[(0,P.jsx)(Q,{children:s(`Preview panel under the list`)}),(0,P.jsx)(bm,{})]}),(0,P.jsx)($,{children:s(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,P.jsx)(Jh,{$on:Ot.showImages??!0,onClick:()=>void G({defaultView:{...Ot,showImages:!(Ot.showImages??!0)}}),type:`button`,children:(0,P.jsx)(Yh,{})})]}),(0,P.jsx)(X,{children:(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Rh,{children:[(0,P.jsx)(Q,{children:s(`Columns`)}),(0,P.jsx)(bm,{})]}),(0,P.jsx)($,{children:s(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,P.jsx)(X,{children:(0,P.jsxs)(Eg,{children:[Dc.map(e=>(0,P.jsxs)(Dg,{children:[(0,P.jsx)(`input`,{checked:(Ot.columns??[]).includes(e.id),onChange:()=>void un(e.id),type:`checkbox`}),(0,P.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,P.jsxs)(Dg,{children:[(0,P.jsx)(`input`,{checked:(Ot.columns??[]).includes(`linkTarget`),onChange:()=>void un(`linkTarget`),type:`checkbox`}),(0,P.jsx)(`span`,{children:s(`Link target after the name`)})]})]})})]}),(0,P.jsxs)(Ng,{children:[s(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,P.jsx)(bm,{}),` `,s(`Anything marked as global always applies to every folder.`)]})]}),(0,P.jsxs)(uh,{ref:Nt(`shortcuts`),children:[(0,P.jsx)(sh,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,P.jsxs)(fh,{children:[Bm.map(({id:e,label:t,note:n})=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(t)}),(0,P.jsx)($,{children:s(n)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(Og,{$listening:he===e,onClick:()=>L(e),type:`button`,children:he===e?s(`Press a key…`):Gt(hn[e])})})]},e)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Reset`)}),(0,P.jsx)($,{children:s(`Back to the default combination for every action.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(kg,{onClick:()=>void G({shortcuts:{...Bt}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,P.jsxs)(uh,{ref:Nt(`memory`),children:[(0,P.jsx)(sh,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(Nh,{children:[(0,P.jsxs)(Ph,{children:[(0,P.jsx)(Q,{children:s(`Process memory`)}),(0,P.jsx)(Bh,{children:D?`${f(D.private)} · ${Mh(D.private,D.available)}`:`—`})]}),(0,P.jsx)(Fh,{children:(0,P.jsx)(Ih,{$ratio:D?D.private/Math.max(D.available,1):0,$tone:w(D?D.private/Math.max(D.available,1):0)})}),(0,P.jsx)($,{children:D?s(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:f(D.available),resident:f(D.workingSet)}):s(`Reading the current usage…`)})]}),(0,P.jsxs)(Nh,{children:[(0,P.jsxs)(Ph,{children:[(0,P.jsx)(Q,{children:s(`Managed heap`)}),(0,P.jsx)(Bh,{children:D?`${f(D.managed)} · ${Mh(D.managed,D.private)}`:`—`})]}),(0,P.jsx)(Fh,{children:(0,P.jsx)(Ih,{$ratio:D?D.managed/Math.max(D.private,1):0,$tone:`var(--accent-secondary)`})}),(0,P.jsx)($,{children:s(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,P.jsxs)(Nh,{children:[(0,P.jsxs)(Ph,{children:[(0,P.jsx)(Q,{children:s(`Native and runtime`)}),(0,P.jsx)(Bh,{children:D?`${f(Math.max(0,D.private-D.managed))} · ${Mh(Math.max(0,D.private-D.managed),D.private)}`:`—`})]}),(0,P.jsx)(Fh,{children:(0,P.jsx)(Ih,{$ratio:D?Math.max(0,D.private-D.managed)/Math.max(D.private,1):0,$tone:`var(--accent-primary)`})}),(0,P.jsx)($,{children:s(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Free memory`)}),(0,P.jsx)($,{children:s(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(kg,{onClick:()=>void ut().then(oe),type:`button`,children:s(`Trim now`)})})]})]})]}),(0,P.jsxs)(uh,{ref:Nt(`overview`),children:[(0,P.jsx)(sh,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,P.jsx)(fh,{children:(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Recent items`)}),(0,P.jsx)($,{children:s(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(Xh,{max:50,min:0,onChange:e=>void gn(Number(e.target.value)),type:`number`,value:p?.recentLimit??10})})]})})]}),(0,P.jsxs)(uh,{ref:Nt(`gallery`),children:[(0,P.jsx)(sh,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,P.jsxs)(fh,{children:[(p?.galleryRoots??[]).map(e=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:v(e)}),(0,P.jsx)($,{children:e})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(Ag,{onClick:()=>void xn((p?.galleryRoots??[]).filter(t=>t!==e)),title:s(`Stop scanning this folder`),type:`button`,children:(0,P.jsx)(_i,{size:12})})})]},e)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Scan folders`)}),(0,P.jsx)($,{children:(p?.galleryRoots??[]).length===0?s(`Nothing added yet, so the gallery reads the Pictures folder.`):s(`Only these folders are scanned, three levels deep.`)})]}),(0,P.jsx)(Lh,{children:(0,P.jsx)(kg,{onClick:()=>void Sn(),type:`button`,children:s(`Choose folder…`)})})]})]})]}),(0,P.jsxs)(uh,{ref:Nt(`icons`),children:[(0,P.jsx)(sh,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Use system file icons`)}),(0,P.jsx)($,{children:s(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,P.jsx)(Jh,{$on:p?.systemIcons??!1,disabled:!p,onClick:()=>void G({systemIcons:!p?.systemIcons}),type:`button`,children:(0,P.jsx)(Yh,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Use custom folder icons`)}),(0,P.jsx)($,{children:s(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,P.jsx)(Jh,{$on:p?.customFolderIcons??!1,disabled:!p,onClick:()=>void G({customFolderIcons:!p?.customFolderIcons}),type:`button`,children:(0,P.jsx)(Yh,{})})]})]})]}),(0,P.jsxs)(uh,{ref:Nt(`extension-icons`),children:[(0,P.jsx)(sh,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,P.jsxs)(fh,{children:[Object.entries(p?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:e}),(0,P.jsx)($,{children:eh(s,t)})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(th,{source:t}),(0,P.jsx)(Ag,{onClick:()=>void mn(e,null),title:s(`Remove this rule`),type:`button`,children:(0,P.jsx)(_i,{size:12})})]})]},e)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Add a rule`)}),(0,P.jsx)($,{children:s(`Extension and the icon to draw for it.`)})]}),(0,P.jsxs)(Lh,{children:[(0,P.jsx)(Xh,{onChange:e=>S(e.target.value),placeholder:`.psd`,spellCheck:!1,value:x}),(0,P.jsxs)(tg,{children:[(0,P.jsx)(Ag,{onClick:()=>ie(e=>!e),title:s(`Choose the icon`),type:`button`,children:(0,P.jsx)(th,{source:ee})}),ne&&(0,P.jsx)(_d,{allowDefault:!1,onClose:()=>ie(!1),onPick:e=>{C(e??`file`),ie(!1)},value:ee})]}),(0,P.jsx)(Ag,{onClick:()=>void Cn(),title:s(`Add the rule`),type:`button`,children:(0,P.jsx)(ai,{size:13})})]})]})]})]}),(0,P.jsxs)(uh,{ref:Nt(`folder-icons`),children:[(0,P.jsx)(sh,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Give a folder its own icon`)}),(0,P.jsx)($,{children:s(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,P.jsxs)(Lh,{children:[_&&(0,P.jsx)(nh,{src:_.icon}),(0,P.jsx)(kg,{disabled:T,onClick:()=>void wn(),type:`button`,children:s(T?`Choosing…`:`Choose folder and icon…`)})]})]}),_&&(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:v(_.folder)}),(0,P.jsx)($,{children:_.folder})]}),(0,P.jsx)(Lh,{children:(0,P.jsxs)(Mg,{children:[(0,P.jsx)(gi,{size:11}),` `,s(`Saved`)]})})]})]})]}),(0,P.jsxs)(uh,{ref:Nt(`folder-index`),children:[(0,P.jsx)(sh,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,P.jsx)($,{children:s(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,P.jsx)(Jh,{$on:p?.writeDirectoryIndex??!0,disabled:!p,onClick:()=>void G({writeDirectoryIndex:!p?.writeDirectoryIndex}),type:`button`,children:(0,P.jsx)(Yh,{})})]}),(0,P.jsxs)(ph,{children:[(0,P.jsxs)(mh,{children:[(0,P.jsx)(Q,{children:s(`Directory index blacklist`)}),(0,P.jsx)($,{children:s(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,P.jsx)(hg,{children:(p?.directoryIndexBlacklist??[]).map(e=>(0,P.jsxs)(gg,{children:[(0,P.jsx)(_g,{"aria-label":s(`Directory index blacklist rule`),onBlur:Kt,onChange:t=>Ae({from:e,value:t.target.value}),onFocus:()=>Ae({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Kt()):e.key===`Escape`&&Ae(null)},spellCheck:!1,value:ke?.from===e?ke.value:e}),(0,P.jsx)(vg,{onClick:()=>Yt(e),title:s(`Remove`),type:`button`,children:(0,P.jsx)(_i,{size:10})})]},e))}),(0,P.jsxs)(bg,{children:[(0,P.jsx)(xg,{"aria-label":s(`Directory index blacklist rule`),onChange:e=>Ne(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),qt())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Me}),(0,P.jsx)(Uh,{onClick:qt,type:`button`,children:s(`Add the rule`)})]}),(0,P.jsxs)(yg,{children:[(0,P.jsx)(Uh,{onClick:Xt,type:`button`,children:s(`Restore defaults`)}),(0,P.jsx)(Uh,{onClick:()=>void Jt(),type:`button`,children:s(`Add folder…`)})]})]})]}),!(p?.writeDirectoryIndex??!0)&&(0,P.jsx)(Pg,{children:$m(s,e?.platform)})]}),(0,P.jsxs)(uh,{ref:Nt(`indexing`),children:[(0,P.jsx)(sh,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,P.jsx)(Qm,{})]}),(0,P.jsxs)(uh,{ref:Nt(`files`),children:[(0,P.jsx)(sh,{note:`What the listings include.`,title:`Files`}),(0,P.jsxs)(fh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Hidden items`)}),(0,P.jsx)(Bh,{children:Zm(s,u?.showHidden)})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Protected operating system files`)}),(0,P.jsx)(Bh,{children:Zm(s,u?.showSystem)})]})]}),(0,P.jsx)(Ng,{children:s(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,P.jsxs)(Dh,{"aria-label":s(`Settings sections`),children:[(0,P.jsx)(Oh,{children:s(`Sections`)}),(0,P.jsx)(kh,{children:qm.map(({id:e,label:t})=>(0,P.jsx)(Ah,{$active:at===e,onClick:()=>Pt(e),type:`button`,children:(0,P.jsx)(`span`,{children:s(t)})},e))}),(0,P.jsx)(jh,{children:s(`Changes are saved as you make them.`)})]})]})}function Zm(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Qm(){let e=I(),[t,n]=(0,E.useState)(null);return(0,E.useEffect)(()=>{let e=!0,t=()=>qe().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,P.jsx)(Pg,{children:e(`No indexing tasks are running.`)}):(0,P.jsxs)(fh,{children:[(0,P.jsx)(X,{children:(0,P.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,P.jsx)(X,{children:(0,P.jsx)(Bh,{title:e,children:e})},e))]}):(0,P.jsx)(Pg,{children:e(`Index task information is unavailable.`)})}function $m(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function eh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function th({source:e}){let t=ln(e.startsWith(`file:`)?e.slice(5):null);return(0,P.jsx)(jg,{children:t?(0,P.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,P.jsx)(zs,{name:e,size:16})})}function nh({src:e}){let t=ln(e);return(0,P.jsx)(jg,{children:t&&(0,P.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function rh({path:e,active:t,onSelect:n,onRemove:r}){let i=I(),a=re(e),o=mn(a?null:e),s=a?e:o,c=Tu(e.split(/[?#]/)[0]);return(0,P.jsxs)(ug,{children:[(0,P.jsxs)(lg,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,P.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,P.jsx)(`img`,{alt:``,src:s})),c&&(0,P.jsx)(fg,{children:(0,P.jsx)(Si,{size:11})})]}),(0,P.jsx)(dg,{onClick:r,title:i(`Remove`),type:`button`,children:(0,P.jsx)(_i,{size:9})})]})}function ih({value:e,options:t,onChange:n,disabled:r}){let i=I(),[a,o]=(0,E.useState)(null),s=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Zh,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,P.jsx)(`span`,{children:ah(i,e)}),(0,P.jsx)(Qh,{children:(0,P.jsx)(ci,{size:11})})]}),a&&(0,Oa.createPortal)((0,P.jsx)($h,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,P.jsxs)(eg,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,P.jsx)(`span`,{children:ah(i,t)}),t===e&&(0,P.jsx)(gi,{size:11})]},t))}),document.body)]})}function ah(e,t){return t===Gm?e(`System default`):Km[t]??t}function oh({colors:e,current:t,onApply:n}){let r=I();if(e.length===0)return null;let[i,...a]=e;return(0,P.jsxs)(wh,{children:[(0,P.jsxs)(Eh,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,P.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,P.jsx)(Th,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,P.jsx)(gi,{size:9})},e))]})}function sh({title:e,note:t,global:n=!1}){let r=I();return(0,P.jsxs)(dh,{children:[(0,P.jsxs)(`h2`,{children:[r(e),n&&(0,P.jsx)(bm,{})]}),(0,P.jsx)(`p`,{children:r(t)})]})}var ch=_.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,lh=_.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,uh=_.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,dh=_.header`
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
`,fh=_.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,ph=_.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,mh=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,hh=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,gh=_.button`
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
`,_h=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,vh=_.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,yh=_.button`
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
`,bh=_.button`
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
`,xh=_.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Sh=_.input`
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
`,Ch=_.span`
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
`,wh=_.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Th=_.button`
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
`,Eh=_.button`
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
`,Dh=_.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,Oh=_.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,kh=_.div`
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
`,Ah=_.button`
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
`,jh=_.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function Mh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var Nh=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Ph=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Fh=_.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Ih=_.div`
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
`,Lh=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=_.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,Rh=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=_.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,zh=_.span`
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
`,Bh=_.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Vh=_.input`
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
`,Hh=_.input`
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
`,Uh=_.button`
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
`,Wh=_.input`
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
`,Gh=_.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Kh=_.button`
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
`,qh=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Jh=_.button`
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
`,Yh=_.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Xh=_.input`
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
`,Zh=_.button`
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
`,Qh=_.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,$h=_.div`
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
`,eg=_.button`
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
`,tg=_.span`
    position: relative;
    display: inline-flex;
`,ng=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,rg=_.button`
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
`,ig=_.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,ag=_.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,og=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,sg=_.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,cg=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,lg=_.button`
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
`,ug=_.div`
    position: relative;
    width: 102px;
    height: 58px;
`,dg=_.button`
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
`,fg=_.span`
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
`,pg=_.button`
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
`,mg=_.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,hg=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,gg=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,_g=_.input`
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
`,vg=_.button`
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
`,yg=_.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,bg=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,xg=_.input`
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
`,Sg=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Cg=_.button`
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
`,wg=_.input`
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
`,Tg=_.div`
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
`,Eg=_.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,Dg=_.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,Og=_.button`
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
`,kg=_.button`
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
`,Ag=_.button`
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
`,jg=_.span`
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
`,Mg=_.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,Ng=_.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Pg=_.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,Fg=150,Ig=2500,Lg=3,Rg=600;function zg({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,onSearchMatches:s,onPick:c,onSelectionChange:l,onAddToTray:u,onAddFavorite:d,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,showDetails:g=!0,videoAudio:_=!1,videoAutoplay:v=!1}){let b=I(),x=Sc(`gallery`),[S,ee]=(0,E.useState)([]),[C,te]=(0,E.useState)(0),[ne,re]=(0,E.useState)(!0),[w,ie]=(0,E.useState)(null),[T,ae]=(0,E.useState)(!1),[D,oe]=(0,E.useState)([]),[O,se]=(0,E.useState)(()=>{let e=In(`yafm.preview.width`,320);return e>=220?e:320}),k=(0,E.useRef)([]),ce=(0,E.useRef)(0),A=(0,E.useRef)(!1),j=(0,E.useRef)(!0),le=(0,E.useRef)(0),M=(0,E.useRef)(null),N=(0,E.useRef)(0),ue=(0,E.useCallback)(async e=>{let t=++le.current;re(!0),j.current=!0,ie(null);try{let n=await ze(0,Fg,e);if(t!==le.current)return;k.current=n.entries,ce.current=n.total,ee(n.entries),te(n.total)}catch(e){t===le.current&&ie(e instanceof Error?e.message:String(e))}finally{t===le.current&&(j.current=!1,re(!1))}},[]);(0,E.useEffect)(()=>{ue(!1)},[ue]);let de=(0,E.useCallback)(async()=>{if(j.current||A.current||k.current.length>=ce.current)return;let e=le.current;A.current=!0;try{let t=k.current,n=ce.current;for(let r=0;r<Lg&&t.length<n;r++){let r=await ze(t.length,Fg,!1);if(e!==le.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<Fg)break}if(e!==le.current)return;k.current=t,ce.current=n,(0,E.startTransition)(()=>{ee(t),te(n)})}catch{}finally{A.current=!1}},[]),fe=(0,E.useCallback)(e=>{N.current||=window.requestAnimationFrame(()=>{N.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<Ig&&de()})},[de]);(0,E.useEffect)(()=>{let e=M.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&de()},{root:e.parentElement,rootMargin:`${Ig}px 0px`});return t.observe(e),()=>t.disconnect()},[de]),(0,E.useEffect)(()=>{if(S.length>=C)return;let e=window.setTimeout(()=>{let e=M.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<Ig&&de()},200);return()=>window.clearTimeout(e)},[S.length,C,de]);let F=(0,E.useMemo)(()=>({path:``,parent:null,entries:S.map(Bg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[S]),pe=(0,E.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),me=(0,E.useCallback)(e=>{c?c(e):V(e)},[c]),he=(0,E.useCallback)(e=>{let t=Vg(e.modified);return{id:t,label:t}},[]),L=()=>{ae(!0),ue(!0).finally(()=>ae(!1))},ge=S.length<C,R=(0,E.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:S.filter(e=>Tn(e.name,a)||Tn(e.path,a)),[S,a?.open,a?.query,a?.matchCase,a?.regex]),_e=(0,E.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:R[Math.min(a.index,Math.max(0,R.length-1))]?.path??null}:_n,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,R]);(0,E.useEffect)(()=>{s?.(R.length)},[R.length,s]);let z=(0,E.useCallback)(e=>{oe(e),l?.(e)},[l]),ve=e=>{se(e),Ln(`yafm.preview.width`,e)},B=D.length>0?S.find(e=>e.path===D[0])??null:null,ye=B?.name.includes(`.`)?B.name.slice(B.name.lastIndexOf(`.`)+1).toUpperCase():`—`,be=B&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(B.name)?b(`Video`):b(`Picture`),xe=B?B.path.slice(0,Math.max(B.path.lastIndexOf(`\\`),B.path.lastIndexOf(`/`))):``,Se=B?{name:B.name,path:B.path,isDirectory:!1,size:B.size,modified:B.modified,fields:[{label:b(`Type`),value:be},{label:b(`Extension`),value:ye},{label:b(`Location`),value:xe},{label:b(`Full path`),value:B.path},{label:b(`Size`),value:f(B.size)},{label:b(`Modified`),value:y(B.modified)},{label:b(`Created`),value:`—`}]}:null;return(0,P.jsxs)(Hg,{children:[(0,P.jsxs)(Gg,{children:[(0,P.jsxs)(qg,{children:[(0,P.jsx)(`span`,{children:b(`Gallery`)}),(0,P.jsx)(Jg,{children:ne?b(`scanning…`):b(`{shown} of {total} pictures`,{shown:S.length,total:C})})]}),(0,P.jsxs)(Kg,{children:[(0,P.jsx)(Yg,{onClick:L,title:b(`Scan the folders again`),type:`button`,children:(0,P.jsx)(Xg,{$spinning:T,children:(0,P.jsx)(ii,{size:14})})}),x.available&&(0,P.jsx)(Yg,{onClick:e=>x.open(e.clientX,e.clientY),title:b(`Selection menu`),type:`button`,children:(0,P.jsx)(sa,{size:14})})]})]}),w&&(0,P.jsx)(Qg,{children:w}),!w&&!ne&&C===0&&(0,P.jsx)(Qg,{children:b(`No pictures found.`)}),!w&&(ne||C>0)&&(0,P.jsxs)(Ug,{children:[(0,P.jsx)(Wg,{children:(0,P.jsx)(Ic,{confirmDelete:n,find:_e,listing:ne&&S.length===0?null:F,loading:ne,error:null,view:pe,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:z,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:me,onOpenFile:me,onRefresh:L,onAddToTray:u,onAddFavorite:d,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,groupOf:he,onGridScroll:fe,gridFooter:(0,P.jsx)(Zg,{$space:ge?Rg:1,ref:M}),allowBackgroundMenu:!1})}),g&&(0,P.jsx)(Wo,{emptyNote:b(`Nothing selected.`),info:Se,onWidth:ve,selectionNote:D.length>1?o(b,D.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:_,videoAutoplay:v,width:O})]})]})}function Bg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function Vg(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(x(),{weekday:`long`}):t.toLocaleDateString(x(),{year:`numeric`,month:`long`,day:`numeric`})}var Hg=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Ug=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Wg=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,Gg=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,Kg=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,qg=_.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Jg=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Yg=_.button`
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
`,Xg=_.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,Zg=_.div`
    height: ${({$space:e})=>e}px;
`,Qg=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function $g({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:u=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,E.useState)([]),_=I(),[y,b]=(0,E.useState)(null),x=Nn();(0,E.useEffect)(()=>{Ye().then(e=>{b(e),g(ys(e).filter(e=>e.pinned))},()=>{b(null),g([])})},[c]),(0,E.useEffect)(()=>{if(!N.available)return;let e=h.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return N.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>N.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[h,s]);let S=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:y?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??y?.placeIcons?.[n]??null}}),ee=o===`files`;return(0,P.jsxs)(a_,{children:[(0,P.jsxs)(o_,{children:[!u.includes(`home`)&&(0,P.jsxs)(d_,{$active:o===`home`,onClick:e=>m(`home`,Ut(e)),title:_(`Overview`),type:`button`,children:[(0,P.jsx)(Ni,{}),(0,P.jsx)(p_,{children:_(`Overview`)})]}),!u.includes(`recycle`)&&(0,P.jsxs)(d_,{$active:o===`recycle`,onClick:e=>m(`recycle`,Ut(e)),title:_(`Recycle Bin`),type:`button`,children:[(0,P.jsx)(hi,{}),(0,P.jsx)(p_,{children:_(`Recycle Bin`)})]}),!u.includes(`gallery`)&&(0,P.jsxs)(d_,{$active:o===`gallery`,onClick:e=>m(`gallery`,Ut(e)),title:_(`Gallery`),type:`button`,children:[(0,P.jsx)(xi,{}),(0,P.jsx)(p_,{children:_(`Gallery`)})]})]}),h.map(e=>(0,P.jsxs)(c_,{children:[(0,P.jsxs)(d_,{as:`div`,$active:!1,children:[(0,P.jsx)(f_,{children:(0,P.jsx)(xs,{panel:e,size:16})}),(0,P.jsx)(p_,{children:_(e.title)})]}),(0,P.jsx)(l_,{children:(0,P.jsxs)(u_,{children:[e.kind===`quick`&&S(e).map(e=>(0,P.jsxs)(d_,{$active:ee&&t(a,e.path),onClick:t=>p(e.path,Ut(t)),title:e.path,type:`button`,children:[(0,P.jsx)(Ss,{place:e}),(0,P.jsx)(p_,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let n=Pn(x,e.path);return(0,P.jsxs)(d_,{$active:ee&&t(a,e.path),onClick:t=>e.isDirectory?p(e.path,Ut(t)):void V(e.path),title:e.path,type:`button`,children:[n&&x.useIcons?(0,P.jsx)(Ss,{place:n}):(0,P.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,P.jsx)(p_,{children:n?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,P.jsx)(n_,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,P.jsxs)(d_,{$active:ee&&t(a,e.name),onClick:t=>p(e.name,Ut(t)),title:e.name,type:`button`,children:[(0,P.jsx)(ti,{}),(0,P.jsxs)(p_,{children:[d(e),(0,P.jsxs)(m_,{children:[f(e.freeSpace),` free`]}),(0,P.jsx)(h_,{children:(0,P.jsx)(g_,{$used:n,$tone:w(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,P.jsx)(r_,{onNavigate:p,path:e.path||s})]})})]},e.id)),!u.includes(`settings`)&&(0,P.jsx)(s_,{children:(0,P.jsxs)(d_,{$active:o===`settings`,onClick:e=>m(`settings`,Ut(e)),title:_(`Settings`),type:`button`,children:[(0,P.jsx)(li,{}),(0,P.jsx)(p_,{children:_(`Settings`)})]})})]})}var e_=10,t_=40;function n_({historyVersion:e=0,onNavigate:t}){let n=I(),[r,i]=(0,E.useState)(null),a=Nn();return(0,E.useEffect)(()=>{Ve().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Pn(a,e.path);return(0,P.jsxs)(d_,{$active:!1,onClick:n=>t(e.path,Ut(n)),title:o(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,P.jsx)(Ss,{place:r}):(0,P.jsx)(Bs,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,P.jsx)(p_,{children:r?.name||e.name})]},e.path)})}function r_({path:e,onNavigate:n}){let[r,i]=(0,E.useState)(null);(0,E.useEffect)(()=>{e&&(i(null),Se(e,!1).then(i,()=>i(null)))},[e]),(0,E.useEffect)(()=>{if(e&&N.available)return N.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Se(e,!1).then(i,()=>void 0)})},[e]);let a=r?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,e_),s=a.filter(e=>!e.isDirectory).slice(0,t_);return(0,P.jsxs)(P.Fragment,{children:[o.map(e=>(0,P.jsx)(i_,{entry:e,onNavigate:n},e.fullPath)),s.map(e=>(0,P.jsx)(i_,{entry:e,onNavigate:n},e.fullPath))]})}function i_({entry:e,onNavigate:t}){let n=Nn(),r=Pn(n,e.fullPath);return(0,P.jsxs)(d_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Ut(n)):void V(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,P.jsx)(Ss,{place:r}):(0,P.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,P.jsx)(p_,{children:r?.name||e.name})]})}var a_=_.aside`
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

    &:not(:hover) ${()=>m_},
    &:not(:hover) ${()=>h_} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,o_=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,s_=_(o_)`
    margin-top: auto;
`,c_=_.div`
    display: flex;
    flex-direction: column;
`,l_=_.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${a_}:hover ${c_}:hover > & {
        grid-template-rows: 1fr;
    }
`,u_=_.div`
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
`,d_=_.button`
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
`,f_=_.span`
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
`,p_=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,m_=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,h_=_.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,g_=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,__=_.span`
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
`;function v_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=I(),a=(0,E.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,E.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,P.jsxs)(b_,{ref:a,children:[(0,P.jsxs)(x_,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,P.jsx)(mi,{size:13}),c>0&&(0,P.jsx)(__,{children:c>9?`9+`:c})]}),n&&(0,P.jsxs)(S_,{children:[(0,P.jsxs)(C_,{children:[(0,P.jsx)(w_,{children:i(`Status center`)}),(0,P.jsxs)(T_,{children:[(0,P.jsx)(E_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,P.jsx)(D_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,P.jsx)(_i,{size:10})})]})]}),e.length===0?(0,P.jsx)(k_,{children:i(`No operations yet.`)}):(0,P.jsx)(O_,{children:e.map(e=>(0,P.jsx)(y_,{task:e},e.id))})]})]})}function y_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,P.jsxs)(A_,{children:[(0,P.jsxs)(j_,{children:[(0,P.jsx)(M_,{$state:e.state,children:e.state===`done`?(0,P.jsx)(gi,{size:10}):e.state===`failed`?(0,P.jsx)(_i,{size:10}):(0,P.jsx)(N_,{})}),(0,P.jsx)(P_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,P.jsxs)(F_,{children:[f(e.bytesDone),` / `,f(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,P.jsxs)(F_,{children:[e.done,` / `,e.total]})]}),i&&(0,P.jsx)(I_,{children:(0,P.jsx)(L_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,P.jsx)(R_,{children:e.error})]})}var b_=_.div`
    position: relative;
    display: flex;
`,x_=_.button`
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
`,S_=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${ka}
    ${Ha}
`,C_=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,w_=_.span`
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
`,T_=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,E_=_.button`
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
`,D_=_.button`
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
`,O_=_.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,k_=_.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,A_=_.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${Ua}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,j_=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,M_=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,N_=_.span`
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
`,P_=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,F_=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,I_=_.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,L_=_.div`
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
`,R_=_.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function z_(){return N.available?(await N.request(`fs.history.list`)).entries:[]}async function B_(e){return N.available?(await N.request(`fs.history.undoTo`,{id:e})).ok:!1}function V_(){let e=I(),[t,n]=(0,E.useState)(!1),[r,i]=(0,E.useState)([]),[a,o]=(0,E.useState)(!1),s=(0,E.useRef)(null),c=()=>void z_().then(i,()=>i([]));(0,E.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await B_(e),c()}finally{o(!1)}};return(0,P.jsxs)(W_,{ref:s,children:[(0,P.jsx)(G_,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,P.jsx)(pi,{size:14})}),t&&(0,P.jsxs)(K_,{children:[(0,P.jsxs)(q_,{children:[(0,P.jsx)(J_,{children:e(`History`)}),(0,P.jsx)(Y_,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,P.jsx)(_i,{size:10})})]}),r.length===0?(0,P.jsx)(iv,{children:e(`No operations yet.`)}):(0,P.jsx)(X_,{children:r.map(t=>(0,P.jsxs)(Z_,{children:[(0,P.jsxs)(Q_,{children:[(0,P.jsxs)($_,{children:[(0,P.jsx)(U_,{label:t.label}),H_(e,t.label)]}),(0,P.jsx)(ev,{children:S(t.at)})]}),t.paths.length>0&&(0,P.jsxs)(tv,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,P.jsx)(nv,{children:(0,P.jsx)(rv,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function H_(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);if(t===`Paste text`)return e(`Paste text`);if(t===`Paste image`)return e(`Paste image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function U_({label:e}){return e.startsWith(`Delete`)?(0,P.jsx)(hi,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,P.jsx)(ea,{size:13}):e.startsWith(`Rename`)?(0,P.jsx)(Pi,{size:13}):e.startsWith(`Compress`)?(0,P.jsx)(wi,{size:13}):e.startsWith(`New`)?(0,P.jsx)(ai,{size:13}):(0,P.jsx)(si,{size:13})}var W_=_.div`
    position: relative;
    display: flex;
`,G_=_.button`
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
`,K_=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${ka}
    ${Ha}
`,q_=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,J_=_.span`
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
`,Y_=_.button`
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
`,X_=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Z_=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,Q_=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,$_=_.span`
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
`,ev=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,tv=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nv=_.div`
    display: flex;
    justify-content: flex-end;
`,rv=_.button`
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
`,iv=_.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function av({currentFolder:e}){let n=I(),[r,i]=(0,E.useState)(!1),[a,o]=(0,E.useState)(null),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!r)return;let e=()=>void xd().then(o,()=>void 0);e();let t=window.setInterval(e,2500),n=e=>{l.current?.contains(e.target)||i(!1)};return window.addEventListener(`pointerdown`,n),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,n)}},[r]),(0,E.useEffect)(()=>{let e=()=>void xd().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(n=>t(n.path,e))??!1;return(0,P.jsxs)(ov,{ref:l,children:[(0,P.jsxs)(sv,{$active:r,onClick:()=>i(e=>!e),title:n(`Share folders`),type:`button`,children:[(0,P.jsx)(Ji,{size:15}),a&&a.shares.length>0&&(0,P.jsx)(__,{children:a.shares.length>9?`9+`:a.shares.length})]}),r&&(0,P.jsxs)(cv,{children:[(0,P.jsxs)(lv,{children:[(0,P.jsx)(uv,{children:n(`Share`)}),(0,P.jsx)(dv,{onClick:()=>i(!1),title:n(`Close`),type:`button`,children:(0,P.jsx)(_i,{size:10})})]}),(0,P.jsxs)(fv,{children:[(0,P.jsxs)(pv,{children:[(0,P.jsx)(vi,{size:15}),(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`strong`,{children:a?.deviceName||n(`This device`)}),(0,P.jsx)(mv,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,P.jsx)(hv,{children:n(`No folders are shared yet.`)}),a?.shares.map(e=>(0,P.jsxs)(gv,{children:[(0,P.jsxs)(_v,{children:[(0,P.jsx)(vv,{title:e.path,children:e.name}),(0,P.jsx)(bv,{disabled:s,onClick:()=>void u(()=>Cd(e.id)),title:n(`Stop sharing`),type:`button`,children:(0,P.jsx)(_i,{size:10})})]}),(0,P.jsx)(yv,{title:e.path,children:e.path}),(0,P.jsxs)(xv,{children:[(0,P.jsxs)(Sv,{$active:e.mode===`client`,onClick:()=>void u(()=>wd(e.id,`client`)),title:n(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,P.jsx)(vi,{size:11}),n(`App`)]}),(0,P.jsxs)(Sv,{$active:e.mode===`web`,onClick:()=>void u(()=>wd(e.id,`web`)),title:n(`Any device with a browser can open this folder.`),type:`button`,children:[(0,P.jsx)(Xi,{size:11}),n(`Web`)]})]})]},e.id)),(0,P.jsxs)(Cv,{disabled:s||e.length===0||d,onClick:()=>void u(()=>Sd(e,`client`)),title:d?n(`This folder is already shared.`):e,type:`button`,children:[(0,P.jsx)(ai,{size:12}),n(`Share this folder`)]}),a?.webRunning&&(0,P.jsxs)(wv,{children:[(0,P.jsxs)(Tv,{children:[(0,P.jsx)(Xi,{size:12}),n(`Browser access`)]}),a.urls.map(e=>(0,P.jsx)(Ev,{onClick:()=>void lt(e),type:`button`,children:e},e)),(0,P.jsx)(mv,{children:n(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var ov=_.div`
    position: relative;
    display: flex;
`,sv=_.button`
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
`,cv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${ka}
    ${Ha}
`,lv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,uv=_.span`
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
`,dv=_.button`
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
`,fv=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,pv=_.div`
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
`,mv=_.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,hv=_.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,gv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,_v=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,vv=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,yv=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,bv=_.button`
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
`,xv=_.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,Sv=_.button`
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
`,Cv=_.button`
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
`,wv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,Tv=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Ev=_.button`
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
`;function Dv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=I(),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,E.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Dc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,P.jsxs)(Ov,{ref:l,children:[(0,P.jsx)(kv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,P.jsx)(fi,{size:14}):(0,P.jsx)(di,{size:14})}),s&&(0,P.jsxs)(Av,{children:[(0,P.jsx)(jv,{children:o(`View`)}),(0,P.jsxs)(Nv,{children:[(0,P.jsxs)(Pv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,P.jsx)(di,{size:12}),` `,o(`List`)]}),(0,P.jsxs)(Pv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,P.jsx)(fi,{size:12}),` `,o(`Grid`)]})]}),(0,P.jsx)(jv,{children:o(`List icon size`)}),(0,P.jsxs)(Fv,{children:[(0,P.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,P.jsxs)(Iv,{children:[e.iconSize,`px`]})]}),(0,P.jsx)(jv,{children:o(`Grid size`)}),(0,P.jsxs)(Fv,{children:[(0,P.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,P.jsxs)(Iv,{children:[e.gridSize,`px`]})]}),(0,P.jsxs)(jv,{children:[o(`Columns`),(0,P.jsx)(bm,{}),(0,P.jsx)(Mv,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`Reset column widths`),type:`button`,children:o(`Reset widths`)})]}),Dc.map(e=>(0,P.jsxs)(Lv,{children:[(0,P.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,P.jsxs)(Lv,{children:[(0,P.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,P.jsxs)(jv,{children:[o(`Preview panel`),(0,P.jsx)(bm,{})]}),(0,P.jsxs)(Lv,{children:[(0,P.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var Ov=_.div`
    position: relative;
    display: flex;
    height: 100%;
`,kv=_.button`
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
`,Av=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${ka}
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
`,jv=_.div`
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
`,Mv=_.button`
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
`,Nv=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Pv=_.button`
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
`,Fv=_.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Iv=_.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Lv=_.label`
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
`,Rv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),zv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Bv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Vv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,P.jsx)(`path`,{d:`M2 5h6`})}),Hv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,P.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Uv=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,P.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,P.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Wv({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:ee,onToggleDetails:C,shortcuts:te,currentFolder:ne}){let re=I(),w=he(),ie=L(),[T,ae]=(0,E.useState)({left:!1,right:!1}),[D,oe]=(0,E.useState)(null),[O,se]=(0,E.useState)(null),k=(0,E.useRef)(null),ce=(0,E.useRef)(null),A=(0,E.useRef)(null),j=(0,E.useCallback)(()=>{let e=ce.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ae(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,E.useEffect)(()=>{j();let e=ce.current;if(!e)return;let t=new ResizeObserver(j);return t.observe(e),()=>t.disconnect()},[j,e.length]),(0,E.useEffect)(()=>()=>{k.current&&window.clearTimeout(k.current.timer)},[]),(0,E.useEffect)(()=>{A.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let le=e=>ce.current?.scrollBy({left:e,behavior:`smooth`}),M=()=>{k.current&&window.clearTimeout(k.current.timer),k.current=null,se(null)};return(0,P.jsxs)(Jv,{children:[(0,P.jsx)(Yv,{children:(0,P.jsx)(vi,{size:19})}),(0,P.jsxs)(Xv,{children:[T.left&&(0,P.jsx)(Qv,{onClick:()=>le(-180),title:re(`Scroll tabs left`),type:`button`,children:(0,P.jsx)(Rv,{})}),(0,P.jsx)(Zv,{onScroll:j,onWheel:e=>{let t=ce.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:ce,children:e.map(e=>(0,P.jsxs)($v,{$active:e.id===t,$dragging:D===e.id,$dropTarget:O===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Us(t.dataTransfer)||!Gv(e)||(t.preventDefault(),k.current?.id===e.id))return;M(),se(e.id);let r=window.setTimeout(()=>{n(e.id),k.current=null},500);k.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(k.current?.id===e.id||O===e.id)&&M()},onDragEnd:()=>{oe(null),M()},onDragOver:t=>{(D||Us(t.dataTransfer)&&Gv(e))&&(t.preventDefault(),Us(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>oe(e.id),onDrop:t=>{if(t.preventDefault(),D)a(D,e.id);else if(Gv(e)&&Us(t.dataTransfer)){let{paths:r,move:i}=Ws(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}oe(null),M()},onClick:()=>n(e.id),ref:e.id===t?A:void 0,title:e.path||e.title,type:`button`,children:[(0,P.jsx)(Kv,{tab:e}),(0,P.jsx)(ey,{children:e.title}),e.partner&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ty,{children:`|`}),(0,P.jsx)(qv,{place:e.partner.place}),(0,P.jsx)(ey,{children:e.partner.title})]}),(0,P.jsx)(ny,{"data-shortcut":Gt(te.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:re(`Close tab`),children:(0,P.jsx)(Bv,{})})]},e.id))}),T.right&&(0,P.jsx)(Qv,{onClick:()=>le(180),title:re(`Scroll tabs right`),type:`button`,children:(0,P.jsx)(zv,{})}),(0,P.jsx)(ry,{"data-shortcut":Gt(te.newTab),onClick:i,title:re(`New tab`),type:`button`,children:(0,P.jsx)(ai,{size:13})})]}),(0,P.jsx)(iy,{...ie}),(0,P.jsxs)(ay,{children:[(0,P.jsx)(sy,{$active:y,"data-shortcut":Gt(te.splitView),disabled:!b,onClick:x,title:re(y?`Close split view`:`Split view`),type:`button`,children:(0,P.jsx)(aa,{size:15})}),(0,P.jsx)(sy,{$active:S,disabled:!ee,onClick:C,title:re(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,P.jsx)(oa,{size:15})}),(0,P.jsxs)(oy,{$active:_,onClick:v,title:re(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,P.jsx)(Yi,{size:14}),g>0&&(0,P.jsx)(__,{children:g>9?`9+`:g})]}),(0,P.jsx)(V_,{}),(0,P.jsx)(av,{currentFolder:ne}),(0,P.jsx)(v_,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,P.jsx)(Dv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,P.jsx)(cy,{onClick:w.minimize,title:re(`Minimize`),type:`button`,children:(0,P.jsx)(Vv,{})}),(0,P.jsx)(cy,{onClick:w.toggleMaximize,title:w.maximized?re(`Restore`):re(`Maximize`),type:`button`,children:w.maximized?(0,P.jsx)(Uv,{}):(0,P.jsx)(Hv,{})}),(0,P.jsx)(ly,{onClick:w.close,title:re(`Close`),type:`button`,children:(0,P.jsx)(Bv,{})})]})]})}function Gv(e){return e.kind===`files`&&(!p(e.path)||T(e.path))}function Kv({tab:e}){switch(e.kind){case`home`:return(0,P.jsx)(Qr,{size:13});case`settings`:return(0,P.jsx)(li,{size:13});case`recycle`:return(0,P.jsx)(hi,{size:13});default:return e.archive?(0,P.jsx)(wi,{size:13}):(0,P.jsx)(qv,{place:e.place})}}function qv({place:e}){return e?(0,P.jsx)(Ss,{place:e,size:13}):(0,P.jsx)($r,{size:13})}var Jv=_.header`
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
`,Yv=_.span`
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
`,Xv=_.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Zv=_.div`
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
`,Qv=_.button`
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
`,$v=_.button`
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
`,ey=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ty=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,ny=_.span`
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
`,ry=_.button`
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
`,iy=_.div`
    flex: 1;
    min-width: 28px;
`,ay=_.div`
    display: flex;
    flex-shrink: 0;
`,oy=_.button`
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
`,sy=_.button`
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
`,cy=_.button`
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
`,ly=_(cy)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function uy(){let[e,t]=(0,E.useState)(null),n=(0,E.useRef)(null),r=(0,E.useRef)(void 0);return(0,E.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Oa.createPortal)((0,P.jsx)(dy,{tooltip:e}),document.body):null}function dy({tooltip:e}){let t=(0,E.useRef)(null),[n,r]=(0,E.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,E.useState)(()=>e.bottom+6);return(0,E.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,P.jsxs)(fy,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,P.jsx)(py,{children:e.text}),e.shortcut&&(0,P.jsx)(my,{children:e.shortcut})]})}var fy=_.div`
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
    ${Ua}
`,py=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,my=_.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,hy={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function gy({deviceName:e,code:t,onAccept:n,onReject:r}){let i=I(),a=(0,E.useRef)(null);return(0,E.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Oa.createPortal)((0,P.jsx)(_y,{children:(0,P.jsxs)(vy,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsxs)(yy,{children:[(0,P.jsx)(Ji,{size:15}),i(`Pair for sharing`)]}),(0,P.jsx)(by,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,P.jsx)(xy,{children:t}),(0,P.jsx)(Sy,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,P.jsxs)(Cy,{children:[(0,P.jsx)(wy,{onClick:r,type:`button`,children:i(`Reject`)}),(0,P.jsx)(Ty,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var _y=_.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Ua}
`,vy=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Ra}
`,yy=_.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,by=_.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,xy=_.div`
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
`,Sy=_.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Cy=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,wy=_.button`
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
`,Ty=_(wy)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Ey=0,Dy=new Set;function Oy(e){Dy.add(e),N.send({type:`app.navigate.done`,payload:{path:e}})}var ky=20,Ay=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function jy(e){return e.history[e.index]??hp(`home`)}function My(e){return gp(jy(e))??`files`}function Ny(e){let t=jy(e);return gp(t)?``:e.listing?.path||t}function Py(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||My(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Fy(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Iy(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||ye.iconSize,gridSize:e.view?.gridSize||t.gridSize||ye.gridSize,sort:e.view?.sort??ye.sort,sortDescending:e.view?.sortDescending??ye.sortDescending,columns:t.columns??be.columns??[]}}function Ly(e=hp(`home`)){return Ey+=1,{id:`tab-${Ey}`,listing:null,loading:!gp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Ry(e){return e instanceof Error?e.message:String(e)}function zy(e){let t=jd(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return Md(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function By(e){let t=v(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Vy(e){return p(e)?Xt(e):void 0}function Hy(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:f(n)})}function Uy(){let e=I(),[n,r]=(0,E.useState)(()=>[Ly()]),[i,a]=(0,E.useState)(()=>n[0].id),[o,s]=(0,E.useState)(null),[d,f]=(0,E.useState)(()=>{let e=In(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[m,h]=(0,E.useState)([]),[g,_]=(0,E.useState)([]),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(null),[te,ne]=(0,E.useState)(null),re=ge(),[w,ie]=(0,E.useState)(gn),[ae,D]=(0,E.useState)(0),[oe,O]=(0,E.useState)(0),[se,k]=(0,E.useState)(gn),[ce,A]=(0,E.useState)(0),[j,le]=(0,E.useState)(0),[M,ue]=(0,E.useState)(0),[de,fe]=(0,E.useState)(0),F=(0,E.useRef)(de);F.current=de;let[pe,me]=(0,E.useState)([]),[he,L]=(0,E.useState)(10),[R,z]=(0,E.useState)(null),B=(0,E.useMemo)(()=>(R?.favorites??[]).map(e=>l(e.path)),[R?.favorites]),[xe,Ee]=(0,E.useState)(0),[H,Me]=(0,E.useState)(Bt),[Ne,Pe]=(0,E.useState)(0),[Fe,Ie]=(0,E.useState)(0),[Le,Re]=(0,E.useState)(0),[ze,Ve]=(0,E.useState)(!0),[Ue,We]=(0,E.useState)(()=>{let e=In(`yafm.preview.width`,320);return e>=220?e:320}),[Ge,qe]=(0,E.useState)(null),[Je,Xe]=(0,E.useState)(null),[Ze,Qe]=(0,E.useState)(`primary`),[$e,et]=(0,E.useState)(null),[tt,it]=(0,E.useState)(null),[at,ct]=(0,E.useState)(null),[lt,U]=(0,E.useState)(null),[ut,dt]=(0,E.useState)({primary:0,secondary:0}),[ft,pt]=(0,E.useState)({primary:null,secondary:null}),[mt,ht]=(0,E.useState)(null),[_t,St]=(0,E.useState)([]),[wt,Tt]=(0,E.useState)(!1),Et=(0,E.useRef)([]),Ot=(0,E.useRef)([]),[kt,At]=(0,E.useState)([]),[jt,Mt]=(0,E.useState)(!1),G=(0,E.useMemo)(()=>jt?new Set(kt.map(e=>e.path)):new Set,[kt,jt]),[Ft,It]=(0,E.useState)(!1),[Vt,Kt]=(0,E.useState)([]),[Jt,Yt]=(0,E.useState)(null),en=(0,E.useRef)(0),[tn,nn]=(0,E.useState)(()=>{let e=Rn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Fy({x:e.x,y:e.y}):Fy({x:Math.max(20,window.innerWidth-340),y:110})}),rn=(0,E.useCallback)(()=>{nn(e=>Fy(e)),It(!0)},[]),K=n.find(e=>e.id===i)??n[0],q=My(K),sn=jy(K),cn=Ny(K),J=q===`files`?K.listing?.parent??zy(cn):null,ln=K.splitWith?n.find(e=>e.id===K.splitWith):void 0,un=q===`files`&&ln!==void 0,dn=ln?Ny(ln):``,fn=ln?ln.listing?.parent??zy(dn):null,pn=un&&ln&&Ze===`secondary`?ln:K,mn=R?.defaultView??be,hn=Iy(pn,mn);(0,E.useEffect)(()=>{ee(R?.accentColor,R?.secondaryColor)},[R?.accentColor,R?.secondaryColor]),(0,E.useEffect)(()=>{wm(R?.fonts)},[R?.fonts]),(0,E.useEffect)(()=>{C(R?.timeFormat,R?.timeFormatPattern)},[R?.timeFormat,R?.timeFormatPattern]),(0,E.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!R?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[R?.backgroundSource]),(0,E.useEffect)(()=>(ve(e=>new Promise(t=>{Yt({id:++en.current,prompt:e,resolve:t})})),()=>ve(null)),[]),(0,E.useEffect)(()=>{Qe(`primary`)},[i]),(0,E.useEffect)(()=>{k(gn),le(0),ue(0)},[q]),(0,E.useEffect)(()=>{le(0)},[se.query,se.matchCase,se.regex]),(0,E.useEffect)(()=>{le(e=>M===0?0:Math.min(e,M-1))},[M]);let _n=hn.columns.includes(`linkCount`),vn=(0,E.useMemo)(()=>{let e={},t=ys(R),n={};for(let[e,t]of Object.entries(R?.placeNames??{}))n[l(e)]=t;for(let t of m)e[l(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=l(t),i=m.find(e=>l(e.path)===r);e[r]={name:n[r]??i?.name??(v(t)||t),path:t,kind:`folder`,icon:i?.icon??R?.placeIcons?.[t]??null}}return e},[m,R]),yn=(0,E.useMemo)(()=>({places:vn,useIcons:R?.systemIcons===!1}),[vn,R?.systemIcons]),bn=R?.defaultView?.showImages??!0,xn=R?.defaultView?.imageStripHeight??be.imageStripHeight,Sn=q===`home`?(0,P.jsx)(Ni,{size:13}):q===`settings`?(0,P.jsx)(li,{size:13}):q===`recycle`?(0,P.jsx)(hi,{size:13}):q===`gallery`?(0,P.jsx)(xi,{size:13}):void 0,Cn=w.open&&w.query.length>0,wn=(0,E.useMemo)(()=>Cn&&pn.listing?pn.listing.entries.filter(e=>Tn(e.isDirectory?Fn(yn,e.fullPath,e.name):e.name,w)).map(e=>e.fullPath):[],[Cn,w,pn.listing,yn]);(0,E.useEffect)(()=>{D(0)},[w.query,w.matchCase,w.regex,pn.listing?.path]);let En=wn.length===0?-1:Math.min(ae,wn.length-1),Dn=(0,E.useCallback)(()=>{ie(e=>({...e,open:!1,query:``})),D(0)},[]),On=(0,E.useCallback)(()=>{ie(e=>({...e,open:!0})),O(e=>e+1)},[]),kn=(0,E.useCallback)(()=>{k(e=>({...e,open:!0})),A(e=>e+1)},[]),An=(0,E.useCallback)(()=>{k(gn),le(0),ue(0)},[]),jn=(0,E.useCallback)(e=>{le(t=>M===0?0:(Math.min(t,M-1)+e+M)%M)},[M]),Nn=(0,E.useCallback)(e=>{ie(t=>({...t,open:!0,query:t.open?t.query+e:e})),O(e=>e+1)},[]),Bn=(0,E.useCallback)(e=>{D(t=>wn.length===0?0:(Math.min(t,wn.length-1)+e+wn.length)%wn.length)},[wn.length]),Vn=(0,E.useRef)({tabs:n,activeId:i,activePane:Ze});Vn.current={tabs:n,activeId:i,activePane:Ze};let Hn=(0,E.useRef)(R);Hn.current=R;let Un=(0,E.useRef)(!1),Wn=(0,E.useRef)([]),Gn=(0,E.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Kn=(0,E.useRef)(new Map),qn=(0,E.useCallback)(e=>{let t=(Kn.current.get(e)??0)+1;return Kn.current.set(e,t),()=>Kn.current.get(e)===t},[]),Jn=(0,E.useCallback)((e,t)=>{N.available&&t&&e===Py(Vn.current)&&N.send({type:`fs.focus`,payload:{path:t}})},[]),Yn=(0,E.useCallback)(async(e,t,n)=>{if(!(t&&Ad(t)))try{let r=await ke(t,_n);if(!n()||!r.listing)return;Gn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[_n,Gn]),Xn=(0,E.useCallback)(async(e,n,r=!1)=>{let i=qn(e);Dn(),Jn(e,n);let a=!r||!Vn.current.tabs.find(t=>t.id===e)?.listing,o=!r&&n!==void 0;Gn(e,e=>{if(!o)return{listing:r?e.listing:null,loading:!0,error:null,fresh:r&&e.fresh};let i=e.history[e.index],a=i!==void 0&&t(i,n);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),n],index:a?e.index:e.index+1}});try{a&&Yn(e,n,i);let t=n&&Ad(n)?await Nd(n):await Se(n,!0,_n,F.current,n?Vy(n):void 0);if(!i())return;Gn(e,e=>({listing:t,view:t.view??null,loading:!1,fresh:!1,history:o?e.history.map((n,r)=>r===e.index?t.path:n):e.history,index:e.index})),!r&&!Ad(t.path)&&He(t.path).then(()=>Ee(e=>e+1))}catch(t){if(!i())return;let a=Vn.current.tabs.find(t=>t.id===e),o=n&&n.length>0?n:a?Ny(a):``,s=zy(o),c=Ry(t);if(o&&$t(c)){let t=u(o),a=await va(t,!!Xt(t));if(a){Zt(t,a),i()&&Xn(e,n,r);return}}Gn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...r?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[qn,_n,Gn,Jn,Dn,Yn]),Zn=(0,E.useCallback)((e,t)=>{let n=_p(t);n&&(gp(n)?(Dn(),qn(e),Gn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Xn(e,n))},[qn,Xn,Gn,Dn]),Qn=(0,E.useCallback)(async(e,t,n)=>{if(Dn(),gp(t)){qn(e),Gn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=qn(e);Jn(e,t),Gn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Ad(t)||Yn(e,t,r);let n=Ad(t)?await Nd(t):await Se(t,!0,_n,F.current,Vy(t));if(!r())return;Gn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if($t(Ry(i))){let i=u(t),a=await va(i,!!Xt(i));if(a){Zt(i,a),r()&&Qn(e,t,n);return}}Gn(e,()=>({listing:{path:t,parent:zy(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Ry(i)}))}},[qn,_n,Gn,Jn,Dn,Yn]),$n=(0,E.useCallback)((e,t=!0)=>{let n=Ly(e??hp(`home`));return r(e=>[...e,n]),t&&a(n.id),e&&!gp(e)&&Xn(n.id,e),n.id},[Xn]),er=(0,E.useCallback)(e=>{for(let n of Vn.current.tabs)My(n)===`files`&&t(Ny(n),e)&&Xn(n.id,e,!0)},[Xn]),tr=(0,E.useCallback)((e,n)=>{let r=v(n);for(let i of Vn.current.tabs)i.listing?.entries.some(n=>t(n.fullPath,e))&&Gn(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>t(i.fullPath,e)?{...i,name:r,fullPath:n}:i);return{listing:{...a,entries:o}}})},[Gn]),nr=(0,E.useRef)([]);(0,E.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&p(n)&&e.add(l(u(n)))}let t=nr.current.filter(t=>!e.has(t));nr.current=[...e],t.length>0&&Te(t)},[n]);let rr=(0,E.useCallback)((e,t=!1)=>{t?$n(hp(e)):Zn(Vn.current.activeId,hp(e))},[$n,Zn]),ir=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Vn.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(Ot.current.push(jy(i)),Ot.current.length>ky&&Ot.current.shift()),o.length===0){let e=Ly();r([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);r(o),n===e&&a(o[Math.min(s,o.length-1)].id)},[]),ar=(0,E.useCallback)(()=>{let e=Ot.current.pop();if(!e)return;let t={...Ly(e),fresh:!1};r(e=>[...e,t]),a(t.id),My(t)===`files`&&Xn(t.id,Ny(t))},[Xn]),or=(0,E.useCallback)((e,t=!1)=>{t?$n(e):Zn(Py(Vn.current),e??hp(`home`))},[Zn,$n]),sr=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Vn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),cr=(0,E.useCallback)(()=>{let{tabs:e,activeId:t}=Vn.current,n=e.find(e=>e.id===t);if(!n||My(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),Gn(t,()=>({splitWith:void 0})),Qe(`primary`);return}let a=Ny(n),o={...Ly(a),hidden:!0};r(e=>[...e,o]),Gn(t,()=>({splitWith:o.id})),Xn(o.id,a),Qe(`primary`)},[Xn,Gn]),lr=(0,E.useCallback)(e=>{We(e),Ln(`yafm.preview.width`,e)},[]),ur=un?Ze===`secondary`?Je??Ge:Ge??Je:Ge,dr=(0,E.useRef)(null),fr=e=>{e.preventDefault();let t=dr.current?.getBoundingClientRect();if(!t)return;let n=ze?Ue:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);f(n),Ln(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},pr=(e,t,n)=>{t&&et({x:e.clientX,y:e.clientY,directory:t,refresh:n})},mr=(0,E.useCallback)((e,t)=>{dt(n=>n[e]===t?n:{...n,[e]:t})},[]),hr=(0,E.useCallback)(e=>mr(`primary`,e),[mr]),gr=(0,E.useCallback)(e=>mr(`secondary`,e),[mr]),_r=(e,t)=>{ut[e]!==0&&pt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},vr=async(e,t=!1)=>{let n=$e;if(et(null),!n)return;let r=e===null?await Ct(n.directory,t):await Dt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Dn(),ht(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},yr=(0,E.useCallback)(()=>{let{tabs:e}=Vn.current,t=e.find(e=>e.id===Py(Vn.current));t&&t.index>0&&Qn(t.id,t.history[t.index-1],t.index-1)},[Qn]),br=(0,E.useCallback)(()=>{let{tabs:e}=Vn.current,t=e.find(e=>e.id===Py(Vn.current));t&&t.index<t.history.length-1&&Qn(t.id,t.history[t.index+1],t.index+1)},[Qn]),xr=(0,E.useCallback)(()=>{let{tabs:e}=Vn.current,t=e.find(e=>e.id===Py(Vn.current));t&&My(t)===`files`&&t.listing?.parent&&or(t.listing.parent)},[or]),Sr=(0,E.useRef)(null),Cr=(0,E.useCallback)(()=>{for(let e of Vn.current.tabs)e.listing&&Xn(e.id,e.listing.path,!0)},[Xn]),wr=(0,E.useCallback)(e=>{e.length!==0&&(Kt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),rn())},[rn]),Tr=(0,E.useCallback)(async e=>{let t=await W(e);t.length!==0&&wr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[wr]),Er=(0,E.useCallback)(e=>{let t=new Set(e);Kt(e=>e.filter(e=>!t.has(e.path)))},[]),Dr=(0,E.useCallback)(async e=>{let t=Hn.current;if(!t)return;let n=await W(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>l(e.path))),i=n.filter(e=>!r.has(l(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};z(a),await nt(a),Pe(e=>e+1)},[]),Or=(0,E.useCallback)(async e=>{let t=Hn.current;if(!t)return;let n=new Set(e.map(l)),r=(t.favorites??[]).filter(e=>!n.has(l(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};z(i),await nt(i),Pe(e=>e+1)},[]),kr=(0,E.useCallback)(()=>Kt([]),[]),Ar=(0,E.useRef)(-1),jr=(0,E.useCallback)(e=>{At(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Mt(e.move),e.entries.length>0&&rn()},[rn]),Mr=(0,E.useCallback)(async()=>{if(N.available)try{let e=await vt();Ar.current=e.sequence,jr(e)}catch{}},[jr]),Nr=(0,E.useCallback)(async e=>{e.length!==0&&await gt(e,!1)&&await Mr()},[Mr]),Pr=(0,E.useRef)(Vt);Pr.current=Vt,(0,E.useEffect)(()=>{let e=e=>{Us(e.dataTransfer)&&rn()},t=e=>{Us(e.dataTransfer)&&rn()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[rn]),(0,E.useEffect)(()=>{let e=()=>nn(e=>Fy(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Fr=(0,E.useCallback)(async()=>{let e=Pr.current;if(e.length>0){let t=await W(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Kt(e=>e.filter(e=>n.has(e.path)))}await Mr()},[Mr]),Ir=(0,E.useCallback)(()=>{Fr(),Re(e=>e+1),Cr()},[Fr,Cr]),Lr=(0,E.useCallback)(e=>{let t=Fy(e);nn(t),zn(`yafm.tray.position`,t)},[]),Rr=(0,E.useCallback)(()=>{Ft?It(!1):rn()},[rn,Ft]),zr=(0,E.useCallback)(async(t,n,r)=>{let i=await yt(t,n,r);i.ok?(r&&Er(t),Re(e=>e+1),Cr(),Mr()):ga(i.error??e(`The files could not be transferred.`))},[Cr,Mr,Er]);(0,E.useEffect)(()=>{if(N.available)return Rt().then(e=>{Et.current=e,St(e)},()=>void 0),N.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Et.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Et.current=n,St(n),r&&Tt(!0)})},[]);let Br=(0,E.useCallback)(()=>{zt().then(()=>Rt().then(e=>{Et.current=e,St(e)},()=>void 0))},[]);(0,E.useEffect)(()=>{if(!N.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await vt();if(!e||t.sequence===Ar.current)return;Ar.current=t.sequence,jr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[jr]);let Vr=(0,E.useCallback)(async e=>{let t=e?await Nt():await Pt();t.ok?(Re(e=>e+1),Cr()):t.error&&!t.error.startsWith(`Nothing to`)&&ga(t.error)},[Cr]),Hr=(0,E.useRef)(_n);(0,E.useEffect)(()=>{Hr.current!==_n&&(Hr.current=_n,Cr())},[_n,Cr]);let Ur=(0,E.useCallback)((e,t)=>{let{tabs:n}=Vn.current,r=n.find(t=>t.id===e);if(!r||My(r)!==`files`)return;let i=Ny(r),a=Hn.current?.defaultView??be,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||ye.iconSize,gridSize:r.view?.gridSize||a.gridSize||ye.gridSize,sort:r.view?.sort??ye.sort,sortDescending:r.view?.sortDescending??ye.sortDescending,...t};Gn(e,()=>({view:o})),Sr.current!==null&&window.clearTimeout(Sr.current),Sr.current=window.setTimeout(()=>{Sr.current=null,De(i,o)},250)},[Gn]),Wr=(0,E.useCallback)(e=>{Ur(Py(Vn.current),e)},[Ur]),Gr=(0,E.useCallback)(e=>{let t=Hn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,columns:e}};z(n),nt(n)},[]),Kr=(0,E.useCallback)(e=>{let t=Hn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,showImages:e}};z(n),nt(n)},[]),qr=(0,E.useCallback)(e=>{let t=Hn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,imageStripHeight:e}};z(n),nt(n)},[]),Jr=(0,E.useCallback)((e,t,n,r)=>{let i=Vn.current.tabs.find(t=>t.id===e);if(!i||My(i)!==`files`||!i.listing)return;let a=Ny(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Gn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Oe(a,t,n,r)},[Gn]),Yr=(0,E.useCallback)((e,t)=>{let n=Vn.current.tabs.find(t=>t.id===e);if(!n)return;let r=Iy(n,Hn.current?.defaultView??be);Ur(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Ur]),Xr=(0,E.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Zr=(0,E.useCallback)(()=>{Ae().then(h,()=>h([]))},[]),Y=(0,E.useCallback)(e=>{let t=(e.openTabs??[]).map(_p).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...Ly(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),a(n[i].id);for(let e of n)My(e)===`files`&&Xn(e.id,Ny(e),!0);return!0},[Xn]),Qr=(0,E.useCallback)(e=>{let t=Wn.current;if(Wn.current=[],t.length===0)return;let n=t.filter(e=>!Dy.has(e));for(let e of t)n.includes(e)||Oy(e);if(n.length===0)return;let{tabs:r}=Vn.current;if(!e&&r.length===1&&r[0].fresh){Zn(r[0].id,n[0]),Oy(n[0]);for(let e of n.slice(1))$n(e),Oy(e);return}let i=n.map(e=>{let t=$n(e);return Oy(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[$n,Zn]),$r=(0,E.useCallback)(()=>{Ye().then(e=>{z(e),L(e.recentLimit);let t={...Bt,...e.shortcuts};Me(t),Ht(t.openInNewTab),Pe(e=>e+1),Un.current||(Un.current=!0,Qr(e.restoreTabs&&Y(e)))},()=>{L(10),Un.current=!0,Qr(!1)})},[Qr,Y]),ei=(0,E.useCallback)(()=>{Be().then(me,()=>me([]))},[]),ti=(0,E.useCallback)(()=>{je().then(_,()=>_([]))},[]),ii=n.filter(e=>!e.hidden),ci=ii.map(jy),ui=ci.join(`
`),di=Math.max(ii.findIndex(e=>e.id===i),0);(0,E.useEffect)(()=>{if(!R?.restoreTabs)return;let e=setTimeout(()=>void rt(ci,di),700);return()=>clearTimeout(e)},[ui,di,R?.restoreTabs]),(0,E.useEffect)(()=>{let{tabs:e,activeId:t}=Vn.current,n=e.find(e=>e.id===t);n&&n.fresh&&My(n)===`files`&&Xn(n.id,Ny(n),!0),Zr(),$r(),ti(),ot().then(b,()=>b(null))},[Xn,Zr,$r,ti]),(0,E.useEffect)(()=>{if(st().then(S,()=>S(null)),N.available)return N.on(e=>{let t=e;t.type===`app.update`&&t.data&&S(t.data)})},[]),(0,E.useEffect)(()=>{if(N.available)return N.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&s({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&ga(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&ga(n.data.error??e(`Pairing failed.`))}})},[e]),(0,E.useEffect)(()=>{let e=setInterval(ti,3e4);return()=>clearInterval(e)},[ti]),(0,E.useEffect)(()=>{q===`home`&&(ei(),ti())},[q,K.id,ei,ti]),(0,E.useEffect)(()=>{if(!N.available)return;let e=N.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Vn.current,i=t.data.startup===!0;i&&Dy.has(n)?Oy(n):i&&!Un.current?Wn.current.includes(n)||Wn.current.push(n):(i&&r.length===1&&r[0].fresh?Zn(r[0].id,n):gp(n)?Zn(Py(Vn.current),n):$n(n),i&&Oy(n))});return N.send({type:`app.ready`}),e},[Zn,$n]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},r})})},[]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},r})})},[]),(0,E.useEffect)(()=>{let e=e=>{if(qt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),yr();return}if(e.key===`BrowserForward`){e.preventDefault(),br();return}if(e.key===`Escape`&&w.open){e.preventDefault(),Dn();return}let t=Wt(e);if(t===H.closeTab)e.preventDefault(),ir(Py(Vn.current));else if(t===H.newTab)e.preventDefault(),$n();else if(t===H.reopenTab)e.preventDefault(),ar();else if(t===H.goBack)e.preventDefault(),yr();else if(t===H.goForward)e.preventDefault(),br();else if(t===H.goUp)e.preventDefault(),xr();else if(t===H.find)e.preventDefault(),q===`files`?On():kn();else if(t===H.location)e.preventDefault(),Ie(e=>e+1);else if(t===H.home){e.preventDefault();let t=m.find(e=>e.kind===`home`)?.path;t&&or(t)}else t===H.iconsView?(e.preventDefault(),q===`files`&&Wr({mode:`grid`})):t===H.detailsView?(e.preventDefault(),q===`files`&&Wr({mode:`list`})):t===H.nextTab?(e.preventDefault(),sr(1)):t===H.previousTab?(e.preventDefault(),sr(-1)):t===H.hidden||t===`alt+.`?(e.preventDefault(),Ke().then(()=>{Re(e=>e+1),Cr()})):t===H.undo?(e.preventDefault(),Vr(!0)):t===H.redo?(e.preventDefault(),Vr(!1)):t===H.splitView?(e.preventDefault(),cr()):q!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Nn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[H,q,w.open,ir,ar,$n,yr,br,xr,On,kn,Dn,Nn,Wr,sr,or,m,Cr,Vr,cr]),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),yr()):e.button===4&&(e.preventDefault(),br())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[yr,br]);let fi=(0,E.useMemo)(()=>{let e=new Set;for(let t of n){if(My(t)!==`files`)continue;let n=Ny(t);if(n&&!Ad(n)){if(p(n)){let t=zy(u(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),pi=fi.join(`\0`);(0,E.useEffect)(()=>{N.available&&N.send({type:`fs.watch`,payload:{paths:fi,owner:`app`}})},[pi,i]);let mi=My(pn)===`files`?Ny(pn):``;(0,E.useEffect)(()=>{N.available&&N.send({type:`fs.focus`,payload:{path:mi||null}})},[mi]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let n=e;if(n.type!==`fs.changed`||typeof n.data?.path!=`string`)return;let r=n.data.path,i=Vn.current.tabs.filter(e=>My(e)===`files`&&t(Ny(e),r)),a=Vn.current.tabs.filter(e=>{let n=Ny(e);return My(e)===`files`&&n.length>0&&p(n)&&t(u(n),r)});if(i.length!==0||a.length!==0){on(r);for(let e of a){let n=Vn.current.tabs.find(t=>t.id===e.id),i=n?Ny(n):``;n&&My(n)===`files`&&!n.loading&&p(i)&&t(u(i),r)&&Xn(e.id,i,!0)}i.length!==0&&Se(r,!1,_n).then(e=>{for(let n of i){let r=Vn.current.tabs.find(e=>e.id===n.id);r&&My(r)===`files`&&t(Ny(r),e.path)&&(r.loading?window.setTimeout(()=>{let r=Vn.current.tabs.find(e=>e.id===n.id);r&&!r.loading&&My(r)===`files`&&t(Ny(r),e.path)&&Gn(n.id,()=>({listing:e}))},300):Gn(n.id,()=>({listing:e})))}},()=>void 0)}})},[_n,Xn,Gn]);let gi=K.index>0,_i=K.index<K.history.length-1,vi=(e,n)=>{let r=Iy(e,mn),i=e.listing?.path??e.history[e.index]??``,a=p(i),o=a&&T(i);return(0,P.jsx)(Ic,{confirmDelete:R?.confirmDelete??!1,cutPaths:G,previewVideoAudio:R?.previewVideoAudio??!1,previewVideoAutoplay:R?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:n?qe:Xe,onActivate:()=>Qe(n?`primary`:`secondary`),enableShortcuts:(!un||(n?Ze===`primary`:Ze===`secondary`))&&(!a||o),error:e.error,find:e.id===pn.id?{...w,currentPath:En<0?null:wn[En]}:void 0,imageStripHeight:xn,listing:e.listing,loading:e.loading,onImageStripHeight:qr,readOnly:a&&!o||Ad(e.listing?.path??``),onOpen:(t,n)=>{n?$n(t):Xn(e.id,t)},onOpenFile:(t,n)=>{Ad(t)?Fd(t).catch(e=>void ga(Ry(e))):c(t)?R?.archiveHandler??!1?n?$n(t):Xn(e.id,t):V(t):p(t)?(async()=>{let e=await we(t,F.current,Vy(t));if(!e.path&&$t(e.error)){let n=u(t),r=Xt(n);r&&Qt(n);let i=await va(n,!!r);i&&(Zt(n,i),e=await we(t,F.current,i))}e.path?V(e.path):e.error&&ga(e.error)})():V(t)},onRefresh:()=>{let t=e.listing?.path;t&&er(t)},onRename:tr,onSelectionCountChange:n?hr:gr,onSetTags:(t,n,r)=>Jr(e.id,t,n,r),selectionMenuRequest:n?ft.primary:ft.secondary,onSort:t=>Yr(e.id,t),onPaste:Ir,onClipboardChanged:()=>void Mr(),onTransfer:zr,onAddToTray:e=>void Tr(e),onAddFavorite:e=>void Dr(e),onRemoveFavorite:e=>void Or(e),favoritePaths:B,onExtractArchive:(e,t)=>void Ei(e,t),openOnSingleClick:R?.openOnSingleClick??!1,pendingRename:mt&&n===(Ze===`primary`)&&t(mt.directory,e.listing?.path??``)?mt.path:null,pendingRenameToken:mt?.token??0,refreshToken:Le,shortcuts:H,showCheckboxes:R?.showCheckboxes??!0,showImages:bn,view:r})},yi=w.open&&(0,P.jsx)(ld,{current:En,focusToken:oe,matchCase:w.matchCase,mode:w.mode,onClose:Dn,onMatchCase:()=>ie(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ie(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Bn(1),onPrevious:()=>Bn(-1),onQuery:e=>ie(t=>({...t,query:e})),onRegex:()=>ie(e=>({...e,regex:!e.regex})),query:w.query,regex:w.regex,total:wn.length}),bi=q===`files`&&p(cn),Si=bi&&T(cn),Ci=bi&&K.listing?.archiveEncrypted===!0,Ti=async(t,n)=>{let r=u(t),i=await Ce(r,n,F.current,Vy(r));if(!i.ok&&$t(i.error)){let e=Xt(r);e&&Qt(r);let t=await va(r,!!e);t&&(Zt(r,t),i=await Ce(r,n,F.current,t))}i.ok?(er(n),an(),Xn(K.id,n,!0)):ga(`${e(`Could not extract the archive.`)}${i.error?`\n${i.error}`:``}`)},Ei=async(e,n)=>{let r=u(e),i=zy(r);if(!i)return;if(n===`choose`){let e=await da(i);e&&await Ti(r,e);return}let a=n===`named`;if(n===`auto`){let e=t(r,cn)?K.listing?.entries??[]:(await Se(r,!1,!1,F.current,Vy(r))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${By(r)}`:i;await Ti(r,s)},Di=async e=>{bi&&await Ei(cn,e)},Oi=async()=>{bi&&await Ei(cn,`choose`)},ki=(0,P.jsxs)(Jy,{children:[(0,P.jsx)(Yy,{"data-shortcut":Gt(H.goBack),disabled:!gi,onClick:e=>{K.index>0&&Ut(e)?$n(K.history[K.index-1]):yr()},title:e(`Back`),type:`button`,children:(0,P.jsx)(oi,{})}),(0,P.jsx)(Yy,{"data-shortcut":Gt(H.goForward),disabled:!_i,onClick:e=>{K.index<K.history.length-1&&Ut(e)?$n(K.history[K.index+1]):br()},title:e(`Forward`),type:`button`,children:(0,P.jsx)(si,{})}),(0,P.jsx)(Yy,{"data-shortcut":Gt(H.goUp),disabled:q!==`files`||!J,onClick:e=>{J&&(Ut(e)?$n(J):or(J))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(ri,{})}),(0,P.jsx)(vp,{focusToken:Fe,icon:Sn,label:q===`files`?void 0:e(hy[q]),onContextMenu:q===`files`?(e,t,n)=>ct({x:t,y:n,path:e}):void 0,onNavigate:or,path:q===`files`?cn:sn}),q===`files`&&(!bi||Si)&&(0,P.jsx)(Yy,{onClick:e=>pr(e,cn,()=>void Xn(K.id,cn,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(ai,{})}),(0,P.jsx)(Yy,{"data-shortcut":Gt(H.find),onClick:kn,title:e(`Search`),type:`button`,children:(0,P.jsx)(ni,{})}),ut.primary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Qy,{}),(0,P.jsx)(Yy,{onClick:e=>_r(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(sa,{})})]}),bi&&(0,P.jsxs)(Xy,{children:[(0,P.jsx)(Qy,{}),Ci&&(0,P.jsxs)(Zy,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(ca,{size:12}),e(`Encrypted`)]}),(0,P.jsx)(Yy,{onClick:()=>void Oi(),onContextMenu:e=>{e.preventDefault(),it({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,P.jsx)(wi,{})}),(0,P.jsx)(oo,{icon:(0,P.jsx)(Xi,{size:15}),onChange:e=>{let t=Number(e);fe(t),F.current=t,bi&&Xn(K.id,cn,!0)},options:Ay.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(Ay.find(e=>e.value===String(de))?.label??`Auto`)}`,value:String(de)})]})]}),Ai=se.open?{...se,index:j}:null;return(0,P.jsx)(Mn,{value:yn,children:(0,P.jsxs)(Wy,{$rounded:re,children:[(0,P.jsx)(Eu,{settings:R}),(0,P.jsx)(Wv,{activeId:K.id,onClose:ir,onNewTab:()=>$n(),onReorder:Xr,onTransferToTab:zr,onSelect:a,onViewChange:Wr,onColumns:Gr,onShowImages:Kr,showImages:bn,tasks:_t,onClearTasks:Br,activityOpen:wt,onActivityOpenChange:Tt,trayCount:Vt.length+kt.length,trayVisible:Ft,onToggleTray:Rr,split:un,canSplit:q===`files`,onToggleSplit:cr,details:ze,canDetails:q===`files`||q===`recycle`||q===`gallery`,onToggleDetails:()=>Ve(e=>!e),currentFolder:q===`files`&&!Ad(cn)?cn:``,shortcuts:H,view:hn,tabs:n.filter(e=>!e.hidden).map(t=>{let r=My(t),i=Ny(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Ny(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Pn(yn,i):void 0,archive:r===`files`&&p(i),split:!!a,title:r===`files`?Fn(yn,i,v(i)||e(`Files`)):e(hy[r]),partner:a?{title:Fn(yn,o,v(o)||e(`Files`)),place:Pn(yn,o)}:void 0}})}),(0,P.jsxs)(Gy,{children:[(0,P.jsx)($g,{activeKind:q,currentPath:q===`files`?sn:``,drives:g,historyVersion:xe,onNavigate:or,onOpenView:rr,homePath:m.find(e=>e.kind===`home`)?.path??``,places:m,recent:pe,recentLimit:he,version:Ne}),(0,P.jsxs)(Ky,{children:[q!==`files`&&ki,(0,P.jsxs)(qy,{children:[q!==`files`&&se.open&&(0,P.jsx)(ld,{current:j,focusToken:ce,matchCase:se.matchCase,mode:se.mode,onClose:An,onMatchCase:()=>k(e=>({...e,matchCase:!e.matchCase})),onMode:()=>k(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>jn(1),onPrevious:()=>jn(-1),onQuery:e=>k(t=>({...t,query:e})),onRegex:()=>k(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:se.query,regex:se.regex,total:M}),q===`files`?un&&ln?(0,P.jsxs)(eb,{ref:dr,children:[(0,P.jsxs)(tb,{style:{flex:d},children:[(0,P.jsxs)($y,{$active:Ze===`primary`,onPointerDown:()=>Qe(`primary`),children:[(0,P.jsx)(Yy,{"data-shortcut":Gt(H.goBack),disabled:!gi,onClick:e=>{let t=K.index-1;t<0||(Ut(e)?$n(K.history[t]):Qn(K.id,K.history[t],t))},title:e(`Back`),type:`button`,children:(0,P.jsx)(oi,{})}),(0,P.jsx)(Yy,{"data-shortcut":Gt(H.goForward),disabled:!_i,onClick:e=>{let t=K.index+1;t>=K.history.length||(Ut(e)?$n(K.history[t]):Qn(K.id,K.history[t],t))},title:e(`Forward`),type:`button`,children:(0,P.jsx)(si,{})}),(0,P.jsx)(Yy,{"data-shortcut":Gt(H.goUp),disabled:!J,onClick:e=>{J&&(Ut(e)?$n(J):Xn(K.id,J))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(ri,{})}),(0,P.jsx)(vp,{focusToken:Ze===`primary`?Fe:void 0,onContextMenu:(e,t,n)=>ct({x:t,y:n,path:e}),onNavigate:(e,t)=>t?$n(e):void Xn(K.id,e),path:cn}),(0,P.jsx)(Yy,{onClick:e=>pr(e,cn,()=>void Xn(K.id,cn,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(ai,{})}),(0,P.jsx)(Yy,{"data-shortcut":Gt(H.find),onClick:On,title:e(`Search`),type:`button`,children:(0,P.jsx)(ni,{})}),ut.primary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Qy,{}),(0,P.jsx)(Yy,{onClick:e=>_r(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(sa,{})})]})]}),vi(K,!0),Ze===`primary`&&yi]}),(0,P.jsx)(nb,{onDoubleClick:()=>f(.5),onPointerDown:fr,title:e(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(tb,{$enter:!0,style:{flex:1-d},children:[(0,P.jsxs)($y,{$active:Ze===`secondary`,onPointerDown:()=>Qe(`secondary`),children:[(0,P.jsx)(Yy,{"data-shortcut":Gt(H.goBack),disabled:ln.index<=0,onClick:e=>{let t=ln.index-1;t<0||(Ut(e)?$n(ln.history[t]):Qn(ln.id,ln.history[t],t))},title:e(`Back`),type:`button`,children:(0,P.jsx)(oi,{})}),(0,P.jsx)(Yy,{"data-shortcut":Gt(H.goForward),disabled:ln.index>=ln.history.length-1,onClick:e=>{let t=ln.index+1;t>=ln.history.length||(Ut(e)?$n(ln.history[t]):Qn(ln.id,ln.history[t],t))},title:e(`Forward`),type:`button`,children:(0,P.jsx)(si,{})}),(0,P.jsx)(Yy,{"data-shortcut":Gt(H.goUp),disabled:!fn,onClick:e=>{fn&&(Ut(e)?$n(fn):Xn(ln.id,fn))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(ri,{})}),(0,P.jsx)(vp,{focusToken:Ze===`secondary`?Fe:void 0,onContextMenu:(e,t,n)=>ct({x:t,y:n,path:e}),onNavigate:(e,t)=>t?$n(e):void Xn(ln.id,e),path:dn}),(0,P.jsx)(Yy,{onClick:e=>pr(e,dn,()=>void Xn(ln.id,dn,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(ai,{})}),(0,P.jsx)(Yy,{"data-shortcut":Gt(H.find),onClick:On,title:e(`Search`),type:`button`,children:(0,P.jsx)(ni,{})}),ut.secondary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Qy,{}),(0,P.jsx)(Yy,{onClick:e=>_r(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(sa,{})})]})]}),vi(ln,!1),Ze===`secondary`&&yi]}),(0,P.jsx)(Wo,{info:ur,onWidth:lr,open:ze,videoAudio:R?.previewVideoAudio??!1,videoAutoplay:R?.previewVideoAutoplay??!1,width:Ue})]}):(0,P.jsxs)(ib,{children:[(0,P.jsxs)(ab,{children:[ki,(0,P.jsxs)(rb,{children:[vi(K,!0),yi]})]}),(0,P.jsx)(Wo,{info:Ge,onWidth:lr,open:ze,videoAudio:R?.previewVideoAudio??!1,videoAutoplay:R?.previewVideoAutoplay??!1,width:Ue})]}):q===`home`?(0,P.jsx)(cp,{drives:g,find:Ai,historyVersion:xe,onSearchMatches:ue,homePath:m.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:ti,onHistoryChanged:()=>Ee(e=>e+1),onAddToTray:e=>void Tr(e),onAddFavorite:e=>void Dr(e),onRemoveFavorite:e=>void Or(e),favoritePaths:B,onExtractArchive:(e,t)=>void Ei(e,t),settingsVersion:Ne,onOpen:or,onLayoutChanged:$r,onPlacesChanged:h,onRecentCleared:ei,places:m,recent:pe,recentLimit:he,visibilityVersion:Le}):q===`settings`?(0,P.jsx)(Xm,{appInfo:y,find:Ai,focusSection:te,onSearchMatches:ue,onSettingsChanged:$r,onOpenFolder:$n}):q===`gallery`?(0,P.jsx)(zg,{confirmDelete:R?.confirmDelete??!1,find:Ai,onSearchMatches:ue,openOnSingleClick:R?.openOnSingleClick??!1,onAddToTray:e=>void Tr(e),onAddFavorite:e=>void Dr(e),onRemoveFavorite:e=>void Or(e),favoritePaths:B,onExtractArchive:(e,t)=>void Ei(e,t),shortcuts:H,showCheckboxes:R?.showCheckboxes??!0,showDetails:ze,videoAudio:R?.previewVideoAudio??!1,videoAutoplay:R?.previewVideoAutoplay??!1,view:hn}):(0,P.jsx)(Pp,{find:Ai,onOpenLocation:or,onShowDetails:()=>Ve(!0),platform:y?.platform,showDetails:ze,videoAudio:R?.previewVideoAudio??!1,videoAutoplay:R?.previewVideoAutoplay??!1})]},q),(0,P.jsxs)(lb,{children:[(0,P.jsx)(`span`,{children:q===`files`&&K.listing?Hy(e,K.listing):``}),y?(0,P.jsxs)(ob,{children:[(0,P.jsxs)(`span`,{children:[`v`,y.version,` · `,y.platform]}),x?.available&&(0,P.jsxs)(sb,{onClick:()=>{ne(`updates`),rr(`settings`)},title:e(`Version {version} is available.`,{version:x.latest}),type:`button`,children:[(0,P.jsx)(cb,{}),e(`Update available`)]})]}):(0,P.jsx)(`span`,{children:e(`browser preview`)})]})]})]}),(0,P.jsx)(Js,{clipboardItems:kt,clipboardMove:jt,currentDirectory:q===`files`?sn:``,items:Vt,onAdd:e=>void Tr(e),onClear:kr,onClose:()=>It(!1),onCopyToClipboard:e=>void Nr(e),onPosition:Lr,onRemove:Er,onTransfer:zr,position:tn,visible:Ft}),$e&&(0,P.jsx)(ro,{creationOnly:!0,directory:$e.directory,menu:{x:$e.x,y:$e.y,paths:[],background:!0},onClose:()=>et(null),onCreateFile:e=>void vr(e),onCreateFolder:e=>void vr(null,e),shortcuts:H}),at&&(0,P.jsx)(ro,{allowCompression:!0,directory:zy(at.path)??at.path,menu:{x:at.x,y:at.y,paths:[at.path]},onAddToTray:e=>void Tr(e),onAddFavorite:e=>void Dr(e),onRemoveFavorite:e=>void Or(e),favoritePaths:B,onExtractArchive:(e,t)=>void Ei(e,t),onArchiveCreated:e=>{e&&er(zy(at.path)??at.path)},onClose:()=>ct(null),onCompressTo:(e,t)=>U({paths:e,name:t}),onCopy:(e,t)=>void gt(e,t),onDelete:e=>void xt(e,!1).then(()=>er(zy(at.path)??at.path)),onOpen:(e,t)=>t?$n(e):void Xn(K.id,e),onOpenFile:e=>void V(e),onPaste:e=>void bt(e).then(t=>{t&&er(e)}),onRefresh:()=>er(at.path),shortcuts:H,target:{path:at.path,isDirectory:!0}}),lt&&(0,P.jsx)(bo,{initialDirectory:zy(at?.path??cn)??cn,initialName:lt.name,onCancel:()=>U(null),onCompress:async e=>{let t=await Lt(lt.paths,e);return!t.ok&&t.error&&ga(t.error),t.ok}}),tt&&(0,P.jsx)(Ga,{items:[{label:e(`Extract here`),onSelect:()=>void Di(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void Di(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void Di(`auto`)}],onClose:()=>it(null),x:tt.x,y:tt.y}),Jt&&(0,P.jsx)(ju,{delaySeconds:Jt.prompt.delaySeconds,hits:Jt.prompt.hits,onCancel:()=>{Jt.resolve(!1),Yt(null)},onConfirm:()=>{Jt.resolve(!0),Yt(null)},permanent:Jt.prompt.permanent},Jt.id),(0,P.jsx)(Ku,{}),(0,P.jsx)($u,{}),o&&(0,P.jsx)(gy,{code:o.code,deviceName:o.deviceName,onAccept:()=>{Dd(o.requestId,!0),s(null)},onReject:()=>{Dd(o.requestId,!1),s(null)}}),(0,P.jsx)(uy,{}),(0,P.jsx)(_e,{})]})})}var Wy=_.div`
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
`,Gy=_.div`
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
`,Ky=_.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,qy=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Ba}
`,Jy=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Yy=_.button`
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
`,Xy=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Zy=_.span`
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
`,Qy=_.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,$y=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,eb=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,tb=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Ua:``}
`,nb=_.div`
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
        ${Wa}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,rb=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,ib=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,ab=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,ob=_.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,sb=_.button`
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
`,cb=_.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,lb=_.footer`
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
`;function ub({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:c,onSelect:u}){let d=I(),f=Sc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,E.useState)(e),[_,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(!0),[S,ee]=(0,E.useState)(null),[C,te]=(0,E.useState)(()=>new Set),[ne,re]=(0,E.useState)(a??[]),[w,T]=(0,E.useState)([]),[ae,D]=(0,E.useState)([]),[oe,O]=(0,E.useState)([]),[se,k]=(0,E.useState)([]),[ce,A]=(0,E.useState)(``),[j,le]=(0,E.useState)(m.length===0),[M,ue]=(0,E.useState)(`files`),[de,fe]=(0,E.useState)(0),[F,pe]=(0,E.useState)(gn),[me,he]=(0,E.useState)(0),[L,ge]=(0,E.useState)(0),[R,_e]=(0,E.useState)(null),[z,ve]=(0,E.useState)(null),[B,xe]=(0,E.useState)(0),[V,Ce]=(0,E.useState)(null),[we,Te]=(0,E.useState)(be.imageStripHeight);(0,E.useEffect)(()=>{Ye().then(Ce,()=>Ce(null))},[]),(0,E.useEffect)(()=>{a?re(a):Ae().then(re,()=>re([]))},[a]),(0,E.useEffect)(()=>{je().then(T,()=>T([])),Be().then(D,()=>D([]))},[]),(0,E.useEffect)(()=>{let e=!0;return x(!0),ee(null),te(new Set),A(p?``:v(h)),Se(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),A(p?``:v(t.path)),x(!1))},t=>{e&&(ee(t instanceof Error?t.message:String(t)),x(!1))}),()=>{e=!1}},[h,de,p]),(0,E.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),pe(e=>({...e,open:!0})),he(e=>e+1);return}if(e.key===`Escape`){F.open?(pe(e=>({...e,open:!1,query:``})),ge(0)):c();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),De();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Oe();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),pe(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),he(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||We()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),De()):e.button===4&&(e.preventDefault(),Oe())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Ee=e=>{let t=e.trim();t.length!==0&&l(t)!==l(h)&&(O(e=>[...e,h]),k([]),ue(`files`),g(t))},De=()=>{let e=oe.at(-1);e!==void 0&&(O(e=>e.slice(0,-1)),k(e=>[h,...e]),g(e))},Oe=()=>{let e=se[0];e!==void 0&&(k(e=>e.slice(1)),O(e=>[...e,h]),g(e))},ke=_?.path??h,H=_?.parent??(h?ie(h):null);(0,E.useEffect)(()=>{N.available&&ke&&N.send({type:`fs.watch`,payload:{paths:[ke],owner:`picker`}})},[ke]),(0,E.useEffect)(()=>{if(N.available&&ke)return N.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&l(t.data.path)===l(ke)&&Se(ke,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));te(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[ke]);let Me=(_?.entries??[]).filter(e=>e.isDirectory||p&&(j||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Ne=_?{..._,entries:Me}:null,Pe=F.open&&F.query.length>0,Fe=(0,E.useMemo)(()=>Pe?Me.filter(e=>Tn(e.name,F)).map(e=>e.fullPath):[],[Pe,Me,F]);(0,E.useEffect)(()=>{ge(0)},[F.query,F.matchCase,F.regex,_?.path]);let Ie=Fe.length===0?-1:Math.min(L,Fe.length-1),Le=(0,E.useMemo)(()=>({...F,currentPath:Ie>=0?Fe[Ie]:null}),[F,Ie,Fe]),Re=V?.defaultView??be,ze=o??{mode:Re.mode,iconSize:Re.iconSize,gridSize:Re.gridSize,sort:`name`,sortDescending:!1,columns:Re.columns??[`type`,`size`,`modified`]},Ve=(s??Re.showImages)&&ze.mode===`list`,He=ce.trim(),Ue=He.length>0?fb(He)?He:db(ke,He):null,We=()=>{if(b||S)return;let e=n?[...C]:[...C].slice(0,1);e.length>0?u(e):Ue!==null&&He!==v(ke)?u([Ue]):!p&&ke&&u([ke])},Ge=(0,E.useCallback)(e=>{te(new Set(e)),A(e.length===1?v(e[0]):e.length===0&&!p?v(ke):``)},[ke,p]),Ke=e=>{_?.entries.find(t=>t.fullPath===e)?.isDirectory?Ee(e):p&&u([e])},qe=e=>A(e),Je=async e=>{let t=R;if(_e(null),!t||!ke)return;let n=e===null?await Ct(ke):await Dt(ke,e);n.ok&&n.path!==null&&(pe(e=>({...e,open:!1,query:``})),e!==null&&le(!0),fe(e=>e+1),window.setTimeout(()=>{ve(n.path),xe(e=>e+1)},120))},Xe=()=>{pe(e=>({...e,open:!0})),he(e=>e+1)},Ze=e=>{ge(t=>Fe.length===0?0:(t+e+Fe.length)%Fe.length)},Qe=e=>(0,P.jsxs)(Sb,{children:[(0,P.jsxs)(Cb,{children:[(0,P.jsx)(wb,{children:d(p?`File name:`:`Folder:`)}),(0,P.jsx)(Tb,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),We())},spellCheck:!1,value:ce}),p&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(wb,{children:d(`Files of type:`)}),(0,P.jsx)(oo,{onChange:e=>le(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:j?`all`:`supported`})]})]}),(0,P.jsxs)(Eb,{children:[(0,P.jsx)(Db,{onClick:c,type:`button`,children:d(`Cancel`)}),(0,P.jsxs)(Db,{$primary:!0,disabled:b||S!==null||p&&C.size===0&&He.length===0,onClick:We,type:`button`,children:[(0,P.jsx)(gi,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),$e=(0,P.jsxs)(mb,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,P.jsxs)(hb,{children:[(0,P.jsxs)(gb,{children:[(0,P.jsx)($r,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,P.jsx)(_b,{onClick:c,title:d(`Cancel`),type:`button`,children:(0,P.jsx)(_i,{size:12})})]}),(0,P.jsxs)(vb,{children:[(0,P.jsx)($g,{activeKind:M===`overview`?`home`:M===`gallery`?`gallery`:`files`,currentPath:ke,drives:w,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:ne.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Ee(e),onOpenView:e=>{e===`home`?(te(new Set),A(p?``:v(ke)),ue(`overview`)):e===`gallery`&&p&&(te(new Set),A(``),ue(`gallery`))},places:ne,recent:ae,recentLimit:10}),(0,P.jsx)(yb,{children:M===`overview`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(cp,{drives:w,historyVersion:0,homePath:ne.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Ee(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Ge,places:ne,readOnly:!0,recent:ae,recentLimit:10,visibilityVersion:0}),Qe(A)]}):M===`gallery`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(zg,{onPick:e=>u([e]),onSelectionChange:Ge,showCheckboxes:V?.showCheckboxes??!0,view:{...ye,columns:[]}}),Qe(A)]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(bb,{children:[(0,P.jsx)(xb,{disabled:oe.length===0,onClick:De,title:d(`Back`),type:`button`,children:(0,P.jsx)(oi,{})}),(0,P.jsx)(xb,{disabled:se.length===0,onClick:Oe,title:d(`Forward`),type:`button`,children:(0,P.jsx)(si,{})}),(0,P.jsx)(xb,{disabled:!H,onClick:()=>H&&Ee(H),title:d(`Up one level`),type:`button`,children:(0,P.jsx)(ri,{})}),(0,P.jsx)(vp,{onNavigate:Ee,path:ke}),(0,P.jsx)(xb,{onClick:e=>_e({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,P.jsx)(ai,{})}),(0,P.jsx)(xb,{onClick:Xe,title:d(`Search`),type:`button`,children:(0,P.jsx)(ni,{})}),f.available&&(0,P.jsx)(xb,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,P.jsx)(sa,{})})]}),F.open&&(0,P.jsx)(ld,{current:Ie,focusToken:me,matchCase:F.matchCase,mode:F.mode,onClose:()=>{pe(e=>({...e,open:!1,query:``})),ge(0)},onMatchCase:()=>pe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>pe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ze(1),onPrevious:()=>Ze(-1),onQuery:e=>pe(t=>({...t,query:e})),onRegex:()=>pe(e=>({...e,regex:!e.regex})),query:F.query,regex:F.regex,total:Fe.length}),(0,P.jsx)(Ic,{allowBackgroundMenu:!0,confirmDelete:V?.confirmDelete??!1,enableShortcuts:!0,error:S,find:Le,imageStripHeight:we,loading:b,listing:Ne,onImageStripHeight:Te,onOpen:Ke,onOpenFile:Ke,onRefresh:()=>fe(e=>e+1),onSelectionChange:Ge,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:V?.openOnSingleClick??!1,refreshToken:de,pendingRename:z,pendingRenameToken:B,showCheckboxes:V?.showCheckboxes??!0,showDetails:!1,showImages:Ve,singleSelect:!n,view:ze}),Qe(qe)]})})]}),R&&(0,P.jsx)(ro,{creationOnly:!0,directory:ke,menu:{x:R.x,y:R.y,paths:[],background:!0},onClose:()=>_e(null),onCreateFile:p?e=>void Je(e):void 0,onCreateFolder:()=>void Je(null),shortcuts:Bt})]});return i?$e:(0,Oa.createPortal)((0,P.jsx)(pb,{onPointerDown:e=>{e.target===e.currentTarget&&c()},children:$e}),document.body)}function db(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function fb(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var pb=_.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Ua}
`,mb=_.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:ka}
    ${({$inline:e})=>e?``:Ra}
`,hb=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,gb=_.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,_b=_.button`
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
`,vb=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,yb=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,bb=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,xb=_.button`
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
`,Sb=_.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,Cb=_.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,wb=_.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Tb=_.input`
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
`,Eb=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,Db=_.button`
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
`;function Ob({mode:e,multiple:t,extensions:n,initial:r}){let i=I(),a=L(),[o,s]=(0,E.useState)(null),[c,l]=(0,E.useState)({}),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=(0,E.useRef)(0);(0,E.useEffect)(()=>{N.send({type:`app.ready`})},[]),(0,E.useEffect)(()=>(ve(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>ve(null)),[]),(0,E.useEffect)(()=>{Ye().then(e=>{s(e),ee(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??be,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,P.jsxs)(kb,{children:[(0,P.jsxs)(Ab,{children:[(0,P.jsx)(jb,{children:(0,P.jsx)(vi,{size:17})}),(0,P.jsx)(Mb,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,P.jsx)(Dv,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,P.jsx)(Nb,{children:(0,P.jsx)(Pb,{onClick:()=>N.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,P.jsx)(_i,{size:12})})})]}),(0,P.jsx)(Fb,{children:(0,P.jsx)(ub,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>N.send({type:`pick.cancel`}),onSelect:e=>N.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,P.jsx)(ju,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,P.jsx)(Ku,{}),(0,P.jsx)(_e,{})]})}var kb=_.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,Ab=_.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,jb=_.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Mb=_.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Nb=_.div`
    display: flex;
    flex-shrink: 0;
`,Pb=_.button`
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
`,Fb=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Ib=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Ib);var Lb=document.getElementById(`root`),Rb=new URLSearchParams(window.location.search),zb=Rb.get(`picker`),Bb=Rb.get(`filter`)??``;Lb&&(0,ae.createRoot)(Lb).render((0,P.jsx)(E.StrictMode,{children:(0,P.jsx)(pe,{children:zb===`folder`||zb===`file`?(0,P.jsx)(Ob,{extensions:Bb?Bb.split(`;`).filter(Boolean):[],initial:Rb.get(`initial`)??``,mode:zb,multiple:Rb.get(`multiple`)===`1`}):(0,P.jsx)(Uy,{})})}));