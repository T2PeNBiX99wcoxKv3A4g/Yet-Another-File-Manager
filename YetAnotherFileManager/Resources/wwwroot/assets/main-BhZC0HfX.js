import{A as e,C as t,E as n,M as r,N as i,O as a,S as o,T as s,_ as c,b as l,c as u,d,f,g as p,h as m,i as h,j as g,k as _,l as v,m as y,n as b,o as x,p as S,r as ee,s as te,t as ne,u as re,v as C,w,x as ie,y as T}from"./theme-BMX5jShW.js";var E=i(r(),1),ae=e(),D=15e3,oe=new Set,O=new Map,se=!1,k=0,A;function j(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function M(){se||(se=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>ce(e)))}function ce(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?O.get(n):void 0;n&&r&&(O.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),oe.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function le(){if(A!==void 0)return;let e=()=>{if(!j())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),A=setInterval(e,5e3)}var N={get available(){return j()},send(e){j()?(M(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&le()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=D){if(!j())return Promise.reject(Error(`Native bridge is not available.`));M();let r=`req-${++k}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{O.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);O.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return M(),oe.add(e),()=>oe.delete(e)}},P=s();function ue(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function de(e){return N.available?await N.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var fe=(0,E.createContext)(ue({})),F=(0,E.createContext)(`en`);function I(){return(0,E.useContext)(fe)}var pe=({children:e})=>{let[t,n]=(0,E.useState)(()=>ue({})),[r,i]=(0,E.useState)(`en`);return(0,E.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await de();if(e)return;n(()=>ue(t.strings)),i(t.locale)}catch{}};t();let r=N.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,E.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,P.jsx)(fe.Provider,{value:t,children:(0,P.jsx)(F.Provider,{value:r,children:e})})},L=e=>N.send({type:e});function me(){let[e,t]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>L(`window.minimize`),toggleMaximize:()=>L(`window.toggleMaximize`),close:()=>L(`window.close`)}}function he(){return{onMouseDown:()=>L(`window.drag`),onDoubleClick:()=>L(`window.toggleMaximize`)}}function ge(){let[e,t]=(0,E.useState)(!1),{maximized:n}=me();return(0,E.useEffect)(()=>{if(!N.available)return;let e=!1;return N.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,E.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var R=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function _e(){return(0,P.jsx)(P.Fragment,{children:R.map(([e,t])=>(0,P.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),N.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var ve=null;function ye(e){ve=e}function z(e){return ve?ve(e):Promise.resolve(!1)}var B={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},be={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function xe(e,t){return N.available?await N.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Se(e){return N.available?(await N.request(`fs.open`,{path:e})).ok:!1}async function Ce(e,t=!0,n=!1,r=0,i){return await N.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function we(e,t,n=0,r){return await N.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function V(e,t=0,n){return await N.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Te(e){N.available&&e.length!==0&&await N.request(`fs.archive.release`,{paths:e})}async function Ee(e){return N.available?await N.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function De(e,t){return N.available?(await N.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Oe(e,t,n,r){return N.available?(await N.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function ke(e,t=!1){return N.available?await N.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ae(){return(await N.request(`fs.places`)).places}async function je(){return(await N.request(`fs.drives`)).drives}async function Me(e=!1){return(await N.request(`fs.recycle`,{includeOrphans:e})).entries}async function Ne(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await z({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await N.request(e,{...t,confirm:r.token})}return r}async function H(e=!1){let t=await N.request(`fs.recycle.empty`,{includeOrphans:e});await Ne(`fs.recycle.empty`,{includeOrphans:e},t)}async function Pe(e){return!N.available||e.length===0?{ok:!1,done:0}:await N.request(`fs.recycle.restoreMany`,{ids:e})}async function Fe(e){if(!N.available||e.length===0)return{ok:!1,done:0};let t=await N.request(`fs.recycle.deleteMany`,{ids:e}),n=await Ne(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ie(e){N.available&&e&&await N.request(`fs.recycle.properties`,{id:e})}async function Le(){if(!N.available)return{entries:[],cancelled:!0,failed:!1};let e=await N.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Re(){return N.available?(await N.request(`fs.recycle.admin.purge`)).ok:!1}async function ze(e=0,t=150,n=!1){return N.available?await N.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Be(){return N.available?(await N.request(`fs.recent`)).entries:[]}async function Ve(){return N.available?(await N.request(`fs.frequent`)).entries:[]}async function He(e){N.available&&await N.request(`fs.frequent.record`,{path:e})}async function Ue(){await N.request(`fs.recent.clear`)}async function We(){await N.request(`fs.frequent.clear`)}async function Ge(){return await N.request(`fs.visibility`)}async function Ke(){return await N.request(`fs.hidden.toggle`)}async function qe(){return N.available?await N.request(`fs.index.tasks`):{count:0,directories:[]}}var Je={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,trayAutoShow:!0,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Ye(){if(!N.available)return Je;let e=await N.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,trayAutoShow:e?.trayAutoShow??!0,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function Xe(){return N.available?(await N.request(`app.protection.defaults`)).paths??[]:[]}var Ze={registered:!1,pathMatches:!1,registeredPath:null},Qe={registered:!1,pathMatches:!1,registeredPath:null};async function $e(){return N.available?await N.request(`app.defaultManager.status`):Qe}async function et(e){return N.available?await N.request(`app.defaultManager.set`,{enabled:e}):Qe}async function tt(){return N.available?await N.request(`app.archive.status`):Ze}async function nt(){return N.available?await N.request(`app.archive.register`):Ze}async function rt(){return N.available?await N.request(`app.archive.unregister`):Ze}async function it(e){if(!N.available)return e;let t=await N.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,trayAutoShow:t?.trayAutoShow??e.trayAutoShow,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function at(e,t){N.available&&await N.request(`app.tabs.set`,{tabs:e,active:t})}async function ot(e,t,n){return N.available?(await N.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var st={managed:0,private:0,workingSet:0,available:0};async function ct(){return N.available?await N.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1,logDirectory:``}}async function lt(){return N.available?await N.request(`app.updateStatus`)??null:null}async function ut(){return N.available?await N.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function dt(e){return!N.available||!e?!1:(await N.request(`app.openUrl`,{url:e})).ok}async function ft(){return N.available?await N.request(`app.memory`):st}async function U(){return N.available?await N.request(`app.memory.trim`):st}async function pt(){return N.available?(await N.request(`app.scheme`)).registered:!1}async function mt(e){return N.available?(await N.request(`app.scheme.set`,{enabled:e})).registered:!1}var ht={supported:!1,mode:`none`,active:!1,error:null};async function gt(){return N.available?await N.request(`app.startup`):ht}async function _t(e){return N.available?await N.request(`app.startup.set`,{mode:e}):ht}async function vt(e,t=!1){return!N.available||e.length===0?!1:(await N.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function yt(){return N.available?(await N.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function bt(){return N.available?await N.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function xt(e,t,n){return!N.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await N.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function St(e){return!N.available||e.length===0?[]:(await N.request(`fs.paths.info`,{paths:e})).entries}async function Ct(e){if(!N.available)return{ok:!1,created:[]};let t=await N.request(`fs.clipboard.paste`,{directory:e});return{ok:t.ok,created:t.created??[]}}async function wt(e,t=!1){if(!N.available||e.length===0)return{ok:!1,error:null};let n=await N.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await z({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await N.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function Tt(e,t){return N.available?await N.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Et(e,t=!1){return N.available?await N.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Dt(e){return N.available?(await N.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Ot(e,t){return N.available?await N.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function kt(e,t,n){return N.available?await N.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function At(e,t){return N.available?await N.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function jt(e){N.available&&e.length!==0&&await N.request(`fs.operation.properties`,{paths:e})}async function Mt(e){N.available&&await N.request(`fs.operation.openWith`,{path:e})}async function Nt(e){N.available&&await N.request(`fs.operation.terminal`,{path:e})}async function Pt(e){return N.available?await N.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Ft(e,t){return N.available?(await N.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function It(){return N.available?await N.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Lt(){return N.available?await N.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Rt(e){N.available&&await N.request(`fs.operation.showInExplorer`,{path:e})}async function zt(e){return!N.available||e.length===0?{verbs:[],safe:!0}:await N.request(`shell.verbs`,{paths:e})}async function Bt(e,t,n,r){N.available&&e.length!==0&&await N.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Vt(e,t){return!N.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await N.request(`fs.operation.compress`,{...t,paths:e})}async function W(){return N.available?(await N.request(`app.tasks`)).tasks:[]}async function Ht(){N.available&&await N.request(`app.tasks.clear`)}var Ut={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Wt=Ut.openInNewTab;function Gt(e){Wt=e.trim()||Ut.openInNewTab}function Kt(e){let t=Wt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function qt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Jt(e){return e.split(`+`).filter(Boolean).map(e=>Yt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Yt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Xt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Zt=new Map;function Qt(e){return l(p(e)?u(e):e)}function $t(e){return Zt.get(Qt(e))}function en(e,t){Zt.set(Qt(e),t)}function tn(e){Zt.delete(Qt(e))}function nn(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var rn=new Map,an=new Map,on=new Set,sn=0;function cn(){rn.clear(),an.clear(),sn+=1,on.forEach(e=>e())}function ln(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...rn.keys()])e.toLowerCase().includes(t)&&(rn.delete(e),n=!0);n&&(sn+=1,on.forEach(e=>e()))}function G(){let[e,t]=(0,E.useState)(sn);return(0,E.useEffect)(()=>{let e=()=>t(sn);return on.add(e),()=>{on.delete(e)}},[]),e}var K=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function un(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return K.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function dn(e,t,n=!1){let r=G(),i=e===null?``:un(e,t,n),[a,o]=(0,E.useState)(()=>rn.get(i)??null);return(0,E.useEffect)(()=>{if(e===null){o(null);return}if(!N.available)return;if(rn.has(i)){o(rn.get(i)??null);return}let r=!0;return N.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?rn.set(i,e.dataUrl):rn.delete(i),r&&o(e.dataUrl)},()=>{rn.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function fn(e){let[t,n]=(0,E.useState)(e);return(0,E.useEffect)(()=>{if(!e){n(null);return}if(!p(e)){n(e);return}let t=!0;return V(e,0,$t(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function q(e){let t=G(),[n,r]=(0,E.useState)(()=>e?an.get(e)??null:null);return(0,E.useEffect)(()=>{if(!e||!N.available){r(null);return}if(an.has(e)){r(an.get(e)??null);return}let t=!0;return N.request(`fs.iconFile`,{path:e}).then(n=>{an.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{an.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var pn=null,mn=null;function hn(){return pn===null?N.available?(mn??=N.request(`app.thumbnails`).then(e=>(pn=e.base??``,pn),()=>(pn=``,``)),mn):Promise.resolve(``):Promise.resolve(pn)}function gn(e,t=128,n=0){let[r,i]=(0,E.useState)(pn);return(0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return hn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${_n}`}var _n=2;function vn(e,t=0,n=``){let[r,i]=(0,E.useState)(pn);if((0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return hn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function yn(e,t=0){let[n,r]=(0,E.useState)(pn);return(0,E.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return hn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var bn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},xn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function Sn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Tn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=On(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Cn=`\0`,wn=``;function Tn(e){return e.query!==Cn&&(Cn=e.query,wn=e.query.toLowerCase()),wn}var En=`\0`,Dn=null;function On(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===En)return Dn;En=t;try{Dn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Dn=null}return Dn}function kn(e,t){return Sn(e,t)!==null}var An=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],jn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Mn(e){let t=Pn(e);for(let{kind:e}of An)if(jn[e].has(t))return e;return null}function Nn(e){return Mn(e)!==null}function Pn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Fn=(0,E.createContext)({places:{},useIcons:!1}),In=Fn.Provider;function Ln(){return(0,E.useContext)(Fn)}function Rn(e,t){return e.places[l(t)]}function zn(e,t,n){return Rn(e,t)?.name||n}function Bn(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function Vn(e,t){try{localStorage.setItem(e,String(t))}catch{}}function Hn(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function Un(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Wn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,P.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,P.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Gn=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Kn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M14 3v4h4`})]}),qn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,P.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,P.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Jn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,P.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),Yn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 19V5`}),(0,P.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Xn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,P.jsx)(`path`,{d:`M20 4v7h-7`})]}),Zn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 5v14`}),(0,P.jsx)(`path`,{d:`M5 12h14`})]}),Qn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M19 12H5`}),(0,P.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),$n=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M5 12h14`}),(0,P.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),er=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,P.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),tr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,P.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),nr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,P.jsx)(`path`,{d:`M12 12v8`})]}),rr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,P.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),ir=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),ar=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,P.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),or=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),sr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 7h16`}),(0,P.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,P.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,P.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),cr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),lr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),ur=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,P.jsxs)(`defs`,{children:[(0,P.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,P.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,P.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,P.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,P.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,P.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,P.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,P.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,P.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,P.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),dr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),fr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,P.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,P.jsx)(`path`,{d:`m13 5-2 14`})]}),pr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,P.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,P.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),mr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,P.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),hr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,P.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,P.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),gr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),_r=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),vr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),yr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,P.jsx)(`path`,{d:`M8.5 14h7`})]}),br=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,P.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,P.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),xr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Sr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Cr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),wr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Tr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Er=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,P.jsx)(`path`,{d:`m14 6 4 4`})]}),Dr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,P.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Or=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,P.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),kr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 4v10`}),(0,P.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,P.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Ar=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,P.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,P.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),jr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,P.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,P.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Mr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,P.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Nr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Pr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,P.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Fr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,P.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,P.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Ir=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Lr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,P.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,P.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,P.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Rr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,P.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),zr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,P.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Br=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,P.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,P.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Vr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,P.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Hr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,P.jsx)(`path`,{d:`M3.5 12h17`}),(0,P.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Ur=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Wr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,P.jsx)(`path`,{d:`M8.5 10.5h7`})]}),Gr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,P.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,P.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),Kr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,P.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),qr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,P.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,P.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),Jr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Yr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 16V4`}),(0,P.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,P.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),Xr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),Zr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,P.jsx)(`path`,{d:`M12 4v16`})]}),Qr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,P.jsx)(`path`,{d:`M15 4v16`})]}),$r=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,P.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,P.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,P.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),ei=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,P.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,P.jsx)(`path`,{d:`M12 14v2`})]}),ti=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,P.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),ni=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,P.jsx)(`circle`,{cx:12,cy:12,r:3})]}),ri=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,P.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,P.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,P.jsx)(`path`,{d:`m3 3 18 18`})]});function J(e,t){return({size:n=t,...r})=>(0,P.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var ii=J(Wn,18),ai=J(Gn,18),oi=J(Kn,18),si=J(qn,18),ci=J(Jn,16),li=J(Yn,16),ui=J(Xn,16),di=J(Zn,16),fi=J(Qn,16),pi=J($n,16),mi=J(er,12),hi=J(tr,18),gi=J(nr,14),_i=J(rr,14),vi=J(ir,14),yi=J(ar,18),bi=J(or,18),xi=J(sr,18),Si=J(cr,14),Ci=J(lr,14),wi=J(ni,14),Ti=J(ri,14),Ei=J(ur,18),Di=J(dr,18),Oi=J(fr,18),ki=J(pr,18),Ai=J(mr,18),ji=J(hr,18),Mi=J(gr,18),Ni=J(_r,18),Pi=J(vr,18),Fi=J(yr,18),Ii=J(br,18),Li=J(xr,18),Ri=J(Sr,18),zi=J(Cr,18),Bi=J(wr,18),Vi=J(Tr,18),Hi=J(Er,16),Ui=J(Dr,18),Wi=J(Or,18),Gi=J(kr,18),Ki=J(Ar,18),qi=J(jr,18),Ji=J(Mr,18),Yi=J(Nr,18),Xi=J(Pr,18),Zi=J(Fr,18),Qi=J(Ir,18),$i=J(Lr,18),ea=J(Rr,18),ta=J(zr,18),na=J(Br,18),ra=J(Vr,18),ia=J(Hr,18),aa=J(Ur,18),oa=J(Wr,14),sa=J(Gr,14),ca=J(Kr,16),la=J(qr,16),ua=J(Jr,16),da=J(Yr,16),fa=J(Xr,16),pa=J(Zr,16),ma=J(Qr,16),ha=J($r,16),ga=J(ei,14),_a=J(ti,14);async function va(e,t,n){return N.available?(await N.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function ya(e){return va(`folder`,[],e??``)}function ba(e){return va(`file`,e??[],``)}var xa=null,Sa=null;function Ca(e){xa=e}function wa(e){return xa?xa(e):Promise.resolve()}function Ta(e){Sa=e}function Ea(e,t=!1){return Sa?Sa(e,t):Promise.resolve(null)}var Da=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],Oa=null,ka=0,Aa=new Set;function ja(){ka+=1;for(let e of Aa)e()}function Ma(e){return Aa.add(e),()=>Aa.delete(e)}function Na(){return ka}function Pa(e){Oa=e,ja()}function Fa(){return(0,E.useSyncExternalStore)(Ma,Na,Na),Oa}var Ia=g(),La=a`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Ra=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,za=n`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ba=n`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Va=n`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Ha=n`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Ua=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Wa=n`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Ga=n`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Ka=a`animation: ${Ra} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,qa=a`animation: ${za} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Ja=a`animation: ${Ba} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;a`animation: ${Va} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var Ya=a`animation: ${Ha} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Xa=a`animation: ${Ua} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Za=a`animation: ${Wa} 140ms ease-out;`,Qa=a`animation: ${Ga} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function $a({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,E.useState)([]),s=(0,E.useRef)(void 0);if((0,E.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,E.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,P.jsx)(lo,{},`group-rule-${i}`)),n.push((0,P.jsx)(co,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,P.jsx)(lo,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,P.jsxs)(ao,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,P.jsx)(oo,{children:e.loading?(0,P.jsx)(uo,{}):e.icon}),(0,P.jsx)(so,{children:e.label}),a?(0,P.jsx)(mi,{size:12}):e.checked&&(0,P.jsx)(Si,{size:12})]},`${e.label}-${i}`))}),n};return(0,Ia.createPortal)((0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(eo,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(to,{children:r.map((e,t)=>(0,P.jsxs)(no,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,P.jsx)(ro,{children:e.icon}),(0,P.jsx)(io,{children:e.label})]},`${e.label}-${t}`))}),(0,P.jsx)(lo,{})]}),m(n,0)]}),a.map((e,t)=>(0,P.jsx)(eo,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var eo=_.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${La}
    ${qa}
    transform-origin: top left;
`,to=_.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,no=_.button`
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
`,ro=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,io=_.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ao=_.button`
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
`,oo=_.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,so=_.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,co=_.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,lo=_.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,uo=_.span`
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
`;function fo({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:u,onDelete:d,onCopy:f,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:_=!1,onRefresh:y,onAddToTray:b,onAddFavorite:x,onRemoveFavorite:S,favoritePaths:ee,onExtractArchive:te,allowCompression:ne=!1,onCompressTo:re,onArchiveCreated:C}){let w=I(),ie=Fa(),T=p(t),[ae,D]=(0,E.useState)({verbs:[],safe:!0,loading:!1}),[oe,O]=(0,E.useState)({recommended:[],other:[],loading:!1}),[se,k]=(0,E.useState)(null),A=(0,E.useRef)(0),j=(0,E.useRef)(0),M=e?.paths.length===1,ce=e?.background?t?[t]:[]:e?.paths??[],le=e?.background?t||null:M&&n?.isDirectory?n.path:null;if((0,E.useEffect)(()=>{if(!e){D({verbs:[],safe:!0,loading:!1}),O({recommended:[],other:[],loading:!1});return}let t=++A.current;D({verbs:[],safe:!0,loading:ce.length>0&&!T}),ce.length>0&&!T&&zt(ce).then(e=>{A.current===t&&D({...e,loading:!1})},()=>{A.current===t&&D({verbs:[],safe:!0,loading:!1})});let r=++j.current;!T&&M&&n?(O({recommended:[],other:[],loading:!0}),Pt(n.path).then(e=>{j.current===r&&O({...e,loading:!1})},()=>{j.current===r&&O({recommended:[],other:[],loading:!1})})):O({recommended:[],other:[],loading:!1})},[e,M,n?.path,n?.isDirectory,ce.length,T]),(0,E.useEffect)(()=>{if(!e||T||!le){k(null);return}let t=!0;return Dt(le).then(e=>{t&&k(e)},()=>{t&&k(null)}),()=>{t=!1}},[e,le,T]),!e)return null;let N=[],ue=[],de=new Set((ee??[]).map(l)),fe=e.background?t?[t]:[]:e.paths,F=fe.length>0&&fe.every(e=>de.has(l(e))),pe=()=>n?L(n.path,n.isDirectory):`Archive`,L=(e,t)=>{let n=v(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},me=async(e,n=pe())=>{let r=await Vt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?C?.(r.path,!0):wa(r.error??w(`Could not create the archive.`))},he=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},ge=async()=>{if(!le||se===null)return;let e=await Ot(le,!se);e.ok?(k(e.enabled),y?.()):wa(e.error??w(`Could not change the case sensitivity.`))},R=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await kt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await kt(e,t,`${a}\\${mo(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?y?.():wa(o.error??w(`Could not create the link.`))},_e=async e=>{if(!n)return;let r=await ya(t);r&&await R(e,n.path,r,v(n.path),e.endsWith(`-copy`))},ve=async e=>{let n=ie?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=l(a)===l(t);await R(n,r.path,t,v(r.path),i&&!o)}},ye=async()=>{let t=(await St(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Pa({paths:t})},z=()=>{let e=ie?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:w(`Cancel selected link`),icon:(0,P.jsx)(Ci,{size:14}),onSelect:()=>Pa(null)},...t?[{label:w(`Hard link`),icon:(0,P.jsx)(oi,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`hard`)}]:[],{label:w(`Symbolic link`),icon:(0,P.jsx)(oi,{size:14}),separatorBefore:!t,onSelect:()=>void ve(`symbolic-file`)},...n?[{label:w(`Directory junction`),icon:(0,P.jsx)(ai,{size:14}),onSelect:()=>void ve(`junction`)},{label:w(`Smart copy`),icon:(0,P.jsx)(ca,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,P.jsx)(ca,{size:14}),onSelect:()=>void ve(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,P.jsx)(ca,{size:14}),onSelect:()=>void ve(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,P.jsx)(ca,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,P.jsx)(ca,{size:14}),onSelect:()=>void ve(`symbolic-copy`)}]:[]]};if(e.background){if(h&&ue.push({label:w(`New folder`),icon:(0,P.jsx)(di,{size:16}),shortcut:Jt(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:w(`Folder`),icon:(0,P.jsx)(ai,{size:14}),onSelect:()=>h(!1)}),T||e.push({label:w(`Case-sensitive folder`),icon:(0,P.jsx)(sa,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...Da.map((e,t)=>({label:`${w(e.label)} (${e.extension})`,icon:(0,P.jsx)(oi,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),N.push({label:w(`New`),icon:(0,P.jsx)(di,{size:14}),children:e,onSelect:()=>void 0})}if(T||N.push({label:w(`Create link`),icon:(0,P.jsx)(da,{size:14}),disabled:!ie,children:z(),onSelect:()=>void 0}),_)return(0,P.jsx)($a,{items:N,onClose:a,quick:ue,x:e.x,y:e.y});!T&&o&&N.push({label:w(`Open in new tab`),icon:(0,P.jsx)(di,{size:14}),onSelect:()=>o(t,!0)}),N.push({label:w(`Copy as path`),icon:(0,P.jsx)(ca,{size:14}),onSelect:()=>void he([t])}),b&&N.push({label:w(`Add to file tray`),icon:(0,P.jsx)(ra,{size:14}),onSelect:()=>b([t])}),!T&&(F?S:x)&&N.push({label:w(F?`Remove from favorites`:`Add to favorites`),icon:F?(0,P.jsx)(oa,{size:14}):(0,P.jsx)(aa,{size:14}),onSelect:()=>F?S?.([t]):x?.([t])}),!T&&se!==null&&N.push({label:w(`Case-sensitive names`),icon:(0,P.jsx)(sa,{size:14}),checked:se,onSelect:()=>void ge()}),!T&&ne&&(N.push({label:w(`Open in Terminal`),icon:(0,P.jsx)(ta,{size:14}),onSelect:()=>void Nt(t)}),N.push({label:w(`Show in Explorer`),icon:(0,P.jsx)(ai,{size:14}),separatorBefore:!0,onSelect:()=>void Rt(t)})),m&&ue.push({label:w(`Paste`),icon:(0,P.jsx)(ua,{size:16}),disabled:!i,shortcut:Jt(r.paste),onSelect:()=>m(t)}),T||ue.push({label:w(`Properties`),icon:(0,P.jsx)(hi,{size:16}),shortcut:Jt(r.properties),onSelect:()=>void jt([t])})}else{if(o&&N.push({label:w(`Open`),icon:(0,P.jsx)(pi,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&N.push({label:w(`Open in new tab`),icon:(0,P.jsx)(di,{size:14}),onSelect:()=>o(n.path,!0)}),m&&N.push({label:w(`Paste into folder`),icon:(0,P.jsx)(ua,{size:14}),disabled:!i,onSelect:()=>m(n.path)}),T||N.push({label:w(`Open in Terminal`),icon:(0,P.jsx)(ta,{size:14}),onSelect:()=>void Nt(n.path)})),!T&&M&&n&&!n.isDirectory&&c(n.path)&&te&&N.push({label:w(`Extract archive`),icon:(0,P.jsx)(Mi,{size:14}),separatorBefore:!0,children:[{label:w(`Extract here`),icon:(0,P.jsx)(Mi,{size:14}),onSelect:()=>te(n.path,`here`)},{label:w(`Extract to a folder named after the archive`),icon:(0,P.jsx)(Mi,{size:14}),onSelect:()=>te(n.path,`named`)},{label:w(`Auto extract to the current folder`),icon:(0,P.jsx)(Mi,{size:14}),onSelect:()=>te(n.path,`auto`)},{label:w(`Extract to…`),icon:(0,P.jsx)(ai,{size:14}),separatorBefore:!0,onSelect:()=>te(n.path,`choose`)}],onSelect:()=>void 0}),!T&&M&&n){let e=[];if(oe.loading)e.push({label:w(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of oe.recommended)e.push({label:t.name,group:w(`Suggested apps`),icon:t.icon?(0,P.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,P.jsx)(Pi,{size:14}),onSelect:()=>void Ft(n.path,t.path).then(e=>{e||Mt(n.path)})});for(let t of oe.other)e.push({label:t.name,group:w(`Other apps`),icon:t.icon?(0,P.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,P.jsx)(Pi,{size:14}),onSelect:()=>void Ft(n.path,t.path).then(e=>{e||Mt(n.path)})})}e.push({label:w(`Choose another app…`),icon:(0,P.jsx)(Pi,{size:14}),separatorBefore:!0,onSelect:()=>void Mt(n.path)}),N.push({label:w(`Open with`),icon:(0,P.jsx)(Pi,{size:14}),children:e,onSelect:()=>void Mt(n.path)})}if(T||N.push({label:w(`Compress`),icon:(0,P.jsx)(Mi,{size:14}),separatorBefore:!0,children:[{label:w(`Compress to ZIP`),icon:(0,P.jsx)(Mi,{size:14}),onSelect:()=>void me(e.paths)},{label:w(`Compress to…`),icon:(0,P.jsx)(Mi,{size:14}),onSelect:()=>re?.(e.paths,pe())}],onSelect:()=>void 0}),!T&&(e?.paths.length??0)>0){let e=[{label:w(`Select link source`),icon:(0,P.jsx)(da,{size:14}),onSelect:()=>void ye()},...ie?[{label:w(`Cancel selected link`),icon:(0,P.jsx)(Ci,{size:14}),onSelect:()=>Pa(null)}]:[],...M&&n?n.isDirectory?[{label:w(`Symbolic link`),icon:(0,P.jsx)(ai,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-folder`)},{label:w(`Directory junction`),icon:(0,P.jsx)(ai,{size:14}),onSelect:()=>void _e(`junction`)},{label:w(`Smart copy`),icon:(0,P.jsx)(ca,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,P.jsx)(ca,{size:14}),onSelect:()=>void _e(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,P.jsx)(ca,{size:14}),onSelect:()=>void _e(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,P.jsx)(ca,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,P.jsx)(ca,{size:14}),onSelect:()=>void _e(`symbolic-copy`)}]:[{label:w(`Symbolic link`),icon:(0,P.jsx)(oi,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-file`)},{label:w(`Hard link`),icon:(0,P.jsx)(oi,{size:14}),onSelect:()=>void _e(`hard`)}]:[]];N.push({label:w(`Create link`),icon:(0,P.jsx)(da,{size:14}),children:e,onSelect:()=>void 0})}!T&&n?.isDirectory&&se!==null&&N.push({label:w(`Case-sensitive names`),icon:(0,P.jsx)(sa,{size:14}),checked:se,onSelect:()=>void ge()}),N.push({label:w(`Copy as path`),icon:(0,P.jsx)(ca,{size:14}),onSelect:()=>void he(e.paths)}),b&&N.push({label:w(`Add to file tray`),icon:(0,P.jsx)(ra,{size:14}),onSelect:()=>b(e.paths)}),!T&&(F?S:x)&&N.push({label:w(F?`Remove from favorites`:`Add to favorites`),icon:F?(0,P.jsx)(oa,{size:14}):(0,P.jsx)(aa,{size:14}),onSelect:()=>F?S?.(fe):x?.(fe)}),T||N.push({label:w(`Show in Explorer`),icon:(0,P.jsx)(ai,{size:14}),separatorBefore:!0,onSelect:()=>void Rt(fe[0])}),f&&ue.push({label:w(`Cut`),icon:(0,P.jsx)(la,{size:16}),shortcut:Jt(r.cut),onSelect:()=>f(e.paths,!0)},{label:w(`Copy`),icon:(0,P.jsx)(ca,{size:16}),shortcut:Jt(r.copy),onSelect:()=>f(e.paths,!1)}),M&&n&&u&&ue.push({label:w(`Rename`),icon:(0,P.jsx)(Hi,{size:16}),shortcut:Jt(r.rename),onSelect:()=>u(n.path)}),d&&ue.push({label:w(`Delete`),icon:(0,P.jsx)(xi,{size:16}),danger:!0,shortcut:Jt(r.delete),onSelect:()=>d(e.paths)}),T||ue.push({label:w(`Properties`),icon:(0,P.jsx)(hi,{size:16}),shortcut:Jt(r.properties),onSelect:()=>void jt(e.paths)})}if(ae.loading)N.push({label:w(`More actions`),icon:(0,P.jsx)(Pi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(ae.verbs.length>0){let e={items:[],children:new Map};for(let t of ae.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,P.jsx)(po,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Bt(ce,ae.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];N.push({label:w(ae.safe?`More actions`:`More actions (extensions)`),icon:(0,P.jsx)(Pi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,P.jsx)($a,{items:N,onClose:a,quick:ue,x:e.x,y:e.y})}function po({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,P.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,P.jsx)(pi,{size:14});case`document`:return(0,P.jsx)(Bi,{size:14});case`cut`:return(0,P.jsx)(la,{size:14});case`copy`:return(0,P.jsx)(ca,{size:14});case`paste`:return(0,P.jsx)(ua,{size:14});case`trash`:return(0,P.jsx)(xi,{size:14});case`pencil`:return(0,P.jsx)(Hi,{size:14});case`gear`:return(0,P.jsx)(hi,{size:14});case`star`:return(0,P.jsx)(Yi,{size:14});case`pin`:return(0,P.jsx)(gi,{size:14});case`executable`:return(0,P.jsx)(Pi,{size:14});case`share`:return(0,P.jsx)(da,{size:14});case`arrow`:return(0,P.jsx)(pi,{size:14});default:return(0,P.jsx)(Ei,{size:14})}}function mo(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function ho({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=I(),[l,u]=(0,E.useState)(null),d=(0,E.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,E.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(go,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,P.jsx)(_o,{children:f?.label??``}):(0,P.jsx)(vo,{children:a}),a===void 0&&(0,P.jsx)(yo,{children:(0,P.jsx)(mi,{size:11})})]}),l&&(0,Ia.createPortal)((0,P.jsx)(bo,{"aria-label":c(`Options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,P.jsxs)(xo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,P.jsx)(So,{children:t.label}),t.value===e&&(0,P.jsx)(Si,{size:11})]},t.value))}),document.body)]})}var go=_.button`
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
`,_o=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,vo=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,yo=_.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,bo=_.div`
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
    ${qa}
`,xo=_.button`
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
`,So=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Co=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],wo=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],To=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],Eo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Do=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function Oo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=I(),a=(0,E.useRef)(null),[o,s]=(0,E.useState)(e),[c,l]=(0,E.useState)(t),[u,d]=(0,E.useState)(`zip`),[f,p]=(0,E.useState)(`5`),[m,h]=(0,E.useState)(`default`),[g,_]=(0,E.useState)(`none`),[v,y]=(0,E.useState)(``),[b,x]=(0,E.useState)(`0`),[S,ee]=(0,E.useState)(!1);(0,E.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let te=Co.find(e=>e.value===u)??Co[0],ne=u===`zip`||u===`zipx`,re=g!==`none`,C=ne||u===`7z`,w=u===`zip`||u===`7z`,ie=async()=>{if(S||!c.trim()||!o||re&&v.length===0)return;ee(!0);let e=await r({directory:o,name:c.trim(),format:u,level:te.level?Number(f):0,method:ne?m:null,encryption:C?g:`none`,password:re?v:void 0,splitSize:w?Number(b):0});ee(!1),e&&n()};return(0,Ia.createPortal)((0,P.jsx)(ko,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,P.jsxs)(Ao,{"aria-modal":`true`,role:`dialog`,children:[(0,P.jsx)(jo,{children:i(`Compress to…`)}),(0,P.jsxs)(Mo,{children:[(0,P.jsx)(No,{children:i(`Archive name`)}),(0,P.jsx)(Po,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ie()}}),(0,P.jsx)(Fo,{children:te.extension})]}),(0,P.jsxs)(Mo,{children:[(0,P.jsx)(No,{children:i(`Format`)}),(0,P.jsx)(ho,{onChange:e=>d(e),options:Co.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,P.jsxs)(Mo,{children:[(0,P.jsx)(No,{children:i(`Method`)}),(0,P.jsx)(ho,{disabled:!ne,onChange:h,options:wo.map(e=>({...e,label:i(e.label)})),value:ne?m:`default`,width:236,zIndex:3700})]}),(0,P.jsxs)(Mo,{children:[(0,P.jsx)(No,{children:i(`Encryption`)}),(0,P.jsx)(ho,{disabled:!C,onChange:e=>{_(e),e===`none`&&y(``)},options:To.map(e=>({...e,label:i(e.label)})),value:C?g:`none`,width:236,zIndex:3700})]}),re&&(0,P.jsxs)(Mo,{children:[(0,P.jsx)(No,{children:i(`Password`)}),(0,P.jsx)(Po,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,P.jsxs)(Mo,{children:[(0,P.jsx)(No,{children:i(`Split volumes`)}),(0,P.jsx)(ho,{disabled:!w,onChange:x,options:Eo.map(e=>({...e,label:i(e.label)})),value:w?b:`0`,width:236,zIndex:3700})]}),(0,P.jsxs)(Mo,{children:[(0,P.jsx)(No,{children:i(`Compression level`)}),(0,P.jsx)(ho,{disabled:!te.level,onChange:p,options:Do.map(e=>({...e,label:i(e.label)})),value:te.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,P.jsxs)(Mo,{$stack:!0,children:[(0,P.jsx)(No,{children:i(`Destination`)}),(0,P.jsxs)(Io,{children:[(0,P.jsx)(Lo,{title:o,children:o}),(0,P.jsx)(zo,{disabled:S,onClick:()=>void ya(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,P.jsxs)(Ro,{children:[(0,P.jsx)(zo,{disabled:S,onClick:n,type:`button`,children:i(`Cancel`)}),(0,P.jsx)(Bo,{disabled:S||!c.trim()||re&&v.length===0,onClick:()=>void ie(),type:`button`,children:i(S?`Compressing…`:`Compress`)})]})]})}),document.body)}var ko=_.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Za}
`,Ao=_.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ka}
`,jo=_.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Mo=_.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,No=_.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Po=_.input`
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
`,Fo=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Io=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Lo=_.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ro=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,zo=_.button`
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
`,Bo=_(zo)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Vo({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=I(),c=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Ia.createPortal)((0,P.jsx)(Ho,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,P.jsxs)(Uo,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(Wo,{children:t}),(0,P.jsx)(Go,{children:n}),(0,P.jsxs)(Ko,{children:[(0,P.jsx)(qo,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,P.jsx)(qo,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Ho=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Za}
`,Uo=_.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ka}
`,Wo=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Go=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Ko=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,qo=_.button`
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
`,Jo=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Yo=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Xo=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Zo=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Qo({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=I(),[l,u]=(0,E.useState)(!1),[d,f]=(0,E.useState)(!1),[p,m]=(0,E.useState)(!1),[h,g]=(0,E.useState)(0),[_,v]=(0,E.useState)(0),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(!1),[ee,te]=(0,E.useState)(!1),ne=(0,E.useRef)(null),re=(0,E.useRef)(null),C=(0,E.useRef)(null),w=(0,E.useRef)(null),[ie,T]=(0,E.useState)(()=>{let e=Bn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),ae=e?.path??null,D=fn(ae),oe=e?$o(e.name):``,O=!!e&&!e.isDirectory&&Jo.has(oe),se=!!e&&!e.isDirectory&&Yo.has(oe),k=!!e&&!e.isDirectory&&Xo.has(oe),A=!!e&&!e.isDirectory&&Zo.has(oe),j=!!e&&!e.isDirectory&&oe===`pdf`,M=gn(O?D:null,512,e?.modified??0),ce=vn(k?D:null,e?.modified??0,oe),le=vn(O||se?D:null,e?.modified??0,oe),N=yn(j?D:null,e?.modified??0),ue=dn(!O&&!se&&!k&&!A&&!j?D:null,e?.isDirectory??!1);if((0,E.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),te(!1)},[ae]),(0,E.useEffect)(()=>{if(!D||!A){b(null),S(!1);return}let e=!0;return S(!0),b(null),Ee(D).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`Could not read this file.`)}),S(!1))}),()=>{e=!1}},[D,A]),!e&&!s)return null;let de=e=>{C.current={x:e.clientX,width:re.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},fe=e=>{let t=C.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},F=e=>{C.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},pe=e=>{w.current={y:e.clientY,height:ie},e.currentTarget.setPointerCapture(e.pointerId)},L=e=>{let t=w.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);T(n),Vn(`yafm.preview.media.height`,n)},me=e=>{w.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,P.jsxs)(ts,{$open:r,children:[r&&(0,P.jsx)(ns,{onPointerDown:de,onPointerMove:fe,onPointerUp:F,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,P.jsx)(rs,{ref:re,style:{width:r?t:0},children:(0,P.jsxs)(is,{children:[(0,P.jsx)(ai,{size:56}),(0,P.jsx)(`span`,{children:s})]})})]});let he=()=>{let e=ne.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,P.jsxs)(ts,{$open:r,children:[r&&(0,P.jsx)(ns,{onPointerDown:de,onPointerMove:fe,onPointerUp:F,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(rs,{ref:re,style:{width:r?t:0},children:[(0,P.jsx)(as,{style:{height:ie},children:O&&le&&!l?(0,P.jsxs)(ss,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,P.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:he,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:M??void 0,preload:`metadata`,ref:ne,src:le}),(0,P.jsx)(cs,{$visible:!d,onClick:he,title:c(`Play`),type:`button`,children:(0,P.jsx)(fa,{size:28})}),(0,P.jsxs)(ls,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,P.jsxs)(us,{children:[(0,P.jsx)(`span`,{children:es(_)}),(0,P.jsx)(`span`,{children:es(h)})]}),(0,P.jsx)(ds,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=ne.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):se&&le?(0,P.jsx)(`audio`,{controls:!0,src:le}):k&&ce?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:ce}):j&&N&&!ee?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>te(!0),src:N}):j?(0,P.jsx)(oi,{size:64}):A?(0,P.jsx)(fs,{children:x||!y?(0,P.jsx)(ms,{children:c(`Loading…`)}):y.error?(0,P.jsx)(ms,{children:y.error}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ps,{children:y.text}),y.truncated&&(0,P.jsx)(ms,{children:c(`Showing the first 256 KB.`)})]})}):O&&M?(0,P.jsx)(`img`,{alt:``,src:M}):ue?(0,P.jsx)(`img`,{alt:``,src:ue}):e.isDirectory?(0,P.jsx)(ai,{size:64}):(0,P.jsx)(oi,{size:64})}),(0,P.jsx)(os,{onDoubleClick:()=>{T(210),Vn(`yafm.preview.media.height`,210)},onPointerDown:pe,onPointerMove:L,onPointerUp:me,title:c(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(hs,{children:[(0,P.jsx)(gs,{title:e.path,children:e.name}),o&&(0,P.jsx)(_s,{children:o}),(0,P.jsx)(vs,{children:e.fields.map(e=>(0,P.jsxs)(ys,{children:[(0,P.jsx)(bs,{children:e.label}),(0,P.jsx)(xs,{title:e.value,children:e.value})]},e.label))})]})]})]})}function $o(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function es(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var ts=_.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,ns=_.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,rs=_.aside`
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
`,is=_.div`
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
`,as=_.div`
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
`,os=_.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ss=_.div`
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
`,cs=_.button`
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
`,ls=_.div`
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
`,us=_.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,ds=_.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,fs=_.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,ps=_.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,ms=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,hs=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,gs=_.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,_s=_.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,vs=_.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,ys=_.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,bs=_.span`
    color: var(--text-muted);
`,xs=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Ss=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Cs=[...Ss],ws={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},Ts={folder:e=>(0,P.jsx)(ai,{size:e}),home:e=>(0,P.jsx)(ii,{size:e}),desktop:e=>(0,P.jsx)(Ui,{size:e}),documents:e=>(0,P.jsx)(Wi,{size:e}),downloads:e=>(0,P.jsx)(Gi,{size:e}),pictures:e=>(0,P.jsx)(Ki,{size:e}),music:e=>(0,P.jsx)(qi,{size:e}),videos:e=>(0,P.jsx)(Ji,{size:e}),drive:e=>(0,P.jsx)(si,{size:e}),image:e=>(0,P.jsx)(ki,{size:e}),video:e=>(0,P.jsx)(Ai,{size:e}),audio:e=>(0,P.jsx)(ji,{size:e}),text:e=>(0,P.jsx)(Di,{size:e}),code:e=>(0,P.jsx)(Oi,{size:e}),clock:e=>(0,P.jsx)(yi,{size:e}),star:e=>(0,P.jsx)(Yi,{size:e}),file:e=>(0,P.jsx)(oi,{size:e}),archive:e=>(0,P.jsx)(Mi,{size:e}),pdf:e=>(0,P.jsx)(Ni,{size:e}),executable:e=>(0,P.jsx)(Pi,{size:e}),font:e=>(0,P.jsx)(Fi,{size:e}),database:e=>(0,P.jsx)(Ii,{size:e}),config:e=>(0,P.jsx)(Li,{size:e}),spreadsheet:e=>(0,P.jsx)(Ri,{size:e}),presentation:e=>(0,P.jsx)(zi,{size:e}),document:e=>(0,P.jsx)(Bi,{size:e}),app:e=>(0,P.jsx)(Ei,{size:e}),gear:e=>(0,P.jsx)(hi,{size:e}),pin:e=>(0,P.jsx)(gi,{size:e}),trash:e=>(0,P.jsx)(xi,{size:e}),overview:e=>(0,P.jsx)(Vi,{size:e}),book:e=>(0,P.jsx)(Xi,{size:e}),briefcase:e=>(0,P.jsx)(Zi,{size:e}),cloud:e=>(0,P.jsx)(Qi,{size:e}),gamepad:e=>(0,P.jsx)($i,{size:e}),camera:e=>(0,P.jsx)(ea,{size:e}),terminal:e=>(0,P.jsx)(ta,{size:e}),server:e=>(0,P.jsx)(na,{size:e}),package:e=>(0,P.jsx)(ra,{size:e}),globe:e=>(0,P.jsx)(ia,{size:e}),heart:e=>(0,P.jsx)(aa,{size:e}),share:e=>(0,P.jsx)(na,{size:e}),favorites:e=>(0,P.jsx)(aa,{size:e})};function Es(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ds(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Ss)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Cs.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Es(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${ws[n]??n}${Os(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Os(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function ks({panel:e,size:t=16}){let n=q(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,P.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Ts[e.icon]:void 0;if(r)return(0,P.jsx)(P.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,P.jsx)(ai,{size:t});case`recent`:return(0,P.jsx)(yi,{size:t});case`frequent`:return(0,P.jsx)(Yi,{size:t});case`drives`:return(0,P.jsx)(si,{size:t});case`home`:return(0,P.jsx)(ii,{size:t});case`share`:return(0,P.jsx)(na,{size:t});case`favorites`:return(0,P.jsx)(aa,{size:t});default:return(0,P.jsx)(ai,{size:t})}}function As({place:e,size:t=18}){let n=q(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,P.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Ts[e.icon]?(0,P.jsx)(P.Fragment,{children:Ts[e.icon](t)}):(0,P.jsx)(ai,{size:t})}var js=`#64748b`;function Ms(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Ns({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=I(),[c,l]=(0,E.useState)(``),[u,d]=(0,E.useState)(`#2dd4bf`),f=(0,E.useRef)(null);(0,E.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Ia.createPortal)((0,P.jsxs)(Ps,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,P.jsxs)(Fs,{children:[(0,P.jsx)(`span`,{children:s(`Tags`)}),(0,P.jsx)(Is,{onClick:o,title:s(`Close`),type:`button`,children:(0,P.jsx)(Ci,{size:11})})]}),(0,P.jsxs)(Ls,{children:[p.length===0&&(0,P.jsx)(Vs,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,P.jsxs)(Rs,{children:[(0,P.jsx)(zs,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,P.jsxs)(Bs,{$color:t,$ink:Ms(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,P.jsx)(Si,{size:11}),(0,P.jsx)(`span`,{children:e})]})]},e)})]}),(0,P.jsxs)(Hs,{children:[(0,P.jsx)(zs,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,P.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,P.jsx)(Us,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var Ps=_.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${Ka}
`,Fs=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Is=_.button`
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
`,Ls=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Rs=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,zs=_.input`
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
`,Bs=_.button`
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
`,Vs=_.span`
    font-size: 11px;
    color: var(--text-muted);
`,Hs=_.div`
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
`,Us=_.button`
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
`,Ws={file:oi,folder:ai,text:Di,code:Oi,image:ki,video:Ai,audio:ji,archive:Mi,pdf:Ni,executable:Pi,font:Fi,database:Ii,config:Li,spreadsheet:Ri,presentation:zi,document:Bi},Gs={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Ks(e){let t=e.lastIndexOf(`.`);return t>0?Gs[e.slice(t).toLowerCase()]??`file`:`file`}function qs({name:e,size:t}){let n=Ws[e??`file`]??oi;return(0,P.jsx)(n,{size:t})}function Js({path:e,name:t,isDirectory:n,size:r=18}){let i=dn(e,n);return i?(0,P.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,P.jsx)(ai,{size:r}):(0,P.jsx)(qs,{name:Ks(t),size:r})}var Ys=`application/x-yafm-paths`,Xs=[Ys,`text/uri-list`];function Zs(e){return e?.types.some(e=>Xs.includes(e.toLowerCase()))??!1}function Qs(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Ys);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(ec).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var $s=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function ec(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return $s?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function tc(e,t,n=!0){e.dataTransfer.setData(Ys,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function nc({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=I(),[m,h]=(0,E.useState)(()=>new Set),[g,_]=(0,E.useState)(!1),v=(0,E.useRef)(null),y=(0,E.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),b=(0,E.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),x=(0,E.useRef)(null);if((0,E.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=x.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Zs(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Qs(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let S=new Set([...e,...t].map(e=>e.path)),ee=S.size>0&&[...S].every(e=>m.has(e)),te=S.size,ne=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},re=()=>{h(ee?new Set:S)},C=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},w=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},T=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},ae=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},D=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},oe=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of b)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},O=(e,t)=>{let n=m.has(e.path);return(0,P.jsxs)(mc,{$checked:n,draggable:!0,onClick:()=>ne(e.path),onDragStart:r=>{tc(r,n&&m.size>0?[...new Set([...y,...b].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,P.jsx)(hc,{$checked:n,onClick:t=>{t.stopPropagation(),ne(e.path)},type:`button`,children:n&&(0,P.jsx)(Si,{size:8})}),(0,P.jsx)(Js,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,P.jsxs)(gc,{children:[(0,P.jsx)(_c,{children:e.name}),(0,P.jsx)(vc,{children:ie(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},se=e=>{Zs(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,P.jsxs)(rc,{$dragging:g,"data-tray":`true`,ref:x,style:{left:i.x,top:i.y},onDragEnter:se,onDragOver:se,onDrop:e=>{let{paths:t}=Qs(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,P.jsxs)(ic,{onPointerDown:C,onPointerMove:w,onPointerUp:T,children:[(0,P.jsxs)(ac,{children:[(0,P.jsx)(ra,{size:13}),p(`Tray`),(0,P.jsx)(oc,{children:te})]}),(0,P.jsxs)(sc,{onPointerDown:e=>e.stopPropagation(),children:[(0,P.jsx)(cc,{onClick:re,title:p(ee?`Select none`:`Select all`),type:`button`,children:p(ee?`None`:`All`)}),(0,P.jsx)(cc,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,P.jsx)(lc,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,P.jsx)(Ci,{size:10})})]})]}),(0,P.jsxs)(uc,{children:[(0,P.jsxs)(fc,{children:[p(`In this app`),(0,P.jsx)(oc,{children:e.length})]}),e.length===0&&(0,P.jsx)(dc,{children:p(`Drag files or folders here`)}),e.map(e=>O(e,!0)),t.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(fc,{$clipboard:!0,children:[p(`Clipboard`),(0,P.jsx)(oc,{children:t.length}),n&&(0,P.jsx)(pc,{children:p(`Cut`)})]}),t.map(e=>O(e,n))]})]}),(0,P.jsxs)(yc,{children:[(0,P.jsx)(bc,{$plain:!0,disabled:y.length===0,onClick:D,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,P.jsx)(bc,{disabled:m.size===0||!a,onClick:oe,type:`button`,children:p(`Move here`)}),(0,P.jsx)(bc,{$danger:!0,disabled:y.length===0,onClick:ae,type:`button`,children:p(`Remove`)})]})]})}var rc=_.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${La}
    ${Ka}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,ic=_.div`
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
`,ac=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,oc=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,sc=_.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,cc=_.button`
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
`,lc=_.button`
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
`,uc=_.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,dc=_.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,fc=_.div`
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
`,pc=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,mc=_.div`
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
`,hc=_.button`
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
`,gc=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,_c=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,vc=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,yc=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,bc=_.button`
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
`,xc={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function Sc(){return N.available?await N.request(`share.list`):xc}async function Cc(e,t){return N.available?await N.request(`share.add`,{path:e,mode:t}):xc}async function wc(e){return N.available?await N.request(`share.remove`,{id:e}):xc}async function Tc(e,t){return N.available?await N.request(`share.mode`,{id:e,mode:t}):xc}async function Ec(){return N.available?(await N.request(`share.peers`)).peers??[]:[]}async function Dc(){return N.available?(await N.request(`share.peers.refresh`)).peers??[]:[]}async function Oc(e,t){N.available&&await N.request(`share.pair.start`,{host:e,port:t})}async function kc(e,t){N.available&&await N.request(`share.pair.respond`,{requestId:e,accept:t})}async function Ac(e,t){N.available&&await N.request(`share.port`,{mode:t,port:e})}var jc=`yafm://share/`;function Mc(e){return e.toLowerCase().startsWith(jc)}function Nc(e){if(!Mc(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Pc(e,t,n=``){let r=`${jc}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Fc(e){let t=Nc(e);if(!t||!N.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await N.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Pc(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Pc(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Ic(e){let t=Nc(e);if(!t||!N.available)throw Error(`This shared file is only available in the desktop app.`);let n=await N.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Lc(e){await Se(await Ic(e))}var Rc=new Map,zc=new Set,Bc=0;function Vc(){Bc+=1;for(let e of zc)e()}function Hc(e,t){t?Rc.set(e,t):Rc.delete(e),Vc()}function Uc(e){return Rc.has(e)}function Wc(e,t,n){Rc.get(e)?.(t,n)}function Gc(e){return zc.add(e),()=>zc.delete(e)}function Kc(){return Bc}function qc(e){return(0,E.useSyncExternalStore)(Gc,Kc,Kc),{available:Uc(e),open:(t,n)=>Wc(e,t,n)}}function Jc(e){return[...Rc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function Yc(e){return(0,E.useSyncExternalStore)(Gc,Kc,Kc),{available:Jc(e).length>0,open:(t,n)=>{let r=Jc(e).at(-1);r&&Wc(r,t,n)}}}var Xc=60,Zc=300,Qc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],$c=new Set,el=`yafm.columnWidths`,tl=`yafm.reset-column-widths`,nl=64,rl=720,il=160,al=190,ol=120;function sl({listing:e,loading:n,error:r,find:i=xn,view:a,showImages:s,imageStripHeight:c=al,onImageStripHeight:l,onSort:u,onSetTags:d,onOpen:p,onOpenFile:m,showCheckboxes:h=!0,openOnSingleClick:g=!1,shortcuts:_=Ut,enableShortcuts:b=!0,refreshToken:x=0,onRefresh:S,onRename:ee,onClipboardChanged:te,cutPaths:ne=$c,onTransfer:re,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ie,favoritePaths:T,onExtractArchive:ae,onPaste:D,confirmDelete:oe=!1,previewVideoAudio:O=!1,previewVideoAutoplay:se=!1,showDetails:k=!0,onPreviewInfo:A,onActivate:j,groupOf:M,onGridScroll:ce,gridFooter:le,allowBackgroundMenu:N=!0,readOnly:ue=!1,onSelectionChange:de,onSelectionCountChange:fe,selectionMenuRequest:F,selectionMenuId:pe,singleSelect:L=!1,pendingRename:me=null,pendingRenameToken:he=0,selectMatchesToken:ge=0}){let R=I(),_e=Ln(),ve=(0,E.useRef)(null),ye=(0,E.useRef)(null),z=(0,E.useRef)(null),B=(0,E.useRef)(null),[be,xe]=(0,E.useState)(Zc),[Se,Ce]=(0,E.useState)({top:0,height:640}),we=(0,E.useRef)(null),V=(0,E.useRef)(null),[Te,Ee]=(0,E.useState)(null),[De,Oe]=(0,E.useState)(c),[ke,Ae]=(0,E.useState)(()=>new Set),[je,Me]=(0,E.useState)(()=>Hn(el)??{}),Ne=(0,E.useRef)(ke),H=(0,E.useRef)([]);Ne.current=ke,(0,E.useEffect)(()=>de?.([...ke]),[ke,de]),(0,E.useEffect)(()=>fe?.(ke.size),[ke,fe]),(0,E.useEffect)(()=>{let e=F;if(!e||e.token===Ie.current)return;Ie.current=e.token;let t=[...Ne.current];t.length!==0&&(Fe({x:e.x,y:e.y,paths:t,background:!1}),yt().then(Xe,()=>Xe(!1)))},[F]);let[Pe,Fe]=(0,E.useState)(null),Ie=(0,E.useRef)(0),[Le,Re]=(0,E.useState)(null),[ze,Be]=(0,E.useState)(null),[Ve,He]=(0,E.useState)(null),Ue=(0,E.useRef)(Ve);Ue.current=Ve;let We=(0,E.useRef)(0),Ge=(0,E.useRef)(j);Ge.current=j;let[Ke,qe]=(0,E.useState)(()=>{let e=Bn(`yafm.preview.width`,320);return e>=220?e:320}),Je=(0,E.useCallback)(e=>{qe(e),Vn(`yafm.preview.width`,e)},[]),[Ye,Xe]=(0,E.useState)(!1),Ze=(0,E.useCallback)((e,t)=>{let n=[...Ne.current];n.length!==0&&(Fe({x:e,y:t,paths:n,background:!1}),yt().then(Xe,()=>Xe(!1)))},[]);(0,E.useEffect)(()=>{if(pe)return Hc(pe,ke.size>0?Ze:null),()=>Hc(pe,null)},[pe,ke,Ze]),(0,E.useEffect)(()=>{Ae(new Set),He(null),Fe(null),V.current=null},[e?.path]),(0,E.useEffect)(()=>{Oe(c)},[c]),(0,E.useEffect)(()=>{Ae(new Set),He(null),V.current=null},[x]);let Qe=e=>{we.current={y:e.clientY,height:De},e.currentTarget.setPointerCapture(e.pointerId)},$e=e=>{let t=we.current;if(!t)return;let n=Math.max(ol,Math.round(window.innerHeight*.7));Oe(Math.min(n,Math.max(ol,t.height+t.y-e.clientY)))},et=e=>{we.current&&(we.current=null,e.currentTarget.releasePointerCapture(e.pointerId),l?.(De))},tt=()=>{Oe(al),l?.(al)},nt=i.query.length>0,rt=(0,E.useMemo)(()=>Qc.filter(e=>a.columns?.includes(e.id)),[a.columns]),it=a.columns?.includes(`linkTarget`)??!1,at=(0,E.useCallback)(e=>Math.min(rl,Math.max(nl,je[e.id]??e.width)),[je]),ot=(0,E.useMemo)(()=>`minmax(160px, 1fr) ${rt.map(e=>`${at(e)}px`).join(` `)}`.trim(),[rt,at]),st=(0,E.useRef)(null),ct=(0,E.useRef)(null),lt=()=>Math.floor(ct.current?.getBoundingClientRect().width??il),ut=e=>{let t=rt[0];t&&(e.preventDefault(),e.stopPropagation(),st.current={left:{id:t.id,start:at(t)},startX:e.clientX,nameStart:lt()})},dt=(e,t)=>{let n=rt[t],r=rt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),st.current={left:{id:n.id,start:at(n)},right:{id:r.id,start:at(r)},startX:e.clientX,nameStart:0})},ft=e=>Me(t=>{let n={...t};return delete n[e],Un(el,n),n});(0,E.useEffect)(()=>{let e=e=>{let t=st.current;if(!t)return;let n=e.clientX-t.startX;Me(e=>{if(!t.right){let r=Math.max(0,t.nameStart-il),i=Math.min(Math.min(rl,t.left.start+r),Math.max(nl,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(rl,Math.max(nl,t.left.start+n)),a=Math.min(Math.min(rl,r-nl),Math.max(Math.max(nl,r-rl),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{st.current&&(st.current=null,Me(e=>(Un(el,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,E.useEffect)(()=>{let e=()=>Me(()=>(Un(el,{}),{}));return window.addEventListener(tl,e),()=>window.removeEventListener(tl,e)},[]);let U=(0,E.useMemo)(()=>e?ul(e.entries.map(t=>{let n=t.isDirectory?Rn(_e,t.fullPath):void 0,r=n?.name||t.name;return{entry:t,place:n,label:r,ranges:nt?Sn(r,i):null,tags:e.tags[t.name]??[],cut:ne.has(t.fullPath)}}).filter(e=>!nt||i.mode===`dim`||e.ranges!==null),a,e,R):[],[e?.entries,e?.tags,a.sort===`size`||a.sort===`items`?e?.folderSizes:null,a.sort===`size`||a.sort===`items`?e?.counts:null,nt,i,_e,a.sort,a.sortDescending,R,ne]);H.current=U,(0,E.useEffect)(()=>{ge!==0&&Ae(new Set(H.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[ge]);let pt=Math.max(40,a.iconSize+20),mt=Math.max(0,Math.floor(Se.top/pt)-4),ht=Math.min(U.length,mt+Math.ceil(Se.height/pt)+10),gt=(0,E.useMemo)(()=>U.slice(mt,ht),[U,mt,ht]);(0,E.useEffect)(()=>{let e=B.current;if(!e||a.mode!==`list`)return;let t=()=>Ce(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[a.mode]),(0,E.useEffect)(()=>{Ce(e=>({...e,top:0})),B.current&&(B.current.scrollTop=0)},[e?.path]),(0,E.useEffect)(()=>{if(i.currentPath){if(a.mode===`list`){let e=U.findIndex(e=>e.entry.fullPath===i.currentPath),t=B.current;if(e<0||!t)return;let n=e*pt;(n<t.scrollTop||n+pt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ve.current?.scrollIntoView({block:`nearest`})}},[i.currentPath,a.mode,U,pt]);let _t=(0,E.useMemo)(()=>U.slice(0,be),[U,be]);(0,E.useEffect)(()=>{let e=ye.current;if(!e||e.length===0)return;let n=e.filter(e=>U.some(n=>t(n.entry.fullPath,e)));if(n.length===0)return;ye.current=null;let r=n[0],i=U.findIndex(e=>t(e.entry.fullPath,r));i>=0&&xe(e=>Math.max(e,i+Zc)),Ae(new Set(n)),V.current=r,a.mode===`list`&&B.current&&i>=0?B.current.scrollTop=Math.max(0,i*pt-B.current.clientHeight/2):requestAnimationFrame(()=>ve.current?.scrollIntoView({block:`nearest`}))},[U,pt,a.mode]),(0,E.useEffect)(()=>{xe(Zc)},[e?.path]),(0,E.useEffect)(()=>{if(!i.currentPath)return;let e=U.findIndex(e=>e.entry.fullPath===i.currentPath);e>=0&&xe(t=>Math.max(t,e+Zc))},[i.currentPath,U]);let bt=(0,E.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&xe(e=>Math.min(U.length,e+Zc))},[U.length]),xt=a.mode===`grid`,St=(0,E.useMemo)(()=>{if(!xt)return[];if(!M)return pl(_t,fl);let e=[],t=new Map;for(let n of _t){let r=M(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[_t,xt,M]),Dt=(0,E.useMemo)(()=>s?U.filter(e=>!e.entry.isDirectory&&Nn(e.entry.name)):[],[U,s]),Ot=Dt.length,kt=(0,E.useMemo)(()=>Dt.slice(0,Xc),[Dt]),Mt=(0,E.useMemo)(()=>s?pl(kt,dl):[],[kt,s]),Pt=(0,E.useMemo)(()=>U.map(e=>e.entry.fullPath),[U]),Ft=U.length>0&&ke.size>=U.length,It=ke.size>0&&!Ft,Lt=()=>{L||(Ft?W():Ae(new Set(Pt)))},Rt=e?.path??``,zt=(0,E.useCallback)((e,t)=>{if(L){V.current=t,Ae(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Ae(r=>{if(e.shiftKey&&V.current!==null){let e=Pt.indexOf(V.current),i=Pt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Pt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),V.current=t,e}return V.current=t,new Set([t])})},[Pt,L]),Bt=(0,E.useCallback)(e=>{L?(V.current=e,Ae(new Set([e]))):(V.current=e,Ae(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[L]),W=(0,E.useCallback)(()=>{V.current=null,Ae(new Set)},[]);(0,E.useEffect)(()=>{if(he===0||!me||We.current===he||!e?.entries.some(e=>e.fullPath===me))return;We.current=he,V.current=me,Ae(new Set([me])),He({path:me,value:v(me)});let t=U.findIndex(e=>e.entry.fullPath===me),n=B.current;if(!(t<0||!n)){if(a.mode===`list`){let e=t*pt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(me)}"]`)?.scrollIntoView({block:`nearest`})})}},[B,e,me,he,pt,U,a.mode]),(0,E.useEffect)(()=>{if(!Ve)return;let e=U.findIndex(e=>e.entry.fullPath===Ve.path),t=B.current;if(!(e<0||!t)){if(a.mode===`list`){let n=e*pt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ve.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[B,Ve,pt,U,a.mode]);let Ht=(0,E.useCallback)(()=>Fe(null),[]),Wt=(0,E.useCallback)((e,t)=>{e.isDirectory?p(e.fullPath,Kt(t)):m?.(e.fullPath,Kt(t))},[p,m]),Gt=(0,E.useCallback)((e,t,n)=>{Ee({entry:e,x:t,y:n})},[]),Jt=(0,E.useRef)(null),Yt=(0,E.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;tc(e,ke.has(n)?[...ke]:[n])},[ke]),Zt=(0,E.useCallback)(e=>{if(!Zs(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Jt.current=t?.dataset.directory===`true`?t.dataset.path??Rt:Rt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Rt]),Qt=(0,E.useCallback)(e=>{if(ue)return;let{paths:t,move:n}=Qs(e),r=Jt.current??Rt;Jt.current=null,t.length!==0&&re&&(e.preventDefault(),re(t,r,!e.ctrlKey&&n))},[Rt,re,ue]),$t=(0,E.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),ue||!t&&!N)return;let n=Ne.current;t&&!n.has(t)&&Ae(new Set([t])),t&&(V.current=t);let r=t?n.has(t)?[...n]:[t]:[];Fe({x:e.clientX,y:e.clientY,paths:r,background:!t}),yt().then(Xe,()=>Xe(!1))},[N,Rt]),en=(0,E.useCallback)(()=>S?.(),[S]),tn=(e,t)=>{V.current=e,Ae(new Set([e])),t&&He({path:e,value:v(e)}),en()},nn=Le&&(0,P.jsx)(Oo,{initialDirectory:Rt,initialName:Le.name,onCancel:()=>Re(null),onCompress:async e=>{let t=await Vt(Le.paths,e);return!t.ok||!t.path?(wa(t.error??R(`Could not create the archive.`)),!1):(tn(t.path,!1),!0)}}),rn=async(e,t=!1)=>{let n=e,r=t;if(e.some(Mc)){let t=[];for(let n of e)if(!Mc(n))t.push(n);else{if(H.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){wa(R(`Folders on a shared device cannot be copied yet.`));return}try{t.push(await Ic(n))}catch(e){wa(e instanceof Error?e.message:R(`The file could not be copied.`));return}}n=t,r=!1}await vt(n,r)&&(Xe(!0),te?.())},an=async e=>{if(!e)return;let t=await Ct(e);t.ok?(ye.current=t.created,en(),D?.()):wa(R(`Nothing on the clipboard could be pasted here.`))},on=async(e,t=!1)=>{if(!Rt)return;let n=e===null?await Et(Rt,t):await At(Rt,e);!n.ok||n.path===null?wa(n.error??R(`Could not create the item.`)):(V.current=n.path,Ae(new Set([n.path])),He({path:n.path,value:v(n.path)}),en())},sn=e=>{Ae(new Set([e.fullPath])),V.current=e.fullPath,He({path:e.fullPath,value:e.name})},cn=(0,E.useCallback)(e=>He(t=>t&&{...t,value:e}),[]),ln=(0,E.useCallback)(()=>He(null),[]),G=(0,E.useCallback)(async()=>{let e=Ue.current;if(He(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=H.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Tt(e.path,t);r.ok?(W(),r.path&&ee?.(e.path,r.path),en(),window.setTimeout(()=>en(),250)):wa(r.error??R(`Could not rename the entry.`))},[W,ee,en,R]),K=async(e,t=!1)=>{if((t||oe)&&!await un(e,t))return;let n=await wt(e,t);if(!n.ok&&n.needsPermanent){if(!await un(e,!0))return;n=await wt(e,!0)}if(n.ok)W(),en();else{if(n.cancelled)return;wa(n.error??R(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},un=(0,E.useCallback)((e,t)=>new Promise(n=>Be({paths:e,permanent:t,resolve:n})),[]),dn=(0,E.useCallback)(e=>{Be(t=>(t?.resolve(e),null))},[]);(0,E.useEffect)(()=>{if(!b||Pe)return;let e=e=>{if(Xt(e.target))return;Ge.current?.();let t=qt(e),n=[...ke],r=n.length===1?U.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Pt.length===0)return;e.preventDefault();let n=V.current&&Pt.includes(V.current)?V.current:ke.size===1?[...ke][0]:null,r=n?Pt.indexOf(n):-1,i=t===`home`?0:t===`end`?Pt.length-1:Math.max(0,Math.min(Pt.length-1,r+(t===`arrowdown`?1:-1))),a=Pt[i];Ae(new Set([a])),V.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===_.copy?i(()=>{n.length>0&&rn(n)}):t===_.cut?i(()=>{n.length>0&&rn(n,!0)}):t===_.paste?i(()=>void an(Rt)):t===_.delete?i(()=>{n.length>0&&K(n)}):t===_.deletePermanently?i(()=>{n.length>0&&K(n,!0)}):t===_.selectAll?i(()=>{Ae(new Set(Pt)),V.current=Pt[0]??null}):t===_.invertSelection?i(()=>{Ae(new Set(Pt.filter(e=>!ke.has(e)))),V.current=Pt[0]??null}):t===_.rename&&r?i(()=>void sn(r)):t===_.open&&r?i(()=>{r.isDirectory?p(r.fullPath):m?.(r.fullPath)}):t===_.newFolder||t===`f10`?i(()=>void on(null)):t===_.terminal?i(()=>void Nt(Rt)):t===_.properties&&i(()=>void jt(n.length>0?n:Rt?[Rt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Pt,rn,on,Rt,b,Pe,p,m,an,K,sn,U,ke,_]);let fn=ze&&(0,P.jsx)(Vo,{confirmLabel:ze.permanent?R(`Delete`):R(`Move`),danger:ze.permanent,message:ze.permanent?R(`Permanently delete {target}? This cannot be undone.`,{target:ze.paths.length===1?R(`this item`):R(`{count} items`,{count:ze.paths.length})}):R(`Move {target} to the recycle bin?`,{target:ze.paths.length===1?R(`this item`):R(`{count} items`,{count:ze.paths.length})}),onCancel:()=>dn(!1),onConfirm:()=>dn(!0),open:!0,title:ze.permanent?R(`Delete permanently`):R(`Move to the recycle bin`)}),q=(0,E.useMemo)(()=>{if(!e||ke.size===0)return null;let t=Pt.find(e=>ke.has(e));return t?U.find(e=>e.entry.fullPath===t)?.entry??null:null},[Pt,e,U,ke]),pn=(0,E.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:v(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:R(`Type`),value:R(`Folder`)},{label:R(`Location`),value:e.parent??`—`},{label:R(`Path`),value:e.path},{label:R(`Size`),value:f(t)},{label:R(`Items`),value:o(R,n,`1 item`,`{count} items`)},{label:R(`Modified`),value:`—`},{label:R(`Created`),value:`—`},{label:R(`Attributes`),value:`—`}]}},[e,R]),mn=(0,E.useMemo)(()=>{if(!q||!e)return null;let t=q.isDirectory?e.folderSizes[q.name]:void 0,n=e.tags[q.name]??[],r=q.name.lastIndexOf(`.`),i=r>0&&r<q.name.length-1?q.name.slice(r+1).toUpperCase():`—`;return{name:q.name,path:q.fullPath,isDirectory:q.isDirectory,size:q.size,modified:q.modified,created:q.created,fields:[{label:R(`Type`),value:gl(q,R)},...q.isEncrypted?[{label:R(`Encryption`),value:R(`Password required`)}]:[],{label:R(`Extension`),value:q.isDirectory?`—`:i},{label:R(`Location`),value:e.path},{label:R(`Full path`),value:q.fullPath},{label:R(`Size`),value:q.isDirectory?t===void 0?`—`:f(t):f(q.size)},...q.isDirectory?[{label:R(`Items`),value:`${e.counts[q.name]??`—`}`}]:[],{label:R(`Modified`),value:y(q.modified)},{label:R(`Created`),value:y(q.created)},{label:R(`Link status`),value:q.linkTarget==null?q.linkCount>1?R(`Hard link`):`—`:q.linkValid?`OK`:R(`Broken`)},...q.linkTarget?[{label:R(`Target`),value:q.linkTarget}]:[],...q.linkCount>1?[{label:R(`Links`),value:String(q.linkCount)}]:[],{label:R(`Attributes`),value:[q.isHidden?R(`Hidden`):``,q.isSystem?R(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:R(`Tags`),value:n.join(`, `)}]:[]]}},[e,q,R]),hn=Pe?.paths.length===1?Pe.paths[0]:null,gn=hn?U.find(e=>e.entry.fullPath===hn)?.entry:void 0,_n=gn?{path:gn.fullPath,isDirectory:gn.isDirectory}:null,vn=mn??pn,yn=(0,E.useRef)(A);yn.current=A,(0,E.useEffect)(()=>{yn.current?.(vn)},[A,vn]);let bn=k&&vn&&(0,P.jsx)(Qo,{info:vn,onWidth:Je,selectionNote:ke.size>1?o(R,ke.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:O,videoAutoplay:se,width:Ke});return r&&!e?(0,P.jsx)(bu,{children:(0,P.jsx)(Su,{children:r})}):!e&&!n?(0,P.jsx)(bu,{children:(0,P.jsx)(xu,{children:R(`Nothing selected.`)})}):a.mode===`grid`?(0,P.jsxs)(Ll,{onPointerDown:j,children:[(0,P.jsxs)(Rl,{children:[(0,P.jsxs)(Kl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||W()},onContextMenu:e=>$t(e),onDragOver:Zt,onDragStart:Yt,onDrop:Qt,onScroll:e=>{ce?.(e.currentTarget),bt(e.currentTarget)},children:[h&&U.length>0&&(0,P.jsxs)(Pl,{children:[(0,P.jsx)(Ml,{$checked:!L&&Ft,$partial:!L&&It,"aria-label":R(Ft?`Select none`:`Select all`),disabled:L,onClick:Lt,title:R(Ft?`Select none`:`Select all`),type:`button`,children:Ft?(0,P.jsx)(Si,{size:10}):It?(0,P.jsx)(Nl,{}):null}),(0,P.jsx)(`span`,{children:R(Ft?`Select none`:`Select all`)})]}),n&&!e?(0,P.jsx)(Zl,{$size:a.gridSize,children:(0,P.jsx)(Sl,{size:a.gridSize})}):(0,P.jsx)(wl,{counts:e?.counts,currentPath:nt?i.currentPath:null,groups:St,gridSize:a.gridSize,innerRef:ve,onContextMenu:$t,onOpen:p,onOpenFile:m,onRenameCancel:ln,onRenameChange:cn,onRenameCommit:G,onSelect:zt,onToggle:Bt,openOnSingleClick:g,renaming:Ve,searching:nt,selected:ke,showCheckboxes:h,showTarget:it}),!n&&e&&U.length===0&&(0,P.jsx)(yu,{children:(0,P.jsx)(xu,{children:r??(nt&&i.mode===`hide`?R(`No entries match the search.`):R(`This folder is empty.`))})}),le]}),Pe&&(0,P.jsx)(fo,{canPaste:Ye,directory:Rt,allowCompression:!0,menu:Pe,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ie,favoritePaths:T,onExtractArchive:ae,onArchiveCreated:tn,onClose:Ht,onCompressTo:(e,t)=>Re({paths:e,name:t}),onCopy:rn,onCreateFile:e=>void on(e),onCreateFolder:e=>void on(null,e),onDelete:K,onOpen:p,onOpenFile:m,onPaste:an,onRefresh:en,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&sn(t)},shortcuts:_,target:_n}),nn,fn]}),bn]}):(0,P.jsxs)(Ll,{onPointerDown:j,children:[(0,P.jsxs)(Rl,{children:[(0,P.jsxs)(zl,{onScroll:e=>{B.current&&B.current.scrollLeft!==e.currentTarget.scrollLeft&&(B.current.scrollLeft=e.currentTarget.scrollLeft)},ref:z,style:{gridTemplateColumns:ot},children:[(0,P.jsxs)(kl,{ref:ct,children:[h&&(0,P.jsx)(Ml,{$checked:!L&&Ft,$partial:!L&&It,"aria-label":R(Ft?`Select none`:`Select all`),disabled:L,onClick:e=>{e.stopPropagation(),Lt()},title:R(Ft?`Select none`:`Select all`),type:`button`,children:Ft?(0,P.jsx)(Si,{size:10}):It?(0,P.jsx)(Nl,{}):null}),(0,P.jsxs)(Bl,{onClick:()=>u(`name`),type:`button`,children:[R(`Name`),cl(a,`name`)]}),(0,P.jsx)(jl,{"aria-label":R(`Resize column`),onDoubleClick:()=>rt[0]&&ft(rt[0].id),onPointerDown:ut,role:`separator`})]}),rt.map((e,t)=>(0,P.jsxs)(Al,{children:[(0,P.jsxs)(Bl,{onClick:()=>u(e.id),type:`button`,children:[R(e.label),cl(a,e.id)]}),t<rt.length-1&&(0,P.jsx)(jl,{"aria-label":R(`Resize column`),onDoubleClick:()=>ft(e.id),onPointerDown:e=>dt(e,t),role:`separator`})]},e.id))]}),(0,P.jsxs)(Vl,{onClick:e=>{e.target===e.currentTarget&&W()},onContextMenu:e=>$t(e),onDragOver:Zt,onDragStart:Yt,onDrop:Qt,onScroll:e=>{z.current&&z.current.scrollLeft!==e.currentTarget.scrollLeft&&(z.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;Ce(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:B,children:[n&&!e?(0,P.jsx)(xl,{template:ot,columns:rt.length}):(0,P.jsxs)(P.Fragment,{children:[mt>0&&(0,P.jsx)(`div`,{style:{height:mt*pt}}),gt.map(t=>{let n=t.entry.fullPath;return(0,P.jsx)(El,{current:nt&&n===i.currentPath,dim:nt&&t.ranges===null,height:pt,iconSize:a.iconSize,innerRef:ve,listing:e,onContextMenu:$t,onOpen:Wt,onRenameCancel:ln,onRenameChange:cn,onRenameCommit:G,onSelect:zt,onTagEdit:Gt,onToggle:Bt,openOnSingleClick:g,renaming:Ve?.path===n?{value:Ve.value}:null,row:t,selected:ke.has(n),showCheckboxes:h,showTarget:it,template:ot,visible:rt},n)}),ht<U.length&&(0,P.jsx)(`div`,{style:{height:(U.length-ht)*pt}})]}),!n&&e&&U.length===0&&(0,P.jsx)(bu,{children:(0,P.jsx)(xu,{children:r??(nt&&i.mode===`hide`?R(`No entries match the search.`):R(`This folder is empty.`))})})]}),s&&Dt.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Hl,{onDoubleClick:tt,onPointerDown:Qe,onPointerMove:$e,onPointerUp:et,title:R(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(Ul,{style:{height:De},children:[(0,P.jsxs)(Wl,{children:[R(`Preview`),(0,P.jsx)(Gl,{children:Ot>Xc?`${kt.length} / ${Ot}`:Ot})]}),(0,P.jsx)(Kl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||W()},onContextMenu:e=>$t(e),children:(0,P.jsx)(wl,{counts:e?.counts,currentPath:nt?i.currentPath:null,groups:Mt,gridSize:a.gridSize,onContextMenu:$t,onOpen:p,onOpenFile:m,onSelect:zt,onToggle:Bt,openOnSingleClick:g,searching:nt,selected:ke,showCheckboxes:h,showTarget:it})})]})]}),Te&&e&&(0,P.jsx)(Ns,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>d?.(Te.entry.name,e,t),onClose:()=>Ee(null),tags:e.tags[Te.entry.name]??[],x:Te.x,y:Te.y}),Pe&&(0,P.jsx)(fo,{canPaste:Ye,directory:Rt,allowCompression:!0,menu:Pe,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ie,favoritePaths:T,onExtractArchive:ae,onArchiveCreated:tn,onClose:Ht,onCompressTo:(e,t)=>Re({paths:e,name:t}),onCopy:rn,onCreateFile:e=>void on(e),onCreateFolder:e=>void on(null,e),onDelete:K,onOpen:p,onOpenFile:m,onPaste:an,onRefresh:en,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&sn(t)},shortcuts:_,target:_n}),nn,fn]}),bn]})}function cl(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var ll=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function ul(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return gl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:ll.compare(String(r),String(i));return t.sortDescending?-o:o})}var dl=An.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Mn(t.entry.name)===e})),fl=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...dl.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function pl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function ml(e){return Math.max(24,Math.min(e-56,160))}var hl={file:`File`,folder:`Folder`,text:`Text file`,code:`source file`,image:`image`,video:`Video`,audio:`Audio`,archive:`archive`,pdf:`PDF`,executable:`Application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function gl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(hl[Ks(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function _l(e,t,n,r){switch(e){case`type`:return gl(t,r);case`size`:return yl(t,n.folderSizes);case`modified`:return y(t.modified);case`created`:return y(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function vl({name:e,ranges:t}){if(!t||t.length===0)return(0,P.jsx)(P.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,P.jsx)(vu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,P.jsx)(P.Fragment,{children:n})}function yl(e,t){if(!e.isDirectory)return f(e.size);let n=t[e.name];return n===void 0?`—`:f(n)}function bl({entry:e,size:t=18}){let n=I(),r=(0,E.useRef)(null),[i,a]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=dn(i?e.fullPath:null,e.isDirectory,t>32),s=q(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,P.jsxs)(Dl,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,P.jsx)(qs,{name:e.iconSource.slice(5),size:t}):s?(0,P.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,P.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,P.jsx)(ai,{size:t}):(0,P.jsx)(qs,{name:Ks(e.name),size:t}),e.isEncrypted&&(0,P.jsx)(Ol,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,P.jsx)(ga,{size:Math.max(8,Math.round(t*.52))})})]})}function xl({template:e,columns:t}){return(0,P.jsx)(P.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,P.jsxs)(Ql,{style:{gridTemplateColumns:e},children:[(0,P.jsxs)(tu,{children:[(0,P.jsx)($l,{style:{flexShrink:0,height:18,width:18}}),(0,P.jsx)($l,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,P.jsx)($l,{style:{width:t%2==0?44:92}},t))]},r))})}function Sl({size:e}){return(0,P.jsx)(P.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,P.jsxs)(fu,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,P.jsx)(pu,{children:(0,P.jsx)($l,{style:{height:e,width:e}})}),(0,P.jsx)(hu,{children:(0,P.jsx)($l,{style:{height:9,width:`${t}%`}})})]},n))})}var Cl=(0,E.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=I(),x=Ln(),S=!e.entry.isDirectory&&Nn(e.entry.name),ee=(0,E.useRef)(null),[te,ne]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(!S||te)return;let e=ee.current;if(!e)return;if(!(`IntersectionObserver`in window)){ne(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(ne(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,te]);let re=gn(S&&te?e.entry.fullPath:null,192,e.entry.modified),[C,w]=(0,E.useState)(!1),ie=S&&re!==null&&!C,T=e.entry.fullPath,ae=t=>{e.entry.isDirectory?v(T,Kt(t)):y?.(T,Kt(t))};return(0,P.jsxs)(fu,{$current:t,$dim:n,$image:ie,$selected:s,onClick:e=>{h(e,T),l&&ae(e)},onContextMenu:e=>_(e,T),onDoubleClick:e=>{l||ae(e)},ref:e=>{ee.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!u,children:[c&&(0,P.jsx)(Il,{$checked:s,onClick:e=>{e.stopPropagation(),g(T)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,P.jsx)(Si,{size:10})}),(0,P.jsx)(pu,{children:ie?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:re}):(0,P.jsx)(mu,{children:e.place&&x.useIcons?(0,P.jsx)(As,{place:e.place,size:r}):(0,P.jsx)(bl,{entry:e.entry,size:r})})}),(0,P.jsxs)(hu,{children:[u?(0,P.jsx)(Tl,{onCancel:()=>m?.(),onChange:e=>d?.(e),onCommit:()=>p?.(),value:u.value}):(0,P.jsx)(gu,{$broken:e.entry.linkValid===!1,children:(0,P.jsx)(vl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,P.jsxs)(ru,{title:b(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(ga,{size:9}),b(`Encrypted`)]}),e.cut&&(0,P.jsxs)(iu,{title:b(`This item is cut and will move when something is pasted.`),children:[(0,P.jsx)(la,{size:9}),b(`Cut`)]}),(0,P.jsx)(_u,{children:e.entry.isDirectory?i===void 0?gl(e.entry,b):b(`{type} · {count} items`,{type:gl(e.entry,b),count:i}):b(`{type} · {size}`,{type:gl(e.entry,b),size:f(e.entry.size)})}),a&&e.entry.linkTarget&&(0,P.jsxs)(ou,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,P.jsx)(_a,{size:9}),(0,P.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function wl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=I();return(0,P.jsx)(P.Fragment,{children:e.map(e=>(0,P.jsxs)(ql,{children:[(0,P.jsxs)(Jl,{children:[y(e.label),(0,P.jsx)(Yl,{children:e.rows.length}),(0,P.jsx)(Xl,{})]}),(0,P.jsx)(Zl,{$size:t,children:e.rows.map(e=>(0,P.jsx)(Cl,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:ml(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Tl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,P.jsx)(au,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var El=(0,E.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=I(),ee=Ln(),te=e.entry.fullPath;return(0,P.jsxs)(eu,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,te),o&&_(e.entry,t)},onContextMenu:e=>g(e,te),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":te,draggable:!p,children:[(0,P.jsxs)(tu,{children:[i&&(0,P.jsx)(Fl,{$checked:r,onClick:e=>{e.stopPropagation(),h(te)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,P.jsx)(Si,{size:10})}),e.place&&ee.useIcons?(0,P.jsx)(Dl,{children:(0,P.jsx)(As,{place:e.place,size:s})}):(0,P.jsx)(bl,{entry:e.entry,size:s}),p?(0,P.jsx)(Tl,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,P.jsx)(nu,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,P.jsx)(vl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,P.jsxs)(ru,{title:S(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(ga,{size:9}),S(`Encrypted`)]}),e.cut&&(0,P.jsxs)(iu,{title:S(`This item is cut and will move when something is pasted.`),children:[(0,P.jsx)(la,{size:9}),S(`Cut`)]}),a&&e.entry.linkTarget&&(0,P.jsxs)(ou,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,P.jsx)(_a,{size:9}),(0,P.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,P.jsx)(su,{children:t.id===`tags`?(0,P.jsx)(cu,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,P.jsx)(lu,{$color:t,$ink:Ms(t),children:e},e)}):(0,P.jsx)(uu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,P.jsx)(du,{children:S(`Broken`)}):_l(t.id,e.entry,d,S)},t.id))]})}),Dl=_.span`
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
`,Ol=_.span`
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
`,kl=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,Al=_.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,jl=_.span`
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
`,Ml=_.button`
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
`,Nl=_.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Pl=_.div`
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
`,Fl=_.button`
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
`,Il=_(Fl)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Ll=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Rl=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,zl=_.div`
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
`,Bl=_.button`
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
`,Vl=_.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Hl=_.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Ul=_.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Wl=_.div`
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
`,Gl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Kl=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,ql=_.section`
    & + & {
        margin-top: 22px;
    }
`,Jl=_.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Yl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Xl=_.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Zl=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Ql=_.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,$l=_.span`
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
`,eu=_.div`
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
`,tu=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,nu=_.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,ru=_.span`
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
`,iu=_.span`
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
`,au=_.input`
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
`,ou=_.span`
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
`,su=_.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,cu=_.button`
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
`,lu=_.span`
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
`,uu=_.span`
    color: var(--text-muted);
    font-size: 11px;
`,du=_.span`
    color: #fca5a5;
`,fu=_.div`
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
`,pu=_.div`
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
`,mu=_.span`
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
`,hu=_.div`
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
`,gu=_.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,_u=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,vu=_.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,yu=_.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,bu=_.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,xu=_.p`
    font-size: 13px;
    color: var(--text-muted);
`,Su=_.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Cu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,wu=`/assets/bloom-BpfZWiaG.mp4`,Tu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Eu=`/assets/drift-BRBSQL2_.mp4`,Du=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Ou=`/assets/ember-CtSz0YxR.mp4`,ku=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],Au=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],ju=[{id:`builtin:video:drift`,name:`Drift`,url:Eu,poster:Tu},{id:`builtin:video:ember`,name:`Ember`,url:Ou,poster:Du},{id:`builtin:video:bloom`,name:`Bloom`,url:wu,poster:Cu}],Mu=Au.map(e=>({...e,variants:ku.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Ru(zu(e.id,t))}))})),Nu=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>ku.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Ru(Bu(e.id,t))}))),Pu=new Map([...Mu.flatMap(e=>e.variants),...Nu].map(e=>[e.id,e])),Fu=new Map(ju.map(e=>[e.id,e]));function Iu(e){if(Pu.has(e))return Pu.get(e).url;if(Fu.has(e))return Fu.get(e).url;let t=e.split(`:`)[1];return t?Pu.get(`builtin:${t}:indigo`)?.url??null:null}function Lu(e){return Fu.has(e)}function Ru(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function zu(e,t){return e===`dunes`?qu(t):e===`tide`?Ju(t):Ku(t)}function Bu(e,t){return e===`skyline`?Hu(t):e===`orbit`?Uu(t):Vu(t)}function Vu({accent:e,secondary:t}){let n=Gu(t,`#05070f`,.86),r=Gu(e,`#0b1020`,.72),i=Gu(t,`#0a0f1d`,.66),a=Gu(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${Gu(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${Gu(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function Hu({accent:e,secondary:t}){let n=Gu(t,`#07040d`,.84),r=Gu(e,`#100716`,.7),i=Gu(e,`#08050e`,.82),a=Gu(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${Gu(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function Uu({accent:e,secondary:t}){let n=Gu(e,`#03050d`,.9),r=Gu(t,`#05030c`,.94),i=Gu(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${Gu(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${Gu(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${Gu(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${Gu(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function Wu(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function Gu(e,t,n){let[r,i,a]=Wu(e),[o,s,c]=Wu(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function Ku({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Gu(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${Gu(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${Gu(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${Gu(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function qu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${Gu(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${Gu(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${Gu(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${Gu(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${Gu(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${Gu(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${Gu(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function Ju({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Gu(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${Gu(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${Gu(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${Gu(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var Yu=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Xu(e){return Yu.test(e)}function Zu({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):C(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=vn(r),a=t?.startsWith(`builtin:`)?Iu(t):n??i,o=n===null?r===null?t!==null&&Lu(t):Xu(r):Xu(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,P.jsxs)(Qu,{"aria-hidden":!0,children:[o?(0,P.jsx)(ed,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,P.jsx)($u,{src:a,style:{filter:s}}),(0,P.jsx)(td,{})]})}var Qu=_.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,$u=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,ed=_.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,td=_.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function nd({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=I(),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(()=>Math.max(1,Math.ceil(t)));return(0,E.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,Ia.createPortal)((0,P.jsx)(rd,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,P.jsxs)(id,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(ad,{children:a(`Protected folder`)}),(0,P.jsx)(od,{children:a(`These paths are protected by the safety settings:`)}),(0,P.jsx)(sd,{children:e.map(e=>(0,P.jsxs)(cd,{children:[(0,P.jsx)(ld,{children:e.path}),(0,P.jsx)(ud,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,P.jsx)(dd,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,P.jsx)(fd,{children:a(`Nothing has been deleted.`)}),(0,P.jsx)(pd,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,P.jsxs)(md,{children:[(0,P.jsx)(hd,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,P.jsx)(gd,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var rd=_.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Za}
`,id=_.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ka}
`,ad=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,od=_.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,sd=_.div`
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
`,cd=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,ld=_.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,ud=_.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,dd=_.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,fd=_.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,pd=_.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,md=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,hd=_.button`
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
`,gd=_.button`
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
`;function _d(){let e=I(),[t,n]=(0,E.useState)(null),r=(0,E.useRef)(null),i=(0,E.useRef)(null);(0,E.useEffect)(()=>(Ca(e=>new Promise(t=>{r.current=t,n(e)})),()=>Ca(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,E.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Ia.createPortal)((0,P.jsx)(vd,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,P.jsxs)(yd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(bd,{children:e(`Notice`)}),(0,P.jsx)(xd,{children:t}),(0,P.jsx)(Sd,{children:(0,P.jsx)(Cd,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var vd=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Za}
`,yd=_.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ka}
`,bd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,xd=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Sd=_.div`
    display: flex;
    justify-content: flex-end;
`,Cd=_.button`
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
`;function wd(){let e=I(),[t,n]=(0,E.useState)(null),[r,i]=(0,E.useState)(``),a=(0,E.useRef)(null),o=(0,E.useRef)(null);(0,E.useEffect)(()=>(Ta((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Ta(null)),[]),(0,E.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Ia.createPortal)((0,P.jsx)(Td,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,P.jsxs)(Ed,{role:`dialog`,"aria-modal":`true`,children:[(0,P.jsx)(Dd,{children:e(`Archive password`)}),(0,P.jsx)(Od,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,P.jsx)(kd,{title:t.archive,children:t.archive}),(0,P.jsx)(Ad,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,P.jsxs)(jd,{children:[(0,P.jsx)(Md,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,P.jsx)(Nd,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var Td=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Za}
`,Ed=_.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ka}
`,Dd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Od=_.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,kd=_.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ad=_.input`
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
`,jd=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Md=_.button`
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
`,Nd=_(Md)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Pd({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h,onSelectMatches:g}){let _=I(),v=(0,E.useRef)(null),y=c??_(`Search this folder`);(0,E.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,P.jsxs)(Fd,{children:[(0,P.jsx)(ci,{}),(0,P.jsx)(Id,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Ld,{children:i===0?`0/0`:`${a+1}/${i}`}),g&&(0,P.jsx)(Rd,{disabled:i===0,onClick:g,title:_(`Select all matches`),type:`button`,children:(0,P.jsx)(Si,{size:12})}),(0,P.jsx)(Rd,{$chevron:!0,onClick:()=>b(u),title:_(`Previous match (Shift+Enter)`),type:`button`,children:(0,P.jsx)(mi,{size:12})}),(0,P.jsx)(Rd,{$chevron:!0,$down:!0,onClick:()=>b(d),title:_(`Next match (Enter)`),type:`button`,children:(0,P.jsx)(mi,{size:12})})]}),(0,P.jsx)(zd,{$on:n,onClick:()=>b(f),title:_(`Match case`),type:`button`,children:`Aa`}),(0,P.jsx)(zd,{$on:r,onClick:()=>b(p),title:_(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,P.jsx)(Bd,{$on:t===`hide`,onClick:()=>b(m),title:_(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:t===`hide`?(0,P.jsx)(Ti,{size:12}):(0,P.jsx)(wi,{size:12})}),(0,P.jsx)(Rd,{onClick:h,title:_(`Close search (Esc)`),type:`button`,children:(0,P.jsx)(Ci,{size:12})})]})}var Fd=_.div`
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
    ${Ya}
`,Id=_.input`
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
`,Ld=_.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Rd=_.button`
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
`,zd=_.button`
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
`,Bd=_(zd)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function Vd(e,t,n,r,i=[]){(0,E.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=Sn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function Hd({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=I(),a=(0,E.useRef)(null),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(null);return(0,E.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,E.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,E.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Ia.createPortal)((0,P.jsxs)(Ud,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Ts).map(n=>(0,P.jsx)(Wd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Ts[n](16)},n)),(0,P.jsx)(Wd,{onClick:async()=>{let e=await ba([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,P.jsx)(di,{size:13})}),r&&(0,P.jsx)(Wd,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,P.jsx)(Ci,{size:12})})]}),document.body)]})}var Ud=_.div`
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
    ${qa}
    transform-origin: top left;
`,Wd=_.button`
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
`;function Gd({source:e,poster:t}){let n=C(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=vn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??Iu(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,P.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,P.jsx)(`img`,{alt:``,src:a}):null}function Kd({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=I(),s=(0,E.useRef)(null),c=(0,E.useRef)(null),l=(0,E.useRef)(!1),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,E.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,E.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,E.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,P.jsx)(mf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,P.jsxs)(hf,{children:[(0,P.jsxs)(gf,{children:[(0,P.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,P.jsx)(Cf,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,P.jsx)(Ci,{size:12})})]}),(0,P.jsx)(_f,{children:o(`Drag the frame to choose the visible part.`)}),(0,P.jsxs)(vf,{children:[t?(0,P.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,P.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,P.jsx)(yf,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:m},children:(0,P.jsx)(bf,{})})]}),(0,P.jsxs)(xf,{children:[(0,P.jsx)(Sf,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,P.jsx)(Sf,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var qd=150,Jd=120,Yd=200,Xd=_.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Zd=_.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Qd=_.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${Yd}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Yd}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Yd*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Yd*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Yd*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Yd}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Yd*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Yd*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Yd*.18)}px),
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
`,$d=_.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${qd}px);
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
`,ef=_.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,tf=_.section`
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
`,nf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,rf=_.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,af=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,of=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,sf=_.input`
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
`,cf=_.button`
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
`,lf=_.div`
    position: relative;
    width: 132px;
    height: 72px;
`,uf=_.button`
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
`,df=_.button`
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
`,ff=_.span`
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
`,pf=_.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,mf=_.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,hf=_.div`
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
`,gf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,_f=_.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,vf=_.div`
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
`,yf=_.div`
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
`,bf=_.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,xf=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Sf=_.button`
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
`,Cf=_.button`
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
`,wf=_.button`
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
`,Tf=_.div`
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
`,Ef=_.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Df=_.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Of=_.button`
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
`,kf=_.div`
    position: relative;
    display: inline-flex;
`,Af=_.div`
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
`,jf=_.button`
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
`,Mf=_.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Nf=_.section`
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
`,Pf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Ff=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,If=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Lf=_.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,Rf=_.input`
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
`,zf=_.button`
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
`,Bf=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Vf=_.div`
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
`,Hf=_.span`
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
`,Uf=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Wf=_.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Gf=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Kf=_.button`
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
`,qf=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Jf=_.button`
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
`,Yf=_.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Xf=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Zf=_.div`
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
`,Qf=_.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,$f=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,ep=_.button`
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
`,tp=_.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,np=_.button`
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
`,rp=_.button`
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
`,ip=_.button`
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
`,ap=_.span`
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
`,op=_.button`
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
`,sp=_.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,cp=_.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,lp=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,up=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,dp=_.input`
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
`,fp=_.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,pp=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,mp=_.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hp=_.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,gp=_.button`
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
`;function _p({places:e,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:u,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:_,onSearchMatches:y,readOnly:b=!1,onPick:x,onSelectionChange:S,onAddToTray:ee,onAddFavorite:te,onRemoveFavorite:ne,favoritePaths:ie,onExtractArchive:T,settingsVersion:ae=0}){let D=I(),oe=Ln(),[O,se]=(0,E.useState)(!1),[k,A]=(0,E.useState)(null),j=k?.overviewBanner??null,M=j?.startsWith(`builtin:`)??!1,ce=j?.startsWith(`url:`)?j.slice(4):C(j)?j:null,le=M||ce?``:j??``,ue=M?``:ce?ce.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:le.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,de=M?Lu(j):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(ue),fe=vn(le.length>0?le:null,0,ue?`.${ue}`:``),F=j?Iu(j)??ce??fe:null,[pe,L]=(0,E.useState)(``),[me,he]=(0,E.useState)(null),[ge,R]=(0,E.useState)(!1),[_e,ve]=(0,E.useState)(null),[ye,z]=(0,E.useState)(null),[B,be]=(0,E.useState)(null),[Ce,we]=(0,E.useState)([]),[V,Te]=(0,E.useState)(null),[Ee,De]=(0,E.useState)(``),[Oe,ke]=(0,E.useState)(null),[je,Me]=(0,E.useState)(null),Ne=Yc(`overview`),[H,Pe]=(0,E.useState)(null),[Fe,Ie]=(0,E.useState)(null),Le=(0,E.useRef)(null),Re=(0,E.useRef)(null),ze=(0,E.useRef)(null),Be=(0,E.useRef)(null),Ve=(0,E.useRef)(null),He=Fe??k?.overviewBannerHeight??220,[Ge,Ke]=(0,E.useState)(0),[qe,Je]=(0,E.useState)(null),Xe=Math.min(1,Math.max(0,k?.overviewBannerOffset??.3)),Ze=He+Yd,Qe=qe&&Ge>0?qe.height*(Ge/qe.width):Ze,$e=Qe>0&&Qe<Ze+240?(Ze+240)/Qe:1,et=Math.max(1,Math.round(Ge*$e)),tt=Math.max(0,Qe*$e-Ze),nt=Math.min(Jd,tt/2,Math.max(20,He*.42)),rt=nt+Xe*Math.max(0,tt-nt*2),[at,ot]=(0,E.useState)(!1),st=(e,t=!1)=>x?(ke(e),Me({path:e,isDirectory:t}),S?.([e]),!0):!1,ct=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),ke(t),Me({path:t,isDirectory:n}),Pe({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,E.useEffect)(()=>(Hc(`overview`,je?(e,t)=>Pe({x:e,y:t,target:je}):null),()=>Hc(`overview`,null)),[je]);let lt=(e,t)=>c(e,t);(0,E.useEffect)(()=>{Ye().then(A,()=>A(null))},[ae]),(0,E.useEffect)(()=>{if(N.available)return Dc().then(we,()=>void 0),N.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&we(t.data.peers)})},[]),(0,E.useEffect)(()=>{let e=ze.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,E.useEffect)(()=>{if(M&&!de){Je({width:1920,height:1080});return}Je(null);let e=Ve.current;e?.complete&&e.naturalWidth>0&&Je({width:e.naturalWidth,height:e.naturalHeight})},[j,M,de]),(0,E.useEffect)(()=>{let e=Be.current;if(!e)return;let t=()=>Ke(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[k?.overviewBanner]),(0,E.useEffect)(()=>{if(!me)return;let e=()=>he(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||he(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[me]),(0,E.useEffect)(()=>{if(!ge)return;let e=()=>R(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[ge]);let ut=Ds(k),dt=ut.map(e=>e.id),ft=(0,E.useRef)(null),U=e=>me?.kind===`panel`&&me.id===e,pt=e=>me?.kind===`place`&&me.id===e;(0,E.useEffect)(()=>{if(!N.available)return;let e=ut.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return N.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>N.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[ut.map(e=>e.path??e.id).join(`|`),a]),Vd(ft,_??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let mt=async(e,t)=>{let n={...k?.placeIcons};t?n[e]=t:delete n[e],he(null),await bt({placeIcons:n}),l(await Ae())},ht=async(e,t)=>{let n={...k?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],z(null),await bt({placeNames:n}),l(await Ae())},gt=e=>{be(null),ve({drive:e,label:e.label||`Local Disk`})},_t=async()=>{if(!_e)return;let{drive:e,label:t}=_e;ve(null);let n=await xe(e.name,t.trim());n.ok?(be(null),h?.()):be(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},yt=k?.overviewColumns??1,bt=async e=>{if(!k)return;let t={...k,...e,overviewPanels:e.overviewPanels??dt,overviewHidden:[]};A(await it(t)),p?.()},xt=async()=>{await bt({overviewPanels:[...Ss],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),l(await Ae()),se(!1)},St=async()=>{let e=await ba([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=k?.overviewBanners??[];await bt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},Ct=async()=>{let e=pe.trim();if(!k||!C(e))return;let t=k.overviewBanners??[];L(``),await bt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},wt=()=>void bt({overviewBanner:null}),Tt=e=>void bt({overviewBanners:(k?.overviewBanners??[]).filter(t=>t!==e),...k?.overviewBanner===e||k?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Et=e=>{Le.current={y:e.clientY,height:He},e.currentTarget.setPointerCapture(e.pointerId)},Dt=e=>{let t=Le.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Re.current=n,Ie(n)},Ot=e=>{Le.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Re.current!==null&&(bt({overviewBannerHeight:Re.current}),Re.current=null)},kt=(e,t)=>{let n=dt.indexOf(e),r=n+t;if(n<0||r<0||r>=dt.length)return;let i=[...dt];[i[n],i[r]]=[i[r],i[n]],bt({overviewPanels:i})},At=(e,t)=>{let n={...k?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],bt({overviewTitles:n})},jt=(e,t)=>void bt({overviewViews:{...k?.overviewViews,[e]:t}}),Mt=e=>{let t=k?.overviewPinned??ut.filter(e=>e.pinned).map(e=>e.id);bt({overviewPinned:ut.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Nt=e=>{he(null);let t=t=>{let n={...t};return delete n[e],n},n=k?.overviewPinned??ut.filter(e=>e.pinned).map(e=>e.id);bt({overviewPanels:dt.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(k?.overviewTitles),overviewViews:t(k?.overviewViews),overviewIcons:t(k?.overviewIcons),panelPlaces:t(k?.panelPlaces)})},Pt=(e,t)=>{let n={...k?.overviewIcons};t?n[e]=t:delete n[e],he(null),bt({overviewIcons:n})},Ft=async e=>{if(!k)return;if(e===`folder`){let e=await ya();if(!e)return;let t=`folder:${e}`;dt.includes(t)||await bt({overviewPanels:[...dt,t]});return}if(e===`quick`){let e=2;for(;dt.includes(`quick:${e}`);)e+=1;await bt({overviewPanels:[...dt,`quick:${e}`]});return}let t=e;for(let n=2;dt.includes(t);n+=1)t=`${e}:${n}`;await bt({overviewPanels:[...dt,t]})},It=async n=>{let r=await ya();if(!r)return;if(n.id===`quick`){await bt({quickAccess:[...new Set([...e.map(e=>e.path),r])]}),l(await Ae());return}let i=n.places??[];i.some(e=>t(e,r))||await bt({panelPlaces:{...k?.panelPlaces,[n.id]:[...i,r]}})},Lt=async(n,r)=>{he(null),n.id===`quick`?(await bt({quickAccess:e.filter(e=>!t(e.path,r)).map(e=>e.path)}),l(await Ae())):await bt({panelPlaces:{...k?.panelPlaces,[n.id]:(n.places??[]).filter(e=>!t(e,r))}})},Rt=async(n,r,i)=>{if(t(r,i))return;let a=n.id===`quick`?e.map(e=>e.path):n.places??[],o=a.findIndex(e=>t(e,r)),s=a.findIndex(e=>t(e,i));if(o<0||s<0)return;let c=[...a],[u]=c.splice(o,1);c.splice(s,0,u),n.id===`quick`?(await bt({quickAccess:c}),l(await Ae())):await bt({panelPlaces:{...k?.panelPlaces,[n.id]:c}})},zt=(e,t)=>({draggable:O,onDragOver:e=>{O&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{O&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{O&&(n.preventDefault(),Rt(e,n.dataTransfer.getData(`text/plain`),t))}}),Bt=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:k?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??k?.placeIcons?.[n]??null}}),Vt=e=>{if(r.length===0)return(0,P.jsx)(cp,{children:D(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,P.jsx)(Bf,{children:t.map(e=>{let t=Rn(oe,e.path);return(0,P.jsxs)(Vf,{$plain:!1,$selected:Oe===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Kt(t)):Se(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,children:[(0,P.jsx)(Hf,{children:t&&oe.useIcons?(0,P.jsx)(As,{place:t,size:18}):(0,P.jsx)(Js,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(Uf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Wf,{children:e.path})]})]},e.path)})}):(0,P.jsx)(Gf,{children:t.map(e=>{let t=Rn(oe,e.path);return(0,P.jsxs)(Kf,{$selected:Oe===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Kt(t)):Se(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&oe.useIcons?(0,P.jsx)(As,{place:t,size:15}):(0,P.jsx)(Js,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,P.jsxs)(qf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Wf,{children:e.path})]})]},e.path)})})},W=e=>{let n=k?.favorites??[],r=async e=>{await bt({favorites:n.filter(t=>t.path!==e)})},i=async(e,r)=>{e&&!n.some(n=>t(n.path,e))&&await bt({favorites:[...n,{path:e,name:v(e)||e,isDirectory:r}]})},a=(e,t,n)=>{O||st(t,n)||(n?c(t,Kt(e)):Se(t))},o=O?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Jf,{$row:e.view===`list`,onClick:()=>void ba().then(e=>i(e,!1)),title:D(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,P.jsx)(di,{size:15}):(0,P.jsx)(Hf,{children:(0,P.jsx)(di,{size:15})}),e.view===`list`?(0,P.jsxs)(qf,{children:[(0,P.jsx)(`strong`,{children:D(`Add file`)}),(0,P.jsx)(Wf,{children:D(`Pin any file here`)})]}):(0,P.jsxs)(Uf,{children:[(0,P.jsx)(`strong`,{children:D(`Add file`)}),(0,P.jsx)(Wf,{children:D(`Pin any file here`)})]})]}),(0,P.jsxs)(Jf,{$row:e.view===`list`,onClick:()=>void ya().then(e=>i(e,!0)),title:D(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,P.jsx)(di,{size:15}):(0,P.jsx)(Hf,{children:(0,P.jsx)(di,{size:15})}),e.view===`list`?(0,P.jsxs)(qf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Wf,{children:D(`Pin any folder here`)})]}):(0,P.jsxs)(Uf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Wf,{children:D(`Pin any folder here`)})]})]})]}):null;return n.length===0&&!O?(0,P.jsx)(cp,{children:D(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,P.jsxs)(Bf,{children:[n.map(e=>{let t=Rn(oe,e.path);return(0,P.jsxs)(Vf,{$plain:O,$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&x?.(e.path),onContextMenu:t=>!O&&ct(t,e.path,e.isDirectory),title:e.path,children:[O&&(0,P.jsx)(rp,{onClick:t=>{t.stopPropagation(),r(e.path)},title:D(`Remove from favorites`),type:`button`,children:(0,P.jsx)(Ci,{size:11})}),(0,P.jsx)(Hf,{children:t&&oe.useIcons?(0,P.jsx)(As,{place:t,size:18}):(0,P.jsx)(Js,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(Uf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Wf,{children:e.path})]})]},e.path)}),o]}):(0,P.jsxs)(Gf,{children:[n.map(e=>{let t=Rn(oe,e.path);return(0,P.jsxs)(Kf,{$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&x?.(e.path),onContextMenu:t=>!O&&ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&oe.useIcons?(0,P.jsx)(As,{place:t,size:15}):(0,P.jsx)(Js,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,P.jsxs)(qf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Wf,{children:e.path})]}),O&&(0,P.jsx)(rp,{$inline:!0,onClick:t=>{t.stopPropagation(),r(e.path)},title:D(`Remove from favorites`),type:`button`,children:(0,P.jsx)(Ci,{size:11})})]},e.path)}),o]})},Ht=e=>{if(n.length===0)return(0,P.jsx)(cp,{children:D(`No drives are available.`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=_e?.drive.name===t.name,i=r?(0,P.jsx)(vp,{maxLength:32,onCancel:()=>ve(null),onChange:e=>ve({..._e,label:e}),onCommit:()=>void _t(),value:_e?.label??``}):(0,P.jsx)(P.Fragment,{children:d(t)}),a=!r&&O&&(0,P.jsx)(ip,{onClick:e=>{e.stopPropagation(),gt(t)},title:D(`Rename volume`),type:`button`,children:(0,P.jsx)(Hi,{size:11})}),o=(0,P.jsx)(Wf,{children:D(`{free} free of {total}`,{free:f(t.freeSpace),total:f(t.totalSize)})});return e.view===`grid`?(0,P.jsxs)(Vf,{$plain:!1,$selected:Oe===t.name,onClick:e=>{!r&&st(t.name,!0)||r||c(t.name,Kt(e))},onDoubleClick:()=>!r&&x?.(t.name),onContextMenu:e=>!r&&ct(e,t.name,!0),title:t.name,children:[(0,P.jsx)(Hf,{children:(0,P.jsx)(si,{size:18})}),(0,P.jsxs)(Uf,{children:[(0,P.jsxs)(`strong`,{children:[i,r&&re(t),a]}),o]})]},t.name):(0,P.jsxs)(Kf,{as:r?`div`:`button`,$selected:Oe===t.name,onClick:r?void 0:e=>{st(t.name,!0)||c(t.name,Kt(e))},onDoubleClick:r?void 0:()=>x?.(t.name),onContextMenu:r?void 0:e=>ct(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,P.jsx)(si,{size:18}),(0,P.jsxs)(qf,{children:[(0,P.jsxs)(`strong`,{children:[i,r&&re(t),a]}),o]}),(0,P.jsx)(Yf,{children:(0,P.jsx)(Xf,{$used:n,$tone:w(n)})})]},t.name)});return e.view===`grid`?(0,P.jsx)(Bf,{children:t}):(0,P.jsx)(Gf,{children:t})},Wt=()=>{let e=async e=>{Te(e.id);try{await Oc(e.host,e.port)}finally{Te(null)}},t=async()=>{let e=Ee.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Te(`manual`);try{await Oc(n,r)}finally{Te(null)}}};return(0,P.jsxs)(lp,{children:[(0,P.jsxs)(up,{children:[(0,P.jsx)(dp,{onChange:e=>De(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:D(`Address, e.g. 192.168.1.20:45701`),value:Ee}),(0,P.jsx)(gp,{disabled:V!==null||!Ee.includes(`:`),onClick:()=>void t(),type:`button`,children:D(V===`manual`?`Pairing…`:`Pair by address`)})]}),Ce.length===0&&(0,P.jsx)(cp,{children:D(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),Ce.map(t=>(0,P.jsxs)(fp,{children:[(0,P.jsxs)(pp,{children:[(0,P.jsx)(na,{size:14}),(0,P.jsx)(mp,{title:t.host,children:t.name}),(0,P.jsx)(hp,{$online:t.online,children:t.paired?t.online?D(`Paired`):D(`Offline`):D(`Not paired`)}),!t.paired&&t.online&&(0,P.jsx)(gp,{disabled:V===t.id,onClick:()=>void e(t),type:`button`,children:V===t.id?D(`Pairing…`):D(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,P.jsx)(Wf,{children:D(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,P.jsxs)(Kf,{onClick:n=>c(Pc(t.id,e.id),Kt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,P.jsx)(na,{size:14}),(0,P.jsxs)(qf,{children:[(0,P.jsx)(`strong`,{children:e.name}),(0,P.jsx)(Wf,{children:t.name})]}),(0,P.jsx)(ia,{size:12})]},e.id))]},t.id))]})},Gt=e=>{switch(e.kind){case`share`:return Wt();case`favorites`:return W(e);case`quick`:{let t=Bt(e);return!O&&t.length===0?(0,P.jsx)(cp,{children:D(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,P.jsxs)(Bf,{children:[t.map(t=>(0,P.jsxs)(Vf,{$plain:O,$selected:Oe===t.path,...zt(e,t.path),onClick:e=>{!O&&!st(t.path,!0)&&c(t.path,Kt(e))},onDoubleClick:()=>!O&&x?.(t.path),onContextMenu:e=>!O&&ct(e,t.path,!0),title:t.path,children:[O&&(0,P.jsx)(rp,{onClick:n=>{n.stopPropagation(),Lt(e,t.path)},title:D(`Remove from Quick access`),type:`button`,children:(0,P.jsx)(Ci,{size:11})}),(0,P.jsxs)(tp,{children:[O?(0,P.jsx)(np,{onClick:e=>{e.stopPropagation(),he(pt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,P.jsx)(Hf,{children:(0,P.jsx)(As,{place:t})})}):(0,P.jsx)(Hf,{children:(0,P.jsx)(As,{place:t})}),pt(t.path)&&(0,P.jsx)(Hd,{onPick:e=>void mt(t.path,e),value:k?.placeIcons?.[t.path]??t.icon})]}),(0,P.jsxs)(Uf,{children:[ye?.path===t.path?(0,P.jsx)(`strong`,{children:(0,P.jsx)(vp,{onCancel:()=>z(null),onChange:e=>z({path:t.path,name:e}),onCommit:()=>void ht(t.path,ye?.name??``),value:ye?.name??``})}):(0,P.jsxs)(`strong`,{children:[t.name,O&&(0,P.jsx)(ip,{onClick:e=>{e.stopPropagation(),he(null),z({path:t.path,name:t.name})},title:D(`Rename folder`),type:`button`,children:(0,P.jsx)(Hi,{size:11})})]}),(0,P.jsx)(Wf,{children:t.path})]})]},t.path)),O&&(0,P.jsxs)(Jf,{onClick:()=>void It(e),title:D(`Pin a folder here`),type:`button`,children:[(0,P.jsx)(Hf,{children:(0,P.jsx)(di,{size:15})}),(0,P.jsxs)(Uf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Wf,{children:D(`Pin a directory here`)})]})]})]}):(0,P.jsxs)(Gf,{children:[t.map(t=>(0,P.jsxs)(Kf,{$selected:Oe===t.path,...zt(e,t.path),onClick:e=>{!O&&!st(t.path,!0)&&c(t.path,Kt(e))},onDoubleClick:()=>!O&&x?.(t.path),onContextMenu:e=>!O&&ct(e,t.path,!0),title:t.path,type:`button`,children:[(0,P.jsxs)(tp,{children:[O?(0,P.jsx)(np,{onClick:e=>{e.stopPropagation(),he(pt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,P.jsx)(As,{place:t,size:15})}):(0,P.jsx)(As,{place:t,size:15}),pt(t.path)&&(0,P.jsx)(Hd,{onPick:e=>void mt(t.path,e),value:k?.placeIcons?.[t.path]??t.icon})]}),(0,P.jsxs)(qf,{children:[ye?.path===t.path?(0,P.jsx)(`strong`,{children:(0,P.jsx)(vp,{onCancel:()=>z(null),onChange:e=>z({path:t.path,name:e}),onCommit:()=>void ht(t.path,ye?.name??``),value:ye?.name??``})}):(0,P.jsxs)(`strong`,{children:[t.name,O&&(0,P.jsx)(ip,{onClick:e=>{e.stopPropagation(),he(null),z({path:t.path,name:t.name})},title:D(`Rename folder`),type:`button`,children:(0,P.jsx)(Hi,{size:11})})]}),(0,P.jsx)(Wf,{children:t.path})]}),O&&(0,P.jsx)(rp,{$inline:!0,onClick:n=>{n.stopPropagation(),Lt(e,t.path)},title:D(`Remove from Quick access`),type:`button`,children:(0,P.jsx)(Ci,{size:11})})]},t.path)),O&&(0,P.jsxs)(Jf,{$row:!0,onClick:()=>void It(e),title:D(`Pin a folder here`),type:`button`,children:[(0,P.jsx)(di,{size:15}),(0,P.jsxs)(qf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Wf,{children:D(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,P.jsx)(yp,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:x,onSelectionChange:S,version:s});case`recent`:return Vt(e);case`drives`:return Ht(e);default:return(0,P.jsx)(bp,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:x,onSelectionChange:S,openOnSingleClick:k?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:k?.showCheckboxes??!0,visibilityVersion:g})}};return(0,P.jsxs)(Xd,{$flush:!!k?.overviewBanner,ref:ze,children:[!b&&(0,P.jsxs)(Tf,{$overlay:!!k?.overviewBanner,children:[(0,P.jsx)(Ef,{role:`group`,title:D(`Columns`),children:[1,2,3,4,5].map(e=>(0,P.jsx)(Df,{$active:yt===e,onClick:()=>void bt({overviewColumns:e}),title:o(D,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),O&&(0,P.jsxs)(kf,{children:[(0,P.jsxs)(Of,{onClick:()=>R(e=>!e),onPointerDown:e=>e.stopPropagation(),title:D(`Add a panel`),type:`button`,children:[(0,P.jsx)(di,{size:12}),D(`Add panel ▾`)]}),ge&&(0,P.jsx)(Af,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,P.jsx)(jf,{onClick:()=>{R(!1),Ft(e)},type:`button`,children:D(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),O&&(0,P.jsxs)(Of,{onClick:()=>void xt(),title:D(`Put every panel back the way the app ships it`),type:`button`,children:[(0,P.jsx)(ui,{size:12}),D(`Restore default panels`)]}),Ne.available&&(0,P.jsx)(zf,{onClick:e=>Ne.open(e.clientX,e.clientY),title:D(`Selection menu`),type:`button`,children:(0,P.jsx)(ha,{size:14})}),(0,P.jsxs)(Of,{onClick:()=>{se(e=>!e),R(!1),he(null),z(null),ve(null)},title:D(O?`Done`:`Edit`),type:`button`,children:[O?(0,P.jsx)(Si,{size:13}):(0,P.jsx)(Hi,{size:13}),D(O?`Done`:`Edit`)]})]}),B&&(0,P.jsx)(sp,{children:B}),k?.overviewBanner&&(0,P.jsxs)(Zd,{ref:Be,style:{height:`${He}px`,"--banner-image-width":`${et}px`,"--banner-image-shift":`${rt}px`,"--banner-travel":`${nt}px`,"--banner-overlap":`0px`},children:[(0,P.jsx)(Qd,{children:de?(0,P.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Je({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:F??void 0}):(0,P.jsx)(`img`,{alt:``,onLoad:e=>{let t=M?1920:e.currentTarget.naturalWidth||1920,n=M?1080:e.currentTarget.naturalHeight||1080;Je({width:t,height:n})},ref:Ve,src:F??void 0})}),O&&(0,P.jsx)($d,{onDoubleClick:()=>{Re.current=null,Ie(null),bt({overviewBannerHeight:220})},onPointerCancel:Ot,onPointerDown:Et,onPointerMove:Dt,onPointerUp:Ot,title:D(`Drag to resize; double-click to reset`)})]}),(0,P.jsxs)(ef,{$offset:k?.overviewBanner?100:0,children:[O&&(0,P.jsxs)(tf,{children:[(0,P.jsxs)(nf,{children:[(0,P.jsx)(rf,{children:D(`Banners`)}),k?.overviewBanner&&(0,P.jsxs)(Of,{onClick:()=>ot(!0),title:D(`Adjust framing…`),type:`button`,children:[(0,P.jsx)(Hi,{size:12}),D(`Adjust framing…`)]})]}),(0,P.jsxs)(af,{children:[(0,P.jsx)(lf,{children:(0,P.jsx)(uf,{$active:!k?.overviewBanner,onClick:wt,title:D(`No banner`),type:`button`,children:(0,P.jsxs)(pf,{children:[(0,P.jsx)(Ci,{size:16}),(0,P.jsx)(`span`,{children:D(`No banner`)})]})})}),Nu.map(e=>(0,P.jsx)(lf,{children:(0,P.jsx)(uf,{$active:k?.overviewBanner===e.id,onClick:()=>void bt({overviewBanner:e.id}),title:`${D(e.concept)} · ${D(e.preset)}`,type:`button`,children:(0,P.jsx)(Gd,{poster:e.url,source:e.id})})},e.id)),ju.map(e=>(0,P.jsx)(lf,{children:(0,P.jsxs)(uf,{$active:k?.overviewBanner===e.id,onClick:()=>void bt({overviewBanner:e.id}),title:D(e.name),type:`button`,children:[(0,P.jsx)(Gd,{poster:e.poster,source:e.id}),(0,P.jsx)(ff,{children:(0,P.jsx)(Ai,{size:11})})]})},e.id)),(k?.overviewBanners??[]).map(e=>(0,P.jsxs)(lf,{children:[(0,P.jsx)(uf,{$active:k?.overviewBanner===e||k?.overviewBanner===`url:${e}`,onClick:()=>void bt({overviewBanner:C(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,P.jsx)(Gd,{source:e})}),(0,P.jsx)(df,{onClick:()=>Tt(e),title:D(`Remove`),type:`button`,children:(0,P.jsx)(Ci,{size:10})})]},e)),(0,P.jsxs)(wf,{onClick:()=>void St(),title:D(`Add banner…`),type:`button`,children:[(0,P.jsx)(di,{size:18}),(0,P.jsx)(`span`,{children:D(`Add banner…`)})]})]}),(0,P.jsxs)(of,{children:[(0,P.jsx)(sf,{onChange:e=>L(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ct()},placeholder:`https://…`,value:pe}),(0,P.jsx)(cf,{disabled:!C(pe),onClick:()=>void Ct(),type:`button`,children:D(`Add URL`)})]})]}),(0,P.jsx)(Mf,{ref:ft,$columns:yt,children:ut.map(e=>{let t=dt.indexOf(e.id);return(0,P.jsxs)(Nf,{children:[(0,P.jsxs)(Pf,{children:[(0,P.jsxs)(Ff,{children:[(0,P.jsxs)(tp,{children:[O?(0,P.jsx)(np,{onClick:()=>he(U(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,P.jsx)(ks,{panel:e,size:15})}):(0,P.jsx)(ks,{panel:e,size:15}),U(e.id)&&(0,P.jsx)(Hd,{onPick:t=>Pt(e.id,t),value:e.icon})]}),O?(0,P.jsx)(Rf,{defaultValue:e.title,onBlur:t=>At(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,P.jsx)(Lf,{children:D(e.title)})]}),(0,P.jsxs)(If,{children:[!O&&e.kind===`recent`&&(0,P.jsx)(Of,{onClick:()=>void Ue().then(u),title:D(`Clear`),type:`button`,children:D(`Clear`)}),!O&&e.kind===`frequent`&&(0,P.jsx)(Of,{onClick:()=>void We().then(()=>m?.()),title:D(`Clear the frequent list`),type:`button`,children:D(`Clear`)}),!O&&(e.kind===`home`||e.kind===`folder`)&&(0,P.jsx)(Of,{onClick:()=>c(e.path??a),title:D(`Open folder`),type:`button`,children:D(`Open`)}),O&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(zf,{$active:e.pinned,onClick:()=>Mt(e.id),title:e.pinned?D(`Unpin from the sidebar`):D(`Pin to the sidebar`),type:`button`,children:(0,P.jsx)(gi,{size:12})}),(0,P.jsx)(zf,{$active:e.view===`list`,onClick:()=>jt(e.id,`list`),title:D(`List`),type:`button`,children:(0,P.jsx)(_i,{size:13})}),(0,P.jsx)(zf,{$active:e.view===`grid`,onClick:()=>jt(e.id,`grid`),title:D(`Grid`),type:`button`,children:(0,P.jsx)(vi,{size:13})}),(0,P.jsx)(zf,{disabled:t===0,onClick:()=>kt(e.id,-1),title:D(`Move up`),type:`button`,children:(0,P.jsx)(li,{size:12})}),(0,P.jsx)(zf,{disabled:t===dt.length-1,onClick:()=>kt(e.id,1),title:D(`Move down`),type:`button`,children:(0,P.jsx)(li,{size:12})}),(0,P.jsx)(zf,{onClick:()=>Nt(e.id),title:D(`Remove panel`),type:`button`,children:(0,P.jsx)(Ci,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Gt(e):(0,P.jsx)(Qf,{children:Gt(e)})]},e.id)})})]}),at&&F&&(0,P.jsx)(Kd,{height:He,offset:Xe,onCancel:()=>ot(!1),onSave:e=>{bt({overviewBannerOffset:e}),ot(!1)},source:F,video:de}),H&&(0,P.jsx)(fo,{directory:a,menu:{x:H.x,y:H.y,paths:[H.target.path]},onClose:()=>Pe(null),onCopy:(e,t)=>void vt(e,t),onAddToTray:ee,onAddFavorite:te,onRemoveFavorite:ne,favoritePaths:ie,onExtractArchive:T,onOpen:lt,onOpenFile:e=>x?x(e):void Se(e),shortcuts:Ut,target:H.target})]})}function vp({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=I();return(0,P.jsxs)(ap,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,P.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,P.jsx)(op,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,P.jsx)(Ci,{size:11})}),(0,P.jsx)(op,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,P.jsx)(Si,{size:12})})]})}function yp({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=I(),[c,l]=(0,E.useState)(null),[u,d]=(0,E.useState)(null),f=Ln(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,E.useEffect)(()=>{Ve().then(l,()=>l([]))},[a]),!c)return(0,P.jsx)(cp,{children:s(`Reading…`)});if(c.length===0)return(0,P.jsx)(cp,{children:s(`Folders you open often show up here.`)});let m=e=>o(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,P.jsx)(Bf,{children:c.map(e=>{let i=Rn(f,e.path);return(0,P.jsxs)(Vf,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Kt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,P.jsx)(Hf,{children:i&&f.useIcons?(0,P.jsx)(As,{place:i,size:18}):(0,P.jsx)(Js,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(Uf,{children:[(0,P.jsx)(`strong`,{children:i?.name||e.name}),(0,P.jsx)(Wf,{children:m(e)})]})]},e.path)})}):(0,P.jsx)(Gf,{children:c.map(e=>{let i=Rn(f,e.path);return(0,P.jsxs)(Kf,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Kt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,P.jsx)(As,{place:i,size:15}):(0,P.jsx)(Js,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,P.jsxs)(qf,{children:[(0,P.jsx)(`strong`,{children:i?.name||e.name}),(0,P.jsx)(Wf,{children:m(e)})]})]},e.path)})})}function bp({path:e,mode:n,onOpen:r,onContextMenu:i,onPick:a,onSelectionChange:o,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:l,visibilityVersion:u}){let d=I(),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=Ln();return(0,E.useEffect)(()=>{e&&(p(null),Ce(e).then(p,()=>p(null)))},[e,u]),(0,E.useEffect)(()=>{if(N.available)return N.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Ce(e,!1).then(p,()=>void 0)})},[e]),f?n===`list`?(0,P.jsx)(Zf,{children:(0,P.jsx)(sl,{error:null,listing:f,loading:!1,onOpen:a??r,onOpenFile:a??(e=>void Se(e)),onRefresh:()=>void Ce(e,!1).then(p,()=>void 0),onRename:(e,n)=>p(r=>r&&{...r,entries:r.entries.map(r=>t(r.fullPath,e)?{...r,name:v(n),fullPath:n}:r)}),onSelectionChange:o,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:l,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...B,columns:be.columns??[]}})}):(0,P.jsx)(Qf,{children:f.entries.length===0?(0,P.jsx)(cp,{children:d(`This folder is empty.`)}):(0,P.jsx)($f,{children:f.entries.map(e=>{let t=Rn(g,e.fullPath);return(0,P.jsxs)(ep,{$selected:m===e.fullPath,onClick:t=>{a?(h(e.fullPath),o?.([e.fullPath])):e.isDirectory?r(e.fullPath,Kt(t)):Se(e.fullPath)},onDoubleClick:()=>a?.(e.fullPath),onContextMenu:t=>i?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&g.useIcons?(0,P.jsx)(As,{place:t,size:16}):(0,P.jsx)(Js,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,P.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,P.jsx)(cp,{children:d(`Reading…`)})}var xp=`yafm://`,Sp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Cp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function wp(e){return`${xp}${e===`home`?`overview`:e}`}function Tp(e){return Cp(e)?Sp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Ep(e){let t=e.trim();if(t.length===0)return null;if(!Cp(t))return t;let n=Sp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?wp(n):null}function Dp({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=I(),s=Ln(),[c,l]=(0,E.useState)(!1),[u,d]=(0,E.useState)(``),[f,p]=(0,E.useState)([]),[m,h]=(0,E.useState)(0),[g,_]=(0,E.useState)(null),[v,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(null),S=(0,E.useRef)(null),ee=(0,E.useRef)(null),te=(0,E.useRef)(0);(0,E.useEffect)(()=>{if(!Mc(e)){x(null);return}let t=Nc(e);if(!t){x(null);return}let n=!0;return Ec().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);x({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&x(null)),()=>{n=!1}},[e]),(0,E.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,E.useEffect)(()=>{r&&r!==te.current&&(te.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,E.useEffect)(()=>{c&&S.current?.select()},[c]),(0,E.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let ne=()=>{d(e.replace(/\\/g,`/`)),l(!0)},re=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,E.useEffect)(()=>{if(!c){p([]);return}let e=jp(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{Ce(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let C=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,E.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=ee.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,P.jsxs)(Lp,{onPointerDown:e=>e.stopPropagation(),ref:ee,children:[(0,P.jsxs)(Vp,{children:[(0,P.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?C(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):re(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:S,spellCheck:!1,value:u}),(0,P.jsx)(Hp,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,P.jsx)(Ci,{size:12})}),(0,P.jsx)(Hp,{$apply:!0,onClick:re,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,P.jsx)(Si,{size:14})})]}),f.length>0&&g&&(0,Ia.createPortal)((0,P.jsx)(Rp,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,P.jsxs)(zp,{$active:t===m,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,P.jsx)(Js,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,P.jsx)(Bp,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:Op(e,b)??Ap(e,s.places);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Mp,{onClick:ne,title:o(`Click to type a path`),children:w.map((t,n)=>(0,P.jsxs)(Np,{$last:n===w.length-1,children:[n>0&&(0,P.jsx)(Fp,{children:(0,P.jsx)(mi,{size:9})}),(0,P.jsxs)(Ip,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,P.jsx)(Pp,{children:(0,P.jsx)(As,{place:t.place,size:13})}):t.icon&&(0,P.jsx)(Pp,{children:t.icon}),t.label]})]},t.path))}),v&&(0,P.jsx)($a,{items:[{label:o(`Open`),icon:(0,P.jsx)(pi,{size:14}),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),icon:(0,P.jsx)(di,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`Copy as path`),icon:(0,P.jsx)(ca,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...Cp(v.path)?[{label:o(`Open with…`),icon:(0,P.jsx)(Pi,{size:14}),onSelect:()=>void Mt(v.path)},{label:o(`Properties`),icon:(0,P.jsx)(hi,{size:14}),onSelect:()=>void jt([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function Op(e,t){let n=Nc(e);if(!n)return null;let r=Pc(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,P.jsx)(na,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function kp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Ap(e,n){let r=kp(e),i=-1,a=null;for(let e of Object.values(n)){if(e.name.trim().length===0)continue;let n=r.findIndex(n=>t(n.path,e.path));n>i&&(i=n,a=e)}return a&&i>=0&&r.splice(0,i+1,{label:a.name,path:r[i].path,place:a}),r}function jp(e){if(Cp(e)||Mc(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Mp=_.div`
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
`,Np=_.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Pp=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Fp=_.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Ip=_.button`
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
`,Lp=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Rp=_.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${La}
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
`,zp=_.button`
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
`,Bp=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vp=_.div`
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
`,Hp=_.button`
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
`,Up=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,P.jsx)(`path`,{d:`M4 4v6h6`})]});function Wp({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,showDetails:i=!0,onShowDetails:a,videoAudio:s=!1,videoAutoplay:c=!1,platform:l}){let u=I(),d=qc(`recycle`),p=l===`windows`,[m,h]=(0,E.useState)([]),[g,_]=(0,E.useState)([]),[v,b]=(0,E.useState)(!1),[x,S]=(0,E.useState)(null),[ee,te]=(0,E.useState)(!0),[ne,re]=(0,E.useState)(!1),[C,w]=(0,E.useState)(null),[ie,T]=(0,E.useState)(!1),[ae,D]=(0,E.useState)(()=>new Set),[oe,O]=(0,E.useState)(null),[se,k]=(0,E.useState)(()=>{let e=Hn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[A,j]=(0,E.useState)(null),[M,ce]=(0,E.useState)(null),[le,N]=(0,E.useState)(()=>{let e=Bn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),ue=(0,E.useRef)(null),de=e=>{N(e),Vn(`yafm.recycle.preview.width`,e)},fe=(0,E.useCallback)(async()=>{te(!0),w(null);try{h(await Me(ie))}catch(e){w(e instanceof Error?e.message:String(e))}finally{te(!1)}},[ie]),F=(0,E.useCallback)(async()=>{try{h(await Me(ie))}catch{}},[ie]);(0,E.useEffect)(()=>{fe()},[fe]),(0,E.useEffect)(()=>{let e=window.setInterval(()=>void F(),1e4);return()=>window.clearInterval(e)},[F]),(0,E.useEffect)(()=>{ie||(_([]),b(!1),S(null))},[ie]),(0,E.useEffect)(()=>{D(e=>{let t=new Set(m.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[m]);let pe=(0,E.useMemo)(()=>{let e=new Set(m.map(e=>e.id));return[...m,...g.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Gp(e,t,se.column);return se.descending?-n:n})},[m,g,se]),L=(0,E.useMemo)(()=>!t?.open||t.query.trim().length===0?pe:pe.filter(e=>kn(e.name,t)||kn(e.originalPath,t)),[pe,t?.open,t?.query,t?.matchCase,t?.regex]),me=(0,E.useRef)(null);Vd(me,t??null,`[data-search-block]`,n??(()=>void 0),[pe]),(0,E.useEffect)(()=>{D(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,E.useEffect)(()=>{r&&D(new Set(L.map(e=>e.id)))},[r]);let he=(0,E.useMemo)(()=>pe.filter(e=>ae.has(e.id)),[pe,ae]),ge=he.filter(e=>e.removable&&!e.isOrphan),R=he.filter(e=>e.removable),_e=(e,t)=>{let n=t.ctrlKey||t.metaKey;D(r=>{if(t.shiftKey&&oe){let t=pe.findIndex(e=>e.id===oe),i=pe.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(pe[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),O(e.id)},ve=(0,E.useCallback)(()=>D(new Set(L.map(e=>e.id))),[L]),ye=L.length>0&&L.every(e=>ae.has(e.id)),z=(0,E.useCallback)(async()=>{let e=ge.map(e=>e.id);if(e.length!==0){re(!0);try{let t=await Pe(e);t.ok||await wa(o(u,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),D(new Set),await fe()}finally{re(!1)}}},[fe,ge,u]),B=(0,E.useCallback)(async()=>{let e=R.map(e=>e.id);if(ce(null),e.length!==0){re(!0);try{let t=await Fe(e);!t.ok&&!t.cancelled&&await wa(o(u,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),D(new Set),await fe()}finally{re(!1)}}},[R,fe,u]),be=async()=>{ce(null),re(!0);try{await H(ie),D(new Set),await fe()}finally{re(!1)}},xe=async()=>{re(!0),S(null);try{let e=await Le();if(e.cancelled){S(`Elevation was declined — nothing was read.`);return}if(e.failed){S(`The elevated helper could not produce a report. Try again.`);return}_(e.entries),b(!0)}finally{re(!1)}},Se=async()=>{re(!0),ce(null);try{await Re(),_([]),b(!1),S(null),await fe()}finally{re(!1)}},Ce=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},we=e=>{navigator.clipboard.writeText(e.originalPath)},V=(e,t)=>{e.preventDefault(),t&&!ae.has(t.id)&&D(new Set([t.id])),j({x:e.clientX,y:e.clientY})};(0,E.useEffect)(()=>(Hc(`recycle`,ae.size>0?(e,t)=>j({x:e,y:t}):null),()=>Hc(`recycle`,null)),[ae]),(0,E.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),ve()):e.key===`Delete`?(e.preventDefault(),R.length>0&&ce(`delete`)):e.key===`Enter`&&ge.length>0?(e.preventDefault(),z()):e.key===`Escape`&&(D(new Set),j(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[R.length,ge.length,z,ve]);let Te=[{label:u(`Restore`),icon:(0,P.jsx)(Up,{width:14,height:14}),disabled:ge.length===0,onSelect:()=>void z()},{label:u(`Delete permanently`),icon:(0,P.jsx)(xi,{size:14}),danger:!0,disabled:R.length===0,onSelect:()=>ce(`delete`)},{label:u(`Properties`),icon:(0,P.jsx)(hi,{size:14}),disabled:he.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=he;e&&Ie(e.id)}},{label:u(`Open original location`),icon:(0,P.jsx)(ai,{size:14}),disabled:he.length!==1,onSelect:()=>{let[e]=he;e&&Ce(e)}},{label:u(`Copy original path`),icon:(0,P.jsx)(ca,{size:14}),disabled:he.length!==1,onSelect:()=>{let[e]=he;e&&we(e)}},{label:u(`Select all`),separatorBefore:!0,onSelect:ve},{label:u(`Refresh`),icon:(0,P.jsx)(ui,{size:14}),onSelect:()=>void fe()}],Ee=he.length>0?he[0]:null,De=Ee?{name:Ee.name,path:Ee.contentPath||Ee.originalPath,isDirectory:Ee.isDirectory,size:Ee.size,modified:Ee.deleted,fields:[{label:u(`Type`),value:u(qp(Ee))},{label:u(`Original location`),value:Ee.originalPath},{label:u(`Date deleted`),value:y(Ee.deleted)},{label:u(`Size`),value:Ee.isDirectory?`—`:f(Ee.size)},...Ee.owner?[{label:u(`Owner`),value:Ee.owner}]:[],{label:u(`Status`),value:Ee.isOrphan?u(`Metadata only`):Ee.removable?u(`Restorable`):u(`Other profile`)}]}:null;return(0,P.jsxs)(Yp,{ref:ue,onContextMenu:e=>V(e),children:[(0,P.jsxs)(Xp,{children:[(0,P.jsxs)(Zp,{children:[(0,P.jsx)(xi,{size:16}),(0,P.jsx)(`span`,{children:u(`Recycle Bin`)}),(0,P.jsxs)(Qp,{children:[ee?`…`:o(u,pe.length,`1 item`,`{count} items`),ae.size>0&&` · ${u(`{count} selected`,{count:ae.size})}`]})]}),(0,P.jsxs)($p,{children:[(0,P.jsx)(tm,{$on:ie,onClick:()=>T(e=>!e),title:u(`Show metadata records whose content is already gone`),type:`button`,children:u(`Orphans`)}),ie&&p&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(em,{disabled:ne||v,onClick:()=>void xe(),title:u(v?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:u(ne?`Working…`:v?`Admin view loaded`:`Show all (admin)…`)}),v&&g.length>0&&(0,P.jsx)(em,{disabled:ne,onClick:()=>ce(`purge`),type:`button`,children:u(`Delete every orphan`)})]}),(0,P.jsx)(em,{disabled:ne||ge.length===0,onClick:()=>void z(),type:`button`,children:u(`Restore`)}),(0,P.jsx)(em,{$danger:!0,disabled:ne||R.length===0,onClick:()=>ce(`delete`),type:`button`,children:u(`Delete`)}),(0,P.jsx)(em,{disabled:ne||pe.length===0,onClick:()=>ce(`empty`),type:`button`,children:u(`Empty`)}),(0,P.jsx)(nm,{onClick:()=>void fe(),title:u(`Refresh`),type:`button`,children:(0,P.jsx)(ui,{size:14})}),d.available&&(0,P.jsx)(nm,{onClick:e=>d.open(e.clientX,e.clientY),title:u(`Selection menu`),type:`button`,children:(0,P.jsx)(ha,{size:14})})]})]}),x&&(0,P.jsx)(Cm,{children:x}),C&&(0,P.jsx)(wm,{children:C}),!C&&!ee&&(t?.open&&t.query.trim().length>0?L.length===0:pe.length===0)&&(0,P.jsx)(wm,{children:t?.open&&t.query.trim().length>0?u(`No matching items.`):u(`The recycle bin is empty.`)}),pe.length>0&&(0,P.jsxs)(Sm,{children:[(0,P.jsxs)(rm,{ref:me,children:[(0,P.jsxs)(am,{children:[(0,P.jsx)(dm,{$checked:ye,$partial:!ye&&ae.size>0,onClick:()=>ye?D(new Set):ve(),title:u(ye?`Select none`:`Select all`),type:`button`,children:ye?(0,P.jsx)(Si,{size:9}):ae.size>0&&(0,P.jsx)(fm,{})}),(0,P.jsxs)(om,{onClick:()=>Oe(`name`),type:`button`,children:[u(`Name`),Kp(se,`name`)]}),(0,P.jsxs)(om,{onClick:()=>Oe(`original`),type:`button`,children:[u(`Original location`),Kp(se,`original`)]}),(0,P.jsxs)(om,{onClick:()=>Oe(`deleted`),type:`button`,children:[u(`Date deleted`),Kp(se,`deleted`)]}),(0,P.jsxs)(om,{onClick:()=>Oe(`size`),type:`button`,children:[u(`Size`),Kp(se,`size`)]}),(0,P.jsxs)(om,{onClick:()=>Oe(`type`),type:`button`,children:[u(`Type`),Kp(se,`type`)]}),(0,P.jsx)(`span`,{})]}),(0,P.jsx)(sm,{onClick:e=>{e.target===e.currentTarget&&D(new Set)},children:pe.map(e=>(0,P.jsxs)(cm,{$checked:ae.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>_e(e,t),onContextMenu:t=>V(t,e),onDoubleClick:()=>{D(new Set([e.id])),O(e.id),a?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,P.jsx)(um,{$checked:ae.has(e.id),children:ae.has(e.id)&&(0,P.jsx)(Si,{size:9})}),(0,P.jsxs)(pm,{children:[(0,P.jsx)(Jp,{entry:e}),(0,P.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,P.jsx)(xm,{children:u(`Metadata only`)}),e.owner&&(0,P.jsx)(xm,{$other:!0,children:u(`Other profile`)})]}),(0,P.jsx)(hm,{children:e.originalPath}),(0,P.jsx)(gm,{children:y(e.deleted)}),(0,P.jsx)(_m,{children:e.isDirectory?`—`:f(e.size)}),(0,P.jsx)(vm,{children:u(qp(e))}),(0,P.jsxs)(ym,{children:[e.removable&&!e.isOrphan&&(0,P.jsx)(bm,{onClick:t=>{t.stopPropagation(),Pe([e.id]).then(fe)},title:u(`Restore to its original folder`),type:`button`,children:(0,P.jsx)(Up,{})}),e.removable&&(0,P.jsx)(bm,{$danger:!0,onClick:t=>{t.stopPropagation(),D(new Set([e.id])),ce(`delete`)},title:e.isOrphan?u(`Remove the leftover record`):u(`Delete permanently`),type:`button`,children:(0,P.jsx)(xi,{size:13})})]})]},e.id))})]}),i&&(0,P.jsx)(Qo,{emptyNote:u(`Nothing selected.`),info:De,onWidth:de,selectionNote:he.length>1?o(u,he.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:s,videoAutoplay:c,width:le})]}),A&&(0,P.jsx)($a,{items:Te,onClose:()=>j(null),x:A.x,y:A.y}),(0,P.jsx)(Vo,{confirmLabel:u(M===`empty`?`Empty the bin`:M===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:M===`empty`?o(u,pe.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):M===`purge`?u(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):o(u,R.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>ce(null),onConfirm:()=>{M===`empty`?be():M===`purge`?Se():B()},open:M!==null,title:u(M===`empty`?`Empty the recycle bin`:M===`purge`?`Delete every orphan`:`Delete permanently`)})]});function Oe(e){k(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Un(`yafm.recycle.sort`,n),n})}}function Gp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return qp(e).localeCompare(qp(t),void 0,{sensitivity:`base`})}}function Kp(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function qp(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function Jp({entry:e}){let t=dn(e.originalPath,e.isDirectory);return(0,P.jsx)(mm,{children:t?(0,P.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,P.jsx)(ai,{}):(0,P.jsx)(oi,{})})}var Yp=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Xp=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Zp=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Qp=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,$p=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,em=_.button`
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
`,tm=_(em)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,nm=_.button`
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
`,rm=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,im=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,am=_.div`
    display: grid;
    grid-template-columns: ${im};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,om=_.button`
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
`,sm=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,cm=_.div`
    display: grid;
    grid-template-columns: ${im};
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
`,lm=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,um=_.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,dm=_.button`
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
`,fm=_.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,pm=_(lm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,mm=_.span`
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
`,hm=_(lm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,gm=_(lm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,_m=_(lm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,vm=_(lm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,ym=_.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,bm=_.button`
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
`,xm=_.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Sm=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Cm=_.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,wm=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Tm(){return N.available?(await N.request(`app.tags`)).tags:[]}async function Em(e){return!N.available||!e?!1:(await N.request(`app.tags.delete`,{name:e})).ok}async function Dm(e,t){return!N.available||!e?[]:(await N.request(`app.tags.create`,{name:e,color:t})).tags}async function Om(e,t){return!N.available||!e?!1:(await N.request(`app.tags.color`,{name:e,color:t})).ok}async function km(e,t){return!N.available||!e||!t?!1:(await N.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function Am(){let e=I();return(0,P.jsx)(jm,{title:e(`Always applies to every folder`),children:e(`Global`)})}var jm=_.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Mm=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function Nm(e){return`"${e.replaceAll(`"`,``)}"`}function Pm(e){let t=document.documentElement.style;for(let n of Mm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Nm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Fm(){return N.available?(await N.request(`app.fonts`)).fonts??[]:[]}function Im({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=I(),[s,c]=(0,E.useState)(null),[l,u]=(0,E.useState)(``),d=(0,E.useRef)(null),f=(0,E.useRef)(null),p=(0,E.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,E.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Lm,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,P.jsx)(Rm,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,P.jsx)(zm,{children:`▾`})]}),s&&(0,Ia.createPortal)((0,P.jsxs)(Bm,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,P.jsxs)(Vm,{children:[(0,P.jsx)(ci,{size:12}),(0,P.jsx)(Hm,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,P.jsxs)(Um,{children:[(0,P.jsxs)(Wm,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,P.jsxs)(Km,{children:[n,` `,(0,P.jsx)(Jm,{children:o(`(default)`)})]}),!e&&(0,P.jsx)(Si,{size:11})]}),p.map(t=>(0,P.jsxs)(Wm,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,P.jsxs)(Gm,{children:[(0,P.jsx)(Km,{children:t}),(0,P.jsx)(qm,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,P.jsx)(Si,{size:11})]},t)),p.length===0&&(0,P.jsx)(Ym,{children:o(`No matching font.`)})]})]}),document.body)]})}var Lm=_.button`
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
`,Rm=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zm=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,Bm=_.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${qa}
`,Vm=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,Hm=_.input`
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
`,Um=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,Wm=_.button`
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
`,Gm=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Km=_.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,qm=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Jm=_.span`
    color: var(--text-muted);
    font-size: 10px;
`,Ym=_.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Xm=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],Zm=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Qm=`en`,$m=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],eh=new Date(2026,10,5,16,8).getTime(),th=`system`,nh={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},rh=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],ih=`yafm.colors.recent`;function ah(){let e=Hn(ih);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function oh({appInfo:e,focusSection:t,onSettingsChanged:n,onOpenFolder:r,find:i,onSearchMatches:a}){let s=I(),[c,l]=(0,E.useState)([]),[u,d]=(0,E.useState)(null),[p,g]=(0,E.useState)(null),[_,y]=(0,E.useState)(null),[x,S]=(0,E.useState)(``),[ee,te]=(0,E.useState)(`file`),[re,ie]=(0,E.useState)(!1),[T,ae]=(0,E.useState)(!1),[D,oe]=(0,E.useState)(null),[O,se]=(0,E.useState)(!1),[k,A]=(0,E.useState)(!1),[j,M]=(0,E.useState)(null),[ce,le]=(0,E.useState)(null),[N,ue]=(0,E.useState)(null),[fe,F]=(0,E.useState)(!1),[pe,L]=(0,E.useState)(null),[me,he]=(0,E.useState)(!1),[ge,R]=(0,E.useState)(null),[_e,ve]=(0,E.useState)(null),[ye,z]=(0,E.useState)(!1),[B,xe]=(0,E.useState)([]),[Se,Ce]=(0,E.useState)(null),[we,V]=(0,E.useState)(!1),[Te,Ee]=(0,E.useState)(null),[De,Oe]=(0,E.useState)(``),[ke,Ae]=(0,E.useState)(js),[je,Me]=(0,E.useState)(null),[Ne,H]=(0,E.useState)(null),[Pe,Fe]=(0,E.useState)(``),[Ie,Le]=(0,E.useState)(``),[Re,ze]=(0,E.useState)(null),[Be,Ve]=(0,E.useState)(ah),[He,Ue]=(0,E.useState)({}),[We,Ke]=(0,E.useState)(null),[qe,Je]=(0,E.useState)(null),[Ze,Qe]=(0,E.useState)(!1),[at,st]=(0,E.useState)(!1),[ct,ht]=(0,E.useState)(null),[vt,yt]=(0,E.useState)(rh[0].id),[bt,xt]=(0,E.useState)([]),[St,Ct]=(0,E.useState)(null),[wt,Tt]=(0,E.useState)(null),[Et,Dt]=(0,E.useState)(null),[Ot,kt]=(0,E.useState)(!1),[At,jt]=(0,E.useState)(``),Mt=(0,E.useRef)(null),Nt=(0,E.useRef)({}),Pt=p?.defaultView??be,Ft=p?.themePresets??[],It=e?.platform===`windows`,Lt=It?ce?ce.registered&&ce.pathMatches:!1:p?.archiveHandler??!1,Rt=ce?.registered??p?.archiveHandler??!1,zt=It?N?N.registered&&N.pathMatches:!1:p?.defaultFileManager??!1;Vd(Mt,i??null,`section`,a??(()=>void 0),[p]),(0,E.useEffect)(()=>{let e=Mt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){yt(rh[rh.length-1].id);return}let n=t+110,r=rh[0].id;for(let{id:e}of rh){let t=Nt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}yt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Bt=e=>t=>{Nt.current[e]=t},Vt=e=>{Nt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),yt(e)};(0,E.useEffect)(()=>{t&&Vt(t)},[t]),(0,E.useEffect)(()=>{de().then(e=>l(e.available),()=>l([]))},[]),(0,E.useEffect)(()=>{Fm().then(xt,()=>xt([]))},[]),(0,E.useEffect)(()=>{gt().then(Tt,()=>Tt(null))},[]),(0,E.useEffect)(()=>{lt().then(Je,()=>void 0)},[]),(0,E.useEffect)(()=>{Ge().then(d,()=>d(null)),Ye().then(g,()=>g(null)),pt().then(se,()=>se(!1)),tt().then(le,()=>le(null)),$e().then(ue,()=>ue(null)),Tm().then(xe,()=>xe([]))},[]),(0,E.useEffect)(()=>{let e=()=>void ft().then(oe,()=>oe(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let W=async e=>{if(!p)return;let t={...p,...e};Object.keys(e).every(e=>t[e]===p[e])||(g(t),cn(),g(await it(t)),n())},Ht=async e=>{let t=await ba(e);if(!t)return;let n=p?.backgroundCustom??[];await W({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Wt=async()=>{let e=At.trim();if(!p||!C(e))return;let t=p.backgroundCustom??[];jt(``),await W({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Gt=e=>{if(!p)return;let t=p.backgroundSource;W({backgroundCustom:p.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},Kt=async()=>{if(!p)return;let t=await ya();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.protectedPaths.includes(r)||await W({protectedPaths:[...p.protectedPaths,r]})},Yt=()=>{let e=Pe.trim();p&&e&&!p.protectedPaths.includes(e)&&(Fe(``),W({protectedPaths:[...p.protectedPaths,e]}))},Xt=()=>{if(!p||!je)return;let e=je.value.trim(),t=je.from;Me(null),e.length!==0&&e!==t&&W({protectedPaths:p.protectedPaths.map(n=>n===t?e:n)})},Zt=e=>{p&&W({protectedPaths:p.protectedPaths.filter(t=>t!==e)})},Qt=async()=>{let e=await Xe();e.length>0&&await W({protectedPaths:e})},$t=()=>{if(!p||!Ne)return;let e=Ne.value.trim(),t=Ne.from;H(null),e&&e!==t&&W({directoryIndexBlacklist:p.directoryIndexBlacklist.map(n=>n===t?e:n)})},en=()=>{let e=Ie.trim();p&&e&&!p.directoryIndexBlacklist.includes(e)&&(Le(``),W({directoryIndexBlacklist:[...p.directoryIndexBlacklist,e]}))},tn=async()=>{if(!p)return;let t=await ya();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.directoryIndexBlacklist.includes(r)||await W({directoryIndexBlacklist:[...p.directoryIndexBlacklist,r]})},nn=e=>{p&&W({directoryIndexBlacklist:p.directoryIndexBlacklist.filter(t=>t!==e)})},rn=()=>{W({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},an=()=>{if(!p||Re===null)return;let e=Re.trim()||`yyyy/MM/dd HH:mm`;ze(null),e!==p.timeFormatPattern&&W({timeFormatPattern:e})},on=(e,t)=>{Ve(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Un(ih,i),i})},sn=h(p?.accentColor,ne),ln=h(p?.secondaryColor,b),G=(e,t)=>{p&&(on(`accent`,sn),on(`secondary`,ln),W({accentColor:e,secondaryColor:t}))},K=(e,t)=>{p&&(on(e,e===`accent`?sn:ln),W(e===`accent`?{accentColor:t}:{secondaryColor:t}))},un=async()=>{Qe(!0),st(!1);try{Je(await ut())}catch{st(!0)}finally{Qe(!1)}},dn=async()=>{if(!p||!We)return;let e=We.name.trim()||`${We.accent.toUpperCase()} / ${We.secondary.toUpperCase()}`,t=[...p.themePresets,{name:e,accent:We.accent,secondary:We.secondary}];Ke(null),await W({themePresets:t})},fn=async e=>{p&&await W({themePresets:p.themePresets.filter((t,n)=>n!==e)})},q=e=>{let t=ct;ht(null),t&&t.role===e&&(e===`accent`?sn:ln).toLowerCase()!==t.color.toLowerCase()&&on(e,t.color)},pn=async()=>{let e=De.trim();if(e&&!we){V(!0),Ee(null);try{xe(await Dm(e,ke)),Oe(``)}catch{Ee(s(`Could not add the tag.`))}finally{V(!1)}}},mn=async(e,t)=>{xe(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Om(e,t)||Ee(s(`Could not change the tag's color.`))},hn=async e=>{if(we)return;V(!0),Ee(null);let t=await Em(e);xe(await Tm()),t||Ee(`"${e}" is still used by a folder whose index could not be updated.`),V(!1)},gn=async()=>{let e=Se;if(!e||we)return;let t=e.value.trim();t.length===0||t===e.name?Ce(null):(V(!0),Ee(null),await km(e.name,t)?(xe(await Tm()),Ce(null)):Ee(`Could not rename "${e.name}".`),V(!1))},_n=async e=>{let t=new Set(Pt.columns??be.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Qc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await W({defaultView:{...Pt,columns:n}})},vn=async()=>{if(k)return;let e=!O;A(!0),M(null);try{let t=await mt(e);se(t),g(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&M(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{M(`The request to Windows failed. Try again.`)}finally{A(!1)}},yn=async()=>{if(me||!p)return;let e=!zt;he(!0),R(null);try{let t=await et(e);ue(t);let r=It?t.registered&&t.pathMatches:e;g(e=>e&&{...e,defaultFileManager:r}),n(),It&&r!==e&&R(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{R(`The request to Windows failed. Try again.`)}finally{he(!1)}},bn=async()=>{if(!fe){F(!0),L(null);try{let e=await nt();le(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),n(),t||L(`Windows did not accept the archive registration. Try again.`)}catch{L(`The request to Windows failed. Try again.`)}finally{F(!1)}}},xn=async()=>{if(!fe){F(!0),L(null);try{let e=await rt();le(e),g(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&L(`The registration is still there. Try turning it off again.`)}catch{L(`The request to Windows failed. Try again.`)}finally{F(!1)}}},Sn=async(e,t)=>{if(!p)return;let n={...p.extensionIcons};t===null?delete n[e]:n[e]=t,await W({extensionIcons:n})},Cn={...Ut,...p?.shortcuts};(0,E.useEffect)(()=>{if(!_e)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){ve(null);return}let t=qt(e);t&&(ve(null),W({shortcuts:{...Cn,[_e]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[_e,p]),(0,E.useEffect)(()=>{if(!ye)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){z(!1);return}let t=qt(e);t&&(z(!1),W({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[ye,p]);let wn=async e=>{await W({recentLimit:Math.min(Math.max(e,0),50)})},Tn=(e,t)=>{let n=t??He[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Ue(t=>({...t,[e]:void 0})),W(i)},En=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Ct(null),await W({sharePortMode:`custom`,sharePort:n}),await Ac(n,`custom`)},Dn=async e=>{let t=e===`custom`,n=t?p?.sharePort??8080:null;await W({sharePortMode:t?`custom`:`random`,sharePort:n}),await Ac(n,t?`custom`:`random`)},On=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;kt(!0),Dt(null);try{let e=await _t(t);Tt(e),Dt(e.error),e.error||await W({startupMode:t})}finally{kt(!1)}},kn=async e=>{await W({galleryRoots:e.length>0?e:null})},An=async()=>{let e=await ya(),t=p?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await kn([...t,e])},jn=async()=>{let e=x.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await Sn(e,ee),S(``))},Mn=async()=>{ae(!0);try{let e=await ya();if(!e)return;let t=await ba([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await ot(e.replace(/[\\/][^\\/]+$/,``),v(e),`file:${t}`)&&(cn(),y({folder:e,icon:t}))}finally{ae(!1)}},Nn=async(e,t)=>{let n={...p?.fonts};t?n[e]=t:delete n[e],await W({fonts:n})};return(0,P.jsxs)(vh,{children:[(0,P.jsxs)(yh,{ref:Mt,children:[(0,P.jsxs)(bh,{ref:Bt(`application`),children:[(0,P.jsx)(_h,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Y,{children:[(0,P.jsx)(Q,{children:s(`Version`)}),(0,P.jsx)(Yh,{children:e?`v${e.version}`:`—`})]}),(0,P.jsxs)(Y,{children:[(0,P.jsx)(Q,{children:s(`Platform`)}),(0,P.jsx)(Yh,{children:e?.platform??`—`})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Logs`)}),(0,P.jsx)($,{children:s(`Application logs and crash details. Open the folder here to inspect them without leaving the app.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(Rg,{disabled:!e?.logDirectory,onClick:()=>e?.logDirectory&&r(e.logDirectory),type:`button`,children:s(`Open log folder`)})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Language`)}),(0,P.jsx)($,{children:s(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(mh,{disabled:!p,onChange:e=>void W({language:e}),options:[th,...c.length>0?c:[Qm]],value:p?.language??Qm})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Picker window size`)}),(0,P.jsx)($,{children:s(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(ag,{inputMode:`numeric`,onBlur:e=>Tn(`width`,e.currentTarget.value),onChange:e=>Ue(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:He.width??String(p?.pickerWindowWidth??1200)}),(0,P.jsx)(Yh,{children:`×`}),(0,P.jsx)(ag,{inputMode:`numeric`,onBlur:e=>Tn(`height`,e.currentTarget.value),onChange:e=>Ue(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:He.height??String(p?.pickerWindowHeight??800)})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Web server port`)}),(0,P.jsx)($,{children:s(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(ho,{disabled:!p,onChange:e=>void Dn(e),options:[{value:`random`,label:s(`Random`)},{value:`custom`,label:s(`Custom port`)}],value:p?.sharePortMode??`random`,width:160})})]}),p?.sharePortMode===`custom`&&(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Custom port`)}),(0,P.jsx)($,{children:s(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(ag,{inputMode:`numeric`,onBlur:e=>void En(e.currentTarget.value),onChange:e=>Ct(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:St??(p?.sharePort?String(p.sharePort):``)})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Link paths`)}),(0,P.jsx)($,{children:s(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(ho,{disabled:!p,onChange:e=>void W({linkPathMode:e}),options:[{value:`relative`,label:s(`Relative`)},{value:`absolute`,label:s(`Absolute`)}],value:p?.linkPathMode??`relative`,width:160})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Global hotkey`)}),(0,P.jsx)($,{children:s(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(Lg,{$listening:ye,disabled:!p,onClick:()=>z(!0),type:`button`,children:ye?s(`Press a key…`):p?.globalHotkey?Jt(p.globalHotkey):s(`None`)}),p?.globalHotkey&&(0,P.jsx)(Qh,{onClick:()=>void W({globalHotkey:null}),type:`button`,children:s(`Clear`)})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Open yafm:// links`)}),(0,P.jsx)($,{children:s(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),j&&(0,P.jsx)(Jh,{children:j})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(ng,{$on:O,children:s(O?`Active`:`Off`)}),(0,P.jsx)(rg,{$on:O,disabled:k,onClick:()=>void vn(),title:s(O?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,P.jsx)(ig,{})})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Use as the default file manager`)}),(0,P.jsx)($,{children:s(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),N?.registered&&!N.pathMatches&&(0,P.jsx)(Jh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:N.registeredPath??`?`})}),ge&&(0,P.jsx)(Jh,{children:ge})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(ng,{$on:zt,children:s(zt?`Active`:`Off`)}),(0,P.jsx)(rg,{$on:zt,disabled:!p||me,onClick:()=>void yn(),title:s(zt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,P.jsx)(ig,{})})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Open archives with this app`)}),(0,P.jsx)($,{children:s(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,P.jsx)($,{children:s(`When this is off, opening an archive uses the system's default application instead.`)}),ce?.registered&&!ce.pathMatches&&(0,P.jsx)(Jh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:ce.registeredPath??`?`})}),pe&&(0,P.jsx)(Jh,{children:pe})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(ng,{$on:Lt,children:s(Lt?`Active`:`Off`)}),(0,P.jsx)(Rg,{disabled:!p||fe||Lt,onClick:()=>void bn(),type:`button`,children:s(`Register`)}),e?.platform===`windows`&&(0,P.jsx)(Rg,{onClick:()=>void dt(`ms-settings:defaultapps`),type:`button`,children:s(`Default apps…`)}),(0,P.jsx)(tg,{disabled:!p||fe||!Rt,onClick:()=>void xn(),type:`button`,children:s(`Unregister`)})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Reopen the tabs that were open`)}),(0,P.jsx)($,{children:s(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,P.jsx)(rg,{$on:p?.restoreTabs??!0,disabled:!p,onClick:()=>void W({restoreTabs:!p?.restoreTabs}),type:`button`,children:(0,P.jsx)(ig,{})})]})]})]}),(0,P.jsxs)(bh,{ref:Bt(`startup`),children:[(0,P.jsx)(_h,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Start with the computer`)}),(0,P.jsx)($,{children:s(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),Et&&(0,P.jsx)(Jh,{children:Et}),wt&&!wt.supported&&(0,P.jsx)(Jh,{children:s(`This platform cannot create a per-user startup entry.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(ho,{disabled:!p||Ot||wt!==null&&!wt.supported,onChange:e=>void On(e),options:[{value:`none`,label:s(`None`)},{value:`shortcut`,label:s(`Shortcut`)},{value:`task`,label:s(`Scheduled task`)}],value:wt?.mode??p?.startupMode??`none`,width:170})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Start hidden in the tray`)}),(0,P.jsx)($,{children:s(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(rg,{$on:p?.startHidden??!1,disabled:!p,onClick:()=>void W({startHidden:!p?.startHidden}),type:`button`,children:(0,P.jsx)(ig,{})})})]})]})]}),(0,P.jsxs)(bh,{ref:Bt(`fonts`),children:[(0,P.jsx)(_h,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,P.jsxs)(Sh,{children:[Mm.map(e=>(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(e.label)}),(0,P.jsx)($,{children:s(`Falls back to {font} until another family is chosen.`,{font:s(e.fallback)})})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(Im,{defaultLabel:s(e.fallback),disabled:!p,fonts:bt,onChange:t=>void Nn(e.id,t),sample:e.sample,value:p?.fonts?.[e.id]??null})})]},e.id)),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Reset`)}),(0,P.jsx)($,{children:s(`Back to the app's built-in font for every role.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(Rg,{onClick:()=>void W({fonts:{}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,P.jsxs)(bh,{ref:Bt(`time`),children:[(0,P.jsx)(_h,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,P.jsx)(Sh,{children:(0,P.jsxs)(Ch,{children:[(0,P.jsxs)(wh,{children:[(0,P.jsx)(Q,{children:s(`Format`)}),(0,P.jsx)($,{children:s(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,P.jsx)(jg,{children:$m.map(e=>(0,P.jsx)(Mg,{$active:(p?.timeFormat??`24`)===e.id,onClick:()=>void W({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(p?.timeFormat??`24`)===`custom`&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Ng,{"aria-label":s(`Pattern`),onBlur:an,onChange:e=>ze(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),an()):e.key===`Escape`&&ze(null)},spellCheck:!1,value:Re??p?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,P.jsx)($,{children:s(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,P.jsxs)(Pg,{children:[(0,P.jsx)(`span`,{children:s(`Preview`)}),(0,P.jsx)(`code`,{children:m(eh,p?.timeFormat,Re??p?.timeFormatPattern)})]})]})})]}),(0,P.jsxs)(bh,{ref:Bt(`updates`),children:[(0,P.jsx)(_h,{note:`The running build and the newest one published.`,title:`Updates`}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Y,{children:[(0,P.jsx)(Q,{children:s(`Current version`)}),(0,P.jsx)(Yh,{children:e?`v${e.version}`:`—`})]}),(0,P.jsxs)(Y,{children:[(0,P.jsx)(Q,{children:s(`Latest version`)}),(0,P.jsx)(Yh,{children:qe?`v${qe.latest}`:`—`})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Check for updates`)}),(0,P.jsx)($,{children:qe&&!qe.available?s(`You are on the latest version.`):s(`Reads the version file the release workflow publishes.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(Rg,{disabled:Ze,onClick:()=>void un(),type:`button`,children:s(Ze?`Checking…`:`Check now`)})})]}),qe?.available&&(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Version {version} is available.`,{version:qe.latest})}),(0,P.jsx)($,{children:s(`Download the new build from the releases page.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(Rg,{onClick:()=>void dt(Zm),type:`button`,children:s(`Open release page`)})})]}),at&&(0,P.jsx)(Y,{children:(0,P.jsx)(Jh,{children:s(`Could not check for updates.`)})})]})]}),(0,P.jsxs)(bh,{ref:Bt(`colors`),children:[(0,P.jsx)(_h,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Ch,{children:[(0,P.jsxs)(wh,{children:[(0,P.jsx)(Q,{children:s(`Presets`)}),(0,P.jsx)($,{children:s(`One click changes the accent and the highlight together.`)})]}),(0,P.jsxs)(Th,{children:[ku.map(e=>(0,P.jsxs)(Eh,{$on:sn.toLowerCase()===e.accent&&ln.toLowerCase()===e.secondary,onClick:()=>G(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,P.jsxs)(Nh,{children:[(0,P.jsx)(`i`,{style:{background:e.accent}}),(0,P.jsx)(`i`,{style:{background:e.secondary}})]}),(0,P.jsx)(Dh,{children:s(e.name)})]},e.name)),Ft.map((e,t)=>(0,P.jsxs)(Oh,{children:[(0,P.jsxs)(Eh,{$on:sn.toLowerCase()===e.accent.toLowerCase()&&ln.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>G(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,P.jsxs)(Nh,{children:[(0,P.jsx)(`i`,{style:{background:e.accent}}),(0,P.jsx)(`i`,{style:{background:e.secondary}})]}),(0,P.jsx)(Dh,{children:e.name})]}),(0,P.jsx)(kh,{onClick:()=>void fn(t),title:s(`Remove preset`),type:`button`,children:(0,P.jsx)(Ci,{size:9})})]},`${e.name}-${t}`)),We?(0,P.jsxs)(jh,{children:[(0,P.jsxs)(Nh,{children:[(0,P.jsx)(`i`,{style:{background:We.accent}}),(0,P.jsx)(`i`,{style:{background:We.secondary}})]}),(0,P.jsx)(Mh,{autoFocus:!0,maxLength:24,onChange:e=>Ke({...We,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),dn()):e.key===`Escape`&&(e.preventDefault(),Ke(null))},placeholder:s(`Preset name`),spellCheck:!1,value:We.name}),(0,P.jsx)(Qh,{onClick:()=>void dn(),type:`button`,children:s(`Save`)}),(0,P.jsx)(Qh,{onClick:()=>Ke(null),type:`button`,children:s(`Cancel`)})]}):(0,P.jsxs)(Ah,{disabled:!p,onClick:()=>Ke({name:``,accent:sn,secondary:ln}),title:s(`Save the current colours as a preset`),type:`button`,children:[(0,P.jsx)(di,{size:12}),s(`Add preset`)]})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Accent color`)}),(0,P.jsx)($,{children:s(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(gh,{colors:Be.accent,current:sn,onApply:e=>K(`accent`,e)}),(0,P.jsx)($h,{"aria-label":s(`Accent color`),disabled:!p,onBlur:()=>q(`accent`),onChange:e=>void W({accentColor:e.target.value}),onFocus:()=>ht({role:`accent`,color:sn}),type:`color`,value:sn}),(0,P.jsx)(eg,{children:sn.toUpperCase()})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Secondary color`)}),(0,P.jsx)($,{children:s(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(gh,{colors:Be.secondary,current:ln,onApply:e=>K(`secondary`,e)}),(0,P.jsx)($h,{"aria-label":s(`Secondary color`),disabled:!p,onBlur:()=>q(`secondary`),onChange:e=>void W({secondaryColor:e.target.value}),onFocus:()=>ht({role:`secondary`,color:ln}),type:`color`,value:ln}),(0,P.jsx)(eg,{children:ln.toUpperCase()})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Reset colors`)}),(0,P.jsx)($,{children:s(`Returns the interface to the default blue and indigo theme.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(Qh,{disabled:!p,onClick:()=>{on(`accent`,sn),on(`secondary`,ln),W({accentColor:null,secondaryColor:null})},type:`button`,children:s(`Reset`)})})]})]})]}),(0,P.jsxs)(bh,{ref:Bt(`background`),children:[(0,P.jsx)(_h,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Ch,{children:[(0,P.jsxs)(wh,{children:[(0,P.jsx)(Q,{children:s(`Wallpaper`)}),(0,P.jsx)($,{children:s(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,P.jsx)(_g,{children:(0,P.jsx)(vg,{$active:!p?.backgroundSource,onClick:()=>void W({backgroundSource:null}),title:s(`None`),type:`button`,children:(0,P.jsx)(Cg,{children:s(`None`)})})}),(0,P.jsxs)(mg,{children:[Mu.map(e=>(0,P.jsxs)(hg,{children:[(0,P.jsx)(gg,{children:s(e.name)}),(0,P.jsx)(_g,{children:e.variants.map(t=>(0,P.jsx)(vg,{$active:p?.backgroundSource===t.id,onClick:()=>void W({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,P.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,P.jsxs)(hg,{children:[(0,P.jsx)(gg,{children:s(`Motion`)}),(0,P.jsx)(_g,{children:ju.map(e=>(0,P.jsxs)(vg,{$active:p?.backgroundSource===e.id,onClick:()=>void W({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,P.jsx)(`img`,{alt:``,src:e.poster}),(0,P.jsx)(xg,{children:(0,P.jsx)(Ai,{size:11})})]},e.id))})]}),(0,P.jsxs)(hg,{children:[(0,P.jsx)(gg,{children:s(`Custom`)}),(0,P.jsxs)(_g,{children:[(p?.backgroundCustom??[]).map(e=>(0,P.jsx)(ph,{active:p?.backgroundSource===`file:${e}`||p?.backgroundSource===`url:${e}`||p?.backgroundSource===e,onRemove:()=>Gt(e),onSelect:()=>void W({backgroundSource:C(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,P.jsxs)(Sg,{onClick:()=>void Ht([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,P.jsx)(di,{size:12}),s(`Image…`)]}),(0,P.jsxs)(Sg,{onClick:()=>void Ht([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,P.jsx)(di,{size:12}),s(`Video…`)]})]})]})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Image or video URL`)}),(0,P.jsx)($,{children:s(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(ag,{onChange:e=>jt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Wt()},placeholder:`https://…`,value:At}),(0,P.jsx)(Qh,{disabled:!C(At),onClick:()=>void Wt(),type:`button`,children:s(`Add`)})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsx)(Q,{children:s(`Blur`)}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(pg,{max:40,min:0,onChange:e=>void W({backgroundBlur:Number(e.target.value)}),type:`range`,value:p?.backgroundBlur??0}),(0,P.jsxs)(Yh,{children:[p?.backgroundBlur??0,`px`]})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsx)(Q,{children:s(`Saturation`)}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(pg,{max:200,min:0,onChange:e=>void W({backgroundSaturation:Number(e.target.value)}),type:`range`,value:p?.backgroundSaturation??100}),(0,P.jsxs)(Yh,{children:[p?.backgroundSaturation??100,`%`]})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsx)(Q,{children:s(`Brightness`)}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(pg,{max:150,min:40,onChange:e=>void W({backgroundBrightness:Number(e.target.value)}),type:`range`,value:p?.backgroundBrightness??100}),(0,P.jsxs)(Yh,{children:[p?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,P.jsxs)(bh,{ref:Bt(`safety`),children:[(0,P.jsx)(_h,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Ch,{children:[(0,P.jsxs)(wh,{children:[(0,P.jsx)(Q,{children:s(`Protected folders`)}),(0,P.jsx)($,{children:s(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,P.jsx)(wg,{children:(p?.protectedPaths??[]).map(e=>(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Eg,{"aria-label":s(`Protected path`),onBlur:Xt,onChange:t=>Me({from:e,value:t.target.value}),onFocus:()=>Me({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Xt()):e.key===`Escape`&&Me(null)},spellCheck:!1,value:je?.from===e?je.value:e}),(0,P.jsx)(Dg,{onClick:()=>Zt(e),title:s(`Remove`),type:`button`,children:(0,P.jsx)(Ci,{size:10})})]},e))}),(0,P.jsxs)(kg,{children:[(0,P.jsx)(Ag,{"aria-label":s(`New protected rule`),onChange:e=>Fe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Yt())},placeholder:`*.log`,spellCheck:!1,value:Pe}),(0,P.jsx)(Qh,{onClick:Yt,type:`button`,children:s(`Add the rule`)})]}),(0,P.jsxs)(Og,{children:[(0,P.jsx)(Qh,{onClick:()=>void Qt(),type:`button`,children:s(`Restore defaults`)}),(0,P.jsx)(Qh,{onClick:()=>void Kt(),type:`button`,children:s(`Add folder…`)})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Confirmation delay`)}),(0,P.jsx)($,{children:s(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(pg,{max:30,min:2,onChange:e=>void W({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:p?.deleteDelaySeconds??5}),(0,P.jsxs)(Yh,{children:[p?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,P.jsxs)(bh,{ref:Bt(`tags`),children:[(0,P.jsx)(_h,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Xh,{"aria-label":s(`Color of the new tag`),onChange:e=>Ae(e.target.value),type:`color`,value:ke}),(0,P.jsx)(ag,{onChange:e=>Oe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),pn())},placeholder:s(`New tag`),spellCheck:!1,value:De})]}),(0,P.jsx)($,{children:s(`Add a tag here; it is available in every folder.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(Qh,{disabled:we||De.trim().length===0,onClick:()=>void pn(),type:`button`,children:s(`Add`)})})]}),Te&&(0,P.jsx)(Y,{children:(0,P.jsx)(Jh,{children:Te})}),B.length===0&&(0,P.jsx)(Y,{children:(0,P.jsx)($,{children:s(`No tags yet. Add one below; it is available in every folder.`)})}),B.map(e=>(0,P.jsx)(Y,{children:Se?.name===e.name?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Xh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void mn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,P.jsx)(Zh,{autoFocus:!0,disabled:we,onChange:t=>Ce({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),gn()):e.key===`Escape`&&(e.preventDefault(),Ce(null))},value:Se.value})]}),(0,P.jsx)($,{children:s(`Press Enter to save, Escape to cancel.`)})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(Qh,{disabled:we,onClick:()=>void gn(),type:`button`,children:s(`Save`)}),(0,P.jsx)(Qh,{disabled:we,onClick:()=>Ce(null),type:`button`,children:s(`Cancel`)})]})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Xh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void mn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,P.jsx)(Q,{children:e.name})]}),(0,P.jsx)($,{children:o(s,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(Qh,{disabled:we,onClick:()=>Ce({name:e.name,value:e.name}),type:`button`,children:s(`Edit`)}),(0,P.jsxs)(tg,{disabled:we,onClick:()=>void hn(e.name),type:`button`,children:[(0,P.jsx)(xi,{size:13}),s(`Remove`)]})]})]})},e.name))]})]}),(0,P.jsxs)(bh,{ref:Bt(`files-view`),children:[(0,P.jsx)(_h,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Default view`)}),(0,P.jsx)($,{children:s(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsxs)(dg,{children:[(0,P.jsx)(fg,{$on:Pt.mode===`list`,onClick:()=>void W({defaultView:{...Pt,mode:`list`}}),type:`button`,children:s(`List`)}),(0,P.jsx)(fg,{$on:Pt.mode===`grid`,onClick:()=>void W({defaultView:{...Pt,mode:`grid`}}),type:`button`,children:s(`Grid`)})]})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`List icon size`)}),(0,P.jsx)($,{children:s(`The icon in the list rows.`)})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(pg,{max:48,min:16,onChange:e=>void W({defaultView:{...Pt,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Pt.iconSize}),(0,P.jsxs)(Yh,{children:[Pt.iconSize,`px`]})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Grid size`)}),(0,P.jsx)($,{children:s(`The height of a grid tile; the icon inside follows it.`)})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(pg,{max:260,min:100,onChange:e=>void W({defaultView:{...Pt,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Pt.gridSize}),(0,P.jsxs)(Yh,{children:[Pt.gridSize,`px`]})]})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Selection checkboxes`)}),(0,P.jsx)(Am,{})]}),(0,P.jsx)($,{children:s(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,P.jsx)(rg,{$on:p?.showCheckboxes??!0,disabled:!p,onClick:()=>void W({showCheckboxes:!(p?.showCheckboxes??!0)}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Open with a single click`)}),(0,P.jsx)(Am,{})]}),(0,P.jsx)($,{children:s(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,P.jsx)(rg,{$on:p?.openOnSingleClick??!1,disabled:!p,onClick:()=>void W({openOnSingleClick:!(p?.openOnSingleClick??!1)}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Open the file tray while dragging`)}),(0,P.jsx)(Am,{})]}),(0,P.jsx)($,{children:s(`The tray appears when a drag starts and closes again if it is still empty. Off leaves it to the title bar button.`)})]}),(0,P.jsx)(rg,{$on:p?.trayAutoShow??!0,disabled:!p,onClick:()=>void W({trayAutoShow:!(p?.trayAutoShow??!0)}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Confirm before deleting`)}),(0,P.jsx)(Am,{})]}),(0,P.jsx)($,{children:s(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,P.jsx)(rg,{$on:p?.confirmDelete??!1,disabled:!p,onClick:()=>void W({confirmDelete:!(p?.confirmDelete??!1)}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Play audio in video previews`)}),(0,P.jsx)(Am,{})]}),(0,P.jsx)($,{children:s(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,P.jsx)(rg,{$on:p?.previewVideoAudio??!1,disabled:!p,onClick:()=>void W({previewVideoAudio:!(p?.previewVideoAudio??!1)}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Autoplay video previews`)}),(0,P.jsx)(Am,{})]}),(0,P.jsx)($,{children:s(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,P.jsx)(rg,{$on:p?.previewVideoAutoplay??!1,disabled:!p,onClick:()=>void W({previewVideoAutoplay:!(p?.previewVideoAutoplay??!1)}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Preview panel under the list`)}),(0,P.jsx)(Am,{})]}),(0,P.jsx)($,{children:s(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,P.jsx)(rg,{$on:Pt.showImages??!0,onClick:()=>void W({defaultView:{...Pt,showImages:!(Pt.showImages??!0)}}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsx)(Y,{children:(0,P.jsxs)(X,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Columns`)}),(0,P.jsx)(Am,{})]}),(0,P.jsx)($,{children:s(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,P.jsx)(Y,{children:(0,P.jsxs)(Fg,{children:[Qc.map(e=>(0,P.jsxs)(Ig,{children:[(0,P.jsx)(`input`,{checked:(Pt.columns??[]).includes(e.id),onChange:()=>void _n(e.id),type:`checkbox`}),(0,P.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,P.jsxs)(Ig,{children:[(0,P.jsx)(`input`,{checked:(Pt.columns??[]).includes(`linkTarget`),onChange:()=>void _n(`linkTarget`),type:`checkbox`}),(0,P.jsx)(`span`,{children:s(`Link target after the name`)})]})]})})]}),(0,P.jsxs)(Hg,{children:[s(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,P.jsx)(Am,{}),` `,s(`Anything marked as global always applies to every folder.`)]})]}),(0,P.jsxs)(bh,{ref:Bt(`shortcuts`),children:[(0,P.jsx)(_h,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,P.jsxs)(Sh,{children:[Xm.map(({id:e,label:t,note:n})=>(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(t)}),(0,P.jsx)($,{children:s(n)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(Lg,{$listening:_e===e,onClick:()=>ve(e),type:`button`,children:_e===e?s(`Press a key…`):Jt(Cn[e])})})]},e)),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Reset`)}),(0,P.jsx)($,{children:s(`Back to the default combination for every action.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(Rg,{onClick:()=>void W({shortcuts:{...Ut}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,P.jsxs)(bh,{ref:Bt(`memory`),children:[(0,P.jsx)(_h,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(Wh,{children:[(0,P.jsx)(Q,{children:s(`Process memory`)}),(0,P.jsx)(Yh,{children:D?`${f(D.private)} · ${Hh(D.private,D.available)}`:`—`})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Kh,{$ratio:D?D.private/Math.max(D.available,1):0,$tone:w(D?D.private/Math.max(D.available,1):0)})}),(0,P.jsx)($,{children:D?s(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:f(D.available),resident:f(D.workingSet)}):s(`Reading the current usage…`)})]}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(Wh,{children:[(0,P.jsx)(Q,{children:s(`Managed heap`)}),(0,P.jsx)(Yh,{children:D?`${f(D.managed)} · ${Hh(D.managed,D.private)}`:`—`})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Kh,{$ratio:D?D.managed/Math.max(D.private,1):0,$tone:`var(--accent-secondary)`})}),(0,P.jsx)($,{children:s(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(Wh,{children:[(0,P.jsx)(Q,{children:s(`Native and runtime`)}),(0,P.jsx)(Yh,{children:D?`${f(Math.max(0,D.private-D.managed))} · ${Hh(Math.max(0,D.private-D.managed),D.private)}`:`—`})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Kh,{$ratio:D?Math.max(0,D.private-D.managed)/Math.max(D.private,1):0,$tone:`var(--accent-primary)`})}),(0,P.jsx)($,{children:s(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Free memory`)}),(0,P.jsx)($,{children:s(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(Rg,{onClick:()=>void U().then(oe),type:`button`,children:s(`Trim now`)})})]})]})]}),(0,P.jsxs)(bh,{ref:Bt(`overview`),children:[(0,P.jsx)(_h,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,P.jsx)(Sh,{children:(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Recent items`)}),(0,P.jsx)($,{children:s(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(ag,{max:50,min:0,onChange:e=>void wn(Number(e.target.value)),type:`number`,value:p?.recentLimit??10})})]})})]}),(0,P.jsxs)(bh,{ref:Bt(`gallery`),children:[(0,P.jsx)(_h,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,P.jsxs)(Sh,{children:[(p?.galleryRoots??[]).map(e=>(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:v(e)}),(0,P.jsx)($,{children:e})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(zg,{onClick:()=>void kn((p?.galleryRoots??[]).filter(t=>t!==e)),title:s(`Stop scanning this folder`),type:`button`,children:(0,P.jsx)(Ci,{size:12})})})]},e)),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Scan folders`)}),(0,P.jsx)($,{children:(p?.galleryRoots??[]).length===0?s(`Nothing added yet, so the gallery reads the Pictures folder.`):s(`Only these folders are scanned, three levels deep.`)})]}),(0,P.jsx)(Z,{children:(0,P.jsx)(Rg,{onClick:()=>void An(),type:`button`,children:s(`Choose folder…`)})})]})]})]}),(0,P.jsxs)(bh,{ref:Bt(`icons`),children:[(0,P.jsx)(_h,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Use system file icons`)}),(0,P.jsx)($,{children:s(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,P.jsx)(rg,{$on:p?.systemIcons??!1,disabled:!p,onClick:()=>void W({systemIcons:!p?.systemIcons}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Use custom folder icons`)}),(0,P.jsx)($,{children:s(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,P.jsx)(rg,{$on:p?.customFolderIcons??!1,disabled:!p,onClick:()=>void W({customFolderIcons:!p?.customFolderIcons}),type:`button`,children:(0,P.jsx)(ig,{})})]})]})]}),(0,P.jsxs)(bh,{ref:Bt(`extension-icons`),children:[(0,P.jsx)(_h,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,P.jsxs)(Sh,{children:[Object.entries(p?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:e}),(0,P.jsx)($,{children:uh(s,t)})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(dh,{source:t}),(0,P.jsx)(zg,{onClick:()=>void Sn(e,null),title:s(`Remove this rule`),type:`button`,children:(0,P.jsx)(Ci,{size:12})})]})]},e)),(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Add a rule`)}),(0,P.jsx)($,{children:s(`Extension and the icon to draw for it.`)})]}),(0,P.jsxs)(Z,{children:[(0,P.jsx)(ag,{onChange:e=>S(e.target.value),placeholder:`.psd`,spellCheck:!1,value:x}),(0,P.jsxs)(ug,{children:[(0,P.jsx)(zg,{onClick:()=>ie(e=>!e),title:s(`Choose the icon`),type:`button`,children:(0,P.jsx)(dh,{source:ee})}),re&&(0,P.jsx)(Hd,{allowDefault:!1,onClose:()=>ie(!1),onPick:e=>{te(e??`file`),ie(!1)},value:ee})]}),(0,P.jsx)(zg,{onClick:()=>void jn(),title:s(`Add the rule`),type:`button`,children:(0,P.jsx)(di,{size:13})})]})]})]})]}),(0,P.jsxs)(bh,{ref:Bt(`folder-icons`),children:[(0,P.jsx)(_h,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Give a folder its own icon`)}),(0,P.jsx)($,{children:s(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,P.jsxs)(Z,{children:[_&&(0,P.jsx)(fh,{src:_.icon}),(0,P.jsx)(Rg,{disabled:T,onClick:()=>void Mn(),type:`button`,children:s(T?`Choosing…`:`Choose folder and icon…`)})]})]}),_&&(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:v(_.folder)}),(0,P.jsx)($,{children:_.folder})]}),(0,P.jsx)(Z,{children:(0,P.jsxs)(Vg,{children:[(0,P.jsx)(Si,{size:11}),` `,s(`Saved`)]})})]})]})]}),(0,P.jsxs)(bh,{ref:Bt(`folder-index`),children:[(0,P.jsx)(_h,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Y,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,P.jsx)($,{children:s(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,P.jsx)(rg,{$on:p?.writeDirectoryIndex??!0,disabled:!p,onClick:()=>void W({writeDirectoryIndex:!p?.writeDirectoryIndex}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(Ch,{children:[(0,P.jsxs)(wh,{children:[(0,P.jsx)(Q,{children:s(`Directory index blacklist`)}),(0,P.jsx)($,{children:s(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,P.jsx)(wg,{children:(p?.directoryIndexBlacklist??[]).map(e=>(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Eg,{"aria-label":s(`Directory index blacklist rule`),onBlur:$t,onChange:t=>H({from:e,value:t.target.value}),onFocus:()=>H({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),$t()):e.key===`Escape`&&H(null)},spellCheck:!1,value:Ne?.from===e?Ne.value:e}),(0,P.jsx)(Dg,{onClick:()=>nn(e),title:s(`Remove`),type:`button`,children:(0,P.jsx)(Ci,{size:10})})]},e))}),(0,P.jsxs)(kg,{children:[(0,P.jsx)(Ag,{"aria-label":s(`Directory index blacklist rule`),onChange:e=>Le(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),en())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Ie}),(0,P.jsx)(Qh,{onClick:en,type:`button`,children:s(`Add the rule`)})]}),(0,P.jsxs)(Og,{children:[(0,P.jsx)(Qh,{onClick:rn,type:`button`,children:s(`Restore defaults`)}),(0,P.jsx)(Qh,{onClick:()=>void tn(),type:`button`,children:s(`Add folder…`)})]})]})]}),!(p?.writeDirectoryIndex??!0)&&(0,P.jsx)(Ug,{children:lh(s,e?.platform)})]}),(0,P.jsxs)(bh,{ref:Bt(`indexing`),children:[(0,P.jsx)(_h,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,P.jsx)(ch,{})]}),(0,P.jsxs)(bh,{ref:Bt(`files`),children:[(0,P.jsx)(_h,{note:`What the listings include.`,title:`Files`}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Y,{children:[(0,P.jsx)(Q,{children:s(`Hidden items`)}),(0,P.jsx)(Yh,{children:sh(s,u?.showHidden)})]}),(0,P.jsxs)(Y,{children:[(0,P.jsx)(Q,{children:s(`Protected operating system files`)}),(0,P.jsx)(Yh,{children:sh(s,u?.showSystem)})]})]}),(0,P.jsx)(Hg,{children:s(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,P.jsxs)(Lh,{"aria-label":s(`Settings sections`),children:[(0,P.jsx)(Rh,{children:s(`Sections`)}),(0,P.jsx)(zh,{children:rh.map(({id:e,label:t})=>(0,P.jsx)(Bh,{$active:vt===e,onClick:()=>Vt(e),type:`button`,children:(0,P.jsx)(`span`,{children:s(t)})},e))}),(0,P.jsx)(Vh,{children:s(`Changes are saved as you make them.`)})]})]})}function sh(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function ch(){let e=I(),[t,n]=(0,E.useState)(null);return(0,E.useEffect)(()=>{let e=!0,t=()=>qe().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,P.jsx)(Ug,{children:e(`No indexing tasks are running.`)}):(0,P.jsxs)(Sh,{children:[(0,P.jsx)(Y,{children:(0,P.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,P.jsx)(Y,{children:(0,P.jsx)(Yh,{title:e,children:e})},e))]}):(0,P.jsx)(Ug,{children:e(`Index task information is unavailable.`)})}function lh(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function uh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function dh({source:e}){let t=q(e.startsWith(`file:`)?e.slice(5):null);return(0,P.jsx)(Bg,{children:t?(0,P.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,P.jsx)(qs,{name:e,size:16})})}function fh({src:e}){let t=q(e);return(0,P.jsx)(Bg,{children:t&&(0,P.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function ph({path:e,active:t,onSelect:n,onRemove:r}){let i=I(),a=C(e),o=vn(a?null:e),s=a?e:o,c=Xu(e.split(/[?#]/)[0]);return(0,P.jsxs)(yg,{children:[(0,P.jsxs)(vg,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,P.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,P.jsx)(`img`,{alt:``,src:s})),c&&(0,P.jsx)(xg,{children:(0,P.jsx)(Ai,{size:11})})]}),(0,P.jsx)(bg,{onClick:r,title:i(`Remove`),type:`button`,children:(0,P.jsx)(Ci,{size:9})})]})}function mh({value:e,options:t,onChange:n,disabled:r}){let i=I(),[a,o]=(0,E.useState)(null),s=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(og,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,P.jsx)(`span`,{children:hh(i,e)}),(0,P.jsx)(sg,{children:(0,P.jsx)(mi,{size:11})})]}),a&&(0,Ia.createPortal)((0,P.jsx)(cg,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,P.jsxs)(lg,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,P.jsx)(`span`,{children:hh(i,t)}),t===e&&(0,P.jsx)(Si,{size:11})]},t))}),document.body)]})}function hh(e,t){return t===th?e(`System default`):nh[t]??t}function gh({colors:e,current:t,onApply:n}){let r=I();if(e.length===0)return null;let[i,...a]=e;return(0,P.jsxs)(Ph,{children:[(0,P.jsxs)(Ih,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,P.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,P.jsx)(Fh,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,P.jsx)(Si,{size:9})},e))]})}function _h({title:e,note:t,global:n=!1}){let r=I();return(0,P.jsxs)(xh,{children:[(0,P.jsxs)(`h2`,{children:[r(e),n&&(0,P.jsx)(Am,{})]}),(0,P.jsx)(`p`,{children:r(t)})]})}var vh=_.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,yh=_.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,bh=_.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,xh=_.header`
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
`,Sh=_.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Ch=_.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,wh=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Th=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Eh=_.button`
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
`,Dh=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Oh=_.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,kh=_.button`
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
`,Ah=_.button`
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
`,jh=_.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Mh=_.input`
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
`,Nh=_.span`
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
`,Ph=_.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Fh=_.button`
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
`,Ih=_.button`
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
`,Lh=_.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,Rh=_.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,zh=_.div`
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
`,Bh=_.button`
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
`,Vh=_.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function Hh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var Uh=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Wh=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Gh=_.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Kh=_.div`
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
`,qh=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=_.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,Jh=_.span`
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
`,Yh=_.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Xh=_.input`
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
`,Zh=_.input`
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
`,Qh=_.button`
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
`,$h=_.input`
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
`,eg=_.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,tg=_.button`
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
`,ng=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,rg=_.button`
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
`,ig=_.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,ag=_.input`
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
`,og=_.button`
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
`,sg=_.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,cg=_.div`
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
`,lg=_.button`
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
`,ug=_.span`
    position: relative;
    display: inline-flex;
`,dg=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,fg=_.button`
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
`,pg=_.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,mg=_.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,hg=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,gg=_.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,_g=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,vg=_.button`
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
`,yg=_.div`
    position: relative;
    width: 102px;
    height: 58px;
`,bg=_.button`
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
`,xg=_.span`
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
`,Sg=_.button`
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
`,Cg=_.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,wg=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Tg=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Eg=_.input`
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
`,Dg=_.button`
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
`,Og=_.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,kg=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,Ag=_.input`
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
`,jg=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Mg=_.button`
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
`,Ng=_.input`
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
`,Pg=_.div`
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
`,Fg=_.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,Ig=_.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,Lg=_.button`
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
`,Rg=_.button`
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
`,zg=_.button`
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
`,Bg=_.span`
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
`,Vg=_.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,Hg=_.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Ug=_.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,Wg=150,Gg=2500,Kg=3,qg=600;function Jg({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:s,onSearchMatches:c,onPick:l,onSelectionChange:u,onAddToTray:d,onAddFavorite:p,onRemoveFavorite:m,favoritePaths:h,onExtractArchive:g,showDetails:_=!0,videoAudio:v=!1,videoAutoplay:b=!1}){let x=I(),S=qc(`gallery`),[ee,te]=(0,E.useState)([]),[ne,re]=(0,E.useState)(0),[C,w]=(0,E.useState)(!0),[ie,T]=(0,E.useState)(null),[ae,D]=(0,E.useState)(!1),[oe,O]=(0,E.useState)([]),[se,k]=(0,E.useState)(()=>{let e=Bn(`yafm.preview.width`,320);return e>=220?e:320}),A=(0,E.useRef)([]),j=(0,E.useRef)(0),M=(0,E.useRef)(!1),ce=(0,E.useRef)(!0),le=(0,E.useRef)(0),N=(0,E.useRef)(null),ue=(0,E.useRef)(0),de=(0,E.useCallback)(async e=>{let t=++le.current;w(!0),ce.current=!0,T(null);try{let n=await ze(0,Wg,e);if(t!==le.current)return;A.current=n.entries,j.current=n.total,te(n.entries),re(n.total)}catch(e){t===le.current&&T(e instanceof Error?e.message:String(e))}finally{t===le.current&&(ce.current=!1,w(!1))}},[]);(0,E.useEffect)(()=>{de(!1)},[de]);let fe=(0,E.useCallback)(async()=>{if(ce.current||M.current||A.current.length>=j.current)return;let e=le.current;M.current=!0;try{let t=A.current,n=j.current;for(let r=0;r<Kg&&t.length<n;r++){let r=await ze(t.length,Wg,!1);if(e!==le.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<Wg)break}if(e!==le.current)return;A.current=t,j.current=n,(0,E.startTransition)(()=>{te(t),re(n)})}catch{}finally{M.current=!1}},[]),F=(0,E.useCallback)(e=>{ue.current||=window.requestAnimationFrame(()=>{ue.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<Gg&&fe()})},[fe]);(0,E.useEffect)(()=>{let e=N.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&fe()},{root:e.parentElement,rootMargin:`${Gg}px 0px`});return t.observe(e),()=>t.disconnect()},[fe]),(0,E.useEffect)(()=>{if(ee.length>=ne)return;let e=window.setTimeout(()=>{let e=N.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<Gg&&fe()},200);return()=>window.clearTimeout(e)},[ee.length,ne,fe]);let pe=(0,E.useMemo)(()=>({path:``,parent:null,entries:ee.map(Yg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[ee]),L=(0,E.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),me=(0,E.useCallback)(e=>{l?l(e):Se(e)},[l]),he=(0,E.useCallback)(e=>{let t=Xg(e.modified);return{id:t,label:t}},[]),ge=()=>{D(!0),de(!0).finally(()=>D(!1))},R=ee.length<ne,_e=(0,E.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:ee.filter(e=>kn(e.name,a)||kn(e.path,a)),[ee,a?.open,a?.query,a?.matchCase,a?.regex]),ve=(0,E.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:_e[Math.min(a.index,Math.max(0,_e.length-1))]?.path??null}:xn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,_e]);(0,E.useEffect)(()=>{c?.(_e.length)},[_e.length,c]);let ye=(0,E.useCallback)(e=>{O(e),u?.(e)},[u]),z=e=>{k(e),Vn(`yafm.preview.width`,e)},B=oe.length>0?ee.find(e=>e.path===oe[0])??null:null,be=B?.name.includes(`.`)?B.name.slice(B.name.lastIndexOf(`.`)+1).toUpperCase():`—`,xe=B&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(B.name)?x(`Video`):x(`Picture`),Ce=B?B.path.slice(0,Math.max(B.path.lastIndexOf(`\\`),B.path.lastIndexOf(`/`))):``,we=B?{name:B.name,path:B.path,isDirectory:!1,size:B.size,modified:B.modified,fields:[{label:x(`Type`),value:xe},{label:x(`Extension`),value:be},{label:x(`Location`),value:Ce},{label:x(`Full path`),value:B.path},{label:x(`Size`),value:f(B.size)},{label:x(`Modified`),value:y(B.modified)},{label:x(`Created`),value:`—`}]}:null;return(0,P.jsxs)(Zg,{children:[(0,P.jsxs)(e_,{children:[(0,P.jsxs)(n_,{children:[(0,P.jsx)(`span`,{children:x(`Gallery`)}),(0,P.jsx)(r_,{children:C?x(`scanning…`):x(`{shown} of {total} pictures`,{shown:ee.length,total:ne})})]}),(0,P.jsxs)(t_,{children:[(0,P.jsx)(i_,{onClick:ge,title:x(`Scan the folders again`),type:`button`,children:(0,P.jsx)(a_,{$spinning:ae,children:(0,P.jsx)(ui,{size:14})})}),S.available&&(0,P.jsx)(i_,{onClick:e=>S.open(e.clientX,e.clientY),title:x(`Selection menu`),type:`button`,children:(0,P.jsx)(ha,{size:14})})]})]}),ie&&(0,P.jsx)(s_,{children:ie}),!ie&&!C&&ne===0&&(0,P.jsx)(s_,{children:x(`No pictures found.`)}),!ie&&(C||ne>0)&&(0,P.jsxs)(Qg,{children:[(0,P.jsx)($g,{children:(0,P.jsx)(sl,{confirmDelete:n,find:ve,selectMatchesToken:s,listing:C&&ee.length===0?null:pe,loading:C,error:null,view:L,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:ye,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:me,onOpenFile:me,onRefresh:ge,onAddToTray:d,onAddFavorite:p,onRemoveFavorite:m,favoritePaths:h,onExtractArchive:g,groupOf:he,onGridScroll:F,gridFooter:(0,P.jsx)(o_,{$space:R?qg:1,ref:N}),allowBackgroundMenu:!1})}),_&&(0,P.jsx)(Qo,{emptyNote:x(`Nothing selected.`),info:we,onWidth:z,selectionNote:oe.length>1?o(x,oe.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:v,videoAutoplay:b,width:se})]})]})}function Yg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function Xg(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(x(),{weekday:`long`}):t.toLocaleDateString(x(),{year:`numeric`,month:`long`,day:`numeric`})}var Zg=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Qg=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,$g=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,e_=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,t_=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,n_=_.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,r_=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,i_=_.button`
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
`,a_=_.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,o_=_.div`
    height: ${({$space:e})=>e}px;
`,s_=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function c_({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:u=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,E.useState)([]),_=I(),[y,b]=(0,E.useState)(null),x=Ln();(0,E.useEffect)(()=>{Ye().then(e=>{b(e),g(Ds(e).filter(e=>e.pinned))},()=>{b(null),g([])})},[c]),(0,E.useEffect)(()=>{if(!N.available)return;let e=h.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return N.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>N.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[h,s]);let S=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:y?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??y?.placeIcons?.[n]??null}}),ee=o===`files`;return(0,P.jsxs)(m_,{children:[(0,P.jsxs)(h_,{children:[!u.includes(`home`)&&(0,P.jsxs)(b_,{$active:o===`home`,onClick:e=>m(`home`,Kt(e)),title:_(`Overview`),type:`button`,children:[(0,P.jsx)(Vi,{}),(0,P.jsx)(S_,{children:_(`Overview`)})]}),!u.includes(`recycle`)&&(0,P.jsxs)(b_,{$active:o===`recycle`,onClick:e=>m(`recycle`,Kt(e)),title:_(`Recycle Bin`),type:`button`,children:[(0,P.jsx)(xi,{}),(0,P.jsx)(S_,{children:_(`Recycle Bin`)})]}),!u.includes(`gallery`)&&(0,P.jsxs)(b_,{$active:o===`gallery`,onClick:e=>m(`gallery`,Kt(e)),title:_(`Gallery`),type:`button`,children:[(0,P.jsx)(ki,{}),(0,P.jsx)(S_,{children:_(`Gallery`)})]})]}),h.map(e=>(0,P.jsxs)(__,{children:[(0,P.jsxs)(b_,{as:`div`,$active:!1,children:[(0,P.jsx)(x_,{children:(0,P.jsx)(ks,{panel:e,size:16})}),(0,P.jsx)(S_,{children:_(e.title)})]}),(0,P.jsx)(v_,{children:(0,P.jsxs)(y_,{children:[e.kind===`quick`&&S(e).map(e=>(0,P.jsxs)(b_,{$active:ee&&t(a,e.path),onClick:t=>p(e.path,Kt(t)),title:e.path,type:`button`,children:[(0,P.jsx)(As,{place:e}),(0,P.jsx)(S_,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let n=Rn(x,e.path);return(0,P.jsxs)(b_,{$active:ee&&t(a,e.path),onClick:t=>e.isDirectory?p(e.path,Kt(t)):void Se(e.path),title:e.path,type:`button`,children:[n&&x.useIcons?(0,P.jsx)(As,{place:n}):(0,P.jsx)(Js,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,P.jsx)(S_,{children:n?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,P.jsx)(d_,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,P.jsxs)(b_,{$active:ee&&t(a,e.name),onClick:t=>p(e.name,Kt(t)),title:e.name,type:`button`,children:[(0,P.jsx)(si,{}),(0,P.jsxs)(S_,{children:[d(e),(0,P.jsxs)(C_,{children:[f(e.freeSpace),` free`]}),(0,P.jsx)(w_,{children:(0,P.jsx)(T_,{$used:n,$tone:w(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,P.jsx)(f_,{onNavigate:p,path:e.path||s})]})})]},e.id)),!u.includes(`settings`)&&(0,P.jsx)(g_,{children:(0,P.jsxs)(b_,{$active:o===`settings`,onClick:e=>m(`settings`,Kt(e)),title:_(`Settings`),type:`button`,children:[(0,P.jsx)(hi,{}),(0,P.jsx)(S_,{children:_(`Settings`)})]})})]})}var l_=10,u_=40;function d_({historyVersion:e=0,onNavigate:t}){let n=I(),[r,i]=(0,E.useState)(null),a=Ln();return(0,E.useEffect)(()=>{Ve().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Rn(a,e.path);return(0,P.jsxs)(b_,{$active:!1,onClick:n=>t(e.path,Kt(n)),title:o(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,P.jsx)(As,{place:r}):(0,P.jsx)(Js,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,P.jsx)(S_,{children:r?.name||e.name})]},e.path)})}function f_({path:e,onNavigate:n}){let[r,i]=(0,E.useState)(null);(0,E.useEffect)(()=>{e&&(i(null),Ce(e,!1).then(i,()=>i(null)))},[e]),(0,E.useEffect)(()=>{if(e&&N.available)return N.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Ce(e,!1).then(i,()=>void 0)})},[e]);let a=r?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,l_),s=a.filter(e=>!e.isDirectory).slice(0,u_);return(0,P.jsxs)(P.Fragment,{children:[o.map(e=>(0,P.jsx)(p_,{entry:e,onNavigate:n},e.fullPath)),s.map(e=>(0,P.jsx)(p_,{entry:e,onNavigate:n},e.fullPath))]})}function p_({entry:e,onNavigate:t}){let n=Ln(),r=Rn(n,e.fullPath);return(0,P.jsxs)(b_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Kt(n)):void Se(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,P.jsx)(As,{place:r}):(0,P.jsx)(Js,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,P.jsx)(S_,{children:r?.name||e.name})]})}var m_=_.aside`
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

    &:not(:hover) ${()=>C_},
    &:not(:hover) ${()=>w_} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,h_=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,g_=_(h_)`
    margin-top: auto;
`,__=_.div`
    display: flex;
    flex-direction: column;
`,v_=_.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${m_}:hover ${__}:hover > & {
        grid-template-rows: 1fr;
    }
`,y_=_.div`
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
`,b_=_.button`
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
`,x_=_.span`
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
`,S_=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,C_=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,w_=_.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,T_=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,E_=_.span`
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
`;function D_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=I(),a=(0,E.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,E.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,P.jsxs)(k_,{ref:a,children:[(0,P.jsxs)(A_,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,P.jsx)(bi,{size:13}),c>0&&(0,P.jsx)(E_,{children:c>9?`9+`:c})]}),n&&(0,P.jsxs)(j_,{children:[(0,P.jsxs)(M_,{children:[(0,P.jsx)(N_,{children:i(`Status center`)}),(0,P.jsxs)(P_,{children:[(0,P.jsx)(F_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,P.jsx)(I_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,P.jsx)(Ci,{size:10})})]})]}),e.length===0?(0,P.jsx)(R_,{children:i(`No operations yet.`)}):(0,P.jsx)(L_,{children:e.map(e=>(0,P.jsx)(O_,{task:e},e.id))})]})]})}function O_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,P.jsxs)(z_,{children:[(0,P.jsxs)(B_,{children:[(0,P.jsx)(V_,{$state:e.state,children:e.state===`done`?(0,P.jsx)(Si,{size:10}):e.state===`failed`?(0,P.jsx)(Ci,{size:10}):(0,P.jsx)(H_,{})}),(0,P.jsx)(U_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,P.jsxs)(W_,{children:[f(e.bytesDone),` / `,f(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,P.jsxs)(W_,{children:[e.done,` / `,e.total]})]}),i&&(0,P.jsx)(G_,{children:(0,P.jsx)(K_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,P.jsx)(q_,{children:e.error})]})}var k_=_.div`
    position: relative;
    display: flex;
`,A_=_.button`
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
`,j_=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${La}
    ${Xa}
`,M_=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,N_=_.span`
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
`,P_=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,F_=_.button`
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
`,I_=_.button`
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
`,L_=_.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,R_=_.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,z_=_.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${Za}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,B_=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,V_=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,H_=_.span`
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
`,U_=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,W_=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,G_=_.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,K_=_.div`
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
`,q_=_.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function J_(){return N.available?(await N.request(`fs.history.list`)).entries:[]}async function Y_(e){return N.available?(await N.request(`fs.history.undoTo`,{id:e})).ok:!1}function X_(){let e=I(),[t,n]=(0,E.useState)(!1),[r,i]=(0,E.useState)([]),[a,o]=(0,E.useState)(!1),s=(0,E.useRef)(null),c=()=>void J_().then(i,()=>i([]));(0,E.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await Y_(e),c()}finally{o(!1)}};return(0,P.jsxs)($_,{ref:s,children:[(0,P.jsx)(ev,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,P.jsx)(yi,{size:14})}),t&&(0,P.jsxs)(tv,{children:[(0,P.jsxs)(nv,{children:[(0,P.jsx)(rv,{children:e(`History`)}),(0,P.jsx)(iv,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,P.jsx)(Ci,{size:10})})]}),r.length===0?(0,P.jsx)(pv,{children:e(`No operations yet.`)}):(0,P.jsx)(av,{children:r.map(t=>(0,P.jsxs)(ov,{children:[(0,P.jsxs)(sv,{children:[(0,P.jsxs)(cv,{children:[(0,P.jsx)(Q_,{label:t.label}),Z_(e,t.label)]}),(0,P.jsx)(lv,{children:S(t.at)})]}),t.paths.length>0&&(0,P.jsxs)(uv,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,P.jsx)(dv,{children:(0,P.jsx)(fv,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function Z_(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);if(t===`Paste text`)return e(`Paste text`);if(t===`Paste image`)return e(`Paste image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function Q_({label:e}){return e.startsWith(`Delete`)?(0,P.jsx)(xi,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,P.jsx)(ca,{size:13}):e.startsWith(`Rename`)?(0,P.jsx)(Hi,{size:13}):e.startsWith(`Compress`)?(0,P.jsx)(Mi,{size:13}):e.startsWith(`New`)?(0,P.jsx)(di,{size:13}):(0,P.jsx)(pi,{size:13})}var $_=_.div`
    position: relative;
    display: flex;
`,ev=_.button`
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
`,tv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${La}
    ${Xa}
`,nv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,rv=_.span`
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
`,iv=_.button`
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
`,av=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,ov=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,sv=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,cv=_.span`
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
`,lv=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,uv=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dv=_.div`
    display: flex;
    justify-content: flex-end;
`,fv=_.button`
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
`,pv=_.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function mv({currentFolder:e}){let n=I(),[r,i]=(0,E.useState)(!1),[a,o]=(0,E.useState)(null),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!r)return;let e=()=>void Sc().then(o,()=>void 0);e();let t=window.setInterval(e,2500),n=e=>{l.current?.contains(e.target)||i(!1)};return window.addEventListener(`pointerdown`,n),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,n)}},[r]),(0,E.useEffect)(()=>{let e=()=>void Sc().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(n=>t(n.path,e))??!1;return(0,P.jsxs)(hv,{ref:l,children:[(0,P.jsxs)(gv,{$active:r,onClick:()=>i(e=>!e),title:n(`Share folders`),type:`button`,children:[(0,P.jsx)(na,{size:15}),a&&a.shares.length>0&&(0,P.jsx)(E_,{children:a.shares.length>9?`9+`:a.shares.length})]}),r&&(0,P.jsxs)(_v,{children:[(0,P.jsxs)(vv,{children:[(0,P.jsx)(yv,{children:n(`Share`)}),(0,P.jsx)(bv,{onClick:()=>i(!1),title:n(`Close`),type:`button`,children:(0,P.jsx)(Ci,{size:10})})]}),(0,P.jsxs)(xv,{children:[(0,P.jsxs)(Sv,{children:[(0,P.jsx)(Ei,{size:15}),(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`strong`,{children:a?.deviceName||n(`This device`)}),(0,P.jsx)(Cv,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,P.jsx)(wv,{children:n(`No folders are shared yet.`)}),a?.shares.map(e=>(0,P.jsxs)(Tv,{children:[(0,P.jsxs)(Ev,{children:[(0,P.jsx)(Dv,{title:e.path,children:e.name}),(0,P.jsx)(kv,{disabled:s,onClick:()=>void u(()=>wc(e.id)),title:n(`Stop sharing`),type:`button`,children:(0,P.jsx)(Ci,{size:10})})]}),(0,P.jsx)(Ov,{title:e.path,children:e.path}),(0,P.jsxs)(Av,{children:[(0,P.jsxs)(jv,{$active:e.mode===`client`,onClick:()=>void u(()=>Tc(e.id,`client`)),title:n(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,P.jsx)(Ei,{size:11}),n(`App`)]}),(0,P.jsxs)(jv,{$active:e.mode===`web`,onClick:()=>void u(()=>Tc(e.id,`web`)),title:n(`Any device with a browser can open this folder.`),type:`button`,children:[(0,P.jsx)(ia,{size:11}),n(`Web`)]})]})]},e.id)),(0,P.jsxs)(Mv,{disabled:s||e.length===0||d,onClick:()=>void u(()=>Cc(e,`client`)),title:d?n(`This folder is already shared.`):e,type:`button`,children:[(0,P.jsx)(di,{size:12}),n(`Share this folder`)]}),a?.webRunning&&(0,P.jsxs)(Nv,{children:[(0,P.jsxs)(Pv,{children:[(0,P.jsx)(ia,{size:12}),n(`Browser access`)]}),a.urls.map(e=>(0,P.jsx)(Fv,{onClick:()=>void dt(e),type:`button`,children:e},e)),(0,P.jsx)(Cv,{children:n(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var hv=_.div`
    position: relative;
    display: flex;
`,gv=_.button`
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
`,_v=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${La}
    ${Xa}
`,vv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,yv=_.span`
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
`,bv=_.button`
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
`,xv=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,Sv=_.div`
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
`,Cv=_.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,wv=_.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,Tv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,Ev=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Dv=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ov=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,kv=_.button`
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
`,Av=_.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,jv=_.button`
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
`,Mv=_.button`
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
`,Nv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,Pv=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Fv=_.button`
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
`;function Iv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=I(),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,E.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Qc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,P.jsxs)(Lv,{ref:l,children:[(0,P.jsx)(Rv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,P.jsx)(vi,{size:14}):(0,P.jsx)(_i,{size:14})}),s&&(0,P.jsxs)(zv,{children:[(0,P.jsx)(Bv,{children:o(`View`)}),(0,P.jsxs)(Hv,{children:[(0,P.jsxs)(Uv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,P.jsx)(_i,{size:12}),` `,o(`List`)]}),(0,P.jsxs)(Uv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,P.jsx)(vi,{size:12}),` `,o(`Grid`)]})]}),(0,P.jsx)(Bv,{children:o(`List icon size`)}),(0,P.jsxs)(Wv,{children:[(0,P.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,P.jsxs)(Gv,{children:[e.iconSize,`px`]})]}),(0,P.jsx)(Bv,{children:o(`Grid size`)}),(0,P.jsxs)(Wv,{children:[(0,P.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,P.jsxs)(Gv,{children:[e.gridSize,`px`]})]}),(0,P.jsxs)(Bv,{children:[o(`Columns`),(0,P.jsx)(Am,{}),(0,P.jsx)(Vv,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`Reset column widths`),type:`button`,children:o(`Reset widths`)})]}),Qc.map(e=>(0,P.jsxs)(Kv,{children:[(0,P.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,P.jsxs)(Kv,{children:[(0,P.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,P.jsxs)(Bv,{children:[o(`Preview panel`),(0,P.jsx)(Am,{})]}),(0,P.jsxs)(Kv,{children:[(0,P.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var Lv=_.div`
    position: relative;
    display: flex;
    height: 100%;
`,Rv=_.button`
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
`,zv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${La}
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
`,Bv=_.div`
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
`,Vv=_.button`
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
`,Hv=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Uv=_.button`
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
`,Wv=_.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Gv=_.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Kv=_.label`
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
`,qv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Jv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Yv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Xv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,P.jsx)(`path`,{d:`M2 5h6`})}),Zv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,P.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Qv=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,P.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,P.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function $v({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:ee,onToggleDetails:te,shortcuts:ne,currentFolder:re}){let C=I(),w=me(),ie=he(),[T,ae]=(0,E.useState)({left:!1,right:!1}),[D,oe]=(0,E.useState)(null),[O,se]=(0,E.useState)(null),k=(0,E.useRef)(null),A=(0,E.useRef)(null),j=(0,E.useRef)(null),M=(0,E.useCallback)(()=>{let e=A.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ae(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,E.useEffect)(()=>{M();let e=A.current;if(!e)return;let t=new ResizeObserver(M);return t.observe(e),()=>t.disconnect()},[M,e.length]),(0,E.useEffect)(()=>()=>{k.current&&window.clearTimeout(k.current.timer)},[]),(0,E.useEffect)(()=>{j.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ce=e=>A.current?.scrollBy({left:e,behavior:`smooth`}),le=()=>{k.current&&window.clearTimeout(k.current.timer),k.current=null,se(null)};return(0,P.jsxs)(ry,{children:[(0,P.jsx)(iy,{children:(0,P.jsx)(Ei,{size:19})}),(0,P.jsxs)(ay,{children:[T.left&&(0,P.jsx)(sy,{onClick:()=>ce(-180),title:C(`Scroll tabs left`),type:`button`,children:(0,P.jsx)(qv,{})}),(0,P.jsx)(oy,{onScroll:M,onWheel:e=>{let t=A.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:A,children:e.map(e=>(0,P.jsxs)(cy,{$active:e.id===t,$dragging:D===e.id,$dropTarget:O===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Zs(t.dataTransfer)||!ey(e)||(t.preventDefault(),k.current?.id===e.id))return;le(),se(e.id);let r=window.setTimeout(()=>{n(e.id),k.current=null},500);k.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(k.current?.id===e.id||O===e.id)&&le()},onDragEnd:()=>{oe(null),le()},onDragOver:t=>{(D||Zs(t.dataTransfer)&&ey(e))&&(t.preventDefault(),Zs(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>oe(e.id),onDrop:t=>{if(t.preventDefault(),D)a(D,e.id);else if(ey(e)&&Zs(t.dataTransfer)){let{paths:r,move:i}=Qs(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}oe(null),le()},onClick:()=>n(e.id),ref:e.id===t?j:void 0,title:e.path||e.title,type:`button`,children:[(0,P.jsx)(ty,{tab:e}),(0,P.jsx)(ly,{children:e.title}),e.partner&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(uy,{children:`|`}),(0,P.jsx)(ny,{place:e.partner.place}),(0,P.jsx)(ly,{children:e.partner.title})]}),(0,P.jsx)(dy,{"data-shortcut":Jt(ne.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:C(`Close tab`),children:(0,P.jsx)(Yv,{})})]},e.id))}),T.right&&(0,P.jsx)(sy,{onClick:()=>ce(180),title:C(`Scroll tabs right`),type:`button`,children:(0,P.jsx)(Jv,{})}),(0,P.jsx)(fy,{"data-shortcut":Jt(ne.newTab),onClick:i,title:C(`New tab`),type:`button`,children:(0,P.jsx)(di,{size:13})})]}),(0,P.jsx)(py,{...ie}),(0,P.jsxs)(my,{children:[(0,P.jsx)(gy,{$active:y,"data-shortcut":Jt(ne.splitView),disabled:!b,onClick:x,title:C(y?`Close split view`:`Split view`),type:`button`,children:(0,P.jsx)(pa,{size:15})}),(0,P.jsx)(gy,{$active:S,disabled:!ee,onClick:te,title:C(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,P.jsx)(ma,{size:15})}),(0,P.jsxs)(hy,{$active:_,onClick:v,title:C(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,P.jsx)(ra,{size:14}),g>0&&(0,P.jsx)(E_,{children:g>9?`9+`:g})]}),(0,P.jsx)(X_,{}),(0,P.jsx)(mv,{currentFolder:re}),(0,P.jsx)(D_,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,P.jsx)(Iv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,P.jsx)(_y,{onClick:w.minimize,title:C(`Minimize`),type:`button`,children:(0,P.jsx)(Xv,{})}),(0,P.jsx)(_y,{onClick:w.toggleMaximize,title:w.maximized?C(`Restore`):C(`Maximize`),type:`button`,children:w.maximized?(0,P.jsx)(Qv,{}):(0,P.jsx)(Zv,{})}),(0,P.jsx)(vy,{onClick:w.close,title:C(`Close`),type:`button`,children:(0,P.jsx)(Yv,{})})]})]})}function ey(e){return e.kind===`files`&&(!p(e.path)||T(e.path))}function ty({tab:e}){switch(e.kind){case`home`:return(0,P.jsx)(ii,{size:13});case`settings`:return(0,P.jsx)(hi,{size:13});case`recycle`:return(0,P.jsx)(xi,{size:13});default:return e.archive?(0,P.jsx)(Mi,{size:13}):(0,P.jsx)(ny,{place:e.place})}}function ny({place:e}){return e?(0,P.jsx)(As,{place:e,size:13}):(0,P.jsx)(ai,{size:13})}var ry=_.header`
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
`,iy=_.span`
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
`,ay=_.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,oy=_.div`
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
`,sy=_.button`
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
`,cy=_.button`
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
`,ly=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,uy=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,dy=_.span`
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
`,fy=_.button`
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
`,py=_.div`
    flex: 1;
    min-width: 28px;
`,my=_.div`
    display: flex;
    flex-shrink: 0;
`,hy=_.button`
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
`,gy=_.button`
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
`,_y=_.button`
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
`,vy=_(_y)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function yy(){let[e,t]=(0,E.useState)(null),n=(0,E.useRef)(null),r=(0,E.useRef)(void 0);return(0,E.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Ia.createPortal)((0,P.jsx)(by,{tooltip:e}),document.body):null}function by({tooltip:e}){let t=(0,E.useRef)(null),[n,r]=(0,E.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,E.useState)(()=>e.bottom+6);return(0,E.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,P.jsxs)(xy,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,P.jsx)(Sy,{children:e.text}),e.shortcut&&(0,P.jsx)(Cy,{children:e.shortcut})]})}var xy=_.div`
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
    ${Za}
`,Sy=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Cy=_.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,wy={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function Ty({deviceName:e,code:t,onAccept:n,onReject:r}){let i=I(),a=(0,E.useRef)(null);return(0,E.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Ia.createPortal)((0,P.jsx)(Ey,{children:(0,P.jsxs)(Dy,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsxs)(Oy,{children:[(0,P.jsx)(na,{size:15}),i(`Pair for sharing`)]}),(0,P.jsx)(ky,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,P.jsx)(Ay,{children:t}),(0,P.jsx)(jy,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,P.jsxs)(My,{children:[(0,P.jsx)(Ny,{onClick:r,type:`button`,children:i(`Reject`)}),(0,P.jsx)(Py,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var Ey=_.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Za}
`,Dy=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Ka}
`,Oy=_.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,ky=_.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,Ay=_.div`
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
`,jy=_.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,My=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Ny=_.button`
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
`,Py=_(Ny)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Fy=0,Iy=new Set;function Ly(e){Iy.add(e),N.send({type:`app.navigate.done`,payload:{path:e}})}var Ry=20,zy=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function By(e){return e.history[e.index]??wp(`home`)}function Vy(e){return Tp(By(e))??`files`}function Hy(e){let t=By(e);return Tp(t)?``:e.listing?.path||t}function Uy(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Vy(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Wy(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Gy(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||B.iconSize,gridSize:e.view?.gridSize||t.gridSize||B.gridSize,sort:e.view?.sort??B.sort,sortDescending:e.view?.sortDescending??B.sortDescending,columns:t.columns??be.columns??[]}}function Ky(e=wp(`home`)){return Fy+=1,{id:`tab-${Fy}`,listing:null,loading:!Tp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function qy(e){return e instanceof Error?e.message:String(e)}function Jy(e){let t=Nc(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return Pc(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Yy(e){let t=v(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Xy(e){return p(e)?$t(e):void 0}function Zy(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:f(n)})}function Qy(){let e=I(),[n,r]=(0,E.useState)(()=>[Ky()]),[i,a]=(0,E.useState)(()=>n[0].id),[o,s]=(0,E.useState)(null),[d,f]=(0,E.useState)(()=>{let e=Bn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[m,h]=(0,E.useState)([]),[g,_]=(0,E.useState)([]),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(null),[ne,re]=(0,E.useState)(null),C=ge(),[w,ie]=(0,E.useState)(bn),[ae,D]=(0,E.useState)(0),[oe,O]=(0,E.useState)(0),[se,k]=(0,E.useState)(0),[A,j]=(0,E.useState)(bn),[M,ce]=(0,E.useState)(0),[le,ue]=(0,E.useState)(0),[de,fe]=(0,E.useState)(0),[F,pe]=(0,E.useState)(0),L=(0,E.useRef)(F);L.current=F;let[me,he]=(0,E.useState)([]),[R,ve]=(0,E.useState)(10),[z,xe]=(0,E.useState)(null),Ee=(0,E.useMemo)(()=>(z?.favorites??[]).map(e=>l(e.path)),[z?.favorites]),[Me,Ne]=(0,E.useState)(0),[H,Pe]=(0,E.useState)(Ut),[Fe,Ie]=(0,E.useState)(0),[Le,Re]=(0,E.useState)(0),[ze,Ve]=(0,E.useState)(0),[Ue,We]=(0,E.useState)(!0),[Ge,qe]=(0,E.useState)(()=>{let e=Bn(`yafm.preview.width`,320);return e>=220?e:320}),[Je,Xe]=(0,E.useState)(null),[Ze,Qe]=(0,E.useState)(null),[$e,et]=(0,E.useState)(`primary`),[tt,nt]=(0,E.useState)(null),[rt,ot]=(0,E.useState)(null),[st,ut]=(0,E.useState)(null),[dt,ft]=(0,E.useState)(null),[U,pt]=(0,E.useState)({primary:0,secondary:0}),[mt,ht]=(0,E.useState)({primary:null,secondary:null}),[gt,_t]=(0,E.useState)(null),[yt,Tt]=(0,E.useState)([]),[Dt,Ot]=(0,E.useState)(!1),kt=(0,E.useRef)([]),jt=(0,E.useRef)([]),[Mt,Nt]=(0,E.useState)([]),[Pt,Ft]=(0,E.useState)(!1),Rt=(0,E.useMemo)(()=>Pt?new Set(Mt.map(e=>e.path)):new Set,[Mt,Pt]),[zt,Bt]=(0,E.useState)(!1),[Wt,Yt]=(0,E.useState)([]),[Zt,Qt]=(0,E.useState)(null),rn=(0,E.useRef)(0),[an,on]=(0,E.useState)(()=>{let e=Hn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Wy({x:e.x,y:e.y}):Wy({x:Math.max(20,window.innerWidth-340),y:110})}),sn=(0,E.useCallback)(()=>{on(e=>Wy(e)),Bt(!0)},[]),G=n.find(e=>e.id===i)??n[0],K=Vy(G),un=By(G),dn=Hy(G),fn=K===`files`?G.listing?.parent??Jy(dn):null,q=G.splitWith?n.find(e=>e.id===G.splitWith):void 0,pn=K===`files`&&q!==void 0,mn=q?Hy(q):``,hn=q?q.listing?.parent??Jy(mn):null,gn=pn&&q&&$e===`secondary`?q:G,_n=z?.defaultView??be,vn=Gy(gn,_n);(0,E.useEffect)(()=>{ee(z?.accentColor,z?.secondaryColor)},[z?.accentColor,z?.secondaryColor]),(0,E.useEffect)(()=>{Pm(z?.fonts)},[z?.fonts]),(0,E.useEffect)(()=>{te(z?.timeFormat,z?.timeFormatPattern)},[z?.timeFormat,z?.timeFormatPattern]),(0,E.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!z?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[z?.backgroundSource]),(0,E.useEffect)(()=>(ye(e=>new Promise(t=>{Qt({id:++rn.current,prompt:e,resolve:t})})),()=>ye(null)),[]),(0,E.useEffect)(()=>{et(`primary`)},[i]),(0,E.useEffect)(()=>{j(bn),ue(0),fe(0)},[K]),(0,E.useEffect)(()=>{ue(0)},[A.query,A.matchCase,A.regex]),(0,E.useEffect)(()=>{ue(e=>de===0?0:Math.min(e,de-1))},[de]);let yn=vn.columns.includes(`linkCount`),xn=(0,E.useMemo)(()=>{let e={},t=Ds(z),n={};for(let[e,t]of Object.entries(z?.placeNames??{}))n[l(e)]=t;for(let t of m)e[l(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=l(t),i=m.find(e=>l(e.path)===r);e[r]={name:n[r]??i?.name??(v(t)||t),path:t,kind:`folder`,icon:i?.icon??z?.placeIcons?.[t]??null}}return e},[m,z]),Sn=(0,E.useMemo)(()=>({places:xn,useIcons:z?.systemIcons===!1}),[xn,z?.systemIcons]),Cn=z?.defaultView?.showImages??!0,wn=z?.defaultView?.imageStripHeight??be.imageStripHeight,Tn=K===`home`?(0,P.jsx)(Vi,{size:13}):K===`settings`?(0,P.jsx)(hi,{size:13}):K===`recycle`?(0,P.jsx)(xi,{size:13}):K===`gallery`?(0,P.jsx)(ki,{size:13}):void 0,En=w.open&&w.query.length>0,Dn=(0,E.useMemo)(()=>En&&gn.listing?gn.listing.entries.filter(e=>kn(e.isDirectory?zn(Sn,e.fullPath,e.name):e.name,w)).map(e=>e.fullPath):[],[En,w,gn.listing,Sn]);(0,E.useEffect)(()=>{D(0)},[w.query,w.matchCase,w.regex,gn.listing?.path]);let On=Dn.length===0?-1:Math.min(ae,Dn.length-1),An=(0,E.useCallback)(()=>{ie(e=>({...e,open:!1,query:``})),D(0)},[]),jn=(0,E.useCallback)(()=>{ie(e=>({...e,open:!0})),O(e=>e+1)},[]),Mn=(0,E.useCallback)(()=>{j(e=>({...e,open:!0})),ce(e=>e+1)},[]),Nn=(0,E.useCallback)(()=>{j(bn),ue(0),fe(0)},[]),Pn=(0,E.useCallback)(e=>{ue(t=>de===0?0:(Math.min(t,de-1)+e+de)%de)},[de]),Fn=(0,E.useCallback)(e=>{ie(t=>({...t,open:!0,query:t.open?t.query+e:e})),O(e=>e+1)},[]),Ln=(0,E.useCallback)(e=>{D(t=>Dn.length===0?0:(Math.min(t,Dn.length-1)+e+Dn.length)%Dn.length)},[Dn.length]),Wn=(0,E.useRef)({tabs:n,activeId:i,activePane:$e});Wn.current={tabs:n,activeId:i,activePane:$e};let Gn=(0,E.useRef)(z);Gn.current=z;let Kn=(0,E.useRef)(!1),qn=(0,E.useRef)([]),Jn=(0,E.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Yn=(0,E.useRef)(new Map),Xn=(0,E.useCallback)(e=>{let t=(Yn.current.get(e)??0)+1;return Yn.current.set(e,t),()=>Yn.current.get(e)===t},[]),Zn=(0,E.useCallback)((e,t)=>{N.available&&t&&e===Uy(Wn.current)&&N.send({type:`fs.focus`,payload:{path:t}})},[]),Qn=(0,E.useCallback)(async(e,t,n)=>{if(!(t&&Mc(t)))try{let r=await ke(t,yn);if(!n()||!r.listing)return;Jn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[yn,Jn]),$n=(0,E.useCallback)(async(e,n,r=!1)=>{let i=Xn(e);An(),Zn(e,n);let a=!r||!Wn.current.tabs.find(t=>t.id===e)?.listing,o=!r&&n!==void 0;Jn(e,e=>{if(!o)return{listing:r?e.listing:null,loading:!0,error:null,fresh:r&&e.fresh};let i=e.history[e.index],a=i!==void 0&&t(i,n);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),n],index:a?e.index:e.index+1}});try{a&&Qn(e,n,i);let t=n&&Mc(n)?await Fc(n):await Ce(n,!0,yn,L.current,n?Xy(n):void 0);if(!i())return;Jn(e,e=>({listing:t,view:t.view??null,loading:!1,fresh:!1,history:o?e.history.map((n,r)=>r===e.index?t.path:n):e.history,index:e.index})),!r&&!Mc(t.path)&&He(t.path).then(()=>Ne(e=>e+1))}catch(t){if(!i())return;let a=Wn.current.tabs.find(t=>t.id===e),o=n&&n.length>0?n:a?Hy(a):``,s=Jy(o),c=qy(t);if(o&&nn(c)){let t=u(o),a=await Ea(t,!!$t(t));if(a){en(t,a),i()&&$n(e,n,r);return}}Jn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...r?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Xn,yn,Jn,Zn,An,Qn]),er=(0,E.useCallback)((e,t)=>{let n=Ep(t);n&&(Tp(n)?(An(),Xn(e),Jn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):$n(e,n))},[Xn,$n,Jn,An]),tr=(0,E.useCallback)(async(e,t,n)=>{if(An(),Tp(t)){Xn(e),Jn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Xn(e);Zn(e,t),Jn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Mc(t)||Qn(e,t,r);let n=Mc(t)?await Fc(t):await Ce(t,!0,yn,L.current,Xy(t));if(!r())return;Jn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(nn(qy(i))){let i=u(t),a=await Ea(i,!!$t(i));if(a){en(i,a),r()&&tr(e,t,n);return}}Jn(e,()=>({listing:{path:t,parent:Jy(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:qy(i)}))}},[Xn,yn,Jn,Zn,An,Qn]),nr=(0,E.useCallback)((e,t=!0)=>{let n=Ky(e??wp(`home`));return r(e=>[...e,n]),t&&a(n.id),e&&!Tp(e)&&$n(n.id,e),n.id},[$n]),rr=(0,E.useCallback)(e=>{for(let n of Wn.current.tabs)Vy(n)===`files`&&t(Hy(n),e)&&$n(n.id,e,!0)},[$n]),ir=(0,E.useCallback)((e,n)=>{let r=v(n);for(let i of Wn.current.tabs)i.listing?.entries.some(n=>t(n.fullPath,e))&&Jn(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>t(i.fullPath,e)?{...i,name:r,fullPath:n}:i);return{listing:{...a,entries:o}}})},[Jn]),ar=(0,E.useRef)([]);(0,E.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&p(n)&&e.add(l(u(n)))}let t=ar.current.filter(t=>!e.has(t));ar.current=[...e],t.length>0&&Te(t)},[n]);let or=(0,E.useCallback)((e,t=!1)=>{t?nr(wp(e)):er(Wn.current.activeId,wp(e))},[nr,er]),sr=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Wn.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(jt.current.push(By(i)),jt.current.length>Ry&&jt.current.shift()),o.length===0){let e=Ky();r([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);r(o),n===e&&a(o[Math.min(s,o.length-1)].id)},[]),cr=(0,E.useCallback)(()=>{let e=jt.current.pop();if(!e)return;let t={...Ky(e),fresh:!1};r(e=>[...e,t]),a(t.id),Vy(t)===`files`&&$n(t.id,Hy(t))},[$n]),lr=(0,E.useCallback)((e,t=!1)=>{t?nr(e):er(Uy(Wn.current),e??wp(`home`))},[er,nr]),ur=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Wn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),dr=(0,E.useCallback)(()=>{let{tabs:e,activeId:t}=Wn.current,n=e.find(e=>e.id===t);if(!n||Vy(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),Jn(t,()=>({splitWith:void 0})),et(`primary`);return}let a=Hy(n),o={...Ky(a),hidden:!0};r(e=>[...e,o]),Jn(t,()=>({splitWith:o.id})),$n(o.id,a),et(`primary`)},[$n,Jn]),fr=(0,E.useCallback)(e=>{qe(e),Vn(`yafm.preview.width`,e)},[]),pr=pn?$e===`secondary`?Ze??Je:Je??Ze:Je,mr=(0,E.useRef)(null),hr=e=>{e.preventDefault();let t=mr.current?.getBoundingClientRect();if(!t)return;let n=Ue?Ge:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);f(n),Vn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},gr=(e,t,n)=>{t&&nt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},_r=(0,E.useCallback)((e,t)=>{pt(n=>n[e]===t?n:{...n,[e]:t})},[]),vr=(0,E.useCallback)(e=>_r(`primary`,e),[_r]),yr=(0,E.useCallback)(e=>_r(`secondary`,e),[_r]),br=(e,t)=>{U[e]!==0&&ht(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},xr=async(e,t=!1)=>{let n=tt;if(nt(null),!n)return;let r=e===null?await Et(n.directory,t):await At(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;An(),_t(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Sr=(0,E.useCallback)(()=>{let{tabs:e}=Wn.current,t=e.find(e=>e.id===Uy(Wn.current));t&&t.index>0&&tr(t.id,t.history[t.index-1],t.index-1)},[tr]),Cr=(0,E.useCallback)(()=>{let{tabs:e}=Wn.current,t=e.find(e=>e.id===Uy(Wn.current));t&&t.index<t.history.length-1&&tr(t.id,t.history[t.index+1],t.index+1)},[tr]),wr=(0,E.useCallback)(()=>{let{tabs:e}=Wn.current,t=e.find(e=>e.id===Uy(Wn.current));t&&Vy(t)===`files`&&t.listing?.parent&&lr(t.listing.parent)},[lr]),Tr=(0,E.useRef)(null),Er=(0,E.useCallback)(()=>{for(let e of Wn.current.tabs)e.listing&&$n(e.id,e.listing.path,!0)},[$n]),Dr=(0,E.useCallback)(e=>{e.length!==0&&(Yt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),sn())},[sn]),Or=(0,E.useCallback)(async e=>{let t=await St(e);t.length!==0&&Dr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Dr]),kr=(0,E.useCallback)(e=>{let t=new Set(e);Yt(e=>e.filter(e=>!t.has(e.path)))},[]),Ar=(0,E.useCallback)(async e=>{let t=Gn.current;if(!t)return;let n=await St(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>l(e.path))),i=n.filter(e=>!r.has(l(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};xe(a),await it(a),Ie(e=>e+1)},[]),jr=(0,E.useCallback)(async e=>{let t=Gn.current;if(!t)return;let n=new Set(e.map(l)),r=(t.favorites??[]).filter(e=>!n.has(l(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};xe(i),await it(i),Ie(e=>e+1)},[]),Mr=(0,E.useCallback)(()=>Yt([]),[]),Nr=(0,E.useRef)(-1),Pr=(0,E.useCallback)(e=>{Nt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Ft(e.move),e.entries.length>0&&sn()},[sn]),Fr=(0,E.useCallback)(async()=>{if(N.available)try{let e=await bt();Nr.current=e.sequence,Pr(e)}catch{}},[Pr]),Ir=(0,E.useCallback)(async e=>{e.length!==0&&await vt(e,!1)&&await Fr()},[Fr]),Lr=(0,E.useRef)(Wt);Lr.current=Wt;let Rr=(0,E.useRef)(zt);Rr.current=zt;let zr=(0,E.useRef)(!1);(0,E.useEffect)(()=>{let e=z?.trayAutoShow??!0,t=t=>{e&&Zs(t)&&(Rr.current||(zr.current=!0),sn())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{zr.current&&window.setTimeout(()=>{zr.current&&Lr.current.length===0&&Bt(!1),zr.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[sn,z?.trayAutoShow]),(0,E.useEffect)(()=>{let e=()=>on(e=>Wy(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Br=(0,E.useCallback)(async()=>{let e=Lr.current;if(e.length>0){let t=await St(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Yt(e=>e.filter(e=>n.has(e.path)))}await Fr()},[Fr]),Vr=(0,E.useCallback)(()=>{Br(),Ve(e=>e+1),Er()},[Br,Er]),Hr=(0,E.useCallback)(e=>{let t=Wy(e);on(t),Un(`yafm.tray.position`,t)},[]),Ur=(0,E.useCallback)(()=>{zr.current=!1,zt?Bt(!1):sn()},[sn,zt]),Wr=(0,E.useCallback)(async(t,n,r)=>{let i=await xt(t,n,r);i.ok?(r&&kr(t),Ve(e=>e+1),Er(),Fr()):wa(i.error??e(`The files could not be transferred.`))},[Er,Fr,kr]);(0,E.useEffect)(()=>{if(N.available)return W().then(e=>{kt.current=e,Tt(e)},()=>void 0),N.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=kt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});kt.current=n,Tt(n),r&&Ot(!0)})},[]);let Gr=(0,E.useCallback)(()=>{Ht().then(()=>W().then(e=>{kt.current=e,Tt(e)},()=>void 0))},[]);(0,E.useEffect)(()=>{if(!N.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await bt();if(!e||t.sequence===Nr.current)return;Nr.current=t.sequence,Pr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Pr]);let Kr=(0,E.useCallback)(async e=>{let t=e?await It():await Lt();t.ok?(Ve(e=>e+1),Er()):t.error&&!t.error.startsWith(`Nothing to`)&&wa(t.error)},[Er]),qr=(0,E.useRef)(yn);(0,E.useEffect)(()=>{qr.current!==yn&&(qr.current=yn,Er())},[yn,Er]);let Jr=(0,E.useCallback)((e,t)=>{let{tabs:n}=Wn.current,r=n.find(t=>t.id===e);if(!r||Vy(r)!==`files`)return;let i=Hy(r),a=Gn.current?.defaultView??be,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||B.iconSize,gridSize:r.view?.gridSize||a.gridSize||B.gridSize,sort:r.view?.sort??B.sort,sortDescending:r.view?.sortDescending??B.sortDescending,...t};Jn(e,()=>({view:o})),Tr.current!==null&&window.clearTimeout(Tr.current),Tr.current=window.setTimeout(()=>{Tr.current=null,De(i,o)},250)},[Jn]),Yr=(0,E.useCallback)(e=>{Jr(Uy(Wn.current),e)},[Jr]),Xr=(0,E.useCallback)(e=>{let t=Gn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,columns:e}};xe(n),it(n)},[]),Zr=(0,E.useCallback)(e=>{let t=Gn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,showImages:e}};xe(n),it(n)},[]),Qr=(0,E.useCallback)(e=>{let t=Gn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,imageStripHeight:e}};xe(n),it(n)},[]),$r=(0,E.useCallback)((e,t,n,r)=>{let i=Wn.current.tabs.find(t=>t.id===e);if(!i||Vy(i)!==`files`||!i.listing)return;let a=Hy(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Jn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Oe(a,t,n,r)},[Jn]),ei=(0,E.useCallback)((e,t)=>{let n=Wn.current.tabs.find(t=>t.id===e);if(!n)return;let r=Gy(n,Gn.current?.defaultView??be);Jr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Jr]),ti=(0,E.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),ni=(0,E.useCallback)(()=>{Ae().then(h,()=>h([]))},[]),ri=(0,E.useCallback)(e=>{let t=(e.openTabs??[]).map(Ep).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...Ky(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),a(n[i].id);for(let e of n)Vy(e)===`files`&&$n(e.id,Hy(e),!0);return!0},[$n]),J=(0,E.useCallback)(e=>{let t=qn.current;if(qn.current=[],t.length===0)return;let n=t.filter(e=>!Iy.has(e));for(let e of t)n.includes(e)||Ly(e);if(n.length===0)return;let{tabs:r}=Wn.current;if(!e&&r.length===1&&r[0].fresh){er(r[0].id,n[0]),Ly(n[0]);for(let e of n.slice(1))nr(e),Ly(e);return}let i=n.map(e=>{let t=nr(e);return Ly(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[nr,er]),ii=(0,E.useCallback)(()=>{Ye().then(e=>{xe(e),ve(e.recentLimit);let t={...Ut,...e.shortcuts};Pe(t),Gt(t.openInNewTab),Ie(e=>e+1),Kn.current||(Kn.current=!0,J(e.restoreTabs&&ri(e)))},()=>{ve(10),Kn.current=!0,J(!1)})},[J,ri]),ai=(0,E.useCallback)(()=>{Be().then(he,()=>he([]))},[]),oi=(0,E.useCallback)(()=>{je().then(_,()=>_([]))},[]),si=n.filter(e=>!e.hidden),ui=si.map(By),mi=ui.join(`
`),gi=Math.max(si.findIndex(e=>e.id===i),0);(0,E.useEffect)(()=>{if(!z?.restoreTabs)return;let e=setTimeout(()=>void at(ui,gi),700);return()=>clearTimeout(e)},[mi,gi,z?.restoreTabs]),(0,E.useEffect)(()=>{let{tabs:e,activeId:t}=Wn.current,n=e.find(e=>e.id===t);n&&n.fresh&&Vy(n)===`files`&&$n(n.id,Hy(n),!0),ni(),ii(),oi(),ct().then(b,()=>b(null))},[$n,ni,ii,oi]),(0,E.useEffect)(()=>{if(lt().then(S,()=>S(null)),N.available)return N.on(e=>{let t=e;t.type===`app.update`&&t.data&&S(t.data)})},[]),(0,E.useEffect)(()=>{if(N.available)return N.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&s({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&wa(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&wa(n.data.error??e(`Pairing failed.`))}})},[e]),(0,E.useEffect)(()=>{let e=setInterval(oi,3e4);return()=>clearInterval(e)},[oi]),(0,E.useEffect)(()=>{K===`home`&&(ai(),oi())},[K,G.id,ai,oi]),(0,E.useEffect)(()=>{if(!N.available)return;let e=N.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Wn.current,i=t.data.startup===!0;i&&Iy.has(n)?Ly(n):i&&!Kn.current?qn.current.includes(n)||qn.current.push(n):(i&&r.length===1&&r[0].fresh?er(r[0].id,n):Tp(n)?er(Uy(Wn.current),n):nr(n),i&&Ly(n))});return N.send({type:`app.ready`}),e},[er,nr]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},r})})},[]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},r})})},[]),(0,E.useEffect)(()=>{let e=e=>{if(Xt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Sr();return}if(e.key===`BrowserForward`){e.preventDefault(),Cr();return}if(e.key===`Escape`&&w.open){e.preventDefault(),An();return}let t=qt(e);if(t===H.closeTab)e.preventDefault(),sr(Uy(Wn.current));else if(t===H.newTab)e.preventDefault(),nr();else if(t===H.reopenTab)e.preventDefault(),cr();else if(t===H.goBack)e.preventDefault(),Sr();else if(t===H.goForward)e.preventDefault(),Cr();else if(t===H.goUp)e.preventDefault(),wr();else if(t===H.find)e.preventDefault(),K===`files`?jn():Mn();else if(t===H.location)e.preventDefault(),Re(e=>e+1);else if(t===H.home){e.preventDefault();let t=m.find(e=>e.kind===`home`)?.path;t&&lr(t)}else t===H.iconsView?(e.preventDefault(),K===`files`&&Yr({mode:`grid`})):t===H.detailsView?(e.preventDefault(),K===`files`&&Yr({mode:`list`})):t===H.nextTab?(e.preventDefault(),ur(1)):t===H.previousTab?(e.preventDefault(),ur(-1)):t===H.hidden||t===`alt+.`?(e.preventDefault(),Ke().then(()=>{Ve(e=>e+1),Er()})):t===H.undo?(e.preventDefault(),Kr(!0)):t===H.redo?(e.preventDefault(),Kr(!1)):t===H.splitView?(e.preventDefault(),dr()):K!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Fn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[H,K,w.open,sr,cr,nr,Sr,Cr,wr,jn,Mn,An,Fn,Yr,ur,lr,m,Er,Kr,dr]),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Sr()):e.button===4&&(e.preventDefault(),Cr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Sr,Cr]);let _i=(0,E.useMemo)(()=>{let e=new Set;for(let t of n){if(Vy(t)!==`files`)continue;let n=Hy(t);if(n&&!Mc(n)){if(p(n)){let t=Jy(u(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),vi=_i.join(`\0`);(0,E.useEffect)(()=>{N.available&&N.send({type:`fs.watch`,payload:{paths:_i,owner:`app`}})},[vi,i]);let yi=Vy(gn)===`files`?Hy(gn):``;(0,E.useEffect)(()=>{N.available&&N.send({type:`fs.focus`,payload:{path:yi||null}})},[yi]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let n=e;if(n.type!==`fs.changed`||typeof n.data?.path!=`string`)return;let r=n.data.path,i=Wn.current.tabs.filter(e=>Vy(e)===`files`&&t(Hy(e),r)),a=Wn.current.tabs.filter(e=>{let n=Hy(e);return Vy(e)===`files`&&n.length>0&&p(n)&&t(u(n),r)});if(i.length!==0||a.length!==0){ln(r);for(let e of a){let n=Wn.current.tabs.find(t=>t.id===e.id),i=n?Hy(n):``;n&&Vy(n)===`files`&&!n.loading&&p(i)&&t(u(i),r)&&$n(e.id,i,!0)}i.length!==0&&Ce(r,!1,yn).then(e=>{for(let n of i){let r=Wn.current.tabs.find(e=>e.id===n.id);r&&Vy(r)===`files`&&t(Hy(r),e.path)&&(r.loading?window.setTimeout(()=>{let r=Wn.current.tabs.find(e=>e.id===n.id);r&&!r.loading&&Vy(r)===`files`&&t(Hy(r),e.path)&&Jn(n.id,()=>({listing:e}))},300):Jn(n.id,()=>({listing:e})))}},()=>void 0)}})},[yn,$n,Jn]);let bi=G.index>0,Si=G.index<G.history.length-1,Ci=(e,n)=>{let r=Gy(e,_n),i=e.listing?.path??e.history[e.index]??``,a=p(i),o=a&&T(i);return(0,P.jsx)(sl,{confirmDelete:z?.confirmDelete??!1,cutPaths:Rt,previewVideoAudio:z?.previewVideoAudio??!1,previewVideoAutoplay:z?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:n?Xe:Qe,onActivate:()=>et(n?`primary`:`secondary`),enableShortcuts:(!pn||(n?$e===`primary`:$e===`secondary`))&&(!a||o),error:e.error,find:e.id===gn.id?{...w,currentPath:On<0?null:Dn[On]}:void 0,selectMatchesToken:e.id===gn.id?se:0,imageStripHeight:wn,listing:e.listing,loading:e.loading,onImageStripHeight:Qr,readOnly:a&&!o||Mc(e.listing?.path??``),onOpen:(t,n)=>{n?nr(t):$n(e.id,t)},onOpenFile:(t,n)=>{Mc(t)?Lc(t).catch(e=>void wa(qy(e))):c(t)?z?.archiveHandler??!1?n?nr(t):$n(e.id,t):Se(t):p(t)?(async()=>{let e=await V(t,L.current,Xy(t));if(!e.path&&nn(e.error)){let n=u(t),r=$t(n);r&&tn(n);let i=await Ea(n,!!r);i&&(en(n,i),e=await V(t,L.current,i))}e.path?Se(e.path):e.error&&wa(e.error)})():Se(t)},onRefresh:()=>{let t=e.listing?.path;t&&rr(t)},onRename:ir,onSelectionCountChange:n?vr:yr,onSetTags:(t,n,r)=>$r(e.id,t,n,r),selectionMenuRequest:n?mt.primary:mt.secondary,onSort:t=>ei(e.id,t),onPaste:Vr,onClipboardChanged:()=>void Fr(),onTransfer:Wr,onAddToTray:e=>void Or(e),onAddFavorite:e=>void Ar(e),onRemoveFavorite:e=>void jr(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void Ai(e,t),openOnSingleClick:z?.openOnSingleClick??!1,pendingRename:gt&&n===($e===`primary`)&&t(gt.directory,e.listing?.path??``)?gt.path:null,pendingRenameToken:gt?.token??0,refreshToken:ze,shortcuts:H,showCheckboxes:z?.showCheckboxes??!0,showImages:Cn,view:r})},wi=w.open&&(0,P.jsx)(Pd,{current:On,focusToken:oe,matchCase:w.matchCase,mode:w.mode,onClose:An,onMatchCase:()=>ie(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ie(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ln(1),onPrevious:()=>Ln(-1),onQuery:e=>ie(t=>({...t,query:e})),onRegex:()=>ie(e=>({...e,regex:!e.regex})),query:w.query,regex:w.regex,total:Dn.length,onSelectMatches:Dn.length>0?()=>k(e=>e+1):void 0}),Ti=K===`files`&&p(dn),Ei=Ti&&T(dn),Di=Ti&&G.listing?.archiveEncrypted===!0,Oi=async(t,n)=>{let r=u(t),i=await we(r,n,L.current,Xy(r));if(!i.ok&&nn(i.error)){let e=$t(r);e&&tn(r);let t=await Ea(r,!!e);t&&(en(r,t),i=await we(r,n,L.current,t))}i.ok?(rr(n),cn(),$n(G.id,n,!0)):wa(`${e(`Could not extract the archive.`)}${i.error?`\n${i.error}`:``}`)},Ai=async(e,n)=>{let r=u(e),i=Jy(r);if(!i)return;if(n===`choose`){let e=await ya(i);e&&await Oi(r,e);return}let a=n===`named`;if(n===`auto`){let e=t(r,dn)?G.listing?.entries??[]:(await Ce(r,!1,!1,L.current,Xy(r))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${Yy(r)}`:i;await Oi(r,s)},ji=async e=>{Ti&&await Ai(dn,e)},Ni=async()=>{Ti&&await Ai(dn,`choose`)},Pi=(0,P.jsxs)(rb,{children:[(0,P.jsx)(ib,{"data-shortcut":Jt(H.goBack),disabled:!bi,onClick:e=>{G.index>0&&Kt(e)?nr(G.history[G.index-1]):Sr()},title:e(`Back`),type:`button`,children:(0,P.jsx)(fi,{})}),(0,P.jsx)(ib,{"data-shortcut":Jt(H.goForward),disabled:!Si,onClick:e=>{G.index<G.history.length-1&&Kt(e)?nr(G.history[G.index+1]):Cr()},title:e(`Forward`),type:`button`,children:(0,P.jsx)(pi,{})}),(0,P.jsx)(ib,{"data-shortcut":Jt(H.goUp),disabled:K!==`files`||!fn,onClick:e=>{fn&&(Kt(e)?nr(fn):lr(fn))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(li,{})}),(0,P.jsx)(Dp,{focusToken:Le,icon:Tn,label:K===`files`?void 0:e(wy[K]),onContextMenu:K===`files`?(e,t,n)=>ut({x:t,y:n,path:e}):void 0,onNavigate:lr,path:K===`files`?dn:un}),K===`files`&&(!Ti||Ei)&&(0,P.jsx)(ib,{onClick:e=>gr(e,dn,()=>void $n(G.id,dn,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(di,{})}),(0,P.jsx)(ib,{"data-shortcut":Jt(H.find),onClick:()=>K===`files`?jn():Mn(),title:e(`Search`),type:`button`,children:(0,P.jsx)(ci,{})}),U.primary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(sb,{}),(0,P.jsx)(ib,{onClick:e=>br(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(ha,{})})]}),Ti&&(0,P.jsxs)(ab,{children:[(0,P.jsx)(sb,{}),Di&&(0,P.jsxs)(ob,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(ga,{size:12}),e(`Encrypted`)]}),(0,P.jsx)(ib,{onClick:()=>void Ni(),onContextMenu:e=>{e.preventDefault(),ot({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,P.jsx)(Mi,{})}),(0,P.jsx)(ho,{icon:(0,P.jsx)(ia,{size:15}),onChange:e=>{let t=Number(e);pe(t),L.current=t,Ti&&$n(G.id,dn,!0)},options:zy.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(zy.find(e=>e.value===String(F))?.label??`Auto`)}`,value:String(F)})]})]}),Fi=A.open?{...A,index:le}:null;return(0,P.jsx)(In,{value:Sn,children:(0,P.jsxs)($y,{$rounded:C,children:[(0,P.jsx)(Zu,{settings:z}),(0,P.jsx)($v,{activeId:G.id,onClose:sr,onNewTab:()=>nr(),onReorder:ti,onTransferToTab:Wr,onSelect:a,onViewChange:Yr,onColumns:Xr,onShowImages:Zr,showImages:Cn,tasks:yt,onClearTasks:Gr,activityOpen:Dt,onActivityOpenChange:Ot,trayCount:Wt.length+Mt.length,trayVisible:zt,onToggleTray:Ur,split:pn,canSplit:K===`files`,onToggleSplit:dr,details:Ue,canDetails:K===`files`||K===`recycle`||K===`gallery`,onToggleDetails:()=>We(e=>!e),currentFolder:K===`files`&&!Mc(dn)?dn:``,shortcuts:H,view:vn,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Vy(t),i=Hy(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Hy(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Rn(Sn,i):void 0,archive:r===`files`&&p(i),split:!!a,title:r===`files`?zn(Sn,i,v(i)||e(`Files`)):e(wy[r]),partner:a?{title:zn(Sn,o,v(o)||e(`Files`)),place:Rn(Sn,o)}:void 0}})}),(0,P.jsxs)(eb,{children:[(0,P.jsx)(c_,{activeKind:K,currentPath:K===`files`?un:``,drives:g,historyVersion:Me,onNavigate:lr,onOpenView:or,homePath:m.find(e=>e.kind===`home`)?.path??``,places:m,recent:me,recentLimit:R,version:Fe}),(0,P.jsxs)(tb,{children:[K!==`files`&&Pi,(0,P.jsxs)(nb,{children:[K!==`files`&&A.open&&(0,P.jsx)(Pd,{current:le,focusToken:M,matchCase:A.matchCase,mode:A.mode,onClose:Nn,onMatchCase:()=>j(e=>({...e,matchCase:!e.matchCase})),onMode:()=>j(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Pn(1),onPrevious:()=>Pn(-1),onQuery:e=>j(t=>({...t,query:e})),onRegex:()=>j(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:A.query,regex:A.regex,total:de,onSelectMatches:K===`gallery`||K===`recycle`?()=>k(e=>e+1):void 0}),K===`files`?pn&&q?(0,P.jsxs)(lb,{ref:mr,children:[(0,P.jsxs)(ub,{style:{flex:d},children:[(0,P.jsxs)(cb,{$active:$e===`primary`,onPointerDown:()=>et(`primary`),children:[(0,P.jsx)(ib,{"data-shortcut":Jt(H.goBack),disabled:!bi,onClick:e=>{let t=G.index-1;t<0||(Kt(e)?nr(G.history[t]):tr(G.id,G.history[t],t))},title:e(`Back`),type:`button`,children:(0,P.jsx)(fi,{})}),(0,P.jsx)(ib,{"data-shortcut":Jt(H.goForward),disabled:!Si,onClick:e=>{let t=G.index+1;t>=G.history.length||(Kt(e)?nr(G.history[t]):tr(G.id,G.history[t],t))},title:e(`Forward`),type:`button`,children:(0,P.jsx)(pi,{})}),(0,P.jsx)(ib,{"data-shortcut":Jt(H.goUp),disabled:!fn,onClick:e=>{fn&&(Kt(e)?nr(fn):$n(G.id,fn))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(li,{})}),(0,P.jsx)(Dp,{focusToken:$e===`primary`?Le:void 0,onContextMenu:(e,t,n)=>ut({x:t,y:n,path:e}),onNavigate:(e,t)=>t?nr(e):void $n(G.id,e),path:dn}),(0,P.jsx)(ib,{onClick:e=>gr(e,dn,()=>void $n(G.id,dn,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(di,{})}),(0,P.jsx)(ib,{"data-shortcut":Jt(H.find),onClick:jn,title:e(`Search`),type:`button`,children:(0,P.jsx)(ci,{})}),U.primary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(sb,{}),(0,P.jsx)(ib,{onClick:e=>br(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(ha,{})})]})]}),Ci(G,!0),$e===`primary`&&wi]}),(0,P.jsx)(db,{onDoubleClick:()=>f(.5),onPointerDown:hr,title:e(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(ub,{$enter:!0,style:{flex:1-d},children:[(0,P.jsxs)(cb,{$active:$e===`secondary`,onPointerDown:()=>et(`secondary`),children:[(0,P.jsx)(ib,{"data-shortcut":Jt(H.goBack),disabled:q.index<=0,onClick:e=>{let t=q.index-1;t<0||(Kt(e)?nr(q.history[t]):tr(q.id,q.history[t],t))},title:e(`Back`),type:`button`,children:(0,P.jsx)(fi,{})}),(0,P.jsx)(ib,{"data-shortcut":Jt(H.goForward),disabled:q.index>=q.history.length-1,onClick:e=>{let t=q.index+1;t>=q.history.length||(Kt(e)?nr(q.history[t]):tr(q.id,q.history[t],t))},title:e(`Forward`),type:`button`,children:(0,P.jsx)(pi,{})}),(0,P.jsx)(ib,{"data-shortcut":Jt(H.goUp),disabled:!hn,onClick:e=>{hn&&(Kt(e)?nr(hn):$n(q.id,hn))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(li,{})}),(0,P.jsx)(Dp,{focusToken:$e===`secondary`?Le:void 0,onContextMenu:(e,t,n)=>ut({x:t,y:n,path:e}),onNavigate:(e,t)=>t?nr(e):void $n(q.id,e),path:mn}),(0,P.jsx)(ib,{onClick:e=>gr(e,mn,()=>void $n(q.id,mn,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(di,{})}),(0,P.jsx)(ib,{"data-shortcut":Jt(H.find),onClick:jn,title:e(`Search`),type:`button`,children:(0,P.jsx)(ci,{})}),U.secondary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(sb,{}),(0,P.jsx)(ib,{onClick:e=>br(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(ha,{})})]})]}),Ci(q,!1),$e===`secondary`&&wi]}),(0,P.jsx)(Qo,{info:pr,onWidth:fr,open:Ue,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,width:Ge})]}):(0,P.jsxs)(pb,{children:[(0,P.jsxs)(mb,{children:[Pi,(0,P.jsxs)(fb,{children:[Ci(G,!0),wi]})]}),(0,P.jsx)(Qo,{info:Je,onWidth:fr,open:Ue,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,width:Ge})]}):K===`home`?(0,P.jsx)(_p,{drives:g,find:Fi,historyVersion:Me,onSearchMatches:fe,homePath:m.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:oi,onHistoryChanged:()=>Ne(e=>e+1),onAddToTray:e=>void Or(e),onAddFavorite:e=>void Ar(e),onRemoveFavorite:e=>void jr(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void Ai(e,t),settingsVersion:Fe,onOpen:lr,onLayoutChanged:ii,onPlacesChanged:h,onRecentCleared:ai,places:m,recent:me,recentLimit:R,visibilityVersion:ze}):K===`settings`?(0,P.jsx)(oh,{appInfo:y,find:Fi,focusSection:ne,onSearchMatches:fe,onSettingsChanged:ii,onOpenFolder:nr}):K===`gallery`?(0,P.jsx)(Jg,{confirmDelete:z?.confirmDelete??!1,find:Fi,onSearchMatches:fe,openOnSingleClick:z?.openOnSingleClick??!1,onAddToTray:e=>void Or(e),onAddFavorite:e=>void Ar(e),onRemoveFavorite:e=>void jr(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void Ai(e,t),shortcuts:H,showCheckboxes:z?.showCheckboxes??!0,selectMatchesToken:se,showDetails:Ue,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,view:vn}):(0,P.jsx)(Wp,{find:Fi,onOpenLocation:lr,onShowDetails:()=>We(!0),platform:y?.platform,selectMatchesToken:se,showDetails:Ue,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1})]},K),(0,P.jsxs)(vb,{children:[(0,P.jsx)(`span`,{children:K===`files`&&G.listing?Zy(e,G.listing):``}),y?(0,P.jsxs)(hb,{children:[(0,P.jsxs)(`span`,{children:[`v`,y.version,` · `,y.platform]}),x?.available&&(0,P.jsxs)(gb,{onClick:()=>{re(`updates`),or(`settings`)},title:e(`Version {version} is available.`,{version:x.latest}),type:`button`,children:[(0,P.jsx)(_b,{}),e(`Update available`)]})]}):(0,P.jsx)(`span`,{children:e(`browser preview`)})]})]})]}),(0,P.jsx)(nc,{clipboardItems:Mt,clipboardMove:Pt,currentDirectory:K===`files`?un:``,items:Wt,onAdd:e=>void Or(e),onClear:Mr,onClose:()=>Bt(!1),onCopyToClipboard:e=>void Ir(e),onPosition:Hr,onRemove:kr,onTransfer:Wr,position:an,visible:zt}),tt&&(0,P.jsx)(fo,{creationOnly:!0,directory:tt.directory,menu:{x:tt.x,y:tt.y,paths:[],background:!0},onClose:()=>nt(null),onCreateFile:e=>void xr(e),onCreateFolder:e=>void xr(null,e),shortcuts:H}),st&&(0,P.jsx)(fo,{allowCompression:!0,directory:Jy(st.path)??st.path,menu:{x:st.x,y:st.y,paths:[st.path]},onAddToTray:e=>void Or(e),onAddFavorite:e=>void Ar(e),onRemoveFavorite:e=>void jr(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void Ai(e,t),onArchiveCreated:e=>{e&&rr(Jy(st.path)??st.path)},onClose:()=>ut(null),onCompressTo:(e,t)=>ft({paths:e,name:t}),onCopy:(e,t)=>void vt(e,t),onDelete:e=>void wt(e,!1).then(()=>rr(Jy(st.path)??st.path)),onOpen:(e,t)=>t?nr(e):void $n(G.id,e),onOpenFile:e=>void Se(e),onPaste:e=>void Ct(e).then(t=>{t.ok&&rr(e)}),onRefresh:()=>rr(st.path),shortcuts:H,target:{path:st.path,isDirectory:!0}}),dt&&(0,P.jsx)(Oo,{initialDirectory:Jy(st?.path??dn)??dn,initialName:dt.name,onCancel:()=>ft(null),onCompress:async e=>{let t=await Vt(dt.paths,e);return!t.ok&&t.error&&wa(t.error),t.ok}}),rt&&(0,P.jsx)($a,{items:[{label:e(`Extract here`),onSelect:()=>void ji(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void ji(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void ji(`auto`)}],onClose:()=>ot(null),x:rt.x,y:rt.y}),Zt&&(0,P.jsx)(nd,{delaySeconds:Zt.prompt.delaySeconds,hits:Zt.prompt.hits,onCancel:()=>{Zt.resolve(!1),Qt(null)},onConfirm:()=>{Zt.resolve(!0),Qt(null)},permanent:Zt.prompt.permanent},Zt.id),(0,P.jsx)(_d,{}),(0,P.jsx)(wd,{}),o&&(0,P.jsx)(Ty,{code:o.code,deviceName:o.deviceName,onAccept:()=>{kc(o.requestId,!0),s(null)},onReject:()=>{kc(o.requestId,!1),s(null)}}),(0,P.jsx)(yy,{}),(0,P.jsx)(_e,{})]})})}var $y=_.div`
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
`,eb=_.div`
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
`,tb=_.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,nb=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Ja}
`,rb=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,ib=_.button`
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
`,ab=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,ob=_.span`
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
`,sb=_.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,cb=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,lb=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,ub=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Za:``}
`,db=_.div`
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
        ${Qa}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,fb=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,pb=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,mb=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,hb=_.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,gb=_.button`
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
`,_b=_.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,vb=_.footer`
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
`;function yb({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:c,onSelect:u}){let d=I(),f=qc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,E.useState)(e),[_,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(!0),[S,ee]=(0,E.useState)(null),[te,ne]=(0,E.useState)(()=>new Set),[re,C]=(0,E.useState)(a??[]),[w,T]=(0,E.useState)([]),[ae,D]=(0,E.useState)([]),[oe,O]=(0,E.useState)([]),[se,k]=(0,E.useState)([]),[A,j]=(0,E.useState)(``),[M,ce]=(0,E.useState)(m.length===0),[le,ue]=(0,E.useState)(`files`),[de,fe]=(0,E.useState)(0),[F,pe]=(0,E.useState)(bn),[L,me]=(0,E.useState)(0),[he,ge]=(0,E.useState)(0),[R,_e]=(0,E.useState)(0),[ve,ye]=(0,E.useState)(null),[z,xe]=(0,E.useState)(null),[Se,we]=(0,E.useState)(0),[V,Te]=(0,E.useState)(null),[Ee,De]=(0,E.useState)(be.imageStripHeight);(0,E.useEffect)(()=>{Ye().then(Te,()=>Te(null))},[]),(0,E.useEffect)(()=>{a?C(a):Ae().then(C,()=>C([]))},[a]),(0,E.useEffect)(()=>{je().then(T,()=>T([])),Be().then(D,()=>D([]))},[]),(0,E.useEffect)(()=>{let e=!0;return x(!0),ee(null),ne(new Set),j(p?``:v(h)),Ce(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),j(p?``:v(t.path)),x(!1))},t=>{e&&(ee(t instanceof Error?t.message:String(t)),x(!1))}),()=>{e=!1}},[h,de,p]),(0,E.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),pe(e=>({...e,open:!0})),me(e=>e+1);return}if(e.key===`Escape`){F.open?(pe(e=>({...e,open:!1,query:``})),ge(0)):c();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),ke();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Me();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),pe(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),me(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ke()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),ke()):e.button===4&&(e.preventDefault(),Me())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Oe=e=>{let t=e.trim();t.length!==0&&l(t)!==l(h)&&(O(e=>[...e,h]),k([]),ue(`files`),g(t))},ke=()=>{let e=oe.at(-1);e!==void 0&&(O(e=>e.slice(0,-1)),k(e=>[h,...e]),g(e))},Me=()=>{let e=se[0];e!==void 0&&(k(e=>e.slice(1)),O(e=>[...e,h]),g(e))},Ne=_?.path??h,H=_?.parent??(h?ie(h):null);(0,E.useEffect)(()=>{N.available&&Ne&&N.send({type:`fs.watch`,payload:{paths:[Ne],owner:`picker`}})},[Ne]),(0,E.useEffect)(()=>{if(N.available&&Ne)return N.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&l(t.data.path)===l(Ne)&&Ce(Ne,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));ne(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Ne]);let Pe=(_?.entries??[]).filter(e=>e.isDirectory||p&&(M||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Fe=_?{..._,entries:Pe}:null,Ie=F.open&&F.query.length>0,Le=(0,E.useMemo)(()=>Ie?Pe.filter(e=>kn(e.name,F)).map(e=>e.fullPath):[],[Ie,Pe,F]);(0,E.useEffect)(()=>{ge(0)},[F.query,F.matchCase,F.regex,_?.path]);let Re=Le.length===0?-1:Math.min(he,Le.length-1),ze=(0,E.useMemo)(()=>({...F,currentPath:Re>=0?Le[Re]:null}),[F,Re,Le]),Ve=V?.defaultView??be,He=o??{mode:Ve.mode,iconSize:Ve.iconSize,gridSize:Ve.gridSize,sort:`name`,sortDescending:!1,columns:Ve.columns??[`type`,`size`,`modified`]},Ue=(s??Ve.showImages)&&He.mode===`list`,We=A.trim(),Ge=We.length>0?xb(We)?We:bb(Ne,We):null,Ke=()=>{if(b||S)return;let e=n?[...te]:[...te].slice(0,1);e.length>0?u(e):Ge!==null&&We!==v(Ne)?u([Ge]):!p&&Ne&&u([Ne])},qe=(0,E.useCallback)(e=>{ne(new Set(e)),j(e.length===1?v(e[0]):e.length===0&&!p?v(Ne):``)},[Ne,p]),Je=e=>{_?.entries.find(t=>t.fullPath===e)?.isDirectory?Oe(e):p&&u([e])},Xe=e=>j(e),Ze=async e=>{let t=ve;if(ye(null),!t||!Ne)return;let n=e===null?await Et(Ne):await At(Ne,e);n.ok&&n.path!==null&&(pe(e=>({...e,open:!1,query:``})),e!==null&&ce(!0),fe(e=>e+1),window.setTimeout(()=>{xe(n.path),we(e=>e+1)},120))},Qe=()=>{pe(e=>({...e,open:!0})),me(e=>e+1)},$e=e=>{ge(t=>Le.length===0?0:(t+e+Le.length)%Le.length)},et=e=>(0,P.jsxs)(jb,{children:[(0,P.jsxs)(Mb,{children:[(0,P.jsx)(Nb,{children:d(p?`File name:`:`Folder:`)}),(0,P.jsx)(Pb,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ke())},spellCheck:!1,value:A}),p&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Nb,{children:d(`Files of type:`)}),(0,P.jsx)(ho,{onChange:e=>ce(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:M?`all`:`supported`})]})]}),(0,P.jsxs)(Fb,{children:[(0,P.jsx)(Ib,{onClick:c,type:`button`,children:d(`Cancel`)}),(0,P.jsxs)(Ib,{$primary:!0,disabled:b||S!==null||p&&te.size===0&&We.length===0,onClick:Ke,type:`button`,children:[(0,P.jsx)(Si,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),tt=(0,P.jsxs)(Cb,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,P.jsxs)(wb,{children:[(0,P.jsxs)(Tb,{children:[(0,P.jsx)(ai,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,P.jsx)(Eb,{onClick:c,title:d(`Cancel`),type:`button`,children:(0,P.jsx)(Ci,{size:12})})]}),(0,P.jsxs)(Db,{children:[(0,P.jsx)(c_,{activeKind:le===`overview`?`home`:le===`gallery`?`gallery`:`files`,currentPath:Ne,drives:w,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:re.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Oe(e),onOpenView:e=>{e===`home`?(ne(new Set),j(p?``:v(Ne)),ue(`overview`)):e===`gallery`&&p&&(ne(new Set),j(``),ue(`gallery`))},places:re,recent:ae,recentLimit:10}),(0,P.jsx)(Ob,{children:le===`overview`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(_p,{drives:w,historyVersion:0,homePath:re.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Oe(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:qe,places:re,readOnly:!0,recent:ae,recentLimit:10,visibilityVersion:0}),et(j)]}):le===`gallery`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Jg,{onPick:e=>u([e]),onSelectionChange:qe,showCheckboxes:V?.showCheckboxes??!0,view:{...B,columns:[]}}),et(j)]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(kb,{children:[(0,P.jsx)(Ab,{disabled:oe.length===0,onClick:ke,title:d(`Back`),type:`button`,children:(0,P.jsx)(fi,{})}),(0,P.jsx)(Ab,{disabled:se.length===0,onClick:Me,title:d(`Forward`),type:`button`,children:(0,P.jsx)(pi,{})}),(0,P.jsx)(Ab,{disabled:!H,onClick:()=>H&&Oe(H),title:d(`Up one level`),type:`button`,children:(0,P.jsx)(li,{})}),(0,P.jsx)(Dp,{onNavigate:Oe,path:Ne}),(0,P.jsx)(Ab,{onClick:e=>ye({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,P.jsx)(di,{})}),(0,P.jsx)(Ab,{onClick:Qe,title:d(`Search`),type:`button`,children:(0,P.jsx)(ci,{})}),f.available&&(0,P.jsx)(Ab,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,P.jsx)(ha,{})})]}),F.open&&(0,P.jsx)(Pd,{current:Re,focusToken:L,matchCase:F.matchCase,mode:F.mode,onClose:()=>{pe(e=>({...e,open:!1,query:``})),ge(0)},onMatchCase:()=>pe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>pe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>$e(1),onPrevious:()=>$e(-1),onQuery:e=>pe(t=>({...t,query:e})),onRegex:()=>pe(e=>({...e,regex:!e.regex})),query:F.query,regex:F.regex,total:Le.length,onSelectMatches:()=>_e(e=>e+1)}),(0,P.jsx)(sl,{allowBackgroundMenu:!0,confirmDelete:V?.confirmDelete??!1,enableShortcuts:!0,error:S,find:ze,selectMatchesToken:R,imageStripHeight:Ee,loading:b,listing:Fe,onImageStripHeight:De,onOpen:Je,onOpenFile:Je,onRefresh:()=>fe(e=>e+1),onSelectionChange:qe,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:V?.openOnSingleClick??!1,refreshToken:de,pendingRename:z,pendingRenameToken:Se,showCheckboxes:V?.showCheckboxes??!0,showDetails:!1,showImages:Ue,singleSelect:!n,view:He}),et(Xe)]})})]}),ve&&(0,P.jsx)(fo,{creationOnly:!0,directory:Ne,menu:{x:ve.x,y:ve.y,paths:[],background:!0},onClose:()=>ye(null),onCreateFile:p?e=>void Ze(e):void 0,onCreateFolder:()=>void Ze(null),shortcuts:Ut})]});return i?tt:(0,Ia.createPortal)((0,P.jsx)(Sb,{onPointerDown:e=>{e.target===e.currentTarget&&c()},children:tt}),document.body)}function bb(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function xb(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Sb=_.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Za}
`,Cb=_.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:La}
    ${({$inline:e})=>e?``:Ka}
`,wb=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Tb=_.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Eb=_.button`
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
`,Db=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Ob=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
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
`,jb=_.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,Mb=_.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Nb=_.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Pb=_.input`
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
`,Fb=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,Ib=_.button`
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
`;function Lb({mode:e,multiple:t,extensions:n,initial:r}){let i=I(),a=he(),[o,s]=(0,E.useState)(null),[c,l]=(0,E.useState)({}),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=(0,E.useRef)(0);(0,E.useEffect)(()=>{N.send({type:`app.ready`})},[]),(0,E.useEffect)(()=>(ye(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>ye(null)),[]),(0,E.useEffect)(()=>{Ye().then(e=>{s(e),ee(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??be,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,P.jsxs)(Rb,{children:[(0,P.jsxs)(zb,{children:[(0,P.jsx)(Bb,{children:(0,P.jsx)(Ei,{size:17})}),(0,P.jsx)(Vb,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,P.jsx)(Iv,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,P.jsx)(Hb,{children:(0,P.jsx)(Ub,{onClick:()=>N.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,P.jsx)(Ci,{size:12})})})]}),(0,P.jsx)(Wb,{children:(0,P.jsx)(yb,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>N.send({type:`pick.cancel`}),onSelect:e=>N.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,P.jsx)(nd,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,P.jsx)(_d,{}),(0,P.jsx)(_e,{})]})}var Rb=_.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,zb=_.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,Bb=_.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Vb=_.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Hb=_.div`
    display: flex;
    flex-shrink: 0;
`,Ub=_.button`
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
`,Wb=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Gb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Gb);var Kb=document.getElementById(`root`),qb=new URLSearchParams(window.location.search),Jb=qb.get(`picker`),Yb=qb.get(`filter`)??``;Kb&&(0,ae.createRoot)(Kb).render((0,P.jsx)(E.StrictMode,{children:(0,P.jsx)(pe,{children:Jb===`folder`||Jb===`file`?(0,P.jsx)(Lb,{extensions:Yb?Yb.split(`;`).filter(Boolean):[],initial:qb.get(`initial`)??``,mode:Jb,multiple:qb.get(`multiple`)===`1`}):(0,P.jsx)(Qy,{})})}));