import{A as e,C as t,E as n,M as r,N as i,O as a,S as o,T as s,_ as c,b as l,c as u,d,f,g as p,h as m,i as h,j as g,k as _,l as v,m as y,n as b,o as x,p as S,r as ee,s as C,t as te,u as ne,v as re,w,x as ie,y as T}from"./theme-BMX5jShW.js";var E=i(r(),1),ae=e(),D=15e3,oe=new Set,O=new Map,se=!1,k=0,ce;function A(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function j(){se||(se=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>le(e)))}function le(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?O.get(n):void 0;n&&r&&(O.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),oe.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function ue(){if(ce!==void 0)return;let e=()=>{if(!A())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),ce=setInterval(e,5e3)}var M={get available(){return A()},send(e){A()?(j(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&ue()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=D){if(!A())return Promise.reject(Error(`Native bridge is not available.`));j();let r=`req-${++k}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{O.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);O.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return j(),oe.add(e),()=>oe.delete(e)}},N=s();function de(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function fe(e){return M.available?await M.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var pe=(0,E.createContext)(de({})),P=(0,E.createContext)(`en`);function F(){return(0,E.useContext)(pe)}var me=({children:e})=>{let[t,n]=(0,E.useState)(()=>de({})),[r,i]=(0,E.useState)(`en`);return(0,E.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await fe();if(e)return;n(()=>de(t.strings)),i(t.locale)}catch{}};t();let r=M.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,E.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,N.jsx)(pe.Provider,{value:t,children:(0,N.jsx)(P.Provider,{value:r,children:e})})},he=e=>M.send({type:e});function ge(){let[e,t]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{if(M.available)return M.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>he(`window.minimize`),toggleMaximize:()=>he(`window.toggleMaximize`),close:()=>he(`window.close`)}}function I(){return{onMouseDown:()=>he(`window.drag`),onDoubleClick:()=>he(`window.toggleMaximize`)}}function _e(){let[e,t]=(0,E.useState)(!1),{maximized:n}=ge();return(0,E.useEffect)(()=>{if(!M.available)return;let e=!1;return M.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,E.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var L=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function ve(){return(0,N.jsx)(N.Fragment,{children:L.map(([e,t])=>(0,N.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),M.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var R=null;function ye(e){R=e}function z(e){return R?R(e):Promise.resolve(!1)}var be={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},xe={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function Se(e,t){return M.available?await M.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function B(e){return M.available?(await M.request(`fs.open`,{path:e})).ok:!1}async function Ce(e,t=!0,n=!1,r=0,i){return await M.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function we(e,t,n=0,r){return await M.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function Te(e,t=0,n){return await M.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Ee(e){M.available&&e.length!==0&&await M.request(`fs.archive.release`,{paths:e})}async function V(e){return M.available?await M.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function De(e,t){return M.available?(await M.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Oe(e,t,n,r){return M.available?(await M.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function ke(e,t=!1){return M.available?await M.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ae(){return(await M.request(`fs.places`)).places}async function je(){return(await M.request(`fs.drives`)).drives}async function H(e=!1){return(await M.request(`fs.recycle`,{includeOrphans:e})).entries}async function Me(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await z({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await M.request(e,{...t,confirm:r.token})}return r}async function Ne(e=!1){let t=await M.request(`fs.recycle.empty`,{includeOrphans:e});await Me(`fs.recycle.empty`,{includeOrphans:e},t)}async function Pe(e){return!M.available||e.length===0?{ok:!1,done:0}:await M.request(`fs.recycle.restoreMany`,{ids:e})}async function Fe(e){if(!M.available||e.length===0)return{ok:!1,done:0};let t=await M.request(`fs.recycle.deleteMany`,{ids:e}),n=await Me(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ie(e){M.available&&e&&await M.request(`fs.recycle.properties`,{id:e})}async function Le(){if(!M.available)return{entries:[],cancelled:!0,failed:!1};let e=await M.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Re(){return M.available?(await M.request(`fs.recycle.admin.purge`)).ok:!1}async function ze(e=0,t=150,n=!1){return M.available?await M.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Be(){return M.available?(await M.request(`fs.recent`)).entries:[]}async function Ve(){return M.available?(await M.request(`fs.frequent`)).entries:[]}async function He(e){M.available&&await M.request(`fs.frequent.record`,{path:e})}async function Ue(){await M.request(`fs.recent.clear`)}async function We(){await M.request(`fs.frequent.clear`)}async function Ge(){return await M.request(`fs.visibility`)}async function Ke(){return await M.request(`fs.hidden.toggle`)}async function qe(){return M.available?await M.request(`fs.index.tasks`):{count:0,directories:[]}}var Je={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Ye(){if(!M.available)return Je;let e=await M.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function Xe(){return M.available?(await M.request(`app.protection.defaults`)).paths??[]:[]}var Ze={registered:!1,pathMatches:!1,registeredPath:null},Qe={registered:!1,pathMatches:!1,registeredPath:null};async function $e(){return M.available?await M.request(`app.defaultManager.status`):Qe}async function et(e){return M.available?await M.request(`app.defaultManager.set`,{enabled:e}):Qe}async function tt(){return M.available?await M.request(`app.archive.status`):Ze}async function nt(){return M.available?await M.request(`app.archive.register`):Ze}async function rt(){return M.available?await M.request(`app.archive.unregister`):Ze}async function it(e){if(!M.available)return e;let t=await M.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function at(e,t){M.available&&await M.request(`app.tabs.set`,{tabs:e,active:t})}async function ot(e,t,n){return M.available?(await M.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var st={managed:0,private:0,workingSet:0,available:0};async function ct(){return M.available?await M.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1,logDirectory:``}}async function lt(){return M.available?await M.request(`app.updateStatus`)??null:null}async function U(){return M.available?await M.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function ut(e){return!M.available||!e?!1:(await M.request(`app.openUrl`,{url:e})).ok}async function dt(){return M.available?await M.request(`app.memory`):st}async function ft(){return M.available?await M.request(`app.memory.trim`):st}async function pt(){return M.available?(await M.request(`app.scheme`)).registered:!1}async function mt(e){return M.available?(await M.request(`app.scheme.set`,{enabled:e})).registered:!1}var ht={supported:!1,mode:`none`,active:!1,error:null};async function gt(){return M.available?await M.request(`app.startup`):ht}async function _t(e){return M.available?await M.request(`app.startup.set`,{mode:e}):ht}async function vt(e,t=!1){return!M.available||e.length===0?!1:(await M.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function yt(){return M.available?(await M.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function bt(){return M.available?await M.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function xt(e,t,n){return!M.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await M.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function St(e){return!M.available||e.length===0?[]:(await M.request(`fs.paths.info`,{paths:e})).entries}async function Ct(e){return M.available?(await M.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function wt(e,t=!1){if(!M.available||e.length===0)return{ok:!1,error:null};let n=await M.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await z({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await M.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function Tt(e,t){return M.available?await M.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Et(e,t=!1){return M.available?await M.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Dt(e){return M.available?(await M.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Ot(e,t){return M.available?await M.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function kt(e,t,n){return M.available?await M.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function At(e,t){return M.available?await M.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function jt(e){M.available&&e.length!==0&&await M.request(`fs.operation.properties`,{paths:e})}async function Mt(e){M.available&&await M.request(`fs.operation.openWith`,{path:e})}async function Nt(e){M.available&&await M.request(`fs.operation.terminal`,{path:e})}async function Pt(e){return M.available?await M.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Ft(e,t){return M.available?(await M.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function It(){return M.available?await M.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Lt(){return M.available?await M.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Rt(e){M.available&&await M.request(`fs.operation.showInExplorer`,{path:e})}async function zt(e){return!M.available||e.length===0?{verbs:[],safe:!0}:await M.request(`shell.verbs`,{paths:e})}async function Bt(e,t,n,r){M.available&&e.length!==0&&await M.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Vt(e,t){return!M.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await M.request(`fs.operation.compress`,{...t,paths:e})}async function W(){return M.available?(await M.request(`app.tasks`)).tasks:[]}async function Ht(){M.available&&await M.request(`app.tasks.clear`)}var Ut={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Wt=Ut.openInNewTab;function Gt(e){Wt=e.trim()||Ut.openInNewTab}function Kt(e){let t=Wt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function qt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Jt(e){return e.split(`+`).filter(Boolean).map(e=>Yt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Yt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Xt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Zt=new Map;function Qt(e){return l(p(e)?u(e):e)}function $t(e){return Zt.get(Qt(e))}function en(e,t){Zt.set(Qt(e),t)}function tn(e){Zt.delete(Qt(e))}function nn(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var rn=new Map,an=new Map,G=new Set,K=0;function on(){rn.clear(),an.clear(),K+=1,G.forEach(e=>e())}function sn(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...rn.keys()])e.toLowerCase().includes(t)&&(rn.delete(e),n=!0);n&&(K+=1,G.forEach(e=>e()))}function cn(){let[e,t]=(0,E.useState)(K);return(0,E.useEffect)(()=>{let e=()=>t(K);return G.add(e),()=>{G.delete(e)}},[]),e}var ln=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function q(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return ln.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function un(e,t,n=!1){let r=cn(),i=e===null?``:q(e,t,n),[a,o]=(0,E.useState)(()=>rn.get(i)??null);return(0,E.useEffect)(()=>{if(e===null){o(null);return}if(!M.available)return;if(rn.has(i)){o(rn.get(i)??null);return}let r=!0;return M.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?rn.set(i,e.dataUrl):rn.delete(i),r&&o(e.dataUrl)},()=>{rn.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function dn(e){let[t,n]=(0,E.useState)(e);return(0,E.useEffect)(()=>{if(!e){n(null);return}if(!p(e)){n(e);return}let t=!0;return Te(e,0,$t(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function fn(e){let t=cn(),[n,r]=(0,E.useState)(()=>e?an.get(e)??null:null);return(0,E.useEffect)(()=>{if(!e||!M.available){r(null);return}if(an.has(e)){r(an.get(e)??null);return}let t=!0;return M.request(`fs.iconFile`,{path:e}).then(n=>{an.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{an.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var pn=null,mn=null;function hn(){return pn===null?M.available?(mn??=M.request(`app.thumbnails`).then(e=>(pn=e.base??``,pn),()=>(pn=``,``)),mn):Promise.resolve(``):Promise.resolve(pn)}function gn(e,t=128,n=0){let[r,i]=(0,E.useState)(pn);return(0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return hn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function _n(e,t=0,n=``){let[r,i]=(0,E.useState)(pn);if((0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return hn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function vn(e,t=0){let[n,r]=(0,E.useState)(pn);return(0,E.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return hn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var yn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},bn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function xn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=wn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Dn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Sn=`\0`,Cn=``;function wn(e){return e.query!==Sn&&(Sn=e.query,Cn=e.query.toLowerCase()),Cn}var Tn=`\0`,En=null;function Dn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Tn)return En;Tn=t;try{En=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{En=null}return En}function On(e,t){return xn(e,t)!==null}var kn=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],An={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function jn(e){let t=Nn(e);for(let{kind:e}of kn)if(An[e].has(t))return e;return null}function Mn(e){return jn(e)!==null}function Nn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Pn=(0,E.createContext)({places:{},useIcons:!1}),Fn=Pn.Provider;function J(){return(0,E.useContext)(Pn)}function In(e,t){return e.places[l(t)]}function Ln(e,t,n){return In(e,t)?.name||n}function Rn(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function zn(e,t){try{localStorage.setItem(e,String(t))}catch{}}function Bn(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function Vn(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Hn=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,N.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,N.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Un=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,N.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Wn=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,N.jsx)(`path`,{d:`M14 3v4h4`})]}),Gn=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,N.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,N.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Kn=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,N.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),qn=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M12 19V5`}),(0,N.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Jn=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,N.jsx)(`path`,{d:`M20 4v7h-7`})]}),Yn=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M12 5v14`}),(0,N.jsx)(`path`,{d:`M5 12h14`})]}),Xn=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M19 12H5`}),(0,N.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Zn=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M5 12h14`}),(0,N.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Qn=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,N.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),$n=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,N.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),er=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,N.jsx)(`path`,{d:`M12 12v8`})]}),tr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,N.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),nr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,N.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,N.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,N.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),rr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,N.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),ir=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,N.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),ar=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M4 7h16`}),(0,N.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,N.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,N.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),or=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,N.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),sr=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,N.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),cr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,N.jsxs)(`defs`,{children:[(0,N.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,N.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,N.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,N.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,N.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,N.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,N.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,N.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,N.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,N.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),lr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,N.jsx)(`path`,{d:`M15 3v4h4`}),(0,N.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),ur=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,N.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,N.jsx)(`path`,{d:`m13 5-2 14`})]}),dr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,N.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,N.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),fr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,N.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),pr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,N.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,N.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),mr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,N.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),hr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,N.jsx)(`path`,{d:`M15 3v4h4`}),(0,N.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),gr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,N.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),_r=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,N.jsx)(`path`,{d:`M8.5 14h7`})]}),vr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,N.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,N.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),yr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,N.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),br=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,N.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),xr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,N.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Sr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,N.jsx)(`path`,{d:`M15 3v4h4`}),(0,N.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Cr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,N.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,N.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,N.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),wr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,N.jsx)(`path`,{d:`m14 6 4 4`})]}),Tr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,N.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Er=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,N.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Dr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M12 4v10`}),(0,N.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,N.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Or=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,N.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,N.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),kr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,N.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,N.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Ar=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,N.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),jr=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,N.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Mr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,N.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Nr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,N.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,N.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Pr=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,N.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Fr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,N.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,N.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,N.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Ir=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,N.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Lr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,N.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Rr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,N.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,N.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),zr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,N.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Br=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,N.jsx)(`path`,{d:`M3.5 12h17`}),(0,N.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Vr=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,N.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Hr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,N.jsx)(`path`,{d:`M8.5 10.5h7`})]}),Ur=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,N.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,N.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),Wr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,N.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Gr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,N.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,N.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),Kr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,N.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),qr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M12 16V4`}),(0,N.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,N.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),Jr=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,N.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),Yr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,N.jsx)(`path`,{d:`M12 4v16`})]}),Xr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,N.jsx)(`path`,{d:`M15 4v16`})]}),Zr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,N.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,N.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,N.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),Qr=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,N.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,N.jsx)(`path`,{d:`M12 14v2`})]}),$r=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,N.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]});function Y(e,t){return({size:n=t,...r})=>(0,N.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var ei=Y(Hn,18),ti=Y(Un,18),ni=Y(Wn,18),ri=Y(Gn,18),ii=Y(Kn,16),ai=Y(qn,16),oi=Y(Jn,16),si=Y(Yn,16),ci=Y(Xn,16),li=Y(Zn,16),ui=Y(Qn,12),di=Y($n,18),fi=Y(er,14),pi=Y(tr,14),mi=Y(nr,14),hi=Y(rr,18),gi=Y(ir,18),_i=Y(ar,18),vi=Y(or,14),yi=Y(sr,14),bi=Y(cr,18),xi=Y(lr,18),Si=Y(ur,18),Ci=Y(dr,18),wi=Y(fr,18),Ti=Y(pr,18),Ei=Y(mr,18),Di=Y(hr,18),Oi=Y(gr,18),ki=Y(_r,18),Ai=Y(vr,18),ji=Y(yr,18),Mi=Y(br,18),Ni=Y(xr,18),Pi=Y(Sr,18),Fi=Y(Cr,18),Ii=Y(wr,16),Li=Y(Tr,18),Ri=Y(Er,18),zi=Y(Dr,18),Bi=Y(Or,18),Vi=Y(kr,18),Hi=Y(Ar,18),Ui=Y(jr,18),Wi=Y(Mr,18),Gi=Y(Nr,18),Ki=Y(Pr,18),qi=Y(Fr,18),Ji=Y(Ir,18),Yi=Y(Lr,18),Xi=Y(Rr,18),Zi=Y(zr,18),Qi=Y(Br,18),$i=Y(Vr,18),ea=Y(Hr,14),ta=Y(Ur,14),na=Y(Wr,16),ra=Y(Gr,16),ia=Y(Kr,16),aa=Y(qr,16),oa=Y(Jr,16),sa=Y(Yr,16),ca=Y(Xr,16),la=Y(Zr,16),ua=Y(Qr,14),da=Y($r,14);async function fa(e,t,n){return M.available?(await M.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function pa(e){return fa(`folder`,[],e??``)}function ma(e){return fa(`file`,e??[],``)}var ha=null,ga=null;function _a(e){ha=e}function va(e){return ha?ha(e):Promise.resolve()}function ya(e){ga=e}function ba(e,t=!1){return ga?ga(e,t):Promise.resolve(null)}var xa=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],Sa=null,Ca=0,wa=new Set;function Ta(){Ca+=1;for(let e of wa)e()}function Ea(e){return wa.add(e),()=>wa.delete(e)}function Da(){return Ca}function Oa(e){Sa=e,Ta()}function ka(){return(0,E.useSyncExternalStore)(Ea,Da,Da),Sa}var Aa=g(),ja=a`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Ma=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Na=n`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Pa=n`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Fa=n`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Ia=n`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,La=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ra=n`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,za=n`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Ba=a`animation: ${Ma} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Va=a`animation: ${Na} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Ha=a`animation: ${Pa} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;a`animation: ${Fa} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var Ua=a`animation: ${Ia} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Wa=a`animation: ${La} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ga=a`animation: ${Ra} 140ms ease-out;`,Ka=a`animation: ${za} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function qa({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,E.useState)([]),s=(0,E.useRef)(void 0);if((0,E.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,E.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,N.jsx)(ro,{},`group-rule-${i}`)),n.push((0,N.jsx)(no,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,N.jsx)(ro,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,N.jsxs)($a,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,N.jsx)(eo,{children:e.loading?(0,N.jsx)(io,{}):e.icon}),(0,N.jsx)(to,{children:e.label}),a?(0,N.jsx)(ui,{size:12}):e.checked&&(0,N.jsx)(vi,{size:12})]},`${e.label}-${i}`))}),n};return(0,Aa.createPortal)((0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(Ja,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Ya,{children:r.map((e,t)=>(0,N.jsxs)(Xa,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,N.jsx)(Za,{children:e.icon}),(0,N.jsx)(Qa,{children:e.label})]},`${e.label}-${t}`))}),(0,N.jsx)(ro,{})]}),m(n,0)]}),a.map((e,t)=>(0,N.jsx)(Ja,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Ja=_.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${ja}
    ${Va}
    transform-origin: top left;
`,Ya=_.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Xa=_.button`
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
`,Za=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Qa=_.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$a=_.button`
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
`,eo=_.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,to=_.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,no=_.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ro=_.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,io=_.span`
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
`;function ao({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:u,onDelete:d,onCopy:f,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:_=!1,onRefresh:y,onAddToTray:b,onAddFavorite:x,onRemoveFavorite:S,favoritePaths:ee,onExtractArchive:C,allowCompression:te=!1,onCompressTo:ne,onArchiveCreated:re}){let w=F(),ie=ka(),T=p(t),[ae,D]=(0,E.useState)({verbs:[],safe:!0,loading:!1}),[oe,O]=(0,E.useState)({recommended:[],other:[],loading:!1}),[se,k]=(0,E.useState)(null),ce=(0,E.useRef)(0),A=(0,E.useRef)(0),j=e?.paths.length===1,le=e?.background?t?[t]:[]:e?.paths??[],ue=e?.background?t||null:j&&n?.isDirectory?n.path:null;if((0,E.useEffect)(()=>{if(!e){D({verbs:[],safe:!0,loading:!1}),O({recommended:[],other:[],loading:!1});return}let t=++ce.current;D({verbs:[],safe:!0,loading:le.length>0&&!T}),le.length>0&&!T&&zt(le).then(e=>{ce.current===t&&D({...e,loading:!1})},()=>{ce.current===t&&D({verbs:[],safe:!0,loading:!1})});let r=++A.current;!T&&j&&n?(O({recommended:[],other:[],loading:!0}),Pt(n.path).then(e=>{A.current===r&&O({...e,loading:!1})},()=>{A.current===r&&O({recommended:[],other:[],loading:!1})})):O({recommended:[],other:[],loading:!1})},[e,j,n?.path,n?.isDirectory,le.length,T]),(0,E.useEffect)(()=>{if(!e||T||!ue){k(null);return}let t=!0;return Dt(ue).then(e=>{t&&k(e)},()=>{t&&k(null)}),()=>{t=!1}},[e,ue,T]),!e)return null;let M=[],de=[],fe=new Set((ee??[]).map(l)),pe=e.background?t?[t]:[]:e.paths,P=pe.length>0&&pe.every(e=>fe.has(l(e))),me=()=>n?he(n.path,n.isDirectory):`Archive`,he=(e,t)=>{let n=v(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},ge=async(e,n=me())=>{let r=await Vt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?re?.(r.path,!0):va(r.error??w(`Could not create the archive.`))},I=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},_e=async()=>{if(!ue||se===null)return;let e=await Ot(ue,!se);e.ok?(k(e.enabled),y?.()):va(e.error??w(`Could not change the case sensitivity.`))},L=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await kt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await kt(e,t,`${a}\\${so(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?y?.():va(o.error??w(`Could not create the link.`))},ve=async e=>{if(!n)return;let r=await pa(t);r&&await L(e,n.path,r,v(n.path),e.endsWith(`-copy`))},R=async e=>{let n=ie?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=l(a)===l(t);await L(n,r.path,t,v(r.path),i&&!o)}},ye=async()=>{let t=(await St(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Oa({paths:t})},z=()=>{let e=ie?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:w(`Cancel selected link`),icon:(0,N.jsx)(yi,{size:14}),onSelect:()=>Oa(null)},...t?[{label:w(`Hard link`),icon:(0,N.jsx)(ni,{size:14}),separatorBefore:!0,onSelect:()=>void R(`hard`)}]:[],{label:w(`Symbolic link`),icon:(0,N.jsx)(ni,{size:14}),separatorBefore:!t,onSelect:()=>void R(`symbolic-file`)},...n?[{label:w(`Directory junction`),icon:(0,N.jsx)(ti,{size:14}),onSelect:()=>void R(`junction`)},{label:w(`Smart copy`),icon:(0,N.jsx)(na,{size:14}),separatorBefore:!0,onSelect:()=>void R(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,N.jsx)(na,{size:14}),onSelect:()=>void R(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,N.jsx)(na,{size:14}),onSelect:()=>void R(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,N.jsx)(na,{size:14}),separatorBefore:!0,onSelect:()=>void R(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,N.jsx)(na,{size:14}),onSelect:()=>void R(`symbolic-copy`)}]:[]]};if(e.background){if(h&&de.push({label:w(`New folder`),icon:(0,N.jsx)(si,{size:16}),shortcut:Jt(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:w(`Folder`),icon:(0,N.jsx)(ti,{size:14}),onSelect:()=>h(!1)}),T||e.push({label:w(`Case-sensitive folder`),icon:(0,N.jsx)(ta,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...xa.map((e,t)=>({label:`${w(e.label)} (${e.extension})`,icon:(0,N.jsx)(ni,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),M.push({label:w(`New`),icon:(0,N.jsx)(si,{size:14}),children:e,onSelect:()=>void 0})}if(T||M.push({label:w(`Create link`),icon:(0,N.jsx)(aa,{size:14}),disabled:!ie,children:z(),onSelect:()=>void 0}),_)return(0,N.jsx)(qa,{items:M,onClose:a,quick:de,x:e.x,y:e.y});!T&&o&&M.push({label:w(`Open in new tab`),icon:(0,N.jsx)(si,{size:14}),onSelect:()=>o(t,!0)}),M.push({label:w(`Copy as path`),icon:(0,N.jsx)(na,{size:14}),onSelect:()=>void I([t])}),b&&M.push({label:w(`Add to file tray`),icon:(0,N.jsx)(Zi,{size:14}),onSelect:()=>b([t])}),!T&&(P?S:x)&&M.push({label:w(P?`Remove from favorites`:`Add to favorites`),icon:P?(0,N.jsx)(ea,{size:14}):(0,N.jsx)($i,{size:14}),onSelect:()=>P?S?.([t]):x?.([t])}),!T&&se!==null&&M.push({label:w(`Case-sensitive names`),icon:(0,N.jsx)(ta,{size:14}),checked:se,onSelect:()=>void _e()}),!T&&te&&(M.push({label:w(`Open in Terminal`),icon:(0,N.jsx)(Yi,{size:14}),onSelect:()=>void Nt(t)}),M.push({label:w(`Show in Explorer`),icon:(0,N.jsx)(ti,{size:14}),separatorBefore:!0,onSelect:()=>void Rt(t)})),m&&de.push({label:w(`Paste`),icon:(0,N.jsx)(ia,{size:16}),disabled:!i,shortcut:Jt(r.paste),onSelect:()=>m(t)}),T||de.push({label:w(`Properties`),icon:(0,N.jsx)(di,{size:16}),shortcut:Jt(r.properties),onSelect:()=>void jt([t])})}else{if(o&&M.push({label:w(`Open`),icon:(0,N.jsx)(li,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&M.push({label:w(`Open in new tab`),icon:(0,N.jsx)(si,{size:14}),onSelect:()=>o(n.path,!0)}),m&&M.push({label:w(`Paste into folder`),icon:(0,N.jsx)(ia,{size:14}),disabled:!i,onSelect:()=>m(n.path)}),T||M.push({label:w(`Open in Terminal`),icon:(0,N.jsx)(Yi,{size:14}),onSelect:()=>void Nt(n.path)})),!T&&j&&n&&!n.isDirectory&&c(n.path)&&C&&M.push({label:w(`Extract archive`),icon:(0,N.jsx)(Ei,{size:14}),separatorBefore:!0,children:[{label:w(`Extract here`),icon:(0,N.jsx)(Ei,{size:14}),onSelect:()=>C(n.path,`here`)},{label:w(`Extract to a folder named after the archive`),icon:(0,N.jsx)(Ei,{size:14}),onSelect:()=>C(n.path,`named`)},{label:w(`Auto extract to the current folder`),icon:(0,N.jsx)(Ei,{size:14}),onSelect:()=>C(n.path,`auto`)},{label:w(`Extract to…`),icon:(0,N.jsx)(ti,{size:14}),separatorBefore:!0,onSelect:()=>C(n.path,`choose`)}],onSelect:()=>void 0}),!T&&j&&n){let e=[];if(oe.loading)e.push({label:w(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of oe.recommended)e.push({label:t.name,group:w(`Suggested apps`),icon:t.icon?(0,N.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,N.jsx)(Oi,{size:14}),onSelect:()=>void Ft(n.path,t.path).then(e=>{e||Mt(n.path)})});for(let t of oe.other)e.push({label:t.name,group:w(`Other apps`),icon:t.icon?(0,N.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,N.jsx)(Oi,{size:14}),onSelect:()=>void Ft(n.path,t.path).then(e=>{e||Mt(n.path)})})}e.push({label:w(`Choose another app…`),icon:(0,N.jsx)(Oi,{size:14}),separatorBefore:!0,onSelect:()=>void Mt(n.path)}),M.push({label:w(`Open with`),icon:(0,N.jsx)(Oi,{size:14}),children:e,onSelect:()=>void Mt(n.path)})}if(T||M.push({label:w(`Compress`),icon:(0,N.jsx)(Ei,{size:14}),separatorBefore:!0,children:[{label:w(`Compress to ZIP`),icon:(0,N.jsx)(Ei,{size:14}),onSelect:()=>void ge(e.paths)},{label:w(`Compress to…`),icon:(0,N.jsx)(Ei,{size:14}),onSelect:()=>ne?.(e.paths,me())}],onSelect:()=>void 0}),!T&&(e?.paths.length??0)>0){let e=[{label:w(`Select link source`),icon:(0,N.jsx)(aa,{size:14}),onSelect:()=>void ye()},...ie?[{label:w(`Cancel selected link`),icon:(0,N.jsx)(yi,{size:14}),onSelect:()=>Oa(null)}]:[],...j&&n?n.isDirectory?[{label:w(`Symbolic link`),icon:(0,N.jsx)(ti,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`symbolic-folder`)},{label:w(`Directory junction`),icon:(0,N.jsx)(ti,{size:14}),onSelect:()=>void ve(`junction`)},{label:w(`Smart copy`),icon:(0,N.jsx)(na,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,N.jsx)(na,{size:14}),onSelect:()=>void ve(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,N.jsx)(na,{size:14}),onSelect:()=>void ve(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,N.jsx)(na,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,N.jsx)(na,{size:14}),onSelect:()=>void ve(`symbolic-copy`)}]:[{label:w(`Symbolic link`),icon:(0,N.jsx)(ni,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`symbolic-file`)},{label:w(`Hard link`),icon:(0,N.jsx)(ni,{size:14}),onSelect:()=>void ve(`hard`)}]:[]];M.push({label:w(`Create link`),icon:(0,N.jsx)(aa,{size:14}),children:e,onSelect:()=>void 0})}!T&&n?.isDirectory&&se!==null&&M.push({label:w(`Case-sensitive names`),icon:(0,N.jsx)(ta,{size:14}),checked:se,onSelect:()=>void _e()}),M.push({label:w(`Copy as path`),icon:(0,N.jsx)(na,{size:14}),onSelect:()=>void I(e.paths)}),b&&M.push({label:w(`Add to file tray`),icon:(0,N.jsx)(Zi,{size:14}),onSelect:()=>b(e.paths)}),!T&&(P?S:x)&&M.push({label:w(P?`Remove from favorites`:`Add to favorites`),icon:P?(0,N.jsx)(ea,{size:14}):(0,N.jsx)($i,{size:14}),onSelect:()=>P?S?.(pe):x?.(pe)}),T||M.push({label:w(`Show in Explorer`),icon:(0,N.jsx)(ti,{size:14}),separatorBefore:!0,onSelect:()=>void Rt(pe[0])}),f&&de.push({label:w(`Cut`),icon:(0,N.jsx)(ra,{size:16}),shortcut:Jt(r.cut),onSelect:()=>f(e.paths,!0)},{label:w(`Copy`),icon:(0,N.jsx)(na,{size:16}),shortcut:Jt(r.copy),onSelect:()=>f(e.paths,!1)}),j&&n&&u&&de.push({label:w(`Rename`),icon:(0,N.jsx)(Ii,{size:16}),shortcut:Jt(r.rename),onSelect:()=>u(n.path)}),d&&de.push({label:w(`Delete`),icon:(0,N.jsx)(_i,{size:16}),danger:!0,shortcut:Jt(r.delete),onSelect:()=>d(e.paths)}),T||de.push({label:w(`Properties`),icon:(0,N.jsx)(di,{size:16}),shortcut:Jt(r.properties),onSelect:()=>void jt(e.paths)})}if(ae.loading)M.push({label:w(`More actions`),icon:(0,N.jsx)(Oi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(ae.verbs.length>0){let e={items:[],children:new Map};for(let t of ae.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,N.jsx)(oo,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Bt(le,ae.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];M.push({label:w(ae.safe?`More actions`:`More actions (extensions)`),icon:(0,N.jsx)(Oi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,N.jsx)(qa,{items:M,onClose:a,quick:de,x:e.x,y:e.y})}function oo({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,N.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,N.jsx)(li,{size:14});case`document`:return(0,N.jsx)(Pi,{size:14});case`cut`:return(0,N.jsx)(ra,{size:14});case`copy`:return(0,N.jsx)(na,{size:14});case`paste`:return(0,N.jsx)(ia,{size:14});case`trash`:return(0,N.jsx)(_i,{size:14});case`pencil`:return(0,N.jsx)(Ii,{size:14});case`gear`:return(0,N.jsx)(di,{size:14});case`star`:return(0,N.jsx)(Ui,{size:14});case`pin`:return(0,N.jsx)(fi,{size:14});case`executable`:return(0,N.jsx)(Oi,{size:14});case`share`:return(0,N.jsx)(aa,{size:14});case`arrow`:return(0,N.jsx)(li,{size:14});default:return(0,N.jsx)(bi,{size:14})}}function so(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function co({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=F(),[l,u]=(0,E.useState)(null),d=(0,E.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,E.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(lo,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,N.jsx)(uo,{children:f?.label??``}):(0,N.jsx)(fo,{children:a}),a===void 0&&(0,N.jsx)(po,{children:(0,N.jsx)(ui,{size:11})})]}),l&&(0,Aa.createPortal)((0,N.jsx)(mo,{"aria-label":c(`Options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,N.jsxs)(ho,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,N.jsx)(go,{children:t.label}),t.value===e&&(0,N.jsx)(vi,{size:11})]},t.value))}),document.body)]})}var lo=_.button`
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
`,uo=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fo=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,po=_.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,mo=_.div`
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
    ${Va}
`,ho=_.button`
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
`,go=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_o=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],vo=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],yo=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],bo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],xo=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function So({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=F(),a=(0,E.useRef)(null),[o,s]=(0,E.useState)(e),[c,l]=(0,E.useState)(t),[u,d]=(0,E.useState)(`zip`),[f,p]=(0,E.useState)(`5`),[m,h]=(0,E.useState)(`default`),[g,_]=(0,E.useState)(`none`),[v,y]=(0,E.useState)(``),[b,x]=(0,E.useState)(`0`),[S,ee]=(0,E.useState)(!1);(0,E.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let C=_o.find(e=>e.value===u)??_o[0],te=u===`zip`||u===`zipx`,ne=g!==`none`,re=te||u===`7z`,w=u===`zip`||u===`7z`,ie=async()=>{if(S||!c.trim()||!o||ne&&v.length===0)return;ee(!0);let e=await r({directory:o,name:c.trim(),format:u,level:C.level?Number(f):0,method:te?m:null,encryption:re?g:`none`,password:ne?v:void 0,splitSize:w?Number(b):0});ee(!1),e&&n()};return(0,Aa.createPortal)((0,N.jsx)(Co,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,N.jsxs)(wo,{"aria-modal":`true`,role:`dialog`,children:[(0,N.jsx)(To,{children:i(`Compress to…`)}),(0,N.jsxs)(Eo,{children:[(0,N.jsx)(Do,{children:i(`Archive name`)}),(0,N.jsx)(Oo,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ie()}}),(0,N.jsx)(ko,{children:C.extension})]}),(0,N.jsxs)(Eo,{children:[(0,N.jsx)(Do,{children:i(`Format`)}),(0,N.jsx)(co,{onChange:e=>d(e),options:_o.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,N.jsxs)(Eo,{children:[(0,N.jsx)(Do,{children:i(`Method`)}),(0,N.jsx)(co,{disabled:!te,onChange:h,options:vo.map(e=>({...e,label:i(e.label)})),value:te?m:`default`,width:236,zIndex:3700})]}),(0,N.jsxs)(Eo,{children:[(0,N.jsx)(Do,{children:i(`Encryption`)}),(0,N.jsx)(co,{disabled:!re,onChange:e=>{_(e),e===`none`&&y(``)},options:yo.map(e=>({...e,label:i(e.label)})),value:re?g:`none`,width:236,zIndex:3700})]}),ne&&(0,N.jsxs)(Eo,{children:[(0,N.jsx)(Do,{children:i(`Password`)}),(0,N.jsx)(Oo,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,N.jsxs)(Eo,{children:[(0,N.jsx)(Do,{children:i(`Split volumes`)}),(0,N.jsx)(co,{disabled:!w,onChange:x,options:bo.map(e=>({...e,label:i(e.label)})),value:w?b:`0`,width:236,zIndex:3700})]}),(0,N.jsxs)(Eo,{children:[(0,N.jsx)(Do,{children:i(`Compression level`)}),(0,N.jsx)(co,{disabled:!C.level,onChange:p,options:xo.map(e=>({...e,label:i(e.label)})),value:C.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,N.jsxs)(Eo,{$stack:!0,children:[(0,N.jsx)(Do,{children:i(`Destination`)}),(0,N.jsxs)(Ao,{children:[(0,N.jsx)(jo,{title:o,children:o}),(0,N.jsx)(No,{disabled:S,onClick:()=>void pa(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,N.jsxs)(Mo,{children:[(0,N.jsx)(No,{disabled:S,onClick:n,type:`button`,children:i(`Cancel`)}),(0,N.jsx)(Po,{disabled:S||!c.trim()||ne&&v.length===0,onClick:()=>void ie(),type:`button`,children:i(S?`Compressing…`:`Compress`)})]})]})}),document.body)}var Co=_.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ga}
`,wo=_.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ba}
`,To=_.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Eo=_.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Do=_.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Oo=_.input`
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
`,ko=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Ao=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,jo=_.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Mo=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,No=_.button`
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
`,Po=_(No)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Fo({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=F(),c=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Aa.createPortal)((0,N.jsx)(Io,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,N.jsxs)(Lo,{role:`alertdialog`,"aria-modal":`true`,children:[(0,N.jsx)(Ro,{children:t}),(0,N.jsx)(zo,{children:n}),(0,N.jsxs)(Bo,{children:[(0,N.jsx)(Vo,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,N.jsx)(Vo,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Io=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ga}
`,Lo=_.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ba}
`,Ro=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,zo=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Bo=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Vo=_.button`
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
`,Ho=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Uo=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Wo=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Go=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Ko({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=F(),[l,u]=(0,E.useState)(!1),[d,f]=(0,E.useState)(!1),[p,m]=(0,E.useState)(!1),[h,g]=(0,E.useState)(0),[_,v]=(0,E.useState)(0),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(!1),[ee,C]=(0,E.useState)(!1),te=(0,E.useRef)(null),ne=(0,E.useRef)(null),re=(0,E.useRef)(null),w=(0,E.useRef)(null),[ie,T]=(0,E.useState)(()=>{let e=Rn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),ae=e?.path??null,D=dn(ae),oe=e?qo(e.name):``,O=!!e&&!e.isDirectory&&Ho.has(oe),se=!!e&&!e.isDirectory&&Uo.has(oe),k=!!e&&!e.isDirectory&&Wo.has(oe),ce=!!e&&!e.isDirectory&&Go.has(oe),A=!!e&&!e.isDirectory&&oe===`pdf`,j=gn(O?D:null,512,e?.modified??0),le=_n(k?D:null,e?.modified??0,oe),ue=_n(O||se?D:null,e?.modified??0,oe),M=vn(A?D:null,e?.modified??0),de=un(!O&&!se&&!k&&!ce&&!A?D:null,e?.isDirectory??!1);if((0,E.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),C(!1)},[ae]),(0,E.useEffect)(()=>{if(!D||!ce){b(null),S(!1);return}let e=!0;return S(!0),b(null),V(D).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`Could not read this file.`)}),S(!1))}),()=>{e=!1}},[D,ce]),!e&&!s)return null;let fe=e=>{re.current={x:e.clientX,width:ne.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},pe=e=>{let t=re.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},P=e=>{re.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},me=e=>{w.current={y:e.clientY,height:ie},e.currentTarget.setPointerCapture(e.pointerId)},he=e=>{let t=w.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));T(n),zn(`yafm.preview.media.height`,n)},ge=e=>{w.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,N.jsxs)(Yo,{$open:r,children:[r&&(0,N.jsx)(Xo,{onPointerDown:fe,onPointerMove:pe,onPointerUp:P,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,N.jsx)(Zo,{ref:ne,style:{width:r?t:0},children:(0,N.jsxs)(Qo,{children:[(0,N.jsx)(ti,{size:56}),(0,N.jsx)(`span`,{children:s})]})})]});let I=()=>{let e=te.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,N.jsxs)(Yo,{$open:r,children:[r&&(0,N.jsx)(Xo,{onPointerDown:fe,onPointerMove:pe,onPointerUp:P,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,N.jsxs)(Zo,{ref:ne,style:{width:r?t:0},children:[(0,N.jsx)($o,{style:{height:ie},children:O&&ue&&!l?(0,N.jsxs)(ts,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,N.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:I,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:j??void 0,preload:`metadata`,ref:te,src:ue}),(0,N.jsx)(ns,{$visible:!d,onClick:I,title:c(`Play`),type:`button`,children:(0,N.jsx)(oa,{size:28})}),(0,N.jsxs)(rs,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,N.jsxs)(is,{children:[(0,N.jsx)(`span`,{children:Jo(_)}),(0,N.jsx)(`span`,{children:Jo(h)})]}),(0,N.jsx)(as,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=te.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):se&&ue?(0,N.jsx)(`audio`,{controls:!0,src:ue}):k&&le?(0,N.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:le}):A&&M&&!ee?(0,N.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>C(!0),src:M}):A?(0,N.jsx)(ni,{size:64}):ce?(0,N.jsx)(os,{children:x||!y?(0,N.jsx)(cs,{children:c(`Loading…`)}):y.error?(0,N.jsx)(cs,{children:y.error}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(ss,{children:y.text}),y.truncated&&(0,N.jsx)(cs,{children:c(`Showing the first 256 KB.`)})]})}):O&&j?(0,N.jsx)(`img`,{alt:``,src:j}):de?(0,N.jsx)(`img`,{alt:``,src:de}):e.isDirectory?(0,N.jsx)(ti,{size:64}):(0,N.jsx)(ni,{size:64})}),(0,N.jsx)(es,{onDoubleClick:()=>{T(210),zn(`yafm.preview.media.height`,210)},onPointerDown:me,onPointerMove:he,onPointerUp:ge,title:c(`Drag to resize; double-click to reset`)}),(0,N.jsxs)(ls,{children:[(0,N.jsx)(us,{title:e.path,children:e.name}),o&&(0,N.jsx)(ds,{children:o}),(0,N.jsx)(fs,{children:e.fields.map(e=>(0,N.jsxs)(ps,{children:[(0,N.jsx)(ms,{children:e.label}),(0,N.jsx)(hs,{title:e.value,children:e.value})]},e.label))})]})]})]})}function qo(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Jo(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Yo=_.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,Xo=_.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Zo=_.aside`
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
`,Qo=_.div`
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
`,$o=_.div`
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
`,es=_.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ts=_.div`
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
`,ns=_.button`
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
`,rs=_.div`
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
`,is=_.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,as=_.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,os=_.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,ss=_.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,cs=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,ls=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,us=_.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,ds=_.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,fs=_.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,ps=_.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,ms=_.span`
    color: var(--text-muted);
`,hs=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,gs=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],_s=[...gs],vs={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},ys={folder:e=>(0,N.jsx)(ti,{size:e}),home:e=>(0,N.jsx)(ei,{size:e}),desktop:e=>(0,N.jsx)(Li,{size:e}),documents:e=>(0,N.jsx)(Ri,{size:e}),downloads:e=>(0,N.jsx)(zi,{size:e}),pictures:e=>(0,N.jsx)(Bi,{size:e}),music:e=>(0,N.jsx)(Vi,{size:e}),videos:e=>(0,N.jsx)(Hi,{size:e}),drive:e=>(0,N.jsx)(ri,{size:e}),image:e=>(0,N.jsx)(Ci,{size:e}),video:e=>(0,N.jsx)(wi,{size:e}),audio:e=>(0,N.jsx)(Ti,{size:e}),text:e=>(0,N.jsx)(xi,{size:e}),code:e=>(0,N.jsx)(Si,{size:e}),clock:e=>(0,N.jsx)(hi,{size:e}),star:e=>(0,N.jsx)(Ui,{size:e}),file:e=>(0,N.jsx)(ni,{size:e}),archive:e=>(0,N.jsx)(Ei,{size:e}),pdf:e=>(0,N.jsx)(Di,{size:e}),executable:e=>(0,N.jsx)(Oi,{size:e}),font:e=>(0,N.jsx)(ki,{size:e}),database:e=>(0,N.jsx)(Ai,{size:e}),config:e=>(0,N.jsx)(ji,{size:e}),spreadsheet:e=>(0,N.jsx)(Mi,{size:e}),presentation:e=>(0,N.jsx)(Ni,{size:e}),document:e=>(0,N.jsx)(Pi,{size:e}),app:e=>(0,N.jsx)(bi,{size:e}),gear:e=>(0,N.jsx)(di,{size:e}),pin:e=>(0,N.jsx)(fi,{size:e}),trash:e=>(0,N.jsx)(_i,{size:e}),overview:e=>(0,N.jsx)(Fi,{size:e}),book:e=>(0,N.jsx)(Wi,{size:e}),briefcase:e=>(0,N.jsx)(Gi,{size:e}),cloud:e=>(0,N.jsx)(Ki,{size:e}),gamepad:e=>(0,N.jsx)(qi,{size:e}),camera:e=>(0,N.jsx)(Ji,{size:e}),terminal:e=>(0,N.jsx)(Yi,{size:e}),server:e=>(0,N.jsx)(Xi,{size:e}),package:e=>(0,N.jsx)(Zi,{size:e}),globe:e=>(0,N.jsx)(Qi,{size:e}),heart:e=>(0,N.jsx)($i,{size:e}),share:e=>(0,N.jsx)(Xi,{size:e}),favorites:e=>(0,N.jsx)($i,{size:e})};function bs(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function xs(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??gs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||_s.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=bs(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${vs[n]??n}${Ss(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Ss(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Cs({panel:e,size:t=16}){let n=fn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,N.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?ys[e.icon]:void 0;if(r)return(0,N.jsx)(N.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,N.jsx)(ti,{size:t});case`recent`:return(0,N.jsx)(hi,{size:t});case`frequent`:return(0,N.jsx)(Ui,{size:t});case`drives`:return(0,N.jsx)(ri,{size:t});case`home`:return(0,N.jsx)(ei,{size:t});case`share`:return(0,N.jsx)(Xi,{size:t});case`favorites`:return(0,N.jsx)($i,{size:t});default:return(0,N.jsx)(ti,{size:t})}}function ws({place:e,size:t=18}){let n=fn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,N.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&ys[e.icon]?(0,N.jsx)(N.Fragment,{children:ys[e.icon](t)}):(0,N.jsx)(ti,{size:t})}var Ts=`#64748b`;function Es(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Ds({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=F(),[c,l]=(0,E.useState)(``),[u,d]=(0,E.useState)(`#2dd4bf`),f=(0,E.useRef)(null);(0,E.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Aa.createPortal)((0,N.jsxs)(Os,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,N.jsxs)(ks,{children:[(0,N.jsx)(`span`,{children:s(`Tags`)}),(0,N.jsx)(As,{onClick:o,title:s(`Close`),type:`button`,children:(0,N.jsx)(yi,{size:11})})]}),(0,N.jsxs)(js,{children:[p.length===0&&(0,N.jsx)(Fs,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,N.jsxs)(Ms,{children:[(0,N.jsx)(Ns,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,N.jsxs)(Ps,{$color:t,$ink:Es(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,N.jsx)(vi,{size:11}),(0,N.jsx)(`span`,{children:e})]})]},e)})]}),(0,N.jsxs)(Is,{children:[(0,N.jsx)(Ns,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,N.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,N.jsx)(Ls,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var Os=_.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${Ba}
`,ks=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,As=_.button`
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
`,js=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Ms=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ns=_.input`
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
`,Ps=_.button`
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
`,Fs=_.span`
    font-size: 11px;
    color: var(--text-muted);
`,Is=_.div`
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
`,Ls=_.button`
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
`,Rs={file:ni,folder:ti,text:xi,code:Si,image:Ci,video:wi,audio:Ti,archive:Ei,pdf:Di,executable:Oi,font:ki,database:Ai,config:ji,spreadsheet:Mi,presentation:Ni,document:Pi},zs={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Bs(e){let t=e.lastIndexOf(`.`);return t>0?zs[e.slice(t).toLowerCase()]??`file`:`file`}function Vs({name:e,size:t}){let n=Rs[e??`file`]??ni;return(0,N.jsx)(n,{size:t})}function Hs({path:e,name:t,isDirectory:n,size:r=18}){let i=un(e,n);return i?(0,N.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,N.jsx)(ti,{size:r}):(0,N.jsx)(Vs,{name:Bs(t),size:r})}var Us=`application/x-yafm-paths`,Ws=[Us,`text/uri-list`];function Gs(e){return e?.types.some(e=>Ws.includes(e.toLowerCase()))??!1}function Ks(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Us);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Js).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var qs=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Js(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return qs?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Ys(e,t,n=!0){e.dataTransfer.setData(Us,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Xs({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=F(),[m,h]=(0,E.useState)(()=>new Set),[g,_]=(0,E.useState)(!1),v=(0,E.useRef)(null),y=(0,E.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),b=(0,E.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),x=(0,E.useRef)(null);if((0,E.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=x.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Gs(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Ks(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let S=new Set([...e,...t].map(e=>e.path)),ee=S.size>0&&[...S].every(e=>m.has(e)),C=S.size,te=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},ne=()=>{h(ee?new Set:S)},re=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},w=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},T=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},ae=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},D=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},oe=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of b)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},O=(e,t)=>{let n=m.has(e.path);return(0,N.jsxs)(cc,{$checked:n,draggable:!0,onClick:()=>te(e.path),onDragStart:r=>{Ys(r,n&&m.size>0?[...new Set([...y,...b].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,N.jsx)(lc,{$checked:n,onClick:t=>{t.stopPropagation(),te(e.path)},type:`button`,children:n&&(0,N.jsx)(vi,{size:8})}),(0,N.jsx)(Hs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,N.jsxs)(uc,{children:[(0,N.jsx)(dc,{children:e.name}),(0,N.jsx)(fc,{children:ie(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},se=e=>{Gs(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,N.jsxs)(Zs,{$dragging:g,"data-tray":`true`,ref:x,style:{left:i.x,top:i.y},onDragEnter:se,onDragOver:se,onDrop:e=>{let{paths:t}=Ks(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,N.jsxs)(Qs,{onPointerDown:re,onPointerMove:w,onPointerUp:T,children:[(0,N.jsxs)($s,{children:[(0,N.jsx)(Zi,{size:13}),p(`Tray`),(0,N.jsx)(ec,{children:C})]}),(0,N.jsxs)(tc,{onPointerDown:e=>e.stopPropagation(),children:[(0,N.jsx)(nc,{onClick:ne,title:p(ee?`Select none`:`Select all`),type:`button`,children:p(ee?`None`:`All`)}),(0,N.jsx)(nc,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,N.jsx)(rc,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,N.jsx)(yi,{size:10})})]})]}),(0,N.jsxs)(ic,{children:[(0,N.jsxs)(oc,{children:[p(`In this app`),(0,N.jsx)(ec,{children:e.length})]}),e.length===0&&(0,N.jsx)(ac,{children:p(`Drag files or folders here`)}),e.map(e=>O(e,!0)),t.length>0&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(oc,{$clipboard:!0,children:[p(`Clipboard`),(0,N.jsx)(ec,{children:t.length}),n&&(0,N.jsx)(sc,{children:p(`Cut`)})]}),t.map(e=>O(e,n))]})]}),(0,N.jsxs)(pc,{children:[(0,N.jsx)(mc,{$plain:!0,disabled:y.length===0,onClick:D,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,N.jsx)(mc,{disabled:m.size===0||!a,onClick:oe,type:`button`,children:p(`Move here`)}),(0,N.jsx)(mc,{$danger:!0,disabled:y.length===0,onClick:ae,type:`button`,children:p(`Remove`)})]})]})}var Zs=_.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${ja}
    ${Ba}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Qs=_.div`
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
`,$s=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,ec=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,tc=_.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,nc=_.button`
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
`,rc=_.button`
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
`,ic=_.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,ac=_.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,oc=_.div`
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
`,sc=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,cc=_.div`
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
`,lc=_.button`
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
`,uc=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,dc=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fc=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,pc=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,mc=_.button`
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
`,hc=new Map,gc=new Set,_c=0;function vc(){_c+=1;for(let e of gc)e()}function yc(e,t){t?hc.set(e,t):hc.delete(e),vc()}function bc(e){return hc.has(e)}function xc(e,t,n){hc.get(e)?.(t,n)}function Sc(e){return gc.add(e),()=>gc.delete(e)}function Cc(){return _c}function wc(e){return(0,E.useSyncExternalStore)(Sc,Cc,Cc),{available:bc(e),open:(t,n)=>xc(e,t,n)}}function Tc(e){return[...hc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function Ec(e){return(0,E.useSyncExternalStore)(Sc,Cc,Cc),{available:Tc(e).length>0,open:(t,n)=>{let r=Tc(e).at(-1);r&&xc(r,t,n)}}}var Dc=60,Oc=300,kc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Ac=new Set,jc=`yafm.columnWidths`,Mc=`yafm.reset-column-widths`,Nc=64,Pc=720,Fc=160,Ic=190,Lc=120;function Rc({listing:e,loading:t,error:n,find:r=bn,view:i,showImages:a,imageStripHeight:s=Ic,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:d,onOpenFile:p,showCheckboxes:m=!0,openOnSingleClick:h=!1,shortcuts:g=Ut,enableShortcuts:_=!0,refreshToken:b=0,onRefresh:x,onRename:S,onClipboardChanged:ee,cutPaths:C=Ac,onTransfer:te,onAddToTray:ne,onAddFavorite:re,onRemoveFavorite:w,favoritePaths:ie,onExtractArchive:T,onPaste:ae,confirmDelete:D=!1,previewVideoAudio:oe=!1,previewVideoAutoplay:O=!1,showDetails:se=!0,onPreviewInfo:k,onActivate:ce,groupOf:A,onGridScroll:j,gridFooter:le,allowBackgroundMenu:ue=!0,readOnly:M=!1,onSelectionChange:de,onSelectionCountChange:fe,selectionMenuRequest:pe,selectionMenuId:P,singleSelect:me=!1,pendingRename:he=null,pendingRenameToken:ge=0}){let I=F(),_e=J(),L=(0,E.useRef)(null),ve=(0,E.useRef)(null),R=(0,E.useRef)(null),[ye,z]=(0,E.useState)(Oc),[be,xe]=(0,E.useState)({top:0,height:640}),Se=(0,E.useRef)(null),B=(0,E.useRef)(null),[Ce,we]=(0,E.useState)(null),[Te,Ee]=(0,E.useState)(s),[V,De]=(0,E.useState)(()=>new Set),[Oe,ke]=(0,E.useState)(()=>Bn(jc)??{}),Ae=(0,E.useRef)(V),je=(0,E.useRef)([]);Ae.current=V,(0,E.useEffect)(()=>de?.([...V]),[V,de]),(0,E.useEffect)(()=>fe?.(V.size),[V,fe]),(0,E.useEffect)(()=>{let e=pe;if(!e||e.token===Ne.current)return;Ne.current=e.token;let t=[...Ae.current];t.length!==0&&(Me({x:e.x,y:e.y,paths:t,background:!1}),yt().then(qe,()=>qe(!1)))},[pe]);let[H,Me]=(0,E.useState)(null),Ne=(0,E.useRef)(0),[Pe,Fe]=(0,E.useState)(null),[Ie,Le]=(0,E.useState)(null),[Re,ze]=(0,E.useState)(null),Be=(0,E.useRef)(Re);Be.current=Re;let Ve=(0,E.useRef)(0),He=(0,E.useRef)(ce);He.current=ce;let[Ue,We]=(0,E.useState)(()=>{let e=Rn(`yafm.preview.width`,320);return e>=220?e:320}),Ge=(0,E.useCallback)(e=>{We(e),zn(`yafm.preview.width`,e)},[]),[Ke,qe]=(0,E.useState)(!1),Je=(0,E.useCallback)((e,t)=>{let n=[...Ae.current];n.length!==0&&(Me({x:e,y:t,paths:n,background:!1}),yt().then(qe,()=>qe(!1)))},[]);(0,E.useEffect)(()=>{if(P)return yc(P,V.size>0?Je:null),()=>yc(P,null)},[P,V,Je]),(0,E.useEffect)(()=>{De(new Set),ze(null),Me(null),B.current=null},[e?.path]),(0,E.useEffect)(()=>{Ee(s)},[s]),(0,E.useEffect)(()=>{De(new Set),ze(null),B.current=null},[b]);let Ye=e=>{Se.current={y:e.clientY,height:Te},e.currentTarget.setPointerCapture(e.pointerId)},Xe=e=>{let t=Se.current;if(!t)return;let n=Math.max(Lc,Math.round(window.innerHeight*.7));Ee(Math.min(n,Math.max(Lc,t.height+t.y-e.clientY)))},Ze=e=>{Se.current&&(Se.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(Te))},Qe=()=>{Ee(Ic),c?.(Ic)},$e=r.query.length>0,et=(0,E.useMemo)(()=>kc.filter(e=>i.columns?.includes(e.id)),[i.columns]),tt=i.columns?.includes(`linkTarget`)??!1,nt=(0,E.useCallback)(e=>Math.min(Pc,Math.max(Nc,Oe[e.id]??e.width)),[Oe]),rt=(0,E.useMemo)(()=>`minmax(160px, 1fr) ${et.map(e=>`${nt(e)}px`).join(` `)}`.trim(),[et,nt]),it=(0,E.useRef)(null),at=(0,E.useRef)(null),ot=()=>Math.floor(at.current?.getBoundingClientRect().width??Fc),st=e=>{let t=et[0];t&&(e.preventDefault(),e.stopPropagation(),it.current={left:{id:t.id,start:nt(t)},startX:e.clientX,nameStart:ot()})},ct=(e,t)=>{let n=et[t],r=et[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),it.current={left:{id:n.id,start:nt(n)},right:{id:r.id,start:nt(r)},startX:e.clientX,nameStart:0})},lt=e=>ke(t=>{let n={...t};return delete n[e],Vn(jc,n),n});(0,E.useEffect)(()=>{let e=e=>{let t=it.current;if(!t)return;let n=e.clientX-t.startX;ke(e=>{if(!t.right){let r=Math.max(0,t.nameStart-Fc),i=Math.min(Math.min(Pc,t.left.start+r),Math.max(Nc,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(Pc,Math.max(Nc,t.left.start+n)),a=Math.min(Math.min(Pc,r-Nc),Math.max(Math.max(Nc,r-Pc),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{it.current&&(it.current=null,ke(e=>(Vn(jc,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,E.useEffect)(()=>{let e=()=>ke(()=>(Vn(jc,{}),{}));return window.addEventListener(Mc,e),()=>window.removeEventListener(Mc,e)},[]);let U=(0,E.useMemo)(()=>e?Vc(e.entries.map(t=>{let n=t.isDirectory?In(_e,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:$e?xn(i,r):null,tags:e.tags[t.name]??[],cut:C.has(t.fullPath)}}).filter(e=>!$e||r.mode===`dim`||e.ranges!==null),i,e,I):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,$e,r,_e,i.sort,i.sortDescending,I,C]);je.current=U;let ut=Math.max(40,i.iconSize+20),dt=Math.max(0,Math.floor(be.top/ut)-4),ft=Math.min(U.length,dt+Math.ceil(be.height/ut)+10),pt=(0,E.useMemo)(()=>U.slice(dt,ft),[U,dt,ft]);(0,E.useEffect)(()=>{let e=R.current;if(!e||i.mode!==`list`)return;let t=()=>xe(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,E.useEffect)(()=>{xe(e=>({...e,top:0})),R.current&&(R.current.scrollTop=0)},[e?.path]),(0,E.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=U.findIndex(e=>e.entry.fullPath===r.currentPath),t=R.current;if(e<0||!t)return;let n=e*ut;(n<t.scrollTop||n+ut>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else L.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,U,ut]);let mt=(0,E.useMemo)(()=>U.slice(0,ye),[U,ye]);(0,E.useEffect)(()=>{z(Oc)},[e?.path]),(0,E.useEffect)(()=>{if(!r.currentPath)return;let e=U.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&z(t=>Math.max(t,e+Oc))},[r.currentPath,U]);let ht=(0,E.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&z(e=>Math.min(U.length,e+Oc))},[U.length]),gt=i.mode===`grid`,_t=(0,E.useMemo)(()=>{if(!gt)return[];if(!A)return Wc(mt,Uc);let e=[],t=new Map;for(let n of mt){let r=A(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[mt,gt,A]),bt=(0,E.useMemo)(()=>a?U.filter(e=>!e.entry.isDirectory&&Mn(e.entry.name)):[],[U,a]),xt=bt.length,St=(0,E.useMemo)(()=>bt.slice(0,Dc),[bt]),Dt=(0,E.useMemo)(()=>a?Wc(St,Hc):[],[St,a]),Ot=(0,E.useMemo)(()=>U.map(e=>e.entry.fullPath),[U]),kt=U.length>0&&V.size>=U.length,Mt=V.size>0&&!kt,Pt=()=>{me||(kt?Rt():De(new Set(Ot)))},Ft=e?.path??``,It=(0,E.useCallback)((e,t)=>{if(me){B.current=t,De(new Set([t]));return}let n=e.ctrlKey||e.metaKey;De(r=>{if(e.shiftKey&&B.current!==null){let e=Ot.indexOf(B.current),i=Ot.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Ot[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),B.current=t,e}return B.current=t,new Set([t])})},[Ot,me]),Lt=(0,E.useCallback)(e=>{me?(B.current=e,De(new Set([e]))):(B.current=e,De(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[me]),Rt=(0,E.useCallback)(()=>{B.current=null,De(new Set)},[]);(0,E.useEffect)(()=>{if(ge===0||!he||Ve.current===ge||!e?.entries.some(e=>e.fullPath===he))return;Ve.current=ge,B.current=he,De(new Set([he])),ze({path:he,value:v(he)});let t=U.findIndex(e=>e.entry.fullPath===he),n=R.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*ut;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(he)}"]`)?.scrollIntoView({block:`nearest`})})}},[R,e,he,ge,ut,U,i.mode]),(0,E.useEffect)(()=>{if(!Re)return;let e=U.findIndex(e=>e.entry.fullPath===Re.path),t=R.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*ut;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Re.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[R,Re,ut,U,i.mode]);let zt=(0,E.useCallback)(()=>Me(null),[]),Bt=(0,E.useCallback)((e,t)=>{e.isDirectory?d(e.fullPath,Kt(t)):p?.(e.fullPath,Kt(t))},[d,p]),W=(0,E.useCallback)((e,t,n)=>{we({entry:e,x:t,y:n})},[]),Ht=(0,E.useRef)(null),Wt=(0,E.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Ys(e,V.has(n)?[...V]:[n])},[V]),Gt=(0,E.useCallback)(e=>{if(!Gs(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Ht.current=t?.dataset.directory===`true`?t.dataset.path??Ft:Ft,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Ft]),Jt=(0,E.useCallback)(e=>{if(M)return;let{paths:t,move:n}=Ks(e),r=Ht.current??Ft;Ht.current=null,t.length!==0&&te&&(e.preventDefault(),te(t,r,!e.ctrlKey&&n))},[Ft,te,M]),Yt=(0,E.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),M||!t&&!ue)return;let n=Ae.current;t&&!n.has(t)&&De(new Set([t])),t&&(B.current=t);let r=t?n.has(t)?[...n]:[t]:[];Me({x:e.clientX,y:e.clientY,paths:r,background:!t}),yt().then(qe,()=>qe(!1))},[ue,Ft]),Zt=(0,E.useCallback)(()=>x?.(),[x]),Qt=(e,t)=>{B.current=e,De(new Set([e])),t&&ze({path:e,value:v(e)}),Zt()},$t=Pe&&(0,N.jsx)(So,{initialDirectory:Ft,initialName:Pe.name,onCancel:()=>Fe(null),onCompress:async e=>{let t=await Vt(Pe.paths,e);return!t.ok||!t.path?(va(t.error??I(`Could not create the archive.`)),!1):(Qt(t.path,!1),!0)}}),en=async(e,t=!1)=>{await vt(e,t)&&(qe(!0),ee?.())},tn=async e=>{e&&(await Ct(e)?(Zt(),ae?.()):va(I(`Nothing on the clipboard could be pasted here.`)))},nn=async(e,t=!1)=>{if(!Ft)return;let n=e===null?await Et(Ft,t):await At(Ft,e);!n.ok||n.path===null?va(n.error??I(`Could not create the item.`)):(B.current=n.path,De(new Set([n.path])),ze({path:n.path,value:v(n.path)}),Zt())},rn=e=>{De(new Set([e.fullPath])),B.current=e.fullPath,ze({path:e.fullPath,value:e.name})},an=(0,E.useCallback)(e=>ze(t=>t&&{...t,value:e}),[]),G=(0,E.useCallback)(()=>ze(null),[]),K=(0,E.useCallback)(async()=>{let e=Be.current;if(ze(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=je.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Tt(e.path,t);r.ok?(Rt(),r.path&&S?.(e.path,r.path),Zt(),window.setTimeout(()=>Zt(),250)):va(r.error??I(`Could not rename the entry.`))},[Rt,S,Zt,I]),on=async(e,t=!1)=>{if((t||D)&&!await sn(e,t))return;let n=await wt(e,t);if(!n.ok&&n.needsPermanent){if(!await sn(e,!0))return;n=await wt(e,!0)}if(n.ok)Rt(),Zt();else{if(n.cancelled)return;va(n.error??I(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},sn=(0,E.useCallback)((e,t)=>new Promise(n=>Le({paths:e,permanent:t,resolve:n})),[]),cn=(0,E.useCallback)(e=>{Le(t=>(t?.resolve(e),null))},[]);(0,E.useEffect)(()=>{if(!_||H)return;let e=e=>{if(Xt(e.target))return;He.current?.();let t=qt(e),n=[...V],r=n.length===1?U.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Ot.length===0)return;e.preventDefault();let n=B.current&&Ot.includes(B.current)?B.current:V.size===1?[...V][0]:null,r=n?Ot.indexOf(n):-1,i=t===`home`?0:t===`end`?Ot.length-1:Math.max(0,Math.min(Ot.length-1,r+(t===`arrowdown`?1:-1))),a=Ot[i];De(new Set([a])),B.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===g.copy?i(()=>{n.length>0&&en(n)}):t===g.cut?i(()=>{n.length>0&&en(n,!0)}):t===g.paste?i(()=>void tn(Ft)):t===g.delete?i(()=>{n.length>0&&on(n)}):t===g.deletePermanently?i(()=>{n.length>0&&on(n,!0)}):t===g.selectAll?i(()=>{De(new Set(Ot)),B.current=Ot[0]??null}):t===g.invertSelection?i(()=>{De(new Set(Ot.filter(e=>!V.has(e)))),B.current=Ot[0]??null}):t===g.rename&&r?i(()=>void rn(r)):t===g.open&&r?i(()=>{r.isDirectory?d(r.fullPath):p?.(r.fullPath)}):t===g.newFolder||t===`f10`?i(()=>void nn(null)):t===g.terminal?i(()=>void Nt(Ft)):t===g.properties&&i(()=>void jt(n.length>0?n:Ft?[Ft]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Ot,en,nn,Ft,_,H,d,p,tn,on,rn,U,V,g]);let ln=Ie&&(0,N.jsx)(Fo,{confirmLabel:Ie.permanent?I(`Delete`):I(`Move`),danger:Ie.permanent,message:Ie.permanent?I(`Permanently delete {target}? This cannot be undone.`,{target:Ie.paths.length===1?I(`this item`):I(`{count} items`,{count:Ie.paths.length})}):I(`Move {target} to the recycle bin?`,{target:Ie.paths.length===1?I(`this item`):I(`{count} items`,{count:Ie.paths.length})}),onCancel:()=>cn(!1),onConfirm:()=>cn(!0),open:!0,title:Ie.permanent?I(`Delete permanently`):I(`Move to the recycle bin`)}),q=(0,E.useMemo)(()=>{if(!e||V.size===0)return null;let t=Ot.find(e=>V.has(e));return t?U.find(e=>e.entry.fullPath===t)?.entry??null:null},[Ot,e,U,V]),un=(0,E.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:v(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:I(`Type`),value:I(`Folder`)},{label:I(`Location`),value:e.parent??`—`},{label:I(`Path`),value:e.path},{label:I(`Size`),value:f(t)},{label:I(`Items`),value:o(I,n,`1 item`,`{count} items`)},{label:I(`Modified`),value:`—`},{label:I(`Created`),value:`—`},{label:I(`Attributes`),value:`—`}]}},[e,I]),dn=(0,E.useMemo)(()=>{if(!q||!e)return null;let t=q.isDirectory?e.folderSizes[q.name]:void 0,n=e.tags[q.name]??[],r=q.name.lastIndexOf(`.`),i=r>0&&r<q.name.length-1?q.name.slice(r+1).toUpperCase():`—`;return{name:q.name,path:q.fullPath,isDirectory:q.isDirectory,size:q.size,modified:q.modified,created:q.created,fields:[{label:I(`Type`),value:qc(q,I)},...q.isEncrypted?[{label:I(`Encryption`),value:I(`Password required`)}]:[],{label:I(`Extension`),value:q.isDirectory?`—`:i},{label:I(`Location`),value:e.path},{label:I(`Full path`),value:q.fullPath},{label:I(`Size`),value:q.isDirectory?t===void 0?`—`:f(t):f(q.size)},...q.isDirectory?[{label:I(`Items`),value:`${e.counts[q.name]??`—`}`}]:[],{label:I(`Modified`),value:y(q.modified)},{label:I(`Created`),value:y(q.created)},{label:I(`Link status`),value:q.linkTarget==null?q.linkCount>1?I(`Hard link`):`—`:q.linkValid?`OK`:I(`Broken`)},...q.linkTarget?[{label:I(`Target`),value:q.linkTarget}]:[],...q.linkCount>1?[{label:I(`Links`),value:String(q.linkCount)}]:[],{label:I(`Attributes`),value:[q.isHidden?I(`Hidden`):``,q.isSystem?I(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:I(`Tags`),value:n.join(`, `)}]:[]]}},[e,q,I]),fn=H?.paths.length===1?H.paths[0]:null,pn=fn?U.find(e=>e.entry.fullPath===fn)?.entry:void 0,mn=pn?{path:pn.fullPath,isDirectory:pn.isDirectory}:null,hn=dn??un,gn=(0,E.useRef)(k);gn.current=k,(0,E.useEffect)(()=>{gn.current?.(hn)},[k,hn]);let _n=se&&hn&&(0,N.jsx)(Ko,{info:hn,onWidth:Ge,selectionNote:V.size>1?o(I,V.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:oe,videoAutoplay:O,width:Ue});return n&&!e?(0,N.jsx)(Zl,{children:(0,N.jsx)($l,{children:n})}):!e&&!t?(0,N.jsx)(Zl,{children:(0,N.jsx)(Ql,{children:I(`Nothing selected.`)})}):i.mode===`grid`?(0,N.jsxs)(ml,{onPointerDown:ce,children:[(0,N.jsxs)(hl,{children:[(0,N.jsxs)(Cl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Rt()},onContextMenu:e=>Yt(e),onDragOver:Gt,onDragStart:Wt,onDrop:Jt,onScroll:e=>{j?.(e.currentTarget),ht(e.currentTarget)},children:[m&&U.length>0&&(0,N.jsxs)(dl,{children:[(0,N.jsx)(ll,{$checked:!me&&kt,$partial:!me&&Mt,"aria-label":I(kt?`Select none`:`Select all`),disabled:me,onClick:Pt,title:I(kt?`Select none`:`Select all`),type:`button`,children:kt?(0,N.jsx)(vi,{size:10}):Mt?(0,N.jsx)(ul,{}):null}),(0,N.jsx)(`span`,{children:I(kt?`Select none`:`Select all`)})]}),t&&!e?(0,N.jsx)(Ol,{$size:i.gridSize,children:(0,N.jsx)($c,{size:i.gridSize})}):(0,N.jsx)(tl,{counts:e?.counts,currentPath:$e?r.currentPath:null,groups:_t,gridSize:i.gridSize,innerRef:L,onContextMenu:Yt,onOpen:d,onOpenFile:p,onRenameCancel:G,onRenameChange:an,onRenameCommit:K,onSelect:It,onToggle:Lt,openOnSingleClick:h,renaming:Re,searching:$e,selected:V,showCheckboxes:m,showTarget:tt}),!t&&e&&U.length===0&&(0,N.jsx)(Xl,{children:(0,N.jsx)(Ql,{children:n??($e&&r.mode===`hide`?I(`No entries match the search.`):I(`This folder is empty.`))})}),le]}),H&&(0,N.jsx)(ao,{canPaste:Ke,directory:Ft,allowCompression:!0,menu:H,onAddToTray:ne,onAddFavorite:re,onRemoveFavorite:w,favoritePaths:ie,onExtractArchive:T,onArchiveCreated:Qt,onClose:zt,onCompressTo:(e,t)=>Fe({paths:e,name:t}),onCopy:en,onCreateFile:e=>void nn(e),onCreateFolder:e=>void nn(null,e),onDelete:on,onOpen:d,onOpenFile:p,onPaste:tn,onRefresh:Zt,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&rn(t)},shortcuts:g,target:mn}),$t,ln]}),_n]}):(0,N.jsxs)(ml,{onPointerDown:ce,children:[(0,N.jsxs)(hl,{children:[(0,N.jsxs)(gl,{onScroll:e=>{R.current&&R.current.scrollLeft!==e.currentTarget.scrollLeft&&(R.current.scrollLeft=e.currentTarget.scrollLeft)},ref:ve,style:{gridTemplateColumns:rt},children:[(0,N.jsxs)(ol,{ref:at,children:[m&&(0,N.jsx)(ll,{$checked:!me&&kt,$partial:!me&&Mt,"aria-label":I(kt?`Select none`:`Select all`),disabled:me,onClick:e=>{e.stopPropagation(),Pt()},title:I(kt?`Select none`:`Select all`),type:`button`,children:kt?(0,N.jsx)(vi,{size:10}):Mt?(0,N.jsx)(ul,{}):null}),(0,N.jsxs)(_l,{onClick:()=>l(`name`),type:`button`,children:[I(`Name`),zc(i,`name`)]}),(0,N.jsx)(cl,{"aria-label":I(`Resize column`),onDoubleClick:()=>et[0]&&lt(et[0].id),onPointerDown:st,role:`separator`})]}),et.map((e,t)=>(0,N.jsxs)(sl,{children:[(0,N.jsxs)(_l,{onClick:()=>l(e.id),type:`button`,children:[I(e.label),zc(i,e.id)]}),t<et.length-1&&(0,N.jsx)(cl,{"aria-label":I(`Resize column`),onDoubleClick:()=>lt(e.id),onPointerDown:e=>ct(e,t),role:`separator`})]},e.id))]}),(0,N.jsxs)(vl,{onClick:e=>{e.target===e.currentTarget&&Rt()},onContextMenu:e=>Yt(e),onDragOver:Gt,onDragStart:Wt,onDrop:Jt,onScroll:e=>{ve.current&&ve.current.scrollLeft!==e.currentTarget.scrollLeft&&(ve.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;xe(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:R,children:[t&&!e?(0,N.jsx)(Qc,{template:rt,columns:et.length}):(0,N.jsxs)(N.Fragment,{children:[dt>0&&(0,N.jsx)(`div`,{style:{height:dt*ut}}),pt.map(t=>{let n=t.entry.fullPath;return(0,N.jsx)(rl,{current:$e&&n===r.currentPath,dim:$e&&t.ranges===null,height:ut,iconSize:i.iconSize,innerRef:L,listing:e,onContextMenu:Yt,onOpen:Bt,onRenameCancel:G,onRenameChange:an,onRenameCommit:K,onSelect:It,onTagEdit:W,onToggle:Lt,openOnSingleClick:h,renaming:Re?.path===n?{value:Re.value}:null,row:t,selected:V.has(n),showCheckboxes:m,showTarget:tt,template:rt,visible:et},n)}),ft<U.length&&(0,N.jsx)(`div`,{style:{height:(U.length-ft)*ut}})]}),!t&&e&&U.length===0&&(0,N.jsx)(Zl,{children:(0,N.jsx)(Ql,{children:n??($e&&r.mode===`hide`?I(`No entries match the search.`):I(`This folder is empty.`))})})]}),a&&bt.length>0&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(yl,{onDoubleClick:Qe,onPointerDown:Ye,onPointerMove:Xe,onPointerUp:Ze,title:I(`Drag to resize; double-click to reset`)}),(0,N.jsxs)(bl,{style:{height:Te},children:[(0,N.jsxs)(xl,{children:[I(`Preview`),(0,N.jsx)(Sl,{children:xt>Dc?`${St.length} / ${xt}`:xt})]}),(0,N.jsx)(Cl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Rt()},onContextMenu:e=>Yt(e),children:(0,N.jsx)(tl,{counts:e?.counts,currentPath:$e?r.currentPath:null,groups:Dt,gridSize:i.gridSize,onContextMenu:Yt,onOpen:d,onOpenFile:p,onSelect:It,onToggle:Lt,openOnSingleClick:h,searching:$e,selected:V,showCheckboxes:m,showTarget:tt})})]})]}),Ce&&e&&(0,N.jsx)(Ds,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(Ce.entry.name,e,t),onClose:()=>we(null),tags:e.tags[Ce.entry.name]??[],x:Ce.x,y:Ce.y}),H&&(0,N.jsx)(ao,{canPaste:Ke,directory:Ft,allowCompression:!0,menu:H,onAddToTray:ne,onAddFavorite:re,onRemoveFavorite:w,favoritePaths:ie,onExtractArchive:T,onArchiveCreated:Qt,onClose:zt,onCompressTo:(e,t)=>Fe({paths:e,name:t}),onCopy:en,onCreateFile:e=>void nn(e),onCreateFolder:e=>void nn(null,e),onDelete:on,onOpen:d,onOpenFile:p,onPaste:tn,onRefresh:Zt,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&rn(t)},shortcuts:g,target:mn}),$t,ln]}),_n]})}function zc(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Bc=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Vc(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return qc(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Bc.compare(String(r),String(i));return t.sortDescending?-o:o})}var Hc=kn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&jn(t.entry.name)===e})),Uc=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Hc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Wc(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Gc(e){return Math.max(24,Math.min(e-56,160))}var Kc={file:`File`,folder:`Folder`,text:`Text file`,code:`source file`,image:`image`,video:`Video`,audio:`Audio`,archive:`archive`,pdf:`PDF`,executable:`Application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function qc(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Kc[Bs(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Jc(e,t,n,r){switch(e){case`type`:return qc(t,r);case`size`:return Xc(t,n.folderSizes);case`modified`:return y(t.modified);case`created`:return y(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Yc({name:e,ranges:t}){if(!t||t.length===0)return(0,N.jsx)(N.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,N.jsx)(Yl,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,N.jsx)(N.Fragment,{children:n})}function Xc(e,t){if(!e.isDirectory)return f(e.size);let n=t[e.name];return n===void 0?`—`:f(n)}function Zc({entry:e,size:t=18}){let n=F(),r=(0,E.useRef)(null),[i,a]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=un(i?e.fullPath:null,e.isDirectory,t>32),s=fn(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,N.jsxs)(il,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,N.jsx)(Vs,{name:e.iconSource.slice(5),size:t}):s?(0,N.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,N.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,N.jsx)(ti,{size:t}):(0,N.jsx)(Vs,{name:Bs(e.name),size:t}),e.isEncrypted&&(0,N.jsx)(al,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,N.jsx)(ua,{size:Math.max(8,Math.round(t*.52))})})]})}function Qc({template:e,columns:t}){return(0,N.jsx)(N.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,N.jsxs)(kl,{style:{gridTemplateColumns:e},children:[(0,N.jsxs)(Ml,{children:[(0,N.jsx)(Al,{style:{flexShrink:0,height:18,width:18}}),(0,N.jsx)(Al,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,N.jsx)(Al,{style:{width:t%2==0?44:92}},t))]},r))})}function $c({size:e}){return(0,N.jsx)(N.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,N.jsxs)(Ul,{$dim:!1,$current:!1,$selected:!1,children:[(0,N.jsx)(Wl,{children:(0,N.jsx)(Al,{style:{height:e,width:e}})}),(0,N.jsx)(Kl,{children:(0,N.jsx)(Al,{style:{height:9,width:`${t}%`}})})]},n))})}var el=(0,E.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=F(),x=J(),S=!e.entry.isDirectory&&Mn(e.entry.name),ee=(0,E.useRef)(null),[C,te]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(!S||C)return;let e=ee.current;if(!e)return;if(!(`IntersectionObserver`in window)){te(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(te(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,C]);let ne=gn(S&&C?e.entry.fullPath:null,192,e.entry.modified),[re,w]=(0,E.useState)(!1),ie=e.entry.fullPath,T=t=>{e.entry.isDirectory?v(ie,Kt(t)):y?.(ie,Kt(t))};return(0,N.jsxs)(Ul,{$current:t,$dim:n,$selected:s,onClick:e=>{h(e,ie),l&&T(e)},onContextMenu:e=>_(e,ie),onDoubleClick:e=>{l||T(e)},ref:e=>{ee.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":ie,draggable:!u,children:[c&&(0,N.jsx)(pl,{$checked:s,onClick:e=>{e.stopPropagation(),g(ie)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,N.jsx)(vi,{size:10})}),(0,N.jsx)(Wl,{children:S&&ne&&!re?(0,N.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:ne}):(0,N.jsx)(Gl,{children:e.place&&x.useIcons?(0,N.jsx)(ws,{place:e.place,size:r}):(0,N.jsx)(Zc,{entry:e.entry,size:r})})}),(0,N.jsxs)(Kl,{children:[u?(0,N.jsx)(nl,{onCancel:()=>m?.(),onChange:e=>d?.(e),onCommit:()=>p?.(),value:u.value}):(0,N.jsx)(ql,{$broken:e.entry.linkValid===!1,children:(0,N.jsx)(Yc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,N.jsxs)(Pl,{title:b(`This archive is encrypted and asks for a password when opened.`),children:[(0,N.jsx)(ua,{size:9}),b(`Encrypted`)]}),e.cut&&(0,N.jsxs)(Fl,{title:b(`This item is cut and will move when something is pasted.`),children:[(0,N.jsx)(ra,{size:9}),b(`Cut`)]}),(0,N.jsx)(Jl,{children:e.entry.isDirectory?i===void 0?qc(e.entry,b):b(`{type} · {count} items`,{type:qc(e.entry,b),count:i}):b(`{type} · {size}`,{type:qc(e.entry,b),size:f(e.entry.size)})}),a&&e.entry.linkTarget&&(0,N.jsxs)(Ll,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,N.jsx)(da,{size:9}),(0,N.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function tl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=F();return(0,N.jsx)(N.Fragment,{children:e.map(e=>(0,N.jsxs)(wl,{children:[(0,N.jsxs)(Tl,{children:[y(e.label),(0,N.jsx)(El,{children:e.rows.length}),(0,N.jsx)(Dl,{})]}),(0,N.jsx)(Ol,{$size:t,children:e.rows.map(e=>(0,N.jsx)(el,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Gc(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function nl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,N.jsx)(Il,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var rl=(0,E.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=F(),ee=J(),C=e.entry.fullPath;return(0,N.jsxs)(jl,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,C),o&&_(e.entry,t)},onContextMenu:e=>g(e,C),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":C,draggable:!p,children:[(0,N.jsxs)(Ml,{children:[i&&(0,N.jsx)(fl,{$checked:r,onClick:e=>{e.stopPropagation(),h(C)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,N.jsx)(vi,{size:10})}),e.place&&ee.useIcons?(0,N.jsx)(il,{children:(0,N.jsx)(ws,{place:e.place,size:s})}):(0,N.jsx)(Zc,{entry:e.entry,size:s}),p?(0,N.jsx)(nl,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,N.jsx)(Nl,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,N.jsx)(Yc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,N.jsxs)(Pl,{title:S(`This archive is encrypted and asks for a password when opened.`),children:[(0,N.jsx)(ua,{size:9}),S(`Encrypted`)]}),e.cut&&(0,N.jsxs)(Fl,{title:S(`This item is cut and will move when something is pasted.`),children:[(0,N.jsx)(ra,{size:9}),S(`Cut`)]}),a&&e.entry.linkTarget&&(0,N.jsxs)(Ll,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,N.jsx)(da,{size:9}),(0,N.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,N.jsx)(Rl,{children:t.id===`tags`?(0,N.jsx)(zl,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,N.jsx)(Bl,{$color:t,$ink:Es(t),children:e},e)}):(0,N.jsx)(Vl,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,N.jsx)(Hl,{children:S(`Broken`)}):Jc(t.id,e.entry,d,S)},t.id))]})}),il=_.span`
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
`,al=_.span`
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
`,ol=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,sl=_.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,cl=_.span`
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
`,ll=_.button`
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
`,ul=_.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,dl=_.div`
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
`,fl=_.button`
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
`,pl=_(fl)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,ml=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,hl=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,gl=_.div`
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
`,_l=_.button`
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
`,vl=_.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,yl=_.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,bl=_.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,xl=_.div`
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
`,Sl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Cl=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,wl=_.section`
    & + & {
        margin-top: 22px;
    }
`,Tl=_.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,El=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Dl=_.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Ol=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,kl=_.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Al=_.span`
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
`,jl=_.div`
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
`,Ml=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Nl=_.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Pl=_.span`
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
`,Fl=_.span`
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
`,Il=_.input`
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
`,Ll=_.span`
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
`,Rl=_.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,zl=_.button`
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
`,Bl=_.span`
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
`,Vl=_.span`
    color: var(--text-muted);
    font-size: 11px;
`,Hl=_.span`
    color: #fca5a5;
`,Ul=_.div`
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
`,Wl=_.div`
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
`,Gl=_.span`
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
`,Kl=_.div`
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
`,ql=_.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Jl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Yl=_.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Xl=_.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Zl=_.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Ql=_.p`
    font-size: 13px;
    color: var(--text-muted);
`,$l=_.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,eu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,tu=`/assets/bloom-BpfZWiaG.mp4`,nu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,ru=`/assets/drift-BRBSQL2_.mp4`,iu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,au=`/assets/ember-CtSz0YxR.mp4`,ou=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],su=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],cu=[{id:`builtin:video:drift`,name:`Drift`,url:ru,poster:nu},{id:`builtin:video:ember`,name:`Ember`,url:au,poster:iu},{id:`builtin:video:bloom`,name:`Bloom`,url:tu,poster:eu}],lu=su.map(e=>({...e,variants:ou.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:hu(gu(e.id,t))}))})),uu=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>ou.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:hu(_u(e.id,t))}))),du=new Map([...lu.flatMap(e=>e.variants),...uu].map(e=>[e.id,e])),fu=new Map(cu.map(e=>[e.id,e]));function pu(e){if(du.has(e))return du.get(e).url;if(fu.has(e))return fu.get(e).url;let t=e.split(`:`)[1];return t?du.get(`builtin:${t}:indigo`)?.url??null:null}function mu(e){return fu.has(e)}function hu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function gu(e,t){return e===`dunes`?wu(t):e===`tide`?Tu(t):Cu(t)}function _u(e,t){return e===`skyline`?yu(t):e===`orbit`?bu(t):vu(t)}function vu({accent:e,secondary:t}){let n=Su(t,`#05070f`,.86),r=Su(e,`#0b1020`,.72),i=Su(t,`#0a0f1d`,.66),a=Su(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${Su(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${Su(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function yu({accent:e,secondary:t}){let n=Su(t,`#07040d`,.84),r=Su(e,`#100716`,.7),i=Su(e,`#08050e`,.82),a=Su(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${Su(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function bu({accent:e,secondary:t}){let n=Su(e,`#03050d`,.9),r=Su(t,`#05030c`,.94),i=Su(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${Su(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${Su(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${Su(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${Su(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function xu(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function Su(e,t,n){let[r,i,a]=xu(e),[o,s,c]=xu(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function Cu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Su(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${Su(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${Su(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${Su(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function wu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${Su(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${Su(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${Su(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${Su(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${Su(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${Su(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${Su(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function Tu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Su(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${Su(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${Su(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${Su(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var Eu=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Du(e){return Eu.test(e)}function Ou({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):re(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=_n(r),a=t?.startsWith(`builtin:`)?pu(t):n??i,o=n===null?r===null?t!==null&&mu(t):Du(r):Du(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,N.jsxs)(ku,{"aria-hidden":!0,children:[o?(0,N.jsx)(ju,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,N.jsx)(Au,{src:a,style:{filter:s}}),(0,N.jsx)(Mu,{})]})}var ku=_.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,Au=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,ju=_.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Mu=_.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function Nu({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=F(),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(()=>Math.max(1,Math.ceil(t)));return(0,E.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,Aa.createPortal)((0,N.jsx)(Pu,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,N.jsxs)(Fu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,N.jsx)(Iu,{children:a(`Protected folder`)}),(0,N.jsx)(Lu,{children:a(`These paths are protected by the safety settings:`)}),(0,N.jsx)(Ru,{children:e.map(e=>(0,N.jsxs)(zu,{children:[(0,N.jsx)(Bu,{children:e.path}),(0,N.jsx)(Vu,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,N.jsx)(Hu,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,N.jsx)(Uu,{children:a(`Nothing has been deleted.`)}),(0,N.jsx)(Wu,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,N.jsxs)(Gu,{children:[(0,N.jsx)(Ku,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,N.jsx)(qu,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var Pu=_.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ga}
`,Fu=_.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ba}
`,Iu=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Lu=_.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Ru=_.div`
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
`,zu=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Bu=_.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Vu=_.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Hu=_.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Uu=_.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Wu=_.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Gu=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Ku=_.button`
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
`,qu=_.button`
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
`;function Ju(){let e=F(),[t,n]=(0,E.useState)(null),r=(0,E.useRef)(null),i=(0,E.useRef)(null);(0,E.useEffect)(()=>(_a(e=>new Promise(t=>{r.current=t,n(e)})),()=>_a(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,E.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Aa.createPortal)((0,N.jsx)(Yu,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,N.jsxs)(Xu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,N.jsx)(Zu,{children:e(`Notice`)}),(0,N.jsx)(Qu,{children:t}),(0,N.jsx)($u,{children:(0,N.jsx)(ed,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var Yu=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ga}
`,Xu=_.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ba}
`,Zu=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Qu=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,$u=_.div`
    display: flex;
    justify-content: flex-end;
`,ed=_.button`
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
`;function td(){let e=F(),[t,n]=(0,E.useState)(null),[r,i]=(0,E.useState)(``),a=(0,E.useRef)(null),o=(0,E.useRef)(null);(0,E.useEffect)(()=>(ya((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>ya(null)),[]),(0,E.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Aa.createPortal)((0,N.jsx)(nd,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,N.jsxs)(rd,{role:`dialog`,"aria-modal":`true`,children:[(0,N.jsx)(id,{children:e(`Archive password`)}),(0,N.jsx)(ad,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,N.jsx)(od,{title:t.archive,children:t.archive}),(0,N.jsx)(sd,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,N.jsxs)(cd,{children:[(0,N.jsx)(ld,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,N.jsx)(ud,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var nd=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ga}
`,rd=_.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ba}
`,id=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,ad=_.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,od=_.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,sd=_.input`
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
`,cd=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,ld=_.button`
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
`,ud=_(ld)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function dd({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h}){let g=F(),_=(0,E.useRef)(null),v=c??g(`Search this folder`);(0,E.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,N.jsxs)(fd,{children:[(0,N.jsx)(ii,{}),(0,N.jsx)(pd,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(md,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,N.jsx)(hd,{onClick:()=>y(u),title:g(`Previous match (Shift+Enter)`),type:`button`,children:(0,N.jsx)(ui,{size:12})}),(0,N.jsx)(hd,{$down:!0,onClick:()=>y(d),title:g(`Next match (Enter)`),type:`button`,children:(0,N.jsx)(ui,{size:12})})]}),(0,N.jsx)(gd,{$on:n,onClick:()=>y(f),title:g(`Match case`),type:`button`,children:`Aa`}),(0,N.jsx)(gd,{$on:r,onClick:()=>y(p),title:g(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,N.jsx)(_d,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:g(t===`hide`?`Hide`:`Dim`)}),(0,N.jsx)(hd,{onClick:h,title:g(`Close search (Esc)`),type:`button`,children:(0,N.jsx)(yi,{size:12})})]})}var fd=_.div`
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
    ${Ua}
`,pd=_.input`
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
`,md=_.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,hd=_.button`
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
`,gd=_.button`
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
`,_d=_(gd)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function vd(e,t,n,r,i=[]){(0,E.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=xn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function yd({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=F(),a=(0,E.useRef)(null),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(null);return(0,E.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,E.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,E.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Aa.createPortal)((0,N.jsxs)(bd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(ys).map(n=>(0,N.jsx)(xd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:ys[n](16)},n)),(0,N.jsx)(xd,{onClick:async()=>{let e=await ma([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,N.jsx)(si,{size:13})}),r&&(0,N.jsx)(xd,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,N.jsx)(yi,{size:12})})]}),document.body)]})}var bd=_.div`
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
    ${Va}
    transform-origin: top left;
`,xd=_.button`
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
`,Sd={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function Cd(){return M.available?await M.request(`share.list`):Sd}async function wd(e,t){return M.available?await M.request(`share.add`,{path:e,mode:t}):Sd}async function Td(e){return M.available?await M.request(`share.remove`,{id:e}):Sd}async function Ed(e,t){return M.available?await M.request(`share.mode`,{id:e,mode:t}):Sd}async function Dd(){return M.available?(await M.request(`share.peers.refresh`)).peers??[]:[]}async function Od(e,t){M.available&&await M.request(`share.pair.start`,{host:e,port:t})}async function kd(e,t){M.available&&await M.request(`share.pair.respond`,{requestId:e,accept:t})}async function Ad(e,t){M.available&&await M.request(`share.port`,{mode:t,port:e})}var jd=`share://`;function Md(e){return e.toLowerCase().startsWith(jd)}function Nd(e){if(!Md(e))return null;let[t,n,...r]=e.slice(8).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Pd(e,t,n=``){let r=`${jd}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Fd(e){let t=Nd(e);if(!t||!M.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await M.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Pd(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Pd(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Id(e){let t=Nd(e);if(!t||!M.available)throw Error(`This shared file is only available in the desktop app.`);let n=await M.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Ld(e){await B(await Id(e))}function Rd({source:e,poster:t}){let n=re(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=_n(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??pu(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,N.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,N.jsx)(`img`,{alt:``,src:a}):null}function zd({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=F(),s=(0,E.useRef)(null),c=(0,E.useRef)(null),l=(0,E.useRef)(!1),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,E.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,E.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,E.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,N.jsx)(sf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,N.jsxs)(cf,{children:[(0,N.jsxs)(lf,{children:[(0,N.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,N.jsx)(gf,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,N.jsx)(yi,{size:12})})]}),(0,N.jsx)(uf,{children:o(`Drag the frame to choose the visible part.`)}),(0,N.jsxs)(df,{children:[t?(0,N.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,N.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,N.jsx)(ff,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:m},children:(0,N.jsx)(pf,{})})]}),(0,N.jsxs)(mf,{children:[(0,N.jsx)(hf,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,N.jsx)(hf,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var Bd=150,Vd=120,Hd=200,Ud=_.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Wd=_.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Gd=_.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${Hd}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Hd}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Hd*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Hd*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Hd*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Hd}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Hd*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Hd*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Hd*.18)}px),
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
`,Kd=_.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Bd}px);
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
`,qd=_.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,Jd=_.section`
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
`,Yd=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Xd=_.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Zd=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Qd=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,$d=_.input`
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
`,ef=_.button`
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
`,tf=_.div`
    position: relative;
    width: 132px;
    height: 72px;
`,nf=_.button`
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
`,rf=_.button`
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
`,af=_.span`
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
`,of=_.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,sf=_.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,cf=_.div`
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
`,lf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,uf=_.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,df=_.div`
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
`,ff=_.div`
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
`,pf=_.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,mf=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,hf=_.button`
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
`,gf=_.button`
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
`,_f=_.button`
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
`,vf=_.div`
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
`,yf=_.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,bf=_.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,xf=_.button`
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
`,Sf=_.div`
    position: relative;
    display: inline-flex;
`,Cf=_.div`
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
`,wf=_.button`
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
`,Tf=_.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Ef=_.section`
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
`,Df=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Of=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,kf=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Af=_.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,jf=_.input`
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
`,Mf=_.button`
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
`,Nf=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Pf=_.div`
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
`,Ff=_.span`
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
`,If=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Lf=_.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Rf=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,zf=_.button`
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
`,Bf=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Vf=_.button`
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
`,Hf=_.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Uf=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Wf=_.div`
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
`,Gf=_.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Kf=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,qf=_.button`
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
`,Jf=_.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Yf=_.button`
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
`,Xf=_.button`
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
`,Zf=_.button`
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
`,Qf=_.span`
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
`,$f=_.button`
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
`,ep=_.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,tp=_.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,np=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,rp=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,ip=_.input`
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
`,ap=_.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,op=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,sp=_.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,cp=_.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,lp=_.button`
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
`;function up({places:e,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:u,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:_,onSearchMatches:y,readOnly:b=!1,onPick:x,onSelectionChange:S,onAddToTray:ee,onAddFavorite:C,onRemoveFavorite:te,favoritePaths:ie,onExtractArchive:T,settingsVersion:ae=0}){let D=F(),oe=J(),[O,se]=(0,E.useState)(!1),[k,ce]=(0,E.useState)(null),A=k?.overviewBanner??null,j=A?.startsWith(`builtin:`)??!1,le=A?.startsWith(`url:`)?A.slice(4):re(A)?A:null,ue=j||le?``:A??``,de=j?``:le?le.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:ue.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,fe=j?mu(A):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(de),pe=_n(ue.length>0?ue:null,0,de?`.${de}`:``),P=A?pu(A)??le??pe:null,[me,he]=(0,E.useState)(``),[ge,I]=(0,E.useState)(null),[_e,L]=(0,E.useState)(!1),[ve,R]=(0,E.useState)(null),[ye,z]=(0,E.useState)(null),[be,xe]=(0,E.useState)(null),[Ce,we]=(0,E.useState)([]),[Te,Ee]=(0,E.useState)(null),[V,De]=(0,E.useState)(``),[Oe,ke]=(0,E.useState)(null),[je,H]=(0,E.useState)(null),Me=Ec(`overview`),[Ne,Pe]=(0,E.useState)(null),[Fe,Ie]=(0,E.useState)(null),Le=(0,E.useRef)(null),Re=(0,E.useRef)(null),ze=(0,E.useRef)(null),Be=(0,E.useRef)(null),Ve=(0,E.useRef)(null),He=Fe??k?.overviewBannerHeight??220,[Ge,Ke]=(0,E.useState)(0),[qe,Je]=(0,E.useState)(null),Xe=Math.min(1,Math.max(0,k?.overviewBannerOffset??.3)),Ze=He+Hd,Qe=qe&&Ge>0?qe.height*(Ge/qe.width):Ze,$e=Qe>0&&Qe<Ze+240?(Ze+240)/Qe:1,et=Math.max(1,Math.round(Ge*$e)),tt=Math.max(0,Qe*$e-Ze),nt=Math.min(Vd,tt/2,Math.max(20,He*.42)),rt=nt+Xe*Math.max(0,tt-nt*2),[at,ot]=(0,E.useState)(!1),st=(e,t=!1)=>x?(ke(e),H({path:e,isDirectory:t}),S?.([e]),!0):!1,ct=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),ke(t),H({path:t,isDirectory:n}),Pe({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,E.useEffect)(()=>(yc(`overview`,je?(e,t)=>Pe({x:e,y:t,target:je}):null),()=>yc(`overview`,null)),[je]);let lt=(e,t)=>c(e,t);(0,E.useEffect)(()=>{Ye().then(ce,()=>ce(null))},[ae]),(0,E.useEffect)(()=>{if(M.available)return Dd().then(we,()=>void 0),M.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&we(t.data.peers)})},[]),(0,E.useEffect)(()=>{let e=ze.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,E.useEffect)(()=>{if(j&&!fe){Je({width:1920,height:1080});return}Je(null);let e=Ve.current;e?.complete&&e.naturalWidth>0&&Je({width:e.naturalWidth,height:e.naturalHeight})},[A,j,fe]),(0,E.useEffect)(()=>{let e=Be.current;if(!e)return;let t=()=>Ke(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[k?.overviewBanner]),(0,E.useEffect)(()=>{if(!ge)return;let e=()=>I(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||I(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[ge]),(0,E.useEffect)(()=>{if(!_e)return;let e=()=>L(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[_e]);let U=xs(k),ut=U.map(e=>e.id),dt=(0,E.useRef)(null),ft=e=>ge?.kind===`panel`&&ge.id===e,pt=e=>ge?.kind===`place`&&ge.id===e;(0,E.useEffect)(()=>{if(!M.available)return;let e=U.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return M.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>M.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[U.map(e=>e.path??e.id).join(`|`),a]),vd(dt,_??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let mt=async(e,t)=>{let n={...k?.placeIcons};t?n[e]=t:delete n[e],I(null),await bt({placeIcons:n}),l(await Ae())},ht=async(e,t)=>{let n={...k?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],z(null),await bt({placeNames:n}),l(await Ae())},gt=e=>{xe(null),R({drive:e,label:e.label||`Local Disk`})},_t=async()=>{if(!ve)return;let{drive:e,label:t}=ve;R(null);let n=await Se(e.name,t.trim());n.ok?(xe(null),h?.()):xe(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},yt=k?.overviewColumns??1,bt=async e=>{if(!k)return;let t={...k,...e,overviewPanels:e.overviewPanels??ut,overviewHidden:[]};ce(await it(t)),p?.()},xt=async()=>{await bt({overviewPanels:[...gs],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),l(await Ae()),se(!1)},St=async()=>{let e=await ma([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=k?.overviewBanners??[];await bt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},Ct=async()=>{let e=me.trim();if(!k||!re(e))return;let t=k.overviewBanners??[];he(``),await bt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},wt=()=>void bt({overviewBanner:null}),Tt=e=>void bt({overviewBanners:(k?.overviewBanners??[]).filter(t=>t!==e),...k?.overviewBanner===e||k?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Et=e=>{Le.current={y:e.clientY,height:He},e.currentTarget.setPointerCapture(e.pointerId)},Dt=e=>{let t=Le.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Re.current=n,Ie(n)},Ot=e=>{Le.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Re.current!==null&&(bt({overviewBannerHeight:Re.current}),Re.current=null)},kt=(e,t)=>{let n=ut.indexOf(e),r=n+t;if(n<0||r<0||r>=ut.length)return;let i=[...ut];[i[n],i[r]]=[i[r],i[n]],bt({overviewPanels:i})},At=(e,t)=>{let n={...k?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],bt({overviewTitles:n})},jt=(e,t)=>void bt({overviewViews:{...k?.overviewViews,[e]:t}}),Mt=e=>{let t=k?.overviewPinned??U.filter(e=>e.pinned).map(e=>e.id);bt({overviewPinned:U.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Nt=e=>{I(null);let t=t=>{let n={...t};return delete n[e],n},n=k?.overviewPinned??U.filter(e=>e.pinned).map(e=>e.id);bt({overviewPanels:ut.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(k?.overviewTitles),overviewViews:t(k?.overviewViews),overviewIcons:t(k?.overviewIcons),panelPlaces:t(k?.panelPlaces)})},Pt=(e,t)=>{let n={...k?.overviewIcons};t?n[e]=t:delete n[e],I(null),bt({overviewIcons:n})},Ft=async e=>{if(!k)return;if(e===`folder`){let e=await pa();if(!e)return;let t=`folder:${e}`;ut.includes(t)||await bt({overviewPanels:[...ut,t]});return}if(e===`quick`){let e=2;for(;ut.includes(`quick:${e}`);)e+=1;await bt({overviewPanels:[...ut,`quick:${e}`]});return}let t=e;for(let n=2;ut.includes(t);n+=1)t=`${e}:${n}`;await bt({overviewPanels:[...ut,t]})},It=async n=>{let r=await pa();if(!r)return;if(n.id===`quick`){await bt({quickAccess:[...new Set([...e.map(e=>e.path),r])]}),l(await Ae());return}let i=n.places??[];i.some(e=>t(e,r))||await bt({panelPlaces:{...k?.panelPlaces,[n.id]:[...i,r]}})},Lt=async(n,r)=>{I(null),n.id===`quick`?(await bt({quickAccess:e.filter(e=>!t(e.path,r)).map(e=>e.path)}),l(await Ae())):await bt({panelPlaces:{...k?.panelPlaces,[n.id]:(n.places??[]).filter(e=>!t(e,r))}})},Rt=async(n,r,i)=>{if(t(r,i))return;let a=n.id===`quick`?e.map(e=>e.path):n.places??[],o=a.findIndex(e=>t(e,r)),s=a.findIndex(e=>t(e,i));if(o<0||s<0)return;let c=[...a],[u]=c.splice(o,1);c.splice(s,0,u),n.id===`quick`?(await bt({quickAccess:c}),l(await Ae())):await bt({panelPlaces:{...k?.panelPlaces,[n.id]:c}})},zt=(e,t)=>({draggable:O,onDragOver:e=>{O&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{O&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{O&&(n.preventDefault(),Rt(e,n.dataTransfer.getData(`text/plain`),t))}}),Bt=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:k?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??k?.placeIcons?.[n]??null}}),Vt=e=>{if(r.length===0)return(0,N.jsx)(tp,{children:D(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,N.jsx)(Nf,{children:t.map(e=>{let t=In(oe,e.path);return(0,N.jsxs)(Pf,{$plain:!1,$selected:Oe===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Kt(t)):B(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,children:[(0,N.jsx)(Ff,{children:t&&oe.useIcons?(0,N.jsx)(ws,{place:t,size:18}):(0,N.jsx)(Hs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,N.jsxs)(If,{children:[(0,N.jsx)(`strong`,{children:t?.name||e.name}),(0,N.jsx)(Lf,{children:e.path})]})]},e.path)})}):(0,N.jsx)(Rf,{children:t.map(e=>{let t=In(oe,e.path);return(0,N.jsxs)(zf,{$selected:Oe===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Kt(t)):B(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&oe.useIcons?(0,N.jsx)(ws,{place:t,size:15}):(0,N.jsx)(Hs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,N.jsxs)(Bf,{children:[(0,N.jsx)(`strong`,{children:t?.name||e.name}),(0,N.jsx)(Lf,{children:e.path})]})]},e.path)})})},W=e=>{let n=k?.favorites??[],r=async e=>{await bt({favorites:n.filter(t=>t.path!==e)})},i=async(e,r)=>{e&&!n.some(n=>t(n.path,e))&&await bt({favorites:[...n,{path:e,name:v(e)||e,isDirectory:r}]})},a=(e,t,n)=>{O||st(t,n)||(n?c(t,Kt(e)):B(t))},o=O?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(Vf,{$row:e.view===`list`,onClick:()=>void ma().then(e=>i(e,!1)),title:D(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,N.jsx)(si,{size:15}):(0,N.jsx)(Ff,{children:(0,N.jsx)(si,{size:15})}),e.view===`list`?(0,N.jsxs)(Bf,{children:[(0,N.jsx)(`strong`,{children:D(`Add file`)}),(0,N.jsx)(Lf,{children:D(`Pin any file here`)})]}):(0,N.jsxs)(If,{children:[(0,N.jsx)(`strong`,{children:D(`Add file`)}),(0,N.jsx)(Lf,{children:D(`Pin any file here`)})]})]}),(0,N.jsxs)(Vf,{$row:e.view===`list`,onClick:()=>void pa().then(e=>i(e,!0)),title:D(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,N.jsx)(si,{size:15}):(0,N.jsx)(Ff,{children:(0,N.jsx)(si,{size:15})}),e.view===`list`?(0,N.jsxs)(Bf,{children:[(0,N.jsx)(`strong`,{children:D(`Add folder`)}),(0,N.jsx)(Lf,{children:D(`Pin any folder here`)})]}):(0,N.jsxs)(If,{children:[(0,N.jsx)(`strong`,{children:D(`Add folder`)}),(0,N.jsx)(Lf,{children:D(`Pin any folder here`)})]})]})]}):null;return n.length===0&&!O?(0,N.jsx)(tp,{children:D(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,N.jsxs)(Nf,{children:[n.map(e=>{let t=In(oe,e.path);return(0,N.jsxs)(Pf,{$plain:O,$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&x?.(e.path),onContextMenu:t=>!O&&ct(t,e.path,e.isDirectory),title:e.path,children:[O&&(0,N.jsx)(Xf,{onClick:t=>{t.stopPropagation(),r(e.path)},title:D(`Remove from favorites`),type:`button`,children:(0,N.jsx)(yi,{size:11})}),(0,N.jsx)(Ff,{children:t&&oe.useIcons?(0,N.jsx)(ws,{place:t,size:18}):(0,N.jsx)(Hs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,N.jsxs)(If,{children:[(0,N.jsx)(`strong`,{children:t?.name||e.name}),(0,N.jsx)(Lf,{children:e.path})]})]},e.path)}),o]}):(0,N.jsxs)(Rf,{children:[n.map(e=>{let t=In(oe,e.path);return(0,N.jsxs)(zf,{$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&x?.(e.path),onContextMenu:t=>!O&&ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&oe.useIcons?(0,N.jsx)(ws,{place:t,size:15}):(0,N.jsx)(Hs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,N.jsxs)(Bf,{children:[(0,N.jsx)(`strong`,{children:t?.name||e.name}),(0,N.jsx)(Lf,{children:e.path})]}),O&&(0,N.jsx)(Xf,{$inline:!0,onClick:t=>{t.stopPropagation(),r(e.path)},title:D(`Remove from favorites`),type:`button`,children:(0,N.jsx)(yi,{size:11})})]},e.path)}),o]})},Ht=e=>{if(n.length===0)return(0,N.jsx)(tp,{children:D(`No drives are available.`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=ve?.drive.name===t.name,i=r?(0,N.jsx)(dp,{maxLength:32,onCancel:()=>R(null),onChange:e=>R({...ve,label:e}),onCommit:()=>void _t(),value:ve?.label??``}):(0,N.jsx)(N.Fragment,{children:d(t)}),a=!r&&O&&(0,N.jsx)(Zf,{onClick:e=>{e.stopPropagation(),gt(t)},title:D(`Rename volume`),type:`button`,children:(0,N.jsx)(Ii,{size:11})}),o=(0,N.jsx)(Lf,{children:D(`{free} free of {total}`,{free:f(t.freeSpace),total:f(t.totalSize)})});return e.view===`grid`?(0,N.jsxs)(Pf,{$plain:!1,$selected:Oe===t.name,onClick:e=>{!r&&st(t.name,!0)||r||c(t.name,Kt(e))},onDoubleClick:()=>!r&&x?.(t.name),onContextMenu:e=>!r&&ct(e,t.name,!0),title:t.name,children:[(0,N.jsx)(Ff,{children:(0,N.jsx)(ri,{size:18})}),(0,N.jsxs)(If,{children:[(0,N.jsxs)(`strong`,{children:[i,r&&ne(t),a]}),o]})]},t.name):(0,N.jsxs)(zf,{as:r?`div`:`button`,$selected:Oe===t.name,onClick:r?void 0:e=>{st(t.name,!0)||c(t.name,Kt(e))},onDoubleClick:r?void 0:()=>x?.(t.name),onContextMenu:r?void 0:e=>ct(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,N.jsx)(ri,{size:18}),(0,N.jsxs)(Bf,{children:[(0,N.jsxs)(`strong`,{children:[i,r&&ne(t),a]}),o]}),(0,N.jsx)(Hf,{children:(0,N.jsx)(Uf,{$used:n,$tone:w(n)})})]},t.name)});return e.view===`grid`?(0,N.jsx)(Nf,{children:t}):(0,N.jsx)(Rf,{children:t})},Wt=()=>{let e=async e=>{Ee(e.id);try{await Od(e.host,e.port)}finally{Ee(null)}},t=async()=>{let e=V.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Ee(`manual`);try{await Od(n,r)}finally{Ee(null)}}};return(0,N.jsxs)(np,{children:[(0,N.jsxs)(rp,{children:[(0,N.jsx)(ip,{onChange:e=>De(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:D(`Address, e.g. 192.168.1.20:45701`),value:V}),(0,N.jsx)(lp,{disabled:Te!==null||!V.includes(`:`),onClick:()=>void t(),type:`button`,children:D(Te===`manual`?`Pairing…`:`Pair by address`)})]}),Ce.length===0&&(0,N.jsx)(tp,{children:D(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),Ce.map(t=>(0,N.jsxs)(ap,{children:[(0,N.jsxs)(op,{children:[(0,N.jsx)(Xi,{size:14}),(0,N.jsx)(sp,{title:t.host,children:t.name}),(0,N.jsx)(cp,{$online:t.online,children:t.paired?t.online?D(`Paired`):D(`Offline`):D(`Not paired`)}),!t.paired&&t.online&&(0,N.jsx)(lp,{disabled:Te===t.id,onClick:()=>void e(t),type:`button`,children:Te===t.id?D(`Pairing…`):D(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,N.jsx)(Lf,{children:D(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,N.jsxs)(zf,{onClick:n=>c(Pd(t.id,e.id),Kt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,N.jsx)(Xi,{size:14}),(0,N.jsxs)(Bf,{children:[(0,N.jsx)(`strong`,{children:e.name}),(0,N.jsx)(Lf,{children:t.name})]}),(0,N.jsx)(Qi,{size:12})]},e.id))]},t.id))]})},Gt=e=>{switch(e.kind){case`share`:return Wt();case`favorites`:return W(e);case`quick`:{let t=Bt(e);return!O&&t.length===0?(0,N.jsx)(tp,{children:D(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,N.jsxs)(Nf,{children:[t.map(t=>(0,N.jsxs)(Pf,{$plain:O,$selected:Oe===t.path,...zt(e,t.path),onClick:e=>{!O&&!st(t.path,!0)&&c(t.path,Kt(e))},onDoubleClick:()=>!O&&x?.(t.path),onContextMenu:e=>!O&&ct(e,t.path,!0),title:t.path,children:[O&&(0,N.jsx)(Xf,{onClick:n=>{n.stopPropagation(),Lt(e,t.path)},title:D(`Remove from Quick access`),type:`button`,children:(0,N.jsx)(yi,{size:11})}),(0,N.jsxs)(Jf,{children:[O?(0,N.jsx)(Yf,{onClick:e=>{e.stopPropagation(),I(pt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,N.jsx)(Ff,{children:(0,N.jsx)(ws,{place:t})})}):(0,N.jsx)(Ff,{children:(0,N.jsx)(ws,{place:t})}),pt(t.path)&&(0,N.jsx)(yd,{onPick:e=>void mt(t.path,e),value:k?.placeIcons?.[t.path]??t.icon})]}),(0,N.jsxs)(If,{children:[ye?.path===t.path?(0,N.jsx)(`strong`,{children:(0,N.jsx)(dp,{onCancel:()=>z(null),onChange:e=>z({path:t.path,name:e}),onCommit:()=>void ht(t.path,ye?.name??``),value:ye?.name??``})}):(0,N.jsxs)(`strong`,{children:[t.name,O&&(0,N.jsx)(Zf,{onClick:e=>{e.stopPropagation(),I(null),z({path:t.path,name:t.name})},title:D(`Rename folder`),type:`button`,children:(0,N.jsx)(Ii,{size:11})})]}),(0,N.jsx)(Lf,{children:t.path})]})]},t.path)),O&&(0,N.jsxs)(Vf,{onClick:()=>void It(e),title:D(`Pin a folder here`),type:`button`,children:[(0,N.jsx)(Ff,{children:(0,N.jsx)(si,{size:15})}),(0,N.jsxs)(If,{children:[(0,N.jsx)(`strong`,{children:D(`Add folder`)}),(0,N.jsx)(Lf,{children:D(`Pin a directory here`)})]})]})]}):(0,N.jsxs)(Rf,{children:[t.map(t=>(0,N.jsxs)(zf,{$selected:Oe===t.path,...zt(e,t.path),onClick:e=>{!O&&!st(t.path,!0)&&c(t.path,Kt(e))},onDoubleClick:()=>!O&&x?.(t.path),onContextMenu:e=>!O&&ct(e,t.path,!0),title:t.path,type:`button`,children:[(0,N.jsxs)(Jf,{children:[O?(0,N.jsx)(Yf,{onClick:e=>{e.stopPropagation(),I(pt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,N.jsx)(ws,{place:t,size:15})}):(0,N.jsx)(ws,{place:t,size:15}),pt(t.path)&&(0,N.jsx)(yd,{onPick:e=>void mt(t.path,e),value:k?.placeIcons?.[t.path]??t.icon})]}),(0,N.jsxs)(Bf,{children:[ye?.path===t.path?(0,N.jsx)(`strong`,{children:(0,N.jsx)(dp,{onCancel:()=>z(null),onChange:e=>z({path:t.path,name:e}),onCommit:()=>void ht(t.path,ye?.name??``),value:ye?.name??``})}):(0,N.jsxs)(`strong`,{children:[t.name,O&&(0,N.jsx)(Zf,{onClick:e=>{e.stopPropagation(),I(null),z({path:t.path,name:t.name})},title:D(`Rename folder`),type:`button`,children:(0,N.jsx)(Ii,{size:11})})]}),(0,N.jsx)(Lf,{children:t.path})]}),O&&(0,N.jsx)(Xf,{$inline:!0,onClick:n=>{n.stopPropagation(),Lt(e,t.path)},title:D(`Remove from Quick access`),type:`button`,children:(0,N.jsx)(yi,{size:11})})]},t.path)),O&&(0,N.jsxs)(Vf,{$row:!0,onClick:()=>void It(e),title:D(`Pin a folder here`),type:`button`,children:[(0,N.jsx)(si,{size:15}),(0,N.jsxs)(Bf,{children:[(0,N.jsx)(`strong`,{children:D(`Add folder`)}),(0,N.jsx)(Lf,{children:D(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,N.jsx)(fp,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:x,onSelectionChange:S,version:s});case`recent`:return Vt(e);case`drives`:return Ht(e);default:return(0,N.jsx)(pp,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:x,onSelectionChange:S,openOnSingleClick:k?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:k?.showCheckboxes??!0,visibilityVersion:g})}};return(0,N.jsxs)(Ud,{$flush:!!k?.overviewBanner,ref:ze,children:[!b&&(0,N.jsxs)(vf,{$overlay:!!k?.overviewBanner,children:[(0,N.jsx)(yf,{role:`group`,title:D(`Columns`),children:[1,2,3,4,5].map(e=>(0,N.jsx)(bf,{$active:yt===e,onClick:()=>void bt({overviewColumns:e}),title:o(D,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),O&&(0,N.jsxs)(Sf,{children:[(0,N.jsxs)(xf,{onClick:()=>L(e=>!e),onPointerDown:e=>e.stopPropagation(),title:D(`Add a panel`),type:`button`,children:[(0,N.jsx)(si,{size:12}),D(`Add panel ▾`)]}),_e&&(0,N.jsx)(Cf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,N.jsx)(wf,{onClick:()=>{L(!1),Ft(e)},type:`button`,children:D(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),O&&(0,N.jsxs)(xf,{onClick:()=>void xt(),title:D(`Put every panel back the way the app ships it`),type:`button`,children:[(0,N.jsx)(oi,{size:12}),D(`Restore default panels`)]}),Me.available&&(0,N.jsx)(Mf,{onClick:e=>Me.open(e.clientX,e.clientY),title:D(`Selection menu`),type:`button`,children:(0,N.jsx)(la,{size:14})}),(0,N.jsxs)(xf,{onClick:()=>{se(e=>!e),L(!1),I(null),z(null),R(null)},title:D(O?`Done`:`Edit`),type:`button`,children:[O?(0,N.jsx)(vi,{size:13}):(0,N.jsx)(Ii,{size:13}),D(O?`Done`:`Edit`)]})]}),be&&(0,N.jsx)(ep,{children:be}),k?.overviewBanner&&(0,N.jsxs)(Wd,{ref:Be,style:{height:`${He}px`,"--banner-image-width":`${et}px`,"--banner-image-shift":`${rt}px`,"--banner-travel":`${nt}px`,"--banner-overlap":`0px`},children:[(0,N.jsx)(Gd,{children:fe?(0,N.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Je({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:P??void 0}):(0,N.jsx)(`img`,{alt:``,onLoad:e=>{let t=j?1920:e.currentTarget.naturalWidth||1920,n=j?1080:e.currentTarget.naturalHeight||1080;Je({width:t,height:n})},ref:Ve,src:P??void 0})}),O&&(0,N.jsx)(Kd,{onDoubleClick:()=>{Re.current=null,Ie(null),bt({overviewBannerHeight:220})},onPointerCancel:Ot,onPointerDown:Et,onPointerMove:Dt,onPointerUp:Ot,title:D(`Drag to resize; double-click to reset`)})]}),(0,N.jsxs)(qd,{$offset:k?.overviewBanner?100:0,children:[O&&(0,N.jsxs)(Jd,{children:[(0,N.jsxs)(Yd,{children:[(0,N.jsx)(Xd,{children:D(`Banners`)}),k?.overviewBanner&&(0,N.jsxs)(xf,{onClick:()=>ot(!0),title:D(`Adjust framing…`),type:`button`,children:[(0,N.jsx)(Ii,{size:12}),D(`Adjust framing…`)]})]}),(0,N.jsxs)(Zd,{children:[(0,N.jsx)(tf,{children:(0,N.jsx)(nf,{$active:!k?.overviewBanner,onClick:wt,title:D(`No banner`),type:`button`,children:(0,N.jsxs)(of,{children:[(0,N.jsx)(yi,{size:16}),(0,N.jsx)(`span`,{children:D(`No banner`)})]})})}),uu.map(e=>(0,N.jsx)(tf,{children:(0,N.jsx)(nf,{$active:k?.overviewBanner===e.id,onClick:()=>void bt({overviewBanner:e.id}),title:`${D(e.concept)} · ${D(e.preset)}`,type:`button`,children:(0,N.jsx)(Rd,{poster:e.url,source:e.id})})},e.id)),cu.map(e=>(0,N.jsx)(tf,{children:(0,N.jsxs)(nf,{$active:k?.overviewBanner===e.id,onClick:()=>void bt({overviewBanner:e.id}),title:D(e.name),type:`button`,children:[(0,N.jsx)(Rd,{poster:e.poster,source:e.id}),(0,N.jsx)(af,{children:(0,N.jsx)(wi,{size:11})})]})},e.id)),(k?.overviewBanners??[]).map(e=>(0,N.jsxs)(tf,{children:[(0,N.jsx)(nf,{$active:k?.overviewBanner===e||k?.overviewBanner===`url:${e}`,onClick:()=>void bt({overviewBanner:re(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,N.jsx)(Rd,{source:e})}),(0,N.jsx)(rf,{onClick:()=>Tt(e),title:D(`Remove`),type:`button`,children:(0,N.jsx)(yi,{size:10})})]},e)),(0,N.jsxs)(_f,{onClick:()=>void St(),title:D(`Add banner…`),type:`button`,children:[(0,N.jsx)(si,{size:18}),(0,N.jsx)(`span`,{children:D(`Add banner…`)})]})]}),(0,N.jsxs)(Qd,{children:[(0,N.jsx)($d,{onChange:e=>he(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ct()},placeholder:`https://…`,value:me}),(0,N.jsx)(ef,{disabled:!re(me),onClick:()=>void Ct(),type:`button`,children:D(`Add URL`)})]})]}),(0,N.jsx)(Tf,{ref:dt,$columns:yt,children:U.map(e=>{let t=ut.indexOf(e.id);return(0,N.jsxs)(Ef,{children:[(0,N.jsxs)(Df,{children:[(0,N.jsxs)(Of,{children:[(0,N.jsxs)(Jf,{children:[O?(0,N.jsx)(Yf,{onClick:()=>I(ft(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,N.jsx)(Cs,{panel:e,size:15})}):(0,N.jsx)(Cs,{panel:e,size:15}),ft(e.id)&&(0,N.jsx)(yd,{onPick:t=>Pt(e.id,t),value:e.icon})]}),O?(0,N.jsx)(jf,{defaultValue:e.title,onBlur:t=>At(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,N.jsx)(Af,{children:D(e.title)})]}),(0,N.jsxs)(kf,{children:[!O&&e.kind===`recent`&&(0,N.jsx)(xf,{onClick:()=>void Ue().then(u),title:D(`Clear`),type:`button`,children:D(`Clear`)}),!O&&e.kind===`frequent`&&(0,N.jsx)(xf,{onClick:()=>void We().then(()=>m?.()),title:D(`Clear the frequent list`),type:`button`,children:D(`Clear`)}),!O&&(e.kind===`home`||e.kind===`folder`)&&(0,N.jsx)(xf,{onClick:()=>c(e.path??a),title:D(`Open folder`),type:`button`,children:D(`Open`)}),O&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Mf,{$active:e.pinned,onClick:()=>Mt(e.id),title:e.pinned?D(`Unpin from the sidebar`):D(`Pin to the sidebar`),type:`button`,children:(0,N.jsx)(fi,{size:12})}),(0,N.jsx)(Mf,{$active:e.view===`list`,onClick:()=>jt(e.id,`list`),title:D(`List`),type:`button`,children:(0,N.jsx)(pi,{size:13})}),(0,N.jsx)(Mf,{$active:e.view===`grid`,onClick:()=>jt(e.id,`grid`),title:D(`Grid`),type:`button`,children:(0,N.jsx)(mi,{size:13})}),(0,N.jsx)(Mf,{disabled:t===0,onClick:()=>kt(e.id,-1),title:D(`Move up`),type:`button`,children:(0,N.jsx)(ai,{size:12})}),(0,N.jsx)(Mf,{disabled:t===ut.length-1,onClick:()=>kt(e.id,1),title:D(`Move down`),type:`button`,children:(0,N.jsx)(ai,{size:12})}),(0,N.jsx)(Mf,{onClick:()=>Nt(e.id),title:D(`Remove panel`),type:`button`,children:(0,N.jsx)(yi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Gt(e):(0,N.jsx)(Gf,{children:Gt(e)})]},e.id)})})]}),at&&P&&(0,N.jsx)(zd,{height:He,offset:Xe,onCancel:()=>ot(!1),onSave:e=>{bt({overviewBannerOffset:e}),ot(!1)},source:P,video:fe}),Ne&&(0,N.jsx)(ao,{directory:a,menu:{x:Ne.x,y:Ne.y,paths:[Ne.target.path]},onClose:()=>Pe(null),onCopy:(e,t)=>void vt(e,t),onAddToTray:ee,onAddFavorite:C,onRemoveFavorite:te,favoritePaths:ie,onExtractArchive:T,onOpen:lt,onOpenFile:e=>x?x(e):void B(e),shortcuts:Ut,target:Ne.target})]})}function dp({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=F();return(0,N.jsxs)(Qf,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,N.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,N.jsx)($f,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,N.jsx)(yi,{size:11})}),(0,N.jsx)($f,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,N.jsx)(vi,{size:12})})]})}function fp({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=F(),[c,l]=(0,E.useState)(null),[u,d]=(0,E.useState)(null),f=J(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,E.useEffect)(()=>{Ve().then(l,()=>l([]))},[a]),!c)return(0,N.jsx)(tp,{children:s(`Reading…`)});if(c.length===0)return(0,N.jsx)(tp,{children:s(`Folders you open often show up here.`)});let m=e=>o(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,N.jsx)(Nf,{children:c.map(e=>{let i=In(f,e.path);return(0,N.jsxs)(Pf,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Kt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,N.jsx)(Ff,{children:i&&f.useIcons?(0,N.jsx)(ws,{place:i,size:18}):(0,N.jsx)(Hs,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,N.jsxs)(If,{children:[(0,N.jsx)(`strong`,{children:i?.name||e.name}),(0,N.jsx)(Lf,{children:m(e)})]})]},e.path)})}):(0,N.jsx)(Rf,{children:c.map(e=>{let i=In(f,e.path);return(0,N.jsxs)(zf,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Kt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,N.jsx)(ws,{place:i,size:15}):(0,N.jsx)(Hs,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,N.jsxs)(Bf,{children:[(0,N.jsx)(`strong`,{children:i?.name||e.name}),(0,N.jsx)(Lf,{children:m(e)})]})]},e.path)})})}function pp({path:e,mode:n,onOpen:r,onContextMenu:i,onPick:a,onSelectionChange:o,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:l,visibilityVersion:u}){let d=F(),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=J();return(0,E.useEffect)(()=>{e&&(p(null),Ce(e).then(p,()=>p(null)))},[e,u]),(0,E.useEffect)(()=>{if(M.available)return M.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Ce(e,!1).then(p,()=>void 0)})},[e]),f?n===`list`?(0,N.jsx)(Wf,{children:(0,N.jsx)(Rc,{error:null,listing:f,loading:!1,onOpen:a??r,onOpenFile:a??(e=>void B(e)),onRefresh:()=>void Ce(e,!1).then(p,()=>void 0),onRename:(e,n)=>p(r=>r&&{...r,entries:r.entries.map(r=>t(r.fullPath,e)?{...r,name:v(n),fullPath:n}:r)}),onSelectionChange:o,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:l,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...be,columns:xe.columns??[]}})}):(0,N.jsx)(Gf,{children:f.entries.length===0?(0,N.jsx)(tp,{children:d(`This folder is empty.`)}):(0,N.jsx)(Kf,{children:f.entries.map(e=>{let t=In(g,e.fullPath);return(0,N.jsxs)(qf,{$selected:m===e.fullPath,onClick:t=>{a?(h(e.fullPath),o?.([e.fullPath])):e.isDirectory?r(e.fullPath,Kt(t)):B(e.fullPath)},onDoubleClick:()=>a?.(e.fullPath),onContextMenu:t=>i?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&g.useIcons?(0,N.jsx)(ws,{place:t,size:16}):(0,N.jsx)(Hs,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,N.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,N.jsx)(tp,{children:d(`Reading…`)})}var mp=`yafm://`,hp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function gp(e){return e.toLowerCase().startsWith(mp)}function _p(e){return`${mp}${e===`home`?`overview`:e}`}function vp(e){return gp(e)?hp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function yp(e){let t=e.trim();if(t.length===0)return null;if(!gp(t))return t;let n=hp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?_p(n):null}function bp({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=F(),s=J(),[c,l]=(0,E.useState)(!1),[u,d]=(0,E.useState)(``),[f,p]=(0,E.useState)([]),[m,h]=(0,E.useState)(0),[g,_]=(0,E.useState)(null),[v,y]=(0,E.useState)(null),b=(0,E.useRef)(null),x=(0,E.useRef)(null),S=(0,E.useRef)(0);(0,E.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,E.useEffect)(()=>{r&&r!==S.current&&(S.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,E.useEffect)(()=>{c&&b.current?.select()},[c]),(0,E.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let ee=()=>{d(e.replace(/\\/g,`/`)),l(!0)},C=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,E.useEffect)(()=>{if(!c){p([]);return}let e=Cp(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{Ce(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let te=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,E.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=x.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,N.jsxs)(kp,{onPointerDown:e=>e.stopPropagation(),ref:x,children:[(0,N.jsxs)(Np,{children:[(0,N.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?te(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):C(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:b,spellCheck:!1,value:u}),(0,N.jsx)(Pp,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,N.jsx)(yi,{size:12})}),(0,N.jsx)(Pp,{$apply:!0,onClick:C,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,N.jsx)(vi,{size:14})})]}),f.length>0&&g&&(0,Aa.createPortal)((0,N.jsx)(Ap,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,N.jsxs)(jp,{$active:t===m,onClick:t=>te(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,N.jsx)(Hs,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,N.jsx)(Mp,{children:e.name})]},e.path))}),document.body)]});let ne=t?[{label:t,path:e,icon:n}]:Sp(e,s.places);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(wp,{onClick:ee,title:o(`Click to type a path`),children:ne.map((t,n)=>(0,N.jsxs)(Tp,{$last:n===ne.length-1,children:[n>0&&(0,N.jsx)(Dp,{children:(0,N.jsx)(ui,{size:9})}),(0,N.jsxs)(Op,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,N.jsx)(Ep,{children:(0,N.jsx)(ws,{place:t.place,size:13})}):t.icon&&(0,N.jsx)(Ep,{children:t.icon}),t.label]})]},t.path))}),v&&(0,N.jsx)(qa,{items:[{label:o(`Open`),icon:(0,N.jsx)(li,{size:14}),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),icon:(0,N.jsx)(si,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`Copy as path`),icon:(0,N.jsx)(na,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...gp(v.path)?[{label:o(`Open with…`),icon:(0,N.jsx)(Oi,{size:14}),onSelect:()=>void Mt(v.path)},{label:o(`Properties`),icon:(0,N.jsx)(di,{size:14}),onSelect:()=>void jt([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function xp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Sp(e,n){let r=xp(e),i=-1,a=null;for(let e of Object.values(n)){if(e.name.trim().length===0)continue;let n=r.findIndex(n=>t(n.path,e.path));n>i&&(i=n,a=e)}return a&&i>=0&&r.splice(0,i+1,{label:a.name,path:r[i].path,place:a}),r}function Cp(e){if(gp(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var wp=_.div`
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
`,Tp=_.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Ep=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Dp=_.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Op=_.button`
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
`,kp=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Ap=_.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${ja}
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
`,jp=_.button`
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
`,Mp=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Np=_.div`
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
`,Pp=_.button`
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
`,Fp=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,N.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,N.jsx)(`path`,{d:`M4 4v6h6`})]});function Ip({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:a=!1,videoAutoplay:s=!1,platform:c}){let l=F(),u=wc(`recycle`),d=c===`windows`,[p,m]=(0,E.useState)([]),[h,g]=(0,E.useState)([]),[_,v]=(0,E.useState)(!1),[b,x]=(0,E.useState)(null),[S,ee]=(0,E.useState)(!0),[C,te]=(0,E.useState)(!1),[ne,re]=(0,E.useState)(null),[w,ie]=(0,E.useState)(!1),[T,ae]=(0,E.useState)(()=>new Set),[D,oe]=(0,E.useState)(null),[O,se]=(0,E.useState)(()=>{let e=Bn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[k,ce]=(0,E.useState)(null),[A,j]=(0,E.useState)(null),[le,ue]=(0,E.useState)(()=>{let e=Rn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),M=(0,E.useRef)(null),de=e=>{ue(e),zn(`yafm.recycle.preview.width`,e)},fe=(0,E.useCallback)(async()=>{ee(!0),re(null);try{m(await H(w))}catch(e){re(e instanceof Error?e.message:String(e))}finally{ee(!1)}},[w]),pe=(0,E.useCallback)(async()=>{try{m(await H(w))}catch{}},[w]);(0,E.useEffect)(()=>{fe()},[fe]),(0,E.useEffect)(()=>{let e=window.setInterval(()=>void pe(),1e4);return()=>window.clearInterval(e)},[pe]),(0,E.useEffect)(()=>{w||(g([]),v(!1),x(null))},[w]),(0,E.useEffect)(()=>{ae(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let P=(0,E.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Lp(e,t,O.column);return O.descending?-n:n})},[p,h,O]),me=(0,E.useMemo)(()=>!t?.open||t.query.trim().length===0?P:P.filter(e=>On(e.name,t)||On(e.originalPath,t)),[P,t?.open,t?.query,t?.matchCase,t?.regex]),he=(0,E.useRef)(null);vd(he,t??null,`[data-search-block]`,n??(()=>void 0),[P]),(0,E.useEffect)(()=>{ae(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let ge=(0,E.useMemo)(()=>P.filter(e=>T.has(e.id)),[P,T]),I=ge.filter(e=>e.removable&&!e.isOrphan),_e=ge.filter(e=>e.removable),L=(e,t)=>{let n=t.ctrlKey||t.metaKey;ae(r=>{if(t.shiftKey&&D){let t=P.findIndex(e=>e.id===D),i=P.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(P[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),oe(e.id)},ve=(0,E.useCallback)(()=>ae(new Set(me.map(e=>e.id))),[me]),R=me.length>0&&me.every(e=>T.has(e.id)),ye=(0,E.useCallback)(async()=>{let e=I.map(e=>e.id);if(e.length!==0){te(!0);try{let t=await Pe(e);t.ok||await va(o(l,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),ae(new Set),await fe()}finally{te(!1)}}},[fe,I,l]),z=(0,E.useCallback)(async()=>{let e=_e.map(e=>e.id);if(j(null),e.length!==0){te(!0);try{let t=await Fe(e);!t.ok&&!t.cancelled&&await va(o(l,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),ae(new Set),await fe()}finally{te(!1)}}},[_e,fe,l]),be=async()=>{j(null),te(!0);try{await Ne(w),ae(new Set),await fe()}finally{te(!1)}},xe=async()=>{te(!0),x(null);try{let e=await Le();if(e.cancelled){x(`Elevation was declined — nothing was read.`);return}if(e.failed){x(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),v(!0)}finally{te(!1)}},Se=async()=>{te(!0),j(null);try{await Re(),g([]),v(!1),x(null),await fe()}finally{te(!1)}},B=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},Ce=e=>{navigator.clipboard.writeText(e.originalPath)},we=(e,t)=>{e.preventDefault(),t&&!T.has(t.id)&&ae(new Set([t.id])),ce({x:e.clientX,y:e.clientY})};(0,E.useEffect)(()=>(yc(`recycle`,T.size>0?(e,t)=>ce({x:e,y:t}):null),()=>yc(`recycle`,null)),[T]),(0,E.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),ve()):e.key===`Delete`?(e.preventDefault(),_e.length>0&&j(`delete`)):e.key===`Enter`&&I.length>0?(e.preventDefault(),ye()):e.key===`Escape`&&(ae(new Set),ce(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[_e.length,I.length,ye,ve]);let Te=[{label:l(`Restore`),icon:(0,N.jsx)(Fp,{width:14,height:14}),disabled:I.length===0,onSelect:()=>void ye()},{label:l(`Delete permanently`),icon:(0,N.jsx)(_i,{size:14}),danger:!0,disabled:_e.length===0,onSelect:()=>j(`delete`)},{label:l(`Properties`),icon:(0,N.jsx)(di,{size:14}),disabled:ge.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=ge;e&&Ie(e.id)}},{label:l(`Open original location`),icon:(0,N.jsx)(ti,{size:14}),disabled:ge.length!==1,onSelect:()=>{let[e]=ge;e&&B(e)}},{label:l(`Copy original path`),icon:(0,N.jsx)(na,{size:14}),disabled:ge.length!==1,onSelect:()=>{let[e]=ge;e&&Ce(e)}},{label:l(`Select all`),separatorBefore:!0,onSelect:ve},{label:l(`Refresh`),icon:(0,N.jsx)(oi,{size:14}),onSelect:()=>void fe()}],Ee=ge.length>0?ge[0]:null,V=Ee?{name:Ee.name,path:Ee.contentPath||Ee.originalPath,isDirectory:Ee.isDirectory,size:Ee.size,modified:Ee.deleted,fields:[{label:l(`Type`),value:l(zp(Ee))},{label:l(`Original location`),value:Ee.originalPath},{label:l(`Date deleted`),value:y(Ee.deleted)},{label:l(`Size`),value:Ee.isDirectory?`—`:f(Ee.size)},...Ee.owner?[{label:l(`Owner`),value:Ee.owner}]:[],{label:l(`Status`),value:Ee.isOrphan?l(`Metadata only`):Ee.removable?l(`Restorable`):l(`Other profile`)}]}:null;return(0,N.jsxs)(Vp,{ref:M,onContextMenu:e=>we(e),children:[(0,N.jsxs)(Hp,{children:[(0,N.jsxs)(Up,{children:[(0,N.jsx)(_i,{size:16}),(0,N.jsx)(`span`,{children:l(`Recycle Bin`)}),(0,N.jsxs)(Wp,{children:[S?`…`:o(l,P.length,`1 item`,`{count} items`),T.size>0&&` · ${l(`{count} selected`,{count:T.size})}`]})]}),(0,N.jsxs)(Gp,{children:[(0,N.jsx)(qp,{$on:w,onClick:()=>ie(e=>!e),title:l(`Show metadata records whose content is already gone`),type:`button`,children:l(`Orphans`)}),w&&d&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Kp,{disabled:C||_,onClick:()=>void xe(),title:l(_?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:l(C?`Working…`:_?`Admin view loaded`:`Show all (admin)…`)}),_&&h.length>0&&(0,N.jsx)(Kp,{disabled:C,onClick:()=>j(`purge`),type:`button`,children:l(`Delete every orphan`)})]}),(0,N.jsx)(Kp,{disabled:C||I.length===0,onClick:()=>void ye(),type:`button`,children:l(`Restore`)}),(0,N.jsx)(Kp,{$danger:!0,disabled:C||_e.length===0,onClick:()=>j(`delete`),type:`button`,children:l(`Delete`)}),(0,N.jsx)(Kp,{disabled:C||P.length===0,onClick:()=>j(`empty`),type:`button`,children:l(`Empty`)}),(0,N.jsx)(Jp,{onClick:()=>void fe(),title:l(`Refresh`),type:`button`,children:(0,N.jsx)(oi,{size:14})}),u.available&&(0,N.jsx)(Jp,{onClick:e=>u.open(e.clientX,e.clientY),title:l(`Selection menu`),type:`button`,children:(0,N.jsx)(la,{size:14})})]})]}),b&&(0,N.jsx)(hm,{children:b}),ne&&(0,N.jsx)(gm,{children:ne}),!ne&&!S&&(t?.open&&t.query.trim().length>0?me.length===0:P.length===0)&&(0,N.jsx)(gm,{children:t?.open&&t.query.trim().length>0?l(`No matching items.`):l(`The recycle bin is empty.`)}),P.length>0&&(0,N.jsxs)(mm,{children:[(0,N.jsxs)(Yp,{ref:he,children:[(0,N.jsxs)(Zp,{children:[(0,N.jsx)(rm,{$checked:R,$partial:!R&&T.size>0,onClick:()=>R?ae(new Set):ve(),title:l(R?`Select none`:`Select all`),type:`button`,children:R?(0,N.jsx)(vi,{size:9}):T.size>0&&(0,N.jsx)(im,{})}),(0,N.jsxs)(Qp,{onClick:()=>De(`name`),type:`button`,children:[l(`Name`),Rp(O,`name`)]}),(0,N.jsxs)(Qp,{onClick:()=>De(`original`),type:`button`,children:[l(`Original location`),Rp(O,`original`)]}),(0,N.jsxs)(Qp,{onClick:()=>De(`deleted`),type:`button`,children:[l(`Date deleted`),Rp(O,`deleted`)]}),(0,N.jsxs)(Qp,{onClick:()=>De(`size`),type:`button`,children:[l(`Size`),Rp(O,`size`)]}),(0,N.jsxs)(Qp,{onClick:()=>De(`type`),type:`button`,children:[l(`Type`),Rp(O,`type`)]}),(0,N.jsx)(`span`,{})]}),(0,N.jsx)($p,{onClick:e=>{e.target===e.currentTarget&&ae(new Set)},children:P.map(e=>(0,N.jsxs)(em,{$checked:T.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>L(e,t),onContextMenu:t=>we(t,e),onDoubleClick:()=>{ae(new Set([e.id])),oe(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,N.jsx)(nm,{$checked:T.has(e.id),children:T.has(e.id)&&(0,N.jsx)(vi,{size:9})}),(0,N.jsxs)(am,{children:[(0,N.jsx)(Bp,{entry:e}),(0,N.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,N.jsx)(pm,{children:l(`Metadata only`)}),e.owner&&(0,N.jsx)(pm,{$other:!0,children:l(`Other profile`)})]}),(0,N.jsx)(sm,{children:e.originalPath}),(0,N.jsx)(cm,{children:y(e.deleted)}),(0,N.jsx)(lm,{children:e.isDirectory?`—`:f(e.size)}),(0,N.jsx)(um,{children:l(zp(e))}),(0,N.jsxs)(dm,{children:[e.removable&&!e.isOrphan&&(0,N.jsx)(fm,{onClick:t=>{t.stopPropagation(),Pe([e.id]).then(fe)},title:l(`Restore to its original folder`),type:`button`,children:(0,N.jsx)(Fp,{})}),e.removable&&(0,N.jsx)(fm,{$danger:!0,onClick:t=>{t.stopPropagation(),ae(new Set([e.id])),j(`delete`)},title:e.isOrphan?l(`Remove the leftover record`):l(`Delete permanently`),type:`button`,children:(0,N.jsx)(_i,{size:13})})]})]},e.id))})]}),r&&(0,N.jsx)(Ko,{emptyNote:l(`Nothing selected.`),info:V,onWidth:de,selectionNote:ge.length>1?o(l,ge.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:a,videoAutoplay:s,width:le})]}),k&&(0,N.jsx)(qa,{items:Te,onClose:()=>ce(null),x:k.x,y:k.y}),(0,N.jsx)(Fo,{confirmLabel:l(A===`empty`?`Empty the bin`:A===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:A===`empty`?o(l,P.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):A===`purge`?l(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):o(l,_e.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>j(null),onConfirm:()=>{A===`empty`?be():A===`purge`?Se():z()},open:A!==null,title:l(A===`empty`?`Empty the recycle bin`:A===`purge`?`Delete every orphan`:`Delete permanently`)})]});function De(e){se(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Vn(`yafm.recycle.sort`,n),n})}}function Lp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return zp(e).localeCompare(zp(t),void 0,{sensitivity:`base`})}}function Rp(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function zp(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function Bp({entry:e}){let t=un(e.originalPath,e.isDirectory);return(0,N.jsx)(om,{children:t?(0,N.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,N.jsx)(ti,{}):(0,N.jsx)(ni,{})})}var Vp=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Hp=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Up=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Wp=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Gp=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Kp=_.button`
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
`,qp=_(Kp)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Jp=_.button`
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
`,Yp=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Xp=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Zp=_.div`
    display: grid;
    grid-template-columns: ${Xp};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Qp=_.button`
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
`,$p=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,em=_.div`
    display: grid;
    grid-template-columns: ${Xp};
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
`,tm=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nm=_.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,rm=_.button`
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
`,im=_.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,am=_(tm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,om=_.span`
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
`,sm=_(tm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,cm=_(tm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,lm=_(tm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,um=_(tm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,dm=_.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,fm=_.button`
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
`,pm=_.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,mm=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,hm=_.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,gm=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function _m(){return M.available?(await M.request(`app.tags`)).tags:[]}async function vm(e){return!M.available||!e?!1:(await M.request(`app.tags.delete`,{name:e})).ok}async function ym(e,t){return!M.available||!e?[]:(await M.request(`app.tags.create`,{name:e,color:t})).tags}async function bm(e,t){return!M.available||!e?!1:(await M.request(`app.tags.color`,{name:e,color:t})).ok}async function xm(e,t){return!M.available||!e||!t?!1:(await M.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function Sm(){let e=F();return(0,N.jsx)(Cm,{title:e(`Always applies to every folder`),children:e(`Global`)})}var Cm=_.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,wm=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function Tm(e){return`"${e.replaceAll(`"`,``)}"`}function Em(e){let t=document.documentElement.style;for(let n of wm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Tm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Dm(){return M.available?(await M.request(`app.fonts`)).fonts??[]:[]}function Om({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=F(),[s,c]=(0,E.useState)(null),[l,u]=(0,E.useState)(``),d=(0,E.useRef)(null),f=(0,E.useRef)(null),p=(0,E.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,E.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(km,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,N.jsx)(Am,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,N.jsx)(jm,{children:`▾`})]}),s&&(0,Aa.createPortal)((0,N.jsxs)(Mm,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,N.jsxs)(Nm,{children:[(0,N.jsx)(ii,{size:12}),(0,N.jsx)(Pm,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,N.jsxs)(Fm,{children:[(0,N.jsxs)(Im,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,N.jsxs)(Rm,{children:[n,` `,(0,N.jsx)(Bm,{children:o(`(default)`)})]}),!e&&(0,N.jsx)(vi,{size:11})]}),p.map(t=>(0,N.jsxs)(Im,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,N.jsxs)(Lm,{children:[(0,N.jsx)(Rm,{children:t}),(0,N.jsx)(zm,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,N.jsx)(vi,{size:11})]},t)),p.length===0&&(0,N.jsx)(Vm,{children:o(`No matching font.`)})]})]}),document.body)]})}var km=_.button`
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
`,Am=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,jm=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,Mm=_.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${Va}
`,Nm=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,Pm=_.input`
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
`,Fm=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,Im=_.button`
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
`,Lm=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Rm=_.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zm=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bm=_.span`
    color: var(--text-muted);
    font-size: 10px;
`,Vm=_.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Hm=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],Um=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Wm=`en`,Gm=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],Km=new Date(2026,10,5,16,8).getTime(),qm=`system`,Jm={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},Ym=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],Xm=`yafm.colors.recent`;function Zm(){let e=Bn(Xm);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Qm({appInfo:e,focusSection:t,onSettingsChanged:n,onOpenFolder:r,find:i,onSearchMatches:a}){let s=F(),[c,l]=(0,E.useState)([]),[u,d]=(0,E.useState)(null),[p,g]=(0,E.useState)(null),[_,y]=(0,E.useState)(null),[x,S]=(0,E.useState)(``),[ee,C]=(0,E.useState)(`file`),[ne,ie]=(0,E.useState)(!1),[T,ae]=(0,E.useState)(!1),[D,oe]=(0,E.useState)(null),[O,se]=(0,E.useState)(!1),[k,ce]=(0,E.useState)(!1),[A,j]=(0,E.useState)(null),[le,ue]=(0,E.useState)(null),[M,de]=(0,E.useState)(null),[pe,P]=(0,E.useState)(!1),[me,he]=(0,E.useState)(null),[ge,I]=(0,E.useState)(!1),[_e,L]=(0,E.useState)(null),[ve,R]=(0,E.useState)(null),[ye,z]=(0,E.useState)(!1),[be,Se]=(0,E.useState)([]),[B,Ce]=(0,E.useState)(null),[we,Te]=(0,E.useState)(!1),[Ee,V]=(0,E.useState)(null),[De,Oe]=(0,E.useState)(``),[ke,Ae]=(0,E.useState)(Ts),[je,H]=(0,E.useState)(null),[Me,Ne]=(0,E.useState)(null),[Pe,Fe]=(0,E.useState)(``),[Ie,Le]=(0,E.useState)(``),[Re,ze]=(0,E.useState)(null),[Be,Ve]=(0,E.useState)(Zm),[He,Ue]=(0,E.useState)({}),[We,Ke]=(0,E.useState)(null),[qe,Je]=(0,E.useState)(null),[Ze,Qe]=(0,E.useState)(!1),[at,st]=(0,E.useState)(!1),[ct,ht]=(0,E.useState)(null),[vt,yt]=(0,E.useState)(Ym[0].id),[bt,xt]=(0,E.useState)([]),[St,Ct]=(0,E.useState)(null),[wt,Tt]=(0,E.useState)(null),[Et,Dt]=(0,E.useState)(null),[Ot,kt]=(0,E.useState)(!1),[At,jt]=(0,E.useState)(``),Mt=(0,E.useRef)(null),Nt=(0,E.useRef)({}),Pt=p?.defaultView??xe,Ft=p?.themePresets??[],It=e?.platform===`windows`,Lt=It?le?le.registered&&le.pathMatches:!1:p?.archiveHandler??!1,Rt=le?.registered??p?.archiveHandler??!1,zt=It?M?M.registered&&M.pathMatches:!1:p?.defaultFileManager??!1;vd(Mt,i??null,`section`,a??(()=>void 0),[p]),(0,E.useEffect)(()=>{let e=Mt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){yt(Ym[Ym.length-1].id);return}let n=t+110,r=Ym[0].id;for(let{id:e}of Ym){let t=Nt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}yt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Bt=e=>t=>{Nt.current[e]=t},Vt=e=>{Nt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),yt(e)};(0,E.useEffect)(()=>{t&&Vt(t)},[t]),(0,E.useEffect)(()=>{fe().then(e=>l(e.available),()=>l([]))},[]),(0,E.useEffect)(()=>{Dm().then(xt,()=>xt([]))},[]),(0,E.useEffect)(()=>{gt().then(Tt,()=>Tt(null))},[]),(0,E.useEffect)(()=>{lt().then(Je,()=>void 0)},[]),(0,E.useEffect)(()=>{Ge().then(d,()=>d(null)),Ye().then(g,()=>g(null)),pt().then(se,()=>se(!1)),tt().then(ue,()=>ue(null)),$e().then(de,()=>de(null)),_m().then(Se,()=>Se([]))},[]),(0,E.useEffect)(()=>{let e=()=>void dt().then(oe,()=>oe(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let W=async e=>{if(!p)return;let t={...p,...e};Object.keys(e).every(e=>t[e]===p[e])||(g(t),on(),g(await it(t)),n())},Ht=async e=>{let t=await ma(e);if(!t)return;let n=p?.backgroundCustom??[];await W({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Wt=async()=>{let e=At.trim();if(!p||!re(e))return;let t=p.backgroundCustom??[];jt(``),await W({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Gt=e=>{if(!p)return;let t=p.backgroundSource;W({backgroundCustom:p.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},Kt=async()=>{if(!p)return;let t=await pa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.protectedPaths.includes(r)||await W({protectedPaths:[...p.protectedPaths,r]})},Yt=()=>{let e=Pe.trim();p&&e&&!p.protectedPaths.includes(e)&&(Fe(``),W({protectedPaths:[...p.protectedPaths,e]}))},Xt=()=>{if(!p||!je)return;let e=je.value.trim(),t=je.from;H(null),e.length!==0&&e!==t&&W({protectedPaths:p.protectedPaths.map(n=>n===t?e:n)})},Zt=e=>{p&&W({protectedPaths:p.protectedPaths.filter(t=>t!==e)})},Qt=async()=>{let e=await Xe();e.length>0&&await W({protectedPaths:e})},$t=()=>{if(!p||!Me)return;let e=Me.value.trim(),t=Me.from;Ne(null),e&&e!==t&&W({directoryIndexBlacklist:p.directoryIndexBlacklist.map(n=>n===t?e:n)})},en=()=>{let e=Ie.trim();p&&e&&!p.directoryIndexBlacklist.includes(e)&&(Le(``),W({directoryIndexBlacklist:[...p.directoryIndexBlacklist,e]}))},tn=async()=>{if(!p)return;let t=await pa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.directoryIndexBlacklist.includes(r)||await W({directoryIndexBlacklist:[...p.directoryIndexBlacklist,r]})},nn=e=>{p&&W({directoryIndexBlacklist:p.directoryIndexBlacklist.filter(t=>t!==e)})},rn=()=>{W({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},an=()=>{if(!p||Re===null)return;let e=Re.trim()||`yyyy/MM/dd HH:mm`;ze(null),e!==p.timeFormatPattern&&W({timeFormatPattern:e})},G=(e,t)=>{Ve(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Vn(Xm,i),i})},K=h(p?.accentColor,te),sn=h(p?.secondaryColor,b),cn=(e,t)=>{p&&(G(`accent`,K),G(`secondary`,sn),W({accentColor:e,secondaryColor:t}))},ln=(e,t)=>{p&&(G(e,e===`accent`?K:sn),W(e===`accent`?{accentColor:t}:{secondaryColor:t}))},q=async()=>{Qe(!0),st(!1);try{Je(await U())}catch{st(!0)}finally{Qe(!1)}},un=async()=>{if(!p||!We)return;let e=We.name.trim()||`${We.accent.toUpperCase()} / ${We.secondary.toUpperCase()}`,t=[...p.themePresets,{name:e,accent:We.accent,secondary:We.secondary}];Ke(null),await W({themePresets:t})},dn=async e=>{p&&await W({themePresets:p.themePresets.filter((t,n)=>n!==e)})},fn=e=>{let t=ct;ht(null),t&&t.role===e&&(e===`accent`?K:sn).toLowerCase()!==t.color.toLowerCase()&&G(e,t.color)},pn=async()=>{let e=De.trim();if(e&&!we){Te(!0),V(null);try{Se(await ym(e,ke)),Oe(``)}catch{V(s(`Could not add the tag.`))}finally{Te(!1)}}},mn=async(e,t)=>{Se(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await bm(e,t)||V(s(`Could not change the tag's color.`))},hn=async e=>{if(we)return;Te(!0),V(null);let t=await vm(e);Se(await _m()),t||V(`"${e}" is still used by a folder whose index could not be updated.`),Te(!1)},gn=async()=>{let e=B;if(!e||we)return;let t=e.value.trim();t.length===0||t===e.name?Ce(null):(Te(!0),V(null),await xm(e.name,t)?(Se(await _m()),Ce(null)):V(`Could not rename "${e.name}".`),Te(!1))},_n=async e=>{let t=new Set(Pt.columns??xe.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=kc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await W({defaultView:{...Pt,columns:n}})},vn=async()=>{if(k)return;let e=!O;ce(!0),j(null);try{let t=await mt(e);se(t),g(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&j(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{j(`The request to Windows failed. Try again.`)}finally{ce(!1)}},yn=async()=>{if(ge||!p)return;let e=!zt;I(!0),L(null);try{let t=await et(e);de(t);let r=It?t.registered&&t.pathMatches:e;g(e=>e&&{...e,defaultFileManager:r}),n(),It&&r!==e&&L(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{L(`The request to Windows failed. Try again.`)}finally{I(!1)}},bn=async()=>{if(!pe){P(!0),he(null);try{let e=await nt();ue(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),n(),t||he(`Windows did not accept the archive registration. Try again.`)}catch{he(`The request to Windows failed. Try again.`)}finally{P(!1)}}},xn=async()=>{if(!pe){P(!0),he(null);try{let e=await rt();ue(e),g(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&he(`The registration is still there. Try turning it off again.`)}catch{he(`The request to Windows failed. Try again.`)}finally{P(!1)}}},Sn=async(e,t)=>{if(!p)return;let n={...p.extensionIcons};t===null?delete n[e]:n[e]=t,await W({extensionIcons:n})},Cn={...Ut,...p?.shortcuts};(0,E.useEffect)(()=>{if(!ve)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){R(null);return}let t=qt(e);t&&(R(null),W({shortcuts:{...Cn,[ve]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[ve,p]),(0,E.useEffect)(()=>{if(!ye)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){z(!1);return}let t=qt(e);t&&(z(!1),W({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[ye,p]);let wn=async e=>{await W({recentLimit:Math.min(Math.max(e,0),50)})},Tn=(e,t)=>{let n=t??He[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Ue(t=>({...t,[e]:void 0})),W(i)},En=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Ct(null),await W({sharePortMode:`custom`,sharePort:n}),await Ad(n,`custom`)},Dn=async e=>{let t=e===`custom`,n=t?p?.sharePort??8080:null;await W({sharePortMode:t?`custom`:`random`,sharePort:n}),await Ad(n,t?`custom`:`random`)},On=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;kt(!0),Dt(null);try{let e=await _t(t);Tt(e),Dt(e.error),e.error||await W({startupMode:t})}finally{kt(!1)}},kn=async e=>{await W({galleryRoots:e.length>0?e:null})},An=async()=>{let e=await pa(),t=p?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await kn([...t,e])},jn=async()=>{let e=x.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await Sn(e,ee),S(``))},Mn=async()=>{ae(!0);try{let e=await pa();if(!e)return;let t=await ma([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await ot(e.replace(/[\\/][^\\/]+$/,``),v(e),`file:${t}`)&&(on(),y({folder:e,icon:t}))}finally{ae(!1)}},Nn=async(e,t)=>{let n={...p?.fonts};t?n[e]=t:delete n[e],await W({fonts:n})};return(0,N.jsxs)(uh,{children:[(0,N.jsxs)(dh,{ref:Mt,children:[(0,N.jsxs)(fh,{ref:Bt(`application`),children:[(0,N.jsx)(lh,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(X,{children:[(0,N.jsx)(Q,{children:s(`Version`)}),(0,N.jsx)(Hh,{children:e?`v${e.version}`:`—`})]}),(0,N.jsxs)(X,{children:[(0,N.jsx)(Q,{children:s(`Platform`)}),(0,N.jsx)(Hh,{children:e?.platform??`—`})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Logs`)}),(0,N.jsx)($,{children:s(`Application logs and crash details. Open the folder here to inspect them without leaving the app.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(jg,{disabled:!e?.logDirectory,onClick:()=>e?.logDirectory&&r(e.logDirectory),type:`button`,children:s(`Open log folder`)})})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Language`)}),(0,N.jsx)($,{children:s(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(oh,{disabled:!p,onChange:e=>void W({language:e}),options:[qm,...c.length>0?c:[Wm]],value:p?.language??Wm})})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Picker window size`)}),(0,N.jsx)($,{children:s(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(Qh,{inputMode:`numeric`,onBlur:e=>Tn(`width`,e.currentTarget.value),onChange:e=>Ue(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:He.width??String(p?.pickerWindowWidth??1200)}),(0,N.jsx)(Hh,{children:`×`}),(0,N.jsx)(Qh,{inputMode:`numeric`,onBlur:e=>Tn(`height`,e.currentTarget.value),onChange:e=>Ue(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:He.height??String(p?.pickerWindowHeight??800)})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Web server port`)}),(0,N.jsx)($,{children:s(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(co,{disabled:!p,onChange:e=>void Dn(e),options:[{value:`random`,label:s(`Random`)},{value:`custom`,label:s(`Custom port`)}],value:p?.sharePortMode??`random`,width:160})})]}),p?.sharePortMode===`custom`&&(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Custom port`)}),(0,N.jsx)($,{children:s(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(Qh,{inputMode:`numeric`,onBlur:e=>void En(e.currentTarget.value),onChange:e=>Ct(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:St??(p?.sharePort?String(p.sharePort):``)})})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Link paths`)}),(0,N.jsx)($,{children:s(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(co,{disabled:!p,onChange:e=>void W({linkPathMode:e}),options:[{value:`relative`,label:s(`Relative`)},{value:`absolute`,label:s(`Absolute`)}],value:p?.linkPathMode??`relative`,width:160})})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Global hotkey`)}),(0,N.jsx)($,{children:s(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(Ag,{$listening:ye,disabled:!p,onClick:()=>z(!0),type:`button`,children:ye?s(`Press a key…`):p?.globalHotkey?Jt(p.globalHotkey):s(`None`)}),p?.globalHotkey&&(0,N.jsx)(Gh,{onClick:()=>void W({globalHotkey:null}),type:`button`,children:s(`Clear`)})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Open yafm:// links`)}),(0,N.jsx)($,{children:s(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),A&&(0,N.jsx)(Vh,{children:A})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(Yh,{$on:O,children:s(O?`Active`:`Off`)}),(0,N.jsx)(Xh,{$on:O,disabled:k,onClick:()=>void vn(),title:s(O?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,N.jsx)(Zh,{})})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Use as the default file manager`)}),(0,N.jsx)($,{children:s(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),M?.registered&&!M.pathMatches&&(0,N.jsx)(Vh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:M.registeredPath??`?`})}),_e&&(0,N.jsx)(Vh,{children:_e})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(Yh,{$on:zt,children:s(zt?`Active`:`Off`)}),(0,N.jsx)(Xh,{$on:zt,disabled:!p||ge,onClick:()=>void yn(),title:s(zt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,N.jsx)(Zh,{})})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Open archives with this app`)}),(0,N.jsx)($,{children:s(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,N.jsx)($,{children:s(`When this is off, opening an archive uses the system's default application instead.`)}),le?.registered&&!le.pathMatches&&(0,N.jsx)(Vh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:le.registeredPath??`?`})}),me&&(0,N.jsx)(Vh,{children:me})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(Yh,{$on:Lt,children:s(Lt?`Active`:`Off`)}),(0,N.jsx)(jg,{disabled:!p||pe||Lt,onClick:()=>void bn(),type:`button`,children:s(`Register`)}),e?.platform===`windows`&&(0,N.jsx)(jg,{onClick:()=>void ut(`ms-settings:defaultapps`),type:`button`,children:s(`Default apps…`)}),(0,N.jsx)(Jh,{disabled:!p||pe||!Rt,onClick:()=>void xn(),type:`button`,children:s(`Unregister`)})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Reopen the tabs that were open`)}),(0,N.jsx)($,{children:s(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,N.jsx)(Xh,{$on:p?.restoreTabs??!0,disabled:!p,onClick:()=>void W({restoreTabs:!p?.restoreTabs}),type:`button`,children:(0,N.jsx)(Zh,{})})]})]})]}),(0,N.jsxs)(fh,{ref:Bt(`startup`),children:[(0,N.jsx)(lh,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Start with the computer`)}),(0,N.jsx)($,{children:s(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),Et&&(0,N.jsx)(Vh,{children:Et}),wt&&!wt.supported&&(0,N.jsx)(Vh,{children:s(`This platform cannot create a per-user startup entry.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(co,{disabled:!p||Ot||wt!==null&&!wt.supported,onChange:e=>void On(e),options:[{value:`none`,label:s(`None`)},{value:`shortcut`,label:s(`Shortcut`)},{value:`task`,label:s(`Scheduled task`)}],value:wt?.mode??p?.startupMode??`none`,width:170})})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Start hidden in the tray`)}),(0,N.jsx)($,{children:s(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(Xh,{$on:p?.startHidden??!1,disabled:!p,onClick:()=>void W({startHidden:!p?.startHidden}),type:`button`,children:(0,N.jsx)(Zh,{})})})]})]})]}),(0,N.jsxs)(fh,{ref:Bt(`fonts`),children:[(0,N.jsx)(lh,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,N.jsxs)(mh,{children:[wm.map(e=>(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(e.label)}),(0,N.jsx)($,{children:s(`Falls back to {font} until another family is chosen.`,{font:s(e.fallback)})})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(Om,{defaultLabel:s(e.fallback),disabled:!p,fonts:bt,onChange:t=>void Nn(e.id,t),sample:e.sample,value:p?.fonts?.[e.id]??null})})]},e.id)),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Reset`)}),(0,N.jsx)($,{children:s(`Back to the app's built-in font for every role.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(jg,{onClick:()=>void W({fonts:{}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,N.jsxs)(fh,{ref:Bt(`time`),children:[(0,N.jsx)(lh,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,N.jsx)(mh,{children:(0,N.jsxs)(hh,{children:[(0,N.jsxs)(gh,{children:[(0,N.jsx)(Q,{children:s(`Format`)}),(0,N.jsx)($,{children:s(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,N.jsx)(wg,{children:Gm.map(e=>(0,N.jsx)(Tg,{$active:(p?.timeFormat??`24`)===e.id,onClick:()=>void W({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(p?.timeFormat??`24`)===`custom`&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Eg,{"aria-label":s(`Pattern`),onBlur:an,onChange:e=>ze(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),an()):e.key===`Escape`&&ze(null)},spellCheck:!1,value:Re??p?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,N.jsx)($,{children:s(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,N.jsxs)(Dg,{children:[(0,N.jsx)(`span`,{children:s(`Preview`)}),(0,N.jsx)(`code`,{children:m(Km,p?.timeFormat,Re??p?.timeFormatPattern)})]})]})})]}),(0,N.jsxs)(fh,{ref:Bt(`updates`),children:[(0,N.jsx)(lh,{note:`The running build and the newest one published.`,title:`Updates`}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(X,{children:[(0,N.jsx)(Q,{children:s(`Current version`)}),(0,N.jsx)(Hh,{children:e?`v${e.version}`:`—`})]}),(0,N.jsxs)(X,{children:[(0,N.jsx)(Q,{children:s(`Latest version`)}),(0,N.jsx)(Hh,{children:qe?`v${qe.latest}`:`—`})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Check for updates`)}),(0,N.jsx)($,{children:qe&&!qe.available?s(`You are on the latest version.`):s(`Reads the version file the release workflow publishes.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(jg,{disabled:Ze,onClick:()=>void q(),type:`button`,children:s(Ze?`Checking…`:`Check now`)})})]}),qe?.available&&(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Version {version} is available.`,{version:qe.latest})}),(0,N.jsx)($,{children:s(`Download the new build from the releases page.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(jg,{onClick:()=>void ut(Um),type:`button`,children:s(`Open release page`)})})]}),at&&(0,N.jsx)(X,{children:(0,N.jsx)(Vh,{children:s(`Could not check for updates.`)})})]})]}),(0,N.jsxs)(fh,{ref:Bt(`colors`),children:[(0,N.jsx)(lh,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(hh,{children:[(0,N.jsxs)(gh,{children:[(0,N.jsx)(Q,{children:s(`Presets`)}),(0,N.jsx)($,{children:s(`One click changes the accent and the highlight together.`)})]}),(0,N.jsxs)(_h,{children:[ou.map(e=>(0,N.jsxs)(vh,{$on:K.toLowerCase()===e.accent&&sn.toLowerCase()===e.secondary,onClick:()=>cn(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,N.jsxs)(Th,{children:[(0,N.jsx)(`i`,{style:{background:e.accent}}),(0,N.jsx)(`i`,{style:{background:e.secondary}})]}),(0,N.jsx)(yh,{children:s(e.name)})]},e.name)),Ft.map((e,t)=>(0,N.jsxs)(bh,{children:[(0,N.jsxs)(vh,{$on:K.toLowerCase()===e.accent.toLowerCase()&&sn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>cn(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,N.jsxs)(Th,{children:[(0,N.jsx)(`i`,{style:{background:e.accent}}),(0,N.jsx)(`i`,{style:{background:e.secondary}})]}),(0,N.jsx)(yh,{children:e.name})]}),(0,N.jsx)(xh,{onClick:()=>void dn(t),title:s(`Remove preset`),type:`button`,children:(0,N.jsx)(yi,{size:9})})]},`${e.name}-${t}`)),We?(0,N.jsxs)(Ch,{children:[(0,N.jsxs)(Th,{children:[(0,N.jsx)(`i`,{style:{background:We.accent}}),(0,N.jsx)(`i`,{style:{background:We.secondary}})]}),(0,N.jsx)(wh,{autoFocus:!0,maxLength:24,onChange:e=>Ke({...We,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),un()):e.key===`Escape`&&(e.preventDefault(),Ke(null))},placeholder:s(`Preset name`),spellCheck:!1,value:We.name}),(0,N.jsx)(Gh,{onClick:()=>void un(),type:`button`,children:s(`Save`)}),(0,N.jsx)(Gh,{onClick:()=>Ke(null),type:`button`,children:s(`Cancel`)})]}):(0,N.jsxs)(Sh,{disabled:!p,onClick:()=>Ke({name:``,accent:K,secondary:sn}),title:s(`Save the current colours as a preset`),type:`button`,children:[(0,N.jsx)(si,{size:12}),s(`Add preset`)]})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Accent color`)}),(0,N.jsx)($,{children:s(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(ch,{colors:Be.accent,current:K,onApply:e=>ln(`accent`,e)}),(0,N.jsx)(Kh,{"aria-label":s(`Accent color`),disabled:!p,onBlur:()=>fn(`accent`),onChange:e=>void W({accentColor:e.target.value}),onFocus:()=>ht({role:`accent`,color:K}),type:`color`,value:K}),(0,N.jsx)(qh,{children:K.toUpperCase()})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Secondary color`)}),(0,N.jsx)($,{children:s(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(ch,{colors:Be.secondary,current:sn,onApply:e=>ln(`secondary`,e)}),(0,N.jsx)(Kh,{"aria-label":s(`Secondary color`),disabled:!p,onBlur:()=>fn(`secondary`),onChange:e=>void W({secondaryColor:e.target.value}),onFocus:()=>ht({role:`secondary`,color:sn}),type:`color`,value:sn}),(0,N.jsx)(qh,{children:sn.toUpperCase()})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Reset colors`)}),(0,N.jsx)($,{children:s(`Returns the interface to the default blue and indigo theme.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(Gh,{disabled:!p,onClick:()=>{G(`accent`,K),G(`secondary`,sn),W({accentColor:null,secondaryColor:null})},type:`button`,children:s(`Reset`)})})]})]})]}),(0,N.jsxs)(fh,{ref:Bt(`background`),children:[(0,N.jsx)(lh,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(hh,{children:[(0,N.jsxs)(gh,{children:[(0,N.jsx)(Q,{children:s(`Wallpaper`)}),(0,N.jsx)($,{children:s(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,N.jsx)(ug,{children:(0,N.jsx)(dg,{$active:!p?.backgroundSource,onClick:()=>void W({backgroundSource:null}),title:s(`None`),type:`button`,children:(0,N.jsx)(gg,{children:s(`None`)})})}),(0,N.jsxs)(sg,{children:[lu.map(e=>(0,N.jsxs)(cg,{children:[(0,N.jsx)(lg,{children:s(e.name)}),(0,N.jsx)(ug,{children:e.variants.map(t=>(0,N.jsx)(dg,{$active:p?.backgroundSource===t.id,onClick:()=>void W({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,N.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,N.jsxs)(cg,{children:[(0,N.jsx)(lg,{children:s(`Motion`)}),(0,N.jsx)(ug,{children:cu.map(e=>(0,N.jsxs)(dg,{$active:p?.backgroundSource===e.id,onClick:()=>void W({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,N.jsx)(`img`,{alt:``,src:e.poster}),(0,N.jsx)(mg,{children:(0,N.jsx)(wi,{size:11})})]},e.id))})]}),(0,N.jsxs)(cg,{children:[(0,N.jsx)(lg,{children:s(`Custom`)}),(0,N.jsxs)(ug,{children:[(p?.backgroundCustom??[]).map(e=>(0,N.jsx)(ah,{active:p?.backgroundSource===`file:${e}`||p?.backgroundSource===`url:${e}`||p?.backgroundSource===e,onRemove:()=>Gt(e),onSelect:()=>void W({backgroundSource:re(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,N.jsxs)(hg,{onClick:()=>void Ht([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,N.jsx)(si,{size:12}),s(`Image…`)]}),(0,N.jsxs)(hg,{onClick:()=>void Ht([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,N.jsx)(si,{size:12}),s(`Video…`)]})]})]})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Image or video URL`)}),(0,N.jsx)($,{children:s(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(Qh,{onChange:e=>jt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Wt()},placeholder:`https://…`,value:At}),(0,N.jsx)(Gh,{disabled:!re(At),onClick:()=>void Wt(),type:`button`,children:s(`Add`)})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsx)(Q,{children:s(`Blur`)}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(og,{max:40,min:0,onChange:e=>void W({backgroundBlur:Number(e.target.value)}),type:`range`,value:p?.backgroundBlur??0}),(0,N.jsxs)(Hh,{children:[p?.backgroundBlur??0,`px`]})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsx)(Q,{children:s(`Saturation`)}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(og,{max:200,min:0,onChange:e=>void W({backgroundSaturation:Number(e.target.value)}),type:`range`,value:p?.backgroundSaturation??100}),(0,N.jsxs)(Hh,{children:[p?.backgroundSaturation??100,`%`]})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsx)(Q,{children:s(`Brightness`)}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(og,{max:150,min:40,onChange:e=>void W({backgroundBrightness:Number(e.target.value)}),type:`range`,value:p?.backgroundBrightness??100}),(0,N.jsxs)(Hh,{children:[p?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,N.jsxs)(fh,{ref:Bt(`safety`),children:[(0,N.jsx)(lh,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(hh,{children:[(0,N.jsxs)(gh,{children:[(0,N.jsx)(Q,{children:s(`Protected folders`)}),(0,N.jsx)($,{children:s(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,N.jsx)(_g,{children:(p?.protectedPaths??[]).map(e=>(0,N.jsxs)(vg,{children:[(0,N.jsx)(yg,{"aria-label":s(`Protected path`),onBlur:Xt,onChange:t=>H({from:e,value:t.target.value}),onFocus:()=>H({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Xt()):e.key===`Escape`&&H(null)},spellCheck:!1,value:je?.from===e?je.value:e}),(0,N.jsx)(bg,{onClick:()=>Zt(e),title:s(`Remove`),type:`button`,children:(0,N.jsx)(yi,{size:10})})]},e))}),(0,N.jsxs)(Sg,{children:[(0,N.jsx)(Cg,{"aria-label":s(`New protected rule`),onChange:e=>Fe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Yt())},placeholder:`*.log`,spellCheck:!1,value:Pe}),(0,N.jsx)(Gh,{onClick:Yt,type:`button`,children:s(`Add the rule`)})]}),(0,N.jsxs)(xg,{children:[(0,N.jsx)(Gh,{onClick:()=>void Qt(),type:`button`,children:s(`Restore defaults`)}),(0,N.jsx)(Gh,{onClick:()=>void Kt(),type:`button`,children:s(`Add folder…`)})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Confirmation delay`)}),(0,N.jsx)($,{children:s(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(og,{max:30,min:2,onChange:e=>void W({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:p?.deleteDelaySeconds??5}),(0,N.jsxs)(Hh,{children:[p?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,N.jsxs)(fh,{ref:Bt(`tags`),children:[(0,N.jsx)(lh,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsxs)(Bh,{children:[(0,N.jsx)(Uh,{"aria-label":s(`Color of the new tag`),onChange:e=>Ae(e.target.value),type:`color`,value:ke}),(0,N.jsx)(Qh,{onChange:e=>Oe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),pn())},placeholder:s(`New tag`),spellCheck:!1,value:De})]}),(0,N.jsx)($,{children:s(`Add a tag here; it is available in every folder.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(Gh,{disabled:we||De.trim().length===0,onClick:()=>void pn(),type:`button`,children:s(`Add`)})})]}),Ee&&(0,N.jsx)(X,{children:(0,N.jsx)(Vh,{children:Ee})}),be.length===0&&(0,N.jsx)(X,{children:(0,N.jsx)($,{children:s(`No tags yet. Add one below; it is available in every folder.`)})}),be.map(e=>(0,N.jsx)(X,{children:B?.name===e.name?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsxs)(Bh,{children:[(0,N.jsx)(Uh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void mn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,N.jsx)(Wh,{autoFocus:!0,disabled:we,onChange:t=>Ce({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),gn()):e.key===`Escape`&&(e.preventDefault(),Ce(null))},value:B.value})]}),(0,N.jsx)($,{children:s(`Press Enter to save, Escape to cancel.`)})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(Gh,{disabled:we,onClick:()=>void gn(),type:`button`,children:s(`Save`)}),(0,N.jsx)(Gh,{disabled:we,onClick:()=>Ce(null),type:`button`,children:s(`Cancel`)})]})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsxs)(Bh,{children:[(0,N.jsx)(Uh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void mn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,N.jsx)(Q,{children:e.name})]}),(0,N.jsx)($,{children:o(s,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(Gh,{disabled:we,onClick:()=>Ce({name:e.name,value:e.name}),type:`button`,children:s(`Edit`)}),(0,N.jsxs)(Jh,{disabled:we,onClick:()=>void hn(e.name),type:`button`,children:[(0,N.jsx)(_i,{size:13}),s(`Remove`)]})]})]})},e.name))]})]}),(0,N.jsxs)(fh,{ref:Bt(`files-view`),children:[(0,N.jsx)(lh,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Default view`)}),(0,N.jsx)($,{children:s(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsxs)(ig,{children:[(0,N.jsx)(ag,{$on:Pt.mode===`list`,onClick:()=>void W({defaultView:{...Pt,mode:`list`}}),type:`button`,children:s(`List`)}),(0,N.jsx)(ag,{$on:Pt.mode===`grid`,onClick:()=>void W({defaultView:{...Pt,mode:`grid`}}),type:`button`,children:s(`Grid`)})]})})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`List icon size`)}),(0,N.jsx)($,{children:s(`The icon in the list rows.`)})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(og,{max:48,min:16,onChange:e=>void W({defaultView:{...Pt,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Pt.iconSize}),(0,N.jsxs)(Hh,{children:[Pt.iconSize,`px`]})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Grid size`)}),(0,N.jsx)($,{children:s(`The height of a grid tile; the icon inside follows it.`)})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(og,{max:260,min:100,onChange:e=>void W({defaultView:{...Pt,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Pt.gridSize}),(0,N.jsxs)(Hh,{children:[Pt.gridSize,`px`]})]})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsxs)(Bh,{children:[(0,N.jsx)(Q,{children:s(`Selection checkboxes`)}),(0,N.jsx)(Sm,{})]}),(0,N.jsx)($,{children:s(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,N.jsx)(Xh,{$on:p?.showCheckboxes??!0,disabled:!p,onClick:()=>void W({showCheckboxes:!(p?.showCheckboxes??!0)}),type:`button`,children:(0,N.jsx)(Zh,{})})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsxs)(Bh,{children:[(0,N.jsx)(Q,{children:s(`Open with a single click`)}),(0,N.jsx)(Sm,{})]}),(0,N.jsx)($,{children:s(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,N.jsx)(Xh,{$on:p?.openOnSingleClick??!1,disabled:!p,onClick:()=>void W({openOnSingleClick:!(p?.openOnSingleClick??!1)}),type:`button`,children:(0,N.jsx)(Zh,{})})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsxs)(Bh,{children:[(0,N.jsx)(Q,{children:s(`Confirm before deleting`)}),(0,N.jsx)(Sm,{})]}),(0,N.jsx)($,{children:s(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,N.jsx)(Xh,{$on:p?.confirmDelete??!1,disabled:!p,onClick:()=>void W({confirmDelete:!(p?.confirmDelete??!1)}),type:`button`,children:(0,N.jsx)(Zh,{})})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsxs)(Bh,{children:[(0,N.jsx)(Q,{children:s(`Play audio in video previews`)}),(0,N.jsx)(Sm,{})]}),(0,N.jsx)($,{children:s(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,N.jsx)(Xh,{$on:p?.previewVideoAudio??!1,disabled:!p,onClick:()=>void W({previewVideoAudio:!(p?.previewVideoAudio??!1)}),type:`button`,children:(0,N.jsx)(Zh,{})})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsxs)(Bh,{children:[(0,N.jsx)(Q,{children:s(`Autoplay video previews`)}),(0,N.jsx)(Sm,{})]}),(0,N.jsx)($,{children:s(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,N.jsx)(Xh,{$on:p?.previewVideoAutoplay??!1,disabled:!p,onClick:()=>void W({previewVideoAutoplay:!(p?.previewVideoAutoplay??!1)}),type:`button`,children:(0,N.jsx)(Zh,{})})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsxs)(Bh,{children:[(0,N.jsx)(Q,{children:s(`Preview panel under the list`)}),(0,N.jsx)(Sm,{})]}),(0,N.jsx)($,{children:s(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,N.jsx)(Xh,{$on:Pt.showImages??!0,onClick:()=>void W({defaultView:{...Pt,showImages:!(Pt.showImages??!0)}}),type:`button`,children:(0,N.jsx)(Zh,{})})]}),(0,N.jsx)(X,{children:(0,N.jsxs)(Z,{children:[(0,N.jsxs)(Bh,{children:[(0,N.jsx)(Q,{children:s(`Columns`)}),(0,N.jsx)(Sm,{})]}),(0,N.jsx)($,{children:s(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,N.jsx)(X,{children:(0,N.jsxs)(Og,{children:[kc.map(e=>(0,N.jsxs)(kg,{children:[(0,N.jsx)(`input`,{checked:(Pt.columns??[]).includes(e.id),onChange:()=>void _n(e.id),type:`checkbox`}),(0,N.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,N.jsxs)(kg,{children:[(0,N.jsx)(`input`,{checked:(Pt.columns??[]).includes(`linkTarget`),onChange:()=>void _n(`linkTarget`),type:`checkbox`}),(0,N.jsx)(`span`,{children:s(`Link target after the name`)})]})]})})]}),(0,N.jsxs)(Fg,{children:[s(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,N.jsx)(Sm,{}),` `,s(`Anything marked as global always applies to every folder.`)]})]}),(0,N.jsxs)(fh,{ref:Bt(`shortcuts`),children:[(0,N.jsx)(lh,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,N.jsxs)(mh,{children:[Hm.map(({id:e,label:t,note:n})=>(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(t)}),(0,N.jsx)($,{children:s(n)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(Ag,{$listening:ve===e,onClick:()=>R(e),type:`button`,children:ve===e?s(`Press a key…`):Jt(Cn[e])})})]},e)),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Reset`)}),(0,N.jsx)($,{children:s(`Back to the default combination for every action.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(jg,{onClick:()=>void W({shortcuts:{...Ut}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,N.jsxs)(fh,{ref:Bt(`memory`),children:[(0,N.jsx)(lh,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(Fh,{children:[(0,N.jsxs)(Ih,{children:[(0,N.jsx)(Q,{children:s(`Process memory`)}),(0,N.jsx)(Hh,{children:D?`${f(D.private)} · ${Ph(D.private,D.available)}`:`—`})]}),(0,N.jsx)(Lh,{children:(0,N.jsx)(Rh,{$ratio:D?D.private/Math.max(D.available,1):0,$tone:w(D?D.private/Math.max(D.available,1):0)})}),(0,N.jsx)($,{children:D?s(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:f(D.available),resident:f(D.workingSet)}):s(`Reading the current usage…`)})]}),(0,N.jsxs)(Fh,{children:[(0,N.jsxs)(Ih,{children:[(0,N.jsx)(Q,{children:s(`Managed heap`)}),(0,N.jsx)(Hh,{children:D?`${f(D.managed)} · ${Ph(D.managed,D.private)}`:`—`})]}),(0,N.jsx)(Lh,{children:(0,N.jsx)(Rh,{$ratio:D?D.managed/Math.max(D.private,1):0,$tone:`var(--accent-secondary)`})}),(0,N.jsx)($,{children:s(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,N.jsxs)(Fh,{children:[(0,N.jsxs)(Ih,{children:[(0,N.jsx)(Q,{children:s(`Native and runtime`)}),(0,N.jsx)(Hh,{children:D?`${f(Math.max(0,D.private-D.managed))} · ${Ph(Math.max(0,D.private-D.managed),D.private)}`:`—`})]}),(0,N.jsx)(Lh,{children:(0,N.jsx)(Rh,{$ratio:D?Math.max(0,D.private-D.managed)/Math.max(D.private,1):0,$tone:`var(--accent-primary)`})}),(0,N.jsx)($,{children:s(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Free memory`)}),(0,N.jsx)($,{children:s(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(jg,{onClick:()=>void ft().then(oe),type:`button`,children:s(`Trim now`)})})]})]})]}),(0,N.jsxs)(fh,{ref:Bt(`overview`),children:[(0,N.jsx)(lh,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,N.jsx)(mh,{children:(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Recent items`)}),(0,N.jsx)($,{children:s(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(Qh,{max:50,min:0,onChange:e=>void wn(Number(e.target.value)),type:`number`,value:p?.recentLimit??10})})]})})]}),(0,N.jsxs)(fh,{ref:Bt(`gallery`),children:[(0,N.jsx)(lh,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,N.jsxs)(mh,{children:[(p?.galleryRoots??[]).map(e=>(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:v(e)}),(0,N.jsx)($,{children:e})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(Mg,{onClick:()=>void kn((p?.galleryRoots??[]).filter(t=>t!==e)),title:s(`Stop scanning this folder`),type:`button`,children:(0,N.jsx)(yi,{size:12})})})]},e)),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Scan folders`)}),(0,N.jsx)($,{children:(p?.galleryRoots??[]).length===0?s(`Nothing added yet, so the gallery reads the Pictures folder.`):s(`Only these folders are scanned, three levels deep.`)})]}),(0,N.jsx)(zh,{children:(0,N.jsx)(jg,{onClick:()=>void An(),type:`button`,children:s(`Choose folder…`)})})]})]})]}),(0,N.jsxs)(fh,{ref:Bt(`icons`),children:[(0,N.jsx)(lh,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Use system file icons`)}),(0,N.jsx)($,{children:s(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,N.jsx)(Xh,{$on:p?.systemIcons??!1,disabled:!p,onClick:()=>void W({systemIcons:!p?.systemIcons}),type:`button`,children:(0,N.jsx)(Zh,{})})]}),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Use custom folder icons`)}),(0,N.jsx)($,{children:s(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,N.jsx)(Xh,{$on:p?.customFolderIcons??!1,disabled:!p,onClick:()=>void W({customFolderIcons:!p?.customFolderIcons}),type:`button`,children:(0,N.jsx)(Zh,{})})]})]})]}),(0,N.jsxs)(fh,{ref:Bt(`extension-icons`),children:[(0,N.jsx)(lh,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,N.jsxs)(mh,{children:[Object.entries(p?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:e}),(0,N.jsx)($,{children:nh(s,t)})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(rh,{source:t}),(0,N.jsx)(Mg,{onClick:()=>void Sn(e,null),title:s(`Remove this rule`),type:`button`,children:(0,N.jsx)(yi,{size:12})})]})]},e)),(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Add a rule`)}),(0,N.jsx)($,{children:s(`Extension and the icon to draw for it.`)})]}),(0,N.jsxs)(zh,{children:[(0,N.jsx)(Qh,{onChange:e=>S(e.target.value),placeholder:`.psd`,spellCheck:!1,value:x}),(0,N.jsxs)(rg,{children:[(0,N.jsx)(Mg,{onClick:()=>ie(e=>!e),title:s(`Choose the icon`),type:`button`,children:(0,N.jsx)(rh,{source:ee})}),ne&&(0,N.jsx)(yd,{allowDefault:!1,onClose:()=>ie(!1),onPick:e=>{C(e??`file`),ie(!1)},value:ee})]}),(0,N.jsx)(Mg,{onClick:()=>void jn(),title:s(`Add the rule`),type:`button`,children:(0,N.jsx)(si,{size:13})})]})]})]})]}),(0,N.jsxs)(fh,{ref:Bt(`folder-icons`),children:[(0,N.jsx)(lh,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Give a folder its own icon`)}),(0,N.jsx)($,{children:s(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,N.jsxs)(zh,{children:[_&&(0,N.jsx)(ih,{src:_.icon}),(0,N.jsx)(jg,{disabled:T,onClick:()=>void Mn(),type:`button`,children:s(T?`Choosing…`:`Choose folder and icon…`)})]})]}),_&&(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:v(_.folder)}),(0,N.jsx)($,{children:_.folder})]}),(0,N.jsx)(zh,{children:(0,N.jsxs)(Pg,{children:[(0,N.jsx)(vi,{size:11}),` `,s(`Saved`)]})})]})]})]}),(0,N.jsxs)(fh,{ref:Bt(`folder-index`),children:[(0,N.jsx)(lh,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(X,{children:[(0,N.jsxs)(Z,{children:[(0,N.jsx)(Q,{children:s(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,N.jsx)($,{children:s(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,N.jsx)(Xh,{$on:p?.writeDirectoryIndex??!0,disabled:!p,onClick:()=>void W({writeDirectoryIndex:!p?.writeDirectoryIndex}),type:`button`,children:(0,N.jsx)(Zh,{})})]}),(0,N.jsxs)(hh,{children:[(0,N.jsxs)(gh,{children:[(0,N.jsx)(Q,{children:s(`Directory index blacklist`)}),(0,N.jsx)($,{children:s(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,N.jsx)(_g,{children:(p?.directoryIndexBlacklist??[]).map(e=>(0,N.jsxs)(vg,{children:[(0,N.jsx)(yg,{"aria-label":s(`Directory index blacklist rule`),onBlur:$t,onChange:t=>Ne({from:e,value:t.target.value}),onFocus:()=>Ne({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),$t()):e.key===`Escape`&&Ne(null)},spellCheck:!1,value:Me?.from===e?Me.value:e}),(0,N.jsx)(bg,{onClick:()=>nn(e),title:s(`Remove`),type:`button`,children:(0,N.jsx)(yi,{size:10})})]},e))}),(0,N.jsxs)(Sg,{children:[(0,N.jsx)(Cg,{"aria-label":s(`Directory index blacklist rule`),onChange:e=>Le(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),en())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Ie}),(0,N.jsx)(Gh,{onClick:en,type:`button`,children:s(`Add the rule`)})]}),(0,N.jsxs)(xg,{children:[(0,N.jsx)(Gh,{onClick:rn,type:`button`,children:s(`Restore defaults`)}),(0,N.jsx)(Gh,{onClick:()=>void tn(),type:`button`,children:s(`Add folder…`)})]})]})]}),!(p?.writeDirectoryIndex??!0)&&(0,N.jsx)(Ig,{children:th(s,e?.platform)})]}),(0,N.jsxs)(fh,{ref:Bt(`indexing`),children:[(0,N.jsx)(lh,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,N.jsx)(eh,{})]}),(0,N.jsxs)(fh,{ref:Bt(`files`),children:[(0,N.jsx)(lh,{note:`What the listings include.`,title:`Files`}),(0,N.jsxs)(mh,{children:[(0,N.jsxs)(X,{children:[(0,N.jsx)(Q,{children:s(`Hidden items`)}),(0,N.jsx)(Hh,{children:$m(s,u?.showHidden)})]}),(0,N.jsxs)(X,{children:[(0,N.jsx)(Q,{children:s(`Protected operating system files`)}),(0,N.jsx)(Hh,{children:$m(s,u?.showSystem)})]})]}),(0,N.jsx)(Fg,{children:s(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,N.jsxs)(kh,{"aria-label":s(`Settings sections`),children:[(0,N.jsx)(Ah,{children:s(`Sections`)}),(0,N.jsx)(jh,{children:Ym.map(({id:e,label:t})=>(0,N.jsx)(Mh,{$active:vt===e,onClick:()=>Vt(e),type:`button`,children:(0,N.jsx)(`span`,{children:s(t)})},e))}),(0,N.jsx)(Nh,{children:s(`Changes are saved as you make them.`)})]})]})}function $m(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function eh(){let e=F(),[t,n]=(0,E.useState)(null);return(0,E.useEffect)(()=>{let e=!0,t=()=>qe().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,N.jsx)(Ig,{children:e(`No indexing tasks are running.`)}):(0,N.jsxs)(mh,{children:[(0,N.jsx)(X,{children:(0,N.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,N.jsx)(X,{children:(0,N.jsx)(Hh,{title:e,children:e})},e))]}):(0,N.jsx)(Ig,{children:e(`Index task information is unavailable.`)})}function th(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function nh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function rh({source:e}){let t=fn(e.startsWith(`file:`)?e.slice(5):null);return(0,N.jsx)(Ng,{children:t?(0,N.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,N.jsx)(Vs,{name:e,size:16})})}function ih({src:e}){let t=fn(e);return(0,N.jsx)(Ng,{children:t&&(0,N.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function ah({path:e,active:t,onSelect:n,onRemove:r}){let i=F(),a=re(e),o=_n(a?null:e),s=a?e:o,c=Du(e.split(/[?#]/)[0]);return(0,N.jsxs)(fg,{children:[(0,N.jsxs)(dg,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,N.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,N.jsx)(`img`,{alt:``,src:s})),c&&(0,N.jsx)(mg,{children:(0,N.jsx)(wi,{size:11})})]}),(0,N.jsx)(pg,{onClick:r,title:i(`Remove`),type:`button`,children:(0,N.jsx)(yi,{size:9})})]})}function oh({value:e,options:t,onChange:n,disabled:r}){let i=F(),[a,o]=(0,E.useState)(null),s=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)($h,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,N.jsx)(`span`,{children:sh(i,e)}),(0,N.jsx)(eg,{children:(0,N.jsx)(ui,{size:11})})]}),a&&(0,Aa.createPortal)((0,N.jsx)(tg,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,N.jsxs)(ng,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,N.jsx)(`span`,{children:sh(i,t)}),t===e&&(0,N.jsx)(vi,{size:11})]},t))}),document.body)]})}function sh(e,t){return t===qm?e(`System default`):Jm[t]??t}function ch({colors:e,current:t,onApply:n}){let r=F();if(e.length===0)return null;let[i,...a]=e;return(0,N.jsxs)(Eh,{children:[(0,N.jsxs)(Oh,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,N.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,N.jsx)(Dh,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,N.jsx)(vi,{size:9})},e))]})}function lh({title:e,note:t,global:n=!1}){let r=F();return(0,N.jsxs)(ph,{children:[(0,N.jsxs)(`h2`,{children:[r(e),n&&(0,N.jsx)(Sm,{})]}),(0,N.jsx)(`p`,{children:r(t)})]})}var uh=_.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,dh=_.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,fh=_.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,ph=_.header`
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
`,mh=_.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,hh=_.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,gh=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,_h=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,vh=_.button`
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
`,yh=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,bh=_.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,xh=_.button`
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
`,Sh=_.button`
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
`,Ch=_.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,wh=_.input`
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
`,Th=_.span`
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
`,Eh=_.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Dh=_.button`
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
`,Oh=_.button`
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
`,kh=_.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,Ah=_.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,jh=_.div`
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
`,Mh=_.button`
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
`,Nh=_.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function Ph(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var Fh=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Ih=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Lh=_.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Rh=_.div`
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
`,zh=_.span`
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
`,Lg=150,Rg=2500,zg=3,Bg=600;function Vg({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,onSearchMatches:s,onPick:c,onSelectionChange:l,onAddToTray:u,onAddFavorite:d,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,showDetails:g=!0,videoAudio:_=!1,videoAutoplay:v=!1}){let b=F(),x=wc(`gallery`),[S,ee]=(0,E.useState)([]),[C,te]=(0,E.useState)(0),[ne,re]=(0,E.useState)(!0),[w,ie]=(0,E.useState)(null),[T,ae]=(0,E.useState)(!1),[D,oe]=(0,E.useState)([]),[O,se]=(0,E.useState)(()=>{let e=Rn(`yafm.preview.width`,320);return e>=220?e:320}),k=(0,E.useRef)([]),ce=(0,E.useRef)(0),A=(0,E.useRef)(!1),j=(0,E.useRef)(!0),le=(0,E.useRef)(0),ue=(0,E.useRef)(null),M=(0,E.useRef)(0),de=(0,E.useCallback)(async e=>{let t=++le.current;re(!0),j.current=!0,ie(null);try{let n=await ze(0,Lg,e);if(t!==le.current)return;k.current=n.entries,ce.current=n.total,ee(n.entries),te(n.total)}catch(e){t===le.current&&ie(e instanceof Error?e.message:String(e))}finally{t===le.current&&(j.current=!1,re(!1))}},[]);(0,E.useEffect)(()=>{de(!1)},[de]);let fe=(0,E.useCallback)(async()=>{if(j.current||A.current||k.current.length>=ce.current)return;let e=le.current;A.current=!0;try{let t=k.current,n=ce.current;for(let r=0;r<zg&&t.length<n;r++){let r=await ze(t.length,Lg,!1);if(e!==le.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<Lg)break}if(e!==le.current)return;k.current=t,ce.current=n,(0,E.startTransition)(()=>{ee(t),te(n)})}catch{}finally{A.current=!1}},[]),pe=(0,E.useCallback)(e=>{M.current||=window.requestAnimationFrame(()=>{M.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<Rg&&fe()})},[fe]);(0,E.useEffect)(()=>{let e=ue.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&fe()},{root:e.parentElement,rootMargin:`${Rg}px 0px`});return t.observe(e),()=>t.disconnect()},[fe]),(0,E.useEffect)(()=>{if(S.length>=C)return;let e=window.setTimeout(()=>{let e=ue.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<Rg&&fe()},200);return()=>window.clearTimeout(e)},[S.length,C,fe]);let P=(0,E.useMemo)(()=>({path:``,parent:null,entries:S.map(Hg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[S]),me=(0,E.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),he=(0,E.useCallback)(e=>{c?c(e):B(e)},[c]),ge=(0,E.useCallback)(e=>{let t=Ug(e.modified);return{id:t,label:t}},[]),I=()=>{ae(!0),de(!0).finally(()=>ae(!1))},_e=S.length<C,L=(0,E.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:S.filter(e=>On(e.name,a)||On(e.path,a)),[S,a?.open,a?.query,a?.matchCase,a?.regex]),ve=(0,E.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:L[Math.min(a.index,Math.max(0,L.length-1))]?.path??null}:bn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,L]);(0,E.useEffect)(()=>{s?.(L.length)},[L.length,s]);let R=(0,E.useCallback)(e=>{oe(e),l?.(e)},[l]),ye=e=>{se(e),zn(`yafm.preview.width`,e)},z=D.length>0?S.find(e=>e.path===D[0])??null:null,be=z?.name.includes(`.`)?z.name.slice(z.name.lastIndexOf(`.`)+1).toUpperCase():`—`,xe=z&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(z.name)?b(`Video`):b(`Picture`),Se=z?z.path.slice(0,Math.max(z.path.lastIndexOf(`\\`),z.path.lastIndexOf(`/`))):``,Ce=z?{name:z.name,path:z.path,isDirectory:!1,size:z.size,modified:z.modified,fields:[{label:b(`Type`),value:xe},{label:b(`Extension`),value:be},{label:b(`Location`),value:Se},{label:b(`Full path`),value:z.path},{label:b(`Size`),value:f(z.size)},{label:b(`Modified`),value:y(z.modified)},{label:b(`Created`),value:`—`}]}:null;return(0,N.jsxs)(Wg,{children:[(0,N.jsxs)(qg,{children:[(0,N.jsxs)(Yg,{children:[(0,N.jsx)(`span`,{children:b(`Gallery`)}),(0,N.jsx)(Xg,{children:ne?b(`scanning…`):b(`{shown} of {total} pictures`,{shown:S.length,total:C})})]}),(0,N.jsxs)(Jg,{children:[(0,N.jsx)(Zg,{onClick:I,title:b(`Scan the folders again`),type:`button`,children:(0,N.jsx)(Qg,{$spinning:T,children:(0,N.jsx)(oi,{size:14})})}),x.available&&(0,N.jsx)(Zg,{onClick:e=>x.open(e.clientX,e.clientY),title:b(`Selection menu`),type:`button`,children:(0,N.jsx)(la,{size:14})})]})]}),w&&(0,N.jsx)(e_,{children:w}),!w&&!ne&&C===0&&(0,N.jsx)(e_,{children:b(`No pictures found.`)}),!w&&(ne||C>0)&&(0,N.jsxs)(Gg,{children:[(0,N.jsx)(Kg,{children:(0,N.jsx)(Rc,{confirmDelete:n,find:ve,listing:ne&&S.length===0?null:P,loading:ne,error:null,view:me,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:R,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:he,onOpenFile:he,onRefresh:I,onAddToTray:u,onAddFavorite:d,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,groupOf:ge,onGridScroll:pe,gridFooter:(0,N.jsx)($g,{$space:_e?Bg:1,ref:ue}),allowBackgroundMenu:!1})}),g&&(0,N.jsx)(Ko,{emptyNote:b(`Nothing selected.`),info:Ce,onWidth:ye,selectionNote:D.length>1?o(b,D.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:_,videoAutoplay:v,width:O})]})]})}function Hg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function Ug(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(x(),{weekday:`long`}):t.toLocaleDateString(x(),{year:`numeric`,month:`long`,day:`numeric`})}var Wg=_.div`
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
`;function t_({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:u=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,E.useState)([]),_=F(),[y,b]=(0,E.useState)(null),x=J();(0,E.useEffect)(()=>{Ye().then(e=>{b(e),g(xs(e).filter(e=>e.pinned))},()=>{b(null),g([])})},[c]),(0,E.useEffect)(()=>{if(!M.available)return;let e=h.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return M.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>M.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[h,s]);let S=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:y?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??y?.placeIcons?.[n]??null}}),ee=o===`files`;return(0,N.jsxs)(s_,{children:[(0,N.jsxs)(c_,{children:[!u.includes(`home`)&&(0,N.jsxs)(p_,{$active:o===`home`,onClick:e=>m(`home`,Kt(e)),title:_(`Overview`),type:`button`,children:[(0,N.jsx)(Fi,{}),(0,N.jsx)(h_,{children:_(`Overview`)})]}),!u.includes(`recycle`)&&(0,N.jsxs)(p_,{$active:o===`recycle`,onClick:e=>m(`recycle`,Kt(e)),title:_(`Recycle Bin`),type:`button`,children:[(0,N.jsx)(_i,{}),(0,N.jsx)(h_,{children:_(`Recycle Bin`)})]}),!u.includes(`gallery`)&&(0,N.jsxs)(p_,{$active:o===`gallery`,onClick:e=>m(`gallery`,Kt(e)),title:_(`Gallery`),type:`button`,children:[(0,N.jsx)(Ci,{}),(0,N.jsx)(h_,{children:_(`Gallery`)})]})]}),h.map(e=>(0,N.jsxs)(u_,{children:[(0,N.jsxs)(p_,{as:`div`,$active:!1,children:[(0,N.jsx)(m_,{children:(0,N.jsx)(Cs,{panel:e,size:16})}),(0,N.jsx)(h_,{children:_(e.title)})]}),(0,N.jsx)(d_,{children:(0,N.jsxs)(f_,{children:[e.kind===`quick`&&S(e).map(e=>(0,N.jsxs)(p_,{$active:ee&&t(a,e.path),onClick:t=>p(e.path,Kt(t)),title:e.path,type:`button`,children:[(0,N.jsx)(ws,{place:e}),(0,N.jsx)(h_,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let n=In(x,e.path);return(0,N.jsxs)(p_,{$active:ee&&t(a,e.path),onClick:t=>e.isDirectory?p(e.path,Kt(t)):void B(e.path),title:e.path,type:`button`,children:[n&&x.useIcons?(0,N.jsx)(ws,{place:n}):(0,N.jsx)(Hs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,N.jsx)(h_,{children:n?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,N.jsx)(i_,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,N.jsxs)(p_,{$active:ee&&t(a,e.name),onClick:t=>p(e.name,Kt(t)),title:e.name,type:`button`,children:[(0,N.jsx)(ri,{}),(0,N.jsxs)(h_,{children:[d(e),(0,N.jsxs)(g_,{children:[f(e.freeSpace),` free`]}),(0,N.jsx)(__,{children:(0,N.jsx)(v_,{$used:n,$tone:w(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,N.jsx)(a_,{onNavigate:p,path:e.path||s})]})})]},e.id)),!u.includes(`settings`)&&(0,N.jsx)(l_,{children:(0,N.jsxs)(p_,{$active:o===`settings`,onClick:e=>m(`settings`,Kt(e)),title:_(`Settings`),type:`button`,children:[(0,N.jsx)(di,{}),(0,N.jsx)(h_,{children:_(`Settings`)})]})})]})}var n_=10,r_=40;function i_({historyVersion:e=0,onNavigate:t}){let n=F(),[r,i]=(0,E.useState)(null),a=J();return(0,E.useEffect)(()=>{Ve().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=In(a,e.path);return(0,N.jsxs)(p_,{$active:!1,onClick:n=>t(e.path,Kt(n)),title:o(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,N.jsx)(ws,{place:r}):(0,N.jsx)(Hs,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,N.jsx)(h_,{children:r?.name||e.name})]},e.path)})}function a_({path:e,onNavigate:n}){let[r,i]=(0,E.useState)(null);(0,E.useEffect)(()=>{e&&(i(null),Ce(e,!1).then(i,()=>i(null)))},[e]),(0,E.useEffect)(()=>{if(e&&M.available)return M.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Ce(e,!1).then(i,()=>void 0)})},[e]);let a=r?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,n_),s=a.filter(e=>!e.isDirectory).slice(0,r_);return(0,N.jsxs)(N.Fragment,{children:[o.map(e=>(0,N.jsx)(o_,{entry:e,onNavigate:n},e.fullPath)),s.map(e=>(0,N.jsx)(o_,{entry:e,onNavigate:n},e.fullPath))]})}function o_({entry:e,onNavigate:t}){let n=J(),r=In(n,e.fullPath);return(0,N.jsxs)(p_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Kt(n)):void B(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,N.jsx)(ws,{place:r}):(0,N.jsx)(Hs,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,N.jsx)(h_,{children:r?.name||e.name})]})}var s_=_.aside`
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
`;function b_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=F(),a=(0,E.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,E.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,N.jsxs)(S_,{ref:a,children:[(0,N.jsxs)(C_,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,N.jsx)(gi,{size:13}),c>0&&(0,N.jsx)(y_,{children:c>9?`9+`:c})]}),n&&(0,N.jsxs)(w_,{children:[(0,N.jsxs)(T_,{children:[(0,N.jsx)(E_,{children:i(`Status center`)}),(0,N.jsxs)(D_,{children:[(0,N.jsx)(O_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,N.jsx)(k_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,N.jsx)(yi,{size:10})})]})]}),e.length===0?(0,N.jsx)(j_,{children:i(`No operations yet.`)}):(0,N.jsx)(A_,{children:e.map(e=>(0,N.jsx)(x_,{task:e},e.id))})]})]})}function x_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,N.jsxs)(M_,{children:[(0,N.jsxs)(N_,{children:[(0,N.jsx)(P_,{$state:e.state,children:e.state===`done`?(0,N.jsx)(vi,{size:10}):e.state===`failed`?(0,N.jsx)(yi,{size:10}):(0,N.jsx)(F_,{})}),(0,N.jsx)(I_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,N.jsxs)(L_,{children:[f(e.bytesDone),` / `,f(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,N.jsxs)(L_,{children:[e.done,` / `,e.total]})]}),i&&(0,N.jsx)(R_,{children:(0,N.jsx)(z_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,N.jsx)(B_,{children:e.error})]})}var S_=_.div`
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
    ${ja}
    ${Wa}
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

    ${Ga}
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
`;async function V_(){return M.available?(await M.request(`fs.history.list`)).entries:[]}async function H_(e){return M.available?(await M.request(`fs.history.undoTo`,{id:e})).ok:!1}function U_(){let e=F(),[t,n]=(0,E.useState)(!1),[r,i]=(0,E.useState)([]),[a,o]=(0,E.useState)(!1),s=(0,E.useRef)(null),c=()=>void V_().then(i,()=>i([]));(0,E.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await H_(e),c()}finally{o(!1)}};return(0,N.jsxs)(K_,{ref:s,children:[(0,N.jsx)(q_,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,N.jsx)(hi,{size:14})}),t&&(0,N.jsxs)(J_,{children:[(0,N.jsxs)(Y_,{children:[(0,N.jsx)(X_,{children:e(`History`)}),(0,N.jsx)(Z_,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,N.jsx)(yi,{size:10})})]}),r.length===0?(0,N.jsx)(ov,{children:e(`No operations yet.`)}):(0,N.jsx)(Q_,{children:r.map(t=>(0,N.jsxs)($_,{children:[(0,N.jsxs)(ev,{children:[(0,N.jsxs)(tv,{children:[(0,N.jsx)(G_,{label:t.label}),W_(e,t.label)]}),(0,N.jsx)(nv,{children:S(t.at)})]}),t.paths.length>0&&(0,N.jsxs)(rv,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,N.jsx)(iv,{children:(0,N.jsx)(av,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function W_(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);if(t===`Paste text`)return e(`Paste text`);if(t===`Paste image`)return e(`Paste image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function G_({label:e}){return e.startsWith(`Delete`)?(0,N.jsx)(_i,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,N.jsx)(na,{size:13}):e.startsWith(`Rename`)?(0,N.jsx)(Ii,{size:13}):e.startsWith(`Compress`)?(0,N.jsx)(Ei,{size:13}):e.startsWith(`New`)?(0,N.jsx)(si,{size:13}):(0,N.jsx)(li,{size:13})}var K_=_.div`
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
    ${ja}
    ${Wa}
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
`;function sv({currentFolder:e}){let n=F(),[r,i]=(0,E.useState)(!1),[a,o]=(0,E.useState)(null),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!r)return;let e=()=>void Cd().then(o,()=>void 0);e();let t=window.setInterval(e,2500),n=e=>{l.current?.contains(e.target)||i(!1)};return window.addEventListener(`pointerdown`,n),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,n)}},[r]),(0,E.useEffect)(()=>{let e=()=>void Cd().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(n=>t(n.path,e))??!1;return(0,N.jsxs)(cv,{ref:l,children:[(0,N.jsxs)(lv,{$active:r,onClick:()=>i(e=>!e),title:n(`Share folders`),type:`button`,children:[(0,N.jsx)(Xi,{size:15}),a&&a.shares.length>0&&(0,N.jsx)(y_,{children:a.shares.length>9?`9+`:a.shares.length})]}),r&&(0,N.jsxs)(uv,{children:[(0,N.jsxs)(dv,{children:[(0,N.jsx)(fv,{children:n(`Share`)}),(0,N.jsx)(pv,{onClick:()=>i(!1),title:n(`Close`),type:`button`,children:(0,N.jsx)(yi,{size:10})})]}),(0,N.jsxs)(mv,{children:[(0,N.jsxs)(hv,{children:[(0,N.jsx)(bi,{size:15}),(0,N.jsxs)(`span`,{children:[(0,N.jsx)(`strong`,{children:a?.deviceName||n(`This device`)}),(0,N.jsx)(gv,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,N.jsx)(_v,{children:n(`No folders are shared yet.`)}),a?.shares.map(e=>(0,N.jsxs)(vv,{children:[(0,N.jsxs)(yv,{children:[(0,N.jsx)(bv,{title:e.path,children:e.name}),(0,N.jsx)(Sv,{disabled:s,onClick:()=>void u(()=>Td(e.id)),title:n(`Stop sharing`),type:`button`,children:(0,N.jsx)(yi,{size:10})})]}),(0,N.jsx)(xv,{title:e.path,children:e.path}),(0,N.jsxs)(Cv,{children:[(0,N.jsxs)(wv,{$active:e.mode===`client`,onClick:()=>void u(()=>Ed(e.id,`client`)),title:n(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,N.jsx)(bi,{size:11}),n(`App`)]}),(0,N.jsxs)(wv,{$active:e.mode===`web`,onClick:()=>void u(()=>Ed(e.id,`web`)),title:n(`Any device with a browser can open this folder.`),type:`button`,children:[(0,N.jsx)(Qi,{size:11}),n(`Web`)]})]})]},e.id)),(0,N.jsxs)(Tv,{disabled:s||e.length===0||d,onClick:()=>void u(()=>wd(e,`client`)),title:d?n(`This folder is already shared.`):e,type:`button`,children:[(0,N.jsx)(si,{size:12}),n(`Share this folder`)]}),a?.webRunning&&(0,N.jsxs)(Ev,{children:[(0,N.jsxs)(Dv,{children:[(0,N.jsx)(Qi,{size:12}),n(`Browser access`)]}),a.urls.map(e=>(0,N.jsx)(Ov,{onClick:()=>void ut(e),type:`button`,children:e},e)),(0,N.jsx)(gv,{children:n(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var cv=_.div`
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
    ${ja}
    ${Wa}
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
`;function kv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=F(),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,E.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=kc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,N.jsxs)(Av,{ref:l,children:[(0,N.jsx)(jv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,N.jsx)(mi,{size:14}):(0,N.jsx)(pi,{size:14})}),s&&(0,N.jsxs)(Mv,{children:[(0,N.jsx)(Nv,{children:o(`View`)}),(0,N.jsxs)(Fv,{children:[(0,N.jsxs)(Iv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,N.jsx)(pi,{size:12}),` `,o(`List`)]}),(0,N.jsxs)(Iv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,N.jsx)(mi,{size:12}),` `,o(`Grid`)]})]}),(0,N.jsx)(Nv,{children:o(`List icon size`)}),(0,N.jsxs)(Lv,{children:[(0,N.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,N.jsxs)(Rv,{children:[e.iconSize,`px`]})]}),(0,N.jsx)(Nv,{children:o(`Grid size`)}),(0,N.jsxs)(Lv,{children:[(0,N.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,N.jsxs)(Rv,{children:[e.gridSize,`px`]})]}),(0,N.jsxs)(Nv,{children:[o(`Columns`),(0,N.jsx)(Sm,{}),(0,N.jsx)(Pv,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`Reset column widths`),type:`button`,children:o(`Reset widths`)})]}),kc.map(e=>(0,N.jsxs)(zv,{children:[(0,N.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,N.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,N.jsxs)(zv,{children:[(0,N.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,N.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,N.jsxs)(Nv,{children:[o(`Preview panel`),(0,N.jsx)(Sm,{})]}),(0,N.jsxs)(zv,{children:[(0,N.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,N.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var Av=_.div`
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
    ${ja}
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
`,Bv=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,N.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Vv=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,N.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Hv=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,N.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Uv=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,N.jsx)(`path`,{d:`M2 5h6`})}),Wv=e=>(0,N.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,N.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Gv=e=>(0,N.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,N.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,N.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Kv({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:ee,onToggleDetails:C,shortcuts:te,currentFolder:ne}){let re=F(),w=ge(),ie=I(),[T,ae]=(0,E.useState)({left:!1,right:!1}),[D,oe]=(0,E.useState)(null),[O,se]=(0,E.useState)(null),k=(0,E.useRef)(null),ce=(0,E.useRef)(null),A=(0,E.useRef)(null),j=(0,E.useCallback)(()=>{let e=ce.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ae(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,E.useEffect)(()=>{j();let e=ce.current;if(!e)return;let t=new ResizeObserver(j);return t.observe(e),()=>t.disconnect()},[j,e.length]),(0,E.useEffect)(()=>()=>{k.current&&window.clearTimeout(k.current.timer)},[]),(0,E.useEffect)(()=>{A.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let le=e=>ce.current?.scrollBy({left:e,behavior:`smooth`}),ue=()=>{k.current&&window.clearTimeout(k.current.timer),k.current=null,se(null)};return(0,N.jsxs)(Xv,{children:[(0,N.jsx)(Zv,{children:(0,N.jsx)(bi,{size:19})}),(0,N.jsxs)(Qv,{children:[T.left&&(0,N.jsx)(ey,{onClick:()=>le(-180),title:re(`Scroll tabs left`),type:`button`,children:(0,N.jsx)(Bv,{})}),(0,N.jsx)($v,{onScroll:j,onWheel:e=>{let t=ce.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:ce,children:e.map(e=>(0,N.jsxs)(ty,{$active:e.id===t,$dragging:D===e.id,$dropTarget:O===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Gs(t.dataTransfer)||!qv(e)||(t.preventDefault(),k.current?.id===e.id))return;ue(),se(e.id);let r=window.setTimeout(()=>{n(e.id),k.current=null},500);k.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(k.current?.id===e.id||O===e.id)&&ue()},onDragEnd:()=>{oe(null),ue()},onDragOver:t=>{(D||Gs(t.dataTransfer)&&qv(e))&&(t.preventDefault(),Gs(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>oe(e.id),onDrop:t=>{if(t.preventDefault(),D)a(D,e.id);else if(qv(e)&&Gs(t.dataTransfer)){let{paths:r,move:i}=Ks(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}oe(null),ue()},onClick:()=>n(e.id),ref:e.id===t?A:void 0,title:e.path||e.title,type:`button`,children:[(0,N.jsx)(Jv,{tab:e}),(0,N.jsx)(ny,{children:e.title}),e.partner&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(ry,{children:`|`}),(0,N.jsx)(Yv,{place:e.partner.place}),(0,N.jsx)(ny,{children:e.partner.title})]}),(0,N.jsx)(iy,{"data-shortcut":Jt(te.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:re(`Close tab`),children:(0,N.jsx)(Hv,{})})]},e.id))}),T.right&&(0,N.jsx)(ey,{onClick:()=>le(180),title:re(`Scroll tabs right`),type:`button`,children:(0,N.jsx)(Vv,{})}),(0,N.jsx)(ay,{"data-shortcut":Jt(te.newTab),onClick:i,title:re(`New tab`),type:`button`,children:(0,N.jsx)(si,{size:13})})]}),(0,N.jsx)(oy,{...ie}),(0,N.jsxs)(sy,{children:[(0,N.jsx)(ly,{$active:y,"data-shortcut":Jt(te.splitView),disabled:!b,onClick:x,title:re(y?`Close split view`:`Split view`),type:`button`,children:(0,N.jsx)(sa,{size:15})}),(0,N.jsx)(ly,{$active:S,disabled:!ee,onClick:C,title:re(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,N.jsx)(ca,{size:15})}),(0,N.jsxs)(cy,{$active:_,onClick:v,title:re(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,N.jsx)(Zi,{size:14}),g>0&&(0,N.jsx)(y_,{children:g>9?`9+`:g})]}),(0,N.jsx)(U_,{}),(0,N.jsx)(sv,{currentFolder:ne}),(0,N.jsx)(b_,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,N.jsx)(kv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,N.jsx)(uy,{onClick:w.minimize,title:re(`Minimize`),type:`button`,children:(0,N.jsx)(Uv,{})}),(0,N.jsx)(uy,{onClick:w.toggleMaximize,title:w.maximized?re(`Restore`):re(`Maximize`),type:`button`,children:w.maximized?(0,N.jsx)(Gv,{}):(0,N.jsx)(Wv,{})}),(0,N.jsx)(dy,{onClick:w.close,title:re(`Close`),type:`button`,children:(0,N.jsx)(Hv,{})})]})]})}function qv(e){return e.kind===`files`&&(!p(e.path)||T(e.path))}function Jv({tab:e}){switch(e.kind){case`home`:return(0,N.jsx)(ei,{size:13});case`settings`:return(0,N.jsx)(di,{size:13});case`recycle`:return(0,N.jsx)(_i,{size:13});default:return e.archive?(0,N.jsx)(Ei,{size:13}):(0,N.jsx)(Yv,{place:e.place})}}function Yv({place:e}){return e?(0,N.jsx)(ws,{place:e,size:13}):(0,N.jsx)(ti,{size:13})}var Xv=_.header`
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
`;function fy(){let[e,t]=(0,E.useState)(null),n=(0,E.useRef)(null),r=(0,E.useRef)(void 0);return(0,E.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Aa.createPortal)((0,N.jsx)(py,{tooltip:e}),document.body):null}function py({tooltip:e}){let t=(0,E.useRef)(null),[n,r]=(0,E.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,E.useState)(()=>e.bottom+6);return(0,E.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,N.jsxs)(my,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,N.jsx)(hy,{children:e.text}),e.shortcut&&(0,N.jsx)(gy,{children:e.shortcut})]})}var my=_.div`
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
    ${Ga}
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
`,_y={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function vy({deviceName:e,code:t,onAccept:n,onReject:r}){let i=F(),a=(0,E.useRef)(null);return(0,E.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Aa.createPortal)((0,N.jsx)(yy,{children:(0,N.jsxs)(by,{role:`alertdialog`,"aria-modal":`true`,children:[(0,N.jsxs)(xy,{children:[(0,N.jsx)(Xi,{size:15}),i(`Pair for sharing`)]}),(0,N.jsx)(Sy,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,N.jsx)(Cy,{children:t}),(0,N.jsx)(wy,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,N.jsxs)(Ty,{children:[(0,N.jsx)(Ey,{onClick:r,type:`button`,children:i(`Reject`)}),(0,N.jsx)(Dy,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var yy=_.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Ga}
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
    ${Ba}
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
`,Oy=0,ky=new Set;function Ay(e){ky.add(e),M.send({type:`app.navigate.done`,payload:{path:e}})}var jy=20,My=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function Ny(e){return e.history[e.index]??_p(`home`)}function Py(e){return vp(Ny(e))??`files`}function Fy(e){let t=Ny(e);return vp(t)?``:e.listing?.path||t}function Iy(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Py(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Ly(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Ry(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||be.iconSize,gridSize:e.view?.gridSize||t.gridSize||be.gridSize,sort:e.view?.sort??be.sort,sortDescending:e.view?.sortDescending??be.sortDescending,columns:t.columns??xe.columns??[]}}function zy(e=_p(`home`)){return Oy+=1,{id:`tab-${Oy}`,listing:null,loading:!vp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function By(e){return e instanceof Error?e.message:String(e)}function Vy(e){let t=Nd(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return Pd(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Hy(e){let t=v(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Uy(e){return p(e)?$t(e):void 0}function Wy(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:f(n)})}function Gy(){let e=F(),[n,r]=(0,E.useState)(()=>[zy()]),[i,a]=(0,E.useState)(()=>n[0].id),[o,s]=(0,E.useState)(null),[d,f]=(0,E.useState)(()=>{let e=Rn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[m,h]=(0,E.useState)([]),[g,_]=(0,E.useState)([]),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(null),[te,ne]=(0,E.useState)(null),re=_e(),[w,ie]=(0,E.useState)(yn),[ae,D]=(0,E.useState)(0),[oe,O]=(0,E.useState)(0),[se,k]=(0,E.useState)(yn),[ce,A]=(0,E.useState)(0),[j,le]=(0,E.useState)(0),[ue,de]=(0,E.useState)(0),[fe,pe]=(0,E.useState)(0),P=(0,E.useRef)(fe);P.current=fe;let[me,he]=(0,E.useState)([]),[ge,I]=(0,E.useState)(10),[L,R]=(0,E.useState)(null),z=(0,E.useMemo)(()=>(L?.favorites??[]).map(e=>l(e.path)),[L?.favorites]),[Se,V]=(0,E.useState)(0),[H,Me]=(0,E.useState)(Ut),[Ne,Pe]=(0,E.useState)(0),[Fe,Ie]=(0,E.useState)(0),[Le,Re]=(0,E.useState)(0),[ze,Ve]=(0,E.useState)(!0),[Ue,We]=(0,E.useState)(()=>{let e=Rn(`yafm.preview.width`,320);return e>=220?e:320}),[Ge,qe]=(0,E.useState)(null),[Je,Xe]=(0,E.useState)(null),[Ze,Qe]=(0,E.useState)(`primary`),[$e,et]=(0,E.useState)(null),[tt,nt]=(0,E.useState)(null),[rt,ot]=(0,E.useState)(null),[st,U]=(0,E.useState)(null),[ut,dt]=(0,E.useState)({primary:0,secondary:0}),[ft,pt]=(0,E.useState)({primary:null,secondary:null}),[mt,ht]=(0,E.useState)(null),[gt,_t]=(0,E.useState)([]),[yt,Tt]=(0,E.useState)(!1),Dt=(0,E.useRef)([]),Ot=(0,E.useRef)([]),[kt,jt]=(0,E.useState)([]),[Mt,Nt]=(0,E.useState)(!1),Pt=(0,E.useMemo)(()=>Mt?new Set(kt.map(e=>e.path)):new Set,[kt,Mt]),[Ft,Rt]=(0,E.useState)(!1),[zt,Bt]=(0,E.useState)([]),[Wt,Yt]=(0,E.useState)(null),Zt=(0,E.useRef)(0),[Qt,rn]=(0,E.useState)(()=>{let e=Bn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Ly({x:e.x,y:e.y}):Ly({x:Math.max(20,window.innerWidth-340),y:110})}),an=(0,E.useCallback)(()=>{rn(e=>Ly(e)),Rt(!0)},[]),G=n.find(e=>e.id===i)??n[0],K=Py(G),cn=Ny(G),ln=Fy(G),q=K===`files`?G.listing?.parent??Vy(ln):null,un=G.splitWith?n.find(e=>e.id===G.splitWith):void 0,dn=K===`files`&&un!==void 0,fn=un?Fy(un):``,pn=un?un.listing?.parent??Vy(fn):null,mn=dn&&un&&Ze===`secondary`?un:G,hn=L?.defaultView??xe,gn=Ry(mn,hn);(0,E.useEffect)(()=>{ee(L?.accentColor,L?.secondaryColor)},[L?.accentColor,L?.secondaryColor]),(0,E.useEffect)(()=>{Em(L?.fonts)},[L?.fonts]),(0,E.useEffect)(()=>{C(L?.timeFormat,L?.timeFormatPattern)},[L?.timeFormat,L?.timeFormatPattern]),(0,E.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!L?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[L?.backgroundSource]),(0,E.useEffect)(()=>(ye(e=>new Promise(t=>{Yt({id:++Zt.current,prompt:e,resolve:t})})),()=>ye(null)),[]),(0,E.useEffect)(()=>{Qe(`primary`)},[i]),(0,E.useEffect)(()=>{k(yn),le(0),de(0)},[K]),(0,E.useEffect)(()=>{le(0)},[se.query,se.matchCase,se.regex]),(0,E.useEffect)(()=>{le(e=>ue===0?0:Math.min(e,ue-1))},[ue]);let _n=gn.columns.includes(`linkCount`),vn=(0,E.useMemo)(()=>{let e={},t=xs(L),n={};for(let[e,t]of Object.entries(L?.placeNames??{}))n[l(e)]=t;for(let t of m)e[l(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=l(t),i=m.find(e=>l(e.path)===r);e[r]={name:n[r]??i?.name??(v(t)||t),path:t,kind:`folder`,icon:i?.icon??L?.placeIcons?.[t]??null}}return e},[m,L]),bn=(0,E.useMemo)(()=>({places:vn,useIcons:L?.systemIcons===!1}),[vn,L?.systemIcons]),xn=L?.defaultView?.showImages??!0,Sn=L?.defaultView?.imageStripHeight??xe.imageStripHeight,Cn=K===`home`?(0,N.jsx)(Fi,{size:13}):K===`settings`?(0,N.jsx)(di,{size:13}):K===`recycle`?(0,N.jsx)(_i,{size:13}):K===`gallery`?(0,N.jsx)(Ci,{size:13}):void 0,wn=w.open&&w.query.length>0,Tn=(0,E.useMemo)(()=>wn&&mn.listing?mn.listing.entries.filter(e=>On(e.isDirectory?Ln(bn,e.fullPath,e.name):e.name,w)).map(e=>e.fullPath):[],[wn,w,mn.listing,bn]);(0,E.useEffect)(()=>{D(0)},[w.query,w.matchCase,w.regex,mn.listing?.path]);let En=Tn.length===0?-1:Math.min(ae,Tn.length-1),Dn=(0,E.useCallback)(()=>{ie(e=>({...e,open:!1,query:``})),D(0)},[]),kn=(0,E.useCallback)(()=>{ie(e=>({...e,open:!0})),O(e=>e+1)},[]),An=(0,E.useCallback)(()=>{k(e=>({...e,open:!0})),A(e=>e+1)},[]),jn=(0,E.useCallback)(()=>{k(yn),le(0),de(0)},[]),Mn=(0,E.useCallback)(e=>{le(t=>ue===0?0:(Math.min(t,ue-1)+e+ue)%ue)},[ue]),Nn=(0,E.useCallback)(e=>{ie(t=>({...t,open:!0,query:t.open?t.query+e:e})),O(e=>e+1)},[]),Pn=(0,E.useCallback)(e=>{D(t=>Tn.length===0?0:(Math.min(t,Tn.length-1)+e+Tn.length)%Tn.length)},[Tn.length]),J=(0,E.useRef)({tabs:n,activeId:i,activePane:Ze});J.current={tabs:n,activeId:i,activePane:Ze};let Hn=(0,E.useRef)(L);Hn.current=L;let Un=(0,E.useRef)(!1),Wn=(0,E.useRef)([]),Gn=(0,E.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Kn=(0,E.useRef)(new Map),qn=(0,E.useCallback)(e=>{let t=(Kn.current.get(e)??0)+1;return Kn.current.set(e,t),()=>Kn.current.get(e)===t},[]),Jn=(0,E.useCallback)((e,t)=>{M.available&&t&&e===Iy(J.current)&&M.send({type:`fs.focus`,payload:{path:t}})},[]),Yn=(0,E.useCallback)(async(e,t,n)=>{if(!(t&&Md(t)))try{let r=await ke(t,_n);if(!n()||!r.listing)return;Gn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[_n,Gn]),Xn=(0,E.useCallback)(async(e,n,r=!1)=>{let i=qn(e);Dn(),Jn(e,n);let a=!r||!J.current.tabs.find(t=>t.id===e)?.listing,o=!r&&n!==void 0;Gn(e,e=>{if(!o)return{listing:r?e.listing:null,loading:!0,error:null,fresh:r&&e.fresh};let i=e.history[e.index],a=i!==void 0&&t(i,n);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),n],index:a?e.index:e.index+1}});try{a&&Yn(e,n,i);let t=n&&Md(n)?await Fd(n):await Ce(n,!0,_n,P.current,n?Uy(n):void 0);if(!i())return;Gn(e,e=>({listing:t,view:t.view??null,loading:!1,fresh:!1,history:o?e.history.map((n,r)=>r===e.index?t.path:n):e.history,index:e.index})),!r&&!Md(t.path)&&He(t.path).then(()=>V(e=>e+1))}catch(t){if(!i())return;let a=J.current.tabs.find(t=>t.id===e),o=n&&n.length>0?n:a?Fy(a):``,s=Vy(o),c=By(t);if(o&&nn(c)){let t=u(o),a=await ba(t,!!$t(t));if(a){en(t,a),i()&&Xn(e,n,r);return}}Gn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...r?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[qn,_n,Gn,Jn,Dn,Yn]),Zn=(0,E.useCallback)((e,t)=>{let n=yp(t);n&&(vp(n)?(Dn(),qn(e),Gn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Xn(e,n))},[qn,Xn,Gn,Dn]),Qn=(0,E.useCallback)(async(e,t,n)=>{if(Dn(),vp(t)){qn(e),Gn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=qn(e);Jn(e,t),Gn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Md(t)||Yn(e,t,r);let n=Md(t)?await Fd(t):await Ce(t,!0,_n,P.current,Uy(t));if(!r())return;Gn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(nn(By(i))){let i=u(t),a=await ba(i,!!$t(i));if(a){en(i,a),r()&&Qn(e,t,n);return}}Gn(e,()=>({listing:{path:t,parent:Vy(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:By(i)}))}},[qn,_n,Gn,Jn,Dn,Yn]),$n=(0,E.useCallback)((e,t=!0)=>{let n=zy(e??_p(`home`));return r(e=>[...e,n]),t&&a(n.id),e&&!vp(e)&&Xn(n.id,e),n.id},[Xn]),er=(0,E.useCallback)(e=>{for(let n of J.current.tabs)Py(n)===`files`&&t(Fy(n),e)&&Xn(n.id,e,!0)},[Xn]),tr=(0,E.useCallback)((e,n)=>{let r=v(n);for(let i of J.current.tabs)i.listing?.entries.some(n=>t(n.fullPath,e))&&Gn(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>t(i.fullPath,e)?{...i,name:r,fullPath:n}:i);return{listing:{...a,entries:o}}})},[Gn]),nr=(0,E.useRef)([]);(0,E.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&p(n)&&e.add(l(u(n)))}let t=nr.current.filter(t=>!e.has(t));nr.current=[...e],t.length>0&&Ee(t)},[n]);let rr=(0,E.useCallback)((e,t=!1)=>{t?$n(_p(e)):Zn(J.current.activeId,_p(e))},[$n,Zn]),ir=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=J.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(Ot.current.push(Ny(i)),Ot.current.length>jy&&Ot.current.shift()),o.length===0){let e=zy();r([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);r(o),n===e&&a(o[Math.min(s,o.length-1)].id)},[]),ar=(0,E.useCallback)(()=>{let e=Ot.current.pop();if(!e)return;let t={...zy(e),fresh:!1};r(e=>[...e,t]),a(t.id),Py(t)===`files`&&Xn(t.id,Fy(t))},[Xn]),or=(0,E.useCallback)((e,t=!1)=>{t?$n(e):Zn(Iy(J.current),e??_p(`home`))},[Zn,$n]),sr=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=J.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),cr=(0,E.useCallback)(()=>{let{tabs:e,activeId:t}=J.current,n=e.find(e=>e.id===t);if(!n||Py(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),Gn(t,()=>({splitWith:void 0})),Qe(`primary`);return}let a=Fy(n),o={...zy(a),hidden:!0};r(e=>[...e,o]),Gn(t,()=>({splitWith:o.id})),Xn(o.id,a),Qe(`primary`)},[Xn,Gn]),lr=(0,E.useCallback)(e=>{We(e),zn(`yafm.preview.width`,e)},[]),ur=dn?Ze===`secondary`?Je??Ge:Ge??Je:Ge,dr=(0,E.useRef)(null),fr=e=>{e.preventDefault();let t=dr.current?.getBoundingClientRect();if(!t)return;let n=ze?Ue:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);f(n),zn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},pr=(e,t,n)=>{t&&et({x:e.clientX,y:e.clientY,directory:t,refresh:n})},mr=(0,E.useCallback)((e,t)=>{dt(n=>n[e]===t?n:{...n,[e]:t})},[]),hr=(0,E.useCallback)(e=>mr(`primary`,e),[mr]),gr=(0,E.useCallback)(e=>mr(`secondary`,e),[mr]),_r=(e,t)=>{ut[e]!==0&&pt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},vr=async(e,t=!1)=>{let n=$e;if(et(null),!n)return;let r=e===null?await Et(n.directory,t):await At(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Dn(),ht(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},yr=(0,E.useCallback)(()=>{let{tabs:e}=J.current,t=e.find(e=>e.id===Iy(J.current));t&&t.index>0&&Qn(t.id,t.history[t.index-1],t.index-1)},[Qn]),br=(0,E.useCallback)(()=>{let{tabs:e}=J.current,t=e.find(e=>e.id===Iy(J.current));t&&t.index<t.history.length-1&&Qn(t.id,t.history[t.index+1],t.index+1)},[Qn]),xr=(0,E.useCallback)(()=>{let{tabs:e}=J.current,t=e.find(e=>e.id===Iy(J.current));t&&Py(t)===`files`&&t.listing?.parent&&or(t.listing.parent)},[or]),Sr=(0,E.useRef)(null),Cr=(0,E.useCallback)(()=>{for(let e of J.current.tabs)e.listing&&Xn(e.id,e.listing.path,!0)},[Xn]),wr=(0,E.useCallback)(e=>{e.length!==0&&(Bt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),an())},[an]),Tr=(0,E.useCallback)(async e=>{let t=await St(e);t.length!==0&&wr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[wr]),Er=(0,E.useCallback)(e=>{let t=new Set(e);Bt(e=>e.filter(e=>!t.has(e.path)))},[]),Dr=(0,E.useCallback)(async e=>{let t=Hn.current;if(!t)return;let n=await St(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>l(e.path))),i=n.filter(e=>!r.has(l(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};R(a),await it(a),Pe(e=>e+1)},[]),Or=(0,E.useCallback)(async e=>{let t=Hn.current;if(!t)return;let n=new Set(e.map(l)),r=(t.favorites??[]).filter(e=>!n.has(l(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};R(i),await it(i),Pe(e=>e+1)},[]),kr=(0,E.useCallback)(()=>Bt([]),[]),Ar=(0,E.useRef)(-1),jr=(0,E.useCallback)(e=>{jt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Nt(e.move),e.entries.length>0&&an()},[an]),Mr=(0,E.useCallback)(async()=>{if(M.available)try{let e=await bt();Ar.current=e.sequence,jr(e)}catch{}},[jr]),Nr=(0,E.useCallback)(async e=>{e.length!==0&&await vt(e,!1)&&await Mr()},[Mr]),Pr=(0,E.useRef)(zt);Pr.current=zt,(0,E.useEffect)(()=>{let e=e=>{Gs(e.dataTransfer)&&an()},t=e=>{Gs(e.dataTransfer)&&an()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[an]),(0,E.useEffect)(()=>{let e=()=>rn(e=>Ly(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Fr=(0,E.useCallback)(async()=>{let e=Pr.current;if(e.length>0){let t=await St(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Bt(e=>e.filter(e=>n.has(e.path)))}await Mr()},[Mr]),Ir=(0,E.useCallback)(()=>{Fr(),Re(e=>e+1),Cr()},[Fr,Cr]),Lr=(0,E.useCallback)(e=>{let t=Ly(e);rn(t),Vn(`yafm.tray.position`,t)},[]),Rr=(0,E.useCallback)(()=>{Ft?Rt(!1):an()},[an,Ft]),zr=(0,E.useCallback)(async(t,n,r)=>{let i=await xt(t,n,r);i.ok?(r&&Er(t),Re(e=>e+1),Cr(),Mr()):va(i.error??e(`The files could not be transferred.`))},[Cr,Mr,Er]);(0,E.useEffect)(()=>{if(M.available)return W().then(e=>{Dt.current=e,_t(e)},()=>void 0),M.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Dt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Dt.current=n,_t(n),r&&Tt(!0)})},[]);let Br=(0,E.useCallback)(()=>{Ht().then(()=>W().then(e=>{Dt.current=e,_t(e)},()=>void 0))},[]);(0,E.useEffect)(()=>{if(!M.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await bt();if(!e||t.sequence===Ar.current)return;Ar.current=t.sequence,jr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[jr]);let Vr=(0,E.useCallback)(async e=>{let t=e?await It():await Lt();t.ok?(Re(e=>e+1),Cr()):t.error&&!t.error.startsWith(`Nothing to`)&&va(t.error)},[Cr]),Hr=(0,E.useRef)(_n);(0,E.useEffect)(()=>{Hr.current!==_n&&(Hr.current=_n,Cr())},[_n,Cr]);let Ur=(0,E.useCallback)((e,t)=>{let{tabs:n}=J.current,r=n.find(t=>t.id===e);if(!r||Py(r)!==`files`)return;let i=Fy(r),a=Hn.current?.defaultView??xe,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||be.iconSize,gridSize:r.view?.gridSize||a.gridSize||be.gridSize,sort:r.view?.sort??be.sort,sortDescending:r.view?.sortDescending??be.sortDescending,...t};Gn(e,()=>({view:o})),Sr.current!==null&&window.clearTimeout(Sr.current),Sr.current=window.setTimeout(()=>{Sr.current=null,De(i,o)},250)},[Gn]),Wr=(0,E.useCallback)(e=>{Ur(Iy(J.current),e)},[Ur]),Gr=(0,E.useCallback)(e=>{let t=Hn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe,columns:e}};R(n),it(n)},[]),Kr=(0,E.useCallback)(e=>{let t=Hn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe,showImages:e}};R(n),it(n)},[]),qr=(0,E.useCallback)(e=>{let t=Hn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe,imageStripHeight:e}};R(n),it(n)},[]),Jr=(0,E.useCallback)((e,t,n,r)=>{let i=J.current.tabs.find(t=>t.id===e);if(!i||Py(i)!==`files`||!i.listing)return;let a=Fy(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Gn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Oe(a,t,n,r)},[Gn]),Yr=(0,E.useCallback)((e,t)=>{let n=J.current.tabs.find(t=>t.id===e);if(!n)return;let r=Ry(n,Hn.current?.defaultView??xe);Ur(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Ur]),Xr=(0,E.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Zr=(0,E.useCallback)(()=>{Ae().then(h,()=>h([]))},[]),Qr=(0,E.useCallback)(e=>{let t=(e.openTabs??[]).map(yp).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...zy(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),a(n[i].id);for(let e of n)Py(e)===`files`&&Xn(e.id,Fy(e),!0);return!0},[Xn]),$r=(0,E.useCallback)(e=>{let t=Wn.current;if(Wn.current=[],t.length===0)return;let n=t.filter(e=>!ky.has(e));for(let e of t)n.includes(e)||Ay(e);if(n.length===0)return;let{tabs:r}=J.current;if(!e&&r.length===1&&r[0].fresh){Zn(r[0].id,n[0]),Ay(n[0]);for(let e of n.slice(1))$n(e),Ay(e);return}let i=n.map(e=>{let t=$n(e);return Ay(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[$n,Zn]),Y=(0,E.useCallback)(()=>{Ye().then(e=>{R(e),I(e.recentLimit);let t={...Ut,...e.shortcuts};Me(t),Gt(t.openInNewTab),Pe(e=>e+1),Un.current||(Un.current=!0,$r(e.restoreTabs&&Qr(e)))},()=>{I(10),Un.current=!0,$r(!1)})},[$r,Qr]),ei=(0,E.useCallback)(()=>{Be().then(he,()=>he([]))},[]),ti=(0,E.useCallback)(()=>{je().then(_,()=>_([]))},[]),ni=n.filter(e=>!e.hidden),ri=ni.map(Ny),oi=ri.join(`
`),ui=Math.max(ni.findIndex(e=>e.id===i),0);(0,E.useEffect)(()=>{if(!L?.restoreTabs)return;let e=setTimeout(()=>void at(ri,ui),700);return()=>clearTimeout(e)},[oi,ui,L?.restoreTabs]),(0,E.useEffect)(()=>{let{tabs:e,activeId:t}=J.current,n=e.find(e=>e.id===t);n&&n.fresh&&Py(n)===`files`&&Xn(n.id,Fy(n),!0),Zr(),Y(),ti(),ct().then(b,()=>b(null))},[Xn,Zr,Y,ti]),(0,E.useEffect)(()=>{if(lt().then(S,()=>S(null)),M.available)return M.on(e=>{let t=e;t.type===`app.update`&&t.data&&S(t.data)})},[]),(0,E.useEffect)(()=>{if(M.available)return M.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&s({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&va(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&va(n.data.error??e(`Pairing failed.`))}})},[e]),(0,E.useEffect)(()=>{let e=setInterval(ti,3e4);return()=>clearInterval(e)},[ti]),(0,E.useEffect)(()=>{K===`home`&&(ei(),ti())},[K,G.id,ei,ti]),(0,E.useEffect)(()=>{if(!M.available)return;let e=M.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=J.current,i=t.data.startup===!0;i&&ky.has(n)?Ay(n):i&&!Un.current?Wn.current.includes(n)||Wn.current.push(n):(i&&r.length===1&&r[0].fresh?Zn(r[0].id,n):vp(n)?Zn(Iy(J.current),n):$n(n),i&&Ay(n))});return M.send({type:`app.ready`}),e},[Zn,$n]),(0,E.useEffect)(()=>{if(M.available)return M.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},r})})},[]),(0,E.useEffect)(()=>{if(M.available)return M.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},r})})},[]),(0,E.useEffect)(()=>{let e=e=>{if(Xt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),yr();return}if(e.key===`BrowserForward`){e.preventDefault(),br();return}if(e.key===`Escape`&&w.open){e.preventDefault(),Dn();return}let t=qt(e);if(t===H.closeTab)e.preventDefault(),ir(Iy(J.current));else if(t===H.newTab)e.preventDefault(),$n();else if(t===H.reopenTab)e.preventDefault(),ar();else if(t===H.goBack)e.preventDefault(),yr();else if(t===H.goForward)e.preventDefault(),br();else if(t===H.goUp)e.preventDefault(),xr();else if(t===H.find)e.preventDefault(),K===`files`?kn():An();else if(t===H.location)e.preventDefault(),Ie(e=>e+1);else if(t===H.home){e.preventDefault();let t=m.find(e=>e.kind===`home`)?.path;t&&or(t)}else t===H.iconsView?(e.preventDefault(),K===`files`&&Wr({mode:`grid`})):t===H.detailsView?(e.preventDefault(),K===`files`&&Wr({mode:`list`})):t===H.nextTab?(e.preventDefault(),sr(1)):t===H.previousTab?(e.preventDefault(),sr(-1)):t===H.hidden||t===`alt+.`?(e.preventDefault(),Ke().then(()=>{Re(e=>e+1),Cr()})):t===H.undo?(e.preventDefault(),Vr(!0)):t===H.redo?(e.preventDefault(),Vr(!1)):t===H.splitView?(e.preventDefault(),cr()):K!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Nn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[H,K,w.open,ir,ar,$n,yr,br,xr,kn,An,Dn,Nn,Wr,sr,or,m,Cr,Vr,cr]),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),yr()):e.button===4&&(e.preventDefault(),br())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[yr,br]);let fi=(0,E.useMemo)(()=>{let e=new Set;for(let t of n){if(Py(t)!==`files`)continue;let n=Fy(t);if(n&&!Md(n)){if(p(n)){let t=Vy(u(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),pi=fi.join(`\0`);(0,E.useEffect)(()=>{M.available&&M.send({type:`fs.watch`,payload:{paths:fi,owner:`app`}})},[pi,i]);let mi=Py(mn)===`files`?Fy(mn):``;(0,E.useEffect)(()=>{M.available&&M.send({type:`fs.focus`,payload:{path:mi||null}})},[mi]),(0,E.useEffect)(()=>{if(M.available)return M.on(e=>{let n=e;if(n.type!==`fs.changed`||typeof n.data?.path!=`string`)return;let r=n.data.path,i=J.current.tabs.filter(e=>Py(e)===`files`&&t(Fy(e),r)),a=J.current.tabs.filter(e=>{let n=Fy(e);return Py(e)===`files`&&n.length>0&&p(n)&&t(u(n),r)});if(i.length!==0||a.length!==0){sn(r);for(let e of a){let n=J.current.tabs.find(t=>t.id===e.id),i=n?Fy(n):``;n&&Py(n)===`files`&&!n.loading&&p(i)&&t(u(i),r)&&Xn(e.id,i,!0)}i.length!==0&&Ce(r,!1,_n).then(e=>{for(let n of i){let r=J.current.tabs.find(e=>e.id===n.id);r&&Py(r)===`files`&&t(Fy(r),e.path)&&(r.loading?window.setTimeout(()=>{let r=J.current.tabs.find(e=>e.id===n.id);r&&!r.loading&&Py(r)===`files`&&t(Fy(r),e.path)&&Gn(n.id,()=>({listing:e}))},300):Gn(n.id,()=>({listing:e})))}},()=>void 0)}})},[_n,Xn,Gn]);let hi=G.index>0,gi=G.index<G.history.length-1,vi=(e,n)=>{let r=Ry(e,hn),i=e.listing?.path??e.history[e.index]??``,a=p(i),o=a&&T(i);return(0,N.jsx)(Rc,{confirmDelete:L?.confirmDelete??!1,cutPaths:Pt,previewVideoAudio:L?.previewVideoAudio??!1,previewVideoAutoplay:L?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:n?qe:Xe,onActivate:()=>Qe(n?`primary`:`secondary`),enableShortcuts:(!dn||(n?Ze===`primary`:Ze===`secondary`))&&(!a||o),error:e.error,find:e.id===mn.id?{...w,currentPath:En<0?null:Tn[En]}:void 0,imageStripHeight:Sn,listing:e.listing,loading:e.loading,onImageStripHeight:qr,readOnly:a&&!o||Md(e.listing?.path??``),onOpen:(t,n)=>{n?$n(t):Xn(e.id,t)},onOpenFile:(t,n)=>{Md(t)?Ld(t).catch(e=>void va(By(e))):c(t)?L?.archiveHandler??!1?n?$n(t):Xn(e.id,t):B(t):p(t)?(async()=>{let e=await Te(t,P.current,Uy(t));if(!e.path&&nn(e.error)){let n=u(t),r=$t(n);r&&tn(n);let i=await ba(n,!!r);i&&(en(n,i),e=await Te(t,P.current,i))}e.path?B(e.path):e.error&&va(e.error)})():B(t)},onRefresh:()=>{let t=e.listing?.path;t&&er(t)},onRename:tr,onSelectionCountChange:n?hr:gr,onSetTags:(t,n,r)=>Jr(e.id,t,n,r),selectionMenuRequest:n?ft.primary:ft.secondary,onSort:t=>Yr(e.id,t),onPaste:Ir,onClipboardChanged:()=>void Mr(),onTransfer:zr,onAddToTray:e=>void Tr(e),onAddFavorite:e=>void Dr(e),onRemoveFavorite:e=>void Or(e),favoritePaths:z,onExtractArchive:(e,t)=>void Ti(e,t),openOnSingleClick:L?.openOnSingleClick??!1,pendingRename:mt&&n===(Ze===`primary`)&&t(mt.directory,e.listing?.path??``)?mt.path:null,pendingRenameToken:mt?.token??0,refreshToken:Le,shortcuts:H,showCheckboxes:L?.showCheckboxes??!0,showImages:xn,view:r})},yi=w.open&&(0,N.jsx)(dd,{current:En,focusToken:oe,matchCase:w.matchCase,mode:w.mode,onClose:Dn,onMatchCase:()=>ie(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ie(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Pn(1),onPrevious:()=>Pn(-1),onQuery:e=>ie(t=>({...t,query:e})),onRegex:()=>ie(e=>({...e,regex:!e.regex})),query:w.query,regex:w.regex,total:Tn.length}),bi=K===`files`&&p(ln),xi=bi&&T(ln),Si=bi&&G.listing?.archiveEncrypted===!0,wi=async(t,n)=>{let r=u(t),i=await we(r,n,P.current,Uy(r));if(!i.ok&&nn(i.error)){let e=$t(r);e&&tn(r);let t=await ba(r,!!e);t&&(en(r,t),i=await we(r,n,P.current,t))}i.ok?(er(n),on(),Xn(G.id,n,!0)):va(`${e(`Could not extract the archive.`)}${i.error?`\n${i.error}`:``}`)},Ti=async(e,n)=>{let r=u(e),i=Vy(r);if(!i)return;if(n===`choose`){let e=await pa(i);e&&await wi(r,e);return}let a=n===`named`;if(n===`auto`){let e=t(r,ln)?G.listing?.entries??[]:(await Ce(r,!1,!1,P.current,Uy(r))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${Hy(r)}`:i;await wi(r,s)},Di=async e=>{bi&&await Ti(ln,e)},Oi=async()=>{bi&&await Ti(ln,`choose`)},ki=(0,N.jsxs)(Xy,{children:[(0,N.jsx)(Zy,{"data-shortcut":Jt(H.goBack),disabled:!hi,onClick:e=>{G.index>0&&Kt(e)?$n(G.history[G.index-1]):yr()},title:e(`Back`),type:`button`,children:(0,N.jsx)(ci,{})}),(0,N.jsx)(Zy,{"data-shortcut":Jt(H.goForward),disabled:!gi,onClick:e=>{G.index<G.history.length-1&&Kt(e)?$n(G.history[G.index+1]):br()},title:e(`Forward`),type:`button`,children:(0,N.jsx)(li,{})}),(0,N.jsx)(Zy,{"data-shortcut":Jt(H.goUp),disabled:K!==`files`||!q,onClick:e=>{q&&(Kt(e)?$n(q):or(q))},title:e(`Up one level`),type:`button`,children:(0,N.jsx)(ai,{})}),(0,N.jsx)(bp,{focusToken:Fe,icon:Cn,label:K===`files`?void 0:e(_y[K]),onContextMenu:K===`files`?(e,t,n)=>ot({x:t,y:n,path:e}):void 0,onNavigate:or,path:K===`files`?ln:cn}),K===`files`&&(!bi||xi)&&(0,N.jsx)(Zy,{onClick:e=>pr(e,ln,()=>void Xn(G.id,ln,!0)),title:e(`New folder or file`),type:`button`,children:(0,N.jsx)(si,{})}),(0,N.jsx)(Zy,{"data-shortcut":Jt(H.find),onClick:An,title:e(`Search`),type:`button`,children:(0,N.jsx)(ii,{})}),ut.primary>0&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(eb,{}),(0,N.jsx)(Zy,{onClick:e=>_r(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,N.jsx)(la,{})})]}),bi&&(0,N.jsxs)(Qy,{children:[(0,N.jsx)(eb,{}),Si&&(0,N.jsxs)($y,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,N.jsx)(ua,{size:12}),e(`Encrypted`)]}),(0,N.jsx)(Zy,{onClick:()=>void Oi(),onContextMenu:e=>{e.preventDefault(),nt({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,N.jsx)(Ei,{})}),(0,N.jsx)(co,{icon:(0,N.jsx)(Qi,{size:15}),onChange:e=>{let t=Number(e);pe(t),P.current=t,bi&&Xn(G.id,ln,!0)},options:My.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(My.find(e=>e.value===String(fe))?.label??`Auto`)}`,value:String(fe)})]})]}),Ai=se.open?{...se,index:j}:null;return(0,N.jsx)(Fn,{value:bn,children:(0,N.jsxs)(Ky,{$rounded:re,children:[(0,N.jsx)(Ou,{settings:L}),(0,N.jsx)(Kv,{activeId:G.id,onClose:ir,onNewTab:()=>$n(),onReorder:Xr,onTransferToTab:zr,onSelect:a,onViewChange:Wr,onColumns:Gr,onShowImages:Kr,showImages:xn,tasks:gt,onClearTasks:Br,activityOpen:yt,onActivityOpenChange:Tt,trayCount:zt.length+kt.length,trayVisible:Ft,onToggleTray:Rr,split:dn,canSplit:K===`files`,onToggleSplit:cr,details:ze,canDetails:K===`files`||K===`recycle`||K===`gallery`,onToggleDetails:()=>Ve(e=>!e),currentFolder:K===`files`&&!Md(ln)?ln:``,shortcuts:H,view:gn,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Py(t),i=Fy(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Fy(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?In(bn,i):void 0,archive:r===`files`&&p(i),split:!!a,title:r===`files`?Ln(bn,i,v(i)||e(`Files`)):e(_y[r]),partner:a?{title:Ln(bn,o,v(o)||e(`Files`)),place:In(bn,o)}:void 0}})}),(0,N.jsxs)(qy,{children:[(0,N.jsx)(t_,{activeKind:K,currentPath:K===`files`?cn:``,drives:g,historyVersion:Se,onNavigate:or,onOpenView:rr,homePath:m.find(e=>e.kind===`home`)?.path??``,places:m,recent:me,recentLimit:ge,version:Ne}),(0,N.jsxs)(Jy,{children:[K!==`files`&&ki,(0,N.jsxs)(Yy,{children:[K!==`files`&&se.open&&(0,N.jsx)(dd,{current:j,focusToken:ce,matchCase:se.matchCase,mode:se.mode,onClose:jn,onMatchCase:()=>k(e=>({...e,matchCase:!e.matchCase})),onMode:()=>k(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Mn(1),onPrevious:()=>Mn(-1),onQuery:e=>k(t=>({...t,query:e})),onRegex:()=>k(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:se.query,regex:se.regex,total:ue}),K===`files`?dn&&un?(0,N.jsxs)(nb,{ref:dr,children:[(0,N.jsxs)(rb,{style:{flex:d},children:[(0,N.jsxs)(tb,{$active:Ze===`primary`,onPointerDown:()=>Qe(`primary`),children:[(0,N.jsx)(Zy,{"data-shortcut":Jt(H.goBack),disabled:!hi,onClick:e=>{let t=G.index-1;t<0||(Kt(e)?$n(G.history[t]):Qn(G.id,G.history[t],t))},title:e(`Back`),type:`button`,children:(0,N.jsx)(ci,{})}),(0,N.jsx)(Zy,{"data-shortcut":Jt(H.goForward),disabled:!gi,onClick:e=>{let t=G.index+1;t>=G.history.length||(Kt(e)?$n(G.history[t]):Qn(G.id,G.history[t],t))},title:e(`Forward`),type:`button`,children:(0,N.jsx)(li,{})}),(0,N.jsx)(Zy,{"data-shortcut":Jt(H.goUp),disabled:!q,onClick:e=>{q&&(Kt(e)?$n(q):Xn(G.id,q))},title:e(`Up one level`),type:`button`,children:(0,N.jsx)(ai,{})}),(0,N.jsx)(bp,{focusToken:Ze===`primary`?Fe:void 0,onContextMenu:(e,t,n)=>ot({x:t,y:n,path:e}),onNavigate:(e,t)=>t?$n(e):void Xn(G.id,e),path:ln}),(0,N.jsx)(Zy,{onClick:e=>pr(e,ln,()=>void Xn(G.id,ln,!0)),title:e(`New folder or file`),type:`button`,children:(0,N.jsx)(si,{})}),(0,N.jsx)(Zy,{"data-shortcut":Jt(H.find),onClick:kn,title:e(`Search`),type:`button`,children:(0,N.jsx)(ii,{})}),ut.primary>0&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(eb,{}),(0,N.jsx)(Zy,{onClick:e=>_r(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,N.jsx)(la,{})})]})]}),vi(G,!0),Ze===`primary`&&yi]}),(0,N.jsx)(ib,{onDoubleClick:()=>f(.5),onPointerDown:fr,title:e(`Drag to resize; double-click to reset`)}),(0,N.jsxs)(rb,{$enter:!0,style:{flex:1-d},children:[(0,N.jsxs)(tb,{$active:Ze===`secondary`,onPointerDown:()=>Qe(`secondary`),children:[(0,N.jsx)(Zy,{"data-shortcut":Jt(H.goBack),disabled:un.index<=0,onClick:e=>{let t=un.index-1;t<0||(Kt(e)?$n(un.history[t]):Qn(un.id,un.history[t],t))},title:e(`Back`),type:`button`,children:(0,N.jsx)(ci,{})}),(0,N.jsx)(Zy,{"data-shortcut":Jt(H.goForward),disabled:un.index>=un.history.length-1,onClick:e=>{let t=un.index+1;t>=un.history.length||(Kt(e)?$n(un.history[t]):Qn(un.id,un.history[t],t))},title:e(`Forward`),type:`button`,children:(0,N.jsx)(li,{})}),(0,N.jsx)(Zy,{"data-shortcut":Jt(H.goUp),disabled:!pn,onClick:e=>{pn&&(Kt(e)?$n(pn):Xn(un.id,pn))},title:e(`Up one level`),type:`button`,children:(0,N.jsx)(ai,{})}),(0,N.jsx)(bp,{focusToken:Ze===`secondary`?Fe:void 0,onContextMenu:(e,t,n)=>ot({x:t,y:n,path:e}),onNavigate:(e,t)=>t?$n(e):void Xn(un.id,e),path:fn}),(0,N.jsx)(Zy,{onClick:e=>pr(e,fn,()=>void Xn(un.id,fn,!0)),title:e(`New folder or file`),type:`button`,children:(0,N.jsx)(si,{})}),(0,N.jsx)(Zy,{"data-shortcut":Jt(H.find),onClick:kn,title:e(`Search`),type:`button`,children:(0,N.jsx)(ii,{})}),ut.secondary>0&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(eb,{}),(0,N.jsx)(Zy,{onClick:e=>_r(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,N.jsx)(la,{})})]})]}),vi(un,!1),Ze===`secondary`&&yi]}),(0,N.jsx)(Ko,{info:ur,onWidth:lr,open:ze,videoAudio:L?.previewVideoAudio??!1,videoAutoplay:L?.previewVideoAutoplay??!1,width:Ue})]}):(0,N.jsxs)(ob,{children:[(0,N.jsxs)(sb,{children:[ki,(0,N.jsxs)(ab,{children:[vi(G,!0),yi]})]}),(0,N.jsx)(Ko,{info:Ge,onWidth:lr,open:ze,videoAudio:L?.previewVideoAudio??!1,videoAutoplay:L?.previewVideoAutoplay??!1,width:Ue})]}):K===`home`?(0,N.jsx)(up,{drives:g,find:Ai,historyVersion:Se,onSearchMatches:de,homePath:m.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:ti,onHistoryChanged:()=>V(e=>e+1),onAddToTray:e=>void Tr(e),onAddFavorite:e=>void Dr(e),onRemoveFavorite:e=>void Or(e),favoritePaths:z,onExtractArchive:(e,t)=>void Ti(e,t),settingsVersion:Ne,onOpen:or,onLayoutChanged:Y,onPlacesChanged:h,onRecentCleared:ei,places:m,recent:me,recentLimit:ge,visibilityVersion:Le}):K===`settings`?(0,N.jsx)(Qm,{appInfo:y,find:Ai,focusSection:te,onSearchMatches:de,onSettingsChanged:Y,onOpenFolder:$n}):K===`gallery`?(0,N.jsx)(Vg,{confirmDelete:L?.confirmDelete??!1,find:Ai,onSearchMatches:de,openOnSingleClick:L?.openOnSingleClick??!1,onAddToTray:e=>void Tr(e),onAddFavorite:e=>void Dr(e),onRemoveFavorite:e=>void Or(e),favoritePaths:z,onExtractArchive:(e,t)=>void Ti(e,t),shortcuts:H,showCheckboxes:L?.showCheckboxes??!0,showDetails:ze,videoAudio:L?.previewVideoAudio??!1,videoAutoplay:L?.previewVideoAutoplay??!1,view:gn}):(0,N.jsx)(Ip,{find:Ai,onOpenLocation:or,onShowDetails:()=>Ve(!0),platform:y?.platform,showDetails:ze,videoAudio:L?.previewVideoAudio??!1,videoAutoplay:L?.previewVideoAutoplay??!1})]},K),(0,N.jsxs)(db,{children:[(0,N.jsx)(`span`,{children:K===`files`&&G.listing?Wy(e,G.listing):``}),y?(0,N.jsxs)(cb,{children:[(0,N.jsxs)(`span`,{children:[`v`,y.version,` · `,y.platform]}),x?.available&&(0,N.jsxs)(lb,{onClick:()=>{ne(`updates`),rr(`settings`)},title:e(`Version {version} is available.`,{version:x.latest}),type:`button`,children:[(0,N.jsx)(ub,{}),e(`Update available`)]})]}):(0,N.jsx)(`span`,{children:e(`browser preview`)})]})]})]}),(0,N.jsx)(Xs,{clipboardItems:kt,clipboardMove:Mt,currentDirectory:K===`files`?cn:``,items:zt,onAdd:e=>void Tr(e),onClear:kr,onClose:()=>Rt(!1),onCopyToClipboard:e=>void Nr(e),onPosition:Lr,onRemove:Er,onTransfer:zr,position:Qt,visible:Ft}),$e&&(0,N.jsx)(ao,{creationOnly:!0,directory:$e.directory,menu:{x:$e.x,y:$e.y,paths:[],background:!0},onClose:()=>et(null),onCreateFile:e=>void vr(e),onCreateFolder:e=>void vr(null,e),shortcuts:H}),rt&&(0,N.jsx)(ao,{allowCompression:!0,directory:Vy(rt.path)??rt.path,menu:{x:rt.x,y:rt.y,paths:[rt.path]},onAddToTray:e=>void Tr(e),onAddFavorite:e=>void Dr(e),onRemoveFavorite:e=>void Or(e),favoritePaths:z,onExtractArchive:(e,t)=>void Ti(e,t),onArchiveCreated:e=>{e&&er(Vy(rt.path)??rt.path)},onClose:()=>ot(null),onCompressTo:(e,t)=>U({paths:e,name:t}),onCopy:(e,t)=>void vt(e,t),onDelete:e=>void wt(e,!1).then(()=>er(Vy(rt.path)??rt.path)),onOpen:(e,t)=>t?$n(e):void Xn(G.id,e),onOpenFile:e=>void B(e),onPaste:e=>void Ct(e).then(t=>{t&&er(e)}),onRefresh:()=>er(rt.path),shortcuts:H,target:{path:rt.path,isDirectory:!0}}),st&&(0,N.jsx)(So,{initialDirectory:Vy(rt?.path??ln)??ln,initialName:st.name,onCancel:()=>U(null),onCompress:async e=>{let t=await Vt(st.paths,e);return!t.ok&&t.error&&va(t.error),t.ok}}),tt&&(0,N.jsx)(qa,{items:[{label:e(`Extract here`),onSelect:()=>void Di(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void Di(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void Di(`auto`)}],onClose:()=>nt(null),x:tt.x,y:tt.y}),Wt&&(0,N.jsx)(Nu,{delaySeconds:Wt.prompt.delaySeconds,hits:Wt.prompt.hits,onCancel:()=>{Wt.resolve(!1),Yt(null)},onConfirm:()=>{Wt.resolve(!0),Yt(null)},permanent:Wt.prompt.permanent},Wt.id),(0,N.jsx)(Ju,{}),(0,N.jsx)(td,{}),o&&(0,N.jsx)(vy,{code:o.code,deviceName:o.deviceName,onAccept:()=>{kd(o.requestId,!0),s(null)},onReject:()=>{kd(o.requestId,!1),s(null)}}),(0,N.jsx)(fy,{}),(0,N.jsx)(ve,{})]})})}var Ky=_.div`
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
    ${Ha}
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
    ${({$enter:e})=>e?Ga:``}
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
        ${Ka}
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
`;function fb({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:c,onSelect:u}){let d=F(),f=wc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,E.useState)(e),[_,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(!0),[S,ee]=(0,E.useState)(null),[C,te]=(0,E.useState)(()=>new Set),[ne,re]=(0,E.useState)(a??[]),[w,T]=(0,E.useState)([]),[ae,D]=(0,E.useState)([]),[oe,O]=(0,E.useState)([]),[se,k]=(0,E.useState)([]),[ce,A]=(0,E.useState)(``),[j,le]=(0,E.useState)(m.length===0),[ue,de]=(0,E.useState)(`files`),[fe,pe]=(0,E.useState)(0),[P,me]=(0,E.useState)(yn),[he,ge]=(0,E.useState)(0),[I,_e]=(0,E.useState)(0),[L,ve]=(0,E.useState)(null),[R,ye]=(0,E.useState)(null),[z,Se]=(0,E.useState)(0),[B,we]=(0,E.useState)(null),[Te,Ee]=(0,E.useState)(xe.imageStripHeight);(0,E.useEffect)(()=>{Ye().then(we,()=>we(null))},[]),(0,E.useEffect)(()=>{a?re(a):Ae().then(re,()=>re([]))},[a]),(0,E.useEffect)(()=>{je().then(T,()=>T([])),Be().then(D,()=>D([]))},[]),(0,E.useEffect)(()=>{let e=!0;return x(!0),ee(null),te(new Set),A(p?``:v(h)),Ce(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),A(p?``:v(t.path)),x(!1))},t=>{e&&(ee(t instanceof Error?t.message:String(t)),x(!1))}),()=>{e=!1}},[h,fe,p]),(0,E.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),me(e=>({...e,open:!0})),ge(e=>e+1);return}if(e.key===`Escape`){P.open?(me(e=>({...e,open:!1,query:``})),_e(0)):c();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),De();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Oe();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),me(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),ge(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||We()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),De()):e.button===4&&(e.preventDefault(),Oe())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let V=e=>{let t=e.trim();t.length!==0&&l(t)!==l(h)&&(O(e=>[...e,h]),k([]),de(`files`),g(t))},De=()=>{let e=oe.at(-1);e!==void 0&&(O(e=>e.slice(0,-1)),k(e=>[h,...e]),g(e))},Oe=()=>{let e=se[0];e!==void 0&&(k(e=>e.slice(1)),O(e=>[...e,h]),g(e))},ke=_?.path??h,H=_?.parent??(h?ie(h):null);(0,E.useEffect)(()=>{M.available&&ke&&M.send({type:`fs.watch`,payload:{paths:[ke],owner:`picker`}})},[ke]),(0,E.useEffect)(()=>{if(M.available&&ke)return M.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&l(t.data.path)===l(ke)&&Ce(ke,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));te(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[ke]);let Me=(_?.entries??[]).filter(e=>e.isDirectory||p&&(j||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Ne=_?{..._,entries:Me}:null,Pe=P.open&&P.query.length>0,Fe=(0,E.useMemo)(()=>Pe?Me.filter(e=>On(e.name,P)).map(e=>e.fullPath):[],[Pe,Me,P]);(0,E.useEffect)(()=>{_e(0)},[P.query,P.matchCase,P.regex,_?.path]);let Ie=Fe.length===0?-1:Math.min(I,Fe.length-1),Le=(0,E.useMemo)(()=>({...P,currentPath:Ie>=0?Fe[Ie]:null}),[P,Ie,Fe]),Re=B?.defaultView??xe,ze=o??{mode:Re.mode,iconSize:Re.iconSize,gridSize:Re.gridSize,sort:`name`,sortDescending:!1,columns:Re.columns??[`type`,`size`,`modified`]},Ve=(s??Re.showImages)&&ze.mode===`list`,He=ce.trim(),Ue=He.length>0?mb(He)?He:pb(ke,He):null,We=()=>{if(b||S)return;let e=n?[...C]:[...C].slice(0,1);e.length>0?u(e):Ue!==null&&He!==v(ke)?u([Ue]):!p&&ke&&u([ke])},Ge=(0,E.useCallback)(e=>{te(new Set(e)),A(e.length===1?v(e[0]):e.length===0&&!p?v(ke):``)},[ke,p]),Ke=e=>{_?.entries.find(t=>t.fullPath===e)?.isDirectory?V(e):p&&u([e])},qe=e=>A(e),Je=async e=>{let t=L;if(ve(null),!t||!ke)return;let n=e===null?await Et(ke):await At(ke,e);n.ok&&n.path!==null&&(me(e=>({...e,open:!1,query:``})),e!==null&&le(!0),pe(e=>e+1),window.setTimeout(()=>{ye(n.path),Se(e=>e+1)},120))},Xe=()=>{me(e=>({...e,open:!0})),ge(e=>e+1)},Ze=e=>{_e(t=>Fe.length===0?0:(t+e+Fe.length)%Fe.length)},Qe=e=>(0,N.jsxs)(wb,{children:[(0,N.jsxs)(Tb,{children:[(0,N.jsx)(Eb,{children:d(p?`File name:`:`Folder:`)}),(0,N.jsx)(Db,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),We())},spellCheck:!1,value:ce}),p&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Eb,{children:d(`Files of type:`)}),(0,N.jsx)(co,{onChange:e=>le(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:j?`all`:`supported`})]})]}),(0,N.jsxs)(Ob,{children:[(0,N.jsx)(kb,{onClick:c,type:`button`,children:d(`Cancel`)}),(0,N.jsxs)(kb,{$primary:!0,disabled:b||S!==null||p&&C.size===0&&He.length===0,onClick:We,type:`button`,children:[(0,N.jsx)(vi,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),$e=(0,N.jsxs)(gb,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,N.jsxs)(_b,{children:[(0,N.jsxs)(vb,{children:[(0,N.jsx)(ti,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,N.jsx)(yb,{onClick:c,title:d(`Cancel`),type:`button`,children:(0,N.jsx)(yi,{size:12})})]}),(0,N.jsxs)(bb,{children:[(0,N.jsx)(t_,{activeKind:ue===`overview`?`home`:ue===`gallery`?`gallery`:`files`,currentPath:ke,drives:w,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:ne.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>V(e),onOpenView:e=>{e===`home`?(te(new Set),A(p?``:v(ke)),de(`overview`)):e===`gallery`&&p&&(te(new Set),A(``),de(`gallery`))},places:ne,recent:ae,recentLimit:10}),(0,N.jsx)(xb,{children:ue===`overview`?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(up,{drives:w,historyVersion:0,homePath:ne.find(e=>e.kind===`home`)?.path??``,onOpen:e=>V(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Ge,places:ne,readOnly:!0,recent:ae,recentLimit:10,visibilityVersion:0}),Qe(A)]}):ue===`gallery`?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Vg,{onPick:e=>u([e]),onSelectionChange:Ge,showCheckboxes:B?.showCheckboxes??!0,view:{...be,columns:[]}}),Qe(A)]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(Sb,{children:[(0,N.jsx)(Cb,{disabled:oe.length===0,onClick:De,title:d(`Back`),type:`button`,children:(0,N.jsx)(ci,{})}),(0,N.jsx)(Cb,{disabled:se.length===0,onClick:Oe,title:d(`Forward`),type:`button`,children:(0,N.jsx)(li,{})}),(0,N.jsx)(Cb,{disabled:!H,onClick:()=>H&&V(H),title:d(`Up one level`),type:`button`,children:(0,N.jsx)(ai,{})}),(0,N.jsx)(bp,{onNavigate:V,path:ke}),(0,N.jsx)(Cb,{onClick:e=>ve({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,N.jsx)(si,{})}),(0,N.jsx)(Cb,{onClick:Xe,title:d(`Search`),type:`button`,children:(0,N.jsx)(ii,{})}),f.available&&(0,N.jsx)(Cb,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,N.jsx)(la,{})})]}),P.open&&(0,N.jsx)(dd,{current:Ie,focusToken:he,matchCase:P.matchCase,mode:P.mode,onClose:()=>{me(e=>({...e,open:!1,query:``})),_e(0)},onMatchCase:()=>me(e=>({...e,matchCase:!e.matchCase})),onMode:()=>me(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ze(1),onPrevious:()=>Ze(-1),onQuery:e=>me(t=>({...t,query:e})),onRegex:()=>me(e=>({...e,regex:!e.regex})),query:P.query,regex:P.regex,total:Fe.length}),(0,N.jsx)(Rc,{allowBackgroundMenu:!0,confirmDelete:B?.confirmDelete??!1,enableShortcuts:!0,error:S,find:Le,imageStripHeight:Te,loading:b,listing:Ne,onImageStripHeight:Ee,onOpen:Ke,onOpenFile:Ke,onRefresh:()=>pe(e=>e+1),onSelectionChange:Ge,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:B?.openOnSingleClick??!1,refreshToken:fe,pendingRename:R,pendingRenameToken:z,showCheckboxes:B?.showCheckboxes??!0,showDetails:!1,showImages:Ve,singleSelect:!n,view:ze}),Qe(qe)]})})]}),L&&(0,N.jsx)(ao,{creationOnly:!0,directory:ke,menu:{x:L.x,y:L.y,paths:[],background:!0},onClose:()=>ve(null),onCreateFile:p?e=>void Je(e):void 0,onCreateFolder:()=>void Je(null),shortcuts:Ut})]});return i?$e:(0,Aa.createPortal)((0,N.jsx)(hb,{onPointerDown:e=>{e.target===e.currentTarget&&c()},children:$e}),document.body)}function pb(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function mb(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var hb=_.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Ga}
`,gb=_.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:ja}
    ${({$inline:e})=>e?``:Ba}
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
`;function Ab({mode:e,multiple:t,extensions:n,initial:r}){let i=F(),a=I(),[o,s]=(0,E.useState)(null),[c,l]=(0,E.useState)({}),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=(0,E.useRef)(0);(0,E.useEffect)(()=>{M.send({type:`app.ready`})},[]),(0,E.useEffect)(()=>(ye(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>ye(null)),[]),(0,E.useEffect)(()=>{Ye().then(e=>{s(e),ee(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??xe,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,N.jsxs)(jb,{children:[(0,N.jsxs)(Mb,{children:[(0,N.jsx)(Nb,{children:(0,N.jsx)(bi,{size:17})}),(0,N.jsx)(Pb,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,N.jsx)(kv,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,N.jsx)(Fb,{children:(0,N.jsx)(Ib,{onClick:()=>M.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,N.jsx)(yi,{size:12})})})]}),(0,N.jsx)(Lb,{children:(0,N.jsx)(fb,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>M.send({type:`pick.cancel`}),onSelect:e=>M.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,N.jsx)(Nu,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,N.jsx)(Ju,{}),(0,N.jsx)(ve,{})]})}var jb=_.div`
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
`,Rb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Rb);var zb=document.getElementById(`root`),Bb=new URLSearchParams(window.location.search),Vb=Bb.get(`picker`),Hb=Bb.get(`filter`)??``;zb&&(0,ae.createRoot)(zb).render((0,N.jsx)(E.StrictMode,{children:(0,N.jsx)(me,{children:Vb===`folder`||Vb===`file`?(0,N.jsx)(Ab,{extensions:Hb?Hb.split(`;`).filter(Boolean):[],initial:Bb.get(`initial`)??``,mode:Vb,multiple:Bb.get(`multiple`)===`1`}):(0,N.jsx)(Gy,{})})}));