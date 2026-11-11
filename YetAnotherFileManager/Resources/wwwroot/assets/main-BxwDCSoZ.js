import{A as e,C as t,E as n,M as r,N as i,O as a,S as o,T as s,_ as c,b as l,c as u,d,f,g as p,h as m,i as h,j as g,k as _,l as v,m as y,n as b,o as x,p as S,r as ee,s as te,t as ne,u as re,v as C,w,x as ie,y as T}from"./theme-BMX5jShW.js";var E=i(r(),1),ae=e(),D=15e3,oe=new Set,O=new Map,se=!1,k=0,A;function j(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function M(){se||(se=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>ce(e)))}function ce(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?O.get(n):void 0;n&&r&&(O.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),oe.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function le(){if(A!==void 0)return;let e=()=>{if(!j())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),A=setInterval(e,5e3)}var N={get available(){return j()},send(e){j()?(M(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&le()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=D){if(!j())return Promise.reject(Error(`Native bridge is not available.`));M();let r=`req-${++k}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{O.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);O.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return M(),oe.add(e),()=>oe.delete(e)}},P=s();function ue(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function de(e){return N.available?await N.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var fe=(0,E.createContext)(ue({})),F=(0,E.createContext)(`en`);function I(){return(0,E.useContext)(fe)}var pe=({children:e})=>{let[t,n]=(0,E.useState)(()=>ue({})),[r,i]=(0,E.useState)(`en`);return(0,E.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await de();if(e)return;n(()=>ue(t.strings)),i(t.locale)}catch{}};t();let r=N.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,E.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,P.jsx)(fe.Provider,{value:t,children:(0,P.jsx)(F.Provider,{value:r,children:e})})},L=e=>N.send({type:e});function me(){let[e,t]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>L(`window.minimize`),toggleMaximize:()=>L(`window.toggleMaximize`),close:()=>L(`window.close`)}}function he(){return{onMouseDown:()=>L(`window.drag`),onDoubleClick:()=>L(`window.toggleMaximize`)}}function ge(){let[e,t]=(0,E.useState)(!1),{maximized:n}=me();return(0,E.useEffect)(()=>{if(!N.available)return;let e=!1;return N.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,E.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var R=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function _e(){return(0,P.jsx)(P.Fragment,{children:R.map(([e,t])=>(0,P.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),N.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var ve=null;function ye(e){ve=e}function z(e){return ve?ve(e):Promise.resolve(!1)}var B={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},be={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function xe(e,t){return N.available?await N.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Se(e){return N.available?(await N.request(`fs.open`,{path:e})).ok:!1}async function Ce(e,t=!0,n=!1,r=0,i){return await N.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function we(e,t,n=0,r){return await N.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function V(e,t=0,n){return await N.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Te(e){N.available&&e.length!==0&&await N.request(`fs.archive.release`,{paths:e})}async function Ee(e){return N.available?await N.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function De(e,t){return N.available?(await N.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Oe(e,t,n,r){return N.available?(await N.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function ke(e,t=!1){return N.available?await N.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ae(){return(await N.request(`fs.places`)).places}async function je(){return(await N.request(`fs.drives`)).drives}async function Me(e=!1){return(await N.request(`fs.recycle`,{includeOrphans:e})).entries}async function Ne(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await z({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await N.request(e,{...t,confirm:r.token})}return r}async function H(e=!1){let t=await N.request(`fs.recycle.empty`,{includeOrphans:e});await Ne(`fs.recycle.empty`,{includeOrphans:e},t)}async function Pe(e){return!N.available||e.length===0?{ok:!1,done:0}:await N.request(`fs.recycle.restoreMany`,{ids:e})}async function Fe(e){if(!N.available||e.length===0)return{ok:!1,done:0};let t=await N.request(`fs.recycle.deleteMany`,{ids:e}),n=await Ne(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ie(e){N.available&&e&&await N.request(`fs.recycle.properties`,{id:e})}async function Le(){if(!N.available)return{entries:[],cancelled:!0,failed:!1};let e=await N.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Re(){return N.available?(await N.request(`fs.recycle.admin.purge`)).ok:!1}async function ze(e=0,t=150,n=!1){return N.available?await N.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Be(){return N.available?(await N.request(`fs.recent`)).entries:[]}async function Ve(){return N.available?(await N.request(`fs.frequent`)).entries:[]}async function He(e){N.available&&await N.request(`fs.frequent.record`,{path:e})}async function Ue(){await N.request(`fs.recent.clear`)}async function We(){await N.request(`fs.frequent.clear`)}async function Ge(){return await N.request(`fs.visibility`)}async function Ke(){return await N.request(`fs.hidden.toggle`)}async function qe(){return N.available?await N.request(`fs.index.tasks`):{count:0,directories:[]}}var Je={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Ye(){if(!N.available)return Je;let e=await N.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function Xe(){return N.available?(await N.request(`app.protection.defaults`)).paths??[]:[]}var Ze={registered:!1,pathMatches:!1,registeredPath:null},Qe={registered:!1,pathMatches:!1,registeredPath:null};async function $e(){return N.available?await N.request(`app.defaultManager.status`):Qe}async function et(e){return N.available?await N.request(`app.defaultManager.set`,{enabled:e}):Qe}async function tt(){return N.available?await N.request(`app.archive.status`):Ze}async function nt(){return N.available?await N.request(`app.archive.register`):Ze}async function rt(){return N.available?await N.request(`app.archive.unregister`):Ze}async function it(e){if(!N.available)return e;let t=await N.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function at(e,t){N.available&&await N.request(`app.tabs.set`,{tabs:e,active:t})}async function ot(e,t,n){return N.available?(await N.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var st={managed:0,private:0,workingSet:0,available:0};async function ct(){return N.available?await N.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1,logDirectory:``}}async function lt(){return N.available?await N.request(`app.updateStatus`)??null:null}async function ut(){return N.available?await N.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function dt(e){return!N.available||!e?!1:(await N.request(`app.openUrl`,{url:e})).ok}async function ft(){return N.available?await N.request(`app.memory`):st}async function U(){return N.available?await N.request(`app.memory.trim`):st}async function pt(){return N.available?(await N.request(`app.scheme`)).registered:!1}async function mt(e){return N.available?(await N.request(`app.scheme.set`,{enabled:e})).registered:!1}var ht={supported:!1,mode:`none`,active:!1,error:null};async function gt(){return N.available?await N.request(`app.startup`):ht}async function _t(e){return N.available?await N.request(`app.startup.set`,{mode:e}):ht}async function vt(e,t=!1){return!N.available||e.length===0?!1:(await N.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function yt(){return N.available?(await N.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function bt(){return N.available?await N.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function xt(e,t,n){return!N.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await N.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function St(e){return!N.available||e.length===0?[]:(await N.request(`fs.paths.info`,{paths:e})).entries}async function Ct(e){if(!N.available)return{ok:!1,created:[]};let t=await N.request(`fs.clipboard.paste`,{directory:e});return{ok:t.ok,created:t.created??[]}}async function wt(e,t=!1){if(!N.available||e.length===0)return{ok:!1,error:null};let n=await N.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await z({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await N.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function Tt(e,t){return N.available?await N.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Et(e,t=!1){return N.available?await N.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Dt(e){return N.available?(await N.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Ot(e,t){return N.available?await N.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function kt(e,t,n){return N.available?await N.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function At(e,t){return N.available?await N.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function jt(e){N.available&&e.length!==0&&await N.request(`fs.operation.properties`,{paths:e})}async function Mt(e){N.available&&await N.request(`fs.operation.openWith`,{path:e})}async function Nt(e){N.available&&await N.request(`fs.operation.terminal`,{path:e})}async function W(e){return N.available?await N.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Pt(e,t){return N.available?(await N.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Ft(){return N.available?await N.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function It(){return N.available?await N.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Lt(e){N.available&&await N.request(`fs.operation.showInExplorer`,{path:e})}async function Rt(e){return!N.available||e.length===0?{verbs:[],safe:!0}:await N.request(`shell.verbs`,{paths:e})}async function zt(e,t,n,r){N.available&&e.length!==0&&await N.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Bt(e,t){return!N.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await N.request(`fs.operation.compress`,{...t,paths:e})}async function G(){return N.available?(await N.request(`app.tasks`)).tasks:[]}async function Vt(){N.available&&await N.request(`app.tasks.clear`)}var Ht={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Ut=Ht.openInNewTab;function Wt(e){Ut=e.trim()||Ht.openInNewTab}function Gt(e){let t=Ut.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Kt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function qt(e){return e.split(`+`).filter(Boolean).map(e=>Jt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Jt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Yt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Xt=new Map;function Zt(e){return l(p(e)?u(e):e)}function Qt(e){return Xt.get(Zt(e))}function $t(e,t){Xt.set(Zt(e),t)}function en(e){Xt.delete(Zt(e))}function tn(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var nn=new Map,rn=new Map,an=new Set,on=0;function sn(){nn.clear(),rn.clear(),on+=1,an.forEach(e=>e())}function cn(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...nn.keys()])e.toLowerCase().includes(t)&&(nn.delete(e),n=!0);n&&(on+=1,an.forEach(e=>e()))}function K(){let[e,t]=(0,E.useState)(on);return(0,E.useEffect)(()=>{let e=()=>t(on);return an.add(e),()=>{an.delete(e)}},[]),e}var q=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function ln(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return q.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function un(e,t,n=!1){let r=K(),i=e===null?``:ln(e,t,n),[a,o]=(0,E.useState)(()=>nn.get(i)??null);return(0,E.useEffect)(()=>{if(e===null){o(null);return}if(!N.available)return;if(nn.has(i)){o(nn.get(i)??null);return}let r=!0;return N.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?nn.set(i,e.dataUrl):nn.delete(i),r&&o(e.dataUrl)},()=>{nn.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function dn(e){let[t,n]=(0,E.useState)(e);return(0,E.useEffect)(()=>{if(!e){n(null);return}if(!p(e)){n(e);return}let t=!0;return V(e,0,Qt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function J(e){let t=K(),[n,r]=(0,E.useState)(()=>e?rn.get(e)??null:null);return(0,E.useEffect)(()=>{if(!e||!N.available){r(null);return}if(rn.has(e)){r(rn.get(e)??null);return}let t=!0;return N.request(`fs.iconFile`,{path:e}).then(n=>{rn.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{rn.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var fn=null,pn=null;function mn(){return fn===null?N.available?(pn??=N.request(`app.thumbnails`).then(e=>(fn=e.base??``,fn),()=>(fn=``,``)),pn):Promise.resolve(``):Promise.resolve(fn)}function hn(e,t=128,n=0){let[r,i]=(0,E.useState)(fn);return(0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return mn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function gn(e,t=0,n=``){let[r,i]=(0,E.useState)(fn);if((0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return mn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function _n(e,t=0){let[n,r]=(0,E.useState)(fn);return(0,E.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return mn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var vn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},yn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function bn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Cn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=En(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var xn=`\0`,Sn=``;function Cn(e){return e.query!==xn&&(xn=e.query,Sn=e.query.toLowerCase()),Sn}var wn=`\0`,Tn=null;function En(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===wn)return Tn;wn=t;try{Tn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Tn=null}return Tn}function Dn(e,t){return bn(e,t)!==null}var On=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],kn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function An(e){let t=Mn(e);for(let{kind:e}of On)if(kn[e].has(t))return e;return null}function jn(e){return An(e)!==null}function Mn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Nn=(0,E.createContext)({places:{},useIcons:!1}),Pn=Nn.Provider;function Fn(){return(0,E.useContext)(Nn)}function In(e,t){return e.places[l(t)]}function Ln(e,t,n){return In(e,t)?.name||n}function Rn(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function zn(e,t){try{localStorage.setItem(e,String(t))}catch{}}function Bn(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function Vn(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Hn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,P.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,P.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Un=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Wn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M14 3v4h4`})]}),Gn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,P.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,P.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Kn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,P.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),qn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 19V5`}),(0,P.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Jn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,P.jsx)(`path`,{d:`M20 4v7h-7`})]}),Yn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 5v14`}),(0,P.jsx)(`path`,{d:`M5 12h14`})]}),Xn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M19 12H5`}),(0,P.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Zn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M5 12h14`}),(0,P.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Qn=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,P.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),$n=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,P.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),er=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,P.jsx)(`path`,{d:`M12 12v8`})]}),tr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,P.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),nr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),rr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,P.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),ir=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),ar=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 7h16`}),(0,P.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,P.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,P.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),or=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),sr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),cr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,P.jsxs)(`defs`,{children:[(0,P.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,P.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,P.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,P.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,P.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,P.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,P.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,P.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,P.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,P.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),lr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),ur=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,P.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,P.jsx)(`path`,{d:`m13 5-2 14`})]}),dr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,P.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,P.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),fr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,P.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),pr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,P.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,P.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),mr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),hr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),gr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),_r=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,P.jsx)(`path`,{d:`M8.5 14h7`})]}),vr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,P.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,P.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),yr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),br=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),xr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Sr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Cr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),wr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,P.jsx)(`path`,{d:`m14 6 4 4`})]}),Tr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,P.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Er=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,P.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Dr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 4v10`}),(0,P.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,P.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Or=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,P.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,P.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),kr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,P.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,P.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Ar=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,P.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),jr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Mr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,P.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Nr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,P.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,P.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Pr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Fr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,P.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,P.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,P.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Ir=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,P.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Lr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,P.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Rr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,P.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,P.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),zr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,P.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Br=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,P.jsx)(`path`,{d:`M3.5 12h17`}),(0,P.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Vr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Hr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,P.jsx)(`path`,{d:`M8.5 10.5h7`})]}),Ur=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,P.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,P.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),Wr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,P.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Gr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,P.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,P.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),Kr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),qr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 16V4`}),(0,P.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,P.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),Jr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),Yr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,P.jsx)(`path`,{d:`M12 4v16`})]}),Xr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,P.jsx)(`path`,{d:`M15 4v16`})]}),Zr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,P.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,P.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,P.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),Qr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,P.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,P.jsx)(`path`,{d:`M12 14v2`})]}),$r=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,P.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),ei=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,P.jsx)(`circle`,{cx:12,cy:12,r:3})]}),ti=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,P.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,P.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,P.jsx)(`path`,{d:`m3 3 18 18`})]});function Y(e,t){return({size:n=t,...r})=>(0,P.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var ni=Y(Hn,18),ri=Y(Un,18),ii=Y(Wn,18),ai=Y(Gn,18),oi=Y(Kn,16),si=Y(qn,16),ci=Y(Jn,16),li=Y(Yn,16),ui=Y(Xn,16),di=Y(Zn,16),fi=Y(Qn,12),pi=Y($n,18),mi=Y(er,14),hi=Y(tr,14),gi=Y(nr,14),_i=Y(rr,18),vi=Y(ir,18),yi=Y(ar,18),bi=Y(or,14),xi=Y(sr,14),Si=Y(ei,14),Ci=Y(ti,14),wi=Y(cr,18),Ti=Y(lr,18),Ei=Y(ur,18),Di=Y(dr,18),Oi=Y(fr,18),ki=Y(pr,18),Ai=Y(mr,18),ji=Y(hr,18),Mi=Y(gr,18),Ni=Y(_r,18),Pi=Y(vr,18),Fi=Y(yr,18),Ii=Y(br,18),Li=Y(xr,18),Ri=Y(Sr,18),zi=Y(Cr,18),Bi=Y(wr,16),Vi=Y(Tr,18),Hi=Y(Er,18),Ui=Y(Dr,18),Wi=Y(Or,18),Gi=Y(kr,18),Ki=Y(Ar,18),qi=Y(jr,18),Ji=Y(Mr,18),Yi=Y(Nr,18),Xi=Y(Pr,18),Zi=Y(Fr,18),Qi=Y(Ir,18),$i=Y(Lr,18),ea=Y(Rr,18),ta=Y(zr,18),na=Y(Br,18),ra=Y(Vr,18),ia=Y(Hr,14),aa=Y(Ur,14),oa=Y(Wr,16),sa=Y(Gr,16),ca=Y(Kr,16),la=Y(qr,16),ua=Y(Jr,16),da=Y(Yr,16),fa=Y(Xr,16),pa=Y(Zr,16),ma=Y(Qr,14),ha=Y($r,14);async function ga(e,t,n){return N.available?(await N.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function _a(e){return ga(`folder`,[],e??``)}function va(e){return ga(`file`,e??[],``)}var ya=null,ba=null;function xa(e){ya=e}function Sa(e){return ya?ya(e):Promise.resolve()}function Ca(e){ba=e}function wa(e,t=!1){return ba?ba(e,t):Promise.resolve(null)}var Ta=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],Ea=null,Da=0,Oa=new Set;function ka(){Da+=1;for(let e of Oa)e()}function Aa(e){return Oa.add(e),()=>Oa.delete(e)}function ja(){return Da}function Ma(e){Ea=e,ka()}function Na(){return(0,E.useSyncExternalStore)(Aa,ja,ja),Ea}var Pa=g(),Fa=a`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Ia=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,La=n`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ra=n`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,za=n`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Ba=n`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Va=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ha=n`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Ua=n`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Wa=a`animation: ${Ia} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ga=a`animation: ${La} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Ka=a`animation: ${Ra} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;a`animation: ${za} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var qa=a`animation: ${Ba} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ja=a`animation: ${Va} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ya=a`animation: ${Ha} 140ms ease-out;`,Xa=a`animation: ${Ua} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Za({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,E.useState)([]),s=(0,E.useRef)(void 0);if((0,E.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,E.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,P.jsx)(so,{},`group-rule-${i}`)),n.push((0,P.jsx)(oo,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,P.jsx)(so,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,P.jsxs)(ro,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,P.jsx)(io,{children:e.loading?(0,P.jsx)(co,{}):e.icon}),(0,P.jsx)(ao,{children:e.label}),a?(0,P.jsx)(fi,{size:12}):e.checked&&(0,P.jsx)(bi,{size:12})]},`${e.label}-${i}`))}),n};return(0,Pa.createPortal)((0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Qa,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)($a,{children:r.map((e,t)=>(0,P.jsxs)(eo,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,P.jsx)(to,{children:e.icon}),(0,P.jsx)(no,{children:e.label})]},`${e.label}-${t}`))}),(0,P.jsx)(so,{})]}),m(n,0)]}),a.map((e,t)=>(0,P.jsx)(Qa,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Qa=_.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Fa}
    ${Ga}
    transform-origin: top left;
`,$a=_.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,eo=_.button`
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
`,to=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,no=_.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ro=_.button`
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
`,io=_.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,ao=_.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,oo=_.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,so=_.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,co=_.span`
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
`;function lo({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:u,onDelete:d,onCopy:f,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:_=!1,onRefresh:y,onAddToTray:b,onAddFavorite:x,onRemoveFavorite:S,favoritePaths:ee,onExtractArchive:te,allowCompression:ne=!1,onCompressTo:re,onArchiveCreated:C}){let w=I(),ie=Na(),T=p(t),[ae,D]=(0,E.useState)({verbs:[],safe:!0,loading:!1}),[oe,O]=(0,E.useState)({recommended:[],other:[],loading:!1}),[se,k]=(0,E.useState)(null),A=(0,E.useRef)(0),j=(0,E.useRef)(0),M=e?.paths.length===1,ce=e?.background?t?[t]:[]:e?.paths??[],le=e?.background?t||null:M&&n?.isDirectory?n.path:null;if((0,E.useEffect)(()=>{if(!e){D({verbs:[],safe:!0,loading:!1}),O({recommended:[],other:[],loading:!1});return}let t=++A.current;D({verbs:[],safe:!0,loading:ce.length>0&&!T}),ce.length>0&&!T&&Rt(ce).then(e=>{A.current===t&&D({...e,loading:!1})},()=>{A.current===t&&D({verbs:[],safe:!0,loading:!1})});let r=++j.current;!T&&M&&n?(O({recommended:[],other:[],loading:!0}),W(n.path).then(e=>{j.current===r&&O({...e,loading:!1})},()=>{j.current===r&&O({recommended:[],other:[],loading:!1})})):O({recommended:[],other:[],loading:!1})},[e,M,n?.path,n?.isDirectory,ce.length,T]),(0,E.useEffect)(()=>{if(!e||T||!le){k(null);return}let t=!0;return Dt(le).then(e=>{t&&k(e)},()=>{t&&k(null)}),()=>{t=!1}},[e,le,T]),!e)return null;let N=[],ue=[],de=new Set((ee??[]).map(l)),fe=e.background?t?[t]:[]:e.paths,F=fe.length>0&&fe.every(e=>de.has(l(e))),pe=()=>n?L(n.path,n.isDirectory):`Archive`,L=(e,t)=>{let n=v(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},me=async(e,n=pe())=>{let r=await Bt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?C?.(r.path,!0):Sa(r.error??w(`Could not create the archive.`))},he=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},ge=async()=>{if(!le||se===null)return;let e=await Ot(le,!se);e.ok?(k(e.enabled),y?.()):Sa(e.error??w(`Could not change the case sensitivity.`))},R=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await kt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await kt(e,t,`${a}\\${fo(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?y?.():Sa(o.error??w(`Could not create the link.`))},_e=async e=>{if(!n)return;let r=await _a(t);r&&await R(e,n.path,r,v(n.path),e.endsWith(`-copy`))},ve=async e=>{let n=ie?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=l(a)===l(t);await R(n,r.path,t,v(r.path),i&&!o)}},ye=async()=>{let t=(await St(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Ma({paths:t})},z=()=>{let e=ie?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:w(`Cancel selected link`),icon:(0,P.jsx)(xi,{size:14}),onSelect:()=>Ma(null)},...t?[{label:w(`Hard link`),icon:(0,P.jsx)(ii,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`hard`)}]:[],{label:w(`Symbolic link`),icon:(0,P.jsx)(ii,{size:14}),separatorBefore:!t,onSelect:()=>void ve(`symbolic-file`)},...n?[{label:w(`Directory junction`),icon:(0,P.jsx)(ri,{size:14}),onSelect:()=>void ve(`junction`)},{label:w(`Smart copy`),icon:(0,P.jsx)(oa,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void ve(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void ve(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,P.jsx)(oa,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void ve(`symbolic-copy`)}]:[]]};if(e.background){if(h&&ue.push({label:w(`New folder`),icon:(0,P.jsx)(li,{size:16}),shortcut:qt(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:w(`Folder`),icon:(0,P.jsx)(ri,{size:14}),onSelect:()=>h(!1)}),T||e.push({label:w(`Case-sensitive folder`),icon:(0,P.jsx)(aa,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...Ta.map((e,t)=>({label:`${w(e.label)} (${e.extension})`,icon:(0,P.jsx)(ii,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),N.push({label:w(`New`),icon:(0,P.jsx)(li,{size:14}),children:e,onSelect:()=>void 0})}if(T||N.push({label:w(`Create link`),icon:(0,P.jsx)(la,{size:14}),disabled:!ie,children:z(),onSelect:()=>void 0}),_)return(0,P.jsx)(Za,{items:N,onClose:a,quick:ue,x:e.x,y:e.y});!T&&o&&N.push({label:w(`Open in new tab`),icon:(0,P.jsx)(li,{size:14}),onSelect:()=>o(t,!0)}),N.push({label:w(`Copy as path`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void he([t])}),b&&N.push({label:w(`Add to file tray`),icon:(0,P.jsx)(ta,{size:14}),onSelect:()=>b([t])}),!T&&(F?S:x)&&N.push({label:w(F?`Remove from favorites`:`Add to favorites`),icon:F?(0,P.jsx)(ia,{size:14}):(0,P.jsx)(ra,{size:14}),onSelect:()=>F?S?.([t]):x?.([t])}),!T&&se!==null&&N.push({label:w(`Case-sensitive names`),icon:(0,P.jsx)(aa,{size:14}),checked:se,onSelect:()=>void ge()}),!T&&ne&&(N.push({label:w(`Open in Terminal`),icon:(0,P.jsx)($i,{size:14}),onSelect:()=>void Nt(t)}),N.push({label:w(`Show in Explorer`),icon:(0,P.jsx)(ri,{size:14}),separatorBefore:!0,onSelect:()=>void Lt(t)})),m&&ue.push({label:w(`Paste`),icon:(0,P.jsx)(ca,{size:16}),disabled:!i,shortcut:qt(r.paste),onSelect:()=>m(t)}),T||ue.push({label:w(`Properties`),icon:(0,P.jsx)(pi,{size:16}),shortcut:qt(r.properties),onSelect:()=>void jt([t])})}else{if(o&&N.push({label:w(`Open`),icon:(0,P.jsx)(di,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&N.push({label:w(`Open in new tab`),icon:(0,P.jsx)(li,{size:14}),onSelect:()=>o(n.path,!0)}),m&&N.push({label:w(`Paste into folder`),icon:(0,P.jsx)(ca,{size:14}),disabled:!i,onSelect:()=>m(n.path)}),T||N.push({label:w(`Open in Terminal`),icon:(0,P.jsx)($i,{size:14}),onSelect:()=>void Nt(n.path)})),!T&&M&&n&&!n.isDirectory&&c(n.path)&&te&&N.push({label:w(`Extract archive`),icon:(0,P.jsx)(Ai,{size:14}),separatorBefore:!0,children:[{label:w(`Extract here`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>te(n.path,`here`)},{label:w(`Extract to a folder named after the archive`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>te(n.path,`named`)},{label:w(`Auto extract to the current folder`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>te(n.path,`auto`)},{label:w(`Extract to…`),icon:(0,P.jsx)(ri,{size:14}),separatorBefore:!0,onSelect:()=>te(n.path,`choose`)}],onSelect:()=>void 0}),!T&&M&&n){let e=[];if(oe.loading)e.push({label:w(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of oe.recommended)e.push({label:t.name,group:w(`Suggested apps`),icon:t.icon?(0,P.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,P.jsx)(Mi,{size:14}),onSelect:()=>void Pt(n.path,t.path).then(e=>{e||Mt(n.path)})});for(let t of oe.other)e.push({label:t.name,group:w(`Other apps`),icon:t.icon?(0,P.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,P.jsx)(Mi,{size:14}),onSelect:()=>void Pt(n.path,t.path).then(e=>{e||Mt(n.path)})})}e.push({label:w(`Choose another app…`),icon:(0,P.jsx)(Mi,{size:14}),separatorBefore:!0,onSelect:()=>void Mt(n.path)}),N.push({label:w(`Open with`),icon:(0,P.jsx)(Mi,{size:14}),children:e,onSelect:()=>void Mt(n.path)})}if(T||N.push({label:w(`Compress`),icon:(0,P.jsx)(Ai,{size:14}),separatorBefore:!0,children:[{label:w(`Compress to ZIP`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>void me(e.paths)},{label:w(`Compress to…`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>re?.(e.paths,pe())}],onSelect:()=>void 0}),!T&&(e?.paths.length??0)>0){let e=[{label:w(`Select link source`),icon:(0,P.jsx)(la,{size:14}),onSelect:()=>void ye()},...ie?[{label:w(`Cancel selected link`),icon:(0,P.jsx)(xi,{size:14}),onSelect:()=>Ma(null)}]:[],...M&&n?n.isDirectory?[{label:w(`Symbolic link`),icon:(0,P.jsx)(ri,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-folder`)},{label:w(`Directory junction`),icon:(0,P.jsx)(ri,{size:14}),onSelect:()=>void _e(`junction`)},{label:w(`Smart copy`),icon:(0,P.jsx)(oa,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void _e(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void _e(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,P.jsx)(oa,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void _e(`symbolic-copy`)}]:[{label:w(`Symbolic link`),icon:(0,P.jsx)(ii,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-file`)},{label:w(`Hard link`),icon:(0,P.jsx)(ii,{size:14}),onSelect:()=>void _e(`hard`)}]:[]];N.push({label:w(`Create link`),icon:(0,P.jsx)(la,{size:14}),children:e,onSelect:()=>void 0})}!T&&n?.isDirectory&&se!==null&&N.push({label:w(`Case-sensitive names`),icon:(0,P.jsx)(aa,{size:14}),checked:se,onSelect:()=>void ge()}),N.push({label:w(`Copy as path`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void he(e.paths)}),b&&N.push({label:w(`Add to file tray`),icon:(0,P.jsx)(ta,{size:14}),onSelect:()=>b(e.paths)}),!T&&(F?S:x)&&N.push({label:w(F?`Remove from favorites`:`Add to favorites`),icon:F?(0,P.jsx)(ia,{size:14}):(0,P.jsx)(ra,{size:14}),onSelect:()=>F?S?.(fe):x?.(fe)}),T||N.push({label:w(`Show in Explorer`),icon:(0,P.jsx)(ri,{size:14}),separatorBefore:!0,onSelect:()=>void Lt(fe[0])}),f&&ue.push({label:w(`Cut`),icon:(0,P.jsx)(sa,{size:16}),shortcut:qt(r.cut),onSelect:()=>f(e.paths,!0)},{label:w(`Copy`),icon:(0,P.jsx)(oa,{size:16}),shortcut:qt(r.copy),onSelect:()=>f(e.paths,!1)}),M&&n&&u&&ue.push({label:w(`Rename`),icon:(0,P.jsx)(Bi,{size:16}),shortcut:qt(r.rename),onSelect:()=>u(n.path)}),d&&ue.push({label:w(`Delete`),icon:(0,P.jsx)(yi,{size:16}),danger:!0,shortcut:qt(r.delete),onSelect:()=>d(e.paths)}),T||ue.push({label:w(`Properties`),icon:(0,P.jsx)(pi,{size:16}),shortcut:qt(r.properties),onSelect:()=>void jt(e.paths)})}if(ae.loading)N.push({label:w(`More actions`),icon:(0,P.jsx)(Mi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(ae.verbs.length>0){let e={items:[],children:new Map};for(let t of ae.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,P.jsx)(uo,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void zt(ce,ae.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];N.push({label:w(ae.safe?`More actions`:`More actions (extensions)`),icon:(0,P.jsx)(Mi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,P.jsx)(Za,{items:N,onClose:a,quick:ue,x:e.x,y:e.y})}function uo({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,P.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,P.jsx)(di,{size:14});case`document`:return(0,P.jsx)(Ri,{size:14});case`cut`:return(0,P.jsx)(sa,{size:14});case`copy`:return(0,P.jsx)(oa,{size:14});case`paste`:return(0,P.jsx)(ca,{size:14});case`trash`:return(0,P.jsx)(yi,{size:14});case`pencil`:return(0,P.jsx)(Bi,{size:14});case`gear`:return(0,P.jsx)(pi,{size:14});case`star`:return(0,P.jsx)(qi,{size:14});case`pin`:return(0,P.jsx)(mi,{size:14});case`executable`:return(0,P.jsx)(Mi,{size:14});case`share`:return(0,P.jsx)(la,{size:14});case`arrow`:return(0,P.jsx)(di,{size:14});default:return(0,P.jsx)(wi,{size:14})}}function fo(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function po({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=I(),[l,u]=(0,E.useState)(null),d=(0,E.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,E.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(mo,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,P.jsx)(ho,{children:f?.label??``}):(0,P.jsx)(go,{children:a}),a===void 0&&(0,P.jsx)(_o,{children:(0,P.jsx)(fi,{size:11})})]}),l&&(0,Pa.createPortal)((0,P.jsx)(vo,{"aria-label":c(`Options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,P.jsxs)(yo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,P.jsx)(bo,{children:t.label}),t.value===e&&(0,P.jsx)(bi,{size:11})]},t.value))}),document.body)]})}var mo=_.button`
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
`,ho=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,go=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,_o=_.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,vo=_.div`
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
    ${Ga}
`,yo=_.button`
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
`,bo=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xo=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],So=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],Co=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],wo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],To=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function Eo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=I(),a=(0,E.useRef)(null),[o,s]=(0,E.useState)(e),[c,l]=(0,E.useState)(t),[u,d]=(0,E.useState)(`zip`),[f,p]=(0,E.useState)(`5`),[m,h]=(0,E.useState)(`default`),[g,_]=(0,E.useState)(`none`),[v,y]=(0,E.useState)(``),[b,x]=(0,E.useState)(`0`),[S,ee]=(0,E.useState)(!1);(0,E.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let te=xo.find(e=>e.value===u)??xo[0],ne=u===`zip`||u===`zipx`,re=g!==`none`,C=ne||u===`7z`,w=u===`zip`||u===`7z`,ie=async()=>{if(S||!c.trim()||!o||re&&v.length===0)return;ee(!0);let e=await r({directory:o,name:c.trim(),format:u,level:te.level?Number(f):0,method:ne?m:null,encryption:C?g:`none`,password:re?v:void 0,splitSize:w?Number(b):0});ee(!1),e&&n()};return(0,Pa.createPortal)((0,P.jsx)(Do,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,P.jsxs)(Oo,{"aria-modal":`true`,role:`dialog`,children:[(0,P.jsx)(ko,{children:i(`Compress to…`)}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Archive name`)}),(0,P.jsx)(Mo,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ie()}}),(0,P.jsx)(No,{children:te.extension})]}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Format`)}),(0,P.jsx)(po,{onChange:e=>d(e),options:xo.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Method`)}),(0,P.jsx)(po,{disabled:!ne,onChange:h,options:So.map(e=>({...e,label:i(e.label)})),value:ne?m:`default`,width:236,zIndex:3700})]}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Encryption`)}),(0,P.jsx)(po,{disabled:!C,onChange:e=>{_(e),e===`none`&&y(``)},options:Co.map(e=>({...e,label:i(e.label)})),value:C?g:`none`,width:236,zIndex:3700})]}),re&&(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Password`)}),(0,P.jsx)(Mo,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Split volumes`)}),(0,P.jsx)(po,{disabled:!w,onChange:x,options:wo.map(e=>({...e,label:i(e.label)})),value:w?b:`0`,width:236,zIndex:3700})]}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Compression level`)}),(0,P.jsx)(po,{disabled:!te.level,onChange:p,options:To.map(e=>({...e,label:i(e.label)})),value:te.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,P.jsxs)(Ao,{$stack:!0,children:[(0,P.jsx)(jo,{children:i(`Destination`)}),(0,P.jsxs)(Po,{children:[(0,P.jsx)(Fo,{title:o,children:o}),(0,P.jsx)(Lo,{disabled:S,onClick:()=>void _a(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,P.jsxs)(Io,{children:[(0,P.jsx)(Lo,{disabled:S,onClick:n,type:`button`,children:i(`Cancel`)}),(0,P.jsx)(Ro,{disabled:S||!c.trim()||re&&v.length===0,onClick:()=>void ie(),type:`button`,children:i(S?`Compressing…`:`Compress`)})]})]})}),document.body)}var Do=_.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ya}
`,Oo=_.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wa}
`,ko=_.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ao=_.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,jo=_.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Mo=_.input`
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
`,No=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Po=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Fo=_.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Io=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Lo=_.button`
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
`,Ro=_(Lo)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function zo({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=I(),c=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Pa.createPortal)((0,P.jsx)(Bo,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,P.jsxs)(Vo,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(Ho,{children:t}),(0,P.jsx)(Uo,{children:n}),(0,P.jsxs)(Wo,{children:[(0,P.jsx)(Go,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,P.jsx)(Go,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Bo=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ya}
`,Vo=_.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wa}
`,Ho=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Uo=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Wo=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Go=_.button`
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
`,Ko=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),qo=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Jo=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Yo=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Xo({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=I(),[l,u]=(0,E.useState)(!1),[d,f]=(0,E.useState)(!1),[p,m]=(0,E.useState)(!1),[h,g]=(0,E.useState)(0),[_,v]=(0,E.useState)(0),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(!1),[ee,te]=(0,E.useState)(!1),ne=(0,E.useRef)(null),re=(0,E.useRef)(null),C=(0,E.useRef)(null),w=(0,E.useRef)(null),[ie,T]=(0,E.useState)(()=>{let e=Rn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),ae=e?.path??null,D=dn(ae),oe=e?Zo(e.name):``,O=!!e&&!e.isDirectory&&Ko.has(oe),se=!!e&&!e.isDirectory&&qo.has(oe),k=!!e&&!e.isDirectory&&Jo.has(oe),A=!!e&&!e.isDirectory&&Yo.has(oe),j=!!e&&!e.isDirectory&&oe===`pdf`,M=hn(O?D:null,512,e?.modified??0),ce=gn(k?D:null,e?.modified??0,oe),le=gn(O||se?D:null,e?.modified??0,oe),N=_n(j?D:null,e?.modified??0),ue=un(!O&&!se&&!k&&!A&&!j?D:null,e?.isDirectory??!1);if((0,E.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),te(!1)},[ae]),(0,E.useEffect)(()=>{if(!D||!A){b(null),S(!1);return}let e=!0;return S(!0),b(null),Ee(D).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`Could not read this file.`)}),S(!1))}),()=>{e=!1}},[D,A]),!e&&!s)return null;let de=e=>{C.current={x:e.clientX,width:re.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},fe=e=>{let t=C.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},F=e=>{C.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},pe=e=>{w.current={y:e.clientY,height:ie},e.currentTarget.setPointerCapture(e.pointerId)},L=e=>{let t=w.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));T(n),zn(`yafm.preview.media.height`,n)},me=e=>{w.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,P.jsxs)($o,{$open:r,children:[r&&(0,P.jsx)(es,{onPointerDown:de,onPointerMove:fe,onPointerUp:F,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,P.jsx)(ts,{ref:re,style:{width:r?t:0},children:(0,P.jsxs)(ns,{children:[(0,P.jsx)(ri,{size:56}),(0,P.jsx)(`span`,{children:s})]})})]});let he=()=>{let e=ne.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,P.jsxs)($o,{$open:r,children:[r&&(0,P.jsx)(es,{onPointerDown:de,onPointerMove:fe,onPointerUp:F,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(ts,{ref:re,style:{width:r?t:0},children:[(0,P.jsx)(rs,{style:{height:ie},children:O&&le&&!l?(0,P.jsxs)(as,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,P.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:he,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:M??void 0,preload:`metadata`,ref:ne,src:le}),(0,P.jsx)(os,{$visible:!d,onClick:he,title:c(`Play`),type:`button`,children:(0,P.jsx)(ua,{size:28})}),(0,P.jsxs)(ss,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,P.jsxs)(cs,{children:[(0,P.jsx)(`span`,{children:Qo(_)}),(0,P.jsx)(`span`,{children:Qo(h)})]}),(0,P.jsx)(ls,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=ne.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):se&&le?(0,P.jsx)(`audio`,{controls:!0,src:le}):k&&ce?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:ce}):j&&N&&!ee?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>te(!0),src:N}):j?(0,P.jsx)(ii,{size:64}):A?(0,P.jsx)(us,{children:x||!y?(0,P.jsx)(fs,{children:c(`Loading…`)}):y.error?(0,P.jsx)(fs,{children:y.error}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ds,{children:y.text}),y.truncated&&(0,P.jsx)(fs,{children:c(`Showing the first 256 KB.`)})]})}):O&&M?(0,P.jsx)(`img`,{alt:``,src:M}):ue?(0,P.jsx)(`img`,{alt:``,src:ue}):e.isDirectory?(0,P.jsx)(ri,{size:64}):(0,P.jsx)(ii,{size:64})}),(0,P.jsx)(is,{onDoubleClick:()=>{T(210),zn(`yafm.preview.media.height`,210)},onPointerDown:pe,onPointerMove:L,onPointerUp:me,title:c(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(ps,{children:[(0,P.jsx)(ms,{title:e.path,children:e.name}),o&&(0,P.jsx)(hs,{children:o}),(0,P.jsx)(gs,{children:e.fields.map(e=>(0,P.jsxs)(_s,{children:[(0,P.jsx)(vs,{children:e.label}),(0,P.jsx)(ys,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Zo(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Qo(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var $o=_.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,es=_.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ts=_.aside`
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
`,ns=_.div`
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
`,rs=_.div`
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
`,is=_.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,as=_.div`
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
`,os=_.button`
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
`,ss=_.div`
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
`,cs=_.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,ls=_.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,us=_.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,ds=_.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,fs=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,ps=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,ms=_.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,hs=_.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,gs=_.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,_s=_.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,vs=_.span`
    color: var(--text-muted);
`,ys=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,bs=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],xs=[...bs],Ss={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},Cs={folder:e=>(0,P.jsx)(ri,{size:e}),home:e=>(0,P.jsx)(ni,{size:e}),desktop:e=>(0,P.jsx)(Vi,{size:e}),documents:e=>(0,P.jsx)(Hi,{size:e}),downloads:e=>(0,P.jsx)(Ui,{size:e}),pictures:e=>(0,P.jsx)(Wi,{size:e}),music:e=>(0,P.jsx)(Gi,{size:e}),videos:e=>(0,P.jsx)(Ki,{size:e}),drive:e=>(0,P.jsx)(ai,{size:e}),image:e=>(0,P.jsx)(Di,{size:e}),video:e=>(0,P.jsx)(Oi,{size:e}),audio:e=>(0,P.jsx)(ki,{size:e}),text:e=>(0,P.jsx)(Ti,{size:e}),code:e=>(0,P.jsx)(Ei,{size:e}),clock:e=>(0,P.jsx)(_i,{size:e}),star:e=>(0,P.jsx)(qi,{size:e}),file:e=>(0,P.jsx)(ii,{size:e}),archive:e=>(0,P.jsx)(Ai,{size:e}),pdf:e=>(0,P.jsx)(ji,{size:e}),executable:e=>(0,P.jsx)(Mi,{size:e}),font:e=>(0,P.jsx)(Ni,{size:e}),database:e=>(0,P.jsx)(Pi,{size:e}),config:e=>(0,P.jsx)(Fi,{size:e}),spreadsheet:e=>(0,P.jsx)(Ii,{size:e}),presentation:e=>(0,P.jsx)(Li,{size:e}),document:e=>(0,P.jsx)(Ri,{size:e}),app:e=>(0,P.jsx)(wi,{size:e}),gear:e=>(0,P.jsx)(pi,{size:e}),pin:e=>(0,P.jsx)(mi,{size:e}),trash:e=>(0,P.jsx)(yi,{size:e}),overview:e=>(0,P.jsx)(zi,{size:e}),book:e=>(0,P.jsx)(Ji,{size:e}),briefcase:e=>(0,P.jsx)(Yi,{size:e}),cloud:e=>(0,P.jsx)(Xi,{size:e}),gamepad:e=>(0,P.jsx)(Zi,{size:e}),camera:e=>(0,P.jsx)(Qi,{size:e}),terminal:e=>(0,P.jsx)($i,{size:e}),server:e=>(0,P.jsx)(ea,{size:e}),package:e=>(0,P.jsx)(ta,{size:e}),globe:e=>(0,P.jsx)(na,{size:e}),heart:e=>(0,P.jsx)(ra,{size:e}),share:e=>(0,P.jsx)(ea,{size:e}),favorites:e=>(0,P.jsx)(ra,{size:e})};function ws(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ts(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??bs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||xs.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=ws(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${Ss[n]??n}${Es(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Es(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Ds({panel:e,size:t=16}){let n=J(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,P.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Cs[e.icon]:void 0;if(r)return(0,P.jsx)(P.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,P.jsx)(ri,{size:t});case`recent`:return(0,P.jsx)(_i,{size:t});case`frequent`:return(0,P.jsx)(qi,{size:t});case`drives`:return(0,P.jsx)(ai,{size:t});case`home`:return(0,P.jsx)(ni,{size:t});case`share`:return(0,P.jsx)(ea,{size:t});case`favorites`:return(0,P.jsx)(ra,{size:t});default:return(0,P.jsx)(ri,{size:t})}}function Os({place:e,size:t=18}){let n=J(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,P.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Cs[e.icon]?(0,P.jsx)(P.Fragment,{children:Cs[e.icon](t)}):(0,P.jsx)(ri,{size:t})}var ks=`#64748b`;function As(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function js({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=I(),[c,l]=(0,E.useState)(``),[u,d]=(0,E.useState)(`#2dd4bf`),f=(0,E.useRef)(null);(0,E.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Pa.createPortal)((0,P.jsxs)(Ms,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,P.jsxs)(Ns,{children:[(0,P.jsx)(`span`,{children:s(`Tags`)}),(0,P.jsx)(Ps,{onClick:o,title:s(`Close`),type:`button`,children:(0,P.jsx)(xi,{size:11})})]}),(0,P.jsxs)(Fs,{children:[p.length===0&&(0,P.jsx)(zs,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,P.jsxs)(Is,{children:[(0,P.jsx)(Ls,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,P.jsxs)(Rs,{$color:t,$ink:As(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,P.jsx)(bi,{size:11}),(0,P.jsx)(`span`,{children:e})]})]},e)})]}),(0,P.jsxs)(Bs,{children:[(0,P.jsx)(Ls,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,P.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,P.jsx)(Vs,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var Ms=_.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${Wa}
`,Ns=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Ps=_.button`
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
`,Fs=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Is=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ls=_.input`
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
`,Rs=_.button`
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
`,zs=_.span`
    font-size: 11px;
    color: var(--text-muted);
`,Bs=_.div`
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
`,Vs=_.button`
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
`,Hs={file:ii,folder:ri,text:Ti,code:Ei,image:Di,video:Oi,audio:ki,archive:Ai,pdf:ji,executable:Mi,font:Ni,database:Pi,config:Fi,spreadsheet:Ii,presentation:Li,document:Ri},Us={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Ws(e){let t=e.lastIndexOf(`.`);return t>0?Us[e.slice(t).toLowerCase()]??`file`:`file`}function Gs({name:e,size:t}){let n=Hs[e??`file`]??ii;return(0,P.jsx)(n,{size:t})}function Ks({path:e,name:t,isDirectory:n,size:r=18}){let i=un(e,n);return i?(0,P.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,P.jsx)(ri,{size:r}):(0,P.jsx)(Gs,{name:Ws(t),size:r})}var qs=`application/x-yafm-paths`,Js=[qs,`text/uri-list`];function Ys(e){return e?.types.some(e=>Js.includes(e.toLowerCase()))??!1}function Xs(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(qs);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Qs).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Zs=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Qs(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Zs?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function $s(e,t,n=!0){e.dataTransfer.setData(qs,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function ec({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=I(),[m,h]=(0,E.useState)(()=>new Set),[g,_]=(0,E.useState)(!1),v=(0,E.useRef)(null),y=(0,E.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),b=(0,E.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),x=(0,E.useRef)(null);if((0,E.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=x.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Ys(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Xs(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let S=new Set([...e,...t].map(e=>e.path)),ee=S.size>0&&[...S].every(e=>m.has(e)),te=S.size,ne=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},re=()=>{h(ee?new Set:S)},C=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},w=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},T=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},ae=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},D=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},oe=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of b)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},O=(e,t)=>{let n=m.has(e.path);return(0,P.jsxs)(fc,{$checked:n,draggable:!0,onClick:()=>ne(e.path),onDragStart:r=>{$s(r,n&&m.size>0?[...new Set([...y,...b].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,P.jsx)(pc,{$checked:n,onClick:t=>{t.stopPropagation(),ne(e.path)},type:`button`,children:n&&(0,P.jsx)(bi,{size:8})}),(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,P.jsxs)(mc,{children:[(0,P.jsx)(hc,{children:e.name}),(0,P.jsx)(gc,{children:ie(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},se=e=>{Ys(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,P.jsxs)(tc,{$dragging:g,"data-tray":`true`,ref:x,style:{left:i.x,top:i.y},onDragEnter:se,onDragOver:se,onDrop:e=>{let{paths:t}=Xs(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,P.jsxs)(nc,{onPointerDown:C,onPointerMove:w,onPointerUp:T,children:[(0,P.jsxs)(rc,{children:[(0,P.jsx)(ta,{size:13}),p(`Tray`),(0,P.jsx)(ic,{children:te})]}),(0,P.jsxs)(ac,{onPointerDown:e=>e.stopPropagation(),children:[(0,P.jsx)(oc,{onClick:re,title:p(ee?`Select none`:`Select all`),type:`button`,children:p(ee?`None`:`All`)}),(0,P.jsx)(oc,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,P.jsx)(sc,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]})]}),(0,P.jsxs)(cc,{children:[(0,P.jsxs)(uc,{children:[p(`In this app`),(0,P.jsx)(ic,{children:e.length})]}),e.length===0&&(0,P.jsx)(lc,{children:p(`Drag files or folders here`)}),e.map(e=>O(e,!0)),t.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(uc,{$clipboard:!0,children:[p(`Clipboard`),(0,P.jsx)(ic,{children:t.length}),n&&(0,P.jsx)(dc,{children:p(`Cut`)})]}),t.map(e=>O(e,n))]})]}),(0,P.jsxs)(_c,{children:[(0,P.jsx)(vc,{$plain:!0,disabled:y.length===0,onClick:D,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,P.jsx)(vc,{disabled:m.size===0||!a,onClick:oe,type:`button`,children:p(`Move here`)}),(0,P.jsx)(vc,{$danger:!0,disabled:y.length===0,onClick:ae,type:`button`,children:p(`Remove`)})]})]})}var tc=_.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Fa}
    ${Wa}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,nc=_.div`
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
`,rc=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,ic=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,ac=_.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,oc=_.button`
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
`,sc=_.button`
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
`,cc=_.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,lc=_.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,uc=_.div`
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
`,dc=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,fc=_.div`
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
`,pc=_.button`
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
`,mc=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,hc=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gc=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_c=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,vc=_.button`
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
`,yc={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function bc(){return N.available?await N.request(`share.list`):yc}async function xc(e,t){return N.available?await N.request(`share.add`,{path:e,mode:t}):yc}async function Sc(e){return N.available?await N.request(`share.remove`,{id:e}):yc}async function Cc(e,t){return N.available?await N.request(`share.mode`,{id:e,mode:t}):yc}async function wc(){return N.available?(await N.request(`share.peers`)).peers??[]:[]}async function Tc(){return N.available?(await N.request(`share.peers.refresh`)).peers??[]:[]}async function Ec(e,t){N.available&&await N.request(`share.pair.start`,{host:e,port:t})}async function Dc(e,t){N.available&&await N.request(`share.pair.respond`,{requestId:e,accept:t})}async function Oc(e,t){N.available&&await N.request(`share.port`,{mode:t,port:e})}var kc=`yafm://share/`;function Ac(e){return e.toLowerCase().startsWith(kc)}function jc(e){if(!Ac(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Mc(e,t,n=``){let r=`${kc}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Nc(e){let t=jc(e);if(!t||!N.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await N.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Mc(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Mc(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Pc(e){let t=jc(e);if(!t||!N.available)throw Error(`This shared file is only available in the desktop app.`);let n=await N.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Fc(e){await Se(await Pc(e))}var Ic=new Map,Lc=new Set,Rc=0;function zc(){Rc+=1;for(let e of Lc)e()}function Bc(e,t){t?Ic.set(e,t):Ic.delete(e),zc()}function Vc(e){return Ic.has(e)}function Hc(e,t,n){Ic.get(e)?.(t,n)}function Uc(e){return Lc.add(e),()=>Lc.delete(e)}function Wc(){return Rc}function Gc(e){return(0,E.useSyncExternalStore)(Uc,Wc,Wc),{available:Vc(e),open:(t,n)=>Hc(e,t,n)}}function Kc(e){return[...Ic.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function qc(e){return(0,E.useSyncExternalStore)(Uc,Wc,Wc),{available:Kc(e).length>0,open:(t,n)=>{let r=Kc(e).at(-1);r&&Hc(r,t,n)}}}var Jc=60,Yc=300,Xc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Zc=new Set,Qc=`yafm.columnWidths`,$c=`yafm.reset-column-widths`,el=64,tl=720,nl=160,rl=190,il=120;function al({listing:e,loading:n,error:r,find:i=yn,view:a,showImages:s,imageStripHeight:c=rl,onImageStripHeight:l,onSort:u,onSetTags:d,onOpen:p,onOpenFile:m,showCheckboxes:h=!0,openOnSingleClick:g=!1,shortcuts:_=Ht,enableShortcuts:b=!0,refreshToken:x=0,onRefresh:S,onRename:ee,onClipboardChanged:te,cutPaths:ne=Zc,onTransfer:re,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ie,favoritePaths:T,onExtractArchive:ae,onPaste:D,confirmDelete:oe=!1,previewVideoAudio:O=!1,previewVideoAutoplay:se=!1,showDetails:k=!0,onPreviewInfo:A,onActivate:j,groupOf:M,onGridScroll:ce,gridFooter:le,allowBackgroundMenu:N=!0,readOnly:ue=!1,onSelectionChange:de,onSelectionCountChange:fe,selectionMenuRequest:F,selectionMenuId:pe,singleSelect:L=!1,pendingRename:me=null,pendingRenameToken:he=0,selectMatchesToken:ge=0}){let R=I(),_e=Fn(),ve=(0,E.useRef)(null),ye=(0,E.useRef)(null),z=(0,E.useRef)(null),B=(0,E.useRef)(null),[be,xe]=(0,E.useState)(Yc),[Se,Ce]=(0,E.useState)({top:0,height:640}),we=(0,E.useRef)(null),V=(0,E.useRef)(null),[Te,Ee]=(0,E.useState)(null),[De,Oe]=(0,E.useState)(c),[ke,Ae]=(0,E.useState)(()=>new Set),[je,Me]=(0,E.useState)(()=>Bn(Qc)??{}),Ne=(0,E.useRef)(ke),H=(0,E.useRef)([]);Ne.current=ke,(0,E.useEffect)(()=>de?.([...ke]),[ke,de]),(0,E.useEffect)(()=>fe?.(ke.size),[ke,fe]),(0,E.useEffect)(()=>{let e=F;if(!e||e.token===Ie.current)return;Ie.current=e.token;let t=[...Ne.current];t.length!==0&&(Fe({x:e.x,y:e.y,paths:t,background:!1}),yt().then(Xe,()=>Xe(!1)))},[F]);let[Pe,Fe]=(0,E.useState)(null),Ie=(0,E.useRef)(0),[Le,Re]=(0,E.useState)(null),[ze,Be]=(0,E.useState)(null),[Ve,He]=(0,E.useState)(null),Ue=(0,E.useRef)(Ve);Ue.current=Ve;let We=(0,E.useRef)(0),Ge=(0,E.useRef)(j);Ge.current=j;let[Ke,qe]=(0,E.useState)(()=>{let e=Rn(`yafm.preview.width`,320);return e>=220?e:320}),Je=(0,E.useCallback)(e=>{qe(e),zn(`yafm.preview.width`,e)},[]),[Ye,Xe]=(0,E.useState)(!1),Ze=(0,E.useCallback)((e,t)=>{let n=[...Ne.current];n.length!==0&&(Fe({x:e,y:t,paths:n,background:!1}),yt().then(Xe,()=>Xe(!1)))},[]);(0,E.useEffect)(()=>{if(pe)return Bc(pe,ke.size>0?Ze:null),()=>Bc(pe,null)},[pe,ke,Ze]),(0,E.useEffect)(()=>{Ae(new Set),He(null),Fe(null),V.current=null},[e?.path]),(0,E.useEffect)(()=>{Oe(c)},[c]),(0,E.useEffect)(()=>{Ae(new Set),He(null),V.current=null},[x]);let Qe=e=>{we.current={y:e.clientY,height:De},e.currentTarget.setPointerCapture(e.pointerId)},$e=e=>{let t=we.current;if(!t)return;let n=Math.max(il,Math.round(window.innerHeight*.7));Oe(Math.min(n,Math.max(il,t.height+t.y-e.clientY)))},et=e=>{we.current&&(we.current=null,e.currentTarget.releasePointerCapture(e.pointerId),l?.(De))},tt=()=>{Oe(rl),l?.(rl)},nt=i.query.length>0,rt=(0,E.useMemo)(()=>Xc.filter(e=>a.columns?.includes(e.id)),[a.columns]),it=a.columns?.includes(`linkTarget`)??!1,at=(0,E.useCallback)(e=>Math.min(tl,Math.max(el,je[e.id]??e.width)),[je]),ot=(0,E.useMemo)(()=>`minmax(160px, 1fr) ${rt.map(e=>`${at(e)}px`).join(` `)}`.trim(),[rt,at]),st=(0,E.useRef)(null),ct=(0,E.useRef)(null),lt=()=>Math.floor(ct.current?.getBoundingClientRect().width??nl),ut=e=>{let t=rt[0];t&&(e.preventDefault(),e.stopPropagation(),st.current={left:{id:t.id,start:at(t)},startX:e.clientX,nameStart:lt()})},dt=(e,t)=>{let n=rt[t],r=rt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),st.current={left:{id:n.id,start:at(n)},right:{id:r.id,start:at(r)},startX:e.clientX,nameStart:0})},ft=e=>Me(t=>{let n={...t};return delete n[e],Vn(Qc,n),n});(0,E.useEffect)(()=>{let e=e=>{let t=st.current;if(!t)return;let n=e.clientX-t.startX;Me(e=>{if(!t.right){let r=Math.max(0,t.nameStart-nl),i=Math.min(Math.min(tl,t.left.start+r),Math.max(el,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(tl,Math.max(el,t.left.start+n)),a=Math.min(Math.min(tl,r-el),Math.max(Math.max(el,r-tl),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{st.current&&(st.current=null,Me(e=>(Vn(Qc,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,E.useEffect)(()=>{let e=()=>Me(()=>(Vn(Qc,{}),{}));return window.addEventListener($c,e),()=>window.removeEventListener($c,e)},[]);let U=(0,E.useMemo)(()=>e?cl(e.entries.map(t=>{let n=t.isDirectory?In(_e,t.fullPath):void 0,r=n?.name||t.name;return{entry:t,place:n,label:r,ranges:nt?bn(r,i):null,tags:e.tags[t.name]??[],cut:ne.has(t.fullPath)}}).filter(e=>!nt||i.mode===`dim`||e.ranges!==null),a,e,R):[],[e?.entries,e?.tags,a.sort===`size`||a.sort===`items`?e?.folderSizes:null,a.sort===`size`||a.sort===`items`?e?.counts:null,nt,i,_e,a.sort,a.sortDescending,R,ne]);H.current=U,(0,E.useEffect)(()=>{ge!==0&&Ae(new Set(H.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[ge]);let pt=Math.max(40,a.iconSize+20),mt=Math.max(0,Math.floor(Se.top/pt)-4),ht=Math.min(U.length,mt+Math.ceil(Se.height/pt)+10),gt=(0,E.useMemo)(()=>U.slice(mt,ht),[U,mt,ht]);(0,E.useEffect)(()=>{let e=B.current;if(!e||a.mode!==`list`)return;let t=()=>Ce(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[a.mode]),(0,E.useEffect)(()=>{Ce(e=>({...e,top:0})),B.current&&(B.current.scrollTop=0)},[e?.path]),(0,E.useEffect)(()=>{if(i.currentPath){if(a.mode===`list`){let e=U.findIndex(e=>e.entry.fullPath===i.currentPath),t=B.current;if(e<0||!t)return;let n=e*pt;(n<t.scrollTop||n+pt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ve.current?.scrollIntoView({block:`nearest`})}},[i.currentPath,a.mode,U,pt]);let _t=(0,E.useMemo)(()=>U.slice(0,be),[U,be]);(0,E.useEffect)(()=>{let e=ye.current;if(!e||e.length===0)return;let n=e.filter(e=>U.some(n=>t(n.entry.fullPath,e)));if(n.length===0)return;ye.current=null;let r=n[0],i=U.findIndex(e=>t(e.entry.fullPath,r));i>=0&&xe(e=>Math.max(e,i+Yc)),Ae(new Set(n)),V.current=r,a.mode===`list`&&B.current&&i>=0?B.current.scrollTop=Math.max(0,i*pt-B.current.clientHeight/2):requestAnimationFrame(()=>ve.current?.scrollIntoView({block:`nearest`}))},[U,pt,a.mode]),(0,E.useEffect)(()=>{xe(Yc)},[e?.path]),(0,E.useEffect)(()=>{if(!i.currentPath)return;let e=U.findIndex(e=>e.entry.fullPath===i.currentPath);e>=0&&xe(t=>Math.max(t,e+Yc))},[i.currentPath,U]);let bt=(0,E.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&xe(e=>Math.min(U.length,e+Yc))},[U.length]),xt=a.mode===`grid`,St=(0,E.useMemo)(()=>{if(!xt)return[];if(!M)return dl(_t,ul);let e=[],t=new Map;for(let n of _t){let r=M(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[_t,xt,M]),Dt=(0,E.useMemo)(()=>s?U.filter(e=>!e.entry.isDirectory&&jn(e.entry.name)):[],[U,s]),Ot=Dt.length,kt=(0,E.useMemo)(()=>Dt.slice(0,Jc),[Dt]),Mt=(0,E.useMemo)(()=>s?dl(kt,ll):[],[kt,s]),W=(0,E.useMemo)(()=>U.map(e=>e.entry.fullPath),[U]),Pt=U.length>0&&ke.size>=U.length,Ft=ke.size>0&&!Pt,It=()=>{L||(Pt?G():Ae(new Set(W)))},Lt=e?.path??``,Rt=(0,E.useCallback)((e,t)=>{if(L){V.current=t,Ae(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Ae(r=>{if(e.shiftKey&&V.current!==null){let e=W.indexOf(V.current),i=W.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(W[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),V.current=t,e}return V.current=t,new Set([t])})},[W,L]),zt=(0,E.useCallback)(e=>{L?(V.current=e,Ae(new Set([e]))):(V.current=e,Ae(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[L]),G=(0,E.useCallback)(()=>{V.current=null,Ae(new Set)},[]);(0,E.useEffect)(()=>{if(he===0||!me||We.current===he||!e?.entries.some(e=>e.fullPath===me))return;We.current=he,V.current=me,Ae(new Set([me])),He({path:me,value:v(me)});let t=U.findIndex(e=>e.entry.fullPath===me),n=B.current;if(!(t<0||!n)){if(a.mode===`list`){let e=t*pt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(me)}"]`)?.scrollIntoView({block:`nearest`})})}},[B,e,me,he,pt,U,a.mode]),(0,E.useEffect)(()=>{if(!Ve)return;let e=U.findIndex(e=>e.entry.fullPath===Ve.path),t=B.current;if(!(e<0||!t)){if(a.mode===`list`){let n=e*pt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ve.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[B,Ve,pt,U,a.mode]);let Vt=(0,E.useCallback)(()=>Fe(null),[]),Ut=(0,E.useCallback)((e,t)=>{e.isDirectory?p(e.fullPath,Gt(t)):m?.(e.fullPath,Gt(t))},[p,m]),Wt=(0,E.useCallback)((e,t,n)=>{Ee({entry:e,x:t,y:n})},[]),qt=(0,E.useRef)(null),Jt=(0,E.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;$s(e,ke.has(n)?[...ke]:[n])},[ke]),Xt=(0,E.useCallback)(e=>{if(!Ys(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);qt.current=t?.dataset.directory===`true`?t.dataset.path??Lt:Lt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Lt]),Zt=(0,E.useCallback)(e=>{if(ue)return;let{paths:t,move:n}=Xs(e),r=qt.current??Lt;qt.current=null,t.length!==0&&re&&(e.preventDefault(),re(t,r,!e.ctrlKey&&n))},[Lt,re,ue]),Qt=(0,E.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),ue||!t&&!N)return;let n=Ne.current;t&&!n.has(t)&&Ae(new Set([t])),t&&(V.current=t);let r=t?n.has(t)?[...n]:[t]:[];Fe({x:e.clientX,y:e.clientY,paths:r,background:!t}),yt().then(Xe,()=>Xe(!1))},[N,Lt]),$t=(0,E.useCallback)(()=>S?.(),[S]),en=(e,t)=>{V.current=e,Ae(new Set([e])),t&&He({path:e,value:v(e)}),$t()},tn=Le&&(0,P.jsx)(Eo,{initialDirectory:Lt,initialName:Le.name,onCancel:()=>Re(null),onCompress:async e=>{let t=await Bt(Le.paths,e);return!t.ok||!t.path?(Sa(t.error??R(`Could not create the archive.`)),!1):(en(t.path,!1),!0)}}),nn=async(e,t=!1)=>{let n=e,r=t;if(e.some(Ac)){let t=[];for(let n of e)if(!Ac(n))t.push(n);else{if(H.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){Sa(R(`Folders on a shared device cannot be copied yet.`));return}try{t.push(await Pc(n))}catch(e){Sa(e instanceof Error?e.message:R(`The file could not be copied.`));return}}n=t,r=!1}await vt(n,r)&&(Xe(!0),te?.())},rn=async e=>{if(!e)return;let t=await Ct(e);t.ok?(ye.current=t.created,$t(),D?.()):Sa(R(`Nothing on the clipboard could be pasted here.`))},an=async(e,t=!1)=>{if(!Lt)return;let n=e===null?await Et(Lt,t):await At(Lt,e);!n.ok||n.path===null?Sa(n.error??R(`Could not create the item.`)):(V.current=n.path,Ae(new Set([n.path])),He({path:n.path,value:v(n.path)}),$t())},on=e=>{Ae(new Set([e.fullPath])),V.current=e.fullPath,He({path:e.fullPath,value:e.name})},sn=(0,E.useCallback)(e=>He(t=>t&&{...t,value:e}),[]),cn=(0,E.useCallback)(()=>He(null),[]),K=(0,E.useCallback)(async()=>{let e=Ue.current;if(He(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=H.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Tt(e.path,t);r.ok?(G(),r.path&&ee?.(e.path,r.path),$t(),window.setTimeout(()=>$t(),250)):Sa(r.error??R(`Could not rename the entry.`))},[G,ee,$t,R]),q=async(e,t=!1)=>{if((t||oe)&&!await ln(e,t))return;let n=await wt(e,t);if(!n.ok&&n.needsPermanent){if(!await ln(e,!0))return;n=await wt(e,!0)}if(n.ok)G(),$t();else{if(n.cancelled)return;Sa(n.error??R(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},ln=(0,E.useCallback)((e,t)=>new Promise(n=>Be({paths:e,permanent:t,resolve:n})),[]),un=(0,E.useCallback)(e=>{Be(t=>(t?.resolve(e),null))},[]);(0,E.useEffect)(()=>{if(!b||Pe)return;let e=e=>{if(Yt(e.target))return;Ge.current?.();let t=Kt(e),n=[...ke],r=n.length===1?U.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(W.length===0)return;e.preventDefault();let n=V.current&&W.includes(V.current)?V.current:ke.size===1?[...ke][0]:null,r=n?W.indexOf(n):-1,i=t===`home`?0:t===`end`?W.length-1:Math.max(0,Math.min(W.length-1,r+(t===`arrowdown`?1:-1))),a=W[i];Ae(new Set([a])),V.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===_.copy?i(()=>{n.length>0&&nn(n)}):t===_.cut?i(()=>{n.length>0&&nn(n,!0)}):t===_.paste?i(()=>void rn(Lt)):t===_.delete?i(()=>{n.length>0&&q(n)}):t===_.deletePermanently?i(()=>{n.length>0&&q(n,!0)}):t===_.selectAll?i(()=>{Ae(new Set(W)),V.current=W[0]??null}):t===_.invertSelection?i(()=>{Ae(new Set(W.filter(e=>!ke.has(e)))),V.current=W[0]??null}):t===_.rename&&r?i(()=>void on(r)):t===_.open&&r?i(()=>{r.isDirectory?p(r.fullPath):m?.(r.fullPath)}):t===_.newFolder||t===`f10`?i(()=>void an(null)):t===_.terminal?i(()=>void Nt(Lt)):t===_.properties&&i(()=>void jt(n.length>0?n:Lt?[Lt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[W,nn,an,Lt,b,Pe,p,m,rn,q,on,U,ke,_]);let dn=ze&&(0,P.jsx)(zo,{confirmLabel:ze.permanent?R(`Delete`):R(`Move`),danger:ze.permanent,message:ze.permanent?R(`Permanently delete {target}? This cannot be undone.`,{target:ze.paths.length===1?R(`this item`):R(`{count} items`,{count:ze.paths.length})}):R(`Move {target} to the recycle bin?`,{target:ze.paths.length===1?R(`this item`):R(`{count} items`,{count:ze.paths.length})}),onCancel:()=>un(!1),onConfirm:()=>un(!0),open:!0,title:ze.permanent?R(`Delete permanently`):R(`Move to the recycle bin`)}),J=(0,E.useMemo)(()=>{if(!e||ke.size===0)return null;let t=W.find(e=>ke.has(e));return t?U.find(e=>e.entry.fullPath===t)?.entry??null:null},[W,e,U,ke]),fn=(0,E.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:v(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:R(`Type`),value:R(`Folder`)},{label:R(`Location`),value:e.parent??`—`},{label:R(`Path`),value:e.path},{label:R(`Size`),value:f(t)},{label:R(`Items`),value:o(R,n,`1 item`,`{count} items`)},{label:R(`Modified`),value:`—`},{label:R(`Created`),value:`—`},{label:R(`Attributes`),value:`—`}]}},[e,R]),pn=(0,E.useMemo)(()=>{if(!J||!e)return null;let t=J.isDirectory?e.folderSizes[J.name]:void 0,n=e.tags[J.name]??[],r=J.name.lastIndexOf(`.`),i=r>0&&r<J.name.length-1?J.name.slice(r+1).toUpperCase():`—`;return{name:J.name,path:J.fullPath,isDirectory:J.isDirectory,size:J.size,modified:J.modified,created:J.created,fields:[{label:R(`Type`),value:ml(J,R)},...J.isEncrypted?[{label:R(`Encryption`),value:R(`Password required`)}]:[],{label:R(`Extension`),value:J.isDirectory?`—`:i},{label:R(`Location`),value:e.path},{label:R(`Full path`),value:J.fullPath},{label:R(`Size`),value:J.isDirectory?t===void 0?`—`:f(t):f(J.size)},...J.isDirectory?[{label:R(`Items`),value:`${e.counts[J.name]??`—`}`}]:[],{label:R(`Modified`),value:y(J.modified)},{label:R(`Created`),value:y(J.created)},{label:R(`Link status`),value:J.linkTarget==null?J.linkCount>1?R(`Hard link`):`—`:J.linkValid?`OK`:R(`Broken`)},...J.linkTarget?[{label:R(`Target`),value:J.linkTarget}]:[],...J.linkCount>1?[{label:R(`Links`),value:String(J.linkCount)}]:[],{label:R(`Attributes`),value:[J.isHidden?R(`Hidden`):``,J.isSystem?R(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:R(`Tags`),value:n.join(`, `)}]:[]]}},[e,J,R]),mn=Pe?.paths.length===1?Pe.paths[0]:null,hn=mn?U.find(e=>e.entry.fullPath===mn)?.entry:void 0,gn=hn?{path:hn.fullPath,isDirectory:hn.isDirectory}:null,_n=pn??fn,vn=(0,E.useRef)(A);vn.current=A,(0,E.useEffect)(()=>{vn.current?.(_n)},[A,_n]);let xn=k&&_n&&(0,P.jsx)(Xo,{info:_n,onWidth:Je,selectionNote:ke.size>1?o(R,ke.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:O,videoAutoplay:se,width:Ke});return r&&!e?(0,P.jsx)(vu,{children:(0,P.jsx)(bu,{children:r})}):!e&&!n?(0,P.jsx)(vu,{children:(0,P.jsx)(yu,{children:R(`Nothing selected.`)})}):a.mode===`grid`?(0,P.jsxs)(Fl,{onPointerDown:j,children:[(0,P.jsxs)(Il,{children:[(0,P.jsxs)(Wl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||G()},onContextMenu:e=>Qt(e),onDragOver:Xt,onDragStart:Jt,onDrop:Zt,onScroll:e=>{ce?.(e.currentTarget),bt(e.currentTarget)},children:[h&&U.length>0&&(0,P.jsxs)(Ml,{children:[(0,P.jsx)(Al,{$checked:!L&&Pt,$partial:!L&&Ft,"aria-label":R(Pt?`Select none`:`Select all`),disabled:L,onClick:It,title:R(Pt?`Select none`:`Select all`),type:`button`,children:Pt?(0,P.jsx)(bi,{size:10}):Ft?(0,P.jsx)(jl,{}):null}),(0,P.jsx)(`span`,{children:R(Pt?`Select none`:`Select all`)})]}),n&&!e?(0,P.jsx)(Yl,{$size:a.gridSize,children:(0,P.jsx)(bl,{size:a.gridSize})}):(0,P.jsx)(Sl,{counts:e?.counts,currentPath:nt?i.currentPath:null,groups:St,gridSize:a.gridSize,innerRef:ve,onContextMenu:Qt,onOpen:p,onOpenFile:m,onRenameCancel:cn,onRenameChange:sn,onRenameCommit:K,onSelect:Rt,onToggle:zt,openOnSingleClick:g,renaming:Ve,searching:nt,selected:ke,showCheckboxes:h,showTarget:it}),!n&&e&&U.length===0&&(0,P.jsx)(_u,{children:(0,P.jsx)(yu,{children:r??(nt&&i.mode===`hide`?R(`No entries match the search.`):R(`This folder is empty.`))})}),le]}),Pe&&(0,P.jsx)(lo,{canPaste:Ye,directory:Lt,allowCompression:!0,menu:Pe,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ie,favoritePaths:T,onExtractArchive:ae,onArchiveCreated:en,onClose:Vt,onCompressTo:(e,t)=>Re({paths:e,name:t}),onCopy:nn,onCreateFile:e=>void an(e),onCreateFolder:e=>void an(null,e),onDelete:q,onOpen:p,onOpenFile:m,onPaste:rn,onRefresh:$t,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&on(t)},shortcuts:_,target:gn}),tn,dn]}),xn]}):(0,P.jsxs)(Fl,{onPointerDown:j,children:[(0,P.jsxs)(Il,{children:[(0,P.jsxs)(Ll,{onScroll:e=>{B.current&&B.current.scrollLeft!==e.currentTarget.scrollLeft&&(B.current.scrollLeft=e.currentTarget.scrollLeft)},ref:z,style:{gridTemplateColumns:ot},children:[(0,P.jsxs)(Dl,{ref:ct,children:[h&&(0,P.jsx)(Al,{$checked:!L&&Pt,$partial:!L&&Ft,"aria-label":R(Pt?`Select none`:`Select all`),disabled:L,onClick:e=>{e.stopPropagation(),It()},title:R(Pt?`Select none`:`Select all`),type:`button`,children:Pt?(0,P.jsx)(bi,{size:10}):Ft?(0,P.jsx)(jl,{}):null}),(0,P.jsxs)(Rl,{onClick:()=>u(`name`),type:`button`,children:[R(`Name`),ol(a,`name`)]}),(0,P.jsx)(kl,{"aria-label":R(`Resize column`),onDoubleClick:()=>rt[0]&&ft(rt[0].id),onPointerDown:ut,role:`separator`})]}),rt.map((e,t)=>(0,P.jsxs)(Ol,{children:[(0,P.jsxs)(Rl,{onClick:()=>u(e.id),type:`button`,children:[R(e.label),ol(a,e.id)]}),t<rt.length-1&&(0,P.jsx)(kl,{"aria-label":R(`Resize column`),onDoubleClick:()=>ft(e.id),onPointerDown:e=>dt(e,t),role:`separator`})]},e.id))]}),(0,P.jsxs)(zl,{onClick:e=>{e.target===e.currentTarget&&G()},onContextMenu:e=>Qt(e),onDragOver:Xt,onDragStart:Jt,onDrop:Zt,onScroll:e=>{z.current&&z.current.scrollLeft!==e.currentTarget.scrollLeft&&(z.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;Ce(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:B,children:[n&&!e?(0,P.jsx)(yl,{template:ot,columns:rt.length}):(0,P.jsxs)(P.Fragment,{children:[mt>0&&(0,P.jsx)(`div`,{style:{height:mt*pt}}),gt.map(t=>{let n=t.entry.fullPath;return(0,P.jsx)(wl,{current:nt&&n===i.currentPath,dim:nt&&t.ranges===null,height:pt,iconSize:a.iconSize,innerRef:ve,listing:e,onContextMenu:Qt,onOpen:Ut,onRenameCancel:cn,onRenameChange:sn,onRenameCommit:K,onSelect:Rt,onTagEdit:Wt,onToggle:zt,openOnSingleClick:g,renaming:Ve?.path===n?{value:Ve.value}:null,row:t,selected:ke.has(n),showCheckboxes:h,showTarget:it,template:ot,visible:rt},n)}),ht<U.length&&(0,P.jsx)(`div`,{style:{height:(U.length-ht)*pt}})]}),!n&&e&&U.length===0&&(0,P.jsx)(vu,{children:(0,P.jsx)(yu,{children:r??(nt&&i.mode===`hide`?R(`No entries match the search.`):R(`This folder is empty.`))})})]}),s&&Dt.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Bl,{onDoubleClick:tt,onPointerDown:Qe,onPointerMove:$e,onPointerUp:et,title:R(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(Vl,{style:{height:De},children:[(0,P.jsxs)(Hl,{children:[R(`Preview`),(0,P.jsx)(Ul,{children:Ot>Jc?`${kt.length} / ${Ot}`:Ot})]}),(0,P.jsx)(Wl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||G()},onContextMenu:e=>Qt(e),children:(0,P.jsx)(Sl,{counts:e?.counts,currentPath:nt?i.currentPath:null,groups:Mt,gridSize:a.gridSize,onContextMenu:Qt,onOpen:p,onOpenFile:m,onSelect:Rt,onToggle:zt,openOnSingleClick:g,searching:nt,selected:ke,showCheckboxes:h,showTarget:it})})]})]}),Te&&e&&(0,P.jsx)(js,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>d?.(Te.entry.name,e,t),onClose:()=>Ee(null),tags:e.tags[Te.entry.name]??[],x:Te.x,y:Te.y}),Pe&&(0,P.jsx)(lo,{canPaste:Ye,directory:Lt,allowCompression:!0,menu:Pe,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ie,favoritePaths:T,onExtractArchive:ae,onArchiveCreated:en,onClose:Vt,onCompressTo:(e,t)=>Re({paths:e,name:t}),onCopy:nn,onCreateFile:e=>void an(e),onCreateFolder:e=>void an(null,e),onDelete:q,onOpen:p,onOpenFile:m,onPaste:rn,onRefresh:$t,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&on(t)},shortcuts:_,target:gn}),tn,dn]}),xn]})}function ol(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var sl=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function cl(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return ml(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:sl.compare(String(r),String(i));return t.sortDescending?-o:o})}var ll=On.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&An(t.entry.name)===e})),ul=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...ll.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function dl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function fl(e){return Math.max(24,Math.min(e-56,160))}var pl={file:`File`,folder:`Folder`,text:`Text file`,code:`source file`,image:`image`,video:`Video`,audio:`Audio`,archive:`archive`,pdf:`PDF`,executable:`Application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function ml(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(pl[Ws(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function hl(e,t,n,r){switch(e){case`type`:return ml(t,r);case`size`:return _l(t,n.folderSizes);case`modified`:return y(t.modified);case`created`:return y(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function gl({name:e,ranges:t}){if(!t||t.length===0)return(0,P.jsx)(P.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,P.jsx)(gu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,P.jsx)(P.Fragment,{children:n})}function _l(e,t){if(!e.isDirectory)return f(e.size);let n=t[e.name];return n===void 0?`—`:f(n)}function vl({entry:e,size:t=18}){let n=I(),r=(0,E.useRef)(null),[i,a]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=un(i?e.fullPath:null,e.isDirectory,t>32),s=J(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,P.jsxs)(Tl,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,P.jsx)(Gs,{name:e.iconSource.slice(5),size:t}):s?(0,P.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,P.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,P.jsx)(ri,{size:t}):(0,P.jsx)(Gs,{name:Ws(e.name),size:t}),e.isEncrypted&&(0,P.jsx)(El,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,P.jsx)(ma,{size:Math.max(8,Math.round(t*.52))})})]})}function yl({template:e,columns:t}){return(0,P.jsx)(P.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,P.jsxs)(Xl,{style:{gridTemplateColumns:e},children:[(0,P.jsxs)($l,{children:[(0,P.jsx)(Zl,{style:{flexShrink:0,height:18,width:18}}),(0,P.jsx)(Zl,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,P.jsx)(Zl,{style:{width:t%2==0?44:92}},t))]},r))})}function bl({size:e}){return(0,P.jsx)(P.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,P.jsxs)(uu,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,P.jsx)(du,{children:(0,P.jsx)(Zl,{style:{height:e,width:e}})}),(0,P.jsx)(pu,{children:(0,P.jsx)(Zl,{style:{height:9,width:`${t}%`}})})]},n))})}var xl=(0,E.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=I(),x=Fn(),S=!e.entry.isDirectory&&jn(e.entry.name),ee=(0,E.useRef)(null),[te,ne]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(!S||te)return;let e=ee.current;if(!e)return;if(!(`IntersectionObserver`in window)){ne(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(ne(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,te]);let re=hn(S&&te?e.entry.fullPath:null,192,e.entry.modified),[C,w]=(0,E.useState)(!1),ie=S&&re!==null&&!C,T=e.entry.fullPath,ae=t=>{e.entry.isDirectory?v(T,Gt(t)):y?.(T,Gt(t))};return(0,P.jsxs)(uu,{$current:t,$dim:n,$image:ie,$selected:s,onClick:e=>{h(e,T),l&&ae(e)},onContextMenu:e=>_(e,T),onDoubleClick:e=>{l||ae(e)},ref:e=>{ee.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!u,children:[c&&(0,P.jsx)(Pl,{$checked:s,onClick:e=>{e.stopPropagation(),g(T)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,P.jsx)(bi,{size:10})}),(0,P.jsx)(du,{children:ie?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:re}):(0,P.jsx)(fu,{children:e.place&&x.useIcons?(0,P.jsx)(Os,{place:e.place,size:r}):(0,P.jsx)(vl,{entry:e.entry,size:r})})}),(0,P.jsxs)(pu,{children:[u?(0,P.jsx)(Cl,{onCancel:()=>m?.(),onChange:e=>d?.(e),onCommit:()=>p?.(),value:u.value}):(0,P.jsx)(mu,{$broken:e.entry.linkValid===!1,children:(0,P.jsx)(gl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,P.jsxs)(tu,{title:b(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(ma,{size:9}),b(`Encrypted`)]}),e.cut&&(0,P.jsxs)(nu,{title:b(`This item is cut and will move when something is pasted.`),children:[(0,P.jsx)(sa,{size:9}),b(`Cut`)]}),(0,P.jsx)(hu,{children:e.entry.isDirectory?i===void 0?ml(e.entry,b):b(`{type} · {count} items`,{type:ml(e.entry,b),count:i}):b(`{type} · {size}`,{type:ml(e.entry,b),size:f(e.entry.size)})}),a&&e.entry.linkTarget&&(0,P.jsxs)(iu,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,P.jsx)(ha,{size:9}),(0,P.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Sl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=I();return(0,P.jsx)(P.Fragment,{children:e.map(e=>(0,P.jsxs)(Gl,{children:[(0,P.jsxs)(Kl,{children:[y(e.label),(0,P.jsx)(ql,{children:e.rows.length}),(0,P.jsx)(Jl,{})]}),(0,P.jsx)(Yl,{$size:t,children:e.rows.map(e=>(0,P.jsx)(xl,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:fl(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Cl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,P.jsx)(ru,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var wl=(0,E.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=I(),ee=Fn(),te=e.entry.fullPath;return(0,P.jsxs)(Ql,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,te),o&&_(e.entry,t)},onContextMenu:e=>g(e,te),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":te,draggable:!p,children:[(0,P.jsxs)($l,{children:[i&&(0,P.jsx)(Nl,{$checked:r,onClick:e=>{e.stopPropagation(),h(te)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,P.jsx)(bi,{size:10})}),e.place&&ee.useIcons?(0,P.jsx)(Tl,{children:(0,P.jsx)(Os,{place:e.place,size:s})}):(0,P.jsx)(vl,{entry:e.entry,size:s}),p?(0,P.jsx)(Cl,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,P.jsx)(eu,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,P.jsx)(gl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,P.jsxs)(tu,{title:S(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(ma,{size:9}),S(`Encrypted`)]}),e.cut&&(0,P.jsxs)(nu,{title:S(`This item is cut and will move when something is pasted.`),children:[(0,P.jsx)(sa,{size:9}),S(`Cut`)]}),a&&e.entry.linkTarget&&(0,P.jsxs)(iu,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,P.jsx)(ha,{size:9}),(0,P.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,P.jsx)(au,{children:t.id===`tags`?(0,P.jsx)(ou,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,P.jsx)(su,{$color:t,$ink:As(t),children:e},e)}):(0,P.jsx)(cu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,P.jsx)(lu,{children:S(`Broken`)}):hl(t.id,e.entry,d,S)},t.id))]})}),Tl=_.span`
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
`,El=_.span`
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
`,Dl=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,Ol=_.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,kl=_.span`
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
`,Al=_.button`
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
`,jl=_.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Ml=_.div`
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
`,Nl=_.button`
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
`,Pl=_(Nl)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Fl=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Il=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,Ll=_.div`
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
`,Rl=_.button`
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
`,zl=_.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Bl=_.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Vl=_.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,Hl=_.div`
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
`,Ul=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Wl=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Gl=_.section`
    & + & {
        margin-top: 22px;
    }
`,Kl=_.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ql=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Jl=_.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Yl=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Xl=_.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Zl=_.span`
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
`,Ql=_.div`
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
`,$l=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,eu=_.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,tu=_.span`
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
`,nu=_.span`
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
`,ru=_.input`
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
`,iu=_.span`
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
`,au=_.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,ou=_.button`
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
`,su=_.span`
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
`,cu=_.span`
    color: var(--text-muted);
    font-size: 11px;
`,lu=_.span`
    color: #fca5a5;
`,uu=_.div`
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
`,du=_.div`
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
`,fu=_.span`
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
`,pu=_.div`
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
`,mu=_.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,hu=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,gu=_.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,_u=_.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,vu=_.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,yu=_.p`
    font-size: 13px;
    color: var(--text-muted);
`,bu=_.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,xu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Su=`/assets/bloom-BpfZWiaG.mp4`,Cu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,wu=`/assets/drift-BRBSQL2_.mp4`,Tu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Eu=`/assets/ember-CtSz0YxR.mp4`,Du=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],Ou=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],ku=[{id:`builtin:video:drift`,name:`Drift`,url:wu,poster:Cu},{id:`builtin:video:ember`,name:`Ember`,url:Eu,poster:Tu},{id:`builtin:video:bloom`,name:`Bloom`,url:Su,poster:xu}],Au=Ou.map(e=>({...e,variants:Du.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Iu(Lu(e.id,t))}))})),ju=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>Du.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Iu(Ru(e.id,t))}))),Mu=new Map([...Au.flatMap(e=>e.variants),...ju].map(e=>[e.id,e])),Nu=new Map(ku.map(e=>[e.id,e]));function Pu(e){if(Mu.has(e))return Mu.get(e).url;if(Nu.has(e))return Nu.get(e).url;let t=e.split(`:`)[1];return t?Mu.get(`builtin:${t}:indigo`)?.url??null:null}function Fu(e){return Nu.has(e)}function Iu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function Lu(e,t){return e===`dunes`?Gu(t):e===`tide`?Ku(t):Wu(t)}function Ru(e,t){return e===`skyline`?Bu(t):e===`orbit`?Vu(t):zu(t)}function zu({accent:e,secondary:t}){let n=Uu(t,`#05070f`,.86),r=Uu(e,`#0b1020`,.72),i=Uu(t,`#0a0f1d`,.66),a=Uu(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${Uu(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${Uu(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function Bu({accent:e,secondary:t}){let n=Uu(t,`#07040d`,.84),r=Uu(e,`#100716`,.7),i=Uu(e,`#08050e`,.82),a=Uu(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${Uu(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function Vu({accent:e,secondary:t}){let n=Uu(e,`#03050d`,.9),r=Uu(t,`#05030c`,.94),i=Uu(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${Uu(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${Uu(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${Uu(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${Uu(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function Hu(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function Uu(e,t,n){let[r,i,a]=Hu(e),[o,s,c]=Hu(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function Wu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Uu(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${Uu(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${Uu(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${Uu(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function Gu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${Uu(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${Uu(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${Uu(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${Uu(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${Uu(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${Uu(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${Uu(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function Ku({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Uu(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${Uu(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${Uu(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${Uu(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var qu=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Ju(e){return qu.test(e)}function Yu({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):C(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=gn(r),a=t?.startsWith(`builtin:`)?Pu(t):n??i,o=n===null?r===null?t!==null&&Fu(t):Ju(r):Ju(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,P.jsxs)(Xu,{"aria-hidden":!0,children:[o?(0,P.jsx)(Qu,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,P.jsx)(Zu,{src:a,style:{filter:s}}),(0,P.jsx)($u,{})]})}var Xu=_.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,Zu=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Qu=_.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,$u=_.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function ed({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=I(),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(()=>Math.max(1,Math.ceil(t)));return(0,E.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,Pa.createPortal)((0,P.jsx)(td,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,P.jsxs)(nd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(rd,{children:a(`Protected folder`)}),(0,P.jsx)(id,{children:a(`These paths are protected by the safety settings:`)}),(0,P.jsx)(ad,{children:e.map(e=>(0,P.jsxs)(od,{children:[(0,P.jsx)(sd,{children:e.path}),(0,P.jsx)(cd,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,P.jsx)(ld,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,P.jsx)(ud,{children:a(`Nothing has been deleted.`)}),(0,P.jsx)(dd,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,P.jsxs)(fd,{children:[(0,P.jsx)(pd,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,P.jsx)(md,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var td=_.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ya}
`,nd=_.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wa}
`,rd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,id=_.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,ad=_.div`
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
`,od=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,sd=_.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,cd=_.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,ld=_.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,ud=_.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,dd=_.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,fd=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,pd=_.button`
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
`,md=_.button`
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
`;function hd(){let e=I(),[t,n]=(0,E.useState)(null),r=(0,E.useRef)(null),i=(0,E.useRef)(null);(0,E.useEffect)(()=>(xa(e=>new Promise(t=>{r.current=t,n(e)})),()=>xa(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,E.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Pa.createPortal)((0,P.jsx)(gd,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,P.jsxs)(_d,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(vd,{children:e(`Notice`)}),(0,P.jsx)(yd,{children:t}),(0,P.jsx)(bd,{children:(0,P.jsx)(xd,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var gd=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ya}
`,_d=_.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wa}
`,vd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,yd=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,bd=_.div`
    display: flex;
    justify-content: flex-end;
`,xd=_.button`
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
`;function Sd(){let e=I(),[t,n]=(0,E.useState)(null),[r,i]=(0,E.useState)(``),a=(0,E.useRef)(null),o=(0,E.useRef)(null);(0,E.useEffect)(()=>(Ca((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Ca(null)),[]),(0,E.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Pa.createPortal)((0,P.jsx)(Cd,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,P.jsxs)(wd,{role:`dialog`,"aria-modal":`true`,children:[(0,P.jsx)(Td,{children:e(`Archive password`)}),(0,P.jsx)(Ed,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,P.jsx)(Dd,{title:t.archive,children:t.archive}),(0,P.jsx)(Od,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,P.jsxs)(kd,{children:[(0,P.jsx)(Ad,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,P.jsx)(jd,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var Cd=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ya}
`,wd=_.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wa}
`,Td=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ed=_.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Dd=_.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Od=_.input`
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
`,kd=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
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

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,jd=_(Ad)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Md({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h,onSelectMatches:g}){let _=I(),v=(0,E.useRef)(null),y=c??_(`Search this folder`);(0,E.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,P.jsxs)(Nd,{children:[(0,P.jsx)(oi,{}),(0,P.jsx)(Pd,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Fd,{children:i===0?`0/0`:`${a+1}/${i}`}),g&&(0,P.jsx)(Id,{disabled:i===0,onClick:g,title:_(`Select all matches`),type:`button`,children:(0,P.jsx)(bi,{size:12})}),(0,P.jsx)(Id,{$chevron:!0,onClick:()=>b(u),title:_(`Previous match (Shift+Enter)`),type:`button`,children:(0,P.jsx)(fi,{size:12})}),(0,P.jsx)(Id,{$chevron:!0,$down:!0,onClick:()=>b(d),title:_(`Next match (Enter)`),type:`button`,children:(0,P.jsx)(fi,{size:12})})]}),(0,P.jsx)(Ld,{$on:n,onClick:()=>b(f),title:_(`Match case`),type:`button`,children:`Aa`}),(0,P.jsx)(Ld,{$on:r,onClick:()=>b(p),title:_(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,P.jsx)(Rd,{$on:t===`hide`,onClick:()=>b(m),title:_(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:t===`hide`?(0,P.jsx)(Ci,{size:12}):(0,P.jsx)(Si,{size:12})}),(0,P.jsx)(Id,{onClick:h,title:_(`Close search (Esc)`),type:`button`,children:(0,P.jsx)(xi,{size:12})})]})}var Nd=_.div`
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
    ${qa}
`,Pd=_.input`
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
`,Fd=_.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Id=_.button`
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
`,Ld=_.button`
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
`,Rd=_(Ld)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function zd(e,t,n,r,i=[]){(0,E.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=bn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function Bd({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=I(),a=(0,E.useRef)(null),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(null);return(0,E.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,E.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,E.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Pa.createPortal)((0,P.jsxs)(Vd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Cs).map(n=>(0,P.jsx)(Hd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Cs[n](16)},n)),(0,P.jsx)(Hd,{onClick:async()=>{let e=await va([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,P.jsx)(li,{size:13})}),r&&(0,P.jsx)(Hd,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,P.jsx)(xi,{size:12})})]}),document.body)]})}var Vd=_.div`
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
    ${Ga}
    transform-origin: top left;
`,Hd=_.button`
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
`;function Ud({source:e,poster:t}){let n=C(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=gn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??Pu(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,P.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,P.jsx)(`img`,{alt:``,src:a}):null}function Wd({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=I(),s=(0,E.useRef)(null),c=(0,E.useRef)(null),l=(0,E.useRef)(!1),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,E.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,E.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,E.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,P.jsx)(ff,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,P.jsxs)(pf,{children:[(0,P.jsxs)(mf,{children:[(0,P.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,P.jsx)(xf,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,P.jsx)(xi,{size:12})})]}),(0,P.jsx)(hf,{children:o(`Drag the frame to choose the visible part.`)}),(0,P.jsxs)(gf,{children:[t?(0,P.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,P.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,P.jsx)(_f,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:m},children:(0,P.jsx)(vf,{})})]}),(0,P.jsxs)(yf,{children:[(0,P.jsx)(bf,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,P.jsx)(bf,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var Gd=150,Kd=120,qd=200,Jd=_.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Yd=_.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Xd=_.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${qd}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${qd}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(qd*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(qd*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(qd*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${qd}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(qd*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(qd*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(qd*.18)}px),
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
`,Zd=_.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Gd}px);
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
`,Qd=_.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,$d=_.section`
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
`,ef=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,tf=_.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,nf=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,rf=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,af=_.input`
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
`,of=_.button`
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
`,sf=_.div`
    position: relative;
    width: 132px;
    height: 72px;
`,cf=_.button`
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
`,lf=_.button`
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
`,uf=_.span`
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
`,df=_.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,ff=_.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,pf=_.div`
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
`,mf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,hf=_.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,gf=_.div`
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
`,_f=_.div`
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
`,vf=_.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,yf=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,bf=_.button`
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
`,xf=_.button`
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
`,Sf=_.button`
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
`,Cf=_.div`
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
`,wf=_.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Tf=_.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Ef=_.button`
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
`,Df=_.div`
    position: relative;
    display: inline-flex;
`,Of=_.div`
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
`,kf=_.button`
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
`,Af=_.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,jf=_.section`
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
`,Mf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Nf=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Pf=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Ff=_.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,If=_.input`
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
`,Lf=_.button`
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
`,Rf=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,zf=_.div`
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
`,Bf=_.span`
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
`,Vf=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Hf=_.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Uf=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Wf=_.button`
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
`,Gf=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Kf=_.button`
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
`,qf=_.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Jf=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Yf=_.div`
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
`,Xf=_.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Zf=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Qf=_.button`
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
`,$f=_.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,ep=_.button`
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
`,tp=_.button`
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
`,np=_.button`
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
`,rp=_.span`
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
`,ip=_.button`
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
`,ap=_.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,op=_.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,sp=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,cp=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,lp=_.input`
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
`,up=_.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,dp=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,fp=_.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,pp=_.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,mp=_.button`
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
`;function hp({places:e,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:u,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:_,onSearchMatches:y,readOnly:b=!1,onPick:x,onSelectionChange:S,onAddToTray:ee,onAddFavorite:te,onRemoveFavorite:ne,favoritePaths:ie,onExtractArchive:T,settingsVersion:ae=0}){let D=I(),oe=Fn(),[O,se]=(0,E.useState)(!1),[k,A]=(0,E.useState)(null),j=k?.overviewBanner??null,M=j?.startsWith(`builtin:`)??!1,ce=j?.startsWith(`url:`)?j.slice(4):C(j)?j:null,le=M||ce?``:j??``,ue=M?``:ce?ce.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:le.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,de=M?Fu(j):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(ue),fe=gn(le.length>0?le:null,0,ue?`.${ue}`:``),F=j?Pu(j)??ce??fe:null,[pe,L]=(0,E.useState)(``),[me,he]=(0,E.useState)(null),[ge,R]=(0,E.useState)(!1),[_e,ve]=(0,E.useState)(null),[ye,z]=(0,E.useState)(null),[B,be]=(0,E.useState)(null),[Ce,we]=(0,E.useState)([]),[V,Te]=(0,E.useState)(null),[Ee,De]=(0,E.useState)(``),[Oe,ke]=(0,E.useState)(null),[je,Me]=(0,E.useState)(null),Ne=qc(`overview`),[H,Pe]=(0,E.useState)(null),[Fe,Ie]=(0,E.useState)(null),Le=(0,E.useRef)(null),Re=(0,E.useRef)(null),ze=(0,E.useRef)(null),Be=(0,E.useRef)(null),Ve=(0,E.useRef)(null),He=Fe??k?.overviewBannerHeight??220,[Ge,Ke]=(0,E.useState)(0),[qe,Je]=(0,E.useState)(null),Xe=Math.min(1,Math.max(0,k?.overviewBannerOffset??.3)),Ze=He+qd,Qe=qe&&Ge>0?qe.height*(Ge/qe.width):Ze,$e=Qe>0&&Qe<Ze+240?(Ze+240)/Qe:1,et=Math.max(1,Math.round(Ge*$e)),tt=Math.max(0,Qe*$e-Ze),nt=Math.min(Kd,tt/2,Math.max(20,He*.42)),rt=nt+Xe*Math.max(0,tt-nt*2),[at,ot]=(0,E.useState)(!1),st=(e,t=!1)=>x?(ke(e),Me({path:e,isDirectory:t}),S?.([e]),!0):!1,ct=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),ke(t),Me({path:t,isDirectory:n}),Pe({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,E.useEffect)(()=>(Bc(`overview`,je?(e,t)=>Pe({x:e,y:t,target:je}):null),()=>Bc(`overview`,null)),[je]);let lt=(e,t)=>c(e,t);(0,E.useEffect)(()=>{Ye().then(A,()=>A(null))},[ae]),(0,E.useEffect)(()=>{if(N.available)return Tc().then(we,()=>void 0),N.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&we(t.data.peers)})},[]),(0,E.useEffect)(()=>{let e=ze.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,E.useEffect)(()=>{if(M&&!de){Je({width:1920,height:1080});return}Je(null);let e=Ve.current;e?.complete&&e.naturalWidth>0&&Je({width:e.naturalWidth,height:e.naturalHeight})},[j,M,de]),(0,E.useEffect)(()=>{let e=Be.current;if(!e)return;let t=()=>Ke(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[k?.overviewBanner]),(0,E.useEffect)(()=>{if(!me)return;let e=()=>he(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||he(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[me]),(0,E.useEffect)(()=>{if(!ge)return;let e=()=>R(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[ge]);let ut=Ts(k),dt=ut.map(e=>e.id),ft=(0,E.useRef)(null),U=e=>me?.kind===`panel`&&me.id===e,pt=e=>me?.kind===`place`&&me.id===e;(0,E.useEffect)(()=>{if(!N.available)return;let e=ut.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return N.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>N.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[ut.map(e=>e.path??e.id).join(`|`),a]),zd(ft,_??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let mt=async(e,t)=>{let n={...k?.placeIcons};t?n[e]=t:delete n[e],he(null),await bt({placeIcons:n}),l(await Ae())},ht=async(e,t)=>{let n={...k?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],z(null),await bt({placeNames:n}),l(await Ae())},gt=e=>{be(null),ve({drive:e,label:e.label||`Local Disk`})},_t=async()=>{if(!_e)return;let{drive:e,label:t}=_e;ve(null);let n=await xe(e.name,t.trim());n.ok?(be(null),h?.()):be(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},yt=k?.overviewColumns??1,bt=async e=>{if(!k)return;let t={...k,...e,overviewPanels:e.overviewPanels??dt,overviewHidden:[]};A(await it(t)),p?.()},xt=async()=>{await bt({overviewPanels:[...bs],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),l(await Ae()),se(!1)},St=async()=>{let e=await va([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=k?.overviewBanners??[];await bt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},Ct=async()=>{let e=pe.trim();if(!k||!C(e))return;let t=k.overviewBanners??[];L(``),await bt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},wt=()=>void bt({overviewBanner:null}),Tt=e=>void bt({overviewBanners:(k?.overviewBanners??[]).filter(t=>t!==e),...k?.overviewBanner===e||k?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Et=e=>{Le.current={y:e.clientY,height:He},e.currentTarget.setPointerCapture(e.pointerId)},Dt=e=>{let t=Le.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Re.current=n,Ie(n)},Ot=e=>{Le.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Re.current!==null&&(bt({overviewBannerHeight:Re.current}),Re.current=null)},kt=(e,t)=>{let n=dt.indexOf(e),r=n+t;if(n<0||r<0||r>=dt.length)return;let i=[...dt];[i[n],i[r]]=[i[r],i[n]],bt({overviewPanels:i})},At=(e,t)=>{let n={...k?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],bt({overviewTitles:n})},jt=(e,t)=>void bt({overviewViews:{...k?.overviewViews,[e]:t}}),Mt=e=>{let t=k?.overviewPinned??ut.filter(e=>e.pinned).map(e=>e.id);bt({overviewPinned:ut.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Nt=e=>{he(null);let t=t=>{let n={...t};return delete n[e],n},n=k?.overviewPinned??ut.filter(e=>e.pinned).map(e=>e.id);bt({overviewPanels:dt.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(k?.overviewTitles),overviewViews:t(k?.overviewViews),overviewIcons:t(k?.overviewIcons),panelPlaces:t(k?.panelPlaces)})},W=(e,t)=>{let n={...k?.overviewIcons};t?n[e]=t:delete n[e],he(null),bt({overviewIcons:n})},Pt=async e=>{if(!k)return;if(e===`folder`){let e=await _a();if(!e)return;let t=`folder:${e}`;dt.includes(t)||await bt({overviewPanels:[...dt,t]});return}if(e===`quick`){let e=2;for(;dt.includes(`quick:${e}`);)e+=1;await bt({overviewPanels:[...dt,`quick:${e}`]});return}let t=e;for(let n=2;dt.includes(t);n+=1)t=`${e}:${n}`;await bt({overviewPanels:[...dt,t]})},Ft=async n=>{let r=await _a();if(!r)return;if(n.id===`quick`){await bt({quickAccess:[...new Set([...e.map(e=>e.path),r])]}),l(await Ae());return}let i=n.places??[];i.some(e=>t(e,r))||await bt({panelPlaces:{...k?.panelPlaces,[n.id]:[...i,r]}})},It=async(n,r)=>{he(null),n.id===`quick`?(await bt({quickAccess:e.filter(e=>!t(e.path,r)).map(e=>e.path)}),l(await Ae())):await bt({panelPlaces:{...k?.panelPlaces,[n.id]:(n.places??[]).filter(e=>!t(e,r))}})},Lt=async(n,r,i)=>{if(t(r,i))return;let a=n.id===`quick`?e.map(e=>e.path):n.places??[],o=a.findIndex(e=>t(e,r)),s=a.findIndex(e=>t(e,i));if(o<0||s<0)return;let c=[...a],[u]=c.splice(o,1);c.splice(s,0,u),n.id===`quick`?(await bt({quickAccess:c}),l(await Ae())):await bt({panelPlaces:{...k?.panelPlaces,[n.id]:c}})},Rt=(e,t)=>({draggable:O,onDragOver:e=>{O&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{O&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{O&&(n.preventDefault(),Lt(e,n.dataTransfer.getData(`text/plain`),t))}}),zt=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:k?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??k?.placeIcons?.[n]??null}}),Bt=e=>{if(r.length===0)return(0,P.jsx)(op,{children:D(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,P.jsx)(Rf,{children:t.map(e=>{let t=In(oe,e.path);return(0,P.jsxs)(zf,{$plain:!1,$selected:Oe===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Gt(t)):Se(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,children:[(0,P.jsx)(Bf,{children:t&&oe.useIcons?(0,P.jsx)(Os,{place:t,size:18}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(Vf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Hf,{children:e.path})]})]},e.path)})}):(0,P.jsx)(Uf,{children:t.map(e=>{let t=In(oe,e.path);return(0,P.jsxs)(Wf,{$selected:Oe===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Gt(t)):Se(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&oe.useIcons?(0,P.jsx)(Os,{place:t,size:15}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,P.jsxs)(Gf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Hf,{children:e.path})]})]},e.path)})})},G=e=>{let n=k?.favorites??[],r=async e=>{await bt({favorites:n.filter(t=>t.path!==e)})},i=async(e,r)=>{e&&!n.some(n=>t(n.path,e))&&await bt({favorites:[...n,{path:e,name:v(e)||e,isDirectory:r}]})},a=(e,t,n)=>{O||st(t,n)||(n?c(t,Gt(e)):Se(t))},o=O?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Kf,{$row:e.view===`list`,onClick:()=>void va().then(e=>i(e,!1)),title:D(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,P.jsx)(li,{size:15}):(0,P.jsx)(Bf,{children:(0,P.jsx)(li,{size:15})}),e.view===`list`?(0,P.jsxs)(Gf,{children:[(0,P.jsx)(`strong`,{children:D(`Add file`)}),(0,P.jsx)(Hf,{children:D(`Pin any file here`)})]}):(0,P.jsxs)(Vf,{children:[(0,P.jsx)(`strong`,{children:D(`Add file`)}),(0,P.jsx)(Hf,{children:D(`Pin any file here`)})]})]}),(0,P.jsxs)(Kf,{$row:e.view===`list`,onClick:()=>void _a().then(e=>i(e,!0)),title:D(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,P.jsx)(li,{size:15}):(0,P.jsx)(Bf,{children:(0,P.jsx)(li,{size:15})}),e.view===`list`?(0,P.jsxs)(Gf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Hf,{children:D(`Pin any folder here`)})]}):(0,P.jsxs)(Vf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Hf,{children:D(`Pin any folder here`)})]})]})]}):null;return n.length===0&&!O?(0,P.jsx)(op,{children:D(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,P.jsxs)(Rf,{children:[n.map(e=>{let t=In(oe,e.path);return(0,P.jsxs)(zf,{$plain:O,$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&x?.(e.path),onContextMenu:t=>!O&&ct(t,e.path,e.isDirectory),title:e.path,children:[O&&(0,P.jsx)(tp,{onClick:t=>{t.stopPropagation(),r(e.path)},title:D(`Remove from favorites`),type:`button`,children:(0,P.jsx)(xi,{size:11})}),(0,P.jsx)(Bf,{children:t&&oe.useIcons?(0,P.jsx)(Os,{place:t,size:18}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(Vf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Hf,{children:e.path})]})]},e.path)}),o]}):(0,P.jsxs)(Uf,{children:[n.map(e=>{let t=In(oe,e.path);return(0,P.jsxs)(Wf,{$selected:Oe===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&x?.(e.path),onContextMenu:t=>!O&&ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&oe.useIcons?(0,P.jsx)(Os,{place:t,size:15}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,P.jsxs)(Gf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Hf,{children:e.path})]}),O&&(0,P.jsx)(tp,{$inline:!0,onClick:t=>{t.stopPropagation(),r(e.path)},title:D(`Remove from favorites`),type:`button`,children:(0,P.jsx)(xi,{size:11})})]},e.path)}),o]})},Vt=e=>{if(n.length===0)return(0,P.jsx)(op,{children:D(`No drives are available.`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=_e?.drive.name===t.name,i=r?(0,P.jsx)(gp,{maxLength:32,onCancel:()=>ve(null),onChange:e=>ve({..._e,label:e}),onCommit:()=>void _t(),value:_e?.label??``}):(0,P.jsx)(P.Fragment,{children:d(t)}),a=!r&&O&&(0,P.jsx)(np,{onClick:e=>{e.stopPropagation(),gt(t)},title:D(`Rename volume`),type:`button`,children:(0,P.jsx)(Bi,{size:11})}),o=(0,P.jsx)(Hf,{children:D(`{free} free of {total}`,{free:f(t.freeSpace),total:f(t.totalSize)})});return e.view===`grid`?(0,P.jsxs)(zf,{$plain:!1,$selected:Oe===t.name,onClick:e=>{!r&&st(t.name,!0)||r||c(t.name,Gt(e))},onDoubleClick:()=>!r&&x?.(t.name),onContextMenu:e=>!r&&ct(e,t.name,!0),title:t.name,children:[(0,P.jsx)(Bf,{children:(0,P.jsx)(ai,{size:18})}),(0,P.jsxs)(Vf,{children:[(0,P.jsxs)(`strong`,{children:[i,r&&re(t),a]}),o]})]},t.name):(0,P.jsxs)(Wf,{as:r?`div`:`button`,$selected:Oe===t.name,onClick:r?void 0:e=>{st(t.name,!0)||c(t.name,Gt(e))},onDoubleClick:r?void 0:()=>x?.(t.name),onContextMenu:r?void 0:e=>ct(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,P.jsx)(ai,{size:18}),(0,P.jsxs)(Gf,{children:[(0,P.jsxs)(`strong`,{children:[i,r&&re(t),a]}),o]}),(0,P.jsx)(qf,{children:(0,P.jsx)(Jf,{$used:n,$tone:w(n)})})]},t.name)});return e.view===`grid`?(0,P.jsx)(Rf,{children:t}):(0,P.jsx)(Uf,{children:t})},Ut=()=>{let e=async e=>{Te(e.id);try{await Ec(e.host,e.port)}finally{Te(null)}},t=async()=>{let e=Ee.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Te(`manual`);try{await Ec(n,r)}finally{Te(null)}}};return(0,P.jsxs)(sp,{children:[(0,P.jsxs)(cp,{children:[(0,P.jsx)(lp,{onChange:e=>De(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:D(`Address, e.g. 192.168.1.20:45701`),value:Ee}),(0,P.jsx)(mp,{disabled:V!==null||!Ee.includes(`:`),onClick:()=>void t(),type:`button`,children:D(V===`manual`?`Pairing…`:`Pair by address`)})]}),Ce.length===0&&(0,P.jsx)(op,{children:D(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),Ce.map(t=>(0,P.jsxs)(up,{children:[(0,P.jsxs)(dp,{children:[(0,P.jsx)(ea,{size:14}),(0,P.jsx)(fp,{title:t.host,children:t.name}),(0,P.jsx)(pp,{$online:t.online,children:t.paired?t.online?D(`Paired`):D(`Offline`):D(`Not paired`)}),!t.paired&&t.online&&(0,P.jsx)(mp,{disabled:V===t.id,onClick:()=>void e(t),type:`button`,children:V===t.id?D(`Pairing…`):D(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,P.jsx)(Hf,{children:D(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,P.jsxs)(Wf,{onClick:n=>c(Mc(t.id,e.id),Gt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,P.jsx)(ea,{size:14}),(0,P.jsxs)(Gf,{children:[(0,P.jsx)(`strong`,{children:e.name}),(0,P.jsx)(Hf,{children:t.name})]}),(0,P.jsx)(na,{size:12})]},e.id))]},t.id))]})},Wt=e=>{switch(e.kind){case`share`:return Ut();case`favorites`:return G(e);case`quick`:{let t=zt(e);return!O&&t.length===0?(0,P.jsx)(op,{children:D(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,P.jsxs)(Rf,{children:[t.map(t=>(0,P.jsxs)(zf,{$plain:O,$selected:Oe===t.path,...Rt(e,t.path),onClick:e=>{!O&&!st(t.path,!0)&&c(t.path,Gt(e))},onDoubleClick:()=>!O&&x?.(t.path),onContextMenu:e=>!O&&ct(e,t.path,!0),title:t.path,children:[O&&(0,P.jsx)(tp,{onClick:n=>{n.stopPropagation(),It(e,t.path)},title:D(`Remove from Quick access`),type:`button`,children:(0,P.jsx)(xi,{size:11})}),(0,P.jsxs)($f,{children:[O?(0,P.jsx)(ep,{onClick:e=>{e.stopPropagation(),he(pt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,P.jsx)(Bf,{children:(0,P.jsx)(Os,{place:t})})}):(0,P.jsx)(Bf,{children:(0,P.jsx)(Os,{place:t})}),pt(t.path)&&(0,P.jsx)(Bd,{onPick:e=>void mt(t.path,e),value:k?.placeIcons?.[t.path]??t.icon})]}),(0,P.jsxs)(Vf,{children:[ye?.path===t.path?(0,P.jsx)(`strong`,{children:(0,P.jsx)(gp,{onCancel:()=>z(null),onChange:e=>z({path:t.path,name:e}),onCommit:()=>void ht(t.path,ye?.name??``),value:ye?.name??``})}):(0,P.jsxs)(`strong`,{children:[t.name,O&&(0,P.jsx)(np,{onClick:e=>{e.stopPropagation(),he(null),z({path:t.path,name:t.name})},title:D(`Rename folder`),type:`button`,children:(0,P.jsx)(Bi,{size:11})})]}),(0,P.jsx)(Hf,{children:t.path})]})]},t.path)),O&&(0,P.jsxs)(Kf,{onClick:()=>void Ft(e),title:D(`Pin a folder here`),type:`button`,children:[(0,P.jsx)(Bf,{children:(0,P.jsx)(li,{size:15})}),(0,P.jsxs)(Vf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Hf,{children:D(`Pin a directory here`)})]})]})]}):(0,P.jsxs)(Uf,{children:[t.map(t=>(0,P.jsxs)(Wf,{$selected:Oe===t.path,...Rt(e,t.path),onClick:e=>{!O&&!st(t.path,!0)&&c(t.path,Gt(e))},onDoubleClick:()=>!O&&x?.(t.path),onContextMenu:e=>!O&&ct(e,t.path,!0),title:t.path,type:`button`,children:[(0,P.jsxs)($f,{children:[O?(0,P.jsx)(ep,{onClick:e=>{e.stopPropagation(),he(pt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,P.jsx)(Os,{place:t,size:15})}):(0,P.jsx)(Os,{place:t,size:15}),pt(t.path)&&(0,P.jsx)(Bd,{onPick:e=>void mt(t.path,e),value:k?.placeIcons?.[t.path]??t.icon})]}),(0,P.jsxs)(Gf,{children:[ye?.path===t.path?(0,P.jsx)(`strong`,{children:(0,P.jsx)(gp,{onCancel:()=>z(null),onChange:e=>z({path:t.path,name:e}),onCommit:()=>void ht(t.path,ye?.name??``),value:ye?.name??``})}):(0,P.jsxs)(`strong`,{children:[t.name,O&&(0,P.jsx)(np,{onClick:e=>{e.stopPropagation(),he(null),z({path:t.path,name:t.name})},title:D(`Rename folder`),type:`button`,children:(0,P.jsx)(Bi,{size:11})})]}),(0,P.jsx)(Hf,{children:t.path})]}),O&&(0,P.jsx)(tp,{$inline:!0,onClick:n=>{n.stopPropagation(),It(e,t.path)},title:D(`Remove from Quick access`),type:`button`,children:(0,P.jsx)(xi,{size:11})})]},t.path)),O&&(0,P.jsxs)(Kf,{$row:!0,onClick:()=>void Ft(e),title:D(`Pin a folder here`),type:`button`,children:[(0,P.jsx)(li,{size:15}),(0,P.jsxs)(Gf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Hf,{children:D(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,P.jsx)(_p,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:x,onSelectionChange:S,version:s});case`recent`:return Bt(e);case`drives`:return Vt(e);default:return(0,P.jsx)(vp,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:x,onSelectionChange:S,openOnSingleClick:k?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:k?.showCheckboxes??!0,visibilityVersion:g})}};return(0,P.jsxs)(Jd,{$flush:!!k?.overviewBanner,ref:ze,children:[!b&&(0,P.jsxs)(Cf,{$overlay:!!k?.overviewBanner,children:[(0,P.jsx)(wf,{role:`group`,title:D(`Columns`),children:[1,2,3,4,5].map(e=>(0,P.jsx)(Tf,{$active:yt===e,onClick:()=>void bt({overviewColumns:e}),title:o(D,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),O&&(0,P.jsxs)(Df,{children:[(0,P.jsxs)(Ef,{onClick:()=>R(e=>!e),onPointerDown:e=>e.stopPropagation(),title:D(`Add a panel`),type:`button`,children:[(0,P.jsx)(li,{size:12}),D(`Add panel ▾`)]}),ge&&(0,P.jsx)(Of,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,P.jsx)(kf,{onClick:()=>{R(!1),Pt(e)},type:`button`,children:D(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),O&&(0,P.jsxs)(Ef,{onClick:()=>void xt(),title:D(`Put every panel back the way the app ships it`),type:`button`,children:[(0,P.jsx)(ci,{size:12}),D(`Restore default panels`)]}),Ne.available&&(0,P.jsx)(Lf,{onClick:e=>Ne.open(e.clientX,e.clientY),title:D(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{size:14})}),(0,P.jsxs)(Ef,{onClick:()=>{se(e=>!e),R(!1),he(null),z(null),ve(null)},title:D(O?`Done`:`Edit`),type:`button`,children:[O?(0,P.jsx)(bi,{size:13}):(0,P.jsx)(Bi,{size:13}),D(O?`Done`:`Edit`)]})]}),B&&(0,P.jsx)(ap,{children:B}),k?.overviewBanner&&(0,P.jsxs)(Yd,{ref:Be,style:{height:`${He}px`,"--banner-image-width":`${et}px`,"--banner-image-shift":`${rt}px`,"--banner-travel":`${nt}px`,"--banner-overlap":`0px`},children:[(0,P.jsx)(Xd,{children:de?(0,P.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Je({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:F??void 0}):(0,P.jsx)(`img`,{alt:``,onLoad:e=>{let t=M?1920:e.currentTarget.naturalWidth||1920,n=M?1080:e.currentTarget.naturalHeight||1080;Je({width:t,height:n})},ref:Ve,src:F??void 0})}),O&&(0,P.jsx)(Zd,{onDoubleClick:()=>{Re.current=null,Ie(null),bt({overviewBannerHeight:220})},onPointerCancel:Ot,onPointerDown:Et,onPointerMove:Dt,onPointerUp:Ot,title:D(`Drag to resize; double-click to reset`)})]}),(0,P.jsxs)(Qd,{$offset:k?.overviewBanner?100:0,children:[O&&(0,P.jsxs)($d,{children:[(0,P.jsxs)(ef,{children:[(0,P.jsx)(tf,{children:D(`Banners`)}),k?.overviewBanner&&(0,P.jsxs)(Ef,{onClick:()=>ot(!0),title:D(`Adjust framing…`),type:`button`,children:[(0,P.jsx)(Bi,{size:12}),D(`Adjust framing…`)]})]}),(0,P.jsxs)(nf,{children:[(0,P.jsx)(sf,{children:(0,P.jsx)(cf,{$active:!k?.overviewBanner,onClick:wt,title:D(`No banner`),type:`button`,children:(0,P.jsxs)(df,{children:[(0,P.jsx)(xi,{size:16}),(0,P.jsx)(`span`,{children:D(`No banner`)})]})})}),ju.map(e=>(0,P.jsx)(sf,{children:(0,P.jsx)(cf,{$active:k?.overviewBanner===e.id,onClick:()=>void bt({overviewBanner:e.id}),title:`${D(e.concept)} · ${D(e.preset)}`,type:`button`,children:(0,P.jsx)(Ud,{poster:e.url,source:e.id})})},e.id)),ku.map(e=>(0,P.jsx)(sf,{children:(0,P.jsxs)(cf,{$active:k?.overviewBanner===e.id,onClick:()=>void bt({overviewBanner:e.id}),title:D(e.name),type:`button`,children:[(0,P.jsx)(Ud,{poster:e.poster,source:e.id}),(0,P.jsx)(uf,{children:(0,P.jsx)(Oi,{size:11})})]})},e.id)),(k?.overviewBanners??[]).map(e=>(0,P.jsxs)(sf,{children:[(0,P.jsx)(cf,{$active:k?.overviewBanner===e||k?.overviewBanner===`url:${e}`,onClick:()=>void bt({overviewBanner:C(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,P.jsx)(Ud,{source:e})}),(0,P.jsx)(lf,{onClick:()=>Tt(e),title:D(`Remove`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]},e)),(0,P.jsxs)(Sf,{onClick:()=>void St(),title:D(`Add banner…`),type:`button`,children:[(0,P.jsx)(li,{size:18}),(0,P.jsx)(`span`,{children:D(`Add banner…`)})]})]}),(0,P.jsxs)(rf,{children:[(0,P.jsx)(af,{onChange:e=>L(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ct()},placeholder:`https://…`,value:pe}),(0,P.jsx)(of,{disabled:!C(pe),onClick:()=>void Ct(),type:`button`,children:D(`Add URL`)})]})]}),(0,P.jsx)(Af,{ref:ft,$columns:yt,children:ut.map(e=>{let t=dt.indexOf(e.id);return(0,P.jsxs)(jf,{children:[(0,P.jsxs)(Mf,{children:[(0,P.jsxs)(Nf,{children:[(0,P.jsxs)($f,{children:[O?(0,P.jsx)(ep,{onClick:()=>he(U(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,P.jsx)(Ds,{panel:e,size:15})}):(0,P.jsx)(Ds,{panel:e,size:15}),U(e.id)&&(0,P.jsx)(Bd,{onPick:t=>W(e.id,t),value:e.icon})]}),O?(0,P.jsx)(If,{defaultValue:e.title,onBlur:t=>At(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,P.jsx)(Ff,{children:D(e.title)})]}),(0,P.jsxs)(Pf,{children:[!O&&e.kind===`recent`&&(0,P.jsx)(Ef,{onClick:()=>void Ue().then(u),title:D(`Clear`),type:`button`,children:D(`Clear`)}),!O&&e.kind===`frequent`&&(0,P.jsx)(Ef,{onClick:()=>void We().then(()=>m?.()),title:D(`Clear the frequent list`),type:`button`,children:D(`Clear`)}),!O&&(e.kind===`home`||e.kind===`folder`)&&(0,P.jsx)(Ef,{onClick:()=>c(e.path??a),title:D(`Open folder`),type:`button`,children:D(`Open`)}),O&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Lf,{$active:e.pinned,onClick:()=>Mt(e.id),title:e.pinned?D(`Unpin from the sidebar`):D(`Pin to the sidebar`),type:`button`,children:(0,P.jsx)(mi,{size:12})}),(0,P.jsx)(Lf,{$active:e.view===`list`,onClick:()=>jt(e.id,`list`),title:D(`List`),type:`button`,children:(0,P.jsx)(hi,{size:13})}),(0,P.jsx)(Lf,{$active:e.view===`grid`,onClick:()=>jt(e.id,`grid`),title:D(`Grid`),type:`button`,children:(0,P.jsx)(gi,{size:13})}),(0,P.jsx)(Lf,{disabled:t===0,onClick:()=>kt(e.id,-1),title:D(`Move up`),type:`button`,children:(0,P.jsx)(si,{size:12})}),(0,P.jsx)(Lf,{disabled:t===dt.length-1,onClick:()=>kt(e.id,1),title:D(`Move down`),type:`button`,children:(0,P.jsx)(si,{size:12})}),(0,P.jsx)(Lf,{onClick:()=>Nt(e.id),title:D(`Remove panel`),type:`button`,children:(0,P.jsx)(xi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Wt(e):(0,P.jsx)(Xf,{children:Wt(e)})]},e.id)})})]}),at&&F&&(0,P.jsx)(Wd,{height:He,offset:Xe,onCancel:()=>ot(!1),onSave:e=>{bt({overviewBannerOffset:e}),ot(!1)},source:F,video:de}),H&&(0,P.jsx)(lo,{directory:a,menu:{x:H.x,y:H.y,paths:[H.target.path]},onClose:()=>Pe(null),onCopy:(e,t)=>void vt(e,t),onAddToTray:ee,onAddFavorite:te,onRemoveFavorite:ne,favoritePaths:ie,onExtractArchive:T,onOpen:lt,onOpenFile:e=>x?x(e):void Se(e),shortcuts:Ht,target:H.target})]})}function gp({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=I();return(0,P.jsxs)(rp,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,P.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,P.jsx)(ip,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,P.jsx)(xi,{size:11})}),(0,P.jsx)(ip,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,P.jsx)(bi,{size:12})})]})}function _p({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=I(),[c,l]=(0,E.useState)(null),[u,d]=(0,E.useState)(null),f=Fn(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,E.useEffect)(()=>{Ve().then(l,()=>l([]))},[a]),!c)return(0,P.jsx)(op,{children:s(`Reading…`)});if(c.length===0)return(0,P.jsx)(op,{children:s(`Folders you open often show up here.`)});let m=e=>o(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,P.jsx)(Rf,{children:c.map(e=>{let i=In(f,e.path);return(0,P.jsxs)(zf,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Gt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,P.jsx)(Bf,{children:i&&f.useIcons?(0,P.jsx)(Os,{place:i,size:18}):(0,P.jsx)(Ks,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(Vf,{children:[(0,P.jsx)(`strong`,{children:i?.name||e.name}),(0,P.jsx)(Hf,{children:m(e)})]})]},e.path)})}):(0,P.jsx)(Uf,{children:c.map(e=>{let i=In(f,e.path);return(0,P.jsxs)(Wf,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Gt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,P.jsx)(Os,{place:i,size:15}):(0,P.jsx)(Ks,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,P.jsxs)(Gf,{children:[(0,P.jsx)(`strong`,{children:i?.name||e.name}),(0,P.jsx)(Hf,{children:m(e)})]})]},e.path)})})}function vp({path:e,mode:n,onOpen:r,onContextMenu:i,onPick:a,onSelectionChange:o,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:l,visibilityVersion:u}){let d=I(),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=Fn();return(0,E.useEffect)(()=>{e&&(p(null),Ce(e).then(p,()=>p(null)))},[e,u]),(0,E.useEffect)(()=>{if(N.available)return N.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Ce(e,!1).then(p,()=>void 0)})},[e]),f?n===`list`?(0,P.jsx)(Yf,{children:(0,P.jsx)(al,{error:null,listing:f,loading:!1,onOpen:a??r,onOpenFile:a??(e=>void Se(e)),onRefresh:()=>void Ce(e,!1).then(p,()=>void 0),onRename:(e,n)=>p(r=>r&&{...r,entries:r.entries.map(r=>t(r.fullPath,e)?{...r,name:v(n),fullPath:n}:r)}),onSelectionChange:o,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:l,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...B,columns:be.columns??[]}})}):(0,P.jsx)(Xf,{children:f.entries.length===0?(0,P.jsx)(op,{children:d(`This folder is empty.`)}):(0,P.jsx)(Zf,{children:f.entries.map(e=>{let t=In(g,e.fullPath);return(0,P.jsxs)(Qf,{$selected:m===e.fullPath,onClick:t=>{a?(h(e.fullPath),o?.([e.fullPath])):e.isDirectory?r(e.fullPath,Gt(t)):Se(e.fullPath)},onDoubleClick:()=>a?.(e.fullPath),onContextMenu:t=>i?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&g.useIcons?(0,P.jsx)(Os,{place:t,size:16}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,P.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,P.jsx)(op,{children:d(`Reading…`)})}var yp=`yafm://`,bp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function xp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function Sp(e){return`${yp}${e===`home`?`overview`:e}`}function Cp(e){return xp(e)?bp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function wp(e){let t=e.trim();if(t.length===0)return null;if(!xp(t))return t;let n=bp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Sp(n):null}function Tp({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=I(),s=Fn(),[c,l]=(0,E.useState)(!1),[u,d]=(0,E.useState)(``),[f,p]=(0,E.useState)([]),[m,h]=(0,E.useState)(0),[g,_]=(0,E.useState)(null),[v,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(null),S=(0,E.useRef)(null),ee=(0,E.useRef)(null),te=(0,E.useRef)(0);(0,E.useEffect)(()=>{if(!Ac(e)){x(null);return}let t=jc(e);if(!t){x(null);return}let n=!0;return wc().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);x({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&x(null)),()=>{n=!1}},[e]),(0,E.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,E.useEffect)(()=>{r&&r!==te.current&&(te.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,E.useEffect)(()=>{c&&S.current?.select()},[c]),(0,E.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let ne=()=>{d(e.replace(/\\/g,`/`)),l(!0)},re=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,E.useEffect)(()=>{if(!c){p([]);return}let e=kp(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{Ce(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let C=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,E.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=ee.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,P.jsxs)(Fp,{onPointerDown:e=>e.stopPropagation(),ref:ee,children:[(0,P.jsxs)(zp,{children:[(0,P.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?C(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):re(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:S,spellCheck:!1,value:u}),(0,P.jsx)(Bp,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,P.jsx)(xi,{size:12})}),(0,P.jsx)(Bp,{$apply:!0,onClick:re,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,P.jsx)(bi,{size:14})})]}),f.length>0&&g&&(0,Pa.createPortal)((0,P.jsx)(Ip,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,P.jsxs)(Lp,{$active:t===m,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,P.jsx)(Ks,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,P.jsx)(Rp,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:Ep(e,b)??Op(e,s.places);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Ap,{onClick:ne,title:o(`Click to type a path`),children:w.map((t,n)=>(0,P.jsxs)(jp,{$last:n===w.length-1,children:[n>0&&(0,P.jsx)(Np,{children:(0,P.jsx)(fi,{size:9})}),(0,P.jsxs)(Pp,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,P.jsx)(Mp,{children:(0,P.jsx)(Os,{place:t.place,size:13})}):t.icon&&(0,P.jsx)(Mp,{children:t.icon}),t.label]})]},t.path))}),v&&(0,P.jsx)(Za,{items:[{label:o(`Open`),icon:(0,P.jsx)(di,{size:14}),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),icon:(0,P.jsx)(li,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`Copy as path`),icon:(0,P.jsx)(oa,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...xp(v.path)?[{label:o(`Open with…`),icon:(0,P.jsx)(Mi,{size:14}),onSelect:()=>void Mt(v.path)},{label:o(`Properties`),icon:(0,P.jsx)(pi,{size:14}),onSelect:()=>void jt([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function Ep(e,t){let n=jc(e);if(!n)return null;let r=Mc(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,P.jsx)(ea,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Dp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Op(e,n){let r=Dp(e),i=-1,a=null;for(let e of Object.values(n)){if(e.name.trim().length===0)continue;let n=r.findIndex(n=>t(n.path,e.path));n>i&&(i=n,a=e)}return a&&i>=0&&r.splice(0,i+1,{label:a.name,path:r[i].path,place:a}),r}function kp(e){if(xp(e)||Ac(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Ap=_.div`
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
`,jp=_.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Mp=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Np=_.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Pp=_.button`
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
`,Fp=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Ip=_.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Fa}
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
`,Lp=_.button`
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
`,Rp=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zp=_.div`
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
`,Bp=_.button`
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
`,Vp=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,P.jsx)(`path`,{d:`M4 4v6h6`})]});function Hp({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,showDetails:i=!0,onShowDetails:a,videoAudio:s=!1,videoAutoplay:c=!1,platform:l}){let u=I(),d=Gc(`recycle`),p=l===`windows`,[m,h]=(0,E.useState)([]),[g,_]=(0,E.useState)([]),[v,b]=(0,E.useState)(!1),[x,S]=(0,E.useState)(null),[ee,te]=(0,E.useState)(!0),[ne,re]=(0,E.useState)(!1),[C,w]=(0,E.useState)(null),[ie,T]=(0,E.useState)(!1),[ae,D]=(0,E.useState)(()=>new Set),[oe,O]=(0,E.useState)(null),[se,k]=(0,E.useState)(()=>{let e=Bn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[A,j]=(0,E.useState)(null),[M,ce]=(0,E.useState)(null),[le,N]=(0,E.useState)(()=>{let e=Rn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),ue=(0,E.useRef)(null),de=e=>{N(e),zn(`yafm.recycle.preview.width`,e)},fe=(0,E.useCallback)(async()=>{te(!0),w(null);try{h(await Me(ie))}catch(e){w(e instanceof Error?e.message:String(e))}finally{te(!1)}},[ie]),F=(0,E.useCallback)(async()=>{try{h(await Me(ie))}catch{}},[ie]);(0,E.useEffect)(()=>{fe()},[fe]),(0,E.useEffect)(()=>{let e=window.setInterval(()=>void F(),1e4);return()=>window.clearInterval(e)},[F]),(0,E.useEffect)(()=>{ie||(_([]),b(!1),S(null))},[ie]),(0,E.useEffect)(()=>{D(e=>{let t=new Set(m.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[m]);let pe=(0,E.useMemo)(()=>{let e=new Set(m.map(e=>e.id));return[...m,...g.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Up(e,t,se.column);return se.descending?-n:n})},[m,g,se]),L=(0,E.useMemo)(()=>!t?.open||t.query.trim().length===0?pe:pe.filter(e=>Dn(e.name,t)||Dn(e.originalPath,t)),[pe,t?.open,t?.query,t?.matchCase,t?.regex]),me=(0,E.useRef)(null);zd(me,t??null,`[data-search-block]`,n??(()=>void 0),[pe]),(0,E.useEffect)(()=>{D(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,E.useEffect)(()=>{r&&D(new Set(L.map(e=>e.id)))},[r]);let he=(0,E.useMemo)(()=>pe.filter(e=>ae.has(e.id)),[pe,ae]),ge=he.filter(e=>e.removable&&!e.isOrphan),R=he.filter(e=>e.removable),_e=(e,t)=>{let n=t.ctrlKey||t.metaKey;D(r=>{if(t.shiftKey&&oe){let t=pe.findIndex(e=>e.id===oe),i=pe.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(pe[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),O(e.id)},ve=(0,E.useCallback)(()=>D(new Set(L.map(e=>e.id))),[L]),ye=L.length>0&&L.every(e=>ae.has(e.id)),z=(0,E.useCallback)(async()=>{let e=ge.map(e=>e.id);if(e.length!==0){re(!0);try{let t=await Pe(e);t.ok||await Sa(o(u,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),D(new Set),await fe()}finally{re(!1)}}},[fe,ge,u]),B=(0,E.useCallback)(async()=>{let e=R.map(e=>e.id);if(ce(null),e.length!==0){re(!0);try{let t=await Fe(e);!t.ok&&!t.cancelled&&await Sa(o(u,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),D(new Set),await fe()}finally{re(!1)}}},[R,fe,u]),be=async()=>{ce(null),re(!0);try{await H(ie),D(new Set),await fe()}finally{re(!1)}},xe=async()=>{re(!0),S(null);try{let e=await Le();if(e.cancelled){S(`Elevation was declined — nothing was read.`);return}if(e.failed){S(`The elevated helper could not produce a report. Try again.`);return}_(e.entries),b(!0)}finally{re(!1)}},Se=async()=>{re(!0),ce(null);try{await Re(),_([]),b(!1),S(null),await fe()}finally{re(!1)}},Ce=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},we=e=>{navigator.clipboard.writeText(e.originalPath)},V=(e,t)=>{e.preventDefault(),t&&!ae.has(t.id)&&D(new Set([t.id])),j({x:e.clientX,y:e.clientY})};(0,E.useEffect)(()=>(Bc(`recycle`,ae.size>0?(e,t)=>j({x:e,y:t}):null),()=>Bc(`recycle`,null)),[ae]),(0,E.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),ve()):e.key===`Delete`?(e.preventDefault(),R.length>0&&ce(`delete`)):e.key===`Enter`&&ge.length>0?(e.preventDefault(),z()):e.key===`Escape`&&(D(new Set),j(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[R.length,ge.length,z,ve]);let Te=[{label:u(`Restore`),icon:(0,P.jsx)(Vp,{width:14,height:14}),disabled:ge.length===0,onSelect:()=>void z()},{label:u(`Delete permanently`),icon:(0,P.jsx)(yi,{size:14}),danger:!0,disabled:R.length===0,onSelect:()=>ce(`delete`)},{label:u(`Properties`),icon:(0,P.jsx)(pi,{size:14}),disabled:he.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=he;e&&Ie(e.id)}},{label:u(`Open original location`),icon:(0,P.jsx)(ri,{size:14}),disabled:he.length!==1,onSelect:()=>{let[e]=he;e&&Ce(e)}},{label:u(`Copy original path`),icon:(0,P.jsx)(oa,{size:14}),disabled:he.length!==1,onSelect:()=>{let[e]=he;e&&we(e)}},{label:u(`Select all`),separatorBefore:!0,onSelect:ve},{label:u(`Refresh`),icon:(0,P.jsx)(ci,{size:14}),onSelect:()=>void fe()}],Ee=he.length>0?he[0]:null,De=Ee?{name:Ee.name,path:Ee.contentPath||Ee.originalPath,isDirectory:Ee.isDirectory,size:Ee.size,modified:Ee.deleted,fields:[{label:u(`Type`),value:u(Gp(Ee))},{label:u(`Original location`),value:Ee.originalPath},{label:u(`Date deleted`),value:y(Ee.deleted)},{label:u(`Size`),value:Ee.isDirectory?`—`:f(Ee.size)},...Ee.owner?[{label:u(`Owner`),value:Ee.owner}]:[],{label:u(`Status`),value:Ee.isOrphan?u(`Metadata only`):Ee.removable?u(`Restorable`):u(`Other profile`)}]}:null;return(0,P.jsxs)(qp,{ref:ue,onContextMenu:e=>V(e),children:[(0,P.jsxs)(Jp,{children:[(0,P.jsxs)(Yp,{children:[(0,P.jsx)(yi,{size:16}),(0,P.jsx)(`span`,{children:u(`Recycle Bin`)}),(0,P.jsxs)(Xp,{children:[ee?`…`:o(u,pe.length,`1 item`,`{count} items`),ae.size>0&&` · ${u(`{count} selected`,{count:ae.size})}`]})]}),(0,P.jsxs)(Zp,{children:[(0,P.jsx)($p,{$on:ie,onClick:()=>T(e=>!e),title:u(`Show metadata records whose content is already gone`),type:`button`,children:u(`Orphans`)}),ie&&p&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Qp,{disabled:ne||v,onClick:()=>void xe(),title:u(v?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:u(ne?`Working…`:v?`Admin view loaded`:`Show all (admin)…`)}),v&&g.length>0&&(0,P.jsx)(Qp,{disabled:ne,onClick:()=>ce(`purge`),type:`button`,children:u(`Delete every orphan`)})]}),(0,P.jsx)(Qp,{disabled:ne||ge.length===0,onClick:()=>void z(),type:`button`,children:u(`Restore`)}),(0,P.jsx)(Qp,{$danger:!0,disabled:ne||R.length===0,onClick:()=>ce(`delete`),type:`button`,children:u(`Delete`)}),(0,P.jsx)(Qp,{disabled:ne||pe.length===0,onClick:()=>ce(`empty`),type:`button`,children:u(`Empty`)}),(0,P.jsx)(em,{onClick:()=>void fe(),title:u(`Refresh`),type:`button`,children:(0,P.jsx)(ci,{size:14})}),d.available&&(0,P.jsx)(em,{onClick:e=>d.open(e.clientX,e.clientY),title:u(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{size:14})})]})]}),x&&(0,P.jsx)(xm,{children:x}),C&&(0,P.jsx)(Sm,{children:C}),!C&&!ee&&(t?.open&&t.query.trim().length>0?L.length===0:pe.length===0)&&(0,P.jsx)(Sm,{children:t?.open&&t.query.trim().length>0?u(`No matching items.`):u(`The recycle bin is empty.`)}),pe.length>0&&(0,P.jsxs)(bm,{children:[(0,P.jsxs)(tm,{ref:me,children:[(0,P.jsxs)(rm,{children:[(0,P.jsx)(lm,{$checked:ye,$partial:!ye&&ae.size>0,onClick:()=>ye?D(new Set):ve(),title:u(ye?`Select none`:`Select all`),type:`button`,children:ye?(0,P.jsx)(bi,{size:9}):ae.size>0&&(0,P.jsx)(um,{})}),(0,P.jsxs)(im,{onClick:()=>Oe(`name`),type:`button`,children:[u(`Name`),Wp(se,`name`)]}),(0,P.jsxs)(im,{onClick:()=>Oe(`original`),type:`button`,children:[u(`Original location`),Wp(se,`original`)]}),(0,P.jsxs)(im,{onClick:()=>Oe(`deleted`),type:`button`,children:[u(`Date deleted`),Wp(se,`deleted`)]}),(0,P.jsxs)(im,{onClick:()=>Oe(`size`),type:`button`,children:[u(`Size`),Wp(se,`size`)]}),(0,P.jsxs)(im,{onClick:()=>Oe(`type`),type:`button`,children:[u(`Type`),Wp(se,`type`)]}),(0,P.jsx)(`span`,{})]}),(0,P.jsx)(am,{onClick:e=>{e.target===e.currentTarget&&D(new Set)},children:pe.map(e=>(0,P.jsxs)(om,{$checked:ae.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>_e(e,t),onContextMenu:t=>V(t,e),onDoubleClick:()=>{D(new Set([e.id])),O(e.id),a?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,P.jsx)(cm,{$checked:ae.has(e.id),children:ae.has(e.id)&&(0,P.jsx)(bi,{size:9})}),(0,P.jsxs)(dm,{children:[(0,P.jsx)(Kp,{entry:e}),(0,P.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,P.jsx)(ym,{children:u(`Metadata only`)}),e.owner&&(0,P.jsx)(ym,{$other:!0,children:u(`Other profile`)})]}),(0,P.jsx)(pm,{children:e.originalPath}),(0,P.jsx)(mm,{children:y(e.deleted)}),(0,P.jsx)(hm,{children:e.isDirectory?`—`:f(e.size)}),(0,P.jsx)(gm,{children:u(Gp(e))}),(0,P.jsxs)(_m,{children:[e.removable&&!e.isOrphan&&(0,P.jsx)(vm,{onClick:t=>{t.stopPropagation(),Pe([e.id]).then(fe)},title:u(`Restore to its original folder`),type:`button`,children:(0,P.jsx)(Vp,{})}),e.removable&&(0,P.jsx)(vm,{$danger:!0,onClick:t=>{t.stopPropagation(),D(new Set([e.id])),ce(`delete`)},title:e.isOrphan?u(`Remove the leftover record`):u(`Delete permanently`),type:`button`,children:(0,P.jsx)(yi,{size:13})})]})]},e.id))})]}),i&&(0,P.jsx)(Xo,{emptyNote:u(`Nothing selected.`),info:De,onWidth:de,selectionNote:he.length>1?o(u,he.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:s,videoAutoplay:c,width:le})]}),A&&(0,P.jsx)(Za,{items:Te,onClose:()=>j(null),x:A.x,y:A.y}),(0,P.jsx)(zo,{confirmLabel:u(M===`empty`?`Empty the bin`:M===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:M===`empty`?o(u,pe.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):M===`purge`?u(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):o(u,R.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>ce(null),onConfirm:()=>{M===`empty`?be():M===`purge`?Se():B()},open:M!==null,title:u(M===`empty`?`Empty the recycle bin`:M===`purge`?`Delete every orphan`:`Delete permanently`)})]});function Oe(e){k(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Vn(`yafm.recycle.sort`,n),n})}}function Up(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return Gp(e).localeCompare(Gp(t),void 0,{sensitivity:`base`})}}function Wp(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function Gp(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function Kp({entry:e}){let t=un(e.originalPath,e.isDirectory);return(0,P.jsx)(fm,{children:t?(0,P.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,P.jsx)(ri,{}):(0,P.jsx)(ii,{})})}var qp=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Jp=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Yp=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Xp=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Zp=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Qp=_.button`
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
`,$p=_(Qp)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,em=_.button`
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
`,tm=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,nm=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,rm=_.div`
    display: grid;
    grid-template-columns: ${nm};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,im=_.button`
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
`,am=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,om=_.div`
    display: grid;
    grid-template-columns: ${nm};
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
`,sm=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,cm=_.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,lm=_.button`
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
`,um=_.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,dm=_(sm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,fm=_.span`
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
`,pm=_(sm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,mm=_(sm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,hm=_(sm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,gm=_(sm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,_m=_.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,vm=_.button`
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
`,ym=_.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,bm=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,xm=_.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Sm=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Cm(){return N.available?(await N.request(`app.tags`)).tags:[]}async function wm(e){return!N.available||!e?!1:(await N.request(`app.tags.delete`,{name:e})).ok}async function Tm(e,t){return!N.available||!e?[]:(await N.request(`app.tags.create`,{name:e,color:t})).tags}async function Em(e,t){return!N.available||!e?!1:(await N.request(`app.tags.color`,{name:e,color:t})).ok}async function Dm(e,t){return!N.available||!e||!t?!1:(await N.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function Om(){let e=I();return(0,P.jsx)(km,{title:e(`Always applies to every folder`),children:e(`Global`)})}var km=_.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Am=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function jm(e){return`"${e.replaceAll(`"`,``)}"`}function Mm(e){let t=document.documentElement.style;for(let n of Am){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${jm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Nm(){return N.available?(await N.request(`app.fonts`)).fonts??[]:[]}function Pm({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=I(),[s,c]=(0,E.useState)(null),[l,u]=(0,E.useState)(``),d=(0,E.useRef)(null),f=(0,E.useRef)(null),p=(0,E.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,E.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Fm,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,P.jsx)(Im,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,P.jsx)(Lm,{children:`▾`})]}),s&&(0,Pa.createPortal)((0,P.jsxs)(Rm,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,P.jsxs)(zm,{children:[(0,P.jsx)(oi,{size:12}),(0,P.jsx)(Bm,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,P.jsxs)(Vm,{children:[(0,P.jsxs)(Hm,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,P.jsxs)(Wm,{children:[n,` `,(0,P.jsx)(Km,{children:o(`(default)`)})]}),!e&&(0,P.jsx)(bi,{size:11})]}),p.map(t=>(0,P.jsxs)(Hm,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,P.jsxs)(Um,{children:[(0,P.jsx)(Wm,{children:t}),(0,P.jsx)(Gm,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,P.jsx)(bi,{size:11})]},t)),p.length===0&&(0,P.jsx)(qm,{children:o(`No matching font.`)})]})]}),document.body)]})}var Fm=_.button`
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
`,Im=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Lm=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,Rm=_.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${Ga}
`,zm=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,Bm=_.input`
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
`,Vm=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,Hm=_.button`
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
`,Um=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Wm=_.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Gm=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Km=_.span`
    color: var(--text-muted);
    font-size: 10px;
`,qm=_.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Jm=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],Ym=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Xm=`en`,Zm=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],Qm=new Date(2026,10,5,16,8).getTime(),$m=`system`,eh={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},th=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],nh=`yafm.colors.recent`;function rh(){let e=Bn(nh);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function ih({appInfo:e,focusSection:t,onSettingsChanged:n,onOpenFolder:r,find:i,onSearchMatches:a}){let s=I(),[c,l]=(0,E.useState)([]),[u,d]=(0,E.useState)(null),[p,g]=(0,E.useState)(null),[_,y]=(0,E.useState)(null),[x,S]=(0,E.useState)(``),[ee,te]=(0,E.useState)(`file`),[re,ie]=(0,E.useState)(!1),[T,ae]=(0,E.useState)(!1),[D,oe]=(0,E.useState)(null),[O,se]=(0,E.useState)(!1),[k,A]=(0,E.useState)(!1),[j,M]=(0,E.useState)(null),[ce,le]=(0,E.useState)(null),[N,ue]=(0,E.useState)(null),[fe,F]=(0,E.useState)(!1),[pe,L]=(0,E.useState)(null),[me,he]=(0,E.useState)(!1),[ge,R]=(0,E.useState)(null),[_e,ve]=(0,E.useState)(null),[ye,z]=(0,E.useState)(!1),[B,xe]=(0,E.useState)([]),[Se,Ce]=(0,E.useState)(null),[we,V]=(0,E.useState)(!1),[Te,Ee]=(0,E.useState)(null),[De,Oe]=(0,E.useState)(``),[ke,Ae]=(0,E.useState)(ks),[je,Me]=(0,E.useState)(null),[Ne,H]=(0,E.useState)(null),[Pe,Fe]=(0,E.useState)(``),[Ie,Le]=(0,E.useState)(``),[Re,ze]=(0,E.useState)(null),[Be,Ve]=(0,E.useState)(rh),[He,Ue]=(0,E.useState)({}),[We,Ke]=(0,E.useState)(null),[qe,Je]=(0,E.useState)(null),[Ze,Qe]=(0,E.useState)(!1),[at,st]=(0,E.useState)(!1),[ct,ht]=(0,E.useState)(null),[vt,yt]=(0,E.useState)(th[0].id),[bt,xt]=(0,E.useState)([]),[St,Ct]=(0,E.useState)(null),[wt,Tt]=(0,E.useState)(null),[Et,Dt]=(0,E.useState)(null),[Ot,kt]=(0,E.useState)(!1),[At,jt]=(0,E.useState)(``),Mt=(0,E.useRef)(null),Nt=(0,E.useRef)({}),W=p?.defaultView??be,Pt=p?.themePresets??[],Ft=e?.platform===`windows`,It=Ft?ce?ce.registered&&ce.pathMatches:!1:p?.archiveHandler??!1,Lt=ce?.registered??p?.archiveHandler??!1,Rt=Ft?N?N.registered&&N.pathMatches:!1:p?.defaultFileManager??!1;zd(Mt,i??null,`section`,a??(()=>void 0),[p]),(0,E.useEffect)(()=>{let e=Mt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){yt(th[th.length-1].id);return}let n=t+110,r=th[0].id;for(let{id:e}of th){let t=Nt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}yt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let zt=e=>t=>{Nt.current[e]=t},Bt=e=>{Nt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),yt(e)};(0,E.useEffect)(()=>{t&&Bt(t)},[t]),(0,E.useEffect)(()=>{de().then(e=>l(e.available),()=>l([]))},[]),(0,E.useEffect)(()=>{Nm().then(xt,()=>xt([]))},[]),(0,E.useEffect)(()=>{gt().then(Tt,()=>Tt(null))},[]),(0,E.useEffect)(()=>{lt().then(Je,()=>void 0)},[]),(0,E.useEffect)(()=>{Ge().then(d,()=>d(null)),Ye().then(g,()=>g(null)),pt().then(se,()=>se(!1)),tt().then(le,()=>le(null)),$e().then(ue,()=>ue(null)),Cm().then(xe,()=>xe([]))},[]),(0,E.useEffect)(()=>{let e=()=>void ft().then(oe,()=>oe(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let G=async e=>{if(!p)return;let t={...p,...e};Object.keys(e).every(e=>t[e]===p[e])||(g(t),sn(),g(await it(t)),n())},Vt=async e=>{let t=await va(e);if(!t)return;let n=p?.backgroundCustom??[];await G({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Ut=async()=>{let e=At.trim();if(!p||!C(e))return;let t=p.backgroundCustom??[];jt(``),await G({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Wt=e=>{if(!p)return;let t=p.backgroundSource;G({backgroundCustom:p.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},Gt=async()=>{if(!p)return;let t=await _a();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.protectedPaths.includes(r)||await G({protectedPaths:[...p.protectedPaths,r]})},Jt=()=>{let e=Pe.trim();p&&e&&!p.protectedPaths.includes(e)&&(Fe(``),G({protectedPaths:[...p.protectedPaths,e]}))},Yt=()=>{if(!p||!je)return;let e=je.value.trim(),t=je.from;Me(null),e.length!==0&&e!==t&&G({protectedPaths:p.protectedPaths.map(n=>n===t?e:n)})},Xt=e=>{p&&G({protectedPaths:p.protectedPaths.filter(t=>t!==e)})},Zt=async()=>{let e=await Xe();e.length>0&&await G({protectedPaths:e})},Qt=()=>{if(!p||!Ne)return;let e=Ne.value.trim(),t=Ne.from;H(null),e&&e!==t&&G({directoryIndexBlacklist:p.directoryIndexBlacklist.map(n=>n===t?e:n)})},$t=()=>{let e=Ie.trim();p&&e&&!p.directoryIndexBlacklist.includes(e)&&(Le(``),G({directoryIndexBlacklist:[...p.directoryIndexBlacklist,e]}))},en=async()=>{if(!p)return;let t=await _a();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.directoryIndexBlacklist.includes(r)||await G({directoryIndexBlacklist:[...p.directoryIndexBlacklist,r]})},tn=e=>{p&&G({directoryIndexBlacklist:p.directoryIndexBlacklist.filter(t=>t!==e)})},nn=()=>{G({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},rn=()=>{if(!p||Re===null)return;let e=Re.trim()||`yyyy/MM/dd HH:mm`;ze(null),e!==p.timeFormatPattern&&G({timeFormatPattern:e})},an=(e,t)=>{Ve(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Vn(nh,i),i})},on=h(p?.accentColor,ne),cn=h(p?.secondaryColor,b),K=(e,t)=>{p&&(an(`accent`,on),an(`secondary`,cn),G({accentColor:e,secondaryColor:t}))},q=(e,t)=>{p&&(an(e,e===`accent`?on:cn),G(e===`accent`?{accentColor:t}:{secondaryColor:t}))},ln=async()=>{Qe(!0),st(!1);try{Je(await ut())}catch{st(!0)}finally{Qe(!1)}},un=async()=>{if(!p||!We)return;let e=We.name.trim()||`${We.accent.toUpperCase()} / ${We.secondary.toUpperCase()}`,t=[...p.themePresets,{name:e,accent:We.accent,secondary:We.secondary}];Ke(null),await G({themePresets:t})},dn=async e=>{p&&await G({themePresets:p.themePresets.filter((t,n)=>n!==e)})},J=e=>{let t=ct;ht(null),t&&t.role===e&&(e===`accent`?on:cn).toLowerCase()!==t.color.toLowerCase()&&an(e,t.color)},fn=async()=>{let e=De.trim();if(e&&!we){V(!0),Ee(null);try{xe(await Tm(e,ke)),Oe(``)}catch{Ee(s(`Could not add the tag.`))}finally{V(!1)}}},pn=async(e,t)=>{xe(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Em(e,t)||Ee(s(`Could not change the tag's color.`))},mn=async e=>{if(we)return;V(!0),Ee(null);let t=await wm(e);xe(await Cm()),t||Ee(`"${e}" is still used by a folder whose index could not be updated.`),V(!1)},hn=async()=>{let e=Se;if(!e||we)return;let t=e.value.trim();t.length===0||t===e.name?Ce(null):(V(!0),Ee(null),await Dm(e.name,t)?(xe(await Cm()),Ce(null)):Ee(`Could not rename "${e.name}".`),V(!1))},gn=async e=>{let t=new Set(W.columns??be.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Xc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await G({defaultView:{...W,columns:n}})},_n=async()=>{if(k)return;let e=!O;A(!0),M(null);try{let t=await mt(e);se(t),g(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&M(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{M(`The request to Windows failed. Try again.`)}finally{A(!1)}},vn=async()=>{if(me||!p)return;let e=!Rt;he(!0),R(null);try{let t=await et(e);ue(t);let r=Ft?t.registered&&t.pathMatches:e;g(e=>e&&{...e,defaultFileManager:r}),n(),Ft&&r!==e&&R(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{R(`The request to Windows failed. Try again.`)}finally{he(!1)}},yn=async()=>{if(!fe){F(!0),L(null);try{let e=await nt();le(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),n(),t||L(`Windows did not accept the archive registration. Try again.`)}catch{L(`The request to Windows failed. Try again.`)}finally{F(!1)}}},bn=async()=>{if(!fe){F(!0),L(null);try{let e=await rt();le(e),g(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&L(`The registration is still there. Try turning it off again.`)}catch{L(`The request to Windows failed. Try again.`)}finally{F(!1)}}},xn=async(e,t)=>{if(!p)return;let n={...p.extensionIcons};t===null?delete n[e]:n[e]=t,await G({extensionIcons:n})},Sn={...Ht,...p?.shortcuts};(0,E.useEffect)(()=>{if(!_e)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){ve(null);return}let t=Kt(e);t&&(ve(null),G({shortcuts:{...Sn,[_e]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[_e,p]),(0,E.useEffect)(()=>{if(!ye)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){z(!1);return}let t=Kt(e);t&&(z(!1),G({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[ye,p]);let Cn=async e=>{await G({recentLimit:Math.min(Math.max(e,0),50)})},wn=(e,t)=>{let n=t??He[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Ue(t=>({...t,[e]:void 0})),G(i)},Tn=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Ct(null),await G({sharePortMode:`custom`,sharePort:n}),await Oc(n,`custom`)},En=async e=>{let t=e===`custom`,n=t?p?.sharePort??8080:null;await G({sharePortMode:t?`custom`:`random`,sharePort:n}),await Oc(n,t?`custom`:`random`)},Dn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;kt(!0),Dt(null);try{let e=await _t(t);Tt(e),Dt(e.error),e.error||await G({startupMode:t})}finally{kt(!1)}},On=async e=>{await G({galleryRoots:e.length>0?e:null})},kn=async()=>{let e=await _a(),t=p?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await On([...t,e])},An=async()=>{let e=x.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await xn(e,ee),S(``))},jn=async()=>{ae(!0);try{let e=await _a();if(!e)return;let t=await va([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await ot(e.replace(/[\\/][^\\/]+$/,``),v(e),`file:${t}`)&&(sn(),y({folder:e,icon:t}))}finally{ae(!1)}},Mn=async(e,t)=>{let n={...p?.fonts};t?n[e]=t:delete n[e],await G({fonts:n})};return(0,P.jsxs)(gh,{children:[(0,P.jsxs)(_h,{ref:Mt,children:[(0,P.jsxs)(vh,{ref:zt(`application`),children:[(0,P.jsx)(hh,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Version`)}),(0,P.jsx)(Jh,{children:e?`v${e.version}`:`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Platform`)}),(0,P.jsx)(Jh,{children:e?.platform??`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Logs`)}),(0,P.jsx)($,{children:s(`Application logs and crash details. Open the folder here to inspect them without leaving the app.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Lg,{disabled:!e?.logDirectory,onClick:()=>e?.logDirectory&&r(e.logDirectory),type:`button`,children:s(`Open log folder`)})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Language`)}),(0,P.jsx)($,{children:s(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(fh,{disabled:!p,onChange:e=>void G({language:e}),options:[$m,...c.length>0?c:[Xm]],value:p?.language??Xm})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Picker window size`)}),(0,P.jsx)($,{children:s(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(ig,{inputMode:`numeric`,onBlur:e=>wn(`width`,e.currentTarget.value),onChange:e=>Ue(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:He.width??String(p?.pickerWindowWidth??1200)}),(0,P.jsx)(Jh,{children:`×`}),(0,P.jsx)(ig,{inputMode:`numeric`,onBlur:e=>wn(`height`,e.currentTarget.value),onChange:e=>Ue(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:He.height??String(p?.pickerWindowHeight??800)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Web server port`)}),(0,P.jsx)($,{children:s(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(po,{disabled:!p,onChange:e=>void En(e),options:[{value:`random`,label:s(`Random`)},{value:`custom`,label:s(`Custom port`)}],value:p?.sharePortMode??`random`,width:160})})]}),p?.sharePortMode===`custom`&&(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Custom port`)}),(0,P.jsx)($,{children:s(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(ig,{inputMode:`numeric`,onBlur:e=>void Tn(e.currentTarget.value),onChange:e=>Ct(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:St??(p?.sharePort?String(p.sharePort):``)})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Link paths`)}),(0,P.jsx)($,{children:s(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(po,{disabled:!p,onChange:e=>void G({linkPathMode:e}),options:[{value:`relative`,label:s(`Relative`)},{value:`absolute`,label:s(`Absolute`)}],value:p?.linkPathMode??`relative`,width:160})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Global hotkey`)}),(0,P.jsx)($,{children:s(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(Ig,{$listening:ye,disabled:!p,onClick:()=>z(!0),type:`button`,children:ye?s(`Press a key…`):p?.globalHotkey?qt(p.globalHotkey):s(`None`)}),p?.globalHotkey&&(0,P.jsx)(Zh,{onClick:()=>void G({globalHotkey:null}),type:`button`,children:s(`Clear`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Open yafm:// links`)}),(0,P.jsx)($,{children:s(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),j&&(0,P.jsx)(qh,{children:j})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(tg,{$on:O,children:s(O?`Active`:`Off`)}),(0,P.jsx)(ng,{$on:O,disabled:k,onClick:()=>void _n(),title:s(O?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,P.jsx)(rg,{})})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Use as the default file manager`)}),(0,P.jsx)($,{children:s(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),N?.registered&&!N.pathMatches&&(0,P.jsx)(qh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:N.registeredPath??`?`})}),ge&&(0,P.jsx)(qh,{children:ge})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(tg,{$on:Rt,children:s(Rt?`Active`:`Off`)}),(0,P.jsx)(ng,{$on:Rt,disabled:!p||me,onClick:()=>void vn(),title:s(Rt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,P.jsx)(rg,{})})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Open archives with this app`)}),(0,P.jsx)($,{children:s(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,P.jsx)($,{children:s(`When this is off, opening an archive uses the system's default application instead.`)}),ce?.registered&&!ce.pathMatches&&(0,P.jsx)(qh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:ce.registeredPath??`?`})}),pe&&(0,P.jsx)(qh,{children:pe})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(tg,{$on:It,children:s(It?`Active`:`Off`)}),(0,P.jsx)(Lg,{disabled:!p||fe||It,onClick:()=>void yn(),type:`button`,children:s(`Register`)}),e?.platform===`windows`&&(0,P.jsx)(Lg,{onClick:()=>void dt(`ms-settings:defaultapps`),type:`button`,children:s(`Default apps…`)}),(0,P.jsx)(eg,{disabled:!p||fe||!Lt,onClick:()=>void bn(),type:`button`,children:s(`Unregister`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Reopen the tabs that were open`)}),(0,P.jsx)($,{children:s(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,P.jsx)(ng,{$on:p?.restoreTabs??!0,disabled:!p,onClick:()=>void G({restoreTabs:!p?.restoreTabs}),type:`button`,children:(0,P.jsx)(rg,{})})]})]})]}),(0,P.jsxs)(vh,{ref:zt(`startup`),children:[(0,P.jsx)(hh,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Start with the computer`)}),(0,P.jsx)($,{children:s(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),Et&&(0,P.jsx)(qh,{children:Et}),wt&&!wt.supported&&(0,P.jsx)(qh,{children:s(`This platform cannot create a per-user startup entry.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(po,{disabled:!p||Ot||wt!==null&&!wt.supported,onChange:e=>void Dn(e),options:[{value:`none`,label:s(`None`)},{value:`shortcut`,label:s(`Shortcut`)},{value:`task`,label:s(`Scheduled task`)}],value:wt?.mode??p?.startupMode??`none`,width:170})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Start hidden in the tray`)}),(0,P.jsx)($,{children:s(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(ng,{$on:p?.startHidden??!1,disabled:!p,onClick:()=>void G({startHidden:!p?.startHidden}),type:`button`,children:(0,P.jsx)(rg,{})})})]})]})]}),(0,P.jsxs)(vh,{ref:zt(`fonts`),children:[(0,P.jsx)(hh,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,P.jsxs)(bh,{children:[Am.map(e=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(e.label)}),(0,P.jsx)($,{children:s(`Falls back to {font} until another family is chosen.`,{font:s(e.fallback)})})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Pm,{defaultLabel:s(e.fallback),disabled:!p,fonts:bt,onChange:t=>void Mn(e.id,t),sample:e.sample,value:p?.fonts?.[e.id]??null})})]},e.id)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Reset`)}),(0,P.jsx)($,{children:s(`Back to the app's built-in font for every role.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Lg,{onClick:()=>void G({fonts:{}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,P.jsxs)(vh,{ref:zt(`time`),children:[(0,P.jsx)(hh,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,P.jsx)(bh,{children:(0,P.jsxs)(xh,{children:[(0,P.jsxs)(Sh,{children:[(0,P.jsx)(Q,{children:s(`Format`)}),(0,P.jsx)($,{children:s(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,P.jsx)(Ag,{children:Zm.map(e=>(0,P.jsx)(jg,{$active:(p?.timeFormat??`24`)===e.id,onClick:()=>void G({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(p?.timeFormat??`24`)===`custom`&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Mg,{"aria-label":s(`Pattern`),onBlur:rn,onChange:e=>ze(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),rn()):e.key===`Escape`&&ze(null)},spellCheck:!1,value:Re??p?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,P.jsx)($,{children:s(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,P.jsxs)(Ng,{children:[(0,P.jsx)(`span`,{children:s(`Preview`)}),(0,P.jsx)(`code`,{children:m(Qm,p?.timeFormat,Re??p?.timeFormatPattern)})]})]})})]}),(0,P.jsxs)(vh,{ref:zt(`updates`),children:[(0,P.jsx)(hh,{note:`The running build and the newest one published.`,title:`Updates`}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Current version`)}),(0,P.jsx)(Jh,{children:e?`v${e.version}`:`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Latest version`)}),(0,P.jsx)(Jh,{children:qe?`v${qe.latest}`:`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Check for updates`)}),(0,P.jsx)($,{children:qe&&!qe.available?s(`You are on the latest version.`):s(`Reads the version file the release workflow publishes.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Lg,{disabled:Ze,onClick:()=>void ln(),type:`button`,children:s(Ze?`Checking…`:`Check now`)})})]}),qe?.available&&(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Version {version} is available.`,{version:qe.latest})}),(0,P.jsx)($,{children:s(`Download the new build from the releases page.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Lg,{onClick:()=>void dt(Ym),type:`button`,children:s(`Open release page`)})})]}),at&&(0,P.jsx)(X,{children:(0,P.jsx)(qh,{children:s(`Could not check for updates.`)})})]})]}),(0,P.jsxs)(vh,{ref:zt(`colors`),children:[(0,P.jsx)(hh,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(xh,{children:[(0,P.jsxs)(Sh,{children:[(0,P.jsx)(Q,{children:s(`Presets`)}),(0,P.jsx)($,{children:s(`One click changes the accent and the highlight together.`)})]}),(0,P.jsxs)(Ch,{children:[Du.map(e=>(0,P.jsxs)(wh,{$on:on.toLowerCase()===e.accent&&cn.toLowerCase()===e.secondary,onClick:()=>K(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,P.jsxs)(jh,{children:[(0,P.jsx)(`i`,{style:{background:e.accent}}),(0,P.jsx)(`i`,{style:{background:e.secondary}})]}),(0,P.jsx)(Th,{children:s(e.name)})]},e.name)),Pt.map((e,t)=>(0,P.jsxs)(Eh,{children:[(0,P.jsxs)(wh,{$on:on.toLowerCase()===e.accent.toLowerCase()&&cn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>K(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,P.jsxs)(jh,{children:[(0,P.jsx)(`i`,{style:{background:e.accent}}),(0,P.jsx)(`i`,{style:{background:e.secondary}})]}),(0,P.jsx)(Th,{children:e.name})]}),(0,P.jsx)(Dh,{onClick:()=>void dn(t),title:s(`Remove preset`),type:`button`,children:(0,P.jsx)(xi,{size:9})})]},`${e.name}-${t}`)),We?(0,P.jsxs)(kh,{children:[(0,P.jsxs)(jh,{children:[(0,P.jsx)(`i`,{style:{background:We.accent}}),(0,P.jsx)(`i`,{style:{background:We.secondary}})]}),(0,P.jsx)(Ah,{autoFocus:!0,maxLength:24,onChange:e=>Ke({...We,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),un()):e.key===`Escape`&&(e.preventDefault(),Ke(null))},placeholder:s(`Preset name`),spellCheck:!1,value:We.name}),(0,P.jsx)(Zh,{onClick:()=>void un(),type:`button`,children:s(`Save`)}),(0,P.jsx)(Zh,{onClick:()=>Ke(null),type:`button`,children:s(`Cancel`)})]}):(0,P.jsxs)(Oh,{disabled:!p,onClick:()=>Ke({name:``,accent:on,secondary:cn}),title:s(`Save the current colours as a preset`),type:`button`,children:[(0,P.jsx)(li,{size:12}),s(`Add preset`)]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Accent color`)}),(0,P.jsx)($,{children:s(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(mh,{colors:Be.accent,current:on,onApply:e=>q(`accent`,e)}),(0,P.jsx)(Qh,{"aria-label":s(`Accent color`),disabled:!p,onBlur:()=>J(`accent`),onChange:e=>void G({accentColor:e.target.value}),onFocus:()=>ht({role:`accent`,color:on}),type:`color`,value:on}),(0,P.jsx)($h,{children:on.toUpperCase()})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Secondary color`)}),(0,P.jsx)($,{children:s(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(mh,{colors:Be.secondary,current:cn,onApply:e=>q(`secondary`,e)}),(0,P.jsx)(Qh,{"aria-label":s(`Secondary color`),disabled:!p,onBlur:()=>J(`secondary`),onChange:e=>void G({secondaryColor:e.target.value}),onFocus:()=>ht({role:`secondary`,color:cn}),type:`color`,value:cn}),(0,P.jsx)($h,{children:cn.toUpperCase()})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Reset colors`)}),(0,P.jsx)($,{children:s(`Returns the interface to the default blue and indigo theme.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Zh,{disabled:!p,onClick:()=>{an(`accent`,on),an(`secondary`,cn),G({accentColor:null,secondaryColor:null})},type:`button`,children:s(`Reset`)})})]})]})]}),(0,P.jsxs)(vh,{ref:zt(`background`),children:[(0,P.jsx)(hh,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(xh,{children:[(0,P.jsxs)(Sh,{children:[(0,P.jsx)(Q,{children:s(`Wallpaper`)}),(0,P.jsx)($,{children:s(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,P.jsx)(gg,{children:(0,P.jsx)(_g,{$active:!p?.backgroundSource,onClick:()=>void G({backgroundSource:null}),title:s(`None`),type:`button`,children:(0,P.jsx)(Sg,{children:s(`None`)})})}),(0,P.jsxs)(pg,{children:[Au.map(e=>(0,P.jsxs)(mg,{children:[(0,P.jsx)(hg,{children:s(e.name)}),(0,P.jsx)(gg,{children:e.variants.map(t=>(0,P.jsx)(_g,{$active:p?.backgroundSource===t.id,onClick:()=>void G({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,P.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,P.jsxs)(mg,{children:[(0,P.jsx)(hg,{children:s(`Motion`)}),(0,P.jsx)(gg,{children:ku.map(e=>(0,P.jsxs)(_g,{$active:p?.backgroundSource===e.id,onClick:()=>void G({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,P.jsx)(`img`,{alt:``,src:e.poster}),(0,P.jsx)(bg,{children:(0,P.jsx)(Oi,{size:11})})]},e.id))})]}),(0,P.jsxs)(mg,{children:[(0,P.jsx)(hg,{children:s(`Custom`)}),(0,P.jsxs)(gg,{children:[(p?.backgroundCustom??[]).map(e=>(0,P.jsx)(dh,{active:p?.backgroundSource===`file:${e}`||p?.backgroundSource===`url:${e}`||p?.backgroundSource===e,onRemove:()=>Wt(e),onSelect:()=>void G({backgroundSource:C(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,P.jsxs)(xg,{onClick:()=>void Vt([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,P.jsx)(li,{size:12}),s(`Image…`)]}),(0,P.jsxs)(xg,{onClick:()=>void Vt([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,P.jsx)(li,{size:12}),s(`Video…`)]})]})]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Image or video URL`)}),(0,P.jsx)($,{children:s(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(ig,{onChange:e=>jt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ut()},placeholder:`https://…`,value:At}),(0,P.jsx)(Zh,{disabled:!C(At),onClick:()=>void Ut(),type:`button`,children:s(`Add`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Blur`)}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(fg,{max:40,min:0,onChange:e=>void G({backgroundBlur:Number(e.target.value)}),type:`range`,value:p?.backgroundBlur??0}),(0,P.jsxs)(Jh,{children:[p?.backgroundBlur??0,`px`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Saturation`)}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(fg,{max:200,min:0,onChange:e=>void G({backgroundSaturation:Number(e.target.value)}),type:`range`,value:p?.backgroundSaturation??100}),(0,P.jsxs)(Jh,{children:[p?.backgroundSaturation??100,`%`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Brightness`)}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(fg,{max:150,min:40,onChange:e=>void G({backgroundBrightness:Number(e.target.value)}),type:`range`,value:p?.backgroundBrightness??100}),(0,P.jsxs)(Jh,{children:[p?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,P.jsxs)(vh,{ref:zt(`safety`),children:[(0,P.jsx)(hh,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(xh,{children:[(0,P.jsxs)(Sh,{children:[(0,P.jsx)(Q,{children:s(`Protected folders`)}),(0,P.jsx)($,{children:s(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,P.jsx)(Cg,{children:(p?.protectedPaths??[]).map(e=>(0,P.jsxs)(wg,{children:[(0,P.jsx)(Tg,{"aria-label":s(`Protected path`),onBlur:Yt,onChange:t=>Me({from:e,value:t.target.value}),onFocus:()=>Me({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Yt()):e.key===`Escape`&&Me(null)},spellCheck:!1,value:je?.from===e?je.value:e}),(0,P.jsx)(Eg,{onClick:()=>Xt(e),title:s(`Remove`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]},e))}),(0,P.jsxs)(Og,{children:[(0,P.jsx)(kg,{"aria-label":s(`New protected rule`),onChange:e=>Fe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Jt())},placeholder:`*.log`,spellCheck:!1,value:Pe}),(0,P.jsx)(Zh,{onClick:Jt,type:`button`,children:s(`Add the rule`)})]}),(0,P.jsxs)(Dg,{children:[(0,P.jsx)(Zh,{onClick:()=>void Zt(),type:`button`,children:s(`Restore defaults`)}),(0,P.jsx)(Zh,{onClick:()=>void Gt(),type:`button`,children:s(`Add folder…`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Confirmation delay`)}),(0,P.jsx)($,{children:s(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(fg,{max:30,min:2,onChange:e=>void G({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:p?.deleteDelaySeconds??5}),(0,P.jsxs)(Jh,{children:[p?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,P.jsxs)(vh,{ref:zt(`tags`),children:[(0,P.jsx)(hh,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Yh,{"aria-label":s(`Color of the new tag`),onChange:e=>Ae(e.target.value),type:`color`,value:ke}),(0,P.jsx)(ig,{onChange:e=>Oe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),fn())},placeholder:s(`New tag`),spellCheck:!1,value:De})]}),(0,P.jsx)($,{children:s(`Add a tag here; it is available in every folder.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Zh,{disabled:we||De.trim().length===0,onClick:()=>void fn(),type:`button`,children:s(`Add`)})})]}),Te&&(0,P.jsx)(X,{children:(0,P.jsx)(qh,{children:Te})}),B.length===0&&(0,P.jsx)(X,{children:(0,P.jsx)($,{children:s(`No tags yet. Add one below; it is available in every folder.`)})}),B.map(e=>(0,P.jsx)(X,{children:Se?.name===e.name?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Yh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void pn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,P.jsx)(Xh,{autoFocus:!0,disabled:we,onChange:t=>Ce({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),hn()):e.key===`Escape`&&(e.preventDefault(),Ce(null))},value:Se.value})]}),(0,P.jsx)($,{children:s(`Press Enter to save, Escape to cancel.`)})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(Zh,{disabled:we,onClick:()=>void hn(),type:`button`,children:s(`Save`)}),(0,P.jsx)(Zh,{disabled:we,onClick:()=>Ce(null),type:`button`,children:s(`Cancel`)})]})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Yh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void pn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,P.jsx)(Q,{children:e.name})]}),(0,P.jsx)($,{children:o(s,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(Zh,{disabled:we,onClick:()=>Ce({name:e.name,value:e.name}),type:`button`,children:s(`Edit`)}),(0,P.jsxs)(eg,{disabled:we,onClick:()=>void mn(e.name),type:`button`,children:[(0,P.jsx)(yi,{size:13}),s(`Remove`)]})]})]})},e.name))]})]}),(0,P.jsxs)(vh,{ref:zt(`files-view`),children:[(0,P.jsx)(hh,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Default view`)}),(0,P.jsx)($,{children:s(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsxs)(ug,{children:[(0,P.jsx)(dg,{$on:W.mode===`list`,onClick:()=>void G({defaultView:{...W,mode:`list`}}),type:`button`,children:s(`List`)}),(0,P.jsx)(dg,{$on:W.mode===`grid`,onClick:()=>void G({defaultView:{...W,mode:`grid`}}),type:`button`,children:s(`Grid`)})]})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`List icon size`)}),(0,P.jsx)($,{children:s(`The icon in the list rows.`)})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(fg,{max:48,min:16,onChange:e=>void G({defaultView:{...W,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:W.iconSize}),(0,P.jsxs)(Jh,{children:[W.iconSize,`px`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Grid size`)}),(0,P.jsx)($,{children:s(`The height of a grid tile; the icon inside follows it.`)})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(fg,{max:260,min:100,onChange:e=>void G({defaultView:{...W,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:W.gridSize}),(0,P.jsxs)(Jh,{children:[W.gridSize,`px`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Q,{children:s(`Selection checkboxes`)}),(0,P.jsx)(Om,{})]}),(0,P.jsx)($,{children:s(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,P.jsx)(ng,{$on:p?.showCheckboxes??!0,disabled:!p,onClick:()=>void G({showCheckboxes:!(p?.showCheckboxes??!0)}),type:`button`,children:(0,P.jsx)(rg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Q,{children:s(`Open with a single click`)}),(0,P.jsx)(Om,{})]}),(0,P.jsx)($,{children:s(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,P.jsx)(ng,{$on:p?.openOnSingleClick??!1,disabled:!p,onClick:()=>void G({openOnSingleClick:!(p?.openOnSingleClick??!1)}),type:`button`,children:(0,P.jsx)(rg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Q,{children:s(`Confirm before deleting`)}),(0,P.jsx)(Om,{})]}),(0,P.jsx)($,{children:s(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,P.jsx)(ng,{$on:p?.confirmDelete??!1,disabled:!p,onClick:()=>void G({confirmDelete:!(p?.confirmDelete??!1)}),type:`button`,children:(0,P.jsx)(rg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Q,{children:s(`Play audio in video previews`)}),(0,P.jsx)(Om,{})]}),(0,P.jsx)($,{children:s(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,P.jsx)(ng,{$on:p?.previewVideoAudio??!1,disabled:!p,onClick:()=>void G({previewVideoAudio:!(p?.previewVideoAudio??!1)}),type:`button`,children:(0,P.jsx)(rg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Q,{children:s(`Autoplay video previews`)}),(0,P.jsx)(Om,{})]}),(0,P.jsx)($,{children:s(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,P.jsx)(ng,{$on:p?.previewVideoAutoplay??!1,disabled:!p,onClick:()=>void G({previewVideoAutoplay:!(p?.previewVideoAutoplay??!1)}),type:`button`,children:(0,P.jsx)(rg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Q,{children:s(`Preview panel under the list`)}),(0,P.jsx)(Om,{})]}),(0,P.jsx)($,{children:s(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,P.jsx)(ng,{$on:W.showImages??!0,onClick:()=>void G({defaultView:{...W,showImages:!(W.showImages??!0)}}),type:`button`,children:(0,P.jsx)(rg,{})})]}),(0,P.jsx)(X,{children:(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Q,{children:s(`Columns`)}),(0,P.jsx)(Om,{})]}),(0,P.jsx)($,{children:s(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,P.jsx)(X,{children:(0,P.jsxs)(Pg,{children:[Xc.map(e=>(0,P.jsxs)(Fg,{children:[(0,P.jsx)(`input`,{checked:(W.columns??[]).includes(e.id),onChange:()=>void gn(e.id),type:`checkbox`}),(0,P.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,P.jsxs)(Fg,{children:[(0,P.jsx)(`input`,{checked:(W.columns??[]).includes(`linkTarget`),onChange:()=>void gn(`linkTarget`),type:`checkbox`}),(0,P.jsx)(`span`,{children:s(`Link target after the name`)})]})]})})]}),(0,P.jsxs)(Vg,{children:[s(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,P.jsx)(Om,{}),` `,s(`Anything marked as global always applies to every folder.`)]})]}),(0,P.jsxs)(vh,{ref:zt(`shortcuts`),children:[(0,P.jsx)(hh,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,P.jsxs)(bh,{children:[Jm.map(({id:e,label:t,note:n})=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(t)}),(0,P.jsx)($,{children:s(n)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Ig,{$listening:_e===e,onClick:()=>ve(e),type:`button`,children:_e===e?s(`Press a key…`):qt(Sn[e])})})]},e)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Reset`)}),(0,P.jsx)($,{children:s(`Back to the default combination for every action.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Lg,{onClick:()=>void G({shortcuts:{...Ht}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,P.jsxs)(vh,{ref:zt(`memory`),children:[(0,P.jsx)(hh,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(Vh,{children:[(0,P.jsxs)(Hh,{children:[(0,P.jsx)(Q,{children:s(`Process memory`)}),(0,P.jsx)(Jh,{children:D?`${f(D.private)} · ${Bh(D.private,D.available)}`:`—`})]}),(0,P.jsx)(Uh,{children:(0,P.jsx)(Wh,{$ratio:D?D.private/Math.max(D.available,1):0,$tone:w(D?D.private/Math.max(D.available,1):0)})}),(0,P.jsx)($,{children:D?s(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:f(D.available),resident:f(D.workingSet)}):s(`Reading the current usage…`)})]}),(0,P.jsxs)(Vh,{children:[(0,P.jsxs)(Hh,{children:[(0,P.jsx)(Q,{children:s(`Managed heap`)}),(0,P.jsx)(Jh,{children:D?`${f(D.managed)} · ${Bh(D.managed,D.private)}`:`—`})]}),(0,P.jsx)(Uh,{children:(0,P.jsx)(Wh,{$ratio:D?D.managed/Math.max(D.private,1):0,$tone:`var(--accent-secondary)`})}),(0,P.jsx)($,{children:s(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,P.jsxs)(Vh,{children:[(0,P.jsxs)(Hh,{children:[(0,P.jsx)(Q,{children:s(`Native and runtime`)}),(0,P.jsx)(Jh,{children:D?`${f(Math.max(0,D.private-D.managed))} · ${Bh(Math.max(0,D.private-D.managed),D.private)}`:`—`})]}),(0,P.jsx)(Uh,{children:(0,P.jsx)(Wh,{$ratio:D?Math.max(0,D.private-D.managed)/Math.max(D.private,1):0,$tone:`var(--accent-primary)`})}),(0,P.jsx)($,{children:s(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Free memory`)}),(0,P.jsx)($,{children:s(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Lg,{onClick:()=>void U().then(oe),type:`button`,children:s(`Trim now`)})})]})]})]}),(0,P.jsxs)(vh,{ref:zt(`overview`),children:[(0,P.jsx)(hh,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,P.jsx)(bh,{children:(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Recent items`)}),(0,P.jsx)($,{children:s(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(ig,{max:50,min:0,onChange:e=>void Cn(Number(e.target.value)),type:`number`,value:p?.recentLimit??10})})]})})]}),(0,P.jsxs)(vh,{ref:zt(`gallery`),children:[(0,P.jsx)(hh,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,P.jsxs)(bh,{children:[(p?.galleryRoots??[]).map(e=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:v(e)}),(0,P.jsx)($,{children:e})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Rg,{onClick:()=>void On((p?.galleryRoots??[]).filter(t=>t!==e)),title:s(`Stop scanning this folder`),type:`button`,children:(0,P.jsx)(xi,{size:12})})})]},e)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Scan folders`)}),(0,P.jsx)($,{children:(p?.galleryRoots??[]).length===0?s(`Nothing added yet, so the gallery reads the Pictures folder.`):s(`Only these folders are scanned, three levels deep.`)})]}),(0,P.jsx)(Gh,{children:(0,P.jsx)(Lg,{onClick:()=>void kn(),type:`button`,children:s(`Choose folder…`)})})]})]})]}),(0,P.jsxs)(vh,{ref:zt(`icons`),children:[(0,P.jsx)(hh,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Use system file icons`)}),(0,P.jsx)($,{children:s(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,P.jsx)(ng,{$on:p?.systemIcons??!1,disabled:!p,onClick:()=>void G({systemIcons:!p?.systemIcons}),type:`button`,children:(0,P.jsx)(rg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Use custom folder icons`)}),(0,P.jsx)($,{children:s(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,P.jsx)(ng,{$on:p?.customFolderIcons??!1,disabled:!p,onClick:()=>void G({customFolderIcons:!p?.customFolderIcons}),type:`button`,children:(0,P.jsx)(rg,{})})]})]})]}),(0,P.jsxs)(vh,{ref:zt(`extension-icons`),children:[(0,P.jsx)(hh,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,P.jsxs)(bh,{children:[Object.entries(p?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:e}),(0,P.jsx)($,{children:ch(s,t)})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(lh,{source:t}),(0,P.jsx)(Rg,{onClick:()=>void xn(e,null),title:s(`Remove this rule`),type:`button`,children:(0,P.jsx)(xi,{size:12})})]})]},e)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Add a rule`)}),(0,P.jsx)($,{children:s(`Extension and the icon to draw for it.`)})]}),(0,P.jsxs)(Gh,{children:[(0,P.jsx)(ig,{onChange:e=>S(e.target.value),placeholder:`.psd`,spellCheck:!1,value:x}),(0,P.jsxs)(lg,{children:[(0,P.jsx)(Rg,{onClick:()=>ie(e=>!e),title:s(`Choose the icon`),type:`button`,children:(0,P.jsx)(lh,{source:ee})}),re&&(0,P.jsx)(Bd,{allowDefault:!1,onClose:()=>ie(!1),onPick:e=>{te(e??`file`),ie(!1)},value:ee})]}),(0,P.jsx)(Rg,{onClick:()=>void An(),title:s(`Add the rule`),type:`button`,children:(0,P.jsx)(li,{size:13})})]})]})]})]}),(0,P.jsxs)(vh,{ref:zt(`folder-icons`),children:[(0,P.jsx)(hh,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Give a folder its own icon`)}),(0,P.jsx)($,{children:s(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,P.jsxs)(Gh,{children:[_&&(0,P.jsx)(uh,{src:_.icon}),(0,P.jsx)(Lg,{disabled:T,onClick:()=>void jn(),type:`button`,children:s(T?`Choosing…`:`Choose folder and icon…`)})]})]}),_&&(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:v(_.folder)}),(0,P.jsx)($,{children:_.folder})]}),(0,P.jsx)(Gh,{children:(0,P.jsxs)(Bg,{children:[(0,P.jsx)(bi,{size:11}),` `,s(`Saved`)]})})]})]})]}),(0,P.jsxs)(vh,{ref:zt(`folder-index`),children:[(0,P.jsx)(hh,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,P.jsx)($,{children:s(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,P.jsx)(ng,{$on:p?.writeDirectoryIndex??!0,disabled:!p,onClick:()=>void G({writeDirectoryIndex:!p?.writeDirectoryIndex}),type:`button`,children:(0,P.jsx)(rg,{})})]}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(Sh,{children:[(0,P.jsx)(Q,{children:s(`Directory index blacklist`)}),(0,P.jsx)($,{children:s(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,P.jsx)(Cg,{children:(p?.directoryIndexBlacklist??[]).map(e=>(0,P.jsxs)(wg,{children:[(0,P.jsx)(Tg,{"aria-label":s(`Directory index blacklist rule`),onBlur:Qt,onChange:t=>H({from:e,value:t.target.value}),onFocus:()=>H({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Qt()):e.key===`Escape`&&H(null)},spellCheck:!1,value:Ne?.from===e?Ne.value:e}),(0,P.jsx)(Eg,{onClick:()=>tn(e),title:s(`Remove`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]},e))}),(0,P.jsxs)(Og,{children:[(0,P.jsx)(kg,{"aria-label":s(`Directory index blacklist rule`),onChange:e=>Le(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),$t())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Ie}),(0,P.jsx)(Zh,{onClick:$t,type:`button`,children:s(`Add the rule`)})]}),(0,P.jsxs)(Dg,{children:[(0,P.jsx)(Zh,{onClick:nn,type:`button`,children:s(`Restore defaults`)}),(0,P.jsx)(Zh,{onClick:()=>void en(),type:`button`,children:s(`Add folder…`)})]})]})]}),!(p?.writeDirectoryIndex??!0)&&(0,P.jsx)(Hg,{children:sh(s,e?.platform)})]}),(0,P.jsxs)(vh,{ref:zt(`indexing`),children:[(0,P.jsx)(hh,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,P.jsx)(oh,{})]}),(0,P.jsxs)(vh,{ref:zt(`files`),children:[(0,P.jsx)(hh,{note:`What the listings include.`,title:`Files`}),(0,P.jsxs)(bh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Hidden items`)}),(0,P.jsx)(Jh,{children:ah(s,u?.showHidden)})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Protected operating system files`)}),(0,P.jsx)(Jh,{children:ah(s,u?.showSystem)})]})]}),(0,P.jsx)(Vg,{children:s(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,P.jsxs)(Fh,{"aria-label":s(`Settings sections`),children:[(0,P.jsx)(Ih,{children:s(`Sections`)}),(0,P.jsx)(Lh,{children:th.map(({id:e,label:t})=>(0,P.jsx)(Rh,{$active:vt===e,onClick:()=>Bt(e),type:`button`,children:(0,P.jsx)(`span`,{children:s(t)})},e))}),(0,P.jsx)(zh,{children:s(`Changes are saved as you make them.`)})]})]})}function ah(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function oh(){let e=I(),[t,n]=(0,E.useState)(null);return(0,E.useEffect)(()=>{let e=!0,t=()=>qe().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,P.jsx)(Hg,{children:e(`No indexing tasks are running.`)}):(0,P.jsxs)(bh,{children:[(0,P.jsx)(X,{children:(0,P.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,P.jsx)(X,{children:(0,P.jsx)(Jh,{title:e,children:e})},e))]}):(0,P.jsx)(Hg,{children:e(`Index task information is unavailable.`)})}function sh(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function ch(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function lh({source:e}){let t=J(e.startsWith(`file:`)?e.slice(5):null);return(0,P.jsx)(zg,{children:t?(0,P.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,P.jsx)(Gs,{name:e,size:16})})}function uh({src:e}){let t=J(e);return(0,P.jsx)(zg,{children:t&&(0,P.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function dh({path:e,active:t,onSelect:n,onRemove:r}){let i=I(),a=C(e),o=gn(a?null:e),s=a?e:o,c=Ju(e.split(/[?#]/)[0]);return(0,P.jsxs)(vg,{children:[(0,P.jsxs)(_g,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,P.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,P.jsx)(`img`,{alt:``,src:s})),c&&(0,P.jsx)(bg,{children:(0,P.jsx)(Oi,{size:11})})]}),(0,P.jsx)(yg,{onClick:r,title:i(`Remove`),type:`button`,children:(0,P.jsx)(xi,{size:9})})]})}function fh({value:e,options:t,onChange:n,disabled:r}){let i=I(),[a,o]=(0,E.useState)(null),s=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(ag,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,P.jsx)(`span`,{children:ph(i,e)}),(0,P.jsx)(og,{children:(0,P.jsx)(fi,{size:11})})]}),a&&(0,Pa.createPortal)((0,P.jsx)(sg,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,P.jsxs)(cg,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,P.jsx)(`span`,{children:ph(i,t)}),t===e&&(0,P.jsx)(bi,{size:11})]},t))}),document.body)]})}function ph(e,t){return t===$m?e(`System default`):eh[t]??t}function mh({colors:e,current:t,onApply:n}){let r=I();if(e.length===0)return null;let[i,...a]=e;return(0,P.jsxs)(Mh,{children:[(0,P.jsxs)(Ph,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,P.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,P.jsx)(Nh,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,P.jsx)(bi,{size:9})},e))]})}function hh({title:e,note:t,global:n=!1}){let r=I();return(0,P.jsxs)(yh,{children:[(0,P.jsxs)(`h2`,{children:[r(e),n&&(0,P.jsx)(Om,{})]}),(0,P.jsx)(`p`,{children:r(t)})]})}var gh=_.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,_h=_.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,vh=_.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,yh=_.header`
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
`,bh=_.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,xh=_.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Sh=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Ch=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,wh=_.button`
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
`,Th=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Eh=_.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Dh=_.button`
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
`,Oh=_.button`
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
`,kh=_.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Ah=_.input`
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
`,jh=_.span`
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
`,Mh=_.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Nh=_.button`
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
`,Ph=_.button`
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
`,Fh=_.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,Ih=_.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Lh=_.div`
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
`,Rh=_.button`
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
`,zh=_.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function Bh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var Vh=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Hh=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Uh=_.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Wh=_.div`
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
`,Gh=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=_.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,Kh=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=_.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,qh=_.span`
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
`,Jh=_.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Yh=_.input`
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
`,Xh=_.input`
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
`,Zh=_.button`
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
`,Qh=_.input`
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
`,$h=_.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,eg=_.button`
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
`,tg=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,ng=_.button`
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
`,rg=_.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,ig=_.input`
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
`,ag=_.button`
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
`,og=_.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,sg=_.div`
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
`,cg=_.button`
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
`,lg=_.span`
    position: relative;
    display: inline-flex;
`,ug=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,dg=_.button`
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
`,fg=_.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,pg=_.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,mg=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,hg=_.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,gg=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,_g=_.button`
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
`,vg=_.div`
    position: relative;
    width: 102px;
    height: 58px;
`,yg=_.button`
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
`,bg=_.span`
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
`,xg=_.button`
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
`,Sg=_.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,Cg=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,wg=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Tg=_.input`
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
`,Eg=_.button`
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
`,Dg=_.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,Og=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,kg=_.input`
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
`,Ag=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,jg=_.button`
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
`,Mg=_.input`
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
`,Ng=_.div`
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
`,Pg=_.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,Fg=_.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,Ig=_.button`
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
`,Lg=_.button`
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
`,Rg=_.button`
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
`,zg=_.span`
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
`,Bg=_.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,Vg=_.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Hg=_.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,Ug=150,Wg=2500,Gg=3,Kg=600;function qg({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:s,onSearchMatches:c,onPick:l,onSelectionChange:u,onAddToTray:d,onAddFavorite:p,onRemoveFavorite:m,favoritePaths:h,onExtractArchive:g,showDetails:_=!0,videoAudio:v=!1,videoAutoplay:b=!1}){let x=I(),S=Gc(`gallery`),[ee,te]=(0,E.useState)([]),[ne,re]=(0,E.useState)(0),[C,w]=(0,E.useState)(!0),[ie,T]=(0,E.useState)(null),[ae,D]=(0,E.useState)(!1),[oe,O]=(0,E.useState)([]),[se,k]=(0,E.useState)(()=>{let e=Rn(`yafm.preview.width`,320);return e>=220?e:320}),A=(0,E.useRef)([]),j=(0,E.useRef)(0),M=(0,E.useRef)(!1),ce=(0,E.useRef)(!0),le=(0,E.useRef)(0),N=(0,E.useRef)(null),ue=(0,E.useRef)(0),de=(0,E.useCallback)(async e=>{let t=++le.current;w(!0),ce.current=!0,T(null);try{let n=await ze(0,Ug,e);if(t!==le.current)return;A.current=n.entries,j.current=n.total,te(n.entries),re(n.total)}catch(e){t===le.current&&T(e instanceof Error?e.message:String(e))}finally{t===le.current&&(ce.current=!1,w(!1))}},[]);(0,E.useEffect)(()=>{de(!1)},[de]);let fe=(0,E.useCallback)(async()=>{if(ce.current||M.current||A.current.length>=j.current)return;let e=le.current;M.current=!0;try{let t=A.current,n=j.current;for(let r=0;r<Gg&&t.length<n;r++){let r=await ze(t.length,Ug,!1);if(e!==le.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<Ug)break}if(e!==le.current)return;A.current=t,j.current=n,(0,E.startTransition)(()=>{te(t),re(n)})}catch{}finally{M.current=!1}},[]),F=(0,E.useCallback)(e=>{ue.current||=window.requestAnimationFrame(()=>{ue.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<Wg&&fe()})},[fe]);(0,E.useEffect)(()=>{let e=N.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&fe()},{root:e.parentElement,rootMargin:`${Wg}px 0px`});return t.observe(e),()=>t.disconnect()},[fe]),(0,E.useEffect)(()=>{if(ee.length>=ne)return;let e=window.setTimeout(()=>{let e=N.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<Wg&&fe()},200);return()=>window.clearTimeout(e)},[ee.length,ne,fe]);let pe=(0,E.useMemo)(()=>({path:``,parent:null,entries:ee.map(Jg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[ee]),L=(0,E.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),me=(0,E.useCallback)(e=>{l?l(e):Se(e)},[l]),he=(0,E.useCallback)(e=>{let t=Yg(e.modified);return{id:t,label:t}},[]),ge=()=>{D(!0),de(!0).finally(()=>D(!1))},R=ee.length<ne,_e=(0,E.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:ee.filter(e=>Dn(e.name,a)||Dn(e.path,a)),[ee,a?.open,a?.query,a?.matchCase,a?.regex]),ve=(0,E.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:_e[Math.min(a.index,Math.max(0,_e.length-1))]?.path??null}:yn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,_e]);(0,E.useEffect)(()=>{c?.(_e.length)},[_e.length,c]);let ye=(0,E.useCallback)(e=>{O(e),u?.(e)},[u]),z=e=>{k(e),zn(`yafm.preview.width`,e)},B=oe.length>0?ee.find(e=>e.path===oe[0])??null:null,be=B?.name.includes(`.`)?B.name.slice(B.name.lastIndexOf(`.`)+1).toUpperCase():`—`,xe=B&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(B.name)?x(`Video`):x(`Picture`),Ce=B?B.path.slice(0,Math.max(B.path.lastIndexOf(`\\`),B.path.lastIndexOf(`/`))):``,we=B?{name:B.name,path:B.path,isDirectory:!1,size:B.size,modified:B.modified,fields:[{label:x(`Type`),value:xe},{label:x(`Extension`),value:be},{label:x(`Location`),value:Ce},{label:x(`Full path`),value:B.path},{label:x(`Size`),value:f(B.size)},{label:x(`Modified`),value:y(B.modified)},{label:x(`Created`),value:`—`}]}:null;return(0,P.jsxs)(Xg,{children:[(0,P.jsxs)($g,{children:[(0,P.jsxs)(t_,{children:[(0,P.jsx)(`span`,{children:x(`Gallery`)}),(0,P.jsx)(n_,{children:C?x(`scanning…`):x(`{shown} of {total} pictures`,{shown:ee.length,total:ne})})]}),(0,P.jsxs)(e_,{children:[(0,P.jsx)(r_,{onClick:ge,title:x(`Scan the folders again`),type:`button`,children:(0,P.jsx)(i_,{$spinning:ae,children:(0,P.jsx)(ci,{size:14})})}),S.available&&(0,P.jsx)(r_,{onClick:e=>S.open(e.clientX,e.clientY),title:x(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{size:14})})]})]}),ie&&(0,P.jsx)(o_,{children:ie}),!ie&&!C&&ne===0&&(0,P.jsx)(o_,{children:x(`No pictures found.`)}),!ie&&(C||ne>0)&&(0,P.jsxs)(Zg,{children:[(0,P.jsx)(Qg,{children:(0,P.jsx)(al,{confirmDelete:n,find:ve,selectMatchesToken:s,listing:C&&ee.length===0?null:pe,loading:C,error:null,view:L,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:ye,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:me,onOpenFile:me,onRefresh:ge,onAddToTray:d,onAddFavorite:p,onRemoveFavorite:m,favoritePaths:h,onExtractArchive:g,groupOf:he,onGridScroll:F,gridFooter:(0,P.jsx)(a_,{$space:R?Kg:1,ref:N}),allowBackgroundMenu:!1})}),_&&(0,P.jsx)(Xo,{emptyNote:x(`Nothing selected.`),info:we,onWidth:z,selectionNote:oe.length>1?o(x,oe.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:v,videoAutoplay:b,width:se})]})]})}function Jg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function Yg(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(x(),{weekday:`long`}):t.toLocaleDateString(x(),{year:`numeric`,month:`long`,day:`numeric`})}var Xg=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Zg=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Qg=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,$g=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,e_=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,t_=_.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,n_=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,r_=_.button`
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
`,i_=_.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,a_=_.div`
    height: ${({$space:e})=>e}px;
`,o_=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function s_({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:u=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,E.useState)([]),_=I(),[y,b]=(0,E.useState)(null),x=Fn();(0,E.useEffect)(()=>{Ye().then(e=>{b(e),g(Ts(e).filter(e=>e.pinned))},()=>{b(null),g([])})},[c]),(0,E.useEffect)(()=>{if(!N.available)return;let e=h.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return N.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>N.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[h,s]);let S=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:y?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??y?.placeIcons?.[n]??null}}),ee=o===`files`;return(0,P.jsxs)(p_,{children:[(0,P.jsxs)(m_,{children:[!u.includes(`home`)&&(0,P.jsxs)(y_,{$active:o===`home`,onClick:e=>m(`home`,Gt(e)),title:_(`Overview`),type:`button`,children:[(0,P.jsx)(zi,{}),(0,P.jsx)(x_,{children:_(`Overview`)})]}),!u.includes(`recycle`)&&(0,P.jsxs)(y_,{$active:o===`recycle`,onClick:e=>m(`recycle`,Gt(e)),title:_(`Recycle Bin`),type:`button`,children:[(0,P.jsx)(yi,{}),(0,P.jsx)(x_,{children:_(`Recycle Bin`)})]}),!u.includes(`gallery`)&&(0,P.jsxs)(y_,{$active:o===`gallery`,onClick:e=>m(`gallery`,Gt(e)),title:_(`Gallery`),type:`button`,children:[(0,P.jsx)(Di,{}),(0,P.jsx)(x_,{children:_(`Gallery`)})]})]}),h.map(e=>(0,P.jsxs)(g_,{children:[(0,P.jsxs)(y_,{as:`div`,$active:!1,children:[(0,P.jsx)(b_,{children:(0,P.jsx)(Ds,{panel:e,size:16})}),(0,P.jsx)(x_,{children:_(e.title)})]}),(0,P.jsx)(__,{children:(0,P.jsxs)(v_,{children:[e.kind===`quick`&&S(e).map(e=>(0,P.jsxs)(y_,{$active:ee&&t(a,e.path),onClick:t=>p(e.path,Gt(t)),title:e.path,type:`button`,children:[(0,P.jsx)(Os,{place:e}),(0,P.jsx)(x_,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let n=In(x,e.path);return(0,P.jsxs)(y_,{$active:ee&&t(a,e.path),onClick:t=>e.isDirectory?p(e.path,Gt(t)):void Se(e.path),title:e.path,type:`button`,children:[n&&x.useIcons?(0,P.jsx)(Os,{place:n}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,P.jsx)(x_,{children:n?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,P.jsx)(u_,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,P.jsxs)(y_,{$active:ee&&t(a,e.name),onClick:t=>p(e.name,Gt(t)),title:e.name,type:`button`,children:[(0,P.jsx)(ai,{}),(0,P.jsxs)(x_,{children:[d(e),(0,P.jsxs)(S_,{children:[f(e.freeSpace),` free`]}),(0,P.jsx)(C_,{children:(0,P.jsx)(w_,{$used:n,$tone:w(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,P.jsx)(d_,{onNavigate:p,path:e.path||s})]})})]},e.id)),!u.includes(`settings`)&&(0,P.jsx)(h_,{children:(0,P.jsxs)(y_,{$active:o===`settings`,onClick:e=>m(`settings`,Gt(e)),title:_(`Settings`),type:`button`,children:[(0,P.jsx)(pi,{}),(0,P.jsx)(x_,{children:_(`Settings`)})]})})]})}var c_=10,l_=40;function u_({historyVersion:e=0,onNavigate:t}){let n=I(),[r,i]=(0,E.useState)(null),a=Fn();return(0,E.useEffect)(()=>{Ve().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=In(a,e.path);return(0,P.jsxs)(y_,{$active:!1,onClick:n=>t(e.path,Gt(n)),title:o(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,P.jsx)(Os,{place:r}):(0,P.jsx)(Ks,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,P.jsx)(x_,{children:r?.name||e.name})]},e.path)})}function d_({path:e,onNavigate:n}){let[r,i]=(0,E.useState)(null);(0,E.useEffect)(()=>{e&&(i(null),Ce(e,!1).then(i,()=>i(null)))},[e]),(0,E.useEffect)(()=>{if(e&&N.available)return N.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Ce(e,!1).then(i,()=>void 0)})},[e]);let a=r?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,c_),s=a.filter(e=>!e.isDirectory).slice(0,l_);return(0,P.jsxs)(P.Fragment,{children:[o.map(e=>(0,P.jsx)(f_,{entry:e,onNavigate:n},e.fullPath)),s.map(e=>(0,P.jsx)(f_,{entry:e,onNavigate:n},e.fullPath))]})}function f_({entry:e,onNavigate:t}){let n=Fn(),r=In(n,e.fullPath);return(0,P.jsxs)(y_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Gt(n)):void Se(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,P.jsx)(Os,{place:r}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,P.jsx)(x_,{children:r?.name||e.name})]})}var p_=_.aside`
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

    &:not(:hover) ${()=>S_},
    &:not(:hover) ${()=>C_} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,m_=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,h_=_(m_)`
    margin-top: auto;
`,g_=_.div`
    display: flex;
    flex-direction: column;
`,__=_.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${p_}:hover ${g_}:hover > & {
        grid-template-rows: 1fr;
    }
`,v_=_.div`
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
`,y_=_.button`
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
`,b_=_.span`
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
`,x_=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,S_=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,C_=_.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,w_=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,T_=_.span`
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
`;function E_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=I(),a=(0,E.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,E.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,P.jsxs)(O_,{ref:a,children:[(0,P.jsxs)(k_,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,P.jsx)(vi,{size:13}),c>0&&(0,P.jsx)(T_,{children:c>9?`9+`:c})]}),n&&(0,P.jsxs)(A_,{children:[(0,P.jsxs)(j_,{children:[(0,P.jsx)(M_,{children:i(`Status center`)}),(0,P.jsxs)(N_,{children:[(0,P.jsx)(P_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,P.jsx)(F_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]})]}),e.length===0?(0,P.jsx)(L_,{children:i(`No operations yet.`)}):(0,P.jsx)(I_,{children:e.map(e=>(0,P.jsx)(D_,{task:e},e.id))})]})]})}function D_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,P.jsxs)(R_,{children:[(0,P.jsxs)(z_,{children:[(0,P.jsx)(B_,{$state:e.state,children:e.state===`done`?(0,P.jsx)(bi,{size:10}):e.state===`failed`?(0,P.jsx)(xi,{size:10}):(0,P.jsx)(V_,{})}),(0,P.jsx)(H_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,P.jsxs)(U_,{children:[f(e.bytesDone),` / `,f(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,P.jsxs)(U_,{children:[e.done,` / `,e.total]})]}),i&&(0,P.jsx)(W_,{children:(0,P.jsx)(G_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,P.jsx)(K_,{children:e.error})]})}var O_=_.div`
    position: relative;
    display: flex;
`,k_=_.button`
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
`,A_=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Fa}
    ${Ja}
`,j_=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,M_=_.span`
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
`,N_=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,P_=_.button`
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
`,F_=_.button`
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
`,I_=_.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,L_=_.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,R_=_.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${Ya}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,z_=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,B_=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,V_=_.span`
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
`,H_=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,U_=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,W_=_.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,G_=_.div`
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
`,K_=_.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function q_(){return N.available?(await N.request(`fs.history.list`)).entries:[]}async function J_(e){return N.available?(await N.request(`fs.history.undoTo`,{id:e})).ok:!1}function Y_(){let e=I(),[t,n]=(0,E.useState)(!1),[r,i]=(0,E.useState)([]),[a,o]=(0,E.useState)(!1),s=(0,E.useRef)(null),c=()=>void q_().then(i,()=>i([]));(0,E.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await J_(e),c()}finally{o(!1)}};return(0,P.jsxs)(Q_,{ref:s,children:[(0,P.jsx)($_,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,P.jsx)(_i,{size:14})}),t&&(0,P.jsxs)(ev,{children:[(0,P.jsxs)(tv,{children:[(0,P.jsx)(nv,{children:e(`History`)}),(0,P.jsx)(rv,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]}),r.length===0?(0,P.jsx)(fv,{children:e(`No operations yet.`)}):(0,P.jsx)(iv,{children:r.map(t=>(0,P.jsxs)(av,{children:[(0,P.jsxs)(ov,{children:[(0,P.jsxs)(sv,{children:[(0,P.jsx)(Z_,{label:t.label}),X_(e,t.label)]}),(0,P.jsx)(cv,{children:S(t.at)})]}),t.paths.length>0&&(0,P.jsxs)(lv,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,P.jsx)(uv,{children:(0,P.jsx)(dv,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function X_(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);if(t===`Paste text`)return e(`Paste text`);if(t===`Paste image`)return e(`Paste image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function Z_({label:e}){return e.startsWith(`Delete`)?(0,P.jsx)(yi,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,P.jsx)(oa,{size:13}):e.startsWith(`Rename`)?(0,P.jsx)(Bi,{size:13}):e.startsWith(`Compress`)?(0,P.jsx)(Ai,{size:13}):e.startsWith(`New`)?(0,P.jsx)(li,{size:13}):(0,P.jsx)(di,{size:13})}var Q_=_.div`
    position: relative;
    display: flex;
`,$_=_.button`
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
`,ev=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Fa}
    ${Ja}
`,tv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,nv=_.span`
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
`,rv=_.button`
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
`,iv=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,av=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,ov=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,sv=_.span`
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
`,cv=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,lv=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,uv=_.div`
    display: flex;
    justify-content: flex-end;
`,dv=_.button`
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
`,fv=_.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function pv({currentFolder:e}){let n=I(),[r,i]=(0,E.useState)(!1),[a,o]=(0,E.useState)(null),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!r)return;let e=()=>void bc().then(o,()=>void 0);e();let t=window.setInterval(e,2500),n=e=>{l.current?.contains(e.target)||i(!1)};return window.addEventListener(`pointerdown`,n),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,n)}},[r]),(0,E.useEffect)(()=>{let e=()=>void bc().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(n=>t(n.path,e))??!1;return(0,P.jsxs)(mv,{ref:l,children:[(0,P.jsxs)(hv,{$active:r,onClick:()=>i(e=>!e),title:n(`Share folders`),type:`button`,children:[(0,P.jsx)(ea,{size:15}),a&&a.shares.length>0&&(0,P.jsx)(T_,{children:a.shares.length>9?`9+`:a.shares.length})]}),r&&(0,P.jsxs)(gv,{children:[(0,P.jsxs)(_v,{children:[(0,P.jsx)(vv,{children:n(`Share`)}),(0,P.jsx)(yv,{onClick:()=>i(!1),title:n(`Close`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]}),(0,P.jsxs)(bv,{children:[(0,P.jsxs)(xv,{children:[(0,P.jsx)(wi,{size:15}),(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`strong`,{children:a?.deviceName||n(`This device`)}),(0,P.jsx)(Sv,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,P.jsx)(Cv,{children:n(`No folders are shared yet.`)}),a?.shares.map(e=>(0,P.jsxs)(wv,{children:[(0,P.jsxs)(Tv,{children:[(0,P.jsx)(Ev,{title:e.path,children:e.name}),(0,P.jsx)(Ov,{disabled:s,onClick:()=>void u(()=>Sc(e.id)),title:n(`Stop sharing`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]}),(0,P.jsx)(Dv,{title:e.path,children:e.path}),(0,P.jsxs)(kv,{children:[(0,P.jsxs)(Av,{$active:e.mode===`client`,onClick:()=>void u(()=>Cc(e.id,`client`)),title:n(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,P.jsx)(wi,{size:11}),n(`App`)]}),(0,P.jsxs)(Av,{$active:e.mode===`web`,onClick:()=>void u(()=>Cc(e.id,`web`)),title:n(`Any device with a browser can open this folder.`),type:`button`,children:[(0,P.jsx)(na,{size:11}),n(`Web`)]})]})]},e.id)),(0,P.jsxs)(jv,{disabled:s||e.length===0||d,onClick:()=>void u(()=>xc(e,`client`)),title:d?n(`This folder is already shared.`):e,type:`button`,children:[(0,P.jsx)(li,{size:12}),n(`Share this folder`)]}),a?.webRunning&&(0,P.jsxs)(Mv,{children:[(0,P.jsxs)(Nv,{children:[(0,P.jsx)(na,{size:12}),n(`Browser access`)]}),a.urls.map(e=>(0,P.jsx)(Pv,{onClick:()=>void dt(e),type:`button`,children:e},e)),(0,P.jsx)(Sv,{children:n(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var mv=_.div`
    position: relative;
    display: flex;
`,hv=_.button`
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
`,gv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Fa}
    ${Ja}
`,_v=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,vv=_.span`
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
`,yv=_.button`
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
`,bv=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,xv=_.div`
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
`,Sv=_.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,Cv=_.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,wv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,Tv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Ev=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Dv=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ov=_.button`
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
`,kv=_.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,Av=_.button`
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
`,jv=_.button`
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
`,Mv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,Nv=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Pv=_.button`
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
`;function Fv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=I(),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,E.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Xc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,P.jsxs)(Iv,{ref:l,children:[(0,P.jsx)(Lv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,P.jsx)(gi,{size:14}):(0,P.jsx)(hi,{size:14})}),s&&(0,P.jsxs)(Rv,{children:[(0,P.jsx)(zv,{children:o(`View`)}),(0,P.jsxs)(Vv,{children:[(0,P.jsxs)(Hv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,P.jsx)(hi,{size:12}),` `,o(`List`)]}),(0,P.jsxs)(Hv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,P.jsx)(gi,{size:12}),` `,o(`Grid`)]})]}),(0,P.jsx)(zv,{children:o(`List icon size`)}),(0,P.jsxs)(Uv,{children:[(0,P.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,P.jsxs)(Wv,{children:[e.iconSize,`px`]})]}),(0,P.jsx)(zv,{children:o(`Grid size`)}),(0,P.jsxs)(Uv,{children:[(0,P.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,P.jsxs)(Wv,{children:[e.gridSize,`px`]})]}),(0,P.jsxs)(zv,{children:[o(`Columns`),(0,P.jsx)(Om,{}),(0,P.jsx)(Bv,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`Reset column widths`),type:`button`,children:o(`Reset widths`)})]}),Xc.map(e=>(0,P.jsxs)(Gv,{children:[(0,P.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,P.jsxs)(Gv,{children:[(0,P.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,P.jsxs)(zv,{children:[o(`Preview panel`),(0,P.jsx)(Om,{})]}),(0,P.jsxs)(Gv,{children:[(0,P.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var Iv=_.div`
    position: relative;
    display: flex;
    height: 100%;
`,Lv=_.button`
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
`,Rv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Fa}
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
`,zv=_.div`
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
`,Bv=_.button`
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
`,Vv=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Hv=_.button`
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
`,Uv=_.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Wv=_.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Gv=_.label`
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
`,Kv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),qv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Jv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Yv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,P.jsx)(`path`,{d:`M2 5h6`})}),Xv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,P.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Zv=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,P.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,P.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Qv({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:ee,onToggleDetails:te,shortcuts:ne,currentFolder:re}){let C=I(),w=me(),ie=he(),[T,ae]=(0,E.useState)({left:!1,right:!1}),[D,oe]=(0,E.useState)(null),[O,se]=(0,E.useState)(null),k=(0,E.useRef)(null),A=(0,E.useRef)(null),j=(0,E.useRef)(null),M=(0,E.useCallback)(()=>{let e=A.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ae(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,E.useEffect)(()=>{M();let e=A.current;if(!e)return;let t=new ResizeObserver(M);return t.observe(e),()=>t.disconnect()},[M,e.length]),(0,E.useEffect)(()=>()=>{k.current&&window.clearTimeout(k.current.timer)},[]),(0,E.useEffect)(()=>{j.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ce=e=>A.current?.scrollBy({left:e,behavior:`smooth`}),le=()=>{k.current&&window.clearTimeout(k.current.timer),k.current=null,se(null)};return(0,P.jsxs)(ny,{children:[(0,P.jsx)(ry,{children:(0,P.jsx)(wi,{size:19})}),(0,P.jsxs)(iy,{children:[T.left&&(0,P.jsx)(oy,{onClick:()=>ce(-180),title:C(`Scroll tabs left`),type:`button`,children:(0,P.jsx)(Kv,{})}),(0,P.jsx)(ay,{onScroll:M,onWheel:e=>{let t=A.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:A,children:e.map(e=>(0,P.jsxs)(sy,{$active:e.id===t,$dragging:D===e.id,$dropTarget:O===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Ys(t.dataTransfer)||!$v(e)||(t.preventDefault(),k.current?.id===e.id))return;le(),se(e.id);let r=window.setTimeout(()=>{n(e.id),k.current=null},500);k.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(k.current?.id===e.id||O===e.id)&&le()},onDragEnd:()=>{oe(null),le()},onDragOver:t=>{(D||Ys(t.dataTransfer)&&$v(e))&&(t.preventDefault(),Ys(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>oe(e.id),onDrop:t=>{if(t.preventDefault(),D)a(D,e.id);else if($v(e)&&Ys(t.dataTransfer)){let{paths:r,move:i}=Xs(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}oe(null),le()},onClick:()=>n(e.id),ref:e.id===t?j:void 0,title:e.path||e.title,type:`button`,children:[(0,P.jsx)(ey,{tab:e}),(0,P.jsx)(cy,{children:e.title}),e.partner&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ly,{children:`|`}),(0,P.jsx)(ty,{place:e.partner.place}),(0,P.jsx)(cy,{children:e.partner.title})]}),(0,P.jsx)(uy,{"data-shortcut":qt(ne.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:C(`Close tab`),children:(0,P.jsx)(Jv,{})})]},e.id))}),T.right&&(0,P.jsx)(oy,{onClick:()=>ce(180),title:C(`Scroll tabs right`),type:`button`,children:(0,P.jsx)(qv,{})}),(0,P.jsx)(dy,{"data-shortcut":qt(ne.newTab),onClick:i,title:C(`New tab`),type:`button`,children:(0,P.jsx)(li,{size:13})})]}),(0,P.jsx)(fy,{...ie}),(0,P.jsxs)(py,{children:[(0,P.jsx)(hy,{$active:y,"data-shortcut":qt(ne.splitView),disabled:!b,onClick:x,title:C(y?`Close split view`:`Split view`),type:`button`,children:(0,P.jsx)(da,{size:15})}),(0,P.jsx)(hy,{$active:S,disabled:!ee,onClick:te,title:C(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,P.jsx)(fa,{size:15})}),(0,P.jsxs)(my,{$active:_,onClick:v,title:C(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,P.jsx)(ta,{size:14}),g>0&&(0,P.jsx)(T_,{children:g>9?`9+`:g})]}),(0,P.jsx)(Y_,{}),(0,P.jsx)(pv,{currentFolder:re}),(0,P.jsx)(E_,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,P.jsx)(Fv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,P.jsx)(gy,{onClick:w.minimize,title:C(`Minimize`),type:`button`,children:(0,P.jsx)(Yv,{})}),(0,P.jsx)(gy,{onClick:w.toggleMaximize,title:w.maximized?C(`Restore`):C(`Maximize`),type:`button`,children:w.maximized?(0,P.jsx)(Zv,{}):(0,P.jsx)(Xv,{})}),(0,P.jsx)(_y,{onClick:w.close,title:C(`Close`),type:`button`,children:(0,P.jsx)(Jv,{})})]})]})}function $v(e){return e.kind===`files`&&(!p(e.path)||T(e.path))}function ey({tab:e}){switch(e.kind){case`home`:return(0,P.jsx)(ni,{size:13});case`settings`:return(0,P.jsx)(pi,{size:13});case`recycle`:return(0,P.jsx)(yi,{size:13});default:return e.archive?(0,P.jsx)(Ai,{size:13}):(0,P.jsx)(ty,{place:e.place})}}function ty({place:e}){return e?(0,P.jsx)(Os,{place:e,size:13}):(0,P.jsx)(ri,{size:13})}var ny=_.header`
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
`,ry=_.span`
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
`,iy=_.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,ay=_.div`
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
`,oy=_.button`
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
`,sy=_.button`
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
`,cy=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ly=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,uy=_.span`
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
`,dy=_.button`
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
`,fy=_.div`
    flex: 1;
    min-width: 28px;
`,py=_.div`
    display: flex;
    flex-shrink: 0;
`,my=_.button`
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
`,hy=_.button`
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
`,gy=_.button`
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
`,_y=_(gy)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function vy(){let[e,t]=(0,E.useState)(null),n=(0,E.useRef)(null),r=(0,E.useRef)(void 0);return(0,E.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Pa.createPortal)((0,P.jsx)(yy,{tooltip:e}),document.body):null}function yy({tooltip:e}){let t=(0,E.useRef)(null),[n,r]=(0,E.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,E.useState)(()=>e.bottom+6);return(0,E.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,P.jsxs)(by,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,P.jsx)(xy,{children:e.text}),e.shortcut&&(0,P.jsx)(Sy,{children:e.shortcut})]})}var by=_.div`
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
    ${Ya}
`,xy=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Sy=_.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Cy={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function wy({deviceName:e,code:t,onAccept:n,onReject:r}){let i=I(),a=(0,E.useRef)(null);return(0,E.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Pa.createPortal)((0,P.jsx)(Ty,{children:(0,P.jsxs)(Ey,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsxs)(Dy,{children:[(0,P.jsx)(ea,{size:15}),i(`Pair for sharing`)]}),(0,P.jsx)(Oy,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,P.jsx)(ky,{children:t}),(0,P.jsx)(Ay,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,P.jsxs)(jy,{children:[(0,P.jsx)(My,{onClick:r,type:`button`,children:i(`Reject`)}),(0,P.jsx)(Ny,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var Ty=_.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Ya}
`,Ey=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Wa}
`,Dy=_.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Oy=_.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,ky=_.div`
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
`,Ay=_.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,jy=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,My=_.button`
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
`,Ny=_(My)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Py=0,Fy=new Set;function Iy(e){Fy.add(e),N.send({type:`app.navigate.done`,payload:{path:e}})}var Ly=20,Ry=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function zy(e){return e.history[e.index]??Sp(`home`)}function By(e){return Cp(zy(e))??`files`}function Vy(e){let t=zy(e);return Cp(t)?``:e.listing?.path||t}function Hy(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||By(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Uy(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Wy(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||B.iconSize,gridSize:e.view?.gridSize||t.gridSize||B.gridSize,sort:e.view?.sort??B.sort,sortDescending:e.view?.sortDescending??B.sortDescending,columns:t.columns??be.columns??[]}}function Gy(e=Sp(`home`)){return Py+=1,{id:`tab-${Py}`,listing:null,loading:!Cp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Ky(e){return e instanceof Error?e.message:String(e)}function qy(e){let t=jc(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return Mc(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Jy(e){let t=v(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Yy(e){return p(e)?Qt(e):void 0}function Xy(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:f(n)})}function Zy(){let e=I(),[n,r]=(0,E.useState)(()=>[Gy()]),[i,a]=(0,E.useState)(()=>n[0].id),[o,s]=(0,E.useState)(null),[d,f]=(0,E.useState)(()=>{let e=Rn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[m,h]=(0,E.useState)([]),[g,_]=(0,E.useState)([]),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(null),[ne,re]=(0,E.useState)(null),C=ge(),[w,ie]=(0,E.useState)(vn),[ae,D]=(0,E.useState)(0),[oe,O]=(0,E.useState)(0),[se,k]=(0,E.useState)(0),[A,j]=(0,E.useState)(vn),[M,ce]=(0,E.useState)(0),[le,ue]=(0,E.useState)(0),[de,fe]=(0,E.useState)(0),[F,pe]=(0,E.useState)(0),L=(0,E.useRef)(F);L.current=F;let[me,he]=(0,E.useState)([]),[R,ve]=(0,E.useState)(10),[z,xe]=(0,E.useState)(null),Ee=(0,E.useMemo)(()=>(z?.favorites??[]).map(e=>l(e.path)),[z?.favorites]),[Me,Ne]=(0,E.useState)(0),[H,Pe]=(0,E.useState)(Ht),[Fe,Ie]=(0,E.useState)(0),[Le,Re]=(0,E.useState)(0),[ze,Ve]=(0,E.useState)(0),[Ue,We]=(0,E.useState)(!0),[Ge,qe]=(0,E.useState)(()=>{let e=Rn(`yafm.preview.width`,320);return e>=220?e:320}),[Je,Xe]=(0,E.useState)(null),[Ze,Qe]=(0,E.useState)(null),[$e,et]=(0,E.useState)(`primary`),[tt,nt]=(0,E.useState)(null),[rt,ot]=(0,E.useState)(null),[st,ut]=(0,E.useState)(null),[dt,ft]=(0,E.useState)(null),[U,pt]=(0,E.useState)({primary:0,secondary:0}),[mt,ht]=(0,E.useState)({primary:null,secondary:null}),[gt,_t]=(0,E.useState)(null),[yt,Tt]=(0,E.useState)([]),[Dt,Ot]=(0,E.useState)(!1),kt=(0,E.useRef)([]),jt=(0,E.useRef)([]),[Mt,Nt]=(0,E.useState)([]),[W,Pt]=(0,E.useState)(!1),Lt=(0,E.useMemo)(()=>W?new Set(Mt.map(e=>e.path)):new Set,[Mt,W]),[Rt,zt]=(0,E.useState)(!1),[Ut,Jt]=(0,E.useState)([]),[Xt,Zt]=(0,E.useState)(null),nn=(0,E.useRef)(0),[rn,an]=(0,E.useState)(()=>{let e=Bn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Uy({x:e.x,y:e.y}):Uy({x:Math.max(20,window.innerWidth-340),y:110})}),on=(0,E.useCallback)(()=>{an(e=>Uy(e)),zt(!0)},[]),K=n.find(e=>e.id===i)??n[0],q=By(K),ln=zy(K),un=Vy(K),dn=q===`files`?K.listing?.parent??qy(un):null,J=K.splitWith?n.find(e=>e.id===K.splitWith):void 0,fn=q===`files`&&J!==void 0,pn=J?Vy(J):``,mn=J?J.listing?.parent??qy(pn):null,hn=fn&&J&&$e===`secondary`?J:K,gn=z?.defaultView??be,_n=Wy(hn,gn);(0,E.useEffect)(()=>{ee(z?.accentColor,z?.secondaryColor)},[z?.accentColor,z?.secondaryColor]),(0,E.useEffect)(()=>{Mm(z?.fonts)},[z?.fonts]),(0,E.useEffect)(()=>{te(z?.timeFormat,z?.timeFormatPattern)},[z?.timeFormat,z?.timeFormatPattern]),(0,E.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!z?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[z?.backgroundSource]),(0,E.useEffect)(()=>(ye(e=>new Promise(t=>{Zt({id:++nn.current,prompt:e,resolve:t})})),()=>ye(null)),[]),(0,E.useEffect)(()=>{et(`primary`)},[i]),(0,E.useEffect)(()=>{j(vn),ue(0),fe(0)},[q]),(0,E.useEffect)(()=>{ue(0)},[A.query,A.matchCase,A.regex]),(0,E.useEffect)(()=>{ue(e=>de===0?0:Math.min(e,de-1))},[de]);let yn=_n.columns.includes(`linkCount`),bn=(0,E.useMemo)(()=>{let e={},t=Ts(z),n={};for(let[e,t]of Object.entries(z?.placeNames??{}))n[l(e)]=t;for(let t of m)e[l(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=l(t),i=m.find(e=>l(e.path)===r);e[r]={name:n[r]??i?.name??(v(t)||t),path:t,kind:`folder`,icon:i?.icon??z?.placeIcons?.[t]??null}}return e},[m,z]),xn=(0,E.useMemo)(()=>({places:bn,useIcons:z?.systemIcons===!1}),[bn,z?.systemIcons]),Sn=z?.defaultView?.showImages??!0,Cn=z?.defaultView?.imageStripHeight??be.imageStripHeight,wn=q===`home`?(0,P.jsx)(zi,{size:13}):q===`settings`?(0,P.jsx)(pi,{size:13}):q===`recycle`?(0,P.jsx)(yi,{size:13}):q===`gallery`?(0,P.jsx)(Di,{size:13}):void 0,Tn=w.open&&w.query.length>0,En=(0,E.useMemo)(()=>Tn&&hn.listing?hn.listing.entries.filter(e=>Dn(e.isDirectory?Ln(xn,e.fullPath,e.name):e.name,w)).map(e=>e.fullPath):[],[Tn,w,hn.listing,xn]);(0,E.useEffect)(()=>{D(0)},[w.query,w.matchCase,w.regex,hn.listing?.path]);let On=En.length===0?-1:Math.min(ae,En.length-1),kn=(0,E.useCallback)(()=>{ie(e=>({...e,open:!1,query:``})),D(0)},[]),An=(0,E.useCallback)(()=>{ie(e=>({...e,open:!0})),O(e=>e+1)},[]),jn=(0,E.useCallback)(()=>{j(e=>({...e,open:!0})),ce(e=>e+1)},[]),Mn=(0,E.useCallback)(()=>{j(vn),ue(0),fe(0)},[]),Nn=(0,E.useCallback)(e=>{ue(t=>de===0?0:(Math.min(t,de-1)+e+de)%de)},[de]),Fn=(0,E.useCallback)(e=>{ie(t=>({...t,open:!0,query:t.open?t.query+e:e})),O(e=>e+1)},[]),Hn=(0,E.useCallback)(e=>{D(t=>En.length===0?0:(Math.min(t,En.length-1)+e+En.length)%En.length)},[En.length]),Un=(0,E.useRef)({tabs:n,activeId:i,activePane:$e});Un.current={tabs:n,activeId:i,activePane:$e};let Wn=(0,E.useRef)(z);Wn.current=z;let Gn=(0,E.useRef)(!1),Kn=(0,E.useRef)([]),qn=(0,E.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Jn=(0,E.useRef)(new Map),Yn=(0,E.useCallback)(e=>{let t=(Jn.current.get(e)??0)+1;return Jn.current.set(e,t),()=>Jn.current.get(e)===t},[]),Xn=(0,E.useCallback)((e,t)=>{N.available&&t&&e===Hy(Un.current)&&N.send({type:`fs.focus`,payload:{path:t}})},[]),Zn=(0,E.useCallback)(async(e,t,n)=>{if(!(t&&Ac(t)))try{let r=await ke(t,yn);if(!n()||!r.listing)return;qn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[yn,qn]),Qn=(0,E.useCallback)(async(e,n,r=!1)=>{let i=Yn(e);kn(),Xn(e,n);let a=!r||!Un.current.tabs.find(t=>t.id===e)?.listing,o=!r&&n!==void 0;qn(e,e=>{if(!o)return{listing:r?e.listing:null,loading:!0,error:null,fresh:r&&e.fresh};let i=e.history[e.index],a=i!==void 0&&t(i,n);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),n],index:a?e.index:e.index+1}});try{a&&Zn(e,n,i);let t=n&&Ac(n)?await Nc(n):await Ce(n,!0,yn,L.current,n?Yy(n):void 0);if(!i())return;qn(e,e=>({listing:t,view:t.view??null,loading:!1,fresh:!1,history:o?e.history.map((n,r)=>r===e.index?t.path:n):e.history,index:e.index})),!r&&!Ac(t.path)&&He(t.path).then(()=>Ne(e=>e+1))}catch(t){if(!i())return;let a=Un.current.tabs.find(t=>t.id===e),o=n&&n.length>0?n:a?Vy(a):``,s=qy(o),c=Ky(t);if(o&&tn(c)){let t=u(o),a=await wa(t,!!Qt(t));if(a){$t(t,a),i()&&Qn(e,n,r);return}}qn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...r?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Yn,yn,qn,Xn,kn,Zn]),$n=(0,E.useCallback)((e,t)=>{let n=wp(t);n&&(Cp(n)?(kn(),Yn(e),qn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Qn(e,n))},[Yn,Qn,qn,kn]),er=(0,E.useCallback)(async(e,t,n)=>{if(kn(),Cp(t)){Yn(e),qn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Yn(e);Xn(e,t),qn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Ac(t)||Zn(e,t,r);let n=Ac(t)?await Nc(t):await Ce(t,!0,yn,L.current,Yy(t));if(!r())return;qn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(tn(Ky(i))){let i=u(t),a=await wa(i,!!Qt(i));if(a){$t(i,a),r()&&er(e,t,n);return}}qn(e,()=>({listing:{path:t,parent:qy(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Ky(i)}))}},[Yn,yn,qn,Xn,kn,Zn]),tr=(0,E.useCallback)((e,t=!0)=>{let n=Gy(e??Sp(`home`));return r(e=>[...e,n]),t&&a(n.id),e&&!Cp(e)&&Qn(n.id,e),n.id},[Qn]),nr=(0,E.useCallback)(e=>{for(let n of Un.current.tabs)By(n)===`files`&&t(Vy(n),e)&&Qn(n.id,e,!0)},[Qn]),rr=(0,E.useCallback)((e,n)=>{let r=v(n);for(let i of Un.current.tabs)i.listing?.entries.some(n=>t(n.fullPath,e))&&qn(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>t(i.fullPath,e)?{...i,name:r,fullPath:n}:i);return{listing:{...a,entries:o}}})},[qn]),ir=(0,E.useRef)([]);(0,E.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&p(n)&&e.add(l(u(n)))}let t=ir.current.filter(t=>!e.has(t));ir.current=[...e],t.length>0&&Te(t)},[n]);let ar=(0,E.useCallback)((e,t=!1)=>{t?tr(Sp(e)):$n(Un.current.activeId,Sp(e))},[tr,$n]),or=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Un.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(jt.current.push(zy(i)),jt.current.length>Ly&&jt.current.shift()),o.length===0){let e=Gy();r([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);r(o),n===e&&a(o[Math.min(s,o.length-1)].id)},[]),sr=(0,E.useCallback)(()=>{let e=jt.current.pop();if(!e)return;let t={...Gy(e),fresh:!1};r(e=>[...e,t]),a(t.id),By(t)===`files`&&Qn(t.id,Vy(t))},[Qn]),cr=(0,E.useCallback)((e,t=!1)=>{t?tr(e):$n(Hy(Un.current),e??Sp(`home`))},[$n,tr]),lr=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Un.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),ur=(0,E.useCallback)(()=>{let{tabs:e,activeId:t}=Un.current,n=e.find(e=>e.id===t);if(!n||By(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),qn(t,()=>({splitWith:void 0})),et(`primary`);return}let a=Vy(n),o={...Gy(a),hidden:!0};r(e=>[...e,o]),qn(t,()=>({splitWith:o.id})),Qn(o.id,a),et(`primary`)},[Qn,qn]),dr=(0,E.useCallback)(e=>{qe(e),zn(`yafm.preview.width`,e)},[]),fr=fn?$e===`secondary`?Ze??Je:Je??Ze:Je,pr=(0,E.useRef)(null),mr=e=>{e.preventDefault();let t=pr.current?.getBoundingClientRect();if(!t)return;let n=Ue?Ge:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);f(n),zn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},hr=(e,t,n)=>{t&&nt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},gr=(0,E.useCallback)((e,t)=>{pt(n=>n[e]===t?n:{...n,[e]:t})},[]),_r=(0,E.useCallback)(e=>gr(`primary`,e),[gr]),vr=(0,E.useCallback)(e=>gr(`secondary`,e),[gr]),yr=(e,t)=>{U[e]!==0&&ht(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},br=async(e,t=!1)=>{let n=tt;if(nt(null),!n)return;let r=e===null?await Et(n.directory,t):await At(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;kn(),_t(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},xr=(0,E.useCallback)(()=>{let{tabs:e}=Un.current,t=e.find(e=>e.id===Hy(Un.current));t&&t.index>0&&er(t.id,t.history[t.index-1],t.index-1)},[er]),Sr=(0,E.useCallback)(()=>{let{tabs:e}=Un.current,t=e.find(e=>e.id===Hy(Un.current));t&&t.index<t.history.length-1&&er(t.id,t.history[t.index+1],t.index+1)},[er]),Cr=(0,E.useCallback)(()=>{let{tabs:e}=Un.current,t=e.find(e=>e.id===Hy(Un.current));t&&By(t)===`files`&&t.listing?.parent&&cr(t.listing.parent)},[cr]),wr=(0,E.useRef)(null),Tr=(0,E.useCallback)(()=>{for(let e of Un.current.tabs)e.listing&&Qn(e.id,e.listing.path,!0)},[Qn]),Er=(0,E.useCallback)(e=>{e.length!==0&&(Jt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),on())},[on]),Dr=(0,E.useCallback)(async e=>{let t=await St(e);t.length!==0&&Er(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Er]),Or=(0,E.useCallback)(e=>{let t=new Set(e);Jt(e=>e.filter(e=>!t.has(e.path)))},[]),kr=(0,E.useCallback)(async e=>{let t=Wn.current;if(!t)return;let n=await St(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>l(e.path))),i=n.filter(e=>!r.has(l(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};xe(a),await it(a),Ie(e=>e+1)},[]),Ar=(0,E.useCallback)(async e=>{let t=Wn.current;if(!t)return;let n=new Set(e.map(l)),r=(t.favorites??[]).filter(e=>!n.has(l(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};xe(i),await it(i),Ie(e=>e+1)},[]),jr=(0,E.useCallback)(()=>Jt([]),[]),Mr=(0,E.useRef)(-1),Nr=(0,E.useCallback)(e=>{Nt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Pt(e.move),e.entries.length>0&&on()},[on]),Pr=(0,E.useCallback)(async()=>{if(N.available)try{let e=await bt();Mr.current=e.sequence,Nr(e)}catch{}},[Nr]),Fr=(0,E.useCallback)(async e=>{e.length!==0&&await vt(e,!1)&&await Pr()},[Pr]),Ir=(0,E.useRef)(Ut);Ir.current=Ut,(0,E.useEffect)(()=>{let e=e=>{Ys(e.dataTransfer)&&on()},t=e=>{Ys(e.dataTransfer)&&on()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[on]),(0,E.useEffect)(()=>{let e=()=>an(e=>Uy(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Lr=(0,E.useCallback)(async()=>{let e=Ir.current;if(e.length>0){let t=await St(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Jt(e=>e.filter(e=>n.has(e.path)))}await Pr()},[Pr]),Rr=(0,E.useCallback)(()=>{Lr(),Ve(e=>e+1),Tr()},[Lr,Tr]),zr=(0,E.useCallback)(e=>{let t=Uy(e);an(t),Vn(`yafm.tray.position`,t)},[]),Br=(0,E.useCallback)(()=>{Rt?zt(!1):on()},[on,Rt]),Vr=(0,E.useCallback)(async(t,n,r)=>{let i=await xt(t,n,r);i.ok?(r&&Or(t),Ve(e=>e+1),Tr(),Pr()):Sa(i.error??e(`The files could not be transferred.`))},[Tr,Pr,Or]);(0,E.useEffect)(()=>{if(N.available)return G().then(e=>{kt.current=e,Tt(e)},()=>void 0),N.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=kt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});kt.current=n,Tt(n),r&&Ot(!0)})},[]);let Hr=(0,E.useCallback)(()=>{Vt().then(()=>G().then(e=>{kt.current=e,Tt(e)},()=>void 0))},[]);(0,E.useEffect)(()=>{if(!N.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await bt();if(!e||t.sequence===Mr.current)return;Mr.current=t.sequence,Nr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Nr]);let Ur=(0,E.useCallback)(async e=>{let t=e?await Ft():await It();t.ok?(Ve(e=>e+1),Tr()):t.error&&!t.error.startsWith(`Nothing to`)&&Sa(t.error)},[Tr]),Wr=(0,E.useRef)(yn);(0,E.useEffect)(()=>{Wr.current!==yn&&(Wr.current=yn,Tr())},[yn,Tr]);let Gr=(0,E.useCallback)((e,t)=>{let{tabs:n}=Un.current,r=n.find(t=>t.id===e);if(!r||By(r)!==`files`)return;let i=Vy(r),a=Wn.current?.defaultView??be,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||B.iconSize,gridSize:r.view?.gridSize||a.gridSize||B.gridSize,sort:r.view?.sort??B.sort,sortDescending:r.view?.sortDescending??B.sortDescending,...t};qn(e,()=>({view:o})),wr.current!==null&&window.clearTimeout(wr.current),wr.current=window.setTimeout(()=>{wr.current=null,De(i,o)},250)},[qn]),Kr=(0,E.useCallback)(e=>{Gr(Hy(Un.current),e)},[Gr]),qr=(0,E.useCallback)(e=>{let t=Wn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,columns:e}};xe(n),it(n)},[]),Jr=(0,E.useCallback)(e=>{let t=Wn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,showImages:e}};xe(n),it(n)},[]),Yr=(0,E.useCallback)(e=>{let t=Wn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,imageStripHeight:e}};xe(n),it(n)},[]),Xr=(0,E.useCallback)((e,t,n,r)=>{let i=Un.current.tabs.find(t=>t.id===e);if(!i||By(i)!==`files`||!i.listing)return;let a=Vy(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));qn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Oe(a,t,n,r)},[qn]),Zr=(0,E.useCallback)((e,t)=>{let n=Un.current.tabs.find(t=>t.id===e);if(!n)return;let r=Wy(n,Wn.current?.defaultView??be);Gr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Gr]),Qr=(0,E.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),$r=(0,E.useCallback)(()=>{Ae().then(h,()=>h([]))},[]),ei=(0,E.useCallback)(e=>{let t=(e.openTabs??[]).map(wp).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...Gy(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),a(n[i].id);for(let e of n)By(e)===`files`&&Qn(e.id,Vy(e),!0);return!0},[Qn]),ti=(0,E.useCallback)(e=>{let t=Kn.current;if(Kn.current=[],t.length===0)return;let n=t.filter(e=>!Fy.has(e));for(let e of t)n.includes(e)||Iy(e);if(n.length===0)return;let{tabs:r}=Un.current;if(!e&&r.length===1&&r[0].fresh){$n(r[0].id,n[0]),Iy(n[0]);for(let e of n.slice(1))tr(e),Iy(e);return}let i=n.map(e=>{let t=tr(e);return Iy(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[tr,$n]),Y=(0,E.useCallback)(()=>{Ye().then(e=>{xe(e),ve(e.recentLimit);let t={...Ht,...e.shortcuts};Pe(t),Wt(t.openInNewTab),Ie(e=>e+1),Gn.current||(Gn.current=!0,ti(e.restoreTabs&&ei(e)))},()=>{ve(10),Gn.current=!0,ti(!1)})},[ti,ei]),ni=(0,E.useCallback)(()=>{Be().then(he,()=>he([]))},[]),ri=(0,E.useCallback)(()=>{je().then(_,()=>_([]))},[]),ii=n.filter(e=>!e.hidden),ai=ii.map(zy),ci=ai.join(`
`),fi=Math.max(ii.findIndex(e=>e.id===i),0);(0,E.useEffect)(()=>{if(!z?.restoreTabs)return;let e=setTimeout(()=>void at(ai,fi),700);return()=>clearTimeout(e)},[ci,fi,z?.restoreTabs]),(0,E.useEffect)(()=>{let{tabs:e,activeId:t}=Un.current,n=e.find(e=>e.id===t);n&&n.fresh&&By(n)===`files`&&Qn(n.id,Vy(n),!0),$r(),Y(),ri(),ct().then(b,()=>b(null))},[Qn,$r,Y,ri]),(0,E.useEffect)(()=>{if(lt().then(S,()=>S(null)),N.available)return N.on(e=>{let t=e;t.type===`app.update`&&t.data&&S(t.data)})},[]),(0,E.useEffect)(()=>{if(N.available)return N.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&s({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Sa(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Sa(n.data.error??e(`Pairing failed.`))}})},[e]),(0,E.useEffect)(()=>{let e=setInterval(ri,3e4);return()=>clearInterval(e)},[ri]),(0,E.useEffect)(()=>{q===`home`&&(ni(),ri())},[q,K.id,ni,ri]),(0,E.useEffect)(()=>{if(!N.available)return;let e=N.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Un.current,i=t.data.startup===!0;i&&Fy.has(n)?Iy(n):i&&!Gn.current?Kn.current.includes(n)||Kn.current.push(n):(i&&r.length===1&&r[0].fresh?$n(r[0].id,n):Cp(n)?$n(Hy(Un.current),n):tr(n),i&&Iy(n))});return N.send({type:`app.ready`}),e},[$n,tr]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},r})})},[]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},r})})},[]),(0,E.useEffect)(()=>{let e=e=>{if(Yt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),xr();return}if(e.key===`BrowserForward`){e.preventDefault(),Sr();return}if(e.key===`Escape`&&w.open){e.preventDefault(),kn();return}let t=Kt(e);if(t===H.closeTab)e.preventDefault(),or(Hy(Un.current));else if(t===H.newTab)e.preventDefault(),tr();else if(t===H.reopenTab)e.preventDefault(),sr();else if(t===H.goBack)e.preventDefault(),xr();else if(t===H.goForward)e.preventDefault(),Sr();else if(t===H.goUp)e.preventDefault(),Cr();else if(t===H.find)e.preventDefault(),q===`files`?An():jn();else if(t===H.location)e.preventDefault(),Re(e=>e+1);else if(t===H.home){e.preventDefault();let t=m.find(e=>e.kind===`home`)?.path;t&&cr(t)}else t===H.iconsView?(e.preventDefault(),q===`files`&&Kr({mode:`grid`})):t===H.detailsView?(e.preventDefault(),q===`files`&&Kr({mode:`list`})):t===H.nextTab?(e.preventDefault(),lr(1)):t===H.previousTab?(e.preventDefault(),lr(-1)):t===H.hidden||t===`alt+.`?(e.preventDefault(),Ke().then(()=>{Ve(e=>e+1),Tr()})):t===H.undo?(e.preventDefault(),Ur(!0)):t===H.redo?(e.preventDefault(),Ur(!1)):t===H.splitView?(e.preventDefault(),ur()):q!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Fn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[H,q,w.open,or,sr,tr,xr,Sr,Cr,An,jn,kn,Fn,Kr,lr,cr,m,Tr,Ur,ur]),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),xr()):e.button===4&&(e.preventDefault(),Sr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[xr,Sr]);let mi=(0,E.useMemo)(()=>{let e=new Set;for(let t of n){if(By(t)!==`files`)continue;let n=Vy(t);if(n&&!Ac(n)){if(p(n)){let t=qy(u(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),hi=mi.join(`\0`);(0,E.useEffect)(()=>{N.available&&N.send({type:`fs.watch`,payload:{paths:mi,owner:`app`}})},[hi,i]);let gi=By(hn)===`files`?Vy(hn):``;(0,E.useEffect)(()=>{N.available&&N.send({type:`fs.focus`,payload:{path:gi||null}})},[gi]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let n=e;if(n.type!==`fs.changed`||typeof n.data?.path!=`string`)return;let r=n.data.path,i=Un.current.tabs.filter(e=>By(e)===`files`&&t(Vy(e),r)),a=Un.current.tabs.filter(e=>{let n=Vy(e);return By(e)===`files`&&n.length>0&&p(n)&&t(u(n),r)});if(i.length!==0||a.length!==0){cn(r);for(let e of a){let n=Un.current.tabs.find(t=>t.id===e.id),i=n?Vy(n):``;n&&By(n)===`files`&&!n.loading&&p(i)&&t(u(i),r)&&Qn(e.id,i,!0)}i.length!==0&&Ce(r,!1,yn).then(e=>{for(let n of i){let r=Un.current.tabs.find(e=>e.id===n.id);r&&By(r)===`files`&&t(Vy(r),e.path)&&(r.loading?window.setTimeout(()=>{let r=Un.current.tabs.find(e=>e.id===n.id);r&&!r.loading&&By(r)===`files`&&t(Vy(r),e.path)&&qn(n.id,()=>({listing:e}))},300):qn(n.id,()=>({listing:e})))}},()=>void 0)}})},[yn,Qn,qn]);let _i=K.index>0,vi=K.index<K.history.length-1,bi=(e,n)=>{let r=Wy(e,gn),i=e.listing?.path??e.history[e.index]??``,a=p(i),o=a&&T(i);return(0,P.jsx)(al,{confirmDelete:z?.confirmDelete??!1,cutPaths:Lt,previewVideoAudio:z?.previewVideoAudio??!1,previewVideoAutoplay:z?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:n?Xe:Qe,onActivate:()=>et(n?`primary`:`secondary`),enableShortcuts:(!fn||(n?$e===`primary`:$e===`secondary`))&&(!a||o),error:e.error,find:e.id===hn.id?{...w,currentPath:On<0?null:En[On]}:void 0,selectMatchesToken:e.id===hn.id?se:0,imageStripHeight:Cn,listing:e.listing,loading:e.loading,onImageStripHeight:Yr,readOnly:a&&!o||Ac(e.listing?.path??``),onOpen:(t,n)=>{n?tr(t):Qn(e.id,t)},onOpenFile:(t,n)=>{Ac(t)?Fc(t).catch(e=>void Sa(Ky(e))):c(t)?z?.archiveHandler??!1?n?tr(t):Qn(e.id,t):Se(t):p(t)?(async()=>{let e=await V(t,L.current,Yy(t));if(!e.path&&tn(e.error)){let n=u(t),r=Qt(n);r&&en(n);let i=await wa(n,!!r);i&&($t(n,i),e=await V(t,L.current,i))}e.path?Se(e.path):e.error&&Sa(e.error)})():Se(t)},onRefresh:()=>{let t=e.listing?.path;t&&nr(t)},onRename:rr,onSelectionCountChange:n?_r:vr,onSetTags:(t,n,r)=>Xr(e.id,t,n,r),selectionMenuRequest:n?mt.primary:mt.secondary,onSort:t=>Zr(e.id,t),onPaste:Rr,onClipboardChanged:()=>void Pr(),onTransfer:Vr,onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void Ei(e,t),openOnSingleClick:z?.openOnSingleClick??!1,pendingRename:gt&&n===($e===`primary`)&&t(gt.directory,e.listing?.path??``)?gt.path:null,pendingRenameToken:gt?.token??0,refreshToken:ze,shortcuts:H,showCheckboxes:z?.showCheckboxes??!0,showImages:Sn,view:r})},xi=w.open&&(0,P.jsx)(Md,{current:On,focusToken:oe,matchCase:w.matchCase,mode:w.mode,onClose:kn,onMatchCase:()=>ie(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ie(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Hn(1),onPrevious:()=>Hn(-1),onQuery:e=>ie(t=>({...t,query:e})),onRegex:()=>ie(e=>({...e,regex:!e.regex})),query:w.query,regex:w.regex,total:En.length,onSelectMatches:En.length>0?()=>k(e=>e+1):void 0}),Si=q===`files`&&p(un),Ci=Si&&T(un),wi=Si&&K.listing?.archiveEncrypted===!0,Ti=async(t,n)=>{let r=u(t),i=await we(r,n,L.current,Yy(r));if(!i.ok&&tn(i.error)){let e=Qt(r);e&&en(r);let t=await wa(r,!!e);t&&($t(r,t),i=await we(r,n,L.current,t))}i.ok?(nr(n),sn(),Qn(K.id,n,!0)):Sa(`${e(`Could not extract the archive.`)}${i.error?`\n${i.error}`:``}`)},Ei=async(e,n)=>{let r=u(e),i=qy(r);if(!i)return;if(n===`choose`){let e=await _a(i);e&&await Ti(r,e);return}let a=n===`named`;if(n===`auto`){let e=t(r,un)?K.listing?.entries??[]:(await Ce(r,!1,!1,L.current,Yy(r))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${Jy(r)}`:i;await Ti(r,s)},Oi=async e=>{Si&&await Ei(un,e)},ki=async()=>{Si&&await Ei(un,`choose`)},ji=(0,P.jsxs)(nb,{children:[(0,P.jsx)(rb,{"data-shortcut":qt(H.goBack),disabled:!_i,onClick:e=>{K.index>0&&Gt(e)?tr(K.history[K.index-1]):xr()},title:e(`Back`),type:`button`,children:(0,P.jsx)(ui,{})}),(0,P.jsx)(rb,{"data-shortcut":qt(H.goForward),disabled:!vi,onClick:e=>{K.index<K.history.length-1&&Gt(e)?tr(K.history[K.index+1]):Sr()},title:e(`Forward`),type:`button`,children:(0,P.jsx)(di,{})}),(0,P.jsx)(rb,{"data-shortcut":qt(H.goUp),disabled:q!==`files`||!dn,onClick:e=>{dn&&(Gt(e)?tr(dn):cr(dn))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(si,{})}),(0,P.jsx)(Tp,{focusToken:Le,icon:wn,label:q===`files`?void 0:e(Cy[q]),onContextMenu:q===`files`?(e,t,n)=>ut({x:t,y:n,path:e}):void 0,onNavigate:cr,path:q===`files`?un:ln}),q===`files`&&(!Si||Ci)&&(0,P.jsx)(rb,{onClick:e=>hr(e,un,()=>void Qn(K.id,un,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(li,{})}),(0,P.jsx)(rb,{"data-shortcut":qt(H.find),onClick:()=>q===`files`?An():jn(),title:e(`Search`),type:`button`,children:(0,P.jsx)(oi,{})}),U.primary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ob,{}),(0,P.jsx)(rb,{onClick:e=>yr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{})})]}),Si&&(0,P.jsxs)(ib,{children:[(0,P.jsx)(ob,{}),wi&&(0,P.jsxs)(ab,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(ma,{size:12}),e(`Encrypted`)]}),(0,P.jsx)(rb,{onClick:()=>void ki(),onContextMenu:e=>{e.preventDefault(),ot({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,P.jsx)(Ai,{})}),(0,P.jsx)(po,{icon:(0,P.jsx)(na,{size:15}),onChange:e=>{let t=Number(e);pe(t),L.current=t,Si&&Qn(K.id,un,!0)},options:Ry.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(Ry.find(e=>e.value===String(F))?.label??`Auto`)}`,value:String(F)})]})]}),Mi=A.open?{...A,index:le}:null;return(0,P.jsx)(Pn,{value:xn,children:(0,P.jsxs)(Qy,{$rounded:C,children:[(0,P.jsx)(Yu,{settings:z}),(0,P.jsx)(Qv,{activeId:K.id,onClose:or,onNewTab:()=>tr(),onReorder:Qr,onTransferToTab:Vr,onSelect:a,onViewChange:Kr,onColumns:qr,onShowImages:Jr,showImages:Sn,tasks:yt,onClearTasks:Hr,activityOpen:Dt,onActivityOpenChange:Ot,trayCount:Ut.length+Mt.length,trayVisible:Rt,onToggleTray:Br,split:fn,canSplit:q===`files`,onToggleSplit:ur,details:Ue,canDetails:q===`files`||q===`recycle`||q===`gallery`,onToggleDetails:()=>We(e=>!e),currentFolder:q===`files`&&!Ac(un)?un:``,shortcuts:H,view:_n,tabs:n.filter(e=>!e.hidden).map(t=>{let r=By(t),i=Vy(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Vy(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?In(xn,i):void 0,archive:r===`files`&&p(i),split:!!a,title:r===`files`?Ln(xn,i,v(i)||e(`Files`)):e(Cy[r]),partner:a?{title:Ln(xn,o,v(o)||e(`Files`)),place:In(xn,o)}:void 0}})}),(0,P.jsxs)($y,{children:[(0,P.jsx)(s_,{activeKind:q,currentPath:q===`files`?ln:``,drives:g,historyVersion:Me,onNavigate:cr,onOpenView:ar,homePath:m.find(e=>e.kind===`home`)?.path??``,places:m,recent:me,recentLimit:R,version:Fe}),(0,P.jsxs)(eb,{children:[q!==`files`&&ji,(0,P.jsxs)(tb,{children:[q!==`files`&&A.open&&(0,P.jsx)(Md,{current:le,focusToken:M,matchCase:A.matchCase,mode:A.mode,onClose:Mn,onMatchCase:()=>j(e=>({...e,matchCase:!e.matchCase})),onMode:()=>j(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Nn(1),onPrevious:()=>Nn(-1),onQuery:e=>j(t=>({...t,query:e})),onRegex:()=>j(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:A.query,regex:A.regex,total:de,onSelectMatches:q===`gallery`||q===`recycle`?()=>k(e=>e+1):void 0}),q===`files`?fn&&J?(0,P.jsxs)(cb,{ref:pr,children:[(0,P.jsxs)(lb,{style:{flex:d},children:[(0,P.jsxs)(sb,{$active:$e===`primary`,onPointerDown:()=>et(`primary`),children:[(0,P.jsx)(rb,{"data-shortcut":qt(H.goBack),disabled:!_i,onClick:e=>{let t=K.index-1;t<0||(Gt(e)?tr(K.history[t]):er(K.id,K.history[t],t))},title:e(`Back`),type:`button`,children:(0,P.jsx)(ui,{})}),(0,P.jsx)(rb,{"data-shortcut":qt(H.goForward),disabled:!vi,onClick:e=>{let t=K.index+1;t>=K.history.length||(Gt(e)?tr(K.history[t]):er(K.id,K.history[t],t))},title:e(`Forward`),type:`button`,children:(0,P.jsx)(di,{})}),(0,P.jsx)(rb,{"data-shortcut":qt(H.goUp),disabled:!dn,onClick:e=>{dn&&(Gt(e)?tr(dn):Qn(K.id,dn))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(si,{})}),(0,P.jsx)(Tp,{focusToken:$e===`primary`?Le:void 0,onContextMenu:(e,t,n)=>ut({x:t,y:n,path:e}),onNavigate:(e,t)=>t?tr(e):void Qn(K.id,e),path:un}),(0,P.jsx)(rb,{onClick:e=>hr(e,un,()=>void Qn(K.id,un,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(li,{})}),(0,P.jsx)(rb,{"data-shortcut":qt(H.find),onClick:An,title:e(`Search`),type:`button`,children:(0,P.jsx)(oi,{})}),U.primary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ob,{}),(0,P.jsx)(rb,{onClick:e=>yr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{})})]})]}),bi(K,!0),$e===`primary`&&xi]}),(0,P.jsx)(ub,{onDoubleClick:()=>f(.5),onPointerDown:mr,title:e(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(lb,{$enter:!0,style:{flex:1-d},children:[(0,P.jsxs)(sb,{$active:$e===`secondary`,onPointerDown:()=>et(`secondary`),children:[(0,P.jsx)(rb,{"data-shortcut":qt(H.goBack),disabled:J.index<=0,onClick:e=>{let t=J.index-1;t<0||(Gt(e)?tr(J.history[t]):er(J.id,J.history[t],t))},title:e(`Back`),type:`button`,children:(0,P.jsx)(ui,{})}),(0,P.jsx)(rb,{"data-shortcut":qt(H.goForward),disabled:J.index>=J.history.length-1,onClick:e=>{let t=J.index+1;t>=J.history.length||(Gt(e)?tr(J.history[t]):er(J.id,J.history[t],t))},title:e(`Forward`),type:`button`,children:(0,P.jsx)(di,{})}),(0,P.jsx)(rb,{"data-shortcut":qt(H.goUp),disabled:!mn,onClick:e=>{mn&&(Gt(e)?tr(mn):Qn(J.id,mn))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(si,{})}),(0,P.jsx)(Tp,{focusToken:$e===`secondary`?Le:void 0,onContextMenu:(e,t,n)=>ut({x:t,y:n,path:e}),onNavigate:(e,t)=>t?tr(e):void Qn(J.id,e),path:pn}),(0,P.jsx)(rb,{onClick:e=>hr(e,pn,()=>void Qn(J.id,pn,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(li,{})}),(0,P.jsx)(rb,{"data-shortcut":qt(H.find),onClick:An,title:e(`Search`),type:`button`,children:(0,P.jsx)(oi,{})}),U.secondary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ob,{}),(0,P.jsx)(rb,{onClick:e=>yr(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{})})]})]}),bi(J,!1),$e===`secondary`&&xi]}),(0,P.jsx)(Xo,{info:fr,onWidth:dr,open:Ue,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,width:Ge})]}):(0,P.jsxs)(fb,{children:[(0,P.jsxs)(pb,{children:[ji,(0,P.jsxs)(db,{children:[bi(K,!0),xi]})]}),(0,P.jsx)(Xo,{info:Je,onWidth:dr,open:Ue,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,width:Ge})]}):q===`home`?(0,P.jsx)(hp,{drives:g,find:Mi,historyVersion:Me,onSearchMatches:fe,homePath:m.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:ri,onHistoryChanged:()=>Ne(e=>e+1),onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void Ei(e,t),settingsVersion:Fe,onOpen:cr,onLayoutChanged:Y,onPlacesChanged:h,onRecentCleared:ni,places:m,recent:me,recentLimit:R,visibilityVersion:ze}):q===`settings`?(0,P.jsx)(ih,{appInfo:y,find:Mi,focusSection:ne,onSearchMatches:fe,onSettingsChanged:Y,onOpenFolder:tr}):q===`gallery`?(0,P.jsx)(qg,{confirmDelete:z?.confirmDelete??!1,find:Mi,onSearchMatches:fe,openOnSingleClick:z?.openOnSingleClick??!1,onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void Ei(e,t),shortcuts:H,showCheckboxes:z?.showCheckboxes??!0,selectMatchesToken:se,showDetails:Ue,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,view:_n}):(0,P.jsx)(Hp,{find:Mi,onOpenLocation:cr,onShowDetails:()=>We(!0),platform:y?.platform,selectMatchesToken:se,showDetails:Ue,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1})]},q),(0,P.jsxs)(_b,{children:[(0,P.jsx)(`span`,{children:q===`files`&&K.listing?Xy(e,K.listing):``}),y?(0,P.jsxs)(mb,{children:[(0,P.jsxs)(`span`,{children:[`v`,y.version,` · `,y.platform]}),x?.available&&(0,P.jsxs)(hb,{onClick:()=>{re(`updates`),ar(`settings`)},title:e(`Version {version} is available.`,{version:x.latest}),type:`button`,children:[(0,P.jsx)(gb,{}),e(`Update available`)]})]}):(0,P.jsx)(`span`,{children:e(`browser preview`)})]})]})]}),(0,P.jsx)(ec,{clipboardItems:Mt,clipboardMove:W,currentDirectory:q===`files`?ln:``,items:Ut,onAdd:e=>void Dr(e),onClear:jr,onClose:()=>zt(!1),onCopyToClipboard:e=>void Fr(e),onPosition:zr,onRemove:Or,onTransfer:Vr,position:rn,visible:Rt}),tt&&(0,P.jsx)(lo,{creationOnly:!0,directory:tt.directory,menu:{x:tt.x,y:tt.y,paths:[],background:!0},onClose:()=>nt(null),onCreateFile:e=>void br(e),onCreateFolder:e=>void br(null,e),shortcuts:H}),st&&(0,P.jsx)(lo,{allowCompression:!0,directory:qy(st.path)??st.path,menu:{x:st.x,y:st.y,paths:[st.path]},onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:Ee,onExtractArchive:(e,t)=>void Ei(e,t),onArchiveCreated:e=>{e&&nr(qy(st.path)??st.path)},onClose:()=>ut(null),onCompressTo:(e,t)=>ft({paths:e,name:t}),onCopy:(e,t)=>void vt(e,t),onDelete:e=>void wt(e,!1).then(()=>nr(qy(st.path)??st.path)),onOpen:(e,t)=>t?tr(e):void Qn(K.id,e),onOpenFile:e=>void Se(e),onPaste:e=>void Ct(e).then(t=>{t.ok&&nr(e)}),onRefresh:()=>nr(st.path),shortcuts:H,target:{path:st.path,isDirectory:!0}}),dt&&(0,P.jsx)(Eo,{initialDirectory:qy(st?.path??un)??un,initialName:dt.name,onCancel:()=>ft(null),onCompress:async e=>{let t=await Bt(dt.paths,e);return!t.ok&&t.error&&Sa(t.error),t.ok}}),rt&&(0,P.jsx)(Za,{items:[{label:e(`Extract here`),onSelect:()=>void Oi(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void Oi(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void Oi(`auto`)}],onClose:()=>ot(null),x:rt.x,y:rt.y}),Xt&&(0,P.jsx)(ed,{delaySeconds:Xt.prompt.delaySeconds,hits:Xt.prompt.hits,onCancel:()=>{Xt.resolve(!1),Zt(null)},onConfirm:()=>{Xt.resolve(!0),Zt(null)},permanent:Xt.prompt.permanent},Xt.id),(0,P.jsx)(hd,{}),(0,P.jsx)(Sd,{}),o&&(0,P.jsx)(wy,{code:o.code,deviceName:o.deviceName,onAccept:()=>{Dc(o.requestId,!0),s(null)},onReject:()=>{Dc(o.requestId,!1),s(null)}}),(0,P.jsx)(vy,{}),(0,P.jsx)(_e,{})]})})}var Qy=_.div`
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
`,$y=_.div`
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
`,eb=_.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,tb=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Ka}
`,nb=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,rb=_.button`
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
`,ib=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,ab=_.span`
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
`,ob=_.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,sb=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,cb=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,lb=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Ya:``}
`,ub=_.div`
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
        ${Xa}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,db=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,fb=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,pb=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,mb=_.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,hb=_.button`
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
`,gb=_.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,_b=_.footer`
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
`;function vb({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:c,onSelect:u}){let d=I(),f=Gc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,E.useState)(e),[_,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(!0),[S,ee]=(0,E.useState)(null),[te,ne]=(0,E.useState)(()=>new Set),[re,C]=(0,E.useState)(a??[]),[w,T]=(0,E.useState)([]),[ae,D]=(0,E.useState)([]),[oe,O]=(0,E.useState)([]),[se,k]=(0,E.useState)([]),[A,j]=(0,E.useState)(``),[M,ce]=(0,E.useState)(m.length===0),[le,ue]=(0,E.useState)(`files`),[de,fe]=(0,E.useState)(0),[F,pe]=(0,E.useState)(vn),[L,me]=(0,E.useState)(0),[he,ge]=(0,E.useState)(0),[R,_e]=(0,E.useState)(0),[ve,ye]=(0,E.useState)(null),[z,xe]=(0,E.useState)(null),[Se,we]=(0,E.useState)(0),[V,Te]=(0,E.useState)(null),[Ee,De]=(0,E.useState)(be.imageStripHeight);(0,E.useEffect)(()=>{Ye().then(Te,()=>Te(null))},[]),(0,E.useEffect)(()=>{a?C(a):Ae().then(C,()=>C([]))},[a]),(0,E.useEffect)(()=>{je().then(T,()=>T([])),Be().then(D,()=>D([]))},[]),(0,E.useEffect)(()=>{let e=!0;return x(!0),ee(null),ne(new Set),j(p?``:v(h)),Ce(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),j(p?``:v(t.path)),x(!1))},t=>{e&&(ee(t instanceof Error?t.message:String(t)),x(!1))}),()=>{e=!1}},[h,de,p]),(0,E.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),pe(e=>({...e,open:!0})),me(e=>e+1);return}if(e.key===`Escape`){F.open?(pe(e=>({...e,open:!1,query:``})),ge(0)):c();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),ke();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Me();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),pe(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),me(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ke()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),ke()):e.button===4&&(e.preventDefault(),Me())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Oe=e=>{let t=e.trim();t.length!==0&&l(t)!==l(h)&&(O(e=>[...e,h]),k([]),ue(`files`),g(t))},ke=()=>{let e=oe.at(-1);e!==void 0&&(O(e=>e.slice(0,-1)),k(e=>[h,...e]),g(e))},Me=()=>{let e=se[0];e!==void 0&&(k(e=>e.slice(1)),O(e=>[...e,h]),g(e))},Ne=_?.path??h,H=_?.parent??(h?ie(h):null);(0,E.useEffect)(()=>{N.available&&Ne&&N.send({type:`fs.watch`,payload:{paths:[Ne],owner:`picker`}})},[Ne]),(0,E.useEffect)(()=>{if(N.available&&Ne)return N.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&l(t.data.path)===l(Ne)&&Ce(Ne,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));ne(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Ne]);let Pe=(_?.entries??[]).filter(e=>e.isDirectory||p&&(M||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Fe=_?{..._,entries:Pe}:null,Ie=F.open&&F.query.length>0,Le=(0,E.useMemo)(()=>Ie?Pe.filter(e=>Dn(e.name,F)).map(e=>e.fullPath):[],[Ie,Pe,F]);(0,E.useEffect)(()=>{ge(0)},[F.query,F.matchCase,F.regex,_?.path]);let Re=Le.length===0?-1:Math.min(he,Le.length-1),ze=(0,E.useMemo)(()=>({...F,currentPath:Re>=0?Le[Re]:null}),[F,Re,Le]),Ve=V?.defaultView??be,He=o??{mode:Ve.mode,iconSize:Ve.iconSize,gridSize:Ve.gridSize,sort:`name`,sortDescending:!1,columns:Ve.columns??[`type`,`size`,`modified`]},Ue=(s??Ve.showImages)&&He.mode===`list`,We=A.trim(),Ge=We.length>0?bb(We)?We:yb(Ne,We):null,Ke=()=>{if(b||S)return;let e=n?[...te]:[...te].slice(0,1);e.length>0?u(e):Ge!==null&&We!==v(Ne)?u([Ge]):!p&&Ne&&u([Ne])},qe=(0,E.useCallback)(e=>{ne(new Set(e)),j(e.length===1?v(e[0]):e.length===0&&!p?v(Ne):``)},[Ne,p]),Je=e=>{_?.entries.find(t=>t.fullPath===e)?.isDirectory?Oe(e):p&&u([e])},Xe=e=>j(e),Ze=async e=>{let t=ve;if(ye(null),!t||!Ne)return;let n=e===null?await Et(Ne):await At(Ne,e);n.ok&&n.path!==null&&(pe(e=>({...e,open:!1,query:``})),e!==null&&ce(!0),fe(e=>e+1),window.setTimeout(()=>{xe(n.path),we(e=>e+1)},120))},Qe=()=>{pe(e=>({...e,open:!0})),me(e=>e+1)},$e=e=>{ge(t=>Le.length===0?0:(t+e+Le.length)%Le.length)},et=e=>(0,P.jsxs)(Ab,{children:[(0,P.jsxs)(jb,{children:[(0,P.jsx)(Mb,{children:d(p?`File name:`:`Folder:`)}),(0,P.jsx)(Nb,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ke())},spellCheck:!1,value:A}),p&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Mb,{children:d(`Files of type:`)}),(0,P.jsx)(po,{onChange:e=>ce(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:M?`all`:`supported`})]})]}),(0,P.jsxs)(Pb,{children:[(0,P.jsx)(Fb,{onClick:c,type:`button`,children:d(`Cancel`)}),(0,P.jsxs)(Fb,{$primary:!0,disabled:b||S!==null||p&&te.size===0&&We.length===0,onClick:Ke,type:`button`,children:[(0,P.jsx)(bi,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),tt=(0,P.jsxs)(Sb,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,P.jsxs)(Cb,{children:[(0,P.jsxs)(wb,{children:[(0,P.jsx)(ri,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,P.jsx)(Tb,{onClick:c,title:d(`Cancel`),type:`button`,children:(0,P.jsx)(xi,{size:12})})]}),(0,P.jsxs)(Eb,{children:[(0,P.jsx)(s_,{activeKind:le===`overview`?`home`:le===`gallery`?`gallery`:`files`,currentPath:Ne,drives:w,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:re.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Oe(e),onOpenView:e=>{e===`home`?(ne(new Set),j(p?``:v(Ne)),ue(`overview`)):e===`gallery`&&p&&(ne(new Set),j(``),ue(`gallery`))},places:re,recent:ae,recentLimit:10}),(0,P.jsx)(Db,{children:le===`overview`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(hp,{drives:w,historyVersion:0,homePath:re.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Oe(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:qe,places:re,readOnly:!0,recent:ae,recentLimit:10,visibilityVersion:0}),et(j)]}):le===`gallery`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(qg,{onPick:e=>u([e]),onSelectionChange:qe,showCheckboxes:V?.showCheckboxes??!0,view:{...B,columns:[]}}),et(j)]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Ob,{children:[(0,P.jsx)(kb,{disabled:oe.length===0,onClick:ke,title:d(`Back`),type:`button`,children:(0,P.jsx)(ui,{})}),(0,P.jsx)(kb,{disabled:se.length===0,onClick:Me,title:d(`Forward`),type:`button`,children:(0,P.jsx)(di,{})}),(0,P.jsx)(kb,{disabled:!H,onClick:()=>H&&Oe(H),title:d(`Up one level`),type:`button`,children:(0,P.jsx)(si,{})}),(0,P.jsx)(Tp,{onNavigate:Oe,path:Ne}),(0,P.jsx)(kb,{onClick:e=>ye({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,P.jsx)(li,{})}),(0,P.jsx)(kb,{onClick:Qe,title:d(`Search`),type:`button`,children:(0,P.jsx)(oi,{})}),f.available&&(0,P.jsx)(kb,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{})})]}),F.open&&(0,P.jsx)(Md,{current:Re,focusToken:L,matchCase:F.matchCase,mode:F.mode,onClose:()=>{pe(e=>({...e,open:!1,query:``})),ge(0)},onMatchCase:()=>pe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>pe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>$e(1),onPrevious:()=>$e(-1),onQuery:e=>pe(t=>({...t,query:e})),onRegex:()=>pe(e=>({...e,regex:!e.regex})),query:F.query,regex:F.regex,total:Le.length,onSelectMatches:()=>_e(e=>e+1)}),(0,P.jsx)(al,{allowBackgroundMenu:!0,confirmDelete:V?.confirmDelete??!1,enableShortcuts:!0,error:S,find:ze,selectMatchesToken:R,imageStripHeight:Ee,loading:b,listing:Fe,onImageStripHeight:De,onOpen:Je,onOpenFile:Je,onRefresh:()=>fe(e=>e+1),onSelectionChange:qe,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:V?.openOnSingleClick??!1,refreshToken:de,pendingRename:z,pendingRenameToken:Se,showCheckboxes:V?.showCheckboxes??!0,showDetails:!1,showImages:Ue,singleSelect:!n,view:He}),et(Xe)]})})]}),ve&&(0,P.jsx)(lo,{creationOnly:!0,directory:Ne,menu:{x:ve.x,y:ve.y,paths:[],background:!0},onClose:()=>ye(null),onCreateFile:p?e=>void Ze(e):void 0,onCreateFolder:()=>void Ze(null),shortcuts:Ht})]});return i?tt:(0,Pa.createPortal)((0,P.jsx)(xb,{onPointerDown:e=>{e.target===e.currentTarget&&c()},children:tt}),document.body)}function yb(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function bb(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var xb=_.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Ya}
`,Sb=_.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Fa}
    ${({$inline:e})=>e?``:Wa}
`,Cb=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,wb=_.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Tb=_.button`
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
`,Eb=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Db=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Ob=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,kb=_.button`
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
`,Ab=_.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,jb=_.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Mb=_.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Nb=_.input`
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
`,Pb=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,Fb=_.button`
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
`;function Ib({mode:e,multiple:t,extensions:n,initial:r}){let i=I(),a=he(),[o,s]=(0,E.useState)(null),[c,l]=(0,E.useState)({}),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=(0,E.useRef)(0);(0,E.useEffect)(()=>{N.send({type:`app.ready`})},[]),(0,E.useEffect)(()=>(ye(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>ye(null)),[]),(0,E.useEffect)(()=>{Ye().then(e=>{s(e),ee(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??be,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,P.jsxs)(Lb,{children:[(0,P.jsxs)(Rb,{children:[(0,P.jsx)(zb,{children:(0,P.jsx)(wi,{size:17})}),(0,P.jsx)(Bb,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,P.jsx)(Fv,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,P.jsx)(Vb,{children:(0,P.jsx)(Hb,{onClick:()=>N.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,P.jsx)(xi,{size:12})})})]}),(0,P.jsx)(Ub,{children:(0,P.jsx)(vb,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>N.send({type:`pick.cancel`}),onSelect:e=>N.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,P.jsx)(ed,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,P.jsx)(hd,{}),(0,P.jsx)(_e,{})]})}var Lb=_.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,Rb=_.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,zb=_.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Bb=_.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vb=_.div`
    display: flex;
    flex-shrink: 0;
`,Hb=_.button`
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
`,Ub=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Wb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Wb);var Gb=document.getElementById(`root`),Kb=new URLSearchParams(window.location.search),qb=Kb.get(`picker`),Jb=Kb.get(`filter`)??``;Gb&&(0,ae.createRoot)(Gb).render((0,P.jsx)(E.StrictMode,{children:(0,P.jsx)(pe,{children:qb===`folder`||qb===`file`?(0,P.jsx)(Ib,{extensions:Jb?Jb.split(`;`).filter(Boolean):[],initial:Kb.get(`initial`)??``,mode:qb,multiple:Kb.get(`multiple`)===`1`}):(0,P.jsx)(Zy,{})})}));