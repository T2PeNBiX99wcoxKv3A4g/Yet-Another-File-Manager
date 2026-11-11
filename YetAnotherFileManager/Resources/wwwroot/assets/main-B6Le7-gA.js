import{A as e,C as t,E as n,M as r,N as i,O as a,S as o,T as s,_ as c,b as l,c as u,d,f,g as p,h as m,i as h,j as g,k as _,l as v,m as y,n as b,o as x,p as S,r as ee,s as C,t as w,u as te,v as T,w as E,x as ne,y as D}from"./theme-BMX5jShW.js";var O=i(r(),1),re=e(),k=15e3,ie=new Set,A=new Map,ae=!1,j=0,M;function N(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function P(){ae||(ae=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>oe(e)))}function oe(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?A.get(n):void 0;n&&r&&(A.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),ie.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function se(){if(M!==void 0)return;let e=()=>{if(!N())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),M=setInterval(e,5e3)}var F={get available(){return N()},send(e){N()?(P(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&se()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=k){if(!N())return Promise.reject(Error(`Native bridge is not available.`));P();let r=`req-${++j}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{A.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);A.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return P(),ie.add(e),()=>ie.delete(e)}},I=s();function ce(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function le(e){return F.available?await F.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var ue=(0,O.createContext)(ce({})),L=(0,O.createContext)(`en`);function R(){return(0,O.useContext)(ue)}var de=({children:e})=>{let[t,n]=(0,O.useState)(()=>ce({})),[r,i]=(0,O.useState)(`en`);return(0,O.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await le();if(e)return;n(()=>ce(t.strings)),i(t.locale)}catch{}};t();let r=F.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,O.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,I.jsx)(ue.Provider,{value:t,children:(0,I.jsx)(L.Provider,{value:r,children:e})})},fe=e=>F.send({type:e});function pe(){let[e,t]=(0,O.useState)(!1);return(0,O.useEffect)(()=>{if(F.available)return F.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>fe(`window.minimize`),toggleMaximize:()=>fe(`window.toggleMaximize`),close:()=>fe(`window.close`)}}function me(){return{onMouseDown:()=>fe(`window.drag`),onDoubleClick:()=>fe(`window.toggleMaximize`)}}function z(){let[e,t]=(0,O.useState)(!1),{maximized:n}=pe();return(0,O.useEffect)(()=>{if(!F.available)return;let e=!1;return F.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,O.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var he=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function ge(){return(0,I.jsx)(I.Fragment,{children:he.map(([e,t])=>(0,I.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),F.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var _e=null;function ve(e){_e=e}function B(e){return _e?_e(e):Promise.resolve(!1)}var ye={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},be={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function xe(e,t){return F.available?await F.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Se(e){return F.available?(await F.request(`fs.open`,{path:e})).ok:!1}async function V(e,t=!0,n=!1,r=0,i){return await F.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function Ce(e,t,n=0,r){return await F.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function we(e,t=0,n){return await F.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Te(e){F.available&&e.length!==0&&await F.request(`fs.archive.release`,{paths:e})}async function Ee(e){return F.available?await F.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function De(e,t){return F.available?(await F.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Oe(e,t,n,r){return F.available?(await F.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function ke(e,t=!1){return F.available?await F.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ae(){return(await F.request(`fs.places`)).places}async function je(){return(await F.request(`fs.drives`)).drives}async function Me(e=!1){return(await F.request(`fs.recycle`,{includeOrphans:e})).entries}async function Ne(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await B({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await F.request(e,{...t,confirm:r.token})}return r}async function H(e=!1){let t=await F.request(`fs.recycle.empty`,{includeOrphans:e});await Ne(`fs.recycle.empty`,{includeOrphans:e},t)}async function Pe(e){return!F.available||e.length===0?{ok:!1,done:0}:await F.request(`fs.recycle.restoreMany`,{ids:e})}async function Fe(e){if(!F.available||e.length===0)return{ok:!1,done:0};let t=await F.request(`fs.recycle.deleteMany`,{ids:e}),n=await Ne(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ie(e){F.available&&e&&await F.request(`fs.recycle.properties`,{id:e})}async function Le(){if(!F.available)return{entries:[],cancelled:!0,failed:!1};let e=await F.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Re(){return F.available?(await F.request(`fs.recycle.admin.purge`)).ok:!1}async function ze(e=0,t=150,n=!1){return F.available?await F.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Be(){return F.available?(await F.request(`fs.recent`)).entries:[]}async function Ve(){return F.available?(await F.request(`fs.frequent`)).entries:[]}async function He(e){F.available&&await F.request(`fs.frequent.record`,{path:e})}async function Ue(){await F.request(`fs.recent.clear`)}async function We(){await F.request(`fs.frequent.clear`)}async function Ge(){return await F.request(`fs.visibility`)}async function Ke(){return await F.request(`fs.hidden.toggle`)}async function qe(){return F.available?await F.request(`fs.index.tasks`):{count:0,directories:[]}}var Je={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Ye(){if(!F.available)return Je;let e=await F.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function Xe(){return F.available?(await F.request(`app.protection.defaults`)).paths??[]:[]}var Ze={registered:!1,pathMatches:!1,registeredPath:null},Qe={registered:!1,pathMatches:!1,registeredPath:null};async function $e(){return F.available?await F.request(`app.defaultManager.status`):Qe}async function et(e){return F.available?await F.request(`app.defaultManager.set`,{enabled:e}):Qe}async function tt(){return F.available?await F.request(`app.archive.status`):Ze}async function nt(){return F.available?await F.request(`app.archive.register`):Ze}async function rt(){return F.available?await F.request(`app.archive.unregister`):Ze}async function it(e){if(!F.available)return e;let t=await F.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function at(e,t){F.available&&await F.request(`app.tabs.set`,{tabs:e,active:t})}async function ot(e,t,n){return F.available?(await F.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var st={managed:0,private:0,workingSet:0,available:0};async function ct(){return F.available?await F.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1,logDirectory:``}}async function lt(){return F.available?await F.request(`app.updateStatus`)??null:null}async function ut(){return F.available?await F.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function U(e){return!F.available||!e?!1:(await F.request(`app.openUrl`,{url:e})).ok}async function dt(){return F.available?await F.request(`app.memory`):st}async function ft(){return F.available?await F.request(`app.memory.trim`):st}async function pt(){return F.available?(await F.request(`app.scheme`)).registered:!1}async function mt(e){return F.available?(await F.request(`app.scheme.set`,{enabled:e})).registered:!1}var ht={supported:!1,mode:`none`,active:!1,error:null};async function gt(){return F.available?await F.request(`app.startup`):ht}async function _t(e){return F.available?await F.request(`app.startup.set`,{mode:e}):ht}async function vt(e,t=!1){return!F.available||e.length===0?!1:(await F.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function yt(){return F.available?(await F.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function bt(){return F.available?await F.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function xt(e,t,n){return!F.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await F.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function St(e){return!F.available||e.length===0?[]:(await F.request(`fs.paths.info`,{paths:e})).entries}async function Ct(e){return F.available?(await F.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function wt(e,t=!1){if(!F.available||e.length===0)return{ok:!1,error:null};let n=await F.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await B({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await F.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function Tt(e,t){return F.available?await F.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Et(e,t=!1){return F.available?await F.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Dt(e){return F.available?(await F.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Ot(e,t){return F.available?await F.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function kt(e,t,n){return F.available?await F.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function At(e,t){return F.available?await F.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function jt(e){F.available&&e.length!==0&&await F.request(`fs.operation.properties`,{paths:e})}async function Mt(e){F.available&&await F.request(`fs.operation.openWith`,{path:e})}async function Nt(e){F.available&&await F.request(`fs.operation.terminal`,{path:e})}async function Pt(e){return F.available?await F.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Ft(e,t){return F.available?(await F.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function It(){return F.available?await F.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Lt(){return F.available?await F.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Rt(e){F.available&&await F.request(`fs.operation.showInExplorer`,{path:e})}async function zt(e){return!F.available||e.length===0?{verbs:[],safe:!0}:await F.request(`shell.verbs`,{paths:e})}async function Bt(e,t,n,r){F.available&&e.length!==0&&await F.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Vt(e,t){return!F.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await F.request(`fs.operation.compress`,{...t,paths:e})}async function W(){return F.available?(await F.request(`app.tasks`)).tasks:[]}async function Ht(){F.available&&await F.request(`app.tasks.clear`)}var Ut={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Wt=Ut.openInNewTab;function Gt(e){Wt=e.trim()||Ut.openInNewTab}function Kt(e){let t=Wt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function qt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Jt(e){return e.split(`+`).filter(Boolean).map(e=>Yt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Yt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Xt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Zt=new Map;function Qt(e){return l(p(e)?u(e):e)}function $t(e){return Zt.get(Qt(e))}function en(e,t){Zt.set(Qt(e),t)}function tn(e){Zt.delete(Qt(e))}function nn(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var rn=new Map,an=new Map,on=new Set,sn=0;function cn(){rn.clear(),an.clear(),sn+=1,on.forEach(e=>e())}function ln(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...rn.keys()])e.toLowerCase().includes(t)&&(rn.delete(e),n=!0);n&&(sn+=1,on.forEach(e=>e()))}function G(){let[e,t]=(0,O.useState)(sn);return(0,O.useEffect)(()=>{let e=()=>t(sn);return on.add(e),()=>{on.delete(e)}},[]),e}var K=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function un(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return K.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function q(e,t,n=!1){let r=G(),i=e===null?``:un(e,t,n),[a,o]=(0,O.useState)(()=>rn.get(i)??null);return(0,O.useEffect)(()=>{if(e===null){o(null);return}if(!F.available)return;if(rn.has(i)){o(rn.get(i)??null);return}let r=!0;return F.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?rn.set(i,e.dataUrl):rn.delete(i),r&&o(e.dataUrl)},()=>{rn.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function dn(e){let[t,n]=(0,O.useState)(e);return(0,O.useEffect)(()=>{if(!e){n(null);return}if(!p(e)){n(e);return}let t=!0;return we(e,0,$t(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function fn(e){let t=G(),[n,r]=(0,O.useState)(()=>e?an.get(e)??null:null);return(0,O.useEffect)(()=>{if(!e||!F.available){r(null);return}if(an.has(e)){r(an.get(e)??null);return}let t=!0;return F.request(`fs.iconFile`,{path:e}).then(n=>{an.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{an.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var pn=null,mn=null;function hn(){return pn===null?F.available?(mn??=F.request(`app.thumbnails`).then(e=>(pn=e.base??``,pn),()=>(pn=``,``)),mn):Promise.resolve(``):Promise.resolve(pn)}function gn(e,t=128,n=0){let[r,i]=(0,O.useState)(pn);return(0,O.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return hn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function _n(e,t=0,n=``){let[r,i]=(0,O.useState)(pn);if((0,O.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return hn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function vn(e,t=0){let[n,r]=(0,O.useState)(pn);return(0,O.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return hn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var yn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},bn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function xn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=wn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Dn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Sn=`\0`,Cn=``;function wn(e){return e.query!==Sn&&(Sn=e.query,Cn=e.query.toLowerCase()),Cn}var Tn=`\0`,En=null;function Dn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Tn)return En;Tn=t;try{En=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{En=null}return En}function On(e,t){return xn(e,t)!==null}var kn=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],An={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function jn(e){let t=Nn(e);for(let{kind:e}of kn)if(An[e].has(t))return e;return null}function Mn(e){return jn(e)!==null}function Nn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Pn=(0,O.createContext)({places:{},useIcons:!1}),Fn=Pn.Provider;function In(){return(0,O.useContext)(Pn)}function Ln(e,t){return e.places[l(t)]}function Rn(e,t,n){return Ln(e,t)?.name||n}function zn(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function Bn(e,t){try{localStorage.setItem(e,String(t))}catch{}}function Vn(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function Hn(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Un=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,I.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,I.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Wn=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Gn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,I.jsx)(`path`,{d:`M14 3v4h4`})]}),Kn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,I.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,I.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),qn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,I.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),Jn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M12 19V5`}),(0,I.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Yn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,I.jsx)(`path`,{d:`M20 4v7h-7`})]}),Xn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M12 5v14`}),(0,I.jsx)(`path`,{d:`M5 12h14`})]}),Zn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M19 12H5`}),(0,I.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Qn=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M5 12h14`}),(0,I.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),$n=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,I.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),er=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,I.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),tr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,I.jsx)(`path`,{d:`M12 12v8`})]}),nr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,I.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),rr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,I.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,I.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,I.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),ir=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,I.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),ar=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),or=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M4 7h16`}),(0,I.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,I.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,I.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),sr=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),cr=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),lr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,I.jsxs)(`defs`,{children:[(0,I.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,I.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,I.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,I.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,I.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,I.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,I.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,I.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,I.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,I.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),ur=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,I.jsx)(`path`,{d:`M15 3v4h4`}),(0,I.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),dr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,I.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,I.jsx)(`path`,{d:`m13 5-2 14`})]}),fr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,I.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,I.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),pr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,I.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),mr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,I.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,I.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),hr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,I.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),gr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,I.jsx)(`path`,{d:`M15 3v4h4`}),(0,I.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),_r=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,I.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),vr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,I.jsx)(`path`,{d:`M8.5 14h7`})]}),yr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,I.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,I.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),br=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,I.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),xr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,I.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Sr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,I.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Cr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,I.jsx)(`path`,{d:`M15 3v4h4`}),(0,I.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),wr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,I.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,I.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,I.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Tr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,I.jsx)(`path`,{d:`m14 6 4 4`})]}),Er=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,I.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Dr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,I.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Or=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M12 4v10`}),(0,I.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,I.jsx)(`path`,{d:`M4.5 19.5h15`})]}),kr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,I.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,I.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Ar=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,I.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,I.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),jr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,I.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Mr=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Nr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,I.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Pr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,I.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,I.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Fr=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Ir=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,I.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,I.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,I.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Lr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,I.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Rr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,I.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),zr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,I.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,I.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Br=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,I.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Vr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,I.jsx)(`path`,{d:`M3.5 12h17`}),(0,I.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Hr=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Ur=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,I.jsx)(`path`,{d:`M8.5 10.5h7`})]}),Wr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,I.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,I.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),Gr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,I.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Kr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,I.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,I.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),qr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,I.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Jr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M12 16V4`}),(0,I.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,I.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),Yr=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),Xr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,I.jsx)(`path`,{d:`M12 4v16`})]}),Zr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,I.jsx)(`path`,{d:`M15 4v16`})]}),Qr=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,I.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,I.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,I.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),$r=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,I.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,I.jsx)(`path`,{d:`M12 14v2`})]}),ei=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,I.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]});function J(e,t){return({size:n=t,...r})=>(0,I.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var ti=J(Un,18),ni=J(Wn,18),ri=J(Gn,18),ii=J(Kn,18),ai=J(qn,16),oi=J(Jn,16),si=J(Yn,16),ci=J(Xn,16),li=J(Zn,16),ui=J(Qn,16),di=J($n,12),fi=J(er,18),pi=J(tr,14),mi=J(nr,14),hi=J(rr,14),gi=J(ir,18),_i=J(ar,18),vi=J(or,18),yi=J(sr,14),bi=J(cr,14),xi=J(lr,18),Si=J(ur,18),Ci=J(dr,18),wi=J(fr,18),Ti=J(pr,18),Ei=J(mr,18),Di=J(hr,18),Oi=J(gr,18),ki=J(_r,18),Ai=J(vr,18),ji=J(yr,18),Mi=J(br,18),Ni=J(xr,18),Pi=J(Sr,18),Fi=J(Cr,18),Ii=J(wr,18),Li=J(Tr,16),Ri=J(Er,18),zi=J(Dr,18),Bi=J(Or,18),Vi=J(kr,18),Hi=J(Ar,18),Ui=J(jr,18),Wi=J(Mr,18),Gi=J(Nr,18),Ki=J(Pr,18),qi=J(Fr,18),Ji=J(Ir,18),Yi=J(Lr,18),Xi=J(Rr,18),Zi=J(zr,18),Qi=J(Br,18),$i=J(Vr,18),ea=J(Hr,18),ta=J(Ur,14),na=J(Wr,14),ra=J(Gr,16),ia=J(Kr,16),aa=J(qr,16),oa=J(Jr,16),sa=J(Yr,16),ca=J(Xr,16),la=J(Zr,16),ua=J(Qr,16),da=J($r,14),fa=J(ei,14);async function pa(e,t,n){return F.available?(await F.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function ma(e){return pa(`folder`,[],e??``)}function ha(e){return pa(`file`,e??[],``)}var ga=null,_a=null;function va(e){ga=e}function ya(e){return ga?ga(e):Promise.resolve()}function ba(e){_a=e}function xa(e,t=!1){return _a?_a(e,t):Promise.resolve(null)}var Sa=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],Ca=null,wa=0,Ta=new Set;function Ea(){wa+=1;for(let e of Ta)e()}function Da(e){return Ta.add(e),()=>Ta.delete(e)}function Oa(){return wa}function ka(e){Ca=e,Ea()}function Aa(){return(0,O.useSyncExternalStore)(Da,Oa,Oa),Ca}var ja=g(),Ma=a`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Na=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Pa=n`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Fa=n`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Ia=n`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,La=n`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Ra=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,za=n`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Ba=n`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Va=a`animation: ${Na} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ha=a`animation: ${Pa} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Ua=a`animation: ${Fa} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;a`animation: ${Ia} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var Wa=a`animation: ${La} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ga=a`animation: ${Ra} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ka=a`animation: ${za} 140ms ease-out;`,qa=a`animation: ${Ba} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Ja({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,O.useState)([]),s=(0,O.useRef)(void 0);if((0,O.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,O.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,I.jsx)(io,{},`group-rule-${i}`)),n.push((0,I.jsx)(ro,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,I.jsx)(io,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,I.jsxs)(eo,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,I.jsx)(to,{children:e.loading?(0,I.jsx)(ao,{}):e.icon}),(0,I.jsx)(no,{children:e.label}),a?(0,I.jsx)(di,{size:12}):e.checked&&(0,I.jsx)(yi,{size:12})]},`${e.label}-${i}`))}),n};return(0,ja.createPortal)((0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(Ya,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Xa,{children:r.map((e,t)=>(0,I.jsxs)(Za,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,I.jsx)(Qa,{children:e.icon}),(0,I.jsx)($a,{children:e.label})]},`${e.label}-${t}`))}),(0,I.jsx)(io,{})]}),m(n,0)]}),a.map((e,t)=>(0,I.jsx)(Ya,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Ya=_.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Ma}
    ${Ha}
    transform-origin: top left;
`,Xa=_.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Za=_.button`
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
`,Qa=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,$a=_.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,eo=_.button`
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
`,to=_.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,no=_.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ro=_.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,io=_.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,ao=_.span`
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
`;function oo({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:u,onDelete:d,onCopy:f,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:_=!1,onRefresh:y,onAddToTray:b,onAddFavorite:x,onRemoveFavorite:S,favoritePaths:ee,onExtractArchive:C,allowCompression:w=!1,onCompressTo:te,onArchiveCreated:T}){let E=R(),ne=Aa(),D=p(t),[re,k]=(0,O.useState)({verbs:[],safe:!0,loading:!1}),[ie,A]=(0,O.useState)({recommended:[],other:[],loading:!1}),[ae,j]=(0,O.useState)(null),M=(0,O.useRef)(0),N=(0,O.useRef)(0),P=e?.paths.length===1,oe=e?.background?t?[t]:[]:e?.paths??[],se=e?.background?t||null:P&&n?.isDirectory?n.path:null;if((0,O.useEffect)(()=>{if(!e){k({verbs:[],safe:!0,loading:!1}),A({recommended:[],other:[],loading:!1});return}let t=++M.current;k({verbs:[],safe:!0,loading:oe.length>0&&!D}),oe.length>0&&!D&&zt(oe).then(e=>{M.current===t&&k({...e,loading:!1})},()=>{M.current===t&&k({verbs:[],safe:!0,loading:!1})});let r=++N.current;!D&&P&&n?(A({recommended:[],other:[],loading:!0}),Pt(n.path).then(e=>{N.current===r&&A({...e,loading:!1})},()=>{N.current===r&&A({recommended:[],other:[],loading:!1})})):A({recommended:[],other:[],loading:!1})},[e,P,n?.path,n?.isDirectory,oe.length,D]),(0,O.useEffect)(()=>{if(!e||D||!se){j(null);return}let t=!0;return Dt(se).then(e=>{t&&j(e)},()=>{t&&j(null)}),()=>{t=!1}},[e,se,D]),!e)return null;let F=[],ce=[],le=new Set((ee??[]).map(l)),ue=e.background?t?[t]:[]:e.paths,L=ue.length>0&&ue.every(e=>le.has(l(e))),de=()=>n?fe(n.path,n.isDirectory):`Archive`,fe=(e,t)=>{let n=v(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},pe=async(e,n=de())=>{let r=await Vt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?T?.(r.path,!0):ya(r.error??E(`Could not create the archive.`))},me=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},z=async()=>{if(!se||ae===null)return;let e=await Ot(se,!ae);e.ok?(j(e.enabled),y?.()):ya(e.error??E(`Could not change the case sensitivity.`))},he=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await kt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await kt(e,t,`${a}\\${co(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?y?.():ya(o.error??E(`Could not create the link.`))},ge=async e=>{if(!n)return;let r=await ma(t);r&&await he(e,n.path,r,v(n.path),e.endsWith(`-copy`))},_e=async e=>{let n=ne?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=l(a)===l(t);await he(n,r.path,t,v(r.path),i&&!o)}},ve=async()=>{let t=(await St(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&ka({paths:t})},B=()=>{let e=ne?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:E(`Cancel selected link`),icon:(0,I.jsx)(bi,{size:14}),onSelect:()=>ka(null)},...t?[{label:E(`Hard link`),icon:(0,I.jsx)(ri,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard`)}]:[],{label:E(`Symbolic link`),icon:(0,I.jsx)(ri,{size:14}),separatorBefore:!t,onSelect:()=>void _e(`symbolic-file`)},...n?[{label:E(`Directory junction`),icon:(0,I.jsx)(ni,{size:14}),onSelect:()=>void _e(`junction`)},{label:E(`Smart copy`),icon:(0,I.jsx)(ra,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`smart-copy`)},{label:E(`Smart mirror`),icon:(0,I.jsx)(ra,{size:14}),onSelect:()=>void _e(`smart-mirror`)},{label:E(`Multi-version smart copy`),icon:(0,I.jsx)(ra,{size:14}),onSelect:()=>void _e(`multi-version-smart-copy`)},{label:E(`Hardlink copy`),icon:(0,I.jsx)(ra,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard-copy`)},{label:E(`Symbolic link copy`),icon:(0,I.jsx)(ra,{size:14}),onSelect:()=>void _e(`symbolic-copy`)}]:[]]};if(e.background){if(h&&ce.push({label:E(`New folder`),icon:(0,I.jsx)(ci,{size:16}),shortcut:Jt(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:E(`Folder`),icon:(0,I.jsx)(ni,{size:14}),onSelect:()=>h(!1)}),D||e.push({label:E(`Case-sensitive folder`),icon:(0,I.jsx)(na,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...Sa.map((e,t)=>({label:`${E(e.label)} (${e.extension})`,icon:(0,I.jsx)(ri,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),F.push({label:E(`New`),icon:(0,I.jsx)(ci,{size:14}),children:e,onSelect:()=>void 0})}if(D||F.push({label:E(`Create link`),icon:(0,I.jsx)(oa,{size:14}),disabled:!ne,children:B(),onSelect:()=>void 0}),_)return(0,I.jsx)(Ja,{items:F,onClose:a,quick:ce,x:e.x,y:e.y});!D&&o&&F.push({label:E(`Open in new tab`),icon:(0,I.jsx)(ci,{size:14}),onSelect:()=>o(t,!0)}),F.push({label:E(`Copy as path`),icon:(0,I.jsx)(ra,{size:14}),onSelect:()=>void me([t])}),b&&F.push({label:E(`Add to file tray`),icon:(0,I.jsx)(Qi,{size:14}),onSelect:()=>b([t])}),!D&&(L?S:x)&&F.push({label:E(L?`Remove from favorites`:`Add to favorites`),icon:L?(0,I.jsx)(ta,{size:14}):(0,I.jsx)(ea,{size:14}),onSelect:()=>L?S?.([t]):x?.([t])}),!D&&ae!==null&&F.push({label:E(`Case-sensitive names`),icon:(0,I.jsx)(na,{size:14}),checked:ae,onSelect:()=>void z()}),!D&&w&&(F.push({label:E(`Open in Terminal`),icon:(0,I.jsx)(Xi,{size:14}),onSelect:()=>void Nt(t)}),F.push({label:E(`Show in Explorer`),icon:(0,I.jsx)(ni,{size:14}),separatorBefore:!0,onSelect:()=>void Rt(t)})),m&&ce.push({label:E(`Paste`),icon:(0,I.jsx)(aa,{size:16}),disabled:!i,shortcut:Jt(r.paste),onSelect:()=>m(t)}),D||ce.push({label:E(`Properties`),icon:(0,I.jsx)(fi,{size:16}),shortcut:Jt(r.properties),onSelect:()=>void jt([t])})}else{if(o&&F.push({label:E(`Open`),icon:(0,I.jsx)(ui,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&F.push({label:E(`Open in new tab`),icon:(0,I.jsx)(ci,{size:14}),onSelect:()=>o(n.path,!0)}),m&&F.push({label:E(`Paste into folder`),icon:(0,I.jsx)(aa,{size:14}),disabled:!i,onSelect:()=>m(n.path)}),D||F.push({label:E(`Open in Terminal`),icon:(0,I.jsx)(Xi,{size:14}),onSelect:()=>void Nt(n.path)})),!D&&P&&n&&!n.isDirectory&&c(n.path)&&C&&F.push({label:E(`Extract archive`),icon:(0,I.jsx)(Di,{size:14}),separatorBefore:!0,children:[{label:E(`Extract here`),icon:(0,I.jsx)(Di,{size:14}),onSelect:()=>C(n.path,`here`)},{label:E(`Extract to a folder named after the archive`),icon:(0,I.jsx)(Di,{size:14}),onSelect:()=>C(n.path,`named`)},{label:E(`Auto extract to the current folder`),icon:(0,I.jsx)(Di,{size:14}),onSelect:()=>C(n.path,`auto`)},{label:E(`Extract to…`),icon:(0,I.jsx)(ni,{size:14}),separatorBefore:!0,onSelect:()=>C(n.path,`choose`)}],onSelect:()=>void 0}),!D&&P&&n){let e=[];if(ie.loading)e.push({label:E(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ie.recommended)e.push({label:t.name,group:E(`Suggested apps`),icon:t.icon?(0,I.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,I.jsx)(ki,{size:14}),onSelect:()=>void Ft(n.path,t.path).then(e=>{e||Mt(n.path)})});for(let t of ie.other)e.push({label:t.name,group:E(`Other apps`),icon:t.icon?(0,I.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,I.jsx)(ki,{size:14}),onSelect:()=>void Ft(n.path,t.path).then(e=>{e||Mt(n.path)})})}e.push({label:E(`Choose another app…`),icon:(0,I.jsx)(ki,{size:14}),separatorBefore:!0,onSelect:()=>void Mt(n.path)}),F.push({label:E(`Open with`),icon:(0,I.jsx)(ki,{size:14}),children:e,onSelect:()=>void Mt(n.path)})}if(D||F.push({label:E(`Compress`),icon:(0,I.jsx)(Di,{size:14}),separatorBefore:!0,children:[{label:E(`Compress to ZIP`),icon:(0,I.jsx)(Di,{size:14}),onSelect:()=>void pe(e.paths)},{label:E(`Compress to…`),icon:(0,I.jsx)(Di,{size:14}),onSelect:()=>te?.(e.paths,de())}],onSelect:()=>void 0}),!D&&(e?.paths.length??0)>0){let e=[{label:E(`Select link source`),icon:(0,I.jsx)(oa,{size:14}),onSelect:()=>void ve()},...ne?[{label:E(`Cancel selected link`),icon:(0,I.jsx)(bi,{size:14}),onSelect:()=>ka(null)}]:[],...P&&n?n.isDirectory?[{label:E(`Symbolic link`),icon:(0,I.jsx)(ni,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-folder`)},{label:E(`Directory junction`),icon:(0,I.jsx)(ni,{size:14}),onSelect:()=>void ge(`junction`)},{label:E(`Smart copy`),icon:(0,I.jsx)(ra,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`smart-copy`)},{label:E(`Smart mirror`),icon:(0,I.jsx)(ra,{size:14}),onSelect:()=>void ge(`smart-mirror`)},{label:E(`Multi-version smart copy`),icon:(0,I.jsx)(ra,{size:14}),onSelect:()=>void ge(`multi-version-smart-copy`)},{label:E(`Hardlink copy`),icon:(0,I.jsx)(ra,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`hard-copy`)},{label:E(`Symbolic link copy`),icon:(0,I.jsx)(ra,{size:14}),onSelect:()=>void ge(`symbolic-copy`)}]:[{label:E(`Symbolic link`),icon:(0,I.jsx)(ri,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-file`)},{label:E(`Hard link`),icon:(0,I.jsx)(ri,{size:14}),onSelect:()=>void ge(`hard`)}]:[]];F.push({label:E(`Create link`),icon:(0,I.jsx)(oa,{size:14}),children:e,onSelect:()=>void 0})}!D&&n?.isDirectory&&ae!==null&&F.push({label:E(`Case-sensitive names`),icon:(0,I.jsx)(na,{size:14}),checked:ae,onSelect:()=>void z()}),F.push({label:E(`Copy as path`),icon:(0,I.jsx)(ra,{size:14}),onSelect:()=>void me(e.paths)}),b&&F.push({label:E(`Add to file tray`),icon:(0,I.jsx)(Qi,{size:14}),onSelect:()=>b(e.paths)}),!D&&(L?S:x)&&F.push({label:E(L?`Remove from favorites`:`Add to favorites`),icon:L?(0,I.jsx)(ta,{size:14}):(0,I.jsx)(ea,{size:14}),onSelect:()=>L?S?.(ue):x?.(ue)}),D||F.push({label:E(`Show in Explorer`),icon:(0,I.jsx)(ni,{size:14}),separatorBefore:!0,onSelect:()=>void Rt(ue[0])}),f&&ce.push({label:E(`Cut`),icon:(0,I.jsx)(ia,{size:16}),shortcut:Jt(r.cut),onSelect:()=>f(e.paths,!0)},{label:E(`Copy`),icon:(0,I.jsx)(ra,{size:16}),shortcut:Jt(r.copy),onSelect:()=>f(e.paths,!1)}),P&&n&&u&&ce.push({label:E(`Rename`),icon:(0,I.jsx)(Li,{size:16}),shortcut:Jt(r.rename),onSelect:()=>u(n.path)}),d&&ce.push({label:E(`Delete`),icon:(0,I.jsx)(vi,{size:16}),danger:!0,shortcut:Jt(r.delete),onSelect:()=>d(e.paths)}),D||ce.push({label:E(`Properties`),icon:(0,I.jsx)(fi,{size:16}),shortcut:Jt(r.properties),onSelect:()=>void jt(e.paths)})}if(re.loading)F.push({label:E(`More actions`),icon:(0,I.jsx)(ki,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(re.verbs.length>0){let e={items:[],children:new Map};for(let t of re.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,I.jsx)(so,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Bt(oe,re.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];F.push({label:E(re.safe?`More actions`:`More actions (extensions)`),icon:(0,I.jsx)(ki,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,I.jsx)(Ja,{items:F,onClose:a,quick:ce,x:e.x,y:e.y})}function so({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,I.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,I.jsx)(ui,{size:14});case`document`:return(0,I.jsx)(Fi,{size:14});case`cut`:return(0,I.jsx)(ia,{size:14});case`copy`:return(0,I.jsx)(ra,{size:14});case`paste`:return(0,I.jsx)(aa,{size:14});case`trash`:return(0,I.jsx)(vi,{size:14});case`pencil`:return(0,I.jsx)(Li,{size:14});case`gear`:return(0,I.jsx)(fi,{size:14});case`star`:return(0,I.jsx)(Wi,{size:14});case`pin`:return(0,I.jsx)(pi,{size:14});case`executable`:return(0,I.jsx)(ki,{size:14});case`share`:return(0,I.jsx)(oa,{size:14});case`arrow`:return(0,I.jsx)(ui,{size:14});default:return(0,I.jsx)(xi,{size:14})}}function co(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function lo({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=R(),[l,u]=(0,O.useState)(null),d=(0,O.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,O.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(uo,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,I.jsx)(fo,{children:f?.label??``}):(0,I.jsx)(po,{children:a}),a===void 0&&(0,I.jsx)(mo,{children:(0,I.jsx)(di,{size:11})})]}),l&&(0,ja.createPortal)((0,I.jsx)(ho,{"aria-label":c(`Options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,I.jsxs)(go,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,I.jsx)(_o,{children:t.label}),t.value===e&&(0,I.jsx)(yi,{size:11})]},t.value))}),document.body)]})}var uo=_.button`
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
`,fo=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,po=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,mo=_.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,ho=_.div`
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
    ${Ha}
`,go=_.button`
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
`,_o=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,vo=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],yo=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],bo=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],xo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],So=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function Co({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=R(),a=(0,O.useRef)(null),[o,s]=(0,O.useState)(e),[c,l]=(0,O.useState)(t),[u,d]=(0,O.useState)(`zip`),[f,p]=(0,O.useState)(`5`),[m,h]=(0,O.useState)(`default`),[g,_]=(0,O.useState)(`none`),[v,y]=(0,O.useState)(``),[b,x]=(0,O.useState)(`0`),[S,ee]=(0,O.useState)(!1);(0,O.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let C=vo.find(e=>e.value===u)??vo[0],w=u===`zip`||u===`zipx`,te=g!==`none`,T=w||u===`7z`,E=u===`zip`||u===`7z`,ne=async()=>{if(S||!c.trim()||!o||te&&v.length===0)return;ee(!0);let e=await r({directory:o,name:c.trim(),format:u,level:C.level?Number(f):0,method:w?m:null,encryption:T?g:`none`,password:te?v:void 0,splitSize:E?Number(b):0});ee(!1),e&&n()};return(0,ja.createPortal)((0,I.jsx)(wo,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,I.jsxs)(To,{"aria-modal":`true`,role:`dialog`,children:[(0,I.jsx)(Eo,{children:i(`Compress to…`)}),(0,I.jsxs)(Do,{children:[(0,I.jsx)(Oo,{children:i(`Archive name`)}),(0,I.jsx)(ko,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ne()}}),(0,I.jsx)(Ao,{children:C.extension})]}),(0,I.jsxs)(Do,{children:[(0,I.jsx)(Oo,{children:i(`Format`)}),(0,I.jsx)(lo,{onChange:e=>d(e),options:vo.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,I.jsxs)(Do,{children:[(0,I.jsx)(Oo,{children:i(`Method`)}),(0,I.jsx)(lo,{disabled:!w,onChange:h,options:yo.map(e=>({...e,label:i(e.label)})),value:w?m:`default`,width:236,zIndex:3700})]}),(0,I.jsxs)(Do,{children:[(0,I.jsx)(Oo,{children:i(`Encryption`)}),(0,I.jsx)(lo,{disabled:!T,onChange:e=>{_(e),e===`none`&&y(``)},options:bo.map(e=>({...e,label:i(e.label)})),value:T?g:`none`,width:236,zIndex:3700})]}),te&&(0,I.jsxs)(Do,{children:[(0,I.jsx)(Oo,{children:i(`Password`)}),(0,I.jsx)(ko,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,I.jsxs)(Do,{children:[(0,I.jsx)(Oo,{children:i(`Split volumes`)}),(0,I.jsx)(lo,{disabled:!E,onChange:x,options:xo.map(e=>({...e,label:i(e.label)})),value:E?b:`0`,width:236,zIndex:3700})]}),(0,I.jsxs)(Do,{children:[(0,I.jsx)(Oo,{children:i(`Compression level`)}),(0,I.jsx)(lo,{disabled:!C.level,onChange:p,options:So.map(e=>({...e,label:i(e.label)})),value:C.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,I.jsxs)(Do,{$stack:!0,children:[(0,I.jsx)(Oo,{children:i(`Destination`)}),(0,I.jsxs)(jo,{children:[(0,I.jsx)(Mo,{title:o,children:o}),(0,I.jsx)(Po,{disabled:S,onClick:()=>void ma(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,I.jsxs)(No,{children:[(0,I.jsx)(Po,{disabled:S,onClick:n,type:`button`,children:i(`Cancel`)}),(0,I.jsx)(Fo,{disabled:S||!c.trim()||te&&v.length===0,onClick:()=>void ne(),type:`button`,children:i(S?`Compressing…`:`Compress`)})]})]})}),document.body)}var wo=_.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ka}
`,To=_.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Va}
`,Eo=_.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Do=_.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Oo=_.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,ko=_.input`
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
`,Ao=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,jo=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Mo=_.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,No=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Po=_.button`
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
`,Fo=_(Po)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Io({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=R(),c=(0,O.useRef)(null);return(0,O.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,ja.createPortal)((0,I.jsx)(Lo,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,I.jsxs)(Ro,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(zo,{children:t}),(0,I.jsx)(Bo,{children:n}),(0,I.jsxs)(Vo,{children:[(0,I.jsx)(Ho,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,I.jsx)(Ho,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Lo=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ka}
`,Ro=_.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Va}
`,zo=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Bo=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Vo=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Ho=_.button`
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
`,Uo=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Wo=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Go=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Ko=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function qo({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=R(),[l,u]=(0,O.useState)(!1),[d,f]=(0,O.useState)(!1),[p,m]=(0,O.useState)(!1),[h,g]=(0,O.useState)(0),[_,v]=(0,O.useState)(0),[y,b]=(0,O.useState)(null),[x,S]=(0,O.useState)(!1),[ee,C]=(0,O.useState)(!1),w=(0,O.useRef)(null),te=(0,O.useRef)(null),T=(0,O.useRef)(null),E=(0,O.useRef)(null),[ne,D]=(0,O.useState)(()=>{let e=zn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),re=e?.path??null,k=dn(re),ie=e?Jo(e.name):``,A=!!e&&!e.isDirectory&&Uo.has(ie),ae=!!e&&!e.isDirectory&&Wo.has(ie),j=!!e&&!e.isDirectory&&Go.has(ie),M=!!e&&!e.isDirectory&&Ko.has(ie),N=!!e&&!e.isDirectory&&ie===`pdf`,P=gn(A?k:null,512,e?.modified??0),oe=_n(j?k:null,e?.modified??0,ie),se=_n(A||ae?k:null,e?.modified??0,ie),F=vn(N?k:null,e?.modified??0),ce=q(!A&&!ae&&!j&&!M&&!N?k:null,e?.isDirectory??!1);if((0,O.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),C(!1)},[re]),(0,O.useEffect)(()=>{if(!k||!M){b(null),S(!1);return}let e=!0;return S(!0),b(null),Ee(k).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`Could not read this file.`)}),S(!1))}),()=>{e=!1}},[k,M]),!e&&!s)return null;let le=e=>{T.current={x:e.clientX,width:te.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},ue=e=>{let t=T.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},L=e=>{T.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},de=e=>{E.current={y:e.clientY,height:ne},e.currentTarget.setPointerCapture(e.pointerId)},fe=e=>{let t=E.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));D(n),Bn(`yafm.preview.media.height`,n)},pe=e=>{E.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,I.jsxs)(Xo,{$open:r,children:[r&&(0,I.jsx)(Zo,{onPointerDown:le,onPointerMove:ue,onPointerUp:L,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,I.jsx)(Qo,{ref:te,style:{width:r?t:0},children:(0,I.jsxs)($o,{children:[(0,I.jsx)(ni,{size:56}),(0,I.jsx)(`span`,{children:s})]})})]});let me=()=>{let e=w.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,I.jsxs)(Xo,{$open:r,children:[r&&(0,I.jsx)(Zo,{onPointerDown:le,onPointerMove:ue,onPointerUp:L,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,I.jsxs)(Qo,{ref:te,style:{width:r?t:0},children:[(0,I.jsx)(es,{style:{height:ne},children:A&&se&&!l?(0,I.jsxs)(ns,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,I.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:me,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:P??void 0,preload:`metadata`,ref:w,src:se}),(0,I.jsx)(rs,{$visible:!d,onClick:me,title:c(`Play`),type:`button`,children:(0,I.jsx)(sa,{size:28})}),(0,I.jsxs)(is,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,I.jsxs)(as,{children:[(0,I.jsx)(`span`,{children:Yo(_)}),(0,I.jsx)(`span`,{children:Yo(h)})]}),(0,I.jsx)(os,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=w.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):ae&&se?(0,I.jsx)(`audio`,{controls:!0,src:se}):j&&oe?(0,I.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:oe}):N&&F&&!ee?(0,I.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>C(!0),src:F}):N?(0,I.jsx)(ri,{size:64}):M?(0,I.jsx)(ss,{children:x||!y?(0,I.jsx)(ls,{children:c(`Loading…`)}):y.error?(0,I.jsx)(ls,{children:y.error}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(cs,{children:y.text}),y.truncated&&(0,I.jsx)(ls,{children:c(`Showing the first 256 KB.`)})]})}):A&&P?(0,I.jsx)(`img`,{alt:``,src:P}):ce?(0,I.jsx)(`img`,{alt:``,src:ce}):e.isDirectory?(0,I.jsx)(ni,{size:64}):(0,I.jsx)(ri,{size:64})}),(0,I.jsx)(ts,{onDoubleClick:()=>{D(210),Bn(`yafm.preview.media.height`,210)},onPointerDown:de,onPointerMove:fe,onPointerUp:pe,title:c(`Drag to resize; double-click to reset`)}),(0,I.jsxs)(us,{children:[(0,I.jsx)(ds,{title:e.path,children:e.name}),o&&(0,I.jsx)(fs,{children:o}),(0,I.jsx)(ps,{children:e.fields.map(e=>(0,I.jsxs)(ms,{children:[(0,I.jsx)(hs,{children:e.label}),(0,I.jsx)(gs,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Jo(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Yo(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Xo=_.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,Zo=_.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Qo=_.aside`
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
`,$o=_.div`
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
`,es=_.div`
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
`,ts=_.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ns=_.div`
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
`,rs=_.button`
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
`,is=_.div`
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
`,as=_.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,os=_.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,ss=_.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,cs=_.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,ls=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,us=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,ds=_.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,fs=_.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,ps=_.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,ms=_.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,hs=_.span`
    color: var(--text-muted);
`,gs=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,_s=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],vs=[..._s],ys={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},bs={folder:e=>(0,I.jsx)(ni,{size:e}),home:e=>(0,I.jsx)(ti,{size:e}),desktop:e=>(0,I.jsx)(Ri,{size:e}),documents:e=>(0,I.jsx)(zi,{size:e}),downloads:e=>(0,I.jsx)(Bi,{size:e}),pictures:e=>(0,I.jsx)(Vi,{size:e}),music:e=>(0,I.jsx)(Hi,{size:e}),videos:e=>(0,I.jsx)(Ui,{size:e}),drive:e=>(0,I.jsx)(ii,{size:e}),image:e=>(0,I.jsx)(wi,{size:e}),video:e=>(0,I.jsx)(Ti,{size:e}),audio:e=>(0,I.jsx)(Ei,{size:e}),text:e=>(0,I.jsx)(Si,{size:e}),code:e=>(0,I.jsx)(Ci,{size:e}),clock:e=>(0,I.jsx)(gi,{size:e}),star:e=>(0,I.jsx)(Wi,{size:e}),file:e=>(0,I.jsx)(ri,{size:e}),archive:e=>(0,I.jsx)(Di,{size:e}),pdf:e=>(0,I.jsx)(Oi,{size:e}),executable:e=>(0,I.jsx)(ki,{size:e}),font:e=>(0,I.jsx)(Ai,{size:e}),database:e=>(0,I.jsx)(ji,{size:e}),config:e=>(0,I.jsx)(Mi,{size:e}),spreadsheet:e=>(0,I.jsx)(Ni,{size:e}),presentation:e=>(0,I.jsx)(Pi,{size:e}),document:e=>(0,I.jsx)(Fi,{size:e}),app:e=>(0,I.jsx)(xi,{size:e}),gear:e=>(0,I.jsx)(fi,{size:e}),pin:e=>(0,I.jsx)(pi,{size:e}),trash:e=>(0,I.jsx)(vi,{size:e}),overview:e=>(0,I.jsx)(Ii,{size:e}),book:e=>(0,I.jsx)(Gi,{size:e}),briefcase:e=>(0,I.jsx)(Ki,{size:e}),cloud:e=>(0,I.jsx)(qi,{size:e}),gamepad:e=>(0,I.jsx)(Ji,{size:e}),camera:e=>(0,I.jsx)(Yi,{size:e}),terminal:e=>(0,I.jsx)(Xi,{size:e}),server:e=>(0,I.jsx)(Zi,{size:e}),package:e=>(0,I.jsx)(Qi,{size:e}),globe:e=>(0,I.jsx)($i,{size:e}),heart:e=>(0,I.jsx)(ea,{size:e}),share:e=>(0,I.jsx)(Zi,{size:e}),favorites:e=>(0,I.jsx)(ea,{size:e})};function xs(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ss(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??_s)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||vs.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=xs(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${ys[n]??n}${Cs(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Cs(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function ws({panel:e,size:t=16}){let n=fn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,I.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?bs[e.icon]:void 0;if(r)return(0,I.jsx)(I.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,I.jsx)(ni,{size:t});case`recent`:return(0,I.jsx)(gi,{size:t});case`frequent`:return(0,I.jsx)(Wi,{size:t});case`drives`:return(0,I.jsx)(ii,{size:t});case`home`:return(0,I.jsx)(ti,{size:t});case`share`:return(0,I.jsx)(Zi,{size:t});case`favorites`:return(0,I.jsx)(ea,{size:t});default:return(0,I.jsx)(ni,{size:t})}}function Ts({place:e,size:t=18}){let n=fn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,I.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&bs[e.icon]?(0,I.jsx)(I.Fragment,{children:bs[e.icon](t)}):(0,I.jsx)(ni,{size:t})}var Es=`#64748b`;function Ds(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Os({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=R(),[c,l]=(0,O.useState)(``),[u,d]=(0,O.useState)(`#2dd4bf`),f=(0,O.useRef)(null);(0,O.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,ja.createPortal)((0,I.jsxs)(ks,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,I.jsxs)(As,{children:[(0,I.jsx)(`span`,{children:s(`Tags`)}),(0,I.jsx)(js,{onClick:o,title:s(`Close`),type:`button`,children:(0,I.jsx)(bi,{size:11})})]}),(0,I.jsxs)(Ms,{children:[p.length===0&&(0,I.jsx)(Is,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,I.jsxs)(Ns,{children:[(0,I.jsx)(Ps,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,I.jsxs)(Fs,{$color:t,$ink:Ds(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,I.jsx)(yi,{size:11}),(0,I.jsx)(`span`,{children:e})]})]},e)})]}),(0,I.jsxs)(Ls,{children:[(0,I.jsx)(Ps,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,I.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,I.jsx)(Rs,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var ks=_.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${Va}
`,As=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,js=_.button`
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
`,Ms=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Ns=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ps=_.input`
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
`,Fs=_.button`
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
`,Is=_.span`
    font-size: 11px;
    color: var(--text-muted);
`,Ls=_.div`
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
`,Rs=_.button`
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
`,zs={file:ri,folder:ni,text:Si,code:Ci,image:wi,video:Ti,audio:Ei,archive:Di,pdf:Oi,executable:ki,font:Ai,database:ji,config:Mi,spreadsheet:Ni,presentation:Pi,document:Fi},Bs={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Vs(e){let t=e.lastIndexOf(`.`);return t>0?Bs[e.slice(t).toLowerCase()]??`file`:`file`}function Hs({name:e,size:t}){let n=zs[e??`file`]??ri;return(0,I.jsx)(n,{size:t})}function Us({path:e,name:t,isDirectory:n,size:r=18}){let i=q(e,n);return i?(0,I.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,I.jsx)(ni,{size:r}):(0,I.jsx)(Hs,{name:Vs(t),size:r})}var Ws=`application/x-yafm-paths`,Gs=[Ws,`text/uri-list`];function Ks(e){return e?.types.some(e=>Gs.includes(e.toLowerCase()))??!1}function qs(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Ws);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Ys).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Js=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Ys(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Js?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Xs(e,t,n=!0){e.dataTransfer.setData(Ws,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Zs({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=R(),[m,h]=(0,O.useState)(()=>new Set),[g,_]=(0,O.useState)(!1),v=(0,O.useRef)(null),y=(0,O.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),b=(0,O.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),x=(0,O.useRef)(null);if((0,O.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=x.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Ks(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=qs(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let S=new Set([...e,...t].map(e=>e.path)),ee=S.size>0&&[...S].every(e=>m.has(e)),C=S.size,w=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},te=()=>{h(ee?new Set:S)},T=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},E=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},D=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},re=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},k=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},ie=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of b)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},A=(e,t)=>{let n=m.has(e.path);return(0,I.jsxs)(lc,{$checked:n,draggable:!0,onClick:()=>w(e.path),onDragStart:r=>{Xs(r,n&&m.size>0?[...new Set([...y,...b].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,I.jsx)(uc,{$checked:n,onClick:t=>{t.stopPropagation(),w(e.path)},type:`button`,children:n&&(0,I.jsx)(yi,{size:8})}),(0,I.jsx)(Us,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,I.jsxs)(dc,{children:[(0,I.jsx)(fc,{children:e.name}),(0,I.jsx)(pc,{children:ne(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},ae=e=>{Ks(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,I.jsxs)(Qs,{$dragging:g,"data-tray":`true`,ref:x,style:{left:i.x,top:i.y},onDragEnter:ae,onDragOver:ae,onDrop:e=>{let{paths:t}=qs(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,I.jsxs)($s,{onPointerDown:T,onPointerMove:E,onPointerUp:D,children:[(0,I.jsxs)(ec,{children:[(0,I.jsx)(Qi,{size:13}),p(`Tray`),(0,I.jsx)(tc,{children:C})]}),(0,I.jsxs)(nc,{onPointerDown:e=>e.stopPropagation(),children:[(0,I.jsx)(rc,{onClick:te,title:p(ee?`Select none`:`Select all`),type:`button`,children:p(ee?`None`:`All`)}),(0,I.jsx)(rc,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,I.jsx)(ic,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,I.jsx)(bi,{size:10})})]})]}),(0,I.jsxs)(ac,{children:[(0,I.jsxs)(sc,{children:[p(`In this app`),(0,I.jsx)(tc,{children:e.length})]}),e.length===0&&(0,I.jsx)(oc,{children:p(`Drag files or folders here`)}),e.map(e=>A(e,!0)),t.length>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(sc,{$clipboard:!0,children:[p(`Clipboard`),(0,I.jsx)(tc,{children:t.length}),n&&(0,I.jsx)(cc,{children:p(`Cut`)})]}),t.map(e=>A(e,n))]})]}),(0,I.jsxs)(mc,{children:[(0,I.jsx)(hc,{$plain:!0,disabled:y.length===0,onClick:k,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,I.jsx)(hc,{disabled:m.size===0||!a,onClick:ie,type:`button`,children:p(`Move here`)}),(0,I.jsx)(hc,{$danger:!0,disabled:y.length===0,onClick:re,type:`button`,children:p(`Remove`)})]})]})}var Qs=_.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Ma}
    ${Va}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,$s=_.div`
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
`,ec=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,tc=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,nc=_.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,rc=_.button`
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
`,ic=_.button`
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
`,ac=_.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,oc=_.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,sc=_.div`
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
`,cc=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,lc=_.div`
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
`,uc=_.button`
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
`,dc=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,fc=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,pc=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,mc=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,hc=_.button`
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
`,gc=new Map,_c=new Set,vc=0;function yc(){vc+=1;for(let e of _c)e()}function bc(e,t){t?gc.set(e,t):gc.delete(e),yc()}function xc(e){return gc.has(e)}function Sc(e,t,n){gc.get(e)?.(t,n)}function Cc(e){return _c.add(e),()=>_c.delete(e)}function wc(){return vc}function Tc(e){return(0,O.useSyncExternalStore)(Cc,wc,wc),{available:xc(e),open:(t,n)=>Sc(e,t,n)}}function Ec(e){return[...gc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function Dc(e){return(0,O.useSyncExternalStore)(Cc,wc,wc),{available:Ec(e).length>0,open:(t,n)=>{let r=Ec(e).at(-1);r&&Sc(r,t,n)}}}var Oc=60,kc=300,Ac=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],jc=new Set,Mc=`yafm.columnWidths`,Nc=`yafm.reset-column-widths`,Pc=64,Fc=720,Ic=160,Lc=190,Rc=120;function zc({listing:e,loading:t,error:n,find:r=bn,view:i,showImages:a,imageStripHeight:s=Lc,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:d,onOpenFile:p,showCheckboxes:m=!0,openOnSingleClick:h=!1,shortcuts:g=Ut,enableShortcuts:_=!0,refreshToken:b=0,onRefresh:x,onRename:S,onClipboardChanged:ee,cutPaths:C=jc,onTransfer:w,onAddToTray:te,onAddFavorite:T,onRemoveFavorite:E,favoritePaths:ne,onExtractArchive:D,onPaste:re,confirmDelete:k=!1,previewVideoAudio:ie=!1,previewVideoAutoplay:A=!1,showDetails:ae=!0,onPreviewInfo:j,onActivate:M,groupOf:N,onGridScroll:P,gridFooter:oe,allowBackgroundMenu:se=!0,readOnly:F=!1,onSelectionChange:ce,onSelectionCountChange:le,selectionMenuRequest:ue,selectionMenuId:L,singleSelect:de=!1,pendingRename:fe=null,pendingRenameToken:pe=0,selectMatchesToken:me=0}){let z=R(),he=In(),ge=(0,O.useRef)(null),_e=(0,O.useRef)(null),ve=(0,O.useRef)(null),[B,ye]=(0,O.useState)(kc),[be,xe]=(0,O.useState)({top:0,height:640}),Se=(0,O.useRef)(null),V=(0,O.useRef)(null),[Ce,we]=(0,O.useState)(null),[Te,Ee]=(0,O.useState)(s),[De,Oe]=(0,O.useState)(()=>new Set),[ke,Ae]=(0,O.useState)(()=>Vn(Mc)??{}),je=(0,O.useRef)(De),Me=(0,O.useRef)([]);je.current=De,(0,O.useEffect)(()=>ce?.([...De]),[De,ce]),(0,O.useEffect)(()=>le?.(De.size),[De,le]),(0,O.useEffect)(()=>{let e=ue;if(!e||e.token===Pe.current)return;Pe.current=e.token;let t=[...je.current];t.length!==0&&(H({x:e.x,y:e.y,paths:t,background:!1}),yt().then(Je,()=>Je(!1)))},[ue]);let[Ne,H]=(0,O.useState)(null),Pe=(0,O.useRef)(0),[Fe,Ie]=(0,O.useState)(null),[Le,Re]=(0,O.useState)(null),[ze,Be]=(0,O.useState)(null),Ve=(0,O.useRef)(ze);Ve.current=ze;let He=(0,O.useRef)(0),Ue=(0,O.useRef)(M);Ue.current=M;let[We,Ge]=(0,O.useState)(()=>{let e=zn(`yafm.preview.width`,320);return e>=220?e:320}),Ke=(0,O.useCallback)(e=>{Ge(e),Bn(`yafm.preview.width`,e)},[]),[qe,Je]=(0,O.useState)(!1),Ye=(0,O.useCallback)((e,t)=>{let n=[...je.current];n.length!==0&&(H({x:e,y:t,paths:n,background:!1}),yt().then(Je,()=>Je(!1)))},[]);(0,O.useEffect)(()=>{if(L)return bc(L,De.size>0?Ye:null),()=>bc(L,null)},[L,De,Ye]),(0,O.useEffect)(()=>{Oe(new Set),Be(null),H(null),V.current=null},[e?.path]),(0,O.useEffect)(()=>{Ee(s)},[s]),(0,O.useEffect)(()=>{Oe(new Set),Be(null),V.current=null},[b]);let Xe=e=>{Se.current={y:e.clientY,height:Te},e.currentTarget.setPointerCapture(e.pointerId)},Ze=e=>{let t=Se.current;if(!t)return;let n=Math.max(Rc,Math.round(window.innerHeight*.7));Ee(Math.min(n,Math.max(Rc,t.height+t.y-e.clientY)))},Qe=e=>{Se.current&&(Se.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(Te))},$e=()=>{Ee(Lc),c?.(Lc)},et=r.query.length>0,tt=(0,O.useMemo)(()=>Ac.filter(e=>i.columns?.includes(e.id)),[i.columns]),nt=i.columns?.includes(`linkTarget`)??!1,rt=(0,O.useCallback)(e=>Math.min(Fc,Math.max(Pc,ke[e.id]??e.width)),[ke]),it=(0,O.useMemo)(()=>`minmax(160px, 1fr) ${tt.map(e=>`${rt(e)}px`).join(` `)}`.trim(),[tt,rt]),at=(0,O.useRef)(null),ot=(0,O.useRef)(null),st=()=>Math.floor(ot.current?.getBoundingClientRect().width??Ic),ct=e=>{let t=tt[0];t&&(e.preventDefault(),e.stopPropagation(),at.current={left:{id:t.id,start:rt(t)},startX:e.clientX,nameStart:st()})},lt=(e,t)=>{let n=tt[t],r=tt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),at.current={left:{id:n.id,start:rt(n)},right:{id:r.id,start:rt(r)},startX:e.clientX,nameStart:0})},ut=e=>Ae(t=>{let n={...t};return delete n[e],Hn(Mc,n),n});(0,O.useEffect)(()=>{let e=e=>{let t=at.current;if(!t)return;let n=e.clientX-t.startX;Ae(e=>{if(!t.right){let r=Math.max(0,t.nameStart-Ic),i=Math.min(Math.min(Fc,t.left.start+r),Math.max(Pc,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(Fc,Math.max(Pc,t.left.start+n)),a=Math.min(Math.min(Fc,r-Pc),Math.max(Math.max(Pc,r-Fc),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{at.current&&(at.current=null,Ae(e=>(Hn(Mc,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,O.useEffect)(()=>{let e=()=>Ae(()=>(Hn(Mc,{}),{}));return window.addEventListener(Nc,e),()=>window.removeEventListener(Nc,e)},[]);let U=(0,O.useMemo)(()=>e?Hc(e.entries.map(t=>{let n=t.isDirectory?Ln(he,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:et?xn(i,r):null,tags:e.tags[t.name]??[],cut:C.has(t.fullPath)}}).filter(e=>!et||r.mode===`dim`||e.ranges!==null),i,e,z):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,et,r,he,i.sort,i.sortDescending,z,C]);Me.current=U,(0,O.useEffect)(()=>{me!==0&&Oe(new Set(Me.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[me]);let dt=Math.max(40,i.iconSize+20),ft=Math.max(0,Math.floor(be.top/dt)-4),pt=Math.min(U.length,ft+Math.ceil(be.height/dt)+10),mt=(0,O.useMemo)(()=>U.slice(ft,pt),[U,ft,pt]);(0,O.useEffect)(()=>{let e=ve.current;if(!e||i.mode!==`list`)return;let t=()=>xe(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,O.useEffect)(()=>{xe(e=>({...e,top:0})),ve.current&&(ve.current.scrollTop=0)},[e?.path]),(0,O.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=U.findIndex(e=>e.entry.fullPath===r.currentPath),t=ve.current;if(e<0||!t)return;let n=e*dt;(n<t.scrollTop||n+dt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ge.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,U,dt]);let ht=(0,O.useMemo)(()=>U.slice(0,B),[U,B]);(0,O.useEffect)(()=>{ye(kc)},[e?.path]),(0,O.useEffect)(()=>{if(!r.currentPath)return;let e=U.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&ye(t=>Math.max(t,e+kc))},[r.currentPath,U]);let gt=(0,O.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&ye(e=>Math.min(U.length,e+kc))},[U.length]),_t=i.mode===`grid`,bt=(0,O.useMemo)(()=>{if(!_t)return[];if(!N)return Gc(ht,Wc);let e=[],t=new Map;for(let n of ht){let r=N(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[ht,_t,N]),xt=(0,O.useMemo)(()=>a?U.filter(e=>!e.entry.isDirectory&&Mn(e.entry.name)):[],[U,a]),St=xt.length,Dt=(0,O.useMemo)(()=>xt.slice(0,Oc),[xt]),Ot=(0,O.useMemo)(()=>a?Gc(Dt,Uc):[],[Dt,a]),kt=(0,O.useMemo)(()=>U.map(e=>e.entry.fullPath),[U]),Mt=U.length>0&&De.size>=U.length,Pt=De.size>0&&!Mt,Ft=()=>{de||(Mt?zt():Oe(new Set(kt)))},It=e?.path??``,Lt=(0,O.useCallback)((e,t)=>{if(de){V.current=t,Oe(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Oe(r=>{if(e.shiftKey&&V.current!==null){let e=kt.indexOf(V.current),i=kt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(kt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),V.current=t,e}return V.current=t,new Set([t])})},[kt,de]),Rt=(0,O.useCallback)(e=>{de?(V.current=e,Oe(new Set([e]))):(V.current=e,Oe(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[de]),zt=(0,O.useCallback)(()=>{V.current=null,Oe(new Set)},[]);(0,O.useEffect)(()=>{if(pe===0||!fe||He.current===pe||!e?.entries.some(e=>e.fullPath===fe))return;He.current=pe,V.current=fe,Oe(new Set([fe])),Be({path:fe,value:v(fe)});let t=U.findIndex(e=>e.entry.fullPath===fe),n=ve.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*dt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(fe)}"]`)?.scrollIntoView({block:`nearest`})})}},[ve,e,fe,pe,dt,U,i.mode]),(0,O.useEffect)(()=>{if(!ze)return;let e=U.findIndex(e=>e.entry.fullPath===ze.path),t=ve.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*dt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(ze.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[ve,ze,dt,U,i.mode]);let Bt=(0,O.useCallback)(()=>H(null),[]),W=(0,O.useCallback)((e,t)=>{e.isDirectory?d(e.fullPath,Kt(t)):p?.(e.fullPath,Kt(t))},[d,p]),Ht=(0,O.useCallback)((e,t,n)=>{we({entry:e,x:t,y:n})},[]),Wt=(0,O.useRef)(null),Gt=(0,O.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Xs(e,De.has(n)?[...De]:[n])},[De]),Jt=(0,O.useCallback)(e=>{if(!Ks(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Wt.current=t?.dataset.directory===`true`?t.dataset.path??It:It,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[It]),Yt=(0,O.useCallback)(e=>{if(F)return;let{paths:t,move:n}=qs(e),r=Wt.current??It;Wt.current=null,t.length!==0&&w&&(e.preventDefault(),w(t,r,!e.ctrlKey&&n))},[It,w,F]),Zt=(0,O.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),F||!t&&!se)return;let n=je.current;t&&!n.has(t)&&Oe(new Set([t])),t&&(V.current=t);let r=t?n.has(t)?[...n]:[t]:[];H({x:e.clientX,y:e.clientY,paths:r,background:!t}),yt().then(Je,()=>Je(!1))},[se,It]),Qt=(0,O.useCallback)(()=>x?.(),[x]),$t=(e,t)=>{V.current=e,Oe(new Set([e])),t&&Be({path:e,value:v(e)}),Qt()},en=Fe&&(0,I.jsx)(Co,{initialDirectory:It,initialName:Fe.name,onCancel:()=>Ie(null),onCompress:async e=>{let t=await Vt(Fe.paths,e);return!t.ok||!t.path?(ya(t.error??z(`Could not create the archive.`)),!1):($t(t.path,!1),!0)}}),tn=async(e,t=!1)=>{await vt(e,t)&&(Je(!0),ee?.())},nn=async e=>{e&&(await Ct(e)?(Qt(),re?.()):ya(z(`Nothing on the clipboard could be pasted here.`)))},rn=async(e,t=!1)=>{if(!It)return;let n=e===null?await Et(It,t):await At(It,e);!n.ok||n.path===null?ya(n.error??z(`Could not create the item.`)):(V.current=n.path,Oe(new Set([n.path])),Be({path:n.path,value:v(n.path)}),Qt())},an=e=>{Oe(new Set([e.fullPath])),V.current=e.fullPath,Be({path:e.fullPath,value:e.name})},on=(0,O.useCallback)(e=>Be(t=>t&&{...t,value:e}),[]),sn=(0,O.useCallback)(()=>Be(null),[]),cn=(0,O.useCallback)(async()=>{let e=Ve.current;if(Be(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Me.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Tt(e.path,t);r.ok?(zt(),r.path&&S?.(e.path,r.path),Qt(),window.setTimeout(()=>Qt(),250)):ya(r.error??z(`Could not rename the entry.`))},[zt,S,Qt,z]),ln=async(e,t=!1)=>{if((t||k)&&!await G(e,t))return;let n=await wt(e,t);if(!n.ok&&n.needsPermanent){if(!await G(e,!0))return;n=await wt(e,!0)}if(n.ok)zt(),Qt();else{if(n.cancelled)return;ya(n.error??z(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},G=(0,O.useCallback)((e,t)=>new Promise(n=>Re({paths:e,permanent:t,resolve:n})),[]),K=(0,O.useCallback)(e=>{Re(t=>(t?.resolve(e),null))},[]);(0,O.useEffect)(()=>{if(!_||Ne)return;let e=e=>{if(Xt(e.target))return;Ue.current?.();let t=qt(e),n=[...De],r=n.length===1?U.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(kt.length===0)return;e.preventDefault();let n=V.current&&kt.includes(V.current)?V.current:De.size===1?[...De][0]:null,r=n?kt.indexOf(n):-1,i=t===`home`?0:t===`end`?kt.length-1:Math.max(0,Math.min(kt.length-1,r+(t===`arrowdown`?1:-1))),a=kt[i];Oe(new Set([a])),V.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===g.copy?i(()=>{n.length>0&&tn(n)}):t===g.cut?i(()=>{n.length>0&&tn(n,!0)}):t===g.paste?i(()=>void nn(It)):t===g.delete?i(()=>{n.length>0&&ln(n)}):t===g.deletePermanently?i(()=>{n.length>0&&ln(n,!0)}):t===g.selectAll?i(()=>{Oe(new Set(kt)),V.current=kt[0]??null}):t===g.invertSelection?i(()=>{Oe(new Set(kt.filter(e=>!De.has(e)))),V.current=kt[0]??null}):t===g.rename&&r?i(()=>void an(r)):t===g.open&&r?i(()=>{r.isDirectory?d(r.fullPath):p?.(r.fullPath)}):t===g.newFolder||t===`f10`?i(()=>void rn(null)):t===g.terminal?i(()=>void Nt(It)):t===g.properties&&i(()=>void jt(n.length>0?n:It?[It]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[kt,tn,rn,It,_,Ne,d,p,nn,ln,an,U,De,g]);let un=Le&&(0,I.jsx)(Io,{confirmLabel:Le.permanent?z(`Delete`):z(`Move`),danger:Le.permanent,message:Le.permanent?z(`Permanently delete {target}? This cannot be undone.`,{target:Le.paths.length===1?z(`this item`):z(`{count} items`,{count:Le.paths.length})}):z(`Move {target} to the recycle bin?`,{target:Le.paths.length===1?z(`this item`):z(`{count} items`,{count:Le.paths.length})}),onCancel:()=>K(!1),onConfirm:()=>K(!0),open:!0,title:Le.permanent?z(`Delete permanently`):z(`Move to the recycle bin`)}),q=(0,O.useMemo)(()=>{if(!e||De.size===0)return null;let t=kt.find(e=>De.has(e));return t?U.find(e=>e.entry.fullPath===t)?.entry??null:null},[kt,e,U,De]),dn=(0,O.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:v(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:z(`Type`),value:z(`Folder`)},{label:z(`Location`),value:e.parent??`—`},{label:z(`Path`),value:e.path},{label:z(`Size`),value:f(t)},{label:z(`Items`),value:o(z,n,`1 item`,`{count} items`)},{label:z(`Modified`),value:`—`},{label:z(`Created`),value:`—`},{label:z(`Attributes`),value:`—`}]}},[e,z]),fn=(0,O.useMemo)(()=>{if(!q||!e)return null;let t=q.isDirectory?e.folderSizes[q.name]:void 0,n=e.tags[q.name]??[],r=q.name.lastIndexOf(`.`),i=r>0&&r<q.name.length-1?q.name.slice(r+1).toUpperCase():`—`;return{name:q.name,path:q.fullPath,isDirectory:q.isDirectory,size:q.size,modified:q.modified,created:q.created,fields:[{label:z(`Type`),value:Jc(q,z)},...q.isEncrypted?[{label:z(`Encryption`),value:z(`Password required`)}]:[],{label:z(`Extension`),value:q.isDirectory?`—`:i},{label:z(`Location`),value:e.path},{label:z(`Full path`),value:q.fullPath},{label:z(`Size`),value:q.isDirectory?t===void 0?`—`:f(t):f(q.size)},...q.isDirectory?[{label:z(`Items`),value:`${e.counts[q.name]??`—`}`}]:[],{label:z(`Modified`),value:y(q.modified)},{label:z(`Created`),value:y(q.created)},{label:z(`Link status`),value:q.linkTarget==null?q.linkCount>1?z(`Hard link`):`—`:q.linkValid?`OK`:z(`Broken`)},...q.linkTarget?[{label:z(`Target`),value:q.linkTarget}]:[],...q.linkCount>1?[{label:z(`Links`),value:String(q.linkCount)}]:[],{label:z(`Attributes`),value:[q.isHidden?z(`Hidden`):``,q.isSystem?z(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:z(`Tags`),value:n.join(`, `)}]:[]]}},[e,q,z]),pn=Ne?.paths.length===1?Ne.paths[0]:null,mn=pn?U.find(e=>e.entry.fullPath===pn)?.entry:void 0,hn=mn?{path:mn.fullPath,isDirectory:mn.isDirectory}:null,gn=fn??dn,_n=(0,O.useRef)(j);_n.current=j,(0,O.useEffect)(()=>{_n.current?.(gn)},[j,gn]);let vn=ae&&gn&&(0,I.jsx)(qo,{info:gn,onWidth:Ke,selectionNote:De.size>1?o(z,De.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:ie,videoAutoplay:A,width:We});return n&&!e?(0,I.jsx)(Ql,{children:(0,I.jsx)(eu,{children:n})}):!e&&!t?(0,I.jsx)(Ql,{children:(0,I.jsx)($l,{children:z(`Nothing selected.`)})}):i.mode===`grid`?(0,I.jsxs)(hl,{onPointerDown:M,children:[(0,I.jsxs)(gl,{children:[(0,I.jsxs)(wl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||zt()},onContextMenu:e=>Zt(e),onDragOver:Jt,onDragStart:Gt,onDrop:Yt,onScroll:e=>{P?.(e.currentTarget),gt(e.currentTarget)},children:[m&&U.length>0&&(0,I.jsxs)(fl,{children:[(0,I.jsx)(ul,{$checked:!de&&Mt,$partial:!de&&Pt,"aria-label":z(Mt?`Select none`:`Select all`),disabled:de,onClick:Ft,title:z(Mt?`Select none`:`Select all`),type:`button`,children:Mt?(0,I.jsx)(yi,{size:10}):Pt?(0,I.jsx)(dl,{}):null}),(0,I.jsx)(`span`,{children:z(Mt?`Select none`:`Select all`)})]}),t&&!e?(0,I.jsx)(kl,{$size:i.gridSize,children:(0,I.jsx)(el,{size:i.gridSize})}):(0,I.jsx)(nl,{counts:e?.counts,currentPath:et?r.currentPath:null,groups:bt,gridSize:i.gridSize,innerRef:ge,onContextMenu:Zt,onOpen:d,onOpenFile:p,onRenameCancel:sn,onRenameChange:on,onRenameCommit:cn,onSelect:Lt,onToggle:Rt,openOnSingleClick:h,renaming:ze,searching:et,selected:De,showCheckboxes:m,showTarget:nt}),!t&&e&&U.length===0&&(0,I.jsx)(Zl,{children:(0,I.jsx)($l,{children:n??(et&&r.mode===`hide`?z(`No entries match the search.`):z(`This folder is empty.`))})}),oe]}),Ne&&(0,I.jsx)(oo,{canPaste:qe,directory:It,allowCompression:!0,menu:Ne,onAddToTray:te,onAddFavorite:T,onRemoveFavorite:E,favoritePaths:ne,onExtractArchive:D,onArchiveCreated:$t,onClose:Bt,onCompressTo:(e,t)=>Ie({paths:e,name:t}),onCopy:tn,onCreateFile:e=>void rn(e),onCreateFolder:e=>void rn(null,e),onDelete:ln,onOpen:d,onOpenFile:p,onPaste:nn,onRefresh:Qt,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&an(t)},shortcuts:g,target:hn}),en,un]}),vn]}):(0,I.jsxs)(hl,{onPointerDown:M,children:[(0,I.jsxs)(gl,{children:[(0,I.jsxs)(_l,{onScroll:e=>{ve.current&&ve.current.scrollLeft!==e.currentTarget.scrollLeft&&(ve.current.scrollLeft=e.currentTarget.scrollLeft)},ref:_e,style:{gridTemplateColumns:it},children:[(0,I.jsxs)(sl,{ref:ot,children:[m&&(0,I.jsx)(ul,{$checked:!de&&Mt,$partial:!de&&Pt,"aria-label":z(Mt?`Select none`:`Select all`),disabled:de,onClick:e=>{e.stopPropagation(),Ft()},title:z(Mt?`Select none`:`Select all`),type:`button`,children:Mt?(0,I.jsx)(yi,{size:10}):Pt?(0,I.jsx)(dl,{}):null}),(0,I.jsxs)(vl,{onClick:()=>l(`name`),type:`button`,children:[z(`Name`),Bc(i,`name`)]}),(0,I.jsx)(ll,{"aria-label":z(`Resize column`),onDoubleClick:()=>tt[0]&&ut(tt[0].id),onPointerDown:ct,role:`separator`})]}),tt.map((e,t)=>(0,I.jsxs)(cl,{children:[(0,I.jsxs)(vl,{onClick:()=>l(e.id),type:`button`,children:[z(e.label),Bc(i,e.id)]}),t<tt.length-1&&(0,I.jsx)(ll,{"aria-label":z(`Resize column`),onDoubleClick:()=>ut(e.id),onPointerDown:e=>lt(e,t),role:`separator`})]},e.id))]}),(0,I.jsxs)(yl,{onClick:e=>{e.target===e.currentTarget&&zt()},onContextMenu:e=>Zt(e),onDragOver:Jt,onDragStart:Gt,onDrop:Yt,onScroll:e=>{_e.current&&_e.current.scrollLeft!==e.currentTarget.scrollLeft&&(_e.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;xe(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:ve,children:[t&&!e?(0,I.jsx)($c,{template:it,columns:tt.length}):(0,I.jsxs)(I.Fragment,{children:[ft>0&&(0,I.jsx)(`div`,{style:{height:ft*dt}}),mt.map(t=>{let n=t.entry.fullPath;return(0,I.jsx)(il,{current:et&&n===r.currentPath,dim:et&&t.ranges===null,height:dt,iconSize:i.iconSize,innerRef:ge,listing:e,onContextMenu:Zt,onOpen:W,onRenameCancel:sn,onRenameChange:on,onRenameCommit:cn,onSelect:Lt,onTagEdit:Ht,onToggle:Rt,openOnSingleClick:h,renaming:ze?.path===n?{value:ze.value}:null,row:t,selected:De.has(n),showCheckboxes:m,showTarget:nt,template:it,visible:tt},n)}),pt<U.length&&(0,I.jsx)(`div`,{style:{height:(U.length-pt)*dt}})]}),!t&&e&&U.length===0&&(0,I.jsx)(Ql,{children:(0,I.jsx)($l,{children:n??(et&&r.mode===`hide`?z(`No entries match the search.`):z(`This folder is empty.`))})})]}),a&&xt.length>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(bl,{onDoubleClick:$e,onPointerDown:Xe,onPointerMove:Ze,onPointerUp:Qe,title:z(`Drag to resize; double-click to reset`)}),(0,I.jsxs)(xl,{style:{height:Te},children:[(0,I.jsxs)(Sl,{children:[z(`Preview`),(0,I.jsx)(Cl,{children:St>Oc?`${Dt.length} / ${St}`:St})]}),(0,I.jsx)(wl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||zt()},onContextMenu:e=>Zt(e),children:(0,I.jsx)(nl,{counts:e?.counts,currentPath:et?r.currentPath:null,groups:Ot,gridSize:i.gridSize,onContextMenu:Zt,onOpen:d,onOpenFile:p,onSelect:Lt,onToggle:Rt,openOnSingleClick:h,searching:et,selected:De,showCheckboxes:m,showTarget:nt})})]})]}),Ce&&e&&(0,I.jsx)(Os,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(Ce.entry.name,e,t),onClose:()=>we(null),tags:e.tags[Ce.entry.name]??[],x:Ce.x,y:Ce.y}),Ne&&(0,I.jsx)(oo,{canPaste:qe,directory:It,allowCompression:!0,menu:Ne,onAddToTray:te,onAddFavorite:T,onRemoveFavorite:E,favoritePaths:ne,onExtractArchive:D,onArchiveCreated:$t,onClose:Bt,onCompressTo:(e,t)=>Ie({paths:e,name:t}),onCopy:tn,onCreateFile:e=>void rn(e),onCreateFolder:e=>void rn(null,e),onDelete:ln,onOpen:d,onOpenFile:p,onPaste:nn,onRefresh:Qt,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&an(t)},shortcuts:g,target:hn}),en,un]}),vn]})}function Bc(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Vc=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Hc(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Jc(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Vc.compare(String(r),String(i));return t.sortDescending?-o:o})}var Uc=kn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&jn(t.entry.name)===e})),Wc=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Uc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Gc(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Kc(e){return Math.max(24,Math.min(e-56,160))}var qc={file:`File`,folder:`Folder`,text:`Text file`,code:`source file`,image:`image`,video:`Video`,audio:`Audio`,archive:`archive`,pdf:`PDF`,executable:`Application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Jc(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(qc[Vs(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Yc(e,t,n,r){switch(e){case`type`:return Jc(t,r);case`size`:return Zc(t,n.folderSizes);case`modified`:return y(t.modified);case`created`:return y(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Xc({name:e,ranges:t}){if(!t||t.length===0)return(0,I.jsx)(I.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,I.jsx)(Xl,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,I.jsx)(I.Fragment,{children:n})}function Zc(e,t){if(!e.isDirectory)return f(e.size);let n=t[e.name];return n===void 0?`—`:f(n)}function Qc({entry:e,size:t=18}){let n=R(),r=(0,O.useRef)(null),[i,a]=(0,O.useState)(!1);(0,O.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=q(i?e.fullPath:null,e.isDirectory,t>32),s=fn(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,I.jsxs)(al,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,I.jsx)(Hs,{name:e.iconSource.slice(5),size:t}):s?(0,I.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,I.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,I.jsx)(ni,{size:t}):(0,I.jsx)(Hs,{name:Vs(e.name),size:t}),e.isEncrypted&&(0,I.jsx)(ol,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,I.jsx)(da,{size:Math.max(8,Math.round(t*.52))})})]})}function $c({template:e,columns:t}){return(0,I.jsx)(I.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,I.jsxs)(Al,{style:{gridTemplateColumns:e},children:[(0,I.jsxs)(Nl,{children:[(0,I.jsx)(jl,{style:{flexShrink:0,height:18,width:18}}),(0,I.jsx)(jl,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,I.jsx)(jl,{style:{width:t%2==0?44:92}},t))]},r))})}function el({size:e}){return(0,I.jsx)(I.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,I.jsxs)(Wl,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,I.jsx)(Gl,{children:(0,I.jsx)(jl,{style:{height:e,width:e}})}),(0,I.jsx)(ql,{children:(0,I.jsx)(jl,{style:{height:9,width:`${t}%`}})})]},n))})}var tl=(0,O.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=R(),x=In(),S=!e.entry.isDirectory&&Mn(e.entry.name),ee=(0,O.useRef)(null),[C,w]=(0,O.useState)(!1);(0,O.useEffect)(()=>{if(!S||C)return;let e=ee.current;if(!e)return;if(!(`IntersectionObserver`in window)){w(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(w(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,C]);let te=gn(S&&C?e.entry.fullPath:null,192,e.entry.modified),[T,E]=(0,O.useState)(!1),ne=S&&te!==null&&!T,D=e.entry.fullPath,re=t=>{e.entry.isDirectory?v(D,Kt(t)):y?.(D,Kt(t))};return(0,I.jsxs)(Wl,{$current:t,$dim:n,$image:ne,$selected:s,onClick:e=>{h(e,D),l&&re(e)},onContextMenu:e=>_(e,D),onDoubleClick:e=>{l||re(e)},ref:e=>{ee.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":D,draggable:!u,children:[c&&(0,I.jsx)(ml,{$checked:s,onClick:e=>{e.stopPropagation(),g(D)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,I.jsx)(yi,{size:10})}),(0,I.jsx)(Gl,{children:ne?(0,I.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>E(!0),src:te}):(0,I.jsx)(Kl,{children:e.place&&x.useIcons?(0,I.jsx)(Ts,{place:e.place,size:r}):(0,I.jsx)(Qc,{entry:e.entry,size:r})})}),(0,I.jsxs)(ql,{children:[u?(0,I.jsx)(rl,{onCancel:()=>m?.(),onChange:e=>d?.(e),onCommit:()=>p?.(),value:u.value}):(0,I.jsx)(Jl,{$broken:e.entry.linkValid===!1,children:(0,I.jsx)(Xc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,I.jsxs)(Fl,{title:b(`This archive is encrypted and asks for a password when opened.`),children:[(0,I.jsx)(da,{size:9}),b(`Encrypted`)]}),e.cut&&(0,I.jsxs)(Il,{title:b(`This item is cut and will move when something is pasted.`),children:[(0,I.jsx)(ia,{size:9}),b(`Cut`)]}),(0,I.jsx)(Yl,{children:e.entry.isDirectory?i===void 0?Jc(e.entry,b):b(`{type} · {count} items`,{type:Jc(e.entry,b),count:i}):b(`{type} · {size}`,{type:Jc(e.entry,b),size:f(e.entry.size)})}),a&&e.entry.linkTarget&&(0,I.jsxs)(Rl,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,I.jsx)(fa,{size:9}),(0,I.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function nl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=R();return(0,I.jsx)(I.Fragment,{children:e.map(e=>(0,I.jsxs)(Tl,{children:[(0,I.jsxs)(El,{children:[y(e.label),(0,I.jsx)(Dl,{children:e.rows.length}),(0,I.jsx)(Ol,{})]}),(0,I.jsx)(kl,{$size:t,children:e.rows.map(e=>(0,I.jsx)(tl,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Kc(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function rl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,O.useRef)(null);return(0,O.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,I.jsx)(Ll,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var il=(0,O.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=R(),ee=In(),C=e.entry.fullPath;return(0,I.jsxs)(Ml,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,C),o&&_(e.entry,t)},onContextMenu:e=>g(e,C),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":C,draggable:!p,children:[(0,I.jsxs)(Nl,{children:[i&&(0,I.jsx)(pl,{$checked:r,onClick:e=>{e.stopPropagation(),h(C)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,I.jsx)(yi,{size:10})}),e.place&&ee.useIcons?(0,I.jsx)(al,{children:(0,I.jsx)(Ts,{place:e.place,size:s})}):(0,I.jsx)(Qc,{entry:e.entry,size:s}),p?(0,I.jsx)(rl,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,I.jsx)(Pl,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,I.jsx)(Xc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,I.jsxs)(Fl,{title:S(`This archive is encrypted and asks for a password when opened.`),children:[(0,I.jsx)(da,{size:9}),S(`Encrypted`)]}),e.cut&&(0,I.jsxs)(Il,{title:S(`This item is cut and will move when something is pasted.`),children:[(0,I.jsx)(ia,{size:9}),S(`Cut`)]}),a&&e.entry.linkTarget&&(0,I.jsxs)(Rl,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,I.jsx)(fa,{size:9}),(0,I.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,I.jsx)(zl,{children:t.id===`tags`?(0,I.jsx)(Bl,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,I.jsx)(Vl,{$color:t,$ink:Ds(t),children:e},e)}):(0,I.jsx)(Hl,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,I.jsx)(Ul,{children:S(`Broken`)}):Yc(t.id,e.entry,d,S)},t.id))]})}),al=_.span`
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
`,ol=_.span`
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
`,sl=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,cl=_.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,ll=_.span`
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
`,ul=_.button`
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
`,dl=_.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,fl=_.div`
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
`,pl=_.button`
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
`,ml=_(pl)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,hl=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,gl=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,_l=_.div`
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
`,vl=_.button`
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
`,yl=_.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,bl=_.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,xl=_.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,Sl=_.div`
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
`,Cl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,wl=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Tl=_.section`
    & + & {
        margin-top: 22px;
    }
`,El=_.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Dl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Ol=_.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,kl=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Al=_.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,jl=_.span`
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
`,Ml=_.div`
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
`,Nl=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Pl=_.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fl=_.span`
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
`,Il=_.span`
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
`,Ll=_.input`
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
`,Rl=_.span`
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
`,zl=_.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bl=_.button`
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
`,Vl=_.span`
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
`,Hl=_.span`
    color: var(--text-muted);
    font-size: 11px;
`,Ul=_.span`
    color: #fca5a5;
`,Wl=_.div`
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
`,Gl=_.div`
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
`,Kl=_.span`
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
`,ql=_.div`
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
`,Jl=_.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Xl=_.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Zl=_.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Ql=_.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,$l=_.p`
    font-size: 13px;
    color: var(--text-muted);
`,eu=_.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,tu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,nu=`/assets/bloom-BpfZWiaG.mp4`,ru=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,iu=`/assets/drift-BRBSQL2_.mp4`,au=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,ou=`/assets/ember-CtSz0YxR.mp4`,su=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],cu=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],lu=[{id:`builtin:video:drift`,name:`Drift`,url:iu,poster:ru},{id:`builtin:video:ember`,name:`Ember`,url:ou,poster:au},{id:`builtin:video:bloom`,name:`Bloom`,url:nu,poster:tu}],uu=cu.map(e=>({...e,variants:su.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:gu(_u(e.id,t))}))})),du=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>su.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:gu(vu(e.id,t))}))),fu=new Map([...uu.flatMap(e=>e.variants),...du].map(e=>[e.id,e])),pu=new Map(lu.map(e=>[e.id,e]));function mu(e){if(fu.has(e))return fu.get(e).url;if(pu.has(e))return pu.get(e).url;let t=e.split(`:`)[1];return t?fu.get(`builtin:${t}:indigo`)?.url??null:null}function hu(e){return pu.has(e)}function gu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function _u(e,t){return e===`dunes`?Tu(t):e===`tide`?Eu(t):wu(t)}function vu(e,t){return e===`skyline`?bu(t):e===`orbit`?xu(t):yu(t)}function yu({accent:e,secondary:t}){let n=Cu(t,`#05070f`,.86),r=Cu(e,`#0b1020`,.72),i=Cu(t,`#0a0f1d`,.66),a=Cu(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${Cu(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${Cu(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function bu({accent:e,secondary:t}){let n=Cu(t,`#07040d`,.84),r=Cu(e,`#100716`,.7),i=Cu(e,`#08050e`,.82),a=Cu(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${Cu(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function xu({accent:e,secondary:t}){let n=Cu(e,`#03050d`,.9),r=Cu(t,`#05030c`,.94),i=Cu(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${Cu(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${Cu(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${Cu(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${Cu(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function Su(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function Cu(e,t,n){let[r,i,a]=Su(e),[o,s,c]=Su(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function wu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Cu(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${Cu(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${Cu(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${Cu(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function Tu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${Cu(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${Cu(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${Cu(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${Cu(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${Cu(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${Cu(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${Cu(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function Eu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Cu(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${Cu(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${Cu(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${Cu(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var Du=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Ou(e){return Du.test(e)}function ku({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):T(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=_n(r),a=t?.startsWith(`builtin:`)?mu(t):n??i,o=n===null?r===null?t!==null&&hu(t):Ou(r):Ou(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,I.jsxs)(Au,{"aria-hidden":!0,children:[o?(0,I.jsx)(Mu,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,I.jsx)(ju,{src:a,style:{filter:s}}),(0,I.jsx)(Nu,{})]})}var Au=_.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,ju=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Mu=_.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Nu=_.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function Pu({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=R(),o=(0,O.useRef)(null),[s,c]=(0,O.useState)(()=>Math.max(1,Math.ceil(t)));return(0,O.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,ja.createPortal)((0,I.jsx)(Fu,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,I.jsxs)(Iu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(Lu,{children:a(`Protected folder`)}),(0,I.jsx)(Ru,{children:a(`These paths are protected by the safety settings:`)}),(0,I.jsx)(zu,{children:e.map(e=>(0,I.jsxs)(Bu,{children:[(0,I.jsx)(Vu,{children:e.path}),(0,I.jsx)(Hu,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,I.jsx)(Uu,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,I.jsx)(Wu,{children:a(`Nothing has been deleted.`)}),(0,I.jsx)(Gu,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,I.jsxs)(Ku,{children:[(0,I.jsx)(qu,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,I.jsx)(Ju,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var Fu=_.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ka}
`,Iu=_.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Va}
`,Lu=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ru=_.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,zu=_.div`
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
`,Bu=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Vu=_.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Hu=_.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Uu=_.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Wu=_.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Gu=_.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Ku=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,qu=_.button`
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
`,Ju=_.button`
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
`;function Yu(){let e=R(),[t,n]=(0,O.useState)(null),r=(0,O.useRef)(null),i=(0,O.useRef)(null);(0,O.useEffect)(()=>(va(e=>new Promise(t=>{r.current=t,n(e)})),()=>va(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,O.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,ja.createPortal)((0,I.jsx)(Xu,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,I.jsxs)(Zu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(Qu,{children:e(`Notice`)}),(0,I.jsx)($u,{children:t}),(0,I.jsx)(ed,{children:(0,I.jsx)(td,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var Xu=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ka}
`,Zu=_.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Va}
`,Qu=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,$u=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,ed=_.div`
    display: flex;
    justify-content: flex-end;
`,td=_.button`
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
`;function nd(){let e=R(),[t,n]=(0,O.useState)(null),[r,i]=(0,O.useState)(``),a=(0,O.useRef)(null),o=(0,O.useRef)(null);(0,O.useEffect)(()=>(ba((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>ba(null)),[]),(0,O.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,ja.createPortal)((0,I.jsx)(rd,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,I.jsxs)(id,{role:`dialog`,"aria-modal":`true`,children:[(0,I.jsx)(ad,{children:e(`Archive password`)}),(0,I.jsx)(od,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,I.jsx)(sd,{title:t.archive,children:t.archive}),(0,I.jsx)(cd,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,I.jsxs)(ld,{children:[(0,I.jsx)(ud,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,I.jsx)(dd,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var rd=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ka}
`,id=_.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Va}
`,ad=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,od=_.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,sd=_.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,cd=_.input`
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
`,ld=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,ud=_.button`
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
`,dd=_(ud)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function fd({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h,onSelectMatches:g}){let _=R(),v=(0,O.useRef)(null),y=c??_(`Search this folder`);(0,O.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,I.jsxs)(pd,{children:[(0,I.jsx)(ai,{}),(0,I.jsx)(md,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(hd,{children:i===0?`0/0`:`${a+1}/${i}`}),g&&i>0&&(0,I.jsx)(gd,{onClick:g,title:_(`Select all matches`),type:`button`,children:(0,I.jsx)(yi,{size:12})}),(0,I.jsx)(gd,{onClick:()=>b(u),title:_(`Previous match (Shift+Enter)`),type:`button`,children:(0,I.jsx)(di,{size:12})}),(0,I.jsx)(gd,{$down:!0,onClick:()=>b(d),title:_(`Next match (Enter)`),type:`button`,children:(0,I.jsx)(di,{size:12})})]}),(0,I.jsx)(_d,{$on:n,onClick:()=>b(f),title:_(`Match case`),type:`button`,children:`Aa`}),(0,I.jsx)(_d,{$on:r,onClick:()=>b(p),title:_(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,I.jsx)(vd,{$on:t===`hide`,onClick:()=>b(m),title:_(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:_(t===`hide`?`Hide`:`Dim`)}),(0,I.jsx)(gd,{onClick:h,title:_(`Close search (Esc)`),type:`button`,children:(0,I.jsx)(bi,{size:12})})]})}var pd=_.div`
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
    ${Wa}
`,md=_.input`
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
`,hd=_.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,gd=_.button`
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
`,_d=_.button`
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
`,vd=_(_d)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function yd(e,t,n,r,i=[]){(0,O.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=xn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function bd({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=R(),a=(0,O.useRef)(null),o=(0,O.useRef)(null),[s,c]=(0,O.useState)(null);return(0,O.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,O.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,O.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,ja.createPortal)((0,I.jsxs)(xd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(bs).map(n=>(0,I.jsx)(Sd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:bs[n](16)},n)),(0,I.jsx)(Sd,{onClick:async()=>{let e=await ha([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,I.jsx)(ci,{size:13})}),r&&(0,I.jsx)(Sd,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,I.jsx)(bi,{size:12})})]}),document.body)]})}var xd=_.div`
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
    ${Ha}
    transform-origin: top left;
`,Sd=_.button`
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
`,Cd={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function wd(){return F.available?await F.request(`share.list`):Cd}async function Td(e,t){return F.available?await F.request(`share.add`,{path:e,mode:t}):Cd}async function Ed(e){return F.available?await F.request(`share.remove`,{id:e}):Cd}async function Dd(e,t){return F.available?await F.request(`share.mode`,{id:e,mode:t}):Cd}async function Od(){return F.available?(await F.request(`share.peers.refresh`)).peers??[]:[]}async function kd(e,t){F.available&&await F.request(`share.pair.start`,{host:e,port:t})}async function Ad(e,t){F.available&&await F.request(`share.pair.respond`,{requestId:e,accept:t})}async function jd(e,t){F.available&&await F.request(`share.port`,{mode:t,port:e})}var Md=`share://`;function Nd(e){return e.toLowerCase().startsWith(Md)}function Pd(e){if(!Nd(e))return null;let[t,n,...r]=e.slice(8).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Fd(e,t,n=``){let r=`${Md}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Id(e){let t=Pd(e);if(!t||!F.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await F.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Fd(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Fd(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Ld(e){let t=Pd(e);if(!t||!F.available)throw Error(`This shared file is only available in the desktop app.`);let n=await F.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Rd(e){await Se(await Ld(e))}function zd({source:e,poster:t}){let n=T(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=_n(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??mu(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,I.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,I.jsx)(`img`,{alt:``,src:a}):null}function Bd({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=R(),s=(0,O.useRef)(null),c=(0,O.useRef)(null),l=(0,O.useRef)(!1),[u,d]=(0,O.useState)(null),[f,p]=(0,O.useState)(null),[m,h]=(0,O.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,O.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,O.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,O.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,I.jsx)(cf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,I.jsxs)(lf,{children:[(0,I.jsxs)(uf,{children:[(0,I.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,I.jsx)(_f,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,I.jsx)(bi,{size:12})})]}),(0,I.jsx)(df,{children:o(`Drag the frame to choose the visible part.`)}),(0,I.jsxs)(ff,{children:[t?(0,I.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,I.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,I.jsx)(pf,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:m},children:(0,I.jsx)(mf,{})})]}),(0,I.jsxs)(hf,{children:[(0,I.jsx)(gf,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,I.jsx)(gf,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var Vd=150,Hd=120,Ud=200,Wd=_.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Gd=_.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Kd=_.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${Ud}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Ud}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Ud*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Ud*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Ud*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Ud}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Ud*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Ud*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Ud*.18)}px),
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
`,qd=_.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Vd}px);
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
`,Jd=_.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,Yd=_.section`
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
`,Xd=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Zd=_.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Qd=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,$d=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,ef=_.input`
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
`,tf=_.button`
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
`,nf=_.div`
    position: relative;
    width: 132px;
    height: 72px;
`,rf=_.button`
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
`,af=_.button`
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
`,of=_.span`
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
`,sf=_.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,cf=_.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,lf=_.div`
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
`,uf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,df=_.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,ff=_.div`
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
`,pf=_.div`
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
`,mf=_.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,hf=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,gf=_.button`
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
`,_f=_.button`
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
`,vf=_.button`
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
`,yf=_.div`
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
`,bf=_.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,xf=_.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Sf=_.button`
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
`,Cf=_.div`
    position: relative;
    display: inline-flex;
`,wf=_.div`
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
`,Tf=_.button`
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
`,Ef=_.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Df=_.section`
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
`,Of=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,kf=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Af=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,jf=_.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,Mf=_.input`
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
`,Nf=_.button`
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
`,Pf=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Ff=_.div`
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
`,If=_.span`
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
`,Lf=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Rf=_.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,zf=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Bf=_.button`
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
`,Vf=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Hf=_.button`
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
`,Uf=_.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Wf=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Gf=_.div`
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
`,Kf=_.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,qf=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Jf=_.button`
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
`,Yf=_.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Xf=_.button`
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
`,Zf=_.button`
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
`,Qf=_.button`
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
`,$f=_.span`
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
`,ep=_.button`
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
`,tp=_.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,np=_.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,rp=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,ip=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,ap=_.input`
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
`,op=_.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,sp=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,cp=_.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lp=_.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,up=_.button`
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
`;function dp({places:e,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:u,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:_,onSearchMatches:y,readOnly:b=!1,onPick:x,onSelectionChange:S,onAddToTray:ee,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:ne,onExtractArchive:D,settingsVersion:re=0}){let k=R(),ie=In(),[A,ae]=(0,O.useState)(!1),[j,M]=(0,O.useState)(null),N=j?.overviewBanner??null,P=N?.startsWith(`builtin:`)??!1,oe=N?.startsWith(`url:`)?N.slice(4):T(N)?N:null,se=P||oe?``:N??``,ce=P?``:oe?oe.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:se.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,le=P?hu(N):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(ce),ue=_n(se.length>0?se:null,0,ce?`.${ce}`:``),L=N?mu(N)??oe??ue:null,[de,fe]=(0,O.useState)(``),[pe,me]=(0,O.useState)(null),[z,he]=(0,O.useState)(!1),[ge,_e]=(0,O.useState)(null),[ve,B]=(0,O.useState)(null),[ye,be]=(0,O.useState)(null),[V,Ce]=(0,O.useState)([]),[we,Te]=(0,O.useState)(null),[Ee,De]=(0,O.useState)(``),[Oe,ke]=(0,O.useState)(null),[je,Me]=(0,O.useState)(null),Ne=Dc(`overview`),[H,Pe]=(0,O.useState)(null),[Fe,Ie]=(0,O.useState)(null),Le=(0,O.useRef)(null),Re=(0,O.useRef)(null),ze=(0,O.useRef)(null),Be=(0,O.useRef)(null),Ve=(0,O.useRef)(null),He=Fe??j?.overviewBannerHeight??220,[Ge,Ke]=(0,O.useState)(0),[qe,Je]=(0,O.useState)(null),Xe=Math.min(1,Math.max(0,j?.overviewBannerOffset??.3)),Ze=He+Ud,Qe=qe&&Ge>0?qe.height*(Ge/qe.width):Ze,$e=Qe>0&&Qe<Ze+240?(Ze+240)/Qe:1,et=Math.max(1,Math.round(Ge*$e)),tt=Math.max(0,Qe*$e-Ze),nt=Math.min(Hd,tt/2,Math.max(20,He*.42)),rt=nt+Xe*Math.max(0,tt-nt*2),[at,ot]=(0,O.useState)(!1),st=(e,t=!1)=>x?(ke(e),Me({path:e,isDirectory:t}),S?.([e]),!0):!1,ct=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),ke(t),Me({path:t,isDirectory:n}),Pe({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,O.useEffect)(()=>(bc(`overview`,je?(e,t)=>Pe({x:e,y:t,target:je}):null),()=>bc(`overview`,null)),[je]);let lt=(e,t)=>c(e,t);(0,O.useEffect)(()=>{Ye().then(M,()=>M(null))},[re]),(0,O.useEffect)(()=>{if(F.available)return Od().then(Ce,()=>void 0),F.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Ce(t.data.peers)})},[]),(0,O.useEffect)(()=>{let e=ze.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,O.useEffect)(()=>{if(P&&!le){Je({width:1920,height:1080});return}Je(null);let e=Ve.current;e?.complete&&e.naturalWidth>0&&Je({width:e.naturalWidth,height:e.naturalHeight})},[N,P,le]),(0,O.useEffect)(()=>{let e=Be.current;if(!e)return;let t=()=>Ke(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[j?.overviewBanner]),(0,O.useEffect)(()=>{if(!pe)return;let e=()=>me(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||me(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[pe]),(0,O.useEffect)(()=>{if(!z)return;let e=()=>he(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[z]);let ut=Ss(j),U=ut.map(e=>e.id),dt=(0,O.useRef)(null),ft=e=>pe?.kind===`panel`&&pe.id===e,pt=e=>pe?.kind===`place`&&pe.id===e;(0,O.useEffect)(()=>{if(!F.available)return;let e=ut.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return F.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>F.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[ut.map(e=>e.path??e.id).join(`|`),a]),yd(dt,_??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let mt=async(e,t)=>{let n={...j?.placeIcons};t?n[e]=t:delete n[e],me(null),await bt({placeIcons:n}),l(await Ae())},ht=async(e,t)=>{let n={...j?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],B(null),await bt({placeNames:n}),l(await Ae())},gt=e=>{be(null),_e({drive:e,label:e.label||`Local Disk`})},_t=async()=>{if(!ge)return;let{drive:e,label:t}=ge;_e(null);let n=await xe(e.name,t.trim());n.ok?(be(null),h?.()):be(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},yt=j?.overviewColumns??1,bt=async e=>{if(!j)return;let t={...j,...e,overviewPanels:e.overviewPanels??U,overviewHidden:[]};M(await it(t)),p?.()},xt=async()=>{await bt({overviewPanels:[..._s],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),l(await Ae()),ae(!1)},St=async()=>{let e=await ha([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=j?.overviewBanners??[];await bt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},Ct=async()=>{let e=de.trim();if(!j||!T(e))return;let t=j.overviewBanners??[];fe(``),await bt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},wt=()=>void bt({overviewBanner:null}),Tt=e=>void bt({overviewBanners:(j?.overviewBanners??[]).filter(t=>t!==e),...j?.overviewBanner===e||j?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Et=e=>{Le.current={y:e.clientY,height:He},e.currentTarget.setPointerCapture(e.pointerId)},Dt=e=>{let t=Le.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Re.current=n,Ie(n)},Ot=e=>{Le.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Re.current!==null&&(bt({overviewBannerHeight:Re.current}),Re.current=null)},kt=(e,t)=>{let n=U.indexOf(e),r=n+t;if(n<0||r<0||r>=U.length)return;let i=[...U];[i[n],i[r]]=[i[r],i[n]],bt({overviewPanels:i})},At=(e,t)=>{let n={...j?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],bt({overviewTitles:n})},jt=(e,t)=>void bt({overviewViews:{...j?.overviewViews,[e]:t}}),Mt=e=>{let t=j?.overviewPinned??ut.filter(e=>e.pinned).map(e=>e.id);bt({overviewPinned:ut.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Nt=e=>{me(null);let t=t=>{let n={...t};return delete n[e],n},n=j?.overviewPinned??ut.filter(e=>e.pinned).map(e=>e.id);bt({overviewPanels:U.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(j?.overviewTitles),overviewViews:t(j?.overviewViews),overviewIcons:t(j?.overviewIcons),panelPlaces:t(j?.panelPlaces)})},Pt=(e,t)=>{let n={...j?.overviewIcons};t?n[e]=t:delete n[e],me(null),bt({overviewIcons:n})},Ft=async e=>{if(!j)return;if(e===`folder`){let e=await ma();if(!e)return;let t=`folder:${e}`;U.includes(t)||await bt({overviewPanels:[...U,t]});return}if(e===`quick`){let e=2;for(;U.includes(`quick:${e}`);)e+=1;await bt({overviewPanels:[...U,`quick:${e}`]});return}let t=e;for(let n=2;U.includes(t);n+=1)t=`${e}:${n}`;await bt({overviewPanels:[...U,t]})},It=async n=>{let r=await ma();if(!r)return;if(n.id===`quick`){await bt({quickAccess:[...new Set([...e.map(e=>e.path),r])]}),l(await Ae());return}let i=n.places??[];i.some(e=>t(e,r))||await bt({panelPlaces:{...j?.panelPlaces,[n.id]:[...i,r]}})},Lt=async(n,r)=>{me(null),n.id===`quick`?(await bt({quickAccess:e.filter(e=>!t(e.path,r)).map(e=>e.path)}),l(await Ae())):await bt({panelPlaces:{...j?.panelPlaces,[n.id]:(n.places??[]).filter(e=>!t(e,r))}})},Rt=async(n,r,i)=>{if(t(r,i))return;let a=n.id===`quick`?e.map(e=>e.path):n.places??[],o=a.findIndex(e=>t(e,r)),s=a.findIndex(e=>t(e,i));if(o<0||s<0)return;let c=[...a],[u]=c.splice(o,1);c.splice(s,0,u),n.id===`quick`?(await bt({quickAccess:c}),l(await Ae())):await bt({panelPlaces:{...j?.panelPlaces,[n.id]:c}})},zt=(e,t)=>({draggable:A,onDragOver:e=>{A&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{A&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{A&&(n.preventDefault(),Rt(e,n.dataTransfer.getData(`text/plain`),t))}}),Bt=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:j?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??j?.placeIcons?.[n]??null}}),Vt=e=>{if(r.length===0)return(0,I.jsx)(np,{children:k(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,I.jsx)(Pf,{children:t.map(e=>{let t=Ln(ie,e.path);return(0,I.jsxs)(Ff,{$plain:!1,$selected:Oe===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Kt(t)):Se(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,children:[(0,I.jsx)(If,{children:t&&ie.useIcons?(0,I.jsx)(Ts,{place:t,size:18}):(0,I.jsx)(Us,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,I.jsxs)(Lf,{children:[(0,I.jsx)(`strong`,{children:t?.name||e.name}),(0,I.jsx)(Rf,{children:e.path})]})]},e.path)})}):(0,I.jsx)(zf,{children:t.map(e=>{let t=Ln(ie,e.path);return(0,I.jsxs)(Bf,{$selected:Oe===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Kt(t)):Se(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ie.useIcons?(0,I.jsx)(Ts,{place:t,size:15}):(0,I.jsx)(Us,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,I.jsxs)(Vf,{children:[(0,I.jsx)(`strong`,{children:t?.name||e.name}),(0,I.jsx)(Rf,{children:e.path})]})]},e.path)})})},W=e=>{let n=j?.favorites??[],r=async e=>{await bt({favorites:n.filter(t=>t.path!==e)})},i=async(e,r)=>{e&&!n.some(n=>t(n.path,e))&&await bt({favorites:[...n,{path:e,name:v(e)||e,isDirectory:r}]})},a=(e,t,n)=>{A||st(t,n)||(n?c(t,Kt(e)):Se(t))},o=A?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(Hf,{$row:e.view===`list`,onClick:()=>void ha().then(e=>i(e,!1)),title:k(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,I.jsx)(ci,{size:15}):(0,I.jsx)(If,{children:(0,I.jsx)(ci,{size:15})}),e.view===`list`?(0,I.jsxs)(Vf,{children:[(0,I.jsx)(`strong`,{children:k(`Add file`)}),(0,I.jsx)(Rf,{children:k(`Pin any file here`)})]}):(0,I.jsxs)(Lf,{children:[(0,I.jsx)(`strong`,{children:k(`Add file`)}),(0,I.jsx)(Rf,{children:k(`Pin any file here`)})]})]}),(0,I.jsxs)(Hf,{$row:e.view===`list`,onClick:()=>void ma().then(e=>i(e,!0)),title:k(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,I.jsx)(ci,{size:15}):(0,I.jsx)(If,{children:(0,I.jsx)(ci,{size:15})}),e.view===`list`?(0,I.jsxs)(Vf,{children:[(0,I.jsx)(`strong`,{children:k(`Add folder`)}),(0,I.jsx)(Rf,{children:k(`Pin any folder here`)})]}):(0,I.jsxs)(Lf,{children:[(0,I.jsx)(`strong`,{children:k(`Add folder`)}),(0,I.jsx)(Rf,{children:k(`Pin any folder here`)})]})]})]}):null;return n.length===0&&!A?(0,I.jsx)(np,{children:k(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,I.jsxs)(Pf,{children:[n.map(e=>{let t=Ln(ie,e.path);return(0,I.jsxs)(Ff,{$plain:A,$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!A&&x?.(e.path),onContextMenu:t=>!A&&ct(t,e.path,e.isDirectory),title:e.path,children:[A&&(0,I.jsx)(Zf,{onClick:t=>{t.stopPropagation(),r(e.path)},title:k(`Remove from favorites`),type:`button`,children:(0,I.jsx)(bi,{size:11})}),(0,I.jsx)(If,{children:t&&ie.useIcons?(0,I.jsx)(Ts,{place:t,size:18}):(0,I.jsx)(Us,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,I.jsxs)(Lf,{children:[(0,I.jsx)(`strong`,{children:t?.name||e.name}),(0,I.jsx)(Rf,{children:e.path})]})]},e.path)}),o]}):(0,I.jsxs)(zf,{children:[n.map(e=>{let t=Ln(ie,e.path);return(0,I.jsxs)(Bf,{$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!A&&x?.(e.path),onContextMenu:t=>!A&&ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ie.useIcons?(0,I.jsx)(Ts,{place:t,size:15}):(0,I.jsx)(Us,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,I.jsxs)(Vf,{children:[(0,I.jsx)(`strong`,{children:t?.name||e.name}),(0,I.jsx)(Rf,{children:e.path})]}),A&&(0,I.jsx)(Zf,{$inline:!0,onClick:t=>{t.stopPropagation(),r(e.path)},title:k(`Remove from favorites`),type:`button`,children:(0,I.jsx)(bi,{size:11})})]},e.path)}),o]})},Ht=e=>{if(n.length===0)return(0,I.jsx)(np,{children:k(`No drives are available.`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=ge?.drive.name===t.name,i=r?(0,I.jsx)(fp,{maxLength:32,onCancel:()=>_e(null),onChange:e=>_e({...ge,label:e}),onCommit:()=>void _t(),value:ge?.label??``}):(0,I.jsx)(I.Fragment,{children:d(t)}),a=!r&&A&&(0,I.jsx)(Qf,{onClick:e=>{e.stopPropagation(),gt(t)},title:k(`Rename volume`),type:`button`,children:(0,I.jsx)(Li,{size:11})}),o=(0,I.jsx)(Rf,{children:k(`{free} free of {total}`,{free:f(t.freeSpace),total:f(t.totalSize)})});return e.view===`grid`?(0,I.jsxs)(Ff,{$plain:!1,$selected:Oe===t.name,onClick:e=>{!r&&st(t.name,!0)||r||c(t.name,Kt(e))},onDoubleClick:()=>!r&&x?.(t.name),onContextMenu:e=>!r&&ct(e,t.name,!0),title:t.name,children:[(0,I.jsx)(If,{children:(0,I.jsx)(ii,{size:18})}),(0,I.jsxs)(Lf,{children:[(0,I.jsxs)(`strong`,{children:[i,r&&te(t),a]}),o]})]},t.name):(0,I.jsxs)(Bf,{as:r?`div`:`button`,$selected:Oe===t.name,onClick:r?void 0:e=>{st(t.name,!0)||c(t.name,Kt(e))},onDoubleClick:r?void 0:()=>x?.(t.name),onContextMenu:r?void 0:e=>ct(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,I.jsx)(ii,{size:18}),(0,I.jsxs)(Vf,{children:[(0,I.jsxs)(`strong`,{children:[i,r&&te(t),a]}),o]}),(0,I.jsx)(Uf,{children:(0,I.jsx)(Wf,{$used:n,$tone:E(n)})})]},t.name)});return e.view===`grid`?(0,I.jsx)(Pf,{children:t}):(0,I.jsx)(zf,{children:t})},Wt=()=>{let e=async e=>{Te(e.id);try{await kd(e.host,e.port)}finally{Te(null)}},t=async()=>{let e=Ee.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Te(`manual`);try{await kd(n,r)}finally{Te(null)}}};return(0,I.jsxs)(rp,{children:[(0,I.jsxs)(ip,{children:[(0,I.jsx)(ap,{onChange:e=>De(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:k(`Address, e.g. 192.168.1.20:45701`),value:Ee}),(0,I.jsx)(up,{disabled:we!==null||!Ee.includes(`:`),onClick:()=>void t(),type:`button`,children:k(we===`manual`?`Pairing…`:`Pair by address`)})]}),V.length===0&&(0,I.jsx)(np,{children:k(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),V.map(t=>(0,I.jsxs)(op,{children:[(0,I.jsxs)(sp,{children:[(0,I.jsx)(Zi,{size:14}),(0,I.jsx)(cp,{title:t.host,children:t.name}),(0,I.jsx)(lp,{$online:t.online,children:t.paired?t.online?k(`Paired`):k(`Offline`):k(`Not paired`)}),!t.paired&&t.online&&(0,I.jsx)(up,{disabled:we===t.id,onClick:()=>void e(t),type:`button`,children:we===t.id?k(`Pairing…`):k(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,I.jsx)(Rf,{children:k(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,I.jsxs)(Bf,{onClick:n=>c(Fd(t.id,e.id),Kt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,I.jsx)(Zi,{size:14}),(0,I.jsxs)(Vf,{children:[(0,I.jsx)(`strong`,{children:e.name}),(0,I.jsx)(Rf,{children:t.name})]}),(0,I.jsx)($i,{size:12})]},e.id))]},t.id))]})},Gt=e=>{switch(e.kind){case`share`:return Wt();case`favorites`:return W(e);case`quick`:{let t=Bt(e);return!A&&t.length===0?(0,I.jsx)(np,{children:k(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,I.jsxs)(Pf,{children:[t.map(t=>(0,I.jsxs)(Ff,{$plain:A,$selected:Oe===t.path,...zt(e,t.path),onClick:e=>{!A&&!st(t.path,!0)&&c(t.path,Kt(e))},onDoubleClick:()=>!A&&x?.(t.path),onContextMenu:e=>!A&&ct(e,t.path,!0),title:t.path,children:[A&&(0,I.jsx)(Zf,{onClick:n=>{n.stopPropagation(),Lt(e,t.path)},title:k(`Remove from Quick access`),type:`button`,children:(0,I.jsx)(bi,{size:11})}),(0,I.jsxs)(Yf,{children:[A?(0,I.jsx)(Xf,{onClick:e=>{e.stopPropagation(),me(pt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:k(`Change icon`),type:`button`,children:(0,I.jsx)(If,{children:(0,I.jsx)(Ts,{place:t})})}):(0,I.jsx)(If,{children:(0,I.jsx)(Ts,{place:t})}),pt(t.path)&&(0,I.jsx)(bd,{onPick:e=>void mt(t.path,e),value:j?.placeIcons?.[t.path]??t.icon})]}),(0,I.jsxs)(Lf,{children:[ve?.path===t.path?(0,I.jsx)(`strong`,{children:(0,I.jsx)(fp,{onCancel:()=>B(null),onChange:e=>B({path:t.path,name:e}),onCommit:()=>void ht(t.path,ve?.name??``),value:ve?.name??``})}):(0,I.jsxs)(`strong`,{children:[t.name,A&&(0,I.jsx)(Qf,{onClick:e=>{e.stopPropagation(),me(null),B({path:t.path,name:t.name})},title:k(`Rename folder`),type:`button`,children:(0,I.jsx)(Li,{size:11})})]}),(0,I.jsx)(Rf,{children:t.path})]})]},t.path)),A&&(0,I.jsxs)(Hf,{onClick:()=>void It(e),title:k(`Pin a folder here`),type:`button`,children:[(0,I.jsx)(If,{children:(0,I.jsx)(ci,{size:15})}),(0,I.jsxs)(Lf,{children:[(0,I.jsx)(`strong`,{children:k(`Add folder`)}),(0,I.jsx)(Rf,{children:k(`Pin a directory here`)})]})]})]}):(0,I.jsxs)(zf,{children:[t.map(t=>(0,I.jsxs)(Bf,{$selected:Oe===t.path,...zt(e,t.path),onClick:e=>{!A&&!st(t.path,!0)&&c(t.path,Kt(e))},onDoubleClick:()=>!A&&x?.(t.path),onContextMenu:e=>!A&&ct(e,t.path,!0),title:t.path,type:`button`,children:[(0,I.jsxs)(Yf,{children:[A?(0,I.jsx)(Xf,{onClick:e=>{e.stopPropagation(),me(pt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:k(`Change icon`),type:`button`,children:(0,I.jsx)(Ts,{place:t,size:15})}):(0,I.jsx)(Ts,{place:t,size:15}),pt(t.path)&&(0,I.jsx)(bd,{onPick:e=>void mt(t.path,e),value:j?.placeIcons?.[t.path]??t.icon})]}),(0,I.jsxs)(Vf,{children:[ve?.path===t.path?(0,I.jsx)(`strong`,{children:(0,I.jsx)(fp,{onCancel:()=>B(null),onChange:e=>B({path:t.path,name:e}),onCommit:()=>void ht(t.path,ve?.name??``),value:ve?.name??``})}):(0,I.jsxs)(`strong`,{children:[t.name,A&&(0,I.jsx)(Qf,{onClick:e=>{e.stopPropagation(),me(null),B({path:t.path,name:t.name})},title:k(`Rename folder`),type:`button`,children:(0,I.jsx)(Li,{size:11})})]}),(0,I.jsx)(Rf,{children:t.path})]}),A&&(0,I.jsx)(Zf,{$inline:!0,onClick:n=>{n.stopPropagation(),Lt(e,t.path)},title:k(`Remove from Quick access`),type:`button`,children:(0,I.jsx)(bi,{size:11})})]},t.path)),A&&(0,I.jsxs)(Hf,{$row:!0,onClick:()=>void It(e),title:k(`Pin a folder here`),type:`button`,children:[(0,I.jsx)(ci,{size:15}),(0,I.jsxs)(Vf,{children:[(0,I.jsx)(`strong`,{children:k(`Add folder`)}),(0,I.jsx)(Rf,{children:k(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,I.jsx)(pp,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:x,onSelectionChange:S,version:s});case`recent`:return Vt(e);case`drives`:return Ht(e);default:return(0,I.jsx)(mp,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:x,onSelectionChange:S,openOnSingleClick:j?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:j?.showCheckboxes??!0,visibilityVersion:g})}};return(0,I.jsxs)(Wd,{$flush:!!j?.overviewBanner,ref:ze,children:[!b&&(0,I.jsxs)(yf,{$overlay:!!j?.overviewBanner,children:[(0,I.jsx)(bf,{role:`group`,title:k(`Columns`),children:[1,2,3,4,5].map(e=>(0,I.jsx)(xf,{$active:yt===e,onClick:()=>void bt({overviewColumns:e}),title:o(k,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),A&&(0,I.jsxs)(Cf,{children:[(0,I.jsxs)(Sf,{onClick:()=>he(e=>!e),onPointerDown:e=>e.stopPropagation(),title:k(`Add a panel`),type:`button`,children:[(0,I.jsx)(ci,{size:12}),k(`Add panel ▾`)]}),z&&(0,I.jsx)(wf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,I.jsx)(Tf,{onClick:()=>{he(!1),Ft(e)},type:`button`,children:k(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),A&&(0,I.jsxs)(Sf,{onClick:()=>void xt(),title:k(`Put every panel back the way the app ships it`),type:`button`,children:[(0,I.jsx)(si,{size:12}),k(`Restore default panels`)]}),Ne.available&&(0,I.jsx)(Nf,{onClick:e=>Ne.open(e.clientX,e.clientY),title:k(`Selection menu`),type:`button`,children:(0,I.jsx)(ua,{size:14})}),(0,I.jsxs)(Sf,{onClick:()=>{ae(e=>!e),he(!1),me(null),B(null),_e(null)},title:k(A?`Done`:`Edit`),type:`button`,children:[A?(0,I.jsx)(yi,{size:13}):(0,I.jsx)(Li,{size:13}),k(A?`Done`:`Edit`)]})]}),ye&&(0,I.jsx)(tp,{children:ye}),j?.overviewBanner&&(0,I.jsxs)(Gd,{ref:Be,style:{height:`${He}px`,"--banner-image-width":`${et}px`,"--banner-image-shift":`${rt}px`,"--banner-travel":`${nt}px`,"--banner-overlap":`0px`},children:[(0,I.jsx)(Kd,{children:le?(0,I.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Je({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:L??void 0}):(0,I.jsx)(`img`,{alt:``,onLoad:e=>{let t=P?1920:e.currentTarget.naturalWidth||1920,n=P?1080:e.currentTarget.naturalHeight||1080;Je({width:t,height:n})},ref:Ve,src:L??void 0})}),A&&(0,I.jsx)(qd,{onDoubleClick:()=>{Re.current=null,Ie(null),bt({overviewBannerHeight:220})},onPointerCancel:Ot,onPointerDown:Et,onPointerMove:Dt,onPointerUp:Ot,title:k(`Drag to resize; double-click to reset`)})]}),(0,I.jsxs)(Jd,{$offset:j?.overviewBanner?100:0,children:[A&&(0,I.jsxs)(Yd,{children:[(0,I.jsxs)(Xd,{children:[(0,I.jsx)(Zd,{children:k(`Banners`)}),j?.overviewBanner&&(0,I.jsxs)(Sf,{onClick:()=>ot(!0),title:k(`Adjust framing…`),type:`button`,children:[(0,I.jsx)(Li,{size:12}),k(`Adjust framing…`)]})]}),(0,I.jsxs)(Qd,{children:[(0,I.jsx)(nf,{children:(0,I.jsx)(rf,{$active:!j?.overviewBanner,onClick:wt,title:k(`No banner`),type:`button`,children:(0,I.jsxs)(sf,{children:[(0,I.jsx)(bi,{size:16}),(0,I.jsx)(`span`,{children:k(`No banner`)})]})})}),du.map(e=>(0,I.jsx)(nf,{children:(0,I.jsx)(rf,{$active:j?.overviewBanner===e.id,onClick:()=>void bt({overviewBanner:e.id}),title:`${k(e.concept)} · ${k(e.preset)}`,type:`button`,children:(0,I.jsx)(zd,{poster:e.url,source:e.id})})},e.id)),lu.map(e=>(0,I.jsx)(nf,{children:(0,I.jsxs)(rf,{$active:j?.overviewBanner===e.id,onClick:()=>void bt({overviewBanner:e.id}),title:k(e.name),type:`button`,children:[(0,I.jsx)(zd,{poster:e.poster,source:e.id}),(0,I.jsx)(of,{children:(0,I.jsx)(Ti,{size:11})})]})},e.id)),(j?.overviewBanners??[]).map(e=>(0,I.jsxs)(nf,{children:[(0,I.jsx)(rf,{$active:j?.overviewBanner===e||j?.overviewBanner===`url:${e}`,onClick:()=>void bt({overviewBanner:T(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,I.jsx)(zd,{source:e})}),(0,I.jsx)(af,{onClick:()=>Tt(e),title:k(`Remove`),type:`button`,children:(0,I.jsx)(bi,{size:10})})]},e)),(0,I.jsxs)(vf,{onClick:()=>void St(),title:k(`Add banner…`),type:`button`,children:[(0,I.jsx)(ci,{size:18}),(0,I.jsx)(`span`,{children:k(`Add banner…`)})]})]}),(0,I.jsxs)($d,{children:[(0,I.jsx)(ef,{onChange:e=>fe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ct()},placeholder:`https://…`,value:de}),(0,I.jsx)(tf,{disabled:!T(de),onClick:()=>void Ct(),type:`button`,children:k(`Add URL`)})]})]}),(0,I.jsx)(Ef,{ref:dt,$columns:yt,children:ut.map(e=>{let t=U.indexOf(e.id);return(0,I.jsxs)(Df,{children:[(0,I.jsxs)(Of,{children:[(0,I.jsxs)(kf,{children:[(0,I.jsxs)(Yf,{children:[A?(0,I.jsx)(Xf,{onClick:()=>me(ft(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:k(`Change icon`),type:`button`,children:(0,I.jsx)(ws,{panel:e,size:15})}):(0,I.jsx)(ws,{panel:e,size:15}),ft(e.id)&&(0,I.jsx)(bd,{onPick:t=>Pt(e.id,t),value:e.icon})]}),A?(0,I.jsx)(Mf,{defaultValue:e.title,onBlur:t=>At(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,I.jsx)(jf,{children:k(e.title)})]}),(0,I.jsxs)(Af,{children:[!A&&e.kind===`recent`&&(0,I.jsx)(Sf,{onClick:()=>void Ue().then(u),title:k(`Clear`),type:`button`,children:k(`Clear`)}),!A&&e.kind===`frequent`&&(0,I.jsx)(Sf,{onClick:()=>void We().then(()=>m?.()),title:k(`Clear the frequent list`),type:`button`,children:k(`Clear`)}),!A&&(e.kind===`home`||e.kind===`folder`)&&(0,I.jsx)(Sf,{onClick:()=>c(e.path??a),title:k(`Open folder`),type:`button`,children:k(`Open`)}),A&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Nf,{$active:e.pinned,onClick:()=>Mt(e.id),title:e.pinned?k(`Unpin from the sidebar`):k(`Pin to the sidebar`),type:`button`,children:(0,I.jsx)(pi,{size:12})}),(0,I.jsx)(Nf,{$active:e.view===`list`,onClick:()=>jt(e.id,`list`),title:k(`List`),type:`button`,children:(0,I.jsx)(mi,{size:13})}),(0,I.jsx)(Nf,{$active:e.view===`grid`,onClick:()=>jt(e.id,`grid`),title:k(`Grid`),type:`button`,children:(0,I.jsx)(hi,{size:13})}),(0,I.jsx)(Nf,{disabled:t===0,onClick:()=>kt(e.id,-1),title:k(`Move up`),type:`button`,children:(0,I.jsx)(oi,{size:12})}),(0,I.jsx)(Nf,{disabled:t===U.length-1,onClick:()=>kt(e.id,1),title:k(`Move down`),type:`button`,children:(0,I.jsx)(oi,{size:12})}),(0,I.jsx)(Nf,{onClick:()=>Nt(e.id),title:k(`Remove panel`),type:`button`,children:(0,I.jsx)(bi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Gt(e):(0,I.jsx)(Kf,{children:Gt(e)})]},e.id)})})]}),at&&L&&(0,I.jsx)(Bd,{height:He,offset:Xe,onCancel:()=>ot(!1),onSave:e=>{bt({overviewBannerOffset:e}),ot(!1)},source:L,video:le}),H&&(0,I.jsx)(oo,{directory:a,menu:{x:H.x,y:H.y,paths:[H.target.path]},onClose:()=>Pe(null),onCopy:(e,t)=>void vt(e,t),onAddToTray:ee,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:ne,onExtractArchive:D,onOpen:lt,onOpenFile:e=>x?x(e):void Se(e),shortcuts:Ut,target:H.target})]})}function fp({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=R();return(0,I.jsxs)($f,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,I.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,I.jsx)(ep,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,I.jsx)(bi,{size:11})}),(0,I.jsx)(ep,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,I.jsx)(yi,{size:12})})]})}function pp({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=R(),[c,l]=(0,O.useState)(null),[u,d]=(0,O.useState)(null),f=In(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,O.useEffect)(()=>{Ve().then(l,()=>l([]))},[a]),!c)return(0,I.jsx)(np,{children:s(`Reading…`)});if(c.length===0)return(0,I.jsx)(np,{children:s(`Folders you open often show up here.`)});let m=e=>o(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,I.jsx)(Pf,{children:c.map(e=>{let i=Ln(f,e.path);return(0,I.jsxs)(Ff,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Kt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,I.jsx)(If,{children:i&&f.useIcons?(0,I.jsx)(Ts,{place:i,size:18}):(0,I.jsx)(Us,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,I.jsxs)(Lf,{children:[(0,I.jsx)(`strong`,{children:i?.name||e.name}),(0,I.jsx)(Rf,{children:m(e)})]})]},e.path)})}):(0,I.jsx)(zf,{children:c.map(e=>{let i=Ln(f,e.path);return(0,I.jsxs)(Bf,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Kt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,I.jsx)(Ts,{place:i,size:15}):(0,I.jsx)(Us,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,I.jsxs)(Vf,{children:[(0,I.jsx)(`strong`,{children:i?.name||e.name}),(0,I.jsx)(Rf,{children:m(e)})]})]},e.path)})})}function mp({path:e,mode:n,onOpen:r,onContextMenu:i,onPick:a,onSelectionChange:o,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:l,visibilityVersion:u}){let d=R(),[f,p]=(0,O.useState)(null),[m,h]=(0,O.useState)(null),g=In();return(0,O.useEffect)(()=>{e&&(p(null),V(e).then(p,()=>p(null)))},[e,u]),(0,O.useEffect)(()=>{if(F.available)return F.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&V(e,!1).then(p,()=>void 0)})},[e]),f?n===`list`?(0,I.jsx)(Gf,{children:(0,I.jsx)(zc,{error:null,listing:f,loading:!1,onOpen:a??r,onOpenFile:a??(e=>void Se(e)),onRefresh:()=>void V(e,!1).then(p,()=>void 0),onRename:(e,n)=>p(r=>r&&{...r,entries:r.entries.map(r=>t(r.fullPath,e)?{...r,name:v(n),fullPath:n}:r)}),onSelectionChange:o,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:l,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...ye,columns:be.columns??[]}})}):(0,I.jsx)(Kf,{children:f.entries.length===0?(0,I.jsx)(np,{children:d(`This folder is empty.`)}):(0,I.jsx)(qf,{children:f.entries.map(e=>{let t=Ln(g,e.fullPath);return(0,I.jsxs)(Jf,{$selected:m===e.fullPath,onClick:t=>{a?(h(e.fullPath),o?.([e.fullPath])):e.isDirectory?r(e.fullPath,Kt(t)):Se(e.fullPath)},onDoubleClick:()=>a?.(e.fullPath),onContextMenu:t=>i?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&g.useIcons?(0,I.jsx)(Ts,{place:t,size:16}):(0,I.jsx)(Us,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,I.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,I.jsx)(np,{children:d(`Reading…`)})}var hp=`yafm://`,gp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function _p(e){return e.toLowerCase().startsWith(hp)}function vp(e){return`${hp}${e===`home`?`overview`:e}`}function yp(e){return _p(e)?gp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function bp(e){let t=e.trim();if(t.length===0)return null;if(!_p(t))return t;let n=gp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?vp(n):null}function xp({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=R(),s=In(),[c,l]=(0,O.useState)(!1),[u,d]=(0,O.useState)(``),[f,p]=(0,O.useState)([]),[m,h]=(0,O.useState)(0),[g,_]=(0,O.useState)(null),[v,y]=(0,O.useState)(null),b=(0,O.useRef)(null),x=(0,O.useRef)(null),S=(0,O.useRef)(0);(0,O.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,O.useEffect)(()=>{r&&r!==S.current&&(S.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,O.useEffect)(()=>{c&&b.current?.select()},[c]),(0,O.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let ee=()=>{d(e.replace(/\\/g,`/`)),l(!0)},C=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,O.useEffect)(()=>{if(!c){p([]);return}let e=wp(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{V(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let w=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,O.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=x.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,I.jsxs)(Ap,{onPointerDown:e=>e.stopPropagation(),ref:x,children:[(0,I.jsxs)(Pp,{children:[(0,I.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?w(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):C(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:b,spellCheck:!1,value:u}),(0,I.jsx)(Fp,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,I.jsx)(bi,{size:12})}),(0,I.jsx)(Fp,{$apply:!0,onClick:C,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,I.jsx)(yi,{size:14})})]}),f.length>0&&g&&(0,ja.createPortal)((0,I.jsx)(jp,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,I.jsxs)(Mp,{$active:t===m,onClick:t=>w(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,I.jsx)(Us,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,I.jsx)(Np,{children:e.name})]},e.path))}),document.body)]});let te=t?[{label:t,path:e,icon:n}]:Cp(e,s.places);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Tp,{onClick:ee,title:o(`Click to type a path`),children:te.map((t,n)=>(0,I.jsxs)(Ep,{$last:n===te.length-1,children:[n>0&&(0,I.jsx)(Op,{children:(0,I.jsx)(di,{size:9})}),(0,I.jsxs)(kp,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,I.jsx)(Dp,{children:(0,I.jsx)(Ts,{place:t.place,size:13})}):t.icon&&(0,I.jsx)(Dp,{children:t.icon}),t.label]})]},t.path))}),v&&(0,I.jsx)(Ja,{items:[{label:o(`Open`),icon:(0,I.jsx)(ui,{size:14}),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),icon:(0,I.jsx)(ci,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`Copy as path`),icon:(0,I.jsx)(ra,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},..._p(v.path)?[{label:o(`Open with…`),icon:(0,I.jsx)(ki,{size:14}),onSelect:()=>void Mt(v.path)},{label:o(`Properties`),icon:(0,I.jsx)(fi,{size:14}),onSelect:()=>void jt([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function Sp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Cp(e,n){let r=Sp(e),i=-1,a=null;for(let e of Object.values(n)){if(e.name.trim().length===0)continue;let n=r.findIndex(n=>t(n.path,e.path));n>i&&(i=n,a=e)}return a&&i>=0&&r.splice(0,i+1,{label:a.name,path:r[i].path,place:a}),r}function wp(e){if(_p(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Tp=_.div`
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
`,Ep=_.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Dp=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Op=_.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,kp=_.button`
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
`,Ap=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,jp=_.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Ma}
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
`,Mp=_.button`
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
`,Np=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Pp=_.div`
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
`,Fp=_.button`
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
`,Ip=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,I.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,I.jsx)(`path`,{d:`M4 4v6h6`})]});function Lp({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:a=!1,videoAutoplay:s=!1,platform:c}){let l=R(),u=Tc(`recycle`),d=c===`windows`,[p,m]=(0,O.useState)([]),[h,g]=(0,O.useState)([]),[_,v]=(0,O.useState)(!1),[b,x]=(0,O.useState)(null),[S,ee]=(0,O.useState)(!0),[C,w]=(0,O.useState)(!1),[te,T]=(0,O.useState)(null),[E,ne]=(0,O.useState)(!1),[D,re]=(0,O.useState)(()=>new Set),[k,ie]=(0,O.useState)(null),[A,ae]=(0,O.useState)(()=>{let e=Vn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[j,M]=(0,O.useState)(null),[N,P]=(0,O.useState)(null),[oe,se]=(0,O.useState)(()=>{let e=zn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),F=(0,O.useRef)(null),ce=e=>{se(e),Bn(`yafm.recycle.preview.width`,e)},le=(0,O.useCallback)(async()=>{ee(!0),T(null);try{m(await Me(E))}catch(e){T(e instanceof Error?e.message:String(e))}finally{ee(!1)}},[E]),ue=(0,O.useCallback)(async()=>{try{m(await Me(E))}catch{}},[E]);(0,O.useEffect)(()=>{le()},[le]),(0,O.useEffect)(()=>{let e=window.setInterval(()=>void ue(),1e4);return()=>window.clearInterval(e)},[ue]),(0,O.useEffect)(()=>{E||(g([]),v(!1),x(null))},[E]),(0,O.useEffect)(()=>{re(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let L=(0,O.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Rp(e,t,A.column);return A.descending?-n:n})},[p,h,A]),de=(0,O.useMemo)(()=>!t?.open||t.query.trim().length===0?L:L.filter(e=>On(e.name,t)||On(e.originalPath,t)),[L,t?.open,t?.query,t?.matchCase,t?.regex]),fe=(0,O.useRef)(null);yd(fe,t??null,`[data-search-block]`,n??(()=>void 0),[L]),(0,O.useEffect)(()=>{re(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let pe=(0,O.useMemo)(()=>L.filter(e=>D.has(e.id)),[L,D]),me=pe.filter(e=>e.removable&&!e.isOrphan),z=pe.filter(e=>e.removable),he=(e,t)=>{let n=t.ctrlKey||t.metaKey;re(r=>{if(t.shiftKey&&k){let t=L.findIndex(e=>e.id===k),i=L.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(L[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),ie(e.id)},ge=(0,O.useCallback)(()=>re(new Set(de.map(e=>e.id))),[de]),_e=de.length>0&&de.every(e=>D.has(e.id)),ve=(0,O.useCallback)(async()=>{let e=me.map(e=>e.id);if(e.length!==0){w(!0);try{let t=await Pe(e);t.ok||await ya(o(l,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),re(new Set),await le()}finally{w(!1)}}},[le,me,l]),B=(0,O.useCallback)(async()=>{let e=z.map(e=>e.id);if(P(null),e.length!==0){w(!0);try{let t=await Fe(e);!t.ok&&!t.cancelled&&await ya(o(l,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),re(new Set),await le()}finally{w(!1)}}},[z,le,l]),ye=async()=>{P(null),w(!0);try{await H(E),re(new Set),await le()}finally{w(!1)}},be=async()=>{w(!0),x(null);try{let e=await Le();if(e.cancelled){x(`Elevation was declined — nothing was read.`);return}if(e.failed){x(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),v(!0)}finally{w(!1)}},xe=async()=>{w(!0),P(null);try{await Re(),g([]),v(!1),x(null),await le()}finally{w(!1)}},Se=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},V=e=>{navigator.clipboard.writeText(e.originalPath)},Ce=(e,t)=>{e.preventDefault(),t&&!D.has(t.id)&&re(new Set([t.id])),M({x:e.clientX,y:e.clientY})};(0,O.useEffect)(()=>(bc(`recycle`,D.size>0?(e,t)=>M({x:e,y:t}):null),()=>bc(`recycle`,null)),[D]),(0,O.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),ge()):e.key===`Delete`?(e.preventDefault(),z.length>0&&P(`delete`)):e.key===`Enter`&&me.length>0?(e.preventDefault(),ve()):e.key===`Escape`&&(re(new Set),M(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[z.length,me.length,ve,ge]);let we=[{label:l(`Restore`),icon:(0,I.jsx)(Ip,{width:14,height:14}),disabled:me.length===0,onSelect:()=>void ve()},{label:l(`Delete permanently`),icon:(0,I.jsx)(vi,{size:14}),danger:!0,disabled:z.length===0,onSelect:()=>P(`delete`)},{label:l(`Properties`),icon:(0,I.jsx)(fi,{size:14}),disabled:pe.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=pe;e&&Ie(e.id)}},{label:l(`Open original location`),icon:(0,I.jsx)(ni,{size:14}),disabled:pe.length!==1,onSelect:()=>{let[e]=pe;e&&Se(e)}},{label:l(`Copy original path`),icon:(0,I.jsx)(ra,{size:14}),disabled:pe.length!==1,onSelect:()=>{let[e]=pe;e&&V(e)}},{label:l(`Select all`),separatorBefore:!0,onSelect:ge},{label:l(`Refresh`),icon:(0,I.jsx)(si,{size:14}),onSelect:()=>void le()}],Te=pe.length>0?pe[0]:null,Ee=Te?{name:Te.name,path:Te.contentPath||Te.originalPath,isDirectory:Te.isDirectory,size:Te.size,modified:Te.deleted,fields:[{label:l(`Type`),value:l(Bp(Te))},{label:l(`Original location`),value:Te.originalPath},{label:l(`Date deleted`),value:y(Te.deleted)},{label:l(`Size`),value:Te.isDirectory?`—`:f(Te.size)},...Te.owner?[{label:l(`Owner`),value:Te.owner}]:[],{label:l(`Status`),value:Te.isOrphan?l(`Metadata only`):Te.removable?l(`Restorable`):l(`Other profile`)}]}:null;return(0,I.jsxs)(Hp,{ref:F,onContextMenu:e=>Ce(e),children:[(0,I.jsxs)(Up,{children:[(0,I.jsxs)(Wp,{children:[(0,I.jsx)(vi,{size:16}),(0,I.jsx)(`span`,{children:l(`Recycle Bin`)}),(0,I.jsxs)(Gp,{children:[S?`…`:o(l,L.length,`1 item`,`{count} items`),D.size>0&&` · ${l(`{count} selected`,{count:D.size})}`]})]}),(0,I.jsxs)(Kp,{children:[(0,I.jsx)(Jp,{$on:E,onClick:()=>ne(e=>!e),title:l(`Show metadata records whose content is already gone`),type:`button`,children:l(`Orphans`)}),E&&d&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(qp,{disabled:C||_,onClick:()=>void be(),title:l(_?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:l(C?`Working…`:_?`Admin view loaded`:`Show all (admin)…`)}),_&&h.length>0&&(0,I.jsx)(qp,{disabled:C,onClick:()=>P(`purge`),type:`button`,children:l(`Delete every orphan`)})]}),(0,I.jsx)(qp,{disabled:C||me.length===0,onClick:()=>void ve(),type:`button`,children:l(`Restore`)}),(0,I.jsx)(qp,{$danger:!0,disabled:C||z.length===0,onClick:()=>P(`delete`),type:`button`,children:l(`Delete`)}),(0,I.jsx)(qp,{disabled:C||L.length===0,onClick:()=>P(`empty`),type:`button`,children:l(`Empty`)}),(0,I.jsx)(Yp,{onClick:()=>void le(),title:l(`Refresh`),type:`button`,children:(0,I.jsx)(si,{size:14})}),u.available&&(0,I.jsx)(Yp,{onClick:e=>u.open(e.clientX,e.clientY),title:l(`Selection menu`),type:`button`,children:(0,I.jsx)(ua,{size:14})})]})]}),b&&(0,I.jsx)(gm,{children:b}),te&&(0,I.jsx)(_m,{children:te}),!te&&!S&&(t?.open&&t.query.trim().length>0?de.length===0:L.length===0)&&(0,I.jsx)(_m,{children:t?.open&&t.query.trim().length>0?l(`No matching items.`):l(`The recycle bin is empty.`)}),L.length>0&&(0,I.jsxs)(hm,{children:[(0,I.jsxs)(Xp,{ref:fe,children:[(0,I.jsxs)(Qp,{children:[(0,I.jsx)(im,{$checked:_e,$partial:!_e&&D.size>0,onClick:()=>_e?re(new Set):ge(),title:l(_e?`Select none`:`Select all`),type:`button`,children:_e?(0,I.jsx)(yi,{size:9}):D.size>0&&(0,I.jsx)(am,{})}),(0,I.jsxs)($p,{onClick:()=>De(`name`),type:`button`,children:[l(`Name`),zp(A,`name`)]}),(0,I.jsxs)($p,{onClick:()=>De(`original`),type:`button`,children:[l(`Original location`),zp(A,`original`)]}),(0,I.jsxs)($p,{onClick:()=>De(`deleted`),type:`button`,children:[l(`Date deleted`),zp(A,`deleted`)]}),(0,I.jsxs)($p,{onClick:()=>De(`size`),type:`button`,children:[l(`Size`),zp(A,`size`)]}),(0,I.jsxs)($p,{onClick:()=>De(`type`),type:`button`,children:[l(`Type`),zp(A,`type`)]}),(0,I.jsx)(`span`,{})]}),(0,I.jsx)(em,{onClick:e=>{e.target===e.currentTarget&&re(new Set)},children:L.map(e=>(0,I.jsxs)(tm,{$checked:D.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>he(e,t),onContextMenu:t=>Ce(t,e),onDoubleClick:()=>{re(new Set([e.id])),ie(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,I.jsx)(rm,{$checked:D.has(e.id),children:D.has(e.id)&&(0,I.jsx)(yi,{size:9})}),(0,I.jsxs)(om,{children:[(0,I.jsx)(Vp,{entry:e}),(0,I.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,I.jsx)(mm,{children:l(`Metadata only`)}),e.owner&&(0,I.jsx)(mm,{$other:!0,children:l(`Other profile`)})]}),(0,I.jsx)(cm,{children:e.originalPath}),(0,I.jsx)(lm,{children:y(e.deleted)}),(0,I.jsx)(um,{children:e.isDirectory?`—`:f(e.size)}),(0,I.jsx)(dm,{children:l(Bp(e))}),(0,I.jsxs)(fm,{children:[e.removable&&!e.isOrphan&&(0,I.jsx)(pm,{onClick:t=>{t.stopPropagation(),Pe([e.id]).then(le)},title:l(`Restore to its original folder`),type:`button`,children:(0,I.jsx)(Ip,{})}),e.removable&&(0,I.jsx)(pm,{$danger:!0,onClick:t=>{t.stopPropagation(),re(new Set([e.id])),P(`delete`)},title:e.isOrphan?l(`Remove the leftover record`):l(`Delete permanently`),type:`button`,children:(0,I.jsx)(vi,{size:13})})]})]},e.id))})]}),r&&(0,I.jsx)(qo,{emptyNote:l(`Nothing selected.`),info:Ee,onWidth:ce,selectionNote:pe.length>1?o(l,pe.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:a,videoAutoplay:s,width:oe})]}),j&&(0,I.jsx)(Ja,{items:we,onClose:()=>M(null),x:j.x,y:j.y}),(0,I.jsx)(Io,{confirmLabel:l(N===`empty`?`Empty the bin`:N===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:N===`empty`?o(l,L.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):N===`purge`?l(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):o(l,z.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>P(null),onConfirm:()=>{N===`empty`?ye():N===`purge`?xe():B()},open:N!==null,title:l(N===`empty`?`Empty the recycle bin`:N===`purge`?`Delete every orphan`:`Delete permanently`)})]});function De(e){ae(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Hn(`yafm.recycle.sort`,n),n})}}function Rp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return Bp(e).localeCompare(Bp(t),void 0,{sensitivity:`base`})}}function zp(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function Bp(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function Vp({entry:e}){let t=q(e.originalPath,e.isDirectory);return(0,I.jsx)(sm,{children:t?(0,I.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,I.jsx)(ni,{}):(0,I.jsx)(ri,{})})}var Hp=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Up=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Wp=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Gp=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Kp=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,qp=_.button`
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
`,Jp=_(qp)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Yp=_.button`
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
`,Xp=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Zp=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Qp=_.div`
    display: grid;
    grid-template-columns: ${Zp};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,$p=_.button`
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
`,em=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,tm=_.div`
    display: grid;
    grid-template-columns: ${Zp};
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
`,nm=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rm=_.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,im=_.button`
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
`,am=_.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,om=_(nm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,sm=_.span`
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
`,cm=_(nm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,lm=_(nm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,um=_(nm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,dm=_(nm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,fm=_.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,pm=_.button`
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
`,mm=_.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,hm=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,gm=_.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,_m=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function vm(){return F.available?(await F.request(`app.tags`)).tags:[]}async function ym(e){return!F.available||!e?!1:(await F.request(`app.tags.delete`,{name:e})).ok}async function bm(e,t){return!F.available||!e?[]:(await F.request(`app.tags.create`,{name:e,color:t})).tags}async function xm(e,t){return!F.available||!e?!1:(await F.request(`app.tags.color`,{name:e,color:t})).ok}async function Sm(e,t){return!F.available||!e||!t?!1:(await F.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function Cm(){let e=R();return(0,I.jsx)(wm,{title:e(`Always applies to every folder`),children:e(`Global`)})}var wm=_.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Tm=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function Em(e){return`"${e.replaceAll(`"`,``)}"`}function Dm(e){let t=document.documentElement.style;for(let n of Tm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Em(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Om(){return F.available?(await F.request(`app.fonts`)).fonts??[]:[]}function km({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=R(),[s,c]=(0,O.useState)(null),[l,u]=(0,O.useState)(``),d=(0,O.useRef)(null),f=(0,O.useRef)(null),p=(0,O.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,O.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(Am,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,I.jsx)(jm,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,I.jsx)(Mm,{children:`▾`})]}),s&&(0,ja.createPortal)((0,I.jsxs)(Nm,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,I.jsxs)(Pm,{children:[(0,I.jsx)(ai,{size:12}),(0,I.jsx)(Fm,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,I.jsxs)(Im,{children:[(0,I.jsxs)(Lm,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,I.jsxs)(zm,{children:[n,` `,(0,I.jsx)(Vm,{children:o(`(default)`)})]}),!e&&(0,I.jsx)(yi,{size:11})]}),p.map(t=>(0,I.jsxs)(Lm,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,I.jsxs)(Rm,{children:[(0,I.jsx)(zm,{children:t}),(0,I.jsx)(Bm,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,I.jsx)(yi,{size:11})]},t)),p.length===0&&(0,I.jsx)(Hm,{children:o(`No matching font.`)})]})]}),document.body)]})}var Am=_.button`
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
`,jm=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Mm=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,Nm=_.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${Ha}
`,Pm=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,Fm=_.input`
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
`,Im=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,Lm=_.button`
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
`,Rm=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,zm=_.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bm=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vm=_.span`
    color: var(--text-muted);
    font-size: 10px;
`,Hm=_.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Um=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],Wm=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Gm=`en`,Km=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],qm=new Date(2026,10,5,16,8).getTime(),Jm=`system`,Ym={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},Xm=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],Zm=`yafm.colors.recent`;function Qm(){let e=Vn(Zm);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function $m({appInfo:e,focusSection:t,onSettingsChanged:n,onOpenFolder:r,find:i,onSearchMatches:a}){let s=R(),[c,l]=(0,O.useState)([]),[u,d]=(0,O.useState)(null),[p,g]=(0,O.useState)(null),[_,y]=(0,O.useState)(null),[x,S]=(0,O.useState)(``),[ee,C]=(0,O.useState)(`file`),[te,ne]=(0,O.useState)(!1),[D,re]=(0,O.useState)(!1),[k,ie]=(0,O.useState)(null),[A,ae]=(0,O.useState)(!1),[j,M]=(0,O.useState)(!1),[N,P]=(0,O.useState)(null),[oe,se]=(0,O.useState)(null),[F,ce]=(0,O.useState)(null),[ue,L]=(0,O.useState)(!1),[de,fe]=(0,O.useState)(null),[pe,me]=(0,O.useState)(!1),[z,he]=(0,O.useState)(null),[ge,_e]=(0,O.useState)(null),[ve,B]=(0,O.useState)(!1),[ye,xe]=(0,O.useState)([]),[Se,V]=(0,O.useState)(null),[Ce,we]=(0,O.useState)(!1),[Te,Ee]=(0,O.useState)(null),[De,Oe]=(0,O.useState)(``),[ke,Ae]=(0,O.useState)(Es),[je,Me]=(0,O.useState)(null),[Ne,H]=(0,O.useState)(null),[Pe,Fe]=(0,O.useState)(``),[Ie,Le]=(0,O.useState)(``),[Re,ze]=(0,O.useState)(null),[Be,Ve]=(0,O.useState)(Qm),[He,Ue]=(0,O.useState)({}),[We,Ke]=(0,O.useState)(null),[qe,Je]=(0,O.useState)(null),[Ze,Qe]=(0,O.useState)(!1),[at,st]=(0,O.useState)(!1),[ct,ht]=(0,O.useState)(null),[vt,yt]=(0,O.useState)(Xm[0].id),[bt,xt]=(0,O.useState)([]),[St,Ct]=(0,O.useState)(null),[wt,Tt]=(0,O.useState)(null),[Et,Dt]=(0,O.useState)(null),[Ot,kt]=(0,O.useState)(!1),[At,jt]=(0,O.useState)(``),Mt=(0,O.useRef)(null),Nt=(0,O.useRef)({}),Pt=p?.defaultView??be,Ft=p?.themePresets??[],It=e?.platform===`windows`,Lt=It?oe?oe.registered&&oe.pathMatches:!1:p?.archiveHandler??!1,Rt=oe?.registered??p?.archiveHandler??!1,zt=It?F?F.registered&&F.pathMatches:!1:p?.defaultFileManager??!1;yd(Mt,i??null,`section`,a??(()=>void 0),[p]),(0,O.useEffect)(()=>{let e=Mt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){yt(Xm[Xm.length-1].id);return}let n=t+110,r=Xm[0].id;for(let{id:e}of Xm){let t=Nt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}yt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Bt=e=>t=>{Nt.current[e]=t},Vt=e=>{Nt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),yt(e)};(0,O.useEffect)(()=>{t&&Vt(t)},[t]),(0,O.useEffect)(()=>{le().then(e=>l(e.available),()=>l([]))},[]),(0,O.useEffect)(()=>{Om().then(xt,()=>xt([]))},[]),(0,O.useEffect)(()=>{gt().then(Tt,()=>Tt(null))},[]),(0,O.useEffect)(()=>{lt().then(Je,()=>void 0)},[]),(0,O.useEffect)(()=>{Ge().then(d,()=>d(null)),Ye().then(g,()=>g(null)),pt().then(ae,()=>ae(!1)),tt().then(se,()=>se(null)),$e().then(ce,()=>ce(null)),vm().then(xe,()=>xe([]))},[]),(0,O.useEffect)(()=>{let e=()=>void dt().then(ie,()=>ie(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let W=async e=>{if(!p)return;let t={...p,...e};Object.keys(e).every(e=>t[e]===p[e])||(g(t),cn(),g(await it(t)),n())},Ht=async e=>{let t=await ha(e);if(!t)return;let n=p?.backgroundCustom??[];await W({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Wt=async()=>{let e=At.trim();if(!p||!T(e))return;let t=p.backgroundCustom??[];jt(``),await W({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Gt=e=>{if(!p)return;let t=p.backgroundSource;W({backgroundCustom:p.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},Kt=async()=>{if(!p)return;let t=await ma();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.protectedPaths.includes(r)||await W({protectedPaths:[...p.protectedPaths,r]})},Yt=()=>{let e=Pe.trim();p&&e&&!p.protectedPaths.includes(e)&&(Fe(``),W({protectedPaths:[...p.protectedPaths,e]}))},Xt=()=>{if(!p||!je)return;let e=je.value.trim(),t=je.from;Me(null),e.length!==0&&e!==t&&W({protectedPaths:p.protectedPaths.map(n=>n===t?e:n)})},Zt=e=>{p&&W({protectedPaths:p.protectedPaths.filter(t=>t!==e)})},Qt=async()=>{let e=await Xe();e.length>0&&await W({protectedPaths:e})},$t=()=>{if(!p||!Ne)return;let e=Ne.value.trim(),t=Ne.from;H(null),e&&e!==t&&W({directoryIndexBlacklist:p.directoryIndexBlacklist.map(n=>n===t?e:n)})},en=()=>{let e=Ie.trim();p&&e&&!p.directoryIndexBlacklist.includes(e)&&(Le(``),W({directoryIndexBlacklist:[...p.directoryIndexBlacklist,e]}))},tn=async()=>{if(!p)return;let t=await ma();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.directoryIndexBlacklist.includes(r)||await W({directoryIndexBlacklist:[...p.directoryIndexBlacklist,r]})},nn=e=>{p&&W({directoryIndexBlacklist:p.directoryIndexBlacklist.filter(t=>t!==e)})},rn=()=>{W({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},an=()=>{if(!p||Re===null)return;let e=Re.trim()||`yyyy/MM/dd HH:mm`;ze(null),e!==p.timeFormatPattern&&W({timeFormatPattern:e})},on=(e,t)=>{Ve(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Hn(Zm,i),i})},sn=h(p?.accentColor,w),ln=h(p?.secondaryColor,b),G=(e,t)=>{p&&(on(`accent`,sn),on(`secondary`,ln),W({accentColor:e,secondaryColor:t}))},K=(e,t)=>{p&&(on(e,e===`accent`?sn:ln),W(e===`accent`?{accentColor:t}:{secondaryColor:t}))},un=async()=>{Qe(!0),st(!1);try{Je(await ut())}catch{st(!0)}finally{Qe(!1)}},q=async()=>{if(!p||!We)return;let e=We.name.trim()||`${We.accent.toUpperCase()} / ${We.secondary.toUpperCase()}`,t=[...p.themePresets,{name:e,accent:We.accent,secondary:We.secondary}];Ke(null),await W({themePresets:t})},dn=async e=>{p&&await W({themePresets:p.themePresets.filter((t,n)=>n!==e)})},fn=e=>{let t=ct;ht(null),t&&t.role===e&&(e===`accent`?sn:ln).toLowerCase()!==t.color.toLowerCase()&&on(e,t.color)},pn=async()=>{let e=De.trim();if(e&&!Ce){we(!0),Ee(null);try{xe(await bm(e,ke)),Oe(``)}catch{Ee(s(`Could not add the tag.`))}finally{we(!1)}}},mn=async(e,t)=>{xe(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await xm(e,t)||Ee(s(`Could not change the tag's color.`))},hn=async e=>{if(Ce)return;we(!0),Ee(null);let t=await ym(e);xe(await vm()),t||Ee(`"${e}" is still used by a folder whose index could not be updated.`),we(!1)},gn=async()=>{let e=Se;if(!e||Ce)return;let t=e.value.trim();t.length===0||t===e.name?V(null):(we(!0),Ee(null),await Sm(e.name,t)?(xe(await vm()),V(null)):Ee(`Could not rename "${e.name}".`),we(!1))},_n=async e=>{let t=new Set(Pt.columns??be.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Ac.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await W({defaultView:{...Pt,columns:n}})},vn=async()=>{if(j)return;let e=!A;M(!0),P(null);try{let t=await mt(e);ae(t),g(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&P(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{P(`The request to Windows failed. Try again.`)}finally{M(!1)}},yn=async()=>{if(pe||!p)return;let e=!zt;me(!0),he(null);try{let t=await et(e);ce(t);let r=It?t.registered&&t.pathMatches:e;g(e=>e&&{...e,defaultFileManager:r}),n(),It&&r!==e&&he(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{he(`The request to Windows failed. Try again.`)}finally{me(!1)}},bn=async()=>{if(!ue){L(!0),fe(null);try{let e=await nt();se(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),n(),t||fe(`Windows did not accept the archive registration. Try again.`)}catch{fe(`The request to Windows failed. Try again.`)}finally{L(!1)}}},xn=async()=>{if(!ue){L(!0),fe(null);try{let e=await rt();se(e),g(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&fe(`The registration is still there. Try turning it off again.`)}catch{fe(`The request to Windows failed. Try again.`)}finally{L(!1)}}},Sn=async(e,t)=>{if(!p)return;let n={...p.extensionIcons};t===null?delete n[e]:n[e]=t,await W({extensionIcons:n})},Cn={...Ut,...p?.shortcuts};(0,O.useEffect)(()=>{if(!ge)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){_e(null);return}let t=qt(e);t&&(_e(null),W({shortcuts:{...Cn,[ge]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[ge,p]),(0,O.useEffect)(()=>{if(!ve)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){B(!1);return}let t=qt(e);t&&(B(!1),W({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[ve,p]);let wn=async e=>{await W({recentLimit:Math.min(Math.max(e,0),50)})},Tn=(e,t)=>{let n=t??He[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Ue(t=>({...t,[e]:void 0})),W(i)},En=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Ct(null),await W({sharePortMode:`custom`,sharePort:n}),await jd(n,`custom`)},Dn=async e=>{let t=e===`custom`,n=t?p?.sharePort??8080:null;await W({sharePortMode:t?`custom`:`random`,sharePort:n}),await jd(n,t?`custom`:`random`)},On=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;kt(!0),Dt(null);try{let e=await _t(t);Tt(e),Dt(e.error),e.error||await W({startupMode:t})}finally{kt(!1)}},kn=async e=>{await W({galleryRoots:e.length>0?e:null})},An=async()=>{let e=await ma(),t=p?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await kn([...t,e])},jn=async()=>{let e=x.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await Sn(e,ee),S(``))},Mn=async()=>{re(!0);try{let e=await ma();if(!e)return;let t=await ha([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await ot(e.replace(/[\\/][^\\/]+$/,``),v(e),`file:${t}`)&&(cn(),y({folder:e,icon:t}))}finally{re(!1)}},Nn=async(e,t)=>{let n={...p?.fonts};t?n[e]=t:delete n[e],await W({fonts:n})};return(0,I.jsxs)(dh,{children:[(0,I.jsxs)(fh,{ref:Mt,children:[(0,I.jsxs)(ph,{ref:Bt(`application`),children:[(0,I.jsx)(uh,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(Y,{children:[(0,I.jsx)(Q,{children:s(`Version`)}),(0,I.jsx)(Hh,{children:e?`v${e.version}`:`—`})]}),(0,I.jsxs)(Y,{children:[(0,I.jsx)(Q,{children:s(`Platform`)}),(0,I.jsx)(Hh,{children:e?.platform??`—`})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Logs`)}),(0,I.jsx)($,{children:s(`Application logs and crash details. Open the folder here to inspect them without leaving the app.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(jg,{disabled:!e?.logDirectory,onClick:()=>e?.logDirectory&&r(e.logDirectory),type:`button`,children:s(`Open log folder`)})})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Language`)}),(0,I.jsx)($,{children:s(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(sh,{disabled:!p,onChange:e=>void W({language:e}),options:[Jm,...c.length>0?c:[Gm]],value:p?.language??Gm})})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Picker window size`)}),(0,I.jsx)($,{children:s(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(Qh,{inputMode:`numeric`,onBlur:e=>Tn(`width`,e.currentTarget.value),onChange:e=>Ue(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:He.width??String(p?.pickerWindowWidth??1200)}),(0,I.jsx)(Hh,{children:`×`}),(0,I.jsx)(Qh,{inputMode:`numeric`,onBlur:e=>Tn(`height`,e.currentTarget.value),onChange:e=>Ue(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:He.height??String(p?.pickerWindowHeight??800)})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Web server port`)}),(0,I.jsx)($,{children:s(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(lo,{disabled:!p,onChange:e=>void Dn(e),options:[{value:`random`,label:s(`Random`)},{value:`custom`,label:s(`Custom port`)}],value:p?.sharePortMode??`random`,width:160})})]}),p?.sharePortMode===`custom`&&(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Custom port`)}),(0,I.jsx)($,{children:s(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(Qh,{inputMode:`numeric`,onBlur:e=>void En(e.currentTarget.value),onChange:e=>Ct(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:St??(p?.sharePort?String(p.sharePort):``)})})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Link paths`)}),(0,I.jsx)($,{children:s(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(lo,{disabled:!p,onChange:e=>void W({linkPathMode:e}),options:[{value:`relative`,label:s(`Relative`)},{value:`absolute`,label:s(`Absolute`)}],value:p?.linkPathMode??`relative`,width:160})})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Global hotkey`)}),(0,I.jsx)($,{children:s(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(Ag,{$listening:ve,disabled:!p,onClick:()=>B(!0),type:`button`,children:ve?s(`Press a key…`):p?.globalHotkey?Jt(p.globalHotkey):s(`None`)}),p?.globalHotkey&&(0,I.jsx)(Gh,{onClick:()=>void W({globalHotkey:null}),type:`button`,children:s(`Clear`)})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Open yafm:// links`)}),(0,I.jsx)($,{children:s(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),N&&(0,I.jsx)(Vh,{children:N})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(Yh,{$on:A,children:s(A?`Active`:`Off`)}),(0,I.jsx)(Xh,{$on:A,disabled:j,onClick:()=>void vn(),title:s(A?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,I.jsx)(Zh,{})})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Use as the default file manager`)}),(0,I.jsx)($,{children:s(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),F?.registered&&!F.pathMatches&&(0,I.jsx)(Vh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:F.registeredPath??`?`})}),z&&(0,I.jsx)(Vh,{children:z})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(Yh,{$on:zt,children:s(zt?`Active`:`Off`)}),(0,I.jsx)(Xh,{$on:zt,disabled:!p||pe,onClick:()=>void yn(),title:s(zt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,I.jsx)(Zh,{})})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Open archives with this app`)}),(0,I.jsx)($,{children:s(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,I.jsx)($,{children:s(`When this is off, opening an archive uses the system's default application instead.`)}),oe?.registered&&!oe.pathMatches&&(0,I.jsx)(Vh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:oe.registeredPath??`?`})}),de&&(0,I.jsx)(Vh,{children:de})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(Yh,{$on:Lt,children:s(Lt?`Active`:`Off`)}),(0,I.jsx)(jg,{disabled:!p||ue||Lt,onClick:()=>void bn(),type:`button`,children:s(`Register`)}),e?.platform===`windows`&&(0,I.jsx)(jg,{onClick:()=>void U(`ms-settings:defaultapps`),type:`button`,children:s(`Default apps…`)}),(0,I.jsx)(Jh,{disabled:!p||ue||!Rt,onClick:()=>void xn(),type:`button`,children:s(`Unregister`)})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Reopen the tabs that were open`)}),(0,I.jsx)($,{children:s(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,I.jsx)(Xh,{$on:p?.restoreTabs??!0,disabled:!p,onClick:()=>void W({restoreTabs:!p?.restoreTabs}),type:`button`,children:(0,I.jsx)(Zh,{})})]})]})]}),(0,I.jsxs)(ph,{ref:Bt(`startup`),children:[(0,I.jsx)(uh,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Start with the computer`)}),(0,I.jsx)($,{children:s(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),Et&&(0,I.jsx)(Vh,{children:Et}),wt&&!wt.supported&&(0,I.jsx)(Vh,{children:s(`This platform cannot create a per-user startup entry.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(lo,{disabled:!p||Ot||wt!==null&&!wt.supported,onChange:e=>void On(e),options:[{value:`none`,label:s(`None`)},{value:`shortcut`,label:s(`Shortcut`)},{value:`task`,label:s(`Scheduled task`)}],value:wt?.mode??p?.startupMode??`none`,width:170})})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Start hidden in the tray`)}),(0,I.jsx)($,{children:s(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(Xh,{$on:p?.startHidden??!1,disabled:!p,onClick:()=>void W({startHidden:!p?.startHidden}),type:`button`,children:(0,I.jsx)(Zh,{})})})]})]})]}),(0,I.jsxs)(ph,{ref:Bt(`fonts`),children:[(0,I.jsx)(uh,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,I.jsxs)(hh,{children:[Tm.map(e=>(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(e.label)}),(0,I.jsx)($,{children:s(`Falls back to {font} until another family is chosen.`,{font:s(e.fallback)})})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(km,{defaultLabel:s(e.fallback),disabled:!p,fonts:bt,onChange:t=>void Nn(e.id,t),sample:e.sample,value:p?.fonts?.[e.id]??null})})]},e.id)),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Reset`)}),(0,I.jsx)($,{children:s(`Back to the app's built-in font for every role.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(jg,{onClick:()=>void W({fonts:{}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,I.jsxs)(ph,{ref:Bt(`time`),children:[(0,I.jsx)(uh,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,I.jsx)(hh,{children:(0,I.jsxs)(gh,{children:[(0,I.jsxs)(_h,{children:[(0,I.jsx)(Q,{children:s(`Format`)}),(0,I.jsx)($,{children:s(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,I.jsx)(wg,{children:Km.map(e=>(0,I.jsx)(Tg,{$active:(p?.timeFormat??`24`)===e.id,onClick:()=>void W({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(p?.timeFormat??`24`)===`custom`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Eg,{"aria-label":s(`Pattern`),onBlur:an,onChange:e=>ze(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),an()):e.key===`Escape`&&ze(null)},spellCheck:!1,value:Re??p?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,I.jsx)($,{children:s(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,I.jsxs)(Dg,{children:[(0,I.jsx)(`span`,{children:s(`Preview`)}),(0,I.jsx)(`code`,{children:m(qm,p?.timeFormat,Re??p?.timeFormatPattern)})]})]})})]}),(0,I.jsxs)(ph,{ref:Bt(`updates`),children:[(0,I.jsx)(uh,{note:`The running build and the newest one published.`,title:`Updates`}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(Y,{children:[(0,I.jsx)(Q,{children:s(`Current version`)}),(0,I.jsx)(Hh,{children:e?`v${e.version}`:`—`})]}),(0,I.jsxs)(Y,{children:[(0,I.jsx)(Q,{children:s(`Latest version`)}),(0,I.jsx)(Hh,{children:qe?`v${qe.latest}`:`—`})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Check for updates`)}),(0,I.jsx)($,{children:qe&&!qe.available?s(`You are on the latest version.`):s(`Reads the version file the release workflow publishes.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(jg,{disabled:Ze,onClick:()=>void un(),type:`button`,children:s(Ze?`Checking…`:`Check now`)})})]}),qe?.available&&(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Version {version} is available.`,{version:qe.latest})}),(0,I.jsx)($,{children:s(`Download the new build from the releases page.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(jg,{onClick:()=>void U(Wm),type:`button`,children:s(`Open release page`)})})]}),at&&(0,I.jsx)(Y,{children:(0,I.jsx)(Vh,{children:s(`Could not check for updates.`)})})]})]}),(0,I.jsxs)(ph,{ref:Bt(`colors`),children:[(0,I.jsx)(uh,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(gh,{children:[(0,I.jsxs)(_h,{children:[(0,I.jsx)(Q,{children:s(`Presets`)}),(0,I.jsx)($,{children:s(`One click changes the accent and the highlight together.`)})]}),(0,I.jsxs)(vh,{children:[su.map(e=>(0,I.jsxs)(yh,{$on:sn.toLowerCase()===e.accent&&ln.toLowerCase()===e.secondary,onClick:()=>G(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,I.jsxs)(Eh,{children:[(0,I.jsx)(`i`,{style:{background:e.accent}}),(0,I.jsx)(`i`,{style:{background:e.secondary}})]}),(0,I.jsx)(bh,{children:s(e.name)})]},e.name)),Ft.map((e,t)=>(0,I.jsxs)(xh,{children:[(0,I.jsxs)(yh,{$on:sn.toLowerCase()===e.accent.toLowerCase()&&ln.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>G(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,I.jsxs)(Eh,{children:[(0,I.jsx)(`i`,{style:{background:e.accent}}),(0,I.jsx)(`i`,{style:{background:e.secondary}})]}),(0,I.jsx)(bh,{children:e.name})]}),(0,I.jsx)(Sh,{onClick:()=>void dn(t),title:s(`Remove preset`),type:`button`,children:(0,I.jsx)(bi,{size:9})})]},`${e.name}-${t}`)),We?(0,I.jsxs)(wh,{children:[(0,I.jsxs)(Eh,{children:[(0,I.jsx)(`i`,{style:{background:We.accent}}),(0,I.jsx)(`i`,{style:{background:We.secondary}})]}),(0,I.jsx)(Th,{autoFocus:!0,maxLength:24,onChange:e=>Ke({...We,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),q()):e.key===`Escape`&&(e.preventDefault(),Ke(null))},placeholder:s(`Preset name`),spellCheck:!1,value:We.name}),(0,I.jsx)(Gh,{onClick:()=>void q(),type:`button`,children:s(`Save`)}),(0,I.jsx)(Gh,{onClick:()=>Ke(null),type:`button`,children:s(`Cancel`)})]}):(0,I.jsxs)(Ch,{disabled:!p,onClick:()=>Ke({name:``,accent:sn,secondary:ln}),title:s(`Save the current colours as a preset`),type:`button`,children:[(0,I.jsx)(ci,{size:12}),s(`Add preset`)]})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Accent color`)}),(0,I.jsx)($,{children:s(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(lh,{colors:Be.accent,current:sn,onApply:e=>K(`accent`,e)}),(0,I.jsx)(Kh,{"aria-label":s(`Accent color`),disabled:!p,onBlur:()=>fn(`accent`),onChange:e=>void W({accentColor:e.target.value}),onFocus:()=>ht({role:`accent`,color:sn}),type:`color`,value:sn}),(0,I.jsx)(qh,{children:sn.toUpperCase()})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Secondary color`)}),(0,I.jsx)($,{children:s(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(lh,{colors:Be.secondary,current:ln,onApply:e=>K(`secondary`,e)}),(0,I.jsx)(Kh,{"aria-label":s(`Secondary color`),disabled:!p,onBlur:()=>fn(`secondary`),onChange:e=>void W({secondaryColor:e.target.value}),onFocus:()=>ht({role:`secondary`,color:ln}),type:`color`,value:ln}),(0,I.jsx)(qh,{children:ln.toUpperCase()})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Reset colors`)}),(0,I.jsx)($,{children:s(`Returns the interface to the default blue and indigo theme.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(Gh,{disabled:!p,onClick:()=>{on(`accent`,sn),on(`secondary`,ln),W({accentColor:null,secondaryColor:null})},type:`button`,children:s(`Reset`)})})]})]})]}),(0,I.jsxs)(ph,{ref:Bt(`background`),children:[(0,I.jsx)(uh,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(gh,{children:[(0,I.jsxs)(_h,{children:[(0,I.jsx)(Q,{children:s(`Wallpaper`)}),(0,I.jsx)($,{children:s(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,I.jsx)(ug,{children:(0,I.jsx)(dg,{$active:!p?.backgroundSource,onClick:()=>void W({backgroundSource:null}),title:s(`None`),type:`button`,children:(0,I.jsx)(gg,{children:s(`None`)})})}),(0,I.jsxs)(sg,{children:[uu.map(e=>(0,I.jsxs)(cg,{children:[(0,I.jsx)(lg,{children:s(e.name)}),(0,I.jsx)(ug,{children:e.variants.map(t=>(0,I.jsx)(dg,{$active:p?.backgroundSource===t.id,onClick:()=>void W({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,I.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,I.jsxs)(cg,{children:[(0,I.jsx)(lg,{children:s(`Motion`)}),(0,I.jsx)(ug,{children:lu.map(e=>(0,I.jsxs)(dg,{$active:p?.backgroundSource===e.id,onClick:()=>void W({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,I.jsx)(`img`,{alt:``,src:e.poster}),(0,I.jsx)(mg,{children:(0,I.jsx)(Ti,{size:11})})]},e.id))})]}),(0,I.jsxs)(cg,{children:[(0,I.jsx)(lg,{children:s(`Custom`)}),(0,I.jsxs)(ug,{children:[(p?.backgroundCustom??[]).map(e=>(0,I.jsx)(oh,{active:p?.backgroundSource===`file:${e}`||p?.backgroundSource===`url:${e}`||p?.backgroundSource===e,onRemove:()=>Gt(e),onSelect:()=>void W({backgroundSource:T(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,I.jsxs)(hg,{onClick:()=>void Ht([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,I.jsx)(ci,{size:12}),s(`Image…`)]}),(0,I.jsxs)(hg,{onClick:()=>void Ht([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,I.jsx)(ci,{size:12}),s(`Video…`)]})]})]})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Image or video URL`)}),(0,I.jsx)($,{children:s(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(Qh,{onChange:e=>jt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Wt()},placeholder:`https://…`,value:At}),(0,I.jsx)(Gh,{disabled:!T(At),onClick:()=>void Wt(),type:`button`,children:s(`Add`)})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsx)(Q,{children:s(`Blur`)}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(og,{max:40,min:0,onChange:e=>void W({backgroundBlur:Number(e.target.value)}),type:`range`,value:p?.backgroundBlur??0}),(0,I.jsxs)(Hh,{children:[p?.backgroundBlur??0,`px`]})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsx)(Q,{children:s(`Saturation`)}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(og,{max:200,min:0,onChange:e=>void W({backgroundSaturation:Number(e.target.value)}),type:`range`,value:p?.backgroundSaturation??100}),(0,I.jsxs)(Hh,{children:[p?.backgroundSaturation??100,`%`]})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsx)(Q,{children:s(`Brightness`)}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(og,{max:150,min:40,onChange:e=>void W({backgroundBrightness:Number(e.target.value)}),type:`range`,value:p?.backgroundBrightness??100}),(0,I.jsxs)(Hh,{children:[p?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,I.jsxs)(ph,{ref:Bt(`safety`),children:[(0,I.jsx)(uh,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(gh,{children:[(0,I.jsxs)(_h,{children:[(0,I.jsx)(Q,{children:s(`Protected folders`)}),(0,I.jsx)($,{children:s(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,I.jsx)(_g,{children:(p?.protectedPaths??[]).map(e=>(0,I.jsxs)(vg,{children:[(0,I.jsx)(yg,{"aria-label":s(`Protected path`),onBlur:Xt,onChange:t=>Me({from:e,value:t.target.value}),onFocus:()=>Me({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Xt()):e.key===`Escape`&&Me(null)},spellCheck:!1,value:je?.from===e?je.value:e}),(0,I.jsx)(bg,{onClick:()=>Zt(e),title:s(`Remove`),type:`button`,children:(0,I.jsx)(bi,{size:10})})]},e))}),(0,I.jsxs)(Sg,{children:[(0,I.jsx)(Cg,{"aria-label":s(`New protected rule`),onChange:e=>Fe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Yt())},placeholder:`*.log`,spellCheck:!1,value:Pe}),(0,I.jsx)(Gh,{onClick:Yt,type:`button`,children:s(`Add the rule`)})]}),(0,I.jsxs)(xg,{children:[(0,I.jsx)(Gh,{onClick:()=>void Qt(),type:`button`,children:s(`Restore defaults`)}),(0,I.jsx)(Gh,{onClick:()=>void Kt(),type:`button`,children:s(`Add folder…`)})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Confirmation delay`)}),(0,I.jsx)($,{children:s(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(og,{max:30,min:2,onChange:e=>void W({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:p?.deleteDelaySeconds??5}),(0,I.jsxs)(Hh,{children:[p?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,I.jsxs)(ph,{ref:Bt(`tags`),children:[(0,I.jsx)(uh,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Uh,{"aria-label":s(`Color of the new tag`),onChange:e=>Ae(e.target.value),type:`color`,value:ke}),(0,I.jsx)(Qh,{onChange:e=>Oe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),pn())},placeholder:s(`New tag`),spellCheck:!1,value:De})]}),(0,I.jsx)($,{children:s(`Add a tag here; it is available in every folder.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(Gh,{disabled:Ce||De.trim().length===0,onClick:()=>void pn(),type:`button`,children:s(`Add`)})})]}),Te&&(0,I.jsx)(Y,{children:(0,I.jsx)(Vh,{children:Te})}),ye.length===0&&(0,I.jsx)(Y,{children:(0,I.jsx)($,{children:s(`No tags yet. Add one below; it is available in every folder.`)})}),ye.map(e=>(0,I.jsx)(Y,{children:Se?.name===e.name?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Uh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void mn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,I.jsx)(Wh,{autoFocus:!0,disabled:Ce,onChange:t=>V({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),gn()):e.key===`Escape`&&(e.preventDefault(),V(null))},value:Se.value})]}),(0,I.jsx)($,{children:s(`Press Enter to save, Escape to cancel.`)})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(Gh,{disabled:Ce,onClick:()=>void gn(),type:`button`,children:s(`Save`)}),(0,I.jsx)(Gh,{disabled:Ce,onClick:()=>V(null),type:`button`,children:s(`Cancel`)})]})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Uh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void mn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,I.jsx)(Q,{children:e.name})]}),(0,I.jsx)($,{children:o(s,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(Gh,{disabled:Ce,onClick:()=>V({name:e.name,value:e.name}),type:`button`,children:s(`Edit`)}),(0,I.jsxs)(Jh,{disabled:Ce,onClick:()=>void hn(e.name),type:`button`,children:[(0,I.jsx)(vi,{size:13}),s(`Remove`)]})]})]})},e.name))]})]}),(0,I.jsxs)(ph,{ref:Bt(`files-view`),children:[(0,I.jsx)(uh,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Default view`)}),(0,I.jsx)($,{children:s(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsxs)(ig,{children:[(0,I.jsx)(ag,{$on:Pt.mode===`list`,onClick:()=>void W({defaultView:{...Pt,mode:`list`}}),type:`button`,children:s(`List`)}),(0,I.jsx)(ag,{$on:Pt.mode===`grid`,onClick:()=>void W({defaultView:{...Pt,mode:`grid`}}),type:`button`,children:s(`Grid`)})]})})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`List icon size`)}),(0,I.jsx)($,{children:s(`The icon in the list rows.`)})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(og,{max:48,min:16,onChange:e=>void W({defaultView:{...Pt,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Pt.iconSize}),(0,I.jsxs)(Hh,{children:[Pt.iconSize,`px`]})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Grid size`)}),(0,I.jsx)($,{children:s(`The height of a grid tile; the icon inside follows it.`)})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(og,{max:260,min:100,onChange:e=>void W({defaultView:{...Pt,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Pt.gridSize}),(0,I.jsxs)(Hh,{children:[Pt.gridSize,`px`]})]})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Q,{children:s(`Selection checkboxes`)}),(0,I.jsx)(Cm,{})]}),(0,I.jsx)($,{children:s(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,I.jsx)(Xh,{$on:p?.showCheckboxes??!0,disabled:!p,onClick:()=>void W({showCheckboxes:!(p?.showCheckboxes??!0)}),type:`button`,children:(0,I.jsx)(Zh,{})})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Q,{children:s(`Open with a single click`)}),(0,I.jsx)(Cm,{})]}),(0,I.jsx)($,{children:s(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,I.jsx)(Xh,{$on:p?.openOnSingleClick??!1,disabled:!p,onClick:()=>void W({openOnSingleClick:!(p?.openOnSingleClick??!1)}),type:`button`,children:(0,I.jsx)(Zh,{})})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Q,{children:s(`Confirm before deleting`)}),(0,I.jsx)(Cm,{})]}),(0,I.jsx)($,{children:s(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,I.jsx)(Xh,{$on:p?.confirmDelete??!1,disabled:!p,onClick:()=>void W({confirmDelete:!(p?.confirmDelete??!1)}),type:`button`,children:(0,I.jsx)(Zh,{})})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Q,{children:s(`Play audio in video previews`)}),(0,I.jsx)(Cm,{})]}),(0,I.jsx)($,{children:s(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,I.jsx)(Xh,{$on:p?.previewVideoAudio??!1,disabled:!p,onClick:()=>void W({previewVideoAudio:!(p?.previewVideoAudio??!1)}),type:`button`,children:(0,I.jsx)(Zh,{})})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Q,{children:s(`Autoplay video previews`)}),(0,I.jsx)(Cm,{})]}),(0,I.jsx)($,{children:s(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,I.jsx)(Xh,{$on:p?.previewVideoAutoplay??!1,disabled:!p,onClick:()=>void W({previewVideoAutoplay:!(p?.previewVideoAutoplay??!1)}),type:`button`,children:(0,I.jsx)(Zh,{})})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Q,{children:s(`Preview panel under the list`)}),(0,I.jsx)(Cm,{})]}),(0,I.jsx)($,{children:s(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,I.jsx)(Xh,{$on:Pt.showImages??!0,onClick:()=>void W({defaultView:{...Pt,showImages:!(Pt.showImages??!0)}}),type:`button`,children:(0,I.jsx)(Zh,{})})]}),(0,I.jsx)(Y,{children:(0,I.jsxs)(X,{children:[(0,I.jsxs)(Bh,{children:[(0,I.jsx)(Q,{children:s(`Columns`)}),(0,I.jsx)(Cm,{})]}),(0,I.jsx)($,{children:s(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,I.jsx)(Y,{children:(0,I.jsxs)(Og,{children:[Ac.map(e=>(0,I.jsxs)(kg,{children:[(0,I.jsx)(`input`,{checked:(Pt.columns??[]).includes(e.id),onChange:()=>void _n(e.id),type:`checkbox`}),(0,I.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,I.jsxs)(kg,{children:[(0,I.jsx)(`input`,{checked:(Pt.columns??[]).includes(`linkTarget`),onChange:()=>void _n(`linkTarget`),type:`checkbox`}),(0,I.jsx)(`span`,{children:s(`Link target after the name`)})]})]})})]}),(0,I.jsxs)(Fg,{children:[s(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,I.jsx)(Cm,{}),` `,s(`Anything marked as global always applies to every folder.`)]})]}),(0,I.jsxs)(ph,{ref:Bt(`shortcuts`),children:[(0,I.jsx)(uh,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,I.jsxs)(hh,{children:[Um.map(({id:e,label:t,note:n})=>(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(t)}),(0,I.jsx)($,{children:s(n)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(Ag,{$listening:ge===e,onClick:()=>_e(e),type:`button`,children:ge===e?s(`Press a key…`):Jt(Cn[e])})})]},e)),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Reset`)}),(0,I.jsx)($,{children:s(`Back to the default combination for every action.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(jg,{onClick:()=>void W({shortcuts:{...Ut}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,I.jsxs)(ph,{ref:Bt(`memory`),children:[(0,I.jsx)(uh,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(Ih,{children:[(0,I.jsxs)(Lh,{children:[(0,I.jsx)(Q,{children:s(`Process memory`)}),(0,I.jsx)(Hh,{children:k?`${f(k.private)} · ${Fh(k.private,k.available)}`:`—`})]}),(0,I.jsx)(Rh,{children:(0,I.jsx)(zh,{$ratio:k?k.private/Math.max(k.available,1):0,$tone:E(k?k.private/Math.max(k.available,1):0)})}),(0,I.jsx)($,{children:k?s(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:f(k.available),resident:f(k.workingSet)}):s(`Reading the current usage…`)})]}),(0,I.jsxs)(Ih,{children:[(0,I.jsxs)(Lh,{children:[(0,I.jsx)(Q,{children:s(`Managed heap`)}),(0,I.jsx)(Hh,{children:k?`${f(k.managed)} · ${Fh(k.managed,k.private)}`:`—`})]}),(0,I.jsx)(Rh,{children:(0,I.jsx)(zh,{$ratio:k?k.managed/Math.max(k.private,1):0,$tone:`var(--accent-secondary)`})}),(0,I.jsx)($,{children:s(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,I.jsxs)(Ih,{children:[(0,I.jsxs)(Lh,{children:[(0,I.jsx)(Q,{children:s(`Native and runtime`)}),(0,I.jsx)(Hh,{children:k?`${f(Math.max(0,k.private-k.managed))} · ${Fh(Math.max(0,k.private-k.managed),k.private)}`:`—`})]}),(0,I.jsx)(Rh,{children:(0,I.jsx)(zh,{$ratio:k?Math.max(0,k.private-k.managed)/Math.max(k.private,1):0,$tone:`var(--accent-primary)`})}),(0,I.jsx)($,{children:s(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Free memory`)}),(0,I.jsx)($,{children:s(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(jg,{onClick:()=>void ft().then(ie),type:`button`,children:s(`Trim now`)})})]})]})]}),(0,I.jsxs)(ph,{ref:Bt(`overview`),children:[(0,I.jsx)(uh,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,I.jsx)(hh,{children:(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Recent items`)}),(0,I.jsx)($,{children:s(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(Qh,{max:50,min:0,onChange:e=>void wn(Number(e.target.value)),type:`number`,value:p?.recentLimit??10})})]})})]}),(0,I.jsxs)(ph,{ref:Bt(`gallery`),children:[(0,I.jsx)(uh,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,I.jsxs)(hh,{children:[(p?.galleryRoots??[]).map(e=>(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:v(e)}),(0,I.jsx)($,{children:e})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(Mg,{onClick:()=>void kn((p?.galleryRoots??[]).filter(t=>t!==e)),title:s(`Stop scanning this folder`),type:`button`,children:(0,I.jsx)(bi,{size:12})})})]},e)),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Scan folders`)}),(0,I.jsx)($,{children:(p?.galleryRoots??[]).length===0?s(`Nothing added yet, so the gallery reads the Pictures folder.`):s(`Only these folders are scanned, three levels deep.`)})]}),(0,I.jsx)(Z,{children:(0,I.jsx)(jg,{onClick:()=>void An(),type:`button`,children:s(`Choose folder…`)})})]})]})]}),(0,I.jsxs)(ph,{ref:Bt(`icons`),children:[(0,I.jsx)(uh,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Use system file icons`)}),(0,I.jsx)($,{children:s(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,I.jsx)(Xh,{$on:p?.systemIcons??!1,disabled:!p,onClick:()=>void W({systemIcons:!p?.systemIcons}),type:`button`,children:(0,I.jsx)(Zh,{})})]}),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Use custom folder icons`)}),(0,I.jsx)($,{children:s(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,I.jsx)(Xh,{$on:p?.customFolderIcons??!1,disabled:!p,onClick:()=>void W({customFolderIcons:!p?.customFolderIcons}),type:`button`,children:(0,I.jsx)(Zh,{})})]})]})]}),(0,I.jsxs)(ph,{ref:Bt(`extension-icons`),children:[(0,I.jsx)(uh,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,I.jsxs)(hh,{children:[Object.entries(p?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:e}),(0,I.jsx)($,{children:rh(s,t)})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(ih,{source:t}),(0,I.jsx)(Mg,{onClick:()=>void Sn(e,null),title:s(`Remove this rule`),type:`button`,children:(0,I.jsx)(bi,{size:12})})]})]},e)),(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Add a rule`)}),(0,I.jsx)($,{children:s(`Extension and the icon to draw for it.`)})]}),(0,I.jsxs)(Z,{children:[(0,I.jsx)(Qh,{onChange:e=>S(e.target.value),placeholder:`.psd`,spellCheck:!1,value:x}),(0,I.jsxs)(rg,{children:[(0,I.jsx)(Mg,{onClick:()=>ne(e=>!e),title:s(`Choose the icon`),type:`button`,children:(0,I.jsx)(ih,{source:ee})}),te&&(0,I.jsx)(bd,{allowDefault:!1,onClose:()=>ne(!1),onPick:e=>{C(e??`file`),ne(!1)},value:ee})]}),(0,I.jsx)(Mg,{onClick:()=>void jn(),title:s(`Add the rule`),type:`button`,children:(0,I.jsx)(ci,{size:13})})]})]})]})]}),(0,I.jsxs)(ph,{ref:Bt(`folder-icons`),children:[(0,I.jsx)(uh,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Give a folder its own icon`)}),(0,I.jsx)($,{children:s(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,I.jsxs)(Z,{children:[_&&(0,I.jsx)(ah,{src:_.icon}),(0,I.jsx)(jg,{disabled:D,onClick:()=>void Mn(),type:`button`,children:s(D?`Choosing…`:`Choose folder and icon…`)})]})]}),_&&(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:v(_.folder)}),(0,I.jsx)($,{children:_.folder})]}),(0,I.jsx)(Z,{children:(0,I.jsxs)(Pg,{children:[(0,I.jsx)(yi,{size:11}),` `,s(`Saved`)]})})]})]})]}),(0,I.jsxs)(ph,{ref:Bt(`folder-index`),children:[(0,I.jsx)(uh,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(Y,{children:[(0,I.jsxs)(X,{children:[(0,I.jsx)(Q,{children:s(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,I.jsx)($,{children:s(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,I.jsx)(Xh,{$on:p?.writeDirectoryIndex??!0,disabled:!p,onClick:()=>void W({writeDirectoryIndex:!p?.writeDirectoryIndex}),type:`button`,children:(0,I.jsx)(Zh,{})})]}),(0,I.jsxs)(gh,{children:[(0,I.jsxs)(_h,{children:[(0,I.jsx)(Q,{children:s(`Directory index blacklist`)}),(0,I.jsx)($,{children:s(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,I.jsx)(_g,{children:(p?.directoryIndexBlacklist??[]).map(e=>(0,I.jsxs)(vg,{children:[(0,I.jsx)(yg,{"aria-label":s(`Directory index blacklist rule`),onBlur:$t,onChange:t=>H({from:e,value:t.target.value}),onFocus:()=>H({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),$t()):e.key===`Escape`&&H(null)},spellCheck:!1,value:Ne?.from===e?Ne.value:e}),(0,I.jsx)(bg,{onClick:()=>nn(e),title:s(`Remove`),type:`button`,children:(0,I.jsx)(bi,{size:10})})]},e))}),(0,I.jsxs)(Sg,{children:[(0,I.jsx)(Cg,{"aria-label":s(`Directory index blacklist rule`),onChange:e=>Le(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),en())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Ie}),(0,I.jsx)(Gh,{onClick:en,type:`button`,children:s(`Add the rule`)})]}),(0,I.jsxs)(xg,{children:[(0,I.jsx)(Gh,{onClick:rn,type:`button`,children:s(`Restore defaults`)}),(0,I.jsx)(Gh,{onClick:()=>void tn(),type:`button`,children:s(`Add folder…`)})]})]})]}),!(p?.writeDirectoryIndex??!0)&&(0,I.jsx)(Ig,{children:nh(s,e?.platform)})]}),(0,I.jsxs)(ph,{ref:Bt(`indexing`),children:[(0,I.jsx)(uh,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,I.jsx)(th,{})]}),(0,I.jsxs)(ph,{ref:Bt(`files`),children:[(0,I.jsx)(uh,{note:`What the listings include.`,title:`Files`}),(0,I.jsxs)(hh,{children:[(0,I.jsxs)(Y,{children:[(0,I.jsx)(Q,{children:s(`Hidden items`)}),(0,I.jsx)(Hh,{children:eh(s,u?.showHidden)})]}),(0,I.jsxs)(Y,{children:[(0,I.jsx)(Q,{children:s(`Protected operating system files`)}),(0,I.jsx)(Hh,{children:eh(s,u?.showSystem)})]})]}),(0,I.jsx)(Fg,{children:s(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,I.jsxs)(Ah,{"aria-label":s(`Settings sections`),children:[(0,I.jsx)(jh,{children:s(`Sections`)}),(0,I.jsx)(Mh,{children:Xm.map(({id:e,label:t})=>(0,I.jsx)(Nh,{$active:vt===e,onClick:()=>Vt(e),type:`button`,children:(0,I.jsx)(`span`,{children:s(t)})},e))}),(0,I.jsx)(Ph,{children:s(`Changes are saved as you make them.`)})]})]})}function eh(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function th(){let e=R(),[t,n]=(0,O.useState)(null);return(0,O.useEffect)(()=>{let e=!0,t=()=>qe().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,I.jsx)(Ig,{children:e(`No indexing tasks are running.`)}):(0,I.jsxs)(hh,{children:[(0,I.jsx)(Y,{children:(0,I.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,I.jsx)(Y,{children:(0,I.jsx)(Hh,{title:e,children:e})},e))]}):(0,I.jsx)(Ig,{children:e(`Index task information is unavailable.`)})}function nh(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function rh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function ih({source:e}){let t=fn(e.startsWith(`file:`)?e.slice(5):null);return(0,I.jsx)(Ng,{children:t?(0,I.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,I.jsx)(Hs,{name:e,size:16})})}function ah({src:e}){let t=fn(e);return(0,I.jsx)(Ng,{children:t&&(0,I.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function oh({path:e,active:t,onSelect:n,onRemove:r}){let i=R(),a=T(e),o=_n(a?null:e),s=a?e:o,c=Ou(e.split(/[?#]/)[0]);return(0,I.jsxs)(fg,{children:[(0,I.jsxs)(dg,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,I.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,I.jsx)(`img`,{alt:``,src:s})),c&&(0,I.jsx)(mg,{children:(0,I.jsx)(Ti,{size:11})})]}),(0,I.jsx)(pg,{onClick:r,title:i(`Remove`),type:`button`,children:(0,I.jsx)(bi,{size:9})})]})}function sh({value:e,options:t,onChange:n,disabled:r}){let i=R(),[a,o]=(0,O.useState)(null),s=(0,O.useRef)(null);return(0,O.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)($h,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,I.jsx)(`span`,{children:ch(i,e)}),(0,I.jsx)(eg,{children:(0,I.jsx)(di,{size:11})})]}),a&&(0,ja.createPortal)((0,I.jsx)(tg,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,I.jsxs)(ng,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,I.jsx)(`span`,{children:ch(i,t)}),t===e&&(0,I.jsx)(yi,{size:11})]},t))}),document.body)]})}function ch(e,t){return t===Jm?e(`System default`):Ym[t]??t}function lh({colors:e,current:t,onApply:n}){let r=R();if(e.length===0)return null;let[i,...a]=e;return(0,I.jsxs)(Dh,{children:[(0,I.jsxs)(kh,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,I.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,I.jsx)(Oh,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,I.jsx)(yi,{size:9})},e))]})}function uh({title:e,note:t,global:n=!1}){let r=R();return(0,I.jsxs)(mh,{children:[(0,I.jsxs)(`h2`,{children:[r(e),n&&(0,I.jsx)(Cm,{})]}),(0,I.jsx)(`p`,{children:r(t)})]})}var dh=_.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,fh=_.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,ph=_.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,mh=_.header`
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
`,hh=_.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,gh=_.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,_h=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,vh=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,yh=_.button`
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
`,bh=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xh=_.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Sh=_.button`
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
`,Ch=_.button`
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
`,wh=_.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Th=_.input`
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
`,Eh=_.span`
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
`,Dh=_.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Oh=_.button`
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
`,kh=_.button`
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
`,Ah=_.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,jh=_.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Mh=_.div`
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
`,Nh=_.button`
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
`,Ph=_.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function Fh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var Ih=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Lh=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Rh=_.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,zh=_.div`
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
`,Bh=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=_.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,Vh=_.span`
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
`,Hh=_.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Uh=_.input`
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
`,Wh=_.input`
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
`,Gh=_.button`
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
`,Kh=_.input`
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
`,qh=_.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Jh=_.button`
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
`,Yh=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Xh=_.button`
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
`,Zh=_.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Qh=_.input`
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
`,$h=_.button`
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
`,eg=_.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,tg=_.div`
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
`,ng=_.button`
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
`,rg=_.span`
    position: relative;
    display: inline-flex;
`,ig=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,ag=_.button`
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
`,og=_.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,sg=_.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,cg=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,lg=_.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ug=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,dg=_.button`
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
`,fg=_.div`
    position: relative;
    width: 102px;
    height: 58px;
`,pg=_.button`
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
`,mg=_.span`
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
`,hg=_.button`
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
`,gg=_.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,_g=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,vg=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,yg=_.input`
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
`,bg=_.button`
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
`,xg=_.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,Sg=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,Cg=_.input`
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
`,wg=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Tg=_.button`
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
`,Eg=_.input`
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
`,Dg=_.div`
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
`,Og=_.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,kg=_.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,Ag=_.button`
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
`,jg=_.button`
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
`,Mg=_.button`
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
`,Ng=_.span`
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
`,Pg=_.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,Fg=_.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Ig=_.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,Lg=150,Rg=2500,zg=3,Bg=600;function Vg({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,onSearchMatches:s,onPick:c,onSelectionChange:l,onAddToTray:u,onAddFavorite:d,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,showDetails:g=!0,videoAudio:_=!1,videoAutoplay:v=!1}){let b=R(),x=Tc(`gallery`),[S,ee]=(0,O.useState)([]),[C,w]=(0,O.useState)(0),[te,T]=(0,O.useState)(!0),[E,ne]=(0,O.useState)(null),[D,re]=(0,O.useState)(!1),[k,ie]=(0,O.useState)([]),[A,ae]=(0,O.useState)(()=>{let e=zn(`yafm.preview.width`,320);return e>=220?e:320}),j=(0,O.useRef)([]),M=(0,O.useRef)(0),N=(0,O.useRef)(!1),P=(0,O.useRef)(!0),oe=(0,O.useRef)(0),se=(0,O.useRef)(null),F=(0,O.useRef)(0),ce=(0,O.useCallback)(async e=>{let t=++oe.current;T(!0),P.current=!0,ne(null);try{let n=await ze(0,Lg,e);if(t!==oe.current)return;j.current=n.entries,M.current=n.total,ee(n.entries),w(n.total)}catch(e){t===oe.current&&ne(e instanceof Error?e.message:String(e))}finally{t===oe.current&&(P.current=!1,T(!1))}},[]);(0,O.useEffect)(()=>{ce(!1)},[ce]);let le=(0,O.useCallback)(async()=>{if(P.current||N.current||j.current.length>=M.current)return;let e=oe.current;N.current=!0;try{let t=j.current,n=M.current;for(let r=0;r<zg&&t.length<n;r++){let r=await ze(t.length,Lg,!1);if(e!==oe.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<Lg)break}if(e!==oe.current)return;j.current=t,M.current=n,(0,O.startTransition)(()=>{ee(t),w(n)})}catch{}finally{N.current=!1}},[]),ue=(0,O.useCallback)(e=>{F.current||=window.requestAnimationFrame(()=>{F.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<Rg&&le()})},[le]);(0,O.useEffect)(()=>{let e=se.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&le()},{root:e.parentElement,rootMargin:`${Rg}px 0px`});return t.observe(e),()=>t.disconnect()},[le]),(0,O.useEffect)(()=>{if(S.length>=C)return;let e=window.setTimeout(()=>{let e=se.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<Rg&&le()},200);return()=>window.clearTimeout(e)},[S.length,C,le]);let L=(0,O.useMemo)(()=>({path:``,parent:null,entries:S.map(Hg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[S]),de=(0,O.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),fe=(0,O.useCallback)(e=>{c?c(e):Se(e)},[c]),pe=(0,O.useCallback)(e=>{let t=Ug(e.modified);return{id:t,label:t}},[]),me=()=>{re(!0),ce(!0).finally(()=>re(!1))},z=S.length<C,he=(0,O.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:S.filter(e=>On(e.name,a)||On(e.path,a)),[S,a?.open,a?.query,a?.matchCase,a?.regex]),ge=(0,O.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:he[Math.min(a.index,Math.max(0,he.length-1))]?.path??null}:bn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,he]);(0,O.useEffect)(()=>{s?.(he.length)},[he.length,s]);let _e=(0,O.useCallback)(e=>{ie(e),l?.(e)},[l]),ve=e=>{ae(e),Bn(`yafm.preview.width`,e)},B=k.length>0?S.find(e=>e.path===k[0])??null:null,ye=B?.name.includes(`.`)?B.name.slice(B.name.lastIndexOf(`.`)+1).toUpperCase():`—`,be=B&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(B.name)?b(`Video`):b(`Picture`),xe=B?B.path.slice(0,Math.max(B.path.lastIndexOf(`\\`),B.path.lastIndexOf(`/`))):``,V=B?{name:B.name,path:B.path,isDirectory:!1,size:B.size,modified:B.modified,fields:[{label:b(`Type`),value:be},{label:b(`Extension`),value:ye},{label:b(`Location`),value:xe},{label:b(`Full path`),value:B.path},{label:b(`Size`),value:f(B.size)},{label:b(`Modified`),value:y(B.modified)},{label:b(`Created`),value:`—`}]}:null;return(0,I.jsxs)(Wg,{children:[(0,I.jsxs)(qg,{children:[(0,I.jsxs)(Yg,{children:[(0,I.jsx)(`span`,{children:b(`Gallery`)}),(0,I.jsx)(Xg,{children:te?b(`scanning…`):b(`{shown} of {total} pictures`,{shown:S.length,total:C})})]}),(0,I.jsxs)(Jg,{children:[(0,I.jsx)(Zg,{onClick:me,title:b(`Scan the folders again`),type:`button`,children:(0,I.jsx)(Qg,{$spinning:D,children:(0,I.jsx)(si,{size:14})})}),x.available&&(0,I.jsx)(Zg,{onClick:e=>x.open(e.clientX,e.clientY),title:b(`Selection menu`),type:`button`,children:(0,I.jsx)(ua,{size:14})})]})]}),E&&(0,I.jsx)(e_,{children:E}),!E&&!te&&C===0&&(0,I.jsx)(e_,{children:b(`No pictures found.`)}),!E&&(te||C>0)&&(0,I.jsxs)(Gg,{children:[(0,I.jsx)(Kg,{children:(0,I.jsx)(zc,{confirmDelete:n,find:ge,listing:te&&S.length===0?null:L,loading:te,error:null,view:de,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:_e,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:fe,onOpenFile:fe,onRefresh:me,onAddToTray:u,onAddFavorite:d,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,groupOf:pe,onGridScroll:ue,gridFooter:(0,I.jsx)($g,{$space:z?Bg:1,ref:se}),allowBackgroundMenu:!1})}),g&&(0,I.jsx)(qo,{emptyNote:b(`Nothing selected.`),info:V,onWidth:ve,selectionNote:k.length>1?o(b,k.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:_,videoAutoplay:v,width:A})]})]})}function Hg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function Ug(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(x(),{weekday:`long`}):t.toLocaleDateString(x(),{year:`numeric`,month:`long`,day:`numeric`})}var Wg=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Gg=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Kg=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,qg=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,Jg=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Yg=_.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Xg=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Zg=_.button`
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
`,Qg=_.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,$g=_.div`
    height: ${({$space:e})=>e}px;
`,e_=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function t_({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:u=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,O.useState)([]),_=R(),[y,b]=(0,O.useState)(null),x=In();(0,O.useEffect)(()=>{Ye().then(e=>{b(e),g(Ss(e).filter(e=>e.pinned))},()=>{b(null),g([])})},[c]),(0,O.useEffect)(()=>{if(!F.available)return;let e=h.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return F.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>F.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[h,s]);let S=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:y?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??y?.placeIcons?.[n]??null}}),ee=o===`files`;return(0,I.jsxs)(s_,{children:[(0,I.jsxs)(c_,{children:[!u.includes(`home`)&&(0,I.jsxs)(p_,{$active:o===`home`,onClick:e=>m(`home`,Kt(e)),title:_(`Overview`),type:`button`,children:[(0,I.jsx)(Ii,{}),(0,I.jsx)(h_,{children:_(`Overview`)})]}),!u.includes(`recycle`)&&(0,I.jsxs)(p_,{$active:o===`recycle`,onClick:e=>m(`recycle`,Kt(e)),title:_(`Recycle Bin`),type:`button`,children:[(0,I.jsx)(vi,{}),(0,I.jsx)(h_,{children:_(`Recycle Bin`)})]}),!u.includes(`gallery`)&&(0,I.jsxs)(p_,{$active:o===`gallery`,onClick:e=>m(`gallery`,Kt(e)),title:_(`Gallery`),type:`button`,children:[(0,I.jsx)(wi,{}),(0,I.jsx)(h_,{children:_(`Gallery`)})]})]}),h.map(e=>(0,I.jsxs)(u_,{children:[(0,I.jsxs)(p_,{as:`div`,$active:!1,children:[(0,I.jsx)(m_,{children:(0,I.jsx)(ws,{panel:e,size:16})}),(0,I.jsx)(h_,{children:_(e.title)})]}),(0,I.jsx)(d_,{children:(0,I.jsxs)(f_,{children:[e.kind===`quick`&&S(e).map(e=>(0,I.jsxs)(p_,{$active:ee&&t(a,e.path),onClick:t=>p(e.path,Kt(t)),title:e.path,type:`button`,children:[(0,I.jsx)(Ts,{place:e}),(0,I.jsx)(h_,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let n=Ln(x,e.path);return(0,I.jsxs)(p_,{$active:ee&&t(a,e.path),onClick:t=>e.isDirectory?p(e.path,Kt(t)):void Se(e.path),title:e.path,type:`button`,children:[n&&x.useIcons?(0,I.jsx)(Ts,{place:n}):(0,I.jsx)(Us,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,I.jsx)(h_,{children:n?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,I.jsx)(i_,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,I.jsxs)(p_,{$active:ee&&t(a,e.name),onClick:t=>p(e.name,Kt(t)),title:e.name,type:`button`,children:[(0,I.jsx)(ii,{}),(0,I.jsxs)(h_,{children:[d(e),(0,I.jsxs)(g_,{children:[f(e.freeSpace),` free`]}),(0,I.jsx)(__,{children:(0,I.jsx)(v_,{$used:n,$tone:E(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,I.jsx)(a_,{onNavigate:p,path:e.path||s})]})})]},e.id)),!u.includes(`settings`)&&(0,I.jsx)(l_,{children:(0,I.jsxs)(p_,{$active:o===`settings`,onClick:e=>m(`settings`,Kt(e)),title:_(`Settings`),type:`button`,children:[(0,I.jsx)(fi,{}),(0,I.jsx)(h_,{children:_(`Settings`)})]})})]})}var n_=10,r_=40;function i_({historyVersion:e=0,onNavigate:t}){let n=R(),[r,i]=(0,O.useState)(null),a=In();return(0,O.useEffect)(()=>{Ve().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Ln(a,e.path);return(0,I.jsxs)(p_,{$active:!1,onClick:n=>t(e.path,Kt(n)),title:o(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,I.jsx)(Ts,{place:r}):(0,I.jsx)(Us,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,I.jsx)(h_,{children:r?.name||e.name})]},e.path)})}function a_({path:e,onNavigate:n}){let[r,i]=(0,O.useState)(null);(0,O.useEffect)(()=>{e&&(i(null),V(e,!1).then(i,()=>i(null)))},[e]),(0,O.useEffect)(()=>{if(e&&F.available)return F.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&V(e,!1).then(i,()=>void 0)})},[e]);let a=r?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,n_),s=a.filter(e=>!e.isDirectory).slice(0,r_);return(0,I.jsxs)(I.Fragment,{children:[o.map(e=>(0,I.jsx)(o_,{entry:e,onNavigate:n},e.fullPath)),s.map(e=>(0,I.jsx)(o_,{entry:e,onNavigate:n},e.fullPath))]})}function o_({entry:e,onNavigate:t}){let n=In(),r=Ln(n,e.fullPath);return(0,I.jsxs)(p_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Kt(n)):void Se(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,I.jsx)(Ts,{place:r}):(0,I.jsx)(Us,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,I.jsx)(h_,{children:r?.name||e.name})]})}var s_=_.aside`
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

    &:not(:hover) ${()=>g_},
    &:not(:hover) ${()=>__} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,c_=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,l_=_(c_)`
    margin-top: auto;
`,u_=_.div`
    display: flex;
    flex-direction: column;
`,d_=_.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${s_}:hover ${u_}:hover > & {
        grid-template-rows: 1fr;
    }
`,f_=_.div`
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
`,p_=_.button`
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
`,m_=_.span`
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
`,h_=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,g_=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,__=_.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,v_=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,y_=_.span`
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
`;function b_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=R(),a=(0,O.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,O.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,I.jsxs)(S_,{ref:a,children:[(0,I.jsxs)(C_,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,I.jsx)(_i,{size:13}),c>0&&(0,I.jsx)(y_,{children:c>9?`9+`:c})]}),n&&(0,I.jsxs)(w_,{children:[(0,I.jsxs)(T_,{children:[(0,I.jsx)(E_,{children:i(`Status center`)}),(0,I.jsxs)(D_,{children:[(0,I.jsx)(O_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,I.jsx)(k_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,I.jsx)(bi,{size:10})})]})]}),e.length===0?(0,I.jsx)(j_,{children:i(`No operations yet.`)}):(0,I.jsx)(A_,{children:e.map(e=>(0,I.jsx)(x_,{task:e},e.id))})]})]})}function x_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,I.jsxs)(M_,{children:[(0,I.jsxs)(N_,{children:[(0,I.jsx)(P_,{$state:e.state,children:e.state===`done`?(0,I.jsx)(yi,{size:10}):e.state===`failed`?(0,I.jsx)(bi,{size:10}):(0,I.jsx)(F_,{})}),(0,I.jsx)(I_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,I.jsxs)(L_,{children:[f(e.bytesDone),` / `,f(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,I.jsxs)(L_,{children:[e.done,` / `,e.total]})]}),i&&(0,I.jsx)(R_,{children:(0,I.jsx)(z_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,I.jsx)(B_,{children:e.error})]})}var S_=_.div`
    position: relative;
    display: flex;
`,C_=_.button`
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
`,w_=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Ma}
    ${Ga}
`,T_=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,E_=_.span`
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
`,D_=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,O_=_.button`
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
`,k_=_.button`
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
`,A_=_.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,j_=_.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,M_=_.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${Ka}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,N_=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,P_=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,F_=_.span`
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
`,I_=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,L_=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,R_=_.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,z_=_.div`
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
`,B_=_.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function V_(){return F.available?(await F.request(`fs.history.list`)).entries:[]}async function H_(e){return F.available?(await F.request(`fs.history.undoTo`,{id:e})).ok:!1}function U_(){let e=R(),[t,n]=(0,O.useState)(!1),[r,i]=(0,O.useState)([]),[a,o]=(0,O.useState)(!1),s=(0,O.useRef)(null),c=()=>void V_().then(i,()=>i([]));(0,O.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await H_(e),c()}finally{o(!1)}};return(0,I.jsxs)(K_,{ref:s,children:[(0,I.jsx)(q_,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,I.jsx)(gi,{size:14})}),t&&(0,I.jsxs)(J_,{children:[(0,I.jsxs)(Y_,{children:[(0,I.jsx)(X_,{children:e(`History`)}),(0,I.jsx)(Z_,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,I.jsx)(bi,{size:10})})]}),r.length===0?(0,I.jsx)(ov,{children:e(`No operations yet.`)}):(0,I.jsx)(Q_,{children:r.map(t=>(0,I.jsxs)($_,{children:[(0,I.jsxs)(ev,{children:[(0,I.jsxs)(tv,{children:[(0,I.jsx)(G_,{label:t.label}),W_(e,t.label)]}),(0,I.jsx)(nv,{children:S(t.at)})]}),t.paths.length>0&&(0,I.jsxs)(rv,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,I.jsx)(iv,{children:(0,I.jsx)(av,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function W_(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);if(t===`Paste text`)return e(`Paste text`);if(t===`Paste image`)return e(`Paste image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function G_({label:e}){return e.startsWith(`Delete`)?(0,I.jsx)(vi,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,I.jsx)(ra,{size:13}):e.startsWith(`Rename`)?(0,I.jsx)(Li,{size:13}):e.startsWith(`Compress`)?(0,I.jsx)(Di,{size:13}):e.startsWith(`New`)?(0,I.jsx)(ci,{size:13}):(0,I.jsx)(ui,{size:13})}var K_=_.div`
    position: relative;
    display: flex;
`,q_=_.button`
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
`,J_=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Ma}
    ${Ga}
`,Y_=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,X_=_.span`
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
`,Z_=_.button`
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
`,Q_=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,$_=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,ev=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,tv=_.span`
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
`,nv=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,rv=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,iv=_.div`
    display: flex;
    justify-content: flex-end;
`,av=_.button`
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
`,ov=_.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function sv({currentFolder:e}){let n=R(),[r,i]=(0,O.useState)(!1),[a,o]=(0,O.useState)(null),[s,c]=(0,O.useState)(!1),l=(0,O.useRef)(null);(0,O.useEffect)(()=>{if(!r)return;let e=()=>void wd().then(o,()=>void 0);e();let t=window.setInterval(e,2500),n=e=>{l.current?.contains(e.target)||i(!1)};return window.addEventListener(`pointerdown`,n),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,n)}},[r]),(0,O.useEffect)(()=>{let e=()=>void wd().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(n=>t(n.path,e))??!1;return(0,I.jsxs)(cv,{ref:l,children:[(0,I.jsxs)(lv,{$active:r,onClick:()=>i(e=>!e),title:n(`Share folders`),type:`button`,children:[(0,I.jsx)(Zi,{size:15}),a&&a.shares.length>0&&(0,I.jsx)(y_,{children:a.shares.length>9?`9+`:a.shares.length})]}),r&&(0,I.jsxs)(uv,{children:[(0,I.jsxs)(dv,{children:[(0,I.jsx)(fv,{children:n(`Share`)}),(0,I.jsx)(pv,{onClick:()=>i(!1),title:n(`Close`),type:`button`,children:(0,I.jsx)(bi,{size:10})})]}),(0,I.jsxs)(mv,{children:[(0,I.jsxs)(hv,{children:[(0,I.jsx)(xi,{size:15}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:a?.deviceName||n(`This device`)}),(0,I.jsx)(gv,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,I.jsx)(_v,{children:n(`No folders are shared yet.`)}),a?.shares.map(e=>(0,I.jsxs)(vv,{children:[(0,I.jsxs)(yv,{children:[(0,I.jsx)(bv,{title:e.path,children:e.name}),(0,I.jsx)(Sv,{disabled:s,onClick:()=>void u(()=>Ed(e.id)),title:n(`Stop sharing`),type:`button`,children:(0,I.jsx)(bi,{size:10})})]}),(0,I.jsx)(xv,{title:e.path,children:e.path}),(0,I.jsxs)(Cv,{children:[(0,I.jsxs)(wv,{$active:e.mode===`client`,onClick:()=>void u(()=>Dd(e.id,`client`)),title:n(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,I.jsx)(xi,{size:11}),n(`App`)]}),(0,I.jsxs)(wv,{$active:e.mode===`web`,onClick:()=>void u(()=>Dd(e.id,`web`)),title:n(`Any device with a browser can open this folder.`),type:`button`,children:[(0,I.jsx)($i,{size:11}),n(`Web`)]})]})]},e.id)),(0,I.jsxs)(Tv,{disabled:s||e.length===0||d,onClick:()=>void u(()=>Td(e,`client`)),title:d?n(`This folder is already shared.`):e,type:`button`,children:[(0,I.jsx)(ci,{size:12}),n(`Share this folder`)]}),a?.webRunning&&(0,I.jsxs)(Ev,{children:[(0,I.jsxs)(Dv,{children:[(0,I.jsx)($i,{size:12}),n(`Browser access`)]}),a.urls.map(e=>(0,I.jsx)(Ov,{onClick:()=>void U(e),type:`button`,children:e},e)),(0,I.jsx)(gv,{children:n(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var cv=_.div`
    position: relative;
    display: flex;
`,lv=_.button`
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
`,uv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Ma}
    ${Ga}
`,dv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,fv=_.span`
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
`,pv=_.button`
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
`,mv=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,hv=_.div`
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
`,gv=_.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,_v=_.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,vv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,yv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,bv=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xv=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Sv=_.button`
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
`,Cv=_.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,wv=_.button`
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
`,Tv=_.button`
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
`,Ev=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,Dv=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Ov=_.button`
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
`;function kv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=R(),[s,c]=(0,O.useState)(!1),l=(0,O.useRef)(null);(0,O.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,O.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Ac.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,I.jsxs)(Av,{ref:l,children:[(0,I.jsx)(jv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,I.jsx)(hi,{size:14}):(0,I.jsx)(mi,{size:14})}),s&&(0,I.jsxs)(Mv,{children:[(0,I.jsx)(Nv,{children:o(`View`)}),(0,I.jsxs)(Fv,{children:[(0,I.jsxs)(Iv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,I.jsx)(mi,{size:12}),` `,o(`List`)]}),(0,I.jsxs)(Iv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,I.jsx)(hi,{size:12}),` `,o(`Grid`)]})]}),(0,I.jsx)(Nv,{children:o(`List icon size`)}),(0,I.jsxs)(Lv,{children:[(0,I.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,I.jsxs)(Rv,{children:[e.iconSize,`px`]})]}),(0,I.jsx)(Nv,{children:o(`Grid size`)}),(0,I.jsxs)(Lv,{children:[(0,I.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,I.jsxs)(Rv,{children:[e.gridSize,`px`]})]}),(0,I.jsxs)(Nv,{children:[o(`Columns`),(0,I.jsx)(Cm,{}),(0,I.jsx)(Pv,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`Reset column widths`),type:`button`,children:o(`Reset widths`)})]}),Ac.map(e=>(0,I.jsxs)(zv,{children:[(0,I.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,I.jsxs)(zv,{children:[(0,I.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,I.jsxs)(Nv,{children:[o(`Preview panel`),(0,I.jsx)(Cm,{})]}),(0,I.jsxs)(zv,{children:[(0,I.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var Av=_.div`
    position: relative;
    display: flex;
    height: 100%;
`,jv=_.button`
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
`,Mv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Ma}
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
`,Nv=_.div`
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
`,Pv=_.button`
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
`,Fv=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Iv=_.button`
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
`,Lv=_.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Rv=_.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,zv=_.label`
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
`,Bv=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Vv=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Hv=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Uv=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,I.jsx)(`path`,{d:`M2 5h6`})}),Wv=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,I.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Gv=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,I.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,I.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Kv({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:ee,onToggleDetails:C,shortcuts:w,currentFolder:te}){let T=R(),E=pe(),ne=me(),[D,re]=(0,O.useState)({left:!1,right:!1}),[k,ie]=(0,O.useState)(null),[A,ae]=(0,O.useState)(null),j=(0,O.useRef)(null),M=(0,O.useRef)(null),N=(0,O.useRef)(null),P=(0,O.useCallback)(()=>{let e=M.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;re(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,O.useEffect)(()=>{P();let e=M.current;if(!e)return;let t=new ResizeObserver(P);return t.observe(e),()=>t.disconnect()},[P,e.length]),(0,O.useEffect)(()=>()=>{j.current&&window.clearTimeout(j.current.timer)},[]),(0,O.useEffect)(()=>{N.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let oe=e=>M.current?.scrollBy({left:e,behavior:`smooth`}),se=()=>{j.current&&window.clearTimeout(j.current.timer),j.current=null,ae(null)};return(0,I.jsxs)(Xv,{children:[(0,I.jsx)(Zv,{children:(0,I.jsx)(xi,{size:19})}),(0,I.jsxs)(Qv,{children:[D.left&&(0,I.jsx)(ey,{onClick:()=>oe(-180),title:T(`Scroll tabs left`),type:`button`,children:(0,I.jsx)(Bv,{})}),(0,I.jsx)($v,{onScroll:P,onWheel:e=>{let t=M.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:M,children:e.map(e=>(0,I.jsxs)(ty,{$active:e.id===t,$dragging:k===e.id,$dropTarget:A===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Ks(t.dataTransfer)||!qv(e)||(t.preventDefault(),j.current?.id===e.id))return;se(),ae(e.id);let r=window.setTimeout(()=>{n(e.id),j.current=null},500);j.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(j.current?.id===e.id||A===e.id)&&se()},onDragEnd:()=>{ie(null),se()},onDragOver:t=>{(k||Ks(t.dataTransfer)&&qv(e))&&(t.preventDefault(),Ks(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>ie(e.id),onDrop:t=>{if(t.preventDefault(),k)a(k,e.id);else if(qv(e)&&Ks(t.dataTransfer)){let{paths:r,move:i}=qs(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}ie(null),se()},onClick:()=>n(e.id),ref:e.id===t?N:void 0,title:e.path||e.title,type:`button`,children:[(0,I.jsx)(Jv,{tab:e}),(0,I.jsx)(ny,{children:e.title}),e.partner&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ry,{children:`|`}),(0,I.jsx)(Yv,{place:e.partner.place}),(0,I.jsx)(ny,{children:e.partner.title})]}),(0,I.jsx)(iy,{"data-shortcut":Jt(w.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:T(`Close tab`),children:(0,I.jsx)(Hv,{})})]},e.id))}),D.right&&(0,I.jsx)(ey,{onClick:()=>oe(180),title:T(`Scroll tabs right`),type:`button`,children:(0,I.jsx)(Vv,{})}),(0,I.jsx)(ay,{"data-shortcut":Jt(w.newTab),onClick:i,title:T(`New tab`),type:`button`,children:(0,I.jsx)(ci,{size:13})})]}),(0,I.jsx)(oy,{...ne}),(0,I.jsxs)(sy,{children:[(0,I.jsx)(ly,{$active:y,"data-shortcut":Jt(w.splitView),disabled:!b,onClick:x,title:T(y?`Close split view`:`Split view`),type:`button`,children:(0,I.jsx)(ca,{size:15})}),(0,I.jsx)(ly,{$active:S,disabled:!ee,onClick:C,title:T(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,I.jsx)(la,{size:15})}),(0,I.jsxs)(cy,{$active:_,onClick:v,title:T(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,I.jsx)(Qi,{size:14}),g>0&&(0,I.jsx)(y_,{children:g>9?`9+`:g})]}),(0,I.jsx)(U_,{}),(0,I.jsx)(sv,{currentFolder:te}),(0,I.jsx)(b_,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,I.jsx)(kv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,I.jsx)(uy,{onClick:E.minimize,title:T(`Minimize`),type:`button`,children:(0,I.jsx)(Uv,{})}),(0,I.jsx)(uy,{onClick:E.toggleMaximize,title:E.maximized?T(`Restore`):T(`Maximize`),type:`button`,children:E.maximized?(0,I.jsx)(Gv,{}):(0,I.jsx)(Wv,{})}),(0,I.jsx)(dy,{onClick:E.close,title:T(`Close`),type:`button`,children:(0,I.jsx)(Hv,{})})]})]})}function qv(e){return e.kind===`files`&&(!p(e.path)||D(e.path))}function Jv({tab:e}){switch(e.kind){case`home`:return(0,I.jsx)(ti,{size:13});case`settings`:return(0,I.jsx)(fi,{size:13});case`recycle`:return(0,I.jsx)(vi,{size:13});default:return e.archive?(0,I.jsx)(Di,{size:13}):(0,I.jsx)(Yv,{place:e.place})}}function Yv({place:e}){return e?(0,I.jsx)(Ts,{place:e,size:13}):(0,I.jsx)(ni,{size:13})}var Xv=_.header`
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
`,Zv=_.span`
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
`,Qv=_.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,$v=_.div`
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
`,ey=_.button`
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
`,ty=_.button`
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
`,ny=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ry=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,iy=_.span`
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
`,ay=_.button`
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
`,oy=_.div`
    flex: 1;
    min-width: 28px;
`,sy=_.div`
    display: flex;
    flex-shrink: 0;
`,cy=_.button`
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
`,ly=_.button`
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
`,uy=_.button`
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
`,dy=_(uy)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function fy(){let[e,t]=(0,O.useState)(null),n=(0,O.useRef)(null),r=(0,O.useRef)(void 0);return(0,O.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,ja.createPortal)((0,I.jsx)(py,{tooltip:e}),document.body):null}function py({tooltip:e}){let t=(0,O.useRef)(null),[n,r]=(0,O.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,O.useState)(()=>e.bottom+6);return(0,O.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,I.jsxs)(my,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,I.jsx)(hy,{children:e.text}),e.shortcut&&(0,I.jsx)(gy,{children:e.shortcut})]})}var my=_.div`
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
    ${Ka}
`,hy=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,gy=_.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,_y={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function vy({deviceName:e,code:t,onAccept:n,onReject:r}){let i=R(),a=(0,O.useRef)(null);return(0,O.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,ja.createPortal)((0,I.jsx)(yy,{children:(0,I.jsxs)(by,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsxs)(xy,{children:[(0,I.jsx)(Zi,{size:15}),i(`Pair for sharing`)]}),(0,I.jsx)(Sy,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,I.jsx)(Cy,{children:t}),(0,I.jsx)(wy,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,I.jsxs)(Ty,{children:[(0,I.jsx)(Ey,{onClick:r,type:`button`,children:i(`Reject`)}),(0,I.jsx)(Dy,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var yy=_.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Ka}
`,by=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Va}
`,xy=_.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Sy=_.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,Cy=_.div`
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
`,wy=_.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Ty=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Ey=_.button`
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
`,Dy=_(Ey)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Oy=0,ky=new Set;function Ay(e){ky.add(e),F.send({type:`app.navigate.done`,payload:{path:e}})}var jy=20,My=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function Ny(e){return e.history[e.index]??vp(`home`)}function Py(e){return yp(Ny(e))??`files`}function Fy(e){let t=Ny(e);return yp(t)?``:e.listing?.path||t}function Iy(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Py(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Ly(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Ry(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||ye.iconSize,gridSize:e.view?.gridSize||t.gridSize||ye.gridSize,sort:e.view?.sort??ye.sort,sortDescending:e.view?.sortDescending??ye.sortDescending,columns:t.columns??be.columns??[]}}function zy(e=vp(`home`)){return Oy+=1,{id:`tab-${Oy}`,listing:null,loading:!yp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function By(e){return e instanceof Error?e.message:String(e)}function Vy(e){let t=Pd(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return Fd(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Hy(e){let t=v(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Uy(e){return p(e)?$t(e):void 0}function Wy(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:f(n)})}function Gy(){let e=R(),[n,r]=(0,O.useState)(()=>[zy()]),[i,a]=(0,O.useState)(()=>n[0].id),[o,s]=(0,O.useState)(null),[d,f]=(0,O.useState)(()=>{let e=zn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[m,h]=(0,O.useState)([]),[g,_]=(0,O.useState)([]),[y,b]=(0,O.useState)(null),[x,S]=(0,O.useState)(null),[w,te]=(0,O.useState)(null),T=z(),[E,ne]=(0,O.useState)(yn),[re,k]=(0,O.useState)(0),[ie,A]=(0,O.useState)(0),[ae,j]=(0,O.useState)(0),[M,N]=(0,O.useState)(yn),[P,oe]=(0,O.useState)(0),[se,ce]=(0,O.useState)(0),[le,ue]=(0,O.useState)(0),[L,de]=(0,O.useState)(0),fe=(0,O.useRef)(L);fe.current=L;let[pe,me]=(0,O.useState)([]),[he,_e]=(0,O.useState)(10),[B,xe]=(0,O.useState)(null),Ee=(0,O.useMemo)(()=>(B?.favorites??[]).map(e=>l(e.path)),[B?.favorites]),[Me,Ne]=(0,O.useState)(0),[H,Pe]=(0,O.useState)(Ut),[Fe,Ie]=(0,O.useState)(0),[Le,Re]=(0,O.useState)(0),[ze,Ve]=(0,O.useState)(0),[Ue,We]=(0,O.useState)(!0),[Ge,qe]=(0,O.useState)(()=>{let e=zn(`yafm.preview.width`,320);return e>=220?e:320}),[Je,Xe]=(0,O.useState)(null),[Ze,Qe]=(0,O.useState)(null),[$e,et]=(0,O.useState)(`primary`),[tt,nt]=(0,O.useState)(null),[rt,ot]=(0,O.useState)(null),[st,ut]=(0,O.useState)(null),[U,dt]=(0,O.useState)(null),[ft,pt]=(0,O.useState)({primary:0,secondary:0}),[mt,ht]=(0,O.useState)({primary:null,secondary:null}),[gt,_t]=(0,O.useState)(null),[yt,Tt]=(0,O.useState)([]),[Dt,Ot]=(0,O.useState)(!1),kt=(0,O.useRef)([]),jt=(0,O.useRef)([]),[Mt,Nt]=(0,O.useState)([]),[Pt,Ft]=(0,O.useState)(!1),Rt=(0,O.useMemo)(()=>Pt?new Set(Mt.map(e=>e.path)):new Set,[Mt,Pt]),[zt,Bt]=(0,O.useState)(!1),[Wt,Yt]=(0,O.useState)([]),[Zt,Qt]=(0,O.useState)(null),rn=(0,O.useRef)(0),[an,on]=(0,O.useState)(()=>{let e=Vn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Ly({x:e.x,y:e.y}):Ly({x:Math.max(20,window.innerWidth-340),y:110})}),sn=(0,O.useCallback)(()=>{on(e=>Ly(e)),Bt(!0)},[]),G=n.find(e=>e.id===i)??n[0],K=Py(G),un=Ny(G),q=Fy(G),dn=K===`files`?G.listing?.parent??Vy(q):null,fn=G.splitWith?n.find(e=>e.id===G.splitWith):void 0,pn=K===`files`&&fn!==void 0,mn=fn?Fy(fn):``,hn=fn?fn.listing?.parent??Vy(mn):null,gn=pn&&fn&&$e===`secondary`?fn:G,_n=B?.defaultView??be,vn=Ry(gn,_n);(0,O.useEffect)(()=>{ee(B?.accentColor,B?.secondaryColor)},[B?.accentColor,B?.secondaryColor]),(0,O.useEffect)(()=>{Dm(B?.fonts)},[B?.fonts]),(0,O.useEffect)(()=>{C(B?.timeFormat,B?.timeFormatPattern)},[B?.timeFormat,B?.timeFormatPattern]),(0,O.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!B?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[B?.backgroundSource]),(0,O.useEffect)(()=>(ve(e=>new Promise(t=>{Qt({id:++rn.current,prompt:e,resolve:t})})),()=>ve(null)),[]),(0,O.useEffect)(()=>{et(`primary`)},[i]),(0,O.useEffect)(()=>{N(yn),ce(0),ue(0)},[K]),(0,O.useEffect)(()=>{ce(0)},[M.query,M.matchCase,M.regex]),(0,O.useEffect)(()=>{ce(e=>le===0?0:Math.min(e,le-1))},[le]);let bn=vn.columns.includes(`linkCount`),xn=(0,O.useMemo)(()=>{let e={},t=Ss(B),n={};for(let[e,t]of Object.entries(B?.placeNames??{}))n[l(e)]=t;for(let t of m)e[l(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=l(t),i=m.find(e=>l(e.path)===r);e[r]={name:n[r]??i?.name??(v(t)||t),path:t,kind:`folder`,icon:i?.icon??B?.placeIcons?.[t]??null}}return e},[m,B]),Sn=(0,O.useMemo)(()=>({places:xn,useIcons:B?.systemIcons===!1}),[xn,B?.systemIcons]),Cn=B?.defaultView?.showImages??!0,wn=B?.defaultView?.imageStripHeight??be.imageStripHeight,Tn=K===`home`?(0,I.jsx)(Ii,{size:13}):K===`settings`?(0,I.jsx)(fi,{size:13}):K===`recycle`?(0,I.jsx)(vi,{size:13}):K===`gallery`?(0,I.jsx)(wi,{size:13}):void 0,En=E.open&&E.query.length>0,Dn=(0,O.useMemo)(()=>En&&gn.listing?gn.listing.entries.filter(e=>On(e.isDirectory?Rn(Sn,e.fullPath,e.name):e.name,E)).map(e=>e.fullPath):[],[En,E,gn.listing,Sn]);(0,O.useEffect)(()=>{k(0)},[E.query,E.matchCase,E.regex,gn.listing?.path]);let kn=Dn.length===0?-1:Math.min(re,Dn.length-1),An=(0,O.useCallback)(()=>{ne(e=>({...e,open:!1,query:``})),k(0)},[]),jn=(0,O.useCallback)(()=>{ne(e=>({...e,open:!0})),A(e=>e+1)},[]),Mn=(0,O.useCallback)(()=>{N(e=>({...e,open:!0})),oe(e=>e+1)},[]),Nn=(0,O.useCallback)(()=>{N(yn),ce(0),ue(0)},[]),Pn=(0,O.useCallback)(e=>{ce(t=>le===0?0:(Math.min(t,le-1)+e+le)%le)},[le]),In=(0,O.useCallback)(e=>{ne(t=>({...t,open:!0,query:t.open?t.query+e:e})),A(e=>e+1)},[]),Un=(0,O.useCallback)(e=>{k(t=>Dn.length===0?0:(Math.min(t,Dn.length-1)+e+Dn.length)%Dn.length)},[Dn.length]),Wn=(0,O.useRef)({tabs:n,activeId:i,activePane:$e});Wn.current={tabs:n,activeId:i,activePane:$e};let Gn=(0,O.useRef)(B);Gn.current=B;let Kn=(0,O.useRef)(!1),qn=(0,O.useRef)([]),Jn=(0,O.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Yn=(0,O.useRef)(new Map),Xn=(0,O.useCallback)(e=>{let t=(Yn.current.get(e)??0)+1;return Yn.current.set(e,t),()=>Yn.current.get(e)===t},[]),Zn=(0,O.useCallback)((e,t)=>{F.available&&t&&e===Iy(Wn.current)&&F.send({type:`fs.focus`,payload:{path:t}})},[]),Qn=(0,O.useCallback)(async(e,t,n)=>{if(!(t&&Nd(t)))try{let r=await ke(t,bn);if(!n()||!r.listing)return;Jn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[bn,Jn]),$n=(0,O.useCallback)(async(e,n,r=!1)=>{let i=Xn(e);An(),Zn(e,n);let a=!r||!Wn.current.tabs.find(t=>t.id===e)?.listing,o=!r&&n!==void 0;Jn(e,e=>{if(!o)return{listing:r?e.listing:null,loading:!0,error:null,fresh:r&&e.fresh};let i=e.history[e.index],a=i!==void 0&&t(i,n);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),n],index:a?e.index:e.index+1}});try{a&&Qn(e,n,i);let t=n&&Nd(n)?await Id(n):await V(n,!0,bn,fe.current,n?Uy(n):void 0);if(!i())return;Jn(e,e=>({listing:t,view:t.view??null,loading:!1,fresh:!1,history:o?e.history.map((n,r)=>r===e.index?t.path:n):e.history,index:e.index})),!r&&!Nd(t.path)&&He(t.path).then(()=>Ne(e=>e+1))}catch(t){if(!i())return;let a=Wn.current.tabs.find(t=>t.id===e),o=n&&n.length>0?n:a?Fy(a):``,s=Vy(o),c=By(t);if(o&&nn(c)){let t=u(o),a=await xa(t,!!$t(t));if(a){en(t,a),i()&&$n(e,n,r);return}}Jn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...r?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Xn,bn,Jn,Zn,An,Qn]),er=(0,O.useCallback)((e,t)=>{let n=bp(t);n&&(yp(n)?(An(),Xn(e),Jn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):$n(e,n))},[Xn,$n,Jn,An]),tr=(0,O.useCallback)(async(e,t,n)=>{if(An(),yp(t)){Xn(e),Jn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Xn(e);Zn(e,t),Jn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Nd(t)||Qn(e,t,r);let n=Nd(t)?await Id(t):await V(t,!0,bn,fe.current,Uy(t));if(!r())return;Jn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(nn(By(i))){let i=u(t),a=await xa(i,!!$t(i));if(a){en(i,a),r()&&tr(e,t,n);return}}Jn(e,()=>({listing:{path:t,parent:Vy(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:By(i)}))}},[Xn,bn,Jn,Zn,An,Qn]),nr=(0,O.useCallback)((e,t=!0)=>{let n=zy(e??vp(`home`));return r(e=>[...e,n]),t&&a(n.id),e&&!yp(e)&&$n(n.id,e),n.id},[$n]),rr=(0,O.useCallback)(e=>{for(let n of Wn.current.tabs)Py(n)===`files`&&t(Fy(n),e)&&$n(n.id,e,!0)},[$n]),ir=(0,O.useCallback)((e,n)=>{let r=v(n);for(let i of Wn.current.tabs)i.listing?.entries.some(n=>t(n.fullPath,e))&&Jn(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>t(i.fullPath,e)?{...i,name:r,fullPath:n}:i);return{listing:{...a,entries:o}}})},[Jn]),ar=(0,O.useRef)([]);(0,O.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&p(n)&&e.add(l(u(n)))}let t=ar.current.filter(t=>!e.has(t));ar.current=[...e],t.length>0&&Te(t)},[n]);let or=(0,O.useCallback)((e,t=!1)=>{t?nr(vp(e)):er(Wn.current.activeId,vp(e))},[nr,er]),sr=(0,O.useCallback)(e=>{let{tabs:t,activeId:n}=Wn.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(jt.current.push(Ny(i)),jt.current.length>jy&&jt.current.shift()),o.length===0){let e=zy();r([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);r(o),n===e&&a(o[Math.min(s,o.length-1)].id)},[]),cr=(0,O.useCallback)(()=>{let e=jt.current.pop();if(!e)return;let t={...zy(e),fresh:!1};r(e=>[...e,t]),a(t.id),Py(t)===`files`&&$n(t.id,Fy(t))},[$n]),lr=(0,O.useCallback)((e,t=!1)=>{t?nr(e):er(Iy(Wn.current),e??vp(`home`))},[er,nr]),ur=(0,O.useCallback)(e=>{let{tabs:t,activeId:n}=Wn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),dr=(0,O.useCallback)(()=>{let{tabs:e,activeId:t}=Wn.current,n=e.find(e=>e.id===t);if(!n||Py(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),Jn(t,()=>({splitWith:void 0})),et(`primary`);return}let a=Fy(n),o={...zy(a),hidden:!0};r(e=>[...e,o]),Jn(t,()=>({splitWith:o.id})),$n(o.id,a),et(`primary`)},[$n,Jn]),fr=(0,O.useCallback)(e=>{qe(e),Bn(`yafm.preview.width`,e)},[]),pr=pn?$e===`secondary`?Ze??Je:Je??Ze:Je,mr=(0,O.useRef)(null),hr=e=>{e.preventDefault();let t=mr.current?.getBoundingClientRect();if(!t)return;let n=Ue?Ge:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);f(n),Bn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},gr=(e,t,n)=>{t&&nt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},_r=(0,O.useCallback)((e,t)=>{pt(n=>n[e]===t?n:{...n,[e]:t})},[]),vr=(0,O.useCallback)(e=>_r(`primary`,e),[_r]),yr=(0,O.useCallback)(e=>_r(`secondary`,e),[_r]),br=(e,t)=>{ft[e]!==0&&ht(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},xr=async(e,t=!1)=>{let n=tt;if(nt(null),!n)return;let r=e===null?await Et(n.directory,t):await At(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;An(),_t(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Sr=(0,O.useCallback)(()=>{let{tabs:e}=Wn.current,t=e.find(e=>e.id===Iy(Wn.current));t&&t.index>0&&tr(t.id,t.history[t.index-1],t.index-1)},[tr]),Cr=(0,O.useCallback)(()=>{let{tabs:e}=Wn.current,t=e.find(e=>e.id===Iy(Wn.current));t&&t.index<t.history.length-1&&tr(t.id,t.history[t.index+1],t.index+1)},[tr]),wr=(0,O.useCallback)(()=>{let{tabs:e}=Wn.current,t=e.find(e=>e.id===Iy(Wn.current));t&&Py(t)===`files`&&t.listing?.parent&&lr(t.listing.parent)},[lr]),Tr=(0,O.useRef)(null),Er=(0,O.useCallback)(()=>{for(let e of Wn.current.tabs)e.listing&&$n(e.id,e.listing.path,!0)},[$n]),Dr=(0,O.useCallback)(e=>{e.length!==0&&(Yt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),sn())},[sn]),Or=(0,O.useCallback)(async e=>{let t=await St(e);t.length!==0&&Dr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Dr]),kr=(0,O.useCallback)(e=>{let t=new Set(e);Yt(e=>e.filter(e=>!t.has(e.path)))},[]),Ar=(0,O.useCallback)(async e=>{let t=Gn.current;if(!t)return;let n=await St(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>l(e.path))),i=n.filter(e=>!r.has(l(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};xe(a),await it(a),Ie(e=>e+1)},[]),jr=(0,O.useCallback)(async e=>{let t=Gn.current;if(!t)return;let n=new Set(e.map(l)),r=(t.favorites??[]).filter(e=>!n.has(l(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};xe(i),await it(i),Ie(e=>e+1)},[]),Mr=(0,O.useCallback)(()=>Yt([]),[]),Nr=(0,O.useRef)(-1),Pr=(0,O.useCallback)(e=>{Nt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Ft(e.move),e.entries.length>0&&sn()},[sn]),Fr=(0,O.useCallback)(async()=>{if(F.available)try{let e=await bt();Nr.current=e.sequence,Pr(e)}catch{}},[Pr]),Ir=(0,O.useCallback)(async e=>{e.length!==0&&await vt(e,!1)&&await Fr()},[Fr]),Lr=(0,O.useRef)(Wt);Lr.current=Wt,(0,O.useEffect)(()=>{let e=e=>{Ks(e.dataTransfer)&&sn()},t=e=>{Ks(e.dataTransfer)&&sn()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[sn]),(0,O.useEffect)(()=>{let e=()=>on(e=>Ly(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Rr=(0,O.useCallback)(async()=>{let e=Lr.current;if(e.length>0){let t=await St(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Yt(e=>e.filter(e=>n.has(e.path)))}await Fr()},[Fr]),zr=(0,O.useCallback)(()=>{Rr(),Ve(e=>e+1),Er()},[Rr,Er]),Br=(0,O.useCallback)(e=>{let t=Ly(e);on(t),Hn(`yafm.tray.position`,t)},[]),Vr=(0,O.useCallback)(()=>{zt?Bt(!1):sn()},[sn,zt]),Hr=(0,O.useCallback)(async(t,n,r)=>{let i=await xt(t,n,r);i.ok?(r&&kr(t),Ve(e=>e+1),Er(),Fr()):ya(i.error??e(`The files could not be transferred.`))},[Er,Fr,kr]);(0,O.useEffect)(()=>{if(F.available)return W().then(e=>{kt.current=e,Tt(e)},()=>void 0),F.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=kt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});kt.current=n,Tt(n),r&&Ot(!0)})},[]);let Ur=(0,O.useCallback)(()=>{Ht().then(()=>W().then(e=>{kt.current=e,Tt(e)},()=>void 0))},[]);(0,O.useEffect)(()=>{if(!F.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await bt();if(!e||t.sequence===Nr.current)return;Nr.current=t.sequence,Pr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Pr]);let Wr=(0,O.useCallback)(async e=>{let t=e?await It():await Lt();t.ok?(Ve(e=>e+1),Er()):t.error&&!t.error.startsWith(`Nothing to`)&&ya(t.error)},[Er]),Gr=(0,O.useRef)(bn);(0,O.useEffect)(()=>{Gr.current!==bn&&(Gr.current=bn,Er())},[bn,Er]);let Kr=(0,O.useCallback)((e,t)=>{let{tabs:n}=Wn.current,r=n.find(t=>t.id===e);if(!r||Py(r)!==`files`)return;let i=Fy(r),a=Gn.current?.defaultView??be,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||ye.iconSize,gridSize:r.view?.gridSize||a.gridSize||ye.gridSize,sort:r.view?.sort??ye.sort,sortDescending:r.view?.sortDescending??ye.sortDescending,...t};Jn(e,()=>({view:o})),Tr.current!==null&&window.clearTimeout(Tr.current),Tr.current=window.setTimeout(()=>{Tr.current=null,De(i,o)},250)},[Jn]),qr=(0,O.useCallback)(e=>{Kr(Iy(Wn.current),e)},[Kr]),Jr=(0,O.useCallback)(e=>{let t=Gn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,columns:e}};xe(n),it(n)},[]),Yr=(0,O.useCallback)(e=>{let t=Gn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,showImages:e}};xe(n),it(n)},[]),Xr=(0,O.useCallback)(e=>{let t=Gn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,imageStripHeight:e}};xe(n),it(n)},[]),Zr=(0,O.useCallback)((e,t,n,r)=>{let i=Wn.current.tabs.find(t=>t.id===e);if(!i||Py(i)!==`files`||!i.listing)return;let a=Fy(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Jn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Oe(a,t,n,r)},[Jn]),Qr=(0,O.useCallback)((e,t)=>{let n=Wn.current.tabs.find(t=>t.id===e);if(!n)return;let r=Ry(n,Gn.current?.defaultView??be);Kr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Kr]),$r=(0,O.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),ei=(0,O.useCallback)(()=>{Ae().then(h,()=>h([]))},[]),J=(0,O.useCallback)(e=>{let t=(e.openTabs??[]).map(bp).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...zy(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),a(n[i].id);for(let e of n)Py(e)===`files`&&$n(e.id,Fy(e),!0);return!0},[$n]),ti=(0,O.useCallback)(e=>{let t=qn.current;if(qn.current=[],t.length===0)return;let n=t.filter(e=>!ky.has(e));for(let e of t)n.includes(e)||Ay(e);if(n.length===0)return;let{tabs:r}=Wn.current;if(!e&&r.length===1&&r[0].fresh){er(r[0].id,n[0]),Ay(n[0]);for(let e of n.slice(1))nr(e),Ay(e);return}let i=n.map(e=>{let t=nr(e);return Ay(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[nr,er]),ni=(0,O.useCallback)(()=>{Ye().then(e=>{xe(e),_e(e.recentLimit);let t={...Ut,...e.shortcuts};Pe(t),Gt(t.openInNewTab),Ie(e=>e+1),Kn.current||(Kn.current=!0,ti(e.restoreTabs&&J(e)))},()=>{_e(10),Kn.current=!0,ti(!1)})},[ti,J]),ri=(0,O.useCallback)(()=>{Be().then(me,()=>me([]))},[]),ii=(0,O.useCallback)(()=>{je().then(_,()=>_([]))},[]),si=n.filter(e=>!e.hidden),di=si.map(Ny),pi=di.join(`
`),mi=Math.max(si.findIndex(e=>e.id===i),0);(0,O.useEffect)(()=>{if(!B?.restoreTabs)return;let e=setTimeout(()=>void at(di,mi),700);return()=>clearTimeout(e)},[pi,mi,B?.restoreTabs]),(0,O.useEffect)(()=>{let{tabs:e,activeId:t}=Wn.current,n=e.find(e=>e.id===t);n&&n.fresh&&Py(n)===`files`&&$n(n.id,Fy(n),!0),ei(),ni(),ii(),ct().then(b,()=>b(null))},[$n,ei,ni,ii]),(0,O.useEffect)(()=>{if(lt().then(S,()=>S(null)),F.available)return F.on(e=>{let t=e;t.type===`app.update`&&t.data&&S(t.data)})},[]),(0,O.useEffect)(()=>{if(F.available)return F.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&s({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&ya(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&ya(n.data.error??e(`Pairing failed.`))}})},[e]),(0,O.useEffect)(()=>{let e=setInterval(ii,3e4);return()=>clearInterval(e)},[ii]),(0,O.useEffect)(()=>{K===`home`&&(ri(),ii())},[K,G.id,ri,ii]),(0,O.useEffect)(()=>{if(!F.available)return;let e=F.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Wn.current,i=t.data.startup===!0;i&&ky.has(n)?Ay(n):i&&!Kn.current?qn.current.includes(n)||qn.current.push(n):(i&&r.length===1&&r[0].fresh?er(r[0].id,n):yp(n)?er(Iy(Wn.current),n):nr(n),i&&Ay(n))});return F.send({type:`app.ready`}),e},[er,nr]),(0,O.useEffect)(()=>{if(F.available)return F.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},r})})},[]),(0,O.useEffect)(()=>{if(F.available)return F.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},r})})},[]),(0,O.useEffect)(()=>{let e=e=>{if(Xt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Sr();return}if(e.key===`BrowserForward`){e.preventDefault(),Cr();return}if(e.key===`Escape`&&E.open){e.preventDefault(),An();return}let t=qt(e);if(t===H.closeTab)e.preventDefault(),sr(Iy(Wn.current));else if(t===H.newTab)e.preventDefault(),nr();else if(t===H.reopenTab)e.preventDefault(),cr();else if(t===H.goBack)e.preventDefault(),Sr();else if(t===H.goForward)e.preventDefault(),Cr();else if(t===H.goUp)e.preventDefault(),wr();else if(t===H.find)e.preventDefault(),K===`files`?jn():Mn();else if(t===H.location)e.preventDefault(),Re(e=>e+1);else if(t===H.home){e.preventDefault();let t=m.find(e=>e.kind===`home`)?.path;t&&lr(t)}else t===H.iconsView?(e.preventDefault(),K===`files`&&qr({mode:`grid`})):t===H.detailsView?(e.preventDefault(),K===`files`&&qr({mode:`list`})):t===H.nextTab?(e.preventDefault(),ur(1)):t===H.previousTab?(e.preventDefault(),ur(-1)):t===H.hidden||t===`alt+.`?(e.preventDefault(),Ke().then(()=>{Ve(e=>e+1),Er()})):t===H.undo?(e.preventDefault(),Wr(!0)):t===H.redo?(e.preventDefault(),Wr(!1)):t===H.splitView?(e.preventDefault(),dr()):K!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),In(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[H,K,E.open,sr,cr,nr,Sr,Cr,wr,jn,Mn,An,In,qr,ur,lr,m,Er,Wr,dr]),(0,O.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Sr()):e.button===4&&(e.preventDefault(),Cr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Sr,Cr]);let hi=(0,O.useMemo)(()=>{let e=new Set;for(let t of n){if(Py(t)!==`files`)continue;let n=Fy(t);if(n&&!Nd(n)){if(p(n)){let t=Vy(u(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),gi=hi.join(`\0`);(0,O.useEffect)(()=>{F.available&&F.send({type:`fs.watch`,payload:{paths:hi,owner:`app`}})},[gi,i]);let _i=Py(gn)===`files`?Fy(gn):``;(0,O.useEffect)(()=>{F.available&&F.send({type:`fs.focus`,payload:{path:_i||null}})},[_i]),(0,O.useEffect)(()=>{if(F.available)return F.on(e=>{let n=e;if(n.type!==`fs.changed`||typeof n.data?.path!=`string`)return;let r=n.data.path,i=Wn.current.tabs.filter(e=>Py(e)===`files`&&t(Fy(e),r)),a=Wn.current.tabs.filter(e=>{let n=Fy(e);return Py(e)===`files`&&n.length>0&&p(n)&&t(u(n),r)});if(i.length!==0||a.length!==0){ln(r);for(let e of a){let n=Wn.current.tabs.find(t=>t.id===e.id),i=n?Fy(n):``;n&&Py(n)===`files`&&!n.loading&&p(i)&&t(u(i),r)&&$n(e.id,i,!0)}i.length!==0&&V(r,!1,bn).then(e=>{for(let n of i){let r=Wn.current.tabs.find(e=>e.id===n.id);r&&Py(r)===`files`&&t(Fy(r),e.path)&&(r.loading?window.setTimeout(()=>{let r=Wn.current.tabs.find(e=>e.id===n.id);r&&!r.loading&&Py(r)===`files`&&t(Fy(r),e.path)&&Jn(n.id,()=>({listing:e}))},300):Jn(n.id,()=>({listing:e})))}},()=>void 0)}})},[bn,$n,Jn]);let yi=G.index>0,bi=G.index<G.history.length-1,xi=(e,n)=>{let r=Ry(e,_n),i=e.listing?.path??e.history[e.index]??``,a=p(i),o=a&&D(i);return(0,I.jsx)(zc,{confirmDelete:B?.confirmDelete??!1,cutPaths:Rt,previewVideoAudio:B?.previewVideoAudio??!1,previewVideoAutoplay:B?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:n?Xe:Qe,onActivate:()=>et(n?`primary`:`secondary`),enableShortcuts:(!pn||(n?$e===`primary`:$e===`secondary`))&&(!a||o),error:e.error,find:e.id===gn.id?{...E,currentPath:kn<0?null:Dn[kn]}:void 0,selectMatchesToken:e.id===gn.id?ae:0,imageStripHeight:wn,listing:e.listing,loading:e.loading,onImageStripHeight:Xr,readOnly:a&&!o||Nd(e.listing?.path??``),onOpen:(t,n)=>{n?nr(t):$n(e.id,t)},onOpenFile:(t,n)=>{Nd(t)?Rd(t).catch(e=>void ya(By(e))):c(t)?B?.archiveHandler??!1?n?nr(t):$n(e.id,t):Se(t):p(t)?(async()=>{let e=await we(t,fe.current,Uy(t));if(!e.path&&nn(e.error)){let n=u(t),r=$t(n);r&&tn(n);let i=await xa(n,!!r);i&&(en(n,i),e=await we(t,fe.current,i))}e.path?Se(e.path):e.error&&ya(e.error)})():Se(t)},onRefresh:()=>{let t=e.listing?.path;t&&rr(t)},onRename:ir,onSelectionCountChange:n?vr:yr,onSetTags:(t,n,r)=>Zr(e.id,t,n,r),selectionMenuRequest:n?mt.primary:mt.secondary,onSort:t=>Qr(e.id,t),onPaste:zr,onClipboardChanged:()=>void Fr(),onTransfer:Hr,onAddToTray:e=>void Or(e),onAddFavorite:e=>void Ar(e),onRemoveFavorite:e=>void jr(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void ki(e,t),openOnSingleClick:B?.openOnSingleClick??!1,pendingRename:gt&&n===($e===`primary`)&&t(gt.directory,e.listing?.path??``)?gt.path:null,pendingRenameToken:gt?.token??0,refreshToken:ze,shortcuts:H,showCheckboxes:B?.showCheckboxes??!0,showImages:Cn,view:r})},Si=E.open&&(0,I.jsx)(fd,{current:kn,focusToken:ie,matchCase:E.matchCase,mode:E.mode,onClose:An,onMatchCase:()=>ne(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ne(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Un(1),onPrevious:()=>Un(-1),onQuery:e=>ne(t=>({...t,query:e})),onRegex:()=>ne(e=>({...e,regex:!e.regex})),query:E.query,regex:E.regex,total:Dn.length,onSelectMatches:Dn.length>0?()=>j(e=>e+1):void 0}),Ci=K===`files`&&p(q),Ti=Ci&&D(q),Ei=Ci&&G.listing?.archiveEncrypted===!0,Oi=async(t,n)=>{let r=u(t),i=await Ce(r,n,fe.current,Uy(r));if(!i.ok&&nn(i.error)){let e=$t(r);e&&tn(r);let t=await xa(r,!!e);t&&(en(r,t),i=await Ce(r,n,fe.current,t))}i.ok?(rr(n),cn(),$n(G.id,n,!0)):ya(`${e(`Could not extract the archive.`)}${i.error?`\n${i.error}`:``}`)},ki=async(e,n)=>{let r=u(e),i=Vy(r);if(!i)return;if(n===`choose`){let e=await ma(i);e&&await Oi(r,e);return}let a=n===`named`;if(n===`auto`){let e=t(r,q)?G.listing?.entries??[]:(await V(r,!1,!1,fe.current,Uy(r))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${Hy(r)}`:i;await Oi(r,s)},Ai=async e=>{Ci&&await ki(q,e)},ji=async()=>{Ci&&await ki(q,`choose`)},Mi=(0,I.jsxs)(Xy,{children:[(0,I.jsx)(Zy,{"data-shortcut":Jt(H.goBack),disabled:!yi,onClick:e=>{G.index>0&&Kt(e)?nr(G.history[G.index-1]):Sr()},title:e(`Back`),type:`button`,children:(0,I.jsx)(li,{})}),(0,I.jsx)(Zy,{"data-shortcut":Jt(H.goForward),disabled:!bi,onClick:e=>{G.index<G.history.length-1&&Kt(e)?nr(G.history[G.index+1]):Cr()},title:e(`Forward`),type:`button`,children:(0,I.jsx)(ui,{})}),(0,I.jsx)(Zy,{"data-shortcut":Jt(H.goUp),disabled:K!==`files`||!dn,onClick:e=>{dn&&(Kt(e)?nr(dn):lr(dn))},title:e(`Up one level`),type:`button`,children:(0,I.jsx)(oi,{})}),(0,I.jsx)(xp,{focusToken:Le,icon:Tn,label:K===`files`?void 0:e(_y[K]),onContextMenu:K===`files`?(e,t,n)=>ut({x:t,y:n,path:e}):void 0,onNavigate:lr,path:K===`files`?q:un}),K===`files`&&(!Ci||Ti)&&(0,I.jsx)(Zy,{onClick:e=>gr(e,q,()=>void $n(G.id,q,!0)),title:e(`New folder or file`),type:`button`,children:(0,I.jsx)(ci,{})}),(0,I.jsx)(Zy,{"data-shortcut":Jt(H.find),onClick:()=>K===`files`?jn():Mn(),title:e(`Search`),type:`button`,children:(0,I.jsx)(ai,{})}),ft.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(eb,{}),(0,I.jsx)(Zy,{onClick:e=>br(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,I.jsx)(ua,{})})]}),Ci&&(0,I.jsxs)(Qy,{children:[(0,I.jsx)(eb,{}),Ei&&(0,I.jsxs)($y,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,I.jsx)(da,{size:12}),e(`Encrypted`)]}),(0,I.jsx)(Zy,{onClick:()=>void ji(),onContextMenu:e=>{e.preventDefault(),ot({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,I.jsx)(Di,{})}),(0,I.jsx)(lo,{icon:(0,I.jsx)($i,{size:15}),onChange:e=>{let t=Number(e);de(t),fe.current=t,Ci&&$n(G.id,q,!0)},options:My.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(My.find(e=>e.value===String(L))?.label??`Auto`)}`,value:String(L)})]})]}),Ni=M.open?{...M,index:se}:null;return(0,I.jsx)(Fn,{value:Sn,children:(0,I.jsxs)(Ky,{$rounded:T,children:[(0,I.jsx)(ku,{settings:B}),(0,I.jsx)(Kv,{activeId:G.id,onClose:sr,onNewTab:()=>nr(),onReorder:$r,onTransferToTab:Hr,onSelect:a,onViewChange:qr,onColumns:Jr,onShowImages:Yr,showImages:Cn,tasks:yt,onClearTasks:Ur,activityOpen:Dt,onActivityOpenChange:Ot,trayCount:Wt.length+Mt.length,trayVisible:zt,onToggleTray:Vr,split:pn,canSplit:K===`files`,onToggleSplit:dr,details:Ue,canDetails:K===`files`||K===`recycle`||K===`gallery`,onToggleDetails:()=>We(e=>!e),currentFolder:K===`files`&&!Nd(q)?q:``,shortcuts:H,view:vn,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Py(t),i=Fy(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Fy(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Ln(Sn,i):void 0,archive:r===`files`&&p(i),split:!!a,title:r===`files`?Rn(Sn,i,v(i)||e(`Files`)):e(_y[r]),partner:a?{title:Rn(Sn,o,v(o)||e(`Files`)),place:Ln(Sn,o)}:void 0}})}),(0,I.jsxs)(qy,{children:[(0,I.jsx)(t_,{activeKind:K,currentPath:K===`files`?un:``,drives:g,historyVersion:Me,onNavigate:lr,onOpenView:or,homePath:m.find(e=>e.kind===`home`)?.path??``,places:m,recent:pe,recentLimit:he,version:Fe}),(0,I.jsxs)(Jy,{children:[K!==`files`&&Mi,(0,I.jsxs)(Yy,{children:[K!==`files`&&M.open&&(0,I.jsx)(fd,{current:se,focusToken:P,matchCase:M.matchCase,mode:M.mode,onClose:Nn,onMatchCase:()=>N(e=>({...e,matchCase:!e.matchCase})),onMode:()=>N(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Pn(1),onPrevious:()=>Pn(-1),onQuery:e=>N(t=>({...t,query:e})),onRegex:()=>N(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:M.query,regex:M.regex,total:le}),K===`files`?pn&&fn?(0,I.jsxs)(nb,{ref:mr,children:[(0,I.jsxs)(rb,{style:{flex:d},children:[(0,I.jsxs)(tb,{$active:$e===`primary`,onPointerDown:()=>et(`primary`),children:[(0,I.jsx)(Zy,{"data-shortcut":Jt(H.goBack),disabled:!yi,onClick:e=>{let t=G.index-1;t<0||(Kt(e)?nr(G.history[t]):tr(G.id,G.history[t],t))},title:e(`Back`),type:`button`,children:(0,I.jsx)(li,{})}),(0,I.jsx)(Zy,{"data-shortcut":Jt(H.goForward),disabled:!bi,onClick:e=>{let t=G.index+1;t>=G.history.length||(Kt(e)?nr(G.history[t]):tr(G.id,G.history[t],t))},title:e(`Forward`),type:`button`,children:(0,I.jsx)(ui,{})}),(0,I.jsx)(Zy,{"data-shortcut":Jt(H.goUp),disabled:!dn,onClick:e=>{dn&&(Kt(e)?nr(dn):$n(G.id,dn))},title:e(`Up one level`),type:`button`,children:(0,I.jsx)(oi,{})}),(0,I.jsx)(xp,{focusToken:$e===`primary`?Le:void 0,onContextMenu:(e,t,n)=>ut({x:t,y:n,path:e}),onNavigate:(e,t)=>t?nr(e):void $n(G.id,e),path:q}),(0,I.jsx)(Zy,{onClick:e=>gr(e,q,()=>void $n(G.id,q,!0)),title:e(`New folder or file`),type:`button`,children:(0,I.jsx)(ci,{})}),(0,I.jsx)(Zy,{"data-shortcut":Jt(H.find),onClick:jn,title:e(`Search`),type:`button`,children:(0,I.jsx)(ai,{})}),ft.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(eb,{}),(0,I.jsx)(Zy,{onClick:e=>br(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,I.jsx)(ua,{})})]})]}),xi(G,!0),$e===`primary`&&Si]}),(0,I.jsx)(ib,{onDoubleClick:()=>f(.5),onPointerDown:hr,title:e(`Drag to resize; double-click to reset`)}),(0,I.jsxs)(rb,{$enter:!0,style:{flex:1-d},children:[(0,I.jsxs)(tb,{$active:$e===`secondary`,onPointerDown:()=>et(`secondary`),children:[(0,I.jsx)(Zy,{"data-shortcut":Jt(H.goBack),disabled:fn.index<=0,onClick:e=>{let t=fn.index-1;t<0||(Kt(e)?nr(fn.history[t]):tr(fn.id,fn.history[t],t))},title:e(`Back`),type:`button`,children:(0,I.jsx)(li,{})}),(0,I.jsx)(Zy,{"data-shortcut":Jt(H.goForward),disabled:fn.index>=fn.history.length-1,onClick:e=>{let t=fn.index+1;t>=fn.history.length||(Kt(e)?nr(fn.history[t]):tr(fn.id,fn.history[t],t))},title:e(`Forward`),type:`button`,children:(0,I.jsx)(ui,{})}),(0,I.jsx)(Zy,{"data-shortcut":Jt(H.goUp),disabled:!hn,onClick:e=>{hn&&(Kt(e)?nr(hn):$n(fn.id,hn))},title:e(`Up one level`),type:`button`,children:(0,I.jsx)(oi,{})}),(0,I.jsx)(xp,{focusToken:$e===`secondary`?Le:void 0,onContextMenu:(e,t,n)=>ut({x:t,y:n,path:e}),onNavigate:(e,t)=>t?nr(e):void $n(fn.id,e),path:mn}),(0,I.jsx)(Zy,{onClick:e=>gr(e,mn,()=>void $n(fn.id,mn,!0)),title:e(`New folder or file`),type:`button`,children:(0,I.jsx)(ci,{})}),(0,I.jsx)(Zy,{"data-shortcut":Jt(H.find),onClick:jn,title:e(`Search`),type:`button`,children:(0,I.jsx)(ai,{})}),ft.secondary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(eb,{}),(0,I.jsx)(Zy,{onClick:e=>br(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,I.jsx)(ua,{})})]})]}),xi(fn,!1),$e===`secondary`&&Si]}),(0,I.jsx)(qo,{info:pr,onWidth:fr,open:Ue,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,width:Ge})]}):(0,I.jsxs)(ob,{children:[(0,I.jsxs)(sb,{children:[Mi,(0,I.jsxs)(ab,{children:[xi(G,!0),Si]})]}),(0,I.jsx)(qo,{info:Je,onWidth:fr,open:Ue,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,width:Ge})]}):K===`home`?(0,I.jsx)(dp,{drives:g,find:Ni,historyVersion:Me,onSearchMatches:ue,homePath:m.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:ii,onHistoryChanged:()=>Ne(e=>e+1),onAddToTray:e=>void Or(e),onAddFavorite:e=>void Ar(e),onRemoveFavorite:e=>void jr(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void ki(e,t),settingsVersion:Fe,onOpen:lr,onLayoutChanged:ni,onPlacesChanged:h,onRecentCleared:ri,places:m,recent:pe,recentLimit:he,visibilityVersion:ze}):K===`settings`?(0,I.jsx)($m,{appInfo:y,find:Ni,focusSection:w,onSearchMatches:ue,onSettingsChanged:ni,onOpenFolder:nr}):K===`gallery`?(0,I.jsx)(Vg,{confirmDelete:B?.confirmDelete??!1,find:Ni,onSearchMatches:ue,openOnSingleClick:B?.openOnSingleClick??!1,onAddToTray:e=>void Or(e),onAddFavorite:e=>void Ar(e),onRemoveFavorite:e=>void jr(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void ki(e,t),shortcuts:H,showCheckboxes:B?.showCheckboxes??!0,showDetails:Ue,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,view:vn}):(0,I.jsx)(Lp,{find:Ni,onOpenLocation:lr,onShowDetails:()=>We(!0),platform:y?.platform,showDetails:Ue,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1})]},K),(0,I.jsxs)(db,{children:[(0,I.jsx)(`span`,{children:K===`files`&&G.listing?Wy(e,G.listing):``}),y?(0,I.jsxs)(cb,{children:[(0,I.jsxs)(`span`,{children:[`v`,y.version,` · `,y.platform]}),x?.available&&(0,I.jsxs)(lb,{onClick:()=>{te(`updates`),or(`settings`)},title:e(`Version {version} is available.`,{version:x.latest}),type:`button`,children:[(0,I.jsx)(ub,{}),e(`Update available`)]})]}):(0,I.jsx)(`span`,{children:e(`browser preview`)})]})]})]}),(0,I.jsx)(Zs,{clipboardItems:Mt,clipboardMove:Pt,currentDirectory:K===`files`?un:``,items:Wt,onAdd:e=>void Or(e),onClear:Mr,onClose:()=>Bt(!1),onCopyToClipboard:e=>void Ir(e),onPosition:Br,onRemove:kr,onTransfer:Hr,position:an,visible:zt}),tt&&(0,I.jsx)(oo,{creationOnly:!0,directory:tt.directory,menu:{x:tt.x,y:tt.y,paths:[],background:!0},onClose:()=>nt(null),onCreateFile:e=>void xr(e),onCreateFolder:e=>void xr(null,e),shortcuts:H}),st&&(0,I.jsx)(oo,{allowCompression:!0,directory:Vy(st.path)??st.path,menu:{x:st.x,y:st.y,paths:[st.path]},onAddToTray:e=>void Or(e),onAddFavorite:e=>void Ar(e),onRemoveFavorite:e=>void jr(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void ki(e,t),onArchiveCreated:e=>{e&&rr(Vy(st.path)??st.path)},onClose:()=>ut(null),onCompressTo:(e,t)=>dt({paths:e,name:t}),onCopy:(e,t)=>void vt(e,t),onDelete:e=>void wt(e,!1).then(()=>rr(Vy(st.path)??st.path)),onOpen:(e,t)=>t?nr(e):void $n(G.id,e),onOpenFile:e=>void Se(e),onPaste:e=>void Ct(e).then(t=>{t&&rr(e)}),onRefresh:()=>rr(st.path),shortcuts:H,target:{path:st.path,isDirectory:!0}}),U&&(0,I.jsx)(Co,{initialDirectory:Vy(st?.path??q)??q,initialName:U.name,onCancel:()=>dt(null),onCompress:async e=>{let t=await Vt(U.paths,e);return!t.ok&&t.error&&ya(t.error),t.ok}}),rt&&(0,I.jsx)(Ja,{items:[{label:e(`Extract here`),onSelect:()=>void Ai(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void Ai(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void Ai(`auto`)}],onClose:()=>ot(null),x:rt.x,y:rt.y}),Zt&&(0,I.jsx)(Pu,{delaySeconds:Zt.prompt.delaySeconds,hits:Zt.prompt.hits,onCancel:()=>{Zt.resolve(!1),Qt(null)},onConfirm:()=>{Zt.resolve(!0),Qt(null)},permanent:Zt.prompt.permanent},Zt.id),(0,I.jsx)(Yu,{}),(0,I.jsx)(nd,{}),o&&(0,I.jsx)(vy,{code:o.code,deviceName:o.deviceName,onAccept:()=>{Ad(o.requestId,!0),s(null)},onReject:()=>{Ad(o.requestId,!1),s(null)}}),(0,I.jsx)(fy,{}),(0,I.jsx)(ge,{})]})})}var Ky=_.div`
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
`,qy=_.div`
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
`,Jy=_.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Yy=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Ua}
`,Xy=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Zy=_.button`
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
`,Qy=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,$y=_.span`
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
`,eb=_.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,tb=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,nb=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,rb=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Ka:``}
`,ib=_.div`
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
        ${qa}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,ab=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,ob=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,sb=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,cb=_.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,lb=_.button`
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
`,ub=_.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,db=_.footer`
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
`;function fb({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:c,onSelect:u}){let d=R(),f=Tc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,O.useState)(e),[_,y]=(0,O.useState)(null),[b,x]=(0,O.useState)(!0),[S,ee]=(0,O.useState)(null),[C,w]=(0,O.useState)(()=>new Set),[te,T]=(0,O.useState)(a??[]),[E,D]=(0,O.useState)([]),[re,k]=(0,O.useState)([]),[ie,A]=(0,O.useState)([]),[ae,j]=(0,O.useState)([]),[M,N]=(0,O.useState)(``),[P,oe]=(0,O.useState)(m.length===0),[se,ce]=(0,O.useState)(`files`),[le,ue]=(0,O.useState)(0),[L,de]=(0,O.useState)(yn),[fe,pe]=(0,O.useState)(0),[me,z]=(0,O.useState)(0),[he,ge]=(0,O.useState)(null),[_e,ve]=(0,O.useState)(null),[B,xe]=(0,O.useState)(0),[Se,Ce]=(0,O.useState)(null),[we,Te]=(0,O.useState)(be.imageStripHeight);(0,O.useEffect)(()=>{Ye().then(Ce,()=>Ce(null))},[]),(0,O.useEffect)(()=>{a?T(a):Ae().then(T,()=>T([]))},[a]),(0,O.useEffect)(()=>{je().then(D,()=>D([])),Be().then(k,()=>k([]))},[]),(0,O.useEffect)(()=>{let e=!0;return x(!0),ee(null),w(new Set),N(p?``:v(h)),V(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),N(p?``:v(t.path)),x(!1))},t=>{e&&(ee(t instanceof Error?t.message:String(t)),x(!1))}),()=>{e=!1}},[h,le,p]),(0,O.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),de(e=>({...e,open:!0})),pe(e=>e+1);return}if(e.key===`Escape`){L.open?(de(e=>({...e,open:!1,query:``})),z(0)):c();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),De();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Oe();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),de(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),pe(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||We()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,O.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),De()):e.button===4&&(e.preventDefault(),Oe())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Ee=e=>{let t=e.trim();t.length!==0&&l(t)!==l(h)&&(A(e=>[...e,h]),j([]),ce(`files`),g(t))},De=()=>{let e=ie.at(-1);e!==void 0&&(A(e=>e.slice(0,-1)),j(e=>[h,...e]),g(e))},Oe=()=>{let e=ae[0];e!==void 0&&(j(e=>e.slice(1)),A(e=>[...e,h]),g(e))},ke=_?.path??h,Me=_?.parent??(h?ne(h):null);(0,O.useEffect)(()=>{F.available&&ke&&F.send({type:`fs.watch`,payload:{paths:[ke],owner:`picker`}})},[ke]),(0,O.useEffect)(()=>{if(F.available&&ke)return F.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&l(t.data.path)===l(ke)&&V(ke,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));w(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[ke]);let Ne=(_?.entries??[]).filter(e=>e.isDirectory||p&&(P||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),H=_?{..._,entries:Ne}:null,Pe=L.open&&L.query.length>0,Fe=(0,O.useMemo)(()=>Pe?Ne.filter(e=>On(e.name,L)).map(e=>e.fullPath):[],[Pe,Ne,L]);(0,O.useEffect)(()=>{z(0)},[L.query,L.matchCase,L.regex,_?.path]);let Ie=Fe.length===0?-1:Math.min(me,Fe.length-1),Le=(0,O.useMemo)(()=>({...L,currentPath:Ie>=0?Fe[Ie]:null}),[L,Ie,Fe]),Re=Se?.defaultView??be,ze=o??{mode:Re.mode,iconSize:Re.iconSize,gridSize:Re.gridSize,sort:`name`,sortDescending:!1,columns:Re.columns??[`type`,`size`,`modified`]},Ve=(s??Re.showImages)&&ze.mode===`list`,He=M.trim(),Ue=He.length>0?mb(He)?He:pb(ke,He):null,We=()=>{if(b||S)return;let e=n?[...C]:[...C].slice(0,1);e.length>0?u(e):Ue!==null&&He!==v(ke)?u([Ue]):!p&&ke&&u([ke])},Ge=(0,O.useCallback)(e=>{w(new Set(e)),N(e.length===1?v(e[0]):e.length===0&&!p?v(ke):``)},[ke,p]),Ke=e=>{_?.entries.find(t=>t.fullPath===e)?.isDirectory?Ee(e):p&&u([e])},qe=e=>N(e),Je=async e=>{let t=he;if(ge(null),!t||!ke)return;let n=e===null?await Et(ke):await At(ke,e);n.ok&&n.path!==null&&(de(e=>({...e,open:!1,query:``})),e!==null&&oe(!0),ue(e=>e+1),window.setTimeout(()=>{ve(n.path),xe(e=>e+1)},120))},Xe=()=>{de(e=>({...e,open:!0})),pe(e=>e+1)},Ze=e=>{z(t=>Fe.length===0?0:(t+e+Fe.length)%Fe.length)},Qe=e=>(0,I.jsxs)(wb,{children:[(0,I.jsxs)(Tb,{children:[(0,I.jsx)(Eb,{children:d(p?`File name:`:`Folder:`)}),(0,I.jsx)(Db,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),We())},spellCheck:!1,value:M}),p&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Eb,{children:d(`Files of type:`)}),(0,I.jsx)(lo,{onChange:e=>oe(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:P?`all`:`supported`})]})]}),(0,I.jsxs)(Ob,{children:[(0,I.jsx)(kb,{onClick:c,type:`button`,children:d(`Cancel`)}),(0,I.jsxs)(kb,{$primary:!0,disabled:b||S!==null||p&&C.size===0&&He.length===0,onClick:We,type:`button`,children:[(0,I.jsx)(yi,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),$e=(0,I.jsxs)(gb,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,I.jsxs)(_b,{children:[(0,I.jsxs)(vb,{children:[(0,I.jsx)(ni,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,I.jsx)(yb,{onClick:c,title:d(`Cancel`),type:`button`,children:(0,I.jsx)(bi,{size:12})})]}),(0,I.jsxs)(bb,{children:[(0,I.jsx)(t_,{activeKind:se===`overview`?`home`:se===`gallery`?`gallery`:`files`,currentPath:ke,drives:E,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:te.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Ee(e),onOpenView:e=>{e===`home`?(w(new Set),N(p?``:v(ke)),ce(`overview`)):e===`gallery`&&p&&(w(new Set),N(``),ce(`gallery`))},places:te,recent:re,recentLimit:10}),(0,I.jsx)(xb,{children:se===`overview`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(dp,{drives:E,historyVersion:0,homePath:te.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Ee(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Ge,places:te,readOnly:!0,recent:re,recentLimit:10,visibilityVersion:0}),Qe(N)]}):se===`gallery`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Vg,{onPick:e=>u([e]),onSelectionChange:Ge,showCheckboxes:Se?.showCheckboxes??!0,view:{...ye,columns:[]}}),Qe(N)]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(Sb,{children:[(0,I.jsx)(Cb,{disabled:ie.length===0,onClick:De,title:d(`Back`),type:`button`,children:(0,I.jsx)(li,{})}),(0,I.jsx)(Cb,{disabled:ae.length===0,onClick:Oe,title:d(`Forward`),type:`button`,children:(0,I.jsx)(ui,{})}),(0,I.jsx)(Cb,{disabled:!Me,onClick:()=>Me&&Ee(Me),title:d(`Up one level`),type:`button`,children:(0,I.jsx)(oi,{})}),(0,I.jsx)(xp,{onNavigate:Ee,path:ke}),(0,I.jsx)(Cb,{onClick:e=>ge({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,I.jsx)(ci,{})}),(0,I.jsx)(Cb,{onClick:Xe,title:d(`Search`),type:`button`,children:(0,I.jsx)(ai,{})}),f.available&&(0,I.jsx)(Cb,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,I.jsx)(ua,{})})]}),L.open&&(0,I.jsx)(fd,{current:Ie,focusToken:fe,matchCase:L.matchCase,mode:L.mode,onClose:()=>{de(e=>({...e,open:!1,query:``})),z(0)},onMatchCase:()=>de(e=>({...e,matchCase:!e.matchCase})),onMode:()=>de(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ze(1),onPrevious:()=>Ze(-1),onQuery:e=>de(t=>({...t,query:e})),onRegex:()=>de(e=>({...e,regex:!e.regex})),query:L.query,regex:L.regex,total:Fe.length}),(0,I.jsx)(zc,{allowBackgroundMenu:!0,confirmDelete:Se?.confirmDelete??!1,enableShortcuts:!0,error:S,find:Le,imageStripHeight:we,loading:b,listing:H,onImageStripHeight:Te,onOpen:Ke,onOpenFile:Ke,onRefresh:()=>ue(e=>e+1),onSelectionChange:Ge,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:Se?.openOnSingleClick??!1,refreshToken:le,pendingRename:_e,pendingRenameToken:B,showCheckboxes:Se?.showCheckboxes??!0,showDetails:!1,showImages:Ve,singleSelect:!n,view:ze}),Qe(qe)]})})]}),he&&(0,I.jsx)(oo,{creationOnly:!0,directory:ke,menu:{x:he.x,y:he.y,paths:[],background:!0},onClose:()=>ge(null),onCreateFile:p?e=>void Je(e):void 0,onCreateFolder:()=>void Je(null),shortcuts:Ut})]});return i?$e:(0,ja.createPortal)((0,I.jsx)(hb,{onPointerDown:e=>{e.target===e.currentTarget&&c()},children:$e}),document.body)}function pb(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function mb(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var hb=_.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Ka}
`,gb=_.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Ma}
    ${({$inline:e})=>e?``:Va}
`,_b=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,vb=_.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,yb=_.button`
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
`,bb=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,xb=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Sb=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Cb=_.button`
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
`,wb=_.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,Tb=_.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Eb=_.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Db=_.input`
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
`,Ob=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,kb=_.button`
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
`;function Ab({mode:e,multiple:t,extensions:n,initial:r}){let i=R(),a=me(),[o,s]=(0,O.useState)(null),[c,l]=(0,O.useState)({}),[u,d]=(0,O.useState)(null),[f,p]=(0,O.useState)(null),[m,h]=(0,O.useState)(null),g=(0,O.useRef)(0);(0,O.useEffect)(()=>{F.send({type:`app.ready`})},[]),(0,O.useEffect)(()=>(ve(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>ve(null)),[]),(0,O.useEffect)(()=>{Ye().then(e=>{s(e),ee(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??be,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,I.jsxs)(jb,{children:[(0,I.jsxs)(Mb,{children:[(0,I.jsx)(Nb,{children:(0,I.jsx)(xi,{size:17})}),(0,I.jsx)(Pb,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,I.jsx)(kv,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,I.jsx)(Fb,{children:(0,I.jsx)(Ib,{onClick:()=>F.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,I.jsx)(bi,{size:12})})})]}),(0,I.jsx)(Lb,{children:(0,I.jsx)(fb,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>F.send({type:`pick.cancel`}),onSelect:e=>F.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,I.jsx)(Pu,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,I.jsx)(Yu,{}),(0,I.jsx)(ge,{})]})}var jb=_.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,Mb=_.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,Nb=_.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Pb=_.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fb=_.div`
    display: flex;
    flex-shrink: 0;
`,Ib=_.button`
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
`,Lb=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Rb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Rb);var zb=document.getElementById(`root`),Bb=new URLSearchParams(window.location.search),Vb=Bb.get(`picker`),Hb=Bb.get(`filter`)??``;zb&&(0,re.createRoot)(zb).render((0,I.jsx)(O.StrictMode,{children:(0,I.jsx)(de,{children:Vb===`folder`||Vb===`file`?(0,I.jsx)(Ab,{extensions:Hb?Hb.split(`;`).filter(Boolean):[],initial:Bb.get(`initial`)??``,mode:Vb,multiple:Bb.get(`multiple`)===`1`}):(0,I.jsx)(Gy,{})})}));