import{A as e,C as t,E as n,M as r,N as i,O as a,S as o,T as s,_ as c,b as l,c as u,d,f,g as p,h as m,i as h,j as g,k as _,l as v,m as y,n as b,o as x,p as S,r as ee,s as te,t as ne,u as re,v as C,w,x as ie,y as T}from"./theme-BMX5jShW.js";var E=i(r(),1),ae=e(),D=15e3,oe=new Set,O=new Map,se=!1,k=0,A;function j(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function M(){se||(se=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>ce(e)))}function ce(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?O.get(n):void 0;n&&r&&(O.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),oe.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function le(){if(A!==void 0)return;let e=()=>{if(!j())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),A=setInterval(e,5e3)}var N={get available(){return j()},send(e){j()?(M(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&le()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=D){if(!j())return Promise.reject(Error(`Native bridge is not available.`));M();let r=`req-${++k}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{O.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);O.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return M(),oe.add(e),()=>oe.delete(e)}},P=s();function ue(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function de(e){return N.available?await N.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var F=(0,E.createContext)(ue({})),I=(0,E.createContext)(`en`);function L(){return(0,E.useContext)(F)}var R=({children:e})=>{let[t,n]=(0,E.useState)(()=>ue({})),[r,i]=(0,E.useState)(`en`);return(0,E.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await de();if(e)return;n(()=>ue(t.strings)),i(t.locale)}catch{}};t();let r=N.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,E.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,P.jsx)(F.Provider,{value:t,children:(0,P.jsx)(I.Provider,{value:r,children:e})})},z=e=>N.send({type:e});function fe(){let[e,t]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>z(`window.minimize`),toggleMaximize:()=>z(`window.toggleMaximize`),close:()=>z(`window.close`)}}function pe(){return{onMouseDown:()=>z(`window.drag`),onDoubleClick:()=>z(`window.toggleMaximize`)}}function B(){let[e,t]=(0,E.useState)(!1),{maximized:n}=fe();return(0,E.useEffect)(()=>{if(!N.available)return;let e=!1;return N.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,E.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var me=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function he(){return(0,P.jsx)(P.Fragment,{children:me.map(([e,t])=>(0,P.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),N.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var ge=null;function _e(e){ge=e}function V(e){return ge?ge(e):Promise.resolve(!1)}var ve={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},ye={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function be(e,t){return N.available?await N.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function xe(e){return N.available?(await N.request(`fs.open`,{path:e})).ok:!1}async function H(e,t=!0,n=!1,r=0,i){return await N.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function Se(e,t,n=0,r){return await N.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function Ce(e,t=0,n){return await N.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function we(e){N.available&&e.length!==0&&await N.request(`fs.archive.release`,{paths:e})}async function Te(e){return N.available?await N.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Ee(e,t){return N.available?(await N.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function De(e,t,n,r){return N.available?(await N.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Oe(e,t=!1){return N.available?await N.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function ke(){return(await N.request(`fs.places`)).places}async function Ae(){return(await N.request(`fs.drives`)).drives}async function je(e=!1){return(await N.request(`fs.recycle`,{includeOrphans:e})).entries}async function Me(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await V({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await N.request(e,{...t,confirm:r.token})}return r}async function U(e=!1){let t=await N.request(`fs.recycle.empty`,{includeOrphans:e});await Me(`fs.recycle.empty`,{includeOrphans:e},t)}async function Ne(e){return!N.available||e.length===0?{ok:!1,done:0}:await N.request(`fs.recycle.restoreMany`,{ids:e})}async function Pe(e){if(!N.available||e.length===0)return{ok:!1,done:0};let t=await N.request(`fs.recycle.deleteMany`,{ids:e}),n=await Me(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Fe(e){N.available&&e&&await N.request(`fs.recycle.properties`,{id:e})}async function Ie(){if(!N.available)return{entries:[],cancelled:!0,failed:!1};let e=await N.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Le(){return N.available?(await N.request(`fs.recycle.admin.purge`)).ok:!1}async function Re(e=0,t=150,n=!1){return N.available?await N.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function ze(){return N.available?(await N.request(`fs.recent`)).entries:[]}async function Be(){return N.available?(await N.request(`fs.frequent`)).entries:[]}async function Ve(e){N.available&&await N.request(`fs.frequent.record`,{path:e})}async function He(){await N.request(`fs.recent.clear`)}async function Ue(){await N.request(`fs.frequent.clear`)}async function We(){return await N.request(`fs.visibility`)}async function Ge(){return await N.request(`fs.hidden.toggle`)}async function Ke(){return N.available?await N.request(`fs.index.tasks`):{count:0,directories:[]}}var qe={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Je(){if(!N.available)return qe;let e=await N.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function Ye(){return N.available?(await N.request(`app.protection.defaults`)).paths??[]:[]}var Xe={registered:!1,pathMatches:!1,registeredPath:null},Ze={registered:!1,pathMatches:!1,registeredPath:null};async function Qe(){return N.available?await N.request(`app.defaultManager.status`):Ze}async function $e(e){return N.available?await N.request(`app.defaultManager.set`,{enabled:e}):Ze}async function et(){return N.available?await N.request(`app.archive.status`):Xe}async function tt(){return N.available?await N.request(`app.archive.register`):Xe}async function nt(){return N.available?await N.request(`app.archive.unregister`):Xe}async function rt(e){if(!N.available)return e;let t=await N.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function it(e,t){N.available&&await N.request(`app.tabs.set`,{tabs:e,active:t})}async function at(e,t,n){return N.available?(await N.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var ot={managed:0,private:0,workingSet:0,available:0};async function st(){return N.available?await N.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1,logDirectory:``}}async function ct(){return N.available?await N.request(`app.updateStatus`)??null:null}async function lt(){return N.available?await N.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function W(e){return!N.available||!e?!1:(await N.request(`app.openUrl`,{url:e})).ok}async function ut(){return N.available?await N.request(`app.memory`):ot}async function dt(){return N.available?await N.request(`app.memory.trim`):ot}async function ft(){return N.available?(await N.request(`app.scheme`)).registered:!1}async function pt(e){return N.available?(await N.request(`app.scheme.set`,{enabled:e})).registered:!1}var mt={supported:!1,mode:`none`,active:!1,error:null};async function ht(){return N.available?await N.request(`app.startup`):mt}async function gt(e){return N.available?await N.request(`app.startup.set`,{mode:e}):mt}async function _t(e,t=!1){return!N.available||e.length===0?!1:(await N.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function vt(){return N.available?(await N.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function yt(){return N.available?await N.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function bt(e,t,n){return!N.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await N.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function xt(e){return!N.available||e.length===0?[]:(await N.request(`fs.paths.info`,{paths:e})).entries}async function St(e){return N.available?(await N.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function Ct(e,t=!1){if(!N.available||e.length===0)return{ok:!1,error:null};let n=await N.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await V({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await N.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function wt(e,t){return N.available?await N.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Tt(e,t=!1){return N.available?await N.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Et(e){return N.available?(await N.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Dt(e,t){return N.available?await N.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Ot(e,t,n){return N.available?await N.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function kt(e,t){return N.available?await N.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function At(e){N.available&&e.length!==0&&await N.request(`fs.operation.properties`,{paths:e})}async function jt(e){N.available&&await N.request(`fs.operation.openWith`,{path:e})}async function Mt(e){N.available&&await N.request(`fs.operation.terminal`,{path:e})}async function Nt(e){return N.available?await N.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Pt(e,t){return N.available?(await N.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Ft(){return N.available?await N.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function It(){return N.available?await N.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Lt(e){N.available&&await N.request(`fs.operation.showInExplorer`,{path:e})}async function Rt(e){return!N.available||e.length===0?{verbs:[],safe:!0}:await N.request(`shell.verbs`,{paths:e})}async function zt(e,t,n,r){N.available&&e.length!==0&&await N.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Bt(e,t){return!N.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await N.request(`fs.operation.compress`,{...t,paths:e})}async function G(){return N.available?(await N.request(`app.tasks`)).tasks:[]}async function Vt(){N.available&&await N.request(`app.tasks.clear`)}var Ht={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Ut=Ht.openInNewTab;function Wt(e){Ut=e.trim()||Ht.openInNewTab}function Gt(e){let t=Ut.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Kt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function qt(e){return e.split(`+`).filter(Boolean).map(e=>Jt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Jt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Yt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Xt=new Map;function Zt(e){return l(p(e)?u(e):e)}function Qt(e){return Xt.get(Zt(e))}function $t(e,t){Xt.set(Zt(e),t)}function en(e){Xt.delete(Zt(e))}function tn(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var nn=new Map,rn=new Map,an=new Set,on=0;function sn(){nn.clear(),rn.clear(),on+=1,an.forEach(e=>e())}function cn(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...nn.keys()])e.toLowerCase().includes(t)&&(nn.delete(e),n=!0);n&&(on+=1,an.forEach(e=>e()))}function K(){let[e,t]=(0,E.useState)(on);return(0,E.useEffect)(()=>{let e=()=>t(on);return an.add(e),()=>{an.delete(e)}},[]),e}var q=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function ln(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return q.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function J(e,t,n=!1){let r=K(),i=e===null?``:ln(e,t,n),[a,o]=(0,E.useState)(()=>nn.get(i)??null);return(0,E.useEffect)(()=>{if(e===null){o(null);return}if(!N.available)return;if(nn.has(i)){o(nn.get(i)??null);return}let r=!0;return N.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?nn.set(i,e.dataUrl):nn.delete(i),r&&o(e.dataUrl)},()=>{nn.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function un(e){let[t,n]=(0,E.useState)(e);return(0,E.useEffect)(()=>{if(!e){n(null);return}if(!p(e)){n(e);return}let t=!0;return Ce(e,0,Qt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function dn(e){let t=K(),[n,r]=(0,E.useState)(()=>e?rn.get(e)??null:null);return(0,E.useEffect)(()=>{if(!e||!N.available){r(null);return}if(rn.has(e)){r(rn.get(e)??null);return}let t=!0;return N.request(`fs.iconFile`,{path:e}).then(n=>{rn.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{rn.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var fn=null,pn=null;function mn(){return fn===null?N.available?(pn??=N.request(`app.thumbnails`).then(e=>(fn=e.base??``,fn),()=>(fn=``,``)),pn):Promise.resolve(``):Promise.resolve(fn)}function hn(e,t=128,n=0){let[r,i]=(0,E.useState)(fn);return(0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return mn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function gn(e,t=0,n=``){let[r,i]=(0,E.useState)(fn);if((0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return mn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function _n(e,t=0){let[n,r]=(0,E.useState)(fn);return(0,E.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return mn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var vn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},yn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function bn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Cn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=En(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var xn=`\0`,Sn=``;function Cn(e){return e.query!==xn&&(xn=e.query,Sn=e.query.toLowerCase()),Sn}var wn=`\0`,Tn=null;function En(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===wn)return Tn;wn=t;try{Tn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Tn=null}return Tn}function Dn(e,t){return bn(e,t)!==null}var On=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],kn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function An(e){let t=Mn(e);for(let{kind:e}of On)if(kn[e].has(t))return e;return null}function jn(e){return An(e)!==null}function Mn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Nn=(0,E.createContext)({places:{},useIcons:!1}),Pn=Nn.Provider;function Fn(){return(0,E.useContext)(Nn)}function In(e,t){return e.places[l(t)]}function Ln(e,t,n){return In(e,t)?.name||n}function Rn(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function zn(e,t){try{localStorage.setItem(e,String(t))}catch{}}function Bn(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function Vn(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Hn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,P.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,P.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Un=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Wn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M14 3v4h4`})]}),Gn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,P.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,P.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Kn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,P.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),qn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 19V5`}),(0,P.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Jn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,P.jsx)(`path`,{d:`M20 4v7h-7`})]}),Yn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 5v14`}),(0,P.jsx)(`path`,{d:`M5 12h14`})]}),Xn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M19 12H5`}),(0,P.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Zn=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M5 12h14`}),(0,P.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Qn=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,P.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),$n=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,P.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),er=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,P.jsx)(`path`,{d:`M12 12v8`})]}),tr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,P.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),nr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),rr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,P.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),ir=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),ar=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 7h16`}),(0,P.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,P.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,P.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),or=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),sr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),cr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,P.jsxs)(`defs`,{children:[(0,P.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,P.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,P.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,P.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,P.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,P.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,P.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,P.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,P.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,P.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),lr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),ur=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,P.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,P.jsx)(`path`,{d:`m13 5-2 14`})]}),dr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,P.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,P.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),fr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,P.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),pr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,P.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,P.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),mr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),hr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),gr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),_r=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,P.jsx)(`path`,{d:`M8.5 14h7`})]}),vr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,P.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,P.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),yr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),br=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),xr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Sr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Cr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),wr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,P.jsx)(`path`,{d:`m14 6 4 4`})]}),Tr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,P.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Er=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,P.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Dr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 4v10`}),(0,P.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,P.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Or=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,P.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,P.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),kr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,P.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,P.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Ar=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,P.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),jr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Mr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,P.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Nr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,P.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,P.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Pr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Fr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,P.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,P.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,P.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Ir=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,P.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Lr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,P.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Rr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,P.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,P.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),zr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,P.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Br=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,P.jsx)(`path`,{d:`M3.5 12h17`}),(0,P.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Vr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Hr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,P.jsx)(`path`,{d:`M8.5 10.5h7`})]}),Ur=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,P.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,P.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
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
`;function lo({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:u,onDelete:d,onCopy:f,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:_=!1,onRefresh:y,onAddToTray:b,onAddFavorite:x,onRemoveFavorite:S,favoritePaths:ee,onExtractArchive:te,allowCompression:ne=!1,onCompressTo:re,onArchiveCreated:C}){let w=L(),ie=Na(),T=p(t),[ae,D]=(0,E.useState)({verbs:[],safe:!0,loading:!1}),[oe,O]=(0,E.useState)({recommended:[],other:[],loading:!1}),[se,k]=(0,E.useState)(null),A=(0,E.useRef)(0),j=(0,E.useRef)(0),M=e?.paths.length===1,ce=e?.background?t?[t]:[]:e?.paths??[],le=e?.background?t||null:M&&n?.isDirectory?n.path:null;if((0,E.useEffect)(()=>{if(!e){D({verbs:[],safe:!0,loading:!1}),O({recommended:[],other:[],loading:!1});return}let t=++A.current;D({verbs:[],safe:!0,loading:ce.length>0&&!T}),ce.length>0&&!T&&Rt(ce).then(e=>{A.current===t&&D({...e,loading:!1})},()=>{A.current===t&&D({verbs:[],safe:!0,loading:!1})});let r=++j.current;!T&&M&&n?(O({recommended:[],other:[],loading:!0}),Nt(n.path).then(e=>{j.current===r&&O({...e,loading:!1})},()=>{j.current===r&&O({recommended:[],other:[],loading:!1})})):O({recommended:[],other:[],loading:!1})},[e,M,n?.path,n?.isDirectory,ce.length,T]),(0,E.useEffect)(()=>{if(!e||T||!le){k(null);return}let t=!0;return Et(le).then(e=>{t&&k(e)},()=>{t&&k(null)}),()=>{t=!1}},[e,le,T]),!e)return null;let N=[],ue=[],de=new Set((ee??[]).map(l)),F=e.background?t?[t]:[]:e.paths,I=F.length>0&&F.every(e=>de.has(l(e))),R=()=>n?z(n.path,n.isDirectory):`Archive`,z=(e,t)=>{let n=v(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},fe=async(e,n=R())=>{let r=await Bt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?C?.(r.path,!0):Sa(r.error??w(`Could not create the archive.`))},pe=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},B=async()=>{if(!le||se===null)return;let e=await Dt(le,!se);e.ok?(k(e.enabled),y?.()):Sa(e.error??w(`Could not change the case sensitivity.`))},me=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Ot(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Ot(e,t,`${a}\\${fo(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?y?.():Sa(o.error??w(`Could not create the link.`))},he=async e=>{if(!n)return;let r=await _a(t);r&&await me(e,n.path,r,v(n.path),e.endsWith(`-copy`))},ge=async e=>{let n=ie?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=l(a)===l(t);await me(n,r.path,t,v(r.path),i&&!o)}},_e=async()=>{let t=(await xt(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Ma({paths:t})},V=()=>{let e=ie?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:w(`Cancel selected link`),icon:(0,P.jsx)(xi,{size:14}),onSelect:()=>Ma(null)},...t?[{label:w(`Hard link`),icon:(0,P.jsx)(ii,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`hard`)}]:[],{label:w(`Symbolic link`),icon:(0,P.jsx)(ii,{size:14}),separatorBefore:!t,onSelect:()=>void ge(`symbolic-file`)},...n?[{label:w(`Directory junction`),icon:(0,P.jsx)(ri,{size:14}),onSelect:()=>void ge(`junction`)},{label:w(`Smart copy`),icon:(0,P.jsx)(oa,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void ge(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void ge(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,P.jsx)(oa,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void ge(`symbolic-copy`)}]:[]]};if(e.background){if(h&&ue.push({label:w(`New folder`),icon:(0,P.jsx)(li,{size:16}),shortcut:qt(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:w(`Folder`),icon:(0,P.jsx)(ri,{size:14}),onSelect:()=>h(!1)}),T||e.push({label:w(`Case-sensitive folder`),icon:(0,P.jsx)(aa,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...Ta.map((e,t)=>({label:`${w(e.label)} (${e.extension})`,icon:(0,P.jsx)(ii,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),N.push({label:w(`New`),icon:(0,P.jsx)(li,{size:14}),children:e,onSelect:()=>void 0})}if(T||N.push({label:w(`Create link`),icon:(0,P.jsx)(la,{size:14}),disabled:!ie,children:V(),onSelect:()=>void 0}),_)return(0,P.jsx)(Za,{items:N,onClose:a,quick:ue,x:e.x,y:e.y});!T&&o&&N.push({label:w(`Open in new tab`),icon:(0,P.jsx)(li,{size:14}),onSelect:()=>o(t,!0)}),N.push({label:w(`Copy as path`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void pe([t])}),b&&N.push({label:w(`Add to file tray`),icon:(0,P.jsx)(ta,{size:14}),onSelect:()=>b([t])}),!T&&(I?S:x)&&N.push({label:w(I?`Remove from favorites`:`Add to favorites`),icon:I?(0,P.jsx)(ia,{size:14}):(0,P.jsx)(ra,{size:14}),onSelect:()=>I?S?.([t]):x?.([t])}),!T&&se!==null&&N.push({label:w(`Case-sensitive names`),icon:(0,P.jsx)(aa,{size:14}),checked:se,onSelect:()=>void B()}),!T&&ne&&(N.push({label:w(`Open in Terminal`),icon:(0,P.jsx)($i,{size:14}),onSelect:()=>void Mt(t)}),N.push({label:w(`Show in Explorer`),icon:(0,P.jsx)(ri,{size:14}),separatorBefore:!0,onSelect:()=>void Lt(t)})),m&&ue.push({label:w(`Paste`),icon:(0,P.jsx)(ca,{size:16}),disabled:!i,shortcut:qt(r.paste),onSelect:()=>m(t)}),T||ue.push({label:w(`Properties`),icon:(0,P.jsx)(pi,{size:16}),shortcut:qt(r.properties),onSelect:()=>void At([t])})}else{if(o&&N.push({label:w(`Open`),icon:(0,P.jsx)(di,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&N.push({label:w(`Open in new tab`),icon:(0,P.jsx)(li,{size:14}),onSelect:()=>o(n.path,!0)}),m&&N.push({label:w(`Paste into folder`),icon:(0,P.jsx)(ca,{size:14}),disabled:!i,onSelect:()=>m(n.path)}),T||N.push({label:w(`Open in Terminal`),icon:(0,P.jsx)($i,{size:14}),onSelect:()=>void Mt(n.path)})),!T&&M&&n&&!n.isDirectory&&c(n.path)&&te&&N.push({label:w(`Extract archive`),icon:(0,P.jsx)(Ai,{size:14}),separatorBefore:!0,children:[{label:w(`Extract here`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>te(n.path,`here`)},{label:w(`Extract to a folder named after the archive`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>te(n.path,`named`)},{label:w(`Auto extract to the current folder`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>te(n.path,`auto`)},{label:w(`Extract to…`),icon:(0,P.jsx)(ri,{size:14}),separatorBefore:!0,onSelect:()=>te(n.path,`choose`)}],onSelect:()=>void 0}),!T&&M&&n){let e=[];if(oe.loading)e.push({label:w(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of oe.recommended)e.push({label:t.name,group:w(`Suggested apps`),icon:t.icon?(0,P.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,P.jsx)(Mi,{size:14}),onSelect:()=>void Pt(n.path,t.path).then(e=>{e||jt(n.path)})});for(let t of oe.other)e.push({label:t.name,group:w(`Other apps`),icon:t.icon?(0,P.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,P.jsx)(Mi,{size:14}),onSelect:()=>void Pt(n.path,t.path).then(e=>{e||jt(n.path)})})}e.push({label:w(`Choose another app…`),icon:(0,P.jsx)(Mi,{size:14}),separatorBefore:!0,onSelect:()=>void jt(n.path)}),N.push({label:w(`Open with`),icon:(0,P.jsx)(Mi,{size:14}),children:e,onSelect:()=>void jt(n.path)})}if(T||N.push({label:w(`Compress`),icon:(0,P.jsx)(Ai,{size:14}),separatorBefore:!0,children:[{label:w(`Compress to ZIP`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>void fe(e.paths)},{label:w(`Compress to…`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>re?.(e.paths,R())}],onSelect:()=>void 0}),!T&&(e?.paths.length??0)>0){let e=[{label:w(`Select link source`),icon:(0,P.jsx)(la,{size:14}),onSelect:()=>void _e()},...ie?[{label:w(`Cancel selected link`),icon:(0,P.jsx)(xi,{size:14}),onSelect:()=>Ma(null)}]:[],...M&&n?n.isDirectory?[{label:w(`Symbolic link`),icon:(0,P.jsx)(ri,{size:14}),separatorBefore:!0,onSelect:()=>void he(`symbolic-folder`)},{label:w(`Directory junction`),icon:(0,P.jsx)(ri,{size:14}),onSelect:()=>void he(`junction`)},{label:w(`Smart copy`),icon:(0,P.jsx)(oa,{size:14}),separatorBefore:!0,onSelect:()=>void he(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void he(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void he(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,P.jsx)(oa,{size:14}),separatorBefore:!0,onSelect:()=>void he(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void he(`symbolic-copy`)}]:[{label:w(`Symbolic link`),icon:(0,P.jsx)(ii,{size:14}),separatorBefore:!0,onSelect:()=>void he(`symbolic-file`)},{label:w(`Hard link`),icon:(0,P.jsx)(ii,{size:14}),onSelect:()=>void he(`hard`)}]:[]];N.push({label:w(`Create link`),icon:(0,P.jsx)(la,{size:14}),children:e,onSelect:()=>void 0})}!T&&n?.isDirectory&&se!==null&&N.push({label:w(`Case-sensitive names`),icon:(0,P.jsx)(aa,{size:14}),checked:se,onSelect:()=>void B()}),N.push({label:w(`Copy as path`),icon:(0,P.jsx)(oa,{size:14}),onSelect:()=>void pe(e.paths)}),b&&N.push({label:w(`Add to file tray`),icon:(0,P.jsx)(ta,{size:14}),onSelect:()=>b(e.paths)}),!T&&(I?S:x)&&N.push({label:w(I?`Remove from favorites`:`Add to favorites`),icon:I?(0,P.jsx)(ia,{size:14}):(0,P.jsx)(ra,{size:14}),onSelect:()=>I?S?.(F):x?.(F)}),T||N.push({label:w(`Show in Explorer`),icon:(0,P.jsx)(ri,{size:14}),separatorBefore:!0,onSelect:()=>void Lt(F[0])}),f&&ue.push({label:w(`Cut`),icon:(0,P.jsx)(sa,{size:16}),shortcut:qt(r.cut),onSelect:()=>f(e.paths,!0)},{label:w(`Copy`),icon:(0,P.jsx)(oa,{size:16}),shortcut:qt(r.copy),onSelect:()=>f(e.paths,!1)}),M&&n&&u&&ue.push({label:w(`Rename`),icon:(0,P.jsx)(Bi,{size:16}),shortcut:qt(r.rename),onSelect:()=>u(n.path)}),d&&ue.push({label:w(`Delete`),icon:(0,P.jsx)(yi,{size:16}),danger:!0,shortcut:qt(r.delete),onSelect:()=>d(e.paths)}),T||ue.push({label:w(`Properties`),icon:(0,P.jsx)(pi,{size:16}),shortcut:qt(r.properties),onSelect:()=>void At(e.paths)})}if(ae.loading)N.push({label:w(`More actions`),icon:(0,P.jsx)(Mi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(ae.verbs.length>0){let e={items:[],children:new Map};for(let t of ae.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,P.jsx)(uo,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void zt(ce,ae.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];N.push({label:w(ae.safe?`More actions`:`More actions (extensions)`),icon:(0,P.jsx)(Mi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,P.jsx)(Za,{items:N,onClose:a,quick:ue,x:e.x,y:e.y})}function uo({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,P.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,P.jsx)(di,{size:14});case`document`:return(0,P.jsx)(Ri,{size:14});case`cut`:return(0,P.jsx)(sa,{size:14});case`copy`:return(0,P.jsx)(oa,{size:14});case`paste`:return(0,P.jsx)(ca,{size:14});case`trash`:return(0,P.jsx)(yi,{size:14});case`pencil`:return(0,P.jsx)(Bi,{size:14});case`gear`:return(0,P.jsx)(pi,{size:14});case`star`:return(0,P.jsx)(qi,{size:14});case`pin`:return(0,P.jsx)(mi,{size:14});case`executable`:return(0,P.jsx)(Mi,{size:14});case`share`:return(0,P.jsx)(la,{size:14});case`arrow`:return(0,P.jsx)(di,{size:14});default:return(0,P.jsx)(wi,{size:14})}}function fo(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function po({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=L(),[l,u]=(0,E.useState)(null),d=(0,E.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,E.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(mo,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,P.jsx)(ho,{children:f?.label??``}):(0,P.jsx)(go,{children:a}),a===void 0&&(0,P.jsx)(_o,{children:(0,P.jsx)(fi,{size:11})})]}),l&&(0,Pa.createPortal)((0,P.jsx)(vo,{"aria-label":c(`Options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,P.jsxs)(yo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,P.jsx)(bo,{children:t.label}),t.value===e&&(0,P.jsx)(bi,{size:11})]},t.value))}),document.body)]})}var mo=_.button`
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
`,xo=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],So=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],Co=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],wo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],To=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function Eo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=L(),a=(0,E.useRef)(null),[o,s]=(0,E.useState)(e),[c,l]=(0,E.useState)(t),[u,d]=(0,E.useState)(`zip`),[f,p]=(0,E.useState)(`5`),[m,h]=(0,E.useState)(`default`),[g,_]=(0,E.useState)(`none`),[v,y]=(0,E.useState)(``),[b,x]=(0,E.useState)(`0`),[S,ee]=(0,E.useState)(!1);(0,E.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let te=xo.find(e=>e.value===u)??xo[0],ne=u===`zip`||u===`zipx`,re=g!==`none`,C=ne||u===`7z`,w=u===`zip`||u===`7z`,ie=async()=>{if(S||!c.trim()||!o||re&&v.length===0)return;ee(!0);let e=await r({directory:o,name:c.trim(),format:u,level:te.level?Number(f):0,method:ne?m:null,encryption:C?g:`none`,password:re?v:void 0,splitSize:w?Number(b):0});ee(!1),e&&n()};return(0,Pa.createPortal)((0,P.jsx)(Do,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,P.jsxs)(Oo,{"aria-modal":`true`,role:`dialog`,children:[(0,P.jsx)(ko,{children:i(`Compress to…`)}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Archive name`)}),(0,P.jsx)(Mo,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ie()}}),(0,P.jsx)(No,{children:te.extension})]}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Format`)}),(0,P.jsx)(po,{onChange:e=>d(e),options:xo.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Method`)}),(0,P.jsx)(po,{disabled:!ne,onChange:h,options:So.map(e=>({...e,label:i(e.label)})),value:ne?m:`default`,width:236,zIndex:3700})]}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Encryption`)}),(0,P.jsx)(po,{disabled:!C,onChange:e=>{_(e),e===`none`&&y(``)},options:Co.map(e=>({...e,label:i(e.label)})),value:C?g:`none`,width:236,zIndex:3700})]}),re&&(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Password`)}),(0,P.jsx)(Mo,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Split volumes`)}),(0,P.jsx)(po,{disabled:!w,onChange:x,options:wo.map(e=>({...e,label:i(e.label)})),value:w?b:`0`,width:236,zIndex:3700})]}),(0,P.jsxs)(Ao,{children:[(0,P.jsx)(jo,{children:i(`Compression level`)}),(0,P.jsx)(po,{disabled:!te.level,onChange:p,options:To.map(e=>({...e,label:i(e.label)})),value:te.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,P.jsxs)(Ao,{$stack:!0,children:[(0,P.jsx)(jo,{children:i(`Destination`)}),(0,P.jsxs)(Po,{children:[(0,P.jsx)(Fo,{title:o,children:o}),(0,P.jsx)(Lo,{disabled:S,onClick:()=>void _a(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,P.jsxs)(Io,{children:[(0,P.jsx)(Lo,{disabled:S,onClick:n,type:`button`,children:i(`Cancel`)}),(0,P.jsx)(Ro,{disabled:S||!c.trim()||re&&v.length===0,onClick:()=>void ie(),type:`button`,children:i(S?`Compressing…`:`Compress`)})]})]})}),document.body)}var Do=_.div`
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
`;function zo({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=L(),c=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Pa.createPortal)((0,P.jsx)(Bo,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,P.jsxs)(Vo,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(Ho,{children:t}),(0,P.jsx)(Uo,{children:n}),(0,P.jsxs)(Wo,{children:[(0,P.jsx)(Go,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,P.jsx)(Go,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Bo=_.div`
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
`,Ko=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),qo=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Jo=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Yo=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Xo({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=L(),[l,u]=(0,E.useState)(!1),[d,f]=(0,E.useState)(!1),[p,m]=(0,E.useState)(!1),[h,g]=(0,E.useState)(0),[_,v]=(0,E.useState)(0),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(!1),[ee,te]=(0,E.useState)(!1),ne=(0,E.useRef)(null),re=(0,E.useRef)(null),C=(0,E.useRef)(null),w=(0,E.useRef)(null),[ie,T]=(0,E.useState)(()=>{let e=Rn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),ae=e?.path??null,D=un(ae),oe=e?Zo(e.name):``,O=!!e&&!e.isDirectory&&Ko.has(oe),se=!!e&&!e.isDirectory&&qo.has(oe),k=!!e&&!e.isDirectory&&Jo.has(oe),A=!!e&&!e.isDirectory&&Yo.has(oe),j=!!e&&!e.isDirectory&&oe===`pdf`,M=hn(O?D:null,512,e?.modified??0),ce=gn(k?D:null,e?.modified??0,oe),le=gn(O||se?D:null,e?.modified??0,oe),N=_n(j?D:null,e?.modified??0),ue=J(!O&&!se&&!k&&!A&&!j?D:null,e?.isDirectory??!1);if((0,E.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),te(!1)},[ae]),(0,E.useEffect)(()=>{if(!D||!A){b(null),S(!1);return}let e=!0;return S(!0),b(null),Te(D).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`Could not read this file.`)}),S(!1))}),()=>{e=!1}},[D,A]),!e&&!s)return null;let de=e=>{C.current={x:e.clientX,width:re.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},F=e=>{let t=C.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},I=e=>{C.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},R=e=>{w.current={y:e.clientY,height:ie},e.currentTarget.setPointerCapture(e.pointerId)},z=e=>{let t=w.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));T(n),zn(`yafm.preview.media.height`,n)},fe=e=>{w.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,P.jsxs)($o,{$open:r,children:[r&&(0,P.jsx)(es,{onPointerDown:de,onPointerMove:F,onPointerUp:I,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,P.jsx)(ts,{ref:re,style:{width:r?t:0},children:(0,P.jsxs)(ns,{children:[(0,P.jsx)(ri,{size:56}),(0,P.jsx)(`span`,{children:s})]})})]});let pe=()=>{let e=ne.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,P.jsxs)($o,{$open:r,children:[r&&(0,P.jsx)(es,{onPointerDown:de,onPointerMove:F,onPointerUp:I,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(ts,{ref:re,style:{width:r?t:0},children:[(0,P.jsx)(rs,{style:{height:ie},children:O&&le&&!l?(0,P.jsxs)(as,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,P.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:pe,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:M??void 0,preload:`metadata`,ref:ne,src:le}),(0,P.jsx)(os,{$visible:!d,onClick:pe,title:c(`Play`),type:`button`,children:(0,P.jsx)(ua,{size:28})}),(0,P.jsxs)(ss,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,P.jsxs)(cs,{children:[(0,P.jsx)(`span`,{children:Qo(_)}),(0,P.jsx)(`span`,{children:Qo(h)})]}),(0,P.jsx)(ls,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=ne.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):se&&le?(0,P.jsx)(`audio`,{controls:!0,src:le}):k&&ce?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:ce}):j&&N&&!ee?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>te(!0),src:N}):j?(0,P.jsx)(ii,{size:64}):A?(0,P.jsx)(us,{children:x||!y?(0,P.jsx)(fs,{children:c(`Loading…`)}):y.error?(0,P.jsx)(fs,{children:y.error}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(ds,{children:y.text}),y.truncated&&(0,P.jsx)(fs,{children:c(`Showing the first 256 KB.`)})]})}):O&&M?(0,P.jsx)(`img`,{alt:``,src:M}):ue?(0,P.jsx)(`img`,{alt:``,src:ue}):e.isDirectory?(0,P.jsx)(ri,{size:64}):(0,P.jsx)(ii,{size:64})}),(0,P.jsx)(is,{onDoubleClick:()=>{T(210),zn(`yafm.preview.media.height`,210)},onPointerDown:R,onPointerMove:z,onPointerUp:fe,title:c(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(ps,{children:[(0,P.jsx)(ms,{title:e.path,children:e.name}),o&&(0,P.jsx)(hs,{children:o}),(0,P.jsx)(gs,{children:e.fields.map(e=>(0,P.jsxs)(_s,{children:[(0,P.jsx)(vs,{children:e.label}),(0,P.jsx)(ys,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Zo(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Qo(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var $o=_.div`
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
`,bs=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],xs=[...bs],Ss={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},Cs={folder:e=>(0,P.jsx)(ri,{size:e}),home:e=>(0,P.jsx)(ni,{size:e}),desktop:e=>(0,P.jsx)(Vi,{size:e}),documents:e=>(0,P.jsx)(Hi,{size:e}),downloads:e=>(0,P.jsx)(Ui,{size:e}),pictures:e=>(0,P.jsx)(Wi,{size:e}),music:e=>(0,P.jsx)(Gi,{size:e}),videos:e=>(0,P.jsx)(Ki,{size:e}),drive:e=>(0,P.jsx)(ai,{size:e}),image:e=>(0,P.jsx)(Di,{size:e}),video:e=>(0,P.jsx)(Oi,{size:e}),audio:e=>(0,P.jsx)(ki,{size:e}),text:e=>(0,P.jsx)(Ti,{size:e}),code:e=>(0,P.jsx)(Ei,{size:e}),clock:e=>(0,P.jsx)(_i,{size:e}),star:e=>(0,P.jsx)(qi,{size:e}),file:e=>(0,P.jsx)(ii,{size:e}),archive:e=>(0,P.jsx)(Ai,{size:e}),pdf:e=>(0,P.jsx)(ji,{size:e}),executable:e=>(0,P.jsx)(Mi,{size:e}),font:e=>(0,P.jsx)(Ni,{size:e}),database:e=>(0,P.jsx)(Pi,{size:e}),config:e=>(0,P.jsx)(Fi,{size:e}),spreadsheet:e=>(0,P.jsx)(Ii,{size:e}),presentation:e=>(0,P.jsx)(Li,{size:e}),document:e=>(0,P.jsx)(Ri,{size:e}),app:e=>(0,P.jsx)(wi,{size:e}),gear:e=>(0,P.jsx)(pi,{size:e}),pin:e=>(0,P.jsx)(mi,{size:e}),trash:e=>(0,P.jsx)(yi,{size:e}),overview:e=>(0,P.jsx)(zi,{size:e}),book:e=>(0,P.jsx)(Ji,{size:e}),briefcase:e=>(0,P.jsx)(Yi,{size:e}),cloud:e=>(0,P.jsx)(Xi,{size:e}),gamepad:e=>(0,P.jsx)(Zi,{size:e}),camera:e=>(0,P.jsx)(Qi,{size:e}),terminal:e=>(0,P.jsx)($i,{size:e}),server:e=>(0,P.jsx)(ea,{size:e}),package:e=>(0,P.jsx)(ta,{size:e}),globe:e=>(0,P.jsx)(na,{size:e}),heart:e=>(0,P.jsx)(ra,{size:e}),share:e=>(0,P.jsx)(ea,{size:e}),favorites:e=>(0,P.jsx)(ra,{size:e})};function ws(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ts(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??bs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||xs.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=ws(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${Ss[n]??n}${Es(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Es(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Ds({panel:e,size:t=16}){let n=dn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,P.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Cs[e.icon]:void 0;if(r)return(0,P.jsx)(P.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,P.jsx)(ri,{size:t});case`recent`:return(0,P.jsx)(_i,{size:t});case`frequent`:return(0,P.jsx)(qi,{size:t});case`drives`:return(0,P.jsx)(ai,{size:t});case`home`:return(0,P.jsx)(ni,{size:t});case`share`:return(0,P.jsx)(ea,{size:t});case`favorites`:return(0,P.jsx)(ra,{size:t});default:return(0,P.jsx)(ri,{size:t})}}function Os({place:e,size:t=18}){let n=dn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,P.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Cs[e.icon]?(0,P.jsx)(P.Fragment,{children:Cs[e.icon](t)}):(0,P.jsx)(ri,{size:t})}var ks=`#64748b`;function As(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function js({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=L(),[c,l]=(0,E.useState)(``),[u,d]=(0,E.useState)(`#2dd4bf`),f=(0,E.useRef)(null);(0,E.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Pa.createPortal)((0,P.jsxs)(Ms,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,P.jsxs)(Ns,{children:[(0,P.jsx)(`span`,{children:s(`Tags`)}),(0,P.jsx)(Ps,{onClick:o,title:s(`Close`),type:`button`,children:(0,P.jsx)(xi,{size:11})})]}),(0,P.jsxs)(Fs,{children:[p.length===0&&(0,P.jsx)(zs,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,P.jsxs)(Is,{children:[(0,P.jsx)(Ls,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,P.jsxs)(Rs,{$color:t,$ink:As(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,P.jsx)(bi,{size:11}),(0,P.jsx)(`span`,{children:e})]})]},e)})]}),(0,P.jsxs)(Bs,{children:[(0,P.jsx)(Ls,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,P.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,P.jsx)(Vs,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var Ms=_.div`
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
`,Hs={file:ii,folder:ri,text:Ti,code:Ei,image:Di,video:Oi,audio:ki,archive:Ai,pdf:ji,executable:Mi,font:Ni,database:Pi,config:Fi,spreadsheet:Ii,presentation:Li,document:Ri},Us={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Ws(e){let t=e.lastIndexOf(`.`);return t>0?Us[e.slice(t).toLowerCase()]??`file`:`file`}function Gs({name:e,size:t}){let n=Hs[e??`file`]??ii;return(0,P.jsx)(n,{size:t})}function Ks({path:e,name:t,isDirectory:n,size:r=18}){let i=J(e,n);return i?(0,P.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,P.jsx)(ri,{size:r}):(0,P.jsx)(Gs,{name:Ws(t),size:r})}var qs=`application/x-yafm-paths`,Js=[qs,`text/uri-list`];function Ys(e){return e?.types.some(e=>Js.includes(e.toLowerCase()))??!1}function Xs(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(qs);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Qs).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Zs=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Qs(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Zs?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function $s(e,t,n=!0){e.dataTransfer.setData(qs,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function ec({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=L(),[m,h]=(0,E.useState)(()=>new Set),[g,_]=(0,E.useState)(!1),v=(0,E.useRef)(null),y=(0,E.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),b=(0,E.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),x=(0,E.useRef)(null);if((0,E.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=x.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Ys(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Xs(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let S=new Set([...e,...t].map(e=>e.path)),ee=S.size>0&&[...S].every(e=>m.has(e)),te=S.size,ne=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},re=()=>{h(ee?new Set:S)},C=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},w=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},T=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},ae=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},D=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},oe=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of b)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},O=(e,t)=>{let n=m.has(e.path);return(0,P.jsxs)(fc,{$checked:n,draggable:!0,onClick:()=>ne(e.path),onDragStart:r=>{$s(r,n&&m.size>0?[...new Set([...y,...b].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,P.jsx)(pc,{$checked:n,onClick:t=>{t.stopPropagation(),ne(e.path)},type:`button`,children:n&&(0,P.jsx)(bi,{size:8})}),(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,P.jsxs)(mc,{children:[(0,P.jsx)(hc,{children:e.name}),(0,P.jsx)(gc,{children:ie(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},se=e=>{Ys(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,P.jsxs)(tc,{$dragging:g,"data-tray":`true`,ref:x,style:{left:i.x,top:i.y},onDragEnter:se,onDragOver:se,onDrop:e=>{let{paths:t}=Xs(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,P.jsxs)(nc,{onPointerDown:C,onPointerMove:w,onPointerUp:T,children:[(0,P.jsxs)(rc,{children:[(0,P.jsx)(ta,{size:13}),p(`Tray`),(0,P.jsx)(ic,{children:te})]}),(0,P.jsxs)(ac,{onPointerDown:e=>e.stopPropagation(),children:[(0,P.jsx)(oc,{onClick:re,title:p(ee?`Select none`:`Select all`),type:`button`,children:p(ee?`None`:`All`)}),(0,P.jsx)(oc,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,P.jsx)(sc,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]})]}),(0,P.jsxs)(cc,{children:[(0,P.jsxs)(uc,{children:[p(`In this app`),(0,P.jsx)(ic,{children:e.length})]}),e.length===0&&(0,P.jsx)(lc,{children:p(`Drag files or folders here`)}),e.map(e=>O(e,!0)),t.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(uc,{$clipboard:!0,children:[p(`Clipboard`),(0,P.jsx)(ic,{children:t.length}),n&&(0,P.jsx)(dc,{children:p(`Cut`)})]}),t.map(e=>O(e,n))]})]}),(0,P.jsxs)(_c,{children:[(0,P.jsx)(vc,{$plain:!0,disabled:y.length===0,onClick:D,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,P.jsx)(vc,{disabled:m.size===0||!a,onClick:oe,type:`button`,children:p(`Move here`)}),(0,P.jsx)(vc,{$danger:!0,disabled:y.length===0,onClick:ae,type:`button`,children:p(`Remove`)})]})]})}var tc=_.div`
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
`,yc={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function bc(){return N.available?await N.request(`share.list`):yc}async function xc(e,t){return N.available?await N.request(`share.add`,{path:e,mode:t}):yc}async function Sc(e){return N.available?await N.request(`share.remove`,{id:e}):yc}async function Cc(e,t){return N.available?await N.request(`share.mode`,{id:e,mode:t}):yc}async function wc(){return N.available?(await N.request(`share.peers`)).peers??[]:[]}async function Tc(){return N.available?(await N.request(`share.peers.refresh`)).peers??[]:[]}async function Ec(e,t){N.available&&await N.request(`share.pair.start`,{host:e,port:t})}async function Dc(e,t){N.available&&await N.request(`share.pair.respond`,{requestId:e,accept:t})}async function Oc(e,t){N.available&&await N.request(`share.port`,{mode:t,port:e})}var kc=`yafm://share/`,Ac=`share://`;function jc(e){let t=e.toLowerCase();return t.startsWith(kc)||t.startsWith(Ac)}function Mc(e){if(!jc(e))return null;let[t,n,...r]=e.slice(e.toLowerCase().startsWith(kc)?13:8).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Nc(e,t,n=``){let r=`${kc}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Pc(e){let t=Mc(e);if(!t||!N.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await N.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Nc(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Nc(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Fc(e){let t=Mc(e);if(!t||!N.available)throw Error(`This shared file is only available in the desktop app.`);let n=await N.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Ic(e){await xe(await Fc(e))}var Lc=new Map,Rc=new Set,zc=0;function Bc(){zc+=1;for(let e of Rc)e()}function Vc(e,t){t?Lc.set(e,t):Lc.delete(e),Bc()}function Hc(e){return Lc.has(e)}function Uc(e,t,n){Lc.get(e)?.(t,n)}function Wc(e){return Rc.add(e),()=>Rc.delete(e)}function Gc(){return zc}function Kc(e){return(0,E.useSyncExternalStore)(Wc,Gc,Gc),{available:Hc(e),open:(t,n)=>Uc(e,t,n)}}function qc(e){return[...Lc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function Jc(e){return(0,E.useSyncExternalStore)(Wc,Gc,Gc),{available:qc(e).length>0,open:(t,n)=>{let r=qc(e).at(-1);r&&Uc(r,t,n)}}}var Yc=60,Xc=300,Zc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Qc=new Set,$c=`yafm.columnWidths`,el=`yafm.reset-column-widths`,tl=64,nl=720,rl=160,il=190,al=120;function ol({listing:e,loading:t,error:n,find:r=yn,view:i,showImages:a,imageStripHeight:s=il,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:d,onOpenFile:p,showCheckboxes:m=!0,openOnSingleClick:h=!1,shortcuts:g=Ht,enableShortcuts:_=!0,refreshToken:b=0,onRefresh:x,onRename:S,onClipboardChanged:ee,cutPaths:te=Qc,onTransfer:ne,onAddToTray:re,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:ie,onExtractArchive:T,onPaste:ae,confirmDelete:D=!1,previewVideoAudio:oe=!1,previewVideoAutoplay:O=!1,showDetails:se=!0,onPreviewInfo:k,onActivate:A,groupOf:j,onGridScroll:M,gridFooter:ce,allowBackgroundMenu:le=!0,readOnly:N=!1,onSelectionChange:ue,onSelectionCountChange:de,selectionMenuRequest:F,selectionMenuId:I,singleSelect:R=!1,pendingRename:z=null,pendingRenameToken:fe=0,selectMatchesToken:pe=0}){let B=L(),me=Fn(),he=(0,E.useRef)(null),ge=(0,E.useRef)(null),_e=(0,E.useRef)(null),[V,ve]=(0,E.useState)(Xc),[ye,be]=(0,E.useState)({top:0,height:640}),xe=(0,E.useRef)(null),H=(0,E.useRef)(null),[Se,Ce]=(0,E.useState)(null),[we,Te]=(0,E.useState)(s),[Ee,De]=(0,E.useState)(()=>new Set),[Oe,ke]=(0,E.useState)(()=>Bn($c)??{}),Ae=(0,E.useRef)(Ee),je=(0,E.useRef)([]);Ae.current=Ee,(0,E.useEffect)(()=>ue?.([...Ee]),[Ee,ue]),(0,E.useEffect)(()=>de?.(Ee.size),[Ee,de]),(0,E.useEffect)(()=>{let e=F;if(!e||e.token===Ne.current)return;Ne.current=e.token;let t=[...Ae.current];t.length!==0&&(U({x:e.x,y:e.y,paths:t,background:!1}),vt().then(qe,()=>qe(!1)))},[F]);let[Me,U]=(0,E.useState)(null),Ne=(0,E.useRef)(0),[Pe,Fe]=(0,E.useState)(null),[Ie,Le]=(0,E.useState)(null),[Re,ze]=(0,E.useState)(null),Be=(0,E.useRef)(Re);Be.current=Re;let Ve=(0,E.useRef)(0),He=(0,E.useRef)(A);He.current=A;let[Ue,We]=(0,E.useState)(()=>{let e=Rn(`yafm.preview.width`,320);return e>=220?e:320}),Ge=(0,E.useCallback)(e=>{We(e),zn(`yafm.preview.width`,e)},[]),[Ke,qe]=(0,E.useState)(!1),Je=(0,E.useCallback)((e,t)=>{let n=[...Ae.current];n.length!==0&&(U({x:e,y:t,paths:n,background:!1}),vt().then(qe,()=>qe(!1)))},[]);(0,E.useEffect)(()=>{if(I)return Vc(I,Ee.size>0?Je:null),()=>Vc(I,null)},[I,Ee,Je]),(0,E.useEffect)(()=>{De(new Set),ze(null),U(null),H.current=null},[e?.path]),(0,E.useEffect)(()=>{Te(s)},[s]),(0,E.useEffect)(()=>{De(new Set),ze(null),H.current=null},[b]);let Ye=e=>{xe.current={y:e.clientY,height:we},e.currentTarget.setPointerCapture(e.pointerId)},Xe=e=>{let t=xe.current;if(!t)return;let n=Math.max(al,Math.round(window.innerHeight*.7));Te(Math.min(n,Math.max(al,t.height+t.y-e.clientY)))},Ze=e=>{xe.current&&(xe.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(we))},Qe=()=>{Te(il),c?.(il)},$e=r.query.length>0,et=(0,E.useMemo)(()=>Zc.filter(e=>i.columns?.includes(e.id)),[i.columns]),tt=i.columns?.includes(`linkTarget`)??!1,nt=(0,E.useCallback)(e=>Math.min(nl,Math.max(tl,Oe[e.id]??e.width)),[Oe]),rt=(0,E.useMemo)(()=>`minmax(160px, 1fr) ${et.map(e=>`${nt(e)}px`).join(` `)}`.trim(),[et,nt]),it=(0,E.useRef)(null),at=(0,E.useRef)(null),ot=()=>Math.floor(at.current?.getBoundingClientRect().width??rl),st=e=>{let t=et[0];t&&(e.preventDefault(),e.stopPropagation(),it.current={left:{id:t.id,start:nt(t)},startX:e.clientX,nameStart:ot()})},ct=(e,t)=>{let n=et[t],r=et[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),it.current={left:{id:n.id,start:nt(n)},right:{id:r.id,start:nt(r)},startX:e.clientX,nameStart:0})},lt=e=>ke(t=>{let n={...t};return delete n[e],Vn($c,n),n});(0,E.useEffect)(()=>{let e=e=>{let t=it.current;if(!t)return;let n=e.clientX-t.startX;ke(e=>{if(!t.right){let r=Math.max(0,t.nameStart-rl),i=Math.min(Math.min(nl,t.left.start+r),Math.max(tl,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(nl,Math.max(tl,t.left.start+n)),a=Math.min(Math.min(nl,r-tl),Math.max(Math.max(tl,r-nl),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{it.current&&(it.current=null,ke(e=>(Vn($c,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,E.useEffect)(()=>{let e=()=>ke(()=>(Vn($c,{}),{}));return window.addEventListener(el,e),()=>window.removeEventListener(el,e)},[]);let W=(0,E.useMemo)(()=>e?ll(e.entries.map(t=>{let n=t.isDirectory?In(me,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:$e?bn(i,r):null,tags:e.tags[t.name]??[],cut:te.has(t.fullPath)}}).filter(e=>!$e||r.mode===`dim`||e.ranges!==null),i,e,B):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,$e,r,me,i.sort,i.sortDescending,B,te]);je.current=W,(0,E.useEffect)(()=>{pe!==0&&De(new Set(je.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[pe]);let ut=Math.max(40,i.iconSize+20),dt=Math.max(0,Math.floor(ye.top/ut)-4),ft=Math.min(W.length,dt+Math.ceil(ye.height/ut)+10),pt=(0,E.useMemo)(()=>W.slice(dt,ft),[W,dt,ft]);(0,E.useEffect)(()=>{let e=_e.current;if(!e||i.mode!==`list`)return;let t=()=>be(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,E.useEffect)(()=>{be(e=>({...e,top:0})),_e.current&&(_e.current.scrollTop=0)},[e?.path]),(0,E.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=W.findIndex(e=>e.entry.fullPath===r.currentPath),t=_e.current;if(e<0||!t)return;let n=e*ut;(n<t.scrollTop||n+ut>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else he.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,W,ut]);let mt=(0,E.useMemo)(()=>W.slice(0,V),[W,V]);(0,E.useEffect)(()=>{ve(Xc)},[e?.path]),(0,E.useEffect)(()=>{if(!r.currentPath)return;let e=W.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&ve(t=>Math.max(t,e+Xc))},[r.currentPath,W]);let ht=(0,E.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&ve(e=>Math.min(W.length,e+Xc))},[W.length]),gt=i.mode===`grid`,yt=(0,E.useMemo)(()=>{if(!gt)return[];if(!j)return fl(mt,dl);let e=[],t=new Map;for(let n of mt){let r=j(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[mt,gt,j]),bt=(0,E.useMemo)(()=>a?W.filter(e=>!e.entry.isDirectory&&jn(e.entry.name)):[],[W,a]),xt=bt.length,Et=(0,E.useMemo)(()=>bt.slice(0,Yc),[bt]),Dt=(0,E.useMemo)(()=>a?fl(Et,ul):[],[Et,a]),Ot=(0,E.useMemo)(()=>W.map(e=>e.entry.fullPath),[W]),jt=W.length>0&&Ee.size>=W.length,Nt=Ee.size>0&&!jt,Pt=()=>{R||(jt?Rt():De(new Set(Ot)))},Ft=e?.path??``,It=(0,E.useCallback)((e,t)=>{if(R){H.current=t,De(new Set([t]));return}let n=e.ctrlKey||e.metaKey;De(r=>{if(e.shiftKey&&H.current!==null){let e=Ot.indexOf(H.current),i=Ot.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Ot[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),H.current=t,e}return H.current=t,new Set([t])})},[Ot,R]),Lt=(0,E.useCallback)(e=>{R?(H.current=e,De(new Set([e]))):(H.current=e,De(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[R]),Rt=(0,E.useCallback)(()=>{H.current=null,De(new Set)},[]);(0,E.useEffect)(()=>{if(fe===0||!z||Ve.current===fe||!e?.entries.some(e=>e.fullPath===z))return;Ve.current=fe,H.current=z,De(new Set([z])),ze({path:z,value:v(z)});let t=W.findIndex(e=>e.entry.fullPath===z),n=_e.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*ut;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView({block:`nearest`})})}},[_e,e,z,fe,ut,W,i.mode]),(0,E.useEffect)(()=>{if(!Re)return;let e=W.findIndex(e=>e.entry.fullPath===Re.path),t=_e.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*ut;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Re.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[_e,Re,ut,W,i.mode]);let zt=(0,E.useCallback)(()=>U(null),[]),G=(0,E.useCallback)((e,t)=>{e.isDirectory?d(e.fullPath,Gt(t)):p?.(e.fullPath,Gt(t))},[d,p]),Vt=(0,E.useCallback)((e,t,n)=>{Ce({entry:e,x:t,y:n})},[]),Ut=(0,E.useRef)(null),Wt=(0,E.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;$s(e,Ee.has(n)?[...Ee]:[n])},[Ee]),qt=(0,E.useCallback)(e=>{if(!Ys(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Ut.current=t?.dataset.directory===`true`?t.dataset.path??Ft:Ft,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Ft]),Jt=(0,E.useCallback)(e=>{if(N)return;let{paths:t,move:n}=Xs(e),r=Ut.current??Ft;Ut.current=null,t.length!==0&&ne&&(e.preventDefault(),ne(t,r,!e.ctrlKey&&n))},[Ft,ne,N]),Xt=(0,E.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),N||!t&&!le)return;let n=Ae.current;t&&!n.has(t)&&De(new Set([t])),t&&(H.current=t);let r=t?n.has(t)?[...n]:[t]:[];U({x:e.clientX,y:e.clientY,paths:r,background:!t}),vt().then(qe,()=>qe(!1))},[le,Ft]),Zt=(0,E.useCallback)(()=>x?.(),[x]),Qt=(e,t)=>{H.current=e,De(new Set([e])),t&&ze({path:e,value:v(e)}),Zt()},$t=Pe&&(0,P.jsx)(Eo,{initialDirectory:Ft,initialName:Pe.name,onCancel:()=>Fe(null),onCompress:async e=>{let t=await Bt(Pe.paths,e);return!t.ok||!t.path?(Sa(t.error??B(`Could not create the archive.`)),!1):(Qt(t.path,!1),!0)}}),en=async(e,t=!1)=>{let n=e,r=t;if(e.some(jc)){let t=[];for(let n of e)if(!jc(n))t.push(n);else{if(je.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){Sa(B(`Folders on a shared device cannot be copied yet.`));return}try{t.push(await Fc(n))}catch(e){Sa(e instanceof Error?e.message:B(`The file could not be copied.`));return}}n=t,r=!1}await _t(n,r)&&(qe(!0),ee?.())},tn=async e=>{e&&(await St(e)?(Zt(),ae?.()):Sa(B(`Nothing on the clipboard could be pasted here.`)))},nn=async(e,t=!1)=>{if(!Ft)return;let n=e===null?await Tt(Ft,t):await kt(Ft,e);!n.ok||n.path===null?Sa(n.error??B(`Could not create the item.`)):(H.current=n.path,De(new Set([n.path])),ze({path:n.path,value:v(n.path)}),Zt())},rn=e=>{De(new Set([e.fullPath])),H.current=e.fullPath,ze({path:e.fullPath,value:e.name})},an=(0,E.useCallback)(e=>ze(t=>t&&{...t,value:e}),[]),on=(0,E.useCallback)(()=>ze(null),[]),sn=(0,E.useCallback)(async()=>{let e=Be.current;if(ze(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=je.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await wt(e.path,t);r.ok?(Rt(),r.path&&S?.(e.path,r.path),Zt(),window.setTimeout(()=>Zt(),250)):Sa(r.error??B(`Could not rename the entry.`))},[Rt,S,Zt,B]),cn=async(e,t=!1)=>{if((t||D)&&!await K(e,t))return;let n=await Ct(e,t);if(!n.ok&&n.needsPermanent){if(!await K(e,!0))return;n=await Ct(e,!0)}if(n.ok)Rt(),Zt();else{if(n.cancelled)return;Sa(n.error??B(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},K=(0,E.useCallback)((e,t)=>new Promise(n=>Le({paths:e,permanent:t,resolve:n})),[]),q=(0,E.useCallback)(e=>{Le(t=>(t?.resolve(e),null))},[]);(0,E.useEffect)(()=>{if(!_||Me)return;let e=e=>{if(Yt(e.target))return;He.current?.();let t=Kt(e),n=[...Ee],r=n.length===1?W.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Ot.length===0)return;e.preventDefault();let n=H.current&&Ot.includes(H.current)?H.current:Ee.size===1?[...Ee][0]:null,r=n?Ot.indexOf(n):-1,i=t===`home`?0:t===`end`?Ot.length-1:Math.max(0,Math.min(Ot.length-1,r+(t===`arrowdown`?1:-1))),a=Ot[i];De(new Set([a])),H.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===g.copy?i(()=>{n.length>0&&en(n)}):t===g.cut?i(()=>{n.length>0&&en(n,!0)}):t===g.paste?i(()=>void tn(Ft)):t===g.delete?i(()=>{n.length>0&&cn(n)}):t===g.deletePermanently?i(()=>{n.length>0&&cn(n,!0)}):t===g.selectAll?i(()=>{De(new Set(Ot)),H.current=Ot[0]??null}):t===g.invertSelection?i(()=>{De(new Set(Ot.filter(e=>!Ee.has(e)))),H.current=Ot[0]??null}):t===g.rename&&r?i(()=>void rn(r)):t===g.open&&r?i(()=>{r.isDirectory?d(r.fullPath):p?.(r.fullPath)}):t===g.newFolder||t===`f10`?i(()=>void nn(null)):t===g.terminal?i(()=>void Mt(Ft)):t===g.properties&&i(()=>void At(n.length>0?n:Ft?[Ft]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Ot,en,nn,Ft,_,Me,d,p,tn,cn,rn,W,Ee,g]);let ln=Ie&&(0,P.jsx)(zo,{confirmLabel:Ie.permanent?B(`Delete`):B(`Move`),danger:Ie.permanent,message:Ie.permanent?B(`Permanently delete {target}? This cannot be undone.`,{target:Ie.paths.length===1?B(`this item`):B(`{count} items`,{count:Ie.paths.length})}):B(`Move {target} to the recycle bin?`,{target:Ie.paths.length===1?B(`this item`):B(`{count} items`,{count:Ie.paths.length})}),onCancel:()=>q(!1),onConfirm:()=>q(!0),open:!0,title:Ie.permanent?B(`Delete permanently`):B(`Move to the recycle bin`)}),J=(0,E.useMemo)(()=>{if(!e||Ee.size===0)return null;let t=Ot.find(e=>Ee.has(e));return t?W.find(e=>e.entry.fullPath===t)?.entry??null:null},[Ot,e,W,Ee]),un=(0,E.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:v(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:B(`Type`),value:B(`Folder`)},{label:B(`Location`),value:e.parent??`—`},{label:B(`Path`),value:e.path},{label:B(`Size`),value:f(t)},{label:B(`Items`),value:o(B,n,`1 item`,`{count} items`)},{label:B(`Modified`),value:`—`},{label:B(`Created`),value:`—`},{label:B(`Attributes`),value:`—`}]}},[e,B]),dn=(0,E.useMemo)(()=>{if(!J||!e)return null;let t=J.isDirectory?e.folderSizes[J.name]:void 0,n=e.tags[J.name]??[],r=J.name.lastIndexOf(`.`),i=r>0&&r<J.name.length-1?J.name.slice(r+1).toUpperCase():`—`;return{name:J.name,path:J.fullPath,isDirectory:J.isDirectory,size:J.size,modified:J.modified,created:J.created,fields:[{label:B(`Type`),value:hl(J,B)},...J.isEncrypted?[{label:B(`Encryption`),value:B(`Password required`)}]:[],{label:B(`Extension`),value:J.isDirectory?`—`:i},{label:B(`Location`),value:e.path},{label:B(`Full path`),value:J.fullPath},{label:B(`Size`),value:J.isDirectory?t===void 0?`—`:f(t):f(J.size)},...J.isDirectory?[{label:B(`Items`),value:`${e.counts[J.name]??`—`}`}]:[],{label:B(`Modified`),value:y(J.modified)},{label:B(`Created`),value:y(J.created)},{label:B(`Link status`),value:J.linkTarget==null?J.linkCount>1?B(`Hard link`):`—`:J.linkValid?`OK`:B(`Broken`)},...J.linkTarget?[{label:B(`Target`),value:J.linkTarget}]:[],...J.linkCount>1?[{label:B(`Links`),value:String(J.linkCount)}]:[],{label:B(`Attributes`),value:[J.isHidden?B(`Hidden`):``,J.isSystem?B(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:B(`Tags`),value:n.join(`, `)}]:[]]}},[e,J,B]),fn=Me?.paths.length===1?Me.paths[0]:null,pn=fn?W.find(e=>e.entry.fullPath===fn)?.entry:void 0,mn=pn?{path:pn.fullPath,isDirectory:pn.isDirectory}:null,hn=dn??un,gn=(0,E.useRef)(k);gn.current=k,(0,E.useEffect)(()=>{gn.current?.(hn)},[k,hn]);let _n=se&&hn&&(0,P.jsx)(Xo,{info:hn,onWidth:Ge,selectionNote:Ee.size>1?o(B,Ee.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:oe,videoAutoplay:O,width:Ue});return n&&!e?(0,P.jsx)(yu,{children:(0,P.jsx)(xu,{children:n})}):!e&&!t?(0,P.jsx)(yu,{children:(0,P.jsx)(bu,{children:B(`Nothing selected.`)})}):i.mode===`grid`?(0,P.jsxs)(Il,{onPointerDown:A,children:[(0,P.jsxs)(Ll,{children:[(0,P.jsxs)(Gl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Rt()},onContextMenu:e=>Xt(e),onDragOver:qt,onDragStart:Wt,onDrop:Jt,onScroll:e=>{M?.(e.currentTarget),ht(e.currentTarget)},children:[m&&W.length>0&&(0,P.jsxs)(Nl,{children:[(0,P.jsx)(jl,{$checked:!R&&jt,$partial:!R&&Nt,"aria-label":B(jt?`Select none`:`Select all`),disabled:R,onClick:Pt,title:B(jt?`Select none`:`Select all`),type:`button`,children:jt?(0,P.jsx)(bi,{size:10}):Nt?(0,P.jsx)(Ml,{}):null}),(0,P.jsx)(`span`,{children:B(jt?`Select none`:`Select all`)})]}),t&&!e?(0,P.jsx)(Xl,{$size:i.gridSize,children:(0,P.jsx)(xl,{size:i.gridSize})}):(0,P.jsx)(Cl,{counts:e?.counts,currentPath:$e?r.currentPath:null,groups:yt,gridSize:i.gridSize,innerRef:he,onContextMenu:Xt,onOpen:d,onOpenFile:p,onRenameCancel:on,onRenameChange:an,onRenameCommit:sn,onSelect:It,onToggle:Lt,openOnSingleClick:h,renaming:Re,searching:$e,selected:Ee,showCheckboxes:m,showTarget:tt}),!t&&e&&W.length===0&&(0,P.jsx)(vu,{children:(0,P.jsx)(bu,{children:n??($e&&r.mode===`hide`?B(`No entries match the search.`):B(`This folder is empty.`))})}),ce]}),Me&&(0,P.jsx)(lo,{canPaste:Ke,directory:Ft,allowCompression:!0,menu:Me,onAddToTray:re,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:ie,onExtractArchive:T,onArchiveCreated:Qt,onClose:zt,onCompressTo:(e,t)=>Fe({paths:e,name:t}),onCopy:en,onCreateFile:e=>void nn(e),onCreateFolder:e=>void nn(null,e),onDelete:cn,onOpen:d,onOpenFile:p,onPaste:tn,onRefresh:Zt,onRename:e=>{let t=W.find(t=>t.entry.fullPath===e)?.entry;t&&rn(t)},shortcuts:g,target:mn}),$t,ln]}),_n]}):(0,P.jsxs)(Il,{onPointerDown:A,children:[(0,P.jsxs)(Ll,{children:[(0,P.jsxs)(Rl,{onScroll:e=>{_e.current&&_e.current.scrollLeft!==e.currentTarget.scrollLeft&&(_e.current.scrollLeft=e.currentTarget.scrollLeft)},ref:ge,style:{gridTemplateColumns:rt},children:[(0,P.jsxs)(Ol,{ref:at,children:[m&&(0,P.jsx)(jl,{$checked:!R&&jt,$partial:!R&&Nt,"aria-label":B(jt?`Select none`:`Select all`),disabled:R,onClick:e=>{e.stopPropagation(),Pt()},title:B(jt?`Select none`:`Select all`),type:`button`,children:jt?(0,P.jsx)(bi,{size:10}):Nt?(0,P.jsx)(Ml,{}):null}),(0,P.jsxs)(zl,{onClick:()=>l(`name`),type:`button`,children:[B(`Name`),sl(i,`name`)]}),(0,P.jsx)(Al,{"aria-label":B(`Resize column`),onDoubleClick:()=>et[0]&&lt(et[0].id),onPointerDown:st,role:`separator`})]}),et.map((e,t)=>(0,P.jsxs)(kl,{children:[(0,P.jsxs)(zl,{onClick:()=>l(e.id),type:`button`,children:[B(e.label),sl(i,e.id)]}),t<et.length-1&&(0,P.jsx)(Al,{"aria-label":B(`Resize column`),onDoubleClick:()=>lt(e.id),onPointerDown:e=>ct(e,t),role:`separator`})]},e.id))]}),(0,P.jsxs)(Bl,{onClick:e=>{e.target===e.currentTarget&&Rt()},onContextMenu:e=>Xt(e),onDragOver:qt,onDragStart:Wt,onDrop:Jt,onScroll:e=>{ge.current&&ge.current.scrollLeft!==e.currentTarget.scrollLeft&&(ge.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;be(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:_e,children:[t&&!e?(0,P.jsx)(bl,{template:rt,columns:et.length}):(0,P.jsxs)(P.Fragment,{children:[dt>0&&(0,P.jsx)(`div`,{style:{height:dt*ut}}),pt.map(t=>{let n=t.entry.fullPath;return(0,P.jsx)(Tl,{current:$e&&n===r.currentPath,dim:$e&&t.ranges===null,height:ut,iconSize:i.iconSize,innerRef:he,listing:e,onContextMenu:Xt,onOpen:G,onRenameCancel:on,onRenameChange:an,onRenameCommit:sn,onSelect:It,onTagEdit:Vt,onToggle:Lt,openOnSingleClick:h,renaming:Re?.path===n?{value:Re.value}:null,row:t,selected:Ee.has(n),showCheckboxes:m,showTarget:tt,template:rt,visible:et},n)}),ft<W.length&&(0,P.jsx)(`div`,{style:{height:(W.length-ft)*ut}})]}),!t&&e&&W.length===0&&(0,P.jsx)(yu,{children:(0,P.jsx)(bu,{children:n??($e&&r.mode===`hide`?B(`No entries match the search.`):B(`This folder is empty.`))})})]}),a&&bt.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Vl,{onDoubleClick:Qe,onPointerDown:Ye,onPointerMove:Xe,onPointerUp:Ze,title:B(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(Hl,{style:{height:we},children:[(0,P.jsxs)(Ul,{children:[B(`Preview`),(0,P.jsx)(Wl,{children:xt>Yc?`${Et.length} / ${xt}`:xt})]}),(0,P.jsx)(Gl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Rt()},onContextMenu:e=>Xt(e),children:(0,P.jsx)(Cl,{counts:e?.counts,currentPath:$e?r.currentPath:null,groups:Dt,gridSize:i.gridSize,onContextMenu:Xt,onOpen:d,onOpenFile:p,onSelect:It,onToggle:Lt,openOnSingleClick:h,searching:$e,selected:Ee,showCheckboxes:m,showTarget:tt})})]})]}),Se&&e&&(0,P.jsx)(js,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(Se.entry.name,e,t),onClose:()=>Ce(null),tags:e.tags[Se.entry.name]??[],x:Se.x,y:Se.y}),Me&&(0,P.jsx)(lo,{canPaste:Ke,directory:Ft,allowCompression:!0,menu:Me,onAddToTray:re,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:ie,onExtractArchive:T,onArchiveCreated:Qt,onClose:zt,onCompressTo:(e,t)=>Fe({paths:e,name:t}),onCopy:en,onCreateFile:e=>void nn(e),onCreateFolder:e=>void nn(null,e),onDelete:cn,onOpen:d,onOpenFile:p,onPaste:tn,onRefresh:Zt,onRename:e=>{let t=W.find(t=>t.entry.fullPath===e)?.entry;t&&rn(t)},shortcuts:g,target:mn}),$t,ln]}),_n]})}function sl(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var cl=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function ll(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return hl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:cl.compare(String(r),String(i));return t.sortDescending?-o:o})}var ul=On.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&An(t.entry.name)===e})),dl=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...ul.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function fl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function pl(e){return Math.max(24,Math.min(e-56,160))}var ml={file:`File`,folder:`Folder`,text:`Text file`,code:`source file`,image:`image`,video:`Video`,audio:`Audio`,archive:`archive`,pdf:`PDF`,executable:`Application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function hl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(ml[Ws(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function gl(e,t,n,r){switch(e){case`type`:return hl(t,r);case`size`:return vl(t,n.folderSizes);case`modified`:return y(t.modified);case`created`:return y(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function _l({name:e,ranges:t}){if(!t||t.length===0)return(0,P.jsx)(P.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,P.jsx)(_u,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,P.jsx)(P.Fragment,{children:n})}function vl(e,t){if(!e.isDirectory)return f(e.size);let n=t[e.name];return n===void 0?`—`:f(n)}function yl({entry:e,size:t=18}){let n=L(),r=(0,E.useRef)(null),[i,a]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=J(i?e.fullPath:null,e.isDirectory,t>32),s=dn(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,P.jsxs)(El,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,P.jsx)(Gs,{name:e.iconSource.slice(5),size:t}):s?(0,P.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,P.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,P.jsx)(ri,{size:t}):(0,P.jsx)(Gs,{name:Ws(e.name),size:t}),e.isEncrypted&&(0,P.jsx)(Dl,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,P.jsx)(ma,{size:Math.max(8,Math.round(t*.52))})})]})}function bl({template:e,columns:t}){return(0,P.jsx)(P.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,P.jsxs)(Zl,{style:{gridTemplateColumns:e},children:[(0,P.jsxs)(eu,{children:[(0,P.jsx)(Ql,{style:{flexShrink:0,height:18,width:18}}),(0,P.jsx)(Ql,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,P.jsx)(Ql,{style:{width:t%2==0?44:92}},t))]},r))})}function xl({size:e}){return(0,P.jsx)(P.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,P.jsxs)(du,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,P.jsx)(fu,{children:(0,P.jsx)(Ql,{style:{height:e,width:e}})}),(0,P.jsx)(mu,{children:(0,P.jsx)(Ql,{style:{height:9,width:`${t}%`}})})]},n))})}var Sl=(0,E.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=L(),x=Fn(),S=!e.entry.isDirectory&&jn(e.entry.name),ee=(0,E.useRef)(null),[te,ne]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(!S||te)return;let e=ee.current;if(!e)return;if(!(`IntersectionObserver`in window)){ne(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(ne(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,te]);let re=hn(S&&te?e.entry.fullPath:null,192,e.entry.modified),[C,w]=(0,E.useState)(!1),ie=S&&re!==null&&!C,T=e.entry.fullPath,ae=t=>{e.entry.isDirectory?v(T,Gt(t)):y?.(T,Gt(t))};return(0,P.jsxs)(du,{$current:t,$dim:n,$image:ie,$selected:s,onClick:e=>{h(e,T),l&&ae(e)},onContextMenu:e=>_(e,T),onDoubleClick:e=>{l||ae(e)},ref:e=>{ee.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!u,children:[c&&(0,P.jsx)(Fl,{$checked:s,onClick:e=>{e.stopPropagation(),g(T)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,P.jsx)(bi,{size:10})}),(0,P.jsx)(fu,{children:ie?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:re}):(0,P.jsx)(pu,{children:e.place&&x.useIcons?(0,P.jsx)(Os,{place:e.place,size:r}):(0,P.jsx)(yl,{entry:e.entry,size:r})})}),(0,P.jsxs)(mu,{children:[u?(0,P.jsx)(wl,{onCancel:()=>m?.(),onChange:e=>d?.(e),onCommit:()=>p?.(),value:u.value}):(0,P.jsx)(hu,{$broken:e.entry.linkValid===!1,children:(0,P.jsx)(_l,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,P.jsxs)(nu,{title:b(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(ma,{size:9}),b(`Encrypted`)]}),e.cut&&(0,P.jsxs)(ru,{title:b(`This item is cut and will move when something is pasted.`),children:[(0,P.jsx)(sa,{size:9}),b(`Cut`)]}),(0,P.jsx)(gu,{children:e.entry.isDirectory?i===void 0?hl(e.entry,b):b(`{type} · {count} items`,{type:hl(e.entry,b),count:i}):b(`{type} · {size}`,{type:hl(e.entry,b),size:f(e.entry.size)})}),a&&e.entry.linkTarget&&(0,P.jsxs)(au,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,P.jsx)(ha,{size:9}),(0,P.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Cl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=L();return(0,P.jsx)(P.Fragment,{children:e.map(e=>(0,P.jsxs)(Kl,{children:[(0,P.jsxs)(ql,{children:[y(e.label),(0,P.jsx)(Jl,{children:e.rows.length}),(0,P.jsx)(Yl,{})]}),(0,P.jsx)(Xl,{$size:t,children:e.rows.map(e=>(0,P.jsx)(Sl,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:pl(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function wl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,P.jsx)(iu,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Tl=(0,E.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=L(),ee=Fn(),te=e.entry.fullPath;return(0,P.jsxs)($l,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,te),o&&_(e.entry,t)},onContextMenu:e=>g(e,te),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":te,draggable:!p,children:[(0,P.jsxs)(eu,{children:[i&&(0,P.jsx)(Pl,{$checked:r,onClick:e=>{e.stopPropagation(),h(te)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,P.jsx)(bi,{size:10})}),e.place&&ee.useIcons?(0,P.jsx)(El,{children:(0,P.jsx)(Os,{place:e.place,size:s})}):(0,P.jsx)(yl,{entry:e.entry,size:s}),p?(0,P.jsx)(wl,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,P.jsx)(tu,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,P.jsx)(_l,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,P.jsxs)(nu,{title:S(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(ma,{size:9}),S(`Encrypted`)]}),e.cut&&(0,P.jsxs)(ru,{title:S(`This item is cut and will move when something is pasted.`),children:[(0,P.jsx)(sa,{size:9}),S(`Cut`)]}),a&&e.entry.linkTarget&&(0,P.jsxs)(au,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,P.jsx)(ha,{size:9}),(0,P.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,P.jsx)(ou,{children:t.id===`tags`?(0,P.jsx)(su,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,P.jsx)(cu,{$color:t,$ink:As(t),children:e},e)}):(0,P.jsx)(lu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,P.jsx)(uu,{children:S(`Broken`)}):gl(t.id,e.entry,d,S)},t.id))]})}),El=_.span`
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
`,Dl=_.span`
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
`,Ol=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,kl=_.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,Al=_.span`
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
`,jl=_.button`
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
`,Ml=_.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Nl=_.div`
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
`,Pl=_.button`
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
`,Fl=_(Pl)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Il=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Ll=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,Rl=_.div`
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
`,zl=_.button`
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
`,Bl=_.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Vl=_.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Hl=_.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,Ul=_.div`
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
`,Wl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Gl=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Kl=_.section`
    & + & {
        margin-top: 22px;
    }
`,ql=_.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Jl=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Yl=_.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Xl=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Zl=_.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Ql=_.span`
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
`,$l=_.div`
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
`,eu=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,tu=_.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,nu=_.span`
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
`,ru=_.span`
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
`,iu=_.input`
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
`,au=_.span`
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
`,ou=_.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,su=_.button`
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
`,cu=_.span`
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
`,lu=_.span`
    color: var(--text-muted);
    font-size: 11px;
`,uu=_.span`
    color: #fca5a5;
`,du=_.div`
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
`,fu=_.div`
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
`,pu=_.span`
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
`,mu=_.div`
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
`,hu=_.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,gu=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,_u=_.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,vu=_.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,yu=_.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,bu=_.p`
    font-size: 13px;
    color: var(--text-muted);
`,xu=_.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Su=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Cu=`/assets/bloom-BpfZWiaG.mp4`,wu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Tu=`/assets/drift-BRBSQL2_.mp4`,Eu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Du=`/assets/ember-CtSz0YxR.mp4`,Ou=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],ku=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],Au=[{id:`builtin:video:drift`,name:`Drift`,url:Tu,poster:wu},{id:`builtin:video:ember`,name:`Ember`,url:Du,poster:Eu},{id:`builtin:video:bloom`,name:`Bloom`,url:Cu,poster:Su}],ju=ku.map(e=>({...e,variants:Ou.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Lu(Ru(e.id,t))}))})),Mu=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>Ou.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Lu(zu(e.id,t))}))),Nu=new Map([...ju.flatMap(e=>e.variants),...Mu].map(e=>[e.id,e])),Pu=new Map(Au.map(e=>[e.id,e]));function Fu(e){if(Nu.has(e))return Nu.get(e).url;if(Pu.has(e))return Pu.get(e).url;let t=e.split(`:`)[1];return t?Nu.get(`builtin:${t}:indigo`)?.url??null:null}function Iu(e){return Pu.has(e)}function Lu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function Ru(e,t){return e===`dunes`?Ku(t):e===`tide`?qu(t):Gu(t)}function zu(e,t){return e===`skyline`?Vu(t):e===`orbit`?Hu(t):Bu(t)}function Bu({accent:e,secondary:t}){let n=Wu(t,`#05070f`,.86),r=Wu(e,`#0b1020`,.72),i=Wu(t,`#0a0f1d`,.66),a=Wu(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${Wu(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${Wu(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function Vu({accent:e,secondary:t}){let n=Wu(t,`#07040d`,.84),r=Wu(e,`#100716`,.7),i=Wu(e,`#08050e`,.82),a=Wu(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${Wu(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function Hu({accent:e,secondary:t}){let n=Wu(e,`#03050d`,.9),r=Wu(t,`#05030c`,.94),i=Wu(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${Wu(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${Wu(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${Wu(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${Wu(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function Uu(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function Wu(e,t,n){let[r,i,a]=Uu(e),[o,s,c]=Uu(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function Gu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Wu(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${Wu(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${Wu(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${Wu(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function Ku({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${Wu(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${Wu(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${Wu(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${Wu(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${Wu(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${Wu(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${Wu(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function qu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Wu(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${Wu(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${Wu(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${Wu(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var Ju=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Yu(e){return Ju.test(e)}function Xu({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):C(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=gn(r),a=t?.startsWith(`builtin:`)?Fu(t):n??i,o=n===null?r===null?t!==null&&Iu(t):Yu(r):Yu(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,P.jsxs)(Zu,{"aria-hidden":!0,children:[o?(0,P.jsx)($u,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,P.jsx)(Qu,{src:a,style:{filter:s}}),(0,P.jsx)(ed,{})]})}var Zu=_.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,Qu=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,$u=_.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,ed=_.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function td({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=L(),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(()=>Math.max(1,Math.ceil(t)));return(0,E.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,Pa.createPortal)((0,P.jsx)(nd,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,P.jsxs)(rd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(id,{children:a(`Protected folder`)}),(0,P.jsx)(ad,{children:a(`These paths are protected by the safety settings:`)}),(0,P.jsx)(od,{children:e.map(e=>(0,P.jsxs)(sd,{children:[(0,P.jsx)(cd,{children:e.path}),(0,P.jsx)(ld,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,P.jsx)(ud,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,P.jsx)(dd,{children:a(`Nothing has been deleted.`)}),(0,P.jsx)(fd,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,P.jsxs)(pd,{children:[(0,P.jsx)(md,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,P.jsx)(hd,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var nd=_.div`
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
`,rd=_.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wa}
`,id=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,ad=_.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,od=_.div`
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
`,sd=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,cd=_.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,ld=_.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,ud=_.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,dd=_.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,fd=_.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,pd=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,md=_.button`
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
`,hd=_.button`
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
`;function gd(){let e=L(),[t,n]=(0,E.useState)(null),r=(0,E.useRef)(null),i=(0,E.useRef)(null);(0,E.useEffect)(()=>(xa(e=>new Promise(t=>{r.current=t,n(e)})),()=>xa(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,E.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Pa.createPortal)((0,P.jsx)(_d,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,P.jsxs)(vd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(yd,{children:e(`Notice`)}),(0,P.jsx)(bd,{children:t}),(0,P.jsx)(xd,{children:(0,P.jsx)(Sd,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var _d=_.div`
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
`,vd=_.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wa}
`,yd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,bd=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,xd=_.div`
    display: flex;
    justify-content: flex-end;
`,Sd=_.button`
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
`;function Cd(){let e=L(),[t,n]=(0,E.useState)(null),[r,i]=(0,E.useState)(``),a=(0,E.useRef)(null),o=(0,E.useRef)(null);(0,E.useEffect)(()=>(Ca((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Ca(null)),[]),(0,E.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Pa.createPortal)((0,P.jsx)(wd,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,P.jsxs)(Td,{role:`dialog`,"aria-modal":`true`,children:[(0,P.jsx)(Ed,{children:e(`Archive password`)}),(0,P.jsx)(Dd,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,P.jsx)(Od,{title:t.archive,children:t.archive}),(0,P.jsx)(kd,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,P.jsxs)(Ad,{children:[(0,P.jsx)(jd,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,P.jsx)(Md,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var wd=_.div`
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
`,Td=_.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wa}
`,Ed=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Dd=_.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Od=_.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,kd=_.input`
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
`,Ad=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,jd=_.button`
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
`,Md=_(jd)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Nd({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h,onSelectMatches:g}){let _=L(),v=(0,E.useRef)(null),y=c??_(`Search this folder`);(0,E.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,P.jsxs)(Pd,{children:[(0,P.jsx)(oi,{}),(0,P.jsx)(Fd,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Id,{children:i===0?`0/0`:`${a+1}/${i}`}),g&&(0,P.jsx)(Ld,{disabled:i===0,onClick:g,title:_(`Select all matches`),type:`button`,children:(0,P.jsx)(bi,{size:12})}),(0,P.jsx)(Ld,{$chevron:!0,onClick:()=>b(u),title:_(`Previous match (Shift+Enter)`),type:`button`,children:(0,P.jsx)(fi,{size:12})}),(0,P.jsx)(Ld,{$chevron:!0,$down:!0,onClick:()=>b(d),title:_(`Next match (Enter)`),type:`button`,children:(0,P.jsx)(fi,{size:12})})]}),(0,P.jsx)(Rd,{$on:n,onClick:()=>b(f),title:_(`Match case`),type:`button`,children:`Aa`}),(0,P.jsx)(Rd,{$on:r,onClick:()=>b(p),title:_(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,P.jsx)(zd,{$on:t===`hide`,onClick:()=>b(m),title:_(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:t===`hide`?(0,P.jsx)(Ci,{size:12}):(0,P.jsx)(Si,{size:12})}),(0,P.jsx)(Ld,{onClick:h,title:_(`Close search (Esc)`),type:`button`,children:(0,P.jsx)(xi,{size:12})})]})}var Pd=_.div`
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
`,Fd=_.input`
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
`,Id=_.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Ld=_.button`
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
`,Rd=_.button`
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
`,zd=_(Rd)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function Bd(e,t,n,r,i=[]){(0,E.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=bn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function Vd({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=L(),a=(0,E.useRef)(null),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(null);return(0,E.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,E.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,E.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Pa.createPortal)((0,P.jsxs)(Hd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Cs).map(n=>(0,P.jsx)(Ud,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Cs[n](16)},n)),(0,P.jsx)(Ud,{onClick:async()=>{let e=await va([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,P.jsx)(li,{size:13})}),r&&(0,P.jsx)(Ud,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,P.jsx)(xi,{size:12})})]}),document.body)]})}var Hd=_.div`
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
`,Ud=_.button`
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
`;function Wd({source:e,poster:t}){let n=C(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=gn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??Fu(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,P.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,P.jsx)(`img`,{alt:``,src:a}):null}function Gd({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=L(),s=(0,E.useRef)(null),c=(0,E.useRef)(null),l=(0,E.useRef)(!1),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,E.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,E.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,E.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,P.jsx)(pf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,P.jsxs)(mf,{children:[(0,P.jsxs)(hf,{children:[(0,P.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,P.jsx)(Sf,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,P.jsx)(xi,{size:12})})]}),(0,P.jsx)(gf,{children:o(`Drag the frame to choose the visible part.`)}),(0,P.jsxs)(_f,{children:[t?(0,P.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,P.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,P.jsx)(vf,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:m},children:(0,P.jsx)(yf,{})})]}),(0,P.jsxs)(bf,{children:[(0,P.jsx)(xf,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,P.jsx)(xf,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var Kd=150,qd=120,Jd=200,Yd=_.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Xd=_.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Zd=_.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${Jd}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Jd}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Jd*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Jd*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Jd*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Jd}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Jd*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Jd*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Jd*.18)}px),
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
`,Qd=_.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Kd}px);
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
`,$d=_.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,ef=_.section`
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
`,tf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,nf=_.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,rf=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,af=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,of=_.input`
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
`,sf=_.button`
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
`,cf=_.div`
    position: relative;
    width: 132px;
    height: 72px;
`,lf=_.button`
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
`,uf=_.button`
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
`,df=_.span`
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
`,ff=_.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,pf=_.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,mf=_.div`
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
`,hf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,gf=_.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,_f=_.div`
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
`,vf=_.div`
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
`,yf=_.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,bf=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,xf=_.button`
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
`,Sf=_.button`
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
`,Cf=_.button`
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
`,wf=_.div`
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
`,Tf=_.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Ef=_.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Df=_.button`
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
`,Of=_.div`
    position: relative;
    display: inline-flex;
`,kf=_.div`
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
`,Af=_.button`
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
`,jf=_.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Mf=_.section`
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
`,Nf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Pf=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Ff=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,If=_.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,Lf=_.input`
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
`,Rf=_.button`
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
`,zf=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Bf=_.div`
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
`,Vf=_.span`
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
`,Hf=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Uf=_.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wf=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Gf=_.button`
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
`,Kf=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,qf=_.button`
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
`,Jf=_.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Yf=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Xf=_.div`
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
`,Zf=_.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Qf=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,$f=_.button`
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
`,ep=_.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,tp=_.button`
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
`,np=_.button`
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
`,rp=_.button`
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
`,ip=_.span`
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
`,ap=_.button`
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
`,op=_.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,sp=_.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,cp=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,lp=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,up=_.input`
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
`,dp=_.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,fp=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,pp=_.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,mp=_.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,hp=_.button`
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
`;function gp({places:e,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:u,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:_,onSearchMatches:y,readOnly:b=!1,onPick:x,onSelectionChange:S,onAddToTray:ee,onAddFavorite:te,onRemoveFavorite:ne,favoritePaths:ie,onExtractArchive:T,settingsVersion:ae=0}){let D=L(),oe=Fn(),[O,se]=(0,E.useState)(!1),[k,A]=(0,E.useState)(null),j=k?.overviewBanner??null,M=j?.startsWith(`builtin:`)??!1,ce=j?.startsWith(`url:`)?j.slice(4):C(j)?j:null,le=M||ce?``:j??``,ue=M?``:ce?ce.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:le.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,de=M?Iu(j):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(ue),F=gn(le.length>0?le:null,0,ue?`.${ue}`:``),I=j?Fu(j)??ce??F:null,[R,z]=(0,E.useState)(``),[fe,pe]=(0,E.useState)(null),[B,me]=(0,E.useState)(!1),[he,ge]=(0,E.useState)(null),[_e,V]=(0,E.useState)(null),[ve,ye]=(0,E.useState)(null),[H,Se]=(0,E.useState)([]),[Ce,we]=(0,E.useState)(null),[Te,Ee]=(0,E.useState)(``),[De,Oe]=(0,E.useState)(null),[Ae,je]=(0,E.useState)(null),Me=Jc(`overview`),[U,Ne]=(0,E.useState)(null),[Pe,Fe]=(0,E.useState)(null),Ie=(0,E.useRef)(null),Le=(0,E.useRef)(null),Re=(0,E.useRef)(null),ze=(0,E.useRef)(null),Be=(0,E.useRef)(null),Ve=Pe??k?.overviewBannerHeight??220,[We,Ge]=(0,E.useState)(0),[Ke,qe]=(0,E.useState)(null),Ye=Math.min(1,Math.max(0,k?.overviewBannerOffset??.3)),Xe=Ve+Jd,Ze=Ke&&We>0?Ke.height*(We/Ke.width):Xe,Qe=Ze>0&&Ze<Xe+240?(Xe+240)/Ze:1,$e=Math.max(1,Math.round(We*Qe)),et=Math.max(0,Ze*Qe-Xe),tt=Math.min(qd,et/2,Math.max(20,Ve*.42)),nt=tt+Ye*Math.max(0,et-tt*2),[it,at]=(0,E.useState)(!1),ot=(e,t=!1)=>x?(Oe(e),je({path:e,isDirectory:t}),S?.([e]),!0):!1,st=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),Oe(t),je({path:t,isDirectory:n}),Ne({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,E.useEffect)(()=>(Vc(`overview`,Ae?(e,t)=>Ne({x:e,y:t,target:Ae}):null),()=>Vc(`overview`,null)),[Ae]);let ct=(e,t)=>c(e,t);(0,E.useEffect)(()=>{Je().then(A,()=>A(null))},[ae]),(0,E.useEffect)(()=>{if(N.available)return Tc().then(Se,()=>void 0),N.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Se(t.data.peers)})},[]),(0,E.useEffect)(()=>{let e=Re.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,E.useEffect)(()=>{if(M&&!de){qe({width:1920,height:1080});return}qe(null);let e=Be.current;e?.complete&&e.naturalWidth>0&&qe({width:e.naturalWidth,height:e.naturalHeight})},[j,M,de]),(0,E.useEffect)(()=>{let e=ze.current;if(!e)return;let t=()=>Ge(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[k?.overviewBanner]),(0,E.useEffect)(()=>{if(!fe)return;let e=()=>pe(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||pe(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[fe]),(0,E.useEffect)(()=>{if(!B)return;let e=()=>me(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[B]);let lt=Ts(k),W=lt.map(e=>e.id),ut=(0,E.useRef)(null),dt=e=>fe?.kind===`panel`&&fe.id===e,ft=e=>fe?.kind===`place`&&fe.id===e;(0,E.useEffect)(()=>{if(!N.available)return;let e=lt.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return N.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>N.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[lt.map(e=>e.path??e.id).join(`|`),a]),Bd(ut,_??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let pt=async(e,t)=>{let n={...k?.placeIcons};t?n[e]=t:delete n[e],pe(null),await yt({placeIcons:n}),l(await ke())},mt=async(e,t)=>{let n={...k?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],V(null),await yt({placeNames:n}),l(await ke())},ht=e=>{ye(null),ge({drive:e,label:e.label||`Local Disk`})},gt=async()=>{if(!he)return;let{drive:e,label:t}=he;ge(null);let n=await be(e.name,t.trim());n.ok?(ye(null),h?.()):ye(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},vt=k?.overviewColumns??1,yt=async e=>{if(!k)return;let t={...k,...e,overviewPanels:e.overviewPanels??W,overviewHidden:[]};A(await rt(t)),p?.()},bt=async()=>{await yt({overviewPanels:[...bs],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),l(await ke()),se(!1)},xt=async()=>{let e=await va([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=k?.overviewBanners??[];await yt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},St=async()=>{let e=R.trim();if(!k||!C(e))return;let t=k.overviewBanners??[];z(``),await yt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},Ct=()=>void yt({overviewBanner:null}),wt=e=>void yt({overviewBanners:(k?.overviewBanners??[]).filter(t=>t!==e),...k?.overviewBanner===e||k?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Tt=e=>{Ie.current={y:e.clientY,height:Ve},e.currentTarget.setPointerCapture(e.pointerId)},Et=e=>{let t=Ie.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Le.current=n,Fe(n)},Dt=e=>{Ie.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Le.current!==null&&(yt({overviewBannerHeight:Le.current}),Le.current=null)},Ot=(e,t)=>{let n=W.indexOf(e),r=n+t;if(n<0||r<0||r>=W.length)return;let i=[...W];[i[n],i[r]]=[i[r],i[n]],yt({overviewPanels:i})},kt=(e,t)=>{let n={...k?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],yt({overviewTitles:n})},At=(e,t)=>void yt({overviewViews:{...k?.overviewViews,[e]:t}}),jt=e=>{let t=k?.overviewPinned??lt.filter(e=>e.pinned).map(e=>e.id);yt({overviewPinned:lt.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Mt=e=>{pe(null);let t=t=>{let n={...t};return delete n[e],n},n=k?.overviewPinned??lt.filter(e=>e.pinned).map(e=>e.id);yt({overviewPanels:W.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(k?.overviewTitles),overviewViews:t(k?.overviewViews),overviewIcons:t(k?.overviewIcons),panelPlaces:t(k?.panelPlaces)})},Nt=(e,t)=>{let n={...k?.overviewIcons};t?n[e]=t:delete n[e],pe(null),yt({overviewIcons:n})},Pt=async e=>{if(!k)return;if(e===`folder`){let e=await _a();if(!e)return;let t=`folder:${e}`;W.includes(t)||await yt({overviewPanels:[...W,t]});return}if(e===`quick`){let e=2;for(;W.includes(`quick:${e}`);)e+=1;await yt({overviewPanels:[...W,`quick:${e}`]});return}let t=e;for(let n=2;W.includes(t);n+=1)t=`${e}:${n}`;await yt({overviewPanels:[...W,t]})},Ft=async n=>{let r=await _a();if(!r)return;if(n.id===`quick`){await yt({quickAccess:[...new Set([...e.map(e=>e.path),r])]}),l(await ke());return}let i=n.places??[];i.some(e=>t(e,r))||await yt({panelPlaces:{...k?.panelPlaces,[n.id]:[...i,r]}})},It=async(n,r)=>{pe(null),n.id===`quick`?(await yt({quickAccess:e.filter(e=>!t(e.path,r)).map(e=>e.path)}),l(await ke())):await yt({panelPlaces:{...k?.panelPlaces,[n.id]:(n.places??[]).filter(e=>!t(e,r))}})},Lt=async(n,r,i)=>{if(t(r,i))return;let a=n.id===`quick`?e.map(e=>e.path):n.places??[],o=a.findIndex(e=>t(e,r)),s=a.findIndex(e=>t(e,i));if(o<0||s<0)return;let c=[...a],[u]=c.splice(o,1);c.splice(s,0,u),n.id===`quick`?(await yt({quickAccess:c}),l(await ke())):await yt({panelPlaces:{...k?.panelPlaces,[n.id]:c}})},Rt=(e,t)=>({draggable:O,onDragOver:e=>{O&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{O&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{O&&(n.preventDefault(),Lt(e,n.dataTransfer.getData(`text/plain`),t))}}),zt=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:k?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??k?.placeIcons?.[n]??null}}),Bt=e=>{if(r.length===0)return(0,P.jsx)(sp,{children:D(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,P.jsx)(zf,{children:t.map(e=>{let t=In(oe,e.path);return(0,P.jsxs)(Bf,{$plain:!1,$selected:De===e.path,onClick:t=>{ot(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Gt(t)):xe(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>st(t,e.path,e.isDirectory),title:e.path,children:[(0,P.jsx)(Vf,{children:t&&oe.useIcons?(0,P.jsx)(Os,{place:t,size:18}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(Hf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Uf,{children:e.path})]})]},e.path)})}):(0,P.jsx)(Wf,{children:t.map(e=>{let t=In(oe,e.path);return(0,P.jsxs)(Gf,{$selected:De===e.path,onClick:t=>{ot(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Gt(t)):xe(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>st(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&oe.useIcons?(0,P.jsx)(Os,{place:t,size:15}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,P.jsxs)(Kf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Uf,{children:e.path})]})]},e.path)})})},G=e=>{let n=k?.favorites??[],r=async e=>{await yt({favorites:n.filter(t=>t.path!==e)})},i=async(e,r)=>{e&&!n.some(n=>t(n.path,e))&&await yt({favorites:[...n,{path:e,name:v(e)||e,isDirectory:r}]})},a=(e,t,n)=>{O||ot(t,n)||(n?c(t,Gt(e)):xe(t))},o=O?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(qf,{$row:e.view===`list`,onClick:()=>void va().then(e=>i(e,!1)),title:D(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,P.jsx)(li,{size:15}):(0,P.jsx)(Vf,{children:(0,P.jsx)(li,{size:15})}),e.view===`list`?(0,P.jsxs)(Kf,{children:[(0,P.jsx)(`strong`,{children:D(`Add file`)}),(0,P.jsx)(Uf,{children:D(`Pin any file here`)})]}):(0,P.jsxs)(Hf,{children:[(0,P.jsx)(`strong`,{children:D(`Add file`)}),(0,P.jsx)(Uf,{children:D(`Pin any file here`)})]})]}),(0,P.jsxs)(qf,{$row:e.view===`list`,onClick:()=>void _a().then(e=>i(e,!0)),title:D(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,P.jsx)(li,{size:15}):(0,P.jsx)(Vf,{children:(0,P.jsx)(li,{size:15})}),e.view===`list`?(0,P.jsxs)(Kf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Uf,{children:D(`Pin any folder here`)})]}):(0,P.jsxs)(Hf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Uf,{children:D(`Pin any folder here`)})]})]})]}):null;return n.length===0&&!O?(0,P.jsx)(sp,{children:D(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,P.jsxs)(zf,{children:[n.map(e=>{let t=In(oe,e.path);return(0,P.jsxs)(Bf,{$plain:O,$selected:De===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&x?.(e.path),onContextMenu:t=>!O&&st(t,e.path,e.isDirectory),title:e.path,children:[O&&(0,P.jsx)(np,{onClick:t=>{t.stopPropagation(),r(e.path)},title:D(`Remove from favorites`),type:`button`,children:(0,P.jsx)(xi,{size:11})}),(0,P.jsx)(Vf,{children:t&&oe.useIcons?(0,P.jsx)(Os,{place:t,size:18}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(Hf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Uf,{children:e.path})]})]},e.path)}),o]}):(0,P.jsxs)(Wf,{children:[n.map(e=>{let t=In(oe,e.path);return(0,P.jsxs)(Gf,{$selected:De===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!O&&x?.(e.path),onContextMenu:t=>!O&&st(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&oe.useIcons?(0,P.jsx)(Os,{place:t,size:15}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,P.jsxs)(Kf,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(Uf,{children:e.path})]}),O&&(0,P.jsx)(np,{$inline:!0,onClick:t=>{t.stopPropagation(),r(e.path)},title:D(`Remove from favorites`),type:`button`,children:(0,P.jsx)(xi,{size:11})})]},e.path)}),o]})},Vt=e=>{if(n.length===0)return(0,P.jsx)(sp,{children:D(`No drives are available.`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=he?.drive.name===t.name,i=r?(0,P.jsx)(_p,{maxLength:32,onCancel:()=>ge(null),onChange:e=>ge({...he,label:e}),onCommit:()=>void gt(),value:he?.label??``}):(0,P.jsx)(P.Fragment,{children:d(t)}),a=!r&&O&&(0,P.jsx)(rp,{onClick:e=>{e.stopPropagation(),ht(t)},title:D(`Rename volume`),type:`button`,children:(0,P.jsx)(Bi,{size:11})}),o=(0,P.jsx)(Uf,{children:D(`{free} free of {total}`,{free:f(t.freeSpace),total:f(t.totalSize)})});return e.view===`grid`?(0,P.jsxs)(Bf,{$plain:!1,$selected:De===t.name,onClick:e=>{!r&&ot(t.name,!0)||r||c(t.name,Gt(e))},onDoubleClick:()=>!r&&x?.(t.name),onContextMenu:e=>!r&&st(e,t.name,!0),title:t.name,children:[(0,P.jsx)(Vf,{children:(0,P.jsx)(ai,{size:18})}),(0,P.jsxs)(Hf,{children:[(0,P.jsxs)(`strong`,{children:[i,r&&re(t),a]}),o]})]},t.name):(0,P.jsxs)(Gf,{as:r?`div`:`button`,$selected:De===t.name,onClick:r?void 0:e=>{ot(t.name,!0)||c(t.name,Gt(e))},onDoubleClick:r?void 0:()=>x?.(t.name),onContextMenu:r?void 0:e=>st(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,P.jsx)(ai,{size:18}),(0,P.jsxs)(Kf,{children:[(0,P.jsxs)(`strong`,{children:[i,r&&re(t),a]}),o]}),(0,P.jsx)(Jf,{children:(0,P.jsx)(Yf,{$used:n,$tone:w(n)})})]},t.name)});return e.view===`grid`?(0,P.jsx)(zf,{children:t}):(0,P.jsx)(Wf,{children:t})},Ut=()=>{let e=async e=>{we(e.id);try{await Ec(e.host,e.port)}finally{we(null)}},t=async()=>{let e=Te.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){we(`manual`);try{await Ec(n,r)}finally{we(null)}}};return(0,P.jsxs)(cp,{children:[(0,P.jsxs)(lp,{children:[(0,P.jsx)(up,{onChange:e=>Ee(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:D(`Address, e.g. 192.168.1.20:45701`),value:Te}),(0,P.jsx)(hp,{disabled:Ce!==null||!Te.includes(`:`),onClick:()=>void t(),type:`button`,children:D(Ce===`manual`?`Pairing…`:`Pair by address`)})]}),H.length===0&&(0,P.jsx)(sp,{children:D(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),H.map(t=>(0,P.jsxs)(dp,{children:[(0,P.jsxs)(fp,{children:[(0,P.jsx)(ea,{size:14}),(0,P.jsx)(pp,{title:t.host,children:t.name}),(0,P.jsx)(mp,{$online:t.online,children:t.paired?t.online?D(`Paired`):D(`Offline`):D(`Not paired`)}),!t.paired&&t.online&&(0,P.jsx)(hp,{disabled:Ce===t.id,onClick:()=>void e(t),type:`button`,children:Ce===t.id?D(`Pairing…`):D(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,P.jsx)(Uf,{children:D(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,P.jsxs)(Gf,{onClick:n=>c(Nc(t.id,e.id),Gt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,P.jsx)(ea,{size:14}),(0,P.jsxs)(Kf,{children:[(0,P.jsx)(`strong`,{children:e.name}),(0,P.jsx)(Uf,{children:t.name})]}),(0,P.jsx)(na,{size:12})]},e.id))]},t.id))]})},Wt=e=>{switch(e.kind){case`share`:return Ut();case`favorites`:return G(e);case`quick`:{let t=zt(e);return!O&&t.length===0?(0,P.jsx)(sp,{children:D(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,P.jsxs)(zf,{children:[t.map(t=>(0,P.jsxs)(Bf,{$plain:O,$selected:De===t.path,...Rt(e,t.path),onClick:e=>{!O&&!ot(t.path,!0)&&c(t.path,Gt(e))},onDoubleClick:()=>!O&&x?.(t.path),onContextMenu:e=>!O&&st(e,t.path,!0),title:t.path,children:[O&&(0,P.jsx)(np,{onClick:n=>{n.stopPropagation(),It(e,t.path)},title:D(`Remove from Quick access`),type:`button`,children:(0,P.jsx)(xi,{size:11})}),(0,P.jsxs)(ep,{children:[O?(0,P.jsx)(tp,{onClick:e=>{e.stopPropagation(),pe(ft(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,P.jsx)(Vf,{children:(0,P.jsx)(Os,{place:t})})}):(0,P.jsx)(Vf,{children:(0,P.jsx)(Os,{place:t})}),ft(t.path)&&(0,P.jsx)(Vd,{onPick:e=>void pt(t.path,e),value:k?.placeIcons?.[t.path]??t.icon})]}),(0,P.jsxs)(Hf,{children:[_e?.path===t.path?(0,P.jsx)(`strong`,{children:(0,P.jsx)(_p,{onCancel:()=>V(null),onChange:e=>V({path:t.path,name:e}),onCommit:()=>void mt(t.path,_e?.name??``),value:_e?.name??``})}):(0,P.jsxs)(`strong`,{children:[t.name,O&&(0,P.jsx)(rp,{onClick:e=>{e.stopPropagation(),pe(null),V({path:t.path,name:t.name})},title:D(`Rename folder`),type:`button`,children:(0,P.jsx)(Bi,{size:11})})]}),(0,P.jsx)(Uf,{children:t.path})]})]},t.path)),O&&(0,P.jsxs)(qf,{onClick:()=>void Ft(e),title:D(`Pin a folder here`),type:`button`,children:[(0,P.jsx)(Vf,{children:(0,P.jsx)(li,{size:15})}),(0,P.jsxs)(Hf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Uf,{children:D(`Pin a directory here`)})]})]})]}):(0,P.jsxs)(Wf,{children:[t.map(t=>(0,P.jsxs)(Gf,{$selected:De===t.path,...Rt(e,t.path),onClick:e=>{!O&&!ot(t.path,!0)&&c(t.path,Gt(e))},onDoubleClick:()=>!O&&x?.(t.path),onContextMenu:e=>!O&&st(e,t.path,!0),title:t.path,type:`button`,children:[(0,P.jsxs)(ep,{children:[O?(0,P.jsx)(tp,{onClick:e=>{e.stopPropagation(),pe(ft(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,P.jsx)(Os,{place:t,size:15})}):(0,P.jsx)(Os,{place:t,size:15}),ft(t.path)&&(0,P.jsx)(Vd,{onPick:e=>void pt(t.path,e),value:k?.placeIcons?.[t.path]??t.icon})]}),(0,P.jsxs)(Kf,{children:[_e?.path===t.path?(0,P.jsx)(`strong`,{children:(0,P.jsx)(_p,{onCancel:()=>V(null),onChange:e=>V({path:t.path,name:e}),onCommit:()=>void mt(t.path,_e?.name??``),value:_e?.name??``})}):(0,P.jsxs)(`strong`,{children:[t.name,O&&(0,P.jsx)(rp,{onClick:e=>{e.stopPropagation(),pe(null),V({path:t.path,name:t.name})},title:D(`Rename folder`),type:`button`,children:(0,P.jsx)(Bi,{size:11})})]}),(0,P.jsx)(Uf,{children:t.path})]}),O&&(0,P.jsx)(np,{$inline:!0,onClick:n=>{n.stopPropagation(),It(e,t.path)},title:D(`Remove from Quick access`),type:`button`,children:(0,P.jsx)(xi,{size:11})})]},t.path)),O&&(0,P.jsxs)(qf,{$row:!0,onClick:()=>void Ft(e),title:D(`Pin a folder here`),type:`button`,children:[(0,P.jsx)(li,{size:15}),(0,P.jsxs)(Kf,{children:[(0,P.jsx)(`strong`,{children:D(`Add folder`)}),(0,P.jsx)(Uf,{children:D(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,P.jsx)(vp,{mode:e.view,onContextMenu:st,onOpen:c,onPick:x,onSelectionChange:S,version:s});case`recent`:return Bt(e);case`drives`:return Vt(e);default:return(0,P.jsx)(yp,{mode:e.view,onContextMenu:st,onOpen:c,onPick:x,onSelectionChange:S,openOnSingleClick:k?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:k?.showCheckboxes??!0,visibilityVersion:g})}};return(0,P.jsxs)(Yd,{$flush:!!k?.overviewBanner,ref:Re,children:[!b&&(0,P.jsxs)(wf,{$overlay:!!k?.overviewBanner,children:[(0,P.jsx)(Tf,{role:`group`,title:D(`Columns`),children:[1,2,3,4,5].map(e=>(0,P.jsx)(Ef,{$active:vt===e,onClick:()=>void yt({overviewColumns:e}),title:o(D,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),O&&(0,P.jsxs)(Of,{children:[(0,P.jsxs)(Df,{onClick:()=>me(e=>!e),onPointerDown:e=>e.stopPropagation(),title:D(`Add a panel`),type:`button`,children:[(0,P.jsx)(li,{size:12}),D(`Add panel ▾`)]}),B&&(0,P.jsx)(kf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,P.jsx)(Af,{onClick:()=>{me(!1),Pt(e)},type:`button`,children:D(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),O&&(0,P.jsxs)(Df,{onClick:()=>void bt(),title:D(`Put every panel back the way the app ships it`),type:`button`,children:[(0,P.jsx)(ci,{size:12}),D(`Restore default panels`)]}),Me.available&&(0,P.jsx)(Rf,{onClick:e=>Me.open(e.clientX,e.clientY),title:D(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{size:14})}),(0,P.jsxs)(Df,{onClick:()=>{se(e=>!e),me(!1),pe(null),V(null),ge(null)},title:D(O?`Done`:`Edit`),type:`button`,children:[O?(0,P.jsx)(bi,{size:13}):(0,P.jsx)(Bi,{size:13}),D(O?`Done`:`Edit`)]})]}),ve&&(0,P.jsx)(op,{children:ve}),k?.overviewBanner&&(0,P.jsxs)(Xd,{ref:ze,style:{height:`${Ve}px`,"--banner-image-width":`${$e}px`,"--banner-image-shift":`${nt}px`,"--banner-travel":`${tt}px`,"--banner-overlap":`0px`},children:[(0,P.jsx)(Zd,{children:de?(0,P.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&qe({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:I??void 0}):(0,P.jsx)(`img`,{alt:``,onLoad:e=>{let t=M?1920:e.currentTarget.naturalWidth||1920,n=M?1080:e.currentTarget.naturalHeight||1080;qe({width:t,height:n})},ref:Be,src:I??void 0})}),O&&(0,P.jsx)(Qd,{onDoubleClick:()=>{Le.current=null,Fe(null),yt({overviewBannerHeight:220})},onPointerCancel:Dt,onPointerDown:Tt,onPointerMove:Et,onPointerUp:Dt,title:D(`Drag to resize; double-click to reset`)})]}),(0,P.jsxs)($d,{$offset:k?.overviewBanner?100:0,children:[O&&(0,P.jsxs)(ef,{children:[(0,P.jsxs)(tf,{children:[(0,P.jsx)(nf,{children:D(`Banners`)}),k?.overviewBanner&&(0,P.jsxs)(Df,{onClick:()=>at(!0),title:D(`Adjust framing…`),type:`button`,children:[(0,P.jsx)(Bi,{size:12}),D(`Adjust framing…`)]})]}),(0,P.jsxs)(rf,{children:[(0,P.jsx)(cf,{children:(0,P.jsx)(lf,{$active:!k?.overviewBanner,onClick:Ct,title:D(`No banner`),type:`button`,children:(0,P.jsxs)(ff,{children:[(0,P.jsx)(xi,{size:16}),(0,P.jsx)(`span`,{children:D(`No banner`)})]})})}),Mu.map(e=>(0,P.jsx)(cf,{children:(0,P.jsx)(lf,{$active:k?.overviewBanner===e.id,onClick:()=>void yt({overviewBanner:e.id}),title:`${D(e.concept)} · ${D(e.preset)}`,type:`button`,children:(0,P.jsx)(Wd,{poster:e.url,source:e.id})})},e.id)),Au.map(e=>(0,P.jsx)(cf,{children:(0,P.jsxs)(lf,{$active:k?.overviewBanner===e.id,onClick:()=>void yt({overviewBanner:e.id}),title:D(e.name),type:`button`,children:[(0,P.jsx)(Wd,{poster:e.poster,source:e.id}),(0,P.jsx)(df,{children:(0,P.jsx)(Oi,{size:11})})]})},e.id)),(k?.overviewBanners??[]).map(e=>(0,P.jsxs)(cf,{children:[(0,P.jsx)(lf,{$active:k?.overviewBanner===e||k?.overviewBanner===`url:${e}`,onClick:()=>void yt({overviewBanner:C(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,P.jsx)(Wd,{source:e})}),(0,P.jsx)(uf,{onClick:()=>wt(e),title:D(`Remove`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]},e)),(0,P.jsxs)(Cf,{onClick:()=>void xt(),title:D(`Add banner…`),type:`button`,children:[(0,P.jsx)(li,{size:18}),(0,P.jsx)(`span`,{children:D(`Add banner…`)})]})]}),(0,P.jsxs)(af,{children:[(0,P.jsx)(of,{onChange:e=>z(e.target.value),onKeyDown:e=>{e.key===`Enter`&&St()},placeholder:`https://…`,value:R}),(0,P.jsx)(sf,{disabled:!C(R),onClick:()=>void St(),type:`button`,children:D(`Add URL`)})]})]}),(0,P.jsx)(jf,{ref:ut,$columns:vt,children:lt.map(e=>{let t=W.indexOf(e.id);return(0,P.jsxs)(Mf,{children:[(0,P.jsxs)(Nf,{children:[(0,P.jsxs)(Pf,{children:[(0,P.jsxs)(ep,{children:[O?(0,P.jsx)(tp,{onClick:()=>pe(dt(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,P.jsx)(Ds,{panel:e,size:15})}):(0,P.jsx)(Ds,{panel:e,size:15}),dt(e.id)&&(0,P.jsx)(Vd,{onPick:t=>Nt(e.id,t),value:e.icon})]}),O?(0,P.jsx)(Lf,{defaultValue:e.title,onBlur:t=>kt(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,P.jsx)(If,{children:D(e.title)})]}),(0,P.jsxs)(Ff,{children:[!O&&e.kind===`recent`&&(0,P.jsx)(Df,{onClick:()=>void He().then(u),title:D(`Clear`),type:`button`,children:D(`Clear`)}),!O&&e.kind===`frequent`&&(0,P.jsx)(Df,{onClick:()=>void Ue().then(()=>m?.()),title:D(`Clear the frequent list`),type:`button`,children:D(`Clear`)}),!O&&(e.kind===`home`||e.kind===`folder`)&&(0,P.jsx)(Df,{onClick:()=>c(e.path??a),title:D(`Open folder`),type:`button`,children:D(`Open`)}),O&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Rf,{$active:e.pinned,onClick:()=>jt(e.id),title:e.pinned?D(`Unpin from the sidebar`):D(`Pin to the sidebar`),type:`button`,children:(0,P.jsx)(mi,{size:12})}),(0,P.jsx)(Rf,{$active:e.view===`list`,onClick:()=>At(e.id,`list`),title:D(`List`),type:`button`,children:(0,P.jsx)(hi,{size:13})}),(0,P.jsx)(Rf,{$active:e.view===`grid`,onClick:()=>At(e.id,`grid`),title:D(`Grid`),type:`button`,children:(0,P.jsx)(gi,{size:13})}),(0,P.jsx)(Rf,{disabled:t===0,onClick:()=>Ot(e.id,-1),title:D(`Move up`),type:`button`,children:(0,P.jsx)(si,{size:12})}),(0,P.jsx)(Rf,{disabled:t===W.length-1,onClick:()=>Ot(e.id,1),title:D(`Move down`),type:`button`,children:(0,P.jsx)(si,{size:12})}),(0,P.jsx)(Rf,{onClick:()=>Mt(e.id),title:D(`Remove panel`),type:`button`,children:(0,P.jsx)(xi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Wt(e):(0,P.jsx)(Zf,{children:Wt(e)})]},e.id)})})]}),it&&I&&(0,P.jsx)(Gd,{height:Ve,offset:Ye,onCancel:()=>at(!1),onSave:e=>{yt({overviewBannerOffset:e}),at(!1)},source:I,video:de}),U&&(0,P.jsx)(lo,{directory:a,menu:{x:U.x,y:U.y,paths:[U.target.path]},onClose:()=>Ne(null),onCopy:(e,t)=>void _t(e,t),onAddToTray:ee,onAddFavorite:te,onRemoveFavorite:ne,favoritePaths:ie,onExtractArchive:T,onOpen:ct,onOpenFile:e=>x?x(e):void xe(e),shortcuts:Ht,target:U.target})]})}function _p({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=L();return(0,P.jsxs)(ip,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,P.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,P.jsx)(ap,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,P.jsx)(xi,{size:11})}),(0,P.jsx)(ap,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,P.jsx)(bi,{size:12})})]})}function vp({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=L(),[c,l]=(0,E.useState)(null),[u,d]=(0,E.useState)(null),f=Fn(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,E.useEffect)(()=>{Be().then(l,()=>l([]))},[a]),!c)return(0,P.jsx)(sp,{children:s(`Reading…`)});if(c.length===0)return(0,P.jsx)(sp,{children:s(`Folders you open often show up here.`)});let m=e=>o(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,P.jsx)(zf,{children:c.map(e=>{let i=In(f,e.path);return(0,P.jsxs)(Bf,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Gt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,P.jsx)(Vf,{children:i&&f.useIcons?(0,P.jsx)(Os,{place:i,size:18}):(0,P.jsx)(Ks,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(Hf,{children:[(0,P.jsx)(`strong`,{children:i?.name||e.name}),(0,P.jsx)(Uf,{children:m(e)})]})]},e.path)})}):(0,P.jsx)(Wf,{children:c.map(e=>{let i=In(f,e.path);return(0,P.jsxs)(Gf,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Gt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,P.jsx)(Os,{place:i,size:15}):(0,P.jsx)(Ks,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,P.jsxs)(Kf,{children:[(0,P.jsx)(`strong`,{children:i?.name||e.name}),(0,P.jsx)(Uf,{children:m(e)})]})]},e.path)})})}function yp({path:e,mode:n,onOpen:r,onContextMenu:i,onPick:a,onSelectionChange:o,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:l,visibilityVersion:u}){let d=L(),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=Fn();return(0,E.useEffect)(()=>{e&&(p(null),H(e).then(p,()=>p(null)))},[e,u]),(0,E.useEffect)(()=>{if(N.available)return N.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&H(e,!1).then(p,()=>void 0)})},[e]),f?n===`list`?(0,P.jsx)(Xf,{children:(0,P.jsx)(ol,{error:null,listing:f,loading:!1,onOpen:a??r,onOpenFile:a??(e=>void xe(e)),onRefresh:()=>void H(e,!1).then(p,()=>void 0),onRename:(e,n)=>p(r=>r&&{...r,entries:r.entries.map(r=>t(r.fullPath,e)?{...r,name:v(n),fullPath:n}:r)}),onSelectionChange:o,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:l,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...ve,columns:ye.columns??[]}})}):(0,P.jsx)(Zf,{children:f.entries.length===0?(0,P.jsx)(sp,{children:d(`This folder is empty.`)}):(0,P.jsx)(Qf,{children:f.entries.map(e=>{let t=In(g,e.fullPath);return(0,P.jsxs)($f,{$selected:m===e.fullPath,onClick:t=>{a?(h(e.fullPath),o?.([e.fullPath])):e.isDirectory?r(e.fullPath,Gt(t)):xe(e.fullPath)},onDoubleClick:()=>a?.(e.fullPath),onContextMenu:t=>i?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&g.useIcons?(0,P.jsx)(Os,{place:t,size:16}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,P.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,P.jsx)(sp,{children:d(`Reading…`)})}var bp=`yafm://`,xp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Sp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function Cp(e){return`${bp}${e===`home`?`overview`:e}`}function wp(e){return Sp(e)?xp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Tp(e){let t=e.trim();if(t.length===0)return null;if(!Sp(t))return t;let n=xp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Cp(n):null}function Ep({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=L(),s=Fn(),[c,l]=(0,E.useState)(!1),[u,d]=(0,E.useState)(``),[f,p]=(0,E.useState)([]),[m,h]=(0,E.useState)(0),[g,_]=(0,E.useState)(null),[v,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(null),S=(0,E.useRef)(null),ee=(0,E.useRef)(null),te=(0,E.useRef)(0);(0,E.useEffect)(()=>{if(!jc(e)){x(null);return}let t=Mc(e);if(!t){x(null);return}let n=!0;return wc().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);x({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&x(null)),()=>{n=!1}},[e]),(0,E.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,E.useEffect)(()=>{r&&r!==te.current&&(te.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,E.useEffect)(()=>{c&&S.current?.select()},[c]),(0,E.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let ne=()=>{d(e.replace(/\\/g,`/`)),l(!0)},re=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,E.useEffect)(()=>{if(!c){p([]);return}let e=Ap(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{H(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let C=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,E.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=ee.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,P.jsxs)(Ip,{onPointerDown:e=>e.stopPropagation(),ref:ee,children:[(0,P.jsxs)(Bp,{children:[(0,P.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?C(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):re(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:S,spellCheck:!1,value:u}),(0,P.jsx)(Vp,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,P.jsx)(xi,{size:12})}),(0,P.jsx)(Vp,{$apply:!0,onClick:re,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,P.jsx)(bi,{size:14})})]}),f.length>0&&g&&(0,Pa.createPortal)((0,P.jsx)(Lp,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,P.jsxs)(Rp,{$active:t===m,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,P.jsx)(Ks,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,P.jsx)(zp,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:Dp(e,b)??kp(e,s.places);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(jp,{onClick:ne,title:o(`Click to type a path`),children:w.map((t,n)=>(0,P.jsxs)(Mp,{$last:n===w.length-1,children:[n>0&&(0,P.jsx)(Pp,{children:(0,P.jsx)(fi,{size:9})}),(0,P.jsxs)(Fp,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,P.jsx)(Np,{children:(0,P.jsx)(Os,{place:t.place,size:13})}):t.icon&&(0,P.jsx)(Np,{children:t.icon}),t.label]})]},t.path))}),v&&(0,P.jsx)(Za,{items:[{label:o(`Open`),icon:(0,P.jsx)(di,{size:14}),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),icon:(0,P.jsx)(li,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`Copy as path`),icon:(0,P.jsx)(oa,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...Sp(v.path)?[{label:o(`Open with…`),icon:(0,P.jsx)(Mi,{size:14}),onSelect:()=>void jt(v.path)},{label:o(`Properties`),icon:(0,P.jsx)(pi,{size:14}),onSelect:()=>void At([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function Dp(e,t){let n=Mc(e);if(!n)return null;let r=Nc(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,P.jsx)(ea,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Op(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function kp(e,n){let r=Op(e),i=-1,a=null;for(let e of Object.values(n)){if(e.name.trim().length===0)continue;let n=r.findIndex(n=>t(n.path,e.path));n>i&&(i=n,a=e)}return a&&i>=0&&r.splice(0,i+1,{label:a.name,path:r[i].path,place:a}),r}function Ap(e){if(Sp(e)||jc(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var jp=_.div`
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
`,Mp=_.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Np=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Pp=_.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Fp=_.button`
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
`,Ip=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Lp=_.div`
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
`,Rp=_.button`
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
`,zp=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bp=_.div`
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
`,Vp=_.button`
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
`,Hp=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,P.jsx)(`path`,{d:`M4 4v6h6`})]});function Up({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,showDetails:i=!0,onShowDetails:a,videoAudio:s=!1,videoAutoplay:c=!1,platform:l}){let u=L(),d=Kc(`recycle`),p=l===`windows`,[m,h]=(0,E.useState)([]),[g,_]=(0,E.useState)([]),[v,b]=(0,E.useState)(!1),[x,S]=(0,E.useState)(null),[ee,te]=(0,E.useState)(!0),[ne,re]=(0,E.useState)(!1),[C,w]=(0,E.useState)(null),[ie,T]=(0,E.useState)(!1),[ae,D]=(0,E.useState)(()=>new Set),[oe,O]=(0,E.useState)(null),[se,k]=(0,E.useState)(()=>{let e=Bn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[A,j]=(0,E.useState)(null),[M,ce]=(0,E.useState)(null),[le,N]=(0,E.useState)(()=>{let e=Rn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),ue=(0,E.useRef)(null),de=e=>{N(e),zn(`yafm.recycle.preview.width`,e)},F=(0,E.useCallback)(async()=>{te(!0),w(null);try{h(await je(ie))}catch(e){w(e instanceof Error?e.message:String(e))}finally{te(!1)}},[ie]),I=(0,E.useCallback)(async()=>{try{h(await je(ie))}catch{}},[ie]);(0,E.useEffect)(()=>{F()},[F]),(0,E.useEffect)(()=>{let e=window.setInterval(()=>void I(),1e4);return()=>window.clearInterval(e)},[I]),(0,E.useEffect)(()=>{ie||(_([]),b(!1),S(null))},[ie]),(0,E.useEffect)(()=>{D(e=>{let t=new Set(m.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[m]);let R=(0,E.useMemo)(()=>{let e=new Set(m.map(e=>e.id));return[...m,...g.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Wp(e,t,se.column);return se.descending?-n:n})},[m,g,se]),z=(0,E.useMemo)(()=>!t?.open||t.query.trim().length===0?R:R.filter(e=>Dn(e.name,t)||Dn(e.originalPath,t)),[R,t?.open,t?.query,t?.matchCase,t?.regex]),fe=(0,E.useRef)(null);Bd(fe,t??null,`[data-search-block]`,n??(()=>void 0),[R]),(0,E.useEffect)(()=>{D(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,E.useEffect)(()=>{r&&D(new Set(z.map(e=>e.id)))},[r]);let pe=(0,E.useMemo)(()=>R.filter(e=>ae.has(e.id)),[R,ae]),B=pe.filter(e=>e.removable&&!e.isOrphan),me=pe.filter(e=>e.removable),he=(e,t)=>{let n=t.ctrlKey||t.metaKey;D(r=>{if(t.shiftKey&&oe){let t=R.findIndex(e=>e.id===oe),i=R.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(R[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),O(e.id)},ge=(0,E.useCallback)(()=>D(new Set(z.map(e=>e.id))),[z]),_e=z.length>0&&z.every(e=>ae.has(e.id)),V=(0,E.useCallback)(async()=>{let e=B.map(e=>e.id);if(e.length!==0){re(!0);try{let t=await Ne(e);t.ok||await Sa(o(u,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),D(new Set),await F()}finally{re(!1)}}},[F,B,u]),ve=(0,E.useCallback)(async()=>{let e=me.map(e=>e.id);if(ce(null),e.length!==0){re(!0);try{let t=await Pe(e);!t.ok&&!t.cancelled&&await Sa(o(u,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),D(new Set),await F()}finally{re(!1)}}},[me,F,u]),ye=async()=>{ce(null),re(!0);try{await U(ie),D(new Set),await F()}finally{re(!1)}},be=async()=>{re(!0),S(null);try{let e=await Ie();if(e.cancelled){S(`Elevation was declined — nothing was read.`);return}if(e.failed){S(`The elevated helper could not produce a report. Try again.`);return}_(e.entries),b(!0)}finally{re(!1)}},xe=async()=>{re(!0),ce(null);try{await Le(),_([]),b(!1),S(null),await F()}finally{re(!1)}},H=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},Se=e=>{navigator.clipboard.writeText(e.originalPath)},Ce=(e,t)=>{e.preventDefault(),t&&!ae.has(t.id)&&D(new Set([t.id])),j({x:e.clientX,y:e.clientY})};(0,E.useEffect)(()=>(Vc(`recycle`,ae.size>0?(e,t)=>j({x:e,y:t}):null),()=>Vc(`recycle`,null)),[ae]),(0,E.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),ge()):e.key===`Delete`?(e.preventDefault(),me.length>0&&ce(`delete`)):e.key===`Enter`&&B.length>0?(e.preventDefault(),V()):e.key===`Escape`&&(D(new Set),j(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[me.length,B.length,V,ge]);let we=[{label:u(`Restore`),icon:(0,P.jsx)(Hp,{width:14,height:14}),disabled:B.length===0,onSelect:()=>void V()},{label:u(`Delete permanently`),icon:(0,P.jsx)(yi,{size:14}),danger:!0,disabled:me.length===0,onSelect:()=>ce(`delete`)},{label:u(`Properties`),icon:(0,P.jsx)(pi,{size:14}),disabled:pe.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=pe;e&&Fe(e.id)}},{label:u(`Open original location`),icon:(0,P.jsx)(ri,{size:14}),disabled:pe.length!==1,onSelect:()=>{let[e]=pe;e&&H(e)}},{label:u(`Copy original path`),icon:(0,P.jsx)(oa,{size:14}),disabled:pe.length!==1,onSelect:()=>{let[e]=pe;e&&Se(e)}},{label:u(`Select all`),separatorBefore:!0,onSelect:ge},{label:u(`Refresh`),icon:(0,P.jsx)(ci,{size:14}),onSelect:()=>void F()}],Te=pe.length>0?pe[0]:null,Ee=Te?{name:Te.name,path:Te.contentPath||Te.originalPath,isDirectory:Te.isDirectory,size:Te.size,modified:Te.deleted,fields:[{label:u(`Type`),value:u(Kp(Te))},{label:u(`Original location`),value:Te.originalPath},{label:u(`Date deleted`),value:y(Te.deleted)},{label:u(`Size`),value:Te.isDirectory?`—`:f(Te.size)},...Te.owner?[{label:u(`Owner`),value:Te.owner}]:[],{label:u(`Status`),value:Te.isOrphan?u(`Metadata only`):Te.removable?u(`Restorable`):u(`Other profile`)}]}:null;return(0,P.jsxs)(Jp,{ref:ue,onContextMenu:e=>Ce(e),children:[(0,P.jsxs)(Yp,{children:[(0,P.jsxs)(Xp,{children:[(0,P.jsx)(yi,{size:16}),(0,P.jsx)(`span`,{children:u(`Recycle Bin`)}),(0,P.jsxs)(Zp,{children:[ee?`…`:o(u,R.length,`1 item`,`{count} items`),ae.size>0&&` · ${u(`{count} selected`,{count:ae.size})}`]})]}),(0,P.jsxs)(Qp,{children:[(0,P.jsx)(em,{$on:ie,onClick:()=>T(e=>!e),title:u(`Show metadata records whose content is already gone`),type:`button`,children:u(`Orphans`)}),ie&&p&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)($p,{disabled:ne||v,onClick:()=>void be(),title:u(v?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:u(ne?`Working…`:v?`Admin view loaded`:`Show all (admin)…`)}),v&&g.length>0&&(0,P.jsx)($p,{disabled:ne,onClick:()=>ce(`purge`),type:`button`,children:u(`Delete every orphan`)})]}),(0,P.jsx)($p,{disabled:ne||B.length===0,onClick:()=>void V(),type:`button`,children:u(`Restore`)}),(0,P.jsx)($p,{$danger:!0,disabled:ne||me.length===0,onClick:()=>ce(`delete`),type:`button`,children:u(`Delete`)}),(0,P.jsx)($p,{disabled:ne||R.length===0,onClick:()=>ce(`empty`),type:`button`,children:u(`Empty`)}),(0,P.jsx)(tm,{onClick:()=>void F(),title:u(`Refresh`),type:`button`,children:(0,P.jsx)(ci,{size:14})}),d.available&&(0,P.jsx)(tm,{onClick:e=>d.open(e.clientX,e.clientY),title:u(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{size:14})})]})]}),x&&(0,P.jsx)(Sm,{children:x}),C&&(0,P.jsx)(Cm,{children:C}),!C&&!ee&&(t?.open&&t.query.trim().length>0?z.length===0:R.length===0)&&(0,P.jsx)(Cm,{children:t?.open&&t.query.trim().length>0?u(`No matching items.`):u(`The recycle bin is empty.`)}),R.length>0&&(0,P.jsxs)(xm,{children:[(0,P.jsxs)(nm,{ref:fe,children:[(0,P.jsxs)(im,{children:[(0,P.jsx)(um,{$checked:_e,$partial:!_e&&ae.size>0,onClick:()=>_e?D(new Set):ge(),title:u(_e?`Select none`:`Select all`),type:`button`,children:_e?(0,P.jsx)(bi,{size:9}):ae.size>0&&(0,P.jsx)(dm,{})}),(0,P.jsxs)(am,{onClick:()=>De(`name`),type:`button`,children:[u(`Name`),Gp(se,`name`)]}),(0,P.jsxs)(am,{onClick:()=>De(`original`),type:`button`,children:[u(`Original location`),Gp(se,`original`)]}),(0,P.jsxs)(am,{onClick:()=>De(`deleted`),type:`button`,children:[u(`Date deleted`),Gp(se,`deleted`)]}),(0,P.jsxs)(am,{onClick:()=>De(`size`),type:`button`,children:[u(`Size`),Gp(se,`size`)]}),(0,P.jsxs)(am,{onClick:()=>De(`type`),type:`button`,children:[u(`Type`),Gp(se,`type`)]}),(0,P.jsx)(`span`,{})]}),(0,P.jsx)(om,{onClick:e=>{e.target===e.currentTarget&&D(new Set)},children:R.map(e=>(0,P.jsxs)(sm,{$checked:ae.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>he(e,t),onContextMenu:t=>Ce(t,e),onDoubleClick:()=>{D(new Set([e.id])),O(e.id),a?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,P.jsx)(lm,{$checked:ae.has(e.id),children:ae.has(e.id)&&(0,P.jsx)(bi,{size:9})}),(0,P.jsxs)(fm,{children:[(0,P.jsx)(qp,{entry:e}),(0,P.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,P.jsx)(bm,{children:u(`Metadata only`)}),e.owner&&(0,P.jsx)(bm,{$other:!0,children:u(`Other profile`)})]}),(0,P.jsx)(mm,{children:e.originalPath}),(0,P.jsx)(hm,{children:y(e.deleted)}),(0,P.jsx)(gm,{children:e.isDirectory?`—`:f(e.size)}),(0,P.jsx)(_m,{children:u(Kp(e))}),(0,P.jsxs)(vm,{children:[e.removable&&!e.isOrphan&&(0,P.jsx)(ym,{onClick:t=>{t.stopPropagation(),Ne([e.id]).then(F)},title:u(`Restore to its original folder`),type:`button`,children:(0,P.jsx)(Hp,{})}),e.removable&&(0,P.jsx)(ym,{$danger:!0,onClick:t=>{t.stopPropagation(),D(new Set([e.id])),ce(`delete`)},title:e.isOrphan?u(`Remove the leftover record`):u(`Delete permanently`),type:`button`,children:(0,P.jsx)(yi,{size:13})})]})]},e.id))})]}),i&&(0,P.jsx)(Xo,{emptyNote:u(`Nothing selected.`),info:Ee,onWidth:de,selectionNote:pe.length>1?o(u,pe.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:s,videoAutoplay:c,width:le})]}),A&&(0,P.jsx)(Za,{items:we,onClose:()=>j(null),x:A.x,y:A.y}),(0,P.jsx)(zo,{confirmLabel:u(M===`empty`?`Empty the bin`:M===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:M===`empty`?o(u,R.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):M===`purge`?u(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):o(u,me.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>ce(null),onConfirm:()=>{M===`empty`?ye():M===`purge`?xe():ve()},open:M!==null,title:u(M===`empty`?`Empty the recycle bin`:M===`purge`?`Delete every orphan`:`Delete permanently`)})]});function De(e){k(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Vn(`yafm.recycle.sort`,n),n})}}function Wp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return Kp(e).localeCompare(Kp(t),void 0,{sensitivity:`base`})}}function Gp(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function Kp(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function qp({entry:e}){let t=J(e.originalPath,e.isDirectory);return(0,P.jsx)(pm,{children:t?(0,P.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,P.jsx)(ri,{}):(0,P.jsx)(ii,{})})}var Jp=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Yp=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Xp=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Zp=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Qp=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,$p=_.button`
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
`,em=_($p)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,tm=_.button`
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
`,nm=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,rm=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,im=_.div`
    display: grid;
    grid-template-columns: ${rm};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,am=_.button`
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
`,om=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,sm=_.div`
    display: grid;
    grid-template-columns: ${rm};
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
`,cm=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lm=_.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,um=_.button`
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
`,dm=_.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,fm=_(cm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,pm=_.span`
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
`,mm=_(cm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,hm=_(cm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,gm=_(cm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,_m=_(cm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,vm=_.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,ym=_.button`
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
`,bm=_.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,xm=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Sm=_.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Cm=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function wm(){return N.available?(await N.request(`app.tags`)).tags:[]}async function Tm(e){return!N.available||!e?!1:(await N.request(`app.tags.delete`,{name:e})).ok}async function Em(e,t){return!N.available||!e?[]:(await N.request(`app.tags.create`,{name:e,color:t})).tags}async function Dm(e,t){return!N.available||!e?!1:(await N.request(`app.tags.color`,{name:e,color:t})).ok}async function Om(e,t){return!N.available||!e||!t?!1:(await N.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function km(){let e=L();return(0,P.jsx)(Am,{title:e(`Always applies to every folder`),children:e(`Global`)})}var Am=_.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,jm=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function Mm(e){return`"${e.replaceAll(`"`,``)}"`}function Nm(e){let t=document.documentElement.style;for(let n of jm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Mm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Pm(){return N.available?(await N.request(`app.fonts`)).fonts??[]:[]}function Fm({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=L(),[s,c]=(0,E.useState)(null),[l,u]=(0,E.useState)(``),d=(0,E.useRef)(null),f=(0,E.useRef)(null),p=(0,E.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,E.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Im,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,P.jsx)(Lm,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,P.jsx)(Rm,{children:`▾`})]}),s&&(0,Pa.createPortal)((0,P.jsxs)(zm,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,P.jsxs)(Bm,{children:[(0,P.jsx)(oi,{size:12}),(0,P.jsx)(Vm,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,P.jsxs)(Hm,{children:[(0,P.jsxs)(Um,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,P.jsxs)(Gm,{children:[n,` `,(0,P.jsx)(qm,{children:o(`(default)`)})]}),!e&&(0,P.jsx)(bi,{size:11})]}),p.map(t=>(0,P.jsxs)(Um,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,P.jsxs)(Wm,{children:[(0,P.jsx)(Gm,{children:t}),(0,P.jsx)(Km,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,P.jsx)(bi,{size:11})]},t)),p.length===0&&(0,P.jsx)(Jm,{children:o(`No matching font.`)})]})]}),document.body)]})}var Im=_.button`
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
`,Lm=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Rm=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,zm=_.div`
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
`,Bm=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,Vm=_.input`
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
`,Hm=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,Um=_.button`
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
`,Wm=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Gm=_.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Km=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,qm=_.span`
    color: var(--text-muted);
    font-size: 10px;
`,Jm=_.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Ym=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],Xm=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Zm=`en`,Qm=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],$m=new Date(2026,10,5,16,8).getTime(),eh=`system`,th={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},nh=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],rh=`yafm.colors.recent`;function ih(){let e=Bn(rh);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function ah({appInfo:e,focusSection:t,onSettingsChanged:n,onOpenFolder:r,find:i,onSearchMatches:a}){let s=L(),[c,l]=(0,E.useState)([]),[u,d]=(0,E.useState)(null),[p,g]=(0,E.useState)(null),[_,y]=(0,E.useState)(null),[x,S]=(0,E.useState)(``),[ee,te]=(0,E.useState)(`file`),[re,ie]=(0,E.useState)(!1),[T,ae]=(0,E.useState)(!1),[D,oe]=(0,E.useState)(null),[O,se]=(0,E.useState)(!1),[k,A]=(0,E.useState)(!1),[j,M]=(0,E.useState)(null),[ce,le]=(0,E.useState)(null),[N,ue]=(0,E.useState)(null),[F,I]=(0,E.useState)(!1),[R,z]=(0,E.useState)(null),[fe,pe]=(0,E.useState)(!1),[B,me]=(0,E.useState)(null),[he,ge]=(0,E.useState)(null),[_e,V]=(0,E.useState)(!1),[ve,be]=(0,E.useState)([]),[xe,H]=(0,E.useState)(null),[Se,Ce]=(0,E.useState)(!1),[we,Te]=(0,E.useState)(null),[Ee,De]=(0,E.useState)(``),[Oe,ke]=(0,E.useState)(ks),[Ae,je]=(0,E.useState)(null),[Me,U]=(0,E.useState)(null),[Ne,Pe]=(0,E.useState)(``),[Fe,Ie]=(0,E.useState)(``),[Le,Re]=(0,E.useState)(null),[ze,Be]=(0,E.useState)(ih),[Ve,He]=(0,E.useState)({}),[Ue,Ge]=(0,E.useState)(null),[Ke,qe]=(0,E.useState)(null),[Xe,Ze]=(0,E.useState)(!1),[it,ot]=(0,E.useState)(!1),[st,mt]=(0,E.useState)(null),[_t,vt]=(0,E.useState)(nh[0].id),[yt,bt]=(0,E.useState)([]),[xt,St]=(0,E.useState)(null),[Ct,wt]=(0,E.useState)(null),[Tt,Et]=(0,E.useState)(null),[Dt,Ot]=(0,E.useState)(!1),[kt,At]=(0,E.useState)(``),jt=(0,E.useRef)(null),Mt=(0,E.useRef)({}),Nt=p?.defaultView??ye,Pt=p?.themePresets??[],Ft=e?.platform===`windows`,It=Ft?ce?ce.registered&&ce.pathMatches:!1:p?.archiveHandler??!1,Lt=ce?.registered??p?.archiveHandler??!1,Rt=Ft?N?N.registered&&N.pathMatches:!1:p?.defaultFileManager??!1;Bd(jt,i??null,`section`,a??(()=>void 0),[p]),(0,E.useEffect)(()=>{let e=jt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){vt(nh[nh.length-1].id);return}let n=t+110,r=nh[0].id;for(let{id:e}of nh){let t=Mt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}vt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let zt=e=>t=>{Mt.current[e]=t},Bt=e=>{Mt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),vt(e)};(0,E.useEffect)(()=>{t&&Bt(t)},[t]),(0,E.useEffect)(()=>{de().then(e=>l(e.available),()=>l([]))},[]),(0,E.useEffect)(()=>{Pm().then(bt,()=>bt([]))},[]),(0,E.useEffect)(()=>{ht().then(wt,()=>wt(null))},[]),(0,E.useEffect)(()=>{ct().then(qe,()=>void 0)},[]),(0,E.useEffect)(()=>{We().then(d,()=>d(null)),Je().then(g,()=>g(null)),ft().then(se,()=>se(!1)),et().then(le,()=>le(null)),Qe().then(ue,()=>ue(null)),wm().then(be,()=>be([]))},[]),(0,E.useEffect)(()=>{let e=()=>void ut().then(oe,()=>oe(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let G=async e=>{if(!p)return;let t={...p,...e};Object.keys(e).every(e=>t[e]===p[e])||(g(t),sn(),g(await rt(t)),n())},Vt=async e=>{let t=await va(e);if(!t)return;let n=p?.backgroundCustom??[];await G({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Ut=async()=>{let e=kt.trim();if(!p||!C(e))return;let t=p.backgroundCustom??[];At(``),await G({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Wt=e=>{if(!p)return;let t=p.backgroundSource;G({backgroundCustom:p.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},Gt=async()=>{if(!p)return;let t=await _a();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.protectedPaths.includes(r)||await G({protectedPaths:[...p.protectedPaths,r]})},Jt=()=>{let e=Ne.trim();p&&e&&!p.protectedPaths.includes(e)&&(Pe(``),G({protectedPaths:[...p.protectedPaths,e]}))},Yt=()=>{if(!p||!Ae)return;let e=Ae.value.trim(),t=Ae.from;je(null),e.length!==0&&e!==t&&G({protectedPaths:p.protectedPaths.map(n=>n===t?e:n)})},Xt=e=>{p&&G({protectedPaths:p.protectedPaths.filter(t=>t!==e)})},Zt=async()=>{let e=await Ye();e.length>0&&await G({protectedPaths:e})},Qt=()=>{if(!p||!Me)return;let e=Me.value.trim(),t=Me.from;U(null),e&&e!==t&&G({directoryIndexBlacklist:p.directoryIndexBlacklist.map(n=>n===t?e:n)})},$t=()=>{let e=Fe.trim();p&&e&&!p.directoryIndexBlacklist.includes(e)&&(Ie(``),G({directoryIndexBlacklist:[...p.directoryIndexBlacklist,e]}))},en=async()=>{if(!p)return;let t=await _a();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.directoryIndexBlacklist.includes(r)||await G({directoryIndexBlacklist:[...p.directoryIndexBlacklist,r]})},tn=e=>{p&&G({directoryIndexBlacklist:p.directoryIndexBlacklist.filter(t=>t!==e)})},nn=()=>{G({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},rn=()=>{if(!p||Le===null)return;let e=Le.trim()||`yyyy/MM/dd HH:mm`;Re(null),e!==p.timeFormatPattern&&G({timeFormatPattern:e})},an=(e,t)=>{Be(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Vn(rh,i),i})},on=h(p?.accentColor,ne),cn=h(p?.secondaryColor,b),K=(e,t)=>{p&&(an(`accent`,on),an(`secondary`,cn),G({accentColor:e,secondaryColor:t}))},q=(e,t)=>{p&&(an(e,e===`accent`?on:cn),G(e===`accent`?{accentColor:t}:{secondaryColor:t}))},ln=async()=>{Ze(!0),ot(!1);try{qe(await lt())}catch{ot(!0)}finally{Ze(!1)}},J=async()=>{if(!p||!Ue)return;let e=Ue.name.trim()||`${Ue.accent.toUpperCase()} / ${Ue.secondary.toUpperCase()}`,t=[...p.themePresets,{name:e,accent:Ue.accent,secondary:Ue.secondary}];Ge(null),await G({themePresets:t})},un=async e=>{p&&await G({themePresets:p.themePresets.filter((t,n)=>n!==e)})},dn=e=>{let t=st;mt(null),t&&t.role===e&&(e===`accent`?on:cn).toLowerCase()!==t.color.toLowerCase()&&an(e,t.color)},fn=async()=>{let e=Ee.trim();if(e&&!Se){Ce(!0),Te(null);try{be(await Em(e,Oe)),De(``)}catch{Te(s(`Could not add the tag.`))}finally{Ce(!1)}}},pn=async(e,t)=>{be(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Dm(e,t)||Te(s(`Could not change the tag's color.`))},mn=async e=>{if(Se)return;Ce(!0),Te(null);let t=await Tm(e);be(await wm()),t||Te(`"${e}" is still used by a folder whose index could not be updated.`),Ce(!1)},hn=async()=>{let e=xe;if(!e||Se)return;let t=e.value.trim();t.length===0||t===e.name?H(null):(Ce(!0),Te(null),await Om(e.name,t)?(be(await wm()),H(null)):Te(`Could not rename "${e.name}".`),Ce(!1))},gn=async e=>{let t=new Set(Nt.columns??ye.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Zc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await G({defaultView:{...Nt,columns:n}})},_n=async()=>{if(k)return;let e=!O;A(!0),M(null);try{let t=await pt(e);se(t),g(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&M(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{M(`The request to Windows failed. Try again.`)}finally{A(!1)}},vn=async()=>{if(fe||!p)return;let e=!Rt;pe(!0),me(null);try{let t=await $e(e);ue(t);let r=Ft?t.registered&&t.pathMatches:e;g(e=>e&&{...e,defaultFileManager:r}),n(),Ft&&r!==e&&me(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{me(`The request to Windows failed. Try again.`)}finally{pe(!1)}},yn=async()=>{if(!F){I(!0),z(null);try{let e=await tt();le(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),n(),t||z(`Windows did not accept the archive registration. Try again.`)}catch{z(`The request to Windows failed. Try again.`)}finally{I(!1)}}},bn=async()=>{if(!F){I(!0),z(null);try{let e=await nt();le(e),g(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&z(`The registration is still there. Try turning it off again.`)}catch{z(`The request to Windows failed. Try again.`)}finally{I(!1)}}},xn=async(e,t)=>{if(!p)return;let n={...p.extensionIcons};t===null?delete n[e]:n[e]=t,await G({extensionIcons:n})},Sn={...Ht,...p?.shortcuts};(0,E.useEffect)(()=>{if(!he)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){ge(null);return}let t=Kt(e);t&&(ge(null),G({shortcuts:{...Sn,[he]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[he,p]),(0,E.useEffect)(()=>{if(!_e)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){V(!1);return}let t=Kt(e);t&&(V(!1),G({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[_e,p]);let Cn=async e=>{await G({recentLimit:Math.min(Math.max(e,0),50)})},wn=(e,t)=>{let n=t??Ve[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};He(t=>({...t,[e]:void 0})),G(i)},Tn=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;St(null),await G({sharePortMode:`custom`,sharePort:n}),await Oc(n,`custom`)},En=async e=>{let t=e===`custom`,n=t?p?.sharePort??8080:null;await G({sharePortMode:t?`custom`:`random`,sharePort:n}),await Oc(n,t?`custom`:`random`)},Dn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;Ot(!0),Et(null);try{let e=await gt(t);wt(e),Et(e.error),e.error||await G({startupMode:t})}finally{Ot(!1)}},On=async e=>{await G({galleryRoots:e.length>0?e:null})},kn=async()=>{let e=await _a(),t=p?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await On([...t,e])},An=async()=>{let e=x.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await xn(e,ee),S(``))},jn=async()=>{ae(!0);try{let e=await _a();if(!e)return;let t=await va([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await at(e.replace(/[\\/][^\\/]+$/,``),v(e),`file:${t}`)&&(sn(),y({folder:e,icon:t}))}finally{ae(!1)}},Mn=async(e,t)=>{let n={...p?.fonts};t?n[e]=t:delete n[e],await G({fonts:n})};return(0,P.jsxs)(_h,{children:[(0,P.jsxs)(vh,{ref:jt,children:[(0,P.jsxs)(yh,{ref:zt(`application`),children:[(0,P.jsx)(gh,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Version`)}),(0,P.jsx)(Yh,{children:e?`v${e.version}`:`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Platform`)}),(0,P.jsx)(Yh,{children:e?.platform??`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Logs`)}),(0,P.jsx)($,{children:s(`Application logs and crash details. Open the folder here to inspect them without leaving the app.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(Rg,{disabled:!e?.logDirectory,onClick:()=>e?.logDirectory&&r(e.logDirectory),type:`button`,children:s(`Open log folder`)})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Language`)}),(0,P.jsx)($,{children:s(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(ph,{disabled:!p,onChange:e=>void G({language:e}),options:[eh,...c.length>0?c:[Zm]],value:p?.language??Zm})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Picker window size`)}),(0,P.jsx)($,{children:s(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(ag,{inputMode:`numeric`,onBlur:e=>wn(`width`,e.currentTarget.value),onChange:e=>He(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ve.width??String(p?.pickerWindowWidth??1200)}),(0,P.jsx)(Yh,{children:`×`}),(0,P.jsx)(ag,{inputMode:`numeric`,onBlur:e=>wn(`height`,e.currentTarget.value),onChange:e=>He(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ve.height??String(p?.pickerWindowHeight??800)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Web server port`)}),(0,P.jsx)($,{children:s(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(po,{disabled:!p,onChange:e=>void En(e),options:[{value:`random`,label:s(`Random`)},{value:`custom`,label:s(`Custom port`)}],value:p?.sharePortMode??`random`,width:160})})]}),p?.sharePortMode===`custom`&&(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Custom port`)}),(0,P.jsx)($,{children:s(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(ag,{inputMode:`numeric`,onBlur:e=>void Tn(e.currentTarget.value),onChange:e=>St(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:xt??(p?.sharePort?String(p.sharePort):``)})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Link paths`)}),(0,P.jsx)($,{children:s(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(po,{disabled:!p,onChange:e=>void G({linkPathMode:e}),options:[{value:`relative`,label:s(`Relative`)},{value:`absolute`,label:s(`Absolute`)}],value:p?.linkPathMode??`relative`,width:160})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Global hotkey`)}),(0,P.jsx)($,{children:s(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Lg,{$listening:_e,disabled:!p,onClick:()=>V(!0),type:`button`,children:_e?s(`Press a key…`):p?.globalHotkey?qt(p.globalHotkey):s(`None`)}),p?.globalHotkey&&(0,P.jsx)(Qh,{onClick:()=>void G({globalHotkey:null}),type:`button`,children:s(`Clear`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Open yafm:// links`)}),(0,P.jsx)($,{children:s(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),j&&(0,P.jsx)(Jh,{children:j})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(ng,{$on:O,children:s(O?`Active`:`Off`)}),(0,P.jsx)(rg,{$on:O,disabled:k,onClick:()=>void _n(),title:s(O?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,P.jsx)(ig,{})})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Use as the default file manager`)}),(0,P.jsx)($,{children:s(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),N?.registered&&!N.pathMatches&&(0,P.jsx)(Jh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:N.registeredPath??`?`})}),B&&(0,P.jsx)(Jh,{children:B})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(ng,{$on:Rt,children:s(Rt?`Active`:`Off`)}),(0,P.jsx)(rg,{$on:Rt,disabled:!p||fe,onClick:()=>void vn(),title:s(Rt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,P.jsx)(ig,{})})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Open archives with this app`)}),(0,P.jsx)($,{children:s(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,P.jsx)($,{children:s(`When this is off, opening an archive uses the system's default application instead.`)}),ce?.registered&&!ce.pathMatches&&(0,P.jsx)(Jh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:ce.registeredPath??`?`})}),R&&(0,P.jsx)(Jh,{children:R})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(ng,{$on:It,children:s(It?`Active`:`Off`)}),(0,P.jsx)(Rg,{disabled:!p||F||It,onClick:()=>void yn(),type:`button`,children:s(`Register`)}),e?.platform===`windows`&&(0,P.jsx)(Rg,{onClick:()=>void W(`ms-settings:defaultapps`),type:`button`,children:s(`Default apps…`)}),(0,P.jsx)(tg,{disabled:!p||F||!Lt,onClick:()=>void bn(),type:`button`,children:s(`Unregister`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Reopen the tabs that were open`)}),(0,P.jsx)($,{children:s(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,P.jsx)(rg,{$on:p?.restoreTabs??!0,disabled:!p,onClick:()=>void G({restoreTabs:!p?.restoreTabs}),type:`button`,children:(0,P.jsx)(ig,{})})]})]})]}),(0,P.jsxs)(yh,{ref:zt(`startup`),children:[(0,P.jsx)(gh,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Start with the computer`)}),(0,P.jsx)($,{children:s(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),Tt&&(0,P.jsx)(Jh,{children:Tt}),Ct&&!Ct.supported&&(0,P.jsx)(Jh,{children:s(`This platform cannot create a per-user startup entry.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(po,{disabled:!p||Dt||Ct!==null&&!Ct.supported,onChange:e=>void Dn(e),options:[{value:`none`,label:s(`None`)},{value:`shortcut`,label:s(`Shortcut`)},{value:`task`,label:s(`Scheduled task`)}],value:Ct?.mode??p?.startupMode??`none`,width:170})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Start hidden in the tray`)}),(0,P.jsx)($,{children:s(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(rg,{$on:p?.startHidden??!1,disabled:!p,onClick:()=>void G({startHidden:!p?.startHidden}),type:`button`,children:(0,P.jsx)(ig,{})})})]})]})]}),(0,P.jsxs)(yh,{ref:zt(`fonts`),children:[(0,P.jsx)(gh,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,P.jsxs)(xh,{children:[jm.map(e=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(e.label)}),(0,P.jsx)($,{children:s(`Falls back to {font} until another family is chosen.`,{font:s(e.fallback)})})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(Fm,{defaultLabel:s(e.fallback),disabled:!p,fonts:yt,onChange:t=>void Mn(e.id,t),sample:e.sample,value:p?.fonts?.[e.id]??null})})]},e.id)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Reset`)}),(0,P.jsx)($,{children:s(`Back to the app's built-in font for every role.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(Rg,{onClick:()=>void G({fonts:{}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,P.jsxs)(yh,{ref:zt(`time`),children:[(0,P.jsx)(gh,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,P.jsx)(xh,{children:(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Ch,{children:[(0,P.jsx)(Q,{children:s(`Format`)}),(0,P.jsx)($,{children:s(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,P.jsx)(jg,{children:Qm.map(e=>(0,P.jsx)(Mg,{$active:(p?.timeFormat??`24`)===e.id,onClick:()=>void G({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(p?.timeFormat??`24`)===`custom`&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Ng,{"aria-label":s(`Pattern`),onBlur:rn,onChange:e=>Re(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),rn()):e.key===`Escape`&&Re(null)},spellCheck:!1,value:Le??p?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,P.jsx)($,{children:s(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,P.jsxs)(Pg,{children:[(0,P.jsx)(`span`,{children:s(`Preview`)}),(0,P.jsx)(`code`,{children:m($m,p?.timeFormat,Le??p?.timeFormatPattern)})]})]})})]}),(0,P.jsxs)(yh,{ref:zt(`updates`),children:[(0,P.jsx)(gh,{note:`The running build and the newest one published.`,title:`Updates`}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Current version`)}),(0,P.jsx)(Yh,{children:e?`v${e.version}`:`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Latest version`)}),(0,P.jsx)(Yh,{children:Ke?`v${Ke.latest}`:`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Check for updates`)}),(0,P.jsx)($,{children:Ke&&!Ke.available?s(`You are on the latest version.`):s(`Reads the version file the release workflow publishes.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(Rg,{disabled:Xe,onClick:()=>void ln(),type:`button`,children:s(Xe?`Checking…`:`Check now`)})})]}),Ke?.available&&(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Version {version} is available.`,{version:Ke.latest})}),(0,P.jsx)($,{children:s(`Download the new build from the releases page.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(Rg,{onClick:()=>void W(Xm),type:`button`,children:s(`Open release page`)})})]}),it&&(0,P.jsx)(X,{children:(0,P.jsx)(Jh,{children:s(`Could not check for updates.`)})})]})]}),(0,P.jsxs)(yh,{ref:zt(`colors`),children:[(0,P.jsx)(gh,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Ch,{children:[(0,P.jsx)(Q,{children:s(`Presets`)}),(0,P.jsx)($,{children:s(`One click changes the accent and the highlight together.`)})]}),(0,P.jsxs)(wh,{children:[Ou.map(e=>(0,P.jsxs)(Th,{$on:on.toLowerCase()===e.accent&&cn.toLowerCase()===e.secondary,onClick:()=>K(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,P.jsxs)(Mh,{children:[(0,P.jsx)(`i`,{style:{background:e.accent}}),(0,P.jsx)(`i`,{style:{background:e.secondary}})]}),(0,P.jsx)(Eh,{children:s(e.name)})]},e.name)),Pt.map((e,t)=>(0,P.jsxs)(Dh,{children:[(0,P.jsxs)(Th,{$on:on.toLowerCase()===e.accent.toLowerCase()&&cn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>K(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,P.jsxs)(Mh,{children:[(0,P.jsx)(`i`,{style:{background:e.accent}}),(0,P.jsx)(`i`,{style:{background:e.secondary}})]}),(0,P.jsx)(Eh,{children:e.name})]}),(0,P.jsx)(Oh,{onClick:()=>void un(t),title:s(`Remove preset`),type:`button`,children:(0,P.jsx)(xi,{size:9})})]},`${e.name}-${t}`)),Ue?(0,P.jsxs)(Ah,{children:[(0,P.jsxs)(Mh,{children:[(0,P.jsx)(`i`,{style:{background:Ue.accent}}),(0,P.jsx)(`i`,{style:{background:Ue.secondary}})]}),(0,P.jsx)(jh,{autoFocus:!0,maxLength:24,onChange:e=>Ge({...Ue,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),J()):e.key===`Escape`&&(e.preventDefault(),Ge(null))},placeholder:s(`Preset name`),spellCheck:!1,value:Ue.name}),(0,P.jsx)(Qh,{onClick:()=>void J(),type:`button`,children:s(`Save`)}),(0,P.jsx)(Qh,{onClick:()=>Ge(null),type:`button`,children:s(`Cancel`)})]}):(0,P.jsxs)(kh,{disabled:!p,onClick:()=>Ge({name:``,accent:on,secondary:cn}),title:s(`Save the current colours as a preset`),type:`button`,children:[(0,P.jsx)(li,{size:12}),s(`Add preset`)]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Accent color`)}),(0,P.jsx)($,{children:s(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(hh,{colors:ze.accent,current:on,onApply:e=>q(`accent`,e)}),(0,P.jsx)($h,{"aria-label":s(`Accent color`),disabled:!p,onBlur:()=>dn(`accent`),onChange:e=>void G({accentColor:e.target.value}),onFocus:()=>mt({role:`accent`,color:on}),type:`color`,value:on}),(0,P.jsx)(eg,{children:on.toUpperCase()})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Secondary color`)}),(0,P.jsx)($,{children:s(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(hh,{colors:ze.secondary,current:cn,onApply:e=>q(`secondary`,e)}),(0,P.jsx)($h,{"aria-label":s(`Secondary color`),disabled:!p,onBlur:()=>dn(`secondary`),onChange:e=>void G({secondaryColor:e.target.value}),onFocus:()=>mt({role:`secondary`,color:cn}),type:`color`,value:cn}),(0,P.jsx)(eg,{children:cn.toUpperCase()})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Reset colors`)}),(0,P.jsx)($,{children:s(`Returns the interface to the default blue and indigo theme.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(Qh,{disabled:!p,onClick:()=>{an(`accent`,on),an(`secondary`,cn),G({accentColor:null,secondaryColor:null})},type:`button`,children:s(`Reset`)})})]})]})]}),(0,P.jsxs)(yh,{ref:zt(`background`),children:[(0,P.jsx)(gh,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Ch,{children:[(0,P.jsx)(Q,{children:s(`Wallpaper`)}),(0,P.jsx)($,{children:s(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,P.jsx)(_g,{children:(0,P.jsx)(vg,{$active:!p?.backgroundSource,onClick:()=>void G({backgroundSource:null}),title:s(`None`),type:`button`,children:(0,P.jsx)(Cg,{children:s(`None`)})})}),(0,P.jsxs)(mg,{children:[ju.map(e=>(0,P.jsxs)(hg,{children:[(0,P.jsx)(gg,{children:s(e.name)}),(0,P.jsx)(_g,{children:e.variants.map(t=>(0,P.jsx)(vg,{$active:p?.backgroundSource===t.id,onClick:()=>void G({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,P.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,P.jsxs)(hg,{children:[(0,P.jsx)(gg,{children:s(`Motion`)}),(0,P.jsx)(_g,{children:Au.map(e=>(0,P.jsxs)(vg,{$active:p?.backgroundSource===e.id,onClick:()=>void G({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,P.jsx)(`img`,{alt:``,src:e.poster}),(0,P.jsx)(xg,{children:(0,P.jsx)(Oi,{size:11})})]},e.id))})]}),(0,P.jsxs)(hg,{children:[(0,P.jsx)(gg,{children:s(`Custom`)}),(0,P.jsxs)(_g,{children:[(p?.backgroundCustom??[]).map(e=>(0,P.jsx)(fh,{active:p?.backgroundSource===`file:${e}`||p?.backgroundSource===`url:${e}`||p?.backgroundSource===e,onRemove:()=>Wt(e),onSelect:()=>void G({backgroundSource:C(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,P.jsxs)(Sg,{onClick:()=>void Vt([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,P.jsx)(li,{size:12}),s(`Image…`)]}),(0,P.jsxs)(Sg,{onClick:()=>void Vt([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,P.jsx)(li,{size:12}),s(`Video…`)]})]})]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Image or video URL`)}),(0,P.jsx)($,{children:s(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(ag,{onChange:e=>At(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ut()},placeholder:`https://…`,value:kt}),(0,P.jsx)(Qh,{disabled:!C(kt),onClick:()=>void Ut(),type:`button`,children:s(`Add`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Blur`)}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(pg,{max:40,min:0,onChange:e=>void G({backgroundBlur:Number(e.target.value)}),type:`range`,value:p?.backgroundBlur??0}),(0,P.jsxs)(Yh,{children:[p?.backgroundBlur??0,`px`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Saturation`)}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(pg,{max:200,min:0,onChange:e=>void G({backgroundSaturation:Number(e.target.value)}),type:`range`,value:p?.backgroundSaturation??100}),(0,P.jsxs)(Yh,{children:[p?.backgroundSaturation??100,`%`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Brightness`)}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(pg,{max:150,min:40,onChange:e=>void G({backgroundBrightness:Number(e.target.value)}),type:`range`,value:p?.backgroundBrightness??100}),(0,P.jsxs)(Yh,{children:[p?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,P.jsxs)(yh,{ref:zt(`safety`),children:[(0,P.jsx)(gh,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Ch,{children:[(0,P.jsx)(Q,{children:s(`Protected folders`)}),(0,P.jsx)($,{children:s(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,P.jsx)(wg,{children:(p?.protectedPaths??[]).map(e=>(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Eg,{"aria-label":s(`Protected path`),onBlur:Yt,onChange:t=>je({from:e,value:t.target.value}),onFocus:()=>je({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Yt()):e.key===`Escape`&&je(null)},spellCheck:!1,value:Ae?.from===e?Ae.value:e}),(0,P.jsx)(Dg,{onClick:()=>Xt(e),title:s(`Remove`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]},e))}),(0,P.jsxs)(kg,{children:[(0,P.jsx)(Ag,{"aria-label":s(`New protected rule`),onChange:e=>Pe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Jt())},placeholder:`*.log`,spellCheck:!1,value:Ne}),(0,P.jsx)(Qh,{onClick:Jt,type:`button`,children:s(`Add the rule`)})]}),(0,P.jsxs)(Og,{children:[(0,P.jsx)(Qh,{onClick:()=>void Zt(),type:`button`,children:s(`Restore defaults`)}),(0,P.jsx)(Qh,{onClick:()=>void Gt(),type:`button`,children:s(`Add folder…`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Confirmation delay`)}),(0,P.jsx)($,{children:s(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(pg,{max:30,min:2,onChange:e=>void G({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:p?.deleteDelaySeconds??5}),(0,P.jsxs)(Yh,{children:[p?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,P.jsxs)(yh,{ref:zt(`tags`),children:[(0,P.jsx)(gh,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Xh,{"aria-label":s(`Color of the new tag`),onChange:e=>ke(e.target.value),type:`color`,value:Oe}),(0,P.jsx)(ag,{onChange:e=>De(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),fn())},placeholder:s(`New tag`),spellCheck:!1,value:Ee})]}),(0,P.jsx)($,{children:s(`Add a tag here; it is available in every folder.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(Qh,{disabled:Se||Ee.trim().length===0,onClick:()=>void fn(),type:`button`,children:s(`Add`)})})]}),we&&(0,P.jsx)(X,{children:(0,P.jsx)(Jh,{children:we})}),ve.length===0&&(0,P.jsx)(X,{children:(0,P.jsx)($,{children:s(`No tags yet. Add one below; it is available in every folder.`)})}),ve.map(e=>(0,P.jsx)(X,{children:xe?.name===e.name?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Xh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void pn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,P.jsx)(Zh,{autoFocus:!0,disabled:Se,onChange:t=>H({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),hn()):e.key===`Escape`&&(e.preventDefault(),H(null))},value:xe.value})]}),(0,P.jsx)($,{children:s(`Press Enter to save, Escape to cancel.`)})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Qh,{disabled:Se,onClick:()=>void hn(),type:`button`,children:s(`Save`)}),(0,P.jsx)(Qh,{disabled:Se,onClick:()=>H(null),type:`button`,children:s(`Cancel`)})]})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Xh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void pn(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,P.jsx)(Q,{children:e.name})]}),(0,P.jsx)($,{children:o(s,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(Qh,{disabled:Se,onClick:()=>H({name:e.name,value:e.name}),type:`button`,children:s(`Edit`)}),(0,P.jsxs)(tg,{disabled:Se,onClick:()=>void mn(e.name),type:`button`,children:[(0,P.jsx)(yi,{size:13}),s(`Remove`)]})]})]})},e.name))]})]}),(0,P.jsxs)(yh,{ref:zt(`files-view`),children:[(0,P.jsx)(gh,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Default view`)}),(0,P.jsx)($,{children:s(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsxs)(dg,{children:[(0,P.jsx)(fg,{$on:Nt.mode===`list`,onClick:()=>void G({defaultView:{...Nt,mode:`list`}}),type:`button`,children:s(`List`)}),(0,P.jsx)(fg,{$on:Nt.mode===`grid`,onClick:()=>void G({defaultView:{...Nt,mode:`grid`}}),type:`button`,children:s(`Grid`)})]})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`List icon size`)}),(0,P.jsx)($,{children:s(`The icon in the list rows.`)})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(pg,{max:48,min:16,onChange:e=>void G({defaultView:{...Nt,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Nt.iconSize}),(0,P.jsxs)(Yh,{children:[Nt.iconSize,`px`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Grid size`)}),(0,P.jsx)($,{children:s(`The height of a grid tile; the icon inside follows it.`)})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(pg,{max:260,min:100,onChange:e=>void G({defaultView:{...Nt,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Nt.gridSize}),(0,P.jsxs)(Yh,{children:[Nt.gridSize,`px`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Selection checkboxes`)}),(0,P.jsx)(km,{})]}),(0,P.jsx)($,{children:s(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,P.jsx)(rg,{$on:p?.showCheckboxes??!0,disabled:!p,onClick:()=>void G({showCheckboxes:!(p?.showCheckboxes??!0)}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Open with a single click`)}),(0,P.jsx)(km,{})]}),(0,P.jsx)($,{children:s(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,P.jsx)(rg,{$on:p?.openOnSingleClick??!1,disabled:!p,onClick:()=>void G({openOnSingleClick:!(p?.openOnSingleClick??!1)}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Confirm before deleting`)}),(0,P.jsx)(km,{})]}),(0,P.jsx)($,{children:s(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,P.jsx)(rg,{$on:p?.confirmDelete??!1,disabled:!p,onClick:()=>void G({confirmDelete:!(p?.confirmDelete??!1)}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Play audio in video previews`)}),(0,P.jsx)(km,{})]}),(0,P.jsx)($,{children:s(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,P.jsx)(rg,{$on:p?.previewVideoAudio??!1,disabled:!p,onClick:()=>void G({previewVideoAudio:!(p?.previewVideoAudio??!1)}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Autoplay video previews`)}),(0,P.jsx)(km,{})]}),(0,P.jsx)($,{children:s(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,P.jsx)(rg,{$on:p?.previewVideoAutoplay??!1,disabled:!p,onClick:()=>void G({previewVideoAutoplay:!(p?.previewVideoAutoplay??!1)}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Preview panel under the list`)}),(0,P.jsx)(km,{})]}),(0,P.jsx)($,{children:s(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,P.jsx)(rg,{$on:Nt.showImages??!0,onClick:()=>void G({defaultView:{...Nt,showImages:!(Nt.showImages??!0)}}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsx)(X,{children:(0,P.jsxs)(Z,{children:[(0,P.jsxs)(qh,{children:[(0,P.jsx)(Q,{children:s(`Columns`)}),(0,P.jsx)(km,{})]}),(0,P.jsx)($,{children:s(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,P.jsx)(X,{children:(0,P.jsxs)(Fg,{children:[Zc.map(e=>(0,P.jsxs)(Ig,{children:[(0,P.jsx)(`input`,{checked:(Nt.columns??[]).includes(e.id),onChange:()=>void gn(e.id),type:`checkbox`}),(0,P.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,P.jsxs)(Ig,{children:[(0,P.jsx)(`input`,{checked:(Nt.columns??[]).includes(`linkTarget`),onChange:()=>void gn(`linkTarget`),type:`checkbox`}),(0,P.jsx)(`span`,{children:s(`Link target after the name`)})]})]})})]}),(0,P.jsxs)(Hg,{children:[s(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,P.jsx)(km,{}),` `,s(`Anything marked as global always applies to every folder.`)]})]}),(0,P.jsxs)(yh,{ref:zt(`shortcuts`),children:[(0,P.jsx)(gh,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,P.jsxs)(xh,{children:[Ym.map(({id:e,label:t,note:n})=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(t)}),(0,P.jsx)($,{children:s(n)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(Lg,{$listening:he===e,onClick:()=>ge(e),type:`button`,children:he===e?s(`Press a key…`):qt(Sn[e])})})]},e)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Reset`)}),(0,P.jsx)($,{children:s(`Back to the default combination for every action.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(Rg,{onClick:()=>void G({shortcuts:{...Ht}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,P.jsxs)(yh,{ref:zt(`memory`),children:[(0,P.jsx)(gh,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(Hh,{children:[(0,P.jsxs)(Uh,{children:[(0,P.jsx)(Q,{children:s(`Process memory`)}),(0,P.jsx)(Yh,{children:D?`${f(D.private)} · ${Vh(D.private,D.available)}`:`—`})]}),(0,P.jsx)(Wh,{children:(0,P.jsx)(Gh,{$ratio:D?D.private/Math.max(D.available,1):0,$tone:w(D?D.private/Math.max(D.available,1):0)})}),(0,P.jsx)($,{children:D?s(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:f(D.available),resident:f(D.workingSet)}):s(`Reading the current usage…`)})]}),(0,P.jsxs)(Hh,{children:[(0,P.jsxs)(Uh,{children:[(0,P.jsx)(Q,{children:s(`Managed heap`)}),(0,P.jsx)(Yh,{children:D?`${f(D.managed)} · ${Vh(D.managed,D.private)}`:`—`})]}),(0,P.jsx)(Wh,{children:(0,P.jsx)(Gh,{$ratio:D?D.managed/Math.max(D.private,1):0,$tone:`var(--accent-secondary)`})}),(0,P.jsx)($,{children:s(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,P.jsxs)(Hh,{children:[(0,P.jsxs)(Uh,{children:[(0,P.jsx)(Q,{children:s(`Native and runtime`)}),(0,P.jsx)(Yh,{children:D?`${f(Math.max(0,D.private-D.managed))} · ${Vh(Math.max(0,D.private-D.managed),D.private)}`:`—`})]}),(0,P.jsx)(Wh,{children:(0,P.jsx)(Gh,{$ratio:D?Math.max(0,D.private-D.managed)/Math.max(D.private,1):0,$tone:`var(--accent-primary)`})}),(0,P.jsx)($,{children:s(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Free memory`)}),(0,P.jsx)($,{children:s(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(Rg,{onClick:()=>void dt().then(oe),type:`button`,children:s(`Trim now`)})})]})]})]}),(0,P.jsxs)(yh,{ref:zt(`overview`),children:[(0,P.jsx)(gh,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,P.jsx)(xh,{children:(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Recent items`)}),(0,P.jsx)($,{children:s(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(ag,{max:50,min:0,onChange:e=>void Cn(Number(e.target.value)),type:`number`,value:p?.recentLimit??10})})]})})]}),(0,P.jsxs)(yh,{ref:zt(`gallery`),children:[(0,P.jsx)(gh,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,P.jsxs)(xh,{children:[(p?.galleryRoots??[]).map(e=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:v(e)}),(0,P.jsx)($,{children:e})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(zg,{onClick:()=>void On((p?.galleryRoots??[]).filter(t=>t!==e)),title:s(`Stop scanning this folder`),type:`button`,children:(0,P.jsx)(xi,{size:12})})})]},e)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Scan folders`)}),(0,P.jsx)($,{children:(p?.galleryRoots??[]).length===0?s(`Nothing added yet, so the gallery reads the Pictures folder.`):s(`Only these folders are scanned, three levels deep.`)})]}),(0,P.jsx)(Kh,{children:(0,P.jsx)(Rg,{onClick:()=>void kn(),type:`button`,children:s(`Choose folder…`)})})]})]})]}),(0,P.jsxs)(yh,{ref:zt(`icons`),children:[(0,P.jsx)(gh,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Use system file icons`)}),(0,P.jsx)($,{children:s(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,P.jsx)(rg,{$on:p?.systemIcons??!1,disabled:!p,onClick:()=>void G({systemIcons:!p?.systemIcons}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Use custom folder icons`)}),(0,P.jsx)($,{children:s(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,P.jsx)(rg,{$on:p?.customFolderIcons??!1,disabled:!p,onClick:()=>void G({customFolderIcons:!p?.customFolderIcons}),type:`button`,children:(0,P.jsx)(ig,{})})]})]})]}),(0,P.jsxs)(yh,{ref:zt(`extension-icons`),children:[(0,P.jsx)(gh,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,P.jsxs)(xh,{children:[Object.entries(p?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:e}),(0,P.jsx)($,{children:lh(s,t)})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(uh,{source:t}),(0,P.jsx)(zg,{onClick:()=>void xn(e,null),title:s(`Remove this rule`),type:`button`,children:(0,P.jsx)(xi,{size:12})})]})]},e)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Add a rule`)}),(0,P.jsx)($,{children:s(`Extension and the icon to draw for it.`)})]}),(0,P.jsxs)(Kh,{children:[(0,P.jsx)(ag,{onChange:e=>S(e.target.value),placeholder:`.psd`,spellCheck:!1,value:x}),(0,P.jsxs)(ug,{children:[(0,P.jsx)(zg,{onClick:()=>ie(e=>!e),title:s(`Choose the icon`),type:`button`,children:(0,P.jsx)(uh,{source:ee})}),re&&(0,P.jsx)(Vd,{allowDefault:!1,onClose:()=>ie(!1),onPick:e=>{te(e??`file`),ie(!1)},value:ee})]}),(0,P.jsx)(zg,{onClick:()=>void An(),title:s(`Add the rule`),type:`button`,children:(0,P.jsx)(li,{size:13})})]})]})]})]}),(0,P.jsxs)(yh,{ref:zt(`folder-icons`),children:[(0,P.jsx)(gh,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Give a folder its own icon`)}),(0,P.jsx)($,{children:s(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,P.jsxs)(Kh,{children:[_&&(0,P.jsx)(dh,{src:_.icon}),(0,P.jsx)(Rg,{disabled:T,onClick:()=>void jn(),type:`button`,children:s(T?`Choosing…`:`Choose folder and icon…`)})]})]}),_&&(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:v(_.folder)}),(0,P.jsx)($,{children:_.folder})]}),(0,P.jsx)(Kh,{children:(0,P.jsxs)(Vg,{children:[(0,P.jsx)(bi,{size:11}),` `,s(`Saved`)]})})]})]})]}),(0,P.jsxs)(yh,{ref:zt(`folder-index`),children:[(0,P.jsx)(gh,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:s(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,P.jsx)($,{children:s(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,P.jsx)(rg,{$on:p?.writeDirectoryIndex??!0,disabled:!p,onClick:()=>void G({writeDirectoryIndex:!p?.writeDirectoryIndex}),type:`button`,children:(0,P.jsx)(ig,{})})]}),(0,P.jsxs)(Sh,{children:[(0,P.jsxs)(Ch,{children:[(0,P.jsx)(Q,{children:s(`Directory index blacklist`)}),(0,P.jsx)($,{children:s(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,P.jsx)(wg,{children:(p?.directoryIndexBlacklist??[]).map(e=>(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Eg,{"aria-label":s(`Directory index blacklist rule`),onBlur:Qt,onChange:t=>U({from:e,value:t.target.value}),onFocus:()=>U({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Qt()):e.key===`Escape`&&U(null)},spellCheck:!1,value:Me?.from===e?Me.value:e}),(0,P.jsx)(Dg,{onClick:()=>tn(e),title:s(`Remove`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]},e))}),(0,P.jsxs)(kg,{children:[(0,P.jsx)(Ag,{"aria-label":s(`Directory index blacklist rule`),onChange:e=>Ie(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),$t())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Fe}),(0,P.jsx)(Qh,{onClick:$t,type:`button`,children:s(`Add the rule`)})]}),(0,P.jsxs)(Og,{children:[(0,P.jsx)(Qh,{onClick:nn,type:`button`,children:s(`Restore defaults`)}),(0,P.jsx)(Qh,{onClick:()=>void en(),type:`button`,children:s(`Add folder…`)})]})]})]}),!(p?.writeDirectoryIndex??!0)&&(0,P.jsx)(Ug,{children:ch(s,e?.platform)})]}),(0,P.jsxs)(yh,{ref:zt(`indexing`),children:[(0,P.jsx)(gh,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,P.jsx)(sh,{})]}),(0,P.jsxs)(yh,{ref:zt(`files`),children:[(0,P.jsx)(gh,{note:`What the listings include.`,title:`Files`}),(0,P.jsxs)(xh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Hidden items`)}),(0,P.jsx)(Yh,{children:oh(s,u?.showHidden)})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:s(`Protected operating system files`)}),(0,P.jsx)(Yh,{children:oh(s,u?.showSystem)})]})]}),(0,P.jsx)(Hg,{children:s(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,P.jsxs)(Ih,{"aria-label":s(`Settings sections`),children:[(0,P.jsx)(Lh,{children:s(`Sections`)}),(0,P.jsx)(Rh,{children:nh.map(({id:e,label:t})=>(0,P.jsx)(zh,{$active:_t===e,onClick:()=>Bt(e),type:`button`,children:(0,P.jsx)(`span`,{children:s(t)})},e))}),(0,P.jsx)(Bh,{children:s(`Changes are saved as you make them.`)})]})]})}function oh(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function sh(){let e=L(),[t,n]=(0,E.useState)(null);return(0,E.useEffect)(()=>{let e=!0,t=()=>Ke().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,P.jsx)(Ug,{children:e(`No indexing tasks are running.`)}):(0,P.jsxs)(xh,{children:[(0,P.jsx)(X,{children:(0,P.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,P.jsx)(X,{children:(0,P.jsx)(Yh,{title:e,children:e})},e))]}):(0,P.jsx)(Ug,{children:e(`Index task information is unavailable.`)})}function ch(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function lh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function uh({source:e}){let t=dn(e.startsWith(`file:`)?e.slice(5):null);return(0,P.jsx)(Bg,{children:t?(0,P.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,P.jsx)(Gs,{name:e,size:16})})}function dh({src:e}){let t=dn(e);return(0,P.jsx)(Bg,{children:t&&(0,P.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function fh({path:e,active:t,onSelect:n,onRemove:r}){let i=L(),a=C(e),o=gn(a?null:e),s=a?e:o,c=Yu(e.split(/[?#]/)[0]);return(0,P.jsxs)(yg,{children:[(0,P.jsxs)(vg,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,P.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,P.jsx)(`img`,{alt:``,src:s})),c&&(0,P.jsx)(xg,{children:(0,P.jsx)(Oi,{size:11})})]}),(0,P.jsx)(bg,{onClick:r,title:i(`Remove`),type:`button`,children:(0,P.jsx)(xi,{size:9})})]})}function ph({value:e,options:t,onChange:n,disabled:r}){let i=L(),[a,o]=(0,E.useState)(null),s=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(og,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,P.jsx)(`span`,{children:mh(i,e)}),(0,P.jsx)(sg,{children:(0,P.jsx)(fi,{size:11})})]}),a&&(0,Pa.createPortal)((0,P.jsx)(cg,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,P.jsxs)(lg,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,P.jsx)(`span`,{children:mh(i,t)}),t===e&&(0,P.jsx)(bi,{size:11})]},t))}),document.body)]})}function mh(e,t){return t===eh?e(`System default`):th[t]??t}function hh({colors:e,current:t,onApply:n}){let r=L();if(e.length===0)return null;let[i,...a]=e;return(0,P.jsxs)(Nh,{children:[(0,P.jsxs)(Fh,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,P.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,P.jsx)(Ph,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,P.jsx)(bi,{size:9})},e))]})}function gh({title:e,note:t,global:n=!1}){let r=L();return(0,P.jsxs)(bh,{children:[(0,P.jsxs)(`h2`,{children:[r(e),n&&(0,P.jsx)(km,{})]}),(0,P.jsx)(`p`,{children:r(t)})]})}var _h=_.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,vh=_.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,yh=_.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,bh=_.header`
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
`,xh=_.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Sh=_.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Ch=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,wh=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Th=_.button`
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
`,Eh=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Dh=_.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Oh=_.button`
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
`,kh=_.button`
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
`,Ah=_.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,jh=_.input`
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
`,Mh=_.span`
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
`,Nh=_.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Ph=_.button`
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
`,Fh=_.button`
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
`,Ih=_.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,Lh=_.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Rh=_.div`
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
`,zh=_.button`
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
`,Bh=_.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function Vh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var Hh=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Uh=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Wh=_.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Gh=_.div`
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
`,Kh=_.span`
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
`,Wg=150,Gg=2500,Kg=3,qg=600;function Jg({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:s,onSearchMatches:c,onPick:l,onSelectionChange:u,onAddToTray:d,onAddFavorite:p,onRemoveFavorite:m,favoritePaths:h,onExtractArchive:g,showDetails:_=!0,videoAudio:v=!1,videoAutoplay:b=!1}){let x=L(),S=Kc(`gallery`),[ee,te]=(0,E.useState)([]),[ne,re]=(0,E.useState)(0),[C,w]=(0,E.useState)(!0),[ie,T]=(0,E.useState)(null),[ae,D]=(0,E.useState)(!1),[oe,O]=(0,E.useState)([]),[se,k]=(0,E.useState)(()=>{let e=Rn(`yafm.preview.width`,320);return e>=220?e:320}),A=(0,E.useRef)([]),j=(0,E.useRef)(0),M=(0,E.useRef)(!1),ce=(0,E.useRef)(!0),le=(0,E.useRef)(0),N=(0,E.useRef)(null),ue=(0,E.useRef)(0),de=(0,E.useCallback)(async e=>{let t=++le.current;w(!0),ce.current=!0,T(null);try{let n=await Re(0,Wg,e);if(t!==le.current)return;A.current=n.entries,j.current=n.total,te(n.entries),re(n.total)}catch(e){t===le.current&&T(e instanceof Error?e.message:String(e))}finally{t===le.current&&(ce.current=!1,w(!1))}},[]);(0,E.useEffect)(()=>{de(!1)},[de]);let F=(0,E.useCallback)(async()=>{if(ce.current||M.current||A.current.length>=j.current)return;let e=le.current;M.current=!0;try{let t=A.current,n=j.current;for(let r=0;r<Kg&&t.length<n;r++){let r=await Re(t.length,Wg,!1);if(e!==le.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<Wg)break}if(e!==le.current)return;A.current=t,j.current=n,(0,E.startTransition)(()=>{te(t),re(n)})}catch{}finally{M.current=!1}},[]),I=(0,E.useCallback)(e=>{ue.current||=window.requestAnimationFrame(()=>{ue.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<Gg&&F()})},[F]);(0,E.useEffect)(()=>{let e=N.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&F()},{root:e.parentElement,rootMargin:`${Gg}px 0px`});return t.observe(e),()=>t.disconnect()},[F]),(0,E.useEffect)(()=>{if(ee.length>=ne)return;let e=window.setTimeout(()=>{let e=N.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<Gg&&F()},200);return()=>window.clearTimeout(e)},[ee.length,ne,F]);let R=(0,E.useMemo)(()=>({path:``,parent:null,entries:ee.map(Yg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[ee]),z=(0,E.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),fe=(0,E.useCallback)(e=>{l?l(e):xe(e)},[l]),pe=(0,E.useCallback)(e=>{let t=Xg(e.modified);return{id:t,label:t}},[]),B=()=>{D(!0),de(!0).finally(()=>D(!1))},me=ee.length<ne,he=(0,E.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:ee.filter(e=>Dn(e.name,a)||Dn(e.path,a)),[ee,a?.open,a?.query,a?.matchCase,a?.regex]),ge=(0,E.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:he[Math.min(a.index,Math.max(0,he.length-1))]?.path??null}:yn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,he]);(0,E.useEffect)(()=>{c?.(he.length)},[he.length,c]);let _e=(0,E.useCallback)(e=>{O(e),u?.(e)},[u]),V=e=>{k(e),zn(`yafm.preview.width`,e)},ve=oe.length>0?ee.find(e=>e.path===oe[0])??null:null,ye=ve?.name.includes(`.`)?ve.name.slice(ve.name.lastIndexOf(`.`)+1).toUpperCase():`—`,be=ve&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(ve.name)?x(`Video`):x(`Picture`),H=ve?ve.path.slice(0,Math.max(ve.path.lastIndexOf(`\\`),ve.path.lastIndexOf(`/`))):``,Se=ve?{name:ve.name,path:ve.path,isDirectory:!1,size:ve.size,modified:ve.modified,fields:[{label:x(`Type`),value:be},{label:x(`Extension`),value:ye},{label:x(`Location`),value:H},{label:x(`Full path`),value:ve.path},{label:x(`Size`),value:f(ve.size)},{label:x(`Modified`),value:y(ve.modified)},{label:x(`Created`),value:`—`}]}:null;return(0,P.jsxs)(Zg,{children:[(0,P.jsxs)(e_,{children:[(0,P.jsxs)(n_,{children:[(0,P.jsx)(`span`,{children:x(`Gallery`)}),(0,P.jsx)(r_,{children:C?x(`scanning…`):x(`{shown} of {total} pictures`,{shown:ee.length,total:ne})})]}),(0,P.jsxs)(t_,{children:[(0,P.jsx)(i_,{onClick:B,title:x(`Scan the folders again`),type:`button`,children:(0,P.jsx)(a_,{$spinning:ae,children:(0,P.jsx)(ci,{size:14})})}),S.available&&(0,P.jsx)(i_,{onClick:e=>S.open(e.clientX,e.clientY),title:x(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{size:14})})]})]}),ie&&(0,P.jsx)(s_,{children:ie}),!ie&&!C&&ne===0&&(0,P.jsx)(s_,{children:x(`No pictures found.`)}),!ie&&(C||ne>0)&&(0,P.jsxs)(Qg,{children:[(0,P.jsx)($g,{children:(0,P.jsx)(ol,{confirmDelete:n,find:ge,selectMatchesToken:s,listing:C&&ee.length===0?null:R,loading:C,error:null,view:z,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:_e,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:fe,onOpenFile:fe,onRefresh:B,onAddToTray:d,onAddFavorite:p,onRemoveFavorite:m,favoritePaths:h,onExtractArchive:g,groupOf:pe,onGridScroll:I,gridFooter:(0,P.jsx)(o_,{$space:me?qg:1,ref:N}),allowBackgroundMenu:!1})}),_&&(0,P.jsx)(Xo,{emptyNote:x(`Nothing selected.`),info:Se,onWidth:V,selectionNote:oe.length>1?o(x,oe.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:v,videoAutoplay:b,width:se})]})]})}function Yg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function Xg(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(x(),{weekday:`long`}):t.toLocaleDateString(x(),{year:`numeric`,month:`long`,day:`numeric`})}var Zg=_.div`
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
`;function c_({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:u=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,E.useState)([]),_=L(),[y,b]=(0,E.useState)(null),x=Fn();(0,E.useEffect)(()=>{Je().then(e=>{b(e),g(Ts(e).filter(e=>e.pinned))},()=>{b(null),g([])})},[c]),(0,E.useEffect)(()=>{if(!N.available)return;let e=h.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return N.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>N.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[h,s]);let S=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:y?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??y?.placeIcons?.[n]??null}}),ee=o===`files`;return(0,P.jsxs)(m_,{children:[(0,P.jsxs)(h_,{children:[!u.includes(`home`)&&(0,P.jsxs)(b_,{$active:o===`home`,onClick:e=>m(`home`,Gt(e)),title:_(`Overview`),type:`button`,children:[(0,P.jsx)(zi,{}),(0,P.jsx)(S_,{children:_(`Overview`)})]}),!u.includes(`recycle`)&&(0,P.jsxs)(b_,{$active:o===`recycle`,onClick:e=>m(`recycle`,Gt(e)),title:_(`Recycle Bin`),type:`button`,children:[(0,P.jsx)(yi,{}),(0,P.jsx)(S_,{children:_(`Recycle Bin`)})]}),!u.includes(`gallery`)&&(0,P.jsxs)(b_,{$active:o===`gallery`,onClick:e=>m(`gallery`,Gt(e)),title:_(`Gallery`),type:`button`,children:[(0,P.jsx)(Di,{}),(0,P.jsx)(S_,{children:_(`Gallery`)})]})]}),h.map(e=>(0,P.jsxs)(__,{children:[(0,P.jsxs)(b_,{as:`div`,$active:!1,children:[(0,P.jsx)(x_,{children:(0,P.jsx)(Ds,{panel:e,size:16})}),(0,P.jsx)(S_,{children:_(e.title)})]}),(0,P.jsx)(v_,{children:(0,P.jsxs)(y_,{children:[e.kind===`quick`&&S(e).map(e=>(0,P.jsxs)(b_,{$active:ee&&t(a,e.path),onClick:t=>p(e.path,Gt(t)),title:e.path,type:`button`,children:[(0,P.jsx)(Os,{place:e}),(0,P.jsx)(S_,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let n=In(x,e.path);return(0,P.jsxs)(b_,{$active:ee&&t(a,e.path),onClick:t=>e.isDirectory?p(e.path,Gt(t)):void xe(e.path),title:e.path,type:`button`,children:[n&&x.useIcons?(0,P.jsx)(Os,{place:n}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,P.jsx)(S_,{children:n?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,P.jsx)(d_,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,P.jsxs)(b_,{$active:ee&&t(a,e.name),onClick:t=>p(e.name,Gt(t)),title:e.name,type:`button`,children:[(0,P.jsx)(ai,{}),(0,P.jsxs)(S_,{children:[d(e),(0,P.jsxs)(C_,{children:[f(e.freeSpace),` free`]}),(0,P.jsx)(w_,{children:(0,P.jsx)(T_,{$used:n,$tone:w(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,P.jsx)(f_,{onNavigate:p,path:e.path||s})]})})]},e.id)),!u.includes(`settings`)&&(0,P.jsx)(g_,{children:(0,P.jsxs)(b_,{$active:o===`settings`,onClick:e=>m(`settings`,Gt(e)),title:_(`Settings`),type:`button`,children:[(0,P.jsx)(pi,{}),(0,P.jsx)(S_,{children:_(`Settings`)})]})})]})}var l_=10,u_=40;function d_({historyVersion:e=0,onNavigate:t}){let n=L(),[r,i]=(0,E.useState)(null),a=Fn();return(0,E.useEffect)(()=>{Be().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=In(a,e.path);return(0,P.jsxs)(b_,{$active:!1,onClick:n=>t(e.path,Gt(n)),title:o(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,P.jsx)(Os,{place:r}):(0,P.jsx)(Ks,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,P.jsx)(S_,{children:r?.name||e.name})]},e.path)})}function f_({path:e,onNavigate:n}){let[r,i]=(0,E.useState)(null);(0,E.useEffect)(()=>{e&&(i(null),H(e,!1).then(i,()=>i(null)))},[e]),(0,E.useEffect)(()=>{if(e&&N.available)return N.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&H(e,!1).then(i,()=>void 0)})},[e]);let a=r?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,l_),s=a.filter(e=>!e.isDirectory).slice(0,u_);return(0,P.jsxs)(P.Fragment,{children:[o.map(e=>(0,P.jsx)(p_,{entry:e,onNavigate:n},e.fullPath)),s.map(e=>(0,P.jsx)(p_,{entry:e,onNavigate:n},e.fullPath))]})}function p_({entry:e,onNavigate:t}){let n=Fn(),r=In(n,e.fullPath);return(0,P.jsxs)(b_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Gt(n)):void xe(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,P.jsx)(Os,{place:r}):(0,P.jsx)(Ks,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,P.jsx)(S_,{children:r?.name||e.name})]})}var m_=_.aside`
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
`;function D_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=L(),a=(0,E.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,E.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,P.jsxs)(k_,{ref:a,children:[(0,P.jsxs)(A_,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,P.jsx)(vi,{size:13}),c>0&&(0,P.jsx)(E_,{children:c>9?`9+`:c})]}),n&&(0,P.jsxs)(j_,{children:[(0,P.jsxs)(M_,{children:[(0,P.jsx)(N_,{children:i(`Status center`)}),(0,P.jsxs)(P_,{children:[(0,P.jsx)(F_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,P.jsx)(I_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]})]}),e.length===0?(0,P.jsx)(R_,{children:i(`No operations yet.`)}):(0,P.jsx)(L_,{children:e.map(e=>(0,P.jsx)(O_,{task:e},e.id))})]})]})}function O_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,P.jsxs)(z_,{children:[(0,P.jsxs)(B_,{children:[(0,P.jsx)(V_,{$state:e.state,children:e.state===`done`?(0,P.jsx)(bi,{size:10}):e.state===`failed`?(0,P.jsx)(xi,{size:10}):(0,P.jsx)(H_,{})}),(0,P.jsx)(U_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,P.jsxs)(W_,{children:[f(e.bytesDone),` / `,f(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,P.jsxs)(W_,{children:[e.done,` / `,e.total]})]}),i&&(0,P.jsx)(G_,{children:(0,P.jsx)(K_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,P.jsx)(q_,{children:e.error})]})}var k_=_.div`
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
    ${Fa}
    ${Ja}
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

    ${Ya}
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
`;async function J_(){return N.available?(await N.request(`fs.history.list`)).entries:[]}async function Y_(e){return N.available?(await N.request(`fs.history.undoTo`,{id:e})).ok:!1}function X_(){let e=L(),[t,n]=(0,E.useState)(!1),[r,i]=(0,E.useState)([]),[a,o]=(0,E.useState)(!1),s=(0,E.useRef)(null),c=()=>void J_().then(i,()=>i([]));(0,E.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await Y_(e),c()}finally{o(!1)}};return(0,P.jsxs)($_,{ref:s,children:[(0,P.jsx)(ev,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,P.jsx)(_i,{size:14})}),t&&(0,P.jsxs)(tv,{children:[(0,P.jsxs)(nv,{children:[(0,P.jsx)(rv,{children:e(`History`)}),(0,P.jsx)(iv,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]}),r.length===0?(0,P.jsx)(pv,{children:e(`No operations yet.`)}):(0,P.jsx)(av,{children:r.map(t=>(0,P.jsxs)(ov,{children:[(0,P.jsxs)(sv,{children:[(0,P.jsxs)(cv,{children:[(0,P.jsx)(Q_,{label:t.label}),Z_(e,t.label)]}),(0,P.jsx)(lv,{children:S(t.at)})]}),t.paths.length>0&&(0,P.jsxs)(uv,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,P.jsx)(dv,{children:(0,P.jsx)(fv,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function Z_(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);if(t===`Paste text`)return e(`Paste text`);if(t===`Paste image`)return e(`Paste image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function Q_({label:e}){return e.startsWith(`Delete`)?(0,P.jsx)(yi,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,P.jsx)(oa,{size:13}):e.startsWith(`Rename`)?(0,P.jsx)(Bi,{size:13}):e.startsWith(`Compress`)?(0,P.jsx)(Ai,{size:13}):e.startsWith(`New`)?(0,P.jsx)(li,{size:13}):(0,P.jsx)(di,{size:13})}var $_=_.div`
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
    ${Fa}
    ${Ja}
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
`;function mv({currentFolder:e}){let n=L(),[r,i]=(0,E.useState)(!1),[a,o]=(0,E.useState)(null),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!r)return;let e=()=>void bc().then(o,()=>void 0);e();let t=window.setInterval(e,2500),n=e=>{l.current?.contains(e.target)||i(!1)};return window.addEventListener(`pointerdown`,n),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,n)}},[r]),(0,E.useEffect)(()=>{let e=()=>void bc().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(n=>t(n.path,e))??!1;return(0,P.jsxs)(hv,{ref:l,children:[(0,P.jsxs)(gv,{$active:r,onClick:()=>i(e=>!e),title:n(`Share folders`),type:`button`,children:[(0,P.jsx)(ea,{size:15}),a&&a.shares.length>0&&(0,P.jsx)(E_,{children:a.shares.length>9?`9+`:a.shares.length})]}),r&&(0,P.jsxs)(_v,{children:[(0,P.jsxs)(vv,{children:[(0,P.jsx)(yv,{children:n(`Share`)}),(0,P.jsx)(bv,{onClick:()=>i(!1),title:n(`Close`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]}),(0,P.jsxs)(xv,{children:[(0,P.jsxs)(Sv,{children:[(0,P.jsx)(wi,{size:15}),(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`strong`,{children:a?.deviceName||n(`This device`)}),(0,P.jsx)(Cv,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,P.jsx)(wv,{children:n(`No folders are shared yet.`)}),a?.shares.map(e=>(0,P.jsxs)(Tv,{children:[(0,P.jsxs)(Ev,{children:[(0,P.jsx)(Dv,{title:e.path,children:e.name}),(0,P.jsx)(kv,{disabled:s,onClick:()=>void u(()=>Sc(e.id)),title:n(`Stop sharing`),type:`button`,children:(0,P.jsx)(xi,{size:10})})]}),(0,P.jsx)(Ov,{title:e.path,children:e.path}),(0,P.jsxs)(Av,{children:[(0,P.jsxs)(jv,{$active:e.mode===`client`,onClick:()=>void u(()=>Cc(e.id,`client`)),title:n(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,P.jsx)(wi,{size:11}),n(`App`)]}),(0,P.jsxs)(jv,{$active:e.mode===`web`,onClick:()=>void u(()=>Cc(e.id,`web`)),title:n(`Any device with a browser can open this folder.`),type:`button`,children:[(0,P.jsx)(na,{size:11}),n(`Web`)]})]})]},e.id)),(0,P.jsxs)(Mv,{disabled:s||e.length===0||d,onClick:()=>void u(()=>xc(e,`client`)),title:d?n(`This folder is already shared.`):e,type:`button`,children:[(0,P.jsx)(li,{size:12}),n(`Share this folder`)]}),a?.webRunning&&(0,P.jsxs)(Nv,{children:[(0,P.jsxs)(Pv,{children:[(0,P.jsx)(na,{size:12}),n(`Browser access`)]}),a.urls.map(e=>(0,P.jsx)(Fv,{onClick:()=>void W(e),type:`button`,children:e},e)),(0,P.jsx)(Cv,{children:n(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var hv=_.div`
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
    ${Fa}
    ${Ja}
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
`;function Iv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=L(),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,E.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Zc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,P.jsxs)(Lv,{ref:l,children:[(0,P.jsx)(Rv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,P.jsx)(gi,{size:14}):(0,P.jsx)(hi,{size:14})}),s&&(0,P.jsxs)(zv,{children:[(0,P.jsx)(Bv,{children:o(`View`)}),(0,P.jsxs)(Hv,{children:[(0,P.jsxs)(Uv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,P.jsx)(hi,{size:12}),` `,o(`List`)]}),(0,P.jsxs)(Uv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,P.jsx)(gi,{size:12}),` `,o(`Grid`)]})]}),(0,P.jsx)(Bv,{children:o(`List icon size`)}),(0,P.jsxs)(Wv,{children:[(0,P.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,P.jsxs)(Gv,{children:[e.iconSize,`px`]})]}),(0,P.jsx)(Bv,{children:o(`Grid size`)}),(0,P.jsxs)(Wv,{children:[(0,P.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,P.jsxs)(Gv,{children:[e.gridSize,`px`]})]}),(0,P.jsxs)(Bv,{children:[o(`Columns`),(0,P.jsx)(km,{}),(0,P.jsx)(Vv,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`Reset column widths`),type:`button`,children:o(`Reset widths`)})]}),Zc.map(e=>(0,P.jsxs)(Kv,{children:[(0,P.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,P.jsxs)(Kv,{children:[(0,P.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,P.jsxs)(Bv,{children:[o(`Preview panel`),(0,P.jsx)(km,{})]}),(0,P.jsxs)(Kv,{children:[(0,P.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var Lv=_.div`
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
`,qv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Jv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Yv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Xv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,P.jsx)(`path`,{d:`M2 5h6`})}),Zv=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,P.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Qv=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,P.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,P.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function $v({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:ee,onToggleDetails:te,shortcuts:ne,currentFolder:re}){let C=L(),w=fe(),ie=pe(),[T,ae]=(0,E.useState)({left:!1,right:!1}),[D,oe]=(0,E.useState)(null),[O,se]=(0,E.useState)(null),k=(0,E.useRef)(null),A=(0,E.useRef)(null),j=(0,E.useRef)(null),M=(0,E.useCallback)(()=>{let e=A.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ae(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,E.useEffect)(()=>{M();let e=A.current;if(!e)return;let t=new ResizeObserver(M);return t.observe(e),()=>t.disconnect()},[M,e.length]),(0,E.useEffect)(()=>()=>{k.current&&window.clearTimeout(k.current.timer)},[]),(0,E.useEffect)(()=>{j.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ce=e=>A.current?.scrollBy({left:e,behavior:`smooth`}),le=()=>{k.current&&window.clearTimeout(k.current.timer),k.current=null,se(null)};return(0,P.jsxs)(ry,{children:[(0,P.jsx)(iy,{children:(0,P.jsx)(wi,{size:19})}),(0,P.jsxs)(ay,{children:[T.left&&(0,P.jsx)(sy,{onClick:()=>ce(-180),title:C(`Scroll tabs left`),type:`button`,children:(0,P.jsx)(qv,{})}),(0,P.jsx)(oy,{onScroll:M,onWheel:e=>{let t=A.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:A,children:e.map(e=>(0,P.jsxs)(cy,{$active:e.id===t,$dragging:D===e.id,$dropTarget:O===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Ys(t.dataTransfer)||!ey(e)||(t.preventDefault(),k.current?.id===e.id))return;le(),se(e.id);let r=window.setTimeout(()=>{n(e.id),k.current=null},500);k.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(k.current?.id===e.id||O===e.id)&&le()},onDragEnd:()=>{oe(null),le()},onDragOver:t=>{(D||Ys(t.dataTransfer)&&ey(e))&&(t.preventDefault(),Ys(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>oe(e.id),onDrop:t=>{if(t.preventDefault(),D)a(D,e.id);else if(ey(e)&&Ys(t.dataTransfer)){let{paths:r,move:i}=Xs(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}oe(null),le()},onClick:()=>n(e.id),ref:e.id===t?j:void 0,title:e.path||e.title,type:`button`,children:[(0,P.jsx)(ty,{tab:e}),(0,P.jsx)(ly,{children:e.title}),e.partner&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(uy,{children:`|`}),(0,P.jsx)(ny,{place:e.partner.place}),(0,P.jsx)(ly,{children:e.partner.title})]}),(0,P.jsx)(dy,{"data-shortcut":qt(ne.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:C(`Close tab`),children:(0,P.jsx)(Yv,{})})]},e.id))}),T.right&&(0,P.jsx)(sy,{onClick:()=>ce(180),title:C(`Scroll tabs right`),type:`button`,children:(0,P.jsx)(Jv,{})}),(0,P.jsx)(fy,{"data-shortcut":qt(ne.newTab),onClick:i,title:C(`New tab`),type:`button`,children:(0,P.jsx)(li,{size:13})})]}),(0,P.jsx)(py,{...ie}),(0,P.jsxs)(my,{children:[(0,P.jsx)(gy,{$active:y,"data-shortcut":qt(ne.splitView),disabled:!b,onClick:x,title:C(y?`Close split view`:`Split view`),type:`button`,children:(0,P.jsx)(da,{size:15})}),(0,P.jsx)(gy,{$active:S,disabled:!ee,onClick:te,title:C(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,P.jsx)(fa,{size:15})}),(0,P.jsxs)(hy,{$active:_,onClick:v,title:C(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,P.jsx)(ta,{size:14}),g>0&&(0,P.jsx)(E_,{children:g>9?`9+`:g})]}),(0,P.jsx)(X_,{}),(0,P.jsx)(mv,{currentFolder:re}),(0,P.jsx)(D_,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,P.jsx)(Iv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,P.jsx)(_y,{onClick:w.minimize,title:C(`Minimize`),type:`button`,children:(0,P.jsx)(Xv,{})}),(0,P.jsx)(_y,{onClick:w.toggleMaximize,title:w.maximized?C(`Restore`):C(`Maximize`),type:`button`,children:w.maximized?(0,P.jsx)(Qv,{}):(0,P.jsx)(Zv,{})}),(0,P.jsx)(vy,{onClick:w.close,title:C(`Close`),type:`button`,children:(0,P.jsx)(Yv,{})})]})]})}function ey(e){return e.kind===`files`&&(!p(e.path)||T(e.path))}function ty({tab:e}){switch(e.kind){case`home`:return(0,P.jsx)(ni,{size:13});case`settings`:return(0,P.jsx)(pi,{size:13});case`recycle`:return(0,P.jsx)(yi,{size:13});default:return e.archive?(0,P.jsx)(Ai,{size:13}):(0,P.jsx)(ny,{place:e.place})}}function ny({place:e}){return e?(0,P.jsx)(Os,{place:e,size:13}):(0,P.jsx)(ri,{size:13})}var ry=_.header`
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
`;function yy(){let[e,t]=(0,E.useState)(null),n=(0,E.useRef)(null),r=(0,E.useRef)(void 0);return(0,E.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Pa.createPortal)((0,P.jsx)(by,{tooltip:e}),document.body):null}function by({tooltip:e}){let t=(0,E.useRef)(null),[n,r]=(0,E.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,E.useState)(()=>e.bottom+6);return(0,E.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,P.jsxs)(xy,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,P.jsx)(Sy,{children:e.text}),e.shortcut&&(0,P.jsx)(Cy,{children:e.shortcut})]})}var xy=_.div`
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
`,wy={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function Ty({deviceName:e,code:t,onAccept:n,onReject:r}){let i=L(),a=(0,E.useRef)(null);return(0,E.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Pa.createPortal)((0,P.jsx)(Ey,{children:(0,P.jsxs)(Dy,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsxs)(Oy,{children:[(0,P.jsx)(ea,{size:15}),i(`Pair for sharing`)]}),(0,P.jsx)(ky,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,P.jsx)(Ay,{children:t}),(0,P.jsx)(jy,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,P.jsxs)(My,{children:[(0,P.jsx)(Ny,{onClick:r,type:`button`,children:i(`Reject`)}),(0,P.jsx)(Py,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var Ey=_.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Ya}
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
    ${Wa}
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
`,Fy=0,Iy=new Set;function Ly(e){Iy.add(e),N.send({type:`app.navigate.done`,payload:{path:e}})}var Ry=20,zy=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function By(e){return e.history[e.index]??Cp(`home`)}function Vy(e){return wp(By(e))??`files`}function Hy(e){let t=By(e);return wp(t)?``:e.listing?.path||t}function Uy(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Vy(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Wy(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Gy(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||ve.iconSize,gridSize:e.view?.gridSize||t.gridSize||ve.gridSize,sort:e.view?.sort??ve.sort,sortDescending:e.view?.sortDescending??ve.sortDescending,columns:t.columns??ye.columns??[]}}function Ky(e=Cp(`home`)){return Fy+=1,{id:`tab-${Fy}`,listing:null,loading:!wp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function qy(e){return e instanceof Error?e.message:String(e)}function Jy(e){let t=Mc(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return Nc(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Yy(e){let t=v(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Xy(e){return p(e)?Qt(e):void 0}function Zy(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:f(n)})}function Qy(){let e=L(),[n,r]=(0,E.useState)(()=>[Ky()]),[i,a]=(0,E.useState)(()=>n[0].id),[o,s]=(0,E.useState)(null),[d,f]=(0,E.useState)(()=>{let e=Rn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[m,h]=(0,E.useState)([]),[g,_]=(0,E.useState)([]),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(null),[ne,re]=(0,E.useState)(null),C=B(),[w,ie]=(0,E.useState)(vn),[ae,D]=(0,E.useState)(0),[oe,O]=(0,E.useState)(0),[se,k]=(0,E.useState)(0),[A,j]=(0,E.useState)(vn),[M,ce]=(0,E.useState)(0),[le,ue]=(0,E.useState)(0),[de,F]=(0,E.useState)(0),[I,R]=(0,E.useState)(0),z=(0,E.useRef)(I);z.current=I;let[fe,pe]=(0,E.useState)([]),[me,ge]=(0,E.useState)(10),[V,be]=(0,E.useState)(null),Te=(0,E.useMemo)(()=>(V?.favorites??[]).map(e=>l(e.path)),[V?.favorites]),[je,Me]=(0,E.useState)(0),[U,Ne]=(0,E.useState)(Ht),[Pe,Fe]=(0,E.useState)(0),[Ie,Le]=(0,E.useState)(0),[Re,Be]=(0,E.useState)(0),[He,Ue]=(0,E.useState)(!0),[We,Ke]=(0,E.useState)(()=>{let e=Rn(`yafm.preview.width`,320);return e>=220?e:320}),[qe,Ye]=(0,E.useState)(null),[Xe,Ze]=(0,E.useState)(null),[Qe,$e]=(0,E.useState)(`primary`),[et,tt]=(0,E.useState)(null),[nt,at]=(0,E.useState)(null),[ot,lt]=(0,E.useState)(null),[W,ut]=(0,E.useState)(null),[dt,ft]=(0,E.useState)({primary:0,secondary:0}),[pt,mt]=(0,E.useState)({primary:null,secondary:null}),[ht,gt]=(0,E.useState)(null),[vt,wt]=(0,E.useState)([]),[Et,Dt]=(0,E.useState)(!1),Ot=(0,E.useRef)([]),At=(0,E.useRef)([]),[jt,Mt]=(0,E.useState)([]),[Nt,Pt]=(0,E.useState)(!1),Lt=(0,E.useMemo)(()=>Nt?new Set(jt.map(e=>e.path)):new Set,[jt,Nt]),[Rt,zt]=(0,E.useState)(!1),[Ut,Jt]=(0,E.useState)([]),[Xt,Zt]=(0,E.useState)(null),nn=(0,E.useRef)(0),[rn,an]=(0,E.useState)(()=>{let e=Bn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Wy({x:e.x,y:e.y}):Wy({x:Math.max(20,window.innerWidth-340),y:110})}),on=(0,E.useCallback)(()=>{an(e=>Wy(e)),zt(!0)},[]),K=n.find(e=>e.id===i)??n[0],q=Vy(K),ln=By(K),J=Hy(K),un=q===`files`?K.listing?.parent??Jy(J):null,dn=K.splitWith?n.find(e=>e.id===K.splitWith):void 0,fn=q===`files`&&dn!==void 0,pn=dn?Hy(dn):``,mn=dn?dn.listing?.parent??Jy(pn):null,hn=fn&&dn&&Qe===`secondary`?dn:K,gn=V?.defaultView??ye,_n=Gy(hn,gn);(0,E.useEffect)(()=>{ee(V?.accentColor,V?.secondaryColor)},[V?.accentColor,V?.secondaryColor]),(0,E.useEffect)(()=>{Nm(V?.fonts)},[V?.fonts]),(0,E.useEffect)(()=>{te(V?.timeFormat,V?.timeFormatPattern)},[V?.timeFormat,V?.timeFormatPattern]),(0,E.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!V?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[V?.backgroundSource]),(0,E.useEffect)(()=>(_e(e=>new Promise(t=>{Zt({id:++nn.current,prompt:e,resolve:t})})),()=>_e(null)),[]),(0,E.useEffect)(()=>{$e(`primary`)},[i]),(0,E.useEffect)(()=>{j(vn),ue(0),F(0)},[q]),(0,E.useEffect)(()=>{ue(0)},[A.query,A.matchCase,A.regex]),(0,E.useEffect)(()=>{ue(e=>de===0?0:Math.min(e,de-1))},[de]);let yn=_n.columns.includes(`linkCount`),bn=(0,E.useMemo)(()=>{let e={},t=Ts(V),n={};for(let[e,t]of Object.entries(V?.placeNames??{}))n[l(e)]=t;for(let t of m)e[l(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=l(t),i=m.find(e=>l(e.path)===r);e[r]={name:n[r]??i?.name??(v(t)||t),path:t,kind:`folder`,icon:i?.icon??V?.placeIcons?.[t]??null}}return e},[m,V]),xn=(0,E.useMemo)(()=>({places:bn,useIcons:V?.systemIcons===!1}),[bn,V?.systemIcons]),Sn=V?.defaultView?.showImages??!0,Cn=V?.defaultView?.imageStripHeight??ye.imageStripHeight,wn=q===`home`?(0,P.jsx)(zi,{size:13}):q===`settings`?(0,P.jsx)(pi,{size:13}):q===`recycle`?(0,P.jsx)(yi,{size:13}):q===`gallery`?(0,P.jsx)(Di,{size:13}):void 0,Tn=w.open&&w.query.length>0,En=(0,E.useMemo)(()=>Tn&&hn.listing?hn.listing.entries.filter(e=>Dn(e.isDirectory?Ln(xn,e.fullPath,e.name):e.name,w)).map(e=>e.fullPath):[],[Tn,w,hn.listing,xn]);(0,E.useEffect)(()=>{D(0)},[w.query,w.matchCase,w.regex,hn.listing?.path]);let On=En.length===0?-1:Math.min(ae,En.length-1),kn=(0,E.useCallback)(()=>{ie(e=>({...e,open:!1,query:``})),D(0)},[]),An=(0,E.useCallback)(()=>{ie(e=>({...e,open:!0})),O(e=>e+1)},[]),jn=(0,E.useCallback)(()=>{j(e=>({...e,open:!0})),ce(e=>e+1)},[]),Mn=(0,E.useCallback)(()=>{j(vn),ue(0),F(0)},[]),Nn=(0,E.useCallback)(e=>{ue(t=>de===0?0:(Math.min(t,de-1)+e+de)%de)},[de]),Fn=(0,E.useCallback)(e=>{ie(t=>({...t,open:!0,query:t.open?t.query+e:e})),O(e=>e+1)},[]),Hn=(0,E.useCallback)(e=>{D(t=>En.length===0?0:(Math.min(t,En.length-1)+e+En.length)%En.length)},[En.length]),Un=(0,E.useRef)({tabs:n,activeId:i,activePane:Qe});Un.current={tabs:n,activeId:i,activePane:Qe};let Wn=(0,E.useRef)(V);Wn.current=V;let Gn=(0,E.useRef)(!1),Kn=(0,E.useRef)([]),qn=(0,E.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Jn=(0,E.useRef)(new Map),Yn=(0,E.useCallback)(e=>{let t=(Jn.current.get(e)??0)+1;return Jn.current.set(e,t),()=>Jn.current.get(e)===t},[]),Xn=(0,E.useCallback)((e,t)=>{N.available&&t&&e===Uy(Un.current)&&N.send({type:`fs.focus`,payload:{path:t}})},[]),Zn=(0,E.useCallback)(async(e,t,n)=>{if(!(t&&jc(t)))try{let r=await Oe(t,yn);if(!n()||!r.listing)return;qn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[yn,qn]),Qn=(0,E.useCallback)(async(e,n,r=!1)=>{let i=Yn(e);kn(),Xn(e,n);let a=!r||!Un.current.tabs.find(t=>t.id===e)?.listing,o=!r&&n!==void 0;qn(e,e=>{if(!o)return{listing:r?e.listing:null,loading:!0,error:null,fresh:r&&e.fresh};let i=e.history[e.index],a=i!==void 0&&t(i,n);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),n],index:a?e.index:e.index+1}});try{a&&Zn(e,n,i);let t=n&&jc(n)?await Pc(n):await H(n,!0,yn,z.current,n?Xy(n):void 0);if(!i())return;qn(e,e=>({listing:t,view:t.view??null,loading:!1,fresh:!1,history:o?e.history.map((n,r)=>r===e.index?t.path:n):e.history,index:e.index})),!r&&!jc(t.path)&&Ve(t.path).then(()=>Me(e=>e+1))}catch(t){if(!i())return;let a=Un.current.tabs.find(t=>t.id===e),o=n&&n.length>0?n:a?Hy(a):``,s=Jy(o),c=qy(t);if(o&&tn(c)){let t=u(o),a=await wa(t,!!Qt(t));if(a){$t(t,a),i()&&Qn(e,n,r);return}}qn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...r?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Yn,yn,qn,Xn,kn,Zn]),$n=(0,E.useCallback)((e,t)=>{let n=Tp(t);n&&(wp(n)?(kn(),Yn(e),qn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Qn(e,n))},[Yn,Qn,qn,kn]),er=(0,E.useCallback)(async(e,t,n)=>{if(kn(),wp(t)){Yn(e),qn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Yn(e);Xn(e,t),qn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{jc(t)||Zn(e,t,r);let n=jc(t)?await Pc(t):await H(t,!0,yn,z.current,Xy(t));if(!r())return;qn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(tn(qy(i))){let i=u(t),a=await wa(i,!!Qt(i));if(a){$t(i,a),r()&&er(e,t,n);return}}qn(e,()=>({listing:{path:t,parent:Jy(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:qy(i)}))}},[Yn,yn,qn,Xn,kn,Zn]),tr=(0,E.useCallback)((e,t=!0)=>{let n=Ky(e??Cp(`home`));return r(e=>[...e,n]),t&&a(n.id),e&&!wp(e)&&Qn(n.id,e),n.id},[Qn]),nr=(0,E.useCallback)(e=>{for(let n of Un.current.tabs)Vy(n)===`files`&&t(Hy(n),e)&&Qn(n.id,e,!0)},[Qn]),rr=(0,E.useCallback)((e,n)=>{let r=v(n);for(let i of Un.current.tabs)i.listing?.entries.some(n=>t(n.fullPath,e))&&qn(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>t(i.fullPath,e)?{...i,name:r,fullPath:n}:i);return{listing:{...a,entries:o}}})},[qn]),ir=(0,E.useRef)([]);(0,E.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&p(n)&&e.add(l(u(n)))}let t=ir.current.filter(t=>!e.has(t));ir.current=[...e],t.length>0&&we(t)},[n]);let ar=(0,E.useCallback)((e,t=!1)=>{t?tr(Cp(e)):$n(Un.current.activeId,Cp(e))},[tr,$n]),or=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Un.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(At.current.push(By(i)),At.current.length>Ry&&At.current.shift()),o.length===0){let e=Ky();r([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);r(o),n===e&&a(o[Math.min(s,o.length-1)].id)},[]),sr=(0,E.useCallback)(()=>{let e=At.current.pop();if(!e)return;let t={...Ky(e),fresh:!1};r(e=>[...e,t]),a(t.id),Vy(t)===`files`&&Qn(t.id,Hy(t))},[Qn]),cr=(0,E.useCallback)((e,t=!1)=>{t?tr(e):$n(Uy(Un.current),e??Cp(`home`))},[$n,tr]),lr=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Un.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),ur=(0,E.useCallback)(()=>{let{tabs:e,activeId:t}=Un.current,n=e.find(e=>e.id===t);if(!n||Vy(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),qn(t,()=>({splitWith:void 0})),$e(`primary`);return}let a=Hy(n),o={...Ky(a),hidden:!0};r(e=>[...e,o]),qn(t,()=>({splitWith:o.id})),Qn(o.id,a),$e(`primary`)},[Qn,qn]),dr=(0,E.useCallback)(e=>{Ke(e),zn(`yafm.preview.width`,e)},[]),fr=fn?Qe===`secondary`?Xe??qe:qe??Xe:qe,pr=(0,E.useRef)(null),mr=e=>{e.preventDefault();let t=pr.current?.getBoundingClientRect();if(!t)return;let n=He?We:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);f(n),zn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},hr=(e,t,n)=>{t&&tt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},gr=(0,E.useCallback)((e,t)=>{ft(n=>n[e]===t?n:{...n,[e]:t})},[]),_r=(0,E.useCallback)(e=>gr(`primary`,e),[gr]),vr=(0,E.useCallback)(e=>gr(`secondary`,e),[gr]),yr=(e,t)=>{dt[e]!==0&&mt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},br=async(e,t=!1)=>{let n=et;if(tt(null),!n)return;let r=e===null?await Tt(n.directory,t):await kt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;kn(),gt(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},xr=(0,E.useCallback)(()=>{let{tabs:e}=Un.current,t=e.find(e=>e.id===Uy(Un.current));t&&t.index>0&&er(t.id,t.history[t.index-1],t.index-1)},[er]),Sr=(0,E.useCallback)(()=>{let{tabs:e}=Un.current,t=e.find(e=>e.id===Uy(Un.current));t&&t.index<t.history.length-1&&er(t.id,t.history[t.index+1],t.index+1)},[er]),Cr=(0,E.useCallback)(()=>{let{tabs:e}=Un.current,t=e.find(e=>e.id===Uy(Un.current));t&&Vy(t)===`files`&&t.listing?.parent&&cr(t.listing.parent)},[cr]),wr=(0,E.useRef)(null),Tr=(0,E.useCallback)(()=>{for(let e of Un.current.tabs)e.listing&&Qn(e.id,e.listing.path,!0)},[Qn]),Er=(0,E.useCallback)(e=>{e.length!==0&&(Jt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),on())},[on]),Dr=(0,E.useCallback)(async e=>{let t=await xt(e);t.length!==0&&Er(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Er]),Or=(0,E.useCallback)(e=>{let t=new Set(e);Jt(e=>e.filter(e=>!t.has(e.path)))},[]),kr=(0,E.useCallback)(async e=>{let t=Wn.current;if(!t)return;let n=await xt(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>l(e.path))),i=n.filter(e=>!r.has(l(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};be(a),await rt(a),Fe(e=>e+1)},[]),Ar=(0,E.useCallback)(async e=>{let t=Wn.current;if(!t)return;let n=new Set(e.map(l)),r=(t.favorites??[]).filter(e=>!n.has(l(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};be(i),await rt(i),Fe(e=>e+1)},[]),jr=(0,E.useCallback)(()=>Jt([]),[]),Mr=(0,E.useRef)(-1),Nr=(0,E.useCallback)(e=>{Mt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Pt(e.move),e.entries.length>0&&on()},[on]),Pr=(0,E.useCallback)(async()=>{if(N.available)try{let e=await yt();Mr.current=e.sequence,Nr(e)}catch{}},[Nr]),Fr=(0,E.useCallback)(async e=>{e.length!==0&&await _t(e,!1)&&await Pr()},[Pr]),Ir=(0,E.useRef)(Ut);Ir.current=Ut,(0,E.useEffect)(()=>{let e=e=>{Ys(e.dataTransfer)&&on()},t=e=>{Ys(e.dataTransfer)&&on()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[on]),(0,E.useEffect)(()=>{let e=()=>an(e=>Wy(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Lr=(0,E.useCallback)(async()=>{let e=Ir.current;if(e.length>0){let t=await xt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Jt(e=>e.filter(e=>n.has(e.path)))}await Pr()},[Pr]),Rr=(0,E.useCallback)(()=>{Lr(),Be(e=>e+1),Tr()},[Lr,Tr]),zr=(0,E.useCallback)(e=>{let t=Wy(e);an(t),Vn(`yafm.tray.position`,t)},[]),Br=(0,E.useCallback)(()=>{Rt?zt(!1):on()},[on,Rt]),Vr=(0,E.useCallback)(async(t,n,r)=>{let i=await bt(t,n,r);i.ok?(r&&Or(t),Be(e=>e+1),Tr(),Pr()):Sa(i.error??e(`The files could not be transferred.`))},[Tr,Pr,Or]);(0,E.useEffect)(()=>{if(N.available)return G().then(e=>{Ot.current=e,wt(e)},()=>void 0),N.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Ot.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Ot.current=n,wt(n),r&&Dt(!0)})},[]);let Hr=(0,E.useCallback)(()=>{Vt().then(()=>G().then(e=>{Ot.current=e,wt(e)},()=>void 0))},[]);(0,E.useEffect)(()=>{if(!N.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await yt();if(!e||t.sequence===Mr.current)return;Mr.current=t.sequence,Nr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Nr]);let Ur=(0,E.useCallback)(async e=>{let t=e?await Ft():await It();t.ok?(Be(e=>e+1),Tr()):t.error&&!t.error.startsWith(`Nothing to`)&&Sa(t.error)},[Tr]),Wr=(0,E.useRef)(yn);(0,E.useEffect)(()=>{Wr.current!==yn&&(Wr.current=yn,Tr())},[yn,Tr]);let Gr=(0,E.useCallback)((e,t)=>{let{tabs:n}=Un.current,r=n.find(t=>t.id===e);if(!r||Vy(r)!==`files`)return;let i=Hy(r),a=Wn.current?.defaultView??ye,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||ve.iconSize,gridSize:r.view?.gridSize||a.gridSize||ve.gridSize,sort:r.view?.sort??ve.sort,sortDescending:r.view?.sortDescending??ve.sortDescending,...t};qn(e,()=>({view:o})),wr.current!==null&&window.clearTimeout(wr.current),wr.current=window.setTimeout(()=>{wr.current=null,Ee(i,o)},250)},[qn]),Kr=(0,E.useCallback)(e=>{Gr(Uy(Un.current),e)},[Gr]),qr=(0,E.useCallback)(e=>{let t=Wn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ye,columns:e}};be(n),rt(n)},[]),Jr=(0,E.useCallback)(e=>{let t=Wn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ye,showImages:e}};be(n),rt(n)},[]),Yr=(0,E.useCallback)(e=>{let t=Wn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ye,imageStripHeight:e}};be(n),rt(n)},[]),Xr=(0,E.useCallback)((e,t,n,r)=>{let i=Un.current.tabs.find(t=>t.id===e);if(!i||Vy(i)!==`files`||!i.listing)return;let a=Hy(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));qn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),De(a,t,n,r)},[qn]),Zr=(0,E.useCallback)((e,t)=>{let n=Un.current.tabs.find(t=>t.id===e);if(!n)return;let r=Gy(n,Wn.current?.defaultView??ye);Gr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Gr]),Qr=(0,E.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),$r=(0,E.useCallback)(()=>{ke().then(h,()=>h([]))},[]),ei=(0,E.useCallback)(e=>{let t=(e.openTabs??[]).map(Tp).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...Ky(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),a(n[i].id);for(let e of n)Vy(e)===`files`&&Qn(e.id,Hy(e),!0);return!0},[Qn]),ti=(0,E.useCallback)(e=>{let t=Kn.current;if(Kn.current=[],t.length===0)return;let n=t.filter(e=>!Iy.has(e));for(let e of t)n.includes(e)||Ly(e);if(n.length===0)return;let{tabs:r}=Un.current;if(!e&&r.length===1&&r[0].fresh){$n(r[0].id,n[0]),Ly(n[0]);for(let e of n.slice(1))tr(e),Ly(e);return}let i=n.map(e=>{let t=tr(e);return Ly(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[tr,$n]),Y=(0,E.useCallback)(()=>{Je().then(e=>{be(e),ge(e.recentLimit);let t={...Ht,...e.shortcuts};Ne(t),Wt(t.openInNewTab),Fe(e=>e+1),Gn.current||(Gn.current=!0,ti(e.restoreTabs&&ei(e)))},()=>{ge(10),Gn.current=!0,ti(!1)})},[ti,ei]),ni=(0,E.useCallback)(()=>{ze().then(pe,()=>pe([]))},[]),ri=(0,E.useCallback)(()=>{Ae().then(_,()=>_([]))},[]),ii=n.filter(e=>!e.hidden),ai=ii.map(By),ci=ai.join(`
`),fi=Math.max(ii.findIndex(e=>e.id===i),0);(0,E.useEffect)(()=>{if(!V?.restoreTabs)return;let e=setTimeout(()=>void it(ai,fi),700);return()=>clearTimeout(e)},[ci,fi,V?.restoreTabs]),(0,E.useEffect)(()=>{let{tabs:e,activeId:t}=Un.current,n=e.find(e=>e.id===t);n&&n.fresh&&Vy(n)===`files`&&Qn(n.id,Hy(n),!0),$r(),Y(),ri(),st().then(b,()=>b(null))},[Qn,$r,Y,ri]),(0,E.useEffect)(()=>{if(ct().then(S,()=>S(null)),N.available)return N.on(e=>{let t=e;t.type===`app.update`&&t.data&&S(t.data)})},[]),(0,E.useEffect)(()=>{if(N.available)return N.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&s({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Sa(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Sa(n.data.error??e(`Pairing failed.`))}})},[e]),(0,E.useEffect)(()=>{let e=setInterval(ri,3e4);return()=>clearInterval(e)},[ri]),(0,E.useEffect)(()=>{q===`home`&&(ni(),ri())},[q,K.id,ni,ri]),(0,E.useEffect)(()=>{if(!N.available)return;let e=N.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Un.current,i=t.data.startup===!0;i&&Iy.has(n)?Ly(n):i&&!Gn.current?Kn.current.includes(n)||Kn.current.push(n):(i&&r.length===1&&r[0].fresh?$n(r[0].id,n):wp(n)?$n(Uy(Un.current),n):tr(n),i&&Ly(n))});return N.send({type:`app.ready`}),e},[$n,tr]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},r})})},[]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},r})})},[]),(0,E.useEffect)(()=>{let e=e=>{if(Yt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),xr();return}if(e.key===`BrowserForward`){e.preventDefault(),Sr();return}if(e.key===`Escape`&&w.open){e.preventDefault(),kn();return}let t=Kt(e);if(t===U.closeTab)e.preventDefault(),or(Uy(Un.current));else if(t===U.newTab)e.preventDefault(),tr();else if(t===U.reopenTab)e.preventDefault(),sr();else if(t===U.goBack)e.preventDefault(),xr();else if(t===U.goForward)e.preventDefault(),Sr();else if(t===U.goUp)e.preventDefault(),Cr();else if(t===U.find)e.preventDefault(),q===`files`?An():jn();else if(t===U.location)e.preventDefault(),Le(e=>e+1);else if(t===U.home){e.preventDefault();let t=m.find(e=>e.kind===`home`)?.path;t&&cr(t)}else t===U.iconsView?(e.preventDefault(),q===`files`&&Kr({mode:`grid`})):t===U.detailsView?(e.preventDefault(),q===`files`&&Kr({mode:`list`})):t===U.nextTab?(e.preventDefault(),lr(1)):t===U.previousTab?(e.preventDefault(),lr(-1)):t===U.hidden||t===`alt+.`?(e.preventDefault(),Ge().then(()=>{Be(e=>e+1),Tr()})):t===U.undo?(e.preventDefault(),Ur(!0)):t===U.redo?(e.preventDefault(),Ur(!1)):t===U.splitView?(e.preventDefault(),ur()):q!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Fn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[U,q,w.open,or,sr,tr,xr,Sr,Cr,An,jn,kn,Fn,Kr,lr,cr,m,Tr,Ur,ur]),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),xr()):e.button===4&&(e.preventDefault(),Sr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[xr,Sr]);let mi=(0,E.useMemo)(()=>{let e=new Set;for(let t of n){if(Vy(t)!==`files`)continue;let n=Hy(t);if(n&&!jc(n)){if(p(n)){let t=Jy(u(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),hi=mi.join(`\0`);(0,E.useEffect)(()=>{N.available&&N.send({type:`fs.watch`,payload:{paths:mi,owner:`app`}})},[hi,i]);let gi=Vy(hn)===`files`?Hy(hn):``;(0,E.useEffect)(()=>{N.available&&N.send({type:`fs.focus`,payload:{path:gi||null}})},[gi]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let n=e;if(n.type!==`fs.changed`||typeof n.data?.path!=`string`)return;let r=n.data.path,i=Un.current.tabs.filter(e=>Vy(e)===`files`&&t(Hy(e),r)),a=Un.current.tabs.filter(e=>{let n=Hy(e);return Vy(e)===`files`&&n.length>0&&p(n)&&t(u(n),r)});if(i.length!==0||a.length!==0){cn(r);for(let e of a){let n=Un.current.tabs.find(t=>t.id===e.id),i=n?Hy(n):``;n&&Vy(n)===`files`&&!n.loading&&p(i)&&t(u(i),r)&&Qn(e.id,i,!0)}i.length!==0&&H(r,!1,yn).then(e=>{for(let n of i){let r=Un.current.tabs.find(e=>e.id===n.id);r&&Vy(r)===`files`&&t(Hy(r),e.path)&&(r.loading?window.setTimeout(()=>{let r=Un.current.tabs.find(e=>e.id===n.id);r&&!r.loading&&Vy(r)===`files`&&t(Hy(r),e.path)&&qn(n.id,()=>({listing:e}))},300):qn(n.id,()=>({listing:e})))}},()=>void 0)}})},[yn,Qn,qn]);let _i=K.index>0,vi=K.index<K.history.length-1,bi=(e,n)=>{let r=Gy(e,gn),i=e.listing?.path??e.history[e.index]??``,a=p(i),o=a&&T(i);return(0,P.jsx)(ol,{confirmDelete:V?.confirmDelete??!1,cutPaths:Lt,previewVideoAudio:V?.previewVideoAudio??!1,previewVideoAutoplay:V?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:n?Ye:Ze,onActivate:()=>$e(n?`primary`:`secondary`),enableShortcuts:(!fn||(n?Qe===`primary`:Qe===`secondary`))&&(!a||o),error:e.error,find:e.id===hn.id?{...w,currentPath:On<0?null:En[On]}:void 0,selectMatchesToken:e.id===hn.id?se:0,imageStripHeight:Cn,listing:e.listing,loading:e.loading,onImageStripHeight:Yr,readOnly:a&&!o||jc(e.listing?.path??``),onOpen:(t,n)=>{n?tr(t):Qn(e.id,t)},onOpenFile:(t,n)=>{jc(t)?Ic(t).catch(e=>void Sa(qy(e))):c(t)?V?.archiveHandler??!1?n?tr(t):Qn(e.id,t):xe(t):p(t)?(async()=>{let e=await Ce(t,z.current,Xy(t));if(!e.path&&tn(e.error)){let n=u(t),r=Qt(n);r&&en(n);let i=await wa(n,!!r);i&&($t(n,i),e=await Ce(t,z.current,i))}e.path?xe(e.path):e.error&&Sa(e.error)})():xe(t)},onRefresh:()=>{let t=e.listing?.path;t&&nr(t)},onRename:rr,onSelectionCountChange:n?_r:vr,onSetTags:(t,n,r)=>Xr(e.id,t,n,r),selectionMenuRequest:n?pt.primary:pt.secondary,onSort:t=>Zr(e.id,t),onPaste:Rr,onClipboardChanged:()=>void Pr(),onTransfer:Vr,onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:Te,onExtractArchive:(e,t)=>void Ei(e,t),openOnSingleClick:V?.openOnSingleClick??!1,pendingRename:ht&&n===(Qe===`primary`)&&t(ht.directory,e.listing?.path??``)?ht.path:null,pendingRenameToken:ht?.token??0,refreshToken:Re,shortcuts:U,showCheckboxes:V?.showCheckboxes??!0,showImages:Sn,view:r})},xi=w.open&&(0,P.jsx)(Nd,{current:On,focusToken:oe,matchCase:w.matchCase,mode:w.mode,onClose:kn,onMatchCase:()=>ie(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ie(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Hn(1),onPrevious:()=>Hn(-1),onQuery:e=>ie(t=>({...t,query:e})),onRegex:()=>ie(e=>({...e,regex:!e.regex})),query:w.query,regex:w.regex,total:En.length,onSelectMatches:En.length>0?()=>k(e=>e+1):void 0}),Si=q===`files`&&p(J),Ci=Si&&T(J),wi=Si&&K.listing?.archiveEncrypted===!0,Ti=async(t,n)=>{let r=u(t),i=await Se(r,n,z.current,Xy(r));if(!i.ok&&tn(i.error)){let e=Qt(r);e&&en(r);let t=await wa(r,!!e);t&&($t(r,t),i=await Se(r,n,z.current,t))}i.ok?(nr(n),sn(),Qn(K.id,n,!0)):Sa(`${e(`Could not extract the archive.`)}${i.error?`\n${i.error}`:``}`)},Ei=async(e,n)=>{let r=u(e),i=Jy(r);if(!i)return;if(n===`choose`){let e=await _a(i);e&&await Ti(r,e);return}let a=n===`named`;if(n===`auto`){let e=t(r,J)?K.listing?.entries??[]:(await H(r,!1,!1,z.current,Xy(r))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${Yy(r)}`:i;await Ti(r,s)},Oi=async e=>{Si&&await Ei(J,e)},ki=async()=>{Si&&await Ei(J,`choose`)},ji=(0,P.jsxs)(rb,{children:[(0,P.jsx)(ib,{"data-shortcut":qt(U.goBack),disabled:!_i,onClick:e=>{K.index>0&&Gt(e)?tr(K.history[K.index-1]):xr()},title:e(`Back`),type:`button`,children:(0,P.jsx)(ui,{})}),(0,P.jsx)(ib,{"data-shortcut":qt(U.goForward),disabled:!vi,onClick:e=>{K.index<K.history.length-1&&Gt(e)?tr(K.history[K.index+1]):Sr()},title:e(`Forward`),type:`button`,children:(0,P.jsx)(di,{})}),(0,P.jsx)(ib,{"data-shortcut":qt(U.goUp),disabled:q!==`files`||!un,onClick:e=>{un&&(Gt(e)?tr(un):cr(un))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(si,{})}),(0,P.jsx)(Ep,{focusToken:Ie,icon:wn,label:q===`files`?void 0:e(wy[q]),onContextMenu:q===`files`?(e,t,n)=>lt({x:t,y:n,path:e}):void 0,onNavigate:cr,path:q===`files`?J:ln}),q===`files`&&(!Si||Ci)&&(0,P.jsx)(ib,{onClick:e=>hr(e,J,()=>void Qn(K.id,J,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(li,{})}),(0,P.jsx)(ib,{"data-shortcut":qt(U.find),onClick:()=>q===`files`?An():jn(),title:e(`Search`),type:`button`,children:(0,P.jsx)(oi,{})}),dt.primary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(sb,{}),(0,P.jsx)(ib,{onClick:e=>yr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{})})]}),Si&&(0,P.jsxs)(ab,{children:[(0,P.jsx)(sb,{}),wi&&(0,P.jsxs)(ob,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(ma,{size:12}),e(`Encrypted`)]}),(0,P.jsx)(ib,{onClick:()=>void ki(),onContextMenu:e=>{e.preventDefault(),at({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,P.jsx)(Ai,{})}),(0,P.jsx)(po,{icon:(0,P.jsx)(na,{size:15}),onChange:e=>{let t=Number(e);R(t),z.current=t,Si&&Qn(K.id,J,!0)},options:zy.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(zy.find(e=>e.value===String(I))?.label??`Auto`)}`,value:String(I)})]})]}),Mi=A.open?{...A,index:le}:null;return(0,P.jsx)(Pn,{value:xn,children:(0,P.jsxs)($y,{$rounded:C,children:[(0,P.jsx)(Xu,{settings:V}),(0,P.jsx)($v,{activeId:K.id,onClose:or,onNewTab:()=>tr(),onReorder:Qr,onTransferToTab:Vr,onSelect:a,onViewChange:Kr,onColumns:qr,onShowImages:Jr,showImages:Sn,tasks:vt,onClearTasks:Hr,activityOpen:Et,onActivityOpenChange:Dt,trayCount:Ut.length+jt.length,trayVisible:Rt,onToggleTray:Br,split:fn,canSplit:q===`files`,onToggleSplit:ur,details:He,canDetails:q===`files`||q===`recycle`||q===`gallery`,onToggleDetails:()=>Ue(e=>!e),currentFolder:q===`files`&&!jc(J)?J:``,shortcuts:U,view:_n,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Vy(t),i=Hy(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Hy(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?In(xn,i):void 0,archive:r===`files`&&p(i),split:!!a,title:r===`files`?Ln(xn,i,v(i)||e(`Files`)):e(wy[r]),partner:a?{title:Ln(xn,o,v(o)||e(`Files`)),place:In(xn,o)}:void 0}})}),(0,P.jsxs)(eb,{children:[(0,P.jsx)(c_,{activeKind:q,currentPath:q===`files`?ln:``,drives:g,historyVersion:je,onNavigate:cr,onOpenView:ar,homePath:m.find(e=>e.kind===`home`)?.path??``,places:m,recent:fe,recentLimit:me,version:Pe}),(0,P.jsxs)(tb,{children:[q!==`files`&&ji,(0,P.jsxs)(nb,{children:[q!==`files`&&A.open&&(0,P.jsx)(Nd,{current:le,focusToken:M,matchCase:A.matchCase,mode:A.mode,onClose:Mn,onMatchCase:()=>j(e=>({...e,matchCase:!e.matchCase})),onMode:()=>j(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Nn(1),onPrevious:()=>Nn(-1),onQuery:e=>j(t=>({...t,query:e})),onRegex:()=>j(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:A.query,regex:A.regex,total:de,onSelectMatches:q===`gallery`||q===`recycle`?()=>k(e=>e+1):void 0}),q===`files`?fn&&dn?(0,P.jsxs)(lb,{ref:pr,children:[(0,P.jsxs)(ub,{style:{flex:d},children:[(0,P.jsxs)(cb,{$active:Qe===`primary`,onPointerDown:()=>$e(`primary`),children:[(0,P.jsx)(ib,{"data-shortcut":qt(U.goBack),disabled:!_i,onClick:e=>{let t=K.index-1;t<0||(Gt(e)?tr(K.history[t]):er(K.id,K.history[t],t))},title:e(`Back`),type:`button`,children:(0,P.jsx)(ui,{})}),(0,P.jsx)(ib,{"data-shortcut":qt(U.goForward),disabled:!vi,onClick:e=>{let t=K.index+1;t>=K.history.length||(Gt(e)?tr(K.history[t]):er(K.id,K.history[t],t))},title:e(`Forward`),type:`button`,children:(0,P.jsx)(di,{})}),(0,P.jsx)(ib,{"data-shortcut":qt(U.goUp),disabled:!un,onClick:e=>{un&&(Gt(e)?tr(un):Qn(K.id,un))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(si,{})}),(0,P.jsx)(Ep,{focusToken:Qe===`primary`?Ie:void 0,onContextMenu:(e,t,n)=>lt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?tr(e):void Qn(K.id,e),path:J}),(0,P.jsx)(ib,{onClick:e=>hr(e,J,()=>void Qn(K.id,J,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(li,{})}),(0,P.jsx)(ib,{"data-shortcut":qt(U.find),onClick:An,title:e(`Search`),type:`button`,children:(0,P.jsx)(oi,{})}),dt.primary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(sb,{}),(0,P.jsx)(ib,{onClick:e=>yr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{})})]})]}),bi(K,!0),Qe===`primary`&&xi]}),(0,P.jsx)(db,{onDoubleClick:()=>f(.5),onPointerDown:mr,title:e(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(ub,{$enter:!0,style:{flex:1-d},children:[(0,P.jsxs)(cb,{$active:Qe===`secondary`,onPointerDown:()=>$e(`secondary`),children:[(0,P.jsx)(ib,{"data-shortcut":qt(U.goBack),disabled:dn.index<=0,onClick:e=>{let t=dn.index-1;t<0||(Gt(e)?tr(dn.history[t]):er(dn.id,dn.history[t],t))},title:e(`Back`),type:`button`,children:(0,P.jsx)(ui,{})}),(0,P.jsx)(ib,{"data-shortcut":qt(U.goForward),disabled:dn.index>=dn.history.length-1,onClick:e=>{let t=dn.index+1;t>=dn.history.length||(Gt(e)?tr(dn.history[t]):er(dn.id,dn.history[t],t))},title:e(`Forward`),type:`button`,children:(0,P.jsx)(di,{})}),(0,P.jsx)(ib,{"data-shortcut":qt(U.goUp),disabled:!mn,onClick:e=>{mn&&(Gt(e)?tr(mn):Qn(dn.id,mn))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(si,{})}),(0,P.jsx)(Ep,{focusToken:Qe===`secondary`?Ie:void 0,onContextMenu:(e,t,n)=>lt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?tr(e):void Qn(dn.id,e),path:pn}),(0,P.jsx)(ib,{onClick:e=>hr(e,pn,()=>void Qn(dn.id,pn,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(li,{})}),(0,P.jsx)(ib,{"data-shortcut":qt(U.find),onClick:An,title:e(`Search`),type:`button`,children:(0,P.jsx)(oi,{})}),dt.secondary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(sb,{}),(0,P.jsx)(ib,{onClick:e=>yr(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{})})]})]}),bi(dn,!1),Qe===`secondary`&&xi]}),(0,P.jsx)(Xo,{info:fr,onWidth:dr,open:He,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,width:We})]}):(0,P.jsxs)(pb,{children:[(0,P.jsxs)(mb,{children:[ji,(0,P.jsxs)(fb,{children:[bi(K,!0),xi]})]}),(0,P.jsx)(Xo,{info:qe,onWidth:dr,open:He,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,width:We})]}):q===`home`?(0,P.jsx)(gp,{drives:g,find:Mi,historyVersion:je,onSearchMatches:F,homePath:m.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:ri,onHistoryChanged:()=>Me(e=>e+1),onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:Te,onExtractArchive:(e,t)=>void Ei(e,t),settingsVersion:Pe,onOpen:cr,onLayoutChanged:Y,onPlacesChanged:h,onRecentCleared:ni,places:m,recent:fe,recentLimit:me,visibilityVersion:Re}):q===`settings`?(0,P.jsx)(ah,{appInfo:y,find:Mi,focusSection:ne,onSearchMatches:F,onSettingsChanged:Y,onOpenFolder:tr}):q===`gallery`?(0,P.jsx)(Jg,{confirmDelete:V?.confirmDelete??!1,find:Mi,onSearchMatches:F,openOnSingleClick:V?.openOnSingleClick??!1,onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:Te,onExtractArchive:(e,t)=>void Ei(e,t),shortcuts:U,showCheckboxes:V?.showCheckboxes??!0,selectMatchesToken:se,showDetails:He,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,view:_n}):(0,P.jsx)(Up,{find:Mi,onOpenLocation:cr,onShowDetails:()=>Ue(!0),platform:y?.platform,selectMatchesToken:se,showDetails:He,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1})]},q),(0,P.jsxs)(vb,{children:[(0,P.jsx)(`span`,{children:q===`files`&&K.listing?Zy(e,K.listing):``}),y?(0,P.jsxs)(hb,{children:[(0,P.jsxs)(`span`,{children:[`v`,y.version,` · `,y.platform]}),x?.available&&(0,P.jsxs)(gb,{onClick:()=>{re(`updates`),ar(`settings`)},title:e(`Version {version} is available.`,{version:x.latest}),type:`button`,children:[(0,P.jsx)(_b,{}),e(`Update available`)]})]}):(0,P.jsx)(`span`,{children:e(`browser preview`)})]})]})]}),(0,P.jsx)(ec,{clipboardItems:jt,clipboardMove:Nt,currentDirectory:q===`files`?ln:``,items:Ut,onAdd:e=>void Dr(e),onClear:jr,onClose:()=>zt(!1),onCopyToClipboard:e=>void Fr(e),onPosition:zr,onRemove:Or,onTransfer:Vr,position:rn,visible:Rt}),et&&(0,P.jsx)(lo,{creationOnly:!0,directory:et.directory,menu:{x:et.x,y:et.y,paths:[],background:!0},onClose:()=>tt(null),onCreateFile:e=>void br(e),onCreateFolder:e=>void br(null,e),shortcuts:U}),ot&&(0,P.jsx)(lo,{allowCompression:!0,directory:Jy(ot.path)??ot.path,menu:{x:ot.x,y:ot.y,paths:[ot.path]},onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:Te,onExtractArchive:(e,t)=>void Ei(e,t),onArchiveCreated:e=>{e&&nr(Jy(ot.path)??ot.path)},onClose:()=>lt(null),onCompressTo:(e,t)=>ut({paths:e,name:t}),onCopy:(e,t)=>void _t(e,t),onDelete:e=>void Ct(e,!1).then(()=>nr(Jy(ot.path)??ot.path)),onOpen:(e,t)=>t?tr(e):void Qn(K.id,e),onOpenFile:e=>void xe(e),onPaste:e=>void St(e).then(t=>{t&&nr(e)}),onRefresh:()=>nr(ot.path),shortcuts:U,target:{path:ot.path,isDirectory:!0}}),W&&(0,P.jsx)(Eo,{initialDirectory:Jy(ot?.path??J)??J,initialName:W.name,onCancel:()=>ut(null),onCompress:async e=>{let t=await Bt(W.paths,e);return!t.ok&&t.error&&Sa(t.error),t.ok}}),nt&&(0,P.jsx)(Za,{items:[{label:e(`Extract here`),onSelect:()=>void Oi(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void Oi(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void Oi(`auto`)}],onClose:()=>at(null),x:nt.x,y:nt.y}),Xt&&(0,P.jsx)(td,{delaySeconds:Xt.prompt.delaySeconds,hits:Xt.prompt.hits,onCancel:()=>{Xt.resolve(!1),Zt(null)},onConfirm:()=>{Xt.resolve(!0),Zt(null)},permanent:Xt.prompt.permanent},Xt.id),(0,P.jsx)(gd,{}),(0,P.jsx)(Cd,{}),o&&(0,P.jsx)(Ty,{code:o.code,deviceName:o.deviceName,onAccept:()=>{Dc(o.requestId,!0),s(null)},onReject:()=>{Dc(o.requestId,!1),s(null)}}),(0,P.jsx)(yy,{}),(0,P.jsx)(he,{})]})})}var $y=_.div`
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
    ${Ka}
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
    ${({$enter:e})=>e?Ya:``}
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
        ${Xa}
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
`;function yb({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:c,onSelect:u}){let d=L(),f=Kc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,E.useState)(e),[_,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(!0),[S,ee]=(0,E.useState)(null),[te,ne]=(0,E.useState)(()=>new Set),[re,C]=(0,E.useState)(a??[]),[w,T]=(0,E.useState)([]),[ae,D]=(0,E.useState)([]),[oe,O]=(0,E.useState)([]),[se,k]=(0,E.useState)([]),[A,j]=(0,E.useState)(``),[M,ce]=(0,E.useState)(m.length===0),[le,ue]=(0,E.useState)(`files`),[de,F]=(0,E.useState)(0),[I,R]=(0,E.useState)(vn),[z,fe]=(0,E.useState)(0),[pe,B]=(0,E.useState)(0),[me,he]=(0,E.useState)(0),[ge,_e]=(0,E.useState)(null),[V,be]=(0,E.useState)(null),[xe,Se]=(0,E.useState)(0),[Ce,we]=(0,E.useState)(null),[Te,Ee]=(0,E.useState)(ye.imageStripHeight);(0,E.useEffect)(()=>{Je().then(we,()=>we(null))},[]),(0,E.useEffect)(()=>{a?C(a):ke().then(C,()=>C([]))},[a]),(0,E.useEffect)(()=>{Ae().then(T,()=>T([])),ze().then(D,()=>D([]))},[]),(0,E.useEffect)(()=>{let e=!0;return x(!0),ee(null),ne(new Set),j(p?``:v(h)),H(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),j(p?``:v(t.path)),x(!1))},t=>{e&&(ee(t instanceof Error?t.message:String(t)),x(!1))}),()=>{e=!1}},[h,de,p]),(0,E.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),R(e=>({...e,open:!0})),fe(e=>e+1);return}if(e.key===`Escape`){I.open?(R(e=>({...e,open:!1,query:``})),B(0)):c();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Oe();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),je();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),R(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),fe(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ge()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Oe()):e.button===4&&(e.preventDefault(),je())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let De=e=>{let t=e.trim();t.length!==0&&l(t)!==l(h)&&(O(e=>[...e,h]),k([]),ue(`files`),g(t))},Oe=()=>{let e=oe.at(-1);e!==void 0&&(O(e=>e.slice(0,-1)),k(e=>[h,...e]),g(e))},je=()=>{let e=se[0];e!==void 0&&(k(e=>e.slice(1)),O(e=>[...e,h]),g(e))},Me=_?.path??h,U=_?.parent??(h?ie(h):null);(0,E.useEffect)(()=>{N.available&&Me&&N.send({type:`fs.watch`,payload:{paths:[Me],owner:`picker`}})},[Me]),(0,E.useEffect)(()=>{if(N.available&&Me)return N.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&l(t.data.path)===l(Me)&&H(Me,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));ne(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Me]);let Ne=(_?.entries??[]).filter(e=>e.isDirectory||p&&(M||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Pe=_?{..._,entries:Ne}:null,Fe=I.open&&I.query.length>0,Ie=(0,E.useMemo)(()=>Fe?Ne.filter(e=>Dn(e.name,I)).map(e=>e.fullPath):[],[Fe,Ne,I]);(0,E.useEffect)(()=>{B(0)},[I.query,I.matchCase,I.regex,_?.path]);let Le=Ie.length===0?-1:Math.min(pe,Ie.length-1),Re=(0,E.useMemo)(()=>({...I,currentPath:Le>=0?Ie[Le]:null}),[I,Le,Ie]),Be=Ce?.defaultView??ye,Ve=o??{mode:Be.mode,iconSize:Be.iconSize,gridSize:Be.gridSize,sort:`name`,sortDescending:!1,columns:Be.columns??[`type`,`size`,`modified`]},He=(s??Be.showImages)&&Ve.mode===`list`,Ue=A.trim(),We=Ue.length>0?xb(Ue)?Ue:bb(Me,Ue):null,Ge=()=>{if(b||S)return;let e=n?[...te]:[...te].slice(0,1);e.length>0?u(e):We!==null&&Ue!==v(Me)?u([We]):!p&&Me&&u([Me])},Ke=(0,E.useCallback)(e=>{ne(new Set(e)),j(e.length===1?v(e[0]):e.length===0&&!p?v(Me):``)},[Me,p]),qe=e=>{_?.entries.find(t=>t.fullPath===e)?.isDirectory?De(e):p&&u([e])},Ye=e=>j(e),Xe=async e=>{let t=ge;if(_e(null),!t||!Me)return;let n=e===null?await Tt(Me):await kt(Me,e);n.ok&&n.path!==null&&(R(e=>({...e,open:!1,query:``})),e!==null&&ce(!0),F(e=>e+1),window.setTimeout(()=>{be(n.path),Se(e=>e+1)},120))},Ze=()=>{R(e=>({...e,open:!0})),fe(e=>e+1)},Qe=e=>{B(t=>Ie.length===0?0:(t+e+Ie.length)%Ie.length)},$e=e=>(0,P.jsxs)(jb,{children:[(0,P.jsxs)(Mb,{children:[(0,P.jsx)(Nb,{children:d(p?`File name:`:`Folder:`)}),(0,P.jsx)(Pb,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ge())},spellCheck:!1,value:A}),p&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Nb,{children:d(`Files of type:`)}),(0,P.jsx)(po,{onChange:e=>ce(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:M?`all`:`supported`})]})]}),(0,P.jsxs)(Fb,{children:[(0,P.jsx)(Ib,{onClick:c,type:`button`,children:d(`Cancel`)}),(0,P.jsxs)(Ib,{$primary:!0,disabled:b||S!==null||p&&te.size===0&&Ue.length===0,onClick:Ge,type:`button`,children:[(0,P.jsx)(bi,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),et=(0,P.jsxs)(Cb,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,P.jsxs)(wb,{children:[(0,P.jsxs)(Tb,{children:[(0,P.jsx)(ri,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,P.jsx)(Eb,{onClick:c,title:d(`Cancel`),type:`button`,children:(0,P.jsx)(xi,{size:12})})]}),(0,P.jsxs)(Db,{children:[(0,P.jsx)(c_,{activeKind:le===`overview`?`home`:le===`gallery`?`gallery`:`files`,currentPath:Me,drives:w,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:re.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>De(e),onOpenView:e=>{e===`home`?(ne(new Set),j(p?``:v(Me)),ue(`overview`)):e===`gallery`&&p&&(ne(new Set),j(``),ue(`gallery`))},places:re,recent:ae,recentLimit:10}),(0,P.jsx)(Ob,{children:le===`overview`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(gp,{drives:w,historyVersion:0,homePath:re.find(e=>e.kind===`home`)?.path??``,onOpen:e=>De(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Ke,places:re,readOnly:!0,recent:ae,recentLimit:10,visibilityVersion:0}),$e(j)]}):le===`gallery`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Jg,{onPick:e=>u([e]),onSelectionChange:Ke,showCheckboxes:Ce?.showCheckboxes??!0,view:{...ve,columns:[]}}),$e(j)]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(kb,{children:[(0,P.jsx)(Ab,{disabled:oe.length===0,onClick:Oe,title:d(`Back`),type:`button`,children:(0,P.jsx)(ui,{})}),(0,P.jsx)(Ab,{disabled:se.length===0,onClick:je,title:d(`Forward`),type:`button`,children:(0,P.jsx)(di,{})}),(0,P.jsx)(Ab,{disabled:!U,onClick:()=>U&&De(U),title:d(`Up one level`),type:`button`,children:(0,P.jsx)(si,{})}),(0,P.jsx)(Ep,{onNavigate:De,path:Me}),(0,P.jsx)(Ab,{onClick:e=>_e({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,P.jsx)(li,{})}),(0,P.jsx)(Ab,{onClick:Ze,title:d(`Search`),type:`button`,children:(0,P.jsx)(oi,{})}),f.available&&(0,P.jsx)(Ab,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,P.jsx)(pa,{})})]}),I.open&&(0,P.jsx)(Nd,{current:Le,focusToken:z,matchCase:I.matchCase,mode:I.mode,onClose:()=>{R(e=>({...e,open:!1,query:``})),B(0)},onMatchCase:()=>R(e=>({...e,matchCase:!e.matchCase})),onMode:()=>R(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Qe(1),onPrevious:()=>Qe(-1),onQuery:e=>R(t=>({...t,query:e})),onRegex:()=>R(e=>({...e,regex:!e.regex})),query:I.query,regex:I.regex,total:Ie.length,onSelectMatches:()=>he(e=>e+1)}),(0,P.jsx)(ol,{allowBackgroundMenu:!0,confirmDelete:Ce?.confirmDelete??!1,enableShortcuts:!0,error:S,find:Re,selectMatchesToken:me,imageStripHeight:Te,loading:b,listing:Pe,onImageStripHeight:Ee,onOpen:qe,onOpenFile:qe,onRefresh:()=>F(e=>e+1),onSelectionChange:Ke,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:Ce?.openOnSingleClick??!1,refreshToken:de,pendingRename:V,pendingRenameToken:xe,showCheckboxes:Ce?.showCheckboxes??!0,showDetails:!1,showImages:He,singleSelect:!n,view:Ve}),$e(Ye)]})})]}),ge&&(0,P.jsx)(lo,{creationOnly:!0,directory:Me,menu:{x:ge.x,y:ge.y,paths:[],background:!0},onClose:()=>_e(null),onCreateFile:p?e=>void Xe(e):void 0,onCreateFolder:()=>void Xe(null),shortcuts:Ht})]});return i?et:(0,Pa.createPortal)((0,P.jsx)(Sb,{onPointerDown:e=>{e.target===e.currentTarget&&c()},children:et}),document.body)}function bb(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function xb(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Sb=_.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Ya}
`,Cb=_.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Fa}
    ${({$inline:e})=>e?``:Wa}
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
`;function Lb({mode:e,multiple:t,extensions:n,initial:r}){let i=L(),a=pe(),[o,s]=(0,E.useState)(null),[c,l]=(0,E.useState)({}),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=(0,E.useRef)(0);(0,E.useEffect)(()=>{N.send({type:`app.ready`})},[]),(0,E.useEffect)(()=>(_e(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>_e(null)),[]),(0,E.useEffect)(()=>{Je().then(e=>{s(e),ee(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??ye,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,P.jsxs)(Rb,{children:[(0,P.jsxs)(zb,{children:[(0,P.jsx)(Bb,{children:(0,P.jsx)(wi,{size:17})}),(0,P.jsx)(Vb,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,P.jsx)(Iv,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,P.jsx)(Hb,{children:(0,P.jsx)(Ub,{onClick:()=>N.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,P.jsx)(xi,{size:12})})})]}),(0,P.jsx)(Wb,{children:(0,P.jsx)(yb,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>N.send({type:`pick.cancel`}),onSelect:e=>N.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,P.jsx)(td,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,P.jsx)(gd,{}),(0,P.jsx)(he,{})]})}var Rb=_.div`
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
`,Gb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Gb);var Kb=document.getElementById(`root`),qb=new URLSearchParams(window.location.search),Jb=qb.get(`picker`),Yb=qb.get(`filter`)??``;Kb&&(0,ae.createRoot)(Kb).render((0,P.jsx)(E.StrictMode,{children:(0,P.jsx)(R,{children:Jb===`folder`||Jb===`file`?(0,P.jsx)(Lb,{extensions:Yb?Yb.split(`;`).filter(Boolean):[],initial:qb.get(`initial`)??``,mode:Jb,multiple:qb.get(`multiple`)===`1`}):(0,P.jsx)(Qy,{})})}));