import{A as e,C as t,E as n,M as r,N as i,O as a,S as o,T as s,_ as c,b as l,c as u,d,f,g as p,h as m,i as h,j as g,k as _,l as v,m as y,n as b,o as x,p as S,r as ee,s as C,t as te,u as ne,v as w,w as T,x as re,y as E}from"./theme-BMX5jShW.js";var D=i(r(),1),ie=e(),O=15e3,ae=new Set,k=new Map,oe=!1,A=0,se;function j(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function M(){oe||(oe=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>ce(e)))}function ce(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?k.get(n):void 0;n&&r&&(k.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),ae.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function N(){if(se!==void 0)return;let e=()=>{if(!j())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),se=setInterval(e,5e3)}var P={get available(){return j()},send(e){j()?(M(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&N()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=O){if(!j())return Promise.reject(Error(`Native bridge is not available.`));M();let r=`req-${++A}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{k.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);k.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return M(),ae.add(e),()=>ae.delete(e)}},F=s();function le(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function ue(e){return P.available?await P.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var de=(0,D.createContext)(le({})),I=(0,D.createContext)(`en`);function L(){return(0,D.useContext)(de)}var fe=({children:e})=>{let[t,n]=(0,D.useState)(()=>le({})),[r,i]=(0,D.useState)(`en`);return(0,D.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await ue();if(e)return;n(()=>le(t.strings)),i(t.locale)}catch{}};t();let r=P.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,D.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,F.jsx)(de.Provider,{value:t,children:(0,F.jsx)(I.Provider,{value:r,children:e})})},pe=e=>P.send({type:e});function R(){let[e,t]=(0,D.useState)(!1);return(0,D.useEffect)(()=>{if(P.available)return P.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>pe(`window.minimize`),toggleMaximize:()=>pe(`window.toggleMaximize`),close:()=>pe(`window.close`)}}function me(){return{onMouseDown:()=>pe(`window.drag`),onDoubleClick:()=>pe(`window.toggleMaximize`)}}function he(){let[e,t]=(0,D.useState)(!1),{maximized:n}=R();return(0,D.useEffect)(()=>{if(!P.available)return;let e=!1;return P.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,D.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var z=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function ge(){return(0,F.jsx)(F.Fragment,{children:z.map(([e,t])=>(0,F.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),P.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var _e=null;function ve(e){_e=e}function B(e){return _e?_e(e):Promise.resolve(!1)}var ye={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},be={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function xe(e,t){return P.available?await P.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Se(e){return P.available?(await P.request(`fs.open`,{path:e})).ok:!1}async function Ce(e,t=!0,n=!1,r=0,i){return await P.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function we(e,t,n=0,r){return await P.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function Te(e,t=0,n){return await P.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function V(e){P.available&&e.length!==0&&await P.request(`fs.archive.release`,{paths:e})}async function Ee(e){return P.available?await P.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function De(e,t){return P.available?(await P.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Oe(e,t,n,r){return P.available?(await P.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function ke(e,t=!1){return P.available?await P.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ae(){return(await P.request(`fs.places`)).places}async function je(){return(await P.request(`fs.drives`)).drives}async function H(e=!1){return(await P.request(`fs.recycle`,{includeOrphans:e})).entries}async function Me(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await B({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await P.request(e,{...t,confirm:r.token})}return r}async function Ne(e=!1){let t=await P.request(`fs.recycle.empty`,{includeOrphans:e});await Me(`fs.recycle.empty`,{includeOrphans:e},t)}async function Pe(e){return!P.available||e.length===0?{ok:!1,done:0}:await P.request(`fs.recycle.restoreMany`,{ids:e})}async function Fe(e){if(!P.available||e.length===0)return{ok:!1,done:0};let t=await P.request(`fs.recycle.deleteMany`,{ids:e}),n=await Me(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ie(e){P.available&&e&&await P.request(`fs.recycle.properties`,{id:e})}async function Le(){if(!P.available)return{entries:[],cancelled:!0,failed:!1};let e=await P.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Re(){return P.available?(await P.request(`fs.recycle.admin.purge`)).ok:!1}async function ze(e=0,t=150,n=!1){return P.available?await P.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Be(){return P.available?(await P.request(`fs.recent`)).entries:[]}async function Ve(){return P.available?(await P.request(`fs.frequent`)).entries:[]}async function He(e){P.available&&await P.request(`fs.frequent.record`,{path:e})}async function Ue(){await P.request(`fs.recent.clear`)}async function We(){await P.request(`fs.frequent.clear`)}async function Ge(){return await P.request(`fs.visibility`)}async function Ke(){return await P.request(`fs.hidden.toggle`)}async function qe(){return P.available?await P.request(`fs.index.tasks`):{count:0,directories:[]}}var Je={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Ye(){if(!P.available)return Je;let e=await P.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function Xe(){return P.available?(await P.request(`app.protection.defaults`)).paths??[]:[]}var Ze={registered:!1,pathMatches:!1,registeredPath:null};async function Qe(){return P.available?await P.request(`app.defaultManager.status`):{registered:!1,pathMatches:!1,registeredPath:null}}async function $e(){return P.available?await P.request(`app.archive.status`):Ze}async function et(){return P.available?await P.request(`app.archive.register`):Ze}async function tt(){return P.available?await P.request(`app.archive.unregister`):Ze}async function nt(e){if(!P.available)return e;let t=await P.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function rt(e,t){P.available&&await P.request(`app.tabs.set`,{tabs:e,active:t})}async function it(e,t,n){return P.available?(await P.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var at={managed:0,private:0,workingSet:0,available:0};async function ot(){return P.available?await P.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1,logDirectory:``}}async function st(){return P.available?await P.request(`app.updateStatus`)??null:null}async function ct(){return P.available?await P.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function lt(e){return!P.available||!e?!1:(await P.request(`app.openUrl`,{url:e})).ok}async function ut(){return P.available?await P.request(`app.memory`):at}async function dt(){return P.available?await P.request(`app.memory.trim`):at}async function ft(){return P.available?(await P.request(`app.scheme`)).registered:!1}async function pt(e){return P.available?(await P.request(`app.scheme.set`,{enabled:e})).registered:!1}var mt={supported:!1,mode:`none`,active:!1,error:null};async function ht(){return P.available?await P.request(`app.startup`):mt}async function gt(e){return P.available?await P.request(`app.startup.set`,{mode:e}):mt}async function _t(e,t=!1){return!P.available||e.length===0?!1:(await P.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function vt(){return P.available?(await P.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function yt(){return P.available?await P.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function bt(e,t,n){return!P.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await P.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function U(e){return!P.available||e.length===0?[]:(await P.request(`fs.paths.info`,{paths:e})).entries}async function xt(e){return P.available?(await P.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function St(e,t=!1){if(!P.available||e.length===0)return{ok:!1,error:null};let n=await P.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await B({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await P.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function Ct(e,t){return P.available?await P.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function wt(e,t=!1){return P.available?await P.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Tt(e){return P.available?(await P.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Et(e,t){return P.available?await P.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Dt(e,t,n){return P.available?await P.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Ot(e,t){return P.available?await P.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function kt(e){P.available&&e.length!==0&&await P.request(`fs.operation.properties`,{paths:e})}async function At(e){P.available&&await P.request(`fs.operation.openWith`,{path:e})}async function jt(e){P.available&&await P.request(`fs.operation.terminal`,{path:e})}async function Mt(e){return P.available?await P.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Nt(e,t){return P.available?(await P.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Pt(){return P.available?await P.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Ft(){return P.available?await P.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function W(e){P.available&&await P.request(`fs.operation.showInExplorer`,{path:e})}async function It(e){return!P.available||e.length===0?{verbs:[],safe:!0}:await P.request(`shell.verbs`,{paths:e})}async function Lt(e,t,n,r){P.available&&e.length!==0&&await P.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Rt(e,t){return!P.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await P.request(`fs.operation.compress`,{...t,paths:e})}async function zt(){return P.available?(await P.request(`app.tasks`)).tasks:[]}async function Bt(){P.available&&await P.request(`app.tasks.clear`)}var Vt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Ht=Vt.openInNewTab;function Ut(e){Ht=e.trim()||Vt.openInNewTab}function Wt(e){let t=Ht.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Gt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Kt(e){return e.split(`+`).filter(Boolean).map(e=>qt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var qt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Jt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Yt=new Map;function Xt(e){return l(p(e)?u(e):e)}function Zt(e){return Yt.get(Xt(e))}function Qt(e,t){Yt.set(Xt(e),t)}function $t(e){Yt.delete(Xt(e))}function en(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var G=new Map,tn=new Map,nn=new Set,K=0;function rn(){G.clear(),tn.clear(),K+=1,nn.forEach(e=>e())}function an(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...G.keys()])e.toLowerCase().includes(t)&&(G.delete(e),n=!0);n&&(K+=1,nn.forEach(e=>e()))}function q(){let[e,t]=(0,D.useState)(K);return(0,D.useEffect)(()=>{let e=()=>t(K);return nn.add(e),()=>{nn.delete(e)}},[]),e}var on=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function sn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return on.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function cn(e,t,n=!1){let r=q(),i=e===null?``:sn(e,t,n),[a,o]=(0,D.useState)(()=>G.get(i)??null);return(0,D.useEffect)(()=>{if(e===null){o(null);return}if(!P.available)return;if(G.has(i)){o(G.get(i)??null);return}let r=!0;return P.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?G.set(i,e.dataUrl):G.delete(i),r&&o(e.dataUrl)},()=>{G.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function ln(e){let[t,n]=(0,D.useState)(e);return(0,D.useEffect)(()=>{if(!e){n(null);return}if(!p(e)){n(e);return}let t=!0;return Te(e,0,Zt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function un(e){let t=q(),[n,r]=(0,D.useState)(()=>e?tn.get(e)??null:null);return(0,D.useEffect)(()=>{if(!e||!P.available){r(null);return}if(tn.has(e)){r(tn.get(e)??null);return}let t=!0;return P.request(`fs.iconFile`,{path:e}).then(n=>{tn.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{tn.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var dn=null,fn=null;function pn(){return dn===null?P.available?(fn??=P.request(`app.thumbnails`).then(e=>(dn=e.base??``,dn),()=>(dn=``,``)),fn):Promise.resolve(``):Promise.resolve(dn)}function mn(e,t=128,n=0){let[r,i]=(0,D.useState)(dn);return(0,D.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return pn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function hn(e,t=0,n=``){let[r,i]=(0,D.useState)(dn);if((0,D.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return pn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function gn(e,t=0){let[n,r]=(0,D.useState)(dn);return(0,D.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return pn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var _n={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},vn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function yn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Sn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Tn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var bn=`\0`,xn=``;function Sn(e){return e.query!==bn&&(bn=e.query,xn=e.query.toLowerCase()),xn}var Cn=`\0`,wn=null;function Tn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Cn)return wn;Cn=t;try{wn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{wn=null}return wn}function En(e,t){return yn(e,t)!==null}var Dn=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],On={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function kn(e){let t=jn(e);for(let{kind:e}of Dn)if(On[e].has(t))return e;return null}function An(e){return kn(e)!==null}function jn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Mn=(0,D.createContext)({places:{},useIcons:!1}),Nn=Mn.Provider;function Pn(){return(0,D.useContext)(Mn)}function Fn(e,t){return e.places[l(t)]}function In(e,t,n){return Fn(e,t)?.name||n}function Ln(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function Rn(e,t){try{localStorage.setItem(e,String(t))}catch{}}function zn(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function Bn(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Vn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,F.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,F.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Hn=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Un=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M14 3v4h4`})]}),Wn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,F.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,F.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Gn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,F.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),Kn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 19V5`}),(0,F.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),qn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,F.jsx)(`path`,{d:`M20 4v7h-7`})]}),Jn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 5v14`}),(0,F.jsx)(`path`,{d:`M5 12h14`})]}),Yn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M19 12H5`}),(0,F.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Xn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M5 12h14`}),(0,F.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Zn=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,F.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),Qn=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,F.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),$n=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,F.jsx)(`path`,{d:`M12 12v8`})]}),er=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,F.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),tr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,F.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),nr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,F.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),rr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),ir=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 7h16`}),(0,F.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,F.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,F.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),ar=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),or=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),sr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,F.jsxs)(`defs`,{children:[(0,F.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,F.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,F.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,F.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,F.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,F.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,F.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,F.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,F.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,F.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),cr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),lr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,F.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,F.jsx)(`path`,{d:`m13 5-2 14`})]}),ur=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,F.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,F.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),dr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,F.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),fr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,F.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,F.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),pr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),mr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),hr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),gr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,F.jsx)(`path`,{d:`M8.5 14h7`})]}),_r=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,F.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,F.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),vr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),yr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),br=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,F.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),xr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,F.jsx)(`path`,{d:`M15 3v4h4`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Sr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,F.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Cr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,F.jsx)(`path`,{d:`m14 6 4 4`})]}),wr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,F.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Tr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,F.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Er=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 4v10`}),(0,F.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,F.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Dr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,F.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,F.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Or=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,F.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,F.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),kr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,F.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Ar=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),jr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,F.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Mr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,F.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,F.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Nr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Pr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,F.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,F.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,F.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Fr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,F.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Ir=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,F.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Lr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,F.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,F.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Rr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,F.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),zr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,F.jsx)(`path`,{d:`M3.5 12h17`}),(0,F.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Br=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Vr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,F.jsx)(`path`,{d:`M8.5 10.5h7`})]}),Hr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,F.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,F.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa`})]}),Ur=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,F.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Wr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,F.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,F.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),Gr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,F.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Kr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M12 16V4`}),(0,F.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,F.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),qr=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),Jr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,F.jsx)(`path`,{d:`M12 4v16`})]}),Yr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,F.jsx)(`path`,{d:`M15 4v16`})]}),Xr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,F.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,F.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,F.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),Zr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,F.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,F.jsx)(`path`,{d:`M12 14v2`})]}),Qr=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,F.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]});function J(e,t){return({size:n=t,...r})=>(0,F.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var $r=J(Vn,18),ei=J(Hn,18),ti=J(Un,18),ni=J(Wn,18),ri=J(Gn,16),ii=J(Kn,16),ai=J(qn,16),oi=J(Jn,16),si=J(Yn,16),ci=J(Xn,16),li=J(Zn,12),ui=J(Qn,18),di=J($n,14),fi=J(er,14),pi=J(tr,14),mi=J(nr,18),hi=J(rr,18),gi=J(ir,18),_i=J(ar,14),vi=J(or,14),yi=J(sr,18),bi=J(cr,18),xi=J(lr,18),Si=J(ur,18),Ci=J(dr,18),wi=J(fr,18),Ti=J(pr,18),Ei=J(mr,18),Di=J(hr,18),Oi=J(gr,18),ki=J(_r,18),Ai=J(vr,18),ji=J(yr,18),Mi=J(br,18),Ni=J(xr,18),Pi=J(Sr,18),Fi=J(Cr,16),Ii=J(wr,18),Li=J(Tr,18),Ri=J(Er,18),zi=J(Dr,18),Bi=J(Or,18),Vi=J(kr,18),Hi=J(Ar,18),Ui=J(jr,18),Wi=J(Mr,18),Gi=J(Nr,18),Ki=J(Pr,18),qi=J(Fr,18),Ji=J(Ir,18),Yi=J(Lr,18),Xi=J(Rr,18),Zi=J(zr,18),Qi=J(Br,18),$i=J(Vr,14),ea=J(Hr,14),ta=J(Ur,16),na=J(Wr,16),ra=J(Gr,16),ia=J(Kr,16),aa=J(qr,16),oa=J(Jr,16),sa=J(Yr,16),ca=J(Xr,16),la=J(Zr,14),ua=J(Qr,14);async function da(e,t,n){return P.available?(await P.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function fa(e){return da(`folder`,[],e??``)}function pa(e){return da(`file`,e??[],``)}var ma=null,ha=null;function ga(e){ma=e}function _a(e){return ma?ma(e):Promise.resolve()}function va(e){ha=e}function ya(e,t=!1){return ha?ha(e,t):Promise.resolve(null)}var ba=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],xa=null,Sa=0,Ca=new Set;function wa(){Sa+=1;for(let e of Ca)e()}function Ta(e){return Ca.add(e),()=>Ca.delete(e)}function Ea(){return Sa}function Da(e){xa=e,wa()}function Oa(){return(0,D.useSyncExternalStore)(Ta,Ea,Ea),xa}var ka=g(),Aa=a`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,ja=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ma=n`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Na=n`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Pa=n`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Fa=n`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Ia=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,La=n`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Ra=n`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,za=a`animation: ${ja} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ba=a`animation: ${Ma} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Va=a`animation: ${Na} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;a`animation: ${Pa} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var Ha=a`animation: ${Fa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ua=a`animation: ${Ia} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Wa=a`animation: ${La} 140ms ease-out;`,Ga=a`animation: ${Ra} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Ka({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,D.useState)([]),s=(0,D.useRef)(void 0);if((0,D.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,D.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,F.jsx)(no,{},`group-rule-${i}`)),n.push((0,F.jsx)(to,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,F.jsx)(no,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,F.jsxs)(Qa,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,F.jsx)($a,{children:e.loading?(0,F.jsx)(ro,{}):e.icon}),(0,F.jsx)(eo,{children:e.label}),a?(0,F.jsx)(li,{size:12}):e.checked&&(0,F.jsx)(_i,{size:12})]},`${e.label}-${i}`))}),n};return(0,ka.createPortal)((0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(qa,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ja,{children:r.map((e,t)=>(0,F.jsxs)(Ya,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,F.jsx)(Xa,{children:e.icon}),(0,F.jsx)(Za,{children:e.label})]},`${e.label}-${t}`))}),(0,F.jsx)(no,{})]}),m(n,0)]}),a.map((e,t)=>(0,F.jsx)(qa,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var qa=_.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Aa}
    ${Ba}
    transform-origin: top left;
`,Ja=_.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Ya=_.button`
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
`,Xa=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Za=_.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qa=_.button`
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
`,$a=_.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,eo=_.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,to=_.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,no=_.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,ro=_.span`
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
`;function io({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:u,onDelete:d,onCopy:f,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:_=!1,onRefresh:y,onAddToTray:b,onAddFavorite:x,onRemoveFavorite:S,favoritePaths:ee,onExtractArchive:C,allowCompression:te=!1,onCompressTo:ne,onArchiveCreated:w}){let T=L(),re=Oa(),E=p(t),[ie,O]=(0,D.useState)({verbs:[],safe:!0,loading:!1}),[ae,k]=(0,D.useState)({recommended:[],other:[],loading:!1}),[oe,A]=(0,D.useState)(null),se=(0,D.useRef)(0),j=(0,D.useRef)(0),M=e?.paths.length===1,ce=e?.background?t?[t]:[]:e?.paths??[],N=e?.background?t||null:M&&n?.isDirectory?n.path:null;if((0,D.useEffect)(()=>{if(!e){O({verbs:[],safe:!0,loading:!1}),k({recommended:[],other:[],loading:!1});return}let t=++se.current;O({verbs:[],safe:!0,loading:ce.length>0&&!E}),ce.length>0&&!E&&It(ce).then(e=>{se.current===t&&O({...e,loading:!1})},()=>{se.current===t&&O({verbs:[],safe:!0,loading:!1})});let r=++j.current;!E&&M&&n?(k({recommended:[],other:[],loading:!0}),Mt(n.path).then(e=>{j.current===r&&k({...e,loading:!1})},()=>{j.current===r&&k({recommended:[],other:[],loading:!1})})):k({recommended:[],other:[],loading:!1})},[e,M,n?.path,n?.isDirectory,ce.length,E]),(0,D.useEffect)(()=>{if(!e||E||!N){A(null);return}let t=!0;return Tt(N).then(e=>{t&&A(e)},()=>{t&&A(null)}),()=>{t=!1}},[e,N,E]),!e)return null;let P=[],le=[],ue=new Set((ee??[]).map(l)),de=e.background?t?[t]:[]:e.paths,I=de.length>0&&de.every(e=>ue.has(l(e))),fe=()=>n?pe(n.path,n.isDirectory):`Archive`,pe=(e,t)=>{let n=v(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},R=async(e,n=fe())=>{let r=await Rt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?w?.(r.path,!0):_a(r.error??T(`Could not create the archive.`))},me=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},he=async()=>{if(!N||oe===null)return;let e=await Et(N,!oe);e.ok?(A(e.enabled),y?.()):_a(e.error??T(`Could not change the case sensitivity.`))},z=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Dt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Dt(e,t,`${a}\\${oo(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?y?.():_a(o.error??T(`Could not create the link.`))},ge=async e=>{if(!n)return;let r=await fa(t);r&&await z(e,n.path,r,v(n.path),e.endsWith(`-copy`))},_e=async e=>{let n=re?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=l(a)===l(t);await z(n,r.path,t,v(r.path),i&&!o)}},ve=async()=>{let t=(await U(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Da({paths:t})},B=()=>{let e=re?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:T(`Cancel selected link`),icon:(0,F.jsx)(vi,{size:14}),onSelect:()=>Da(null)},...t?[{label:T(`Hard link`),icon:(0,F.jsx)(ti,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard`)}]:[],{label:T(`Symbolic link`),icon:(0,F.jsx)(ti,{size:14}),separatorBefore:!t,onSelect:()=>void _e(`symbolic-file`)},...n?[{label:T(`Directory junction`),icon:(0,F.jsx)(ei,{size:14}),onSelect:()=>void _e(`junction`)},{label:T(`Smart copy`),icon:(0,F.jsx)(ta,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`smart-copy`)},{label:T(`Smart mirror`),icon:(0,F.jsx)(ta,{size:14}),onSelect:()=>void _e(`smart-mirror`)},{label:T(`Multi-version smart copy`),icon:(0,F.jsx)(ta,{size:14}),onSelect:()=>void _e(`multi-version-smart-copy`)},{label:T(`Hardlink copy`),icon:(0,F.jsx)(ta,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard-copy`)},{label:T(`Symbolic link copy`),icon:(0,F.jsx)(ta,{size:14}),onSelect:()=>void _e(`symbolic-copy`)}]:[]]};if(e.background){if(h&&le.push({label:T(`New folder`),icon:(0,F.jsx)(oi,{size:16}),shortcut:Kt(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:T(`Folder`),icon:(0,F.jsx)(ei,{size:14}),onSelect:()=>h(!1)}),E||e.push({label:T(`Case-sensitive folder`),icon:(0,F.jsx)(ea,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...ba.map((e,t)=>({label:`${T(e.label)} (${e.extension})`,icon:(0,F.jsx)(ti,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),P.push({label:T(`New`),icon:(0,F.jsx)(oi,{size:14}),children:e,onSelect:()=>void 0})}if(E||P.push({label:T(`Create link`),icon:(0,F.jsx)(ia,{size:14}),disabled:!re,children:B(),onSelect:()=>void 0}),_)return(0,F.jsx)(Ka,{items:P,onClose:a,quick:le,x:e.x,y:e.y});!E&&o&&P.push({label:T(`Open in new tab`),icon:(0,F.jsx)(oi,{size:14}),onSelect:()=>o(t,!0)}),P.push({label:T(`Copy as path`),icon:(0,F.jsx)(ta,{size:14}),onSelect:()=>void me([t])}),b&&P.push({label:T(`Add to file tray`),icon:(0,F.jsx)(Xi,{size:14}),onSelect:()=>b([t])}),!E&&(I?S:x)&&P.push({label:T(I?`Remove from favorites`:`Add to favorites`),icon:I?(0,F.jsx)($i,{size:14}):(0,F.jsx)(Qi,{size:14}),onSelect:()=>I?S?.([t]):x?.([t])}),!E&&oe!==null&&P.push({label:T(`Case-sensitive names`),icon:(0,F.jsx)(ea,{size:14}),checked:oe,onSelect:()=>void he()}),!E&&te&&(P.push({label:T(`Open in Terminal`),icon:(0,F.jsx)(Ji,{size:14}),onSelect:()=>void jt(t)}),P.push({label:T(`Show in Explorer`),icon:(0,F.jsx)(ei,{size:14}),separatorBefore:!0,onSelect:()=>void W(t)})),m&&le.push({label:T(`Paste`),icon:(0,F.jsx)(ra,{size:16}),disabled:!i,shortcut:Kt(r.paste),onSelect:()=>m(t)}),E||le.push({label:T(`Properties`),icon:(0,F.jsx)(ui,{size:16}),shortcut:Kt(r.properties),onSelect:()=>void kt([t])})}else{if(o&&P.push({label:T(`Open`),icon:(0,F.jsx)(ci,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&P.push({label:T(`Open in new tab`),icon:(0,F.jsx)(oi,{size:14}),onSelect:()=>o(n.path,!0)}),m&&P.push({label:T(`Paste into folder`),icon:(0,F.jsx)(ra,{size:14}),disabled:!i,onSelect:()=>m(n.path)}),E||P.push({label:T(`Open in Terminal`),icon:(0,F.jsx)(Ji,{size:14}),onSelect:()=>void jt(n.path)})),!E&&M&&n&&!n.isDirectory&&c(n.path)&&C&&P.push({label:T(`Extract archive`),icon:(0,F.jsx)(Ti,{size:14}),separatorBefore:!0,children:[{label:T(`Extract here`),icon:(0,F.jsx)(Ti,{size:14}),onSelect:()=>C(n.path,`here`)},{label:T(`Extract to a folder named after the archive`),icon:(0,F.jsx)(Ti,{size:14}),onSelect:()=>C(n.path,`named`)},{label:T(`Auto extract to the current folder`),icon:(0,F.jsx)(Ti,{size:14}),onSelect:()=>C(n.path,`auto`)},{label:T(`Extract to…`),icon:(0,F.jsx)(ei,{size:14}),separatorBefore:!0,onSelect:()=>C(n.path,`choose`)}],onSelect:()=>void 0}),!E&&M&&n){let e=[];if(ae.loading)e.push({label:T(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ae.recommended)e.push({label:t.name,group:T(`Suggested apps`),icon:t.icon?(0,F.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,F.jsx)(Di,{size:14}),onSelect:()=>void Nt(n.path,t.path).then(e=>{e||At(n.path)})});for(let t of ae.other)e.push({label:t.name,group:T(`Other apps`),icon:t.icon?(0,F.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,F.jsx)(Di,{size:14}),onSelect:()=>void Nt(n.path,t.path).then(e=>{e||At(n.path)})})}e.push({label:T(`Choose another app…`),icon:(0,F.jsx)(Di,{size:14}),separatorBefore:!0,onSelect:()=>void At(n.path)}),P.push({label:T(`Open with`),icon:(0,F.jsx)(Di,{size:14}),children:e,onSelect:()=>void At(n.path)})}if(E||P.push({label:T(`Compress`),icon:(0,F.jsx)(Ti,{size:14}),separatorBefore:!0,children:[{label:T(`Compress to ZIP`),icon:(0,F.jsx)(Ti,{size:14}),onSelect:()=>void R(e.paths)},{label:T(`Compress to…`),icon:(0,F.jsx)(Ti,{size:14}),onSelect:()=>ne?.(e.paths,fe())}],onSelect:()=>void 0}),!E&&(e?.paths.length??0)>0){let e=[{label:T(`Select link source`),icon:(0,F.jsx)(ia,{size:14}),onSelect:()=>void ve()},...re?[{label:T(`Cancel selected link`),icon:(0,F.jsx)(vi,{size:14}),onSelect:()=>Da(null)}]:[],...M&&n?n.isDirectory?[{label:T(`Symbolic link`),icon:(0,F.jsx)(ei,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-folder`)},{label:T(`Directory junction`),icon:(0,F.jsx)(ei,{size:14}),onSelect:()=>void ge(`junction`)},{label:T(`Smart copy`),icon:(0,F.jsx)(ta,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`smart-copy`)},{label:T(`Smart mirror`),icon:(0,F.jsx)(ta,{size:14}),onSelect:()=>void ge(`smart-mirror`)},{label:T(`Multi-version smart copy`),icon:(0,F.jsx)(ta,{size:14}),onSelect:()=>void ge(`multi-version-smart-copy`)},{label:T(`Hardlink copy`),icon:(0,F.jsx)(ta,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`hard-copy`)},{label:T(`Symbolic link copy`),icon:(0,F.jsx)(ta,{size:14}),onSelect:()=>void ge(`symbolic-copy`)}]:[{label:T(`Symbolic link`),icon:(0,F.jsx)(ti,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-file`)},{label:T(`Hard link`),icon:(0,F.jsx)(ti,{size:14}),onSelect:()=>void ge(`hard`)}]:[]];P.push({label:T(`Create link`),icon:(0,F.jsx)(ia,{size:14}),children:e,onSelect:()=>void 0})}!E&&n?.isDirectory&&oe!==null&&P.push({label:T(`Case-sensitive names`),icon:(0,F.jsx)(ea,{size:14}),checked:oe,onSelect:()=>void he()}),P.push({label:T(`Copy as path`),icon:(0,F.jsx)(ta,{size:14}),onSelect:()=>void me(e.paths)}),b&&P.push({label:T(`Add to file tray`),icon:(0,F.jsx)(Xi,{size:14}),onSelect:()=>b(e.paths)}),!E&&(I?S:x)&&P.push({label:T(I?`Remove from favorites`:`Add to favorites`),icon:I?(0,F.jsx)($i,{size:14}):(0,F.jsx)(Qi,{size:14}),onSelect:()=>I?S?.(de):x?.(de)}),E||P.push({label:T(`Show in Explorer`),icon:(0,F.jsx)(ei,{size:14}),separatorBefore:!0,onSelect:()=>void W(de[0])}),f&&le.push({label:T(`Cut`),icon:(0,F.jsx)(na,{size:16}),shortcut:Kt(r.cut),onSelect:()=>f(e.paths,!0)},{label:T(`Copy`),icon:(0,F.jsx)(ta,{size:16}),shortcut:Kt(r.copy),onSelect:()=>f(e.paths,!1)}),M&&n&&u&&le.push({label:T(`Rename`),icon:(0,F.jsx)(Fi,{size:16}),shortcut:Kt(r.rename),onSelect:()=>u(n.path)}),d&&le.push({label:T(`Delete`),icon:(0,F.jsx)(gi,{size:16}),danger:!0,shortcut:Kt(r.delete),onSelect:()=>d(e.paths)}),E||le.push({label:T(`Properties`),icon:(0,F.jsx)(ui,{size:16}),shortcut:Kt(r.properties),onSelect:()=>void kt(e.paths)})}if(ie.loading)P.push({label:T(`More actions`),icon:(0,F.jsx)(Di,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(ie.verbs.length>0){let e={items:[],children:new Map};for(let t of ie.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,F.jsx)(ao,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Lt(ce,ie.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];P.push({label:T(ie.safe?`More actions`:`More actions (extensions)`),icon:(0,F.jsx)(Di,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,F.jsx)(Ka,{items:P,onClose:a,quick:le,x:e.x,y:e.y})}function ao({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,F.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,F.jsx)(ci,{size:14});case`document`:return(0,F.jsx)(Ni,{size:14});case`cut`:return(0,F.jsx)(na,{size:14});case`copy`:return(0,F.jsx)(ta,{size:14});case`paste`:return(0,F.jsx)(ra,{size:14});case`trash`:return(0,F.jsx)(gi,{size:14});case`pencil`:return(0,F.jsx)(Fi,{size:14});case`gear`:return(0,F.jsx)(ui,{size:14});case`star`:return(0,F.jsx)(Hi,{size:14});case`pin`:return(0,F.jsx)(di,{size:14});case`executable`:return(0,F.jsx)(Di,{size:14});case`share`:return(0,F.jsx)(ia,{size:14});case`arrow`:return(0,F.jsx)(ci,{size:14});default:return(0,F.jsx)(yi,{size:14})}}function oo(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function so({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=L(),[l,u]=(0,D.useState)(null),d=(0,D.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,D.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(co,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,F.jsx)(lo,{children:f?.label??``}):(0,F.jsx)(uo,{children:a}),a===void 0&&(0,F.jsx)(fo,{children:(0,F.jsx)(li,{size:11})})]}),l&&(0,ka.createPortal)((0,F.jsx)(po,{"aria-label":c(`Options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,F.jsxs)(mo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,F.jsx)(ho,{children:t.label}),t.value===e&&(0,F.jsx)(_i,{size:11})]},t.value))}),document.body)]})}var co=_.button`
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
`,lo=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,uo=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,fo=_.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,po=_.div`
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
    ${Ba}
`,mo=_.button`
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
`,ho=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,go=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],_o=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],vo=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],yo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],bo=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function xo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=L(),a=(0,D.useRef)(null),[o,s]=(0,D.useState)(e),[c,l]=(0,D.useState)(t),[u,d]=(0,D.useState)(`zip`),[f,p]=(0,D.useState)(`5`),[m,h]=(0,D.useState)(`default`),[g,_]=(0,D.useState)(`none`),[v,y]=(0,D.useState)(``),[b,x]=(0,D.useState)(`0`),[S,ee]=(0,D.useState)(!1);(0,D.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let C=go.find(e=>e.value===u)??go[0],te=u===`zip`||u===`zipx`,ne=g!==`none`,w=te||u===`7z`,T=u===`zip`||u===`7z`,re=async()=>{if(S||!c.trim()||!o||ne&&v.length===0)return;ee(!0);let e=await r({directory:o,name:c.trim(),format:u,level:C.level?Number(f):0,method:te?m:null,encryption:w?g:`none`,password:ne?v:void 0,splitSize:T?Number(b):0});ee(!1),e&&n()};return(0,ka.createPortal)((0,F.jsx)(So,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,F.jsxs)(Co,{"aria-modal":`true`,role:`dialog`,children:[(0,F.jsx)(wo,{children:i(`Compress to…`)}),(0,F.jsxs)(To,{children:[(0,F.jsx)(Eo,{children:i(`Archive name`)}),(0,F.jsx)(Do,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&re()}}),(0,F.jsx)(Oo,{children:C.extension})]}),(0,F.jsxs)(To,{children:[(0,F.jsx)(Eo,{children:i(`Format`)}),(0,F.jsx)(so,{onChange:e=>d(e),options:go.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,F.jsxs)(To,{children:[(0,F.jsx)(Eo,{children:i(`Method`)}),(0,F.jsx)(so,{disabled:!te,onChange:h,options:_o.map(e=>({...e,label:i(e.label)})),value:te?m:`default`,width:236,zIndex:3700})]}),(0,F.jsxs)(To,{children:[(0,F.jsx)(Eo,{children:i(`Encryption`)}),(0,F.jsx)(so,{disabled:!w,onChange:e=>{_(e),e===`none`&&y(``)},options:vo.map(e=>({...e,label:i(e.label)})),value:w?g:`none`,width:236,zIndex:3700})]}),ne&&(0,F.jsxs)(To,{children:[(0,F.jsx)(Eo,{children:i(`Password`)}),(0,F.jsx)(Do,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,F.jsxs)(To,{children:[(0,F.jsx)(Eo,{children:i(`Split volumes`)}),(0,F.jsx)(so,{disabled:!T,onChange:x,options:yo.map(e=>({...e,label:i(e.label)})),value:T?b:`0`,width:236,zIndex:3700})]}),(0,F.jsxs)(To,{children:[(0,F.jsx)(Eo,{children:i(`Compression level`)}),(0,F.jsx)(so,{disabled:!C.level,onChange:p,options:bo.map(e=>({...e,label:i(e.label)})),value:C.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,F.jsxs)(To,{$stack:!0,children:[(0,F.jsx)(Eo,{children:i(`Destination`)}),(0,F.jsxs)(ko,{children:[(0,F.jsx)(Ao,{title:o,children:o}),(0,F.jsx)(Mo,{disabled:S,onClick:()=>void fa(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,F.jsxs)(jo,{children:[(0,F.jsx)(Mo,{disabled:S,onClick:n,type:`button`,children:i(`Cancel`)}),(0,F.jsx)(No,{disabled:S||!c.trim()||ne&&v.length===0,onClick:()=>void re(),type:`button`,children:i(S?`Compressing…`:`Compress`)})]})]})}),document.body)}var So=_.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Wa}
`,Co=_.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${za}
`,wo=_.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,To=_.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Eo=_.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Do=_.input`
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
`,Oo=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,ko=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Ao=_.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,jo=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Mo=_.button`
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
`,No=_(Mo)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Po({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=L(),c=(0,D.useRef)(null);return(0,D.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,ka.createPortal)((0,F.jsx)(Fo,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,F.jsxs)(Io,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(Lo,{children:t}),(0,F.jsx)(Ro,{children:n}),(0,F.jsxs)(zo,{children:[(0,F.jsx)(Bo,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,F.jsx)(Bo,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Fo=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Wa}
`,Io=_.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${za}
`,Lo=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ro=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,zo=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Bo=_.button`
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
`,Vo=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Ho=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Uo=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Wo=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Go({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=L(),[l,u]=(0,D.useState)(!1),[d,f]=(0,D.useState)(!1),[p,m]=(0,D.useState)(!1),[h,g]=(0,D.useState)(0),[_,v]=(0,D.useState)(0),[y,b]=(0,D.useState)(null),[x,S]=(0,D.useState)(!1),[ee,C]=(0,D.useState)(!1),te=(0,D.useRef)(null),ne=(0,D.useRef)(null),w=(0,D.useRef)(null),T=(0,D.useRef)(null),[re,E]=(0,D.useState)(()=>{let e=Ln(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),ie=e?.path??null,O=ln(ie),ae=e?Ko(e.name):``,k=!!e&&!e.isDirectory&&Vo.has(ae),oe=!!e&&!e.isDirectory&&Ho.has(ae),A=!!e&&!e.isDirectory&&Uo.has(ae),se=!!e&&!e.isDirectory&&Wo.has(ae),j=!!e&&!e.isDirectory&&ae===`pdf`,M=mn(k?O:null,512,e?.modified??0),ce=hn(A?O:null,e?.modified??0,ae),N=hn(k||oe?O:null,e?.modified??0,ae),P=gn(j?O:null,e?.modified??0),le=cn(!k&&!oe&&!A&&!se&&!j?O:null,e?.isDirectory??!1);if((0,D.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),C(!1)},[ie]),(0,D.useEffect)(()=>{if(!O||!se){b(null),S(!1);return}let e=!0;return S(!0),b(null),Ee(O).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`Could not read this file.`)}),S(!1))}),()=>{e=!1}},[O,se]),!e&&!s)return null;let ue=e=>{w.current={x:e.clientX,width:ne.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},de=e=>{let t=w.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},I=e=>{w.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},fe=e=>{T.current={y:e.clientY,height:re},e.currentTarget.setPointerCapture(e.pointerId)},pe=e=>{let t=T.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));E(n),Rn(`yafm.preview.media.height`,n)},R=e=>{T.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,F.jsxs)(Jo,{children:[r&&(0,F.jsx)(Yo,{onPointerDown:ue,onPointerMove:de,onPointerUp:I,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,F.jsx)(Xo,{ref:ne,style:{width:r?t:0},children:(0,F.jsxs)(Zo,{children:[(0,F.jsx)(ei,{size:56}),(0,F.jsx)(`span`,{children:s})]})})]});let me=()=>{let e=te.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,F.jsxs)(Jo,{children:[r&&(0,F.jsx)(Yo,{onPointerDown:ue,onPointerMove:de,onPointerUp:I,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(Xo,{ref:ne,style:{width:r?t:0},children:[(0,F.jsx)(Qo,{style:{height:re},children:k&&N&&!l?(0,F.jsxs)(es,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,F.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:me,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:M??void 0,preload:`metadata`,ref:te,src:N}),(0,F.jsx)(ts,{$visible:!d,onClick:me,title:c(`Play`),type:`button`,children:(0,F.jsx)(aa,{size:28})}),(0,F.jsxs)(ns,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,F.jsxs)(rs,{children:[(0,F.jsx)(`span`,{children:qo(_)}),(0,F.jsx)(`span`,{children:qo(h)})]}),(0,F.jsx)(is,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=te.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):oe&&N?(0,F.jsx)(`audio`,{controls:!0,src:N}):A&&ce?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:ce}):j&&P&&!ee?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>C(!0),src:P}):j?(0,F.jsx)(ti,{size:64}):se?(0,F.jsx)(as,{children:x||!y?(0,F.jsx)(ss,{children:c(`Loading…`)}):y.error?(0,F.jsx)(ss,{children:y.error}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(os,{children:y.text}),y.truncated&&(0,F.jsx)(ss,{children:c(`Showing the first 256 KB.`)})]})}):k&&M?(0,F.jsx)(`img`,{alt:``,src:M}):le?(0,F.jsx)(`img`,{alt:``,src:le}):e.isDirectory?(0,F.jsx)(ei,{size:64}):(0,F.jsx)(ti,{size:64})}),(0,F.jsx)($o,{onDoubleClick:()=>{E(210),Rn(`yafm.preview.media.height`,210)},onPointerDown:fe,onPointerMove:pe,onPointerUp:R,title:c(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(cs,{children:[(0,F.jsx)(ls,{title:e.path,children:e.name}),o&&(0,F.jsx)(us,{children:o}),(0,F.jsx)(ds,{children:e.fields.map(e=>(0,F.jsxs)(fs,{children:[(0,F.jsx)(ps,{children:e.label}),(0,F.jsx)(ms,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Ko(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function qo(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Jo=_.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    min-width: 220px;
    min-height: 0;
`,Yo=_.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Xo=_.aside`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    background: var(--bg-secondary);
    font-family: var(--font-details), var(--font-cjk);
    transition: width 180ms cubic-bezier(0.22, 1, 0.36, 1);
`,Zo=_.div`
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
`,Qo=_.div`
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
`,$o=_.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,es=_.div`
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
`,ts=_.button`
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
`,ns=_.div`
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
`,rs=_.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,is=_.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,as=_.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,os=_.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,ss=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,cs=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,ls=_.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,us=_.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,ds=_.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,fs=_.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,ps=_.span`
    color: var(--text-muted);
`,ms=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,hs=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],gs=[...hs],_s={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},vs={folder:e=>(0,F.jsx)(ei,{size:e}),home:e=>(0,F.jsx)($r,{size:e}),desktop:e=>(0,F.jsx)(Ii,{size:e}),documents:e=>(0,F.jsx)(Li,{size:e}),downloads:e=>(0,F.jsx)(Ri,{size:e}),pictures:e=>(0,F.jsx)(zi,{size:e}),music:e=>(0,F.jsx)(Bi,{size:e}),videos:e=>(0,F.jsx)(Vi,{size:e}),drive:e=>(0,F.jsx)(ni,{size:e}),image:e=>(0,F.jsx)(Si,{size:e}),video:e=>(0,F.jsx)(Ci,{size:e}),audio:e=>(0,F.jsx)(wi,{size:e}),text:e=>(0,F.jsx)(bi,{size:e}),code:e=>(0,F.jsx)(xi,{size:e}),clock:e=>(0,F.jsx)(mi,{size:e}),star:e=>(0,F.jsx)(Hi,{size:e}),file:e=>(0,F.jsx)(ti,{size:e}),archive:e=>(0,F.jsx)(Ti,{size:e}),pdf:e=>(0,F.jsx)(Ei,{size:e}),executable:e=>(0,F.jsx)(Di,{size:e}),font:e=>(0,F.jsx)(Oi,{size:e}),database:e=>(0,F.jsx)(ki,{size:e}),config:e=>(0,F.jsx)(Ai,{size:e}),spreadsheet:e=>(0,F.jsx)(ji,{size:e}),presentation:e=>(0,F.jsx)(Mi,{size:e}),document:e=>(0,F.jsx)(Ni,{size:e}),app:e=>(0,F.jsx)(yi,{size:e}),gear:e=>(0,F.jsx)(ui,{size:e}),pin:e=>(0,F.jsx)(di,{size:e}),trash:e=>(0,F.jsx)(gi,{size:e}),overview:e=>(0,F.jsx)(Pi,{size:e}),book:e=>(0,F.jsx)(Ui,{size:e}),briefcase:e=>(0,F.jsx)(Wi,{size:e}),cloud:e=>(0,F.jsx)(Gi,{size:e}),gamepad:e=>(0,F.jsx)(Ki,{size:e}),camera:e=>(0,F.jsx)(qi,{size:e}),terminal:e=>(0,F.jsx)(Ji,{size:e}),server:e=>(0,F.jsx)(Yi,{size:e}),package:e=>(0,F.jsx)(Xi,{size:e}),globe:e=>(0,F.jsx)(Zi,{size:e}),heart:e=>(0,F.jsx)(Qi,{size:e}),share:e=>(0,F.jsx)(Yi,{size:e}),favorites:e=>(0,F.jsx)(Qi,{size:e})};function ys(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function bs(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??hs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||gs.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=ys(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${_s[n]??n}${xs(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function xs(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Ss({panel:e,size:t=16}){let n=un(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,F.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?vs[e.icon]:void 0;if(r)return(0,F.jsx)(F.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,F.jsx)(ei,{size:t});case`recent`:return(0,F.jsx)(mi,{size:t});case`frequent`:return(0,F.jsx)(Hi,{size:t});case`drives`:return(0,F.jsx)(ni,{size:t});case`home`:return(0,F.jsx)($r,{size:t});case`share`:return(0,F.jsx)(Yi,{size:t});case`favorites`:return(0,F.jsx)(Qi,{size:t});default:return(0,F.jsx)(ei,{size:t})}}function Cs({place:e,size:t=18}){let n=un(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,F.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&vs[e.icon]?(0,F.jsx)(F.Fragment,{children:vs[e.icon](t)}):(0,F.jsx)(ei,{size:t})}var ws=`#64748b`;function Ts(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Es({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=L(),[c,l]=(0,D.useState)(``),[u,d]=(0,D.useState)(`#2dd4bf`),f=(0,D.useRef)(null);(0,D.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,ka.createPortal)((0,F.jsxs)(Ds,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,F.jsxs)(Os,{children:[(0,F.jsx)(`span`,{children:s(`Tags`)}),(0,F.jsx)(ks,{onClick:o,title:s(`Close`),type:`button`,children:(0,F.jsx)(vi,{size:11})})]}),(0,F.jsxs)(As,{children:[p.length===0&&(0,F.jsx)(Ps,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,F.jsxs)(js,{children:[(0,F.jsx)(Ms,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,F.jsxs)(Ns,{$color:t,$ink:Ts(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,F.jsx)(_i,{size:11}),(0,F.jsx)(`span`,{children:e})]})]},e)})]}),(0,F.jsxs)(Fs,{children:[(0,F.jsx)(Ms,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,F.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,F.jsx)(Is,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var Ds=_.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${za}
`,Os=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,ks=_.button`
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
`,As=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,js=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ms=_.input`
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
`,Ns=_.button`
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
`,Ps=_.span`
    font-size: 11px;
    color: var(--text-muted);
`,Fs=_.div`
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
`,Is=_.button`
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
`,Ls={file:ti,folder:ei,text:bi,code:xi,image:Si,video:Ci,audio:wi,archive:Ti,pdf:Ei,executable:Di,font:Oi,database:ki,config:Ai,spreadsheet:ji,presentation:Mi,document:Ni},Rs={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function zs(e){let t=e.lastIndexOf(`.`);return t>0?Rs[e.slice(t).toLowerCase()]??`file`:`file`}function Bs({name:e,size:t}){let n=Ls[e??`file`]??ti;return(0,F.jsx)(n,{size:t})}function Vs({path:e,name:t,isDirectory:n,size:r=18}){let i=cn(e,n);return i?(0,F.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,F.jsx)(ei,{size:r}):(0,F.jsx)(Bs,{name:zs(t),size:r})}var Hs=`application/x-yafm-paths`,Us=[Hs,`text/uri-list`];function Ws(e){return e?.types.some(e=>Us.includes(e.toLowerCase()))??!1}function Gs(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Hs);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(qs).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Ks=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function qs(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Ks?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Js(e,t,n=!0){e.dataTransfer.setData(Hs,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Ys({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=L(),[m,h]=(0,D.useState)(()=>new Set),[g,_]=(0,D.useState)(!1),v=(0,D.useRef)(null),y=(0,D.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),b=(0,D.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),x=(0,D.useRef)(null);if((0,D.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=x.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Ws(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Gs(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let S=new Set([...e,...t].map(e=>e.path)),ee=S.size>0&&[...S].every(e=>m.has(e)),C=S.size,te=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},ne=()=>{h(ee?new Set:S)},w=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},T=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},E=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},ie=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},O=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},ae=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of b)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},k=(e,t)=>{let n=m.has(e.path);return(0,F.jsxs)(sc,{$checked:n,draggable:!0,onClick:()=>te(e.path),onDragStart:r=>{Js(r,n&&m.size>0?[...new Set([...y,...b].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,F.jsx)(cc,{$checked:n,onClick:t=>{t.stopPropagation(),te(e.path)},type:`button`,children:n&&(0,F.jsx)(_i,{size:8})}),(0,F.jsx)(Vs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,F.jsxs)(lc,{children:[(0,F.jsx)(uc,{children:e.name}),(0,F.jsx)(dc,{children:re(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},oe=e=>{Ws(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,F.jsxs)(Xs,{$dragging:g,"data-tray":`true`,ref:x,style:{left:i.x,top:i.y},onDragEnter:oe,onDragOver:oe,onDrop:e=>{let{paths:t}=Gs(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,F.jsxs)(Zs,{onPointerDown:w,onPointerMove:T,onPointerUp:E,children:[(0,F.jsxs)(Qs,{children:[(0,F.jsx)(Xi,{size:13}),p(`Tray`),(0,F.jsx)($s,{children:C})]}),(0,F.jsxs)(ec,{onPointerDown:e=>e.stopPropagation(),children:[(0,F.jsx)(tc,{onClick:ne,title:p(ee?`Select none`:`Select all`),type:`button`,children:p(ee?`None`:`All`)}),(0,F.jsx)(tc,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,F.jsx)(nc,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,F.jsx)(vi,{size:10})})]})]}),(0,F.jsxs)(rc,{children:[(0,F.jsxs)(ac,{children:[p(`In this app`),(0,F.jsx)($s,{children:e.length})]}),e.length===0&&(0,F.jsx)(ic,{children:p(`Drag files or folders here`)}),e.map(e=>k(e,!0)),t.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(ac,{$clipboard:!0,children:[p(`Clipboard`),(0,F.jsx)($s,{children:t.length}),n&&(0,F.jsx)(oc,{children:p(`cut`)})]}),t.map(e=>k(e,n))]})]}),(0,F.jsxs)(fc,{children:[(0,F.jsx)(pc,{$plain:!0,disabled:y.length===0,onClick:O,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,F.jsx)(pc,{disabled:m.size===0||!a,onClick:ae,type:`button`,children:p(`Move here`)}),(0,F.jsx)(pc,{$danger:!0,disabled:y.length===0,onClick:ie,type:`button`,children:p(`Remove`)})]})]})}var Xs=_.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Aa}
    ${za}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Zs=_.div`
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
`,Qs=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,$s=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,ec=_.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,tc=_.button`
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
`,nc=_.button`
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
`,rc=_.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,ic=_.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,ac=_.div`
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
`,oc=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,sc=_.div`
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
`,cc=_.button`
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
`,lc=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,uc=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dc=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fc=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,pc=_.button`
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
`,mc=new Map,hc=new Set,gc=0;function _c(){gc+=1;for(let e of hc)e()}function vc(e,t){t?mc.set(e,t):mc.delete(e),_c()}function yc(e){return mc.has(e)}function bc(e,t,n){mc.get(e)?.(t,n)}function xc(e){return hc.add(e),()=>hc.delete(e)}function Sc(){return gc}function Cc(e){return(0,D.useSyncExternalStore)(xc,Sc,Sc),{available:yc(e),open:(t,n)=>bc(e,t,n)}}function wc(e){return[...mc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function Tc(e){return(0,D.useSyncExternalStore)(xc,Sc,Sc),{available:wc(e).length>0,open:(t,n)=>{let r=wc(e).at(-1);r&&bc(r,t,n)}}}var Ec=60,Dc=300,Oc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],kc=190,Ac=120;function jc({listing:e,loading:t,error:n,find:r=vn,view:i,showImages:a,imageStripHeight:s=kc,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:d,onOpenFile:p,showCheckboxes:m=!0,openOnSingleClick:h=!1,shortcuts:g=Vt,enableShortcuts:_=!0,refreshToken:b=0,onRefresh:x,onRename:S,onClipboardChanged:ee,onTransfer:C,onAddToTray:te,onAddFavorite:ne,onRemoveFavorite:w,favoritePaths:T,onExtractArchive:re,onPaste:E,confirmDelete:ie=!1,previewVideoAudio:O=!1,previewVideoAutoplay:ae=!1,showDetails:k=!0,onPreviewInfo:oe,onActivate:A,groupOf:se,onGridScroll:j,gridFooter:M,allowBackgroundMenu:ce=!0,readOnly:N=!1,onSelectionChange:P,onSelectionCountChange:le,selectionMenuRequest:ue,selectionMenuId:de,singleSelect:I=!1,pendingRename:fe=null,pendingRenameToken:pe=0}){let R=L(),me=Pn(),he=(0,D.useRef)(null),z=(0,D.useRef)(null),ge=(0,D.useRef)(null),[_e,ve]=(0,D.useState)(Dc),[B,ye]=(0,D.useState)({top:0,height:640}),be=(0,D.useRef)(null),xe=(0,D.useRef)(null),[Se,Ce]=(0,D.useState)(null),[we,Te]=(0,D.useState)(s),[V,Ee]=(0,D.useState)(()=>new Set),De=(0,D.useRef)(V),Oe=(0,D.useRef)([]);De.current=V,(0,D.useEffect)(()=>P?.([...V]),[V,P]),(0,D.useEffect)(()=>le?.(V.size),[V,le]),(0,D.useEffect)(()=>{let e=ue;if(!e||e.token===je.current)return;je.current=e.token;let t=[...De.current];t.length!==0&&(Ae({x:e.x,y:e.y,paths:t,background:!1}),vt().then(We,()=>We(!1)))},[ue]);let[ke,Ae]=(0,D.useState)(null),je=(0,D.useRef)(0),[H,Me]=(0,D.useState)(null),[Ne,Pe]=(0,D.useState)(null),[Fe,Ie]=(0,D.useState)(null),Le=(0,D.useRef)(Fe);Le.current=Fe;let Re=(0,D.useRef)(0),ze=(0,D.useRef)(A);ze.current=A;let[Be,Ve]=(0,D.useState)(()=>{let e=Ln(`yafm.preview.width`,320);return e>=220?e:320}),He=(0,D.useCallback)(e=>{Ve(e),Rn(`yafm.preview.width`,e)},[]),[Ue,We]=(0,D.useState)(!1),Ge=(0,D.useCallback)((e,t)=>{let n=[...De.current];n.length!==0&&(Ae({x:e,y:t,paths:n,background:!1}),vt().then(We,()=>We(!1)))},[]);(0,D.useEffect)(()=>{if(de)return vc(de,V.size>0?Ge:null),()=>vc(de,null)},[de,V,Ge]),(0,D.useEffect)(()=>{Ee(new Set),Ie(null),Ae(null),xe.current=null},[e?.path]),(0,D.useEffect)(()=>{Te(s)},[s]),(0,D.useEffect)(()=>{Ee(new Set),Ie(null),xe.current=null},[b]);let Ke=e=>{be.current={y:e.clientY,height:we},e.currentTarget.setPointerCapture(e.pointerId)},qe=e=>{let t=be.current;if(!t)return;let n=Math.max(Ac,Math.round(window.innerHeight*.7));Te(Math.min(n,Math.max(Ac,t.height+t.y-e.clientY)))},Je=e=>{be.current&&(be.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(we))},Ye=()=>{Te(kc),c?.(kc)},Xe=r.query.length>0,Ze=(0,D.useMemo)(()=>Oc.filter(e=>i.columns?.includes(e.id)),[i.columns]),Qe=i.columns?.includes(`linkTarget`)??!1,$e=(0,D.useMemo)(()=>`minmax(160px, 1fr) ${Ze.map(e=>`${e.width}px`).join(` `)}`.trim(),[Ze]),et=(0,D.useMemo)(()=>e?Pc(e.entries.map(t=>{let n=t.isDirectory?Fn(me,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:Xe?yn(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!Xe||r.mode===`dim`||e.ranges!==null),i,e,R):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,Xe,r,me,i.sort,i.sortDescending,R]);Oe.current=et;let tt=Math.max(40,i.iconSize+20),nt=Math.max(0,Math.floor(B.top/tt)-4),rt=Math.min(et.length,nt+Math.ceil(B.height/tt)+10),it=(0,D.useMemo)(()=>et.slice(nt,rt),[et,nt,rt]);(0,D.useEffect)(()=>{let e=ge.current;if(!e||i.mode!==`list`)return;let t=()=>ye(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,D.useEffect)(()=>{ye(e=>({...e,top:0})),ge.current&&(ge.current.scrollTop=0)},[e?.path]),(0,D.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=et.findIndex(e=>e.entry.fullPath===r.currentPath),t=ge.current;if(e<0||!t)return;let n=e*tt;(n<t.scrollTop||n+tt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else he.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,et,tt]);let at=(0,D.useMemo)(()=>et.slice(0,_e),[et,_e]);(0,D.useEffect)(()=>{ve(Dc)},[e?.path]),(0,D.useEffect)(()=>{if(!r.currentPath)return;let e=et.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&ve(t=>Math.max(t,e+Dc))},[r.currentPath,et]);let ot=(0,D.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&ve(e=>Math.min(et.length,e+Dc))},[et.length]),st=i.mode===`grid`,ct=(0,D.useMemo)(()=>{if(!st)return[];if(!se)return Lc(at,Ic);let e=[],t=new Map;for(let n of at){let r=se(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[at,st,se]),lt=(0,D.useMemo)(()=>a?et.filter(e=>!e.entry.isDirectory&&An(e.entry.name)):[],[et,a]),ut=lt.length,dt=(0,D.useMemo)(()=>lt.slice(0,Ec),[lt]),ft=(0,D.useMemo)(()=>a?Lc(dt,Fc):[],[dt,a]),pt=(0,D.useMemo)(()=>et.map(e=>e.entry.fullPath),[et]),mt=et.length>0&&V.size>=et.length,ht=V.size>0&&!mt,gt=()=>{I||(mt?Tt():Ee(new Set(pt)))},yt=e?.path??``,bt=(0,D.useCallback)((e,t)=>{if(I){xe.current=t,Ee(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Ee(r=>{if(e.shiftKey&&xe.current!==null){let e=pt.indexOf(xe.current),i=pt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(pt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),xe.current=t,e}return xe.current=t,new Set([t])})},[pt,I]),U=(0,D.useCallback)(e=>{I?(xe.current=e,Ee(new Set([e]))):(xe.current=e,Ee(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[I]),Tt=(0,D.useCallback)(()=>{xe.current=null,Ee(new Set)},[]);(0,D.useEffect)(()=>{if(pe===0||!fe||Re.current===pe||!e?.entries.some(e=>e.fullPath===fe))return;Re.current=pe,xe.current=fe,Ee(new Set([fe])),Ie({path:fe,value:v(fe)});let t=et.findIndex(e=>e.entry.fullPath===fe),n=ge.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*tt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(fe)}"]`)?.scrollIntoView({block:`nearest`})})}},[ge,e,fe,pe,tt,et,i.mode]),(0,D.useEffect)(()=>{if(!Fe)return;let e=et.findIndex(e=>e.entry.fullPath===Fe.path),t=ge.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*tt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Fe.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[ge,Fe,tt,et,i.mode]);let Et=(0,D.useCallback)(()=>Ae(null),[]),Dt=(0,D.useCallback)((e,t)=>{e.isDirectory?d(e.fullPath,Wt(t)):p?.(e.fullPath,Wt(t))},[d,p]),At=(0,D.useCallback)((e,t,n)=>{Ce({entry:e,x:t,y:n})},[]),Mt=(0,D.useRef)(null),Nt=(0,D.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Js(e,V.has(n)?[...V]:[n])},[V]),Pt=(0,D.useCallback)(e=>{if(!Ws(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Mt.current=t?.dataset.directory===`true`?t.dataset.path??yt:yt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[yt]),Ft=(0,D.useCallback)(e=>{if(N)return;let{paths:t,move:n}=Gs(e),r=Mt.current??yt;Mt.current=null,t.length!==0&&C&&(e.preventDefault(),C(t,r,!e.ctrlKey&&n))},[yt,C,N]),W=(0,D.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),N||!t&&!ce)return;let n=De.current;t&&!n.has(t)&&Ee(new Set([t])),t&&(xe.current=t);let r=t?n.has(t)?[...n]:[t]:[];Ae({x:e.clientX,y:e.clientY,paths:r,background:!t}),vt().then(We,()=>We(!1))},[ce,yt]),It=(0,D.useCallback)(()=>x?.(),[x]),Lt=(e,t)=>{xe.current=e,Ee(new Set([e])),t&&Ie({path:e,value:v(e)}),It()},zt=H&&(0,F.jsx)(xo,{initialDirectory:yt,initialName:H.name,onCancel:()=>Me(null),onCompress:async e=>{let t=await Rt(H.paths,e);return!t.ok||!t.path?(_a(t.error??R(`Could not create the archive.`)),!1):(Lt(t.path,!1),!0)}}),Bt=async(e,t=!1)=>{await _t(e,t)&&(We(!0),ee?.())},Ht=async e=>{e&&(await xt(e)?(It(),E?.()):_a(R(`Nothing on the clipboard could be pasted here.`)))},Ut=async(e,t=!1)=>{if(!yt)return;let n=e===null?await wt(yt,t):await Ot(yt,e);!n.ok||n.path===null?_a(n.error??R(`Could not create the item.`)):(xe.current=n.path,Ee(new Set([n.path])),Ie({path:n.path,value:v(n.path)}),It())},Kt=e=>{Ee(new Set([e.fullPath])),xe.current=e.fullPath,Ie({path:e.fullPath,value:e.name})},qt=(0,D.useCallback)(e=>Ie(t=>t&&{...t,value:e}),[]),Yt=(0,D.useCallback)(()=>Ie(null),[]),Xt=(0,D.useCallback)(async()=>{let e=Le.current;if(Ie(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Oe.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Ct(e.path,t);r.ok?(Tt(),r.path&&S?.(e.path,r.path),It(),window.setTimeout(()=>It(),250)):_a(r.error??R(`Could not rename the entry.`))},[Tt,S,It,R]),Zt=async(e,t=!1)=>{if((t||ie)&&!await Qt(e,t))return;let n=await St(e,t);if(!n.ok&&n.needsPermanent){if(!await Qt(e,!0))return;n=await St(e,!0)}if(n.ok)Tt(),It();else{if(n.cancelled)return;_a(n.error??R(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},Qt=(0,D.useCallback)((e,t)=>new Promise(n=>Pe({paths:e,permanent:t,resolve:n})),[]),$t=(0,D.useCallback)(e=>{Pe(t=>(t?.resolve(e),null))},[]);(0,D.useEffect)(()=>{if(!_||ke)return;let e=e=>{if(Jt(e.target))return;ze.current?.();let t=Gt(e),n=[...V],r=n.length===1?et.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(pt.length===0)return;e.preventDefault();let n=xe.current&&pt.includes(xe.current)?xe.current:V.size===1?[...V][0]:null,r=n?pt.indexOf(n):-1,i=t===`home`?0:t===`end`?pt.length-1:Math.max(0,Math.min(pt.length-1,r+(t===`arrowdown`?1:-1))),a=pt[i];Ee(new Set([a])),xe.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===g.copy?i(()=>{n.length>0&&Bt(n)}):t===g.cut?i(()=>{n.length>0&&Bt(n,!0)}):t===g.paste?i(()=>void Ht(yt)):t===g.delete?i(()=>{n.length>0&&Zt(n)}):t===g.deletePermanently?i(()=>{n.length>0&&Zt(n,!0)}):t===g.selectAll?i(()=>{Ee(new Set(pt)),xe.current=pt[0]??null}):t===g.invertSelection?i(()=>{Ee(new Set(pt.filter(e=>!V.has(e)))),xe.current=pt[0]??null}):t===g.rename&&r?i(()=>void Kt(r)):t===g.open&&r?i(()=>{r.isDirectory?d(r.fullPath):p?.(r.fullPath)}):t===g.newFolder||t===`f10`?i(()=>void Ut(null)):t===g.terminal?i(()=>void jt(yt)):t===g.properties&&i(()=>void kt(n.length>0?n:yt?[yt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[pt,Bt,Ut,yt,_,ke,d,p,Ht,Zt,Kt,et,V,g]);let en=Ne&&(0,F.jsx)(Po,{confirmLabel:Ne.permanent?R(`Delete`):R(`Move`),danger:Ne.permanent,message:Ne.permanent?R(`Permanently delete {target}? This cannot be undone.`,{target:Ne.paths.length===1?R(`this item`):R(`{count} items`,{count:Ne.paths.length})}):R(`Move {target} to the recycle bin?`,{target:Ne.paths.length===1?R(`this item`):R(`{count} items`,{count:Ne.paths.length})}),onCancel:()=>$t(!1),onConfirm:()=>$t(!0),open:!0,title:Ne.permanent?R(`Delete permanently`):R(`Move to the recycle bin`)}),G=(0,D.useMemo)(()=>{if(!e||V.size===0)return null;let t=pt.find(e=>V.has(e));return t?et.find(e=>e.entry.fullPath===t)?.entry??null:null},[pt,e,et,V]),tn=(0,D.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:v(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:R(`Type`),value:R(`Folder`)},{label:R(`Location`),value:e.parent??`—`},{label:R(`Path`),value:e.path},{label:R(`Size`),value:f(t)},{label:R(`Items`),value:o(R,n,`1 item`,`{count} items`)},{label:R(`Modified`),value:`—`},{label:R(`Created`),value:`—`},{label:R(`Attributes`),value:`—`}]}},[e,R]),nn=(0,D.useMemo)(()=>{if(!G||!e)return null;let t=G.isDirectory?e.folderSizes[G.name]:void 0,n=e.tags[G.name]??[],r=G.name.lastIndexOf(`.`),i=r>0&&r<G.name.length-1?G.name.slice(r+1).toUpperCase():`—`;return{name:G.name,path:G.fullPath,isDirectory:G.isDirectory,size:G.size,modified:G.modified,created:G.created,fields:[{label:R(`Type`),value:Bc(G,R)},...G.isEncrypted?[{label:R(`Encryption`),value:R(`Password required`)}]:[],{label:R(`Extension`),value:G.isDirectory?`—`:i},{label:R(`Location`),value:e.path},{label:R(`Full path`),value:G.fullPath},{label:R(`Size`),value:G.isDirectory?t===void 0?`—`:f(t):f(G.size)},...G.isDirectory?[{label:R(`Items`),value:`${e.counts[G.name]??`—`}`}]:[],{label:R(`Modified`),value:y(G.modified)},{label:R(`Created`),value:y(G.created)},{label:R(`Link status`),value:G.linkTarget==null?G.linkCount>1?R(`Hard link`):`—`:G.linkValid?`OK`:R(`Broken`)},...G.linkTarget?[{label:R(`Target`),value:G.linkTarget}]:[],...G.linkCount>1?[{label:R(`Links`),value:String(G.linkCount)}]:[],{label:R(`Attributes`),value:[G.isHidden?R(`Hidden`):``,G.isSystem?R(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:R(`Tags`),value:n.join(`, `)}]:[]]}},[e,G,R]),K=ke?.paths.length===1?ke.paths[0]:null,rn=K?et.find(e=>e.entry.fullPath===K)?.entry:void 0,an=rn?{path:rn.fullPath,isDirectory:rn.isDirectory}:null,q=nn??tn,on=(0,D.useRef)(oe);on.current=oe,(0,D.useEffect)(()=>{on.current?.(q)},[oe,q]);let sn=k&&q&&(0,F.jsx)(Go,{info:q,onWidth:He,selectionNote:V.size>1?o(R,V.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:O,videoAutoplay:ae,width:Be});return n&&!e?(0,F.jsx)(Vl,{children:(0,F.jsx)(Ul,{children:n})}):!e&&!t?(0,F.jsx)(Vl,{children:(0,F.jsx)(Hl,{children:R(`Nothing selected.`)})}):i.mode===`grid`?(0,F.jsxs)(al,{onPointerDown:A,children:[(0,F.jsxs)(ol,{children:[(0,F.jsxs)(ml,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Tt()},onContextMenu:e=>W(e),onDragOver:Pt,onDragStart:Nt,onDrop:Ft,onScroll:e=>{j?.(e.currentTarget),ot(e.currentTarget)},children:[m&&et.length>0&&(0,F.jsxs)(nl,{children:[(0,F.jsx)(el,{$checked:!I&&mt,$partial:!I&&ht,"aria-label":R(mt?`Select none`:`Select all`),disabled:I,onClick:gt,title:R(mt?`Select none`:`Select all`),type:`button`,children:mt?(0,F.jsx)(_i,{size:10}):ht?(0,F.jsx)(tl,{}):null}),(0,F.jsx)(`span`,{children:R(mt?`Select none`:`Select all`)})]}),t&&!e?(0,F.jsx)(yl,{$size:i.gridSize,children:(0,F.jsx)(Kc,{size:i.gridSize})}):(0,F.jsx)(Jc,{counts:e?.counts,currentPath:Xe?r.currentPath:null,groups:ct,gridSize:i.gridSize,innerRef:he,onContextMenu:W,onOpen:d,onOpenFile:p,onRenameCancel:Yt,onRenameChange:qt,onRenameCommit:Xt,onSelect:bt,onToggle:U,openOnSingleClick:h,renaming:Fe,searching:Xe,selected:V,showCheckboxes:m,showTarget:Qe}),!t&&e&&et.length===0&&(0,F.jsx)(Bl,{children:(0,F.jsx)(Hl,{children:n??(Xe&&r.mode===`hide`?R(`No entries match the search.`):R(`This folder is empty.`))})}),M]}),ke&&(0,F.jsx)(io,{canPaste:Ue,directory:yt,allowCompression:!0,menu:ke,onAddToTray:te,onAddFavorite:ne,onRemoveFavorite:w,favoritePaths:T,onExtractArchive:re,onArchiveCreated:Lt,onClose:Et,onCompressTo:(e,t)=>Me({paths:e,name:t}),onCopy:Bt,onCreateFile:e=>void Ut(e),onCreateFolder:e=>void Ut(null,e),onDelete:Zt,onOpen:d,onOpenFile:p,onPaste:Ht,onRefresh:It,onRename:e=>{let t=et.find(t=>t.entry.fullPath===e)?.entry;t&&Kt(t)},shortcuts:g,target:an}),zt,en]}),sn]}):(0,F.jsxs)(al,{onPointerDown:A,children:[(0,F.jsxs)(ol,{children:[(0,F.jsxs)(sl,{onScroll:e=>{ge.current&&ge.current.scrollLeft!==e.currentTarget.scrollLeft&&(ge.current.scrollLeft=e.currentTarget.scrollLeft)},ref:z,style:{gridTemplateColumns:$e},children:[(0,F.jsxs)($c,{children:[m&&(0,F.jsx)(el,{$checked:!I&&mt,$partial:!I&&ht,"aria-label":R(mt?`Select none`:`Select all`),disabled:I,onClick:e=>{e.stopPropagation(),gt()},title:R(mt?`Select none`:`Select all`),type:`button`,children:mt?(0,F.jsx)(_i,{size:10}):ht?(0,F.jsx)(tl,{}):null}),(0,F.jsxs)(cl,{onClick:()=>l(`name`),type:`button`,children:[R(`Name`),Mc(i,`name`)]})]}),Ze.map(e=>(0,F.jsxs)(cl,{onClick:()=>l(e.id),type:`button`,children:[R(e.label),Mc(i,e.id)]},e.id))]}),(0,F.jsxs)(ll,{onClick:e=>{e.target===e.currentTarget&&Tt()},onContextMenu:e=>W(e),onDragOver:Pt,onDragStart:Nt,onDrop:Ft,onScroll:e=>{z.current&&z.current.scrollLeft!==e.currentTarget.scrollLeft&&(z.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;ye(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:ge,children:[t&&!e?(0,F.jsx)(Gc,{template:$e,columns:Ze.length}):(0,F.jsxs)(F.Fragment,{children:[nt>0&&(0,F.jsx)(`div`,{style:{height:nt*tt}}),it.map(t=>{let n=t.entry.fullPath;return(0,F.jsx)(Xc,{current:Xe&&n===r.currentPath,dim:Xe&&t.ranges===null,height:tt,iconSize:i.iconSize,innerRef:he,listing:e,onContextMenu:W,onOpen:Dt,onRenameCancel:Yt,onRenameChange:qt,onRenameCommit:Xt,onSelect:bt,onTagEdit:At,onToggle:U,openOnSingleClick:h,renaming:Fe?.path===n?{value:Fe.value}:null,row:t,selected:V.has(n),showCheckboxes:m,showTarget:Qe,template:$e,visible:Ze},n)}),rt<et.length&&(0,F.jsx)(`div`,{style:{height:(et.length-rt)*tt}})]}),!t&&e&&et.length===0&&(0,F.jsx)(Vl,{children:(0,F.jsx)(Hl,{children:n??(Xe&&r.mode===`hide`?R(`No entries match the search.`):R(`This folder is empty.`))})})]}),a&&lt.length>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ul,{onDoubleClick:Ye,onPointerDown:Ke,onPointerMove:qe,onPointerUp:Je,title:R(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(dl,{style:{height:we},children:[(0,F.jsxs)(fl,{children:[R(`Preview`),(0,F.jsx)(pl,{children:ut>Ec?`${dt.length} / ${ut}`:ut})]}),(0,F.jsx)(ml,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Tt()},onContextMenu:e=>W(e),children:(0,F.jsx)(Jc,{counts:e?.counts,currentPath:Xe?r.currentPath:null,groups:ft,gridSize:i.gridSize,onContextMenu:W,onOpen:d,onOpenFile:p,onSelect:bt,onToggle:U,openOnSingleClick:h,searching:Xe,selected:V,showCheckboxes:m,showTarget:Qe})})]})]}),Se&&e&&(0,F.jsx)(Es,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(Se.entry.name,e,t),onClose:()=>Ce(null),tags:e.tags[Se.entry.name]??[],x:Se.x,y:Se.y}),ke&&(0,F.jsx)(io,{canPaste:Ue,directory:yt,allowCompression:!0,menu:ke,onAddToTray:te,onAddFavorite:ne,onRemoveFavorite:w,favoritePaths:T,onExtractArchive:re,onArchiveCreated:Lt,onClose:Et,onCompressTo:(e,t)=>Me({paths:e,name:t}),onCopy:Bt,onCreateFile:e=>void Ut(e),onCreateFolder:e=>void Ut(null,e),onDelete:Zt,onOpen:d,onOpenFile:p,onPaste:Ht,onRefresh:It,onRename:e=>{let t=et.find(t=>t.entry.fullPath===e)?.entry;t&&Kt(t)},shortcuts:g,target:an}),zt,en]}),sn]})}function Mc(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Nc=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Pc(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Bc(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Nc.compare(String(r),String(i));return t.sortDescending?-o:o})}var Fc=Dn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&kn(t.entry.name)===e})),Ic=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Fc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Lc(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Rc(e){return Math.max(24,Math.min(e-56,160))}var zc={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Bc(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(zc[zs(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Vc(e,t,n,r){switch(e){case`type`:return Bc(t,r);case`size`:return Uc(t,n.folderSizes);case`modified`:return y(t.modified);case`created`:return y(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Hc({name:e,ranges:t}){if(!t||t.length===0)return(0,F.jsx)(F.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,F.jsx)(zl,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,F.jsx)(F.Fragment,{children:n})}function Uc(e,t){if(!e.isDirectory)return f(e.size);let n=t[e.name];return n===void 0?`—`:f(n)}function Wc({entry:e,size:t=18}){let n=L(),r=(0,D.useRef)(null),[i,a]=(0,D.useState)(!1);(0,D.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=cn(i?e.fullPath:null,e.isDirectory,t>32),s=un(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,F.jsxs)(Zc,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,F.jsx)(Bs,{name:e.iconSource.slice(5),size:t}):s?(0,F.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,F.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,F.jsx)(ei,{size:t}):(0,F.jsx)(Bs,{name:zs(e.name),size:t}),e.isEncrypted&&(0,F.jsx)(Qc,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,F.jsx)(la,{size:Math.max(8,Math.round(t*.52))})})]})}function Gc({template:e,columns:t}){return(0,F.jsx)(F.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,F.jsxs)(bl,{style:{gridTemplateColumns:e},children:[(0,F.jsxs)(Cl,{children:[(0,F.jsx)(xl,{style:{flexShrink:0,height:18,width:18}}),(0,F.jsx)(xl,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,F.jsx)(xl,{style:{width:t%2==0?44:92}},t))]},r))})}function Kc({size:e}){return(0,F.jsx)(F.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,F.jsxs)(Nl,{$dim:!1,$current:!1,$selected:!1,children:[(0,F.jsx)(Pl,{children:(0,F.jsx)(xl,{style:{height:e,width:e}})}),(0,F.jsx)(Il,{children:(0,F.jsx)(xl,{style:{height:9,width:`${t}%`}})})]},n))})}var qc=(0,D.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=L(),x=Pn(),S=!e.entry.isDirectory&&An(e.entry.name),ee=(0,D.useRef)(null),[C,te]=(0,D.useState)(!1);(0,D.useEffect)(()=>{if(!S||C)return;let e=ee.current;if(!e)return;if(!(`IntersectionObserver`in window)){te(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(te(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,C]);let ne=mn(S&&C?e.entry.fullPath:null,192,e.entry.modified),[w,T]=(0,D.useState)(!1),re=e.entry.fullPath,E=t=>{e.entry.isDirectory?v(re,Wt(t)):y?.(re,Wt(t))};return(0,F.jsxs)(Nl,{$current:t,$dim:n,$selected:s,onClick:e=>{h(e,re),l&&E(e)},onContextMenu:e=>_(e,re),onDoubleClick:e=>{l||E(e)},ref:e=>{ee.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":re,draggable:!u,children:[c&&(0,F.jsx)(il,{$checked:s,onClick:e=>{e.stopPropagation(),g(re)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,F.jsx)(_i,{size:10})}),(0,F.jsx)(Pl,{children:S&&ne&&!w?(0,F.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>T(!0),src:ne}):(0,F.jsx)(Fl,{children:e.place&&x.useIcons?(0,F.jsx)(Cs,{place:e.place,size:r}):(0,F.jsx)(Wc,{entry:e.entry,size:r})})}),(0,F.jsxs)(Il,{children:[u?(0,F.jsx)(Yc,{onCancel:()=>m?.(),onChange:e=>d?.(e),onCommit:()=>p?.(),value:u.value}):(0,F.jsx)(Ll,{$broken:e.entry.linkValid===!1,children:(0,F.jsx)(Hc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,F.jsxs)(Tl,{title:b(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(la,{size:9}),b(`Encrypted`)]}),(0,F.jsx)(Rl,{children:e.entry.isDirectory?i===void 0?Bc(e.entry,b):b(`{type} · {count} items`,{type:Bc(e.entry,b),count:i}):b(`{type} · {size}`,{type:Bc(e.entry,b),size:f(e.entry.size)})}),a&&e.entry.linkTarget&&(0,F.jsxs)(Dl,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,F.jsx)(ua,{size:9}),(0,F.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Jc({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=L();return(0,F.jsx)(F.Fragment,{children:e.map(e=>(0,F.jsxs)(hl,{children:[(0,F.jsxs)(gl,{children:[y(e.label),(0,F.jsx)(_l,{children:e.rows.length}),(0,F.jsx)(vl,{})]}),(0,F.jsx)(yl,{$size:t,children:e.rows.map(e=>(0,F.jsx)(qc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Rc(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Yc({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,D.useRef)(null);return(0,D.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,F.jsx)(El,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Xc=(0,D.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=L(),ee=Pn(),C=e.entry.fullPath;return(0,F.jsxs)(Sl,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,C),o&&_(e.entry,t)},onContextMenu:e=>g(e,C),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":C,draggable:!p,children:[(0,F.jsxs)(Cl,{children:[i&&(0,F.jsx)(rl,{$checked:r,onClick:e=>{e.stopPropagation(),h(C)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,F.jsx)(_i,{size:10})}),e.place&&ee.useIcons?(0,F.jsx)(Zc,{children:(0,F.jsx)(Cs,{place:e.place,size:s})}):(0,F.jsx)(Wc,{entry:e.entry,size:s}),p?(0,F.jsx)(Yc,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,F.jsx)(wl,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,F.jsx)(Hc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,F.jsxs)(Tl,{title:S(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(la,{size:9}),S(`Encrypted`)]}),a&&e.entry.linkTarget&&(0,F.jsxs)(Dl,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,F.jsx)(ua,{size:9}),(0,F.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,F.jsx)(Ol,{children:t.id===`tags`?(0,F.jsx)(kl,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,F.jsx)(Al,{$color:t,$ink:Ts(t),children:e},e)}):(0,F.jsx)(jl,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,F.jsx)(Ml,{children:S(`Broken`)}):Vc(t.id,e.entry,d,S)},t.id))]})}),Zc=_.span`
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
`,Qc=_.span`
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
`,$c=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,el=_.button`
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
`,tl=_.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,nl=_.div`
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
`,rl=_.button`
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
`,il=_(rl)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,al=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,ol=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,sl=_.div`
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
`,cl=_.button`
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
`,ll=_.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,ul=_.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,dl=_.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,fl=_.div`
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
`,pl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,ml=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,hl=_.section`
    & + & {
        margin-top: 22px;
    }
`,gl=_.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,_l=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,vl=_.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,yl=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,bl=_.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,xl=_.span`
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
`,Sl=_.div`
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
`,Cl=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,wl=_.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Tl=_.span`
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
`,El=_.input`
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
`,Dl=_.span`
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
`,Ol=_.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,kl=_.button`
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
`,Al=_.span`
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
`,jl=_.span`
    color: var(--text-muted);
    font-size: 11px;
`,Ml=_.span`
    color: #fca5a5;
`,Nl=_.div`
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
`,Pl=_.div`
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
`,Fl=_.span`
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
`,Il=_.div`
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
`,Ll=_.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Rl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,zl=_.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Bl=_.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Vl=_.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Hl=_.p`
    font-size: 13px;
    color: var(--text-muted);
`,Ul=_.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Wl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Gl=`/assets/bloom-BpfZWiaG.mp4`,Kl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,ql=`/assets/drift-BRBSQL2_.mp4`,Jl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Yl=`/assets/ember-CtSz0YxR.mp4`,Xl=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],Zl=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],Ql=[{id:`builtin:video:drift`,name:`Drift`,url:ql,poster:Kl},{id:`builtin:video:ember`,name:`Ember`,url:Yl,poster:Jl},{id:`builtin:video:bloom`,name:`Bloom`,url:Gl,poster:Wl}],$l=Zl.map(e=>({...e,variants:Xl.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:au(ou(e.id,t))}))})),eu=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>Xl.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:au(su(e.id,t))}))),tu=new Map([...$l.flatMap(e=>e.variants),...eu].map(e=>[e.id,e])),nu=new Map(Ql.map(e=>[e.id,e]));function ru(e){if(tu.has(e))return tu.get(e).url;if(nu.has(e))return nu.get(e).url;let t=e.split(`:`)[1];return t?tu.get(`builtin:${t}:indigo`)?.url??null:null}function iu(e){return nu.has(e)}function au(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function ou(e,t){return e===`dunes`?mu(t):e===`tide`?hu(t):pu(t)}function su(e,t){return e===`skyline`?lu(t):e===`orbit`?uu(t):cu(t)}function cu({accent:e,secondary:t}){let n=fu(t,`#05070f`,.86),r=fu(e,`#0b1020`,.72),i=fu(t,`#0a0f1d`,.66),a=fu(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${fu(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${fu(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function lu({accent:e,secondary:t}){let n=fu(t,`#07040d`,.84),r=fu(e,`#100716`,.7),i=fu(e,`#08050e`,.82),a=fu(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${fu(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function uu({accent:e,secondary:t}){let n=fu(e,`#03050d`,.9),r=fu(t,`#05030c`,.94),i=fu(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${fu(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${fu(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${fu(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${fu(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function du(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function fu(e,t,n){let[r,i,a]=du(e),[o,s,c]=du(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function pu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${fu(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${fu(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${fu(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${fu(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function mu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${fu(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${fu(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${fu(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${fu(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${fu(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${fu(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${fu(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function hu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${fu(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${fu(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${fu(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${fu(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var gu=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function _u(e){return gu.test(e)}function vu({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):w(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=hn(r),a=t?.startsWith(`builtin:`)?ru(t):n??i,o=n===null?r===null?t!==null&&iu(t):_u(r):_u(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,F.jsxs)(yu,{"aria-hidden":!0,children:[o?(0,F.jsx)(xu,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,F.jsx)(bu,{src:a,style:{filter:s}}),(0,F.jsx)(Su,{})]})}var yu=_.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,bu=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,xu=_.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Su=_.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
        radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function Cu({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=L(),o=(0,D.useRef)(null),[s,c]=(0,D.useState)(()=>Math.max(1,Math.ceil(t)));return(0,D.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,ka.createPortal)((0,F.jsx)(wu,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,F.jsxs)(Tu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(Eu,{children:a(`Protected folder`)}),(0,F.jsx)(Du,{children:a(`These paths are protected by the safety settings:`)}),(0,F.jsx)(Ou,{children:e.map(e=>(0,F.jsxs)(ku,{children:[(0,F.jsx)(Au,{children:e.path}),(0,F.jsx)(ju,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,F.jsx)(Mu,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,F.jsx)(Nu,{children:a(`Nothing has been deleted.`)}),(0,F.jsx)(Pu,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,F.jsxs)(Fu,{children:[(0,F.jsx)(Iu,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,F.jsx)(Lu,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var wu=_.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Wa}
`,Tu=_.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${za}
`,Eu=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Du=_.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Ou=_.div`
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
`,ku=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Au=_.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,ju=_.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Mu=_.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Nu=_.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Pu=_.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Fu=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Iu=_.button`
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
`,Lu=_.button`
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
`;function Ru(){let e=L(),[t,n]=(0,D.useState)(null),r=(0,D.useRef)(null),i=(0,D.useRef)(null);(0,D.useEffect)(()=>(ga(e=>new Promise(t=>{r.current=t,n(e)})),()=>ga(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,D.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,ka.createPortal)((0,F.jsx)(zu,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,F.jsxs)(Bu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsx)(Vu,{children:e(`Notice`)}),(0,F.jsx)(Hu,{children:t}),(0,F.jsx)(Uu,{children:(0,F.jsx)(Wu,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var zu=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Wa}
`,Bu=_.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${za}
`,Vu=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Hu=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Uu=_.div`
    display: flex;
    justify-content: flex-end;
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
`;function Gu(){let e=L(),[t,n]=(0,D.useState)(null),[r,i]=(0,D.useState)(``),a=(0,D.useRef)(null),o=(0,D.useRef)(null);(0,D.useEffect)(()=>(va((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>va(null)),[]),(0,D.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,ka.createPortal)((0,F.jsx)(Ku,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,F.jsxs)(qu,{role:`dialog`,"aria-modal":`true`,children:[(0,F.jsx)(Ju,{children:e(`Archive password`)}),(0,F.jsx)(Yu,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,F.jsx)(Xu,{title:t.archive,children:t.archive}),(0,F.jsx)(Zu,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,F.jsxs)(Qu,{children:[(0,F.jsx)($u,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,F.jsx)(ed,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var Ku=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Wa}
`,qu=_.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${za}
`,Ju=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Yu=_.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Xu=_.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Zu=_.input`
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
`,Qu=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,$u=_.button`
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
`,ed=_($u)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function td({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h}){let g=L(),_=(0,D.useRef)(null),v=c??g(`Search this folder`);(0,D.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,F.jsxs)(nd,{children:[(0,F.jsx)(ri,{}),(0,F.jsx)(rd,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(id,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,F.jsx)(ad,{onClick:()=>y(u),title:g(`Previous match (Shift+Enter)`),type:`button`,children:(0,F.jsx)(li,{size:12})}),(0,F.jsx)(ad,{$down:!0,onClick:()=>y(d),title:g(`Next match (Enter)`),type:`button`,children:(0,F.jsx)(li,{size:12})})]}),(0,F.jsx)(od,{$on:n,onClick:()=>y(f),title:g(`Match case`),type:`button`,children:`Aa`}),(0,F.jsx)(od,{$on:r,onClick:()=>y(p),title:g(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,F.jsx)(sd,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:g(t===`hide`?`Hide`:`Dim`)}),(0,F.jsx)(ad,{onClick:h,title:g(`Close search (Esc)`),type:`button`,children:(0,F.jsx)(vi,{size:12})})]})}var nd=_.div`
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
    ${Ha}
`,rd=_.input`
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
`,id=_.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,ad=_.button`
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
`,od=_.button`
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
`,sd=_(od)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function cd(e,t,n,r,i=[]){(0,D.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=yn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function ld({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=L(),a=(0,D.useRef)(null),o=(0,D.useRef)(null),[s,c]=(0,D.useState)(null);return(0,D.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,D.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,D.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,ka.createPortal)((0,F.jsxs)(ud,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(vs).map(n=>(0,F.jsx)(dd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:vs[n](16)},n)),(0,F.jsx)(dd,{onClick:async()=>{let e=await pa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,F.jsx)(oi,{size:13})}),r&&(0,F.jsx)(dd,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,F.jsx)(vi,{size:12})})]}),document.body)]})}var ud=_.div`
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
    ${Ba}
    transform-origin: top left;
`,dd=_.button`
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
`,fd={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function pd(){return P.available?await P.request(`share.list`):fd}async function md(e,t){return P.available?await P.request(`share.add`,{path:e,mode:t}):fd}async function hd(e){return P.available?await P.request(`share.remove`,{id:e}):fd}async function gd(e,t){return P.available?await P.request(`share.mode`,{id:e,mode:t}):fd}async function _d(){return P.available?(await P.request(`share.peers.refresh`)).peers??[]:[]}async function vd(e,t){P.available&&await P.request(`share.pair.start`,{host:e,port:t})}async function yd(e,t){P.available&&await P.request(`share.pair.respond`,{requestId:e,accept:t})}async function bd(e,t){P.available&&await P.request(`share.port`,{mode:t,port:e})}var xd=`share://`;function Sd(e){return e.toLowerCase().startsWith(xd)}function Cd(e){if(!Sd(e))return null;let[t,n,...r]=e.slice(8).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function wd(e,t,n=``){let r=`${xd}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Td(e){let t=Cd(e);if(!t||!P.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await P.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:wd(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:wd(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Ed(e){let t=Cd(e);if(!t||!P.available)throw Error(`This shared file is only available in the desktop app.`);let n=await P.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Dd(e){await Se(await Ed(e))}function Od({source:e,poster:t}){let n=w(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=hn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??ru(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,F.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,F.jsx)(`img`,{alt:``,src:a}):null}function kd({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=L(),s=(0,D.useRef)(null),c=(0,D.useRef)(null),l=(0,D.useRef)(!1),[u,d]=(0,D.useState)(null),[f,p]=(0,D.useState)(null),[m,h]=(0,D.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,D.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,D.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,D.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,F.jsx)(Xd,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,F.jsxs)(Zd,{children:[(0,F.jsxs)(Qd,{children:[(0,F.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,F.jsx)(of,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,F.jsx)(vi,{size:12})})]}),(0,F.jsx)($d,{children:o(`Drag the frame to choose the visible part.`)}),(0,F.jsxs)(ef,{children:[t?(0,F.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,F.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,F.jsx)(tf,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:m},children:(0,F.jsx)(nf,{})})]}),(0,F.jsxs)(rf,{children:[(0,F.jsx)(af,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,F.jsx)(af,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var Ad=150,jd=120,Md=200,Nd=_.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Pd=_.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Fd=_.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${Md}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
        #000 0,
        #000 calc(100% - ${Md}px),
        rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Md*.72)}px),
        rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Md*.44)}px),
        rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Md*.18)}px),
        transparent 100%);
    mask-image: linear-gradient(to bottom,
        #000 0,
        #000 calc(100% - ${Md}px),
        rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Md*.72)}px),
        rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Md*.44)}px),
        rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Md*.18)}px),
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
`,Id=_.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Ad}px);
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
`,Ld=_.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,Rd=_.section`
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
`,zd=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Bd=_.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Vd=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Hd=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Ud=_.input`
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
`,Wd=_.button`
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
`,Gd=_.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Kd=_.button`
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
`,qd=_.button`
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
`,Jd=_.span`
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
`,Yd=_.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Xd=_.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Zd=_.div`
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
`,Qd=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,$d=_.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,ef=_.div`
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
`,tf=_.div`
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
`,nf=_.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,rf=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,af=_.button`
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
`,of=_.button`
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
`,sf=_.button`
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
`,cf=_.div`
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
`,lf=_.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,uf=_.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,df=_.button`
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
`,ff=_.div`
    position: relative;
    display: inline-flex;
`,pf=_.div`
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
`,mf=_.button`
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
`,hf=_.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,gf=_.section`
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
`,_f=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,vf=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,yf=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,bf=_.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,xf=_.input`
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
`,Sf=_.button`
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
`,Cf=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,wf=_.div`
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
`,Tf=_.span`
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
`,Ef=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Df=_.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Of=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,kf=_.button`
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
`,Af=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,jf=_.button`
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
`,Mf=_.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Nf=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Pf=_.div`
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
`,Ff=_.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,If=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Lf=_.button`
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
`,Rf=_.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,zf=_.button`
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
`,Bf=_.button`
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
`,Vf=_.button`
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
`,Hf=_.span`
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
`,Uf=_.button`
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
`,Wf=_.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,Gf=_.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,Kf=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,qf=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Jf=_.input`
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
`,Yf=_.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Xf=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Zf=_.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qf=_.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,$f=_.button`
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
`;function ep({places:e,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:u,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:_,onSearchMatches:y,readOnly:b=!1,onPick:x,onSelectionChange:S,onAddToTray:ee,onAddFavorite:C,onRemoveFavorite:te,favoritePaths:re,onExtractArchive:E,settingsVersion:ie=0}){let O=L(),ae=Pn(),[k,oe]=(0,D.useState)(!1),[A,se]=(0,D.useState)(null),j=A?.overviewBanner??null,M=j?.startsWith(`builtin:`)??!1,ce=j?.startsWith(`url:`)?j.slice(4):w(j)?j:null,N=M||ce?``:j??``,le=M?``:ce?ce.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:N.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,ue=M?iu(j):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(le),de=hn(N.length>0?N:null,0,le?`.${le}`:``),I=j?ru(j)??ce??de:null,[fe,pe]=(0,D.useState)(``),[R,me]=(0,D.useState)(null),[he,z]=(0,D.useState)(!1),[ge,_e]=(0,D.useState)(null),[ve,B]=(0,D.useState)(null),[ye,be]=(0,D.useState)(null),[Ce,we]=(0,D.useState)([]),[Te,V]=(0,D.useState)(null),[Ee,De]=(0,D.useState)(``),[Oe,ke]=(0,D.useState)(null),[je,H]=(0,D.useState)(null),Me=Tc(`overview`),[Ne,Pe]=(0,D.useState)(null),[Fe,Ie]=(0,D.useState)(null),Le=(0,D.useRef)(null),Re=(0,D.useRef)(null),ze=(0,D.useRef)(null),Be=(0,D.useRef)(null),Ve=(0,D.useRef)(null),He=Fe??A?.overviewBannerHeight??220,[Ge,Ke]=(0,D.useState)(0),[qe,Je]=(0,D.useState)(null),Xe=Math.min(1,Math.max(0,A?.overviewBannerOffset??.3)),Ze=He+Md,Qe=qe&&Ge>0?qe.height*(Ge/qe.width):Ze,$e=Qe>0&&Qe<Ze+240?(Ze+240)/Qe:1,et=Math.max(1,Math.round(Ge*$e)),tt=Math.max(0,Qe*$e-Ze),rt=Math.min(jd,tt/2,Math.max(20,He*.42)),it=rt+Xe*Math.max(0,tt-rt*2),[at,ot]=(0,D.useState)(!1),st=(e,t=!1)=>x?(ke(e),H({path:e,isDirectory:t}),S?.([e]),!0):!1,ct=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),ke(t),H({path:t,isDirectory:n}),Pe({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,D.useEffect)(()=>(vc(`overview`,je?(e,t)=>Pe({x:e,y:t,target:je}):null),()=>vc(`overview`,null)),[je]);let lt=(e,t)=>c(e,t);(0,D.useEffect)(()=>{Ye().then(se,()=>se(null))},[ie]),(0,D.useEffect)(()=>{if(P.available)return _d().then(we,()=>void 0),P.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&we(t.data.peers)})},[]),(0,D.useEffect)(()=>{let e=ze.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,D.useEffect)(()=>{if(M&&!ue){Je({width:1920,height:1080});return}Je(null);let e=Ve.current;e?.complete&&e.naturalWidth>0&&Je({width:e.naturalWidth,height:e.naturalHeight})},[j,M,ue]),(0,D.useEffect)(()=>{let e=Be.current;if(!e)return;let t=()=>Ke(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[A?.overviewBanner]),(0,D.useEffect)(()=>{if(!R)return;let e=()=>me(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||me(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[R]),(0,D.useEffect)(()=>{if(!he)return;let e=()=>z(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[he]);let ut=bs(A),dt=ut.map(e=>e.id),ft=(0,D.useRef)(null),pt=e=>R?.kind===`panel`&&R.id===e,mt=e=>R?.kind===`place`&&R.id===e;(0,D.useEffect)(()=>{if(!P.available)return;let e=ut.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return P.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>P.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[ut.map(e=>e.path??e.id).join(`|`),a]),cd(ft,_??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let ht=async(e,t)=>{let n={...A?.placeIcons};t?n[e]=t:delete n[e],me(null),await U({placeIcons:n}),l(await Ae())},gt=async(e,t)=>{let n={...A?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],B(null),await U({placeNames:n}),l(await Ae())},vt=e=>{be(null),_e({drive:e,label:e.label||`Local Disk`})},yt=async()=>{if(!ge)return;let{drive:e,label:t}=ge;_e(null);let n=await xe(e.name,t.trim());n.ok?(be(null),h?.()):be(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},bt=A?.overviewColumns??1,U=async e=>{if(!A)return;let t={...A,...e,overviewPanels:e.overviewPanels??dt,overviewHidden:[]};se(await nt(t)),p?.()},xt=async()=>{let e=await pa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=A?.overviewBanners??[];await U({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},St=async()=>{let e=fe.trim();if(!A||!w(e))return;let t=A.overviewBanners??[];pe(``),await U({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},Ct=()=>void U({overviewBanner:null}),wt=e=>void U({overviewBanners:(A?.overviewBanners??[]).filter(t=>t!==e),...A?.overviewBanner===e||A?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Tt=e=>{Le.current={y:e.clientY,height:He},e.currentTarget.setPointerCapture(e.pointerId)},Et=e=>{let t=Le.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Re.current=n,Ie(n)},Dt=e=>{Le.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Re.current!==null&&(U({overviewBannerHeight:Re.current}),Re.current=null)},Ot=(e,t)=>{let n=dt.indexOf(e),r=n+t;if(n<0||r<0||r>=dt.length)return;let i=[...dt];[i[n],i[r]]=[i[r],i[n]],U({overviewPanels:i})},kt=(e,t)=>{let n={...A?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],U({overviewTitles:n})},At=(e,t)=>void U({overviewViews:{...A?.overviewViews,[e]:t}}),jt=e=>{let t=A?.overviewPinned??ut.filter(e=>e.pinned).map(e=>e.id);U({overviewPinned:ut.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Mt=e=>{me(null);let t=t=>{let n={...t};return delete n[e],n},n=A?.overviewPinned??ut.filter(e=>e.pinned).map(e=>e.id);U({overviewPanels:dt.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(A?.overviewTitles),overviewViews:t(A?.overviewViews),overviewIcons:t(A?.overviewIcons),panelPlaces:t(A?.panelPlaces)})},Nt=(e,t)=>{let n={...A?.overviewIcons};t?n[e]=t:delete n[e],me(null),U({overviewIcons:n})},Pt=async e=>{if(!A)return;if(e===`folder`){let e=await fa();if(!e)return;let t=`folder:${e}`;dt.includes(t)||await U({overviewPanels:[...dt,t]});return}if(e===`quick`){let e=2;for(;dt.includes(`quick:${e}`);)e+=1;await U({overviewPanels:[...dt,`quick:${e}`]});return}let t=e;for(let n=2;dt.includes(t);n+=1)t=`${e}:${n}`;await U({overviewPanels:[...dt,t]})},Ft=async n=>{let r=await fa();if(!r)return;if(n.id===`quick`){await U({quickAccess:[...new Set([...e.map(e=>e.path),r])]}),l(await Ae());return}let i=n.places??[];i.some(e=>t(e,r))||await U({panelPlaces:{...A?.panelPlaces,[n.id]:[...i,r]}})},W=async(n,r)=>{me(null),n.id===`quick`?(await U({quickAccess:e.filter(e=>!t(e.path,r)).map(e=>e.path)}),l(await Ae())):await U({panelPlaces:{...A?.panelPlaces,[n.id]:(n.places??[]).filter(e=>!t(e,r))}})},It=async(n,r,i)=>{if(t(r,i))return;let a=n.id===`quick`?e.map(e=>e.path):n.places??[],o=a.findIndex(e=>t(e,r)),s=a.findIndex(e=>t(e,i));if(o<0||s<0)return;let c=[...a],[u]=c.splice(o,1);c.splice(s,0,u),n.id===`quick`?(await U({quickAccess:c}),l(await Ae())):await U({panelPlaces:{...A?.panelPlaces,[n.id]:c}})},Lt=(e,t)=>({draggable:k,onDragOver:e=>{k&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{k&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{k&&(n.preventDefault(),It(e,n.dataTransfer.getData(`text/plain`),t))}}),Rt=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:A?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??A?.placeIcons?.[n]??null}}),zt=e=>{if(r.length===0)return(0,F.jsx)(Gf,{children:O(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,F.jsx)(Cf,{children:t.map(e=>{let t=Fn(ae,e.path);return(0,F.jsxs)(wf,{$plain:!1,$selected:Oe===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Wt(t)):Se(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,children:[(0,F.jsx)(Tf,{children:t&&ae.useIcons?(0,F.jsx)(Cs,{place:t,size:18}):(0,F.jsx)(Vs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(Ef,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(Df,{children:e.path})]})]},e.path)})}):(0,F.jsx)(Of,{children:t.map(e=>{let t=Fn(ae,e.path);return(0,F.jsxs)(kf,{$selected:Oe===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Wt(t)):Se(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ae.useIcons?(0,F.jsx)(Cs,{place:t,size:15}):(0,F.jsx)(Vs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,F.jsxs)(Af,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(Df,{children:e.path})]})]},e.path)})})},Bt=e=>{let n=A?.favorites??[],r=async e=>{await U({favorites:n.filter(t=>t.path!==e)})},i=async(e,r)=>{e&&!n.some(n=>t(n.path,e))&&await U({favorites:[...n,{path:e,name:v(e)||e,isDirectory:r}]})},a=(e,t,n)=>{k||st(t,n)||(n?c(t,Wt(e)):Se(t))},o=k?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(jf,{$row:e.view===`list`,onClick:()=>void pa().then(e=>i(e,!1)),title:O(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,F.jsx)(oi,{size:15}):(0,F.jsx)(Tf,{children:(0,F.jsx)(oi,{size:15})}),e.view===`list`?(0,F.jsxs)(Af,{children:[(0,F.jsx)(`strong`,{children:O(`Add file`)}),(0,F.jsx)(Df,{children:O(`Pin any file here`)})]}):(0,F.jsxs)(Ef,{children:[(0,F.jsx)(`strong`,{children:O(`Add file`)}),(0,F.jsx)(Df,{children:O(`Pin any file here`)})]})]}),(0,F.jsxs)(jf,{$row:e.view===`list`,onClick:()=>void fa().then(e=>i(e,!0)),title:O(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,F.jsx)(oi,{size:15}):(0,F.jsx)(Tf,{children:(0,F.jsx)(oi,{size:15})}),e.view===`list`?(0,F.jsxs)(Af,{children:[(0,F.jsx)(`strong`,{children:O(`Add folder`)}),(0,F.jsx)(Df,{children:O(`Pin any folder here`)})]}):(0,F.jsxs)(Ef,{children:[(0,F.jsx)(`strong`,{children:O(`Add folder`)}),(0,F.jsx)(Df,{children:O(`Pin any folder here`)})]})]})]}):null;return n.length===0&&!k?(0,F.jsx)(Gf,{children:O(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,F.jsxs)(Cf,{children:[n.map(e=>{let t=Fn(ae,e.path);return(0,F.jsxs)(wf,{$plain:k,$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!k&&x?.(e.path),onContextMenu:t=>!k&&ct(t,e.path,e.isDirectory),title:e.path,children:[k&&(0,F.jsx)(Bf,{onClick:t=>{t.stopPropagation(),r(e.path)},title:O(`Remove from favorites`),type:`button`,children:(0,F.jsx)(vi,{size:11})}),(0,F.jsx)(Tf,{children:t&&ae.useIcons?(0,F.jsx)(Cs,{place:t,size:18}):(0,F.jsx)(Vs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(Ef,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(Df,{children:e.path})]})]},e.path)}),o]}):(0,F.jsxs)(Of,{children:[n.map(e=>{let t=Fn(ae,e.path);return(0,F.jsxs)(kf,{$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!k&&x?.(e.path),onContextMenu:t=>!k&&ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ae.useIcons?(0,F.jsx)(Cs,{place:t,size:15}):(0,F.jsx)(Vs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,F.jsxs)(Af,{children:[(0,F.jsx)(`strong`,{children:t?.name||e.name}),(0,F.jsx)(Df,{children:e.path})]}),k&&(0,F.jsx)(Bf,{$inline:!0,onClick:t=>{t.stopPropagation(),r(e.path)},title:O(`Remove from favorites`),type:`button`,children:(0,F.jsx)(vi,{size:11})})]},e.path)}),o]})},Ht=e=>{if(n.length===0)return(0,F.jsx)(Gf,{children:O(`No drives are available.`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=ge?.drive.name===t.name,i=r?(0,F.jsx)(tp,{maxLength:32,onCancel:()=>_e(null),onChange:e=>_e({...ge,label:e}),onCommit:()=>void yt(),value:ge?.label??``}):(0,F.jsx)(F.Fragment,{children:d(t)}),a=!r&&k&&(0,F.jsx)(Vf,{onClick:e=>{e.stopPropagation(),vt(t)},title:O(`Rename volume`),type:`button`,children:(0,F.jsx)(Fi,{size:11})}),o=(0,F.jsx)(Df,{children:O(`{free} free of {total}`,{free:f(t.freeSpace),total:f(t.totalSize)})});return e.view===`grid`?(0,F.jsxs)(wf,{$plain:!1,$selected:Oe===t.name,onClick:e=>{!r&&st(t.name,!0)||r||c(t.name,Wt(e))},onDoubleClick:()=>!r&&x?.(t.name),onContextMenu:e=>!r&&ct(e,t.name,!0),title:t.name,children:[(0,F.jsx)(Tf,{children:(0,F.jsx)(ni,{size:18})}),(0,F.jsxs)(Ef,{children:[(0,F.jsxs)(`strong`,{children:[i,r&&ne(t),a]}),o]})]},t.name):(0,F.jsxs)(kf,{as:r?`div`:`button`,$selected:Oe===t.name,onClick:r?void 0:e=>{st(t.name,!0)||c(t.name,Wt(e))},onDoubleClick:r?void 0:()=>x?.(t.name),onContextMenu:r?void 0:e=>ct(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,F.jsx)(ni,{size:18}),(0,F.jsxs)(Af,{children:[(0,F.jsxs)(`strong`,{children:[i,r&&ne(t),a]}),o]}),(0,F.jsx)(Mf,{children:(0,F.jsx)(Nf,{$used:n,$tone:T(n)})})]},t.name)});return e.view===`grid`?(0,F.jsx)(Cf,{children:t}):(0,F.jsx)(Of,{children:t})},Ut=()=>{let e=async e=>{V(e.id);try{await vd(e.host,e.port)}finally{V(null)}},t=async()=>{let e=Ee.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){V(`manual`);try{await vd(n,r)}finally{V(null)}}};return(0,F.jsxs)(Kf,{children:[(0,F.jsxs)(qf,{children:[(0,F.jsx)(Jf,{onChange:e=>De(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:O(`Address, e.g. 192.168.1.20:45701`),value:Ee}),(0,F.jsx)($f,{disabled:Te!==null||!Ee.includes(`:`),onClick:()=>void t(),type:`button`,children:O(Te===`manual`?`Pairing…`:`Pair by address`)})]}),Ce.length===0&&(0,F.jsx)(Gf,{children:O(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),Ce.map(t=>(0,F.jsxs)(Yf,{children:[(0,F.jsxs)(Xf,{children:[(0,F.jsx)(Yi,{size:14}),(0,F.jsx)(Zf,{title:t.host,children:t.name}),(0,F.jsx)(Qf,{$online:t.online,children:t.paired?t.online?O(`Paired`):O(`Offline`):O(`Not paired`)}),!t.paired&&t.online&&(0,F.jsx)($f,{disabled:Te===t.id,onClick:()=>void e(t),type:`button`,children:Te===t.id?O(`Pairing…`):O(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,F.jsx)(Df,{children:O(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,F.jsxs)(kf,{onClick:n=>c(wd(t.id,e.id),Wt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,F.jsx)(Yi,{size:14}),(0,F.jsxs)(Af,{children:[(0,F.jsx)(`strong`,{children:e.name}),(0,F.jsx)(Df,{children:t.name})]}),(0,F.jsx)(Zi,{size:12})]},e.id))]},t.id))]})},Gt=e=>{switch(e.kind){case`share`:return Ut();case`favorites`:return Bt(e);case`quick`:{let t=Rt(e);return!k&&t.length===0?(0,F.jsx)(Gf,{children:O(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,F.jsxs)(Cf,{children:[t.map(t=>(0,F.jsxs)(wf,{$plain:k,$selected:Oe===t.path,...Lt(e,t.path),onClick:e=>{!k&&!st(t.path,!0)&&c(t.path,Wt(e))},onDoubleClick:()=>!k&&x?.(t.path),onContextMenu:e=>!k&&ct(e,t.path,!0),title:t.path,children:[k&&(0,F.jsx)(Bf,{onClick:n=>{n.stopPropagation(),W(e,t.path)},title:O(`Remove from Quick access`),type:`button`,children:(0,F.jsx)(vi,{size:11})}),(0,F.jsxs)(Rf,{children:[k?(0,F.jsx)(zf,{onClick:e=>{e.stopPropagation(),me(mt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,F.jsx)(Tf,{children:(0,F.jsx)(Cs,{place:t})})}):(0,F.jsx)(Tf,{children:(0,F.jsx)(Cs,{place:t})}),mt(t.path)&&(0,F.jsx)(ld,{onPick:e=>void ht(t.path,e),value:A?.placeIcons?.[t.path]??t.icon})]}),(0,F.jsxs)(Ef,{children:[ve?.path===t.path?(0,F.jsx)(`strong`,{children:(0,F.jsx)(tp,{onCancel:()=>B(null),onChange:e=>B({path:t.path,name:e}),onCommit:()=>void gt(t.path,ve?.name??``),value:ve?.name??``})}):(0,F.jsxs)(`strong`,{children:[t.name,k&&(0,F.jsx)(Vf,{onClick:e=>{e.stopPropagation(),me(null),B({path:t.path,name:t.name})},title:O(`Rename folder`),type:`button`,children:(0,F.jsx)(Fi,{size:11})})]}),(0,F.jsx)(Df,{children:t.path})]})]},t.path)),k&&(0,F.jsxs)(jf,{onClick:()=>void Ft(e),title:O(`Pin a folder here`),type:`button`,children:[(0,F.jsx)(Tf,{children:(0,F.jsx)(oi,{size:15})}),(0,F.jsxs)(Ef,{children:[(0,F.jsx)(`strong`,{children:O(`Add folder`)}),(0,F.jsx)(Df,{children:O(`Pin a directory here`)})]})]})]}):(0,F.jsxs)(Of,{children:[t.map(t=>(0,F.jsxs)(kf,{$selected:Oe===t.path,...Lt(e,t.path),onClick:e=>{!k&&!st(t.path,!0)&&c(t.path,Wt(e))},onDoubleClick:()=>!k&&x?.(t.path),onContextMenu:e=>!k&&ct(e,t.path,!0),title:t.path,type:`button`,children:[(0,F.jsxs)(Rf,{children:[k?(0,F.jsx)(zf,{onClick:e=>{e.stopPropagation(),me(mt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,F.jsx)(Cs,{place:t,size:15})}):(0,F.jsx)(Cs,{place:t,size:15}),mt(t.path)&&(0,F.jsx)(ld,{onPick:e=>void ht(t.path,e),value:A?.placeIcons?.[t.path]??t.icon})]}),(0,F.jsxs)(Af,{children:[ve?.path===t.path?(0,F.jsx)(`strong`,{children:(0,F.jsx)(tp,{onCancel:()=>B(null),onChange:e=>B({path:t.path,name:e}),onCommit:()=>void gt(t.path,ve?.name??``),value:ve?.name??``})}):(0,F.jsxs)(`strong`,{children:[t.name,k&&(0,F.jsx)(Vf,{onClick:e=>{e.stopPropagation(),me(null),B({path:t.path,name:t.name})},title:O(`Rename folder`),type:`button`,children:(0,F.jsx)(Fi,{size:11})})]}),(0,F.jsx)(Df,{children:t.path})]}),k&&(0,F.jsx)(Bf,{$inline:!0,onClick:n=>{n.stopPropagation(),W(e,t.path)},title:O(`Remove from Quick access`),type:`button`,children:(0,F.jsx)(vi,{size:11})})]},t.path)),k&&(0,F.jsxs)(jf,{$row:!0,onClick:()=>void Ft(e),title:O(`Pin a folder here`),type:`button`,children:[(0,F.jsx)(oi,{size:15}),(0,F.jsxs)(Af,{children:[(0,F.jsx)(`strong`,{children:O(`Add folder`)}),(0,F.jsx)(Df,{children:O(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,F.jsx)(np,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:x,onSelectionChange:S,version:s});case`recent`:return zt(e);case`drives`:return Ht(e);default:return(0,F.jsx)(rp,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:x,onSelectionChange:S,openOnSingleClick:A?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:A?.showCheckboxes??!0,visibilityVersion:g})}};return(0,F.jsxs)(Nd,{$flush:!!A?.overviewBanner,ref:ze,children:[!b&&(0,F.jsxs)(cf,{$overlay:!!A?.overviewBanner,children:[(0,F.jsx)(lf,{role:`group`,title:O(`Columns`),children:[1,2,3,4,5].map(e=>(0,F.jsx)(uf,{$active:bt===e,onClick:()=>void U({overviewColumns:e}),title:o(O,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),k&&(0,F.jsxs)(ff,{children:[(0,F.jsxs)(df,{onClick:()=>z(e=>!e),onPointerDown:e=>e.stopPropagation(),title:O(`Add a panel`),type:`button`,children:[(0,F.jsx)(oi,{size:12}),O(`Add panel ▾`)]}),he&&(0,F.jsx)(pf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,F.jsx)(mf,{onClick:()=>{z(!1),Pt(e)},type:`button`,children:O(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),Me.available&&(0,F.jsx)(Sf,{onClick:e=>Me.open(e.clientX,e.clientY),title:O(`Selection menu`),type:`button`,children:(0,F.jsx)(ca,{size:14})}),(0,F.jsxs)(df,{onClick:()=>{oe(e=>!e),z(!1),me(null),B(null),_e(null)},title:O(k?`Done`:`Edit`),type:`button`,children:[k?(0,F.jsx)(_i,{size:13}):(0,F.jsx)(Fi,{size:13}),O(k?`Done`:`Edit`)]})]}),ye&&(0,F.jsx)(Wf,{children:ye}),A?.overviewBanner&&(0,F.jsxs)(Pd,{ref:Be,style:{height:`${He}px`,"--banner-image-width":`${et}px`,"--banner-image-shift":`${it}px`,"--banner-travel":`${rt}px`,"--banner-overlap":`0px`},children:[(0,F.jsx)(Fd,{children:ue?(0,F.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Je({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:I??void 0}):(0,F.jsx)(`img`,{alt:``,onLoad:e=>{let t=M?1920:e.currentTarget.naturalWidth||1920,n=M?1080:e.currentTarget.naturalHeight||1080;Je({width:t,height:n})},ref:Ve,src:I??void 0})}),k&&(0,F.jsx)(Id,{onDoubleClick:()=>{Re.current=null,Ie(null),U({overviewBannerHeight:220})},onPointerCancel:Dt,onPointerDown:Tt,onPointerMove:Et,onPointerUp:Dt,title:O(`Drag to resize; double-click to reset`)})]}),(0,F.jsxs)(Ld,{$offset:A?.overviewBanner?100:0,children:[k&&(0,F.jsxs)(Rd,{children:[(0,F.jsxs)(zd,{children:[(0,F.jsx)(Bd,{children:O(`Banners`)}),A?.overviewBanner&&(0,F.jsxs)(df,{onClick:()=>ot(!0),title:O(`Adjust framing…`),type:`button`,children:[(0,F.jsx)(Fi,{size:12}),O(`Adjust framing…`)]})]}),(0,F.jsxs)(Vd,{children:[(0,F.jsx)(Gd,{children:(0,F.jsx)(Kd,{$active:!A?.overviewBanner,onClick:Ct,title:O(`No banner`),type:`button`,children:(0,F.jsxs)(Yd,{children:[(0,F.jsx)(vi,{size:16}),(0,F.jsx)(`span`,{children:O(`No banner`)})]})})}),eu.map(e=>(0,F.jsx)(Gd,{children:(0,F.jsx)(Kd,{$active:A?.overviewBanner===e.id,onClick:()=>void U({overviewBanner:e.id}),title:`${O(e.concept)} · ${O(e.preset)}`,type:`button`,children:(0,F.jsx)(Od,{poster:e.url,source:e.id})})},e.id)),Ql.map(e=>(0,F.jsx)(Gd,{children:(0,F.jsxs)(Kd,{$active:A?.overviewBanner===e.id,onClick:()=>void U({overviewBanner:e.id}),title:O(e.name),type:`button`,children:[(0,F.jsx)(Od,{poster:e.poster,source:e.id}),(0,F.jsx)(Jd,{children:(0,F.jsx)(Ci,{size:11})})]})},e.id)),(A?.overviewBanners??[]).map(e=>(0,F.jsxs)(Gd,{children:[(0,F.jsx)(Kd,{$active:A?.overviewBanner===e||A?.overviewBanner===`url:${e}`,onClick:()=>void U({overviewBanner:w(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,F.jsx)(Od,{source:e})}),(0,F.jsx)(qd,{onClick:()=>wt(e),title:O(`Remove`),type:`button`,children:(0,F.jsx)(vi,{size:10})})]},e)),(0,F.jsxs)(sf,{onClick:()=>void xt(),title:O(`Add banner…`),type:`button`,children:[(0,F.jsx)(oi,{size:18}),(0,F.jsx)(`span`,{children:O(`Add banner…`)})]})]}),(0,F.jsxs)(Hd,{children:[(0,F.jsx)(Ud,{onChange:e=>pe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&St()},placeholder:`https://…`,value:fe}),(0,F.jsx)(Wd,{disabled:!w(fe),onClick:()=>void St(),type:`button`,children:O(`Add URL`)})]})]}),(0,F.jsx)(hf,{ref:ft,$columns:bt,children:ut.map(e=>{let t=dt.indexOf(e.id);return(0,F.jsxs)(gf,{children:[(0,F.jsxs)(_f,{children:[(0,F.jsxs)(vf,{children:[(0,F.jsxs)(Rf,{children:[k?(0,F.jsx)(zf,{onClick:()=>me(pt(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,F.jsx)(Ss,{panel:e,size:15})}):(0,F.jsx)(Ss,{panel:e,size:15}),pt(e.id)&&(0,F.jsx)(ld,{onPick:t=>Nt(e.id,t),value:e.icon})]}),k?(0,F.jsx)(xf,{defaultValue:e.title,onBlur:t=>kt(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,F.jsx)(bf,{children:O(e.title)})]}),(0,F.jsxs)(yf,{children:[!k&&e.kind===`recent`&&(0,F.jsx)(df,{onClick:()=>void Ue().then(u),title:O(`Clear`),type:`button`,children:O(`Clear`)}),!k&&e.kind===`frequent`&&(0,F.jsx)(df,{onClick:()=>void We().then(()=>m?.()),title:O(`Clear the frequent list`),type:`button`,children:O(`Clear`)}),!k&&(e.kind===`home`||e.kind===`folder`)&&(0,F.jsx)(df,{onClick:()=>c(e.path??a),title:O(`Open folder`),type:`button`,children:O(`Open`)}),k&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Sf,{$active:e.pinned,onClick:()=>jt(e.id),title:e.pinned?O(`Unpin from the sidebar`):O(`Pin to the sidebar`),type:`button`,children:(0,F.jsx)(di,{size:12})}),(0,F.jsx)(Sf,{$active:e.view===`list`,onClick:()=>At(e.id,`list`),title:O(`List`),type:`button`,children:(0,F.jsx)(fi,{size:13})}),(0,F.jsx)(Sf,{$active:e.view===`grid`,onClick:()=>At(e.id,`grid`),title:O(`Grid`),type:`button`,children:(0,F.jsx)(pi,{size:13})}),(0,F.jsx)(Sf,{disabled:t===0,onClick:()=>Ot(e.id,-1),title:O(`Move up`),type:`button`,children:(0,F.jsx)(ii,{size:12})}),(0,F.jsx)(Sf,{disabled:t===dt.length-1,onClick:()=>Ot(e.id,1),title:O(`Move down`),type:`button`,children:(0,F.jsx)(ii,{size:12})}),(0,F.jsx)(Sf,{onClick:()=>Mt(e.id),title:O(`Remove panel`),type:`button`,children:(0,F.jsx)(vi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Gt(e):(0,F.jsx)(Ff,{children:Gt(e)})]},e.id)})})]}),at&&I&&(0,F.jsx)(kd,{height:He,offset:Xe,onCancel:()=>ot(!1),onSave:e=>{U({overviewBannerOffset:e}),ot(!1)},source:I,video:ue}),Ne&&(0,F.jsx)(io,{directory:a,menu:{x:Ne.x,y:Ne.y,paths:[Ne.target.path]},onClose:()=>Pe(null),onCopy:(e,t)=>void _t(e,t),onAddToTray:ee,onAddFavorite:C,onRemoveFavorite:te,favoritePaths:re,onExtractArchive:E,onOpen:lt,onOpenFile:e=>x?x(e):void Se(e),shortcuts:Vt,target:Ne.target})]})}function tp({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=L();return(0,F.jsxs)(Hf,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,F.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,F.jsx)(Uf,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,F.jsx)(vi,{size:11})}),(0,F.jsx)(Uf,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,F.jsx)(_i,{size:12})})]})}function np({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=L(),[c,l]=(0,D.useState)(null),[u,d]=(0,D.useState)(null),f=Pn(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,D.useEffect)(()=>{Ve().then(l,()=>l([]))},[a]),!c)return(0,F.jsx)(Gf,{children:s(`Reading…`)});if(c.length===0)return(0,F.jsx)(Gf,{children:s(`Folders you open often show up here.`)});let m=e=>o(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,F.jsx)(Cf,{children:c.map(e=>{let i=Fn(f,e.path);return(0,F.jsxs)(wf,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Wt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,F.jsx)(Tf,{children:i&&f.useIcons?(0,F.jsx)(Cs,{place:i,size:18}):(0,F.jsx)(Vs,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,F.jsxs)(Ef,{children:[(0,F.jsx)(`strong`,{children:i?.name||e.name}),(0,F.jsx)(Df,{children:m(e)})]})]},e.path)})}):(0,F.jsx)(Of,{children:c.map(e=>{let i=Fn(f,e.path);return(0,F.jsxs)(kf,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Wt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,F.jsx)(Cs,{place:i,size:15}):(0,F.jsx)(Vs,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,F.jsxs)(Af,{children:[(0,F.jsx)(`strong`,{children:i?.name||e.name}),(0,F.jsx)(Df,{children:m(e)})]})]},e.path)})})}function rp({path:e,mode:n,onOpen:r,onContextMenu:i,onPick:a,onSelectionChange:o,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:l,visibilityVersion:u}){let d=L(),[f,p]=(0,D.useState)(null),[m,h]=(0,D.useState)(null),g=Pn();return(0,D.useEffect)(()=>{e&&(p(null),Ce(e).then(p,()=>p(null)))},[e,u]),(0,D.useEffect)(()=>{if(P.available)return P.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Ce(e,!1).then(p,()=>void 0)})},[e]),f?n===`list`?(0,F.jsx)(Pf,{children:(0,F.jsx)(jc,{error:null,listing:f,loading:!1,onOpen:a??r,onOpenFile:a??(e=>void Se(e)),onRefresh:()=>void Ce(e,!1).then(p,()=>void 0),onRename:(e,n)=>p(r=>r&&{...r,entries:r.entries.map(r=>t(r.fullPath,e)?{...r,name:v(n),fullPath:n}:r)}),onSelectionChange:o,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:l,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...ye,columns:be.columns??[]}})}):(0,F.jsx)(Ff,{children:f.entries.length===0?(0,F.jsx)(Gf,{children:d(`This folder is empty.`)}):(0,F.jsx)(If,{children:f.entries.map(e=>{let t=Fn(g,e.fullPath);return(0,F.jsxs)(Lf,{$selected:m===e.fullPath,onClick:t=>{a?(h(e.fullPath),o?.([e.fullPath])):e.isDirectory?r(e.fullPath,Wt(t)):Se(e.fullPath)},onDoubleClick:()=>a?.(e.fullPath),onContextMenu:t=>i?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&g.useIcons?(0,F.jsx)(Cs,{place:t,size:16}):(0,F.jsx)(Vs,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,F.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,F.jsx)(Gf,{children:d(`Reading…`)})}var ip=`yafm://`,ap={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function op(e){return e.toLowerCase().startsWith(ip)}function sp(e){return`${ip}${e===`home`?`overview`:e}`}function cp(e){return op(e)?ap[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function lp(e){let t=e.trim();if(t.length===0)return null;if(!op(t))return t;let n=ap[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?sp(n):null}function up({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=L(),s=Pn(),[c,l]=(0,D.useState)(!1),[u,d]=(0,D.useState)(``),[f,p]=(0,D.useState)([]),[m,h]=(0,D.useState)(0),[g,_]=(0,D.useState)(null),[v,y]=(0,D.useState)(null),b=(0,D.useRef)(null),x=(0,D.useRef)(null),S=(0,D.useRef)(0);(0,D.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,D.useEffect)(()=>{r&&r!==S.current&&(S.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,D.useEffect)(()=>{c&&b.current?.select()},[c]),(0,D.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let ee=()=>{d(e.replace(/\\/g,`/`)),l(!0)},C=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,D.useEffect)(()=>{if(!c){p([]);return}let e=pp(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{Ce(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let te=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,D.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=x.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,F.jsxs)(yp,{onPointerDown:e=>e.stopPropagation(),ref:x,children:[(0,F.jsxs)(Cp,{children:[(0,F.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?te(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):C(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:b,spellCheck:!1,value:u}),(0,F.jsx)(wp,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,F.jsx)(vi,{size:12})}),(0,F.jsx)(wp,{$apply:!0,onClick:C,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,F.jsx)(_i,{size:14})})]}),f.length>0&&g&&(0,ka.createPortal)((0,F.jsx)(bp,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,F.jsxs)(xp,{$active:t===m,onClick:t=>te(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,F.jsx)(Vs,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,F.jsx)(Sp,{children:e.name})]},e.path))}),document.body)]});let ne=t?[{label:t,path:e,icon:n}]:fp(e,s.places);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(mp,{onClick:ee,title:o(`Click to type a path`),children:ne.map((t,n)=>(0,F.jsxs)(hp,{$last:n===ne.length-1,children:[n>0&&(0,F.jsx)(_p,{children:(0,F.jsx)(li,{size:9})}),(0,F.jsxs)(vp,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,F.jsx)(gp,{children:(0,F.jsx)(Cs,{place:t.place,size:13})}):t.icon&&(0,F.jsx)(gp,{children:t.icon}),t.label]})]},t.path))}),v&&(0,F.jsx)(Ka,{items:[{label:o(`Open`),icon:(0,F.jsx)(ci,{size:14}),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),icon:(0,F.jsx)(oi,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`Copy as path`),icon:(0,F.jsx)(ta,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...op(v.path)?[{label:o(`Open with…`),icon:(0,F.jsx)(Di,{size:14}),onSelect:()=>void At(v.path)},{label:o(`Properties`),icon:(0,F.jsx)(ui,{size:14}),onSelect:()=>void kt([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function dp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function fp(e,n){let r=dp(e),i=-1,a=null;for(let e of Object.values(n)){if(e.name.trim().length===0)continue;let n=r.findIndex(n=>t(n.path,e.path));n>i&&(i=n,a=e)}return a&&i>=0&&r.splice(0,i+1,{label:a.name,path:r[i].path,place:a}),r}function pp(e){if(op(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var mp=_.div`
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
`,hp=_.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,gp=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,_p=_.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,vp=_.button`
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
`,yp=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,bp=_.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Aa}
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
`,xp=_.button`
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
`,Sp=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cp=_.div`
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
`,wp=_.button`
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
`,Tp=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,F.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,F.jsx)(`path`,{d:`M4 4v6h6`})]});function Ep({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:a=!1,videoAutoplay:s=!1,platform:c}){let l=L(),u=Cc(`recycle`),d=c===`windows`,[p,m]=(0,D.useState)([]),[h,g]=(0,D.useState)([]),[_,v]=(0,D.useState)(!1),[b,x]=(0,D.useState)(null),[S,ee]=(0,D.useState)(!0),[C,te]=(0,D.useState)(!1),[ne,w]=(0,D.useState)(null),[T,re]=(0,D.useState)(!1),[E,ie]=(0,D.useState)(()=>new Set),[O,ae]=(0,D.useState)(null),[k,oe]=(0,D.useState)(()=>{let e=zn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[A,se]=(0,D.useState)(null),[j,M]=(0,D.useState)(null),[ce,N]=(0,D.useState)(()=>{let e=Ln(`yafm.recycle.preview.width`,320);return e>=220?e:320}),P=(0,D.useRef)(null),le=e=>{N(e),Rn(`yafm.recycle.preview.width`,e)},ue=(0,D.useCallback)(async()=>{ee(!0),w(null);try{m(await H(T))}catch(e){w(e instanceof Error?e.message:String(e))}finally{ee(!1)}},[T]),de=(0,D.useCallback)(async()=>{try{m(await H(T))}catch{}},[T]);(0,D.useEffect)(()=>{ue()},[ue]),(0,D.useEffect)(()=>{let e=window.setInterval(()=>void de(),1e4);return()=>window.clearInterval(e)},[de]),(0,D.useEffect)(()=>{T||(g([]),v(!1),x(null))},[T]),(0,D.useEffect)(()=>{ie(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let I=(0,D.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Dp(e,t,k.column);return k.descending?-n:n})},[p,h,k]),fe=(0,D.useMemo)(()=>!t?.open||t.query.trim().length===0?I:I.filter(e=>En(e.name,t)||En(e.originalPath,t)),[I,t?.open,t?.query,t?.matchCase,t?.regex]),pe=(0,D.useRef)(null);cd(pe,t??null,`[data-search-block]`,n??(()=>void 0),[I]),(0,D.useEffect)(()=>{ie(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let R=(0,D.useMemo)(()=>I.filter(e=>E.has(e.id)),[I,E]),me=R.filter(e=>e.removable&&!e.isOrphan),he=R.filter(e=>e.removable),z=(e,t)=>{let n=t.ctrlKey||t.metaKey;ie(r=>{if(t.shiftKey&&O){let t=I.findIndex(e=>e.id===O),i=I.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(I[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),ae(e.id)},ge=(0,D.useCallback)(()=>ie(new Set(fe.map(e=>e.id))),[fe]),_e=fe.length>0&&fe.every(e=>E.has(e.id)),ve=(0,D.useCallback)(async()=>{let e=me.map(e=>e.id);if(e.length!==0){te(!0);try{let t=await Pe(e);t.ok||await _a(o(l,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),ie(new Set),await ue()}finally{te(!1)}}},[ue,me,l]),B=(0,D.useCallback)(async()=>{let e=he.map(e=>e.id);if(M(null),e.length!==0){te(!0);try{let t=await Fe(e);!t.ok&&!t.cancelled&&await _a(o(l,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),ie(new Set),await ue()}finally{te(!1)}}},[he,ue,l]),ye=async()=>{M(null),te(!0);try{await Ne(T),ie(new Set),await ue()}finally{te(!1)}},be=async()=>{te(!0),x(null);try{let e=await Le();if(e.cancelled){x(`Elevation was declined — nothing was read.`);return}if(e.failed){x(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),v(!0)}finally{te(!1)}},xe=async()=>{te(!0),M(null);try{await Re(),g([]),v(!1),x(null),await ue()}finally{te(!1)}},Se=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},Ce=e=>{navigator.clipboard.writeText(e.originalPath)},we=(e,t)=>{e.preventDefault(),t&&!E.has(t.id)&&ie(new Set([t.id])),se({x:e.clientX,y:e.clientY})};(0,D.useEffect)(()=>(vc(`recycle`,E.size>0?(e,t)=>se({x:e,y:t}):null),()=>vc(`recycle`,null)),[E]),(0,D.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),ge()):e.key===`Delete`?(e.preventDefault(),he.length>0&&M(`delete`)):e.key===`Enter`&&me.length>0?(e.preventDefault(),ve()):e.key===`Escape`&&(ie(new Set),se(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[he.length,me.length,ve,ge]);let Te=[{label:l(`Restore`),icon:(0,F.jsx)(Tp,{width:14,height:14}),disabled:me.length===0,onSelect:()=>void ve()},{label:l(`Delete permanently`),icon:(0,F.jsx)(gi,{size:14}),danger:!0,disabled:he.length===0,onSelect:()=>M(`delete`)},{label:l(`Properties`),icon:(0,F.jsx)(ui,{size:14}),disabled:R.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=R;e&&Ie(e.id)}},{label:l(`Open original location`),icon:(0,F.jsx)(ei,{size:14}),disabled:R.length!==1,onSelect:()=>{let[e]=R;e&&Se(e)}},{label:l(`Copy original path`),icon:(0,F.jsx)(ta,{size:14}),disabled:R.length!==1,onSelect:()=>{let[e]=R;e&&Ce(e)}},{label:l(`Select all`),separatorBefore:!0,onSelect:ge},{label:l(`Refresh`),icon:(0,F.jsx)(ai,{size:14}),onSelect:()=>void ue()}],V=R.length>0?R[0]:null,Ee=V?{name:V.name,path:V.contentPath||V.originalPath,isDirectory:V.isDirectory,size:V.size,modified:V.deleted,fields:[{label:l(`Type`),value:l(kp(V))},{label:l(`Original location`),value:V.originalPath},{label:l(`Date deleted`),value:y(V.deleted)},{label:l(`Size`),value:V.isDirectory?`—`:f(V.size)},...V.owner?[{label:l(`Owner`),value:V.owner}]:[],{label:l(`Status`),value:V.isOrphan?l(`Metadata only`):V.removable?l(`Restorable`):l(`Other profile`)}]}:null;return(0,F.jsxs)(jp,{ref:P,onContextMenu:e=>we(e),children:[(0,F.jsxs)(Mp,{children:[(0,F.jsxs)(Np,{children:[(0,F.jsx)(gi,{size:16}),(0,F.jsx)(`span`,{children:l(`Recycle Bin`)}),(0,F.jsxs)(Pp,{children:[S?`…`:o(l,I.length,`1 item`,`{count} items`),E.size>0&&` · ${l(`{count} selected`,{count:E.size})}`]})]}),(0,F.jsxs)(Fp,{children:[(0,F.jsx)(Lp,{$on:T,onClick:()=>re(e=>!e),title:l(`Show metadata records whose content is already gone`),type:`button`,children:l(`Orphans`)}),T&&d&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ip,{disabled:C||_,onClick:()=>void be(),title:l(_?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:l(C?`Working…`:_?`Admin view loaded`:`Show all (admin)…`)}),_&&h.length>0&&(0,F.jsx)(Ip,{disabled:C,onClick:()=>M(`purge`),type:`button`,children:l(`Delete every orphan`)})]}),(0,F.jsx)(Ip,{disabled:C||me.length===0,onClick:()=>void ve(),type:`button`,children:l(`Restore`)}),(0,F.jsx)(Ip,{$danger:!0,disabled:C||he.length===0,onClick:()=>M(`delete`),type:`button`,children:l(`Delete`)}),(0,F.jsx)(Ip,{disabled:C||I.length===0,onClick:()=>M(`empty`),type:`button`,children:l(`Empty`)}),(0,F.jsx)(Rp,{onClick:()=>void ue(),title:l(`Refresh`),type:`button`,children:(0,F.jsx)(ai,{size:14})}),u.available&&(0,F.jsx)(Rp,{onClick:e=>u.open(e.clientX,e.clientY),title:l(`Selection menu`),type:`button`,children:(0,F.jsx)(ca,{size:14})})]})]}),b&&(0,F.jsx)(am,{children:b}),ne&&(0,F.jsx)(om,{children:ne}),!ne&&!S&&(t?.open&&t.query.trim().length>0?fe.length===0:I.length===0)&&(0,F.jsx)(om,{children:t?.open&&t.query.trim().length>0?l(`No matching items.`):l(`The recycle bin is empty.`)}),I.length>0&&(0,F.jsxs)(im,{children:[(0,F.jsxs)(zp,{ref:pe,children:[(0,F.jsxs)(Vp,{children:[(0,F.jsx)(qp,{$checked:_e,$partial:!_e&&E.size>0,onClick:()=>_e?ie(new Set):ge(),title:l(_e?`Select none`:`Select all`),type:`button`,children:_e?(0,F.jsx)(_i,{size:9}):E.size>0&&(0,F.jsx)(Jp,{})}),(0,F.jsxs)(Hp,{onClick:()=>De(`name`),type:`button`,children:[l(`Name`),Op(k,`name`)]}),(0,F.jsxs)(Hp,{onClick:()=>De(`original`),type:`button`,children:[l(`Original location`),Op(k,`original`)]}),(0,F.jsxs)(Hp,{onClick:()=>De(`deleted`),type:`button`,children:[l(`Date deleted`),Op(k,`deleted`)]}),(0,F.jsxs)(Hp,{onClick:()=>De(`size`),type:`button`,children:[l(`Size`),Op(k,`size`)]}),(0,F.jsxs)(Hp,{onClick:()=>De(`type`),type:`button`,children:[l(`Type`),Op(k,`type`)]}),(0,F.jsx)(`span`,{})]}),(0,F.jsx)(Up,{onClick:e=>{e.target===e.currentTarget&&ie(new Set)},children:I.map(e=>(0,F.jsxs)(Wp,{$checked:E.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>z(e,t),onContextMenu:t=>we(t,e),onDoubleClick:()=>{ie(new Set([e.id])),ae(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,F.jsx)(Kp,{$checked:E.has(e.id),children:E.has(e.id)&&(0,F.jsx)(_i,{size:9})}),(0,F.jsxs)(Yp,{children:[(0,F.jsx)(Ap,{entry:e}),(0,F.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,F.jsx)(rm,{children:l(`metadata only`)}),e.owner&&(0,F.jsx)(rm,{$other:!0,children:l(`other profile`)})]}),(0,F.jsx)(Zp,{children:e.originalPath}),(0,F.jsx)(Qp,{children:y(e.deleted)}),(0,F.jsx)($p,{children:e.isDirectory?`—`:f(e.size)}),(0,F.jsx)(em,{children:l(kp(e))}),(0,F.jsxs)(tm,{children:[e.removable&&!e.isOrphan&&(0,F.jsx)(nm,{onClick:t=>{t.stopPropagation(),Pe([e.id]).then(ue)},title:l(`Restore to its original folder`),type:`button`,children:(0,F.jsx)(Tp,{})}),e.removable&&(0,F.jsx)(nm,{$danger:!0,onClick:t=>{t.stopPropagation(),ie(new Set([e.id])),M(`delete`)},title:e.isOrphan?l(`Remove the leftover record`):l(`Delete permanently`),type:`button`,children:(0,F.jsx)(gi,{size:13})})]})]},e.id))})]}),r&&(0,F.jsx)(Go,{emptyNote:l(`Nothing selected.`),info:Ee,onWidth:le,selectionNote:R.length>1?o(l,R.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:a,videoAutoplay:s,width:ce})]}),A&&(0,F.jsx)(Ka,{items:Te,onClose:()=>se(null),x:A.x,y:A.y}),(0,F.jsx)(Po,{confirmLabel:l(j===`empty`?`Empty the bin`:j===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:j===`empty`?o(l,I.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):j===`purge`?l(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):o(l,he.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>M(null),onConfirm:()=>{j===`empty`?ye():j===`purge`?xe():B()},open:j!==null,title:l(j===`empty`?`Empty the recycle bin`:j===`purge`?`Delete every orphan`:`Delete permanently`)})]});function De(e){oe(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Bn(`yafm.recycle.sort`,n),n})}}function Dp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return kp(e).localeCompare(kp(t),void 0,{sensitivity:`base`})}}function Op(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function kp(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function Ap({entry:e}){let t=cn(e.originalPath,e.isDirectory);return(0,F.jsx)(Xp,{children:t?(0,F.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,F.jsx)(ei,{}):(0,F.jsx)(ti,{})})}var jp=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Mp=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Np=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Pp=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Fp=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ip=_.button`
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
`,Lp=_(Ip)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Rp=_.button`
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
`,zp=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Bp=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Vp=_.div`
    display: grid;
    grid-template-columns: ${Bp};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Hp=_.button`
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
`,Up=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Wp=_.div`
    display: grid;
    grid-template-columns: ${Bp};
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
`,Gp=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Kp=_.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,qp=_.button`
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
`,Jp=_.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Yp=_(Gp)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Xp=_.span`
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
`,Zp=_(Gp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Qp=_(Gp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,$p=_(Gp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,em=_(Gp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,tm=_.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,nm=_.button`
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
`,rm=_.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,im=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,am=_.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,om=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function sm(){return P.available?(await P.request(`app.tags`)).tags:[]}async function cm(e){return!P.available||!e?!1:(await P.request(`app.tags.delete`,{name:e})).ok}async function lm(e,t){return!P.available||!e?[]:(await P.request(`app.tags.create`,{name:e,color:t})).tags}async function um(e,t){return!P.available||!e?!1:(await P.request(`app.tags.color`,{name:e,color:t})).ok}async function dm(e,t){return!P.available||!e||!t?!1:(await P.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function fm(){let e=L();return(0,F.jsx)(pm,{title:e(`Always applies to every folder`),children:e(`Global`)})}var pm=_.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,mm=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function hm(e){return`"${e.replaceAll(`"`,``)}"`}function gm(e){let t=document.documentElement.style;for(let n of mm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${hm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function _m(){return P.available?(await P.request(`app.fonts`)).fonts??[]:[]}function vm({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=L(),[s,c]=(0,D.useState)(null),[l,u]=(0,D.useState)(``),d=(0,D.useRef)(null),f=(0,D.useRef)(null),p=(0,D.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,D.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(ym,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,F.jsx)(bm,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,F.jsx)(xm,{children:`▾`})]}),s&&(0,ka.createPortal)((0,F.jsxs)(Sm,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,F.jsxs)(Cm,{children:[(0,F.jsx)(ri,{size:12}),(0,F.jsx)(wm,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,F.jsxs)(Tm,{children:[(0,F.jsxs)(Em,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,F.jsxs)(Om,{children:[n,` `,(0,F.jsx)(Am,{children:o(`(default)`)})]}),!e&&(0,F.jsx)(_i,{size:11})]}),p.map(t=>(0,F.jsxs)(Em,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,F.jsxs)(Dm,{children:[(0,F.jsx)(Om,{children:t}),(0,F.jsx)(km,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,F.jsx)(_i,{size:11})]},t)),p.length===0&&(0,F.jsx)(jm,{children:o(`No matching font.`)})]})]}),document.body)]})}var ym=_.button`
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
`,bm=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xm=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,Sm=_.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${Ba}
`,Cm=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,wm=_.input`
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
`,Tm=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,Em=_.button`
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
`,Dm=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Om=_.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,km=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Am=_.span`
    color: var(--text-muted);
    font-size: 10px;
`,jm=_.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Mm=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],Nm=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Pm=`en`,Fm=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],Im=new Date(2026,10,5,16,8).getTime(),Lm=`system`,Rm={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},zm=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],Bm=`yafm.colors.recent`;function Vm(){let e=zn(Bm);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Hm({appInfo:e,focusSection:t,onSettingsChanged:n,onOpenFolder:r,find:i,onSearchMatches:a}){let s=L(),[c,l]=(0,D.useState)([]),[u,d]=(0,D.useState)(null),[p,g]=(0,D.useState)(null),[_,y]=(0,D.useState)(null),[x,S]=(0,D.useState)(``),[ee,C]=(0,D.useState)(`file`),[ne,re]=(0,D.useState)(!1),[E,ie]=(0,D.useState)(!1),[O,ae]=(0,D.useState)(null),[k,oe]=(0,D.useState)(!1),[A,se]=(0,D.useState)(!1),[j,M]=(0,D.useState)(null),[ce,N]=(0,D.useState)(null),[P,le]=(0,D.useState)(null),[de,I]=(0,D.useState)(!1),[fe,pe]=(0,D.useState)(null),[R,me]=(0,D.useState)(null),[he,z]=(0,D.useState)(!1),[ge,_e]=(0,D.useState)([]),[ve,B]=(0,D.useState)(null),[ye,xe]=(0,D.useState)(!1),[Se,Ce]=(0,D.useState)(null),[we,Te]=(0,D.useState)(``),[V,Ee]=(0,D.useState)(ws),[De,Oe]=(0,D.useState)(null),[ke,Ae]=(0,D.useState)(null),[je,H]=(0,D.useState)(``),[Me,Ne]=(0,D.useState)(``),[Pe,Fe]=(0,D.useState)(null),[Ie,Le]=(0,D.useState)(Vm),[Re,ze]=(0,D.useState)({}),[Be,Ve]=(0,D.useState)(null),[He,Ue]=(0,D.useState)(null),[We,Ke]=(0,D.useState)(!1),[qe,Je]=(0,D.useState)(!1),[Ze,rt]=(0,D.useState)(null),[at,ot]=(0,D.useState)(zm[0].id),[mt,_t]=(0,D.useState)([]),[vt,yt]=(0,D.useState)(null),[bt,U]=(0,D.useState)(null),[xt,St]=(0,D.useState)(null),[Ct,wt]=(0,D.useState)(!1),[Tt,Et]=(0,D.useState)(``),Dt=(0,D.useRef)(null),Ot=(0,D.useRef)({}),kt=p?.defaultView??be,At=p?.themePresets??[],jt=ce?ce.registered&&ce.pathMatches:p?.archiveHandler??!1,Mt=ce?.registered??p?.archiveHandler??!1,Nt=P?P.registered&&P.pathMatches:p?.defaultFileManager??!1;cd(Dt,i??null,`section`,a??(()=>void 0),[p]),(0,D.useEffect)(()=>{let e=Dt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){ot(zm[zm.length-1].id);return}let n=t+110,r=zm[0].id;for(let{id:e}of zm){let t=Ot.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}ot(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Pt=e=>t=>{Ot.current[e]=t},Ft=e=>{Ot.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),ot(e)};(0,D.useEffect)(()=>{t&&Ft(t)},[t]),(0,D.useEffect)(()=>{ue().then(e=>l(e.available),()=>l([]))},[]),(0,D.useEffect)(()=>{_m().then(_t,()=>_t([]))},[]),(0,D.useEffect)(()=>{ht().then(U,()=>U(null))},[]),(0,D.useEffect)(()=>{st().then(Ue,()=>void 0)},[]),(0,D.useEffect)(()=>{Ge().then(d,()=>d(null)),Ye().then(g,()=>g(null)),ft().then(oe,()=>oe(!1)),$e().then(N,()=>N(null)),Qe().then(le,()=>le(null)),sm().then(_e,()=>_e([]))},[]),(0,D.useEffect)(()=>{let e=()=>void ut().then(ae,()=>ae(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let W=async e=>{if(!p)return;let t={...p,...e};Object.keys(e).every(e=>t[e]===p[e])||(g(t),rn(),g(await nt(t)),n())},It=async e=>{let t=await pa(e);if(!t)return;let n=p?.backgroundCustom??[];await W({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Lt=async()=>{let e=Tt.trim();if(!p||!w(e))return;let t=p.backgroundCustom??[];Et(``),await W({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Rt=e=>{if(!p)return;let t=p.backgroundSource;W({backgroundCustom:p.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},zt=async()=>{if(!p)return;let t=await fa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.protectedPaths.includes(r)||await W({protectedPaths:[...p.protectedPaths,r]})},Bt=()=>{let e=je.trim();p&&e&&!p.protectedPaths.includes(e)&&(H(``),W({protectedPaths:[...p.protectedPaths,e]}))},Ht=()=>{if(!p||!De)return;let e=De.value.trim(),t=De.from;Oe(null),e.length!==0&&e!==t&&W({protectedPaths:p.protectedPaths.map(n=>n===t?e:n)})},Ut=e=>{p&&W({protectedPaths:p.protectedPaths.filter(t=>t!==e)})},Wt=async()=>{let e=await Xe();e.length>0&&await W({protectedPaths:e})},qt=()=>{if(!p||!ke)return;let e=ke.value.trim(),t=ke.from;Ae(null),e&&e!==t&&W({directoryIndexBlacklist:p.directoryIndexBlacklist.map(n=>n===t?e:n)})},Jt=()=>{let e=Me.trim();p&&e&&!p.directoryIndexBlacklist.includes(e)&&(Ne(``),W({directoryIndexBlacklist:[...p.directoryIndexBlacklist,e]}))},Yt=async()=>{if(!p)return;let t=await fa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.directoryIndexBlacklist.includes(r)||await W({directoryIndexBlacklist:[...p.directoryIndexBlacklist,r]})},Xt=e=>{p&&W({directoryIndexBlacklist:p.directoryIndexBlacklist.filter(t=>t!==e)})},Zt=()=>{W({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},Qt=()=>{if(!p||Pe===null)return;let e=Pe.trim()||`yyyy/MM/dd HH:mm`;Fe(null),e!==p.timeFormatPattern&&W({timeFormatPattern:e})},$t=(e,t)=>{Le(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Bn(Bm,i),i})},en=h(p?.accentColor,te),G=h(p?.secondaryColor,b),tn=(e,t)=>{p&&($t(`accent`,en),$t(`secondary`,G),W({accentColor:e,secondaryColor:t}))},nn=(e,t)=>{p&&($t(e,e===`accent`?en:G),W(e===`accent`?{accentColor:t}:{secondaryColor:t}))},K=async()=>{Ke(!0),Je(!1);try{Ue(await ct())}catch{Je(!0)}finally{Ke(!1)}},an=async()=>{if(!p||!Be)return;let e=Be.name.trim()||`${Be.accent.toUpperCase()} / ${Be.secondary.toUpperCase()}`,t=[...p.themePresets,{name:e,accent:Be.accent,secondary:Be.secondary}];Ve(null),await W({themePresets:t})},q=async e=>{p&&await W({themePresets:p.themePresets.filter((t,n)=>n!==e)})},on=e=>{let t=Ze;rt(null),t&&t.role===e&&(e===`accent`?en:G).toLowerCase()!==t.color.toLowerCase()&&$t(e,t.color)},sn=async()=>{let e=we.trim();if(e&&!ye){xe(!0),Ce(null);try{_e(await lm(e,V)),Te(``)}catch{Ce(s(`Could not add the tag.`))}finally{xe(!1)}}},cn=async(e,t)=>{_e(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await um(e,t)||Ce(s(`Could not change the tag's color.`))},ln=async e=>{if(ye)return;xe(!0),Ce(null);let t=await cm(e);_e(await sm()),t||Ce(`"${e}" is still used by a folder whose index could not be updated.`),xe(!1)},un=async()=>{let e=ve;if(!e||ye)return;let t=e.value.trim();t.length===0||t===e.name?B(null):(xe(!0),Ce(null),await dm(e.name,t)?(_e(await sm()),B(null)):Ce(`Could not rename "${e.name}".`),xe(!1))},dn=async e=>{let t=new Set(kt.columns??be.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Oc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await W({defaultView:{...kt,columns:n}})},fn=async()=>{if(A)return;let e=!k;se(!0),M(null);try{let t=await pt(e);oe(t),g(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&M(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{M(`The request to Windows failed. Try again.`)}finally{se(!1)}},pn=async()=>{if(!de){I(!0),pe(null);try{let e=await et();N(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),n(),t||pe(`Windows did not accept the archive registration. Try again.`)}catch{pe(`The request to Windows failed. Try again.`)}finally{I(!1)}}},mn=async()=>{if(!de){I(!0),pe(null);try{let e=await tt();N(e),g(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&pe(`The registration is still there. Try turning it off again.`)}catch{pe(`The request to Windows failed. Try again.`)}finally{I(!1)}}},hn=async(e,t)=>{if(!p)return;let n={...p.extensionIcons};t===null?delete n[e]:n[e]=t,await W({extensionIcons:n})},gn={...Vt,...p?.shortcuts};(0,D.useEffect)(()=>{if(!R)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){me(null);return}let t=Gt(e);t&&(me(null),W({shortcuts:{...gn,[R]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[R,p]),(0,D.useEffect)(()=>{if(!he)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){z(!1);return}let t=Gt(e);t&&(z(!1),W({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[he,p]);let _n=async e=>{await W({recentLimit:Math.min(Math.max(e,0),50)})},vn=(e,t)=>{let n=t??Re[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};ze(t=>({...t,[e]:void 0})),W(i)},yn=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;yt(null),await W({sharePortMode:`custom`,sharePort:n}),await bd(n,`custom`)},bn=async e=>{let t=e===`custom`,n=t?p?.sharePort??8080:null;await W({sharePortMode:t?`custom`:`random`,sharePort:n}),await bd(n,t?`custom`:`random`)},xn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;wt(!0),St(null);try{let e=await gt(t);U(e),St(e.error),e.error||await W({startupMode:t})}finally{wt(!1)}},Sn=async e=>{await W({galleryRoots:e.length>0?e:null})},Cn=async()=>{let e=await fa(),t=p?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await Sn([...t,e])},wn=async()=>{let e=x.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await hn(e,ee),S(``))},Tn=async()=>{ie(!0);try{let e=await fa();if(!e)return;let t=await pa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await it(e.replace(/[\\/][^\\/]+$/,``),v(e),`file:${t}`)&&(rn(),y({folder:e,icon:t}))}finally{ie(!1)}},En=async(e,t)=>{let n={...p?.fonts};t?n[e]=t:delete n[e],await W({fonts:n})};return(0,F.jsxs)(eh,{children:[(0,F.jsxs)(th,{ref:Dt,children:[(0,F.jsxs)(nh,{ref:Pt(`application`),children:[(0,F.jsx)($m,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(Y,{children:[(0,F.jsx)(Q,{children:s(`Version`)}),(0,F.jsx)(jh,{children:e?`v${e.version}`:`—`})]}),(0,F.jsxs)(Y,{children:[(0,F.jsx)(Q,{children:s(`Platform`)}),(0,F.jsx)(jh,{children:e?.platform??`—`})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Logs`)}),(0,F.jsx)($,{children:s(`Application logs and crash details. Open the folder here to inspect them without leaving the app.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(bg,{disabled:!e?.logDirectory,onClick:()=>e?.logDirectory&&r(e.logDirectory),type:`button`,children:s(`Open log folder`)})})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Language`)}),(0,F.jsx)($,{children:s(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(Xm,{disabled:!p,onChange:e=>void W({language:e}),options:[Lm,...c.length>0?c:[Pm]],value:p?.language??Pm})})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Picker window size`)}),(0,F.jsx)($,{children:s(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Vh,{inputMode:`numeric`,onBlur:e=>vn(`width`,e.currentTarget.value),onChange:e=>ze(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Re.width??String(p?.pickerWindowWidth??1200)}),(0,F.jsx)(jh,{children:`×`}),(0,F.jsx)(Vh,{inputMode:`numeric`,onBlur:e=>vn(`height`,e.currentTarget.value),onChange:e=>ze(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Re.height??String(p?.pickerWindowHeight??800)})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Web server port`)}),(0,F.jsx)($,{children:s(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(so,{disabled:!p,onChange:e=>void bn(e),options:[{value:`random`,label:s(`Random`)},{value:`custom`,label:s(`Custom port`)}],value:p?.sharePortMode??`random`,width:160})})]}),p?.sharePortMode===`custom`&&(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Custom port`)}),(0,F.jsx)($,{children:s(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(Vh,{inputMode:`numeric`,onBlur:e=>void yn(e.currentTarget.value),onChange:e=>yt(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:vt??(p?.sharePort?String(p.sharePort):``)})})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Link paths`)}),(0,F.jsx)($,{children:s(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(so,{disabled:!p,onChange:e=>void W({linkPathMode:e}),options:[{value:`relative`,label:s(`Relative`)},{value:`absolute`,label:s(`Absolute`)}],value:p?.linkPathMode??`relative`,width:160})})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Global hotkey`)}),(0,F.jsx)($,{children:s(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(yg,{$listening:he,disabled:!p,onClick:()=>z(!0),type:`button`,children:he?s(`Press a key…`):p?.globalHotkey?Kt(p.globalHotkey):s(`None`)}),p?.globalHotkey&&(0,F.jsx)(Ph,{onClick:()=>void W({globalHotkey:null}),type:`button`,children:s(`Clear`)})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Open yafm:// links`)}),(0,F.jsx)($,{children:s(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),j&&(0,F.jsx)(Ah,{children:j})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Rh,{$on:k,children:s(k?`Active`:`Off`)}),(0,F.jsx)(zh,{$on:k,disabled:A,onClick:()=>void fn(),title:s(k?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,F.jsx)(Bh,{})})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Use as the default file manager`)}),(0,F.jsx)($,{children:s(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),P?.registered&&!P.pathMatches&&(0,F.jsx)(Ah,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:P.registeredPath??`?`})})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Rh,{$on:Nt,children:s(Nt?`Active`:`Off`)}),(0,F.jsx)(zh,{$on:Nt,disabled:!p,onClick:()=>void(async()=>{let e=P?.registered&&!P.pathMatches?!0:!p?.defaultFileManager;await W({defaultFileManager:e}),le(await Qe().catch(()=>null))})(),title:s(Nt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,F.jsx)(Bh,{})})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Open archives with this app`)}),(0,F.jsx)($,{children:s(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,F.jsx)($,{children:s(`When this is off, opening an archive uses the system's default application instead.`)}),ce?.registered&&!ce.pathMatches&&(0,F.jsx)(Ah,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:ce.registeredPath??`?`})}),fe&&(0,F.jsx)(Ah,{children:fe})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Rh,{$on:jt,children:s(jt?`Active`:`Off`)}),(0,F.jsx)(bg,{disabled:!p||de||jt,onClick:()=>void pn(),type:`button`,children:s(`Register`)}),e?.platform===`windows`&&(0,F.jsx)(bg,{onClick:()=>void lt(`ms-settings:defaultapps`),type:`button`,children:s(`Default apps…`)}),(0,F.jsx)(Lh,{disabled:!p||de||!Mt,onClick:()=>void mn(),type:`button`,children:s(`Unregister`)})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Reopen the tabs that were open`)}),(0,F.jsx)($,{children:s(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,F.jsx)(zh,{$on:p?.restoreTabs??!0,disabled:!p,onClick:()=>void W({restoreTabs:!p?.restoreTabs}),type:`button`,children:(0,F.jsx)(Bh,{})})]})]})]}),(0,F.jsxs)(nh,{ref:Pt(`startup`),children:[(0,F.jsx)($m,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Start with the computer`)}),(0,F.jsx)($,{children:s(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),xt&&(0,F.jsx)(Ah,{children:xt}),bt&&!bt.supported&&(0,F.jsx)(Ah,{children:s(`This platform cannot create a per-user startup entry.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(so,{disabled:!p||Ct||bt!==null&&!bt.supported,onChange:e=>void xn(e),options:[{value:`none`,label:s(`None`)},{value:`shortcut`,label:s(`Shortcut`)},{value:`task`,label:s(`Scheduled task`)}],value:bt?.mode??p?.startupMode??`none`,width:170})})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Start hidden in the tray`)}),(0,F.jsx)($,{children:s(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(zh,{$on:p?.startHidden??!1,disabled:!p,onClick:()=>void W({startHidden:!p?.startHidden}),type:`button`,children:(0,F.jsx)(Bh,{})})})]})]})]}),(0,F.jsxs)(nh,{ref:Pt(`fonts`),children:[(0,F.jsx)($m,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,F.jsxs)(ih,{children:[mm.map(e=>(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(e.label)}),(0,F.jsx)($,{children:s(`Falls back to {font} until another family is chosen.`,{font:s(e.fallback)})})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(vm,{defaultLabel:s(e.fallback),disabled:!p,fonts:mt,onChange:t=>void En(e.id,t),sample:e.sample,value:p?.fonts?.[e.id]??null})})]},e.id)),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Reset`)}),(0,F.jsx)($,{children:s(`Back to the app's built-in font for every role.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(bg,{onClick:()=>void W({fonts:{}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,F.jsxs)(nh,{ref:Pt(`time`),children:[(0,F.jsx)($m,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,F.jsx)(ih,{children:(0,F.jsxs)(ah,{children:[(0,F.jsxs)(oh,{children:[(0,F.jsx)(Q,{children:s(`Format`)}),(0,F.jsx)($,{children:s(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,F.jsx)(pg,{children:Fm.map(e=>(0,F.jsx)(mg,{$active:(p?.timeFormat??`24`)===e.id,onClick:()=>void W({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(p?.timeFormat??`24`)===`custom`&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(hg,{"aria-label":s(`Pattern`),onBlur:Qt,onChange:e=>Fe(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Qt()):e.key===`Escape`&&Fe(null)},spellCheck:!1,value:Pe??p?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,F.jsx)($,{children:s(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,F.jsxs)(gg,{children:[(0,F.jsx)(`span`,{children:s(`Preview`)}),(0,F.jsx)(`code`,{children:m(Im,p?.timeFormat,Pe??p?.timeFormatPattern)})]})]})})]}),(0,F.jsxs)(nh,{ref:Pt(`updates`),children:[(0,F.jsx)($m,{note:`The running build and the newest one published.`,title:`Updates`}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(Y,{children:[(0,F.jsx)(Q,{children:s(`Current version`)}),(0,F.jsx)(jh,{children:e?`v${e.version}`:`—`})]}),(0,F.jsxs)(Y,{children:[(0,F.jsx)(Q,{children:s(`Latest version`)}),(0,F.jsx)(jh,{children:He?`v${He.latest}`:`—`})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Check for updates`)}),(0,F.jsx)($,{children:He&&!He.available?s(`You are on the latest version.`):s(`Reads the version file the release workflow publishes.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(bg,{disabled:We,onClick:()=>void K(),type:`button`,children:s(We?`Checking…`:`Check now`)})})]}),He?.available&&(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Version {version} is available.`,{version:He.latest})}),(0,F.jsx)($,{children:s(`Download the new build from the releases page.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(bg,{onClick:()=>void lt(Nm),type:`button`,children:s(`Open release page`)})})]}),qe&&(0,F.jsx)(Y,{children:(0,F.jsx)(Ah,{children:s(`Could not check for updates.`)})})]})]}),(0,F.jsxs)(nh,{ref:Pt(`colors`),children:[(0,F.jsx)($m,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(ah,{children:[(0,F.jsxs)(oh,{children:[(0,F.jsx)(Q,{children:s(`Presets`)}),(0,F.jsx)($,{children:s(`One click changes the accent and the highlight together.`)})]}),(0,F.jsxs)(sh,{children:[Xl.map(e=>(0,F.jsxs)(ch,{$on:en.toLowerCase()===e.accent&&G.toLowerCase()===e.secondary,onClick:()=>tn(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,F.jsxs)(hh,{children:[(0,F.jsx)(`i`,{style:{background:e.accent}}),(0,F.jsx)(`i`,{style:{background:e.secondary}})]}),(0,F.jsx)(lh,{children:s(e.name)})]},e.name)),At.map((e,t)=>(0,F.jsxs)(uh,{children:[(0,F.jsxs)(ch,{$on:en.toLowerCase()===e.accent.toLowerCase()&&G.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>tn(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,F.jsxs)(hh,{children:[(0,F.jsx)(`i`,{style:{background:e.accent}}),(0,F.jsx)(`i`,{style:{background:e.secondary}})]}),(0,F.jsx)(lh,{children:e.name})]}),(0,F.jsx)(dh,{onClick:()=>void q(t),title:s(`Remove preset`),type:`button`,children:(0,F.jsx)(vi,{size:9})})]},`${e.name}-${t}`)),Be?(0,F.jsxs)(ph,{children:[(0,F.jsxs)(hh,{children:[(0,F.jsx)(`i`,{style:{background:Be.accent}}),(0,F.jsx)(`i`,{style:{background:Be.secondary}})]}),(0,F.jsx)(mh,{autoFocus:!0,maxLength:24,onChange:e=>Ve({...Be,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),an()):e.key===`Escape`&&(e.preventDefault(),Ve(null))},placeholder:s(`Preset name`),spellCheck:!1,value:Be.name}),(0,F.jsx)(Ph,{onClick:()=>void an(),type:`button`,children:s(`Save`)}),(0,F.jsx)(Ph,{onClick:()=>Ve(null),type:`button`,children:s(`Cancel`)})]}):(0,F.jsxs)(fh,{disabled:!p,onClick:()=>Ve({name:``,accent:en,secondary:G}),title:s(`Save the current colours as a preset`),type:`button`,children:[(0,F.jsx)(oi,{size:12}),s(`Add preset`)]})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Accent color`)}),(0,F.jsx)($,{children:s(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Qm,{colors:Ie.accent,current:en,onApply:e=>nn(`accent`,e)}),(0,F.jsx)(Fh,{"aria-label":s(`Accent color`),disabled:!p,onBlur:()=>on(`accent`),onChange:e=>void W({accentColor:e.target.value}),onFocus:()=>rt({role:`accent`,color:en}),type:`color`,value:en}),(0,F.jsx)(Ih,{children:en.toUpperCase()})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Secondary color`)}),(0,F.jsx)($,{children:s(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Qm,{colors:Ie.secondary,current:G,onApply:e=>nn(`secondary`,e)}),(0,F.jsx)(Fh,{"aria-label":s(`Secondary color`),disabled:!p,onBlur:()=>on(`secondary`),onChange:e=>void W({secondaryColor:e.target.value}),onFocus:()=>rt({role:`secondary`,color:G}),type:`color`,value:G}),(0,F.jsx)(Ih,{children:G.toUpperCase()})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Reset colors`)}),(0,F.jsx)($,{children:s(`Returns the interface to the default blue and indigo theme.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(Ph,{disabled:!p,onClick:()=>{$t(`accent`,en),$t(`secondary`,G),W({accentColor:null,secondaryColor:null})},type:`button`,children:s(`Reset`)})})]})]})]}),(0,F.jsxs)(nh,{ref:Pt(`background`),children:[(0,F.jsx)($m,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(ah,{children:[(0,F.jsxs)(oh,{children:[(0,F.jsx)(Q,{children:s(`Wallpaper`)}),(0,F.jsx)($,{children:s(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,F.jsx)($h,{children:(0,F.jsx)(eg,{$active:!p?.backgroundSource,onClick:()=>void W({backgroundSource:null}),title:s(`None`),type:`button`,children:(0,F.jsx)(ag,{children:s(`None`)})})}),(0,F.jsxs)(Xh,{children:[$l.map(e=>(0,F.jsxs)(Zh,{children:[(0,F.jsx)(Qh,{children:s(e.name)}),(0,F.jsx)($h,{children:e.variants.map(t=>(0,F.jsx)(eg,{$active:p?.backgroundSource===t.id,onClick:()=>void W({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,F.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,F.jsxs)(Zh,{children:[(0,F.jsx)(Qh,{children:s(`Motion`)}),(0,F.jsx)($h,{children:Ql.map(e=>(0,F.jsxs)(eg,{$active:p?.backgroundSource===e.id,onClick:()=>void W({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,F.jsx)(`img`,{alt:``,src:e.poster}),(0,F.jsx)(rg,{children:(0,F.jsx)(Ci,{size:11})})]},e.id))})]}),(0,F.jsxs)(Zh,{children:[(0,F.jsx)(Qh,{children:s(`Custom`)}),(0,F.jsxs)($h,{children:[(p?.backgroundCustom??[]).map(e=>(0,F.jsx)(Ym,{active:p?.backgroundSource===`file:${e}`||p?.backgroundSource===`url:${e}`||p?.backgroundSource===e,onRemove:()=>Rt(e),onSelect:()=>void W({backgroundSource:w(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,F.jsxs)(ig,{onClick:()=>void It([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,F.jsx)(oi,{size:12}),s(`Image…`)]}),(0,F.jsxs)(ig,{onClick:()=>void It([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,F.jsx)(oi,{size:12}),s(`Video…`)]})]})]})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Image or video URL`)}),(0,F.jsx)($,{children:s(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Vh,{onChange:e=>Et(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Lt()},placeholder:`https://…`,value:Tt}),(0,F.jsx)(Ph,{disabled:!w(Tt),onClick:()=>void Lt(),type:`button`,children:s(`Add`)})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsx)(Q,{children:s(`Blur`)}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Yh,{max:40,min:0,onChange:e=>void W({backgroundBlur:Number(e.target.value)}),type:`range`,value:p?.backgroundBlur??0}),(0,F.jsxs)(jh,{children:[p?.backgroundBlur??0,`px`]})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsx)(Q,{children:s(`Saturation`)}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Yh,{max:200,min:0,onChange:e=>void W({backgroundSaturation:Number(e.target.value)}),type:`range`,value:p?.backgroundSaturation??100}),(0,F.jsxs)(jh,{children:[p?.backgroundSaturation??100,`%`]})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsx)(Q,{children:s(`Brightness`)}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Yh,{max:150,min:40,onChange:e=>void W({backgroundBrightness:Number(e.target.value)}),type:`range`,value:p?.backgroundBrightness??100}),(0,F.jsxs)(jh,{children:[p?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,F.jsxs)(nh,{ref:Pt(`safety`),children:[(0,F.jsx)($m,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(ah,{children:[(0,F.jsxs)(oh,{children:[(0,F.jsx)(Q,{children:s(`Protected folders`)}),(0,F.jsx)($,{children:s(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,F.jsx)(og,{children:(p?.protectedPaths??[]).map(e=>(0,F.jsxs)(sg,{children:[(0,F.jsx)(cg,{"aria-label":s(`Protected path`),onBlur:Ht,onChange:t=>Oe({from:e,value:t.target.value}),onFocus:()=>Oe({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ht()):e.key===`Escape`&&Oe(null)},spellCheck:!1,value:De?.from===e?De.value:e}),(0,F.jsx)(lg,{onClick:()=>Ut(e),title:s(`Remove`),type:`button`,children:(0,F.jsx)(vi,{size:10})})]},e))}),(0,F.jsxs)(dg,{children:[(0,F.jsx)(fg,{"aria-label":s(`New protected rule`),onChange:e=>H(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Bt())},placeholder:`*.log`,spellCheck:!1,value:je}),(0,F.jsx)(Ph,{onClick:Bt,type:`button`,children:s(`Add the rule`)})]}),(0,F.jsxs)(ug,{children:[(0,F.jsx)(Ph,{onClick:()=>void Wt(),type:`button`,children:s(`Restore defaults`)}),(0,F.jsx)(Ph,{onClick:()=>void zt(),type:`button`,children:s(`Add folder…`)})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Confirmation delay`)}),(0,F.jsx)($,{children:s(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Yh,{max:30,min:2,onChange:e=>void W({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:p?.deleteDelaySeconds??5}),(0,F.jsxs)(jh,{children:[p?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,F.jsxs)(nh,{ref:Pt(`tags`),children:[(0,F.jsx)($m,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(kh,{children:[(0,F.jsx)(Mh,{"aria-label":s(`Color of the new tag`),onChange:e=>Ee(e.target.value),type:`color`,value:V}),(0,F.jsx)(Vh,{onChange:e=>Te(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),sn())},placeholder:s(`New tag`),spellCheck:!1,value:we})]}),(0,F.jsx)($,{children:s(`Add a tag here; it is available in every folder.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(Ph,{disabled:ye||we.trim().length===0,onClick:()=>void sn(),type:`button`,children:s(`Add`)})})]}),Se&&(0,F.jsx)(Y,{children:(0,F.jsx)(Ah,{children:Se})}),ge.length===0&&(0,F.jsx)(Y,{children:(0,F.jsx)($,{children:s(`No tags yet. Add one below; it is available in every folder.`)})}),ge.map(e=>(0,F.jsx)(Y,{children:ve?.name===e.name?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(kh,{children:[(0,F.jsx)(Mh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void cn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,F.jsx)(Nh,{autoFocus:!0,disabled:ye,onChange:t=>B({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),un()):e.key===`Escape`&&(e.preventDefault(),B(null))},value:ve.value})]}),(0,F.jsx)($,{children:s(`Press Enter to save, Escape to cancel.`)})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Ph,{disabled:ye,onClick:()=>void un(),type:`button`,children:s(`Save`)}),(0,F.jsx)(Ph,{disabled:ye,onClick:()=>B(null),type:`button`,children:s(`Cancel`)})]})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(kh,{children:[(0,F.jsx)(Mh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void cn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,F.jsx)(Q,{children:e.name})]}),(0,F.jsx)($,{children:o(s,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Ph,{disabled:ye,onClick:()=>B({name:e.name,value:e.name}),type:`button`,children:s(`Edit`)}),(0,F.jsxs)(Lh,{disabled:ye,onClick:()=>void ln(e.name),type:`button`,children:[(0,F.jsx)(gi,{size:13}),s(`Remove`)]})]})]})},e.name))]})]}),(0,F.jsxs)(nh,{ref:Pt(`files-view`),children:[(0,F.jsx)($m,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Default view`)}),(0,F.jsx)($,{children:s(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsxs)(qh,{children:[(0,F.jsx)(Jh,{$on:kt.mode===`list`,onClick:()=>void W({defaultView:{...kt,mode:`list`}}),type:`button`,children:s(`List`)}),(0,F.jsx)(Jh,{$on:kt.mode===`grid`,onClick:()=>void W({defaultView:{...kt,mode:`grid`}}),type:`button`,children:s(`Grid`)})]})})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`List icon size`)}),(0,F.jsx)($,{children:s(`The icon in the list rows.`)})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Yh,{max:48,min:16,onChange:e=>void W({defaultView:{...kt,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:kt.iconSize}),(0,F.jsxs)(jh,{children:[kt.iconSize,`px`]})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Grid size`)}),(0,F.jsx)($,{children:s(`The height of a grid tile; the icon inside follows it.`)})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Yh,{max:260,min:100,onChange:e=>void W({defaultView:{...kt,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:kt.gridSize}),(0,F.jsxs)(jh,{children:[kt.gridSize,`px`]})]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(kh,{children:[(0,F.jsx)(Q,{children:s(`Selection checkboxes`)}),(0,F.jsx)(fm,{})]}),(0,F.jsx)($,{children:s(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,F.jsx)(zh,{$on:p?.showCheckboxes??!0,disabled:!p,onClick:()=>void W({showCheckboxes:!(p?.showCheckboxes??!0)}),type:`button`,children:(0,F.jsx)(Bh,{})})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(kh,{children:[(0,F.jsx)(Q,{children:s(`Open with a single click`)}),(0,F.jsx)(fm,{})]}),(0,F.jsx)($,{children:s(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,F.jsx)(zh,{$on:p?.openOnSingleClick??!1,disabled:!p,onClick:()=>void W({openOnSingleClick:!(p?.openOnSingleClick??!1)}),type:`button`,children:(0,F.jsx)(Bh,{})})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(kh,{children:[(0,F.jsx)(Q,{children:s(`Confirm before deleting`)}),(0,F.jsx)(fm,{})]}),(0,F.jsx)($,{children:s(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,F.jsx)(zh,{$on:p?.confirmDelete??!1,disabled:!p,onClick:()=>void W({confirmDelete:!(p?.confirmDelete??!1)}),type:`button`,children:(0,F.jsx)(Bh,{})})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(kh,{children:[(0,F.jsx)(Q,{children:s(`Play audio in video previews`)}),(0,F.jsx)(fm,{})]}),(0,F.jsx)($,{children:s(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,F.jsx)(zh,{$on:p?.previewVideoAudio??!1,disabled:!p,onClick:()=>void W({previewVideoAudio:!(p?.previewVideoAudio??!1)}),type:`button`,children:(0,F.jsx)(Bh,{})})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(kh,{children:[(0,F.jsx)(Q,{children:s(`Autoplay video previews`)}),(0,F.jsx)(fm,{})]}),(0,F.jsx)($,{children:s(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,F.jsx)(zh,{$on:p?.previewVideoAutoplay??!1,disabled:!p,onClick:()=>void W({previewVideoAutoplay:!(p?.previewVideoAutoplay??!1)}),type:`button`,children:(0,F.jsx)(Bh,{})})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsxs)(kh,{children:[(0,F.jsx)(Q,{children:s(`Preview panel under the list`)}),(0,F.jsx)(fm,{})]}),(0,F.jsx)($,{children:s(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,F.jsx)(zh,{$on:kt.showImages??!0,onClick:()=>void W({defaultView:{...kt,showImages:!(kt.showImages??!0)}}),type:`button`,children:(0,F.jsx)(Bh,{})})]}),(0,F.jsx)(Y,{children:(0,F.jsxs)(X,{children:[(0,F.jsxs)(kh,{children:[(0,F.jsx)(Q,{children:s(`Columns`)}),(0,F.jsx)(fm,{})]}),(0,F.jsx)($,{children:s(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,F.jsx)(Y,{children:(0,F.jsxs)(_g,{children:[Oc.map(e=>(0,F.jsxs)(vg,{children:[(0,F.jsx)(`input`,{checked:(kt.columns??[]).includes(e.id),onChange:()=>void dn(e.id),type:`checkbox`}),(0,F.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,F.jsxs)(vg,{children:[(0,F.jsx)(`input`,{checked:(kt.columns??[]).includes(`linkTarget`),onChange:()=>void dn(`linkTarget`),type:`checkbox`}),(0,F.jsx)(`span`,{children:s(`Link target after the name`)})]})]})})]}),(0,F.jsxs)(wg,{children:[s(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,F.jsx)(fm,{}),` `,s(`Anything marked as global always applies to every folder.`)]})]}),(0,F.jsxs)(nh,{ref:Pt(`shortcuts`),children:[(0,F.jsx)($m,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,F.jsxs)(ih,{children:[Mm.map(({id:e,label:t,note:n})=>(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(t)}),(0,F.jsx)($,{children:s(n)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(yg,{$listening:R===e,onClick:()=>me(e),type:`button`,children:R===e?s(`Press a key…`):Kt(gn[e])})})]},e)),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Reset`)}),(0,F.jsx)($,{children:s(`Back to the default combination for every action.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(bg,{onClick:()=>void W({shortcuts:{...Vt}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,F.jsxs)(nh,{ref:Pt(`memory`),children:[(0,F.jsx)($m,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(Th,{children:[(0,F.jsxs)(Eh,{children:[(0,F.jsx)(Q,{children:s(`Process memory`)}),(0,F.jsx)(jh,{children:O?`${f(O.private)} · ${wh(O.private,O.available)}`:`—`})]}),(0,F.jsx)(Dh,{children:(0,F.jsx)(Oh,{$ratio:O?O.private/Math.max(O.available,1):0,$tone:T(O?O.private/Math.max(O.available,1):0)})}),(0,F.jsx)($,{children:O?s(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:f(O.available),resident:f(O.workingSet)}):s(`Reading the current usage…`)})]}),(0,F.jsxs)(Th,{children:[(0,F.jsxs)(Eh,{children:[(0,F.jsx)(Q,{children:s(`Managed heap`)}),(0,F.jsx)(jh,{children:O?`${f(O.managed)} · ${wh(O.managed,O.private)}`:`—`})]}),(0,F.jsx)(Dh,{children:(0,F.jsx)(Oh,{$ratio:O?O.managed/Math.max(O.private,1):0,$tone:`var(--accent-secondary)`})}),(0,F.jsx)($,{children:s(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,F.jsxs)(Th,{children:[(0,F.jsxs)(Eh,{children:[(0,F.jsx)(Q,{children:s(`Native and runtime`)}),(0,F.jsx)(jh,{children:O?`${f(Math.max(0,O.private-O.managed))} · ${wh(Math.max(0,O.private-O.managed),O.private)}`:`—`})]}),(0,F.jsx)(Dh,{children:(0,F.jsx)(Oh,{$ratio:O?Math.max(0,O.private-O.managed)/Math.max(O.private,1):0,$tone:`var(--accent-primary)`})}),(0,F.jsx)($,{children:s(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Free memory`)}),(0,F.jsx)($,{children:s(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(bg,{onClick:()=>void dt().then(ae),type:`button`,children:s(`Trim now`)})})]})]})]}),(0,F.jsxs)(nh,{ref:Pt(`overview`),children:[(0,F.jsx)($m,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,F.jsx)(ih,{children:(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Recent items`)}),(0,F.jsx)($,{children:s(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(Vh,{max:50,min:0,onChange:e=>void _n(Number(e.target.value)),type:`number`,value:p?.recentLimit??10})})]})})]}),(0,F.jsxs)(nh,{ref:Pt(`gallery`),children:[(0,F.jsx)($m,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,F.jsxs)(ih,{children:[(p?.galleryRoots??[]).map(e=>(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:v(e)}),(0,F.jsx)($,{children:e})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(xg,{onClick:()=>void Sn((p?.galleryRoots??[]).filter(t=>t!==e)),title:s(`Stop scanning this folder`),type:`button`,children:(0,F.jsx)(vi,{size:12})})})]},e)),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Scan folders`)}),(0,F.jsx)($,{children:(p?.galleryRoots??[]).length===0?s(`Nothing added yet, so the gallery reads the Pictures folder.`):s(`Only these folders are scanned, three levels deep.`)})]}),(0,F.jsx)(Z,{children:(0,F.jsx)(bg,{onClick:()=>void Cn(),type:`button`,children:s(`Choose folder…`)})})]})]})]}),(0,F.jsxs)(nh,{ref:Pt(`icons`),children:[(0,F.jsx)($m,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Use system file icons`)}),(0,F.jsx)($,{children:s(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,F.jsx)(zh,{$on:p?.systemIcons??!1,disabled:!p,onClick:()=>void W({systemIcons:!p?.systemIcons}),type:`button`,children:(0,F.jsx)(Bh,{})})]}),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Use custom folder icons`)}),(0,F.jsx)($,{children:s(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,F.jsx)(zh,{$on:p?.customFolderIcons??!1,disabled:!p,onClick:()=>void W({customFolderIcons:!p?.customFolderIcons}),type:`button`,children:(0,F.jsx)(Bh,{})})]})]})]}),(0,F.jsxs)(nh,{ref:Pt(`extension-icons`),children:[(0,F.jsx)($m,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,F.jsxs)(ih,{children:[Object.entries(p?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:e}),(0,F.jsx)($,{children:Km(s,t)})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(qm,{source:t}),(0,F.jsx)(xg,{onClick:()=>void hn(e,null),title:s(`Remove this rule`),type:`button`,children:(0,F.jsx)(vi,{size:12})})]})]},e)),(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Add a rule`)}),(0,F.jsx)($,{children:s(`Extension and the icon to draw for it.`)})]}),(0,F.jsxs)(Z,{children:[(0,F.jsx)(Vh,{onChange:e=>S(e.target.value),placeholder:`.psd`,spellCheck:!1,value:x}),(0,F.jsxs)(Kh,{children:[(0,F.jsx)(xg,{onClick:()=>re(e=>!e),title:s(`Choose the icon`),type:`button`,children:(0,F.jsx)(qm,{source:ee})}),ne&&(0,F.jsx)(ld,{allowDefault:!1,onClose:()=>re(!1),onPick:e=>{C(e??`file`),re(!1)},value:ee})]}),(0,F.jsx)(xg,{onClick:()=>void wn(),title:s(`Add the rule`),type:`button`,children:(0,F.jsx)(oi,{size:13})})]})]})]})]}),(0,F.jsxs)(nh,{ref:Pt(`folder-icons`),children:[(0,F.jsx)($m,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Give a folder its own icon`)}),(0,F.jsx)($,{children:s(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,F.jsxs)(Z,{children:[_&&(0,F.jsx)(Jm,{src:_.icon}),(0,F.jsx)(bg,{disabled:E,onClick:()=>void Tn(),type:`button`,children:s(E?`Choosing…`:`Choose folder and icon…`)})]})]}),_&&(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:v(_.folder)}),(0,F.jsx)($,{children:_.folder})]}),(0,F.jsx)(Z,{children:(0,F.jsxs)(Cg,{children:[(0,F.jsx)(_i,{size:11}),` `,s(`Saved`)]})})]})]})]}),(0,F.jsxs)(nh,{ref:Pt(`folder-index`),children:[(0,F.jsx)($m,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(Y,{children:[(0,F.jsxs)(X,{children:[(0,F.jsx)(Q,{children:s(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,F.jsx)($,{children:s(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,F.jsx)(zh,{$on:p?.writeDirectoryIndex??!0,disabled:!p,onClick:()=>void W({writeDirectoryIndex:!p?.writeDirectoryIndex}),type:`button`,children:(0,F.jsx)(Bh,{})})]}),(0,F.jsxs)(ah,{children:[(0,F.jsxs)(oh,{children:[(0,F.jsx)(Q,{children:s(`Directory index blacklist`)}),(0,F.jsx)($,{children:s(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,F.jsx)(og,{children:(p?.directoryIndexBlacklist??[]).map(e=>(0,F.jsxs)(sg,{children:[(0,F.jsx)(cg,{"aria-label":s(`Directory index blacklist rule`),onBlur:qt,onChange:t=>Ae({from:e,value:t.target.value}),onFocus:()=>Ae({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),qt()):e.key===`Escape`&&Ae(null)},spellCheck:!1,value:ke?.from===e?ke.value:e}),(0,F.jsx)(lg,{onClick:()=>Xt(e),title:s(`Remove`),type:`button`,children:(0,F.jsx)(vi,{size:10})})]},e))}),(0,F.jsxs)(dg,{children:[(0,F.jsx)(fg,{"aria-label":s(`Directory index blacklist rule`),onChange:e=>Ne(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Jt())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Me}),(0,F.jsx)(Ph,{onClick:Jt,type:`button`,children:s(`Add the rule`)})]}),(0,F.jsxs)(ug,{children:[(0,F.jsx)(Ph,{onClick:Zt,type:`button`,children:s(`Restore defaults`)}),(0,F.jsx)(Ph,{onClick:()=>void Yt(),type:`button`,children:s(`Add folder…`)})]})]})]}),!(p?.writeDirectoryIndex??!0)&&(0,F.jsx)(Tg,{children:Gm(s,e?.platform)})]}),(0,F.jsxs)(nh,{ref:Pt(`indexing`),children:[(0,F.jsx)($m,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,F.jsx)(Wm,{})]}),(0,F.jsxs)(nh,{ref:Pt(`files`),children:[(0,F.jsx)($m,{note:`What the listings include.`,title:`Files`}),(0,F.jsxs)(ih,{children:[(0,F.jsxs)(Y,{children:[(0,F.jsx)(Q,{children:s(`Hidden items`)}),(0,F.jsx)(jh,{children:Um(s,u?.showHidden)})]}),(0,F.jsxs)(Y,{children:[(0,F.jsx)(Q,{children:s(`Protected operating system files`)}),(0,F.jsx)(jh,{children:Um(s,u?.showSystem)})]})]}),(0,F.jsx)(wg,{children:s(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,F.jsxs)(yh,{"aria-label":s(`Settings sections`),children:[(0,F.jsx)(bh,{children:s(`Sections`)}),(0,F.jsx)(xh,{children:zm.map(({id:e,label:t})=>(0,F.jsx)(Sh,{$active:at===e,onClick:()=>Ft(e),type:`button`,children:(0,F.jsx)(`span`,{children:s(t)})},e))}),(0,F.jsx)(Ch,{children:s(`Changes are saved as you make them.`)})]})]})}function Um(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Wm(){let e=L(),[t,n]=(0,D.useState)(null);return(0,D.useEffect)(()=>{let e=!0,t=()=>qe().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,F.jsx)(Tg,{children:e(`No indexing tasks are running.`)}):(0,F.jsxs)(ih,{children:[(0,F.jsx)(Y,{children:(0,F.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,F.jsx)(Y,{children:(0,F.jsx)(jh,{title:e,children:e})},e))]}):(0,F.jsx)(Tg,{children:e(`Index task information is unavailable.`)})}function Gm(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function Km(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function qm({source:e}){let t=un(e.startsWith(`file:`)?e.slice(5):null);return(0,F.jsx)(Sg,{children:t?(0,F.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,F.jsx)(Bs,{name:e,size:16})})}function Jm({src:e}){let t=un(e);return(0,F.jsx)(Sg,{children:t&&(0,F.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Ym({path:e,active:t,onSelect:n,onRemove:r}){let i=L(),a=w(e),o=hn(a?null:e),s=a?e:o,c=_u(e.split(/[?#]/)[0]);return(0,F.jsxs)(tg,{children:[(0,F.jsxs)(eg,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,F.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,F.jsx)(`img`,{alt:``,src:s})),c&&(0,F.jsx)(rg,{children:(0,F.jsx)(Ci,{size:11})})]}),(0,F.jsx)(ng,{onClick:r,title:i(`Remove`),type:`button`,children:(0,F.jsx)(vi,{size:9})})]})}function Xm({value:e,options:t,onChange:n,disabled:r}){let i=L(),[a,o]=(0,D.useState)(null),s=(0,D.useRef)(null);return(0,D.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(Hh,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,F.jsx)(`span`,{children:Zm(i,e)}),(0,F.jsx)(Uh,{children:(0,F.jsx)(li,{size:11})})]}),a&&(0,ka.createPortal)((0,F.jsx)(Wh,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,F.jsxs)(Gh,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,F.jsx)(`span`,{children:Zm(i,t)}),t===e&&(0,F.jsx)(_i,{size:11})]},t))}),document.body)]})}function Zm(e,t){return t===Lm?e(`System default`):Rm[t]??t}function Qm({colors:e,current:t,onApply:n}){let r=L();if(e.length===0)return null;let[i,...a]=e;return(0,F.jsxs)(gh,{children:[(0,F.jsxs)(vh,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,F.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,F.jsx)(_h,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,F.jsx)(_i,{size:9})},e))]})}function $m({title:e,note:t,global:n=!1}){let r=L();return(0,F.jsxs)(rh,{children:[(0,F.jsxs)(`h2`,{children:[r(e),n&&(0,F.jsx)(fm,{})]}),(0,F.jsx)(`p`,{children:r(t)})]})}var eh=_.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,th=_.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,nh=_.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,rh=_.header`
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
`,ih=_.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,ah=_.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,oh=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,sh=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,ch=_.button`
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
`,lh=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,uh=_.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,dh=_.button`
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
`,fh=_.button`
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
`,ph=_.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,mh=_.input`
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
`,hh=_.span`
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
`,gh=_.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,_h=_.button`
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
`,vh=_.button`
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
`,yh=_.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,bh=_.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,xh=_.div`
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
`,Sh=_.button`
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
`,Ch=_.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function wh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var Th=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Eh=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Dh=_.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Oh=_.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Y=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,X=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Z=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=_.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,kh=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=_.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,Ah=_.span`
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
`,jh=_.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Mh=_.input`
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
`,Nh=_.input`
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
`,Ph=_.button`
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
`,Fh=_.input`
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
`,Ih=_.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Lh=_.button`
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
`,Rh=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,zh=_.button`
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
`,Bh=_.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Vh=_.input`
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
`,Hh=_.button`
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
`,Uh=_.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Wh=_.div`
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
`,Gh=_.button`
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
`,Kh=_.span`
    position: relative;
    display: inline-flex;
`,qh=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Jh=_.button`
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
`,Yh=_.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Xh=_.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Zh=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Qh=_.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,$h=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,eg=_.button`
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
`,tg=_.div`
    position: relative;
    width: 102px;
    height: 58px;
`,ng=_.button`
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
`,rg=_.span`
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
`,ig=_.button`
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
`,ag=_.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,og=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,sg=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,cg=_.input`
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
`,lg=_.button`
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
`,ug=_.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,dg=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,fg=_.input`
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
`,pg=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,mg=_.button`
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
`,hg=_.input`
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
`,gg=_.div`
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
`,_g=_.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,vg=_.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,yg=_.button`
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
`,bg=_.button`
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
`,xg=_.button`
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
`,Sg=_.span`
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
`,Cg=_.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,wg=_.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Tg=_.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,Eg=150,Dg=2500,Og=3,kg=600;function Ag({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,onSearchMatches:s,onPick:c,onSelectionChange:l,onAddToTray:u,onAddFavorite:d,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,showDetails:g=!0,videoAudio:_=!1,videoAutoplay:v=!1}){let b=L(),x=Cc(`gallery`),[S,ee]=(0,D.useState)([]),[C,te]=(0,D.useState)(0),[ne,w]=(0,D.useState)(!0),[T,re]=(0,D.useState)(null),[E,ie]=(0,D.useState)(!1),[O,ae]=(0,D.useState)([]),[k,oe]=(0,D.useState)(()=>{let e=Ln(`yafm.preview.width`,320);return e>=220?e:320}),A=(0,D.useRef)([]),se=(0,D.useRef)(0),j=(0,D.useRef)(!1),M=(0,D.useRef)(!0),ce=(0,D.useRef)(0),N=(0,D.useRef)(null),P=(0,D.useRef)(0),le=(0,D.useCallback)(async e=>{let t=++ce.current;w(!0),M.current=!0,re(null);try{let n=await ze(0,Eg,e);if(t!==ce.current)return;A.current=n.entries,se.current=n.total,ee(n.entries),te(n.total)}catch(e){t===ce.current&&re(e instanceof Error?e.message:String(e))}finally{t===ce.current&&(M.current=!1,w(!1))}},[]);(0,D.useEffect)(()=>{le(!1)},[le]);let ue=(0,D.useCallback)(async()=>{if(M.current||j.current||A.current.length>=se.current)return;let e=ce.current;j.current=!0;try{let t=A.current,n=se.current;for(let r=0;r<Og&&t.length<n;r++){let r=await ze(t.length,Eg,!1);if(e!==ce.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<Eg)break}if(e!==ce.current)return;A.current=t,se.current=n,(0,D.startTransition)(()=>{ee(t),te(n)})}catch{}finally{j.current=!1}},[]),de=(0,D.useCallback)(e=>{P.current||=window.requestAnimationFrame(()=>{P.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<Dg&&ue()})},[ue]);(0,D.useEffect)(()=>{let e=N.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&ue()},{root:e.parentElement,rootMargin:`${Dg}px 0px`});return t.observe(e),()=>t.disconnect()},[ue]),(0,D.useEffect)(()=>{if(S.length>=C)return;let e=window.setTimeout(()=>{let e=N.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<Dg&&ue()},200);return()=>window.clearTimeout(e)},[S.length,C,ue]);let I=(0,D.useMemo)(()=>({path:``,parent:null,entries:S.map(jg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[S]),fe=(0,D.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),pe=(0,D.useCallback)(e=>{c?c(e):Se(e)},[c]),R=(0,D.useCallback)(e=>{let t=Mg(e.modified);return{id:t,label:t}},[]),me=()=>{ie(!0),le(!0).finally(()=>ie(!1))},he=S.length<C,z=(0,D.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:S.filter(e=>En(e.name,a)||En(e.path,a)),[S,a?.open,a?.query,a?.matchCase,a?.regex]),ge=(0,D.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:z[Math.min(a.index,Math.max(0,z.length-1))]?.path??null}:vn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,z]);(0,D.useEffect)(()=>{s?.(z.length)},[z.length,s]);let _e=(0,D.useCallback)(e=>{ae(e),l?.(e)},[l]),ve=e=>{oe(e),Rn(`yafm.preview.width`,e)},B=O.length>0?S.find(e=>e.path===O[0])??null:null,ye=B?.name.includes(`.`)?B.name.slice(B.name.lastIndexOf(`.`)+1).toUpperCase():`—`,be=B&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(B.name)?b(`Video`):b(`Picture`),xe=B?B.path.slice(0,Math.max(B.path.lastIndexOf(`\\`),B.path.lastIndexOf(`/`))):``,Ce=B?{name:B.name,path:B.path,isDirectory:!1,size:B.size,modified:B.modified,fields:[{label:b(`Type`),value:be},{label:b(`Extension`),value:ye},{label:b(`Location`),value:xe},{label:b(`Full path`),value:B.path},{label:b(`Size`),value:f(B.size)},{label:b(`Modified`),value:y(B.modified)},{label:b(`Created`),value:`—`}]}:null;return(0,F.jsxs)(Ng,{children:[(0,F.jsxs)(Ig,{children:[(0,F.jsxs)(Rg,{children:[(0,F.jsx)(`span`,{children:b(`Gallery`)}),(0,F.jsx)(zg,{children:ne?b(`scanning…`):b(`{shown} of {total} pictures`,{shown:S.length,total:C})})]}),(0,F.jsxs)(Lg,{children:[(0,F.jsx)(Bg,{onClick:me,title:b(`Scan the folders again`),type:`button`,children:(0,F.jsx)(Vg,{$spinning:E,children:(0,F.jsx)(ai,{size:14})})}),x.available&&(0,F.jsx)(Bg,{onClick:e=>x.open(e.clientX,e.clientY),title:b(`Selection menu`),type:`button`,children:(0,F.jsx)(ca,{size:14})})]})]}),T&&(0,F.jsx)(Ug,{children:T}),!T&&!ne&&C===0&&(0,F.jsx)(Ug,{children:b(`No pictures found.`)}),!T&&(ne||C>0)&&(0,F.jsxs)(Pg,{children:[(0,F.jsx)(Fg,{children:(0,F.jsx)(jc,{confirmDelete:n,find:ge,listing:ne&&S.length===0?null:I,loading:ne,error:null,view:fe,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:_e,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:pe,onOpenFile:pe,onRefresh:me,onAddToTray:u,onAddFavorite:d,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,groupOf:R,onGridScroll:de,gridFooter:(0,F.jsx)(Hg,{$space:he?kg:1,ref:N}),allowBackgroundMenu:!1})}),g&&(0,F.jsx)(Go,{emptyNote:b(`Nothing selected.`),info:Ce,onWidth:ve,selectionNote:O.length>1?o(b,O.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:_,videoAutoplay:v,width:k})]})]})}function jg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function Mg(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(x(),{weekday:`long`}):t.toLocaleDateString(x(),{year:`numeric`,month:`long`,day:`numeric`})}var Ng=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Pg=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Fg=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,Ig=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,Lg=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Rg=_.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,zg=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Bg=_.button`
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
`,Vg=_.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,Hg=_.div`
    height: ${({$space:e})=>e}px;
`,Ug=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function Wg({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:u=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,D.useState)([]),_=L(),[y,b]=(0,D.useState)(null),x=Pn();(0,D.useEffect)(()=>{Ye().then(e=>{b(e),g(bs(e).filter(e=>e.pinned))},()=>{b(null),g([])})},[c]),(0,D.useEffect)(()=>{if(!P.available)return;let e=h.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return P.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>P.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[h,s]);let S=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:y?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??y?.placeIcons?.[n]??null}}),ee=o===`files`;return(0,F.jsxs)(Xg,{children:[(0,F.jsxs)(Zg,{children:[!u.includes(`home`)&&(0,F.jsxs)(n_,{$active:o===`home`,onClick:e=>m(`home`,Wt(e)),title:_(`Overview`),type:`button`,children:[(0,F.jsx)(Pi,{}),(0,F.jsx)(i_,{children:_(`Overview`)})]}),!u.includes(`recycle`)&&(0,F.jsxs)(n_,{$active:o===`recycle`,onClick:e=>m(`recycle`,Wt(e)),title:_(`Recycle Bin`),type:`button`,children:[(0,F.jsx)(gi,{}),(0,F.jsx)(i_,{children:_(`Recycle Bin`)})]}),!u.includes(`gallery`)&&(0,F.jsxs)(n_,{$active:o===`gallery`,onClick:e=>m(`gallery`,Wt(e)),title:_(`Gallery`),type:`button`,children:[(0,F.jsx)(Si,{}),(0,F.jsx)(i_,{children:_(`Gallery`)})]})]}),h.map(e=>(0,F.jsxs)($g,{children:[(0,F.jsxs)(n_,{as:`div`,$active:!1,children:[(0,F.jsx)(r_,{children:(0,F.jsx)(Ss,{panel:e,size:16})}),(0,F.jsx)(i_,{children:_(e.title)})]}),(0,F.jsx)(e_,{children:(0,F.jsxs)(t_,{children:[e.kind===`quick`&&S(e).map(e=>(0,F.jsxs)(n_,{$active:ee&&t(a,e.path),onClick:t=>p(e.path,Wt(t)),title:e.path,type:`button`,children:[(0,F.jsx)(Cs,{place:e}),(0,F.jsx)(i_,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let n=Fn(x,e.path);return(0,F.jsxs)(n_,{$active:ee&&t(a,e.path),onClick:t=>e.isDirectory?p(e.path,Wt(t)):void Se(e.path),title:e.path,type:`button`,children:[n&&x.useIcons?(0,F.jsx)(Cs,{place:n}):(0,F.jsx)(Vs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,F.jsx)(i_,{children:n?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,F.jsx)(qg,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,F.jsxs)(n_,{$active:ee&&t(a,e.name),onClick:t=>p(e.name,Wt(t)),title:e.name,type:`button`,children:[(0,F.jsx)(ni,{}),(0,F.jsxs)(i_,{children:[d(e),(0,F.jsxs)(a_,{children:[f(e.freeSpace),` free`]}),(0,F.jsx)(o_,{children:(0,F.jsx)(s_,{$used:n,$tone:T(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,F.jsx)(Jg,{onNavigate:p,path:e.path||s})]})})]},e.id)),!u.includes(`settings`)&&(0,F.jsx)(Qg,{children:(0,F.jsxs)(n_,{$active:o===`settings`,onClick:e=>m(`settings`,Wt(e)),title:_(`Settings`),type:`button`,children:[(0,F.jsx)(ui,{}),(0,F.jsx)(i_,{children:_(`Settings`)})]})})]})}var Gg=10,Kg=40;function qg({historyVersion:e=0,onNavigate:t}){let n=L(),[r,i]=(0,D.useState)(null),a=Pn();return(0,D.useEffect)(()=>{Ve().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Fn(a,e.path);return(0,F.jsxs)(n_,{$active:!1,onClick:n=>t(e.path,Wt(n)),title:o(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,F.jsx)(Cs,{place:r}):(0,F.jsx)(Vs,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,F.jsx)(i_,{children:r?.name||e.name})]},e.path)})}function Jg({path:e,onNavigate:n}){let[r,i]=(0,D.useState)(null);(0,D.useEffect)(()=>{e&&(i(null),Ce(e,!1).then(i,()=>i(null)))},[e]),(0,D.useEffect)(()=>{if(e&&P.available)return P.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Ce(e,!1).then(i,()=>void 0)})},[e]);let a=r?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,Gg),s=a.filter(e=>!e.isDirectory).slice(0,Kg);return(0,F.jsxs)(F.Fragment,{children:[o.map(e=>(0,F.jsx)(Yg,{entry:e,onNavigate:n},e.fullPath)),s.map(e=>(0,F.jsx)(Yg,{entry:e,onNavigate:n},e.fullPath))]})}function Yg({entry:e,onNavigate:t}){let n=Pn(),r=Fn(n,e.fullPath);return(0,F.jsxs)(n_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Wt(n)):void Se(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,F.jsx)(Cs,{place:r}):(0,F.jsx)(Vs,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,F.jsx)(i_,{children:r?.name||e.name})]})}var Xg=_.aside`
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

    &:not(:hover) ${()=>a_},
    &:not(:hover) ${()=>o_} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Zg=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Qg=_(Zg)`
    margin-top: auto;
`,$g=_.div`
    display: flex;
    flex-direction: column;
`,e_=_.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Xg}:hover ${$g}:hover > & {
        grid-template-rows: 1fr;
    }
`,t_=_.div`
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
`,n_=_.button`
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
`,r_=_.span`
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
`,i_=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,a_=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,o_=_.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,s_=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,c_=_.span`
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
`;function l_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=L(),a=(0,D.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,D.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,F.jsxs)(d_,{ref:a,children:[(0,F.jsxs)(f_,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,F.jsx)(hi,{size:13}),c>0&&(0,F.jsx)(c_,{children:c>9?`9+`:c})]}),n&&(0,F.jsxs)(p_,{children:[(0,F.jsxs)(m_,{children:[(0,F.jsx)(h_,{children:i(`Status center`)}),(0,F.jsxs)(g_,{children:[(0,F.jsx)(__,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,F.jsx)(v_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,F.jsx)(vi,{size:10})})]})]}),e.length===0?(0,F.jsx)(b_,{children:i(`No operations yet.`)}):(0,F.jsx)(y_,{children:e.map(e=>(0,F.jsx)(u_,{task:e},e.id))})]})]})}function u_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,F.jsxs)(x_,{children:[(0,F.jsxs)(S_,{children:[(0,F.jsx)(C_,{$state:e.state,children:e.state===`done`?(0,F.jsx)(_i,{size:10}):e.state===`failed`?(0,F.jsx)(vi,{size:10}):(0,F.jsx)(w_,{})}),(0,F.jsx)(T_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,F.jsxs)(E_,{children:[f(e.bytesDone),` / `,f(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,F.jsxs)(E_,{children:[e.done,` / `,e.total]})]}),i&&(0,F.jsx)(D_,{children:(0,F.jsx)(O_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,F.jsx)(k_,{children:e.error})]})}var d_=_.div`
    position: relative;
    display: flex;
`,f_=_.button`
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
`,p_=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Aa}
    ${Ua}
`,m_=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,h_=_.span`
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
`,g_=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,__=_.button`
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
`,v_=_.button`
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
`,y_=_.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,b_=_.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,x_=_.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;
    ${Wa}

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,S_=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,C_=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,w_=_.span`
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
`,T_=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,E_=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,D_=_.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,O_=_.div`
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
`,k_=_.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function A_(){return P.available?(await P.request(`fs.history.list`)).entries:[]}async function j_(e){return P.available?(await P.request(`fs.history.undoTo`,{id:e})).ok:!1}function M_(){let e=L(),[t,n]=(0,D.useState)(!1),[r,i]=(0,D.useState)([]),[a,o]=(0,D.useState)(!1),s=(0,D.useRef)(null),c=()=>void A_().then(i,()=>i([]));(0,D.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await j_(e),c()}finally{o(!1)}};return(0,F.jsxs)(F_,{ref:s,children:[(0,F.jsx)(I_,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,F.jsx)(mi,{size:14})}),t&&(0,F.jsxs)(L_,{children:[(0,F.jsxs)(R_,{children:[(0,F.jsx)(z_,{children:e(`History`)}),(0,F.jsx)(B_,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,F.jsx)(vi,{size:10})})]}),r.length===0?(0,F.jsx)(Y_,{children:e(`No operations yet.`)}):(0,F.jsx)(V_,{children:r.map(t=>(0,F.jsxs)(H_,{children:[(0,F.jsxs)(U_,{children:[(0,F.jsxs)(W_,{children:[(0,F.jsx)(P_,{label:t.label}),N_(e,t.label)]}),(0,F.jsx)(G_,{children:S(t.at)})]}),t.paths.length>0&&(0,F.jsxs)(K_,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,F.jsx)(q_,{children:(0,F.jsx)(J_,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function N_(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);if(t===`Paste text`)return e(`Paste text`);if(t===`Paste image`)return e(`Paste image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function P_({label:e}){return e.startsWith(`Delete`)?(0,F.jsx)(gi,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,F.jsx)(ta,{size:13}):e.startsWith(`Rename`)?(0,F.jsx)(Fi,{size:13}):e.startsWith(`Compress`)?(0,F.jsx)(Ti,{size:13}):e.startsWith(`New`)?(0,F.jsx)(oi,{size:13}):(0,F.jsx)(ci,{size:13})}var F_=_.div`
    position: relative;
    display: flex;
`,I_=_.button`
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
`,L_=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Aa}
    ${Ua}
`,R_=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,z_=_.span`
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
`,B_=_.button`
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
`,V_=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,H_=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,U_=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,W_=_.span`
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
`,G_=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,K_=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,q_=_.div`
    display: flex;
    justify-content: flex-end;
`,J_=_.button`
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
`,Y_=_.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function X_({currentFolder:e}){let n=L(),[r,i]=(0,D.useState)(!1),[a,o]=(0,D.useState)(null),[s,c]=(0,D.useState)(!1),l=(0,D.useRef)(null);(0,D.useEffect)(()=>{if(!r)return;let e=()=>void pd().then(o,()=>void 0);e();let t=window.setInterval(e,2500),n=e=>{l.current?.contains(e.target)||i(!1)};return window.addEventListener(`pointerdown`,n),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,n)}},[r]),(0,D.useEffect)(()=>{let e=()=>void pd().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(n=>t(n.path,e))??!1;return(0,F.jsxs)(Z_,{ref:l,children:[(0,F.jsxs)(Q_,{$active:r,onClick:()=>i(e=>!e),title:n(`Share folders`),type:`button`,children:[(0,F.jsx)(Yi,{size:15}),a&&a.shares.length>0&&(0,F.jsx)(c_,{children:a.shares.length>9?`9+`:a.shares.length})]}),r&&(0,F.jsxs)($_,{children:[(0,F.jsxs)(ev,{children:[(0,F.jsx)(tv,{children:n(`Share`)}),(0,F.jsx)(nv,{onClick:()=>i(!1),title:n(`Close`),type:`button`,children:(0,F.jsx)(vi,{size:10})})]}),(0,F.jsxs)(rv,{children:[(0,F.jsxs)(iv,{children:[(0,F.jsx)(yi,{size:15}),(0,F.jsxs)(`span`,{children:[(0,F.jsx)(`strong`,{children:a?.deviceName||n(`This device`)}),(0,F.jsx)(av,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,F.jsx)(ov,{children:n(`No folders are shared yet.`)}),a?.shares.map(e=>(0,F.jsxs)(sv,{children:[(0,F.jsxs)(cv,{children:[(0,F.jsx)(lv,{title:e.path,children:e.name}),(0,F.jsx)(dv,{disabled:s,onClick:()=>void u(()=>hd(e.id)),title:n(`Stop sharing`),type:`button`,children:(0,F.jsx)(vi,{size:10})})]}),(0,F.jsx)(uv,{title:e.path,children:e.path}),(0,F.jsxs)(fv,{children:[(0,F.jsxs)(pv,{$active:e.mode===`client`,onClick:()=>void u(()=>gd(e.id,`client`)),title:n(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,F.jsx)(yi,{size:11}),n(`App`)]}),(0,F.jsxs)(pv,{$active:e.mode===`web`,onClick:()=>void u(()=>gd(e.id,`web`)),title:n(`Any device with a browser can open this folder.`),type:`button`,children:[(0,F.jsx)(Zi,{size:11}),n(`Web`)]})]})]},e.id)),(0,F.jsxs)(mv,{disabled:s||e.length===0||d,onClick:()=>void u(()=>md(e,`client`)),title:d?n(`This folder is already shared.`):e,type:`button`,children:[(0,F.jsx)(oi,{size:12}),n(`Share this folder`)]}),a?.webRunning&&(0,F.jsxs)(hv,{children:[(0,F.jsxs)(gv,{children:[(0,F.jsx)(Zi,{size:12}),n(`Browser access`)]}),a.urls.map(e=>(0,F.jsx)(_v,{onClick:()=>void lt(e),type:`button`,children:e},e)),(0,F.jsx)(av,{children:n(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var Z_=_.div`
    position: relative;
    display: flex;
`,Q_=_.button`
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
`,$_=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Aa}
    ${Ua}
`,ev=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,tv=_.span`
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
`,nv=_.button`
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
`,rv=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,iv=_.div`
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
`,av=_.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,ov=_.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,sv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,cv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,lv=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,uv=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dv=_.button`
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
`,fv=_.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,pv=_.button`
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
`,mv=_.button`
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
`,hv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,gv=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,_v=_.button`
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
`;function vv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=L(),[s,c]=(0,D.useState)(!1),l=(0,D.useRef)(null);(0,D.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,D.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Oc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,F.jsxs)(yv,{ref:l,children:[(0,F.jsx)(bv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,F.jsx)(pi,{size:14}):(0,F.jsx)(fi,{size:14})}),s&&(0,F.jsxs)(xv,{children:[(0,F.jsx)(Sv,{children:o(`View`)}),(0,F.jsxs)(Cv,{children:[(0,F.jsxs)(wv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,F.jsx)(fi,{size:12}),` `,o(`List`)]}),(0,F.jsxs)(wv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,F.jsx)(pi,{size:12}),` `,o(`Grid`)]})]}),(0,F.jsx)(Sv,{children:o(`List icon size`)}),(0,F.jsxs)(Tv,{children:[(0,F.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,F.jsxs)(Ev,{children:[e.iconSize,`px`]})]}),(0,F.jsx)(Sv,{children:o(`Grid size`)}),(0,F.jsxs)(Tv,{children:[(0,F.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,F.jsxs)(Ev,{children:[e.gridSize,`px`]})]}),(0,F.jsxs)(Sv,{children:[o(`Columns`),(0,F.jsx)(fm,{})]}),Oc.map(e=>(0,F.jsxs)(Dv,{children:[(0,F.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,F.jsxs)(Dv,{children:[(0,F.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,F.jsxs)(Sv,{children:[o(`Preview panel`),(0,F.jsx)(fm,{})]}),(0,F.jsxs)(Dv,{children:[(0,F.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,F.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var yv=_.div`
    position: relative;
    display: flex;
    height: 100%;
`,bv=_.button`
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
`,xv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Aa}
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
`,Sv=_.div`
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
`,Cv=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,wv=_.button`
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
`,Tv=_.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Ev=_.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Dv=_.label`
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
`,Ov=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),kv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Av=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,F.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),jv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,F.jsx)(`path`,{d:`M2 5h6`})}),Mv=e=>(0,F.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,F.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Nv=e=>(0,F.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,F.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,F.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Pv({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:ee,onToggleDetails:C,shortcuts:te,currentFolder:ne}){let w=L(),T=R(),re=me(),[E,ie]=(0,D.useState)({left:!1,right:!1}),[O,ae]=(0,D.useState)(null),[k,oe]=(0,D.useState)(null),A=(0,D.useRef)(null),se=(0,D.useRef)(null),j=(0,D.useRef)(null),M=(0,D.useCallback)(()=>{let e=se.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ie(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,D.useEffect)(()=>{M();let e=se.current;if(!e)return;let t=new ResizeObserver(M);return t.observe(e),()=>t.disconnect()},[M,e.length]),(0,D.useEffect)(()=>()=>{A.current&&window.clearTimeout(A.current.timer)},[]),(0,D.useEffect)(()=>{j.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ce=e=>se.current?.scrollBy({left:e,behavior:`smooth`}),N=()=>{A.current&&window.clearTimeout(A.current.timer),A.current=null,oe(null)};return(0,F.jsxs)(Rv,{children:[(0,F.jsx)(zv,{children:(0,F.jsx)(yi,{size:19})}),(0,F.jsxs)(Bv,{children:[E.left&&(0,F.jsx)(Hv,{onClick:()=>ce(-180),title:w(`Scroll tabs left`),type:`button`,children:(0,F.jsx)(Ov,{})}),(0,F.jsx)(Vv,{onScroll:M,onWheel:e=>{let t=se.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:se,children:e.map(e=>(0,F.jsxs)(Uv,{$active:e.id===t,$dragging:O===e.id,$dropTarget:k===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Ws(t.dataTransfer)||!Fv(e)||(t.preventDefault(),A.current?.id===e.id))return;N(),oe(e.id);let r=window.setTimeout(()=>{n(e.id),A.current=null},500);A.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(A.current?.id===e.id||k===e.id)&&N()},onDragEnd:()=>{ae(null),N()},onDragOver:t=>{(O||Ws(t.dataTransfer)&&Fv(e))&&(t.preventDefault(),Ws(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>ae(e.id),onDrop:t=>{if(t.preventDefault(),O)a(O,e.id);else if(Fv(e)&&Ws(t.dataTransfer)){let{paths:r,move:i}=Gs(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}ae(null),N()},onClick:()=>n(e.id),ref:e.id===t?j:void 0,title:e.path||e.title,type:`button`,children:[(0,F.jsx)(Iv,{tab:e}),(0,F.jsx)(Wv,{children:e.title}),e.partner&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Gv,{children:`|`}),(0,F.jsx)(Lv,{place:e.partner.place}),(0,F.jsx)(Wv,{children:e.partner.title})]}),(0,F.jsx)(Kv,{"data-shortcut":Kt(te.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:w(`Close tab`),children:(0,F.jsx)(Av,{})})]},e.id))}),E.right&&(0,F.jsx)(Hv,{onClick:()=>ce(180),title:w(`Scroll tabs right`),type:`button`,children:(0,F.jsx)(kv,{})}),(0,F.jsx)(qv,{"data-shortcut":Kt(te.newTab),onClick:i,title:w(`New tab`),type:`button`,children:(0,F.jsx)(oi,{size:13})})]}),(0,F.jsx)(Jv,{...re}),(0,F.jsxs)(Yv,{children:[(0,F.jsx)(Zv,{$active:y,"data-shortcut":Kt(te.splitView),disabled:!b,onClick:x,title:w(y?`Close split view`:`Split view`),type:`button`,children:(0,F.jsx)(oa,{size:15})}),(0,F.jsx)(Zv,{$active:S,disabled:!ee,onClick:C,title:w(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,F.jsx)(sa,{size:15})}),(0,F.jsxs)(Xv,{$active:_,onClick:v,title:w(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,F.jsx)(Xi,{size:14}),g>0&&(0,F.jsx)(c_,{children:g>9?`9+`:g})]}),(0,F.jsx)(M_,{}),(0,F.jsx)(X_,{currentFolder:ne}),(0,F.jsx)(l_,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,F.jsx)(vv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,F.jsx)(Qv,{onClick:T.minimize,title:w(`Minimize`),type:`button`,children:(0,F.jsx)(jv,{})}),(0,F.jsx)(Qv,{onClick:T.toggleMaximize,title:T.maximized?w(`Restore`):w(`Maximize`),type:`button`,children:T.maximized?(0,F.jsx)(Nv,{}):(0,F.jsx)(Mv,{})}),(0,F.jsx)($v,{onClick:T.close,title:w(`Close`),type:`button`,children:(0,F.jsx)(Av,{})})]})]})}function Fv(e){return e.kind===`files`&&(!p(e.path)||E(e.path))}function Iv({tab:e}){switch(e.kind){case`home`:return(0,F.jsx)($r,{size:13});case`settings`:return(0,F.jsx)(ui,{size:13});case`recycle`:return(0,F.jsx)(gi,{size:13});default:return e.archive?(0,F.jsx)(Ti,{size:13}):(0,F.jsx)(Lv,{place:e.place})}}function Lv({place:e}){return e?(0,F.jsx)(Cs,{place:e,size:13}):(0,F.jsx)(ei,{size:13})}var Rv=_.header`
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
`,zv=_.span`
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
`,Bv=_.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Vv=_.div`
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
`,Hv=_.button`
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
`,Uv=_.button`
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
`,Wv=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Gv=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Kv=_.span`
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
`,qv=_.button`
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
`,Jv=_.div`
    flex: 1;
    min-width: 28px;
`,Yv=_.div`
    display: flex;
    flex-shrink: 0;
`,Xv=_.button`
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
`,Zv=_.button`
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
`,Qv=_.button`
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
`,$v=_(Qv)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function ey(){let[e,t]=(0,D.useState)(null),n=(0,D.useRef)(null),r=(0,D.useRef)(void 0);return(0,D.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,ka.createPortal)((0,F.jsx)(ty,{tooltip:e}),document.body):null}function ty({tooltip:e}){let t=(0,D.useRef)(null),[n,r]=(0,D.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,D.useState)(()=>e.bottom+6);return(0,D.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,F.jsxs)(ny,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,F.jsx)(ry,{children:e.text}),e.shortcut&&(0,F.jsx)(iy,{children:e.shortcut})]})}var ny=_.div`
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
    ${Wa}
`,ry=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,iy=_.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,ay={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function oy({deviceName:e,code:t,onAccept:n,onReject:r}){let i=L(),a=(0,D.useRef)(null);return(0,D.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,ka.createPortal)((0,F.jsx)(sy,{children:(0,F.jsxs)(cy,{role:`alertdialog`,"aria-modal":`true`,children:[(0,F.jsxs)(ly,{children:[(0,F.jsx)(Yi,{size:15}),i(`Pair for sharing`)]}),(0,F.jsx)(uy,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,F.jsx)(dy,{children:t}),(0,F.jsx)(fy,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,F.jsxs)(py,{children:[(0,F.jsx)(my,{onClick:r,type:`button`,children:i(`Reject`)}),(0,F.jsx)(hy,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var sy=_.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Wa}
`,cy=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${za}
`,ly=_.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,uy=_.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,dy=_.div`
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
`,fy=_.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,py=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,my=_.button`
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
`,hy=_(my)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,gy=0,_y=new Set;function vy(e){_y.add(e),P.send({type:`app.navigate.done`,payload:{path:e}})}var yy=20,by=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function xy(e){return e.history[e.index]??sp(`home`)}function Sy(e){return cp(xy(e))??`files`}function Cy(e){let t=xy(e);return cp(t)?``:e.listing?.path||t}function wy(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Sy(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Ty(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Ey(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||ye.iconSize,gridSize:e.view?.gridSize||t.gridSize||ye.gridSize,sort:e.view?.sort??ye.sort,sortDescending:e.view?.sortDescending??ye.sortDescending,columns:t.columns??be.columns??[]}}function Dy(e=sp(`home`)){return gy+=1,{id:`tab-${gy}`,listing:null,loading:!cp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Oy(e){return e instanceof Error?e.message:String(e)}function ky(e){let t=Cd(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return wd(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Ay(e){let t=v(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function jy(e){return p(e)?Zt(e):void 0}function My(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:f(n)})}function Ny(){let e=L(),[n,r]=(0,D.useState)(()=>[Dy()]),[i,a]=(0,D.useState)(()=>n[0].id),[o,s]=(0,D.useState)(null),[d,f]=(0,D.useState)(()=>{let e=Ln(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[m,h]=(0,D.useState)([]),[g,_]=(0,D.useState)([]),[y,b]=(0,D.useState)(null),[x,S]=(0,D.useState)(null),[te,ne]=(0,D.useState)(null),w=he(),[T,re]=(0,D.useState)(_n),[ie,O]=(0,D.useState)(0),[ae,k]=(0,D.useState)(0),[oe,A]=(0,D.useState)(_n),[se,j]=(0,D.useState)(0),[M,ce]=(0,D.useState)(0),[N,le]=(0,D.useState)(0),[ue,de]=(0,D.useState)(0),I=(0,D.useRef)(ue);I.current=ue;let[fe,pe]=(0,D.useState)([]),[R,me]=(0,D.useState)(10),[z,_e]=(0,D.useState)(null),B=(0,D.useMemo)(()=>(z?.favorites??[]).map(e=>l(e.path)),[z?.favorites]),[xe,Ee]=(0,D.useState)(0),[H,Me]=(0,D.useState)(Vt),[Ne,Pe]=(0,D.useState)(0),[Fe,Ie]=(0,D.useState)(0),[Le,Re]=(0,D.useState)(0),[ze,Ve]=(0,D.useState)(!0),[Ue,We]=(0,D.useState)(()=>{let e=Ln(`yafm.preview.width`,320);return e>=220?e:320}),[Ge,qe]=(0,D.useState)(null),[Je,Xe]=(0,D.useState)(null),[Ze,Qe]=(0,D.useState)(`primary`),[$e,et]=(0,D.useState)(null),[tt,it]=(0,D.useState)(null),[at,ct]=(0,D.useState)(null),[lt,ut]=(0,D.useState)(null),[dt,ft]=(0,D.useState)({primary:0,secondary:0}),[pt,mt]=(0,D.useState)({primary:null,secondary:null}),[ht,gt]=(0,D.useState)(null),[vt,Ct]=(0,D.useState)([]),[Tt,Et]=(0,D.useState)(!1),Dt=(0,D.useRef)([]),kt=(0,D.useRef)([]),[At,jt]=(0,D.useState)([]),[Mt,Nt]=(0,D.useState)(!1),[W,It]=(0,D.useState)(!1),[Lt,Ht]=(0,D.useState)([]),[qt,Yt]=(0,D.useState)(null),Xt=(0,D.useRef)(0),[G,tn]=(0,D.useState)(()=>{let e=zn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Ty({x:e.x,y:e.y}):Ty({x:Math.max(20,window.innerWidth-340),y:110})}),nn=(0,D.useCallback)(()=>{tn(e=>Ty(e)),It(!0)},[]),K=n.find(e=>e.id===i)??n[0],q=Sy(K),on=xy(K),sn=Cy(K),cn=q===`files`?K.listing?.parent??ky(sn):null,ln=K.splitWith?n.find(e=>e.id===K.splitWith):void 0,un=q===`files`&&ln!==void 0,dn=ln?Cy(ln):``,fn=ln?ln.listing?.parent??ky(dn):null,pn=un&&ln&&Ze===`secondary`?ln:K,mn=z?.defaultView??be,hn=Ey(pn,mn);(0,D.useEffect)(()=>{ee(z?.accentColor,z?.secondaryColor)},[z?.accentColor,z?.secondaryColor]),(0,D.useEffect)(()=>{gm(z?.fonts)},[z?.fonts]),(0,D.useEffect)(()=>{C(z?.timeFormat,z?.timeFormatPattern)},[z?.timeFormat,z?.timeFormatPattern]),(0,D.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!z?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[z?.backgroundSource]),(0,D.useEffect)(()=>(ve(e=>new Promise(t=>{Yt({id:++Xt.current,prompt:e,resolve:t})})),()=>ve(null)),[]),(0,D.useEffect)(()=>{Qe(`primary`)},[i]),(0,D.useEffect)(()=>{A(_n),ce(0),le(0)},[q]),(0,D.useEffect)(()=>{ce(0)},[oe.query,oe.matchCase,oe.regex]),(0,D.useEffect)(()=>{ce(e=>N===0?0:Math.min(e,N-1))},[N]);let gn=hn.columns.includes(`linkCount`),vn=(0,D.useMemo)(()=>{let e={},t=bs(z),n={};for(let[e,t]of Object.entries(z?.placeNames??{}))n[l(e)]=t;for(let t of m)e[l(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=l(t),i=m.find(e=>l(e.path)===r);e[r]={name:n[r]??i?.name??(v(t)||t),path:t,kind:`folder`,icon:i?.icon??z?.placeIcons?.[t]??null}}return e},[m,z]),yn=(0,D.useMemo)(()=>({places:vn,useIcons:z?.systemIcons===!1}),[vn,z?.systemIcons]),bn=z?.defaultView?.showImages??!0,xn=z?.defaultView?.imageStripHeight??be.imageStripHeight,Sn=q===`home`?(0,F.jsx)(Pi,{size:13}):q===`settings`?(0,F.jsx)(ui,{size:13}):q===`recycle`?(0,F.jsx)(gi,{size:13}):q===`gallery`?(0,F.jsx)(Si,{size:13}):void 0,Cn=T.open&&T.query.length>0,wn=(0,D.useMemo)(()=>Cn&&pn.listing?pn.listing.entries.filter(e=>En(e.isDirectory?In(yn,e.fullPath,e.name):e.name,T)).map(e=>e.fullPath):[],[Cn,T,pn.listing,yn]);(0,D.useEffect)(()=>{O(0)},[T.query,T.matchCase,T.regex,pn.listing?.path]);let Tn=wn.length===0?-1:Math.min(ie,wn.length-1),Dn=(0,D.useCallback)(()=>{re(e=>({...e,open:!1,query:``})),O(0)},[]),On=(0,D.useCallback)(()=>{re(e=>({...e,open:!0})),k(e=>e+1)},[]),kn=(0,D.useCallback)(()=>{A(e=>({...e,open:!0})),j(e=>e+1)},[]),An=(0,D.useCallback)(()=>{A(_n),ce(0),le(0)},[]),jn=(0,D.useCallback)(e=>{ce(t=>N===0?0:(Math.min(t,N-1)+e+N)%N)},[N]),Mn=(0,D.useCallback)(e=>{re(t=>({...t,open:!0,query:t.open?t.query+e:e})),k(e=>e+1)},[]),Pn=(0,D.useCallback)(e=>{O(t=>wn.length===0?0:(Math.min(t,wn.length-1)+e+wn.length)%wn.length)},[wn.length]),Vn=(0,D.useRef)({tabs:n,activeId:i,activePane:Ze});Vn.current={tabs:n,activeId:i,activePane:Ze};let Hn=(0,D.useRef)(z);Hn.current=z;let Un=(0,D.useRef)(!1),Wn=(0,D.useRef)([]),Gn=(0,D.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Kn=(0,D.useRef)(new Map),qn=(0,D.useCallback)(e=>{let t=(Kn.current.get(e)??0)+1;return Kn.current.set(e,t),()=>Kn.current.get(e)===t},[]),Jn=(0,D.useCallback)((e,t)=>{P.available&&t&&e===wy(Vn.current)&&P.send({type:`fs.focus`,payload:{path:t}})},[]),Yn=(0,D.useCallback)(async(e,t,n)=>{if(!(t&&Sd(t)))try{let r=await ke(t,gn);if(!n()||!r.listing)return;Gn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[gn,Gn]),Xn=(0,D.useCallback)(async(e,n,r=!1)=>{let i=qn(e);Dn(),Jn(e,n);let a=!r||!Vn.current.tabs.find(t=>t.id===e)?.listing,o=!r&&n!==void 0;Gn(e,e=>{if(!o)return{listing:r?e.listing:null,loading:!0,error:null,fresh:r&&e.fresh};let i=e.history[e.index],a=i!==void 0&&t(i,n);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),n],index:a?e.index:e.index+1}});try{a&&Yn(e,n,i);let t=n&&Sd(n)?await Td(n):await Ce(n,!0,gn,I.current,n?jy(n):void 0);if(!i())return;Gn(e,e=>({listing:t,view:t.view??null,loading:!1,fresh:!1,history:o?e.history.map((n,r)=>r===e.index?t.path:n):e.history,index:e.index})),!r&&!Sd(t.path)&&He(t.path).then(()=>Ee(e=>e+1))}catch(t){if(!i())return;let a=Vn.current.tabs.find(t=>t.id===e),o=n&&n.length>0?n:a?Cy(a):``,s=ky(o),c=Oy(t);if(o&&en(c)){let t=u(o),a=await ya(t,!!Zt(t));if(a){Qt(t,a),i()&&Xn(e,n,r);return}}Gn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...r?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[qn,gn,Gn,Jn,Dn,Yn]),Zn=(0,D.useCallback)((e,t)=>{let n=lp(t);n&&(cp(n)?(Dn(),qn(e),Gn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Xn(e,n))},[qn,Xn,Gn,Dn]),Qn=(0,D.useCallback)(async(e,t,n)=>{if(Dn(),cp(t)){qn(e),Gn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=qn(e);Jn(e,t),Gn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Sd(t)||Yn(e,t,r);let n=Sd(t)?await Td(t):await Ce(t,!0,gn,I.current,jy(t));if(!r())return;Gn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(en(Oy(i))){let i=u(t),a=await ya(i,!!Zt(i));if(a){Qt(i,a),r()&&Qn(e,t,n);return}}Gn(e,()=>({listing:{path:t,parent:ky(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Oy(i)}))}},[qn,gn,Gn,Jn,Dn,Yn]),$n=(0,D.useCallback)((e,t=!0)=>{let n=Dy(e??sp(`home`));return r(e=>[...e,n]),t&&a(n.id),e&&!cp(e)&&Xn(n.id,e),n.id},[Xn]),er=(0,D.useCallback)(e=>{for(let n of Vn.current.tabs)Sy(n)===`files`&&t(Cy(n),e)&&Xn(n.id,e,!0)},[Xn]),tr=(0,D.useCallback)((e,n)=>{let r=v(n);for(let i of Vn.current.tabs)i.listing?.entries.some(n=>t(n.fullPath,e))&&Gn(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>t(i.fullPath,e)?{...i,name:r,fullPath:n}:i);return{listing:{...a,entries:o}}})},[Gn]),nr=(0,D.useRef)([]);(0,D.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&p(n)&&e.add(l(u(n)))}let t=nr.current.filter(t=>!e.has(t));nr.current=[...e],t.length>0&&V(t)},[n]);let rr=(0,D.useCallback)((e,t=!1)=>{t?$n(sp(e)):Zn(Vn.current.activeId,sp(e))},[$n,Zn]),ir=(0,D.useCallback)(e=>{let{tabs:t,activeId:n}=Vn.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(kt.current.push(xy(i)),kt.current.length>yy&&kt.current.shift()),o.length===0){let e=Dy();r([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);r(o),n===e&&a(o[Math.min(s,o.length-1)].id)},[]),ar=(0,D.useCallback)(()=>{let e=kt.current.pop();if(!e)return;let t={...Dy(e),fresh:!1};r(e=>[...e,t]),a(t.id),Sy(t)===`files`&&Xn(t.id,Cy(t))},[Xn]),or=(0,D.useCallback)((e,t=!1)=>{t?$n(e):Zn(wy(Vn.current),e??sp(`home`))},[Zn,$n]),sr=(0,D.useCallback)(e=>{let{tabs:t,activeId:n}=Vn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),cr=(0,D.useCallback)(()=>{let{tabs:e,activeId:t}=Vn.current,n=e.find(e=>e.id===t);if(!n||Sy(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),Gn(t,()=>({splitWith:void 0})),Qe(`primary`);return}let a=Cy(n),o={...Dy(a),hidden:!0};r(e=>[...e,o]),Gn(t,()=>({splitWith:o.id})),Xn(o.id,a),Qe(`primary`)},[Xn,Gn]),lr=(0,D.useCallback)(e=>{We(e),Rn(`yafm.preview.width`,e)},[]),ur=un?Ze===`secondary`?Je??Ge:Ge??Je:Ge,dr=(0,D.useRef)(null),fr=e=>{e.preventDefault();let t=dr.current?.getBoundingClientRect();if(!t)return;let n=ze?Ue:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);f(n),Rn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},pr=(e,t,n)=>{t&&et({x:e.clientX,y:e.clientY,directory:t,refresh:n})},mr=(0,D.useCallback)((e,t)=>{ft(n=>n[e]===t?n:{...n,[e]:t})},[]),hr=(0,D.useCallback)(e=>mr(`primary`,e),[mr]),gr=(0,D.useCallback)(e=>mr(`secondary`,e),[mr]),_r=(e,t)=>{dt[e]!==0&&mt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},vr=async(e,t=!1)=>{let n=$e;if(et(null),!n)return;let r=e===null?await wt(n.directory,t):await Ot(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Dn(),gt(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},yr=(0,D.useCallback)(()=>{let{tabs:e}=Vn.current,t=e.find(e=>e.id===wy(Vn.current));t&&t.index>0&&Qn(t.id,t.history[t.index-1],t.index-1)},[Qn]),br=(0,D.useCallback)(()=>{let{tabs:e}=Vn.current,t=e.find(e=>e.id===wy(Vn.current));t&&t.index<t.history.length-1&&Qn(t.id,t.history[t.index+1],t.index+1)},[Qn]),xr=(0,D.useCallback)(()=>{let{tabs:e}=Vn.current,t=e.find(e=>e.id===wy(Vn.current));t&&Sy(t)===`files`&&t.listing?.parent&&or(t.listing.parent)},[or]),Sr=(0,D.useRef)(null),Cr=(0,D.useCallback)(()=>{for(let e of Vn.current.tabs)e.listing&&Xn(e.id,e.listing.path,!0)},[Xn]),wr=(0,D.useCallback)(e=>{e.length!==0&&(Ht(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),nn())},[nn]),Tr=(0,D.useCallback)(async e=>{let t=await U(e);t.length!==0&&wr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[wr]),Er=(0,D.useCallback)(e=>{let t=new Set(e);Ht(e=>e.filter(e=>!t.has(e.path)))},[]),Dr=(0,D.useCallback)(async e=>{let t=Hn.current;if(!t)return;let n=await U(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>l(e.path))),i=n.filter(e=>!r.has(l(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};_e(a),await nt(a),Pe(e=>e+1)},[]),Or=(0,D.useCallback)(async e=>{let t=Hn.current;if(!t)return;let n=new Set(e.map(l)),r=(t.favorites??[]).filter(e=>!n.has(l(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};_e(i),await nt(i),Pe(e=>e+1)},[]),kr=(0,D.useCallback)(()=>Ht([]),[]),Ar=(0,D.useRef)(-1),jr=(0,D.useCallback)(e=>{jt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Nt(e.move),e.entries.length>0&&nn()},[nn]),Mr=(0,D.useCallback)(async()=>{if(P.available)try{let e=await yt();Ar.current=e.sequence,jr(e)}catch{}},[jr]),Nr=(0,D.useCallback)(async e=>{e.length!==0&&await _t(e,!1)&&await Mr()},[Mr]),Pr=(0,D.useRef)(Lt);Pr.current=Lt,(0,D.useEffect)(()=>{let e=e=>{Ws(e.dataTransfer)&&nn()},t=e=>{Ws(e.dataTransfer)&&nn()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[nn]),(0,D.useEffect)(()=>{let e=()=>tn(e=>Ty(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Fr=(0,D.useCallback)(async()=>{let e=Pr.current;if(e.length>0){let t=await U(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Ht(e=>e.filter(e=>n.has(e.path)))}await Mr()},[Mr]),Ir=(0,D.useCallback)(()=>{Fr(),Re(e=>e+1),Cr()},[Fr,Cr]),Lr=(0,D.useCallback)(e=>{let t=Ty(e);tn(t),Bn(`yafm.tray.position`,t)},[]),Rr=(0,D.useCallback)(()=>{W?It(!1):nn()},[nn,W]),zr=(0,D.useCallback)(async(t,n,r)=>{let i=await bt(t,n,r);i.ok?(r&&Er(t),Re(e=>e+1),Cr(),Mr()):_a(i.error??e(`The files could not be transferred.`))},[Cr,Mr,Er]);(0,D.useEffect)(()=>{if(P.available)return zt().then(e=>{Dt.current=e,Ct(e)},()=>void 0),P.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Dt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Dt.current=n,Ct(n),r&&Et(!0)})},[]);let Br=(0,D.useCallback)(()=>{Bt().then(()=>zt().then(e=>{Dt.current=e,Ct(e)},()=>void 0))},[]);(0,D.useEffect)(()=>{if(!P.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await yt();if(!e||t.sequence===Ar.current)return;Ar.current=t.sequence,jr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[jr]);let Vr=(0,D.useCallback)(async e=>{let t=e?await Pt():await Ft();t.ok?(Re(e=>e+1),Cr()):t.error&&!t.error.startsWith(`Nothing to`)&&_a(t.error)},[Cr]),Hr=(0,D.useRef)(gn);(0,D.useEffect)(()=>{Hr.current!==gn&&(Hr.current=gn,Cr())},[gn,Cr]);let Ur=(0,D.useCallback)((e,t)=>{let{tabs:n}=Vn.current,r=n.find(t=>t.id===e);if(!r||Sy(r)!==`files`)return;let i=Cy(r),a=Hn.current?.defaultView??be,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||ye.iconSize,gridSize:r.view?.gridSize||a.gridSize||ye.gridSize,sort:r.view?.sort??ye.sort,sortDescending:r.view?.sortDescending??ye.sortDescending,...t};Gn(e,()=>({view:o})),Sr.current!==null&&window.clearTimeout(Sr.current),Sr.current=window.setTimeout(()=>{Sr.current=null,De(i,o)},250)},[Gn]),Wr=(0,D.useCallback)(e=>{Ur(wy(Vn.current),e)},[Ur]),Gr=(0,D.useCallback)(e=>{let t=Hn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,columns:e}};_e(n),nt(n)},[]),Kr=(0,D.useCallback)(e=>{let t=Hn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,showImages:e}};_e(n),nt(n)},[]),qr=(0,D.useCallback)(e=>{let t=Hn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,imageStripHeight:e}};_e(n),nt(n)},[]),Jr=(0,D.useCallback)((e,t,n,r)=>{let i=Vn.current.tabs.find(t=>t.id===e);if(!i||Sy(i)!==`files`||!i.listing)return;let a=Cy(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Gn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Oe(a,t,n,r)},[Gn]),Yr=(0,D.useCallback)((e,t)=>{let n=Vn.current.tabs.find(t=>t.id===e);if(!n)return;let r=Ey(n,Hn.current?.defaultView??be);Ur(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Ur]),Xr=(0,D.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Zr=(0,D.useCallback)(()=>{Ae().then(h,()=>h([]))},[]),Qr=(0,D.useCallback)(e=>{let t=(e.openTabs??[]).map(lp).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...Dy(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),a(n[i].id);for(let e of n)Sy(e)===`files`&&Xn(e.id,Cy(e),!0);return!0},[Xn]),J=(0,D.useCallback)(e=>{let t=Wn.current;if(Wn.current=[],t.length===0)return;let n=t.filter(e=>!_y.has(e));for(let e of t)n.includes(e)||vy(e);if(n.length===0)return;let{tabs:r}=Vn.current;if(!e&&r.length===1&&r[0].fresh){Zn(r[0].id,n[0]),vy(n[0]);for(let e of n.slice(1))$n(e),vy(e);return}let i=n.map(e=>{let t=$n(e);return vy(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[$n,Zn]),$r=(0,D.useCallback)(()=>{Ye().then(e=>{_e(e),me(e.recentLimit);let t={...Vt,...e.shortcuts};Me(t),Ut(t.openInNewTab),Pe(e=>e+1),Un.current||(Un.current=!0,J(e.restoreTabs&&Qr(e)))},()=>{me(10),Un.current=!0,J(!1)})},[J,Qr]),ei=(0,D.useCallback)(()=>{Be().then(pe,()=>pe([]))},[]),ti=(0,D.useCallback)(()=>{je().then(_,()=>_([]))},[]),ni=n.filter(e=>!e.hidden),ai=ni.map(xy),li=ai.join(`
`),di=Math.max(ni.findIndex(e=>e.id===i),0);(0,D.useEffect)(()=>{if(!z?.restoreTabs)return;let e=setTimeout(()=>void rt(ai,di),700);return()=>clearTimeout(e)},[li,di,z?.restoreTabs]),(0,D.useEffect)(()=>{let{tabs:e,activeId:t}=Vn.current,n=e.find(e=>e.id===t);n&&n.fresh&&Sy(n)===`files`&&Xn(n.id,Cy(n),!0),Zr(),$r(),ti(),ot().then(b,()=>b(null))},[Xn,Zr,$r,ti]),(0,D.useEffect)(()=>{if(st().then(S,()=>S(null)),P.available)return P.on(e=>{let t=e;t.type===`app.update`&&t.data&&S(t.data)})},[]),(0,D.useEffect)(()=>{if(P.available)return P.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&s({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&_a(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&_a(n.data.error??e(`Pairing failed.`))}})},[e]),(0,D.useEffect)(()=>{let e=setInterval(ti,3e4);return()=>clearInterval(e)},[ti]),(0,D.useEffect)(()=>{q===`home`&&(ei(),ti())},[q,K.id,ei,ti]),(0,D.useEffect)(()=>{if(!P.available)return;let e=P.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Vn.current,i=t.data.startup===!0;i&&_y.has(n)?vy(n):i&&!Un.current?Wn.current.includes(n)||Wn.current.push(n):(i&&r.length===1&&r[0].fresh?Zn(r[0].id,n):cp(n)?Zn(wy(Vn.current),n):$n(n),i&&vy(n))});return P.send({type:`app.ready`}),e},[Zn,$n]),(0,D.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},r})})},[]),(0,D.useEffect)(()=>{if(P.available)return P.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},r})})},[]),(0,D.useEffect)(()=>{let e=e=>{if(Jt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),yr();return}if(e.key===`BrowserForward`){e.preventDefault(),br();return}if(e.key===`Escape`&&T.open){e.preventDefault(),Dn();return}let t=Gt(e);if(t===H.closeTab)e.preventDefault(),ir(wy(Vn.current));else if(t===H.newTab)e.preventDefault(),$n();else if(t===H.reopenTab)e.preventDefault(),ar();else if(t===H.goBack)e.preventDefault(),yr();else if(t===H.goForward)e.preventDefault(),br();else if(t===H.goUp)e.preventDefault(),xr();else if(t===H.find)e.preventDefault(),q===`files`?On():kn();else if(t===H.location)e.preventDefault(),Ie(e=>e+1);else if(t===H.home){e.preventDefault();let t=m.find(e=>e.kind===`home`)?.path;t&&or(t)}else t===H.iconsView?(e.preventDefault(),q===`files`&&Wr({mode:`grid`})):t===H.detailsView?(e.preventDefault(),q===`files`&&Wr({mode:`list`})):t===H.nextTab?(e.preventDefault(),sr(1)):t===H.previousTab?(e.preventDefault(),sr(-1)):t===H.hidden||t===`alt+.`?(e.preventDefault(),Ke().then(()=>{Re(e=>e+1),Cr()})):t===H.undo?(e.preventDefault(),Vr(!0)):t===H.redo?(e.preventDefault(),Vr(!1)):t===H.splitView?(e.preventDefault(),cr()):q!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Mn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[H,q,T.open,ir,ar,$n,yr,br,xr,On,kn,Dn,Mn,Wr,sr,or,m,Cr,Vr,cr]),(0,D.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),yr()):e.button===4&&(e.preventDefault(),br())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[yr,br]);let fi=(0,D.useMemo)(()=>{let e=new Set;for(let t of n){if(Sy(t)!==`files`)continue;let n=Cy(t);if(n&&!Sd(n)){if(p(n)){let t=ky(u(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),pi=fi.join(`\0`);(0,D.useEffect)(()=>{P.available&&P.send({type:`fs.watch`,payload:{paths:fi,owner:`app`}})},[pi,i]);let mi=Sy(pn)===`files`?Cy(pn):``;(0,D.useEffect)(()=>{P.available&&P.send({type:`fs.focus`,payload:{path:mi||null}})},[mi]),(0,D.useEffect)(()=>{if(P.available)return P.on(e=>{let n=e;if(n.type!==`fs.changed`||typeof n.data?.path!=`string`)return;let r=n.data.path,i=Vn.current.tabs.filter(e=>Sy(e)===`files`&&t(Cy(e),r)),a=Vn.current.tabs.filter(e=>{let n=Cy(e);return Sy(e)===`files`&&n.length>0&&p(n)&&t(u(n),r)});if(i.length!==0||a.length!==0){an(r);for(let e of a){let n=Vn.current.tabs.find(t=>t.id===e.id),i=n?Cy(n):``;n&&Sy(n)===`files`&&!n.loading&&p(i)&&t(u(i),r)&&Xn(e.id,i,!0)}i.length!==0&&Ce(r,!1,gn).then(e=>{for(let n of i){let r=Vn.current.tabs.find(e=>e.id===n.id);r&&Sy(r)===`files`&&t(Cy(r),e.path)&&(r.loading?window.setTimeout(()=>{let r=Vn.current.tabs.find(e=>e.id===n.id);r&&!r.loading&&Sy(r)===`files`&&t(Cy(r),e.path)&&Gn(n.id,()=>({listing:e}))},300):Gn(n.id,()=>({listing:e})))}},()=>void 0)}})},[gn,Xn,Gn]);let hi=K.index>0,_i=K.index<K.history.length-1,vi=(e,n)=>{let r=Ey(e,mn),i=e.listing?.path??e.history[e.index]??``,a=p(i),o=a&&E(i);return(0,F.jsx)(jc,{confirmDelete:z?.confirmDelete??!1,previewVideoAudio:z?.previewVideoAudio??!1,previewVideoAutoplay:z?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:n?qe:Xe,onActivate:()=>Qe(n?`primary`:`secondary`),enableShortcuts:(!un||(n?Ze===`primary`:Ze===`secondary`))&&(!a||o),error:e.error,find:e.id===pn.id?{...T,currentPath:Tn<0?null:wn[Tn]}:void 0,imageStripHeight:xn,listing:e.listing,loading:e.loading,onImageStripHeight:qr,readOnly:a&&!o||Sd(e.listing?.path??``),onOpen:(t,n)=>{n?$n(t):Xn(e.id,t)},onOpenFile:(t,n)=>{Sd(t)?Dd(t).catch(e=>void _a(Oy(e))):c(t)?z?.archiveHandler??!1?n?$n(t):Xn(e.id,t):Se(t):p(t)?(async()=>{let e=await Te(t,I.current,jy(t));if(!e.path&&en(e.error)){let n=u(t),r=Zt(n);r&&$t(n);let i=await ya(n,!!r);i&&(Qt(n,i),e=await Te(t,I.current,i))}e.path?Se(e.path):e.error&&_a(e.error)})():Se(t)},onRefresh:()=>{let t=e.listing?.path;t&&er(t)},onRename:tr,onSelectionCountChange:n?hr:gr,onSetTags:(t,n,r)=>Jr(e.id,t,n,r),selectionMenuRequest:n?pt.primary:pt.secondary,onSort:t=>Yr(e.id,t),onPaste:Ir,onClipboardChanged:()=>void Mr(),onTransfer:zr,onAddToTray:e=>void Tr(e),onAddFavorite:e=>void Dr(e),onRemoveFavorite:e=>void Or(e),favoritePaths:B,onExtractArchive:(e,t)=>void Ei(e,t),openOnSingleClick:z?.openOnSingleClick??!1,pendingRename:ht&&n===(Ze===`primary`)&&t(ht.directory,e.listing?.path??``)?ht.path:null,pendingRenameToken:ht?.token??0,refreshToken:Le,shortcuts:H,showCheckboxes:z?.showCheckboxes??!0,showImages:bn,view:r})},yi=T.open&&(0,F.jsx)(td,{current:Tn,focusToken:ae,matchCase:T.matchCase,mode:T.mode,onClose:Dn,onMatchCase:()=>re(e=>({...e,matchCase:!e.matchCase})),onMode:()=>re(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Pn(1),onPrevious:()=>Pn(-1),onQuery:e=>re(t=>({...t,query:e})),onRegex:()=>re(e=>({...e,regex:!e.regex})),query:T.query,regex:T.regex,total:wn.length}),bi=q===`files`&&p(sn),xi=bi&&E(sn),Ci=bi&&K.listing?.archiveEncrypted===!0,wi=async(t,n)=>{let r=u(t),i=await we(r,n,I.current,jy(r));if(!i.ok&&en(i.error)){let e=Zt(r);e&&$t(r);let t=await ya(r,!!e);t&&(Qt(r,t),i=await we(r,n,I.current,t))}i.ok?(er(n),rn(),Xn(K.id,n,!0)):_a(`${e(`Could not extract the archive.`)}${i.error?`\n${i.error}`:``}`)},Ei=async(e,n)=>{let r=u(e),i=ky(r);if(!i)return;if(n===`choose`){let e=await fa(i);e&&await wi(r,e);return}let a=n===`named`;if(n===`auto`){let e=t(r,sn)?K.listing?.entries??[]:(await Ce(r,!1,!1,I.current,jy(r))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${Ay(r)}`:i;await wi(r,s)},Di=async e=>{bi&&await Ei(sn,e)},Oi=async()=>{bi&&await Ei(sn,`choose`)},ki=(0,F.jsxs)(Ry,{children:[(0,F.jsx)(zy,{"data-shortcut":Kt(H.goBack),disabled:!hi,onClick:e=>{K.index>0&&Wt(e)?$n(K.history[K.index-1]):yr()},title:e(`Back`),type:`button`,children:(0,F.jsx)(si,{})}),(0,F.jsx)(zy,{"data-shortcut":Kt(H.goForward),disabled:!_i,onClick:e=>{K.index<K.history.length-1&&Wt(e)?$n(K.history[K.index+1]):br()},title:e(`Forward`),type:`button`,children:(0,F.jsx)(ci,{})}),(0,F.jsx)(zy,{"data-shortcut":Kt(H.goUp),disabled:q!==`files`||!cn,onClick:e=>{cn&&(Wt(e)?$n(cn):or(cn))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(ii,{})}),(0,F.jsx)(up,{focusToken:Fe,icon:Sn,label:q===`files`?void 0:e(ay[q]),onContextMenu:q===`files`?(e,t,n)=>ct({x:t,y:n,path:e}):void 0,onNavigate:or,path:q===`files`?sn:on}),q===`files`&&(!bi||xi)&&(0,F.jsx)(zy,{onClick:e=>pr(e,sn,()=>void Xn(K.id,sn,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)(oi,{})}),(0,F.jsx)(zy,{"data-shortcut":Kt(H.find),onClick:kn,title:e(`Search`),type:`button`,children:(0,F.jsx)(ri,{})}),dt.primary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Hy,{}),(0,F.jsx)(zy,{onClick:e=>_r(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)(ca,{})})]}),bi&&(0,F.jsxs)(By,{children:[(0,F.jsx)(Hy,{}),Ci&&(0,F.jsxs)(Vy,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,F.jsx)(la,{size:12}),e(`Encrypted`)]}),(0,F.jsx)(zy,{onClick:()=>void Oi(),onContextMenu:e=>{e.preventDefault(),it({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,F.jsx)(Ti,{})}),(0,F.jsx)(so,{icon:(0,F.jsx)(Zi,{size:15}),onChange:e=>{let t=Number(e);de(t),I.current=t,bi&&Xn(K.id,sn,!0)},options:by.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(by.find(e=>e.value===String(ue))?.label??`Auto`)}`,value:String(ue)})]})]}),Ai=oe.open?{...oe,index:M}:null;return(0,F.jsx)(Nn,{value:yn,children:(0,F.jsxs)(Py,{$rounded:w,children:[(0,F.jsx)(vu,{settings:z}),(0,F.jsx)(Pv,{activeId:K.id,onClose:ir,onNewTab:()=>$n(),onReorder:Xr,onTransferToTab:zr,onSelect:a,onViewChange:Wr,onColumns:Gr,onShowImages:Kr,showImages:bn,tasks:vt,onClearTasks:Br,activityOpen:Tt,onActivityOpenChange:Et,trayCount:Lt.length+At.length,trayVisible:W,onToggleTray:Rr,split:un,canSplit:q===`files`,onToggleSplit:cr,details:ze,canDetails:q===`files`||q===`recycle`||q===`gallery`,onToggleDetails:()=>Ve(e=>!e),currentFolder:q===`files`&&!Sd(sn)?sn:``,shortcuts:H,view:hn,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Sy(t),i=Cy(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Cy(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Fn(yn,i):void 0,archive:r===`files`&&p(i),split:!!a,title:r===`files`?In(yn,i,v(i)||e(`Files`)):e(ay[r]),partner:a?{title:In(yn,o,v(o)||e(`Files`)),place:Fn(yn,o)}:void 0}})}),(0,F.jsxs)(Fy,{children:[(0,F.jsx)(Wg,{activeKind:q,currentPath:q===`files`?on:``,drives:g,historyVersion:xe,onNavigate:or,onOpenView:rr,homePath:m.find(e=>e.kind===`home`)?.path??``,places:m,recent:fe,recentLimit:R,version:Ne}),(0,F.jsxs)(Iy,{children:[q!==`files`&&ki,(0,F.jsxs)(Ly,{children:[q!==`files`&&oe.open&&(0,F.jsx)(td,{current:M,focusToken:se,matchCase:oe.matchCase,mode:oe.mode,onClose:An,onMatchCase:()=>A(e=>({...e,matchCase:!e.matchCase})),onMode:()=>A(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>jn(1),onPrevious:()=>jn(-1),onQuery:e=>A(t=>({...t,query:e})),onRegex:()=>A(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:oe.query,regex:oe.regex,total:N}),q===`files`?un&&ln?(0,F.jsxs)(Wy,{ref:dr,children:[(0,F.jsxs)(Gy,{style:{flex:d},children:[(0,F.jsxs)(Uy,{$active:Ze===`primary`,onPointerDown:()=>Qe(`primary`),children:[(0,F.jsx)(zy,{"data-shortcut":Kt(H.goBack),disabled:!hi,onClick:e=>{let t=K.index-1;t<0||(Wt(e)?$n(K.history[t]):Qn(K.id,K.history[t],t))},title:e(`Back`),type:`button`,children:(0,F.jsx)(si,{})}),(0,F.jsx)(zy,{"data-shortcut":Kt(H.goForward),disabled:!_i,onClick:e=>{let t=K.index+1;t>=K.history.length||(Wt(e)?$n(K.history[t]):Qn(K.id,K.history[t],t))},title:e(`Forward`),type:`button`,children:(0,F.jsx)(ci,{})}),(0,F.jsx)(zy,{"data-shortcut":Kt(H.goUp),disabled:!cn,onClick:e=>{cn&&(Wt(e)?$n(cn):Xn(K.id,cn))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(ii,{})}),(0,F.jsx)(up,{focusToken:Ze===`primary`?Fe:void 0,onContextMenu:(e,t,n)=>ct({x:t,y:n,path:e}),onNavigate:(e,t)=>t?$n(e):void Xn(K.id,e),path:sn}),(0,F.jsx)(zy,{onClick:e=>pr(e,sn,()=>void Xn(K.id,sn,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)(oi,{})}),(0,F.jsx)(zy,{"data-shortcut":Kt(H.find),onClick:On,title:e(`Search`),type:`button`,children:(0,F.jsx)(ri,{})}),dt.primary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Hy,{}),(0,F.jsx)(zy,{onClick:e=>_r(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)(ca,{})})]})]}),vi(K,!0),Ze===`primary`&&yi]}),(0,F.jsx)(Ky,{onDoubleClick:()=>f(.5),onPointerDown:fr,title:e(`Drag to resize; double-click to reset`)}),(0,F.jsxs)(Gy,{$enter:!0,style:{flex:1-d},children:[(0,F.jsxs)(Uy,{$active:Ze===`secondary`,onPointerDown:()=>Qe(`secondary`),children:[(0,F.jsx)(zy,{"data-shortcut":Kt(H.goBack),disabled:ln.index<=0,onClick:e=>{let t=ln.index-1;t<0||(Wt(e)?$n(ln.history[t]):Qn(ln.id,ln.history[t],t))},title:e(`Back`),type:`button`,children:(0,F.jsx)(si,{})}),(0,F.jsx)(zy,{"data-shortcut":Kt(H.goForward),disabled:ln.index>=ln.history.length-1,onClick:e=>{let t=ln.index+1;t>=ln.history.length||(Wt(e)?$n(ln.history[t]):Qn(ln.id,ln.history[t],t))},title:e(`Forward`),type:`button`,children:(0,F.jsx)(ci,{})}),(0,F.jsx)(zy,{"data-shortcut":Kt(H.goUp),disabled:!fn,onClick:e=>{fn&&(Wt(e)?$n(fn):Xn(ln.id,fn))},title:e(`Up one level`),type:`button`,children:(0,F.jsx)(ii,{})}),(0,F.jsx)(up,{focusToken:Ze===`secondary`?Fe:void 0,onContextMenu:(e,t,n)=>ct({x:t,y:n,path:e}),onNavigate:(e,t)=>t?$n(e):void Xn(ln.id,e),path:dn}),(0,F.jsx)(zy,{onClick:e=>pr(e,dn,()=>void Xn(ln.id,dn,!0)),title:e(`New folder or file`),type:`button`,children:(0,F.jsx)(oi,{})}),(0,F.jsx)(zy,{"data-shortcut":Kt(H.find),onClick:On,title:e(`Search`),type:`button`,children:(0,F.jsx)(ri,{})}),dt.secondary>0&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Hy,{}),(0,F.jsx)(zy,{onClick:e=>_r(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,F.jsx)(ca,{})})]})]}),vi(ln,!1),Ze===`secondary`&&yi]}),(0,F.jsx)(Go,{info:ur,onWidth:lr,open:ze,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,width:Ue})]}):(0,F.jsxs)(Jy,{children:[(0,F.jsxs)(Yy,{children:[ki,(0,F.jsxs)(qy,{children:[vi(K,!0),yi]})]}),(0,F.jsx)(Go,{info:Ge,onWidth:lr,open:ze,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,width:Ue})]}):q===`home`?(0,F.jsx)(ep,{drives:g,find:Ai,historyVersion:xe,onSearchMatches:le,homePath:m.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:ti,onHistoryChanged:()=>Ee(e=>e+1),onAddToTray:e=>void Tr(e),onAddFavorite:e=>void Dr(e),onRemoveFavorite:e=>void Or(e),favoritePaths:B,onExtractArchive:(e,t)=>void Ei(e,t),settingsVersion:Ne,onOpen:or,onLayoutChanged:$r,onPlacesChanged:h,onRecentCleared:ei,places:m,recent:fe,recentLimit:R,visibilityVersion:Le}):q===`settings`?(0,F.jsx)(Hm,{appInfo:y,find:Ai,focusSection:te,onSearchMatches:le,onSettingsChanged:$r,onOpenFolder:$n}):q===`gallery`?(0,F.jsx)(Ag,{confirmDelete:z?.confirmDelete??!1,find:Ai,onSearchMatches:le,openOnSingleClick:z?.openOnSingleClick??!1,onAddToTray:e=>void Tr(e),onAddFavorite:e=>void Dr(e),onRemoveFavorite:e=>void Or(e),favoritePaths:B,onExtractArchive:(e,t)=>void Ei(e,t),shortcuts:H,showCheckboxes:z?.showCheckboxes??!0,showDetails:ze,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,view:hn}):(0,F.jsx)(Ep,{find:Ai,onOpenLocation:or,onShowDetails:()=>Ve(!0),platform:y?.platform,showDetails:ze,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1})]},q),(0,F.jsxs)($y,{children:[(0,F.jsx)(`span`,{children:q===`files`&&K.listing?My(e,K.listing):``}),y?(0,F.jsxs)(Xy,{children:[(0,F.jsxs)(`span`,{children:[`v`,y.version,` · `,y.platform]}),x?.available&&(0,F.jsxs)(Zy,{onClick:()=>{ne(`updates`),rr(`settings`)},title:e(`Version {version} is available.`,{version:x.latest}),type:`button`,children:[(0,F.jsx)(Qy,{}),e(`Update available`)]})]}):(0,F.jsx)(`span`,{children:e(`browser preview`)})]})]})]}),(0,F.jsx)(Ys,{clipboardItems:At,clipboardMove:Mt,currentDirectory:q===`files`?on:``,items:Lt,onAdd:e=>void Tr(e),onClear:kr,onClose:()=>It(!1),onCopyToClipboard:e=>void Nr(e),onPosition:Lr,onRemove:Er,onTransfer:zr,position:G,visible:W}),$e&&(0,F.jsx)(io,{creationOnly:!0,directory:$e.directory,menu:{x:$e.x,y:$e.y,paths:[],background:!0},onClose:()=>et(null),onCreateFile:e=>void vr(e),onCreateFolder:e=>void vr(null,e),shortcuts:H}),at&&(0,F.jsx)(io,{allowCompression:!0,directory:ky(at.path)??at.path,menu:{x:at.x,y:at.y,paths:[at.path]},onAddToTray:e=>void Tr(e),onAddFavorite:e=>void Dr(e),onRemoveFavorite:e=>void Or(e),favoritePaths:B,onExtractArchive:(e,t)=>void Ei(e,t),onArchiveCreated:e=>{e&&er(ky(at.path)??at.path)},onClose:()=>ct(null),onCompressTo:(e,t)=>ut({paths:e,name:t}),onCopy:(e,t)=>void _t(e,t),onDelete:e=>void St(e,!1).then(()=>er(ky(at.path)??at.path)),onOpen:(e,t)=>t?$n(e):void Xn(K.id,e),onOpenFile:e=>void Se(e),onPaste:e=>void xt(e).then(t=>{t&&er(e)}),onRefresh:()=>er(at.path),shortcuts:H,target:{path:at.path,isDirectory:!0}}),lt&&(0,F.jsx)(xo,{initialDirectory:ky(at?.path??sn)??sn,initialName:lt.name,onCancel:()=>ut(null),onCompress:async e=>{let t=await Rt(lt.paths,e);return!t.ok&&t.error&&_a(t.error),t.ok}}),tt&&(0,F.jsx)(Ka,{items:[{label:e(`Extract here`),onSelect:()=>void Di(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void Di(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void Di(`auto`)}],onClose:()=>it(null),x:tt.x,y:tt.y}),qt&&(0,F.jsx)(Cu,{delaySeconds:qt.prompt.delaySeconds,hits:qt.prompt.hits,onCancel:()=>{qt.resolve(!1),Yt(null)},onConfirm:()=>{qt.resolve(!0),Yt(null)},permanent:qt.prompt.permanent},qt.id),(0,F.jsx)(Ru,{}),(0,F.jsx)(Gu,{}),o&&(0,F.jsx)(oy,{code:o.code,deviceName:o.deviceName,onAccept:()=>{yd(o.requestId,!0),s(null)},onReject:()=>{yd(o.requestId,!1),s(null)}}),(0,F.jsx)(ey,{}),(0,F.jsx)(ge,{})]})})}var Py=_.div`
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
`,Fy=_.div`
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
`,Iy=_.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Ly=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Va}
`,Ry=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,zy=_.button`
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
`,By=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Vy=_.span`
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
`,Hy=_.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Uy=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Wy=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Gy=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Wa:``}
`,Ky=_.div`
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
        ${Ga}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,qy=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Jy=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Yy=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Xy=_.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Zy=_.button`
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
`,Qy=_.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,$y=_.footer`
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
`;function eb({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:c,onSelect:u}){let d=L(),f=Cc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,D.useState)(e),[_,y]=(0,D.useState)(null),[b,x]=(0,D.useState)(!0),[S,ee]=(0,D.useState)(null),[C,te]=(0,D.useState)(()=>new Set),[ne,w]=(0,D.useState)(a??[]),[T,E]=(0,D.useState)([]),[ie,O]=(0,D.useState)([]),[ae,k]=(0,D.useState)([]),[oe,A]=(0,D.useState)([]),[se,j]=(0,D.useState)(``),[M,ce]=(0,D.useState)(m.length===0),[N,le]=(0,D.useState)(`files`),[ue,de]=(0,D.useState)(0),[I,fe]=(0,D.useState)(_n),[pe,R]=(0,D.useState)(0),[me,he]=(0,D.useState)(0),[z,ge]=(0,D.useState)(null),[_e,ve]=(0,D.useState)(null),[B,xe]=(0,D.useState)(0),[Se,we]=(0,D.useState)(null),[Te,V]=(0,D.useState)(be.imageStripHeight);(0,D.useEffect)(()=>{Ye().then(we,()=>we(null))},[]),(0,D.useEffect)(()=>{a?w(a):Ae().then(w,()=>w([]))},[a]),(0,D.useEffect)(()=>{je().then(E,()=>E([])),Be().then(O,()=>O([]))},[]),(0,D.useEffect)(()=>{let e=!0;return x(!0),ee(null),te(new Set),j(p?``:v(h)),Ce(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),j(p?``:v(t.path)),x(!1))},t=>{e&&(ee(t instanceof Error?t.message:String(t)),x(!1))}),()=>{e=!1}},[h,ue,p]),(0,D.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),fe(e=>({...e,open:!0})),R(e=>e+1);return}if(e.key===`Escape`){I.open?(fe(e=>({...e,open:!1,query:``})),he(0)):c();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),De();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Oe();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),fe(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),R(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||We()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,D.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),De()):e.button===4&&(e.preventDefault(),Oe())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Ee=e=>{let t=e.trim();t.length!==0&&l(t)!==l(h)&&(k(e=>[...e,h]),A([]),le(`files`),g(t))},De=()=>{let e=ae.at(-1);e!==void 0&&(k(e=>e.slice(0,-1)),A(e=>[h,...e]),g(e))},Oe=()=>{let e=oe[0];e!==void 0&&(A(e=>e.slice(1)),k(e=>[...e,h]),g(e))},ke=_?.path??h,H=_?.parent??(h?re(h):null);(0,D.useEffect)(()=>{P.available&&ke&&P.send({type:`fs.watch`,payload:{paths:[ke],owner:`picker`}})},[ke]),(0,D.useEffect)(()=>{if(P.available&&ke)return P.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&l(t.data.path)===l(ke)&&Ce(ke,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));te(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[ke]);let Me=(_?.entries??[]).filter(e=>e.isDirectory||p&&(M||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Ne=_?{..._,entries:Me}:null,Pe=I.open&&I.query.length>0,Fe=(0,D.useMemo)(()=>Pe?Me.filter(e=>En(e.name,I)).map(e=>e.fullPath):[],[Pe,Me,I]);(0,D.useEffect)(()=>{he(0)},[I.query,I.matchCase,I.regex,_?.path]);let Ie=Fe.length===0?-1:Math.min(me,Fe.length-1),Le=(0,D.useMemo)(()=>({...I,currentPath:Ie>=0?Fe[Ie]:null}),[I,Ie,Fe]),Re=Se?.defaultView??be,ze=o??{mode:Re.mode,iconSize:Re.iconSize,gridSize:Re.gridSize,sort:`name`,sortDescending:!1,columns:Re.columns??[`type`,`size`,`modified`]},Ve=(s??Re.showImages)&&ze.mode===`list`,He=se.trim(),Ue=He.length>0?nb(He)?He:tb(ke,He):null,We=()=>{if(b||S)return;let e=n?[...C]:[...C].slice(0,1);e.length>0?u(e):Ue!==null&&He!==v(ke)?u([Ue]):!p&&ke&&u([ke])},Ge=(0,D.useCallback)(e=>{te(new Set(e)),j(e.length===1?v(e[0]):e.length===0&&!p?v(ke):``)},[ke,p]),Ke=e=>{_?.entries.find(t=>t.fullPath===e)?.isDirectory?Ee(e):p&&u([e])},qe=e=>j(e),Je=async e=>{let t=z;if(ge(null),!t||!ke)return;let n=e===null?await wt(ke):await Ot(ke,e);n.ok&&n.path!==null&&(fe(e=>({...e,open:!1,query:``})),e!==null&&ce(!0),de(e=>e+1),window.setTimeout(()=>{ve(n.path),xe(e=>e+1)},120))},Xe=()=>{fe(e=>({...e,open:!0})),R(e=>e+1)},Ze=e=>{he(t=>Fe.length===0?0:(t+e+Fe.length)%Fe.length)},Qe=e=>(0,F.jsxs)(fb,{children:[(0,F.jsxs)(pb,{children:[(0,F.jsx)(mb,{children:d(p?`File name:`:`Folder:`)}),(0,F.jsx)(hb,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),We())},spellCheck:!1,value:se}),p&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(mb,{children:d(`Files of type:`)}),(0,F.jsx)(so,{onChange:e=>ce(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:M?`all`:`supported`,width:220})]})]}),(0,F.jsxs)(gb,{children:[(0,F.jsx)(_b,{onClick:c,type:`button`,children:d(`Cancel`)}),(0,F.jsxs)(_b,{$primary:!0,disabled:b||S!==null||p&&C.size===0&&He.length===0,onClick:We,type:`button`,children:[(0,F.jsx)(_i,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),$e=(0,F.jsxs)(ib,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,F.jsxs)(ab,{children:[(0,F.jsxs)(ob,{children:[(0,F.jsx)(ei,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,F.jsx)(sb,{onClick:c,title:d(`Cancel`),type:`button`,children:(0,F.jsx)(vi,{size:12})})]}),(0,F.jsxs)(cb,{children:[(0,F.jsx)(Wg,{activeKind:N===`overview`?`home`:N===`gallery`?`gallery`:`files`,currentPath:ke,drives:T,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:ne.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Ee(e),onOpenView:e=>{e===`home`?(te(new Set),j(p?``:v(ke)),le(`overview`)):e===`gallery`&&p&&(te(new Set),j(``),le(`gallery`))},places:ne,recent:ie,recentLimit:10}),(0,F.jsx)(lb,{children:N===`overview`?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(ep,{drives:T,historyVersion:0,homePath:ne.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Ee(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Ge,places:ne,readOnly:!0,recent:ie,recentLimit:10,visibilityVersion:0}),Qe(j)]}):N===`gallery`?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Ag,{onPick:e=>u([e]),onSelectionChange:Ge,showCheckboxes:Se?.showCheckboxes??!0,view:{...ye,columns:[]}}),Qe(j)]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(ub,{children:[(0,F.jsx)(db,{disabled:ae.length===0,onClick:De,title:d(`Back`),type:`button`,children:(0,F.jsx)(si,{})}),(0,F.jsx)(db,{disabled:oe.length===0,onClick:Oe,title:d(`Forward`),type:`button`,children:(0,F.jsx)(ci,{})}),(0,F.jsx)(db,{disabled:!H,onClick:()=>H&&Ee(H),title:d(`Up one level`),type:`button`,children:(0,F.jsx)(ii,{})}),(0,F.jsx)(up,{onNavigate:Ee,path:ke}),(0,F.jsx)(db,{onClick:e=>ge({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,F.jsx)(oi,{})}),(0,F.jsx)(db,{onClick:Xe,title:d(`Search`),type:`button`,children:(0,F.jsx)(ri,{})}),f.available&&(0,F.jsx)(db,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,F.jsx)(ca,{})})]}),I.open&&(0,F.jsx)(td,{current:Ie,focusToken:pe,matchCase:I.matchCase,mode:I.mode,onClose:()=>{fe(e=>({...e,open:!1,query:``})),he(0)},onMatchCase:()=>fe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>fe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ze(1),onPrevious:()=>Ze(-1),onQuery:e=>fe(t=>({...t,query:e})),onRegex:()=>fe(e=>({...e,regex:!e.regex})),query:I.query,regex:I.regex,total:Fe.length}),(0,F.jsx)(jc,{allowBackgroundMenu:!0,confirmDelete:Se?.confirmDelete??!1,enableShortcuts:!0,error:S,find:Le,imageStripHeight:Te,loading:b,listing:Ne,onImageStripHeight:V,onOpen:Ke,onOpenFile:Ke,onRefresh:()=>de(e=>e+1),onSelectionChange:Ge,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:Se?.openOnSingleClick??!1,refreshToken:ue,pendingRename:_e,pendingRenameToken:B,showCheckboxes:Se?.showCheckboxes??!0,showDetails:!1,showImages:Ve,singleSelect:!n,view:ze}),Qe(qe)]})})]}),z&&(0,F.jsx)(io,{creationOnly:!0,directory:ke,menu:{x:z.x,y:z.y,paths:[],background:!0},onClose:()=>ge(null),onCreateFile:p?e=>void Je(e):void 0,onCreateFolder:()=>void Je(null),shortcuts:Vt})]});return i?$e:(0,ka.createPortal)((0,F.jsx)(rb,{onPointerDown:e=>{e.target===e.currentTarget&&c()},children:$e}),document.body)}function tb(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function nb(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var rb=_.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Wa}
`,ib=_.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Aa}
    ${({$inline:e})=>e?``:za}
`,ab=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,ob=_.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,sb=_.button`
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
`,cb=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,lb=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,ub=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,db=_.button`
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
`,fb=_.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,pb=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,mb=_.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,hb=_.input`
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
`,gb=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,_b=_.button`
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
`;function vb({mode:e,multiple:t,extensions:n,initial:r}){let i=L(),a=me(),[o,s]=(0,D.useState)(null),[c,l]=(0,D.useState)({}),[u,d]=(0,D.useState)(null),[f,p]=(0,D.useState)(null),[m,h]=(0,D.useState)(null),g=(0,D.useRef)(0);(0,D.useEffect)(()=>{P.send({type:`app.ready`})},[]),(0,D.useEffect)(()=>(ve(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>ve(null)),[]),(0,D.useEffect)(()=>{Ye().then(e=>{s(e),ee(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??be,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,F.jsxs)(yb,{children:[(0,F.jsxs)(bb,{children:[(0,F.jsx)(xb,{children:(0,F.jsx)(yi,{size:17})}),(0,F.jsx)(Sb,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,F.jsx)(vv,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,F.jsx)(Cb,{children:(0,F.jsx)(wb,{onClick:()=>P.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,F.jsx)(vi,{size:12})})})]}),(0,F.jsx)(Tb,{children:(0,F.jsx)(eb,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>P.send({type:`pick.cancel`}),onSelect:e=>P.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,F.jsx)(Cu,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,F.jsx)(Ru,{}),(0,F.jsx)(ge,{})]})}var yb=_.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,bb=_.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,xb=_.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Sb=_.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cb=_.div`
    display: flex;
    flex-shrink: 0;
`,wb=_.button`
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
`,Tb=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Eb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Eb);var Db=document.getElementById(`root`),Ob=new URLSearchParams(window.location.search),kb=Ob.get(`picker`),Ab=Ob.get(`filter`)??``;Db&&(0,ie.createRoot)(Db).render((0,F.jsx)(D.StrictMode,{children:(0,F.jsx)(fe,{children:kb===`folder`||kb===`file`?(0,F.jsx)(vb,{extensions:Ab?Ab.split(`;`).filter(Boolean):[],initial:Ob.get(`initial`)??``,mode:kb,multiple:Ob.get(`multiple`)===`1`}):(0,F.jsx)(Ny,{})})}));